import { AvatarSkinsProps } from '../../common';
import { Skin_01, Skin_02, Skin_03, SkinLine_01, SkinLine_02, SkinLine_03 } from '../../frames';


export const AvatarSkins = (props: AvatarSkinsProps) => {

    const { skinColor, skinLine, silhoutte } = props;

    return (
        <div>
            <div className="w-full h-full absolute" style={{ zIndex: 2 }}>
                {silhoutte === 'Skin_01' && <Skin_01 className="h-full w-full" color={skinColor} />}
                {silhoutte === 'Skin_02' && <Skin_02 className="h-full w-full" color={skinColor} />}
                {silhoutte === 'Skin_03' && <Skin_03 className="h-full w-full" color={skinColor} />}
            </div>
            <div className="w-full h-full absolute" style={{ zIndex: 3 }}>
                {silhoutte === 'Skin_01' && <SkinLine_01 className="h-full w-full" color={skinLine} />}
                {silhoutte === 'Skin_02' && <SkinLine_02 className="h-full w-full" color={skinLine} />}
                {silhoutte === 'Skin_03' && <SkinLine_03 className="h-full w-full" color={skinLine} />}
            </div>
        </div>
    );
};