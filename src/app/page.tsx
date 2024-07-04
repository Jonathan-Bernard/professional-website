// pages/index.tsx
import dynamic from "next/dynamic";
import Image from "next/image";
import Head from "next/head";
import styles from "./Home.module.css";

const NavBar = dynamic(() => import("./components/navbar"), { ssr: true });
const Footer = dynamic(() => import("./components/footer"), {
  ssr: true,
  loading: () => <p>Chargement du pied de page...</p>,
});

const Home: React.FC = () => {
  return (
    <>
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
          <article className={styles.subcontainer}>
            <h2 className={styles.subtitle}>
              Création de sites web et applications
            </h2>
            <Image
              className={styles.websiteImage}
              src="/creation.jpg"
              alt="Création de site web"
              width={400}
              height={300}
            />
            <p className={styles.text}>
              Découvrez mon expertise en{" "}
              <b>création sur mesure de sites web et d&apos;applications</b>,
              conçus pour capturer l&apos;essence unique de votre marque tout en
              offrant une expérience utilisateur exceptionnelle. Les designs
              sont à la fois <b>esthétiques et fonctionnels</b>, optimisés pour
              une compatibilité parfaite avec tous les appareils et plateformes.
            </p>
          </article>
          <article className={styles.subcontainer}>
            <h2 className={styles.subtitle}>Référencement, SEO</h2>
            <Image
              className={styles.websiteImage}
              src="/seo.jpg"
              alt="seo"
              width={400}
              height={300}
              loading="lazy"
            />
            <p className={styles.text}>
              Boostez votre présence en ligne et attirez davantage de visiteurs
              grâce à une stratégie <b>SEO</b> avancée. J&apos;optimise votre
              site pour le <b>référencement</b> naturel afin de garantir une
              visibilité optimale dans les résultats de recherche, augmentant
              ainsi votre trafic qualifié et vos conversions.
            </p>
          </article>
          <article className={styles.subcontainer}>
            <h2 className={styles.subtitle}>
              CMS pour mise à jour sans compétence
            </h2>
            <Image
              className={styles.websiteImage}
              src="/cms.jpg"
              alt="cms"
              width={400}
              height={300}
              loading="lazy"
            />
            <p className={styles.text}>
              Gardez le contrôle total sur le contenu de votre site avec une
              solution <b>CMS (content management system)</b> facile à utiliser.
              Même sans compétences techniques, vous pouvez facilement mettre à
              jour votre site, ajouter des articles de blog, changer des photos,
              modifier un menu et plus encore, en toute autonomie.
            </p>
          </article>
          <article className={styles.subcontainer}>
            <h2 className={styles.subtitle}>Technologies avancées</h2>
            <Image
              className={styles.websiteImage}
              src="/react.jpg"
              alt="react"
              width={400}
              height={300}
              loading="lazy"
            />
            <p className={styles.text}>
              J&apos;utilise les <b>technologies</b> web les plus avancées et
              les plus adaptées pour construire votre site. Avec{" "}
              <b>React et Next.js</b>, je crée des applications dynamiques et
              rapides qui offrent une expérience web de haute qualité. Ces
              technologies sont utilisées par des géants tels que Facebook,
              Instagram, Netflix, Airbnb, et Uber.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
