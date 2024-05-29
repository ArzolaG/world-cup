import React from "react";
import "./players.css";
import Progress from "../progress/Progress";

const Players = () => {
    return (
        <div className="flex flex-col items-center py-32 gap-32" id="players">
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
                            <p className="text-9xl font-extrabold">10</p>
                            <div className="flex flex-col uppercase font-bold font-poppins leading-4">
                                <span className="text-2xl leading-6">Lionel</span>
                                <span className="text-7xl leading-12" style={{ color: "#26627f" }}>
                                    Messi
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
                                    <div className="flex max-w-40 gap-5">
                                        <img className="w-full object-cover" src="/src/assets/nations-league.png" alt="Cup" />
                                        <img className="w-full object-cover" src="/src/assets/copa-america.png" alt="Cup" />
                                        <img className="w-full object-cover" src="/src/assets/sub20.png" alt="Cup" />
                                    </div>
                                </div>
                                <div>
                                    <Progress />
                                </div>
                            </div>
                            <div className="flex justify-around font-poppins text-center mt-7">
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
                        <div className="flex">
                            <span className="text-8xl font-extrabold">7</span>
                            <span className="uppercase text-4xl font-bold font-poppins">Cristiano Ronaldo</span>
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
                        <div className="flex">
                            <span className="text-8xl font-extrabold">10</span>
                            <span className="uppercase text-4xl font-bold font-poppins">Neymar</span>
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
                        <div className="flex">
                            <span className="text-8xl font-extrabold">10</span>
                            <span className="uppercase text-4xl font-bold font-poppins">Kylian Mbappé</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Players;
