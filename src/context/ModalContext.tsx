"use client"
import { createContext, useState, useContext } from "react";

interface ModalContextType {
    isOpen: boolean;
    toggleModal: () => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: ModalContextType = {
    isOpen: false,
    toggleModal: () => {},
    setIsOpen: () => {}, 
};

export const ModalContext = createContext(defaultValue);

export function ModalProvider({children}: {
    children: React.ReactNode
}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return(
        <ModalContext.Provider value={{isOpen, toggleModal, setIsOpen}}>
            {children}
        </ModalContext.Provider>
    ) 
}

export function useModalContext(){
    return useContext(ModalContext)
}
