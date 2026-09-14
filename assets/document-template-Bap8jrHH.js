import{A as At,B as Pt}from"./index-B9VlIcv8.js";import{supabase as Ct}from"./supabase-Dulr8jbl.js";async function _e(t={}){}function Me({userId:t,role:e,tenantId:n}={}){}function De(){let t=document.getElementById("offline-bar");t||(t=document.createElement("div"),t.id="offline-bar",t.style.cssText=["display:none;position:fixed;top:0;left:0;right:0;z-index:99999","background:#f79009;color:#fff;text-align:center","padding:8px 16px;font-size:13px;font-weight:700","box-shadow:0 2px 8px rgba(0,0,0,.2)"].join(";"),t.textContent="인터넷 연결이 끊겼습니다. 네트워크를 확인해주세요.",document.body.prepend(t));const e=()=>{t.style.display=navigator.onLine?"none":"block",navigator.onLine&&t._wasOffline&&(t.style.background="#00c9a7",t.textContent="연결이 복구됐습니다.",setTimeout(()=>{t.style.display="none",t.style.background="#f79009",t.textContent="인터넷 연결이 끊겼습니다. 네트워크를 확인해주세요."},2e3)),t._wasOffline=!navigator.onLine};window.addEventListener("online",e),window.addEventListener("offline",e),e()}function ke(t,e,n,r){const c=(n-t)*Math.PI/180,o=(r-e)*Math.PI/180,g=Math.sin(c/2)**2+Math.cos(t*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(o/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(g),Math.sqrt(1-g))}function Ye(t=6e3){return new Promise((e,n)=>{if(!navigator.geolocation){n(new Error("GPS_NOT_SUPPORTED"));return}navigator.geolocation.getCurrentPosition(r=>e({lat:r.coords.latitude,lng:r.coords.longitude,accuracy:r.coords.accuracy}),r=>n(r),{timeout:t,enableHighAccuracy:!0,maximumAge:3e4})})}const rt="ptr-ind";let yt=!1;function It(){if(yt)return;yt=!0;const t=document.createElement("style");t.textContent=`
.${rt}{position:fixed;left:50%;z-index:60;width:36px;height:36px;margin-left:-18px;
  border-radius:50%;background:#fff;box-shadow:0 2px 12px rgba(15,27,45,.18);
  display:flex;align-items:center;justify-content:center;
  opacity:0;pointer-events:none;transform:translateY(0) scale(.7);}
.${rt}.ptr-anim{transition:transform .25s ease,opacity .2s ease;}
.${rt} .ptr-arc{width:18px;height:18px;border-radius:50%;
  border:2.5px solid #dbe2ea;border-top-color:#00c9a7;box-sizing:border-box;}
.${rt}.ptr-spin .ptr-arc{animation:ptr-rot .7s linear infinite;}
@keyframes ptr-rot{to{transform:rotate(360deg)}}`,document.head.appendChild(t)}function Se(t,e,n={}){if(!t||typeof e!="function")return()=>{};if(!("ontouchstart"in window))return()=>{};const r=n.threshold??64,f=n.max??96,c=n.offsetTop??0,o=n.enabled??(()=>!0);It();const g=document.createElement("div");g.className=rt,g.innerHTML='<div class="ptr-arc"></div>',document.body.appendChild(g);const w=g.querySelector(".ptr-arc"),T=t.style.overscrollBehaviorY;t.style.overscrollBehaviorY="contain";let M=0,A=0,$=0,Y=!1,x=!1;function d(){const S=typeof c=="function"?c()||0:c,v=t.getBoundingClientRect();g.style.top=`${Math.max(0,v.top)+S+10}px`}function s(S,v=!1){g.classList.toggle("ptr-anim",v);const L=Math.min(1,S/r);g.style.opacity=String(L),g.style.transform=`translateY(${S}px) scale(${.7+.3*L})`,x||(w.style.transform=`rotate(${S*3}deg)`)}function m(){$=0,x=!1,g.classList.remove("ptr-spin"),s(0,!0)}async function _(){x=!0,g.classList.add("ptr-spin"),w.style.transform="",s(r,!0);try{await Promise.race([Promise.resolve(e()),new Promise(S=>setTimeout(S,15e3))])}catch(S){console.warn("[pull-refresh]",S)}finally{m()}}function y(S){x||S.touches.length!==1||t.scrollTop>0||!o()||(M=S.touches[0].clientY,A=S.touches[0].clientX,$=0,Y=!0,d())}function C(S){if(!Y||x)return;const v=S.touches[0].clientY-M,L=S.touches[0].clientX-A;if(Math.abs(L)>Math.abs(v)){Y=!1;return}if(v<=0||t.scrollTop>0){$>0&&s(0),$=0,Y=!1;return}S.preventDefault(),$=Math.min(f,v*.5),s($)}function E(){!Y||x||(Y=!1,$>=r?_():m())}return t.addEventListener("touchstart",y,{passive:!0}),t.addEventListener("touchmove",C,{passive:!1}),t.addEventListener("touchend",E,{passive:!0}),t.addEventListener("touchcancel",E,{passive:!0}),()=>{t.removeEventListener("touchstart",y),t.removeEventListener("touchmove",C),t.removeEventListener("touchend",E),t.removeEventListener("touchcancel",E),t.style.overscrollBehaviorY=T,g.remove()}}const kt="scandgo_update_snooze",Ht=24*60*60*1e3;function Wt(){var t,e;try{const n=window.Capacitor;if(!((t=n==null?void 0:n.isNativePlatform)!=null&&t.call(n)))return null;const r=(e=n.getPlatform)==null?void 0:e.call(n);return r==="ios"||r==="android"?r:null}catch{return null}}function vt(t,e){const n=String(t??"").split(".").map(c=>parseInt(c,10)||0),r=String(e??"").split(".").map(c=>parseInt(c,10)||0),f=Math.max(n.length,r.length);for(let c=0;c<f;c++){const o=(n[c]||0)-(r[c]||0);if(o!==0)return o<0?-1:1}return 0}function Ut(){try{return parseInt(localStorage.getItem(kt)||"0",10)||0}catch{return 0}}function Rt(){try{localStorage.setItem(kt,String(Date.now()+Ht))}catch{}}async function Bt(t){try{await Pt.open({url:t})}catch{try{window.open(t,"_blank")}catch{}}}async function Le(){try{const t=Wt();if(!t)return"none";const e=await At.getInfo(),n=e==null?void 0:e.version;if(!n)return"none";const{data:r,error:f}=await Ct.from("app_release").select("latest_version, min_version, store_url, notes").eq("platform",t).maybeSingle();if(f||!r)return"none";const c=vt(n,r.min_version)<0,o=vt(n,r.latest_version)<0;return!c&&!o||!c&&Date.now()<Ut()?"none":(jt({forced:c,current:n,latest:r.latest_version,storeUrl:r.store_url,notes:r.notes}),c?"forced":"suggested")}catch(t){return console.warn("[appUpdate] 확인 실패:",(t==null?void 0:t.message)||t),"none"}}function jt({forced:t,current:e,latest:n,storeUrl:r,notes:f}){var o;if(document.getElementById("app-update-overlay"))return;const c=document.createElement("div");c.id="app-update-overlay",c.style.cssText=`
    position:fixed; inset:0; z-index:10000; padding:20px;
    background:rgba(15,27,45,.92);
    display:flex; align-items:center; justify-content:center;`,c.innerHTML=`
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
    </div>`,document.body.appendChild(c),c.querySelector("#app-update-go").addEventListener("click",()=>{Bt(r),t||c.remove()}),(o=c.querySelector("#app-update-later"))==null||o.addEventListener("click",()=>{Rt(),c.remove()})}function ht(t){return String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function st(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yt={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(nt,function(){var n=1e3,r=6e4,f=36e5,c="millisecond",o="second",g="minute",w="hour",T="day",M="week",A="month",$="quarter",Y="year",x="date",d="Invalid Date",s=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(h){var i=["th","st","nd","rd"],a=h%100;return"["+h+(i[(a-20)%10]||i[a]||i[0])+"]"}},y=function(h,i,a){var p=String(h);return!p||p.length>=i?h:""+Array(i+1-p.length).join(a)+h},C={s:y,z:function(h){var i=-h.utcOffset(),a=Math.abs(i),p=Math.floor(a/60),l=a%60;return(i<=0?"+":"-")+y(p,2,"0")+":"+y(l,2,"0")},m:function h(i,a){if(i.date()<a.date())return-h(a,i);var p=12*(a.year()-i.year())+(a.month()-i.month()),l=i.clone().add(p,A),b=a-l<0,k=i.clone().add(p+(b?-1:1),A);return+(-(p+(a-l)/(b?l-k:k-l))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:A,y:Y,w:M,d:T,D:x,h:w,m:g,s:o,ms:c,Q:$}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},E="en",S={};S[E]=_;var v="$isDayjsObject",L=function(h){return h instanceof U||!(!h||!h[v])},P=function h(i,a,p){var l;if(!i)return E;if(typeof i=="string"){var b=i.toLowerCase();S[b]&&(l=b),a&&(S[b]=a,l=b);var k=i.split("-");if(!l&&k.length>1)return h(k[0])}else{var N=i.name;S[N]=i,l=N}return!p&&l&&(E=l),l||!p&&E},O=function(h,i){if(L(h))return h.clone();var a=typeof i=="object"?i:{};return a.date=h,a.args=arguments,new U(a)},D=C;D.l=P,D.i=L,D.w=function(h,i){return O(h,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var U=function(){function h(a){this.$L=P(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[v]=!0}var i=h.prototype;return i.parse=function(a){this.$d=function(p){var l=p.date,b=p.utc;if(l===null)return new Date(NaN);if(D.u(l))return new Date;if(l instanceof Date)return new Date(l);if(typeof l=="string"&&!/Z$/i.test(l)){var k=l.match(s);if(k){var N=k[2]-1||0,I=(k[7]||"0").substring(0,3);return b?new Date(Date.UTC(k[1],N,k[3]||1,k[4]||0,k[5]||0,k[6]||0,I)):new Date(k[1],N,k[3]||1,k[4]||0,k[5]||0,k[6]||0,I)}}return new Date(l)}(a),this.init()},i.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},i.$utils=function(){return D},i.isValid=function(){return this.$d.toString()!==d},i.isSame=function(a,p){var l=O(a);return this.startOf(p)<=l&&l<=this.endOf(p)},i.isAfter=function(a,p){return O(a)<this.startOf(p)},i.isBefore=function(a,p){return this.endOf(p)<O(a)},i.$g=function(a,p,l){return D.u(a)?this[p]:this.set(l,a)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(a,p){var l=this,b=!!D.u(p)||p,k=D.p(a),N=function(Z,R){var F=D.w(l.$u?Date.UTC(l.$y,R,Z):new Date(l.$y,R,Z),l);return b?F:F.endOf(T)},I=function(Z,R){return D.w(l.toDate()[Z].apply(l.toDate("s"),(b?[0,0,0,0]:[23,59,59,999]).slice(R)),l)},H=this.$W,W=this.$M,j=this.$D,J="set"+(this.$u?"UTC":"");switch(k){case Y:return b?N(1,0):N(31,11);case A:return b?N(1,W):N(0,W+1);case M:var q=this.$locale().weekStart||0,Q=(H<q?H+7:H)-q;return N(b?j-Q:j+(6-Q),W);case T:case x:return I(J+"Hours",0);case w:return I(J+"Minutes",1);case g:return I(J+"Seconds",2);case o:return I(J+"Milliseconds",3);default:return this.clone()}},i.endOf=function(a){return this.startOf(a,!1)},i.$set=function(a,p){var l,b=D.p(a),k="set"+(this.$u?"UTC":""),N=(l={},l[T]=k+"Date",l[x]=k+"Date",l[A]=k+"Month",l[Y]=k+"FullYear",l[w]=k+"Hours",l[g]=k+"Minutes",l[o]=k+"Seconds",l[c]=k+"Milliseconds",l)[b],I=b===T?this.$D+(p-this.$W):p;if(b===A||b===Y){var H=this.clone().set(x,1);H.$d[N](I),H.init(),this.$d=H.set(x,Math.min(this.$D,H.daysInMonth())).$d}else N&&this.$d[N](I);return this.init(),this},i.set=function(a,p){return this.clone().$set(a,p)},i.get=function(a){return this[D.p(a)]()},i.add=function(a,p){var l,b=this;a=Number(a);var k=D.p(p),N=function(W){var j=O(b);return D.w(j.date(j.date()+Math.round(W*a)),b)};if(k===A)return this.set(A,this.$M+a);if(k===Y)return this.set(Y,this.$y+a);if(k===T)return N(1);if(k===M)return N(7);var I=(l={},l[g]=r,l[w]=f,l[o]=n,l)[k]||1,H=this.$d.getTime()+a*I;return D.w(H,this)},i.subtract=function(a,p){return this.add(-1*a,p)},i.format=function(a){var p=this,l=this.$locale();if(!this.isValid())return l.invalidDate||d;var b=a||"YYYY-MM-DDTHH:mm:ssZ",k=D.z(this),N=this.$H,I=this.$m,H=this.$M,W=l.weekdays,j=l.months,J=l.meridiem,q=function(R,F,X,V){return R&&(R[F]||R(p,b))||X[F].slice(0,V)},Q=function(R){return D.s(N%12||12,R,"0")},Z=J||function(R,F,X){var V=R<12?"AM":"PM";return X?V.toLowerCase():V};return b.replace(m,function(R,F){return F||function(X){switch(X){case"YY":return String(p.$y).slice(-2);case"YYYY":return D.s(p.$y,4,"0");case"M":return H+1;case"MM":return D.s(H+1,2,"0");case"MMM":return q(l.monthsShort,H,j,3);case"MMMM":return q(j,H);case"D":return p.$D;case"DD":return D.s(p.$D,2,"0");case"d":return String(p.$W);case"dd":return q(l.weekdaysMin,p.$W,W,2);case"ddd":return q(l.weekdaysShort,p.$W,W,3);case"dddd":return W[p.$W];case"H":return String(N);case"HH":return D.s(N,2,"0");case"h":return Q(1);case"hh":return Q(2);case"a":return Z(N,I,!0);case"A":return Z(N,I,!1);case"m":return String(I);case"mm":return D.s(I,2,"0");case"s":return String(p.$s);case"ss":return D.s(p.$s,2,"0");case"SSS":return D.s(p.$ms,3,"0");case"Z":return k}return null}(R)||k.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(a,p,l){var b,k=this,N=D.p(p),I=O(a),H=(I.utcOffset()-this.utcOffset())*r,W=this-I,j=function(){return D.m(k,I)};switch(N){case Y:b=j()/12;break;case A:b=j();break;case $:b=j()/3;break;case M:b=(W-H)/6048e5;break;case T:b=(W-H)/864e5;break;case w:b=W/f;break;case g:b=W/r;break;case o:b=W/n;break;default:b=W}return l?b:D.a(b)},i.daysInMonth=function(){return this.endOf(A).$D},i.$locale=function(){return S[this.$L]},i.locale=function(a,p){if(!a)return this.$L;var l=this.clone(),b=P(a,p,!0);return b&&(l.$L=b),l},i.clone=function(){return D.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},h}(),B=U.prototype;return O.prototype=B,[["$ms",c],["$s",o],["$m",g],["$H",w],["$W",T],["$M",A],["$y",Y],["$D",x]].forEach(function(h){B[h[1]]=function(i){return this.$g(i,h[0],h[1])}}),O.extend=function(h,i){return h.$i||(h(i,U,O),h.$i=!0),O},O.locale=P,O.isDayjs=L,O.unix=function(h){return O(1e3*h)},O.en=S[E],O.Ls=S,O.p={},O})})(Yt);var St=Yt.exports;const G=st(St);var Lt={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(nt,function(){var n="minute",r=/[+-]\d\d(?::?\d\d)?/g,f=/([+-]|\d\d)/g;return function(c,o,g){var w=o.prototype;g.utc=function(d){var s={date:d,utc:!0,args:arguments};return new o(s)},w.utc=function(d){var s=g(this.toDate(),{locale:this.$L,utc:!0});return d?s.add(this.utcOffset(),n):s},w.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var T=w.parse;w.parse=function(d){d.utc&&(this.$u=!0),this.$utils().u(d.$offset)||(this.$offset=d.$offset),T.call(this,d)};var M=w.init;w.init=function(){if(this.$u){var d=this.$d;this.$y=d.getUTCFullYear(),this.$M=d.getUTCMonth(),this.$D=d.getUTCDate(),this.$W=d.getUTCDay(),this.$H=d.getUTCHours(),this.$m=d.getUTCMinutes(),this.$s=d.getUTCSeconds(),this.$ms=d.getUTCMilliseconds()}else M.call(this)};var A=w.utcOffset;w.utcOffset=function(d,s){var m=this.$utils().u;if(m(d))return this.$u?0:m(this.$offset)?A.call(this):this.$offset;if(typeof d=="string"&&(d=function(E){E===void 0&&(E="");var S=E.match(r);if(!S)return null;var v=(""+S[0]).match(f)||["-",0,0],L=v[0],P=60*+v[1]+ +v[2];return P===0?0:L==="+"?P:-P}(d),d===null))return this;var _=Math.abs(d)<=16?60*d:d;if(_===0)return this.utc(s);var y=this.clone();if(s)return y.$offset=_,y.$u=!1,y;var C=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(y=this.local().add(_+C,n)).$offset=_,y.$x.$localOffset=C,y};var $=w.format;w.format=function(d){var s=d||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return $.call(this,s)},w.valueOf=function(){var d=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*d},w.isUTC=function(){return!!this.$u},w.toISOString=function(){return this.toDate().toISOString()},w.toString=function(){return this.toDate().toUTCString()};var Y=w.toDate;w.toDate=function(d){return d==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():Y.call(this)};var x=w.diff;w.diff=function(d,s,m){if(d&&this.$u===d.$u)return x.call(this,d,s,m);var _=this.local(),y=g(d).local();return x.call(_,y,s,m)}}})})(Lt);var Ft=Lt.exports;const Zt=st(Ft);var Ot={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(nt,function(){var n={year:0,month:1,day:2,hour:3,minute:4,second:5},r={};return function(f,c,o){var g,w=function($,Y,x){x===void 0&&(x={});var d=new Date($),s=function(m,_){_===void 0&&(_={});var y=_.timeZoneName||"short",C=m+"|"+y,E=r[C];return E||(E=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:m,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:y}),r[C]=E),E}(Y,x);return s.formatToParts(d)},T=function($,Y){for(var x=w($,Y),d=[],s=0;s<x.length;s+=1){var m=x[s],_=m.type,y=m.value,C=n[_];C>=0&&(d[C]=parseInt(y,10))}var E=d[3],S=E===24?0:E,v=d[0]+"-"+d[1]+"-"+d[2]+" "+S+":"+d[4]+":"+d[5]+":000",L=+$;return(o.utc(v).valueOf()-(L-=L%1e3))/6e4},M=c.prototype;M.tz=function($,Y){$===void 0&&($=g);var x,d=this.utcOffset(),s=this.toDate(),m=s.toLocaleString("en-US",{timeZone:$}),_=Math.round((s-new Date(m))/1e3/60),y=15*-Math.round(s.getTimezoneOffset()/15)-_;if(!Number(y))x=this.utcOffset(0,Y);else if(x=o(m,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(y,!0),Y){var C=x.utcOffset();x=x.add(d-C,"minute")}return x.$x.$timezone=$,x},M.offsetName=function($){var Y=this.$x.$timezone||o.tz.guess(),x=w(this.valueOf(),Y,{timeZoneName:$}).find(function(d){return d.type.toLowerCase()==="timezonename"});return x&&x.value};var A=M.startOf;M.startOf=function($,Y){if(!this.$x||!this.$x.$timezone)return A.call(this,$,Y);var x=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return A.call(x,$,Y).tz(this.$x.$timezone,!0)},o.tz=function($,Y,x){var d=x&&Y,s=x||Y||g,m=T(+o(),s);if(typeof $!="string")return o($).tz(s);var _=function(S,v,L){var P=S-60*v*1e3,O=T(P,L);if(v===O)return[P,v];var D=T(P-=60*(O-v)*1e3,L);return O===D?[P,O]:[S-60*Math.min(O,D)*1e3,Math.max(O,D)]}(o.utc($,d).valueOf(),m,s),y=_[0],C=_[1],E=o(y).utcOffset(C);return E.$x.$timezone=s,E},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function($){g=$}}})})(Ot);var Kt=Ot.exports;const Gt=st(Kt);var zt={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(nt,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,f=/\d/,c=/\d\d/,o=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,w={},T=function(s){return(s=+s)+(s>68?1900:2e3)},M=function(s){return function(m){this[s]=+m}},A=[/[+-]\d\d:?(\d\d)?|Z/,function(s){(this.zone||(this.zone={})).offset=function(m){if(!m||m==="Z")return 0;var _=m.match(/([+-]|\d\d)/g),y=60*_[1]+(+_[2]||0);return y===0?0:_[0]==="+"?-y:y}(s)}],$=function(s){var m=w[s];return m&&(m.indexOf?m:m.s.concat(m.f))},Y=function(s,m){var _,y=w.meridiem;if(y){for(var C=1;C<=24;C+=1)if(s.indexOf(y(C,0,m))>-1){_=C>12;break}}else _=s===(m?"pm":"PM");return _},x={A:[g,function(s){this.afternoon=Y(s,!1)}],a:[g,function(s){this.afternoon=Y(s,!0)}],Q:[f,function(s){this.month=3*(s-1)+1}],S:[f,function(s){this.milliseconds=100*+s}],SS:[c,function(s){this.milliseconds=10*+s}],SSS:[/\d{3}/,function(s){this.milliseconds=+s}],s:[o,M("seconds")],ss:[o,M("seconds")],m:[o,M("minutes")],mm:[o,M("minutes")],H:[o,M("hours")],h:[o,M("hours")],HH:[o,M("hours")],hh:[o,M("hours")],D:[o,M("day")],DD:[c,M("day")],Do:[g,function(s){var m=w.ordinal,_=s.match(/\d+/);if(this.day=_[0],m)for(var y=1;y<=31;y+=1)m(y).replace(/\[|\]/g,"")===s&&(this.day=y)}],w:[o,M("week")],ww:[c,M("week")],M:[o,M("month")],MM:[c,M("month")],MMM:[g,function(s){var m=$("months"),_=($("monthsShort")||m.map(function(y){return y.slice(0,3)})).indexOf(s)+1;if(_<1)throw new Error;this.month=_%12||_}],MMMM:[g,function(s){var m=$("months").indexOf(s)+1;if(m<1)throw new Error;this.month=m%12||m}],Y:[/[+-]?\d+/,M("year")],YY:[c,function(s){this.year=T(s)}],YYYY:[/\d{4}/,M("year")],Z:A,ZZ:A};function d(s){var m,_;m=s,_=w&&w.formats;for(var y=(s=m.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(O,D,U){var B=U&&U.toUpperCase();return D||_[U]||n[U]||_[B].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(h,i,a){return i||a.slice(1)})})).match(r),C=y.length,E=0;E<C;E+=1){var S=y[E],v=x[S],L=v&&v[0],P=v&&v[1];y[E]=P?{regex:L,parser:P}:S.replace(/^\[|\]$/g,"")}return function(O){for(var D={},U=0,B=0;U<C;U+=1){var h=y[U];if(typeof h=="string")B+=h.length;else{var i=h.regex,a=h.parser,p=O.slice(B),l=i.exec(p)[0];a.call(D,l),O=O.replace(l,"")}}return function(b){var k=b.afternoon;if(k!==void 0){var N=b.hours;k?N<12&&(b.hours+=12):N===12&&(b.hours=0),delete b.afternoon}}(D),D}}return function(s,m,_){_.p.customParseFormat=!0,s&&s.parseTwoDigitYear&&(T=s.parseTwoDigitYear);var y=m.prototype,C=y.parse;y.parse=function(E){var S=E.date,v=E.utc,L=E.args;this.$u=v;var P=L[1];if(typeof P=="string"){var O=L[2]===!0,D=L[3]===!0,U=O||D,B=L[2];D&&(B=L[2]),w=this.$locale(),!O&&B&&(w=_.Ls[B]),this.$d=function(p,l,b,k){try{if(["x","X"].indexOf(l)>-1)return new Date((l==="X"?1e3:1)*p);var N=d(l)(p),I=N.year,H=N.month,W=N.day,j=N.hours,J=N.minutes,q=N.seconds,Q=N.milliseconds,Z=N.zone,R=N.week,F=new Date,X=W||(I||H?1:F.getDate()),V=I||F.getFullYear(),ot=0;I&&!H||(ot=H>0?H-1:F.getMonth());var at,dt=j||0,ut=J||0,ft=q||0,pt=Q||0;return Z?new Date(Date.UTC(V,ot,X,dt,ut,ft,pt+60*Z.offset*1e3)):b?new Date(Date.UTC(V,ot,X,dt,ut,ft,pt)):(at=new Date(V,ot,X,dt,ut,ft,pt),R&&(at=k(at).week(R).toDate()),at)}catch{return new Date("")}}(S,P,v,_),this.init(),B&&B!==!0&&(this.$L=this.locale(B).$L),U&&S!=this.format(P)&&(this.$d=new Date("")),w={}}else if(P instanceof Array)for(var h=P.length,i=1;i<=h;i+=1){L[1]=P[i-1];var a=_.apply(this,L);if(a.isValid()){this.$d=a.$d,this.$L=a.$L,this.init();break}i===h&&(this.$d=new Date(""))}else C.call(this,E)}}})})(zt);var qt=zt.exports;const Xt=st(qt);var Tt={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(nt,function(){var n="day";return function(r,f,c){var o=function(T){return T.add(4-T.isoWeekday(),n)},g=f.prototype;g.isoWeekYear=function(){return o(this).year()},g.isoWeek=function(T){if(!this.$utils().u(T))return this.add(7*(T-this.isoWeek()),n);var M,A,$,Y,x=o(this),d=(M=this.isoWeekYear(),A=this.$u,$=(A?c.utc:c)().year(M).startOf("year"),Y=4-$.isoWeekday(),$.isoWeekday()>4&&(Y+=7),$.add(Y,n));return x.diff(d,"week")+1},g.isoWeekday=function(T){return this.$utils().u(T)?this.day()||7:this.day(this.day()%7?T:T-7)};var w=g.startOf;g.startOf=function(T,M){var A=this.$utils(),$=!!A.u(M)||M;return A.p(T)==="isoweek"?$?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):w.bind(this)(T,M)}}})})(Tt);var Jt=Tt.exports;const Vt=st(Jt);var Qt={exports:{}};(function(t,e){(function(n,r){t.exports=r(St)})(nt,function(n){function r(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var f=r(n),c={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(o){return o+"일"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(o){return o<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return f.default.locale(c,null,!0),c})})(Qt);G.extend(Zt);G.extend(Gt);G.extend(Xt);G.extend(Vt);G.locale("ko");const Nt="Asia/Seoul";G("2026-09-10").startOf("isoWeek").format("YYYY-MM-DD")!=="2026-09-07"&&console.error("[time.js] dayjs isoWeek 플러그인이 적용되지 않았습니다 — 주 단위 집계가 틀어집니다.");function Oe(t=te()){return{start:t.clone().startOf("isoWeek").format("YYYY-MM-DD"),end:t.clone().endOf("isoWeek").format("YYYY-MM-DD")}}const et=t=>G(t).tz(Nt),ze=t=>et(t).format("HH:mm"),Te=t=>et(t).format("YYYY-MM-DD"),Ne=t=>et(t).format("M월 D일 (dd)");function te(){return G().tz(Nt)}function Ee(t){if(!t||t<0)return"0시간 0분";const e=Math.floor(t/60),n=Math.round(t%60);return`${e}시간 ${n}분`}function ee(t,e){return Math.max(0,G(e).diff(G(t),"minute"))}const ne=10320,re=.5,se=1.5,bt=8*60,oe=15*60,wt=40*60,xt=8*60,ae=4*60,Et=60,_t={insurance:.094,freelancer:.033,none:0},Mt={insurance:"4대보험 공제 (9.4%)",freelancer:"원천징수 (3.3%)",none:"공제 없음"},Ae={hourly:"시급",daily:"일급",monthly:"월급"};function ie(t){const e=et(t),n=e.day(),r=n===0?-6:1-n;return e.add(r,"day").format("YYYY-MM-DD")}function le(t,e){let n=0,r=t.clone();for(;r.isBefore(e);){const f=r.clone().startOf("day");for(const c of[{start:f.clone().hour(22),end:f.clone().hour(24)},{start:f.clone(),end:f.clone().hour(6)}]){const o=r.isAfter(c.start)?r:c.start,g=e.isBefore(c.end)?e:c.end;g.isAfter(o)&&(n+=g.diff(o,"minute"))}if(r=f.add(1,"day"),r.isAfter(e))break}return Math.max(0,n)}function ce(t,e){const n=Number.isFinite(e)?e:Et;return n<=0||t<ae?0:Math.min(n,t)}function Pe(t,e){const n=(e==null?void 0:e.wageType)||"hourly",r=(e==null?void 0:e.wage)??ne,f=(e==null?void 0:e.deductionType)||"insurance",c=Number.isFinite(e==null?void 0:e.breakLimitMinutes)?e.breakLimitMinutes:Et,o=new Map;for(const v of t||[]){if(!(v!=null&&v.check_in_at)||!(v!=null&&v.check_out_at))continue;const L=v.workday,P=ee(v.check_in_at,v.check_out_at);if(!(P>0))continue;const O=le(et(v.check_in_at),et(v.check_out_at)),D=o.get(L)||{rawMin:0,nightMin:0};D.rawMin+=P,D.nightMin+=O,o.set(L,D)}let g=0,w=0,T=0,M=0,A=0;const $=new Map;for(const[v,L]of o){const P=ce(L.rawMin,c),O=Math.max(0,L.rawMin-P),D=Math.min(L.nightMin,O);g+=L.rawMin,w+=P,T+=O,A+=D;const U=Math.max(0,O-bt),B=Math.min(O,bt),h=ie(v),i=$.get(h)||{workMin:0,dailyOt:0,cappedReg:0};i.workMin+=O,i.dailyOt+=U,i.cappedReg+=B,$.set(h,i)}const Y=new Map;for(const[v,L]of $){Y.set(v,L.workMin);const P=Math.max(0,L.cappedReg-wt);M+=L.dailyOt+P}const x=o.size;let d=0;if(n!=="monthly"){const v=n==="daily"?r/8:r;for(const L of Y.values()){if(L<oe)continue;const P=Math.min(xt,L/wt*xt);d+=Math.round(P/60*v)}}let s=0,m=0,_=0;if(n==="monthly")s=r;else if(n==="daily")s=x*r;else{const v=T-M;s=Math.round(v/60*r),m=Math.round(A/60*r*re),_=Math.round(M/60*r*se)}const y=s+m+_+d,C=_t[f]??_t.insurance,E=Math.round(y*C),S=y-E;return{wageType:n,wage:r,deductionType:f,breakLimit:c,daysWorked:x,totalRawMin:g,totalBreakMin:w,totalWorkMin:T,regularMin:Math.max(0,T-M),otMin:M,nightMin:A,basePay:s,nightPay:m,otPay:_,holidayPay:d,grossPay:y,deductions:E,netPay:S}}function Ce(t){const e=[],n=r=>`${Math.floor(r/60)}시간 ${r%60}분`;return t.wageType==="monthly"?e.push({label:"월급 (고정)",value:t.basePay}):t.wageType==="daily"?e.push({label:`일급 × ${t.daysWorked}일`,value:t.basePay}):e.push({label:`기본급 (${n(t.regularMin)} × ${t.wage.toLocaleString()}원)`,value:t.basePay}),t.totalBreakMin>0&&e.push({label:`휴게시간 제외 (${n(t.totalBreakMin)})`,value:null,note:!0}),t.nightPay>0&&e.push({label:`야간수당 (22~06시 × 50%, ${n(t.nightMin)})`,value:t.nightPay,plus:!0}),t.otPay>0&&e.push({label:`연장수당 (1일 8시간·주 40시간 초과 × 150%, ${n(t.otMin)})`,value:t.otPay,plus:!0}),t.holidayPay>0&&e.push({label:"주휴수당 (주 15시간 이상)",value:t.holidayPay,plus:!0}),e.push({label:"지급 합계 (세전)",value:t.grossPay,subtotal:!0}),e.push({label:Mt[t.deductionType]||Mt.insurance,value:t.deductions,minus:!0}),e}const it={hourly:{label:"시급",unit:"원/시간",per:"시간당"},daily:{label:"일급",unit:"원/일",per:"1일당"},monthly:{label:"월급",unit:"원/월",per:"월"}},Dt={regular:{label:"정규직 (기간 정함 없음)",title:"표준근로계약서",wageLock:null,dedLock:null},fixed:{label:"계약직 (기간제)",title:"기간제 근로계약서",wageLock:null,dedLock:null},parttime:{label:"단시간 근로자 (알바)",title:"단시간근로자 표준근로계약서",wageLock:null,dedLock:null},daily_worker:{label:"일용근로자",title:"일용근로자 표준근로계약서",wageLock:"daily",dedLock:null},freelance:{label:"3.3% 프리랜서 (도급계약)",title:"업무위탁(용역) 계약서",wageLock:null,dedLock:"freelancer"},construction:{label:"건설일용근로자 (안전서약 포함)",title:"건설일용근로자 표준근로계약서",wageLock:"daily",dedLock:null}};function u(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const tt=t=>(Number(t)||0).toLocaleString("ko-KR");function Ie(t){if(!t)return"";const e=String(t).replace(/[^0-9]/g,"");return e.length<7?"******":`${e.slice(0,6)}-${e[6]}******`}function de(t){if(!t)return[];let e=t;if(typeof t=="string")try{e=JSON.parse(t)}catch{return[]}return Array.isArray(e)?e.map(n=>({name:String((n==null?void 0:n.name)||"").trim(),amount:Number(n==null?void 0:n.amount)||0})).filter(n=>n.name||n.amount):[]}function z(t,e,n){return`
  <div class="lc-art">
    <div class="lc-art-h"><span class="lc-no">${typeof t=="number"?`제${t}조`:t}</span> ${e}</div>
    <div class="lc-art-b">${n}</div>
  </div>`}function gt(t){it[t.wage_type]||it.hourly;const e=de(t.allowances),n=Number(t.bonus_amount)||0,r=t.wage_type==="monthly"?"월 기본급":t.wage_type==="daily"?"일급(1일)":"시급(시간당)",f=[];if(f.push(`<tr><td class="lc-wl">${r}</td><td class="lc-wv">${tt(t.wage_amount)} 원</td></tr>`),f.push(`<tr><td class="lc-wl">상여금</td><td class="lc-wv">${n>0?`있음 · ${tt(n)} 원`:"없음"}</td></tr>`),e.length){const c=e.map(o=>`${u(o.name)} ${tt(o.amount)}원`).join(" / ");f.push(`<tr><td class="lc-wl">기타급여(제수당)</td><td class="lc-wv">있음 · ${c}</td></tr>`)}else f.push('<tr><td class="lc-wl">기타급여(제수당)</td><td class="lc-wv">없음</td></tr>');if(t.wage_type==="monthly"){const c=(Number(t.wage_amount)||0)+n+e.reduce((o,g)=>o+g.amount,0);f.push(`<tr class="lc-wsum"><td class="lc-wl">월 지급 합계(세전)</td><td class="lc-wv"><strong>${tt(c)} 원</strong></td></tr>`)}return f.push(`<tr><td class="lc-wl">임금 지급일</td><td class="lc-wv">매월 ${u(t.pay_day)}일 (휴일인 경우 전일 지급)</td></tr>`),f.push(`<tr><td class="lc-wl">지급 방법</td><td class="lc-wv">${u(t.pay_method||"계좌이체")} (근로자 명의 계좌)</td></tr>`),`<table class="lc-wage">${f.join("")}</table>`}function mt(t){const e=n=>n?"☑":"☐";return`
    <div class="lc-ins">
      <span>${e(t.ins_employment)} 고용보험</span>
      <span>${e(t.ins_industrial)} 산재보험</span>
      <span>${e(t.ins_pension)} 국민연금</span>
      <span>${e(t.ins_health)} 건강보험</span>
    </div>`}function lt(t,e,n={}){const r=n.ownerTitle||"사업주 (사용자)",f=n.empTitle||"근로자",c=u(e.bizName||"-"),o=u(t.owner_name||e.ceoName||"-"),g=u(t.biz_address||e.bizAddress||""),w=u(t.biz_reg_no||e.bizRegNo||""),T=u(e.employeeName||t.employee_name||"-"),M=u(t.employee_address||""),A=u(t.employee_birth||""),$=u(e.employeePhone||""),Y=t.owner_signed_at?new Date(t.owner_signed_at).toLocaleDateString("ko-KR"):"미서명",x=t.employee_signed_at?new Date(t.employee_signed_at).toLocaleDateString("ko-KR"):"미서명",d=n.ownerSignButton&&t.status==="draft"&&!t.owner_signed_at?`<div style="margin-top:10px"><button class="btn small primary" id="btn-owner-sign" data-id="${u(t.id)}">사업주 서명 완료</button></div>`:"";return`
  <div class="lc-sign">
    <div class="lc-sign-box">
      <div class="lc-sign-cap">${r}</div>
      <table class="lc-sign-t">
        <tr><td>사업체명</td><td>${c}</td></tr>
        ${g?`<tr><td>주소</td><td>${g}</td></tr>`:""}
        ${w?`<tr><td>사업자번호</td><td>${w}</td></tr>`:""}
        <tr><td>대표자</td><td><strong>${o}</strong> (서명/인)</td></tr>
      </table>
      <div class="lc-sign-date">서명일: ${Y}</div>
      ${d}
    </div>
    <div class="lc-sign-box">
      <div class="lc-sign-cap">${f}</div>
      <table class="lc-sign-t">
        ${M?`<tr><td>주소</td><td>${M}</td></tr>`:""}
        ${A?`<tr><td>생년월일</td><td>${A}</td></tr>`:""}
        ${$?`<tr><td>연락처</td><td>${$}</td></tr>`:""}
        <tr><td>성명</td><td><strong>${T}</strong> (서명/인)</td></tr>
      </table>
      <div class="lc-sign-date">서명일: ${x}</div>
    </div>
  </div>
  <p class="lc-foot">
    작성일: ${u((t.created_at||"").slice(0,10))} ·
    본 계약서는 「전자문서 및 전자거래 기본법」에 따라 서면과 동일한 법적 효력을 가집니다. ·
    SCAN&amp;GO 전자계약
  </p>`}function $t(t,e,n="근로자"){const r=u(e.bizName||"사업장"),f=u(e.employeeName||t.employee_name||"근로자");return`<p class="lc-intro"><strong>${r}</strong>(이하 "사업주"라 한다)과(와)
    <strong>${f}</strong>(이하 "${n}"라 한다)은(는) 다음과 같이 ${n==="수급인"?"계약":"근로계약"}을 체결한다.</p>`}function He(t,e={},n={}){const r=t.contract_type||"regular";let f;return r==="freelance"?f=he(t,e,n):r==="construction"?f=pe(t,e,n):r==="daily_worker"?f=fe(t,e,n):f=ue(t,e,n),`<div id="printable-contract" class="lc-doc">${ge}${f}</div>`}function ue(t,e,n){const r=Dt[t.contract_type]||Dt.regular,f=t.end_date?`${u(t.start_date)} ~ ${u(t.end_date)}`:`${u(t.start_date)} (기간의 정함이 없음)`,c=t.contract_type==="parttime",o=Number(t.probation_months)>0?z("수습","수습기간",`근로계약 시작일부터 <strong>${u(t.probation_months)}개월</strong>을 수습기간으로 한다.
        ${Number(t.probation_rate)<100?`수습기간 중 임금은 위 임금의 <strong>${u(t.probation_rate)}%</strong>를 지급한다. (단, 1년 이상 계약·단순노무직 등 최저임금 100% 적용 대상 여부를 확인할 것)`:"수습기간 중에도 위 임금의 100%를 지급한다."}`):"";return`
    <h2 class="lc-title">${u(r.title)}</h2>
    <p class="lc-sub">근로기준법 제17조 · 기간제 및 단시간근로자 보호 등에 관한 법률</p>
    ${$t(t,e)}

    ${z(1,"근로계약기간",f)}
    ${z(2,"근무 장소",u(t.work_location||"-"))}
    ${z(3,"업무의 내용",u(t.job_description||"-"))}
    ${z(4,"소정근로시간",`${u(t.daily_start)} ~ ${u(t.daily_end)}
        (휴게시간 ${u(t.break_minutes)}분 포함, 1주 소정근로시간 ${u(t.weekly_hours)}시간)
        ${c?'<br><span class="lc-note">※ 단시간근로자는 근로일·근로일별 근로시간을 아래 「근무일·근무시간」 및 특약사항에 따른다.</span>':""}`)}
    ${z(5,"근무일 / 휴일",`매주 <strong>${u(t.work_days)}</strong> 근무,
        주휴일은 매주 <strong>${u(t.weekly_holiday||"일요일")}</strong>(유급)로 한다.
        ${t.paid_public_holidays?"관공서의 공휴일 및 대체공휴일은 유급휴일로 한다.":""}`)}
    ${z(6,"임금",gt(t))}
    ${z(7,"연차유급휴가",`연차유급휴가는 근로기준법 제60조에서 정하는 바에 따라 부여한다.
        ${Number(t.annual_leave_days)>0?`(연 ${u(t.annual_leave_days)}일 기준)`:""}`)}
    ${z(8,"사회보험 적용여부",mt(t))}
    ${o}
    ${z(9,"근로계약서 교부","사업주는 근로계약을 체결함과 동시에 본 계약서를 사본하여 근로자에게 교부한다. (근로기준법 제17조 제2항)")}
    ${z(10,"성실 이행 의무","사업주와 근로자는 각자가 근로계약, 취업규칙, 단체협약을 지키고 성실하게 이행하여야 한다.")}
    ${z(11,"기타","이 계약에 정함이 없는 사항은 근로기준법령 및 관계 법령에 의한다.")}
    ${ct(t)}
    ${lt(t,e,n)}
  `}function fe(t,e,n){const r=t.end_date?`${u(t.start_date)} ~ ${u(t.end_date)}`:`${u(t.start_date)} (1일 단위)`;return`
    <h2 class="lc-title">일용근로자 표준근로계약서</h2>
    <p class="lc-sub">근로기준법 제17조 · 일용근로 기준</p>
    ${$t(t,e)}

    ${z(1,"근로계약기간",`${r} <span class="lc-note">※ 일용근로자는 1일 단위로 근로계약이 체결·종료된다.</span>`)}
    ${z(2,"근무 장소",u(t.work_location||"-"))}
    ${z(3,"업무의 내용",u(t.job_description||"-"))}
    ${z(4,"근로시간",`${u(t.daily_start)} ~ ${u(t.daily_end)} (휴게시간 ${u(t.break_minutes)}분 포함)`)}
    ${z(5,"임금",gt(t))}
    ${z(6,"주휴수당","1주간 소정근로일을 개근하고 1주 소정근로시간이 15시간 이상인 경우, 주휴수당을 별도로 지급한다.")}
    ${z(7,"사회보험 적용여부",`${mt(t)}<span class="lc-note">※ 일용근로자는 산재·고용보험이 우선 적용되며, 1개월 8일 이상 또는 60시간 이상 근로 시 국민연금·건강보험이 적용될 수 있다.</span>`)}
    ${z(8,"근로계약서 교부","사업주는 본 계약서를 사본하여 근로자에게 교부한다.")}
    ${z(9,"기타","이 계약에 정함이 없는 사항은 근로기준법령에 의한다.")}
    ${ct(t)}
    ${lt(t,e,n)}
  `}function pe(t,e,n){const r=t.end_date?`${u(t.start_date)} ~ ${u(t.end_date)}`:`${u(t.start_date)}부터`,f=t.safety_agreed?`
    ${z("안전","안전보건 서약 (산업안전보건법)",`
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

    ${z(1,"공사명 / 현장",`${u(t.project_name||"-")} (현장 소재지: ${u(t.work_location||"-")})`)}
    ${z(2,"근로계약기간",r)}
    ${z(3,"직종 / 업무",u(t.job_description||"-"))}
    ${z(4,"근로시간",`${u(t.daily_start)} ~ ${u(t.daily_end)} (휴게시간 ${u(t.break_minutes)}분 포함)`)}
    ${z(5,"임금",gt(t))}
    ${z(6,"퇴직공제","「건설근로자의 고용개선 등에 관한 법률」에 따라 건설근로자 퇴직공제부금을 신고·납부한다.")}
    ${z(7,"사회보험 적용여부",mt(t))}
    ${f}
    ${z(8,"근로계약서 교부","사업주는 본 계약서를 사본하여 근로자에게 교부한다.")}
    ${z(9,"기타","이 계약에 정함이 없는 사항은 근로기준법령 및 관계 법령에 의한다.")}
    ${ct(t)}
    ${lt(t,e,n)}
  `}function he(t,e,n){const r=t.end_date?`${u(t.start_date)} ~ ${u(t.end_date)}`:`${u(t.start_date)}부터`,f=it[t.wage_type]||it.monthly,c=tt(t.wage_amount),o=tt(Math.round((Number(t.wage_amount)||0)*.967));return`
    <h2 class="lc-title">업무위탁(용역) 계약서</h2>
    <p class="lc-sub">민법상 도급·위임 계약 · 소득세법 제127조 (사업소득 3.3% 원천징수)</p>
    <p class="lc-intro"><strong>${u(e.bizName||"사업장")}</strong>(이하 "갑")과(와)
      <strong>${u(e.employeeName||t.employee_name||"-")}</strong>(이하 "을")은(는) 다음과 같이 업무위탁계약을 체결한다.</p>

    ${z(1,"계약의 성격",'본 계약은 근로기준법상 근로계약이 아닌 민법상 도급·위임 계약이며, "을"은 독립된 사업자로서 자신의 책임과 재량으로 업무를 수행한다.')}
    ${z(2,"위탁 업무",u(t.job_description||"-"))}
    ${z(3,"계약 기간",r)}
    ${z(4,"업무 수행 장소",u(t.work_location||"-"))}
    ${z(5,"용역 대가",`
      <table class="lc-wage">
        <tr><td class="lc-wl">대가</td><td class="lc-wv">${c} ${u(f.unit)}</td></tr>
        <tr><td class="lc-wl">지급일</td><td class="lc-wv">매월 ${u(t.pay_day)}일</td></tr>
        <tr><td class="lc-wl">지급 방법</td><td class="lc-wv">${u(t.pay_method||"계좌이체")}</td></tr>
        <tr><td class="lc-wl">원천징수</td><td class="lc-wv">사업소득세 3% + 지방소득세 0.3% = 3.3% 원천징수<br>실지급액 약 <strong>${o}원</strong></td></tr>
      </table>`)}
    ${z(6,"4대보험",'"을"은 근로자가 아니므로 4대보험에 가입하지 아니한다. 다만 산재보험 특수형태근로종사자 적용 대상인 경우 관계 법령에 따른다.')}
    ${z(7,"비밀유지",'"을"은 업무 수행 중 알게 된 "갑"의 영업비밀·개인정보를 제3자에게 누설하거나 계약 목적 외로 사용하지 아니한다.')}
    ${z(8,"계약 해지","일방이 계약을 위반하고 상당한 기간을 정하여 시정을 최고하였음에도 시정하지 않을 경우, 상대방은 계약을 해지할 수 있다.")}
    ${z(9,"분쟁 해결","본 계약과 관련한 분쟁은 상호 협의로 해결하며, 협의가 이루어지지 않을 경우 민사소송법상 관할 법원에 따른다.")}
    ${ct(t,"제10조 특약 사항")}
    ${lt(t,e,{...n,ownerTitle:"갑 (위탁자)",empTitle:"을 (수급인 / 사업자)"})}
  `}function ct(t,e="특약 사항"){return t.special_terms?`
  <div class="lc-special">
    <div class="lc-special-h">${u(e)}</div>
    <div class="lc-special-b">${u(t.special_terms).replace(/\n/g,"<br>")}</div>
  </div>`:""}const ge=`<style>
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
</style>`,We={privacy_consent:{label:"개인정보 수집·이용 동의서",short:"개인정보 동의서",icon:"🔒"},security_pledge:{label:"보안·비밀유지 서약서",short:"보안 서약서",icon:"📝"}};function Ue(t,e={},n={}){const r=t.doc_type;let f;return r==="security_pledge"?f=$e(t,e):f=me(t,e),`<div id="printable-doc" class="ed-doc">${ve}${f}${ye(t,e,n)}</div>`}function me(t,e){return`
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
  `}function $e(t,e){return`
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
  `}function K(t,e){return`<div class="ed-sec"><div class="ed-sec-h">${t}</div><div class="ed-sec-b">${e}</div></div>`}function ye(t,e,n={}){const r=u(e.employeeName||t.employee_name||"-"),f=u(e.bizName||"-"),c=u(t.owner_name||e.ceoName||"-"),o=t.employee_signed_at?new Date(t.employee_signed_at).toLocaleDateString("ko-KR")+" 서명 완료":"미서명";return`
  <div class="ed-sign">
    <div class="ed-sign-row"><span>작성일</span><strong>${t.employee_signed_at?new Date(t.employee_signed_at).toLocaleDateString("ko-KR"):new Date().toLocaleDateString("ko-KR")}</strong></div>
    <div class="ed-sign-row"><span>제출처</span><strong>${f}${c!=="-"?` (대표 ${c})`:""}</strong></div>
    <div class="ed-sign-row ed-sign-name"><span>${t.doc_type==="security_pledge"?"서약자":"동의자"}</span>
      <strong>${r} (서명/인)</strong></div>
    <div class="ed-sign-state">${o}</div>
  </div>
  <p class="ed-foot">본 문서는 「전자문서 및 전자거래 기본법」에 따라 서면과 동일한 효력을 가집니다 · SCAN&amp;GO 전자서명</p>`}const ve=`<style>
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
</style>`;export{Dt as C,Et as D,ne as M,Ae as W,Mt as a,it as b,Pe as c,ee as d,u as e,Te as f,We as g,Ie as h,Oe as i,Ue as j,et as k,G as l,Ee as m,te as n,_e as o,de as p,De as q,He as r,Me as s,Se as t,Le as u,ze as v,Ne as w,Ye as x,ke as y,Ce as z};
