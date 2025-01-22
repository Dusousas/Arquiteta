import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='py-2'>
                <div className='maxW flex justify-between items-center'>
                    {/* LOGO */}
                    <article className='z-30'>
                        <img className='w-[60%]' src="logo.avif" alt="" />
                    </article>

                    <Navbar />

                </div>
            </header>

        </>
    );
}