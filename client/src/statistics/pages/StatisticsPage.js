import React, { useEffect, useRef } from 'react';
import Layout from 'layout/Layout';
import '@toast-ui/chart/dist/toastui-chart.min.css';
import { ComboChart } from "@toast-ui/react-chart";

function StatisticsPage() {
  const chartRef = useRef(null);
  const defaultApiUrl = 'http://localhost:8088/';
  
  const data = {
    categories: ["Apr", "May", "June", "July", "Aug", "Sep", "Oct"],
    series: {
      column: [
        {
          name: "Seoul",
          data: [11.3, 17.0, 21.0, 24.4, 25.2, 20.4, 13.9]
        }
      ],
      line: [
        {
          name: "Average",
          data: [11, 15.1, 17.8, 19.7, 19.5, 16.5, 12.3]
        }
      ]
    }
  };
  
  const options = {
    chart: {
      width: 1160,
      height: 650,
      title: "Monthly Revenue",
      format: "1,000"
    },
    yAxis: {
      title: "Month"
    },
    xAxis: {
      title: "Amount",
      min: 0,
      max: 9000,
      suffix: "$"
    },
    series: {
      showLabel: true
    }
  };

  useEffect(() => {
    
  });

  return (
    <>
      <Layout>
        <div className="statistics-wrap">
        <ComboChart data={data} options={options} />
        {/* <PieChart
          ref={chartRef}
          data={data} 
          options={options} 
        /> */}
        </div>
      </Layout>
    </>
  );
}

export default StatisticsPage;