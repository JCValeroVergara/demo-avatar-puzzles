// se establece el rango de colores segun el valor de la variable

import { PropsOptions } from '../interfaces';

export const colorRangeAccesories = (props: PropsOptions) => {
    const { color } = props;
    let color2;
    let color3;
    let color4;
    let color5;
    let color6;
    let color7;
    let color8;
    
    if (color === '#e5a74e') {
        color2 = '#e5a74e';
        color3 = '#ffca83';
        color4 = '#efb05e';
        color5 = '#d89d4e';
        color6 = '#ffffff';
        color7 = '#353535';
        color8 = '#c68a3c';
    } else if (color === '#353535') {
        color2 = '#353535';
        color3 = '#757575';
        color4 = '#353535';
        color5 = '#353535';
        color6 = '#ffffff';
        color7 = '#353535';
        color8 = '#515151';
    }
    else if (color === '#255d8c') {
        color2 = '#255d8c';
        color3 = '#353535';
        color4 = '#3579a8';
        color5 = '#305b72';
        color6 = '#ffffff';
        color7 = '#133a54';
        color8 = '#000000';
    }
    else if (color === '#a51717') {
        color2 = '#a51717';
        color3 = '#ffffff';
        color4 = '#ba2a2a';
        color5 = '#8c1919';
        color6 = '#ffffff';
        color7 = '#353535';
        color8 = '#e2e2e2';
    }
    else if (color === '#757575') {
        color2 = '#757575';
        color3 = '#9b9b9b';
        color4 = '#8e8e8e';
        color5 = '#686868';
        color6 = '#ffffff';
        color7 = '#b78f8f';
        color8 = '#8c8c8c';
    }
    else if (color === '#ec2b7b') {
        color2 = '#ec2b7b';
        color3 = '#f44795';
        color4 = '#ef60a1';
        color5 = '#dd1771';
        color6 = '#ffffff';
        color7 = '#353535';
        color8 = '#d8297a';
    }
    else {
        color2 = '#353535';
        color3 = '#757575';
        color4 = '#353535';
        color5 = '#353535';
        color6 = '#ffffff';
        color7 = '#353535';
        color8 = '#515151';
    }
    return { color2, color3, color4, color5, color6, color7, color8 } ;
}