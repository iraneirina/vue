<template>
  <div id="app">
    <header>
      <div class="main-header">My personal costs</div>
    </header>
    <main>
      <add-payment-form
        @add-payment="addNewPayment"
        :categoryList="categoryList"
      />
      <payments-display :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      //paymentsList: [],
    };
  },
  methods: {
    ...mapMutations(["SET_PAYMENTS_LIST"]),
    ...mapActions(["fetchData", "addNewPayment", "fetchCategoryListData"]),
    //fetchData: function () {
    //return
    //},
    //addNewPayment(data) {
    //this.paymentsList.push(data);
    //},
  },
  computed: {
    ...mapGetters(["paymentsList", "categoryList"]),
  },
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  created() {
    //this.paymentsList = this.fetchData();
    //this.$store.commit('SET_PAYMENTS_LIST', this.fetchData()) // commit - это вызов мутации,
    //второе - это что передаем в мутацию
    //this.SET_PAYMENTS_LIST(this.fetchData());
    this.fetchData();
    this.fetchCategoryListData();
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
