const noBinding = Vue.extend({
  props: {
    data: Object,
    index: Number,
    readOnly: Boolean,
  },
  data: () => ({
    display: true,
  }),
  watch: {
    display() {
      if (!this.display) this.data.Answer = '';
    },
  },
  mounted() {
    eventBus.$on('connect', info => {
      if (info.Guid === this.data.Guid) this.display = info.status;
    });
  },
});

export { noBinding };
