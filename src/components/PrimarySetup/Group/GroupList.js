import { usePagination } from "@table-library/react-table-library/pagination";
import {
    Table
} from "@table-library/react-table-library/table";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import React from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { BiSolidEdit, BiTrash } from "react-icons/bi";
import { BsPrinter, BsSearch } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { RiFileExcel2Fill } from "react-icons/ri";
import OutsideClickHandler from 'react-outside-click-handler';
import AddGroup from "./AddGroup";

const nodes = [
    {
        id: '1',
        branchName: '0188',
        groupName: 'Bkash',
        members: 10,
    },
    {
        id: '2',
        branchName: '0155',
        groupName: 'Nagad',
        members: 10,
    },
    {
        id: '3',
        branchName: '01303263591',
        groupName: 'Upay',
        members: 10,
    },
    {
        id: '4',
        branchName: '01303263591',
        groupName: 'Upay',
        members: 10,
    },
    {
        id: '5',
        branchName: '01303263591',
        groupName: 'Upay',
        members: 10,
    },
    {
        id: '6',
        branchName: '01303263591',
        groupName: 'Upay',
        members: 10,
    },
    {
        id: '7',
        branchName: '77',
        groupName: 'Upay',
        members: 10,
    },
    {
        id: '8',
        branchName: '01303263591',
        groupName: 'Upay',
        members: 10,
    },
    {
        id: '9',
        branchName: '01303263591',
        groupName: 'Upay',
        members: 10,
    },
    {
        id: '10',
        branchName: '01303263591',
        groupName: 'Upay',
        members: 10,
    },
]


const GroupList = () => {

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    const [data, setData] = React.useState({ nodes });
    const [search, setSearch] = React.useState('');

    console.log('finalData', data)

    const [addPopup, setAddPopup] = React.useState(false);
    const [deletePopup, setDeletePopup] = React.useState(false);
    const [itemToDelete, setItemToDelete] = React.useState(null);
    const [itemToEdit, setItemToEdit] = React.useState(null);

    const SuccessNotify = () => toast.success(
        <p className={`${banglaFontClass} text-xl`}>
            {currentLanguage === 'bn' ? 'সফলভাবে অ্যাড হয়েছে' : 'Added successfully'}
        </p>, {
        duration: 4000,
        position: 'top-center',
    }
    );

    // Generate a unique ID with create data based on the current timestamp
    const addPopupOpen = () => {
        setAddPopup(true)
    }

    const generateId = () => {
        return new Date().getTime().toString();
    };

    const [formValues, setFormValues] = React.useState({
        id: generateId(),
        branchName: '',
        groupName: '',
    });

    const handleAdd = () => {
        if (formValues.branchName && formValues.groupName) {
            const newId = generateId()
            const newData = [{ id: newId, ...formValues }, ...data.nodes];
            setData({ nodes: newData });
            setFormValues({ branchName: '', groupName: '' });
            SuccessNotify();
            addPopupClose();
        }
    };

    const handleEdit = (id) => {
        const item = data.nodes.find((node) => node.id === id);
        setItemToEdit(item);
        setFormValues({
            id: item.id,
            branchName: item.branchName,
            groupName: item.groupName,
        });
        setAddPopup(true);
    };

    const handleSubmitEdit = () => {
        if (itemToEdit) {
            // Find the index of the item to edit
            const index = data.nodes.findIndex((node) => node.id === itemToEdit.id);

            // Create a new array with the updated item
            const updatedData = [...data.nodes];
            updatedData[index] = {
                id: itemToEdit.id,
                branchName: formValues.branchName,
                groupName: formValues.groupName,
            };

            // Update the data and close the edit popup
            setData({ nodes: updatedData });
            SuccessNotify();
            setAddPopup(false);
            setItemToEdit(null);
            setFormValues({ branchName: '', groupName: '' });
        }
    };

    const addPopupClose = () => {
        setAddPopup(false)
        setFormValues({ branchName: '', groupName: '' });
    }

    const handleRemoveData = (id) => {
        setItemToDelete(data.nodes.find((node) => node.id === id));
        setDeletePopup(true);
    };

    const confirmDelete = () => {
        if (itemToDelete) {
            // Filter out the item to delete from the data array
            const updatedNodes = data.nodes.filter((node) => node.id !== itemToDelete.id);
            setData({ nodes: updatedNodes });
            SuccessNotify();
            setDeletePopup(false);
            setItemToDelete(null);
        }
    };

    const deletePopupClose = () => {
        setItemToDelete(null);
        setDeletePopup(false)
    }

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearch(searchTerm);

        if (searchTerm.trim() === '') {
            // If the search input is empty, show all data
            setData({ nodes });
        } else {
            // Filter the data based on the search term from the data state
            const filteredData = data.nodes.filter((node) =>
                node.branchName.toLowerCase().includes(searchTerm)
            );

            // Update the data with the filtered results
            setData({ nodes: filteredData });
        }
    };


    // For pagination
    const pagination = usePagination(data, {
        state: {
            page: 0,
            size: 5,
        },
        onChange: onPaginationChange,
    });

    function onPaginationChange(action, state) {
        console.log(action, state);
    }
    // For pagination

    // CVC Download
    const escapeCsvCell = (cell) => {
        if (cell == null) {
            return "";
        }
        const sc = cell.toString().trim();
        if (sc === "" || sc === '""') {
            return sc;
        }
        if (
            sc.includes('"') ||
            sc.includes(",") ||
            sc.includes("\n") ||
            sc.includes("\r")
        ) {
            return '"' + sc.replace(/"/g, '""') + '"';
        }
        return sc;
    };

    const makeCsvData = (columns, data) => {
        return data.reduce((csvString, rowItem) => {
            return (
                csvString +
                columns
                    .map(({ accessor }) => escapeCsvCell(accessor(rowItem)))
                    .join(",") +
                "\r\n"
            );
        }, columns.map(({ name }) => escapeCsvCell(name)).join(",") + "\r\n");
    };

    const downloadAsCsv = (columns, data, filename) => {
        const csvData = makeCsvData(columns, data);
        const csvFile = new Blob([csvData], { type: "text/csv" });
        const downloadLink = document.createElement("a");

        downloadLink.display = "none";
        downloadLink.download = filename;
        downloadLink.href = window.URL.createObjectURL(csvFile);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    const handleDownloadCsv = () => {
        const columns = [
            { accessor: (item) => item.branchName, name: "branchName" },
            { accessor: (item) => item.groupName, name: "Payment Method" },
        ];

        downloadAsCsv(columns, data.nodes, "table");
    };
    // CVC Download

    // OnClick Print
    const handlePrint = () => {
        window.print(); // Trigger the browser's print dialog
    };
    // OnClick Print


    // OnClick Download PDF
    const [loader, setLoader] = React.useState(false);
    const handleDownloadPdf = () => {
        setLoader(true);
        downloadPDF()
        setLoader(false);
    }

    function createPDF() {
        const doc = new jsPDF({ orientation: 'landscape' });

        const headers = ['ID', 'branchName', 'Payment Option'];

        // Calculate the page width and height
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        // Define the company information
        const companyInfo = {
            companyName: 'Your Company Name',
            companyAddress: '123 Main Street, City, Country, Phone: (123) 456-7890',
            companyEmail: 'Email: info@yourcompany.com',
        };

        // Set font sizes for company information
        const fontSizeCompanyName = 14;
        const fontSizeCompanyInfo = 12;

        // Calculate the text width for center alignment
        const textWidthCompanyName = doc.getStringUnitWidth(companyInfo.companyName) * fontSizeCompanyName / doc.internal.scaleFactor;
        const textWidthCompanyInfo = doc.getStringUnitWidth(companyInfo.companyAddress) * fontSizeCompanyInfo / doc.internal.scaleFactor;
        const textWidthCompanyInfoEmail = doc.getStringUnitWidth(companyInfo.companyEmail) * fontSizeCompanyInfo / doc.internal.scaleFactor;

        const centerXCompanyName = (pageWidth - textWidthCompanyName) / 2;
        const centerXCompanyInfo = (pageWidth - textWidthCompanyInfo) / 2;
        const centerXCompanyInfoEmail = (pageWidth - textWidthCompanyInfoEmail) / 2;

        // Set font size and add centered company information
        doc.setFontSize(fontSizeCompanyName);
        doc.text(companyInfo.companyName, centerXCompanyName, 10);

        doc.setFontSize(fontSizeCompanyInfo);
        doc.text(`${companyInfo.companyAddress}`, centerXCompanyInfo, 18);
        doc.text(companyInfo.companyEmail, centerXCompanyInfoEmail, 26);

        // Move the table down to make space for the company information
        doc.autoTable({
            startY: 35, // Adjust the Y position as needed
            head: [headers],
            body: data.nodes.map((item) => [item.id, item.branchName, item.groupName]),
        });

        return doc;
    }

    function downloadPDF() {
        const pdf = createPDF();
        pdf.save('generated-pdf.pdf');
    }
    // OnClick Download PDF

    return (
        <>
            <AddGroup
                handleAdd={handleAdd}
                formValues={formValues}
                setFormValues={setFormValues}
                addPopup={addPopup}
                addPopupOpen={addPopupOpen}
                addPopupClose={addPopupClose}
                itemToEdit={itemToEdit}
                handleEdit={handleEdit}
                handleSubmitEdit={handleSubmitEdit}
            />

            <div className="print:hidden flex items-center gap-2">
                <div className=" border border-stroke p-2 w-[60%]">
                    <div className="relative">
                        <button className="absolute top-1/2 left-0 -translate-y-1/2">
                            <BsSearch className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary text-xl" />
                        </button>
                        <input
                            type="text"
                            placeholder={t('searchByBranchName')}
                            value={search}
                            onChange={handleSearch}
                            className={`w-full bg-transparent pr-4 pl-9 focus:outline-none ${banglaFontClass}`}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-end gap-2 w-[40%]">
                    <button type="button" onClick={handleDownloadCsv} className='flex gap-2 items-center border border-stroke p-2 bg-[#20744A] text-white'>
                        <RiFileExcel2Fill className='text-white text-2xl' />
                        <p className={`${banglaFontClass}`}>{t('ExcelDownload')}</p>
                    </button>
                    <button onClick={handleDownloadPdf}
                        disabled={!(loader === false)}
                        type="button"
                        className='flex gap-2 items-center border border-stroke p-2 bg-meta-4 text-white'>
                        <FaRegFilePdf className='text-white text-base' />
                        <p className={`${banglaFontClass}`}>
                            {loader ? (
                                <span>Downloading</span>
                            ) : (
                                <span>{t('PDFDownload')}</span>
                            )}
                        </p>
                    </button>
                    <button onClick={handlePrint} type="button" className='flex gap-2 items-center border border-stroke p-2 bg-[#FF6A00] text-white'>
                        <BsPrinter className='text-white text-base' />
                        <p className={`${banglaFontClass}`}>{t('print')}</p>
                    </button>
                </div>
            </div>
            <br />
            {/* <div className="max-w-full overflow-x-auto actual-receipt" ref={targetRef}> */}
            <div className="max-w-full overflow-x-auto actual-receipt">
                <Table data={data} layout={{ custom: true, horizontalScroll: true }} pagination={pagination} className="!w-full !table-auto !inline-table">
                    {(tableList) => (
                        <>
                            <thead>
                                <tr className=" bg-gray-2 dark:bg-meta-4 font-bold text-base text-center dark:text-white ">
                                    <th className={`print:hidden ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`} data-html2canvas-ignore="true"></th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('BranchName')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('GroupName')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('member')}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-black">
                                {tableList.map((item) => (
                                    <tr key={item.id} className="text-center">
                                        <td className=" print:hidden border border-[#eee] py-2 px-2 dark:border-strokedark" data-html2canvas-ignore="true">
                                            <div className="flex gap-2 justify-center">
                                                <button onClick={() => handleEdit(item.id)} className="flex gap-1 items-center px-2 md:px-2 py-1 bg-primary text-white rounded-md text-base">
                                                    <BiSolidEdit className='text-base' />
                                                </button>
                                                <button onClick={() => handleRemoveData(item.id)} className="flex gap-1 items-center px-2 md:px-2 py-1 bg-danger text-white rounded-md text-base">
                                                    <BiTrash className='text-base' />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                            <p className=" dark:text-white">{item.branchName}</p>
                                        </td>
                                        <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                            <p className=" dark:text-white">{item.groupName}</p>
                                        </td>
                                        <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                            <p className=" dark:text-white">{item.members}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                    )}
                </Table>
            </div>
            <div className="flex justify-between py-4">
                <span className="text-lg">Total Pages: {pagination.state.getTotalPages(data.nodes)}</span>
                <span className="text-lg">
                    Page:{" "}
                    {pagination.state.getPages(data.nodes).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            style={{ fontWeight: pagination.state.page === index ? "bold" : "normal" }}
                            className={` ${pagination.state.page === index ? "bg-primary text-white py-[2px] px-2 rounded" : ""} last:mr-0 text-lg mr-3`}
                            onClick={() => pagination.fns.onSetPage(index)}>
                            {index + 1}
                        </button>
                    ))}
                </span>
            </div>
            {
                deletePopup === true ?
                    <div className='backWrapData'>
                        <OutsideClickHandler onOutsideClick={deletePopupClose}>
                            <div className='w-[320px] md:w-[600px] bg-white dark:bg-graydark p-5 rounded-md'>
                                <div className='flex justify-between items-center border-b border-stroke pb-2'>
                                    <div>
                                        <p className={`${banglaFontClass} font-bold text-xl`} >{t('BranchDelete')}</p>
                                    </div>
                                    <div>
                                        <button onClick={deletePopupClose} className='bg-primary text-white rounded-md'>
                                            <MdClose className='text-2xl md:text-3xl p-1 md:p-2' />
                                        </button>
                                    </div>
                                </div>
                                <p className={`${banglaFontClass} text-base md:text-xl py-6`}>{t('DeleteThisBranch')}</p>
                                <div className='flex justify-end gap-2'>
                                    <button onClick={confirmDelete} className='border-none flex gap-1 items-center border border-stroke pt-[5px] pb-1 px-3 rounded-md bg-danger text-white'>
                                        <p className={`${banglaFontClass} text-base md:text-lg`}>{t('yes')}</p>
                                    </button>
                                    <button onClick={deletePopupClose} className='border-none flex gap-1 items-center border border-stroke pt-[5px] pb-1 px-3 rounded-md bg-meta-3 text-white'>
                                        <p className={`${banglaFontClass} text-base md:text-lg`}>{t('no')}</p>
                                    </button>
                                </div>
                            </div>
                        </OutsideClickHandler>
                    </div>
                    : ""
            }

        </>
    );
};

export default GroupList;