import React from "react";
import { List } from "./List";

export const Marcos: React.FC = () => {
    return (
        <>
            <div className='mb-10' id="marcos"></div>
            <section
                id="marcos"
                className="flex gap-10 items-center justify-center w-[100vw] p-10 border-b-[1px] border-black"
            >
                <ul className="flex gap-10 flex-col">
                    <h1 className="text-[30px] flex items-center justify-center">
                        <strong>Marcos Históricos</strong>
                    </h1>
                    <List
                        content="O psiquiatra Leo Kanner publica a obra “Distúrbios Autísticos do Contato Afetivo”, descrevendo 11 casos de crianças com “um isolamento extremo desde o início da vida e um desejo obsessivo pela preservação da mesmices”. Ele usa o termo “autismo infantil precoce”, pois os sintomas já eram evidentes na primeira infância, e observa que essas crianças apresentavam maneirismos motores e aspectos não usuais na comunicação, como a inversão de pronomes e a tendência ao eco."
                        year={1943}
                    />
                    <List
                        content="Hans Asperger escreve o artigo “A psicopatia autista na infância”, destacando a ocorrência preferencial em meninos, que apresentam falta de empatia, baixa capacidade de fazer amizades, conversação unilateral, foco intenso e movimentos descoordenados. As crianças são chamadas de pequenos professores, devido à habilidade de discorrer sobre um tema detalhadamente. Como seu trabalho foi publicado em alemão na época da guerra, o relato recebeu pouca atenção e, só em 1980, foi reconhecido como um pioneiro no segmento."
                        year={1944}
                    />
                    <List
                        content="A Associação Americana de Psiquiatria publica a primeira edição do Manual Diagnóstico e Estatístico de Doenças Mentais DSM-1. Referência mundial para pesquisadores e clínicos do segmento, este manual fornece as nomenclaturas e os critérios padrão para o diagnóstico dos transtornos mentais estabelecidos. Nesta primeira edição, os diversos sintomas de autismo eram classificados como um subgrupo da esquizofrenia infantil, não sendo entendido como uma condição específica e separada."
                        year={1952}
                    />
                    <List
                        content="Diagnosticada com Síndrome de Asperger, Temple Grandin cria a “Máquina do Abraço”, aparelho que simulava um abraço e acalmava pessoas com autismo. Ela revolucionou as práticas de abate para animais e suas técnicas e projetos de instalação são referências internacionais. Além de prestar consultoria para a indústria pecuária em manejo, instalações e cuidado de animais, Temple Grandin ministra palestras pelo mundo todo, explicando a importância de ajudar crianças com autismo a desenvolver suas potencialidades."
                        year={1965}
                    />
                    <List
                        content="A definição inovadora de Michael Rutter e a crescente produção de pesquisas científicas sobre o autismo influenciam a elaboração do DSM-3. Nesta edição do manual, o autismo é reconhecido pela primeira vez como uma condição específica e colocado em uma nova classe, a dos Transtornos Invasivos do Desenvolvimento (TID). Este termo reflete o fato de que múltiplas áreas de funcionamento do cérebro são afetadas pelo autismo e pelas condições a ele relacionadas."
                        year={1980}
                    />
                    <List
                        content="A psiquiatra Lorna Wing desenvolve o conceito de autismo como um espectro e cunha o termo Síndrome de Asperger, em referência à Hans Asperger. Seu trabalho revolucionou a forma como o autismo era considerado, e sua influência foi sentida em todo o mundo. Como pesquisadora e clínica, bem como mãe de uma criança autista, ela defendeu uma melhor compreensão e serviços para indivíduos com TEA e suas famílias. Fundou a National Autistic Society, juntamente com Judith Gold, e o Centro Lorna Wing."
                        year={1981}
                    />
                    <List
                        content="Sucesso de bilheteria, Rain Man torna-se um dos primeiros filmes comerciais a caracterizar um personagem com autismo. Embora o filme tenha sido fundamental para aumentar a conscientização e sensibilizar a opinião pública sobre o transtorno, ele também contribuiu para a interpretação incorreta de que todas as pessoas com TEA também possuem habilidades “savant” (disfunção cerebral rara em que a pessoa apresenta aptidões altamentes desenvolvidas em certas áreas)."
                        year={1988}
                    />
                    <List
                        content="Novos critérios para o autismo foram avaliados em um estudo internacional multicêntrico, com mais de mil casos analisados por mais de 100 avaliadores clínicos. Os sistemas do DSM-4 e da CID-10 (Classificação Estatística Internacional de Doenças) tornaram-se equivalentes para evitar confusão entre pesquisadores e clínicos. A Síndrome de Asperger é adicionada ao DSM, ampliando o espectro do autismo, que passa a incluir casos mais leves, em que os indivíduos tendem a ser mais funcionais."
                        year={1994}
                    />
                    <List
                        content="A revista Lancet publicou um artigo do cientista Andrew Wakefield, no qual afirmava que algumas vacinas poderiam causar autismo. Este estudo foi totalmente desacreditado por outros cientistas e descartado. Em maio de 2014, o cientista perdeu seu registro médico. A revista Lancet também se retratou e retirou o estudo de seus arquivos pela falta de comprovação dos resultados. Mais de 20 estudos seguintes mostraram que a associação da vacina ao autismo não tem fundamento. Saiba mais no blog."
                        year={1998}
                    />
                    <List
                        content="A ONU instituiu o dia 2 de abril como o Dia Mundial da Conscientização do Autismo para chamar atenção da população em geral para importância de conhecer e tratar o transtorno, que afeta cerca de 70 milhões de pessoas no mundo todo, segundo a Organização Mundial de Saúde. Em 2018, o 2 de abril passa a fazer parte do calendário brasileiro oficial como Dia Nacional de Conscientização sobre o Autismo."
                        year={2007}
                    />
                    <List
                        content="É sancionada, no Brasil, a Lei Berenice Piana (12.764/12), que instituiu a Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista. Este foi um marco legal relevante para garantir direitos aos portadores de TEA. A legislação determina o acesso a um diagnóstico precoce, tratamento, terapias e medicamento pelo Sistema Único de Saúde; à educação e à proteção social; ao trabalho e a serviços que propiciem a igualdade de oportunidades."
                        year={2012}
                    />
                    <List
                        content="O maior estudo já realizado sobre as causas do autismo revelou que os fatores ambientais são tão importantes quanto a genética para o desenvolvimento do transtorno. Isto contrariou estimativas anteriores, que atribuíam à genética de 80% a 90% do risco do desenvolvimento de TEA. Foram acompanhadas mais de 2 milhões de pessoas na Suécia entre 1982 e 2006, com avaliação de fatores como complicações no parto, infecções sofridas pela mãe e o uso de drogas antes e durante a gravidez."
                        year={2014}
                    />
                    <List
                        content="A Lei Brasileira de Inclusão da Pessoa com Deficiência (13.145/15) cria o Estatuto da Pessoa com Deficiência, que aumenta a proteção aos portadores de TEA ao definir a pessoa com deficiência como “aquela que tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial”. O Estatuto é um símbolo importante na defesa da igualdade de direitos dos deficientes, do combate à discriminação e da regulamentação da acessibilidade e do atendimento prioritário."
                        year={2015}
                    />
                    <List
                        content="Entra em vigor a Lei 13.977, conhecida como Lei Romeo Mion. O texto cria a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista (Ciptea), emitida de forma gratuita, sob responsabilidade de estados e municípios. O documento é um substituto para o atestado médico e tem o papel de facilitar o acesso a direitos previstos na Lei Berenice Piana."
                        year={2020}
                    />
                    <List
                        content="A nova versão da Classificação Estatística Internacional de Doenças e Problemas Relacionados à Saúde, a CID 11, segue o que foi proposto no DSM-V, e passa a adotar a nomenclatura Transtorno do Espectro do Autismo para englobar todos os diagnósticos anteriormente classificados como Transtorno Global do Desenvolvimento."
                        year={2022}
                    />
                </ul>
            </section>
        </>
    );
};
