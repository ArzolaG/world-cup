import React from "react";
import "./players.css";
import Progress from "../progress/Progress";

const Players = () => {
    return (
        <div className="flex flex-col items-center py-32 gap-32 overflow-hidden" id="players">
            <h2 className="text-qatar text-5xl">Key Players</h2>
            <div className="grid grid-cols-2 gap-32 max-w-screen-xl">
                <div className="flex flex-row shadow-custom relative cursor-pointer card-left">
                    <div
                        className="flex flex-col justify-between px-4 py-6"
                        style={{ backgroundImage: "url(/src/assets/sidebar-bg.jpg)", backgroundSize: "cover" }}
                    >
                        <div className="flex flex-col gap-5">
                            <img className="border border-white rounded-lg" src="/src/assets/argentina.png" alt="Argentina" />
                            <img src="/src/assets/psg.png" alt="PSG" />
                        </div>
                        <div>
                            <img src="/src/assets/logo-worldcup.png" alt="World Cup Logo" />
                        </div>
                    </div>
                    <div className="w-full" style={{ backgroundImage: "url(/src/assets/qatar-bg.jpg)", backgroundSize: "cover" }}>
                        <img className="pt-8 drop-shadow-2xl w-full h-full player" src="/src/assets/messi.png" alt="Messi" />
                        <div className="relative">
                            <div
                                className="absolute bottom-0 left-0 w-full p-10 text-white uppercase flex flex-col name-banner"
                                style={{ backgroundColor: "rgba(138, 21, 56,60%)" }}
                            >
                                <span className="text-xl">Lionel</span>
                                <span className="text-6xl">Messi</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 h-full stats-card argentina text-white">
                        <div className="flex gap-5 items-center">
                            <p className="text-9xl font-extrabold 2xl:text-8xl">10</p>
                            <div className="flex flex-col uppercase font-bold font-poppins leading-4">
                                <span className="text-2xl leading-6 2xl:text-xl 2xl:leading-4">Lionel</span>
                                <span className="text-7xl leading-12 2xl:text-5xl" style={{ color: "#26627f" }}>
                                    Messi
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-10 text-sky-900 rounded-lg bg-opacity-75 mt-7 shadow-light white-container 2xl:mt-2 2xl:p-5">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="font-poppins flex flex-col gap-2">
                                            <div>
                                                <b>International Debut:</b> February 8th, 2006
                                            </div>
                                            <div>
                                                <b>Birthdate: </b> June 24th, 1987
                                            </div>
                                            <div>
                                                <b>Height: </b> 1.7m
                                            </div>
                                            <div>
                                                <b>Club: </b> PSG
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex max-w-44 gap-5">
                                        <img className="w-full object-contain" src="/src/assets/finalissima.png" alt="Cup" />
                                        <img className="w-full object-contain" src="/src/assets/copa-america.png" alt="Cup" />
                                        <img className="w-full object-contain" src="/src/assets/sub20.png" alt="Cup" />
                                    </div>
                                </div>
                                <div>
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
                                </div>
                            </div>
                            <div className="flex justify-around font-poppins text-center mt-7 2xl:mt-5">
                                <div>
                                    <div className="text-sky-800 font-semibold">Games</div>
                                    <div className="font-semibold text-2xl" style={{ color: "#32b0e3" }}>
                                        180
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sky-800 font-semibold">Goals</div>
                                    <div className=" font-semibold text-2xl" style={{ color: "#32b0e3" }}>
                                        106
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sky-800 font-semibold">Assists</div>
                                    <div className=" font-semibold text-2xl" style={{ color: "#32b0e3" }}>
                                        54
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sky-800 font-semibold">G/A Ratio</div>
                                    <div className=" font-semibold text-2xl" style={{ color: "#32b0e3" }}>
                                        1.14
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row shadow-custom relative cursor-pointer card-right">
                    <div
                        className="flex flex-col justify-between px-4 py-6"
                        style={{ backgroundImage: "url(/src/assets/sidebar-bg.jpg)", backgroundSize: "cover" }}
                    >
                        <div className="flex flex-col gap-5">
                            <img className="border border-white rounded-lg" src="/src/assets/portugal.png" alt="Portugal" />
                            <img src="/src/assets/manchester.png" alt="Manchester" />
                        </div>
                        <div>
                            <img src="/src/assets/logo-worldcup.png" alt="World Cup Logo" />
                        </div>
                    </div>
                    <div className="w-full" style={{ backgroundImage: "url(/src/assets/qatar-bg.jpg)", backgroundSize: "cover" }}>
                        <img
                            className="pt-8 drop-shadow-2xl w-full h-full object-cover player"
                            src="/src/assets/cristiano.png"
                            alt="Cristiano"
                        />
                        <div className="relative">
                            <div
                                className="absolute bottom-0 left-0 w-full p-10 text-white uppercase flex flex-col name-banner"
                                style={{ backgroundColor: "rgba(138, 21, 56,60%)" }}
                            >
                                <span className="text-xl">Cristiano</span>
                                <span className="text-6xl">Ronaldo</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 h-full stats-card portugal text-white">
                        <div className="flex gap-5 items-center">
                            <p className="text-9xl font-extrabold">7</p>
                            <div className="flex flex-col uppercase font-bold font-poppins leading-4">
                                <span className="text-2xl leading-6">Cristiano</span>
                                <span className="text-7xl leading-12" style={{ color: "#8a1538" }}>
                                    Ronaldo
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-10 text-sky-900 rounded-lg bg-opacity-75 mt-7 shadow-light white-container">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="font-poppins flex flex-col gap-2">
                                            <div>
                                                <b>International Debut:</b> February 8th, 2006
                                            </div>
                                            <div>
                                                <b>Birthdate: </b> June 24th, 1987
                                            </div>
                                            <div>
                                                <b>Height: </b> 1.7m
                                            </div>
                                            <div>
                                                <b>Club: </b> PSG
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex max-w-28 gap-5">
                                        <img className="w-full object-contain" src="/src/assets/nations-league.png" alt="Cup" />
                                        <img className="w-full object-contain" src="/src/assets/euro.png" alt="Cup" />
                                    </div>
                                </div>
                                <div>
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
                                                        <linearGradient id="GradientColorPortugal">
                                                            <stop offset="0%" stop-color="#2e9545" />
                                                            <stop offset="100%" stop-color="#52c46c" />
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
                                </div>
                            </div>
                            <div className="flex justify-around font-poppins text-center mt-7">
                                <div>
                                    <div className="text-white font-semibold">Games</div>
                                    <div className="font-semibold text-2xl" style={{ color: "#8a1538" }}>
                                        180
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Goals</div>
                                    <div className=" font-semibold text-2xl" style={{ color: "#8a1538" }}>
                                        106
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Assists</div>
                                    <div className=" font-semibold text-2xl" style={{ color: "#8a1538" }}>
                                        54
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">G/A Ratio</div>
                                    <div className=" font-semibold text-2xl" style={{ color: "#8a1538" }}>
                                        1.14
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row shadow-custom relative cursor-pointer card-left">
                    <div
                        className="flex flex-col justify-between px-4 py-6"
                        style={{ backgroundImage: "url(/src/assets/sidebar-bg.jpg)", backgroundSize: "cover" }}
                    >
                        <div className="flex flex-col gap-5">
                            <img className="border border-white rounded-lg" src="/src/assets/brazil.png" alt="Brazil" />
                            <img src="/src/assets/psg.png" alt="PSG" />
                        </div>
                        <div>
                            <img src="/src/assets/logo-worldcup.png" alt="World Cup Logo" />
                        </div>
                    </div>
                    <div className="w-full" style={{ backgroundImage: "url(/src/assets/qatar-bg.jpg)", backgroundSize: "cover" }}>
                        <img className="pt-8 drop-shadow-2xl w-full h-full object-cover player" src="/src/assets/neymar.png" alt="Neymar" />
                        <div className="relative">
                            <div
                                className="absolute bottom-0 left-0 w-full p-10 text-white uppercase flex flex-col name-banner"
                                style={{ backgroundColor: "rgba(138, 21, 56,60%)" }}
                            >
                                <span className="text-xl">Da Silva</span>
                                <span className="text-6xl">Neymar</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 h-full stats-card brazil text-white">
                        <div className="flex gap-5 items-center">
                            <p className="text-9xl font-extrabold">10</p>
                            <div className="flex flex-col uppercase font-bold font-poppins leading-4">
                                <span className="text-2xl leading-6">Da Silva</span>
                                <span className="text-7xl leading-12" style={{ color: "#092a80" }}>
                                    Neymar
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-10 text-blue-950 rounded-lg bg-opacity-75 mt-7 shadow-light white-container">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="font-poppins flex flex-col gap-2">
                                            <div>
                                                <b>International Debut:</b> February 8th, 2006
                                            </div>
                                            <div>
                                                <b>Birthdate: </b> June 24th, 1987
                                            </div>
                                            <div>
                                                <b>Height: </b> 1.7m
                                            </div>
                                            <div>
                                                <b>Club: </b> PSG
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex max-w-32 gap-1 items-center">
                                        <img className="w-full object-contain max-h-20" src="/src/assets/olympic.png" alt="Cup" />
                                        <img className="w-full object-contain" src="/src/assets/confederaciones.png" alt="Cup" />
                                    </div>
                                </div>
                                <div>
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
                                                        <linearGradient id="GradientColorFrance">
                                                            <stop offset="0%" stop-color="#c62d4c" />
                                                            <stop offset="100%" stop-color="#f93150" />
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
                                </div>
                            </div>
                            <div className="flex justify-around font-poppins text-center mt-7">
                                <div>
                                    <div className="text-white font-semibold">Games</div>
                                    <div className="font-semibold text-2xl" style={{ color: "#092a80" }}>
                                        180
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Goals</div>
                                    <div className=" font-semibold text-2xl" style={{ color: "#092a80" }}>
                                        106
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Assists</div>
                                    <div className=" font-semibold text-2xl" style={{ color: "#092a80" }}>
                                        54
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">G/A Ratio</div>
                                    <div className=" font-semibold text-2xl" style={{ color: "#092a80" }}>
                                        1.14
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row shadow-custom relative cursor-pointer card-right">
                    <div
                        className="flex flex-col justify-between px-4 py-6"
                        style={{ backgroundImage: "url(/src/assets/sidebar-bg.jpg)", backgroundSize: "cover" }}
                    >
                        <div className="flex flex-col gap-5">
                            <img className="border border-white rounded-lg" src="/src/assets/france.png" alt="France" />
                            <img src="/src/assets/psg.png" alt="PSG" />
                        </div>
                        <div>
                            <img src="/src/assets/logo-worldcup.png" alt="World Cup Logo" />
                        </div>
                    </div>
                    <div className="w-full" style={{ backgroundImage: "url(/src/assets/qatar-bg.jpg)", backgroundSize: "cover" }}>
                        <img className="pt-8 drop-shadow-2xl w-full h-full object-cover player" src="/src/assets/mbappe.png" alt="Mbappe" />
                        <div className="relative">
                            <div
                                className="absolute bottom-0 left-0 w-full p-10 text-white uppercase flex flex-col name-banner"
                                style={{ backgroundColor: "rgba(138, 21, 56,60%)" }}
                            >
                                <span className="text-xl">Kylian</span>
                                <span className="text-6xl">Mbappé</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 h-full stats-card france text-white">
                        <div className="flex gap-5 items-center">
                            <p className="text-9xl font-extrabold">10</p>
                            <div className="flex flex-col uppercase font-bold font-poppins leading-4">
                                <span className="text-2xl leading-6">Kylian</span>
                                <span className="text-7xl leading-12" style={{ color: "#ff4764" }}>
                                    Mbappé
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-10 text-sky-900 rounded-lg bg-opacity-75 mt-7 shadow-light white-container">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="font-poppins flex flex-col gap-2">
                                            <div>
                                                <b>International Debut:</b> February 8th, 2006
                                            </div>
                                            <div>
                                                <b>Birthdate: </b> June 24th, 1987
                                            </div>
                                            <div>
                                                <b>Height: </b> 1.7m
                                            </div>
                                            <div>
                                                <b>Club: </b> PSG
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex max-w-28 gap-5">
                                        <img className="w-full object-contain" src="/src/assets/worldcup.png" alt="Cup" />
                                        <img className="w-full object-contain" src="/src/assets/nations-league.png" alt="Cup" />
                                    </div>
                                </div>
                                <div>
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
                                                        <linearGradient id="GradientColorBrazil">
                                                            <stop offset="0%" stop-color="#eac211" />
                                                            <stop offset="100%" stop-color="#f2d657" />
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
                                </div>
                            </div>
                            <div className="flex justify-around font-poppins text-center mt-7">
                                <div>
                                    <div className="text-white font-semibold">Games</div>
                                    <div className="font-semibold text-2xl" style={{ color: "#ff4764" }}>
                                        180
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Goals</div>
                                    <div className=" font-semibold text-2xl" style={{ color: "#ff4764" }}>
                                        106
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Assists</div>
                                    <div className=" font-semibold text-2xl" style={{ color: "#ff4764" }}>
                                        54
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">G/A Ratio</div>
                                    <div className=" font-semibold text-2xl" style={{ color: "#ff4764" }}>
                                        1.14
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Players;
