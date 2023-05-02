import PropTypes from "prop-types"
import styles from './index.module.less'

const Icon = (props) => {
	const { iconClass, iconName, color } = props
	const svgClass = iconClass ? `${styles.svgIcon} ${iconClass}` : styles.svgIcon
	const iconFontName = `#${iconName}`
	return (
		<svg className={svgClass} aria-hidden="true">
			<use xlinkHref={iconFontName} fill={color} />
		</svg>
	)
}

Icon.propTypes = {
	iconName: PropTypes.string.isRequired, // icon名称
	iconClass: PropTypes.string, // 自定义icon class
	color: PropTypes.string // icon颜色
}

Icon.defaultProps = {
	iconClass: '',
	color: '#e8e3e3'
}

export default Icon
