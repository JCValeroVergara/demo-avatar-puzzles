import { SVGProps } from '../../common/interfaces';


export const F_Beard01 = (props: SVGProps) => {
    const { color4, ...otherProps } = props;
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        id="_1"
        data-name={1}
        className='w-full h-full'
        viewBox="0 0 680 855"
        {...otherProps}
    >
        <defs>
        <style>{".cls-1{fill:#343b49;stroke-width:0}"}</style>
        </defs>
        <path
        d="M301.26 181.64c-.47 0-.93-.21-1.23-.61-.52-.68-.39-1.65.28-2.18 5.97-4.59 18.12-2.68 21.06-1.21.77.38 1.08 1.32.69 2.08-.38.77-1.31 1.07-2.08.69-2.43-1.22-13.27-2.58-17.79.89-.28.22-.61.32-.94.32ZM370.18 181.64c-.38 0-.77-.14-1.07-.43-3.3-3.13-15.54-2.25-17.47-.9-.7.49-1.67.32-2.16-.38-.49-.7-.32-1.67.38-2.16 3.19-2.22 17.03-2.93 21.38 1.19.62.59.65 1.57.06 2.19-.3.32-.72.48-1.13.48Z"
        fill={color4}
        />
        </svg>
    );
}