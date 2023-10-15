import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiSolidEdit, BiTrash } from "react-icons/bi";

const BranchList = ({ branch, handleDeleteBranch, handleEdit }) => {

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className={`min-w-[20px] ${banglaFontClass} py-3 px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}></th>
                            <th className={`min-w-[160px] ${banglaFontClass} py-3 px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}>
                                {t('BranchName')}
                            </th>
                            <th className={`min-w-[100px] ${banglaFontClass} py-3 px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}>
                                {t('BranchShortName')}
                            </th>
                            <th className={`min-w-[130px] ${banglaFontClass} py-3 px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}>
                                {t('mobile')}
                            </th>
                            <th className={`min-w-[160px] ${banglaFontClass} py-3 px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}>
                                {t('email')}
                            </th>
                            <th className={`min-w-[130px] ${banglaFontClass} py-3 px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}>
                                {t('telePhone')}
                            </th>
                            <th className={`min-w-[160px] ${banglaFontClass} py-3 px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}>
                                {t('address')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {branch.map((items) => (
                            <tr key={items.id}>
                                <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                    <div className="flex items-center justify-center gap-2">
                                        <button onClick={() => handleEdit(items)} className="flex gap-1 items-center px-2 md:px-2 py-1 bg-primary text-white rounded-md text-base">
                                            <BiSolidEdit className='text-base' />
                                        </button>
                                        <button onClick={() => handleDeleteBranch(items.id)} className="flex gap-1 items-center px-2 md:px-2 py-1 bg-danger text-white rounded-md text-base">
                                            <BiTrash className='text-base' />
                                        </button>
                                    </div>
                                </td>
                                <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                    <h5 className="text-center font-normal dark:text-white">
                                        {items.branchName}
                                    </h5>
                                </td>
                                <td className="border text-center border-[#eee] py-2 px-2 dark:border-strokedark">
                                    <p className=" dark:text-white">{items.branchShortName}</p>
                                </td>
                                <td className="border text-center border-[#eee] py-2 px-2 dark:border-strokedark">
                                    <p className=" dark:text-white">{items.mobile}</p>
                                </td>
                                <td className="border text-center border-[#eee] py-2 px-2 dark:border-strokedark">
                                    {items.email}
                                </td>
                                <td className="border text-center border-[#eee] py-2 px-2 dark:border-strokedark">
                                    {items.telePhone}
                                </td>
                                <td className="border text-center border-[#eee] py-2 px-2 dark:border-strokedark">
                                    {items.address}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BranchList;