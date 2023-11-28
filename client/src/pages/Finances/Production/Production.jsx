import { ProductionProvider } from "../../../components/contexts/ProductionContext";
import TableProductionList from "../../../components/Production/TableProductionList";
import SideBar from "../../../components/SideBar/SideBar";

export default function Production() {
  return (
    <div className="bg-slate-600 flex max-w-full h-screen overflow-hidden">
      <div className="h-screen block">
        <SideBar />
      </div>
      <div className="flex-1 justify-center items-center h-screen overflow-y-auto">
        <ProductionProvider>
          <TableProductionList></TableProductionList>
        </ProductionProvider>
      </div>
    </div>
  )
}
