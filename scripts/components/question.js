import store from '../../store/index.js';

export default Vue.component('question-c', {
  props: ['data', 'index'],
  template: `
    <div class="question">
      <div class="drag-bar">
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <small>題組 {{ index }}</small>

      <input type="text" class="title" v-model="data.Title">
      <span class="bar"></span>

      <div class="type-container">
        <p>類型</p>

        <div class="current-type" v-if="!typeStatus" @click="up">
          <i :class="currentType.class"></i>
          <p>{{ currentType.chinese }}</p>
          <i class="fas fa-sort-down"></i>
        </div>

        <div class="type-list" v-else>
          <div class="type" :class="item.type" v-for="(item, index) in typeList" :key="index" @click="down(item)">
            <i :class="item.class"></i>
            <p>{{ item.chinese }}</p>
          </div>
        </div>
      </div>

      <div class="options">
        <div class="option" v-for="(item, index) in data.Options" :key="index">
          <i class="far fa-circle"></i>
          <div class="shit">
            <input type="text" v-model="item.Value">
            <span class="bar"></span>
          </div>
          <i class="fas fa-times"></i>
          <i class="fas fa-link"></i>
        </div>
      </div>

      <div class="footer">
        <div class="switch-area">
          <p>本題組為必填</p>
          <input
            id="toggle3"
            type="checkbox"
            class="offscreen"
          />
          <label for="toggle3" class="switch"></label>
        </div>
        <div class="line"></div>
        <div class="delete-area">
          <i class="fas fa-trash"></i>  
          <p>刪除此題組</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      typeStatus: false,
    };
  },
  computed: {
    typeList() {
      return store.state.typeList;
    },
    currentType: {
      get() {
        return this.typeList.find(item => item.type === this.data.Type);
      },
      set(value) {
        this.data.Type = value;
      },
    },
  },
  methods: {
    up() {
      this.typeStatus = true;
    },
    down(item) {
      this.typeStatus = false;
      this.currentType = item.type;
    },
  },
  mounted() {
    console.log(this.data);
  },
});
