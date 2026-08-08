function toggleMenu(){const n=document.getElementById('navLinks');n.style.display=n.style.display==='flex'?'':'flex'}
function toggleTheme(){document.body.classList.toggle('dark');localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light')}
if(localStorage.getItem('theme')==='dark')document.body.classList.add('dark');

function filterProducts(type,btn){
 document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
 document.querySelectorAll('.product').forEach(p=>p.style.display=(type==='all'||p.dataset.type===type)?'block':'none');
}
let selected='';
function openQuote(service){selected=service;document.getElementById('modalTitle').textContent='Quick Quote';document.getElementById('modalText').textContent='Requirement: '+service;document.getElementById('modal').classList.add('show')}
function closeModal(e){if(!e||e.target.id==='modal')document.getElementById('modal').classList.remove('show')}
function submitModal(){
 const n=document.getElementById('modalName').value.trim(),p=document.getElementById('modalPhone').value.trim();
 if(!n||!p){alert('Please enter your name and phone number.');return}
 const shopNumber='919000000000';
 const text=`Hello TechPoint Computers, I am ${n}. I am interested in ${selected}. My phone number is ${p}. Please share details and pricing.`;
 window.open(`https://wa.me/${shopNumber}?text=${encodeURIComponent(text)}`,'_blank');
}
function sendEnquiry(){
 const n=document.getElementById('name').value.trim(),p=document.getElementById('phone').value.trim();
 const msg=document.getElementById('formMsg');
 if(!n||!p){msg.textContent='Please enter your name and phone number.';msg.style.color='#dc2626';return}
 const need=document.getElementById('need').value;
 const message=document.getElementById('message').value.trim();
 const text=`Hello TechPoint Computers, I am ${n}. Requirement: ${need}. ${message} My phone number is ${p}.`;
 window.open(`https://wa.me/919000000000?text=${encodeURIComponent(text)}`,'_blank');
 msg.textContent='Opening WhatsApp… ✓';msg.style.color='#16a34a';
}
function startFinder(){
 const use=prompt('What do you need?\n1 = Study/Office computer\n2 = CCTV/Security\n3 = Repair\n4 = Networking');
 let result={'1':'We recommend starting with our Laptop & PC options.','2':'We recommend a CCTV consultation.','3':'We recommend our Computer Repair service.','4':'We recommend our Networking service.'}[use]||'Please choose 1, 2, 3 or 4.';
 alert(result);
}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=800)document.getElementById('navLinks').style.display=''}));
