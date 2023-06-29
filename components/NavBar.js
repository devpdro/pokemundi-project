import styles from "@/styles/NavBar.module.scss";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/images/pokeball.png"
            width="40"
            height="40"
            alt="PokeMundi"
          />
          <h1>PokeMundi</h1>
        </div>
        <ul className={styles.link_items}>
          <li>
            <Link href="/">
              Início
            </Link>
          </li>
          <li>
            <Link href="/">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
