import styles from './index.module.less'
import Icon from "@/components/icon/index.jsx"
import { isEmpty } from "lodash"

const Conversations = () => {
	const conversationList = [
		{
			id: '001',
			title: '三十功名尘与土，八千里路云和月'
		},
		{
			id: '002',
			title: '我是一个粉刷匠，粉刷本领强'
		}
	]
	return (
		<div className={styles.conversations}>
			{ !isEmpty(conversationList) ?  conversationList.map(item => {
				const { title, id } = item
				return (
					<div className={styles.conversationItem} key={id}>
						<Icon iconName="icon-xiaoxi" />
						<div className={styles.title} title={title}>{ title }</div>
						<Icon iconName="icon-bi" color="#ccc" />
						<Icon iconClass={styles.deleteIcon} iconName="icon-shanchu" color="#ccc" />
					</div>
				)
			}) : null }
		</div>
	)
}

export default Conversations
