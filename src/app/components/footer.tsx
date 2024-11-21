import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/nuance.svg"
        alt="Décoration graphique du footer"
        width={500}
        height={300}
        className={styles.nuance}
        loading="lazy"
      />
      <div className={styles.footerSection}>
        <address className={styles.contactContainer} aria-label="Contact">
          <h2>Contact</h2>
          <p>
            <strong>Adresse:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/John-dev/@50.6228479,3.0626101,17z/data=!3m1!4b1!4m6!3m5!1s0x47c2d59729de662f:0x50de1c885e3d4b22!8m2!3d50.6228479!4d3.0626101!16s%2Fg%2F11w1r8yxd7?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adresse sur Google Maps"
            >
              24 rue Geoffroy-Saint-Hilaire, 59000 Lille
            </a>
          </p>
          <p>
            <strong>Téléphone:</strong>{" "}
            <a href="tel:0634387525" aria-label="Téléphone 06.34.38.75.25">
              06.34.38.75.25
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:john.developpeur.web@gmail.com"
              aria-label="Envoyer un email à john.developpeur.web@gmail.com"
            >
              john.developpeur.web@gmail.com
            </a>
          </p>
        </address>
        <nav className={styles.navContainer} aria-label="Navigation du site">
          <h2>Navigation</h2>
          <ul className={styles.navList}>
            <li>
              <Link href="/" aria-label="Accueil">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/creations" aria-label="Voir mes créations">
                Créations
              </Link>
            </li>
            <li>
              <Link href="/about" aria-label="À propos de moi">
                À Propos
              </Link>
            </li>
            <li>
              <Link href="/contact" aria-label="Page de contact">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/MentionsLegales" aria-label="Mentions légales">
                Mentions Légales
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={styles.iconeReseauContainer}
        aria-label="Liens vers mes réseaux sociaux"
      >
        <a
          href="https://www.linkedin.com/in/jonathan-bernard-250733290/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil LinkedIn"
        >
          <Image
            src="/linkedin.png"
            alt="Icône LinkedIn"
            width={50}
            height={50}
            loading="lazy"
          />
        </a>
        <a
          href="https://www.instagram.com/john_dev_web/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil Instagram"
        >
          <Image
            src="/instagram.png"
            alt="Icône Instagram"
            width={50}
            height={50}
            loading="lazy"
          />
        </a>
      </div>
      <p className={styles.copyRight}>
        <small>Johndev © {new Date().getFullYear()}</small>
      </p>
    </footer>
  );
}
