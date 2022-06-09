<template>
  <div>
    <div class="main">
      <label for="op1">
        <input id="op1" type="number" v-model.number="op1">
      </label>
      <label for="op2">
        <input id="op2" type="number" v-model.number="op2">
      </label>
      = {{ result }}
    </div>
    <div>
      <button @click="result = op1 + op2">+</button>
      <button @click="sub">-</button>
      <button @click="div">/</button>
      <button @click="mult">*</button>
      <button @click="deg">(*)</button>
      <button @click="int">integer value</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcComponent',
  data () {
    return {
      op1: 0,
      op2: 0,
      result: 0
    }
  },
  methods: {
    sub () {
      this.result = this.op1 - this.op2
    },
    div () {
      this.result = this.op1 / this.op2
    },
    mult () {
      this.result = this.op1 * this.op2
    },
    deg () {
      this.result = Math.pow(this.op1, this.op2)
    },
    int () {
      this.result = +(this.op1 / this.op2).toFixed(0)
    }

  }
}
</script>

<style scoped>

</style>
