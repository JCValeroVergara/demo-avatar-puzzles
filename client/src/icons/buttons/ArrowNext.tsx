import { SVGProps } from '../../common/interfaces';


export const ArrowNext = (props: SVGProps) => {
  const { color, className, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Capa 2"
      viewBox="0 0 50 50"
      className={className}
      fill={color || '#fff'}
      {...otherProps}
    >
      <g data-name={1}>
        <path
          d="m43.62 26.65-8.28 8.28c-.46.46-1.05.68-1.65.68s-1.2-.23-1.65-.68c-.91-.91-.91-2.39 0-3.3l4.29-4.29H9.26c-1.29 0-2.34-1.05-2.34-2.34s1.05-2.34 2.34-2.34h27.07l-4.29-4.29c-.91-.91-.91-2.39 0-3.3.91-.91 2.39-.91 3.3 0l8.28 8.28c.91.91.91 2.39 0 3.3Z"
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
