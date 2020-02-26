import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('english', {
  template: `
    <div class="r-question" v-if="display">
      <div>
        <p class="question-title">{{ data.Title }}</p>
        <small>*</small>
      </div>

      <div>
        <input type="text" v-model="data.Answer" @keyup="inputEnglish" placeholder="請輸入英文字母" />
        <div class="bar"></div>
      </div>
    </div>
  `,
  methods: {
    inputEnglish(e) {
      e.target.value = e.target.value.replace(/[^\a-\z\A-\Z]/g, '');
    },
  },
  extends: dropdown_literal_date,
});
