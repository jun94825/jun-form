import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('number', {
  template: `
    <div class="r-question" v-if="display">
      <div>
        <p class="question-title">{{ data.Title }}</p>
        <small>*</small>
      </div>

      <div>
        <input type="text" v-model="data.Answer" @keyup="inputNumber" placeholder="您的回答" />
        <div class="bar"></div>
      </div>
    </div>
  `,
  methods: {
    inputNumber(e) {
      e.target.value = e.target.value.replace(/[^\d]/g, '');
    },
  },
  extends: dropdown_literal_date,
});
