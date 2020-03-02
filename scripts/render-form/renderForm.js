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
        this.form.Questions.forEach(question => {
          if (question.Type !== 'checkbox') {
            question.Options.forEach(option => {
              if (question.Answer === option.Guid) {
                option.Binding.forEach(guid => {
                  eventBus.$emit('connect', { guid, status: true });
                });
              } else {
                option.Binding.forEach(guid => {
                  eventBus.$emit('connect', { guid, status: false });
                });
              }
            });
          } else {
            if (question.Answer.length === 0) {
              question.Options.forEach(option => {
                option.Binding.forEach(guid => {
                  eventBus.$emit('connect', { guid, status: false });
                });
              });
            } else {
              question.Answer.forEach(guid => {
                question.Options.forEach(option => {
                  if (guid !== option.Guid) {
                    option.Binding.forEach(guid => {
                      eventBus.$emit('connect', { guid, status: false });
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
    },
    checkRequired() {
      // 除了確認該題目是否為必填而且答案是否為空值之外
      // 如果題目是必填但沒有出現在畫面上則忽略該題
      // 沒有出現在畫面上的意思是該題有被綁定但父題選取的選項並沒有選到讓該題顯示的選項
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
    if (this.showScore) this.sScore();

    junForm = {
      getFormJSON: this.getFormJSON,
      renderForm: this.renderForm,
    };
  },
});
