import React from "react";

interface IconProps {
    icon: React.ReactNode;
}

const Icon = ({icon}: IconProps) => {
    return (
        <span
            className='text-2xl p-2 bg-primary-700 rounded-full flex items-center justify-center m-1 hover:bg-primary-800 cursor-pointer duration-300 transition'>{icon}</span>
    );
};

export default Icon;