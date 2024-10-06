import { useState } from 'react';
import { ArrowPrevious } from '../../icons';
import { PropsOptions } from '../../common/interfaces';

export const ButtonPrev = (props: PropsOptions) => {
  const { onClick } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePrevClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      type="button"
      className="w-[4vw] h-[2vw] border-[0.15vw] border-tableroborder rounded-[0.3vw] bg-tablero hover:bg-primary hover:border-borderbutton focus:bg-borderbutton focus:border-primary font-semibold flex items-center justify-center"
      onClick={handlePrevClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ArrowPrevious
        className="w-[3vw] h-[2.6vw]"
        color={isHovered ? '#ffffff' : '#ffffff'}
      />
    </button>
  );
};