import React from "react";

const Button = ({ content = "", link = "#" }) => {
    return (
        <a className="bg-qatar text-white py-3 px-8 inline-block rounded-lg" href={link}>
            {content}
        </a>
    );
};

export default Button;
