import React from 'react';

export default function Projects() {
    return (
        <>
            <section className='ProjectsBG py-20'>
                <div className='maxW'>
                    <h1 className='uppercase text-3xl font-normal font-Oswald tracking-wider text-center mb-4'>Nossos <span className='text-BlueP font-Oswald tracking-wider'>Projetos</span></h1>
                    <p className='text-center mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore saepe cumque explicabo ad autem atque voluptates optio deleniti neque tenetur a sit. Neque, tempore? Sapiente, minus harum. Quibusdam suscipit, accusamus sint similique dicta hic modi quasi nam nisi maiores.</p>


                    <article className='flex flex-col items-center gap-20 w-full lg:flex-row'>

                        <div className='w-1/2 flex flex-col gap-6 items-end'>
                            <div className='relative'>
                                <img className='w-[450px] h-[560px] object-cover' src="/slider/1.jpg" alt="" />
                                <h1 className='absolute top-[150px] left-[-140px] uppercase font-Oswald text-lg'>Sala moderna_________________</h1>
                            </div>

                            <img className='w-[450px] h-[355px] object-cover' src="/slider/1.jpg" alt="" />
                            <img className='w-[450px] h-[355px] object-cover' src="/slider/1.jpg" alt="" />
                        </div>

                        <div className='w-1/2 flex flex-col gap-6 items-start'>
                            <img className='w-[450px] h-[355px] object-cover' src="/slider/2.jpg" alt="" />
                            <img className='w-[450px] h-[355px] object-cover' src="/slider/2.jpg" alt="" />
                            <img className='w-[450px] h-[560px] object-cover' src="/slider/2.jpg" alt="" />
                        </div>
                    </article>

                    <div className='mt-10 flex '>
                        <button className="uppercase bg-BlueP text-white border py-3 px-5 rounded-full text-[15px] mx-auto">Ver mais projetos</button>
                    </div>


                </div>
            </section>
        </>
    );
}