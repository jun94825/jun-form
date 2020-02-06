export default Vue.component('title-c', {
  template: `
    <div>
      <div class="line"></div>
      <input type="text" class="title" v-model="title">
      <span class="bar"></span>
      <input type="text" class="description" placeholder="表單說明">
      <span class="bar"></span>
    </div>
  `,
  data() {
    return {
      title: '無標題表單',
    };
  },
});
