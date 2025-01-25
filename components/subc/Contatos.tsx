import React from 'react';
import { AiFillTikTok } from 'react-icons/ai';
import { CiInstagram } from 'react-icons/ci';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

export default function Contatos() {
    return (
        <>
            <section className='border-b border-gray-200'>
                <div className='maxW flex flex-col items-center  justify-between lg:flex-row'>

                    <article className='border-l border-gray-200 w-full text-center py-20 h-[200px] lg:w-1/3 lg:text-left'>
                        <h1 className='px-6 text-[12px] uppercase tracking-widest'>Entre em contato</h1>
                        <div className='border-b border-gray-200 pt-3 max-w-[90%] mx-auto' />
                    </article>

                    <article className='border-x border-gray-200 w-full text-center py-20 h-[200px] flex flex-col justify-center lg:w-1/3 lg:text-left'>
                        <h1 className='px-2 uppercase font-Oswald text-[24px] mb-3'>Escritório Brotas</h1>
                        <h2 className='px-2 uppercase text-[15px]'>Avenida Rui Barbosa, 1010</h2>
                        <h2 className='px-2 uppercase text-[15px] mb-3'>Brotas - São Paulo</h2>
                        <h3 className='px-2 uppercase text-[20px] font-Oswald'>(14) 3656-1234</h3>
                    </article>

                    <article className='border-r border-gray-200 w-full text-center py-20 h-[200px] justify-center lg:w-1/3 lg:text-left'>
                        <h1 className='px-2 uppercase font-Oswald text-[24px] mb-3'>Redes Sociais</h1>
                        <div className='flex items-center gap-2 px-2 justify-center lg:justify-start'>
                            <a className='text-[20px]' href=""><FaInstagramSquare /></a>
                            <a className='text-[20px]' href=""><FaFacebookSquare /></a>
                            <a className='text-[23px]' href=""><AiFillTikTok /></a>
                        </div>
                    </article>


                </div>
            </section>
        </>
    );
}