import React from "react";
import fita from "../assets/fita.png";

export const Simbolo: React.FC = () => {
    return (
        <div className="p-10 h-[420px] border-b-[1px] flex flex-row-reverse xl:flex-col-reverse xl:h-[1000px] border-black">
            <figure className="bg-blue-500 flex items-center flex-col float-right w-[300px] rounded-xl">
                <img className="h-[100%] p-3" src={fita} alt="Fita Autista" />
                <div className="p-2 text-white">Fita da conscientização</div>
            </figure>
            <div className="flex w-[67%] xl:w-[100%] items-center justify-center xl:h-[100%] h-[290px]">
                <div className="flex items-center justify-center h-[100%] xl:h-[300px] flex-col">
                    <h1 className=''>
                        <strong className="text-[40px] xl:text-[30px]" id="fita">
                            Oque é essa fita?
                        </strong>
                    </h1>
                    <br />
                    <div>
                        A fita da conscientização do autismo é um símbolo usado
                        para aumentar a conscientização e o entendimento sobre o
                        transtorno do espectro autista (TEA). A fita é
                        geralmente representada por um quebra-cabeça colorido,
                        com peças em diferentes tons de azul, que simbolizam a
                        complexidade do autismo.
                    </div>
                    <br />
                    <div>
                        A fita foi adotada como um símbolo internacional do
                        autismo para ajudar a promover a conscientização e a
                        compreensão sobre o TEA. É usada em campanhas de
                        conscientização, eventos e atividades relacionadas ao
                        autismo, tanto por organizações quanto por indivíduos em
                        todo o mundo.
                    </div>
                </div>
            </div>
        </div>
    );
};
