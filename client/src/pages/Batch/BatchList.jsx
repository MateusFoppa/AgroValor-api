import TableBatchList from "../../components/Batch/TableBatchList"
import SideBar from "../../components/SideBar/SideBar"


export default function BatchList(){
  return(
    <div className="bg-slate-600 flex">
      <div className="h-screen">
      <SideBar />
      </div>
      <div className="flex h-screen mx-auto">
      <TableBatchList></TableBatchList>
      </div>
    </div>
  )
}
