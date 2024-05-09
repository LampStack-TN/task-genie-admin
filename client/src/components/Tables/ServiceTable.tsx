import { useServicesData } from '../../services/fetchServices';
const ServiceTable = () => {
  const Services = useServicesData();

  return (
    <div
      className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
      style={{ maxHeight: '400px', overflowY: 'auto' }}
    >
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Services
        </h4>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
              Title
            </th>
            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
              Location
            </th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
              Professional Name
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
              price
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
              Hirings
            </th>
          </tr>
        </thead>
        <tbody>
          {Services.map((service, index) => (
            <tr key={index}>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                {service.title}
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                {service.location}
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                {service.professional.fullName}
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                {service.price}
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                {service.skills.map((skill) => skill.name).join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;