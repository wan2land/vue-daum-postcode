<template>
  <div >
    <div>
      <template v-if="!isOpen">
        <a class="button" @click="isOpen = true">우편번호입력</a>
      </template>
      <template v-else>
        <VueDaumPostcode>
          <template #loading>
            <div>...Loading...</div>
          </template>
        </VueDaumPostcode>
      </template>
    </div>
    <div>
      <pre v-if="result">{{ result }}</pre>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
  },
})
</script>
