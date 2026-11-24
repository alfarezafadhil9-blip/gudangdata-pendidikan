(function(){
  const setupGallery=()=>{
    const gallery=document.querySelector('.school-gallery');
    if(!gallery||gallery.dataset.grouped)return;
    gallery.dataset.grouped='true';
    gallery.querySelectorAll('img[src*="images.unsplash.com"]').forEach(image=>image.closest('figure')?.remove());
    const localPhotos=[
      ['https://sman7-bjm.sch.id/uploads/galeri/galeri_1795336348_141.jpg','Prestasi siswa SMAN 7 Banjarmasin','SMAN 7 Banjarmasin'],
      ['https://sman7-bjm.sch.id/uploads/galeri/galeri_1794126438_722.jpg','Tim basket sekolah meraih prestasi','SMAN 7 Banjarmasin'],
      ['https://sman7-bjm.sch.id/uploads/images/smaven-juara-ahm.jpg','Siswa berprestasi di tingkat nasional','SMAN 7 Banjarmasin'],
      ['https://sman7-bjm.sch.id/uploads/images/kunjungan-wamen.jpg','Inovasi dan kepedulian lingkungan','SMAN 7 Banjarmasin']
    ];
    const grid=gallery.querySelector('.gallery-grid');
    localPhotos.forEach(([src,title,school])=>{const figure=document.createElement('figure');figure.innerHTML='<img loading="lazy" src="'+src+'" alt="'+title+'"><figcaption><strong>'+title+'</strong><span>'+school+'</span></figcaption>';grid.append(figure)});
    const figures=[...gallery.querySelectorAll('figure')];
    const groups=['sma','sma','smp','sma','sma','sma','sma','kegiatan'];
    figures.forEach((figure,index)=>figure.dataset.category=groups[index]||'kegiatan');
    const tabs=document.createElement('div');
    tabs.className='gallery-tabs';
    tabs.setAttribute('aria-label','Filter dokumentasi sekolah');
    [['all','Semua'],['tk','TK / PAUD'],['sd','SD / MI'],['smp','SMP / MTs'],['sma','SMA / SMK'],['kegiatan','Kegiatan']].forEach(([key,label],index)=>{
      const button=document.createElement('button');
      button.type='button';
      button.className='gallery-tab'+(index===0?' active':'');
      button.setAttribute('aria-pressed',index===0?'true':'false');
      button.innerHTML='<span class="tab-dot"></span>'+label;
      button.addEventListener('click',()=>{
        tabs.querySelectorAll('button').forEach(item=>{
          const active=item===button;
          item.classList.toggle('active',active);
          item.setAttribute('aria-pressed',active?'true':'false');
        });
        figures.forEach(figure=>figure.classList.toggle('is-hidden',key!=='all'&&figure.dataset.category!==key));
      });
      tabs.append(button);
    });
    gallery.querySelector('.section-head').after(tabs);
  };
  const timer=setInterval(()=>{setupGallery();if(document.querySelector('.school-gallery[data-grouped]'))clearInterval(timer)},100);
})();
