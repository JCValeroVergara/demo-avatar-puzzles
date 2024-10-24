import { Guau_04 } from '../../icons';
import { AvatarContainer } from './AvatarContainer';

export const FrameAvatar = () => { 
    return (
        <section className="w-[30vw] h-[25vh]">
        <div className="relative w-[30vw] h-[25vh]">
            <div className="absolute -top-[45vh] md:-top-[48.9vh] -left-[8vw] right-0 w-[100%] h-[300%]">
            <AvatarContainer />
            </div>
            <div className="absolute -top-[0.9vh] md:-top-[0.2vh] left-[8vw] right-0 w-[70%] h-[100%]">
                <Guau_04 />
            </div>
        </div>
        </section>
    );
};