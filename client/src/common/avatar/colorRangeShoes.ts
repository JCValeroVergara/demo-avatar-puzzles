// se establece el rango de colores segun el valor de la variable

import { PropsOptions } from '../interfaces';

export const colorRangeShoes = (props: PropsOptions) => {
    const { color } = props;
    let color2;
    let color3;
    let color4;
    let color5;

    if (color === '#E4E4EA') {
        color2 = '#FFFFFF';
        color3 = '#A8A8A8';
        color4 = '#6E6E6E';
        color5 = '#1B1B1B';
    } else if (color === '#FFFFFF') {
        color2 = '#E4E4EA';
        color3 = '#FFFFFF';
        color4 = '#A8A8A8';
        color5 = '#1B1B1B';
    } else if (color === '#255D8C') {
        color2 = '#FFFFFF';
        color3 = '#255D8C';
        color4 = '#0E3B67';
        color5 = '#1B1B1B';
    } else if (color === '#A51717') {
        color2 = '#FFFFFF';
        color3 = '#A51717';
        color4 = '#741717';
        color5 = '#1B1B1B';
    } else if (color === '#353535') {
        color2 = '#FFFFFF';
        color3 = '#353535';
        color4 = '#1B1B1B';
        color5 = '#1B1B1B';
    } else if (color === '#AF6454') {
        color2 = '#FFFFFF';
        color3 = '#AF6454';
        color4 = '#7C514A';
        color5 = '#1B1B1B';
    } else {
        color2 = '#FFFFFF';
        color3 = '#A8A8A8';
        color4 = '#6E6E6E';
        color5 = '#1B1B1B';
    }
    return { color2, color3, color4, color5 };
    };