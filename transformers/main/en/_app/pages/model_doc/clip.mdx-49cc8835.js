import{S as aP,i as rP,s as iP,e as n,k as l,w as g,t as r,M as lP,c as s,d as o,m as d,a,x as _,h as i,b as c,F as e,g as h,y as v,q as P,o as T,B as I}from"../../chunks/vendor-6b77c823.js";import{T as ce}from"../../chunks/Tip-39098574.js";import{D as w}from"../../chunks/Docstring-abef54e3.js";import{C as A}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as D}from"../../chunks/IconCopyLink-7a11ce68.js";function dP(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function cP(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function pP(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function mP(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function hP(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function fP(x){let p,L,u,b,C,y,f,k,Ho,rt,M,ue,ye,be,Ko,Ce,Go,Xt,pe,Me,Le,Zt,H,me,je,it,Qt,Fe,ke,Jo,Yt,O,ge,we,$e,Xo,xe,Zo,eo,he,Qo,qe,_e;return{c(){p=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),u=l(),b=n("ul"),C=n("li"),y=r("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),k=n("li"),Ho=r("having all inputs as a list, tuple or dict in the first positional arguments."),rt=l(),M=n("p"),ue=r("This second option is useful when using "),ye=n("code"),be=r("tf.keras.Model.fit"),Ko=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),Ce=n("code"),Go=r("model(inputs)"),Xt=r("."),pe=l(),Me=n("p"),Le=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Zt=l(),H=n("ul"),me=n("li"),je=r("a single Tensor with "),it=n("code"),Qt=r("input_ids"),Fe=r(" only and nothing else: "),ke=n("code"),Jo=r("model(input_ids)"),Yt=l(),O=n("li"),ge=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=n("code"),$e=r("model([input_ids, attention_mask])"),Xo=r(" or "),xe=n("code"),Zo=r("model([input_ids, attention_mask, token_type_ids])"),eo=l(),he=n("li"),Qo=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=n("code"),_e=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l($){p=s($,"P",{});var j=a(p);L=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(o),u=d($),b=s($,"UL",{});var to=a(b);C=s(to,"LI",{});var Qs=a(C);y=i(Qs,"having all inputs as keyword arguments (like PyTorch models), or"),Qs.forEach(o),f=d(to),k=s(to,"LI",{});var Yo=a(k);Ho=i(Yo,"having all inputs as a list, tuple or dict in the first positional arguments."),Yo.forEach(o),to.forEach(o),rt=d($),M=s($,"P",{});var E=a(M);ue=i(E,"This second option is useful when using "),ye=s(E,"CODE",{});var Ys=a(ye);be=i(Ys,"tf.keras.Model.fit"),Ys.forEach(o),Ko=i(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),Ce=s(E,"CODE",{});var lt=a(Ce);Go=i(lt,"model(inputs)"),lt.forEach(o),Xt=i(E,"."),E.forEach(o),pe=d($),Me=s($,"P",{});var ea=a(Me);Le=i(ea,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ea.forEach(o),Zt=d($),H=s($,"UL",{});var De=a(H);me=s(De,"LI",{});var ve=a(me);je=i(ve,"a single Tensor with "),it=s(ve,"CODE",{});var ta=a(it);Qt=i(ta,"input_ids"),ta.forEach(o),Fe=i(ve," only and nothing else: "),ke=s(ve,"CODE",{});var oa=a(ke);Jo=i(oa,"model(input_ids)"),oa.forEach(o),ve.forEach(o),Yt=d(De),O=s(De,"LI",{});var Pe=a(O);ge=i(Pe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=s(Pe,"CODE",{});var na=a(we);$e=i(na,"model([input_ids, attention_mask])"),na.forEach(o),Xo=i(Pe," or "),xe=s(Pe,"CODE",{});var sa=a(xe);Zo=i(sa,"model([input_ids, attention_mask, token_type_ids])"),sa.forEach(o),Pe.forEach(o),eo=d(De),he=s(De,"LI",{});var Oe=a(he);Qo=i(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=s(Oe,"CODE",{});var aa=a(qe);_e=i(aa,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),aa.forEach(o),Oe.forEach(o),De.forEach(o)},m($,j){h($,p,j),e(p,L),h($,u,j),h($,b,j),e(b,C),e(C,y),e(b,f),e(b,k),e(k,Ho),h($,rt,j),h($,M,j),e(M,ue),e(M,ye),e(ye,be),e(M,Ko),e(M,Ce),e(Ce,Go),e(M,Xt),h($,pe,j),h($,Me,j),e(Me,Le),h($,Zt,j),h($,H,j),e(H,me),e(me,je),e(me,it),e(it,Qt),e(me,Fe),e(me,ke),e(ke,Jo),e(H,Yt),e(H,O),e(O,ge),e(O,we),e(we,$e),e(O,Xo),e(O,xe),e(xe,Zo),e(H,eo),e(H,he),e(he,Qo),e(he,qe),e(qe,_e)},d($){$&&o(p),$&&o(u),$&&o(b),$&&o(rt),$&&o(M),$&&o(pe),$&&o(Me),$&&o(Zt),$&&o(H)}}}function uP(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function gP(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function _P(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function vP(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function PP(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function TP(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function IP(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function yP(x){let p,L,u,b,C;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=s(y,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(y,f){h(y,p,f),e(p,L),e(p,u),e(u,b),e(p,C)},d(y){y&&o(p)}}}function bP(x){let p,L,u,b,C,y,f,k,Ho,rt,M,ue,ye,be,Ko,Ce,Go,Xt,pe,Me,Le,Zt,H,me,je,it,Qt,Fe,ke,Jo,Yt,O,ge,we,$e,Xo,xe,Zo,eo,he,Qo,qe,_e,$,j,to,Qs,Yo,E,Ys,lt,ea,De,ve,ta,oa,Pe,na,sa,Oe,aa,xd,ra,Ed,zd,ia,Md,jd,nl,en,sl,Ae,Fd,tn,qd,Dd,on,Od,Ad,al,dt,oo,pr,nn,Nd,mr,Vd,rl,fe,sn,Sd,no,la,Wd,Bd,da,Ud,Rd,Hd,ct,Kd,ca,Gd,Jd,pa,Xd,Zd,Qd,so,an,Yd,rn,ec,ma,tc,oc,il,pt,ao,hr,ln,nc,fr,sc,ll,V,dn,ac,mt,rc,ha,ic,lc,cn,dc,cc,pc,ht,mc,fa,hc,fc,ua,uc,gc,_c,ur,vc,Pc,pn,dl,ft,ro,gr,mn,Tc,_r,Ic,cl,S,hn,yc,ut,bc,ga,Cc,Lc,fn,kc,wc,$c,gt,xc,_a,Ec,zc,va,Mc,jc,Fc,vr,qc,Dc,un,pl,_t,io,Pr,gn,Oc,Tr,Ac,ml,F,_n,Nc,Ir,Vc,Sc,vn,Wc,Pa,Bc,Uc,Rc,Te,Pn,Hc,yr,Kc,Gc,br,Ta,Jc,Cr,Xc,Zc,Lr,Qc,Yc,lo,Tn,ep,In,tp,kr,op,np,sp,co,yn,ap,wr,rp,ip,Ia,bn,hl,vt,po,$r,Cn,lp,xr,dp,fl,W,Ln,cp,kn,pp,Er,mp,hp,fp,wn,up,ya,gp,_p,vp,Ie,$n,Pp,zr,Tp,Ip,Mr,ba,yp,jr,bp,Cp,Fr,Lp,kp,mo,xn,wp,qr,$p,ul,Pt,ho,Dr,En,xp,Or,Ep,gl,B,zn,zp,Ar,Mp,jp,Mn,Fp,Ca,qp,Dp,Op,fo,jn,Ap,Fn,Np,Nr,Vp,Sp,Wp,uo,qn,Bp,Tt,Up,Vr,Rp,Hp,Sr,Kp,Gp,_l,It,go,Wr,Dn,Jp,Br,Xp,vl,U,On,Zp,Ur,Qp,Yp,K,La,em,tm,ka,om,nm,wa,sm,am,Rr,rm,im,$a,lm,dm,cm,_o,An,pm,Nn,mm,xa,hm,fm,um,vo,Vn,gm,Sn,_m,Ea,vm,Pm,Pl,yt,Po,Hr,Wn,Tm,Kr,Im,Tl,R,Bn,ym,Un,bm,Rn,Cm,Lm,km,G,Hn,wm,bt,$m,za,xm,Em,Gr,zm,Mm,jm,To,Fm,Jr,qm,Dm,Kn,Om,J,Gn,Am,Ct,Nm,Ma,Vm,Sm,Xr,Wm,Bm,Um,Io,Rm,Zr,Hm,Km,Jn,Gm,X,Xn,Jm,Lt,Xm,ja,Zm,Qm,Qr,Ym,eh,th,yo,oh,Yr,nh,sh,Zn,Il,kt,bo,ei,Qn,ah,ti,rh,yl,wt,Yn,ih,Z,es,lh,$t,dh,Fa,ch,ph,oi,mh,hh,fh,Co,uh,ni,gh,_h,ts,bl,xt,Lo,si,os,vh,ai,Ph,Cl,Et,ns,Th,Q,ss,Ih,zt,yh,qa,bh,Ch,ri,Lh,kh,wh,ko,$h,ii,xh,Eh,as,Ll,Mt,wo,li,rs,zh,di,Mh,kl,q,is,jh,ls,Fh,Da,qh,Dh,Oh,ds,Ah,cs,Nh,Vh,Sh,$o,Wh,Y,ps,Bh,jt,Uh,Oa,Rh,Hh,ci,Kh,Gh,Jh,xo,Xh,pi,Zh,Qh,ms,Yh,ee,hs,ef,Ft,tf,Aa,of,nf,mi,sf,af,rf,Eo,lf,hi,df,cf,fs,pf,te,us,mf,qt,hf,Na,ff,uf,fi,gf,_f,vf,zo,Pf,ui,Tf,If,gs,wl,Dt,Mo,gi,_s,yf,_i,bf,$l,Ot,vs,Cf,oe,Ps,Lf,At,kf,Va,wf,$f,vi,xf,Ef,zf,jo,Mf,Pi,jf,Ff,Ts,xl,Nt,Fo,Ti,Is,qf,Ii,Df,El,Vt,ys,Of,ne,bs,Af,St,Nf,Sa,Vf,Sf,yi,Wf,Bf,Uf,qo,Rf,bi,Hf,Kf,Cs,zl,Wt,Do,Ci,Ls,Gf,Li,Jf,Ml,z,ks,Xf,ws,Zf,Wa,Qf,Yf,eu,$s,tu,xs,ou,nu,su,ki,au,ru,Ee,wi,Es,iu,lu,$i,zs,du,cu,xi,Ms,pu,mu,Ei,js,hu,fu,se,Fs,uu,Bt,gu,zi,_u,vu,Mi,Pu,Tu,Iu,Oo,yu,ji,bu,Cu,qs,Lu,Ne,Ds,ku,Fi,wu,$u,Os,xu,Ve,As,Eu,qi,zu,Mu,Ns,jl,Ut,Ao,Di,Vs,ju,Oi,Fu,Fl,Rt,Ss,qu,ae,Ws,Du,Ht,Ou,Ai,Au,Nu,Ni,Vu,Su,Wu,No,Bu,Vi,Uu,Ru,Bs,ql,Kt,Vo,Si,Us,Hu,Wi,Ku,Dl,Gt,Rs,Gu,re,Hs,Ju,Jt,Xu,Bi,Zu,Qu,Ui,Yu,eg,tg,So,og,Ri,ng,sg,Ks,Ol;return y=new D({}),be=new D({}),$e=new D({}),en=new A({props:{code:`from PIL import Image
import requests

from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),nn=new D({}),sn=new w({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L245",parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),an=new w({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L294",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),ln=new D({}),dn=new w({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L33",parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel">CLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CLIPTextConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.CLIPTextConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CLIPTextConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.CLIPTextConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 77) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.CLIPTextConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"hidden_act"},{anchor:"transformers.CLIPTextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.CLIPTextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.CLIPTextConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CLIPTextConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}]}}),pn=new A({props:{code:`from transformers import CLIPTextModel, CLIPTextConfig

# Initializing a CLIPTextModel with openai/clip-vit-base-patch32 style configuration
configuration = CLIPTextConfig()

# Initializing a CLIPTextConfig from the openai/clip-vit-base-patch32 style configuration
model = CLIPTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTextModel, CLIPTextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextModel with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextConfig from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),mn=new D({}),hn=new w({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L141",parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CLIPVisionConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.CLIPVisionConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CLIPVisionConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.CLIPVisionConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.CLIPVisionConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.CLIPVisionConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"hidden_act"},{anchor:"transformers.CLIPVisionConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.CLIPVisionConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.CLIPVisionConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CLIPVisionConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}]}}),un=new A({props:{code:`from transformers import CLIPVisionModel, CLIPVisionConfig

# Initializing a CLIPVisionModel with openai/clip-vit-base-patch32 style configuration
configuration = CLIPVisionConfig()

# Initializing a CLIPVisionModel model from the openai/clip-vit-base-patch32 style configuration
model = CLIPVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPVisionModel, CLIPVisionConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel model from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),gn=new D({}),_n=new w({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L100",parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),Pn=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L186",parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Tn=new w({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L213",parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yn=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L241",parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),bn=new w({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L336"}}),Cn=new D({}),Ln=new w({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L48",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),$n=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L121",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L148",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),En=new D({}),zn=new w({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 3"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L31",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.CLIPFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.CLIPFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.CLIPFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.CLIPFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.CLIPFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.CLIPFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),jn=new w({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L159",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}]}}),qn=new w({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = 3"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L185",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}]}}),Dn=new D({}),On=new w({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L22",parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),An=new w({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L95"}}),Vn=new w({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L102"}}),Wn=new D({}),Bn=new w({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L842",parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Hn=new w({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L957",parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>torch.FloatTensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new ce({props:{$$slots:{default:[dP]},$$scope:{ctx:x}}}),Kn=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Gn=new w({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L875",parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Io=new ce({props:{$$slots:{default:[cP]},$$scope:{ctx:x}}}),Jn=new A({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),Xn=new w({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L915",parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),yo=new ce({props:{$$slots:{default:[pP]},$$scope:{ctx:x}}}),Zn=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Qn=new D({}),Yn=new w({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L678"}}),es=new w({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L693",parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPTextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPTextModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPTextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPTextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPTextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new ce({props:{$$slots:{default:[mP]},$$scope:{ctx:x}}}),ts=new A({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

model = CLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),os=new D({}),ns=new w({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L789"}}),ss=new w({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L802",parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new ce({props:{$$slots:{default:[hP]},$$scope:{ctx:x}}}),as=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPVisionModel

model = CLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),rs=new D({}),is=new w({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1204",parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$o=new ce({props:{$$slots:{default:[fP]},$$scope:{ctx:x}}}),ps=new w({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1334",parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCLIPModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCLIPModel.call.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.TFCLIPModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCLIPModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>tf.Tensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>tf.Tensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code>or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new ce({props:{$$slots:{default:[uP]},$$scope:{ctx:x}}}),ms=new A({props:{code:`import tensorflow as tf
from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="tf", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = tf.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),hs=new w({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1250",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCLIPModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCLIPModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCLIPModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Eo=new ce({props:{$$slots:{default:[gP]},$$scope:{ctx:x}}}),fs=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),us=new w({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1291",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code>for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),zo=new ce({props:{$$slots:{default:[_P]},$$scope:{ctx:x}}}),gs=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),_s=new D({}),vs=new w({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1041"}}),Ps=new w({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1049",parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPTextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCLIPTextModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCLIPTextModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCLIPTextModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPTextModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jo=new ce({props:{$$slots:{default:[vP]},$$scope:{ctx:x}}}),Ts=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

model = TFCLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Is=new D({}),ys=new w({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1105"}}),bs=new w({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1146",parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code>for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qo=new ce({props:{$$slots:{default:[PP]},$$scope:{ctx:x}}}),Cs=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPVisionModel

model = TFCLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),Ls=new D({}),ks=new w({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1108",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Fs=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L737",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>logits_per_image:(<code>jnp.ndarray</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new ce({props:{$$slots:{default:[TP]},$$scope:{ctx:x}}}),qs=new A({props:{code:`import jax
from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="np", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = jax.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Ds=new w({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPPreTrainedModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L782",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Os=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),As=new w({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPPreTrainedModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L849",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Ns=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="np")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Vs=new D({}),Ss=new w({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L929"}}),Ws=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L604",parametersDescription:[{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new ce({props:{$$slots:{default:[IP]},$$scope:{ctx:x}}}),Bs=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

model = FlaxCLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooler_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Us=new D({}),Rs=new w({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L982"}}),Hs=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L673",parametersDescription:[{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new ce({props:{$$slots:{default:[yP]},$$scope:{ctx:x}}}),Ks=new A({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPVisionModel

model = FlaxCLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="np")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooler_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=n("meta"),L=l(),u=n("h1"),b=n("a"),C=n("span"),g(y.$$.fragment),f=l(),k=n("span"),Ho=r("CLIP"),rt=l(),M=n("h2"),ue=n("a"),ye=n("span"),g(be.$$.fragment),Ko=l(),Ce=n("span"),Go=r("Overview"),Xt=l(),pe=n("p"),Me=r("The CLIP model was proposed in "),Le=n("a"),Zt=r("Learning Transferable Visual Models From Natural Language Supervision"),H=r(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),me=l(),je=n("p"),it=r("The abstract from the paper is the following:"),Qt=l(),Fe=n("p"),ke=n("em"),Jo=r(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
restricted form of supervision limits their generality and usability since additional labeled data is needed to specify
any other visual concept. Learning directly from raw text about images is a promising alternative which leverages a
much broader source of supervision. We demonstrate that the simple pre-training task of predicting which caption goes
with which image is an efficient and scalable way to learn SOTA image representations from scratch on a dataset of 400
million (image, text) pairs collected from the internet. After pre-training, natural language is used to reference
learned visual concepts (or describe new ones) enabling zero-shot transfer of the model to downstream tasks. We study
the performance of this approach by benchmarking on over 30 different existing computer vision datasets, spanning tasks
such as OCR, action recognition in videos, geo-localization, and many types of fine-grained object classification. The
model transfers non-trivially to most tasks and is often competitive with a fully supervised baseline without the need
for any dataset specific training. For instance, we match the accuracy of the original ResNet-50 on ImageNet zero-shot
without needing to use any of the 1.28 million training examples it was trained on. We release our code and pre-trained
model weights at this https URL.`),Yt=l(),O=n("h2"),ge=n("a"),we=n("span"),g($e.$$.fragment),Xo=l(),xe=n("span"),Zo=r("Usage"),eo=l(),he=n("p"),Qo=r(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),qe=l(),_e=n("p"),$=r(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=n("a"),to=r("CLIPFeatureExtractor"),Qs=r(" can be used to resize (or rescale) and normalize images for the model."),Yo=l(),E=n("p"),Ys=r("The "),lt=n("a"),ea=r("CLIPTokenizer"),De=r(" is used to encode the text. The "),ve=n("a"),ta=r("CLIPProcessor"),oa=r(` wraps
`),Pe=n("a"),na=r("CLIPFeatureExtractor"),sa=r(" and "),Oe=n("a"),aa=r("CLIPTokenizer"),xd=r(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ra=n("a"),Ed=r("CLIPProcessor"),zd=r(" and "),ia=n("a"),Md=r("CLIPModel"),jd=r("."),nl=l(),g(en.$$.fragment),sl=l(),Ae=n("p"),Fd=r("This model was contributed by "),tn=n("a"),qd=r("valhalla"),Dd=r(". The original code can be found "),on=n("a"),Od=r("here"),Ad=r("."),al=l(),dt=n("h2"),oo=n("a"),pr=n("span"),g(nn.$$.fragment),Nd=l(),mr=n("span"),Vd=r("CLIPConfig"),rl=l(),fe=n("div"),g(sn.$$.fragment),Sd=l(),no=n("p"),la=n("a"),Wd=r("CLIPConfig"),Bd=r(" is the configuration class to store the configuration of a "),da=n("a"),Ud=r("CLIPModel"),Rd=r(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Hd=l(),ct=n("p"),Kd=r("Configuration objects inherit from "),ca=n("a"),Gd=r("PretrainedConfig"),Jd=r(` and can be used to control the model outputs. Read the
documentation from `),pa=n("a"),Xd=r("PretrainedConfig"),Zd=r(" for more information."),Qd=l(),so=n("div"),g(an.$$.fragment),Yd=l(),rn=n("p"),ec=r("Instantiate a "),ma=n("a"),tc=r("CLIPConfig"),oc=r(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),il=l(),pt=n("h2"),ao=n("a"),hr=n("span"),g(ln.$$.fragment),nc=l(),fr=n("span"),sc=r("CLIPTextConfig"),ll=l(),V=n("div"),g(dn.$$.fragment),ac=l(),mt=n("p"),rc=r("This is the configuration class to store the configuration of a "),ha=n("a"),ic=r("CLIPModel"),lc=r(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),cn=n("a"),dc=r("openai/clip-vit-base-patch32"),cc=r(" architecture."),pc=l(),ht=n("p"),mc=r("Configuration objects inherit from "),fa=n("a"),hc=r("PretrainedConfig"),fc=r(` and can be used to control the model outputs. Read the
documentation from `),ua=n("a"),uc=r("PretrainedConfig"),gc=r(" for more information."),_c=l(),ur=n("p"),vc=r("Example:"),Pc=l(),g(pn.$$.fragment),dl=l(),ft=n("h2"),ro=n("a"),gr=n("span"),g(mn.$$.fragment),Tc=l(),_r=n("span"),Ic=r("CLIPVisionConfig"),cl=l(),S=n("div"),g(hn.$$.fragment),yc=l(),ut=n("p"),bc=r("This is the configuration class to store the configuration of a "),ga=n("a"),Cc=r("CLIPModel"),Lc=r(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),fn=n("a"),kc=r("openai/clip-vit-base-patch32"),wc=r(" architecture."),$c=l(),gt=n("p"),xc=r("Configuration objects inherit from "),_a=n("a"),Ec=r("PretrainedConfig"),zc=r(` and can be used to control the model outputs. Read the
documentation from `),va=n("a"),Mc=r("PretrainedConfig"),jc=r(" for more information."),Fc=l(),vr=n("p"),qc=r("Example:"),Dc=l(),g(un.$$.fragment),pl=l(),_t=n("h2"),io=n("a"),Pr=n("span"),g(gn.$$.fragment),Oc=l(),Tr=n("span"),Ac=r("CLIPTokenizer"),ml=l(),F=n("div"),g(_n.$$.fragment),Nc=l(),Ir=n("p"),Vc=r("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Sc=l(),vn=n("p"),Wc=r("This tokenizer inherits from "),Pa=n("a"),Bc=r("PreTrainedTokenizer"),Uc=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rc=l(),Te=n("div"),g(Pn.$$.fragment),Hc=l(),yr=n("p"),Kc=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Gc=l(),br=n("ul"),Ta=n("li"),Jc=r("single sequence: "),Cr=n("code"),Xc=r("<|startoftext|> X <|endoftext|>"),Zc=l(),Lr=n("p"),Qc=r("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Yc=l(),lo=n("div"),g(Tn.$$.fragment),ep=l(),In=n("p"),tp=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),kr=n("code"),op=r("prepare_for_model"),np=r(" method."),sp=l(),co=n("div"),g(yn.$$.fragment),ap=l(),wr=n("p"),rp=r(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ip=l(),Ia=n("div"),g(bn.$$.fragment),hl=l(),vt=n("h2"),po=n("a"),$r=n("span"),g(Cn.$$.fragment),lp=l(),xr=n("span"),dp=r("CLIPTokenizerFast"),fl=l(),W=n("div"),g(Ln.$$.fragment),cp=l(),kn=n("p"),pp=r("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Er=n("em"),mp=r("tokenizers"),hp=r(` library). Based on byte-level
Byte-Pair-Encoding.`),fp=l(),wn=n("p"),up=r("This tokenizer inherits from "),ya=n("a"),gp=r("PreTrainedTokenizerFast"),_p=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),vp=l(),Ie=n("div"),g($n.$$.fragment),Pp=l(),zr=n("p"),Tp=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Ip=l(),Mr=n("ul"),ba=n("li"),yp=r("single sequence: "),jr=n("code"),bp=r("<|startoftext|> X <|endoftext|>"),Cp=l(),Fr=n("p"),Lp=r("Pairs of sequences are not the expected use case, but they will be handled without a separator."),kp=l(),mo=n("div"),g(xn.$$.fragment),wp=l(),qr=n("p"),$p=r(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ul=l(),Pt=n("h2"),ho=n("a"),Dr=n("span"),g(En.$$.fragment),xp=l(),Or=n("span"),Ep=r("CLIPFeatureExtractor"),gl=l(),B=n("div"),g(zn.$$.fragment),zp=l(),Ar=n("p"),Mp=r("Constructs a CLIP feature extractor."),jp=l(),Mn=n("p"),Fp=r("This feature extractor inherits from "),Ca=n("a"),qp=r("FeatureExtractionMixin"),Dp=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Op=l(),fo=n("div"),g(jn.$$.fragment),Ap=l(),Fn=n("p"),Np=r("Crops "),Nr=n("code"),Vp=r("image"),Sp=r(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Wp=l(),uo=n("div"),g(qn.$$.fragment),Bp=l(),Tt=n("p"),Up=r("Resizes "),Vr=n("code"),Rp=r("image"),Hp=r(". Note that this will trigger a conversion of "),Sr=n("code"),Kp=r("image"),Gp=r(" to a PIL Image."),_l=l(),It=n("h2"),go=n("a"),Wr=n("span"),g(Dn.$$.fragment),Jp=l(),Br=n("span"),Xp=r("CLIPProcessor"),vl=l(),U=n("div"),g(On.$$.fragment),Zp=l(),Ur=n("p"),Qp=r("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Yp=l(),K=n("p"),La=n("a"),em=r("CLIPProcessor"),tm=r(" offers all the functionalities of "),ka=n("a"),om=r("CLIPFeatureExtractor"),nm=r(" and "),wa=n("a"),sm=r("CLIPTokenizerFast"),am=r(`. See the
`),Rr=n("code"),rm=r("__call__()"),im=r("and "),$a=n("a"),lm=r("decode()"),dm=r(" for more information."),cm=l(),_o=n("div"),g(An.$$.fragment),pm=l(),Nn=n("p"),mm=r("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),xa=n("a"),hm=r("batch_decode()"),fm=r(`. Please
refer to the docstring of this method for more information.`),um=l(),vo=n("div"),g(Vn.$$.fragment),gm=l(),Sn=n("p"),_m=r("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ea=n("a"),vm=r("decode()"),Pm=r(`. Please refer to
the docstring of this method for more information.`),Pl=l(),yt=n("h2"),Po=n("a"),Hr=n("span"),g(Wn.$$.fragment),Tm=l(),Kr=n("span"),Im=r("CLIPModel"),Tl=l(),R=n("div"),g(Bn.$$.fragment),ym=l(),Un=n("p"),bm=r("This model is a PyTorch "),Rn=n("a"),Cm=r("torch.nn.Module"),Lm=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),km=l(),G=n("div"),g(Hn.$$.fragment),wm=l(),bt=n("p"),$m=r("The "),za=n("a"),xm=r("CLIPModel"),Em=r(" forward method, overrides the "),Gr=n("code"),zm=r("__call__"),Mm=r(" special method."),jm=l(),g(To.$$.fragment),Fm=l(),Jr=n("p"),qm=r("Examples:"),Dm=l(),g(Kn.$$.fragment),Om=l(),J=n("div"),g(Gn.$$.fragment),Am=l(),Ct=n("p"),Nm=r("The "),Ma=n("a"),Vm=r("CLIPModel"),Sm=r(" forward method, overrides the "),Xr=n("code"),Wm=r("__call__"),Bm=r(" special method."),Um=l(),g(Io.$$.fragment),Rm=l(),Zr=n("p"),Hm=r("Examples:"),Km=l(),g(Jn.$$.fragment),Gm=l(),X=n("div"),g(Xn.$$.fragment),Jm=l(),Lt=n("p"),Xm=r("The "),ja=n("a"),Zm=r("CLIPModel"),Qm=r(" forward method, overrides the "),Qr=n("code"),Ym=r("__call__"),eh=r(" special method."),th=l(),g(yo.$$.fragment),oh=l(),Yr=n("p"),nh=r("Examples:"),sh=l(),g(Zn.$$.fragment),Il=l(),kt=n("h2"),bo=n("a"),ei=n("span"),g(Qn.$$.fragment),ah=l(),ti=n("span"),rh=r("CLIPTextModel"),yl=l(),wt=n("div"),g(Yn.$$.fragment),ih=l(),Z=n("div"),g(es.$$.fragment),lh=l(),$t=n("p"),dh=r("The "),Fa=n("a"),ch=r("CLIPTextModel"),ph=r(" forward method, overrides the "),oi=n("code"),mh=r("__call__"),hh=r(" special method."),fh=l(),g(Co.$$.fragment),uh=l(),ni=n("p"),gh=r("Examples:"),_h=l(),g(ts.$$.fragment),bl=l(),xt=n("h2"),Lo=n("a"),si=n("span"),g(os.$$.fragment),vh=l(),ai=n("span"),Ph=r("CLIPVisionModel"),Cl=l(),Et=n("div"),g(ns.$$.fragment),Th=l(),Q=n("div"),g(ss.$$.fragment),Ih=l(),zt=n("p"),yh=r("The "),qa=n("a"),bh=r("CLIPVisionModel"),Ch=r(" forward method, overrides the "),ri=n("code"),Lh=r("__call__"),kh=r(" special method."),wh=l(),g(ko.$$.fragment),$h=l(),ii=n("p"),xh=r("Examples:"),Eh=l(),g(as.$$.fragment),Ll=l(),Mt=n("h2"),wo=n("a"),li=n("span"),g(rs.$$.fragment),zh=l(),di=n("span"),Mh=r("TFCLIPModel"),kl=l(),q=n("div"),g(is.$$.fragment),jh=l(),ls=n("p"),Fh=r("This model inherits from "),Da=n("a"),qh=r("TFPreTrainedModel"),Dh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh=l(),ds=n("p"),Ah=r("This model is also a "),cs=n("a"),Nh=r("tf.keras.Model"),Vh=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sh=l(),g($o.$$.fragment),Wh=l(),Y=n("div"),g(ps.$$.fragment),Bh=l(),jt=n("p"),Uh=r("The "),Oa=n("a"),Rh=r("TFCLIPModel"),Hh=r(" forward method, overrides the "),ci=n("code"),Kh=r("__call__"),Gh=r(" special method."),Jh=l(),g(xo.$$.fragment),Xh=l(),pi=n("p"),Zh=r("Examples:"),Qh=l(),g(ms.$$.fragment),Yh=l(),ee=n("div"),g(hs.$$.fragment),ef=l(),Ft=n("p"),tf=r("The "),Aa=n("a"),of=r("TFCLIPModel"),nf=r(" forward method, overrides the "),mi=n("code"),sf=r("__call__"),af=r(" special method."),rf=l(),g(Eo.$$.fragment),lf=l(),hi=n("p"),df=r("Examples:"),cf=l(),g(fs.$$.fragment),pf=l(),te=n("div"),g(us.$$.fragment),mf=l(),qt=n("p"),hf=r("The "),Na=n("a"),ff=r("TFCLIPModel"),uf=r(" forward method, overrides the "),fi=n("code"),gf=r("__call__"),_f=r(" special method."),vf=l(),g(zo.$$.fragment),Pf=l(),ui=n("p"),Tf=r("Examples:"),If=l(),g(gs.$$.fragment),wl=l(),Dt=n("h2"),Mo=n("a"),gi=n("span"),g(_s.$$.fragment),yf=l(),_i=n("span"),bf=r("TFCLIPTextModel"),$l=l(),Ot=n("div"),g(vs.$$.fragment),Cf=l(),oe=n("div"),g(Ps.$$.fragment),Lf=l(),At=n("p"),kf=r("The "),Va=n("a"),wf=r("TFCLIPTextModel"),$f=r(" forward method, overrides the "),vi=n("code"),xf=r("__call__"),Ef=r(" special method."),zf=l(),g(jo.$$.fragment),Mf=l(),Pi=n("p"),jf=r("Examples:"),Ff=l(),g(Ts.$$.fragment),xl=l(),Nt=n("h2"),Fo=n("a"),Ti=n("span"),g(Is.$$.fragment),qf=l(),Ii=n("span"),Df=r("TFCLIPVisionModel"),El=l(),Vt=n("div"),g(ys.$$.fragment),Of=l(),ne=n("div"),g(bs.$$.fragment),Af=l(),St=n("p"),Nf=r("The "),Sa=n("a"),Vf=r("TFCLIPVisionModel"),Sf=r(" forward method, overrides the "),yi=n("code"),Wf=r("__call__"),Bf=r(" special method."),Uf=l(),g(qo.$$.fragment),Rf=l(),bi=n("p"),Hf=r("Examples:"),Kf=l(),g(Cs.$$.fragment),zl=l(),Wt=n("h2"),Do=n("a"),Ci=n("span"),g(Ls.$$.fragment),Gf=l(),Li=n("span"),Jf=r("FlaxCLIPModel"),Ml=l(),z=n("div"),g(ks.$$.fragment),Xf=l(),ws=n("p"),Zf=r("This model inherits from "),Wa=n("a"),Qf=r("FlaxPreTrainedModel"),Yf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eu=l(),$s=n("p"),tu=r("This model is also a Flax Linen "),xs=n("a"),ou=r("flax.linen.Module"),nu=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),su=l(),ki=n("p"),au=r("Finally, this model supports inherent JAX features such as:"),ru=l(),Ee=n("ul"),wi=n("li"),Es=n("a"),iu=r("Just-In-Time (JIT) compilation"),lu=l(),$i=n("li"),zs=n("a"),du=r("Automatic Differentiation"),cu=l(),xi=n("li"),Ms=n("a"),pu=r("Vectorization"),mu=l(),Ei=n("li"),js=n("a"),hu=r("Parallelization"),fu=l(),se=n("div"),g(Fs.$$.fragment),uu=l(),Bt=n("p"),gu=r("The "),zi=n("code"),_u=r("FlaxCLIPPreTrainedModel"),vu=r("forward method, overrides the "),Mi=n("code"),Pu=r("__call__"),Tu=r(" special method."),Iu=l(),g(Oo.$$.fragment),yu=l(),ji=n("p"),bu=r("Example:"),Cu=l(),g(qs.$$.fragment),Lu=l(),Ne=n("div"),g(Ds.$$.fragment),ku=l(),Fi=n("p"),wu=r("Examples:"),$u=l(),g(Os.$$.fragment),xu=l(),Ve=n("div"),g(As.$$.fragment),Eu=l(),qi=n("p"),zu=r("Examples:"),Mu=l(),g(Ns.$$.fragment),jl=l(),Ut=n("h2"),Ao=n("a"),Di=n("span"),g(Vs.$$.fragment),ju=l(),Oi=n("span"),Fu=r("FlaxCLIPTextModel"),Fl=l(),Rt=n("div"),g(Ss.$$.fragment),qu=l(),ae=n("div"),g(Ws.$$.fragment),Du=l(),Ht=n("p"),Ou=r("The "),Ai=n("code"),Au=r("FlaxCLIPTextPreTrainedModel"),Nu=r("forward method, overrides the "),Ni=n("code"),Vu=r("__call__"),Su=r(" special method."),Wu=l(),g(No.$$.fragment),Bu=l(),Vi=n("p"),Uu=r("Example:"),Ru=l(),g(Bs.$$.fragment),ql=l(),Kt=n("h2"),Vo=n("a"),Si=n("span"),g(Us.$$.fragment),Hu=l(),Wi=n("span"),Ku=r("FlaxCLIPVisionModel"),Dl=l(),Gt=n("div"),g(Rs.$$.fragment),Gu=l(),re=n("div"),g(Hs.$$.fragment),Ju=l(),Jt=n("p"),Xu=r("The "),Bi=n("code"),Zu=r("FlaxCLIPVisionPreTrainedModel"),Qu=r("forward method, overrides the "),Ui=n("code"),Yu=r("__call__"),eg=r(" special method."),tg=l(),g(So.$$.fragment),og=l(),Ri=n("p"),ng=r("Example:"),sg=l(),g(Ks.$$.fragment),this.h()},l(t){const m=lP('[data-svelte="svelte-1phssyn"]',document.head);p=s(m,"META",{name:!0,content:!0}),m.forEach(o),L=d(t),u=s(t,"H1",{class:!0});var Gs=a(u);b=s(Gs,"A",{id:!0,class:!0,href:!0});var Hi=a(b);C=s(Hi,"SPAN",{});var Ki=a(C);_(y.$$.fragment,Ki),Ki.forEach(o),Hi.forEach(o),f=d(Gs),k=s(Gs,"SPAN",{});var Gi=a(k);Ho=i(Gi,"CLIP"),Gi.forEach(o),Gs.forEach(o),rt=d(t),M=s(t,"H2",{class:!0});var Js=a(M);ue=s(Js,"A",{id:!0,class:!0,href:!0});var Ji=a(ue);ye=s(Ji,"SPAN",{});var Xi=a(ye);_(be.$$.fragment,Xi),Xi.forEach(o),Ji.forEach(o),Ko=d(Js),Ce=s(Js,"SPAN",{});var Zi=a(Ce);Go=i(Zi,"Overview"),Zi.forEach(o),Js.forEach(o),Xt=d(t),pe=s(t,"P",{});var Xs=a(pe);Me=i(Xs,"The CLIP model was proposed in "),Le=s(Xs,"A",{href:!0,rel:!0});var Qi=a(Le);Zt=i(Qi,"Learning Transferable Visual Models From Natural Language Supervision"),Qi.forEach(o),H=i(Xs,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Xs.forEach(o),me=d(t),je=s(t,"P",{});var Yi=a(je);it=i(Yi,"The abstract from the paper is the following:"),Yi.forEach(o),Qt=d(t),Fe=s(t,"P",{});var el=a(Fe);ke=s(el,"EM",{});var tl=a(ke);Jo=i(tl,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
restricted form of supervision limits their generality and usability since additional labeled data is needed to specify
any other visual concept. Learning directly from raw text about images is a promising alternative which leverages a
much broader source of supervision. We demonstrate that the simple pre-training task of predicting which caption goes
with which image is an efficient and scalable way to learn SOTA image representations from scratch on a dataset of 400
million (image, text) pairs collected from the internet. After pre-training, natural language is used to reference
learned visual concepts (or describe new ones) enabling zero-shot transfer of the model to downstream tasks. We study
the performance of this approach by benchmarking on over 30 different existing computer vision datasets, spanning tasks
such as OCR, action recognition in videos, geo-localization, and many types of fine-grained object classification. The
model transfers non-trivially to most tasks and is often competitive with a fully supervised baseline without the need
for any dataset specific training. For instance, we match the accuracy of the original ResNet-50 on ImageNet zero-shot
without needing to use any of the 1.28 million training examples it was trained on. We release our code and pre-trained
model weights at this https URL.`),tl.forEach(o),el.forEach(o),Yt=d(t),O=s(t,"H2",{class:!0});var Zs=a(O);ge=s(Zs,"A",{id:!0,class:!0,href:!0});var ig=a(ge);we=s(ig,"SPAN",{});var lg=a(we);_($e.$$.fragment,lg),lg.forEach(o),ig.forEach(o),Xo=d(Zs),xe=s(Zs,"SPAN",{});var dg=a(xe);Zo=i(dg,"Usage"),dg.forEach(o),Zs.forEach(o),eo=d(t),he=s(t,"P",{});var cg=a(he);Qo=i(cg,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),cg.forEach(o),qe=d(t),_e=s(t,"P",{});var Al=a(_e);$=i(Al,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=s(Al,"A",{href:!0});var pg=a(j);to=i(pg,"CLIPFeatureExtractor"),pg.forEach(o),Qs=i(Al," can be used to resize (or rescale) and normalize images for the model."),Al.forEach(o),Yo=d(t),E=s(t,"P",{});var ie=a(E);Ys=i(ie,"The "),lt=s(ie,"A",{href:!0});var mg=a(lt);ea=i(mg,"CLIPTokenizer"),mg.forEach(o),De=i(ie," is used to encode the text. The "),ve=s(ie,"A",{href:!0});var hg=a(ve);ta=i(hg,"CLIPProcessor"),hg.forEach(o),oa=i(ie,` wraps
`),Pe=s(ie,"A",{href:!0});var fg=a(Pe);na=i(fg,"CLIPFeatureExtractor"),fg.forEach(o),sa=i(ie," and "),Oe=s(ie,"A",{href:!0});var ug=a(Oe);aa=i(ug,"CLIPTokenizer"),ug.forEach(o),xd=i(ie,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ra=s(ie,"A",{href:!0});var gg=a(ra);Ed=i(gg,"CLIPProcessor"),gg.forEach(o),zd=i(ie," and "),ia=s(ie,"A",{href:!0});var _g=a(ia);Md=i(_g,"CLIPModel"),_g.forEach(o),jd=i(ie,"."),ie.forEach(o),nl=d(t),_(en.$$.fragment,t),sl=d(t),Ae=s(t,"P",{});var Ba=a(Ae);Fd=i(Ba,"This model was contributed by "),tn=s(Ba,"A",{href:!0,rel:!0});var vg=a(tn);qd=i(vg,"valhalla"),vg.forEach(o),Dd=i(Ba,". The original code can be found "),on=s(Ba,"A",{href:!0,rel:!0});var Pg=a(on);Od=i(Pg,"here"),Pg.forEach(o),Ad=i(Ba,"."),Ba.forEach(o),al=d(t),dt=s(t,"H2",{class:!0});var Nl=a(dt);oo=s(Nl,"A",{id:!0,class:!0,href:!0});var Tg=a(oo);pr=s(Tg,"SPAN",{});var Ig=a(pr);_(nn.$$.fragment,Ig),Ig.forEach(o),Tg.forEach(o),Nd=d(Nl),mr=s(Nl,"SPAN",{});var yg=a(mr);Vd=i(yg,"CLIPConfig"),yg.forEach(o),Nl.forEach(o),rl=d(t),fe=s(t,"DIV",{class:!0});var Wo=a(fe);_(sn.$$.fragment,Wo),Sd=d(Wo),no=s(Wo,"P",{});var ol=a(no);la=s(ol,"A",{href:!0});var bg=a(la);Wd=i(bg,"CLIPConfig"),bg.forEach(o),Bd=i(ol," is the configuration class to store the configuration of a "),da=s(ol,"A",{href:!0});var Cg=a(da);Ud=i(Cg,"CLIPModel"),Cg.forEach(o),Rd=i(ol,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),ol.forEach(o),Hd=d(Wo),ct=s(Wo,"P",{});var Ua=a(ct);Kd=i(Ua,"Configuration objects inherit from "),ca=s(Ua,"A",{href:!0});var Lg=a(ca);Gd=i(Lg,"PretrainedConfig"),Lg.forEach(o),Jd=i(Ua,` and can be used to control the model outputs. Read the
documentation from `),pa=s(Ua,"A",{href:!0});var kg=a(pa);Xd=i(kg,"PretrainedConfig"),kg.forEach(o),Zd=i(Ua," for more information."),Ua.forEach(o),Qd=d(Wo),so=s(Wo,"DIV",{class:!0});var Vl=a(so);_(an.$$.fragment,Vl),Yd=d(Vl),rn=s(Vl,"P",{});var Sl=a(rn);ec=i(Sl,"Instantiate a "),ma=s(Sl,"A",{href:!0});var wg=a(ma);tc=i(wg,"CLIPConfig"),wg.forEach(o),oc=i(Sl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Sl.forEach(o),Vl.forEach(o),Wo.forEach(o),il=d(t),pt=s(t,"H2",{class:!0});var Wl=a(pt);ao=s(Wl,"A",{id:!0,class:!0,href:!0});var $g=a(ao);hr=s($g,"SPAN",{});var xg=a(hr);_(ln.$$.fragment,xg),xg.forEach(o),$g.forEach(o),nc=d(Wl),fr=s(Wl,"SPAN",{});var Eg=a(fr);sc=i(Eg,"CLIPTextConfig"),Eg.forEach(o),Wl.forEach(o),ll=d(t),V=s(t,"DIV",{class:!0});var Se=a(V);_(dn.$$.fragment,Se),ac=d(Se),mt=s(Se,"P",{});var Ra=a(mt);rc=i(Ra,"This is the configuration class to store the configuration of a "),ha=s(Ra,"A",{href:!0});var zg=a(ha);ic=i(zg,"CLIPModel"),zg.forEach(o),lc=i(Ra,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),cn=s(Ra,"A",{href:!0,rel:!0});var Mg=a(cn);dc=i(Mg,"openai/clip-vit-base-patch32"),Mg.forEach(o),cc=i(Ra," architecture."),Ra.forEach(o),pc=d(Se),ht=s(Se,"P",{});var Ha=a(ht);mc=i(Ha,"Configuration objects inherit from "),fa=s(Ha,"A",{href:!0});var jg=a(fa);hc=i(jg,"PretrainedConfig"),jg.forEach(o),fc=i(Ha,` and can be used to control the model outputs. Read the
documentation from `),ua=s(Ha,"A",{href:!0});var Fg=a(ua);uc=i(Fg,"PretrainedConfig"),Fg.forEach(o),gc=i(Ha," for more information."),Ha.forEach(o),_c=d(Se),ur=s(Se,"P",{});var qg=a(ur);vc=i(qg,"Example:"),qg.forEach(o),Pc=d(Se),_(pn.$$.fragment,Se),Se.forEach(o),dl=d(t),ft=s(t,"H2",{class:!0});var Bl=a(ft);ro=s(Bl,"A",{id:!0,class:!0,href:!0});var Dg=a(ro);gr=s(Dg,"SPAN",{});var Og=a(gr);_(mn.$$.fragment,Og),Og.forEach(o),Dg.forEach(o),Tc=d(Bl),_r=s(Bl,"SPAN",{});var Ag=a(_r);Ic=i(Ag,"CLIPVisionConfig"),Ag.forEach(o),Bl.forEach(o),cl=d(t),S=s(t,"DIV",{class:!0});var We=a(S);_(hn.$$.fragment,We),yc=d(We),ut=s(We,"P",{});var Ka=a(ut);bc=i(Ka,"This is the configuration class to store the configuration of a "),ga=s(Ka,"A",{href:!0});var Ng=a(ga);Cc=i(Ng,"CLIPModel"),Ng.forEach(o),Lc=i(Ka,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),fn=s(Ka,"A",{href:!0,rel:!0});var Vg=a(fn);kc=i(Vg,"openai/clip-vit-base-patch32"),Vg.forEach(o),wc=i(Ka," architecture."),Ka.forEach(o),$c=d(We),gt=s(We,"P",{});var Ga=a(gt);xc=i(Ga,"Configuration objects inherit from "),_a=s(Ga,"A",{href:!0});var Sg=a(_a);Ec=i(Sg,"PretrainedConfig"),Sg.forEach(o),zc=i(Ga,` and can be used to control the model outputs. Read the
documentation from `),va=s(Ga,"A",{href:!0});var Wg=a(va);Mc=i(Wg,"PretrainedConfig"),Wg.forEach(o),jc=i(Ga," for more information."),Ga.forEach(o),Fc=d(We),vr=s(We,"P",{});var Bg=a(vr);qc=i(Bg,"Example:"),Bg.forEach(o),Dc=d(We),_(un.$$.fragment,We),We.forEach(o),pl=d(t),_t=s(t,"H2",{class:!0});var Ul=a(_t);io=s(Ul,"A",{id:!0,class:!0,href:!0});var Ug=a(io);Pr=s(Ug,"SPAN",{});var Rg=a(Pr);_(gn.$$.fragment,Rg),Rg.forEach(o),Ug.forEach(o),Oc=d(Ul),Tr=s(Ul,"SPAN",{});var Hg=a(Tr);Ac=i(Hg,"CLIPTokenizer"),Hg.forEach(o),Ul.forEach(o),ml=d(t),F=s(t,"DIV",{class:!0});var le=a(F);_(_n.$$.fragment,le),Nc=d(le),Ir=s(le,"P",{});var Kg=a(Ir);Vc=i(Kg,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Kg.forEach(o),Sc=d(le),vn=s(le,"P",{});var Rl=a(vn);Wc=i(Rl,"This tokenizer inherits from "),Pa=s(Rl,"A",{href:!0});var Gg=a(Pa);Bc=i(Gg,"PreTrainedTokenizer"),Gg.forEach(o),Uc=i(Rl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rl.forEach(o),Rc=d(le),Te=s(le,"DIV",{class:!0});var Bo=a(Te);_(Pn.$$.fragment,Bo),Hc=d(Bo),yr=s(Bo,"P",{});var Jg=a(yr);Kc=i(Jg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Jg.forEach(o),Gc=d(Bo),br=s(Bo,"UL",{});var Xg=a(br);Ta=s(Xg,"LI",{});var ag=a(Ta);Jc=i(ag,"single sequence: "),Cr=s(ag,"CODE",{});var Zg=a(Cr);Xc=i(Zg,"<|startoftext|> X <|endoftext|>"),Zg.forEach(o),ag.forEach(o),Xg.forEach(o),Zc=d(Bo),Lr=s(Bo,"P",{});var Qg=a(Lr);Qc=i(Qg,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Qg.forEach(o),Bo.forEach(o),Yc=d(le),lo=s(le,"DIV",{class:!0});var Hl=a(lo);_(Tn.$$.fragment,Hl),ep=d(Hl),In=s(Hl,"P",{});var Kl=a(In);tp=i(Kl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),kr=s(Kl,"CODE",{});var Yg=a(kr);op=i(Yg,"prepare_for_model"),Yg.forEach(o),np=i(Kl," method."),Kl.forEach(o),Hl.forEach(o),sp=d(le),co=s(le,"DIV",{class:!0});var Gl=a(co);_(yn.$$.fragment,Gl),ap=d(Gl),wr=s(Gl,"P",{});var e_=a(wr);rp=i(e_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),e_.forEach(o),Gl.forEach(o),ip=d(le),Ia=s(le,"DIV",{class:!0});var t_=a(Ia);_(bn.$$.fragment,t_),t_.forEach(o),le.forEach(o),hl=d(t),vt=s(t,"H2",{class:!0});var Jl=a(vt);po=s(Jl,"A",{id:!0,class:!0,href:!0});var o_=a(po);$r=s(o_,"SPAN",{});var n_=a($r);_(Cn.$$.fragment,n_),n_.forEach(o),o_.forEach(o),lp=d(Jl),xr=s(Jl,"SPAN",{});var s_=a(xr);dp=i(s_,"CLIPTokenizerFast"),s_.forEach(o),Jl.forEach(o),fl=d(t),W=s(t,"DIV",{class:!0});var Be=a(W);_(Ln.$$.fragment,Be),cp=d(Be),kn=s(Be,"P",{});var Xl=a(kn);pp=i(Xl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Er=s(Xl,"EM",{});var a_=a(Er);mp=i(a_,"tokenizers"),a_.forEach(o),hp=i(Xl,` library). Based on byte-level
Byte-Pair-Encoding.`),Xl.forEach(o),fp=d(Be),wn=s(Be,"P",{});var Zl=a(wn);up=i(Zl,"This tokenizer inherits from "),ya=s(Zl,"A",{href:!0});var r_=a(ya);gp=i(r_,"PreTrainedTokenizerFast"),r_.forEach(o),_p=i(Zl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Zl.forEach(o),vp=d(Be),Ie=s(Be,"DIV",{class:!0});var Uo=a(Ie);_($n.$$.fragment,Uo),Pp=d(Uo),zr=s(Uo,"P",{});var i_=a(zr);Tp=i(i_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),i_.forEach(o),Ip=d(Uo),Mr=s(Uo,"UL",{});var l_=a(Mr);ba=s(l_,"LI",{});var rg=a(ba);yp=i(rg,"single sequence: "),jr=s(rg,"CODE",{});var d_=a(jr);bp=i(d_,"<|startoftext|> X <|endoftext|>"),d_.forEach(o),rg.forEach(o),l_.forEach(o),Cp=d(Uo),Fr=s(Uo,"P",{});var c_=a(Fr);Lp=i(c_,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),c_.forEach(o),Uo.forEach(o),kp=d(Be),mo=s(Be,"DIV",{class:!0});var Ql=a(mo);_(xn.$$.fragment,Ql),wp=d(Ql),qr=s(Ql,"P",{});var p_=a(qr);$p=i(p_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),p_.forEach(o),Ql.forEach(o),Be.forEach(o),ul=d(t),Pt=s(t,"H2",{class:!0});var Yl=a(Pt);ho=s(Yl,"A",{id:!0,class:!0,href:!0});var m_=a(ho);Dr=s(m_,"SPAN",{});var h_=a(Dr);_(En.$$.fragment,h_),h_.forEach(o),m_.forEach(o),xp=d(Yl),Or=s(Yl,"SPAN",{});var f_=a(Or);Ep=i(f_,"CLIPFeatureExtractor"),f_.forEach(o),Yl.forEach(o),gl=d(t),B=s(t,"DIV",{class:!0});var Ue=a(B);_(zn.$$.fragment,Ue),zp=d(Ue),Ar=s(Ue,"P",{});var u_=a(Ar);Mp=i(u_,"Constructs a CLIP feature extractor."),u_.forEach(o),jp=d(Ue),Mn=s(Ue,"P",{});var ed=a(Mn);Fp=i(ed,"This feature extractor inherits from "),Ca=s(ed,"A",{href:!0});var g_=a(Ca);qp=i(g_,"FeatureExtractionMixin"),g_.forEach(o),Dp=i(ed,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ed.forEach(o),Op=d(Ue),fo=s(Ue,"DIV",{class:!0});var td=a(fo);_(jn.$$.fragment,td),Ap=d(td),Fn=s(td,"P",{});var od=a(Fn);Np=i(od,"Crops "),Nr=s(od,"CODE",{});var __=a(Nr);Vp=i(__,"image"),__.forEach(o),Sp=i(od,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),od.forEach(o),td.forEach(o),Wp=d(Ue),uo=s(Ue,"DIV",{class:!0});var nd=a(uo);_(qn.$$.fragment,nd),Bp=d(nd),Tt=s(nd,"P",{});var Ja=a(Tt);Up=i(Ja,"Resizes "),Vr=s(Ja,"CODE",{});var v_=a(Vr);Rp=i(v_,"image"),v_.forEach(o),Hp=i(Ja,". Note that this will trigger a conversion of "),Sr=s(Ja,"CODE",{});var P_=a(Sr);Kp=i(P_,"image"),P_.forEach(o),Gp=i(Ja," to a PIL Image."),Ja.forEach(o),nd.forEach(o),Ue.forEach(o),_l=d(t),It=s(t,"H2",{class:!0});var sd=a(It);go=s(sd,"A",{id:!0,class:!0,href:!0});var T_=a(go);Wr=s(T_,"SPAN",{});var I_=a(Wr);_(Dn.$$.fragment,I_),I_.forEach(o),T_.forEach(o),Jp=d(sd),Br=s(sd,"SPAN",{});var y_=a(Br);Xp=i(y_,"CLIPProcessor"),y_.forEach(o),sd.forEach(o),vl=d(t),U=s(t,"DIV",{class:!0});var Re=a(U);_(On.$$.fragment,Re),Zp=d(Re),Ur=s(Re,"P",{});var b_=a(Ur);Qp=i(b_,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),b_.forEach(o),Yp=d(Re),K=s(Re,"P",{});var ze=a(K);La=s(ze,"A",{href:!0});var C_=a(La);em=i(C_,"CLIPProcessor"),C_.forEach(o),tm=i(ze," offers all the functionalities of "),ka=s(ze,"A",{href:!0});var L_=a(ka);om=i(L_,"CLIPFeatureExtractor"),L_.forEach(o),nm=i(ze," and "),wa=s(ze,"A",{href:!0});var k_=a(wa);sm=i(k_,"CLIPTokenizerFast"),k_.forEach(o),am=i(ze,`. See the
`),Rr=s(ze,"CODE",{});var w_=a(Rr);rm=i(w_,"__call__()"),w_.forEach(o),im=i(ze,"and "),$a=s(ze,"A",{href:!0});var $_=a($a);lm=i($_,"decode()"),$_.forEach(o),dm=i(ze," for more information."),ze.forEach(o),cm=d(Re),_o=s(Re,"DIV",{class:!0});var ad=a(_o);_(An.$$.fragment,ad),pm=d(ad),Nn=s(ad,"P",{});var rd=a(Nn);mm=i(rd,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),xa=s(rd,"A",{href:!0});var x_=a(xa);hm=i(x_,"batch_decode()"),x_.forEach(o),fm=i(rd,`. Please
refer to the docstring of this method for more information.`),rd.forEach(o),ad.forEach(o),um=d(Re),vo=s(Re,"DIV",{class:!0});var id=a(vo);_(Vn.$$.fragment,id),gm=d(id),Sn=s(id,"P",{});var ld=a(Sn);_m=i(ld,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ea=s(ld,"A",{href:!0});var E_=a(Ea);vm=i(E_,"decode()"),E_.forEach(o),Pm=i(ld,`. Please refer to
the docstring of this method for more information.`),ld.forEach(o),id.forEach(o),Re.forEach(o),Pl=d(t),yt=s(t,"H2",{class:!0});var dd=a(yt);Po=s(dd,"A",{id:!0,class:!0,href:!0});var z_=a(Po);Hr=s(z_,"SPAN",{});var M_=a(Hr);_(Wn.$$.fragment,M_),M_.forEach(o),z_.forEach(o),Tm=d(dd),Kr=s(dd,"SPAN",{});var j_=a(Kr);Im=i(j_,"CLIPModel"),j_.forEach(o),dd.forEach(o),Tl=d(t),R=s(t,"DIV",{class:!0});var He=a(R);_(Bn.$$.fragment,He),ym=d(He),Un=s(He,"P",{});var cd=a(Un);bm=i(cd,"This model is a PyTorch "),Rn=s(cd,"A",{href:!0,rel:!0});var F_=a(Rn);Cm=i(F_,"torch.nn.Module"),F_.forEach(o),Lm=i(cd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cd.forEach(o),km=d(He),G=s(He,"DIV",{class:!0});var Ke=a(G);_(Hn.$$.fragment,Ke),wm=d(Ke),bt=s(Ke,"P",{});var Xa=a(bt);$m=i(Xa,"The "),za=s(Xa,"A",{href:!0});var q_=a(za);xm=i(q_,"CLIPModel"),q_.forEach(o),Em=i(Xa," forward method, overrides the "),Gr=s(Xa,"CODE",{});var D_=a(Gr);zm=i(D_,"__call__"),D_.forEach(o),Mm=i(Xa," special method."),Xa.forEach(o),jm=d(Ke),_(To.$$.fragment,Ke),Fm=d(Ke),Jr=s(Ke,"P",{});var O_=a(Jr);qm=i(O_,"Examples:"),O_.forEach(o),Dm=d(Ke),_(Kn.$$.fragment,Ke),Ke.forEach(o),Om=d(He),J=s(He,"DIV",{class:!0});var Ge=a(J);_(Gn.$$.fragment,Ge),Am=d(Ge),Ct=s(Ge,"P",{});var Za=a(Ct);Nm=i(Za,"The "),Ma=s(Za,"A",{href:!0});var A_=a(Ma);Vm=i(A_,"CLIPModel"),A_.forEach(o),Sm=i(Za," forward method, overrides the "),Xr=s(Za,"CODE",{});var N_=a(Xr);Wm=i(N_,"__call__"),N_.forEach(o),Bm=i(Za," special method."),Za.forEach(o),Um=d(Ge),_(Io.$$.fragment,Ge),Rm=d(Ge),Zr=s(Ge,"P",{});var V_=a(Zr);Hm=i(V_,"Examples:"),V_.forEach(o),Km=d(Ge),_(Jn.$$.fragment,Ge),Ge.forEach(o),Gm=d(He),X=s(He,"DIV",{class:!0});var Je=a(X);_(Xn.$$.fragment,Je),Jm=d(Je),Lt=s(Je,"P",{});var Qa=a(Lt);Xm=i(Qa,"The "),ja=s(Qa,"A",{href:!0});var S_=a(ja);Zm=i(S_,"CLIPModel"),S_.forEach(o),Qm=i(Qa," forward method, overrides the "),Qr=s(Qa,"CODE",{});var W_=a(Qr);Ym=i(W_,"__call__"),W_.forEach(o),eh=i(Qa," special method."),Qa.forEach(o),th=d(Je),_(yo.$$.fragment,Je),oh=d(Je),Yr=s(Je,"P",{});var B_=a(Yr);nh=i(B_,"Examples:"),B_.forEach(o),sh=d(Je),_(Zn.$$.fragment,Je),Je.forEach(o),He.forEach(o),Il=d(t),kt=s(t,"H2",{class:!0});var pd=a(kt);bo=s(pd,"A",{id:!0,class:!0,href:!0});var U_=a(bo);ei=s(U_,"SPAN",{});var R_=a(ei);_(Qn.$$.fragment,R_),R_.forEach(o),U_.forEach(o),ah=d(pd),ti=s(pd,"SPAN",{});var H_=a(ti);rh=i(H_,"CLIPTextModel"),H_.forEach(o),pd.forEach(o),yl=d(t),wt=s(t,"DIV",{class:!0});var md=a(wt);_(Yn.$$.fragment,md),ih=d(md),Z=s(md,"DIV",{class:!0});var Xe=a(Z);_(es.$$.fragment,Xe),lh=d(Xe),$t=s(Xe,"P",{});var Ya=a($t);dh=i(Ya,"The "),Fa=s(Ya,"A",{href:!0});var K_=a(Fa);ch=i(K_,"CLIPTextModel"),K_.forEach(o),ph=i(Ya," forward method, overrides the "),oi=s(Ya,"CODE",{});var G_=a(oi);mh=i(G_,"__call__"),G_.forEach(o),hh=i(Ya," special method."),Ya.forEach(o),fh=d(Xe),_(Co.$$.fragment,Xe),uh=d(Xe),ni=s(Xe,"P",{});var J_=a(ni);gh=i(J_,"Examples:"),J_.forEach(o),_h=d(Xe),_(ts.$$.fragment,Xe),Xe.forEach(o),md.forEach(o),bl=d(t),xt=s(t,"H2",{class:!0});var hd=a(xt);Lo=s(hd,"A",{id:!0,class:!0,href:!0});var X_=a(Lo);si=s(X_,"SPAN",{});var Z_=a(si);_(os.$$.fragment,Z_),Z_.forEach(o),X_.forEach(o),vh=d(hd),ai=s(hd,"SPAN",{});var Q_=a(ai);Ph=i(Q_,"CLIPVisionModel"),Q_.forEach(o),hd.forEach(o),Cl=d(t),Et=s(t,"DIV",{class:!0});var fd=a(Et);_(ns.$$.fragment,fd),Th=d(fd),Q=s(fd,"DIV",{class:!0});var Ze=a(Q);_(ss.$$.fragment,Ze),Ih=d(Ze),zt=s(Ze,"P",{});var er=a(zt);yh=i(er,"The "),qa=s(er,"A",{href:!0});var Y_=a(qa);bh=i(Y_,"CLIPVisionModel"),Y_.forEach(o),Ch=i(er," forward method, overrides the "),ri=s(er,"CODE",{});var ev=a(ri);Lh=i(ev,"__call__"),ev.forEach(o),kh=i(er," special method."),er.forEach(o),wh=d(Ze),_(ko.$$.fragment,Ze),$h=d(Ze),ii=s(Ze,"P",{});var tv=a(ii);xh=i(tv,"Examples:"),tv.forEach(o),Eh=d(Ze),_(as.$$.fragment,Ze),Ze.forEach(o),fd.forEach(o),Ll=d(t),Mt=s(t,"H2",{class:!0});var ud=a(Mt);wo=s(ud,"A",{id:!0,class:!0,href:!0});var ov=a(wo);li=s(ov,"SPAN",{});var nv=a(li);_(rs.$$.fragment,nv),nv.forEach(o),ov.forEach(o),zh=d(ud),di=s(ud,"SPAN",{});var sv=a(di);Mh=i(sv,"TFCLIPModel"),sv.forEach(o),ud.forEach(o),kl=d(t),q=s(t,"DIV",{class:!0});var de=a(q);_(is.$$.fragment,de),jh=d(de),ls=s(de,"P",{});var gd=a(ls);Fh=i(gd,"This model inherits from "),Da=s(gd,"A",{href:!0});var av=a(Da);qh=i(av,"TFPreTrainedModel"),av.forEach(o),Dh=i(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(o),Oh=d(de),ds=s(de,"P",{});var _d=a(ds);Ah=i(_d,"This model is also a "),cs=s(_d,"A",{href:!0,rel:!0});var rv=a(cs);Nh=i(rv,"tf.keras.Model"),rv.forEach(o),Vh=i(_d,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_d.forEach(o),Sh=d(de),_($o.$$.fragment,de),Wh=d(de),Y=s(de,"DIV",{class:!0});var Qe=a(Y);_(ps.$$.fragment,Qe),Bh=d(Qe),jt=s(Qe,"P",{});var tr=a(jt);Uh=i(tr,"The "),Oa=s(tr,"A",{href:!0});var iv=a(Oa);Rh=i(iv,"TFCLIPModel"),iv.forEach(o),Hh=i(tr," forward method, overrides the "),ci=s(tr,"CODE",{});var lv=a(ci);Kh=i(lv,"__call__"),lv.forEach(o),Gh=i(tr," special method."),tr.forEach(o),Jh=d(Qe),_(xo.$$.fragment,Qe),Xh=d(Qe),pi=s(Qe,"P",{});var dv=a(pi);Zh=i(dv,"Examples:"),dv.forEach(o),Qh=d(Qe),_(ms.$$.fragment,Qe),Qe.forEach(o),Yh=d(de),ee=s(de,"DIV",{class:!0});var Ye=a(ee);_(hs.$$.fragment,Ye),ef=d(Ye),Ft=s(Ye,"P",{});var or=a(Ft);tf=i(or,"The "),Aa=s(or,"A",{href:!0});var cv=a(Aa);of=i(cv,"TFCLIPModel"),cv.forEach(o),nf=i(or," forward method, overrides the "),mi=s(or,"CODE",{});var pv=a(mi);sf=i(pv,"__call__"),pv.forEach(o),af=i(or," special method."),or.forEach(o),rf=d(Ye),_(Eo.$$.fragment,Ye),lf=d(Ye),hi=s(Ye,"P",{});var mv=a(hi);df=i(mv,"Examples:"),mv.forEach(o),cf=d(Ye),_(fs.$$.fragment,Ye),Ye.forEach(o),pf=d(de),te=s(de,"DIV",{class:!0});var et=a(te);_(us.$$.fragment,et),mf=d(et),qt=s(et,"P",{});var nr=a(qt);hf=i(nr,"The "),Na=s(nr,"A",{href:!0});var hv=a(Na);ff=i(hv,"TFCLIPModel"),hv.forEach(o),uf=i(nr," forward method, overrides the "),fi=s(nr,"CODE",{});var fv=a(fi);gf=i(fv,"__call__"),fv.forEach(o),_f=i(nr," special method."),nr.forEach(o),vf=d(et),_(zo.$$.fragment,et),Pf=d(et),ui=s(et,"P",{});var uv=a(ui);Tf=i(uv,"Examples:"),uv.forEach(o),If=d(et),_(gs.$$.fragment,et),et.forEach(o),de.forEach(o),wl=d(t),Dt=s(t,"H2",{class:!0});var vd=a(Dt);Mo=s(vd,"A",{id:!0,class:!0,href:!0});var gv=a(Mo);gi=s(gv,"SPAN",{});var _v=a(gi);_(_s.$$.fragment,_v),_v.forEach(o),gv.forEach(o),yf=d(vd),_i=s(vd,"SPAN",{});var vv=a(_i);bf=i(vv,"TFCLIPTextModel"),vv.forEach(o),vd.forEach(o),$l=d(t),Ot=s(t,"DIV",{class:!0});var Pd=a(Ot);_(vs.$$.fragment,Pd),Cf=d(Pd),oe=s(Pd,"DIV",{class:!0});var tt=a(oe);_(Ps.$$.fragment,tt),Lf=d(tt),At=s(tt,"P",{});var sr=a(At);kf=i(sr,"The "),Va=s(sr,"A",{href:!0});var Pv=a(Va);wf=i(Pv,"TFCLIPTextModel"),Pv.forEach(o),$f=i(sr," forward method, overrides the "),vi=s(sr,"CODE",{});var Tv=a(vi);xf=i(Tv,"__call__"),Tv.forEach(o),Ef=i(sr," special method."),sr.forEach(o),zf=d(tt),_(jo.$$.fragment,tt),Mf=d(tt),Pi=s(tt,"P",{});var Iv=a(Pi);jf=i(Iv,"Examples:"),Iv.forEach(o),Ff=d(tt),_(Ts.$$.fragment,tt),tt.forEach(o),Pd.forEach(o),xl=d(t),Nt=s(t,"H2",{class:!0});var Td=a(Nt);Fo=s(Td,"A",{id:!0,class:!0,href:!0});var yv=a(Fo);Ti=s(yv,"SPAN",{});var bv=a(Ti);_(Is.$$.fragment,bv),bv.forEach(o),yv.forEach(o),qf=d(Td),Ii=s(Td,"SPAN",{});var Cv=a(Ii);Df=i(Cv,"TFCLIPVisionModel"),Cv.forEach(o),Td.forEach(o),El=d(t),Vt=s(t,"DIV",{class:!0});var Id=a(Vt);_(ys.$$.fragment,Id),Of=d(Id),ne=s(Id,"DIV",{class:!0});var ot=a(ne);_(bs.$$.fragment,ot),Af=d(ot),St=s(ot,"P",{});var ar=a(St);Nf=i(ar,"The "),Sa=s(ar,"A",{href:!0});var Lv=a(Sa);Vf=i(Lv,"TFCLIPVisionModel"),Lv.forEach(o),Sf=i(ar," forward method, overrides the "),yi=s(ar,"CODE",{});var kv=a(yi);Wf=i(kv,"__call__"),kv.forEach(o),Bf=i(ar," special method."),ar.forEach(o),Uf=d(ot),_(qo.$$.fragment,ot),Rf=d(ot),bi=s(ot,"P",{});var wv=a(bi);Hf=i(wv,"Examples:"),wv.forEach(o),Kf=d(ot),_(Cs.$$.fragment,ot),ot.forEach(o),Id.forEach(o),zl=d(t),Wt=s(t,"H2",{class:!0});var yd=a(Wt);Do=s(yd,"A",{id:!0,class:!0,href:!0});var $v=a(Do);Ci=s($v,"SPAN",{});var xv=a(Ci);_(Ls.$$.fragment,xv),xv.forEach(o),$v.forEach(o),Gf=d(yd),Li=s(yd,"SPAN",{});var Ev=a(Li);Jf=i(Ev,"FlaxCLIPModel"),Ev.forEach(o),yd.forEach(o),Ml=d(t),z=s(t,"DIV",{class:!0});var N=a(z);_(ks.$$.fragment,N),Xf=d(N),ws=s(N,"P",{});var bd=a(ws);Zf=i(bd,"This model inherits from "),Wa=s(bd,"A",{href:!0});var zv=a(Wa);Qf=i(zv,"FlaxPreTrainedModel"),zv.forEach(o),Yf=i(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bd.forEach(o),eu=d(N),$s=s(N,"P",{});var Cd=a($s);tu=i(Cd,"This model is also a Flax Linen "),xs=s(Cd,"A",{href:!0,rel:!0});var Mv=a(xs);ou=i(Mv,"flax.linen.Module"),Mv.forEach(o),nu=i(Cd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Cd.forEach(o),su=d(N),ki=s(N,"P",{});var jv=a(ki);au=i(jv,"Finally, this model supports inherent JAX features such as:"),jv.forEach(o),ru=d(N),Ee=s(N,"UL",{});var Ro=a(Ee);wi=s(Ro,"LI",{});var Fv=a(wi);Es=s(Fv,"A",{href:!0,rel:!0});var qv=a(Es);iu=i(qv,"Just-In-Time (JIT) compilation"),qv.forEach(o),Fv.forEach(o),lu=d(Ro),$i=s(Ro,"LI",{});var Dv=a($i);zs=s(Dv,"A",{href:!0,rel:!0});var Ov=a(zs);du=i(Ov,"Automatic Differentiation"),Ov.forEach(o),Dv.forEach(o),cu=d(Ro),xi=s(Ro,"LI",{});var Av=a(xi);Ms=s(Av,"A",{href:!0,rel:!0});var Nv=a(Ms);pu=i(Nv,"Vectorization"),Nv.forEach(o),Av.forEach(o),mu=d(Ro),Ei=s(Ro,"LI",{});var Vv=a(Ei);js=s(Vv,"A",{href:!0,rel:!0});var Sv=a(js);hu=i(Sv,"Parallelization"),Sv.forEach(o),Vv.forEach(o),Ro.forEach(o),fu=d(N),se=s(N,"DIV",{class:!0});var nt=a(se);_(Fs.$$.fragment,nt),uu=d(nt),Bt=s(nt,"P",{});var rr=a(Bt);gu=i(rr,"The "),zi=s(rr,"CODE",{});var Wv=a(zi);_u=i(Wv,"FlaxCLIPPreTrainedModel"),Wv.forEach(o),vu=i(rr,"forward method, overrides the "),Mi=s(rr,"CODE",{});var Bv=a(Mi);Pu=i(Bv,"__call__"),Bv.forEach(o),Tu=i(rr," special method."),rr.forEach(o),Iu=d(nt),_(Oo.$$.fragment,nt),yu=d(nt),ji=s(nt,"P",{});var Uv=a(ji);bu=i(Uv,"Example:"),Uv.forEach(o),Cu=d(nt),_(qs.$$.fragment,nt),nt.forEach(o),Lu=d(N),Ne=s(N,"DIV",{class:!0});var ir=a(Ne);_(Ds.$$.fragment,ir),ku=d(ir),Fi=s(ir,"P",{});var Rv=a(Fi);wu=i(Rv,"Examples:"),Rv.forEach(o),$u=d(ir),_(Os.$$.fragment,ir),ir.forEach(o),xu=d(N),Ve=s(N,"DIV",{class:!0});var lr=a(Ve);_(As.$$.fragment,lr),Eu=d(lr),qi=s(lr,"P",{});var Hv=a(qi);zu=i(Hv,"Examples:"),Hv.forEach(o),Mu=d(lr),_(Ns.$$.fragment,lr),lr.forEach(o),N.forEach(o),jl=d(t),Ut=s(t,"H2",{class:!0});var Ld=a(Ut);Ao=s(Ld,"A",{id:!0,class:!0,href:!0});var Kv=a(Ao);Di=s(Kv,"SPAN",{});var Gv=a(Di);_(Vs.$$.fragment,Gv),Gv.forEach(o),Kv.forEach(o),ju=d(Ld),Oi=s(Ld,"SPAN",{});var Jv=a(Oi);Fu=i(Jv,"FlaxCLIPTextModel"),Jv.forEach(o),Ld.forEach(o),Fl=d(t),Rt=s(t,"DIV",{class:!0});var kd=a(Rt);_(Ss.$$.fragment,kd),qu=d(kd),ae=s(kd,"DIV",{class:!0});var st=a(ae);_(Ws.$$.fragment,st),Du=d(st),Ht=s(st,"P",{});var dr=a(Ht);Ou=i(dr,"The "),Ai=s(dr,"CODE",{});var Xv=a(Ai);Au=i(Xv,"FlaxCLIPTextPreTrainedModel"),Xv.forEach(o),Nu=i(dr,"forward method, overrides the "),Ni=s(dr,"CODE",{});var Zv=a(Ni);Vu=i(Zv,"__call__"),Zv.forEach(o),Su=i(dr," special method."),dr.forEach(o),Wu=d(st),_(No.$$.fragment,st),Bu=d(st),Vi=s(st,"P",{});var Qv=a(Vi);Uu=i(Qv,"Example:"),Qv.forEach(o),Ru=d(st),_(Bs.$$.fragment,st),st.forEach(o),kd.forEach(o),ql=d(t),Kt=s(t,"H2",{class:!0});var wd=a(Kt);Vo=s(wd,"A",{id:!0,class:!0,href:!0});var Yv=a(Vo);Si=s(Yv,"SPAN",{});var eP=a(Si);_(Us.$$.fragment,eP),eP.forEach(o),Yv.forEach(o),Hu=d(wd),Wi=s(wd,"SPAN",{});var tP=a(Wi);Ku=i(tP,"FlaxCLIPVisionModel"),tP.forEach(o),wd.forEach(o),Dl=d(t),Gt=s(t,"DIV",{class:!0});var $d=a(Gt);_(Rs.$$.fragment,$d),Gu=d($d),re=s($d,"DIV",{class:!0});var at=a(re);_(Hs.$$.fragment,at),Ju=d(at),Jt=s(at,"P",{});var cr=a(Jt);Xu=i(cr,"The "),Bi=s(cr,"CODE",{});var oP=a(Bi);Zu=i(oP,"FlaxCLIPVisionPreTrainedModel"),oP.forEach(o),Qu=i(cr,"forward method, overrides the "),Ui=s(cr,"CODE",{});var nP=a(Ui);Yu=i(nP,"__call__"),nP.forEach(o),eg=i(cr," special method."),cr.forEach(o),tg=d(at),_(So.$$.fragment,at),og=d(at),Ri=s(at,"P",{});var sP=a(Ri);ng=i(sP,"Example:"),sP.forEach(o),sg=d(at),_(Ks.$$.fragment,at),at.forEach(o),$d.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(CP)),c(b,"id","clip"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#clip"),c(u,"class","relative group"),c(ue,"id","overview"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#overview"),c(M,"class","relative group"),c(Le,"href","https://arxiv.org/abs/2103.00020"),c(Le,"rel","nofollow"),c(ge,"id","usage"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#usage"),c(O,"class","relative group"),c(j,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(lt,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),c(ve,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),c(Pe,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Oe,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),c(ra,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),c(ia,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(tn,"href","https://huggingface.co/valhalla"),c(tn,"rel","nofollow"),c(on,"href","https://github.com/openai/CLIP"),c(on,"rel","nofollow"),c(oo,"id","transformers.CLIPConfig"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.CLIPConfig"),c(dt,"class","relative group"),c(la,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),c(da,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(ca,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(pa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ma,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),c(so,"class","docstring"),c(fe,"class","docstring"),c(ao,"id","transformers.CLIPTextConfig"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.CLIPTextConfig"),c(pt,"class","relative group"),c(ha,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(cn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(cn,"rel","nofollow"),c(fa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ua,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(V,"class","docstring"),c(ro,"id","transformers.CLIPVisionConfig"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.CLIPVisionConfig"),c(ft,"class","relative group"),c(ga,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(fn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(fn,"rel","nofollow"),c(_a,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(va,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(S,"class","docstring"),c(io,"id","transformers.CLIPTokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.CLIPTokenizer"),c(_t,"class","relative group"),c(Pa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Te,"class","docstring"),c(lo,"class","docstring"),c(co,"class","docstring"),c(Ia,"class","docstring"),c(F,"class","docstring"),c(po,"id","transformers.CLIPTokenizerFast"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.CLIPTokenizerFast"),c(vt,"class","relative group"),c(ya,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ie,"class","docstring"),c(mo,"class","docstring"),c(W,"class","docstring"),c(ho,"id","transformers.CLIPFeatureExtractor"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.CLIPFeatureExtractor"),c(Pt,"class","relative group"),c(Ca,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(fo,"class","docstring"),c(uo,"class","docstring"),c(B,"class","docstring"),c(go,"id","transformers.CLIPProcessor"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.CLIPProcessor"),c(It,"class","relative group"),c(La,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),c(ka,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(wa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast"),c($a,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor.decode"),c(xa,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(_o,"class","docstring"),c(Ea,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(vo,"class","docstring"),c(U,"class","docstring"),c(Po,"id","transformers.CLIPModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.CLIPModel"),c(yt,"class","relative group"),c(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rn,"rel","nofollow"),c(za,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(G,"class","docstring"),c(Ma,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(J,"class","docstring"),c(ja,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(X,"class","docstring"),c(R,"class","docstring"),c(bo,"id","transformers.CLIPTextModel"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.CLIPTextModel"),c(kt,"class","relative group"),c(Fa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"),c(Z,"class","docstring"),c(wt,"class","docstring"),c(Lo,"id","transformers.CLIPVisionModel"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.CLIPVisionModel"),c(xt,"class","relative group"),c(qa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"),c(Q,"class","docstring"),c(Et,"class","docstring"),c(wo,"id","transformers.TFCLIPModel"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFCLIPModel"),c(Mt,"class","relative group"),c(Da,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(cs,"rel","nofollow"),c(Oa,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),c(Y,"class","docstring"),c(Aa,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),c(ee,"class","docstring"),c(Na,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),c(te,"class","docstring"),c(q,"class","docstring"),c(Mo,"id","transformers.TFCLIPTextModel"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFCLIPTextModel"),c(Dt,"class","relative group"),c(Va,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"),c(oe,"class","docstring"),c(Ot,"class","docstring"),c(Fo,"id","transformers.TFCLIPVisionModel"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFCLIPVisionModel"),c(Nt,"class","relative group"),c(Sa,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"),c(ne,"class","docstring"),c(Vt,"class","docstring"),c(Do,"id","transformers.FlaxCLIPModel"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.FlaxCLIPModel"),c(Wt,"class","relative group"),c(Wa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xs,"rel","nofollow"),c(Es,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Es,"rel","nofollow"),c(zs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(zs,"rel","nofollow"),c(Ms,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ms,"rel","nofollow"),c(js,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(js,"rel","nofollow"),c(se,"class","docstring"),c(Ne,"class","docstring"),c(Ve,"class","docstring"),c(z,"class","docstring"),c(Ao,"id","transformers.FlaxCLIPTextModel"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.FlaxCLIPTextModel"),c(Ut,"class","relative group"),c(ae,"class","docstring"),c(Rt,"class","docstring"),c(Vo,"id","transformers.FlaxCLIPVisionModel"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.FlaxCLIPVisionModel"),c(Kt,"class","relative group"),c(re,"class","docstring"),c(Gt,"class","docstring")},m(t,m){e(document.head,p),h(t,L,m),h(t,u,m),e(u,b),e(b,C),v(y,C,null),e(u,f),e(u,k),e(k,Ho),h(t,rt,m),h(t,M,m),e(M,ue),e(ue,ye),v(be,ye,null),e(M,Ko),e(M,Ce),e(Ce,Go),h(t,Xt,m),h(t,pe,m),e(pe,Me),e(pe,Le),e(Le,Zt),e(pe,H),h(t,me,m),h(t,je,m),e(je,it),h(t,Qt,m),h(t,Fe,m),e(Fe,ke),e(ke,Jo),h(t,Yt,m),h(t,O,m),e(O,ge),e(ge,we),v($e,we,null),e(O,Xo),e(O,xe),e(xe,Zo),h(t,eo,m),h(t,he,m),e(he,Qo),h(t,qe,m),h(t,_e,m),e(_e,$),e(_e,j),e(j,to),e(_e,Qs),h(t,Yo,m),h(t,E,m),e(E,Ys),e(E,lt),e(lt,ea),e(E,De),e(E,ve),e(ve,ta),e(E,oa),e(E,Pe),e(Pe,na),e(E,sa),e(E,Oe),e(Oe,aa),e(E,xd),e(E,ra),e(ra,Ed),e(E,zd),e(E,ia),e(ia,Md),e(E,jd),h(t,nl,m),v(en,t,m),h(t,sl,m),h(t,Ae,m),e(Ae,Fd),e(Ae,tn),e(tn,qd),e(Ae,Dd),e(Ae,on),e(on,Od),e(Ae,Ad),h(t,al,m),h(t,dt,m),e(dt,oo),e(oo,pr),v(nn,pr,null),e(dt,Nd),e(dt,mr),e(mr,Vd),h(t,rl,m),h(t,fe,m),v(sn,fe,null),e(fe,Sd),e(fe,no),e(no,la),e(la,Wd),e(no,Bd),e(no,da),e(da,Ud),e(no,Rd),e(fe,Hd),e(fe,ct),e(ct,Kd),e(ct,ca),e(ca,Gd),e(ct,Jd),e(ct,pa),e(pa,Xd),e(ct,Zd),e(fe,Qd),e(fe,so),v(an,so,null),e(so,Yd),e(so,rn),e(rn,ec),e(rn,ma),e(ma,tc),e(rn,oc),h(t,il,m),h(t,pt,m),e(pt,ao),e(ao,hr),v(ln,hr,null),e(pt,nc),e(pt,fr),e(fr,sc),h(t,ll,m),h(t,V,m),v(dn,V,null),e(V,ac),e(V,mt),e(mt,rc),e(mt,ha),e(ha,ic),e(mt,lc),e(mt,cn),e(cn,dc),e(mt,cc),e(V,pc),e(V,ht),e(ht,mc),e(ht,fa),e(fa,hc),e(ht,fc),e(ht,ua),e(ua,uc),e(ht,gc),e(V,_c),e(V,ur),e(ur,vc),e(V,Pc),v(pn,V,null),h(t,dl,m),h(t,ft,m),e(ft,ro),e(ro,gr),v(mn,gr,null),e(ft,Tc),e(ft,_r),e(_r,Ic),h(t,cl,m),h(t,S,m),v(hn,S,null),e(S,yc),e(S,ut),e(ut,bc),e(ut,ga),e(ga,Cc),e(ut,Lc),e(ut,fn),e(fn,kc),e(ut,wc),e(S,$c),e(S,gt),e(gt,xc),e(gt,_a),e(_a,Ec),e(gt,zc),e(gt,va),e(va,Mc),e(gt,jc),e(S,Fc),e(S,vr),e(vr,qc),e(S,Dc),v(un,S,null),h(t,pl,m),h(t,_t,m),e(_t,io),e(io,Pr),v(gn,Pr,null),e(_t,Oc),e(_t,Tr),e(Tr,Ac),h(t,ml,m),h(t,F,m),v(_n,F,null),e(F,Nc),e(F,Ir),e(Ir,Vc),e(F,Sc),e(F,vn),e(vn,Wc),e(vn,Pa),e(Pa,Bc),e(vn,Uc),e(F,Rc),e(F,Te),v(Pn,Te,null),e(Te,Hc),e(Te,yr),e(yr,Kc),e(Te,Gc),e(Te,br),e(br,Ta),e(Ta,Jc),e(Ta,Cr),e(Cr,Xc),e(Te,Zc),e(Te,Lr),e(Lr,Qc),e(F,Yc),e(F,lo),v(Tn,lo,null),e(lo,ep),e(lo,In),e(In,tp),e(In,kr),e(kr,op),e(In,np),e(F,sp),e(F,co),v(yn,co,null),e(co,ap),e(co,wr),e(wr,rp),e(F,ip),e(F,Ia),v(bn,Ia,null),h(t,hl,m),h(t,vt,m),e(vt,po),e(po,$r),v(Cn,$r,null),e(vt,lp),e(vt,xr),e(xr,dp),h(t,fl,m),h(t,W,m),v(Ln,W,null),e(W,cp),e(W,kn),e(kn,pp),e(kn,Er),e(Er,mp),e(kn,hp),e(W,fp),e(W,wn),e(wn,up),e(wn,ya),e(ya,gp),e(wn,_p),e(W,vp),e(W,Ie),v($n,Ie,null),e(Ie,Pp),e(Ie,zr),e(zr,Tp),e(Ie,Ip),e(Ie,Mr),e(Mr,ba),e(ba,yp),e(ba,jr),e(jr,bp),e(Ie,Cp),e(Ie,Fr),e(Fr,Lp),e(W,kp),e(W,mo),v(xn,mo,null),e(mo,wp),e(mo,qr),e(qr,$p),h(t,ul,m),h(t,Pt,m),e(Pt,ho),e(ho,Dr),v(En,Dr,null),e(Pt,xp),e(Pt,Or),e(Or,Ep),h(t,gl,m),h(t,B,m),v(zn,B,null),e(B,zp),e(B,Ar),e(Ar,Mp),e(B,jp),e(B,Mn),e(Mn,Fp),e(Mn,Ca),e(Ca,qp),e(Mn,Dp),e(B,Op),e(B,fo),v(jn,fo,null),e(fo,Ap),e(fo,Fn),e(Fn,Np),e(Fn,Nr),e(Nr,Vp),e(Fn,Sp),e(B,Wp),e(B,uo),v(qn,uo,null),e(uo,Bp),e(uo,Tt),e(Tt,Up),e(Tt,Vr),e(Vr,Rp),e(Tt,Hp),e(Tt,Sr),e(Sr,Kp),e(Tt,Gp),h(t,_l,m),h(t,It,m),e(It,go),e(go,Wr),v(Dn,Wr,null),e(It,Jp),e(It,Br),e(Br,Xp),h(t,vl,m),h(t,U,m),v(On,U,null),e(U,Zp),e(U,Ur),e(Ur,Qp),e(U,Yp),e(U,K),e(K,La),e(La,em),e(K,tm),e(K,ka),e(ka,om),e(K,nm),e(K,wa),e(wa,sm),e(K,am),e(K,Rr),e(Rr,rm),e(K,im),e(K,$a),e($a,lm),e(K,dm),e(U,cm),e(U,_o),v(An,_o,null),e(_o,pm),e(_o,Nn),e(Nn,mm),e(Nn,xa),e(xa,hm),e(Nn,fm),e(U,um),e(U,vo),v(Vn,vo,null),e(vo,gm),e(vo,Sn),e(Sn,_m),e(Sn,Ea),e(Ea,vm),e(Sn,Pm),h(t,Pl,m),h(t,yt,m),e(yt,Po),e(Po,Hr),v(Wn,Hr,null),e(yt,Tm),e(yt,Kr),e(Kr,Im),h(t,Tl,m),h(t,R,m),v(Bn,R,null),e(R,ym),e(R,Un),e(Un,bm),e(Un,Rn),e(Rn,Cm),e(Un,Lm),e(R,km),e(R,G),v(Hn,G,null),e(G,wm),e(G,bt),e(bt,$m),e(bt,za),e(za,xm),e(bt,Em),e(bt,Gr),e(Gr,zm),e(bt,Mm),e(G,jm),v(To,G,null),e(G,Fm),e(G,Jr),e(Jr,qm),e(G,Dm),v(Kn,G,null),e(R,Om),e(R,J),v(Gn,J,null),e(J,Am),e(J,Ct),e(Ct,Nm),e(Ct,Ma),e(Ma,Vm),e(Ct,Sm),e(Ct,Xr),e(Xr,Wm),e(Ct,Bm),e(J,Um),v(Io,J,null),e(J,Rm),e(J,Zr),e(Zr,Hm),e(J,Km),v(Jn,J,null),e(R,Gm),e(R,X),v(Xn,X,null),e(X,Jm),e(X,Lt),e(Lt,Xm),e(Lt,ja),e(ja,Zm),e(Lt,Qm),e(Lt,Qr),e(Qr,Ym),e(Lt,eh),e(X,th),v(yo,X,null),e(X,oh),e(X,Yr),e(Yr,nh),e(X,sh),v(Zn,X,null),h(t,Il,m),h(t,kt,m),e(kt,bo),e(bo,ei),v(Qn,ei,null),e(kt,ah),e(kt,ti),e(ti,rh),h(t,yl,m),h(t,wt,m),v(Yn,wt,null),e(wt,ih),e(wt,Z),v(es,Z,null),e(Z,lh),e(Z,$t),e($t,dh),e($t,Fa),e(Fa,ch),e($t,ph),e($t,oi),e(oi,mh),e($t,hh),e(Z,fh),v(Co,Z,null),e(Z,uh),e(Z,ni),e(ni,gh),e(Z,_h),v(ts,Z,null),h(t,bl,m),h(t,xt,m),e(xt,Lo),e(Lo,si),v(os,si,null),e(xt,vh),e(xt,ai),e(ai,Ph),h(t,Cl,m),h(t,Et,m),v(ns,Et,null),e(Et,Th),e(Et,Q),v(ss,Q,null),e(Q,Ih),e(Q,zt),e(zt,yh),e(zt,qa),e(qa,bh),e(zt,Ch),e(zt,ri),e(ri,Lh),e(zt,kh),e(Q,wh),v(ko,Q,null),e(Q,$h),e(Q,ii),e(ii,xh),e(Q,Eh),v(as,Q,null),h(t,Ll,m),h(t,Mt,m),e(Mt,wo),e(wo,li),v(rs,li,null),e(Mt,zh),e(Mt,di),e(di,Mh),h(t,kl,m),h(t,q,m),v(is,q,null),e(q,jh),e(q,ls),e(ls,Fh),e(ls,Da),e(Da,qh),e(ls,Dh),e(q,Oh),e(q,ds),e(ds,Ah),e(ds,cs),e(cs,Nh),e(ds,Vh),e(q,Sh),v($o,q,null),e(q,Wh),e(q,Y),v(ps,Y,null),e(Y,Bh),e(Y,jt),e(jt,Uh),e(jt,Oa),e(Oa,Rh),e(jt,Hh),e(jt,ci),e(ci,Kh),e(jt,Gh),e(Y,Jh),v(xo,Y,null),e(Y,Xh),e(Y,pi),e(pi,Zh),e(Y,Qh),v(ms,Y,null),e(q,Yh),e(q,ee),v(hs,ee,null),e(ee,ef),e(ee,Ft),e(Ft,tf),e(Ft,Aa),e(Aa,of),e(Ft,nf),e(Ft,mi),e(mi,sf),e(Ft,af),e(ee,rf),v(Eo,ee,null),e(ee,lf),e(ee,hi),e(hi,df),e(ee,cf),v(fs,ee,null),e(q,pf),e(q,te),v(us,te,null),e(te,mf),e(te,qt),e(qt,hf),e(qt,Na),e(Na,ff),e(qt,uf),e(qt,fi),e(fi,gf),e(qt,_f),e(te,vf),v(zo,te,null),e(te,Pf),e(te,ui),e(ui,Tf),e(te,If),v(gs,te,null),h(t,wl,m),h(t,Dt,m),e(Dt,Mo),e(Mo,gi),v(_s,gi,null),e(Dt,yf),e(Dt,_i),e(_i,bf),h(t,$l,m),h(t,Ot,m),v(vs,Ot,null),e(Ot,Cf),e(Ot,oe),v(Ps,oe,null),e(oe,Lf),e(oe,At),e(At,kf),e(At,Va),e(Va,wf),e(At,$f),e(At,vi),e(vi,xf),e(At,Ef),e(oe,zf),v(jo,oe,null),e(oe,Mf),e(oe,Pi),e(Pi,jf),e(oe,Ff),v(Ts,oe,null),h(t,xl,m),h(t,Nt,m),e(Nt,Fo),e(Fo,Ti),v(Is,Ti,null),e(Nt,qf),e(Nt,Ii),e(Ii,Df),h(t,El,m),h(t,Vt,m),v(ys,Vt,null),e(Vt,Of),e(Vt,ne),v(bs,ne,null),e(ne,Af),e(ne,St),e(St,Nf),e(St,Sa),e(Sa,Vf),e(St,Sf),e(St,yi),e(yi,Wf),e(St,Bf),e(ne,Uf),v(qo,ne,null),e(ne,Rf),e(ne,bi),e(bi,Hf),e(ne,Kf),v(Cs,ne,null),h(t,zl,m),h(t,Wt,m),e(Wt,Do),e(Do,Ci),v(Ls,Ci,null),e(Wt,Gf),e(Wt,Li),e(Li,Jf),h(t,Ml,m),h(t,z,m),v(ks,z,null),e(z,Xf),e(z,ws),e(ws,Zf),e(ws,Wa),e(Wa,Qf),e(ws,Yf),e(z,eu),e(z,$s),e($s,tu),e($s,xs),e(xs,ou),e($s,nu),e(z,su),e(z,ki),e(ki,au),e(z,ru),e(z,Ee),e(Ee,wi),e(wi,Es),e(Es,iu),e(Ee,lu),e(Ee,$i),e($i,zs),e(zs,du),e(Ee,cu),e(Ee,xi),e(xi,Ms),e(Ms,pu),e(Ee,mu),e(Ee,Ei),e(Ei,js),e(js,hu),e(z,fu),e(z,se),v(Fs,se,null),e(se,uu),e(se,Bt),e(Bt,gu),e(Bt,zi),e(zi,_u),e(Bt,vu),e(Bt,Mi),e(Mi,Pu),e(Bt,Tu),e(se,Iu),v(Oo,se,null),e(se,yu),e(se,ji),e(ji,bu),e(se,Cu),v(qs,se,null),e(z,Lu),e(z,Ne),v(Ds,Ne,null),e(Ne,ku),e(Ne,Fi),e(Fi,wu),e(Ne,$u),v(Os,Ne,null),e(z,xu),e(z,Ve),v(As,Ve,null),e(Ve,Eu),e(Ve,qi),e(qi,zu),e(Ve,Mu),v(Ns,Ve,null),h(t,jl,m),h(t,Ut,m),e(Ut,Ao),e(Ao,Di),v(Vs,Di,null),e(Ut,ju),e(Ut,Oi),e(Oi,Fu),h(t,Fl,m),h(t,Rt,m),v(Ss,Rt,null),e(Rt,qu),e(Rt,ae),v(Ws,ae,null),e(ae,Du),e(ae,Ht),e(Ht,Ou),e(Ht,Ai),e(Ai,Au),e(Ht,Nu),e(Ht,Ni),e(Ni,Vu),e(Ht,Su),e(ae,Wu),v(No,ae,null),e(ae,Bu),e(ae,Vi),e(Vi,Uu),e(ae,Ru),v(Bs,ae,null),h(t,ql,m),h(t,Kt,m),e(Kt,Vo),e(Vo,Si),v(Us,Si,null),e(Kt,Hu),e(Kt,Wi),e(Wi,Ku),h(t,Dl,m),h(t,Gt,m),v(Rs,Gt,null),e(Gt,Gu),e(Gt,re),v(Hs,re,null),e(re,Ju),e(re,Jt),e(Jt,Xu),e(Jt,Bi),e(Bi,Zu),e(Jt,Qu),e(Jt,Ui),e(Ui,Yu),e(Jt,eg),e(re,tg),v(So,re,null),e(re,og),e(re,Ri),e(Ri,ng),e(re,sg),v(Ks,re,null),Ol=!0},p(t,[m]){const Gs={};m&2&&(Gs.$$scope={dirty:m,ctx:t}),To.$set(Gs);const Hi={};m&2&&(Hi.$$scope={dirty:m,ctx:t}),Io.$set(Hi);const Ki={};m&2&&(Ki.$$scope={dirty:m,ctx:t}),yo.$set(Ki);const Gi={};m&2&&(Gi.$$scope={dirty:m,ctx:t}),Co.$set(Gi);const Js={};m&2&&(Js.$$scope={dirty:m,ctx:t}),ko.$set(Js);const Ji={};m&2&&(Ji.$$scope={dirty:m,ctx:t}),$o.$set(Ji);const Xi={};m&2&&(Xi.$$scope={dirty:m,ctx:t}),xo.$set(Xi);const Zi={};m&2&&(Zi.$$scope={dirty:m,ctx:t}),Eo.$set(Zi);const Xs={};m&2&&(Xs.$$scope={dirty:m,ctx:t}),zo.$set(Xs);const Qi={};m&2&&(Qi.$$scope={dirty:m,ctx:t}),jo.$set(Qi);const Yi={};m&2&&(Yi.$$scope={dirty:m,ctx:t}),qo.$set(Yi);const el={};m&2&&(el.$$scope={dirty:m,ctx:t}),Oo.$set(el);const tl={};m&2&&(tl.$$scope={dirty:m,ctx:t}),No.$set(tl);const Zs={};m&2&&(Zs.$$scope={dirty:m,ctx:t}),So.$set(Zs)},i(t){Ol||(P(y.$$.fragment,t),P(be.$$.fragment,t),P($e.$$.fragment,t),P(en.$$.fragment,t),P(nn.$$.fragment,t),P(sn.$$.fragment,t),P(an.$$.fragment,t),P(ln.$$.fragment,t),P(dn.$$.fragment,t),P(pn.$$.fragment,t),P(mn.$$.fragment,t),P(hn.$$.fragment,t),P(un.$$.fragment,t),P(gn.$$.fragment,t),P(_n.$$.fragment,t),P(Pn.$$.fragment,t),P(Tn.$$.fragment,t),P(yn.$$.fragment,t),P(bn.$$.fragment,t),P(Cn.$$.fragment,t),P(Ln.$$.fragment,t),P($n.$$.fragment,t),P(xn.$$.fragment,t),P(En.$$.fragment,t),P(zn.$$.fragment,t),P(jn.$$.fragment,t),P(qn.$$.fragment,t),P(Dn.$$.fragment,t),P(On.$$.fragment,t),P(An.$$.fragment,t),P(Vn.$$.fragment,t),P(Wn.$$.fragment,t),P(Bn.$$.fragment,t),P(Hn.$$.fragment,t),P(To.$$.fragment,t),P(Kn.$$.fragment,t),P(Gn.$$.fragment,t),P(Io.$$.fragment,t),P(Jn.$$.fragment,t),P(Xn.$$.fragment,t),P(yo.$$.fragment,t),P(Zn.$$.fragment,t),P(Qn.$$.fragment,t),P(Yn.$$.fragment,t),P(es.$$.fragment,t),P(Co.$$.fragment,t),P(ts.$$.fragment,t),P(os.$$.fragment,t),P(ns.$$.fragment,t),P(ss.$$.fragment,t),P(ko.$$.fragment,t),P(as.$$.fragment,t),P(rs.$$.fragment,t),P(is.$$.fragment,t),P($o.$$.fragment,t),P(ps.$$.fragment,t),P(xo.$$.fragment,t),P(ms.$$.fragment,t),P(hs.$$.fragment,t),P(Eo.$$.fragment,t),P(fs.$$.fragment,t),P(us.$$.fragment,t),P(zo.$$.fragment,t),P(gs.$$.fragment,t),P(_s.$$.fragment,t),P(vs.$$.fragment,t),P(Ps.$$.fragment,t),P(jo.$$.fragment,t),P(Ts.$$.fragment,t),P(Is.$$.fragment,t),P(ys.$$.fragment,t),P(bs.$$.fragment,t),P(qo.$$.fragment,t),P(Cs.$$.fragment,t),P(Ls.$$.fragment,t),P(ks.$$.fragment,t),P(Fs.$$.fragment,t),P(Oo.$$.fragment,t),P(qs.$$.fragment,t),P(Ds.$$.fragment,t),P(Os.$$.fragment,t),P(As.$$.fragment,t),P(Ns.$$.fragment,t),P(Vs.$$.fragment,t),P(Ss.$$.fragment,t),P(Ws.$$.fragment,t),P(No.$$.fragment,t),P(Bs.$$.fragment,t),P(Us.$$.fragment,t),P(Rs.$$.fragment,t),P(Hs.$$.fragment,t),P(So.$$.fragment,t),P(Ks.$$.fragment,t),Ol=!0)},o(t){T(y.$$.fragment,t),T(be.$$.fragment,t),T($e.$$.fragment,t),T(en.$$.fragment,t),T(nn.$$.fragment,t),T(sn.$$.fragment,t),T(an.$$.fragment,t),T(ln.$$.fragment,t),T(dn.$$.fragment,t),T(pn.$$.fragment,t),T(mn.$$.fragment,t),T(hn.$$.fragment,t),T(un.$$.fragment,t),T(gn.$$.fragment,t),T(_n.$$.fragment,t),T(Pn.$$.fragment,t),T(Tn.$$.fragment,t),T(yn.$$.fragment,t),T(bn.$$.fragment,t),T(Cn.$$.fragment,t),T(Ln.$$.fragment,t),T($n.$$.fragment,t),T(xn.$$.fragment,t),T(En.$$.fragment,t),T(zn.$$.fragment,t),T(jn.$$.fragment,t),T(qn.$$.fragment,t),T(Dn.$$.fragment,t),T(On.$$.fragment,t),T(An.$$.fragment,t),T(Vn.$$.fragment,t),T(Wn.$$.fragment,t),T(Bn.$$.fragment,t),T(Hn.$$.fragment,t),T(To.$$.fragment,t),T(Kn.$$.fragment,t),T(Gn.$$.fragment,t),T(Io.$$.fragment,t),T(Jn.$$.fragment,t),T(Xn.$$.fragment,t),T(yo.$$.fragment,t),T(Zn.$$.fragment,t),T(Qn.$$.fragment,t),T(Yn.$$.fragment,t),T(es.$$.fragment,t),T(Co.$$.fragment,t),T(ts.$$.fragment,t),T(os.$$.fragment,t),T(ns.$$.fragment,t),T(ss.$$.fragment,t),T(ko.$$.fragment,t),T(as.$$.fragment,t),T(rs.$$.fragment,t),T(is.$$.fragment,t),T($o.$$.fragment,t),T(ps.$$.fragment,t),T(xo.$$.fragment,t),T(ms.$$.fragment,t),T(hs.$$.fragment,t),T(Eo.$$.fragment,t),T(fs.$$.fragment,t),T(us.$$.fragment,t),T(zo.$$.fragment,t),T(gs.$$.fragment,t),T(_s.$$.fragment,t),T(vs.$$.fragment,t),T(Ps.$$.fragment,t),T(jo.$$.fragment,t),T(Ts.$$.fragment,t),T(Is.$$.fragment,t),T(ys.$$.fragment,t),T(bs.$$.fragment,t),T(qo.$$.fragment,t),T(Cs.$$.fragment,t),T(Ls.$$.fragment,t),T(ks.$$.fragment,t),T(Fs.$$.fragment,t),T(Oo.$$.fragment,t),T(qs.$$.fragment,t),T(Ds.$$.fragment,t),T(Os.$$.fragment,t),T(As.$$.fragment,t),T(Ns.$$.fragment,t),T(Vs.$$.fragment,t),T(Ss.$$.fragment,t),T(Ws.$$.fragment,t),T(No.$$.fragment,t),T(Bs.$$.fragment,t),T(Us.$$.fragment,t),T(Rs.$$.fragment,t),T(Hs.$$.fragment,t),T(So.$$.fragment,t),T(Ks.$$.fragment,t),Ol=!1},d(t){o(p),t&&o(L),t&&o(u),I(y),t&&o(rt),t&&o(M),I(be),t&&o(Xt),t&&o(pe),t&&o(me),t&&o(je),t&&o(Qt),t&&o(Fe),t&&o(Yt),t&&o(O),I($e),t&&o(eo),t&&o(he),t&&o(qe),t&&o(_e),t&&o(Yo),t&&o(E),t&&o(nl),I(en,t),t&&o(sl),t&&o(Ae),t&&o(al),t&&o(dt),I(nn),t&&o(rl),t&&o(fe),I(sn),I(an),t&&o(il),t&&o(pt),I(ln),t&&o(ll),t&&o(V),I(dn),I(pn),t&&o(dl),t&&o(ft),I(mn),t&&o(cl),t&&o(S),I(hn),I(un),t&&o(pl),t&&o(_t),I(gn),t&&o(ml),t&&o(F),I(_n),I(Pn),I(Tn),I(yn),I(bn),t&&o(hl),t&&o(vt),I(Cn),t&&o(fl),t&&o(W),I(Ln),I($n),I(xn),t&&o(ul),t&&o(Pt),I(En),t&&o(gl),t&&o(B),I(zn),I(jn),I(qn),t&&o(_l),t&&o(It),I(Dn),t&&o(vl),t&&o(U),I(On),I(An),I(Vn),t&&o(Pl),t&&o(yt),I(Wn),t&&o(Tl),t&&o(R),I(Bn),I(Hn),I(To),I(Kn),I(Gn),I(Io),I(Jn),I(Xn),I(yo),I(Zn),t&&o(Il),t&&o(kt),I(Qn),t&&o(yl),t&&o(wt),I(Yn),I(es),I(Co),I(ts),t&&o(bl),t&&o(xt),I(os),t&&o(Cl),t&&o(Et),I(ns),I(ss),I(ko),I(as),t&&o(Ll),t&&o(Mt),I(rs),t&&o(kl),t&&o(q),I(is),I($o),I(ps),I(xo),I(ms),I(hs),I(Eo),I(fs),I(us),I(zo),I(gs),t&&o(wl),t&&o(Dt),I(_s),t&&o($l),t&&o(Ot),I(vs),I(Ps),I(jo),I(Ts),t&&o(xl),t&&o(Nt),I(Is),t&&o(El),t&&o(Vt),I(ys),I(bs),I(qo),I(Cs),t&&o(zl),t&&o(Wt),I(Ls),t&&o(Ml),t&&o(z),I(ks),I(Fs),I(Oo),I(qs),I(Ds),I(Os),I(As),I(Ns),t&&o(jl),t&&o(Ut),I(Vs),t&&o(Fl),t&&o(Rt),I(Ss),I(Ws),I(No),I(Bs),t&&o(ql),t&&o(Kt),I(Us),t&&o(Dl),t&&o(Gt),I(Rs),I(Hs),I(So),I(Ks)}}}const CP={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function LP(x,p,L){let{fw:u}=p;return x.$$set=b=>{"fw"in b&&L(0,u=b.fw)},[u]}class zP extends aP{constructor(p){super();rP(this,p,LP,bP,iP,{fw:0})}}export{zP as default,CP as metadata};
