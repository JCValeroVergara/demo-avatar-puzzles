import { SVGProps } from '../../common/interfaces';

export const F_Pant_06_S2 = (props: SVGProps) => {
  const { color, color2, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Capa 1"
      className="w-full h-full"
      viewBox="0 0 680 855"
      {...otherProps}
    >
      <path
        d="M422.19 503.59c-1.35-17.38-1-32.34-1-32.34h-175s-.37 13.13.07 30.55c1 40.34 13.12 151.38 15.83 286.57h37.79c12.51 0 14.05-.25 14.05-.25l21.22-245.92h3.13L356.49 788s-1.69.37 12.62.37 42.65-.37 42.65-.37c5.53-133.22 12.34-259.87 10.43-284.41Z"
        style={{
          fill: color,
        }}
      />
      <path
        d="M338.8 541.93h-6.18l-13-6.46a1.25 1.25 0 0 1-.55-1.62 1.11 1.11 0 0 1 1.52-.59l12.52 6.23h5l12.29-7.84a1.1 1.1 0 0 1 1.57.42 1.26 1.26 0 0 1-.39 1.67Z"
        style={{
          fill: color2,
        }}
      />
    </svg>
  );
};

