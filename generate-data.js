const fs = require('fs')

const START_YEAR = 2022
const END_YEAR = 2030
const MAX_DAY_PER_COLUMN = 10

const zodiaks =     ['Овен',  'Телец',  'Близнецы', 'Рак',    'Лев', 'Дева',  'Весы',  'Скорпион', 'Стрелец',     'Козерог',   'Водолей',  'Рыбы']
const zodiakSlugs = ['aries', 'taurus', 'gemini',   'cancer', 'leo', 'virgo', 'libra', 'scorpio',  'sagittarius', 'capricorn', 'aquarius', 'pisces']

const getDaysByLength = length => Object.keys(new Array(length + 1).fill(0)).map(i => parseInt(i, 10)).slice(1)

/**
 * Example:
 * console.log(getDaysInMonth('2022-02')) // 28
 */
const getDaysInMonth = (dirtyDate) => {
	const date = new Date(dirtyDate + '-01')
	let lastDayOfMonth = new Date(0)
	lastDayOfMonth.setFullYear(date.getFullYear(), date.getMonth() + 1, 0)
	lastDayOfMonth.setHours(0, 0, 0, 0)
	return lastDayOfMonth.getDate()
}

const arrSort = (arr, cb) => arr.slice().sort(cb)

const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
const shuffle = arr => {
	const cpyArr = arr.slice(0, arr.length)
	for (let i = cpyArr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[cpyArr[i], cpyArr[j]] = [cpyArr[j], cpyArr[i]];
	}
	return cpyArr
}

const compare = (a, b) => a-b

const getData = (input) => {
	const good = randomInteger(1, input.length / 2)
	const normal = randomInteger(2, input.length - good - 2)
	const bad = input.length - good - normal

	const shuffleArr = shuffle(input)

	return [
		arrSort(shuffleArr.slice(0, good).slice(0, randomInteger(2, MAX_DAY_PER_COLUMN)), compare), // good
		arrSort(shuffleArr.slice(good, good + normal).slice(0, randomInteger(2, MAX_DAY_PER_COLUMN)), compare), // normal
		arrSort(shuffleArr.slice(normal, good + normal + bad).slice(0, randomInteger(2, MAX_DAY_PER_COLUMN)), compare), // bad
	]
}

let result = []

for (var year = START_YEAR; year < END_YEAR; year++) {
	for (var month = 1; month <= 12; month++) {
		let curValue = {}
		curValue.date = `${year}-${('0' + month).slice(-2)}`
		curValue.data = []

		for (let index in zodiaks) {
			curValue.data.push({
				name: zodiaks[index],
				slug: zodiakSlugs[index],
				value: getData(getDaysByLength(getDaysInMonth(curValue.date)))
			})
		}
		result.push(curValue)
	}
}



fs.writeFileSync('./_data/main.json', JSON.stringify(result, 0, '\t'))
