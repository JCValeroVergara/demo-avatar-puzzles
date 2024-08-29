import { useEffect, useState } from 'react';
import { StarGif } from '../../icons';
import { PropsOptions } from '../../common/interfaces/components.interface';


export const StarsBonus = (props: PropsOptions) => {
    const { onClose, prize } = props;

    const [goToStars, setGoToStars] = useState(false);
    const [isClosed, setIsClosed] = useState(false);


    const handleClose = async () => {
        if (isClosed) return;
        if (onClose) {
            onClose();
        }
        setIsClosed(true);
        setGoToStars(true);
    };

    //Auto close
    useEffect(() => {
        const audio = new Audio('/Estrellita.mp3');
        audio.play();
    
        const timeoutId = setTimeout(() => {
        handleClose();
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);
    

    return (
        <section className="flex flex-wrap fixed top-0 left-0 z-50 w-full h-full items-center justify-center bg-modal bg-opacity-30">
        <div
            className={`flex flex-col flex-wrap w-[30vw] h-[30vw] items-center justify-center ${
            goToStars
                ? 'animate-jump-out'
                : 'animate-jump-in animate-duration-[1200ms] animate-delay-300 animate-ease-out animate-alternate'
            }`}
        >
            <div className="w-full h-full relative">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <button
                        className="w-4/5 h-4/5 text-[#c98711] text-[6vh] font-bold z-20"
                        onClick={handleClose}
                        >
                        <div className='trasform translate-y-[1vw]'>+{' '}{prize}</div>
                    </button>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                        <StarGif />
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};
