<template>
  <div>
    <div>
      <template v-if="!isOpen">
        <a class="button" @click="isOpen = true">우편번호입력 (URL 호출 실패)</a>
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
<script lang="ts">
import { defineComponent } from 'vue'
import { createVueDaumPostcode } from 'vue-daum-postcode'

const WrongVueDaumPostcode = createVueDaumPostcode({
  scriptUrl: 'https://wrong.url',
})

export default defineComponent({
  components: {
    WrongVueDaumPostcode,
  },
  data() {
    return {
      isOpen: false,
      error: null as unknown | null,
    }
  },
  methods: {
    onError(error: unknown) {
      this.error = error
      console.log(error)
      this.isOpen = false
    },
  },
})
</script>
