<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
    <p>{{ msg }}</p>
    <label for="someText">
      <input
        id="someText"
        type="text"
        placeholder="text"
        v-model="someText"
        @focus="focus"
        @blur="blur"
      >
    </label>
    <p>{{ someText }}</p>
    <CalcComponent />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CalcComponent from './components/Calc.vue'

export default {
  name: 'App',
  data () {
    return {
      msg: 'Hello Vue!',
      counter: 0,
      someText: ''
    }
  },
  methods: {
    inc (step, event) {
      console.log(event)
      // eslint-disable-next-line no-plusplus
      this.counter++
    },
    reset () {
      this.counter = 0
    },
    focus () {
      console.log('focus')
    },
    blur () {
      console.log('blur')
    }
  },
  components: {
    HelloWorld,
    CalcComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
