import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TaskDetails from '../components/Tables/TaskDetails';
import DefaultLayout from '../layout/DefaultLayout';

const TableFive = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Details" />

      <div className="flex flex-col gap-10">
       
        <TaskDetails />
        
      </div>
    </DefaultLayout>
  );
};

export default TableFive;
