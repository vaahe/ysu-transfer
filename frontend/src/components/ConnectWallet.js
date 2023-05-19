import React from "react";

import "../styles/ConnectWallet.css";

import { NetworkErrorMessage } from "./messages/NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {

  return (
    <div className="flex">
      <div className="container h-screen w-9/12">
        {networkError && (
          <NetworkErrorMessage
            message={networkError}
            dismiss={dismiss}
          />
        )}
      </div>
      <div className="text-[#043669] flex flex-col items-center justify-center w-[25%] text-center">
        <img src="https://www.eduopinions.com/wp-content/uploads/2017/09/Yerevan-State-University-YSU-logo.png" alt="ysu logo" width={256} height={256} />
        <div>
          <p className="text-5xl m-12 font-bold">
            Please connect to your wallet
          </p>
          <button
            className="bg-[#4285F4] animate-pulse hover:bg-[#1351B4] focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-2xl px-6 py-3 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div >
  );
}
