async function ae(t={}){}function ie({userId:t,role:e,tenantId:n}={}){}function oe(){let t=document.getElementById("offline-bar");t||(t=document.createElement("div"),t.id="offline-bar",t.style.cssText=["display:none;position:fixed;top:0;left:0;right:0;z-index:99999","background:#f79009;color:#fff;text-align:center","padding:8px 16px;font-size:13px;font-weight:700","box-shadow:0 2px 8px rgba(0,0,0,.2)"].join(";"),t.textContent="인터넷 연결이 끊겼습니다. 네트워크를 확인해주세요.",document.body.prepend(t));const e=()=>{t.style.display=navigator.onLine?"none":"block",navigator.onLine&&t._wasOffline&&(t.style.background="#00c9a7",t.textContent="연결이 복구됐습니다.",setTimeout(()=>{t.style.display="none",t.style.background="#f79009",t.textContent="인터넷 연결이 끊겼습니다. 네트워크를 확인해주세요."},2e3)),t._wasOffline=!navigator.onLine};window.addEventListener("online",e),window.addEventListener("offline",e),e()}function le(t,e,n,a){const D=(n-t)*Math.PI/180,l=(a-e)*Math.PI/180,m=Math.sin(D/2)**2+Math.cos(t*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(l/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(m),Math.sqrt(1-m))}function ce(t=6e3){return new Promise((e,n)=>{if(!navigator.geolocation){n(new Error("GPS_NOT_SUPPORTED"));return}navigator.geolocation.getCurrentPosition(a=>e({lat:a.coords.latitude,lng:a.coords.longitude,accuracy:a.coords.accuracy}),a=>n(a),{timeout:t,enableHighAccuracy:!0,maximumAge:3e4})})}const et="ptr-ind";let $t=!1;function Tt(){if($t)return;$t=!0;const t=document.createElement("style");t.textContent=`
.${et}{position:fixed;left:50%;z-index:60;width:36px;height:36px;margin-left:-18px;
  border-radius:50%;background:#fff;box-shadow:0 2px 12px rgba(15,27,45,.18);
  display:flex;align-items:center;justify-content:center;
  opacity:0;pointer-events:none;transform:translateY(0) scale(.7);}
.${et}.ptr-anim{transition:transform .25s ease,opacity .2s ease;}
.${et} .ptr-arc{width:18px;height:18px;border-radius:50%;
  border:2.5px solid #dbe2ea;border-top-color:#00c9a7;box-sizing:border-box;}
.${et}.ptr-spin .ptr-arc{animation:ptr-rot .7s linear infinite;}
@keyframes ptr-rot{to{transform:rotate(360deg)}}`,document.head.appendChild(t)}function de(t,e,n={}){if(!t||typeof e!="function")return()=>{};if(!("ontouchstart"in window))return()=>{};const a=n.threshold??64,h=n.max??96,D=n.offsetTop??0,l=n.enabled??(()=>!0);Tt();const m=document.createElement("div");m.className=et,m.innerHTML='<div class="ptr-arc"></div>',document.body.appendChild(m);const _=m.querySelector(".ptr-arc"),C=t.style.overscrollBehaviorY;t.style.overscrollBehaviorY="contain";let Y=0,P=0,M=0,L=!1,b=!1;function c(){const f=typeof D=="function"?D()||0:D,k=t.getBoundingClientRect();m.style.top=`${Math.max(0,k.top)+f+10}px`}function r(f,k=!1){m.classList.toggle("ptr-anim",k);const N=Math.min(1,f/a);m.style.opacity=String(N),m.style.transform=`translateY(${f}px) scale(${.7+.3*N})`,b||(_.style.transform=`rotate(${f*3}deg)`)}function p(){M=0,b=!1,m.classList.remove("ptr-spin"),r(0,!0)}async function v(){b=!0,m.classList.add("ptr-spin"),_.style.transform="",r(a,!0);try{await Promise.race([Promise.resolve(e()),new Promise(f=>setTimeout(f,15e3))])}catch(f){console.warn("[pull-refresh]",f)}finally{p()}}function $(f){b||f.touches.length!==1||t.scrollTop>0||!l()||(Y=f.touches[0].clientY,P=f.touches[0].clientX,M=0,L=!0,c())}function E(f){if(!L||b)return;const k=f.touches[0].clientY-Y,N=f.touches[0].clientX-P;if(Math.abs(N)>Math.abs(k)){L=!1;return}if(k<=0||t.scrollTop>0){M>0&&r(0),M=0,L=!1;return}f.preventDefault(),M=Math.min(h,k*.5),r(M)}function O(){!L||b||(L=!1,M>=a?v():p())}return t.addEventListener("touchstart",$,{passive:!0}),t.addEventListener("touchmove",E,{passive:!1}),t.addEventListener("touchend",O,{passive:!0}),t.addEventListener("touchcancel",O,{passive:!0}),()=>{t.removeEventListener("touchstart",$),t.removeEventListener("touchmove",E),t.removeEventListener("touchend",O),t.removeEventListener("touchcancel",O),t.style.overscrollBehaviorY=C,m.remove()}}var rt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ot(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mt={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(rt,function(){var n=1e3,a=6e4,h=36e5,D="millisecond",l="second",m="minute",_="hour",C="day",Y="week",P="month",M="quarter",L="year",b="date",c="Invalid Date",r=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(g){var i=["th","st","nd","rd"],s=g%100;return"["+g+(i[(s-20)%10]||i[s]||i[0])+"]"}},$=function(g,i,s){var u=String(g);return!u||u.length>=i?g:""+Array(i+1-u.length).join(s)+g},E={s:$,z:function(g){var i=-g.utcOffset(),s=Math.abs(i),u=Math.floor(s/60),o=s%60;return(i<=0?"+":"-")+$(u,2,"0")+":"+$(o,2,"0")},m:function g(i,s){if(i.date()<s.date())return-g(s,i);var u=12*(s.year()-i.year())+(s.month()-i.month()),o=i.clone().add(u,P),y=s-o<0,w=i.clone().add(u+(y?-1:1),P);return+(-(u+(s-o)/(y?o-w:w-o))||0)},a:function(g){return g<0?Math.ceil(g)||0:Math.floor(g)},p:function(g){return{M:P,y:L,w:Y,d:C,D:b,h:_,m,s:l,ms:D,Q:M}[g]||String(g||"").toLowerCase().replace(/s$/,"")},u:function(g){return g===void 0}},O="en",f={};f[O]=v;var k="$isDayjsObject",N=function(g){return g instanceof B||!(!g||!g[k])},A=function g(i,s,u){var o;if(!i)return O;if(typeof i=="string"){var y=i.toLowerCase();f[y]&&(o=y),s&&(f[y]=s,o=y);var w=i.split("-");if(!o&&w.length>1)return g(w[0])}else{var z=i.name;f[z]=i,o=z}return!u&&o&&(O=o),o||!u&&O},T=function(g,i){if(N(g))return g.clone();var s=typeof i=="object"?i:{};return s.date=g,s.args=arguments,new B(s)},x=E;x.l=A,x.i=N,x.w=function(g,i){return T(g,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var B=function(){function g(s){this.$L=A(s.locale,null,!0),this.parse(s),this.$x=this.$x||s.x||{},this[k]=!0}var i=g.prototype;return i.parse=function(s){this.$d=function(u){var o=u.date,y=u.utc;if(o===null)return new Date(NaN);if(x.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var w=o.match(r);if(w){var z=w[2]-1||0,H=(w[7]||"0").substring(0,3);return y?new Date(Date.UTC(w[1],z,w[3]||1,w[4]||0,w[5]||0,w[6]||0,H)):new Date(w[1],z,w[3]||1,w[4]||0,w[5]||0,w[6]||0,H)}}return new Date(o)}(s),this.init()},i.init=function(){var s=this.$d;this.$y=s.getFullYear(),this.$M=s.getMonth(),this.$D=s.getDate(),this.$W=s.getDay(),this.$H=s.getHours(),this.$m=s.getMinutes(),this.$s=s.getSeconds(),this.$ms=s.getMilliseconds()},i.$utils=function(){return x},i.isValid=function(){return this.$d.toString()!==c},i.isSame=function(s,u){var o=T(s);return this.startOf(u)<=o&&o<=this.endOf(u)},i.isAfter=function(s,u){return T(s)<this.startOf(u)},i.isBefore=function(s,u){return this.endOf(u)<T(s)},i.$g=function(s,u,o){return x.u(s)?this[u]:this.set(o,s)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(s,u){var o=this,y=!!x.u(u)||u,w=x.p(s),z=function(Z,F){var W=x.w(o.$u?Date.UTC(o.$y,F,Z):new Date(o.$y,F,Z),o);return y?W:W.endOf(C)},H=function(Z,F){return x.w(o.toDate()[Z].apply(o.toDate("s"),(y?[0,0,0,0]:[23,59,59,999]).slice(F)),o)},I=this.$W,U=this.$M,j=this.$D,q="set"+(this.$u?"UTC":"");switch(w){case L:return y?z(1,0):z(31,11);case P:return y?z(1,U):z(0,U+1);case Y:var G=this.$locale().weekStart||0,V=(I<G?I+7:I)-G;return z(y?j-V:j+(6-V),U);case C:case b:return H(q+"Hours",0);case _:return H(q+"Minutes",1);case m:return H(q+"Seconds",2);case l:return H(q+"Milliseconds",3);default:return this.clone()}},i.endOf=function(s){return this.startOf(s,!1)},i.$set=function(s,u){var o,y=x.p(s),w="set"+(this.$u?"UTC":""),z=(o={},o[C]=w+"Date",o[b]=w+"Date",o[P]=w+"Month",o[L]=w+"FullYear",o[_]=w+"Hours",o[m]=w+"Minutes",o[l]=w+"Seconds",o[D]=w+"Milliseconds",o)[y],H=y===C?this.$D+(u-this.$W):u;if(y===P||y===L){var I=this.clone().set(b,1);I.$d[z](H),I.init(),this.$d=I.set(b,Math.min(this.$D,I.daysInMonth())).$d}else z&&this.$d[z](H);return this.init(),this},i.set=function(s,u){return this.clone().$set(s,u)},i.get=function(s){return this[x.p(s)]()},i.add=function(s,u){var o,y=this;s=Number(s);var w=x.p(u),z=function(U){var j=T(y);return x.w(j.date(j.date()+Math.round(U*s)),y)};if(w===P)return this.set(P,this.$M+s);if(w===L)return this.set(L,this.$y+s);if(w===C)return z(1);if(w===Y)return z(7);var H=(o={},o[m]=a,o[_]=h,o[l]=n,o)[w]||1,I=this.$d.getTime()+s*H;return x.w(I,this)},i.subtract=function(s,u){return this.add(-1*s,u)},i.format=function(s){var u=this,o=this.$locale();if(!this.isValid())return o.invalidDate||c;var y=s||"YYYY-MM-DDTHH:mm:ssZ",w=x.z(this),z=this.$H,H=this.$m,I=this.$M,U=o.weekdays,j=o.months,q=o.meridiem,G=function(F,W,X,J){return F&&(F[W]||F(u,y))||X[W].slice(0,J)},V=function(F){return x.s(z%12||12,F,"0")},Z=q||function(F,W,X){var J=F<12?"AM":"PM";return X?J.toLowerCase():J};return y.replace(p,function(F,W){return W||function(X){switch(X){case"YY":return String(u.$y).slice(-2);case"YYYY":return x.s(u.$y,4,"0");case"M":return I+1;case"MM":return x.s(I+1,2,"0");case"MMM":return G(o.monthsShort,I,j,3);case"MMMM":return G(j,I);case"D":return u.$D;case"DD":return x.s(u.$D,2,"0");case"d":return String(u.$W);case"dd":return G(o.weekdaysMin,u.$W,U,2);case"ddd":return G(o.weekdaysShort,u.$W,U,3);case"dddd":return U[u.$W];case"H":return String(z);case"HH":return x.s(z,2,"0");case"h":return V(1);case"hh":return V(2);case"a":return Z(z,H,!0);case"A":return Z(z,H,!1);case"m":return String(H);case"mm":return x.s(H,2,"0");case"s":return String(u.$s);case"ss":return x.s(u.$s,2,"0");case"SSS":return x.s(u.$ms,3,"0");case"Z":return w}return null}(F)||w.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(s,u,o){var y,w=this,z=x.p(u),H=T(s),I=(H.utcOffset()-this.utcOffset())*a,U=this-H,j=function(){return x.m(w,H)};switch(z){case L:y=j()/12;break;case P:y=j();break;case M:y=j()/3;break;case Y:y=(U-I)/6048e5;break;case C:y=(U-I)/864e5;break;case _:y=U/h;break;case m:y=U/a;break;case l:y=U/n;break;default:y=U}return o?y:x.a(y)},i.daysInMonth=function(){return this.endOf(P).$D},i.$locale=function(){return f[this.$L]},i.locale=function(s,u){if(!s)return this.$L;var o=this.clone(),y=A(s,u,!0);return y&&(o.$L=y),o},i.clone=function(){return x.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},g}(),R=B.prototype;return T.prototype=R,[["$ms",D],["$s",l],["$m",m],["$H",_],["$W",C],["$M",P],["$y",L],["$D",b]].forEach(function(g){R[g[1]]=function(i){return this.$g(i,g[0],g[1])}}),T.extend=function(g,i){return g.$i||(g(i,B,T),g.$i=!0),T},T.locale=A,T.isDayjs=N,T.unix=function(g){return T(1e3*g)},T.en=f[O],T.Ls=f,T.p={},T})})(Mt);var xt=Mt.exports;const Q=ot(xt);var Dt={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(rt,function(){var n="minute",a=/[+-]\d\d(?::?\d\d)?/g,h=/([+-]|\d\d)/g;return function(D,l,m){var _=l.prototype;m.utc=function(c){var r={date:c,utc:!0,args:arguments};return new l(r)},_.utc=function(c){var r=m(this.toDate(),{locale:this.$L,utc:!0});return c?r.add(this.utcOffset(),n):r},_.local=function(){return m(this.toDate(),{locale:this.$L,utc:!1})};var C=_.parse;_.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),C.call(this,c)};var Y=_.init;_.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else Y.call(this)};var P=_.utcOffset;_.utcOffset=function(c,r){var p=this.$utils().u;if(p(c))return this.$u?0:p(this.$offset)?P.call(this):this.$offset;if(typeof c=="string"&&(c=function(O){O===void 0&&(O="");var f=O.match(a);if(!f)return null;var k=(""+f[0]).match(h)||["-",0,0],N=k[0],A=60*+k[1]+ +k[2];return A===0?0:N==="+"?A:-A}(c),c===null))return this;var v=Math.abs(c)<=16?60*c:c;if(v===0)return this.utc(r);var $=this.clone();if(r)return $.$offset=v,$.$u=!1,$;var E=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return($=this.local().add(v+E,n)).$offset=v,$.$x.$localOffset=E,$};var M=_.format;_.format=function(c){var r=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return M.call(this,r)},_.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},_.isUTC=function(){return!!this.$u},_.toISOString=function(){return this.toDate().toISOString()},_.toString=function(){return this.toDate().toUTCString()};var L=_.toDate;_.toDate=function(c){return c==="s"&&this.$offset?m(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():L.call(this)};var b=_.diff;_.diff=function(c,r,p){if(c&&this.$u===c.$u)return b.call(this,c,r,p);var v=this.local(),$=m(c).local();return b.call(v,$,r,p)}}})})(Dt);var zt=Dt.exports;const Ot=ot(zt);var Yt={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(rt,function(){var n={year:0,month:1,day:2,hour:3,minute:4,second:5},a={};return function(h,D,l){var m,_=function(M,L,b){b===void 0&&(b={});var c=new Date(M),r=function(p,v){v===void 0&&(v={});var $=v.timeZoneName||"short",E=p+"|"+$,O=a[E];return O||(O=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:p,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:$}),a[E]=O),O}(L,b);return r.formatToParts(c)},C=function(M,L){for(var b=_(M,L),c=[],r=0;r<b.length;r+=1){var p=b[r],v=p.type,$=p.value,E=n[v];E>=0&&(c[E]=parseInt($,10))}var O=c[3],f=O===24?0:O,k=c[0]+"-"+c[1]+"-"+c[2]+" "+f+":"+c[4]+":"+c[5]+":000",N=+M;return(l.utc(k).valueOf()-(N-=N%1e3))/6e4},Y=D.prototype;Y.tz=function(M,L){M===void 0&&(M=m);var b,c=this.utcOffset(),r=this.toDate(),p=r.toLocaleString("en-US",{timeZone:M}),v=Math.round((r-new Date(p))/1e3/60),$=15*-Math.round(r.getTimezoneOffset()/15)-v;if(!Number($))b=this.utcOffset(0,L);else if(b=l(p,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset($,!0),L){var E=b.utcOffset();b=b.add(c-E,"minute")}return b.$x.$timezone=M,b},Y.offsetName=function(M){var L=this.$x.$timezone||l.tz.guess(),b=_(this.valueOf(),L,{timeZoneName:M}).find(function(c){return c.type.toLowerCase()==="timezonename"});return b&&b.value};var P=Y.startOf;Y.startOf=function(M,L){if(!this.$x||!this.$x.$timezone)return P.call(this,M,L);var b=l(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return P.call(b,M,L).tz(this.$x.$timezone,!0)},l.tz=function(M,L,b){var c=b&&L,r=b||L||m,p=C(+l(),r);if(typeof M!="string")return l(M).tz(r);var v=function(f,k,N){var A=f-60*k*1e3,T=C(A,N);if(k===T)return[A,k];var x=C(A-=60*(T-k)*1e3,N);return T===x?[A,T]:[f-60*Math.min(T,x)*1e3,Math.max(T,x)]}(l.utc(M,c).valueOf(),p,r),$=v[0],E=v[1],O=l($).utcOffset(E);return O.$x.$timezone=r,O},l.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},l.tz.setDefault=function(M){m=M}}})})(Yt);var Nt=Yt.exports;const At=ot(Nt);var Lt={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(rt,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,h=/\d/,D=/\d\d/,l=/\d\d?/,m=/\d*[^-_:/,()\s\d]+/,_={},C=function(r){return(r=+r)+(r>68?1900:2e3)},Y=function(r){return function(p){this[r]=+p}},P=[/[+-]\d\d:?(\d\d)?|Z/,function(r){(this.zone||(this.zone={})).offset=function(p){if(!p||p==="Z")return 0;var v=p.match(/([+-]|\d\d)/g),$=60*v[1]+(+v[2]||0);return $===0?0:v[0]==="+"?-$:$}(r)}],M=function(r){var p=_[r];return p&&(p.indexOf?p:p.s.concat(p.f))},L=function(r,p){var v,$=_.meridiem;if($){for(var E=1;E<=24;E+=1)if(r.indexOf($(E,0,p))>-1){v=E>12;break}}else v=r===(p?"pm":"PM");return v},b={A:[m,function(r){this.afternoon=L(r,!1)}],a:[m,function(r){this.afternoon=L(r,!0)}],Q:[h,function(r){this.month=3*(r-1)+1}],S:[h,function(r){this.milliseconds=100*+r}],SS:[D,function(r){this.milliseconds=10*+r}],SSS:[/\d{3}/,function(r){this.milliseconds=+r}],s:[l,Y("seconds")],ss:[l,Y("seconds")],m:[l,Y("minutes")],mm:[l,Y("minutes")],H:[l,Y("hours")],h:[l,Y("hours")],HH:[l,Y("hours")],hh:[l,Y("hours")],D:[l,Y("day")],DD:[D,Y("day")],Do:[m,function(r){var p=_.ordinal,v=r.match(/\d+/);if(this.day=v[0],p)for(var $=1;$<=31;$+=1)p($).replace(/\[|\]/g,"")===r&&(this.day=$)}],w:[l,Y("week")],ww:[D,Y("week")],M:[l,Y("month")],MM:[D,Y("month")],MMM:[m,function(r){var p=M("months"),v=(M("monthsShort")||p.map(function($){return $.slice(0,3)})).indexOf(r)+1;if(v<1)throw new Error;this.month=v%12||v}],MMMM:[m,function(r){var p=M("months").indexOf(r)+1;if(p<1)throw new Error;this.month=p%12||p}],Y:[/[+-]?\d+/,Y("year")],YY:[D,function(r){this.year=C(r)}],YYYY:[/\d{4}/,Y("year")],Z:P,ZZ:P};function c(r){var p,v;p=r,v=_&&_.formats;for(var $=(r=p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(T,x,B){var R=B&&B.toUpperCase();return x||v[B]||n[B]||v[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(g,i,s){return i||s.slice(1)})})).match(a),E=$.length,O=0;O<E;O+=1){var f=$[O],k=b[f],N=k&&k[0],A=k&&k[1];$[O]=A?{regex:N,parser:A}:f.replace(/^\[|\]$/g,"")}return function(T){for(var x={},B=0,R=0;B<E;B+=1){var g=$[B];if(typeof g=="string")R+=g.length;else{var i=g.regex,s=g.parser,u=T.slice(R),o=i.exec(u)[0];s.call(x,o),T=T.replace(o,"")}}return function(y){var w=y.afternoon;if(w!==void 0){var z=y.hours;w?z<12&&(y.hours+=12):z===12&&(y.hours=0),delete y.afternoon}}(x),x}}return function(r,p,v){v.p.customParseFormat=!0,r&&r.parseTwoDigitYear&&(C=r.parseTwoDigitYear);var $=p.prototype,E=$.parse;$.parse=function(O){var f=O.date,k=O.utc,N=O.args;this.$u=k;var A=N[1];if(typeof A=="string"){var T=N[2]===!0,x=N[3]===!0,B=T||x,R=N[2];x&&(R=N[2]),_=this.$locale(),!T&&R&&(_=v.Ls[R]),this.$d=function(u,o,y,w){try{if(["x","X"].indexOf(o)>-1)return new Date((o==="X"?1e3:1)*u);var z=c(o)(u),H=z.year,I=z.month,U=z.day,j=z.hours,q=z.minutes,G=z.seconds,V=z.milliseconds,Z=z.zone,F=z.week,W=new Date,X=U||(H||I?1:W.getDate()),J=H||W.getFullYear(),st=0;H&&!I||(st=I>0?I-1:W.getMonth());var at,dt=j||0,ut=q||0,ft=G||0,pt=V||0;return Z?new Date(Date.UTC(J,st,X,dt,ut,ft,pt+60*Z.offset*1e3)):y?new Date(Date.UTC(J,st,X,dt,ut,ft,pt)):(at=new Date(J,st,X,dt,ut,ft,pt),F&&(at=w(at).week(F).toDate()),at)}catch{return new Date("")}}(f,A,k,v),this.init(),R&&R!==!0&&(this.$L=this.locale(R).$L),B&&f!=this.format(A)&&(this.$d=new Date("")),_={}}else if(A instanceof Array)for(var g=A.length,i=1;i<=g;i+=1){N[1]=A[i-1];var s=v.apply(this,N);if(s.isValid()){this.$d=s.$d,this.$L=s.$L,this.init();break}i===g&&(this.$d=new Date(""))}else E.call(this,O)}}})})(Lt);var Et=Lt.exports;const Pt=ot(Et);var Ct={exports:{}};(function(t,e){(function(n,a){t.exports=a(xt)})(rt,function(n){function a(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var h=a(n),D={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(l){return l+"일"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(l){return l<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return h.default.locale(D,null,!0),D})})(Ct);Q.extend(Ot);Q.extend(At);Q.extend(Pt);Q.locale("ko");const kt="Asia/Seoul",nt=t=>Q(t).tz(kt),ue=t=>nt(t).format("HH:mm"),fe=t=>nt(t).format("YYYY-MM-DD");function pe(){return Q().tz(kt)}function he(t){if(!t||t<0)return"0시간 0분";const e=Math.floor(t/60),n=Math.round(t%60);return`${e}시간 ${n}분`}function Ht(t,e){return Math.max(0,Q(e).diff(Q(t),"minute"))}const It=10320,Ut=.5,Ft=1.5,yt=8*60,Bt=15*60,Rt=40*60,vt=8*60,jt=4*60,St=60,bt={insurance:.094,freelancer:.033,none:0},_t={insurance:"4대보험 공제 (9.4%)",freelancer:"원천징수 (3.3%)",none:"공제 없음"},ge={hourly:"시급",daily:"일급",monthly:"월급"};function Wt(t){const e=nt(t),n=e.day(),a=n===0?-6:1-n;return e.add(a,"day").format("YYYY-MM-DD")}function Zt(t,e){let n=0,a=t.clone();for(;a.isBefore(e);){const h=a.clone().startOf("day");for(const D of[{start:h.clone().hour(22),end:h.clone().hour(24)},{start:h.clone(),end:h.clone().hour(6)}]){const l=a.isAfter(D.start)?a:D.start,m=e.isBefore(D.end)?e:D.end;m.isAfter(l)&&(n+=m.diff(l,"minute"))}if(a=h.add(1,"day"),a.isAfter(e))break}return Math.max(0,n)}function Kt(t,e){const n=Number.isFinite(e)?e:St;return n<=0||t<jt?0:Math.min(n,t)}function me(t,e){const n=(e==null?void 0:e.wageType)||"hourly",a=(e==null?void 0:e.wage)||It,h=(e==null?void 0:e.deductionType)||"insurance",D=Number.isFinite(e==null?void 0:e.breakLimitMinutes)?e.breakLimitMinutes:St,l=new Map;for(const f of t||[]){if(!(f!=null&&f.check_in_at)||!(f!=null&&f.check_out_at))continue;const k=f.workday,N=Ht(f.check_in_at,f.check_out_at);if(!(N>0))continue;const A=Zt(nt(f.check_in_at),nt(f.check_out_at)),T=l.get(k)||{rawMin:0,nightMin:0};T.rawMin+=N,T.nightMin+=A,l.set(k,T)}let m=0,_=0,C=0,Y=0,P=0;const M=new Map;for(const[f,k]of l){const N=Kt(k.rawMin,D),A=Math.max(0,k.rawMin-N),T=Math.min(k.nightMin,A);m+=k.rawMin,_+=N,C+=A,P+=T,A>yt&&(Y+=A-yt);const x=Wt(f);M.set(x,(M.get(x)||0)+A)}const L=l.size;let b=0;if(n!=="monthly"){const f=n==="daily"?a/8:a;for(const k of M.values()){if(k<Bt)continue;const N=Math.min(vt,k/Rt*vt);b+=Math.round(N/60*f)}}let c=0,r=0,p=0;if(n==="monthly")c=a;else if(n==="daily")c=L*a;else{const f=C-Y;c=Math.round(f/60*a),r=Math.round(P/60*a*Ut),p=Math.round(Y/60*a*Ft)}const v=c+r+p+b,$=bt[h]??bt.insurance,E=Math.round(v*$),O=v-E;return{wageType:n,wage:a,deductionType:h,breakLimit:D,daysWorked:L,totalRawMin:m,totalBreakMin:_,totalWorkMin:C,regularMin:Math.max(0,C-Y),otMin:Y,nightMin:P,basePay:c,nightPay:r,otPay:p,holidayPay:b,grossPay:v,deductions:E,netPay:O}}function $e(t){const e=[],n=a=>`${Math.floor(a/60)}시간 ${a%60}분`;return t.wageType==="monthly"?e.push({label:"월급 (고정)",value:t.basePay}):t.wageType==="daily"?e.push({label:`일급 × ${t.daysWorked}일`,value:t.basePay}):e.push({label:`기본급 (${n(t.regularMin)} × ${t.wage.toLocaleString()}원)`,value:t.basePay}),t.totalBreakMin>0&&e.push({label:`휴게시간 제외 (${n(t.totalBreakMin)})`,value:null,note:!0}),t.nightPay>0&&e.push({label:`야간수당 (22~06시 × 50%, ${n(t.nightMin)})`,value:t.nightPay,plus:!0}),t.otPay>0&&e.push({label:`연장수당 (1일 8시간 초과 × 150%, ${n(t.otMin)})`,value:t.otPay,plus:!0}),t.holidayPay>0&&e.push({label:"주휴수당 (주 15시간 이상)",value:t.holidayPay,plus:!0}),e.push({label:"지급 합계 (세전)",value:t.grossPay,subtotal:!0}),e.push({label:_t[t.deductionType]||_t.insurance,value:t.deductions,minus:!0}),e}const it={hourly:{label:"시급",unit:"원/시간",per:"시간당"},daily:{label:"일급",unit:"원/일",per:"1일당"},monthly:{label:"월급",unit:"원/월",per:"월"}},wt={regular:{label:"정규직 (기간 정함 없음)",title:"표준근로계약서",wageLock:null,dedLock:null},fixed:{label:"계약직 (기간제)",title:"기간제 근로계약서",wageLock:null,dedLock:null},parttime:{label:"단시간 근로자 (알바)",title:"단시간근로자 표준근로계약서",wageLock:null,dedLock:null},daily_worker:{label:"일용근로자",title:"일용근로자 표준근로계약서",wageLock:"daily",dedLock:null},freelance:{label:"3.3% 프리랜서 (도급계약)",title:"업무위탁(용역) 계약서",wageLock:null,dedLock:"freelancer"},construction:{label:"건설일용근로자 (안전서약 포함)",title:"건설일용근로자 표준근로계약서",wageLock:"daily",dedLock:null}};function d(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const tt=t=>(Number(t)||0).toLocaleString("ko-KR");function ye(t){if(!t)return"";const e=String(t).replace(/[^0-9]/g,"");return e.length<7?"******":`${e.slice(0,6)}-${e[6]}******`}function Gt(t){if(!t)return[];let e=t;if(typeof t=="string")try{e=JSON.parse(t)}catch{return[]}return Array.isArray(e)?e.map(n=>({name:String((n==null?void 0:n.name)||"").trim(),amount:Number(n==null?void 0:n.amount)||0})).filter(n=>n.name||n.amount):[]}function S(t,e,n){return`
  <div class="lc-art">
    <div class="lc-art-h"><span class="lc-no">${typeof t=="number"?`제${t}조`:t}</span> ${e}</div>
    <div class="lc-art-b">${n}</div>
  </div>`}function ht(t){it[t.wage_type]||it.hourly;const e=Gt(t.allowances),n=Number(t.bonus_amount)||0,a=t.wage_type==="monthly"?"월 기본급":t.wage_type==="daily"?"일급(1일)":"시급(시간당)",h=[];if(h.push(`<tr><td class="lc-wl">${a}</td><td class="lc-wv">${tt(t.wage_amount)} 원</td></tr>`),h.push(`<tr><td class="lc-wl">상여금</td><td class="lc-wv">${n>0?`있음 · ${tt(n)} 원`:"없음"}</td></tr>`),e.length){const D=e.map(l=>`${d(l.name)} ${tt(l.amount)}원`).join(" / ");h.push(`<tr><td class="lc-wl">기타급여(제수당)</td><td class="lc-wv">있음 · ${D}</td></tr>`)}else h.push('<tr><td class="lc-wl">기타급여(제수당)</td><td class="lc-wv">없음</td></tr>');if(t.wage_type==="monthly"){const D=(Number(t.wage_amount)||0)+n+e.reduce((l,m)=>l+m.amount,0);h.push(`<tr class="lc-wsum"><td class="lc-wl">월 지급 합계(세전)</td><td class="lc-wv"><strong>${tt(D)} 원</strong></td></tr>`)}return h.push(`<tr><td class="lc-wl">임금 지급일</td><td class="lc-wv">매월 ${d(t.pay_day)}일 (휴일인 경우 전일 지급)</td></tr>`),h.push(`<tr><td class="lc-wl">지급 방법</td><td class="lc-wv">${d(t.pay_method||"계좌이체")} (근로자 명의 계좌)</td></tr>`),`<table class="lc-wage">${h.join("")}</table>`}function gt(t){const e=n=>n?"☑":"☐";return`
    <div class="lc-ins">
      <span>${e(t.ins_employment)} 고용보험</span>
      <span>${e(t.ins_industrial)} 산재보험</span>
      <span>${e(t.ins_pension)} 국민연금</span>
      <span>${e(t.ins_health)} 건강보험</span>
    </div>`}function lt(t,e,n={}){const a=n.ownerTitle||"사업주 (사용자)",h=n.empTitle||"근로자",D=d(e.bizName||"-"),l=d(t.owner_name||e.ceoName||"-"),m=d(t.biz_address||e.bizAddress||""),_=d(t.biz_reg_no||e.bizRegNo||""),C=d(e.employeeName||t.employee_name||"-"),Y=d(t.employee_address||""),P=d(t.employee_birth||""),M=d(e.employeePhone||""),L=t.owner_signed_at?new Date(t.owner_signed_at).toLocaleDateString("ko-KR"):"미서명",b=t.employee_signed_at?new Date(t.employee_signed_at).toLocaleDateString("ko-KR"):"미서명",c=n.ownerSignButton&&t.status==="draft"&&!t.owner_signed_at?`<div style="margin-top:10px"><button class="btn small primary" id="btn-owner-sign" data-id="${d(t.id)}">사업주 서명 완료</button></div>`:"";return`
  <div class="lc-sign">
    <div class="lc-sign-box">
      <div class="lc-sign-cap">${a}</div>
      <table class="lc-sign-t">
        <tr><td>사업체명</td><td>${D}</td></tr>
        ${m?`<tr><td>주소</td><td>${m}</td></tr>`:""}
        ${_?`<tr><td>사업자번호</td><td>${_}</td></tr>`:""}
        <tr><td>대표자</td><td><strong>${l}</strong> (서명/인)</td></tr>
      </table>
      <div class="lc-sign-date">서명일: ${L}</div>
      ${c}
    </div>
    <div class="lc-sign-box">
      <div class="lc-sign-cap">${h}</div>
      <table class="lc-sign-t">
        ${Y?`<tr><td>주소</td><td>${Y}</td></tr>`:""}
        ${P?`<tr><td>생년월일</td><td>${P}</td></tr>`:""}
        ${M?`<tr><td>연락처</td><td>${M}</td></tr>`:""}
        <tr><td>성명</td><td><strong>${C}</strong> (서명/인)</td></tr>
      </table>
      <div class="lc-sign-date">서명일: ${b}</div>
    </div>
  </div>
  <p class="lc-foot">
    작성일: ${d((t.created_at||"").slice(0,10))} ·
    본 계약서는 「전자문서 및 전자거래 기본법」에 따라 서면과 동일한 법적 효력을 가집니다. ·
    SCAN&amp;GO 전자계약
  </p>`}function mt(t,e,n="근로자"){const a=d(e.bizName||"사업장"),h=d(e.employeeName||t.employee_name||"근로자");return`<p class="lc-intro"><strong>${a}</strong>(이하 "사업주"라 한다)과(와)
    <strong>${h}</strong>(이하 "${n}"라 한다)은(는) 다음과 같이 ${n==="수급인"?"계약":"근로계약"}을 체결한다.</p>`}function ve(t,e={},n={}){const a=t.contract_type||"regular";let h;return a==="freelance"?h=Qt(t,e,n):a==="construction"?h=Jt(t,e,n):a==="daily_worker"?h=qt(t,e,n):h=Xt(t,e,n),`<div id="printable-contract" class="lc-doc">${Vt}${h}</div>`}function Xt(t,e,n){const a=wt[t.contract_type]||wt.regular,h=t.end_date?`${d(t.start_date)} ~ ${d(t.end_date)}`:`${d(t.start_date)} (기간의 정함이 없음)`,D=t.contract_type==="parttime",l=Number(t.probation_months)>0?S("수습","수습기간",`근로계약 시작일부터 <strong>${d(t.probation_months)}개월</strong>을 수습기간으로 한다.
        ${Number(t.probation_rate)<100?`수습기간 중 임금은 위 임금의 <strong>${d(t.probation_rate)}%</strong>를 지급한다. (단, 1년 이상 계약·단순노무직 등 최저임금 100% 적용 대상 여부를 확인할 것)`:"수습기간 중에도 위 임금의 100%를 지급한다."}`):"";return`
    <h2 class="lc-title">${d(a.title)}</h2>
    <p class="lc-sub">근로기준법 제17조 · 기간제 및 단시간근로자 보호 등에 관한 법률</p>
    ${mt(t,e)}

    ${S(1,"근로계약기간",h)}
    ${S(2,"근무 장소",d(t.work_location||"-"))}
    ${S(3,"업무의 내용",d(t.job_description||"-"))}
    ${S(4,"소정근로시간",`${d(t.daily_start)} ~ ${d(t.daily_end)}
        (휴게시간 ${d(t.break_minutes)}분 포함, 1주 소정근로시간 ${d(t.weekly_hours)}시간)
        ${D?'<br><span class="lc-note">※ 단시간근로자는 근로일·근로일별 근로시간을 아래 「근무일·근무시간」 및 특약사항에 따른다.</span>':""}`)}
    ${S(5,"근무일 / 휴일",`매주 <strong>${d(t.work_days)}</strong> 근무,
        주휴일은 매주 <strong>${d(t.weekly_holiday||"일요일")}</strong>(유급)로 한다.
        ${t.paid_public_holidays?"관공서의 공휴일 및 대체공휴일은 유급휴일로 한다.":""}`)}
    ${S(6,"임금",ht(t))}
    ${S(7,"연차유급휴가",`연차유급휴가는 근로기준법 제60조에서 정하는 바에 따라 부여한다.
        ${Number(t.annual_leave_days)>0?`(연 ${d(t.annual_leave_days)}일 기준)`:""}`)}
    ${S(8,"사회보험 적용여부",gt(t))}
    ${l}
    ${S(9,"근로계약서 교부","사업주는 근로계약을 체결함과 동시에 본 계약서를 사본하여 근로자에게 교부한다. (근로기준법 제17조 제2항)")}
    ${S(10,"성실 이행 의무","사업주와 근로자는 각자가 근로계약, 취업규칙, 단체협약을 지키고 성실하게 이행하여야 한다.")}
    ${S(11,"기타","이 계약에 정함이 없는 사항은 근로기준법령 및 관계 법령에 의한다.")}
    ${ct(t)}
    ${lt(t,e,n)}
  `}function qt(t,e,n){const a=t.end_date?`${d(t.start_date)} ~ ${d(t.end_date)}`:`${d(t.start_date)} (1일 단위)`;return`
    <h2 class="lc-title">일용근로자 표준근로계약서</h2>
    <p class="lc-sub">근로기준법 제17조 · 일용근로 기준</p>
    ${mt(t,e)}

    ${S(1,"근로계약기간",`${a} <span class="lc-note">※ 일용근로자는 1일 단위로 근로계약이 체결·종료된다.</span>`)}
    ${S(2,"근무 장소",d(t.work_location||"-"))}
    ${S(3,"업무의 내용",d(t.job_description||"-"))}
    ${S(4,"근로시간",`${d(t.daily_start)} ~ ${d(t.daily_end)} (휴게시간 ${d(t.break_minutes)}분 포함)`)}
    ${S(5,"임금",ht(t))}
    ${S(6,"주휴수당","1주간 소정근로일을 개근하고 1주 소정근로시간이 15시간 이상인 경우, 주휴수당을 별도로 지급한다.")}
    ${S(7,"사회보험 적용여부",`${gt(t)}<span class="lc-note">※ 일용근로자는 산재·고용보험이 우선 적용되며, 1개월 8일 이상 또는 60시간 이상 근로 시 국민연금·건강보험이 적용될 수 있다.</span>`)}
    ${S(8,"근로계약서 교부","사업주는 본 계약서를 사본하여 근로자에게 교부한다.")}
    ${S(9,"기타","이 계약에 정함이 없는 사항은 근로기준법령에 의한다.")}
    ${ct(t)}
    ${lt(t,e,n)}
  `}function Jt(t,e,n){const a=t.end_date?`${d(t.start_date)} ~ ${d(t.end_date)}`:`${d(t.start_date)}부터`,h=t.safety_agreed?`
    ${S("안전","안전보건 서약 (산업안전보건법)",`
      근로자는 다음 사항을 준수할 것을 서약한다.<br>
      ① 사업주가 시행하는 안전보건교육 및 조치를 준수한다.<br>
      ② 작업 전 안전점검(TBM)에 반드시 참여한다.<br>
      ③ 지급된 개인보호구(안전모·안전화·안전대 등)를 착용한다.<br>
      ④ 위험 상황 발견 시 즉시 작업을 중지하고 관리감독자에게 신고한다.<br>
      ⑤ 음주·약물 복용 상태로 작업장에 출입하지 않는다.
      <div class="lc-agree">☑ 근로자는 위 안전보건 서약에 동의함</div>`)}`:"";return`
    <h2 class="lc-title">건설일용근로자 표준근로계약서</h2>
    <p class="lc-sub">건설근로자의 고용개선 등에 관한 법률 · 근로기준법 제17조</p>
    ${mt(t,e)}

    ${S(1,"공사명 / 현장",`${d(t.project_name||"-")} (현장 소재지: ${d(t.work_location||"-")})`)}
    ${S(2,"근로계약기간",a)}
    ${S(3,"직종 / 업무",d(t.job_description||"-"))}
    ${S(4,"근로시간",`${d(t.daily_start)} ~ ${d(t.daily_end)} (휴게시간 ${d(t.break_minutes)}분 포함)`)}
    ${S(5,"임금",ht(t))}
    ${S(6,"퇴직공제","「건설근로자의 고용개선 등에 관한 법률」에 따라 건설근로자 퇴직공제부금을 신고·납부한다.")}
    ${S(7,"사회보험 적용여부",gt(t))}
    ${h}
    ${S(8,"근로계약서 교부","사업주는 본 계약서를 사본하여 근로자에게 교부한다.")}
    ${S(9,"기타","이 계약에 정함이 없는 사항은 근로기준법령 및 관계 법령에 의한다.")}
    ${ct(t)}
    ${lt(t,e,n)}
  `}function Qt(t,e,n){const a=t.end_date?`${d(t.start_date)} ~ ${d(t.end_date)}`:`${d(t.start_date)}부터`,h=it[t.wage_type]||it.monthly,D=tt(t.wage_amount),l=tt(Math.round((Number(t.wage_amount)||0)*.967));return`
    <h2 class="lc-title">업무위탁(용역) 계약서</h2>
    <p class="lc-sub">민법상 도급·위임 계약 · 소득세법 제127조 (사업소득 3.3% 원천징수)</p>
    <p class="lc-intro"><strong>${d(e.bizName||"사업장")}</strong>(이하 "갑")과(와)
      <strong>${d(e.employeeName||t.employee_name||"-")}</strong>(이하 "을")은(는) 다음과 같이 업무위탁계약을 체결한다.</p>

    ${S(1,"계약의 성격",'본 계약은 근로기준법상 근로계약이 아닌 민법상 도급·위임 계약이며, "을"은 독립된 사업자로서 자신의 책임과 재량으로 업무를 수행한다.')}
    ${S(2,"위탁 업무",d(t.job_description||"-"))}
    ${S(3,"계약 기간",a)}
    ${S(4,"업무 수행 장소",d(t.work_location||"-"))}
    ${S(5,"용역 대가",`
      <table class="lc-wage">
        <tr><td class="lc-wl">대가</td><td class="lc-wv">${D} ${d(h.unit)}</td></tr>
        <tr><td class="lc-wl">지급일</td><td class="lc-wv">매월 ${d(t.pay_day)}일</td></tr>
        <tr><td class="lc-wl">지급 방법</td><td class="lc-wv">${d(t.pay_method||"계좌이체")}</td></tr>
        <tr><td class="lc-wl">원천징수</td><td class="lc-wv">사업소득세 3% + 지방소득세 0.3% = 3.3% 원천징수<br>실지급액 약 <strong>${l}원</strong></td></tr>
      </table>`)}
    ${S(6,"4대보험",'"을"은 근로자가 아니므로 4대보험에 가입하지 아니한다. 다만 산재보험 특수형태근로종사자 적용 대상인 경우 관계 법령에 따른다.')}
    ${S(7,"비밀유지",'"을"은 업무 수행 중 알게 된 "갑"의 영업비밀·개인정보를 제3자에게 누설하거나 계약 목적 외로 사용하지 아니한다.')}
    ${S(8,"계약 해지","일방이 계약을 위반하고 상당한 기간을 정하여 시정을 최고하였음에도 시정하지 않을 경우, 상대방은 계약을 해지할 수 있다.")}
    ${S(9,"분쟁 해결","본 계약과 관련한 분쟁은 상호 협의로 해결하며, 협의가 이루어지지 않을 경우 민사소송법상 관할 법원에 따른다.")}
    ${ct(t,"제10조 특약 사항")}
    ${lt(t,e,{...n,ownerTitle:"갑 (위탁자)",empTitle:"을 (수급인 / 사업자)"})}
  `}function ct(t,e="특약 사항"){return t.special_terms?`
  <div class="lc-special">
    <div class="lc-special-h">${d(e)}</div>
    <div class="lc-special-b">${d(t.special_terms).replace(/\n/g,"<br>")}</div>
  </div>`:""}const Vt=`<style>
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
</style>`,be={privacy_consent:{label:"개인정보 수집·이용 동의서",short:"개인정보 동의서",icon:"🔒"},security_pledge:{label:"보안·비밀유지 서약서",short:"보안 서약서",icon:"📝"}};function _e(t,e={},n={}){const a=t.doc_type;let h;return a==="security_pledge"?h=ee(t,e):h=te(t,e),`<div id="printable-doc" class="ed-doc">${re}${h}${ne(t,e,n)}</div>`}function te(t,e){return`
    <h2 class="ed-title">개인정보 수집·이용 동의서</h2>
    <p class="ed-sub">개인정보 보호법 제15조·제24조</p>
    <p class="ed-intro"><strong>${d(e.bizName||"사업장")}</strong>(이하 "회사")는 근로계약의 체결·이행 및 법령상 의무 이행을 위하여
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
  `}function ee(t,e){return`
    <h2 class="ed-title">보안 및 비밀유지 서약서</h2>
    <p class="ed-sub">부정경쟁방지 및 영업비밀보호에 관한 법률</p>
    <p class="ed-intro">본인은 <strong>${d(e.bizName||"회사")}</strong>(이하 "회사")에 근무함에 있어,
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
  `}function K(t,e){return`<div class="ed-sec"><div class="ed-sec-h">${t}</div><div class="ed-sec-b">${e}</div></div>`}function ne(t,e,n={}){const a=d(e.employeeName||t.employee_name||"-"),h=d(e.bizName||"-"),D=d(t.owner_name||e.ceoName||"-"),l=t.employee_signed_at?new Date(t.employee_signed_at).toLocaleDateString("ko-KR")+" 서명 완료":"미서명";return`
  <div class="ed-sign">
    <div class="ed-sign-row"><span>작성일</span><strong>${t.employee_signed_at?new Date(t.employee_signed_at).toLocaleDateString("ko-KR"):new Date().toLocaleDateString("ko-KR")}</strong></div>
    <div class="ed-sign-row"><span>제출처</span><strong>${h}${D!=="-"?` (대표 ${D})`:""}</strong></div>
    <div class="ed-sign-row ed-sign-name"><span>${t.doc_type==="security_pledge"?"서약자":"동의자"}</span>
      <strong>${a} (서명/인)</strong></div>
    <div class="ed-sign-state">${l}</div>
  </div>
  <p class="ed-foot">본 문서는 「전자문서 및 전자거래 기본법」에 따라 서면과 동일한 효력을 가집니다 · SCAN&amp;GO 전자서명</p>`}const re=`<style>
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
</style>`;export{wt as C,St as D,It as M,ge as W,_t as a,it as b,me as c,Ht as d,d as e,fe as f,be as g,ye as h,_e as i,Q as j,nt as k,ae as l,he as m,pe as n,oe as o,Gt as p,de as q,ve as r,ie as s,ue as t,ce as u,le as v,$e as w};
