import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { MdClose } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler';
import AddBranch from '../../components/PrimarySetup/Branch/AddBranch';
import BranchList from '../../components/PrimarySetup/Branch/BranchList';

const branchData = [
    {
        id: '1',
        branchName: 'Branch One',
        branchShortName: 'ABCDE',
        mobile: "01303263591",
        email: "dev.shakilshajib@gmail.com",
        telePhone: "99999999999",
        address: "Uttara, Dhaka"
    },
    {
        id: '2',
        branchName: 'Branch Two',
        branchShortName: 'ABCDE',
        mobile: "01303263591",
        email: "dev.shakilshajib@gmail.com",
        telePhone: "99999999999",
        address: "Uttara, Dhaka"
    },
    {
        id: '3',
        branchName: 'Branch Three',
        branchShortName: 'ABCDE',
        mobile: "01303263591",
        email: "dev.shakilshajib@gmail.com",
        telePhone: "99999999999",
        address: "Uttara, Dhaka"
    },
    {
        id: '4',
        branchName: 'Branch Four',
        branchShortName: 'ABCDE',
        mobile: "01303263591",
        email: "dev.shakilshajib@gmail.com",
        telePhone: "99999999999",
        address: "Uttara, Dhaka"
    },
    {
        id: '5',
        branchName: 'Branch Five',
        branchShortName: 'ABCDE',
        mobile: "01303263591",
        email: "dev.shakilshajib@gmail.com",
        telePhone: "99999999999",
        address: "Uttara, Dhaka"
    },
]

const BranchSetup = () => {

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    const [branch, setBranchName] = useState(branchData);
    const [addBranchPopup, setAddBranchPopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);
    const [bankToDelete, setBankToDelete] = useState(null);

    const generateId = () => {
        // Generate a unique ID based on the current timestamp
        return new Date().getTime().toString();
    };

    const [formValues, setFormValues] = useState({
        id: generateId(),
        branchName: '',
        branchShortName: '',
        mobile: '',
        email: '',
        telePhone: '',
        address: ''
    });

    const deletePopupClose = () => {
        setDeletePopup(false)
    }

    const addBranchPopupOpen = () => {
        setAddBranchPopup(true)
    }
    const addBranchPopupClose = () => {
        setAddBranchPopup(false)
        setFormValues({ branchName: '', branchShortName: '', mobile: '', email: '', telePhone: '', address: '' });
    }

    const SuccessNotify = () => toast.success(
        <p className={`${banglaFontClass} text-xl`}>
            {currentLanguage === 'bn' ? 'সফলভাবে অ্যাড হয়েছে' : 'Added successfully'}
        </p>, {
        duration: 4000,
        position: 'top-center',
    }
    );

    const handleAddBranch = () => {
        if (formValues.branchName && formValues.branchShortName && formValues.mobile && formValues.email && formValues.telePhone && formValues.address) {
            const newId = generateId()
            setBranchName([...branch, { id: newId, ...formValues }]);
            setFormValues({ branchName: '', branchShortName: '', mobile: '', email: '', telePhone: '', address: '' });
            SuccessNotify()
            addBranchPopupClose();
        }
    };

    console.log('branch', branch)

    const handleEditBranch = () => {
        if (formValues.branchName && formValues.branchShortName && formValues.mobile && formValues.email && formValues.telePhone && formValues.address) {
            const updatedBranch = branch.map((branch) =>
                branch.id === formValues.id
                    ? { ...branch, branchName: formValues.branchName, branchShortName: formValues.branchShortName, mobile: formValues.mobile, email: formValues.email, telePhone: formValues.telePhone, address: formValues.address }
                    : branch
            );
            setBranchName(updatedBranch);
            SuccessNotify()
            addBranchPopupClose();
        }
    };

    const handleDeleteBranch = (id) => {
        setBankToDelete(id);
        setDeletePopup(true);
    };

    const confirmDelete = () => {
        const updatedBranch = branch.filter((branch) => branch.id !== bankToDelete);
        setBranchName(updatedBranch);
        setDeletePopup(false);
    };

    const handleEdit = (branch) => {
        setFormValues({ id: branch.id, branchName: branch.branchName, branchShortName: branch.branchShortName, mobile: branch.mobile, email: branch.email, telePhone: branch.telePhone, address: branch.address });
        addBranchPopupOpen();
    };

    return (
        <div>
            <AddBranch
                handleAddBranch={handleAddBranch}
                formValues={formValues}
                setFormValues={setFormValues}
                addBranchPopup={addBranchPopup}
                addBranchPopupOpen={addBranchPopupOpen}
                addBranchPopupClose={addBranchPopupClose}
                handleEditBranch={handleEditBranch}
            />
            <BranchList
                handleEdit={handleEdit}
                handleDeleteBranch={handleDeleteBranch}
                handleEditBranch={handleEditBranch}
                branch={branch} />
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
        </div>
    );
};

export default BranchSetup;