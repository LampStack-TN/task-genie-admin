import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useClientData } from '../../services/fetchClient';
import { useProfessionalData } from '../../services/fetchprofessional';
import ChartThreeState from '../../types/ChartThreeState';


const options: ApexOptions = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
  labels: ['Client', 'professional'],
  legend: {
    show: false,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};



const ChartThree: React.FC = () => {

  const [state, setState] = useState<ChartThreeState>({
    series: [0, 0],
  });

  const clientData = useClientData()
  const professionalData = useProfessionalData()


  useEffect(() => {
    const fetchData = async () => {
      const clientPercentage = Math.round((clientData.length / (clientData.length + professionalData.length)) * 100);
      setState((prevState) => ({
        ...prevState,
        series: [clientPercentage, 100 - clientPercentage],
      }));
    };
    fetchData();
  }, [clientData, professionalData]);


  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Visitors Analytics
          </h5>
        </div>
        
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Client </span>
              <span> {state.series[0]}%</span> %
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> professional</span>
              <span> {state.series[1] }% </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
