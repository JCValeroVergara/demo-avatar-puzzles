import React from 'react';

const Eyes = ({EyesColor, props}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="_1"
      data-name={1}
      className='h-full w-full'
      viewBox="0 0 680 855"
      {...props}
    >
      <defs>
        <style>{`.cls-1{fill:${EyesColor};stroke-width:0}`}</style>
      </defs>
      <ellipse cx={315.25} cy={197.46} rx={4.83} ry={5.76} fill={EyesColor} />
      <ellipse cx={356.73} cy={197.46} rx={4.83} ry={5.76}  fill={EyesColor}/>
    </svg>
  );
}

export default Eyes;
