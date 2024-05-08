import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import TableThree from '../components/Tables/TableThree';
import DefaultLayout from '../layout/DefaultLayout';

const TasksTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tasks Table" />

      <div className="flex flex-col gap-10">
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TasksTable;
