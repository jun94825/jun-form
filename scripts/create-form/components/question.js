import store from '../../../store/index.js';

export default Vue.component('Question', {
  props: {
    question: Object,
    index: Number,
  },
  template: `
    <div class="question">
      <div class="banana-container">
        <small>題組 {{ index + 1 }}</small>
        <i v-if="被綁定囉呵呵" class="fas fa-link"></i>
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
            <div class="del-container">
              <small>刪除選項</small>
              <i class="fas fa-times" @click="delOption(index)"></i>
            </div>
            <div class="binding-container" v-if="question.Type !== 'dropdown'">
              <small>串聯題組</small>
              <i v-if="option.Binding.length > 0" class="fas fa-link light" @click="switchDialog(option)"></i>
              <i v-else class="fas fa-link" @click="switchDialog(option)"></i>
            </div>
          </div>
        </div>

        <div class="option" v-else>
          <i :class="currentType.class"></i>
          <p>{{ currentType.chinese }}</p>
        </div>

        <div class="option" v-if="question.Type === 'radio' || question.Type === 'checkbox' || question.Type === 'dropdown'">
          <div class="btn-addNewOption" @click="addNewOption">新增選項</div>
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
  data: () => ({
    typeStatus: false,
  }),
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
    被綁定囉呵呵() {
      let res = false;

      this.form.Questions.forEach(question => {
        question.Options.forEach(option => {
          option.Binding.forEach(guid => {
            if (guid === this.question.Guid) res = true;
          });
        });
      });

      return res;
    },
  },
  methods: {
    up() {
      this.typeStatus = true;
    },
    down(question) {
      this.typeStatus = false;
      this.currentType = question.type;

      if (
        !(
          this.currentType.type === 'radio' ||
          this.currentType.type === 'checkbox' ||
          this.currentType.type == 'dropdown'
        )
      ) {
        this.question.Options[0].Value = '';
      } else {
        this.question.Options[0].Value = '選項 1';
      }
    },
    addNewOption() {
      this.question.Options.push({
        Guid: this.$root.getGuid(),
        Value: `選項 ${this.question.Options.length + 1}`,
        Binding: [],
        Score: 0,
      });
    },
    delOption(index) {
      this.question.Options.splice(index, 1);
    },
    delQuestion() {
      this.form.Questions.forEach(question => {
        question.Options.forEach(option => {
          option.Binding.forEach((guid, index, array) => {
            if (guid === this.question.Guid) array.splice(index, 1);
          });
        });
      });

      this.form.Questions.splice(this.index, 1);
    },
    switchDialog(option) {
      const { question } = this;
      store.commit('switchDialog', { question, option });
    },
    limitNumber(e) {
      e.target.value = e.target.value.replace(/[^\d]/g, '');
    },
  },
});
