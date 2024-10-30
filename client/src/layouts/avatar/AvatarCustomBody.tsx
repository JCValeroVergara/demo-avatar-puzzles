import { useContext, useEffect, useState } from 'react';
import { AvatarContext } from '../../common';
import { LineDivision } from '../../components';
import { SelectEyesColors, SelectFacialHairType, SelectHairColors, SelectHairType, SelectSilhouette, SelectSkinColors } from '../avatarSelect';
import { HandUX } from '../../icons';


export const AvatarCustomBody = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const { ActiveForm } = context;

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
            {ActiveForm !== 'customAvatarChildren' && (
                <div className="w-full my-[4.2vh]">
                    <div className="w-full flex items-center mb-[1vh]">
                        <LineDivision content="Silueta" />
                    </div>
                    <SelectSilhouette />
                </div>
            )}
            {/* //_______________________________________________________________________________________ */}
            <div className="w-full my-[4vh]">
                <div className="w-full flex items-center mb-[1vh]">
                    <LineDivision content="Tono de piel" />
                </div>
                <SelectSkinColors />
            </div>
            {/* //_______________________________________________________________________________________ */}
            <div className="w-full mb-[4vh]">
                <div className="w-full flex items-center mb-[1vh]">
                    <LineDivision content="Color de ojos" />
                </div>
                <SelectEyesColors />
            </div>
            {/* //_______________________________________________________________________________________ */}
            <div className="w-full mb-[4vh]">
                <div className="w-full flex items-center mb-[1vh]">
                    <LineDivision content="Color de pelo" />
                </div>
                <SelectHairColors />
            </div>
            {/* //_______________________________________________________________________________________ */}
            <div className="w-full mb-[4vh]">
                <div className="w-full flex items-center mb-[1vh]">
                    <LineDivision content="Tipos de cabello" />
                </div>
                <SelectHairType />
            </div>
            {/* //_______________________________________________________________________________________ */}
            {ActiveForm !== 'customAvatarChildren' && (
                <div className="w-full mb-[4vh]">
                <div className="w-full flex items-center mb-[1vh]">
                    <LineDivision content="Vello facial" />
                </div>
                <SelectFacialHairType />
                </div>
            )}
            {/* //_______________________________________________________________________________________ */}
            </div>
        </div>
        </>
    );
};