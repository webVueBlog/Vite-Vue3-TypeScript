import{d as Z,g as Ae,o as ee,h as re,j as b,t as te,p as Ne,k as Pe,l as R,E as ne,r as Te,m as Ue}from"./vendor.15c3a774.js";var se=(r,e)=>{const t=r.__vccOpts||r;for(const[s,n]of e)t[s]=n;return t};const k=r=>(Ne("data-v-37bd3f74"),r=r(),Pe(),r),je=k(()=>b("div",null,[R(" Recommended IDE setup: "),b("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),R(" + "),b("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),Be=k(()=>b("div",null,[R("See "),b("code",null,"README.md"),R(" for more information.")],-1)),De=k(()=>b("div",null,[b("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),R(" | "),b("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),Le=Z({props:{msg:null},setup(r){const e=Ae(0);return(t,s)=>(ee(),re("div",null,[b("div",null,te(r.msg),1),je,Be,De,b("button",{type:"button",onClick:s[0]||(s[0]=n=>e.value++)},"count is: "+te(e.value),1)]))}});var ke=se(Le,[["__scopeId","data-v-37bd3f74"]]),q={exports:{}},ae=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},qe=ae,w=Object.prototype.toString;function I(r){return Array.isArray(r)}function H(r){return typeof r=="undefined"}function Ie(r){return r!==null&&!H(r)&&r.constructor!==null&&!H(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function ie(r){return w.call(r)==="[object ArrayBuffer]"}function He(r){return w.call(r)==="[object FormData]"}function Me(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&ie(r.buffer),e}function Fe(r){return typeof r=="string"}function Ve(r){return typeof r=="number"}function oe(r){return r!==null&&typeof r=="object"}function $(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Je(r){return w.call(r)==="[object Date]"}function ze(r){return w.call(r)==="[object File]"}function We(r){return w.call(r)==="[object Blob]"}function ue(r){return w.call(r)==="[object Function]"}function Xe(r){return oe(r)&&ue(r.pipe)}function Ke(r){return w.call(r)==="[object URLSearchParams]"}function Ge(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Ye(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function M(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),I(r))for(var t=0,s=r.length;t<s;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function F(){var r={};function e(n,a){$(r[a])&&$(n)?r[a]=F(r[a],n):$(n)?r[a]=F({},n):I(n)?r[a]=n.slice():r[a]=n}for(var t=0,s=arguments.length;t<s;t++)M(arguments[t],e);return r}function Qe(r,e,t){return M(e,function(n,a){t&&typeof n=="function"?r[a]=qe(n,t):r[a]=n}),r}function Ze(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:I,isArrayBuffer:ie,isBuffer:Ie,isFormData:He,isArrayBufferView:Me,isString:Fe,isNumber:Ve,isObject:oe,isPlainObject:$,isUndefined:H,isDate:Je,isFile:ze,isBlob:We,isFunction:ue,isStream:Xe,isURLSearchParams:Ke,isStandardBrowserEnv:Ye,forEach:M,merge:F,extend:Qe,trim:Ge,stripBOM:Ze},g=h;function le(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var fe=function(e,t,s){if(!t)return e;var n;if(s)n=s(t);else if(g.isURLSearchParams(t))n=t.toString();else{var a=[];g.forEach(t,function(l,m){l===null||typeof l=="undefined"||(g.isArray(l)?m=m+"[]":l=[l],g.forEach(l,function(f){g.isDate(f)?f=f.toISOString():g.isObject(f)&&(f=JSON.stringify(f)),a.push(le(m)+"="+le(f))}))}),n=a.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},er=h;function A(){this.handlers=[]}A.prototype.use=function(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};A.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};A.prototype.forEach=function(e){er.forEach(this.handlers,function(s){s!==null&&e(s)})};var rr=A,tr=h,nr=function(e,t){tr.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},ce=function(e,t,s,n,a){return e.config=t,s&&(e.code=s),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},sr=ce,de=function(e,t,s,n,a){var o=new Error(e);return sr(o,t,s,n,a)},ar=de,ir=function(e,t,s){var n=s.config.validateStatus;!s.status||!n||n(s.status)?e(s):t(ar("Request failed with status code "+s.status,s.config,null,s.request,s))},N=h,or=N.isStandardBrowserEnv()?function(){return{write:function(t,s,n,a,o,u){var l=[];l.push(t+"="+encodeURIComponent(s)),N.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),N.isString(a)&&l.push("path="+a),N.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var s=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),ur=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},lr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},fr=ur,cr=lr,dr=function(e,t){return e&&!fr(t)?cr(e,t):t},V=h,hr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],pr=function(e){var t={},s,n,a;return e&&V.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),s=V.trim(u.substr(0,a)).toLowerCase(),n=V.trim(u.substr(a+1)),s){if(t[s]&&hr.indexOf(s)>=0)return;s==="set-cookie"?t[s]=(t[s]?t[s]:[]).concat([n]):t[s]=t[s]?t[s]+", "+n:n}}),t},he=h,mr=he.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),s;function n(a){var o=a;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return s=n(window.location.href),function(o){var u=he.isString(o)?n(o):o;return u.protocol===s.protocol&&u.host===s.host}}():function(){return function(){return!0}}();function J(r){this.message=r}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};J.prototype.__CANCEL__=!0;var P=J,T=h,vr=ir,br=or,yr=fe,Er=dr,wr=pr,_r=mr,z=de,Sr=j,gr=P,pe=function(e){return new Promise(function(s,n){var a=e.data,o=e.headers,u=e.responseType,l;function m(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}T.isFormData(a)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+y)}var d=Er(e.baseURL,e.url);i.open(e.method.toUpperCase(),yr(d,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function Y(){if(!!i){var v="getAllResponseHeaders"in i?wr(i.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?i.responseText:i.response,_={data:S,status:i.status,statusText:i.statusText,headers:v,config:e,request:i};vr(function(L){s(L),m()},function(L){n(L),m()},_),i=null}}if("onloadend"in i?i.onloadend=Y:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(Y)},i.onabort=function(){!i||(n(z("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(z("Network Error",e,null,i)),i=null},i.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",_=e.transitional||Sr.transitional;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(z(S,e,_.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},T.isStandardBrowserEnv()){var Q=(e.withCredentials||_r(d))&&e.xsrfCookieName?br.read(e.xsrfCookieName):void 0;Q&&(o[e.xsrfHeaderName]=Q)}"setRequestHeader"in i&&T.forEach(o,function(S,_){typeof a=="undefined"&&_.toLowerCase()==="content-type"?delete o[_]:i.setRequestHeader(_,S)}),T.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(v){!i||(n(!v||v&&v.type?new gr("canceled"):v),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),a||(a=null),i.send(a)})},c=h,me=nr,Cr=ce,xr={"Content-Type":"application/x-www-form-urlencoded"};function ve(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Rr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=pe),r}function Or(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(r)}var U={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Rr(),transformRequest:[function(e,t){return me(t,"Accept"),me(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(ve(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&t["Content-Type"]==="application/json"?(ve(t,"application/json"),Or(e)):e}],transformResponse:[function(e){var t=this.transitional||U.transitional,s=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!s&&this.responseType==="json";if(a||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(a)throw o.name==="SyntaxError"?Cr(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){U.headers[e]={}});c.forEach(["post","put","patch"],function(e){U.headers[e]=c.merge(xr)});var j=U,$r=h,Ar=j,Nr=function(e,t,s){var n=this||Ar;return $r.forEach(s,function(o){e=o.call(n,e,t)}),e},be=function(e){return!!(e&&e.__CANCEL__)},ye=h,W=Nr,Pr=be,Tr=j,Ur=P;function X(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Ur("canceled")}var jr=function(e){X(e),e.headers=e.headers||{},e.data=W.call(e,e.data,e.headers,e.transformRequest),e.headers=ye.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ye.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Tr.adapter;return t(e).then(function(n){return X(e),n.data=W.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Pr(n)||(X(e),n&&n.response&&(n.response.data=W.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,Ee=function(e,t){t=t||{};var s={};function n(i,f){return p.isPlainObject(i)&&p.isPlainObject(f)?p.merge(i,f):p.isPlainObject(f)?p.merge({},f):p.isArray(f)?f.slice():f}function a(i){if(p.isUndefined(t[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],t[i])}function o(i){if(!p.isUndefined(t[i]))return n(void 0,t[i])}function u(i){if(p.isUndefined(t[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,t[i])}function l(i){if(i in t)return n(e[i],t[i]);if(i in e)return n(void 0,e[i])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return p.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var y=m[f]||a,d=y(f);p.isUndefined(d)&&y!==l||(s[f]=d)}),s},we={version:"0.25.0"},Br=we.version,K={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){K[r]=function(s){return typeof s===r||"a"+(e<1?"n ":" ")+r}});var _e={};K.transitional=function(e,t,s){function n(a,o){return"[Axios v"+Br+"] Transitional option '"+a+"'"+o+(s?". "+s:"")}return function(a,o,u){if(e===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!_e[o]&&(_e[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,o,u):!0}};function Dr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var s=Object.keys(r),n=s.length;n-- >0;){var a=s[n],o=e[a];if(o){var u=r[a],l=u===void 0||o(u,a,r);if(l!==!0)throw new TypeError("option "+a+" must be "+l);continue}if(t!==!0)throw Error("Unknown option "+a)}}var Lr={assertOptions:Dr,validators:K},Se=h,kr=fe,ge=rr,Ce=jr,B=Ee,xe=Lr,C=xe.validators;function O(r){this.defaults=r,this.interceptors={request:new ge,response:new ge}}O.prototype.request=function(e,t){if(typeof e=="string"?(t=t||{},t.url=e):t=e||{},!t.url)throw new Error("Provided config url is not valid");t=B(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var s=t.transitional;s!==void 0&&xe.assertOptions(s,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(t)===!1||(a=a&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!a){var l=[Ce,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var m=t;n.length;){var i=n.shift(),f=n.shift();try{m=i(m)}catch(y){f(y);break}}try{u=Ce(m)}catch(y){return Promise.reject(y)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};O.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=B(this.defaults,e),kr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Se.forEach(["delete","get","head","options"],function(e){O.prototype[e]=function(t,s){return this.request(B(s||{},{method:e,url:t,data:(s||{}).data}))}});Se.forEach(["post","put","patch"],function(e){O.prototype[e]=function(t,s,n){return this.request(B(n||{},{method:e,url:t,data:s}))}});var qr=O,Ir=P;function x(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(s){if(!!t._listeners){var n,a=t._listeners.length;for(n=0;n<a;n++)t._listeners[n](s);t._listeners=null}}),this.promise.then=function(s){var n,a=new Promise(function(o){t.subscribe(o),n=o}).then(s);return a.cancel=function(){t.unsubscribe(n)},a},r(function(n){t.reason||(t.reason=new Ir(n),e(t.reason))})}x.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};x.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};x.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};x.source=function(){var e,t=new x(function(n){e=n});return{token:t,cancel:e}};var Hr=x,Mr=function(e){return function(s){return e.apply(null,s)}},Fr=h,Vr=function(e){return Fr.isObject(e)&&e.isAxiosError===!0},Re=h,Jr=ae,D=qr,zr=Ee,Wr=j;function Oe(r){var e=new D(r),t=Jr(D.prototype.request,e);return Re.extend(t,D.prototype,e),Re.extend(t,e),t.create=function(n){return Oe(zr(r,n))},t}var E=Oe(Wr);E.Axios=D;E.Cancel=P;E.CancelToken=Hr;E.isCancel=be;E.VERSION=we.version;E.all=function(e){return Promise.all(e)};E.spread=Mr;E.isAxiosError=Vr;q.exports=E;q.exports.default=E;var Xr=q.exports;const Kr="https://api.github.com",G=Xr.create({baseURL:Kr,timeout:2e4});G.interceptors.request.use(r=>r,r=>Promise.reject(r));G.interceptors.response.use(r=>r,r=>{if(r.response&&r.response.data){const e=r.response.status,t=r.response.data.message;ne.error(`Code: ${e}, Message: ${t}`),console.error("[Axios Error]",r.response)}else ne.error(`${r}`);return Promise.reject(r)});var Gr="./assets/logo.2293e00a.png";const Yr=Z({name:"Home",components:{HelloWorld:ke},setup(){G.get("/users/XPoet").then(r=>{console.log("res: ",r)}).catch(r=>{console.log("err: ",r)})}}),Qr=b("img",{alt:"Vue logo",src:Gr},null,-1);function Zr(r,e,t,s,n,a){const o=Te("hello-world");return ee(),re("div",null,[Qr,Ue(o,{msg:"Hello Vue 3 + TypeScript + Vite"})])}var rt=se(Yr,[["render",Zr]]);export{rt as default};