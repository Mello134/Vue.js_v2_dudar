// Принимаем в поле input число, 
// сразу выводим в html и введённое число + 
// введённое число умноженное на 2

// new Vue ({
// 	el: '#app',
// 	data: {
// 		value: 1, // {{ value }} - по учаолчанию 1
// 		doubleValue: 1 // {{ doubleValue }} - по учаолчанию 1
// 	},
// 	methods: {
// 		// создаём свою функцию обработчик
// 		// value - в функции не одно и тоже что и в data, они не пересекаются!
// 		increment (value) {
// 			// this.value - это value ил data
// 			// = value - это value из methods -> increment (т.е то что введут в поле input)
// 			this.value = value
// 			this.doubleValue = value * 2 // умножаем value на 2
// 			// ИЛИ
// 			// this.doubleValue = this.value * 2 // одно и тоже но так лучше
// 		}
// 	}
// });





// Добавляем computed - обработанные свойства

// new Vue ({
// 	el: '#app',
// 	data: {
// 		value: 1, // {{ value }} - по учаолчанию 1
// 	},
// 	methods: {
// 		// создаём свою функцию обработчик
// 		// value - в функции не одно и тоже что и в data, они не пересекаются!
// 		increment (value) {
// 			// this.value - это value ил data
// 			// = value - это value из methods -> increment (т.е то что введут в поле input)
// 			this.value = value
// 		}
// 	},
// 		computed: {
// 		doubleValue () { // создаём метод получение удвоенного числа
// 			return this.value * 2 // возвращаем результат математической операции
// 		}
// 	}
// });




// Добавляем проверку JS - выводим всплываюее окно, если в поле input - будет введено число 25

new Vue ({
	el: '#app',
	data: {
		value: 1, // {{ value }}
	},
	methods: {
		increment (value) {
			this.value = value
			if (value == 25) // если ввели 25
				alert("Ввели число 25"); // всплывающее окно
		}
	},
		computed: {
		doubleValue () { // {{ doubleValue }}
			return this.value * 2
		}
	}
});