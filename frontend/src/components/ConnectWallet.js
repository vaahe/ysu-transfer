import React from "react";

import { styles } from "../styles/ConnectWallet";

import { NetworkErrorMessage } from "./messages/NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    <div className={`${styles.background} h-screen
    `}>
      <div className="text-center">
        {networkError && (
          <NetworkErrorMessage
            message={networkError}
            dismiss={dismiss}
          />
        )}
        <p>Please connect to your wallet.</p>
        <button
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-2xl px-6 py-3 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
