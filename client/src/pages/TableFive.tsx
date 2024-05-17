import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ProfileDetails from '../components/Tables/ProfileDetails';
import DefaultLayout from '../layout/DefaultLayout';

const TableFive = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Details" />

      <div className="flex flex-col gap-10">
       
        <ProfileDetails />
        
      </div>
    </DefaultLayout>
  );
};

export default TableFive;
