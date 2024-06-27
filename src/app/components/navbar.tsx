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
        <link rel="preload" href="/fusée.svg" as="image" />
      </Head>
      <header className={styles.navBarContainer}>
        <Link href="/" passHref aria-label="Accueil">
          <Image
            className={styles.logo}
            src="/fusée.svg"
            alt="logo"
            width={100}
            height={100}
            loading="eager"
          />
        </Link>
        <div className={styles.titleContainer}>
          <div className={styles.title}>JOHN</div>
          <div className={styles.subtitle}>
            Développeur web et application, Lille (59)
          </div>
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
                href="/#creation-site-web"
                passHref
                onClick={closeMenu}
                aria-label="Services"
              >
                Services
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
