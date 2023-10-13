import SideBar from "../../components/SideBar/SideBar"
import Table from "../../components/TableList/Table"

export default function UserList(){
  return(
    <div className="bg-slate-600 grid grid-cols-7 h-full">
      <div className="col-span-1 h-full">
      <SideBar />
      </div>
      <div className="grid col-span-6 w-full h-screen mx-auto">
      <Table></Table>
      </div>
    </div>
  )
}
