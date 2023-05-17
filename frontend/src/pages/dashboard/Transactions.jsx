import React from 'react';
import { BsArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";

export const Transactions = () => {
    const transactions = [
        {
            action: "receive",
            date: new Date().toJSON().slice(0, 10),
            amount: "256",
            status: "complete",
            id: 1
        },
        {
            action: "send",
            date: new Date().toJSON().slice(0, 10),
            amount: "454",
            status: "decline",
            id: 2
        },
        {
            action: "receive",
            date: new Date().toJSON().slice(0, 10),
            amount: "122",
            status: "complete",
            id: 3
        },
        {
            action: "receive",
            date: new Date().toJSON().slice(0, 10),
            amount: "321",
            status: "complete",
            id: 4
        },
    ];

    return (
        <div className='w-full mx-2'>
            <span className='text-2xl text-[#1d1d1d] font-mono'>Transactions</span>

            {transactions.map(transaction =>
                <div key={transaction.id} className='flex justify-between font-semibold items-center border rounded-2xl my-2 p-2 text-[#0D3C4B]'>
                    <div className='flex'>
                        <div>
                            {transaction.action === "send" ? <BsFillArrowUpCircleFill className='h-12 w-12 text-red-400' /> : <BsArrowDownCircleFill className='h-12 w-12 text-[#46a875]' />}
                        </div>
                        <div className='flex flex-col items-start mx-2'>
                            <span>
                                {transaction.action === "send" ? "Transfer Amount" : "Balance Received"}
                            </span>
                            <span>
                                {transaction.date}
                            </span>
                        </div>
                    </div>
                    <p>${transaction.amount}</p>
                    <div>
                        {transaction.status === "complete" ?
                            <div className='border rounded-3xl bg-[#46a875] text-white font-semibold py-2 w-24 text-center'>Complete</div> :
                            <div className='border rounded-3xl bg-red-400 text-white font-semibold py-2 w-24 text-center'>Decline</div>}
                    </div>
                </div>
            )}
        </div>

    )
}
