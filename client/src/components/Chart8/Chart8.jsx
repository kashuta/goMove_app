import React from "react";
import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from "react-redux";

const Chart7 = () => {
  const costLiving = useSelector((state => state.costLiving))
  console.log(costLiving);
 
function costLiv (arr) {
  // let result = [];
  // for (let i =0; i< arr.length; i++){
  //   if (arr.city[i] === 'Berlin'){
  //     result.push(arr.city[i]);
  //   }
  //   return result;
  // }

  // return arr.map((el)=>el.city.includes("Berlin"))
 return arr.filter((el) => el.city === 'Tokyo' || el.city === 'Moscow'|| el.city === 'Oslo' || el.city === 'Riga' || el.city === 'San Jose' || el.city === 'Yerevan')

  

}
  
// console.log(costLiv(costLiving));
  


  const barChartData = {
    labels: costLiv(costLiving).map(el => el.city),

    datasets: [
      {
        
        data: (costLiv(costLiving)).map((el) => el.cost),


        label: 'Index',
        borderColor: "#3333ff",
        backgroundColor: "rgba(2, 48, 71, 0.5)",
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
            text: ` Cost of Living Index (Current, By City)`,

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

export default Chart7;

