const radio_checkbox = Vue.extend({
  props: ['data', 'index', 'ScoreEnable', 'pMode'],
  template: `
    <div class="r-question" v-if="display">
      <div>
        <p class="question-title">{{ data.Title }}</p>
        <small>*</small>
      </div>

      <div class="r-option-group">
        <div class="r-option" v-for="option in data.Options" :key="option.Guid">
          <input
            :type="data.Type"
            :id="option.Guid"
            :value="option.Guid"
            v-model="data.Answer"
            @change="checkBinding(data, option)"
          />
          <label :for="option.Guid">{{ option.Value }}</label>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      display: true,
    };
  },
  mounted() {
    eventBus.$on('connect', info => {
      if (info.Guid === this.data.Guid) {
        this.display = info.status;
      }
    });
  },
});

export { radio_checkbox };
