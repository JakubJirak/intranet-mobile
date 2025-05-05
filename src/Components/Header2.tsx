import logo from "../assets/spse-logo.png";
import {Link} from "react-router-dom";
import {MdOutlineLogout} from "react-icons/md";
import {PiUserCircleLight} from "react-icons/pi";
import Icon from "./Icon.tsx";
import {FiMenu} from "react-icons/fi";
import {TfiReload} from "react-icons/tfi";

interface HeaderProps {
    name: string;
    title: string;
}

const Header2 = ({name, title}: HeaderProps) => {
    return (
        <div className='flex flex-col items-center'>
            <div className="head rounded-b-xl overflow-hidden w-full max-w-[600px]">
                <div className="bg-primary-600 h-16 text-white flex items-center justify-between px-3">
                    <img src={logo} alt="logo" className='h-12 mr-4'/>
                    <h1 className='font-semibold text-2xl mr-auto line leading-7'>{title}</h1>
                    <Link to='/'><Icon icon={<TfiReload/>}/></Link>
                    <Link to='/menu'><Icon icon={<FiMenu/>}/></Link>
                    <Link to='/'><Icon icon={<MdOutlineLogout/>}/></Link>
                </div>
                <div className="bg-primary-700 h-10 text-white flex items-center px-5">
                    <PiUserCircleLight className='text-2xl'/>
                    <span className='ml-2'>{name}</span>
                </div>
                <div className="bg-primary-800 h-10 text-white flex items-center px-5">
                    <p className=''>Pololetí</p>
                    <input type="radio" id='prvni' className='ml-auto' name='pololeti'/>
                    <label htmlFor="prvni" className='p-2'>1</label>
                    <input type="radio" id='druhy' name='pololeti' defaultChecked/>
                    <label htmlFor="druhy" className='p-2'>2</label>
                </div>
            </div>

        </div>
    );
};

export default Header2;