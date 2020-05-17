# Vue Daum Postcode

<p>
  <a href="https://npmcharts.com/compare/vue-daum-postcode?minimal=true"><img alt="Downloads" src="https://img.shields.io/npm/dt/vue-daum-postcode.svg?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/vue-daum-postcode"><img alt="Version" src="https://img.shields.io/npm/v/vue-daum-postcode.svg?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/vue-daum-postcode"><img alt="License" src="https://img.shields.io/npm/l/vue-daum-postcode.svg?style=flat-square" /></a>
  <img alt="VueJS 2.x" src="https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?style=flat-square" />
  <br />
  <a href="https://david-dm.org/wan2land/vue-daum-postcode"><img alt="dependencies Status" src="https://img.shields.io/david/wan2land/vue-daum-postcode.svg?style=flat-square" /></a>
  <a href="https://david-dm.org/wan2land/vue-daum-postcode?type=dev"><img alt="devDependencies Status" src="https://img.shields.io/david/dev/wan2land/vue-daum-postcode.svg?style=flat-square" /></a>
</p>

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

ES6 환경에서는 다음과 같이 사용할 수 있습니다.

```js
import Vue from "vue"
import VueDaumPostcode from "vue-daum-postcode"

Vue.use(VueDaumPostcode)
```

기본 태그는 `vue-daum-postcode`이고, 다음과 같이 사용가능합니다.

```html
<template>
  <vue-daum-postcode />
</template>
```

만약에 기본 태그를 다른 이름으로 변경하려면 다음과 같이 설정하시면 됩니다.

```js
import Vue from "vue"
import VueDaumPostcode from "vue-daum-postcode"

Vue.use(VueDaumPostcode, {
  name: "vue-something-daum-postcode"
})
```

[기본 Daum postcode.js url](https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js)을 다른 url로 변경하려면 다음과 같이 설정하시면 됩니다.

```js
import Vue from "vue"
import VueDaumPostcode from "vue-daum-postcode"

Vue.use(VueDaumPostcode, {
  scriptUrl: "https://s3.ap-northeast-2.amazonaws.com/YOUR_BUCKET_NAME/postcode.v2.js"
})
```

### Globals

Webpack과 같은 번들러를 사용하지 않는 경우 다음과 같이 사용할 수 있습니다. 전역으로 설정할 경우 `Vue.use(...)`는 필요없습니다.
또한 `window.VueDaumPostcode`를 통해 라이브러리에 직접 접근할 수 있습니다.

```html
<html>
<head>
  ...
</head>
<body>
  <div id="app">
    <vue-daum-postcode />
  </div>
  <script src="//cdn.jsdelivr.net/npm/vue/dist/vue.j"></script>
  <script src="//cdn.jsdelivr.net/gh/wan2land/vue-daum-postcode/dist/index.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

### Nuxt Framework

Nuxt 프레임워크를 사용한다면, 설정파일(`nuxt.config.js`)의 `modules` 항목에 다음 내용을 추가합니다.

```js
{
  modules: [
    'vue-daum-postcode/nuxt'
  ],
}
```

마찬가지로, 기본 태그는 `vue-daum-postcode`입니다. 이를 변경하려면 다음과 같이 설정하시면 됩니다.

```js
{
  modules: [
    ['vue-daum-postcode/nuxt', { name: "vue-something-daum-postcode" }],
  ],
}
```

[기본 Daum postcode.js url](https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js) 또한 아래와 같이 설정하여 다른 url로 변경하실 수 있습니다.

```js
{
  modules: [
    ['vue-daum-postcode/nuxt', { scriptUrl: "https://s3.ap-northeast-2.amazonaws.com/YOUR_BUCKET_NAME/postcode.v2.js" }],
  ],
}
```

### Components 만 사용

특정 화면에서 컴퍼넌트로 이용하고 싶다면 다음과 같이 작성하시면 됩니다.

```js
import { VueDaumPostcode } from "vue-daum-postcode"
// const { VueDaumPostcode } = require("vue-daum-postcode")

export default {
  components: {
    VueDaumPostcode,
  },
}
```


## Props

이름                      | 타입      | 설명        | 기본값
------------------------- | --------- | ----------- | -------
`q`                       | `String`  | 검색어 | `""`
`animation`               | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `animation`. | `false`
`no-autoMapping`          | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `autoMapping`, 기본값을 `true`에서 `false`로 조정. | `false`
`no-shorthand`            | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `shorthand`, 기본값을 `true`에서 `false`로 조정. | `false`
`please-read-guide`       | `Number`  | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `pleaseReadGuide`. | `0`
`please-read-guide-timer` | `Number`  | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `pleaseReadGuideTimer`. | `1.5`
`max-suggest-items`       | `Number`  | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `maxSuggestItems`. | `10`
`show-more-h-name`        | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `showMoreHName`. | `false`
`hide-map-btn`            | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `hideMapBtn`. | `false`
`hide-eng-btn`            | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `hideEngBtn`. | `false`
`always-show-eng-addr`    | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `alwaysShowEngAddr`. | `false`
`zonecode-only`           | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `zonecodeOnly`. | `false`
`no-submit-mode`          | `Boolean` | Submit Mode 비활성화시 사용. ([관련 이슈 링크](https://github.com/daumPostcode/QnA/issues/286)) | `false`
`theme`                   | `object`  | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `theme`. | `{}`

## Events

이름                      | 설명
------------------------- | -----------
`search`                  | [Daum 우편번호, 속성](http://postcode.map.daum.net/guide)에서 `onsearch`.
`complete`                | [Daum 우편번호, 속성](http://postcode.map.daum.net/guide)에서 `oncomplete`.

## License

Vue 소스코드 자체의 라이센스는 **MIT**입니다. 기반 우편번호는 Daum 우편번호 서비스를 이용하고 있습니다.
