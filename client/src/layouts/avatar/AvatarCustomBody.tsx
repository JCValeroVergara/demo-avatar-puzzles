import { useContext } from 'react';
import { AvatarContext } from '../../common';
import { LineDivision } from '../../components';
import { SelectEyesColors, SelectSilhouette, SelectSkinColors } from '../avatarSelect';


export const AvatarCustomBody = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    const { ActiveForm } = context;

    // const { ActiveForm } = useContext(AppContext);
    // const { DataRegister } = useContext(AppContext);
    // const [ShowHand, setShowHand] = useState(false);
    // const [ShowToast, setShowToast] = useState(false);
    // const [ShowErrorToast, setShowErrorToast] = useState(false);

    // const UserData = DataRegister.userData;
    // const avance = calculateProgress(UserData);

    // useEffect(() => {
    //     if (
    //     avance === 40 &&
    //     ActiveForm !== 'UpdateAvatar' &&
    //     ActiveForm !== 'UpdateAvatarChild'
    //     ) {
    //     setShowToast(true);
    //     }
    //     if (
    //     avance < 40 &&
    //     ActiveForm !== 'UpdateAvatar' &&
    //     ActiveForm !== 'UpdateAvatarChild'
    //     ) {
    //     setShowErrorToast(true);
    //     }
    //     setShowHand(true);
    //     setTimeout(() => {
    //     setShowHand(false);
    //     }, 3600);
    // }, []);

    return (
        <>
        {/* {ShowToast && (
            <SuccesfullSaveDataToast
            message="Datos guardados correctamente."
            onClose={() => setShowToast(false)}
            />
        )}
        {ShowErrorToast && (
            <NoSuccesfullSaveDataToast
            message="Error al guardar los datos."
            onClose={() => setShowErrorToast(false)}
            />
        )}
        {ShowHand && (
            <div className="w-[8vw] h-[8vw] fixed top-[15vh] right-[5vw] z-50 animate-fade-up animate-infinite animate-duration-[1200ms] animate-ease-in-out animate-reverse">
            <HandUX />
            </div>
        )} */}
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
                {/* <SelectHairColors /> */}
            </div>
            {/* //_______________________________________________________________________________________ */}
            <div className="w-full mb-[4vh]">
                <div className="w-full flex items-center mb-[1vh]">
                <LineDivision content="Tipos de cabello" />
                </div>
                {/* <HairType /> */}
            </div>
            {/* //_______________________________________________________________________________________ */}
            {ActiveForm !== 'UpdateAvatarChild' && (
                <div className="w-full mb-[4vh]">
                <div className="w-full flex items-center mb-[1vh]">
                    <LineDivision content="Vello facial" />
                </div>
                {/* <FacialHairType /> */}
                </div>
            )}
            {/* //_______________________________________________________________________________________ */}
            </div>
        </div>
        </>
    );
};