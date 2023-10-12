import { useParams, Link } from 'react-router-dom';
import React, { useState } from 'react';
import customerData from '../data/customerData';


const CustomerDetailsData = () => {

    const { accountNo } = useParams();
    const customer = customerData.find((customer) => customer.accountNo === accountNo);

    if (!customer) {
        return <div>customer not found</div>;
    }

    return (
        <>
            <div className=' print:mt-10 flex print:justify-between justify-center md:justify-between items-center pb-5 md:pb-10'>
                <div className='text-center print:text-left md:text-left'>
                    <p className='text-lg print:text-2xl md:text-xl font-semibold'>Dreamers Club</p>
                    <p className='text-xs print:text-lg'>Sordar Monjil, Mokimabad, Hajigong, Chandpur</p>
                    <p className='text-xs print:text-lg md:text-sm'>dev.shakilshajib@gmail.com</p>
                    <p className='text-xs print:text-lg md:text-sm'>016565455646</p>
                </div>
                <div className='md:block hidden print:block'>
                {/* <div className="flex flex-col justify-center items-center">
                    <img src={cardLOne} className="h-16 print:h-30 md:h-20 w-16 print:w-30 md:w-20 rounded-md object-cover" alt="customer" />
                </div> */}
                </div>
            </div>
        </>
    );
};

export default CustomerDetailsData;