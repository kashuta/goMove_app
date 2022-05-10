import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from "react-redux";

const Chart3 = () => {
  const price = useSelector((state => state.currencyPrice))
  console.log('----', price);
  const price2 = useSelector((state => state.currencyPrice2))
  const city1 = useSelector((state) => state.lineFrontCity)
  const city2 = useSelector((state) => state.lineFrontCity)
  const setCurrency = useSelector((state) => state.currentCurrency)

  function transportation (arr) {
    return arr.map(el=>{
      const name = el.name.split(",")
      const label = name.pop().trim()
      const newEl = {id:el.id, name:name.join(", "), label, price:el.price}
      return newEl
    }).filter((el) => el.label === 'Transportation' ).filter((el)=>!el.name.includes("Car"))
  }
  //.filter((el) => el !== 'Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car )' && el !== 'Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)')
  
//console.log((transportation(price)).map((el) => el.price))
  const barChartData = {
    labels: (transportation(price)).map(el=>el.name),
    

    datasets: [
      {
        data: (transportation(price)).map((el) => el.price),
        label: city1.city1,
        borderColor: "#3333ff",
        backgroundColor: "rgba(255, 183, 3, 0.5)",
        fill: true,
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        data: (transportation(price2)).map((el) => el.price),
        label: city2.city2,
        borderColor: "#ff3333",
        backgroundColor: "rgba(33, 158, 188, 0.5)",
        fill: true,
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      }
    ]
  };
//console.log('33333333333', barChartData.labels);
  const barChart = (
    <Bar
      // type="bar"
      width={130}
      height={50}
      options= {
        {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: `Transportation, ${setCurrency}`,
              font: {
                size: 20
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

export default Chart3;
