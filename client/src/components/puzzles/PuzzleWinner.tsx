import  { useEffect, useState } from 'react';
import { CloseX, CloseXClick, CloseXHover, Guau_07 } from '../../icons';
import { PropsOptions } from '../../common/interfaces/components.interface';
import { StarsBonus } from './StarsBonus';
import { DialogBoxPuzzle } from './DialogBoxPuzzle';
import { ButtonOptionNav } from '../common/ButtonOptionNav';

export const PuzzleWinner = (props: PropsOptions) => {
    const { textBox, textWin, onClose } = props;
    const [isClickedClose, setIsClickedClose] = useState(false);
    
    //Estado de la ventana modal
    const [showStarsBonus, setShowStarsBonus] = useState(false);

    useEffect(() => {
        handleShowStarsBonus();
    }, []);

    const handleShowStarsBonus = () => {
        setShowStarsBonus(true);
    };

    const handleCloseShowStarsBonus = () => {
        setShowStarsBonus(false);
    };

    const handleCloseClick = () => {
        setIsClickedClose(true);
        if (onClose) onClose();
    };

    return (
        <>
        {showStarsBonus && (
            <StarsBonus onClose={handleCloseShowStarsBonus} prize={10} />
        )}
        <section className="overflow-y-scroll flex flex-wrap fixed top-0 left-0 z-30 w-full h-full items-center justify-center bg-modal bg-opacity-30">
            <div className="relative w-1/2 h-[28vh] flex flex-col bg-tablero items-center justify-center rounded-[1vw] border-[0.2vw] border-tableroborder">
            <div className=" absolute top-0 w-full h-[7vh] flex flex-row justify-end">
                <div className="w-full flex justify-end items-center">
                <div className="w-[75%] h-full transform -translate-y-[3vh] z-10">
                    <DialogBoxPuzzle text={textBox} />
                </div>
                </div>
                <div className="w-[3.5vw] md:w-[2vw] h-[3.5vw] md:h-[2vw] flex justify-start items-center p-[0.2vw]">
                <ButtonOptionNav onClick={handleCloseClick}>
                    {(isHovered) => {
                    if (isClickedClose) {
                        return <CloseXClick />;
                    } else if (isHovered) {
                        return <CloseXHover />;
                    } else {
                        return <CloseX />;
                    }
                    }}
                </ButtonOptionNav>
                </div>
            </div>
            <div className="w-full h-full flex flex-row">
                <div className="w-[20%] h-full relative flex">
                <div className="absolute top-[4vh] -left-[3.5vw] right-0 w-[20vw] h-[20vh]">
                    <Guau_07 />
                </div>
                </div>
                <div className=" w-[80%] h-full flex flex-row pt-[13vh] pb-[1.5vw] px-[2vw]">
                <div className="w-full h-full bg-slate-800 rounded-[0.25vw] pt-[1.2vh]">
                    <div className="w-full h-full bg-tablerobg rounded-t-[1.5vw] rounded-b-[0.3vw] flex flex-row">
                    <div className="mr-[0.1vw] w-full h-full flex items-center justify-end">
                        <div className="w-full h-full flex items-center justify-center p-[2vw] text-[2.5vh] md:text-[2vh] text-white leading-none">
                        {textWin}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};
