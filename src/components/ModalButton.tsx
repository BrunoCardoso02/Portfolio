"use client"
import React, {useState} from 'react';
import { BiMenu } from "react-icons/bi";
import Modal from './Modal';


const ModalButton: React.FC = () => {
    const [open, setOpen] = useState(false);
    function toggleModal (){
        setOpen(!open);
    }
  return (
    <>
        <button onClick={toggleModal} className=' z-20 rounded-full sm:flex flex-col lg:hidden fixed w-12 h-12 p-2 border border-solid border-second-gray top-20 left-0 items-center justify-center group hover:border-sky-500 duration-300  '>
            <i className="text-second-gray group-hover:text-sky-500 duration-300 flex items-center">
                <BiMenu size={25} />
            </i>
        </button>
        <Modal isOpen={open}/>
    </>
  );
}

export default ModalButton;
