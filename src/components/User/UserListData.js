import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsSearch, BsEye, BsShieldLock } from "react-icons/bs";
import { BiSolidEdit, BiTrash } from "react-icons/bi";
import { RiFileExcel2Fill } from "react-icons/ri";
import OutsideClickHandler from 'react-outside-click-handler';

const userData = [
  {
    id: '1',
    name: 'Shakil Ahmed',
    email: 'dev.shakilshajib@gmail.com',
    phone: '01234567890',
    role: 'Admin',
    passWord: '123456',
  },
  {
    id: '2',
    name: 'Manju Alam',
    email: 'dev.manjualam.com',
    phone: '01234567890',
    role: 'Field Asst.',
    passWord: '123456',
  },
  {
    id: '3',
    name: 'Shakil Ahmed Shajib',
    email: 'dev.manjualam.com',
    phone: '01234567890',
    role: 'Depositor',
    passWord: '123456',
  }
]

const UserListData = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';

  const [moreInfo, setMoreInfo] = useState(null)

  const handleMoreInfo = (id) => {
    setMoreInfo(id === moreInfo ? null : id);
  }

  // const multipliedData = paymentsAll.map(payment => ({ ...payment, earning: payment.amount - ((2.5 / 100) * payment.amount) }));

  // if (paymentsAll.length === 0) {
  //     return <div className="text-center p-8 rounded-lg border-[#F4F4F4] border-[2px] mt-7 md:mt-9">
  //         <div className="w-fit p-4 mx-auto bg-neutral-200 rounded-full mb-5">
  //             <AiOutlineHeart className="text-3xl" />
  //         </div>
  //         <h2 className="text-xl font-semibold text-gray-700">
  //             You don&apos;t have any supporters yet
  //         </h2>
  //         <h3 className="font-normal text-gray-500 text-xs">
  //             Share your page with your audience to get started.
  //         </h3>
  //     </div>;
  // }


  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className='block md:hidden'>
              <div className='flex justify-between items-center'>
                <h2 className={`text-title-md2 font-semibold text-black dark:text-white ${banglaFontClass}`}>
                  {t('userList')}
                </h2>
                <button className='flex gap-2 items-center border border-stroke p-1 bg-[#20744A] text-white'>
                  <RiFileExcel2Fill className='text-white text-base' />
                  <p className={`${banglaFontClass} text-sm`}>{t('ExcelDownload')}</p>
                </button>
              </div>
            </div>
            <h2 className={`md:block hidden text-title-md2 font-semibold text-black dark:text-white ${banglaFontClass}`}>
              {t('userList')}
            </h2>
            <div className='md:block hidden'>
              <button className='flex gap-2 items-center border border-stroke p-2 bg-[#20744A] text-white'>
                <RiFileExcel2Fill className='text-white text-2xl' />
                <p className={`${banglaFontClass}`}>{t('ExcelDownload')}</p>
              </button>
            </div>
            <div className="border border-stroke p-3">
              <form className='' action="https://formbold.com/s/unique_form_id" method="POST">
                <div className="relative">
                  <button className="absolute top-1/2 left-0 -translate-y-1/2">
                    <BsSearch className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary text-xl" />
                  </button>
                  <input
                    type="text"
                    placeholder={t('searchByMobileNumber')}
                    className={`w-full bg-transparent pr-4 pl-9 focus:outline-none ${banglaFontClass}`}
                  />
                </div>
              </form>
            </div>
          </div>
      <div className="rounded-sm border border-t-0 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className='flex gap-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5'>
          <div className="w-[40%] md:w-[20%] flex items-center">
            <p className={`font-bold ${banglaFontClass}`}>{t('fullNameTable')}</p>
          </div>
          <div className='md:block hidden w-[20%]'>
            <div className=" flex items-center ">
              <p className={`font-bold ${banglaFontClass}`}>{t('email')}</p>
            </div>
          </div>
          <div className='md:block hidden w-[15%]'>
            <div className=" flex items-center justify-center">
              <p className={`font-bold ${banglaFontClass}`}>{t('mobile')}</p>
            </div>
          </div>
          <div className='md:block hidden w-[15%]'>
            <div className=" flex items-center justify-center">
              <p className={`font-bold ${banglaFontClass}`}>{t('password')}</p>
            </div>
          </div>
          <div className="w-[40%] md:w-[15%] flex items-center justify-center">
            <p className={`font-bold ${banglaFontClass}`}>{t('position')}</p>
          </div>
          <div className="w-[25%] md:w-[15%] flex justify-center items-center">
            <p className={`font-bold ${banglaFontClass}`}>{t('action')}</p>
          </div>
        </div>
        <div className=''>
          {
            userData.map((item, index) => {
              return (

                <ListDrawer
                  key={index}
                  id={item.id}
                  handleMoreInfo={handleMoreInfo}
                  moreInfo={moreInfo}
                  number={item.phone}
                  name={item.name}
                  email={item.email}
                  role={item.role}
                  passWord={item.passWord}
                  t_manager={t('manager')}
                  t_email={t('email')}
                  t_mobile={t('mobile')}
                  t_password={t('password')}
                  t_depositor={t('depositor')}
                  t_fieldAssistant={t('fieldAssistant')}
                  banglaFontClass={banglaFontClass}
                />

              )
            })
          }
        </div>
      </div>
    </>
  );
};

const ListDrawer = ({ handleMoreInfo, role, name, email, id, number, moreInfo, passWord, t_manager, t_depositor, t_fieldAssistant,  t_mobile, t_email, t_password, banglaFontClass }) => {
  return (
    <>
      <div className='flex items-center gap-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5'>
        <div className="w-[40%] md:w-[20%] flex items-center">
          <p className="font-medium text-sm">{name}</p>
        </div>
        <div className='md:block hidden w-[20%]'>
          <div className=" flex items-center">
            <p className="font-medium text-sm">{email}</p>
          </div>
        </div>
        <div className='md:block hidden w-[15%]'>
          <div className=" flex items-center justify-center">
            <p className="font-medium text-sm">{number}</p>
          </div>
        </div>
        <div className='md:block hidden w-[15%]'>
          <div className=" flex items-center justify-center">
            <p className="font-medium text-sm">{passWord}</p>
          </div>
        </div>
        <div className="w-[40%] md:w-[15%] flex items-center justify-center">
          <p className={`${banglaFontClass} inline-flex rounded-full text-sm 
          ${role === "Admin" ? "bg-success text-success" :
              role === "Field Asst." ? "bg-danger text-danger" :
                role === "Depositor" ? "bg-warning text-warning" : null} bg-opacity-10 py-1 px-3 text-sm `}>
            {role === "Admin" ? t_manager :
              role === "Field Asst." ? t_fieldAssistant :
                role === "Depositor" ? t_depositor : null}
          </p>
        </div>
        <div className="w-[25%] md:w-[15%] flex justify-center items-center">
          <div className="md:hidden block" onClick={() => handleMoreInfo(id)}>
            <button className="flex gap-1 items-center px-1 md:px-2 py-1 bg-form-strokedark text-white rounded-md mr-1 md:mr-2 text-sm">
              <BsEye className='' />
            </button>
          </div>
          <button className="flex gap-1 items-center px-1 md:px-2 py-1 bg-primary text-white rounded-md mr-1 md:mr-2 text-sm">
            <BiSolidEdit className='' /> <span className='md:block hidden'>Edit</span>
          </button>
          <button className="flex gap-1 items-center px-1 md:px-2 py-1 bg-danger text-white rounded-md text-sm">
            <BiTrash className='' /> <span className='md:block hidden'>Delete</span>
          </button>
        </div>
      </div >
      {
        moreInfo === id &&
        <div className='backWrap'>
          <OutsideClickHandler onOutsideClick={handleMoreInfo}>
            <div className="w-[320px] md:w-[440px] rounded-md dark:bg-graydark bg-white relative animate__animated animate__zoomIn animate__fast">
              <div className='p-4'>
                <div className='flex items-center gap-1 py-2 md:hidden'>
                  <p className={`${banglaFontClass} break-all`}> <span className='font-bold'>{t_email}:</span> {email}</p>
                </div>
                <div className='flex items-center gap-1 py-2'>
                  <p className={`${banglaFontClass} break-all`}> <span className='font-bold'>{t_mobile}:</span> {number}</p>
                </div>
                <div className='flex items-center gap-1 py-2'>
                <p className={`${banglaFontClass} break-all`}> <span className='font-bold'>{t_password}:</span> {passWord}</p>
                </div>
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      }
    </>
  );
}

export default UserListData;