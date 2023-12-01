import React from 'react'
import styles from './MenuContainer.module.scss'
import Menu from './menu/Menu'
import { homeMenu, userMenu } from './data/menu.data'
const MenuContainer = () => {
	return (
		<div>
			<Menu menu={homeMenu} />
			{/* GENRE MENU */}
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
