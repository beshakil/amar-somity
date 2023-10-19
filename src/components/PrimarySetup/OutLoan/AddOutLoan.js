import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdAddCircle, MdClose } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler';

const AddOutLoan = ({ handleAdd, formValues, setFormValues, addPopupOpen, addPopup, addPopupClose, itemToEdit, handleSubmitEdit, selectedValue, handleSelectChange }) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    return (
        <>
            <div className='pb-6 pt-3 md:pt-0'>
                <div className='flex justify-between items-center'>
                    <div className={`${banglaFontClass} text-lg md:text-[28px] font-bold`}>
                        {t('OutLoan')} {t('list')}
                    </div>
                    <button onClick={addPopupOpen} className='flex gap-2 py-1 md:py-2 px-2 md:px-4 bg-primary text-white items-center'>
                        <MdAddCircle className='text-sm md:text-xl' />
                        <p className={`${banglaFontClass} text-base md:text-lg`}>{t('New')} {t('OutLoan')}</p>
                    </button>
                </div>
            </div>
            {
                addPopup === true ?
                    <div className='backWrapData' >
                        <OutsideClickHandler onOutsideClick={addPopupClose}>
                            <form onSubmit={itemToEdit ? handleSubmitEdit : handleAdd} className='w-[320px] md:w-[1000px] bg-white dark:bg-graydark p-5 rounded-md animate__animated animate__zoomIn animate__faster'>
                                <div className='flex justify-between items-center border-b border-stroke pb-2'>
                                    <div>
                                        {itemToEdit ? (
                                            <p className={`${banglaFontClass} font-bold text-xl`} >{t('OutLoan')} {t('Edit')}</p>
                                        ) : (
                                            <p className={`${banglaFontClass} font-bold text-xl`} >{t('New')} {t('OutLoan')}</p>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('AccountName')}</label>
                                            <input
                                                required
                                                type="text"
                                                name="accountName"
                                                value={formValues.accountName}
                                                onChange={(e) => setFormValues({ ...formValues, accountName: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('CompanyName')}</label>
                                            <input
                                                required
                                                type="text"
                                                name="companyName"
                                                value={formValues.companyName}
                                                onChange={(e) => setFormValues({ ...formValues, companyName: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('mobileNumber')}</label>
                                            <input
                                                required
                                                type="text"
                                                name="mobile"
                                                value={formValues.mobile}
                                                onChange={(e) => setFormValues({ ...formValues, mobile: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-2 md:gap-6 justify-between py-2 pt-5'>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('Occupation')}</label>
                                            <input
                                                required
                                                type="text"
                                                name="occupation"
                                                value={formValues.occupation}
                                                onChange={(e) => setFormValues({ ...formValues, occupation: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('address')}</label>
                                            <input
                                                required
                                                type="text"
                                                name="address"
                                                value={formValues.address}
                                                onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('Status')}</label>
                                            <select
                                                value={selectedValue}
                                                onChange={handleSelectChange}
                                                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${banglaFontClass}`}>
                                                <option value="" className={`${banglaFontClass}`}>{t('Status')} {t('selectType')}</option>
                                                <option value="Active" className={`${banglaFontClass}`}>{t('Active')}</option>
                                                <option value="Deactivate" className={`${banglaFontClass}`}>{t('Deactivate')}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex justify-end pt-4'>
                                        {itemToEdit ? (
                                            <button className='w-full border-none border border-stroke rounded-md bg-meta-3 text-white py-1.5 px-5'>
                                                <p className={`${banglaFontClass} text-base text-center md:text-lg`}>{t('EditSubmit')}</p>
                                            </button>
                                        ) : (
                                            <button className='w-full border-none border border-stroke rounded-md bg-meta-3 text-white py-1.5 px-5'>
                                                <p className={`${banglaFontClass} text-base text-center md:text-lg`}>{t('submit')}</p>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </OutsideClickHandler>
                    </div>
                    : ""
            }
        </>
    );
};

export default AddOutLoan;