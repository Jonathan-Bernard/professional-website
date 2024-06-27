// components/footer.tsx
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Image
          src="/nuance.svg"
          alt="Décoration"
          width={500}
          height={300}
          className={styles.nuance}
        />
        <div className={styles.footerSection}>
          <div className={styles.contactContainer}>
            <h2>Contact</h2>
            <p>
              <strong>Adresse:</strong>{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=59000+Lille+Métropole"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lille, Nord (59)
              </a>
            </p>
            <p>
              <strong>Téléphone:</strong>{" "}
              <a href="tel:0634387525">06.34.38.75.25</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:john.developpeur.web@gmail.com">
                john.developpeur.web@gmail.com
              </a>
            </p>
          </div>
          <div className={styles.navContainer}>
            <h2>Navigation</h2>
            <Link href="/">Accueil</Link>
            <Link href="/#creation-site-web">Services</Link>
            <Link href="/creations">Créations</Link>
            <Link href="/about">À Propos</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className={styles.iconeReseauContainer}>
          <a
            href="https://www.linkedin.com/in/jonathan-bernard-250733290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={50}
              height={50}
              loading="lazy"
            />
          </a>
          <a
            href="https://www.instagram.com/john_dev_web/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={50}
              height={50}
              loading="lazy"
            />
          </a>
        </div>
        <p className={styles.copyRight}>Johndev © 2024 </p>
      </footer>
    </>
  );
}
