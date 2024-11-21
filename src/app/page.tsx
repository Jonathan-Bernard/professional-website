"use client";

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
        <title>John Dev - Création de sites web à Lille | SEO & CMS</title>
        <meta
          name="description"
          content="Développeur web freelance à Lille. Création de sites web sur mesure, SEO et applications modernes avec React et Next.js."
        />
        <meta
          name="keywords"
          content="développeur web Lille, création de sites, SEO, CMS, applications sur mesure, React, Next.js"
        />
        <meta name="author" content="John Dev" />
        <meta
          property="og:title"
          content="John Dev - Développeur web à Lille"
        />
        <meta
          property="og:description"
          content="Spécialiste en création de sites web sur mesure et optimisation SEO à Lille."
        />
        <meta property="og:image" content="https://john-dev.fr/preview.jpg" />
        <meta property="og:url" content="https://john-dev.fr" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://john-dev.fr/preview.jpg" />
        <link rel="canonical" href="https://john-dev.fr" />
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
          Développeur Web à Lille : Création de Sites et Applications sur Mesure
        </h1>
        <section className={styles.container}>
          {[
            {
              title: "Création de Sites Web et Applications à Lille",
              imageSrc: "/creation.jpg",
              alt: "Création de site web",
              description:
                "Découvrez mon expertise en création sur mesure de sites web et d'applications, conçus pour capturer l'essence unique de votre marque tout en offrant une expérience utilisateur exceptionnelle.",
            },
            {
              title:
                "Référencement Naturel (SEO) : Boostez Votre Visibilité en Ligne",
              imageSrc: "/seo.jpg",
              alt: "SEO",
              description:
                "Boostez votre présence en ligne et attirez davantage de visiteurs grâce à une stratégie SEO avancée. J'optimise votre site pour le référencement naturel afin de garantir une visibilité optimale dans les résultats de recherche.",
            },
            {
              title:
                "CMS Facile à Utiliser pour une Gestion Autonome de Votre Site",
              imageSrc: "/cms.jpg",
              alt: "CMS",
              description:
                "Gardez le contrôle total sur le contenu de votre site avec une solution CMS facile à utiliser. Même sans compétences techniques, vous pouvez facilement mettre à jour votre site.",
            },
            {
              title:
                "Technologies Modernes : React et Next.js pour des Performances Optimales",
              imageSrc: "/react.jpg",
              alt: "React",
              description:
                "J'utilise les technologies web les plus avancées pour construire votre site. Avec React et Next.js, je crée des applications dynamiques et rapides qui offrent une expérience web de haute qualité.",
            },
          ].map((item, index) => (
            <Parallax key={index} speed={5} className={styles.subcontainer}>
              <h2 className={styles.subtitle}>{item.title}</h2>
              <Image
                className={styles.websiteImage}
                src={item.imageSrc}
                alt={`Illustration : ${item.alt}`}
                width={400}
                height={300}
                priority={index === 0}
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
