import React, { useState } from "react";

export const Menu: React.FC = () => {
    const [menu, setMenu] = useState<boolean>();

    return (
        <nav className="flex items-center flex-col w-[130px] justify-center ">
            <button
                onClick={() => {
                    setMenu(!menu);
                }}
                onBlur={() => {
                    setMenu(false);
                }}
                className="w-[30px] h-[30px] items-center flex justify-center mr-10"
            >
                <div className="flex flex-col gap-1">
                    <div
                        className={`transition-all duration-300 rounded-full h-[3px] bg-slate-800 ${
                            menu ? "w-0" : "w-[20px]"
                        }`}
                    ></div>
                    <div
                        className={` transition-all duration-300 rounded-full h-[3px] bg-slate-800 ${
                            menu
                                ? "rotate-[140deg] absolute w-[25px] right-6"
                                : "w-[20px]"
                        }`}
                    ></div>
                    <div
                        className={`transition-all duration-300 rounded-full h-[3px] bg-slate-800 ${
                            menu 
                                ? "rotate-[40deg] absolute w-[25px] right-6" 
                                : "w-[20px]"
                        }`}
                    ></div>
                </div>
                {/* <img
                    className={`w-[60px] transition-all duration-300 h-[60px] ${
                        menu ? "rotate-[270deg]" : "rotate-90"
                    }`}
                    src={menuIcon}
                    alt="Menu Icon"
                /> */}
            </button>
            <div
                className={`absolute gap-2 rounded-xl top-[60px] border-black border-2 bg-neutral-300 right-[0px] transition-all duration-300 ${
                    menu
                        ? "w-[200px]"
                        : "w-[0px] text-[0px] border-[0px] no-underline invisible"
                }`}
            >
                <nav className="flex items-center justify-center flex-col">
                    <ul>
                        <li className="w-[200px] h-[50px] flex items-center justify-center">
                            <a
                                href="#oqueé"
                                className="underline p-2 w-[90%] flex items-center justify-center rounded-lg focus:bg-neutral-400 transition-colors duration-300"
                            >
                                Oque é o autismo
                            </a>
                        </li>
                        <li className="w-[200px] h-[50px] flex items-center justify-center">
                            <a
                                href="#fita"
                                className="underline p-2 w-[100%] flex items-center justify-center text-center rounded-lg focus:bg-neutral-400 transition-colors duration-300"
                            >
                                Fita da conscientização
                            </a>
                        </li>
                        <li className="w-[200px] h-[50px] flex items-center justify-center">
                            <a
                                href="#caracteristicas"
                                className="underline p-2 w-[90%] flex items-center justify-center rounded-lg focus:bg-neutral-400 transition-colors duration-300"
                            >
                                Caracteristicas
                            </a>
                        </li>
                        <li className="w-[200px] h-[50px] flex items-center justify-center">
                            <a
                                href="#marcos"
                                className="underline p-2 w-[90%] flex items-center justify-center rounded-lg focus:bg-neutral-400 transition-colors duration-300"
                            >
                                Marcos Históricos
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
};
