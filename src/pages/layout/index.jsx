import styles from './index.module.less'
import Sidebar from "@/pages/layout/sidebar/index.jsx"
import Editor from "@/pages/layout/editor/index.jsx"
import Chat from "@/pages/layout/chat/index.jsx"
const Layout = () => {
	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.right}>
				<div className={styles.main}>
					<Chat />
				</div>
				<Editor />
			</div>
		</div>
	)
}

export default Layout
