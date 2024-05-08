import React, { useEffect, useState } from 'react';
import { Task } from '../../types/Task';

const TableThree = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:3000/api/admin/AllTasks');
      const data = await response.json();
      setTasks(data);
      console.log(data);
      
    };

    fetchTasks();
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark" style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Tasks
        </h4>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
              Task Title
            </th>
            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
              Client Name
            </th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
              Urgency
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
              Applications Count
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
              Favorite Count
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                {task.title}
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                {task.clientName}
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                {task.urgency}
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              {task.applicantCount}
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                {task.favouriteCount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableThree;
