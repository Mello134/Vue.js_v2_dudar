<!-- шаблон/подшаблон -->
<template>
	<div>
		<h1>Пробный текст</h1>
		<!-- вывожу компонент app-input, см скрипт ниже-->
		<app-input></app-input>
	</div>
</template>


<!-- JS логика Example.vue -->
<script>

	// импортируем данныые из Input.vue
	import Input from './Field.vue';
	
	export default {
		//создаём локальный компонент app-input
		// он будет равен тому что написано в Field.vue
		components: {
			'app-input': Input
		}
	}
</script>
