import styles from "@/styles/About.module.scss";

import Image from "next/image";

export default function About() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.box_text}>
          <h1>Sobre o Projeto</h1>
          <p>
            Meu projeto combina a potência do Next.js com a emocionante API de
            Pokémon. Construí uma aplicação web interativa e divertida que
            permite explorar detalhes fascinantes sobre os Pokémon, desde suas
            habilidades e estatísticas até suas evoluções e tipos.
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
