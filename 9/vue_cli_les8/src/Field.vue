<!-- шаблон/подшаблон -->
<template>
	<div>
		<!-- :value='msg' - изначально в поле будет значение msg (тот что из props) -->
		<!-- @input=  - то же самое что и v-on (т.е присваиваем событие), название события придумали сами -->
		<input type="text" :value='msg' @input='changeMess'>
		<p>{{ mess }}</p>
	</div>
</template>


<!-- JS логика Field.vue -->
<script>
	export default {
	  // msg это аттрибут, которые указали в Example.vue внутри теггов app-input
	  props: ['msg'],
	  data () {
	    return {
	    	// изначально mess - пустое поле
	    	mess: ''
	    }
	  },
	  methods: {
	  	// обработчик события changeMess
	  	changeMess (event) {
	  		// к значению mess - Применяем, то значение что ввели в поле Input
	  		this.mess = event.target.value;

	  		// $ - означает что это встроенная функция
	  		// в $emit - прописываем функцию, которую будем передовать в родительский файл ('название функции любое', 'параметр функции, что передаём')
	  		
	  		this.$emit('messChange', this.mess);
	  	}
	  },
	}
</script>
