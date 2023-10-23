import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdAddCircle, MdClose, MdKeyboardArrowDown } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler';

const AddDirector = ({ handleAdd, formValues, setFormValues, addPopupOpen, addPopup, addPopupClose, itemToEdit, handleSubmitEdit, selectedValue, handleSelectChange, selectedUserTypeValue, handleSelectUserTypeChange, selectedUserStatus, handleUserStatus }) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    return (
        <>
            <div className='pb-6 pt-3 md:pt-0'>
                <div className='flex justify-between items-center'>
                    <div className={`${banglaFontClass} text-lg md:text-[28px] font-bold`}>
                        {t('AddDirectorList')}
                    </div>
                    <button onClick={addPopupOpen} className='flex gap-2 py-1 md:py-2 px-2 md:px-4 bg-primary text-white items-center'>
                        <MdAddCircle className='text-sm md:text-xl' />
                        <p className={`${banglaFontClass} text-base md:text-lg`}>{t('AddNewStaff')}</p>
                    </button>
                </div>
            </div>
            {
                addPopup === true ?
                    <div className='backWrapData' >
                        <OutsideClickHandler onOutsideClick={addPopupClose}>
                            <form className='w-[320px] md:w-[1200px] bg-white dark:bg-graydark p-5 rounded-md animate__animated animate__zoomIn animate__faster overflow-auto' onSubmit={itemToEdit ? handleSubmitEdit : handleAdd}>
                                <div className='flex justify-between items-center border-b border-stroke pb-2'>
                                    <div>
                                        {itemToEdit ? (
                                            <p className={`${banglaFontClass} font-bold text-xl`} >{t('DirectorEdit')}</p>
                                        ) : (
                                            <p className={`${banglaFontClass} font-bold text-xl`} >{t('AddNewDirector')}</p>
                                        )}
                                    </div>
                                    <div>
                                        <button onClick={addPopupClose} className='bg-primary text-white rounded-md'>
                                            <MdClose className='text-2xl md:text-3xl p-1 md:p-2' />
                                        </button>
                                    </div>
                                </div>
                                <div className='h-[450px] md:h-[400px] overflow-auto'>
                                    <div className='flex flex-col md:flex-row gap-2 md:gap-6 justify-between py-2 pt-5'>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('DirectorName')} <span className="text-meta-1">*</span></label>
                                            <input
                                                required
                                                type="text"
                                                name="mobile"
                                                value={formValues.directorName}
                                                onChange={(e) => setFormValues({ ...formValues, directorName: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>

                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('position')}/{t('Designation')} <span className="text-meta-1">*</span></label>
                                            <input
                                                required
                                                type="text"
                                                name="mobile"
                                                value={formValues.designation}
                                                onChange={(e) => setFormValues({ ...formValues, designation: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>

                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('JoiningDate')} <span className="text-meta-1">*</span></label>
                                            <input
                                                required
                                                type="date"
                                                name="date"
                                                id="date"
                                                value={formValues.joiningDate}
                                                onChange={(e) => setFormValues({ ...formValues, joiningDate: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>

                                    </div>
                                    <div className='flex flex-col md:flex-row gap-2 md:gap-6 justify-between py-2 pt-5'>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('nidNumber')} <span className="text-meta-1">*</span></label>
                                            <input
                                                required
                                                type="text"
                                                name="mobile"
                                                value={formValues.nid}
                                                onChange={(e) => setFormValues({ ...formValues, nid: e.target.value })}
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
                                                name="email"
                                                value={formValues.email}
                                                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
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
                                                value={formValues.address}
                                                onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('userName')} <span className="text-meta-1">*</span></label>
                                            <input
                                                required
                                                type="text"
                                                name="mobile"
                                                value={formValues.userName}
                                                onChange={(e) => setFormValues({ ...formValues, userName: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('password')} <span className="text-meta-1">*</span></label>
                                            <input
                                                required
                                                type="text"
                                                name="mobile"
                                                value={formValues.password}
                                                onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                                                className={`${banglaFontClass} w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-2 md:gap-6 justify-between py-2 pt-5'>

                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('Photo')}</label>
                                            <input
                                                type="file"
                                                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-2 file:px-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('Group')} <span className="text-meta-1">*</span></label>
                                            <select
                                                value={selectedValue}
                                                onChange={handleSelectChange}
                                                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${banglaFontClass}`}>
                                                <option value="" className={`${banglaFontClass}`}>{t('Group')} {t('selectType')}</option>
                                                <option value="Main Branch" className={`${banglaFontClass}`}>Main Branch</option>
                                                <option value="Uttara Branch" className={`${banglaFontClass}`}>Uttara Branch</option>
                                                <option value="Mirpur Branch" className={`${banglaFontClass}`}>Mirpur Branch</option>
                                            </select>
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <label className={`mb-1 block font-bold dark:text-white ${banglaFontClass}`}>{t('Status')} <span className="text-meta-1">*</span></label>
                                            <div className="relative z-20 bg-transparent dark:bg-form-input">
                                                <select
                                                    value={selectedUserStatus}
                                                    onChange={handleUserStatus}
                                                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${banglaFontClass}`}>
                                                    <option value="" className={`${banglaFontClass}`}>{t('Status')} {t('selectType')}</option>
                                                    <option value="Active" className={`${banglaFontClass}`}>{t('Active')}</option>
                                                    <option value="Deactivate" className={`${banglaFontClass}`}>{t('Deactivate')}</option>
                                                </select>
                                                <span className="absolute top-1/2 right-0 z-30 -translate-y-1/2">
                                                    <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-2xl`} />
                                                </span>
                                            </div>
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
                            </form>
                        </OutsideClickHandler>
                    </div>
                    : ""
            }
        </>
    );
};

export default AddDirector;