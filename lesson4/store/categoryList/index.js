export default {
  state: {
    categoryList: [],
  },
  getters: {
    //для получения списка категорий
    categoryList(state) {
      return state.categoryList;
    },
  },
  mutations: {
    SET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList; //присваиваем новое состояние
    }, // первое - это state, который выше,
    // а второе - это данные, которые мы хотим передать в мутацию
  },
  actions: {
    //производится деструктуризация входящего объекта и забирается commit
    fetchCategoryListData({ commit }) {
      setTimeout(() => {
        const categoryList = ["Food", "Transport", "Education", "Sport"];
        commit("SET_CATEGORY_LIST", categoryList); //после получения данных нужно вызвать мутацию и передать туда эти данные
      }, 1000);
    },
  },
};
