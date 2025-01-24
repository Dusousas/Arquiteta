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
                            <img className='w-[450px] h-[560px] object-cover' src="/slider/1.jpg" alt="" />
                            <img className='w-[450px] h-[355px] object-cover' src="/slider/1.jpg" alt="" />
                            <img className='w-[450px] h-[355px] object-cover' src="/slider/1.jpg" alt="" />
                        </div>

                        <div className='w-1/2 flex flex-col gap-6 items-start'>
                            <img className='w-[450px] h-[355px] object-cover' src="/slider/2.jpg" alt="" />
                            <img className='w-[450px] h-[355px] object-cover' src="/slider/2.jpg" alt="" />
                            <img className='w-[450px] h-[560px] object-cover' src="/slider/2.jpg" alt="" />
                        </div>

                    </article>


                </div>
            </section>
        </>
    );
}