import React from "react";
import { Simbolo } from "./Simbolo";
import { Caracteristicas } from "./Caracteristicas";
import { Marcos } from "./Marcos";
import audio from "../assets/audio/Recording_2.mp3";

export const Main: React.FC = () => {
    return (
        <main>
            <div className="mb-[50px]" id="oqueé"></div>
            <section className="border-b-[1px] border-black">
                <div className="w-[100vw] flex justify-center items-center flex-col">
                    <div className="w-[80vw] h-[250px] flex justify-center items-center">
                        <h1 className="flex justify-center items-center flex-col">
                            <strong className="text-[40px] xl:text-[28px]">
                                Oque é o Autismo?
                            </strong>
                            <span className="xl:text-[13px]">
                                Veja o video abaixo de perguntas sobre o
                                autismo, pela vice-diretora da escola.
                            </span>
                        </h1>
                    </div>
                    <div className="bg-neutral-300 xl:w-[100vw] w-[50vw] justify-center flex items-center rounded-xl">
                        <iframe
                            className="p-4 xl:w-[100vw] xl:h-[300px] h-[400px] w-[50vw]"
                            src="https://www.youtube.com/embed/2a50HuHlD0I"
                        ></iframe>
                    </div>
                    <div className="flex flex-col items-center justify-center h-[200px] mt-3 gap-10 w-[100%]">
                        <div className="text-center justify-center items-center">
                            Escute uma entrevista de uma mãe que tem uma filha
                            autista falando sobre o autismo e respondendo
                            perguntas.
                        </div>
                        <div>
                            <audio
                                className="border-black border-2 rounded-full"
                                controls
                            >
                                <source src={audio} type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>
                </div>
            </section>
            <Simbolo />
            <Caracteristicas />
            <Marcos />
        </main>
    );
};
