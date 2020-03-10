## # 必要檔案

CSS：
  - css/style.css
  - css/vue-select.css
  
JavaScript：
  - scripts/app.bundle.js
  
  - scripts/other/vue.js
  - scripts/other/vuex.js
  - scripts/other/sortable.js
  - scripts/other/vue-select.js
  - scripts/other/vue-draggable.js
  - scripts/other/vue2-datepicker.js
  
Font Awsome：
  - <script src="https://kit.fontawesome.com/b5bdf28be2.js" crossorigin="anonymous"></script>
  
## # 載入順序

```html
<head>
  <link rel="stylesheet" href="css/vue-select.css" />
  <link rel="stylesheet" href="css/style.css" />
  <script src="https://kit.fontawesome.com/b5bdf28be2.js" crossorigin="anonymous"></script>
</head>

<body>
  <script src="./scripts/other/vue.js"></script>

  <div id="jun-form">
    <!-- 你要使用的元件 -->
  </div>

  <script>
    let junForm;
    const eventBus = new Vue();
  </script>

  <script src="./scripts/other/vuex.js"></script>
  <script src="./scripts/other/sortable.js"></script>
  <script src="./scripts/other/vue-draggable.js"></script>
  <script src="./scripts/other/vue-select.js"></script>
  <script src="./scripts/other/vue2-datepicker.js"></script>

  <script type="module" src="./scripts/app.js"></script>
</body>
```

請確保：
- style.css 是最後一支載入的 css
- vue.js 在 `const eventBus = new Vue();` 之前載入
- app.js 是最後一支載入的 js

備註：
- 載入路徑請依照您的項目自行調整
- 若您的項目中已存在相同的必要檔案則可忽略，但上述三點請務必遵循

## # 編譯指令

若您有需要對 app.js 做修改，請在修改後於終端機（路徑為當前項目）鍵入

    npm run deploy

app.bundle.js 方可完成更新

注意：

- 請勿隨意更改 scripts 資料夾名稱以及 app.js 內引用元件的路徑，否則 webpack.config.js 也得一併修改

## # 元件

- 建立表單

```html
<create-form :edit-mode="boolean" :back-url="string" />
```

### Options

| Attribute   | Type    | Default | Feature                         |
|:------------|:-------:|:-------:|:--------------------------------|
| `edit-mode` | boolean | false   | 編輯模式，只限於更動文本類型的資料 |
| `back-url`  | string  | ''      | 欲返回頁面的 URL，帶入參數即可作動 |

### APIs

| Function                  | Parameter | Return | Feature         |
|:--------------------------|:---------:|:------:|:----------------|
| `junForm.getFormJSON()`   | -         | JSON   | 取得 JSON       |
| `junForm.renderForm(par)` | Object    | -      | 將數據渲染回畫面 |

- 渲染表單

```html
<render-form :show-score="boolean" :read-only="boolean" :back-url="string" />
```

### Options

| Attribute    | Type    | Default | Feature                            |
|:-------------|:-------:|:-------:|:-----------------------------------|
| `show-score` | boolean | false   | 顯示分數，需開啟計分模式             |
| `ready-only` | boolean | false   | 唯讀模式，該表單的所有輸入框都將被禁用 |
| `back-url`  | string  | ''      | 欲返回頁面的 URL，帶入參數即可作動 |

### APIs

| Function                 | Parameter | Return | Feature        |
|:-------------------------|:---------:|:------:|:---------------|
| `junForm.getFormJSON()`  | -         | JSON   | 取得 JSON ，該函數會一併驗證信箱及必填項目，若驗證失敗即跳出警告視窗及回傳 `undefined`，否則您將得到您期望的 JSON |
| `junForm.renderForm(par)`| Object    | -      | 將數據渲染回畫面 |
