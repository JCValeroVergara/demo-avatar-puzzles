// se establece el rango de colores segun el valor de la variable

import { PropsOptions } from '../interfaces';

export const colorRangeHair = (props: PropsOptions) => {
    const { color } = props;
    let color2 = '';
    let color3 = '';
    let color4 = '';

    if (color === '#382A22') {
        color2 = '#261710';
        color3 = '#544235';
        color4 = '#261710';
    } else if (color === '#890606') {
        color2 = '#720000';
        color3 = '#B73535';
        color4 = '#510202';
    } else if (color === '#CC5A29') {
        color2 = '#C44B26';
        color3 = '#DD7B58';
        color4 = '#7A351C';
    } else if (color === '#E5BD7F') {
        color2 = '#D8AE6C';
        color3 = '#FFDDA6';
        color4 = '#936D3B';
    } else if (color === '#CCD2E0') {
        color2 = '#AEB4C1';
        color3 = '#E4E9F4';
        color4 = '#61656D';
    } else {
        color2 = '#29303a';
        color3 = '#29303a';
        color4 = '#29303a';
    }
    return { color2, color3, color4 };
};
