/* eslint-disable react/prop-types */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {

  // const coldColors = [
  //   'rgba(153, 102, 255, 0.6)',
  //   'rgba(75, 192, 192, 0.6)',
  //   'rgba(128, 128, 128, 0.6)',
  //   'rgba(0, 128, 0, 0.6)',
  //   'rgba(0, 0, 128, 0.6)',
  //   'rgba(128, 0, 0, 0.6)',
  //   'rgba(54, 162, 235, 0.6)',
  // ];

  // const hotColors = [
  //   'rgba(255, 0, 255, 0.6)',
  //   'rgba(255, 215, 0, 0.6)',
  //   'rgba(255, 99, 71, 0.6)',
  //   'rgba(255, 20, 147, 0.6)',
  //   'rgba(128, 0, 128, 0.6)',
  //   'rgba(255, 255, 0, 0.6)',
  //   'rgba(255, 165, 0, 0.6)',
  //   'rgba(255, 0, 0, 0.6)',
  //   'rgba(255, 69, 0, 0.6)',
  //   'rgba(255, 140, 0, 0.6)',
  // ];

  const generateColors = (numColors, hue, saturation, lightness) => {
    const colors = [];

    for (let i = 0; i < numColors; i++) {
      const hueValue = (hue + (i * 360 / numColors)) % 360;
      const color = `hsla(${hueValue}, ${saturation}%, ${lightness}%, 0.6)`;
      colors.push(color);
    }

    return colors;
  };

  // Gerar 15 tons frios (azul e verde)
  const coldColors = generateColors(15, 200, 50, 60);

  // Gerar 15 tons quentes (vermelho, amarelo e laranja)
  const hotColors = generateColors(15, 20, 70, 60);

  console.log('Cold Colors:', coldColors);
  console.log('Hot Colors:', hotColors);

  const sumValuesByCategory = (data) => {
    const categoryMap = {};
    data.forEach((item) => {
      const { category, value_total } = item;
      if (categoryMap[category]) {
        categoryMap[category] += value_total;
      } else {
        categoryMap[category] = value_total;
      }
    });

    const result = Object.keys(categoryMap).map((category) => ({
      category,
      value_total: categoryMap[category],
    }));

    return result;
  };

  const dataValuesGrup = sumValuesByCategory(data);

  console.log(data);

  const getColorArray = data.map((item, idx) => item.expense_id ? hotColors[idx] : coldColors[idx])

  console.log(getColorArray);


  const tags = dataValuesGrup.map((item) => item.category);
  const valores = dataValuesGrup.map((item) => item.value_total);

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
