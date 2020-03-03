import { noBinding } from '../extends/noBinding.js';

export default Vue.component('date', {
  template: `
    <div class="r-question" v-if="display">
      <div>
        <p class="question-title">{{ data.Title }}</p>
        <small v-if="data.Required">*</small>
      </div>
      
      <div>
        <date-picker v-model="data.Answer" valueType="format" :disabled="readOnly"></date-picker>
      </div>
    </div>
  `,
  extends: noBinding,
});
