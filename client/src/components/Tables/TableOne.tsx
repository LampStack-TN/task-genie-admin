import React, { useEffect, useState } from 'react';
import { Professional } from '../../types/Professional';

const TableOne = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/api/admin/professionals',
        );
        const data = await response.json();
        setProfessionals(data);
      } catch (error) {
        console.error('Failed to fetch professionals:', error);
      }
    };

    fetchProfessionals();
  }, []);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Professionals
      </h4>
  
      <div className="overflow-y-auto" style={{ maxHeight: '500px' }}>
        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                fullName
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                email
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                role
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                address
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                zipcode
              </h5>
            </div>
          </div>
  
          {professionals.map((professional, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === professionals.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img
                    src={professional.avatar}
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <p className="text-black dark:text-white sm:block">
                  {professional.fullName}
                </p>
              </div>
  
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{professional.email}</p>
              </div>
  
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{professional.role}</p>
              </div>
  
              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">
                  {professional.address}
                </p>
              </div>
  
              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">{professional.zipcode}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default TableOne;
