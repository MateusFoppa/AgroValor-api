import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { formatBRL } from '../FomatBRL';
import formatData from '../FormatDate';

export default function ReportFinancePDF(reportFinance, property, batch) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const headerTitle = [
    {
      text: `AGROVALOR`,
      fontSize: 15,
      bold: true,
      margin: [15, 20, 20, 5] // left, top, right, bottom
    },
  ];


  const dataExpenses = reportFinance.expenses?.map((report) => {
    return [
      { text: report.category, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: report.item, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: formatData(report.date), fontSize: 9, margin: [0, 2, 0, 2] },
      { text: report.unit_of, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: report.quantity, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: formatBRL(report.value_unit), fontSize: 9, margin: [0, 2, 0, 2] },
      { text: `- ${formatBRL(report.value_total)}`, fontSize: 9, margin: [0, 2, 0, 2] }
    ]
  });

  const dataProductions = reportFinance.productions?.map((report) => {
    return [
      { text: report.category, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: report.item, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: formatData(report.date), fontSize: 9, margin: [0, 2, 0, 2] },
      { text: report.unit_of, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: report.quantity, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: formatBRL(report.value_unit), fontSize: 9, margin: [0, 2, 0, 2] },
      { text: formatBRL(report.value_total), fontSize: 9, margin: [0, 2, 0, 2] }
    ]
  });

  const details = [
    {
      text: `Relatório Financeiro Lote ${batch}`,
      fontSize: 15,
      bold: true,
      margin: [0, 5, 0, 5] // left, top, right, bottom
    },
    {
      text: `Propriedade ${property}`,
      fontSize: 12,
      bold: true,
      margin: [0, 5, 0, 5] // left, top, right, bottom
    },
    {
      text: 'Despesas',
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 10]
    },
    {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*', '*', '*', '*', '*'],
        body: [
          [
            { text: 'Categoria', style: 'tableHeader', fontSize: 10 },
            { text: 'Item', style: 'tableHeader', fontSize: 10 },
            { text: 'Data', style: 'tableHeader', fontSize: 10 },
            { text: 'Unidade', style: 'tableHeader', fontSize: 10 },
            { text: 'Quantidade', style: 'tableHeader', fontSize: 10 },
            { text: 'Valor Unitário', style: 'tableHeader', fontSize: 10 },
            { text: 'Valor Total', style: 'tableHeader', fontSize: 10 }
          ],
          ...dataExpenses,
        ]
      },
      layout: 'lightHorizontalLines'
    }, // 'lightHorizontalLines'

    {
      text: 'Produção',
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 10]
    },

    {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*', '*', '*', '*', '*'],
        body: [
          [
            { text: 'Categoria', style: 'tableHeader', fontSize: 10 },
            { text: 'Item', style: 'tableHeader', fontSize: 10 },
            { text: 'Data', style: 'tableHeader', fontSize: 10 },
            { text: 'Unidade', style: 'tableHeader', fontSize: 10 },
            { text: 'Quantidade', style: 'tableHeader', fontSize: 10 },
            { text: 'Valor Unitário', style: 'tableHeader', fontSize: 10 },
            { text: 'Valor Total', style: 'tableHeader', fontSize: 10 }
          ],
          ...dataProductions

        ]
      },
      layout: 'lightHorizontalLines'
    }, // 'lightHorizontalLines'
    {
      table: {
        headerRows: 1,
        widths: ['*', '*'],
        body: [
          [
            {
              text: 'Valor Total', style: 'tableHeader', fontSize: 15, bold: true,
              margin: [15, 20, 0, 10]
            },
            {
              text: formatBRL(reportFinance.balancoFinanceiro), style: 'tableHeader', fontSize: 15, bold: true,
              margin: [15, 20, 15, 10], alignment: 'right'
            }
          ],
        ]
      },
      layout: 'lightHorizontalLines'
    }, // 'lightHorizontalLines'
  ];

  function Rodape(currentPage, pageCount) {
    return [
      {
        text: currentPage + ' / ' + pageCount,
        alignment: 'right',
        fontSize: 9,
        margin: [0, 10, 20, 0] // left, top, right, bottom
      }
    ]
  }

  const docDefinitios = {
    pageSize: 'A4',
    pageMargins: [20, 50, 20, 40],

    header: [headerTitle],
    content: [details],
    footer: Rodape
  }

  pdfMake.createPdf(docDefinitios).open();

}
