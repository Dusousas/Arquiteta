import { motion } from 'framer-motion';
import React from 'react';

export default function About() {

    const lista = [
        { id: 1, texto: "100% de Clientes Satisfeitos", imagem: "verifica.png" },
        { id: 2, texto: "100% de Entrega no Prazo Garantido", imagem: "verifica.png" },
        { id: 3, texto: "100% de Garantia de Satisfação em Cada Projeto", imagem: "verifica.png" },
        { id: 4, texto: "100% de Atendimento Exclusivo e Personalizado", imagem: "verifica.png" },
    ];

    return (
        <>
            <section id='about' className='pb-20 pt-10 AboutBG'>
                <div className='maxW flex flex-col gap-6 lg:flex-row'>
                    <article className="relative lg:w-1/2">
                        <div className="relative w-fit mx-auto">
                            <img src="about.png" alt="Imagem" className="w-full h-auto" />
                            <motion.div
                                className="bg-white px-4 py-8 text-center bottom-[-20px] right-[0px] rounded-xl absolute max-w-[130px] lg:bottom-[-20px] lg:right-[-20px]"
                                animate={{
                                    y: [0, -25, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <h1 className="text-BlueP font-black font-Oswald text-5xl">15+</h1>
                                <h1 className="text-GrayS font-Oswald uppercase font-black text-lg">
                                    Anos de experiência
                                </h1>
                            </motion.div>
                        </div>
                    </article>

                    <article className='w-full font-Oswald lg:w-1/2'>
                        <h1 className='uppercase text-3xl font-normal font-Oswald tracking-wider'>Sobre <span className='text-BlueP font-Oswald tracking-wider'>Seu nome</span></h1>
                        <span className='uppercase text-3xl text-BlueP font-normal font-Oswald tracking-wider'>Arquiteta</span>
                        <p className='my-2 text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi numquam nam repellendus! Dignissimos corporis quisquam exercitationem aperiam cumque modi delectus ea provident ducimus. Omnis earum molestias quia debitis necessitatibus.</p>
                        <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi numquam nam repellendus! Dignissimos corporis quisquam exercitationem aperiam cumque modi delectus ea provident ducimus. Omnis earum molestias quia debitis necessitatibus.</p>

                        <div>
                            <div className="mt-8 flex flex-col items-center gap-y-4 gap-x-8 lg:flex-row ">
                                <article className="max-w-[350px] border-[1px] rounded-lg border-BlueP bg-white py-5 px-5 gap-4  flex justify-center items-center">
                                    <div className="">
                                        <img src="megafone.png" alt="Megafone" />
                                    </div>
                                    <div className="border-r-[1px] h-[80px] border-BlueP"></div>
                                    <div>
                                        <h1 className="uppercase text-GrayP font-Oswald text-lg">Elegância, Sofisticação, Qualidade e Inovação.</h1>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-y-3">
                            {lista.map((item) => (
                                <article key={item.id} className="flex items-center gap-x-2">
                                    <div>
                                        <img src={item.imagem} alt={item.texto} />
                                    </div>
                                    <h1 className="text-GrayP font-Oswald ">{item.texto}</h1>
                                </article>
                            ))}
                        </div>

                        <div className='mt-6'>
                            <button className="uppercase bg-BlueP text-white border py-3 px-5 rounded-full text-[15px]">Saiba mais</button>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
