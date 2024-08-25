import { FC, useEffect, useState } from 'react';
import { Guau_01, Guau_02, Guau_03, Guau_04, Guau_05, Guau_06, RigthTail } from '../../icons';
import { SVGProps } from '../../common/interfaces/SVgProps.interface';
interface GreettingProps {
    showText: string;
}

export const Greetting: FC<GreettingProps> = ({showText}) => {

    //? Renderizado de Guau por intervalos
    const [currentGuau, setCurrentGuau] = useState(0);
    const guaus: Array<FC<SVGProps>> = [Guau_01, Guau_02, Guau_03, Guau_04, Guau_05, Guau_06];
    const CurrentGuau = guaus[currentGuau];
    

    useEffect(() => {

        //? Función para obtener index aleatorio
        const getRandomIndex = (guausArray: Array<FC<SVGProps>>):number => Math.floor(Math.random() * guausArray.length);

        setCurrentGuau(getRandomIndex(guaus));

        const interval = setInterval(() => {
            setCurrentGuau(getRandomIndex(guaus));
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    



    return (
        <section className="w-full h-full">
        <div className="w-full h-1/4"></div>
        <div className="relative w-full h-[18vh] flex flex-col bg-tablero items-center justify-center rounded-[1vw] border-[0.2vw] border-tableroborder">
            <div className="absolute top-0 left-0 transform translate-x-[1vw] translate-y-[2vh] w-[0.4vw] h-[0.4vw] bg-white rounded-full shadow-md"></div>
            <div className="absolute top-0 right-0 transform -translate-x-[1vw] translate-y-[2vh] w-[0.4vw] h-[0.4vw] bg-white rounded-full shadow-md"></div>
            <div className="absolute bottom-0 left-0 transform translate-x-[1vw] -translate-y-[2vh] w-[0.4vw] h-[0.4vw] bg-white rounded-full shadow-md"></div>
            <div className="absolute bottom-0 right-0 transform -translate-x-[1vw] -translate-y-[2vh] w-[0.4vw] h-[0.4vw] bg-white rounded-full shadow"></div>
            <div className="w-full h-full flex flex-row">
            <div className="w-[40vw] h-full relative flex">
                <div className="absolute -top-[19vh] left-0 right-0 w-[33vw] h-[35vh]">
                    <CurrentGuau />
                </div>
            </div>
            <div className=" w-[60vw] h-full flex flex-row">
                <div className="w-4/5 flex justify-center items-center px-[2vw]">
                    <div className="w-[8vw] h-3/4 flex justify-end transform translate-x-[0.5vw]">
                        <RigthTail className="w-[75%] h-[75%]" />
                    </div>
                    <div className="w-[60vw] h-4/5 md:h-2/3 bg-white rounded-[0.5vw]">
                        <div className="w-full h-full flex items-center justify-center text-textos text-[3.2vh] md:text-[2.4vh] font-normal px-[1.5vw] leading-none">
                            {showText}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    );
};