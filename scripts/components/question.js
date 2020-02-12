export default Vue.component('question-c', {
  template: `
    <div class="question">
      <div class="drag-bar">
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <small>題組 1</small>

      <input type="text" class="title" v-model="txt">
      <span class="bar"></span>

      <div class="type">
        <p>類型</p>
        <div id="menu-area" class="c-pointer">
          <img class="icon" src="images/radio_button.png">
          <p>選擇題</p>
          <img class="icon" src="images/arrow.png">
        </div>
      </div>

      <div class="options">
        <div class="option">
          <i class="far fa-circle"></i>
          <div class="shit">
            <input type="text" v-model="txt2">
            <span class="bar"></span>
          </div>
          <i class="fas fa-times"></i>
          <i class="fas fa-link"></i>
        </div>

        <div class="option">
          <i class="far fa-circle"></i>
          <div class="shit">
            <input type="text" v-model="txt2">
            <span class="bar"></span>
          </div>
          <i class="fas fa-times"></i>
          <i class="fas fa-link"></i>
        </div>
      </div>

      <div class="footer">
        <div class="switch-area">
          <p>本題組為必填</p>
          <input
            id="toggle3"
            type="checkbox"
            class="offscreen"
          />
          <label for="toggle3" class="switch"></label>
        </div>

        <div class="line"></div>

        <div class="delete-area">
          <i class="fas fa-trash"></i>  
          <p>刪除此題組</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      txt: '標題',
      txt2: '正文媽媽',
    };
  },
});
