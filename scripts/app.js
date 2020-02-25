import store from '../store/index.js';

import './create-form/createForm.js';
import './render-form/renderForm.js';

const vm = new Vue({
  el: '#jun-form',
  methods: {
    getGuid() {
      const g = () =>
        Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
          .toUpperCase();

      return `${g()}${g()}-${g()}-${g()}-${g()}-${g()}${g()}${g()}`;
    },
    getFormJSON: () => store.state.form,
  },
});

window.junForm = {
  getFormJSON: vm.getFormJSON,
};
