import {Link} from "react-router-dom";
import React from "react";

interface MenuProps {
    link: string
    icon: React.ReactNode;
    title: string;
}

const MenuLink = ({link, icon, title}: MenuProps) => {
    return (
        <Link to={link}
              className='w-[95%] max-w-[600px] bg-white mt-5 flex items-center h-18 px-5 rounded-xl hover:bg-gray-100 shadow-sm shadow-gray-400 cursor-pointer duration-200 transition'>
            <span className='bg-primary-700 text-2xl text-white p-2 rounded-full mr-5'>{icon}</span>
            <h2 className='text-2xl text-primary-700 font-bold'>{title}</h2>
        </Link>
    )
}

export default MenuLink;