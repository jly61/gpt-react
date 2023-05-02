import styles from './index.module.less'
import Icon from "@/components/icon/index.jsx"
import Conversations from "@/pages/layout/conversations/index.jsx"
import Operations from "@/pages/layout/operations/index.jsx"
const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.newChatWrap}>
				<div className={styles.newChatBtn}>
					<Icon iconName="icon-tianjia" />
					<span className={styles.text}>New Chat</span>
				</div>
				<div className={styles.uploadBtn}>
					<Icon iconName="icon-24gl-folderPlus" />
				</div>
			</div>
			<input className={styles.chatSearch} type="text" placeholder="Search Conversation..." />
			<Conversations />
			<Operations />
		</div>
	)
}

export default Sidebar
