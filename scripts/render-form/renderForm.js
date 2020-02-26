import './components/radio.js';
import './components/checkbox.js';
import './components/dropdown.js';
import './components/literal.js';
import './components/date.js';
import './components/number.js';
import './components/email.js';
import './components/english.js';

// https://github.com/mengxiong10/vue2-datepicker/blob/master/README.zh-CN.md

export default Vue.component('RenderForm', {
  data: () => ({
    form: {},
    totalScore: 0,
    readOnlyMode: false,
    // unimportant
    previewMode: false,
  }),
  template: `
    <div>
      <div class="container">
        <h4 v-if="totalScore !== 0">得分：
          <span>{{ totalScore }}</span>
        </h4>
        
        <div class="r-header">
          <div class="line"></div>
          <p>{{ form.Title }}</p>
          <small>{{ form.Description }}</small>
        </div>

        <component
          v-for="(item, index) in form.Questions"
          :key="index"
          :data="item"
          :index="index"
          :is="item.Type"
          :id="item.Guid"
          :ScoreEnable="form.ScoreEnable"
          @show="showScore"
          :pMode="previewMode"
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
    readOnlyMode() {
      if (this.readOnlyMode) {
        const domInput = Array.from(document.querySelectorAll('input'));
        domInput.forEach(item => {
          item.disabled = true;
        });
        const domSelect = Array.from(document.querySelectorAll('select'));
        domSelect.forEach(item => {
          item.disabled = true;
        });
      }
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
      const visibleQuesList = this.form.Questions.filter(item => {
        return document.getElementById(item.Guid);
      });

      return !visibleQuesList.some(
        item => item.Required && item.Answer.length === 0
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
    showScore() {
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
        console.error('表單尚未開啟計分功能');
        return false;
      }
    },
    openReadOnlyMode() {
      this.readOnlyMode = true;
    },
    openPreviewMode() {
      this.previewMode = true;
    },
  },
  created() {
    this.renderForm({
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
              Guid: '687E2475-9662-74ED-5F4E-6C72B5443A13',
              Value: '選項 1',
              Binding: [],
              Score: 0,
            },
            {
              Guid: '687E2475-9661-74ED-5F4E-6C72B5443A13',
              Value: '選項 2',
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
    });
  },
});
