import React from "react";
import { Bar } from "react-chartjs-2";
//import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from "react-redux";

const Chart2 = () => {
  const price = useSelector((state) => state.currencyPrice)
  const price2 = useSelector((state) => state.currencyPrice2)
  const city1 = useSelector((state) => state.lineFrontCity)
  const city2 = useSelector((state) => state.lineFrontCity)
  const setCurrency = useSelector((state) => state.currentCurrency)


  

  const barChartData = {
    labels: price.slice(7, 16).map((el) => el.name),

    datasets: [
      {
        data: price.slice(7,16).map((el) => el.price),
        label: city1.city1,
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true
      },
      {
        data: price2.slice(7,16).map((el) => el.price),
        label: city2.city2,
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true
      }
    ]
  };

  const barChart = (
    <Bar
      // type="bar"
      width={130}
      height={50}
      options={{
        plugins: {
          title: {
            display: true,
            text: ` Market prices, ${setCurrency} `,

            font: {
              size: 20
            }
          }
        }
      }
      }
      data={barChartData}

    />
  )
    
   return barChart;
  
};

export default Chart2;
