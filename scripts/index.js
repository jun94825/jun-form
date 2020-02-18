// Vuex
import store from '../store/index.js';

// Components
import Title from './components/title.js';
import Question from './components/question.js';

// Vue Select
Vue.component('v-select', VueSelect.VueSelect);

Vue.component('jun-form', {
  props: ['fuck'],
  components: { Title, Question },
  data() {
    return {
      Deselect: {
        render: createElement => createElement('span', '❌'),
      },
    };
  },
  template: `
    <div>
      <div id="header">
        <p>Jun Form</p>
      </div>
      
      <div id="main">
        <div id="form-editor">
          <Title />

          <draggable v-model="form.Questions" @start="drag" @end="end" ghost-class="ghost" v-bind="dragOptions">
            <transition-group>
              <Question v-for="(item, index) in form.Questions" :key="item.Guid" :data="item" :index="index"></Question>
            </transition-group>
          </draggable>
        </div>

        <div class="add-new-question">
          <i class="fas fa-times"></i>
          <p>新增題組</p>
        </div>
      </div>

      <v-select :components="{ Deselect }" :options="['Canada', 'United States']" multiple></v-select>
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
      Title: '無標題表單',
      Description: '',
      Questions: [
        {
          Guid: this.getGuid(),
          Title: '第一題',
          Type: 'radio',
          Options: [
            {
              Guid: '7B9C122B-2DC7-93D8-CCE2-12494144AFA2',
              Value: '選項 1',
              Binding: [],
              Score: 0,
            },
            {
              Guid: '53A22FBF-FBF1-6B9D-C050-B04B5813424C',
              Value: '選項 2',
              Binding: [],
              Score: 0,
            },
            {
              Guid: '05083595-5266-1711-1A91-7417503BA8AB',
              Value: '選項 3',
              Binding: [],
              Score: 0,
            },
          ],
          Required: false,
        },
        {
          Guid: this.getGuid(),
          Title: '第二題',
          Type: 'checkbox',
          Options: [],
          Required: false,
        },
        {
          Guid: this.getGuid(),
          Title: '第三題',
          Type: 'dropdown',
          Options: [],
          Required: false,
        },
      ],
      ScoreEnable: false,
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
