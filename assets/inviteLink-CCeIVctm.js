const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DEA1ahyl.js","assets/utils-DUzS9zXA.js","assets/supabase-Dulr8jbl.js"])))=>i.map(i=>d[i]);
import{_ as r,t as o,e as s}from"./utils-DUzS9zXA.js";const c="https://scandgo.com/";function d(e){var a;const t=((a=e.tenants)==null?void 0:a.invite_token)||"";return t?`${c}login.html?join=${t}`:""}async function l(e){try{await navigator.clipboard.writeText(e)}catch{const t=Object.assign(document.createElement("textarea"),{value:e});t.style.cssText="position:fixed;opacity:0;pointer-events:none",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}}function p(){var t;const e=window.Capacitor;return!!((t=e==null?void 0:e.isNativePlatform)!=null&&t.call(e)||e!=null&&e.getPlatform&&e.getPlatform()!=="web")}async function f({title:e,text:t,url:a}){if(p())try{const{Share:n}=await r(async()=>{const{Share:i}=await import("./index-DEA1ahyl.js");return{Share:i}},__vite__mapDeps([0,1,2]));await n.share({title:e,text:t,url:a,dialogTitle:"초대 링크 공유"});return}catch(n){if(/cancel/i.test((n==null?void 0:n.message)||""))return}if(navigator.share){const n=a?{title:e,text:t,url:a}:{title:e,text:t};try{await navigator.share(n);return}catch(i){if((i==null?void 0:i.name)==="AbortError")return}}await l(a||t),o("링크가 복사됐습니다. 카카오톡·문자에 붙여넣기 해주세요","success",4e3)}function v(e){const t=d(e);return t?`
    <div style="margin-top:12px;padding:12px 14px;background:#f8faff;border:1.5px solid #dbeafe;border-radius:10px">
      <div style="font-size:12px;color:#1d4ed8;font-weight:700;margin-bottom:6px">직원에게 아래 초대링크를 보내세요</div>
      <div style="font-size:12px;color:#3d4a5c;margin-bottom:8px;line-height:1.5">
        직원이 가입할 때 전화번호를 입력하면 미리 등록한 정보가 자동으로 매칭됩니다.
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <input type="text" readonly value="${s(t)}" class="invite-share-url"
          style="flex:1;min-width:180px;padding:9px 11px;border:1.5px solid #e2e7ef;border-radius:8px;font-size:12px;color:#3d4a5c;background:#fff">
        <button type="button" class="btn small primary invite-share-copy">링크 복사</button>
      </div>
    </div>
  `:'<p style="font-size:12px;color:#dc2626">초대 링크를 불러오지 못했습니다. 설정 화면에서 확인해주세요.</p>'}function y(e){e.querySelectorAll(".invite-share-copy").forEach(t=>{t.addEventListener("click",async()=>{const a=t.parentElement.querySelector(".invite-share-url");if(a){try{await navigator.clipboard.writeText(a.value)}catch{a.select(),document.execCommand("copy")}o("초대 링크가 복사됐습니다","success")}})})}export{c as P,y as b,d as g,p as i,v as r,f as s};
