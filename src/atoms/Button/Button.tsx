import classNames from 'classnames'
import { ButtonProps } from './Button.types'

import styles from './Button.module.css'

console.log(styles['variant-primary'])
const Button = ({ children, onClick, variant }: ButtonProps) => {
    return <button onClick={onClick} className={classNames(styles.button, {
        [`${styles[`variant-${`${variant}`}`]}`]: variant
    })}>{children}</button>
}

export default Button