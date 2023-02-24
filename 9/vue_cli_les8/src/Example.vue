<!-- шаблон/подшаблон -->
<template>
	<div>
		<h1>{{ message }}</h1>

		<!-- вывожу компонент app-input, см скрипт ниже-->
		<!-- @messCange - это функция из Field.vue -->
		<!-- $event - это то значение которое передали в качестве параметра, так же в Field.vue в скрипте - т.е в данном случае this.mess -->
		<!-- выводим message, присваевая message = то что написал пользователь, скрипт в Field.vue - в дочернем файлу -->
		<app-input :msg="message" @messChange="message = $event"></app-input>

	</div>
</template>


<!-- JS логика Example.vue -->
<script>

	// импортируем данныые из Input.vue
	import Input from './Field.vue';
	
	export default {
		data() {
			return {
				message: 'Пробный текст!'
			}
		},

		//создаём локальный компонент app-input
		// он будет равен тому что написано в Field.vue
		components: {
			'app-input': Input
		}
	}
</script>
