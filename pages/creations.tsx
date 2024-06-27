import "../src/app/globals.css";
import Image from "next/image";
import NavBar from "../src/app/components/navbar";
import Footer from "../src/app/components/footer";
import Head from "next/head";
import styles from "./Creations.module.css";
import axios from "axios";
import { GetStaticProps } from "next";

interface TextChild {
  type: string;
  text: string;
}

interface Paragraph {
  type: string;
  children: TextChild[];
}

interface Creation {
  id: number;
  attributes: {
    description: Paragraph[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    url: string;
    image: { url: string } | null;
  };
}

interface CreationsProps {
  creations: Creation[];
}

const CreationPage: React.FC<CreationsProps> = ({ creations }) => {
  return (
    <>
      <Head>
        <title>
          Créations de site web, Référencement, CMS, Technologies avancées
        </title>
        <meta
          name="Mes créations"
          content="Explorez mes créations de sites web et applications pour particuliers et entreprises à Lille (59). Découvrez mes services de création de sites web, référencement, CMS et technologies avancées. Contactez-moi pour concrétiser vos projets numériques !"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <div className={styles.horizontalbar}></div>
      <h1 className={styles.creationtitle}>Mes créations</h1>
      <div className={styles.creationcontainer}>
        {creations.map((creation) => (
          <a
            key={creation.id}
            href={creation.attributes.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`En savoir plus sur ${creation.attributes.title}`}
          >
            <h2 className={styles.projects}>{creation.attributes.title}</h2>
            <p>
              {creation.attributes.description
                .map((p) => p.children.map((c) => c.text).join(""))
                .join("")}
            </p>
            {creation.attributes.image ? (
              <Image
                className={styles.projectsimg}
                src={creation.attributes.image.url}
                alt={`Image de ${creation.attributes.title}`}
                width={500}
                height={300}
                quality={100}
              />
            ) : (
              <div className={styles.noImage}>Pas d&apos;image disponible</div>
            )}
          </a>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default CreationPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const apiUrl = `${process.env.STRAPI_API_URL}/creations?populate=*`;
    const { data } = await axios.get(apiUrl);

    const creations = data.data.map((item: any) => {
      const imageUrl = item.attributes.image?.data[0]?.attributes.url
        ? `${process.env.STRAPI_BASE_URL}${item.attributes.image.data[0].attributes.url}`
        : "/default-image.png";

      return {
        id: item.id,
        attributes: {
          ...item.attributes,
          image: { url: imageUrl },
        },
      };
    });

    return {
      props: {
        creations,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Failed to fetch creations:", error);
    return {
      props: {
        creations: [],
      },
    };
  }
};
