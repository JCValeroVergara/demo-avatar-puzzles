import React from 'react';

const Shirt_01 = ({ color, ...props }) => {
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
          d="M89.74 29.11c-1.69-.86-5.78-2.35-5.78-2.35s-3.39 13.69-12.02 13.43l-13.11-.02c-7.6-.21-11.06-13.37-11.06-13.37-1.92.72-6.67 2.64-7.3 3.09-.59 12 .23 33.13-3.78 39.95 0 3.58 0 26.42-1.4 42.95l60.7-.04s-.3-15.39-.33-16.1c-.13-3.16.22-23.39.22-26.8-4.02-6.81-5.55-28.72-6.14-40.73Z"
          style={{
            fill: color,
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

export default Shirt_01;