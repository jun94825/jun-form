import Title from './components/title.js';
import Questions from './components/questions.js';

Vue.component('jun-form', {
  components: { Title, Questions },
  template: `
    <div>
      <div id="header"></div>
      
      <div id="main">
        <div id="form-editor">
          <Title id="title" />

          <div class="container">
            <div class="test d1"></div>
            <div class="test">
              <div class="box"></div>
            </div>
            <div class="test"></div>
            <div class="test"></div>
            <div class="test"></div>
          </div>

          <Questions id="question" />
        </div>
      </div>
    </div>
  `,
});

const v = new Vue({
  el: '#app',
});

// 實現拖曳代碼
var dragging = false;
var boxX, boxY, mouseX, mouseY, offsetX, offsetY;
var box = document.querySelector('.d1');
var box1 = document.querySelector('.container');

// 鼠標按下的動作
box.onmousedown = down;
// 鼠標的移動動作
box1.onmousemove = move;
// 釋放鼠標的動作
document.onmouseup = up;

// 鼠標按下後的函數，e 為事件對象
function down(e) {
  dragging = true;
  // 鼠標點擊到該區塊改變當前樣式
  this.style.zIndex = '30678';
  this.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
  this.style.border = '1px solid rgba(255, 255, 255, 0.75)';
  this.style.boxShadow = '0 0 0.25rem rgba(0, 0, 0, 0.5)';

  // 獲取元素所在的座標
  boxX = box.offsetLeft;
  boxY = box.offsetTop;

  // 獲取鼠標所在的座標
  mouseX = parseInt(getMouseXY(e).x);
  mouseY = parseInt(getMouseXY(e).y);

  // 鼠標相對元素左和上邊緣的座標
  offsetX = mouseX - boxX;
  offsetY = mouseY - boxY;
}

// 鼠標移動調用的函數
function move(e) {
  if (dragging) {
    // 獲取移動後的元素的座標
    var x = getMouseXY(e).x - offsetX;
    var y = getMouseXY(e).y - offsetY;

    // 計算可移動位置的大小
    // 保證元素不會超過可移動範圍
    // 此處就是父元素的寬度減去子元素寬度
    var width = box1.clientWidth - box.offsetWidth;
    var height = box1.clientHeight - box.offsetHeight;

    // min 方法保證不會超過右邊界，max 則保證不會超過左邊界
    x = Math.min(Math.max(0, x), width);
    y = Math.min(Math.max(0, y), height);

    // 給元素即時定位
    box.style.left = x + 'px';
    box.style.top = y + 'px';
  }
}

// 釋放鼠標的函數
function up(e) {
  dragging = false;

  // 鼠標起來後將樣式改回原樣
  box.style.zIndex = '0';
  box.style.backgroundColor = '#fff';
  box.style.border = '0.0625rem solid #dadce0';
  box.style.boxShadow = 'none';
}

// 函數用於獲取鼠標位置
function getMouseXY(e) {
  var x = 0,
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
}

var containerHeight = 0;
const box1Arr = Array.from(box1.childNodes);
box1Arr.forEach(item => {
  if (item.offsetHeight) {
    item.style.top = containerHeight + 'px';
    containerHeight += item.offsetHeight + 16;
  }
});
box1.style.height = containerHeight + 'px';
