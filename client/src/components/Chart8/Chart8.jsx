import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const Chart8 = () => {
  const costLiving = useSelector((state => state.costLiving))
 
function costLiv (arr) {
  
 return arr.filter((el) => 
 el.city === 'Tokyo' ||
  el.city === 'Moscow'|| 
  el.city === 'Oslo' || 
  el.city === 'Riga' || 
  el.city === 'San Jose' || 
  el.city === 'Yerevan')
}
  
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

