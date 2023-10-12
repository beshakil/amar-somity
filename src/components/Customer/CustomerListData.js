import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdClose } from "react-icons/md";
import { RiFileExcel2Fill } from "react-icons/ri";
import { BsSearch, BsEye } from "react-icons/bs";
import { BiSolidEdit, BiTrash } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';
import ProductOne from '../../assets/images/people/userOne.png';
import { Link, NavLink } from 'react-router-dom';
import customerData from '../../data/customerData'

const CustomerListData = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';
    return (
        <div>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className='block md:hidden'>
                    <div className='flex justify-between items-center'>
                        <h2 className={`text-title-md2 font-semibold text-black dark:text-white ${banglaFontClass}`}>
                            {t('customerList')}
                        </h2>
                        <button className='flex gap-2 items-center border border-stroke p-1 bg-[#20744A] text-white'>
                            <RiFileExcel2Fill className='text-white text-base' />
                            <p className={`${banglaFontClass} text-sm`}>{t('ExcelDownload')}</p>
                        </button>
                    </div>
                </div>
                <h2 className={`md:block hidden text-title-md2 font-semibold text-black dark:text-white ${banglaFontClass}`}>
                    {t('customerList')}
                </h2>
                <div className='md:block hidden'>
                    <button className='flex gap-2 items-center border border-stroke p-2 bg-[#20744A] text-white'>
                        <RiFileExcel2Fill className='text-white text-2xl' />
                        <p className={`${banglaFontClass}`}>{t('ExcelDownload')}</p>
                    </button>
                </div>
                <div className="border border-stroke p-3">
                    <form className='' action="https://formbold.com/s/unique_form_id" method="POST">
                        <div className="relative">
                            <button className="absolute top-1/2 left-0 -translate-y-1/2">
                                <BsSearch className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary text-xl" />
                            </button>
                            <input
                                type="text"
                                placeholder={t('searchByMobileNumber')}
                                className={`w-full bg-transparent pr-4 pl-9 focus:outline-none ${banglaFontClass}`}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div>
                {customerData.map((user) => (
                    <div key={user.id} className='flex justify-between md:justify-normal items-center gap-2 md:gap-10 border-t border-stroke dark:bg-boxdark bg-white py-4.5 px-2 dark:border-strokedark md:px-6 2xl:px-7.5'>
                        <div className="w-[55%] md:w-[20%] flex gap-2 items-center">
                            <div className="">
                                <img src={ProductOne} className="h-8 md:h-12 w-8 md:w-12 rounded-full object-cover" alt="user" />
                            </div>
                            <div>
                                <p className="font-bold text-xs md:text-sm">{user.name}</p>
                                <p className="font-medium text-xs md:text-sm"><span className='font-bold'>AC:</span>{user.accountNo}</p>
                            </div>
                        </div>
                        <div className='md:block hidden w-[35%]'>
                            <div className="">
                                <p className="font-medium text-sm"><span className='font-bold'>NID:</span> {user.nid}</p>
                                <p className="font-medium text-sm"><span className='font-bold'>Address:</span> {user.Address}</p>
                            </div>
                        </div>
                        <div className='md:block hidden w-[15%]'>
                            <div className="">
                                <p className="font-medium text-sm"><span className='font-bold'>Mobile:</span> {user.phone}</p>
                                <p className="font-medium text-sm"><span className='font-bold'>Area:</span> {user.Area}</p>
                            </div>
                        </div>
                        <div className=' w-[30%] md:w-[15%]'>
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
                        </div>
                        <div className="w-[15%] md:w-[10%] flex justify-center items-center">
                            <NavLink to={`/customerlist/${user.accountNo}`} className="flex gap-1 items-center px-1 md:px-2 py-1 bg-form-strokedark text-white rounded-md mr-1 md:mr-2 text-sm">
                                <BsEye className='' /> <span className={`md:block hidden ${banglaFontClass}`}>{t('profile')}</span>
                            </NavLink>
                            <button className="flex gap-1 items-center px-1 md:px-2 py-1 bg-danger text-white rounded-md text-sm">
                                <BiTrash className='' /> <span className={`md:block hidden ${banglaFontClass}`}>{t('delete')}</span>
                            </button>
                        </div>
                    </div >
                ))}
            </div>
        </div>
    );
};

export default CustomerListData;