import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

import { styles } from '../../styles/Navbar';


const Navbar = () => {
    const [isDropped, setIsDropped] = useState(false);

    // window.addEventListener("click", () => {
    //     setIsDropped(false);
    // });

    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li>
                    <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                </li>
                <li className='relative'>
                    <button onClick={() => setIsDropped(prevState => !prevState)}
                        className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                        <div className="flex gap-4 items-center h-11 overflow-hidden">
                            <img
                                src={"https://media.licdn.com/dms/image/C4E03AQGTNGqYFwkbYg/profile-displayphoto-shrink_800_800/0/1650474319290?e=2147483647&v=beta&t=SZgnS7KORT4LTcBSnqYxawstlagN9Xk4nSkKIlGgKZ8"}
                                height={36}
                                width={36}
                                alt="Joe"
                                className="rounded-full"
                            />
                            <div className="flex items-center">
                                <span className="text-[#043669] my-0">Vahe Barseghyan</span>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </button>
                    <div className={`${isDropped ? 'visible' : 'invisible'} z-10 font-normal bg-red-300 absolute top-12 left-0 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                            <li>
                                <a href="/" className="block rounded-lg m-1 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="/" className="block rounded-lg m-1 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="/" className="block rounded-lg m-1 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="/" className="block rounded-lg m-1 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a href="/" className="block rounded-lg m-1 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar;