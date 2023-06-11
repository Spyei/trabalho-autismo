import React, { useState } from "react";
import menuIcon from "../assets/svg/arrow.svg";

export const Menu: React.FC = () => {
    const [menu, setMenu] = useState<boolean>();

    return (
        <nav className="flex items-center flex-col w-[130px] justify-center ">
            <button
                onClick={() => {
                    setMenu(!menu);
                }}
                onBlur={() => {
                    setMenu(false)
                }}
                className="w-[30px] h-[30px] items-center flex justify-center mr-10"
            >
                <img
                    className={`w-[60px] transition-all duration-300 h-[60px] ${
                        menu ? "rotate-[270deg]" : "rotate-90"
                    }`}
                    src={menuIcon}
                    alt="Menu Icon"
                />
            </button>
            <div
                className={`absolute gap-2 rounded-xl top-[60px] border-black border-2 bg-neutral-300 right-[0px] transition-all duration-300 ${
                    menu ? "w-[200px]" : "w-[0px] text-[0px] border-[0px]"
                }`}
            >
                <nav className="flex items-center justify-center flex-col">
                    <ul>
                        <li className="w-[200px] h-[50px] flex items-center justify-center">
                            <a
                                href="#oqueé"
                                className="border-b-2 border-blue-700 p-2 w-[90%] flex items-center justify-center rounded-lg focus:bg-neutral-400 transition-colors duration-300"
                            >
                                Oque é o autismo
                            </a>
                        </li>
                        <li className="w-[200px] h-[50px] flex items-center justify-center">
                            <a
                                href="#fita"
                                className="border-b-2 border-blue-700 p-2 w-[90%] flex items-center justify-center text-center rounded-lg focus:bg-neutral-400 transition-colors duration-300"
                            >
                                Fita da conscientização
                            </a>
                        </li>
                        <li className="w-[200px] h-[50px] flex items-center justify-center">
                            <a
                                href="#caracteristicas"
                                className="border-b-2 border-blue-700 p-2 w-[90%] flex items-center justify-center rounded-lg focus:bg-neutral-400 transition-colors duration-300"
                            >
                                Caracteristicas
                            </a>
                        </li>
                        <li className="w-[200px] h-[50px] flex items-center justify-center">
                            <a
                                href="#marcos"
                                className="border-b-2 border-blue-700 p-2 w-[90%] flex items-center justify-center rounded-lg focus:bg-neutral-400 transition-colors duration-300"
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
