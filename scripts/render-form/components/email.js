import { noBinding } from '../extends/noBinding.js';

export default Vue.component('email', {
  template: `
    <div class="r-question" v-if="display">
      <div>
        <p class="question-title">{{ data.Title }}</p>
        <small v-if="data.Required">*</small>
      </div>
      
      <div>
        <input class="r-input" type="text" v-model="data.Answer" :disabled="readOnly" placeholder="請輸入您的電郵" />
        <div class="bar"></div>
      </div>
    </div>
  `,
  extends: noBinding,
});
