import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiSolidEdit, BiTrash } from "react-icons/bi";

const BankList = ({ banks, handleDeleteBank, handleEdit }) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className={`min-w-[50px] md:min-w-[100px] ${banglaFontClass} py-3 px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}>
                            </th>
                            <th className={`min-w-[220px] ${banglaFontClass} py-3 px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}>
                                {t('BranchName')}
                            </th>
                            <th className={`min-w-[150px] ${banglaFontClass} py-3 px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}>
                                {t('BankName')}
                            </th>
                            <th className={`min-w-[150px] ${banglaFontClass} py-3 px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}>
                                {t('AccountNo')}
                            </th>
                            <th className={`min-w-[150px] ${banglaFontClass} py-3 px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}>
                                {t('Balance')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {banks.map((bank) => (
                            <tr key={bank.id}>
                                <td className="border border-[#eee] py-2 px-4 dark:border-strokedark">
                                    <div className="flex items-center justify-center gap-2">
                                        <button onClick={() => handleEdit(bank)} className="flex gap-1 items-center px-1 md:px-2 py-1 bg-primary text-white rounded-md text-base">
                                            <BiSolidEdit className='text-base' />
                                        </button>
                                        <button onClick={() => handleDeleteBank(bank.id)} className="flex gap-1 items-center px-1 md:px-2 py-1 bg-danger text-white rounded-md text-base">
                                            <BiTrash className='text-base' />
                                        </button>
                                    </div>
                                </td>
                                <td className="border border-[#eee] py-2 px-4 dark:border-strokedark">
                                    <h5 className="text-center font-normal dark:text-white">
                                        {bank.bankName}
                                    </h5>
                                </td>
                                <td className="border text-center border-[#eee] py-2 px-4 dark:border-strokedark">
                                    <p className=" dark:text-white">Jan 13,2023</p>
                                </td>
                                <td className="border text-center border-[#eee] py-2 px-4 dark:border-strokedark">
                                    {bank.accountNumber}
                                </td>
                                <td className="border text-center border-[#eee] py-2 px-4 dark:border-strokedark">
                                    {bank.balance}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BankList;