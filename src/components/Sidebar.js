import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo/logo.svg';
import SidebarLinkGroup from './SidebarLinkGroup';
import { RxDashboard } from "react-icons/rx";
import { useTranslation } from 'react-i18next';
import { FaUserShield, FaChartPie, FaUser, FaSpa, FaUsers, FaUserPlus, FaHandsHelping, FaChartLine, FaSms, FaKey, FaRegChartBar, FaDownload, FaUserFriends, FaMobileAlt } from "react-icons/fa";
import { FaMoneyBillTrendUp, FaMoneyBills, FaMapLocationDot, FaMoneyBillWheat, FaUserTag, FaSheetPlastic, FaEnvelopesBulk } from "react-icons/fa6";
import { BsCalendar2MonthFill, BsListUl, BsFileEarmarkSpreadsheetFill, BsPersonFillGear } from "react-icons/bs";
import { MdKeyboardArrowDown, MdGroups, MdSettings, MdAccountBalanceWallet, MdCalendarMonth, MdOutlineAddCircle, MdAutorenew, MdLogout } from "react-icons/md";
import { IoArrowRedo, IoArrowUndo } from "react-icons/io5";
import { BiCollection } from "react-icons/bi";
import { ImCalculator } from "react-icons/im";
import { PiUserListFill } from "react-icons/pi";
import { TbReport, TbCategory, TbFileInvoice, TbReportAnalytics } from "react-icons/tb";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { PiPackageFill, PiUserCircleGearFill, PiPercentFill } from "react-icons/pi";
import { VscSettings, VscCloseAll } from "react-icons/vsc";
import { GoGitBranch } from "react-icons/go";
import { GiCherish } from "react-icons/gi";
import { ImArrowUpLeft2, ImArrowDownRight2 } from "react-icons/im";
import { AiFillCalculator } from "react-icons/ai";
import { RiBankFill, RiCloseCircleFill } from "react-icons/ri";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';


  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const handleSideMenu = () => {
    setSidebarOpen(false);
  }

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">

          {/* <img src={Logo} alt="Logo" /> */}
          <p className={`text-white text-3xl font-bold ${banglaFontClass}`}> {t('somityName')} </p>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-0 lg:px-6">
          <div>
            <h3 className={`mb-4 ml-4 text-sm font-semibold text-bodydark2 ${banglaFontClass} text-2xl}`}>{t('menu')}</h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              <NavLink
                onClick={handleSideMenu}
                to="/"
                className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/' ||
                  pathname.includes('dashboard')) &&
                  'bg-graydark dark:bg-meta-4'}`}>
                <RxDashboard className='text-lg' />
                {t('dashboard')}
              </NavLink>

              <SidebarLinkGroup activeCondition={pathname === '/branch-setup' || pathname === '/director-setup' || pathname === '/staff-setup' || pathname === '/area-list' || pathname === '/somity-or-group-setup' || pathname === '/out-loan' || pathname === '/loan-category' || pathname === '/voucher-category' || pathname === '/fdr-scheme' || pathname === '/dps-scheme' || pathname === '/user-type' || pathname === '/bank-setup' || pathname === 'mobile-banking'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/branch-setup' || pathname === '/director-setup' || pathname === '/staff-setup' || pathname === '/area-list' || pathname === '/somity-or-group-setup' || pathname === '/out-loan' || pathname === '/loan-category' || pathname === '/voucher-category' || pathname === '/fdr-scheme' || pathname === '/dps-scheme' || pathname === '/user-type' || pathname === '/bank-setup' || pathname === 'mobile-banking' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}>
                        <VscSettings className={`text-xl ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('primarySetup')}
                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'} text-2xl`} />
                      </NavLink>
                      <div className={`translate  transform overflow-hidden ${!open && 'hidden'}`}>
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/branch-setup"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <GoGitBranch className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('BranchList')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/bank-setup"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <RiBankFill className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('bankList')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/mobile-banking"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaMobileAlt className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('MobileBanking')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/somity-or-group-setup"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <GiCherish className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('SomityAndGroupList')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/director-setup"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaUserShield className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('AddDirectorList')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/staff-setup"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaUserFriends className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('AddStaffList')}
                            </NavLink>
                          </li>

                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/out-loan"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <AiFillCalculator className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              <p className='ml-[0px]'>{t('OutLoan')}</p>
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/loan-category"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <TbCategory className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('LoanCategory')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/voucher-category"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <TbFileInvoice className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('VoucherCategory')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/fdr-scheme"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaMoneyBillWheat className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('FDRScheme')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/dps-scheme"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaMoneyBillTrendUp className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('DPSScheme')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/user-type"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <PiUserCircleGearFill className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('UserType')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={pathname === '/addcustomer' || pathname === '/customerlist'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/addcustomer' || pathname === '/customerlist' || pathname === '/customersheet' || pathname === '/customerleaser' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}>
                        <FaUsers className={`text-xl ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('customers')}
                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'} text-2xl`} />
                      </NavLink>
                      <div className={`translate  transform overflow-hidden ${!open && 'hidden'}`}>
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/addcustomer"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaUserPlus className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('addNew')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/customerlist"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <PiUserListFill className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('customerList')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={pathname === '/general-account' || pathname === '/dps' || pathname === '/loan' || pathname === '/fdr' || pathname === '/insurance'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/general-account' || pathname === '/dps' || pathname === '/loan' || pathname === '/fdr' || pathname === '/insurance' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}>
                        <MdAccountBalanceWallet className={`text-xl ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('accounts')}
                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'} text-2xl`} />
                      </NavLink>
                      <div className={`translate  transform overflow-hidden ${!open && 'hidden'}`}>
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/general-account"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <MdAccountBalanceWallet className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('GeneralAccounts')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/loan"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <ImCalculator className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('loan')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/dps"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaMoneyBillTrendUp className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('dps')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/fdr"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaChartPie className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('fdrScheme')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/insurance"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaSpa className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('insurance')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={pathname === '/deposit-general-account' || pathname === '/common-collection' || pathname === '/installment-collection' || pathname === '/dps-collection' || pathname === '/fdr-collection' || pathname === '/bank-withdraw'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/deposit-general-account' || pathname === '/common-collection' || pathname === '/installment-collection' || pathname === '/fdr-collection' || pathname === '/dps-collection' || pathname === '/bank-withdraw' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}>
                        <IoArrowRedo className={`text-xl ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('Credits')}
                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'} text-2xl`} />
                      </NavLink>
                      <div className={`translate  transform overflow-hidden ${!open && 'hidden'}`}>
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/common-collection"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <BiCollection className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('CommonCollection')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/deposit-general-account"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <MdAccountBalanceWallet className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('DepositGeneralAccount')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/installment-collection"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <ImCalculator className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('InstallmentCollection')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/dps-collection"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaMoneyBillTrendUp className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('DPSCollection')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/fdr-collection"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaChartPie className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('FDRCollection')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/bank-withdraw"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <RiBankFill className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('BankWithdraw')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/request-list"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <BsListUl className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('requestList')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={pathname === '/withdraw-general-ac' || pathname === '/withdraw-dps' || pathname === '/dps-closing' || pathname === '/fdr-profit-withdraw' || pathname === '/fdr-balance-withdraw' || pathname === '/fdr-closing' || pathname === '/bank-deposit'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/withdraw-general-ac' || pathname === '/withdraw-dps' || pathname === '/dps-closing' || pathname === '/fdr-profit-withdraw' || pathname === '/fdr-balance-withdraw' || pathname === '/fdr-closing' || pathname === '/bank-deposit' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}>
                        <IoArrowUndo className={`text-xl ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('Debits')}
                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'} text-2xl`} />
                      </NavLink>
                      <div className={`translate  transform overflow-hidden ${!open && 'hidden'}`}>
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/withdraw-general-ac"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <BiCollection className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('WithdrawGeneralAC')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/withdraw-dps"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <MdAccountBalanceWallet className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('WithdrawDPS')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/dps-closing"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <RiCloseCircleFill className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('DPSClosing')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/fdr-profit-withdraw"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaMoneyBillTrendUp className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('FDRProfitWithdraw')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/fdr-balance-withdraw"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaChartPie className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('FDRBalanceWithdraw')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/fdr-closing"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <RiCloseCircleFill className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('FDRClosing')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/bank-deposit"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <RiBankFill className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('BankDeposit')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={pathname === '/general-expense' || pathname === '/general-income' || pathname === '/deposit-from-director' || pathname === '//withdraw-for-director' || pathname === '/get-out-loan' || pathname === '/return-out-loan' || pathname === '/staff-salary-distribution' || pathname === '//staff-security-money-deposit' || pathname === '/staff-security-money-deposit' || pathname === '/staff-security-money-withdraw'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/general-expense' || pathname === '/general-income' || pathname === '/deposit-from-director' || pathname === '//withdraw-for-director' || pathname === '/get-out-loan' || pathname === '/return-out-loan' || pathname === '/staff-salary-distribution' || pathname === '//staff-security-money-deposit' || pathname === '/staff-security-money-deposit' || pathname === '/staff-security-money-withdraw' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}>
                        <FaChartLine className={`text-xl ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('OtherTransactions')}
                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'} text-2xl`} />
                      </NavLink>
                      <div className={`translate  transform overflow-hidden ${!open && 'hidden'}`}>
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/general-expense"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <ImArrowUpLeft2 className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('GeneralExpense')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/general-income"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <ImArrowDownRight2 className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('GeneralIncome')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/deposit-from-director"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <ImArrowDownRight2 className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('DepositFromDirector')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/withdraw-for-director"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <ImArrowUpLeft2 className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('WithdrawForDirector')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/get-out-loan"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <ImArrowDownRight2 className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('GetOutLoan')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/return-out-loan"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <RiCloseCircleFill className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('ReturnOutLoan')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/staff-salary-distribution"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaMoneyBills className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('StaffSalaryDistribution')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/staff-security-money-deposit"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <ImArrowDownRight2 className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('StaffSecurityMoneyDeposit')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/staff-security-money-withdraw"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <ImArrowUpLeft2 className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('StaffSecurityMoneyWithdraw')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={pathname === '/admission-register' || pathname === '/customer-balance' || pathname === '/general-ledger' || pathname === '/account-statement' || pathname === '/bank-statement' || pathname === '/user-entry-summary' || pathname === '/user-wise-entry-summary' || pathname === '/profit-and-loss-report' || pathname === '/loan-opening-closing-report' || pathname === '/voucher-report' || pathname === '/monthly-savings-report' || pathname === '/fixed-deposit-report' || pathname === '/monthly-top-sheet' || pathname === '/month-wise-top-sheet'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/admission-register' || pathname === '/customer-balance' || pathname === '/general-ledger' || pathname === '/account-statement' || pathname === '/bank-statement' || pathname === '/user-entry-summary' || pathname === '/user-wise-entry-summary' || pathname === '/profit-and-loss-report' || pathname === '/loan-opening-closing-report' || pathname === '/voucher-report' || pathname === '/monthly-savings-report' || pathname === '/fixed-deposit-report' || pathname === '/monthly-top-sheet' || pathname === '/month-wise-top-sheet' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}>
                        <TbReport className={`text-xl ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('AllReports')}
                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'} text-2xl`} />
                      </NavLink>
                      <div className={`translate  transform overflow-hidden ${!open && 'hidden'}`}>
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/admission-register"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <PiUserListFill className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('AdmissionRegister')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/customer-balance"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaUsers className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('CustomerBalance')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/general-ledger"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <HiOutlineDocumentReport className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('GeneralLedger')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/account-statement"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <MdAccountBalanceWallet className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('AccountStatement')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/bank-statement"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <RiBankFill className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('BankStatement')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/user-entry-summary"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaUserFriends className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('UserEntrySummary')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/user-wise-entry-summary"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaUserTag className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('UserWiseEntrySummary')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/profit-and-loss-report"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <PiPercentFill className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('ProfitAndLossReport')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/loan-opening-closing-report"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <AiFillCalculator className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('LoanOpeningClosingReport')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/voucher-report"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <TbFileInvoice className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('VoucherReport')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/monthly-savings-report"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaMoneyBillTrendUp className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('MonthlySavingsReport')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/fixed-deposit-report"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaChartPie className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('FixedDepositReport')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/monthly-top-sheet"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <MdCalendarMonth className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('MonthlyTopSheet')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/month-wise-top-sheet"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <BsCalendar2MonthFill className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('MonthWiseTopSheet')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={pathname === '/collection-sheet' || pathname === '/daily-collection-sheet'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/collection-sheet' || pathname === '/daily-collection-sheet' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}>
                        <FaDownload className={`text-base ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('SheetDownload')}
                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'} text-2xl`} />
                      </NavLink>
                      <div className={`translate  transform overflow-hidden ${!open && 'hidden'}`}>
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/collection-sheet"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaSheetPlastic className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('CollectionSheet')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/daily-collection-sheet"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <BsFileEarmarkSpreadsheetFill className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('DailyCollectionSheet')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup
                activeCondition={pathname === '/send-bulk-sms' || pathname === '/send-single-sms' || pathname === '/send-sms-customers' || pathname === '/sms-report'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/send-bulk-sms' || pathname === '/send-single-sms' || pathname === '/send-sms-customers' || pathname === '/sms-report' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}>
                        <FaSms className={`text-lg ${currentLanguage === 'bn' ? "-mt-[3px]" : "-mt-[4px]"}`} />
                        {t('MobileSMS')}
                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'} text-2xl`} />
                      </NavLink>

                      <div className={`translate  transform overflow-hidden ${!open && 'hidden'}`}>
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/send-bulk-sms"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaEnvelopesBulk className={`text-xl -ml-1 ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('SendBulkSMS')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/send-single-sms"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaUser className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('SendSingleSMS')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/send-sms-customers"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <FaUsers className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('SendSMSCustomers')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/sms-report"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')}>
                              <TbReportAnalytics className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('SMSReport')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className={`mb-4 ml-4 text-sm font-semibold text-bodydark2 ${banglaFontClass} text-2xl}`}>{t('settings')}</h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={pathname === '/renewpackage' || pathname === '/sms-package'}>

                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="/salary"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/renewpackage' || pathname === '/sms-package' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <PiPackageFill className={`text-lg ${currentLanguage === 'bn' ? "-mt-[3px]" : "-mt-[4px]"}`} />
                        {t('packageSettings')}
                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'} text-2xl`} />
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}

                      <div
                        className={`translate  transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/renewpackage"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <MdAutorenew className={`text-xl -ml-1 ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('renewPackage')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/sms-package"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <FaSms className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('smsPackage')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup
                activeCondition={pathname === '/business-settings' || pathname === '/balance-settings' || pathname === '/profile-settings'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/business-settings' || pathname === '/balance-settings' || pathname === '/profile-settings' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <MdSettings className={`text-lg ${currentLanguage === 'bn' ? "-mt-[3px]" : "-mt-[4px]"}`} />
                        {t('generalSettings')}
                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'} text-2xl`} />
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}

                      <div
                        className={`translate  transform overflow-hidden ${!open && 'hidden'
                          }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/business-settings"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <FaKey className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('businessSettings')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/balance-settings"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <MdAccountBalanceWallet className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('balanceSettings')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/profile-settings"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <BsPersonFillGear className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('profileSettings')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <NavLink
                to="#"
                onClick={handleSideMenu}
                className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '#' ? 'bg-graydark dark:bg-meta-4' : "")}`}>
                <MdLogout className={`text-xl rotate-180 ${currentLanguage === 'bn' ? "-mt-[3px]" : "-mt-[4px]"}`} />
                {t('logOut')}
              </NavLink>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
