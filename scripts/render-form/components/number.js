import { noBinding } from '../extends/noBinding.js';

export default Vue.component('number', {
  template: `
    <div class="r-question" v-if="display">
      <div>
        <p class="question-title">{{ data.Title }}</p>
        <small v-if="data.Required">*</small>
      </div>

      <div>
        <input class="r-input" type="text" v-model="data.Answer" @keyup="inputNumber" :disabled="readOnly" placeholder="您的回答" />
        <div class="bar"></div>
      </div>
    </div>
  `,
  methods: {
    inputNumber(e) {
      e.target.value = e.target.value.replace(/[^\d]/g, '');
    },
  },
  extends: noBinding,
});
