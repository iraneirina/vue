import Vue from "vue";
import Vuex from "vuex";
import categoryList from "./categoryList";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // это хранится в store
    paymentsList: [],
  },
  getters: {
    //для получения списка трат
    paymentsList(state) {
      return state.paymentsList;
    },
  },
  mutations: {
    //это как методы, но направлены на изменение данных
    SET_PAYMENTS_LIST(state, paymentsList) {
      state.paymentsList = paymentsList; //присваиваем новое состояние
    }, // первое - это state, который выше,
    // а второе - это данные, которые мы хотим передать в мутацию
    ADD_PAYMENTS_DATA(state, payment) {
      state.paymentsList.push(payment);
    },
  },
  actions: {
    //производится деструктуризация входящего объекта и забирается commit
    fetchData({ commit }) {
      setTimeout(() => {
        const initialPaymentsList = [
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
        commit("SET_PAYMENTS_LIST", initialPaymentsList); //после получения данных нужно вызвать мутацию и передать туда эти данные
      }, 1000);
    },
    addNewPayment({ commit }, payment) {
      commit("ADD_PAYMENTS_DATA", payment);
    },
  },
  modules: {
    categoryList,
  },
});
