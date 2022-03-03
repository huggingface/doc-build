import{S as aP,i as rP,s as iP,e as n,k as l,w as g,t as r,M as lP,c as s,d as o,m as d,a,x as _,h as i,b as c,F as e,g as m,y as v,q as P,o as I,B as T}from"../../chunks/vendor-4833417e.js";import{T as ce}from"../../chunks/Tip-fffd6df1.js";import{D as w}from"../../chunks/Docstring-7b52c3d4.js";import{C as N}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as D}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function dP(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function cP(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function pP(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function hP(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function mP(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function fP(x){let p,L,u,b,y,C,f,k,Ho,rt,j,ue,Ce,be,Ko,ye,Go,Xt,pe,je,Le,Zt,H,he,Me,it,Qt,Fe,ke,Jo,Yt,A,ge,we,$e,Xo,xe,Zo,eo,me,Qo,qe,_e;return{c(){p=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),u=l(),b=n("ul"),y=n("li"),C=r("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),k=n("li"),Ho=r("having all inputs as a list, tuple or dict in the first positional arguments."),rt=l(),j=n("p"),ue=r("This second option is useful when using "),Ce=n("code"),be=r("tf.keras.Model.fit"),Ko=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=n("code"),Go=r("model(inputs)"),Xt=r("."),pe=l(),je=n("p"),Le=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Zt=l(),H=n("ul"),he=n("li"),Me=r("a single Tensor with "),it=n("code"),Qt=r("input_ids"),Fe=r(" only and nothing else: "),ke=n("code"),Jo=r("model(input_ids)"),Yt=l(),A=n("li"),ge=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=n("code"),$e=r("model([input_ids, attention_mask])"),Xo=r(" or "),xe=n("code"),Zo=r("model([input_ids, attention_mask, token_type_ids])"),eo=l(),me=n("li"),Qo=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=n("code"),_e=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l($){p=s($,"P",{});var M=a(p);L=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(o),u=d($),b=s($,"UL",{});var to=a(b);y=s(to,"LI",{});var Qs=a(y);C=i(Qs,"having all inputs as keyword arguments (like PyTorch models), or"),Qs.forEach(o),f=d(to),k=s(to,"LI",{});var Yo=a(k);Ho=i(Yo,"having all inputs as a list, tuple or dict in the first positional arguments."),Yo.forEach(o),to.forEach(o),rt=d($),j=s($,"P",{});var E=a(j);ue=i(E,"This second option is useful when using "),Ce=s(E,"CODE",{});var Ys=a(Ce);be=i(Ys,"tf.keras.Model.fit"),Ys.forEach(o),Ko=i(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=s(E,"CODE",{});var lt=a(ye);Go=i(lt,"model(inputs)"),lt.forEach(o),Xt=i(E,"."),E.forEach(o),pe=d($),je=s($,"P",{});var ea=a(je);Le=i(ea,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ea.forEach(o),Zt=d($),H=s($,"UL",{});var De=a(H);he=s(De,"LI",{});var ve=a(he);Me=i(ve,"a single Tensor with "),it=s(ve,"CODE",{});var ta=a(it);Qt=i(ta,"input_ids"),ta.forEach(o),Fe=i(ve," only and nothing else: "),ke=s(ve,"CODE",{});var oa=a(ke);Jo=i(oa,"model(input_ids)"),oa.forEach(o),ve.forEach(o),Yt=d(De),A=s(De,"LI",{});var Pe=a(A);ge=i(Pe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=s(Pe,"CODE",{});var na=a(we);$e=i(na,"model([input_ids, attention_mask])"),na.forEach(o),Xo=i(Pe," or "),xe=s(Pe,"CODE",{});var sa=a(xe);Zo=i(sa,"model([input_ids, attention_mask, token_type_ids])"),sa.forEach(o),Pe.forEach(o),eo=d(De),me=s(De,"LI",{});var Ae=a(me);Qo=i(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=s(Ae,"CODE",{});var aa=a(qe);_e=i(aa,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),aa.forEach(o),Ae.forEach(o),De.forEach(o)},m($,M){m($,p,M),e(p,L),m($,u,M),m($,b,M),e(b,y),e(y,C),e(b,f),e(b,k),e(k,Ho),m($,rt,M),m($,j,M),e(j,ue),e(j,Ce),e(Ce,be),e(j,Ko),e(j,ye),e(ye,Go),e(j,Xt),m($,pe,M),m($,je,M),e(je,Le),m($,Zt,M),m($,H,M),e(H,he),e(he,Me),e(he,it),e(it,Qt),e(he,Fe),e(he,ke),e(ke,Jo),e(H,Yt),e(H,A),e(A,ge),e(A,we),e(we,$e),e(A,Xo),e(A,xe),e(xe,Zo),e(H,eo),e(H,me),e(me,Qo),e(me,qe),e(qe,_e)},d($){$&&o(p),$&&o(u),$&&o(b),$&&o(rt),$&&o(j),$&&o(pe),$&&o(je),$&&o(Zt),$&&o(H)}}}function uP(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function gP(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function _P(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function vP(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function PP(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function IP(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function TP(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function CP(x){let p,L,u,b,y;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(C){p=s(C,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(C,f){m(C,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(C){C&&o(p)}}}function bP(x){let p,L,u,b,y,C,f,k,Ho,rt,j,ue,Ce,be,Ko,ye,Go,Xt,pe,je,Le,Zt,H,he,Me,it,Qt,Fe,ke,Jo,Yt,A,ge,we,$e,Xo,xe,Zo,eo,me,Qo,qe,_e,$,M,to,Qs,Yo,E,Ys,lt,ea,De,ve,ta,oa,Pe,na,sa,Ae,aa,xd,ra,Ed,zd,ia,jd,Md,nl,en,sl,Ne,Fd,tn,qd,Dd,on,Ad,Nd,al,dt,oo,pr,nn,Vd,hr,Od,rl,fe,sn,Sd,no,la,Wd,Bd,da,Ud,Rd,Hd,ct,Kd,ca,Gd,Jd,pa,Xd,Zd,Qd,so,an,Yd,rn,ec,ha,tc,oc,il,pt,ao,mr,ln,nc,fr,sc,ll,O,dn,ac,ht,rc,ma,ic,lc,cn,dc,cc,pc,mt,hc,fa,mc,fc,ua,uc,gc,_c,ur,vc,Pc,pn,dl,ft,ro,gr,hn,Ic,_r,Tc,cl,S,mn,Cc,ut,bc,ga,yc,Lc,fn,kc,wc,$c,gt,xc,_a,Ec,zc,va,jc,Mc,Fc,vr,qc,Dc,un,pl,_t,io,Pr,gn,Ac,Ir,Nc,hl,F,_n,Vc,Tr,Oc,Sc,vn,Wc,Pa,Bc,Uc,Rc,Ie,Pn,Hc,Cr,Kc,Gc,br,Ia,Jc,yr,Xc,Zc,Lr,Qc,Yc,lo,In,ep,Tn,tp,kr,op,np,sp,co,Cn,ap,wr,rp,ip,Ta,bn,ml,vt,po,$r,yn,lp,xr,dp,fl,W,Ln,cp,kn,pp,Er,hp,mp,fp,wn,up,Ca,gp,_p,vp,Te,$n,Pp,zr,Ip,Tp,jr,ba,Cp,Mr,bp,yp,Fr,Lp,kp,ho,xn,wp,qr,$p,ul,Pt,mo,Dr,En,xp,Ar,Ep,gl,B,zn,zp,Nr,jp,Mp,jn,Fp,ya,qp,Dp,Ap,fo,Mn,Np,Fn,Vp,Vr,Op,Sp,Wp,uo,qn,Bp,It,Up,Or,Rp,Hp,Sr,Kp,Gp,_l,Tt,go,Wr,Dn,Jp,Br,Xp,vl,U,An,Zp,Ur,Qp,Yp,K,La,eh,th,ka,oh,nh,wa,sh,ah,Rr,rh,ih,$a,lh,dh,ch,_o,Nn,ph,Vn,hh,xa,mh,fh,uh,vo,On,gh,Sn,_h,Ea,vh,Ph,Pl,Ct,Po,Hr,Wn,Ih,Kr,Th,Il,R,Bn,Ch,Un,bh,Rn,yh,Lh,kh,G,Hn,wh,bt,$h,za,xh,Eh,Gr,zh,jh,Mh,Io,Fh,Jr,qh,Dh,Kn,Ah,J,Gn,Nh,yt,Vh,ja,Oh,Sh,Xr,Wh,Bh,Uh,To,Rh,Zr,Hh,Kh,Jn,Gh,X,Xn,Jh,Lt,Xh,Ma,Zh,Qh,Qr,Yh,em,tm,Co,om,Yr,nm,sm,Zn,Tl,kt,bo,ei,Qn,am,ti,rm,Cl,wt,Yn,im,Z,es,lm,$t,dm,Fa,cm,pm,oi,hm,mm,fm,yo,um,ni,gm,_m,ts,bl,xt,Lo,si,os,vm,ai,Pm,yl,Et,ns,Im,Q,ss,Tm,zt,Cm,qa,bm,ym,ri,Lm,km,wm,ko,$m,ii,xm,Em,as,Ll,jt,wo,li,rs,zm,di,jm,kl,q,is,Mm,ls,Fm,Da,qm,Dm,Am,ds,Nm,cs,Vm,Om,Sm,$o,Wm,Y,ps,Bm,Mt,Um,Aa,Rm,Hm,ci,Km,Gm,Jm,xo,Xm,pi,Zm,Qm,hs,Ym,ee,ms,ef,Ft,tf,Na,of,nf,hi,sf,af,rf,Eo,lf,mi,df,cf,fs,pf,te,us,hf,qt,mf,Va,ff,uf,fi,gf,_f,vf,zo,Pf,ui,If,Tf,gs,wl,Dt,jo,gi,_s,Cf,_i,bf,$l,At,vs,yf,oe,Ps,Lf,Nt,kf,Oa,wf,$f,vi,xf,Ef,zf,Mo,jf,Pi,Mf,Ff,Is,xl,Vt,Fo,Ii,Ts,qf,Ti,Df,El,Ot,Cs,Af,ne,bs,Nf,St,Vf,Sa,Of,Sf,Ci,Wf,Bf,Uf,qo,Rf,bi,Hf,Kf,ys,zl,Wt,Do,yi,Ls,Gf,Li,Jf,jl,z,ks,Xf,ws,Zf,Wa,Qf,Yf,eu,$s,tu,xs,ou,nu,su,ki,au,ru,Ee,wi,Es,iu,lu,$i,zs,du,cu,xi,js,pu,hu,Ei,Ms,mu,fu,se,Fs,uu,Bt,gu,zi,_u,vu,ji,Pu,Iu,Tu,Ao,Cu,Mi,bu,yu,qs,Lu,Ve,Ds,ku,Fi,wu,$u,As,xu,Oe,Ns,Eu,qi,zu,ju,Vs,Ml,Ut,No,Di,Os,Mu,Ai,Fu,Fl,Rt,Ss,qu,ae,Ws,Du,Ht,Au,Ni,Nu,Vu,Vi,Ou,Su,Wu,Vo,Bu,Oi,Uu,Ru,Bs,ql,Kt,Oo,Si,Us,Hu,Wi,Ku,Dl,Gt,Rs,Gu,re,Hs,Ju,Jt,Xu,Bi,Zu,Qu,Ui,Yu,eg,tg,So,og,Ri,ng,sg,Ks,Al;return C=new D({}),be=new D({}),$e=new D({}),en=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),nn=new D({}),sn=new w({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/configuration_clip.py#L209",parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),an=new w({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/configuration_clip.py#L258",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),ln=new D({}),dn=new w({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/configuration_clip.py#L31",parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPModel">CLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
testing).`,name:"initializer_factor"}]}}),pn=new N({props:{code:`from transformers import CLIPTextModel, CLIPTextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),hn=new D({}),mn=new w({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/configuration_clip.py#L122",parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}]}}),un=new N({props:{code:`from transformers import CLIPVisionModel, CLIPVisionConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),gn=new D({}),_n=new w({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/tokenization_clip.py#L100",parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),Pn=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/tokenization_clip.py#L186",parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),In=new w({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/tokenization_clip.py#L213",parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Cn=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/tokenization_clip.py#L241",parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),bn=new w({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/tokenization_clip.py#L336"}}),yn=new D({}),Ln=new w({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/tokenization_clip_fast.py#L48",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),$n=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/tokenization_clip_fast.py#L121",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/tokenization_clip_fast.py#L148",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),En=new D({}),zn=new w({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 3"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/feature_extraction_clip.py#L31",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),Mn=new w({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/feature_extraction_clip.py#L159",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}]}}),qn=new w({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = 3"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/feature_extraction_clip.py#L185",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}]}}),Dn=new D({}),An=new w({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/processing_clip.py#L22",parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),Nn=new w({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/processing_clip.py#L95"}}),On=new w({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/processing_clip.py#L102"}}),Wn=new D({}),Bn=new w({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_clip.py#L837",parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Hn=new w({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_clip.py#L952",parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>BaseModelOutputWithPooling</code>)</li>
</ul>
`}}),Io=new ce({props:{$$slots:{default:[dP]},$$scope:{ctx:x}}}),Kn=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Gn=new w({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_clip.py#L870",parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`}}),To=new ce({props:{$$slots:{default:[cP]},$$scope:{ctx:x}}}),Jn=new N({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),Xn=new w({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_clip.py#L910",parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`}}),Co=new ce({props:{$$slots:{default:[pP]},$$scope:{ctx:x}}}),Zn=new N({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Qn=new D({}),Yn=new w({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_clip.py#L673"}}),es=new w({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_clip.py#L688",parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
`}}),yo=new ce({props:{$$slots:{default:[hP]},$$scope:{ctx:x}}}),ts=new N({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),os=new D({}),ns=new w({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_clip.py#L784"}}),ss=new w({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_clip.py#L797",parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
`}}),ko=new ce({props:{$$slots:{default:[mP]},$$scope:{ctx:x}}}),as=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),rs=new D({}),is=new w({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_tf_clip.py#L1287",parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$o=new ce({props:{$$slots:{default:[fP]},$$scope:{ctx:x}}}),ps=new w({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_tf_clip.py#L1440",parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>TFBaseModelOutputWithPooling</code>)</li>
</ul>
`}}),xo=new ce({props:{$$slots:{default:[uP]},$$scope:{ctx:x}}}),hs=new N({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),ms=new w({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_tf_clip.py#L1333",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`}}),Eo=new ce({props:{$$slots:{default:[gP]},$$scope:{ctx:x}}}),fs=new N({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),us=new w({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_tf_clip.py#L1385",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code>for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`}}),zo=new ce({props:{$$slots:{default:[_P]},$$scope:{ctx:x}}}),gs=new N({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),_s=new D({}),vs=new w({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_tf_clip.py#L1102"}}),Ps=new w({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_tf_clip.py#L1110",parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
`}}),Mo=new ce({props:{$$slots:{default:[vP]},$$scope:{ctx:x}}}),Is=new N({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Ts=new D({}),Cs=new w({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_tf_clip.py#L1176"}}),bs=new w({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_tf_clip.py#L1217",parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code>for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
`}}),qo=new ce({props:{$$slots:{default:[PP]},$$scope:{ctx:x}}}),ys=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),Ls=new D({}),ks=new w({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_flax_clip.py#L1108",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Fs=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_flax_clip.py#L737",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>)</li>
</ul>
`}}),Ao=new ce({props:{$$slots:{default:[IP]},$$scope:{ctx:x}}}),qs=new N({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Ds=new w({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPPreTrainedModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_flax_clip.py#L782",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`}}),As=new N({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),Ns=new w({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPPreTrainedModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_flax_clip.py#L849",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`}}),Vs=new N({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Os=new D({}),Ss=new w({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_flax_clip.py#L929"}}),Ws=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_flax_clip.py#L604",parametersDescription:[{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
`}}),Vo=new ce({props:{$$slots:{default:[TP]},$$scope:{ctx:x}}}),Bs=new N({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Us=new D({}),Rs=new w({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_flax_clip.py#L982"}}),Hs=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/clip/modeling_flax_clip.py#L673",parametersDescription:[{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
`}}),So=new ce({props:{$$slots:{default:[CP]},$$scope:{ctx:x}}}),Ks=new N({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=n("meta"),L=l(),u=n("h1"),b=n("a"),y=n("span"),g(C.$$.fragment),f=l(),k=n("span"),Ho=r("CLIP"),rt=l(),j=n("h2"),ue=n("a"),Ce=n("span"),g(be.$$.fragment),Ko=l(),ye=n("span"),Go=r("Overview"),Xt=l(),pe=n("p"),je=r("The CLIP model was proposed in "),Le=n("a"),Zt=r("Learning Transferable Visual Models From Natural Language Supervision"),H=r(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),he=l(),Me=n("p"),it=r("The abstract from the paper is the following:"),Qt=l(),Fe=n("p"),ke=n("em"),Jo=r(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Yt=l(),A=n("h2"),ge=n("a"),we=n("span"),g($e.$$.fragment),Xo=l(),xe=n("span"),Zo=r("Usage"),eo=l(),me=n("p"),Qo=r(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),qe=l(),_e=n("p"),$=r(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),M=n("a"),to=r("CLIPFeatureExtractor"),Qs=r(" can be used to resize (or rescale) and normalize images for the model."),Yo=l(),E=n("p"),Ys=r("The "),lt=n("a"),ea=r("CLIPTokenizer"),De=r(" is used to encode the text. The "),ve=n("a"),ta=r("CLIPProcessor"),oa=r(` wraps
`),Pe=n("a"),na=r("CLIPFeatureExtractor"),sa=r(" and "),Ae=n("a"),aa=r("CLIPTokenizer"),xd=r(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ra=n("a"),Ed=r("CLIPProcessor"),zd=r(" and "),ia=n("a"),jd=r("CLIPModel"),Md=r("."),nl=l(),g(en.$$.fragment),sl=l(),Ne=n("p"),Fd=r("This model was contributed by "),tn=n("a"),qd=r("valhalla"),Dd=r(". The original code can be found "),on=n("a"),Ad=r("here"),Nd=r("."),al=l(),dt=n("h2"),oo=n("a"),pr=n("span"),g(nn.$$.fragment),Vd=l(),hr=n("span"),Od=r("CLIPConfig"),rl=l(),fe=n("div"),g(sn.$$.fragment),Sd=l(),no=n("p"),la=n("a"),Wd=r("CLIPConfig"),Bd=r(" is the configuration class to store the configuration of a "),da=n("a"),Ud=r("CLIPModel"),Rd=r(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Hd=l(),ct=n("p"),Kd=r("Configuration objects inherit from "),ca=n("a"),Gd=r("PretrainedConfig"),Jd=r(` and can be used to control the model outputs. Read the
documentation from `),pa=n("a"),Xd=r("PretrainedConfig"),Zd=r(" for more information."),Qd=l(),so=n("div"),g(an.$$.fragment),Yd=l(),rn=n("p"),ec=r("Instantiate a "),ha=n("a"),tc=r("CLIPConfig"),oc=r(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),il=l(),pt=n("h2"),ao=n("a"),mr=n("span"),g(ln.$$.fragment),nc=l(),fr=n("span"),sc=r("CLIPTextConfig"),ll=l(),O=n("div"),g(dn.$$.fragment),ac=l(),ht=n("p"),rc=r("This is the configuration class to store the configuration of a "),ma=n("a"),ic=r("CLIPModel"),lc=r(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),cn=n("a"),dc=r("openai/clip-vit-base-patch32"),cc=r(" architecture."),pc=l(),mt=n("p"),hc=r("Configuration objects inherit from "),fa=n("a"),mc=r("PretrainedConfig"),fc=r(` and can be used to control the model outputs. Read the
documentation from `),ua=n("a"),uc=r("PretrainedConfig"),gc=r(" for more information."),_c=l(),ur=n("p"),vc=r("Example:"),Pc=l(),g(pn.$$.fragment),dl=l(),ft=n("h2"),ro=n("a"),gr=n("span"),g(hn.$$.fragment),Ic=l(),_r=n("span"),Tc=r("CLIPVisionConfig"),cl=l(),S=n("div"),g(mn.$$.fragment),Cc=l(),ut=n("p"),bc=r("This is the configuration class to store the configuration of a "),ga=n("a"),yc=r("CLIPModel"),Lc=r(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),fn=n("a"),kc=r("openai/clip-vit-base-patch32"),wc=r(" architecture."),$c=l(),gt=n("p"),xc=r("Configuration objects inherit from "),_a=n("a"),Ec=r("PretrainedConfig"),zc=r(` and can be used to control the model outputs. Read the
documentation from `),va=n("a"),jc=r("PretrainedConfig"),Mc=r(" for more information."),Fc=l(),vr=n("p"),qc=r("Example:"),Dc=l(),g(un.$$.fragment),pl=l(),_t=n("h2"),io=n("a"),Pr=n("span"),g(gn.$$.fragment),Ac=l(),Ir=n("span"),Nc=r("CLIPTokenizer"),hl=l(),F=n("div"),g(_n.$$.fragment),Vc=l(),Tr=n("p"),Oc=r("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Sc=l(),vn=n("p"),Wc=r("This tokenizer inherits from "),Pa=n("a"),Bc=r("PreTrainedTokenizer"),Uc=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rc=l(),Ie=n("div"),g(Pn.$$.fragment),Hc=l(),Cr=n("p"),Kc=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Gc=l(),br=n("ul"),Ia=n("li"),Jc=r("single sequence: "),yr=n("code"),Xc=r("<|startoftext|> X <|endoftext|>"),Zc=l(),Lr=n("p"),Qc=r("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Yc=l(),lo=n("div"),g(In.$$.fragment),ep=l(),Tn=n("p"),tp=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),kr=n("code"),op=r("prepare_for_model"),np=r(" method."),sp=l(),co=n("div"),g(Cn.$$.fragment),ap=l(),wr=n("p"),rp=r(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ip=l(),Ta=n("div"),g(bn.$$.fragment),ml=l(),vt=n("h2"),po=n("a"),$r=n("span"),g(yn.$$.fragment),lp=l(),xr=n("span"),dp=r("CLIPTokenizerFast"),fl=l(),W=n("div"),g(Ln.$$.fragment),cp=l(),kn=n("p"),pp=r("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Er=n("em"),hp=r("tokenizers"),mp=r(` library). Based on byte-level
Byte-Pair-Encoding.`),fp=l(),wn=n("p"),up=r("This tokenizer inherits from "),Ca=n("a"),gp=r("PreTrainedTokenizerFast"),_p=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),vp=l(),Te=n("div"),g($n.$$.fragment),Pp=l(),zr=n("p"),Ip=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Tp=l(),jr=n("ul"),ba=n("li"),Cp=r("single sequence: "),Mr=n("code"),bp=r("<|startoftext|> X <|endoftext|>"),yp=l(),Fr=n("p"),Lp=r("Pairs of sequences are not the expected use case, but they will be handled without a separator."),kp=l(),ho=n("div"),g(xn.$$.fragment),wp=l(),qr=n("p"),$p=r(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ul=l(),Pt=n("h2"),mo=n("a"),Dr=n("span"),g(En.$$.fragment),xp=l(),Ar=n("span"),Ep=r("CLIPFeatureExtractor"),gl=l(),B=n("div"),g(zn.$$.fragment),zp=l(),Nr=n("p"),jp=r("Constructs a CLIP feature extractor."),Mp=l(),jn=n("p"),Fp=r("This feature extractor inherits from "),ya=n("a"),qp=r("FeatureExtractionMixin"),Dp=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ap=l(),fo=n("div"),g(Mn.$$.fragment),Np=l(),Fn=n("p"),Vp=r("Crops "),Vr=n("code"),Op=r("image"),Sp=r(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Wp=l(),uo=n("div"),g(qn.$$.fragment),Bp=l(),It=n("p"),Up=r("Resizes "),Or=n("code"),Rp=r("image"),Hp=r(". Note that this will trigger a conversion of "),Sr=n("code"),Kp=r("image"),Gp=r(" to a PIL Image."),_l=l(),Tt=n("h2"),go=n("a"),Wr=n("span"),g(Dn.$$.fragment),Jp=l(),Br=n("span"),Xp=r("CLIPProcessor"),vl=l(),U=n("div"),g(An.$$.fragment),Zp=l(),Ur=n("p"),Qp=r("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Yp=l(),K=n("p"),La=n("a"),eh=r("CLIPProcessor"),th=r(" offers all the functionalities of "),ka=n("a"),oh=r("CLIPFeatureExtractor"),nh=r(" and "),wa=n("a"),sh=r("CLIPTokenizer"),ah=r(`. See the
`),Rr=n("code"),rh=r("__call__()"),ih=r("and "),$a=n("a"),lh=r("decode()"),dh=r(" for more information."),ch=l(),_o=n("div"),g(Nn.$$.fragment),ph=l(),Vn=n("p"),hh=r("This method forwards all its arguments to CLIPTokenizer\u2019s "),xa=n("a"),mh=r("batch_decode()"),fh=r(`. Please refer
to the docstring of this method for more information.`),uh=l(),vo=n("div"),g(On.$$.fragment),gh=l(),Sn=n("p"),_h=r("This method forwards all its arguments to CLIPTokenizer\u2019s "),Ea=n("a"),vh=r("decode()"),Ph=r(`. Please refer to the
docstring of this method for more information.`),Pl=l(),Ct=n("h2"),Po=n("a"),Hr=n("span"),g(Wn.$$.fragment),Ih=l(),Kr=n("span"),Th=r("CLIPModel"),Il=l(),R=n("div"),g(Bn.$$.fragment),Ch=l(),Un=n("p"),bh=r("This model is a PyTorch "),Rn=n("a"),yh=r("torch.nn.Module"),Lh=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kh=l(),G=n("div"),g(Hn.$$.fragment),wh=l(),bt=n("p"),$h=r("The "),za=n("a"),xh=r("CLIPModel"),Eh=r(" forward method, overrides the "),Gr=n("code"),zh=r("__call__"),jh=r(" special method."),Mh=l(),g(Io.$$.fragment),Fh=l(),Jr=n("p"),qh=r("Examples:"),Dh=l(),g(Kn.$$.fragment),Ah=l(),J=n("div"),g(Gn.$$.fragment),Nh=l(),yt=n("p"),Vh=r("The "),ja=n("a"),Oh=r("CLIPModel"),Sh=r(" forward method, overrides the "),Xr=n("code"),Wh=r("__call__"),Bh=r(" special method."),Uh=l(),g(To.$$.fragment),Rh=l(),Zr=n("p"),Hh=r("Examples:"),Kh=l(),g(Jn.$$.fragment),Gh=l(),X=n("div"),g(Xn.$$.fragment),Jh=l(),Lt=n("p"),Xh=r("The "),Ma=n("a"),Zh=r("CLIPModel"),Qh=r(" forward method, overrides the "),Qr=n("code"),Yh=r("__call__"),em=r(" special method."),tm=l(),g(Co.$$.fragment),om=l(),Yr=n("p"),nm=r("Examples:"),sm=l(),g(Zn.$$.fragment),Tl=l(),kt=n("h2"),bo=n("a"),ei=n("span"),g(Qn.$$.fragment),am=l(),ti=n("span"),rm=r("CLIPTextModel"),Cl=l(),wt=n("div"),g(Yn.$$.fragment),im=l(),Z=n("div"),g(es.$$.fragment),lm=l(),$t=n("p"),dm=r("The "),Fa=n("a"),cm=r("CLIPTextModel"),pm=r(" forward method, overrides the "),oi=n("code"),hm=r("__call__"),mm=r(" special method."),fm=l(),g(yo.$$.fragment),um=l(),ni=n("p"),gm=r("Examples:"),_m=l(),g(ts.$$.fragment),bl=l(),xt=n("h2"),Lo=n("a"),si=n("span"),g(os.$$.fragment),vm=l(),ai=n("span"),Pm=r("CLIPVisionModel"),yl=l(),Et=n("div"),g(ns.$$.fragment),Im=l(),Q=n("div"),g(ss.$$.fragment),Tm=l(),zt=n("p"),Cm=r("The "),qa=n("a"),bm=r("CLIPVisionModel"),ym=r(" forward method, overrides the "),ri=n("code"),Lm=r("__call__"),km=r(" special method."),wm=l(),g(ko.$$.fragment),$m=l(),ii=n("p"),xm=r("Examples:"),Em=l(),g(as.$$.fragment),Ll=l(),jt=n("h2"),wo=n("a"),li=n("span"),g(rs.$$.fragment),zm=l(),di=n("span"),jm=r("TFCLIPModel"),kl=l(),q=n("div"),g(is.$$.fragment),Mm=l(),ls=n("p"),Fm=r("This model inherits from "),Da=n("a"),qm=r("TFPreTrainedModel"),Dm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Am=l(),ds=n("p"),Nm=r("This model is also a "),cs=n("a"),Vm=r("tf.keras.Model"),Om=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sm=l(),g($o.$$.fragment),Wm=l(),Y=n("div"),g(ps.$$.fragment),Bm=l(),Mt=n("p"),Um=r("The "),Aa=n("a"),Rm=r("TFCLIPModel"),Hm=r(" forward method, overrides the "),ci=n("code"),Km=r("__call__"),Gm=r(" special method."),Jm=l(),g(xo.$$.fragment),Xm=l(),pi=n("p"),Zm=r("Examples:"),Qm=l(),g(hs.$$.fragment),Ym=l(),ee=n("div"),g(ms.$$.fragment),ef=l(),Ft=n("p"),tf=r("The "),Na=n("a"),of=r("TFCLIPModel"),nf=r(" forward method, overrides the "),hi=n("code"),sf=r("__call__"),af=r(" special method."),rf=l(),g(Eo.$$.fragment),lf=l(),mi=n("p"),df=r("Examples:"),cf=l(),g(fs.$$.fragment),pf=l(),te=n("div"),g(us.$$.fragment),hf=l(),qt=n("p"),mf=r("The "),Va=n("a"),ff=r("TFCLIPModel"),uf=r(" forward method, overrides the "),fi=n("code"),gf=r("__call__"),_f=r(" special method."),vf=l(),g(zo.$$.fragment),Pf=l(),ui=n("p"),If=r("Examples:"),Tf=l(),g(gs.$$.fragment),wl=l(),Dt=n("h2"),jo=n("a"),gi=n("span"),g(_s.$$.fragment),Cf=l(),_i=n("span"),bf=r("TFCLIPTextModel"),$l=l(),At=n("div"),g(vs.$$.fragment),yf=l(),oe=n("div"),g(Ps.$$.fragment),Lf=l(),Nt=n("p"),kf=r("The "),Oa=n("a"),wf=r("TFCLIPTextModel"),$f=r(" forward method, overrides the "),vi=n("code"),xf=r("__call__"),Ef=r(" special method."),zf=l(),g(Mo.$$.fragment),jf=l(),Pi=n("p"),Mf=r("Examples:"),Ff=l(),g(Is.$$.fragment),xl=l(),Vt=n("h2"),Fo=n("a"),Ii=n("span"),g(Ts.$$.fragment),qf=l(),Ti=n("span"),Df=r("TFCLIPVisionModel"),El=l(),Ot=n("div"),g(Cs.$$.fragment),Af=l(),ne=n("div"),g(bs.$$.fragment),Nf=l(),St=n("p"),Vf=r("The "),Sa=n("a"),Of=r("TFCLIPVisionModel"),Sf=r(" forward method, overrides the "),Ci=n("code"),Wf=r("__call__"),Bf=r(" special method."),Uf=l(),g(qo.$$.fragment),Rf=l(),bi=n("p"),Hf=r("Examples:"),Kf=l(),g(ys.$$.fragment),zl=l(),Wt=n("h2"),Do=n("a"),yi=n("span"),g(Ls.$$.fragment),Gf=l(),Li=n("span"),Jf=r("FlaxCLIPModel"),jl=l(),z=n("div"),g(ks.$$.fragment),Xf=l(),ws=n("p"),Zf=r("This model inherits from "),Wa=n("a"),Qf=r("FlaxPreTrainedModel"),Yf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eu=l(),$s=n("p"),tu=r("This model is also a Flax Linen "),xs=n("a"),ou=r("flax.linen.Module"),nu=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),su=l(),ki=n("p"),au=r("Finally, this model supports inherent JAX features such as:"),ru=l(),Ee=n("ul"),wi=n("li"),Es=n("a"),iu=r("Just-In-Time (JIT) compilation"),lu=l(),$i=n("li"),zs=n("a"),du=r("Automatic Differentiation"),cu=l(),xi=n("li"),js=n("a"),pu=r("Vectorization"),hu=l(),Ei=n("li"),Ms=n("a"),mu=r("Parallelization"),fu=l(),se=n("div"),g(Fs.$$.fragment),uu=l(),Bt=n("p"),gu=r("The "),zi=n("code"),_u=r("FlaxCLIPPreTrainedModel"),vu=r("forward method, overrides the "),ji=n("code"),Pu=r("__call__"),Iu=r(" special method."),Tu=l(),g(Ao.$$.fragment),Cu=l(),Mi=n("p"),bu=r("Example:"),yu=l(),g(qs.$$.fragment),Lu=l(),Ve=n("div"),g(Ds.$$.fragment),ku=l(),Fi=n("p"),wu=r("Examples:"),$u=l(),g(As.$$.fragment),xu=l(),Oe=n("div"),g(Ns.$$.fragment),Eu=l(),qi=n("p"),zu=r("Examples:"),ju=l(),g(Vs.$$.fragment),Ml=l(),Ut=n("h2"),No=n("a"),Di=n("span"),g(Os.$$.fragment),Mu=l(),Ai=n("span"),Fu=r("FlaxCLIPTextModel"),Fl=l(),Rt=n("div"),g(Ss.$$.fragment),qu=l(),ae=n("div"),g(Ws.$$.fragment),Du=l(),Ht=n("p"),Au=r("The "),Ni=n("code"),Nu=r("FlaxCLIPTextPreTrainedModel"),Vu=r("forward method, overrides the "),Vi=n("code"),Ou=r("__call__"),Su=r(" special method."),Wu=l(),g(Vo.$$.fragment),Bu=l(),Oi=n("p"),Uu=r("Example:"),Ru=l(),g(Bs.$$.fragment),ql=l(),Kt=n("h2"),Oo=n("a"),Si=n("span"),g(Us.$$.fragment),Hu=l(),Wi=n("span"),Ku=r("FlaxCLIPVisionModel"),Dl=l(),Gt=n("div"),g(Rs.$$.fragment),Gu=l(),re=n("div"),g(Hs.$$.fragment),Ju=l(),Jt=n("p"),Xu=r("The "),Bi=n("code"),Zu=r("FlaxCLIPVisionPreTrainedModel"),Qu=r("forward method, overrides the "),Ui=n("code"),Yu=r("__call__"),eg=r(" special method."),tg=l(),g(So.$$.fragment),og=l(),Ri=n("p"),ng=r("Example:"),sg=l(),g(Ks.$$.fragment),this.h()},l(t){const h=lP('[data-svelte="svelte-1phssyn"]',document.head);p=s(h,"META",{name:!0,content:!0}),h.forEach(o),L=d(t),u=s(t,"H1",{class:!0});var Gs=a(u);b=s(Gs,"A",{id:!0,class:!0,href:!0});var Hi=a(b);y=s(Hi,"SPAN",{});var Ki=a(y);_(C.$$.fragment,Ki),Ki.forEach(o),Hi.forEach(o),f=d(Gs),k=s(Gs,"SPAN",{});var Gi=a(k);Ho=i(Gi,"CLIP"),Gi.forEach(o),Gs.forEach(o),rt=d(t),j=s(t,"H2",{class:!0});var Js=a(j);ue=s(Js,"A",{id:!0,class:!0,href:!0});var Ji=a(ue);Ce=s(Ji,"SPAN",{});var Xi=a(Ce);_(be.$$.fragment,Xi),Xi.forEach(o),Ji.forEach(o),Ko=d(Js),ye=s(Js,"SPAN",{});var Zi=a(ye);Go=i(Zi,"Overview"),Zi.forEach(o),Js.forEach(o),Xt=d(t),pe=s(t,"P",{});var Xs=a(pe);je=i(Xs,"The CLIP model was proposed in "),Le=s(Xs,"A",{href:!0,rel:!0});var Qi=a(Le);Zt=i(Qi,"Learning Transferable Visual Models From Natural Language Supervision"),Qi.forEach(o),H=i(Xs,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Xs.forEach(o),he=d(t),Me=s(t,"P",{});var Yi=a(Me);it=i(Yi,"The abstract from the paper is the following:"),Yi.forEach(o),Qt=d(t),Fe=s(t,"P",{});var el=a(Fe);ke=s(el,"EM",{});var tl=a(ke);Jo=i(tl,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),tl.forEach(o),el.forEach(o),Yt=d(t),A=s(t,"H2",{class:!0});var Zs=a(A);ge=s(Zs,"A",{id:!0,class:!0,href:!0});var ig=a(ge);we=s(ig,"SPAN",{});var lg=a(we);_($e.$$.fragment,lg),lg.forEach(o),ig.forEach(o),Xo=d(Zs),xe=s(Zs,"SPAN",{});var dg=a(xe);Zo=i(dg,"Usage"),dg.forEach(o),Zs.forEach(o),eo=d(t),me=s(t,"P",{});var cg=a(me);Qo=i(cg,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),cg.forEach(o),qe=d(t),_e=s(t,"P",{});var Nl=a(_e);$=i(Nl,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),M=s(Nl,"A",{href:!0});var pg=a(M);to=i(pg,"CLIPFeatureExtractor"),pg.forEach(o),Qs=i(Nl," can be used to resize (or rescale) and normalize images for the model."),Nl.forEach(o),Yo=d(t),E=s(t,"P",{});var ie=a(E);Ys=i(ie,"The "),lt=s(ie,"A",{href:!0});var hg=a(lt);ea=i(hg,"CLIPTokenizer"),hg.forEach(o),De=i(ie," is used to encode the text. The "),ve=s(ie,"A",{href:!0});var mg=a(ve);ta=i(mg,"CLIPProcessor"),mg.forEach(o),oa=i(ie,` wraps
`),Pe=s(ie,"A",{href:!0});var fg=a(Pe);na=i(fg,"CLIPFeatureExtractor"),fg.forEach(o),sa=i(ie," and "),Ae=s(ie,"A",{href:!0});var ug=a(Ae);aa=i(ug,"CLIPTokenizer"),ug.forEach(o),xd=i(ie,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ra=s(ie,"A",{href:!0});var gg=a(ra);Ed=i(gg,"CLIPProcessor"),gg.forEach(o),zd=i(ie," and "),ia=s(ie,"A",{href:!0});var _g=a(ia);jd=i(_g,"CLIPModel"),_g.forEach(o),Md=i(ie,"."),ie.forEach(o),nl=d(t),_(en.$$.fragment,t),sl=d(t),Ne=s(t,"P",{});var Ba=a(Ne);Fd=i(Ba,"This model was contributed by "),tn=s(Ba,"A",{href:!0,rel:!0});var vg=a(tn);qd=i(vg,"valhalla"),vg.forEach(o),Dd=i(Ba,". The original code can be found "),on=s(Ba,"A",{href:!0,rel:!0});var Pg=a(on);Ad=i(Pg,"here"),Pg.forEach(o),Nd=i(Ba,"."),Ba.forEach(o),al=d(t),dt=s(t,"H2",{class:!0});var Vl=a(dt);oo=s(Vl,"A",{id:!0,class:!0,href:!0});var Ig=a(oo);pr=s(Ig,"SPAN",{});var Tg=a(pr);_(nn.$$.fragment,Tg),Tg.forEach(o),Ig.forEach(o),Vd=d(Vl),hr=s(Vl,"SPAN",{});var Cg=a(hr);Od=i(Cg,"CLIPConfig"),Cg.forEach(o),Vl.forEach(o),rl=d(t),fe=s(t,"DIV",{class:!0});var Wo=a(fe);_(sn.$$.fragment,Wo),Sd=d(Wo),no=s(Wo,"P",{});var ol=a(no);la=s(ol,"A",{href:!0});var bg=a(la);Wd=i(bg,"CLIPConfig"),bg.forEach(o),Bd=i(ol," is the configuration class to store the configuration of a "),da=s(ol,"A",{href:!0});var yg=a(da);Ud=i(yg,"CLIPModel"),yg.forEach(o),Rd=i(ol,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),ol.forEach(o),Hd=d(Wo),ct=s(Wo,"P",{});var Ua=a(ct);Kd=i(Ua,"Configuration objects inherit from "),ca=s(Ua,"A",{href:!0});var Lg=a(ca);Gd=i(Lg,"PretrainedConfig"),Lg.forEach(o),Jd=i(Ua,` and can be used to control the model outputs. Read the
documentation from `),pa=s(Ua,"A",{href:!0});var kg=a(pa);Xd=i(kg,"PretrainedConfig"),kg.forEach(o),Zd=i(Ua," for more information."),Ua.forEach(o),Qd=d(Wo),so=s(Wo,"DIV",{class:!0});var Ol=a(so);_(an.$$.fragment,Ol),Yd=d(Ol),rn=s(Ol,"P",{});var Sl=a(rn);ec=i(Sl,"Instantiate a "),ha=s(Sl,"A",{href:!0});var wg=a(ha);tc=i(wg,"CLIPConfig"),wg.forEach(o),oc=i(Sl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Sl.forEach(o),Ol.forEach(o),Wo.forEach(o),il=d(t),pt=s(t,"H2",{class:!0});var Wl=a(pt);ao=s(Wl,"A",{id:!0,class:!0,href:!0});var $g=a(ao);mr=s($g,"SPAN",{});var xg=a(mr);_(ln.$$.fragment,xg),xg.forEach(o),$g.forEach(o),nc=d(Wl),fr=s(Wl,"SPAN",{});var Eg=a(fr);sc=i(Eg,"CLIPTextConfig"),Eg.forEach(o),Wl.forEach(o),ll=d(t),O=s(t,"DIV",{class:!0});var Se=a(O);_(dn.$$.fragment,Se),ac=d(Se),ht=s(Se,"P",{});var Ra=a(ht);rc=i(Ra,"This is the configuration class to store the configuration of a "),ma=s(Ra,"A",{href:!0});var zg=a(ma);ic=i(zg,"CLIPModel"),zg.forEach(o),lc=i(Ra,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),cn=s(Ra,"A",{href:!0,rel:!0});var jg=a(cn);dc=i(jg,"openai/clip-vit-base-patch32"),jg.forEach(o),cc=i(Ra," architecture."),Ra.forEach(o),pc=d(Se),mt=s(Se,"P",{});var Ha=a(mt);hc=i(Ha,"Configuration objects inherit from "),fa=s(Ha,"A",{href:!0});var Mg=a(fa);mc=i(Mg,"PretrainedConfig"),Mg.forEach(o),fc=i(Ha,` and can be used to control the model outputs. Read the
documentation from `),ua=s(Ha,"A",{href:!0});var Fg=a(ua);uc=i(Fg,"PretrainedConfig"),Fg.forEach(o),gc=i(Ha," for more information."),Ha.forEach(o),_c=d(Se),ur=s(Se,"P",{});var qg=a(ur);vc=i(qg,"Example:"),qg.forEach(o),Pc=d(Se),_(pn.$$.fragment,Se),Se.forEach(o),dl=d(t),ft=s(t,"H2",{class:!0});var Bl=a(ft);ro=s(Bl,"A",{id:!0,class:!0,href:!0});var Dg=a(ro);gr=s(Dg,"SPAN",{});var Ag=a(gr);_(hn.$$.fragment,Ag),Ag.forEach(o),Dg.forEach(o),Ic=d(Bl),_r=s(Bl,"SPAN",{});var Ng=a(_r);Tc=i(Ng,"CLIPVisionConfig"),Ng.forEach(o),Bl.forEach(o),cl=d(t),S=s(t,"DIV",{class:!0});var We=a(S);_(mn.$$.fragment,We),Cc=d(We),ut=s(We,"P",{});var Ka=a(ut);bc=i(Ka,"This is the configuration class to store the configuration of a "),ga=s(Ka,"A",{href:!0});var Vg=a(ga);yc=i(Vg,"CLIPModel"),Vg.forEach(o),Lc=i(Ka,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),fn=s(Ka,"A",{href:!0,rel:!0});var Og=a(fn);kc=i(Og,"openai/clip-vit-base-patch32"),Og.forEach(o),wc=i(Ka," architecture."),Ka.forEach(o),$c=d(We),gt=s(We,"P",{});var Ga=a(gt);xc=i(Ga,"Configuration objects inherit from "),_a=s(Ga,"A",{href:!0});var Sg=a(_a);Ec=i(Sg,"PretrainedConfig"),Sg.forEach(o),zc=i(Ga,` and can be used to control the model outputs. Read the
documentation from `),va=s(Ga,"A",{href:!0});var Wg=a(va);jc=i(Wg,"PretrainedConfig"),Wg.forEach(o),Mc=i(Ga," for more information."),Ga.forEach(o),Fc=d(We),vr=s(We,"P",{});var Bg=a(vr);qc=i(Bg,"Example:"),Bg.forEach(o),Dc=d(We),_(un.$$.fragment,We),We.forEach(o),pl=d(t),_t=s(t,"H2",{class:!0});var Ul=a(_t);io=s(Ul,"A",{id:!0,class:!0,href:!0});var Ug=a(io);Pr=s(Ug,"SPAN",{});var Rg=a(Pr);_(gn.$$.fragment,Rg),Rg.forEach(o),Ug.forEach(o),Ac=d(Ul),Ir=s(Ul,"SPAN",{});var Hg=a(Ir);Nc=i(Hg,"CLIPTokenizer"),Hg.forEach(o),Ul.forEach(o),hl=d(t),F=s(t,"DIV",{class:!0});var le=a(F);_(_n.$$.fragment,le),Vc=d(le),Tr=s(le,"P",{});var Kg=a(Tr);Oc=i(Kg,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Kg.forEach(o),Sc=d(le),vn=s(le,"P",{});var Rl=a(vn);Wc=i(Rl,"This tokenizer inherits from "),Pa=s(Rl,"A",{href:!0});var Gg=a(Pa);Bc=i(Gg,"PreTrainedTokenizer"),Gg.forEach(o),Uc=i(Rl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rl.forEach(o),Rc=d(le),Ie=s(le,"DIV",{class:!0});var Bo=a(Ie);_(Pn.$$.fragment,Bo),Hc=d(Bo),Cr=s(Bo,"P",{});var Jg=a(Cr);Kc=i(Jg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Jg.forEach(o),Gc=d(Bo),br=s(Bo,"UL",{});var Xg=a(br);Ia=s(Xg,"LI",{});var ag=a(Ia);Jc=i(ag,"single sequence: "),yr=s(ag,"CODE",{});var Zg=a(yr);Xc=i(Zg,"<|startoftext|> X <|endoftext|>"),Zg.forEach(o),ag.forEach(o),Xg.forEach(o),Zc=d(Bo),Lr=s(Bo,"P",{});var Qg=a(Lr);Qc=i(Qg,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Qg.forEach(o),Bo.forEach(o),Yc=d(le),lo=s(le,"DIV",{class:!0});var Hl=a(lo);_(In.$$.fragment,Hl),ep=d(Hl),Tn=s(Hl,"P",{});var Kl=a(Tn);tp=i(Kl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),kr=s(Kl,"CODE",{});var Yg=a(kr);op=i(Yg,"prepare_for_model"),Yg.forEach(o),np=i(Kl," method."),Kl.forEach(o),Hl.forEach(o),sp=d(le),co=s(le,"DIV",{class:!0});var Gl=a(co);_(Cn.$$.fragment,Gl),ap=d(Gl),wr=s(Gl,"P",{});var e_=a(wr);rp=i(e_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),e_.forEach(o),Gl.forEach(o),ip=d(le),Ta=s(le,"DIV",{class:!0});var t_=a(Ta);_(bn.$$.fragment,t_),t_.forEach(o),le.forEach(o),ml=d(t),vt=s(t,"H2",{class:!0});var Jl=a(vt);po=s(Jl,"A",{id:!0,class:!0,href:!0});var o_=a(po);$r=s(o_,"SPAN",{});var n_=a($r);_(yn.$$.fragment,n_),n_.forEach(o),o_.forEach(o),lp=d(Jl),xr=s(Jl,"SPAN",{});var s_=a(xr);dp=i(s_,"CLIPTokenizerFast"),s_.forEach(o),Jl.forEach(o),fl=d(t),W=s(t,"DIV",{class:!0});var Be=a(W);_(Ln.$$.fragment,Be),cp=d(Be),kn=s(Be,"P",{});var Xl=a(kn);pp=i(Xl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Er=s(Xl,"EM",{});var a_=a(Er);hp=i(a_,"tokenizers"),a_.forEach(o),mp=i(Xl,` library). Based on byte-level
Byte-Pair-Encoding.`),Xl.forEach(o),fp=d(Be),wn=s(Be,"P",{});var Zl=a(wn);up=i(Zl,"This tokenizer inherits from "),Ca=s(Zl,"A",{href:!0});var r_=a(Ca);gp=i(r_,"PreTrainedTokenizerFast"),r_.forEach(o),_p=i(Zl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Zl.forEach(o),vp=d(Be),Te=s(Be,"DIV",{class:!0});var Uo=a(Te);_($n.$$.fragment,Uo),Pp=d(Uo),zr=s(Uo,"P",{});var i_=a(zr);Ip=i(i_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),i_.forEach(o),Tp=d(Uo),jr=s(Uo,"UL",{});var l_=a(jr);ba=s(l_,"LI",{});var rg=a(ba);Cp=i(rg,"single sequence: "),Mr=s(rg,"CODE",{});var d_=a(Mr);bp=i(d_,"<|startoftext|> X <|endoftext|>"),d_.forEach(o),rg.forEach(o),l_.forEach(o),yp=d(Uo),Fr=s(Uo,"P",{});var c_=a(Fr);Lp=i(c_,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),c_.forEach(o),Uo.forEach(o),kp=d(Be),ho=s(Be,"DIV",{class:!0});var Ql=a(ho);_(xn.$$.fragment,Ql),wp=d(Ql),qr=s(Ql,"P",{});var p_=a(qr);$p=i(p_,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),p_.forEach(o),Ql.forEach(o),Be.forEach(o),ul=d(t),Pt=s(t,"H2",{class:!0});var Yl=a(Pt);mo=s(Yl,"A",{id:!0,class:!0,href:!0});var h_=a(mo);Dr=s(h_,"SPAN",{});var m_=a(Dr);_(En.$$.fragment,m_),m_.forEach(o),h_.forEach(o),xp=d(Yl),Ar=s(Yl,"SPAN",{});var f_=a(Ar);Ep=i(f_,"CLIPFeatureExtractor"),f_.forEach(o),Yl.forEach(o),gl=d(t),B=s(t,"DIV",{class:!0});var Ue=a(B);_(zn.$$.fragment,Ue),zp=d(Ue),Nr=s(Ue,"P",{});var u_=a(Nr);jp=i(u_,"Constructs a CLIP feature extractor."),u_.forEach(o),Mp=d(Ue),jn=s(Ue,"P",{});var ed=a(jn);Fp=i(ed,"This feature extractor inherits from "),ya=s(ed,"A",{href:!0});var g_=a(ya);qp=i(g_,"FeatureExtractionMixin"),g_.forEach(o),Dp=i(ed,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ed.forEach(o),Ap=d(Ue),fo=s(Ue,"DIV",{class:!0});var td=a(fo);_(Mn.$$.fragment,td),Np=d(td),Fn=s(td,"P",{});var od=a(Fn);Vp=i(od,"Crops "),Vr=s(od,"CODE",{});var __=a(Vr);Op=i(__,"image"),__.forEach(o),Sp=i(od,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),od.forEach(o),td.forEach(o),Wp=d(Ue),uo=s(Ue,"DIV",{class:!0});var nd=a(uo);_(qn.$$.fragment,nd),Bp=d(nd),It=s(nd,"P",{});var Ja=a(It);Up=i(Ja,"Resizes "),Or=s(Ja,"CODE",{});var v_=a(Or);Rp=i(v_,"image"),v_.forEach(o),Hp=i(Ja,". Note that this will trigger a conversion of "),Sr=s(Ja,"CODE",{});var P_=a(Sr);Kp=i(P_,"image"),P_.forEach(o),Gp=i(Ja," to a PIL Image."),Ja.forEach(o),nd.forEach(o),Ue.forEach(o),_l=d(t),Tt=s(t,"H2",{class:!0});var sd=a(Tt);go=s(sd,"A",{id:!0,class:!0,href:!0});var I_=a(go);Wr=s(I_,"SPAN",{});var T_=a(Wr);_(Dn.$$.fragment,T_),T_.forEach(o),I_.forEach(o),Jp=d(sd),Br=s(sd,"SPAN",{});var C_=a(Br);Xp=i(C_,"CLIPProcessor"),C_.forEach(o),sd.forEach(o),vl=d(t),U=s(t,"DIV",{class:!0});var Re=a(U);_(An.$$.fragment,Re),Zp=d(Re),Ur=s(Re,"P",{});var b_=a(Ur);Qp=i(b_,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),b_.forEach(o),Yp=d(Re),K=s(Re,"P",{});var ze=a(K);La=s(ze,"A",{href:!0});var y_=a(La);eh=i(y_,"CLIPProcessor"),y_.forEach(o),th=i(ze," offers all the functionalities of "),ka=s(ze,"A",{href:!0});var L_=a(ka);oh=i(L_,"CLIPFeatureExtractor"),L_.forEach(o),nh=i(ze," and "),wa=s(ze,"A",{href:!0});var k_=a(wa);sh=i(k_,"CLIPTokenizer"),k_.forEach(o),ah=i(ze,`. See the
`),Rr=s(ze,"CODE",{});var w_=a(Rr);rh=i(w_,"__call__()"),w_.forEach(o),ih=i(ze,"and "),$a=s(ze,"A",{href:!0});var $_=a($a);lh=i($_,"decode()"),$_.forEach(o),dh=i(ze," for more information."),ze.forEach(o),ch=d(Re),_o=s(Re,"DIV",{class:!0});var ad=a(_o);_(Nn.$$.fragment,ad),ph=d(ad),Vn=s(ad,"P",{});var rd=a(Vn);hh=i(rd,"This method forwards all its arguments to CLIPTokenizer\u2019s "),xa=s(rd,"A",{href:!0});var x_=a(xa);mh=i(x_,"batch_decode()"),x_.forEach(o),fh=i(rd,`. Please refer
to the docstring of this method for more information.`),rd.forEach(o),ad.forEach(o),uh=d(Re),vo=s(Re,"DIV",{class:!0});var id=a(vo);_(On.$$.fragment,id),gh=d(id),Sn=s(id,"P",{});var ld=a(Sn);_h=i(ld,"This method forwards all its arguments to CLIPTokenizer\u2019s "),Ea=s(ld,"A",{href:!0});var E_=a(Ea);vh=i(E_,"decode()"),E_.forEach(o),Ph=i(ld,`. Please refer to the
docstring of this method for more information.`),ld.forEach(o),id.forEach(o),Re.forEach(o),Pl=d(t),Ct=s(t,"H2",{class:!0});var dd=a(Ct);Po=s(dd,"A",{id:!0,class:!0,href:!0});var z_=a(Po);Hr=s(z_,"SPAN",{});var j_=a(Hr);_(Wn.$$.fragment,j_),j_.forEach(o),z_.forEach(o),Ih=d(dd),Kr=s(dd,"SPAN",{});var M_=a(Kr);Th=i(M_,"CLIPModel"),M_.forEach(o),dd.forEach(o),Il=d(t),R=s(t,"DIV",{class:!0});var He=a(R);_(Bn.$$.fragment,He),Ch=d(He),Un=s(He,"P",{});var cd=a(Un);bh=i(cd,"This model is a PyTorch "),Rn=s(cd,"A",{href:!0,rel:!0});var F_=a(Rn);yh=i(F_,"torch.nn.Module"),F_.forEach(o),Lh=i(cd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cd.forEach(o),kh=d(He),G=s(He,"DIV",{class:!0});var Ke=a(G);_(Hn.$$.fragment,Ke),wh=d(Ke),bt=s(Ke,"P",{});var Xa=a(bt);$h=i(Xa,"The "),za=s(Xa,"A",{href:!0});var q_=a(za);xh=i(q_,"CLIPModel"),q_.forEach(o),Eh=i(Xa," forward method, overrides the "),Gr=s(Xa,"CODE",{});var D_=a(Gr);zh=i(D_,"__call__"),D_.forEach(o),jh=i(Xa," special method."),Xa.forEach(o),Mh=d(Ke),_(Io.$$.fragment,Ke),Fh=d(Ke),Jr=s(Ke,"P",{});var A_=a(Jr);qh=i(A_,"Examples:"),A_.forEach(o),Dh=d(Ke),_(Kn.$$.fragment,Ke),Ke.forEach(o),Ah=d(He),J=s(He,"DIV",{class:!0});var Ge=a(J);_(Gn.$$.fragment,Ge),Nh=d(Ge),yt=s(Ge,"P",{});var Za=a(yt);Vh=i(Za,"The "),ja=s(Za,"A",{href:!0});var N_=a(ja);Oh=i(N_,"CLIPModel"),N_.forEach(o),Sh=i(Za," forward method, overrides the "),Xr=s(Za,"CODE",{});var V_=a(Xr);Wh=i(V_,"__call__"),V_.forEach(o),Bh=i(Za," special method."),Za.forEach(o),Uh=d(Ge),_(To.$$.fragment,Ge),Rh=d(Ge),Zr=s(Ge,"P",{});var O_=a(Zr);Hh=i(O_,"Examples:"),O_.forEach(o),Kh=d(Ge),_(Jn.$$.fragment,Ge),Ge.forEach(o),Gh=d(He),X=s(He,"DIV",{class:!0});var Je=a(X);_(Xn.$$.fragment,Je),Jh=d(Je),Lt=s(Je,"P",{});var Qa=a(Lt);Xh=i(Qa,"The "),Ma=s(Qa,"A",{href:!0});var S_=a(Ma);Zh=i(S_,"CLIPModel"),S_.forEach(o),Qh=i(Qa," forward method, overrides the "),Qr=s(Qa,"CODE",{});var W_=a(Qr);Yh=i(W_,"__call__"),W_.forEach(o),em=i(Qa," special method."),Qa.forEach(o),tm=d(Je),_(Co.$$.fragment,Je),om=d(Je),Yr=s(Je,"P",{});var B_=a(Yr);nm=i(B_,"Examples:"),B_.forEach(o),sm=d(Je),_(Zn.$$.fragment,Je),Je.forEach(o),He.forEach(o),Tl=d(t),kt=s(t,"H2",{class:!0});var pd=a(kt);bo=s(pd,"A",{id:!0,class:!0,href:!0});var U_=a(bo);ei=s(U_,"SPAN",{});var R_=a(ei);_(Qn.$$.fragment,R_),R_.forEach(o),U_.forEach(o),am=d(pd),ti=s(pd,"SPAN",{});var H_=a(ti);rm=i(H_,"CLIPTextModel"),H_.forEach(o),pd.forEach(o),Cl=d(t),wt=s(t,"DIV",{class:!0});var hd=a(wt);_(Yn.$$.fragment,hd),im=d(hd),Z=s(hd,"DIV",{class:!0});var Xe=a(Z);_(es.$$.fragment,Xe),lm=d(Xe),$t=s(Xe,"P",{});var Ya=a($t);dm=i(Ya,"The "),Fa=s(Ya,"A",{href:!0});var K_=a(Fa);cm=i(K_,"CLIPTextModel"),K_.forEach(o),pm=i(Ya," forward method, overrides the "),oi=s(Ya,"CODE",{});var G_=a(oi);hm=i(G_,"__call__"),G_.forEach(o),mm=i(Ya," special method."),Ya.forEach(o),fm=d(Xe),_(yo.$$.fragment,Xe),um=d(Xe),ni=s(Xe,"P",{});var J_=a(ni);gm=i(J_,"Examples:"),J_.forEach(o),_m=d(Xe),_(ts.$$.fragment,Xe),Xe.forEach(o),hd.forEach(o),bl=d(t),xt=s(t,"H2",{class:!0});var md=a(xt);Lo=s(md,"A",{id:!0,class:!0,href:!0});var X_=a(Lo);si=s(X_,"SPAN",{});var Z_=a(si);_(os.$$.fragment,Z_),Z_.forEach(o),X_.forEach(o),vm=d(md),ai=s(md,"SPAN",{});var Q_=a(ai);Pm=i(Q_,"CLIPVisionModel"),Q_.forEach(o),md.forEach(o),yl=d(t),Et=s(t,"DIV",{class:!0});var fd=a(Et);_(ns.$$.fragment,fd),Im=d(fd),Q=s(fd,"DIV",{class:!0});var Ze=a(Q);_(ss.$$.fragment,Ze),Tm=d(Ze),zt=s(Ze,"P",{});var er=a(zt);Cm=i(er,"The "),qa=s(er,"A",{href:!0});var Y_=a(qa);bm=i(Y_,"CLIPVisionModel"),Y_.forEach(o),ym=i(er," forward method, overrides the "),ri=s(er,"CODE",{});var ev=a(ri);Lm=i(ev,"__call__"),ev.forEach(o),km=i(er," special method."),er.forEach(o),wm=d(Ze),_(ko.$$.fragment,Ze),$m=d(Ze),ii=s(Ze,"P",{});var tv=a(ii);xm=i(tv,"Examples:"),tv.forEach(o),Em=d(Ze),_(as.$$.fragment,Ze),Ze.forEach(o),fd.forEach(o),Ll=d(t),jt=s(t,"H2",{class:!0});var ud=a(jt);wo=s(ud,"A",{id:!0,class:!0,href:!0});var ov=a(wo);li=s(ov,"SPAN",{});var nv=a(li);_(rs.$$.fragment,nv),nv.forEach(o),ov.forEach(o),zm=d(ud),di=s(ud,"SPAN",{});var sv=a(di);jm=i(sv,"TFCLIPModel"),sv.forEach(o),ud.forEach(o),kl=d(t),q=s(t,"DIV",{class:!0});var de=a(q);_(is.$$.fragment,de),Mm=d(de),ls=s(de,"P",{});var gd=a(ls);Fm=i(gd,"This model inherits from "),Da=s(gd,"A",{href:!0});var av=a(Da);qm=i(av,"TFPreTrainedModel"),av.forEach(o),Dm=i(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(o),Am=d(de),ds=s(de,"P",{});var _d=a(ds);Nm=i(_d,"This model is also a "),cs=s(_d,"A",{href:!0,rel:!0});var rv=a(cs);Vm=i(rv,"tf.keras.Model"),rv.forEach(o),Om=i(_d,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_d.forEach(o),Sm=d(de),_($o.$$.fragment,de),Wm=d(de),Y=s(de,"DIV",{class:!0});var Qe=a(Y);_(ps.$$.fragment,Qe),Bm=d(Qe),Mt=s(Qe,"P",{});var tr=a(Mt);Um=i(tr,"The "),Aa=s(tr,"A",{href:!0});var iv=a(Aa);Rm=i(iv,"TFCLIPModel"),iv.forEach(o),Hm=i(tr," forward method, overrides the "),ci=s(tr,"CODE",{});var lv=a(ci);Km=i(lv,"__call__"),lv.forEach(o),Gm=i(tr," special method."),tr.forEach(o),Jm=d(Qe),_(xo.$$.fragment,Qe),Xm=d(Qe),pi=s(Qe,"P",{});var dv=a(pi);Zm=i(dv,"Examples:"),dv.forEach(o),Qm=d(Qe),_(hs.$$.fragment,Qe),Qe.forEach(o),Ym=d(de),ee=s(de,"DIV",{class:!0});var Ye=a(ee);_(ms.$$.fragment,Ye),ef=d(Ye),Ft=s(Ye,"P",{});var or=a(Ft);tf=i(or,"The "),Na=s(or,"A",{href:!0});var cv=a(Na);of=i(cv,"TFCLIPModel"),cv.forEach(o),nf=i(or," forward method, overrides the "),hi=s(or,"CODE",{});var pv=a(hi);sf=i(pv,"__call__"),pv.forEach(o),af=i(or," special method."),or.forEach(o),rf=d(Ye),_(Eo.$$.fragment,Ye),lf=d(Ye),mi=s(Ye,"P",{});var hv=a(mi);df=i(hv,"Examples:"),hv.forEach(o),cf=d(Ye),_(fs.$$.fragment,Ye),Ye.forEach(o),pf=d(de),te=s(de,"DIV",{class:!0});var et=a(te);_(us.$$.fragment,et),hf=d(et),qt=s(et,"P",{});var nr=a(qt);mf=i(nr,"The "),Va=s(nr,"A",{href:!0});var mv=a(Va);ff=i(mv,"TFCLIPModel"),mv.forEach(o),uf=i(nr," forward method, overrides the "),fi=s(nr,"CODE",{});var fv=a(fi);gf=i(fv,"__call__"),fv.forEach(o),_f=i(nr," special method."),nr.forEach(o),vf=d(et),_(zo.$$.fragment,et),Pf=d(et),ui=s(et,"P",{});var uv=a(ui);If=i(uv,"Examples:"),uv.forEach(o),Tf=d(et),_(gs.$$.fragment,et),et.forEach(o),de.forEach(o),wl=d(t),Dt=s(t,"H2",{class:!0});var vd=a(Dt);jo=s(vd,"A",{id:!0,class:!0,href:!0});var gv=a(jo);gi=s(gv,"SPAN",{});var _v=a(gi);_(_s.$$.fragment,_v),_v.forEach(o),gv.forEach(o),Cf=d(vd),_i=s(vd,"SPAN",{});var vv=a(_i);bf=i(vv,"TFCLIPTextModel"),vv.forEach(o),vd.forEach(o),$l=d(t),At=s(t,"DIV",{class:!0});var Pd=a(At);_(vs.$$.fragment,Pd),yf=d(Pd),oe=s(Pd,"DIV",{class:!0});var tt=a(oe);_(Ps.$$.fragment,tt),Lf=d(tt),Nt=s(tt,"P",{});var sr=a(Nt);kf=i(sr,"The "),Oa=s(sr,"A",{href:!0});var Pv=a(Oa);wf=i(Pv,"TFCLIPTextModel"),Pv.forEach(o),$f=i(sr," forward method, overrides the "),vi=s(sr,"CODE",{});var Iv=a(vi);xf=i(Iv,"__call__"),Iv.forEach(o),Ef=i(sr," special method."),sr.forEach(o),zf=d(tt),_(Mo.$$.fragment,tt),jf=d(tt),Pi=s(tt,"P",{});var Tv=a(Pi);Mf=i(Tv,"Examples:"),Tv.forEach(o),Ff=d(tt),_(Is.$$.fragment,tt),tt.forEach(o),Pd.forEach(o),xl=d(t),Vt=s(t,"H2",{class:!0});var Id=a(Vt);Fo=s(Id,"A",{id:!0,class:!0,href:!0});var Cv=a(Fo);Ii=s(Cv,"SPAN",{});var bv=a(Ii);_(Ts.$$.fragment,bv),bv.forEach(o),Cv.forEach(o),qf=d(Id),Ti=s(Id,"SPAN",{});var yv=a(Ti);Df=i(yv,"TFCLIPVisionModel"),yv.forEach(o),Id.forEach(o),El=d(t),Ot=s(t,"DIV",{class:!0});var Td=a(Ot);_(Cs.$$.fragment,Td),Af=d(Td),ne=s(Td,"DIV",{class:!0});var ot=a(ne);_(bs.$$.fragment,ot),Nf=d(ot),St=s(ot,"P",{});var ar=a(St);Vf=i(ar,"The "),Sa=s(ar,"A",{href:!0});var Lv=a(Sa);Of=i(Lv,"TFCLIPVisionModel"),Lv.forEach(o),Sf=i(ar," forward method, overrides the "),Ci=s(ar,"CODE",{});var kv=a(Ci);Wf=i(kv,"__call__"),kv.forEach(o),Bf=i(ar," special method."),ar.forEach(o),Uf=d(ot),_(qo.$$.fragment,ot),Rf=d(ot),bi=s(ot,"P",{});var wv=a(bi);Hf=i(wv,"Examples:"),wv.forEach(o),Kf=d(ot),_(ys.$$.fragment,ot),ot.forEach(o),Td.forEach(o),zl=d(t),Wt=s(t,"H2",{class:!0});var Cd=a(Wt);Do=s(Cd,"A",{id:!0,class:!0,href:!0});var $v=a(Do);yi=s($v,"SPAN",{});var xv=a(yi);_(Ls.$$.fragment,xv),xv.forEach(o),$v.forEach(o),Gf=d(Cd),Li=s(Cd,"SPAN",{});var Ev=a(Li);Jf=i(Ev,"FlaxCLIPModel"),Ev.forEach(o),Cd.forEach(o),jl=d(t),z=s(t,"DIV",{class:!0});var V=a(z);_(ks.$$.fragment,V),Xf=d(V),ws=s(V,"P",{});var bd=a(ws);Zf=i(bd,"This model inherits from "),Wa=s(bd,"A",{href:!0});var zv=a(Wa);Qf=i(zv,"FlaxPreTrainedModel"),zv.forEach(o),Yf=i(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bd.forEach(o),eu=d(V),$s=s(V,"P",{});var yd=a($s);tu=i(yd,"This model is also a Flax Linen "),xs=s(yd,"A",{href:!0,rel:!0});var jv=a(xs);ou=i(jv,"flax.linen.Module"),jv.forEach(o),nu=i(yd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yd.forEach(o),su=d(V),ki=s(V,"P",{});var Mv=a(ki);au=i(Mv,"Finally, this model supports inherent JAX features such as:"),Mv.forEach(o),ru=d(V),Ee=s(V,"UL",{});var Ro=a(Ee);wi=s(Ro,"LI",{});var Fv=a(wi);Es=s(Fv,"A",{href:!0,rel:!0});var qv=a(Es);iu=i(qv,"Just-In-Time (JIT) compilation"),qv.forEach(o),Fv.forEach(o),lu=d(Ro),$i=s(Ro,"LI",{});var Dv=a($i);zs=s(Dv,"A",{href:!0,rel:!0});var Av=a(zs);du=i(Av,"Automatic Differentiation"),Av.forEach(o),Dv.forEach(o),cu=d(Ro),xi=s(Ro,"LI",{});var Nv=a(xi);js=s(Nv,"A",{href:!0,rel:!0});var Vv=a(js);pu=i(Vv,"Vectorization"),Vv.forEach(o),Nv.forEach(o),hu=d(Ro),Ei=s(Ro,"LI",{});var Ov=a(Ei);Ms=s(Ov,"A",{href:!0,rel:!0});var Sv=a(Ms);mu=i(Sv,"Parallelization"),Sv.forEach(o),Ov.forEach(o),Ro.forEach(o),fu=d(V),se=s(V,"DIV",{class:!0});var nt=a(se);_(Fs.$$.fragment,nt),uu=d(nt),Bt=s(nt,"P",{});var rr=a(Bt);gu=i(rr,"The "),zi=s(rr,"CODE",{});var Wv=a(zi);_u=i(Wv,"FlaxCLIPPreTrainedModel"),Wv.forEach(o),vu=i(rr,"forward method, overrides the "),ji=s(rr,"CODE",{});var Bv=a(ji);Pu=i(Bv,"__call__"),Bv.forEach(o),Iu=i(rr," special method."),rr.forEach(o),Tu=d(nt),_(Ao.$$.fragment,nt),Cu=d(nt),Mi=s(nt,"P",{});var Uv=a(Mi);bu=i(Uv,"Example:"),Uv.forEach(o),yu=d(nt),_(qs.$$.fragment,nt),nt.forEach(o),Lu=d(V),Ve=s(V,"DIV",{class:!0});var ir=a(Ve);_(Ds.$$.fragment,ir),ku=d(ir),Fi=s(ir,"P",{});var Rv=a(Fi);wu=i(Rv,"Examples:"),Rv.forEach(o),$u=d(ir),_(As.$$.fragment,ir),ir.forEach(o),xu=d(V),Oe=s(V,"DIV",{class:!0});var lr=a(Oe);_(Ns.$$.fragment,lr),Eu=d(lr),qi=s(lr,"P",{});var Hv=a(qi);zu=i(Hv,"Examples:"),Hv.forEach(o),ju=d(lr),_(Vs.$$.fragment,lr),lr.forEach(o),V.forEach(o),Ml=d(t),Ut=s(t,"H2",{class:!0});var Ld=a(Ut);No=s(Ld,"A",{id:!0,class:!0,href:!0});var Kv=a(No);Di=s(Kv,"SPAN",{});var Gv=a(Di);_(Os.$$.fragment,Gv),Gv.forEach(o),Kv.forEach(o),Mu=d(Ld),Ai=s(Ld,"SPAN",{});var Jv=a(Ai);Fu=i(Jv,"FlaxCLIPTextModel"),Jv.forEach(o),Ld.forEach(o),Fl=d(t),Rt=s(t,"DIV",{class:!0});var kd=a(Rt);_(Ss.$$.fragment,kd),qu=d(kd),ae=s(kd,"DIV",{class:!0});var st=a(ae);_(Ws.$$.fragment,st),Du=d(st),Ht=s(st,"P",{});var dr=a(Ht);Au=i(dr,"The "),Ni=s(dr,"CODE",{});var Xv=a(Ni);Nu=i(Xv,"FlaxCLIPTextPreTrainedModel"),Xv.forEach(o),Vu=i(dr,"forward method, overrides the "),Vi=s(dr,"CODE",{});var Zv=a(Vi);Ou=i(Zv,"__call__"),Zv.forEach(o),Su=i(dr," special method."),dr.forEach(o),Wu=d(st),_(Vo.$$.fragment,st),Bu=d(st),Oi=s(st,"P",{});var Qv=a(Oi);Uu=i(Qv,"Example:"),Qv.forEach(o),Ru=d(st),_(Bs.$$.fragment,st),st.forEach(o),kd.forEach(o),ql=d(t),Kt=s(t,"H2",{class:!0});var wd=a(Kt);Oo=s(wd,"A",{id:!0,class:!0,href:!0});var Yv=a(Oo);Si=s(Yv,"SPAN",{});var eP=a(Si);_(Us.$$.fragment,eP),eP.forEach(o),Yv.forEach(o),Hu=d(wd),Wi=s(wd,"SPAN",{});var tP=a(Wi);Ku=i(tP,"FlaxCLIPVisionModel"),tP.forEach(o),wd.forEach(o),Dl=d(t),Gt=s(t,"DIV",{class:!0});var $d=a(Gt);_(Rs.$$.fragment,$d),Gu=d($d),re=s($d,"DIV",{class:!0});var at=a(re);_(Hs.$$.fragment,at),Ju=d(at),Jt=s(at,"P",{});var cr=a(Jt);Xu=i(cr,"The "),Bi=s(cr,"CODE",{});var oP=a(Bi);Zu=i(oP,"FlaxCLIPVisionPreTrainedModel"),oP.forEach(o),Qu=i(cr,"forward method, overrides the "),Ui=s(cr,"CODE",{});var nP=a(Ui);Yu=i(nP,"__call__"),nP.forEach(o),eg=i(cr," special method."),cr.forEach(o),tg=d(at),_(So.$$.fragment,at),og=d(at),Ri=s(at,"P",{});var sP=a(Ri);ng=i(sP,"Example:"),sP.forEach(o),sg=d(at),_(Ks.$$.fragment,at),at.forEach(o),$d.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(yP)),c(b,"id","clip"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#clip"),c(u,"class","relative group"),c(ue,"id","overview"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#overview"),c(j,"class","relative group"),c(Le,"href","https://arxiv.org/abs/2103.00020"),c(Le,"rel","nofollow"),c(ge,"id","usage"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#usage"),c(A,"class","relative group"),c(M,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(lt,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTokenizer"),c(ve,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPProcessor"),c(Pe,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Ae,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTokenizer"),c(ra,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPProcessor"),c(ia,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPModel"),c(tn,"href","https://huggingface.co/valhalla"),c(tn,"rel","nofollow"),c(on,"href","https://github.com/openai/CLIP"),c(on,"rel","nofollow"),c(oo,"id","transformers.CLIPConfig"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.CLIPConfig"),c(dt,"class","relative group"),c(la,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPConfig"),c(da,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPModel"),c(ca,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(pa,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(ha,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPConfig"),c(so,"class","docstring"),c(fe,"class","docstring"),c(ao,"id","transformers.CLIPTextConfig"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.CLIPTextConfig"),c(pt,"class","relative group"),c(ma,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPModel"),c(cn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(cn,"rel","nofollow"),c(fa,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(ua,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(O,"class","docstring"),c(ro,"id","transformers.CLIPVisionConfig"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.CLIPVisionConfig"),c(ft,"class","relative group"),c(ga,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPModel"),c(fn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(fn,"rel","nofollow"),c(_a,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(va,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(S,"class","docstring"),c(io,"id","transformers.CLIPTokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.CLIPTokenizer"),c(_t,"class","relative group"),c(Pa,"href","/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Ie,"class","docstring"),c(lo,"class","docstring"),c(co,"class","docstring"),c(Ta,"class","docstring"),c(F,"class","docstring"),c(po,"id","transformers.CLIPTokenizerFast"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.CLIPTokenizerFast"),c(vt,"class","relative group"),c(Ca,"href","/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Te,"class","docstring"),c(ho,"class","docstring"),c(W,"class","docstring"),c(mo,"id","transformers.CLIPFeatureExtractor"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.CLIPFeatureExtractor"),c(Pt,"class","relative group"),c(ya,"href","/docs/transformers/v4.17.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(fo,"class","docstring"),c(uo,"class","docstring"),c(B,"class","docstring"),c(go,"id","transformers.CLIPProcessor"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.CLIPProcessor"),c(Tt,"class","relative group"),c(La,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPProcessor"),c(ka,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(wa,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTokenizer"),c($a,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPProcessor.decode"),c(xa,"href","/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(_o,"class","docstring"),c(Ea,"href","/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(vo,"class","docstring"),c(U,"class","docstring"),c(Po,"id","transformers.CLIPModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.CLIPModel"),c(Ct,"class","relative group"),c(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rn,"rel","nofollow"),c(za,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPModel"),c(G,"class","docstring"),c(ja,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPModel"),c(J,"class","docstring"),c(Ma,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPModel"),c(X,"class","docstring"),c(R,"class","docstring"),c(bo,"id","transformers.CLIPTextModel"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.CLIPTextModel"),c(kt,"class","relative group"),c(Fa,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTextModel"),c(Z,"class","docstring"),c(wt,"class","docstring"),c(Lo,"id","transformers.CLIPVisionModel"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.CLIPVisionModel"),c(xt,"class","relative group"),c(qa,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPVisionModel"),c(Q,"class","docstring"),c(Et,"class","docstring"),c(wo,"id","transformers.TFCLIPModel"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFCLIPModel"),c(jt,"class","relative group"),c(Da,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(cs,"rel","nofollow"),c(Aa,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.TFCLIPModel"),c(Y,"class","docstring"),c(Na,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.TFCLIPModel"),c(ee,"class","docstring"),c(Va,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.TFCLIPModel"),c(te,"class","docstring"),c(q,"class","docstring"),c(jo,"id","transformers.TFCLIPTextModel"),c(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jo,"href","#transformers.TFCLIPTextModel"),c(Dt,"class","relative group"),c(Oa,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.TFCLIPTextModel"),c(oe,"class","docstring"),c(At,"class","docstring"),c(Fo,"id","transformers.TFCLIPVisionModel"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFCLIPVisionModel"),c(Vt,"class","relative group"),c(Sa,"href","/docs/transformers/v4.17.0/en/model_doc/clip#transformers.TFCLIPVisionModel"),c(ne,"class","docstring"),c(Ot,"class","docstring"),c(Do,"id","transformers.FlaxCLIPModel"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.FlaxCLIPModel"),c(Wt,"class","relative group"),c(Wa,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xs,"rel","nofollow"),c(Es,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Es,"rel","nofollow"),c(zs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(zs,"rel","nofollow"),c(js,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(js,"rel","nofollow"),c(Ms,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ms,"rel","nofollow"),c(se,"class","docstring"),c(Ve,"class","docstring"),c(Oe,"class","docstring"),c(z,"class","docstring"),c(No,"id","transformers.FlaxCLIPTextModel"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.FlaxCLIPTextModel"),c(Ut,"class","relative group"),c(ae,"class","docstring"),c(Rt,"class","docstring"),c(Oo,"id","transformers.FlaxCLIPVisionModel"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.FlaxCLIPVisionModel"),c(Kt,"class","relative group"),c(re,"class","docstring"),c(Gt,"class","docstring")},m(t,h){e(document.head,p),m(t,L,h),m(t,u,h),e(u,b),e(b,y),v(C,y,null),e(u,f),e(u,k),e(k,Ho),m(t,rt,h),m(t,j,h),e(j,ue),e(ue,Ce),v(be,Ce,null),e(j,Ko),e(j,ye),e(ye,Go),m(t,Xt,h),m(t,pe,h),e(pe,je),e(pe,Le),e(Le,Zt),e(pe,H),m(t,he,h),m(t,Me,h),e(Me,it),m(t,Qt,h),m(t,Fe,h),e(Fe,ke),e(ke,Jo),m(t,Yt,h),m(t,A,h),e(A,ge),e(ge,we),v($e,we,null),e(A,Xo),e(A,xe),e(xe,Zo),m(t,eo,h),m(t,me,h),e(me,Qo),m(t,qe,h),m(t,_e,h),e(_e,$),e(_e,M),e(M,to),e(_e,Qs),m(t,Yo,h),m(t,E,h),e(E,Ys),e(E,lt),e(lt,ea),e(E,De),e(E,ve),e(ve,ta),e(E,oa),e(E,Pe),e(Pe,na),e(E,sa),e(E,Ae),e(Ae,aa),e(E,xd),e(E,ra),e(ra,Ed),e(E,zd),e(E,ia),e(ia,jd),e(E,Md),m(t,nl,h),v(en,t,h),m(t,sl,h),m(t,Ne,h),e(Ne,Fd),e(Ne,tn),e(tn,qd),e(Ne,Dd),e(Ne,on),e(on,Ad),e(Ne,Nd),m(t,al,h),m(t,dt,h),e(dt,oo),e(oo,pr),v(nn,pr,null),e(dt,Vd),e(dt,hr),e(hr,Od),m(t,rl,h),m(t,fe,h),v(sn,fe,null),e(fe,Sd),e(fe,no),e(no,la),e(la,Wd),e(no,Bd),e(no,da),e(da,Ud),e(no,Rd),e(fe,Hd),e(fe,ct),e(ct,Kd),e(ct,ca),e(ca,Gd),e(ct,Jd),e(ct,pa),e(pa,Xd),e(ct,Zd),e(fe,Qd),e(fe,so),v(an,so,null),e(so,Yd),e(so,rn),e(rn,ec),e(rn,ha),e(ha,tc),e(rn,oc),m(t,il,h),m(t,pt,h),e(pt,ao),e(ao,mr),v(ln,mr,null),e(pt,nc),e(pt,fr),e(fr,sc),m(t,ll,h),m(t,O,h),v(dn,O,null),e(O,ac),e(O,ht),e(ht,rc),e(ht,ma),e(ma,ic),e(ht,lc),e(ht,cn),e(cn,dc),e(ht,cc),e(O,pc),e(O,mt),e(mt,hc),e(mt,fa),e(fa,mc),e(mt,fc),e(mt,ua),e(ua,uc),e(mt,gc),e(O,_c),e(O,ur),e(ur,vc),e(O,Pc),v(pn,O,null),m(t,dl,h),m(t,ft,h),e(ft,ro),e(ro,gr),v(hn,gr,null),e(ft,Ic),e(ft,_r),e(_r,Tc),m(t,cl,h),m(t,S,h),v(mn,S,null),e(S,Cc),e(S,ut),e(ut,bc),e(ut,ga),e(ga,yc),e(ut,Lc),e(ut,fn),e(fn,kc),e(ut,wc),e(S,$c),e(S,gt),e(gt,xc),e(gt,_a),e(_a,Ec),e(gt,zc),e(gt,va),e(va,jc),e(gt,Mc),e(S,Fc),e(S,vr),e(vr,qc),e(S,Dc),v(un,S,null),m(t,pl,h),m(t,_t,h),e(_t,io),e(io,Pr),v(gn,Pr,null),e(_t,Ac),e(_t,Ir),e(Ir,Nc),m(t,hl,h),m(t,F,h),v(_n,F,null),e(F,Vc),e(F,Tr),e(Tr,Oc),e(F,Sc),e(F,vn),e(vn,Wc),e(vn,Pa),e(Pa,Bc),e(vn,Uc),e(F,Rc),e(F,Ie),v(Pn,Ie,null),e(Ie,Hc),e(Ie,Cr),e(Cr,Kc),e(Ie,Gc),e(Ie,br),e(br,Ia),e(Ia,Jc),e(Ia,yr),e(yr,Xc),e(Ie,Zc),e(Ie,Lr),e(Lr,Qc),e(F,Yc),e(F,lo),v(In,lo,null),e(lo,ep),e(lo,Tn),e(Tn,tp),e(Tn,kr),e(kr,op),e(Tn,np),e(F,sp),e(F,co),v(Cn,co,null),e(co,ap),e(co,wr),e(wr,rp),e(F,ip),e(F,Ta),v(bn,Ta,null),m(t,ml,h),m(t,vt,h),e(vt,po),e(po,$r),v(yn,$r,null),e(vt,lp),e(vt,xr),e(xr,dp),m(t,fl,h),m(t,W,h),v(Ln,W,null),e(W,cp),e(W,kn),e(kn,pp),e(kn,Er),e(Er,hp),e(kn,mp),e(W,fp),e(W,wn),e(wn,up),e(wn,Ca),e(Ca,gp),e(wn,_p),e(W,vp),e(W,Te),v($n,Te,null),e(Te,Pp),e(Te,zr),e(zr,Ip),e(Te,Tp),e(Te,jr),e(jr,ba),e(ba,Cp),e(ba,Mr),e(Mr,bp),e(Te,yp),e(Te,Fr),e(Fr,Lp),e(W,kp),e(W,ho),v(xn,ho,null),e(ho,wp),e(ho,qr),e(qr,$p),m(t,ul,h),m(t,Pt,h),e(Pt,mo),e(mo,Dr),v(En,Dr,null),e(Pt,xp),e(Pt,Ar),e(Ar,Ep),m(t,gl,h),m(t,B,h),v(zn,B,null),e(B,zp),e(B,Nr),e(Nr,jp),e(B,Mp),e(B,jn),e(jn,Fp),e(jn,ya),e(ya,qp),e(jn,Dp),e(B,Ap),e(B,fo),v(Mn,fo,null),e(fo,Np),e(fo,Fn),e(Fn,Vp),e(Fn,Vr),e(Vr,Op),e(Fn,Sp),e(B,Wp),e(B,uo),v(qn,uo,null),e(uo,Bp),e(uo,It),e(It,Up),e(It,Or),e(Or,Rp),e(It,Hp),e(It,Sr),e(Sr,Kp),e(It,Gp),m(t,_l,h),m(t,Tt,h),e(Tt,go),e(go,Wr),v(Dn,Wr,null),e(Tt,Jp),e(Tt,Br),e(Br,Xp),m(t,vl,h),m(t,U,h),v(An,U,null),e(U,Zp),e(U,Ur),e(Ur,Qp),e(U,Yp),e(U,K),e(K,La),e(La,eh),e(K,th),e(K,ka),e(ka,oh),e(K,nh),e(K,wa),e(wa,sh),e(K,ah),e(K,Rr),e(Rr,rh),e(K,ih),e(K,$a),e($a,lh),e(K,dh),e(U,ch),e(U,_o),v(Nn,_o,null),e(_o,ph),e(_o,Vn),e(Vn,hh),e(Vn,xa),e(xa,mh),e(Vn,fh),e(U,uh),e(U,vo),v(On,vo,null),e(vo,gh),e(vo,Sn),e(Sn,_h),e(Sn,Ea),e(Ea,vh),e(Sn,Ph),m(t,Pl,h),m(t,Ct,h),e(Ct,Po),e(Po,Hr),v(Wn,Hr,null),e(Ct,Ih),e(Ct,Kr),e(Kr,Th),m(t,Il,h),m(t,R,h),v(Bn,R,null),e(R,Ch),e(R,Un),e(Un,bh),e(Un,Rn),e(Rn,yh),e(Un,Lh),e(R,kh),e(R,G),v(Hn,G,null),e(G,wh),e(G,bt),e(bt,$h),e(bt,za),e(za,xh),e(bt,Eh),e(bt,Gr),e(Gr,zh),e(bt,jh),e(G,Mh),v(Io,G,null),e(G,Fh),e(G,Jr),e(Jr,qh),e(G,Dh),v(Kn,G,null),e(R,Ah),e(R,J),v(Gn,J,null),e(J,Nh),e(J,yt),e(yt,Vh),e(yt,ja),e(ja,Oh),e(yt,Sh),e(yt,Xr),e(Xr,Wh),e(yt,Bh),e(J,Uh),v(To,J,null),e(J,Rh),e(J,Zr),e(Zr,Hh),e(J,Kh),v(Jn,J,null),e(R,Gh),e(R,X),v(Xn,X,null),e(X,Jh),e(X,Lt),e(Lt,Xh),e(Lt,Ma),e(Ma,Zh),e(Lt,Qh),e(Lt,Qr),e(Qr,Yh),e(Lt,em),e(X,tm),v(Co,X,null),e(X,om),e(X,Yr),e(Yr,nm),e(X,sm),v(Zn,X,null),m(t,Tl,h),m(t,kt,h),e(kt,bo),e(bo,ei),v(Qn,ei,null),e(kt,am),e(kt,ti),e(ti,rm),m(t,Cl,h),m(t,wt,h),v(Yn,wt,null),e(wt,im),e(wt,Z),v(es,Z,null),e(Z,lm),e(Z,$t),e($t,dm),e($t,Fa),e(Fa,cm),e($t,pm),e($t,oi),e(oi,hm),e($t,mm),e(Z,fm),v(yo,Z,null),e(Z,um),e(Z,ni),e(ni,gm),e(Z,_m),v(ts,Z,null),m(t,bl,h),m(t,xt,h),e(xt,Lo),e(Lo,si),v(os,si,null),e(xt,vm),e(xt,ai),e(ai,Pm),m(t,yl,h),m(t,Et,h),v(ns,Et,null),e(Et,Im),e(Et,Q),v(ss,Q,null),e(Q,Tm),e(Q,zt),e(zt,Cm),e(zt,qa),e(qa,bm),e(zt,ym),e(zt,ri),e(ri,Lm),e(zt,km),e(Q,wm),v(ko,Q,null),e(Q,$m),e(Q,ii),e(ii,xm),e(Q,Em),v(as,Q,null),m(t,Ll,h),m(t,jt,h),e(jt,wo),e(wo,li),v(rs,li,null),e(jt,zm),e(jt,di),e(di,jm),m(t,kl,h),m(t,q,h),v(is,q,null),e(q,Mm),e(q,ls),e(ls,Fm),e(ls,Da),e(Da,qm),e(ls,Dm),e(q,Am),e(q,ds),e(ds,Nm),e(ds,cs),e(cs,Vm),e(ds,Om),e(q,Sm),v($o,q,null),e(q,Wm),e(q,Y),v(ps,Y,null),e(Y,Bm),e(Y,Mt),e(Mt,Um),e(Mt,Aa),e(Aa,Rm),e(Mt,Hm),e(Mt,ci),e(ci,Km),e(Mt,Gm),e(Y,Jm),v(xo,Y,null),e(Y,Xm),e(Y,pi),e(pi,Zm),e(Y,Qm),v(hs,Y,null),e(q,Ym),e(q,ee),v(ms,ee,null),e(ee,ef),e(ee,Ft),e(Ft,tf),e(Ft,Na),e(Na,of),e(Ft,nf),e(Ft,hi),e(hi,sf),e(Ft,af),e(ee,rf),v(Eo,ee,null),e(ee,lf),e(ee,mi),e(mi,df),e(ee,cf),v(fs,ee,null),e(q,pf),e(q,te),v(us,te,null),e(te,hf),e(te,qt),e(qt,mf),e(qt,Va),e(Va,ff),e(qt,uf),e(qt,fi),e(fi,gf),e(qt,_f),e(te,vf),v(zo,te,null),e(te,Pf),e(te,ui),e(ui,If),e(te,Tf),v(gs,te,null),m(t,wl,h),m(t,Dt,h),e(Dt,jo),e(jo,gi),v(_s,gi,null),e(Dt,Cf),e(Dt,_i),e(_i,bf),m(t,$l,h),m(t,At,h),v(vs,At,null),e(At,yf),e(At,oe),v(Ps,oe,null),e(oe,Lf),e(oe,Nt),e(Nt,kf),e(Nt,Oa),e(Oa,wf),e(Nt,$f),e(Nt,vi),e(vi,xf),e(Nt,Ef),e(oe,zf),v(Mo,oe,null),e(oe,jf),e(oe,Pi),e(Pi,Mf),e(oe,Ff),v(Is,oe,null),m(t,xl,h),m(t,Vt,h),e(Vt,Fo),e(Fo,Ii),v(Ts,Ii,null),e(Vt,qf),e(Vt,Ti),e(Ti,Df),m(t,El,h),m(t,Ot,h),v(Cs,Ot,null),e(Ot,Af),e(Ot,ne),v(bs,ne,null),e(ne,Nf),e(ne,St),e(St,Vf),e(St,Sa),e(Sa,Of),e(St,Sf),e(St,Ci),e(Ci,Wf),e(St,Bf),e(ne,Uf),v(qo,ne,null),e(ne,Rf),e(ne,bi),e(bi,Hf),e(ne,Kf),v(ys,ne,null),m(t,zl,h),m(t,Wt,h),e(Wt,Do),e(Do,yi),v(Ls,yi,null),e(Wt,Gf),e(Wt,Li),e(Li,Jf),m(t,jl,h),m(t,z,h),v(ks,z,null),e(z,Xf),e(z,ws),e(ws,Zf),e(ws,Wa),e(Wa,Qf),e(ws,Yf),e(z,eu),e(z,$s),e($s,tu),e($s,xs),e(xs,ou),e($s,nu),e(z,su),e(z,ki),e(ki,au),e(z,ru),e(z,Ee),e(Ee,wi),e(wi,Es),e(Es,iu),e(Ee,lu),e(Ee,$i),e($i,zs),e(zs,du),e(Ee,cu),e(Ee,xi),e(xi,js),e(js,pu),e(Ee,hu),e(Ee,Ei),e(Ei,Ms),e(Ms,mu),e(z,fu),e(z,se),v(Fs,se,null),e(se,uu),e(se,Bt),e(Bt,gu),e(Bt,zi),e(zi,_u),e(Bt,vu),e(Bt,ji),e(ji,Pu),e(Bt,Iu),e(se,Tu),v(Ao,se,null),e(se,Cu),e(se,Mi),e(Mi,bu),e(se,yu),v(qs,se,null),e(z,Lu),e(z,Ve),v(Ds,Ve,null),e(Ve,ku),e(Ve,Fi),e(Fi,wu),e(Ve,$u),v(As,Ve,null),e(z,xu),e(z,Oe),v(Ns,Oe,null),e(Oe,Eu),e(Oe,qi),e(qi,zu),e(Oe,ju),v(Vs,Oe,null),m(t,Ml,h),m(t,Ut,h),e(Ut,No),e(No,Di),v(Os,Di,null),e(Ut,Mu),e(Ut,Ai),e(Ai,Fu),m(t,Fl,h),m(t,Rt,h),v(Ss,Rt,null),e(Rt,qu),e(Rt,ae),v(Ws,ae,null),e(ae,Du),e(ae,Ht),e(Ht,Au),e(Ht,Ni),e(Ni,Nu),e(Ht,Vu),e(Ht,Vi),e(Vi,Ou),e(Ht,Su),e(ae,Wu),v(Vo,ae,null),e(ae,Bu),e(ae,Oi),e(Oi,Uu),e(ae,Ru),v(Bs,ae,null),m(t,ql,h),m(t,Kt,h),e(Kt,Oo),e(Oo,Si),v(Us,Si,null),e(Kt,Hu),e(Kt,Wi),e(Wi,Ku),m(t,Dl,h),m(t,Gt,h),v(Rs,Gt,null),e(Gt,Gu),e(Gt,re),v(Hs,re,null),e(re,Ju),e(re,Jt),e(Jt,Xu),e(Jt,Bi),e(Bi,Zu),e(Jt,Qu),e(Jt,Ui),e(Ui,Yu),e(Jt,eg),e(re,tg),v(So,re,null),e(re,og),e(re,Ri),e(Ri,ng),e(re,sg),v(Ks,re,null),Al=!0},p(t,[h]){const Gs={};h&2&&(Gs.$$scope={dirty:h,ctx:t}),Io.$set(Gs);const Hi={};h&2&&(Hi.$$scope={dirty:h,ctx:t}),To.$set(Hi);const Ki={};h&2&&(Ki.$$scope={dirty:h,ctx:t}),Co.$set(Ki);const Gi={};h&2&&(Gi.$$scope={dirty:h,ctx:t}),yo.$set(Gi);const Js={};h&2&&(Js.$$scope={dirty:h,ctx:t}),ko.$set(Js);const Ji={};h&2&&(Ji.$$scope={dirty:h,ctx:t}),$o.$set(Ji);const Xi={};h&2&&(Xi.$$scope={dirty:h,ctx:t}),xo.$set(Xi);const Zi={};h&2&&(Zi.$$scope={dirty:h,ctx:t}),Eo.$set(Zi);const Xs={};h&2&&(Xs.$$scope={dirty:h,ctx:t}),zo.$set(Xs);const Qi={};h&2&&(Qi.$$scope={dirty:h,ctx:t}),Mo.$set(Qi);const Yi={};h&2&&(Yi.$$scope={dirty:h,ctx:t}),qo.$set(Yi);const el={};h&2&&(el.$$scope={dirty:h,ctx:t}),Ao.$set(el);const tl={};h&2&&(tl.$$scope={dirty:h,ctx:t}),Vo.$set(tl);const Zs={};h&2&&(Zs.$$scope={dirty:h,ctx:t}),So.$set(Zs)},i(t){Al||(P(C.$$.fragment,t),P(be.$$.fragment,t),P($e.$$.fragment,t),P(en.$$.fragment,t),P(nn.$$.fragment,t),P(sn.$$.fragment,t),P(an.$$.fragment,t),P(ln.$$.fragment,t),P(dn.$$.fragment,t),P(pn.$$.fragment,t),P(hn.$$.fragment,t),P(mn.$$.fragment,t),P(un.$$.fragment,t),P(gn.$$.fragment,t),P(_n.$$.fragment,t),P(Pn.$$.fragment,t),P(In.$$.fragment,t),P(Cn.$$.fragment,t),P(bn.$$.fragment,t),P(yn.$$.fragment,t),P(Ln.$$.fragment,t),P($n.$$.fragment,t),P(xn.$$.fragment,t),P(En.$$.fragment,t),P(zn.$$.fragment,t),P(Mn.$$.fragment,t),P(qn.$$.fragment,t),P(Dn.$$.fragment,t),P(An.$$.fragment,t),P(Nn.$$.fragment,t),P(On.$$.fragment,t),P(Wn.$$.fragment,t),P(Bn.$$.fragment,t),P(Hn.$$.fragment,t),P(Io.$$.fragment,t),P(Kn.$$.fragment,t),P(Gn.$$.fragment,t),P(To.$$.fragment,t),P(Jn.$$.fragment,t),P(Xn.$$.fragment,t),P(Co.$$.fragment,t),P(Zn.$$.fragment,t),P(Qn.$$.fragment,t),P(Yn.$$.fragment,t),P(es.$$.fragment,t),P(yo.$$.fragment,t),P(ts.$$.fragment,t),P(os.$$.fragment,t),P(ns.$$.fragment,t),P(ss.$$.fragment,t),P(ko.$$.fragment,t),P(as.$$.fragment,t),P(rs.$$.fragment,t),P(is.$$.fragment,t),P($o.$$.fragment,t),P(ps.$$.fragment,t),P(xo.$$.fragment,t),P(hs.$$.fragment,t),P(ms.$$.fragment,t),P(Eo.$$.fragment,t),P(fs.$$.fragment,t),P(us.$$.fragment,t),P(zo.$$.fragment,t),P(gs.$$.fragment,t),P(_s.$$.fragment,t),P(vs.$$.fragment,t),P(Ps.$$.fragment,t),P(Mo.$$.fragment,t),P(Is.$$.fragment,t),P(Ts.$$.fragment,t),P(Cs.$$.fragment,t),P(bs.$$.fragment,t),P(qo.$$.fragment,t),P(ys.$$.fragment,t),P(Ls.$$.fragment,t),P(ks.$$.fragment,t),P(Fs.$$.fragment,t),P(Ao.$$.fragment,t),P(qs.$$.fragment,t),P(Ds.$$.fragment,t),P(As.$$.fragment,t),P(Ns.$$.fragment,t),P(Vs.$$.fragment,t),P(Os.$$.fragment,t),P(Ss.$$.fragment,t),P(Ws.$$.fragment,t),P(Vo.$$.fragment,t),P(Bs.$$.fragment,t),P(Us.$$.fragment,t),P(Rs.$$.fragment,t),P(Hs.$$.fragment,t),P(So.$$.fragment,t),P(Ks.$$.fragment,t),Al=!0)},o(t){I(C.$$.fragment,t),I(be.$$.fragment,t),I($e.$$.fragment,t),I(en.$$.fragment,t),I(nn.$$.fragment,t),I(sn.$$.fragment,t),I(an.$$.fragment,t),I(ln.$$.fragment,t),I(dn.$$.fragment,t),I(pn.$$.fragment,t),I(hn.$$.fragment,t),I(mn.$$.fragment,t),I(un.$$.fragment,t),I(gn.$$.fragment,t),I(_n.$$.fragment,t),I(Pn.$$.fragment,t),I(In.$$.fragment,t),I(Cn.$$.fragment,t),I(bn.$$.fragment,t),I(yn.$$.fragment,t),I(Ln.$$.fragment,t),I($n.$$.fragment,t),I(xn.$$.fragment,t),I(En.$$.fragment,t),I(zn.$$.fragment,t),I(Mn.$$.fragment,t),I(qn.$$.fragment,t),I(Dn.$$.fragment,t),I(An.$$.fragment,t),I(Nn.$$.fragment,t),I(On.$$.fragment,t),I(Wn.$$.fragment,t),I(Bn.$$.fragment,t),I(Hn.$$.fragment,t),I(Io.$$.fragment,t),I(Kn.$$.fragment,t),I(Gn.$$.fragment,t),I(To.$$.fragment,t),I(Jn.$$.fragment,t),I(Xn.$$.fragment,t),I(Co.$$.fragment,t),I(Zn.$$.fragment,t),I(Qn.$$.fragment,t),I(Yn.$$.fragment,t),I(es.$$.fragment,t),I(yo.$$.fragment,t),I(ts.$$.fragment,t),I(os.$$.fragment,t),I(ns.$$.fragment,t),I(ss.$$.fragment,t),I(ko.$$.fragment,t),I(as.$$.fragment,t),I(rs.$$.fragment,t),I(is.$$.fragment,t),I($o.$$.fragment,t),I(ps.$$.fragment,t),I(xo.$$.fragment,t),I(hs.$$.fragment,t),I(ms.$$.fragment,t),I(Eo.$$.fragment,t),I(fs.$$.fragment,t),I(us.$$.fragment,t),I(zo.$$.fragment,t),I(gs.$$.fragment,t),I(_s.$$.fragment,t),I(vs.$$.fragment,t),I(Ps.$$.fragment,t),I(Mo.$$.fragment,t),I(Is.$$.fragment,t),I(Ts.$$.fragment,t),I(Cs.$$.fragment,t),I(bs.$$.fragment,t),I(qo.$$.fragment,t),I(ys.$$.fragment,t),I(Ls.$$.fragment,t),I(ks.$$.fragment,t),I(Fs.$$.fragment,t),I(Ao.$$.fragment,t),I(qs.$$.fragment,t),I(Ds.$$.fragment,t),I(As.$$.fragment,t),I(Ns.$$.fragment,t),I(Vs.$$.fragment,t),I(Os.$$.fragment,t),I(Ss.$$.fragment,t),I(Ws.$$.fragment,t),I(Vo.$$.fragment,t),I(Bs.$$.fragment,t),I(Us.$$.fragment,t),I(Rs.$$.fragment,t),I(Hs.$$.fragment,t),I(So.$$.fragment,t),I(Ks.$$.fragment,t),Al=!1},d(t){o(p),t&&o(L),t&&o(u),T(C),t&&o(rt),t&&o(j),T(be),t&&o(Xt),t&&o(pe),t&&o(he),t&&o(Me),t&&o(Qt),t&&o(Fe),t&&o(Yt),t&&o(A),T($e),t&&o(eo),t&&o(me),t&&o(qe),t&&o(_e),t&&o(Yo),t&&o(E),t&&o(nl),T(en,t),t&&o(sl),t&&o(Ne),t&&o(al),t&&o(dt),T(nn),t&&o(rl),t&&o(fe),T(sn),T(an),t&&o(il),t&&o(pt),T(ln),t&&o(ll),t&&o(O),T(dn),T(pn),t&&o(dl),t&&o(ft),T(hn),t&&o(cl),t&&o(S),T(mn),T(un),t&&o(pl),t&&o(_t),T(gn),t&&o(hl),t&&o(F),T(_n),T(Pn),T(In),T(Cn),T(bn),t&&o(ml),t&&o(vt),T(yn),t&&o(fl),t&&o(W),T(Ln),T($n),T(xn),t&&o(ul),t&&o(Pt),T(En),t&&o(gl),t&&o(B),T(zn),T(Mn),T(qn),t&&o(_l),t&&o(Tt),T(Dn),t&&o(vl),t&&o(U),T(An),T(Nn),T(On),t&&o(Pl),t&&o(Ct),T(Wn),t&&o(Il),t&&o(R),T(Bn),T(Hn),T(Io),T(Kn),T(Gn),T(To),T(Jn),T(Xn),T(Co),T(Zn),t&&o(Tl),t&&o(kt),T(Qn),t&&o(Cl),t&&o(wt),T(Yn),T(es),T(yo),T(ts),t&&o(bl),t&&o(xt),T(os),t&&o(yl),t&&o(Et),T(ns),T(ss),T(ko),T(as),t&&o(Ll),t&&o(jt),T(rs),t&&o(kl),t&&o(q),T(is),T($o),T(ps),T(xo),T(hs),T(ms),T(Eo),T(fs),T(us),T(zo),T(gs),t&&o(wl),t&&o(Dt),T(_s),t&&o($l),t&&o(At),T(vs),T(Ps),T(Mo),T(Is),t&&o(xl),t&&o(Vt),T(Ts),t&&o(El),t&&o(Ot),T(Cs),T(bs),T(qo),T(ys),t&&o(zl),t&&o(Wt),T(Ls),t&&o(jl),t&&o(z),T(ks),T(Fs),T(Ao),T(qs),T(Ds),T(As),T(Ns),T(Vs),t&&o(Ml),t&&o(Ut),T(Os),t&&o(Fl),t&&o(Rt),T(Ss),T(Ws),T(Vo),T(Bs),t&&o(ql),t&&o(Kt),T(Us),t&&o(Dl),t&&o(Gt),T(Rs),T(Hs),T(So),T(Ks)}}}const yP={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function LP(x,p,L){let{fw:u}=p;return x.$$set=b=>{"fw"in b&&L(0,u=b.fw)},[u]}class jP extends aP{constructor(p){super();rP(this,p,LP,bP,iP,{fw:0})}}export{jP as default,yP as metadata};
