
import { AvatarShoesProps } from '../../common';
import { F_Shoes_01, F_Shoes_02, F_Shoes_03, F_Shoes_04, F_Shoes_05, F_Shoes_06_S2, F_Shoes_07_S2, F_Shoes_08_S2, F_Shoes_09_S2, F_Shoes_10_S2, F_Shoes_11_S3, F_Shoes_12_S3, F_Shoes_13_S3, F_Shoes_14_S3, F_Shoes_15_S3 } from '../../frames';

type Silhoutte = 'Skin_01' | 'Skin_02' | 'Skin_03';

export const AvatarShoes = (props: AvatarShoesProps) => {
    const { shoes, colorsShoes, colorShoes, colorSkin, colorSkinLine, silhoutte } = props;

    const Silhoutte: Silhoutte = silhoutte as Silhoutte || 'Skin_01';

    const groupsShoes: Record<Silhoutte, { id: string;  component: JSX.Element }[]> = {
        Skin_01: [
        { id: 'Shoes_01', component: <F_Shoes_01 className="h-full w-full" color={colorsShoes.color2} color2={colorShoes} /> },
        { id: 'Shoes_02', component: <F_Shoes_02 className="h-full w-full" color={colorShoes} color2={colorsShoes.color2} /> },
        { id: 'Shoes_03', component: <F_Shoes_03 className="h-full w-full" color={colorsShoes.color3} color2={colorsShoes.color4} /> },
        { id: 'Shoes_04', component: <F_Shoes_04 className="h-full w-full" color={colorsShoes.color3} color2={colorsShoes.color5} /> },
        { id: 'Shoes_05', component: <F_Shoes_05 className="h-full w-full" color={colorShoes} color2={colorsShoes.color5} color3={colorSkin} color4={colorSkinLine} /> },
        ],
        Skin_02: [
        { id: 'Shoes_01', component: <F_Shoes_06_S2 className="h-full w-full" color={colorsShoes.color2} color2={colorShoes} /> },
        { id: 'Shoes_02', component: <F_Shoes_07_S2 className="h-full w-full" color={colorShoes} color2={colorsShoes.color2} /> },
        { id: 'Shoes_03', component: <F_Shoes_08_S2 className="h-full w-full" color={colorsShoes.color3} color2={colorsShoes.color4} /> },
        { id: 'Shoes_04', component: <F_Shoes_09_S2 className="h-full w-full" color={colorsShoes.color3} color2={colorsShoes.color5} /> },
        { id: 'Shoes_05', component: <F_Shoes_10_S2 className="h-full w-full" color={colorShoes} color2={colorsShoes.color5} color3={colorSkin} color4={colorSkinLine} /> },
        ],
        Skin_03: [
        { id: 'Shoes_01', component: <F_Shoes_11_S3 className="h-full w-full" color={colorsShoes.color2} color2={colorShoes} /> },
        { id: 'Shoes_02', component: <F_Shoes_12_S3 className="h-full w-full" color={colorShoes} color2={colorsShoes.color2} /> },
        { id: 'Shoes_03', component: <F_Shoes_13_S3 className="h-full w-full" color={colorsShoes.color3} color2={colorsShoes.color4} /> },
        { id: 'Shoes_04', component: <F_Shoes_14_S3 className="h-full w-full" color={colorsShoes.color3} color2={colorsShoes.color5} /> },
        { id: 'Shoes_05', component: <F_Shoes_15_S3 className="h-full w-full" color={colorShoes} color2={colorsShoes.color5} color3={colorSkin} color4={colorSkinLine} /> },
        ],
    };

    //Toma el grupo de zapatos segun la silueta
    const shoesGroup = groupsShoes[Silhoutte];

    //Toma los zapatos segun la seleccion
    const shoesSelected = shoesGroup.find(item => item.id === shoes);

    return (
        <div className="w-full h-full absolute" style={{ zIndex: 15 }}>
        {shoesSelected ? shoesSelected.component : null}
        </div>
    );
};