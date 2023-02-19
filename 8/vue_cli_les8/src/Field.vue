<!-- шаблон/подшаблон -->
<template>
	<div>
		<!-- поле для заполнения текста-->
		<!-- v-model - почти то же что и v-bind, только сразу помещает значение в переменную, mess - это переменная -->
		<input type="text" v-model="mess">
		<!-- вывожу значение mess-->
		<p>{{ mess }}</p>
	</div>
</template>


<!-- JS логика Field.vue -->
<script>
	export default {
	  data () {
	    return {
	    	// изначально mess - пустое поле
	    	mess: ''
	    }
	  }
	}
</script>
