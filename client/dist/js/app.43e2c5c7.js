(function(e){function t(t){for(var o,s,i=t[0],c=t[1],u=t[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3f264cde"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,r[1](u)}n[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"4eca":function(e,t,r){"use strict";var o=r("f4a4"),n=r.n(o);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"title"},[e._v("Get more forks in few steps")]),r("div",{staticClass:"form-wrapper"},[r("div",[r("label",{attrs:{for:"owner"}},[e._v("Enter owner")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.owner,expression:"owner"}],attrs:{id:"owner",type:"text"},domProps:{value:e.owner},on:{input:function(t){t.target.composing||(e.owner=t.target.value)}}})]),r("div",[r("label",{attrs:{for:"repoName"}},[e._v("and repo name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.repoName,expression:"repoName"}],attrs:{id:"repoName",type:"text"},domProps:{value:e.repoName},on:{input:function(t){t.target.composing||(e.repoName=t.target.value)}}})]),-1===e.$route.path.indexOf("search")?r("button",{on:{click:function(t){return e.$router.push("/search")}}},[e._v("get results")]):e._e()]),r("router-view")],1)},a=[],s=(r("4160"),r("b64b"),r("159b"),r("59ca")),i=r.n(s),c=(r("66ce"),{mounted:function(){var e=this,t={apiKey:"AIzaSyCKVwnbO5gbhIxLiMoNB5A2LdHHmpP30rc",authDomain:"temp-652e3.firebaseapp.com",databaseURL:"https://temp-652e3.firebaseio.com",storageBucket:"temp-652e3.appspot.com"};i.a.initializeApp(t);var r=i.a.database().ref("favourites");r.on("value",(function(t){t.val()&&Object.keys(t.val()).forEach((function(t){e.$store.state.forks.favourites.push(parseInt(t))}))}))},computed:{owner:{get:function(){return this.$store.state.form.owner},set:function(e){this.$store.commit("form/inputOwner",e)}},repoName:{get:function(){return this.$store.state.form.repoName},set:function(e){this.$store.commit("form/inputRepoName",e)}}},watch:{owner:function(){this.$store.state.forks.page=1,this.$store.dispatch("forks/fetchForks",{})},repoName:function(){this.$store.state.forks.page=1,this.$store.dispatch("forks/fetchForks",{})}}}),u=c,f=(r("5c0b"),r("2877")),l=Object(f["a"])(u,n,a,!1,null,null,null),p=l.exports,d=r("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("b0c0"),r("d3b7");var m=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"forks"},[r("tableList")],1)},h=[],g=r("e4bc"),b={name:"Home",components:{tableList:g["a"]}},k=b,w=Object(f["a"])(k,v,h,!1,null,null,null),_=w.exports,y=r("2f62"),N={owner:"vuejs",repoName:"vue"},O={inputOwner:function(e,t){e.owner=t},inputRepoName:function(e,t){e.repoName=t}},x={namespaced:!0,state:N,mutations:O},$=(r("25f0"),r("7338")),P=r.n($),F={forks:[],favourites:[],page:1},j={fetchForks:function(e,t){var r=e.commit,o=t.perPage,n=void 0===o?10:o,a="github/forks?";a+="page="+E.state.forks.page.toString(),a+="&per_page="+n.toString(),a+="&owner="+E.state.form.owner.toString(),a+="&repoName="+E.state.form.repoName.toString(),console.log(a),P()({type:"get",headers:{"Access-Control-Allow-Origin":"*"},crossdomain:!1,url:a}).then((function(e){r("setForks",e.data),"Error"===!e.data.name&&(alert("Forks 403 error"),console.log("getting forks",e.data.length?e.data.length:e.data))})).catch((function(e){console.log(e)}))}},C={setForks:function(e,t){t&&t.length?e.forks=t:e.forks=[]},incPage:function(e,t){e.page+=t},setPage:function(e,t){e.page=t}},S={state:F,mutations:C,actions:j,namespaced:!0};o["a"].use(y["a"]);var E=new y["a"].Store({modules:{form:x,forks:S},state:{},mutations:{},actions:{}});o["a"].use(m["a"]);var A=[{path:"/",name:"Home",component:_},{path:"/search",name:"Search",component:function(){return r.e("about").then(r.bind(null,"b3c3"))}}],L=new m["a"]({mode:"history",base:"/",routes:A});L.beforeEach((function(e,t,r){var o=e.query,n=o.page,a=o.repository,s=o.owner;"Search"===e.name&&n&&a&&t&&(s?(E.commit("form/inputOwner",s),E.commit("forks/setPage",parseInt(n)),E.commit("form/inputRepoName",a)):alert("warn! Provide &owner= query")),r()}));var T=L;o["a"].config.productionTip=!1,new o["a"]({router:T,store:E,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var o=r("9c0c"),n=r.n(o);n.a},"9c0c":function(e,t,r){},e4bc:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap-table"},[e.mappedForks.length?r("div",{staticClass:"button-panel"},[1!==e.$store.state.forks.page?r("div",{staticClass:"button",on:{click:e.previousPage}},[e._v("previous")]):e._e(),r("div",{staticClass:"button",on:{click:e.nextPage}},[e._v("next")]),r("span",[e._v("page "+e._s(e.$store.state.forks.page))])]):e._e(),r("div",{staticClass:"wrapper"},[r("table",[r("thead",e._l(e.mappedForks[0],(function(t,o,n){return r("th",{directives:[{name:"show",rawName:"v-show",value:0!==n,expression:"index !== 0"}],key:n},[e._v(e._s(o))])})),0),r("tbody",e._l(e.mappedForks,(function(t,o){return r("tr",{key:o,on:{click:function(r){e.current=t}}},e._l(t,(function(t,o,n){return r("td",{directives:[{name:"show",rawName:"v-show",value:0!==n,expression:"index !== 0"}],key:n},[-1!==t.toString().indexOf("http")?r("span",[r("a",{attrs:{href:t,target:"_blank"},on:{click:function(e){e.stopPropagation()}}},[e._v("go to...")])]):r("span",[e._v(e._s(t))])])})),0)})),0)])]),r("transition",{attrs:{name:"modal"}},[e.current?r("div",{staticClass:"table-modal"},[r("div",{staticClass:"wrap"},[r("div",{staticClass:"title"},[r("h4",[e._v("Add to favourites")])]),r("div",{staticClass:"close",on:{click:function(t){e.current=""}}},[e._v("x")]),r("div",{staticClass:"currentName"},[e._v(e._s(e.current.Owner)+" / "+e._s(e.current.Name))]),r("div",{staticClass:"button",on:{click:e.addToFavourites}},[e._v("Save")]),r("div",{staticClass:"button",on:{click:e.removeFromFavourites}},[e._v("Remove")])])]):e._e()])],1)},n=[],a=(r("c740"),r("4160"),r("d81d"),r("a434"),r("b0c0"),r("159b"),r("5530")),s=r("2f62"),i=r("59ca"),c=r.n(i),u=(r("66ce"),{data:function(){return{names:["Repo name","owner"],current:""}},computed:Object(a["a"])(Object(a["a"])({},Object(s["b"])("forks",["forks","stars"])),{},{mappedForks:function(){var e=this,t=this.forks.map((function(t){var r={};return r.id=t.id,r.Name=t.name,r.Owner=t.owner.login,r.Stars=t.stargazers_count,r.Url=t.clone_url,r.Favourites="",e.$store.state.forks.favourites.forEach((function(e){r.id===parseInt(e)&&(r.Favourites="yes")})),r}));return t}}),methods:{addToFavourites:function(){c.a.database().ref("favourites/"+this.current.id).set({id:this.current.id,name:this.current.Name}),this.current=""},removeFromFavourites:function(){var e=this;c.a.database().ref("favourites/"+this.current.id).remove();var t=this.$store.state.forks.favourites.findIndex((function(t){return e.current.id===t}));this.$store.state.forks.favourites.splice(t,1),this.current=""},nextPage:function(){this.$store.commit("forks/incPage",1),this.$store.dispatch("forks/fetchForks",{})},previousPage:function(){var e=this.$store.state.forks.page;1!==e&&(this.$store.commit("forks/incPage",-1),this.$store.dispatch("forks/fetchForks",{}))}}}),f=u,l=(r("4eca"),r("2877")),p=Object(l["a"])(f,o,n,!1,null,null,null);t["a"]=p.exports},f4a4:function(e,t,r){}});
//# sourceMappingURL=app.43e2c5c7.js.map