new Vue ({ // создаём объект класса Vue
	el: '#app', // элемент с которым работаем в html - div id='app'
	data: { // переменная и значение объекта, данные объекта
		// title - ключ, дальше значение
		// в html необходимо вызвать {{ title }}
		title: 'Hello World!'
	}
});




new Vue ({ // объект vue
	el: '#app2', // div id='app2'
	data: {
		title: 'Первоначальный текст' // {{ title }} внутри div id='app2'
	}
});


// Пишем обработчик события
new Vue ({
	el: '#app3', // div id='app3'
	data: {
		txt: 'Исходный текст' // {{ txt }} внутри div id='app3'
	},
	// добавляем свои методы в объект methods, объекта Vue
	methods: {
		changeText () {
			// txt - это не глобальная переменная
			// txt - это переменная именно объекта Vue
			// для этого this - this это как self в python
			this.txt = 'Изменённый текст'
		}
	}
});






// Работа с аттрибуитами html - меняем цвет фона, на написанный в input
new Vue ({
	el: '#app4', 
	data: {
		styleCSS: '' // изначально пустое значение
	},

});