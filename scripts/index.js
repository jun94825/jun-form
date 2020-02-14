import Title from './components/title.js';
import Question from './components/question.js';

Vue.component('jun-form', {
  components: { Title, Question },
  data() {
    return {
      questions: [
        {
          name: 'vue.draggable',
          order: 1,
          fixed: false,
        },
        {
          name: 'draggable',
          order: 2,
          fixed: false,
        },
        {
          name: 'component',
          order: 3,
          fixed: false,
        },
        {
          name: 'for',
          order: 4,
          fixed: false,
        },
      ],
    };
  },
  template: `
    <div>
      <div id="header"></div>
      
      <div id="main">
        <div id="form-editor">
          <Title />

          <draggable v-model="questions" @start="drag" @end="end" ghost-class="ghost" v-bind="dragOptions">
            <transition-group type="transition">
              <Question v-for="item in questions" :key="item.order" :index="item.order"></Question>
            </transition-group>
          </draggable>
        </div>

        <div class="add-new-question">
          <i class="fas fa-times"></i>
          <p>新增題組</p>
        </div>
      </div>
    </div>
  `,
  computed: {
    dragOptions() {
      return {
        disabled: false,
        animation: 200,
        ghostClass: 'ghost',
        group: 'description',
      };
    },
  },
  methods: {
    drag() {
      console.log('Drag');
    },
    end() {
      console.log('End');
    },
    sayHello() {
      console.log('Hello');
    },
  },
});

const vm = new Vue({
  el: '#app',
});

// 取得元件內的函數
vm.$refs['jun-form'].sayHello();
