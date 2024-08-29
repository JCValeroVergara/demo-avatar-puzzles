import { useEffect, useState } from "react";
import { DialogBoxPuzzleInstructions, Frame_Puzzles_Guau, Navbar, SpinnerGuau } from "../../components";
import BGImage from "../../assets/puzzle_02/Pzz3_Bg_world03.png";
import { Board_Puzzle_02 } from "../../layouts";

export const Puzzle_02 = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="portrait:hidden">
            {isLoading ? (
                <div className="w-screen h-screen flex justify-center items-center">
                    <SpinnerGuau />
                </div>
            ) : (
            <div className="flex flex-col w-full h-screen">
                <div className="w-full h-[7vh] flex flex-row items-center justify-center">
                    <Navbar />
                </div>
                <div className="mt-[1vh] w-full h-[94vh] flex flex-row justify-center items-center"
                style={{
                    backgroundImage: `url(${BGImage})`,
                    backgroundSize: '100% 95vh',
                    backgroundRepeat: 'no-repeat',
                }}  
                >
                    <div className="w-[25vw] h-full">
                        <div className="w-full h-1/2 transform translate-y-[15vh]">
                            <div className="w-full h-full">
                                <DialogBoxPuzzleInstructions text="Tus hijos aman los retos. ¿Qué tal si clasificas con ellos los objetos en las cajas? Selecciónalos según las formas geométricas que indica la caja que está abierta." />
                            </div>
                        </div>
                        <div className="w-full h-1/2 transform -translate-y-[10vh]">
                            <Frame_Puzzles_Guau />
                        </div>
                    </div>
                    <div className="w-[75vw] h-full">
                        <Board_Puzzle_02 />
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};