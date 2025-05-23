import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink className={({ isActive }) => isActive ? "text-red-500" : ""} to="/">
                Home
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-red-500" : ""} to="/about">
                About
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-red-500" : ""} to="/create">
                Create
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-red-500" : ""} to="/favorites">
                Favorites
            </NavLink>
        </div>
    )
}

export default Navbar