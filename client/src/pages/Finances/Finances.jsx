import { useContext, useEffect, useState } from "react"
import SideBar from "../../components/SideBar/SideBar"
import { reportFinanceBatch } from "../../services/api"
import { BatchContext } from "../../components/contexts/BatchContext"
import jsPDF from "jspdf"
import html2PDF from "jspdf-html2canvas"

export default function Finances() {
  const { batchState, propertyState } = useContext(BatchContext)

  const [reportfinance, setReportFinanceBatchs] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const BatchRequest = await reportFinanceBatch(batchState.id, propertyState.id)

        const requests = [BatchRequest]

        const [
          batchResponse
        ] = await Promise.all(requests)

        setReportFinanceBatchs(batchResponse)

        console.log(reportfinance)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])


  const generatePDF = async () => {
    const element = document.getElementById("pdf-content");

    if (!element) {
      console.error('Element with ID "pdf-content" not found.');
      return;
    }

    const pdfOptions = {
      margin: 10,
      filename: 'report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    try {
      html2PDF(element, { useCORS: true }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF(pdfOptions);
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save(pdfOptions.filename);

      });
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="bg-slate-600 flex max-w-full overflow-hidden">
      <div className="h-screen">
        <SideBar />
      </div>
      <div className="flex-1 justify-center items-center">
        <div className=" justify-end w-full md:w-auto flex md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-3 flex-shrink-0">
          <button
            className="flex items-center justify-center text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 mt-8 mr-8"
            onClick={generatePDF}>
            Baixar PDF
          </button>
        </div>
        <div id="pdf-content" className="flex-col flex h-full w-full items-center justify-center text-white">

          {reportfinance.combinedData ? (
            <div className="max-w-screen-xl">
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
                              <td className="px-4 py-2">{data.unit_of}</td>
                              <td className="px-4 py-2">{data.quantity}</td>
                              <td className="px-4 py-2">{data.value_unit}</td>
                              <td className="px-4 py-2">{data.value_total}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot className="bg-gray-800 p-3">
                          <tr className="flex-1 p-2 items-center">
                            <td colSpan="5" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Valor Total:
                            </td>
                            <td className="px-4 py-2 font-semibold justify-end">
                              {reportfinance.balancoFinanceiro}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <p className="text-center text-gray-500">Dados não disponíveis</p>
          )}
        </div>
      </div>
    </div >
  )
}
