import SideBar from "../../components/SideBar/SideBar"
import Table from "../../components/TableList/Table"

export default function BatchList(){
  return(
    <div>
      <SideBar />
      <div className="mt-4 p-2">
      <Table></Table>
      </div>
    </div>
  )
}
