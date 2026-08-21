import{A as Et,B as At}from"./utils-DUzS9zXA.js";import{supabase as Pt}from"./supabase-Dulr8jbl.js";async function ve(t={}){}function be({userId:t,role:e,tenantId:n}={}){}function we(){let t=document.getElementById("offline-bar");t||(t=document.createElement("div"),t.id="offline-bar",t.style.cssText=["display:none;position:fixed;top:0;left:0;right:0;z-index:99999","background:#f79009;color:#fff;text-align:center","padding:8px 16px;font-size:13px;font-weight:700","box-shadow:0 2px 8px rgba(0,0,0,.2)"].join(";"),t.textContent="인터넷 연결이 끊겼습니다. 네트워크를 확인해주세요.",document.body.prepend(t));const e=()=>{t.style.display=navigator.onLine?"none":"block",navigator.onLine&&t._wasOffline&&(t.style.background="#00c9a7",t.textContent="연결이 복구됐습니다.",setTimeout(()=>{t.style.display="none",t.style.background="#f79009",t.textContent="인터넷 연결이 끊겼습니다. 네트워크를 확인해주세요."},2e3)),t._wasOffline=!navigator.onLine};window.addEventListener("online",e),window.addEventListener("offline",e),e()}function _e(t,e,n,r){const d=(n-t)*Math.PI/180,i=(r-e)*Math.PI/180,$=Math.sin(d/2)**2+Math.cos(t*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(i/2)**2;return 6371e3*2*Math.atan2(Math.sqrt($),Math.sqrt(1-$))}function xe(t=6e3){return new Promise((e,n)=>{if(!navigator.geolocation){n(new Error("GPS_NOT_SUPPORTED"));return}navigator.geolocation.getCurrentPosition(r=>e({lat:r.coords.latitude,lng:r.coords.longitude,accuracy:r.coords.accuracy}),r=>n(r),{timeout:t,enableHighAccuracy:!0,maximumAge:3e4})})}const nt="ptr-ind";let yt=!1;function Ct(){if(yt)return;yt=!0;const t=document.createElement("style");t.textContent=`
.${nt}{position:fixed;left:50%;z-index:60;width:36px;height:36px;margin-left:-18px;
  border-radius:50%;background:#fff;box-shadow:0 2px 12px rgba(15,27,45,.18);
  display:flex;align-items:center;justify-content:center;
  opacity:0;pointer-events:none;transform:translateY(0) scale(.7);}
.${nt}.ptr-anim{transition:transform .25s ease,opacity .2s ease;}
.${nt} .ptr-arc{width:18px;height:18px;border-radius:50%;
  border:2.5px solid #dbe2ea;border-top-color:#00c9a7;box-sizing:border-box;}
.${nt}.ptr-spin .ptr-arc{animation:ptr-rot .7s linear infinite;}
@keyframes ptr-rot{to{transform:rotate(360deg)}}`,document.head.appendChild(t)}function Me(t,e,n={}){if(!t||typeof e!="function")return()=>{};if(!("ontouchstart"in window))return()=>{};const r=n.threshold??64,f=n.max??96,d=n.offsetTop??0,i=n.enabled??(()=>!0);Ct();const $=document.createElement("div");$.className=nt,$.innerHTML='<div class="ptr-arc"></div>',document.body.appendChild($);const _=$.querySelector(".ptr-arc"),C=t.style.overscrollBehaviorY;t.style.overscrollBehaviorY="contain";let L=0,A=0,D=0,z=!1,x=!1;function c(){const k=typeof d=="function"?d()||0:d,y=t.getBoundingClientRect();$.style.top=`${Math.max(0,y.top)+k+10}px`}function o(k,y=!1){$.classList.toggle("ptr-anim",y);const S=Math.min(1,k/r);$.style.opacity=String(S),$.style.transform=`translateY(${k}px) scale(${.7+.3*S})`,x||(_.style.transform=`rotate(${k*3}deg)`)}function g(){D=0,x=!1,$.classList.remove("ptr-spin"),o(0,!0)}async function b(){x=!0,$.classList.add("ptr-spin"),_.style.transform="",o(r,!0);try{await Promise.race([Promise.resolve(e()),new Promise(k=>setTimeout(k,15e3))])}catch(k){console.warn("[pull-refresh]",k)}finally{g()}}function m(k){x||k.touches.length!==1||t.scrollTop>0||!i()||(L=k.touches[0].clientY,A=k.touches[0].clientX,D=0,z=!0,c())}function P(k){if(!z||x)return;const y=k.touches[0].clientY-L,S=k.touches[0].clientX-A;if(Math.abs(S)>Math.abs(y)){z=!1;return}if(y<=0||t.scrollTop>0){D>0&&o(0),D=0,z=!1;return}k.preventDefault(),D=Math.min(f,y*.5),o(D)}function N(){!z||x||(z=!1,D>=r?b():g())}return t.addEventListener("touchstart",m,{passive:!0}),t.addEventListener("touchmove",P,{passive:!1}),t.addEventListener("touchend",N,{passive:!0}),t.addEventListener("touchcancel",N,{passive:!0}),()=>{t.removeEventListener("touchstart",m),t.removeEventListener("touchmove",P),t.removeEventListener("touchend",N),t.removeEventListener("touchcancel",N),t.style.overscrollBehaviorY=C,$.remove()}}const kt="scandgo_update_snooze",It=24*60*60*1e3;function Ht(){var t,e;try{const n=window.Capacitor;if(!((t=n==null?void 0:n.isNativePlatform)!=null&&t.call(n)))return null;const r=(e=n.getPlatform)==null?void 0:e.call(n);return r==="ios"||r==="android"?r:null}catch{return null}}function vt(t,e){const n=String(t??"").split(".").map(d=>parseInt(d,10)||0),r=String(e??"").split(".").map(d=>parseInt(d,10)||0),f=Math.max(n.length,r.length);for(let d=0;d<f;d++){const i=(n[d]||0)-(r[d]||0);if(i!==0)return i<0?-1:1}return 0}function Ut(){try{return parseInt(localStorage.getItem(kt)||"0",10)||0}catch{return 0}}function Rt(){try{localStorage.setItem(kt,String(Date.now()+It))}catch{}}async function Bt(t){try{await At.open({url:t})}catch{try{window.open(t,"_blank")}catch{}}}async function De(){try{const t=Ht();if(!t)return"none";const e=await Et.getInfo(),n=e==null?void 0:e.version;if(!n)return"none";const{data:r,error:f}=await Pt.from("app_release").select("latest_version, min_version, store_url, notes").eq("platform",t).maybeSingle();if(f||!r)return"none";const d=vt(n,r.min_version)<0,i=vt(n,r.latest_version)<0;return!d&&!i||!d&&Date.now()<Ut()?"none":(Ft({forced:d,current:n,latest:r.latest_version,storeUrl:r.store_url,notes:r.notes}),d?"forced":"suggested")}catch(t){return console.warn("[appUpdate] 확인 실패:",(t==null?void 0:t.message)||t),"none"}}function Ft({forced:t,current:e,latest:n,storeUrl:r,notes:f}){var i;if(document.getElementById("app-update-overlay"))return;const d=document.createElement("div");d.id="app-update-overlay",d.style.cssText=`
    position:fixed; inset:0; z-index:10000; padding:20px;
    background:rgba(15,27,45,.92);
    display:flex; align-items:center; justify-content:center;`,d.innerHTML=`
    <div style="background:#fff;border-radius:18px;padding:30px 24px;max-width:380px;width:100%;
                text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.35)">
      <div style="font-size:44px;line-height:1;margin-bottom:14px">🚀</div>
      <h2 style="font-size:19px;font-weight:900;color:#0f1b2d;margin:0 0 8px">
        ${t?"업데이트가 필요합니다":"새 버전이 나왔습니다"}
      </h2>
      <p style="font-size:14px;color:#8a94a6;line-height:1.7;margin:0 0 6px">
        ${t?"이 버전은 더 이상 사용할 수 없습니다.<br>최신 버전으로 업데이트해주세요.":"더 안정적으로 쓰실 수 있도록<br>업데이트를 준비했습니다."}
      </p>
      ${f?`<p style="font-size:13px;color:#3d4a5c;line-height:1.6;margin:0 0 6px">${ht(f)}</p>`:""}
      <p style="font-size:12px;color:#b0b8c4;margin:0 0 22px">
        현재 ${ht(e)} → 최신 ${ht(n)}
      </p>
      <button id="app-update-go"
        style="width:100%;padding:14px;background:linear-gradient(135deg,#00c9a7,#00b096);color:#fff;
               border:none;border-radius:12px;font-size:15px;font-weight:800;cursor:pointer">
        업데이트 하기
      </button>
      ${t?"":`
      <button id="app-update-later"
        style="width:100%;padding:12px;margin-top:9px;background:#f4f6f9;color:#8a94a6;
               border:none;border-radius:12px;font-size:13px;cursor:pointer">
        나중에
      </button>`}
    </div>`,document.body.appendChild(d),d.querySelector("#app-update-go").addEventListener("click",()=>{Bt(r),t||d.remove()}),(i=d.querySelector("#app-update-later"))==null||i.addEventListener("click",()=>{Rt(),d.remove()})}function ht(t){return String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var rt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function it(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var St={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(rt,function(){var n=1e3,r=6e4,f=36e5,d="millisecond",i="second",$="minute",_="hour",C="day",L="week",A="month",D="quarter",z="year",x="date",c="Invalid Date",o=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(h){var a=["th","st","nd","rd"],s=h%100;return"["+h+(a[(s-20)%10]||a[s]||a[0])+"]"}},m=function(h,a,s){var p=String(h);return!p||p.length>=a?h:""+Array(a+1-p.length).join(s)+h},P={s:m,z:function(h){var a=-h.utcOffset(),s=Math.abs(a),p=Math.floor(s/60),l=s%60;return(a<=0?"+":"-")+m(p,2,"0")+":"+m(l,2,"0")},m:function h(a,s){if(a.date()<s.date())return-h(s,a);var p=12*(s.year()-a.year())+(s.month()-a.month()),l=a.clone().add(p,A),v=s-l<0,M=a.clone().add(p+(v?-1:1),A);return+(-(p+(s-l)/(v?l-M:M-l))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:A,y:z,w:L,d:C,D:x,h:_,m:$,s:i,ms:d,Q:D}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},N="en",k={};k[N]=b;var y="$isDayjsObject",S=function(h){return h instanceof R||!(!h||!h[y])},E=function h(a,s,p){var l;if(!a)return N;if(typeof a=="string"){var v=a.toLowerCase();k[v]&&(l=v),s&&(k[v]=s,l=v);var M=a.split("-");if(!l&&M.length>1)return h(M[0])}else{var O=a.name;k[O]=a,l=O}return!p&&l&&(N=l),l||!p&&N},Y=function(h,a){if(S(h))return h.clone();var s=typeof a=="object"?a:{};return s.date=h,s.args=arguments,new R(s)},w=P;w.l=E,w.i=S,w.w=function(h,a){return Y(h,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var R=function(){function h(s){this.$L=E(s.locale,null,!0),this.parse(s),this.$x=this.$x||s.x||{},this[y]=!0}var a=h.prototype;return a.parse=function(s){this.$d=function(p){var l=p.date,v=p.utc;if(l===null)return new Date(NaN);if(w.u(l))return new Date;if(l instanceof Date)return new Date(l);if(typeof l=="string"&&!/Z$/i.test(l)){var M=l.match(o);if(M){var O=M[2]-1||0,I=(M[7]||"0").substring(0,3);return v?new Date(Date.UTC(M[1],O,M[3]||1,M[4]||0,M[5]||0,M[6]||0,I)):new Date(M[1],O,M[3]||1,M[4]||0,M[5]||0,M[6]||0,I)}}return new Date(l)}(s),this.init()},a.init=function(){var s=this.$d;this.$y=s.getFullYear(),this.$M=s.getMonth(),this.$D=s.getDate(),this.$W=s.getDay(),this.$H=s.getHours(),this.$m=s.getMinutes(),this.$s=s.getSeconds(),this.$ms=s.getMilliseconds()},a.$utils=function(){return w},a.isValid=function(){return this.$d.toString()!==c},a.isSame=function(s,p){var l=Y(s);return this.startOf(p)<=l&&l<=this.endOf(p)},a.isAfter=function(s,p){return Y(s)<this.startOf(p)},a.isBefore=function(s,p){return this.endOf(p)<Y(s)},a.$g=function(s,p,l){return w.u(s)?this[p]:this.set(l,s)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(s,p){var l=this,v=!!w.u(p)||p,M=w.p(s),O=function(W,B){var Z=w.w(l.$u?Date.UTC(l.$y,B,W):new Date(l.$y,B,W),l);return v?Z:Z.endOf(C)},I=function(W,B){return w.w(l.toDate()[W].apply(l.toDate("s"),(v?[0,0,0,0]:[23,59,59,999]).slice(B)),l)},H=this.$W,U=this.$M,j=this.$D,X="set"+(this.$u?"UTC":"");switch(M){case z:return v?O(1,0):O(31,11);case A:return v?O(1,U):O(0,U+1);case L:var G=this.$locale().weekStart||0,Q=(H<G?H+7:H)-G;return O(v?j-Q:j+(6-Q),U);case C:case x:return I(X+"Hours",0);case _:return I(X+"Minutes",1);case $:return I(X+"Seconds",2);case i:return I(X+"Milliseconds",3);default:return this.clone()}},a.endOf=function(s){return this.startOf(s,!1)},a.$set=function(s,p){var l,v=w.p(s),M="set"+(this.$u?"UTC":""),O=(l={},l[C]=M+"Date",l[x]=M+"Date",l[A]=M+"Month",l[z]=M+"FullYear",l[_]=M+"Hours",l[$]=M+"Minutes",l[i]=M+"Seconds",l[d]=M+"Milliseconds",l)[v],I=v===C?this.$D+(p-this.$W):p;if(v===A||v===z){var H=this.clone().set(x,1);H.$d[O](I),H.init(),this.$d=H.set(x,Math.min(this.$D,H.daysInMonth())).$d}else O&&this.$d[O](I);return this.init(),this},a.set=function(s,p){return this.clone().$set(s,p)},a.get=function(s){return this[w.p(s)]()},a.add=function(s,p){var l,v=this;s=Number(s);var M=w.p(p),O=function(U){var j=Y(v);return w.w(j.date(j.date()+Math.round(U*s)),v)};if(M===A)return this.set(A,this.$M+s);if(M===z)return this.set(z,this.$y+s);if(M===C)return O(1);if(M===L)return O(7);var I=(l={},l[$]=r,l[_]=f,l[i]=n,l)[M]||1,H=this.$d.getTime()+s*I;return w.w(H,this)},a.subtract=function(s,p){return this.add(-1*s,p)},a.format=function(s){var p=this,l=this.$locale();if(!this.isValid())return l.invalidDate||c;var v=s||"YYYY-MM-DDTHH:mm:ssZ",M=w.z(this),O=this.$H,I=this.$m,H=this.$M,U=l.weekdays,j=l.months,X=l.meridiem,G=function(B,Z,q,J){return B&&(B[Z]||B(p,v))||q[Z].slice(0,J)},Q=function(B){return w.s(O%12||12,B,"0")},W=X||function(B,Z,q){var J=B<12?"AM":"PM";return q?J.toLowerCase():J};return v.replace(g,function(B,Z){return Z||function(q){switch(q){case"YY":return String(p.$y).slice(-2);case"YYYY":return w.s(p.$y,4,"0");case"M":return H+1;case"MM":return w.s(H+1,2,"0");case"MMM":return G(l.monthsShort,H,j,3);case"MMMM":return G(j,H);case"D":return p.$D;case"DD":return w.s(p.$D,2,"0");case"d":return String(p.$W);case"dd":return G(l.weekdaysMin,p.$W,U,2);case"ddd":return G(l.weekdaysShort,p.$W,U,3);case"dddd":return U[p.$W];case"H":return String(O);case"HH":return w.s(O,2,"0");case"h":return Q(1);case"hh":return Q(2);case"a":return W(O,I,!0);case"A":return W(O,I,!1);case"m":return String(I);case"mm":return w.s(I,2,"0");case"s":return String(p.$s);case"ss":return w.s(p.$s,2,"0");case"SSS":return w.s(p.$ms,3,"0");case"Z":return M}return null}(B)||M.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(s,p,l){var v,M=this,O=w.p(p),I=Y(s),H=(I.utcOffset()-this.utcOffset())*r,U=this-I,j=function(){return w.m(M,I)};switch(O){case z:v=j()/12;break;case A:v=j();break;case D:v=j()/3;break;case L:v=(U-H)/6048e5;break;case C:v=(U-H)/864e5;break;case _:v=U/f;break;case $:v=U/r;break;case i:v=U/n;break;default:v=U}return l?v:w.a(v)},a.daysInMonth=function(){return this.endOf(A).$D},a.$locale=function(){return k[this.$L]},a.locale=function(s,p){if(!s)return this.$L;var l=this.clone(),v=E(s,p,!0);return v&&(l.$L=v),l},a.clone=function(){return w.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},h}(),F=R.prototype;return Y.prototype=F,[["$ms",d],["$s",i],["$m",$],["$H",_],["$W",C],["$M",A],["$y",z],["$D",x]].forEach(function(h){F[h[1]]=function(a){return this.$g(a,h[0],h[1])}}),Y.extend=function(h,a){return h.$i||(h(a,R,Y),h.$i=!0),Y},Y.locale=E,Y.isDayjs=S,Y.unix=function(h){return Y(1e3*h)},Y.en=k[N],Y.Ls=k,Y.p={},Y})})(St);var Yt=St.exports;const V=it(Yt);var Lt={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(rt,function(){var n="minute",r=/[+-]\d\d(?::?\d\d)?/g,f=/([+-]|\d\d)/g;return function(d,i,$){var _=i.prototype;$.utc=function(c){var o={date:c,utc:!0,args:arguments};return new i(o)},_.utc=function(c){var o=$(this.toDate(),{locale:this.$L,utc:!0});return c?o.add(this.utcOffset(),n):o},_.local=function(){return $(this.toDate(),{locale:this.$L,utc:!1})};var C=_.parse;_.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),C.call(this,c)};var L=_.init;_.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else L.call(this)};var A=_.utcOffset;_.utcOffset=function(c,o){var g=this.$utils().u;if(g(c))return this.$u?0:g(this.$offset)?A.call(this):this.$offset;if(typeof c=="string"&&(c=function(N){N===void 0&&(N="");var k=N.match(r);if(!k)return null;var y=(""+k[0]).match(f)||["-",0,0],S=y[0],E=60*+y[1]+ +y[2];return E===0?0:S==="+"?E:-E}(c),c===null))return this;var b=Math.abs(c)<=16?60*c:c;if(b===0)return this.utc(o);var m=this.clone();if(o)return m.$offset=b,m.$u=!1,m;var P=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(m=this.local().add(b+P,n)).$offset=b,m.$x.$localOffset=P,m};var D=_.format;_.format=function(c){var o=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return D.call(this,o)},_.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},_.isUTC=function(){return!!this.$u},_.toISOString=function(){return this.toDate().toISOString()},_.toString=function(){return this.toDate().toUTCString()};var z=_.toDate;_.toDate=function(c){return c==="s"&&this.$offset?$(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():z.call(this)};var x=_.diff;_.diff=function(c,o,g){if(c&&this.$u===c.$u)return x.call(this,c,o,g);var b=this.local(),m=$(c).local();return x.call(b,m,o,g)}}})})(Lt);var jt=Lt.exports;const Zt=it(jt);var zt={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(rt,function(){var n={year:0,month:1,day:2,hour:3,minute:4,second:5},r={};return function(f,d,i){var $,_=function(D,z,x){x===void 0&&(x={});var c=new Date(D),o=function(g,b){b===void 0&&(b={});var m=b.timeZoneName||"short",P=g+"|"+m,N=r[P];return N||(N=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:g,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:m}),r[P]=N),N}(z,x);return o.formatToParts(c)},C=function(D,z){for(var x=_(D,z),c=[],o=0;o<x.length;o+=1){var g=x[o],b=g.type,m=g.value,P=n[b];P>=0&&(c[P]=parseInt(m,10))}var N=c[3],k=N===24?0:N,y=c[0]+"-"+c[1]+"-"+c[2]+" "+k+":"+c[4]+":"+c[5]+":000",S=+D;return(i.utc(y).valueOf()-(S-=S%1e3))/6e4},L=d.prototype;L.tz=function(D,z){D===void 0&&(D=$);var x,c=this.utcOffset(),o=this.toDate(),g=o.toLocaleString("en-US",{timeZone:D}),b=Math.round((o-new Date(g))/1e3/60),m=15*-Math.round(o.getTimezoneOffset()/15)-b;if(!Number(m))x=this.utcOffset(0,z);else if(x=i(g,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(m,!0),z){var P=x.utcOffset();x=x.add(c-P,"minute")}return x.$x.$timezone=D,x},L.offsetName=function(D){var z=this.$x.$timezone||i.tz.guess(),x=_(this.valueOf(),z,{timeZoneName:D}).find(function(c){return c.type.toLowerCase()==="timezonename"});return x&&x.value};var A=L.startOf;L.startOf=function(D,z){if(!this.$x||!this.$x.$timezone)return A.call(this,D,z);var x=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return A.call(x,D,z).tz(this.$x.$timezone,!0)},i.tz=function(D,z,x){var c=x&&z,o=x||z||$,g=C(+i(),o);if(typeof D!="string")return i(D).tz(o);var b=function(k,y,S){var E=k-60*y*1e3,Y=C(E,S);if(y===Y)return[E,y];var w=C(E-=60*(Y-y)*1e3,S);return Y===w?[E,Y]:[k-60*Math.min(Y,w)*1e3,Math.max(Y,w)]}(i.utc(D,c).valueOf(),g,o),m=b[0],P=b[1],N=i(m).utcOffset(P);return N.$x.$timezone=o,N},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(D){$=D}}})})(zt);var Wt=zt.exports;const Kt=it(Wt);var Tt={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(rt,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,f=/\d/,d=/\d\d/,i=/\d\d?/,$=/\d*[^-_:/,()\s\d]+/,_={},C=function(o){return(o=+o)+(o>68?1900:2e3)},L=function(o){return function(g){this[o]=+g}},A=[/[+-]\d\d:?(\d\d)?|Z/,function(o){(this.zone||(this.zone={})).offset=function(g){if(!g||g==="Z")return 0;var b=g.match(/([+-]|\d\d)/g),m=60*b[1]+(+b[2]||0);return m===0?0:b[0]==="+"?-m:m}(o)}],D=function(o){var g=_[o];return g&&(g.indexOf?g:g.s.concat(g.f))},z=function(o,g){var b,m=_.meridiem;if(m){for(var P=1;P<=24;P+=1)if(o.indexOf(m(P,0,g))>-1){b=P>12;break}}else b=o===(g?"pm":"PM");return b},x={A:[$,function(o){this.afternoon=z(o,!1)}],a:[$,function(o){this.afternoon=z(o,!0)}],Q:[f,function(o){this.month=3*(o-1)+1}],S:[f,function(o){this.milliseconds=100*+o}],SS:[d,function(o){this.milliseconds=10*+o}],SSS:[/\d{3}/,function(o){this.milliseconds=+o}],s:[i,L("seconds")],ss:[i,L("seconds")],m:[i,L("minutes")],mm:[i,L("minutes")],H:[i,L("hours")],h:[i,L("hours")],HH:[i,L("hours")],hh:[i,L("hours")],D:[i,L("day")],DD:[d,L("day")],Do:[$,function(o){var g=_.ordinal,b=o.match(/\d+/);if(this.day=b[0],g)for(var m=1;m<=31;m+=1)g(m).replace(/\[|\]/g,"")===o&&(this.day=m)}],w:[i,L("week")],ww:[d,L("week")],M:[i,L("month")],MM:[d,L("month")],MMM:[$,function(o){var g=D("months"),b=(D("monthsShort")||g.map(function(m){return m.slice(0,3)})).indexOf(o)+1;if(b<1)throw new Error;this.month=b%12||b}],MMMM:[$,function(o){var g=D("months").indexOf(o)+1;if(g<1)throw new Error;this.month=g%12||g}],Y:[/[+-]?\d+/,L("year")],YY:[d,function(o){this.year=C(o)}],YYYY:[/\d{4}/,L("year")],Z:A,ZZ:A};function c(o){var g,b;g=o,b=_&&_.formats;for(var m=(o=g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Y,w,R){var F=R&&R.toUpperCase();return w||b[R]||n[R]||b[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(h,a,s){return a||s.slice(1)})})).match(r),P=m.length,N=0;N<P;N+=1){var k=m[N],y=x[k],S=y&&y[0],E=y&&y[1];m[N]=E?{regex:S,parser:E}:k.replace(/^\[|\]$/g,"")}return function(Y){for(var w={},R=0,F=0;R<P;R+=1){var h=m[R];if(typeof h=="string")F+=h.length;else{var a=h.regex,s=h.parser,p=Y.slice(F),l=a.exec(p)[0];s.call(w,l),Y=Y.replace(l,"")}}return function(v){var M=v.afternoon;if(M!==void 0){var O=v.hours;M?O<12&&(v.hours+=12):O===12&&(v.hours=0),delete v.afternoon}}(w),w}}return function(o,g,b){b.p.customParseFormat=!0,o&&o.parseTwoDigitYear&&(C=o.parseTwoDigitYear);var m=g.prototype,P=m.parse;m.parse=function(N){var k=N.date,y=N.utc,S=N.args;this.$u=y;var E=S[1];if(typeof E=="string"){var Y=S[2]===!0,w=S[3]===!0,R=Y||w,F=S[2];w&&(F=S[2]),_=this.$locale(),!Y&&F&&(_=b.Ls[F]),this.$d=function(p,l,v,M){try{if(["x","X"].indexOf(l)>-1)return new Date((l==="X"?1e3:1)*p);var O=c(l)(p),I=O.year,H=O.month,U=O.day,j=O.hours,X=O.minutes,G=O.seconds,Q=O.milliseconds,W=O.zone,B=O.week,Z=new Date,q=U||(I||H?1:Z.getDate()),J=I||Z.getFullYear(),ot=0;I&&!H||(ot=H>0?H-1:Z.getMonth());var st,dt=j||0,ut=X||0,ft=G||0,pt=Q||0;return W?new Date(Date.UTC(J,ot,q,dt,ut,ft,pt+60*W.offset*1e3)):v?new Date(Date.UTC(J,ot,q,dt,ut,ft,pt)):(st=new Date(J,ot,q,dt,ut,ft,pt),B&&(st=M(st).week(B).toDate()),st)}catch{return new Date("")}}(k,E,y,b),this.init(),F&&F!==!0&&(this.$L=this.locale(F).$L),R&&k!=this.format(E)&&(this.$d=new Date("")),_={}}else if(E instanceof Array)for(var h=E.length,a=1;a<=h;a+=1){S[1]=E[a-1];var s=b.apply(this,S);if(s.isValid()){this.$d=s.$d,this.$L=s.$L,this.init();break}a===h&&(this.$d=new Date(""))}else P.call(this,N)}}})})(Tt);var Gt=Tt.exports;const qt=it(Gt);var Xt={exports:{}};(function(t,e){(function(n,r){t.exports=r(Yt)})(rt,function(n){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var f=r(n),d={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(i){return i+"일"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(i){return i<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return f.default.locale(d,null,!0),d})})(Xt);V.extend(Zt);V.extend(Kt);V.extend(qt);V.locale("ko");const Ot="Asia/Seoul",et=t=>V(t).tz(Ot),ke=t=>et(t).format("HH:mm"),Se=t=>et(t).format("YYYY-MM-DD"),Ye=t=>et(t).format("M월 D일 (dd)");function Le(){return V().tz(Ot)}function ze(t){if(!t||t<0)return"0시간 0분";const e=Math.floor(t/60),n=Math.round(t%60);return`${e}시간 ${n}분`}function Jt(t,e){return Math.max(0,V(e).diff(V(t),"minute"))}const Vt=10320,Qt=.5,te=1.5,bt=8*60,ee=15*60,wt=40*60,_t=8*60,ne=4*60,Nt=60,xt={insurance:.094,freelancer:.033,none:0},Mt={insurance:"4대보험 공제 (9.4%)",freelancer:"원천징수 (3.3%)",none:"공제 없음"},Te={hourly:"시급",daily:"일급",monthly:"월급"};function re(t){const e=et(t),n=e.day(),r=n===0?-6:1-n;return e.add(r,"day").format("YYYY-MM-DD")}function oe(t,e){let n=0,r=t.clone();for(;r.isBefore(e);){const f=r.clone().startOf("day");for(const d of[{start:f.clone().hour(22),end:f.clone().hour(24)},{start:f.clone(),end:f.clone().hour(6)}]){const i=r.isAfter(d.start)?r:d.start,$=e.isBefore(d.end)?e:d.end;$.isAfter(i)&&(n+=$.diff(i,"minute"))}if(r=f.add(1,"day"),r.isAfter(e))break}return Math.max(0,n)}function se(t,e){const n=Number.isFinite(e)?e:Nt;return n<=0||t<ne?0:Math.min(n,t)}function Oe(t,e){const n=(e==null?void 0:e.wageType)||"hourly",r=(e==null?void 0:e.wage)??Vt,f=(e==null?void 0:e.deductionType)||"insurance",d=Number.isFinite(e==null?void 0:e.breakLimitMinutes)?e.breakLimitMinutes:Nt,i=new Map;for(const y of t||[]){if(!(y!=null&&y.check_in_at)||!(y!=null&&y.check_out_at))continue;const S=y.workday,E=Jt(y.check_in_at,y.check_out_at);if(!(E>0))continue;const Y=oe(et(y.check_in_at),et(y.check_out_at)),w=i.get(S)||{rawMin:0,nightMin:0};w.rawMin+=E,w.nightMin+=Y,i.set(S,w)}let $=0,_=0,C=0,L=0,A=0;const D=new Map;for(const[y,S]of i){const E=se(S.rawMin,d),Y=Math.max(0,S.rawMin-E),w=Math.min(S.nightMin,Y);$+=S.rawMin,_+=E,C+=Y,A+=w;const R=Math.max(0,Y-bt),F=Math.min(Y,bt),h=re(y),a=D.get(h)||{workMin:0,dailyOt:0,cappedReg:0};a.workMin+=Y,a.dailyOt+=R,a.cappedReg+=F,D.set(h,a)}const z=new Map;for(const[y,S]of D){z.set(y,S.workMin);const E=Math.max(0,S.cappedReg-wt);L+=S.dailyOt+E}const x=i.size;let c=0;if(n!=="monthly"){const y=n==="daily"?r/8:r;for(const S of z.values()){if(S<ee)continue;const E=Math.min(_t,S/wt*_t);c+=Math.round(E/60*y)}}let o=0,g=0,b=0;if(n==="monthly")o=r;else if(n==="daily")o=x*r;else{const y=C-L;o=Math.round(y/60*r),g=Math.round(A/60*r*Qt),b=Math.round(L/60*r*te)}const m=o+g+b+c,P=xt[f]??xt.insurance,N=Math.round(m*P),k=m-N;return{wageType:n,wage:r,deductionType:f,breakLimit:d,daysWorked:x,totalRawMin:$,totalBreakMin:_,totalWorkMin:C,regularMin:Math.max(0,C-L),otMin:L,nightMin:A,basePay:o,nightPay:g,otPay:b,holidayPay:c,grossPay:m,deductions:N,netPay:k}}function Ne(t){const e=[],n=r=>`${Math.floor(r/60)}시간 ${r%60}분`;return t.wageType==="monthly"?e.push({label:"월급 (고정)",value:t.basePay}):t.wageType==="daily"?e.push({label:`일급 × ${t.daysWorked}일`,value:t.basePay}):e.push({label:`기본급 (${n(t.regularMin)} × ${t.wage.toLocaleString()}원)`,value:t.basePay}),t.totalBreakMin>0&&e.push({label:`휴게시간 제외 (${n(t.totalBreakMin)})`,value:null,note:!0}),t.nightPay>0&&e.push({label:`야간수당 (22~06시 × 50%, ${n(t.nightMin)})`,value:t.nightPay,plus:!0}),t.otPay>0&&e.push({label:`연장수당 (1일 8시간·주 40시간 초과 × 150%, ${n(t.otMin)})`,value:t.otPay,plus:!0}),t.holidayPay>0&&e.push({label:"주휴수당 (주 15시간 이상)",value:t.holidayPay,plus:!0}),e.push({label:"지급 합계 (세전)",value:t.grossPay,subtotal:!0}),e.push({label:Mt[t.deductionType]||Mt.insurance,value:t.deductions,minus:!0}),e}const at={hourly:{label:"시급",unit:"원/시간",per:"시간당"},daily:{label:"일급",unit:"원/일",per:"1일당"},monthly:{label:"월급",unit:"원/월",per:"월"}},Dt={regular:{label:"정규직 (기간 정함 없음)",title:"표준근로계약서",wageLock:null,dedLock:null},fixed:{label:"계약직 (기간제)",title:"기간제 근로계약서",wageLock:null,dedLock:null},parttime:{label:"단시간 근로자 (알바)",title:"단시간근로자 표준근로계약서",wageLock:null,dedLock:null},daily_worker:{label:"일용근로자",title:"일용근로자 표준근로계약서",wageLock:"daily",dedLock:null},freelance:{label:"3.3% 프리랜서 (도급계약)",title:"업무위탁(용역) 계약서",wageLock:null,dedLock:"freelancer"},construction:{label:"건설일용근로자 (안전서약 포함)",title:"건설일용근로자 표준근로계약서",wageLock:"daily",dedLock:null}};function u(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const tt=t=>(Number(t)||0).toLocaleString("ko-KR");function Ee(t){if(!t)return"";const e=String(t).replace(/[^0-9]/g,"");return e.length<7?"******":`${e.slice(0,6)}-${e[6]}******`}function ae(t){if(!t)return[];let e=t;if(typeof t=="string")try{e=JSON.parse(t)}catch{return[]}return Array.isArray(e)?e.map(n=>({name:String((n==null?void 0:n.name)||"").trim(),amount:Number(n==null?void 0:n.amount)||0})).filter(n=>n.name||n.amount):[]}function T(t,e,n){return`
  <div class="lc-art">
    <div class="lc-art-h"><span class="lc-no">${typeof t=="number"?`제${t}조`:t}</span> ${e}</div>
    <div class="lc-art-b">${n}</div>
  </div>`}function gt(t){at[t.wage_type]||at.hourly;const e=ae(t.allowances),n=Number(t.bonus_amount)||0,r=t.wage_type==="monthly"?"월 기본급":t.wage_type==="daily"?"일급(1일)":"시급(시간당)",f=[];if(f.push(`<tr><td class="lc-wl">${r}</td><td class="lc-wv">${tt(t.wage_amount)} 원</td></tr>`),f.push(`<tr><td class="lc-wl">상여금</td><td class="lc-wv">${n>0?`있음 · ${tt(n)} 원`:"없음"}</td></tr>`),e.length){const d=e.map(i=>`${u(i.name)} ${tt(i.amount)}원`).join(" / ");f.push(`<tr><td class="lc-wl">기타급여(제수당)</td><td class="lc-wv">있음 · ${d}</td></tr>`)}else f.push('<tr><td class="lc-wl">기타급여(제수당)</td><td class="lc-wv">없음</td></tr>');if(t.wage_type==="monthly"){const d=(Number(t.wage_amount)||0)+n+e.reduce((i,$)=>i+$.amount,0);f.push(`<tr class="lc-wsum"><td class="lc-wl">월 지급 합계(세전)</td><td class="lc-wv"><strong>${tt(d)} 원</strong></td></tr>`)}return f.push(`<tr><td class="lc-wl">임금 지급일</td><td class="lc-wv">매월 ${u(t.pay_day)}일 (휴일인 경우 전일 지급)</td></tr>`),f.push(`<tr><td class="lc-wl">지급 방법</td><td class="lc-wv">${u(t.pay_method||"계좌이체")} (근로자 명의 계좌)</td></tr>`),`<table class="lc-wage">${f.join("")}</table>`}function mt(t){const e=n=>n?"☑":"☐";return`
    <div class="lc-ins">
      <span>${e(t.ins_employment)} 고용보험</span>
      <span>${e(t.ins_industrial)} 산재보험</span>
      <span>${e(t.ins_pension)} 국민연금</span>
      <span>${e(t.ins_health)} 건강보험</span>
    </div>`}function lt(t,e,n={}){const r=n.ownerTitle||"사업주 (사용자)",f=n.empTitle||"근로자",d=u(e.bizName||"-"),i=u(t.owner_name||e.ceoName||"-"),$=u(t.biz_address||e.bizAddress||""),_=u(t.biz_reg_no||e.bizRegNo||""),C=u(e.employeeName||t.employee_name||"-"),L=u(t.employee_address||""),A=u(t.employee_birth||""),D=u(e.employeePhone||""),z=t.owner_signed_at?new Date(t.owner_signed_at).toLocaleDateString("ko-KR"):"미서명",x=t.employee_signed_at?new Date(t.employee_signed_at).toLocaleDateString("ko-KR"):"미서명",c=n.ownerSignButton&&t.status==="draft"&&!t.owner_signed_at?`<div style="margin-top:10px"><button class="btn small primary" id="btn-owner-sign" data-id="${u(t.id)}">사업주 서명 완료</button></div>`:"";return`
  <div class="lc-sign">
    <div class="lc-sign-box">
      <div class="lc-sign-cap">${r}</div>
      <table class="lc-sign-t">
        <tr><td>사업체명</td><td>${d}</td></tr>
        ${$?`<tr><td>주소</td><td>${$}</td></tr>`:""}
        ${_?`<tr><td>사업자번호</td><td>${_}</td></tr>`:""}
        <tr><td>대표자</td><td><strong>${i}</strong> (서명/인)</td></tr>
      </table>
      <div class="lc-sign-date">서명일: ${z}</div>
      ${c}
    </div>
    <div class="lc-sign-box">
      <div class="lc-sign-cap">${f}</div>
      <table class="lc-sign-t">
        ${L?`<tr><td>주소</td><td>${L}</td></tr>`:""}
        ${A?`<tr><td>생년월일</td><td>${A}</td></tr>`:""}
        ${D?`<tr><td>연락처</td><td>${D}</td></tr>`:""}
        <tr><td>성명</td><td><strong>${C}</strong> (서명/인)</td></tr>
      </table>
      <div class="lc-sign-date">서명일: ${x}</div>
    </div>
  </div>
  <p class="lc-foot">
    작성일: ${u((t.created_at||"").slice(0,10))} ·
    본 계약서는 「전자문서 및 전자거래 기본법」에 따라 서면과 동일한 법적 효력을 가집니다. ·
    SCAN&amp;GO 전자계약
  </p>`}function $t(t,e,n="근로자"){const r=u(e.bizName||"사업장"),f=u(e.employeeName||t.employee_name||"근로자");return`<p class="lc-intro"><strong>${r}</strong>(이하 "사업주"라 한다)과(와)
    <strong>${f}</strong>(이하 "${n}"라 한다)은(는) 다음과 같이 ${n==="수급인"?"계약":"근로계약"}을 체결한다.</p>`}function Ae(t,e={},n={}){const r=t.contract_type||"regular";let f;return r==="freelance"?f=de(t,e,n):r==="construction"?f=ce(t,e,n):r==="daily_worker"?f=le(t,e,n):f=ie(t,e,n),`<div id="printable-contract" class="lc-doc">${ue}${f}</div>`}function ie(t,e,n){const r=Dt[t.contract_type]||Dt.regular,f=t.end_date?`${u(t.start_date)} ~ ${u(t.end_date)}`:`${u(t.start_date)} (기간의 정함이 없음)`,d=t.contract_type==="parttime",i=Number(t.probation_months)>0?T("수습","수습기간",`근로계약 시작일부터 <strong>${u(t.probation_months)}개월</strong>을 수습기간으로 한다.
        ${Number(t.probation_rate)<100?`수습기간 중 임금은 위 임금의 <strong>${u(t.probation_rate)}%</strong>를 지급한다. (단, 1년 이상 계약·단순노무직 등 최저임금 100% 적용 대상 여부를 확인할 것)`:"수습기간 중에도 위 임금의 100%를 지급한다."}`):"";return`
    <h2 class="lc-title">${u(r.title)}</h2>
    <p class="lc-sub">근로기준법 제17조 · 기간제 및 단시간근로자 보호 등에 관한 법률</p>
    ${$t(t,e)}

    ${T(1,"근로계약기간",f)}
    ${T(2,"근무 장소",u(t.work_location||"-"))}
    ${T(3,"업무의 내용",u(t.job_description||"-"))}
    ${T(4,"소정근로시간",`${u(t.daily_start)} ~ ${u(t.daily_end)}
        (휴게시간 ${u(t.break_minutes)}분 포함, 1주 소정근로시간 ${u(t.weekly_hours)}시간)
        ${d?'<br><span class="lc-note">※ 단시간근로자는 근로일·근로일별 근로시간을 아래 「근무일·근무시간」 및 특약사항에 따른다.</span>':""}`)}
    ${T(5,"근무일 / 휴일",`매주 <strong>${u(t.work_days)}</strong> 근무,
        주휴일은 매주 <strong>${u(t.weekly_holiday||"일요일")}</strong>(유급)로 한다.
        ${t.paid_public_holidays?"관공서의 공휴일 및 대체공휴일은 유급휴일로 한다.":""}`)}
    ${T(6,"임금",gt(t))}
    ${T(7,"연차유급휴가",`연차유급휴가는 근로기준법 제60조에서 정하는 바에 따라 부여한다.
        ${Number(t.annual_leave_days)>0?`(연 ${u(t.annual_leave_days)}일 기준)`:""}`)}
    ${T(8,"사회보험 적용여부",mt(t))}
    ${i}
    ${T(9,"근로계약서 교부","사업주는 근로계약을 체결함과 동시에 본 계약서를 사본하여 근로자에게 교부한다. (근로기준법 제17조 제2항)")}
    ${T(10,"성실 이행 의무","사업주와 근로자는 각자가 근로계약, 취업규칙, 단체협약을 지키고 성실하게 이행하여야 한다.")}
    ${T(11,"기타","이 계약에 정함이 없는 사항은 근로기준법령 및 관계 법령에 의한다.")}
    ${ct(t)}
    ${lt(t,e,n)}
  `}function le(t,e,n){const r=t.end_date?`${u(t.start_date)} ~ ${u(t.end_date)}`:`${u(t.start_date)} (1일 단위)`;return`
    <h2 class="lc-title">일용근로자 표준근로계약서</h2>
    <p class="lc-sub">근로기준법 제17조 · 일용근로 기준</p>
    ${$t(t,e)}

    ${T(1,"근로계약기간",`${r} <span class="lc-note">※ 일용근로자는 1일 단위로 근로계약이 체결·종료된다.</span>`)}
    ${T(2,"근무 장소",u(t.work_location||"-"))}
    ${T(3,"업무의 내용",u(t.job_description||"-"))}
    ${T(4,"근로시간",`${u(t.daily_start)} ~ ${u(t.daily_end)} (휴게시간 ${u(t.break_minutes)}분 포함)`)}
    ${T(5,"임금",gt(t))}
    ${T(6,"주휴수당","1주간 소정근로일을 개근하고 1주 소정근로시간이 15시간 이상인 경우, 주휴수당을 별도로 지급한다.")}
    ${T(7,"사회보험 적용여부",`${mt(t)}<span class="lc-note">※ 일용근로자는 산재·고용보험이 우선 적용되며, 1개월 8일 이상 또는 60시간 이상 근로 시 국민연금·건강보험이 적용될 수 있다.</span>`)}
    ${T(8,"근로계약서 교부","사업주는 본 계약서를 사본하여 근로자에게 교부한다.")}
    ${T(9,"기타","이 계약에 정함이 없는 사항은 근로기준법령에 의한다.")}
    ${ct(t)}
    ${lt(t,e,n)}
  `}function ce(t,e,n){const r=t.end_date?`${u(t.start_date)} ~ ${u(t.end_date)}`:`${u(t.start_date)}부터`,f=t.safety_agreed?`
    ${T("안전","안전보건 서약 (산업안전보건법)",`
      근로자는 다음 사항을 준수할 것을 서약한다.<br>
      ① 사업주가 시행하는 안전보건교육 및 조치를 준수한다.<br>
      ② 작업 전 안전점검(TBM)에 반드시 참여한다.<br>
      ③ 지급된 개인보호구(안전모·안전화·안전대 등)를 착용한다.<br>
      ④ 위험 상황 발견 시 즉시 작업을 중지하고 관리감독자에게 신고한다.<br>
      ⑤ 음주·약물 복용 상태로 작업장에 출입하지 않는다.
      <div class="lc-agree">☑ 근로자는 위 안전보건 서약에 동의함</div>`)}`:"";return`
    <h2 class="lc-title">건설일용근로자 표준근로계약서</h2>
    <p class="lc-sub">건설근로자의 고용개선 등에 관한 법률 · 근로기준법 제17조</p>
    ${$t(t,e)}

    ${T(1,"공사명 / 현장",`${u(t.project_name||"-")} (현장 소재지: ${u(t.work_location||"-")})`)}
    ${T(2,"근로계약기간",r)}
    ${T(3,"직종 / 업무",u(t.job_description||"-"))}
    ${T(4,"근로시간",`${u(t.daily_start)} ~ ${u(t.daily_end)} (휴게시간 ${u(t.break_minutes)}분 포함)`)}
    ${T(5,"임금",gt(t))}
    ${T(6,"퇴직공제","「건설근로자의 고용개선 등에 관한 법률」에 따라 건설근로자 퇴직공제부금을 신고·납부한다.")}
    ${T(7,"사회보험 적용여부",mt(t))}
    ${f}
    ${T(8,"근로계약서 교부","사업주는 본 계약서를 사본하여 근로자에게 교부한다.")}
    ${T(9,"기타","이 계약에 정함이 없는 사항은 근로기준법령 및 관계 법령에 의한다.")}
    ${ct(t)}
    ${lt(t,e,n)}
  `}function de(t,e,n){const r=t.end_date?`${u(t.start_date)} ~ ${u(t.end_date)}`:`${u(t.start_date)}부터`,f=at[t.wage_type]||at.monthly,d=tt(t.wage_amount),i=tt(Math.round((Number(t.wage_amount)||0)*.967));return`
    <h2 class="lc-title">업무위탁(용역) 계약서</h2>
    <p class="lc-sub">민법상 도급·위임 계약 · 소득세법 제127조 (사업소득 3.3% 원천징수)</p>
    <p class="lc-intro"><strong>${u(e.bizName||"사업장")}</strong>(이하 "갑")과(와)
      <strong>${u(e.employeeName||t.employee_name||"-")}</strong>(이하 "을")은(는) 다음과 같이 업무위탁계약을 체결한다.</p>

    ${T(1,"계약의 성격",'본 계약은 근로기준법상 근로계약이 아닌 민법상 도급·위임 계약이며, "을"은 독립된 사업자로서 자신의 책임과 재량으로 업무를 수행한다.')}
    ${T(2,"위탁 업무",u(t.job_description||"-"))}
    ${T(3,"계약 기간",r)}
    ${T(4,"업무 수행 장소",u(t.work_location||"-"))}
    ${T(5,"용역 대가",`
      <table class="lc-wage">
        <tr><td class="lc-wl">대가</td><td class="lc-wv">${d} ${u(f.unit)}</td></tr>
        <tr><td class="lc-wl">지급일</td><td class="lc-wv">매월 ${u(t.pay_day)}일</td></tr>
        <tr><td class="lc-wl">지급 방법</td><td class="lc-wv">${u(t.pay_method||"계좌이체")}</td></tr>
        <tr><td class="lc-wl">원천징수</td><td class="lc-wv">사업소득세 3% + 지방소득세 0.3% = 3.3% 원천징수<br>실지급액 약 <strong>${i}원</strong></td></tr>
      </table>`)}
    ${T(6,"4대보험",'"을"은 근로자가 아니므로 4대보험에 가입하지 아니한다. 다만 산재보험 특수형태근로종사자 적용 대상인 경우 관계 법령에 따른다.')}
    ${T(7,"비밀유지",'"을"은 업무 수행 중 알게 된 "갑"의 영업비밀·개인정보를 제3자에게 누설하거나 계약 목적 외로 사용하지 아니한다.')}
    ${T(8,"계약 해지","일방이 계약을 위반하고 상당한 기간을 정하여 시정을 최고하였음에도 시정하지 않을 경우, 상대방은 계약을 해지할 수 있다.")}
    ${T(9,"분쟁 해결","본 계약과 관련한 분쟁은 상호 협의로 해결하며, 협의가 이루어지지 않을 경우 민사소송법상 관할 법원에 따른다.")}
    ${ct(t,"제10조 특약 사항")}
    ${lt(t,e,{...n,ownerTitle:"갑 (위탁자)",empTitle:"을 (수급인 / 사업자)"})}
  `}function ct(t,e="특약 사항"){return t.special_terms?`
  <div class="lc-special">
    <div class="lc-special-h">${u(e)}</div>
    <div class="lc-special-b">${u(t.special_terms).replace(/\n/g,"<br>")}</div>
  </div>`:""}const ue=`<style>
  .lc-doc{font-family:'Malgun Gothic','Apple SD Gothic Neo','Noto Sans KR',sans-serif;max-width:700px;margin:0 auto;color:#0f1b2d;line-height:1.6}
  .lc-title{text-align:center;font-size:23px;font-weight:900;letter-spacing:4px;margin:0 0 4px}
  .lc-sub{text-align:center;font-size:11px;color:#64748b;margin:0 0 22px}
  .lc-intro{font-size:13px;color:#334155;background:#f8fafc;border-radius:8px;padding:12px 16px;margin-bottom:18px}
  .lc-art{margin-bottom:14px}
  .lc-art-h{font-size:13.5px;font-weight:800;color:#0F2942;margin-bottom:5px}
  .lc-no{display:inline-block;background:#0F2942;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:5px;margin-right:6px}
  .lc-art-b{font-size:13px;color:#334155;padding-left:4px}
  .lc-note{display:block;font-size:11px;color:#94a3b8;margin-top:4px}
  .lc-wage{width:100%;border-collapse:collapse;margin-top:4px}
  .lc-wage td{border:1px solid #e2e7ef;padding:7px 11px;font-size:12.5px}
  .lc-wl{background:#f8fafc;color:#64748b;font-weight:700;width:140px;white-space:nowrap}
  .lc-wv{color:#0f1b2d}
  .lc-wsum td{background:#f0fdfa}
  .lc-ins{display:flex;gap:16px;flex-wrap:wrap;font-size:13px;font-weight:600;color:#0f1b2d;padding:4px 0}
  .lc-agree{margin-top:8px;font-size:12px;font-weight:700;color:#c2410c}
  .lc-special{background:#fffdf5;border:1px solid #fde68a;border-radius:8px;padding:12px 16px;margin:16px 0}
  .lc-special-h{font-size:11px;font-weight:800;color:#92400e;margin-bottom:6px}
  .lc-special-b{font-size:13px;color:#334155}
  .lc-sign{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:24px}
  .lc-sign-box{border:1.5px solid #e2e7ef;border-radius:10px;padding:14px 16px}
  .lc-sign-cap{font-size:11px;font-weight:800;color:#64748b;margin-bottom:8px}
  .lc-sign-t{width:100%;border-collapse:collapse}
  .lc-sign-t td{padding:3px 0;font-size:12px;vertical-align:top}
  .lc-sign-t td:first-child{color:#94a3b8;width:64px;white-space:nowrap}
  .lc-sign-date{font-size:11px;color:#64748b;margin-top:8px;border-top:1px dashed #e2e7ef;padding-top:6px}
  .lc-foot{font-size:10.5px;color:#94a3b8;text-align:center;margin-top:18px;line-height:1.7}
  @media print{.lc-doc{max-width:none}.no-print{display:none}}
</style>`,Pe={privacy_consent:{label:"개인정보 수집·이용 동의서",short:"개인정보 동의서",icon:"🔒"},security_pledge:{label:"보안·비밀유지 서약서",short:"보안 서약서",icon:"📝"}};function Ce(t,e={},n={}){const r=t.doc_type;let f;return r==="security_pledge"?f=pe(t,e):f=fe(t,e),`<div id="printable-doc" class="ed-doc">${ge}${f}${he(t,e,n)}</div>`}function fe(t,e){return`
    <h2 class="ed-title">개인정보 수집·이용 동의서</h2>
    <p class="ed-sub">개인정보 보호법 제15조·제24조</p>
    <p class="ed-intro"><strong>${u(e.bizName||"사업장")}</strong>(이하 "회사")는 근로계약의 체결·이행 및 법령상 의무 이행을 위하여
      아래와 같이 개인정보를 수집·이용하고자 합니다. 내용을 충분히 읽고 동의 여부를 결정하여 주십시오.</p>

    ${K("1. 수집·이용 목적",`
      근로계약의 체결 및 이행 · 임금 지급 및 원천징수 · 4대 사회보험 신고 및 관리 ·
      근태·급여 관리 · 퇴직금 정산 · 법령상 의무(근로기준법·세법 등) 이행`)}

    ${K("2. 수집 항목",`
      <table class="ed-t">
        <tr><td>일반 정보</td><td>성명, 생년월일, 연락처, 주소, 이메일, 입사일, 직책</td></tr>
        <tr><td>급여 정보</td><td>급여계좌(은행·계좌번호), 임금·공제 내역</td></tr>
        <tr><td>근태 정보</td><td>출퇴근 기록, 근무 현장, 위치정보(QR/GPS 체크인 시)</td></tr>
      </table>`)}

    ${K("3. 보유 및 이용 기간",`
      근로관계 종료(퇴직) 후 관계 법령에서 정한 기간까지 보관합니다.
      <br>· 근로계약·임금대장 등: 근로기준법 제42조에 따라 <strong>3년</strong>
      <br>· 원천징수 관련 서류: 국세기본법에 따라 <strong>5년</strong>
      <br>보유기간이 경과한 개인정보는 지체 없이 파기합니다.`)}

    ${K("4. 고유식별정보(주민등록번호) 처리",`
      4대 사회보험 신고 및 원천징수 등 <strong>법령에서 구체적으로 요구하는 경우에 한하여</strong>
      주민등록번호를 수집·이용합니다. (개인정보 보호법 제24조의2)`)}

    ${K("5. 동의를 거부할 권리 및 불이익",`
      귀하는 위 개인정보 수집·이용에 동의를 거부할 권리가 있습니다.
      다만 위 정보는 근로계약 이행에 필수적인 항목으로, 동의를 거부하실 경우
      채용 및 근로계약의 정상적인 이행이 어려울 수 있습니다.`)}

    <div class="ed-agree">
      <p>본인은 위 내용을 충분히 이해하였으며, 개인정보의 수집·이용에 <strong>동의</strong>합니다.</p>
      <p class="ed-agree-sub">☑ 개인정보 수집·이용 동의 (필수) &nbsp;&nbsp; ☑ 고유식별정보 처리 동의 (필수)</p>
    </div>
  `}function pe(t,e){return`
    <h2 class="ed-title">보안 및 비밀유지 서약서</h2>
    <p class="ed-sub">부정경쟁방지 및 영업비밀보호에 관한 법률</p>
    <p class="ed-intro">본인은 <strong>${u(e.bizName||"회사")}</strong>(이하 "회사")에 근무함에 있어,
      아래 사항을 성실히 준수할 것을 서약합니다.</p>

    ${K("제1조 비밀유지 의무",`
      본인은 재직 중은 물론 퇴직 후에도 업무상 알게 된 회사의 영업비밀, 기술정보,
      경영정보, 고객 및 거래처 정보, 동료 및 고객의 개인정보를 회사의 사전 서면 동의 없이
      제3자에게 누설하거나 본인의 이익 또는 계약 목적 외의 용도로 사용하지 않습니다.`)}

    ${K("제2조 자료·자산의 관리",`
      회사로부터 제공받은 문서·데이터·전산자료·장비 등 일체의 자산을 선량한 관리자의
      주의의무로 관리하며, 무단으로 복제·반출·외부 저장하지 않습니다.
      퇴직 시 보유한 모든 회사 자료와 자산을 즉시 반납합니다.`)}

    ${K("제3조 개인정보 보호",`
      업무상 취급하는 고객·동료의 개인정보를 관계 법령(개인정보 보호법 등)에 따라
      처리하며, 목적 외 이용·제3자 제공·유출이 발생하지 않도록 합니다.`)}

    ${K("제4조 위반 시 책임",`
      본 서약을 위반하여 회사에 손해를 발생시킨 경우, 관계 법령에 따른
      민사상 손해배상 및 형사상 책임을 부담합니다.`)}

    ${K("제5조 효력",`
      본 서약의 효력은 재직 기간은 물론 퇴직 후에도 비밀유지가 필요한 기간 동안 유지됩니다.`)}

    <div class="ed-agree">
      <p>본인은 위 서약 내용을 충분히 이해하였으며, 이를 성실히 준수할 것을 <strong>서약</strong>합니다.</p>
    </div>
  `}function K(t,e){return`<div class="ed-sec"><div class="ed-sec-h">${t}</div><div class="ed-sec-b">${e}</div></div>`}function he(t,e,n={}){const r=u(e.employeeName||t.employee_name||"-"),f=u(e.bizName||"-"),d=u(t.owner_name||e.ceoName||"-"),i=t.employee_signed_at?new Date(t.employee_signed_at).toLocaleDateString("ko-KR")+" 서명 완료":"미서명";return`
  <div class="ed-sign">
    <div class="ed-sign-row"><span>작성일</span><strong>${t.employee_signed_at?new Date(t.employee_signed_at).toLocaleDateString("ko-KR"):new Date().toLocaleDateString("ko-KR")}</strong></div>
    <div class="ed-sign-row"><span>제출처</span><strong>${f}${d!=="-"?` (대표 ${d})`:""}</strong></div>
    <div class="ed-sign-row ed-sign-name"><span>${t.doc_type==="security_pledge"?"서약자":"동의자"}</span>
      <strong>${r} (서명/인)</strong></div>
    <div class="ed-sign-state">${i}</div>
  </div>
  <p class="ed-foot">본 문서는 「전자문서 및 전자거래 기본법」에 따라 서면과 동일한 효력을 가집니다 · SCAN&amp;GO 전자서명</p>`}const ge=`<style>
  .ed-doc{font-family:'Malgun Gothic','Apple SD Gothic Neo','Noto Sans KR',sans-serif;max-width:680px;margin:0 auto;color:#0f1b2d;line-height:1.65}
  .ed-title{text-align:center;font-size:21px;font-weight:900;letter-spacing:2px;margin:0 0 4px}
  .ed-sub{text-align:center;font-size:11px;color:#64748b;margin:0 0 20px}
  .ed-intro{font-size:13px;color:#334155;background:#f8fafc;border-radius:8px;padding:12px 16px;margin-bottom:18px}
  .ed-sec{margin-bottom:14px}
  .ed-sec-h{font-size:13px;font-weight:800;color:#0F2942;margin-bottom:5px}
  .ed-sec-b{font-size:12.5px;color:#334155}
  .ed-t{width:100%;border-collapse:collapse;margin-top:4px}
  .ed-t td{border:1px solid #e2e7ef;padding:7px 11px;font-size:12.5px}
  .ed-t td:first-child{background:#f8fafc;color:#64748b;font-weight:700;width:90px;white-space:nowrap}
  .ed-agree{background:#f0fdfa;border:1px solid #99f6e4;border-radius:8px;padding:14px 16px;margin:18px 0 6px;font-size:13px;color:#0f766e}
  .ed-agree-sub{font-size:12px;font-weight:700;margin-top:6px}
  .ed-sign{border:1.5px solid #e2e7ef;border-radius:10px;padding:14px 18px;margin-top:18px}
  .ed-sign-row{display:flex;justify-content:space-between;font-size:13px;padding:4px 0}
  .ed-sign-row span{color:#94a3b8}
  .ed-sign-name{border-top:1px dashed #e2e7ef;margin-top:6px;padding-top:10px;font-size:15px}
  .ed-sign-state{font-size:11px;color:#64748b;text-align:right;margin-top:6px}
  .ed-foot{font-size:10.5px;color:#94a3b8;text-align:center;margin-top:16px}
  @media print{.ed-doc{max-width:none}.no-print{display:none}}
</style>`;export{Dt as C,Nt as D,Vt as M,Te as W,Mt as a,at as b,Oe as c,Jt as d,u as e,Se as f,Pe as g,Ee as h,Ce as i,V as j,et as k,ve as l,ze as m,Le as n,we as o,ae as p,Me as q,Ae as r,be as s,De as t,ke as u,Ye as v,xe as w,_e as x,Ne as y};
