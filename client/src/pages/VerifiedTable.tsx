import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import VerifiedProfessionals from '../components/Tables/VerifiedProfessionals';
import DefaultLayout from '../layout/DefaultLayout';

const TableFour = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Verified Professionals" />

      <div className="flex flex-col gap-10">
        <VerifiedProfessionals />
      </div>
    </DefaultLayout>
  );
};

export default TableFour;
