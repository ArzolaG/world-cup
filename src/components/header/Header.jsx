import React from "react";
import Navbar from "./Navbar";
import Button from "../Button";
import "./header.css";

const Header = () => {
    return (
        <div id="header" className="w-full header-container p-6 flex flex-col items-center relative">
            <Navbar />
            <div className="hero max-w-screen-2xl w-full px-5 pb-12 pt-32 sm:py-60 flex flex-col gap-10 items-start xl:max-w-screen-xl">
                <h1 className="text-4xl sm:text-7xl text-white">
                    FIFA World Cup
                    <br />
                    Qatar 2022
                </h1>
                <Button content={`Learn More`} link="#info" />
            </div>
        </div>
    );
};

export default Header;
