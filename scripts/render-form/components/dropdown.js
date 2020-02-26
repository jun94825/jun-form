import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('dropdown', {
  template: `
    <div class="r-question" v-if="display">
      <div>
        <div>
          <p class="question-title">{{ data.Title }}</p>
          <small>*</small>
        </div>

        <select v-model="data.Answer" @change="hello">
          <option value="">請選擇</option>
          <option
            v-for="option in data.Options"
            :key="option.Guid"
            :value="option.Guid"
            >{{ option.Value }}
          </option>
        </select>
      </div>
    </div>
  `,
  methods: {
    hello() {
      if (this.ScoreEnable && this.pMode) {
        this.$emit('show');
      }
    },
  },
  extends: dropdown_literal_date,
});
