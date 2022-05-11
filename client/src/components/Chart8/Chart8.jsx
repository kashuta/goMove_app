import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const Chart8 = () => {
  const costLiving = useSelector(state => state.costLiving)
  console.log(costLiving);
  const lineFrontCity = useSelector(state => state.lineFrontCity)
 
function costLiv (arr) {
  const select1 = lineFrontCity.city1.split(',')[0]
  const select2 = lineFrontCity.city2.split(',')[0]
  

  return arr.filter((el) => 
  el.city === 'Tokyo' ||
  el.city === 'Moscow'|| 
  el.city === 'Oslo' || 
  el.city === 'Riga' || 
  el.city === 'San Jose' || 
  el.city === 'Yerevan' ||
  el.city === select1 ||
  el.city === select2 )
}
  
  const barChartData = {
    labels: costLiv(costLiving).map(el => el.city),

    datasets: [
      {
        data: (costLiv(costLiving)).map((el) => el.cost),
        label: 'Index',
        borderColor: "#3333ff",
        backgroundColor: (costLiv(costLiving)).map((el) => el.city === lineFrontCity.city1.split(',')[0] || el.city === lineFrontCity.city2.split(',')[0] ? "rgba(251, 133, 0 )": "rgba(33, 158, 188)"), 
        fill: true
      }
      
    ]
  };

  const barChart = (
    <Bar
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

export default Chart8;

