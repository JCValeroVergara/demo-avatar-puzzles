import { AvatarEyesProps } from '../../common';
import { Eyes, Eyes_03 } from '../../frames';


export const AvatarEyes = (props: AvatarEyesProps ) => {
    const { eyeColor, silhoutte } = props;
    return (
        <div className="w-full h-full absolute" style={{ zIndex: 4 }}>
            {silhoutte === 'Skin_03' ? <Eyes_03 className="h-full w-full" color={eyeColor} /> : <Eyes className="h-full w-full" color={eyeColor} />}
        </div>
    );
};