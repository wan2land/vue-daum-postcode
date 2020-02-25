export default {
  props: {
    q: {
      type: String,
      default: "",
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
      isLoading: false,
      loadedResolves: [],
      loadedRejects: [],
    }
  },
  methods: {
    loadScript() {
      return new Promise((resolve, reject) => {
        if (window.daum && window.daum.postcode) {
          return resolve()
        }
        this.loadedResolves.push(resolve)
        this.loadedRejects.push(reject)
        if (this.isLoading) {
          return
        }
        this.isLoading = true

        const script = document.createElement("script")

        script.src = this.$scriptURL
        script.async = true
        script.charset = "utf8"

        const dom = document.head
          || document.getElementsByTagName('head')[0]
          || document.body
          || document.getElementsByTagName("body")[0]

        dom.appendChild(script)

        script.onload = () => {
          this.isLoading = false
          this.loadedResolves.forEach(cb => cb())
        }
        script.onerror = () => {
          this.isLoading = false
          this.loadedRejects.forEach(cb => cb())
        }
      })
    }
  },
  mounted() {
    this.loadScript().then(() => {
      return new Promise(resolve => window.daum.postcode.load(resolve))
    }).then(() => {
      new window.daum.Postcode({
        width: "100%",
        height: "100%",
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
        oncomplete: (data) => {
          this.$emit("complete", data)
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
    return h("div", {class: ["vue-daum-postcode"]}, [
      h("div", {class: ["vue-daum-postcode-container"], ref: "container", style: this.styles})
    ])
  },
}
