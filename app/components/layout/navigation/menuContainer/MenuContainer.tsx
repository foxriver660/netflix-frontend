import React from 'react'
import styles from './MenuContainer.module.scss'
import Menu from './menu/Menu'
import { homeMenu, userMenu } from './data/menu.data'
import GenreMenu from './genres/GenreMenu'
const MenuContainer = () => {
	return (
		<div>
			<Menu {...homeMenu} />
			<GenreMenu />
			<Menu {...userMenu} />
		</div>
	)
}

export default MenuContainer
