import './components/radio.js';
import './components/checkbox.js';
import './components/dropdown.js';
import './components/literal.js';
import './components/date.js';
import './components/number.js';
import './components/email.js';
import './components/english.js';

export default Vue.component('RenderForm', {
  props: {
    showScore: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    form: {},
    totalScore: 0,
  }),
  template: `
    <div>
      <div class="container">
        <p class="total-score" v-if="totalScore !== 0">{{ totalScore }}</p>
        
        <div class="r-header">
          <p class="no-data" v-if="JSON.stringify(form) === '{}'">No data.</p>

          <div class="line"></div>
          <p>{{ form.Title }}</p>
          <small>{{ form.Description }}</small>
        </div>

        <component
          v-for="(question, index) in form.Questions"
          :key="question.Guid"
          :data="question"
          :index="index"
          :is="question.Type"
          :id="question.Guid"
          :readOnly="readOnly"
        ></component>
      </div>
    </div>
  `,
  watch: {
    form() {
      this.$nextTick(() => {
        this.form.Questions.forEach(Question => {
          if (Question.Type !== 'checkbox') {
            Question.Options.forEach(Option => {
              if (Question.Answer === Option.Guid) {
                Option.Binding.forEach(Guid => {
                  eventBus.$emit('connect', { Guid, status: true });
                });
              } else {
                Option.Binding.forEach(Guid => {
                  eventBus.$emit('connect', { Guid, status: false });
                });
              }
            });
          } else {
            if (Question.Answer.length === 0) {
              Question.Options.forEach(Option => {
                Option.Binding.forEach(Guid => {
                  eventBus.$emit('connect', { Guid, status: false });
                });
              });
            } else {
              Question.Answer.forEach(guid => {
                Question.Options.forEach(Option => {
                  if (guid !== Option.Guid) {
                    Option.Binding.forEach(Guid => {
                      eventBus.$emit('connect', { Guid, status: false });
                    });
                  }
                });
              });
            }
          }
        });
      });
    },
  },
  methods: {
    getFormJSON() {
      if (this.checkEmail()) {
        if (this.checkRequired()) {
          const origin = JSON.parse(JSON.stringify(this.form));

          this.form.Questions.forEach(question => {
            if (question.Type !== 'checkbox') {
              if (question.Answer.length > 0) {
                const arr = [];
                arr.push(question.Answer);
                question.Answer = arr;
              } else {
                question.Answer = [];
              }
            }
          });

          const arrayAnswer = JSON.stringify(this.form);
          this.form = origin;
          return arrayAnswer;
        } else {
          window.alert('必填欄位請務必填寫');
          return undefined;
        }
      } else {
        window.alert('請輸入正確的電郵格式');
        return undefined;
      }
    },
    renderForm(obj) {
      obj.Questions.forEach(question => {
        if (question.Type !== 'checkbox') {
          if (question.Answer.length === 1) {
            question.Answer = question.Answer[0];
          } else {
            question.Answer = '';
          }
        }
      });

      this.form = obj;
      if (this.showScore && this.form.ScoreEnable) this.sScore();
    },
    checkRequired() {
      /* 
        除了確認該題是否為必填且答案是否為空值外
        若該題是必填但並無顯示於畫面上則忽略該題
        沒有顯示於畫面上的確切意思是
        該題有被綁定但綁定該題的選項並沒有被勾選
      */
      const visibleQuestions = this.form.Questions.filter(question =>
        document.getElementById(question.Guid)
      );

      return !visibleQuestions.some(
        question =>
          question.Required &&
          (!question.Answer || question.Answer.length === 0)
      );
    },
    checkEmail() {
      let res = true;

      const bananas = this.form.Questions.filter(
        question => question.Type === 'email'
      );

      bananas.forEach(banana => {
        if (!this.validateEmail(banana.Answer)) res = false;
      });

      return res;
    },
    validateEmail(email) {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return reg.test(String(email).toLowerCase());
    },
    sScore() {
      if (this.form.ScoreEnable) {
        this.totalScore = 0;

        const bananas = this.form.Questions.filter(
          question =>
            question.Type === 'radio' ||
            question.Type === 'checkbox' ||
            question.Type === 'dropdown'
        );

        bananas.forEach(banana => {
          if (banana.Type === 'checkbox') {
            banana.Answer.forEach(answer => {
              banana.Options.forEach(option => {
                if (answer === option.Guid) {
                  this.totalScore += parseInt(option.Score);
                }
              });
            });
          } else {
            banana.Options.forEach(option => {
              if (banana.Answer === option.Guid) {
                this.totalScore += parseInt(option.Score);
              }
            });
          }
        });
      } else {
        window.alert('該表單未開啟計分模式');
      }
    },
  },
  mounted() {
    junForm = {
      getFormJSON: this.getFormJSON,
      renderForm: this.renderForm,
    };
  },
});
