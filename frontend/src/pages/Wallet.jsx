import React from 'react';
import { WaitingForTransactionMessage } from '../components/WaitingForTransactionMessage';
import { TransactionErrorMessage } from '../components/messages/TransactionErrorMessage';

export const Wallet = (props) => {
    return (
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
        </div>
    )
}
