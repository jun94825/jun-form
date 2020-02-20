export default Vue.component('Title', {
  props: ['form'],
  template: `
    <div class="title-c">
      <div class="line"></div>

      <input type="text" class="title-text" v-model="form.Title" placeholder="標題">
      <span class="bar"></span>

      <input type="text" class="description" v-model="form.Description" placeholder="請輸入說明內容">
      <span class="bar"></span>

      <div class="switch-area">
        <p>計分模式</p>
        <input
          :id="form.Guid"
          type="checkbox"
          class="offscreen"
          v-model="form.ScoreEnable"
        />
        <label :for="form.Guid" class="switch"></label>
      </div>
    </div>
  `,
});
