import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';

const Chart = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const initializeChart = () => {
      if (chartRef.current && chartInstance.current === null) {
        chartInstance.current = new ChartJS(chartRef.current, {
          type: type,
          data: data,
          options: options,
        });
      } else if (chartInstance.current) {
        chartInstance.current.data = data;
        chartInstance.current.options = options;
        chartInstance.current.update();
      }
    };

    initializeChart();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null; // Clear the reference
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
};

export default Chart;
