<script lang="ts" setup>
import { ref } from "vue";
import { VueDaumPostcodeCompleteResult } from "vue-daum-postcode";

const result = ref<VueDaumPostcodeCompleteResult | null>(null);
const isOpen = ref(false);

function onComplete(newResult: VueDaumPostcodeCompleteResult) {
  result.value = newResult;
  isOpen.value = false;
}
</script>
<template>
  <div>
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
