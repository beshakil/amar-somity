import { usePagination } from "@table-library/react-table-library/pagination";
import {
    Table
} from "@table-library/react-table-library/table";
import React from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { BiSolidEdit, BiTrash } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { MdClose, MdPreview } from "react-icons/md";
import { RxDropdownMenu } from "react-icons/rx";
import OutsideClickHandler from 'react-outside-click-handler';
import AddDirector from "./AddDirector";
import { NavLink } from "react-router-dom";

const nodes = [
    {
        id: '1',
        directorName: "Shakil Ahmed",
        designation: "Manager",
        joiningDate: "10/19/2023",
        mobile: "01303263591",
        email: "z1Fq3@example.com",
        nid: "123456789",
        address: "Uttara, Dhaka",
        group: "Main Branch",
        image: "https://i.ibb.co/wQ9wGtk/User-Profile-PNG-High-Quality-Image.webp",
        userName: "andormohol4",
        password: "123456",
        status: "Active",
    },
    {
        id: '2',
        mobile: '0155',
        paymentOption: 'Nagad',
    },
    {
        id: '3',
        mobile: '01303263591',
        paymentOption: 'Upay',
    },
]


const DirectorList = () => {

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
    const [selectedValue, setSelectedValue] = React.useState('');
    const [selectedUserTypeValue, setSelectedUserTypeValue] = React.useState('');
    const [selectedUserStatus, setSelectedUserStatus] = React.useState('');

    const generateId = () => {
        return new Date().getTime().toString();
    };

    const [formValues, setFormValues] = React.useState({
        id: generateId(),
        directorName: "",
        designation: "",
        joiningDate: "",
        mobile: "",
        email: "",
        nid: "",
        address: "",
        image: "https://i.ibb.co/wQ9wGtk/User-Profile-PNG-High-Quality-Image.webp",
        group: selectedValue,
        userName: "",
        password: "",
        status: selectedUserStatus,
    });



    const SuccessNotify = () => toast.success(
        <p className={`${banglaFontClass} text-xl`}>
            {currentLanguage === 'bn' ? 'সফলভাবে অ্যাড হয়েছে' : 'Added successfully'}
        </p>, {
        duration: 4000,
        position: 'top-center',
    }
    );

    React.useEffect(() => {
        setData({ nodes });
    }, []);


    // Generate a unique ID with create data based on the current timestamp

    const addPopupOpen = () => {
        setAddPopup(true)
    }

    const handleSelectChange = (event) => {
        const { value } = event.target;
        setSelectedValue(value);
        setFormValues({
            ...formValues,
            group: value,
        });
    };

    const handleSelectUserTypeChange = (event) => {
        const { value } = event.target;
        setSelectedUserTypeValue(value);
        setFormValues({
            ...formValues,
            userType: value,
        });
    };

    const handleUserStatus = (event) => {
        const { value } = event.target;
        setSelectedUserStatus(value);
        setFormValues({
            ...formValues,
            status: value,
        });
    };


    const handleAdd = (e) => {
        e.preventDefault()
        const newId = generateId()
        const newData = [{ id: newId, ...formValues }, ...data.nodes];
        setData({ nodes: newData });
        // setFormValues({ mobile: '', paymentOption: '' });
        SuccessNotify();
        addPopupClose();

    };

    console.log('formValues', formValues)

    const handleEdit = (id) => {
        const item = data.nodes.find((node) => node.id === id);
        setItemToEdit(item);
        setFormValues({
            id: item.id,
            directorName: item.directorName,
            designation: item.designation,
            joiningDate: item.joiningDate,
            mobile: item.mobile,
            email: item.email,
            nid: item.nid,
            address: item.address,
            image: "https://i.ibb.co/wQ9wGtk/User-Profile-PNG-High-Quality-Image.webp",
            group: item.group,
            userName: item.userName,
            password: item.password,
            status: item.status,
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
                mobile: formValues.mobile,
                paymentOption: formValues.paymentOption,
            };

            // Update the data and close the edit popup
            setData({ nodes: updatedData });
            SuccessNotify();
            setAddPopup(false);
            setItemToEdit(null);
            setFormValues({ mobile: '', paymentOption: '' });
        }
    };

    const addPopupClose = () => {
        setAddPopup(false)
        setFormValues({ mobile: '', paymentOption: '' });
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
                node.mobile.toLowerCase().includes(searchTerm)
            );

            // Update the data with the filtered results
            setData({ nodes: filteredData });
        }
    };

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
            { accessor: (item) => item.mobile, name: "Mobile" },
            { accessor: (item) => item.paymentOption, name: "Payment Method" },
        ];

        downloadAsCsv(columns, data.nodes, "table");
    };


    return (
        <>
            <AddDirector
                handleAdd={handleAdd}
                formValues={formValues}
                setFormValues={setFormValues}
                addPopup={addPopup}
                addPopupOpen={addPopupOpen}
                addPopupClose={addPopupClose}
                itemToEdit={itemToEdit}
                handleEdit={handleEdit}
                handleSubmitEdit={handleSubmitEdit}
                handleSelectChange={handleSelectChange}
                selectedValue={selectedValue}
                selectedUserTypeValue={selectedUserTypeValue}
                handleSelectUserTypeChange={handleSelectUserTypeChange}
                selectedUserStatus={selectedUserStatus}
                handleUserStatus={handleUserStatus}
            />
            {/* <button type="button" onClick={handleDownloadCsv}>
                Download as CSV
            </button> */}
            <div className="border border-stroke p-2">
                <div className="relative">
                    <button className="absolute top-1/2 left-0 -translate-y-1/2">
                        <BsSearch className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary text-xl" />
                    </button>
                    <input
                        type="text"
                        placeholder={t('searchByMobileNumber')}
                        value={search}
                        onChange={handleSearch}
                        className={`w-full bg-transparent pr-4 pl-9 focus:outline-none ${banglaFontClass}`}
                    />
                </div>
            </div>
            <br />
            <div className="max-w-full overflow-x-auto">
                <Table data={data} layout={{ custom: true, horizontalScroll: true }} pagination={pagination} className="!w-full !table-auto !inline-table">
                    {(tableList) => (
                        <>
                            <thead>
                                <tr className="bg-gray-2 dark:bg-meta-4 font-bold text-base text-center dark:text-white ">
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}></th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('Photo')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('DirectorName')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('Designation')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('JoiningDate')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('mobileNumber')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('Group')}
                                    </th>
                                    <th className={` ${banglaFontClass} py-3 px-2 border border-[#eee] dark:border-form-strokedark`}>
                                        {t('Status')}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-black">
                                {tableList.map((item) => (
                                    <tr key={item.id} className="text-center">
                                        <td className=" border border-[#eee] py-2 px-2 dark:border-strokedark">
                                            {/* <RxDropdownMenu /> */}
                                            <div className="flex gap-2 justify-center">
                                                <NavLink to={`/out-loan/${item.id}`}>
                                                    <button className="flex gap-1 items-center px-1 py-1 bg-meta-3 text-white rounded-md text-base">
                                                        <MdPreview className='text-lg' />
                                                    </button>
                                                </NavLink>
                                                <button onClick={() => handleEdit(item.id)} className="flex gap-1 items-center px-1 py-1 bg-primary text-white rounded-md text-base">
                                                    <BiSolidEdit className='text-base' />
                                                </button>
                                                <button onClick={() => handleRemoveData(item.id)} className="flex gap-1 items-center px-1 py-1 bg-danger text-white rounded-md text-base">
                                                    <BiTrash className='text-base' />
                                                </button>

                                            </div>
                                        </td>
                                        <td className="border border-[#eee] py-2 px-2 dark:border-strokedark flex justify-center">
                                            <img className="w-8 h-8" src="https://i.ibb.co/wQ9wGtk/User-Profile-PNG-High-Quality-Image.webp" />
                                        </td>
                                        <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                            <p className=" dark:text-white">{item.directorName}</p>
                                        </td>
                                        <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                            <p className=" dark:text-white">{item.designation}</p>
                                        </td>
                                        <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                            <p className=" dark:text-white">{item.joiningDate}</p>
                                        </td>
                                        <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                            <p className=" dark:text-white">{item.mobile}</p>
                                        </td>
                                        <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                            <p className=" dark:text-white">{item.group}</p>
                                        </td>
                                        <td className="border border-[#eee] py-2 px-2 dark:border-strokedark">
                                            <p className=" dark:text-white">{item.status}</p>
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

export default DirectorList;