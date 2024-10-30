import { AvatarBg } from '../../frames';

export const AvatarBackground = () => {
    return (
        <div className="w-full h-full absolute" style={{ zIndex: 1 }}>
            <AvatarBg className="h-full w-full" />
        </div>
    );
};