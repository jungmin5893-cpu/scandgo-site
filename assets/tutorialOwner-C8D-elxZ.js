import{supabase as y}from"./supabase-D5W_lk-C.js";const e=t=>document.querySelector(t),f=new URLSearchParams(location.search).get("demo")==="1",k={stores:()=>`
    <div class="page-head">
      <h1>현장 / QR</h1>
      <div class="page-sub">현장을 등록하면 출퇴근 QR이 자동 생성됩니다</div>
    </div>
    <div class="card">
      <div class="card-head">
        <h2>새 현장 추가</h2>
        <div class="card-sub">현장 이름과 위치를 입력하세요</div>
      </div>
      <form class="form-row" id="store-form" onsubmit="return false">
        <input id="store-name" type="text" placeholder="현장 이름 (예: 강남점)" value="강남점">
        <input id="store-radius" type="number" placeholder="반경(m)" value="100" style="max-width:120px">
        <button class="btn primary" id="btn-add-store" type="button">+ 현장 추가</button>
      </form>
    </div>
    <div class="card">
      <div class="card-head">
        <h2>등록된 현장</h2>
        <div class="card-sub">탭하여 QR과 정보를 확인하세요</div>
      </div>
      <div id="stores-list">
        <div class="empty-state" id="empty-stores">
          <div class="icon"><svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9.5 5.2 5h13.6L20 9.5M4.5 9.5V19a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9.5M4 9.5h16M9.5 20v-5h5v5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
          아직 등록된 현장이 없습니다
        </div>
      </div>
    </div>
  `,employees:()=>`
    <div class="page-head">
      <h1>직원 관리</h1>
      <div class="page-sub">직원을 초대하고 정보를 관리합니다</div>
    </div>
    <div class="card">
      <div class="card-head">
        <h2>근로자 초대</h2>
        <div class="card-sub">전화번호를 등록하면 가입 코드가 자동 생성됩니다</div>
      </div>
      <form class="form-row" onsubmit="return false">
        <input id="emp-name" type="text" placeholder="이름 (선택)" value="김철수">
        <input id="emp-phone" type="text" placeholder="010-1234-5678" value="010-1234-5678">
        <button class="btn primary" id="btn-invite" type="button">가입 코드 발급</button>
      </form>
      <div id="invite-result" style="padding:0 20px 20px"></div>
    </div>
  `,attendance:()=>`
    <div class="page-head">
      <h1>출퇴근 현황</h1>
      <div class="page-sub">직원들의 실시간 출퇴근 기록</div>
    </div>
    <div class="kpi-grid">
      <div class="kpi-card"><div class="kpi-label">오늘 출근</div><div class="kpi-val">2명</div><div class="kpi-foot">전체 1명 중</div></div>
      <div class="kpi-card"><div class="kpi-label">근무 중</div><div class="kpi-val" style="color:var(--green)">1명</div><div class="kpi-foot">현재 시점</div></div>
      <div class="kpi-card"><div class="kpi-label">이번 주 총 근무</div><div class="kpi-val">42h</div><div class="kpi-foot">전 직원 합산</div></div>
      <div class="kpi-card"><div class="kpi-label">이번 달 출근일</div><div class="kpi-val">18일</div><div class="kpi-foot">평균</div></div>
    </div>
    <div class="card">
      <div class="card-head">
        <h2>최근 출퇴근 기록</h2>
        <div class="card-sub">직원이 QR을 스캔하면 자동으로 기록됩니다</div>
      </div>
      <table class="att-table">
        <thead><tr><th>이름</th><th>현장</th><th>출근</th><th>퇴근</th><th>상태</th></tr></thead>
        <tbody>
          <tr><td><b>김철수</b></td><td>강남점</td><td>08:55</td><td>—</td><td><span class="pill">근무 중</span></td></tr>
          <tr><td><b>이영희</b></td><td>강남점</td><td>09:02</td><td>18:05</td><td><span class="pill" style="background:#e2e7ef;color:#3d4a5c">퇴근</span></td></tr>
          <tr><td><b>박민수</b></td><td>홍대점</td><td>10:15</td><td>19:30</td><td><span class="pill" style="background:#e2e7ef;color:#3d4a5c">퇴근</span></td></tr>
        </tbody>
      </table>
    </div>
  `};function x(t){document.querySelectorAll(".nav-item").forEach(i=>i.classList.toggle("active",i.dataset.route===t))}function m(t){e("#view-root").innerHTML=k[t](),x(t),w(t)}function w(t){t==="stores"?e("#btn-add-store").addEventListener("click",S):t==="employees"&&e("#btn-invite").addEventListener("click",L)}function S(){var l,o;const t=e("#store-name").value.trim()||"강남점",i=e("#stores-list");(l=e("#empty-stores"))==null||l.remove();const d=`
    <div class="card store-card" style="margin:14px 20px 16px;border-left:4px solid var(--gold)">
      <div class="store-toggle-head" id="store-toggle">
        <div style="display:flex;align-items:center;gap:6px">
          <h3>${t}</h3>
          <span class="store-emp-badge">직원 0명</span>
        </div>
        <span class="store-chevron">▼</span>
      </div>
      <div class="store-detail" id="store-detail" style="display:none">
        <div class="store-qr-wrap">
          <div class="qr-block">
            <div class="qr-canvas">QR 미리보기</div>
            <div style="display:flex;gap:6px;margin-top:8px">
              <button class="btn small">QR 저장</button>
              <button class="btn small">프린트</button>
            </div>
          </div>
          <div class="store-info">
            <div style="font-size:12px;color:var(--gray3)"><b>위치:</b> 자동 설정됨</div>
            <div style="font-size:12px;color:var(--gray3);margin-top:4px"><b>반경:</b> ${((o=e("#store-radius"))==null?void 0:o.value)||100}m</div>
            <div style="font-size:11px;color:var(--gray3);margin-top:6px">
              <code>scandgo://checkin?store=demo-001</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;i.insertAdjacentHTML("beforeend",d),e("#store-toggle").addEventListener("click",()=>{const a=e("#store-detail"),n=a.style.display!=="none";a.style.display=n?"none":"block",document.querySelector(".store-chevron").textContent=n?"▼":"▲",s===2&&(C(),setTimeout(p,1800))}),s===1&&p()}function L(){e("#invite-result").innerHTML=`
    <div class="invite-code-box">
      <div class="label">발급된 가입 코드</div>
      <div class="code">AB7K9X</div>
      <div class="label" style="margin-top:14px">이 코드를 직원에게 알려주세요<br>직원은 앱에서 이 코드로 가입합니다</div>
    </div>
  `,s===3&&p()}const r=[{route:"stores",targetSel:"#btn-add-store",title:"1. 현장(매장)을 등록해보세요",desc:'먼저 출퇴근을 관리할 현장을 등록합니다.<br>"강남점"이 미리 입력되어 있어요.<br><br><b>+ 현장 추가</b> 버튼을 눌러보세요.',waitClick:!0},{route:"stores",targetSel:"#store-toggle",title:"2. QR 코드를 확인해보세요",desc:"등록된 현장을 탭하면 QR 코드가 펼쳐집니다.<br>이 QR을 출력해 현장에 부착하면, 직원이 스캔해 출퇴근합니다.<br><br><b>강남점 카드를 눌러보세요.</b>",waitClick:!0,onClick:t=>{setTimeout(p,400)}},{route:"employees",targetSel:"#btn-invite",title:"3. 직원을 초대해보세요",desc:"직원의 전화번호를 입력하면 6자리 초대 코드가 발급됩니다.<br>직원은 이 코드로 앱에서 가입합니다.<br><br><b>가입 코드 발급</b> 버튼을 눌러보세요.",waitClick:!0},{route:"attendance",targetSel:".att-table",title:"4. 출퇴근 기록을 확인해보세요",desc:"직원이 현장에서 QR을 스캔하면 여기에 자동 기록됩니다.<br>실시간 근무 상태, 근무 시간, 출근일 수까지 한눈에 볼 수 있어요.<br><br>이제 SCAN&GO의 핵심 기능을 모두 익히셨어요!",nextLabel:"완료"}];let s=0;function u(t){var d;s=t+1;const i=r[t];if(!i){b();return}R(),((d=document.querySelector(".nav-item.active"))==null?void 0:d.dataset.route)!==i.route&&m(i.route),document.querySelectorAll(".tut-progress .dot").forEach((l,o)=>{l.classList.remove("active","done"),o+1<s?l.classList.add("done"):o+1===s&&l.classList.add("active")}),setTimeout(()=>{const l=document.querySelector(i.targetSel);l&&l.scrollIntoView({behavior:"instant",block:"center"}),g(i),e("#step-num").textContent=`단계 ${s} / ${r.length}`,e("#step-title").textContent=i.title,e("#step-desc").innerHTML=i.desc,e("#btn-prev").style.display=t===0?"none":"",e("#btn-next").textContent=i.nextLabel||(i.waitClick?"클릭 대기 중...":"다음 →"),e("#btn-next").disabled=!!i.waitClick,e("#btn-next").style.opacity=i.waitClick?".4":"1"},150)}function g(t){const i=document.querySelector(t.targetSel);if(!i){e("#tut-spotlight").style.display="none",E();return}const d=i.getBoundingClientRect(),l=8,o=e("#tut-spotlight");o.style.display="block",o.style.top=d.top-l+"px",o.style.left=d.left-l+"px",o.style.width=d.width+l*2+"px",o.style.height=d.height+l*2+"px";const a=e("#tut-tooltip"),n=240;let c=d.bottom+16,v=d.left;c+n>window.innerHeight&&(c=Math.max(16,d.top-n-12)),c<16&&(c=window.innerHeight-n-16),v+360>window.innerWidth&&(v=window.innerWidth-360-16),v<16&&(v=16),a.style.top=c+"px",a.style.left=v+"px",a.style.right="auto",i.style.position=i.style.position||"relative",i.style.zIndex=9150}function E(){const t=e("#tut-tooltip");t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%,-50%)"}function p(){const t=r[s-1];if(t!=null&&t.targetSel){const i=document.querySelector(t.targetSel);i&&(i.style.zIndex="")}if(s>=r.length){b();return}u(s)}function q(){s<=1||u(s-2)}async function b(){if(e("#tut-overlay").style.display="none",e("#tut-spotlight").style.display="none",e("#tut-tooltip").style.display="none",e("#tut-complete").classList.add("active"),!f)try{const{data:{user:t}}=await y.auth.getUser();t&&await y.from("profiles").update({tutorial_owner_done:!0}).eq("id",t.id)}catch(t){console.warn("튜토리얼 완료 저장 실패",t)}}function C(){const t=e("#tut-overlay");t.style.opacity="0",t.style.pointerEvents="none",e("#tut-spotlight").style.display="none",e("#tut-tooltip").style.opacity="0",e("#tut-tooltip").style.pointerEvents="none"}function R(){const t=e("#tut-overlay");t.style.opacity="1",t.style.pointerEvents="auto",e("#tut-tooltip").style.opacity="1",e("#tut-tooltip").style.pointerEvents="auto"}e("#btn-next").addEventListener("click",()=>{e("#btn-next").disabled||p()});e("#btn-prev").addEventListener("click",q);e("#btn-skip").addEventListener("click",()=>{confirm(`교육을 건너뛰시겠어요?
설정에서 언제든지 다시 볼 수 있습니다.`)&&b()});e("#btn-finish").addEventListener("click",()=>{f?location.href="index.html":location.href="dashboard.html"});e("#btn-restart").addEventListener("click",()=>{location.reload()});var h;(h=e("#mobile-menu"))==null||h.addEventListener("click",()=>{e("#sidebar").classList.toggle("open")});document.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault()})});window.addEventListener("resize",()=>{if(s>0&&s<=r.length){const t=r[s-1];if(t){const i=document.querySelector(t.targetSel);i&&i.scrollIntoView({behavior:"instant",block:"center"}),g(t)}}});m("stores");setTimeout(()=>u(0),300);
