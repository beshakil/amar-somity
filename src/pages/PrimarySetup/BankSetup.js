import React, { useState } from 'react';
import AddBank from '../../components/PrimarySetup/Bank/AddBank'
import BankList from '../../components/PrimarySetup/Bank/BankList'
import { useTranslation } from 'react-i18next';
import { MdClose } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler';
import toast, { Toaster } from 'react-hot-toast';

const bankData = [
    {
        id: '1',
        bankName: 'Islami Bank',
        accountNumber: 123456789,
        balance: 1000,
    },
    {
        id: '2',
        bankName: 'IFIC Bank',
        accountNumber: 987654321,
        balance: 2000,
    },
    {
        id: '3',
        bankName: 'City Bank',
        accountNumber: 111222333444,
        balance: 3000,
    },
    {
        id: '4',
        bankName: 'Prime Bank',
        accountNumber: 963852741,
        balance: 4000,
    },
    {
        id: '5',
        bankName: 'Brach Bank',
        accountNumber: 147258369,
        balance: 5000,
    },
]

const BankSetup = () => {

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

    const [banks, setBanks] = useState(bankData);
    const [addBankPopup, setAddBankPopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);
    const [bankToDelete, setBankToDelete] = useState(null);

    const [formValues, setFormValues] = useState({
        id: '',
        bankName: '',
        accountNumber: '',
        balance:''
    });

    const deletePopupClose = () => {
        setDeletePopup(false)
    }

    const addBankPopupOpen = () => {
        setAddBankPopup(true)
    }
    const addBankPopupClose = () => {
        setAddBankPopup(false)
        setFormValues({ id: '', bankName: '', accountNumber: '' });
    }

        const SuccessNotify = () => toast.success(
        <p className={`${banglaFontClass} text-xl`}>
            {currentLanguage === 'bn' ? 'সফলভাবে অ্যাড হয়েছে' : 'Added successfully'}
        </p>, {
        duration: 4000,
        position: 'top-center',
    }
    );

    const handleAddBank = () => {
        if (formValues.bankName && formValues.accountNumber) {
            setBanks([...banks, { id: (banks.length + 1).toString(), ...formValues }]);
            setFormValues({ id: '', bankName: '', accountNumber: '' });
            SuccessNotify()
            addBankPopupClose();
        }
    };

    const handleEditBank = () => {
        if (formValues.bankName && formValues.accountNumber) {
            const updatedBanks = banks.map((bank) =>
                bank.id === formValues.id
                    ? { ...bank, bankName: formValues.bankName, accountNumber: formValues.accountNumber }
                    : bank
            );
            setBanks(updatedBanks);
            SuccessNotify()
            addBankPopupClose();
        }
    };

    const handleDeleteBank = (id) => {
        setBankToDelete(id);
        setDeletePopup(true);
      };

      const confirmDelete = () => {
        const updatedBanks = banks.filter((bank) => bank.id !== bankToDelete);
        setBanks(updatedBanks);
        setDeletePopup(false);
      };

    const handleEdit = (bank) => {
        setFormValues({ id: bank.id, bankName: bank.bankName, accountNumber: bank.accountNumber });
        console.log('test')
        addBankPopupOpen();
    };

    return (
        <div>
            <AddBank
                handleAddBank={handleAddBank}
                formValues={formValues}
                setFormValues={setFormValues}
                addBankPopup={addBankPopup}
                addBankPopupOpen={addBankPopupOpen}
                addBankPopupClose={addBankPopupClose}
                handleEditBank={handleEditBank}
            />

            <BankList
                handleEdit={handleEdit}
                addBankPopupOpen={addBankPopupOpen}
                handleDeleteBank={handleDeleteBank}
                handleEditBank={handleEditBank}
                banks={banks} />
            {
                deletePopup === true ?
                    <div className='backWrapData'>
                        <OutsideClickHandler onOutsideClick={deletePopupClose}>
                            <div className='w-[320px] md:w-[600px] bg-white dark:bg-graydark p-5 rounded-md'>
                                <div className='flex justify-between items-center border-b border-stroke pb-2'>
                                    <div>
                                        <p className={`${banglaFontClass} font-bold text-xl`} >{t('BankDelete')} </p>
                                    </div>
                                    <div>
                                        <button onClick={deletePopupClose} className='bg-primary text-white rounded-md'>
                                            <MdClose className='text-2xl md:text-3xl p-1 md:p-2' />
                                        </button>
                                    </div>
                                </div>
                                <p className={`${banglaFontClass} text-base md:text-xl py-6`}>{t('DeleteThisBank')}</p>
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

export default BankSetup;