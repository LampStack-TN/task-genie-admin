import { useParams } from 'react-router-dom';
import { useServiceById } from '../../services/fetchServicesById';

const ServiceDetails: React.FC = () => {
  const { id } = useParams();
  const { service } = useServiceById(id);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="px-4 sm:px-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900">
          {service.title}
        </h2>
        <p className="text-sm leading-6 text-gray-500">
          Details about the Service and its requirements.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Professional</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {service.professional?.fullName}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {service.description}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {service.location}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">availability</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              ${service.availability}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Price</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              ${service.price}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {service.status}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Created At</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {service.createdAt}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Updated At</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {service.updatedAt}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              hirings number
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {service.hirings?.length || 0}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">hirings</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {service.hirings?.map((ser, index) => (
                <div key={index}>
                  {ser.client.fullName} - {ser.status}
                </div>
              )) || 'No hirings'}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ServiceDetails;
