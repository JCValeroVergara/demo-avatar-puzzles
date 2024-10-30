import { useContext } from 'react'
import { AvatarContext, ColorAccesory, ColorPants, colorRangeAccesories, colorRangeHair, colorRangePants, colorRangeShirt, colorRangeShoes, ColorShirt, ColorShoes, PropsOptions } from '../../common';
import { AvatarAccesories, AvatarBeard, AvatarEyes, AvatarFace, AvatarHair, AvatarPants, AvatarShirts, AvatarShoes, AvatarSkins } from '../../components';



export const Avatar = () => { 
    const context = useContext(AvatarContext)
    
    if (!context) {
        return <div>Error: AvatarContext no está disponible</div>;
    }
    
    const { avatarState} = context
    

    const avatar = avatarState.avatar
    const wardrobe = avatarState.wardrobe
    const Silhouette = avatar.skin
    const HairType = avatar.hairType
    const BeardType = avatar.beardType
    const Accesories = wardrobe.accessory
    const Shirt = wardrobe.shirts
    const Pants = wardrobe.pants
    const Shoes = wardrobe.shoes
    

    //Segundo color de cabello
    const color: PropsOptions = { color: avatar.hairColor };
    const colors = colorRangeHair(color);

    //Color de piel
    const skinColor = avatar.skinColor;
    const colorSkin = avatar.skinLine;

    //Color de Accesorios
    const accessoryColor: string = wardrobe.accessoryColor;
    const colorAccessory: ColorAccesory = colorRangeAccesories({ color:accessoryColor });

    //Color de zapatos
    const shoesColor: string = wardrobe.shoesColor;
    const colorShoes: ColorShoes = colorRangeShoes({ color:shoesColor });

    //Color de camisa
    const shirtColor: string =  wardrobe.shirtColor ;
    const colorShirt: ColorShirt = colorRangeShirt({ color:shirtColor });

    //Color de pantalones
    const pantsColor: string = wardrobe.pantsColor ;
    const colorPants: ColorPants = colorRangePants({ color:pantsColor });


    return (
        <div className='w-full h-full'>
            
            {/* Piel */}
            <AvatarSkins skinColor={skinColor} skinLine={colorSkin} silhoutte={Silhouette} />
                
            {/* Ojos */}
            <AvatarEyes eyeColor={avatar.eyeColor} silhoutte={Silhouette} />

            {/* Cara / Mejillas */}
            <AvatarFace face_3={avatar.face_3} face_4={avatar.face_4} silhoutte={Silhouette} />

            {/* //Barba */}{/* //las barbas solo se implementan para las siluetas 1 y 2 */}
            <AvatarBeard beardType={BeardType} colors={colors}/>

            {/* //Cabello */}
            <AvatarHair hairType={HairType} hairColor={avatar.hairColor} colors={colors} silhoutte={'Skin_01'} />

            {/* //Camisa */}
            <AvatarShirts shirt={Shirt} colorShirt={shirtColor} colorsShirt={colorShirt} silhoutte={Silhouette} />

            {/* //Pantalones */}
            <AvatarPants pants={Pants} colorPants={pantsColor} colorsPants={colorPants} silhoutte={Silhouette} />
            
            {/* Zapatos */}
            <AvatarShoes shoes={Shoes} colorsShoes={colorShoes} colorShoes={shoesColor} colorSkin={skinColor} colorSkinLine={colorSkin} silhoutte={Silhouette} />

            {/* Accesorios */}
            <AvatarAccesories accesories={Accesories} colorAccesory={accessoryColor} colorsAccesory={colorAccessory} silhoutte={Silhouette} />
        
        </div>
    )
}

