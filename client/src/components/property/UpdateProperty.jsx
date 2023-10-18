// import { useState } from "react";

// export default function updateProperty(){
//   const[name, setName] = useState("");
//   const[total_area, setTotalArea] = useState("");
//   const[cultivated_area, setCultivatedArea] = useState("");
//   const[city, setCity] = useState("");
//   const[state, setState] = useState("");

//   const handlerUpdate = () => {
//     console.log(name,state,cultivated_area,total_area,city)

//   }
//   return(
//     <div id="updateProductModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
//     <div className="relative p-4 w-full max-w-2xl max-h-full">

//         <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

//             <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Atualizar</h3>
//                 <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="updateProductModal">
//                     <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                     <span className="sr-only">Close modal</span>
//                 </button>
//             </div>

//             <form>
//                 <div className="grid gap-4 mb-4 sm:grid-cols-2">
//                     <div>
//                         <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome da Propriedade</label>
//                         <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nome"></input>
//                     </div>

//                     <div>
//                         <label htmlFor="cultivated" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area Cultivada</label>
//                         <input type="number" value={cultivated_area} onChange={(e) => setCultivatedArea(e.target.value)} name="cultivated" id="cultivated" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Número de ha"></input>
//                     </div>
//                     <div>
//                         <label htmlFor="areatotal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area Total</label>
//                         <input type="number" name="areatotal" id="areatotal" value={total_area} onChange={(e) => setTotalArea(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Número de ha"></input>
//                     </div>
//                     <div>
//                         <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cidade</label>
//                         <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Sua Cidade"></input>
//                     </div>
//                     <div>
//                         <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
//                         <input type="text" name="state" id="state" value={state} onChange={(e) => setState(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Seu Estado"></input>
//                     </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                     <button type="button" onClick={handlerUpdate} className="text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Salvar</button>
//                     <button type="button" className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
//                         <svg className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                             <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                         </svg>
//                         Delete
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
// </div>
//   )
// }
