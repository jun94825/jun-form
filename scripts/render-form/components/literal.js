import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('literal', {
  template: `
    <div class="r-question" v-if="display">
      <div>
        <p class="question-title">{{ data.Title }}</p>
        <small>*</small>
      </div>
      
      <div>
        <input type="text" v-model="data.Answer" placeholder="您的回答" />
        <div class="bar"></div>
      </div>
    </div>
  `,
  extends: dropdown_literal_date,
});
