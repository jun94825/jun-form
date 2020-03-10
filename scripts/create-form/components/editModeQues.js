import store from '../../../store/index.js';

export default Vue.component('EditModeQues', {
  props: {
    question: Object,
    index: Number,
  },
  template: `
    <div class="question">
      <div>
        <small>題組 {{ index + 1 }}</small>
      </div>

      <div class="question-title-container">
        <input type="text" v-model="question.Title" placeholder="問題">
        <span class="bar"></span>
      </div>

      <div class="options">
        <div v-if="question.Type === 'radio' || question.Type === 'checkbox' || question.Type === 'dropdown'">
          <div class="option" v-for="(option, index) in question.Options" :key="index">
            <i :class="currentType.class"></i>
            <div class="shit">
              <input type="text" v-model="option.Value">
              <span class="bar"></span>
            </div>

            <div class="fuck" v-if="form.ScoreEnable">
              <input type="text" v-model="option.Score" @keyup="limitNumber" placeholder="輸入分數">
              <span class="bar"></span>
            </div>
          </div>
        </div>

        <div class="option" v-else>
          <i :class="currentType.class"></i>
          <p>{{ currentType.chinese }}</p>
        </div>
      </div>
    </div>
  `,
  computed: {
    form: () => store.state.form,
    typeList: () => store.state.typeList,
    currentType: {
      get() {
        return this.typeList.find(item => item.type === this.question.Type);
      },
      set(value) {
        if (
          !(value === 'radio' || value === 'checkbox' || value === 'dropdown')
        ) {
          this.question.Options.splice(1, this.question.Options.length - 1);
          this.question.Options[0].Binding = [];
        }

        this.question.Type = value;
      },
    },
  },
  methods: {
    limitNumber(e) {
      e.target.value = e.target.value.replace(/[^\d]/g, '');
    },
  },
});
