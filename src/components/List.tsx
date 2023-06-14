import React from "react";

interface ListProps {
    content: string;
    year: number;
}

export const List: React.FC<ListProps> = ({ content, year }) => {
    return (
        <li className="flex flex-row xl:flex-col xl:items-center xl:justify-center">
            <div className="bg-blue-600 w-[100px] h-[100px] xl:mb-10 shadow-black shadow-md rounded-full flex items-center justify-center text-white">
                <strong className="text-[20px]">{year}</strong>
            </div>
            <div className="w-[90%] xp:ml-10 border-blue-600 rounded-lg shadow-lg shadow-black border-2 p-4">
                <div>{content}</div>
            </div>
        </li>
    );
};
