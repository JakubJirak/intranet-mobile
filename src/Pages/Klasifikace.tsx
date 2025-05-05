import Header2 from "../Components/Header2.tsx";
import {useState} from "react";
import ZnamkyDatum from "../Components/Klasifikace/ZnamkyDatum.tsx";
import ZnamkyPredmet from "../Components/Klasifikace/ZnamkyPredmet.tsx";

const Klasifikace = () => {

    const [znamkyShow, setZnamkyShow] = useState(false);

    const handleClickData = () => {
        if (znamkyShow) {
            setZnamkyShow(false);
        }
    }

    const handleClickPredmet = () => {
        if (!znamkyShow) {
            setZnamkyShow(true);
        }
    }

    return (
        <div className='max-w-[600px] mx-auto'>
            <Header2 name='Jakub Jirák (žák 1.E)' title='Klasifikace'/>

            <div
                className="w-[95%] bg-primary-800/20 mx-auto m-3 p-1 rounded-lg relative flex items-center">
                <div
                    className={`absolute bg-white z-10 w-[49%] h-[85%] rounded-[6px] transition-transform duration-200 ${znamkyShow ? 'translate-x-[102%] left-0' : 'translate-x-0'}`}></div>
                <button
                    className={`w-[50%] p-2 rounded-lg cursor-pointer z-20 relative`}
                    onClick={handleClickData}>Podle
                    data
                </button>
                <button
                    className={`w-[50%] p-2 rounded-lg cursor-pointer z-20 relative ${znamkyShow ? '' : ''}`}
                    onClick={handleClickPredmet}>Podle
                    předmětu
                </button>
            </div>

            {znamkyShow ? <ZnamkyPredmet/> : <ZnamkyDatum/>}

        </div>

    )
}

export default Klasifikace;