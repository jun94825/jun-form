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
      // 檢查綁定 & 控制顯示與隱藏
      if (item.Binding.length > 0) {
        item.Binding.forEach(Guid => {
          eventBus.$emit('connect', { Guid, status: true });
        });
        // return false; // 當初增加這行的原因好像是因為 2 個選項綁定同個題目時，跳題效果會消失，但太久了已不可考呵呵呵：）
        return;
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
