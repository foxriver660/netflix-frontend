import { FC } from 'react'
import styles from './Layout.module.scss'
import Navigation from './navigation/Navigation'
import Sidebar from './sidebar/Sidebar'

const Layout: FC<any> = ({ children }) => {
	return (
		<div className={styles.navigation}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
