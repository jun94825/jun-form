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

載入路徑請依照您的項目自行調整。
若您的項目中已存在相同的必要檔案則可忽略，但上述三點請務必遵循。
