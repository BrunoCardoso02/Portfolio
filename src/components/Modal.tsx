"use client"
import { useModalContext } from '@/context/ModalContext';
import React from 'react';
import { LiaHomeSolid } from "react-icons/lia";
import { LuUser } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";
import { motion } from 'framer-motion';
import Link from 'next/link';

const Modal: React.FC = () => {
    const { isOpen, setIsOpen } = useModalContext();

    function toggleModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (event.target === event.currentTarget) {
            setIsOpen(!isOpen);
        }
    }

    function handleLiClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        event.stopPropagation();
        setIsOpen(false);
    }

    if (isOpen === true) {
        return (
            <section onClick={toggleModal} className='bg-black sm:w-[96.5vw] md:w-[97.4vw] sm:h-[389vh] md:h-[400vh] sm:flex absolute lg:hidden left-0 top-0 z-10 bg-opacity-50 justify-end '>
                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    whileInView={{ opacity: 1, x: 1 }}
                    className='flex flex-col bg-modal-gray w-96 fixed h-full px-28 py-16 gap-10 z-20'>
                    <h1 className='text-third-gray text-xl'>Menu</h1>
                    <nav>
                        <ul className='text-third-gray text-sm flex flex-col gap-4'>
                            <li className=' group hover:cursor-pointer' onClick={handleLiClick}>
                                <Link href="/#start" className='flex gap-3 items-center'>
                                    <i className=' group-hover:text-sky-500 duration-300'>
                                        <LiaHomeSolid size={20} />
                                    </i>
                                    <p className='group-hover:text-amber-50'>Home</p>
                                </Link>
                            </li>
                            <li className='group hover:cursor-pointer' onClick={handleLiClick}>
                                <Link href="/#about" className='flex gap-3 items-center'>
                                    <i className=' group-hover:text-sky-500 duration-300'>
                                        <LuUser size={20} />
                                    </i>
                                    <p className='group-hover:text-amber-50'>About</p>
                                </Link>
                            </li>
                            <li className='group hover:cursor-pointer' onClick={handleLiClick}>
                                <Link href="/#skills" className='flex gap-3 items-center'>
                                    <i className=' group-hover:text-sky-500 duration-300'>
                                        <VscTools size={20} />
                                    </i>
                                    <p className='group-hover:text-amber-50'>Skills</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </motion.div>
            </section>
        );
    }
    return null;
}

export default Modal;
