import React, { FC, forwardRef } from 'react'
import { IField } from '@/shared/types/form.types'
import styles from './Form.module.scss'
import cn from 'classnames'

const Field = forwardRef<HTMLInputElement, IField>(
	({ label, placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div style={styles} className={cn(styles.common, styles.field)}>
				<label>
					<span>{label}</span>
					<input placeholder={placeholder} ref={ref} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message as string}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
