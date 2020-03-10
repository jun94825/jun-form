export default Vue.component('EditModeTitle', {
  props: {
    form: Object,
  },
  template: `
    <div class="title-c" v-if="JSON.stringify(form) !== '{}'">
      <div class="line"></div>

      <div class="title-container">
        <input type="text" v-model="form.Title" placeholder="標題">
        <span class="bar"></span>
      </div>

      <div class="description-container">
        <input type="text" v-model="form.Description" placeholder="請輸入說明內容">
        <span class="bar"></span>
      </div>
    </div>
  `,
});
