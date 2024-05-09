import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ServiceTable from '../components/Tables/ServiceTable';
import DefaultLayout from '../layout/DefaultLayout';

const TableFour = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Services Table" />

      <div className="flex flex-col gap-10">
        <ServiceTable />
      </div>
    </DefaultLayout>
  );
};

export default TableFour;
