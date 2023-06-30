import styles from "@/styles/Footer.module.scss"

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className={styles.container}>
        <Image
          src="/images/pokeball.png"
          width="40"
          height="40"
          alt="PokeMundi"
        />
        <h1>Poke<span>Mundi</span> © 2023</h1>
      </footer>
    </>
  );
}