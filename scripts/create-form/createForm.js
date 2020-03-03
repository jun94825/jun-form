import store from '../../store/index.js';

import './components/title.js';
import './components/question.js';
import './components/dialog.js';
import './components/editModeQues.js';
import './components/editModeTitle.js';

Vue.component('v-select', VueSelect.VueSelect);

export default Vue.component('CreateForm', {
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
  },
  template: `
    <div>
      <Dialog v-if="dialogStatus"></Dialog>
      
      <!-- <div id="header">
        <p>Jun Form</p>
      </div> -->
      
      <div id="main">
        <div class="functions">
          <div class="drag" v-if="!editMode" @click="switchDragStatus">
            <i class="fas fa-random"></i>
            <p>拖曳題組</p>
          </div>

          <div class="confirm" v-if="JSON.stringify(form) !== '{}'">
            <i class="fas fa-check"></i>
            <p>完成</p>
          </div>
        </div>

        <div id="form-editor">
          <Title v-if="!editMode" :form="form" :editMode="editMode" />
          <EditModeTitle v-else :form="form" :editMode="editMode" />
          
          <div v-if="!dragStatus">
            <div v-if="!editMode">
              <Question v-for="(question, index) in form.Questions" :key="question.Guid" :question="question" :index="index" />
            </div>
            
            <div v-else>
              <EditModeQues v-for="(question, index) in form.Questions" :key="question.Guid" :question="question" :index="index" />
            </div>
          </div>

          <draggable v-else v-model="form.Questions" @start="start" @end="end" ghost-class="ghost" v-bind="dragOptions">
            <transition-group>
              <div class="drag-container" v-for="(question, index) in form.Questions" :key="question.Guid">
                題組 {{ index + 1 }} - {{ question.Title }}
              </div>
            </transition-group>
          </draggable>
        </div>

        <div class="add-new-question" v-if="!editMode" @click="addNewQuestion">
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
    addNewQuestion() {
      this.form.Questions.push({
        Guid: this.$root.getGuid(),
        Title: '',
        Type: 'radio',
        Options: [
          {
            Guid: this.$root.getGuid(),
            Value: '選項 1',
            Binding: [],
            Score: 0,
          },
        ],
        Answer: [],
        Required: false,
      });
    },
    switchDragStatus() {
      this.dragStatus = !this.dragStatus;
    },
    getFormJSON() {
      if (this.form.Title === '') {
        window.alert('請輸入表單標題');
        return undefined;
      } else {
        return JSON.stringify(store.state.form);
      }
    },
    renderForm(obj) {
      store.state.form = obj;
    },
    start() {},
    end() {},
  },
  created() {
    if (this.editMode) {
      store.commit('createFormData', {});
    } else {
      const form = {
        Guid: this.$root.getGuid(),
        Title: '',
        Description: '',
        ScoreEnable: false,
        Questions: [
          {
            Guid: this.$root.getGuid(),
            Title: '第一題',
            Type: 'radio',
            Options: [
              {
                Guid: this.$root.getGuid(),
                Value: '選項 1',
                Binding: [],
                Score: 0,
              },
            ],
            Answer: [],
            Required: false,
          },
        ],
      };
      store.commit('createFormData', form);
    }
  },
  mounted() {
    junForm = {
      getFormJSON: this.getFormJSON,
      renderForm: this.renderForm,
    };
  },
});
