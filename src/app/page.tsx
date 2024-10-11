"use client"; // Assure que ce fichier est traité côté client

import dynamic from "next/dynamic";
import Image from "next/image";
import Head from "next/head";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import styles from "./Home.module.css";

const NavBar = dynamic(() => import("./components/navbar"), { ssr: true });
const Footer = dynamic(() => import("./components/footer"), {
  ssr: true,
  loading: () => <p>Chargement du pied de page...</p>,
});

const Home: React.FC = () => {
  return (
    <ParallaxProvider>
      <Head>
        <title>
          Création de site web, Référencement, CMS, Technologies avancées
        </title>
        <meta
          name="John developpeur web"
          content="Création de site web sur mesure, référencement SEO, CMS pour mise à jour facile, technologies avancées React et Next.js pour des applications dynamiques et rapides. Contactez-moi pour concrétiser vos projets numériques !"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="/fonts/Montserrat-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.horizontalbar}></div>
        <h1 className={styles.title}>
          Transformez vos idées en réalité numérique !
        </h1>
        <section className={styles.container}>
          {[
            {
              title: "Création de sites web et applications",
              imageSrc: "/creation.jpg",
              alt: "Création de site web",
              description:
                "Découvrez mon expertise en création sur mesure de sites web et d'applications, conçus pour capturer l'essence unique de votre marque tout en offrant une expérience utilisateur exceptionnelle. Les designs sont à la fois esthétiques et fonctionnels, optimisés pour une compatibilité parfaite avec tous les appareils et plateformes.",
            },
            {
              title: "Référencement, SEO",
              imageSrc: "/seo.jpg",
              alt: "SEO",
              description:
                "Boostez votre présence en ligne et attirez davantage de visiteurs grâce à une stratégie SEO avancée. J'optimise votre site pour le référencement naturel afin de garantir une visibilité optimale dans les résultats de recherche, augmentant ainsi votre trafic qualifié et vos conversions.",
            },
            {
              title: "CMS pour mise à jour sans compétence",
              imageSrc: "/cms.jpg",
              alt: "CMS",
              description:
                "Gardez le contrôle total sur le contenu de votre site avec une solution CMS (content management system) facile à utiliser. Même sans compétences techniques, vous pouvez facilement mettre à jour votre site, ajouter des articles de blog, changer des photos, modifier un menu et plus encore, en toute autonomie.",
            },
            {
              title: "Technologies avancées",
              imageSrc: "/react.jpg",
              alt: "React",
              description:
                "J'utilise les technologies web les plus avancées et les plus adaptées pour construire votre site. Avec React et Next.js, je crée des applications dynamiques et rapides qui offrent une expérience web de haute qualité. Ces technologies sont utilisées par des géants tels que Facebook, Instagram, Netflix, Airbnb, et Uber.",
            },
          ].map((item, index) => (
            <Parallax key={index} speed={5} className={styles.subcontainer}>
              <h2 className={styles.subtitle}>{item.title}</h2>
              <Image
                className={styles.websiteImage}
                src={item.imageSrc}
                alt={item.alt}
                width={400}
                height={300}
              />
              <p className={styles.text}>{item.description}</p>
            </Parallax>
          ))}
        </section>
      </main>
      <Footer />
    </ParallaxProvider>
  );
};

export default Home;
