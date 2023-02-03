// скрываем и показываем текст нажатиеи кнопик

new Vue ({
	el: '#app',
	data: {
		// своя переменная
		// true - элемент виден
		// false - элемент не виден
		show: true
	},
	methods: {

	}
})


// Выводим список из массива
new Vue ({
	el: '#listCar',
	data: {
		// массив
		cars: [
			// элементы массива из словарей
			{model: 'BMW', speed: 250.8},
			{model: 'Audi', speed: 240.21},
			{model: 'AMG', speed: 350.4},
			{model: 'Ford', speed: 160.5},
			]
		}
})