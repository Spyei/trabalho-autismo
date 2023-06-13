import React from "react";
import githubIcon from "../assets/svg/github.svg";
import instagramIcon from "../assets/svg/instagram.svg";

export const Footer: React.FC = () => {
    return (
        <footer className="w-[100vw] h-[100px]">
            <div className="flex flex-col w-[100%] h-[100%]">
                <div className="flex w-[100%] h-[100%] items-center justify-center">
                    <button
                        onClick={() => {
                            location.href =
                                "https://github.com/Spyei/trabalho-autismo";
                        }}
                        className="flex flex-row xl:m-0 xl:mx-4 mr-10 gap-3 bg-neutral-100 hover:bg-neutral-300 duration-300 transition-colors items-center justify-center w-[200px] h-[50px] rounded-md border-black border-2"
                    >
                        <div>Source Code</div>
                        <img src={githubIcon} alt="Github Icon" />
                    </button>
                    <button
                        onClick={() => {
                            location.href =
                                "https://www.instagram.com/escola.dinora/";
                        }}
                        className="flex flex-row xl:m-0 xl:mx-4 mr-10 gap-3 bg-neutral-100 hover:bg-neutral-300 duration-300 transition-colors items-center justify-center w-[200px] h-[50px] rounded-md border-[#E1306C] border-2"
                    >
                        <div>Instagram</div>
                        <img src={instagramIcon} alt="Github Icon" />
                    </button>
                </div>
                <div className="text-center">Desenvolvido pela turma do 1°A</div>
            </div>
        </footer>
    );
};
