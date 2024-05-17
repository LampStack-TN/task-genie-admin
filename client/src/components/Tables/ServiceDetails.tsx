import { useParams, useNavigate } from 'react-router-dom';
import { useServiceById } from '../../services/fetchServicesById';

const ServiceDetails: React.FC = () => {
  const { id } = useParams();
  const { service } = useServiceById(id);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mx-auto max-w-4xl">
      <div className="px-4 sm:px-6">
        <h2 className="text-3xl font-semibold leading-9 text-gray-900">
          {service.title}
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Details about the Service and its requirements.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          {[
            { label: "Professional", value: service.professional?.fullName },
            { label: "Description", value: service.description },
            { label: "Location", value: service.location },
            { label: "Availability", value: service.availability },
            { label: "Price", value: `$${service.price}` },
            { label: "Status", value: service.status },
            { label: "Created At", value: service.createdAt },
            { label: "Updated At", value: service.updatedAt },
            { label: "Hirings Number", value: service.hirings?.length || 0 },
            { label: "Hirings Details", value: service.hirings?.map((ser, index) => (
                <div key={index} className="py-1">
                  {ser.client.fullName} - {ser.status}
                </div>
              )) || 'No hirings' },
          ].map((item, index) => (
            <div key={index} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={handleBackClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
