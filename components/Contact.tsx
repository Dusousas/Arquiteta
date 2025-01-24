import React from 'react';

export default function Contact() {
    return (
        <>

            <section className='BG1 py-20 z-10'>
                <div className='maxW relative'>
                    <h1 className='uppercase text-3xl font-normal font-Oswald tracking-wider text-center mb-4 text-white'>Vamos discutir seu projeto</h1>
                    <p className='text-center text-white mb-8'>Preencha o formulário e nossa equipe entrará em contato para oferecer uma consulta personalizada.</p>
                   

                    <form className='max-w-[600px] mx-auto flex flex-col gap-4 border-t py-8'>
                        <div className='flex gap-4'>
                            <input className='bg-transparent border-b-2 text-white outline-none w-1/2 p-2' placeholder='Nome' type="text" name="" id="" />
                            <input className='bg-transparent border-b-2 text-white outline-none w-1/2 p-2' placeholder='Telefone' type="text" name="" id="" />
                        </div>
                        <input className='bg-transparent border-b-2 text-white outline-none w-full p-2' placeholder='E-mail' type="text" name="" id="" />
                    </form>
                    <button className="uppercase border py-3 px-5 rounded-full text-[15px] flex mx-auto text-white ">Enviar</button>


                </div>
            </section>
        </>
    );
}