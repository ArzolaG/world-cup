import React, { useState } from "react";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleClick = () => {
        console.log("toggle");
        setToggleMenu(!toggleMenu);
        console.log(toggleMenu);
    };

    return (
        <>
            <div className="flex justify-between py-4 px-8 bg-qatar text-white rounded-full shadow-xl fixed z-20 navigation ">
                <div>
                    <a href="#header">Qatar</a>
                </div>
                <div className="hamburger sm:hidden" onClick={handleClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className="absolute hidden sm:relative sm:flex">
                    <ul className=" gap-10 flex-col flex sm:flex-row">
                        <li>
                            <a href="#header">Home</a>
                        </li>
                        <li>
                            <a href="#info">History</a>
                        </li>
                        <li>
                            <a href="#features">Features</a>
                        </li>
                        <li>
                            <a href="#players">Players</a>
                        </li>

                        <li>
                            <a href="#footer">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <nav className={`mobile-menu absolute text-white ${toggleMenu ? "active" : "inactive"}`}>
                <div className="hamburger-closed hamburger" onClick={handleClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className=" gap-10 flex-col flex sm:flex-row">
                    <li>
                        <a
                            href="#header"
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#info"
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        >
                            History
                        </a>
                    </li>
                    <li>
                        <a
                            href="#features"
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a
                            href="#players"
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        >
                            Players
                        </a>
                    </li>

                    <li>
                        <a
                            href="#footer"
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
