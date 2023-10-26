import { useContext } from 'react';
import { ProductionContext } from '../contexts/ProductionContext';
import CreateProductionModal from './CreateProductionModal';
import UpdateProductionModal from './UpdateProductionModal';
import DeleteProductionModal from './DeleteProductionModal';

export default function TableProductionList() {

  const { production } = useContext(ProductionContext)

  return (
    <div className="max-w-screen-xl">
      <section className="sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-3 flex-shrink-0">
                <CreateProductionModal></CreateProductionModal>
              </div>
            </div>
            <div className="mx-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-4">Categoria</th>
                    <th scope="col" className="px-4 py-3">Item</th>
                    <th scope="col" className="px-4 py-3">Unidade</th>
                    <th scope="col" className="px-4 py-3">Quantidade</th>
                    <th scope="col" className="px-4 py-3">Valor Unitário</th>
                    <th scope="col" className="px-4 py-3">Valor Total</th>
                    <th scope="col" className="px-4 py-3">Data Recebimento</th>
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
                  {!production ?
                    <tr className='inline-block'>
                      <td className='flex-1 w-full'>
                        Nenhuma Produção adicionada
                      </td>
                    </tr> : production.map((data) => (
                      <tr key={data.id} className="border-b dark:border-gray-700">
                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <td className="px-4 py-3">{data.category}</td></th>
                        <td className="px-4 py-3">{data.item}</td>
                        <td className="px-4 py-3 max-w-[12rem] truncate">{data.unit_of}</td>
                        <td className="px-4 py-3">{data.quantity}</td>
                        <td className="px-4 py-3">{data.value_unit}</td>
                        <td className="px-4 py-3">{data.value_total}</td>
                        <td className="px-4 py-3">{data.receipt_date}</td>

                        <td className="flex-1 m-0 p-3 justify-end">

                          <UpdateProductionModal value={data}></UpdateProductionModal>

                        </td>
                        <td className="flex-1 p-3">
                          <DeleteProductionModal value={data}></DeleteProductionModal>

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

