import React from "react";
import audio from '../assets/audio/Recording_2.mp3';

export const Audio: React.FC = () => {
    return (
        <>
            <div className="mb-10" id="caracteristicas"></div>
            <section className="flex w-[100vw] p-10 items-center justify-items-center border-b-[1px] border-black">
                <audio className='border-black border-2 rounded-full' controls>
                    <source src={audio} type="audio/mpeg" />
                </audio>
            </section>
        </>
    );
};