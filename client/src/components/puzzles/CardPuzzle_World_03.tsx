import { Circle_Puzzle_03_01, Circle_Puzzle_03_02, Circle_Puzzle_03_03, Circle_Puzzle_03_04, Circle_Puzzle_03_05, Circle_Puzzle_03_06, Circle_Puzzle_03_07, Square_Puzzle_03_01, Square_Puzzle_03_02, Square_Puzzle_03_03, Square_Puzzle_03_04, Square_Puzzle_03_05, Square_Puzzle_03_06, Square_Puzzle_03_07, Triangle_Puzzle_03_01, Triangle_Puzzle_03_02, Triangle_Puzzle_03_03, Triangle_Puzzle_03_04, Triangle_Puzzle_03_05, Triangle_Puzzle_03_06, Triangle_Puzzle_03_07, Objet_Puzzle_03_01, Objet_Puzzle_03_02, Objet_Puzzle_03_03, Objet_Puzzle_03_04, Objet_Puzzle_03_05, Objet_Puzzle_03_06, Objet_Puzzle_03_07 } from "../../icons";
import { PropsOptions } from "../../common/interfaces/components.interface";
import { SVGProps } from "../../common/interfaces/SVgProps.interface";



const componentMap: {
    [key: string]: (props: SVGProps) => JSX.Element;
    } = {
    'Circle_1': Circle_Puzzle_03_01,
    'Circle_2': Circle_Puzzle_03_02,
    'Circle_3': Circle_Puzzle_03_03,
    'Circle_4': Circle_Puzzle_03_04,
    'Circle_5': Circle_Puzzle_03_05,
    'Circle_6': Circle_Puzzle_03_06,
    'Circle_7': Circle_Puzzle_03_07,
    'Square_1': Square_Puzzle_03_01,
    'Square_2': Square_Puzzle_03_02,
    'Square_3': Square_Puzzle_03_03,
    'Square_4': Square_Puzzle_03_04,
    'Square_5': Square_Puzzle_03_05,
    'Square_6': Square_Puzzle_03_06,
    'Square_7': Square_Puzzle_03_07,
    'Triangle_1': Triangle_Puzzle_03_01,
    'Triangle_2': Triangle_Puzzle_03_02,
    'Triangle_3': Triangle_Puzzle_03_03,
    'Triangle_4': Triangle_Puzzle_03_04,
    'Triangle_5': Triangle_Puzzle_03_05,
    'Triangle_6': Triangle_Puzzle_03_06,
    'Triangle_7': Triangle_Puzzle_03_07,
    'Objet_1': Objet_Puzzle_03_01,
    'Objet_2': Objet_Puzzle_03_02,
    'Objet_3': Objet_Puzzle_03_03,
    'Objet_4': Objet_Puzzle_03_04,
    'Objet_5': Objet_Puzzle_03_05,
    'Objet_6': Objet_Puzzle_03_06,
    'Objet_7': Objet_Puzzle_03_07,
};

export const CardPuzzle_World_03 = (props: PropsOptions) => {
    const { cell, isSelected, onClick } = props;
    if (cell === undefined) {
        // Handle the case where cell is undefined
        return null; // Or render a placeholder component
    }
    const Icon = componentMap[cell];

    return (
        <div
        className={`w-full h-full flex items-center justify-center rounded-[0.3vw] text-xl font-bold cursor-pointer ${
            isSelected ? 'ring-[0.5vw] ring-primary' : ''
        }`}
        onClick={onClick}
        >
        <Icon />
        </div>
    );
}