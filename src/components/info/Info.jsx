import React from "react";
import Button from "../Button";

const Info = () => {
    return (
        <div
            className="flex flex-wrap flex-grow-1 max-w-screen-2xl px-6 mx-auto my-8 sm:my-24 gap-20 items-center xl:max-w-screen-xl"
            id="info"
        >
            <div className="w-full flex-1 basis-1/4">
                <img className="w-full max-w-2xl min-w-80 shadow-2xl rounded-lg" src="/src/assets/stadium.jpg" alt="Stadium" />
            </div>
            <div className="w-full flex-1 flex flex-col gap-10 items-start flex-nowrap basis-2/4">
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
