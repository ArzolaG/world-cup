import React from "react";
import "./progress.css";

const Progress = () => {
    return (
        <div className="w-full flex justify-between mt-12">
            <div>
                <h5 className="text-center mb-4 font-poppins font-semibold">Pass Accuracy</h5>
                <div className="circle">
                    <div className="outer">
                        <div className="inner">
                            <div className="number">82.75%</div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="150px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#63bfe4" />
                                <stop offset="100%" stop-color="#b7d6e5" />
                            </linearGradient>
                        </defs>
                        <circle className="circle-1" cx="75" cy="75" r="67" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
            <div>
                <h5 className="text-center mb-4 font-poppins font-semibold">Dribbles</h5>
                <div className="circle">
                    <div className="outer">
                        <div className="inner">
                            <div className="number">94.75%</div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="150px">
                        <circle className="circle-2" cx="75" cy="75" r="67" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
            <div>
                <h5 className="text-center mb-4 font-poppins font-semibold">Conversion</h5>
                <div className="circle">
                    <div className="outer">
                        <div className="inner">
                            <div className="number">32.75%</div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="150px">
                        <circle className="circle-3" cx="75" cy="75" r="67" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Progress;
