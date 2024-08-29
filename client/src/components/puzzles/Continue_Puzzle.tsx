import { useEffect } from 'react';
import { PropsOptions } from '../../common/interfaces/components.interface';


export const Continue_Puzzle = (props: PropsOptions) => {

    const { title, onClose } = props;

    useEffect(() => {
        const timer = setTimeout(() => {
        if (onClose) {
            onClose();
        }
        }, 3000);
    
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <section className="flex flex-wrap fixed top-0 left-0 z-50 w-full h-full items-center justify-center">
            <div className="flex flex-col flex-wrap w-[30vw] h-[30vh] items-center justify-center">
                <div className="relative w-full h-full flex flex-col bg-tablero items-center justify-center rounded-[0.7vw] border-[0.2vw] border-gray-400">
                <div className="absolute top-0 left-0 transform translate-x-[0.7vw] translate-y-[1.5vh] w-[0.3vw] h-[0.3vw] bg-white rounded-full shadow-md"></div>
                <div className="absolute top-0 rigth-0 transform translate-x-[14vw] translate-y-[1.5vh] w-[0.3vw] h-[0.3vw] bg-white rounded-full shadow-md"></div>
                <div className="absolute bottom-0 left-0 transform translate-x-[0.7vw] -translate-y-[1.5vh] w-[0.3vw] h-[0.3vw] bg-white rounded-full shadow-md"></div>
                <div className="absolute bottom-0 right-0 transform -translate-x-[0.7vw] -translate-y-[1.5vh] w-[0.3vw] h-[0.3vw] bg-white rounded-full shadow"></div>
                <div className="w-full h-full flex p-[1.2vw]">
                    <div className="w-full h-full rounded-[0.3vw] bg-slate-800 pt-[0.5vw]">
                        <div className="w-full h-full bg-tablerobg rounded-t-[1.2vw] rounded-b-[0.3vw] flex flex-col items-center justify-center p-[0.5vw]">
                            <div className="text-white text-[3.5vh] text-center font-bold leading-none">{title}</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};
