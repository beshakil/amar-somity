import { useParams, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdClose, MdControlCamera } from "react-icons/md";
import { RiFileExcel2Fill } from "react-icons/ri";
import { BsSearch, BsPrinter } from "react-icons/bs";
import { BiSolidEdit, BiTrash } from "react-icons/bi";
import ProductOne from '../../assets/images/people/userOne.png';
import cardLOne from '../../assets/images/cards/cards-01.png';
import SearchPopup from './SearchPopup';
import CustomerStatement from './CustomerStatement';
import customerData from '../../data/customerData'

const CustomerDetailsData = () => {

    const [searchPopup, setSearchPopup] = useState(false)
    const [contentHide, setContentHide] = useState(true)
    const [searchStatementData, setSearchStatementData] = useState([])

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    const { accountNo } = useParams();
    const customer = customerData.find((customer) => customer.accountNo === accountNo);

    if (!customer) {
        return <div>customer not found</div>;
    }

    const handleSearchOpen = () => {
        setSearchPopup(true)
    }

    const handleSearchClose = () => {
        setSearchPopup(false)
    }

    console.log('filteredStatements', searchStatementData)

    const handlePrint = () => {

        window.print(); // Trigger the browser's print dialog
    };

    return (
        <>
            <div className='md:hidden block my-4 mt-0 print:hidden'>
                <div className='flex justify-between gap-2'>
                    <button onClick={handleSearchOpen} className='border-none flex gap-1 items-center border border-stroke pt-2 pb-1 px-3 rounded-md bg-meta-3 text-white'>
                        <BsSearch className='text-white text-base -mt-1' />
                        <p className={`${banglaFontClass} text-sm md:text-base`}>{t('statement')}</p>
                    </button>
                    <button onClick={handlePrint} className='border-none flex gap-1 items-center border border-stroke pt-2 pb-1 px-3 rounded-md bg-[#FF6A00] text-white'>
                        <BsPrinter className='text-white text-base -mt-1' />
                        <p className={`${banglaFontClass} text-sm md:text-base`}>{t('print')}</p>
                    </button>
                </div>
            </div>
            <div className=' print:mt-10 flex print:justify-between justify-center md:justify-between items-center pb-5 md:pb-10'>
                <div className='text-center print:text-left md:text-left'>
                    <p className='text-lg print:text-2xl md:text-xl font-semibold'>Dreamers Club</p>
                    <p className='text-xs print:text-lg'>Sordar Monjil, Mokimabad, Hajigong, Chandpur</p>
                    <p className='text-xs print:text-lg md:text-sm'>dev.shakilshajib@gmail.com</p>
                    <p className='text-xs print:text-lg md:text-sm'>016565455646</p>
                </div>
                <div className='md:block hidden print:block'>
                <div className="flex flex-col justify-center items-center">
                    <img src={cardLOne} className="h-16 print:h-30 md:h-20 w-16 print:w-30 md:w-20 rounded-md object-cover" alt="customer" />
                </div>
                </div>
            </div>

            <div className="rounded-md dark:bg-boxdark bg-white p-3 md:p-10 print:-mt-5">

                <div className='flex justify-between items-center pb-4 border-b border-stroke mt-4 md:-mt-4'>
                    <div>
                        <p className={`text-lg md:text-2xl print:text-2xl font-bold ${banglaFontClass}`}>{customer.name} {t('profile')}:</p>
                    </div>
                    <div className='md:block hidden'>
                        <div className='flex gap-2'>
                            <button onClick={handleSearchOpen} className='border-none flex gap-1 items-center border border-stroke pt-2 pb-1 px-3 rounded-md bg-success text-white'>
                                <BsSearch className='text-white text-base -mt-1' />
                                <p className={`${banglaFontClass} text-sm md:text-base`}>{t('statement')}</p>
                            </button>
                            <button onClick={handlePrint} className='border-none flex gap-1 items-center border border-stroke pt-2 pb-1 px-3 rounded-md bg-[#FF6A00] text-white'>
                                <BsPrinter className='text-white text-base -mt-1' />
                                <p className={`${banglaFontClass} text-sm md:text-base`}>{t('print')}</p>
                            </button>
                        </div>
                    </div>
                    <Link to={`/customerlist`} className='bg-primary text-white rounded-md'><MdClose className='text-3xl md:text-4xl p-1 md:p-2' /></Link>
                </div>



                <div className={`print:flex col-span-2 md:flex print:gap-26 md:gap-26 h-full items-center pt-5 ${contentHide === false ? "mb-0" : "md:py-10"}`}>
                    <div className='w-full md:w-1/2 h-[180] md:h-[220px] dark:bg-boxdark-2 bg-boxdark rounded-md p-5'>
                        <div className='flex justify-between md:justify-center gap-0 md:gap-6 items-center '>
                            <div className="flex flex-col justify-center items-center w-[40%]">
                                <img src={ProductOne} className="h-26 md:h-32 w-26 md:w-32 rounded-full object-cover" alt="customer" />
                            </div>
                            <div className='w-[60%]'>
                                <div className='flex gap-3 md:gap-0'>
                                    <p className={`${banglaFontClass} w-20 md:w-40 text-xs md:text-sm font-bold text-whiter`}>{t('deposit')}</p>
                                    <p className={`${banglaFontClass} md:w-20 text-whiter text-xs md:text-sm`}>: ৳ 10</p>
                                </div>
                                <div className='flex gap-3 md:gap-0 mt-2'>
                                    <p className={`${banglaFontClass} w-20 md:w-40 text-xs md:text-sm font-bold text-whiter`}>{t('dps')}</p>
                                    <p className={`${banglaFontClass} md:w-20 text-whiter text-xs md:text-sm`}>: ৳ 10,0000</p>
                                </div>
                                <div className='flex gap-3 md:gap-0 mt-2'>
                                    <p className={`${banglaFontClass} w-20 md:w-40 text-xs md:text-sm font-bold text-whiter`}>{t('loan')}</p>
                                    <p className={`${banglaFontClass} md:w-20 text-whiter text-xs md:text-sm`}>: ৳ 10,00</p>
                                </div>
                                <div className='flex gap-3 md:gap-0 mt-2'>
                                    <p className={`${banglaFontClass} w-20 md:w-40 text-xs md:text-sm font-bold text-whiter`}>{t('fixedDeposit')}</p>
                                    <p className={`${banglaFontClass} md:w-20 text-whiter text-xs md:text-sm`}>: ৳ 10</p>
                                </div>
                                <div className='flex gap-3 md:gap-0 mt-2'>
                                    <p className={`${banglaFontClass} w-20 md:w-40 text-xs md:text-sm font-bold text-whiter`}>{t('insurance')}</p>
                                    <p className={`${banglaFontClass} md:w-20 text-whiter text-xs md:text-sm`}>: ৳ 10</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex justify-between pb-0 md:pb-0 pt-4'>
                            <button className={`flex gap-1 items-center px-1 md:px-2 p-1 md:py-1 bg-meta-3 text-white rounded-md mt-2 text-xs md:text-sm ${banglaFontClass}`}>
                                <BiSolidEdit className='text-xs md:text-base' />{t('customers')}: {t('savings')}
                            </button>
                            <button className={`flex gap-1 items-center px-1 md:px-2 p-1 md:py-1 bg-meta-8 text-white rounded-md mt-2 text-xs md:text-sm ${banglaFontClass}`}>
                                <BiSolidEdit className='text-xs md:text-base' />{t('group')}: {t('monthly')}
                            </button>
                            <button className={`flex gap-1 items-center px-1 md:px-2 p-1 md:py-1 bg-meta-5 text-white rounded-md mt-2 text-xs md:text-sm ${banglaFontClass}`}>
                                <BiSolidEdit className='text-xs md:text-base' /> {t('joma')}: 1000
                            </button>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 mt-5 md:mt-0'>
                        <div className='flex justify-between pb-4 border-b border-stroke mb-5'>
                            <div>
                                <p className={`text-2xl font-bold ${banglaFontClass}`}>{t('customerDetails')}</p>
                            </div>
                            <button className="flex gap-1 items-center p-2 bg-meta-3 text-white rounded-md mr-1 md:mr-2 text-base">
                                <BiSolidEdit />
                            </button>
                        </div>
                        <div className='flex gap-10 md:gap-20'>
                            <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('customerName')}</p>
                            <p className={`${banglaFontClass} w-[70%] text-sm`}>: {customer.name} </p>
                        </div>
                        <div className='flex gap-10 md:gap-20 mt-1'>
                            <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('father')}</p>
                            <p className={`${banglaFontClass} w-[70%] text-sm`}>: {customer.father} </p>
                        </div>
                        <div className='flex gap-10 md:gap-20 mt-1'>
                            <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('mother')}</p>
                            <p className={`${banglaFontClass} w-[70%] text-sm`}>: {customer.mother} </p>
                        </div>
                        <div className='flex gap-10 md:gap-20 mt-1'>
                            <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('birthdayDate')}</p>
                            <p className={`${banglaFontClass} w-[70%] text-sm`}>: {customer.birthdayDate} </p>
                        </div>
                        <div className='flex gap-10 md:gap-20 mt-1'>
                            <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('mobile')}</p>
                            <p className={`${banglaFontClass} w-[70%] text-sm`}>: {customer.phone} </p>
                        </div>
                        <div className='flex gap-10 md:gap-20 mt-1'>
                            <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('nid')}</p>
                            <p className={`${banglaFontClass} w-[70%] text-sm`}>: {customer.nid} </p>
                        </div>
                        <div className='flex gap-10 md:gap-20 mt-1'>
                            <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('accountNo')}</p>
                            <p className={`${banglaFontClass} w-[70%] text-sm`}>: {customer.accountNo} </p>
                        </div>
                        <div className='flex gap-10 md:gap-20 mt-1'>
                            <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('registerDateNew')}</p>
                            <p className={`${banglaFontClass} w-[70%] text-sm`}>: {customer.registerDate} </p>
                        </div>
                        <div className='flex gap-10 md:gap-20 mt-1'>
                            <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('address')}</p>
                            <p className={`${banglaFontClass} w-[70%] text-sm`}>: {customer.Address} </p>
                        </div>
                    </div>
                </div>
                {
                    contentHide === false ? "" :
                        <div className='print:flex md:flex print:gap-26 md:gap-26 justify-between mt-0'>
                            <div className='w-full md:w-1/2 mt-5 md:mt-0'>
                                <div className='flex justify-between pb-4 border-b border-stroke mb-5'>
                                    <div>
                                        <p className={`text-2xl font-bold ${banglaFontClass}`}>{t('nomineeDetails')}</p>
                                    </div>
                                    <button className="flex gap-1 items-center p-2 bg-meta-3 text-white rounded-md mr-1 md:mr-2 text-base">
                                        <BiSolidEdit />
                                    </button>
                                </div>
                                <div className='flex gap-10 md:gap-20'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('customerName')}</p>
                                    <p className={`${banglaFontClass} w-[70%] text-sm`}>: </p>
                                </div>
                                <div className='flex gap-10 md:gap-20 mt-1'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('father/husband')}</p>
                                    <p className={`${banglaFontClass} w-[70%] text-sm`}>: </p>
                                </div>
                                <div className='flex gap-10 md:gap-20 mt-1'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('birthdayDate')}</p>
                                    <p className={`${banglaFontClass} w-[70%] text-sm`}>: </p>
                                </div>
                                <div className='flex gap-10 md:gap-20 mt-1'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('mobile')}</p>
                                    <p className={`${banglaFontClass} w-[70%] text-sm`}>: </p>
                                </div>
                                <div className='flex gap-10 md:gap-20 mt-1'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('nid')}</p>
                                    <p className={`${banglaFontClass} w-[70%] text-sm`}>: </p>
                                </div>
                                <div className='flex gap-10 md:gap-20 mt-1'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('relation')}</p>
                                    <p className={`${banglaFontClass} w-[70%] text-sm`}>: </p>
                                </div>
                                <div className='flex gap-10 md:gap-20 mt-1'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('address')}</p>
                                    <p className={`${banglaFontClass} w-[70%]`}>: </p>
                                </div>
                            </div>

                            <div className='w-full md:w-1/2 mt-5 md:mt-0'>
                                <div className='flex justify-between pb-4 border-b border-stroke mb-5'>
                                    <div>
                                        <p className={`text-2xl font-bold ${banglaFontClass}`}>{t('guarantorDetails')}</p>
                                    </div>
                                    <button className="flex gap-1 items-center p-2 bg-meta-3 text-white rounded-md mr-1 md:mr-2 text-base">
                                        <BiSolidEdit />
                                    </button>
                                </div>
                                <div className='flex gap-10 md:gap-20'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('customerName')}</p>
                                    <p className={`${banglaFontClass} w-[70%] text-sm`}>: </p>
                                </div>
                                <div className='flex gap-10 md:gap-20 mt-1'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('father/husband')}</p>
                                    <p className={`${banglaFontClass} w-[70%] text-sm`}>: </p>
                                </div>
                                <div className='flex gap-10 md:gap-20 mt-1'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('birthdayDate')}</p>
                                    <p className={`${banglaFontClass} w-[70%] text-sm`}>: </p>
                                </div>
                                <div className='flex gap-10 md:gap-20 mt-1'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('mobile')}</p>
                                    <p className={`${banglaFontClass} w-[70%] text-sm`}>: </p>
                                </div>
                                <div className='flex gap-10 md:gap-20 mt-1'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('nid')}</p>
                                    <p className={`${banglaFontClass} w-[70%] text-sm`}>: </p>
                                </div>
                                <div className='flex gap-10 md:gap-20 mt-1'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('relation')}</p>
                                    <p className={`${banglaFontClass} w-[70%] text-sm`}>: </p>
                                </div>
                                <div className='flex gap-10 md:gap-20 mt-1'>
                                    <p className={`${banglaFontClass} w-[30%] text-sm font-bold`}>{t('address')}</p>
                                    <p className={`${banglaFontClass} w-[70%]`}>: </p>
                                </div>
                            </div>
                        </div>
                }

            </div>
            {
                searchPopup === true ?
                    <SearchPopup
                        customer={customer}
                        handleSearchClose={handleSearchClose}
                        setSearchPopup={setSearchPopup}
                        setContentHide={setContentHide}
                        setSearchStatementData={setSearchStatementData} /> : ""
            }
            {/* <>
                <CustomerStatement searchStatementData={searchStatementData} />
            </> */}

        </>
    );
};

export default CustomerDetailsData;