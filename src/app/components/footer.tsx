import Image from "next/image";
import Styles from "../Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerSection}>
        <h2>Contact</h2>
        <p>
          <strong>Adresse:</strong>{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=59000+Lille+Métropole"
            target="_blank"
            rel="noopener noreferrer"
          >
            59000 Lille Métropole
          </a>
        </p>
        <p>
          <strong>Téléphone:</strong>{" "}
          <a href="tel:0634387525">06.34.38.75.25</a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:johnnyboy59000@gmail.com">johnnyboy59000@gmail.com</a>
        </p>
      </div>

      <div className={Styles.footerSection}>
        <h2>Navigation</h2>
        <Link href="/">Accueil</Link>
        <Link href="/#creation-site-web">Services</Link>
        <Link href="/creations">Créations</Link>
        <Link href="/about">À Propos</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={Styles.footerSection}>
        <h2>Réseaux</h2>
        <div className={Styles.iconeReseauContainer}>
          <a
            href="https://www.linkedin.com/in/jonathan-bernard-250733290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/linkedin.png" alt="LinkedIn" width={50} height={50} />
          </a>
          <a
            href="https://www.instagram.com/johnnyboy59000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
      <p className={Styles.copyRight}>
        © 2024 John Développeur Web et Application. Tous droits réservés.
      </p>
    </footer>
  );
}
