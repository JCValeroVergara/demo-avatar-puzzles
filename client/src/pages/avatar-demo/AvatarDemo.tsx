import { useEffect, useState } from "react";
import { Navbar, SpinnerGuau } from "../../components";
import BGImage from '../../assets/avatar/world00_MySpace.png';
import { Frame_Avatar_Child, FrameAvatar } from '../../layouts';

export const AvatarDemo = () => {
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
                <div
                    className="mt-[1vh] w-full h-[94vh] flex flex-col justify-center items-center"
                    style={{
                        backgroundImage: `url(${BGImage})`,
                        backgroundSize: '100% 95vh',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                <div className="flex flex-row items-center w-full h-full">
                    <div className="w-[35vw] h-[25vh] mb-[0.9vw] md:mb-[1.5vh] px-[3vw] fixed bottom-0 border-2">
                        <FrameAvatar />
                    </div>
                    <div className="w-[12vw] h-[25vh] mb-[0.9vw] ml-[27vw] md:mb-[1.5vh] fixed bottom-0 border-2">
                        <Frame_Avatar_Child />
                    </div>
                </div>
                </div>
            </div>
            )}
        </div>
    );
};