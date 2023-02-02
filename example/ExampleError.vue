<script lang="ts" setup>
import { ref } from "vue";
import { createVueDaumPostcode } from "vue-daum-postcode";

const WrongVueDaumPostcode = createVueDaumPostcode({
  scriptUrl: "https://wrong.url",
});

const error = ref<{ message: string } | null>(null);
const isOpen = ref(false);
function onError(e: any) {
  error.value = e;
  isOpen.value = false;
}
</script>
<template>
  <div>
    <div>
      <template v-if="!isOpen">
        <a class="button" @click="isOpen = true"
          >우편번호입력 (URL 호출 실패)</a
        >
      </template>
      <template v-else>
        <WrongVueDaumPostcode @error="onError" />
      </template>
    </div>
    <div>
      <pre v-if="error">{{ error.message }}</pre>
    </div>
  </div>
</template>
