import React from "react";
import "./players.css";
import playersData from "../../data/players.json";

const countryColors = {
    argentina: {
        background: "bg-blue-500",
        text: "text-sky-900",
        name_color: "#26627f",
        stat_title: "text-sky-800",
        stat_number: "#32b0e3",
        gradientStart: "#63bfe4",
        gradientEnd: "#b7d6e5",
    },
    portugal: {
        background: "bg-blue-500",
        text: "text-sky-900",
        name_color: "#8a1538",
        stat_title: "text-white",
        stat_number: "#8a1538",
        gradientStart: "#2e9545",
        gradientEnd: "#52c46c",
    },
    brazil: {
        background: "bg-blue-500",
        text: "text-blue-950",
        name_color: "#092a80",
        stat_title: "text-white",
        stat_number: "#092a80",
        gradientStart: "#eac211",
        gradientEnd: "#f2d657",
    },
    france: {
        background: "bg-blue-500",
        text: "text-sky-900",
        name_color: "#ff4764",
        stat_title: "text-white",
        stat_number: "#ff4764",
        gradientStart: "#c62d4c",
        gradientEnd: "#f93150",
    },
};

const Players = () => {
    return (
        <div className="flex flex-col items-center py-32 px-5 gap-32 overflow-hidden" id="players">
            <h2 className="text-qatar text-5xl">Key Players</h2>
            <div className="grid  xl:grid-cols-2 gap-32 max-w-screen-xl">
                {playersData.map((player, index) => (
                    <div
                        key={index}
                        className={`flex flex-row shadow-custom relative cursor-pointer card-${index % 2 === 0 ? "left" : "right"}`}
                    >
                        <div
                            className="flex flex-col justify-between px-4 py-6"
                            style={{ backgroundImage: "url(/src/assets/sidebar-bg.jpg)", backgroundSize: "cover" }}
                        >
                            <div className="flex flex-col gap-5">
                                <img
                                    className="border border-white rounded-lg"
                                    src={`/src/assets/${player.country}.png`}
                                    alt={player.country}
                                />
                                <img src={`/src/assets/${player.club}.png`} alt={player.club} />
                            </div>
                            <div>
                                <img src="/src/assets/logo-worldcup.png" alt="World Cup Logo" />
                            </div>
                        </div>
                        <div className="w-full" style={{ backgroundImage: "url(/src/assets/qatar-bg.jpg)", backgroundSize: "cover" }}>
                            <img
                                className="pt-8 drop-shadow-2xl w-full h-full object-contain player"
                                src={`/src/assets/${player.image}`}
                                alt={player.name}
                            />
                            <div className="relative">
                                <div
                                    className="absolute bottom-0 left-0 w-full p-10 text-white uppercase flex flex-col name-banner"
                                    style={{ backgroundColor: "rgba(138, 21, 56,60%)" }}
                                >
                                    <span className="text-xl">{player.name.split(" ")[0]}</span>
                                    <span className="text-6xl">{player.name.split(" ")[1]}</span>
                                </div>
                            </div>
                        </div>
                        <div className={`absolute top-0 left-0 h-full stats-card ${player.country} text-white`}>
                            <div className="flex gap-5 items-center">
                                <p className="text-6xl sm:text-8xl font-extrabold 2xl:text-9xl">{player.number}</p>
                                <div className="flex flex-col uppercase font-bold font-poppins leading-4">
                                    <span className="text-base sm:text-xl leading-4 2xl:text-2xl 2xl:leading-6">
                                        {player.name.split(" ")[0]}
                                    </span>
                                    <span
                                        className="text-4xl sm:text-5xl leading-12 xl:text-6xl 2xl:text-7xl"
                                        style={{ color: `${countryColors[player.country].name_color}` }}
                                    >
                                        {player.name.split(" ")[1]}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div
                                    className={`${
                                        countryColors[player.country].text
                                    } p-10 rounded-lg bg-opacity-75 mt-7 shadow-light white-container 2xl:mt-2 2xl:p-5`}
                                >
                                    <div className="flex justify-between flex-col gap-8 sm:flex-row">
                                        <div>
                                            <div className="font-poppins flex flex-col gap-2">
                                                <div>
                                                    <b>International Debut:</b> {player.international_debut}
                                                </div>
                                                <div>
                                                    <b>Birthdate: </b> {player.birthdate}
                                                </div>
                                                <div>
                                                    <b>Height: </b> {player.height}m
                                                </div>
                                                <div>
                                                    <b>Club: </b> {player.club}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex max-w-44 gap-5">
                                            {player.trophies.map((trophy, index) => (
                                                <img
                                                    key={index}
                                                    className="sm:w-11 sm:h-28 w-8 h-20 object-contain"
                                                    src={`/src/assets/${trophy}.png`}
                                                    alt="Cup"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="progress-container">
                                        <div className="w-full flex justify-between mt-12">
                                            <div>
                                                <h5 className="text-center mb-4 font-poppins font-semibold">Pass Accuracy</h5>
                                                <div className="circle">
                                                    <div className="outer">
                                                        <div className="inner">
                                                            <div className="number">{player.stats.pass}%</div>
                                                        </div>
                                                    </div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="150px">
                                                        <defs>
                                                            <linearGradient id={`GradientColor_${player.country}`}>
                                                                <stop
                                                                    offset="0%"
                                                                    stopColor={`${countryColors[player.country].gradientStart}`}
                                                                />
                                                                <stop
                                                                    offset="100%"
                                                                    stopColor={`${countryColors[player.country].gradientEnd}`}
                                                                />
                                                            </linearGradient>
                                                        </defs>
                                                        <circle className="circle-1" cx="75" cy="75" r="67" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="text-center mb-4 font-poppins font-semibold">Dribbles</h5>
                                                <div className="circle">
                                                    <div className="outer">
                                                        <div className="inner">
                                                            <div className="number">{player.stats.dribble}%</div>
                                                        </div>
                                                    </div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="150px">
                                                        <circle className="circle-2" cx="75" cy="75" r="67" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="text-center mb-4 font-poppins font-semibold">Conversion</h5>
                                                <div className="circle">
                                                    <div className="outer">
                                                        <div className="inner">
                                                            <div className="number">{player.stats.conversion}%</div>
                                                        </div>
                                                    </div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="150px">
                                                        <circle className="circle-3" cx="75" cy="75" r="67" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-around font-poppins text-center mt-7 2xl:mt-5">
                                    <div>
                                        <div className={`${countryColors[player.country].stat_title} font-semibold`}>Games</div>
                                        <div
                                            className="font-semibold text-2xl"
                                            style={{ color: `${countryColors[player.country].stat_number}` }}
                                        >
                                            {player.stats.games}
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${countryColors[player.country].stat_title} font-semibold`}>Goals</div>
                                        <div
                                            className=" font-semibold text-2xl"
                                            style={{ color: `${countryColors[player.country].stat_number}` }}
                                        >
                                            {player.stats.goals}
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${countryColors[player.country].stat_title} font-semibold`}>Assists</div>
                                        <div
                                            className=" font-semibold text-2xl"
                                            style={{ color: `${countryColors[player.country].stat_number}` }}
                                        >
                                            {player.stats.assists}
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${countryColors[player.country].stat_title} font-semibold`}>G/A Ratio</div>
                                        <div
                                            className=" font-semibold text-2xl"
                                            style={{ color: `${countryColors[player.country].stat_number}` }}
                                        >
                                            {player.stats.ratio}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Players;
