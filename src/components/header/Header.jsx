import React from "react";
import Navbar from "./Navbar";
import Button from "../Button";
import "./header.css";

const Header = () => {
    return (
        <div id="header" className="header-container p-6 flex flex-col items-center">
            <Navbar />
            <div className="hero max-w-screen-2xl w-full px-5 py-60 flex flex-col gap-10 items-start xl:max-w-screen-xl">
                <h1 className=" text-5xl text-white">
                    FIFA World Cup
                    <br />
                    Qatar 2022
                </h1>
                <Button content={`Click Here`} />
            </div>
        </div>
    );
};

export default Header;
