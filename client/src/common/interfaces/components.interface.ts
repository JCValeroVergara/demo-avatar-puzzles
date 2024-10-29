
export interface PropsOptions {
    buttontext?: string;
    background?: string;
    color?: string;
    cell?: string;
    children?: (isHover: boolean) => JSX.Element;
    content?: string | JSX.Element;
    disabled?: boolean;
    isSelected?: boolean;
    onClick?: () => void;
    onClose?: () => void;
    prize?: number;
    selection?: string;
    text?: string;
    textWin?: string;
    textBox?: string;
    title?: string;
}