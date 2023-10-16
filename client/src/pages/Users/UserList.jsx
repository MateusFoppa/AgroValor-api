import SideBar from "../../components/SideBar/SideBar"
import Table from "../../components/TableList/Table"

export default function UserList(){
  return(
    <div className="bg-slate-600 grid grid-cols-5 h-screen">
      <div className="col-span-1 h-full flex-1">
      <SideBar />
      </div>
      <div className="grid col-span-4 w-full mx-auto">
      <Table></Table>
      </div>
    </div>
  )
}
