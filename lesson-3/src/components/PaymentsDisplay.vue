<template>
  <div>
    <!--    <div v-if="showItems">Prop is true</div>-->
    <!--    {{ items }}-->
    <div v-for="(item, index) in pageList" :key="index">{{ item }}</div>
    {{ pagCount }}
    <div class="paginate">
      <a
        href="#"
        class="page-link"
        :class="{ 'page-link_active': page === currentPage }"
        v-for="page of pagCount"
        :key="page"
        @click="selectPage(page)"
      >
        {{ page }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  // props: ['items'],
  // props: {
  //   items: [Array, Object],
  // },
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
    };
  },
  props: {
    items: {
      type: Array,
      // required: true,
      default: () => [],
    },
    showItems: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    pagCount() {
      return Math.ceil(this.items.length / this.pageSize);
    },
    pageList() {
      const { currentPage, pageSize } = this;
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;

      return this.items.slice(start, end);
    },
  },
  methods: {
    selectPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped lang="scss">
.paginate {
  display: flex;
  justify-content: center;
}
.page-link {
  display: flex;
  align-items: center;
  margin: 7px;
  text-decoration: none;
  color: #000;

  &:hover {
    cursor: pointer;
  }

  &_active {
    color: #f16d7f;
    font-weight: 500;
  }
}
</style>
