import { PropsOptions } from "../../common/interfaces/components.interface";
import { LeftTail } from "../../icons";



export const DialogBoxPuzzleInstructions = (props: PropsOptions) => {

    const { text } = props;

    return (
        <div className="w-full h-[22vh] flex flex-col items-end transform translate-y-[10vh] mx-[0.5vw]">
            <div className="h-[22vh] z-10">
                <div className="w-full h-full rounded-[0.4vw] bg-white bg-opacity-90 p-[0.8vw]">
                <div className=" w-full h-[11vh] flex justify-center items-center text-center text-textos text-[2.2vh] leading-none mb-[1vh] md:mb-[0.5vh]">
                    {text}
                </div>
                </div>
            </div>
                <div className="w-full h-[5vh] flex transform -translate-y-[0.6vh] translate-x-[5vw]">
                    <LeftTail className="flex justify-items-start" />
                </div>
            </div>
        );
    };