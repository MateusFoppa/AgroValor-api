import SideBar from "../../../components/SideBar/SideBar";


export default function Expences(){
  return(
    <div className="bg-slate-600 flex">
      <div className="h-screen">
      <SideBar />
      </div>
      <div className="flex h-screen mx-auto">
      <div className="flex h-full w-full items-center justify-center text-white">
        <h1>Lista de Despesas lote selecionado, botão mais</h1>
      </div>
      </div>
    </div>
  )
}
