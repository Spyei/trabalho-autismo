import React from "react";
import autismoIcon from "../assets/autismoicon.png";

export const Header: React.FC = () => {
    return (
        <header className="w-[100vw] h-[80px] bg-neutral-100 flex items-center border-b-[1px] border-black">
            <div className="flex justify-start items-center">
                <img
                    className="ml-4 w-[60px] h-[60px]"
                    src={autismoIcon}
                    alt="Icone Autismo"
                />
                <nav className="flex w-[90vw] flex-row justify-end items-center">
                    <ul className="flex flex-row gap-8">
                        <a className="border-b-2 border-blue-700" href="#oqueé">
                            <li>Oque é o autismo</li>
                        </a>
                        <a className="border-b-2 border-blue-700" href="/">
                            <li>Diagnóstico</li>
                        </a>
                        <a className="border-b-2 border-blue-700" href="/">
                            <li>Características</li>
                        </a>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
