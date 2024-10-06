import { SVGProps } from '../../../common/interfaces';

export const Hair_01 = (props: SVGProps) => {
  const { color, color2, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 136 138"
      className="w-full h-full"
      {...otherProps}
    >
      <g fill="none" strokeMiterlimit="10">
        <path
          d="M103.09 65.72c-1.02-.27-2.07-.16-3.09.25-.04-22.13-4.48-39.52-31.77-39.52S36.75 43.9 36.19 66c-1.08-.47-2.2-.61-3.28-.32-3.63.96-7.16 6.28-5.69 11.85 1.47 5.57 7.38 9.29 11.01 8.33.12-.03.24-.08.36-.12 4.67 15.18 15.68 25.82 29.64 25.82s24.75-10.59 29.36-25.71c.06.02.12.05.18.06 3.63.96 9.54-2.76 11.01-8.33 1.47-5.57-2.06-10.89-5.69-11.85Z"
          fill="#fff"
          stroke="#6b768e"
          strokeWidth="1.52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M99.95 71.86c-1.02 22.16-13.82 39.69-31.73 39.69-13.65 0-24.49-10.18-29.33-24.84-.6-1.81-1.1-3.68-1.51-5.62-.32-1.53-.59-3.1-.79-4.7s-.34-3.35-.41-5.08"
          stroke="#7384a0"
          strokeWidth="1.85"
        />
        <path
          d="M30.39 73.79c.35-2.4 5.14-3.38 6.14 2.02M105.74 73.79c-.35-2.4-5.14-3.38-6.14 2.02"
          stroke="#7384a0"
          strokeWidth="1.85"
        />
        <ellipse cx="53.6" cy="70.37" rx="2.78" ry="3.45" fill="#7384a0" />
        <ellipse cx="83.71" cy="70.37" rx="2.78" ry="3.45" fill="#7384a0" />
        <path
          d="M68.75 71.87c-.65-.01-.78 1.54-.78 1.54s-.25 2.72-1.96 3.63c-.68.37-1.12 1.15-1.05 2.02.09 1.15 1.04 2.02 2.12 1.93.38-.03.71-.18 1-.39s1.49-.93 1.81-3c.27-1.75.22-5.71-1.13-5.74Z"
          fill="#7384a0"
        />
        <path
          d="M62.23 88.29s6.04 2.73 13.02 0"
          stroke="#7384a0"
          strokeWidth="1.85"
        />
        <path
          d="M57.57 59.56c-1.87-1.72-10.46-2.31-14 1.01M77.93 59.56c1.87-1.72 10.46-2.31 14 1.01"
          stroke={color2}
          strokeWidth="2.77"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          width="134"
          height="136"
          x="1"
          y="1"
          rx="12"
          ry="12"
          stroke="#b2bed3"
          strokeWidth="2"
          transform="rotate(180 68 69)"
        />
      </g>
    </svg>
  );
};

