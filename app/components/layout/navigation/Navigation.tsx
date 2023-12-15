import Logo from './logo/Logo'
import styles from './Navigation.module.scss'
import MenuContainer from './menuContainer/MenuContainer'

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
