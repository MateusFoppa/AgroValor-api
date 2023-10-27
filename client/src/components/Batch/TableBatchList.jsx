import { useContext } from "react";
import { BatchContext } from "../contexts/BatchContext";
import CreateBatchModal from "./CreateBatchModal";
import UpdateBatchModal from "./UpdateBatchModal";
import DeleteBatchModal from "./DeleteBatchModal";

export default function TableBatchList() {

  const { batch, setBatchState } = useContext(BatchContext)


  const handlerState = async (data) => {
    console.log(JSON.stringify(data.name))
    localStorage.setItem('StateBatch', JSON.stringify(data));
    setBatchState(JSON.parse(localStorage.getItem('StateBatch')))
  }

  return (
    <div className="flex p-4 justify-center items-center">
      <section className="p-3 sm:p-5 ml-4">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12 ml-4">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-3 flex-shrink-0">
                <CreateBatchModal></CreateBatchModal>
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
                    <th scope="col" className="px-4 py-3">Atividade</th>
                    <th scope="col" className="px-4 py-3">Coordenadas</th>

                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {batch.length == 0 ?
                    <tr className="flex-1 mx-auto">
                      <td colSpan={"5"}>
                        <div className="w-full md:w-auto flex col-span-3 text-gray-500 p-5  font-bold rounded-md">
                          <span>Nenhum Lote Adicionado á essa propriedade</span>
                        </div>
                      </td>
                    </tr>
                    : batch.map((data) => (
                      <tr key={data.id} className="border-b dark:border-gray-700">
                        <td className="px-4 py-3">
                          <input onClick={() => handlerState(data)} type="radio" name="checbox"></input>
                        </td>
                        <td scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {data.name}</td>
                        <td className="px-4 py-3">{data.activity}</td>
                        <td className="px-4 py-3">{data.geographic_coordinates}</td>


                        <td className="flex-1 m-0 p-3 justify-end">
                          <UpdateBatchModal value={data}></UpdateBatchModal>
                        </td>

                        <td className="flex-1 p-3">
                          <DeleteBatchModal value={data.id}></DeleteBatchModal>
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
