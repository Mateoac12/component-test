import classNames from 'classnames'
import { ButtonProps } from './Button.types'

import './Button.module.css'

const Button = ({ children, onClick, variant }: ButtonProps) => {
    return <button onClick={onClick} className={classNames("button", {
        [`variant-${variant}`]: variant
    })}>{children}</button>
}

export default Button