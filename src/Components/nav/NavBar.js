import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/homepage">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/week">Your Schedule</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/exlist">Exercise List</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#" onClick={
                    () => {
                        localStorage.removeItem("fitness-user")
                    }
                }>Log Out</Link>
            </li>
        </ul>
    )
}