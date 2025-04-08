(function(t){function e(e){for(var n,r,i=e[0],u=e[1],c=e[2],l=0,p=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,r=1;r<s.length;r++){var u=s[r];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},o=[];function r(t){return i.p+"assets/js/"+({}[t]||t)+"."+{"chunk-2d0b3289":"8626bfb5","chunk-2d0c22cb":"acee5c2d"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,n){s=a[t]=[e,n]}));e.push(s[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=r(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var s=a[t];if(0!==s){if(s){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,s[1](c)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},2643:function(t,e,s){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white rounded-lg shadow overflow-hidden"},[e("div",{staticClass:"relative"},[e("img",{staticClass:"w-full h-40 object-cover",attrs:{src:t.sound.image,alt:t.sound.name}}),e("div",{staticClass:"absolute inset-0 bg-black/30 flex items-center justify-center"},[e("button",{staticClass:"w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors",on:{click:t.playSound}},[e("i",{class:t.isPlaying?"fas fa-pause":"fas fa-play"})])])]),e("div",{staticClass:"p-4"},[e("div",{staticClass:"flex items-center justify-between mb-2"},[e("h3",{staticClass:"font-semibold"},[t._v(t._s(t.sound.name))]),e("button",{staticClass:"text-gray-400 hover:text-red-500 transition-colors",on:{click:t.toggleFavorite}},[e("i",{class:t.sound.isFavorite?"fas fa-heart text-red-500":"far fa-heart"})])]),e("p",{staticClass:"text-sm text-gray-600 mb-2"},[t._v(t._s(t.sound.description))]),e("div",{staticClass:"flex items-center text-sm text-gray-500"},[e("i",{staticClass:"mr-2",class:t.sound.icon}),e("span",[t._v(t._s(t.sound.duration))])])])])},a=[],o={name:"SoundCard",props:{sound:{type:Object,required:!0}},data(){return{isPlaying:!1}},methods:{playSound(){this.isPlaying=!this.isPlaying},toggleFavorite(){this.$emit("toggle-favorite",this.sound.id)}}},r=o,i=s("2877"),u=Object(i["a"])(r,n,a,!1,null,null,null);e["a"]=u.exports},3971:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-screen bg-gray-50"},[e("header",{staticClass:"bg-white shadow-sm"},[e("div",{staticClass:"max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center"},[e("h1",{staticClass:"text-2xl font-bold text-gray-900"},[t._v("Nature Sleep")]),e("nav",{staticClass:"flex space-x-4"},[e("router-link",{staticClass:"text-gray-500 hover:text-gray-900",attrs:{to:"/"}},[t._v("首页")]),e("router-link",{staticClass:"text-gray-500 hover:text-gray-900",attrs:{to:"/favorites"}},[t._v("收藏")]),e("router-link",{staticClass:"text-gray-500 hover:text-gray-900",attrs:{to:"/settings"}},[t._v("设置")])],1)])]),e("router-view")],1)},o=[],r={name:"App"},i=r,u=(s("eede"),s("2877")),c=Object(u["a"])(i,a,o,!1,null,null,null),l=c.exports,d=s("8c4f"),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-screen bg-gray-50"},[e("div",{staticClass:"container mx-auto px-4 py-8"},[e("h1",{staticClass:"text-3xl font-bold mb-8"},[t._v("自然声音")]),e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},t._l(t.sounds,(function(s){return e("SoundCard",{key:s.id,attrs:{sound:s},on:{"toggle-favorite":t.toggleFavorite}})})),1)])])},f=[],h=s("2643"),m={name:"Home",components:{SoundCard:h["a"]},data(){return{sounds:[{id:1,name:"Ocean Waves",description:"Gentle waves crashing on the shore",duration:"30:00",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",audio:"/sounds/ocean-waves.mp3",isFavorite:!1},{id:2,name:"Rain Forest",description:"Soothing sounds of a tropical rain forest",duration:"45:00",image:"https://images.unsplash.com/photo-1511497584788-876760111969",audio:"/sounds/rain-forest.mp3",isFavorite:!1},{id:3,name:"Mountain Stream",description:"Crystal clear water flowing through rocks",duration:"60:00",image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470",audio:"/sounds/mountain-stream.mp3",isFavorite:!1}]}},methods:{toggleFavorite(t){const e=this.sounds.find(e=>e.id===t);e&&(e.isFavorite=!e.isFavorite)}}},g=m,v=Object(u["a"])(g,p,f,!1,null,null,null),b=v.exports;n["a"].use(d["a"]);const y=[{path:"/",name:"Home",component:b},{path:"/favorites",name:"Favorites",component:()=>s.e("chunk-2d0c22cb").then(s.bind(null,"48d5"))},{path:"/settings",name:"Settings",component:()=>s.e("chunk-2d0b3289").then(s.bind(null,"26d3"))}],x=new d["a"]({mode:"hash",base:"",routes:y});var w=x;s("d940");n["a"].config.productionTip=!1,new n["a"]({router:w,data(){return{sounds:[{id:1,name:"Ocean Waves",description:"Gentle waves crashing on the shore",duration:"30:00",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",audio:"/sounds/ocean-waves.mp3",isFavorite:!1},{id:2,name:"Rain Forest",description:"Soothing sounds of a tropical rain forest",duration:"45:00",image:"https://images.unsplash.com/photo-1511497584788-876760111969",audio:"/sounds/rain-forest.mp3",isFavorite:!1},{id:3,name:"Mountain Stream",description:"Crystal clear water flowing through rocks",duration:"60:00",image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470",audio:"/sounds/mountain-stream.mp3",isFavorite:!1}]}},render:t=>t(l)}).$mount("#app")},d940:function(t,e,s){},eede:function(t,e,s){"use strict";s("3971")}});