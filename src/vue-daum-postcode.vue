
<template>
  <div></div>
</template>
<script>

let isLoading = false
const loadedResolves = []
const loadedRejects = []

function loadScript() {
  return new Promise((resolve, reject) => {
    if (window.daum && window.daum) {
      return resolve()
    }
    loadedResolves.push(resolve)
    loadedRejects.push(reject)
    if (isLoading) {
      return
    }
    isLoading = true

    const script = document.createElement("script")

    if (location.protocol === "https:") {
      script.src = "https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js?autoload=false"
    } else {
      script.src = "http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false"
    }

    script.async = true
    script.charset = "utf8"

    const dom = document.head
      || document.getElementsByTagName('head')[0]
      || document.body
      || document.getElementsByTagName("body")[0]

    dom.appendChild(script)

    script.onload = () => {
      isLoading = false
      loadedResolves.forEach(cb => cb())
    }
    script.onerror = () => {
      isLoading = false
      loadedRejects.forEach(cb => cb())
    }
  })
}
export default {
  props: {
    q: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "400px",
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
    theme: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    loadScript().then(() => {
      return new Promise(resolve => daum.postcode.load(resolve))
    }).then(() => {
      new daum.Postcode({
        width: this.width,
        height: this.height,
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
        theme: this.theme,
        oncomplete: (data) => {
          this.$emit("complete", data)
        },
        onresize: (size) => {
          this.$emit("resize", size)
        },
      }).embed(this.$el, {
        q: this.q,
        autoClose: false,
      })
    })
  },
}
</script>
