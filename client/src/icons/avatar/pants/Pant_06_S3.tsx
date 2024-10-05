import React from 'react';

const Pant_06_S3  = ({ color, color2, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className='w-full h-full'
      data-name="Capa 2"
      viewBox="0 0 136 138"
      {...props}
    >
      <path
        d="M123 138H13a13 13 0 0 1-13-13V13A13 13 0 0 1 13 0h110a13 13 0 0 1 13 13v112a13 13 0 0 1-13 13ZM13 2A11 11 0 0 0 2 13v112a11 11 0 0 0 11 11h110a11 11 0 0 0 11-11V13a11 11 0 0 0-11-11Z"
        style={{
          fill: '#b2bed3',
        }}
      />
      <path
        d="M116.47 42.38c-1-11.33-1.63-21.61-1.63-21.61h-96.4s-.58 13.45-1.57 24.79c-1.4 16-1.28 18.65-4.91 83.6h52.09l.51-54.94h3.49l3.25 54.25s10.13.69 20.6.69 29.38-2.16 29.38-2.16c-1.65-67.7-3.41-68.6-4.81-84.62Z"
        style={{
          fill: color,
        }}
      />
      <path
        d="M68.5 74.56H64l-9.5-4.07a.75.75 0 0 1-.41-1 .88.88 0 0 1 1.12-.37L64.34 73H68l9-4.94a.88.88 0 0 1 1.15.26.74.74 0 0 1-.29 1.06Z"
        style={{
          fill: color2,
        }}
      />
    </svg>
  );
};

export default Pant_06_S3;