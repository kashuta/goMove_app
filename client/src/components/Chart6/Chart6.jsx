import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const Chart6 = () => {
  const price = useSelector((state => state.currencyPrice))
  const price2 = useSelector((state => state.currencyPrice2))
  const city1 = useSelector((state) => state.lineFrontCity)
  const city2 = useSelector((state) => state.lineFrontCity)
  const setCurrency = useSelector((state) => state.currentCurrency)

  function salary (arr) {
    return arr.map(el=>{
      const name = el.name.split(",")
      const label = name.pop().trim()
      const newEl = {id:el.id, name:name.join(", "), label, price:el.price}
      return newEl
    }).filter((el) => el.label === 'Salaries And Financing').filter((el)=>!el.name.includes("Yearly"))
  }
  


  const barChartData = {
    labels: salary(price).map(el=>el.name), 
    datasets: [
      {
        data: (salary(price)).map((el) => el.price),
        label: city1.city1,
        borderColor: "#808080",
        backgroundColor: "rgba(251, 133, 0)",
        fill: true,
        borderWidth: 2,
        borderRadius: 20,
        borderSkipped: false,
      },
      {
        data: (salary(price2)).map((el) => el.price),
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
      type="bar"
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
              text: ` Salaries, ${setCurrency} `,
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


export default Chart6;

