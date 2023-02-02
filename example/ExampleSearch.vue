<template>
  <div>
    <div>
      <template v-if="!isOpen">
        <a class="button" @click="isOpen = true">우편번호입력</a>
      </template>
      <template v-else>
        <VueDaumPostcode @search="onSearch" />
      </template>
    </div>
    <div>
      <pre v-if="result">{{ result }}</pre>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VueDaumPostcodeSearchResult } from "vue-daum-postcode";

export default defineComponent({
  data() {
    return {
      isOpen: false,
      result: null as VueDaumPostcodeSearchResult | null,
    };
  },
  methods: {
    onSearch(result: VueDaumPostcodeSearchResult) {
      this.result = result;
      this.isOpen = false;
    },
  },
});
</script>
