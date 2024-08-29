
import { PropsOptions } from '../../common/interfaces/components.interface';
import { LeftTail } from '../../icons';

export const DialogBoxPuzzle = ( props: PropsOptions) => {
    const { text } = props;
    return (
        <div className="w-full h-[10vh] transform translate-y-[5vh]">
        <div className="h-[9vh] md:h-[10vh] z-10">
            <div className="w-full h-full rounded-[0.4vw] bg-white p-[0.8vw]">
            <div className=" w-full h-full flex flex-row justify-center items-center font-bold text-textos text-[3.5vh] leading-none">
                {text}
            </div>
            </div>
        </div>
        <div className="w-full h-[5vh] flex transform -translate-y-[1vh]">
            <LeftTail className="flex justify-items-start" />
        </div>
        </div>
    );
}
