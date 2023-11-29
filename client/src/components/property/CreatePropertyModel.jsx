import { createPropertys } from "../../services/api";
import { useContext, useState } from "react";
import { PropertyContext } from "../contexts/PropertyContext";
import { toast } from 'react-toastify';

export default function CreatePropertyModal() {

  const [name, setName] = useState("");
  const [total_area, setTotalArea] = useState("");
  const [cultivated_area, setCultivatedArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [isModalCreateOpen, setCreateModalOpen] = useState(false);

  const { setUpdate } = useContext(PropertyContext)


  function openCreateModal() {
    setCreateModalOpen(true);

  }

  function closeCreateModal() {
    setCreateModalOpen(false);
  }

  const handlerCreate = async () => {
    try {
      const PropertyRequest = await createPropertys(name, state, cultivated_area, total_area, city)
      setUpdate(PropertyRequest);
      toast.success('Propriedade criada com sucesso!');
      setCreateModalOpen(false);
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <button onClick={openCreateModal} type="button" id="createProductModalButton" data-modal-target="createProductModal" data-modal-toggle="createProductModal" className="flex items-center justify-center text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 ">
        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
        </svg>
        Adicionar Propriedade
      </button>
      {isModalCreateOpen && (
        <div id="createProductModal" tabIndex="-1" aria-hidden="true" className="flex bg-slate-800 bg-opacity-75 h-screen overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-screen mx-auto  md:inset-0 max-h-full">
          <div className="relative p-4 w-full max-w-2xl max-h-full">

            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Adicionar Propriedade</h3>
                <button type="button" onClick={closeCreateModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
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
                    <label htmlFor="cultivated" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area Cultivada</label>
                    <input type="number" value={cultivated_area} onChange={(e) => setCultivatedArea(e.target.value)} name="cultivated" id="cultivated" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Número de ha"></input>
                  </div>
                  <div>
                    <label htmlFor="areatotal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area Total</label>
                    <input type="number" name="areatotal" id="areatotal" value={total_area} onChange={(e) => setTotalArea(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Número de ha"></input>
                  </div>
                  <div>
                    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cidade</label>
                    <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Sua Cidade"></input>
                  </div>
                  <div>
                    <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
                    <input type="text" name="state" id="state" value={state} onChange={(e) => setState(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Seu Estado"></input>
                  </div>
                </div>
                <button type="button" onClick={handlerCreate} data-modal-target="createProductModal" data-modal-toggle="createProductModal" className="text-white inline-flex items-center bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Adicionar Propriedade
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
