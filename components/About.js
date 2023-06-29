import styles from "@/styles/About.module.scss"

import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.box_text}>
          <h1>Sobre o Projeto</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quae
            hic placeat, incidunt neque, aspernatur expedita repellendus natus
            ea veritatis laudantium, rem et harum unde. Minus facere laudantium
            repellendus modi.
          </p>
        </div>

        <div className={styles.box_img}>
          <Image
            src="/images/charizard.png"
            width="400"
            height="400"
            alt="Pokémon Charizard"
          />
        </div>
      </main>
    </>
  );
}
