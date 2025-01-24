import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function Team() {
    return (
        <>
                    <h1 className='uppercase text-3xl font-normal font-Oswald tracking-wider text-center mt-10 mb-4'>Nosso <span className='text-BlueP font-Oswald tracking-wider'>time</span></h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae architecto modi nihil exercitationem voluptatem neque.</p>
                    <article className='py-10 flex flex-wrap justify-center gap-20'>
                        {/* PROFISSSIONAL 1 */}
                        <div className=''>
                            <div className='flex border-BlueP border-l'>
                                <h1 className='vertical-text '>Lívia Urbano</h1>
                                <img className='w-[350px]' src="team1.jpg" alt="" />
                            </div>
                            <div className='py-2 flex justify-center gap-2'>
                                <a className='' href=""><FaInstagram className='text-xl' /></a>
                                <a className='' href=""><FaInstagram className='text-xl' /></a>
                                <a className='' href=""><FaInstagram className='text-xl' /></a>
                            </div>
                        </div>
                        {/* PROFISSSIONAL 2 */}
                        <div className=''>
                            <div className='flex border-BlueP border-l'>
                                <h1 className='vertical-text'>Lívia Urbano</h1>
                                <img className='w-[350px]' src="team1.jpg" alt="" />
                            </div>
                            <div className='py-2 flex justify-center gap-2'>
                                <a className='' href=""><FaInstagram className='text-xl' /></a>
                                <a className='' href=""><FaInstagram className='text-xl' /></a>
                                <a className='' href=""><FaInstagram className='text-xl' /></a>
                            </div>
                        </div>
                    </article>

    
        </>
    );
}