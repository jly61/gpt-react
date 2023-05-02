import {isEmpty} from "lodash"
import styles from "./index.module.less"
import cat from '@/assets/img/cat.jpg'
import mouse from '@/assets/img/mouse.png'

const Chat = () => {
	const chatList = [
		{
			date: '2020/04/25 21:19:07',
			text: '只羡鸳鸯不羡仙',
			mine: true
		},
		{
			date: '2020/04/25 21:20:07',
			text: '要留清白在人间',
			mine: true
		},
		{
			date: '2020/04/25 21:21:07',
			text: '金凤玉露喜相逢',
			mine: false
		},
		{
			date: '2020/04/25 21:22:07',
			text: '一遇金鳞便化龙',
			mine: false
		},
		{
			date: '2020/04/25 21:21:07',
			text: '金凤玉露喜相逢',
			mine: false
		},
		{
			date: '2020/04/25 21:22:07',
			text: '一遇金鳞便化龙',
			mine: true
		},
		{
			date: '2020/04/25 21:21:07',
			text: '金凤玉露喜相逢',
			mine: false
		},
		{
			date: '2020/04/25 21:22:07',
			text: '一遇金鳞便化龙',
			mine: true
		}
	]
	return (
		<div className={styles.chatBox}>
			{
				!isEmpty(chatList) ? chatList.map((item, index) => {
					return (
						<div key={index} className={styles.chatItemBox}>
							<div className={styles.date}>{item.date}</div>
							{ item.mine ? (
								<div className={`${styles.chatItem} ${styles.chatItemMime}`}>
									<div className={styles.text}>
										{item.text}
									</div>
									<div className={styles.avatar}>
										<img src={mouse} alt=""/>
									</div>
								</div>
							) : (
								<div className={`${styles.chatItem} ${styles.chatItemYour}`}>
									<div className={styles.avatar}>
										<img src={cat} alt=""/>
									</div>
									<div className={styles.text}>
										{item.text}
									</div>
								</div>
							)
							}
						</div>
					)
				}) : null
			}
		</div>
	)
}

export default Chat
