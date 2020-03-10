import { binding } from '../extends/binding.js';

export default Vue.component('radio', {
  watch: {
    display() {
      if (!this.display) {
        this.data.Answer = '';
        this.data.Options.forEach(item => {
          if (item.Binding.length > 0) {
            item.Binding.forEach(Guid => {
              eventBus.$emit('connect', { Guid, status: false });
            });
          }
        });
      }
    },
  },
  methods: {
    checkBinding(data, item) {
      if (item.Binding.length > 0) {
        item.Binding.forEach(Guid => {
          eventBus.$emit('connect', { Guid, status: true });
        });
      }

      data.Options.forEach(option => {
        if (option.Binding.length > 0 && option.Guid !== item.Guid) {
          option.Binding.forEach(Guid => {
            eventBus.$emit('connect', { Guid, status: false });
          });
        }
      });
    },
  },
  extends: binding,
});
