import { AvatarPantsProps } from '../../common';
import { F_Pant_01, F_Pant_02, F_Pant_03, F_Pant_04, F_Pant_05, F_Pant_06_S2, F_Pant_07_S2, F_Pant_08_S2, F_Pant_09_S2, F_Pant_10_S2, F_Pant_11_S3, F_Pant_12_S3, F_Pant_13_S3, F_Pant_14_S3, F_Pant_15_S3 } from '../../frames';

type Silhoutte = 'Skin_01' | 'Skin_02' | 'Skin_03';

export const AvatarPants = (props: AvatarPantsProps) => {

    const { pants, colorPants, colorsPants, silhoutte } = props;

    const Silhoutte: Silhoutte = silhoutte as Silhoutte || 'Skin_01';

    const groupsPants = {
        Skin_01: [
        { id: 'Pant_01', component: <F_Pant_01 className="h-full w-full" color={colorPants} color2={colorsPants.color2} /> },
        { id: 'Pant_02', component: <F_Pant_02 className="h-full w-full" color={colorPants} color2={colorsPants.color2} color3={colorsPants.color3} /> },
        { id: 'Pant_03', component: <F_Pant_03 className="h-full w-full" color={colorPants} color2={colorsPants.color4} color3={colorsPants.color2} color4={colorsPants.color5} /> },
        { id: 'Pant_04', component: <F_Pant_04 className="h-full w-full" color={colorPants} color2={colorsPants.color2} /> },
        { id: 'Pant_05', component: <F_Pant_05 className="h-full w-full" color={colorPants} color2={colorsPants.color2} /> },
        ],
        Skin_02: [
        { id: 'Pant_01', component: <F_Pant_06_S2 className="h-full w-full" color={colorPants} color2={colorsPants.color2} /> },
        { id: 'Pant_02', component: <F_Pant_07_S2 className="h-full w-full" color={colorPants} color2={colorsPants.color2} color3={colorsPants.color3} /> },
        { id: 'Pant_03', component: <F_Pant_08_S2 className="h-full w-full" color={colorPants} color2={colorsPants.color4} color3={colorsPants.color2} color4={colorsPants.color5} /> },
        { id: 'Pant_04', component: <F_Pant_09_S2 className="h-full w-full" color={colorPants} color2={colorsPants.color2} /> },
        { id: 'Pant_05', component: <F_Pant_10_S2 className="h-full w-full" color={colorPants} color2={colorsPants.color2} /> },
        ],
        Skin_03: [
        { id: 'Pant_01', component: <F_Pant_11_S3 className="h-full w-full" color={colorPants} color2={colorsPants.color2} /> },
        { id: 'Pant_02', component: <F_Pant_12_S3 className="h-full w-full" color={colorPants} color2={colorsPants.color2} color3={colorsPants.color3} /> },
        { id: 'Pant_03', component: <F_Pant_13_S3 className="h-full w-full" color={colorPants} color2={colorsPants.color4} color3={colorsPants.color2} color4={colorsPants.color5} /> },
        { id: 'Pant_04', component: <F_Pant_14_S3 className="h-full w-full" color={colorPants} color2={colorsPants.color2} /> },
        { id: 'Pant_05', component: <F_Pant_15_S3 className="h-full w-full" color={colorPants} color2={colorsPants.color2} /> },
        ],
    };

    //Toma el grupo de pantalones segun la silueta
    const pantGroup = groupsPants[Silhoutte];

    //Toma el pantalon segun la seleccion
    const pantSelected = pantGroup.find(item => item.id === pants);

    return (
        <div className="w-full h-full absolute" style={{ zIndex: 20 }}>
        {pantSelected ? pantSelected.component : null}
        </div>
    );
};