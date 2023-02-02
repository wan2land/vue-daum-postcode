<template>
  <div>
    <div class="hero">
      <h2>Vue Daum Postcode</h2>
      <p>Daum(Kakao) Postcode Component for Vue 3.</p>
    </div>
    <div class="section">
      <div class="container">
        <h2>로딩</h2>
        <p>스크립트를 불러오는 동안 보여줄 다른 내용을 슬롯을 통해 지정할 수 있습니다. 브라우저의 개발자 도구에서 Network Throttling을 통해 테스트해 볼 수 있습니다. <a href="https://github.com/wan2land/vue-daum-postcode/blob/main/example/ExampleLoading.vue">[Source]</a></p>
        <ExampleLoading />

        <h2>입력결과 받기</h2>
        <p>주소 입력 결과를 받을 때는 <code>@complete</code>를 사용합니다. <a href="https://github.com/wan2land/vue-daum-postcode/blob/main/example/ExampleComplete.vue">[Source]</a></p>
        <ExampleComplete />

        <h2>검색</h2>
        <p>주소 검색 후 이벤트를 받을 때는 <code>@search</code>를 사용합니다. <a href="https://github.com/wan2land/vue-daum-postcode/blob/main/example/ExampleSearch.vue">[Source]</a></p>
        <ExampleSearch />

        <h2>속성</h2>
        <p>다음 우편번호 서비스에서 제공하는 속성을 모두 사용가능합니다. 모든 boolean 속성의 기본값을 <code>false</code>로 조정하였습니다. 따라서 <code>shorthand</code>, <code>autoMapping</code> 속성은 앞에 <code>no-</code>와 함께 사용해야합니다. <a href="https://github.com/wan2land/vue-daum-postcode/blob/main/example/ExampleProps.vue">[Source]</a></p>
        <ExampleProps />

        <h2>에러처리</h2>
        <p>카카오 서버 장애로 인해 종종 에러가 발생할 수 있습니다. 에러 처리는 <code>@error</code>를 사용합니다. <a href="https://github.com/wan2land/vue-daum-postcode/blob/main/example/ExampleError.vue">[Source]</a></p>
        <ExampleError />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import ExampleComplete from './ExampleComplete.vue'
import ExampleError from './ExampleError.vue'
import ExampleLoading from './ExampleLoading.vue'
import ExampleProps from './ExampleProps.vue'
import ExampleSearch from './ExampleSearch.vue'


export default defineComponent({
  components: {
    ExampleLoading,
    ExampleComplete,
    ExampleSearch,
    ExampleProps,
    ExampleError,
  },
  data() {
    return {
    }
  },
})
</script>
