import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useTranslation } from 'react-i18next';
import { MdClose, MdControlCamera } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

const SearchPopup = ({ customer, handleSearchClose, setSearchStatementData, setSearchPopup, setContentHide}) => {

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Convert the entered date strings to Date objects
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Filter account statements based on date range
        const filteredStatements = customer.accountStatement.filter(statement => {
            const statementDate = new Date(statement.date);
            return statementDate >= start && statementDate <= end;
        });

        // Call the parent component's search function with the filtered results
        setSearchStatementData(filteredStatements);
        setSearchPopup(false)
        setContentHide(false)
    };

    return (
        <div className='backWrapData' >
            <OutsideClickHandler onOutsideClick={handleSearchClose}>
                <div className='w-[320px] md:w-[550px] bg-white dark:bg-graydark p-5 rounded-md'>
                    <div className='flex justify-between items-center border-b border-stroke pb-2'>
                        <div>
                            <p className={`${banglaFontClass} font-bold text-xl`} > {t('searchByDate')} </p>
                        </div>
                        <div>
                            <button onClick={handleSearchClose} className='bg-primary text-white rounded-md'><MdClose className='text-2xl md:text-3xl p-1 md:p-2' /></button>
                        </div>
                    </div>
                    <form onSubmit={handleSearch}>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-10 justify-between py-5'>
                        <div className='w-full md:w-1/2'>
                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('fromDate')}</label>
                            <input
                            required
                                type="date"
                                name="date"
                                value={startDate}
                                placeholder="dd-mm-yyyy"
                                onChange={e => setStartDate(e.target.value)}
                                className='w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                            />
                        </div>

                        <div className='w-full md:w-1/2'>
                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('toDate')}</label>
                            <input
                            required
                                type="date"
                                value={endDate}
                                onChange={e => setEndDate(e.target.value)}
                                className='w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                            />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button  className='border-none flex gap-1 items-center border border-stroke pt-[5px] pb-1 px-3 rounded-md bg-meta-3 text-white'>
                            <BsSearch className='text-white text-base -mt-0' />
                            <p className={`${banglaFontClass} text-sm md:text-base`}>{t('search')}</p>
                        </button>
                    </div>
                    </form>
                </div>
            </OutsideClickHandler>
        </div>
    );
};

export default SearchPopup;
