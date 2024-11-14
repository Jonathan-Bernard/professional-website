import "../src/app/globals.css";
import NavBar from "../src/app/components/navbar";
import Footer from "../src/app/components/footer";
import Head from "next/head";
import styles from "./Creations.module.css";
import axios from "axios";
import { GetStaticProps } from "next";
import Image from "next/image"; // Importation de la balise Image

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

      <div className={styles.creationWrapper}>
        {creations.map((creation) => {
          const imageUrl =
            creation.attributes.image?.url || "/default-image.png";

          // Affichage de l'URL de l'image pour le débogage

          console.log("Processed Image URL:", imageUrl);
          console.log("Processed Creation URL:", creation.attributes.url);
          return (
            <div key={creation.id} className={styles.creationcontainer}>
              <a
                href={creation.attributes.url} // Utilisation directe de l'URL sans modification
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`En savoir plus sur ${creation.attributes.title}`}
              >
                <h2 className={styles.projects}>{creation.attributes.title}</h2>
                <p>
                  {creation.attributes.description
                    .map((p) => p.children.map((c) => c.text).join(" "))
                    .join(" ")}
                </p>
                <div className={styles.imageWrapper}>
                  <Image
                    src={imageUrl}
                    alt={creation.attributes.title}
                    width={500}
                    height={300}
                    onError={(e) => {
                      e.currentTarget.src = "/default-image.png";
                      console.log("Erreur lors du chargement de l'image");
                    }}
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </a>
            </div>
          );
        })}
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
      // Définir l'URL de l'image depuis la réponse de l'API
      const imageUrl =
        item.attributes.image?.data?.attributes?.formats?.medium?.url ||
        item.attributes.image?.data?.attributes?.formats?.large?.url ||
        item.attributes.image?.data?.attributes?.formats?.small?.url ||
        "/default-image.png"; // URL par défaut si aucune image n'est présente

      // Vérifier et s'assurer que l'URL commence par "http://" ou "https://"
      let creationUrl = item.attributes.url || ""; // L'URL complète définie dans Strapi

      if (!/^https?:\/\//.test(creationUrl)) {
        // Ajouter un protocole si l'URL ne commence pas par http:// ou https://
        creationUrl = `https://${creationUrl}`;
      }

      console.log("Processed Image URL:", imageUrl); // Log pour vérifier l'URL
      console.log("Processed Creation URL:", creationUrl); // Log pour vérifier l'URL

      return {
        id: item.id,
        attributes: {
          ...item.attributes,
          image: {
            url: imageUrl, // Ajouter l'URL de l'image ici
          },
          url: creationUrl, // Utiliser directement l'URL sans modification
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
        creations: [], // Retourner une liste vide en cas d'erreur
      },
    };
  }
};
