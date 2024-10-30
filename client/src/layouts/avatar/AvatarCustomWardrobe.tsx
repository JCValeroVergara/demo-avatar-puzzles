import { useContext } from 'react';
import { AvatarContext } from '../../common';
import { LineDivision } from '../../components';
import { IconGlasses, IconPant, IconShirt, IconShoes } from '../../icons';
import { SelectAccessories, SelectAccessoriesColor, SelectPant, SelectPantColor, SelectShirt, SelectShirtColor, SelectShoes, SelectShoesColor } from '../avatarSelect';


export const AvatarCustomWardrobe = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }

    // const { ActiveForm, setActiveForm } = context;

    // const { DataRegister } = useContext(AppContext);

    // const [ShowHand, setShowHand] = useState(false);
    // const [ShowToast, setShowToast] = useState(false);
    // const [ShowErrorToast, setShowErrorToast] = useState(false);

    // const UserData = DataRegister.userData;
    // const avance = calculateProgress(UserData);

    // useEffect(() => {
    //     if (
    //     avance === 80 &&
    //     ActiveForm !== 'UpdateAvatar' &&
    //     ActiveForm !== 'UpdateAvatarChild'
    //     ) {
    //     setShowToast(true);
    //     }
    //     if (
    //     avance < 80 &&
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