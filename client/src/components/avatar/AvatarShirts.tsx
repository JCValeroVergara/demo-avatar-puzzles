import { AvatarShirtsProps } from '../../common';
import { F_Shirt_01, F_Shirt_02, F_Shirt_03, F_Shirt_04, F_Shirt_05, F_Shirt_06_S2, F_Shirt_07_S2, F_Shirt_08_S2, F_Shirt_09_S2, F_Shirt_10_S2, F_Shirt_11_S3, F_Shirt_12_S3, F_Shirt_13_S3, F_Shirt_14_S3, F_Shirt_15_S3 } from '../../frames';

type Silhoutte = 'Skin_01' | 'Skin_02' | 'Skin_03';

export const AvatarShirts = (props: AvatarShirtsProps) => {
    const { shirt, colorShirt, colorsShirt, silhoutte } = props;

    const Silhoutte: Silhoutte = silhoutte as Silhoutte || 'Skin_01';

    const groupsShirt = {
        Skin_01: [
        { id: 'Shirt_01', component: <F_Shirt_01 className="h-full w-full" color={colorShirt} /> },
        { id: 'Shirt_02', component: <F_Shirt_02 className="h-full w-full" color={colorsShirt.color2} color2={colorsShirt.color3} /> },
        { id: 'Shirt_03', component: <F_Shirt_03 className="h-full w-full" color={colorShirt} color2={colorsShirt.color4} /> },
        { id: 'Shirt_04', component: <F_Shirt_04 className="h-full w-full" color={colorShirt} color2={colorsShirt.color6} /> },
        { id: 'Shirt_05', component: <F_Shirt_05 className="h-full w-full" color={colorsShirt.color7} color2={colorsShirt.color8} color3={colorsShirt.color9} /> },
        ],

        Skin_02: [
        { id: 'Shirt_01', component: <F_Shirt_06_S2 className="h-full w-full" color={colorShirt} /> },
        { id: 'Shirt_02', component: <F_Shirt_07_S2 className="h-full w-full" color={colorsShirt.color2} color2={colorsShirt.color3} /> },
        { id: 'Shirt_03', component: <F_Shirt_08_S2 className="h-full w-full" color={colorShirt} color2={colorsShirt.color4} /> },
        { id: 'Shirt_04', component: <F_Shirt_09_S2 className="h-full w-full" color={colorShirt} color2={colorsShirt.color6} /> },
        { id: 'Shirt_05', component: <F_Shirt_10_S2 className="h-full w-full" color={colorsShirt.color7} color2={colorsShirt.color8} color3={colorsShirt.color9} /> },
        ],
        Skin_03: [
        { id: 'Shirt_01', component: <F_Shirt_11_S3 className="h-full w-full" color={colorShirt} /> },
        { id: 'Shirt_02', component: <F_Shirt_12_S3 className="h-full w-full" color={colorsShirt.color2} color2={colorsShirt.color3} /> },
        { id: 'Shirt_03', component: <F_Shirt_13_S3 className="h-full w-full" color={colorShirt} color2={colorsShirt.color4} /> },
        { id: 'Shirt_04', component: <F_Shirt_14_S3 className="h-full w-full" color={colorShirt} color2={colorsShirt.color6} /> },
        { id: 'Shirt_05', component: <F_Shirt_15_S3 className="h-full w-full" color={colorsShirt.color7} color2={colorsShirt.color8} color3={colorsShirt.color9} /> },
        ],
    };

    //Toma el grupo de camisas segun la silueta
    const shirtGroup = groupsShirt[Silhoutte];

    //Toma la camisa segun la seleccion
    const shirtSelected = shirtGroup.find(item => item.id === shirt);

    return (
        <div className="w-full h-full absolute" style={{ zIndex: 25 }}>
        {shirtSelected ? shirtSelected.component : null}
        </div>
    );
};