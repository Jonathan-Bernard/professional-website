import NavBar from "../src/app/components/navbar";
import Footer from "../src/app/components/footer";
import Head from "next/head";
import "../src/app/globals.css";
import styles from "./About.module.css";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>À propos - Développeur Web Freelance à Lille | John Dev</title>
        <meta
          name="description"
          content="Découvrez mon parcours : ancien manager reconverti en développement web, spécialisé en création de sites sur mesure, SEO, et CMS. Technologies utilisées : React, Next.js pour des applications dynamiques."
        />
        <meta
          name="keywords"
          content="développeur web freelance Lille, création sites web, SEO, CMS, technologies modernes, React, Next.js"
        />
        <meta
          property="og:title"
          content="À propos de John Dev - Développeur Web à Lille"
        />
        <meta
          property="og:description"
          content="Ancien manager reconverti en développement web. Je crée des sites sur mesure et optimise votre présence en ligne avec les meilleures technologies comme React et Next.js."
        />
        <meta
          property="og:image"
          content="https://john-dev.fr/images/about-preview.jpg"
        />
        <meta property="og:url" content="https://john-dev.fr/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://john-dev.fr/images/about-preview.jpg"
        />
        <link rel="canonical" href="https://john-dev.fr/about" />
      </Head>
      <NavBar />
      <div className={styles.horizontalbar}></div>
      <main className={styles.aboutcontainer}>
        <h1 className={styles.abouttitle}>À propos de moi</h1>
        <section aria-labelledby="section-parcours" className={styles.section}>
          <h2 id="section-parcours" className={styles.subtitle}>
            Mon parcours
          </h2>
          <p>
            Après une carrière en tant que manager dans la restauration et ayant
            toujours été passionné par le web et les technologies, j’ai décidé
            de me reconvertir professionnellement dans le développement web.
          </p>
          <p>
            Suite à une formation intensive à la Wild Code School, j’ai choisi
            de devenir freelance pour offrir mes services de création de sites
            et d’applications web, avec une approche sur mesure et orientée
            résultats.
          </p>
        </section>

        <section
          aria-labelledby="section-specialisation"
          className={styles.section}
        >
          <h2 id="section-specialisation" className={styles.subtitle}>
            Mes spécialités
          </h2>
          <p>Je suis spécialisé dans :</p>
          <ul className={styles.specialitiesList}>
            <li>La création de sites web sur mesure</li>
            <li>L’optimisation pour le référencement naturel (SEO)</li>
            <li>La conception de CMS faciles à utiliser</li>
            <li>
              L’utilisation des technologies avancées comme React et Next.js
            </li>
          </ul>
          <p>
            Ces technologies permettent de développer des applications rapides,
            dynamiques, et performantes, adaptées aux besoins spécifiques de
            chaque client.
          </p>
        </section>

        <section
          aria-labelledby="section-technologies"
          className={styles.section}
        >
          <h2 id="section-technologies" className={styles.subtitle}>
            Technologies utilisées
          </h2>
          <p>Je privilégie les outils modernes et reconnus :</p>
          <ul className={styles.technologiesList}>
            <li>
              <strong>React :</strong> Utilisé par Facebook, Instagram, Netflix,
              Airbnb et bien d’autres géants du web.
            </li>
            <li>
              <strong>Next.js :</strong> Choisi par des entreprises comme
              TikTok, Twitch, Vercel, Starbucks et Audi.
            </li>
          </ul>
          <p>
            Ces technologies garantissent des performances optimales et une
            expérience utilisateur de haute qualité.
          </p>
        </section>

        <section aria-labelledby="section-contact" className={styles.section}>
          <h2 id="section-contact" className={styles.subtitle}>
            Travaillons ensemble !
          </h2>
          <p>
            Vous avez un projet en tête ? Que ce soit pour un site vitrine, une
            application complexe, ou l’optimisation de votre visibilité en
            ligne, je suis à votre écoute pour concrétiser vos idées.
          </p>
          <p>
            <Link
              href="/contact"
              className={styles.contactLink}
              aria-label="Contactez-moi"
            >
              Contactez-moi dès maintenant
            </Link>{" "}
            pour discuter de vos besoins.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
