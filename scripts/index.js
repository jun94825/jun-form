import Title from './components/title.js';
import Questions from './components/questions.js';

Vue.component('jun-form', {
  components: { Title, Questions },
  template: `
    <div>
      <div id="header"></div>
      
      <div id="main">
        <div id="form-editor">
          <Title id="title" />
          <Questions id="question" />
        </div>
      </div>
    </div>
  `,
});

const v = new Vue({
  el: '#app',
});
