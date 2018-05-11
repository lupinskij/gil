import Typography from 'typography'

const config = require('../../config/SiteConfig')

const typography = new Typography({
	title: 'Emma',
	baseFontSize: config.baseFontSize,
	baseLineHeight: 1.4,
	headerFontFamily: [config.headerFontFamily, 'sans-serif'],
	bodyFontFamily: [config.bodyFontFamily, 'sans-serif'],
	scaleRatio: 2.5,
	headerWeight: 700
})

export default typography
