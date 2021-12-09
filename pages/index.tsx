import Head from 'next/head';
import { useState } from 'react';
import { Header } from '../components/Header';
import Nav from '../components/Nav';
import Servicos from '../components/Serviços';
import Sobre from '../components/Sobre';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Beniva</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center max-w-screen-xl w-screen flex-1 ">
        <Nav />
        <Header />
        <Sobre />
        <Servicos />
        <script
          async={true}
          defer={true}
          data-website-id="748b20ba-4a3f-45ee-823a-71282c1df8a3"
          src="https://stats.andreuzza.com/umami.js"
        ></script>
      </main>
    </div>
  );
}
