import classNames from 'classnames'
import { ButtonProps } from './Button.types'

import styles from './Button.module.css'

const handleClick = ({ onClick }: { onClick: ButtonProps['onClick']}) => (e: any) => {
  onClick!(e)
}

const Button = ({ children, onClick, variant }: ButtonProps) => {
    return <button 
      onClick={onClick && handleClick({ onClick })}
      className={classNames(styles.button, {
        [styles[`variant-${variant}`]]: variant
      })}
    >{children}</button>
}

export default Button