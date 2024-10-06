import { SVGProps } from '../../common/interfaces';

export const F_Shirt_01 = (props: SVGProps) => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name={1}
      viewBox="0 0 680 855"
      {...otherProps}
    >
      <path
        d="M387.95 285.92c-3.5-1.78-11.98-4.87-11.98-4.87s-7.03 28.37-24.9 27.83l-27.16-.05c-15.74-.43-22.91-27.69-22.91-27.69-3.98 1.5-13.81 5.47-15.13 6.41-1.23 24.87.49 68.65-7.84 82.77 0 7.42-.02 54.74-2.9 88.99l125.77-.09s-.62-31.89-.68-33.36c-.26-6.55.46-48.47.46-55.54-8.33-14.12-11.49-59.52-12.72-84.39Z"
        style={{
          fill: color,
          strokeWidth: 0,
        }}
      />
    </svg>
  );
};
