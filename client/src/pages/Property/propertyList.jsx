import SideBar from "../../components/SideBar/SideBar"
import FormCrudProperty from "../../components/property/FormCrud"

export default function PropertyList(){
  return(
    <div>
      <SideBar />
      <div className="mt-4 p-2">
      <FormCrudProperty></FormCrudProperty>
      </div>
    </div>
  )
}
