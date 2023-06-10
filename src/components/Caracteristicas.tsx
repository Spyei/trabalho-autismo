import React from "react";
import image from "../assets/caracautismo.jpg";

export const Caracteristicas: React.FC = () => {
    return (
        <>
            <div className="mb-10" id="caracteristicas"></div>
            <section className="flex w-[100vw] p-10 items-center justify-items-center border-b-[1px] border-black">
                <div className="flex justify-center items-center w-[100%] xl:flex-col flex-row-reverse">
                    <ul className="list-disc flex flex-col justify-center">
                        <h1 className="text-[30px] flex justify-center">
                            <strong>
                                Características
                            </strong>
                        </h1>
                        <br />
                        <span>
                            O TEA afeta o comportamento do indivíduo, e os
                            primeiros sinais podem ser notados em bebês de
                            poucos meses. No geral, uma criança do espectro
                            autista apresenta os seguintes sintomas:
                        </span>
                        <br />
                        <li>
                            Dificuldade para interagir socialmente, como manter
                            o contato visual, expressão facial, gestos,
                            expressar as próprias emoções e fazer amigos;
                        </li>
                        <li>
                            Dificuldade na comunicação, optando pelo uso
                            repetitivo da linguagem e bloqueios para começar e
                            manter um diálogo;
                        </li>
                        <li>
                            Alterações comportamentais, como manias, apego
                            excessivo a rotinas, ações repetitivas, interesse
                            intenso em coisas específicas, dificuldade de
                            imaginação e sensibilidade sensorial (hiper ou
                            hipo);
                        </li>
                        <li>
                            Comportamentos estereotipados: podem se fixar
                            objetos específicos, desenvolver comportamentos
                            repetitivos ou até mesmo a fala repetitiva, sendo
                            que estas atitudes estereotipadas ocorrem sem um
                            objetivo ou finalidade.
                        </li>
                    </ul>
                    <img
                        className="float-left w-[min(300px,100%)] xl:mr-0 xl:mt-3 mr-10 h-[min(400px,100%)]"
                        src={image}
                        alt="Caracteristicas Autismo"
                    />
                </div>
            </section>
        </>
    );
};
