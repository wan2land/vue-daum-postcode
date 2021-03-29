var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable;import{d as n,c as a,h as l,a as s,b as u,t as r,e as i,r as d,o as p,f as m,g as c}from"./vendor.3d47aee0.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,l)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const u=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(u),onerror(){l(new Error(`Failed to import: ${e}`)),a(r)},onload(){o(self[t].moduleMap[s]),a(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("/assets/");function h(e={}){const t=a(e.scriptUrl||"https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",(()=>new Promise((e=>window.daum.postcode.load(e)))));return n({props:{q:{type:String,default:""},animation:{type:Boolean,default:!1},noAutoMapping:{type:Boolean,default:!1},noShorthand:{type:Boolean,default:!1},noSubmitMode:{type:Boolean,default:!1},pleaseReadGuide:{type:Number,default:0},pleaseReadGuideTimer:{type:Number,default:1.5},maxSuggestItems:{type:Number,default:10},showMoreHName:{type:Boolean,default:!1},hideMapBtn:{type:Boolean,default:!1},hideEngBtn:{type:Boolean,default:!1},alwaysShowEngAddr:{type:Boolean,default:!1},zonecodeOnly:{type:Boolean,default:!1},theme:{type:Object,default:()=>({})}},data:()=>({styleHeight:0}),mounted(){t().then((()=>{new window.daum.Postcode({width:"100%",height:"100%",animation:this.animation,autoMapping:!this.noAutoMapping,shorthand:!this.noShorthand,pleaseReadGuide:this.pleaseReadGuide,pleaseReadGuideTimer:this.pleaseReadGuideTimer,maxSuggestItems:this.maxSuggestItems,showMoreHName:this.showMoreHName,hideMapBtn:this.hideMapBtn,hideEngBtn:this.hideEngBtn,alwaysShowEngAddr:this.alwaysShowEngAddr,zonecodeOnly:this.zonecodeOnly,theme:this.theme,submitMode:!this.noSubmitMode,onsearch:e=>{this.$emit("search",e)},oncomplete:e=>{this.$emit("complete",e)},onresize:e=>{this.styleHeight=`${e.height}px`,this.$emit("resize",e)}}).embed(this.$refs.container,{q:this.q,autoClose:!1})}))},render(){return l("div",{class:["vue-daum-postcode"]},[l("div",{class:["vue-daum-postcode-container"],ref:"container",style:{height:this.styleHeight}})])}})}const y=h();const f={install:function(n,a={}){var{name:l}=a,s=((n,a)=>{var l={};for(var s in n)e.call(n,s)&&a.indexOf(s)<0&&(l[s]=n[s]);if(null!=n&&t)for(var s of t(n))a.indexOf(s)<0&&o.call(n,s)&&(l[s]=n[s]);return l})(a,["name"]);n.component(null!=l?l:"VueDaumPostcode",Object.keys(s).length>0?h(s):y)}};var g=n({data:()=>({isOpen:!1,result:null}),methods:{onComplete(e){this.result=e,this.isOpen=!1}}});const v={key:0};g.render=function(e,t,o,n,a,l){const m=d("VueDaumPostcode");return p(),s("div",null,[u("div",null,[e.isOpen?(p(),s(m,{key:1,onComplete:e.onComplete},null,8,["onComplete"])):(p(),s("a",{key:0,class:"button",onClick:t[1]||(t[1]=t=>e.isOpen=!0)},"우편번호입력"))]),u("div",null,[e.result?(p(),s("pre",v,r(e.result),1)):i("",!0)])])};var b=n({data:()=>({isOpen:!1,result:null}),methods:{onSearch(e){this.result=e,this.isOpen=!1}}});const w={key:0};b.render=function(e,t,o,n,a,l){const m=d("VueDaumPostcode");return p(),s("div",null,[u("div",null,[e.isOpen?(p(),s(m,{key:1,onSearch:e.onSearch},null,8,["onSearch"])):(p(),s("a",{key:0,class:"button",onClick:t[1]||(t[1]=t=>e.isOpen=!0)},"우편번호입력"))]),u("div",null,[e.result?(p(),s("pre",w,r(e.result),1)):i("",!0)])])};var O=n({data:()=>({isOpen:!1,result:null}),methods:{onComplete(e){this.result=e,this.isOpen=!1}}});const S={key:0};O.render=function(e,t,o,n,a,l){const m=d("VueDaumPostcode");return p(),s("div",null,[u("div",null,[e.isOpen?(p(),s(m,{key:1,onComplete:e.onComplete,q:"서대문구",animation:!0,noShorthand:!0,noAutoMapping:!0,pleaseReadGuide:3,pleaseReadGuideTimer:2,maxSuggestItems:3,showMoreHName:!0,hideMapBtn:!0,hideEngBtn:!0,alwaysShowEngAddr:!0,zonecodeOnly:!0,theme:{bgColor:"#162525",searchBgColor:"#162525",contentBgColor:"#162525",pageBgColor:"#162525",textColor:"#FFFFFF",queryTextColor:"#FFFFFF",outlineColor:"#44444"}},null,8,["onComplete"])):(p(),s("a",{key:0,class:"button",onClick:t[1]||(t[1]=t=>e.isOpen=!0)},"우편번호입력"))]),u("div",null,[e.result?(p(),s("pre",S,r(e.result),1)):i("",!0)])])};var C=n({components:{ExampleComplete:g,ExampleSearch:b,ExampleProps:O},data:()=>({})});const x=u("div",{class:"hero"},[u("h2",null,"Vue Daum Postcode"),u("p",null,"Daum(Kakao) Postcode Component for Vue 3.")],-1),B={class:"section"},M={class:"container"},E=u("h2",null,"입력결과 받기",-1),k=u("p",null,[m("주소 입력 결과를 받을 때는 "),u("code",null,"@complete"),m("를 사용합니다. "),u("a",{href:"https://github.com/wan2land/vue-daum-postcode/blob/main/example/ExampleComplete.vue"},"[Source]")],-1),F=u("h2",null,"검색",-1),P=u("p",null,[m("주소 검색 후 이벤트를 받을 때는 "),u("code",null,"@search"),m("를 사용합니다. "),u("a",{href:"https://github.com/wan2land/vue-daum-postcode/blob/main/example/ExampleSearch.vue"},"[Source]")],-1),R=u("h2",null,"속성",-1),j=u("p",null,[m("다음 우편번호 서비스에서 제공하는 속성을 모두 사용가능합니다. 모든 boolean 속성의 기본값을 "),u("code",null,"false"),m("로 조정하였습니다. 따라서 "),u("code",null,"shorthand"),m(", "),u("code",null,"autoMapping"),m(" 속성은 앞에 "),u("code",null,"no-"),m("와 함께 사용해야합니다. "),u("a",{href:"https://github.com/wan2land/vue-daum-postcode/blob/main/example/ExampleProps.vue"},"[Source]")],-1);C.render=function(e,t,o,n,a,l){const r=d("ExampleComplete"),i=d("ExampleSearch"),m=d("ExampleProps");return p(),s("div",null,[x,u("div",B,[u("div",M,[E,k,u(r),F,P,u(i),R,j,u(m)])])])};const $=c(C);$.use(f),$.mount("#app");
