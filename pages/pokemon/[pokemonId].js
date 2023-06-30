import styles from "@/styles/PokemonId.module.scss";

import Image from "next/image";

import { space } from "postcss/lib/list";

export async function getStaticProps(context) {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
}

export async function getStaticPaths() {
  const pokemons = 156;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const request = await fetch(`${api}/?limit=${pokemons}`);
  const data = await request.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default function Pokemon({ pokemon }) {
  return (
    <>
      <div className={styles.container}>
        <h1>{pokemon.name}</h1>
        <Image
          className={styles.img}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width="120"
          height="120"
          alt={pokemon.name}
        ></Image>
        <h3 className={styles.number}>
          Número: <span>#{pokemon.id} </span>
        </h3>

        <div className={styles.box_power}>
          <h3 className={styles.power}>
            Tipo:
            <div className={styles.dynamic}>
              {pokemon.types.map((item, index) => (
                <span
                  key={index}
                  className={`${styles.type} ${
                    styles[`type_${item.type.name}`]
                  } `}
                >
                  {item.type.name}
                </span>
              ))}
            </div>
          </h3>
        </div>

        <h4 className={styles.height}>
          Altura: <span>{pokemon.height * 10} cm</span>
        </h4>
        <h4 className={styles.weight}>
          Peso: <span>{pokemon.weight / 10} kg</span>
        </h4>
      </div>
    </>
  );
}
