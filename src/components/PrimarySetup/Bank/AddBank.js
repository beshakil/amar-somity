import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdAddCircle, MdClose } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler';
import toast, { Toaster } from 'react-hot-toast';

const AddBank = ({ handleAddBank, formValues, setFormValues, addBankPopupOpen, addBankPopup, addBankPopupClose, handleEditBank }) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    return (
        <>
            <div className='pb-6 pt-3 md:pt-0'>
                <div className='flex justify-between items-center'>
                    <button className={`${banglaFontClass} text-2xl md:text-[28px] font-bold`}>
                        {t('bankList')}
                    </button>
                    <button onClick={addBankPopupOpen} className='flex gap-2 py-1 md:py-2 px-3 md:px-4 bg-primary text-white items-center'>
                        <MdAddCircle className='text-xl' />
                        <p className={`${banglaFontClass} text-lg`}>{t('NewBankAdd')}</p>
                    </button>
                </div>
            </div>
            {
                addBankPopup === true ?
                    <div className='backWrapData' >
                        <OutsideClickHandler onOutsideClick={addBankPopupClose}>
                            <div className='w-[320px] md:w-[600px] bg-white dark:bg-graydark p-5 rounded-md'>
                                <div className='flex justify-between items-center border-b border-stroke pb-2'>
                                    <div>
                                        {formValues.id ?
                                            <p className={`${banglaFontClass} font-bold text-xl`} >{t('BankEdit')} </p>
                                            :
                                            <p className={`${banglaFontClass} font-bold text-xl`} >{t('NewBankAdd')} </p>
                                        }
                                    </div>
                                    <div>
                                        <button onClick={addBankPopupClose} className='bg-primary text-white rounded-md'>
                                            <MdClose className='text-2xl md:text-3xl p-1 md:p-2' />
                                        </button>
                                    </div>
                                </div>
                                <form onSubmit={handleAddBank}>
                                    <div className='flex flex-col md:flex-row gap-2 md:gap-6 justify-between py-5'>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('BankName')}</label>
                                            <input
                                                required
                                                type="text"
                                                value={formValues.bankName}
                                                onChange={(e) => setFormValues({ ...formValues, bankName: e.target.value })}
                                                placeholder={t('BankNameWithBranchName')}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('AccountNo')}</label>
                                            <input
                                                required
                                                type="number"
                                                value={formValues.accountNumber}
                                                onChange={(e) => setFormValues({ ...formValues, accountNumber: e.target.value })}
                                                className='w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        {
                                            formValues.id ?
                                                <button onClick={handleEditBank} className='border-none flex gap-1 items-center border border-stroke pt-[5px] pb-1 px-3 rounded-md bg-meta-3 text-white'>
                                                    <p className={`${banglaFontClass} text-base md:text-lg`}>{t('EditSubmit')}</p>
                                                </button> :
                                                <button onClick={handleAddBank} className='border-none flex gap-1 items-center border border-stroke pt-[5px] pb-1 px-3 rounded-md bg-meta-3 text-white'>
                                                    <p className={`${banglaFontClass} text-base md:text-lg`}>{t('submit')}</p>
                                                </button>
                                        }
                                    </div>
                                </form>
                            </div>
                        </OutsideClickHandler>
                    </div>
                    : ""
            }
        </>
    );
};

export default AddBank;