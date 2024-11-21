import NavBar from "../src/app/components/navbar";
import Footer from "../src/app/components/footer";
import Head from "next/head";
import "../src/app/globals.css";
import styles from "./MentionsLegales.module.css";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions Légales - Développeur Web Freelance - John Dev</title>
        <meta
          name="description"
          content="Mentions légales de John Dev, développeur web freelance à Lille. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation du site."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <div className={styles.horizontalbar}></div>
      <main className={styles.mentionsContainer}>
        <h1 className={styles.mentionsTitle}>Mentions Légales</h1>
        <p className={styles.mentionsDate}>En vigueur au 11/10/2024</p>

        <section aria-labelledby="section-edition" className={styles.section}>
          <h2 id="section-edition" className={styles.mentionsSubtitle}>
            Édition du site
          </h2>
          <p>
            Le site <strong>john-dev.fr</strong> est édité par :
          </p>
          <ul>
            <li>
              <strong>Nom :</strong> Jonathan Bernard
            </li>
            <li>
              <strong>Adresse :</strong> 24 rue Geoffroy-Saint-Hilaire, 59000
              Lille
            </li>
            <li>
              <strong>Téléphone :</strong>{" "}
              <a href="tel:0634387525">06.34.38.75.25</a>
            </li>
            <li>
              <strong>Email :</strong>{" "}
              <a href="mailto:john.developpeur.web@gmail.com">
                john.developpeur.web@gmail.com
              </a>
            </li>
            <li>
              <strong>Statut :</strong> Auto-entrepreneur, immatriculé au RCS de
              Lille sous le numéro SIRET 849559091400032
            </li>
          </ul>
        </section>

        <section
          aria-labelledby="section-hebergement"
          className={styles.section}
        >
          <h2 id="section-hebergement" className={styles.mentionsSubtitle}>
            Hébergement
          </h2>
          <p>Le site est hébergé par :</p>
          <ul>
            <li>
              <strong>Nom :</strong> Vercel Inc
            </li>
            <li>
              <strong>Adresse :</strong>650 California St, San Francisco, CA
              94108, US
            </li>
          </ul>
        </section>

        <section aria-labelledby="section-donnees" className={styles.section}>
          <h2 id="section-donnees" className={styles.mentionsSubtitle}>
            Collecte de données personnelles
          </h2>
          <p>
            Ce site vitrine ne collecte aucune donnée personnelle. Aucun cookie
            tiers ni outil de suivi (comme Google Analytics) n&apos;est utilisé.
          </p>
          <p>
            Pour toute question relative à la vie privée ou aux mentions
            légales, vous pouvez contacter l&apos;éditeur par email à
            john.developpeur.web@gmail.com
            <a
              href="mailto:john.developpeur.web@gmail.com"
              aria-label="Envoyer un email à john.developpeur.web@gmail.com"
            >
              john.developpeur.web@gmail.com
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="section-propriete" className={styles.section}>
          <h2 id="section-propriete" className={styles.mentionsSubtitle}>
            Propriété intellectuelle
          </h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, graphismes,
            logos, icônes) sont la propriété exclusive de Jonathan Bernard, sauf
            mention contraire. Toute reproduction, représentation, modification,
            publication, adaptation de tout ou partie des éléments du site est
            interdite, sauf autorisation écrite préalable.
          </p>
        </section>

        <section
          aria-labelledby="section-responsabilite"
          className={styles.section}
        >
          <h2 id="section-responsabilite" className={styles.mentionsSubtitle}>
            Responsabilité
          </h2>
          <p>
            L’éditeur ne pourra être tenu responsable des dommages directs ou
            indirects causés au matériel de l’utilisateur lors de l’accès au
            site, ni des interruptions ou dysfonctionnements.
          </p>
          <p>
            L’utilisateur du site s’engage à accéder au site en utilisant un
            matériel récent, ne contenant pas de virus, et avec un navigateur de
            dernière génération mis à jour.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
