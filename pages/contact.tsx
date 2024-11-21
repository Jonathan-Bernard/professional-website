import React, { useState, ChangeEvent, FormEvent } from "react";
import Footer from "../src/app/components/footer";
import NavBar from "../src/app/components/navbar";
import Head from "next/head";
import "../src/app/globals.css";
import styles from "./Contact.module.css";

interface FormData {
  name: string;
  firstname: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    firstname: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        setStatus("E-mail envoyé avec succès !");
        setFormData({ name: "", firstname: "", email: "", message: "" });
      } else {
        setStatus(`Échec de l'envoi : ${result.error || "Erreur inconnue"}`);
      }
    } catch (error) {
      setLoading(false);
      setStatus(`Échec de l'envoi : ${(error as Error).message}`);
    }
  };

  return (
    <>
      <Head>
        <title>
          Contact - John Dev | Création de Sites Web et Applications
        </title>
        <meta
          name="description"
          content="Contactez-moi pour toute question ou demande de devis. Je suis disponible pour vos projets de création de sites web, applications, SEO et CMS."
        />
        <meta
          name="keywords"
          content="contact développeur web Lille, création sites web Lille, devis SEO, CMS, applications"
        />
        <meta name="author" content="John Dev" />
        <meta property="og:title" content="Contact - John Dev" />
        <meta
          property="og:description"
          content="Besoin d'un développeur web ? Contactez-moi pour vos projets numériques."
        />
        <meta
          property="og:image"
          content="https://john-dev.fr/contact-preview.svg"
        />
        <meta property="og:url" content="https://john-dev.fr/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://john-dev.fr/contact-preview.svg"
        />
        <link rel="canonical" href="https://john-dev.fr/contact" />
      </Head>
      <NavBar />
      <div className={styles.horizontalbar}></div>
      <div className={styles.contactContainer}>
        <h1 className={styles.contacttitle}>Contactez-moi</h1>
        <p className={styles.contacttext}>
          Vous êtes intéressé par mes services, avez besoin de renseignements ou
          souhaitez obtenir un devis ? Vous pouvez me joindre au numéro suivant
          : <a href="tel:+33634387525">06.34.38.75.25</a>, ou compléter ce
          formulaire. Je vous répondrai dans les plus brefs délais !
        </p>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} aria-label="Formulaire de contact">
            {status && <p className={styles.statusMessage}>{status}</p>}
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
              <label htmlFor="firstname" className={styles.label}>
                Prénom
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className={styles.input}
                placeholder="Votre prénom"
                value={formData.firstname}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="Votre adresse email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
            ></textarea>
            <input
              type="submit"
              value={loading ? "Envoi en cours..." : "Envoyer"}
              className={styles.submitButton}
              disabled={loading}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
