(function(t){function e(e){for(var s,i,n=e[0],l=e[1],c=e[2],d=0,p=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/nature-sleep/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3971:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-screen bg-gray-50"},[e("header",{staticClass:"bg-white shadow-sm"},[e("div",{staticClass:"max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center"},[e("h1",{staticClass:"text-2xl font-bold text-gray-900"},[t._v("Nature Sleep")]),e("nav",{staticClass:"flex space-x-4"},[e("router-link",{staticClass:"text-gray-500 hover:text-gray-900",attrs:{to:"/"}},[t._v("首页")]),e("router-link",{staticClass:"text-gray-500 hover:text-gray-900",attrs:{to:"/favorites"}},[t._v("收藏")]),e("router-link",{staticClass:"text-gray-500 hover:text-gray-900",attrs:{to:"/settings"}},[t._v("设置")])],1)])]),e("router-view")],1)},r=[],i={name:"App"},n=i,l=(a("eede"),a("2877")),c=Object(l["a"])(n,o,r,!1,null,null,null),u=c.exports,d=a("8c4f"),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-screen bg-gray-50"},[e("div",{staticClass:"container mx-auto px-4 py-8"},[e("h1",{staticClass:"text-3xl font-bold mb-8"},[t._v("自然声音")]),e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},t._l(t.sounds,(function(a){return e("SoundCard",{key:a.id,attrs:{sound:a},on:{"toggle-favorite":t.toggleFavorite}})})),1)])])},m=[],v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white rounded-lg shadow overflow-hidden"},[e("div",{staticClass:"relative"},[e("img",{staticClass:"w-full h-40 object-cover",attrs:{src:t.sound.image,alt:t.sound.name}}),e("div",{staticClass:"absolute inset-0 bg-black/30 flex items-center justify-center"},[e("button",{staticClass:"w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors",on:{click:t.playSound}},[e("i",{class:t.isPlaying?"fas fa-pause":"fas fa-play"})])])]),e("div",{staticClass:"p-4"},[e("div",{staticClass:"flex items-center justify-between mb-2"},[e("h3",{staticClass:"font-semibold"},[t._v(t._s(t.sound.name))]),e("button",{staticClass:"text-gray-400 hover:text-red-500 transition-colors",on:{click:t.toggleFavorite}},[e("i",{class:t.sound.isFavorite?"fas fa-heart text-red-500":"far fa-heart"})])]),e("p",{staticClass:"text-sm text-gray-600 mb-2"},[t._v(t._s(t.sound.description))]),e("div",{staticClass:"flex items-center text-sm text-gray-500"},[e("i",{staticClass:"mr-2",class:t.sound.icon}),e("span",[t._v(t._s(t.sound.duration))])])])])},f=[],h={name:"SoundCard",props:{sound:{type:Object,required:!0}},data(){return{isPlaying:!1}},methods:{playSound(){this.isPlaying=!this.isPlaying},toggleFavorite(){this.$emit("toggle-favorite",this.sound.id)}}},g=h,y=Object(l["a"])(g,v,f,!1,null,null,null),b=y.exports,x={name:"Home",components:{SoundCard:b},data(){return{sounds:[{id:1,name:"Ocean Waves",description:"Gentle waves crashing on the shore",duration:"30:00",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",audio:"/sounds/ocean-waves.mp3",isFavorite:!1},{id:2,name:"Rain Forest",description:"Soothing sounds of a tropical rain forest",duration:"45:00",image:"https://images.unsplash.com/photo-1511497584788-876760111969",audio:"/sounds/rain-forest.mp3",isFavorite:!1},{id:3,name:"Mountain Stream",description:"Crystal clear water flowing through rocks",duration:"60:00",image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470",audio:"/sounds/mountain-stream.mp3",isFavorite:!1}]}},methods:{toggleFavorite(t){const e=this.sounds.find(e=>e.id===t);e&&(e.isFavorite=!e.isFavorite)}}},C=x,_=Object(l["a"])(C,p,m,!1,null,null,null),w=_.exports,k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-screen bg-gray-50"},[e("div",{staticClass:"container mx-auto px-4 py-8"},[e("h1",{staticClass:"text-3xl font-bold mb-8"},[t._v("收藏")]),t.favoritesList.length?e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},t._l(t.favoritesList,(function(a){return e("SoundCard",{key:a.id,attrs:{sound:a},on:{"toggle-favorite":t.toggleFavorite}})})),1):e("div",{staticClass:"text-center py-12"},[e("p",{staticClass:"text-gray-500 text-lg mb-4"},[t._v("您还没有收藏任何声音")]),e("router-link",{staticClass:"btn-primary",attrs:{to:"/"}},[t._v(" 浏览声音 ")])],1)])])},P=[],F={name:"Favorites",components:{SoundCard:b},computed:{favoritesList(){return this.$root.sounds.filter(t=>t.isFavorite)}},methods:{toggleFavorite(t){const e=this.$root.sounds.find(e=>e.id===t);e&&(e.isFavorite=!e.isFavorite)}}},S=F,j=Object(l["a"])(S,k,P,!1,null,null,null),O=j.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-screen bg-gray-50"},[e("div",{staticClass:"container mx-auto px-4 py-8"},[e("h1",{staticClass:"text-3xl font-bold mb-8"},[t._v("设置")]),e("div",{staticClass:"bg-white rounded-lg shadow p-6 mb-6"},[e("h2",{staticClass:"font-semibold text-xl mb-4"},[t._v("基本设置")]),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"flex items-center cursor-pointer"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.darkMode,expression:"darkMode"}],staticClass:"form-checkbox h-5 w-5 text-primary-600",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.darkMode)?t._i(t.darkMode,null)>-1:t.darkMode},on:{change:function(e){var a=t.darkMode,s=e.target,o=!!s.checked;if(Array.isArray(a)){var r=null,i=t._i(a,r);s.checked?i<0&&(t.darkMode=a.concat([r])):i>-1&&(t.darkMode=a.slice(0,i).concat(a.slice(i+1)))}else t.darkMode=o}}}),e("span",{staticClass:"ml-2 text-gray-700"},[t._v("黑暗模式")])])]),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"flex items-center cursor-pointer"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.autoPlay,expression:"autoPlay"}],staticClass:"form-checkbox h-5 w-5 text-primary-600",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.autoPlay)?t._i(t.autoPlay,null)>-1:t.autoPlay},on:{change:function(e){var a=t.autoPlay,s=e.target,o=!!s.checked;if(Array.isArray(a)){var r=null,i=t._i(a,r);s.checked?i<0&&(t.autoPlay=a.concat([r])):i>-1&&(t.autoPlay=a.slice(0,i).concat(a.slice(i+1)))}else t.autoPlay=o}}}),e("span",{staticClass:"ml-2 text-gray-700"},[t._v("自动播放")])])])]),t._m(0)])])},A=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white rounded-lg shadow p-6"},[e("h2",{staticClass:"font-semibold text-xl mb-4"},[t._v("关于")]),e("p",{staticClass:"text-gray-600 mb-2"},[t._v("Nature Sleep")]),e("p",{staticClass:"text-gray-600 mb-2"},[t._v("版本: 1.0.0")]),e("p",{staticClass:"text-gray-600"},[t._v("© 2023 Nature Sleep. All rights reserved.")])])}],N={name:"Settings",data(){return{darkMode:!1,autoPlay:!1}}},$=N,L=Object(l["a"])($,M,A,!1,null,null,null),T=L.exports;s["a"].use(d["a"]);const G=[{path:"/",name:"Home",component:w},{path:"/favorites",name:"Favorites",component:O},{path:"/settings",name:"Settings",component:T}],H=new d["a"]({mode:"history",base:"/nature-sleep/",routes:G});var J=H;a("d940");s["a"].config.productionTip=!1,new s["a"]({router:J,data(){return{sounds:[{id:1,name:"Ocean Waves",description:"Gentle waves crashing on the shore",duration:"30:00",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",audio:"/sounds/ocean-waves.mp3",isFavorite:!1},{id:2,name:"Rain Forest",description:"Soothing sounds of a tropical rain forest",duration:"45:00",image:"https://images.unsplash.com/photo-1511497584788-876760111969",audio:"/sounds/rain-forest.mp3",isFavorite:!1},{id:3,name:"Mountain Stream",description:"Crystal clear water flowing through rocks",duration:"60:00",image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470",audio:"/sounds/mountain-stream.mp3",isFavorite:!1}]}},render:t=>t(u)}).$mount("#app")},d940:function(t,e,a){},eede:function(t,e,a){"use strict";a("3971")}});