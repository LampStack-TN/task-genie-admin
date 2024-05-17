import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiClient } from '../../utils/api';
import { Professional } from '../../types/Professional';
import { acceptProfessional, rejectProfessional } from '../../services/fetchVerifyUser';

const TableOne = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const navigate = useNavigate();

  const fetchProfessionals = async () => {
    try {
      const response = await ApiClient().get('/admin/professionals');
      setProfessionals(response.data);
    } catch (error) {
      console.error('Error fetching professionals:', error);
    }
  };

  useEffect(() => {
    fetchProfessionals();
  }, []);

  const handleRowClick = (profileId: number) => {
    navigate(`/professional/${profileId}`);
  };

  const handleAccept = async (id: number) => {
    await acceptProfessional(id);
    fetchProfessionals();
  };

  const handleReject = async (id: number) => {
    await rejectProfessional(id);
    fetchProfessionals();
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Professionals
      </h4>

      <div className="overflow-y-auto" style={{ maxHeight: '500px' }}>
        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
            {/* Headers */}
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Full Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Email
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Role
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Address
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Zipcode
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Actions
              </h5>
            </div>
          </div>

          {professionals.map((professional) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-6 ${
                professionals.length - 1 === professionals.indexOf(professional)
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={professional.id}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div
                  className="flex-shrink-0 cursor-pointer hover:underline"
                  onClick={() => handleRowClick(professional.id)}
                >
                  <img
                    src={professional.avatar}
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <p
                  className="text-black dark:text-white sm:block cursor-pointer hover:underline"
                  onClick={() => handleRowClick(professional.id)}
                >
                  {professional.fullName}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">
                  {professional.email}
                </p>
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

              {/* Actions Column */}
              <div className="flex items-center justify-center gap-2 p-2.5 xl:p-5">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-green-600"
                  onClick={() => handleAccept(professional.id)}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-red-600"
                  onClick={() => handleReject(professional.id)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOne;
