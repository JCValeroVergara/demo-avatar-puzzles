import { AvatarBrownChildrenProps } from '../../common';
import { EyesBrown_03 } from '../../frames';

export const AvatarBrownChild = (props: AvatarBrownChildrenProps) => {
    const { color } = props;
    return (
        <div className="w-full h-full absolute" style={{ zIndex: 4 }}>
            <EyesBrown_03 className="h-full w-full" color4={color} />
        </div>
    );
};