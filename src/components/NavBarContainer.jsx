import { LuUser } from "react-icons/lu";
import { LiaHomeSolid } from "react-icons/lia";
import { VscTools } from "react-icons/vsc";
import Link from "next/link";


export default function NavBarContainer() {
    return (
        <aside className="h-screen 2xl:ml-auto flex flex-col items-center justify-center">
            <nav className="fixed">
                <ul className="px-4 py-6 border border-second-gray rounded-full flex flex-col gap-9">
                    <li><Link href="/#start" ><i className="text-white hover:text-sky-500 duration-150"><LiaHomeSolid size={20} /></i></Link></li>
                    <li><Link href="/#about"><i className="text-white hover:text-sky-500 duration-150"><LuUser size={20} /></i></Link></li>
                    <li><Link href="/#skills"><i className="text-white hover:text-sky-500 duration-150"><VscTools size={20} /></i></Link></li>
                </ul>
            </nav>
        </aside>
    )
}
