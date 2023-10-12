import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo/logo.svg';
import SidebarLinkGroup from './SidebarLinkGroup';
import { RxDashboard } from "react-icons/rx";
import { useTranslation } from 'react-i18next';
import { FaUserShield, FaChartPie, FaSpa, FaUsers, FaUserPlus, FaHandsHelping, FaChartLine, FaSms, FaKey, FaRegChartBar } from "react-icons/fa";
import { FaMoneyBillTrendUp, FaMoneyBills } from "react-icons/fa6";
import { BsListOl, BsListUl, BsCreditCardFill, BsPersonFillGear } from "react-icons/bs";
import { MdKeyboardArrowDown, MdSettings, MdAccountBalanceWallet, MdAccountBalance, MdOutlineAddCircle, MdAutorenew, MdLogout } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { ImCalculator } from "react-icons/im";
import { TbSquareRoundedNumber0Filled } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { PiPackageFill } from "react-icons/pi";

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
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
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
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-0 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className={`mb-4 ml-4 text-sm font-semibold text-bodydark2 ${banglaFontClass} text-2xl}`}>
              {t('menu')}
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <NavLink
                onClick={handleSideMenu}
                to="/"
                className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/' ||
                  pathname.includes('dashboard')) &&
                  'bg-graydark dark:bg-meta-4'
                  }`}
              >
                <RxDashboard
                  className='text-lg'
                />
                {t('dashboard')}
              </NavLink>

              <SidebarLinkGroup
                activeCondition={
                  pathname === '/adduser' || pathname === '/userlist'
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/adduser' || pathname === '/userlist' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FaUserShield className={`text-xl ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('user')}
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
                              to="/adduser"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <FaUserPlus className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('addNew')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/userlist"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <PiUserListFill className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('userList')}
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
                activeCondition={
                  pathname === '/addcustomer' || pathname === '/customerlist' || pathname === '/customersheet' || pathname === '/customerleaser'
                }
              >
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
                        }}
                      >
                        <FaUsers className={`text-xl ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('customers')}
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
                              to="/addcustomer"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
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
                                (isActive && '!text-white')
                              }
                            >
                              <PiUserListFill className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('customerList')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/customersheet"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <BsListOl className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('customerSheet')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/customerleaser"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <BsListUl className={`text-xl ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('customerLeaser')}
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
                activeCondition={pathname === '/deposit' || pathname === '/dps' || pathname === '/loan' || pathname === '/fixeddeposit' || pathname === '/insurance'}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/deposit' || pathname === '/dps' || pathname === '/loan' || pathname === '/fixeddeposit' || pathname === '/insurance' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <MdAccountBalanceWallet className={`text-xl ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('accounts')}
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
                              to="/deposit"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <MdAccountBalanceWallet className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('deposit')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/dps"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <FaMoneyBillTrendUp className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('dps')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/loan"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <ImCalculator className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('loan')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/fixeddeposit"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <FaChartPie className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('fixedDeposit')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/insurance"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <FaSpa className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('insurance')}
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
                activeCondition={pathname === '/addbank' || pathname === '/banklist'}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/addbank' || pathname === '/banklist' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <MdAccountBalance className={`text-xl ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('bankTransaction')}
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
                              to="/addbank"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <MdOutlineAddCircle className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('addNew')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/banklist"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <BsListUl className={`text-base ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[2px]"}`} />
                              {t('bankList')}
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
                activeCondition={
                  pathname === '/dailytransactions'
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/dailytransactions' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FaChartLine className={`text-lg ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('transactions')}
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
                              to="/dailytransactions"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <FaRegChartBar className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('dailyTransactions')}
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
                activeCondition={pathname === '/paymentnumber' || pathname === '/requestlist'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/paymentnumber' || pathname === '/requestlist' ? 'bg-graydark dark:bg-meta-4' : "")}`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <BsCreditCardFill className={`text-lg ${currentLanguage === 'bn' ? "-mt-[6px]" : "-mt-[4px]"}`} />
                        {t('onlinePayment')}
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
                              to="/paymentnumber"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <TbSquareRoundedNumber0Filled className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('paymentNumber')}
                            </NavLink>
                          </li>
                          <li className={`${banglaFontClass}`}>
                            <NavLink
                              to="/requestlist"
                              onClick={handleSideMenu}
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <BsListUl className={`text-lg ${currentLanguage === 'bn' ? "-mt-[4px]" : "-mt-[4px]"}`} />
                              {t('requestList')}
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
                to="/salary"
                onClick={handleSideMenu}
                className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/salary' ? 'bg-graydark dark:bg-meta-4' : "")}`}
              >
                <FaMoneyBills className={`text-xl ${currentLanguage === 'bn' ? "-mt-[2px]" : "-mt-[4px]"}`} />
                {t('salary')}
              </NavLink>

              <NavLink
                to="/income&cost"
                onClick={handleSideMenu}
                className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/income&cost' ? 'bg-graydark dark:bg-meta-4' : "")}`}
              >
                <GiTakeMyMoney className={`text-xl ${currentLanguage === 'bn' ? "-mt-[2px]" : "-mt-[4px]"}`} />
                {t('income&cost')}
              </NavLink>

              <NavLink
                to="/welfare"
                onClick={handleSideMenu}
                className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/welfare' ? 'bg-graydark dark:bg-meta-4' : "")}`}
              >
                <FaHandsHelping className={`text-xl ${currentLanguage === 'bn' ? "-mt-[2px]" : "-mt-[4px]"}`} />
                {t('welfare')}
              </NavLink>

            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className={`mb-4 ml-4 text-sm font-semibold text-bodydark2 ${banglaFontClass} text-2xl}`}>
              {t('settings')}
            </h3>
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
                className={`${banglaFontClass} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '#' ? 'bg-graydark dark:bg-meta-4' : "")}`}
              >
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
