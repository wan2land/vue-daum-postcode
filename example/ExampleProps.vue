<template>
  <div >
    <div>
      <template v-if="!isOpen">
        <a class="button" @click="isOpen = true">우편번호입력</a>
      </template>
      <template v-else>
        <VueDaumPostcode
          @complete="onComplete"
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
            outlineColor: '#44444',
          }"
        />
      </template>
    </div>
    <div>
      <pre v-if="result">{{ result }}</pre>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { VueDaumPostcodeCompleteResult } from 'vue-daum-postcode'


export default defineComponent({
  data() {
    return {
      isOpen: false,
      result: null as VueDaumPostcodeCompleteResult | null,
    }
  },
  methods: {
    onComplete(result: VueDaumPostcodeCompleteResult) {
      this.result = result
      this.isOpen = false
    },
  },
})
</script>
