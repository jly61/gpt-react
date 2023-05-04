import styles from './index.module.less'
import {useRef, useState} from "react"
import axios from "axios"

const Editor = () => {
	const [searchWord, setSearchWord] = useState('')
	const isComposed = useRef(false)

	const fnChange = e => {
		setSearchWord(e.target.value)
	}

	const fnSend = (e) => {
		if (isComposed.current) {
			return
		}
		if (e.keyCode === 13) {
			e.preventDefault()

			// 回车键被按下
			axios({
				method: 'POST',
				url: 'https://api.openai.com/v1/chat/completions',
				headers: {
					Authorization: 'Bearer ' + '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',
				},
				data: {
					model: "gpt-3.5-turbo",
					messages: [{role: "user", "content": searchWord}],
					temperature: 0.7
				}
			})
			// axios({
			// 	method: 'POST',
			// 	url: 'http://101.42.1.176/admin',
			// 	data: {
			// 		email: 'wei.li@discovery.wang',
			// 		pass:  '123456'
			// 	}
			// })
			// fetch('http://101.42.1.176/', {
			// 	method: 'POST',
			// 	mode: 'cors',
			// 	headers: {
			// 		"Content-type": "application/json; charset=UTF-8",
			// 	},
			// 	body: JSON.stringify({
			// 		email: 'wei.li@discovery.wang',
			// 		pass:  '123456'
			// 	}),
			// 	credentials: "include"
			// }).then(res => {})
		}
	}

	// 输入法中文状态改变
	const fnCompositionChange = (flag) => {
		isComposed.current = flag
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
				onKeyDown={fnSend}
				onCompositionStart={() => fnCompositionChange(true)}
				onCompositionEnd={() => fnCompositionChange(false)}
			/>
		</div>
	)
}

export default Editor
