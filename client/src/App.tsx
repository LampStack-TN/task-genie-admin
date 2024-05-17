import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import Main from './pages/Dashboard/Main';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Table from './pages/Table';
import TasksTable from './pages/TasksTable';
import TableFour from './pages/Tablefour';
import TableSix from './pages/TableSix'
import ServiceDetails from './components/Tables/ServiceDetails';
import VerifiedProfessionals from './components/Tables/VerifiedProfessionals';
import TableFive from './pages/TableFive';
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/dashboard"
          index
          element={
            <>
              <PageTitle title=" Dashboard | TaskGenie" />
              <Main />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TaskGenie" />
              <Tables />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TaskGenie" />
              <Profile />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TaskGenie" />
              <Settings />
            </>
          }
        />
        <Route
          path="/table"
          element={
            <>
              <PageTitle title="Table| TaskGenie" />
              <Table />
            </>
          }
        />{' '}
        <Route
          path="/verifiedProfessionals"
          element={
            <>
              <PageTitle title="verifiedProfessionals| TaskGenie" />
              <VerifiedProfessionals />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Signin | TaskGenie" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/TasksTable"
          element={
            <>
              <PageTitle title="TasksTable| TaskGenie" />
              <TasksTable />
            </>
          }
        />
        <Route
          path="/Services"
          element={
            <>
              <PageTitle title="Services| TaskGenie" />
              <TableFour />
            </>
          }
        />
        <Route
          path="/tasks/:id"
          element={
            <>
              <PageTitle title="Tasks| TaskGenie" />
              <TableSix />
            </>
          }
        />
        <Route
          path="/service/:id"
          element={
            <>
              <PageTitle title="Services| TaskGenie" />
              <ServiceDetails />
            </>
          }
        />
        <Route
          path="/professional/:id"
          element={
            <>
              <PageTitle title="Professionals| TaskGenie" />
              <TableFive />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
