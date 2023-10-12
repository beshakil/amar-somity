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

const customerData = [
  {
    id: '1',
    name: 'Shakil Ahmed',
    father: "Mozammel haq Khokhon",
    mother: "Shirin Akter",
    birthdayDate: "01-06-1997",
    email: 'dev.shakilshajib@gmail.com',
    phone: '01234567890',
    accountNo: "1507018",
    accountType: 'Saving',
    Address: ' Nagariya bari, Dakkkin Khan, Uttara, Dhaka',
    Area: 'Dhaka',
    group: 'Weekly',
    depositAmount: '1000',
    registerDate: "01-0-2023",
    nid: "123456789123",
    passWord: '123456',
    accountStatement: [
      { date: "08/01/2023", tk: "500" },
      { date: "08/02/2023", tk: "600" },
      { date: "08/03/2023", tk: "700" },
    ]
  },
  {
    id: '2',
    name: 'Shakil Shajib',
    father: "Mozammel haq Khokhon",
    mother: "Shirin Akter",
    birthdayDate: "01-06-1997",
    email: 'dev.shakilshajib@gmail.com',
    phone: '01234567890',
    accountNo: "1507019",
    accountType: 'DPS',
    Address: ' Nagariya bari, Dakkkin Khan, Uttara, Dhaka',
    Area: 'Dhaka',
    group: 'Weekly',
    depositAmount: '1000',
    registerDate: "01-0-2023",
    nid: "123456789123",
    passWord: '123456',
    accountStatement: [
      { date: "08/01/2023", tk: "500" },
      { date: "08/02/2023", tk: "600" },
      { date: "08/03/2023", tk: "700" },
    ]
  },
  {
    id: '3',
    name: 'Shakil Ahmed Shajib',
    father: "Mozammel haq Khokhon",
    mother: "Shirin Akter",
    birthdayDate: "01-06-1997",
    email: 'dev.shakilshajib@gmail.com',
    phone: '01234567890',
    accountNo: "1507020",
    accountType: 'Insurance',
    Address: 'Nagariya bari, Dakkkin Khan, Uttara, Dhaka',
    Area: 'Dhaka',
    group: 'Weekly',
    depositAmount: '1000',
    registerDate: "01-0-2023",
    nid: "123456789123",
    passWord: '123456',
    accountStatement: [
      { date: "08/01/2023", tk: "500" },
      { date: "08/02/2023", tk: "600" },
      { date: "08/03/2023", tk: "700" },
    ]
  }
]

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster position='top-right' reverseOrder={false} containerClassName='overflow-auto' />
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/dashboardui" element={<DashboardElements />} />

        <Route element={<DefaultLayout />}>
          <Route index element={<DashBoardHome />} />
          {/* <Route path="/customerlist" element={<CustomerList customerData={customerData} />} /> */}
          {/* <Route path="/customerlist/:accountNo" element={
            <Suspense fallback={<Loader />}>
              <CustomerDetailsData customerData={customerData} />
            </Suspense>
          } /> */}
          {/* <Route index element={<ECommerce />} /> */}
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
