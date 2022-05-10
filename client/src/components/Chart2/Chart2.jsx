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

  function markets (arr) {
    return arr.map(el=>{
      const name = el.name.split(",")
      const label = name.pop().trim()
      const newEl = {id:el.id, name:name.join(", "), label, price:el.price}
      return newEl
    }).filter((el) => el.label === 'Markets').map(el=>el.name)
  }


  

  const barChartData = {
    labels: markets(price), 

    datasets: [
      {
        data: price.slice(0,19).map((el) => el.price),
        label: city1.city1,
        borderColor: "#3333ff",
        backgroundColor: "rgba(255, 183, 3, 0.5)",
        fill: true
      },
      {
        data: price2.slice(0,19).map((el) => el.price),
        label: city2.city2,
        borderColor: "#ff3333",
        backgroundColor: "rgba(33, 158, 188, 0.5)",
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
