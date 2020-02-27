import store from '../../../store/index.js';

export default Vue.component('Dialog', {
  template: `
    <div class="mask">
      <div class="dialog">
        <p>串連題組</p>
        <p>該選項將與以下題組串連：</p>
        <v-select v-model="selected" label="title" :options="options" :reduce="title => title.guid" multiple></v-select>
        <div class="btn-container">
          <div class="btn-cancel" @click="cancel">
            <span>取消</span>
          </div>
          <div class="btn-save" @click="save">
            <span>儲存</span>
          </div>
        </div>
      </div>
    </div>
  `,
  data: () => ({
    selected: [],
  }),
  computed: {
    options() {
      let options = [];

      this.form.Questions.forEach((question, index) => {
        if (question.Guid !== this.cQuestion.Guid) {
          options.push({
            title: `題組 ${index + 1}`,
            guid: question.Guid,
          });
        }
      });

      return options;
    },
    form: () => store.state.form,
    cQuestion: () => store.state.currentQuestion,
    cOption: () => store.state.currentOption,
  },
  methods: {
    save() {
      store.commit('changeBinding', this.selected);
      store.commit('switchDialog');
    },
    cancel() {
      store.commit('switchDialog');
    },
  },
  created() {
    // 爆幹牛逼好嗎
    if (this.cOption.Binding.length > 0) {
      this.form.Questions.forEach(question => {
        this.cOption.Binding.forEach(guid => {
          if (question.Guid === guid) {
            this.selected.push(guid);
          }
        });
      });
    }
  },
});
