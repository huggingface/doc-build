import{S as aP,i as rP,s as iP,e as s,k as l,w as g,t as r,M as lP,c as n,d as o,m as d,a,x as _,h as i,b as c,F as e,g as h,y as v,q as P,o as I,B as T}from"../../chunks/vendor-4833417e.js";import{T as ce}from"../../chunks/Tip-fffd6df1.js";import{D as w}from"../../chunks/Docstring-7b52c3d4.js";import{C as N}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as D}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function dP(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function cP(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function pP(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function mP(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function hP(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function fP(x){let p,L,u,b,y,C,f,k,Ho,rt,j,ue,Ce,be,Ko,ye,Go,Xt,pe,je,Le,Zt,H,me,Me,it,Qt,Fe,ke,Jo,Yt,A,ge,we,$e,Xo,xe,Zo,eo,he,Qo,qe,_e;return{c(){p=s("p"),L=r("TF 2.0 models accepts two formats as inputs:"),u=l(),b=s("ul"),y=s("li"),C=r("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),k=s("li"),Ho=r("having all inputs as a list, tuple or dict in the first positional arguments."),rt=l(),j=s("p"),ue=r("This second option is useful when using "),Ce=s("code"),be=r("tf.keras.Model.fit"),Ko=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=s("code"),Go=r("model(inputs)"),Xt=r("."),pe=l(),je=s("p"),Le=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Zt=l(),H=s("ul"),me=s("li"),Me=r("a single Tensor with "),it=s("code"),Qt=r("input_ids"),Fe=r(" only and nothing else: "),ke=s("code"),Jo=r("model(input_ids)"),Yt=l(),A=s("li"),ge=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=s("code"),$e=r("model([input_ids, attention_mask])"),Xo=r(" or "),xe=s("code"),Zo=r("model([input_ids, attention_mask, token_type_ids])"),eo=l(),he=s("li"),Qo=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=s("code"),_e=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l($){p=n($,"P",{});var M=a(p);L=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(o),u=d($),b=n($,"UL",{});var to=a(b);y=n(to,"LI",{});var Qn=a(y);C=i(Qn,"having all inputs as keyword arguments (like PyTorch models), or"),Qn.forEach(o),f=d(to),k=n(to,"LI",{});var Yo=a(k);Ho=i(Yo,"having all inputs as a list, tuple or dict in the first positional arguments."),Yo.forEach(o),to.forEach(o),rt=d($),j=n($,"P",{});var E=a(j);ue=i(E,"This second option is useful when using "),Ce=n(E,"CODE",{});var Yn=a(Ce);be=i(Yn,"tf.keras.Model.fit"),Yn.forEach(o),Ko=i(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=n(E,"CODE",{});var lt=a(ye);Go=i(lt,"model(inputs)"),lt.forEach(o),Xt=i(E,"."),E.forEach(o),pe=d($),je=n($,"P",{});var ea=a(je);Le=i(ea,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ea.forEach(o),Zt=d($),H=n($,"UL",{});var De=a(H);me=n(De,"LI",{});var ve=a(me);Me=i(ve,"a single Tensor with "),it=n(ve,"CODE",{});var ta=a(it);Qt=i(ta,"input_ids"),ta.forEach(o),Fe=i(ve," only and nothing else: "),ke=n(ve,"CODE",{});var oa=a(ke);Jo=i(oa,"model(input_ids)"),oa.forEach(o),ve.forEach(o),Yt=d(De),A=n(De,"LI",{});var Pe=a(A);ge=i(Pe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=n(Pe,"CODE",{});var sa=a(we);$e=i(sa,"model([input_ids, attention_mask])"),sa.forEach(o),Xo=i(Pe," or "),xe=n(Pe,"CODE",{});var na=a(xe);Zo=i(na,"model([input_ids, attention_mask, token_type_ids])"),na.forEach(o),Pe.forEach(o),eo=d(De),he=n(De,"LI",{});var Ae=a(he);Qo=i(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=n(Ae,"CODE",{});var aa=a(qe);_e=i(aa,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),aa.forEach(o),Ae.forEach(o),De.forEach(o)},m($,M){h($,p,M),e(p,L),h($,u,M),h($,b,M),e(b,y),e(y,C),e(b,f),e(b,k),e(k,Ho),h($,rt,M),h($,j,M),e(j,ue),e(j,Ce),e(Ce,be),e(j,Ko),e(j,ye),e(ye,Go),e(j,Xt),h($,pe,M),h($,je,M),e(je,Le),h($,Zt,M),h($,H,M),e(H,me),e(me,Me),e(me,it),e(it,Qt),e(me,Fe),e(me,ke),e(ke,Jo),e(H,Yt),e(H,A),e(A,ge),e(A,we),e(we,$e),e(A,Xo),e(A,xe),e(xe,Zo),e(H,eo),e(H,he),e(he,Qo),e(he,qe),e(qe,_e)},d($){$&&o(p),$&&o(u),$&&o(b),$&&o(rt),$&&o(j),$&&o(pe),$&&o(je),$&&o(Zt),$&&o(H)}}}function uP(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function gP(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function _P(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function vP(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function PP(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function IP(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function TP(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function CP(x){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=n(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){h(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function bP(x){let p,L,u,b,y,C,f,k,Ho,rt,j,ue,Ce,be,Ko,ye,Go,Xt,pe,je,Le,Zt,H,me,Me,it,Qt,Fe,ke,Jo,Yt,A,ge,we,$e,Xo,xe,Zo,eo,he,Qo,qe,_e,$,M,to,Qn,Yo,E,Yn,lt,ea,De,ve,ta,oa,Pe,sa,na,Ae,aa,xd,ra,Ed,zd,ia,jd,Md,sl,es,nl,Ne,Fd,ts,qd,Dd,os,Ad,Nd,al,dt,oo,pr,ss,Vd,mr,Od,rl,fe,ns,Sd,so,la,Wd,Bd,da,Ud,Rd,Hd,ct,Kd,ca,Gd,Jd,pa,Xd,Zd,Qd,no,as,Yd,rs,ec,ma,tc,oc,il,pt,ao,hr,is,sc,fr,nc,ll,O,ls,ac,mt,rc,ha,ic,lc,ds,dc,cc,pc,ht,mc,fa,hc,fc,ua,uc,gc,_c,ur,vc,Pc,cs,dl,ft,ro,gr,ps,Ic,_r,Tc,cl,S,ms,Cc,ut,bc,ga,yc,Lc,hs,kc,wc,$c,gt,xc,_a,Ec,zc,va,jc,Mc,Fc,vr,qc,Dc,fs,pl,_t,io,Pr,us,Ac,Ir,Nc,ml,F,gs,Vc,Tr,Oc,Sc,_s,Wc,Pa,Bc,Uc,Rc,Ie,vs,Hc,Cr,Kc,Gc,br,Ia,Jc,yr,Xc,Zc,Lr,Qc,Yc,lo,Ps,ep,Is,tp,kr,op,sp,np,co,Ts,ap,wr,rp,ip,Ta,Cs,hl,vt,po,$r,bs,lp,xr,dp,fl,W,ys,cp,Ls,pp,Er,mp,hp,fp,ks,up,Ca,gp,_p,vp,Te,ws,Pp,zr,Ip,Tp,jr,ba,Cp,Mr,bp,yp,Fr,Lp,kp,mo,$s,wp,qr,$p,ul,Pt,ho,Dr,xs,xp,Ar,Ep,gl,B,Es,zp,Nr,jp,Mp,zs,Fp,ya,qp,Dp,Ap,fo,js,Np,Ms,Vp,Vr,Op,Sp,Wp,uo,Fs,Bp,It,Up,Or,Rp,Hp,Sr,Kp,Gp,_l,Tt,go,Wr,qs,Jp,Br,Xp,vl,U,Ds,Zp,Ur,Qp,Yp,K,La,em,tm,ka,om,sm,wa,nm,am,Rr,rm,im,$a,lm,dm,cm,_o,As,pm,Ns,mm,xa,hm,fm,um,vo,Vs,gm,Os,_m,Ea,vm,Pm,Pl,Ct,Po,Hr,Ss,Im,Kr,Tm,Il,R,Ws,Cm,Bs,bm,Us,ym,Lm,km,G,Rs,wm,bt,$m,za,xm,Em,Gr,zm,jm,Mm,Io,Fm,Jr,qm,Dm,Hs,Am,J,Ks,Nm,yt,Vm,ja,Om,Sm,Xr,Wm,Bm,Um,To,Rm,Zr,Hm,Km,Gs,Gm,X,Js,Jm,Lt,Xm,Ma,Zm,Qm,Qr,Ym,eh,th,Co,oh,Yr,sh,nh,Xs,Tl,kt,bo,ei,Zs,ah,ti,rh,Cl,wt,Qs,ih,Z,Ys,lh,$t,dh,Fa,ch,ph,oi,mh,hh,fh,yo,uh,si,gh,_h,en,bl,xt,Lo,ni,tn,vh,ai,Ph,yl,Et,on,Ih,Q,sn,Th,zt,Ch,qa,bh,yh,ri,Lh,kh,wh,ko,$h,ii,xh,Eh,nn,Ll,jt,wo,li,an,zh,di,jh,kl,q,rn,Mh,ln,Fh,Da,qh,Dh,Ah,dn,Nh,cn,Vh,Oh,Sh,$o,Wh,Y,pn,Bh,Mt,Uh,Aa,Rh,Hh,ci,Kh,Gh,Jh,xo,Xh,pi,Zh,Qh,mn,Yh,ee,hn,ef,Ft,tf,Na,of,sf,mi,nf,af,rf,Eo,lf,hi,df,cf,fn,pf,te,un,mf,qt,hf,Va,ff,uf,fi,gf,_f,vf,zo,Pf,ui,If,Tf,gn,wl,Dt,jo,gi,_n,Cf,_i,bf,$l,At,vn,yf,oe,Pn,Lf,Nt,kf,Oa,wf,$f,vi,xf,Ef,zf,Mo,jf,Pi,Mf,Ff,In,xl,Vt,Fo,Ii,Tn,qf,Ti,Df,El,Ot,Cn,Af,se,bn,Nf,St,Vf,Sa,Of,Sf,Ci,Wf,Bf,Uf,qo,Rf,bi,Hf,Kf,yn,zl,Wt,Do,yi,Ln,Gf,Li,Jf,jl,z,kn,Xf,wn,Zf,Wa,Qf,Yf,eu,$n,tu,xn,ou,su,nu,ki,au,ru,Ee,wi,En,iu,lu,$i,zn,du,cu,xi,jn,pu,mu,Ei,Mn,hu,fu,ne,Fn,uu,Bt,gu,zi,_u,vu,ji,Pu,Iu,Tu,Ao,Cu,Mi,bu,yu,qn,Lu,Ve,Dn,ku,Fi,wu,$u,An,xu,Oe,Nn,Eu,qi,zu,ju,Vn,Ml,Ut,No,Di,On,Mu,Ai,Fu,Fl,Rt,Sn,qu,ae,Wn,Du,Ht,Au,Ni,Nu,Vu,Vi,Ou,Su,Wu,Vo,Bu,Oi,Uu,Ru,Bn,ql,Kt,Oo,Si,Un,Hu,Wi,Ku,Dl,Gt,Rn,Gu,re,Hn,Ju,Jt,Xu,Bi,Zu,Qu,Ui,Yu,eg,tg,So,og,Ri,sg,ng,Kn,Al;return C=new D({}),be=new D({}),$e=new D({}),es=new N({props:{code:`from PIL import Image
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
Dictionary of keyword arguments.`,name:"kwargs"}]}}),as=new w({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/configuration_clip.py#L258",returnDescription:`
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
`}}),Ts=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip.py#L241",parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),js=new w({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/feature_extraction_clip.py#L159",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}]}}),Fs=new w({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = 3"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/feature_extraction_clip.py#L185",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}]}}),qs=new D({}),Ds=new w({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/processing_clip.py#L22",parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),As=new w({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/processing_clip.py#L95"}}),Vs=new w({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/processing_clip.py#L102"}}),Ss=new D({}),Ws=new w({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L837",parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.
(<code>torch.FloatTensor</code><strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.
(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>BaseModelOutputWithPooling</code>)</li>
</ul>
`}}),Io=new ce({props:{$$slots:{default:[dP]},$$scope:{ctx:x}}}),Hs=new N({props:{code:`from PIL import Image
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
`}}),To=new ce({props:{$$slots:{default:[cP]},$$scope:{ctx:x}}}),Gs=new N({props:{code:`from transformers import CLIPTokenizer, CLIPModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),an=new D({}),rn=new w({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1287",parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.
(<code>tf.Tensor</code><strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.
(<code>tf.Tensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>TFBaseModelOutputWithPooling</code>)</li>
</ul>
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
`}}),Mo=new ce({props:{$$slots:{default:[vP]},$$scope:{ctx:x}}}),In=new N({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Tn=new D({}),Cn=new w({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1176"}}),bn=new w({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1217",parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
<p>(<code>jnp.ndarray</code><strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.
(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</p>
<ul>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>)</li>
</ul>
`}}),Ao=new ce({props:{$$slots:{default:[IP]},$$scope:{ctx:x}}}),qn=new N({props:{code:`import jax
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
`}}),Vn=new N({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),On=new D({}),Sn=new w({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L929"}}),Wn=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L604",parametersDescription:[{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Vo=new ce({props:{$$slots:{default:[TP]},$$scope:{ctx:x}}}),Bn=new N({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=s("meta"),L=l(),u=s("h1"),b=s("a"),y=s("span"),g(C.$$.fragment),f=l(),k=s("span"),Ho=r("CLIP"),rt=l(),j=s("h2"),ue=s("a"),Ce=s("span"),g(be.$$.fragment),Ko=l(),ye=s("span"),Go=r("Overview"),Xt=l(),pe=s("p"),je=r("The CLIP model was proposed in "),Le=s("a"),Zt=r("Learning Transferable Visual Models From Natural Language Supervision"),H=r(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),me=l(),Me=s("p"),it=r("The abstract from the paper is the following:"),Qt=l(),Fe=s("p"),ke=s("em"),Jo=r(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Yt=l(),A=s("h2"),ge=s("a"),we=s("span"),g($e.$$.fragment),Xo=l(),xe=s("span"),Zo=r("Usage"),eo=l(),he=s("p"),Qo=r(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),qe=l(),_e=s("p"),$=r(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),M=s("a"),to=r("CLIPFeatureExtractor"),Qn=r(" can be used to resize (or rescale) and normalize images for the model."),Yo=l(),E=s("p"),Yn=r("The "),lt=s("a"),ea=r("CLIPTokenizer"),De=r(" is used to encode the text. The "),ve=s("a"),ta=r("CLIPProcessor"),oa=r(` wraps
`),Pe=s("a"),sa=r("CLIPFeatureExtractor"),na=r(" and "),Ae=s("a"),aa=r("CLIPTokenizer"),xd=r(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ra=s("a"),Ed=r("CLIPProcessor"),zd=r(" and "),ia=s("a"),jd=r("CLIPModel"),Md=r("."),sl=l(),g(es.$$.fragment),nl=l(),Ne=s("p"),Fd=r("This model was contributed by "),ts=s("a"),qd=r("valhalla"),Dd=r(". The original code can be found "),os=s("a"),Ad=r("here"),Nd=r("."),al=l(),dt=s("h2"),oo=s("a"),pr=s("span"),g(ss.$$.fragment),Vd=l(),mr=s("span"),Od=r("CLIPConfig"),rl=l(),fe=s("div"),g(ns.$$.fragment),Sd=l(),so=s("p"),la=s("a"),Wd=r("CLIPConfig"),Bd=r(" is the configuration class to store the configuration of a "),da=s("a"),Ud=r("CLIPModel"),Rd=r(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Hd=l(),ct=s("p"),Kd=r("Configuration objects inherit from "),ca=s("a"),Gd=r("PretrainedConfig"),Jd=r(` and can be used to control the model outputs. Read the
documentation from `),pa=s("a"),Xd=r("PretrainedConfig"),Zd=r(" for more information."),Qd=l(),no=s("div"),g(as.$$.fragment),Yd=l(),rs=s("p"),ec=r("Instantiate a "),ma=s("a"),tc=r("CLIPConfig"),oc=r(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),il=l(),pt=s("h2"),ao=s("a"),hr=s("span"),g(is.$$.fragment),sc=l(),fr=s("span"),nc=r("CLIPTextConfig"),ll=l(),O=s("div"),g(ls.$$.fragment),ac=l(),mt=s("p"),rc=r("This is the configuration class to store the configuration of a "),ha=s("a"),ic=r("CLIPModel"),lc=r(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),ds=s("a"),dc=r("openai/clip-vit-base-patch32"),cc=r(" architecture."),pc=l(),ht=s("p"),mc=r("Configuration objects inherit from "),fa=s("a"),hc=r("PretrainedConfig"),fc=r(` and can be used to control the model outputs. Read the
documentation from `),ua=s("a"),uc=r("PretrainedConfig"),gc=r(" for more information."),_c=l(),ur=s("p"),vc=r("Example:"),Pc=l(),g(cs.$$.fragment),dl=l(),ft=s("h2"),ro=s("a"),gr=s("span"),g(ps.$$.fragment),Ic=l(),_r=s("span"),Tc=r("CLIPVisionConfig"),cl=l(),S=s("div"),g(ms.$$.fragment),Cc=l(),ut=s("p"),bc=r("This is the configuration class to store the configuration of a "),ga=s("a"),yc=r("CLIPModel"),Lc=r(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),hs=s("a"),kc=r("openai/clip-vit-base-patch32"),wc=r(" architecture."),$c=l(),gt=s("p"),xc=r("Configuration objects inherit from "),_a=s("a"),Ec=r("PretrainedConfig"),zc=r(` and can be used to control the model outputs. Read the
documentation from `),va=s("a"),jc=r("PretrainedConfig"),Mc=r(" for more information."),Fc=l(),vr=s("p"),qc=r("Example:"),Dc=l(),g(fs.$$.fragment),pl=l(),_t=s("h2"),io=s("a"),Pr=s("span"),g(us.$$.fragment),Ac=l(),Ir=s("span"),Nc=r("CLIPTokenizer"),ml=l(),F=s("div"),g(gs.$$.fragment),Vc=l(),Tr=s("p"),Oc=r("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Sc=l(),_s=s("p"),Wc=r("This tokenizer inherits from "),Pa=s("a"),Bc=r("PreTrainedTokenizer"),Uc=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rc=l(),Ie=s("div"),g(vs.$$.fragment),Hc=l(),Cr=s("p"),Kc=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Gc=l(),br=s("ul"),Ia=s("li"),Jc=r("single sequence: "),yr=s("code"),Xc=r("<|startoftext|> X <|endoftext|>"),Zc=l(),Lr=s("p"),Qc=r("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Yc=l(),lo=s("div"),g(Ps.$$.fragment),ep=l(),Is=s("p"),tp=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),kr=s("code"),op=r("prepare_for_model"),sp=r(" method."),np=l(),co=s("div"),g(Ts.$$.fragment),ap=l(),wr=s("p"),rp=r(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ip=l(),Ta=s("div"),g(Cs.$$.fragment),hl=l(),vt=s("h2"),po=s("a"),$r=s("span"),g(bs.$$.fragment),lp=l(),xr=s("span"),dp=r("CLIPTokenizerFast"),fl=l(),W=s("div"),g(ys.$$.fragment),cp=l(),Ls=s("p"),pp=r("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Er=s("em"),mp=r("tokenizers"),hp=r(` library). Based on byte-level
Byte-Pair-Encoding.`),fp=l(),ks=s("p"),up=r("This tokenizer inherits from "),Ca=s("a"),gp=r("PreTrainedTokenizerFast"),_p=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),vp=l(),Te=s("div"),g(ws.$$.fragment),Pp=l(),zr=s("p"),Ip=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Tp=l(),jr=s("ul"),ba=s("li"),Cp=r("single sequence: "),Mr=s("code"),bp=r("<|startoftext|> X <|endoftext|>"),yp=l(),Fr=s("p"),Lp=r("Pairs of sequences are not the expected use case, but they will be handled without a separator."),kp=l(),mo=s("div"),g($s.$$.fragment),wp=l(),qr=s("p"),$p=r(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ul=l(),Pt=s("h2"),ho=s("a"),Dr=s("span"),g(xs.$$.fragment),xp=l(),Ar=s("span"),Ep=r("CLIPFeatureExtractor"),gl=l(),B=s("div"),g(Es.$$.fragment),zp=l(),Nr=s("p"),jp=r("Constructs a CLIP feature extractor."),Mp=l(),zs=s("p"),Fp=r("This feature extractor inherits from "),ya=s("a"),qp=r("FeatureExtractionMixin"),Dp=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ap=l(),fo=s("div"),g(js.$$.fragment),Np=l(),Ms=s("p"),Vp=r("Crops "),Vr=s("code"),Op=r("image"),Sp=r(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Wp=l(),uo=s("div"),g(Fs.$$.fragment),Bp=l(),It=s("p"),Up=r("Resizes "),Or=s("code"),Rp=r("image"),Hp=r(". Note that this will trigger a conversion of "),Sr=s("code"),Kp=r("image"),Gp=r(" to a PIL Image."),_l=l(),Tt=s("h2"),go=s("a"),Wr=s("span"),g(qs.$$.fragment),Jp=l(),Br=s("span"),Xp=r("CLIPProcessor"),vl=l(),U=s("div"),g(Ds.$$.fragment),Zp=l(),Ur=s("p"),Qp=r("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Yp=l(),K=s("p"),La=s("a"),em=r("CLIPProcessor"),tm=r(" offers all the functionalities of "),ka=s("a"),om=r("CLIPFeatureExtractor"),sm=r(" and "),wa=s("a"),nm=r("CLIPTokenizerFast"),am=r(`. See the
`),Rr=s("code"),rm=r("__call__()"),im=r("and "),$a=s("a"),lm=r("decode()"),dm=r(" for more information."),cm=l(),_o=s("div"),g(As.$$.fragment),pm=l(),Ns=s("p"),mm=r("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),xa=s("a"),hm=r("batch_decode()"),fm=r(`. Please
refer to the docstring of this method for more information.`),um=l(),vo=s("div"),g(Vs.$$.fragment),gm=l(),Os=s("p"),_m=r("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ea=s("a"),vm=r("decode()"),Pm=r(`. Please refer to
the docstring of this method for more information.`),Pl=l(),Ct=s("h2"),Po=s("a"),Hr=s("span"),g(Ss.$$.fragment),Im=l(),Kr=s("span"),Tm=r("CLIPModel"),Il=l(),R=s("div"),g(Ws.$$.fragment),Cm=l(),Bs=s("p"),bm=r("This model is a PyTorch "),Us=s("a"),ym=r("torch.nn.Module"),Lm=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),km=l(),G=s("div"),g(Rs.$$.fragment),wm=l(),bt=s("p"),$m=r("The "),za=s("a"),xm=r("CLIPModel"),Em=r(" forward method, overrides the "),Gr=s("code"),zm=r("__call__"),jm=r(" special method."),Mm=l(),g(Io.$$.fragment),Fm=l(),Jr=s("p"),qm=r("Examples:"),Dm=l(),g(Hs.$$.fragment),Am=l(),J=s("div"),g(Ks.$$.fragment),Nm=l(),yt=s("p"),Vm=r("The "),ja=s("a"),Om=r("CLIPModel"),Sm=r(" forward method, overrides the "),Xr=s("code"),Wm=r("__call__"),Bm=r(" special method."),Um=l(),g(To.$$.fragment),Rm=l(),Zr=s("p"),Hm=r("Examples:"),Km=l(),g(Gs.$$.fragment),Gm=l(),X=s("div"),g(Js.$$.fragment),Jm=l(),Lt=s("p"),Xm=r("The "),Ma=s("a"),Zm=r("CLIPModel"),Qm=r(" forward method, overrides the "),Qr=s("code"),Ym=r("__call__"),eh=r(" special method."),th=l(),g(Co.$$.fragment),oh=l(),Yr=s("p"),sh=r("Examples:"),nh=l(),g(Xs.$$.fragment),Tl=l(),kt=s("h2"),bo=s("a"),ei=s("span"),g(Zs.$$.fragment),ah=l(),ti=s("span"),rh=r("CLIPTextModel"),Cl=l(),wt=s("div"),g(Qs.$$.fragment),ih=l(),Z=s("div"),g(Ys.$$.fragment),lh=l(),$t=s("p"),dh=r("The "),Fa=s("a"),ch=r("CLIPTextModel"),ph=r(" forward method, overrides the "),oi=s("code"),mh=r("__call__"),hh=r(" special method."),fh=l(),g(yo.$$.fragment),uh=l(),si=s("p"),gh=r("Examples:"),_h=l(),g(en.$$.fragment),bl=l(),xt=s("h2"),Lo=s("a"),ni=s("span"),g(tn.$$.fragment),vh=l(),ai=s("span"),Ph=r("CLIPVisionModel"),yl=l(),Et=s("div"),g(on.$$.fragment),Ih=l(),Q=s("div"),g(sn.$$.fragment),Th=l(),zt=s("p"),Ch=r("The "),qa=s("a"),bh=r("CLIPVisionModel"),yh=r(" forward method, overrides the "),ri=s("code"),Lh=r("__call__"),kh=r(" special method."),wh=l(),g(ko.$$.fragment),$h=l(),ii=s("p"),xh=r("Examples:"),Eh=l(),g(nn.$$.fragment),Ll=l(),jt=s("h2"),wo=s("a"),li=s("span"),g(an.$$.fragment),zh=l(),di=s("span"),jh=r("TFCLIPModel"),kl=l(),q=s("div"),g(rn.$$.fragment),Mh=l(),ln=s("p"),Fh=r("This model inherits from "),Da=s("a"),qh=r("TFPreTrainedModel"),Dh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ah=l(),dn=s("p"),Nh=r("This model is also a "),cn=s("a"),Vh=r("tf.keras.Model"),Oh=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sh=l(),g($o.$$.fragment),Wh=l(),Y=s("div"),g(pn.$$.fragment),Bh=l(),Mt=s("p"),Uh=r("The "),Aa=s("a"),Rh=r("TFCLIPModel"),Hh=r(" forward method, overrides the "),ci=s("code"),Kh=r("__call__"),Gh=r(" special method."),Jh=l(),g(xo.$$.fragment),Xh=l(),pi=s("p"),Zh=r("Examples:"),Qh=l(),g(mn.$$.fragment),Yh=l(),ee=s("div"),g(hn.$$.fragment),ef=l(),Ft=s("p"),tf=r("The "),Na=s("a"),of=r("TFCLIPModel"),sf=r(" forward method, overrides the "),mi=s("code"),nf=r("__call__"),af=r(" special method."),rf=l(),g(Eo.$$.fragment),lf=l(),hi=s("p"),df=r("Examples:"),cf=l(),g(fn.$$.fragment),pf=l(),te=s("div"),g(un.$$.fragment),mf=l(),qt=s("p"),hf=r("The "),Va=s("a"),ff=r("TFCLIPModel"),uf=r(" forward method, overrides the "),fi=s("code"),gf=r("__call__"),_f=r(" special method."),vf=l(),g(zo.$$.fragment),Pf=l(),ui=s("p"),If=r("Examples:"),Tf=l(),g(gn.$$.fragment),wl=l(),Dt=s("h2"),jo=s("a"),gi=s("span"),g(_n.$$.fragment),Cf=l(),_i=s("span"),bf=r("TFCLIPTextModel"),$l=l(),At=s("div"),g(vn.$$.fragment),yf=l(),oe=s("div"),g(Pn.$$.fragment),Lf=l(),Nt=s("p"),kf=r("The "),Oa=s("a"),wf=r("TFCLIPTextModel"),$f=r(" forward method, overrides the "),vi=s("code"),xf=r("__call__"),Ef=r(" special method."),zf=l(),g(Mo.$$.fragment),jf=l(),Pi=s("p"),Mf=r("Examples:"),Ff=l(),g(In.$$.fragment),xl=l(),Vt=s("h2"),Fo=s("a"),Ii=s("span"),g(Tn.$$.fragment),qf=l(),Ti=s("span"),Df=r("TFCLIPVisionModel"),El=l(),Ot=s("div"),g(Cn.$$.fragment),Af=l(),se=s("div"),g(bn.$$.fragment),Nf=l(),St=s("p"),Vf=r("The "),Sa=s("a"),Of=r("TFCLIPVisionModel"),Sf=r(" forward method, overrides the "),Ci=s("code"),Wf=r("__call__"),Bf=r(" special method."),Uf=l(),g(qo.$$.fragment),Rf=l(),bi=s("p"),Hf=r("Examples:"),Kf=l(),g(yn.$$.fragment),zl=l(),Wt=s("h2"),Do=s("a"),yi=s("span"),g(Ln.$$.fragment),Gf=l(),Li=s("span"),Jf=r("FlaxCLIPModel"),jl=l(),z=s("div"),g(kn.$$.fragment),Xf=l(),wn=s("p"),Zf=r("This model inherits from "),Wa=s("a"),Qf=r("FlaxPreTrainedModel"),Yf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eu=l(),$n=s("p"),tu=r("This model is also a Flax Linen "),xn=s("a"),ou=r("flax.linen.Module"),su=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nu=l(),ki=s("p"),au=r("Finally, this model supports inherent JAX features such as:"),ru=l(),Ee=s("ul"),wi=s("li"),En=s("a"),iu=r("Just-In-Time (JIT) compilation"),lu=l(),$i=s("li"),zn=s("a"),du=r("Automatic Differentiation"),cu=l(),xi=s("li"),jn=s("a"),pu=r("Vectorization"),mu=l(),Ei=s("li"),Mn=s("a"),hu=r("Parallelization"),fu=l(),ne=s("div"),g(Fn.$$.fragment),uu=l(),Bt=s("p"),gu=r("The "),zi=s("code"),_u=r("FlaxCLIPPreTrainedModel"),vu=r("forward method, overrides the "),ji=s("code"),Pu=r("__call__"),Iu=r(" special method."),Tu=l(),g(Ao.$$.fragment),Cu=l(),Mi=s("p"),bu=r("Example:"),yu=l(),g(qn.$$.fragment),Lu=l(),Ve=s("div"),g(Dn.$$.fragment),ku=l(),Fi=s("p"),wu=r("Examples:"),$u=l(),g(An.$$.fragment),xu=l(),Oe=s("div"),g(Nn.$$.fragment),Eu=l(),qi=s("p"),zu=r("Examples:"),ju=l(),g(Vn.$$.fragment),Ml=l(),Ut=s("h2"),No=s("a"),Di=s("span"),g(On.$$.fragment),Mu=l(),Ai=s("span"),Fu=r("FlaxCLIPTextModel"),Fl=l(),Rt=s("div"),g(Sn.$$.fragment),qu=l(),ae=s("div"),g(Wn.$$.fragment),Du=l(),Ht=s("p"),Au=r("The "),Ni=s("code"),Nu=r("FlaxCLIPTextPreTrainedModel"),Vu=r("forward method, overrides the "),Vi=s("code"),Ou=r("__call__"),Su=r(" special method."),Wu=l(),g(Vo.$$.fragment),Bu=l(),Oi=s("p"),Uu=r("Example:"),Ru=l(),g(Bn.$$.fragment),ql=l(),Kt=s("h2"),Oo=s("a"),Si=s("span"),g(Un.$$.fragment),Hu=l(),Wi=s("span"),Ku=r("FlaxCLIPVisionModel"),Dl=l(),Gt=s("div"),g(Rn.$$.fragment),Gu=l(),re=s("div"),g(Hn.$$.fragment),Ju=l(),Jt=s("p"),Xu=r("The "),Bi=s("code"),Zu=r("FlaxCLIPVisionPreTrainedModel"),Qu=r("forward method, overrides the "),Ui=s("code"),Yu=r("__call__"),eg=r(" special method."),tg=l(),g(So.$$.fragment),og=l(),Ri=s("p"),sg=r("Example:"),ng=l(),g(Kn.$$.fragment),this.h()},l(t){const m=lP('[data-svelte="svelte-1phssyn"]',document.head);p=n(m,"META",{name:!0,content:!0}),m.forEach(o),L=d(t),u=n(t,"H1",{class:!0});var Gn=a(u);b=n(Gn,"A",{id:!0,class:!0,href:!0});var Hi=a(b);y=n(Hi,"SPAN",{});var Ki=a(y);_(C.$$.fragment,Ki),Ki.forEach(o),Hi.forEach(o),f=d(Gn),k=n(Gn,"SPAN",{});var Gi=a(k);Ho=i(Gi,"CLIP"),Gi.forEach(o),Gn.forEach(o),rt=d(t),j=n(t,"H2",{class:!0});var Jn=a(j);ue=n(Jn,"A",{id:!0,class:!0,href:!0});var Ji=a(ue);Ce=n(Ji,"SPAN",{});var Xi=a(Ce);_(be.$$.fragment,Xi),Xi.forEach(o),Ji.forEach(o),Ko=d(Jn),ye=n(Jn,"SPAN",{});var Zi=a(ye);Go=i(Zi,"Overview"),Zi.forEach(o),Jn.forEach(o),Xt=d(t),pe=n(t,"P",{});var Xn=a(pe);je=i(Xn,"The CLIP model was proposed in "),Le=n(Xn,"A",{href:!0,rel:!0});var Qi=a(Le);Zt=i(Qi,"Learning Transferable Visual Models From Natural Language Supervision"),Qi.forEach(o),H=i(Xn,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Xn.forEach(o),me=d(t),Me=n(t,"P",{});var Yi=a(Me);it=i(Yi,"The abstract from the paper is the following:"),Yi.forEach(o),Qt=d(t),Fe=n(t,"P",{});var el=a(Fe);ke=n(el,"EM",{});var tl=a(ke);Jo=i(tl,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),tl.forEach(o),el.forEach(o),Yt=d(t),A=n(t,"H2",{class:!0});var Zn=a(A);ge=n(Zn,"A",{id:!0,class:!0,href:!0});var ig=a(ge);we=n(ig,"SPAN",{});var lg=a(we);_($e.$$.fragment,lg),lg.forEach(o),ig.forEach(o),Xo=d(Zn),xe=n(Zn,"SPAN",{});var dg=a(xe);Zo=i(dg,"Usage"),dg.forEach(o),Zn.forEach(o),eo=d(t),he=n(t,"P",{});var cg=a(he);Qo=i(cg,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),cg.forEach(o),qe=d(t),_e=n(t,"P",{});var Nl=a(_e);$=i(Nl,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),M=n(Nl,"A",{href:!0});var pg=a(M);to=i(pg,"CLIPFeatureExtractor"),pg.forEach(o),Qn=i(Nl," can be used to resize (or rescale) and normalize images for the model."),Nl.forEach(o),Yo=d(t),E=n(t,"P",{});var ie=a(E);Yn=i(ie,"The "),lt=n(ie,"A",{href:!0});var mg=a(lt);ea=i(mg,"CLIPTokenizer"),mg.forEach(o),De=i(ie," is used to encode the text. The "),ve=n(ie,"A",{href:!0});var hg=a(ve);ta=i(hg,"CLIPProcessor"),hg.forEach(o),oa=i(ie,` wraps
`),Pe=n(ie,"A",{href:!0});var fg=a(Pe);sa=i(fg,"CLIPFeatureExtractor"),fg.forEach(o),na=i(ie," and "),Ae=n(ie,"A",{href:!0});var ug=a(Ae);aa=i(ug,"CLIPTokenizer"),ug.forEach(o),xd=i(ie,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ra=n(ie,"A",{href:!0});var gg=a(ra);Ed=i(gg,"CLIPProcessor"),gg.forEach(o),zd=i(ie," and "),ia=n(ie,"A",{href:!0});var _g=a(ia);jd=i(_g,"CLIPModel"),_g.forEach(o),Md=i(ie,"."),ie.forEach(o),sl=d(t),_(es.$$.fragment,t),nl=d(t),Ne=n(t,"P",{});var Ba=a(Ne);Fd=i(Ba,"This model was contributed by "),ts=n(Ba,"A",{href:!0,rel:!0});var vg=a(ts);qd=i(vg,"valhalla"),vg.forEach(o),Dd=i(Ba,". The original code can be found "),os=n(Ba,"A",{href:!0,rel:!0});var Pg=a(os);Ad=i(Pg,"here"),Pg.forEach(o),Nd=i(Ba,"."),Ba.forEach(o),al=d(t),dt=n(t,"H2",{class:!0});var Vl=a(dt);oo=n(Vl,"A",{id:!0,class:!0,href:!0});var Ig=a(oo);pr=n(Ig,"SPAN",{});var Tg=a(pr);_(ss.$$.fragment,Tg),Tg.forEach(o),Ig.forEach(o),Vd=d(Vl),mr=n(Vl,"SPAN",{});var Cg=a(mr);Od=i(Cg,"CLIPConfig"),Cg.forEach(o),Vl.forEach(o),rl=d(t),fe=n(t,"DIV",{class:!0});var Wo=a(fe);_(ns.$$.fragment,Wo),Sd=d(Wo),so=n(Wo,"P",{});var ol=a(so);la=n(ol,"A",{href:!0});var bg=a(la);Wd=i(bg,"CLIPConfig"),bg.forEach(o),Bd=i(ol," is the configuration class to store the configuration of a "),da=n(ol,"A",{href:!0});var yg=a(da);Ud=i(yg,"CLIPModel"),yg.forEach(o),Rd=i(ol,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),ol.forEach(o),Hd=d(Wo),ct=n(Wo,"P",{});var Ua=a(ct);Kd=i(Ua,"Configuration objects inherit from "),ca=n(Ua,"A",{href:!0});var Lg=a(ca);Gd=i(Lg,"PretrainedConfig"),Lg.forEach(o),Jd=i(Ua,` and can be used to control the model outputs. Read the
documentation from `),pa=n(Ua,"A",{href:!0});var kg=a(pa);Xd=i(kg,"PretrainedConfig"),kg.forEach(o),Zd=i(Ua," for more information."),Ua.forEach(o),Qd=d(Wo),no=n(Wo,"DIV",{class:!0});var Ol=a(no);_(as.$$.fragment,Ol),Yd=d(Ol),rs=n(Ol,"P",{});var Sl=a(rs);ec=i(Sl,"Instantiate a "),ma=n(Sl,"A",{href:!0});var wg=a(ma);tc=i(wg,"CLIPConfig"),wg.forEach(o),oc=i(Sl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Sl.forEach(o),Ol.forEach(o),Wo.forEach(o),il=d(t),pt=n(t,"H2",{class:!0});var Wl=a(pt);ao=n(Wl,"A",{id:!0,class:!0,href:!0});var $g=a(ao);hr=n($g,"SPAN",{});var xg=a(hr);_(is.$$.fragment,xg),xg.forEach(o),$g.forEach(o),sc=d(Wl),fr=n(Wl,"SPAN",{});var Eg=a(fr);nc=i(Eg,"CLIPTextConfig"),Eg.forEach(o),Wl.forEach(o),ll=d(t),O=n(t,"DIV",{class:!0});var Se=a(O);_(ls.$$.fragment,Se),ac=d(Se),mt=n(Se,"P",{});var Ra=a(mt);rc=i(Ra,"This is the configuration class to store the configuration of a "),ha=n(Ra,"A",{href:!0});var zg=a(ha);ic=i(zg,"CLIPModel"),zg.forEach(o),lc=i(Ra,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),ds=n(Ra,"A",{href:!0,rel:!0});var jg=a(ds);dc=i(jg,"openai/clip-vit-base-patch32"),jg.forEach(o),cc=i(Ra," architecture."),Ra.forEach(o),pc=d(Se),ht=n(Se,"P",{});var Ha=a(ht);mc=i(Ha,"Configuration objects inherit from "),fa=n(Ha,"A",{href:!0});var Mg=a(fa);hc=i(Mg,"PretrainedConfig"),Mg.forEach(o),fc=i(Ha,` and can be used to control the model outputs. Read the
documentation from `),ua=n(Ha,"A",{href:!0});var Fg=a(ua);uc=i(Fg,"PretrainedConfig"),Fg.forEach(o),gc=i(Ha," for more information."),Ha.forEach(o),_c=d(Se),ur=n(Se,"P",{});var qg=a(ur);vc=i(qg,"Example:"),qg.forEach(o),Pc=d(Se),_(cs.$$.fragment,Se),Se.forEach(o),dl=d(t),ft=n(t,"H2",{class:!0});var Bl=a(ft);ro=n(Bl,"A",{id:!0,class:!0,href:!0});var Dg=a(ro);gr=n(Dg,"SPAN",{});var Ag=a(gr);_(ps.$$.fragment,Ag),Ag.forEach(o),Dg.forEach(o),Ic=d(Bl),_r=n(Bl,"SPAN",{});var Ng=a(_r);Tc=i(Ng,"CLIPVisionConfig"),Ng.forEach(o),Bl.forEach(o),cl=d(t),S=n(t,"DIV",{class:!0});var We=a(S);_(ms.$$.fragment,We),Cc=d(We),ut=n(We,"P",{});var Ka=a(ut);bc=i(Ka,"This is the configuration class to store the configuration of a "),ga=n(Ka,"A",{href:!0});var Vg=a(ga);yc=i(Vg,"CLIPModel"),Vg.forEach(o),Lc=i(Ka,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),hs=n(Ka,"A",{href:!0,rel:!0});var Og=a(hs);kc=i(Og,"openai/clip-vit-base-patch32"),Og.forEach(o),wc=i(Ka," architecture."),Ka.forEach(o),$c=d(We),gt=n(We,"P",{});var Ga=a(gt);xc=i(Ga,"Configuration objects inherit from "),_a=n(Ga,"A",{href:!0});var Sg=a(_a);Ec=i(Sg,"PretrainedConfig"),Sg.forEach(o),zc=i(Ga,` and can be used to control the model outputs. Read the
documentation from `),va=n(Ga,"A",{href:!0});var Wg=a(va);jc=i(Wg,"PretrainedConfig"),Wg.forEach(o),Mc=i(Ga," for more information."),Ga.forEach(o),Fc=d(We),vr=n(We,"P",{});var Bg=a(vr);qc=i(Bg,"Example:"),Bg.forEach(o),Dc=d(We),_(fs.$$.fragment,We),We.forEach(o),pl=d(t),_t=n(t,"H2",{class:!0});var Ul=a(_t);io=n(Ul,"A",{id:!0,class:!0,href:!0});var Ug=a(io);Pr=n(Ug,"SPAN",{});var Rg=a(Pr);_(us.$$.fragment,Rg),Rg.forEach(o),Ug.forEach(o),Ac=d(Ul),Ir=n(Ul,"SPAN",{});var Hg=a(Ir);Nc=i(Hg,"CLIPTokenizer"),Hg.forEach(o),Ul.forEach(o),ml=d(t),F=n(t,"DIV",{class:!0});var le=a(F);_(gs.$$.fragment,le),Vc=d(le),Tr=n(le,"P",{});var Kg=a(Tr);Oc=i(Kg,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Kg.forEach(o),Sc=d(le),_s=n(le,"P",{});var Rl=a(_s);Wc=i(Rl,"This tokenizer inherits from "),Pa=n(Rl,"A",{href:!0});var Gg=a(Pa);Bc=i(Gg,"PreTrainedTokenizer"),Gg.forEach(o),Uc=i(Rl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rl.forEach(o),Rc=d(le),Ie=n(le,"DIV",{class:!0});var Bo=a(Ie);_(vs.$$.fragment,Bo),Hc=d(Bo),Cr=n(Bo,"P",{});var Jg=a(Cr);Kc=i(Jg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Jg.forEach(o),Gc=d(Bo),br=n(Bo,"UL",{});var Xg=a(br);Ia=n(Xg,"LI",{});var ag=a(Ia);Jc=i(ag,"single sequence: "),yr=n(ag,"CODE",{});var Zg=a(yr);Xc=i(Zg,"<|startoftext|> X <|endoftext|>"),Zg.forEach(o),ag.forEach(o),Xg.forEach(o),Zc=d(Bo),Lr=n(Bo,"P",{});var Qg=a(Lr);Qc=i(Qg,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Qg.forEach(o),Bo.forEach(o),Yc=d(le),lo=n(le,"DIV",{class:!0});var Hl=a(lo);_(Ps.$$.fragment,Hl),ep=d(Hl),Is=n(Hl,"P",{});var Kl=a(Is);tp=i(Kl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),kr=n(Kl,"CODE",{});var Yg=a(kr);op=i(Yg,"prepare_for_model"),Yg.forEach(o),sp=i(Kl," method."),Kl.forEach(o),Hl.forEach(o),np=d(le),co=n(le,"DIV",{class:!0});var Gl=a(co);_(Ts.$$.fragment,Gl),ap=d(Gl),wr=n(Gl,"P",{});var e_=a(wr);rp=i(e_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),e_.forEach(o),Gl.forEach(o),ip=d(le),Ta=n(le,"DIV",{class:!0});var t_=a(Ta);_(Cs.$$.fragment,t_),t_.forEach(o),le.forEach(o),hl=d(t),vt=n(t,"H2",{class:!0});var Jl=a(vt);po=n(Jl,"A",{id:!0,class:!0,href:!0});var o_=a(po);$r=n(o_,"SPAN",{});var s_=a($r);_(bs.$$.fragment,s_),s_.forEach(o),o_.forEach(o),lp=d(Jl),xr=n(Jl,"SPAN",{});var n_=a(xr);dp=i(n_,"CLIPTokenizerFast"),n_.forEach(o),Jl.forEach(o),fl=d(t),W=n(t,"DIV",{class:!0});var Be=a(W);_(ys.$$.fragment,Be),cp=d(Be),Ls=n(Be,"P",{});var Xl=a(Ls);pp=i(Xl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Er=n(Xl,"EM",{});var a_=a(Er);mp=i(a_,"tokenizers"),a_.forEach(o),hp=i(Xl,` library). Based on byte-level
Byte-Pair-Encoding.`),Xl.forEach(o),fp=d(Be),ks=n(Be,"P",{});var Zl=a(ks);up=i(Zl,"This tokenizer inherits from "),Ca=n(Zl,"A",{href:!0});var r_=a(Ca);gp=i(r_,"PreTrainedTokenizerFast"),r_.forEach(o),_p=i(Zl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Zl.forEach(o),vp=d(Be),Te=n(Be,"DIV",{class:!0});var Uo=a(Te);_(ws.$$.fragment,Uo),Pp=d(Uo),zr=n(Uo,"P",{});var i_=a(zr);Ip=i(i_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),i_.forEach(o),Tp=d(Uo),jr=n(Uo,"UL",{});var l_=a(jr);ba=n(l_,"LI",{});var rg=a(ba);Cp=i(rg,"single sequence: "),Mr=n(rg,"CODE",{});var d_=a(Mr);bp=i(d_,"<|startoftext|> X <|endoftext|>"),d_.forEach(o),rg.forEach(o),l_.forEach(o),yp=d(Uo),Fr=n(Uo,"P",{});var c_=a(Fr);Lp=i(c_,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),c_.forEach(o),Uo.forEach(o),kp=d(Be),mo=n(Be,"DIV",{class:!0});var Ql=a(mo);_($s.$$.fragment,Ql),wp=d(Ql),qr=n(Ql,"P",{});var p_=a(qr);$p=i(p_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),p_.forEach(o),Ql.forEach(o),Be.forEach(o),ul=d(t),Pt=n(t,"H2",{class:!0});var Yl=a(Pt);ho=n(Yl,"A",{id:!0,class:!0,href:!0});var m_=a(ho);Dr=n(m_,"SPAN",{});var h_=a(Dr);_(xs.$$.fragment,h_),h_.forEach(o),m_.forEach(o),xp=d(Yl),Ar=n(Yl,"SPAN",{});var f_=a(Ar);Ep=i(f_,"CLIPFeatureExtractor"),f_.forEach(o),Yl.forEach(o),gl=d(t),B=n(t,"DIV",{class:!0});var Ue=a(B);_(Es.$$.fragment,Ue),zp=d(Ue),Nr=n(Ue,"P",{});var u_=a(Nr);jp=i(u_,"Constructs a CLIP feature extractor."),u_.forEach(o),Mp=d(Ue),zs=n(Ue,"P",{});var ed=a(zs);Fp=i(ed,"This feature extractor inherits from "),ya=n(ed,"A",{href:!0});var g_=a(ya);qp=i(g_,"FeatureExtractionMixin"),g_.forEach(o),Dp=i(ed,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ed.forEach(o),Ap=d(Ue),fo=n(Ue,"DIV",{class:!0});var td=a(fo);_(js.$$.fragment,td),Np=d(td),Ms=n(td,"P",{});var od=a(Ms);Vp=i(od,"Crops "),Vr=n(od,"CODE",{});var __=a(Vr);Op=i(__,"image"),__.forEach(o),Sp=i(od,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),od.forEach(o),td.forEach(o),Wp=d(Ue),uo=n(Ue,"DIV",{class:!0});var sd=a(uo);_(Fs.$$.fragment,sd),Bp=d(sd),It=n(sd,"P",{});var Ja=a(It);Up=i(Ja,"Resizes "),Or=n(Ja,"CODE",{});var v_=a(Or);Rp=i(v_,"image"),v_.forEach(o),Hp=i(Ja,". Note that this will trigger a conversion of "),Sr=n(Ja,"CODE",{});var P_=a(Sr);Kp=i(P_,"image"),P_.forEach(o),Gp=i(Ja," to a PIL Image."),Ja.forEach(o),sd.forEach(o),Ue.forEach(o),_l=d(t),Tt=n(t,"H2",{class:!0});var nd=a(Tt);go=n(nd,"A",{id:!0,class:!0,href:!0});var I_=a(go);Wr=n(I_,"SPAN",{});var T_=a(Wr);_(qs.$$.fragment,T_),T_.forEach(o),I_.forEach(o),Jp=d(nd),Br=n(nd,"SPAN",{});var C_=a(Br);Xp=i(C_,"CLIPProcessor"),C_.forEach(o),nd.forEach(o),vl=d(t),U=n(t,"DIV",{class:!0});var Re=a(U);_(Ds.$$.fragment,Re),Zp=d(Re),Ur=n(Re,"P",{});var b_=a(Ur);Qp=i(b_,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),b_.forEach(o),Yp=d(Re),K=n(Re,"P",{});var ze=a(K);La=n(ze,"A",{href:!0});var y_=a(La);em=i(y_,"CLIPProcessor"),y_.forEach(o),tm=i(ze," offers all the functionalities of "),ka=n(ze,"A",{href:!0});var L_=a(ka);om=i(L_,"CLIPFeatureExtractor"),L_.forEach(o),sm=i(ze," and "),wa=n(ze,"A",{href:!0});var k_=a(wa);nm=i(k_,"CLIPTokenizerFast"),k_.forEach(o),am=i(ze,`. See the
`),Rr=n(ze,"CODE",{});var w_=a(Rr);rm=i(w_,"__call__()"),w_.forEach(o),im=i(ze,"and "),$a=n(ze,"A",{href:!0});var $_=a($a);lm=i($_,"decode()"),$_.forEach(o),dm=i(ze," for more information."),ze.forEach(o),cm=d(Re),_o=n(Re,"DIV",{class:!0});var ad=a(_o);_(As.$$.fragment,ad),pm=d(ad),Ns=n(ad,"P",{});var rd=a(Ns);mm=i(rd,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),xa=n(rd,"A",{href:!0});var x_=a(xa);hm=i(x_,"batch_decode()"),x_.forEach(o),fm=i(rd,`. Please
refer to the docstring of this method for more information.`),rd.forEach(o),ad.forEach(o),um=d(Re),vo=n(Re,"DIV",{class:!0});var id=a(vo);_(Vs.$$.fragment,id),gm=d(id),Os=n(id,"P",{});var ld=a(Os);_m=i(ld,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ea=n(ld,"A",{href:!0});var E_=a(Ea);vm=i(E_,"decode()"),E_.forEach(o),Pm=i(ld,`. Please refer to
the docstring of this method for more information.`),ld.forEach(o),id.forEach(o),Re.forEach(o),Pl=d(t),Ct=n(t,"H2",{class:!0});var dd=a(Ct);Po=n(dd,"A",{id:!0,class:!0,href:!0});var z_=a(Po);Hr=n(z_,"SPAN",{});var j_=a(Hr);_(Ss.$$.fragment,j_),j_.forEach(o),z_.forEach(o),Im=d(dd),Kr=n(dd,"SPAN",{});var M_=a(Kr);Tm=i(M_,"CLIPModel"),M_.forEach(o),dd.forEach(o),Il=d(t),R=n(t,"DIV",{class:!0});var He=a(R);_(Ws.$$.fragment,He),Cm=d(He),Bs=n(He,"P",{});var cd=a(Bs);bm=i(cd,"This model is a PyTorch "),Us=n(cd,"A",{href:!0,rel:!0});var F_=a(Us);ym=i(F_,"torch.nn.Module"),F_.forEach(o),Lm=i(cd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cd.forEach(o),km=d(He),G=n(He,"DIV",{class:!0});var Ke=a(G);_(Rs.$$.fragment,Ke),wm=d(Ke),bt=n(Ke,"P",{});var Xa=a(bt);$m=i(Xa,"The "),za=n(Xa,"A",{href:!0});var q_=a(za);xm=i(q_,"CLIPModel"),q_.forEach(o),Em=i(Xa," forward method, overrides the "),Gr=n(Xa,"CODE",{});var D_=a(Gr);zm=i(D_,"__call__"),D_.forEach(o),jm=i(Xa," special method."),Xa.forEach(o),Mm=d(Ke),_(Io.$$.fragment,Ke),Fm=d(Ke),Jr=n(Ke,"P",{});var A_=a(Jr);qm=i(A_,"Examples:"),A_.forEach(o),Dm=d(Ke),_(Hs.$$.fragment,Ke),Ke.forEach(o),Am=d(He),J=n(He,"DIV",{class:!0});var Ge=a(J);_(Ks.$$.fragment,Ge),Nm=d(Ge),yt=n(Ge,"P",{});var Za=a(yt);Vm=i(Za,"The "),ja=n(Za,"A",{href:!0});var N_=a(ja);Om=i(N_,"CLIPModel"),N_.forEach(o),Sm=i(Za," forward method, overrides the "),Xr=n(Za,"CODE",{});var V_=a(Xr);Wm=i(V_,"__call__"),V_.forEach(o),Bm=i(Za," special method."),Za.forEach(o),Um=d(Ge),_(To.$$.fragment,Ge),Rm=d(Ge),Zr=n(Ge,"P",{});var O_=a(Zr);Hm=i(O_,"Examples:"),O_.forEach(o),Km=d(Ge),_(Gs.$$.fragment,Ge),Ge.forEach(o),Gm=d(He),X=n(He,"DIV",{class:!0});var Je=a(X);_(Js.$$.fragment,Je),Jm=d(Je),Lt=n(Je,"P",{});var Qa=a(Lt);Xm=i(Qa,"The "),Ma=n(Qa,"A",{href:!0});var S_=a(Ma);Zm=i(S_,"CLIPModel"),S_.forEach(o),Qm=i(Qa," forward method, overrides the "),Qr=n(Qa,"CODE",{});var W_=a(Qr);Ym=i(W_,"__call__"),W_.forEach(o),eh=i(Qa," special method."),Qa.forEach(o),th=d(Je),_(Co.$$.fragment,Je),oh=d(Je),Yr=n(Je,"P",{});var B_=a(Yr);sh=i(B_,"Examples:"),B_.forEach(o),nh=d(Je),_(Xs.$$.fragment,Je),Je.forEach(o),He.forEach(o),Tl=d(t),kt=n(t,"H2",{class:!0});var pd=a(kt);bo=n(pd,"A",{id:!0,class:!0,href:!0});var U_=a(bo);ei=n(U_,"SPAN",{});var R_=a(ei);_(Zs.$$.fragment,R_),R_.forEach(o),U_.forEach(o),ah=d(pd),ti=n(pd,"SPAN",{});var H_=a(ti);rh=i(H_,"CLIPTextModel"),H_.forEach(o),pd.forEach(o),Cl=d(t),wt=n(t,"DIV",{class:!0});var md=a(wt);_(Qs.$$.fragment,md),ih=d(md),Z=n(md,"DIV",{class:!0});var Xe=a(Z);_(Ys.$$.fragment,Xe),lh=d(Xe),$t=n(Xe,"P",{});var Ya=a($t);dh=i(Ya,"The "),Fa=n(Ya,"A",{href:!0});var K_=a(Fa);ch=i(K_,"CLIPTextModel"),K_.forEach(o),ph=i(Ya," forward method, overrides the "),oi=n(Ya,"CODE",{});var G_=a(oi);mh=i(G_,"__call__"),G_.forEach(o),hh=i(Ya," special method."),Ya.forEach(o),fh=d(Xe),_(yo.$$.fragment,Xe),uh=d(Xe),si=n(Xe,"P",{});var J_=a(si);gh=i(J_,"Examples:"),J_.forEach(o),_h=d(Xe),_(en.$$.fragment,Xe),Xe.forEach(o),md.forEach(o),bl=d(t),xt=n(t,"H2",{class:!0});var hd=a(xt);Lo=n(hd,"A",{id:!0,class:!0,href:!0});var X_=a(Lo);ni=n(X_,"SPAN",{});var Z_=a(ni);_(tn.$$.fragment,Z_),Z_.forEach(o),X_.forEach(o),vh=d(hd),ai=n(hd,"SPAN",{});var Q_=a(ai);Ph=i(Q_,"CLIPVisionModel"),Q_.forEach(o),hd.forEach(o),yl=d(t),Et=n(t,"DIV",{class:!0});var fd=a(Et);_(on.$$.fragment,fd),Ih=d(fd),Q=n(fd,"DIV",{class:!0});var Ze=a(Q);_(sn.$$.fragment,Ze),Th=d(Ze),zt=n(Ze,"P",{});var er=a(zt);Ch=i(er,"The "),qa=n(er,"A",{href:!0});var Y_=a(qa);bh=i(Y_,"CLIPVisionModel"),Y_.forEach(o),yh=i(er," forward method, overrides the "),ri=n(er,"CODE",{});var ev=a(ri);Lh=i(ev,"__call__"),ev.forEach(o),kh=i(er," special method."),er.forEach(o),wh=d(Ze),_(ko.$$.fragment,Ze),$h=d(Ze),ii=n(Ze,"P",{});var tv=a(ii);xh=i(tv,"Examples:"),tv.forEach(o),Eh=d(Ze),_(nn.$$.fragment,Ze),Ze.forEach(o),fd.forEach(o),Ll=d(t),jt=n(t,"H2",{class:!0});var ud=a(jt);wo=n(ud,"A",{id:!0,class:!0,href:!0});var ov=a(wo);li=n(ov,"SPAN",{});var sv=a(li);_(an.$$.fragment,sv),sv.forEach(o),ov.forEach(o),zh=d(ud),di=n(ud,"SPAN",{});var nv=a(di);jh=i(nv,"TFCLIPModel"),nv.forEach(o),ud.forEach(o),kl=d(t),q=n(t,"DIV",{class:!0});var de=a(q);_(rn.$$.fragment,de),Mh=d(de),ln=n(de,"P",{});var gd=a(ln);Fh=i(gd,"This model inherits from "),Da=n(gd,"A",{href:!0});var av=a(Da);qh=i(av,"TFPreTrainedModel"),av.forEach(o),Dh=i(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(o),Ah=d(de),dn=n(de,"P",{});var _d=a(dn);Nh=i(_d,"This model is also a "),cn=n(_d,"A",{href:!0,rel:!0});var rv=a(cn);Vh=i(rv,"tf.keras.Model"),rv.forEach(o),Oh=i(_d,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_d.forEach(o),Sh=d(de),_($o.$$.fragment,de),Wh=d(de),Y=n(de,"DIV",{class:!0});var Qe=a(Y);_(pn.$$.fragment,Qe),Bh=d(Qe),Mt=n(Qe,"P",{});var tr=a(Mt);Uh=i(tr,"The "),Aa=n(tr,"A",{href:!0});var iv=a(Aa);Rh=i(iv,"TFCLIPModel"),iv.forEach(o),Hh=i(tr," forward method, overrides the "),ci=n(tr,"CODE",{});var lv=a(ci);Kh=i(lv,"__call__"),lv.forEach(o),Gh=i(tr," special method."),tr.forEach(o),Jh=d(Qe),_(xo.$$.fragment,Qe),Xh=d(Qe),pi=n(Qe,"P",{});var dv=a(pi);Zh=i(dv,"Examples:"),dv.forEach(o),Qh=d(Qe),_(mn.$$.fragment,Qe),Qe.forEach(o),Yh=d(de),ee=n(de,"DIV",{class:!0});var Ye=a(ee);_(hn.$$.fragment,Ye),ef=d(Ye),Ft=n(Ye,"P",{});var or=a(Ft);tf=i(or,"The "),Na=n(or,"A",{href:!0});var cv=a(Na);of=i(cv,"TFCLIPModel"),cv.forEach(o),sf=i(or," forward method, overrides the "),mi=n(or,"CODE",{});var pv=a(mi);nf=i(pv,"__call__"),pv.forEach(o),af=i(or," special method."),or.forEach(o),rf=d(Ye),_(Eo.$$.fragment,Ye),lf=d(Ye),hi=n(Ye,"P",{});var mv=a(hi);df=i(mv,"Examples:"),mv.forEach(o),cf=d(Ye),_(fn.$$.fragment,Ye),Ye.forEach(o),pf=d(de),te=n(de,"DIV",{class:!0});var et=a(te);_(un.$$.fragment,et),mf=d(et),qt=n(et,"P",{});var sr=a(qt);hf=i(sr,"The "),Va=n(sr,"A",{href:!0});var hv=a(Va);ff=i(hv,"TFCLIPModel"),hv.forEach(o),uf=i(sr," forward method, overrides the "),fi=n(sr,"CODE",{});var fv=a(fi);gf=i(fv,"__call__"),fv.forEach(o),_f=i(sr," special method."),sr.forEach(o),vf=d(et),_(zo.$$.fragment,et),Pf=d(et),ui=n(et,"P",{});var uv=a(ui);If=i(uv,"Examples:"),uv.forEach(o),Tf=d(et),_(gn.$$.fragment,et),et.forEach(o),de.forEach(o),wl=d(t),Dt=n(t,"H2",{class:!0});var vd=a(Dt);jo=n(vd,"A",{id:!0,class:!0,href:!0});var gv=a(jo);gi=n(gv,"SPAN",{});var _v=a(gi);_(_n.$$.fragment,_v),_v.forEach(o),gv.forEach(o),Cf=d(vd),_i=n(vd,"SPAN",{});var vv=a(_i);bf=i(vv,"TFCLIPTextModel"),vv.forEach(o),vd.forEach(o),$l=d(t),At=n(t,"DIV",{class:!0});var Pd=a(At);_(vn.$$.fragment,Pd),yf=d(Pd),oe=n(Pd,"DIV",{class:!0});var tt=a(oe);_(Pn.$$.fragment,tt),Lf=d(tt),Nt=n(tt,"P",{});var nr=a(Nt);kf=i(nr,"The "),Oa=n(nr,"A",{href:!0});var Pv=a(Oa);wf=i(Pv,"TFCLIPTextModel"),Pv.forEach(o),$f=i(nr," forward method, overrides the "),vi=n(nr,"CODE",{});var Iv=a(vi);xf=i(Iv,"__call__"),Iv.forEach(o),Ef=i(nr," special method."),nr.forEach(o),zf=d(tt),_(Mo.$$.fragment,tt),jf=d(tt),Pi=n(tt,"P",{});var Tv=a(Pi);Mf=i(Tv,"Examples:"),Tv.forEach(o),Ff=d(tt),_(In.$$.fragment,tt),tt.forEach(o),Pd.forEach(o),xl=d(t),Vt=n(t,"H2",{class:!0});var Id=a(Vt);Fo=n(Id,"A",{id:!0,class:!0,href:!0});var Cv=a(Fo);Ii=n(Cv,"SPAN",{});var bv=a(Ii);_(Tn.$$.fragment,bv),bv.forEach(o),Cv.forEach(o),qf=d(Id),Ti=n(Id,"SPAN",{});var yv=a(Ti);Df=i(yv,"TFCLIPVisionModel"),yv.forEach(o),Id.forEach(o),El=d(t),Ot=n(t,"DIV",{class:!0});var Td=a(Ot);_(Cn.$$.fragment,Td),Af=d(Td),se=n(Td,"DIV",{class:!0});var ot=a(se);_(bn.$$.fragment,ot),Nf=d(ot),St=n(ot,"P",{});var ar=a(St);Vf=i(ar,"The "),Sa=n(ar,"A",{href:!0});var Lv=a(Sa);Of=i(Lv,"TFCLIPVisionModel"),Lv.forEach(o),Sf=i(ar," forward method, overrides the "),Ci=n(ar,"CODE",{});var kv=a(Ci);Wf=i(kv,"__call__"),kv.forEach(o),Bf=i(ar," special method."),ar.forEach(o),Uf=d(ot),_(qo.$$.fragment,ot),Rf=d(ot),bi=n(ot,"P",{});var wv=a(bi);Hf=i(wv,"Examples:"),wv.forEach(o),Kf=d(ot),_(yn.$$.fragment,ot),ot.forEach(o),Td.forEach(o),zl=d(t),Wt=n(t,"H2",{class:!0});var Cd=a(Wt);Do=n(Cd,"A",{id:!0,class:!0,href:!0});var $v=a(Do);yi=n($v,"SPAN",{});var xv=a(yi);_(Ln.$$.fragment,xv),xv.forEach(o),$v.forEach(o),Gf=d(Cd),Li=n(Cd,"SPAN",{});var Ev=a(Li);Jf=i(Ev,"FlaxCLIPModel"),Ev.forEach(o),Cd.forEach(o),jl=d(t),z=n(t,"DIV",{class:!0});var V=a(z);_(kn.$$.fragment,V),Xf=d(V),wn=n(V,"P",{});var bd=a(wn);Zf=i(bd,"This model inherits from "),Wa=n(bd,"A",{href:!0});var zv=a(Wa);Qf=i(zv,"FlaxPreTrainedModel"),zv.forEach(o),Yf=i(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bd.forEach(o),eu=d(V),$n=n(V,"P",{});var yd=a($n);tu=i(yd,"This model is also a Flax Linen "),xn=n(yd,"A",{href:!0,rel:!0});var jv=a(xn);ou=i(jv,"flax.linen.Module"),jv.forEach(o),su=i(yd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yd.forEach(o),nu=d(V),ki=n(V,"P",{});var Mv=a(ki);au=i(Mv,"Finally, this model supports inherent JAX features such as:"),Mv.forEach(o),ru=d(V),Ee=n(V,"UL",{});var Ro=a(Ee);wi=n(Ro,"LI",{});var Fv=a(wi);En=n(Fv,"A",{href:!0,rel:!0});var qv=a(En);iu=i(qv,"Just-In-Time (JIT) compilation"),qv.forEach(o),Fv.forEach(o),lu=d(Ro),$i=n(Ro,"LI",{});var Dv=a($i);zn=n(Dv,"A",{href:!0,rel:!0});var Av=a(zn);du=i(Av,"Automatic Differentiation"),Av.forEach(o),Dv.forEach(o),cu=d(Ro),xi=n(Ro,"LI",{});var Nv=a(xi);jn=n(Nv,"A",{href:!0,rel:!0});var Vv=a(jn);pu=i(Vv,"Vectorization"),Vv.forEach(o),Nv.forEach(o),mu=d(Ro),Ei=n(Ro,"LI",{});var Ov=a(Ei);Mn=n(Ov,"A",{href:!0,rel:!0});var Sv=a(Mn);hu=i(Sv,"Parallelization"),Sv.forEach(o),Ov.forEach(o),Ro.forEach(o),fu=d(V),ne=n(V,"DIV",{class:!0});var st=a(ne);_(Fn.$$.fragment,st),uu=d(st),Bt=n(st,"P",{});var rr=a(Bt);gu=i(rr,"The "),zi=n(rr,"CODE",{});var Wv=a(zi);_u=i(Wv,"FlaxCLIPPreTrainedModel"),Wv.forEach(o),vu=i(rr,"forward method, overrides the "),ji=n(rr,"CODE",{});var Bv=a(ji);Pu=i(Bv,"__call__"),Bv.forEach(o),Iu=i(rr," special method."),rr.forEach(o),Tu=d(st),_(Ao.$$.fragment,st),Cu=d(st),Mi=n(st,"P",{});var Uv=a(Mi);bu=i(Uv,"Example:"),Uv.forEach(o),yu=d(st),_(qn.$$.fragment,st),st.forEach(o),Lu=d(V),Ve=n(V,"DIV",{class:!0});var ir=a(Ve);_(Dn.$$.fragment,ir),ku=d(ir),Fi=n(ir,"P",{});var Rv=a(Fi);wu=i(Rv,"Examples:"),Rv.forEach(o),$u=d(ir),_(An.$$.fragment,ir),ir.forEach(o),xu=d(V),Oe=n(V,"DIV",{class:!0});var lr=a(Oe);_(Nn.$$.fragment,lr),Eu=d(lr),qi=n(lr,"P",{});var Hv=a(qi);zu=i(Hv,"Examples:"),Hv.forEach(o),ju=d(lr),_(Vn.$$.fragment,lr),lr.forEach(o),V.forEach(o),Ml=d(t),Ut=n(t,"H2",{class:!0});var Ld=a(Ut);No=n(Ld,"A",{id:!0,class:!0,href:!0});var Kv=a(No);Di=n(Kv,"SPAN",{});var Gv=a(Di);_(On.$$.fragment,Gv),Gv.forEach(o),Kv.forEach(o),Mu=d(Ld),Ai=n(Ld,"SPAN",{});var Jv=a(Ai);Fu=i(Jv,"FlaxCLIPTextModel"),Jv.forEach(o),Ld.forEach(o),Fl=d(t),Rt=n(t,"DIV",{class:!0});var kd=a(Rt);_(Sn.$$.fragment,kd),qu=d(kd),ae=n(kd,"DIV",{class:!0});var nt=a(ae);_(Wn.$$.fragment,nt),Du=d(nt),Ht=n(nt,"P",{});var dr=a(Ht);Au=i(dr,"The "),Ni=n(dr,"CODE",{});var Xv=a(Ni);Nu=i(Xv,"FlaxCLIPTextPreTrainedModel"),Xv.forEach(o),Vu=i(dr,"forward method, overrides the "),Vi=n(dr,"CODE",{});var Zv=a(Vi);Ou=i(Zv,"__call__"),Zv.forEach(o),Su=i(dr," special method."),dr.forEach(o),Wu=d(nt),_(Vo.$$.fragment,nt),Bu=d(nt),Oi=n(nt,"P",{});var Qv=a(Oi);Uu=i(Qv,"Example:"),Qv.forEach(o),Ru=d(nt),_(Bn.$$.fragment,nt),nt.forEach(o),kd.forEach(o),ql=d(t),Kt=n(t,"H2",{class:!0});var wd=a(Kt);Oo=n(wd,"A",{id:!0,class:!0,href:!0});var Yv=a(Oo);Si=n(Yv,"SPAN",{});var eP=a(Si);_(Un.$$.fragment,eP),eP.forEach(o),Yv.forEach(o),Hu=d(wd),Wi=n(wd,"SPAN",{});var tP=a(Wi);Ku=i(tP,"FlaxCLIPVisionModel"),tP.forEach(o),wd.forEach(o),Dl=d(t),Gt=n(t,"DIV",{class:!0});var $d=a(Gt);_(Rn.$$.fragment,$d),Gu=d($d),re=n($d,"DIV",{class:!0});var at=a(re);_(Hn.$$.fragment,at),Ju=d(at),Jt=n(at,"P",{});var cr=a(Jt);Xu=i(cr,"The "),Bi=n(cr,"CODE",{});var oP=a(Bi);Zu=i(oP,"FlaxCLIPVisionPreTrainedModel"),oP.forEach(o),Qu=i(cr,"forward method, overrides the "),Ui=n(cr,"CODE",{});var sP=a(Ui);Yu=i(sP,"__call__"),sP.forEach(o),eg=i(cr," special method."),cr.forEach(o),tg=d(at),_(So.$$.fragment,at),og=d(at),Ri=n(at,"P",{});var nP=a(Ri);sg=i(nP,"Example:"),nP.forEach(o),ng=d(at),_(Kn.$$.fragment,at),at.forEach(o),$d.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(yP)),c(b,"id","clip"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#clip"),c(u,"class","relative group"),c(ue,"id","overview"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#overview"),c(j,"class","relative group"),c(Le,"href","https://arxiv.org/abs/2103.00020"),c(Le,"rel","nofollow"),c(ge,"id","usage"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#usage"),c(A,"class","relative group"),c(M,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(lt,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer"),c(ve,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPProcessor"),c(Pe,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Ae,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer"),c(ra,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPProcessor"),c(ia,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(ts,"href","https://huggingface.co/valhalla"),c(ts,"rel","nofollow"),c(os,"href","https://github.com/openai/CLIP"),c(os,"rel","nofollow"),c(oo,"id","transformers.CLIPConfig"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.CLIPConfig"),c(dt,"class","relative group"),c(la,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig"),c(da,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(ca,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(pa,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(ma,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig"),c(no,"class","docstring"),c(fe,"class","docstring"),c(ao,"id","transformers.CLIPTextConfig"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.CLIPTextConfig"),c(pt,"class","relative group"),c(ha,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(ds,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(ds,"rel","nofollow"),c(fa,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(ua,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(O,"class","docstring"),c(ro,"id","transformers.CLIPVisionConfig"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.CLIPVisionConfig"),c(ft,"class","relative group"),c(ga,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(hs,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(hs,"rel","nofollow"),c(_a,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(va,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(S,"class","docstring"),c(io,"id","transformers.CLIPTokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.CLIPTokenizer"),c(_t,"class","relative group"),c(Pa,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Ie,"class","docstring"),c(lo,"class","docstring"),c(co,"class","docstring"),c(Ta,"class","docstring"),c(F,"class","docstring"),c(po,"id","transformers.CLIPTokenizerFast"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.CLIPTokenizerFast"),c(vt,"class","relative group"),c(Ca,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Te,"class","docstring"),c(mo,"class","docstring"),c(W,"class","docstring"),c(ho,"id","transformers.CLIPFeatureExtractor"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.CLIPFeatureExtractor"),c(Pt,"class","relative group"),c(ya,"href","/docs/transformers/master/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(fo,"class","docstring"),c(uo,"class","docstring"),c(B,"class","docstring"),c(go,"id","transformers.CLIPProcessor"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.CLIPProcessor"),c(Tt,"class","relative group"),c(La,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPProcessor"),c(ka,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(wa,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizerFast"),c($a,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPProcessor.decode"),c(xa,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(_o,"class","docstring"),c(Ea,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(vo,"class","docstring"),c(U,"class","docstring"),c(Po,"id","transformers.CLIPModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.CLIPModel"),c(Ct,"class","relative group"),c(Us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Us,"rel","nofollow"),c(za,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(G,"class","docstring"),c(ja,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(J,"class","docstring"),c(Ma,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(X,"class","docstring"),c(R,"class","docstring"),c(bo,"id","transformers.CLIPTextModel"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.CLIPTextModel"),c(kt,"class","relative group"),c(Fa,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPTextModel"),c(Z,"class","docstring"),c(wt,"class","docstring"),c(Lo,"id","transformers.CLIPVisionModel"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.CLIPVisionModel"),c(xt,"class","relative group"),c(qa,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPVisionModel"),c(Q,"class","docstring"),c(Et,"class","docstring"),c(wo,"id","transformers.TFCLIPModel"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFCLIPModel"),c(jt,"class","relative group"),c(Da,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(cn,"rel","nofollow"),c(Aa,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPModel"),c(Y,"class","docstring"),c(Na,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPModel"),c(ee,"class","docstring"),c(Va,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPModel"),c(te,"class","docstring"),c(q,"class","docstring"),c(jo,"id","transformers.TFCLIPTextModel"),c(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jo,"href","#transformers.TFCLIPTextModel"),c(Dt,"class","relative group"),c(Oa,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPTextModel"),c(oe,"class","docstring"),c(At,"class","docstring"),c(Fo,"id","transformers.TFCLIPVisionModel"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFCLIPVisionModel"),c(Vt,"class","relative group"),c(Sa,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPVisionModel"),c(se,"class","docstring"),c(Ot,"class","docstring"),c(Do,"id","transformers.FlaxCLIPModel"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.FlaxCLIPModel"),c(Wt,"class","relative group"),c(Wa,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xn,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xn,"rel","nofollow"),c(En,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(En,"rel","nofollow"),c(zn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(zn,"rel","nofollow"),c(jn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(jn,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Mn,"rel","nofollow"),c(ne,"class","docstring"),c(Ve,"class","docstring"),c(Oe,"class","docstring"),c(z,"class","docstring"),c(No,"id","transformers.FlaxCLIPTextModel"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.FlaxCLIPTextModel"),c(Ut,"class","relative group"),c(ae,"class","docstring"),c(Rt,"class","docstring"),c(Oo,"id","transformers.FlaxCLIPVisionModel"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.FlaxCLIPVisionModel"),c(Kt,"class","relative group"),c(re,"class","docstring"),c(Gt,"class","docstring")},m(t,m){e(document.head,p),h(t,L,m),h(t,u,m),e(u,b),e(b,y),v(C,y,null),e(u,f),e(u,k),e(k,Ho),h(t,rt,m),h(t,j,m),e(j,ue),e(ue,Ce),v(be,Ce,null),e(j,Ko),e(j,ye),e(ye,Go),h(t,Xt,m),h(t,pe,m),e(pe,je),e(pe,Le),e(Le,Zt),e(pe,H),h(t,me,m),h(t,Me,m),e(Me,it),h(t,Qt,m),h(t,Fe,m),e(Fe,ke),e(ke,Jo),h(t,Yt,m),h(t,A,m),e(A,ge),e(ge,we),v($e,we,null),e(A,Xo),e(A,xe),e(xe,Zo),h(t,eo,m),h(t,he,m),e(he,Qo),h(t,qe,m),h(t,_e,m),e(_e,$),e(_e,M),e(M,to),e(_e,Qn),h(t,Yo,m),h(t,E,m),e(E,Yn),e(E,lt),e(lt,ea),e(E,De),e(E,ve),e(ve,ta),e(E,oa),e(E,Pe),e(Pe,sa),e(E,na),e(E,Ae),e(Ae,aa),e(E,xd),e(E,ra),e(ra,Ed),e(E,zd),e(E,ia),e(ia,jd),e(E,Md),h(t,sl,m),v(es,t,m),h(t,nl,m),h(t,Ne,m),e(Ne,Fd),e(Ne,ts),e(ts,qd),e(Ne,Dd),e(Ne,os),e(os,Ad),e(Ne,Nd),h(t,al,m),h(t,dt,m),e(dt,oo),e(oo,pr),v(ss,pr,null),e(dt,Vd),e(dt,mr),e(mr,Od),h(t,rl,m),h(t,fe,m),v(ns,fe,null),e(fe,Sd),e(fe,so),e(so,la),e(la,Wd),e(so,Bd),e(so,da),e(da,Ud),e(so,Rd),e(fe,Hd),e(fe,ct),e(ct,Kd),e(ct,ca),e(ca,Gd),e(ct,Jd),e(ct,pa),e(pa,Xd),e(ct,Zd),e(fe,Qd),e(fe,no),v(as,no,null),e(no,Yd),e(no,rs),e(rs,ec),e(rs,ma),e(ma,tc),e(rs,oc),h(t,il,m),h(t,pt,m),e(pt,ao),e(ao,hr),v(is,hr,null),e(pt,sc),e(pt,fr),e(fr,nc),h(t,ll,m),h(t,O,m),v(ls,O,null),e(O,ac),e(O,mt),e(mt,rc),e(mt,ha),e(ha,ic),e(mt,lc),e(mt,ds),e(ds,dc),e(mt,cc),e(O,pc),e(O,ht),e(ht,mc),e(ht,fa),e(fa,hc),e(ht,fc),e(ht,ua),e(ua,uc),e(ht,gc),e(O,_c),e(O,ur),e(ur,vc),e(O,Pc),v(cs,O,null),h(t,dl,m),h(t,ft,m),e(ft,ro),e(ro,gr),v(ps,gr,null),e(ft,Ic),e(ft,_r),e(_r,Tc),h(t,cl,m),h(t,S,m),v(ms,S,null),e(S,Cc),e(S,ut),e(ut,bc),e(ut,ga),e(ga,yc),e(ut,Lc),e(ut,hs),e(hs,kc),e(ut,wc),e(S,$c),e(S,gt),e(gt,xc),e(gt,_a),e(_a,Ec),e(gt,zc),e(gt,va),e(va,jc),e(gt,Mc),e(S,Fc),e(S,vr),e(vr,qc),e(S,Dc),v(fs,S,null),h(t,pl,m),h(t,_t,m),e(_t,io),e(io,Pr),v(us,Pr,null),e(_t,Ac),e(_t,Ir),e(Ir,Nc),h(t,ml,m),h(t,F,m),v(gs,F,null),e(F,Vc),e(F,Tr),e(Tr,Oc),e(F,Sc),e(F,_s),e(_s,Wc),e(_s,Pa),e(Pa,Bc),e(_s,Uc),e(F,Rc),e(F,Ie),v(vs,Ie,null),e(Ie,Hc),e(Ie,Cr),e(Cr,Kc),e(Ie,Gc),e(Ie,br),e(br,Ia),e(Ia,Jc),e(Ia,yr),e(yr,Xc),e(Ie,Zc),e(Ie,Lr),e(Lr,Qc),e(F,Yc),e(F,lo),v(Ps,lo,null),e(lo,ep),e(lo,Is),e(Is,tp),e(Is,kr),e(kr,op),e(Is,sp),e(F,np),e(F,co),v(Ts,co,null),e(co,ap),e(co,wr),e(wr,rp),e(F,ip),e(F,Ta),v(Cs,Ta,null),h(t,hl,m),h(t,vt,m),e(vt,po),e(po,$r),v(bs,$r,null),e(vt,lp),e(vt,xr),e(xr,dp),h(t,fl,m),h(t,W,m),v(ys,W,null),e(W,cp),e(W,Ls),e(Ls,pp),e(Ls,Er),e(Er,mp),e(Ls,hp),e(W,fp),e(W,ks),e(ks,up),e(ks,Ca),e(Ca,gp),e(ks,_p),e(W,vp),e(W,Te),v(ws,Te,null),e(Te,Pp),e(Te,zr),e(zr,Ip),e(Te,Tp),e(Te,jr),e(jr,ba),e(ba,Cp),e(ba,Mr),e(Mr,bp),e(Te,yp),e(Te,Fr),e(Fr,Lp),e(W,kp),e(W,mo),v($s,mo,null),e(mo,wp),e(mo,qr),e(qr,$p),h(t,ul,m),h(t,Pt,m),e(Pt,ho),e(ho,Dr),v(xs,Dr,null),e(Pt,xp),e(Pt,Ar),e(Ar,Ep),h(t,gl,m),h(t,B,m),v(Es,B,null),e(B,zp),e(B,Nr),e(Nr,jp),e(B,Mp),e(B,zs),e(zs,Fp),e(zs,ya),e(ya,qp),e(zs,Dp),e(B,Ap),e(B,fo),v(js,fo,null),e(fo,Np),e(fo,Ms),e(Ms,Vp),e(Ms,Vr),e(Vr,Op),e(Ms,Sp),e(B,Wp),e(B,uo),v(Fs,uo,null),e(uo,Bp),e(uo,It),e(It,Up),e(It,Or),e(Or,Rp),e(It,Hp),e(It,Sr),e(Sr,Kp),e(It,Gp),h(t,_l,m),h(t,Tt,m),e(Tt,go),e(go,Wr),v(qs,Wr,null),e(Tt,Jp),e(Tt,Br),e(Br,Xp),h(t,vl,m),h(t,U,m),v(Ds,U,null),e(U,Zp),e(U,Ur),e(Ur,Qp),e(U,Yp),e(U,K),e(K,La),e(La,em),e(K,tm),e(K,ka),e(ka,om),e(K,sm),e(K,wa),e(wa,nm),e(K,am),e(K,Rr),e(Rr,rm),e(K,im),e(K,$a),e($a,lm),e(K,dm),e(U,cm),e(U,_o),v(As,_o,null),e(_o,pm),e(_o,Ns),e(Ns,mm),e(Ns,xa),e(xa,hm),e(Ns,fm),e(U,um),e(U,vo),v(Vs,vo,null),e(vo,gm),e(vo,Os),e(Os,_m),e(Os,Ea),e(Ea,vm),e(Os,Pm),h(t,Pl,m),h(t,Ct,m),e(Ct,Po),e(Po,Hr),v(Ss,Hr,null),e(Ct,Im),e(Ct,Kr),e(Kr,Tm),h(t,Il,m),h(t,R,m),v(Ws,R,null),e(R,Cm),e(R,Bs),e(Bs,bm),e(Bs,Us),e(Us,ym),e(Bs,Lm),e(R,km),e(R,G),v(Rs,G,null),e(G,wm),e(G,bt),e(bt,$m),e(bt,za),e(za,xm),e(bt,Em),e(bt,Gr),e(Gr,zm),e(bt,jm),e(G,Mm),v(Io,G,null),e(G,Fm),e(G,Jr),e(Jr,qm),e(G,Dm),v(Hs,G,null),e(R,Am),e(R,J),v(Ks,J,null),e(J,Nm),e(J,yt),e(yt,Vm),e(yt,ja),e(ja,Om),e(yt,Sm),e(yt,Xr),e(Xr,Wm),e(yt,Bm),e(J,Um),v(To,J,null),e(J,Rm),e(J,Zr),e(Zr,Hm),e(J,Km),v(Gs,J,null),e(R,Gm),e(R,X),v(Js,X,null),e(X,Jm),e(X,Lt),e(Lt,Xm),e(Lt,Ma),e(Ma,Zm),e(Lt,Qm),e(Lt,Qr),e(Qr,Ym),e(Lt,eh),e(X,th),v(Co,X,null),e(X,oh),e(X,Yr),e(Yr,sh),e(X,nh),v(Xs,X,null),h(t,Tl,m),h(t,kt,m),e(kt,bo),e(bo,ei),v(Zs,ei,null),e(kt,ah),e(kt,ti),e(ti,rh),h(t,Cl,m),h(t,wt,m),v(Qs,wt,null),e(wt,ih),e(wt,Z),v(Ys,Z,null),e(Z,lh),e(Z,$t),e($t,dh),e($t,Fa),e(Fa,ch),e($t,ph),e($t,oi),e(oi,mh),e($t,hh),e(Z,fh),v(yo,Z,null),e(Z,uh),e(Z,si),e(si,gh),e(Z,_h),v(en,Z,null),h(t,bl,m),h(t,xt,m),e(xt,Lo),e(Lo,ni),v(tn,ni,null),e(xt,vh),e(xt,ai),e(ai,Ph),h(t,yl,m),h(t,Et,m),v(on,Et,null),e(Et,Ih),e(Et,Q),v(sn,Q,null),e(Q,Th),e(Q,zt),e(zt,Ch),e(zt,qa),e(qa,bh),e(zt,yh),e(zt,ri),e(ri,Lh),e(zt,kh),e(Q,wh),v(ko,Q,null),e(Q,$h),e(Q,ii),e(ii,xh),e(Q,Eh),v(nn,Q,null),h(t,Ll,m),h(t,jt,m),e(jt,wo),e(wo,li),v(an,li,null),e(jt,zh),e(jt,di),e(di,jh),h(t,kl,m),h(t,q,m),v(rn,q,null),e(q,Mh),e(q,ln),e(ln,Fh),e(ln,Da),e(Da,qh),e(ln,Dh),e(q,Ah),e(q,dn),e(dn,Nh),e(dn,cn),e(cn,Vh),e(dn,Oh),e(q,Sh),v($o,q,null),e(q,Wh),e(q,Y),v(pn,Y,null),e(Y,Bh),e(Y,Mt),e(Mt,Uh),e(Mt,Aa),e(Aa,Rh),e(Mt,Hh),e(Mt,ci),e(ci,Kh),e(Mt,Gh),e(Y,Jh),v(xo,Y,null),e(Y,Xh),e(Y,pi),e(pi,Zh),e(Y,Qh),v(mn,Y,null),e(q,Yh),e(q,ee),v(hn,ee,null),e(ee,ef),e(ee,Ft),e(Ft,tf),e(Ft,Na),e(Na,of),e(Ft,sf),e(Ft,mi),e(mi,nf),e(Ft,af),e(ee,rf),v(Eo,ee,null),e(ee,lf),e(ee,hi),e(hi,df),e(ee,cf),v(fn,ee,null),e(q,pf),e(q,te),v(un,te,null),e(te,mf),e(te,qt),e(qt,hf),e(qt,Va),e(Va,ff),e(qt,uf),e(qt,fi),e(fi,gf),e(qt,_f),e(te,vf),v(zo,te,null),e(te,Pf),e(te,ui),e(ui,If),e(te,Tf),v(gn,te,null),h(t,wl,m),h(t,Dt,m),e(Dt,jo),e(jo,gi),v(_n,gi,null),e(Dt,Cf),e(Dt,_i),e(_i,bf),h(t,$l,m),h(t,At,m),v(vn,At,null),e(At,yf),e(At,oe),v(Pn,oe,null),e(oe,Lf),e(oe,Nt),e(Nt,kf),e(Nt,Oa),e(Oa,wf),e(Nt,$f),e(Nt,vi),e(vi,xf),e(Nt,Ef),e(oe,zf),v(Mo,oe,null),e(oe,jf),e(oe,Pi),e(Pi,Mf),e(oe,Ff),v(In,oe,null),h(t,xl,m),h(t,Vt,m),e(Vt,Fo),e(Fo,Ii),v(Tn,Ii,null),e(Vt,qf),e(Vt,Ti),e(Ti,Df),h(t,El,m),h(t,Ot,m),v(Cn,Ot,null),e(Ot,Af),e(Ot,se),v(bn,se,null),e(se,Nf),e(se,St),e(St,Vf),e(St,Sa),e(Sa,Of),e(St,Sf),e(St,Ci),e(Ci,Wf),e(St,Bf),e(se,Uf),v(qo,se,null),e(se,Rf),e(se,bi),e(bi,Hf),e(se,Kf),v(yn,se,null),h(t,zl,m),h(t,Wt,m),e(Wt,Do),e(Do,yi),v(Ln,yi,null),e(Wt,Gf),e(Wt,Li),e(Li,Jf),h(t,jl,m),h(t,z,m),v(kn,z,null),e(z,Xf),e(z,wn),e(wn,Zf),e(wn,Wa),e(Wa,Qf),e(wn,Yf),e(z,eu),e(z,$n),e($n,tu),e($n,xn),e(xn,ou),e($n,su),e(z,nu),e(z,ki),e(ki,au),e(z,ru),e(z,Ee),e(Ee,wi),e(wi,En),e(En,iu),e(Ee,lu),e(Ee,$i),e($i,zn),e(zn,du),e(Ee,cu),e(Ee,xi),e(xi,jn),e(jn,pu),e(Ee,mu),e(Ee,Ei),e(Ei,Mn),e(Mn,hu),e(z,fu),e(z,ne),v(Fn,ne,null),e(ne,uu),e(ne,Bt),e(Bt,gu),e(Bt,zi),e(zi,_u),e(Bt,vu),e(Bt,ji),e(ji,Pu),e(Bt,Iu),e(ne,Tu),v(Ao,ne,null),e(ne,Cu),e(ne,Mi),e(Mi,bu),e(ne,yu),v(qn,ne,null),e(z,Lu),e(z,Ve),v(Dn,Ve,null),e(Ve,ku),e(Ve,Fi),e(Fi,wu),e(Ve,$u),v(An,Ve,null),e(z,xu),e(z,Oe),v(Nn,Oe,null),e(Oe,Eu),e(Oe,qi),e(qi,zu),e(Oe,ju),v(Vn,Oe,null),h(t,Ml,m),h(t,Ut,m),e(Ut,No),e(No,Di),v(On,Di,null),e(Ut,Mu),e(Ut,Ai),e(Ai,Fu),h(t,Fl,m),h(t,Rt,m),v(Sn,Rt,null),e(Rt,qu),e(Rt,ae),v(Wn,ae,null),e(ae,Du),e(ae,Ht),e(Ht,Au),e(Ht,Ni),e(Ni,Nu),e(Ht,Vu),e(Ht,Vi),e(Vi,Ou),e(Ht,Su),e(ae,Wu),v(Vo,ae,null),e(ae,Bu),e(ae,Oi),e(Oi,Uu),e(ae,Ru),v(Bn,ae,null),h(t,ql,m),h(t,Kt,m),e(Kt,Oo),e(Oo,Si),v(Un,Si,null),e(Kt,Hu),e(Kt,Wi),e(Wi,Ku),h(t,Dl,m),h(t,Gt,m),v(Rn,Gt,null),e(Gt,Gu),e(Gt,re),v(Hn,re,null),e(re,Ju),e(re,Jt),e(Jt,Xu),e(Jt,Bi),e(Bi,Zu),e(Jt,Qu),e(Jt,Ui),e(Ui,Yu),e(Jt,eg),e(re,tg),v(So,re,null),e(re,og),e(re,Ri),e(Ri,sg),e(re,ng),v(Kn,re,null),Al=!0},p(t,[m]){const Gn={};m&2&&(Gn.$$scope={dirty:m,ctx:t}),Io.$set(Gn);const Hi={};m&2&&(Hi.$$scope={dirty:m,ctx:t}),To.$set(Hi);const Ki={};m&2&&(Ki.$$scope={dirty:m,ctx:t}),Co.$set(Ki);const Gi={};m&2&&(Gi.$$scope={dirty:m,ctx:t}),yo.$set(Gi);const Jn={};m&2&&(Jn.$$scope={dirty:m,ctx:t}),ko.$set(Jn);const Ji={};m&2&&(Ji.$$scope={dirty:m,ctx:t}),$o.$set(Ji);const Xi={};m&2&&(Xi.$$scope={dirty:m,ctx:t}),xo.$set(Xi);const Zi={};m&2&&(Zi.$$scope={dirty:m,ctx:t}),Eo.$set(Zi);const Xn={};m&2&&(Xn.$$scope={dirty:m,ctx:t}),zo.$set(Xn);const Qi={};m&2&&(Qi.$$scope={dirty:m,ctx:t}),Mo.$set(Qi);const Yi={};m&2&&(Yi.$$scope={dirty:m,ctx:t}),qo.$set(Yi);const el={};m&2&&(el.$$scope={dirty:m,ctx:t}),Ao.$set(el);const tl={};m&2&&(tl.$$scope={dirty:m,ctx:t}),Vo.$set(tl);const Zn={};m&2&&(Zn.$$scope={dirty:m,ctx:t}),So.$set(Zn)},i(t){Al||(P(C.$$.fragment,t),P(be.$$.fragment,t),P($e.$$.fragment,t),P(es.$$.fragment,t),P(ss.$$.fragment,t),P(ns.$$.fragment,t),P(as.$$.fragment,t),P(is.$$.fragment,t),P(ls.$$.fragment,t),P(cs.$$.fragment,t),P(ps.$$.fragment,t),P(ms.$$.fragment,t),P(fs.$$.fragment,t),P(us.$$.fragment,t),P(gs.$$.fragment,t),P(vs.$$.fragment,t),P(Ps.$$.fragment,t),P(Ts.$$.fragment,t),P(Cs.$$.fragment,t),P(bs.$$.fragment,t),P(ys.$$.fragment,t),P(ws.$$.fragment,t),P($s.$$.fragment,t),P(xs.$$.fragment,t),P(Es.$$.fragment,t),P(js.$$.fragment,t),P(Fs.$$.fragment,t),P(qs.$$.fragment,t),P(Ds.$$.fragment,t),P(As.$$.fragment,t),P(Vs.$$.fragment,t),P(Ss.$$.fragment,t),P(Ws.$$.fragment,t),P(Rs.$$.fragment,t),P(Io.$$.fragment,t),P(Hs.$$.fragment,t),P(Ks.$$.fragment,t),P(To.$$.fragment,t),P(Gs.$$.fragment,t),P(Js.$$.fragment,t),P(Co.$$.fragment,t),P(Xs.$$.fragment,t),P(Zs.$$.fragment,t),P(Qs.$$.fragment,t),P(Ys.$$.fragment,t),P(yo.$$.fragment,t),P(en.$$.fragment,t),P(tn.$$.fragment,t),P(on.$$.fragment,t),P(sn.$$.fragment,t),P(ko.$$.fragment,t),P(nn.$$.fragment,t),P(an.$$.fragment,t),P(rn.$$.fragment,t),P($o.$$.fragment,t),P(pn.$$.fragment,t),P(xo.$$.fragment,t),P(mn.$$.fragment,t),P(hn.$$.fragment,t),P(Eo.$$.fragment,t),P(fn.$$.fragment,t),P(un.$$.fragment,t),P(zo.$$.fragment,t),P(gn.$$.fragment,t),P(_n.$$.fragment,t),P(vn.$$.fragment,t),P(Pn.$$.fragment,t),P(Mo.$$.fragment,t),P(In.$$.fragment,t),P(Tn.$$.fragment,t),P(Cn.$$.fragment,t),P(bn.$$.fragment,t),P(qo.$$.fragment,t),P(yn.$$.fragment,t),P(Ln.$$.fragment,t),P(kn.$$.fragment,t),P(Fn.$$.fragment,t),P(Ao.$$.fragment,t),P(qn.$$.fragment,t),P(Dn.$$.fragment,t),P(An.$$.fragment,t),P(Nn.$$.fragment,t),P(Vn.$$.fragment,t),P(On.$$.fragment,t),P(Sn.$$.fragment,t),P(Wn.$$.fragment,t),P(Vo.$$.fragment,t),P(Bn.$$.fragment,t),P(Un.$$.fragment,t),P(Rn.$$.fragment,t),P(Hn.$$.fragment,t),P(So.$$.fragment,t),P(Kn.$$.fragment,t),Al=!0)},o(t){I(C.$$.fragment,t),I(be.$$.fragment,t),I($e.$$.fragment,t),I(es.$$.fragment,t),I(ss.$$.fragment,t),I(ns.$$.fragment,t),I(as.$$.fragment,t),I(is.$$.fragment,t),I(ls.$$.fragment,t),I(cs.$$.fragment,t),I(ps.$$.fragment,t),I(ms.$$.fragment,t),I(fs.$$.fragment,t),I(us.$$.fragment,t),I(gs.$$.fragment,t),I(vs.$$.fragment,t),I(Ps.$$.fragment,t),I(Ts.$$.fragment,t),I(Cs.$$.fragment,t),I(bs.$$.fragment,t),I(ys.$$.fragment,t),I(ws.$$.fragment,t),I($s.$$.fragment,t),I(xs.$$.fragment,t),I(Es.$$.fragment,t),I(js.$$.fragment,t),I(Fs.$$.fragment,t),I(qs.$$.fragment,t),I(Ds.$$.fragment,t),I(As.$$.fragment,t),I(Vs.$$.fragment,t),I(Ss.$$.fragment,t),I(Ws.$$.fragment,t),I(Rs.$$.fragment,t),I(Io.$$.fragment,t),I(Hs.$$.fragment,t),I(Ks.$$.fragment,t),I(To.$$.fragment,t),I(Gs.$$.fragment,t),I(Js.$$.fragment,t),I(Co.$$.fragment,t),I(Xs.$$.fragment,t),I(Zs.$$.fragment,t),I(Qs.$$.fragment,t),I(Ys.$$.fragment,t),I(yo.$$.fragment,t),I(en.$$.fragment,t),I(tn.$$.fragment,t),I(on.$$.fragment,t),I(sn.$$.fragment,t),I(ko.$$.fragment,t),I(nn.$$.fragment,t),I(an.$$.fragment,t),I(rn.$$.fragment,t),I($o.$$.fragment,t),I(pn.$$.fragment,t),I(xo.$$.fragment,t),I(mn.$$.fragment,t),I(hn.$$.fragment,t),I(Eo.$$.fragment,t),I(fn.$$.fragment,t),I(un.$$.fragment,t),I(zo.$$.fragment,t),I(gn.$$.fragment,t),I(_n.$$.fragment,t),I(vn.$$.fragment,t),I(Pn.$$.fragment,t),I(Mo.$$.fragment,t),I(In.$$.fragment,t),I(Tn.$$.fragment,t),I(Cn.$$.fragment,t),I(bn.$$.fragment,t),I(qo.$$.fragment,t),I(yn.$$.fragment,t),I(Ln.$$.fragment,t),I(kn.$$.fragment,t),I(Fn.$$.fragment,t),I(Ao.$$.fragment,t),I(qn.$$.fragment,t),I(Dn.$$.fragment,t),I(An.$$.fragment,t),I(Nn.$$.fragment,t),I(Vn.$$.fragment,t),I(On.$$.fragment,t),I(Sn.$$.fragment,t),I(Wn.$$.fragment,t),I(Vo.$$.fragment,t),I(Bn.$$.fragment,t),I(Un.$$.fragment,t),I(Rn.$$.fragment,t),I(Hn.$$.fragment,t),I(So.$$.fragment,t),I(Kn.$$.fragment,t),Al=!1},d(t){o(p),t&&o(L),t&&o(u),T(C),t&&o(rt),t&&o(j),T(be),t&&o(Xt),t&&o(pe),t&&o(me),t&&o(Me),t&&o(Qt),t&&o(Fe),t&&o(Yt),t&&o(A),T($e),t&&o(eo),t&&o(he),t&&o(qe),t&&o(_e),t&&o(Yo),t&&o(E),t&&o(sl),T(es,t),t&&o(nl),t&&o(Ne),t&&o(al),t&&o(dt),T(ss),t&&o(rl),t&&o(fe),T(ns),T(as),t&&o(il),t&&o(pt),T(is),t&&o(ll),t&&o(O),T(ls),T(cs),t&&o(dl),t&&o(ft),T(ps),t&&o(cl),t&&o(S),T(ms),T(fs),t&&o(pl),t&&o(_t),T(us),t&&o(ml),t&&o(F),T(gs),T(vs),T(Ps),T(Ts),T(Cs),t&&o(hl),t&&o(vt),T(bs),t&&o(fl),t&&o(W),T(ys),T(ws),T($s),t&&o(ul),t&&o(Pt),T(xs),t&&o(gl),t&&o(B),T(Es),T(js),T(Fs),t&&o(_l),t&&o(Tt),T(qs),t&&o(vl),t&&o(U),T(Ds),T(As),T(Vs),t&&o(Pl),t&&o(Ct),T(Ss),t&&o(Il),t&&o(R),T(Ws),T(Rs),T(Io),T(Hs),T(Ks),T(To),T(Gs),T(Js),T(Co),T(Xs),t&&o(Tl),t&&o(kt),T(Zs),t&&o(Cl),t&&o(wt),T(Qs),T(Ys),T(yo),T(en),t&&o(bl),t&&o(xt),T(tn),t&&o(yl),t&&o(Et),T(on),T(sn),T(ko),T(nn),t&&o(Ll),t&&o(jt),T(an),t&&o(kl),t&&o(q),T(rn),T($o),T(pn),T(xo),T(mn),T(hn),T(Eo),T(fn),T(un),T(zo),T(gn),t&&o(wl),t&&o(Dt),T(_n),t&&o($l),t&&o(At),T(vn),T(Pn),T(Mo),T(In),t&&o(xl),t&&o(Vt),T(Tn),t&&o(El),t&&o(Ot),T(Cn),T(bn),T(qo),T(yn),t&&o(zl),t&&o(Wt),T(Ln),t&&o(jl),t&&o(z),T(kn),T(Fn),T(Ao),T(qn),T(Dn),T(An),T(Nn),T(Vn),t&&o(Ml),t&&o(Ut),T(On),t&&o(Fl),t&&o(Rt),T(Sn),T(Wn),T(Vo),T(Bn),t&&o(ql),t&&o(Kt),T(Un),t&&o(Dl),t&&o(Gt),T(Rn),T(Hn),T(So),T(Kn)}}}const yP={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function LP(x,p,L){let{fw:u}=p;return x.$$set=b=>{"fw"in b&&L(0,u=b.fw)},[u]}class jP extends aP{constructor(p){super();rP(this,p,LP,bP,iP,{fw:0})}}export{jP as default,yP as metadata};
