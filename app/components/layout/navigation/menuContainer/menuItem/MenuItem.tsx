import { useRouter } from 'next/router'
import React, { FC } from 'react'
import cn from 'classnames'
import styles from './MenuItem.module.scss'
import { IMenuItem } from './menuItem.interface'
import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()
	console.log(asPath === item.link)
	console.log(item.link)
	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
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
