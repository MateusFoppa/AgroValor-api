import { useContext, useEffect, useState } from "react";
import { BatchContext } from "../contexts/BatchContext";
import { createProduction } from "../../services/api";
import SelectUnitOf from "../Select/SelectUnitOf";
import SelectProductionCategory from "../Select/SelectProductionCategory";
import { ProductionContext } from "../contexts/ProductionContext";
import { toast } from "react-toastify";

export default function CreateProductionModal() {

  const [isModalCreateOpen, setCreateModalOpen] = useState(false);

  const { batchState } = useContext(BatchContext)
  const { setUpdate } = useContext(ProductionContext)

  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [receipt_date, setReceiptDate] = useState("");
  const [unit_of, setUnitOf] = useState("");
  const [value_total, setValueTotal] = useState("");
  const [value_unit, setValueUnit] = useState("");

  useEffect(() => {
    const calculateTotal = () => {
      const quantityValue = parseFloat(quantity);
      const unitValue = parseFloat(value_unit);
      if (!isNaN(quantityValue) && !isNaN(unitValue)) {
        const total = quantityValue * unitValue;
        setValueTotal(total);
      }
    };
    calculateTotal();
  }, [quantity, value_unit]);

  function openCreateModal() {
    setCreateModalOpen(true);

  }

  function closeCreateModal() {
    setCreateModalOpen(false);
  }

  const handlerCreate = async () => {
    if (!category || !item || !unit_of || !quantity || !value_unit || !value_total || !receipt_date) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }
    try {
      const PropertyRequest = await createProduction(
        batchState.id,
        category,
        item,
        unit_of,
        quantity,
        value_unit,
        value_total,
        receipt_date)
      console.log(PropertyRequest);
      setUpdate(PropertyRequest);
      setCreateModalOpen(false);
      toast.success('Produção adicionada com sucesso')
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
  return (
    <div className="flex items-center justify-center">
      <button onClick={openCreateModal} type="button" id="createProductionModalButton" className="flex items-center justify-center text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 ">
        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
        </svg>
        Adicionar Produção
      </button>
      {isModalCreateOpen && (
        <div id="createProductionModal" tabIndex="-1" aria-hidden="true" className="flex bg-slate-800 bg-opacity-75 h-screen overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-screen mx-auto  md:inset-0 max-h-full">
          <div className="flex-1 items-center justify-center p-4 w-screen max-w-2xl max-h-full">

            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nova Produção</h3>
                <button type="button" onClick={closeCreateModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form >
                <div className="grid gap-4 mb-4 sm:grid-cols-2">


                  <div>
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                    <SelectProductionCategory value={category} onChange={(e) => {
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
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Item"
                    />
                  </div>
                  <div>
                    <label htmlFor="unit_of" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unit</label>
                    <SelectUnitOf value={setUnitOf} onChange={(e) => {
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
                      required
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
                      required
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
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Valor Total"
                    />
                  </div>
                  <div>
                    <label htmlFor="receipt_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data de Recebimento</label>
                    <input
                      type="date"
                      value={receipt_date}
                      onChange={(e) => setReceiptDate(e.target.value)}
                      name="receipt_date"
                      id="receipt_date"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Data de Recebimento"
                    />
                  </div>
                </div>
                <button type="button" onClick={handlerCreate} data-modal-target="createProductModal" data-modal-toggle="createProductModal" className="text-white inline-flex items-center bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Adicionar Produção
                </button>
              </form>
            </div>
          </div>
        </div >
      )
      }

    </div >
  )
}


