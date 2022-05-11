export interface ButtonProps {
    children: React.ReactNode;
    onClick?: (e: HTMLButtonElement) => void;
    variant: 'primary' | 'secondary' | 'tertiary';
}