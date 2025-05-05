import {MdCalendarMonth} from "react-icons/md";
import {PiUserCircleLight} from "react-icons/pi";

interface ZnamkaProps {
    znamka: number | string;
    vaha: number;
    predmet: string;
    zkratka: string;
    popis: string;
    kategorie: string;
    datum: string;
    ucitel: string;
}


const Znamka2 = ({znamka, vaha, popis, kategorie, datum, ucitel}: ZnamkaProps) => {
    return (
        <div className='bg-white mx-auto flex'>
            <div className="flex py-4">
                <div className="w-22 flex items-center flex-col flex-shrink-0 mr-2">
                    <div
                        className='bg-amber-400 w-12 h-12 flex justify-center items-center rounded-lg text-xl font-bold text-white mb-2'>{znamka}
                    </div>
                    <p className='text-sm'>Váha {vaha}</p>
                </div>
            </div>
            <div className="py-4">
                <div className="">
                    <p className='font-bold text-lg mt-[-4px]'>{popis}</p>
                    <p className='mb-2'>{kategorie}</p>
                </div>
                <div className="">
                    <div className="flex items-center">
                        <MdCalendarMonth className='text-gray-600 mr-2'/>
                        <p className='text-gray-600'>{datum}</p>
                    </div>
                    <div className="flex items-center mb-[-8px]">
                        <PiUserCircleLight className='text-gray-600 mr-2'/>
                        <p className='text-gray-600'>{ucitel}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Znamka2;