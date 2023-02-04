// глоюальный фильтр для всех Vue

// ('своё_название-своего_фильтра', function(параметр_называем_сами) {....})
Vue.filter ('capitalize', function (text) {
	if (!text) return '' // если текста нет, возвратим пустою строку
	text = text.toString() // вводные данные превращаем в строку
	
	var capitalFirst = text.charAt(0).toUpperCase(); // берём первый символ.ВЕРХНИЙ РЕГИСТР()
	var otherSimb = text.slice(1, text.length); // слайс по всем символам кроме первого
	return capitalFirst + otherSimb; // Возвращаем, всю строку, первый символ в Верхрем регистре
});




new Vue ({
	el: '#app',
	data: {
		// это просто переменная (будем использовать в функции)
		message: 'привет, меня зовут Александр.'
	},
	computed: {
		// в html {{ showMess }}
		showMess () {
			// this.message - message из data
			// .toUpperCase() - весь текст в верхнем регистре
			return this.message.toUpperCase();
		}
	},
	filters: {
		// в html {{ message | lowercase }}
		// lowercase - своё название, своего фильтра
		// value - какоето значение
		lowercase (value) {
			// toLowerCase() - функция JS (маленький регистр)
			return value.toLowerCase()
		}
	}

});