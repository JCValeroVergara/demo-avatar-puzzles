import { useEffect, useState } from "react";
import { Navbar, SpinnerGuau } from "../../components";
import BGImage from "../../assets/puzzle_02/Pzz3_Bg_world03.png";

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
                <div className="mt-[1vh] w-full h-[94vh] flex flex-col justify-center items-center"
                style={{
                    backgroundImage: `url(${BGImage})`,
                    backgroundSize: '100% 95vh',
                    backgroundRepeat: 'no-repeat',
                }}  
                >
                    <h1 className="text-[4vh]">Welcome to Puzzle 02</h1>
                </div>
            </div>
            )}
        </div>
    );
};