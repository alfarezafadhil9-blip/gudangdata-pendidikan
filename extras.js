(function(){
  const setup=()=>{
    const anchor=document.querySelector('.note-section');
    if(!anchor||document.querySelector('.quick-tools'))return;
    const section=document.createElement('section');
    section.className='quick-tools section';
    section.id='alat';
    section.innerHTML='<div class="section-head"><div><p class="kicker">05 / PUSAT AKSI</p><h2>Kerja lebih cepat dengan data</h2><p class="section-copy">Gunakan pintasan berikut untuk membaca, menyimpan, dan membagikan informasi pendidikan.</p></div></div><div class="quick-grid"><article class="quick-card quick-primary"><span class="quick-icon">▣</span><div><strong>Cetak laporan</strong><p>Siapkan ringkasan data untuk dibawa ke rapat atau arsip.</p></div><button type="button" data-action="print">Cetak</button></article><article class="quick-card"><span class="quick-icon">↗</span><div><strong>Bagikan halaman</strong><p>Salin tautan dashboard agar mudah dikirim kepada rekan kerja.</p></div><button type="button" data-action="share">Salin tautan</button></article><article class="quick-card"><span class="quick-icon">⌕</span><div><strong>Mulai pencarian</strong><p>Temukan satuan pendidikan berdasarkan nama, NPSN, atau kecamatan.</p></div><a href="#satuan">Cari data</a></article></div><div class="data-pulse"><span><b id="pulseSchools">—</b> satuan pendidikan</span><span><b id="pulseStudents">—</b> peserta didik</span><span><b id="pulseAreas">—</b> kecamatan terdata</span></div></section>';
    anchor.before(section);
    section.querySelector('[data-action="print"]').addEventListener('click',()=>window.print());
    section.querySelector('[data-action="share"]').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(window.location.href);showToast('Tautan berhasil disalin')}catch{showToast('Salin tautan dari bilah alamat browser')}});
    const sync=()=>{const text=id=>document.querySelector(id)?.textContent||'—';document.querySelector('#pulseSchools').textContent=text('#schoolTotal');document.querySelector('#pulseStudents').textContent=text('#studentTotal');document.querySelector('#pulseAreas').textContent=text('#areaTotal')};
    sync();setInterval(sync,500);
  };
  function showToast(message){let toast=document.querySelector('.site-toast');if(!toast){toast=document.createElement('div');toast.className='site-toast';document.body.append(toast)}toast.textContent=message;toast.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>toast.classList.remove('show'),2200)}
  const timer=setInterval(()=>{setup();if(document.querySelector('.quick-tools'))clearInterval(timer)},100);
})();
