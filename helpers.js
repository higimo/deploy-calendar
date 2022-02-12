const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const monthsDecline = ['январе', 'феврале', 'марте', 'апреле', 'мае', 'июне', 'июле', 'августе', 'сентябре', 'октябре', 'ноябре', 'декабре']

const getMonthName = d => months[(new Date(d + '-01')).getMonth()]
const getFullDate = d => months[(new Date(d + '-01')).getMonth()] + ' ' + (new Date(d + '-01')).getFullYear() + ' года'
const getFullDateDecline = d => monthsDecline[(new Date(d + '-01')).getMonth()] + ' ' + (new Date(d + '-01')).getFullYear() + ' года'

const zodiaksTrans = {
	'Овен': 'овну',
	'Телец': 'тельцу',
	'Близнецы': 'близнецу',
	'Рак': 'раку',
	'Лев': 'льву',
	'Дева': 'деве',
	'Весы': 'весам',
	'Скорпион': 'скорпиону',
	'Стрелец': 'стрельцу',
	'Козерог': 'козерогу',
	'Водолей': 'водолею',
	'Рыбы': 'рыбам',
}

const converZodiac = str => zodiaksTrans[str]



module.exports = {converZodiac, getMonthName, getFullDate, getFullDateDecline}
