import { useClientData } from '../../services/fetchClient';

const TableTwo = () => {
  const clients = useClientData();

  return (
    <div
      className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
      style={{ maxHeight: '500px', overflowY: 'auto' }}
    >
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Clients
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">fullName</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">email</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">role</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">address</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">zipcode</p>
        </div>
      </div>

      {clients.map((client, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={client.avatar} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {client.fullName}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{client.email}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{client.role}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {client.address}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">${client.zipcode}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
