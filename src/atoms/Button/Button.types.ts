export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant: 'primary' | 'secondary' | 'tertiary';
}