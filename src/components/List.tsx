import React from "react";

interface ListProps {
    content: string;
    year: number;
}

export const List: React.FC<ListProps> = ({ content, year }) => {
    return (
        <li className="flex flex-row xl:flex-col xl:items-center xl:justify-center">
            <div className="bg-blue-600 w-[100px] h-[100px] xl:mb-10 rounded-full flex items-center justify-center text-white">
                <strong className='text-[20px]'>{year}</strong>
            </div>
            <div className="w-[90%] xp:ml-10">{content}</div>
        </li>
    );
};
