
import { Box_Circle_01, Box_Circle_01_Open, Box_Square_01, Box_Square_01_Open, Box_Triangle_01, Box_Triangle_01_Open } from '../../icons';
import { PropsOptions } from '../../common/interfaces/components.interface';

export const BoxContainer_Puzzle_03 = ( props: PropsOptions) => {
    const { selection } = props

    return (
        <div className='w-full h-full flex flex-row'>
        <div className="w-1/3 h-full">
            {selection === 'circles' ? <Box_Circle_01_Open /> : <Box_Circle_01 />}
        </div>
        <div className="w-1/3 h-full">
            {selection === 'squares' ? <Box_Square_01_Open /> : <Box_Square_01/>}
        </div>
        <div className="w-1/3 h-full">
            {selection === 'triangles' ? <Box_Triangle_01_Open /> : <Box_Triangle_01 />}
        </div>
        </div>
    );
};
