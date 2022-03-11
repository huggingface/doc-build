import{S as rP,i as aP,s as iP,e as s,k as l,w as g,t as a,M as lP,c as n,d as o,m as d,a as r,x as _,h as i,b as c,F as e,g as h,y as v,q as P,o as T,B as I}from"../../chunks/vendor-4833417e.js";import{T as ce}from"../../chunks/Tip-fffd6df1.js";import{D as w}from"../../chunks/Docstring-4f315ed9.js";import{C as N}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as D}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function dP(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function cP(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function pP(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function mP(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function hP(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function fP(x){let p,L,u,b,y,C,f,k,Ho,at,M,ue,Ce,be,Ko,ye,Go,Xt,pe,Me,Le,Zt,H,me,je,it,Qt,Fe,ke,Jo,Yt,A,ge,we,$e,Xo,xe,Zo,eo,he,Qo,qe,_e;return{c(){p=s("p"),L=a("TF 2.0 models accepts two formats as inputs:"),u=l(),b=s("ul"),y=s("li"),C=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),k=s("li"),Ho=a("having all inputs as a list, tuple or dict in the first positional arguments."),at=l(),M=s("p"),ue=a("This second option is useful when using "),Ce=s("code"),be=a("tf.keras.Model.fit"),Ko=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=s("code"),Go=a("model(inputs)"),Xt=a("."),pe=l(),Me=s("p"),Le=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Zt=l(),H=s("ul"),me=s("li"),je=a("a single Tensor with "),it=s("code"),Qt=a("input_ids"),Fe=a(" only and nothing else: "),ke=s("code"),Jo=a("model(input_ids)"),Yt=l(),A=s("li"),ge=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=s("code"),$e=a("model([input_ids, attention_mask])"),Xo=a(" or "),xe=s("code"),Zo=a("model([input_ids, attention_mask, token_type_ids])"),eo=l(),he=s("li"),Qo=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=s("code"),_e=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l($){p=n($,"P",{});var j=r(p);L=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(o),u=d($),b=n($,"UL",{});var to=r(b);y=n(to,"LI",{});var Qn=r(y);C=i(Qn,"having all inputs as keyword arguments (like PyTorch models), or"),Qn.forEach(o),f=d(to),k=n(to,"LI",{});var Yo=r(k);Ho=i(Yo,"having all inputs as a list, tuple or dict in the first positional arguments."),Yo.forEach(o),to.forEach(o),at=d($),M=n($,"P",{});var E=r(M);ue=i(E,"This second option is useful when using "),Ce=n(E,"CODE",{});var Yn=r(Ce);be=i(Yn,"tf.keras.Model.fit"),Yn.forEach(o),Ko=i(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=n(E,"CODE",{});var lt=r(ye);Go=i(lt,"model(inputs)"),lt.forEach(o),Xt=i(E,"."),E.forEach(o),pe=d($),Me=n($,"P",{});var er=r(Me);Le=i(er,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),er.forEach(o),Zt=d($),H=n($,"UL",{});var De=r(H);me=n(De,"LI",{});var ve=r(me);je=i(ve,"a single Tensor with "),it=n(ve,"CODE",{});var tr=r(it);Qt=i(tr,"input_ids"),tr.forEach(o),Fe=i(ve," only and nothing else: "),ke=n(ve,"CODE",{});var or=r(ke);Jo=i(or,"model(input_ids)"),or.forEach(o),ve.forEach(o),Yt=d(De),A=n(De,"LI",{});var Pe=r(A);ge=i(Pe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=n(Pe,"CODE",{});var sr=r(we);$e=i(sr,"model([input_ids, attention_mask])"),sr.forEach(o),Xo=i(Pe," or "),xe=n(Pe,"CODE",{});var nr=r(xe);Zo=i(nr,"model([input_ids, attention_mask, token_type_ids])"),nr.forEach(o),Pe.forEach(o),eo=d(De),he=n(De,"LI",{});var Ae=r(he);Qo=i(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=n(Ae,"CODE",{});var rr=r(qe);_e=i(rr,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),rr.forEach(o),Ae.forEach(o),De.forEach(o)},m($,j){h($,p,j),e(p,L),h($,u,j),h($,b,j),e(b,y),e(y,C),e(b,f),e(b,k),e(k,Ho),h($,at,j),h($,M,j),e(M,ue),e(M,Ce),e(Ce,be),e(M,Ko),e(M,ye),e(ye,Go),e(M,Xt),h($,pe,j),h($,Me,j),e(Me,Le),h($,Zt,j),h($,H,j),e(H,me),e(me,je),e(me,it),e(it,Qt),e(me,Fe),e(me,ke),e(ke,Jo),e(H,Yt),e(H,A),e(A,ge),e(A,we),e(we,$e),e(A,Xo),e(A,xe),e(xe,Zo),e(H,eo),e(H,he),e(he,Qo),e(he,qe),e(qe,_e)},d($){$&&o(p),$&&o(u),$&&o(b),$&&o(at),$&&o(M),$&&o(pe),$&&o(Me),$&&o(Zt),$&&o(H)}}}function uP(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function gP(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function _P(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function vP(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function PP(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function TP(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function IP(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function CP(x){let p,L,u,b,y;return{c(){p=s("p"),L=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=a("Module"),y=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=r(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=r(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function bP(x){let p,L,u,b,y,C,f,k,Ho,at,M,ue,Ce,be,Ko,ye,Go,Xt,pe,Me,Le,Zt,H,me,je,it,Qt,Fe,ke,Jo,Yt,A,ge,we,$e,Xo,xe,Zo,eo,he,Qo,qe,_e,$,j,to,Qn,Yo,E,Yn,lt,er,De,ve,tr,or,Pe,sr,nr,Ae,rr,xd,ar,Ed,zd,ir,Md,jd,sl,es,nl,Ne,Fd,ts,qd,Dd,os,Ad,Nd,rl,dt,oo,pa,ss,Od,ma,Vd,al,fe,ns,Sd,so,lr,Wd,Bd,dr,Ud,Rd,Hd,ct,Kd,cr,Gd,Jd,pr,Xd,Zd,Qd,no,rs,Yd,as,ec,mr,tc,oc,il,pt,ro,ha,is,sc,fa,nc,ll,V,ls,rc,mt,ac,hr,ic,lc,ds,dc,cc,pc,ht,mc,fr,hc,fc,ur,uc,gc,_c,ua,vc,Pc,cs,dl,ft,ao,ga,ps,Tc,_a,Ic,cl,S,ms,Cc,ut,bc,gr,yc,Lc,hs,kc,wc,$c,gt,xc,_r,Ec,zc,vr,Mc,jc,Fc,va,qc,Dc,fs,pl,_t,io,Pa,us,Ac,Ta,Nc,ml,F,gs,Oc,Ia,Vc,Sc,_s,Wc,Pr,Bc,Uc,Rc,Te,vs,Hc,Ca,Kc,Gc,ba,Tr,Jc,ya,Xc,Zc,La,Qc,Yc,lo,Ps,ep,Ts,tp,ka,op,sp,np,co,Is,rp,wa,ap,ip,Ir,Cs,hl,vt,po,$a,bs,lp,xa,dp,fl,W,ys,cp,Ls,pp,Ea,mp,hp,fp,ks,up,Cr,gp,_p,vp,Ie,ws,Pp,za,Tp,Ip,Ma,br,Cp,ja,bp,yp,Fa,Lp,kp,mo,$s,wp,qa,$p,ul,Pt,ho,Da,xs,xp,Aa,Ep,gl,B,Es,zp,Na,Mp,jp,zs,Fp,yr,qp,Dp,Ap,fo,Ms,Np,js,Op,Oa,Vp,Sp,Wp,uo,Fs,Bp,Tt,Up,Va,Rp,Hp,Sa,Kp,Gp,_l,It,go,Wa,qs,Jp,Ba,Xp,vl,U,Ds,Zp,Ua,Qp,Yp,K,Lr,em,tm,kr,om,sm,wr,nm,rm,Ra,am,im,$r,lm,dm,cm,_o,As,pm,Ns,mm,xr,hm,fm,um,vo,Os,gm,Vs,_m,Er,vm,Pm,Pl,Ct,Po,Ha,Ss,Tm,Ka,Im,Tl,R,Ws,Cm,Bs,bm,Us,ym,Lm,km,G,Rs,wm,bt,$m,zr,xm,Em,Ga,zm,Mm,jm,To,Fm,Ja,qm,Dm,Hs,Am,J,Ks,Nm,yt,Om,Mr,Vm,Sm,Xa,Wm,Bm,Um,Io,Rm,Za,Hm,Km,Gs,Gm,X,Js,Jm,Lt,Xm,jr,Zm,Qm,Qa,Ym,eh,th,Co,oh,Ya,sh,nh,Xs,Il,kt,bo,ei,Zs,rh,ti,ah,Cl,wt,Qs,ih,Z,Ys,lh,$t,dh,Fr,ch,ph,oi,mh,hh,fh,yo,uh,si,gh,_h,en,bl,xt,Lo,ni,tn,vh,ri,Ph,yl,Et,on,Th,Q,sn,Ih,zt,Ch,qr,bh,yh,ai,Lh,kh,wh,ko,$h,ii,xh,Eh,nn,Ll,Mt,wo,li,rn,zh,di,Mh,kl,q,an,jh,ln,Fh,Dr,qh,Dh,Ah,dn,Nh,cn,Oh,Vh,Sh,$o,Wh,Y,pn,Bh,jt,Uh,Ar,Rh,Hh,ci,Kh,Gh,Jh,xo,Xh,pi,Zh,Qh,mn,Yh,ee,hn,ef,Ft,tf,Nr,of,sf,mi,nf,rf,af,Eo,lf,hi,df,cf,fn,pf,te,un,mf,qt,hf,Or,ff,uf,fi,gf,_f,vf,zo,Pf,ui,Tf,If,gn,wl,Dt,Mo,gi,_n,Cf,_i,bf,$l,At,vn,yf,oe,Pn,Lf,Nt,kf,Vr,wf,$f,vi,xf,Ef,zf,jo,Mf,Pi,jf,Ff,Tn,xl,Ot,Fo,Ti,In,qf,Ii,Df,El,Vt,Cn,Af,se,bn,Nf,St,Of,Sr,Vf,Sf,Ci,Wf,Bf,Uf,qo,Rf,bi,Hf,Kf,yn,zl,Wt,Do,yi,Ln,Gf,Li,Jf,Ml,z,kn,Xf,wn,Zf,Wr,Qf,Yf,eu,$n,tu,xn,ou,su,nu,ki,ru,au,Ee,wi,En,iu,lu,$i,zn,du,cu,xi,Mn,pu,mu,Ei,jn,hu,fu,ne,Fn,uu,Bt,gu,zi,_u,vu,Mi,Pu,Tu,Iu,Ao,Cu,ji,bu,yu,qn,Lu,Oe,Dn,ku,Fi,wu,$u,An,xu,Ve,Nn,Eu,qi,zu,Mu,On,jl,Ut,No,Di,Vn,ju,Ai,Fu,Fl,Rt,Sn,qu,re,Wn,Du,Ht,Au,Ni,Nu,Ou,Oi,Vu,Su,Wu,Oo,Bu,Vi,Uu,Ru,Bn,ql,Kt,Vo,Si,Un,Hu,Wi,Ku,Dl,Gt,Rn,Gu,ae,Hn,Ju,Jt,Xu,Bi,Zu,Qu,Ui,Yu,eg,tg,So,og,Ri,sg,ng,Kn,Al;return C=new D({}),be=new D({}),$e=new D({}),es=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),ss=new D({}),ns=new w({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/configuration_clip.py#L209",parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),rs=new w({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/configuration_clip.py#L258",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),is=new D({}),ls=new w({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/configuration_clip.py#L31",parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel">CLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
testing).`,name:"initializer_factor"}]}}),cs=new N({props:{code:`from transformers import CLIPTextModel, CLIPTextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ps=new D({}),ms=new w({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/configuration_clip.py#L122",parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}]}}),fs=new N({props:{code:`from transformers import CLIPVisionModel, CLIPVisionConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),us=new D({}),gs=new w({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip.py#L100",parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),vs=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip.py#L186",parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ps=new w({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip.py#L213",parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Is=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip.py#L241",parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Cs=new w({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip.py#L336"}}),bs=new D({}),ys=new w({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip_fast.py#L48",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),ws=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip_fast.py#L121",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$s=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip_fast.py#L148",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xs=new D({}),Es=new w({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 3"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/feature_extraction_clip.py#L31",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),Ms=new w({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/feature_extraction_clip.py#L159",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}]}}),Fs=new w({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = 3"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/feature_extraction_clip.py#L185",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}]}}),qs=new D({}),Ds=new w({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/processing_clip.py#L22",parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),As=new w({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/processing_clip.py#L95"}}),Os=new w({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/processing_clip.py#L102"}}),Ss=new D({}),Ws=new w({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L837",parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Rs=new w({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L952",parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new ce({props:{$$slots:{default:[dP]},$$scope:{ctx:x}}}),Hs=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Ks=new w({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L870",parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Io=new ce({props:{$$slots:{default:[cP]},$$scope:{ctx:x}}}),Gs=new N({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),Js=new w({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L910",parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Co=new ce({props:{$$slots:{default:[pP]},$$scope:{ctx:x}}}),Xs=new N({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Zs=new D({}),Qs=new w({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L673"}}),Ys=new w({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L688",parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new ce({props:{$$slots:{default:[mP]},$$scope:{ctx:x}}}),en=new N({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),tn=new D({}),on=new w({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L784"}}),sn=new w({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L797",parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new ce({props:{$$slots:{default:[hP]},$$scope:{ctx:x}}}),nn=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),rn=new D({}),an=new w({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1287",parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$o=new ce({props:{$$slots:{default:[fP]},$$scope:{ctx:x}}}),pn=new w({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1440",parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
  href="/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code>or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new ce({props:{$$slots:{default:[uP]},$$scope:{ctx:x}}}),mn=new N({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),hn=new w({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1333",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Eo=new ce({props:{$$slots:{default:[gP]},$$scope:{ctx:x}}}),fn=new N({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),un=new w({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1385",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code>for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),zo=new ce({props:{$$slots:{default:[_P]},$$scope:{ctx:x}}}),gn=new N({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),_n=new D({}),vn=new w({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1102"}}),Pn=new w({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1110",parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jo=new ce({props:{$$slots:{default:[vP]},$$scope:{ctx:x}}}),Tn=new N({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),In=new D({}),Cn=new w({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1176"}}),bn=new w({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1217",parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code>for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qo=new ce({props:{$$slots:{default:[PP]},$$scope:{ctx:x}}}),yn=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),Ln=new D({}),kn=new w({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L1108",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Fn=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L737",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new ce({props:{$$slots:{default:[TP]},$$scope:{ctx:x}}}),qn=new N({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Dn=new w({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPPreTrainedModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L782",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),An=new N({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),Nn=new w({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPPreTrainedModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L849",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),On=new N({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Vn=new D({}),Sn=new w({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L929"}}),Wn=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L604",parametersDescription:[{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new ce({props:{$$slots:{default:[IP]},$$scope:{ctx:x}}}),Bn=new N({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Un=new D({}),Rn=new w({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L982"}}),Hn=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L673",parametersDescription:[{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new ce({props:{$$slots:{default:[CP]},$$scope:{ctx:x}}}),Kn=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=s("meta"),L=l(),u=s("h1"),b=s("a"),y=s("span"),g(C.$$.fragment),f=l(),k=s("span"),Ho=a("CLIP"),at=l(),M=s("h2"),ue=s("a"),Ce=s("span"),g(be.$$.fragment),Ko=l(),ye=s("span"),Go=a("Overview"),Xt=l(),pe=s("p"),Me=a("The CLIP model was proposed in "),Le=s("a"),Zt=a("Learning Transferable Visual Models From Natural Language Supervision"),H=a(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),me=l(),je=s("p"),it=a("The abstract from the paper is the following:"),Qt=l(),Fe=s("p"),ke=s("em"),Jo=a(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Yt=l(),A=s("h2"),ge=s("a"),we=s("span"),g($e.$$.fragment),Xo=l(),xe=s("span"),Zo=a("Usage"),eo=l(),he=s("p"),Qo=a(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),qe=l(),_e=s("p"),$=a(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=s("a"),to=a("CLIPFeatureExtractor"),Qn=a(" can be used to resize (or rescale) and normalize images for the model."),Yo=l(),E=s("p"),Yn=a("The "),lt=s("a"),er=a("CLIPTokenizer"),De=a(" is used to encode the text. The "),ve=s("a"),tr=a("CLIPProcessor"),or=a(` wraps
`),Pe=s("a"),sr=a("CLIPFeatureExtractor"),nr=a(" and "),Ae=s("a"),rr=a("CLIPTokenizer"),xd=a(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ar=s("a"),Ed=a("CLIPProcessor"),zd=a(" and "),ir=s("a"),Md=a("CLIPModel"),jd=a("."),sl=l(),g(es.$$.fragment),nl=l(),Ne=s("p"),Fd=a("This model was contributed by "),ts=s("a"),qd=a("valhalla"),Dd=a(". The original code can be found "),os=s("a"),Ad=a("here"),Nd=a("."),rl=l(),dt=s("h2"),oo=s("a"),pa=s("span"),g(ss.$$.fragment),Od=l(),ma=s("span"),Vd=a("CLIPConfig"),al=l(),fe=s("div"),g(ns.$$.fragment),Sd=l(),so=s("p"),lr=s("a"),Wd=a("CLIPConfig"),Bd=a(" is the configuration class to store the configuration of a "),dr=s("a"),Ud=a("CLIPModel"),Rd=a(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Hd=l(),ct=s("p"),Kd=a("Configuration objects inherit from "),cr=s("a"),Gd=a("PretrainedConfig"),Jd=a(` and can be used to control the model outputs. Read the
documentation from `),pr=s("a"),Xd=a("PretrainedConfig"),Zd=a(" for more information."),Qd=l(),no=s("div"),g(rs.$$.fragment),Yd=l(),as=s("p"),ec=a("Instantiate a "),mr=s("a"),tc=a("CLIPConfig"),oc=a(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),il=l(),pt=s("h2"),ro=s("a"),ha=s("span"),g(is.$$.fragment),sc=l(),fa=s("span"),nc=a("CLIPTextConfig"),ll=l(),V=s("div"),g(ls.$$.fragment),rc=l(),mt=s("p"),ac=a("This is the configuration class to store the configuration of a "),hr=s("a"),ic=a("CLIPModel"),lc=a(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),ds=s("a"),dc=a("openai/clip-vit-base-patch32"),cc=a(" architecture."),pc=l(),ht=s("p"),mc=a("Configuration objects inherit from "),fr=s("a"),hc=a("PretrainedConfig"),fc=a(` and can be used to control the model outputs. Read the
documentation from `),ur=s("a"),uc=a("PretrainedConfig"),gc=a(" for more information."),_c=l(),ua=s("p"),vc=a("Example:"),Pc=l(),g(cs.$$.fragment),dl=l(),ft=s("h2"),ao=s("a"),ga=s("span"),g(ps.$$.fragment),Tc=l(),_a=s("span"),Ic=a("CLIPVisionConfig"),cl=l(),S=s("div"),g(ms.$$.fragment),Cc=l(),ut=s("p"),bc=a("This is the configuration class to store the configuration of a "),gr=s("a"),yc=a("CLIPModel"),Lc=a(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),hs=s("a"),kc=a("openai/clip-vit-base-patch32"),wc=a(" architecture."),$c=l(),gt=s("p"),xc=a("Configuration objects inherit from "),_r=s("a"),Ec=a("PretrainedConfig"),zc=a(` and can be used to control the model outputs. Read the
documentation from `),vr=s("a"),Mc=a("PretrainedConfig"),jc=a(" for more information."),Fc=l(),va=s("p"),qc=a("Example:"),Dc=l(),g(fs.$$.fragment),pl=l(),_t=s("h2"),io=s("a"),Pa=s("span"),g(us.$$.fragment),Ac=l(),Ta=s("span"),Nc=a("CLIPTokenizer"),ml=l(),F=s("div"),g(gs.$$.fragment),Oc=l(),Ia=s("p"),Vc=a("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Sc=l(),_s=s("p"),Wc=a("This tokenizer inherits from "),Pr=s("a"),Bc=a("PreTrainedTokenizer"),Uc=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rc=l(),Te=s("div"),g(vs.$$.fragment),Hc=l(),Ca=s("p"),Kc=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Gc=l(),ba=s("ul"),Tr=s("li"),Jc=a("single sequence: "),ya=s("code"),Xc=a("<|startoftext|> X <|endoftext|>"),Zc=l(),La=s("p"),Qc=a("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Yc=l(),lo=s("div"),g(Ps.$$.fragment),ep=l(),Ts=s("p"),tp=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ka=s("code"),op=a("prepare_for_model"),sp=a(" method."),np=l(),co=s("div"),g(Is.$$.fragment),rp=l(),wa=s("p"),ap=a(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ip=l(),Ir=s("div"),g(Cs.$$.fragment),hl=l(),vt=s("h2"),po=s("a"),$a=s("span"),g(bs.$$.fragment),lp=l(),xa=s("span"),dp=a("CLIPTokenizerFast"),fl=l(),W=s("div"),g(ys.$$.fragment),cp=l(),Ls=s("p"),pp=a("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ea=s("em"),mp=a("tokenizers"),hp=a(` library). Based on byte-level
Byte-Pair-Encoding.`),fp=l(),ks=s("p"),up=a("This tokenizer inherits from "),Cr=s("a"),gp=a("PreTrainedTokenizerFast"),_p=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),vp=l(),Ie=s("div"),g(ws.$$.fragment),Pp=l(),za=s("p"),Tp=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Ip=l(),Ma=s("ul"),br=s("li"),Cp=a("single sequence: "),ja=s("code"),bp=a("<|startoftext|> X <|endoftext|>"),yp=l(),Fa=s("p"),Lp=a("Pairs of sequences are not the expected use case, but they will be handled without a separator."),kp=l(),mo=s("div"),g($s.$$.fragment),wp=l(),qa=s("p"),$p=a(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ul=l(),Pt=s("h2"),ho=s("a"),Da=s("span"),g(xs.$$.fragment),xp=l(),Aa=s("span"),Ep=a("CLIPFeatureExtractor"),gl=l(),B=s("div"),g(Es.$$.fragment),zp=l(),Na=s("p"),Mp=a("Constructs a CLIP feature extractor."),jp=l(),zs=s("p"),Fp=a("This feature extractor inherits from "),yr=s("a"),qp=a("FeatureExtractionMixin"),Dp=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ap=l(),fo=s("div"),g(Ms.$$.fragment),Np=l(),js=s("p"),Op=a("Crops "),Oa=s("code"),Vp=a("image"),Sp=a(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Wp=l(),uo=s("div"),g(Fs.$$.fragment),Bp=l(),Tt=s("p"),Up=a("Resizes "),Va=s("code"),Rp=a("image"),Hp=a(". Note that this will trigger a conversion of "),Sa=s("code"),Kp=a("image"),Gp=a(" to a PIL Image."),_l=l(),It=s("h2"),go=s("a"),Wa=s("span"),g(qs.$$.fragment),Jp=l(),Ba=s("span"),Xp=a("CLIPProcessor"),vl=l(),U=s("div"),g(Ds.$$.fragment),Zp=l(),Ua=s("p"),Qp=a("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Yp=l(),K=s("p"),Lr=s("a"),em=a("CLIPProcessor"),tm=a(" offers all the functionalities of "),kr=s("a"),om=a("CLIPFeatureExtractor"),sm=a(" and "),wr=s("a"),nm=a("CLIPTokenizerFast"),rm=a(`. See the
`),Ra=s("code"),am=a("__call__()"),im=a("and "),$r=s("a"),lm=a("decode()"),dm=a(" for more information."),cm=l(),_o=s("div"),g(As.$$.fragment),pm=l(),Ns=s("p"),mm=a("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),xr=s("a"),hm=a("batch_decode()"),fm=a(`. Please
refer to the docstring of this method for more information.`),um=l(),vo=s("div"),g(Os.$$.fragment),gm=l(),Vs=s("p"),_m=a("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Er=s("a"),vm=a("decode()"),Pm=a(`. Please refer to
the docstring of this method for more information.`),Pl=l(),Ct=s("h2"),Po=s("a"),Ha=s("span"),g(Ss.$$.fragment),Tm=l(),Ka=s("span"),Im=a("CLIPModel"),Tl=l(),R=s("div"),g(Ws.$$.fragment),Cm=l(),Bs=s("p"),bm=a("This model is a PyTorch "),Us=s("a"),ym=a("torch.nn.Module"),Lm=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),km=l(),G=s("div"),g(Rs.$$.fragment),wm=l(),bt=s("p"),$m=a("The "),zr=s("a"),xm=a("CLIPModel"),Em=a(" forward method, overrides the "),Ga=s("code"),zm=a("__call__"),Mm=a(" special method."),jm=l(),g(To.$$.fragment),Fm=l(),Ja=s("p"),qm=a("Examples:"),Dm=l(),g(Hs.$$.fragment),Am=l(),J=s("div"),g(Ks.$$.fragment),Nm=l(),yt=s("p"),Om=a("The "),Mr=s("a"),Vm=a("CLIPModel"),Sm=a(" forward method, overrides the "),Xa=s("code"),Wm=a("__call__"),Bm=a(" special method."),Um=l(),g(Io.$$.fragment),Rm=l(),Za=s("p"),Hm=a("Examples:"),Km=l(),g(Gs.$$.fragment),Gm=l(),X=s("div"),g(Js.$$.fragment),Jm=l(),Lt=s("p"),Xm=a("The "),jr=s("a"),Zm=a("CLIPModel"),Qm=a(" forward method, overrides the "),Qa=s("code"),Ym=a("__call__"),eh=a(" special method."),th=l(),g(Co.$$.fragment),oh=l(),Ya=s("p"),sh=a("Examples:"),nh=l(),g(Xs.$$.fragment),Il=l(),kt=s("h2"),bo=s("a"),ei=s("span"),g(Zs.$$.fragment),rh=l(),ti=s("span"),ah=a("CLIPTextModel"),Cl=l(),wt=s("div"),g(Qs.$$.fragment),ih=l(),Z=s("div"),g(Ys.$$.fragment),lh=l(),$t=s("p"),dh=a("The "),Fr=s("a"),ch=a("CLIPTextModel"),ph=a(" forward method, overrides the "),oi=s("code"),mh=a("__call__"),hh=a(" special method."),fh=l(),g(yo.$$.fragment),uh=l(),si=s("p"),gh=a("Examples:"),_h=l(),g(en.$$.fragment),bl=l(),xt=s("h2"),Lo=s("a"),ni=s("span"),g(tn.$$.fragment),vh=l(),ri=s("span"),Ph=a("CLIPVisionModel"),yl=l(),Et=s("div"),g(on.$$.fragment),Th=l(),Q=s("div"),g(sn.$$.fragment),Ih=l(),zt=s("p"),Ch=a("The "),qr=s("a"),bh=a("CLIPVisionModel"),yh=a(" forward method, overrides the "),ai=s("code"),Lh=a("__call__"),kh=a(" special method."),wh=l(),g(ko.$$.fragment),$h=l(),ii=s("p"),xh=a("Examples:"),Eh=l(),g(nn.$$.fragment),Ll=l(),Mt=s("h2"),wo=s("a"),li=s("span"),g(rn.$$.fragment),zh=l(),di=s("span"),Mh=a("TFCLIPModel"),kl=l(),q=s("div"),g(an.$$.fragment),jh=l(),ln=s("p"),Fh=a("This model inherits from "),Dr=s("a"),qh=a("TFPreTrainedModel"),Dh=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ah=l(),dn=s("p"),Nh=a("This model is also a "),cn=s("a"),Oh=a("tf.keras.Model"),Vh=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sh=l(),g($o.$$.fragment),Wh=l(),Y=s("div"),g(pn.$$.fragment),Bh=l(),jt=s("p"),Uh=a("The "),Ar=s("a"),Rh=a("TFCLIPModel"),Hh=a(" forward method, overrides the "),ci=s("code"),Kh=a("__call__"),Gh=a(" special method."),Jh=l(),g(xo.$$.fragment),Xh=l(),pi=s("p"),Zh=a("Examples:"),Qh=l(),g(mn.$$.fragment),Yh=l(),ee=s("div"),g(hn.$$.fragment),ef=l(),Ft=s("p"),tf=a("The "),Nr=s("a"),of=a("TFCLIPModel"),sf=a(" forward method, overrides the "),mi=s("code"),nf=a("__call__"),rf=a(" special method."),af=l(),g(Eo.$$.fragment),lf=l(),hi=s("p"),df=a("Examples:"),cf=l(),g(fn.$$.fragment),pf=l(),te=s("div"),g(un.$$.fragment),mf=l(),qt=s("p"),hf=a("The "),Or=s("a"),ff=a("TFCLIPModel"),uf=a(" forward method, overrides the "),fi=s("code"),gf=a("__call__"),_f=a(" special method."),vf=l(),g(zo.$$.fragment),Pf=l(),ui=s("p"),Tf=a("Examples:"),If=l(),g(gn.$$.fragment),wl=l(),Dt=s("h2"),Mo=s("a"),gi=s("span"),g(_n.$$.fragment),Cf=l(),_i=s("span"),bf=a("TFCLIPTextModel"),$l=l(),At=s("div"),g(vn.$$.fragment),yf=l(),oe=s("div"),g(Pn.$$.fragment),Lf=l(),Nt=s("p"),kf=a("The "),Vr=s("a"),wf=a("TFCLIPTextModel"),$f=a(" forward method, overrides the "),vi=s("code"),xf=a("__call__"),Ef=a(" special method."),zf=l(),g(jo.$$.fragment),Mf=l(),Pi=s("p"),jf=a("Examples:"),Ff=l(),g(Tn.$$.fragment),xl=l(),Ot=s("h2"),Fo=s("a"),Ti=s("span"),g(In.$$.fragment),qf=l(),Ii=s("span"),Df=a("TFCLIPVisionModel"),El=l(),Vt=s("div"),g(Cn.$$.fragment),Af=l(),se=s("div"),g(bn.$$.fragment),Nf=l(),St=s("p"),Of=a("The "),Sr=s("a"),Vf=a("TFCLIPVisionModel"),Sf=a(" forward method, overrides the "),Ci=s("code"),Wf=a("__call__"),Bf=a(" special method."),Uf=l(),g(qo.$$.fragment),Rf=l(),bi=s("p"),Hf=a("Examples:"),Kf=l(),g(yn.$$.fragment),zl=l(),Wt=s("h2"),Do=s("a"),yi=s("span"),g(Ln.$$.fragment),Gf=l(),Li=s("span"),Jf=a("FlaxCLIPModel"),Ml=l(),z=s("div"),g(kn.$$.fragment),Xf=l(),wn=s("p"),Zf=a("This model inherits from "),Wr=s("a"),Qf=a("FlaxPreTrainedModel"),Yf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eu=l(),$n=s("p"),tu=a("This model is also a Flax Linen "),xn=s("a"),ou=a("flax.linen.Module"),su=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nu=l(),ki=s("p"),ru=a("Finally, this model supports inherent JAX features such as:"),au=l(),Ee=s("ul"),wi=s("li"),En=s("a"),iu=a("Just-In-Time (JIT) compilation"),lu=l(),$i=s("li"),zn=s("a"),du=a("Automatic Differentiation"),cu=l(),xi=s("li"),Mn=s("a"),pu=a("Vectorization"),mu=l(),Ei=s("li"),jn=s("a"),hu=a("Parallelization"),fu=l(),ne=s("div"),g(Fn.$$.fragment),uu=l(),Bt=s("p"),gu=a("The "),zi=s("code"),_u=a("FlaxCLIPPreTrainedModel"),vu=a("forward method, overrides the "),Mi=s("code"),Pu=a("__call__"),Tu=a(" special method."),Iu=l(),g(Ao.$$.fragment),Cu=l(),ji=s("p"),bu=a("Example:"),yu=l(),g(qn.$$.fragment),Lu=l(),Oe=s("div"),g(Dn.$$.fragment),ku=l(),Fi=s("p"),wu=a("Examples:"),$u=l(),g(An.$$.fragment),xu=l(),Ve=s("div"),g(Nn.$$.fragment),Eu=l(),qi=s("p"),zu=a("Examples:"),Mu=l(),g(On.$$.fragment),jl=l(),Ut=s("h2"),No=s("a"),Di=s("span"),g(Vn.$$.fragment),ju=l(),Ai=s("span"),Fu=a("FlaxCLIPTextModel"),Fl=l(),Rt=s("div"),g(Sn.$$.fragment),qu=l(),re=s("div"),g(Wn.$$.fragment),Du=l(),Ht=s("p"),Au=a("The "),Ni=s("code"),Nu=a("FlaxCLIPTextPreTrainedModel"),Ou=a("forward method, overrides the "),Oi=s("code"),Vu=a("__call__"),Su=a(" special method."),Wu=l(),g(Oo.$$.fragment),Bu=l(),Vi=s("p"),Uu=a("Example:"),Ru=l(),g(Bn.$$.fragment),ql=l(),Kt=s("h2"),Vo=s("a"),Si=s("span"),g(Un.$$.fragment),Hu=l(),Wi=s("span"),Ku=a("FlaxCLIPVisionModel"),Dl=l(),Gt=s("div"),g(Rn.$$.fragment),Gu=l(),ae=s("div"),g(Hn.$$.fragment),Ju=l(),Jt=s("p"),Xu=a("The "),Bi=s("code"),Zu=a("FlaxCLIPVisionPreTrainedModel"),Qu=a("forward method, overrides the "),Ui=s("code"),Yu=a("__call__"),eg=a(" special method."),tg=l(),g(So.$$.fragment),og=l(),Ri=s("p"),sg=a("Example:"),ng=l(),g(Kn.$$.fragment),this.h()},l(t){const m=lP('[data-svelte="svelte-1phssyn"]',document.head);p=n(m,"META",{name:!0,content:!0}),m.forEach(o),L=d(t),u=n(t,"H1",{class:!0});var Gn=r(u);b=n(Gn,"A",{id:!0,class:!0,href:!0});var Hi=r(b);y=n(Hi,"SPAN",{});var Ki=r(y);_(C.$$.fragment,Ki),Ki.forEach(o),Hi.forEach(o),f=d(Gn),k=n(Gn,"SPAN",{});var Gi=r(k);Ho=i(Gi,"CLIP"),Gi.forEach(o),Gn.forEach(o),at=d(t),M=n(t,"H2",{class:!0});var Jn=r(M);ue=n(Jn,"A",{id:!0,class:!0,href:!0});var Ji=r(ue);Ce=n(Ji,"SPAN",{});var Xi=r(Ce);_(be.$$.fragment,Xi),Xi.forEach(o),Ji.forEach(o),Ko=d(Jn),ye=n(Jn,"SPAN",{});var Zi=r(ye);Go=i(Zi,"Overview"),Zi.forEach(o),Jn.forEach(o),Xt=d(t),pe=n(t,"P",{});var Xn=r(pe);Me=i(Xn,"The CLIP model was proposed in "),Le=n(Xn,"A",{href:!0,rel:!0});var Qi=r(Le);Zt=i(Qi,"Learning Transferable Visual Models From Natural Language Supervision"),Qi.forEach(o),H=i(Xn,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Xn.forEach(o),me=d(t),je=n(t,"P",{});var Yi=r(je);it=i(Yi,"The abstract from the paper is the following:"),Yi.forEach(o),Qt=d(t),Fe=n(t,"P",{});var el=r(Fe);ke=n(el,"EM",{});var tl=r(ke);Jo=i(tl,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),tl.forEach(o),el.forEach(o),Yt=d(t),A=n(t,"H2",{class:!0});var Zn=r(A);ge=n(Zn,"A",{id:!0,class:!0,href:!0});var ig=r(ge);we=n(ig,"SPAN",{});var lg=r(we);_($e.$$.fragment,lg),lg.forEach(o),ig.forEach(o),Xo=d(Zn),xe=n(Zn,"SPAN",{});var dg=r(xe);Zo=i(dg,"Usage"),dg.forEach(o),Zn.forEach(o),eo=d(t),he=n(t,"P",{});var cg=r(he);Qo=i(cg,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),cg.forEach(o),qe=d(t),_e=n(t,"P",{});var Nl=r(_e);$=i(Nl,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=n(Nl,"A",{href:!0});var pg=r(j);to=i(pg,"CLIPFeatureExtractor"),pg.forEach(o),Qn=i(Nl," can be used to resize (or rescale) and normalize images for the model."),Nl.forEach(o),Yo=d(t),E=n(t,"P",{});var ie=r(E);Yn=i(ie,"The "),lt=n(ie,"A",{href:!0});var mg=r(lt);er=i(mg,"CLIPTokenizer"),mg.forEach(o),De=i(ie," is used to encode the text. The "),ve=n(ie,"A",{href:!0});var hg=r(ve);tr=i(hg,"CLIPProcessor"),hg.forEach(o),or=i(ie,` wraps
`),Pe=n(ie,"A",{href:!0});var fg=r(Pe);sr=i(fg,"CLIPFeatureExtractor"),fg.forEach(o),nr=i(ie," and "),Ae=n(ie,"A",{href:!0});var ug=r(Ae);rr=i(ug,"CLIPTokenizer"),ug.forEach(o),xd=i(ie,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ar=n(ie,"A",{href:!0});var gg=r(ar);Ed=i(gg,"CLIPProcessor"),gg.forEach(o),zd=i(ie," and "),ir=n(ie,"A",{href:!0});var _g=r(ir);Md=i(_g,"CLIPModel"),_g.forEach(o),jd=i(ie,"."),ie.forEach(o),sl=d(t),_(es.$$.fragment,t),nl=d(t),Ne=n(t,"P",{});var Br=r(Ne);Fd=i(Br,"This model was contributed by "),ts=n(Br,"A",{href:!0,rel:!0});var vg=r(ts);qd=i(vg,"valhalla"),vg.forEach(o),Dd=i(Br,". The original code can be found "),os=n(Br,"A",{href:!0,rel:!0});var Pg=r(os);Ad=i(Pg,"here"),Pg.forEach(o),Nd=i(Br,"."),Br.forEach(o),rl=d(t),dt=n(t,"H2",{class:!0});var Ol=r(dt);oo=n(Ol,"A",{id:!0,class:!0,href:!0});var Tg=r(oo);pa=n(Tg,"SPAN",{});var Ig=r(pa);_(ss.$$.fragment,Ig),Ig.forEach(o),Tg.forEach(o),Od=d(Ol),ma=n(Ol,"SPAN",{});var Cg=r(ma);Vd=i(Cg,"CLIPConfig"),Cg.forEach(o),Ol.forEach(o),al=d(t),fe=n(t,"DIV",{class:!0});var Wo=r(fe);_(ns.$$.fragment,Wo),Sd=d(Wo),so=n(Wo,"P",{});var ol=r(so);lr=n(ol,"A",{href:!0});var bg=r(lr);Wd=i(bg,"CLIPConfig"),bg.forEach(o),Bd=i(ol," is the configuration class to store the configuration of a "),dr=n(ol,"A",{href:!0});var yg=r(dr);Ud=i(yg,"CLIPModel"),yg.forEach(o),Rd=i(ol,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),ol.forEach(o),Hd=d(Wo),ct=n(Wo,"P",{});var Ur=r(ct);Kd=i(Ur,"Configuration objects inherit from "),cr=n(Ur,"A",{href:!0});var Lg=r(cr);Gd=i(Lg,"PretrainedConfig"),Lg.forEach(o),Jd=i(Ur,` and can be used to control the model outputs. Read the
documentation from `),pr=n(Ur,"A",{href:!0});var kg=r(pr);Xd=i(kg,"PretrainedConfig"),kg.forEach(o),Zd=i(Ur," for more information."),Ur.forEach(o),Qd=d(Wo),no=n(Wo,"DIV",{class:!0});var Vl=r(no);_(rs.$$.fragment,Vl),Yd=d(Vl),as=n(Vl,"P",{});var Sl=r(as);ec=i(Sl,"Instantiate a "),mr=n(Sl,"A",{href:!0});var wg=r(mr);tc=i(wg,"CLIPConfig"),wg.forEach(o),oc=i(Sl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Sl.forEach(o),Vl.forEach(o),Wo.forEach(o),il=d(t),pt=n(t,"H2",{class:!0});var Wl=r(pt);ro=n(Wl,"A",{id:!0,class:!0,href:!0});var $g=r(ro);ha=n($g,"SPAN",{});var xg=r(ha);_(is.$$.fragment,xg),xg.forEach(o),$g.forEach(o),sc=d(Wl),fa=n(Wl,"SPAN",{});var Eg=r(fa);nc=i(Eg,"CLIPTextConfig"),Eg.forEach(o),Wl.forEach(o),ll=d(t),V=n(t,"DIV",{class:!0});var Se=r(V);_(ls.$$.fragment,Se),rc=d(Se),mt=n(Se,"P",{});var Rr=r(mt);ac=i(Rr,"This is the configuration class to store the configuration of a "),hr=n(Rr,"A",{href:!0});var zg=r(hr);ic=i(zg,"CLIPModel"),zg.forEach(o),lc=i(Rr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),ds=n(Rr,"A",{href:!0,rel:!0});var Mg=r(ds);dc=i(Mg,"openai/clip-vit-base-patch32"),Mg.forEach(o),cc=i(Rr," architecture."),Rr.forEach(o),pc=d(Se),ht=n(Se,"P",{});var Hr=r(ht);mc=i(Hr,"Configuration objects inherit from "),fr=n(Hr,"A",{href:!0});var jg=r(fr);hc=i(jg,"PretrainedConfig"),jg.forEach(o),fc=i(Hr,` and can be used to control the model outputs. Read the
documentation from `),ur=n(Hr,"A",{href:!0});var Fg=r(ur);uc=i(Fg,"PretrainedConfig"),Fg.forEach(o),gc=i(Hr," for more information."),Hr.forEach(o),_c=d(Se),ua=n(Se,"P",{});var qg=r(ua);vc=i(qg,"Example:"),qg.forEach(o),Pc=d(Se),_(cs.$$.fragment,Se),Se.forEach(o),dl=d(t),ft=n(t,"H2",{class:!0});var Bl=r(ft);ao=n(Bl,"A",{id:!0,class:!0,href:!0});var Dg=r(ao);ga=n(Dg,"SPAN",{});var Ag=r(ga);_(ps.$$.fragment,Ag),Ag.forEach(o),Dg.forEach(o),Tc=d(Bl),_a=n(Bl,"SPAN",{});var Ng=r(_a);Ic=i(Ng,"CLIPVisionConfig"),Ng.forEach(o),Bl.forEach(o),cl=d(t),S=n(t,"DIV",{class:!0});var We=r(S);_(ms.$$.fragment,We),Cc=d(We),ut=n(We,"P",{});var Kr=r(ut);bc=i(Kr,"This is the configuration class to store the configuration of a "),gr=n(Kr,"A",{href:!0});var Og=r(gr);yc=i(Og,"CLIPModel"),Og.forEach(o),Lc=i(Kr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),hs=n(Kr,"A",{href:!0,rel:!0});var Vg=r(hs);kc=i(Vg,"openai/clip-vit-base-patch32"),Vg.forEach(o),wc=i(Kr," architecture."),Kr.forEach(o),$c=d(We),gt=n(We,"P",{});var Gr=r(gt);xc=i(Gr,"Configuration objects inherit from "),_r=n(Gr,"A",{href:!0});var Sg=r(_r);Ec=i(Sg,"PretrainedConfig"),Sg.forEach(o),zc=i(Gr,` and can be used to control the model outputs. Read the
documentation from `),vr=n(Gr,"A",{href:!0});var Wg=r(vr);Mc=i(Wg,"PretrainedConfig"),Wg.forEach(o),jc=i(Gr," for more information."),Gr.forEach(o),Fc=d(We),va=n(We,"P",{});var Bg=r(va);qc=i(Bg,"Example:"),Bg.forEach(o),Dc=d(We),_(fs.$$.fragment,We),We.forEach(o),pl=d(t),_t=n(t,"H2",{class:!0});var Ul=r(_t);io=n(Ul,"A",{id:!0,class:!0,href:!0});var Ug=r(io);Pa=n(Ug,"SPAN",{});var Rg=r(Pa);_(us.$$.fragment,Rg),Rg.forEach(o),Ug.forEach(o),Ac=d(Ul),Ta=n(Ul,"SPAN",{});var Hg=r(Ta);Nc=i(Hg,"CLIPTokenizer"),Hg.forEach(o),Ul.forEach(o),ml=d(t),F=n(t,"DIV",{class:!0});var le=r(F);_(gs.$$.fragment,le),Oc=d(le),Ia=n(le,"P",{});var Kg=r(Ia);Vc=i(Kg,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Kg.forEach(o),Sc=d(le),_s=n(le,"P",{});var Rl=r(_s);Wc=i(Rl,"This tokenizer inherits from "),Pr=n(Rl,"A",{href:!0});var Gg=r(Pr);Bc=i(Gg,"PreTrainedTokenizer"),Gg.forEach(o),Uc=i(Rl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rl.forEach(o),Rc=d(le),Te=n(le,"DIV",{class:!0});var Bo=r(Te);_(vs.$$.fragment,Bo),Hc=d(Bo),Ca=n(Bo,"P",{});var Jg=r(Ca);Kc=i(Jg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Jg.forEach(o),Gc=d(Bo),ba=n(Bo,"UL",{});var Xg=r(ba);Tr=n(Xg,"LI",{});var rg=r(Tr);Jc=i(rg,"single sequence: "),ya=n(rg,"CODE",{});var Zg=r(ya);Xc=i(Zg,"<|startoftext|> X <|endoftext|>"),Zg.forEach(o),rg.forEach(o),Xg.forEach(o),Zc=d(Bo),La=n(Bo,"P",{});var Qg=r(La);Qc=i(Qg,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Qg.forEach(o),Bo.forEach(o),Yc=d(le),lo=n(le,"DIV",{class:!0});var Hl=r(lo);_(Ps.$$.fragment,Hl),ep=d(Hl),Ts=n(Hl,"P",{});var Kl=r(Ts);tp=i(Kl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ka=n(Kl,"CODE",{});var Yg=r(ka);op=i(Yg,"prepare_for_model"),Yg.forEach(o),sp=i(Kl," method."),Kl.forEach(o),Hl.forEach(o),np=d(le),co=n(le,"DIV",{class:!0});var Gl=r(co);_(Is.$$.fragment,Gl),rp=d(Gl),wa=n(Gl,"P",{});var e_=r(wa);ap=i(e_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),e_.forEach(o),Gl.forEach(o),ip=d(le),Ir=n(le,"DIV",{class:!0});var t_=r(Ir);_(Cs.$$.fragment,t_),t_.forEach(o),le.forEach(o),hl=d(t),vt=n(t,"H2",{class:!0});var Jl=r(vt);po=n(Jl,"A",{id:!0,class:!0,href:!0});var o_=r(po);$a=n(o_,"SPAN",{});var s_=r($a);_(bs.$$.fragment,s_),s_.forEach(o),o_.forEach(o),lp=d(Jl),xa=n(Jl,"SPAN",{});var n_=r(xa);dp=i(n_,"CLIPTokenizerFast"),n_.forEach(o),Jl.forEach(o),fl=d(t),W=n(t,"DIV",{class:!0});var Be=r(W);_(ys.$$.fragment,Be),cp=d(Be),Ls=n(Be,"P",{});var Xl=r(Ls);pp=i(Xl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ea=n(Xl,"EM",{});var r_=r(Ea);mp=i(r_,"tokenizers"),r_.forEach(o),hp=i(Xl,` library). Based on byte-level
Byte-Pair-Encoding.`),Xl.forEach(o),fp=d(Be),ks=n(Be,"P",{});var Zl=r(ks);up=i(Zl,"This tokenizer inherits from "),Cr=n(Zl,"A",{href:!0});var a_=r(Cr);gp=i(a_,"PreTrainedTokenizerFast"),a_.forEach(o),_p=i(Zl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Zl.forEach(o),vp=d(Be),Ie=n(Be,"DIV",{class:!0});var Uo=r(Ie);_(ws.$$.fragment,Uo),Pp=d(Uo),za=n(Uo,"P",{});var i_=r(za);Tp=i(i_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),i_.forEach(o),Ip=d(Uo),Ma=n(Uo,"UL",{});var l_=r(Ma);br=n(l_,"LI",{});var ag=r(br);Cp=i(ag,"single sequence: "),ja=n(ag,"CODE",{});var d_=r(ja);bp=i(d_,"<|startoftext|> X <|endoftext|>"),d_.forEach(o),ag.forEach(o),l_.forEach(o),yp=d(Uo),Fa=n(Uo,"P",{});var c_=r(Fa);Lp=i(c_,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),c_.forEach(o),Uo.forEach(o),kp=d(Be),mo=n(Be,"DIV",{class:!0});var Ql=r(mo);_($s.$$.fragment,Ql),wp=d(Ql),qa=n(Ql,"P",{});var p_=r(qa);$p=i(p_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),p_.forEach(o),Ql.forEach(o),Be.forEach(o),ul=d(t),Pt=n(t,"H2",{class:!0});var Yl=r(Pt);ho=n(Yl,"A",{id:!0,class:!0,href:!0});var m_=r(ho);Da=n(m_,"SPAN",{});var h_=r(Da);_(xs.$$.fragment,h_),h_.forEach(o),m_.forEach(o),xp=d(Yl),Aa=n(Yl,"SPAN",{});var f_=r(Aa);Ep=i(f_,"CLIPFeatureExtractor"),f_.forEach(o),Yl.forEach(o),gl=d(t),B=n(t,"DIV",{class:!0});var Ue=r(B);_(Es.$$.fragment,Ue),zp=d(Ue),Na=n(Ue,"P",{});var u_=r(Na);Mp=i(u_,"Constructs a CLIP feature extractor."),u_.forEach(o),jp=d(Ue),zs=n(Ue,"P",{});var ed=r(zs);Fp=i(ed,"This feature extractor inherits from "),yr=n(ed,"A",{href:!0});var g_=r(yr);qp=i(g_,"FeatureExtractionMixin"),g_.forEach(o),Dp=i(ed,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ed.forEach(o),Ap=d(Ue),fo=n(Ue,"DIV",{class:!0});var td=r(fo);_(Ms.$$.fragment,td),Np=d(td),js=n(td,"P",{});var od=r(js);Op=i(od,"Crops "),Oa=n(od,"CODE",{});var __=r(Oa);Vp=i(__,"image"),__.forEach(o),Sp=i(od,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),od.forEach(o),td.forEach(o),Wp=d(Ue),uo=n(Ue,"DIV",{class:!0});var sd=r(uo);_(Fs.$$.fragment,sd),Bp=d(sd),Tt=n(sd,"P",{});var Jr=r(Tt);Up=i(Jr,"Resizes "),Va=n(Jr,"CODE",{});var v_=r(Va);Rp=i(v_,"image"),v_.forEach(o),Hp=i(Jr,". Note that this will trigger a conversion of "),Sa=n(Jr,"CODE",{});var P_=r(Sa);Kp=i(P_,"image"),P_.forEach(o),Gp=i(Jr," to a PIL Image."),Jr.forEach(o),sd.forEach(o),Ue.forEach(o),_l=d(t),It=n(t,"H2",{class:!0});var nd=r(It);go=n(nd,"A",{id:!0,class:!0,href:!0});var T_=r(go);Wa=n(T_,"SPAN",{});var I_=r(Wa);_(qs.$$.fragment,I_),I_.forEach(o),T_.forEach(o),Jp=d(nd),Ba=n(nd,"SPAN",{});var C_=r(Ba);Xp=i(C_,"CLIPProcessor"),C_.forEach(o),nd.forEach(o),vl=d(t),U=n(t,"DIV",{class:!0});var Re=r(U);_(Ds.$$.fragment,Re),Zp=d(Re),Ua=n(Re,"P",{});var b_=r(Ua);Qp=i(b_,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),b_.forEach(o),Yp=d(Re),K=n(Re,"P",{});var ze=r(K);Lr=n(ze,"A",{href:!0});var y_=r(Lr);em=i(y_,"CLIPProcessor"),y_.forEach(o),tm=i(ze," offers all the functionalities of "),kr=n(ze,"A",{href:!0});var L_=r(kr);om=i(L_,"CLIPFeatureExtractor"),L_.forEach(o),sm=i(ze," and "),wr=n(ze,"A",{href:!0});var k_=r(wr);nm=i(k_,"CLIPTokenizerFast"),k_.forEach(o),rm=i(ze,`. See the
`),Ra=n(ze,"CODE",{});var w_=r(Ra);am=i(w_,"__call__()"),w_.forEach(o),im=i(ze,"and "),$r=n(ze,"A",{href:!0});var $_=r($r);lm=i($_,"decode()"),$_.forEach(o),dm=i(ze," for more information."),ze.forEach(o),cm=d(Re),_o=n(Re,"DIV",{class:!0});var rd=r(_o);_(As.$$.fragment,rd),pm=d(rd),Ns=n(rd,"P",{});var ad=r(Ns);mm=i(ad,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),xr=n(ad,"A",{href:!0});var x_=r(xr);hm=i(x_,"batch_decode()"),x_.forEach(o),fm=i(ad,`. Please
refer to the docstring of this method for more information.`),ad.forEach(o),rd.forEach(o),um=d(Re),vo=n(Re,"DIV",{class:!0});var id=r(vo);_(Os.$$.fragment,id),gm=d(id),Vs=n(id,"P",{});var ld=r(Vs);_m=i(ld,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Er=n(ld,"A",{href:!0});var E_=r(Er);vm=i(E_,"decode()"),E_.forEach(o),Pm=i(ld,`. Please refer to
the docstring of this method for more information.`),ld.forEach(o),id.forEach(o),Re.forEach(o),Pl=d(t),Ct=n(t,"H2",{class:!0});var dd=r(Ct);Po=n(dd,"A",{id:!0,class:!0,href:!0});var z_=r(Po);Ha=n(z_,"SPAN",{});var M_=r(Ha);_(Ss.$$.fragment,M_),M_.forEach(o),z_.forEach(o),Tm=d(dd),Ka=n(dd,"SPAN",{});var j_=r(Ka);Im=i(j_,"CLIPModel"),j_.forEach(o),dd.forEach(o),Tl=d(t),R=n(t,"DIV",{class:!0});var He=r(R);_(Ws.$$.fragment,He),Cm=d(He),Bs=n(He,"P",{});var cd=r(Bs);bm=i(cd,"This model is a PyTorch "),Us=n(cd,"A",{href:!0,rel:!0});var F_=r(Us);ym=i(F_,"torch.nn.Module"),F_.forEach(o),Lm=i(cd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cd.forEach(o),km=d(He),G=n(He,"DIV",{class:!0});var Ke=r(G);_(Rs.$$.fragment,Ke),wm=d(Ke),bt=n(Ke,"P",{});var Xr=r(bt);$m=i(Xr,"The "),zr=n(Xr,"A",{href:!0});var q_=r(zr);xm=i(q_,"CLIPModel"),q_.forEach(o),Em=i(Xr," forward method, overrides the "),Ga=n(Xr,"CODE",{});var D_=r(Ga);zm=i(D_,"__call__"),D_.forEach(o),Mm=i(Xr," special method."),Xr.forEach(o),jm=d(Ke),_(To.$$.fragment,Ke),Fm=d(Ke),Ja=n(Ke,"P",{});var A_=r(Ja);qm=i(A_,"Examples:"),A_.forEach(o),Dm=d(Ke),_(Hs.$$.fragment,Ke),Ke.forEach(o),Am=d(He),J=n(He,"DIV",{class:!0});var Ge=r(J);_(Ks.$$.fragment,Ge),Nm=d(Ge),yt=n(Ge,"P",{});var Zr=r(yt);Om=i(Zr,"The "),Mr=n(Zr,"A",{href:!0});var N_=r(Mr);Vm=i(N_,"CLIPModel"),N_.forEach(o),Sm=i(Zr," forward method, overrides the "),Xa=n(Zr,"CODE",{});var O_=r(Xa);Wm=i(O_,"__call__"),O_.forEach(o),Bm=i(Zr," special method."),Zr.forEach(o),Um=d(Ge),_(Io.$$.fragment,Ge),Rm=d(Ge),Za=n(Ge,"P",{});var V_=r(Za);Hm=i(V_,"Examples:"),V_.forEach(o),Km=d(Ge),_(Gs.$$.fragment,Ge),Ge.forEach(o),Gm=d(He),X=n(He,"DIV",{class:!0});var Je=r(X);_(Js.$$.fragment,Je),Jm=d(Je),Lt=n(Je,"P",{});var Qr=r(Lt);Xm=i(Qr,"The "),jr=n(Qr,"A",{href:!0});var S_=r(jr);Zm=i(S_,"CLIPModel"),S_.forEach(o),Qm=i(Qr," forward method, overrides the "),Qa=n(Qr,"CODE",{});var W_=r(Qa);Ym=i(W_,"__call__"),W_.forEach(o),eh=i(Qr," special method."),Qr.forEach(o),th=d(Je),_(Co.$$.fragment,Je),oh=d(Je),Ya=n(Je,"P",{});var B_=r(Ya);sh=i(B_,"Examples:"),B_.forEach(o),nh=d(Je),_(Xs.$$.fragment,Je),Je.forEach(o),He.forEach(o),Il=d(t),kt=n(t,"H2",{class:!0});var pd=r(kt);bo=n(pd,"A",{id:!0,class:!0,href:!0});var U_=r(bo);ei=n(U_,"SPAN",{});var R_=r(ei);_(Zs.$$.fragment,R_),R_.forEach(o),U_.forEach(o),rh=d(pd),ti=n(pd,"SPAN",{});var H_=r(ti);ah=i(H_,"CLIPTextModel"),H_.forEach(o),pd.forEach(o),Cl=d(t),wt=n(t,"DIV",{class:!0});var md=r(wt);_(Qs.$$.fragment,md),ih=d(md),Z=n(md,"DIV",{class:!0});var Xe=r(Z);_(Ys.$$.fragment,Xe),lh=d(Xe),$t=n(Xe,"P",{});var Yr=r($t);dh=i(Yr,"The "),Fr=n(Yr,"A",{href:!0});var K_=r(Fr);ch=i(K_,"CLIPTextModel"),K_.forEach(o),ph=i(Yr," forward method, overrides the "),oi=n(Yr,"CODE",{});var G_=r(oi);mh=i(G_,"__call__"),G_.forEach(o),hh=i(Yr," special method."),Yr.forEach(o),fh=d(Xe),_(yo.$$.fragment,Xe),uh=d(Xe),si=n(Xe,"P",{});var J_=r(si);gh=i(J_,"Examples:"),J_.forEach(o),_h=d(Xe),_(en.$$.fragment,Xe),Xe.forEach(o),md.forEach(o),bl=d(t),xt=n(t,"H2",{class:!0});var hd=r(xt);Lo=n(hd,"A",{id:!0,class:!0,href:!0});var X_=r(Lo);ni=n(X_,"SPAN",{});var Z_=r(ni);_(tn.$$.fragment,Z_),Z_.forEach(o),X_.forEach(o),vh=d(hd),ri=n(hd,"SPAN",{});var Q_=r(ri);Ph=i(Q_,"CLIPVisionModel"),Q_.forEach(o),hd.forEach(o),yl=d(t),Et=n(t,"DIV",{class:!0});var fd=r(Et);_(on.$$.fragment,fd),Th=d(fd),Q=n(fd,"DIV",{class:!0});var Ze=r(Q);_(sn.$$.fragment,Ze),Ih=d(Ze),zt=n(Ze,"P",{});var ea=r(zt);Ch=i(ea,"The "),qr=n(ea,"A",{href:!0});var Y_=r(qr);bh=i(Y_,"CLIPVisionModel"),Y_.forEach(o),yh=i(ea," forward method, overrides the "),ai=n(ea,"CODE",{});var ev=r(ai);Lh=i(ev,"__call__"),ev.forEach(o),kh=i(ea," special method."),ea.forEach(o),wh=d(Ze),_(ko.$$.fragment,Ze),$h=d(Ze),ii=n(Ze,"P",{});var tv=r(ii);xh=i(tv,"Examples:"),tv.forEach(o),Eh=d(Ze),_(nn.$$.fragment,Ze),Ze.forEach(o),fd.forEach(o),Ll=d(t),Mt=n(t,"H2",{class:!0});var ud=r(Mt);wo=n(ud,"A",{id:!0,class:!0,href:!0});var ov=r(wo);li=n(ov,"SPAN",{});var sv=r(li);_(rn.$$.fragment,sv),sv.forEach(o),ov.forEach(o),zh=d(ud),di=n(ud,"SPAN",{});var nv=r(di);Mh=i(nv,"TFCLIPModel"),nv.forEach(o),ud.forEach(o),kl=d(t),q=n(t,"DIV",{class:!0});var de=r(q);_(an.$$.fragment,de),jh=d(de),ln=n(de,"P",{});var gd=r(ln);Fh=i(gd,"This model inherits from "),Dr=n(gd,"A",{href:!0});var rv=r(Dr);qh=i(rv,"TFPreTrainedModel"),rv.forEach(o),Dh=i(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(o),Ah=d(de),dn=n(de,"P",{});var _d=r(dn);Nh=i(_d,"This model is also a "),cn=n(_d,"A",{href:!0,rel:!0});var av=r(cn);Oh=i(av,"tf.keras.Model"),av.forEach(o),Vh=i(_d,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_d.forEach(o),Sh=d(de),_($o.$$.fragment,de),Wh=d(de),Y=n(de,"DIV",{class:!0});var Qe=r(Y);_(pn.$$.fragment,Qe),Bh=d(Qe),jt=n(Qe,"P",{});var ta=r(jt);Uh=i(ta,"The "),Ar=n(ta,"A",{href:!0});var iv=r(Ar);Rh=i(iv,"TFCLIPModel"),iv.forEach(o),Hh=i(ta," forward method, overrides the "),ci=n(ta,"CODE",{});var lv=r(ci);Kh=i(lv,"__call__"),lv.forEach(o),Gh=i(ta," special method."),ta.forEach(o),Jh=d(Qe),_(xo.$$.fragment,Qe),Xh=d(Qe),pi=n(Qe,"P",{});var dv=r(pi);Zh=i(dv,"Examples:"),dv.forEach(o),Qh=d(Qe),_(mn.$$.fragment,Qe),Qe.forEach(o),Yh=d(de),ee=n(de,"DIV",{class:!0});var Ye=r(ee);_(hn.$$.fragment,Ye),ef=d(Ye),Ft=n(Ye,"P",{});var oa=r(Ft);tf=i(oa,"The "),Nr=n(oa,"A",{href:!0});var cv=r(Nr);of=i(cv,"TFCLIPModel"),cv.forEach(o),sf=i(oa," forward method, overrides the "),mi=n(oa,"CODE",{});var pv=r(mi);nf=i(pv,"__call__"),pv.forEach(o),rf=i(oa," special method."),oa.forEach(o),af=d(Ye),_(Eo.$$.fragment,Ye),lf=d(Ye),hi=n(Ye,"P",{});var mv=r(hi);df=i(mv,"Examples:"),mv.forEach(o),cf=d(Ye),_(fn.$$.fragment,Ye),Ye.forEach(o),pf=d(de),te=n(de,"DIV",{class:!0});var et=r(te);_(un.$$.fragment,et),mf=d(et),qt=n(et,"P",{});var sa=r(qt);hf=i(sa,"The "),Or=n(sa,"A",{href:!0});var hv=r(Or);ff=i(hv,"TFCLIPModel"),hv.forEach(o),uf=i(sa," forward method, overrides the "),fi=n(sa,"CODE",{});var fv=r(fi);gf=i(fv,"__call__"),fv.forEach(o),_f=i(sa," special method."),sa.forEach(o),vf=d(et),_(zo.$$.fragment,et),Pf=d(et),ui=n(et,"P",{});var uv=r(ui);Tf=i(uv,"Examples:"),uv.forEach(o),If=d(et),_(gn.$$.fragment,et),et.forEach(o),de.forEach(o),wl=d(t),Dt=n(t,"H2",{class:!0});var vd=r(Dt);Mo=n(vd,"A",{id:!0,class:!0,href:!0});var gv=r(Mo);gi=n(gv,"SPAN",{});var _v=r(gi);_(_n.$$.fragment,_v),_v.forEach(o),gv.forEach(o),Cf=d(vd),_i=n(vd,"SPAN",{});var vv=r(_i);bf=i(vv,"TFCLIPTextModel"),vv.forEach(o),vd.forEach(o),$l=d(t),At=n(t,"DIV",{class:!0});var Pd=r(At);_(vn.$$.fragment,Pd),yf=d(Pd),oe=n(Pd,"DIV",{class:!0});var tt=r(oe);_(Pn.$$.fragment,tt),Lf=d(tt),Nt=n(tt,"P",{});var na=r(Nt);kf=i(na,"The "),Vr=n(na,"A",{href:!0});var Pv=r(Vr);wf=i(Pv,"TFCLIPTextModel"),Pv.forEach(o),$f=i(na," forward method, overrides the "),vi=n(na,"CODE",{});var Tv=r(vi);xf=i(Tv,"__call__"),Tv.forEach(o),Ef=i(na," special method."),na.forEach(o),zf=d(tt),_(jo.$$.fragment,tt),Mf=d(tt),Pi=n(tt,"P",{});var Iv=r(Pi);jf=i(Iv,"Examples:"),Iv.forEach(o),Ff=d(tt),_(Tn.$$.fragment,tt),tt.forEach(o),Pd.forEach(o),xl=d(t),Ot=n(t,"H2",{class:!0});var Td=r(Ot);Fo=n(Td,"A",{id:!0,class:!0,href:!0});var Cv=r(Fo);Ti=n(Cv,"SPAN",{});var bv=r(Ti);_(In.$$.fragment,bv),bv.forEach(o),Cv.forEach(o),qf=d(Td),Ii=n(Td,"SPAN",{});var yv=r(Ii);Df=i(yv,"TFCLIPVisionModel"),yv.forEach(o),Td.forEach(o),El=d(t),Vt=n(t,"DIV",{class:!0});var Id=r(Vt);_(Cn.$$.fragment,Id),Af=d(Id),se=n(Id,"DIV",{class:!0});var ot=r(se);_(bn.$$.fragment,ot),Nf=d(ot),St=n(ot,"P",{});var ra=r(St);Of=i(ra,"The "),Sr=n(ra,"A",{href:!0});var Lv=r(Sr);Vf=i(Lv,"TFCLIPVisionModel"),Lv.forEach(o),Sf=i(ra," forward method, overrides the "),Ci=n(ra,"CODE",{});var kv=r(Ci);Wf=i(kv,"__call__"),kv.forEach(o),Bf=i(ra," special method."),ra.forEach(o),Uf=d(ot),_(qo.$$.fragment,ot),Rf=d(ot),bi=n(ot,"P",{});var wv=r(bi);Hf=i(wv,"Examples:"),wv.forEach(o),Kf=d(ot),_(yn.$$.fragment,ot),ot.forEach(o),Id.forEach(o),zl=d(t),Wt=n(t,"H2",{class:!0});var Cd=r(Wt);Do=n(Cd,"A",{id:!0,class:!0,href:!0});var $v=r(Do);yi=n($v,"SPAN",{});var xv=r(yi);_(Ln.$$.fragment,xv),xv.forEach(o),$v.forEach(o),Gf=d(Cd),Li=n(Cd,"SPAN",{});var Ev=r(Li);Jf=i(Ev,"FlaxCLIPModel"),Ev.forEach(o),Cd.forEach(o),Ml=d(t),z=n(t,"DIV",{class:!0});var O=r(z);_(kn.$$.fragment,O),Xf=d(O),wn=n(O,"P",{});var bd=r(wn);Zf=i(bd,"This model inherits from "),Wr=n(bd,"A",{href:!0});var zv=r(Wr);Qf=i(zv,"FlaxPreTrainedModel"),zv.forEach(o),Yf=i(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bd.forEach(o),eu=d(O),$n=n(O,"P",{});var yd=r($n);tu=i(yd,"This model is also a Flax Linen "),xn=n(yd,"A",{href:!0,rel:!0});var Mv=r(xn);ou=i(Mv,"flax.linen.Module"),Mv.forEach(o),su=i(yd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yd.forEach(o),nu=d(O),ki=n(O,"P",{});var jv=r(ki);ru=i(jv,"Finally, this model supports inherent JAX features such as:"),jv.forEach(o),au=d(O),Ee=n(O,"UL",{});var Ro=r(Ee);wi=n(Ro,"LI",{});var Fv=r(wi);En=n(Fv,"A",{href:!0,rel:!0});var qv=r(En);iu=i(qv,"Just-In-Time (JIT) compilation"),qv.forEach(o),Fv.forEach(o),lu=d(Ro),$i=n(Ro,"LI",{});var Dv=r($i);zn=n(Dv,"A",{href:!0,rel:!0});var Av=r(zn);du=i(Av,"Automatic Differentiation"),Av.forEach(o),Dv.forEach(o),cu=d(Ro),xi=n(Ro,"LI",{});var Nv=r(xi);Mn=n(Nv,"A",{href:!0,rel:!0});var Ov=r(Mn);pu=i(Ov,"Vectorization"),Ov.forEach(o),Nv.forEach(o),mu=d(Ro),Ei=n(Ro,"LI",{});var Vv=r(Ei);jn=n(Vv,"A",{href:!0,rel:!0});var Sv=r(jn);hu=i(Sv,"Parallelization"),Sv.forEach(o),Vv.forEach(o),Ro.forEach(o),fu=d(O),ne=n(O,"DIV",{class:!0});var st=r(ne);_(Fn.$$.fragment,st),uu=d(st),Bt=n(st,"P",{});var aa=r(Bt);gu=i(aa,"The "),zi=n(aa,"CODE",{});var Wv=r(zi);_u=i(Wv,"FlaxCLIPPreTrainedModel"),Wv.forEach(o),vu=i(aa,"forward method, overrides the "),Mi=n(aa,"CODE",{});var Bv=r(Mi);Pu=i(Bv,"__call__"),Bv.forEach(o),Tu=i(aa," special method."),aa.forEach(o),Iu=d(st),_(Ao.$$.fragment,st),Cu=d(st),ji=n(st,"P",{});var Uv=r(ji);bu=i(Uv,"Example:"),Uv.forEach(o),yu=d(st),_(qn.$$.fragment,st),st.forEach(o),Lu=d(O),Oe=n(O,"DIV",{class:!0});var ia=r(Oe);_(Dn.$$.fragment,ia),ku=d(ia),Fi=n(ia,"P",{});var Rv=r(Fi);wu=i(Rv,"Examples:"),Rv.forEach(o),$u=d(ia),_(An.$$.fragment,ia),ia.forEach(o),xu=d(O),Ve=n(O,"DIV",{class:!0});var la=r(Ve);_(Nn.$$.fragment,la),Eu=d(la),qi=n(la,"P",{});var Hv=r(qi);zu=i(Hv,"Examples:"),Hv.forEach(o),Mu=d(la),_(On.$$.fragment,la),la.forEach(o),O.forEach(o),jl=d(t),Ut=n(t,"H2",{class:!0});var Ld=r(Ut);No=n(Ld,"A",{id:!0,class:!0,href:!0});var Kv=r(No);Di=n(Kv,"SPAN",{});var Gv=r(Di);_(Vn.$$.fragment,Gv),Gv.forEach(o),Kv.forEach(o),ju=d(Ld),Ai=n(Ld,"SPAN",{});var Jv=r(Ai);Fu=i(Jv,"FlaxCLIPTextModel"),Jv.forEach(o),Ld.forEach(o),Fl=d(t),Rt=n(t,"DIV",{class:!0});var kd=r(Rt);_(Sn.$$.fragment,kd),qu=d(kd),re=n(kd,"DIV",{class:!0});var nt=r(re);_(Wn.$$.fragment,nt),Du=d(nt),Ht=n(nt,"P",{});var da=r(Ht);Au=i(da,"The "),Ni=n(da,"CODE",{});var Xv=r(Ni);Nu=i(Xv,"FlaxCLIPTextPreTrainedModel"),Xv.forEach(o),Ou=i(da,"forward method, overrides the "),Oi=n(da,"CODE",{});var Zv=r(Oi);Vu=i(Zv,"__call__"),Zv.forEach(o),Su=i(da," special method."),da.forEach(o),Wu=d(nt),_(Oo.$$.fragment,nt),Bu=d(nt),Vi=n(nt,"P",{});var Qv=r(Vi);Uu=i(Qv,"Example:"),Qv.forEach(o),Ru=d(nt),_(Bn.$$.fragment,nt),nt.forEach(o),kd.forEach(o),ql=d(t),Kt=n(t,"H2",{class:!0});var wd=r(Kt);Vo=n(wd,"A",{id:!0,class:!0,href:!0});var Yv=r(Vo);Si=n(Yv,"SPAN",{});var eP=r(Si);_(Un.$$.fragment,eP),eP.forEach(o),Yv.forEach(o),Hu=d(wd),Wi=n(wd,"SPAN",{});var tP=r(Wi);Ku=i(tP,"FlaxCLIPVisionModel"),tP.forEach(o),wd.forEach(o),Dl=d(t),Gt=n(t,"DIV",{class:!0});var $d=r(Gt);_(Rn.$$.fragment,$d),Gu=d($d),ae=n($d,"DIV",{class:!0});var rt=r(ae);_(Hn.$$.fragment,rt),Ju=d(rt),Jt=n(rt,"P",{});var ca=r(Jt);Xu=i(ca,"The "),Bi=n(ca,"CODE",{});var oP=r(Bi);Zu=i(oP,"FlaxCLIPVisionPreTrainedModel"),oP.forEach(o),Qu=i(ca,"forward method, overrides the "),Ui=n(ca,"CODE",{});var sP=r(Ui);Yu=i(sP,"__call__"),sP.forEach(o),eg=i(ca," special method."),ca.forEach(o),tg=d(rt),_(So.$$.fragment,rt),og=d(rt),Ri=n(rt,"P",{});var nP=r(Ri);sg=i(nP,"Example:"),nP.forEach(o),ng=d(rt),_(Kn.$$.fragment,rt),rt.forEach(o),$d.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(yP)),c(b,"id","clip"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#clip"),c(u,"class","relative group"),c(ue,"id","overview"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#overview"),c(M,"class","relative group"),c(Le,"href","https://arxiv.org/abs/2103.00020"),c(Le,"rel","nofollow"),c(ge,"id","usage"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#usage"),c(A,"class","relative group"),c(j,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(lt,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer"),c(ve,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPProcessor"),c(Pe,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Ae,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer"),c(ar,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPProcessor"),c(ir,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(ts,"href","https://huggingface.co/valhalla"),c(ts,"rel","nofollow"),c(os,"href","https://github.com/openai/CLIP"),c(os,"rel","nofollow"),c(oo,"id","transformers.CLIPConfig"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.CLIPConfig"),c(dt,"class","relative group"),c(lr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig"),c(dr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(cr,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(pr,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(mr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig"),c(no,"class","docstring"),c(fe,"class","docstring"),c(ro,"id","transformers.CLIPTextConfig"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.CLIPTextConfig"),c(pt,"class","relative group"),c(hr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(ds,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(ds,"rel","nofollow"),c(fr,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(ur,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(V,"class","docstring"),c(ao,"id","transformers.CLIPVisionConfig"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.CLIPVisionConfig"),c(ft,"class","relative group"),c(gr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(hs,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(hs,"rel","nofollow"),c(_r,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(vr,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(S,"class","docstring"),c(io,"id","transformers.CLIPTokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.CLIPTokenizer"),c(_t,"class","relative group"),c(Pr,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Te,"class","docstring"),c(lo,"class","docstring"),c(co,"class","docstring"),c(Ir,"class","docstring"),c(F,"class","docstring"),c(po,"id","transformers.CLIPTokenizerFast"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.CLIPTokenizerFast"),c(vt,"class","relative group"),c(Cr,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ie,"class","docstring"),c(mo,"class","docstring"),c(W,"class","docstring"),c(ho,"id","transformers.CLIPFeatureExtractor"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.CLIPFeatureExtractor"),c(Pt,"class","relative group"),c(yr,"href","/docs/transformers/master/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(fo,"class","docstring"),c(uo,"class","docstring"),c(B,"class","docstring"),c(go,"id","transformers.CLIPProcessor"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.CLIPProcessor"),c(It,"class","relative group"),c(Lr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPProcessor"),c(kr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(wr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizerFast"),c($r,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPProcessor.decode"),c(xr,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(_o,"class","docstring"),c(Er,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(vo,"class","docstring"),c(U,"class","docstring"),c(Po,"id","transformers.CLIPModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.CLIPModel"),c(Ct,"class","relative group"),c(Us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Us,"rel","nofollow"),c(zr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(G,"class","docstring"),c(Mr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(J,"class","docstring"),c(jr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(X,"class","docstring"),c(R,"class","docstring"),c(bo,"id","transformers.CLIPTextModel"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.CLIPTextModel"),c(kt,"class","relative group"),c(Fr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPTextModel"),c(Z,"class","docstring"),c(wt,"class","docstring"),c(Lo,"id","transformers.CLIPVisionModel"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.CLIPVisionModel"),c(xt,"class","relative group"),c(qr,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPVisionModel"),c(Q,"class","docstring"),c(Et,"class","docstring"),c(wo,"id","transformers.TFCLIPModel"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFCLIPModel"),c(Mt,"class","relative group"),c(Dr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(cn,"rel","nofollow"),c(Ar,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPModel"),c(Y,"class","docstring"),c(Nr,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPModel"),c(ee,"class","docstring"),c(Or,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPModel"),c(te,"class","docstring"),c(q,"class","docstring"),c(Mo,"id","transformers.TFCLIPTextModel"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFCLIPTextModel"),c(Dt,"class","relative group"),c(Vr,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPTextModel"),c(oe,"class","docstring"),c(At,"class","docstring"),c(Fo,"id","transformers.TFCLIPVisionModel"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFCLIPVisionModel"),c(Ot,"class","relative group"),c(Sr,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPVisionModel"),c(se,"class","docstring"),c(Vt,"class","docstring"),c(Do,"id","transformers.FlaxCLIPModel"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.FlaxCLIPModel"),c(Wt,"class","relative group"),c(Wr,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xn,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xn,"rel","nofollow"),c(En,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(En,"rel","nofollow"),c(zn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(zn,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Mn,"rel","nofollow"),c(jn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(jn,"rel","nofollow"),c(ne,"class","docstring"),c(Oe,"class","docstring"),c(Ve,"class","docstring"),c(z,"class","docstring"),c(No,"id","transformers.FlaxCLIPTextModel"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.FlaxCLIPTextModel"),c(Ut,"class","relative group"),c(re,"class","docstring"),c(Rt,"class","docstring"),c(Vo,"id","transformers.FlaxCLIPVisionModel"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.FlaxCLIPVisionModel"),c(Kt,"class","relative group"),c(ae,"class","docstring"),c(Gt,"class","docstring")},m(t,m){e(document.head,p),h(t,L,m),h(t,u,m),e(u,b),e(b,y),v(C,y,null),e(u,f),e(u,k),e(k,Ho),h(t,at,m),h(t,M,m),e(M,ue),e(ue,Ce),v(be,Ce,null),e(M,Ko),e(M,ye),e(ye,Go),h(t,Xt,m),h(t,pe,m),e(pe,Me),e(pe,Le),e(Le,Zt),e(pe,H),h(t,me,m),h(t,je,m),e(je,it),h(t,Qt,m),h(t,Fe,m),e(Fe,ke),e(ke,Jo),h(t,Yt,m),h(t,A,m),e(A,ge),e(ge,we),v($e,we,null),e(A,Xo),e(A,xe),e(xe,Zo),h(t,eo,m),h(t,he,m),e(he,Qo),h(t,qe,m),h(t,_e,m),e(_e,$),e(_e,j),e(j,to),e(_e,Qn),h(t,Yo,m),h(t,E,m),e(E,Yn),e(E,lt),e(lt,er),e(E,De),e(E,ve),e(ve,tr),e(E,or),e(E,Pe),e(Pe,sr),e(E,nr),e(E,Ae),e(Ae,rr),e(E,xd),e(E,ar),e(ar,Ed),e(E,zd),e(E,ir),e(ir,Md),e(E,jd),h(t,sl,m),v(es,t,m),h(t,nl,m),h(t,Ne,m),e(Ne,Fd),e(Ne,ts),e(ts,qd),e(Ne,Dd),e(Ne,os),e(os,Ad),e(Ne,Nd),h(t,rl,m),h(t,dt,m),e(dt,oo),e(oo,pa),v(ss,pa,null),e(dt,Od),e(dt,ma),e(ma,Vd),h(t,al,m),h(t,fe,m),v(ns,fe,null),e(fe,Sd),e(fe,so),e(so,lr),e(lr,Wd),e(so,Bd),e(so,dr),e(dr,Ud),e(so,Rd),e(fe,Hd),e(fe,ct),e(ct,Kd),e(ct,cr),e(cr,Gd),e(ct,Jd),e(ct,pr),e(pr,Xd),e(ct,Zd),e(fe,Qd),e(fe,no),v(rs,no,null),e(no,Yd),e(no,as),e(as,ec),e(as,mr),e(mr,tc),e(as,oc),h(t,il,m),h(t,pt,m),e(pt,ro),e(ro,ha),v(is,ha,null),e(pt,sc),e(pt,fa),e(fa,nc),h(t,ll,m),h(t,V,m),v(ls,V,null),e(V,rc),e(V,mt),e(mt,ac),e(mt,hr),e(hr,ic),e(mt,lc),e(mt,ds),e(ds,dc),e(mt,cc),e(V,pc),e(V,ht),e(ht,mc),e(ht,fr),e(fr,hc),e(ht,fc),e(ht,ur),e(ur,uc),e(ht,gc),e(V,_c),e(V,ua),e(ua,vc),e(V,Pc),v(cs,V,null),h(t,dl,m),h(t,ft,m),e(ft,ao),e(ao,ga),v(ps,ga,null),e(ft,Tc),e(ft,_a),e(_a,Ic),h(t,cl,m),h(t,S,m),v(ms,S,null),e(S,Cc),e(S,ut),e(ut,bc),e(ut,gr),e(gr,yc),e(ut,Lc),e(ut,hs),e(hs,kc),e(ut,wc),e(S,$c),e(S,gt),e(gt,xc),e(gt,_r),e(_r,Ec),e(gt,zc),e(gt,vr),e(vr,Mc),e(gt,jc),e(S,Fc),e(S,va),e(va,qc),e(S,Dc),v(fs,S,null),h(t,pl,m),h(t,_t,m),e(_t,io),e(io,Pa),v(us,Pa,null),e(_t,Ac),e(_t,Ta),e(Ta,Nc),h(t,ml,m),h(t,F,m),v(gs,F,null),e(F,Oc),e(F,Ia),e(Ia,Vc),e(F,Sc),e(F,_s),e(_s,Wc),e(_s,Pr),e(Pr,Bc),e(_s,Uc),e(F,Rc),e(F,Te),v(vs,Te,null),e(Te,Hc),e(Te,Ca),e(Ca,Kc),e(Te,Gc),e(Te,ba),e(ba,Tr),e(Tr,Jc),e(Tr,ya),e(ya,Xc),e(Te,Zc),e(Te,La),e(La,Qc),e(F,Yc),e(F,lo),v(Ps,lo,null),e(lo,ep),e(lo,Ts),e(Ts,tp),e(Ts,ka),e(ka,op),e(Ts,sp),e(F,np),e(F,co),v(Is,co,null),e(co,rp),e(co,wa),e(wa,ap),e(F,ip),e(F,Ir),v(Cs,Ir,null),h(t,hl,m),h(t,vt,m),e(vt,po),e(po,$a),v(bs,$a,null),e(vt,lp),e(vt,xa),e(xa,dp),h(t,fl,m),h(t,W,m),v(ys,W,null),e(W,cp),e(W,Ls),e(Ls,pp),e(Ls,Ea),e(Ea,mp),e(Ls,hp),e(W,fp),e(W,ks),e(ks,up),e(ks,Cr),e(Cr,gp),e(ks,_p),e(W,vp),e(W,Ie),v(ws,Ie,null),e(Ie,Pp),e(Ie,za),e(za,Tp),e(Ie,Ip),e(Ie,Ma),e(Ma,br),e(br,Cp),e(br,ja),e(ja,bp),e(Ie,yp),e(Ie,Fa),e(Fa,Lp),e(W,kp),e(W,mo),v($s,mo,null),e(mo,wp),e(mo,qa),e(qa,$p),h(t,ul,m),h(t,Pt,m),e(Pt,ho),e(ho,Da),v(xs,Da,null),e(Pt,xp),e(Pt,Aa),e(Aa,Ep),h(t,gl,m),h(t,B,m),v(Es,B,null),e(B,zp),e(B,Na),e(Na,Mp),e(B,jp),e(B,zs),e(zs,Fp),e(zs,yr),e(yr,qp),e(zs,Dp),e(B,Ap),e(B,fo),v(Ms,fo,null),e(fo,Np),e(fo,js),e(js,Op),e(js,Oa),e(Oa,Vp),e(js,Sp),e(B,Wp),e(B,uo),v(Fs,uo,null),e(uo,Bp),e(uo,Tt),e(Tt,Up),e(Tt,Va),e(Va,Rp),e(Tt,Hp),e(Tt,Sa),e(Sa,Kp),e(Tt,Gp),h(t,_l,m),h(t,It,m),e(It,go),e(go,Wa),v(qs,Wa,null),e(It,Jp),e(It,Ba),e(Ba,Xp),h(t,vl,m),h(t,U,m),v(Ds,U,null),e(U,Zp),e(U,Ua),e(Ua,Qp),e(U,Yp),e(U,K),e(K,Lr),e(Lr,em),e(K,tm),e(K,kr),e(kr,om),e(K,sm),e(K,wr),e(wr,nm),e(K,rm),e(K,Ra),e(Ra,am),e(K,im),e(K,$r),e($r,lm),e(K,dm),e(U,cm),e(U,_o),v(As,_o,null),e(_o,pm),e(_o,Ns),e(Ns,mm),e(Ns,xr),e(xr,hm),e(Ns,fm),e(U,um),e(U,vo),v(Os,vo,null),e(vo,gm),e(vo,Vs),e(Vs,_m),e(Vs,Er),e(Er,vm),e(Vs,Pm),h(t,Pl,m),h(t,Ct,m),e(Ct,Po),e(Po,Ha),v(Ss,Ha,null),e(Ct,Tm),e(Ct,Ka),e(Ka,Im),h(t,Tl,m),h(t,R,m),v(Ws,R,null),e(R,Cm),e(R,Bs),e(Bs,bm),e(Bs,Us),e(Us,ym),e(Bs,Lm),e(R,km),e(R,G),v(Rs,G,null),e(G,wm),e(G,bt),e(bt,$m),e(bt,zr),e(zr,xm),e(bt,Em),e(bt,Ga),e(Ga,zm),e(bt,Mm),e(G,jm),v(To,G,null),e(G,Fm),e(G,Ja),e(Ja,qm),e(G,Dm),v(Hs,G,null),e(R,Am),e(R,J),v(Ks,J,null),e(J,Nm),e(J,yt),e(yt,Om),e(yt,Mr),e(Mr,Vm),e(yt,Sm),e(yt,Xa),e(Xa,Wm),e(yt,Bm),e(J,Um),v(Io,J,null),e(J,Rm),e(J,Za),e(Za,Hm),e(J,Km),v(Gs,J,null),e(R,Gm),e(R,X),v(Js,X,null),e(X,Jm),e(X,Lt),e(Lt,Xm),e(Lt,jr),e(jr,Zm),e(Lt,Qm),e(Lt,Qa),e(Qa,Ym),e(Lt,eh),e(X,th),v(Co,X,null),e(X,oh),e(X,Ya),e(Ya,sh),e(X,nh),v(Xs,X,null),h(t,Il,m),h(t,kt,m),e(kt,bo),e(bo,ei),v(Zs,ei,null),e(kt,rh),e(kt,ti),e(ti,ah),h(t,Cl,m),h(t,wt,m),v(Qs,wt,null),e(wt,ih),e(wt,Z),v(Ys,Z,null),e(Z,lh),e(Z,$t),e($t,dh),e($t,Fr),e(Fr,ch),e($t,ph),e($t,oi),e(oi,mh),e($t,hh),e(Z,fh),v(yo,Z,null),e(Z,uh),e(Z,si),e(si,gh),e(Z,_h),v(en,Z,null),h(t,bl,m),h(t,xt,m),e(xt,Lo),e(Lo,ni),v(tn,ni,null),e(xt,vh),e(xt,ri),e(ri,Ph),h(t,yl,m),h(t,Et,m),v(on,Et,null),e(Et,Th),e(Et,Q),v(sn,Q,null),e(Q,Ih),e(Q,zt),e(zt,Ch),e(zt,qr),e(qr,bh),e(zt,yh),e(zt,ai),e(ai,Lh),e(zt,kh),e(Q,wh),v(ko,Q,null),e(Q,$h),e(Q,ii),e(ii,xh),e(Q,Eh),v(nn,Q,null),h(t,Ll,m),h(t,Mt,m),e(Mt,wo),e(wo,li),v(rn,li,null),e(Mt,zh),e(Mt,di),e(di,Mh),h(t,kl,m),h(t,q,m),v(an,q,null),e(q,jh),e(q,ln),e(ln,Fh),e(ln,Dr),e(Dr,qh),e(ln,Dh),e(q,Ah),e(q,dn),e(dn,Nh),e(dn,cn),e(cn,Oh),e(dn,Vh),e(q,Sh),v($o,q,null),e(q,Wh),e(q,Y),v(pn,Y,null),e(Y,Bh),e(Y,jt),e(jt,Uh),e(jt,Ar),e(Ar,Rh),e(jt,Hh),e(jt,ci),e(ci,Kh),e(jt,Gh),e(Y,Jh),v(xo,Y,null),e(Y,Xh),e(Y,pi),e(pi,Zh),e(Y,Qh),v(mn,Y,null),e(q,Yh),e(q,ee),v(hn,ee,null),e(ee,ef),e(ee,Ft),e(Ft,tf),e(Ft,Nr),e(Nr,of),e(Ft,sf),e(Ft,mi),e(mi,nf),e(Ft,rf),e(ee,af),v(Eo,ee,null),e(ee,lf),e(ee,hi),e(hi,df),e(ee,cf),v(fn,ee,null),e(q,pf),e(q,te),v(un,te,null),e(te,mf),e(te,qt),e(qt,hf),e(qt,Or),e(Or,ff),e(qt,uf),e(qt,fi),e(fi,gf),e(qt,_f),e(te,vf),v(zo,te,null),e(te,Pf),e(te,ui),e(ui,Tf),e(te,If),v(gn,te,null),h(t,wl,m),h(t,Dt,m),e(Dt,Mo),e(Mo,gi),v(_n,gi,null),e(Dt,Cf),e(Dt,_i),e(_i,bf),h(t,$l,m),h(t,At,m),v(vn,At,null),e(At,yf),e(At,oe),v(Pn,oe,null),e(oe,Lf),e(oe,Nt),e(Nt,kf),e(Nt,Vr),e(Vr,wf),e(Nt,$f),e(Nt,vi),e(vi,xf),e(Nt,Ef),e(oe,zf),v(jo,oe,null),e(oe,Mf),e(oe,Pi),e(Pi,jf),e(oe,Ff),v(Tn,oe,null),h(t,xl,m),h(t,Ot,m),e(Ot,Fo),e(Fo,Ti),v(In,Ti,null),e(Ot,qf),e(Ot,Ii),e(Ii,Df),h(t,El,m),h(t,Vt,m),v(Cn,Vt,null),e(Vt,Af),e(Vt,se),v(bn,se,null),e(se,Nf),e(se,St),e(St,Of),e(St,Sr),e(Sr,Vf),e(St,Sf),e(St,Ci),e(Ci,Wf),e(St,Bf),e(se,Uf),v(qo,se,null),e(se,Rf),e(se,bi),e(bi,Hf),e(se,Kf),v(yn,se,null),h(t,zl,m),h(t,Wt,m),e(Wt,Do),e(Do,yi),v(Ln,yi,null),e(Wt,Gf),e(Wt,Li),e(Li,Jf),h(t,Ml,m),h(t,z,m),v(kn,z,null),e(z,Xf),e(z,wn),e(wn,Zf),e(wn,Wr),e(Wr,Qf),e(wn,Yf),e(z,eu),e(z,$n),e($n,tu),e($n,xn),e(xn,ou),e($n,su),e(z,nu),e(z,ki),e(ki,ru),e(z,au),e(z,Ee),e(Ee,wi),e(wi,En),e(En,iu),e(Ee,lu),e(Ee,$i),e($i,zn),e(zn,du),e(Ee,cu),e(Ee,xi),e(xi,Mn),e(Mn,pu),e(Ee,mu),e(Ee,Ei),e(Ei,jn),e(jn,hu),e(z,fu),e(z,ne),v(Fn,ne,null),e(ne,uu),e(ne,Bt),e(Bt,gu),e(Bt,zi),e(zi,_u),e(Bt,vu),e(Bt,Mi),e(Mi,Pu),e(Bt,Tu),e(ne,Iu),v(Ao,ne,null),e(ne,Cu),e(ne,ji),e(ji,bu),e(ne,yu),v(qn,ne,null),e(z,Lu),e(z,Oe),v(Dn,Oe,null),e(Oe,ku),e(Oe,Fi),e(Fi,wu),e(Oe,$u),v(An,Oe,null),e(z,xu),e(z,Ve),v(Nn,Ve,null),e(Ve,Eu),e(Ve,qi),e(qi,zu),e(Ve,Mu),v(On,Ve,null),h(t,jl,m),h(t,Ut,m),e(Ut,No),e(No,Di),v(Vn,Di,null),e(Ut,ju),e(Ut,Ai),e(Ai,Fu),h(t,Fl,m),h(t,Rt,m),v(Sn,Rt,null),e(Rt,qu),e(Rt,re),v(Wn,re,null),e(re,Du),e(re,Ht),e(Ht,Au),e(Ht,Ni),e(Ni,Nu),e(Ht,Ou),e(Ht,Oi),e(Oi,Vu),e(Ht,Su),e(re,Wu),v(Oo,re,null),e(re,Bu),e(re,Vi),e(Vi,Uu),e(re,Ru),v(Bn,re,null),h(t,ql,m),h(t,Kt,m),e(Kt,Vo),e(Vo,Si),v(Un,Si,null),e(Kt,Hu),e(Kt,Wi),e(Wi,Ku),h(t,Dl,m),h(t,Gt,m),v(Rn,Gt,null),e(Gt,Gu),e(Gt,ae),v(Hn,ae,null),e(ae,Ju),e(ae,Jt),e(Jt,Xu),e(Jt,Bi),e(Bi,Zu),e(Jt,Qu),e(Jt,Ui),e(Ui,Yu),e(Jt,eg),e(ae,tg),v(So,ae,null),e(ae,og),e(ae,Ri),e(Ri,sg),e(ae,ng),v(Kn,ae,null),Al=!0},p(t,[m]){const Gn={};m&2&&(Gn.$$scope={dirty:m,ctx:t}),To.$set(Gn);const Hi={};m&2&&(Hi.$$scope={dirty:m,ctx:t}),Io.$set(Hi);const Ki={};m&2&&(Ki.$$scope={dirty:m,ctx:t}),Co.$set(Ki);const Gi={};m&2&&(Gi.$$scope={dirty:m,ctx:t}),yo.$set(Gi);const Jn={};m&2&&(Jn.$$scope={dirty:m,ctx:t}),ko.$set(Jn);const Ji={};m&2&&(Ji.$$scope={dirty:m,ctx:t}),$o.$set(Ji);const Xi={};m&2&&(Xi.$$scope={dirty:m,ctx:t}),xo.$set(Xi);const Zi={};m&2&&(Zi.$$scope={dirty:m,ctx:t}),Eo.$set(Zi);const Xn={};m&2&&(Xn.$$scope={dirty:m,ctx:t}),zo.$set(Xn);const Qi={};m&2&&(Qi.$$scope={dirty:m,ctx:t}),jo.$set(Qi);const Yi={};m&2&&(Yi.$$scope={dirty:m,ctx:t}),qo.$set(Yi);const el={};m&2&&(el.$$scope={dirty:m,ctx:t}),Ao.$set(el);const tl={};m&2&&(tl.$$scope={dirty:m,ctx:t}),Oo.$set(tl);const Zn={};m&2&&(Zn.$$scope={dirty:m,ctx:t}),So.$set(Zn)},i(t){Al||(P(C.$$.fragment,t),P(be.$$.fragment,t),P($e.$$.fragment,t),P(es.$$.fragment,t),P(ss.$$.fragment,t),P(ns.$$.fragment,t),P(rs.$$.fragment,t),P(is.$$.fragment,t),P(ls.$$.fragment,t),P(cs.$$.fragment,t),P(ps.$$.fragment,t),P(ms.$$.fragment,t),P(fs.$$.fragment,t),P(us.$$.fragment,t),P(gs.$$.fragment,t),P(vs.$$.fragment,t),P(Ps.$$.fragment,t),P(Is.$$.fragment,t),P(Cs.$$.fragment,t),P(bs.$$.fragment,t),P(ys.$$.fragment,t),P(ws.$$.fragment,t),P($s.$$.fragment,t),P(xs.$$.fragment,t),P(Es.$$.fragment,t),P(Ms.$$.fragment,t),P(Fs.$$.fragment,t),P(qs.$$.fragment,t),P(Ds.$$.fragment,t),P(As.$$.fragment,t),P(Os.$$.fragment,t),P(Ss.$$.fragment,t),P(Ws.$$.fragment,t),P(Rs.$$.fragment,t),P(To.$$.fragment,t),P(Hs.$$.fragment,t),P(Ks.$$.fragment,t),P(Io.$$.fragment,t),P(Gs.$$.fragment,t),P(Js.$$.fragment,t),P(Co.$$.fragment,t),P(Xs.$$.fragment,t),P(Zs.$$.fragment,t),P(Qs.$$.fragment,t),P(Ys.$$.fragment,t),P(yo.$$.fragment,t),P(en.$$.fragment,t),P(tn.$$.fragment,t),P(on.$$.fragment,t),P(sn.$$.fragment,t),P(ko.$$.fragment,t),P(nn.$$.fragment,t),P(rn.$$.fragment,t),P(an.$$.fragment,t),P($o.$$.fragment,t),P(pn.$$.fragment,t),P(xo.$$.fragment,t),P(mn.$$.fragment,t),P(hn.$$.fragment,t),P(Eo.$$.fragment,t),P(fn.$$.fragment,t),P(un.$$.fragment,t),P(zo.$$.fragment,t),P(gn.$$.fragment,t),P(_n.$$.fragment,t),P(vn.$$.fragment,t),P(Pn.$$.fragment,t),P(jo.$$.fragment,t),P(Tn.$$.fragment,t),P(In.$$.fragment,t),P(Cn.$$.fragment,t),P(bn.$$.fragment,t),P(qo.$$.fragment,t),P(yn.$$.fragment,t),P(Ln.$$.fragment,t),P(kn.$$.fragment,t),P(Fn.$$.fragment,t),P(Ao.$$.fragment,t),P(qn.$$.fragment,t),P(Dn.$$.fragment,t),P(An.$$.fragment,t),P(Nn.$$.fragment,t),P(On.$$.fragment,t),P(Vn.$$.fragment,t),P(Sn.$$.fragment,t),P(Wn.$$.fragment,t),P(Oo.$$.fragment,t),P(Bn.$$.fragment,t),P(Un.$$.fragment,t),P(Rn.$$.fragment,t),P(Hn.$$.fragment,t),P(So.$$.fragment,t),P(Kn.$$.fragment,t),Al=!0)},o(t){T(C.$$.fragment,t),T(be.$$.fragment,t),T($e.$$.fragment,t),T(es.$$.fragment,t),T(ss.$$.fragment,t),T(ns.$$.fragment,t),T(rs.$$.fragment,t),T(is.$$.fragment,t),T(ls.$$.fragment,t),T(cs.$$.fragment,t),T(ps.$$.fragment,t),T(ms.$$.fragment,t),T(fs.$$.fragment,t),T(us.$$.fragment,t),T(gs.$$.fragment,t),T(vs.$$.fragment,t),T(Ps.$$.fragment,t),T(Is.$$.fragment,t),T(Cs.$$.fragment,t),T(bs.$$.fragment,t),T(ys.$$.fragment,t),T(ws.$$.fragment,t),T($s.$$.fragment,t),T(xs.$$.fragment,t),T(Es.$$.fragment,t),T(Ms.$$.fragment,t),T(Fs.$$.fragment,t),T(qs.$$.fragment,t),T(Ds.$$.fragment,t),T(As.$$.fragment,t),T(Os.$$.fragment,t),T(Ss.$$.fragment,t),T(Ws.$$.fragment,t),T(Rs.$$.fragment,t),T(To.$$.fragment,t),T(Hs.$$.fragment,t),T(Ks.$$.fragment,t),T(Io.$$.fragment,t),T(Gs.$$.fragment,t),T(Js.$$.fragment,t),T(Co.$$.fragment,t),T(Xs.$$.fragment,t),T(Zs.$$.fragment,t),T(Qs.$$.fragment,t),T(Ys.$$.fragment,t),T(yo.$$.fragment,t),T(en.$$.fragment,t),T(tn.$$.fragment,t),T(on.$$.fragment,t),T(sn.$$.fragment,t),T(ko.$$.fragment,t),T(nn.$$.fragment,t),T(rn.$$.fragment,t),T(an.$$.fragment,t),T($o.$$.fragment,t),T(pn.$$.fragment,t),T(xo.$$.fragment,t),T(mn.$$.fragment,t),T(hn.$$.fragment,t),T(Eo.$$.fragment,t),T(fn.$$.fragment,t),T(un.$$.fragment,t),T(zo.$$.fragment,t),T(gn.$$.fragment,t),T(_n.$$.fragment,t),T(vn.$$.fragment,t),T(Pn.$$.fragment,t),T(jo.$$.fragment,t),T(Tn.$$.fragment,t),T(In.$$.fragment,t),T(Cn.$$.fragment,t),T(bn.$$.fragment,t),T(qo.$$.fragment,t),T(yn.$$.fragment,t),T(Ln.$$.fragment,t),T(kn.$$.fragment,t),T(Fn.$$.fragment,t),T(Ao.$$.fragment,t),T(qn.$$.fragment,t),T(Dn.$$.fragment,t),T(An.$$.fragment,t),T(Nn.$$.fragment,t),T(On.$$.fragment,t),T(Vn.$$.fragment,t),T(Sn.$$.fragment,t),T(Wn.$$.fragment,t),T(Oo.$$.fragment,t),T(Bn.$$.fragment,t),T(Un.$$.fragment,t),T(Rn.$$.fragment,t),T(Hn.$$.fragment,t),T(So.$$.fragment,t),T(Kn.$$.fragment,t),Al=!1},d(t){o(p),t&&o(L),t&&o(u),I(C),t&&o(at),t&&o(M),I(be),t&&o(Xt),t&&o(pe),t&&o(me),t&&o(je),t&&o(Qt),t&&o(Fe),t&&o(Yt),t&&o(A),I($e),t&&o(eo),t&&o(he),t&&o(qe),t&&o(_e),t&&o(Yo),t&&o(E),t&&o(sl),I(es,t),t&&o(nl),t&&o(Ne),t&&o(rl),t&&o(dt),I(ss),t&&o(al),t&&o(fe),I(ns),I(rs),t&&o(il),t&&o(pt),I(is),t&&o(ll),t&&o(V),I(ls),I(cs),t&&o(dl),t&&o(ft),I(ps),t&&o(cl),t&&o(S),I(ms),I(fs),t&&o(pl),t&&o(_t),I(us),t&&o(ml),t&&o(F),I(gs),I(vs),I(Ps),I(Is),I(Cs),t&&o(hl),t&&o(vt),I(bs),t&&o(fl),t&&o(W),I(ys),I(ws),I($s),t&&o(ul),t&&o(Pt),I(xs),t&&o(gl),t&&o(B),I(Es),I(Ms),I(Fs),t&&o(_l),t&&o(It),I(qs),t&&o(vl),t&&o(U),I(Ds),I(As),I(Os),t&&o(Pl),t&&o(Ct),I(Ss),t&&o(Tl),t&&o(R),I(Ws),I(Rs),I(To),I(Hs),I(Ks),I(Io),I(Gs),I(Js),I(Co),I(Xs),t&&o(Il),t&&o(kt),I(Zs),t&&o(Cl),t&&o(wt),I(Qs),I(Ys),I(yo),I(en),t&&o(bl),t&&o(xt),I(tn),t&&o(yl),t&&o(Et),I(on),I(sn),I(ko),I(nn),t&&o(Ll),t&&o(Mt),I(rn),t&&o(kl),t&&o(q),I(an),I($o),I(pn),I(xo),I(mn),I(hn),I(Eo),I(fn),I(un),I(zo),I(gn),t&&o(wl),t&&o(Dt),I(_n),t&&o($l),t&&o(At),I(vn),I(Pn),I(jo),I(Tn),t&&o(xl),t&&o(Ot),I(In),t&&o(El),t&&o(Vt),I(Cn),I(bn),I(qo),I(yn),t&&o(zl),t&&o(Wt),I(Ln),t&&o(Ml),t&&o(z),I(kn),I(Fn),I(Ao),I(qn),I(Dn),I(An),I(Nn),I(On),t&&o(jl),t&&o(Ut),I(Vn),t&&o(Fl),t&&o(Rt),I(Sn),I(Wn),I(Oo),I(Bn),t&&o(ql),t&&o(Kt),I(Un),t&&o(Dl),t&&o(Gt),I(Rn),I(Hn),I(So),I(Kn)}}}const yP={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function LP(x,p,L){let{fw:u}=p;return x.$$set=b=>{"fw"in b&&L(0,u=b.fw)},[u]}class MP extends rP{constructor(p){super();aP(this,p,LP,bP,iP,{fw:0})}}export{MP as default,yP as metadata};
