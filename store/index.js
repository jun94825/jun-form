const typeList = [
  {
    type: 'radio',
    chinese: '單選題',
    class: 'far fa-dot-circle',
  },
  {
    type: 'checkbox',
    chinese: '複選題',
    class: 'far fa-check-square',
  },
  {
    type: 'dropdown',
    chinese: '下拉選單',
    class: 'far fa-caret-square-down',
  },
  {
    type: 'literal',
    chinese: '簡答',
    class: 'fas fa-align-left',
  },
  {
    type: 'date',
    chinese: '日期',
    class: 'far fa-calendar-alt',
  },
  {
    type: 'number',
    chinese: '數字',
    class: 'fas fa-sort-numeric-up-alt',
  },
  {
    type: 'email',
    chinese: '信箱',
    class: 'far fa-envelope',
  },
  {
    type: 'english',
    chinese: '英文',
    class: 'fas fa-font',
  },
];

export default new Vuex.Store({
  state: {
    typeList,
    form: {},
    currentQuestion: {},
    currentOption: {},
    dialogStatus: false,
  },
  mutations: {
    createFormData(state, payload) {
      state.form = payload;
    },
    switchDialog(state, payload) {
      state.currentQuestion = payload ? payload.question : {};
      state.currentOption = payload ? payload.option : {};
      state.dialogStatus = !state.dialogStatus;
    },
    changeBinding(state, payload) {
      state.currentOption.Binding = payload;
    },
  },
});
