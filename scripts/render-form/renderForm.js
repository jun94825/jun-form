import './components/radio.js';
import './components/checkbox.js';
import './components/dropdown.js';
import './components/literal.js';
import './components/date.js';
import './components/number.js';
import './components/email.js';
import './components/english.js';

const formDemo = {
  Guid: 'F9CB0141-88EC-2C59-0E33-6710FFFE641B',
  Title: '測試表單',
  Description: '我是說明',
  ScoreEnable: true,
  Questions: [
    {
      Guid: '33406B2E-F83F-2671-A2DB-94CE99BD1525',
      Title: '安安',
      Type: 'radio',
      Options: [
        {
          Guid: '5F8DB917-3CF4-B551-3F54-E4B9E5C68BE6',
          Value: '選項 1',
          Binding: [],
          Score: '1',
        },
        {
          Guid: '3C24FC97-371E-24A0-708D-0923454DF686',
          Value: '選項 2',
          Binding: ['6DC102E3-D372-E398-A491-52D503BEBFB4'],
          Score: '2',
        },
        {
          Guid: '4BD3BB99-ADFF-4903-8BD0-9CD42F413C7B',
          Value: '選項 3',
          Binding: [],
          Score: '3',
        },
      ],
      Required: true,
      Answer: ['3C24FC97-371E-24A0-708D-0923454DF686'],
    },
    {
      Guid: '6DC102E3-D372-E398-A491-52D503BEBFB4',
      Title: '我是',
      Type: 'checkbox',
      Options: [
        {
          Guid: '6259C814-331B-EA87-C022-B1970490E53F',
          Value: '選項 1',
          Binding: [],
          Score: '1',
        },
        {
          Guid: 'DFDD205E-0C45-996F-BEE7-765A431F2288',
          Value: '選項 2',
          Binding: [],
          Score: '2',
        },
        {
          Guid: '4B5F7D0B-31D6-7976-64B2-DB8E20080F2B',
          Value: '選項 3',
          Binding: ['B82E1552-8DEE-25F1-C90B-1ADCD8C4E281'],
          Score: '3',
        },
      ],
      Required: true,
      Answer: ['4B5F7D0B-31D6-7976-64B2-DB8E20080F2B'],
    },
    {
      Guid: 'B82E1552-8DEE-25F1-C90B-1ADCD8C4E281',
      Title: '測試',
      Type: 'dropdown',
      Options: [
        {
          Guid: 'B11DA089-DD73-E30F-4CA5-8A7163C4917F',
          Value: '選項 1',
          Binding: [],
          Score: '1',
        },
        {
          Guid: '9E1EDC1B-B885-A8E8-FE2B-4E08ECEF4A0F',
          Value: '選項 2',
          Binding: [],
          Score: '2',
        },
        {
          Guid: 'E1A3916D-2089-4C53-56BD-0FDA9C74DC1C',
          Value: '選項 3',
          Binding: [],
          Score: '3',
        },
      ],
      Required: true,
      Answer: ['B11DA089-DD73-E30F-4CA5-8A7163C4917F'],
    },
    {
      Guid: 'DF42A72E-5F8A-22FE-F452-213788E27508',
      Title: '表單',
      Type: 'literal',
      Options: [
        {
          Guid: 'CCEF631B-F25A-3079-7612-BCE22D5846F4',
          Value: '選項 1',
          Binding: [],
          Score: 0,
        },
      ],
      Required: false,
      Answer: ['aaa'],
    },
    {
      Guid: 'E0A71B07-A6BD-434C-60DF-E32F12EFA339',
      Title: '今晚',
      Type: 'date',
      Options: [
        {
          Guid: '130BB6E5-866E-2CD3-3159-0EB536EC5CDB',
          Value: '選項 1',
          Binding: [],
          Score: 0,
        },
      ],
      Required: true,
      Answer: ['2020-02-28'],
    },
    {
      Guid: '8DF87FBC-478C-0CAB-AB58-79819F884FFC',
      Title: '就吃',
      Type: 'number',
      Options: [
        {
          Guid: '257E9244-F2AB-9A9B-A849-387B3F28D4C5',
          Value: '選項 1',
          Binding: [],
          Score: 0,
        },
      ],
      Required: false,
      Answer: ['666'],
    },
    {
      Guid: '52AE588E-5FF2-7D76-63F0-A479C21DB4B1',
      Title: '豬排',
      Type: 'email',
      Options: [
        {
          Guid: '14641BBA-5B10-10C6-3950-49DFADD266D0',
          Value: '選項 1',
          Binding: [],
          Score: 0,
        },
      ],
      Required: false,
      Answer: ['bbb'],
    },
    {
      Guid: '7011E9EA-CE72-0BB1-2028-C45D08414862',
      Title: '飯吧',
      Type: 'english',
      Options: [
        {
          Guid: 'D5CDE422-F297-E7FC-AE11-EE0A1826E6A5',
          Value: '選項 1',
          Binding: [],
          Score: 0,
        },
      ],
      Required: false,
      Answer: ['Hello'],
    },
  ],
};

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

      // 這段確認必填的方式必須修改有問題
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
      // forEach 裡的參數得修
      if (this.form.ScoreEnable) {
        this.totalScore = 0;

        const bananas = this.form.Questions.filter(question => {
          return (
            question.Type === 'radio' ||
            question.Type === 'checkbox' ||
            question.Type === 'dropdown'
          );
        });

        bananas.forEach(banana => {
          if (banana.Type === 'checkbox') {
            banana.Answer.forEach(a => {
              banana.Options.forEach(b => {
                if (a === b.Guid) {
                  this.totalScore += parseInt(b.Score);
                }
              });
            });
          } else {
            banana.Options.forEach(i => {
              if (banana.Answer === i.Guid) {
                this.totalScore += parseInt(i.Score);
              }
            });
          }
        });
      } else {
        console.error('該表單未開啟計分模式');
        return false;
      }
    },
  },
  created() {
    this.renderForm(formDemo);
  },
  mounted() {
    if (this.showScore) this.sScore();

    junForm = {
      getFormJSON: this.getFormJSON,
      renderForm: this.renderForm,
    };
  },
});
