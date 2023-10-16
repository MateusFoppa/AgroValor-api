import SideBar from "../../components/SideBar/SideBar copy"
import FormCrudProperty from "../../components/property/FormCrud"

export default function PropertyList(){
  return(
    <div className="bg-slate-600 flex">
      <div className=" h-screen">
      <SideBar />
      </div>
      <div className="flex w-full h-screen mx-auto">
      <FormCrudProperty></FormCrudProperty>
      </div>
    </div>
  )
}
