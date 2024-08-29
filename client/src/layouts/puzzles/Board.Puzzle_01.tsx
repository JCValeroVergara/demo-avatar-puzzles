import { FC, useState } from "react";
import { getImages } from "../../common/puzzles/imagen.utils";
import { ButtonAssistant, DialogBoxPuzzleInstructions, Frame_Puzzles_Guau, PuzzleWinner } from "../../components";

type GridType = (number | string)[][];

export const Board_Puzzle_01: FC = () => {
    const [showWinner, setShowWinner] = useState(false);

    const [grid, setGrid] = useState<GridType>([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, ""]
    ]);

    const getValidMoves = (row: number, col: number):[number, number][] => {
        const validMoves:[number, number][] = [];
        if (row > 0) validMoves.push([row - 1, col]);
        if (row < 3) validMoves.push([row + 1, col]);
        if (col > 0) validMoves.push([row, col - 1]);
        if (col < 3) validMoves.push([row, col + 1]);
        return validMoves;
    }

    // Baraja las piezas del tablero
    const shuffle = () => {
        const newGrid: GridType = [...grid];
        for (let i = 0; i < 100; i++) {
            const [emptyRow, emptyCol] = findEmptyCell(newGrid);
            const validMoves = getValidMoves(emptyRow, emptyCol);
            const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
            const [newEmptyRow, newEmptyCol] = randomMove;
            newGrid[emptyRow][emptyCol] = newGrid[newEmptyRow][newEmptyCol];
            newGrid[newEmptyRow][newEmptyCol] = "";
        }
        setGrid(newGrid);
    };
    
        // Obtiene la posición de la celda vacía
        const findEmptyCell = (currentGrid: GridType):[number, number] => {
        for (let i = 0; i < currentGrid.length; i++) {
            for (let j = 0; j < currentGrid[i].length; j++) {
            if (currentGrid[i][j] === "") {
                return [i, j];
            }
            }
        }
        return [-1, -1];
    }

    //Valida si el tablero está resuelto
    const isSolved = (currentGrid: GridType): boolean => {
        for (let i = 0; i < currentGrid.length; i++) {
            for (let j = 0; j < currentGrid[i].length; j++) {
            if (currentGrid[i][j] !== i * 4 + j + 1 && currentGrid[i][j] !== "") {
                return false;
            }
            }
        }
        return true;
        }
    
        //Maneja el movimiento de las celdas
        const moveCell = (row: number, col: number): void => {
        const [emptyRow, emptyCol] = findEmptyCell(grid);
        const validMoves = getValidMoves(emptyRow, emptyCol);
        if (validMoves.some((move) => move[0] === row && move[1] === col)) {
            const newGrid = [...grid];
            newGrid[emptyRow][emptyCol] = newGrid[row][col];
            newGrid[row][col] = '';
            setGrid(newGrid);

            setTimeout(() => {
                if (isSolved(grid)) {
                    setShowWinner(true);
                }
            }, 100);
        }
    };

    const handleCloseClick = () => {
        setShowWinner(false);
    };


    
    return (
        <>
        {showWinner && (
            <PuzzleWinner
                onClose={handleCloseClick}
                textBox="¡Acertaste! Has resuelto el puzzle."
                textWin="Puedes jugar este Desafío cuando quieras, pero solo recibirás la recompensa al acertar una vez semanalmente."
            />
        )}
            <div className="w-full h-full flex flex-col items-start">
                <div className="flex flex-row items-center justify-center w-full h-1/6 border bg-slate-500 bg-opacity-90 text-slate-50 text-[5vh] font-extrabold">
                <h1>Desafío Claustro de la Imaginación</h1>
                </div>
                <div className="w-[69vw] h-5/6 flex justify-center items-center">
                <div className="w-[30vw] h-full flex flex-col justify-center items-center">
                    <div className="w-full h-1/3 flex items-end">
                    <DialogBoxPuzzleInstructions text="Toca las piezas que están alrededor de la pieza vacia hasta completa la imagen" />
                    </div>
                    <div className="w-full h-1/2 ">
                    <Frame_Puzzles_Guau />
                    </div>
                </div>
                <div className="w-[30vw] h-[30vw] grid grid-cols-4 border-[0.5vw] border-tablerobg">
                    {grid.map((row, rowIndex) =>
                    row.map((cell, collIndex) => (
                        <div
                        key={`${rowIndex}-${collIndex}`}
                        className={`w-full h-full border bg-gray-300 flex items-center justify-center text-xl font-bold cursor-pointer ${
                            cell === "" ? " bg-slate-500 opacity-90" : ""
                        }`}
                        onClick={() => moveCell(rowIndex, collIndex)}
                        >
                        {cell !== "" && (
                            <img
                            src={getImages(cell as number)}
                            alt={`Imagen ${cell}`}
                            />
                        )}
                        </div>
                    ))
                    )}
                </div>
                </div>
                <div className="w-full h-1/6 flex justify-center items-center">
                <div className="w-1/4 h-[8vh]">
                    <ButtonAssistant onClick={shuffle} text="Barajar" />
                </div>
                </div>
            </div>
        </>
    );
};