import {IoIosArrowUp} from "react-icons/io";

interface ZnamkyPredmetProps {
    predmet: string;
    zkratka: string;
    prumer: number;
    absence: number;
    rozbaleno: boolean;
    onClick: () => void;
}

const Predmet = ({predmet, zkratka, prumer, absence, rozbaleno, onClick}: ZnamkyPredmetProps) => {

    return (
        <div onClick={onClick}
             className={`flex bg-white w-[95%] max-w-[600px] mx-auto divide-x-1 divide-gray-200 hover:bg-gray-100 cursor-pointer duration-200 transition ${rozbaleno ? 'rounded-t-lg' : 'rounded-lg'}`}>
            <div className="w-[100%] divide-y-1 divide-gray-200">
                <div className="flex justify-between h-15 items-center px-4">
                    <p className='text-gray-800 text-xl font-bold'>{predmet} ({zkratka})</p>
                    <p className='bg-gray-100 border-1 border-gray-200 w-8 h-8 flex items-center justify-center text-lg font-bold text-gray-800 rounded-lg'>{prumer}</p>
                </div>
                <div className="flex divide-x-1 divide-gray-200 h-9">
                    <div
                        className="w-[50%] flex items-center justify-center text-gray-600">průměr {prumer.toFixed(2)}</div>
                    <div className="w-[50%] flex items-center justify-center text-gray-600">absence {absence}%</div>
                </div>
            </div>
            <div className="w-15 flex items-center justify-center text-xl">
                {rozbaleno ?
                    <IoIosArrowUp className='transition-all'/> :
                    <IoIosArrowUp className='rotate-[-180deg] transition-all'/>}
            </div>
        </div>
    );
};

export default Predmet;