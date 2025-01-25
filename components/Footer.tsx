import React from 'react';

export default function Footer() {
    return (
        <>
            <section className='border-b border-gray-200'>
                <div className='maxW flex flex-col items-center justify-between lg:flex-row'>

                    <article className='border-l border-gray-200 w-full h-[10px] py-6 lg:w-1/3'>

                    </article>

                    <article className='border-x border-gray-200 h-[10px] w-full flex items-center justify-center py-6 lg:w-1/3'>
                        <p className='px-6 text-[12px] uppercase tracking-widest'>Lívia Urbano Arquiteta - Todos os direitos reservados</p>
                    </article>

                    <article className='border-r border-gray-200 h-[10px] w-full justify-center py-6 lg:w-1/3'>

                    </article>


                </div>
            </section>


        </>
    );
}