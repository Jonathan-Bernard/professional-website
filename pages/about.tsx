import NavBar from "../src/app/components/navbar";
import Footer from "../src/app/components/footer";
import Head from "next/head";
import "../src/app/globals.css";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>
          Création de site web, Référencement, CMS, Technologies avancées
        </title>
        <meta
          name="À propos de moi"
          content="Reconverti en développement web après une carrière de manager dans la restauration. Spécialisé en création de sites sur mesure, SEO, et CMS. Expert en technologies avancées comme React et Next.js pour des applications dynamiques et rapides."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <div className={styles.horizontalbar}></div>
      <div className={styles.aboutcontainer}>
        <h1 className={styles.abouttitle}>À propos de moi</h1>
        <br />
        <p>
          Après une carrière en tant que manager dans la restauration et ayant
          toujours été attiré par le web et les technologies informatiques,
          j&#39;ai décidé de me reconvertir professionnellement dans le
          développement web et d&#39;applications. Suite à une formation
          intensive à la Wild Code School, j&#39;ai choisi de devenir freelance
          pour offrir mes services de création de sites et d&#39;applications
          web.
        </p>
        <br />
        <p>
          Je suis spécialisé dans la création de sites web sur mesure, le
          référencement SEO, la conception de CMS pour des mises à jour faciles,
          et l&#39;utilisation des technologies web les plus avancées. Pour
          construire votre site, je choisis les technologies les plus adaptées,
          notamment React et Next.js, qui permettent de développer des
          applications dynamiques et rapides.
        </p>
        <br />
        <p>
          À titre d&#39;exemple, React est utilisé par des géants tels que
          Facebook, Instagram, Netflix, Airbnb et Uber. Quant à Next.js, il est
          choisi par des entreprises telles que TikTok, Twitch, Vercel,
          Ticketmaster, Starbucks et Audi.
        </p>
        <br />
        <p>
          Je serais ravi de vous accompagner dans la réalisation de votre projet
          !
        </p>
        <br />
      </div>
      <Footer />
    </>
  );
}
