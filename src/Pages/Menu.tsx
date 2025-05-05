import MenuLink from "../Components/MenuLink.tsx";
import {Link} from "react-router-dom";
import {HiOutlineBookOpen} from "react-icons/hi2";
import {FaListOl} from "react-icons/fa6";
import {PiUserCircleLight} from "react-icons/pi";
import {MdOutlineLogout} from "react-icons/md";
import logo from '../assets/spse-logo.png'
import Icon from "../Components/Icon.tsx";

const Menu = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="head rounded-b-xl overflow-hidden w-full max-w-[600px]">
                <div className="bg-primary-600 h-16 text-white flex items-center justify-between px-3">
                    <img src={logo} alt="logo" className='h-12 mr-4'/>
                    <h1 className='font-semibold text-2xl mr-auto'>Intranet 4</h1>
                    <Link to='/'><Icon icon={<MdOutlineLogout/>}/></Link>
                </div>
                <div className="bg-primary-700 h-10 text-white flex items-center px-5">
                    <PiUserCircleLight className='text-2xl'/>
                    <span className='ml-2'>Jakub Jirák (žák 1.E)</span>
                </div>
            </div>

            <MenuLink icon={<FaListOl/>} link='/klasifikace' title='Klasifikace'></MenuLink>
            <MenuLink icon={<HiOutlineBookOpen/>} link='/absence' title='Přehled absence'></MenuLink>
        </div>
    )
}

export default Menu;