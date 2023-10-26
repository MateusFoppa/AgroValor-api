import { updateBatch } from "../../services/api";
import { useContext, useState } from "react";
import { BatchContext } from "../contexts/BatchContext";

export default function UpdateBatchModal(data){

  const [isModalUpdateOpen, setUpdateModalOpen] = useState(false);
  const [selectBatch, setSelectBatch] = useState("");

  const { propertyState } = useContext(BatchContext)

  const[name, setName] = useState("");
  const[activity, setActivity] = useState("");
  const[geographic_coordinates, setGeographicCoordinates] = useState("");

  function openUpdateModal(data) {
    setName(data.value.name);
    setActivity(data.value.activity);
    setGeographicCoordinates(geographic_coordinates)
    setSelectBatch(data.value.id);
    setUpdateModalOpen(true);
  }

  function closeUpdateModal() {
    setUpdateModalOpen(false);
  }

  const handlerUpdate = async () => {
    console.log(name,activity, geographic_coordinates)
    setUpdateModalOpen(false);
    const PropertyRequest = await updateBatch(selectBatch, propertyState.id,name,activity)
    console.log(PropertyRequest)
    window.location.reload();
  }

  return(
    <div className="flex items-center justify-center">
    <button type="button" onClick={() => {openUpdateModal(data)}} data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" className="flex w-full rounded-md p-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
      <svg className="w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      </svg>
    </button>
    {isModalUpdateOpen && (
      <div id="updateProductModal" tabIndex="-1" aria-hidden="true" className="flex bg-slate-800 bg-opacity-75 h-screen overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-screen mx-auto  md:inset-0 max-h-full">
          <div className="relative p-4 w-full max-w-2xl max-h-full">

              <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

                  <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Atualizar</h3>
                      <button type="button"  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={closeUpdateModal} data-modal-toggle="updateProductModal">
                          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Close modal</span>
                      </button>
                  </div>

                  <form>
                      <div className="grid gap-4 mb-4 sm:grid-cols-2">
                          <div>
                              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome da Propriedade</label>
                              <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nome"></input>
                          </div>
                          <div>
                              <label htmlFor="activity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Atividade Agrícola</label>
                              <input type="text" value={activity} onChange={(e) => setActivity(e.target.value)} name="activity" id="activity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Atividade do Lote"></input>
                          </div>

                      </div>
                      <div className="flex items-center space-x-4">
                          <button type="button" onClick={handlerUpdate} className="text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Salvar</button>
                          <button type="button" onClick={handlerUpdate} className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                              <svg className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              Delete
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      )}
      </div>
  )
}
