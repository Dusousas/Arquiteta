import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='py-4'>
                <div className='maxW flex justify-between items-center'>
                    {/* LOGO */}
                    <article className='z-30'>
                        <a className='text-BlueP uppercase font-bold text-4xl' href="">Sua Logo</a>
                    </article>

                    <Navbar />

                </div>
            </header>

        </>
    );
}