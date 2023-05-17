import React, { useEffect } from 'react';
import { ETHERSCAN_API_KEY } from '../config';

export const Transactions = (props) => {
    // console.log(props.state.selectedAddress)
    // const fetchData = async () => {
    //     fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${props.state.selectedAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${ETHERSCAN_API_KEY}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data); // Array of transactions
    //         })
    //         .catch(error => console.error(error));
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    return (
        <div>

        </div>
    )
}
