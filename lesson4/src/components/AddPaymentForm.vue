<template>
  <div>
    <div>
      <button @click="toggleAddForm" class="new-cost-btn">
        Add new cost +
      </button>
    </div>
    <div v-show="showForm">
      <div class="form-block">
        <label for="amount">
          <input
            class="form-item"
            id="amount"
            type="text"
            placeholder="Amount"
            v-model="amount"
          />
        </label>
        <label for="type">
          <select class="form-item" v-model="type" id="type">
            <option
              v-for="category of categoryList"
              :value="category"
              :key="category"
            >
              {{ category }}
            </option>
          </select>
        </label>
        <label for="date">
          <input
            class="form-item"
            id="date"
            type="text"
            placeholder="Date"
            v-model="date"
          />
        </label>
      </div>
      <button class="add-btn" @click="addPayment">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  data: function () {
    return {
      amount: "",
      type: "",
      date: "",
      showForm: false,
    };
  },
  computed: {
    paymentDate() {
      return new Date().toLocaleDateString();
    },
  },
  methods: {
    addPayment() {
      const data = {
        amount: +this.amount,
        type: this.type,
        date: this.date || this.paymentDate,
      };
      this.$emit("add-payment", data); // пробрасываем событие наружу
    },
    toggleAddForm() {
      this.showForm = !this.showForm;
    },
  },
};
</script>

<style scoped>
.new-cost-btn {
  display: inline-block;
  border: 1px solid #f16d7f;
  background-color: #ffffff;
  padding: 8px 23px;
  vertical-align: middle;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 65px;
  transition: 0.3s;
  color: #f16d7f;
}
.new-cost-btn:hover {
  background: #f16d7f;
  border: 1px solid #ff6a6a;
  color: #ffffff;
}
.form-block {
  display: flex;
  flex-direction: column;
}
.form-item {
  padding: 12px 17px;
  width: 360px;
  font-size: 13px;
  line-height: 16px;
  color: #b1b1b1;
  border: 1px solid #a4a4a4;
  margin-bottom: 20px;
}
.add-btn {
  display: inline-block;
  border: 1px solid #f16d7f;
  background-color: #ffffff;
  padding: 8px 23px;
  vertical-align: middle;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 65px;
  transition: 0.3s;
  color: #f16d7f;
}
.add-btn:hover {
  background: #f16d7f;
  border: 1px solid #ff6a6a;
  color: #ffffff;
}
</style>
