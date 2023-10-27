import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";

export default function LandingPage() {
  return (
    <div className="h-screen overflow-x-hidden">
      <header>
        <div className="flex fixed bg-slate-800 w-full px-3 md:px-20 py-4">
          <div>
            <Logo></Logo>
          </div>
          <div className="flex justify-end flex-1 md:hidden text-white text-3xl">
            <i className="fas fa-bars"></i>
          </div>
          <div className="justify-end flex-1 items-center text-white font-bold hidden md:flex">
            <nav className="flex-1">
              <ul className="flex justify-end flex-1">
                <li className="px-4">
                  <Link to="/register" className="hover:text-hoverspt text-sm  hover:text-teal-200 text-zinc-400 font-bold">Contato</Link>
                </li>
                <li className="px-4">
                  <span className="border-r border-white"></span>
                </li>
                <li className="px-4">
                  <Link to="/register" className="hover:text-hoverspt text-sm  hover:text-teal-200 text-zinc-400 font-bold">Increva-se</Link>
                </li>
                <li className="px-4">
                  <Link to="/session" className="hover:text-hoverspt text-sm  hover:text-teal-200 text-zinc-400 font-bold">Log-in</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <div className="flex flex-col justify-center text-center bg-teal-200
		 bg-195% md:bg-175% text-teal-900 py-40 px-4">
          <h1 className="text-5xl md:text-7xl mb-10 font-bold max-w-4xl mx-auto">Conheça os números reais do seu negócio rural</h1>
          <p className="text-md md:text-lg mb-10">Controle de Despesas e produção de seus lotes agrícolas. Emissão de relatórios, e controle de documentos.</p>
          <Link to="/register" href="#" className="bg-teal-500 hover:bg-white text-teal-950 text-sm rounded-full px-10 py-3
			uppercase font-bold max-w-xl mx-auto tracking-widest duration-500">
            Increva-se no AgroValor
          </Link>
        </div>
      </main>
      <footer>
        <div className="grid grid-cols-1 md:grid-cols-6 bg-slate-800 text-white p-4">
          <div className="md:col-span-1 pt-10 md:pt-0">
            <a href="#">
              <Logo></Logo>
            </a>
          </div>
          <div className="md:col-span-1 pt-10 md:pt-4">
            <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">Empresa</h3>
            <ul>
              <li className="mb-5">
                <a href="#">Sobre</a>
              </li>
              <li className="mb-5">
                <a href="#">Empregos</a>
              </li>
              <li className="mb-5">
                <a href="#">For the Record</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1 pt-10 md:pt-4">
            <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">Comunidades</h3>
            <ul>
              <li className="mb-5">
                <a href="#">Para Artistas</a>
              </li>
              <li className="mb-5">
                <a href="#">Desenvolcedores</a>
              </li>
              <li className="mb-5">
                <a href="#">Investidores</a>
              </li>
              <li className="mb-5">
                <a href="#">Fornecedores</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1 pt-10 md:pt-4">
            <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">Links Úteis</h3>
            <ul>
              <li className="mb-5">
                <a href="#">Ajuda</a>
              </li>
              <li className="mb-5">
                <a href="#">Player da Web</a>
              </li>
              <li className="mb-5">
                <a href="#">Aplicativo móvel grátis</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 pt-10 md:pt-4">
            <ul className="flex md:justify-end">
              <li
                className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li
                className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
                <a href="#"><i className="fa-brands fa-github"></i></a>
              </li>
              <li
                className="flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2">
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4 mt-10">
            <ul>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <a href="#">Legal</a>
              </li>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <a href="#">Centro de Privacidade</a>
              </li>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <a href="#">Cookies</a>
              </li>
              <li className="inline-block text-xs text-gray-600 mr-4">
                <a href="#">Sobre anúncios</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 mt-10">
            <p className="flex justify-end text-gray-500 text-xs">&copy; 2023 AgroValor</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
