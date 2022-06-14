import classNames from 'classnames'
import { ButtonProps } from './Button.types'

import styles from './Button.module.css'
import { useState } from 'react'

const handleClick = ({ onClick }: { onClick: ButtonProps['onClick'] }) => (e: any) => {
  onClick!(e)
}

const Button = ({ children, onClick, variant }: ButtonProps) => {
  const [state, setState] = useState(false)

  return (
    <>
      <button
        onMouseEnter={() => setState(true)}
        onMouseLeave={() => setState(false)}
        onClick={onClick && handleClick({ onClick })}
        className={classNames(styles.button, {
          [styles[`variant-${variant}`]]: variant
        })}
      >click lala: {children}</button>
      {
        state && <div>lalalala</div>
      }
    </>
  )
}

export default Button