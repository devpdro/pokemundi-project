export async function getStaticProps() {
  const pokemons = 154;
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
      <div>
        <h1>PokeMundi</h1>

        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
