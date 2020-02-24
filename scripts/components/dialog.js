// Vuex
import store from '../../store/index.js';

export default Vue.component('Dialog', {
  template: `
    <div class="mask">
      <div class="dialog">
        <p>串連題組</p>
        <p>當點選此選項時，顯示以下題組</p>
        <v-select v-model="selected" :options="options" multiple label="title" :reduce="title => title.guid"></v-select>
        <div class="btn-container">
          <div class="btn-cancel" @click="switchDialog">
            <span>取消</span>
          </div>
          <div class="btn-save" @click="save">
            <span>儲存</span>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      selected: [],
    };
  },
  computed: {
    options() {
      const options = [];

      store.state.form.Questions.forEach((question, index) => {
        options.push({
          title: `題組 ${index + 1}`,
          guid: question.Guid,
        });
      });

      return options;
    },
    currentOption() {
      return store.state.currentOption;
    },
  },
  methods: {
    save() {
      this.selected.forEach(item => {
        this.currentOption.Binding.push(item);
      });
      store.commit('switchDialog');
    },
    switchDialog() {
      store.commit('switchDialog');
    },
  },
});
