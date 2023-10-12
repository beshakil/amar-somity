import React from 'react';
import Breadcrumb from '../Breadcrumb';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowDown } from "react-icons/md";

const UserAddForm = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    return (
        <>
            <Breadcrumb pageName= {t('addNewUser')} />

            {/* <div className="grid grid-cols-1 gap-9 sm:grid-cols-2"> */}
            <div className="flex flex-col gap-9">
                {/* <!-- Contact Form --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <form action="#">
                        <div className="p-6.5">
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                        {t('fullName')}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Example: Jhon Due"
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
                            </div>

                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                        {t('email')} <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
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

                            <div className="mb-4.5">
                                <label className={`mb-2.5 block text-black dark:text-white ${banglaFontClass}`}>
                                    {t('position')}
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${banglaFontClass}`}>
                                        <option value="" className={`${banglaFontClass}`}>{t('selectPosition')}</option>
                                        <option value="" className={`${banglaFontClass}`}>{t('manager')} / Admin</option>
                                        <option value="" className={`${banglaFontClass}`}>{t('depositor')}</option>
                                        <option value="" className={`${banglaFontClass}`}>{t('fieldAssistant')}</option>
                                    </select>
                                    <span className="absolute top-1/2 right-0 z-30 -translate-y-1/2">
                                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-2xl`} />
                                    </span>
                                </div>
                            </div>

                            <button className={`flex w-full justify-center rounded bg-primary p-3 font-medium text-gray ${banglaFontClass}`}>
                                {t('submit')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default UserAddForm;