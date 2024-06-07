import React from "react";
import "./features.css";
import LeftLine from "./LeftLine";
import TopRightLine from "./TopRightLine";
import BottomRightLine from "./BottomRightLine";

const Features = () => {
    return (
        <div style={{ backgroundImage: `url(/qatar-bg.jpg)` }} className="w-full" id="features">
            <div className="w-full flex flex-col items-center justify-center overflow-hidden pt-36 pb-20 sm:py-52">
                <div className="ball-container">
                    <h2 className="text-qatar text-5xl text-center relative bottom-20">World Cup Ball</h2>
                    <img className="ball" src="/ball.png" alt="Soccer Ball" />
                    <div className="blurb b-1">
                        <h3 className="text-qatar text-4xl">Speedshell Tech</h3>
                        <p>
                            Enhances swerve and accuracy with textured PU skin, optimizing aerodynamics for precise flight and better
                            control.
                        </p>
                    </div>
                    <div className="blurb b-2">
                        <h3 className="text-qatar text-4xl">Sustainable</h3>
                        <p>
                            Made from recycled polyester and water-based inks, promoting environmental sustainability and reducing the
                            tournament's impact.
                        </p>
                    </div>
                    <div className="blurb b-3">
                        <h3 className="text-qatar text-4xl">CRT-Core</h3>
                        <p>
                            Offers exceptional shape and air retention, ensuring consistent performance and reliability throughout matches.
                        </p>
                    </div>
                    <div className="left-line">
                        <LeftLine />
                    </div>
                    <div className="top-right">
                        <TopRightLine />
                    </div>
                    <div className="bottom-right">
                        <BottomRightLine />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
