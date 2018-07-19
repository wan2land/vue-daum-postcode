# Vue Daum Postcode

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/vue-daum-postcode.svg)](https://www.npmjs.com/package/vue-daum-postcode)
[![npm-version](https://img.shields.io/npm/v/vue-daum-postcode.svg)](https://www.npmjs.com/package/vue-daum-postcode)

[Daum 우편번호 서비스](http://postcode.map.daum.net/guide)를 기반으로 작업된 Vue Component 입니다.

## Installation

```
npm install vue-daum-postcode --save
```

### Demo

 - [Demo](http://wan2land.github.io/vue-daum-postcode/)

## Usage

`vue-daum-postcode`는 umd로 빌드되어있어서 원하시는 방식으로 사용가능합니다.

### ES6

```js
import Vue from "vue"
import VueDaumPostcode from "vue-daum-postcode"

Vue.use(VueDaumPostcode)
```

### Globals

```html
<html>
<head>
  ...
</head>
<body>
  <div id="app">
    <vue-daum-postcode />
  </div>
  <script src="path/to/vue.js"></script>
  <script src="path/to/vue-daum-postcode.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

### License

라이센스는 **MIT**라고 적어두었으나, Daum 우편번호 서비스의 라이센스를 그대로 따라갑니다.
