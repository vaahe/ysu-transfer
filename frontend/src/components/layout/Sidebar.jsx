import React, { useState } from "react";
import cn from "classnames";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { defaultNavItems } from "./defaultNavItems";
import { Link } from 'react-router-dom';

const Sidebar = ({ collapsed, setCollapsed, navItems = defaultNavItems, shown }) => {
    const Icon = collapsed ? AiOutlineDoubleRight : AiOutlineDoubleLeft;

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <div
            className={cn({
                "text-black z-20": true,
                "transition-all duration-300 ease-in-out": true,
                "fixed md:static md:translate-x-0": true,
                "w-[300px]": !collapsed,
                "w-16": collapsed,
                "-translate-x-full": !shown
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
                        "flex items-center border-b border-b-[#043669]": true,
                        "p-4 justify-between": !collapsed,
                        "py-4 justify-center": collapsed,
                    })}
                >
                    {!collapsed &&
                        <span className="whitespace-nowrap flex items-center justify-between w-full text-[#043669] text-xl">
                            <img
                                src="https://www.eduopinions.com/wp-content/uploads/2017/09/Yerevan-State-University-YSU-logo.png"
                                alt="YSU"
                                width={64}
                                height={64}
                            />
                            YSU Transfer
                        </span>}
                    <button
                        className={cn({
                            "grid place-content-center": true, // position
                            "hover:bg-indigo-800 ": true, // colors
                            "w-10 h-10 rounded-full": true, // shape
                        })}
                        // 👇 set the collapsed state on click
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <Icon className="w-5 h-5" />
                    </button>
                </div>
                <nav className="flex-grow">
                    <ul
                        className={cn({
                            "my-2 flex flex-col gap-2 items-stretch": true,
                        })}
                    >
                        {navItems.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={handleClick}
                                >
                                    <Link to={item.href}
                                        className={cn({
                                            "text-[#043669] hover:bg-[#043669] hover:text-white flex": true, //colors
                                            "transition-colors duration-300": true, //animation
                                            "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                                            "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                                            "flex gap-2 active:bg-[#043669] focus:ring focus:bg-[#043669] focus:text-white": true
                                        })}
                                    >
                                        {item.icon}
                                        <span>{!collapsed && item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div
                    className={cn({
                        "grid place-content-stretch p-4 ": true,
                    })}
                >
                    <div className="flex gap-4 items-center h-11 overflow-hidden">
                        <img
                            src={
                                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            }
                            height={36}
                            width={36}
                            alt="Joe"
                            className="rounded-full"
                        />
                        {!collapsed && (
                            <div className="flex flex-col ">
                                <span className="text-indigo-50 my-0">Tom Cook</span>
                                <a href="/" className="text-indigo-200 text-sm">
                                    View Profile
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;