<template>
  <div id="app">
    <header>
      <div class="main-header">My personal costs</div>
    </header>
    <main>
      <add-payment-form @add-payment="addNewPayment" />
      <payments-display :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
export default {
  name: "App",
  data() {
    return {
      paymentsList: [],
    };
  },
  methods: {
    fetchData: function () {
      return [
        {
          date: "21.04.2022",
          category: "Food",
          value: 450,
        },
        {
          date: "25.04.2022",
          category: "Cinema",
          value: 500,
        },
        {
          date: "26.04.2022",
          category: "Food",
          value: 150,
        },
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
    addNewPayment(data) {
      this.paymentsList.push(data);
    },
  },
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0;
  box-sizing: border-box;
}
.main-header {
  font-size: 38px;
  color: #f16d7f;
  text-transform: uppercase;
  padding-bottom: 40px;
}
</style>
