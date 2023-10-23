import React from 'react';
import { useParams } from 'react-router-dom';
import nodes from './data'
import { useTranslation } from 'react-i18next';
import { Table } from "@table-library/react-table-library/table";

const OutLoanDetails = () => {

    const [data, setData] = React.useState({ nodes });
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    const { id } = useParams();
    const items = data.nodes.find((item) => item.id === id);

    if (!items) {
        return <div>customer not found</div>;
    }

    const details = items.loanDetails

    console.log('details', details)


    return (
        <div>
            <div className='pb-6 pt-3 md:pt-0'>
                <div className='flex justify-between items-center'>
                    <div className={`${banglaFontClass} text-lg md:text-[28px] font-bold`}>
                        {t('ExternalLoanTransactions')}
                    </div>
                    {/* <button onClick={addPopupOpen} className='flex gap-2 py-1 md:py-2 px-2 md:px-4 bg-primary text-white items-center'>
                        <MdAddCircle className='text-sm md:text-xl' />
                        <p className={`${banglaFontClass} text-base md:text-lg`}>{t('New')} {t('OutLoan')}</p>
                    </button> */}
                </div>
            </div>

            {
                details.length === 0 ?
                    <div className='flex justify-center items-center h-[300px]'>
                        <div className='text-center'>
                            <p className={`${banglaFontClass} text-base md:text-lg`}>{t('NoDataFound')}</p>
                        </div>
                    </div>
                    :
                    <>
                        {details.map((item) => (
                            <div className='pb-6 pt-3 md:pt-0' key={item.id}>
                                <div className='flex justify-between items-center'>
                                    <div className={`${banglaFontClass} text-lg md:text-[28px] font-bold`}>
                                        {item.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
            }

            {/* <div className="max-w-full overflow-x-auto">
                <Table items={items} layout={{ custom: true, horizontalScroll: true }} className="!w-full !table-auto !inline-table">
                    {(tableList) => (
                        <>
                            <thead>
                                <tr className="bg-gray-2 dark:bg-meta-4 font-bold text-base text-center dark:text-white ">
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}></th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('BranchName')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('AccountName')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('CompanyName')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('mobile')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('Occupation')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('Balance')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('Interest')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('Status')}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-black">

                                <tr key={items.id} className="text-center hover:bg-gray-3">
                                    <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                        <p className=" dark:text-white">{items.branchName}</p>
                                    </td>
                                    <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                        <p className=" dark:text-white">{items.accountName}</p>
                                    </td>
                                    <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                        <p className=" dark:text-white">{items.companyName}</p>
                                    </td>
                                    <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                        <p className=" dark:text-white">{items.mobile}</p>
                                    </td>
                                    <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                        <p className=" dark:text-white">{items.occupation}</p>
                                    </td>
                                    <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                        <p className=" dark:text-white">{items.balance}</p>
                                    </td>
                                    <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                        <p className=" dark:text-white">{items.interest}</p>
                                    </td>
                                    <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                        <p className=" dark:text-white">{items.status}</p>
                                    </td>
                                </tr>

                            </tbody>
                        </>
                    )}
                </Table>
            </div> */}
            OutLoanDetails {items.id}
        </div>
    );
};

export default OutLoanDetails;