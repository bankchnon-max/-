<style>
  #sk, #sk * { box-sizing: border-box; }
  #sk {
    --bg:#10151c; --panel:#1a222c; --panel2:#212b37; --border:#2b3645;
    --accent:#ff8a3d; --accent2:#ffb27a; --text:#f2ede3; --dim:#ffffff;
    --green:#3fb27f; --red:#e5595f; --yellow:#f0b429; --blue:#5b9bd5;
    font-family:'Sarabun',sans-serif; background:var(--bg); color:var(--text);
    min-height:100vh; padding-bottom:78px; position:relative; -webkit-tap-highlight-color:transparent;
  }
  #sk h1,#sk h2,#sk h3,#sk .kn { font-family:'Kanit',sans-serif; }
  #sk .topbar { padding:14px 16px 12px; border-bottom:1px solid var(--border);
    background:linear-gradient(180deg,#141b23,#10151c); position:sticky; top:0; z-index:20; }
  #sk .topbar h1 { font-size:17px; font-weight:600; margin:0 0 2px; display:flex; align-items:center; gap:8px; }
  #sk .dotled { width:8px; height:8px; border-radius:50%; background:var(--accent); box-shadow:0 0 8px var(--accent); }
  #sk .sub { font-size:13px; color:#ffffff; font-weight:500; }
  #sk .savechip { margin-top:7px; font-size:11.5px; padding:5px 10px; border-radius:8px;
    font-family:'Kanit',sans-serif; display:inline-block; cursor:default; }
  #sk .savechip.ok { background:#163022; color:var(--green); }
  #sk .savechip.saving { background:#232e3b; color:#ffffff; }
  #sk .savechip.bad { background:#3a1c1e; color:var(--red); border:1px solid #5c2a2c; cursor:pointer; }
  #sk .content { padding:14px; max-width:980px; margin:0 auto; }
  #sk .panel { display:none; }
  #sk .panel.show { display:block; }
  #sk .card { background:var(--panel); border:1px solid var(--border); border-radius:14px; padding:14px; margin-bottom:11px; }
  #sk .card h3 { font-size:13px; color:#ffffff; font-weight:500; margin:0 0 9px; text-transform:uppercase; letter-spacing:.5px; }
  #sk input,#sk select { width:100%; background:var(--panel2); border:1px solid var(--border);
    border-radius:8px; padding:9px 10px; color:var(--text); font-family:'Sarabun',sans-serif; font-size:14px; margin-top:4px; }
  #sk label { font-size:12px; color:#ffffff; display:block; margin-top:9px; }
  #sk button.btn { background:var(--accent); color:#201305; border:none; border-radius:9px; padding:10px 15px;
    font-family:'Kanit',sans-serif; font-weight:500; font-size:14px; cursor:pointer; margin-top:11px; }
  #sk button.btn.sec { background:var(--panel2); color:var(--text); border:1px solid var(--border); }
  #sk button.btn.blue { background:var(--blue); color:#0a1f33; }
  #sk button.btn.sm { padding:6px 10px; font-size:12.5px; margin-top:0; }
  #sk button.btn.w { width:100%; }
  #sk .rf { display:flex; gap:9px; flex-wrap:wrap; }
  #sk .rf > div { flex:1; min-width:120px; }
  #sk table { width:100%; border-collapse:collapse; font-size:12.5px; }
  #sk th { text-align:left; color:#ffffff; font-weight:500; padding:7px 8px; border-bottom:1px solid var(--border);
    white-space:nowrap; font-family:'Kanit',sans-serif; }
  #sk td { padding:7px 8px; border-bottom:1px solid #1f2833; white-space:nowrap; }
  #sk .scr { overflow-x:auto; -webkit-overflow-scrolling:touch; }
  #sk .bdg { display:inline-block; padding:2px 8px; border-radius:20px; font-size:11px; font-family:'Kanit',sans-serif; }
  #sk .bdg.ok { background:#163022; color:var(--green); }
  #sk .bdg.warn { background:#3a2a0f; color:var(--yellow); }
  #sk .bdg.bad { background:#3a1c1e; color:var(--red); }
  #sk .sg { display:grid; grid-template-columns:1fr 1fr; gap:9px; }
  #sk .stat { background:var(--panel2); border:1px solid var(--border); border-radius:12px; padding:11px; }
  #sk .stat .v { font-size:21px; font-family:'Kanit',sans-serif; color:var(--accent2); }
  #sk .stat .l { font-size:11px; color:#ffffff; margin-top:2px; }
  #sk .nav { position:fixed; bottom:0; left:0; right:0; background:#141b23; border-top:1px solid var(--border); display:flex; z-index:30; overflow-x:auto; }
  #sk .nb { flex:1; background:none; border:none; color:#ffffff; padding:8px 2px 7px; cursor:pointer;
    display:flex; flex-direction:column; align-items:center; gap:3px; font-size:10px; font-family:'Sarabun',sans-serif; min-width:64px; }
  #sk .nb .ic { font-size:17px; }
  #sk .nb.on { color:var(--accent); }
  #sk .empty { color:#ffffff; font-size:12.5px; text-align:center; padding:16px 0; }
  #sk .sumline { font-size:12.5px; color:#ffffff; margin-top:8px; }
  #sk .toast { position:fixed; bottom:88px; left:50%; transform:translateX(-50%) translateY(12px);
    background:#243040; border:1px solid var(--accent); color:var(--text); padding:10px 16px; border-radius:10px;
    font-size:13px; font-family:'Kanit',sans-serif; z-index:200; opacity:0; transition:.22s; pointer-events:none;
    max-width:90vw; text-align:center; }
  #sk .toast.show { opacity:1; transform:translateX(-50%) translateY(0); }
  #sk .scard { background:var(--panel2); border:1px solid var(--border); border-radius:12px; padding:12px; margin-bottom:8px; }
  #sk .scard .nm { font-family:'Kanit',sans-serif; font-size:15px; }
  #sk .scard .n { font-size:24px; font-family:'Kanit',sans-serif; color:var(--accent2); margin-top:4px; }
  #sk .scard .l { font-size:11px; color:#ffffff; }
  #sk .lowstock { border-color:var(--red); box-shadow:0 0 0 1px var(--red) inset; }
  #sk .frow { display:flex; gap:6px; margin-top:6px; align-items:center; }
  #sk .frow input { margin-top:0; }
  #sk .x { background:none; border:none; color:var(--red); cursor:pointer; font-size:15px; padding:2px 6px; }
  #sk .stb { display:flex; gap:7px; margin:9px 0; flex-wrap:wrap; }
  #sk .stab { background:var(--panel2); border:1px solid var(--border); border-radius:8px; padding:6px 11px;
    font-size:12.5px; cursor:pointer; color:#ffffff; font-family:'Kanit',sans-serif; }
  #sk .stab.on { color:var(--accent); border-color:var(--accent); }
  #sk .cartrow { background:var(--panel2); border:1px solid var(--border); border-radius:10px; padding:10px; margin-top:8px; }
  #sk .printbill { display:none; }
  @media print {
    body * { visibility:hidden; }
    #sk .printbill, #sk .printbill * { visibility:visible; }
    #sk .printbill { display:block; position:absolute; top:0; left:0; width:100%; color:#000; background:#fff; padding:20px; }
    #sk .printbill table { border-collapse:collapse; width:100%; }
    #sk .printbill th, #sk .printbill td { border:1px solid #333; padding:6px; font-size:13px; }
  }
</style>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600&family=Sarabun:wght@400;500;600&display=swap" rel="stylesheet">

<div id="sk">
  <div class="topbar">
    <h1><span class="dotled"></span> ระบบสต๊อกสินค้า</h1>
    <div class="sub" id="clock" style="color:#ffffff;">—</div>
    <div class="savechip ok" id="saveState">บันทึกแล้ว ✓</div>
    <div class="sumline" style="margin-top:6px;">เชื่อมกับระบบผลิตอัตโนมัติ — เบิกใย/ผลิตแพ็ค/ท้ายไลน์ หักสต๊อกให้เองทุกจุด</div>
  </div>

  <div class="content">

    <!-- 1. FIBER -->
    <div class="panel" id="p-fiber">
      <div class="card"><h3>สต๊อกใย</h3><div id="fiberCards"></div></div>
      <div class="card">
        <h3>รับเข้าใย</h3>
        <div class="rf">
          <div><label>ชื่อใย</label><select id="rwSel"></select>
            <input id="rwName" list="dlRwFiber" placeholder="พิมพ์ชื่อใย" style="display:none;"><datalist id="dlRwFiber"></datalist></div>
          <div><label>น้ำหนักรับเข้า (กก.)</label><input id="rwKg" type="number" inputmode="decimal" step="0.01"></div>
        </div>
        <div class="rf">
          <div><label>ลอตที่</label><input id="rwLot"></div>
          <div><label>ผู้ขาย</label><input id="rwSupplier"></div>
        </div>
        <label>หมายเหตุ</label><input id="rwNote">
        <button class="btn w" id="btnRw">บันทึกรับเข้าใย</button>
      </div>
      <div class="card">
        <h3>ตั้งจุดเตือนสต๊อกต่ำ (ใย)</h3>
        <div class="rf">
          <div><label>ชื่อใย</label><select id="thSel"></select></div>
          <div><label>เตือนเมื่อต่ำกว่า (กก.)</label><input id="thKg" type="number" inputmode="decimal" step="0.1"></div>
        </div>
        <button class="btn sec w" id="btnTh">บันทึก</button>
      </div>
      <div class="card"><h3>ประวัติรับเข้าใย</h3><div class="scr"><table id="tRw"></table></div></div>
      <div class="card"><h3>ประวัติเบิกใย (จากระบบผลิต)</h3><div class="scr"><table id="tRwUse"></table></div></div>
    </div>

    <!-- 2. FABRIC -->
    <div class="panel" id="p-fabric">
      <div class="card"><h3>ม้วนผ้าคงเหลือ (ยังไม่ตัด)</h3><div id="rollCards"></div></div>
      <div class="card">
        <h3>รับเข้าม้วนผ้า</h3>
        <div class="rf">
          <div><label>ชนิดผ้า</label><select id="fabRecSel"></select>
            <input id="fabRecName" list="dlFabric" placeholder="พิมพ์ชนิดผ้า" style="display:none;"><datalist id="dlFabric"></datalist></div>
          <div><label>จำนวนม้วนที่รับเข้า</label><input id="fabRecRolls" type="number" inputmode="numeric"></div>
        </div>
        <label>หมายเหตุ</label><input id="fabRecNote">
        <button class="btn w" id="btnFabRec">บันทึกรับเข้าม้วนผ้า</button>
      </div>
      <div class="card">
        <h3>บันทึกการตัดผ้า</h3>
        <div class="rf">
          <div><label>ชนิดผ้า</label><select id="cutFabSel"></select></div>
          <div><label>ม้วนที่ (เลขอ้างอิง)</label><input id="cutRollNo" type="number" inputmode="numeric" placeholder="อัตโนมัติ"></div>
        </div>
        <label>ตัดได้ไซซ์ไหนบ้าง — กี่ชิ้น</label>
        <div id="cutRows"></div>
        <button class="btn sec sm" style="margin-top:8px;" id="btnAddCutRow">+ เพิ่มไซซ์</button><br>
        <label>หมายเหตุ</label><input id="cutNote">
        <button class="btn w" id="btnCut">บันทึกการตัด</button>
      </div>
      <div class="card">
        <h3>สต๊อกผ้าตัดแล้ว แยกตามไซซ์</h3>
        <div class="scr"><table id="tCutStock"></table></div>
      </div>
      <div class="card">
        <h3>ส่งเย็บ</h3>
        <div class="rf">
          <div><label>ไซซ์</label><select id="sewSizeSel"></select></div>
          <div><label>จำนวนที่ส่งเย็บ (ชิ้น)</label><input id="sewQty" type="number" inputmode="numeric"></div>
        </div>
        <label>หมายเหตุ</label><input id="sewNote">
        <button class="btn w" id="btnSew">บันทึกส่งเย็บ</button>
      </div>
      <div class="card">
        <h3>ผูกออเดอร์กับไซซ์ผ้า (เพื่อหักสต๊อกอัตโนมัติตอนผลิตหมอน)</h3>
        <div class="rf">
          <div><label>ออเดอร์</label><select id="mapOrdSel"></select></div>
          <div><label>ไซซ์ผ้าที่ใช้</label><select id="mapSizeSel"></select></div>
        </div>
        <button class="btn sec w" id="btnMapFabric">บันทึกการผูก</button>
        <div class="sumline" id="mapFabricList"></div>
      </div>
      <div class="card">
        <h3>บันทึกของเสีย (ผ้าเปื้อน ฯลฯ)</h3>
        <div class="rf">
          <div><label>ชนิดผ้า</label><select id="wasteFabSel"></select></div>
          <div><label>หน่วย</label><select id="wasteUnit"><option value="roll">ม้วน</option><option value="piece">ชิ้น</option></select></div>
        </div>
        <div class="rf">
          <div><label>จำนวน</label><input id="wasteQty" type="number" inputmode="numeric"></div>
          <div><label>สาเหตุ</label><input id="wasteReason" placeholder="เช่น ผ้าเปื้อน"></div>
        </div>
        <button class="btn sec w" id="btnWaste">บันทึกของเสีย</button>
        <div class="scr" style="margin-top:9px;"><table id="tWaste"></table></div>
      </div>
      <div class="card"><h3>ประวัติการตัด</h3><div class="scr"><table id="tCutHist"></table></div></div>
      <div class="card"><h3>ประวัติส่งเย็บ</h3><div class="scr"><table id="tSewHist"></table></div></div>
    </div>

    <!-- 3. BAGS -->
    <div class="panel" id="p-bag">
      <div class="card"><h3>ถุงซิล (ตามแบรนด์ลูกค้า)</h3><div id="zipCards"></div></div>
      <div class="card"><h3>ถุงแพ็ค (ตามขนาด)</h3><div id="packCards"></div></div>
      <div class="card">
        <h3>รับเข้าถุง</h3>
        <div class="rf">
          <div><label>ประเภท</label><select id="bagKind"><option value="zip">ถุงซิล</option><option value="pack">ถุงแพ็ค</option></select></div>
          <div><label>ชื่อ/ขนาด</label><select id="bagNameSel"></select>
            <input id="bagNameNew" placeholder="พิมพ์ชื่อใหม่" style="display:none;"></div>
        </div>
        <div class="rf">
          <div><label>จำนวนที่รับเข้า (ใบ)</label><input id="bagQty" type="number" inputmode="numeric"></div>
          <div><label>น้ำหนักรวม (กก. — ถ้ามี)</label><input id="bagKg" type="number" inputmode="decimal" step="0.1"></div>
        </div>
        <label>หมายเหตุ</label><input id="bagNote">
        <button class="btn w" id="btnBag">บันทึกรับเข้าถุง</button>
      </div>
      <div class="card">
        <h3>ผูกออเดอร์กับถุงที่ใช้ (หักอัตโนมัติตอนบันทึกแพ็คในระบบผลิต)</h3>
        <div class="rf">
          <div><label>ออเดอร์</label><select id="bagMapOrd"></select></div>
          <div><label>ถุงซิลที่ใช้</label><select id="bagMapZip"></select></div>
        </div>
        <label>ถุงแพ็คที่ใช้</label><select id="bagMapPack"></select>
        <button class="btn sec w" id="btnBagMap">บันทึกการผูก</button>
        <div class="sumline" id="bagMapList"></div>
      </div>
      <div class="card"><h3>ประวัติรับเข้าถุง</h3><div class="scr"><table id="tBagHist"></table></div></div>
    </div>

    <!-- 4. FINISHED GOODS -->
    <div class="panel" id="p-fin">
      <div class="card"><h3>สต๊อกสินค้าสำเร็จรูป</h3><div id="finCards"></div></div>
      <div class="card"><h3>ประวัติผลิตเข้าสต๊อก (จากระบบผลิต)</h3><div class="scr"><table id="tFinIn"></table></div></div>
    </div>

    <!-- 5. DISPATCH -->
    <div class="panel" id="p-ship">
      <div class="card">
        <h3>สร้างเที่ยวรถจัดส่ง</h3>
        <div class="rf">
          <div><label>วันที่จัดส่ง</label><input id="dpDate" type="date"></div>
          <div><label>ทะเบียนรถ/คนขับ</label><input id="dpTruck" placeholder="เช่น กข-1234 หรือชื่อคนขับ"></div>
        </div>
        <h3 style="margin-top:14px;">รายการสินค้าในเที่ยวนี้</h3>
        <div id="dpItems"></div>
        <div class="rf" style="margin-top:8px;">
          <div><label>เพิ่มออเดอร์</label><select id="dpOrdSel"></select></div>
          <div><label>จำนวน (แพ็ค)</label><input id="dpQty" type="number" inputmode="numeric"></div>
        </div>
        <button class="btn sec w" id="btnAddDpItem">+ เพิ่มลงเที่ยวรถ</button>
        <button class="btn w" id="btnSaveDelivery">บันทึกเที่ยวรถ &amp; ออกบิล</button>
      </div>
      <div class="card"><h3>ประวัติเที่ยวรถ</h3><div id="dpHistory"></div></div>
    </div>

    <!-- 6. SUMMARY -->
    <div class="panel" id="p-sum">
      <div class="card"><h3>ภาพรวมสต๊อกทั้งหมด</h3><div class="sg" id="sumStats"></div></div>
      <div class="card"><h3>⚠ ใกล้หมด</h3><div class="scr"><table id="tLow"></table></div></div>
    </div>

  </div>

  <div class="nav">
    <button class="nb on" data-p="fiber"><span class="ic">🧵</span>ใย</button>
    <button class="nb" data-p="fabric"><span class="ic">🧶</span>ผ้า</button>
    <button class="nb" data-p="bag"><span class="ic">🛍️</span>ถุง</button>
    <button class="nb" data-p="fin"><span class="ic">📦</span>สินค้า</button>
    <button class="nb" data-p="ship"><span class="ic">🚚</span>จัดส่ง</button>
    <button class="nb" data-p="sum"><span class="ic">📊</span>ภาพรวม</button>
  </div>

  <div class="toast" id="toast"></div>
  <div class="printbill" id="printBill"></div>
</div>

<script>
/* ==========================================================================
   SUPABASE STORAGE SHIM — ใช้โปรเจกต์เดียวกับระบบผลิต ข้อมูลจึงเชื่อมกันอัตโนมัติ
   ========================================================================== */
const SUPABASE_URL = 'https://tekhjdnbfncfvpwejlni.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRla2hqZG5iZm5jZnZwd2VqbG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5NjgzNDIsImV4cCI6MjEwMTU0NDM0Mn0.bOO7i_NyD-noFzyPjs22R0M2wGlUznViV-_YjOTqbak';
(function setupSupabaseStorage(){
  const needsSetup = SUPABASE_URL.includes('YOUR-PROJECT-REF') || SUPABASE_ANON_KEY.includes('YOUR-ANON-PUBLIC-KEY');
  const base = SUPABASE_URL.replace(/\/$/,'') + '/rest/v1/kv_store';
  const headers = () => ({ 'apikey': SUPABASE_ANON_KEY, 'Authorization': 'Bearer ' + SUPABASE_ANON_KEY, 'Content-Type': 'application/json' });
  async function get(key){
    const r = await fetch(base + '?id=eq.' + encodeURIComponent(key) + '&select=value', { headers: headers() });
    if (!r.ok) throw new Error('Supabase get failed: HTTP ' + r.status + ' ' + (await r.text()).slice(0,150));
    const rows = await r.json();
    if (!rows.length) return null;
    return { key: key, value: rows[0].value, shared: true };
  }
  async function set(key, value){
    const r = await fetch(base, { method: 'POST',
      headers: Object.assign(headers(), { 'Prefer': 'resolution=merge-duplicates,return=minimal' }),
      body: JSON.stringify([{ id: key, value: value, shared: true, updated_at: new Date().toISOString() }]) });
    if (!r.ok) throw new Error('Supabase set failed: HTTP ' + r.status + ' ' + (await r.text()).slice(0,150));
    return { key: key, value: value, shared: true };
  }
  if (needsSetup){
    window.storage = null;
    document.addEventListener('DOMContentLoaded', () => {
      const b = document.createElement('div');
      b.style.cssText='position:fixed;inset:0;background:#10151c;color:#f2ede3;z-index:9999;display:flex;align-items:center;justify-content:center;padding:24px;font-family:sans-serif;text-align:center;';
      b.innerHTML='<div style="max-width:420px;"><div style="font-size:40px;">⚠️</div><h2>ยังไม่ได้ตั้งค่า Supabase</h2></div>';
      document.body.appendChild(b);
    });
    return;
  }
  window.storage = { get, set };
})();
</script>

<script>
(function(){
  'use strict';
  const $ = id => document.getElementById(id);
  const esc = s => (s==null?'':String(s)).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const uid = () => Date.now().toString(36)+Math.random().toString(36).slice(2,7);
  const r3 = n => Math.round(n*1000)/1000;
  const r2 = n => Math.round(n*100)/100;
  function localISO(d){ d=d||new Date(); const p=n=>String(n).padStart(2,'0');
    return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())+'T'+p(d.getHours())+':'+p(d.getMinutes())+':'+p(d.getSeconds()); }
  function hhmm(iso){ return iso.slice(11,19); }
  function ymd(iso){ return iso.slice(0,10); }
  function todayStr(){ return localISO().slice(0,10); }

  /* ---------- PURE CALC (unit-tested) ---------- */
  const CALC = {
    rawStock(receipts,withdrawals){
      const m={};
      (receipts||[]).forEach(r=>{ m[r.fiberName]=m[r.fiberName]||{received:0,used:0}; m[r.fiberName].received=r3(m[r.fiberName].received+(+r.kg||0)); });
      (withdrawals||[]).forEach(w=>{ m[w.fiberName]=m[w.fiberName]||{received:0,used:0}; m[w.fiberName].used=r3(m[w.fiberName].used+(+w.kg||0)); });
      return Object.entries(m).map(([name,v])=>({name,received:v.received,used:v.used,stock:r3(v.received-v.used)}));
    },
    rollsAvailable(receipts, cuts, waste){
      const m={};
      (receipts||[]).forEach(r=>{ m[r.fabricType]=m[r.fabricType]||{received:0,cut:0,waste:0}; m[r.fabricType].received+=(+r.rolls||0); });
      (cuts||[]).forEach(c=>{ m[c.fabricType]=m[c.fabricType]||{received:0,cut:0,waste:0}; m[c.fabricType].cut+=(+c.rollsUsed||1); });
      (waste||[]).forEach(w=>{ if(w.unit!=='roll') return; m[w.fabricType]=m[w.fabricType]||{received:0,cut:0,waste:0}; m[w.fabricType].waste+=(+w.qty||0); });
      return Object.entries(m).map(([fabricType,v])=>({ fabricType, received:v.received, cut:v.cut, waste:v.waste, available: v.received-v.cut-v.waste }));
    },
    cutBySize(cuts){
      const m={}; (cuts||[]).forEach(c=>(c.rows||[]).forEach(row=>{ m[row.size]=(m[row.size]||0)+(+row.qty||0); })); return m;
    },
    sentBySize(sewSent){
      const m={}; (sewSent||[]).forEach(s=>{ m[s.size]=(m[s.size]||0)+(+s.qty||0); }); return m;
    },
    consumedBySize(prodLines, orderFabricMap){
      const m={};
      (prodLines||[]).forEach(l=>{ const size=(orderFabricMap||{})[l.orderId]; if(!size) return; m[size]=(m[size]||0)+(+l.piecesPerPack||0); });
      return m;
    },
    fabricPipeline(receipts,cuts,sewSent,waste,prodLines,orderFabricMap){
      const cutM=CALC.cutBySize(cuts), sentM=CALC.sentBySize(sewSent), usedM=CALC.consumedBySize(prodLines,orderFabricMap);
      const sizes=new Set([...Object.keys(cutM),...Object.keys(sentM),...Object.keys(usedM)]);
      const bySize=Array.from(sizes).map(size=>{
        const cut=cutM[size]||0, sent=sentM[size]||0, used=usedM[size]||0;
        return { size, cut, awaitingSewing:r2(cut-sent), sent, readyStock:r2(sent-used), used };
      });
      return { rolls: CALC.rollsAvailable(receipts,cuts,waste), bySize };
    },
    bagConsumption(prodLines, orderBagMap, kind){
      const m={};
      (prodLines||[]).forEach(l=>{
        const map=(orderBagMap||{})[l.orderId]; if(!map) return;
        const name = kind==='zip' ? map.zipName : map.packName; if(!name) return;
        const qty = kind==='zip' ? (+l.piecesPerPack||0) : 1;
        m[name]=(m[name]||0)+qty;
      });
      return m;
    },
    bagStock(receipts, prodLines, orderBagMap, kind){
      const recv={}; (receipts||[]).filter(r=>r.kind===kind).forEach(r=>{ recv[r.name]=(recv[r.name]||0)+(+r.qty||0); });
      const used=CALC.bagConsumption(prodLines,orderBagMap,kind);
      const names=new Set([...Object.keys(recv),...Object.keys(used)]);
      return Array.from(names).map(name=>({ name, received:recv[name]||0, used:used[name]||0, stock:r2((recv[name]||0)-(used[name]||0)) }));
    },
    finStock(producedByOrder, shipments){
      const m={};
      Object.entries(producedByOrder||{}).forEach(([id,qty])=>{ m[id]=m[id]||{produced:0,shipped:0}; m[id].produced=qty; });
      (shipments||[]).forEach(s=>{ m[s.orderId]=m[s.orderId]||{produced:0,shipped:0}; m[s.orderId].shipped=r2(m[s.orderId].shipped+(+s.qty||0)); });
      return Object.entries(m).map(([orderId,v])=>({ orderId, produced:v.produced, shipped:v.shipped, stock:r2(v.produced-v.shipped) }));
    },
    fifoLotRef(prodLines, alreadyShipped, qty){
      const sorted=(prodLines||[]).slice().sort((a,b)=>a.time<b.time?-1:1);
      const slice=sorted.slice(alreadyShipped, alreadyShipped+qty);
      if(!slice.length) return { seqFrom:null, seqTo:null, dateFrom:null, dateTo:null, count:0, short: qty };
      const seqs=slice.map(l=>l.seq), dates=slice.map(l=>l.time.slice(0,10));
      return { seqFrom:Math.min(...seqs), seqTo:Math.max(...seqs), dateFrom:dates[0], dateTo:dates[dates.length-1], count:slice.length, short:Math.max(0,qty-slice.length) };
    }
  };

  /* ---------- STATE ---------- */
  let S = { fiberReceipts:[], fiberTh:{}, fabricReceipts:[], cuts:[], sewSent:[], waste:[], orderFabricMap:{},
            bagReceipts:[], orderBagMap:{}, shipments:[], deliveries:[] };
  let PROD = { orders:[], wd:[], line:[] };
  let current='fiber', lastHash='';

  const hasStore = !!(window.storage && window.storage.get && window.storage.set);
  let storeDown = !hasStore;
  const pending={}, inflight={};
  const KEYMAP = {
    v3s_fiber:      ()=>({receipts:S.fiberReceipts, th:S.fiberTh}),
    v3s_fabric:     ()=>({receipts:S.fabricReceipts, cuts:S.cuts, sewSent:S.sewSent, waste:S.waste, orderMap:S.orderFabricMap}),
    v3s_bag:        ()=>({receipts:S.bagReceipts, orderMap:S.orderBagMap}),
    v3s_fin:        ()=>({shipments:S.shipments, deliveries:S.deliveries})
  };
  function setSaveState(state,msg){
    const el=$('saveState'); if(!el) return;
    if(state==='saving'){ el.className='savechip saving'; el.textContent='กำลังบันทึก…'; }
    else if(state==='ok'){ el.className='savechip ok'; el.textContent='บันทึกแล้ว ✓'; }
    else { el.className='savechip bad'; el.textContent='⚠ ยังบันทึกไม่สำเร็จ — แตะเพื่อลองใหม่'+(msg?' ('+msg+')':''); }
  }
  async function flush(k,attempt){
    attempt=attempt||0; if(inflight[k]) return; if(!(k in pending)) return;
    const data=pending[k]; delete pending[k]; inflight[k]=true; setSaveState('saving');
    try{
      if(!hasStore) throw new Error('no storage');
      await window.storage.set(k,JSON.stringify(data),true);
      inflight[k]=false; storeDown=false;
      await window.storage.set('v3s_pulse',Date.now()+'',true).catch(()=>{});
      if(Object.keys(pending).length) flush(Object.keys(pending)[0]); else setSaveState('ok');
    }catch(e){
      inflight[k]=false; pending[k]=data;
      if(attempt<6){ setTimeout(()=>flush(k,attempt+1), Math.min(15000,600*Math.pow(2,attempt))); setSaveState('saving'); }
      else { storeDown=true; setSaveState('bad', (e&&e.message)?String(e.message).slice(0,60):''); }
    }
  }
  function put(k){ pending[k]=KEYMAP[k](); return flush(k); }
  const saveFiber=()=>put('v3s_fiber'), saveFabric=()=>put('v3s_fabric'), saveBag=()=>put('v3s_bag'), saveFin=()=>put('v3s_fin');

  async function rawGet(k){ if(!hasStore) return null; try{ const r=await window.storage.get(k,true); return r?r.value:null; }catch(e){ return null; } }
  async function readAll(){
    const [fi,fa,bg,fn,ord,fd,ln] = await Promise.all([
      rawGet('v3s_fiber'), rawGet('v3s_fabric'), rawGet('v3s_bag'), rawGet('v3s_fin'),
      rawGet('v3_orders'), rawGet('v3_feed'), rawGet('v3_line')
    ]);
    const hash=[fi,fa,bg,fn,ord,fd,ln].map(x=>x||'').join('|');
    const parse=(s,f)=>{ try{ return s?JSON.parse(s):f; }catch(e){ return f; } };
    const Pf=parse(fi,{}), Pa=parse(fa,{}), Pb=parse(bg,{}), Pn=parse(fn,{});
    S.fiberReceipts=Pf.receipts||[]; S.fiberTh=Pf.th||{};
    S.fabricReceipts=Pa.receipts||[]; S.cuts=Pa.cuts||[]; S.sewSent=Pa.sewSent||[]; S.waste=Pa.waste||[]; S.orderFabricMap=Pa.orderMap||{};
    S.bagReceipts=Pb.receipts||[]; S.orderBagMap=Pb.orderMap||{};
    S.shipments=Pn.shipments||[]; S.deliveries=Pn.deliveries||[];
    const A=parse(ord,{orders:[]}), B=parse(fd,{wd:[]}), C=parse(ln,{line:[]});
    PROD.orders=A.orders||[]; PROD.wd=B.wd||[]; PROD.line=C.line||[];
    return hash;
  }

  let toastT;
  function toast(msg){ const t=$('toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('show'),2400); }
  const orderById = id => PROD.orders.find(o=>o.id===id) || null;
  function orderLabel(id){ const o=orderById(id); return o? o.customer+' — '+o.code : '(ออเดอร์ถูกลบแล้ว)'; }
  function producedByOrder(){ const m={}; PROD.line.forEach(l=>{ m[l.orderId]=(m[l.orderId]||0)+1; }); return m; }

  /* ---------- NAV ---------- */
  const PANELS=['fiber','fabric','bag','fin','ship','sum'];
  function show(p){
    current=p;
    PANELS.forEach(x=>$('p-'+x).classList.toggle('show',x===p));
    document.querySelectorAll('.nb').forEach(b=>b.classList.toggle('on',b.dataset.p===p));
    renderPanel();
  }
  document.querySelectorAll('.nb').forEach(b=>b.addEventListener('click',()=>show(b.dataset.p)));
  function renderPanel(){
    if(current==='fiber') rFiber();
    else if(current==='fabric') rFabric();
    else if(current==='bag') rBag();
    else if(current==='fin') rFin();
    else if(current==='ship') rShip();
    else if(current==='sum') rSum();
  }

  /* ---------- 1. FIBER ---------- */
  function allFiberNames(){
    const set=new Set();
    PROD.orders.forEach(o=>(o.fibers||[]).forEach(f=>set.add(f.name)));
    PROD.wd.forEach(w=>set.add(w.fiberName));
    S.fiberReceipts.forEach(r=>set.add(r.fiberName));
    return Array.from(set).filter(Boolean).sort((a,b)=>a.localeCompare(b,'th'));
  }
  function rFiber(){
    const stock=CALC.rawStock(S.fiberReceipts, PROD.wd);
    const names=allFiberNames(); const known=new Set(stock.map(s=>s.name));
    names.forEach(n=>{ if(!known.has(n)) stock.push({name:n,received:0,used:0,stock:0}); });
    stock.sort((a,b)=>a.name.localeCompare(b.name,'th'));
    $('fiberCards').innerHTML = stock.length ? stock.map(s=>{
      const th=+S.fiberTh[s.name]||0, low=th>0&&s.stock<th;
      return '<div class="scard'+(low?' lowstock':'')+'"><div class="nm">'+esc(s.name)+(low?' <span class="bdg bad">ใกล้หมด</span>':'')+'</div>'+
        '<div class="n">'+s.stock+' <span style="font-size:13px;color:#ffffff;">กก.</span></div>'+
        '<div class="l">รับเข้า '+s.received+' กก. · เบิกใช้ '+s.used+' กก.'+(th>0?' · เตือนต่ำกว่า '+th:'')+'</div></div>';
    }).join('') : '<div class="empty">ยังไม่มีข้อมูล</div>';

    const nms=allFiberNames();
    $('rwSel').innerHTML='<option value="">— เลือกใย —</option>'+nms.map(n=>'<option value="'+esc(n)+'">'+esc(n)+'</option>').join('')+'<option value="__new__">+ พิมพ์ชื่อใหม่…</option>';
    $('dlRwFiber').innerHTML=nms.map(n=>'<option value="'+esc(n)+'"></option>').join('');
    $('thSel').innerHTML=nms.map(n=>'<option value="'+esc(n)+'">'+esc(n)+'</option>').join('');

    $('tRw').innerHTML=S.fiberReceipts.length?'<tr><th>เวลา</th><th>ใย</th><th>ลอต</th><th>กก.</th><th>ผู้ขาย</th><th></th></tr>'+
      S.fiberReceipts.slice().reverse().map(r=>'<tr><td>'+ymd(r.time)+' '+hhmm(r.time)+'</td><td>'+esc(r.fiberName)+'</td><td>'+esc(r.lot||'—')+
      '</td><td>'+r.kg+'</td><td>'+esc(r.supplier||'—')+'</td><td><button class="x" data-d="'+r.id+'">✕</button></td></tr>').join('')
      :'<tr><td class="empty">ยังไม่มีข้อมูล</td></tr>';
    $('tRw').querySelectorAll('[data-d]').forEach(b=>b.onclick=async()=>{ if(!confirm('ลบ?'))return; S.fiberReceipts=S.fiberReceipts.filter(x=>x.id!==b.dataset.d); await saveFiber(); rFiber(); toast('ลบแล้ว'); });

    const useRows=PROD.wd.slice().sort((a,b)=>a.time<b.time?1:-1).slice(0,80);
    $('tRwUse').innerHTML=useRows.length?'<tr><th>เวลา</th><th>ออเดอร์</th><th>ใย</th><th>ก้อนที่</th><th>กก.</th></tr>'+
      useRows.map(w=>'<tr><td>'+ymd(w.time)+' '+hhmm(w.time)+'</td><td>'+esc(orderLabel(w.orderId))+'</td><td>'+esc(w.fiberName)+'</td><td>'+esc(w.seq||'—')+'</td><td>'+w.kg+'</td></tr>').join('')
      :'<tr><td class="empty">ยังไม่มีการเบิกใย</td></tr>';
  }
  $('rwSel').onchange=function(){ const v=this.value,t=$('rwName'); if(v==='__new__'){t.style.display='block';t.value='';}else{t.style.display='none';t.value=v;} };
  $('btnRw').onclick=async()=>{
    const n=$('rwName').value.trim(), kg=+$('rwKg').value;
    if(!n||!kg){ toast('กรอกชื่อใยและน้ำหนัก'); return; }
    S.fiberReceipts.push({id:uid(),time:localISO(),fiberName:n,kg,lot:$('rwLot').value.trim(),supplier:$('rwSupplier').value.trim(),note:$('rwNote').value.trim()});
    await saveFiber();
    ['rwLot','rwSupplier','rwNote','rwKg'].forEach(id=>$(id).value='');
    $('rwSel').value=''; $('rwName').value=''; $('rwName').style.display='none';
    rFiber(); toast('บันทึกรับเข้าใยแล้ว');
  };
  $('btnTh').onclick=async()=>{ const n=$('thSel').value; if(!n){toast('เลือกใยก่อน');return;} S.fiberTh[n]=+$('thKg').value||0; await saveFiber(); $('thKg').value=''; rFiber(); toast('ตั้งจุดเตือนแล้ว'); };

  /* ---------- 2. FABRIC ---------- */
  function allFabricTypes(){
    const set=new Set(); S.fabricReceipts.forEach(r=>set.add(r.fabricType)); S.cuts.forEach(c=>set.add(c.fabricType));
    return Array.from(set).filter(Boolean).sort((a,b)=>a.localeCompare(b,'th'));
  }
  function allSizes(){
    const set=new Set();
    S.cuts.forEach(c=>(c.rows||[]).forEach(r=>set.add(r.size)));
    S.sewSent.forEach(s=>set.add(s.size));
    return Array.from(set).filter(Boolean).sort();
  }
  function rFabric(){
    const rolls=CALC.rollsAvailable(S.fabricReceipts,S.cuts,S.waste);
    $('rollCards').innerHTML=rolls.length?rolls.map(r=>
      '<div class="scard'+(r.available<=2?' lowstock':'')+'"><div class="nm">'+esc(r.fabricType)+'</div>'+
      '<div class="n">'+r.available+' <span style="font-size:13px;color:#ffffff;">ม้วน</span></div>'+
      '<div class="l">รับเข้า '+r.received+' · ตัดไปแล้ว '+r.cut+' · เสีย '+r.waste+' ม้วน</div></div>').join('')
      :'<div class="empty">ยังไม่มีข้อมูลม้วนผ้า</div>';

    const types=allFabricTypes();
    ['fabRecSel','cutFabSel','wasteFabSel'].forEach(id=>{
      const keep=$(id).value;
      $(id).innerHTML=(id==='fabRecSel'?'<option value="">— เลือกชนิดผ้า —</option>':'')+
        types.map(t=>'<option value="'+esc(t)+'">'+esc(t)+'</option>').join('')+
        (id==='fabRecSel'?'<option value="__new__">+ พิมพ์ชนิดใหม่…</option>':'');
      if(types.includes(keep)) $(id).value=keep;
    });
    $('dlFabric').innerHTML=types.map(t=>'<option value="'+esc(t)+'"></option>').join('');

    if(!$('cutRows').children.length) addCutRow();

    const pipe=CALC.fabricPipeline(S.fabricReceipts,S.cuts,S.sewSent,S.waste,PROD.line,S.orderFabricMap);
    $('tCutStock').innerHTML=pipe.bySize.length?'<tr><th>ไซซ์</th><th>ตัดได้ (ชิ้น)</th><th>รอส่งเย็บ</th><th>ส่งเย็บแล้ว</th><th>ใช้ผลิตแล้ว</th><th>พร้อมผลิต คงเหลือ</th></tr>'+
      pipe.bySize.map(s=>'<tr><td>'+esc(s.size)+'</td><td>'+s.cut+'</td><td>'+s.awaitingSewing+'</td><td>'+s.sent+'</td><td>'+s.used+
        '</td><td><b style="color:'+(s.readyStock<10?'var(--red)':'var(--accent2)')+'">'+s.readyStock+'</b></td></tr>').join('')
      :'<tr><td class="empty">ยังไม่มีการตัดผ้า</td></tr>';

    const sizes=allSizes();
    $('sewSizeSel').innerHTML=sizes.map(s=>'<option value="'+esc(s)+'">'+esc(s)+'</option>').join('');
    $('mapSizeSel').innerHTML=sizes.map(s=>'<option value="'+esc(s)+'">'+esc(s)+'</option>').join('');
    if(!$('mapOrdSel').dataset.init){
      $('mapOrdSel').innerHTML=PROD.orders.map(o=>'<option value="'+o.id+'">'+esc(o.customer)+' — '+esc(o.code)+'</option>').join('');
      $('mapOrdSel').dataset.init='1';
    }
    $('mapFabricList').innerHTML='ผูกไว้แล้ว: '+(Object.keys(S.orderFabricMap).length
      ? Object.entries(S.orderFabricMap).map(([oid,sz])=>esc(orderLabel(oid))+' → '+esc(sz)).join(' | ')
      : 'ยังไม่มี');

    $('tWaste').innerHTML=S.waste.length?'<tr><th>เวลา</th><th>ชนิดผ้า</th><th>หน่วย</th><th>จำนวน</th><th>สาเหตุ</th></tr>'+
      S.waste.slice().reverse().map(w=>'<tr><td>'+ymd(w.time)+'</td><td>'+esc(w.fabricType)+'</td><td>'+(w.unit==='roll'?'ม้วน':'ชิ้น')+'</td><td>'+w.qty+'</td><td>'+esc(w.reason||'')+'</td></tr>').join('')
      :'<tr><td class="empty">ยังไม่มีของเสีย</td></tr>';

    $('tCutHist').innerHTML=S.cuts.length?'<tr><th>เวลา</th><th>ชนิดผ้า</th><th>ม้วนที่</th><th>รายละเอียด</th></tr>'+
      S.cuts.slice().reverse().map(c=>'<tr><td>'+ymd(c.time)+' '+hhmm(c.time)+'</td><td>'+esc(c.fabricType)+'</td><td>'+(c.rollNo||'—')+
        '</td><td>'+(c.rows||[]).map(r=>esc(r.size)+' '+r.qty+'ชิ้น').join(', ')+'</td></tr>').join('')
      :'<tr><td class="empty">ยังไม่มีการตัด</td></tr>';

    $('tSewHist').innerHTML=S.sewSent.length?'<tr><th>เวลา</th><th>ไซซ์</th><th>จำนวน</th><th>หมายเหตุ</th></tr>'+
      S.sewSent.slice().reverse().map(s=>'<tr><td>'+ymd(s.time)+' '+hhmm(s.time)+'</td><td>'+esc(s.size)+'</td><td>'+s.qty+'</td><td>'+esc(s.note||'')+'</td></tr>').join('')
      :'<tr><td class="empty">ยังไม่มีการส่งเย็บ</td></tr>';
  }
  $('fabRecSel').onchange=function(){ const v=this.value,t=$('fabRecName'); if(v==='__new__'){t.style.display='block';t.value='';}else{t.style.display='none';t.value=v;} };
  $('btnFabRec').onclick=async()=>{
    const n=($('fabRecName').style.display==='block'?$('fabRecName').value:$('fabRecSel').value).trim();
    const rolls=+$('fabRecRolls').value;
    if(!n||!rolls){ toast('กรอกชนิดผ้าและจำนวนม้วน'); return; }
    S.fabricReceipts.push({id:uid(),time:localISO(),fabricType:n,rolls,note:$('fabRecNote').value.trim()});
    await saveFabric(); $('fabRecRolls').value=''; $('fabRecNote').value=''; $('fabRecName').style.display='none';
    rFabric(); toast('บันทึกรับเข้าม้วนผ้าแล้ว');
  };

  function addCutRow(size,qty){
    const d=document.createElement('div'); d.className='frow';
    d.innerHTML='<input class="cs" placeholder="ไซซ์ เช่น 18.5x28" value="'+esc(size||'')+'">'+
      '<input class="cq" type="number" inputmode="numeric" placeholder="ชิ้น" style="max-width:90px;" value="'+(qty==null?'':qty)+'">'+
      '<button class="x">✕</button>';
    d.querySelector('.x').onclick=()=>d.remove();
    $('cutRows').appendChild(d);
  }
  $('btnAddCutRow').onclick=()=>addCutRow();
  $('btnCut').onclick=async()=>{
    const fab=$('cutFabSel').value;
    if(!fab){ toast('เลือกชนิดผ้าก่อน'); return; }
    const rows=Array.from(document.querySelectorAll('#cutRows .frow')).map(r=>({ size:r.querySelector('.cs').value.trim(), qty:+r.querySelector('.cq').value||0 })).filter(r=>r.size&&r.qty);
    if(!rows.length){ toast('กรอกไซซ์และจำนวนอย่างน้อย 1 แถว'); return; }
    const cutForType=S.cuts.filter(c=>c.fabricType===fab).length;
    const rollNo=+$('cutRollNo').value || (cutForType+1);
    S.cuts.push({ id:uid(), time:localISO(), fabricType:fab, rollNo, rollsUsed:1, rows, note:$('cutNote').value.trim() });
    await saveFabric();
    $('cutRows').innerHTML=''; addCutRow(); $('cutRollNo').value=''; $('cutNote').value='';
    rFabric(); toast('บันทึกการตัดผ้าแล้ว — ม้วนที่ '+rollNo);
  };
  $('btnSew').onclick=async()=>{
    const size=$('sewSizeSel').value, qty=+$('sewQty').value;
    if(!size||!qty){ toast('เลือกไซซ์และกรอกจำนวน'); return; }
    S.sewSent.push({ id:uid(), time:localISO(), size, qty, note:$('sewNote').value.trim() });
    await saveFabric(); $('sewQty').value=''; $('sewNote').value=''; rFabric(); toast('บันทึกส่งเย็บแล้ว');
  };
  $('btnMapFabric').onclick=async()=>{
    const oid=$('mapOrdSel').value, size=$('mapSizeSel').value;
    if(!oid||!size){ toast('เลือกออเดอร์และไซซ์'); return; }
    S.orderFabricMap[oid]=size; await saveFabric(); rFabric(); toast('ผูกแล้ว — '+orderLabel(oid)+' → '+size);
  };
  $('btnWaste').onclick=async()=>{
    const fab=$('wasteFabSel').value, qty=+$('wasteQty').value;
    if(!fab||!qty){ toast('เลือกชนิดผ้าและกรอกจำนวน'); return; }
    S.waste.push({ id:uid(), time:localISO(), fabricType:fab, unit:$('wasteUnit').value, qty, reason:$('wasteReason').value.trim() });
    await saveFabric(); $('wasteQty').value=''; $('wasteReason').value=''; rFabric(); toast('บันทึกของเสียแล้ว');
  };

  /* ---------- 3. BAGS ---------- */
  function allBagNames(kind){
    const set=new Set(); S.bagReceipts.filter(r=>r.kind===kind).forEach(r=>set.add(r.name)); return Array.from(set).filter(Boolean).sort();
  }
  function rBag(){
    const zip=CALC.bagStock(S.bagReceipts,PROD.line,S.orderBagMap,'zip');
    const pack=CALC.bagStock(S.bagReceipts,PROD.line,S.orderBagMap,'pack');
    $('zipCards').innerHTML=zip.length?zip.map(z=>'<div class="scard'+(z.stock<20?' lowstock':'')+'"><div class="nm">'+esc(z.name)+'</div>'+
      '<div class="n">'+z.stock+' <span style="font-size:13px;color:#ffffff;">ใบ</span></div>'+
      '<div class="l">รับเข้า '+z.received+' · ใช้ไป '+z.used+' ใบ</div></div>').join(''):'<div class="empty">ยังไม่มีข้อมูล</div>';
    $('packCards').innerHTML=pack.length?pack.map(p=>'<div class="scard'+(p.stock<10?' lowstock':'')+'"><div class="nm">'+esc(p.name)+'</div>'+
      '<div class="n">'+p.stock+' <span style="font-size:13px;color:#ffffff;">ใบ</span></div>'+
      '<div class="l">รับเข้า '+p.received+' · ใช้ไป '+p.used+' ใบ</div></div>').join(''):'<div class="empty">ยังไม่มีข้อมูล</div>';

    const zn=allBagNames('zip'), pn=allBagNames('pack');
    $('bagMapZip').innerHTML='<option value="">— ไม่ใช้ถุงซิล —</option>'+zn.map(n=>'<option value="'+esc(n)+'">'+esc(n)+'</option>').join('');
    $('bagMapPack').innerHTML='<option value="">— ไม่ใช้ถุงแพ็ค —</option>'+pn.map(n=>'<option value="'+esc(n)+'">'+esc(n)+'</option>').join('');
    if(!$('bagMapOrd').dataset.init){
      $('bagMapOrd').innerHTML=PROD.orders.map(o=>'<option value="'+o.id+'">'+esc(o.customer)+' — '+esc(o.code)+'</option>').join('');
      $('bagMapOrd').dataset.init='1';
    }
    $('bagMapList').innerHTML='ผูกไว้แล้ว: '+(Object.keys(S.orderBagMap).length
      ? Object.entries(S.orderBagMap).map(([oid,m])=>esc(orderLabel(oid))+' → ซิล:'+esc(m.zipName||'-')+' / แพ็ค:'+esc(m.packName||'-')).join(' | ')
      : 'ยังไม่มี');

    const curKind=$('bagKind').value;
    const existing=allBagNames(curKind);
    $('bagNameSel').innerHTML='<option value="">— เลือก —</option>'+existing.map(n=>'<option value="'+esc(n)+'">'+esc(n)+'</option>').join('')+'<option value="__new__">+ พิมพ์ชื่อใหม่…</option>';

    $('tBagHist').innerHTML=S.bagReceipts.length?'<tr><th>เวลา</th><th>ประเภท</th><th>ชื่อ</th><th>ใบ</th><th>กก.</th><th>หมายเหตุ</th></tr>'+
      S.bagReceipts.slice().reverse().map(r=>'<tr><td>'+ymd(r.time)+' '+hhmm(r.time)+'</td><td>'+(r.kind==='zip'?'ถุงซิล':'ถุงแพ็ค')+'</td><td>'+esc(r.name)+
        '</td><td>'+r.qty+'</td><td>'+(r.kg||'—')+'</td><td>'+esc(r.note||'')+'</td></tr>').join('')
      :'<tr><td class="empty">ยังไม่มีข้อมูล</td></tr>';
  }
  $('bagKind').onchange=rBag;
  $('bagNameSel').onchange=function(){ const v=this.value,t=$('bagNameNew'); if(v==='__new__'){t.style.display='block';t.value='';}else{t.style.display='none';t.value=v;} };
  $('btnBag').onclick=async()=>{
    const kind=$('bagKind').value;
    const n=($('bagNameNew').style.display==='block'?$('bagNameNew').value:$('bagNameSel').value).trim();
    const qty=+$('bagQty').value;
    if(!n||!qty){ toast('กรอกชื่อและจำนวน'); return; }
    S.bagReceipts.push({ id:uid(), time:localISO(), kind, name:n, qty, kg:+$('bagKg').value||null, note:$('bagNote').value.trim() });
    await saveBag(); $('bagQty').value=''; $('bagKg').value=''; $('bagNote').value=''; $('bagNameNew').style.display='none';
    rBag(); toast('บันทึกรับเข้าถุงแล้ว');
  };
  $('btnBagMap').onclick=async()=>{
    const oid=$('bagMapOrd').value;
    if(!oid){ toast('เลือกออเดอร์ก่อน'); return; }
    S.orderBagMap[oid]={ zipName:$('bagMapZip').value||'', packName:$('bagMapPack').value||'' };
    await saveBag(); rBag(); toast('ผูกถุงกับออเดอร์แล้ว');
  };

  /* ---------- 4. FINISHED GOODS ---------- */
  function rFin(){
    const produced=producedByOrder();
    const stock=CALC.finStock(produced, S.shipments);
    stock.sort((a,b)=>orderLabel(a.orderId).localeCompare(orderLabel(b.orderId),'th'));
    $('finCards').innerHTML=stock.length?stock.map(s=>{ const o=orderById(s.orderId);
      return '<div class="scard"><div class="nm">'+esc(orderLabel(s.orderId))+(o?' <span class="bdg ok">'+esc(o.productType||'ใย')+'</span>':'')+'</div>'+
      '<div class="n">'+s.stock+' <span style="font-size:13px;color:#ffffff;">แพ็ค</span></div>'+
      '<div class="l">ผลิตได้ '+s.produced+' · ส่งออกแล้ว '+s.shipped+' แพ็ค</div></div>'; }).join(''):'<div class="empty">ยังไม่มีข้อมูล</div>';

    const inRows=PROD.line.slice().sort((a,b)=>a.time<b.time?1:-1).slice(0,80);
    $('tFinIn').innerHTML=inRows.length?'<tr><th>เวลา</th><th>ออเดอร์</th><th>ลำดับ</th><th>น้ำหนักจริง</th></tr>'+
      inRows.map(l=>'<tr><td>'+ymd(l.time)+' '+hhmm(l.time)+'</td><td>'+esc(orderLabel(l.orderId))+'</td><td>'+l.seq+'</td><td>'+(l.actualWeight==null?'—':l.actualWeight+' กก.')+'</td></tr>').join('')
      :'<tr><td class="empty">ยังไม่มีข้อมูล</td></tr>';
  }

  /* ---------- 5. DISPATCH (FIFO + ออกบิล) ---------- */
  let dpItems=[];
  function rShip(){
    if(!$('dpDate').value) $('dpDate').value=todayStr();
    if(!$('dpOrdSel').dataset.init){
      const stock=CALC.finStock(producedByOrder(),S.shipments);
      $('dpOrdSel').innerHTML=stock.filter(s=>s.stock>0).map(s=>'<option value="'+s.orderId+'">'+esc(orderLabel(s.orderId))+' (เหลือ '+s.stock+' แพ็ค)</option>').join('');
      $('dpOrdSel').dataset.init='1';
    }
    $('dpItems').innerHTML = dpItems.length ? dpItems.map((it,i)=>
      '<div class="cartrow"><b class="kn" style="color:var(--accent2)">'+esc(orderLabel(it.orderId))+'</b> — '+it.qty+' แพ็ค'+
      (it.ref.count?' <span class="bdg ok">อ้างอิงลำดับ '+it.ref.seqFrom+'-'+it.ref.seqTo+' ('+it.ref.dateFrom+(it.ref.dateFrom!==it.ref.dateTo?' ถึง '+it.ref.dateTo:'')+')</span>':'')+
      (it.ref.short?' <span class="bdg warn">ขาดสต๊อก '+it.ref.short+' แพ็ค</span>':'')+
      ' <button class="x" data-rm="'+i+'">✕</button></div>').join('')
      : '<div class="empty">ยังไม่มีรายการในเที่ยวนี้</div>';
    $('dpItems').querySelectorAll('[data-rm]').forEach(b=>b.onclick=()=>{ dpItems.splice(+b.dataset.rm,1); rShip(); });

    $('dpHistory').innerHTML = S.deliveries.length ? S.deliveries.slice().reverse().map(d=>
      '<div class="card" style="background:var(--panel2); margin-bottom:8px;">'+
      '<div class="kn" style="font-size:14px;">'+d.date+' — '+esc(d.truck||'ไม่ระบุรถ')+'</div>'+
      '<table style="margin-top:6px;"><tr><th>ลูกค้า/ออเดอร์</th><th>จำนวน</th><th>อ้างอิงลำดับผลิต</th></tr>'+
      d.items.map(it=>'<tr><td>'+esc(orderLabel(it.orderId))+'</td><td>'+it.qty+' แพ็ค</td><td>'+
        (it.refSeqFrom!=null? it.refSeqFrom+'-'+it.refSeqTo+' ('+it.refDateFrom+')' : '—')+'</td></tr>').join('')+
      '</table><button class="btn sec sm" style="margin-top:8px;" data-print="'+d.id+'">🖨 พิมพ์บิลนี้อีกครั้ง</button></div>'
    ).join('') : '<div class="empty">ยังไม่มีเที่ยวรถ</div>';
    $('dpHistory').querySelectorAll('[data-print]').forEach(b=>b.onclick=()=>printDelivery(S.deliveries.find(d=>d.id===b.dataset.print)));
  }
  $('btnAddDpItem').onclick=()=>{
    const oid=$('dpOrdSel').value, qty=+$('dpQty').value;
    if(!oid||!qty){ toast('เลือกออเดอร์และกรอกจำนวน'); return; }
    const alreadyInThisTrip=dpItems.filter(x=>x.orderId===oid).reduce((s,x)=>s+x.qty,0);
    const priorShipped=S.shipments.filter(s=>s.orderId===oid).reduce((s,x)=>s+(+x.qty||0),0);
    const orderLines=PROD.line.filter(l=>l.orderId===oid);
    const ref=CALC.fifoLotRef(orderLines, priorShipped+alreadyInThisTrip, qty);
    if(ref.short>0 && !confirm('สต๊อกออเดอร์นี้ไม่พอ ขาดอยู่ '+ref.short+' แพ็ค ยืนยันจะเพิ่มลงเที่ยวรถหรือไม่?')) return;
    dpItems.push({ orderId:oid, qty, ref });
    $('dpQty').value=''; rShip(); toast('เพิ่มลงเที่ยวรถแล้ว');
  };
  $('btnSaveDelivery').onclick=async()=>{
    if(!dpItems.length){ toast('ยังไม่มีรายการในเที่ยวรถ'); return; }
    const delivery={ id:uid(), date:$('dpDate').value||todayStr(), truck:$('dpTruck').value.trim(), createdAt:localISO(),
      items:dpItems.map(it=>({ orderId:it.orderId, qty:it.qty, refSeqFrom:it.ref.seqFrom, refSeqTo:it.ref.seqTo, refDateFrom:it.ref.dateFrom, refDateTo:it.ref.dateTo })) };
    S.deliveries.push(delivery);
    dpItems.forEach(it=>{ S.shipments.push({ id:uid(), time:localISO(), orderId:it.orderId, qty:it.qty, to:delivery.truck, note:'เที่ยวรถ '+delivery.date, deliveryId:delivery.id }); });
    await saveFin();
    printDelivery(delivery);
    dpItems=[]; $('dpTruck').value=''; $('dpOrdSel').dataset.init=''; rShip(); toast('บันทึกเที่ยวรถและออกบิลแล้ว');
  };
  function printDelivery(d){
    if(!d) return;
    const byCustomer={};
    d.items.forEach(it=>{ const o=orderById(it.orderId); const cust=o?o.customer:'(ไม่ทราบ)'; byCustomer[cust]=byCustomer[cust]||[]; byCustomer[cust].push(it); });
    let html='<h2>ใบส่งของ</h2><p>วันที่จัดส่ง: '+esc(d.date)+' &nbsp; รถ/คนขับ: '+esc(d.truck||'-')+'</p>';
    Object.entries(byCustomer).forEach(([cust,items])=>{
      html+='<h3>ลูกค้า: '+esc(cust)+'</h3><table><tr><th>รหัสงาน</th><th>จำนวน (แพ็ค)</th><th>อ้างอิงลำดับผลิต</th></tr>'+
        items.map(it=>{ const o=orderById(it.orderId);
          return '<tr><td>'+esc(o?o.code:'-')+'</td><td>'+it.qty+'</td><td>'+(it.refSeqFrom!=null?it.refSeqFrom+'-'+it.refSeqTo+' ('+it.refDateFrom+')':'-')+'</td></tr>'; }).join('')+'</table>';
    });
    $('printBill').innerHTML=html;
    setTimeout(()=>window.print(),100);
  }

  /* ---------- 6. SUMMARY ---------- */
  function rSum(){
    const rawS=CALC.rawStock(S.fiberReceipts,PROD.wd);
    const finS=CALC.finStock(producedByOrder(),S.shipments);
    const zipS=CALC.bagStock(S.bagReceipts,PROD.line,S.orderBagMap,'zip');
    const packS=CALC.bagStock(S.bagReceipts,PROD.line,S.orderBagMap,'pack');
    const pipe=CALC.fabricPipeline(S.fabricReceipts,S.cuts,S.sewSent,S.waste,PROD.line,S.orderFabricMap);

    $('sumStats').innerHTML=
      '<div class="stat"><div class="v">'+r3(rawS.reduce((s,x)=>s+x.stock,0))+'</div><div class="l">ใยคงเหลือรวม (กก.)</div></div>'+
      '<div class="stat"><div class="v">'+pipe.rolls.reduce((s,x)=>s+x.available,0)+'</div><div class="l">ม้วนผ้ายังไม่ตัด</div></div>'+
      '<div class="stat"><div class="v">'+pipe.bySize.reduce((s,x)=>s+Math.max(0,x.readyStock),0)+'</div><div class="l">ผ้าเย็บพร้อมผลิต (ชิ้น)</div></div>'+
      '<div class="stat"><div class="v">'+zipS.reduce((s,x)=>s+x.stock,0)+'</div><div class="l">ถุงซิลคงเหลือรวม (ใบ)</div></div>'+
      '<div class="stat"><div class="v">'+packS.reduce((s,x)=>s+x.stock,0)+'</div><div class="l">ถุงแพ็คคงเหลือรวม (ใบ)</div></div>'+
      '<div class="stat"><div class="v">'+finS.reduce((s,x)=>s+x.stock,0)+'</div><div class="l">สินค้าสำเร็จรูปคงเหลือ (แพ็ค)</div></div>';

    const low=[];
    rawS.forEach(r=>{ const th=+S.fiberTh[r.name]||0; if(th>0&&r.stock<th) low.push({name:'ใย: '+r.name, stock:r.stock+' กก.', th:th+' กก.'}); });
    pipe.rolls.forEach(r=>{ if(r.available<=2) low.push({name:'ผ้า: '+r.fabricType, stock:r.available+' ม้วน', th:'2 ม้วน'}); });
    zipS.forEach(z=>{ if(z.stock<20) low.push({name:'ถุงซิล: '+z.name, stock:z.stock+' ใบ', th:'20 ใบ'}); });
    packS.forEach(p=>{ if(p.stock<10) low.push({name:'ถุงแพ็ค: '+p.name, stock:p.stock+' ใบ', th:'10 ใบ'}); });
    $('tLow').innerHTML=low.length?'<tr><th>รายการ</th><th>คงเหลือ</th><th>เกณฑ์เตือน</th></tr>'+
      low.map(l=>'<tr><td>'+esc(l.name)+'</td><td><b style="color:var(--red)">'+esc(l.stock)+'</b></td><td>'+esc(l.th)+'</td></tr>').join('')
      :'<tr><td class="empty">ไม่มีรายการใกล้หมด</td></tr>';
  }

  /* ---------- CLOCK + SYNC ---------- */
  setInterval(()=>{ $('clock').textContent=new Date().toLocaleString('th-TH',{dateStyle:'full',timeStyle:'medium'}); },1000);
  let lastPulse=null, pollMs=3000, syncBusy=false;
  async function syncNow(force){
    if(syncBusy||!hasStore) return;
    if(!force && document.hidden) return;
    syncBusy=true;
    try{
      const p=await rawGet('v3s_pulse'); const po=await rawGet('v3_pulse');
      const combined=(p||'')+'|'+(po||'');
      if(combined===lastPulse){ pollMs=3000; syncBusy=false; return; }
      const h=await readAll(); lastPulse=combined; pollMs=3000;
      if(h!==lastHash){ lastHash=h; renderPanel(); }
    }catch(e){ pollMs=Math.min(30000,pollMs*2); }
    syncBusy=false;
  }
  (function loop(){ setTimeout(()=>{ syncNow().then(loop); }, pollMs); })();
  document.addEventListener('visibilitychange',()=>{ if(!document.hidden){ pollMs=3000; syncNow(true); } });
  $('saveState').onclick=()=>{ if(storeDown||Object.keys(pending).length){ Object.keys(pending).forEach(k=>flush(k)); toast('กำลังลองบันทึกใหม่…'); } };

  (async function init(){
    lastHash=await readAll();
    if(!hasStore){ storeDown=true; setSaveState('bad','ไม่รองรับ'); } else setSaveState('ok');
    show('fiber');
  })();
})();
</script>
