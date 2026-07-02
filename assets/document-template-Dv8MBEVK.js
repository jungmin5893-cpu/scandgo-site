async function It(t={}){}function Ft({userId:t,role:e,tenantId:a}={}){}function Zt(){let t=document.getElementById("offline-bar");t||(t=document.createElement("div"),t.id="offline-bar",t.style.cssText=["display:none;position:fixed;top:0;left:0;right:0;z-index:99999","background:#f79009;color:#fff;text-align:center","padding:8px 16px;font-size:13px;font-weight:700","box-shadow:0 2px 8px rgba(0,0,0,.2)"].join(";"),t.textContent="인터넷 연결이 끊겼습니다. 네트워크를 확인해주세요.",document.body.prepend(t));const e=()=>{t.style.display=navigator.onLine?"none":"block",navigator.onLine&&t._wasOffline&&(t.style.background="#00c9a7",t.textContent="연결이 복구됐습니다.",setTimeout(()=>{t.style.display="none",t.style.background="#f79009",t.textContent="인터넷 연결이 끊겼습니다. 네트워크를 확인해주세요."},2e3)),t._wasOffline=!navigator.onLine};window.addEventListener("online",e),window.addEventListener("offline",e),e()}function Rt(t,e,a,u){const k=(a-t)*Math.PI/180,d=(u-e)*Math.PI/180,Y=Math.sin(k/2)**2+Math.cos(t*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(d/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(Y),Math.sqrt(1-Y))}function Bt(t=6e3){return new Promise((e,a)=>{if(!navigator.geolocation){a(new Error("GPS_NOT_SUPPORTED"));return}navigator.geolocation.getCurrentPosition(u=>e({lat:u.coords.latitude,lng:u.coords.longitude,accuracy:u.coords.accuracy}),u=>a(u),{timeout:t,enableHighAccuracy:!0,maximumAge:3e4})})}var et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function it(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mt={exports:{}};(function(t,e){(function(a,u){t.exports=u()})(et,function(){var a=1e3,u=6e4,$=36e5,k="millisecond",d="second",Y="minute",_="hour",j="day",S="week",A="month",D="quarter",z="year",x="date",l="Invalid Date",i=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(f){var r=["th","st","nd","rd"],n=f%100;return"["+f+(r[(n-20)%10]||r[n]||r[0])+"]"}},m=function(f,r,n){var c=String(f);return!c||c.length>=r?f:""+Array(r+1-c.length).join(n)+f},T={s:m,z:function(f){var r=-f.utcOffset(),n=Math.abs(r),c=Math.floor(n/60),s=n%60;return(r<=0?"+":"-")+m(c,2,"0")+":"+m(s,2,"0")},m:function f(r,n){if(r.date()<n.date())return-f(n,r);var c=12*(n.year()-r.year())+(n.month()-r.month()),s=r.clone().add(c,A),p=n-s<0,g=r.clone().add(c+(p?-1:1),A);return+(-(c+(n-s)/(p?s-g:g-s))||0)},a:function(f){return f<0?Math.ceil(f)||0:Math.floor(f)},p:function(f){return{M:A,y:z,w:S,d:j,D:x,h:_,m:Y,s:d,ms:k,Q:D}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(f){return f===void 0}},L="en",H={};H[L]=v;var P="$isDayjsObject",U=function(f){return f instanceof F||!(!f||!f[P])},N=function f(r,n,c){var s;if(!r)return L;if(typeof r=="string"){var p=r.toLowerCase();H[p]&&(s=p),n&&(H[p]=n,s=p);var g=r.split("-");if(!s&&g.length>1)return f(g[0])}else{var w=r.name;H[w]=r,s=w}return!c&&s&&(L=s),s||!c&&L},M=function(f,r){if(U(f))return f.clone();var n=typeof r=="object"?r:{};return n.date=f,n.args=arguments,new F(n)},b=T;b.l=N,b.i=U,b.w=function(f,r){return M(f,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var F=function(){function f(n){this.$L=N(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[P]=!0}var r=f.prototype;return r.parse=function(n){this.$d=function(c){var s=c.date,p=c.utc;if(s===null)return new Date(NaN);if(b.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var g=s.match(i);if(g){var w=g[2]-1||0,O=(g[7]||"0").substring(0,3);return p?new Date(Date.UTC(g[1],w,g[3]||1,g[4]||0,g[5]||0,g[6]||0,O)):new Date(g[1],w,g[3]||1,g[4]||0,g[5]||0,g[6]||0,O)}}return new Date(s)}(n),this.init()},r.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},r.$utils=function(){return b},r.isValid=function(){return this.$d.toString()!==l},r.isSame=function(n,c){var s=M(n);return this.startOf(c)<=s&&s<=this.endOf(c)},r.isAfter=function(n,c){return M(n)<this.startOf(c)},r.isBefore=function(n,c){return this.endOf(c)<M(n)},r.$g=function(n,c,s){return b.u(n)?this[c]:this.set(s,n)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(n,c){var s=this,p=!!b.u(c)||c,g=b.p(n),w=function(G,I){var B=b.w(s.$u?Date.UTC(s.$y,I,G):new Date(s.$y,I,G),s);return p?B:B.endOf(j)},O=function(G,I){return b.w(s.toDate()[G].apply(s.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(I)),s)},C=this.$W,E=this.$M,R=this.$D,J="set"+(this.$u?"UTC":"");switch(g){case z:return p?w(1,0):w(31,11);case A:return p?w(1,E):w(0,E+1);case S:var K=this.$locale().weekStart||0,X=(C<K?C+7:C)-K;return w(p?R-X:R+(6-X),E);case j:case x:return O(J+"Hours",0);case _:return O(J+"Minutes",1);case Y:return O(J+"Seconds",2);case d:return O(J+"Milliseconds",3);default:return this.clone()}},r.endOf=function(n){return this.startOf(n,!1)},r.$set=function(n,c){var s,p=b.p(n),g="set"+(this.$u?"UTC":""),w=(s={},s[j]=g+"Date",s[x]=g+"Date",s[A]=g+"Month",s[z]=g+"FullYear",s[_]=g+"Hours",s[Y]=g+"Minutes",s[d]=g+"Seconds",s[k]=g+"Milliseconds",s)[p],O=p===j?this.$D+(c-this.$W):c;if(p===A||p===z){var C=this.clone().set(x,1);C.$d[w](O),C.init(),this.$d=C.set(x,Math.min(this.$D,C.daysInMonth())).$d}else w&&this.$d[w](O);return this.init(),this},r.set=function(n,c){return this.clone().$set(n,c)},r.get=function(n){return this[b.p(n)]()},r.add=function(n,c){var s,p=this;n=Number(n);var g=b.p(c),w=function(E){var R=M(p);return b.w(R.date(R.date()+Math.round(E*n)),p)};if(g===A)return this.set(A,this.$M+n);if(g===z)return this.set(z,this.$y+n);if(g===j)return w(1);if(g===S)return w(7);var O=(s={},s[Y]=u,s[_]=$,s[d]=a,s)[g]||1,C=this.$d.getTime()+n*O;return b.w(C,this)},r.subtract=function(n,c){return this.add(-1*n,c)},r.format=function(n){var c=this,s=this.$locale();if(!this.isValid())return s.invalidDate||l;var p=n||"YYYY-MM-DDTHH:mm:ssZ",g=b.z(this),w=this.$H,O=this.$m,C=this.$M,E=s.weekdays,R=s.months,J=s.meridiem,K=function(I,B,q,Q){return I&&(I[B]||I(c,p))||q[B].slice(0,Q)},X=function(I){return b.s(w%12||12,I,"0")},G=J||function(I,B,q){var Q=I<12?"AM":"PM";return q?Q.toLowerCase():Q};return p.replace(h,function(I,B){return B||function(q){switch(q){case"YY":return String(c.$y).slice(-2);case"YYYY":return b.s(c.$y,4,"0");case"M":return C+1;case"MM":return b.s(C+1,2,"0");case"MMM":return K(s.monthsShort,C,R,3);case"MMMM":return K(R,C);case"D":return c.$D;case"DD":return b.s(c.$D,2,"0");case"d":return String(c.$W);case"dd":return K(s.weekdaysMin,c.$W,E,2);case"ddd":return K(s.weekdaysShort,c.$W,E,3);case"dddd":return E[c.$W];case"H":return String(w);case"HH":return b.s(w,2,"0");case"h":return X(1);case"hh":return X(2);case"a":return G(w,O,!0);case"A":return G(w,O,!1);case"m":return String(O);case"mm":return b.s(O,2,"0");case"s":return String(c.$s);case"ss":return b.s(c.$s,2,"0");case"SSS":return b.s(c.$ms,3,"0");case"Z":return g}return null}(I)||g.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(n,c,s){var p,g=this,w=b.p(c),O=M(n),C=(O.utcOffset()-this.utcOffset())*u,E=this-O,R=function(){return b.m(g,O)};switch(w){case z:p=R()/12;break;case A:p=R();break;case D:p=R()/3;break;case S:p=(E-C)/6048e5;break;case j:p=(E-C)/864e5;break;case _:p=E/$;break;case Y:p=E/u;break;case d:p=E/a;break;default:p=E}return s?p:b.a(p)},r.daysInMonth=function(){return this.endOf(A).$D},r.$locale=function(){return H[this.$L]},r.locale=function(n,c){if(!n)return this.$L;var s=this.clone(),p=N(n,c,!0);return p&&(s.$L=p),s},r.clone=function(){return b.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},f}(),Z=F.prototype;return M.prototype=Z,[["$ms",k],["$s",d],["$m",Y],["$H",_],["$W",j],["$M",A],["$y",z],["$D",x]].forEach(function(f){Z[f[1]]=function(r){return this.$g(r,f[0],f[1])}}),M.extend=function(f,r){return f.$i||(f(r,F,M),f.$i=!0),M},M.locale=N,M.isDayjs=U,M.unix=function(f){return M(1e3*f)},M.en=H[L],M.Ls=H,M.p={},M})})(mt);var $t=mt.exports;const V=it($t);var vt={exports:{}};(function(t,e){(function(a,u){t.exports=u()})(et,function(){var a="minute",u=/[+-]\d\d(?::?\d\d)?/g,$=/([+-]|\d\d)/g;return function(k,d,Y){var _=d.prototype;Y.utc=function(l){var i={date:l,utc:!0,args:arguments};return new d(i)},_.utc=function(l){var i=Y(this.toDate(),{locale:this.$L,utc:!0});return l?i.add(this.utcOffset(),a):i},_.local=function(){return Y(this.toDate(),{locale:this.$L,utc:!1})};var j=_.parse;_.parse=function(l){l.utc&&(this.$u=!0),this.$utils().u(l.$offset)||(this.$offset=l.$offset),j.call(this,l)};var S=_.init;_.init=function(){if(this.$u){var l=this.$d;this.$y=l.getUTCFullYear(),this.$M=l.getUTCMonth(),this.$D=l.getUTCDate(),this.$W=l.getUTCDay(),this.$H=l.getUTCHours(),this.$m=l.getUTCMinutes(),this.$s=l.getUTCSeconds(),this.$ms=l.getUTCMilliseconds()}else S.call(this)};var A=_.utcOffset;_.utcOffset=function(l,i){var h=this.$utils().u;if(h(l))return this.$u?0:h(this.$offset)?A.call(this):this.$offset;if(typeof l=="string"&&(l=function(L){L===void 0&&(L="");var H=L.match(u);if(!H)return null;var P=(""+H[0]).match($)||["-",0,0],U=P[0],N=60*+P[1]+ +P[2];return N===0?0:U==="+"?N:-N}(l),l===null))return this;var v=Math.abs(l)<=16?60*l:l;if(v===0)return this.utc(i);var m=this.clone();if(i)return m.$offset=v,m.$u=!1,m;var T=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(m=this.local().add(v+T,a)).$offset=v,m.$x.$localOffset=T,m};var D=_.format;_.format=function(l){var i=l||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return D.call(this,i)},_.valueOf=function(){var l=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*l},_.isUTC=function(){return!!this.$u},_.toISOString=function(){return this.toDate().toISOString()},_.toString=function(){return this.toDate().toUTCString()};var z=_.toDate;_.toDate=function(l){return l==="s"&&this.$offset?Y(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():z.call(this)};var x=_.diff;_.diff=function(l,i,h){if(l&&this.$u===l.$u)return x.call(this,l,i,h);var v=this.local(),m=Y(l).local();return x.call(v,m,i,h)}}})})(vt);var xt=vt.exports;const Mt=it(xt);var bt={exports:{}};(function(t,e){(function(a,u){t.exports=u()})(et,function(){var a={year:0,month:1,day:2,hour:3,minute:4,second:5},u={};return function($,k,d){var Y,_=function(D,z,x){x===void 0&&(x={});var l=new Date(D),i=function(h,v){v===void 0&&(v={});var m=v.timeZoneName||"short",T=h+"|"+m,L=u[T];return L||(L=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:h,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:m}),u[T]=L),L}(z,x);return i.formatToParts(l)},j=function(D,z){for(var x=_(D,z),l=[],i=0;i<x.length;i+=1){var h=x[i],v=h.type,m=h.value,T=a[v];T>=0&&(l[T]=parseInt(m,10))}var L=l[3],H=L===24?0:L,P=l[0]+"-"+l[1]+"-"+l[2]+" "+H+":"+l[4]+":"+l[5]+":000",U=+D;return(d.utc(P).valueOf()-(U-=U%1e3))/6e4},S=k.prototype;S.tz=function(D,z){D===void 0&&(D=Y);var x,l=this.utcOffset(),i=this.toDate(),h=i.toLocaleString("en-US",{timeZone:D}),v=Math.round((i-new Date(h))/1e3/60),m=15*-Math.round(i.getTimezoneOffset()/15)-v;if(!Number(m))x=this.utcOffset(0,z);else if(x=d(h,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(m,!0),z){var T=x.utcOffset();x=x.add(l-T,"minute")}return x.$x.$timezone=D,x},S.offsetName=function(D){var z=this.$x.$timezone||d.tz.guess(),x=_(this.valueOf(),z,{timeZoneName:D}).find(function(l){return l.type.toLowerCase()==="timezonename"});return x&&x.value};var A=S.startOf;S.startOf=function(D,z){if(!this.$x||!this.$x.$timezone)return A.call(this,D,z);var x=d(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return A.call(x,D,z).tz(this.$x.$timezone,!0)},d.tz=function(D,z,x){var l=x&&z,i=x||z||Y,h=j(+d(),i);if(typeof D!="string")return d(D).tz(i);var v=function(H,P,U){var N=H-60*P*1e3,M=j(N,U);if(P===M)return[N,P];var b=j(N-=60*(M-P)*1e3,U);return M===b?[N,M]:[H-60*Math.min(M,b)*1e3,Math.max(M,b)]}(d.utc(D,l).valueOf(),h,i),m=v[0],T=v[1],L=d(m).utcOffset(T);return L.$x.$timezone=i,L},d.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},d.tz.setDefault=function(D){Y=D}}})})(bt);var Dt=bt.exports;const Yt=it(Dt);var _t={exports:{}};(function(t,e){(function(a,u){t.exports=u()})(et,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},u=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,$=/\d/,k=/\d\d/,d=/\d\d?/,Y=/\d*[^-_:/,()\s\d]+/,_={},j=function(i){return(i=+i)+(i>68?1900:2e3)},S=function(i){return function(h){this[i]=+h}},A=[/[+-]\d\d:?(\d\d)?|Z/,function(i){(this.zone||(this.zone={})).offset=function(h){if(!h||h==="Z")return 0;var v=h.match(/([+-]|\d\d)/g),m=60*v[1]+(+v[2]||0);return m===0?0:v[0]==="+"?-m:m}(i)}],D=function(i){var h=_[i];return h&&(h.indexOf?h:h.s.concat(h.f))},z=function(i,h){var v,m=_.meridiem;if(m){for(var T=1;T<=24;T+=1)if(i.indexOf(m(T,0,h))>-1){v=T>12;break}}else v=i===(h?"pm":"PM");return v},x={A:[Y,function(i){this.afternoon=z(i,!1)}],a:[Y,function(i){this.afternoon=z(i,!0)}],Q:[$,function(i){this.month=3*(i-1)+1}],S:[$,function(i){this.milliseconds=100*+i}],SS:[k,function(i){this.milliseconds=10*+i}],SSS:[/\d{3}/,function(i){this.milliseconds=+i}],s:[d,S("seconds")],ss:[d,S("seconds")],m:[d,S("minutes")],mm:[d,S("minutes")],H:[d,S("hours")],h:[d,S("hours")],HH:[d,S("hours")],hh:[d,S("hours")],D:[d,S("day")],DD:[k,S("day")],Do:[Y,function(i){var h=_.ordinal,v=i.match(/\d+/);if(this.day=v[0],h)for(var m=1;m<=31;m+=1)h(m).replace(/\[|\]/g,"")===i&&(this.day=m)}],w:[d,S("week")],ww:[k,S("week")],M:[d,S("month")],MM:[k,S("month")],MMM:[Y,function(i){var h=D("months"),v=(D("monthsShort")||h.map(function(m){return m.slice(0,3)})).indexOf(i)+1;if(v<1)throw new Error;this.month=v%12||v}],MMMM:[Y,function(i){var h=D("months").indexOf(i)+1;if(h<1)throw new Error;this.month=h%12||h}],Y:[/[+-]?\d+/,S("year")],YY:[k,function(i){this.year=j(i)}],YYYY:[/\d{4}/,S("year")],Z:A,ZZ:A};function l(i){var h,v;h=i,v=_&&_.formats;for(var m=(i=h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(M,b,F){var Z=F&&F.toUpperCase();return b||v[F]||a[F]||v[Z].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(f,r,n){return r||n.slice(1)})})).match(u),T=m.length,L=0;L<T;L+=1){var H=m[L],P=x[H],U=P&&P[0],N=P&&P[1];m[L]=N?{regex:U,parser:N}:H.replace(/^\[|\]$/g,"")}return function(M){for(var b={},F=0,Z=0;F<T;F+=1){var f=m[F];if(typeof f=="string")Z+=f.length;else{var r=f.regex,n=f.parser,c=M.slice(Z),s=r.exec(c)[0];n.call(b,s),M=M.replace(s,"")}}return function(p){var g=p.afternoon;if(g!==void 0){var w=p.hours;g?w<12&&(p.hours+=12):w===12&&(p.hours=0),delete p.afternoon}}(b),b}}return function(i,h,v){v.p.customParseFormat=!0,i&&i.parseTwoDigitYear&&(j=i.parseTwoDigitYear);var m=h.prototype,T=m.parse;m.parse=function(L){var H=L.date,P=L.utc,U=L.args;this.$u=P;var N=U[1];if(typeof N=="string"){var M=U[2]===!0,b=U[3]===!0,F=M||b,Z=U[2];b&&(Z=U[2]),_=this.$locale(),!M&&Z&&(_=v.Ls[Z]),this.$d=function(c,s,p,g){try{if(["x","X"].indexOf(s)>-1)return new Date((s==="X"?1e3:1)*c);var w=l(s)(c),O=w.year,C=w.month,E=w.day,R=w.hours,J=w.minutes,K=w.seconds,X=w.milliseconds,G=w.zone,I=w.week,B=new Date,q=E||(O||C?1:B.getDate()),Q=O||B.getFullYear(),nt=0;O&&!C||(nt=C>0?C-1:B.getMonth());var rt,lt=R||0,dt=J||0,ct=K||0,ut=X||0;return G?new Date(Date.UTC(Q,nt,q,lt,dt,ct,ut+60*G.offset*1e3)):p?new Date(Date.UTC(Q,nt,q,lt,dt,ct,ut)):(rt=new Date(Q,nt,q,lt,dt,ct,ut),I&&(rt=g(rt).week(I).toDate()),rt)}catch{return new Date("")}}(H,N,P,v),this.init(),Z&&Z!==!0&&(this.$L=this.locale(Z).$L),F&&H!=this.format(N)&&(this.$d=new Date("")),_={}}else if(N instanceof Array)for(var f=N.length,r=1;r<=f;r+=1){U[1]=N[r-1];var n=v.apply(this,U);if(n.isValid()){this.$d=n.$d,this.$L=n.$L,this.init();break}r===f&&(this.$d=new Date(""))}else T.call(this,L)}}})})(_t);var St=_t.exports;const kt=it(St);var zt={exports:{}};(function(t,e){(function(a,u){t.exports=u($t)})(et,function(a){function u(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var $=u(a),k={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(d){return d+"일"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(d){return d<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return $.default.locale(k,null,!0),k})})(zt);V.extend(Mt);V.extend(Yt);V.extend(kt);V.locale("ko");const yt="Asia/Seoul",wt=t=>V(t).tz(yt),Gt=t=>wt(t).format("HH:mm"),Wt=t=>wt(t).format("YYYY-MM-DD");function Kt(){return V().tz(yt)}function qt(t){if(!t||t<0)return"0시간 0분";const e=Math.floor(t/60),a=Math.round(t%60);return`${e}시간 ${a}분`}function Jt(t,e){return Math.max(0,V(e).diff(V(t),"minute"))}function Qt(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const st={hourly:{label:"시급",unit:"원/시간",per:"시간당"},daily:{label:"일급",unit:"원/일",per:"1일당"},monthly:{label:"월급",unit:"원/월",per:"월"}},gt={regular:{label:"정규직 (기간 정함 없음)",title:"표준근로계약서",wageLock:null,dedLock:null},fixed:{label:"계약직 (기간제)",title:"기간제 근로계약서",wageLock:null,dedLock:null},parttime:{label:"단시간 근로자 (알바)",title:"단시간근로자 표준근로계약서",wageLock:null,dedLock:null},daily_worker:{label:"일용근로자",title:"일용근로자 표준근로계약서",wageLock:"daily",dedLock:null},freelance:{label:"3.3% 프리랜서 (도급계약)",title:"업무위탁(용역) 계약서",wageLock:null,dedLock:"freelancer"},construction:{label:"건설일용근로자 (안전서약 포함)",title:"건설일용근로자 표준근로계약서",wageLock:"daily",dedLock:null}};function o(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const tt=t=>(Number(t)||0).toLocaleString("ko-KR");function Vt(t){if(!t)return"";const e=String(t).replace(/[^0-9]/g,"");return e.length<7?"******":`${e.slice(0,6)}-${e[6]}******`}function Lt(t){if(!t)return[];let e=t;if(typeof t=="string")try{e=JSON.parse(t)}catch{return[]}return Array.isArray(e)?e.map(a=>({name:String((a==null?void 0:a.name)||"").trim(),amount:Number(a==null?void 0:a.amount)||0})).filter(a=>a.name||a.amount):[]}function y(t,e,a){return`
  <div class="lc-art">
    <div class="lc-art-h"><span class="lc-no">${typeof t=="number"?`제${t}조`:t}</span> ${e}</div>
    <div class="lc-art-b">${a}</div>
  </div>`}function ft(t){st[t.wage_type]||st.hourly;const e=Lt(t.allowances),a=Number(t.bonus_amount)||0,u=t.wage_type==="monthly"?"월 기본급":t.wage_type==="daily"?"일급(1일)":"시급(시간당)",$=[];if($.push(`<tr><td class="lc-wl">${u}</td><td class="lc-wv">${tt(t.wage_amount)} 원</td></tr>`),$.push(`<tr><td class="lc-wl">상여금</td><td class="lc-wv">${a>0?`있음 · ${tt(a)} 원`:"없음"}</td></tr>`),e.length){const k=e.map(d=>`${o(d.name)} ${tt(d.amount)}원`).join(" / ");$.push(`<tr><td class="lc-wl">기타급여(제수당)</td><td class="lc-wv">있음 · ${k}</td></tr>`)}else $.push('<tr><td class="lc-wl">기타급여(제수당)</td><td class="lc-wv">없음</td></tr>');if(t.wage_type==="monthly"){const k=(Number(t.wage_amount)||0)+a+e.reduce((d,Y)=>d+Y.amount,0);$.push(`<tr class="lc-wsum"><td class="lc-wl">월 지급 합계(세전)</td><td class="lc-wv"><strong>${tt(k)} 원</strong></td></tr>`)}return $.push(`<tr><td class="lc-wl">임금 지급일</td><td class="lc-wv">매월 ${o(t.pay_day)}일 (휴일인 경우 전일 지급)</td></tr>`),$.push(`<tr><td class="lc-wl">지급 방법</td><td class="lc-wv">${o(t.pay_method||"계좌이체")} (근로자 명의 계좌)</td></tr>`),`<table class="lc-wage">${$.join("")}</table>`}function pt(t){const e=a=>a?"☑":"☐";return`
    <div class="lc-ins">
      <span>${e(t.ins_employment)} 고용보험</span>
      <span>${e(t.ins_industrial)} 산재보험</span>
      <span>${e(t.ins_pension)} 국민연금</span>
      <span>${e(t.ins_health)} 건강보험</span>
    </div>`}function at(t,e,a={}){const u=a.ownerTitle||"사업주 (사용자)",$=a.empTitle||"근로자",k=o(e.bizName||"-"),d=o(t.owner_name||e.ceoName||"-"),Y=o(t.biz_address||e.bizAddress||""),_=o(t.biz_reg_no||e.bizRegNo||""),j=o(e.employeeName||t.employee_name||"-"),S=o(t.employee_address||""),A=o(t.employee_birth||""),D=o(e.employeePhone||""),z=t.owner_signed_at?new Date(t.owner_signed_at).toLocaleDateString("ko-KR"):"미서명",x=t.employee_signed_at?new Date(t.employee_signed_at).toLocaleDateString("ko-KR"):"미서명",l=a.ownerSignButton&&t.status==="draft"&&!t.owner_signed_at?`<div style="margin-top:10px"><button class="btn small primary" id="btn-owner-sign" data-id="${o(t.id)}">사업주 서명 완료</button></div>`:"";return`
  <div class="lc-sign">
    <div class="lc-sign-box">
      <div class="lc-sign-cap">${u}</div>
      <table class="lc-sign-t">
        <tr><td>사업체명</td><td>${k}</td></tr>
        ${Y?`<tr><td>주소</td><td>${Y}</td></tr>`:""}
        ${_?`<tr><td>사업자번호</td><td>${_}</td></tr>`:""}
        <tr><td>대표자</td><td><strong>${d}</strong> (서명/인)</td></tr>
      </table>
      <div class="lc-sign-date">서명일: ${z}</div>
      ${l}
    </div>
    <div class="lc-sign-box">
      <div class="lc-sign-cap">${$}</div>
      <table class="lc-sign-t">
        ${S?`<tr><td>주소</td><td>${S}</td></tr>`:""}
        ${A?`<tr><td>생년월일</td><td>${A}</td></tr>`:""}
        ${D?`<tr><td>연락처</td><td>${D}</td></tr>`:""}
        <tr><td>성명</td><td><strong>${j}</strong> (서명/인)</td></tr>
      </table>
      <div class="lc-sign-date">서명일: ${x}</div>
    </div>
  </div>
  <p class="lc-foot">
    작성일: ${o((t.created_at||"").slice(0,10))} ·
    본 계약서는 「전자문서 및 전자거래 기본법」에 따라 서면과 동일한 법적 효력을 가집니다. ·
    SCAN&amp;GO 전자계약
  </p>`}function ht(t,e,a="근로자"){const u=o(e.bizName||"사업장"),$=o(e.employeeName||t.employee_name||"근로자");return`<p class="lc-intro"><strong>${u}</strong>(이하 "사업주"라 한다)과(와)
    <strong>${$}</strong>(이하 "${a}"라 한다)은(는) 다음과 같이 ${a==="수급인"?"계약":"근로계약"}을 체결한다.</p>`}function Xt(t,e={},a={}){const u=t.contract_type||"regular";let $;return u==="freelance"?$=Ct(t,e,a):u==="construction"?$=Nt(t,e,a):u==="daily_worker"?$=Tt(t,e,a):$=Ot(t,e,a),`<div id="printable-contract" class="lc-doc">${At}${$}</div>`}function Ot(t,e,a){const u=gt[t.contract_type]||gt.regular,$=t.end_date?`${o(t.start_date)} ~ ${o(t.end_date)}`:`${o(t.start_date)} (기간의 정함이 없음)`,k=t.contract_type==="parttime",d=Number(t.probation_months)>0?y("수습","수습기간",`근로계약 시작일부터 <strong>${o(t.probation_months)}개월</strong>을 수습기간으로 한다.
        ${Number(t.probation_rate)<100?`수습기간 중 임금은 위 임금의 <strong>${o(t.probation_rate)}%</strong>를 지급한다. (단, 1년 이상 계약·단순노무직 등 최저임금 100% 적용 대상 여부를 확인할 것)`:"수습기간 중에도 위 임금의 100%를 지급한다."}`):"";return`
    <h2 class="lc-title">${o(u.title)}</h2>
    <p class="lc-sub">근로기준법 제17조 · 기간제 및 단시간근로자 보호 등에 관한 법률</p>
    ${ht(t,e)}

    ${y(1,"근로계약기간",$)}
    ${y(2,"근무 장소",o(t.work_location||"-"))}
    ${y(3,"업무의 내용",o(t.job_description||"-"))}
    ${y(4,"소정근로시간",`${o(t.daily_start)} ~ ${o(t.daily_end)}
        (휴게시간 ${o(t.break_minutes)}분 포함, 1주 소정근로시간 ${o(t.weekly_hours)}시간)
        ${k?'<br><span class="lc-note">※ 단시간근로자는 근로일·근로일별 근로시간을 아래 「근무일·근무시간」 및 특약사항에 따른다.</span>':""}`)}
    ${y(5,"근무일 / 휴일",`매주 <strong>${o(t.work_days)}</strong> 근무,
        주휴일은 매주 <strong>${o(t.weekly_holiday||"일요일")}</strong>(유급)로 한다.
        ${t.paid_public_holidays?"관공서의 공휴일 및 대체공휴일은 유급휴일로 한다.":""}`)}
    ${y(6,"임금",ft(t))}
    ${y(7,"연차유급휴가",`연차유급휴가는 근로기준법 제60조에서 정하는 바에 따라 부여한다.
        ${Number(t.annual_leave_days)>0?`(연 ${o(t.annual_leave_days)}일 기준)`:""}`)}
    ${y(8,"사회보험 적용여부",pt(t))}
    ${d}
    ${y(9,"근로계약서 교부","사업주는 근로계약을 체결함과 동시에 본 계약서를 사본하여 근로자에게 교부한다. (근로기준법 제17조 제2항)")}
    ${y(10,"성실 이행 의무","사업주와 근로자는 각자가 근로계약, 취업규칙, 단체협약을 지키고 성실하게 이행하여야 한다.")}
    ${y(11,"기타","이 계약에 정함이 없는 사항은 근로기준법령 및 관계 법령에 의한다.")}
    ${ot(t)}
    ${at(t,e,a)}
  `}function Tt(t,e,a){const u=t.end_date?`${o(t.start_date)} ~ ${o(t.end_date)}`:`${o(t.start_date)} (1일 단위)`;return`
    <h2 class="lc-title">일용근로자 표준근로계약서</h2>
    <p class="lc-sub">근로기준법 제17조 · 일용근로 기준</p>
    ${ht(t,e)}

    ${y(1,"근로계약기간",`${u} <span class="lc-note">※ 일용근로자는 1일 단위로 근로계약이 체결·종료된다.</span>`)}
    ${y(2,"근무 장소",o(t.work_location||"-"))}
    ${y(3,"업무의 내용",o(t.job_description||"-"))}
    ${y(4,"근로시간",`${o(t.daily_start)} ~ ${o(t.daily_end)} (휴게시간 ${o(t.break_minutes)}분 포함)`)}
    ${y(5,"임금",ft(t))}
    ${y(6,"주휴수당","1주간 소정근로일을 개근하고 1주 소정근로시간이 15시간 이상인 경우, 주휴수당을 별도로 지급한다.")}
    ${y(7,"사회보험 적용여부",`${pt(t)}<span class="lc-note">※ 일용근로자는 산재·고용보험이 우선 적용되며, 1개월 8일 이상 또는 60시간 이상 근로 시 국민연금·건강보험이 적용될 수 있다.</span>`)}
    ${y(8,"근로계약서 교부","사업주는 본 계약서를 사본하여 근로자에게 교부한다.")}
    ${y(9,"기타","이 계약에 정함이 없는 사항은 근로기준법령에 의한다.")}
    ${ot(t)}
    ${at(t,e,a)}
  `}function Nt(t,e,a){const u=t.end_date?`${o(t.start_date)} ~ ${o(t.end_date)}`:`${o(t.start_date)}부터`,$=t.safety_agreed?`
    ${y("안전","안전보건 서약 (산업안전보건법)",`
      근로자는 다음 사항을 준수할 것을 서약한다.<br>
      ① 사업주가 시행하는 안전보건교육 및 조치를 준수한다.<br>
      ② 작업 전 안전점검(TBM)에 반드시 참여한다.<br>
      ③ 지급된 개인보호구(안전모·안전화·안전대 등)를 착용한다.<br>
      ④ 위험 상황 발견 시 즉시 작업을 중지하고 관리감독자에게 신고한다.<br>
      ⑤ 음주·약물 복용 상태로 작업장에 출입하지 않는다.
      <div class="lc-agree">☑ 근로자는 위 안전보건 서약에 동의함</div>`)}`:"";return`
    <h2 class="lc-title">건설일용근로자 표준근로계약서</h2>
    <p class="lc-sub">건설근로자의 고용개선 등에 관한 법률 · 근로기준법 제17조</p>
    ${ht(t,e)}

    ${y(1,"공사명 / 현장",`${o(t.project_name||"-")} (현장 소재지: ${o(t.work_location||"-")})`)}
    ${y(2,"근로계약기간",u)}
    ${y(3,"직종 / 업무",o(t.job_description||"-"))}
    ${y(4,"근로시간",`${o(t.daily_start)} ~ ${o(t.daily_end)} (휴게시간 ${o(t.break_minutes)}분 포함)`)}
    ${y(5,"임금",ft(t))}
    ${y(6,"퇴직공제","「건설근로자의 고용개선 등에 관한 법률」에 따라 건설근로자 퇴직공제부금을 신고·납부한다.")}
    ${y(7,"사회보험 적용여부",pt(t))}
    ${$}
    ${y(8,"근로계약서 교부","사업주는 본 계약서를 사본하여 근로자에게 교부한다.")}
    ${y(9,"기타","이 계약에 정함이 없는 사항은 근로기준법령 및 관계 법령에 의한다.")}
    ${ot(t)}
    ${at(t,e,a)}
  `}function Ct(t,e,a){const u=t.end_date?`${o(t.start_date)} ~ ${o(t.end_date)}`:`${o(t.start_date)}부터`,$=st[t.wage_type]||st.monthly,k=tt(t.wage_amount),d=tt(Math.round((Number(t.wage_amount)||0)*.967));return`
    <h2 class="lc-title">업무위탁(용역) 계약서</h2>
    <p class="lc-sub">민법상 도급·위임 계약 · 소득세법 제127조 (사업소득 3.3% 원천징수)</p>
    <p class="lc-intro"><strong>${o(e.bizName||"사업장")}</strong>(이하 "갑")과(와)
      <strong>${o(e.employeeName||t.employee_name||"-")}</strong>(이하 "을")은(는) 다음과 같이 업무위탁계약을 체결한다.</p>

    ${y(1,"계약의 성격",'본 계약은 근로기준법상 근로계약이 아닌 민법상 도급·위임 계약이며, "을"은 독립된 사업자로서 자신의 책임과 재량으로 업무를 수행한다.')}
    ${y(2,"위탁 업무",o(t.job_description||"-"))}
    ${y(3,"계약 기간",u)}
    ${y(4,"업무 수행 장소",o(t.work_location||"-"))}
    ${y(5,"용역 대가",`
      <table class="lc-wage">
        <tr><td class="lc-wl">대가</td><td class="lc-wv">${k} ${o($.unit)}</td></tr>
        <tr><td class="lc-wl">지급일</td><td class="lc-wv">매월 ${o(t.pay_day)}일</td></tr>
        <tr><td class="lc-wl">지급 방법</td><td class="lc-wv">${o(t.pay_method||"계좌이체")}</td></tr>
        <tr><td class="lc-wl">원천징수</td><td class="lc-wv">사업소득세 3% + 지방소득세 0.3% = 3.3% 원천징수<br>실지급액 약 <strong>${d}원</strong></td></tr>
      </table>`)}
    ${y(6,"4대보험",'"을"은 근로자가 아니므로 4대보험에 가입하지 아니한다. 다만 산재보험 특수형태근로종사자 적용 대상인 경우 관계 법령에 따른다.')}
    ${y(7,"비밀유지",'"을"은 업무 수행 중 알게 된 "갑"의 영업비밀·개인정보를 제3자에게 누설하거나 계약 목적 외로 사용하지 아니한다.')}
    ${y(8,"계약 해지","일방이 계약을 위반하고 상당한 기간을 정하여 시정을 최고하였음에도 시정하지 않을 경우, 상대방은 계약을 해지할 수 있다.")}
    ${y(9,"분쟁 해결","본 계약과 관련한 분쟁은 상호 협의로 해결하며, 협의가 이루어지지 않을 경우 민사소송법상 관할 법원에 따른다.")}
    ${ot(t,"제10조 특약 사항")}
    ${at(t,e,{...a,ownerTitle:"갑 (위탁자)",empTitle:"을 (수급인 / 사업자)"})}
  `}function ot(t,e="특약 사항"){return t.special_terms?`
  <div class="lc-special">
    <div class="lc-special-h">${o(e)}</div>
    <div class="lc-special-b">${o(t.special_terms).replace(/\n/g,"<br>")}</div>
  </div>`:""}const At=`<style>
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
</style>`,te={privacy_consent:{label:"개인정보 수집·이용 동의서",short:"개인정보 동의서",icon:"🔒"},security_pledge:{label:"보안·비밀유지 서약서",short:"보안 서약서",icon:"📝"}};function ee(t,e={},a={}){const u=t.doc_type;let $;return u==="security_pledge"?$=Pt(t,e):$=Ht(t,e),`<div id="printable-doc" class="ed-doc">${jt}${$}${Ut(t,e,a)}</div>`}function Ht(t,e){return`
    <h2 class="ed-title">개인정보 수집·이용 동의서</h2>
    <p class="ed-sub">개인정보 보호법 제15조·제24조</p>
    <p class="ed-intro"><strong>${o(e.bizName||"사업장")}</strong>(이하 "회사")는 근로계약의 체결·이행 및 법령상 의무 이행을 위하여
      아래와 같이 개인정보를 수집·이용하고자 합니다. 내용을 충분히 읽고 동의 여부를 결정하여 주십시오.</p>

    ${W("1. 수집·이용 목적",`
      근로계약의 체결 및 이행 · 임금 지급 및 원천징수 · 4대 사회보험 신고 및 관리 ·
      근태·급여 관리 · 퇴직금 정산 · 법령상 의무(근로기준법·세법 등) 이행`)}

    ${W("2. 수집 항목",`
      <table class="ed-t">
        <tr><td>일반 정보</td><td>성명, 생년월일, 연락처, 주소, 이메일, 입사일, 직책</td></tr>
        <tr><td>급여 정보</td><td>급여계좌(은행·계좌번호), 임금·공제 내역</td></tr>
        <tr><td>근태 정보</td><td>출퇴근 기록, 근무 현장, 위치정보(QR/GPS 체크인 시)</td></tr>
      </table>`)}

    ${W("3. 보유 및 이용 기간",`
      근로관계 종료(퇴직) 후 관계 법령에서 정한 기간까지 보관합니다.
      <br>· 근로계약·임금대장 등: 근로기준법 제42조에 따라 <strong>3년</strong>
      <br>· 원천징수 관련 서류: 국세기본법에 따라 <strong>5년</strong>
      <br>보유기간이 경과한 개인정보는 지체 없이 파기합니다.`)}

    ${W("4. 고유식별정보(주민등록번호) 처리",`
      4대 사회보험 신고 및 원천징수 등 <strong>법령에서 구체적으로 요구하는 경우에 한하여</strong>
      주민등록번호를 수집·이용합니다. (개인정보 보호법 제24조의2)`)}

    ${W("5. 동의를 거부할 권리 및 불이익",`
      귀하는 위 개인정보 수집·이용에 동의를 거부할 권리가 있습니다.
      다만 위 정보는 근로계약 이행에 필수적인 항목으로, 동의를 거부하실 경우
      채용 및 근로계약의 정상적인 이행이 어려울 수 있습니다.`)}

    <div class="ed-agree">
      <p>본인은 위 내용을 충분히 이해하였으며, 개인정보의 수집·이용에 <strong>동의</strong>합니다.</p>
      <p class="ed-agree-sub">☑ 개인정보 수집·이용 동의 (필수) &nbsp;&nbsp; ☑ 고유식별정보 처리 동의 (필수)</p>
    </div>
  `}function Pt(t,e){return`
    <h2 class="ed-title">보안 및 비밀유지 서약서</h2>
    <p class="ed-sub">부정경쟁방지 및 영업비밀보호에 관한 법률</p>
    <p class="ed-intro">본인은 <strong>${o(e.bizName||"회사")}</strong>(이하 "회사")에 근무함에 있어,
      아래 사항을 성실히 준수할 것을 서약합니다.</p>

    ${W("제1조 비밀유지 의무",`
      본인은 재직 중은 물론 퇴직 후에도 업무상 알게 된 회사의 영업비밀, 기술정보,
      경영정보, 고객 및 거래처 정보, 동료 및 고객의 개인정보를 회사의 사전 서면 동의 없이
      제3자에게 누설하거나 본인의 이익 또는 계약 목적 외의 용도로 사용하지 않습니다.`)}

    ${W("제2조 자료·자산의 관리",`
      회사로부터 제공받은 문서·데이터·전산자료·장비 등 일체의 자산을 선량한 관리자의
      주의의무로 관리하며, 무단으로 복제·반출·외부 저장하지 않습니다.
      퇴직 시 보유한 모든 회사 자료와 자산을 즉시 반납합니다.`)}

    ${W("제3조 개인정보 보호",`
      업무상 취급하는 고객·동료의 개인정보를 관계 법령(개인정보 보호법 등)에 따라
      처리하며, 목적 외 이용·제3자 제공·유출이 발생하지 않도록 합니다.`)}

    ${W("제4조 위반 시 책임",`
      본 서약을 위반하여 회사에 손해를 발생시킨 경우, 관계 법령에 따른
      민사상 손해배상 및 형사상 책임을 부담합니다.`)}

    ${W("제5조 효력",`
      본 서약의 효력은 재직 기간은 물론 퇴직 후에도 비밀유지가 필요한 기간 동안 유지됩니다.`)}

    <div class="ed-agree">
      <p>본인은 위 서약 내용을 충분히 이해하였으며, 이를 성실히 준수할 것을 <strong>서약</strong>합니다.</p>
    </div>
  `}function W(t,e){return`<div class="ed-sec"><div class="ed-sec-h">${t}</div><div class="ed-sec-b">${e}</div></div>`}function Ut(t,e,a={}){const u=o(e.employeeName||t.employee_name||"-"),$=o(e.bizName||"-"),k=o(t.owner_name||e.ceoName||"-"),d=t.employee_signed_at?new Date(t.employee_signed_at).toLocaleDateString("ko-KR")+" 서명 완료":"미서명";return`
  <div class="ed-sign">
    <div class="ed-sign-row"><span>작성일</span><strong>${t.employee_signed_at?new Date(t.employee_signed_at).toLocaleDateString("ko-KR"):new Date().toLocaleDateString("ko-KR")}</strong></div>
    <div class="ed-sign-row"><span>제출처</span><strong>${$}${k!=="-"?` (대표 ${k})`:""}</strong></div>
    <div class="ed-sign-row ed-sign-name"><span>${t.doc_type==="security_pledge"?"서약자":"동의자"}</span>
      <strong>${u} (서명/인)</strong></div>
    <div class="ed-sign-state">${d}</div>
  </div>
  <p class="ed-foot">본 문서는 「전자문서 및 전자거래 기본법」에 따라 서면과 동일한 효력을 가집니다 · SCAN&amp;GO 전자서명</p>`}const jt=`<style>
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
</style>`;export{gt as C,te as D,st as W,o as a,Vt as b,ee as c,Jt as d,Qt as e,Wt as f,V as g,Zt as h,It as i,Gt as j,wt as k,Bt as l,qt as m,Kt as n,Rt as o,Lt as p,Xt as r,Ft as s};
