// WEDE5020 Part 3 - PoshBakehouse
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.accordion-header').forEach(h=>{
    h.addEventListener('click',()=>{
      const c=h.nextElementSibling;
      c.style.display=c.style.display==='block'?'none':'block';
    })
  });
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.tab-content').forEach(c=>c.style.display='none');
      document.getElementById(btn.dataset.tab).style.display='block';
    })
  });
  const modal=document.getElementById('offerModal');
  if(modal){
    setTimeout(()=>modal.style.display='flex',2500);
    document.querySelectorAll('.close-modal').forEach(b=>b.addEventListener('click',()=>modal.style.display='none'));
  }
  const lb=document.getElementById('lightbox');
  const lbImg=document.getElementById('lightbox-img');
  document.querySelectorAll('.gallery-img').forEach(img=>{
    img.addEventListener('click',()=>{
      lbImg.src=img.src;lb.style.display='flex';
    })
  });
  if(lb) lb.addEventListener('click',()=>lb.style.display='none');

  const products=[
    {name:"Chocolate Celebration Cake",price:"R450",cat:"cakes",img:"images/chocolate-cake.jpg",desc:"Rich chocolate sponge with ganache. Serves 12."},
    {name:"Box of 6 Gourmet Cupcakes",price:"R180",cat:"cupcakes",img:"images/cupcakes.jpg",desc:"Red Velvet, Vanilla, Salted Caramel"},
    {name:"Pink Celebration Cake",price:"R400",cat:"cakes",img:"images/hero-cake.jpg",desc:"Artisan baked with love"},
    {name:"Wedding Tier Cake",price:"R2500",cat:"cakes",img:"images/chocolate-cake.jpg",desc:"Custom 3-tier wedding cake"},
    {name:"Baker Team Special",price:"R320",cat:"pastries",img:"images/baker-team.jpg",desc:"Freshly baked by Sarah & team"},
    {name:"Logo Special Box",price:"R150",cat:"cupcakes",img:"images/logo.jpg",desc:"Limited edition"}
  ];
  const grid=document.getElementById('productGrid');
  function render(list){
    if(!grid) return;
    grid.innerHTML="";
    list.forEach(p=>{
      grid.innerHTML+=`<div class="product" style="background:white;padding:1rem;border-radius:20px"><img src="${p.img}" alt="${p.name} - PoshBakehouse ${p.cat} Sandton" class="gallery-img" style="width:100%;border-radius:15px;cursor:pointer"><h3>${p.name}</h3><p>${p.desc}</p><p><strong>${p.price}</strong></p><button class="btn" onclick="addToEnquiry('${p.name}')">Enquire</button></div>`;
    });
    document.querySelectorAll('.gallery-img').forEach(img=>{
      img.addEventListener('click',()=>{
        document.getElementById('lightbox-img').src=img.src;
        document.getElementById('lightbox').style.display='flex';
      })
    });
  }
  if(grid) render(products);
  const search=document.getElementById('searchInput');
  const cat=document.getElementById('categoryFilter');
  function filter(){
    let term=search?search.value.toLowerCase():"";
    let c=cat?cat.value:"all";
    let f=products.filter(p=>(p.name.toLowerCase().includes(term)||p.desc.toLowerCase().includes(term))&&(c==="all"||p.cat===c));
    render(f);
  }
  if(search) search.addEventListener('input',filter);
  if(cat) cat.addEventListener('change',filter);
});
function initLeafletMap(){
  const d=document.getElementById('leafletMap');
  if(!d) return;
  const map=L.map('leafletMap').setView([-26.1070,28.0567],14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.marker([-26.1070,28.0567]).addTo(map).bindPopup('<b>PoshBakehouse</b><br>123 Baker Street, Sandton').openPopup();
}
function addToEnquiry(name){localStorage.setItem('selectedCake',name);window.location.href='enquiry.html';}
function validateEnquiry(e){
  e.preventDefault();let valid=true;
  const name=document.getElementById('enqName'),email=document.getElementById('enqEmail'),phone=document.getElementById('enqPhone'),msg=document.getElementById('enqMsg');
  document.querySelectorAll('.error').forEach(el=>el.style.display='none');
  if(name.value.trim().length<3){document.getElementById('errName').style.display='block';valid=false;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){document.getElementById('errEmail').style.display='block';valid=false;}
  if(phone&&!/^0[0-9]{9}$/.test(phone.value)){document.getElementById('errPhone').style.display='block';valid=false;}
  if(msg.value.trim().length<10){document.getElementById('errMsg').style.display='block';valid=false;}
  if(!valid) return false;
  const type=document.getElementById('enqEvent').value;
  const cost=type==='Wedding'?'From R2500':type==='Birthday'?'From R400':'Custom quote';
  console.log(`To: orders@poshbakehouse.co.za From:${name.value} Email:${email.value} Cake:${localStorage.getItem('selectedCake')||'General'} Type:${type} Cost:${cost} Msg:${msg.value}`);
  const btn=e.target.querySelector('button');btn.textContent='Sending...';
  setTimeout(()=>{document.getElementById('formSuccess').innerHTML=`<h3>Thank you ${name.value}!</h3><p>Your ${type} enquiry for <b>${localStorage.getItem('selectedCake')||'custom cake'}</b> received. <b>${cost}</b>. Compiled email to orders@poshbakehouse.co.za. Reply to ${email.value}.</p>`;document.getElementById('formSuccess').style.display='block';e.target.reset();btn.textContent='Send Enquiry';},1000);return false;
}
function validateContact(e){
  e.preventDefault();
  const name=document.getElementById('cName'),email=document.getElementById('cEmail');
  if(name.value.length<2||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){alert('Enter valid name/email');return false;}
  const msg=document.getElementById('cMessage').value;
  const mailto=`mailto:hello@poshbakehouse.co.za?subject=Contact from ${name.value}&body=${encodeURIComponent(msg+'\nFrom:'+email.value)}`;
  window.location.href=mailto;
  document.getElementById('cSuccess').style.display='block';
  document.getElementById('cSuccess').textContent='Message compiled into email to hello@poshbakehouse.co.za - email client opened';
}