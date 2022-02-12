const { formatWithOptions } = require('date-fns/fp')
const { ru } = require('date-fns/locale')
const main = require('./_data/main.json')

const {getMonthName, getFullDate, getFullDateDecline} = require('./helpers')


module.exports = function(config) {
	config.addPassthroughCopy('_css/style.css')

	config.addFilter('date', date =>
		formatWithOptions({ locale: ru }, 'd MMMM yyyy')(date)
			.replace(` ${new Date().getFullYear()}`, '')
			.replace(' ', ' ')
	)

	config.addFilter('month', getMonthName)
	config.addFilter('fullDate', getFullDate)
	config.addFilter('fullDateDecline', getFullDateDecline)

	config.addCollection('jui', () => {
		const res = main.map(item => item.data.map(subitem => ({
			[`${subitem.slug}-${item.date}`]: {
				...subitem,
				date: item.date,
			}
		}))).flat()
		return res
	})

	config.addCollection('index', collection => {
		const all = collection.getFilteredByGlob('index.md')[0]

		return all.data.main
	})

	return {
		passthroughFileCopy: true
	}
}
