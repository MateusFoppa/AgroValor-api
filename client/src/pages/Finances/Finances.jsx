import { Link } from "react-router-dom"
import SideBar from "../../components/SideBar/SideBar"


export default function Finances(){
  return(
    <div className="bg-slate-600 flex">
      <div className="h-screen">
      <SideBar />
      </div>
      <div className="flex-1 justify-center items-center h-screen">
        <div className="flex w-full bg-slate-800 h-16 justify-center items-center gap-9
         text-white font-bold fixed">
        <button className="hover:bg-slate-600 px-4 py-2 rounded-md font-semibold">
          <Link to={'/production'}>
            Produção
          </Link>
        </button>
        <span>|</span>
        <button className="hover:bg-slate-600 px-4 py-2 rounded-md font-semibold">
          <Link to={'/expense'}>
          Despesas
          </Link>
        </button>
        </div>
      <div className="flex h-full w-full items-center justify-center text-white">
        <h1>Balanço do lote selecionado</h1>
      </div>
      </div>
    </div>
  )
}
