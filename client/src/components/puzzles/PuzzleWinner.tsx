import  { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../utils/context/Context';
import { ButtonOptionNav, DialogBoxPuzzle, HabitsComfama, StarsBonus } from '..';
import { CloseX, CloseXClick, CloseXHover, Guau_07 } from '../../icons';
import { getPuzzleHabitText } from './functions/getPuzzleHabitText';
import { PropsOptions } from '../../common/interfaces/components.interface';

const URL = import.meta.env.VITE_BACKEND_URL;

const PuzzleWinner = (props: PropsOptions) => {
    const { onClose, textBox, textWin } = props;

    const { DataRegister } = useContext(AppContext);

    const puzzles = DataRegister.puzzles;
    const puzzle_Id = puzzles.puzzles_id;
    
    const puzzlePlayed = puzzles[puzzle];

    const previousDatePlayed = puzzles[previousDate];

    const puzzleHabitText = getPuzzleHabitText(puzzle);

    const [isClickedClose, setIsClickedClose] = useState(false);
    const [showHabit, setShowHabit] = useState(false)
    
    //Estado de la ventana modal
    const [showStarsBonus, setShowStarsBonus] = useState(false);

    useEffect(() => {
        handleShowStarsBonus();
    }, []);

    const handleShowStarsBonus = () => {
        if (!puzzlePlayed) {
        setShowStarsBonus(true);
        } 
    };

    const handleUpdatePuzzle = async () => {
        const token = sessionStorage.getItem('token');

        //Actuliza la nueva Previous Date
        let newPreviousDate;
        if (puzzlePlayed) {
        newPreviousDate = previousDatePlayed;
        } else {
        newPreviousDate = new Date().toISOString();
        }

    const response = await fetch(`${URL}/bonus/puzzles/${puzzle_Id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
        [puzzle]: true,
        [previousDate]: newPreviousDate,
    }),
    });
    if (response.status === 200) {
    await response.json();
    }
};

const handleCloseShowStarsBonus = () => {
    setShowStarsBonus(false);
};

    const handleCloseClick = () => {
        setIsClickedClose(true);
        handleUpdatePuzzle();
        setShowHabit(true);
    };

    const handleCloseHabit = () => {
        setShowHabit(false);
        onClose();
        setTimeout(() => {
        window.location.reload();
        }, 500);
    };

    return (
        <>
        {showStarsBonus && (
            <StarsBonus onClose={handleCloseShowStarsBonus} prize={10} />
        )}
        {showHabit && (
            <HabitsComfama
            onClose={handleCloseHabit}
            title="¡Felicitaciones!"
            text={puzzleHabitText}
            buttontext="Continuar"
            />
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

export default PuzzleWinner