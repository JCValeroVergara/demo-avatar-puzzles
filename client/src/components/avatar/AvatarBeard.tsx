import { AvatarBeardProps } from '../../common';
import { F_Beard01, F_Beard02, F_Beard03, F_Beard04, F_Beard05, F_Beard06, F_Beard07, F_Beard08, F_Beard09, F_Beard10 } from '../../frames';


export const AvatarBeard = (props: AvatarBeardProps) => {
    const { beardType, colors } = props;
    return (
        <div className="w-full h-full absolute" style={{ zIndex: 31 }}>
            {beardType === 'Beard_01' && <F_Beard01 className="h-full w-full" color3={colors.color4} color4={colors.color4} />}
            {beardType === 'Beard_02' && <F_Beard02 className="h-full w-full" color3={colors.color4} color4={colors.color4} />}
            {beardType === 'Beard_03' && <F_Beard03 className="h-full w-full" color3={colors.color4} color4={colors.color4} />}
            {beardType === 'Beard_04' && <F_Beard04 className="h-full w-full" color3={colors.color4} color4={colors.color4} />}
            {beardType === 'Beard_05' && <F_Beard05 className="h-full w-full" color3={colors.color4} color4={colors.color4} />}
            {beardType === 'Beard_06' && <F_Beard06 className="h-full w-full" color3={colors.color4} color4={colors.color4} />}
            {beardType === 'Beard_07' && <F_Beard07 className="h-full w-full" color3={colors.color4} color4={colors.color4} />}
            {beardType === 'Beard_08' && <F_Beard08 className="h-full w-full" color3={colors.color4} color4={colors.color4} />}
            {beardType === 'Beard_09' && <F_Beard09 className="h-full w-full" color3={colors.color4} color4={colors.color4} />}
            {beardType === 'Beard_10' && <F_Beard10 className="h-full w-full" color3={colors.color4} color4={colors.color4} />}
        </div>
    );
};