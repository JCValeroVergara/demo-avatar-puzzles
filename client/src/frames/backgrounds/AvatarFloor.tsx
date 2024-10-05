import { SVGProps } from '../../common/interfaces/SVgProps.interface';


const AvatarFloor = (props: SVGProps) => {
  const { ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name={1}
      className='w-full h-full'
      viewBox="0 0 679.66 871.95"
      {...otherProps}
    >
      <path
        d="M0 826.27h679.66v45.68H0z"
        style={{
          strokeWidth: 0,
          fill: '#ddb3c8',
        }}
      />
      <path
        d="M471.38 854.28c-10.83 5.25-46.54-.18-127.83-.18-106.02 0-132.9 4.6-141.16-6.19-6.39-8.35 10.6-14.15 132.97-14.15 137.15 0 156.84 10.43 136.02 20.52Z"
        style={{
          fill: '#cca6ba',
          strokeWidth: 0,
        }}
      />
    </svg>
  );
};


export default AvatarFloor;