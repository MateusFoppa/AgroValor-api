/* eslint-disable react/prop-types */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {

  const coldColors = [
    'rgba(153, 102, 255, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(128, 128, 128, 0.6)',
    'rgba(0, 128, 0, 0.6)',
    'rgba(0, 0, 128, 0.6)',
    'rgba(128, 0, 0, 0.6)',
    'rgba(54, 162, 235, 0.6)',
  ];

  const hotColors = [
    'rgba(255, 215, 0, 0.6)',
    'rgba(255, 99, 71, 0.6)',
    'rgba(255, 20, 147, 0.6)',
    'rgba(255, 0, 255, 0.6)',
    'rgba(128, 0, 128, 0.6)',
    'rgba(255, 255, 0, 0.6)',
    'rgba(255, 165, 0, 0.6)',
    'rgba(255, 0, 0, 0.6)',
    'rgba(255, 69, 0, 0.6)',
    'rgba(255, 140, 0, 0.6)',
  ];


  const getColorArray = data.map((item) =>
    item.expense_id ? hotColors : coldColors
  );

  const tags = data.map((item) => item.category);
  const valores = data.map((item) => item.value_total);

  const chartData = {
    labels: tags,
    datasets: [
      {
        data: valores,
        backgroundColor: getColorArray.flat(),
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Gráfico de Pizza',
      fontSize: 20,
      fontColor: 'rgba(255, 255, 255, 1)',
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: 'white',
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 10,
        bottom: 80,
      },
    },
  };

  return (
    <div>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
