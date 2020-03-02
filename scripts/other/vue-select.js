/* https://unpkg.com/vue-select@3.0.0/dist/vue-select.js */

!(function(t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports.VueSelect = e())
    : (t.VueSelect = e());
})('undefined' != typeof self ? self : this, function() {
  return (function(t) {
    var e = {};
    function n(o) {
      if (e[o]) return e[o].exports;
      var i = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var i in t)
            n.d(
              o,
              i,
              function(e) {
                return t[e];
              }.bind(null, i)
            );
        return o;
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = '/'),
      n((n.s = 8))
    );
  })([
    function(t, e) {
      function n(t) {
        return (n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function o(e) {
        return (
          'function' == typeof Symbol && 'symbol' === n(Symbol.iterator)
            ? (t.exports = o = function(t) {
                return n(t);
              })
            : (t.exports = o = function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : n(t);
              }),
          o(e)
        );
      }
      t.exports = o;
    },
    function(t, e, n) {},
    function(t, e, n) {
      var o = n(4),
        i = n(5),
        s = n(6);
      t.exports = function(t) {
        return o(t) || i(t) || s();
      };
    },
    function(t, e) {
      t.exports = function(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      };
    },
    function(t, e) {
      t.exports = function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++)
            n[e] = t[e];
          return n;
        }
      };
    },
    function(t, e) {
      t.exports = function(t) {
        if (
          Symbol.iterator in Object(t) ||
          '[object Arguments]' === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      };
    },
    function(t, e) {
      t.exports = function() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      };
    },
    function(t, e, n) {
      'use strict';
      var o = n(1);
      n.n(o).a;
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var o = n(2),
        i = n.n(o),
        s = n(3),
        r = n.n(s),
        a = n(0),
        l = n.n(a),
        u = {
          watch: {
            typeAheadPointer: function() {
              this.maybeAdjustScroll();
            },
          },
          methods: {
            maybeAdjustScroll: function() {
              var t = this.pixelsToPointerTop(),
                e = this.pixelsToPointerBottom();
              return t <= this.viewport().top
                ? this.scrollTo(t)
                : e >= this.viewport().bottom
                ? this.scrollTo(this.viewport().top + this.pointerHeight())
                : void 0;
            },
            pixelsToPointerTop: function() {
              var t = 0;
              if (this.$refs.dropdownMenu)
                for (var e = 0; e < this.typeAheadPointer; e++)
                  t += this.$refs.dropdownMenu.children[e].offsetHeight;
              return t;
            },
            pixelsToPointerBottom: function() {
              return this.pixelsToPointerTop() + this.pointerHeight();
            },
            pointerHeight: function() {
              var t =
                !!this.$refs.dropdownMenu &&
                this.$refs.dropdownMenu.children[this.typeAheadPointer];
              return t ? t.offsetHeight : 0;
            },
            viewport: function() {
              return {
                top: this.$refs.dropdownMenu
                  ? this.$refs.dropdownMenu.scrollTop
                  : 0,
                bottom: this.$refs.dropdownMenu
                  ? this.$refs.dropdownMenu.offsetHeight +
                    this.$refs.dropdownMenu.scrollTop
                  : 0,
              };
            },
            scrollTo: function(t) {
              return this.$refs.dropdownMenu
                ? (this.$refs.dropdownMenu.scrollTop = t)
                : null;
            },
          },
        },
        c = {
          data: function() {
            return { typeAheadPointer: -1 };
          },
          watch: {
            filteredOptions: function() {
              this.typeAheadPointer = 0;
            },
          },
          methods: {
            typeAheadUp: function() {
              this.typeAheadPointer > 0 &&
                (this.typeAheadPointer--,
                this.maybeAdjustScroll && this.maybeAdjustScroll());
            },
            typeAheadDown: function() {
              this.typeAheadPointer < this.filteredOptions.length - 1 &&
                (this.typeAheadPointer++,
                this.maybeAdjustScroll && this.maybeAdjustScroll());
            },
            typeAheadSelect: function() {
              this.filteredOptions[this.typeAheadPointer]
                ? this.select(this.filteredOptions[this.typeAheadPointer])
                : this.taggable &&
                  this.search.length &&
                  this.select(this.search),
                this.clearSearchOnSelect && (this.search = '');
            },
          },
        },
        h = {
          props: { loading: { type: Boolean, default: !1 } },
          data: function() {
            return { mutableLoading: !1 };
          },
          watch: {
            search: function() {
              this.$emit('search', this.search, this.toggleLoading);
            },
            loading: function(t) {
              this.mutableLoading = t;
            },
          },
          methods: {
            toggleLoading: function() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              return (this.mutableLoading =
                null == t ? !this.mutableLoading : t);
            },
          },
        };
      function p(t, e, n, o, i, s, r, a) {
        var l,
          u = 'function' == typeof t ? t.options : t;
        if (
          (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
          o && (u.functional = !0),
          s && (u._scopeId = 'data-v-' + s),
          r
            ? ((l = function(t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t &&
                    t._registeredComponents &&
                    t._registeredComponents.add(r);
              }),
              (u._ssrRegister = l))
            : i &&
              (l = a
                ? function() {
                    i.call(this, this.$root.$options.shadowRoot);
                  }
                : i),
          l)
        )
          if (u.functional) {
            u._injectStyles = l;
            var c = u.render;
            u.render = function(t, e) {
              return l.call(e), c(t, e);
            };
          } else {
            var h = u.beforeCreate;
            u.beforeCreate = h ? [].concat(h, l) : [l];
          }
        return { exports: t, options: u };
      }
      var d = {
          components: {
            Deselect: p(
              {},
              function() {
                var t = this.$createElement,
                  e = this._self._c || t;
                return e(
                  'svg',
                  {
                    attrs: {
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '10',
                      height: '10',
                    },
                  },
                  [
                    e('path', {
                      attrs: {
                        d:
                          'M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z',
                      },
                    }),
                  ]
                );
              },
              [],
              !1,
              null,
              null,
              null
            ).exports,
            OpenIndicator: p(
              {},
              function() {
                var t = this.$createElement,
                  e = this._self._c || t;
                return e(
                  'svg',
                  {
                    attrs: {
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '14',
                      height: '10',
                    },
                  },
                  [
                    e('path', {
                      attrs: {
                        d:
                          'M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z',
                      },
                    }),
                  ]
                );
              },
              [],
              !1,
              null,
              null,
              null
            ).exports,
          },
          mixins: [u, c, h],
          props: {
            value: {},
            options: {
              type: Array,
              default: function() {
                return [];
              },
            },
            disabled: { type: Boolean, default: !1 },
            clearable: { type: Boolean, default: !0 },
            searchable: { type: Boolean, default: !0 },
            multiple: { type: Boolean, default: !1 },
            placeholder: { type: String, default: '' },
            transition: { type: String, default: 'vs__fade' },
            clearSearchOnSelect: { type: Boolean, default: !0 },
            closeOnSelect: { type: Boolean, default: !0 },
            label: { type: String, default: 'label' },
            autocomplete: { type: String, default: 'off' },
            reduce: {
              type: Function,
              default: function(t) {
                return t;
              },
            },
            getOptionLabel: {
              type: Function,
              default: function(t) {
                if ('object' === l()(t)) {
                  if (!t.hasOwnProperty(this.label)) return;
                  return t[this.label];
                }
                return t;
              },
            },
            onTab: {
              type: Function,
              default: function() {
                this.selectOnTab && this.typeAheadSelect();
              },
            },
            taggable: { type: Boolean, default: !1 },
            tabindex: { type: Number, default: null },
            pushTags: { type: Boolean, default: !1 },
            filterable: { type: Boolean, default: !0 },
            filterBy: {
              type: Function,
              default: function(t, e, n) {
                return (e || '').toLowerCase().indexOf(n.toLowerCase()) > -1;
              },
            },
            filter: {
              type: Function,
              default: function(t, e) {
                var n = this;
                return t.filter(function(t) {
                  var o = n.getOptionLabel(t);
                  return (
                    'number' == typeof o && (o = o.toString()),
                    n.filterBy(t, o, e)
                  );
                });
              },
            },
            createOption: {
              type: Function,
              default: function(t) {
                return (
                  'object' === l()(this.optionList[0]) &&
                    (t = r()({}, this.label, t)),
                  this.$emit('option:created', t),
                  t
                );
              },
            },
            resetOnOptionsChange: { type: Boolean, default: !1 },
            noDrop: { type: Boolean, default: !1 },
            inputId: { type: String },
            dir: { type: String, default: 'auto' },
            selectOnTab: { type: Boolean, default: !1 },
            searchInputQuerySelector: {
              type: String,
              default: '[type=search]',
            },
          },
          data: function() {
            return { search: '', open: !1, pushedTags: [], _value: [] };
          },
          watch: {
            options: function(t) {
              !this.taggable &&
                this.resetOnOptionsChange &&
                this.clearSelection();
            },
            multiple: function() {
              this.clearSelection();
            },
          },
          created: function() {
            var t = this;
            (this.mutableLoading = this.loading),
              this.$options.propsData.hasOwnProperty('reduce') &&
                this.value &&
                (Array.isArray(this.value)
                  ? (this.$data._value = this.value.map(function(e) {
                      return t.findOptionFromReducedValue(e);
                    }))
                  : (this.$data._value = this.findOptionFromReducedValue(
                      this.value
                    ))),
              this.$on('option:created', this.maybePushTag);
          },
          methods: {
            select: function(t) {
              this.isOptionSelected(t) ||
                (this.taggable &&
                  !this.optionExists(t) &&
                  (t = this.createOption(t)),
                this.multiple && (t = this.selectedValue.concat(t)),
                this.updateValue(t)),
                this.onAfterSelect(t);
            },
            deselect: function(t) {
              var e = this;
              this.updateValue(
                this.selectedValue.filter(function(n) {
                  return !e.optionComparator(n, t);
                })
              );
            },
            clearSelection: function() {
              this.updateValue(this.multiple ? [] : null);
            },
            onAfterSelect: function(t) {
              this.closeOnSelect &&
                ((this.open = !this.open), this.searchEl.blur()),
                this.clearSearchOnSelect && (this.search = '');
            },
            updateValue: function(t) {
              var e = this;
              this.isTrackingValues && (this.$data._value = t),
                null !== t &&
                  (t = Array.isArray(t)
                    ? t.map(function(t) {
                        return e.reduce(t);
                      })
                    : this.reduce(t)),
                this.$emit('input', t);
            },
            toggleDropdown: function(t) {
              var e = [
                  this.$el,
                  this.searchEl,
                  this.$refs.toggle.$el,
                  this.$refs.openIndicator.$el,
                ].concat(
                  i()(Array.from(this.$refs.openIndicator.$el.children))
                ),
                n = t.target;
              (e.includes(n) || n.classList.contains('vs__selected')) &&
                (this.open
                  ? this.searchEl.blur()
                  : this.disabled || ((this.open = !0), this.searchEl.focus()));
            },
            isOptionSelected: function(t) {
              var e = this;
              return this.selectedValue.some(function(n) {
                return e.optionComparator(n, t);
              });
            },
            optionComparator: function(t, e) {
              if ('object' !== l()(t) && 'object' !== l()(e)) {
                if (t === e) return !0;
              } else {
                if (t === this.reduce(e)) return !0;
                if (
                  this.getOptionLabel(t) === this.getOptionLabel(e) ||
                  this.getOptionLabel(t) === e
                )
                  return !0;
                if (this.reduce(t) === this.reduce(e)) return !0;
              }
              return !1;
            },
            findOptionFromReducedValue: function(t) {
              var e = this;
              return (
                this.options.find(function(n) {
                  return JSON.stringify(e.reduce(n)) === JSON.stringify(t);
                }) || t
              );
            },
            closeSearchOptions: function() {
              (this.open = !1), this.$emit('search:blur');
            },
            maybeDeleteValue: function() {
              if (
                !this.searchEl.value.length &&
                this.selectedValue &&
                this.clearable
              ) {
                var t = null;
                this.multiple &&
                  (t = i()(
                    this.selectedValue.slice(0, this.selectedValue.length - 1)
                  )),
                  this.updateValue(t);
              }
            },
            optionExists: function(t) {
              var e = this;
              return this.optionList.some(function(n) {
                return (
                  ('object' === l()(n) && e.getOptionLabel(n) === t) || n === t
                );
              });
            },
            normalizeOptionForSlot: function(t) {
              return 'object' === l()(t) ? t : r()({}, this.label, t);
            },
            maybePushTag: function(t) {
              this.pushTags && this.pushedTags.push(t);
            },
            onEscape: function() {
              this.search.length ? (this.search = '') : this.searchEl.blur();
            },
            onSearchBlur: function() {
              if (!this.mousedown || this.searching)
                return (
                  this.clearSearchOnBlur && (this.search = ''),
                  void this.closeSearchOptions()
                );
              (this.mousedown = !1),
                0 !== this.search.length ||
                  0 !== this.options.length ||
                  this.closeSearchOptions();
            },
            onSearchFocus: function() {
              (this.open = !0), this.$emit('search:focus');
            },
            onMousedown: function() {
              this.mousedown = !0;
            },
            onMouseUp: function() {
              this.mousedown = !1;
            },
            onSearchKeyDown: function(t) {
              switch (t.keyCode) {
                case 8:
                  return this.maybeDeleteValue();
              }
            },
            onSearchKeyUp: function(t) {
              switch (t.keyCode) {
                case 27:
                  return this.onEscape();
                case 38:
                  return t.preventDefault(), this.typeAheadUp();
                case 40:
                  return t.preventDefault(), this.typeAheadDown();
                case 13:
                  return t.preventDefault(), this.typeAheadSelect();
                case 9:
                  return this.onTab();
              }
            },
          },
          computed: {
            isTrackingValues: function() {
              return (
                void 0 === this.value ||
                this.$options.propsData.hasOwnProperty('reduce')
              );
            },
            selectedValue: function() {
              var t = this.value;
              return (
                this.isTrackingValues && (t = this.$data._value),
                t ? [].concat(t) : []
              );
            },
            optionList: function() {
              return this.options.concat(this.pushedTags);
            },
            searchEl: function() {
              return this.$scopedSlots.search
                ? this.$refs.selectedOptions.querySelector(
                    this.searchInputQuerySelector
                  )
                : this.$refs.search;
            },
            scope: function() {
              var t = this;
              return {
                search: {
                  attributes: {
                    disabled: this.disabled,
                    placeholder: this.searchPlaceholder,
                    tabindex: this.tabindex,
                    readonly: !this.searchable,
                    id: this.inputId,
                    'aria-expanded': this.dropdownOpen,
                    'aria-label': 'Search for option',
                    ref: 'search',
                    role: 'combobox',
                    type: 'search',
                    autocomplete: 'off',
                    value: this.search,
                  },
                  events: {
                    keydown: this.onSearchKeyDown,
                    keyup: this.onSearchKeyUp,
                    blur: this.onSearchBlur,
                    focus: this.onSearchFocus,
                    input: function(e) {
                      return (t.search = e.target.value);
                    },
                  },
                },
                spinner: { loading: this.mutableLoading },
              };
            },
            stateClasses: function() {
              return {
                'vs--open': this.dropdownOpen,
                'vs--single': !this.multiple,
                'vs--searching': this.searching,
                'vs--searchable': this.searchable,
                'vs--unsearchable': !this.searchable,
                'vs--loading': this.mutableLoading,
                'vs--disabled': this.disabled,
              };
            },
            clearSearchOnBlur: function() {
              return this.clearSearchOnSelect && !this.multiple;
            },
            searching: function() {
              return !!this.search;
            },
            dropdownOpen: function() {
              return !this.noDrop && this.open && !this.mutableLoading;
            },
            searchPlaceholder: function() {
              if (this.isValueEmpty && this.placeholder)
                return this.placeholder;
            },
            filteredOptions: function() {
              var t = [].concat(this.optionList);
              if (!this.filterable && !this.taggable) return t;
              var e = this.search.length
                ? this.filter(t, this.search, this)
                : t;
              return (
                this.taggable &&
                  this.search.length &&
                  !this.optionExists(this.search) &&
                  e.unshift(this.search),
                e
              );
            },
            isValueEmpty: function() {
              return 0 === this.selectedValue.length;
            },
            showClearButton: function() {
              return (
                !this.multiple &&
                this.clearable &&
                !this.open &&
                !this.isValueEmpty
              );
            },
          },
        },
        f =
          (n(7),
          p(
            d,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                'div',
                {
                  staticClass: 'v-select',
                  class: t.stateClasses,
                  attrs: { dir: t.dir },
                },
                [
                  n(
                    'div',
                    {
                      ref: 'toggle',
                      staticClass: 'vs__dropdown-toggle',
                      on: {
                        mousedown: function(e) {
                          return e.preventDefault(), t.toggleDropdown(e);
                        },
                      },
                    },
                    [
                      n(
                        'div',
                        {
                          ref: 'selectedOptions',
                          staticClass: 'vs__selected-options',
                        },
                        [
                          t._l(t.selectedValue, function(e) {
                            return t._t(
                              'selected-option-container',
                              [
                                n(
                                  'span',
                                  { key: e.index, staticClass: 'vs__selected' },
                                  [
                                    t._t(
                                      'selected-option',
                                      [
                                        t._v(
                                          '\n            ' +
                                            t._s(t.getOptionLabel(e)) +
                                            '\n          '
                                        ),
                                      ],
                                      null,
                                      t.normalizeOptionForSlot(e)
                                    ),
                                    t._v(' '),
                                    t.multiple
                                      ? n(
                                          'button',
                                          {
                                            staticClass: 'vs__deselect',
                                            attrs: {
                                              disabled: t.disabled,
                                              type: 'button',
                                              'aria-label': 'Deselect option',
                                            },
                                            on: {
                                              click: function(n) {
                                                return t.deselect(e);
                                              },
                                            },
                                          },
                                          [n('deselect')],
                                          1
                                        )
                                      : t._e(),
                                  ],
                                  2
                                ),
                              ],
                              {
                                option: t.normalizeOptionForSlot(e),
                                deselect: t.deselect,
                                multiple: t.multiple,
                                disabled: t.disabled,
                              }
                            );
                          }),
                          t._v(' '),
                          t._t(
                            'search',
                            [
                              n(
                                'input',
                                t._g(
                                  t._b(
                                    { staticClass: 'vs__search' },
                                    'input',
                                    t.scope.search.attributes,
                                    !1
                                  ),
                                  t.scope.search.events
                                )
                              ),
                            ],
                            null,
                            t.scope.search
                          ),
                        ],
                        2
                      ),
                      t._v(' '),
                      n(
                        'div',
                        { staticClass: 'vs__actions' },
                        [
                          n(
                            'button',
                            {
                              directives: [
                                {
                                  name: 'show',
                                  rawName: 'v-show',
                                  value: t.showClearButton,
                                  expression: 'showClearButton',
                                },
                              ],
                              staticClass: 'vs__clear',
                              attrs: {
                                disabled: t.disabled,
                                type: 'button',
                                title: 'Clear selection',
                              },
                              on: { click: t.clearSelection },
                            },
                            [n('deselect')],
                            1
                          ),
                          t._v(' '),
                          t.noDrop
                            ? t._e()
                            : n('open-indicator', {
                                ref: 'openIndicator',
                                staticClass: 'vs__open-indicator',
                                attrs: { role: 'presentation' },
                              }),
                          t._v(' '),
                          t._t(
                            'spinner',
                            [
                              n(
                                'div',
                                {
                                  directives: [
                                    {
                                      name: 'show',
                                      rawName: 'v-show',
                                      value: t.mutableLoading,
                                      expression: 'mutableLoading',
                                    },
                                  ],
                                  staticClass: 'vs__spinner',
                                },
                                [t._v('Loading...')]
                              ),
                            ],
                            null,
                            t.scope.spinner
                          ),
                        ],
                        2
                      ),
                    ]
                  ),
                  t._v(' '),
                  n('transition', { attrs: { name: t.transition } }, [
                    t.dropdownOpen
                      ? n(
                          'ul',
                          {
                            ref: 'dropdownMenu',
                            staticClass: 'vs__dropdown-menu',
                            attrs: { role: 'listbox' },
                            on: {
                              mousedown: t.onMousedown,
                              mouseup: t.onMouseUp,
                            },
                          },
                          [
                            t._l(t.filteredOptions, function(e, o) {
                              return n(
                                'li',
                                {
                                  key: o,
                                  staticClass: 'vs__dropdown-option',
                                  class: {
                                    'vs__dropdown-option--selected': t.isOptionSelected(
                                      e
                                    ),
                                    'vs__dropdown-option--highlight':
                                      o === t.typeAheadPointer,
                                  },
                                  attrs: { role: 'option' },
                                  on: {
                                    mouseover: function(e) {
                                      t.typeAheadPointer = o;
                                    },
                                    mousedown: function(n) {
                                      return (
                                        n.preventDefault(),
                                        n.stopPropagation(),
                                        t.select(e)
                                      );
                                    },
                                  },
                                },
                                [
                                  t._t(
                                    'option',
                                    [
                                      t._v(
                                        '\n          ' +
                                          t._s(t.getOptionLabel(e)) +
                                          '\n        '
                                      ),
                                    ],
                                    null,
                                    t.normalizeOptionForSlot(e)
                                  ),
                                ],
                                2
                              );
                            }),
                            t._v(' '),
                            t.filteredOptions.length
                              ? t._e()
                              : n(
                                  'li',
                                  {
                                    staticClass: 'vs__no-options',
                                    on: {
                                      mousedown: function(t) {
                                        t.stopPropagation();
                                      },
                                    },
                                  },
                                  [
                                    t._t('no-options', [
                                      t._v('Sorry, no matching options.'),
                                    ]),
                                  ],
                                  2
                                ),
                          ],
                          2
                        )
                      : t._e(),
                  ]),
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        y = { ajax: h, pointer: c, pointerScroll: u };
      n.d(e, 'VueSelect', function() {
        return f;
      }),
        n.d(e, 'mixins', function() {
          return y;
        });
      e.default = f;
    },
  ]);
});
//# sourceMappingURL=vue-select.js.map
