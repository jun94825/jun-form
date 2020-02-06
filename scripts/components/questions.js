import Functions from './functions.js';

export default Vue.component('functions-c', {
  components: { Functions },
  template: `
    <div>
      <Functions id="function" />

      <div class="up">
        <input type="text" placeholder="問題">
        <div id="menu-area" class="c-pointer">
          <img class="icon" src="images/radio_button.png">
          <p>選擇題</p>
          <img class="icon" src="images/arrow.png">
        </div>
      </div>

      <div class="middle">
        <div class="options">
          <div class="option">
            <img class="icon" src="images/radio_button.png">
            <input type="text">
            <span class="bar"></span>
            <img class="icon c-pointer" src="images/close.png">
          </div>
        </div>
      </div>

      <div class="down">
        <div class="switch-area">
          <p>必填</p>
          <input
            id="toggle"
            type="checkbox"
            class="offscreen"
          />
          <label for="toggle" class="switch"></label>
        </div>
        
        <div class="line"></div>

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
    </div>
  `,
});
