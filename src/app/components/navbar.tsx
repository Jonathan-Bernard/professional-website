"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import Head from "next/head";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        event.target instanceof Element &&
        !event.target.closest(`.${styles.navBarContainer}`) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      <Head>
        <title>Développeur Web Lille | Création Sites & Applications</title>
        <meta
          name="description"
          content="Développeur web à Lille (59). Création de sites sur mesure, SEO, CMS et applications modernes. Contactez-moi pour donner vie à vos projets numériques !"
        />
        <meta
          name="keywords"
          content="développeur web Lille, création sites web, SEO, CMS, freelance développeur"
        />
        <meta property="og:title" content="Développeur Web Lille - John Dev" />
        <meta
          property="og:description"
          content="Création de sites web et applications sur mesure à Lille. Boostez votre présence en ligne grâce à mes services SEO, CMS et technologies modernes."
        />
        <meta property="og:image" content="https://john-dev.fr/fusee.svg" />
        <meta property="og:url" content="https://john-dev.fr" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://john-dev.fr/fusee.svg" />
        <link rel="canonical" href="https://john-dev.fr" />
        <link rel="preload" href="/fusee.svg" as="image" />
      </Head>
      <header className={styles.navBarContainer}>
        <Link href="/" passHref aria-label="Accueil">
          <Image
            className={styles.logo}
            src="/fusee.svg"
            alt="Logo John Dev"
            width={80}
            height={80}
            loading="eager"
          />
        </Link>
        <div className={styles.titleContainer}>
          <div className={styles.title} aria-label="Nom du site">
            JOHN
          </div>
          <span
            className={styles.subtitle}
            aria-label="Développeur web Lille"
            style={{
              fontSize: "3rem",
              fontWeight: "400",
            }}
          >
            Développeur Web & Applications - Lille (59)
          </span>
        </div>
        <button
          className={styles.burgerWrapper}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={toggleMenu}
          type="button"
        >
          <Hamburger
            label="Menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            toggled={isOpen}
          />
        </button>
        <nav
          className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}
          role="navigation"
        >
          <ul>
            <li>
              <Link href="/" passHref onClick={closeMenu} aria-label="Accueil">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/creations"
                passHref
                onClick={closeMenu}
                aria-label="Créations"
              >
                Créations
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                passHref
                onClick={closeMenu}
                aria-label="À propos"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                passHref
                onClick={closeMenu}
                aria-label="Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
