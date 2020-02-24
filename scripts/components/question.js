import store from '../../store/index.js';

export default Vue.component('Question', {
  props: {
    question: Object,
    index: Number,
  },
  template: `
    <div class="question">
      <div class="details">
        <small>題組 {{ index + 1 }}</small>
        <i class="fas fa-link"></i>
      </div>

      <input type="text" class="title" v-model="question.Title" placeholder="問題">
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
        <div class="option" v-for="(option, index) in question.Options" :key="index"
          v-if="question.Type === 'radio' || question.Type === 'checkbox' || question.Type === 'dropdown'"
        >
          <i :class="currentType.class"></i>
          <div class="shit">
            <input type="text" v-model="option.Value">
            <span class="bar"></span>
          </div>
          <i class="fas fa-times" @click="delOption(index)"></i>
          <i class="fas fa-link" @click="switchDialog(option)"></i>
        </div>

        <div class="option" v-else>
          <i :class="currentType.class"></i>
          <p>{{ currentType.chinese }}</p>
        </div>

        <div class="option" v-if="question.Type === 'radio' || question.Type === 'checkbox' || question.Type === 'dropdown'">
          <i :class="currentType.class"></i>
          <div class="shit">
            <input type="text" placeholder="新增選項" @click="addNewOption">
            <span class="bar"></span>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="switch-area">
          <p>本題組為必填</p>
          <input
            :id="question.Guid"
            type="checkbox"
            class="offscreen"
            v-model="question.Required"
          />
          <label :for="question.Guid" class="switch"></label>
        </div>
        <div class="line"></div>
        <div class="delete-area">
          <i class="fas fa-trash" @click="delQuestion"></i>  
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
    form: () => store.state.form,
    typeList: () => store.state.typeList,
    currentType: {
      get() {
        return this.typeList.find(item => item.type === this.question.Type);
      },
      set(value) {
        this.question.Type = value;
      },
    },
  },
  methods: {
    up() {
      this.typeStatus = true;
    },
    down(question) {
      this.typeStatus = false;
      this.currentType = question.type;
    },
    addNewOption() {
      this.question.Options.push({
        Guid: this.getGuid(),
        Value: `選項 ${this.question.Options.length + 1}`,
        Binding: [],
        Score: 0,
      });
    },
    delOption(index) {
      this.question.Options.splice(index, 1);
    },
    delQuestion() {
      this.form.Questions.splice(this.index, 1);
    },
    switchDialog(option) {
      const { question } = this;
      store.commit('switchDialog', { question, option });
    },
    getGuid() {
      const g = () =>
        Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
          .toUpperCase();

      return `${g()}${g()}-${g()}-${g()}-${g()}-${g()}${g()}${g()}`;
    },
  },
});
