import NavBar from "../src/app/components/navbar";
import Footer from "../src/app/components/footer";
import Head from "next/head";
import "../src/app/globals.css";
import styles from "./MentionsLegales.module.css";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>
          Mentions Légales - Développeur Web Freelance - Jonathan Bernard
        </title>
        <meta
          name="Mentions Légales"
          content="Mentions Légales - Développeur Web Freelance - Jonathan Bernard"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <div className={styles.horizontalbar}></div>
      <div className={styles.mentionsContainer}>
        <h1 className={styles.mentionsTitle}>Mentions Légales</h1>
        <br />
        <p className={styles.mentionsText}>En vigueur au 11/10/2024</p>
        <p className={styles.mentionsText}>
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004
          pour la Confiance en l’économie numérique, il est porté à la
          connaissance des utilisateurs et visiteurs, ci-après l&apos;
          &quot;Utilisateur&quot;, du site john-dev.fr , ci-après le
          &quot;Site&quot;, les présentes mentions légales. La connexion et la
          navigation sur le Site par l’Utilisateur implique acceptation
          intégrale et sans réserve des présentes mentions légales. Ces
          dernières sont accessibles sur le Site à la rubrique &quot;Mentions
          légales&quot;.
        </p>
        <br />
        <h2 className={styles.mentionsSubtitle}>EDITION DU SITE</h2>
        <p className={styles.mentionsText}>
          L’édition et la direction de la publication du Site est assurée par
          Monsieur Jonathan Bernard, domicilié 24 rue Geoffroy-Saint-Hilaire,
          59000 Lille, dont le numéro de téléphone est 06.34.38.75.25, et
          l&apos;adresse e-mail john.developpeur.web@gmail.com. ci-après
          l&apos;&quot;Editeur&quot;
        </p>
        <br />
        <h2 className={styles.mentionsSubtitle}>HEBERGEUR</h2>
        <p className={styles.mentionsText}>
          L&apos;hébergeur du Site est la société OVHcloud, dont le siège social
          est situé au 2 Rue Kellermann, 59100 Roubaix.
        </p>
        <br />
        <h2 className={styles.mentionsSubtitle}>ACCES AU SITE</h2>
        <p className={styles.mentionsText}>
          Le Site est normalement accessible, à tout moment, à
          l&apos;Utilisateur. Toutefois, l&apos;Editeur pourra, à tout moment,
          suspendre, limiter ou interrompre le Site afin de procéder, notamment,
          à des mises à jour ou des modifications de son contenu. L&apos;Editeur
          ne pourra en aucun cas être tenu responsable des conséquences
          éventuelles de cette indisponibilité sur les activités de
          l&apos;Utilisateur. ci-après l&apos;&quot;Editeur&quot;.
        </p>
        <br />
        <h2 className={styles.mentionsSubtitle}>COLLECTE DES DONNEES</h2>
        <p className={styles.mentionsText}>
          Le Site assure à l&apos;Utilisateur une collecte et un traitement des
          données personnelles dans le respect de la vie privée conformément à
          la loi n°78-17 du 6 janvier 1978 relative à l&apos;informatique, aux
          fichiers aux libertés et dans le respect de la règlementation
          applicable en matière de traitement des données à caractère personnel
          conformément au règlement (UE) 2016/679 du Parlement européen et du
          Conseil du 27 avril 2016 (ci-après, ensemble, la &quot;Règlementation
          applicable en matière de protection des Données à caractère
          personnel&quot;). En vertu de la Règlementation applicable en matière
          de protection des Données à caractère personnel, l&apos;Utilisateur
          dispose d&apos;un droit d&apos;accès, de rectification, de suppression
          et d&apos;opposition de ses données personnelles. L&apos;Utilisateur
          peut exercer ce droit : Toute utilisation, reproduction, diffusion,
          commercialisation, modification de toute ou partie du Site, sans
          autorisation expresse de l’Editeur est prohibée et pourra entraîner
          des actions et poursuites judiciaires telles que prévues par la
          règlementation en vigueur.
        </p>
      </div>
      <Footer />
    </>
  );
}
