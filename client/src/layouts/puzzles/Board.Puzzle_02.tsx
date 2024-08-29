import { FC, useEffect, useState } from "react";
import { BoxContainer_Puzzle_03, ButtonAssistant, CardPuzzle_World_03, Continue_Puzzle, Not_Win_Puzzle, PuzzleWinner } from "../../components";

type GridType = (number | string)[][];

export const Board_Puzzle_02: FC = () => {

    const [grid, setGrid] = useState<GridType>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [rounderOrder, setRounderOrder] = useState<string[]>([]);
    const [currentRound, setCurrentRound] = useState(0);

    const [ShowWinner, setShowWinner] = useState(false);
    const [ShowNotWin, setShowNotWin] = useState(false);
    const [ShowContinue, setShowContinue] = useState(false);


    const circles = [
        'Circle_1',
        'Circle_2',
        'Circle_3',
        'Circle_4',
        'Circle_5',
        'Circle_6',
        'Circle_7',
    ];
    const squares = [
        'Square_1',
        'Square_2',
        'Square_3',
        'Square_4',
        'Square_5',
        'Square_6',
        'Square_7',
    ];
    const triangles = [
        'Triangle_1',
        'Triangle_2',
        'Triangle_3',
        'Triangle_4',
        'Triangle_5',
        'Triangle_6',
        'Triangle_7',
    ];

    const generateRandomGrid = () => {
        const rows = 4;
        const cols = 3;
        const items = [
        'Objet_1',
        'Objet_2',
        'Objet_3',
        'Objet_4',
        'Objet_5',
        'Objet_6',
        'Objet_7',
        ];
        
        // Obtener un número aleatorio de elementos de una matriz
        const getRandomItems = (items: string[], count: number) => {
        const shuffled = [...items].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
        };

        const randomItems = getRandomItems(items, 3);
        const randomCircles = getRandomItems(circles, 3);
        const randomSquares = getRandomItems(squares, 3);
        const randomTriangles = getRandomItems(triangles, 3);

        const itemsGrid = [
        ...randomItems,
        ...randomCircles,
        ...randomSquares,
        ...randomTriangles,
        ];

        // Mezclar aleatoriamente los elementos
        for (let i = itemsGrid.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [itemsGrid[i], itemsGrid[j]] = [itemsGrid[j], itemsGrid[i]];
        }

        // Convertir el array en una matriz 2D
        const randomGrid = [];
        for (let i = 0; i < rows; i++) {
        randomGrid.push(itemsGrid.slice(i * cols, (i + 1) * cols));
        }
        setGrid(randomGrid);
    };

    useEffect(() => {
        startNewGame();
    }, []);
    
    //iniciar el juego
    const startNewGame = () => {
        setSelectedItems([]);
        generateRandomGrid();
        const groups = ['squares', 'circles', 'triangles'];
        const shuffledGroups: string[] = [...groups].sort(() => 0.5 - Math.random());
        setRounderOrder(shuffledGroups);
        setCurrentRound(0);
    };
    
    const handleClick = (item:string) => {
        if (!selectedItems.includes(item)) {
        if (selectedItems.length < 3) {
            setSelectedItems([...selectedItems, item]);
        }
        } else {
        const newItems = selectedItems.filter((selectedItem) => selectedItem !== item);
        setSelectedItems(newItems);
        }
    };

    // Verificar si el usuario ha ganado
    const checkWin = () => {
        const currentGroup = rounderOrder[currentRound];
        const groupItems = currentGroup === 'circles' ? circles :
                        currentGroup === 'squares' ? squares : triangles;
        const isSelectionCorrect = selectedItems.every((item) => groupItems.includes(item));
        
        if (isSelectionCorrect) {
        if (currentRound < 2) {
            setShowContinue(true);
            setCurrentRound(currentRound + 1);
            setSelectedItems([]);
        } else {
            setShowWinner(true);
            startNewGame();
        }
        } else {
        setShowNotWin(true);
        setSelectedItems([]);
        }
    };

    useEffect(() => {
        if (selectedItems.length === 3) {
        setTimeout(() => {
            checkWin();
        }, 100);
        }
    }, [selectedItems]);

    const handleStartGame = () => {
        startNewGame();
    }

    const handleCloseClick = () => {
        setShowWinner(false);
    };

    const handleCloseContinue = () => {
        setShowContinue(false);
    };

    const handleCloseNotWin = () => {
        setShowNotWin(false);
    }


    return (
        <>
            {ShowWinner && (
            <PuzzleWinner
                onClose={handleCloseClick}
                textBox="¡Acertaste! Qué buen ojo tienes."
                textWin="Puedes jugar este Desafío cuando quieras, pero solo recibirás la recompensa al acertar una vez semanalmente."
            />
            )}
            {ShowContinue && (
            <Continue_Puzzle
                onClose={handleCloseContinue}
                title="¡Muy bien! Ahora selecciona los objetos de la otra caja."
            />
            )}
            {ShowNotWin && (
            <Not_Win_Puzzle
                onClose={handleCloseNotWin}
                title="¡Estuviste cerca! Vuelve a intentarlo"
                buttontext="¡Vamos, inténtalo de nuevo!"
            />
            )}
            <div className="flex flex-col flex-wrap w-[97vw] items-center justify-center">
            <div className="w-full h-[8vh] flex flex-row justify-center items-center transform -translate-x-[24vw] translate-y-[2vh]">
                <h1 className=" w-full h-[4vh] text-[4vh] font-bold text-center text-textos">
                Desafío de La Escuela de la Vida
                </h1>
            </div>
            <div className="w-full h-[81vh] pt-[10vh] px-[1.5vw] pb-[1.5vw]">
                <div className="w-[70vw] h-full flex flex-row items-center p-[1.25vw]">
                <div className="ml-[6vw] w-[32vw] h-[56vh] transform -translate-y-[12vh] px-[0.6vw]">
                    <div className="w-full h-full grid grid-cols-3 gap-[0.5vw] justify-center items-center">
                    {grid.map((row, rowIndex) =>
                        row.map((cell, collIndex) => (
                        <div
                            className="w-[9.2vw] h-[12.5vh]"
                            key={`${rowIndex}-${collIndex}-${cell}`}
                        >
                            <CardPuzzle_World_03
                            cell={String(cell)}
                            isSelected={selectedItems.includes(String(cell))}
                            onClick={() => handleClick(String(cell))}
                            />
                        </div>
                        ))
                    )}
                    </div>
                </div>
                <div className="w-[30vw] h-[65vh] flex flex-col items-end justify-end transform -translate-y-[10vh] translate-x-[1.2vw]">
                    <div className=" fixed top-0 w-full h-[20vh] flex justify-center items-center">
                    <div className="w-1/2 md:w-1/3 h-[8vh] md:h-[6vh]">
                        <ButtonAssistant onClick={handleStartGame} text="Jugar" />
                    </div>
                    </div>
                    <div className="w-full h-[35vh] transform translate-y-[12vh]">
                    <BoxContainer_Puzzle_03
                        selection={rounderOrder[currentRound]}
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
};