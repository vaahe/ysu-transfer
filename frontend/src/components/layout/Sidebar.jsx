import React from "react";
import cn from "classnames";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { defaultNavItems } from "./defaultNavItems";
import { Link } from 'react-router-dom';

import { MdDarkMode, MdLightMode } from "react-icons/md";

import { styles } from "../../styles/Sidebar";

const Sidebar = ({ collapsed, setCollapsed, navItems = defaultNavItems, shown }) => {
    const isDark = true;
    const Icon = collapsed ? AiOutlineDoubleRight : AiOutlineDoubleLeft;
    const Theme = isDark ? MdDarkMode : MdLightMode;

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <div
            className={cn({
                "text-black z-20 shadow-[0_0_3px_2px_rgba(0,0,0,0.1)]": true,
                "transition-all duration-300 ease-in-out": true,
                "fixed md:static md:translate-x-0": true,
                "w-[300px]": !collapsed,
                "w-16": collapsed,
                "-translate-x-full": !shown,
            })}
        >
            <div
                className={cn({
                    "flex flex-col justify-between shadow-sm h-screen": true,
                })}
            >
                {/* logo and collapse button */}
                <div
                    className={cn({
                        "flex items-center bg-white py-4 px-1 h-[76px] w-full": true,
                        "justify-between": !collapsed,
                        "justify-center bg-red-500": collapsed,
                    })}
                >
                    {!collapsed && <img {...styles.logo} alt="YSU" />}
                    <button className={styles.collapseBtn} onClick={() => setCollapsed(!collapsed)}>
                        <Icon className="w-6 h-6" />
                    </button>
                </div>
                <nav className="flex flex-col flex-grow justify-between shadow-md px-2">
                    <ul className={styles.list}>
                        {navItems.map((item, index) => {
                            return (
                                <li key={index} onClick={handleClick}>
                                    <Link to={item.href}
                                        className={cn({
                                            "text-[#043669] hover:bg-[#043669] hover:text-white flex": true, //colors
                                            "transition-colors px-2 duration-300": true, //animation
                                            "rounded-md gap-4 py-2 my-1": !collapsed,
                                            "rounded-full flex items-center mx-4 justify-center w-12 h-12": collapsed,
                                            "flex active:bg-[#043669] mx-auto focus:ring focus:bg-[#043669] focus:text-white": true
                                        })}
                                    >
                                        {item.icon}
                                        <span>{!collapsed && item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className={cn({
                        "flex gap-4 items-center h-10 mx-2 my-6 overflow-hidden text-[#043669] hover:text-[#017669] cursor-pointer": !collapsed,
                        "flex gap-4 justify-center  items-center h-10 mx-2 my-6 overflow-hidden text-[#043669] hover:text-[#017669] cursor-pointer": collapsed
                    })}>
                        <Theme className="h-6 w-6" />
                        {!collapsed && (
                            <span>Switch to Dark Mode</span>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};
export default Sidebar;