"use client"
import React, {useState} from 'react';
import { BiMenu } from "react-icons/bi";
import Modal from './Modal';
import { useModalContext } from '@/context/ModalContext';
import { IoMdClose } from "react-icons/io";



const ModalButton: React.FC = () => {

    const {isOpen, setIsOpen} = useModalContext()
    function toggleModal (){
        setIsOpen(!isOpen);
    }
  return (
    <>
        <button onClick={toggleModal} className=' z-20 rounded-full mm:flex flex-col lg:hidden fixed w-12 h-12 p-2 border border-solid border-second-gray top-20 left-0 items-center justify-center group hover:border-sky-500 duration-300  '>
            <i className="text-second-gray group-hover:text-sky-500 duration-300 flex items-center">
                {isOpen ? (
                    <IoMdClose size={25} />
                ) : (
                    <BiMenu size={25} />
                )}
                
            </i>
        </button>
        <Modal/>
    </>
  );
}

export default ModalButton;
