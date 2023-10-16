import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdAddCircle, MdClose } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler';

const AddMobile = ({ handleAdd, formValues, setFormValues, addPopupOpen, addPopup, addPopupClose, itemToEdit, handleSubmitEdit, handleEdit }) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    return (
        <>
            <div className='pb-6 pt-3 md:pt-0'>
                <div className='flex justify-between items-center'>
                    <button className={`${banglaFontClass} text-2xl md:text-[28px] font-bold`}>
                        {t('BranchList')}
                    </button>
                    <button onClick={addPopupOpen} className='flex gap-2 py-1 md:py-2 px-3 md:px-4 bg-primary text-white items-center'>
                        <MdAddCircle className='text-xl' />
                        <p className={`${banglaFontClass} text-lg`}>{t('NewBranchAdd')}</p>
                    </button>
                </div>
            </div>
            {
                addPopup === true ?
                    <div className='backWrapData' >
                        <OutsideClickHandler onOutsideClick={addPopupClose}>
                            <div className='w-[320px] md:w-[600px] bg-white dark:bg-graydark p-5 rounded-md animate__animated animate__zoomIn animate__faster'>
                                <div className='flex justify-between items-center border-b border-stroke pb-2'>
                                    <div>

                                        {/* <p className={`${banglaFontClass} font-bold text-xl`} >{t('NewBranchAdd')} </p> */}

                                        {itemToEdit ? (
                                            <p className={`${banglaFontClass} font-bold text-xl`} >{t('BranchEdit')}</p>
                                        ) : (
                                            <p className={`${banglaFontClass} font-bold text-xl`} >{t('NewBranchAdd')}</p>
                                        )}
                                    </div>
                                    <div>
                                        <button onClick={addPopupClose} className='bg-primary text-white rounded-md'>
                                            <MdClose className='text-2xl md:text-3xl p-1 md:p-2' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col md:flex-row gap-2 md:gap-6 justify-between py-2 pt-5'>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('BranchName')}</label>
                                            <input
                                                required
                                                type="text"
                                                name="mobile"
                                                value={formValues.mobile}
                                                onChange={(e) => setFormValues({ ...formValues, mobile: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('BranchShortName')}</label>
                                            <input
                                                required
                                                type="text"
                                                name="paymentOption"
                                                value={formValues.paymentOption}
                                                onChange={(e) => setFormValues({ ...formValues, paymentOption: e.target.value })}
                                                className='w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        {itemToEdit ? (
                                            <button onClick={handleSubmitEdit} className='border-none flex gap-1 items-center border border-stroke pt-[5px] pb-1 px-3 rounded-md bg-meta-3 text-white'>
                                                <p className={`${banglaFontClass} text-base md:text-lg`}>{t('EditSubmit')}</p>
                                            </button>
                                        ) : (
                                            <button onClick={handleAdd} className='border-none flex gap-1 items-center border border-stroke pt-[5px] pb-1 px-3 rounded-md bg-meta-3 text-white'>
                                                <p className={`${banglaFontClass} text-base md:text-lg`}>{t('submit')}</p>
                                            </button>
                                        )}
                                        {/* <button onClick={handleEdit} className='border-none flex gap-1 items-center border border-stroke pt-[5px] pb-1 px-3 rounded-md bg-meta-3 text-white'>
                                            <p className={`${banglaFontClass} text-base md:text-lg`}>{t('EditSubmit')}</p>
                                        </button>
                                        <button onClick={handleAdd} className='border-none flex gap-1 items-center border border-stroke pt-[5px] pb-1 px-3 rounded-md bg-meta-3 text-white'>
                                            <p className={`${banglaFontClass} text-base md:text-lg`}>{t('submit')}</p>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </OutsideClickHandler>
                    </div>
                    : ""
            }
        </>
    );
};

export default AddMobile;