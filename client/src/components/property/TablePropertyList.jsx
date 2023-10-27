import { useContext } from "react"
import { PropertyContext } from "../contexts/PropertyContext";
import CreatePropertyModal from "./CreatePropertyModel";
import UpdatePropertyModal from "./UpdatePropertyModal";
import DeletePropertyModal from "./DeletePropertyModal";
import { BatchContext } from "../contexts/BatchContext";

export default function TablePropertyList() {

  const { property, setPropertyState } = useContext(PropertyContext)
  const { setBatchState } = useContext(BatchContext)


  const handlerState = (data) => {
    console.log(JSON.stringify(data.name))
    localStorage.setItem('StateProperty', JSON.stringify(data));
    setPropertyState(JSON.parse(localStorage.getItem('StateProperty')))
    setBatchState(false);
  }


  return (
    <div className="flex p-4 justify-center items-center">
      <section className="p-3 sm:p-5 ml-4">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12 ml-4">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-3 flex-shrink-0">
                <CreatePropertyModal></CreatePropertyModal>
              </div>
            </div>
            <div className="mx-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                    <th scope="col" className="px-4 py-4">Nome</th>
                    <th scope="col" className="px-4 py-3">Cidade</th>
                    <th scope="col" className="px-4 py-3">Estado</th>
                    <th scope="col" className="px-4 py-3">Area Cultivada</th>
                    <th scope="col" className="px-4 py-3">Area Total</th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {property.length == 0 ?
                    <tr className="flex-1 mx-auto">
                      <td colSpan={"8"}>
                        <div className="w-full justify-center md:w-auto flex col-span-3 text-gray-500 p-5  font-bold rounded-md">
                          <span>Nenhuma Propriedade Adicionada á esse Usuário</span>
                        </div>
                      </td>
                    </tr>
                    : property.map((data) => (
                      <tr key={data.id} className="border-b dark:border-gray-700">
                        <td className="px-4 py-3">

                          <input onClick={() => { handlerState(data) }} type="radio" name="checbox"></input>
                        </td>
                        <td scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {data.name}</td>

                        <td className="px-4 py-3">{data.city}</td>
                        <td className="px-4 py-3">{data.state}</td>
                        <td className="px-4 py-3">{data.cultivated_area}</td>
                        <td className="px-4 py-3">{data.total_area}</td>

                        <td className="flex-1 m-0 p-3 justify-end">

                          <UpdatePropertyModal value={data}></UpdatePropertyModal>

                        </td>
                        <td className="flex-1 p-3">
                          <DeletePropertyModal value={data}></DeletePropertyModal>
                        </td>
                      </tr>
                    ))
                  }


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
