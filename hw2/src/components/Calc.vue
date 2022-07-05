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
    <div v-if="error">
      {{ error }}
    </div>
    <div>
      <button
        v-for="operator of operators"
        :key="operator"
        @click="calculate(operator)"
      >{{ operator }}
      </button>
    </div>
    <div>
      <input type="checkbox" id="checkbox" v-model="checked" v-on:change="visible=!visible">
      <label for="checkbox">Отобразить клавиатуру</label>
    </div>
    <div v-show="visible">
      <div>
        <button
          @click="input(keyNumber)"
          v-for="keyNumber of keyboardNumbers"
          :key="keyNumber"
        >{{ keyNumber }}
        </button>
        <button @click="reset()">Reset</button>
      </div>
      <div>
        <input type="radio" id="num1" value="op1" v-model="currentOperand">
        <label for="num1">Первое число</label>
        <input type="radio" id="num2" value="op2" v-model="currentOperand">
        <label for="num2">Второе число</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcComponent',
  data () {
    return {
      op1: '',
      op2: '',
      currentOperand: 'op1',
      result: 0,
      error: '',
      operators: ['+', '-', '/', '*', '(*)', 'integer value'],
      keyboardNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      visible: false
    }
  },
  methods: {
    input (num) {
      this[this.currentOperand] = this[this.currentOperand].toString()
      this[this.currentOperand] += num
      this[this.currentOperand] = Number(this[this.currentOperand])
    },
    reset () {
      this[this.currentOperand] = ''
    },
    calculate (operator) {
      this.error = ''
      // eslint-disable-next-line default-case
      switch (operator) {
        case '+':
          this.sum()
          break
        case '-':
          this.sub()
          break
        case '/':
          this.div()
          break
        case '*':
          this.mult()
          break
        case '(*)':
          this.deg()
          break
        case 'integer value':
          this.int()
          break
      }
      this.$set(this.logs, Date.now(), `${this.op1} ${operator} ${this.op2} = ${this.result}`)
    },
    sum () {
      const {
        op1,
        op2
      } = this
      this.error = ''
      this.result = op1 + op2
    },
    sub () {
      const {
        op1,
        op2
      } = this
      this.error = ''
      this.result = op1 - op2
    },
    div () {
      const {
        op1,
        op2
      } = this
      this.error = ''
      if (this.op2 === 0) {
        this.error = 'На ноль делить нельзя'
        return
      }
      this.result = op1 / op2
    },
    mult () {
      const {
        op1,
        op2
      } = this
      this.error = ''
      this.result = op1 * op2
    },
    deg () {
      const {
        op1,
        op2
      } = this
      this.error = ''
      this.result = Math.pow(op1, op2)
    },
    int () {
      const {
        op1,
        op2
      } = this
      this.error = ''
      if (this.op2 === 0) {
        this.error = 'На ноль делить нельзя'
        return
      }
      this.result = +(op1 / op2).toFixed(0)
    }

  }
}
</script>

<style scoped>

</style>
