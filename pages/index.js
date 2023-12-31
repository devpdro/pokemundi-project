import CardPokemon from "@/components/CardPokemon";

import styles from "@/styles/Home.module.scss";

import Head from "next/head";
import Image from "next/image";

export async function getStaticProps() {
  const pokemons = 156;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const request = await fetch(`${api}/?limit=${pokemons}`);
  const data = await request.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <title>PokeMundi</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.box_title}>
          <h1>
            <span>Poke</span>Mundi
          </h1>
          <Image
            src="/images/pokeball.png"
            width="40"
            height="40"
            alt="PokeMundi"
          />
        </div>

        <ul>
          {pokemons.map((pokemon) => (
            <CardPokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    </>
  );
}
