import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl bg-pink-300">
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
