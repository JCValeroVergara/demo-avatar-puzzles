import { SVGProps } from '../../common/interfaces';

export const F_Pant_01 = (props: SVGProps) => {
  const { color, color2, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name={1}
      viewBox="0 0 680 855"
      {...otherProps}
    >
      <path
        d="M403.88 486.18c-1.35-16.31-3.06-30.86-3.06-30.86H275.63s-2.47 19.33-3.82 35.65c-1.91 23.04-3.87 153.36-1.16 280.25h31.75c14.31 0 20.68-.35 20.68-.35l11.58-243.97h4.78l11.58 243.97s6.37.35 20.68.35 33.58-.35 33.58-.35c5.53-125.04.51-261.65-1.4-284.69Z"
        style={{
          fill: color,
          strokeWidth: 0,
        }}
      />
      <path
        d="M340.04 526.68h-6.19l-12.98-6.06a1.144 1.144 0 0 1 .97-2.07l12.52 5.85h5.04l12.29-7.36a1.14 1.14 0 0 1 1.57.39c.33.54.15 1.25-.39 1.57l-12.83 7.68Z"
        style={{
          strokeWidth: 0,
          fill: color2,
        }}
      />
    </svg>
  );
};
