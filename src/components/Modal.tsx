import React from 'react';
import { LiaHomeSolid } from "react-icons/lia";
import { LuUser } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";


interface ModalProps {
    isOpen: boolean
}

const Modal: React.FC<ModalProps> = ({ isOpen }) => {
    if (isOpen === true) {
        return (
            <section className='bg-black w-screen h-[400vh] sm:flex absolute lg:hidden left-0 top-0 z-10 bg-opacity-50 justify-end '>
                <div className='flex flex-col bg-modal-gray w-96 fixed h-screen px-28 py-16 gap-10'>
                    <h1 className='text-third-gray text-xl'>Menu</h1>
                    <nav>
                        <ul className='text-third-gray text-sm flex flex-col gap-2'>
                            <li className='flex gap-3 items-center group hover:cursor-pointer'>
                                <i className=' group-hover:text-sky-500 duration-300'>
                                    <LiaHomeSolid size={20} />
                                </i>
                                <a className='group-hover:text-amber-50' href="#">Home</a>
                            </li>
                            <li className='flex gap-3 items-center group hover:cursor-pointer'>
                                <i className=' group-hover:text-sky-500 duration-300'>
                                    <LuUser size={20} />
                                </i>
                                <a className='group-hover:text-amber-50' href="#">About</a>
                            </li>
                            <li className='flex gap-3 items-center group hover:cursor-pointer'>
                                <i  className=' group-hover:text-sky-500 duration-300'>
                                    <VscTools size={20} />
                                </i>
                                <a className='group-hover:text-amber-50' href="#">Skills</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        );
    }
    return null
}

export default Modal;