import React from 'react';
import { GoVerified } from 'react-icons/go';
import Team from './subc/Team';

export default function Services() {
    return (
        <>
            <section id='services' className='py-20'>
                <div className='maxW'>
                    <h1 className='uppercase text-3xl font-normal font-Oswald tracking-wider text-center mb-4'>Nossos <span className='text-BlueP font-Oswald tracking-wider'>Serviços</span></h1>
                    <p className='text-center mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore saepe cumque explicabo ad autem atque voluptates optio deleniti neque tenetur a sit. Neque, tempore? Sapiente, minus harum. Quibusdam suscipit, accusamus sint similique dicta hic modi quasi nam nisi maiores.</p>

                    <article className='flex flex-wrap gap-y-8 text-center lg:text-left'>
                        <div className='border-x w-full border-BlueP lg:w-1/3 px-5 '>
                            <h1 className='text-5xl font-Oswald font-semibold text-BlueP'>01</h1>
                            <h1 className='text-2xl uppercase mb-4 font-Oswald tracking-widest text-BlueP'>Projetos</h1>
                            <h2 className='flex items-center justify-center lg:justify-start gap-1'><GoVerified />Maquetes Eletrônicas</h2>
                            <h2 className='flex items-center justify-center lg:justify-start gap-1'><GoVerified />Arquitetônicos</h2>
                            <h2 className='flex items-center justify-center lg:justify-start gap-1'><GoVerified />Reformas e ampliações</h2>
                            <h2 className='flex items-center justify-center lg:justify-start gap-1'><GoVerified />Consultoria</h2>
                        </div>

                        <div className='w-full lg:w-1/3 px-5'>
                            <h1 className='text-5xl font-Oswald font-semibold text-BlueP'>02</h1>
                            <h1 className='text-2xl uppercase mb-4 font-Oswald tracking-widest text-BlueP'>Projetos Interiores</h1>
                            <h2 className='flex items-center justify-center lg:justify-start gap-1'><GoVerified />Layout</h2>
                            <h2 className='flex items-center justify-center lg:justify-start gap-1'><GoVerified />Decoração</h2>
                            <h2 className='flex items-center justify-center lg:justify-start gap-1'><GoVerified />Visita a lojas</h2>
                            <h2 className='flex items-center justify-center lg:justify-start gap-1'><GoVerified />Consultoria</h2>
                        </div>

                        <div className='border-x w-full border-BlueP lg:w-1/3 px-5'>
                            <h1 className='text-5xl font-Oswald font-semibold text-BlueP'>03</h1>
                            <h1 className='text-2xl uppercase mb-4 font-Oswald tracking-widest text-BlueP'>Obras</h1>
                            <p className='flex items-center gap-1'>Acompanhamento: visitas pré agendadas para marcações e duvidas sobre o projeto.</p>
                        </div>
                    </article>

                    <Team />
                </div>
            </section>
        </>
    );
}