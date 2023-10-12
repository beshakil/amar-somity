import { lazy } from 'react';
import CustomerDetailsData from '../components/Customer/CustomerDetailsData';
const AddUser = lazy(() => import('../pages/User/AddUser'));
const UserList = lazy(() => import('../pages/User/UserList'));

const AddCustomer = lazy(() => import('../pages/Customer/AddCustomer'));
const CustomerList = lazy(() => import('../pages/Customer/CustomerList'));
const CustomerSheet = lazy(() => import('../pages/Customer/CustomerSheet'));
const CustomerLeaser = lazy(() => import('../pages/Customer/CustomerLeaser'));

const Deposit = lazy(() => import('../pages/Accounts/Deposit'));
const Dps = lazy(() => import('../pages/Accounts/Dps'));
const Loan = lazy(() => import('../pages/Accounts/Loan'));
const FixedDeposit = lazy(() => import('../pages/Accounts/FixedDeposit'));
const Insurance = lazy(() => import('../pages/Accounts/Insurance'));

const AddBank = lazy(() => import('../pages/Bank/AddBank'));
const BankList = lazy(() => import('../pages/Bank/BankList'));

const DailyTransactions = lazy(() => import('../pages/Transactions/DailyTransactions'));

const PaymentNumber = lazy(() => import('../pages/OnlinePayment/PaymentNumber'));
const RequestList = lazy(() => import('../pages/OnlinePayment/RequestList'));

const Salary = lazy(() => import('../pages/Salary'));
const IncomeAndCost = lazy(() => import('../pages/IncomeAndCost'));
const Welfare = lazy(() => import('../pages/Welfare'));

const RenewPackage = lazy(() => import('../pages/PackageSettings/RenewPackage'));
const SMSPackage = lazy(() => import('../pages/PackageSettings/SMSPackage'));

const BusinessSettings = lazy(() => import('../pages/GeneralSettings/BusinessSettings'));
const BalanceSettings = lazy(() => import('../pages/GeneralSettings/BalanceSettings'));
const ProfileSettings = lazy(() => import('../pages/GeneralSettings/ProfileSettings'));

const Profile = lazy(() => import('../pages/Profile'));


const coreRoutes = [
  {
    path: '/adduser',
    title: 'Add Users',
    component: AddUser,
  },
  {
    path: '/userlist',
    title: 'User List',
    component: UserList,
  },
  {
    path: '/addcustomer',
    title: 'Add Customer',
    component: AddCustomer,
  },
  {
    path: '/customerlist',
    title: 'Customer List',
    component: CustomerList,
  },
  {
    path: '/customerlist/:accountNo',
    title: 'Customer Details Data',
    component: CustomerDetailsData,
  },
  {
    path: '/customerleaser',
    title: 'Customer Leaser',
    component: CustomerLeaser,
  },
  {
    path: '/customersheet',
    title: 'Customer Sheet',
    component: CustomerSheet,
  },
  {
    path: '/deposit',
    title: 'Deposit',
    component: Deposit,
  },
  {
    path: '/loan',
    title: 'Loan',
    component: Loan,
  },
  {
    path: '/dps',
    title: 'Dps',
    component: Dps,
  },
  {
    path: '/fixeddeposit',
    title: 'Fixed Deposit',
    component: FixedDeposit,
  },
  {
    path: '/insurance',
    title: 'Insurance',
    component: Insurance,
  },
  {
    path: '/addbank',
    title: 'Add Bank',
    component: AddBank,
  },
  {
    path: '/banklist',
    title: 'Bank List',
    component: BankList,
  },
  {
    path: '/dailytransactions',
    title: 'Daily Transactions',
    component: DailyTransactions,
  },
  {
    path: '/paymentnumber',
    title: 'Payment Number',
    component: PaymentNumber,
  },
  {
    path: '/requestlist',
    title: 'Reques tList',
    component: RequestList,
  },
  {
    path: '/salary',
    title: 'Salary',
    component: Salary,
  },
  {
    path: '/income&cost',
    title: 'Income & Cost',
    component: IncomeAndCost,
  },
  {
    path: '/welfare',
    title: 'Welfare',
    component: Welfare,
  },
  {
    path: '/renewpackage',
    title: 'RenewPackage',
    component: RenewPackage,
  },
  {
    path: '/sms-package',
    title: 'SMS Package',
    component: SMSPackage,
  },
  {
    path: '/business-settings',
    title: 'Business Settings',
    component: BusinessSettings,
  },
  {
    path: '/balance-settings',
    title: 'Balance Settings',
    component: BalanceSettings,
  },
  {
    path: '/profile-settings',
    title: 'ProfileSettings',
    component: ProfileSettings,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  }
];

const routes = [...coreRoutes];
export default routes;
