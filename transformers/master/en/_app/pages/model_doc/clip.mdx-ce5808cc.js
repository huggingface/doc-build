import{S as Rv,i as Hv,s as Kv,e as s,k as l,w as _,t as r,L as Gv,c as n,d as o,m as d,a,x as v,h as i,b as c,J as e,g as h,y as P,q as T,o as I,B as C}from"../../chunks/vendor-9e2b328e.js";import{T as ce}from"../../chunks/Tip-76f97a76.js";import{D as w}from"../../chunks/Docstring-50fd6873.js";import{C as N}from"../../chunks/CodeBlock-88e23343.js";import{I as D}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function Jv($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function Xv($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function Zv($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function Qv($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function Yv($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function eP($){let p,L,u,b,y,g,f,k,Vo,rt,M,ue,Ce,be,So,ye,Wo,Ut,pe,Me,Le,Rt,H,me,je,it,Ht,Fe,ke,Bo,Kt,A,ge,we,xe,Uo,$e,Ro,Gt,he,Ho,qe,_e;return{c(){p=s("p"),L=r("TF 2.0 models accepts two formats as inputs:"),u=l(),b=s("ul"),y=s("li"),g=r("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),k=s("li"),Vo=r("having all inputs as a list, tuple or dict in the first positional arguments."),rt=l(),M=s("p"),ue=r("This second option is useful when using "),Ce=s("code"),be=r("tf.keras.Model.fit"),So=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=s("code"),Wo=r("model(inputs)"),Ut=r("."),pe=l(),Me=s("p"),Le=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Rt=l(),H=s("ul"),me=s("li"),je=r("a single Tensor with "),it=s("code"),Ht=r("input_ids"),Fe=r(" only and nothing else: "),ke=s("code"),Bo=r("model(input_ids)"),Kt=l(),A=s("li"),ge=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=s("code"),xe=r("model([input_ids, attention_mask])"),Uo=r(" or "),$e=s("code"),Ro=r("model([input_ids, attention_mask, token_type_ids])"),Gt=l(),he=s("li"),Ho=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=s("code"),_e=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=n(x,"P",{});var j=a(p);L=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(o),u=d(x),b=n(x,"UL",{});var Jt=a(b);y=n(Jt,"LI",{});var Rn=a(y);g=i(Rn,"having all inputs as keyword arguments (like PyTorch models), or"),Rn.forEach(o),f=d(Jt),k=n(Jt,"LI",{});var Ko=a(k);Vo=i(Ko,"having all inputs as a list, tuple or dict in the first positional arguments."),Ko.forEach(o),Jt.forEach(o),rt=d(x),M=n(x,"P",{});var E=a(M);ue=i(E,"This second option is useful when using "),Ce=n(E,"CODE",{});var Hn=a(Ce);be=i(Hn,"tf.keras.Model.fit"),Hn.forEach(o),So=i(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=n(E,"CODE",{});var lt=a(ye);Wo=i(lt,"model(inputs)"),lt.forEach(o),Ut=i(E,"."),E.forEach(o),pe=d(x),Me=n(x,"P",{});var Kn=a(Me);Le=i(Kn,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Kn.forEach(o),Rt=d(x),H=n(x,"UL",{});var De=a(H);me=n(De,"LI",{});var ve=a(me);je=i(ve,"a single Tensor with "),it=n(ve,"CODE",{});var Gn=a(it);Ht=i(Gn,"input_ids"),Gn.forEach(o),Fe=i(ve," only and nothing else: "),ke=n(ve,"CODE",{});var Jn=a(ke);Bo=i(Jn,"model(input_ids)"),Jn.forEach(o),ve.forEach(o),Kt=d(De),A=n(De,"LI",{});var Pe=a(A);ge=i(Pe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=n(Pe,"CODE",{});var Xn=a(we);xe=i(Xn,"model([input_ids, attention_mask])"),Xn.forEach(o),Uo=i(Pe," or "),$e=n(Pe,"CODE",{});var Zn=a($e);Ro=i(Zn,"model([input_ids, attention_mask, token_type_ids])"),Zn.forEach(o),Pe.forEach(o),Gt=d(De),he=n(De,"LI",{});var Ae=a(he);Ho=i(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),qe=n(Ae,"CODE",{});var Qn=a(qe);_e=i(Qn,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qn.forEach(o),Ae.forEach(o),De.forEach(o)},m(x,j){h(x,p,j),e(p,L),h(x,u,j),h(x,b,j),e(b,y),e(y,g),e(b,f),e(b,k),e(k,Vo),h(x,rt,j),h(x,M,j),e(M,ue),e(M,Ce),e(Ce,be),e(M,So),e(M,ye),e(ye,Wo),e(M,Ut),h(x,pe,j),h(x,Me,j),e(Me,Le),h(x,Rt,j),h(x,H,j),e(H,me),e(me,je),e(me,it),e(it,Ht),e(me,Fe),e(me,ke),e(ke,Bo),e(H,Kt),e(H,A),e(A,ge),e(A,we),e(we,xe),e(A,Uo),e(A,$e),e($e,Ro),e(H,Gt),e(H,he),e(he,Ho),e(he,qe),e(qe,_e)},d(x){x&&o(p),x&&o(u),x&&o(b),x&&o(rt),x&&o(M),x&&o(pe),x&&o(Me),x&&o(Rt),x&&o(H)}}}function tP($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function oP($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function sP($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function nP($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function aP($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function rP($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function iP($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function lP($){let p,L,u,b,y;return{c(){p=s("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),b=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=n(g,"P",{});var f=a(p);L=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(f,"CODE",{});var k=a(u);b=i(k,"Module"),k.forEach(o),y=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(g,f){h(g,p,f),e(p,L),e(p,u),e(u,b),e(p,y)},d(g){g&&o(p)}}}function dP($){let p,L,u,b,y,g,f,k,Vo,rt,M,ue,Ce,be,So,ye,Wo,Ut,pe,Me,Le,Rt,H,me,je,it,Ht,Fe,ke,Bo,Kt,A,ge,we,xe,Uo,$e,Ro,Gt,he,Ho,qe,_e,x,j,Jt,Rn,Ko,E,Hn,lt,Kn,De,ve,Gn,Jn,Pe,Xn,Zn,Ae,Qn,gd,Yn,_d,vd,ea,Pd,Td,Xi,Go,Zi,Ne,Id,Jo,Cd,bd,Xo,yd,Ld,Qi,dt,Xt,sr,Zo,kd,nr,wd,Yi,fe,Qo,xd,Zt,ta,$d,Ed,oa,zd,Md,jd,ct,Fd,sa,qd,Dd,na,Ad,Nd,Od,Qt,Yo,Vd,es,Sd,aa,Wd,Bd,el,pt,Yt,ar,ts,Ud,rr,Rd,tl,V,os,Hd,mt,Kd,ra,Gd,Jd,ss,Xd,Zd,Qd,ht,Yd,ia,ec,tc,la,oc,sc,nc,ir,ac,rc,ns,ol,ft,eo,lr,as,ic,dr,lc,sl,S,rs,dc,ut,cc,da,pc,mc,is,hc,fc,uc,gt,gc,ca,_c,vc,pa,Pc,Tc,Ic,cr,Cc,bc,ls,nl,_t,to,pr,ds,yc,mr,Lc,al,F,cs,kc,hr,wc,xc,ps,$c,ma,Ec,zc,Mc,Te,ms,jc,fr,Fc,qc,ur,ha,Dc,gr,Ac,Nc,_r,Oc,Vc,oo,hs,Sc,fs,Wc,vr,Bc,Uc,Rc,so,us,Hc,Pr,Kc,Gc,Tr,rl,vt,no,Ir,gs,Jc,Cr,Xc,il,W,_s,Zc,vs,Qc,br,Yc,ep,tp,Ps,op,fa,sp,np,ap,Ie,Ts,rp,yr,ip,lp,Lr,ua,dp,kr,cp,pp,wr,mp,hp,ao,Is,fp,xr,up,ll,Pt,ro,$r,Cs,gp,Er,_p,dl,B,bs,vp,zr,Pp,Tp,ys,Ip,ga,Cp,bp,yp,io,Ls,Lp,ks,kp,Mr,wp,xp,$p,lo,ws,Ep,Tt,zp,jr,Mp,jp,Fr,Fp,qp,cl,It,co,qr,xs,Dp,Dr,Ap,pl,U,$s,Np,Ar,Op,Vp,K,_a,Sp,Wp,va,Bp,Up,Pa,Rp,Hp,Nr,Kp,Gp,Ta,Jp,Xp,Zp,po,Es,Qp,zs,Yp,Ia,em,tm,om,mo,Ms,sm,js,nm,Ca,am,rm,ml,Ct,ho,Or,Fs,im,Vr,lm,hl,R,qs,dm,Ds,cm,As,pm,mm,hm,G,Ns,fm,bt,um,ba,gm,_m,Sr,vm,Pm,Tm,fo,Im,Wr,Cm,bm,Os,ym,J,Vs,Lm,yt,km,ya,wm,xm,Br,$m,Em,zm,uo,Mm,Ur,jm,Fm,Ss,qm,X,Ws,Dm,Lt,Am,La,Nm,Om,Rr,Vm,Sm,Wm,go,Bm,Hr,Um,Rm,Bs,fl,kt,_o,Kr,Us,Hm,Gr,Km,ul,Rs,Z,Hs,Gm,wt,Jm,ka,Xm,Zm,Jr,Qm,Ym,eh,vo,th,Xr,oh,sh,Ks,gl,xt,Po,Zr,Gs,nh,Qr,ah,_l,Js,Q,Xs,rh,$t,ih,wa,lh,dh,Yr,ch,ph,mh,To,hh,ei,fh,uh,Zs,vl,Et,Io,ti,Qs,gh,oi,_h,Pl,q,Ys,vh,en,Ph,xa,Th,Ih,Ch,tn,bh,on,yh,Lh,kh,Co,wh,Y,sn,xh,zt,$h,$a,Eh,zh,si,Mh,jh,Fh,bo,qh,ni,Dh,Ah,nn,Nh,ee,an,Oh,Mt,Vh,Ea,Sh,Wh,ai,Bh,Uh,Rh,yo,Hh,ri,Kh,Gh,rn,Jh,te,ln,Xh,jt,Zh,za,Qh,Yh,ii,ef,tf,of,Lo,sf,li,nf,af,dn,Tl,Ft,ko,di,cn,rf,ci,lf,Il,pn,oe,mn,df,qt,cf,Ma,pf,mf,pi,hf,ff,uf,wo,gf,mi,_f,vf,hn,Cl,Dt,xo,hi,fn,Pf,fi,Tf,bl,un,se,gn,If,At,Cf,ja,bf,yf,ui,Lf,kf,wf,$o,xf,gi,$f,Ef,_n,yl,Nt,Eo,_i,vn,zf,vi,Mf,Ll,z,Pn,jf,Tn,Ff,Fa,qf,Df,Af,In,Nf,Cn,Of,Vf,Sf,Pi,Wf,Bf,Ee,Ti,bn,Uf,Rf,Ii,yn,Hf,Kf,Ci,Ln,Gf,Jf,bi,kn,Xf,Zf,ne,wn,Qf,Ot,Yf,yi,eu,tu,Li,ou,su,nu,zo,au,ki,ru,iu,xn,lu,Oe,$n,du,wi,cu,pu,En,mu,Ve,zn,hu,xi,fu,uu,Mn,kl,Vt,Mo,$i,jn,gu,Ei,_u,wl,Fn,ae,qn,vu,St,Pu,zi,Tu,Iu,Mi,Cu,bu,yu,jo,Lu,ji,ku,wu,Dn,xl,Wt,Fo,Fi,An,xu,qi,$u,$l,Nn,re,On,Eu,Bt,zu,Di,Mu,ju,Ai,Fu,qu,Du,qo,Au,Ni,Nu,Ou,Vn,El;return g=new D({}),be=new D({}),xe=new D({}),Go=new N({props:{code:`from PIL import Image
import requests

from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Zo=new D({}),Qo=new w({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/configuration_clip.py#L209",parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),Yo=new w({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/configuration_clip.py#L258",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),ts=new D({}),os=new w({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/configuration_clip.py#L31",parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
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
testing).`,name:"initializer_factor"}]}}),ns=new N({props:{code:`from transformers import CLIPTextModel, CLIPTextConfig

# Initializing a CLIPTextModel with openai/clip-vit-base-patch32 style configuration
configuration = CLIPTextConfig()

# Initializing a CLIPTextConfig from the openai/clip-vit-base-patch32 style configuration
model = CLIPTextModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTextModel, CLIPTextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextModel with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextConfig from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),as=new D({}),rs=new w({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/configuration_clip.py#L122",parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}]}}),ls=new N({props:{code:`from transformers import CLIPVisionModel, CLIPVisionConfig

# Initializing a CLIPVisionModel with openai/clip-vit-base-patch32 style configuration
configuration = CLIPVisionConfig()

# Initializing a CLIPVisionModel model from the openai/clip-vit-base-patch32 style configuration
model = CLIPVisionModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPVisionModel, CLIPVisionConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel model from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ds=new D({}),cs=new w({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip.py#L100",parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),ms=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip.py#L186",parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hs=new w({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip.py#L213",parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),us=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip.py#L241",parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gs=new D({}),_s=new w({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip_fast.py#L48",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),Ts=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip_fast.py#L121",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Is=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/tokenization_clip_fast.py#L148",parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Cs=new D({}),bs=new w({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 3"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/feature_extraction_clip.py#L31",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),Ls=new w({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/feature_extraction_clip.py#L159",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}]}}),ws=new w({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = 3"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/feature_extraction_clip.py#L185",parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}]}}),xs=new D({}),$s=new w({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/processing_clip.py#L22",parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),Es=new w({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/processing_clip.py#L95"}}),Ms=new w({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/processing_clip.py#L102"}}),Fs=new D({}),qs=new w({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L837",parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ns=new w({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L952",parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),fo=new ce({props:{$$slots:{default:[Jv]},$$scope:{ctx:$}}}),Os=new N({props:{code:`from PIL import Image
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
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Vs=new w({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L870",parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),uo=new ce({props:{$$slots:{default:[Xv]},$$scope:{ctx:$}}}),Ss=new N({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),Ws=new w({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L910",parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),go=new ce({props:{$$slots:{default:[Zv]},$$scope:{ctx:$}}}),Bs=new N({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

image_features = model.get_image_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),Us=new D({}),Hs=new w({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L688",parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),vo=new ce({props:{$$slots:{default:[Qv]},$$scope:{ctx:$}}}),Ks=new N({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

model = CLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),Gs=new D({}),Xs=new w({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_clip.py#L797",parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),To=new ce({props:{$$slots:{default:[Yv]},$$scope:{ctx:$}}}),Zs=new N({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPVisionModel

model = CLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),Qs=new D({}),Ys=new w({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1287",parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new ce({props:{$$slots:{default:[eP]},$$scope:{ctx:$}}}),sn=new w({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1440",parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),bo=new ce({props:{$$slots:{default:[tP]},$$scope:{ctx:$}}}),nn=new N({props:{code:`import tensorflow as tf
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
probs = tf.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),an=new w({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1333",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),yo=new ce({props:{$$slots:{default:[oP]},$$scope:{ctx:$}}}),rn=new N({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),ln=new w({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1385",parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),Lo=new ce({props:{$$slots:{default:[sP]},$$scope:{ctx:$}}}),dn=new N({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

image_features = model.get_image_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),cn=new D({}),mn=new w({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1110",parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),wo=new ce({props:{$$slots:{default:[nP]},$$scope:{ctx:$}}}),hn=new N({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

model = TFCLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),fn=new D({}),gn=new w({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_tf_clip.py#L1217",parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),$o=new ce({props:{$$slots:{default:[aP]},$$scope:{ctx:$}}}),_n=new N({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPVisionModel

model = TFCLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),vn=new D({}),Pn=new w({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L1108",parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),wn=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L737",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),zo=new ce({props:{$$slots:{default:[rP]},$$scope:{ctx:$}}}),xn=new N({props:{code:`import jax
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
probs = jax.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),$n=new w({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPPreTrainedModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L782",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),En=new N({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),zn=new w({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPPreTrainedModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L849",parametersDescription:[{anchor:"transformers.FlaxCLIPPreTrainedModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"}],returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Mn=new N({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="np")

image_features = model.get_image_features(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),jn=new D({}),qn=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L604",parametersDescription:[{anchor:"transformers.FlaxCLIPTextPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),jo=new ce({props:{$$slots:{default:[iP]},$$scope:{ctx:$}}}),Dn=new N({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

model = FlaxCLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooler_output = outputs.pooler_output  # pooled (EOS token) states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),An=new D({}),On=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/clip/modeling_flax_clip.py#L673",parametersDescription:[{anchor:"transformers.FlaxCLIPVisionPreTrainedModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),qo=new ce({props:{$$slots:{default:[lP]},$$scope:{ctx:$}}}),Vn=new N({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPVisionModel

model = FlaxCLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="np")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooler_output = outputs.pooler_output  # pooled CLS states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){p=s("meta"),L=l(),u=s("h1"),b=s("a"),y=s("span"),_(g.$$.fragment),f=l(),k=s("span"),Vo=r("CLIP"),rt=l(),M=s("h2"),ue=s("a"),Ce=s("span"),_(be.$$.fragment),So=l(),ye=s("span"),Wo=r("Overview"),Ut=l(),pe=s("p"),Me=r("The CLIP model was proposed in "),Le=s("a"),Rt=r("Learning Transferable Visual Models From Natural Language Supervision"),H=r(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),me=l(),je=s("p"),it=r("The abstract from the paper is the following:"),Ht=l(),Fe=s("p"),ke=s("em"),Bo=r(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Kt=l(),A=s("h2"),ge=s("a"),we=s("span"),_(xe.$$.fragment),Uo=l(),$e=s("span"),Ro=r("Usage"),Gt=l(),he=s("p"),Ho=r(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),qe=l(),_e=s("p"),x=r(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=s("a"),Jt=r("CLIPFeatureExtractor"),Rn=r(" can be used to resize (or rescale) and normalize images for the model."),Ko=l(),E=s("p"),Hn=r("The "),lt=s("a"),Kn=r("CLIPTokenizer"),De=r(" is used to encode the text. The "),ve=s("a"),Gn=r("CLIPProcessor"),Jn=r(` wraps
`),Pe=s("a"),Xn=r("CLIPFeatureExtractor"),Zn=r(" and "),Ae=s("a"),Qn=r("CLIPTokenizer"),gd=r(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),Yn=s("a"),_d=r("CLIPProcessor"),vd=r(" and "),ea=s("a"),Pd=r("CLIPModel"),Td=r("."),Xi=l(),_(Go.$$.fragment),Zi=l(),Ne=s("p"),Id=r("This model was contributed by "),Jo=s("a"),Cd=r("valhalla"),bd=r(". The original code can be found "),Xo=s("a"),yd=r("here"),Ld=r("."),Qi=l(),dt=s("h2"),Xt=s("a"),sr=s("span"),_(Zo.$$.fragment),kd=l(),nr=s("span"),wd=r("CLIPConfig"),Yi=l(),fe=s("div"),_(Qo.$$.fragment),xd=l(),Zt=s("p"),ta=s("a"),$d=r("CLIPConfig"),Ed=r(" is the configuration class to store the configuration of a "),oa=s("a"),zd=r("CLIPModel"),Md=r(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),jd=l(),ct=s("p"),Fd=r("Configuration objects inherit from "),sa=s("a"),qd=r("PretrainedConfig"),Dd=r(` and can be used to control the model outputs. Read the
documentation from `),na=s("a"),Ad=r("PretrainedConfig"),Nd=r(" for more information."),Od=l(),Qt=s("div"),_(Yo.$$.fragment),Vd=l(),es=s("p"),Sd=r("Instantiate a "),aa=s("a"),Wd=r("CLIPConfig"),Bd=r(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),el=l(),pt=s("h2"),Yt=s("a"),ar=s("span"),_(ts.$$.fragment),Ud=l(),rr=s("span"),Rd=r("CLIPTextConfig"),tl=l(),V=s("div"),_(os.$$.fragment),Hd=l(),mt=s("p"),Kd=r("This is the configuration class to store the configuration of a "),ra=s("a"),Gd=r("CLIPModel"),Jd=r(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),ss=s("a"),Xd=r("openai/clip-vit-base-patch32"),Zd=r(" architecture."),Qd=l(),ht=s("p"),Yd=r("Configuration objects inherit from "),ia=s("a"),ec=r("PretrainedConfig"),tc=r(` and can be used to control the model outputs. Read the
documentation from `),la=s("a"),oc=r("PretrainedConfig"),sc=r(" for more information."),nc=l(),ir=s("p"),ac=r("Example:"),rc=l(),_(ns.$$.fragment),ol=l(),ft=s("h2"),eo=s("a"),lr=s("span"),_(as.$$.fragment),ic=l(),dr=s("span"),lc=r("CLIPVisionConfig"),sl=l(),S=s("div"),_(rs.$$.fragment),dc=l(),ut=s("p"),cc=r("This is the configuration class to store the configuration of a "),da=s("a"),pc=r("CLIPModel"),mc=r(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),is=s("a"),hc=r("openai/clip-vit-base-patch32"),fc=r(" architecture."),uc=l(),gt=s("p"),gc=r("Configuration objects inherit from "),ca=s("a"),_c=r("PretrainedConfig"),vc=r(` and can be used to control the model outputs. Read the
documentation from `),pa=s("a"),Pc=r("PretrainedConfig"),Tc=r(" for more information."),Ic=l(),cr=s("p"),Cc=r("Example:"),bc=l(),_(ls.$$.fragment),nl=l(),_t=s("h2"),to=s("a"),pr=s("span"),_(ds.$$.fragment),yc=l(),mr=s("span"),Lc=r("CLIPTokenizer"),al=l(),F=s("div"),_(cs.$$.fragment),kc=l(),hr=s("p"),wc=r("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),xc=l(),ps=s("p"),$c=r("This tokenizer inherits from "),ma=s("a"),Ec=r("PreTrainedTokenizer"),zc=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Mc=l(),Te=s("div"),_(ms.$$.fragment),jc=l(),fr=s("p"),Fc=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),qc=l(),ur=s("ul"),ha=s("li"),Dc=r("single sequence: "),gr=s("code"),Ac=r("<|startoftext|> X <|endoftext|>"),Nc=l(),_r=s("p"),Oc=r("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Vc=l(),oo=s("div"),_(hs.$$.fragment),Sc=l(),fs=s("p"),Wc=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),vr=s("code"),Bc=r("prepare_for_model"),Uc=r(" method."),Rc=l(),so=s("div"),_(us.$$.fragment),Hc=l(),Pr=s("p"),Kc=r(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Gc=l(),Tr=s("div"),rl=l(),vt=s("h2"),no=s("a"),Ir=s("span"),_(gs.$$.fragment),Jc=l(),Cr=s("span"),Xc=r("CLIPTokenizerFast"),il=l(),W=s("div"),_(_s.$$.fragment),Zc=l(),vs=s("p"),Qc=r("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),br=s("em"),Yc=r("tokenizers"),ep=r(` library). Based on byte-level
Byte-Pair-Encoding.`),tp=l(),Ps=s("p"),op=r("This tokenizer inherits from "),fa=s("a"),sp=r("PreTrainedTokenizerFast"),np=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ap=l(),Ie=s("div"),_(Ts.$$.fragment),rp=l(),yr=s("p"),ip=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),lp=l(),Lr=s("ul"),ua=s("li"),dp=r("single sequence: "),kr=s("code"),cp=r("<|startoftext|> X <|endoftext|>"),pp=l(),wr=s("p"),mp=r("Pairs of sequences are not the expected use case, but they will be handled without a separator."),hp=l(),ao=s("div"),_(Is.$$.fragment),fp=l(),xr=s("p"),up=r(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ll=l(),Pt=s("h2"),ro=s("a"),$r=s("span"),_(Cs.$$.fragment),gp=l(),Er=s("span"),_p=r("CLIPFeatureExtractor"),dl=l(),B=s("div"),_(bs.$$.fragment),vp=l(),zr=s("p"),Pp=r("Constructs a CLIP feature extractor."),Tp=l(),ys=s("p"),Ip=r("This feature extractor inherits from "),ga=s("a"),Cp=r("FeatureExtractionMixin"),bp=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),yp=l(),io=s("div"),_(Ls.$$.fragment),Lp=l(),ks=s("p"),kp=r("Crops "),Mr=s("code"),wp=r("image"),xp=r(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),$p=l(),lo=s("div"),_(ws.$$.fragment),Ep=l(),Tt=s("p"),zp=r("Resizes "),jr=s("code"),Mp=r("image"),jp=r(". Note that this will trigger a conversion of "),Fr=s("code"),Fp=r("image"),qp=r(" to a PIL Image."),cl=l(),It=s("h2"),co=s("a"),qr=s("span"),_(xs.$$.fragment),Dp=l(),Dr=s("span"),Ap=r("CLIPProcessor"),pl=l(),U=s("div"),_($s.$$.fragment),Np=l(),Ar=s("p"),Op=r("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Vp=l(),K=s("p"),_a=s("a"),Sp=r("CLIPProcessor"),Wp=r(" offers all the functionalities of "),va=s("a"),Bp=r("CLIPFeatureExtractor"),Up=r(" and "),Pa=s("a"),Rp=r("CLIPTokenizer"),Hp=r(`. See the
`),Nr=s("code"),Kp=r("__call__()"),Gp=r("and "),Ta=s("a"),Jp=r("decode()"),Xp=r(" for more information."),Zp=l(),po=s("div"),_(Es.$$.fragment),Qp=l(),zs=s("p"),Yp=r("This method forwards all its arguments to CLIPTokenizer\u2019s "),Ia=s("a"),em=r("batch_decode()"),tm=r(`. Please refer
to the docstring of this method for more information.`),om=l(),mo=s("div"),_(Ms.$$.fragment),sm=l(),js=s("p"),nm=r("This method forwards all its arguments to CLIPTokenizer\u2019s "),Ca=s("a"),am=r("decode()"),rm=r(`. Please refer to the
docstring of this method for more information.`),ml=l(),Ct=s("h2"),ho=s("a"),Or=s("span"),_(Fs.$$.fragment),im=l(),Vr=s("span"),lm=r("CLIPModel"),hl=l(),R=s("div"),_(qs.$$.fragment),dm=l(),Ds=s("p"),cm=r("This model is a PyTorch "),As=s("a"),pm=r("torch.nn.Module"),mm=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hm=l(),G=s("div"),_(Ns.$$.fragment),fm=l(),bt=s("p"),um=r("The "),ba=s("a"),gm=r("CLIPModel"),_m=r(" forward method, overrides the "),Sr=s("code"),vm=r("__call__"),Pm=r(" special method."),Tm=l(),_(fo.$$.fragment),Im=l(),Wr=s("p"),Cm=r("Examples:"),bm=l(),_(Os.$$.fragment),ym=l(),J=s("div"),_(Vs.$$.fragment),Lm=l(),yt=s("p"),km=r("The "),ya=s("a"),wm=r("CLIPModel"),xm=r(" forward method, overrides the "),Br=s("code"),$m=r("__call__"),Em=r(" special method."),zm=l(),_(uo.$$.fragment),Mm=l(),Ur=s("p"),jm=r("Examples:"),Fm=l(),_(Ss.$$.fragment),qm=l(),X=s("div"),_(Ws.$$.fragment),Dm=l(),Lt=s("p"),Am=r("The "),La=s("a"),Nm=r("CLIPModel"),Om=r(" forward method, overrides the "),Rr=s("code"),Vm=r("__call__"),Sm=r(" special method."),Wm=l(),_(go.$$.fragment),Bm=l(),Hr=s("p"),Um=r("Examples:"),Rm=l(),_(Bs.$$.fragment),fl=l(),kt=s("h2"),_o=s("a"),Kr=s("span"),_(Us.$$.fragment),Hm=l(),Gr=s("span"),Km=r("CLIPTextModel"),ul=l(),Rs=s("div"),Z=s("div"),_(Hs.$$.fragment),Gm=l(),wt=s("p"),Jm=r("The "),ka=s("a"),Xm=r("CLIPTextModel"),Zm=r(" forward method, overrides the "),Jr=s("code"),Qm=r("__call__"),Ym=r(" special method."),eh=l(),_(vo.$$.fragment),th=l(),Xr=s("p"),oh=r("Examples:"),sh=l(),_(Ks.$$.fragment),gl=l(),xt=s("h2"),Po=s("a"),Zr=s("span"),_(Gs.$$.fragment),nh=l(),Qr=s("span"),ah=r("CLIPVisionModel"),_l=l(),Js=s("div"),Q=s("div"),_(Xs.$$.fragment),rh=l(),$t=s("p"),ih=r("The "),wa=s("a"),lh=r("CLIPVisionModel"),dh=r(" forward method, overrides the "),Yr=s("code"),ch=r("__call__"),ph=r(" special method."),mh=l(),_(To.$$.fragment),hh=l(),ei=s("p"),fh=r("Examples:"),uh=l(),_(Zs.$$.fragment),vl=l(),Et=s("h2"),Io=s("a"),ti=s("span"),_(Qs.$$.fragment),gh=l(),oi=s("span"),_h=r("TFCLIPModel"),Pl=l(),q=s("div"),_(Ys.$$.fragment),vh=l(),en=s("p"),Ph=r("This model inherits from "),xa=s("a"),Th=r("TFPreTrainedModel"),Ih=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ch=l(),tn=s("p"),bh=r("This model is also a "),on=s("a"),yh=r("tf.keras.Model"),Lh=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kh=l(),_(Co.$$.fragment),wh=l(),Y=s("div"),_(sn.$$.fragment),xh=l(),zt=s("p"),$h=r("The "),$a=s("a"),Eh=r("TFCLIPModel"),zh=r(" forward method, overrides the "),si=s("code"),Mh=r("__call__"),jh=r(" special method."),Fh=l(),_(bo.$$.fragment),qh=l(),ni=s("p"),Dh=r("Examples:"),Ah=l(),_(nn.$$.fragment),Nh=l(),ee=s("div"),_(an.$$.fragment),Oh=l(),Mt=s("p"),Vh=r("The "),Ea=s("a"),Sh=r("TFCLIPModel"),Wh=r(" forward method, overrides the "),ai=s("code"),Bh=r("__call__"),Uh=r(" special method."),Rh=l(),_(yo.$$.fragment),Hh=l(),ri=s("p"),Kh=r("Examples:"),Gh=l(),_(rn.$$.fragment),Jh=l(),te=s("div"),_(ln.$$.fragment),Xh=l(),jt=s("p"),Zh=r("The "),za=s("a"),Qh=r("TFCLIPModel"),Yh=r(" forward method, overrides the "),ii=s("code"),ef=r("__call__"),tf=r(" special method."),of=l(),_(Lo.$$.fragment),sf=l(),li=s("p"),nf=r("Examples:"),af=l(),_(dn.$$.fragment),Tl=l(),Ft=s("h2"),ko=s("a"),di=s("span"),_(cn.$$.fragment),rf=l(),ci=s("span"),lf=r("TFCLIPTextModel"),Il=l(),pn=s("div"),oe=s("div"),_(mn.$$.fragment),df=l(),qt=s("p"),cf=r("The "),Ma=s("a"),pf=r("TFCLIPTextModel"),mf=r(" forward method, overrides the "),pi=s("code"),hf=r("__call__"),ff=r(" special method."),uf=l(),_(wo.$$.fragment),gf=l(),mi=s("p"),_f=r("Examples:"),vf=l(),_(hn.$$.fragment),Cl=l(),Dt=s("h2"),xo=s("a"),hi=s("span"),_(fn.$$.fragment),Pf=l(),fi=s("span"),Tf=r("TFCLIPVisionModel"),bl=l(),un=s("div"),se=s("div"),_(gn.$$.fragment),If=l(),At=s("p"),Cf=r("The "),ja=s("a"),bf=r("TFCLIPVisionModel"),yf=r(" forward method, overrides the "),ui=s("code"),Lf=r("__call__"),kf=r(" special method."),wf=l(),_($o.$$.fragment),xf=l(),gi=s("p"),$f=r("Examples:"),Ef=l(),_(_n.$$.fragment),yl=l(),Nt=s("h2"),Eo=s("a"),_i=s("span"),_(vn.$$.fragment),zf=l(),vi=s("span"),Mf=r("FlaxCLIPModel"),Ll=l(),z=s("div"),_(Pn.$$.fragment),jf=l(),Tn=s("p"),Ff=r("This model inherits from "),Fa=s("a"),qf=r("FlaxPreTrainedModel"),Df=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Af=l(),In=s("p"),Nf=r("This model is also a Flax Linen "),Cn=s("a"),Of=r("flax.linen.Module"),Vf=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sf=l(),Pi=s("p"),Wf=r("Finally, this model supports inherent JAX features such as:"),Bf=l(),Ee=s("ul"),Ti=s("li"),bn=s("a"),Uf=r("Just-In-Time (JIT) compilation"),Rf=l(),Ii=s("li"),yn=s("a"),Hf=r("Automatic Differentiation"),Kf=l(),Ci=s("li"),Ln=s("a"),Gf=r("Vectorization"),Jf=l(),bi=s("li"),kn=s("a"),Xf=r("Parallelization"),Zf=l(),ne=s("div"),_(wn.$$.fragment),Qf=l(),Ot=s("p"),Yf=r("The "),yi=s("code"),eu=r("FlaxCLIPPreTrainedModel"),tu=r("forward method, overrides the "),Li=s("code"),ou=r("__call__"),su=r(" special method."),nu=l(),_(zo.$$.fragment),au=l(),ki=s("p"),ru=r("Example:"),iu=l(),_(xn.$$.fragment),lu=l(),Oe=s("div"),_($n.$$.fragment),du=l(),wi=s("p"),cu=r("Examples:"),pu=l(),_(En.$$.fragment),mu=l(),Ve=s("div"),_(zn.$$.fragment),hu=l(),xi=s("p"),fu=r("Examples:"),uu=l(),_(Mn.$$.fragment),kl=l(),Vt=s("h2"),Mo=s("a"),$i=s("span"),_(jn.$$.fragment),gu=l(),Ei=s("span"),_u=r("FlaxCLIPTextModel"),wl=l(),Fn=s("div"),ae=s("div"),_(qn.$$.fragment),vu=l(),St=s("p"),Pu=r("The "),zi=s("code"),Tu=r("FlaxCLIPTextPreTrainedModel"),Iu=r("forward method, overrides the "),Mi=s("code"),Cu=r("__call__"),bu=r(" special method."),yu=l(),_(jo.$$.fragment),Lu=l(),ji=s("p"),ku=r("Example:"),wu=l(),_(Dn.$$.fragment),xl=l(),Wt=s("h2"),Fo=s("a"),Fi=s("span"),_(An.$$.fragment),xu=l(),qi=s("span"),$u=r("FlaxCLIPVisionModel"),$l=l(),Nn=s("div"),re=s("div"),_(On.$$.fragment),Eu=l(),Bt=s("p"),zu=r("The "),Di=s("code"),Mu=r("FlaxCLIPVisionPreTrainedModel"),ju=r("forward method, overrides the "),Ai=s("code"),Fu=r("__call__"),qu=r(" special method."),Du=l(),_(qo.$$.fragment),Au=l(),Ni=s("p"),Nu=r("Example:"),Ou=l(),_(Vn.$$.fragment),this.h()},l(t){const m=Gv('[data-svelte="svelte-1phssyn"]',document.head);p=n(m,"META",{name:!0,content:!0}),m.forEach(o),L=d(t),u=n(t,"H1",{class:!0});var Sn=a(u);b=n(Sn,"A",{id:!0,class:!0,href:!0});var Oi=a(b);y=n(Oi,"SPAN",{});var Vi=a(y);v(g.$$.fragment,Vi),Vi.forEach(o),Oi.forEach(o),f=d(Sn),k=n(Sn,"SPAN",{});var Si=a(k);Vo=i(Si,"CLIP"),Si.forEach(o),Sn.forEach(o),rt=d(t),M=n(t,"H2",{class:!0});var Wn=a(M);ue=n(Wn,"A",{id:!0,class:!0,href:!0});var Wi=a(ue);Ce=n(Wi,"SPAN",{});var Bi=a(Ce);v(be.$$.fragment,Bi),Bi.forEach(o),Wi.forEach(o),So=d(Wn),ye=n(Wn,"SPAN",{});var Ui=a(ye);Wo=i(Ui,"Overview"),Ui.forEach(o),Wn.forEach(o),Ut=d(t),pe=n(t,"P",{});var Bn=a(pe);Me=i(Bn,"The CLIP model was proposed in "),Le=n(Bn,"A",{href:!0,rel:!0});var Ri=a(Le);Rt=i(Ri,"Learning Transferable Visual Models From Natural Language Supervision"),Ri.forEach(o),H=i(Bn,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Bn.forEach(o),me=d(t),je=n(t,"P",{});var Hi=a(je);it=i(Hi,"The abstract from the paper is the following:"),Hi.forEach(o),Ht=d(t),Fe=n(t,"P",{});var Ki=a(Fe);ke=n(Ki,"EM",{});var Gi=a(ke);Bo=i(Gi,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Gi.forEach(o),Ki.forEach(o),Kt=d(t),A=n(t,"H2",{class:!0});var Un=a(A);ge=n(Un,"A",{id:!0,class:!0,href:!0});var Wu=a(ge);we=n(Wu,"SPAN",{});var Bu=a(we);v(xe.$$.fragment,Bu),Bu.forEach(o),Wu.forEach(o),Uo=d(Un),$e=n(Un,"SPAN",{});var Uu=a($e);Ro=i(Uu,"Usage"),Uu.forEach(o),Un.forEach(o),Gt=d(t),he=n(t,"P",{});var Ru=a(he);Ho=i(Ru,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Ru.forEach(o),qe=d(t),_e=n(t,"P",{});var zl=a(_e);x=i(zl,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=n(zl,"A",{href:!0});var Hu=a(j);Jt=i(Hu,"CLIPFeatureExtractor"),Hu.forEach(o),Rn=i(zl," can be used to resize (or rescale) and normalize images for the model."),zl.forEach(o),Ko=d(t),E=n(t,"P",{});var ie=a(E);Hn=i(ie,"The "),lt=n(ie,"A",{href:!0});var Ku=a(lt);Kn=i(Ku,"CLIPTokenizer"),Ku.forEach(o),De=i(ie," is used to encode the text. The "),ve=n(ie,"A",{href:!0});var Gu=a(ve);Gn=i(Gu,"CLIPProcessor"),Gu.forEach(o),Jn=i(ie,` wraps
`),Pe=n(ie,"A",{href:!0});var Ju=a(Pe);Xn=i(Ju,"CLIPFeatureExtractor"),Ju.forEach(o),Zn=i(ie," and "),Ae=n(ie,"A",{href:!0});var Xu=a(Ae);Qn=i(Xu,"CLIPTokenizer"),Xu.forEach(o),gd=i(ie,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),Yn=n(ie,"A",{href:!0});var Zu=a(Yn);_d=i(Zu,"CLIPProcessor"),Zu.forEach(o),vd=i(ie," and "),ea=n(ie,"A",{href:!0});var Qu=a(ea);Pd=i(Qu,"CLIPModel"),Qu.forEach(o),Td=i(ie,"."),ie.forEach(o),Xi=d(t),v(Go.$$.fragment,t),Zi=d(t),Ne=n(t,"P",{});var qa=a(Ne);Id=i(qa,"This model was contributed by "),Jo=n(qa,"A",{href:!0,rel:!0});var Yu=a(Jo);Cd=i(Yu,"valhalla"),Yu.forEach(o),bd=i(qa,". The original code can be found "),Xo=n(qa,"A",{href:!0,rel:!0});var eg=a(Xo);yd=i(eg,"here"),eg.forEach(o),Ld=i(qa,"."),qa.forEach(o),Qi=d(t),dt=n(t,"H2",{class:!0});var Ml=a(dt);Xt=n(Ml,"A",{id:!0,class:!0,href:!0});var tg=a(Xt);sr=n(tg,"SPAN",{});var og=a(sr);v(Zo.$$.fragment,og),og.forEach(o),tg.forEach(o),kd=d(Ml),nr=n(Ml,"SPAN",{});var sg=a(nr);wd=i(sg,"CLIPConfig"),sg.forEach(o),Ml.forEach(o),Yi=d(t),fe=n(t,"DIV",{class:!0});var Do=a(fe);v(Qo.$$.fragment,Do),xd=d(Do),Zt=n(Do,"P",{});var Ji=a(Zt);ta=n(Ji,"A",{href:!0});var ng=a(ta);$d=i(ng,"CLIPConfig"),ng.forEach(o),Ed=i(Ji," is the configuration class to store the configuration of a "),oa=n(Ji,"A",{href:!0});var ag=a(oa);zd=i(ag,"CLIPModel"),ag.forEach(o),Md=i(Ji,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Ji.forEach(o),jd=d(Do),ct=n(Do,"P",{});var Da=a(ct);Fd=i(Da,"Configuration objects inherit from "),sa=n(Da,"A",{href:!0});var rg=a(sa);qd=i(rg,"PretrainedConfig"),rg.forEach(o),Dd=i(Da,` and can be used to control the model outputs. Read the
documentation from `),na=n(Da,"A",{href:!0});var ig=a(na);Ad=i(ig,"PretrainedConfig"),ig.forEach(o),Nd=i(Da," for more information."),Da.forEach(o),Od=d(Do),Qt=n(Do,"DIV",{class:!0});var jl=a(Qt);v(Yo.$$.fragment,jl),Vd=d(jl),es=n(jl,"P",{});var Fl=a(es);Sd=i(Fl,"Instantiate a "),aa=n(Fl,"A",{href:!0});var lg=a(aa);Wd=i(lg,"CLIPConfig"),lg.forEach(o),Bd=i(Fl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Fl.forEach(o),jl.forEach(o),Do.forEach(o),el=d(t),pt=n(t,"H2",{class:!0});var ql=a(pt);Yt=n(ql,"A",{id:!0,class:!0,href:!0});var dg=a(Yt);ar=n(dg,"SPAN",{});var cg=a(ar);v(ts.$$.fragment,cg),cg.forEach(o),dg.forEach(o),Ud=d(ql),rr=n(ql,"SPAN",{});var pg=a(rr);Rd=i(pg,"CLIPTextConfig"),pg.forEach(o),ql.forEach(o),tl=d(t),V=n(t,"DIV",{class:!0});var Se=a(V);v(os.$$.fragment,Se),Hd=d(Se),mt=n(Se,"P",{});var Aa=a(mt);Kd=i(Aa,"This is the configuration class to store the configuration of a "),ra=n(Aa,"A",{href:!0});var mg=a(ra);Gd=i(mg,"CLIPModel"),mg.forEach(o),Jd=i(Aa,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),ss=n(Aa,"A",{href:!0,rel:!0});var hg=a(ss);Xd=i(hg,"openai/clip-vit-base-patch32"),hg.forEach(o),Zd=i(Aa," architecture."),Aa.forEach(o),Qd=d(Se),ht=n(Se,"P",{});var Na=a(ht);Yd=i(Na,"Configuration objects inherit from "),ia=n(Na,"A",{href:!0});var fg=a(ia);ec=i(fg,"PretrainedConfig"),fg.forEach(o),tc=i(Na,` and can be used to control the model outputs. Read the
documentation from `),la=n(Na,"A",{href:!0});var ug=a(la);oc=i(ug,"PretrainedConfig"),ug.forEach(o),sc=i(Na," for more information."),Na.forEach(o),nc=d(Se),ir=n(Se,"P",{});var gg=a(ir);ac=i(gg,"Example:"),gg.forEach(o),rc=d(Se),v(ns.$$.fragment,Se),Se.forEach(o),ol=d(t),ft=n(t,"H2",{class:!0});var Dl=a(ft);eo=n(Dl,"A",{id:!0,class:!0,href:!0});var _g=a(eo);lr=n(_g,"SPAN",{});var vg=a(lr);v(as.$$.fragment,vg),vg.forEach(o),_g.forEach(o),ic=d(Dl),dr=n(Dl,"SPAN",{});var Pg=a(dr);lc=i(Pg,"CLIPVisionConfig"),Pg.forEach(o),Dl.forEach(o),sl=d(t),S=n(t,"DIV",{class:!0});var We=a(S);v(rs.$$.fragment,We),dc=d(We),ut=n(We,"P",{});var Oa=a(ut);cc=i(Oa,"This is the configuration class to store the configuration of a "),da=n(Oa,"A",{href:!0});var Tg=a(da);pc=i(Tg,"CLIPModel"),Tg.forEach(o),mc=i(Oa,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),is=n(Oa,"A",{href:!0,rel:!0});var Ig=a(is);hc=i(Ig,"openai/clip-vit-base-patch32"),Ig.forEach(o),fc=i(Oa," architecture."),Oa.forEach(o),uc=d(We),gt=n(We,"P",{});var Va=a(gt);gc=i(Va,"Configuration objects inherit from "),ca=n(Va,"A",{href:!0});var Cg=a(ca);_c=i(Cg,"PretrainedConfig"),Cg.forEach(o),vc=i(Va,` and can be used to control the model outputs. Read the
documentation from `),pa=n(Va,"A",{href:!0});var bg=a(pa);Pc=i(bg,"PretrainedConfig"),bg.forEach(o),Tc=i(Va," for more information."),Va.forEach(o),Ic=d(We),cr=n(We,"P",{});var yg=a(cr);Cc=i(yg,"Example:"),yg.forEach(o),bc=d(We),v(ls.$$.fragment,We),We.forEach(o),nl=d(t),_t=n(t,"H2",{class:!0});var Al=a(_t);to=n(Al,"A",{id:!0,class:!0,href:!0});var Lg=a(to);pr=n(Lg,"SPAN",{});var kg=a(pr);v(ds.$$.fragment,kg),kg.forEach(o),Lg.forEach(o),yc=d(Al),mr=n(Al,"SPAN",{});var wg=a(mr);Lc=i(wg,"CLIPTokenizer"),wg.forEach(o),Al.forEach(o),al=d(t),F=n(t,"DIV",{class:!0});var le=a(F);v(cs.$$.fragment,le),kc=d(le),hr=n(le,"P",{});var xg=a(hr);wc=i(xg,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),xg.forEach(o),xc=d(le),ps=n(le,"P",{});var Nl=a(ps);$c=i(Nl,"This tokenizer inherits from "),ma=n(Nl,"A",{href:!0});var $g=a(ma);Ec=i($g,"PreTrainedTokenizer"),$g.forEach(o),zc=i(Nl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Nl.forEach(o),Mc=d(le),Te=n(le,"DIV",{class:!0});var Ao=a(Te);v(ms.$$.fragment,Ao),jc=d(Ao),fr=n(Ao,"P",{});var Eg=a(fr);Fc=i(Eg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Eg.forEach(o),qc=d(Ao),ur=n(Ao,"UL",{});var zg=a(ur);ha=n(zg,"LI",{});var Vu=a(ha);Dc=i(Vu,"single sequence: "),gr=n(Vu,"CODE",{});var Mg=a(gr);Ac=i(Mg,"<|startoftext|> X <|endoftext|>"),Mg.forEach(o),Vu.forEach(o),zg.forEach(o),Nc=d(Ao),_r=n(Ao,"P",{});var jg=a(_r);Oc=i(jg,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),jg.forEach(o),Ao.forEach(o),Vc=d(le),oo=n(le,"DIV",{class:!0});var Ol=a(oo);v(hs.$$.fragment,Ol),Sc=d(Ol),fs=n(Ol,"P",{});var Vl=a(fs);Wc=i(Vl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),vr=n(Vl,"CODE",{});var Fg=a(vr);Bc=i(Fg,"prepare_for_model"),Fg.forEach(o),Uc=i(Vl," method."),Vl.forEach(o),Ol.forEach(o),Rc=d(le),so=n(le,"DIV",{class:!0});var Sl=a(so);v(us.$$.fragment,Sl),Hc=d(Sl),Pr=n(Sl,"P",{});var qg=a(Pr);Kc=i(qg,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),qg.forEach(o),Sl.forEach(o),Gc=d(le),Tr=n(le,"DIV",{class:!0}),a(Tr).forEach(o),le.forEach(o),rl=d(t),vt=n(t,"H2",{class:!0});var Wl=a(vt);no=n(Wl,"A",{id:!0,class:!0,href:!0});var Dg=a(no);Ir=n(Dg,"SPAN",{});var Ag=a(Ir);v(gs.$$.fragment,Ag),Ag.forEach(o),Dg.forEach(o),Jc=d(Wl),Cr=n(Wl,"SPAN",{});var Ng=a(Cr);Xc=i(Ng,"CLIPTokenizerFast"),Ng.forEach(o),Wl.forEach(o),il=d(t),W=n(t,"DIV",{class:!0});var Be=a(W);v(_s.$$.fragment,Be),Zc=d(Be),vs=n(Be,"P",{});var Bl=a(vs);Qc=i(Bl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),br=n(Bl,"EM",{});var Og=a(br);Yc=i(Og,"tokenizers"),Og.forEach(o),ep=i(Bl,` library). Based on byte-level
Byte-Pair-Encoding.`),Bl.forEach(o),tp=d(Be),Ps=n(Be,"P",{});var Ul=a(Ps);op=i(Ul,"This tokenizer inherits from "),fa=n(Ul,"A",{href:!0});var Vg=a(fa);sp=i(Vg,"PreTrainedTokenizerFast"),Vg.forEach(o),np=i(Ul,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ul.forEach(o),ap=d(Be),Ie=n(Be,"DIV",{class:!0});var No=a(Ie);v(Ts.$$.fragment,No),rp=d(No),yr=n(No,"P",{});var Sg=a(yr);ip=i(Sg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Sg.forEach(o),lp=d(No),Lr=n(No,"UL",{});var Wg=a(Lr);ua=n(Wg,"LI",{});var Su=a(ua);dp=i(Su,"single sequence: "),kr=n(Su,"CODE",{});var Bg=a(kr);cp=i(Bg,"<|startoftext|> X <|endoftext|>"),Bg.forEach(o),Su.forEach(o),Wg.forEach(o),pp=d(No),wr=n(No,"P",{});var Ug=a(wr);mp=i(Ug,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Ug.forEach(o),No.forEach(o),hp=d(Be),ao=n(Be,"DIV",{class:!0});var Rl=a(ao);v(Is.$$.fragment,Rl),fp=d(Rl),xr=n(Rl,"P",{});var Rg=a(xr);up=i(Rg,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Rg.forEach(o),Rl.forEach(o),Be.forEach(o),ll=d(t),Pt=n(t,"H2",{class:!0});var Hl=a(Pt);ro=n(Hl,"A",{id:!0,class:!0,href:!0});var Hg=a(ro);$r=n(Hg,"SPAN",{});var Kg=a($r);v(Cs.$$.fragment,Kg),Kg.forEach(o),Hg.forEach(o),gp=d(Hl),Er=n(Hl,"SPAN",{});var Gg=a(Er);_p=i(Gg,"CLIPFeatureExtractor"),Gg.forEach(o),Hl.forEach(o),dl=d(t),B=n(t,"DIV",{class:!0});var Ue=a(B);v(bs.$$.fragment,Ue),vp=d(Ue),zr=n(Ue,"P",{});var Jg=a(zr);Pp=i(Jg,"Constructs a CLIP feature extractor."),Jg.forEach(o),Tp=d(Ue),ys=n(Ue,"P",{});var Kl=a(ys);Ip=i(Kl,"This feature extractor inherits from "),ga=n(Kl,"A",{href:!0});var Xg=a(ga);Cp=i(Xg,"FeatureExtractionMixin"),Xg.forEach(o),bp=i(Kl,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Kl.forEach(o),yp=d(Ue),io=n(Ue,"DIV",{class:!0});var Gl=a(io);v(Ls.$$.fragment,Gl),Lp=d(Gl),ks=n(Gl,"P",{});var Jl=a(ks);kp=i(Jl,"Crops "),Mr=n(Jl,"CODE",{});var Zg=a(Mr);wp=i(Zg,"image"),Zg.forEach(o),xp=i(Jl,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Jl.forEach(o),Gl.forEach(o),$p=d(Ue),lo=n(Ue,"DIV",{class:!0});var Xl=a(lo);v(ws.$$.fragment,Xl),Ep=d(Xl),Tt=n(Xl,"P",{});var Sa=a(Tt);zp=i(Sa,"Resizes "),jr=n(Sa,"CODE",{});var Qg=a(jr);Mp=i(Qg,"image"),Qg.forEach(o),jp=i(Sa,". Note that this will trigger a conversion of "),Fr=n(Sa,"CODE",{});var Yg=a(Fr);Fp=i(Yg,"image"),Yg.forEach(o),qp=i(Sa," to a PIL Image."),Sa.forEach(o),Xl.forEach(o),Ue.forEach(o),cl=d(t),It=n(t,"H2",{class:!0});var Zl=a(It);co=n(Zl,"A",{id:!0,class:!0,href:!0});var e_=a(co);qr=n(e_,"SPAN",{});var t_=a(qr);v(xs.$$.fragment,t_),t_.forEach(o),e_.forEach(o),Dp=d(Zl),Dr=n(Zl,"SPAN",{});var o_=a(Dr);Ap=i(o_,"CLIPProcessor"),o_.forEach(o),Zl.forEach(o),pl=d(t),U=n(t,"DIV",{class:!0});var Re=a(U);v($s.$$.fragment,Re),Np=d(Re),Ar=n(Re,"P",{});var s_=a(Ar);Op=i(s_,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),s_.forEach(o),Vp=d(Re),K=n(Re,"P",{});var ze=a(K);_a=n(ze,"A",{href:!0});var n_=a(_a);Sp=i(n_,"CLIPProcessor"),n_.forEach(o),Wp=i(ze," offers all the functionalities of "),va=n(ze,"A",{href:!0});var a_=a(va);Bp=i(a_,"CLIPFeatureExtractor"),a_.forEach(o),Up=i(ze," and "),Pa=n(ze,"A",{href:!0});var r_=a(Pa);Rp=i(r_,"CLIPTokenizer"),r_.forEach(o),Hp=i(ze,`. See the
`),Nr=n(ze,"CODE",{});var i_=a(Nr);Kp=i(i_,"__call__()"),i_.forEach(o),Gp=i(ze,"and "),Ta=n(ze,"A",{href:!0});var l_=a(Ta);Jp=i(l_,"decode()"),l_.forEach(o),Xp=i(ze," for more information."),ze.forEach(o),Zp=d(Re),po=n(Re,"DIV",{class:!0});var Ql=a(po);v(Es.$$.fragment,Ql),Qp=d(Ql),zs=n(Ql,"P",{});var Yl=a(zs);Yp=i(Yl,"This method forwards all its arguments to CLIPTokenizer\u2019s "),Ia=n(Yl,"A",{href:!0});var d_=a(Ia);em=i(d_,"batch_decode()"),d_.forEach(o),tm=i(Yl,`. Please refer
to the docstring of this method for more information.`),Yl.forEach(o),Ql.forEach(o),om=d(Re),mo=n(Re,"DIV",{class:!0});var ed=a(mo);v(Ms.$$.fragment,ed),sm=d(ed),js=n(ed,"P",{});var td=a(js);nm=i(td,"This method forwards all its arguments to CLIPTokenizer\u2019s "),Ca=n(td,"A",{href:!0});var c_=a(Ca);am=i(c_,"decode()"),c_.forEach(o),rm=i(td,`. Please refer to the
docstring of this method for more information.`),td.forEach(o),ed.forEach(o),Re.forEach(o),ml=d(t),Ct=n(t,"H2",{class:!0});var od=a(Ct);ho=n(od,"A",{id:!0,class:!0,href:!0});var p_=a(ho);Or=n(p_,"SPAN",{});var m_=a(Or);v(Fs.$$.fragment,m_),m_.forEach(o),p_.forEach(o),im=d(od),Vr=n(od,"SPAN",{});var h_=a(Vr);lm=i(h_,"CLIPModel"),h_.forEach(o),od.forEach(o),hl=d(t),R=n(t,"DIV",{class:!0});var He=a(R);v(qs.$$.fragment,He),dm=d(He),Ds=n(He,"P",{});var sd=a(Ds);cm=i(sd,"This model is a PyTorch "),As=n(sd,"A",{href:!0,rel:!0});var f_=a(As);pm=i(f_,"torch.nn.Module"),f_.forEach(o),mm=i(sd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sd.forEach(o),hm=d(He),G=n(He,"DIV",{class:!0});var Ke=a(G);v(Ns.$$.fragment,Ke),fm=d(Ke),bt=n(Ke,"P",{});var Wa=a(bt);um=i(Wa,"The "),ba=n(Wa,"A",{href:!0});var u_=a(ba);gm=i(u_,"CLIPModel"),u_.forEach(o),_m=i(Wa," forward method, overrides the "),Sr=n(Wa,"CODE",{});var g_=a(Sr);vm=i(g_,"__call__"),g_.forEach(o),Pm=i(Wa," special method."),Wa.forEach(o),Tm=d(Ke),v(fo.$$.fragment,Ke),Im=d(Ke),Wr=n(Ke,"P",{});var __=a(Wr);Cm=i(__,"Examples:"),__.forEach(o),bm=d(Ke),v(Os.$$.fragment,Ke),Ke.forEach(o),ym=d(He),J=n(He,"DIV",{class:!0});var Ge=a(J);v(Vs.$$.fragment,Ge),Lm=d(Ge),yt=n(Ge,"P",{});var Ba=a(yt);km=i(Ba,"The "),ya=n(Ba,"A",{href:!0});var v_=a(ya);wm=i(v_,"CLIPModel"),v_.forEach(o),xm=i(Ba," forward method, overrides the "),Br=n(Ba,"CODE",{});var P_=a(Br);$m=i(P_,"__call__"),P_.forEach(o),Em=i(Ba," special method."),Ba.forEach(o),zm=d(Ge),v(uo.$$.fragment,Ge),Mm=d(Ge),Ur=n(Ge,"P",{});var T_=a(Ur);jm=i(T_,"Examples:"),T_.forEach(o),Fm=d(Ge),v(Ss.$$.fragment,Ge),Ge.forEach(o),qm=d(He),X=n(He,"DIV",{class:!0});var Je=a(X);v(Ws.$$.fragment,Je),Dm=d(Je),Lt=n(Je,"P",{});var Ua=a(Lt);Am=i(Ua,"The "),La=n(Ua,"A",{href:!0});var I_=a(La);Nm=i(I_,"CLIPModel"),I_.forEach(o),Om=i(Ua," forward method, overrides the "),Rr=n(Ua,"CODE",{});var C_=a(Rr);Vm=i(C_,"__call__"),C_.forEach(o),Sm=i(Ua," special method."),Ua.forEach(o),Wm=d(Je),v(go.$$.fragment,Je),Bm=d(Je),Hr=n(Je,"P",{});var b_=a(Hr);Um=i(b_,"Examples:"),b_.forEach(o),Rm=d(Je),v(Bs.$$.fragment,Je),Je.forEach(o),He.forEach(o),fl=d(t),kt=n(t,"H2",{class:!0});var nd=a(kt);_o=n(nd,"A",{id:!0,class:!0,href:!0});var y_=a(_o);Kr=n(y_,"SPAN",{});var L_=a(Kr);v(Us.$$.fragment,L_),L_.forEach(o),y_.forEach(o),Hm=d(nd),Gr=n(nd,"SPAN",{});var k_=a(Gr);Km=i(k_,"CLIPTextModel"),k_.forEach(o),nd.forEach(o),ul=d(t),Rs=n(t,"DIV",{class:!0});var w_=a(Rs);Z=n(w_,"DIV",{class:!0});var Xe=a(Z);v(Hs.$$.fragment,Xe),Gm=d(Xe),wt=n(Xe,"P",{});var Ra=a(wt);Jm=i(Ra,"The "),ka=n(Ra,"A",{href:!0});var x_=a(ka);Xm=i(x_,"CLIPTextModel"),x_.forEach(o),Zm=i(Ra," forward method, overrides the "),Jr=n(Ra,"CODE",{});var $_=a(Jr);Qm=i($_,"__call__"),$_.forEach(o),Ym=i(Ra," special method."),Ra.forEach(o),eh=d(Xe),v(vo.$$.fragment,Xe),th=d(Xe),Xr=n(Xe,"P",{});var E_=a(Xr);oh=i(E_,"Examples:"),E_.forEach(o),sh=d(Xe),v(Ks.$$.fragment,Xe),Xe.forEach(o),w_.forEach(o),gl=d(t),xt=n(t,"H2",{class:!0});var ad=a(xt);Po=n(ad,"A",{id:!0,class:!0,href:!0});var z_=a(Po);Zr=n(z_,"SPAN",{});var M_=a(Zr);v(Gs.$$.fragment,M_),M_.forEach(o),z_.forEach(o),nh=d(ad),Qr=n(ad,"SPAN",{});var j_=a(Qr);ah=i(j_,"CLIPVisionModel"),j_.forEach(o),ad.forEach(o),_l=d(t),Js=n(t,"DIV",{class:!0});var F_=a(Js);Q=n(F_,"DIV",{class:!0});var Ze=a(Q);v(Xs.$$.fragment,Ze),rh=d(Ze),$t=n(Ze,"P",{});var Ha=a($t);ih=i(Ha,"The "),wa=n(Ha,"A",{href:!0});var q_=a(wa);lh=i(q_,"CLIPVisionModel"),q_.forEach(o),dh=i(Ha," forward method, overrides the "),Yr=n(Ha,"CODE",{});var D_=a(Yr);ch=i(D_,"__call__"),D_.forEach(o),ph=i(Ha," special method."),Ha.forEach(o),mh=d(Ze),v(To.$$.fragment,Ze),hh=d(Ze),ei=n(Ze,"P",{});var A_=a(ei);fh=i(A_,"Examples:"),A_.forEach(o),uh=d(Ze),v(Zs.$$.fragment,Ze),Ze.forEach(o),F_.forEach(o),vl=d(t),Et=n(t,"H2",{class:!0});var rd=a(Et);Io=n(rd,"A",{id:!0,class:!0,href:!0});var N_=a(Io);ti=n(N_,"SPAN",{});var O_=a(ti);v(Qs.$$.fragment,O_),O_.forEach(o),N_.forEach(o),gh=d(rd),oi=n(rd,"SPAN",{});var V_=a(oi);_h=i(V_,"TFCLIPModel"),V_.forEach(o),rd.forEach(o),Pl=d(t),q=n(t,"DIV",{class:!0});var de=a(q);v(Ys.$$.fragment,de),vh=d(de),en=n(de,"P",{});var id=a(en);Ph=i(id,"This model inherits from "),xa=n(id,"A",{href:!0});var S_=a(xa);Th=i(S_,"TFPreTrainedModel"),S_.forEach(o),Ih=i(id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),id.forEach(o),Ch=d(de),tn=n(de,"P",{});var ld=a(tn);bh=i(ld,"This model is also a "),on=n(ld,"A",{href:!0,rel:!0});var W_=a(on);yh=i(W_,"tf.keras.Model"),W_.forEach(o),Lh=i(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(o),kh=d(de),v(Co.$$.fragment,de),wh=d(de),Y=n(de,"DIV",{class:!0});var Qe=a(Y);v(sn.$$.fragment,Qe),xh=d(Qe),zt=n(Qe,"P",{});var Ka=a(zt);$h=i(Ka,"The "),$a=n(Ka,"A",{href:!0});var B_=a($a);Eh=i(B_,"TFCLIPModel"),B_.forEach(o),zh=i(Ka," forward method, overrides the "),si=n(Ka,"CODE",{});var U_=a(si);Mh=i(U_,"__call__"),U_.forEach(o),jh=i(Ka," special method."),Ka.forEach(o),Fh=d(Qe),v(bo.$$.fragment,Qe),qh=d(Qe),ni=n(Qe,"P",{});var R_=a(ni);Dh=i(R_,"Examples:"),R_.forEach(o),Ah=d(Qe),v(nn.$$.fragment,Qe),Qe.forEach(o),Nh=d(de),ee=n(de,"DIV",{class:!0});var Ye=a(ee);v(an.$$.fragment,Ye),Oh=d(Ye),Mt=n(Ye,"P",{});var Ga=a(Mt);Vh=i(Ga,"The "),Ea=n(Ga,"A",{href:!0});var H_=a(Ea);Sh=i(H_,"TFCLIPModel"),H_.forEach(o),Wh=i(Ga," forward method, overrides the "),ai=n(Ga,"CODE",{});var K_=a(ai);Bh=i(K_,"__call__"),K_.forEach(o),Uh=i(Ga," special method."),Ga.forEach(o),Rh=d(Ye),v(yo.$$.fragment,Ye),Hh=d(Ye),ri=n(Ye,"P",{});var G_=a(ri);Kh=i(G_,"Examples:"),G_.forEach(o),Gh=d(Ye),v(rn.$$.fragment,Ye),Ye.forEach(o),Jh=d(de),te=n(de,"DIV",{class:!0});var et=a(te);v(ln.$$.fragment,et),Xh=d(et),jt=n(et,"P",{});var Ja=a(jt);Zh=i(Ja,"The "),za=n(Ja,"A",{href:!0});var J_=a(za);Qh=i(J_,"TFCLIPModel"),J_.forEach(o),Yh=i(Ja," forward method, overrides the "),ii=n(Ja,"CODE",{});var X_=a(ii);ef=i(X_,"__call__"),X_.forEach(o),tf=i(Ja," special method."),Ja.forEach(o),of=d(et),v(Lo.$$.fragment,et),sf=d(et),li=n(et,"P",{});var Z_=a(li);nf=i(Z_,"Examples:"),Z_.forEach(o),af=d(et),v(dn.$$.fragment,et),et.forEach(o),de.forEach(o),Tl=d(t),Ft=n(t,"H2",{class:!0});var dd=a(Ft);ko=n(dd,"A",{id:!0,class:!0,href:!0});var Q_=a(ko);di=n(Q_,"SPAN",{});var Y_=a(di);v(cn.$$.fragment,Y_),Y_.forEach(o),Q_.forEach(o),rf=d(dd),ci=n(dd,"SPAN",{});var ev=a(ci);lf=i(ev,"TFCLIPTextModel"),ev.forEach(o),dd.forEach(o),Il=d(t),pn=n(t,"DIV",{class:!0});var tv=a(pn);oe=n(tv,"DIV",{class:!0});var tt=a(oe);v(mn.$$.fragment,tt),df=d(tt),qt=n(tt,"P",{});var Xa=a(qt);cf=i(Xa,"The "),Ma=n(Xa,"A",{href:!0});var ov=a(Ma);pf=i(ov,"TFCLIPTextModel"),ov.forEach(o),mf=i(Xa," forward method, overrides the "),pi=n(Xa,"CODE",{});var sv=a(pi);hf=i(sv,"__call__"),sv.forEach(o),ff=i(Xa," special method."),Xa.forEach(o),uf=d(tt),v(wo.$$.fragment,tt),gf=d(tt),mi=n(tt,"P",{});var nv=a(mi);_f=i(nv,"Examples:"),nv.forEach(o),vf=d(tt),v(hn.$$.fragment,tt),tt.forEach(o),tv.forEach(o),Cl=d(t),Dt=n(t,"H2",{class:!0});var cd=a(Dt);xo=n(cd,"A",{id:!0,class:!0,href:!0});var av=a(xo);hi=n(av,"SPAN",{});var rv=a(hi);v(fn.$$.fragment,rv),rv.forEach(o),av.forEach(o),Pf=d(cd),fi=n(cd,"SPAN",{});var iv=a(fi);Tf=i(iv,"TFCLIPVisionModel"),iv.forEach(o),cd.forEach(o),bl=d(t),un=n(t,"DIV",{class:!0});var lv=a(un);se=n(lv,"DIV",{class:!0});var ot=a(se);v(gn.$$.fragment,ot),If=d(ot),At=n(ot,"P",{});var Za=a(At);Cf=i(Za,"The "),ja=n(Za,"A",{href:!0});var dv=a(ja);bf=i(dv,"TFCLIPVisionModel"),dv.forEach(o),yf=i(Za," forward method, overrides the "),ui=n(Za,"CODE",{});var cv=a(ui);Lf=i(cv,"__call__"),cv.forEach(o),kf=i(Za," special method."),Za.forEach(o),wf=d(ot),v($o.$$.fragment,ot),xf=d(ot),gi=n(ot,"P",{});var pv=a(gi);$f=i(pv,"Examples:"),pv.forEach(o),Ef=d(ot),v(_n.$$.fragment,ot),ot.forEach(o),lv.forEach(o),yl=d(t),Nt=n(t,"H2",{class:!0});var pd=a(Nt);Eo=n(pd,"A",{id:!0,class:!0,href:!0});var mv=a(Eo);_i=n(mv,"SPAN",{});var hv=a(_i);v(vn.$$.fragment,hv),hv.forEach(o),mv.forEach(o),zf=d(pd),vi=n(pd,"SPAN",{});var fv=a(vi);Mf=i(fv,"FlaxCLIPModel"),fv.forEach(o),pd.forEach(o),Ll=d(t),z=n(t,"DIV",{class:!0});var O=a(z);v(Pn.$$.fragment,O),jf=d(O),Tn=n(O,"P",{});var md=a(Tn);Ff=i(md,"This model inherits from "),Fa=n(md,"A",{href:!0});var uv=a(Fa);qf=i(uv,"FlaxPreTrainedModel"),uv.forEach(o),Df=i(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),md.forEach(o),Af=d(O),In=n(O,"P",{});var hd=a(In);Nf=i(hd,"This model is also a Flax Linen "),Cn=n(hd,"A",{href:!0,rel:!0});var gv=a(Cn);Of=i(gv,"flax.linen.Module"),gv.forEach(o),Vf=i(hd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hd.forEach(o),Sf=d(O),Pi=n(O,"P",{});var _v=a(Pi);Wf=i(_v,"Finally, this model supports inherent JAX features such as:"),_v.forEach(o),Bf=d(O),Ee=n(O,"UL",{});var Oo=a(Ee);Ti=n(Oo,"LI",{});var vv=a(Ti);bn=n(vv,"A",{href:!0,rel:!0});var Pv=a(bn);Uf=i(Pv,"Just-In-Time (JIT) compilation"),Pv.forEach(o),vv.forEach(o),Rf=d(Oo),Ii=n(Oo,"LI",{});var Tv=a(Ii);yn=n(Tv,"A",{href:!0,rel:!0});var Iv=a(yn);Hf=i(Iv,"Automatic Differentiation"),Iv.forEach(o),Tv.forEach(o),Kf=d(Oo),Ci=n(Oo,"LI",{});var Cv=a(Ci);Ln=n(Cv,"A",{href:!0,rel:!0});var bv=a(Ln);Gf=i(bv,"Vectorization"),bv.forEach(o),Cv.forEach(o),Jf=d(Oo),bi=n(Oo,"LI",{});var yv=a(bi);kn=n(yv,"A",{href:!0,rel:!0});var Lv=a(kn);Xf=i(Lv,"Parallelization"),Lv.forEach(o),yv.forEach(o),Oo.forEach(o),Zf=d(O),ne=n(O,"DIV",{class:!0});var st=a(ne);v(wn.$$.fragment,st),Qf=d(st),Ot=n(st,"P",{});var Qa=a(Ot);Yf=i(Qa,"The "),yi=n(Qa,"CODE",{});var kv=a(yi);eu=i(kv,"FlaxCLIPPreTrainedModel"),kv.forEach(o),tu=i(Qa,"forward method, overrides the "),Li=n(Qa,"CODE",{});var wv=a(Li);ou=i(wv,"__call__"),wv.forEach(o),su=i(Qa," special method."),Qa.forEach(o),nu=d(st),v(zo.$$.fragment,st),au=d(st),ki=n(st,"P",{});var xv=a(ki);ru=i(xv,"Example:"),xv.forEach(o),iu=d(st),v(xn.$$.fragment,st),st.forEach(o),lu=d(O),Oe=n(O,"DIV",{class:!0});var Ya=a(Oe);v($n.$$.fragment,Ya),du=d(Ya),wi=n(Ya,"P",{});var $v=a(wi);cu=i($v,"Examples:"),$v.forEach(o),pu=d(Ya),v(En.$$.fragment,Ya),Ya.forEach(o),mu=d(O),Ve=n(O,"DIV",{class:!0});var er=a(Ve);v(zn.$$.fragment,er),hu=d(er),xi=n(er,"P",{});var Ev=a(xi);fu=i(Ev,"Examples:"),Ev.forEach(o),uu=d(er),v(Mn.$$.fragment,er),er.forEach(o),O.forEach(o),kl=d(t),Vt=n(t,"H2",{class:!0});var fd=a(Vt);Mo=n(fd,"A",{id:!0,class:!0,href:!0});var zv=a(Mo);$i=n(zv,"SPAN",{});var Mv=a($i);v(jn.$$.fragment,Mv),Mv.forEach(o),zv.forEach(o),gu=d(fd),Ei=n(fd,"SPAN",{});var jv=a(Ei);_u=i(jv,"FlaxCLIPTextModel"),jv.forEach(o),fd.forEach(o),wl=d(t),Fn=n(t,"DIV",{class:!0});var Fv=a(Fn);ae=n(Fv,"DIV",{class:!0});var nt=a(ae);v(qn.$$.fragment,nt),vu=d(nt),St=n(nt,"P",{});var tr=a(St);Pu=i(tr,"The "),zi=n(tr,"CODE",{});var qv=a(zi);Tu=i(qv,"FlaxCLIPTextPreTrainedModel"),qv.forEach(o),Iu=i(tr,"forward method, overrides the "),Mi=n(tr,"CODE",{});var Dv=a(Mi);Cu=i(Dv,"__call__"),Dv.forEach(o),bu=i(tr," special method."),tr.forEach(o),yu=d(nt),v(jo.$$.fragment,nt),Lu=d(nt),ji=n(nt,"P",{});var Av=a(ji);ku=i(Av,"Example:"),Av.forEach(o),wu=d(nt),v(Dn.$$.fragment,nt),nt.forEach(o),Fv.forEach(o),xl=d(t),Wt=n(t,"H2",{class:!0});var ud=a(Wt);Fo=n(ud,"A",{id:!0,class:!0,href:!0});var Nv=a(Fo);Fi=n(Nv,"SPAN",{});var Ov=a(Fi);v(An.$$.fragment,Ov),Ov.forEach(o),Nv.forEach(o),xu=d(ud),qi=n(ud,"SPAN",{});var Vv=a(qi);$u=i(Vv,"FlaxCLIPVisionModel"),Vv.forEach(o),ud.forEach(o),$l=d(t),Nn=n(t,"DIV",{class:!0});var Sv=a(Nn);re=n(Sv,"DIV",{class:!0});var at=a(re);v(On.$$.fragment,at),Eu=d(at),Bt=n(at,"P",{});var or=a(Bt);zu=i(or,"The "),Di=n(or,"CODE",{});var Wv=a(Di);Mu=i(Wv,"FlaxCLIPVisionPreTrainedModel"),Wv.forEach(o),ju=i(or,"forward method, overrides the "),Ai=n(or,"CODE",{});var Bv=a(Ai);Fu=i(Bv,"__call__"),Bv.forEach(o),qu=i(or," special method."),or.forEach(o),Du=d(at),v(qo.$$.fragment,at),Au=d(at),Ni=n(at,"P",{});var Uv=a(Ni);Nu=i(Uv,"Example:"),Uv.forEach(o),Ou=d(at),v(Vn.$$.fragment,at),at.forEach(o),Sv.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(cP)),c(b,"id","clip"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#clip"),c(u,"class","relative group"),c(ue,"id","overview"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#overview"),c(M,"class","relative group"),c(Le,"href","https://arxiv.org/abs/2103.00020"),c(Le,"rel","nofollow"),c(ge,"id","usage"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#usage"),c(A,"class","relative group"),c(j,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(lt,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer"),c(ve,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPProcessor"),c(Pe,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Ae,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer"),c(Yn,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPProcessor"),c(ea,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(Jo,"href","https://huggingface.co/valhalla"),c(Jo,"rel","nofollow"),c(Xo,"href","https://github.com/openai/CLIP"),c(Xo,"rel","nofollow"),c(Xt,"id","transformers.CLIPConfig"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.CLIPConfig"),c(dt,"class","relative group"),c(ta,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig"),c(oa,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(sa,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(na,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(aa,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPConfig"),c(Qt,"class","docstring"),c(fe,"class","docstring"),c(Yt,"id","transformers.CLIPTextConfig"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.CLIPTextConfig"),c(pt,"class","relative group"),c(ra,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(ss,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(ss,"rel","nofollow"),c(ia,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(la,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(V,"class","docstring"),c(eo,"id","transformers.CLIPVisionConfig"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.CLIPVisionConfig"),c(ft,"class","relative group"),c(da,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(is,"href","https://huggingface.co/openai/clip-vit-base-patch32"),c(is,"rel","nofollow"),c(ca,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(pa,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(S,"class","docstring"),c(to,"id","transformers.CLIPTokenizer"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.CLIPTokenizer"),c(_t,"class","relative group"),c(ma,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Te,"class","docstring"),c(oo,"class","docstring"),c(so,"class","docstring"),c(Tr,"class","docstring"),c(F,"class","docstring"),c(no,"id","transformers.CLIPTokenizerFast"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.CLIPTokenizerFast"),c(vt,"class","relative group"),c(fa,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ie,"class","docstring"),c(ao,"class","docstring"),c(W,"class","docstring"),c(ro,"id","transformers.CLIPFeatureExtractor"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.CLIPFeatureExtractor"),c(Pt,"class","relative group"),c(ga,"href","/docs/transformers/master/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(io,"class","docstring"),c(lo,"class","docstring"),c(B,"class","docstring"),c(co,"id","transformers.CLIPProcessor"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.CLIPProcessor"),c(It,"class","relative group"),c(_a,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPProcessor"),c(va,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPFeatureExtractor"),c(Pa,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer"),c(Ta,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPProcessor.decode"),c(Ia,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(po,"class","docstring"),c(Ca,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(mo,"class","docstring"),c(U,"class","docstring"),c(ho,"id","transformers.CLIPModel"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.CLIPModel"),c(Ct,"class","relative group"),c(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(As,"rel","nofollow"),c(ba,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(G,"class","docstring"),c(ya,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(J,"class","docstring"),c(La,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPModel"),c(X,"class","docstring"),c(R,"class","docstring"),c(_o,"id","transformers.CLIPTextModel"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.CLIPTextModel"),c(kt,"class","relative group"),c(ka,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPTextModel"),c(Z,"class","docstring"),c(Rs,"class","docstring"),c(Po,"id","transformers.CLIPVisionModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.CLIPVisionModel"),c(xt,"class","relative group"),c(wa,"href","/docs/transformers/master/en/model_doc/clip#transformers.CLIPVisionModel"),c(Q,"class","docstring"),c(Js,"class","docstring"),c(Io,"id","transformers.TFCLIPModel"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.TFCLIPModel"),c(Et,"class","relative group"),c(xa,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(on,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(on,"rel","nofollow"),c($a,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPModel"),c(Y,"class","docstring"),c(Ea,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPModel"),c(ee,"class","docstring"),c(za,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPModel"),c(te,"class","docstring"),c(q,"class","docstring"),c(ko,"id","transformers.TFCLIPTextModel"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.TFCLIPTextModel"),c(Ft,"class","relative group"),c(Ma,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPTextModel"),c(oe,"class","docstring"),c(pn,"class","docstring"),c(xo,"id","transformers.TFCLIPVisionModel"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.TFCLIPVisionModel"),c(Dt,"class","relative group"),c(ja,"href","/docs/transformers/master/en/model_doc/clip#transformers.TFCLIPVisionModel"),c(se,"class","docstring"),c(un,"class","docstring"),c(Eo,"id","transformers.FlaxCLIPModel"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.FlaxCLIPModel"),c(Nt,"class","relative group"),c(Fa,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Cn,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Cn,"rel","nofollow"),c(bn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(bn,"rel","nofollow"),c(yn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(yn,"rel","nofollow"),c(Ln,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ln,"rel","nofollow"),c(kn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(kn,"rel","nofollow"),c(ne,"class","docstring"),c(Oe,"class","docstring"),c(Ve,"class","docstring"),c(z,"class","docstring"),c(Mo,"id","transformers.FlaxCLIPTextModel"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.FlaxCLIPTextModel"),c(Vt,"class","relative group"),c(ae,"class","docstring"),c(Fn,"class","docstring"),c(Fo,"id","transformers.FlaxCLIPVisionModel"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.FlaxCLIPVisionModel"),c(Wt,"class","relative group"),c(re,"class","docstring"),c(Nn,"class","docstring")},m(t,m){e(document.head,p),h(t,L,m),h(t,u,m),e(u,b),e(b,y),P(g,y,null),e(u,f),e(u,k),e(k,Vo),h(t,rt,m),h(t,M,m),e(M,ue),e(ue,Ce),P(be,Ce,null),e(M,So),e(M,ye),e(ye,Wo),h(t,Ut,m),h(t,pe,m),e(pe,Me),e(pe,Le),e(Le,Rt),e(pe,H),h(t,me,m),h(t,je,m),e(je,it),h(t,Ht,m),h(t,Fe,m),e(Fe,ke),e(ke,Bo),h(t,Kt,m),h(t,A,m),e(A,ge),e(ge,we),P(xe,we,null),e(A,Uo),e(A,$e),e($e,Ro),h(t,Gt,m),h(t,he,m),e(he,Ho),h(t,qe,m),h(t,_e,m),e(_e,x),e(_e,j),e(j,Jt),e(_e,Rn),h(t,Ko,m),h(t,E,m),e(E,Hn),e(E,lt),e(lt,Kn),e(E,De),e(E,ve),e(ve,Gn),e(E,Jn),e(E,Pe),e(Pe,Xn),e(E,Zn),e(E,Ae),e(Ae,Qn),e(E,gd),e(E,Yn),e(Yn,_d),e(E,vd),e(E,ea),e(ea,Pd),e(E,Td),h(t,Xi,m),P(Go,t,m),h(t,Zi,m),h(t,Ne,m),e(Ne,Id),e(Ne,Jo),e(Jo,Cd),e(Ne,bd),e(Ne,Xo),e(Xo,yd),e(Ne,Ld),h(t,Qi,m),h(t,dt,m),e(dt,Xt),e(Xt,sr),P(Zo,sr,null),e(dt,kd),e(dt,nr),e(nr,wd),h(t,Yi,m),h(t,fe,m),P(Qo,fe,null),e(fe,xd),e(fe,Zt),e(Zt,ta),e(ta,$d),e(Zt,Ed),e(Zt,oa),e(oa,zd),e(Zt,Md),e(fe,jd),e(fe,ct),e(ct,Fd),e(ct,sa),e(sa,qd),e(ct,Dd),e(ct,na),e(na,Ad),e(ct,Nd),e(fe,Od),e(fe,Qt),P(Yo,Qt,null),e(Qt,Vd),e(Qt,es),e(es,Sd),e(es,aa),e(aa,Wd),e(es,Bd),h(t,el,m),h(t,pt,m),e(pt,Yt),e(Yt,ar),P(ts,ar,null),e(pt,Ud),e(pt,rr),e(rr,Rd),h(t,tl,m),h(t,V,m),P(os,V,null),e(V,Hd),e(V,mt),e(mt,Kd),e(mt,ra),e(ra,Gd),e(mt,Jd),e(mt,ss),e(ss,Xd),e(mt,Zd),e(V,Qd),e(V,ht),e(ht,Yd),e(ht,ia),e(ia,ec),e(ht,tc),e(ht,la),e(la,oc),e(ht,sc),e(V,nc),e(V,ir),e(ir,ac),e(V,rc),P(ns,V,null),h(t,ol,m),h(t,ft,m),e(ft,eo),e(eo,lr),P(as,lr,null),e(ft,ic),e(ft,dr),e(dr,lc),h(t,sl,m),h(t,S,m),P(rs,S,null),e(S,dc),e(S,ut),e(ut,cc),e(ut,da),e(da,pc),e(ut,mc),e(ut,is),e(is,hc),e(ut,fc),e(S,uc),e(S,gt),e(gt,gc),e(gt,ca),e(ca,_c),e(gt,vc),e(gt,pa),e(pa,Pc),e(gt,Tc),e(S,Ic),e(S,cr),e(cr,Cc),e(S,bc),P(ls,S,null),h(t,nl,m),h(t,_t,m),e(_t,to),e(to,pr),P(ds,pr,null),e(_t,yc),e(_t,mr),e(mr,Lc),h(t,al,m),h(t,F,m),P(cs,F,null),e(F,kc),e(F,hr),e(hr,wc),e(F,xc),e(F,ps),e(ps,$c),e(ps,ma),e(ma,Ec),e(ps,zc),e(F,Mc),e(F,Te),P(ms,Te,null),e(Te,jc),e(Te,fr),e(fr,Fc),e(Te,qc),e(Te,ur),e(ur,ha),e(ha,Dc),e(ha,gr),e(gr,Ac),e(Te,Nc),e(Te,_r),e(_r,Oc),e(F,Vc),e(F,oo),P(hs,oo,null),e(oo,Sc),e(oo,fs),e(fs,Wc),e(fs,vr),e(vr,Bc),e(fs,Uc),e(F,Rc),e(F,so),P(us,so,null),e(so,Hc),e(so,Pr),e(Pr,Kc),e(F,Gc),e(F,Tr),h(t,rl,m),h(t,vt,m),e(vt,no),e(no,Ir),P(gs,Ir,null),e(vt,Jc),e(vt,Cr),e(Cr,Xc),h(t,il,m),h(t,W,m),P(_s,W,null),e(W,Zc),e(W,vs),e(vs,Qc),e(vs,br),e(br,Yc),e(vs,ep),e(W,tp),e(W,Ps),e(Ps,op),e(Ps,fa),e(fa,sp),e(Ps,np),e(W,ap),e(W,Ie),P(Ts,Ie,null),e(Ie,rp),e(Ie,yr),e(yr,ip),e(Ie,lp),e(Ie,Lr),e(Lr,ua),e(ua,dp),e(ua,kr),e(kr,cp),e(Ie,pp),e(Ie,wr),e(wr,mp),e(W,hp),e(W,ao),P(Is,ao,null),e(ao,fp),e(ao,xr),e(xr,up),h(t,ll,m),h(t,Pt,m),e(Pt,ro),e(ro,$r),P(Cs,$r,null),e(Pt,gp),e(Pt,Er),e(Er,_p),h(t,dl,m),h(t,B,m),P(bs,B,null),e(B,vp),e(B,zr),e(zr,Pp),e(B,Tp),e(B,ys),e(ys,Ip),e(ys,ga),e(ga,Cp),e(ys,bp),e(B,yp),e(B,io),P(Ls,io,null),e(io,Lp),e(io,ks),e(ks,kp),e(ks,Mr),e(Mr,wp),e(ks,xp),e(B,$p),e(B,lo),P(ws,lo,null),e(lo,Ep),e(lo,Tt),e(Tt,zp),e(Tt,jr),e(jr,Mp),e(Tt,jp),e(Tt,Fr),e(Fr,Fp),e(Tt,qp),h(t,cl,m),h(t,It,m),e(It,co),e(co,qr),P(xs,qr,null),e(It,Dp),e(It,Dr),e(Dr,Ap),h(t,pl,m),h(t,U,m),P($s,U,null),e(U,Np),e(U,Ar),e(Ar,Op),e(U,Vp),e(U,K),e(K,_a),e(_a,Sp),e(K,Wp),e(K,va),e(va,Bp),e(K,Up),e(K,Pa),e(Pa,Rp),e(K,Hp),e(K,Nr),e(Nr,Kp),e(K,Gp),e(K,Ta),e(Ta,Jp),e(K,Xp),e(U,Zp),e(U,po),P(Es,po,null),e(po,Qp),e(po,zs),e(zs,Yp),e(zs,Ia),e(Ia,em),e(zs,tm),e(U,om),e(U,mo),P(Ms,mo,null),e(mo,sm),e(mo,js),e(js,nm),e(js,Ca),e(Ca,am),e(js,rm),h(t,ml,m),h(t,Ct,m),e(Ct,ho),e(ho,Or),P(Fs,Or,null),e(Ct,im),e(Ct,Vr),e(Vr,lm),h(t,hl,m),h(t,R,m),P(qs,R,null),e(R,dm),e(R,Ds),e(Ds,cm),e(Ds,As),e(As,pm),e(Ds,mm),e(R,hm),e(R,G),P(Ns,G,null),e(G,fm),e(G,bt),e(bt,um),e(bt,ba),e(ba,gm),e(bt,_m),e(bt,Sr),e(Sr,vm),e(bt,Pm),e(G,Tm),P(fo,G,null),e(G,Im),e(G,Wr),e(Wr,Cm),e(G,bm),P(Os,G,null),e(R,ym),e(R,J),P(Vs,J,null),e(J,Lm),e(J,yt),e(yt,km),e(yt,ya),e(ya,wm),e(yt,xm),e(yt,Br),e(Br,$m),e(yt,Em),e(J,zm),P(uo,J,null),e(J,Mm),e(J,Ur),e(Ur,jm),e(J,Fm),P(Ss,J,null),e(R,qm),e(R,X),P(Ws,X,null),e(X,Dm),e(X,Lt),e(Lt,Am),e(Lt,La),e(La,Nm),e(Lt,Om),e(Lt,Rr),e(Rr,Vm),e(Lt,Sm),e(X,Wm),P(go,X,null),e(X,Bm),e(X,Hr),e(Hr,Um),e(X,Rm),P(Bs,X,null),h(t,fl,m),h(t,kt,m),e(kt,_o),e(_o,Kr),P(Us,Kr,null),e(kt,Hm),e(kt,Gr),e(Gr,Km),h(t,ul,m),h(t,Rs,m),e(Rs,Z),P(Hs,Z,null),e(Z,Gm),e(Z,wt),e(wt,Jm),e(wt,ka),e(ka,Xm),e(wt,Zm),e(wt,Jr),e(Jr,Qm),e(wt,Ym),e(Z,eh),P(vo,Z,null),e(Z,th),e(Z,Xr),e(Xr,oh),e(Z,sh),P(Ks,Z,null),h(t,gl,m),h(t,xt,m),e(xt,Po),e(Po,Zr),P(Gs,Zr,null),e(xt,nh),e(xt,Qr),e(Qr,ah),h(t,_l,m),h(t,Js,m),e(Js,Q),P(Xs,Q,null),e(Q,rh),e(Q,$t),e($t,ih),e($t,wa),e(wa,lh),e($t,dh),e($t,Yr),e(Yr,ch),e($t,ph),e(Q,mh),P(To,Q,null),e(Q,hh),e(Q,ei),e(ei,fh),e(Q,uh),P(Zs,Q,null),h(t,vl,m),h(t,Et,m),e(Et,Io),e(Io,ti),P(Qs,ti,null),e(Et,gh),e(Et,oi),e(oi,_h),h(t,Pl,m),h(t,q,m),P(Ys,q,null),e(q,vh),e(q,en),e(en,Ph),e(en,xa),e(xa,Th),e(en,Ih),e(q,Ch),e(q,tn),e(tn,bh),e(tn,on),e(on,yh),e(tn,Lh),e(q,kh),P(Co,q,null),e(q,wh),e(q,Y),P(sn,Y,null),e(Y,xh),e(Y,zt),e(zt,$h),e(zt,$a),e($a,Eh),e(zt,zh),e(zt,si),e(si,Mh),e(zt,jh),e(Y,Fh),P(bo,Y,null),e(Y,qh),e(Y,ni),e(ni,Dh),e(Y,Ah),P(nn,Y,null),e(q,Nh),e(q,ee),P(an,ee,null),e(ee,Oh),e(ee,Mt),e(Mt,Vh),e(Mt,Ea),e(Ea,Sh),e(Mt,Wh),e(Mt,ai),e(ai,Bh),e(Mt,Uh),e(ee,Rh),P(yo,ee,null),e(ee,Hh),e(ee,ri),e(ri,Kh),e(ee,Gh),P(rn,ee,null),e(q,Jh),e(q,te),P(ln,te,null),e(te,Xh),e(te,jt),e(jt,Zh),e(jt,za),e(za,Qh),e(jt,Yh),e(jt,ii),e(ii,ef),e(jt,tf),e(te,of),P(Lo,te,null),e(te,sf),e(te,li),e(li,nf),e(te,af),P(dn,te,null),h(t,Tl,m),h(t,Ft,m),e(Ft,ko),e(ko,di),P(cn,di,null),e(Ft,rf),e(Ft,ci),e(ci,lf),h(t,Il,m),h(t,pn,m),e(pn,oe),P(mn,oe,null),e(oe,df),e(oe,qt),e(qt,cf),e(qt,Ma),e(Ma,pf),e(qt,mf),e(qt,pi),e(pi,hf),e(qt,ff),e(oe,uf),P(wo,oe,null),e(oe,gf),e(oe,mi),e(mi,_f),e(oe,vf),P(hn,oe,null),h(t,Cl,m),h(t,Dt,m),e(Dt,xo),e(xo,hi),P(fn,hi,null),e(Dt,Pf),e(Dt,fi),e(fi,Tf),h(t,bl,m),h(t,un,m),e(un,se),P(gn,se,null),e(se,If),e(se,At),e(At,Cf),e(At,ja),e(ja,bf),e(At,yf),e(At,ui),e(ui,Lf),e(At,kf),e(se,wf),P($o,se,null),e(se,xf),e(se,gi),e(gi,$f),e(se,Ef),P(_n,se,null),h(t,yl,m),h(t,Nt,m),e(Nt,Eo),e(Eo,_i),P(vn,_i,null),e(Nt,zf),e(Nt,vi),e(vi,Mf),h(t,Ll,m),h(t,z,m),P(Pn,z,null),e(z,jf),e(z,Tn),e(Tn,Ff),e(Tn,Fa),e(Fa,qf),e(Tn,Df),e(z,Af),e(z,In),e(In,Nf),e(In,Cn),e(Cn,Of),e(In,Vf),e(z,Sf),e(z,Pi),e(Pi,Wf),e(z,Bf),e(z,Ee),e(Ee,Ti),e(Ti,bn),e(bn,Uf),e(Ee,Rf),e(Ee,Ii),e(Ii,yn),e(yn,Hf),e(Ee,Kf),e(Ee,Ci),e(Ci,Ln),e(Ln,Gf),e(Ee,Jf),e(Ee,bi),e(bi,kn),e(kn,Xf),e(z,Zf),e(z,ne),P(wn,ne,null),e(ne,Qf),e(ne,Ot),e(Ot,Yf),e(Ot,yi),e(yi,eu),e(Ot,tu),e(Ot,Li),e(Li,ou),e(Ot,su),e(ne,nu),P(zo,ne,null),e(ne,au),e(ne,ki),e(ki,ru),e(ne,iu),P(xn,ne,null),e(z,lu),e(z,Oe),P($n,Oe,null),e(Oe,du),e(Oe,wi),e(wi,cu),e(Oe,pu),P(En,Oe,null),e(z,mu),e(z,Ve),P(zn,Ve,null),e(Ve,hu),e(Ve,xi),e(xi,fu),e(Ve,uu),P(Mn,Ve,null),h(t,kl,m),h(t,Vt,m),e(Vt,Mo),e(Mo,$i),P(jn,$i,null),e(Vt,gu),e(Vt,Ei),e(Ei,_u),h(t,wl,m),h(t,Fn,m),e(Fn,ae),P(qn,ae,null),e(ae,vu),e(ae,St),e(St,Pu),e(St,zi),e(zi,Tu),e(St,Iu),e(St,Mi),e(Mi,Cu),e(St,bu),e(ae,yu),P(jo,ae,null),e(ae,Lu),e(ae,ji),e(ji,ku),e(ae,wu),P(Dn,ae,null),h(t,xl,m),h(t,Wt,m),e(Wt,Fo),e(Fo,Fi),P(An,Fi,null),e(Wt,xu),e(Wt,qi),e(qi,$u),h(t,$l,m),h(t,Nn,m),e(Nn,re),P(On,re,null),e(re,Eu),e(re,Bt),e(Bt,zu),e(Bt,Di),e(Di,Mu),e(Bt,ju),e(Bt,Ai),e(Ai,Fu),e(Bt,qu),e(re,Du),P(qo,re,null),e(re,Au),e(re,Ni),e(Ni,Nu),e(re,Ou),P(Vn,re,null),El=!0},p(t,[m]){const Sn={};m&2&&(Sn.$$scope={dirty:m,ctx:t}),fo.$set(Sn);const Oi={};m&2&&(Oi.$$scope={dirty:m,ctx:t}),uo.$set(Oi);const Vi={};m&2&&(Vi.$$scope={dirty:m,ctx:t}),go.$set(Vi);const Si={};m&2&&(Si.$$scope={dirty:m,ctx:t}),vo.$set(Si);const Wn={};m&2&&(Wn.$$scope={dirty:m,ctx:t}),To.$set(Wn);const Wi={};m&2&&(Wi.$$scope={dirty:m,ctx:t}),Co.$set(Wi);const Bi={};m&2&&(Bi.$$scope={dirty:m,ctx:t}),bo.$set(Bi);const Ui={};m&2&&(Ui.$$scope={dirty:m,ctx:t}),yo.$set(Ui);const Bn={};m&2&&(Bn.$$scope={dirty:m,ctx:t}),Lo.$set(Bn);const Ri={};m&2&&(Ri.$$scope={dirty:m,ctx:t}),wo.$set(Ri);const Hi={};m&2&&(Hi.$$scope={dirty:m,ctx:t}),$o.$set(Hi);const Ki={};m&2&&(Ki.$$scope={dirty:m,ctx:t}),zo.$set(Ki);const Gi={};m&2&&(Gi.$$scope={dirty:m,ctx:t}),jo.$set(Gi);const Un={};m&2&&(Un.$$scope={dirty:m,ctx:t}),qo.$set(Un)},i(t){El||(T(g.$$.fragment,t),T(be.$$.fragment,t),T(xe.$$.fragment,t),T(Go.$$.fragment,t),T(Zo.$$.fragment,t),T(Qo.$$.fragment,t),T(Yo.$$.fragment,t),T(ts.$$.fragment,t),T(os.$$.fragment,t),T(ns.$$.fragment,t),T(as.$$.fragment,t),T(rs.$$.fragment,t),T(ls.$$.fragment,t),T(ds.$$.fragment,t),T(cs.$$.fragment,t),T(ms.$$.fragment,t),T(hs.$$.fragment,t),T(us.$$.fragment,t),T(gs.$$.fragment,t),T(_s.$$.fragment,t),T(Ts.$$.fragment,t),T(Is.$$.fragment,t),T(Cs.$$.fragment,t),T(bs.$$.fragment,t),T(Ls.$$.fragment,t),T(ws.$$.fragment,t),T(xs.$$.fragment,t),T($s.$$.fragment,t),T(Es.$$.fragment,t),T(Ms.$$.fragment,t),T(Fs.$$.fragment,t),T(qs.$$.fragment,t),T(Ns.$$.fragment,t),T(fo.$$.fragment,t),T(Os.$$.fragment,t),T(Vs.$$.fragment,t),T(uo.$$.fragment,t),T(Ss.$$.fragment,t),T(Ws.$$.fragment,t),T(go.$$.fragment,t),T(Bs.$$.fragment,t),T(Us.$$.fragment,t),T(Hs.$$.fragment,t),T(vo.$$.fragment,t),T(Ks.$$.fragment,t),T(Gs.$$.fragment,t),T(Xs.$$.fragment,t),T(To.$$.fragment,t),T(Zs.$$.fragment,t),T(Qs.$$.fragment,t),T(Ys.$$.fragment,t),T(Co.$$.fragment,t),T(sn.$$.fragment,t),T(bo.$$.fragment,t),T(nn.$$.fragment,t),T(an.$$.fragment,t),T(yo.$$.fragment,t),T(rn.$$.fragment,t),T(ln.$$.fragment,t),T(Lo.$$.fragment,t),T(dn.$$.fragment,t),T(cn.$$.fragment,t),T(mn.$$.fragment,t),T(wo.$$.fragment,t),T(hn.$$.fragment,t),T(fn.$$.fragment,t),T(gn.$$.fragment,t),T($o.$$.fragment,t),T(_n.$$.fragment,t),T(vn.$$.fragment,t),T(Pn.$$.fragment,t),T(wn.$$.fragment,t),T(zo.$$.fragment,t),T(xn.$$.fragment,t),T($n.$$.fragment,t),T(En.$$.fragment,t),T(zn.$$.fragment,t),T(Mn.$$.fragment,t),T(jn.$$.fragment,t),T(qn.$$.fragment,t),T(jo.$$.fragment,t),T(Dn.$$.fragment,t),T(An.$$.fragment,t),T(On.$$.fragment,t),T(qo.$$.fragment,t),T(Vn.$$.fragment,t),El=!0)},o(t){I(g.$$.fragment,t),I(be.$$.fragment,t),I(xe.$$.fragment,t),I(Go.$$.fragment,t),I(Zo.$$.fragment,t),I(Qo.$$.fragment,t),I(Yo.$$.fragment,t),I(ts.$$.fragment,t),I(os.$$.fragment,t),I(ns.$$.fragment,t),I(as.$$.fragment,t),I(rs.$$.fragment,t),I(ls.$$.fragment,t),I(ds.$$.fragment,t),I(cs.$$.fragment,t),I(ms.$$.fragment,t),I(hs.$$.fragment,t),I(us.$$.fragment,t),I(gs.$$.fragment,t),I(_s.$$.fragment,t),I(Ts.$$.fragment,t),I(Is.$$.fragment,t),I(Cs.$$.fragment,t),I(bs.$$.fragment,t),I(Ls.$$.fragment,t),I(ws.$$.fragment,t),I(xs.$$.fragment,t),I($s.$$.fragment,t),I(Es.$$.fragment,t),I(Ms.$$.fragment,t),I(Fs.$$.fragment,t),I(qs.$$.fragment,t),I(Ns.$$.fragment,t),I(fo.$$.fragment,t),I(Os.$$.fragment,t),I(Vs.$$.fragment,t),I(uo.$$.fragment,t),I(Ss.$$.fragment,t),I(Ws.$$.fragment,t),I(go.$$.fragment,t),I(Bs.$$.fragment,t),I(Us.$$.fragment,t),I(Hs.$$.fragment,t),I(vo.$$.fragment,t),I(Ks.$$.fragment,t),I(Gs.$$.fragment,t),I(Xs.$$.fragment,t),I(To.$$.fragment,t),I(Zs.$$.fragment,t),I(Qs.$$.fragment,t),I(Ys.$$.fragment,t),I(Co.$$.fragment,t),I(sn.$$.fragment,t),I(bo.$$.fragment,t),I(nn.$$.fragment,t),I(an.$$.fragment,t),I(yo.$$.fragment,t),I(rn.$$.fragment,t),I(ln.$$.fragment,t),I(Lo.$$.fragment,t),I(dn.$$.fragment,t),I(cn.$$.fragment,t),I(mn.$$.fragment,t),I(wo.$$.fragment,t),I(hn.$$.fragment,t),I(fn.$$.fragment,t),I(gn.$$.fragment,t),I($o.$$.fragment,t),I(_n.$$.fragment,t),I(vn.$$.fragment,t),I(Pn.$$.fragment,t),I(wn.$$.fragment,t),I(zo.$$.fragment,t),I(xn.$$.fragment,t),I($n.$$.fragment,t),I(En.$$.fragment,t),I(zn.$$.fragment,t),I(Mn.$$.fragment,t),I(jn.$$.fragment,t),I(qn.$$.fragment,t),I(jo.$$.fragment,t),I(Dn.$$.fragment,t),I(An.$$.fragment,t),I(On.$$.fragment,t),I(qo.$$.fragment,t),I(Vn.$$.fragment,t),El=!1},d(t){o(p),t&&o(L),t&&o(u),C(g),t&&o(rt),t&&o(M),C(be),t&&o(Ut),t&&o(pe),t&&o(me),t&&o(je),t&&o(Ht),t&&o(Fe),t&&o(Kt),t&&o(A),C(xe),t&&o(Gt),t&&o(he),t&&o(qe),t&&o(_e),t&&o(Ko),t&&o(E),t&&o(Xi),C(Go,t),t&&o(Zi),t&&o(Ne),t&&o(Qi),t&&o(dt),C(Zo),t&&o(Yi),t&&o(fe),C(Qo),C(Yo),t&&o(el),t&&o(pt),C(ts),t&&o(tl),t&&o(V),C(os),C(ns),t&&o(ol),t&&o(ft),C(as),t&&o(sl),t&&o(S),C(rs),C(ls),t&&o(nl),t&&o(_t),C(ds),t&&o(al),t&&o(F),C(cs),C(ms),C(hs),C(us),t&&o(rl),t&&o(vt),C(gs),t&&o(il),t&&o(W),C(_s),C(Ts),C(Is),t&&o(ll),t&&o(Pt),C(Cs),t&&o(dl),t&&o(B),C(bs),C(Ls),C(ws),t&&o(cl),t&&o(It),C(xs),t&&o(pl),t&&o(U),C($s),C(Es),C(Ms),t&&o(ml),t&&o(Ct),C(Fs),t&&o(hl),t&&o(R),C(qs),C(Ns),C(fo),C(Os),C(Vs),C(uo),C(Ss),C(Ws),C(go),C(Bs),t&&o(fl),t&&o(kt),C(Us),t&&o(ul),t&&o(Rs),C(Hs),C(vo),C(Ks),t&&o(gl),t&&o(xt),C(Gs),t&&o(_l),t&&o(Js),C(Xs),C(To),C(Zs),t&&o(vl),t&&o(Et),C(Qs),t&&o(Pl),t&&o(q),C(Ys),C(Co),C(sn),C(bo),C(nn),C(an),C(yo),C(rn),C(ln),C(Lo),C(dn),t&&o(Tl),t&&o(Ft),C(cn),t&&o(Il),t&&o(pn),C(mn),C(wo),C(hn),t&&o(Cl),t&&o(Dt),C(fn),t&&o(bl),t&&o(un),C(gn),C($o),C(_n),t&&o(yl),t&&o(Nt),C(vn),t&&o(Ll),t&&o(z),C(Pn),C(wn),C(zo),C(xn),C($n),C(En),C(zn),C(Mn),t&&o(kl),t&&o(Vt),C(jn),t&&o(wl),t&&o(Fn),C(qn),C(jo),C(Dn),t&&o(xl),t&&o(Wt),C(An),t&&o($l),t&&o(Nn),C(On),C(qo),C(Vn)}}}const cP={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function pP($,p,L){let{fw:u}=p;return $.$$set=b=>{"fw"in b&&L(0,u=b.fw)},[u]}class vP extends Rv{constructor(p){super();Hv(this,p,pP,dP,Kv,{fw:0})}}export{vP as default,cP as metadata};
