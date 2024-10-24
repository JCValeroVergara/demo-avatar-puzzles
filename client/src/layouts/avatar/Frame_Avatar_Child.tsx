import { AvatarContainerChild } from './AvatarContainerChild';



export const Frame_Avatar_Child = () => {
    return (
        <section className="w-[30vw] h-[25vh]">
            <div className="relative w-[30vw] h-[25vh]">
                <div className="absolute -top-[48.9vh] md:-top-[48.9vh] -left-[8vw] right-0 w-[100%] h-[300%]">
                    <AvatarContainerChild />
                </div>
            </div>
        </section>
    );
}

