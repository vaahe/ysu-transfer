import React from 'react'

export const Transactions = ({ date, amount, name }) => {
    return (
        <div>
            <h1 className='text-xl'>{date}</h1>
            <h3 className='text-lg'>{amount}</h3>
            <h5 className='text-lg'>{name}</h5>
        </div>
    )
}
