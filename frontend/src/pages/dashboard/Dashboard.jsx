import React from 'react'
import { Exchange } from './Exchange'
import { Transactions } from './Transactions'


export const Dashboard = (props) => {


    return (
        <div className='flex'>
            <Exchange props={props} />
            <Transactions />
        </div>
    )
}
