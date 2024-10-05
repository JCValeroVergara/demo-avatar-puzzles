import { SVGProps } from '../../common/interfaces';

export const ArrowPrevious = (props: SVGProps) => {
  const { className, color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Capa 2"
      viewBox="0 0 50 50"
      className={className}
      fill={color}
      {...otherProps}
    >
      <g data-name={1}>
        <path
          d="m7.75 23.35 8.28-8.28c.46-.46 1.05-.68 1.65-.68s1.2.23 1.65.68c.91.91.91 2.39 0 3.3l-4.29 4.29h27.07c1.29 0 2.34 1.05 2.34 2.34s-1.05 2.34-2.34 2.34H15.04l4.29 4.29c.91.91.91 2.39 0 3.3-.91.91-2.39.91-3.3 0l-8.28-8.28c-.91-.91-.91-2.39 0-3.3Z"
          style={{
            fill: color || '#fff',
            strokeWidth: 0,
          }}
        />
        <path
          d="M0 0h50v50H0z"
          style={{
            strokeWidth: 0,
            fill: 'none',
          }}
        />
      </g>
    </svg>
  );
};

