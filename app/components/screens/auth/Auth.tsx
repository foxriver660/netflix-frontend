import React, { useState } from 'react'
import style from './Auth.module.scss'
import { useAuthRedirect } from './useAuthRedirect'
import { useAuth } from '@/hooks/useAuth'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IAuthInput } from './auth.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import Button from '@/components/ui/form-elements/Button'
import AuthFields from './auth-fields/AuthFields'

const Auth = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const [type, setType] = useState<'login' | 'register'>('login')
	const { register, handleSubmit, formState, reset } = useForm<IAuthInput>({
		mode: 'onChange',
	})
	const login = (data: any) => {
		console.table(data)
	}
	const registration = (data: any) => {
		console.table(data)
	}
	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') registration(data)
	}
	return (
		<Meta title="auth">
			<section className={style.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />
					<AuthFields
						register={register}
						formState={formState}
						isPasswordRequired
					/>
					<div className={style.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
