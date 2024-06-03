import React from "react";

const Navbar = () => {
    return (
        <div className="flex justify-between py-4 px-8 bg-qatar text-white rounded-full w-full max-w-screen-2xl shadow-xl fixed z-20 xl:max-w-screen-xl">
            <div>Qatar</div>
            <nav>
                <ul className="flex gap-10">
                    <li>
                        <a href="#header">Home</a>
                    </li>
                    <li>
                        <a href="#info">History</a>
                    </li>
                    <li>
                        <a href="#players">Players</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#footer">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
