import Head from 'next/head';
import { useState } from 'react';
import { Contato } from '../components/Contato';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Servicos } from '../components/Serviços';
import { Sobre } from '../components/Sobre';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Beniva</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Header />
      <Sobre />
      <Servicos />
      <Contato />
      <Footer />
      <script
        async={true}
        defer={true}
        data-website-id="748b20ba-4a3f-45ee-823a-71282c1df8a3"
        src="https://stats.andreuzza.com/umami.js"
      ></script>
    </>
  );
}
