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
        <div class="functions">
          <div class="drag" @click="switchDragStatus">
            <i class="fas fa-random"></i>
            <p>拖曳題組</p>
          </div>
          <div class="confirm">
            <i class="fas fa-check"></i>
            <p>完成編輯</p>
          </div>
        </div>

        <div id="form-editor">
          <Title :form="form" />
          
          <div v-if="!dragStatus">
            <Question v-for="(question, index) in form.Questions" :key="question.Guid" :question="question" :index="index" />
          </div>

          <draggable v-else v-model="form.Questions" @start="drag" @end="end" ghost-class="ghost" v-bind="dragOptions">
            <transition-group>
              <div class="drag-container" v-for="(question, index) in form.Questions" :key="question.Guid">
                題組 {{ index + 1 }} - {{ question.Title }}
              </div>
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
  data: () => ({
    dragStatus: false,
  }),
  computed: {
    form: () => store.state.form,
    dialogStatus: () => store.state.dialogStatus,
    dragOptions: () => ({
      animation: 250,
      disabled: false,
      ghostClass: 'ghost',
      group: 'description',
    }),
  },
  methods: {
    getGuid() {
      const g = () =>
        Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
          .toUpperCase();

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
    switchDragStatus() {
      this.dragStatus = !this.dragStatus;
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
});

// 取得元件內的函數
vm.$refs['jun-form'].sayHello();
