import React from 'react';


export default function Slider1() {
    return (
        <>
            <section className="slider3 flex items-center">
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                <div className="maxW w-full relative z-10">
                    <article className="text-white lg:w-1/2">
                        <p className="uppercase text-center  text-[12px] tracking-widest mb-2 lg:text-left">Projeto 03</p>
                        <h1 className="text-5xl uppercase font-Oswald text-center tracking-wider mb-5 lg:text-left">
                            Ultra-Modern House Design
                        </h1>
                        <h2 className="text-[15px] mb-8 text-center lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deleniti ad, nulla dolor impedit illum sapiente eveniet ipsum porro ratione magni.</h2>
                        <div className='flex justify-center lg:justify-start'>
                            <button className="uppercase border py-3 px-5 rounded-full text-[15px] ">Ver projetos</button>
                        </div>
                    </article>

                </div>
            </section>
        </>
    );
}
