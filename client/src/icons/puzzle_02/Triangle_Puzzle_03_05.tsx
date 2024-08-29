import { SVGProps } from "../../common/interfaces/SVgProps.interface";

export const Triangle_Puzzle_03_05 = (props:SVGProps) => {
  const { ...otherProps} = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      viewBox="0 2 192 125"
      {...otherProps}
    >
      <defs>
        <style>
          {
            '.cls-4,.cls-5{stroke-width:0}.cls-4{fill:#f9584f}.cls-5{fill:#fdbd54}'
          }
        </style>
      </defs>
      <g
        style={{
          isolation: 'isolate',
        }}
      >
        <g id="Capa_2" data-name="Capa 2">
          <g id="Capa_1-2" data-name="Capa 1">
            <path
              d="M44.98 117.5h71.17L44.98 41.92v75.58z"
              style={{
                fill: '#fdbd54',
                strokeWidth: 0,
              }}
            />
            <path
              d="M23.84 41.92h21.14v75.59H23.84z"
              style={{
                fill: '#fdbd54',
                strokeWidth: 0,
              }}
            />
            <path
              d="M23.84 41.92h21.14v75.59H23.84z"
              style={{
                mixBlendMode: 'multiply',
                opacity: 0.2,
                strokeWidth: 0,
                fill: '#ce466d',
              }}
            />
            <path d="M159.47 117.91H115.2l44.27-47.01v47.01z" fill="#f9584f" />
            <path
              d="m140.84 70.9-44.26 47.01h18.62l44.27-47.01h-18.63z"
              fill="#f9584f"
            />
            <path
              d="m140.84 70.9-44.26 47.01h18.62l44.27-47.01h-18.63z"
              style={{
                fill: '#f95b52',
                mixBlendMode: 'multiply',
                opacity: 0.2,
                strokeWidth: 0,
              }}
            />
            <path
              d="M0 0h192v125H0z"
              style={{
                fill: 'none',
                strokeWidth: 0,
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
