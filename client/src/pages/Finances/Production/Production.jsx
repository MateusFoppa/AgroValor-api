import { ProductionProvider } from "../../../components/contexts/ProductionContext";
import TableListProduction from "../../../components/Production/TableList";
import SideBar from "../../../components/SideBar/SideBar";

export default function Production(){
  return(
    <div className="bg-slate-600 flex">
      <div className="h-screen">
      <SideBar />
      </div>
      <div className="flex h-screen mx-auto">
      <div className="flex h-full w-full items-center justify-center text-white">
      <ProductionProvider>
        <TableListProduction></TableListProduction>
        </ProductionProvider>
      </div>
      </div>
    </div>
  )
}
