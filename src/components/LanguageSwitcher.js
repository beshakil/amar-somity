import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie'; // Import js-cookie
import bdFlag from '../assets/images/svg/bdFlag.svg'
import usaFlag from '../assets/images/svg/usaFlag.svg'

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    useEffect(() => {
        // Check if a language preference is stored in cookies
        const savedLanguage = Cookies.get('language');

        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        // Store the selected language in cookies
        Cookies.set('language', language);
    };

    const currentLanguage = i18n.language;

    return (
        <div className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out dark:hover:text-white hover:text-primary lg:text-base'>
            <div>
                {
                    currentLanguage === ('bn') ?
                        <img src={bdFlag} className='w-6 h-6' alt="User" />
                        : <img src={usaFlag} className='w-6 h-6' alt="User" />
                }
            </div>
            <div className='p-1 h-8 dark:bg-[#313D4A] bg-[#E2E8F0] rounded-lg flex items-center gap-1'>
                <button onClick={() => changeLanguage('bn')} className={`${currentLanguage === ('bn') ? "font-bangla bg-primary text-white" : ""} text-sm w-16 px-2 py-[2px] rounded-md`}>বাংলা</button>
                <button onClick={() => changeLanguage('en')} className={`${currentLanguage === ('en') ? " bg-primary text-white" : ""} text-sm w-16 px-2 py-[2px] rounded-md`}>English</button>
            </div>
        </div>
    );
}

export default LanguageSwitcher;