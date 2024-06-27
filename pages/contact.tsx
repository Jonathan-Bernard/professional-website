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
        setStatus("E-mail envoyé avec succès!");
        setFormData({ name: "", firstname: "", email: "", message: "" });
      } else {
        setStatus(`Échec de l'envoi de l'e-mail : ${result.error}`);
      }
    } catch (error) {
      setLoading(false);
      setStatus(`Échec de l'envoi de l'e-mail : ${(error as Error).message}`);
    }
  };

  return (
    <>
      <Head>
        <title>
          Création de site web, Référencement, CMS, Technologies avancées
        </title>
        <meta
          name="Contactez-moi"
          content="Contactez-moi par téléphone ou e-mail pour tout renseignement ou demande de devis. Je vous répondrai dans les plus brefs délais !"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <div className={styles.horizontalbar}></div>
      <div className={styles.contactContainer}>
        <h1 className={styles.contacttitle}>Contact</h1>
        <p className={styles.contacttext}>
          Vous êtes intéressé par mes services, avez besoin de renseignements ou
          souhaitez obtenir un devis ? Vous pouvez me joindre au numéro de
          téléphone suivant : <a href="tel:0634387525">06.34.38.75.25</a>, ou
          compléter ce formulaire. Je vous répondrai dans les plus brefs délais
          !
        </p>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            {status && <p className={styles.statusMessage}>{status}</p>}
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="firstname"
                name="firstname"
                className={styles.input}
                placeholder="Prénom"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
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
