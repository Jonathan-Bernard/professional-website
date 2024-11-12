import "../src/app/globals.css";
import Image from "next/image";
import NavBar from "../src/app/components/navbar";
import Footer from "../src/app/components/footer";
import Head from "next/head";
import styles from "./Creations.module.css";
import axios from "axios";
import { GetStaticProps } from "next";

// Définition des types pour mieux gérer la réponse de l'API
interface TextChild {
  type: string;
  text: string;
}

interface Paragraph {
  type: string;
  children: TextChild[];
}

interface ImageAttributes {
  url: string;
}

interface ImageData {
  data?: {
    attributes: ImageAttributes;
  };
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
    image: ImageData | null;
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
          name="description"
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
            {creation.attributes.image?.data?.attributes?.url ? (
              <Image
                className={styles.projectsimg}
                src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${creation.attributes.image.data.attributes.url}`}
                alt={`Image de ${creation.attributes.title}`}
                width={500}
                height={300}
                quality={100}
                priority
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
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/creations?populate=*`;
    const response = await axios.get(apiUrl);

    console.log("API Response:", JSON.stringify(response.data, null, 2));

    const creations = response.data.data.map((item: any) => {
      const imageUrl = item.attributes.image?.data?.attributes?.url
        ? new URL(
            item.attributes.image.data.attributes.url,
            process.env.NEXT_PUBLIC_STRAPI_BASE_URL // Assurez-vous que cette variable est bien définie
          ).toString()
        : "/default-image.png"; // Valeur par défaut si pas d'image

      return {
        id: item.id,
        attributes: {
          ...item.attributes,
          image: item.attributes.image ? { url: imageUrl } : null,
        },
      };
    });

    return {
      props: {
        creations,
      },
      revalidate: 10, // Revalidation après 10 secondes
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
