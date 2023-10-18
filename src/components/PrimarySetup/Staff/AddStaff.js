import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdAddCircle, MdClose } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler';

const AddStaff = ({ handleAdd, formValues, setFormValues, addPopupOpen, addPopup, addPopupClose, itemToEdit, handleSubmitEdit, selectedValue, handleSelectChange }) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    return (
        <>
            <div className='pb-6 pt-3 md:pt-0'>
                <div className='flex justify-between items-center'>
                    <div className={`${banglaFontClass} text-lg md:text-[28px] font-bold`}>
                        {t('mobileNumber')} {t('list')}
                    </div>
                    <button onClick={addPopupOpen} className='flex gap-2 py-1 md:py-2 px-2 md:px-4 bg-primary text-white items-center'>
                        <MdAddCircle className='text-sm md:text-xl' />
                        <p className={`${banglaFontClass} text-base md:text-lg`}>{t('NewMobileAdd')}</p>
                    </button>
                </div>
            </div>
            {
                addPopup === true ?
                    <div className='backWrapData' >
                        <OutsideClickHandler onOutsideClick={addPopupClose}>
                            <div className='w-[320px] md:w-[1200px] bg-white dark:bg-graydark p-5 rounded-md animate__animated animate__zoomIn animate__faster overflow-auto'>
                                <div className='flex justify-between items-center border-b border-stroke pb-2'>
                                    <div>
                                        {itemToEdit ? (
                                            <p className={`${banglaFontClass} font-bold text-xl`} >{t('NumberEdit')}</p>
                                        ) : (
                                            <p className={`${banglaFontClass} font-bold text-xl`} >{t('NewMobileAdd')}</p>
                                        )}
                                    </div>
                                    <div>
                                        <button onClick={addPopupClose} className='bg-primary text-white rounded-md'>
                                            <MdClose className='text-2xl md:text-3xl p-1 md:p-2' />
                                        </button>
                                    </div>
                                </div>
                                <div className='h-[450px] md:h-auto overflow-auto'>
                                    <div className='flex flex-col md:flex-row gap-2 md:gap-6 justify-between py-2 pt-5'>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('StaffName')} <span className="text-meta-1">*</span></label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('Designation')} <span className="text-meta-1">*</span></label>
                                            <select
                                                value={selectedValue}
                                                onChange={handleSelectChange}
                                                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${banglaFontClass}`}>
                                                <option value="" className={`${banglaFontClass}`}>{t('PaymentSelect')}</option>
                                                <option value="Bkash" className={`${banglaFontClass}`}>{t('Bkash')}</option>
                                                <option value="Nagad" className={`${banglaFontClass}`}>{t('Nagad')}</option>
                                            </select>
                                        </div>

                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('JoiningDate')} <span className="text-meta-1">*</span></label>
                                            <input
                                                required
                                                type="date"
                                                name="date"
                                                id="date"
                                                value={formValues.mobile}
                                                onChange={(e) => setFormValues({ ...formValues, mobile: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('nidNumber')} <span className="text-meta-1">*</span></label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('father')}</label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('mother')}</label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('mobileNumber')} <span className="text-meta-1">*</span></label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('email')} <span className="text-meta-1">*</span></label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('address')}</label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('BasicSalary')} <span className="text-meta-1">*</span></label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('HouseRent')}</label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('MedicalAllowance')} <span className="text-meta-1">*</span></label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('TravelAllowance')}</label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('MobileInternetAllowance')}</label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('Group')}</label>
                                            <select
                                                value={selectedValue}
                                                onChange={handleSelectChange}
                                                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${banglaFontClass}`}>
                                                <option value="" className={`${banglaFontClass}`}>{t('PaymentSelect')}</option>
                                                <option value="Bkash" className={`${banglaFontClass}`}>{t('Bkash')}</option>
                                                <option value="Nagad" className={`${banglaFontClass}`}>{t('Nagad')}</option>
                                            </select>
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('UserType')}</label>
                                            <select
                                                value={selectedValue}
                                                onChange={handleSelectChange}
                                                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${banglaFontClass}`}>
                                                <option value="" className={`${banglaFontClass}`}>{t('PaymentSelect')}</option>
                                                <option value="Bkash" className={`${banglaFontClass}`}>{t('Bkash')}</option>
                                                <option value="Nagad" className={`${banglaFontClass}`}>{t('Nagad')}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-2 md:gap-6 justify-between py-2 pt-5'>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('userName')}</label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('password')}</label>
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
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('Photo')}</label>
                                            <input
                                                type="file"
                                                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-2 file:px-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold text-white dark:text-white ${banglaFontClass}`}>{t('submit')}</label>
                                            {itemToEdit ? (
                                                <button onClick={handleSubmitEdit} className='w-full border-none border border-stroke rounded-md bg-meta-3 text-white py-1.5 px-5'>
                                                    <p className={`${banglaFontClass} text-base text-center md:text-lg`}>{t('EditSubmit')}</p>
                                                </button>
                                            ) : (
                                                <button onClick={handleAdd} className='w-full border-none border border-stroke rounded-md bg-meta-3 text-white py-1.5 px-5'>
                                                    <p className={`${banglaFontClass} text-base text-center md:text-lg`}>{t('submit')}</p>
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* <div className='flex justify-end'>
                                        {itemToEdit ? (
                                            <button onClick={handleSubmitEdit} className='border-none flex gap-1 items-center border border-stroke pt-[5px] pb-1 px-3 rounded-md bg-meta-3 text-white'>
                                                <p className={`${banglaFontClass} text-base md:text-lg`}>{t('EditSubmit')}</p>
                                            </button>
                                        ) : (
                                            <button onClick={handleAdd} className='border-none flex gap-1 items-center border border-stroke pt-[5px] pb-1 px-3 rounded-md bg-meta-3 text-white'>
                                                <p className={`${banglaFontClass} text-base md:text-lg`}>{t('submit')}</p>
                                            </button>
                                        )}
                                    </div> */}
                                </div>
                            </div>
                        </OutsideClickHandler>
                    </div>
                    : ""
            }
        </>
    );
};

export default AddStaff;