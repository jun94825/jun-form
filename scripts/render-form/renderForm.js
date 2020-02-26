import './components/radio.js';
import './components/checkbox.js';
import './components/dropdown.js';
import './components/literal.js';
import './components/date.js';
import './components/number.js';
import './components/email.js';
import './components/english.js';

const form1 = {
  Guid: '10E1F831-12A9-5071-5974-CF39B36C2897',
  Title: '無標題表單',
  Description: '我是說明啦乾',
  Questions: [
    {
      Guid: '932B5B39-7C2D-762D-A129-AC6F539A9255',
      Title: '單選題',
      Type: 'radio',
      Options: [
        {
          Guid: 'F1FEEDC1-636B-234A-DEC9-B73191D1E899',
          Value: '選項 1',
          Binding: [],
          Score: 0,
        },
        {
          Guid: 'F1FEEDC1-636B-234A-DEC9-B73191D1E897',
          Value: '選項 2',
          Binding: [],
          Score: 0,
        },
      ],
      Required: true,
      Answer: [],
    },
    {
      Guid: 'F2A67B08-FD82-D5AC-838F-BB020CBA4C9E',
      Type: 'checkbox',
      Title: '複選題',
      Options: [
        {
          Guid: '95942DFA-12CA-ECC5-5ED1-2C54A3238879',
          Value: '選項 1',
          Binding: [],
          Score: 69,
        },
        {
          Guid: '85942DFA-12CA-ECC5-5ED1-2C54A3238879',
          Value: '選項 2',
          Binding: [],
          Score: 69,
        },
      ],
      Required: true,
      Answer: [],
    },
    {
      Guid: 'F1CBC1BE-409B-0CBC-3F6A-5F905A778C06',
      Type: 'dropdown',
      Title: '下拉選單',
      Options: [
        {
          Guid: '187E2475-9662-74ED-5F4E-6C72B5443A13',
          Value: '安安 1',
          Binding: [],
          Score: 0,
        },
        {
          Guid: '287E2475-9661-74ED-5F4E-6C72B5443A13',
          Value: '你好 2',
          Binding: [],
          Score: 0,
        },
        {
          Guid: '387E3475-9661-74ED-5F4E-6C72B5443A13',
          Value: '幾歲 3',
          Binding: [],
          Score: 0,
        },
      ],
      Required: true,
      Answer: [],
    },
    {
      Guid: 'B3168FC1-CE21-D252-D619-53BC1356568D',
      Type: 'literal',
      Title: '簡答',
      Options: [],
      Required: true,
      Answer: [],
    },
    {
      Guid: '0D323ECC-3FF4-92F3-E72E-6B8D09D12BA0',
      Type: 'date',
      Title: '日期',
      Options: [],
      Required: true,
      Answer: [],
    },
    {
      Guid: '9F4E6DA0-9C7A-0DE2-6533-3ABCA5152D4B',
      Type: 'number',
      Title: '數字',
      Options: [],
      Required: true,
      Answer: [],
    },
    {
      Guid: 'CE47293C-8D50-6AA4-05CB-93145FECE212',
      Type: 'email',
      Title: '信箱',
      Options: [],
      Required: true,
      Answer: [],
    },
    {
      Guid: '85EE85B8-C4DB-87FB-0341-A3B2CBD45635',
      Type: 'english',
      Title: '英文',
      Options: [],
      Required: true,
      Answer: [],
    },
  ],
  ScoreEnable: true,
};

const form2 = {
  Guid: 'BE14E49C-9609-20FC-304F-0E2ED2EDD19F',
  Title: '無標題表單',
  Description: '我是說明啦乾',
  Questions: [
    {
      Guid: '0B9F72D5-4251-88B1-B886-52BC7ACA4523',
      Title: '安安',
      Type: 'radio',
      Options: [
        {
          Guid: 'E7F3FF7C-22C2-B3E8-10F0-8928A2C14F3A',
          Value: '選項 1',
          Binding: [],
          Score: '1',
        },
        {
          Guid: 'AC4700CE-93B9-35B4-14A2-2E8571140F3B',
          Value: '選項 2',
          Binding: ['F47B97F5-27F2-9E97-CE77-6996E27DB600'],
          Score: '2',
        },
        {
          Guid: 'C1346526-503C-8FBC-211F-C03BE34941D3',
          Value: '選項 3',
          Binding: [],
          Score: '3',
        },
        {
          Guid: 'C1346516-503C-8FBC-211F-C03BE34941D3',
          Value: '選項 4',
          Binding: [],
          Score: '4',
        },
        {
          Guid: 'C1346516-503C-8FBC-211F-C04BE34941D3',
          Value: '選項 5',
          Binding: [],
          Score: '5',
        },
      ],
      Required: true,
      Answer: ['C1346516-503C-8FBC-211F-C04BE34941D3'],
    },
    {
      Guid: 'F47B97F5-27F2-9E97-CE77-6996E27DB600',
      Type: 'dropdown',
      Title: '你好',
      Options: [
        {
          Guid: '20F25594-A1A5-5B4C-1445-9FC3223D7D17',
          Value: '選項 1',
          Binding: [],
          Score: '1',
        },
        {
          Guid: 'FD9DB399-336E-F0A2-F6C0-F79BA732F270',
          Value: '選項 2',
          Binding: [],
          Score: '2',
        },
        {
          Guid: 'ACCA7223-9EE0-4A88-199C-F1A93C147793',
          Value: '選項 3',
          Binding: [],
          Score: '3',
        },
      ],
      Required: true,
      Answer: [],
    },
    {
      Guid: 'D65436EA-9720-3308-3DCE-8C49442CAC1C',
      Type: 'date',
      Title: '幾歲',
      Options: [],
      Required: false,
      Answer: [],
    },
    {
      Guid: '3618D1C7-49CF-159F-4F23-2311CDB97B8E',
      Type: 'checkbox',
      Title: '住哪',
      Options: [
        {
          Guid: 'A29C48FC-B41E-5CB9-FD1A-82CBBAFB8E66',
          Value: '選項 1',
          Binding: [],
          Score: '1',
        },
        {
          Guid: '8BB7B3DE-067F-3649-4954-D295FC6F056F',
          Value: '選項 2',
          Binding: [],
          Score: '2',
        },
        {
          Guid: '0EED7BD6-2879-94B5-156B-FF3875018DB0',
          Value: '選項 3',
          Binding: [],
          Score: '3',
        },
      ],
      Required: true,
      Answer: [
        '8BB7B3DE-067F-3649-4954-D295FC6F056F',
        '0EED7BD6-2879-94B5-156B-FF3875018DB0',
        'A29C48FC-B41E-5CB9-FD1A-82CBBAFB8E66',
      ],
    },
  ],
  ScoreEnable: true,
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
      // 隱藏跳題
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
      const origin = JSON.parse(JSON.stringify(this.form));

      this.form.Questions.forEach(item => {
        if (item.Type !== 'checkbox') {
          if (item.Answer.length > 0) {
            const arr = [];
            arr.push(item.Answer);
            item.Answer = arr;
          } else {
            item.Answer = [];
          }
        }
      });

      const edited = JSON.stringify(this.form);

      this.form = origin;

      return edited;
    },
    renderForm(obj) {
      obj.Questions.forEach(item => {
        if (item.Type !== 'checkbox') {
          if (item.Answer.length === 1) {
            item.Answer = item.Answer[0];
          } else {
            item.Answer = '';
          }
        }
      });

      this.form = obj;
    },
    checkRequired() {
      // 除了確認該題目是否為必填而且答案是否為空值之外
      // 如果題目是必填但沒有出現在畫面上則忽略該題
      // 沒有出現在畫面上的意思是該題有被綁定但父題選取的選項並沒有選到讓該題顯示的選項
      const visibleQuesList = this.form.Questions.filter(question =>
        document.getElementById(question.Guid)
      );

      // 這段確認必填的方式必須修改有問題
      return !visibleQuesList.some(
        question => question.Required && question.Answer.length > 0
      );
    },
    checkEmail() {
      const hello = this.form.Questions.filter(item => {
        return item.Type === 'email';
      });

      let res = true;

      hello.forEach(item => {
        if (!this.validateEmail(item.Answer)) {
          res = false;
        }
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

        const res = this.form.Questions.filter(item => {
          return (
            item.Type === 'radio' ||
            item.Type === 'checkbox' ||
            item.Type === 'dropdown'
          );
        });

        res.forEach(item => {
          if (item.Type === 'checkbox') {
            item.Answer.forEach(a => {
              item.Options.forEach(b => {
                if (a === b.Guid) {
                  this.totalScore += parseInt(b.Score);
                }
              });
            });
          } else {
            item.Options.forEach(i => {
              if (item.Answer === i.Guid) {
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
    this.renderForm(form2);
  },
  mounted() {
    if (this.showScore) this.sScore();

    junForm = {
      getFormJSON: this.getFormJSON,
      renderForm: this.renderForm,
      checkEmail: this.checkEmail,
      checkRequired: this.checkRequired,
    };
  },
});
