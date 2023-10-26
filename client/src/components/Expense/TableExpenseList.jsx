import { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import CreateExpenseModal from './CreateExpenseModal';
import UpdateExpenseModal from './UpdateExpenseModal';
import DeleteExpenseModal from './DeleteExpenseModal';

export default function TableExpenseList() {

  const { expense } = useContext(ExpenseContext)

  return (
    <div className="w-auto">
      <section className="sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12 ml-4">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-3 flex-shrink-0">
                <CreateExpenseModal></CreateExpenseModal>
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
                    <th scope="col" className="px-4 py-3">Data Pagamento</th>
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
                  {!expense ?
                    <tr className='inline-block'>
                      <td className='flex-1 w-full'>
                        Nenhuma despesa adicionada
                      </td>
                    </tr> : expense.map((data) => (
                      <tr key={data.id} className="border-b dark:border-gray-700">
                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <td className="px-4 py-3">{data.category}</td></th>
                        <td className="px-4 py-3">{data.item}</td>
                        <td className="px-4 py-3 max-w-[12rem] truncate">{data.unit_of}</td>
                        <td className="px-4 py-3">{data.quantity}</td>
                        <td className="px-4 py-3">{data.value_unit}</td>
                        <td className="px-4 py-3">{data.value_total}</td>
                        <td className="px-4 py-3">{data.data_pgto}</td>

                        <td className="flex-1 m-0 p-3 justify-end">

                          <UpdateExpenseModal value={data}></UpdateExpenseModal>

                        </td>
                        <td className="flex-1 p-3">
                          <DeleteExpenseModal value={data}></DeleteExpenseModal>

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


