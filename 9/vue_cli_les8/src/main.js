import Vue from 'vue'
import App from './App.vue'
import Example from './Example.vue' // подключаем наш Example.vue


// создаём глобальный свой компонент
// своё имя компонента
// Example - Объект, то есть саму логику будем писать в Example.vue
Vue.component ('app-example', Example)

new Vue({
  el: '#app',
  render: h => h(App)
})
