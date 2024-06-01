"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../NavBar.module.css";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

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
    <div
      className={styles.navBarContainer}
      style={{ display: "flex", alignItems: "center" }}
    >
      <Link href="/" passHref>
        <Image
          className={styles.logo}
          src="/rocket3.PNG"
          alt="logo"
          width={60}
          height={60}
        />
      </Link>
      <div>
        <h1 className={styles.name}>John</h1>
        <h2 className={styles.subtitle}>Développeur web et application</h2>
      </div>
      <div className={styles.burgerWrapper}>
        <Hamburger toggled={isOpen} toggle={toggleMenu} />
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <Link href="/" passHref onClick={closeMenu}>
            Accueil
          </Link>
          <Link href="/#creation-site-web" passHref onClick={closeMenu}>
            Services
          </Link>
          <Link href="/creations" passHref onClick={closeMenu}>
            Créations
          </Link>
          <Link href="/about" passHref onClick={closeMenu}>
            À Propos
          </Link>
          <Link href="/contact" passHref onClick={closeMenu}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
