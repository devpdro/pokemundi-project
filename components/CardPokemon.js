import styles from "@/styles/CardPokemon.module.scss";

import Link from "next/link";
import Image from "next/image";

export default function CardPokemon({ pokemon }) {
  return (
    <div className={styles.box_card}>
      <Image
        className={styles.img}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      ></Image>

      <p>#{pokemon.id}</p>
      <h1>{pokemon.name}</h1>
      <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
        Detalhes
      </Link>
    </div>
  );
}
