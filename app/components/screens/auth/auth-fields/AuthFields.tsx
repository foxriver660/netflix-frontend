import Field from '@/components/ui/form-elements/Field'
import { validEmail } from '@/shared/regexp/regexp'
import React, { FC } from 'react'
import { UseFormRegister, FormState } from 'react-hook-form'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired: boolean
}
const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: { value: validEmail, message: 'Enter valid email adress' },
				})}
				label="email"
				placeholder="example@mail.com"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'The entered password is too short',
								},
						  }
						: {}
				)}
				type="password"
				label="password"
				placeholder="Enter here your password"
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
