import Image from "next/image";
import Styles from "../Footer.module.css";

export default function Footer() {
  return (
    <>
      <h2>Contact</h2>
      <div className={Styles.footerContainer}>
        <h3>Adresse</h3>
        <p>59000 Lille Métropole</p>
        <h3>Téléphone</h3>
        <p>06.34.38.75.25</p>
        <h3>Email</h3>
        <p>johnnyboy59000@gmail.com</p>
      </div>
    </>
  );
}
