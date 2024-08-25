import { useEffect, useState } from "react";
import { Navbar, SpinnerGuau } from "../../components";
import { Board_Puzzle_01 } from "../../layouts";
import BGImage from "../../assets/puzzle_01/Pzz5_Bg_world05.png";

export const Puzzle_01 = () => {
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
                <div className="mt-[1vh] w-full h-[94vh] flex flex-col justify-center items-center"
                style={{
                    backgroundImage: `url(${BGImage})`,
                    backgroundSize: '100% 95vh',
                    backgroundRepeat: 'no-repeat',
                }}                
                >
                    <Board_Puzzle_01 />
                </div>
            </div>
            )}
        </div>
    );
};