// se establece el rango de colores segun el valor de la variable

import { PropsOptions } from '../interfaces';

export const colorRangeSkin = (props: PropsOptions) => {
    const { color } = props;
    let color2;
    let color3;
    let color4;
    if (color === '#FFDDCF') {
        color2 = '#EDBBAE';
        color3 = '#F4C7B8';
        color4 = '#E09377';
    } else if (color === '#FFCAA6') {
        color2 = '#D8996F';
        color3 = '#EFA18F';
        color4 = '#C46F51';
    } else if (color === '#D69E70') {
        color2 = '#AA6F43';
        color3 = '#D88A68';
        color4 = '#AF5B31';
    } else if (color === '#8E5732') {
        color2 = '#774625';
        color3 = '#7F342A';
        color4 = '#632B18';
    } else if (color === '#60301B') {
        color2 = '#4C2607';
        color3 = '#591A1A';
        color4 = '#3A1008';
    } else {
        color2 = '#7384A0';
        color3 = '#C0CFE2';
        color4 = '#7384A0';
    }
    return { color2, color3, color4 };
};
