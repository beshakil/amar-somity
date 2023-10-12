import React from 'react';
import Breadcrumb from '../Breadcrumb';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowDown } from "react-icons/md";

const CustomerAddForm = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    return (
        <>
            <Breadcrumb pageName={t('customerAdmission')} />
            <div className="flex flex-col gap-9">
                <form action="#">
                    <div className="p-6.5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('area')} <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Cumilla, Dhaka, etc."
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('accountNo')} <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="156484984651"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('registerDate')}
                                </label>
                                <input
                                    type="date"
                                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('accountType')} <span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${banglaFontClass}`}>
                                        <option value="" className={`${banglaFontClass}`}>{t('selectAccountType')}</option>
                                        <option value="" className={`${banglaFontClass}`}>{t('deposit')}</option>
                                        <option value="" className={`${banglaFontClass}`}>{t('dps')}</option>
                                        <option value="" className={`${banglaFontClass}`}>{t('loan')}</option>
                                        <option value="" className={`${banglaFontClass}`}>{t('fixedDeposit')}</option>
                                        <option value="" className={`${banglaFontClass}`}>{t('insurance')}</option>
                                    </select>
                                    <span className="absolute top-1/2 right-0 z-30 -translate-y-1/2">
                                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-2xl`} />
                                    </span>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('group')} <span className="text-meta-1">*</span>
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select required className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${banglaFontClass}`}>
                                        <option value="" className={`${banglaFontClass}`}>{t('selectGroup')}</option>
                                        <option value="" className={`${banglaFontClass}`}>Daily</option>
                                        <option value="" className={`${banglaFontClass}`}>Weekly</option>
                                        <option value="" className={`${banglaFontClass}`}>Monthly</option>
                                        <option value="" className={`${banglaFontClass}`}>Yearly</option>
                                    </select>
                                    <span className="absolute top-1/2 right-0 z-30 -translate-y-1/2">
                                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-2xl`} />
                                    </span>
                                </div>
                            </div>

                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('depositAmount')}
                                </label>
                                <input
                                    type="number"
                                    placeholder="1000"
                                    className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-8" >
                        <Breadcrumb pageName={t('customerDetails')} />
                    </div>
                    <div className="p-6.5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('fullName')} <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Example: Jhon Due"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('father')} <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('mother')} <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('address')} <span className="text-meta-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('birthdayDate')}
                                </label>
                                <input
                                    type="date"
                                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('nidNumber')}
                                </label>
                                <input
                                    type="number"
                                    placeholder=""
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('mobile')}
                                </label>
                                <input
                                    type="text"
                                    placeholder="01XXXXXXXXX"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="w-full xl:w-1/2">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('password')}
                                </label>
                                <input
                                    type="text"
                                    placeholder="******"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                        </div>

                        <button className={`flex w-full justify-center rounded bg-primary p-3 font-medium text-gray ${banglaFontClass}`}>
                            {t('submit')}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CustomerAddForm;