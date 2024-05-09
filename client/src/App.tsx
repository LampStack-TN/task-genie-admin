import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import Main from './pages/Dashboard/Main';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import  Table  from './pages/Table';
import TasksTable from './pages/TasksTable';
import TableFour from './pages/Tablefour';
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
       
        path='/dashboard'
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
              <Table/>
            </>
          }
        />        <Route
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
              <TasksTable/>
            </>
          }
        /> 
         <Route
          path="/Services"
          element={
            <>
              <PageTitle title="Services| TaskGenie" />
              <TableFour/>
            </>
          }
        /> 
      </Routes>
    </>
  );
}

export default App;
