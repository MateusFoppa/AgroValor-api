import FormCrudBatch from "../../components/Batch/FormCrudBatch"
import SideBar from "../../components/SideBar/SideBar"


export default function BatchList(){
  return(
    <div className="bg-slate-600 flex">
      <div className="h-screen">
      <SideBar />
      </div>
      <div className="flex h-screen mx-auto">
      <FormCrudBatch></FormCrudBatch>
      </div>
    </div>
  )
}
