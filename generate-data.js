const fs = require('fs')

const START_YEAR = 2022
const END_YEAR = 2025
const MAX_DAY_PER_COLUMN = 10

const zodiaks = ['Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Змееносец', 'Стрелец', 'Козерог', 'Водолей', 'Рыбы']

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]


const getDaysByLength = length => Object.keys(new Array(length + 1).fill(0)).map(i => parseInt(i, 10))

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

const arrRandom = arr => arr[Math.random() * arr.length | 0]
const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
const shuffle = arr => {
	const cpyArr = arr.slice(0, arr.length)
	for (let i = cpyArr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[cpyArr[i], cpyArr[j]] = [cpyArr[j], cpyArr[i]];
	}
	return cpyArr
}
const chunkArray = (arr, size) => {
	var results = [];
	while (arr.length) {
		results.push(arr.splice(0, size));
	}
	return results;
}



const getData = (input) => {
	const good = randomInteger(1, input.length / 2)
	const normal = randomInteger(2, input.length - good - 2)
	const bad = input.length - good - normal

	const shuffleArr = shuffle(input)

	return [
		shuffleArr.slice(0, good).slice(0, randomInteger(2, MAX_DAY_PER_COLUMN)), // good
		shuffleArr.slice(good, good + normal).slice(0, randomInteger(2, MAX_DAY_PER_COLUMN)), // normal
		shuffleArr.slice(normal, good + normal + bad).slice(0, randomInteger(2, MAX_DAY_PER_COLUMN)), // bad
	]
}

let result = []

for (var year = START_YEAR; year < END_YEAR; year++) {
	for (var month = 1; month < 12; month++) {
		let curValue = {}
		curValue.date = `${year}-${('0' + month).slice(-2)}`
		curValue.data = []

		for (let zodiak of zodiaks) {
			curValue.data.push({
				name: zodiak,
				value: getData(getDaysByLength(getDaysInMonth(curValue.date)))
			})
		}
		result.push(curValue)
	}
}



fs.writeFileSync('./_data/main.json', JSON.stringify(result, 0, '\t'))
