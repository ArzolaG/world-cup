import React from "react";
import Button from "../Button";

const Info = () => {
    return (
        <div className="flex max-w-screen-2xl mx-auto my-24 gap-20 items-center" id="info">
            <div className="w-full">
                <img className="w-full shadow-2xl rounded-lg" src="/src/assets/stadium.jpg" alt="Stadium" />
            </div>
            <div className="w-full flex flex-col gap-10 items-start">
                <h2 className="text-5xl text-qatar">Qatar</h2>
                <p>
                    The FIFA World Cup, inaugurated in 1930, is the pinnacle of international football. Held every four years, it brings
                    together the world's best teams. Uruguay won the first tournament, with Brazil holding the record for the most titles at
                    five. Iconic moments include Maradona's "Hand of God" in 1986 and Germany's 7-1 victory over Brazil in 2014,
                    highlighting its rich, dramatic history.
                </p>
                <Button content="Learn More" />
            </div>
        </div>
    );
};

export default Info;
