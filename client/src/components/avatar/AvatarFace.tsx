import { AvatarFaceProps } from '../../common';
import { Face, Face_03 } from '../../frames';


export const AvatarFace = (props: AvatarFaceProps) => {
    const { face_3, face_4, silhoutte } = props;
    return (
        <div className="w-full h-full absolute" style={{ zIndex: 6 }}>
            {silhoutte === 'Skin_03' ? <Face_03 className="h-full w-full" color3={face_3} color4={face_4} /> : <Face className="h-full w-full" color3={face_3} color4={face_4} />}
        </div>
    );
};