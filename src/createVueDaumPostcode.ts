import { defineComponent, PropType, h } from 'vue'
import { create } from 'nano-loader'
import type { VueDaumPostcodeCompleteResult, VueDaumPostcodeResizeResult, VueDaumPostcodeSearchResult, VueDaumPostcodeTheme } from './interfaces'

export interface CreateVueDaumPostcodeOptions {
  scriptUrl?: string | null
}

export function createVueDaumPostcode(options: CreateVueDaumPostcodeOptions = {}) {
  const loadDaumPostcode = create(
    options.scriptUrl || 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
    () => {
      return new Promise(resolve => (window as any).daum.postcode.load(resolve))
    }
  )

  return defineComponent({
    props: {
      q: {
        type: String,
        default: '',
      },
      animation: {
        type: Boolean,
        default: false,
      },
      noAutoMapping: {
        type: Boolean,
        default: false,
      },
      noShorthand: {
        type: Boolean,
        default: false,
      },
      noSubmitMode: {
        type: Boolean,
        default: false,
      },
      pleaseReadGuide: {
        type: Number,
        default: 0,
      },
      pleaseReadGuideTimer: {
        type: Number,
        default: 1.5,
      },
      maxSuggestItems: {
        type: Number,
        default: 10,
      },
      showMoreHName: {
        type: Boolean,
        default: false,
      },
      hideMapBtn: {
        type: Boolean,
        default: false,
      },
      hideEngBtn: {
        type: Boolean,
        default: false,
      },
      alwaysShowEngAddr: {
        type: Boolean,
        default: false,
      },
      zonecodeOnly: {
        type: Boolean,
        default: false,
      },
      theme: {
        type: Object as PropType<VueDaumPostcodeTheme>,
        default: () => ({}),
      },
    },
    data() {
      return {
        styleHeight: 0 as string | number,
      }
    },
    mounted() {
      loadDaumPostcode().then(() => {
        new (window as any).daum.Postcode({
          width: '100%',
          height: '100%',
          animation: this.animation,
          autoMapping: !this.noAutoMapping,
          shorthand: !this.noShorthand,
          pleaseReadGuide: this.pleaseReadGuide,
          pleaseReadGuideTimer: this.pleaseReadGuideTimer,
          maxSuggestItems: this.maxSuggestItems,
          showMoreHName: this.showMoreHName,
          hideMapBtn: this.hideMapBtn,
          hideEngBtn: this.hideEngBtn,
          alwaysShowEngAddr: this.alwaysShowEngAddr,
          zonecodeOnly: this.zonecodeOnly,
          theme: this.theme,
          submitMode: !this.noSubmitMode,
          onsearch: (data: VueDaumPostcodeSearchResult) => {
            this.$emit('search', data)
          },
          oncomplete: (data: VueDaumPostcodeCompleteResult) => {
            this.$emit('complete', data)
          },
          onresize: (data: VueDaumPostcodeResizeResult) => {
            this.styleHeight = `${data.height}px`
            this.$emit('resize', data)
          },
        }).embed(this.$refs.container, {
          q: this.q,
          autoClose: false,
        })
      })
    },
    render() {
      return h('div', {
        class: ['vue-daum-postcode']
      }, [
        h('div', {
          class: ['vue-daum-postcode-container'],
          ref: 'container',
          style: {
            height: this.styleHeight,
          },
        })
      ])
    },
  })
}
