import React from "react";
import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from "react-redux";

const Chart4 = () => {
  const price = useSelector((state => state.currencyPrice))
  const price2 = useSelector((state => state.currencyPrice2))
  const city1 = useSelector((state) => state.lineFrontCity)
  const city2 = useSelector((state) => state.lineFrontCity)
  const setCurrency = useSelector((state) => state.currentCurrency)
  


  const barChartData = {
    labels: price.slice(21, 28).map((el) => el.name),
    datasets: [
      {
        data: price.slice(0,7).map((el) => el.price),
        label: city1.city1,
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true
      },
      {
        data: price2.slice(0,7).map((el) => el.price),
        label: city2.city2,
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true

      }
    ]
  };

  const barChart = (
    <Bar
      type="bar"
      width={130}
      height={50}
      options={
        {
          indexAxis: 'y',
          // Elements options apply to all of the options unless overridden in a dataset
          // In this case, we are setting the border of each horizontal bar to be 2px wide
          elements: {
            bar: {
              borderWidth: 2,
            }
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: ` новый график, ${setCurrency} `,
              font: {
                size:20
              }          
            }
          }
        }
  }

      data={barChartData}
    />
  );
  return barChart;
};


export default Chart4;

