<style lang="scss">
body {
  font-family: 'Spoqa Han Sans', 'Open Sans', sans-serif;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.2rem;
  font-weight: 400;
}
p {
  font-weight: 300;
}
.source {
  padding: .5rem;
  background: #f8f8f8;
}
.source pre {
  margin-bottom: 0;
}
.source + .source,
.source + .result {
  margin-top: 1rem;
}
section + section {
  margin-top: 2rem;
}
.vue-daum-postcode {
  border: 1px solid #000;
}
.vue-daum-postcode-container {
  transition: all 500ms ease;
}
</style>
<template>
  <div class="container">
    <h1>Vue Daum Postcode</h1>
    <section>
      <div class="row">
        <div class="col col-md-8 col-xs-12">
          <h2>기본사용법</h2>
          <p>기본으로 사용하는 방법은 다음과 같습니다.</p>
          <div class="source">
            <pre v-highlightjs><code class="html">{{ example1Html }}</code></pre>
          </div>
        </div>
        <div class="col col-md-4 col-xs-12">
          <VueDaumPostcode />
        </div>
      </div>
    </section>
    <section>
      <div class="row">
        <div class="col col-md-8 col-xs-12">
          <h2>검색결과 받기</h2>
          <p>결과를 받을 때는 <code>@complete</code>를 사용합니다. 창을 닫는 액션도 해당 메서드에서 실행하면 됩니다. 우편번호 서비스의 <code>oncomplete</code> 속성을 사용합니다.</p>
          <div class="source">
            <pre v-highlightjs><code class="html">{{ example2Html }}</code></pre>
          </div>
          <div class="result" v-if="example2Result">
            <div class="source">
              <pre><code class="highlight json">{{ example2Result }}</code></pre>
            </div>
          </div>
        </div>
        <div class="col col-md-4 col-xs-12">
          <VueDaumPostcode @complete="example2Result = $event" />
        </div>
      </div>
    </section>
    <section>
      <div class="row">
        <div class="col col-md-8 col-xs-12">
          <h2>사이즈</h2>
          <p>사이즈는 기본적으로 폼에 맞춰서 늘어납니다. 만약에 사이즈를 지정하고 내부를 스크롤바로 처리하고 싶다면, 스타일시트를 통해서 처리해야합니다.</p>
          <div class="source">
            <pre v-highlightjs><code class="html">{{ example3Html }}</code></pre>
          </div>
        </div>
        <div class="col col-md-4 col-xs-12">
          <VueDaumPostcode style="height: 200px; overflow: scroll;" />
        </div>
      </div>
    </section>
    <section>
      <div class="row">
        <div class="col col-md-8 col-xs-12">
          <h2>스타일</h2>
          <p>스타일은 바깥쪽 컨테이너 <code>div</code>에 적용가능합니다.</p>
          <div class="source">
            <pre v-highlightjs><code class="html">{{ example4Html }}</code></pre>
          </div>
        </div>
        <div class="col col-md-4 col-xs-12">
          <VueDaumPostcode style="border: 2px dashed #538EF8" />
        </div>
      </div>
    </section>
    <section>
      <div class="row">
        <div class="col col-md-8 col-xs-12">
          <h2>속성</h2>
          <p>다음 우편번호 서비스에서 제공하는 속성을 모두 사용가능합니다. 모든 boolean 속성의 기본값을 <code>false</code>로 조정하였습니다. 따라서 <code>shorthand</code>, <code>autoMapping</code> 속성은 앞에 <code>no-</code>와 함께 사용해야합니다.</p>
          <div class="source">
            <pre v-highlightjs><code class="html">{{ example5Html }}</code></pre>
          </div>
        </div>
        <div class="col col-md-4 col-xs-12">
          <VueDaumPostcode
            q="서대문구"
            :animation="true"
            :no-shorthand="true"
            :no-auto-mapping="true"
            :please-read-guide="3"
            :please-read-guide-timer="2"
            :max-suggest-items="3"
            :show-more-h-name="true"
            :hide-map-btn="true"
            :hide-eng-btn="true"
            :always-show-eng-addr="true"
            :zonecode-only="true"
            :theme="{bgColor: '#162525', searchBgColor: '#162525', contentBgColor: '#162525', pageBgColor: '#162525', textColor: '#FFFFFF', queryTextColor: '#FFFFFF', outlineColor: '#44444'}"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import VueDaumPostcode from "../src/vue-daum-postcode"

export default {
  components: {
    VueDaumPostcode,
  },
  data() {
    return {
      example1Html: `<VueDaumPostcode />`,

      example2Html: `<VueDaumPostcode @complete="result = $event" />
<div>{{ result }}</div>`,
      example2Result: null,

      example3Html: `<VueDaumPostcode style="height: 200px; overflow: scroll;" />`,

      example4Html: `<VueDaumPostcode style="border: 2px dashed #538EF8" />`,
      example5Html: `<VueDaumPostcode
  q="서대문구"
  :animation="true"
  :no-shorthand="true"
  :no-auto-mapping="true"
  :please-read-guide="3"
  :please-read-guide-timer="2"
  :max-suggest-items="3"
  :show-more-h-name="true"
  :hide-map-btn="true"
  :hide-eng-btn="true"
  :always-show-eng-addr="true"
  :zonecode-only="true"
  :theme="{
    bgColor: '#162525',
    searchBgColor: '#162525',
    contentBgColor: '#162525',
    pageBgColor: '#162525',
    textColor: '#FFFFFF',
    queryTextColor: '#FFFFFF',
    outlineColor: '#44444'
  }"
/>`,
    }
  },
};
</script>
