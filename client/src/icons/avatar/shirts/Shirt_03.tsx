import React from 'react';

const Shirt_03 = ({ color,color2, ...props }) => {
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
        <style>{'.cls-2{stroke-width:0;fill:#232222}'}</style>
      </defs>
      <g id="_1" data-name={1}>
        <path
          d="M113.59 49.16s-2.26-7.72-11.62-10.68c-5.3-1.67-9.57-2.78-12.06-3.39-2.36-.87-7.24-2.67-9.54-4.12.8-.23 1.13-.4 1.13-.4.4 0 .76-.65.8-1.43l.37-6.58c.05-.81-.25-1.46-.65-1.46l-24.08.2c-.42 0-.77.68-.77 1.51v6.73c0 .8.34 1.44.75 1.44 0 0 .21.03.58.09-2.11 1.28-6.02 2.83-8.54 3.77-2.18.51-6.97 1.7-13.17 3.65-9.36 2.96-11.62 10.68-11.62 10.68-2.65 8.59-8.58 31.46-8.26 31.96.32.51 16.11 3.04 19.59 3.34-.01 10.2-.05 28.9-.12 30.12-.35 6.49 1.26 6.11 2.28 6.17h61.81c4.26-.62 2.56-23.6 2.12-36.33 4.03-.41 18.95-2.82 19.26-3.31.32-.51-5.61-23.37-8.26-31.96Z"
          style={{
            fill: color,
            strokeWidth: 0,
          }}
        />
        <path
          d="M40.73 63.06a.477.477 0 0 0-.6.32c-.02.05-.43 1.4-2.14 8.75-1.72 7.39-1.7 11.77-1.7 11.95 0 .26.22.48.48.48.27 0 .48-.22.48-.49 0-.04-.02-4.46 1.67-11.72 1.7-7.28 2.12-8.67 2.12-8.68a.477.477 0 0 0-.32-.6ZM101.6 72.13c-1.71-7.35-2.12-8.7-2.14-8.75-.08-.25-.35-.4-.6-.32s-.4.35-.32.6c0 .01.43 1.41 2.12 8.68 1.69 7.26 1.67 11.68 1.67 11.72 0 .27.21.48.48.49.26 0 .48-.21.48-.48 0-.18.02-4.56-1.7-11.95Z"
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
        <path
          d="M58.5 31.06c-.64.39-1.44.79-2.32 1.2 3.61 1.22 23.55.47 27.38.32-1.23-.54-2.37-1.1-3.18-1.61.52-.15.82-.27.98-.34l-.11-.07c-1.97 1.08-23.08.44-23.08.44h-.01c.09.02.2.04.33.06Z"
          fill={color2}
        />
      </g>
    </svg>
  );
};

export default Shirt_03;