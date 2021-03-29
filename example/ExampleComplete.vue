<template>
  <div >
    <div>
      <template v-if="!isOpen">
        <a class="button" @click="isOpen = true">우편번호입력</a>
      </template>
      <template v-else>
        <VueDaumPostcode @complete="onComplete" />
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
