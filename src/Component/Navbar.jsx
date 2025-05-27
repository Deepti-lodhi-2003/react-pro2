import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-center gap-10 pt-4 pb-4 w-[30vw] ml-[35%] mt-2 rounded-full bg-gray-300'>
            <NavLink className={({ isActive }) =>  (isActive ? "text-red-500 " : "") + "font-semibold"} to="/">
                Home
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-red-500 " : "") + "font-semibold"} to="/about">
                About
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-red-500 " : "") + "font-semibold"} to="/create">
                Create
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-red-500 " : "") + "font-semibold"} to="/favorites">
                Favorites
            </NavLink>
        </div>
    )
}

export default Navbar