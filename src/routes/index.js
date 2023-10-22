import { lazy } from 'react';
import CustomerDetailsData from '../components/Customer/CustomerDetailsData';

const BranchSetup = lazy(() => import('../pages/PrimarySetup/BranchSetup'));
const StaffSetup = lazy(() => import('../pages/PrimarySetup/StaffSetup'));
const DirectorSetup = lazy(() => import('../pages/PrimarySetup/DirectorSetup'));
const SomityAndGroupSetup = lazy(() => import('../pages/PrimarySetup/SomityAndGroupSetup'));
const BankSetup = lazy(() => import('../pages/PrimarySetup/BankSetup'));
const MobileBanking = lazy(() => import('../pages/PrimarySetup/MobileBanking'));
const OutLoan = lazy(() => import('../pages/PrimarySetup/OutLoan'));
const LoanCategory = lazy(() => import('../pages/PrimarySetup/LoanCategory'));
const VoucherCategory = lazy(() => import('../pages/PrimarySetup/VoucherCategory'));
const FDRScheme = lazy(() => import('../pages/PrimarySetup/FDRScheme'));
const DPSScheme = lazy(() => import('../pages/PrimarySetup/DPSScheme'));
const UserType = lazy(() => import('../pages/PrimarySetup/UserType'));

const AddCustomer = lazy(() => import('../pages/Customer/AddCustomer'));
const CustomerList = lazy(() => import('../pages/Customer/CustomerList'));

const GeneralAccount = lazy(() => import('../pages/Accounts/GeneralAccount'));
const DPSAccount = lazy(() => import('../pages/Accounts/DPSAccount'));
const Loan = lazy(() => import('../pages/Accounts/Loan'));
const FDR = lazy(() => import('../pages/Accounts/FDR'));
const Insurance = lazy(() => import('../pages/Accounts/Insurance'));

const CommonCollection = lazy(() => import('../pages/Credits/CommonCollection'));
const DepositGeneralAccount = lazy(() => import('../pages/Credits/DepositGeneralAccount'));
const InstallmentCollection = lazy(() => import('../pages/Credits/InstallmentCollection'));
const DPSCollection = lazy(() => import('../pages/Credits/DPSCollection'));
const FDRCollection = lazy(() => import('../pages/Credits/FDRCollection'));
const BankWithdraw = lazy(() => import('../pages/Credits/BankWithdraw'));
const RequestList = lazy(() => import('../pages/Credits/RequestList'));

const WithdrawGeneralAC = lazy(() => import('../pages/Debits/WithdrawGeneralAC'));
const WithdrawDPS = lazy(() => import('../pages/Debits/WithdrawDPS'));
const DPSClosing = lazy(() => import('../pages/Debits/DPSClosing'));
const FDRProfitWithdraw = lazy(() => import('../pages/Debits/FDRProfitWithdraw'));
const FDRBalanceWithdraw = lazy(() => import('../pages/Debits/FDRBalanceWithdraw'));
const FDRClosing = lazy(() => import('../pages/Debits/FDRClosing'));
const BankDeposit = lazy(() => import('../pages/Debits/BankDeposit'));

const GeneralExpense = lazy(() => import('../pages/OtherTransactions/GeneralExpense'));
const GeneralIncome = lazy(() => import('../pages/OtherTransactions/GeneralIncome'));
const DepositFromDirector = lazy(() => import('../pages/OtherTransactions/DepositFromDirector'));
const WithdrawForDirector = lazy(() => import('../pages/OtherTransactions/WithdrawForDirector'));
const GetOutLoan = lazy(() => import('../pages/OtherTransactions/GetOutLoan'));
const ReturnOutLoan = lazy(() => import('../pages/OtherTransactions/ReturnOutLoan'));
const StaffSalaryDistribution = lazy(() => import('../pages/OtherTransactions/StaffSalaryDistribution'));
const StaffSecurityMoneyDeposit = lazy(() => import('../pages/OtherTransactions/StaffSecurityMoneyDeposit'));
const StaffSecurityMoneyWithdraw = lazy(() => import('../pages/OtherTransactions/StaffSecurityMoneyWithdraw'));

const AdmissionRegister = lazy(() => import('../pages/AllReports/AdmissionRegister'));
const CustomerBalance = lazy(() => import('../pages/AllReports/CustomerBalance'));
const GeneralLedger = lazy(() => import('../pages/AllReports/GeneralLedger'));
const AccountStatement = lazy(() => import('../pages/AllReports/AccountStatement'));
const BankStatement = lazy(() => import('../pages/AllReports/BankStatement'));
const UserEntrySummary = lazy(() => import('../pages/AllReports/UserEntrySummary'));
const UserWiseEntrySummary = lazy(() => import('../pages/AllReports/UserWiseEntrySummary'));
const ProfitAndLossReport = lazy(() => import('../pages/AllReports/ProfitAndLossReport'));
const LoanOpeningClosingReport = lazy(() => import('../pages/AllReports/LoanOpeningClosingReport'));
const VoucherReport = lazy(() => import('../pages/AllReports/VoucherReport'));
const MonthlySavingsReport = lazy(() => import('../pages/AllReports/MonthlySavingsReport'));
const FixedDepositReport = lazy(() => import('../pages/AllReports/FixedDepositReport'));
const MonthlyTopSheet = lazy(() => import('../pages/AllReports/MonthlyTopSheet'));
const MonthWiseTopSheet = lazy(() => import('../pages/AllReports/MonthWiseTopSheet'));

const CollectionSheet = lazy(() => import('../pages/SheetDownload/CollectionSheet'));
const DailyCollectionSheet = lazy(() => import('../pages/SheetDownload/DailyCollectionSheet'));

const SendBulkSMS = lazy(() => import('../pages/MobileSMS/SendBulkSMS'));
const SendSingleSMS = lazy(() => import('../pages/MobileSMS/SendSingleSMS'));
const SendSMSCustomers = lazy(() => import('../pages/MobileSMS/SendSMSCustomers'));
const SMSReport = lazy(() => import('../pages/MobileSMS/SMSReport'));

const RenewPackage = lazy(() => import('../pages/PackageSettings/RenewPackage'));
const SMSPackage = lazy(() => import('../pages/PackageSettings/SMSPackage'));

const BusinessSettings = lazy(() => import('../pages/GeneralSettings/BusinessSettings'));
const BalanceSettings = lazy(() => import('../pages/GeneralSettings/BalanceSettings'));
const ProfileSettings = lazy(() => import('../pages/GeneralSettings/ProfileSettings'));

const Profile = lazy(() => import('../pages/Profile'));


const coreRoutes = [
  {
    path: '/branch-setup',
    title: 'Branch Setup',
    component: BranchSetup,
  },
  {
    path: '/staff-setup',
    title: 'Staff Setup',
    component: StaffSetup,
  },
  {
    path: '/director-setup',
    title: 'Director Setup',
    component: DirectorSetup,
  },
  {
    path: '/somity-or-group-setup',
    title: 'Somity/Group Setup',
    component: SomityAndGroupSetup,
  },
  {
    path: '/out-loan',
    title: 'Out Loan',
    component: OutLoan,
  },
  {
    path: '/bank-setup',
    title: 'Bank Setup',
    component: BankSetup,
  },
  {
    path: '/mobile-banking',
    title: 'Mobile Banking',
    component: MobileBanking,
  },
  {
    path: '/loan-category',
    title: 'Loan Category',
    component: LoanCategory,
  },
  {
    path: '/voucher-category',
    title: 'Voucher Category',
    component: VoucherCategory,
  },
  {
    path: '/fdr-scheme',
    title: 'FDR Scheme',
    component: FDRScheme,
  },
  {
    path: '/dps-scheme',
    title: 'DPS Scheme',
    component: DPSScheme,
  },
  {
    path: '/user-type',
    title: 'User Type',
    component: UserType,
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
    path: '/general-account',
    title: 'General Account',
    component: GeneralAccount,
  },
  {
    path: '/loan',
    title: 'Loan',
    component: Loan,
  },
  {
    path: '/dps',
    title: 'DPS',
    component: DPSAccount,
  },
  {
    path: '/fdr',
    title: 'FDR',
    component: FDR,
  },
  {
    path: '/insurance',
    title: 'Insurance',
    component: Insurance,
  },
  {
    path: '/request-list',
    title: 'Request List',
    component: RequestList,
  },
  {
    path: '/common-collection',
    title: 'Common Collection',
    component: CommonCollection,
  },
  {
    path: '/deposit-general-account',
    title: 'Deposit General Account',
    component: DepositGeneralAccount,
  },
  {
    path: '/installment-collection',
    title: 'Installment Collection',
    component: InstallmentCollection,
  },
  {
    path: '/dps-collection',
    title: 'DPS Collection',
    component: DPSCollection,
  },
  {
    path: '/fdr-collection',
    title: 'FDR Collection',
    component: FDRCollection,
  },
  {
    path: '/bank-withdraw',
    title: 'Bank Withdraw',
    component: BankWithdraw,
  },
  {
    path: '/withdraw-general-ac',
    title: 'Withdraw General AC',
    component: WithdrawGeneralAC,
  },
  {
    path: '/withdraw-dps',
    title: 'Withdraw DPS',
    component: WithdrawDPS,
  },
  {
    path: '/dps-closing',
    title: 'DPS Closing',
    component: DPSClosing,
  },
  {
    path: '/fdr-profit-withdraw',
    title: 'FDR Profit Withdraw',
    component: FDRProfitWithdraw,
  },
  {
    path: '/fdr-balance-withdraw',
    title: 'FDR Balance Withdraw',
    component: FDRBalanceWithdraw,
  },
  {
    path: '/fdr-closing',
    title: 'FDR Closing',
    component: FDRClosing,
  },
  {
    path: '/bank-deposit',
    title: 'Bank Deposit',
    component: BankDeposit,
  },
  {
    path: '/general-expense',
    title: 'General Expense',
    component: GeneralExpense,
  },
  {
    path: '/general-income',
    title: 'General Income',
    component: GeneralIncome,
  },
  {
    path: '/deposit-from-director',
    title: 'Deposit From Director',
    component: DepositFromDirector,
  },
  {
    path: '/withdraw-for-director',
    title: 'Withdraw For Director',
    component: WithdrawForDirector,
  },
  {
    path: '/get-out-loan',
    title: 'GetOut Loan',
    component: GetOutLoan,
  },
  {
    path: '/return-out-loan',
    title: 'Return Out Loan',
    component: ReturnOutLoan,
  },
  {
    path: '/staff-salary-distribution',
    title: 'Staff Salary Distribution',
    component: StaffSalaryDistribution,
  },
  {
    path: '/staff-security-money-deposit',
    title: 'Staff Security Money Deposit',
    component: StaffSecurityMoneyDeposit,
  },
  {
    path: '/staff-security-money-withdraw',
    title: 'Staff Security Money Withdraw',
    component: StaffSecurityMoneyWithdraw,
  },
  {
    path: '/admission-register',
    title: 'Admission Register',
    component: AdmissionRegister,
  },
  {
    path: '/customer-balance',
    title: 'Customer Balance',
    component: CustomerBalance,
  },
  {
    path: '/general-ledger',
    title: 'General Ledger',
    component: GeneralLedger,
  },
  {
    path: '/account-statement',
    title: 'Account Statement',
    component: AccountStatement,
  },
  {
    path: '/bank-statement',
    title: 'Bank Statement',
    component: BankStatement,
  },
  {
    path: '/user-entry-summary',
    title: 'User Entry Summary',
    component: UserEntrySummary,
  },
  {
    path: '/user-wise-entry-summary',
    title: 'User Wise Entry Summary',
    component: UserWiseEntrySummary,
  },
  {
    path: '/profit-and-loss-report',
    title: 'ProfitAndLossReport',
    component: ProfitAndLossReport,
  },
  {
    path: '/loan-opening-closing-report',
    title: 'LoanOpeningClosingReport',
    component: LoanOpeningClosingReport,
  },
  {
    path: '/voucher-report',
    title: 'VoucherReport',
    component: VoucherReport,
  },
  {
    path: '/monthly-savings-report',
    title: 'Monthly Savings Report',
    component: MonthlySavingsReport,
  },
  {
    path: '/fixed-deposit-report',
    title: 'Fixed Deposit Report',
    component: FixedDepositReport,
  },
  {
    path: '/monthly-top-sheet',
    title: 'Fixed Deposit Report',
    component: MonthlyTopSheet,
  },
  {
    path: '/month-wise-top-sheet',
    title: 'Month Wise Top Sheet',
    component: MonthWiseTopSheet,
  },
  {
    path: '/collection-sheet',
    title: 'Collection Sheet',
    component: CollectionSheet,
  },
  {
    path: '/daily-collection-sheet',
    title: 'DailyCollection Sheet',
    component: DailyCollectionSheet,
  },
  {
    path: '/send-bulk-sms',
    title: 'SendBulk SMS',
    component: SendBulkSMS,
  },
  {
    path: '/send-single-sms',
    title: 'Send Single SMS',
    component: SendSingleSMS,
  },
  {
    path: '/send-sms-customers',
    title: 'Send SMS Customers',
    component: SendSMSCustomers,
  },
  {
    path: '/sms-report',
    title: 'SMS Report',
    component: SMSReport,
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
