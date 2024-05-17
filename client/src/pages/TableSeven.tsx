import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ServiceDetails from '../components/Tables/ServiceDetails';
import DefaultLayout from '../layout/DefaultLayout';

const TableFive = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Details" />

      <div className="flex flex-col gap-10">
       
        <ServiceDetails />
        
      </div>
    </DefaultLayout>
  );
};

export default TableFive;
