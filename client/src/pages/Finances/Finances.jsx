import SideBar from '../../components/SideBar/SideBar';
import { reportFinanceBatch } from '../../services/api';
import { BatchContext } from '../../components/contexts/BatchContext';
import PieChart from '../../components/Charts/PieChart';

import { useContext, useEffect, useState } from 'react';
import ReportFinancePDF from '../../services/Reports/ReportFinancePDF';
import { formatBRL } from '../../services/FomatBRL';
import formatData from '../../services/FormatDate';


const Finances = () => {
  const { batchState, propertyState } = useContext(BatchContext);
  const [reportfinance, setReportFinanceBatchs] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const BatchRequest = await reportFinanceBatch(batchState.id, propertyState.id);

        const requests = [BatchRequest];

        const [batchResponse] = await Promise.all(requests);

        setReportFinanceBatchs(batchResponse);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleGeneratePDF = () => {
    ReportFinancePDF(reportfinance, propertyState.name, batchState.name)
  };

  return (
    <div className="bg-slate-600 flex max-w-full h-screen overflow-hidden">
      <div className="h-screen block">
        <SideBar />
      </div>
      <div className="flex-1 justify-center items-center h-screen overflow-y-auto">
        <div className="flex justify-end w-full md:w-auto md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-3 flex-shrink-0">
          <button
            className="flex items-center justify-center text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 mt-8 mr-8"
            onClick={() => handleGeneratePDF()}
          >
            Baixar PDF
          </button>
        </div>

        <div
          className="flex-col h-full w-full items-center justify-center text-white"
        >
          {reportfinance.combinedData ? (
            <div className="max-w-screen-xl h-screen">
              <section className="sm:p-5">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                  <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex justify-center first-line:flex md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 p-4">
                      <div className=" justify-start w-full md:w-auto flex md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-3 flex-shrink-0">
                        <h1 className="text-gray-400 font-semibold text-xl">
                          Balanço do lote {batchState.name}
                        </h1>
                      </div>
                    </div>
                    <div className="mx-auto">

                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Categoria</th>
                            <th className="px-4 py-2">Item</th>
                            <th className="px-4 py-2">Data</th>
                            <th className="px-4 py-2">Unidade</th>
                            <th className="px-4 py-2">Quantidade</th>
                            <th className="px-4 py-2">Valor Unitário</th>
                            <th className="px-4 py-2">Valor Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {reportfinance.combinedData.map((data, index) => (
                            <tr key={index} className="bg-gray-800 border-b border-gray-500 dark:border-gray-70">
                              <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.category}</td>
                              <td className="px-4 py-2">{data.item}</td>
                              <td className="px-4 py-2">{formatData(data.date)}</td>
                              <td className="px-4 py-2">{data.unit_of}</td>
                              <td className="px-4 py-2">{data.quantity}</td>
                              <td className="px-4 py-2">{formatBRL(data.value_unit)}</td>
                              <td className={`px-4 py-2 ${data.expense_id ? 'text-red-300' : 'text-green-200'}`}>
                                {data.expense_id ? formatBRL(-data.value_total) : formatBRL(data.value_total)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot className="bg-gray-800 p-3">
                          <tr className="flex-1 p-2 items-center">
                            <td colSpan="6" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Valor Total:
                            </td>
                            <td className={`px-4 py-2 font-semibold justify-end ${reportfinance.balancoFinanceiro < 0 ? 'text-red-300' : reportfinance.balancoFinanceiro > 0 ? 'text-green-200' : ''}`}>
                              {formatBRL(reportfinance.balancoFinanceiro)}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
              <div className="flex">
                <div className="w-1/2 p-10 mb-10">
                  <PieChart data={reportfinance.expenses}></PieChart>
                </div>
                <div className="w-1/2 p-10 mb-10">
                  <PieChart data={reportfinance.productions}></PieChart>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Dados não disponíveis</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Finances;
