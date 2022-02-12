const {converZodiac, getFullDate} = require('./helpers')
const mamamain = require('./_data/main.json')

class Test {
	data() {
		return {
			layout: 'pdf.njk',

			pagination: {
				data: 'collections.jui',
				size: 1,
				alias: 'values',
				before: function(values) {
					const res = values.map(i => Object.keys(i)[0])
					console.log(res)
					return res
				},
			},
			permalink: da => {
				return `/pdf/${da.pagination.items[0]}/index.html`
			},
		};
	}
	render(data) {
		const filtred = data.collections.jui.find(item => !!item[data.page.url.replace(/\/.*?\/(.*?)\//g, '$1')])
		const curItem = filtred[Object.keys(filtred)[0]]
		return (
			`<h1>Когда лучше деплоить в продакшен ${converZodiac(curItem.name)}</h1>` +
			'<div class="date"><div></div>' +
			`<div>на ${getFullDate(curItem.date).toLocaleLowerCase()}</div>` +
			'<div></div></div>' +
			'<h2>Благоприятные дни</h2>' +
			`<div class="dates">${curItem.value[0].join(' ')}</div>` +
			'<h2>Нейтральные дни</h2>' +
			`<div class="dates">${curItem.value[1].join(' ')}</div>` +
			'<h2>Неблагоприятные дни</h2>' +
			`<div class="dates">${curItem.value[2].join(' ')}</div>`
		)
	}
}

module.exports = Test;
