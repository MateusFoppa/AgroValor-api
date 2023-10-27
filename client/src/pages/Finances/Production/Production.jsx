import { ProductionProvider } from "../../../components/contexts/ProductionContext";
import TableProductionList from "../../../components/Production/TableProductionList";
import SideBar from "../../../components/SideBar/SideBar";

export default function Production() {
  return (
    <div className="bg-slate-600 flex overflow-hidden">
      <div className="h-screen">
        <SideBar />
      </div>
      <div className="flex-1 justify-center items-center">
        <div className="flex h-full w-full items-center justify-center text-white">
          <ProductionProvider>
            <TableProductionList></TableProductionList>
          </ProductionProvider>
        </div>
      </div>
    </div>
  )
}
