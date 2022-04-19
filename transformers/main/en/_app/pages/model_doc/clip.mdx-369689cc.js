import{S as rb,i as ab,s as ib,e as n,k as l,w as u,t as a,M as lb,c as s,d as o,m as d,a as r,x as g,h as i,b as c,F as e,g as h,y as _,q as v,o as b,B as P,v as db}from"../../chunks/vendor-6b77c823.js";import{T as ce}from"../../chunks/Tip-39098574.js";import{D as w}from"../../chunks/Docstring-1088f2fb.js";import{C as A}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as D}from"../../chunks/IconCopyLink-7a11ce68.js";function cb(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function pb(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function mb(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function hb(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function fb(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function ub(k){let p,L,y,I,C,T,f,x,Ho,at,z,ue,Te,Ie,Ko,Ce,Go,Xt,pe,ze,Le,Zt,H,me,je,it,Qt,Fe,xe,Jo,Yt,O,ge,we,$e,Xo,ke,Zo,eo,he,Qo,qe,_e;return{c(){p=n("p"),L=a("TF 2.0 models accepts two formats as inputs:"),y=l(),I=n("ul"),C=n("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),x=n("li"),Ho=a("having all inputs as a list, tuple or dict in the first positional arguments."),at=l(),z=n("p"),ue=a("This second option is useful when using "),Te=n("code"),Ie=a("tf.keras.Model.fit"),Ko=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Ce=n("code"),Go=a("model(inputs)"),Xt=a("."),pe=l(),ze=n("p"),Le=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Zt=l(),H=n("ul"),me=n("li"),je=a("a single Tensor with "),it=n("code"),Qt=a("input_ids"),Fe=a(" only and nothing else: "),xe=n("code"),Jo=a("model(input_ids)"),Yt=l(),O=n("li"),ge=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=n("code"),$e=a("model([input_ids, attention_mask])"),Xo=a(" or "),ke=n("code"),Zo=a("model([input_ids, attention_mask, token_type_ids])"),eo=l(),he=n("li"),Qo=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=n("code"),_e=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l($){p=s($,"P",{});var j=r(p);L=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(o),y=d($),I=s($,"UL",{});var to=r(I);C=s(to,"LI",{});var Qs=r(C);T=i(Qs,"having all inputs as keyword arguments (like PyTorch models), or"),Qs.forEach(o),f=d(to),x=s(to,"LI",{});var Yo=r(x);Ho=i(Yo,"having all inputs as a list, tuple or dict in the first positional arguments."),Yo.forEach(o),to.forEach(o),at=d($),z=s($,"P",{});var E=r(z);ue=i(E,"This second option is useful when using "),Te=s(E,"CODE",{});var Ys=r(Te);Ie=i(Ys,"tf.keras.Model.fit"),Ys.forEach(o),Ko=i(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),Ce=s(E,"CODE",{});var lt=r(Ce);Go=i(lt,"model(inputs)"),lt.forEach(o),Xt=i(E,"."),E.forEach(o),pe=d($),ze=s($,"P",{});var er=r(ze);Le=i(er,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),er.forEach(o),Zt=d($),H=s($,"UL",{});var De=r(H);me=s(De,"LI",{});var ve=r(me);je=i(ve,"a single Tensor with "),it=s(ve,"CODE",{});var tr=r(it);Qt=i(tr,"input_ids"),tr.forEach(o),Fe=i(ve," only and nothing else: "),xe=s(ve,"CODE",{});var or=r(xe);Jo=i(or,"model(input_ids)"),or.forEach(o),ve.forEach(o),Yt=d(De),O=s(De,"LI",{});var be=r(O);ge=i(be,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=s(be,"CODE",{});var nr=r(we);$e=i(nr,"model([input_ids, attention_mask])"),nr.forEach(o),Xo=i(be," or "),ke=s(be,"CODE",{});var sr=r(ke);Zo=i(sr,"model([input_ids, attention_mask, token_type_ids])"),sr.forEach(o),be.forEach(o),eo=d(De),he=s(De,"LI",{});var Oe=r(he);Qo=i(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=s(Oe,"CODE",{});var rr=r(qe);_e=i(rr,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),rr.forEach(o),Oe.forEach(o),De.forEach(o)},m($,j){h($,p,j),e(p,L),h($,y,j),h($,I,j),e(I,C),e(C,T),e(I,f),e(I,x),e(x,Ho),h($,at,j),h($,z,j),e(z,ue),e(z,Te),e(Te,Ie),e(z,Ko),e(z,Ce),e(Ce,Go),e(z,Xt),h($,pe,j),h($,ze,j),e(ze,Le),h($,Zt,j),h($,H,j),e(H,me),e(me,je),e(me,it),e(it,Qt),e(me,Fe),e(me,xe),e(xe,Jo),e(H,Yt),e(H,O),e(O,ge),e(O,we),e(we,$e),e(O,Xo),e(O,ke),e(ke,Zo),e(H,eo),e(H,he),e(he,Qo),e(he,qe),e(qe,_e)},d($){$&&o(p),$&&o(y),$&&o(I),$&&o(at),$&&o(z),$&&o(pe),$&&o(ze),$&&o(Zt),$&&o(H)}}}function gb(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function _b(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function vb(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function bb(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function Pb(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function yb(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function Tb(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function Ib(k){let p,L,y,I,C;return{c(){p=n("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),I=a("Module"),C=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=s(T,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=s(f,"CODE",{});var x=r(y);I=i(x,"Module"),x.forEach(o),C=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(T,f){h(T,p,f),e(p,L),e(p,y),e(y,I),e(p,C)},d(T){T&&o(p)}}}function Cb(k){let p,L,y,I,C,T,f,x,Ho,at,z,ue,Te,Ie,Ko,Ce,Go,Xt,pe,ze,Le,Zt,H,me,je,it,Qt,Fe,xe,Jo,Yt,O,ge,we,$e,Xo,ke,Zo,eo,he,Qo,qe,_e,$,j,to,Qs,Yo,E,Ys,lt,er,De,ve,tr,or,be,nr,sr,Oe,rr,kd,ar,Ed,Md,ir,zd,jd,nl,en,sl,Ae,Fd,tn,qd,Dd,on,Od,Ad,rl,dt,oo,pa,nn,Nd,ma,Vd,al,fe,sn,Sd,no,lr,Wd,Bd,dr,Ud,Rd,Hd,ct,Kd,cr,Gd,Jd,pr,Xd,Zd,Qd,so,rn,Yd,an,ec,mr,tc,oc,il,pt,ro,ha,ln,nc,fa,sc,ll,V,dn,rc,mt,ac,hr,ic,lc,cn,dc,cc,pc,ht,mc,fr,hc,fc,ur,uc,gc,_c,ua,vc,bc,pn,dl,ft,ao,ga,mn,Pc,_a,yc,cl,S,hn,Tc,ut,Ic,gr,Cc,Lc,fn,xc,wc,$c,gt,kc,_r,Ec,Mc,vr,zc,jc,Fc,va,qc,Dc,un,pl,_t,io,ba,gn,Oc,Pa,Ac,ml,F,_n,Nc,ya,Vc,Sc,vn,Wc,br,Bc,Uc,Rc,Pe,bn,Hc,Ta,Kc,Gc,Ia,Pr,Jc,Ca,Xc,Zc,La,Qc,Yc,lo,Pn,ep,yn,tp,xa,op,np,sp,co,Tn,rp,wa,ap,ip,yr,In,hl,vt,po,$a,Cn,lp,ka,dp,fl,W,Ln,cp,xn,pp,Ea,mp,hp,fp,wn,up,Tr,gp,_p,vp,ye,$n,bp,Ma,Pp,yp,za,Ir,Tp,ja,Ip,Cp,Fa,Lp,xp,mo,kn,wp,qa,$p,ul,bt,ho,Da,En,kp,Oa,Ep,gl,B,Mn,Mp,Aa,zp,jp,zn,Fp,Cr,qp,Dp,Op,fo,jn,Ap,Fn,Np,Na,Vp,Sp,Wp,uo,qn,Bp,Pt,Up,Va,Rp,Hp,Sa,Kp,Gp,_l,yt,go,Wa,Dn,Jp,Ba,Xp,vl,U,On,Zp,Ua,Qp,Yp,K,Lr,em,tm,xr,om,nm,wr,sm,rm,Ra,am,im,$r,lm,dm,cm,_o,An,pm,Nn,mm,kr,hm,fm,um,vo,Vn,gm,Sn,_m,Er,vm,bm,bl,Tt,bo,Ha,Wn,Pm,Ka,ym,Pl,R,Bn,Tm,Un,Im,Rn,Cm,Lm,xm,G,Hn,wm,It,$m,Mr,km,Em,Ga,Mm,zm,jm,Po,Fm,Ja,qm,Dm,Kn,Om,J,Gn,Am,Ct,Nm,zr,Vm,Sm,Xa,Wm,Bm,Um,yo,Rm,Za,Hm,Km,Jn,Gm,X,Xn,Jm,Lt,Xm,jr,Zm,Qm,Qa,Ym,eh,th,To,oh,Ya,nh,sh,Zn,yl,xt,Io,ei,Qn,rh,ti,ah,Tl,wt,Yn,ih,Z,es,lh,$t,dh,Fr,ch,ph,oi,mh,hh,fh,Co,uh,ni,gh,_h,ts,Il,kt,Lo,si,os,vh,ri,bh,Cl,Et,ns,Ph,Q,ss,yh,Mt,Th,qr,Ih,Ch,ai,Lh,xh,wh,xo,$h,ii,kh,Eh,rs,Ll,zt,wo,li,as,Mh,di,zh,xl,q,is,jh,ls,Fh,Dr,qh,Dh,Oh,ds,Ah,cs,Nh,Vh,Sh,$o,Wh,Y,ps,Bh,jt,Uh,Or,Rh,Hh,ci,Kh,Gh,Jh,ko,Xh,pi,Zh,Qh,ms,Yh,ee,hs,ef,Ft,tf,Ar,of,nf,mi,sf,rf,af,Eo,lf,hi,df,cf,fs,pf,te,us,mf,qt,hf,Nr,ff,uf,fi,gf,_f,vf,Mo,bf,ui,Pf,yf,gs,wl,Dt,zo,gi,_s,Tf,_i,If,$l,Ot,vs,Cf,oe,bs,Lf,At,xf,Vr,wf,$f,vi,kf,Ef,Mf,jo,zf,bi,jf,Ff,Ps,kl,Nt,Fo,Pi,ys,qf,yi,Df,El,Vt,Ts,Of,ne,Is,Af,St,Nf,Sr,Vf,Sf,Ti,Wf,Bf,Uf,qo,Rf,Ii,Hf,Kf,Cs,Ml,Wt,Do,Ci,Ls,Gf,Li,Jf,zl,M,xs,Xf,ws,Zf,Wr,Qf,Yf,eu,$s,tu,ks,ou,nu,su,xi,ru,au,Ee,wi,Es,iu,lu,$i,Ms,du,cu,ki,zs,pu,mu,Ei,js,hu,fu,se,Fs,uu,Bt,gu,Mi,_u,vu,zi,bu,Pu,yu,Oo,Tu,ji,Iu,Cu,qs,Lu,Ne,Ds,xu,Fi,wu,$u,Os,ku,Ve,As,Eu,qi,Mu,zu,Ns,jl,Ut,Ao,Di,Vs,ju,Oi,Fu,Fl,Rt,Ss,qu,re,Ws,Du,Ht,Ou,Ai,Au,Nu,Ni,Vu,Su,Wu,No,Bu,Vi,Uu,Ru,Bs,ql,Kt,Vo,Si,Us,Hu,Wi,Ku,Dl,Gt,Rs,Gu,ae,Hs,Ju,Jt,Xu,Bi,Zu,Qu,Ui,Yu,eg,tg,So,og,Ri,ng,sg,Ks,Ol;return T=new D({}),Ie=new D({}),$e=new D({}),en=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),nn=new D({}),sn=new w({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L245"}}),rn=new w({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L294",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),ln=new D({}),dn=new w({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L33"}}),pn=new A({props:{code:`from transformers import CLIPTextModel, CLIPTextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),mn=new D({}),hn=new w({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L141"}}),un=new A({props:{code:`from transformers import CLIPVisionModel, CLIPVisionConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),gn=new D({}),_n=new w({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L100"}}),bn=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L186",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pn=new w({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L213",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Tn=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L241",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),In=new w({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L336"}}),Cn=new D({}),Ln=new w({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L48"}}),$n=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L121",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),kn=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L148",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),En=new D({}),Mn=new w({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L30"}}),jn=new w({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L158"}}),qn=new w({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = <Resampling.BICUBIC: 3>"}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L184"}}),Dn=new D({}),On=new w({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L22"}}),An=new w({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L95"}}),Vn=new w({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L102"}}),Wn=new D({}),Bn=new w({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L843"}}),Hn=new w({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L972",returnDescription:`
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
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new ce({props:{$$slots:{default:[cb]},$$scope:{ctx:k}}}),Kn=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Gn=new w({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L876",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),yo=new ce({props:{$$slots:{default:[pb]},$$scope:{ctx:k}}}),Jn=new A({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),Xn=new w({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L923",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),To=new ce({props:{$$slots:{default:[mb]},$$scope:{ctx:k}}}),Zn=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Qn=new D({}),Yn=new w({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L679"}}),es=new w({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L694",returnDescription:`
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new ce({props:{$$slots:{default:[hb]},$$scope:{ctx:k}}}),ts=new A({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),os=new D({}),ns=new w({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L790"}}),ss=new w({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L803",returnDescription:`
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new ce({props:{$$slots:{default:[fb]},$$scope:{ctx:k}}}),rs=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),as=new D({}),is=new w({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1195"}}),$o=new ce({props:{$$slots:{default:[ub]},$$scope:{ctx:k}}}),ps=new w({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1323",returnDescription:`
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
<p><code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),ko=new ce({props:{$$slots:{default:[gb]},$$scope:{ctx:k}}}),ms=new A({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),hs=new w({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1241",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Eo=new ce({props:{$$slots:{default:[_b]},$$scope:{ctx:k}}}),fs=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),us=new w({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1281",returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Mo=new ce({props:{$$slots:{default:[vb]},$$scope:{ctx:k}}}),gs=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),_s=new D({}),vs=new w({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1034"}}),bs=new w({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1042",returnDescription:`
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
`}}),jo=new ce({props:{$$slots:{default:[bb]},$$scope:{ctx:k}}}),Ps=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),ys=new D({}),Ts=new w({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1097"}}),Is=new w({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1138",returnDescription:`
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
`}}),qo=new ce({props:{$$slots:{default:[Pb]},$$scope:{ctx:k}}}),Cs=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),Ls=new D({}),xs=new w({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1147"}}),Fs=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L776",returnDescription:`
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
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new ce({props:{$$slots:{default:[yb]},$$scope:{ctx:k}}}),qs=new A({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Ds=new w({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L821",returnDescription:`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),As=new w({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L888",returnDescription:`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Vs=new D({}),Ss=new w({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L968"}}),Ws=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L621",returnDescription:`
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
`}}),No=new ce({props:{$$slots:{default:[Tb]},$$scope:{ctx:k}}}),Bs=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Us=new D({}),Rs=new w({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1021"}}),Hs=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L701",returnDescription:`
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
`}}),So=new ce({props:{$$slots:{default:[Ib]},$$scope:{ctx:k}}}),Ks=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=n("meta"),L=l(),y=n("h1"),I=n("a"),C=n("span"),u(T.$$.fragment),f=l(),x=n("span"),Ho=a("CLIP"),at=l(),z=n("h2"),ue=n("a"),Te=n("span"),u(Ie.$$.fragment),Ko=l(),Ce=n("span"),Go=a("Overview"),Xt=l(),pe=n("p"),ze=a("The CLIP model was proposed in "),Le=n("a"),Zt=a("Learning Transferable Visual Models From Natural Language Supervision"),H=a(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),me=l(),je=n("p"),it=a("The abstract from the paper is the following:"),Qt=l(),Fe=n("p"),xe=n("em"),Jo=a(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Yt=l(),O=n("h2"),ge=n("a"),we=n("span"),u($e.$$.fragment),Xo=l(),ke=n("span"),Zo=a("Usage"),eo=l(),he=n("p"),Qo=a(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),qe=l(),_e=n("p"),$=a(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=n("a"),to=a("CLIPFeatureExtractor"),Qs=a(" can be used to resize (or rescale) and normalize images for the model."),Yo=l(),E=n("p"),Ys=a("The "),lt=n("a"),er=a("CLIPTokenizer"),De=a(" is used to encode the text. The "),ve=n("a"),tr=a("CLIPProcessor"),or=a(` wraps
`),be=n("a"),nr=a("CLIPFeatureExtractor"),sr=a(" and "),Oe=n("a"),rr=a("CLIPTokenizer"),kd=a(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ar=n("a"),Ed=a("CLIPProcessor"),Md=a(" and "),ir=n("a"),zd=a("CLIPModel"),jd=a("."),nl=l(),u(en.$$.fragment),sl=l(),Ae=n("p"),Fd=a("This model was contributed by "),tn=n("a"),qd=a("valhalla"),Dd=a(". The original code can be found "),on=n("a"),Od=a("here"),Ad=a("."),rl=l(),dt=n("h2"),oo=n("a"),pa=n("span"),u(nn.$$.fragment),Nd=l(),ma=n("span"),Vd=a("CLIPConfig"),al=l(),fe=n("div"),u(sn.$$.fragment),Sd=l(),no=n("p"),lr=n("a"),Wd=a("CLIPConfig"),Bd=a(" is the configuration class to store the configuration of a "),dr=n("a"),Ud=a("CLIPModel"),Rd=a(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Hd=l(),ct=n("p"),Kd=a("Configuration objects inherit from "),cr=n("a"),Gd=a("PretrainedConfig"),Jd=a(` and can be used to control the model outputs. Read the
documentation from `),pr=n("a"),Xd=a("PretrainedConfig"),Zd=a(" for more information."),Qd=l(),so=n("div"),u(rn.$$.fragment),Yd=l(),an=n("p"),ec=a("Instantiate a "),mr=n("a"),tc=a("CLIPConfig"),oc=a(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),il=l(),pt=n("h2"),ro=n("a"),ha=n("span"),u(ln.$$.fragment),nc=l(),fa=n("span"),sc=a("CLIPTextConfig"),ll=l(),V=n("div"),u(dn.$$.fragment),rc=l(),mt=n("p"),ac=a("This is the configuration class to store the configuration of a "),hr=n("a"),ic=a("CLIPModel"),lc=a(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),cn=n("a"),dc=a("openai/clip-vit-base-patch32"),cc=a(" architecture."),pc=l(),ht=n("p"),mc=a("Configuration objects inherit from "),fr=n("a"),hc=a("PretrainedConfig"),fc=a(` and can be used to control the model outputs. Read the
documentation from `),ur=n("a"),uc=a("PretrainedConfig"),gc=a(" for more information."),_c=l(),ua=n("p"),vc=a("Example:"),bc=l(),u(pn.$$.fragment),dl=l(),ft=n("h2"),ao=n("a"),ga=n("span"),u(mn.$$.fragment),Pc=l(),_a=n("span"),yc=a("CLIPVisionConfig"),cl=l(),S=n("div"),u(hn.$$.fragment),Tc=l(),ut=n("p"),Ic=a("This is the configuration class to store the configuration of a "),gr=n("a"),Cc=a("CLIPModel"),Lc=a(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),fn=n("a"),xc=a("openai/clip-vit-base-patch32"),wc=a(" architecture."),$c=l(),gt=n("p"),kc=a("Configuration objects inherit from "),_r=n("a"),Ec=a("PretrainedConfig"),Mc=a(` and can be used to control the model outputs. Read the
documentation from `),vr=n("a"),zc=a("PretrainedConfig"),jc=a(" for more information."),Fc=l(),va=n("p"),qc=a("Example:"),Dc=l(),u(un.$$.fragment),pl=l(),_t=n("h2"),io=n("a"),ba=n("span"),u(gn.$$.fragment),Oc=l(),Pa=n("span"),Ac=a("CLIPTokenizer"),ml=l(),F=n("div"),u(_n.$$.fragment),Nc=l(),ya=n("p"),Vc=a("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Sc=l(),vn=n("p"),Wc=a("This tokenizer inherits from "),br=n("a"),Bc=a("PreTrainedTokenizer"),Uc=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rc=l(),Pe=n("div"),u(bn.$$.fragment),Hc=l(),Ta=n("p"),Kc=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Gc=l(),Ia=n("ul"),Pr=n("li"),Jc=a("single sequence: "),Ca=n("code"),Xc=a("<|startoftext|> X <|endoftext|>"),Zc=l(),La=n("p"),Qc=a("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Yc=l(),lo=n("div"),u(Pn.$$.fragment),ep=l(),yn=n("p"),tp=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xa=n("code"),op=a("prepare_for_model"),np=a(" method."),sp=l(),co=n("div"),u(Tn.$$.fragment),rp=l(),wa=n("p"),ap=a(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ip=l(),yr=n("div"),u(In.$$.fragment),hl=l(),vt=n("h2"),po=n("a"),$a=n("span"),u(Cn.$$.fragment),lp=l(),ka=n("span"),dp=a("CLIPTokenizerFast"),fl=l(),W=n("div"),u(Ln.$$.fragment),cp=l(),xn=n("p"),pp=a("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ea=n("em"),mp=a("tokenizers"),hp=a(` library). Based on byte-level
Byte-Pair-Encoding.`),fp=l(),wn=n("p"),up=a("This tokenizer inherits from "),Tr=n("a"),gp=a("PreTrainedTokenizerFast"),_p=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),vp=l(),ye=n("div"),u($n.$$.fragment),bp=l(),Ma=n("p"),Pp=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),yp=l(),za=n("ul"),Ir=n("li"),Tp=a("single sequence: "),ja=n("code"),Ip=a("<|startoftext|> X <|endoftext|>"),Cp=l(),Fa=n("p"),Lp=a("Pairs of sequences are not the expected use case, but they will be handled without a separator."),xp=l(),mo=n("div"),u(kn.$$.fragment),wp=l(),qa=n("p"),$p=a(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ul=l(),bt=n("h2"),ho=n("a"),Da=n("span"),u(En.$$.fragment),kp=l(),Oa=n("span"),Ep=a("CLIPFeatureExtractor"),gl=l(),B=n("div"),u(Mn.$$.fragment),Mp=l(),Aa=n("p"),zp=a("Constructs a CLIP feature extractor."),jp=l(),zn=n("p"),Fp=a("This feature extractor inherits from "),Cr=n("a"),qp=a("FeatureExtractionMixin"),Dp=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Op=l(),fo=n("div"),u(jn.$$.fragment),Ap=l(),Fn=n("p"),Np=a("Crops "),Na=n("code"),Vp=a("image"),Sp=a(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Wp=l(),uo=n("div"),u(qn.$$.fragment),Bp=l(),Pt=n("p"),Up=a("Resizes "),Va=n("code"),Rp=a("image"),Hp=a(". Note that this will trigger a conversion of "),Sa=n("code"),Kp=a("image"),Gp=a(" to a PIL Image."),_l=l(),yt=n("h2"),go=n("a"),Wa=n("span"),u(Dn.$$.fragment),Jp=l(),Ba=n("span"),Xp=a("CLIPProcessor"),vl=l(),U=n("div"),u(On.$$.fragment),Zp=l(),Ua=n("p"),Qp=a("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Yp=l(),K=n("p"),Lr=n("a"),em=a("CLIPProcessor"),tm=a(" offers all the functionalities of "),xr=n("a"),om=a("CLIPFeatureExtractor"),nm=a(" and "),wr=n("a"),sm=a("CLIPTokenizerFast"),rm=a(`. See the
`),Ra=n("code"),am=a("__call__()"),im=a(" and "),$r=n("a"),lm=a("decode()"),dm=a(" for more information."),cm=l(),_o=n("div"),u(An.$$.fragment),pm=l(),Nn=n("p"),mm=a("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),kr=n("a"),hm=a("batch_decode()"),fm=a(`. Please
refer to the docstring of this method for more information.`),um=l(),vo=n("div"),u(Vn.$$.fragment),gm=l(),Sn=n("p"),_m=a("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Er=n("a"),vm=a("decode()"),bm=a(`. Please refer to
the docstring of this method for more information.`),bl=l(),Tt=n("h2"),bo=n("a"),Ha=n("span"),u(Wn.$$.fragment),Pm=l(),Ka=n("span"),ym=a("CLIPModel"),Pl=l(),R=n("div"),u(Bn.$$.fragment),Tm=l(),Un=n("p"),Im=a("This model is a PyTorch "),Rn=n("a"),Cm=a("torch.nn.Module"),Lm=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xm=l(),G=n("div"),u(Hn.$$.fragment),wm=l(),It=n("p"),$m=a("The "),Mr=n("a"),km=a("CLIPModel"),Em=a(" forward method, overrides the "),Ga=n("code"),Mm=a("__call__"),zm=a(" special method."),jm=l(),u(Po.$$.fragment),Fm=l(),Ja=n("p"),qm=a("Examples:"),Dm=l(),u(Kn.$$.fragment),Om=l(),J=n("div"),u(Gn.$$.fragment),Am=l(),Ct=n("p"),Nm=a("The "),zr=n("a"),Vm=a("CLIPModel"),Sm=a(" forward method, overrides the "),Xa=n("code"),Wm=a("__call__"),Bm=a(" special method."),Um=l(),u(yo.$$.fragment),Rm=l(),Za=n("p"),Hm=a("Examples:"),Km=l(),u(Jn.$$.fragment),Gm=l(),X=n("div"),u(Xn.$$.fragment),Jm=l(),Lt=n("p"),Xm=a("The "),jr=n("a"),Zm=a("CLIPModel"),Qm=a(" forward method, overrides the "),Qa=n("code"),Ym=a("__call__"),eh=a(" special method."),th=l(),u(To.$$.fragment),oh=l(),Ya=n("p"),nh=a("Examples:"),sh=l(),u(Zn.$$.fragment),yl=l(),xt=n("h2"),Io=n("a"),ei=n("span"),u(Qn.$$.fragment),rh=l(),ti=n("span"),ah=a("CLIPTextModel"),Tl=l(),wt=n("div"),u(Yn.$$.fragment),ih=l(),Z=n("div"),u(es.$$.fragment),lh=l(),$t=n("p"),dh=a("The "),Fr=n("a"),ch=a("CLIPTextModel"),ph=a(" forward method, overrides the "),oi=n("code"),mh=a("__call__"),hh=a(" special method."),fh=l(),u(Co.$$.fragment),uh=l(),ni=n("p"),gh=a("Examples:"),_h=l(),u(ts.$$.fragment),Il=l(),kt=n("h2"),Lo=n("a"),si=n("span"),u(os.$$.fragment),vh=l(),ri=n("span"),bh=a("CLIPVisionModel"),Cl=l(),Et=n("div"),u(ns.$$.fragment),Ph=l(),Q=n("div"),u(ss.$$.fragment),yh=l(),Mt=n("p"),Th=a("The "),qr=n("a"),Ih=a("CLIPVisionModel"),Ch=a(" forward method, overrides the "),ai=n("code"),Lh=a("__call__"),xh=a(" special method."),wh=l(),u(xo.$$.fragment),$h=l(),ii=n("p"),kh=a("Examples:"),Eh=l(),u(rs.$$.fragment),Ll=l(),zt=n("h2"),wo=n("a"),li=n("span"),u(as.$$.fragment),Mh=l(),di=n("span"),zh=a("TFCLIPModel"),xl=l(),q=n("div"),u(is.$$.fragment),jh=l(),ls=n("p"),Fh=a("This model inherits from "),Dr=n("a"),qh=a("TFPreTrainedModel"),Dh=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh=l(),ds=n("p"),Ah=a("This model is also a "),cs=n("a"),Nh=a("tf.keras.Model"),Vh=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sh=l(),u($o.$$.fragment),Wh=l(),Y=n("div"),u(ps.$$.fragment),Bh=l(),jt=n("p"),Uh=a("The "),Or=n("a"),Rh=a("TFCLIPModel"),Hh=a(" forward method, overrides the "),ci=n("code"),Kh=a("__call__"),Gh=a(" special method."),Jh=l(),u(ko.$$.fragment),Xh=l(),pi=n("p"),Zh=a("Examples:"),Qh=l(),u(ms.$$.fragment),Yh=l(),ee=n("div"),u(hs.$$.fragment),ef=l(),Ft=n("p"),tf=a("The "),Ar=n("a"),of=a("TFCLIPModel"),nf=a(" forward method, overrides the "),mi=n("code"),sf=a("__call__"),rf=a(" special method."),af=l(),u(Eo.$$.fragment),lf=l(),hi=n("p"),df=a("Examples:"),cf=l(),u(fs.$$.fragment),pf=l(),te=n("div"),u(us.$$.fragment),mf=l(),qt=n("p"),hf=a("The "),Nr=n("a"),ff=a("TFCLIPModel"),uf=a(" forward method, overrides the "),fi=n("code"),gf=a("__call__"),_f=a(" special method."),vf=l(),u(Mo.$$.fragment),bf=l(),ui=n("p"),Pf=a("Examples:"),yf=l(),u(gs.$$.fragment),wl=l(),Dt=n("h2"),zo=n("a"),gi=n("span"),u(_s.$$.fragment),Tf=l(),_i=n("span"),If=a("TFCLIPTextModel"),$l=l(),Ot=n("div"),u(vs.$$.fragment),Cf=l(),oe=n("div"),u(bs.$$.fragment),Lf=l(),At=n("p"),xf=a("The "),Vr=n("a"),wf=a("TFCLIPTextModel"),$f=a(" forward method, overrides the "),vi=n("code"),kf=a("__call__"),Ef=a(" special method."),Mf=l(),u(jo.$$.fragment),zf=l(),bi=n("p"),jf=a("Examples:"),Ff=l(),u(Ps.$$.fragment),kl=l(),Nt=n("h2"),Fo=n("a"),Pi=n("span"),u(ys.$$.fragment),qf=l(),yi=n("span"),Df=a("TFCLIPVisionModel"),El=l(),Vt=n("div"),u(Ts.$$.fragment),Of=l(),ne=n("div"),u(Is.$$.fragment),Af=l(),St=n("p"),Nf=a("The "),Sr=n("a"),Vf=a("TFCLIPVisionModel"),Sf=a(" forward method, overrides the "),Ti=n("code"),Wf=a("__call__"),Bf=a(" special method."),Uf=l(),u(qo.$$.fragment),Rf=l(),Ii=n("p"),Hf=a("Examples:"),Kf=l(),u(Cs.$$.fragment),Ml=l(),Wt=n("h2"),Do=n("a"),Ci=n("span"),u(Ls.$$.fragment),Gf=l(),Li=n("span"),Jf=a("FlaxCLIPModel"),zl=l(),M=n("div"),u(xs.$$.fragment),Xf=l(),ws=n("p"),Zf=a("This model inherits from "),Wr=n("a"),Qf=a("FlaxPreTrainedModel"),Yf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eu=l(),$s=n("p"),tu=a("This model is also a Flax Linen "),ks=n("a"),ou=a("flax.linen.Module"),nu=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),su=l(),xi=n("p"),ru=a("Finally, this model supports inherent JAX features such as:"),au=l(),Ee=n("ul"),wi=n("li"),Es=n("a"),iu=a("Just-In-Time (JIT) compilation"),lu=l(),$i=n("li"),Ms=n("a"),du=a("Automatic Differentiation"),cu=l(),ki=n("li"),zs=n("a"),pu=a("Vectorization"),mu=l(),Ei=n("li"),js=n("a"),hu=a("Parallelization"),fu=l(),se=n("div"),u(Fs.$$.fragment),uu=l(),Bt=n("p"),gu=a("The "),Mi=n("code"),_u=a("FlaxCLIPPreTrainedModel"),vu=a(" forward method, overrides the "),zi=n("code"),bu=a("__call__"),Pu=a(" special method."),yu=l(),u(Oo.$$.fragment),Tu=l(),ji=n("p"),Iu=a("Example:"),Cu=l(),u(qs.$$.fragment),Lu=l(),Ne=n("div"),u(Ds.$$.fragment),xu=l(),Fi=n("p"),wu=a("Examples:"),$u=l(),u(Os.$$.fragment),ku=l(),Ve=n("div"),u(As.$$.fragment),Eu=l(),qi=n("p"),Mu=a("Examples:"),zu=l(),u(Ns.$$.fragment),jl=l(),Ut=n("h2"),Ao=n("a"),Di=n("span"),u(Vs.$$.fragment),ju=l(),Oi=n("span"),Fu=a("FlaxCLIPTextModel"),Fl=l(),Rt=n("div"),u(Ss.$$.fragment),qu=l(),re=n("div"),u(Ws.$$.fragment),Du=l(),Ht=n("p"),Ou=a("The "),Ai=n("code"),Au=a("FlaxCLIPTextPreTrainedModel"),Nu=a(" forward method, overrides the "),Ni=n("code"),Vu=a("__call__"),Su=a(" special method."),Wu=l(),u(No.$$.fragment),Bu=l(),Vi=n("p"),Uu=a("Example:"),Ru=l(),u(Bs.$$.fragment),ql=l(),Kt=n("h2"),Vo=n("a"),Si=n("span"),u(Us.$$.fragment),Hu=l(),Wi=n("span"),Ku=a("FlaxCLIPVisionModel"),Dl=l(),Gt=n("div"),u(Rs.$$.fragment),Gu=l(),ae=n("div"),u(Hs.$$.fragment),Ju=l(),Jt=n("p"),Xu=a("The "),Bi=n("code"),Zu=a("FlaxCLIPVisionPreTrainedModel"),Qu=a(" forward method, overrides the "),Ui=n("code"),Yu=a("__call__"),eg=a(" special method."),tg=l(),u(So.$$.fragment),og=l(),Ri=n("p"),ng=a("Example:"),sg=l(),u(Ks.$$.fragment),this.h()},l(t){const m=lb('[data-svelte="svelte-1phssyn"]',document.head);p=s(m,"META",{name:!0,content:!0}),m.forEach(o),L=d(t),y=s(t,"H1",{class:!0});var Gs=r(y);I=s(Gs,"A",{id:!0,class:!0,href:!0});var Hi=r(I);C=s(Hi,"SPAN",{});var Ki=r(C);g(T.$$.fragment,Ki),Ki.forEach(o),Hi.forEach(o),f=d(Gs),x=s(Gs,"SPAN",{});var Gi=r(x);Ho=i(Gi,"CLIP"),Gi.forEach(o),Gs.forEach(o),at=d(t),z=s(t,"H2",{class:!0});var Js=r(z);ue=s(Js,"A",{id:!0,class:!0,href:!0});var Ji=r(ue);Te=s(Ji,"SPAN",{});var Xi=r(Te);g(Ie.$$.fragment,Xi),Xi.forEach(o),Ji.forEach(o),Ko=d(Js),Ce=s(Js,"SPAN",{});var Zi=r(Ce);Go=i(Zi,"Overview"),Zi.forEach(o),Js.forEach(o),Xt=d(t),pe=s(t,"P",{});var Xs=r(pe);ze=i(Xs,"The CLIP model was proposed in "),Le=s(Xs,"A",{href:!0,rel:!0});var Qi=r(Le);Zt=i(Qi,"Learning Transferable Visual Models From Natural Language Supervision"),Qi.forEach(o),H=i(Xs,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Xs.forEach(o),me=d(t),je=s(t,"P",{});var Yi=r(je);it=i(Yi,"The abstract from the paper is the following:"),Yi.forEach(o),Qt=d(t),Fe=s(t,"P",{});var el=r(Fe);xe=s(el,"EM",{});var tl=r(xe);Jo=i(tl,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),tl.forEach(o),el.forEach(o),Yt=d(t),O=s(t,"H2",{class:!0});var Zs=r(O);ge=s(Zs,"A",{id:!0,class:!0,href:!0});var ig=r(ge);we=s(ig,"SPAN",{});var lg=r(we);g($e.$$.fragment,lg),lg.forEach(o),ig.forEach(o),Xo=d(Zs),ke=s(Zs,"SPAN",{});var dg=r(ke);Zo=i(dg,"Usage"),dg.forEach(o),Zs.forEach(o),eo=d(t),he=s(t,"P",{});var cg=r(he);Qo=i(cg,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),cg.forEach(o),qe=d(t),_e=s(t,"P",{});var Al=r(_e);$=i(Al,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=s(Al,"A",{href:!0});var pg=r(j);to=i(pg,"CLIPFeatureExtractor"),pg.forEach(o),Qs=i(Al," can be used to resize (or rescale) and normalize images for the model."),Al.forEach(o),Yo=d(t),E=s(t,"P",{});var ie=r(E);Ys=i(ie,"The "),lt=s(ie,"A",{href:!0});var mg=r(lt);er=i(mg,"CLIPTokenizer"),mg.forEach(o),De=i(ie," is used to encode the text. The "),ve=s(ie,"A",{href:!0});var hg=r(ve);tr=i(hg,"CLIPProcessor"),hg.forEach(o),or=i(ie,` wraps
`),be=s(ie,"A",{href:!0});var fg=r(be);nr=i(fg,"CLIPFeatureExtractor"),fg.forEach(o),sr=i(ie," and "),Oe=s(ie,"A",{href:!0});var ug=r(Oe);rr=i(ug,"CLIPTokenizer"),ug.forEach(o),kd=i(ie,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ar=s(ie,"A",{href:!0});var gg=r(ar);Ed=i(gg,"CLIPProcessor"),gg.forEach(o),Md=i(ie," and "),ir=s(ie,"A",{href:!0});var _g=r(ir);zd=i(_g,"CLIPModel"),_g.forEach(o),jd=i(ie,"."),ie.forEach(o),nl=d(t),g(en.$$.fragment,t),sl=d(t),Ae=s(t,"P",{});var Br=r(Ae);Fd=i(Br,"This model was contributed by "),tn=s(Br,"A",{href:!0,rel:!0});var vg=r(tn);qd=i(vg,"valhalla"),vg.forEach(o),Dd=i(Br,". The original code can be found "),on=s(Br,"A",{href:!0,rel:!0});var bg=r(on);Od=i(bg,"here"),bg.forEach(o),Ad=i(Br,"."),Br.forEach(o),rl=d(t),dt=s(t,"H2",{class:!0});var Nl=r(dt);oo=s(Nl,"A",{id:!0,class:!0,href:!0});var Pg=r(oo);pa=s(Pg,"SPAN",{});var yg=r(pa);g(nn.$$.fragment,yg),yg.forEach(o),Pg.forEach(o),Nd=d(Nl),ma=s(Nl,"SPAN",{});var Tg=r(ma);Vd=i(Tg,"CLIPConfig"),Tg.forEach(o),Nl.forEach(o),al=d(t),fe=s(t,"DIV",{class:!0});var Wo=r(fe);g(sn.$$.fragment,Wo),Sd=d(Wo),no=s(Wo,"P",{});var ol=r(no);lr=s(ol,"A",{href:!0});var Ig=r(lr);Wd=i(Ig,"CLIPConfig"),Ig.forEach(o),Bd=i(ol," is the configuration class to store the configuration of a "),dr=s(ol,"A",{href:!0});var Cg=r(dr);Ud=i(Cg,"CLIPModel"),Cg.forEach(o),Rd=i(ol,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),ol.forEach(o),Hd=d(Wo),ct=s(Wo,"P",{});var Ur=r(ct);Kd=i(Ur,"Configuration objects inherit from "),cr=s(Ur,"A",{href:!0});var Lg=r(cr);Gd=i(Lg,"PretrainedConfig"),Lg.forEach(o),Jd=i(Ur,` and can be used to control the model outputs. Read the
documentation from `),pr=s(Ur,"A",{href:!0});var xg=r(pr);Xd=i(xg,"PretrainedConfig"),xg.forEach(o),Zd=i(Ur," for more information."),Ur.forEach(o),Qd=d(Wo),so=s(Wo,"DIV",{class:!0});var Vl=r(so);g(rn.$$.fragment,Vl),Yd=d(Vl),an=s(Vl,"P",{});var Sl=r(an);ec=i(Sl,"Instantiate a "),mr=s(Sl,"A",{href:!0});var wg=r(mr);tc=i(wg,"CLIPConfig"),wg.forEach(o),oc=i(Sl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Sl.forEach(o),Vl.forEach(o),Wo.forEach(o),il=d(t),pt=s(t,"H2",{class:!0});var Wl=r(pt);ro=s(Wl,"A",{id:!0,class:!0,href:!0});var $g=r(ro);ha=s($g,"SPAN",{});var kg=r(ha);g(ln.$$.fragment,kg),kg.forEach(o),$g.forEach(o),nc=d(Wl),fa=s(Wl,"SPAN",{});var Eg=r(fa);sc=i(Eg,"CLIPTextConfig"),Eg.forEach(o),Wl.forEach(o),ll=d(t),V=s(t,"DIV",{class:!0});var Se=r(V);g(dn.$$.fragment,Se),rc=d(Se),mt=s(Se,"P",{});var Rr=r(mt);ac=i(Rr,"This is the configuration class to store the configuration of a "),hr=s(Rr,"A",{href:!0});var Mg=r(hr);ic=i(Mg,"CLIPModel"),Mg.forEach(o),lc=i(Rr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),cn=s(Rr,"A",{href:!0,rel:!0});var zg=r(cn);dc=i(zg,"openai/clip-vit-base-patch32"),zg.forEach(o),cc=i(Rr," architecture."),Rr.forEach(o),pc=d(Se),ht=s(Se,"P",{});var Hr=r(ht);mc=i(Hr,"Configuration objects inherit from "),fr=s(Hr,"A",{href:!0});var jg=r(fr);hc=i(jg,"PretrainedConfig"),jg.forEach(o),fc=i(Hr,` and can be used to control the model outputs. Read the
documentation from `),ur=s(Hr,"A",{href:!0});var Fg=r(ur);uc=i(Fg,"PretrainedConfig"),Fg.forEach(o),gc=i(Hr," for more information."),Hr.forEach(o),_c=d(Se),ua=s(Se,"P",{});var qg=r(ua);vc=i(qg,"Example:"),qg.forEach(o),bc=d(Se),g(pn.$$.fragment,Se),Se.forEach(o),dl=d(t),ft=s(t,"H2",{class:!0});var Bl=r(ft);ao=s(Bl,"A",{id:!0,class:!0,href:!0});var Dg=r(ao);ga=s(Dg,"SPAN",{});var Og=r(ga);g(mn.$$.fragment,Og),Og.forEach(o),Dg.forEach(o),Pc=d(Bl),_a=s(Bl,"SPAN",{});var Ag=r(_a);yc=i(Ag,"CLIPVisionConfig"),Ag.forEach(o),Bl.forEach(o),cl=d(t),S=s(t,"DIV",{class:!0});var We=r(S);g(hn.$$.fragment,We),Tc=d(We),ut=s(We,"P",{});var Kr=r(ut);Ic=i(Kr,"This is the configuration class to store the configuration of a "),gr=s(Kr,"A",{href:!0});var Ng=r(gr);Cc=i(Ng,"CLIPModel"),Ng.forEach(o),Lc=i(Kr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),fn=s(Kr,"A",{href:!0,rel:!0});var Vg=r(fn);xc=i(Vg,"openai/clip-vit-base-patch32"),Vg.forEach(o),wc=i(Kr," architecture."),Kr.forEach(o),$c=d(We),gt=s(We,"P",{});var Gr=r(gt);kc=i(Gr,"Configuration objects inherit from "),_r=s(Gr,"A",{href:!0});var Sg=r(_r);Ec=i(Sg,"PretrainedConfig"),Sg.forEach(o),Mc=i(Gr,` and can be used to control the model outputs. Read the
documentation from `),vr=s(Gr,"A",{href:!0});var Wg=r(vr);zc=i(Wg,"PretrainedConfig"),Wg.forEach(o),jc=i(Gr," for more information."),Gr.forEach(o),Fc=d(We),va=s(We,"P",{});var Bg=r(va);qc=i(Bg,"Example:"),Bg.forEach(o),Dc=d(We),g(un.$$.fragment,We),We.forEach(o),pl=d(t),_t=s(t,"H2",{class:!0});var Ul=r(_t);io=s(Ul,"A",{id:!0,class:!0,href:!0});var Ug=r(io);ba=s(Ug,"SPAN",{});var Rg=r(ba);g(gn.$$.fragment,Rg),Rg.forEach(o),Ug.forEach(o),Oc=d(Ul),Pa=s(Ul,"SPAN",{});var Hg=r(Pa);Ac=i(Hg,"CLIPTokenizer"),Hg.forEach(o),Ul.forEach(o),ml=d(t),F=s(t,"DIV",{class:!0});var le=r(F);g(_n.$$.fragment,le),Nc=d(le),ya=s(le,"P",{});var Kg=r(ya);Vc=i(Kg,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Kg.forEach(o),Sc=d(le),vn=s(le,"P",{});var Rl=r(vn);Wc=i(Rl,"This tokenizer inherits from "),br=s(Rl,"A",{href:!0});var Gg=r(br);Bc=i(Gg,"PreTrainedTokenizer"),Gg.forEach(o),Uc=i(Rl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rl.forEach(o),Rc=d(le),Pe=s(le,"DIV",{class:!0});var Bo=r(Pe);g(bn.$$.fragment,Bo),Hc=d(Bo),Ta=s(Bo,"P",{});var Jg=r(Ta);Kc=i(Jg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Jg.forEach(o),Gc=d(Bo),Ia=s(Bo,"UL",{});var Xg=r(Ia);Pr=s(Xg,"LI",{});var rg=r(Pr);Jc=i(rg,"single sequence: "),Ca=s(rg,"CODE",{});var Zg=r(Ca);Xc=i(Zg,"<|startoftext|> X <|endoftext|>"),Zg.forEach(o),rg.forEach(o),Xg.forEach(o),Zc=d(Bo),La=s(Bo,"P",{});var Qg=r(La);Qc=i(Qg,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Qg.forEach(o),Bo.forEach(o),Yc=d(le),lo=s(le,"DIV",{class:!0});var Hl=r(lo);g(Pn.$$.fragment,Hl),ep=d(Hl),yn=s(Hl,"P",{});var Kl=r(yn);tp=i(Kl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xa=s(Kl,"CODE",{});var Yg=r(xa);op=i(Yg,"prepare_for_model"),Yg.forEach(o),np=i(Kl," method."),Kl.forEach(o),Hl.forEach(o),sp=d(le),co=s(le,"DIV",{class:!0});var Gl=r(co);g(Tn.$$.fragment,Gl),rp=d(Gl),wa=s(Gl,"P",{});var e_=r(wa);ap=i(e_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),e_.forEach(o),Gl.forEach(o),ip=d(le),yr=s(le,"DIV",{class:!0});var t_=r(yr);g(In.$$.fragment,t_),t_.forEach(o),le.forEach(o),hl=d(t),vt=s(t,"H2",{class:!0});var Jl=r(vt);po=s(Jl,"A",{id:!0,class:!0,href:!0});var o_=r(po);$a=s(o_,"SPAN",{});var n_=r($a);g(Cn.$$.fragment,n_),n_.forEach(o),o_.forEach(o),lp=d(Jl),ka=s(Jl,"SPAN",{});var s_=r(ka);dp=i(s_,"CLIPTokenizerFast"),s_.forEach(o),Jl.forEach(o),fl=d(t),W=s(t,"DIV",{class:!0});var Be=r(W);g(Ln.$$.fragment,Be),cp=d(Be),xn=s(Be,"P",{});var Xl=r(xn);pp=i(Xl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ea=s(Xl,"EM",{});var r_=r(Ea);mp=i(r_,"tokenizers"),r_.forEach(o),hp=i(Xl,` library). Based on byte-level
Byte-Pair-Encoding.`),Xl.forEach(o),fp=d(Be),wn=s(Be,"P",{});var Zl=r(wn);up=i(Zl,"This tokenizer inherits from "),Tr=s(Zl,"A",{href:!0});var a_=r(Tr);gp=i(a_,"PreTrainedTokenizerFast"),a_.forEach(o),_p=i(Zl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Zl.forEach(o),vp=d(Be),ye=s(Be,"DIV",{class:!0});var Uo=r(ye);g($n.$$.fragment,Uo),bp=d(Uo),Ma=s(Uo,"P",{});var i_=r(Ma);Pp=i(i_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),i_.forEach(o),yp=d(Uo),za=s(Uo,"UL",{});var l_=r(za);Ir=s(l_,"LI",{});var ag=r(Ir);Tp=i(ag,"single sequence: "),ja=s(ag,"CODE",{});var d_=r(ja);Ip=i(d_,"<|startoftext|> X <|endoftext|>"),d_.forEach(o),ag.forEach(o),l_.forEach(o),Cp=d(Uo),Fa=s(Uo,"P",{});var c_=r(Fa);Lp=i(c_,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),c_.forEach(o),Uo.forEach(o),xp=d(Be),mo=s(Be,"DIV",{class:!0});var Ql=r(mo);g(kn.$$.fragment,Ql),wp=d(Ql),qa=s(Ql,"P",{});var p_=r(qa);$p=i(p_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),p_.forEach(o),Ql.forEach(o),Be.forEach(o),ul=d(t),bt=s(t,"H2",{class:!0});var Yl=r(bt);ho=s(Yl,"A",{id:!0,class:!0,href:!0});var m_=r(ho);Da=s(m_,"SPAN",{});var h_=r(Da);g(En.$$.fragment,h_),h_.forEach(o),m_.forEach(o),kp=d(Yl),Oa=s(Yl,"SPAN",{});var f_=r(Oa);Ep=i(f_,"CLIPFeatureExtractor"),f_.forEach(o),Yl.forEach(o),gl=d(t),B=s(t,"DIV",{class:!0});var Ue=r(B);g(Mn.$$.fragment,Ue),Mp=d(Ue),Aa=s(Ue,"P",{});var u_=r(Aa);zp=i(u_,"Constructs a CLIP feature extractor."),u_.forEach(o),jp=d(Ue),zn=s(Ue,"P",{});var ed=r(zn);Fp=i(ed,"This feature extractor inherits from "),Cr=s(ed,"A",{href:!0});var g_=r(Cr);qp=i(g_,"FeatureExtractionMixin"),g_.forEach(o),Dp=i(ed,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ed.forEach(o),Op=d(Ue),fo=s(Ue,"DIV",{class:!0});var td=r(fo);g(jn.$$.fragment,td),Ap=d(td),Fn=s(td,"P",{});var od=r(Fn);Np=i(od,"Crops "),Na=s(od,"CODE",{});var __=r(Na);Vp=i(__,"image"),__.forEach(o),Sp=i(od,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),od.forEach(o),td.forEach(o),Wp=d(Ue),uo=s(Ue,"DIV",{class:!0});var nd=r(uo);g(qn.$$.fragment,nd),Bp=d(nd),Pt=s(nd,"P",{});var Jr=r(Pt);Up=i(Jr,"Resizes "),Va=s(Jr,"CODE",{});var v_=r(Va);Rp=i(v_,"image"),v_.forEach(o),Hp=i(Jr,". Note that this will trigger a conversion of "),Sa=s(Jr,"CODE",{});var b_=r(Sa);Kp=i(b_,"image"),b_.forEach(o),Gp=i(Jr," to a PIL Image."),Jr.forEach(o),nd.forEach(o),Ue.forEach(o),_l=d(t),yt=s(t,"H2",{class:!0});var sd=r(yt);go=s(sd,"A",{id:!0,class:!0,href:!0});var P_=r(go);Wa=s(P_,"SPAN",{});var y_=r(Wa);g(Dn.$$.fragment,y_),y_.forEach(o),P_.forEach(o),Jp=d(sd),Ba=s(sd,"SPAN",{});var T_=r(Ba);Xp=i(T_,"CLIPProcessor"),T_.forEach(o),sd.forEach(o),vl=d(t),U=s(t,"DIV",{class:!0});var Re=r(U);g(On.$$.fragment,Re),Zp=d(Re),Ua=s(Re,"P",{});var I_=r(Ua);Qp=i(I_,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),I_.forEach(o),Yp=d(Re),K=s(Re,"P",{});var Me=r(K);Lr=s(Me,"A",{href:!0});var C_=r(Lr);em=i(C_,"CLIPProcessor"),C_.forEach(o),tm=i(Me," offers all the functionalities of "),xr=s(Me,"A",{href:!0});var L_=r(xr);om=i(L_,"CLIPFeatureExtractor"),L_.forEach(o),nm=i(Me," and "),wr=s(Me,"A",{href:!0});var x_=r(wr);sm=i(x_,"CLIPTokenizerFast"),x_.forEach(o),rm=i(Me,`. See the
`),Ra=s(Me,"CODE",{});var w_=r(Ra);am=i(w_,"__call__()"),w_.forEach(o),im=i(Me," and "),$r=s(Me,"A",{href:!0});var $_=r($r);lm=i($_,"decode()"),$_.forEach(o),dm=i(Me," for more information."),Me.forEach(o),cm=d(Re),_o=s(Re,"DIV",{class:!0});var rd=r(_o);g(An.$$.fragment,rd),pm=d(rd),Nn=s(rd,"P",{});var ad=r(Nn);mm=i(ad,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),kr=s(ad,"A",{href:!0});var k_=r(kr);hm=i(k_,"batch_decode()"),k_.forEach(o),fm=i(ad,`. Please
refer to the docstring of this method for more information.`),ad.forEach(o),rd.forEach(o),um=d(Re),vo=s(Re,"DIV",{class:!0});var id=r(vo);g(Vn.$$.fragment,id),gm=d(id),Sn=s(id,"P",{});var ld=r(Sn);_m=i(ld,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Er=s(ld,"A",{href:!0});var E_=r(Er);vm=i(E_,"decode()"),E_.forEach(o),bm=i(ld,`. Please refer to
the docstring of this method for more information.`),ld.forEach(o),id.forEach(o),Re.forEach(o),bl=d(t),Tt=s(t,"H2",{class:!0});var dd=r(Tt);bo=s(dd,"A",{id:!0,class:!0,href:!0});var M_=r(bo);Ha=s(M_,"SPAN",{});var z_=r(Ha);g(Wn.$$.fragment,z_),z_.forEach(o),M_.forEach(o),Pm=d(dd),Ka=s(dd,"SPAN",{});var j_=r(Ka);ym=i(j_,"CLIPModel"),j_.forEach(o),dd.forEach(o),Pl=d(t),R=s(t,"DIV",{class:!0});var He=r(R);g(Bn.$$.fragment,He),Tm=d(He),Un=s(He,"P",{});var cd=r(Un);Im=i(cd,"This model is a PyTorch "),Rn=s(cd,"A",{href:!0,rel:!0});var F_=r(Rn);Cm=i(F_,"torch.nn.Module"),F_.forEach(o),Lm=i(cd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cd.forEach(o),xm=d(He),G=s(He,"DIV",{class:!0});var Ke=r(G);g(Hn.$$.fragment,Ke),wm=d(Ke),It=s(Ke,"P",{});var Xr=r(It);$m=i(Xr,"The "),Mr=s(Xr,"A",{href:!0});var q_=r(Mr);km=i(q_,"CLIPModel"),q_.forEach(o),Em=i(Xr," forward method, overrides the "),Ga=s(Xr,"CODE",{});var D_=r(Ga);Mm=i(D_,"__call__"),D_.forEach(o),zm=i(Xr," special method."),Xr.forEach(o),jm=d(Ke),g(Po.$$.fragment,Ke),Fm=d(Ke),Ja=s(Ke,"P",{});var O_=r(Ja);qm=i(O_,"Examples:"),O_.forEach(o),Dm=d(Ke),g(Kn.$$.fragment,Ke),Ke.forEach(o),Om=d(He),J=s(He,"DIV",{class:!0});var Ge=r(J);g(Gn.$$.fragment,Ge),Am=d(Ge),Ct=s(Ge,"P",{});var Zr=r(Ct);Nm=i(Zr,"The "),zr=s(Zr,"A",{href:!0});var A_=r(zr);Vm=i(A_,"CLIPModel"),A_.forEach(o),Sm=i(Zr," forward method, overrides the "),Xa=s(Zr,"CODE",{});var N_=r(Xa);Wm=i(N_,"__call__"),N_.forEach(o),Bm=i(Zr," special method."),Zr.forEach(o),Um=d(Ge),g(yo.$$.fragment,Ge),Rm=d(Ge),Za=s(Ge,"P",{});var V_=r(Za);Hm=i(V_,"Examples:"),V_.forEach(o),Km=d(Ge),g(Jn.$$.fragment,Ge),Ge.forEach(o),Gm=d(He),X=s(He,"DIV",{class:!0});var Je=r(X);g(Xn.$$.fragment,Je),Jm=d(Je),Lt=s(Je,"P",{});var Qr=r(Lt);Xm=i(Qr,"The "),jr=s(Qr,"A",{href:!0});var S_=r(jr);Zm=i(S_,"CLIPModel"),S_.forEach(o),Qm=i(Qr," forward method, overrides the "),Qa=s(Qr,"CODE",{});var W_=r(Qa);Ym=i(W_,"__call__"),W_.forEach(o),eh=i(Qr," special method."),Qr.forEach(o),th=d(Je),g(To.$$.fragment,Je),oh=d(Je),Ya=s(Je,"P",{});var B_=r(Ya);nh=i(B_,"Examples:"),B_.forEach(o),sh=d(Je),g(Zn.$$.fragment,Je),Je.forEach(o),He.forEach(o),yl=d(t),xt=s(t,"H2",{class:!0});var pd=r(xt);Io=s(pd,"A",{id:!0,class:!0,href:!0});var U_=r(Io);ei=s(U_,"SPAN",{});var R_=r(ei);g(Qn.$$.fragment,R_),R_.forEach(o),U_.forEach(o),rh=d(pd),ti=s(pd,"SPAN",{});var H_=r(ti);ah=i(H_,"CLIPTextModel"),H_.forEach(o),pd.forEach(o),Tl=d(t),wt=s(t,"DIV",{class:!0});var md=r(wt);g(Yn.$$.fragment,md),ih=d(md),Z=s(md,"DIV",{class:!0});var Xe=r(Z);g(es.$$.fragment,Xe),lh=d(Xe),$t=s(Xe,"P",{});var Yr=r($t);dh=i(Yr,"The "),Fr=s(Yr,"A",{href:!0});var K_=r(Fr);ch=i(K_,"CLIPTextModel"),K_.forEach(o),ph=i(Yr," forward method, overrides the "),oi=s(Yr,"CODE",{});var G_=r(oi);mh=i(G_,"__call__"),G_.forEach(o),hh=i(Yr," special method."),Yr.forEach(o),fh=d(Xe),g(Co.$$.fragment,Xe),uh=d(Xe),ni=s(Xe,"P",{});var J_=r(ni);gh=i(J_,"Examples:"),J_.forEach(o),_h=d(Xe),g(ts.$$.fragment,Xe),Xe.forEach(o),md.forEach(o),Il=d(t),kt=s(t,"H2",{class:!0});var hd=r(kt);Lo=s(hd,"A",{id:!0,class:!0,href:!0});var X_=r(Lo);si=s(X_,"SPAN",{});var Z_=r(si);g(os.$$.fragment,Z_),Z_.forEach(o),X_.forEach(o),vh=d(hd),ri=s(hd,"SPAN",{});var Q_=r(ri);bh=i(Q_,"CLIPVisionModel"),Q_.forEach(o),hd.forEach(o),Cl=d(t),Et=s(t,"DIV",{class:!0});var fd=r(Et);g(ns.$$.fragment,fd),Ph=d(fd),Q=s(fd,"DIV",{class:!0});var Ze=r(Q);g(ss.$$.fragment,Ze),yh=d(Ze),Mt=s(Ze,"P",{});var ea=r(Mt);Th=i(ea,"The "),qr=s(ea,"A",{href:!0});var Y_=r(qr);Ih=i(Y_,"CLIPVisionModel"),Y_.forEach(o),Ch=i(ea," forward method, overrides the "),ai=s(ea,"CODE",{});var ev=r(ai);Lh=i(ev,"__call__"),ev.forEach(o),xh=i(ea," special method."),ea.forEach(o),wh=d(Ze),g(xo.$$.fragment,Ze),$h=d(Ze),ii=s(Ze,"P",{});var tv=r(ii);kh=i(tv,"Examples:"),tv.forEach(o),Eh=d(Ze),g(rs.$$.fragment,Ze),Ze.forEach(o),fd.forEach(o),Ll=d(t),zt=s(t,"H2",{class:!0});var ud=r(zt);wo=s(ud,"A",{id:!0,class:!0,href:!0});var ov=r(wo);li=s(ov,"SPAN",{});var nv=r(li);g(as.$$.fragment,nv),nv.forEach(o),ov.forEach(o),Mh=d(ud),di=s(ud,"SPAN",{});var sv=r(di);zh=i(sv,"TFCLIPModel"),sv.forEach(o),ud.forEach(o),xl=d(t),q=s(t,"DIV",{class:!0});var de=r(q);g(is.$$.fragment,de),jh=d(de),ls=s(de,"P",{});var gd=r(ls);Fh=i(gd,"This model inherits from "),Dr=s(gd,"A",{href:!0});var rv=r(Dr);qh=i(rv,"TFPreTrainedModel"),rv.forEach(o),Dh=i(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(o),Oh=d(de),ds=s(de,"P",{});var _d=r(ds);Ah=i(_d,"This model is also a "),cs=s(_d,"A",{href:!0,rel:!0});var av=r(cs);Nh=i(av,"tf.keras.Model"),av.forEach(o),Vh=i(_d,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_d.forEach(o),Sh=d(de),g($o.$$.fragment,de),Wh=d(de),Y=s(de,"DIV",{class:!0});var Qe=r(Y);g(ps.$$.fragment,Qe),Bh=d(Qe),jt=s(Qe,"P",{});var ta=r(jt);Uh=i(ta,"The "),Or=s(ta,"A",{href:!0});var iv=r(Or);Rh=i(iv,"TFCLIPModel"),iv.forEach(o),Hh=i(ta," forward method, overrides the "),ci=s(ta,"CODE",{});var lv=r(ci);Kh=i(lv,"__call__"),lv.forEach(o),Gh=i(ta," special method."),ta.forEach(o),Jh=d(Qe),g(ko.$$.fragment,Qe),Xh=d(Qe),pi=s(Qe,"P",{});var dv=r(pi);Zh=i(dv,"Examples:"),dv.forEach(o),Qh=d(Qe),g(ms.$$.fragment,Qe),Qe.forEach(o),Yh=d(de),ee=s(de,"DIV",{class:!0});var Ye=r(ee);g(hs.$$.fragment,Ye),ef=d(Ye),Ft=s(Ye,"P",{});var oa=r(Ft);tf=i(oa,"The "),Ar=s(oa,"A",{href:!0});var cv=r(Ar);of=i(cv,"TFCLIPModel"),cv.forEach(o),nf=i(oa," forward method, overrides the "),mi=s(oa,"CODE",{});var pv=r(mi);sf=i(pv,"__call__"),pv.forEach(o),rf=i(oa," special method."),oa.forEach(o),af=d(Ye),g(Eo.$$.fragment,Ye),lf=d(Ye),hi=s(Ye,"P",{});var mv=r(hi);df=i(mv,"Examples:"),mv.forEach(o),cf=d(Ye),g(fs.$$.fragment,Ye),Ye.forEach(o),pf=d(de),te=s(de,"DIV",{class:!0});var et=r(te);g(us.$$.fragment,et),mf=d(et),qt=s(et,"P",{});var na=r(qt);hf=i(na,"The "),Nr=s(na,"A",{href:!0});var hv=r(Nr);ff=i(hv,"TFCLIPModel"),hv.forEach(o),uf=i(na," forward method, overrides the "),fi=s(na,"CODE",{});var fv=r(fi);gf=i(fv,"__call__"),fv.forEach(o),_f=i(na," special method."),na.forEach(o),vf=d(et),g(Mo.$$.fragment,et),bf=d(et),ui=s(et,"P",{});var uv=r(ui);Pf=i(uv,"Examples:"),uv.forEach(o),yf=d(et),g(gs.$$.fragment,et),et.forEach(o),de.forEach(o),wl=d(t),Dt=s(t,"H2",{class:!0});var vd=r(Dt);zo=s(vd,"A",{id:!0,class:!0,href:!0});var gv=r(zo);gi=s(gv,"SPAN",{});var _v=r(gi);g(_s.$$.fragment,_v),_v.forEach(o),gv.forEach(o),Tf=d(vd),_i=s(vd,"SPAN",{});var vv=r(_i);If=i(vv,"TFCLIPTextModel"),vv.forEach(o),vd.forEach(o),$l=d(t),Ot=s(t,"DIV",{class:!0});var bd=r(Ot);g(vs.$$.fragment,bd),Cf=d(bd),oe=s(bd,"DIV",{class:!0});var tt=r(oe);g(bs.$$.fragment,tt),Lf=d(tt),At=s(tt,"P",{});var sa=r(At);xf=i(sa,"The "),Vr=s(sa,"A",{href:!0});var bv=r(Vr);wf=i(bv,"TFCLIPTextModel"),bv.forEach(o),$f=i(sa," forward method, overrides the "),vi=s(sa,"CODE",{});var Pv=r(vi);kf=i(Pv,"__call__"),Pv.forEach(o),Ef=i(sa," special method."),sa.forEach(o),Mf=d(tt),g(jo.$$.fragment,tt),zf=d(tt),bi=s(tt,"P",{});var yv=r(bi);jf=i(yv,"Examples:"),yv.forEach(o),Ff=d(tt),g(Ps.$$.fragment,tt),tt.forEach(o),bd.forEach(o),kl=d(t),Nt=s(t,"H2",{class:!0});var Pd=r(Nt);Fo=s(Pd,"A",{id:!0,class:!0,href:!0});var Tv=r(Fo);Pi=s(Tv,"SPAN",{});var Iv=r(Pi);g(ys.$$.fragment,Iv),Iv.forEach(o),Tv.forEach(o),qf=d(Pd),yi=s(Pd,"SPAN",{});var Cv=r(yi);Df=i(Cv,"TFCLIPVisionModel"),Cv.forEach(o),Pd.forEach(o),El=d(t),Vt=s(t,"DIV",{class:!0});var yd=r(Vt);g(Ts.$$.fragment,yd),Of=d(yd),ne=s(yd,"DIV",{class:!0});var ot=r(ne);g(Is.$$.fragment,ot),Af=d(ot),St=s(ot,"P",{});var ra=r(St);Nf=i(ra,"The "),Sr=s(ra,"A",{href:!0});var Lv=r(Sr);Vf=i(Lv,"TFCLIPVisionModel"),Lv.forEach(o),Sf=i(ra," forward method, overrides the "),Ti=s(ra,"CODE",{});var xv=r(Ti);Wf=i(xv,"__call__"),xv.forEach(o),Bf=i(ra," special method."),ra.forEach(o),Uf=d(ot),g(qo.$$.fragment,ot),Rf=d(ot),Ii=s(ot,"P",{});var wv=r(Ii);Hf=i(wv,"Examples:"),wv.forEach(o),Kf=d(ot),g(Cs.$$.fragment,ot),ot.forEach(o),yd.forEach(o),Ml=d(t),Wt=s(t,"H2",{class:!0});var Td=r(Wt);Do=s(Td,"A",{id:!0,class:!0,href:!0});var $v=r(Do);Ci=s($v,"SPAN",{});var kv=r(Ci);g(Ls.$$.fragment,kv),kv.forEach(o),$v.forEach(o),Gf=d(Td),Li=s(Td,"SPAN",{});var Ev=r(Li);Jf=i(Ev,"FlaxCLIPModel"),Ev.forEach(o),Td.forEach(o),zl=d(t),M=s(t,"DIV",{class:!0});var N=r(M);g(xs.$$.fragment,N),Xf=d(N),ws=s(N,"P",{});var Id=r(ws);Zf=i(Id,"This model inherits from "),Wr=s(Id,"A",{href:!0});var Mv=r(Wr);Qf=i(Mv,"FlaxPreTrainedModel"),Mv.forEach(o),Yf=i(Id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Id.forEach(o),eu=d(N),$s=s(N,"P",{});var Cd=r($s);tu=i(Cd,"This model is also a Flax Linen "),ks=s(Cd,"A",{href:!0,rel:!0});var zv=r(ks);ou=i(zv,"flax.linen.Module"),zv.forEach(o),nu=i(Cd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Cd.forEach(o),su=d(N),xi=s(N,"P",{});var jv=r(xi);ru=i(jv,"Finally, this model supports inherent JAX features such as:"),jv.forEach(o),au=d(N),Ee=s(N,"UL",{});var Ro=r(Ee);wi=s(Ro,"LI",{});var Fv=r(wi);Es=s(Fv,"A",{href:!0,rel:!0});var qv=r(Es);iu=i(qv,"Just-In-Time (JIT) compilation"),qv.forEach(o),Fv.forEach(o),lu=d(Ro),$i=s(Ro,"LI",{});var Dv=r($i);Ms=s(Dv,"A",{href:!0,rel:!0});var Ov=r(Ms);du=i(Ov,"Automatic Differentiation"),Ov.forEach(o),Dv.forEach(o),cu=d(Ro),ki=s(Ro,"LI",{});var Av=r(ki);zs=s(Av,"A",{href:!0,rel:!0});var Nv=r(zs);pu=i(Nv,"Vectorization"),Nv.forEach(o),Av.forEach(o),mu=d(Ro),Ei=s(Ro,"LI",{});var Vv=r(Ei);js=s(Vv,"A",{href:!0,rel:!0});var Sv=r(js);hu=i(Sv,"Parallelization"),Sv.forEach(o),Vv.forEach(o),Ro.forEach(o),fu=d(N),se=s(N,"DIV",{class:!0});var nt=r(se);g(Fs.$$.fragment,nt),uu=d(nt),Bt=s(nt,"P",{});var aa=r(Bt);gu=i(aa,"The "),Mi=s(aa,"CODE",{});var Wv=r(Mi);_u=i(Wv,"FlaxCLIPPreTrainedModel"),Wv.forEach(o),vu=i(aa," forward method, overrides the "),zi=s(aa,"CODE",{});var Bv=r(zi);bu=i(Bv,"__call__"),Bv.forEach(o),Pu=i(aa," special method."),aa.forEach(o),yu=d(nt),g(Oo.$$.fragment,nt),Tu=d(nt),ji=s(nt,"P",{});var Uv=r(ji);Iu=i(Uv,"Example:"),Uv.forEach(o),Cu=d(nt),g(qs.$$.fragment,nt),nt.forEach(o),Lu=d(N),Ne=s(N,"DIV",{class:!0});var ia=r(Ne);g(Ds.$$.fragment,ia),xu=d(ia),Fi=s(ia,"P",{});var Rv=r(Fi);wu=i(Rv,"Examples:"),Rv.forEach(o),$u=d(ia),g(Os.$$.fragment,ia),ia.forEach(o),ku=d(N),Ve=s(N,"DIV",{class:!0});var la=r(Ve);g(As.$$.fragment,la),Eu=d(la),qi=s(la,"P",{});var Hv=r(qi);Mu=i(Hv,"Examples:"),Hv.forEach(o),zu=d(la),g(Ns.$$.fragment,la),la.forEach(o),N.forEach(o),jl=d(t),Ut=s(t,"H2",{class:!0});var Ld=r(Ut);Ao=s(Ld,"A",{id:!0,class:!0,href:!0});var Kv=r(Ao);Di=s(Kv,"SPAN",{});var Gv=r(Di);g(Vs.$$.fragment,Gv),Gv.forEach(o),Kv.forEach(o),ju=d(Ld),Oi=s(Ld,"SPAN",{});var Jv=r(Oi);Fu=i(Jv,"FlaxCLIPTextModel"),Jv.forEach(o),Ld.forEach(o),Fl=d(t),Rt=s(t,"DIV",{class:!0});var xd=r(Rt);g(Ss.$$.fragment,xd),qu=d(xd),re=s(xd,"DIV",{class:!0});var st=r(re);g(Ws.$$.fragment,st),Du=d(st),Ht=s(st,"P",{});var da=r(Ht);Ou=i(da,"The "),Ai=s(da,"CODE",{});var Xv=r(Ai);Au=i(Xv,"FlaxCLIPTextPreTrainedModel"),Xv.forEach(o),Nu=i(da," forward method, overrides the "),Ni=s(da,"CODE",{});var Zv=r(Ni);Vu=i(Zv,"__call__"),Zv.forEach(o),Su=i(da," special method."),da.forEach(o),Wu=d(st),g(No.$$.fragment,st),Bu=d(st),Vi=s(st,"P",{});var Qv=r(Vi);Uu=i(Qv,"Example:"),Qv.forEach(o),Ru=d(st),g(Bs.$$.fragment,st),st.forEach(o),xd.forEach(o),ql=d(t),Kt=s(t,"H2",{class:!0});var wd=r(Kt);Vo=s(wd,"A",{id:!0,class:!0,href:!0});var Yv=r(Vo);Si=s(Yv,"SPAN",{});var eb=r(Si);g(Us.$$.fragment,eb),eb.forEach(o),Yv.forEach(o),Hu=d(wd),Wi=s(wd,"SPAN",{});var tb=r(Wi);Ku=i(tb,"FlaxCLIPVisionModel"),tb.forEach(o),wd.forEach(o),Dl=d(t),Gt=s(t,"DIV",{class:!0});var $d=r(Gt);g(Rs.$$.fragment,$d),Gu=d($d),ae=s($d,"DIV",{class:!0});var rt=r(ae);g(Hs.$$.fragment,rt),Ju=d(rt),Jt=s(rt,"P",{});var ca=r(Jt);Xu=i(ca,"The "),Bi=s(ca,"CODE",{});var ob=r(Bi);Zu=i(ob,"FlaxCLIPVisionPreTrainedModel"),ob.forEach(o),Qu=i(ca," forward method, overrides the "),Ui=s(ca,"CODE",{});var nb=r(Ui);Yu=i(nb,"__call__"),nb.forEach(o),eg=i(ca," special method."),ca.forEach(o),tg=d(rt),g(So.$$.fragment,rt),og=d(rt),Ri=s(rt,"P",{});var sb=r(Ri);ng=i(sb,"Example:"),sb.forEach(o),sg=d(rt),g(Ks.$$.fragment,rt),rt.forEach(o),$d.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Lb)),c(I,"id","clip"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#clip"),c(y,"class","relative group"),c(ue,"id","overview"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#overview"),c(z,"class","relative group"),c(Le,"href","https://arxiv.org/abs/2103.00020"),c(Le,"rel","nofollow"),c(ge,"id","usage"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#usage"),c(O,"class","relative group"),c(j,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(lt,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),c(ve,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),c(be,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Oe,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),c(ar,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),c(ir,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(tn,"href","https://huggingface.co/valhalla"),c(tn,"rel","nofollow"),c(on,"href","https://github.com/openai/CLIP"),c(on,"rel","nofollow"),c(oo,"id","transformers.CLIPConfig"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.CLIPConfig"),c(dt,"class","relative group"),c(lr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),c(dr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(cr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(pr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(mr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),c(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ro,"id","transformers.CLIPTextConfig"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.CLIPTextConfig"),c(pt,"class","relative group"),c(hr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(cn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(cn,"rel","nofollow"),c(fr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ur,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"id","transformers.CLIPVisionConfig"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.CLIPVisionConfig"),c(ft,"class","relative group"),c(gr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(fn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(fn,"rel","nofollow"),c(_r,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(vr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.CLIPTokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.CLIPTokenizer"),c(_t,"class","relative group"),c(br,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(po,"id","transformers.CLIPTokenizerFast"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.CLIPTokenizerFast"),c(vt,"class","relative group"),c(Tr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ho,"id","transformers.CLIPFeatureExtractor"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.CLIPFeatureExtractor"),c(bt,"class","relative group"),c(Cr,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(go,"id","transformers.CLIPProcessor"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.CLIPProcessor"),c(yt,"class","relative group"),c(Lr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),c(xr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(wr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast"),c($r,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor.decode"),c(kr,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),c(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Er,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),c(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(bo,"id","transformers.CLIPModel"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.CLIPModel"),c(Tt,"class","relative group"),c(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rn,"rel","nofollow"),c(Mr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(jr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Io,"id","transformers.CLIPTextModel"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.CLIPTextModel"),c(xt,"class","relative group"),c(Fr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Lo,"id","transformers.CLIPVisionModel"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.CLIPVisionModel"),c(kt,"class","relative group"),c(qr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"),c(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wo,"id","transformers.TFCLIPModel"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFCLIPModel"),c(zt,"class","relative group"),c(Dr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(cs,"rel","nofollow"),c(Or,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ar,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),c(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Nr,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zo,"id","transformers.TFCLIPTextModel"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.TFCLIPTextModel"),c(Dt,"class","relative group"),c(Vr,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"),c(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fo,"id","transformers.TFCLIPVisionModel"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFCLIPVisionModel"),c(Nt,"class","relative group"),c(Sr,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"),c(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Do,"id","transformers.FlaxCLIPModel"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.FlaxCLIPModel"),c(Wt,"class","relative group"),c(Wr,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ks,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ks,"rel","nofollow"),c(Es,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Es,"rel","nofollow"),c(Ms,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ms,"rel","nofollow"),c(zs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(zs,"rel","nofollow"),c(js,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(js,"rel","nofollow"),c(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ao,"id","transformers.FlaxCLIPTextModel"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.FlaxCLIPTextModel"),c(Ut,"class","relative group"),c(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vo,"id","transformers.FlaxCLIPVisionModel"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.FlaxCLIPVisionModel"),c(Kt,"class","relative group"),c(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,p),h(t,L,m),h(t,y,m),e(y,I),e(I,C),_(T,C,null),e(y,f),e(y,x),e(x,Ho),h(t,at,m),h(t,z,m),e(z,ue),e(ue,Te),_(Ie,Te,null),e(z,Ko),e(z,Ce),e(Ce,Go),h(t,Xt,m),h(t,pe,m),e(pe,ze),e(pe,Le),e(Le,Zt),e(pe,H),h(t,me,m),h(t,je,m),e(je,it),h(t,Qt,m),h(t,Fe,m),e(Fe,xe),e(xe,Jo),h(t,Yt,m),h(t,O,m),e(O,ge),e(ge,we),_($e,we,null),e(O,Xo),e(O,ke),e(ke,Zo),h(t,eo,m),h(t,he,m),e(he,Qo),h(t,qe,m),h(t,_e,m),e(_e,$),e(_e,j),e(j,to),e(_e,Qs),h(t,Yo,m),h(t,E,m),e(E,Ys),e(E,lt),e(lt,er),e(E,De),e(E,ve),e(ve,tr),e(E,or),e(E,be),e(be,nr),e(E,sr),e(E,Oe),e(Oe,rr),e(E,kd),e(E,ar),e(ar,Ed),e(E,Md),e(E,ir),e(ir,zd),e(E,jd),h(t,nl,m),_(en,t,m),h(t,sl,m),h(t,Ae,m),e(Ae,Fd),e(Ae,tn),e(tn,qd),e(Ae,Dd),e(Ae,on),e(on,Od),e(Ae,Ad),h(t,rl,m),h(t,dt,m),e(dt,oo),e(oo,pa),_(nn,pa,null),e(dt,Nd),e(dt,ma),e(ma,Vd),h(t,al,m),h(t,fe,m),_(sn,fe,null),e(fe,Sd),e(fe,no),e(no,lr),e(lr,Wd),e(no,Bd),e(no,dr),e(dr,Ud),e(no,Rd),e(fe,Hd),e(fe,ct),e(ct,Kd),e(ct,cr),e(cr,Gd),e(ct,Jd),e(ct,pr),e(pr,Xd),e(ct,Zd),e(fe,Qd),e(fe,so),_(rn,so,null),e(so,Yd),e(so,an),e(an,ec),e(an,mr),e(mr,tc),e(an,oc),h(t,il,m),h(t,pt,m),e(pt,ro),e(ro,ha),_(ln,ha,null),e(pt,nc),e(pt,fa),e(fa,sc),h(t,ll,m),h(t,V,m),_(dn,V,null),e(V,rc),e(V,mt),e(mt,ac),e(mt,hr),e(hr,ic),e(mt,lc),e(mt,cn),e(cn,dc),e(mt,cc),e(V,pc),e(V,ht),e(ht,mc),e(ht,fr),e(fr,hc),e(ht,fc),e(ht,ur),e(ur,uc),e(ht,gc),e(V,_c),e(V,ua),e(ua,vc),e(V,bc),_(pn,V,null),h(t,dl,m),h(t,ft,m),e(ft,ao),e(ao,ga),_(mn,ga,null),e(ft,Pc),e(ft,_a),e(_a,yc),h(t,cl,m),h(t,S,m),_(hn,S,null),e(S,Tc),e(S,ut),e(ut,Ic),e(ut,gr),e(gr,Cc),e(ut,Lc),e(ut,fn),e(fn,xc),e(ut,wc),e(S,$c),e(S,gt),e(gt,kc),e(gt,_r),e(_r,Ec),e(gt,Mc),e(gt,vr),e(vr,zc),e(gt,jc),e(S,Fc),e(S,va),e(va,qc),e(S,Dc),_(un,S,null),h(t,pl,m),h(t,_t,m),e(_t,io),e(io,ba),_(gn,ba,null),e(_t,Oc),e(_t,Pa),e(Pa,Ac),h(t,ml,m),h(t,F,m),_(_n,F,null),e(F,Nc),e(F,ya),e(ya,Vc),e(F,Sc),e(F,vn),e(vn,Wc),e(vn,br),e(br,Bc),e(vn,Uc),e(F,Rc),e(F,Pe),_(bn,Pe,null),e(Pe,Hc),e(Pe,Ta),e(Ta,Kc),e(Pe,Gc),e(Pe,Ia),e(Ia,Pr),e(Pr,Jc),e(Pr,Ca),e(Ca,Xc),e(Pe,Zc),e(Pe,La),e(La,Qc),e(F,Yc),e(F,lo),_(Pn,lo,null),e(lo,ep),e(lo,yn),e(yn,tp),e(yn,xa),e(xa,op),e(yn,np),e(F,sp),e(F,co),_(Tn,co,null),e(co,rp),e(co,wa),e(wa,ap),e(F,ip),e(F,yr),_(In,yr,null),h(t,hl,m),h(t,vt,m),e(vt,po),e(po,$a),_(Cn,$a,null),e(vt,lp),e(vt,ka),e(ka,dp),h(t,fl,m),h(t,W,m),_(Ln,W,null),e(W,cp),e(W,xn),e(xn,pp),e(xn,Ea),e(Ea,mp),e(xn,hp),e(W,fp),e(W,wn),e(wn,up),e(wn,Tr),e(Tr,gp),e(wn,_p),e(W,vp),e(W,ye),_($n,ye,null),e(ye,bp),e(ye,Ma),e(Ma,Pp),e(ye,yp),e(ye,za),e(za,Ir),e(Ir,Tp),e(Ir,ja),e(ja,Ip),e(ye,Cp),e(ye,Fa),e(Fa,Lp),e(W,xp),e(W,mo),_(kn,mo,null),e(mo,wp),e(mo,qa),e(qa,$p),h(t,ul,m),h(t,bt,m),e(bt,ho),e(ho,Da),_(En,Da,null),e(bt,kp),e(bt,Oa),e(Oa,Ep),h(t,gl,m),h(t,B,m),_(Mn,B,null),e(B,Mp),e(B,Aa),e(Aa,zp),e(B,jp),e(B,zn),e(zn,Fp),e(zn,Cr),e(Cr,qp),e(zn,Dp),e(B,Op),e(B,fo),_(jn,fo,null),e(fo,Ap),e(fo,Fn),e(Fn,Np),e(Fn,Na),e(Na,Vp),e(Fn,Sp),e(B,Wp),e(B,uo),_(qn,uo,null),e(uo,Bp),e(uo,Pt),e(Pt,Up),e(Pt,Va),e(Va,Rp),e(Pt,Hp),e(Pt,Sa),e(Sa,Kp),e(Pt,Gp),h(t,_l,m),h(t,yt,m),e(yt,go),e(go,Wa),_(Dn,Wa,null),e(yt,Jp),e(yt,Ba),e(Ba,Xp),h(t,vl,m),h(t,U,m),_(On,U,null),e(U,Zp),e(U,Ua),e(Ua,Qp),e(U,Yp),e(U,K),e(K,Lr),e(Lr,em),e(K,tm),e(K,xr),e(xr,om),e(K,nm),e(K,wr),e(wr,sm),e(K,rm),e(K,Ra),e(Ra,am),e(K,im),e(K,$r),e($r,lm),e(K,dm),e(U,cm),e(U,_o),_(An,_o,null),e(_o,pm),e(_o,Nn),e(Nn,mm),e(Nn,kr),e(kr,hm),e(Nn,fm),e(U,um),e(U,vo),_(Vn,vo,null),e(vo,gm),e(vo,Sn),e(Sn,_m),e(Sn,Er),e(Er,vm),e(Sn,bm),h(t,bl,m),h(t,Tt,m),e(Tt,bo),e(bo,Ha),_(Wn,Ha,null),e(Tt,Pm),e(Tt,Ka),e(Ka,ym),h(t,Pl,m),h(t,R,m),_(Bn,R,null),e(R,Tm),e(R,Un),e(Un,Im),e(Un,Rn),e(Rn,Cm),e(Un,Lm),e(R,xm),e(R,G),_(Hn,G,null),e(G,wm),e(G,It),e(It,$m),e(It,Mr),e(Mr,km),e(It,Em),e(It,Ga),e(Ga,Mm),e(It,zm),e(G,jm),_(Po,G,null),e(G,Fm),e(G,Ja),e(Ja,qm),e(G,Dm),_(Kn,G,null),e(R,Om),e(R,J),_(Gn,J,null),e(J,Am),e(J,Ct),e(Ct,Nm),e(Ct,zr),e(zr,Vm),e(Ct,Sm),e(Ct,Xa),e(Xa,Wm),e(Ct,Bm),e(J,Um),_(yo,J,null),e(J,Rm),e(J,Za),e(Za,Hm),e(J,Km),_(Jn,J,null),e(R,Gm),e(R,X),_(Xn,X,null),e(X,Jm),e(X,Lt),e(Lt,Xm),e(Lt,jr),e(jr,Zm),e(Lt,Qm),e(Lt,Qa),e(Qa,Ym),e(Lt,eh),e(X,th),_(To,X,null),e(X,oh),e(X,Ya),e(Ya,nh),e(X,sh),_(Zn,X,null),h(t,yl,m),h(t,xt,m),e(xt,Io),e(Io,ei),_(Qn,ei,null),e(xt,rh),e(xt,ti),e(ti,ah),h(t,Tl,m),h(t,wt,m),_(Yn,wt,null),e(wt,ih),e(wt,Z),_(es,Z,null),e(Z,lh),e(Z,$t),e($t,dh),e($t,Fr),e(Fr,ch),e($t,ph),e($t,oi),e(oi,mh),e($t,hh),e(Z,fh),_(Co,Z,null),e(Z,uh),e(Z,ni),e(ni,gh),e(Z,_h),_(ts,Z,null),h(t,Il,m),h(t,kt,m),e(kt,Lo),e(Lo,si),_(os,si,null),e(kt,vh),e(kt,ri),e(ri,bh),h(t,Cl,m),h(t,Et,m),_(ns,Et,null),e(Et,Ph),e(Et,Q),_(ss,Q,null),e(Q,yh),e(Q,Mt),e(Mt,Th),e(Mt,qr),e(qr,Ih),e(Mt,Ch),e(Mt,ai),e(ai,Lh),e(Mt,xh),e(Q,wh),_(xo,Q,null),e(Q,$h),e(Q,ii),e(ii,kh),e(Q,Eh),_(rs,Q,null),h(t,Ll,m),h(t,zt,m),e(zt,wo),e(wo,li),_(as,li,null),e(zt,Mh),e(zt,di),e(di,zh),h(t,xl,m),h(t,q,m),_(is,q,null),e(q,jh),e(q,ls),e(ls,Fh),e(ls,Dr),e(Dr,qh),e(ls,Dh),e(q,Oh),e(q,ds),e(ds,Ah),e(ds,cs),e(cs,Nh),e(ds,Vh),e(q,Sh),_($o,q,null),e(q,Wh),e(q,Y),_(ps,Y,null),e(Y,Bh),e(Y,jt),e(jt,Uh),e(jt,Or),e(Or,Rh),e(jt,Hh),e(jt,ci),e(ci,Kh),e(jt,Gh),e(Y,Jh),_(ko,Y,null),e(Y,Xh),e(Y,pi),e(pi,Zh),e(Y,Qh),_(ms,Y,null),e(q,Yh),e(q,ee),_(hs,ee,null),e(ee,ef),e(ee,Ft),e(Ft,tf),e(Ft,Ar),e(Ar,of),e(Ft,nf),e(Ft,mi),e(mi,sf),e(Ft,rf),e(ee,af),_(Eo,ee,null),e(ee,lf),e(ee,hi),e(hi,df),e(ee,cf),_(fs,ee,null),e(q,pf),e(q,te),_(us,te,null),e(te,mf),e(te,qt),e(qt,hf),e(qt,Nr),e(Nr,ff),e(qt,uf),e(qt,fi),e(fi,gf),e(qt,_f),e(te,vf),_(Mo,te,null),e(te,bf),e(te,ui),e(ui,Pf),e(te,yf),_(gs,te,null),h(t,wl,m),h(t,Dt,m),e(Dt,zo),e(zo,gi),_(_s,gi,null),e(Dt,Tf),e(Dt,_i),e(_i,If),h(t,$l,m),h(t,Ot,m),_(vs,Ot,null),e(Ot,Cf),e(Ot,oe),_(bs,oe,null),e(oe,Lf),e(oe,At),e(At,xf),e(At,Vr),e(Vr,wf),e(At,$f),e(At,vi),e(vi,kf),e(At,Ef),e(oe,Mf),_(jo,oe,null),e(oe,zf),e(oe,bi),e(bi,jf),e(oe,Ff),_(Ps,oe,null),h(t,kl,m),h(t,Nt,m),e(Nt,Fo),e(Fo,Pi),_(ys,Pi,null),e(Nt,qf),e(Nt,yi),e(yi,Df),h(t,El,m),h(t,Vt,m),_(Ts,Vt,null),e(Vt,Of),e(Vt,ne),_(Is,ne,null),e(ne,Af),e(ne,St),e(St,Nf),e(St,Sr),e(Sr,Vf),e(St,Sf),e(St,Ti),e(Ti,Wf),e(St,Bf),e(ne,Uf),_(qo,ne,null),e(ne,Rf),e(ne,Ii),e(Ii,Hf),e(ne,Kf),_(Cs,ne,null),h(t,Ml,m),h(t,Wt,m),e(Wt,Do),e(Do,Ci),_(Ls,Ci,null),e(Wt,Gf),e(Wt,Li),e(Li,Jf),h(t,zl,m),h(t,M,m),_(xs,M,null),e(M,Xf),e(M,ws),e(ws,Zf),e(ws,Wr),e(Wr,Qf),e(ws,Yf),e(M,eu),e(M,$s),e($s,tu),e($s,ks),e(ks,ou),e($s,nu),e(M,su),e(M,xi),e(xi,ru),e(M,au),e(M,Ee),e(Ee,wi),e(wi,Es),e(Es,iu),e(Ee,lu),e(Ee,$i),e($i,Ms),e(Ms,du),e(Ee,cu),e(Ee,ki),e(ki,zs),e(zs,pu),e(Ee,mu),e(Ee,Ei),e(Ei,js),e(js,hu),e(M,fu),e(M,se),_(Fs,se,null),e(se,uu),e(se,Bt),e(Bt,gu),e(Bt,Mi),e(Mi,_u),e(Bt,vu),e(Bt,zi),e(zi,bu),e(Bt,Pu),e(se,yu),_(Oo,se,null),e(se,Tu),e(se,ji),e(ji,Iu),e(se,Cu),_(qs,se,null),e(M,Lu),e(M,Ne),_(Ds,Ne,null),e(Ne,xu),e(Ne,Fi),e(Fi,wu),e(Ne,$u),_(Os,Ne,null),e(M,ku),e(M,Ve),_(As,Ve,null),e(Ve,Eu),e(Ve,qi),e(qi,Mu),e(Ve,zu),_(Ns,Ve,null),h(t,jl,m),h(t,Ut,m),e(Ut,Ao),e(Ao,Di),_(Vs,Di,null),e(Ut,ju),e(Ut,Oi),e(Oi,Fu),h(t,Fl,m),h(t,Rt,m),_(Ss,Rt,null),e(Rt,qu),e(Rt,re),_(Ws,re,null),e(re,Du),e(re,Ht),e(Ht,Ou),e(Ht,Ai),e(Ai,Au),e(Ht,Nu),e(Ht,Ni),e(Ni,Vu),e(Ht,Su),e(re,Wu),_(No,re,null),e(re,Bu),e(re,Vi),e(Vi,Uu),e(re,Ru),_(Bs,re,null),h(t,ql,m),h(t,Kt,m),e(Kt,Vo),e(Vo,Si),_(Us,Si,null),e(Kt,Hu),e(Kt,Wi),e(Wi,Ku),h(t,Dl,m),h(t,Gt,m),_(Rs,Gt,null),e(Gt,Gu),e(Gt,ae),_(Hs,ae,null),e(ae,Ju),e(ae,Jt),e(Jt,Xu),e(Jt,Bi),e(Bi,Zu),e(Jt,Qu),e(Jt,Ui),e(Ui,Yu),e(Jt,eg),e(ae,tg),_(So,ae,null),e(ae,og),e(ae,Ri),e(Ri,ng),e(ae,sg),_(Ks,ae,null),Ol=!0},p(t,[m]){const Gs={};m&2&&(Gs.$$scope={dirty:m,ctx:t}),Po.$set(Gs);const Hi={};m&2&&(Hi.$$scope={dirty:m,ctx:t}),yo.$set(Hi);const Ki={};m&2&&(Ki.$$scope={dirty:m,ctx:t}),To.$set(Ki);const Gi={};m&2&&(Gi.$$scope={dirty:m,ctx:t}),Co.$set(Gi);const Js={};m&2&&(Js.$$scope={dirty:m,ctx:t}),xo.$set(Js);const Ji={};m&2&&(Ji.$$scope={dirty:m,ctx:t}),$o.$set(Ji);const Xi={};m&2&&(Xi.$$scope={dirty:m,ctx:t}),ko.$set(Xi);const Zi={};m&2&&(Zi.$$scope={dirty:m,ctx:t}),Eo.$set(Zi);const Xs={};m&2&&(Xs.$$scope={dirty:m,ctx:t}),Mo.$set(Xs);const Qi={};m&2&&(Qi.$$scope={dirty:m,ctx:t}),jo.$set(Qi);const Yi={};m&2&&(Yi.$$scope={dirty:m,ctx:t}),qo.$set(Yi);const el={};m&2&&(el.$$scope={dirty:m,ctx:t}),Oo.$set(el);const tl={};m&2&&(tl.$$scope={dirty:m,ctx:t}),No.$set(tl);const Zs={};m&2&&(Zs.$$scope={dirty:m,ctx:t}),So.$set(Zs)},i(t){Ol||(v(T.$$.fragment,t),v(Ie.$$.fragment,t),v($e.$$.fragment,t),v(en.$$.fragment,t),v(nn.$$.fragment,t),v(sn.$$.fragment,t),v(rn.$$.fragment,t),v(ln.$$.fragment,t),v(dn.$$.fragment,t),v(pn.$$.fragment,t),v(mn.$$.fragment,t),v(hn.$$.fragment,t),v(un.$$.fragment,t),v(gn.$$.fragment,t),v(_n.$$.fragment,t),v(bn.$$.fragment,t),v(Pn.$$.fragment,t),v(Tn.$$.fragment,t),v(In.$$.fragment,t),v(Cn.$$.fragment,t),v(Ln.$$.fragment,t),v($n.$$.fragment,t),v(kn.$$.fragment,t),v(En.$$.fragment,t),v(Mn.$$.fragment,t),v(jn.$$.fragment,t),v(qn.$$.fragment,t),v(Dn.$$.fragment,t),v(On.$$.fragment,t),v(An.$$.fragment,t),v(Vn.$$.fragment,t),v(Wn.$$.fragment,t),v(Bn.$$.fragment,t),v(Hn.$$.fragment,t),v(Po.$$.fragment,t),v(Kn.$$.fragment,t),v(Gn.$$.fragment,t),v(yo.$$.fragment,t),v(Jn.$$.fragment,t),v(Xn.$$.fragment,t),v(To.$$.fragment,t),v(Zn.$$.fragment,t),v(Qn.$$.fragment,t),v(Yn.$$.fragment,t),v(es.$$.fragment,t),v(Co.$$.fragment,t),v(ts.$$.fragment,t),v(os.$$.fragment,t),v(ns.$$.fragment,t),v(ss.$$.fragment,t),v(xo.$$.fragment,t),v(rs.$$.fragment,t),v(as.$$.fragment,t),v(is.$$.fragment,t),v($o.$$.fragment,t),v(ps.$$.fragment,t),v(ko.$$.fragment,t),v(ms.$$.fragment,t),v(hs.$$.fragment,t),v(Eo.$$.fragment,t),v(fs.$$.fragment,t),v(us.$$.fragment,t),v(Mo.$$.fragment,t),v(gs.$$.fragment,t),v(_s.$$.fragment,t),v(vs.$$.fragment,t),v(bs.$$.fragment,t),v(jo.$$.fragment,t),v(Ps.$$.fragment,t),v(ys.$$.fragment,t),v(Ts.$$.fragment,t),v(Is.$$.fragment,t),v(qo.$$.fragment,t),v(Cs.$$.fragment,t),v(Ls.$$.fragment,t),v(xs.$$.fragment,t),v(Fs.$$.fragment,t),v(Oo.$$.fragment,t),v(qs.$$.fragment,t),v(Ds.$$.fragment,t),v(Os.$$.fragment,t),v(As.$$.fragment,t),v(Ns.$$.fragment,t),v(Vs.$$.fragment,t),v(Ss.$$.fragment,t),v(Ws.$$.fragment,t),v(No.$$.fragment,t),v(Bs.$$.fragment,t),v(Us.$$.fragment,t),v(Rs.$$.fragment,t),v(Hs.$$.fragment,t),v(So.$$.fragment,t),v(Ks.$$.fragment,t),Ol=!0)},o(t){b(T.$$.fragment,t),b(Ie.$$.fragment,t),b($e.$$.fragment,t),b(en.$$.fragment,t),b(nn.$$.fragment,t),b(sn.$$.fragment,t),b(rn.$$.fragment,t),b(ln.$$.fragment,t),b(dn.$$.fragment,t),b(pn.$$.fragment,t),b(mn.$$.fragment,t),b(hn.$$.fragment,t),b(un.$$.fragment,t),b(gn.$$.fragment,t),b(_n.$$.fragment,t),b(bn.$$.fragment,t),b(Pn.$$.fragment,t),b(Tn.$$.fragment,t),b(In.$$.fragment,t),b(Cn.$$.fragment,t),b(Ln.$$.fragment,t),b($n.$$.fragment,t),b(kn.$$.fragment,t),b(En.$$.fragment,t),b(Mn.$$.fragment,t),b(jn.$$.fragment,t),b(qn.$$.fragment,t),b(Dn.$$.fragment,t),b(On.$$.fragment,t),b(An.$$.fragment,t),b(Vn.$$.fragment,t),b(Wn.$$.fragment,t),b(Bn.$$.fragment,t),b(Hn.$$.fragment,t),b(Po.$$.fragment,t),b(Kn.$$.fragment,t),b(Gn.$$.fragment,t),b(yo.$$.fragment,t),b(Jn.$$.fragment,t),b(Xn.$$.fragment,t),b(To.$$.fragment,t),b(Zn.$$.fragment,t),b(Qn.$$.fragment,t),b(Yn.$$.fragment,t),b(es.$$.fragment,t),b(Co.$$.fragment,t),b(ts.$$.fragment,t),b(os.$$.fragment,t),b(ns.$$.fragment,t),b(ss.$$.fragment,t),b(xo.$$.fragment,t),b(rs.$$.fragment,t),b(as.$$.fragment,t),b(is.$$.fragment,t),b($o.$$.fragment,t),b(ps.$$.fragment,t),b(ko.$$.fragment,t),b(ms.$$.fragment,t),b(hs.$$.fragment,t),b(Eo.$$.fragment,t),b(fs.$$.fragment,t),b(us.$$.fragment,t),b(Mo.$$.fragment,t),b(gs.$$.fragment,t),b(_s.$$.fragment,t),b(vs.$$.fragment,t),b(bs.$$.fragment,t),b(jo.$$.fragment,t),b(Ps.$$.fragment,t),b(ys.$$.fragment,t),b(Ts.$$.fragment,t),b(Is.$$.fragment,t),b(qo.$$.fragment,t),b(Cs.$$.fragment,t),b(Ls.$$.fragment,t),b(xs.$$.fragment,t),b(Fs.$$.fragment,t),b(Oo.$$.fragment,t),b(qs.$$.fragment,t),b(Ds.$$.fragment,t),b(Os.$$.fragment,t),b(As.$$.fragment,t),b(Ns.$$.fragment,t),b(Vs.$$.fragment,t),b(Ss.$$.fragment,t),b(Ws.$$.fragment,t),b(No.$$.fragment,t),b(Bs.$$.fragment,t),b(Us.$$.fragment,t),b(Rs.$$.fragment,t),b(Hs.$$.fragment,t),b(So.$$.fragment,t),b(Ks.$$.fragment,t),Ol=!1},d(t){o(p),t&&o(L),t&&o(y),P(T),t&&o(at),t&&o(z),P(Ie),t&&o(Xt),t&&o(pe),t&&o(me),t&&o(je),t&&o(Qt),t&&o(Fe),t&&o(Yt),t&&o(O),P($e),t&&o(eo),t&&o(he),t&&o(qe),t&&o(_e),t&&o(Yo),t&&o(E),t&&o(nl),P(en,t),t&&o(sl),t&&o(Ae),t&&o(rl),t&&o(dt),P(nn),t&&o(al),t&&o(fe),P(sn),P(rn),t&&o(il),t&&o(pt),P(ln),t&&o(ll),t&&o(V),P(dn),P(pn),t&&o(dl),t&&o(ft),P(mn),t&&o(cl),t&&o(S),P(hn),P(un),t&&o(pl),t&&o(_t),P(gn),t&&o(ml),t&&o(F),P(_n),P(bn),P(Pn),P(Tn),P(In),t&&o(hl),t&&o(vt),P(Cn),t&&o(fl),t&&o(W),P(Ln),P($n),P(kn),t&&o(ul),t&&o(bt),P(En),t&&o(gl),t&&o(B),P(Mn),P(jn),P(qn),t&&o(_l),t&&o(yt),P(Dn),t&&o(vl),t&&o(U),P(On),P(An),P(Vn),t&&o(bl),t&&o(Tt),P(Wn),t&&o(Pl),t&&o(R),P(Bn),P(Hn),P(Po),P(Kn),P(Gn),P(yo),P(Jn),P(Xn),P(To),P(Zn),t&&o(yl),t&&o(xt),P(Qn),t&&o(Tl),t&&o(wt),P(Yn),P(es),P(Co),P(ts),t&&o(Il),t&&o(kt),P(os),t&&o(Cl),t&&o(Et),P(ns),P(ss),P(xo),P(rs),t&&o(Ll),t&&o(zt),P(as),t&&o(xl),t&&o(q),P(is),P($o),P(ps),P(ko),P(ms),P(hs),P(Eo),P(fs),P(us),P(Mo),P(gs),t&&o(wl),t&&o(Dt),P(_s),t&&o($l),t&&o(Ot),P(vs),P(bs),P(jo),P(Ps),t&&o(kl),t&&o(Nt),P(ys),t&&o(El),t&&o(Vt),P(Ts),P(Is),P(qo),P(Cs),t&&o(Ml),t&&o(Wt),P(Ls),t&&o(zl),t&&o(M),P(xs),P(Fs),P(Oo),P(qs),P(Ds),P(Os),P(As),P(Ns),t&&o(jl),t&&o(Ut),P(Vs),t&&o(Fl),t&&o(Rt),P(Ss),P(Ws),P(No),P(Bs),t&&o(ql),t&&o(Kt),P(Us),t&&o(Dl),t&&o(Gt),P(Rs),P(Hs),P(So),P(Ks)}}}const Lb={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function xb(k){return db(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zb extends rb{constructor(p){super();ab(this,p,xb,Cb,ib,{})}}export{zb as default,Lb as metadata};
