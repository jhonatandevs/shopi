import { NavLink } from 'react-router-dom'
import React, { useContext } from "react";
import { ShoppingCartContext } from '../../Context';
import { ArchiveBoxIcon, BeakerIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
export const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    let activeStyle = 'underline underline-offset-4';
    return (
        <nav className='flex justify-between items-center fixed z-30 top-0 w-full py-5 px-8 bg-gradient-to-r from-white via-gray-300 to-gray-100 bg-gradient-to-b from-white via-gray-300 to-transparent dark:bg-gradient-to-b dark:from-slate-600 dark:via-slate-700 dark:to-slate-800 dark:bg-slate-800 dark:text-white mb-16'>
            <ul className='flex items-center gap-3'>
                <li className='pb-1'>
                    <NavLink
                        to='/'
                        className={`${({ isActive }) => isActive ? activeStyle : undefined} font-bold text-2xl mb-3`}
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/category/clothes'
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/category/electronics'
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/category/furnitures'
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/category/toys'
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/category/others'
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-5'>
                <li className='text-black/50 dark:text-white'>
                    jhonatan3506@gmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink

                        to='/signin'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        SignIn
                    </NavLink>
                </li>
                <li className='flex gap-2'>
                <ShoppingCartIcon className="h-6 w-6 text-black-500" /> {context.count}
                </li>
            </ul>
        </nav>
    )
}