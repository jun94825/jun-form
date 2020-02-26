import { noBinding } from '../extends/noBinding.js';

export default Vue.component('english', {
  template: `
    <div class="r-question" v-if="display">
      <div>
        <p class="question-title">{{ data.Title }}</p>
        <small v-if="data.Required">*</small>
      </div>

      <div>
        <input class="r-input" type="text" v-model="data.Answer" @keyup="inputEnglish" :disabled="readOnly" placeholder="請輸入英文字母" />
        <div class="bar"></div>
      </div>
    </div>
  `,
  methods: {
    inputEnglish(e) {
      e.target.value = e.target.value.replace(/[^\a-\z\A-\Z]/g, '');
    },
  },
  extends: noBinding,
});
