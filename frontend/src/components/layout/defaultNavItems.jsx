import React from "react";
import { CiWallet, CiSettings, CiCircleList } from "react-icons/ci"
import { AiFillHome, AiOutlineMessage } from "react-icons/ai"

export const defaultNavItems = [
    {
        label: "Dashboard",
        href: "/",
        icon: <AiFillHome className="w-6 h-6" />,
    },
    {
        label: "Wallet",
        href: "/wallet",
        icon: <CiWallet className="w-6 h-6" />,
    },
    {
        label: "Transactions",
        href: "/transactions",
        icon: <CiCircleList className="w-6 h-6" />,
    },
    {
        label: "Messages",
        href: "/messages",
        icon: <AiOutlineMessage className="w-6 h-6" />
    },
    {
        label: "Settings",
        href: "/settings",
        icon: <CiSettings className="w-6 h-6" />,
    },
];