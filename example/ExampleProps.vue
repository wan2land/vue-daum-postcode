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
          :noShorthand="true"
          :noAutoMapping="true"
          :pleaseReadGuide="3"
          :pleaseReadGuideTimer="2"
          :maxSuggestItems="3"
          :showMoreHName="true"
          :hideMapBtn="true"
          :hideEngBtn="true"
          :alwaysShowEngAddr="true"
          :zonecodeOnly="true"
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
