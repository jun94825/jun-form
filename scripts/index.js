import Title from './components/title.js';
import Question from './components/question.js';

Vue.component('jun-form', {
  components: { Title, Question },
  data() {
    return {
      questions: ['a', 'b', 'c', 'd', 'e'],
      // 測試變數
      container: null,
      containerHeight: 0,
      currentDrag: null,
      dragging: false,
      boxX: 0,
      boxY: 0,
      mouseX: 0,
      mouseY: 0,
      offsetX: 0,
      offsetY: 0,
      // 各題組的末端距離 container 的距離
      junH: [],
      // 暫存當前拖曳的 data
      currentData: null,
    };
  },
  template: `
    <div>
      <div id="header"></div>
      
      <div id="main">
        <div id="form-editor">
          <Title />

          <div class="container" @mousemove="move">
            <Question v-for="(item, index) in questions" :key="item" :class="item" :index="index" @mousedown.native="down(item, index)" />
          </div>
        </div>

        <div class="add-new-question">
          <i class="fas fa-times"></i>
          <p>新增題組</p>
        </div>
      </div>
    </div>
  `,
  methods: {
    down(item, index) {
      this.dragging = true;
      this.currentDrag = document.querySelector('.' + item);

      this.currentData = this.questions[index];

      this.currentDrag.style.zIndex = '30678';
      this.currentDrag.style.boxShadow = '0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.5)';

      this.boxX = this.currentDrag.offsetLeft;
      this.boxY = this.currentDrag.offsetTop;

      this.mouseX = parseInt(this.getMouseXY(event).x);
      this.mouseY = parseInt(this.getMouseXY(event).y);

      this.offsetX = this.mouseX - this.boxX;
      this.offsetY = this.mouseY - this.boxY;
    },
    move() {
      if (this.dragging) {
        let x = this.getMouseXY(event).x - this.offsetX;
        let y = this.getMouseXY(event).y - this.offsetY;

        let width = this.container.clientWidth - this.currentDrag.offsetWidth;
        let height =
          this.container.clientHeight - this.currentDrag.offsetHeight;

        x = Math.min(Math.max(0, x), width);
        y = Math.min(Math.max(0, y), height);

        this.junH.forEach((height, index) => {
          if (y > height) {
            let arr = [...this.questions];
            arr.pop();
            this.questions = arr;
          }
        });

        this.currentDrag.style.left = x + 'px';
        this.currentDrag.style.top = y + 'px';
      }
    },
    up() {
      this.dragging = false;

      this.currentDrag.style.zIndex = '';
      this.currentDrag.style.boxShadow = '';
    },
    getMouseXY(e) {
      let x = 0,
        y = 0;

      e = e || window.event;

      if (e.pageX) {
        x = e.pageX;
        y = e.pageY;
      } else {
        x = e.clientX + document.body.scrollLeft - document.body.clientLeft;
        y = e.clientY + document.body.scrollTop - document.body.clientTop;
      }

      return {
        x: x,
        y: y,
      };
    },
    fuck() {
      console.log('fuck');
    },
  },
  mounted() {
    this.container = document.querySelector('.container');

    // 計算 container 該有的高度
    Array.from(this.container.childNodes).forEach(item => {
      if (item.offsetHeight) {
        item.style.top = this.containerHeight + 'px';
        this.containerHeight += item.offsetHeight + 16;
      }
    });
    this.container.style.height = this.containerHeight - 16 + 'px';

    // 取得各元素的底線距離 container 的距離
    Array.from(this.container.childNodes).forEach((item, index, array) => {
      this.junH.push(item.offsetTop + item.offsetHeight);
    });

    document.onmouseup = this.up;
  },
});

const vm = new Vue({
  el: '#app',
});

vm.$refs['jun-form'].fuck(); // 取得 vue 實例內的 function

// // 拖曳代碼
// var dragging = false;
// var boxX, boxY, mouseX, mouseY, offsetX, offsetY;

// var box = document.querySelector('.a');
// var container = document.querySelector('.container');

// // 鼠標按下
// box.onmousedown = down;
// // 鼠標移動
// container.onmousemove = move;
// // 釋放鼠標
// document.onmouseup = up;

// // 鼠標按下的函數
// function down(item) {
//   dragging = true;

//   // 鼠標按下後改變樣式
//   this.style.zIndex = '30678';
//   this.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
//   this.style.border = '1px solid rgba(255, 255, 255, 0.75)';
//   this.style.boxShadow = '0 0 0.25rem rgba(0, 0, 0, 0.5)';

//   // 獲取元素所在座標
//   boxX = box.offsetLeft;
//   boxY = box.offsetTop;

//   // 獲取鼠標所在座標
//   mouseX = parseInt(getMouseXY(event).x);
//   mouseY = parseInt(getMouseXY(event).y);

//   // 鼠標相對元素左和上邊緣的座標
//   offsetX = mouseX - boxX;
//   offsetY = mouseY - boxY;
// }

// // 鼠標移動的函數
// function move(e) {
//   if (dragging) {
//     // 獲取移動後的元素座標
//     var x = getMouseXY(e).x - offsetX;
//     var y = getMouseXY(e).y - offsetY;

//     // 計算可移動位置大小，保證元素不超過可移動範圍，此處就是父元素的寬度減去子元素寬度
//     var width = container.clientWidth - box.offsetWidth;
//     var height = container.clientHeight - box.offsetHeight;

//     // min 方法保證不會超過右邊界，max 則保證不會超過左邊界
//     x = Math.min(Math.max(0, x), width);
//     y = Math.min(Math.max(0, y), height);

//     // 給元素即時定位
//     box.style.left = x + 'px';
//     box.style.top = y + 'px';
//   }
// }

// // 釋放鼠標函數
// function up(e) {
//   dragging = false;

//   // 釋放鼠標後改變樣式
//   box.style.zIndex = '0';
//   box.style.backgroundColor = '#fff';
//   box.style.border = '0.0625rem solid #dadce0';
//   box.style.boxShadow = 'none';
// }

// // 獲取鼠標位置函數
// function getMouseXY(e) {
//   var x = 0,
//     y = 0;

//   e = e || window.event;

//   if (e.pageX) {
//     x = e.pageX;
//     y = e.pageY;
//   } else {
//     x = e.clientX + document.body.scrollLeft - document.body.clientLeft;
//     y = e.clientY + document.body.scrollTop - document.body.clientTop;
//   }

//   return {
//     x: x,
//     y: y,
//   };
// }

// var containerHeight = 0;

// Array.from(container.childNodes).forEach(item => {
//   if (item.offsetHeight) {
//     item.style.top = containerHeight + 'px';
//     containerHeight += item.offsetHeight + 16;
//   }
// });

// container.style.height = containerHeight + 'px';
