import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableTwo from '../components/Tables/TableTwo';
import DefaultLayout from '../layout/DefaultLayout';

const Table = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Table" />

      <div className="flex flex-col gap-10">
       
        <TableTwo />
        
      </div>
    </DefaultLayout>
  );
};

export default Table;
