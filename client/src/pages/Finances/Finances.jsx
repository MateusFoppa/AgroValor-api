import SideBar from "../../components/SideBar/SideBar"


export default function Finances() {
  return (
    <div className="bg-slate-600 flex max-w-full overflow-hidden">
      <div className="h-screen">
        <SideBar />
      </div>
      <div className="flex-1 justify-center items-center">
        <div className="flex h-full w-full items-center justify-center text-white">
          <h1>Balanço do lote selecionado</h1>
        </div>
      </div>
    </div>
  )
}
