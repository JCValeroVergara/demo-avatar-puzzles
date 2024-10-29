import { PropsOptions } from '../../common';

export const LineDivision = (props: PropsOptions) => {
    const { content } = props;
    return (
        <div className="flex items-center w-full">
            <hr className="flex-grow border-[0.15vw] rounded-[0.5vw] border-gray-300" />
        <div className="mx-[2vw]">
            {typeof content === 'string' ? (
            <span className="text-white text-[2.8vh]">{content}</span>
            ) : (
            content
            )}
        </div>
            <hr className="flex-grow border-[0.15vw] rounded-[0.5vw] border-gray-300" />
        </div>
    );
};