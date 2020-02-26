const haveBinding = Vue.extend({
  props: {
    data: Object,
    index: Number,
    readOnly: Boolean,
  },
  template: `
    <div class="r-question" v-if="display">
      <div>
        <p class="question-title">{{ data.Title }}</p>
        <small v-if="data.Required">*</small>
      </div>

      <div class="r-option-group">
        <div class="r-option" v-for="option in data.Options" :key="option.Guid">
          <input
            :type="data.Type"
            :id="option.Guid"
            :value="option.Guid"
            v-model="data.Answer"
            @change="checkBinding(data, option)"
            :disabled="readOnly"
          />
          <label :for="option.Guid">{{ option.Value }}</label>
        </div>
      </div>
    </div>
  `,
  data: () => ({
    display: true,
  }),
  mounted() {
    eventBus.$on('connect', info => {
      if (info.Guid === this.data.Guid) {
        this.display = info.status;
      }
    });
  },
});

export { haveBinding };
