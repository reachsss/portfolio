/* MOTEUR : menu GRUB, navigation, thème. Normalement, rien à modifier ici. */
const $=s=>document.querySelector(s),RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
let sel=0,busy=0;
const M=$("#menu");
M.innerHTML=D.menu.map((m,i)=>`<li><button role="menuitem" data-i="${i}"${m.soon?' class="soon"':""}>${m.t}</button></li>`).join("");
const bs=[...M.querySelectorAll("button")];
$("#nav").innerHTML=D.menu.filter(m=>m.id).map(m=>`<button data-id="${m.id}">${m.n}</button>`).join("");

function pick(i){sel=(i+bs.length)%bs.length;bs.forEach((b,j)=>{b.classList.toggle("sel",j==sel);b.setAttribute("aria-current",j==sel)})}
async function start(i){
  if(busy)return;
  const m=D.menu[i],L=$("#log"),w=ms=>RM?0:new Promise(r=>setTimeout(r,ms));
  L.hidden=false;
  if(m.soon){L.textContent="Entrée vide : cette partie sera complétée en BUT 2.";return}
  busy=1;L.textContent="";
  for(const l of [`Chargement de « ${m.n} »…`,"[ OK ] Profil monté","[ OK ] Interface démarrée"]){L.textContent+=l+"\n";await w(240)}
  busy=0;location.hash=m.id;
}
function render(){
  const id=location.hash.slice(1),v=V[id],boot=!v;
  document.documentElement.classList.toggle("on-boot",boot);
  $("#boot").hidden=!boot;$("#site").hidden=boot;
  if(boot){$("#log").hidden=true;$("#log").textContent="";document.title=T;pick(sel);return}
  $("#view").innerHTML=v();
  document.title=D.menu.find(m=>m.id==id).n+", "+T;
  document.querySelectorAll("#nav button").forEach(b=>b.dataset.id==id?b.setAttribute("aria-current","page"):b.removeAttribute("aria-current"));
  scrollTo(0,0);$("#view h1").setAttribute("tabindex","-1");$("#view h1").focus({preventScroll:true});
}
const hv=e=>{const b=e.target.closest("button");if(b)pick(+b.dataset.i)};
M.onmouseover=M.onfocusin=hv;
M.onclick=e=>{const b=e.target.closest("button");if(b){pick(+b.dataset.i);start(sel)}};
$("#nav").onclick=e=>{const b=e.target.closest("button");if(b)location.hash=b.dataset.id};
$("#back").onclick=()=>{location.hash=""};
$("#theme").onclick=()=>{const r=document.documentElement,d=r.dataset.theme?r.dataset.theme=="dark":matchMedia("(prefers-color-scheme: dark)").matches;r.dataset.theme=d?"light":"dark"};
addEventListener("keydown",e=>{
  if(!$("#site").hidden){if(e.key=="Escape")location.hash="";return}
  if(e.key=="ArrowDown"||e.key=="ArrowUp"){e.preventDefault();pick(sel+(e.key=="ArrowDown"?1:-1));bs[sel].focus({preventScroll:true})}
  else if(e.key=="Enter"){e.preventDefault();start(sel)}
});
addEventListener("hashchange",render);
render();