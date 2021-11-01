import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/acessorios/pulseiras">Pulseiras</Link> <br />
      <Link href="/acessorios/colares">Colares / Chokers</Link>
      <br />
      <Link href="/acessorios/brincos">Brincos</Link>
      <br />
      <Link href="/acessorios/tornozeleiras">Tornozeleiras</Link>
      <br />
      <Link href="/acessorios/aneis">Anéis</Link>
      <br />
      <Link href="/acessorios/chaveiros">Chaveiros</Link>
    </div>
  );
}
