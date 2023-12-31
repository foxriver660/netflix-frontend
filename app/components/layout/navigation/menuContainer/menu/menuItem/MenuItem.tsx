import { useRouter } from 'next/router'
import React, { FC } from 'react'
import cn from 'classnames'
import styles from '../Menu.module.scss'
import { IMenuItem } from './menuItem.interface'
import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()
	return (
		<li
			className={cn({
				[styles.activeLink]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
