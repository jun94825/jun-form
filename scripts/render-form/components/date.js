import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('date', {
  template: `
    <div class="r-question" v-if="display">
      <div>
        <p class="question-title">{{ data.Title }}</p>
        <small>*</small>
      </div>
      
      <div>
        <input type="date" v-model="data.Answer"/>
      </div>
    </div>
  `,
  extends: dropdown_literal_date,
});
