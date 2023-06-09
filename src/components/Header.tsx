import React from "react";
import autismoIcon from "../assets/autismoicon.png";
import { Menu } from "./DropdownMenu";

export const Header: React.FC = () => {
    return (
        <header className="fixed w-[100vw] h-[60px] backdrop-blur-sm flex items-center border-b-[1px] border-black">
            <div className="flex justify-start xp:w-[100vw] w-[80vw] items-center">
                <img
                    className="ml-4 w-[50px] h-[50px]"
                    src={autismoIcon}
                    alt="Icone Autismo"
                />
                <nav className="flex w-[90vw] flex-row justify-end xl:items-center xl:invisible">
                    <ul className="flex flex-row gap-8">
                        <a className="border-b-2 border-blue-700" href="#oqueé">
                            <li>Oque é o autismo</li>
                        </a>
                        <a className="border-b-2 border-blue-700" href="#fita">
                            <li>Fita da conscientização</li>
                        </a>
                        <a className="border-b-2 border-blue-700" href="#caracteristicas">
                            <li>Características</li>
                        </a>
                    </ul>
                </nav>
            </div>
            <div className="xp:invisible xp:flex w-[100%] xp:justify-end xp:items-end">
                <Menu />
            </div>
        </header>
    );
};
