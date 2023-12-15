import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import MenuItem from '../menu/menuItem/MenuItem'
import LogoutButton from './LogoutButton'
import { getAdminHomeUrl } from '@/config/url.config'

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
				<MenuItem item={{ icon: 'MdLogin', link: '/Auth', title: 'Login' }} />
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
