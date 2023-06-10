import React, { useState } from "react";
import menuIcon from "../assets/svg/menu.svg";

export const Menu: React.FC = () => {
    const [menu, setMenu] = useState<boolean>();

    return (
        <nav className="flex items-center flex-col w-[130px] justify-center ">
            <button
                onClick={() => {
                    setMenu(!menu);
                }}
                className="w-[30px] h-[30px] items-center flex justify-center mr-10"
            >
                <img
                    className={`w-[60px] transition-all duration-300 h-[60px] ${
                        menu ? "rotate-90" : "rotate-0"
                    }`}
                    src={menuIcon}
                    alt="Menu Icon"
                />
            </button>
            <div className={`transition-all duration-500 ${menu ? 'opacity-100' : 'opacity-0'}`}>
                {menu && (
                    <div className="absolute gap-2 rounded-xl top-[60px] border-black border-2 bg-neutral-300 right-[0px] w-[200px]">
                        <nav className="flex items-center justify-center flex-col">
                            <ul>
                                <li className="w-[200px] h-[50px] flex items-center justify-center">
                                    <a href="#oqueé">Oque é o autismo</a>
                                </li>
                                <li className="w-[200px] h-[50px] flex items-center justify-center">
                                    <a href="#fita">Fita da conscientização</a>
                                </li>
                                <li className="w-[200px] h-[50px] flex items-center justify-center">
                                    <a href="#caracteristicas">Caracteristicas</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </nav>
    );
};
