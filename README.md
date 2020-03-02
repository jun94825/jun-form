## 必要檔案

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
  
Font Awsome：
  - <script src="https://kit.fontawesome.com/b5bdf28be2.js" crossorigin="anonymous"></script>
  
## 載入順序

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

  <script type="module" src="./scripts/app.js"></script>
</body>
```

請確保：
- style.css 是最後一支載入的 css
- vue.js 在 `const eventBus = new Vue();` 之前載入
- app.js 是最後一支載入的 js

備註：
1. 載入路徑請依照您的項目自行調整
2. 若您的項目中已存在相同的必要檔案則可忽略，但上述三點請務必遵循

## 編譯指令

若您有需要對 app.js 做修改，請在修改後於終端機（路徑為當前項目）鍵入

    npm run deploy

app.bundle.js 即可完成更新

請勿隨意更改 scripts 資料夾名稱以及 app.js 內引用元件的路徑，否則 webpack.config.js 也得一併修改
