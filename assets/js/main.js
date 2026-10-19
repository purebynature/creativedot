(function(){
var svg=document.getElementById('logo'),veil=document.getElementById('veil'),brand=document.getElementById('brand'),ring=document.getElementById('ring');
var W=innerWidth,H=innerHeight,sm=W<760,sf=sm?.2:.28,cs=Math.min(1.25,innerWidth*.86/360),s0=Math.max(32,Math.hypot(innerWidth,innerHeight)/2/58.4*1.1);var s1=Math.min(1.25,W*.84/360),off=-63.6*s1;
var tx=(sm?52:62)-W/2,ty=(sm?50:52)-H/2+(parseFloat(getComputedStyle(document.documentElement).paddingTop)||0);
var done=false;var T=function(x,y,r,s){return 'translate('+x+'px,'+y+'px) rotate('+r+'deg) scale('+s+')'};
function reveal(){
 var io=new IntersectionObserver(function(e){e.forEach(function(i){if(i.isIntersecting){i.target.classList.add('on');io.unobserve(i.target)}})},{threshold:.12});
 document.querySelectorAll('.rv').forEach(function(n){io.observe(n)});
}
function finish(){
 var sk=document.getElementById('skip');if(sk)sk.remove();
 document.body.classList.remove('lock');veil.remove();
 var d=sf*207.8;
 brand.style.opacity=1;
 ring.style.cssText='left:'+(tx+W/2+d-14)+'px;top:'+(ty+H/2-14)+'px;width:28px;height:28px;opacity:0';
 reveal();
}
if(matchMedia('(prefers-reduced-motion:reduce)').matches){
 svg.style.transform=T(tx,ty,0,sf);finish();return;
}
svg.style.transform=T(0,0,0,s0);
document.getElementById('skip').addEventListener('click',function(){if(done)return;done=true;svg.getAnimations().forEach(function(x){x.cancel()});veil.getAnimations().forEach(function(x){x.cancel()});svg.style.transform=T(tx,ty,0,sf);finish()});
var a1=svg.animate([{transform:T(0,0,0,s0)},{transform:T(0,0,0,s0),offset:.18},{transform:T(off,0,0,s1)}],{duration:5200,easing:'cubic-bezier(.65,0,.25,1)',fill:'forwards'});
a1.onfinish=function(){
 setTimeout(function(){
  if(done)return;
  veil.animate([{opacity:1},{opacity:0}],{duration:1500,fill:'forwards'});
  var a2=svg.animate([{transform:T(off,0,0,s1)},{transform:T(tx,ty,720,sf)}],{duration:2200,easing:'cubic-bezier(.7,0,.2,1)',fill:'forwards'});
  a2.onfinish=function(){if(done)return;done=true;svg.style.transform=T(tx,ty,0,sf);svg.getAnimations().forEach(function(x){x.cancel()});finish()};
 },900);
};
})();
document.querySelectorAll('.wk img,.svc img').forEach(function(i){i.addEventListener('click',function(){var l=document.getElementById('lb');l.querySelector('img').src=i.src;l.classList.add('on')})});
document.getElementById('lb').addEventListener('click',function(){this.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')document.getElementById('lb').classList.remove('on')});
document.getElementById('wf').addEventListener('submit',function(e){e.preventDefault();var f=this.querySelectorAll('input,textarea');
var m='Hello CreativeDot! I am '+f[0].value+' ('+f[1].value+'). '+f[2].value;
window.open('https://wa.me/923157100384?text='+encodeURIComponent(m),'_blank');});

(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io2.unobserve(e.target);var el=e.target,m=el.textContent.match(/^(\d+)(.*)$/);if(!m||rm)return;var n=+m[1],t0=null;function st(t){t0=t0||t;var p=Math.min((t-t0)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)))+m[2];if(p<1)requestAnimationFrame(st)}requestAnimationFrame(st)})},{threshold:.6});
document.querySelectorAll('.stats b').forEach(function(b){io2.observe(b)});
var rw=document.getElementById('rw'),ws=['brands','videos','logos','websites','campaigns'],wi=0;
if(!rm)setInterval(function(){rw.classList.add('out');setTimeout(function(){wi=(wi+1)%ws.length;rw.textContent=ws[wi];rw.classList.remove('out')},380)},2200);
var pg=document.getElementById('pg');
addEventListener('scroll',function(){var h=document.documentElement;pg.style.width=(h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!rm){
 var c=document.getElementById('cur'),x=0,y=0,cx=0,cy=0;document.body.classList.add('hc');
 addEventListener('mousemove',function(e){x=e.clientX;y=e.clientY;c.style.opacity=1});
 (function loop(){cx+=(x-cx)*.22;cy+=(y-cy)*.22;c.style.transform='translate('+cx+'px,'+cy+'px)';requestAnimationFrame(loop)})();
 document.addEventListener('mouseover',function(e){c.classList.toggle('big',!!e.target.closest('a,button,input,textarea,.card'))});
 document.querySelectorAll('.card').forEach(function(k){
  k.addEventListener('mousemove',function(e){var r=k.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;k.style.transform='perspective(800px) rotateX('+(-py*7)+'deg) rotateY('+(px*7)+'deg) translateY(-12px) scale('+(k.querySelector('img')?1.07:1.02)+')'});
  k.addEventListener('mouseleave',function(){k.style.transform=''});
 });
}
})();

(function(){
var bs=document.querySelectorAll('.fl button'),cs=document.querySelectorAll('.pf');
bs.forEach(function(b){b.addEventListener('click',function(){bs.forEach(function(x){x.classList.remove('on')});b.classList.add('on');var f=b.getAttribute('data-f');cs.forEach(function(c){c.classList.toggle('hide',f!=='all'&&c.getAttribute('data-c')!==f)})})});
var v=document.querySelector('.vid video');
if(v&&'IntersectionObserver' in window){new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause()})},{threshold:.5}).observe(v)}
})();

(function(){
if(!matchMedia('(hover:none)').matches||!('IntersectionObserver' in window))return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('act',e.isIntersecting)})},{rootMargin:'-44% 0px -44% 0px',threshold:0});
document.querySelectorAll('.svc,.wk').forEach(function(c){io.observe(c)});
})();

(function(){
if(matchMedia('(hover:none)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches&&'IntersectionObserver' in window){
var io3=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('act',e.isIntersecting)})},{rootMargin:'-42% 0px -42% 0px'});
document.querySelectorAll('.svc,.wk').forEach(function(c){io3.observe(c)});
}
})();

(function(){
var mb=document.getElementById('mb'),mn=document.getElementById('mnav');
function tg(o){mn.classList.toggle('on',o);document.body.classList.toggle('mo',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu')}
mb.addEventListener('click',function(){tg(!mn.classList.contains('on'))});
mn.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){tg(false)})});
addEventListener('keydown',function(e){if(e.key==='Escape')tg(false)});
addEventListener('resize',function(){if(innerWidth>760)tg(false)});
var rp=document.getElementById('replay');rp.addEventListener('click',function(e){e.preventDefault();scrollTo(0,0);location.reload()});
})();

(function(){
var cv=document.getElementById('goo');if(!cv)return;
var hero=document.getElementById('hero'),ctx=cv.getContext('2d'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var w=0,h=0,S=4,gw=0,gh=0,img,d,F,balls=[],px=0,py=0,tx=0,ty=0,last=-1e5,boost=0,vis=true;
function size(){var r=cv.parentNode.getBoundingClientRect();w=r.width;h=r.height;if(!w||!h)return;S=Math.max(w<600?5:4,Math.ceil(Math.sqrt(w*h/28000)));gw=Math.ceil(w/S);gh=Math.ceil(h/S);cv.width=gw;cv.height=gh;img=ctx.createImageData(gw,gh);d=img.data;F=new Float32Array(gw*gh);
 if(!balls.length){var n=w<600?9:14,sm=w<600;for(var i=0;i<n;i++)balls.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,r:(sm?16:22)+Math.random()*(sm?26:44)});px=tx=w*.7;py=ty=h*.4}}
function move(e){var r=cv.getBoundingClientRect();tx=e.clientX-r.left;ty=e.clientY-r.top;last=performance.now()}
hero.addEventListener('pointermove',move,{passive:true});
hero.addEventListener('pointerdown',function(e){move(e);boost=1},{passive:true});
function draw(ts){
 var sm=w<600,pr=(sm?42:62)*(1+boost*.9);
 if(ts-last>2500){tx=w*(.5+.4*Math.sin(ts/2700));ty=h*(.45+.3*Math.sin(ts/1900+1))}
 px+=(tx-px)*.09;py+=(ty-py)*.09;boost*=.95;
 var i,b,dx,dy;
 for(i=0;i<balls.length;i++){b=balls[i];dx=px-b.x;dy=py-b.y;var dd=Math.sqrt(dx*dx+dy*dy)+1;
  if(dd<320){b.vx+=dx/dd*.012;b.vy+=dy/dd*.012}
  var sp=Math.sqrt(b.vx*b.vx+b.vy*b.vy);if(sp>1.1){b.vx*=1.1/sp;b.vy*=1.1/sp}
  b.x+=b.vx;b.y+=b.vy;
  if(b.x<-20){b.x=-20;b.vx=Math.abs(b.vx)}if(b.x>w+20){b.x=w+20;b.vx=-Math.abs(b.vx)}
  if(b.y<-20){b.y=-20;b.vy=Math.abs(b.vy)}if(b.y>h+20){b.y=h+20;b.vy=-Math.abs(b.vy)}}
 var n=balls.length,bx=new Float32Array(n+1),by=new Float32Array(n+1),br=new Float32Array(n+1);
 for(i=0;i<n;i++){bx[i]=balls[i].x;by[i]=balls[i].y;br[i]=balls[i].r*balls[i].r}
 bx[n]=px;by[n]=py;br[n]=pr*pr;
 var gx,gy,X,Y,f,o=0;
 for(gy=0;gy<gh;gy++){Y=gy*S+S/2;for(gx=0;gx<gw;gx++){X=gx*S+S/2;f=0;
  for(i=0;i<=n;i++){dx=X-bx[i];dy=Y-by[i];f+=br[i]/(dx*dx+dy*dy+1)}
  F[o++]=f}}
 var idx=0,a,k,gxv,gyv,m,nl,e,lit,sp2,r,g,bb,al=sm?150:165;
 for(gy=0;gy<gh;gy++){for(gx=0;gx<gw;gx++,idx++){f=F[idx];o=idx*4;
  if(f<.85){d[o+3]=0;continue}
  a=(f-.85)/.25;a=a>1?1:a;a=a*a*(3-2*a);
  if(gx>0&&gy>0&&gx<gw-1&&gy<gh-1){gxv=F[idx+1]-F[idx-1];gyv=F[idx+gw]-F[idx-gw];m=Math.sqrt(gxv*gxv+gyv*gyv)+1e-4;nl=(gxv+gyv)/(m*1.414);}else{nl=0;m=1}
  e=1-(f-.9)/2.2;e=e<0?0:e>1?1:e;
  k=(f-1)/3;k=k<0?0:k>1?1:k;
  lit=.62+.38*k+e*.5*nl;lit=lit<.18?.18:lit>1.25?1.25:lit;
  sp2=nl>.9?(nl-.9)*10*e:0;if(f>1.15&&f<1.6&&nl>.6)sp2+=.08;
  r=95+170*lit+110*sp2;g=6+38*lit+150*sp2;bb=12+40*lit+150*sp2;
  d[o]=r>255?255:r;d[o+1]=g>255?255:g;d[o+2]=bb>255?255:bb;d[o+3]=a*al}}
 ctx.putImageData(img,0,0);
}
size();
if(rm){draw(0);addEventListener('resize',function(){size();draw(0)});return}
if('IntersectionObserver' in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(hero);
var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(size,200)});
(function loop(ts){requestAnimationFrame(loop);if(vis&&!document.hidden&&w)draw(ts)})(0);
window.__gooDraw=draw;
})();
