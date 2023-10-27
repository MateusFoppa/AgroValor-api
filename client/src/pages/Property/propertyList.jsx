import SideBar from "../../components/SideBar/SideBar"
import TablePropertyList from "../../components/property/TablePropertyList"

export default function PropertyList() {
  return (
    <div className="bg-slate-600 flex">
      <div className=" h-screen">
        <SideBar />
      </div>
      <div className="flex h-screen mx-auto">
        <TablePropertyList></TablePropertyList>
      </div>
    </div>
  )
}
