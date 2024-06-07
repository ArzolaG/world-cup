import React from "react";

const Footer = () => {
    return (
        <div className="flex flex-col bg-qatar" id="footer">
            <div className="flex flex-wrap text-white justify-between w-full py-20 gap-16 px-5 max-w-screen-xl mx-auto">
                <div className="max-w-96 flex flex-col gap-6 items-start">
                    <h2 className="text-5xl">Qatar</h2>
                    <p>
                        Qatar, a wealthy Gulf state, is known for its modern architecture, rich culture, and vast natural gas reserves. It
                        gained global prominence by hosting the 2022 FIFA World Cup, highlighting its advanced infrastructure and
                        hospitality to the world.
                    </p>
                    <img src="/src/assets/logo-worldcup.png" alt="Logo" />
                </div>
                <div className="flex flex-wrap gap-16 sm:gap-32">
                    <div>
                        <h4 className="text-2xl uppercase mb-8">Quick Links</h4>
                        <ul className="font-poppins flex flex-col gap-5">
                            <li>
                                <a className="hover:underline" href="#header">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#info">
                                    History
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#players">
                                    Players
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="#features">
                                    Features
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-2xl uppercase mb-8">Contact</h4>
                        <ul className="font-poppins mb-8 flex flex-col gap-5 ">
                            <li>
                                <a className="hover:underline" href="mailto:test@test.com">
                                    contact@qatarworldcup.com
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline" href="tel:999-999-9999">
                                    (999) 999-9999
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: "url(/src/assets/footer-bg.png)", backgroundSize: "cover" }} className="text-white py-3 ">
                <div className="flex flex-col justify-center items-center px-5 sm:flex-row sm:justify-between max-w-screen-xl mx-auto">
                    <span>World Cup</span>
                    <span>Copyright © 2024 – All Right Reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
