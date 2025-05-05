import Predmet from "./Predmet.tsx";
import {znamkyCelek} from '../../data/znamky.ts'
import React, {useState} from "react";
import Znamka2 from "./Znamka2.tsx";

const ZnamkyPredmet = () => {

    const [openedIndex, setOpenedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenedIndex(openedIndex === index ? null : index);
    }

    return (
        <div className='flex flex-col gap-3 pb-3'>
            {znamkyCelek.map((predmet, index) => (
                <React.Fragment key={index}>
                    <Predmet {...predmet} rozbaleno={openedIndex === index} onClick={() => handleClick(index)}
                             key={index}/>
                    {openedIndex === index &&
                      <div
                        className="bg-primary-800/20 w-[95%] max-w-[600px] mx-auto p-3 mt-[-12px] rounded-b-lg">
                        <div
                          className="divide-y-2 divide-gray-200 max-w-[600px] rounded-lg overflow-hidden">
                            {predmet.znamky.map((znamka, index) => (
                                <Znamka2 {...znamka} key={index}/>
                            ))}
                        </div>
                      </div>}
                </React.Fragment>
            ))}
        </div>
    )
}

export default ZnamkyPredmet;