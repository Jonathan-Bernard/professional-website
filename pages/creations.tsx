import "../src/app/globals.css";
import NavBar from "../src/app/components/navbar";
import Footer from "../src/app/components/footer";
import Head from "next/head";
import styles from "./Creations.module.css";
import axios from "axios";
import { GetStaticProps } from "next";
import Image from "next/image";

interface TextChild {
  type: string;
  text: string;
}

interface Paragraph {
  type: string;
  children: TextChild[];
}

interface ImageFormats {
  large?: { url: string };
  medium?: { url: string };
  small?: { url: string };
  thumbnail?: { url: string };
}

interface ImageAttributes {
  formats: ImageFormats;
}

interface ImageData {
  data?: {
    attributes: ImageAttributes;
  };
  url?: string;
}

interface CreationAttributes {
  description: Paragraph[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  url: string;
  image: ImageData | null;
}

interface Creation {
  id: number;
  attributes: CreationAttributes;
}

interface CreationsProps {
  creations: Creation[];
}

const CreationPage: React.FC<CreationsProps> = ({ creations }) => {
  return (
    <>
      <Head>
        <title>Mes Créations - John Dev | Création de Sites Web et SEO</title>
        <meta
          name="description"
          content="Découvrez mes créations de sites web et applications sur mesure, optimisées pour le SEO, le CMS, et les technologies modernes. Contactez-moi pour vos projets numériques !"
        />
        <meta
          name="keywords"
          content="créations sites web, développeur web Lille, SEO, CMS, applications sur mesure"
        />
        <meta name="author" content="John Dev" />
        <meta property="og:title" content="Mes Créations - John Dev" />
        <meta
          property="og:description"
          content="Explorez mes projets de création de sites web et applications modernes à Lille. Optimisation SEO et solutions sur mesure incluses."
        />
        <meta property="og:image" content="https://john-dev.fr/preview.jpg" />
        <meta property="og:url" content="https://john-dev.fr/creations" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://john-dev.fr/preview.jpg" />
        <link rel="canonical" href="https://john-dev.fr/creations" />
      </Head>
      <NavBar />
      <div className={styles.horizontalbar}></div>
      <h1 className={styles.creationtitle}>
        Mes créations : Sites Web et Applications
      </h1>
      <div className={styles.creationWrapper}>
        {creations.length > 0 ? (
          creations.map((creation) => {
            const imageUrl =
              creation.attributes.image?.url || "/default-image.png";

            return (
              <div key={creation.id} className={styles.creationcontainer}>
                <a
                  href={creation.attributes.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`En savoir plus sur ${creation.attributes.title}`}
                >
                  <h2 className={styles.projects}>
                    {creation.attributes.title}
                  </h2>
                  <p>
                    {creation.attributes.description
                      .map((p) => p.children.map((c) => c.text).join(" "))
                      .join(" ")}
                  </p>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={imageUrl}
                      alt={`Projet : ${creation.attributes.title}`}
                      width={500}
                      height={300}
                      loading="lazy"
                      priority={false}
                      sizes="(max-width: 768px) 100vw, 500px"
                      style={{ objectFit: "cover" }}
                      onError={() => {
                        console.log(
                          `Erreur lors du chargement de l'image pour ${creation.attributes.title}`
                        );
                      }}
                    />
                  </div>
                </a>
              </div>
            );
          })
        ) : (
          <p className={styles.noCreations}>
            Aucune création disponible pour le moment. Revenez bientôt !
          </p>
        )}
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
      const imageUrl =
        item.attributes.image?.data?.attributes?.formats?.medium?.url ||
        item.attributes.image?.data?.attributes?.formats?.large?.url ||
        item.attributes.image?.data?.attributes?.formats?.small?.url ||
        "/default-image.png";

      let creationUrl = item.attributes.url || "";
      if (!/^https?:\/\//.test(creationUrl)) {
        creationUrl = `https://${creationUrl}`;
      }

      return {
        id: item.id,
        attributes: {
          ...item.attributes,
          image: {
            url: imageUrl,
          },
          url: creationUrl,
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
