import {
    Body,
    Cell,
    Header,
    HeaderCell,
    HeaderRow,
    Row,
    Table
} from "@table-library/react-table-library/table";
import React from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { BiSolidEdit, BiTrash } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler';
import AddMobile from "./AddMobile";

const nodes = [
    {
        id: '1',
        mobile: '0188',
        paymentOption: 'Bkash',
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


const MobileList = () => {

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
        mobile: '',
        paymentOption: '',
    });

    const handleAdd = () => {
        if (formValues.mobile && formValues.paymentOption) {
            const newId = generateId()
            const newData = [...data.nodes, { id: newId, ...formValues }];
            setData({ nodes: newData });
            setFormValues({ mobile: '', paymentOption: '' });
            SuccessNotify();
            addPopupClose();
        }
    };

    const handleEdit = (id) => {
        const item = data.nodes.find((node) => node.id === id);
        setItemToEdit(item);
        setFormValues({
            id: item.id,
            mobile: item.mobile,
            paymentOption: item.paymentOption,
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


    return (
        <>
            <AddMobile
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

            <label htmlFor="search">
                Search by Task:&nbsp;
                <input id="search" type="text" value={search} onChange={handleSearch} />
            </label>
            <br />
            <Table data={data} layout={{ custom: true, horizontalScroll: true }} className="!w-full !table-auto">
                {(tableList) => (
                    <>
                        <Header className="!max-w-full">
                            <HeaderRow className="!bg-gray-2 !text-left !dark:bg-meta-4 !w-full !flex">
                                <HeaderCell className="{`!min-w-[100px] ${banglaFontClass} !py-3 !px-2 font-bold text-base text-center dark:text-white border border-[#eee] dark:border-form-strokedark`}">
                                    <div className="w-[82px]"></div>
                                </HeaderCell>

                                <HeaderCell className={`!min-w-[160px] ${banglaFontClass} !text-center !py-3 !px-2 !pt-4 font-bold text-base dark:text-white border border-[#eee] dark:border-form-strokedark`}> {t('BranchName')}</HeaderCell>

                                <HeaderCell className={`!min-w-[100px] ${banglaFontClass} !text-center !py-3 !px-2 !pt-4 font-bold text-base dark:text-white border border-[#eee] dark:border-form-strokedark`}>{t('BranchShortName')}</HeaderCell>

                                <HeaderCell className={`!min-w-[130px] ${banglaFontClass} !text-center !py-3 !px-2 !pt-4 font-bold text-base dark:text-white border border-[#eee] dark:border-form-strokedark`}>{t('mobile')}</HeaderCell>

                                <HeaderCell className={`!min-w-[130px] ${banglaFontClass} !text-center !py-3 !px-2 !pt-4 font-bold text-base dark:text-white border border-[#eee] dark:border-form-strokedark`}>{t('email')}</HeaderCell>

                                <HeaderCell className={`!min-w-[130px] ${banglaFontClass} !text-center !py-3 !px-2 !pt-4 font-bold text-base dark:text-white border border-[#eee] dark:border-form-strokedark`}>{t('telePhone')}</HeaderCell>

                                <HeaderCell className={`!min-w-[160px] ${banglaFontClass} !text-center !py-3 !px-2 !pt-4 font-bold text-base dark:text-white border border-[#eee] dark:border-form-strokedark`}>{t('address')}</HeaderCell>

                            </HeaderRow>
                        </Header>
                        <Body>
                            {tableList.map((item, index) => (
                                <Row key={item.id} item={item} className="!flex">
                                    <Cell
                                        className="!min-w-[100px] !border !border-[#eee] !py-2 !px-2 !dark:border-strokedark">
                                        <div className="flex items-center justify-center gap-2">
                                            <button onClick={() => handleEdit(item.id)} className="flex gap-1 items-center px-2 md:px-2 py-1 bg-primary text-white rounded-md text-base">
                                                <BiSolidEdit className='text-base' />
                                            </button>
                                            <button onClick={() => handleRemoveData(item.id)} className="flex gap-1 items-center px-2 md:px-2 py-1 bg-danger text-white rounded-md text-base">
                                                <BiTrash className='text-base' />
                                            </button>
                                        </div>
                                    </Cell>
                                    <Cell
                                        className="!min-w-[160px] !border !border-[#eee] !py-2 !px-2 !dark:border-strokedark">
                                        <h5 className="text-center font-normal dark:text-white">{item.id}</h5>
                                    </Cell>
                                    <Cell
                                        className="!min-w-[160px] !border !border-[#eee] !py-2 !px-2 !dark:border-strokedark">
                                        <h5 className="text-center font-normal dark:text-white">{item.mobile}</h5>
                                    </Cell>
                                    <Cell
                                        className="!min-w-[160px] !border !border-[#eee] !py-2 !px-2 !dark:border-strokedark">
                                        <h5 className="text-center font-normal dark:text-white">{item.paymentOption}</h5>
                                    </Cell>
                                </Row>
                            ))}
                        </Body>
                    </>
                )}
            </Table>
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

export default MobileList;