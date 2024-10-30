import { useContext, useEffect, useState } from 'react';
import { AvatarContext } from '../../common';
import { LineDivision } from '../../components';
import { HandUX, IconGlasses, IconPant, IconShirt, IconShoes } from '../../icons';
import { SelectAccessories, SelectAccessoriesColor, SelectPant, SelectPantColor, SelectShirt, SelectShirtColor, SelectShoes, SelectShoesColor } from '../avatarSelect';


export const AvatarCustomWardrobe = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const [ShowHand, setShowHand] = useState(false);

    useEffect(() => {
        setShowHand(true);
        setTimeout(() => {
        setShowHand(false);
        }, 3600);
    }, []);

    return (
        <>
        {ShowHand && (
            <div className="w-[8vw] h-[8vw] fixed top-[15vh] right-[5vw] z-50 animate-fade-up animate-infinite animate-duration-[1200ms] animate-ease-in-out animate-reverse">
                <HandUX />
            </div>
        )}
        <div className="flex flex-col justify-start items-center w-4/5 h-full overflow-y-auto custom-scrollbar-y">
            <div className="mr-[2vw]">
            {/* //_______________________________________________________________________________________ */}
            <div className="w-full my-[4vh]">
                <div className="w-full flex items-center mb-[1vh]">
                    <LineDivision
                        content={<IconShirt className="w-[4vw] h-[4vw]" />}
                    />
                </div>
                <SelectShirtColor />
                <SelectShirt />
            </div>
            {/* //_______________________________________________________________________________________ */}
            <div className="w-full my-[4vh]">
                <div className="w-full flex items-center mb-[1vh]">
                    <LineDivision
                        content={<IconPant className="w-[4vw] h-[4vw]" />}
                    />
                </div>
                <SelectPantColor />
                <SelectPant />
            </div>
            {/* //_______________________________________________________________________________________ */}
            <div className="w-full my-[4vh]">
                <div className="w-full flex items-center mb-[1vh]">
                    <LineDivision
                        content={<IconShoes className="w-[4vw] h-[4vw]" />}
                    />
                </div>
                <SelectShoesColor />
                <SelectShoes />
            </div>
            {/* //_______________________________________________________________________________________ */}
            <div className="w-full my-[4vh]">
                <div className="w-full flex items-center mb-[1vh]">
                    <LineDivision
                        content={<IconGlasses className="w-[4vw] h-[4vw]" />}
                    />
                </div>
                <SelectAccessoriesColor />
                <SelectAccessories />
            </div>
            {/* //_______________________________________________________________________________________ */}
            </div>
        </div>
        </>
    );
};