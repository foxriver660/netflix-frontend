import React, { FC } from 'react'
import { IMenu } from './menu.interface'
import styles from './Menu.module.scss'
import MenuItem from './menuItem/MenuItem'
import AuthItems from '../auth/AuthItems'

const Menu: FC<IMenu> = ({ title, items }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu
