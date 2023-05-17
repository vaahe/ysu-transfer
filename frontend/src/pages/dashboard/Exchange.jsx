import classNames from 'classnames'
import React, { useState } from 'react';
import { BsSend, BsCurrencyExchange } from "react-icons/bs";

import { Transfer } from '../../components/Transfer'
import { NoTokensMessage } from '../../components/messages/NoTokensMessage';
import { TransactionErrorMessage } from '../../components/messages/TransactionErrorMessage';
import { WaitingForTransactionMessage } from '../../components/messages/WaitingForTransactionMessage';


export const Exchange = ({ props }) => {
    const [isLayoutOne, setIsLayoutOne] = useState(true);
    const [isFocused, setIsFocused] = useState(true);

    function handleLayoutOneClick() {
        setIsFocused(true);
        setIsLayoutOne(true);
    }

    function handleLayoutTwoClick() {
        setIsFocused(false);
        setIsLayoutOne(false);
    }

    return (
        <div className='w-full mx-2'>
            <span className='text-2xl text-[#1d1d1d] font-mono'> Exchange</span>

            <div className="mx-auto flex justify-center items-center my-2 border rounded-2xl p-2">
                <button
                    onClick={handleLayoutOneClick}
                    id="toggle-layout-1"
                    className={classNames({
                        "w-[40%] text-blue-900 flex justify-center py-2 px-4 rounded-xl hover:border border-blue-300 active:bg-blue-500 flex mx-1": true,
                        "border bg-blue-700 text-slate-50": isFocused
                    })}>
                    <BsSend className="w-6 h-6 mx-2" />
                    Send
                </button>
                <button
                    onClick={handleLayoutTwoClick}
                    id="toggle-layout-2"
                    className={classNames({
                        "w-[40%] text-blue-900 flex justify-center py-2 px-4 rounded-xl hover:border border-blue-300 active:bg-blue-500 flex mx-1": true,
                        "border bg-blue-700 text-slate-50": !isFocused
                    })}>
                    <BsCurrencyExchange className="w-6 h-6 mx-2" />
                    Receive
                </button>
            </div>

            <div className="bg-gray-200">
                <div className="container mx-auto flex justify-center items-center">
                    {isLayoutOne ? (
                        <div className="bg-blue-100 p-4">
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
        </div >
    )
}
