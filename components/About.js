import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <h1>Sobre o Projeto</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quae
          hic placeat, incidunt neque, aspernatur expedita repellendus natus ea
          veritatis laudantium, rem et harum unde. Minus facere laudantium
          repellendus modi.
        </p>

        <Image
          src="/images/charizard.png"
          width="40"
          height="40"
          alt="Pokémon Charizard"
        />
      </main>
    </>
  );
}
