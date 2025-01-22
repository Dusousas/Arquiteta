import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function Team() {
    return (
        <>
            <section className=''>
                <div className=''>
                    <h1 className='uppercase text-3xl font-normal font-Oswald tracking-wider text-center mt-10'>Nosso <span className='text-BlueP font-Oswald tracking-wider'>time</span></h1>

                    <article className='py-10 flex justify-center gap-20'>
                        {/* PROFISSSIONAL 1 */}
                        <div className=''>
                            <div className='flex border-BlueP border'>
                                <h1 className='vertical-text'>Lívia Urbano</h1>
                                <img className='max-w-[350px]' src="team1.jpg" alt="" />
                            </div>
                            <div className='py-2 flex justify-center gap-2'>
                                <a className='' href=""><FaInstagram className='text-2xl' /></a>
                                <a className='' href=""><FaInstagram className='text-2xl' /></a>
                                <a className='' href=""><FaInstagram className='text-2xl' /></a>
                            </div>
                        </div>
                        {/* PROFISSSIONAL 2 */}
                        <div className=''>
                            <div className='flex border-BlueP border'>
                                <h1 className='vertical-text'>Lívia Urbano</h1>
                                <img className='max-w-[350px]' src="team1.jpg" alt="" />
                            </div>
                            <div className='py-2 flex justify-center gap-2'>
                                <a className='' href=""><FaInstagram className='text-2xl' /></a>
                                <a className='' href=""><FaInstagram className='text-2xl' /></a>
                                <a className='' href=""><FaInstagram className='text-2xl' /></a>
                            </div>
                        </div>

                    </article>

                </div>
            </section>
        </>
    );
}