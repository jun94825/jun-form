// Vuex
import store from '../store/index.js';

// Components
import './components/title.js';
import './components/question.js';
import './components/dialog.js';

// Vue Select
Vue.component('v-select', VueSelect.VueSelect);

Vue.component('jun-form', {
  template: `
    <div>
      <Dialog v-if="dialogStatus"></Dialog>
      
      <div id="header">
        <p>Jun Form</p>
      </div>
      
      <div id="main">
        <div id="form-editor">
          <Title :form="form" />

          <draggable v-model="form.Questions" @start="drag" @end="end" ghost-class="ghost" v-bind="dragOptions">
            <transition-group>
              <Question v-for="(question, index) in form.Questions" :key="question.Guid" :question="question" :index="index" />
            </transition-group>
          </draggable>
        </div>

        <div class="add-new-question" @click="addNewQuestion">
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
    form() {
      return store.state.form;
    },
    dialogStatus() {
      return store.state.dialogStatus;
    },
  },
  methods: {
    getGuid() {
      function g() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
          .toUpperCase();
      }
      return `${g()}${g()}-${g()}-${g()}-${g()}-${g()}${g()}${g()}`;
    },
    addNewQuestion() {
      this.form.Questions.push({
        Guid: this.getGuid(),
        Title: '',
        Type: 'radio',
        Options: [
          {
            Guid: this.getGuid(),
            Value: '選項 1',
            Binding: [],
            Score: 0,
          },
        ],
        Required: false,
      });
    },
    // 不重要
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
  created() {
    const form = {
      Guid: this.getGuid(),
      Title: '',
      Description: '',
      ScoreEnable: false,
      Questions: [
        {
          Guid: this.getGuid(),
          Title: '第一題',
          Type: 'radio',
          Options: [
            {
              Guid: this.getGuid(),
              Value: '選項 1',
              Binding: [],
              Score: 0,
            },
          ],
          Required: false,
        },
      ],
    };

    store.commit('createFormData', form);
  },
});

const vm = new Vue({
  el: '#app',
  store,
});

// 取得元件內的函數
vm.$refs['jun-form'].sayHello();
