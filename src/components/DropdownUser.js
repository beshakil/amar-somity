import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import UserOne from '../assets/images/user/user-01.png';
import LanguageSwitcher from './LanguageSwitcher';
import { MdKeyboardArrowDown, MdOutlineSettings, MdLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TbLayersDifference } from "react-icons/tb";
import { useTranslation } from 'react-i18next';


const DropdownUser = () => {

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Shakil Ahmed
          </span>
          <span className={`${banglaFontClass} block text-sm`}>{t('member')}</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>
        <MdKeyboardArrowDown className={`hidden text-2xl fill-current sm:block ${dropdownOpen ? 'rotate-180' : ''}`} />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-70 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? 'block' : 'hidden'
          }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <TbLayersDifference className='text-2xl -ml-1' />
              <p className={`${banglaFontClass}`}> {t('accountType')}<strong className='text-meta-3'> {t('savings')}</strong></p>
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base ${banglaFontClass}`}
            >
              <FaRegUser className='text-xl' />
              {t('myProfile')}
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base ${banglaFontClass}`}
            >
              <MdOutlineSettings className='text-2xl' />
              {t('accountSettings')}
            </Link>
          </li>
          <li className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base md:hidden'>
            <LanguageSwitcher />
          </li>
        </ul>
        <button className={`flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base ${banglaFontClass}`}>
          <MdLogout className='text-2xl rotate-180' />
          {t('logOut')}
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
