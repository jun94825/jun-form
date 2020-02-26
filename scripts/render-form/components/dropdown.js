import { noBinding } from '../extends/noBinding.js';

export default Vue.component('dropdown', {
  template: `
    <div class="r-question" v-if="display">
      <div>
        <div>
          <p class="question-title">{{ data.Title }}</p>
          <small v-if="data.Required">*</small>
        </div>

        <v-select
          class="r-v-select"
          v-model="data.Answer"
          :options="options"
          :reduce="title => title.code"
          label="title"
          :disabled="readOnly"
        >
        </v-select>
      </div>
    </div>
  `,
  computed: {
    options() {
      let list = [];

      this.data.Options.forEach(option => {
        list.push({
          title: option.Value,
          code: option.Guid,
        });
      });

      return list;
    },
  },
  extends: noBinding,
});
