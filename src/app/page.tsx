import styles from "./Home.module.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.title}>
          {" "}
          Transformez vos idées en réalité numérique !
        </h1>
        <div className={styles.subcontainer}>
          <h2 className={styles.subtitle}>Création de site web</h2>{" "}
          <p className={styles.text}>
            Profitez d&#39;un design web sur mesure qui capte l&#39;essence de
            votre marque tout en offrant une expérience utilisateur
            exceptionnelle. Nos sites sont conçus pour être esthétiquement
            plaisants, fonctionnels, et optimisés pour tous les appareils et
            plateformes.
          </p>
        </div>
        <div className={styles.subcontainer}>
          <h2 className={styles.subtitle}>Référencement, SEO</h2>{" "}
          <p className={styles.text}>
            Augmentez votre visibilité en ligne et attirez plus de visiteurs
            avec nos stratégies SEO avancées. Nous optimisons votre site pour le
            référencement afin de vous assurer une place en tête des résultats
            des moteurs de recherche, ce qui augmente votre trafic et vos
            conversions.
          </p>
        </div>
        <div className={styles.subcontainer}>
          <h2 className={styles.subtitle}>
            CMS pour mise à jour sans compétence
          </h2>{" "}
          <p className={styles.text}>
            Gardez le contrôle total sur le contenu de votre site avec notre
            solution CMS facile à utiliser. Même sans compétences techniques,
            vous pouvez facilement mettre à jour votre site, ajouter des
            articles de blog, changer des photos, et plus encore, en toute
            autonomie.
          </p>
        </div>
        <div className={styles.subcontainer}>
          <h2 className={styles.subtitle}>Technologies utilisées</h2>{" "}
          <p className={styles.text}>
            Nous utilisons les technologies web les plus avancées et les plus
            adaptées pour construire votre site. De React et Next.js pour des
            applications dynamiques et rapides à WordPress pour des solutions de
            gestion de contenu faciles à gérer, nous choisissons les outils qui
            correspondent le mieux à vos besoins spécifiques.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
