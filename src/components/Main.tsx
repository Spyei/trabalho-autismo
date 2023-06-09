import React from "react";
import video from "../assets/video.mp4";

export const Main: React.FC = () => {
    return (
        <main>
            <div className="border-b-[1px] border-black h-[100vh]">
                <div className="w-[100vw] flex justify-center items-center flex-col">
                    <div className="w-[80vw] h-[250px] flex justify-center items-center">
                        <h1 className="flex justify-center items-center flex-col">
                            <strong className="text-[40px]" id="oqueé">
                                Oque é o Autismo?
                            </strong>
                            <span>
                                Veja o video abaixo de perguntas sobre o
                                autismo, pela vice-diretora da escola.
                            </span>
                        </h1>
                    </div>
                    <div className="bg-neutral-300 w-[50vw] justify-center flex items-center rounded-xl">
                        <video className="p-4" controls>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </main>
    );
};
