import React, { useEffect, useState } from 'react'
import { WaitingForTransactionMessage } from '../components/WaitingForTransactionMessage'
import { TransactionErrorMessage } from '../components/TransactionErrorMessage'
import { NoTokensMessage } from '../components/NoTokensMessage'
import { Transfer } from '../components/Transfer'
import { Transactions } from './Transactions'

export const Dashboard = (props) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    const currentDate = new Date();
    const monthIndex = currentDate.getMonth();
    const fullMonthName = months[monthIndex];

    const [isLayoutOne, setIsLayoutOne] = useState(true);

    function handleLayoutOneClick() {
        setIsLayoutOne(true);
    }

    function handleLayoutTwoClick() {
        setIsLayoutOne(false);
    }

    return (
        <div className='flex'>
            <div className="container w-1/2">
                <h1 className='text-2xl'>Exchange</h1>

                <div className="mx-auto flex justify-center items-center mt-4">
                    <button
                        onClick={handleLayoutOneClick}
                        id="toggle-layout-1"
                        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mr-4">
                        Send
                    </button>
                    <button
                        onClick={handleLayoutTwoClick}
                        id="toggle-layout-2"
                        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                        Receive
                    </button>
                </div>

                <div className="bg-gray-200">
                    <div className="container mx-auto flex justify-center items-center">
                        {isLayoutOne ? (
                            <div className="bg-blue-100 p-4">
                                <p>Send</p>
                                <div className="row">
                                    <div className="col-12">
                                        <h1>
                                            {props.state.tokenData.name} ({props.state.tokenData.symbol})
                                        </h1>
                                        <p>
                                            Welcome <b>{props.state.selectedAddress}</b>, you have{" "}
                                            <b>
                                                {props.state.balance.toString()} {props.state.tokenData.symbol}
                                            </b>
                                            .
                                        </p>
                                    </div>
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="col-12">
                                        {props.state.txBeingSent && (
                                            <WaitingForTransactionMessage txHash={props.state.txBeingSent} />
                                        )}
                                        {props.state.transactionError && (
                                            <TransactionErrorMessage
                                                message={this._getRpcErrorMessage(props.state.transactionError)}
                                                dismiss={() => this._dismissTransactionError()}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        {props.state.balance.eq(0) && (
                                            <NoTokensMessage selectedAddress={props.state.selectedAddress} />
                                        )}
                                        {props.state.balance.gt(0) && (
                                            <Transfer
                                                transferTokens={(to, amount) =>
                                                    props.transferTokens(to, amount)
                                                }
                                                tokenSymbol={props.state.tokenData.symbol}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-green-100 p-4">
                                <p>Receive</p>
                            </div>
                        )}
                    </div>


                </div>
            </div>

            {/* // transaction */}
            <div className='container w-1/2'>
                <h2 className='text-2xl'>Transactions</h2>
                <div>
                    <Transactions
                        date={`${currentDate.getDate()} ${fullMonthName} ${currentDate.getFullYear()}`}
                        amount={45}
                        name={"John Doe"} />
                </div>
            </div>
        </div>
    )
}
