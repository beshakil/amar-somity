import React from 'react';
import customerData from '../data/customerData';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const CustomerListData = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';
    return (
        <div>
            {customerData.map((user) => (
                <div key={user.id} className='flex justify-between md:justify-normal items-center gap-2 md:gap-10 border-t border-stroke dark:bg-boxdark bg-white py-4.5 px-2 dark:border-strokedark md:px-6 2xl:px-7.5'>
                    <div className="w-[55%] md:w-[20%] flex gap-2 items-center">
                    {t('customerList')}
                        {/* <div className="">
                            <img src={ProductOne} className="h-8 md:h-12 w-8 md:w-12 rounded-full object-cover" alt="user" />
                        </div> */}
                        <div>
                            <p className="font-bold text-xs md:text-sm">{user.name}</p>
                            <p className="font-medium text-xs md:text-sm"><span className='font-bold'>AC:</span>{user.accountNo}</p>
                        </div>
                    </div>
                    <div className='md:block hidden w-[15%]'>
                        <div className="">
                            <p className="font-medium text-sm"><span className='font-bold'>Mobile:</span> {user.phone}</p>
                            <p className="font-medium text-sm"><span className='font-bold'>Area:</span> {user.Area}</p>
                        </div>
                    </div>
                    {/* <div className=' w-[30%] md:w-[15%]'>
                        <div className=" flex items-center justify-center">
                            <div className={`${banglaFontClass} inline-flex rounded-full 
                                ${user.accountType === "Saving" ? "bg-success text-success" :
                                    user.accountType === "DPS" ? "bg-danger text-danger" :
                                        user.accountType === "Insurance" ? "bg-warning text-warning" : null} bg-opacity-10 py-1 px-3 text-sm `}>
                                {user.accountType === "Saving" ? <p className='text-center text-[11px] md:text-sm'>{t('savings')}</p> :
                                    user.accountType === "DPS" ? <p className='text-center text-[11px] md:text-sm'>{t('dps')}</p> :
                                        user.accountType === "Insurance" ? <p className='text-center text-[11px] md:text-sm'>{t('fixedDeposit')}</p> : null}
                            </div>
                        </div>
                    </div> */}
                    <div className="w-[15%] md:w-[10%] flex justify-center items-center">
                        <Link to={`/customerlist/${user.accountNo}`} className="flex gap-1 items-center px-1 md:px-2 py-1 bg-form-strokedark text-white rounded-md mr-1 md:mr-2 text-sm">
                            {/* <BsEye className='' /> */}
                            <span className={`md:block hidden`}>Profile View</span>
                        </Link>
                    </div>
                </div >
            ))}
        </div>
    );
};

export default CustomerListData;