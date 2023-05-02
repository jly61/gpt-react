import styles from './index.module.less'
import Icon from "@/components/icon/index.jsx"

const Operations = () => {
	return (
		<div className={styles.operations}>
			<div className={styles.operation}>
				<Icon iconName="icon-shanchu" />
				<div className={styles.title}>Clear Conversation</div>
			</div>
			<div className={styles.operation}>
				<Icon iconName="icon-daochu" />
				<div className={styles.title}>Import Data</div>
			</div>
			<div className={styles.operation}>
				<Icon iconName="icon-daochu" />
				<div className={styles.title}>Export Data</div>
			</div>
			<div className={styles.operation}>
				<Icon iconName="icon-huojian" />
				<div className={styles.title}>OpenAI API Proxy</div>
			</div>
		</div>
	)
}

export default Operations
