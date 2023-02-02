# Vue Daum Postcode

<p>
  <a href="https://github.com/wan2land/vue-daum-postcode/actions"><img alt="Build" src="https://img.shields.io/github/actions/workflow/status/wan2land/vue-daum-postcode/ci.yml?branch=main&logo=github&style=flat-square" /></a>
  <a href="https://npmcharts.com/compare/vue-daum-postcode?minimal=true"><img alt="Downloads" src="https://img.shields.io/npm/dt/vue-daum-postcode.svg?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/vue-daum-postcode"><img alt="Version" src="https://img.shields.io/npm/v/vue-daum-postcode.svg?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/vue-daum-postcode"><img alt="License" src="https://img.shields.io/npm/l/vue-daum-postcode.svg?style=flat-square" /></a>
  <img alt="VueJS 3.x" src="https://img.shields.io/badge/vue.js-3.x-brightgreen.svg?style=flat-square" />
  <img alt="Language Typescript" src="https://img.shields.io/badge/language-Typescript-007acc.svg?style=flat-square" />
</p>

[Daum 우편번호 서비스](http://postcode.map.daum.net/guide)를 기반으로 작업된 Vue Component 입니다.

Vue 2.x를 사용하다면 [v0.x branch](https://github.com/wan2land/vue-daum-postcode/tree/0.x-vue2)브랜치를 참고해주세요.

- [See Example](http://vue-daum-postcode.dist.be) ([sources](./example))

## Installation

```bash
npm i vue-daum-postcode
```


**Global Registration**

[Vue3 Global Registration Guide](https://v3.vuejs.org/guide/component-registration.html#global-registration)

```js
import { createApp } from 'vue'
import VueDaumPostcode from 'vue-daum-postcode'


const app = createApp(/* */)

app.use(VueDaumPostcode) // export default is plugin

```

**Local Registration**

[Vue3 Local Registration Guide](https://v3.vuejs.org/guide/component-registration.html#local-registration)

```vue
<template>
  <VueDaumPostcode :options="options" />
</template>
<script>
import { VueDaumPostcode } from 'vue-daum-postcode'

export default {
  components: {
    VueDaumPostcode, // export VueDaumPostcode is component
  },
}
</script>
```

**기본 태그 변경 (Global Registration)**

```js
app.use(VueDaumPostcode, {
  name: 'DaumPostcode',
})
```

**Postcode Js 경로 변경 (Global Registration)**

기본 Daum postcode.js url(`https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js`)을 다른 url로 변경하려면 다음과 같이 설정하시면 됩니다.

```js
app.use(VueDaumPostcode, {
  scriptUrl: "https://s3.ap-northeast-2.amazonaws.com/YOUR_BUCKET_NAME/postcode.v2.js"
})
```

## Props

이름                      | 타입      | 설명        | 기본값
------------------------- | --------- | ----------- | -------
`q`                       | `String`  | 검색어 | `""`
`animation`               | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `animation`. | `false`
`noAutoMapping`           | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `autoMapping`, 기본값을 `true`에서 `false`로 조정. | `false`
`noShorthand`             | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `shorthand`, 기본값을 `true`에서 `false`로 조정. | `false`
`pleaseReadGuide`         | `Number`  | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `pleaseReadGuide`. | `0`
`pleaseReadGuideTimer`    | `Number`  | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `pleaseReadGuideTimer`. | `1.5`
`maxSuggestItems`         | `Number`  | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `maxSuggestItems`. | `10`
`showMoreHName`           | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `showMoreHName`. | `false`
`hideMapBtn`              | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `hideMapBtn`. | `false`
`hideEngBtn`              | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `hideEngBtn`. | `false`
`alwaysShowEngAddr`       | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `alwaysShowEngAddr`. | `false`
`zonecodeOnly`            | `Boolean` | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `zonecodeOnly`. | `false`
`noSubmitMode`            | `Boolean` | Submit Mode 비활성화시 사용. ([관련 이슈 링크](https://github.com/daumPostcode/QnA/issues/286)) | `false`
`theme`                   | `object`  | [Daum 우편번호, 생성자속성](http://postcode.map.daum.net/guide)에서 `theme`. | `{}`

## Events

이름                      | 설명
------------------------- | -----------
`load`                    | 다음 우편번호가 로딩 되었을 때 발생
`search`                  | [Daum 우편번호, 속성](http://postcode.map.daum.net/guide)에서 `onsearch`.
`complete`                | [Daum 우편번호, 속성](http://postcode.map.daum.net/guide)에서 `oncomplete`.
`resize`                  | [Daum 우편번호, 속성](http://postcode.map.daum.net/guide)에서 `onresize`.
`error`                   | 스크립트 로딩 실패시 발생

## Slots

이름                      | 설명
------------------------- | ---------
`loading`                 | 다음 우편번호가 아직 완전히 불러오기 전에 보여줄 내용이 있는 경우 해당 슬롯에 넣습니다. (ex. spinner)
