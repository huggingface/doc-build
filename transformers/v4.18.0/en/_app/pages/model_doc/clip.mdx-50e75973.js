import{S as aP,i as rP,s as iP,e as n,k as l,w as u,t as r,M as lP,c as s,d as o,m as d,a,x as g,h as i,b as c,F as e,g as m,y as _,q as v,o as P,B as T,v as dP}from"../../chunks/vendor-6b77c823.js";import{T as ce}from"../../chunks/Tip-39098574.js";import{D as $}from"../../chunks/Docstring-af1d0ae0.js";import{C as A}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as D}from"../../chunks/IconCopyLink-7a11ce68.js";function cP(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function pP(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function hP(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function mP(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function fP(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function uP(x){let p,L,I,y,b,C,f,w,Ho,rt,z,ue,Ce,ye,Ko,be,Go,Xt,pe,ze,Le,Zt,H,he,je,it,Qt,Fe,we,Jo,Yt,O,ge,$e,ke,Xo,xe,Zo,eo,me,Qo,qe,_e;return{c(){p=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),I=l(),y=n("ul"),b=n("li"),C=r("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),w=n("li"),Ho=r("having all inputs as a list, tuple or dict in the first positional arguments."),rt=l(),z=n("p"),ue=r("This second option is useful when using "),Ce=n("code"),ye=r("tf.keras.Model.fit"),Ko=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),be=n("code"),Go=r("model(inputs)"),Xt=r("."),pe=l(),ze=n("p"),Le=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Zt=l(),H=n("ul"),he=n("li"),je=r("a single Tensor with "),it=n("code"),Qt=r("input_ids"),Fe=r(" only and nothing else: "),we=n("code"),Jo=r("model(input_ids)"),Yt=l(),O=n("li"),ge=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),$e=n("code"),ke=r("model([input_ids, attention_mask])"),Xo=r(" or "),xe=n("code"),Zo=r("model([input_ids, attention_mask, token_type_ids])"),eo=l(),me=n("li"),Qo=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=n("code"),_e=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){p=s(k,"P",{});var j=a(p);L=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(o),I=d(k),y=s(k,"UL",{});var to=a(y);b=s(to,"LI",{});var Qs=a(b);C=i(Qs,"having all inputs as keyword arguments (like PyTorch models), or"),Qs.forEach(o),f=d(to),w=s(to,"LI",{});var Yo=a(w);Ho=i(Yo,"having all inputs as a list, tuple or dict in the first positional arguments."),Yo.forEach(o),to.forEach(o),rt=d(k),z=s(k,"P",{});var E=a(z);ue=i(E,"This second option is useful when using "),Ce=s(E,"CODE",{});var Ys=a(Ce);ye=i(Ys,"tf.keras.Model.fit"),Ys.forEach(o),Ko=i(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),be=s(E,"CODE",{});var lt=a(be);Go=i(lt,"model(inputs)"),lt.forEach(o),Xt=i(E,"."),E.forEach(o),pe=d(k),ze=s(k,"P",{});var ea=a(ze);Le=i(ea,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ea.forEach(o),Zt=d(k),H=s(k,"UL",{});var De=a(H);he=s(De,"LI",{});var ve=a(he);je=i(ve,"a single Tensor with "),it=s(ve,"CODE",{});var ta=a(it);Qt=i(ta,"input_ids"),ta.forEach(o),Fe=i(ve," only and nothing else: "),we=s(ve,"CODE",{});var oa=a(we);Jo=i(oa,"model(input_ids)"),oa.forEach(o),ve.forEach(o),Yt=d(De),O=s(De,"LI",{});var Pe=a(O);ge=i(Pe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),$e=s(Pe,"CODE",{});var na=a($e);ke=i(na,"model([input_ids, attention_mask])"),na.forEach(o),Xo=i(Pe," or "),xe=s(Pe,"CODE",{});var sa=a(xe);Zo=i(sa,"model([input_ids, attention_mask, token_type_ids])"),sa.forEach(o),Pe.forEach(o),eo=d(De),me=s(De,"LI",{});var Oe=a(me);Qo=i(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=s(Oe,"CODE",{});var aa=a(qe);_e=i(aa,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),aa.forEach(o),Oe.forEach(o),De.forEach(o)},m(k,j){m(k,p,j),e(p,L),m(k,I,j),m(k,y,j),e(y,b),e(b,C),e(y,f),e(y,w),e(w,Ho),m(k,rt,j),m(k,z,j),e(z,ue),e(z,Ce),e(Ce,ye),e(z,Ko),e(z,be),e(be,Go),e(z,Xt),m(k,pe,j),m(k,ze,j),e(ze,Le),m(k,Zt,j),m(k,H,j),e(H,he),e(he,je),e(he,it),e(it,Qt),e(he,Fe),e(he,we),e(we,Jo),e(H,Yt),e(H,O),e(O,ge),e(O,$e),e($e,ke),e(O,Xo),e(O,xe),e(xe,Zo),e(H,eo),e(H,me),e(me,Qo),e(me,qe),e(qe,_e)},d(k){k&&o(p),k&&o(I),k&&o(y),k&&o(rt),k&&o(z),k&&o(pe),k&&o(ze),k&&o(Zt),k&&o(H)}}}function gP(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function _P(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function vP(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function PP(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function TP(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function IP(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function CP(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function yP(x){let p,L,I,y,b;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),I=n("code"),y=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),I=s(f,"CODE",{});var w=a(I);y=i(w,"Module"),w.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,I),e(I,y),e(p,b)},d(C){C&&o(p)}}}function bP(x){let p,L,I,y,b,C,f,w,Ho,rt,z,ue,Ce,ye,Ko,be,Go,Xt,pe,ze,Le,Zt,H,he,je,it,Qt,Fe,we,Jo,Yt,O,ge,$e,ke,Xo,xe,Zo,eo,me,Qo,qe,_e,k,j,to,Qs,Yo,E,Ys,lt,ea,De,ve,ta,oa,Pe,na,sa,Oe,aa,xd,ra,Ed,Md,ia,zd,jd,nl,en,sl,Ae,Fd,tn,qd,Dd,on,Od,Ad,al,dt,oo,pr,nn,Nd,hr,Vd,rl,fe,sn,Sd,no,la,Wd,Bd,da,Ud,Rd,Hd,ct,Kd,ca,Gd,Jd,pa,Xd,Zd,Qd,so,an,Yd,rn,ec,ha,tc,oc,il,pt,ao,mr,ln,nc,fr,sc,ll,V,dn,ac,ht,rc,ma,ic,lc,cn,dc,cc,pc,mt,hc,fa,mc,fc,ua,uc,gc,_c,ur,vc,Pc,pn,dl,ft,ro,gr,hn,Tc,_r,Ic,cl,S,mn,Cc,ut,yc,ga,bc,Lc,fn,wc,$c,kc,gt,xc,_a,Ec,Mc,va,zc,jc,Fc,vr,qc,Dc,un,pl,_t,io,Pr,gn,Oc,Tr,Ac,hl,F,_n,Nc,Ir,Vc,Sc,vn,Wc,Pa,Bc,Uc,Rc,Te,Pn,Hc,Cr,Kc,Gc,yr,Ta,Jc,br,Xc,Zc,Lr,Qc,Yc,lo,Tn,ep,In,tp,wr,op,np,sp,co,Cn,ap,$r,rp,ip,Ia,yn,ml,vt,po,kr,bn,lp,xr,dp,fl,W,Ln,cp,wn,pp,Er,hp,mp,fp,$n,up,Ca,gp,_p,vp,Ie,kn,Pp,Mr,Tp,Ip,zr,ya,Cp,jr,yp,bp,Fr,Lp,wp,ho,xn,$p,qr,kp,ul,Pt,mo,Dr,En,xp,Or,Ep,gl,B,Mn,Mp,Ar,zp,jp,zn,Fp,ba,qp,Dp,Op,fo,jn,Ap,Fn,Np,Nr,Vp,Sp,Wp,uo,qn,Bp,Tt,Up,Vr,Rp,Hp,Sr,Kp,Gp,_l,It,go,Wr,Dn,Jp,Br,Xp,vl,U,On,Zp,Ur,Qp,Yp,K,La,eh,th,wa,oh,nh,$a,sh,ah,Rr,rh,ih,ka,lh,dh,ch,_o,An,ph,Nn,hh,xa,mh,fh,uh,vo,Vn,gh,Sn,_h,Ea,vh,Ph,Pl,Ct,Po,Hr,Wn,Th,Kr,Ih,Tl,R,Bn,Ch,Un,yh,Rn,bh,Lh,wh,G,Hn,$h,yt,kh,Ma,xh,Eh,Gr,Mh,zh,jh,To,Fh,Jr,qh,Dh,Kn,Oh,J,Gn,Ah,bt,Nh,za,Vh,Sh,Xr,Wh,Bh,Uh,Io,Rh,Zr,Hh,Kh,Jn,Gh,X,Xn,Jh,Lt,Xh,ja,Zh,Qh,Qr,Yh,em,tm,Co,om,Yr,nm,sm,Zn,Il,wt,yo,ei,Qn,am,ti,rm,Cl,$t,Yn,im,Z,es,lm,kt,dm,Fa,cm,pm,oi,hm,mm,fm,bo,um,ni,gm,_m,ts,yl,xt,Lo,si,os,vm,ai,Pm,bl,Et,ns,Tm,Q,ss,Im,Mt,Cm,qa,ym,bm,ri,Lm,wm,$m,wo,km,ii,xm,Em,as,Ll,zt,$o,li,rs,Mm,di,zm,wl,q,is,jm,ls,Fm,Da,qm,Dm,Om,ds,Am,cs,Nm,Vm,Sm,ko,Wm,Y,ps,Bm,jt,Um,Oa,Rm,Hm,ci,Km,Gm,Jm,xo,Xm,pi,Zm,Qm,hs,Ym,ee,ms,ef,Ft,tf,Aa,of,nf,hi,sf,af,rf,Eo,lf,mi,df,cf,fs,pf,te,us,hf,qt,mf,Na,ff,uf,fi,gf,_f,vf,Mo,Pf,ui,Tf,If,gs,$l,Dt,zo,gi,_s,Cf,_i,yf,kl,Ot,vs,bf,oe,Ps,Lf,At,wf,Va,$f,kf,vi,xf,Ef,Mf,jo,zf,Pi,jf,Ff,Ts,xl,Nt,Fo,Ti,Is,qf,Ii,Df,El,Vt,Cs,Of,ne,ys,Af,St,Nf,Sa,Vf,Sf,Ci,Wf,Bf,Uf,qo,Rf,yi,Hf,Kf,bs,Ml,Wt,Do,bi,Ls,Gf,Li,Jf,zl,M,ws,Xf,$s,Zf,Wa,Qf,Yf,eu,ks,tu,xs,ou,nu,su,wi,au,ru,Ee,$i,Es,iu,lu,ki,Ms,du,cu,xi,zs,pu,hu,Ei,js,mu,fu,se,Fs,uu,Bt,gu,Mi,_u,vu,zi,Pu,Tu,Iu,Oo,Cu,ji,yu,bu,qs,Lu,Ne,Ds,wu,Fi,$u,ku,Os,xu,Ve,As,Eu,qi,Mu,zu,Ns,jl,Ut,Ao,Di,Vs,ju,Oi,Fu,Fl,Rt,Ss,qu,ae,Ws,Du,Ht,Ou,Ai,Au,Nu,Ni,Vu,Su,Wu,No,Bu,Vi,Uu,Ru,Bs,ql,Kt,Vo,Si,Us,Hu,Wi,Ku,Dl,Gt,Rs,Gu,re,Hs,Ju,Jt,Xu,Bi,Zu,Qu,Ui,Yu,eg,tg,So,og,Ri,ng,sg,Ks,Ol;return C=new D({}),ye=new D({}),ke=new D({}),en=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),nn=new D({}),sn=new $({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/configuration_clip.py#L245",parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),an=new $({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/configuration_clip.py#L294",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),ln=new D({}),dn=new $({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/configuration_clip.py#L33",parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPModel">CLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),hn=new D({}),mn=new $({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/configuration_clip.py#L141",parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),gn=new D({}),_n=new $({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/tokenization_clip.py#L100",parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),Pn=new $({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/tokenization_clip.py#L186",parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Tn=new $({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/tokenization_clip.py#L213",parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Cn=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/tokenization_clip.py#L241",parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yn=new $({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/tokenization_clip.py#L336"}}),bn=new D({}),Ln=new $({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/tokenization_clip_fast.py#L48",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),kn=new $({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/tokenization_clip_fast.py#L121",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/tokenization_clip_fast.py#L148",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),En=new D({}),Mn=new $({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/feature_extraction_clip.py#L30",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),jn=new $({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/feature_extraction_clip.py#L158",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}]}}),qn=new $({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = <Resampling.BICUBIC: 3>"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/feature_extraction_clip.py#L184",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}]}}),Dn=new D({}),On=new $({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/processing_clip.py#L22",parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),An=new $({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/processing_clip.py#L95"}}),Vn=new $({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/processing_clip.py#L102"}}),Wn=new D({}),Bn=new $({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_clip.py#L842",parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Hn=new $({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_clip.py#L971",parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>torch.FloatTensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new ce({props:{$$slots:{default:[cP]},$$scope:{ctx:x}}}),Kn=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Gn=new $({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_clip.py#L875",parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Io=new ce({props:{$$slots:{default:[pP]},$$scope:{ctx:x}}}),Jn=new A({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),Xn=new $({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_clip.py#L922",parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Co=new ce({props:{$$slots:{default:[hP]},$$scope:{ctx:x}}}),Zn=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Qn=new D({}),Yn=new $({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_clip.py#L678"}}),es=new $({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_clip.py#L693",parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new ce({props:{$$slots:{default:[mP]},$$scope:{ctx:x}}}),ts=new A({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),os=new D({}),ns=new $({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_clip.py#L789"}}),ss=new $({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_clip.py#L802",parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wo=new ce({props:{$$slots:{default:[fP]},$$scope:{ctx:x}}}),as=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),rs=new D({}),is=new $({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_tf_clip.py#L1195",parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ko=new ce({props:{$$slots:{default:[uP]},$$scope:{ctx:x}}}),ps=new $({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_tf_clip.py#L1323",parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>tf.Tensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>tf.Tensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new ce({props:{$$slots:{default:[gP]},$$scope:{ctx:x}}}),hs=new A({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),ms=new $({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_tf_clip.py#L1241",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Eo=new ce({props:{$$slots:{default:[_P]},$$scope:{ctx:x}}}),fs=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),us=new $({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_tf_clip.py#L1281",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Mo=new ce({props:{$$slots:{default:[vP]},$$scope:{ctx:x}}}),gs=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),_s=new D({}),vs=new $({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_tf_clip.py#L1034"}}),Ps=new $({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_tf_clip.py#L1042",parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jo=new ce({props:{$$slots:{default:[PP]},$$scope:{ctx:x}}}),Ts=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Is=new D({}),Cs=new $({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_tf_clip.py#L1097"}}),ys=new $({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_tf_clip.py#L1138",parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qo=new ce({props:{$$slots:{default:[TP]},$$scope:{ctx:x}}}),bs=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),Ls=new D({}),ws=new $({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_flax_clip.py#L1107",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Fs=new $({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_flax_clip.py#L736",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxCLIPModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxCLIPModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxCLIPModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>logits_per_image:(<code>jnp.ndarray</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new ce({props:{$$slots:{default:[IP]},$$scope:{ctx:x}}}),qs=new A({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Ds=new $({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_flax_clip.py#L781",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),As=new $({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_flax_clip.py#L848",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Vs=new D({}),Ss=new $({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_flax_clip.py#L928"}}),Ws=new $({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_flax_clip.py#L603",parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxCLIPTextModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxCLIPTextModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxCLIPTextModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPTextModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPTextModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new ce({props:{$$slots:{default:[CP]},$$scope:{ctx:x}}}),Bs=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Us=new D({}),Rs=new $({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_flax_clip.py#L981"}}),Hs=new $({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/clip/modeling_flax_clip.py#L672",parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=n("meta"),L=l(),I=n("h1"),y=n("a"),b=n("span"),u(C.$$.fragment),f=l(),w=n("span"),Ho=r("CLIP"),rt=l(),z=n("h2"),ue=n("a"),Ce=n("span"),u(ye.$$.fragment),Ko=l(),be=n("span"),Go=r("Overview"),Xt=l(),pe=n("p"),ze=r("The CLIP model was proposed in "),Le=n("a"),Zt=r("Learning Transferable Visual Models From Natural Language Supervision"),H=r(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),he=l(),je=n("p"),it=r("The abstract from the paper is the following:"),Qt=l(),Fe=n("p"),we=n("em"),Jo=r(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Yt=l(),O=n("h2"),ge=n("a"),$e=n("span"),u(ke.$$.fragment),Xo=l(),xe=n("span"),Zo=r("Usage"),eo=l(),me=n("p"),Qo=r(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),qe=l(),_e=n("p"),k=r(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=n("a"),to=r("CLIPFeatureExtractor"),Qs=r(" can be used to resize (or rescale) and normalize images for the model."),Yo=l(),E=n("p"),Ys=r("The "),lt=n("a"),ea=r("CLIPTokenizer"),De=r(" is used to encode the text. The "),ve=n("a"),ta=r("CLIPProcessor"),oa=r(` wraps
`),Pe=n("a"),na=r("CLIPFeatureExtractor"),sa=r(" and "),Oe=n("a"),aa=r("CLIPTokenizer"),xd=r(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ra=n("a"),Ed=r("CLIPProcessor"),Md=r(" and "),ia=n("a"),zd=r("CLIPModel"),jd=r("."),nl=l(),u(en.$$.fragment),sl=l(),Ae=n("p"),Fd=r("This model was contributed by "),tn=n("a"),qd=r("valhalla"),Dd=r(". The original code can be found "),on=n("a"),Od=r("here"),Ad=r("."),al=l(),dt=n("h2"),oo=n("a"),pr=n("span"),u(nn.$$.fragment),Nd=l(),hr=n("span"),Vd=r("CLIPConfig"),rl=l(),fe=n("div"),u(sn.$$.fragment),Sd=l(),no=n("p"),la=n("a"),Wd=r("CLIPConfig"),Bd=r(" is the configuration class to store the configuration of a "),da=n("a"),Ud=r("CLIPModel"),Rd=r(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Hd=l(),ct=n("p"),Kd=r("Configuration objects inherit from "),ca=n("a"),Gd=r("PretrainedConfig"),Jd=r(` and can be used to control the model outputs. Read the
documentation from `),pa=n("a"),Xd=r("PretrainedConfig"),Zd=r(" for more information."),Qd=l(),so=n("div"),u(an.$$.fragment),Yd=l(),rn=n("p"),ec=r("Instantiate a "),ha=n("a"),tc=r("CLIPConfig"),oc=r(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),il=l(),pt=n("h2"),ao=n("a"),mr=n("span"),u(ln.$$.fragment),nc=l(),fr=n("span"),sc=r("CLIPTextConfig"),ll=l(),V=n("div"),u(dn.$$.fragment),ac=l(),ht=n("p"),rc=r("This is the configuration class to store the configuration of a "),ma=n("a"),ic=r("CLIPModel"),lc=r(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),cn=n("a"),dc=r("openai/clip-vit-base-patch32"),cc=r(" architecture."),pc=l(),mt=n("p"),hc=r("Configuration objects inherit from "),fa=n("a"),mc=r("PretrainedConfig"),fc=r(` and can be used to control the model outputs. Read the
documentation from `),ua=n("a"),uc=r("PretrainedConfig"),gc=r(" for more information."),_c=l(),ur=n("p"),vc=r("Example:"),Pc=l(),u(pn.$$.fragment),dl=l(),ft=n("h2"),ro=n("a"),gr=n("span"),u(hn.$$.fragment),Tc=l(),_r=n("span"),Ic=r("CLIPVisionConfig"),cl=l(),S=n("div"),u(mn.$$.fragment),Cc=l(),ut=n("p"),yc=r("This is the configuration class to store the configuration of a "),ga=n("a"),bc=r("CLIPModel"),Lc=r(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),fn=n("a"),wc=r("openai/clip-vit-base-patch32"),$c=r(" architecture."),kc=l(),gt=n("p"),xc=r("Configuration objects inherit from "),_a=n("a"),Ec=r("PretrainedConfig"),Mc=r(` and can be used to control the model outputs. Read the
documentation from `),va=n("a"),zc=r("PretrainedConfig"),jc=r(" for more information."),Fc=l(),vr=n("p"),qc=r("Example:"),Dc=l(),u(un.$$.fragment),pl=l(),_t=n("h2"),io=n("a"),Pr=n("span"),u(gn.$$.fragment),Oc=l(),Tr=n("span"),Ac=r("CLIPTokenizer"),hl=l(),F=n("div"),u(_n.$$.fragment),Nc=l(),Ir=n("p"),Vc=r("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Sc=l(),vn=n("p"),Wc=r("This tokenizer inherits from "),Pa=n("a"),Bc=r("PreTrainedTokenizer"),Uc=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rc=l(),Te=n("div"),u(Pn.$$.fragment),Hc=l(),Cr=n("p"),Kc=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Gc=l(),yr=n("ul"),Ta=n("li"),Jc=r("single sequence: "),br=n("code"),Xc=r("<|startoftext|> X <|endoftext|>"),Zc=l(),Lr=n("p"),Qc=r("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Yc=l(),lo=n("div"),u(Tn.$$.fragment),ep=l(),In=n("p"),tp=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wr=n("code"),op=r("prepare_for_model"),np=r(" method."),sp=l(),co=n("div"),u(Cn.$$.fragment),ap=l(),$r=n("p"),rp=r(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ip=l(),Ia=n("div"),u(yn.$$.fragment),ml=l(),vt=n("h2"),po=n("a"),kr=n("span"),u(bn.$$.fragment),lp=l(),xr=n("span"),dp=r("CLIPTokenizerFast"),fl=l(),W=n("div"),u(Ln.$$.fragment),cp=l(),wn=n("p"),pp=r("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Er=n("em"),hp=r("tokenizers"),mp=r(` library). Based on byte-level
Byte-Pair-Encoding.`),fp=l(),$n=n("p"),up=r("This tokenizer inherits from "),Ca=n("a"),gp=r("PreTrainedTokenizerFast"),_p=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),vp=l(),Ie=n("div"),u(kn.$$.fragment),Pp=l(),Mr=n("p"),Tp=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Ip=l(),zr=n("ul"),ya=n("li"),Cp=r("single sequence: "),jr=n("code"),yp=r("<|startoftext|> X <|endoftext|>"),bp=l(),Fr=n("p"),Lp=r("Pairs of sequences are not the expected use case, but they will be handled without a separator."),wp=l(),ho=n("div"),u(xn.$$.fragment),$p=l(),qr=n("p"),kp=r(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ul=l(),Pt=n("h2"),mo=n("a"),Dr=n("span"),u(En.$$.fragment),xp=l(),Or=n("span"),Ep=r("CLIPFeatureExtractor"),gl=l(),B=n("div"),u(Mn.$$.fragment),Mp=l(),Ar=n("p"),zp=r("Constructs a CLIP feature extractor."),jp=l(),zn=n("p"),Fp=r("This feature extractor inherits from "),ba=n("a"),qp=r("FeatureExtractionMixin"),Dp=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Op=l(),fo=n("div"),u(jn.$$.fragment),Ap=l(),Fn=n("p"),Np=r("Crops "),Nr=n("code"),Vp=r("image"),Sp=r(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Wp=l(),uo=n("div"),u(qn.$$.fragment),Bp=l(),Tt=n("p"),Up=r("Resizes "),Vr=n("code"),Rp=r("image"),Hp=r(". Note that this will trigger a conversion of "),Sr=n("code"),Kp=r("image"),Gp=r(" to a PIL Image."),_l=l(),It=n("h2"),go=n("a"),Wr=n("span"),u(Dn.$$.fragment),Jp=l(),Br=n("span"),Xp=r("CLIPProcessor"),vl=l(),U=n("div"),u(On.$$.fragment),Zp=l(),Ur=n("p"),Qp=r("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Yp=l(),K=n("p"),La=n("a"),eh=r("CLIPProcessor"),th=r(" offers all the functionalities of "),wa=n("a"),oh=r("CLIPFeatureExtractor"),nh=r(" and "),$a=n("a"),sh=r("CLIPTokenizerFast"),ah=r(`. See the
`),Rr=n("code"),rh=r("__call__()"),ih=r(" and "),ka=n("a"),lh=r("decode()"),dh=r(" for more information."),ch=l(),_o=n("div"),u(An.$$.fragment),ph=l(),Nn=n("p"),hh=r("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),xa=n("a"),mh=r("batch_decode()"),fh=r(`. Please
refer to the docstring of this method for more information.`),uh=l(),vo=n("div"),u(Vn.$$.fragment),gh=l(),Sn=n("p"),_h=r("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ea=n("a"),vh=r("decode()"),Ph=r(`. Please refer to
the docstring of this method for more information.`),Pl=l(),Ct=n("h2"),Po=n("a"),Hr=n("span"),u(Wn.$$.fragment),Th=l(),Kr=n("span"),Ih=r("CLIPModel"),Tl=l(),R=n("div"),u(Bn.$$.fragment),Ch=l(),Un=n("p"),yh=r("This model is a PyTorch "),Rn=n("a"),bh=r("torch.nn.Module"),Lh=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wh=l(),G=n("div"),u(Hn.$$.fragment),$h=l(),yt=n("p"),kh=r("The "),Ma=n("a"),xh=r("CLIPModel"),Eh=r(" forward method, overrides the "),Gr=n("code"),Mh=r("__call__"),zh=r(" special method."),jh=l(),u(To.$$.fragment),Fh=l(),Jr=n("p"),qh=r("Examples:"),Dh=l(),u(Kn.$$.fragment),Oh=l(),J=n("div"),u(Gn.$$.fragment),Ah=l(),bt=n("p"),Nh=r("The "),za=n("a"),Vh=r("CLIPModel"),Sh=r(" forward method, overrides the "),Xr=n("code"),Wh=r("__call__"),Bh=r(" special method."),Uh=l(),u(Io.$$.fragment),Rh=l(),Zr=n("p"),Hh=r("Examples:"),Kh=l(),u(Jn.$$.fragment),Gh=l(),X=n("div"),u(Xn.$$.fragment),Jh=l(),Lt=n("p"),Xh=r("The "),ja=n("a"),Zh=r("CLIPModel"),Qh=r(" forward method, overrides the "),Qr=n("code"),Yh=r("__call__"),em=r(" special method."),tm=l(),u(Co.$$.fragment),om=l(),Yr=n("p"),nm=r("Examples:"),sm=l(),u(Zn.$$.fragment),Il=l(),wt=n("h2"),yo=n("a"),ei=n("span"),u(Qn.$$.fragment),am=l(),ti=n("span"),rm=r("CLIPTextModel"),Cl=l(),$t=n("div"),u(Yn.$$.fragment),im=l(),Z=n("div"),u(es.$$.fragment),lm=l(),kt=n("p"),dm=r("The "),Fa=n("a"),cm=r("CLIPTextModel"),pm=r(" forward method, overrides the "),oi=n("code"),hm=r("__call__"),mm=r(" special method."),fm=l(),u(bo.$$.fragment),um=l(),ni=n("p"),gm=r("Examples:"),_m=l(),u(ts.$$.fragment),yl=l(),xt=n("h2"),Lo=n("a"),si=n("span"),u(os.$$.fragment),vm=l(),ai=n("span"),Pm=r("CLIPVisionModel"),bl=l(),Et=n("div"),u(ns.$$.fragment),Tm=l(),Q=n("div"),u(ss.$$.fragment),Im=l(),Mt=n("p"),Cm=r("The "),qa=n("a"),ym=r("CLIPVisionModel"),bm=r(" forward method, overrides the "),ri=n("code"),Lm=r("__call__"),wm=r(" special method."),$m=l(),u(wo.$$.fragment),km=l(),ii=n("p"),xm=r("Examples:"),Em=l(),u(as.$$.fragment),Ll=l(),zt=n("h2"),$o=n("a"),li=n("span"),u(rs.$$.fragment),Mm=l(),di=n("span"),zm=r("TFCLIPModel"),wl=l(),q=n("div"),u(is.$$.fragment),jm=l(),ls=n("p"),Fm=r("This model inherits from "),Da=n("a"),qm=r("TFPreTrainedModel"),Dm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Om=l(),ds=n("p"),Am=r("This model is also a "),cs=n("a"),Nm=r("tf.keras.Model"),Vm=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sm=l(),u(ko.$$.fragment),Wm=l(),Y=n("div"),u(ps.$$.fragment),Bm=l(),jt=n("p"),Um=r("The "),Oa=n("a"),Rm=r("TFCLIPModel"),Hm=r(" forward method, overrides the "),ci=n("code"),Km=r("__call__"),Gm=r(" special method."),Jm=l(),u(xo.$$.fragment),Xm=l(),pi=n("p"),Zm=r("Examples:"),Qm=l(),u(hs.$$.fragment),Ym=l(),ee=n("div"),u(ms.$$.fragment),ef=l(),Ft=n("p"),tf=r("The "),Aa=n("a"),of=r("TFCLIPModel"),nf=r(" forward method, overrides the "),hi=n("code"),sf=r("__call__"),af=r(" special method."),rf=l(),u(Eo.$$.fragment),lf=l(),mi=n("p"),df=r("Examples:"),cf=l(),u(fs.$$.fragment),pf=l(),te=n("div"),u(us.$$.fragment),hf=l(),qt=n("p"),mf=r("The "),Na=n("a"),ff=r("TFCLIPModel"),uf=r(" forward method, overrides the "),fi=n("code"),gf=r("__call__"),_f=r(" special method."),vf=l(),u(Mo.$$.fragment),Pf=l(),ui=n("p"),Tf=r("Examples:"),If=l(),u(gs.$$.fragment),$l=l(),Dt=n("h2"),zo=n("a"),gi=n("span"),u(_s.$$.fragment),Cf=l(),_i=n("span"),yf=r("TFCLIPTextModel"),kl=l(),Ot=n("div"),u(vs.$$.fragment),bf=l(),oe=n("div"),u(Ps.$$.fragment),Lf=l(),At=n("p"),wf=r("The "),Va=n("a"),$f=r("TFCLIPTextModel"),kf=r(" forward method, overrides the "),vi=n("code"),xf=r("__call__"),Ef=r(" special method."),Mf=l(),u(jo.$$.fragment),zf=l(),Pi=n("p"),jf=r("Examples:"),Ff=l(),u(Ts.$$.fragment),xl=l(),Nt=n("h2"),Fo=n("a"),Ti=n("span"),u(Is.$$.fragment),qf=l(),Ii=n("span"),Df=r("TFCLIPVisionModel"),El=l(),Vt=n("div"),u(Cs.$$.fragment),Of=l(),ne=n("div"),u(ys.$$.fragment),Af=l(),St=n("p"),Nf=r("The "),Sa=n("a"),Vf=r("TFCLIPVisionModel"),Sf=r(" forward method, overrides the "),Ci=n("code"),Wf=r("__call__"),Bf=r(" special method."),Uf=l(),u(qo.$$.fragment),Rf=l(),yi=n("p"),Hf=r("Examples:"),Kf=l(),u(bs.$$.fragment),Ml=l(),Wt=n("h2"),Do=n("a"),bi=n("span"),u(Ls.$$.fragment),Gf=l(),Li=n("span"),Jf=r("FlaxCLIPModel"),zl=l(),M=n("div"),u(ws.$$.fragment),Xf=l(),$s=n("p"),Zf=r("This model inherits from "),Wa=n("a"),Qf=r("FlaxPreTrainedModel"),Yf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eu=l(),ks=n("p"),tu=r("This model is also a Flax Linen "),xs=n("a"),ou=r("flax.linen.Module"),nu=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),su=l(),wi=n("p"),au=r("Finally, this model supports inherent JAX features such as:"),ru=l(),Ee=n("ul"),$i=n("li"),Es=n("a"),iu=r("Just-In-Time (JIT) compilation"),lu=l(),ki=n("li"),Ms=n("a"),du=r("Automatic Differentiation"),cu=l(),xi=n("li"),zs=n("a"),pu=r("Vectorization"),hu=l(),Ei=n("li"),js=n("a"),mu=r("Parallelization"),fu=l(),se=n("div"),u(Fs.$$.fragment),uu=l(),Bt=n("p"),gu=r("The "),Mi=n("code"),_u=r("FlaxCLIPPreTrainedModel"),vu=r(" forward method, overrides the "),zi=n("code"),Pu=r("__call__"),Tu=r(" special method."),Iu=l(),u(Oo.$$.fragment),Cu=l(),ji=n("p"),yu=r("Example:"),bu=l(),u(qs.$$.fragment),Lu=l(),Ne=n("div"),u(Ds.$$.fragment),wu=l(),Fi=n("p"),$u=r("Examples:"),ku=l(),u(Os.$$.fragment),xu=l(),Ve=n("div"),u(As.$$.fragment),Eu=l(),qi=n("p"),Mu=r("Examples:"),zu=l(),u(Ns.$$.fragment),jl=l(),Ut=n("h2"),Ao=n("a"),Di=n("span"),u(Vs.$$.fragment),ju=l(),Oi=n("span"),Fu=r("FlaxCLIPTextModel"),Fl=l(),Rt=n("div"),u(Ss.$$.fragment),qu=l(),ae=n("div"),u(Ws.$$.fragment),Du=l(),Ht=n("p"),Ou=r("The "),Ai=n("code"),Au=r("FlaxCLIPTextPreTrainedModel"),Nu=r(" forward method, overrides the "),Ni=n("code"),Vu=r("__call__"),Su=r(" special method."),Wu=l(),u(No.$$.fragment),Bu=l(),Vi=n("p"),Uu=r("Example:"),Ru=l(),u(Bs.$$.fragment),ql=l(),Kt=n("h2"),Vo=n("a"),Si=n("span"),u(Us.$$.fragment),Hu=l(),Wi=n("span"),Ku=r("FlaxCLIPVisionModel"),Dl=l(),Gt=n("div"),u(Rs.$$.fragment),Gu=l(),re=n("div"),u(Hs.$$.fragment),Ju=l(),Jt=n("p"),Xu=r("The "),Bi=n("code"),Zu=r("FlaxCLIPVisionPreTrainedModel"),Qu=r(" forward method, overrides the "),Ui=n("code"),Yu=r("__call__"),eg=r(" special method."),tg=l(),u(So.$$.fragment),og=l(),Ri=n("p"),ng=r("Example:"),sg=l(),u(Ks.$$.fragment),this.h()},l(t){const h=lP('[data-svelte="svelte-1phssyn"]',document.head);p=s(h,"META",{name:!0,content:!0}),h.forEach(o),L=d(t),I=s(t,"H1",{class:!0});var Gs=a(I);y=s(Gs,"A",{id:!0,class:!0,href:!0});var Hi=a(y);b=s(Hi,"SPAN",{});var Ki=a(b);g(C.$$.fragment,Ki),Ki.forEach(o),Hi.forEach(o),f=d(Gs),w=s(Gs,"SPAN",{});var Gi=a(w);Ho=i(Gi,"CLIP"),Gi.forEach(o),Gs.forEach(o),rt=d(t),z=s(t,"H2",{class:!0});var Js=a(z);ue=s(Js,"A",{id:!0,class:!0,href:!0});var Ji=a(ue);Ce=s(Ji,"SPAN",{});var Xi=a(Ce);g(ye.$$.fragment,Xi),Xi.forEach(o),Ji.forEach(o),Ko=d(Js),be=s(Js,"SPAN",{});var Zi=a(be);Go=i(Zi,"Overview"),Zi.forEach(o),Js.forEach(o),Xt=d(t),pe=s(t,"P",{});var Xs=a(pe);ze=i(Xs,"The CLIP model was proposed in "),Le=s(Xs,"A",{href:!0,rel:!0});var Qi=a(Le);Zt=i(Qi,"Learning Transferable Visual Models From Natural Language Supervision"),Qi.forEach(o),H=i(Xs,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Xs.forEach(o),he=d(t),je=s(t,"P",{});var Yi=a(je);it=i(Yi,"The abstract from the paper is the following:"),Yi.forEach(o),Qt=d(t),Fe=s(t,"P",{});var el=a(Fe);we=s(el,"EM",{});var tl=a(we);Jo=i(tl,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),tl.forEach(o),el.forEach(o),Yt=d(t),O=s(t,"H2",{class:!0});var Zs=a(O);ge=s(Zs,"A",{id:!0,class:!0,href:!0});var ig=a(ge);$e=s(ig,"SPAN",{});var lg=a($e);g(ke.$$.fragment,lg),lg.forEach(o),ig.forEach(o),Xo=d(Zs),xe=s(Zs,"SPAN",{});var dg=a(xe);Zo=i(dg,"Usage"),dg.forEach(o),Zs.forEach(o),eo=d(t),me=s(t,"P",{});var cg=a(me);Qo=i(cg,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),cg.forEach(o),qe=d(t),_e=s(t,"P",{});var Al=a(_e);k=i(Al,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=s(Al,"A",{href:!0});var pg=a(j);to=i(pg,"CLIPFeatureExtractor"),pg.forEach(o),Qs=i(Al," can be used to resize (or rescale) and normalize images for the model."),Al.forEach(o),Yo=d(t),E=s(t,"P",{});var ie=a(E);Ys=i(ie,"The "),lt=s(ie,"A",{href:!0});var hg=a(lt);ea=i(hg,"CLIPTokenizer"),hg.forEach(o),De=i(ie," is used to encode the text. The "),ve=s(ie,"A",{href:!0});var mg=a(ve);ta=i(mg,"CLIPProcessor"),mg.forEach(o),oa=i(ie,` wraps
`),Pe=s(ie,"A",{href:!0});var fg=a(Pe);na=i(fg,"CLIPFeatureExtractor"),fg.forEach(o),sa=i(ie," and "),Oe=s(ie,"A",{href:!0});var ug=a(Oe);aa=i(ug,"CLIPTokenizer"),ug.forEach(o),xd=i(ie,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ra=s(ie,"A",{href:!0});var gg=a(ra);Ed=i(gg,"CLIPProcessor"),gg.forEach(o),Md=i(ie," and "),ia=s(ie,"A",{href:!0});var _g=a(ia);zd=i(_g,"CLIPModel"),_g.forEach(o),jd=i(ie,"."),ie.forEach(o),nl=d(t),g(en.$$.fragment,t),sl=d(t),Ae=s(t,"P",{});var Ba=a(Ae);Fd=i(Ba,"This model was contributed by "),tn=s(Ba,"A",{href:!0,rel:!0});var vg=a(tn);qd=i(vg,"valhalla"),vg.forEach(o),Dd=i(Ba,". The original code can be found "),on=s(Ba,"A",{href:!0,rel:!0});var Pg=a(on);Od=i(Pg,"here"),Pg.forEach(o),Ad=i(Ba,"."),Ba.forEach(o),al=d(t),dt=s(t,"H2",{class:!0});var Nl=a(dt);oo=s(Nl,"A",{id:!0,class:!0,href:!0});var Tg=a(oo);pr=s(Tg,"SPAN",{});var Ig=a(pr);g(nn.$$.fragment,Ig),Ig.forEach(o),Tg.forEach(o),Nd=d(Nl),hr=s(Nl,"SPAN",{});var Cg=a(hr);Vd=i(Cg,"CLIPConfig"),Cg.forEach(o),Nl.forEach(o),rl=d(t),fe=s(t,"DIV",{class:!0});var Wo=a(fe);g(sn.$$.fragment,Wo),Sd=d(Wo),no=s(Wo,"P",{});var ol=a(no);la=s(ol,"A",{href:!0});var yg=a(la);Wd=i(yg,"CLIPConfig"),yg.forEach(o),Bd=i(ol," is the configuration class to store the configuration of a "),da=s(ol,"A",{href:!0});var bg=a(da);Ud=i(bg,"CLIPModel"),bg.forEach(o),Rd=i(ol,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),ol.forEach(o),Hd=d(Wo),ct=s(Wo,"P",{});var Ua=a(ct);Kd=i(Ua,"Configuration objects inherit from "),ca=s(Ua,"A",{href:!0});var Lg=a(ca);Gd=i(Lg,"PretrainedConfig"),Lg.forEach(o),Jd=i(Ua,` and can be used to control the model outputs. Read the
documentation from `),pa=s(Ua,"A",{href:!0});var wg=a(pa);Xd=i(wg,"PretrainedConfig"),wg.forEach(o),Zd=i(Ua," for more information."),Ua.forEach(o),Qd=d(Wo),so=s(Wo,"DIV",{class:!0});var Vl=a(so);g(an.$$.fragment,Vl),Yd=d(Vl),rn=s(Vl,"P",{});var Sl=a(rn);ec=i(Sl,"Instantiate a "),ha=s(Sl,"A",{href:!0});var $g=a(ha);tc=i($g,"CLIPConfig"),$g.forEach(o),oc=i(Sl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Sl.forEach(o),Vl.forEach(o),Wo.forEach(o),il=d(t),pt=s(t,"H2",{class:!0});var Wl=a(pt);ao=s(Wl,"A",{id:!0,class:!0,href:!0});var kg=a(ao);mr=s(kg,"SPAN",{});var xg=a(mr);g(ln.$$.fragment,xg),xg.forEach(o),kg.forEach(o),nc=d(Wl),fr=s(Wl,"SPAN",{});var Eg=a(fr);sc=i(Eg,"CLIPTextConfig"),Eg.forEach(o),Wl.forEach(o),ll=d(t),V=s(t,"DIV",{class:!0});var Se=a(V);g(dn.$$.fragment,Se),ac=d(Se),ht=s(Se,"P",{});var Ra=a(ht);rc=i(Ra,"This is the configuration class to store the configuration of a "),ma=s(Ra,"A",{href:!0});var Mg=a(ma);ic=i(Mg,"CLIPModel"),Mg.forEach(o),lc=i(Ra,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),cn=s(Ra,"A",{href:!0,rel:!0});var zg=a(cn);dc=i(zg,"openai/clip-vit-base-patch32"),zg.forEach(o),cc=i(Ra," architecture."),Ra.forEach(o),pc=d(Se),mt=s(Se,"P",{});var Ha=a(mt);hc=i(Ha,"Configuration objects inherit from "),fa=s(Ha,"A",{href:!0});var jg=a(fa);mc=i(jg,"PretrainedConfig"),jg.forEach(o),fc=i(Ha,` and can be used to control the model outputs. Read the
documentation from `),ua=s(Ha,"A",{href:!0});var Fg=a(ua);uc=i(Fg,"PretrainedConfig"),Fg.forEach(o),gc=i(Ha," for more information."),Ha.forEach(o),_c=d(Se),ur=s(Se,"P",{});var qg=a(ur);vc=i(qg,"Example:"),qg.forEach(o),Pc=d(Se),g(pn.$$.fragment,Se),Se.forEach(o),dl=d(t),ft=s(t,"H2",{class:!0});var Bl=a(ft);ro=s(Bl,"A",{id:!0,class:!0,href:!0});var Dg=a(ro);gr=s(Dg,"SPAN",{});var Og=a(gr);g(hn.$$.fragment,Og),Og.forEach(o),Dg.forEach(o),Tc=d(Bl),_r=s(Bl,"SPAN",{});var Ag=a(_r);Ic=i(Ag,"CLIPVisionConfig"),Ag.forEach(o),Bl.forEach(o),cl=d(t),S=s(t,"DIV",{class:!0});var We=a(S);g(mn.$$.fragment,We),Cc=d(We),ut=s(We,"P",{});var Ka=a(ut);yc=i(Ka,"This is the configuration class to store the configuration of a "),ga=s(Ka,"A",{href:!0});var Ng=a(ga);bc=i(Ng,"CLIPModel"),Ng.forEach(o),Lc=i(Ka,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),fn=s(Ka,"A",{href:!0,rel:!0});var Vg=a(fn);wc=i(Vg,"openai/clip-vit-base-patch32"),Vg.forEach(o),$c=i(Ka," architecture."),Ka.forEach(o),kc=d(We),gt=s(We,"P",{});var Ga=a(gt);xc=i(Ga,"Configuration objects inherit from "),_a=s(Ga,"A",{href:!0});var Sg=a(_a);Ec=i(Sg,"PretrainedConfig"),Sg.forEach(o),Mc=i(Ga,` and can be used to control the model outputs. Read the
documentation from `),va=s(Ga,"A",{href:!0});var Wg=a(va);zc=i(Wg,"PretrainedConfig"),Wg.forEach(o),jc=i(Ga," for more information."),Ga.forEach(o),Fc=d(We),vr=s(We,"P",{});var Bg=a(vr);qc=i(Bg,"Example:"),Bg.forEach(o),Dc=d(We),g(un.$$.fragment,We),We.forEach(o),pl=d(t),_t=s(t,"H2",{class:!0});var Ul=a(_t);io=s(Ul,"A",{id:!0,class:!0,href:!0});var Ug=a(io);Pr=s(Ug,"SPAN",{});var Rg=a(Pr);g(gn.$$.fragment,Rg),Rg.forEach(o),Ug.forEach(o),Oc=d(Ul),Tr=s(Ul,"SPAN",{});var Hg=a(Tr);Ac=i(Hg,"CLIPTokenizer"),Hg.forEach(o),Ul.forEach(o),hl=d(t),F=s(t,"DIV",{class:!0});var le=a(F);g(_n.$$.fragment,le),Nc=d(le),Ir=s(le,"P",{});var Kg=a(Ir);Vc=i(Kg,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Kg.forEach(o),Sc=d(le),vn=s(le,"P",{});var Rl=a(vn);Wc=i(Rl,"This tokenizer inherits from "),Pa=s(Rl,"A",{href:!0});var Gg=a(Pa);Bc=i(Gg,"PreTrainedTokenizer"),Gg.forEach(o),Uc=i(Rl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rl.forEach(o),Rc=d(le),Te=s(le,"DIV",{class:!0});var Bo=a(Te);g(Pn.$$.fragment,Bo),Hc=d(Bo),Cr=s(Bo,"P",{});var Jg=a(Cr);Kc=i(Jg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Jg.forEach(o),Gc=d(Bo),yr=s(Bo,"UL",{});var Xg=a(yr);Ta=s(Xg,"LI",{});var ag=a(Ta);Jc=i(ag,"single sequence: "),br=s(ag,"CODE",{});var Zg=a(br);Xc=i(Zg,"<|startoftext|> X <|endoftext|>"),Zg.forEach(o),ag.forEach(o),Xg.forEach(o),Zc=d(Bo),Lr=s(Bo,"P",{});var Qg=a(Lr);Qc=i(Qg,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Qg.forEach(o),Bo.forEach(o),Yc=d(le),lo=s(le,"DIV",{class:!0});var Hl=a(lo);g(Tn.$$.fragment,Hl),ep=d(Hl),In=s(Hl,"P",{});var Kl=a(In);tp=i(Kl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wr=s(Kl,"CODE",{});var Yg=a(wr);op=i(Yg,"prepare_for_model"),Yg.forEach(o),np=i(Kl," method."),Kl.forEach(o),Hl.forEach(o),sp=d(le),co=s(le,"DIV",{class:!0});var Gl=a(co);g(Cn.$$.fragment,Gl),ap=d(Gl),$r=s(Gl,"P",{});var e_=a($r);rp=i(e_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),e_.forEach(o),Gl.forEach(o),ip=d(le),Ia=s(le,"DIV",{class:!0});var t_=a(Ia);g(yn.$$.fragment,t_),t_.forEach(o),le.forEach(o),ml=d(t),vt=s(t,"H2",{class:!0});var Jl=a(vt);po=s(Jl,"A",{id:!0,class:!0,href:!0});var o_=a(po);kr=s(o_,"SPAN",{});var n_=a(kr);g(bn.$$.fragment,n_),n_.forEach(o),o_.forEach(o),lp=d(Jl),xr=s(Jl,"SPAN",{});var s_=a(xr);dp=i(s_,"CLIPTokenizerFast"),s_.forEach(o),Jl.forEach(o),fl=d(t),W=s(t,"DIV",{class:!0});var Be=a(W);g(Ln.$$.fragment,Be),cp=d(Be),wn=s(Be,"P",{});var Xl=a(wn);pp=i(Xl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Er=s(Xl,"EM",{});var a_=a(Er);hp=i(a_,"tokenizers"),a_.forEach(o),mp=i(Xl,` library). Based on byte-level
Byte-Pair-Encoding.`),Xl.forEach(o),fp=d(Be),$n=s(Be,"P",{});var Zl=a($n);up=i(Zl,"This tokenizer inherits from "),Ca=s(Zl,"A",{href:!0});var r_=a(Ca);gp=i(r_,"PreTrainedTokenizerFast"),r_.forEach(o),_p=i(Zl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Zl.forEach(o),vp=d(Be),Ie=s(Be,"DIV",{class:!0});var Uo=a(Ie);g(kn.$$.fragment,Uo),Pp=d(Uo),Mr=s(Uo,"P",{});var i_=a(Mr);Tp=i(i_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),i_.forEach(o),Ip=d(Uo),zr=s(Uo,"UL",{});var l_=a(zr);ya=s(l_,"LI",{});var rg=a(ya);Cp=i(rg,"single sequence: "),jr=s(rg,"CODE",{});var d_=a(jr);yp=i(d_,"<|startoftext|> X <|endoftext|>"),d_.forEach(o),rg.forEach(o),l_.forEach(o),bp=d(Uo),Fr=s(Uo,"P",{});var c_=a(Fr);Lp=i(c_,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),c_.forEach(o),Uo.forEach(o),wp=d(Be),ho=s(Be,"DIV",{class:!0});var Ql=a(ho);g(xn.$$.fragment,Ql),$p=d(Ql),qr=s(Ql,"P",{});var p_=a(qr);kp=i(p_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),p_.forEach(o),Ql.forEach(o),Be.forEach(o),ul=d(t),Pt=s(t,"H2",{class:!0});var Yl=a(Pt);mo=s(Yl,"A",{id:!0,class:!0,href:!0});var h_=a(mo);Dr=s(h_,"SPAN",{});var m_=a(Dr);g(En.$$.fragment,m_),m_.forEach(o),h_.forEach(o),xp=d(Yl),Or=s(Yl,"SPAN",{});var f_=a(Or);Ep=i(f_,"CLIPFeatureExtractor"),f_.forEach(o),Yl.forEach(o),gl=d(t),B=s(t,"DIV",{class:!0});var Ue=a(B);g(Mn.$$.fragment,Ue),Mp=d(Ue),Ar=s(Ue,"P",{});var u_=a(Ar);zp=i(u_,"Constructs a CLIP feature extractor."),u_.forEach(o),jp=d(Ue),zn=s(Ue,"P",{});var ed=a(zn);Fp=i(ed,"This feature extractor inherits from "),ba=s(ed,"A",{href:!0});var g_=a(ba);qp=i(g_,"FeatureExtractionMixin"),g_.forEach(o),Dp=i(ed,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ed.forEach(o),Op=d(Ue),fo=s(Ue,"DIV",{class:!0});var td=a(fo);g(jn.$$.fragment,td),Ap=d(td),Fn=s(td,"P",{});var od=a(Fn);Np=i(od,"Crops "),Nr=s(od,"CODE",{});var __=a(Nr);Vp=i(__,"image"),__.forEach(o),Sp=i(od,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),od.forEach(o),td.forEach(o),Wp=d(Ue),uo=s(Ue,"DIV",{class:!0});var nd=a(uo);g(qn.$$.fragment,nd),Bp=d(nd),Tt=s(nd,"P",{});var Ja=a(Tt);Up=i(Ja,"Resizes "),Vr=s(Ja,"CODE",{});var v_=a(Vr);Rp=i(v_,"image"),v_.forEach(o),Hp=i(Ja,". Note that this will trigger a conversion of "),Sr=s(Ja,"CODE",{});var P_=a(Sr);Kp=i(P_,"image"),P_.forEach(o),Gp=i(Ja," to a PIL Image."),Ja.forEach(o),nd.forEach(o),Ue.forEach(o),_l=d(t),It=s(t,"H2",{class:!0});var sd=a(It);go=s(sd,"A",{id:!0,class:!0,href:!0});var T_=a(go);Wr=s(T_,"SPAN",{});var I_=a(Wr);g(Dn.$$.fragment,I_),I_.forEach(o),T_.forEach(o),Jp=d(sd),Br=s(sd,"SPAN",{});var C_=a(Br);Xp=i(C_,"CLIPProcessor"),C_.forEach(o),sd.forEach(o),vl=d(t),U=s(t,"DIV",{class:!0});var Re=a(U);g(On.$$.fragment,Re),Zp=d(Re),Ur=s(Re,"P",{});var y_=a(Ur);Qp=i(y_,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),y_.forEach(o),Yp=d(Re),K=s(Re,"P",{});var Me=a(K);La=s(Me,"A",{href:!0});var b_=a(La);eh=i(b_,"CLIPProcessor"),b_.forEach(o),th=i(Me," offers all the functionalities of "),wa=s(Me,"A",{href:!0});var L_=a(wa);oh=i(L_,"CLIPFeatureExtractor"),L_.forEach(o),nh=i(Me," and "),$a=s(Me,"A",{href:!0});var w_=a($a);sh=i(w_,"CLIPTokenizerFast"),w_.forEach(o),ah=i(Me,`. See the
`),Rr=s(Me,"CODE",{});var $_=a(Rr);rh=i($_,"__call__()"),$_.forEach(o),ih=i(Me," and "),ka=s(Me,"A",{href:!0});var k_=a(ka);lh=i(k_,"decode()"),k_.forEach(o),dh=i(Me," for more information."),Me.forEach(o),ch=d(Re),_o=s(Re,"DIV",{class:!0});var ad=a(_o);g(An.$$.fragment,ad),ph=d(ad),Nn=s(ad,"P",{});var rd=a(Nn);hh=i(rd,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),xa=s(rd,"A",{href:!0});var x_=a(xa);mh=i(x_,"batch_decode()"),x_.forEach(o),fh=i(rd,`. Please
refer to the docstring of this method for more information.`),rd.forEach(o),ad.forEach(o),uh=d(Re),vo=s(Re,"DIV",{class:!0});var id=a(vo);g(Vn.$$.fragment,id),gh=d(id),Sn=s(id,"P",{});var ld=a(Sn);_h=i(ld,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ea=s(ld,"A",{href:!0});var E_=a(Ea);vh=i(E_,"decode()"),E_.forEach(o),Ph=i(ld,`. Please refer to
the docstring of this method for more information.`),ld.forEach(o),id.forEach(o),Re.forEach(o),Pl=d(t),Ct=s(t,"H2",{class:!0});var dd=a(Ct);Po=s(dd,"A",{id:!0,class:!0,href:!0});var M_=a(Po);Hr=s(M_,"SPAN",{});var z_=a(Hr);g(Wn.$$.fragment,z_),z_.forEach(o),M_.forEach(o),Th=d(dd),Kr=s(dd,"SPAN",{});var j_=a(Kr);Ih=i(j_,"CLIPModel"),j_.forEach(o),dd.forEach(o),Tl=d(t),R=s(t,"DIV",{class:!0});var He=a(R);g(Bn.$$.fragment,He),Ch=d(He),Un=s(He,"P",{});var cd=a(Un);yh=i(cd,"This model is a PyTorch "),Rn=s(cd,"A",{href:!0,rel:!0});var F_=a(Rn);bh=i(F_,"torch.nn.Module"),F_.forEach(o),Lh=i(cd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cd.forEach(o),wh=d(He),G=s(He,"DIV",{class:!0});var Ke=a(G);g(Hn.$$.fragment,Ke),$h=d(Ke),yt=s(Ke,"P",{});var Xa=a(yt);kh=i(Xa,"The "),Ma=s(Xa,"A",{href:!0});var q_=a(Ma);xh=i(q_,"CLIPModel"),q_.forEach(o),Eh=i(Xa," forward method, overrides the "),Gr=s(Xa,"CODE",{});var D_=a(Gr);Mh=i(D_,"__call__"),D_.forEach(o),zh=i(Xa," special method."),Xa.forEach(o),jh=d(Ke),g(To.$$.fragment,Ke),Fh=d(Ke),Jr=s(Ke,"P",{});var O_=a(Jr);qh=i(O_,"Examples:"),O_.forEach(o),Dh=d(Ke),g(Kn.$$.fragment,Ke),Ke.forEach(o),Oh=d(He),J=s(He,"DIV",{class:!0});var Ge=a(J);g(Gn.$$.fragment,Ge),Ah=d(Ge),bt=s(Ge,"P",{});var Za=a(bt);Nh=i(Za,"The "),za=s(Za,"A",{href:!0});var A_=a(za);Vh=i(A_,"CLIPModel"),A_.forEach(o),Sh=i(Za," forward method, overrides the "),Xr=s(Za,"CODE",{});var N_=a(Xr);Wh=i(N_,"__call__"),N_.forEach(o),Bh=i(Za," special method."),Za.forEach(o),Uh=d(Ge),g(Io.$$.fragment,Ge),Rh=d(Ge),Zr=s(Ge,"P",{});var V_=a(Zr);Hh=i(V_,"Examples:"),V_.forEach(o),Kh=d(Ge),g(Jn.$$.fragment,Ge),Ge.forEach(o),Gh=d(He),X=s(He,"DIV",{class:!0});var Je=a(X);g(Xn.$$.fragment,Je),Jh=d(Je),Lt=s(Je,"P",{});var Qa=a(Lt);Xh=i(Qa,"The "),ja=s(Qa,"A",{href:!0});var S_=a(ja);Zh=i(S_,"CLIPModel"),S_.forEach(o),Qh=i(Qa," forward method, overrides the "),Qr=s(Qa,"CODE",{});var W_=a(Qr);Yh=i(W_,"__call__"),W_.forEach(o),em=i(Qa," special method."),Qa.forEach(o),tm=d(Je),g(Co.$$.fragment,Je),om=d(Je),Yr=s(Je,"P",{});var B_=a(Yr);nm=i(B_,"Examples:"),B_.forEach(o),sm=d(Je),g(Zn.$$.fragment,Je),Je.forEach(o),He.forEach(o),Il=d(t),wt=s(t,"H2",{class:!0});var pd=a(wt);yo=s(pd,"A",{id:!0,class:!0,href:!0});var U_=a(yo);ei=s(U_,"SPAN",{});var R_=a(ei);g(Qn.$$.fragment,R_),R_.forEach(o),U_.forEach(o),am=d(pd),ti=s(pd,"SPAN",{});var H_=a(ti);rm=i(H_,"CLIPTextModel"),H_.forEach(o),pd.forEach(o),Cl=d(t),$t=s(t,"DIV",{class:!0});var hd=a($t);g(Yn.$$.fragment,hd),im=d(hd),Z=s(hd,"DIV",{class:!0});var Xe=a(Z);g(es.$$.fragment,Xe),lm=d(Xe),kt=s(Xe,"P",{});var Ya=a(kt);dm=i(Ya,"The "),Fa=s(Ya,"A",{href:!0});var K_=a(Fa);cm=i(K_,"CLIPTextModel"),K_.forEach(o),pm=i(Ya," forward method, overrides the "),oi=s(Ya,"CODE",{});var G_=a(oi);hm=i(G_,"__call__"),G_.forEach(o),mm=i(Ya," special method."),Ya.forEach(o),fm=d(Xe),g(bo.$$.fragment,Xe),um=d(Xe),ni=s(Xe,"P",{});var J_=a(ni);gm=i(J_,"Examples:"),J_.forEach(o),_m=d(Xe),g(ts.$$.fragment,Xe),Xe.forEach(o),hd.forEach(o),yl=d(t),xt=s(t,"H2",{class:!0});var md=a(xt);Lo=s(md,"A",{id:!0,class:!0,href:!0});var X_=a(Lo);si=s(X_,"SPAN",{});var Z_=a(si);g(os.$$.fragment,Z_),Z_.forEach(o),X_.forEach(o),vm=d(md),ai=s(md,"SPAN",{});var Q_=a(ai);Pm=i(Q_,"CLIPVisionModel"),Q_.forEach(o),md.forEach(o),bl=d(t),Et=s(t,"DIV",{class:!0});var fd=a(Et);g(ns.$$.fragment,fd),Tm=d(fd),Q=s(fd,"DIV",{class:!0});var Ze=a(Q);g(ss.$$.fragment,Ze),Im=d(Ze),Mt=s(Ze,"P",{});var er=a(Mt);Cm=i(er,"The "),qa=s(er,"A",{href:!0});var Y_=a(qa);ym=i(Y_,"CLIPVisionModel"),Y_.forEach(o),bm=i(er," forward method, overrides the "),ri=s(er,"CODE",{});var ev=a(ri);Lm=i(ev,"__call__"),ev.forEach(o),wm=i(er," special method."),er.forEach(o),$m=d(Ze),g(wo.$$.fragment,Ze),km=d(Ze),ii=s(Ze,"P",{});var tv=a(ii);xm=i(tv,"Examples:"),tv.forEach(o),Em=d(Ze),g(as.$$.fragment,Ze),Ze.forEach(o),fd.forEach(o),Ll=d(t),zt=s(t,"H2",{class:!0});var ud=a(zt);$o=s(ud,"A",{id:!0,class:!0,href:!0});var ov=a($o);li=s(ov,"SPAN",{});var nv=a(li);g(rs.$$.fragment,nv),nv.forEach(o),ov.forEach(o),Mm=d(ud),di=s(ud,"SPAN",{});var sv=a(di);zm=i(sv,"TFCLIPModel"),sv.forEach(o),ud.forEach(o),wl=d(t),q=s(t,"DIV",{class:!0});var de=a(q);g(is.$$.fragment,de),jm=d(de),ls=s(de,"P",{});var gd=a(ls);Fm=i(gd,"This model inherits from "),Da=s(gd,"A",{href:!0});var av=a(Da);qm=i(av,"TFPreTrainedModel"),av.forEach(o),Dm=i(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(o),Om=d(de),ds=s(de,"P",{});var _d=a(ds);Am=i(_d,"This model is also a "),cs=s(_d,"A",{href:!0,rel:!0});var rv=a(cs);Nm=i(rv,"tf.keras.Model"),rv.forEach(o),Vm=i(_d,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_d.forEach(o),Sm=d(de),g(ko.$$.fragment,de),Wm=d(de),Y=s(de,"DIV",{class:!0});var Qe=a(Y);g(ps.$$.fragment,Qe),Bm=d(Qe),jt=s(Qe,"P",{});var tr=a(jt);Um=i(tr,"The "),Oa=s(tr,"A",{href:!0});var iv=a(Oa);Rm=i(iv,"TFCLIPModel"),iv.forEach(o),Hm=i(tr," forward method, overrides the "),ci=s(tr,"CODE",{});var lv=a(ci);Km=i(lv,"__call__"),lv.forEach(o),Gm=i(tr," special method."),tr.forEach(o),Jm=d(Qe),g(xo.$$.fragment,Qe),Xm=d(Qe),pi=s(Qe,"P",{});var dv=a(pi);Zm=i(dv,"Examples:"),dv.forEach(o),Qm=d(Qe),g(hs.$$.fragment,Qe),Qe.forEach(o),Ym=d(de),ee=s(de,"DIV",{class:!0});var Ye=a(ee);g(ms.$$.fragment,Ye),ef=d(Ye),Ft=s(Ye,"P",{});var or=a(Ft);tf=i(or,"The "),Aa=s(or,"A",{href:!0});var cv=a(Aa);of=i(cv,"TFCLIPModel"),cv.forEach(o),nf=i(or," forward method, overrides the "),hi=s(or,"CODE",{});var pv=a(hi);sf=i(pv,"__call__"),pv.forEach(o),af=i(or," special method."),or.forEach(o),rf=d(Ye),g(Eo.$$.fragment,Ye),lf=d(Ye),mi=s(Ye,"P",{});var hv=a(mi);df=i(hv,"Examples:"),hv.forEach(o),cf=d(Ye),g(fs.$$.fragment,Ye),Ye.forEach(o),pf=d(de),te=s(de,"DIV",{class:!0});var et=a(te);g(us.$$.fragment,et),hf=d(et),qt=s(et,"P",{});var nr=a(qt);mf=i(nr,"The "),Na=s(nr,"A",{href:!0});var mv=a(Na);ff=i(mv,"TFCLIPModel"),mv.forEach(o),uf=i(nr," forward method, overrides the "),fi=s(nr,"CODE",{});var fv=a(fi);gf=i(fv,"__call__"),fv.forEach(o),_f=i(nr," special method."),nr.forEach(o),vf=d(et),g(Mo.$$.fragment,et),Pf=d(et),ui=s(et,"P",{});var uv=a(ui);Tf=i(uv,"Examples:"),uv.forEach(o),If=d(et),g(gs.$$.fragment,et),et.forEach(o),de.forEach(o),$l=d(t),Dt=s(t,"H2",{class:!0});var vd=a(Dt);zo=s(vd,"A",{id:!0,class:!0,href:!0});var gv=a(zo);gi=s(gv,"SPAN",{});var _v=a(gi);g(_s.$$.fragment,_v),_v.forEach(o),gv.forEach(o),Cf=d(vd),_i=s(vd,"SPAN",{});var vv=a(_i);yf=i(vv,"TFCLIPTextModel"),vv.forEach(o),vd.forEach(o),kl=d(t),Ot=s(t,"DIV",{class:!0});var Pd=a(Ot);g(vs.$$.fragment,Pd),bf=d(Pd),oe=s(Pd,"DIV",{class:!0});var tt=a(oe);g(Ps.$$.fragment,tt),Lf=d(tt),At=s(tt,"P",{});var sr=a(At);wf=i(sr,"The "),Va=s(sr,"A",{href:!0});var Pv=a(Va);$f=i(Pv,"TFCLIPTextModel"),Pv.forEach(o),kf=i(sr," forward method, overrides the "),vi=s(sr,"CODE",{});var Tv=a(vi);xf=i(Tv,"__call__"),Tv.forEach(o),Ef=i(sr," special method."),sr.forEach(o),Mf=d(tt),g(jo.$$.fragment,tt),zf=d(tt),Pi=s(tt,"P",{});var Iv=a(Pi);jf=i(Iv,"Examples:"),Iv.forEach(o),Ff=d(tt),g(Ts.$$.fragment,tt),tt.forEach(o),Pd.forEach(o),xl=d(t),Nt=s(t,"H2",{class:!0});var Td=a(Nt);Fo=s(Td,"A",{id:!0,class:!0,href:!0});var Cv=a(Fo);Ti=s(Cv,"SPAN",{});var yv=a(Ti);g(Is.$$.fragment,yv),yv.forEach(o),Cv.forEach(o),qf=d(Td),Ii=s(Td,"SPAN",{});var bv=a(Ii);Df=i(bv,"TFCLIPVisionModel"),bv.forEach(o),Td.forEach(o),El=d(t),Vt=s(t,"DIV",{class:!0});var Id=a(Vt);g(Cs.$$.fragment,Id),Of=d(Id),ne=s(Id,"DIV",{class:!0});var ot=a(ne);g(ys.$$.fragment,ot),Af=d(ot),St=s(ot,"P",{});var ar=a(St);Nf=i(ar,"The "),Sa=s(ar,"A",{href:!0});var Lv=a(Sa);Vf=i(Lv,"TFCLIPVisionModel"),Lv.forEach(o),Sf=i(ar," forward method, overrides the "),Ci=s(ar,"CODE",{});var wv=a(Ci);Wf=i(wv,"__call__"),wv.forEach(o),Bf=i(ar," special method."),ar.forEach(o),Uf=d(ot),g(qo.$$.fragment,ot),Rf=d(ot),yi=s(ot,"P",{});var $v=a(yi);Hf=i($v,"Examples:"),$v.forEach(o),Kf=d(ot),g(bs.$$.fragment,ot),ot.forEach(o),Id.forEach(o),Ml=d(t),Wt=s(t,"H2",{class:!0});var Cd=a(Wt);Do=s(Cd,"A",{id:!0,class:!0,href:!0});var kv=a(Do);bi=s(kv,"SPAN",{});var xv=a(bi);g(Ls.$$.fragment,xv),xv.forEach(o),kv.forEach(o),Gf=d(Cd),Li=s(Cd,"SPAN",{});var Ev=a(Li);Jf=i(Ev,"FlaxCLIPModel"),Ev.forEach(o),Cd.forEach(o),zl=d(t),M=s(t,"DIV",{class:!0});var N=a(M);g(ws.$$.fragment,N),Xf=d(N),$s=s(N,"P",{});var yd=a($s);Zf=i(yd,"This model inherits from "),Wa=s(yd,"A",{href:!0});var Mv=a(Wa);Qf=i(Mv,"FlaxPreTrainedModel"),Mv.forEach(o),Yf=i(yd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yd.forEach(o),eu=d(N),ks=s(N,"P",{});var bd=a(ks);tu=i(bd,"This model is also a Flax Linen "),xs=s(bd,"A",{href:!0,rel:!0});var zv=a(xs);ou=i(zv,"flax.linen.Module"),zv.forEach(o),nu=i(bd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bd.forEach(o),su=d(N),wi=s(N,"P",{});var jv=a(wi);au=i(jv,"Finally, this model supports inherent JAX features such as:"),jv.forEach(o),ru=d(N),Ee=s(N,"UL",{});var Ro=a(Ee);$i=s(Ro,"LI",{});var Fv=a($i);Es=s(Fv,"A",{href:!0,rel:!0});var qv=a(Es);iu=i(qv,"Just-In-Time (JIT) compilation"),qv.forEach(o),Fv.forEach(o),lu=d(Ro),ki=s(Ro,"LI",{});var Dv=a(ki);Ms=s(Dv,"A",{href:!0,rel:!0});var Ov=a(Ms);du=i(Ov,"Automatic Differentiation"),Ov.forEach(o),Dv.forEach(o),cu=d(Ro),xi=s(Ro,"LI",{});var Av=a(xi);zs=s(Av,"A",{href:!0,rel:!0});var Nv=a(zs);pu=i(Nv,"Vectorization"),Nv.forEach(o),Av.forEach(o),hu=d(Ro),Ei=s(Ro,"LI",{});var Vv=a(Ei);js=s(Vv,"A",{href:!0,rel:!0});var Sv=a(js);mu=i(Sv,"Parallelization"),Sv.forEach(o),Vv.forEach(o),Ro.forEach(o),fu=d(N),se=s(N,"DIV",{class:!0});var nt=a(se);g(Fs.$$.fragment,nt),uu=d(nt),Bt=s(nt,"P",{});var rr=a(Bt);gu=i(rr,"The "),Mi=s(rr,"CODE",{});var Wv=a(Mi);_u=i(Wv,"FlaxCLIPPreTrainedModel"),Wv.forEach(o),vu=i(rr," forward method, overrides the "),zi=s(rr,"CODE",{});var Bv=a(zi);Pu=i(Bv,"__call__"),Bv.forEach(o),Tu=i(rr," special method."),rr.forEach(o),Iu=d(nt),g(Oo.$$.fragment,nt),Cu=d(nt),ji=s(nt,"P",{});var Uv=a(ji);yu=i(Uv,"Example:"),Uv.forEach(o),bu=d(nt),g(qs.$$.fragment,nt),nt.forEach(o),Lu=d(N),Ne=s(N,"DIV",{class:!0});var ir=a(Ne);g(Ds.$$.fragment,ir),wu=d(ir),Fi=s(ir,"P",{});var Rv=a(Fi);$u=i(Rv,"Examples:"),Rv.forEach(o),ku=d(ir),g(Os.$$.fragment,ir),ir.forEach(o),xu=d(N),Ve=s(N,"DIV",{class:!0});var lr=a(Ve);g(As.$$.fragment,lr),Eu=d(lr),qi=s(lr,"P",{});var Hv=a(qi);Mu=i(Hv,"Examples:"),Hv.forEach(o),zu=d(lr),g(Ns.$$.fragment,lr),lr.forEach(o),N.forEach(o),jl=d(t),Ut=s(t,"H2",{class:!0});var Ld=a(Ut);Ao=s(Ld,"A",{id:!0,class:!0,href:!0});var Kv=a(Ao);Di=s(Kv,"SPAN",{});var Gv=a(Di);g(Vs.$$.fragment,Gv),Gv.forEach(o),Kv.forEach(o),ju=d(Ld),Oi=s(Ld,"SPAN",{});var Jv=a(Oi);Fu=i(Jv,"FlaxCLIPTextModel"),Jv.forEach(o),Ld.forEach(o),Fl=d(t),Rt=s(t,"DIV",{class:!0});var wd=a(Rt);g(Ss.$$.fragment,wd),qu=d(wd),ae=s(wd,"DIV",{class:!0});var st=a(ae);g(Ws.$$.fragment,st),Du=d(st),Ht=s(st,"P",{});var dr=a(Ht);Ou=i(dr,"The "),Ai=s(dr,"CODE",{});var Xv=a(Ai);Au=i(Xv,"FlaxCLIPTextPreTrainedModel"),Xv.forEach(o),Nu=i(dr," forward method, overrides the "),Ni=s(dr,"CODE",{});var Zv=a(Ni);Vu=i(Zv,"__call__"),Zv.forEach(o),Su=i(dr," special method."),dr.forEach(o),Wu=d(st),g(No.$$.fragment,st),Bu=d(st),Vi=s(st,"P",{});var Qv=a(Vi);Uu=i(Qv,"Example:"),Qv.forEach(o),Ru=d(st),g(Bs.$$.fragment,st),st.forEach(o),wd.forEach(o),ql=d(t),Kt=s(t,"H2",{class:!0});var $d=a(Kt);Vo=s($d,"A",{id:!0,class:!0,href:!0});var Yv=a(Vo);Si=s(Yv,"SPAN",{});var eP=a(Si);g(Us.$$.fragment,eP),eP.forEach(o),Yv.forEach(o),Hu=d($d),Wi=s($d,"SPAN",{});var tP=a(Wi);Ku=i(tP,"FlaxCLIPVisionModel"),tP.forEach(o),$d.forEach(o),Dl=d(t),Gt=s(t,"DIV",{class:!0});var kd=a(Gt);g(Rs.$$.fragment,kd),Gu=d(kd),re=s(kd,"DIV",{class:!0});var at=a(re);g(Hs.$$.fragment,at),Ju=d(at),Jt=s(at,"P",{});var cr=a(Jt);Xu=i(cr,"The "),Bi=s(cr,"CODE",{});var oP=a(Bi);Zu=i(oP,"FlaxCLIPVisionPreTrainedModel"),oP.forEach(o),Qu=i(cr," forward method, overrides the "),Ui=s(cr,"CODE",{});var nP=a(Ui);Yu=i(nP,"__call__"),nP.forEach(o),eg=i(cr," special method."),cr.forEach(o),tg=d(at),g(So.$$.fragment,at),og=d(at),Ri=s(at,"P",{});var sP=a(Ri);ng=i(sP,"Example:"),sP.forEach(o),sg=d(at),g(Ks.$$.fragment,at),at.forEach(o),kd.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(LP)),c(y,"id","clip"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#clip"),c(I,"class","relative group"),c(ue,"id","overview"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#overview"),c(z,"class","relative group"),c(Le,"href","https://arxiv.org/abs/2103.00020"),c(Le,"rel","nofollow"),c(ge,"id","usage"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#usage"),c(O,"class","relative group"),c(j,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(lt,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTokenizer"),c(ve,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPProcessor"),c(Pe,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Oe,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTokenizer"),c(ra,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPProcessor"),c(ia,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPModel"),c(tn,"href","https://huggingface.co/valhalla"),c(tn,"rel","nofollow"),c(on,"href","https://github.com/openai/CLIP"),c(on,"rel","nofollow"),c(oo,"id","transformers.CLIPConfig"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.CLIPConfig"),c(dt,"class","relative group"),c(la,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPConfig"),c(da,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPModel"),c(ca,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(pa,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(ha,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPConfig"),c(so,"class","docstring"),c(fe,"class","docstring"),c(ao,"id","transformers.CLIPTextConfig"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.CLIPTextConfig"),c(pt,"class","relative group"),c(ma,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPModel"),c(cn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(cn,"rel","nofollow"),c(fa,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(ua,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(V,"class","docstring"),c(ro,"id","transformers.CLIPVisionConfig"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.CLIPVisionConfig"),c(ft,"class","relative group"),c(ga,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPModel"),c(fn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(fn,"rel","nofollow"),c(_a,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(va,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(S,"class","docstring"),c(io,"id","transformers.CLIPTokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.CLIPTokenizer"),c(_t,"class","relative group"),c(Pa,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Te,"class","docstring"),c(lo,"class","docstring"),c(co,"class","docstring"),c(Ia,"class","docstring"),c(F,"class","docstring"),c(po,"id","transformers.CLIPTokenizerFast"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.CLIPTokenizerFast"),c(vt,"class","relative group"),c(Ca,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ie,"class","docstring"),c(ho,"class","docstring"),c(W,"class","docstring"),c(mo,"id","transformers.CLIPFeatureExtractor"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.CLIPFeatureExtractor"),c(Pt,"class","relative group"),c(ba,"href","/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(fo,"class","docstring"),c(uo,"class","docstring"),c(B,"class","docstring"),c(go,"id","transformers.CLIPProcessor"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.CLIPProcessor"),c(It,"class","relative group"),c(La,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPProcessor"),c(wa,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c($a,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTokenizerFast"),c(ka,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPProcessor.decode"),c(xa,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),c(_o,"class","docstring"),c(Ea,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),c(vo,"class","docstring"),c(U,"class","docstring"),c(Po,"id","transformers.CLIPModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.CLIPModel"),c(Ct,"class","relative group"),c(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rn,"rel","nofollow"),c(Ma,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPModel"),c(G,"class","docstring"),c(za,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPModel"),c(J,"class","docstring"),c(ja,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPModel"),c(X,"class","docstring"),c(R,"class","docstring"),c(yo,"id","transformers.CLIPTextModel"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.CLIPTextModel"),c(wt,"class","relative group"),c(Fa,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTextModel"),c(Z,"class","docstring"),c($t,"class","docstring"),c(Lo,"id","transformers.CLIPVisionModel"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.CLIPVisionModel"),c(xt,"class","relative group"),c(qa,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPVisionModel"),c(Q,"class","docstring"),c(Et,"class","docstring"),c($o,"id","transformers.TFCLIPModel"),c($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($o,"href","#transformers.TFCLIPModel"),c(zt,"class","relative group"),c(Da,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(cs,"rel","nofollow"),c(Oa,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.TFCLIPModel"),c(Y,"class","docstring"),c(Aa,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.TFCLIPModel"),c(ee,"class","docstring"),c(Na,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.TFCLIPModel"),c(te,"class","docstring"),c(q,"class","docstring"),c(zo,"id","transformers.TFCLIPTextModel"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.TFCLIPTextModel"),c(Dt,"class","relative group"),c(Va,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.TFCLIPTextModel"),c(oe,"class","docstring"),c(Ot,"class","docstring"),c(Fo,"id","transformers.TFCLIPVisionModel"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFCLIPVisionModel"),c(Nt,"class","relative group"),c(Sa,"href","/docs/transformers/v4.18.0/en/model_doc/clip#transformers.TFCLIPVisionModel"),c(ne,"class","docstring"),c(Vt,"class","docstring"),c(Do,"id","transformers.FlaxCLIPModel"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.FlaxCLIPModel"),c(Wt,"class","relative group"),c(Wa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xs,"rel","nofollow"),c(Es,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Es,"rel","nofollow"),c(Ms,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ms,"rel","nofollow"),c(zs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(zs,"rel","nofollow"),c(js,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(js,"rel","nofollow"),c(se,"class","docstring"),c(Ne,"class","docstring"),c(Ve,"class","docstring"),c(M,"class","docstring"),c(Ao,"id","transformers.FlaxCLIPTextModel"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.FlaxCLIPTextModel"),c(Ut,"class","relative group"),c(ae,"class","docstring"),c(Rt,"class","docstring"),c(Vo,"id","transformers.FlaxCLIPVisionModel"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.FlaxCLIPVisionModel"),c(Kt,"class","relative group"),c(re,"class","docstring"),c(Gt,"class","docstring")},m(t,h){e(document.head,p),m(t,L,h),m(t,I,h),e(I,y),e(y,b),_(C,b,null),e(I,f),e(I,w),e(w,Ho),m(t,rt,h),m(t,z,h),e(z,ue),e(ue,Ce),_(ye,Ce,null),e(z,Ko),e(z,be),e(be,Go),m(t,Xt,h),m(t,pe,h),e(pe,ze),e(pe,Le),e(Le,Zt),e(pe,H),m(t,he,h),m(t,je,h),e(je,it),m(t,Qt,h),m(t,Fe,h),e(Fe,we),e(we,Jo),m(t,Yt,h),m(t,O,h),e(O,ge),e(ge,$e),_(ke,$e,null),e(O,Xo),e(O,xe),e(xe,Zo),m(t,eo,h),m(t,me,h),e(me,Qo),m(t,qe,h),m(t,_e,h),e(_e,k),e(_e,j),e(j,to),e(_e,Qs),m(t,Yo,h),m(t,E,h),e(E,Ys),e(E,lt),e(lt,ea),e(E,De),e(E,ve),e(ve,ta),e(E,oa),e(E,Pe),e(Pe,na),e(E,sa),e(E,Oe),e(Oe,aa),e(E,xd),e(E,ra),e(ra,Ed),e(E,Md),e(E,ia),e(ia,zd),e(E,jd),m(t,nl,h),_(en,t,h),m(t,sl,h),m(t,Ae,h),e(Ae,Fd),e(Ae,tn),e(tn,qd),e(Ae,Dd),e(Ae,on),e(on,Od),e(Ae,Ad),m(t,al,h),m(t,dt,h),e(dt,oo),e(oo,pr),_(nn,pr,null),e(dt,Nd),e(dt,hr),e(hr,Vd),m(t,rl,h),m(t,fe,h),_(sn,fe,null),e(fe,Sd),e(fe,no),e(no,la),e(la,Wd),e(no,Bd),e(no,da),e(da,Ud),e(no,Rd),e(fe,Hd),e(fe,ct),e(ct,Kd),e(ct,ca),e(ca,Gd),e(ct,Jd),e(ct,pa),e(pa,Xd),e(ct,Zd),e(fe,Qd),e(fe,so),_(an,so,null),e(so,Yd),e(so,rn),e(rn,ec),e(rn,ha),e(ha,tc),e(rn,oc),m(t,il,h),m(t,pt,h),e(pt,ao),e(ao,mr),_(ln,mr,null),e(pt,nc),e(pt,fr),e(fr,sc),m(t,ll,h),m(t,V,h),_(dn,V,null),e(V,ac),e(V,ht),e(ht,rc),e(ht,ma),e(ma,ic),e(ht,lc),e(ht,cn),e(cn,dc),e(ht,cc),e(V,pc),e(V,mt),e(mt,hc),e(mt,fa),e(fa,mc),e(mt,fc),e(mt,ua),e(ua,uc),e(mt,gc),e(V,_c),e(V,ur),e(ur,vc),e(V,Pc),_(pn,V,null),m(t,dl,h),m(t,ft,h),e(ft,ro),e(ro,gr),_(hn,gr,null),e(ft,Tc),e(ft,_r),e(_r,Ic),m(t,cl,h),m(t,S,h),_(mn,S,null),e(S,Cc),e(S,ut),e(ut,yc),e(ut,ga),e(ga,bc),e(ut,Lc),e(ut,fn),e(fn,wc),e(ut,$c),e(S,kc),e(S,gt),e(gt,xc),e(gt,_a),e(_a,Ec),e(gt,Mc),e(gt,va),e(va,zc),e(gt,jc),e(S,Fc),e(S,vr),e(vr,qc),e(S,Dc),_(un,S,null),m(t,pl,h),m(t,_t,h),e(_t,io),e(io,Pr),_(gn,Pr,null),e(_t,Oc),e(_t,Tr),e(Tr,Ac),m(t,hl,h),m(t,F,h),_(_n,F,null),e(F,Nc),e(F,Ir),e(Ir,Vc),e(F,Sc),e(F,vn),e(vn,Wc),e(vn,Pa),e(Pa,Bc),e(vn,Uc),e(F,Rc),e(F,Te),_(Pn,Te,null),e(Te,Hc),e(Te,Cr),e(Cr,Kc),e(Te,Gc),e(Te,yr),e(yr,Ta),e(Ta,Jc),e(Ta,br),e(br,Xc),e(Te,Zc),e(Te,Lr),e(Lr,Qc),e(F,Yc),e(F,lo),_(Tn,lo,null),e(lo,ep),e(lo,In),e(In,tp),e(In,wr),e(wr,op),e(In,np),e(F,sp),e(F,co),_(Cn,co,null),e(co,ap),e(co,$r),e($r,rp),e(F,ip),e(F,Ia),_(yn,Ia,null),m(t,ml,h),m(t,vt,h),e(vt,po),e(po,kr),_(bn,kr,null),e(vt,lp),e(vt,xr),e(xr,dp),m(t,fl,h),m(t,W,h),_(Ln,W,null),e(W,cp),e(W,wn),e(wn,pp),e(wn,Er),e(Er,hp),e(wn,mp),e(W,fp),e(W,$n),e($n,up),e($n,Ca),e(Ca,gp),e($n,_p),e(W,vp),e(W,Ie),_(kn,Ie,null),e(Ie,Pp),e(Ie,Mr),e(Mr,Tp),e(Ie,Ip),e(Ie,zr),e(zr,ya),e(ya,Cp),e(ya,jr),e(jr,yp),e(Ie,bp),e(Ie,Fr),e(Fr,Lp),e(W,wp),e(W,ho),_(xn,ho,null),e(ho,$p),e(ho,qr),e(qr,kp),m(t,ul,h),m(t,Pt,h),e(Pt,mo),e(mo,Dr),_(En,Dr,null),e(Pt,xp),e(Pt,Or),e(Or,Ep),m(t,gl,h),m(t,B,h),_(Mn,B,null),e(B,Mp),e(B,Ar),e(Ar,zp),e(B,jp),e(B,zn),e(zn,Fp),e(zn,ba),e(ba,qp),e(zn,Dp),e(B,Op),e(B,fo),_(jn,fo,null),e(fo,Ap),e(fo,Fn),e(Fn,Np),e(Fn,Nr),e(Nr,Vp),e(Fn,Sp),e(B,Wp),e(B,uo),_(qn,uo,null),e(uo,Bp),e(uo,Tt),e(Tt,Up),e(Tt,Vr),e(Vr,Rp),e(Tt,Hp),e(Tt,Sr),e(Sr,Kp),e(Tt,Gp),m(t,_l,h),m(t,It,h),e(It,go),e(go,Wr),_(Dn,Wr,null),e(It,Jp),e(It,Br),e(Br,Xp),m(t,vl,h),m(t,U,h),_(On,U,null),e(U,Zp),e(U,Ur),e(Ur,Qp),e(U,Yp),e(U,K),e(K,La),e(La,eh),e(K,th),e(K,wa),e(wa,oh),e(K,nh),e(K,$a),e($a,sh),e(K,ah),e(K,Rr),e(Rr,rh),e(K,ih),e(K,ka),e(ka,lh),e(K,dh),e(U,ch),e(U,_o),_(An,_o,null),e(_o,ph),e(_o,Nn),e(Nn,hh),e(Nn,xa),e(xa,mh),e(Nn,fh),e(U,uh),e(U,vo),_(Vn,vo,null),e(vo,gh),e(vo,Sn),e(Sn,_h),e(Sn,Ea),e(Ea,vh),e(Sn,Ph),m(t,Pl,h),m(t,Ct,h),e(Ct,Po),e(Po,Hr),_(Wn,Hr,null),e(Ct,Th),e(Ct,Kr),e(Kr,Ih),m(t,Tl,h),m(t,R,h),_(Bn,R,null),e(R,Ch),e(R,Un),e(Un,yh),e(Un,Rn),e(Rn,bh),e(Un,Lh),e(R,wh),e(R,G),_(Hn,G,null),e(G,$h),e(G,yt),e(yt,kh),e(yt,Ma),e(Ma,xh),e(yt,Eh),e(yt,Gr),e(Gr,Mh),e(yt,zh),e(G,jh),_(To,G,null),e(G,Fh),e(G,Jr),e(Jr,qh),e(G,Dh),_(Kn,G,null),e(R,Oh),e(R,J),_(Gn,J,null),e(J,Ah),e(J,bt),e(bt,Nh),e(bt,za),e(za,Vh),e(bt,Sh),e(bt,Xr),e(Xr,Wh),e(bt,Bh),e(J,Uh),_(Io,J,null),e(J,Rh),e(J,Zr),e(Zr,Hh),e(J,Kh),_(Jn,J,null),e(R,Gh),e(R,X),_(Xn,X,null),e(X,Jh),e(X,Lt),e(Lt,Xh),e(Lt,ja),e(ja,Zh),e(Lt,Qh),e(Lt,Qr),e(Qr,Yh),e(Lt,em),e(X,tm),_(Co,X,null),e(X,om),e(X,Yr),e(Yr,nm),e(X,sm),_(Zn,X,null),m(t,Il,h),m(t,wt,h),e(wt,yo),e(yo,ei),_(Qn,ei,null),e(wt,am),e(wt,ti),e(ti,rm),m(t,Cl,h),m(t,$t,h),_(Yn,$t,null),e($t,im),e($t,Z),_(es,Z,null),e(Z,lm),e(Z,kt),e(kt,dm),e(kt,Fa),e(Fa,cm),e(kt,pm),e(kt,oi),e(oi,hm),e(kt,mm),e(Z,fm),_(bo,Z,null),e(Z,um),e(Z,ni),e(ni,gm),e(Z,_m),_(ts,Z,null),m(t,yl,h),m(t,xt,h),e(xt,Lo),e(Lo,si),_(os,si,null),e(xt,vm),e(xt,ai),e(ai,Pm),m(t,bl,h),m(t,Et,h),_(ns,Et,null),e(Et,Tm),e(Et,Q),_(ss,Q,null),e(Q,Im),e(Q,Mt),e(Mt,Cm),e(Mt,qa),e(qa,ym),e(Mt,bm),e(Mt,ri),e(ri,Lm),e(Mt,wm),e(Q,$m),_(wo,Q,null),e(Q,km),e(Q,ii),e(ii,xm),e(Q,Em),_(as,Q,null),m(t,Ll,h),m(t,zt,h),e(zt,$o),e($o,li),_(rs,li,null),e(zt,Mm),e(zt,di),e(di,zm),m(t,wl,h),m(t,q,h),_(is,q,null),e(q,jm),e(q,ls),e(ls,Fm),e(ls,Da),e(Da,qm),e(ls,Dm),e(q,Om),e(q,ds),e(ds,Am),e(ds,cs),e(cs,Nm),e(ds,Vm),e(q,Sm),_(ko,q,null),e(q,Wm),e(q,Y),_(ps,Y,null),e(Y,Bm),e(Y,jt),e(jt,Um),e(jt,Oa),e(Oa,Rm),e(jt,Hm),e(jt,ci),e(ci,Km),e(jt,Gm),e(Y,Jm),_(xo,Y,null),e(Y,Xm),e(Y,pi),e(pi,Zm),e(Y,Qm),_(hs,Y,null),e(q,Ym),e(q,ee),_(ms,ee,null),e(ee,ef),e(ee,Ft),e(Ft,tf),e(Ft,Aa),e(Aa,of),e(Ft,nf),e(Ft,hi),e(hi,sf),e(Ft,af),e(ee,rf),_(Eo,ee,null),e(ee,lf),e(ee,mi),e(mi,df),e(ee,cf),_(fs,ee,null),e(q,pf),e(q,te),_(us,te,null),e(te,hf),e(te,qt),e(qt,mf),e(qt,Na),e(Na,ff),e(qt,uf),e(qt,fi),e(fi,gf),e(qt,_f),e(te,vf),_(Mo,te,null),e(te,Pf),e(te,ui),e(ui,Tf),e(te,If),_(gs,te,null),m(t,$l,h),m(t,Dt,h),e(Dt,zo),e(zo,gi),_(_s,gi,null),e(Dt,Cf),e(Dt,_i),e(_i,yf),m(t,kl,h),m(t,Ot,h),_(vs,Ot,null),e(Ot,bf),e(Ot,oe),_(Ps,oe,null),e(oe,Lf),e(oe,At),e(At,wf),e(At,Va),e(Va,$f),e(At,kf),e(At,vi),e(vi,xf),e(At,Ef),e(oe,Mf),_(jo,oe,null),e(oe,zf),e(oe,Pi),e(Pi,jf),e(oe,Ff),_(Ts,oe,null),m(t,xl,h),m(t,Nt,h),e(Nt,Fo),e(Fo,Ti),_(Is,Ti,null),e(Nt,qf),e(Nt,Ii),e(Ii,Df),m(t,El,h),m(t,Vt,h),_(Cs,Vt,null),e(Vt,Of),e(Vt,ne),_(ys,ne,null),e(ne,Af),e(ne,St),e(St,Nf),e(St,Sa),e(Sa,Vf),e(St,Sf),e(St,Ci),e(Ci,Wf),e(St,Bf),e(ne,Uf),_(qo,ne,null),e(ne,Rf),e(ne,yi),e(yi,Hf),e(ne,Kf),_(bs,ne,null),m(t,Ml,h),m(t,Wt,h),e(Wt,Do),e(Do,bi),_(Ls,bi,null),e(Wt,Gf),e(Wt,Li),e(Li,Jf),m(t,zl,h),m(t,M,h),_(ws,M,null),e(M,Xf),e(M,$s),e($s,Zf),e($s,Wa),e(Wa,Qf),e($s,Yf),e(M,eu),e(M,ks),e(ks,tu),e(ks,xs),e(xs,ou),e(ks,nu),e(M,su),e(M,wi),e(wi,au),e(M,ru),e(M,Ee),e(Ee,$i),e($i,Es),e(Es,iu),e(Ee,lu),e(Ee,ki),e(ki,Ms),e(Ms,du),e(Ee,cu),e(Ee,xi),e(xi,zs),e(zs,pu),e(Ee,hu),e(Ee,Ei),e(Ei,js),e(js,mu),e(M,fu),e(M,se),_(Fs,se,null),e(se,uu),e(se,Bt),e(Bt,gu),e(Bt,Mi),e(Mi,_u),e(Bt,vu),e(Bt,zi),e(zi,Pu),e(Bt,Tu),e(se,Iu),_(Oo,se,null),e(se,Cu),e(se,ji),e(ji,yu),e(se,bu),_(qs,se,null),e(M,Lu),e(M,Ne),_(Ds,Ne,null),e(Ne,wu),e(Ne,Fi),e(Fi,$u),e(Ne,ku),_(Os,Ne,null),e(M,xu),e(M,Ve),_(As,Ve,null),e(Ve,Eu),e(Ve,qi),e(qi,Mu),e(Ve,zu),_(Ns,Ve,null),m(t,jl,h),m(t,Ut,h),e(Ut,Ao),e(Ao,Di),_(Vs,Di,null),e(Ut,ju),e(Ut,Oi),e(Oi,Fu),m(t,Fl,h),m(t,Rt,h),_(Ss,Rt,null),e(Rt,qu),e(Rt,ae),_(Ws,ae,null),e(ae,Du),e(ae,Ht),e(Ht,Ou),e(Ht,Ai),e(Ai,Au),e(Ht,Nu),e(Ht,Ni),e(Ni,Vu),e(Ht,Su),e(ae,Wu),_(No,ae,null),e(ae,Bu),e(ae,Vi),e(Vi,Uu),e(ae,Ru),_(Bs,ae,null),m(t,ql,h),m(t,Kt,h),e(Kt,Vo),e(Vo,Si),_(Us,Si,null),e(Kt,Hu),e(Kt,Wi),e(Wi,Ku),m(t,Dl,h),m(t,Gt,h),_(Rs,Gt,null),e(Gt,Gu),e(Gt,re),_(Hs,re,null),e(re,Ju),e(re,Jt),e(Jt,Xu),e(Jt,Bi),e(Bi,Zu),e(Jt,Qu),e(Jt,Ui),e(Ui,Yu),e(Jt,eg),e(re,tg),_(So,re,null),e(re,og),e(re,Ri),e(Ri,ng),e(re,sg),_(Ks,re,null),Ol=!0},p(t,[h]){const Gs={};h&2&&(Gs.$$scope={dirty:h,ctx:t}),To.$set(Gs);const Hi={};h&2&&(Hi.$$scope={dirty:h,ctx:t}),Io.$set(Hi);const Ki={};h&2&&(Ki.$$scope={dirty:h,ctx:t}),Co.$set(Ki);const Gi={};h&2&&(Gi.$$scope={dirty:h,ctx:t}),bo.$set(Gi);const Js={};h&2&&(Js.$$scope={dirty:h,ctx:t}),wo.$set(Js);const Ji={};h&2&&(Ji.$$scope={dirty:h,ctx:t}),ko.$set(Ji);const Xi={};h&2&&(Xi.$$scope={dirty:h,ctx:t}),xo.$set(Xi);const Zi={};h&2&&(Zi.$$scope={dirty:h,ctx:t}),Eo.$set(Zi);const Xs={};h&2&&(Xs.$$scope={dirty:h,ctx:t}),Mo.$set(Xs);const Qi={};h&2&&(Qi.$$scope={dirty:h,ctx:t}),jo.$set(Qi);const Yi={};h&2&&(Yi.$$scope={dirty:h,ctx:t}),qo.$set(Yi);const el={};h&2&&(el.$$scope={dirty:h,ctx:t}),Oo.$set(el);const tl={};h&2&&(tl.$$scope={dirty:h,ctx:t}),No.$set(tl);const Zs={};h&2&&(Zs.$$scope={dirty:h,ctx:t}),So.$set(Zs)},i(t){Ol||(v(C.$$.fragment,t),v(ye.$$.fragment,t),v(ke.$$.fragment,t),v(en.$$.fragment,t),v(nn.$$.fragment,t),v(sn.$$.fragment,t),v(an.$$.fragment,t),v(ln.$$.fragment,t),v(dn.$$.fragment,t),v(pn.$$.fragment,t),v(hn.$$.fragment,t),v(mn.$$.fragment,t),v(un.$$.fragment,t),v(gn.$$.fragment,t),v(_n.$$.fragment,t),v(Pn.$$.fragment,t),v(Tn.$$.fragment,t),v(Cn.$$.fragment,t),v(yn.$$.fragment,t),v(bn.$$.fragment,t),v(Ln.$$.fragment,t),v(kn.$$.fragment,t),v(xn.$$.fragment,t),v(En.$$.fragment,t),v(Mn.$$.fragment,t),v(jn.$$.fragment,t),v(qn.$$.fragment,t),v(Dn.$$.fragment,t),v(On.$$.fragment,t),v(An.$$.fragment,t),v(Vn.$$.fragment,t),v(Wn.$$.fragment,t),v(Bn.$$.fragment,t),v(Hn.$$.fragment,t),v(To.$$.fragment,t),v(Kn.$$.fragment,t),v(Gn.$$.fragment,t),v(Io.$$.fragment,t),v(Jn.$$.fragment,t),v(Xn.$$.fragment,t),v(Co.$$.fragment,t),v(Zn.$$.fragment,t),v(Qn.$$.fragment,t),v(Yn.$$.fragment,t),v(es.$$.fragment,t),v(bo.$$.fragment,t),v(ts.$$.fragment,t),v(os.$$.fragment,t),v(ns.$$.fragment,t),v(ss.$$.fragment,t),v(wo.$$.fragment,t),v(as.$$.fragment,t),v(rs.$$.fragment,t),v(is.$$.fragment,t),v(ko.$$.fragment,t),v(ps.$$.fragment,t),v(xo.$$.fragment,t),v(hs.$$.fragment,t),v(ms.$$.fragment,t),v(Eo.$$.fragment,t),v(fs.$$.fragment,t),v(us.$$.fragment,t),v(Mo.$$.fragment,t),v(gs.$$.fragment,t),v(_s.$$.fragment,t),v(vs.$$.fragment,t),v(Ps.$$.fragment,t),v(jo.$$.fragment,t),v(Ts.$$.fragment,t),v(Is.$$.fragment,t),v(Cs.$$.fragment,t),v(ys.$$.fragment,t),v(qo.$$.fragment,t),v(bs.$$.fragment,t),v(Ls.$$.fragment,t),v(ws.$$.fragment,t),v(Fs.$$.fragment,t),v(Oo.$$.fragment,t),v(qs.$$.fragment,t),v(Ds.$$.fragment,t),v(Os.$$.fragment,t),v(As.$$.fragment,t),v(Ns.$$.fragment,t),v(Vs.$$.fragment,t),v(Ss.$$.fragment,t),v(Ws.$$.fragment,t),v(No.$$.fragment,t),v(Bs.$$.fragment,t),v(Us.$$.fragment,t),v(Rs.$$.fragment,t),v(Hs.$$.fragment,t),v(So.$$.fragment,t),v(Ks.$$.fragment,t),Ol=!0)},o(t){P(C.$$.fragment,t),P(ye.$$.fragment,t),P(ke.$$.fragment,t),P(en.$$.fragment,t),P(nn.$$.fragment,t),P(sn.$$.fragment,t),P(an.$$.fragment,t),P(ln.$$.fragment,t),P(dn.$$.fragment,t),P(pn.$$.fragment,t),P(hn.$$.fragment,t),P(mn.$$.fragment,t),P(un.$$.fragment,t),P(gn.$$.fragment,t),P(_n.$$.fragment,t),P(Pn.$$.fragment,t),P(Tn.$$.fragment,t),P(Cn.$$.fragment,t),P(yn.$$.fragment,t),P(bn.$$.fragment,t),P(Ln.$$.fragment,t),P(kn.$$.fragment,t),P(xn.$$.fragment,t),P(En.$$.fragment,t),P(Mn.$$.fragment,t),P(jn.$$.fragment,t),P(qn.$$.fragment,t),P(Dn.$$.fragment,t),P(On.$$.fragment,t),P(An.$$.fragment,t),P(Vn.$$.fragment,t),P(Wn.$$.fragment,t),P(Bn.$$.fragment,t),P(Hn.$$.fragment,t),P(To.$$.fragment,t),P(Kn.$$.fragment,t),P(Gn.$$.fragment,t),P(Io.$$.fragment,t),P(Jn.$$.fragment,t),P(Xn.$$.fragment,t),P(Co.$$.fragment,t),P(Zn.$$.fragment,t),P(Qn.$$.fragment,t),P(Yn.$$.fragment,t),P(es.$$.fragment,t),P(bo.$$.fragment,t),P(ts.$$.fragment,t),P(os.$$.fragment,t),P(ns.$$.fragment,t),P(ss.$$.fragment,t),P(wo.$$.fragment,t),P(as.$$.fragment,t),P(rs.$$.fragment,t),P(is.$$.fragment,t),P(ko.$$.fragment,t),P(ps.$$.fragment,t),P(xo.$$.fragment,t),P(hs.$$.fragment,t),P(ms.$$.fragment,t),P(Eo.$$.fragment,t),P(fs.$$.fragment,t),P(us.$$.fragment,t),P(Mo.$$.fragment,t),P(gs.$$.fragment,t),P(_s.$$.fragment,t),P(vs.$$.fragment,t),P(Ps.$$.fragment,t),P(jo.$$.fragment,t),P(Ts.$$.fragment,t),P(Is.$$.fragment,t),P(Cs.$$.fragment,t),P(ys.$$.fragment,t),P(qo.$$.fragment,t),P(bs.$$.fragment,t),P(Ls.$$.fragment,t),P(ws.$$.fragment,t),P(Fs.$$.fragment,t),P(Oo.$$.fragment,t),P(qs.$$.fragment,t),P(Ds.$$.fragment,t),P(Os.$$.fragment,t),P(As.$$.fragment,t),P(Ns.$$.fragment,t),P(Vs.$$.fragment,t),P(Ss.$$.fragment,t),P(Ws.$$.fragment,t),P(No.$$.fragment,t),P(Bs.$$.fragment,t),P(Us.$$.fragment,t),P(Rs.$$.fragment,t),P(Hs.$$.fragment,t),P(So.$$.fragment,t),P(Ks.$$.fragment,t),Ol=!1},d(t){o(p),t&&o(L),t&&o(I),T(C),t&&o(rt),t&&o(z),T(ye),t&&o(Xt),t&&o(pe),t&&o(he),t&&o(je),t&&o(Qt),t&&o(Fe),t&&o(Yt),t&&o(O),T(ke),t&&o(eo),t&&o(me),t&&o(qe),t&&o(_e),t&&o(Yo),t&&o(E),t&&o(nl),T(en,t),t&&o(sl),t&&o(Ae),t&&o(al),t&&o(dt),T(nn),t&&o(rl),t&&o(fe),T(sn),T(an),t&&o(il),t&&o(pt),T(ln),t&&o(ll),t&&o(V),T(dn),T(pn),t&&o(dl),t&&o(ft),T(hn),t&&o(cl),t&&o(S),T(mn),T(un),t&&o(pl),t&&o(_t),T(gn),t&&o(hl),t&&o(F),T(_n),T(Pn),T(Tn),T(Cn),T(yn),t&&o(ml),t&&o(vt),T(bn),t&&o(fl),t&&o(W),T(Ln),T(kn),T(xn),t&&o(ul),t&&o(Pt),T(En),t&&o(gl),t&&o(B),T(Mn),T(jn),T(qn),t&&o(_l),t&&o(It),T(Dn),t&&o(vl),t&&o(U),T(On),T(An),T(Vn),t&&o(Pl),t&&o(Ct),T(Wn),t&&o(Tl),t&&o(R),T(Bn),T(Hn),T(To),T(Kn),T(Gn),T(Io),T(Jn),T(Xn),T(Co),T(Zn),t&&o(Il),t&&o(wt),T(Qn),t&&o(Cl),t&&o($t),T(Yn),T(es),T(bo),T(ts),t&&o(yl),t&&o(xt),T(os),t&&o(bl),t&&o(Et),T(ns),T(ss),T(wo),T(as),t&&o(Ll),t&&o(zt),T(rs),t&&o(wl),t&&o(q),T(is),T(ko),T(ps),T(xo),T(hs),T(ms),T(Eo),T(fs),T(us),T(Mo),T(gs),t&&o($l),t&&o(Dt),T(_s),t&&o(kl),t&&o(Ot),T(vs),T(Ps),T(jo),T(Ts),t&&o(xl),t&&o(Nt),T(Is),t&&o(El),t&&o(Vt),T(Cs),T(ys),T(qo),T(bs),t&&o(Ml),t&&o(Wt),T(Ls),t&&o(zl),t&&o(M),T(ws),T(Fs),T(Oo),T(qs),T(Ds),T(Os),T(As),T(Ns),t&&o(jl),t&&o(Ut),T(Vs),t&&o(Fl),t&&o(Rt),T(Ss),T(Ws),T(No),T(Bs),t&&o(ql),t&&o(Kt),T(Us),t&&o(Dl),t&&o(Gt),T(Rs),T(Hs),T(So),T(Ks)}}}const LP={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function wP(x){return dP(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zP extends aP{constructor(p){super();rP(this,p,wP,bP,iP,{})}}export{zP as default,LP as metadata};
