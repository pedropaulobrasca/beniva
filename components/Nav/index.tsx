import Head from 'next/head';

export default function Nav() {
  return (
    <nav className="w-full h-32 mt-3">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center m-2">
          <a href="/" className="font-extrabold ">
            {/* <img src="/logo.svg" alt="Logo" className="w-12 h-12 mr-4 bg-gray-50" /> */}
            <span className="">SERRALHERIA</span> BENIVA
          </a>
        </div>
        <ul className="flex items-center">
          <li className="mr-4">
            <a href="/" className="hover:font-bold">
              HOME
            </a>
          </li>
          <li className="mr-4">
            <a href="#empresa" className="hover:font-bold">
              EMPRESA
            </a>
          </li>
          <li className="mr-4">
            <a href="#servicos" className="hover:font-bold">
              SERVIÇOS
            </a>
          </li>
          <li className="mr-4">
            <a href="#contato" className="hover:font-bold">
              CONTATO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
