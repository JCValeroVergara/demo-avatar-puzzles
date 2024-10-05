import React from 'react';

const Shirt_02 = ({ color2, color, ...props}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_2"
      className='w-full h-full'
      data-name="Capa 2"
      viewBox="0 0 136 138"
      {...props}
    >
      <defs>
        <style>{'.cls-3{stroke-width:0;fill:#353535}'}</style>
      </defs>
      <g id="_1" data-name={1}>
        <path
          d="M103.28 37.15c-5.72-4.56-20.67-8.56-20.67-8.56l-.57-.38.4.72s-2.74 9.04-13.28 9.06c-11.38.03-13.16-9-13.16-9l-.38-.1-4.73 1.12c-.13.03-.26.07-.39.11-1.72.56-14.45 4.81-19.81 9.06-5.2 4.13 4.63 37.23 6.42 43.08.18.59.25 1.19.2 1.8-.37 4.83-2.02 26.99-1.63 28.31 0 .01 0 .03.01.04.56 1.81 2.21 3.08 4.09 3.27l21.26 2.17c.24.02.48.03.71.02l35.11-1.55a4.895 4.895 0 0 0 4.23-2.83c.26-.56.5-1.12.64-1.56.43-1.38 1.25-46.73 1.36-53.14 0-.49.09-.97.24-1.43 1.02-3.14 4.91-16.24-.08-20.21Z"
          style={{
            fill: color,
            strokeWidth: 0,
          }}
        />
        <path
          d="M33.81 37.44c-.76-.3-5.8 1.57-8.48 10.28-2.65 8.59-8.58 32.91-8.26 33.42.36.57 20.21 3.69 20.26 3.34.2-1.52.26-15.76-.24-25.86-.53-10.86-1.9-20.63-3.28-21.17ZM111.3 45.98c-3.21-8.55-8.47-10-9.22-9.63-1.38.67-2.26 10.6-2.23 21.57.03 10.19.84 24.51 1.12 26.03.06.35 20.28-4.21 20.62-4.82.3-.54-7.11-24.69-10.29-33.15ZM80.76 28.37s-2.19 8.33-11.84 8.24c-10.45-.1-12.04-8.48-12.04-8.48l.43-.68c.33-.15-1.07.54-5.3 1.58.75 1.89 4.96 11.58 17.27 11.35 11.23-.21 15.53-8.08 16.79-10.84-4.02-1.1-5.9-2.05-5.9-2.05l.58.87Z"
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

export default Shirt_02;