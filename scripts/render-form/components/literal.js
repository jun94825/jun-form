import { noBinding } from '../extends/noBinding.js';

export default Vue.component('literal', {
  template: `
    <div class="r-question" v-if="display">
      <div>
        <p class="question-title">{{ data.Title }}</p>
        <small v-if="data.Required">*</small>
      </div>
      
      <div>
        <input class="r-input" type="text" v-model="data.Answer" :disabled="readOnly" placeholder="您的回答" />
        <div class="bar"></div>
      </div>
    </div>
  `,
  extends: noBinding,
});
