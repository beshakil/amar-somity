import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import Profile from './pages/Profile';
import DashboardElements from './components/DashboardElements';
import NotFound from './components/NotFound';
import DashBoardHome from './pages/DashBoardHome';
import CustomerDetailsData from './components/Customer/CustomerDetailsData';
import CustomerList from './pages/Customer/CustomerList';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));


function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 300);
  // }, []);

  return (
    <>
      <Toaster position='top-right' reverseOrder={false} containerClassName='overflow-auto' />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboardui" element={<DashboardElements />} />

        <Route element={<DefaultLayout />}>
          <Route index element={<DashBoardHome />} />
          {routes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;





// return loading ? (
//   <Loader />
// ) : (
//   <>
//     <Toaster position='top-right' reverseOrder={false} containerClassName='overflow-auto' />
//     <Routes>
//       <Route path="/login" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/dashboardui" element={<DashboardElements />} />

//       <Route element={<DefaultLayout />}>
//         <Route index element={<DashBoardHome />} />
//         {routes.map(({ path, component: Component }) => (
//           <Route
//             key={path}
//             path={path}
//             element={
//               <Suspense fallback={<Loader />}>
//                 <Component />
//               </Suspense>
//             }
//           />
//         ))}
//       </Route>
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </>
// );