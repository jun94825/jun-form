export default Vue.component('title-c', {
  template: `
    <div class="title-c">
      <div class="line"></div>

      <input type="text" class="title-text" v-model="title">
      <span class="bar"></span>

      <input type="text" class="description" placeholder="請輸入說明內容">
      <span class="bar"></span>
      
      <div class="switch-area">
        <p>計分模式</p>
        <input
          id="toggle2"
          type="checkbox"
          class="offscreen"
        />
        <label for="toggle2" class="switch"></label>
      </div>
    </div>
  `,
  data() {
    return {
      title: '標題',
    };
  },
});
