// Глобальный компонент - можно использовать в любом оюъекте Vue
// Vue.component ('Имя_компонента', {объект комаонента});
// создали компонент, для вызова <global-car></global-car>
Vue.component ('global-cars', {
	// data - в компоненте, не является объектом, это функция которая чтото возвращает
	data: function () {
		return { // data это функция которая возвращает объект cars, состоящий из словарей
			cars: [ // Весь cars - это логическая часть компонента
				{model: 'Opel'},
				{model: 'BMW'},
				{model: 'Vovlo'},
				{model: 'Ford'},
				{model: 'Audi'},
				{model: 'Fiat'},
				{model: 'AMG'},
				{model: 'Toyota'}
			]
		}
	},
	// tempalete - это сам шаблон html
	// снаружи добавлен дополнительный (пустой) div! - без него не будет работать
	// template - в одну строку! т.к одинарные скобки не работаею с переносом строки!
	template: '<div><div class="car" v-for="c in cars"><p>{{ c.model }}</p></div></div>'
});



// Объект Vue 1
new Vue ({
	el: '#app1' //<div id='app1'>
});


// Объект Vue 2
new Vue ({
	el: '#app2' //<div id='app2'>
});



// Объект Vue 3
// Внутри обхекта Vue - свой собственный компонент
// Его можно будет использовать только в <div id='app3'>
new Vue ({
	el: '#app3', //<div id='app3'>
	// создаём локальный компонент!
	components: {
		// локальный компонент для app3
		'app3-city': { // <app3-city></app3-city>
			data: function () {
				return {
					citys: [
						{name: 'Volgograd'},
						{name: 'Moskow'},
						{name: 'New-York'},
						{name: 'Los-Angels'},
						{name: 'Paris'},
						{name: 'Berlin'}
					]
				}
			},
			// шаблон локального компонента app3-city
			template: '<div><div class="car" v-for="city in citys"><p>{{ city.name }}</p></div></div>'
		}
	}
	
});