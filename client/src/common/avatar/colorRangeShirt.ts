// se establece el rango de colores segun el valor de la variable

import { PropsOptions } from '../interfaces';

export const colorRangeShirt = (props: PropsOptions) => {
    const { color } = props;
    let color2;
    let color3;
    let color4;
    let color6;
    let color7;
    let color8;
    let color9;

    if (color === '#353535') {
        color2 = '#353535';
        color3 = '#353535';
        color4 = '#1B1B1B';
        color6 = '#1B1B1B';
        color7 = '#FFFFFF';
        color8 = '#1B1B1B';
        color9 = '#353535';
    } else if (color === '#FFFFFF') {
        color2 = '#FFFFFF';
        color3 = '#353535';
        color4 = '#E0E0E0';
        color6 = '#E0E0E0';
        color7 = '#353535';
        color8 = '#C1C1C1';
        color9 = '#E0E0E0';
    } else if (color === '#EC2B7B') {
        color2 = '#FFFFFF';
        color3 = '#EC2B7B';
        color4 = '#BA2569';
        color6 = '#BA2569';
        color7 = '#EC2B7B';
        color8 = '#C1C1C1';
        color9 = '#E0E0E0';
    } else if (color === '#F2AA19') {
        color2 = '#FFF4E1';
        color3 = '#F2AA19';
        color4 = '#C98712';
        color6 = '#C98712';
        color7 = '#353535';
        color8 = '#C98712';
        color9 = '#F2AA19';
    } else if (color === '#124E89') {
        color2 = '#124E89';
        color3 = '#FFFFFF';
        color4 = '#0E3B67';
        color6 = '#0E3B67';
        color7 = '#F4F0ED';
        color8 = '#0E3B67';
        color9 = '#124E89';
    } else if (color === '#AF6454') {
        color2 = '#EADEDC';
        color3 = '#AF6454';
        color4 = '#CC7A65';
        color6 = '#995247';
        color7 = '#F4F0ED';
        color8 = '#AF6454';
        color9 = '#CC7A65';
    } else {
        color2 = '#7384A0';
        color3 = '#FFFFFF';
        color4 = '#1B1B1B';
        color6 = '#1B1B1B';
        color7 = '#FFFFFF';
        color8 = '#1B1B1B';
        color9 = '#7384A0';
    }
    return { color2, color3, color4, color6, color7, color8, color9 };
};