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
      <div>
        <h1>{pokemon.name}</h1>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width="120"
          height="120"
          alt={pokemon.name}
        ></Image>
        <h3>Número: <span>#{pokemon.id} </span></h3>
        <h3>Tipo:{ pokemon.types.map((item, index) => (
            <span key={index} className={`${styles.type} ${styles[`type_${item.type.name}`]} `}>{item.type.name}</span>
        )) } </h3>

        <h4>Altura: {pokemon.height * 10} cm</h4>
        <h4>Peso: {pokemon.weight / 10} kg</h4>

      </div>
    </>
  );
}
