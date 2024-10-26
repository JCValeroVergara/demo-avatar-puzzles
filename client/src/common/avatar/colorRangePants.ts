// se establece el rango de colores segun el valor de la variable

import { PropsOptions } from '../interfaces';

export const colorRangePants = (props: PropsOptions) => {
    const { color } = props;
    let color2;
    let color3;
    let color4;
    let color5;

    if (color === '#6E6E6E') {
        color2 = '#A8A8A8';
        color3 = '#B9B9B9';
        color4 = '#1B1B1B';
        color5 = '#C9C9C9';
    } else if (color === '#1B1B1B') {
        color2 = '#353535';
        color3 = '#494949';
        color4 = '#7384A0';
        color5 = '#C9C9C9';
    } else if (color === '#71AEBC') {
        color2 = '#81BCCE';
        color3 = '#9AC9D8';
        color4 = '#563935';
        color5 = '#C9C9C9';
    } else if (color === '#0E3B67') {
        color2 = '#255D8C';
        color3 = '#517DA3';
        color4 = '#1B1B1B';
        color5 = '#C9C9C9';
    } else if (color === '#563935') {
        color2 = '#7C514A';
        color3 = '#78615D';
        color4 = '#1B1B1B';
        color5 = '#C9C9C9';
    } else if (color === '#A18676') {
        color2 = '#D7B39D';
        color3 = '#DFC2B1';
        color4 = '#563935';
        color5 = '#C9C9C9';
    } else {
        color2 = '#7A7A7A';
        color3 = '#B9B9B9';
        color4 = '#1B1B1B';
        color5 = '#C9C9C9';
    }
    return { color2, color3, color4, color5 };
};