import { IButton } from '@/shared/types/form.types'
import cn from 'classnames'
import React, { FC } from 'react'
import style from './Form.module.scss'
const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(style.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
