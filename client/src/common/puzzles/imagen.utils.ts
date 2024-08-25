import R1 from '../../assets/puzzle_01/R1.png';
import R2 from '../../assets/puzzle_01/R2.png';
import R3 from '../../assets/puzzle_01/R3.png';
import R4 from '../../assets/puzzle_01/R4.png';
import R5 from '../../assets/puzzle_01/R5.png';
import R6 from '../../assets/puzzle_01/R6.png';
import R7 from '../../assets/puzzle_01/R7.png';
import R8 from '../../assets/puzzle_01/R8.png';
import R9 from '../../assets/puzzle_01/R9.png';
import R10 from '../../assets/puzzle_01/R10.png';
import R11 from '../../assets/puzzle_01/R11.png';
import R12 from '../../assets/puzzle_01/R12.png';
import R13 from '../../assets/puzzle_01/R13.png';
import R14 from '../../assets/puzzle_01/R14.png';
import R15 from '../../assets/puzzle_01/R15.png';

export const getImages = (cell:number):string => {
    switch (cell) {
        case 1:
            return R1;
        case 2:
            return R2;
        case 3:
            return R3;
        case 4:
            return R4;
        case 5:
            return R5;
        case 6:
            return R6;
        case 7:
            return R7;
        case 8:
            return R8;
        case 9:
            return R9;
        case 10:
            return R10;
        case 11:
            return R11;
        case 12:
            return R12;
        case 13:
            return R13;
        case 14:
            return R14;
        case 15:
            return R15;
        default:
            return '';
    }
};