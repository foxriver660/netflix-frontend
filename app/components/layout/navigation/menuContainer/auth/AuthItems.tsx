import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import MenuItem from '../menu/menuItem/MenuItem'
import LogoutButton from './LogoutButton'
import { getAdminHomeUrl } from '@/config/url.config'

// ! ПОПРАВИТЬ БАГ С HYDR
const AuthItems = () => {
	const { user } = useAuth()
	console.log(user)
	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}
			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
