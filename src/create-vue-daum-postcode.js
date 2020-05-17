import { create } from 'nano-loader'

export function createVueDaumPostcode(options = {}) {
  const loadDaumPostcode = create(
    options.scriptUrl || 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
    () => {
      return new Promise(resolve => window.daum.postcode.load(resolve))
    },
  )

  return {
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
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        styleHeight: 0,
      }
    },
    mounted() {
      loadDaumPostcode().then(() => {
        new window.daum.Postcode({
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
          onsearch: (data) => {
            this.$emit('search', data)
          },
          oncomplete: (data) => {
            this.$emit('complete', data)
          },
          onresize: (size) => {
            this.styleHeight = `${size.height}px`
          },
        }).embed(this.$refs.container, {
          q: this.q,
          autoClose: false,
        })
      })
    },
    computed: {
      styles() {
        const styles = {}
        styles.height = this.styleHeight
        return styles
      },
    },
    render(h) {
      return h('div', {class: ['vue-daum-postcode']}, [
        h('div', {class: ['vue-daum-postcode-container'], ref: 'container', style: this.styles})
      ])
    },
  }
}
