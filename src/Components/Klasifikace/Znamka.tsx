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


const Znamka = ({znamka, vaha, predmet, zkratka, popis, kategorie, datum, ucitel}: ZnamkaProps) => {
    return (
        <div className='w-[95%] bg-white mx-auto divide-gray-200 divide-y-1 rounded-xl'>
            <div className="flex py-4">
                <div className="w-22 flex justify-center items-center flex-col flex-shrink-0">
                    <div
                        className='bg-amber-400 w-12 h-12 flex justify-center items-center rounded-lg text-xl font-bold text-white mb-2'>{znamka}
                    </div>
                    <p className='text-sm'>Váha {vaha}</p>
                </div>
                <div className="">
                    <p className='text-lg font-semibold mb-[-2px]'>{predmet} ({zkratka})</p>
                    <p className='text-gray-800'>{popis}</p>
                    <p className='text-sm text-gray-700'>{kategorie}</p>
                </div>
            </div>
            <div className="flex h-12 divide-x-1 divide-gray-200">
                <div className="w-[50%] flex items-center p-4">
                    <MdCalendarMonth className='text-gray-700 mr-2'/>
                    <p>{datum}</p>
                </div>
                <div className="w-[50%] flex items-center p-4">
                    <PiUserCircleLight className='text-gray-600 mr-2'/>
                    <p>{ucitel}</p>
                </div>
            </div>
        </div>
    );
};

export default Znamka;