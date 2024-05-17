import { useParams, useNavigate } from 'react-router-dom';
import { useProfileById } from '../../services/fetchProfessionalById';
import { acceptProfessional, rejectProfessional } from '../../services/fetchVerifyUser';

const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { professional } = useProfileById(id);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAccept = async () => {
    await acceptProfessional(Number(id));
    navigate(-1);
  };

  const handleReject = async () => {
    await rejectProfessional(Number(id));
    navigate(-1);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mx-auto max-w-4xl">
      <div className="px-4 sm:px-6">
        <h2 className="text-3xl font-semibold leading-9 text-gray-900">
          Professional Details
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Detailed information about the professional.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <InfoItem label="Full Name" value={professional?.fullName} />
          <InfoItem label="Email" value={professional?.email} />
          <InfoItem label="Role" value={professional?.role} />
          <InfoItem label="Phone" value={professional?.phone || 'N/A'} />
          <InfoItem
            label="Birthdate"
            value={professional?.birthdate || 'N/A'}
          />
          <InfoItem label="City" value={professional?.city} />
          <InfoItem label="Address" value={professional?.address} />
          <InfoItem label="Zipcode" value={professional?.zipcode} />
          <InfoItem label="Job Title" value={professional?.profile?.jobTitle} />
          <InfoItem label="Bio" value={professional?.profile?.bio} />
          <InfoItem
            label="Verification Status"
            value={
              professional?.profile?.isVerified ? 'Verified' : 'Not Verified'
            }
          />
          {professional?.profile && (
            <>
              <DocumentItem
                label="Official Document"
                imageSrc={professional.profile.officialDocument}
              />
              <DocumentItem
                label="CIN Recto"
                imageSrc={professional.profile.cinRecto}
              />
              <DocumentItem
                label="CIN Verso"
                imageSrc={professional.profile.cinVerso}
              />
            </>
          )}
        </dl>
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={handleBackClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
        <button
          onClick={handleAccept}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

const InfoItem = ({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) => (
  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
      {value || 'N/A'}
    </dd>
  </div>
);

const DocumentItem = ({
  label,
  imageSrc,
}: {
  label: string;
  imageSrc?: string;
}) => (
  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={`${label}`}
          className="max-w-xs rounded-lg shadow-sm"
        />
      ) : (
        'No Image Available'
      )}
    </dd>
  </div>
);

export default ProfileDetails;
