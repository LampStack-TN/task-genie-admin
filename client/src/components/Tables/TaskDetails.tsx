import { useParams } from 'react-router-dom';
import { useTaskById } from '../../services/fetchTaskById';

const TaskDetails: React.FC = () => {
  const { id } = useParams();
  const { task } = useTaskById(id);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="px-4 sm:px-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900">
          {task.title}
        </h2>
        <p className="text-sm leading-6 text-gray-500">
          Details about the task and its requirements.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Client</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {task.client?.fullName}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {task.description}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {task.location}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Min Price</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              ${task.minPrice}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Max Price</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              ${task.maxPrice}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Due Date</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {task.dueDate}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Urgency</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {task.urgency}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Created At</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {task.createdAt}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Updated At</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {task.updatedAt}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Applicants</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {task.applications?.length || 0}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Applicants</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
              {task.applications?.map((app, index) => (
                <div key={index}>
                  {app.applicant.fullName} - {app.status}
                </div>
              )) || 'No Applicants'}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default TaskDetails;
