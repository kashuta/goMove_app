import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const Chart7 = () => {
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
    labels: markets(price).slice(10,19), 

    datasets: [
      {
        data: price.slice(0,19).map((el) => el.price),
        label: city1.city1,
        borderColor: "#808080",
        backgroundColor: "rgba(251, 133, 0)",
        fill: true,
        borderWidth: 2,
        borderRadius: 20,
        borderSkipped: false,
      },
      {
        data: price2.slice(0,19).map((el) => el.price),
        label: city2.city2,
        borderColor: "#cd7f32",
        backgroundColor: "rgba(33, 158, 188)",
        fill: true,
        borderWidth: 2,
        borderRadius: 20,
        borderSkipped: false,
      }
    ]
  };

  const barChart = (
    <Bar
      width={130}
      height={50}
      options={
        {
          indexAxis: 'y',
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
              text: ` Food prices, ${setCurrency} `,
              font: {
                size:20
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

export default Chart7;

