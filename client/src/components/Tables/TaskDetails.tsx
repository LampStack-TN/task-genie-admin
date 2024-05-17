import { useParams, useNavigate } from 'react-router-dom';
import { useTaskById } from '../../services/fetchTaskById';

const TaskDetails: React.FC = () => {
  const { id } = useParams();
  const { task } = useTaskById(id);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mx-auto max-w-4xl">
      <div className="px-4 sm:px-6">
        <h2 className="text-3xl font-semibold leading-9 text-gray-900">
          {task.title}
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Details about the task and its requirements.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          {[
            { label: "Client", value: task.client?.fullName },
            { label: "Description", value: task.description },
            { label: "Location", value: task.location },
            { label: "Min Price", value: `$${task.minPrice}` },
            { label: "Max Price", value: `$${task.maxPrice}` },
            { label: "Due Date", value: task.dueDate },
            { label: "Urgency", value: task.urgency },
            { label: "Created At", value: task.createdAt },
            { label: "Updated At", value: task.updatedAt },
            { label: "Applicants", value: task.applications?.length || 0 },
            { label: "Applicants Details", value: task.applications?.map((app, index) => (
                <div key={index} className="py-1">
                  {app.applicant.fullName} - {app.status}
                </div>
              )) || 'No Applicants' },
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

export default TaskDetails;
