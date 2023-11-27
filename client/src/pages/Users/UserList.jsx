import TableShowUser from "../../components/User/ShowUser"
import SideBar from "../../components/SideBar/SideBar"

export default function UserList() {
  return (
    <div className="bg-slate-600 flex">
      <div className=" h-screen">
        <SideBar />
      </div>
      <div className="flex h-screen mx-auto">
        <div className="flex h-full w-full items-center justify-center text-white">
          <TableShowUser></TableShowUser>
        </div>
      </div>
    </div>
  )
}
