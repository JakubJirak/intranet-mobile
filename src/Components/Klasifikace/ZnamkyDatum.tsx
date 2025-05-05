import {znamkyCelek} from '../../data/znamky.ts'
import Znamka from "./Znamka.tsx";

const ZnamkyDatum = () => {

    const znamkyPole = znamkyCelek.flatMap(znamka => znamka.znamky);

    return (
        <div className='flex flex-col gap-3 pb-3'>
            {znamkyPole.map((znamka, index) => (
                <Znamka {...znamka} key={index}/>
            ))}
        </div>
    )
};

export default ZnamkyDatum;