import styles from '@/styles/NavBar.module.scss'

import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className={styles}>
        <div className="bg-orange-500">
          <Link href="/">Logo</Link>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Sobre</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
