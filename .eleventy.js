const { formatWithOptions } = require('date-fns/fp')
const { ru } = require('date-fns/locale')

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const monthsDecline = ['январе', 'феврале', 'марте', 'апреле', 'мае', 'июне', 'июле', 'августе', 'сентябре', 'октябре', 'ноябре', 'декабре']

const getMonthName = d => months[(new Date(d + '-01')).getMonth()]
const getFullDate = d => months[(new Date(d + '-01')).getMonth()] + ' ' + (new Date(d + '-01')).getFullYear() + ' года'
const getFullDateDecline = d => monthsDecline[(new Date(d + '-01')).getMonth()] + ' ' + (new Date(d + '-01')).getFullYear() + ' года'


module.exports = function(config) {
	// config.addPassthroughCopy('_css/style.css')

	config.addFilter('date', date =>
		formatWithOptions({ locale: ru }, 'd MMMM yyyy')(date)
			.replace(` ${new Date().getFullYear()}`, '')
			.replace(' ', ' ')
	)

	config.addFilter('month', getMonthName)
	config.addFilter('fullDate', getFullDate)
	config.addFilter('fullDateDecline', getFullDateDecline)

	config.addCollection('index', collection => {
		const all = collection.getFilteredByGlob('index.md')[0]

		return all.data.main
	})

	return {
		passthroughFileCopy: true
	}
}
