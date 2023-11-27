import { getShowUserProfile } from "../../services/api";
import { useEffect, useState } from "react";
import UpdateUser from "./UpdateUser";

export default function TableShowUser() {

  const [user, setUser] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const UserRequest = await getShowUserProfile()


        const requests = [UserRequest]

        console.log(requests)

        const [userResponse] = await Promise.all(requests)

        setUser(userResponse)
        console.log(userResponse)

      } catch (error) {
        console.error(error)
        setUser('')
      }
    })()
  }, [])

  return (
    <div className="flex p-4 justify-center items-center">
      <section className="p-3 sm:p-5 ml-4">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12 ml-4">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-3 flex-shrink-0">
              </div>
            </div>
            <div className="mx-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-4">Nome</th>
                    <th scope="col" className="px-4 py-3">Email</th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700">
                    <td scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user.name}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3 text-sm font-medium">
                      <UpdateUser value={user}></UpdateUser>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
