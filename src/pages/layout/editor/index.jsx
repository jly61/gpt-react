import styles from './index.module.less'
import {useState} from "react"
import axios from "axios"

const Editor = () => {
	const [searchWord, setSearchWord] = useState('')

	const fnChange = e => {
		setSearchWord(e.target.value)
	}

	const fnSend = (e) => {
		if (e.keyCode === 13) {
			// 回车键被按下
			// axios({
			// 	method: 'POST',
			// 	url: 'https://api.openai.com/v1/chat/completions',
			// 	headers: {
			// 		Authorization: 'Bearer ' + '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',
			// 	},
			// 	data: {
			// 		model: "gpt-3.5-turbo",
			// 		messages: [{role: "user", "content": searchWord}],
			// 		temperature: 0.7
			// 	}
			// })
			// axios({
			// 	method: 'get',
			// 	url: 'http://101.42.1.176/auth/github/redirect',
			// 	data: {
			// 		email: 'wei.li@discovery.wang',
			// 		pass:  '123456'
			// 	}
			// })
			fetch('http://101.42.1.176/', {
				method: 'POST',
				mode: 'cors',
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
				body: JSON.stringify({
					email: 'wei.li@discovery.wang',
					pass:  '123456'
				}),
				credentials: "include"
			}).then(res => {})
		}
	}

	return (
		<div className={styles.editor}>
			<div className={styles.stopBtn}>
				Stop Sending
			</div>
			<input
				value={searchWord}
				type="text"
				placeholder="Input Something"
				onChange={fnChange}
				onKeyUp={fnSend}
			/>
		</div>
	)
}

export default Editor
