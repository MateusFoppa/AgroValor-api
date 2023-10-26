import { useContext, useState } from "react";
import { BatchContext } from "../contexts/BatchContext";
import { updateExpense } from "../../services/api";
import SelectUnitOf from "../Select/SelectUnitOf";
import SelectCategoryExpense from "../Select/SelectCategoryExpense";

export default function UpdateExpenseModal(data) {

  const [isModalUpdateOpen, setUpdateModalOpen] = useState(false);

  const { batchState } = useContext(BatchContext)

  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [data_pgto, setDataPgto] = useState("");
  const [unit_of, setUnitOf] = useState("");
  const [value_total, setValueTotal] = useState("");
  const [value_unit, setValueUnit] = useState("");

  const [selectExpense, setSelectExpense] = useState("");


  function openUpdateModal() {
    setCategory(data.value.category);
    setItem(data.value.item);
    setQuantity(data.value.quantity);
    setDataPgto(data.value.data_pgto);
    setUnitOf(data.value.unit_of);
    setValueTotal(data.value.value_total);
    setValueUnit(data.value.value_unit);
    setSelectExpense(data.value.id);
    setUpdateModalOpen(true);

  }

  function closeUpdateModal() {
    setUpdateModalOpen(false);
  }

  const handlerUpdate = async () => {
    setUpdateModalOpen(false);
    const PropertyRequest = await updateExpense(
      batchState.id,
      selectExpense,
      category,
      item,
      unit_of,
      quantity,
      value_unit,
      value_total,
      data_pgto)
    console.log(PropertyRequest);
    window.location.reload();
  }
  return (
    <div className="flex items-center justify-center">
      <button type="button" onClick={() => { openUpdateModal(data) }} data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" className="flex w-full rounded-md p-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
        <svg className="w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>

      </button>
      {isModalUpdateOpen && (
        <div id="UpdateProductionModal" tabIndex="-1" aria-hidden="true" className="flex bg-slate-800 bg-opacity-75 h-screen overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-screen mx-auto  md:inset-0 max-h-full">
          <div className="flex-1 items-center justify-center p-4 w-screen max-w-2xl max-h-full">

            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Atualizar Despesa</h3>
                <button type="button" onClick={closeUpdateModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-target="UpdateProductModal" data-modal-toggle="UpdateProductModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">


                  <div>
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                    <SelectCategoryExpense value={category} onChange={(e) => {
                      setCategory(e.target.value)
                    }} />
                  </div>
                  <div>
                    <label htmlFor="item" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item</label>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => setItem(e.target.value)}
                      name="item"
                      id="item"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Item"
                    />
                  </div>
                  <div>
                    <label htmlFor="unit_of" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unit</label>
                    <SelectUnitOf value={unit_of} onChange={(e) => {
                      setUnitOf(e.target.value)
                    }} />
                  </div>
                  <div>
                    <label htmlFor="value_unit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor Unitário</label>
                    <input
                      type="text"
                      value={value_unit}
                      onChange={(e) => setValueUnit(e.target.value)}
                      name="value_unit"
                      id="value_unit"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Valor Unitário"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantidade</label>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      name="quantity"
                      id="quantity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Quantidade"
                    />
                  </div>
                  <div>
                    <label htmlFor="value_total" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Value Total</label>
                    <input
                      type="text"
                      value={value_total}
                      onChange={(e) => setValueTotal(e.target.value)}
                      name="value_total"
                      id="value_total"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Valor Total"
                    />
                  </div>
                  <div>
                    <label htmlFor="data_pgto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data de Pagamento</label>
                    <input
                      type="date"
                      value={data_pgto}
                      onChange={(e) => setDataPgto(e.target.value)}
                      name="data_pgto"
                      id="data_pgto"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Data de Pagamento"
                    />
                  </div>
                </div>
                <button type="button" onClick={handlerUpdate} className="text-white inline-flex items-center bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Salvar
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}


