import { SVGProps } from '../../common/interfaces';


export const Eyes = (props: SVGProps) => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="_1"
      data-name={1}
      className='h-full w-full'
      viewBox="0 0 680 855"
      {...otherProps}
    >
      <defs>
        <style>{`.cls-1{fill:${color};stroke-width:0}`}</style>
      </defs>
      <ellipse cx={315.25} cy={197.46} rx={4.83} ry={5.76} fill={color} />
      <ellipse cx={356.73} cy={197.46} rx={4.83} ry={5.76}  fill={color}/>
    </svg>
  );
}

