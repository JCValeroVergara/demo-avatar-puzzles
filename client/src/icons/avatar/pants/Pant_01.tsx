import React from 'react';

const Pant_01 = ({ color, color2, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Capa 2"
      className='w-full h-full'
      viewBox="0 0 136 138"
      {...props}
    >
      <g data-name={1}>
        <path
          d="M117.17 44.17c-1.04-12.51-2.35-23.68-2.35-23.68H18.78s-1.89 14.83-2.93 27.34c-.8 9.64-1.61 43.75-1.84 88.56h47.17l2.9-60.99h3.66l2.9 60.99h49.38c-.51-46.44-2.03-82.51-2.84-92.22Z"
          style={{
            fill: color,
            strokeWidth: 0,
          }}
        />
        <path
          d="M68.2 75.24h-4.75l-9.96-4.65a.876.876 0 0 1-.42-1.17c.21-.44.73-.63 1.17-.42l9.6 4.48h3.87l9.43-5.64c.42-.25.96-.11 1.21.3.25.42.11.96-.3 1.21l-9.85 5.89Z"
          style={{
            fill: color2,
            strokeWidth: 0,
          }}
        />
        <path
          d="M123 138H13c-7.17 0-13-5.83-13-13V13C0 5.83 5.83 0 13 0h110c7.17 0 13 5.83 13 13v112c0 7.17-5.83 13-13 13ZM13 2C6.93 2 2 6.93 2 13v112c0 6.07 4.93 11 11 11h110c6.07 0 11-4.93 11-11V13c0-6.07-4.93-11-11-11H13Z"
          style={{
            strokeWidth: 0,
            fill: '#b2bed3',
          }}
        />
      </g>
    </svg>
  );
};

export default Pant_01;