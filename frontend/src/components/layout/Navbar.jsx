// import React from "react";
// import { HiBars3 } from "react-icons/hi2";
// import classNameNames from "classNamenames";

// const Navbar = (props) => {
//     return (
//         <nav
//             classNameName={classNameNames({
//                 "bg-white text-zinc-500": true, // colors
//                 "flex items-center": true, // layout
//                 "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true, //positioning & styling
//             })}
//         >
//             <div classNameName="font-bold text-lg">Admin Panel</div>
//             <div classNameName="flex-grow"></div>
//             <button classNameName="md:hidden" onClick={props.onMenuButtonClick}>
//                 <HiBars3 classNameName="h-6 w-6" />
//             </button>
//         </nav>
//     );
// };
// export default Navbar;

import React from 'react'
import classNames from 'classnames';

const Navbar = () => {
    return (

        <nav className={classNames({
            "bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700": true,
            "bg-white text-zinc-500": true, // colors
            "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true,
        })} >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li aria-labelledby="dropdownNavbarLink">
                                        <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
                                        <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                                                </li>
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My downloads</a>
                                                </li>
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                                                </li>
                                                <li>
                                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;