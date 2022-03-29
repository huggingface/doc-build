import{S as jk,i as Sk,s as Ok,e as n,k as d,w as m,t as r,M as Ak,c as s,d as t,m as l,a,x as g,h as i,b as c,F as e,g as u,y as f,q as _,o as k,B as v,v as Ik}from"../../chunks/vendor-6b77c823.js";import{T as Fo}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-abef54e3.js";import{C as Se}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Z}from"../../chunks/IconCopyLink-7a11ce68.js";function Lk(B){let h,z,b,P,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),P=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var T=a(h);z=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(T,"CODE",{});var $=a(b);P=i($,"Module"),$.forEach(t),x=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,h,T),e(h,z),e(h,b),e(b,P),e(h,x)},d(w){w&&t(h)}}}function Gk(B){let h,z,b,P,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),P=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var T=a(h);z=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(T,"CODE",{});var $=a(b);P=i($,"Module"),$.forEach(t),x=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,h,T),e(h,z),e(h,b),e(b,P),e(h,x)},d(w){w&&t(h)}}}function Nk(B){let h,z,b,P,x,w,T,$,Oe,me,q,Pe,ae,Ae,re,ie,Ie,Ce,N,O,xe,H,j,S,Le,Y,ee,Ge,D,Ne,De,A,ge,de,Me,te,K,Ue,We,U,Be,oe,V;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),b=d(),P=n("ul"),x=n("li"),w=r("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),$=n("li"),Oe=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=d(),q=n("p"),Pe=r("This second option is useful when using "),ae=n("code"),Ae=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=n("code"),Ie=r("model(inputs)"),Ce=r("."),N=d(),O=n("p"),xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),H=d(),j=n("ul"),S=n("li"),Le=r("a single Tensor with "),Y=n("code"),ee=r("input_ids"),Ge=r(" only and nothing else: "),D=n("code"),Ne=r("model(input_ids)"),De=d(),A=n("li"),ge=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),Me=r("model([input_ids, attention_mask])"),te=r(" or "),K=n("code"),Ue=r("model([input_ids, attention_mask, token_type_ids])"),We=d(),U=n("li"),Be=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=n("code"),V=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){h=s(y,"P",{});var F=a(h);z=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),b=l(y),P=s(y,"UL",{});var ze=a(P);x=s(ze,"LI",{});var mt=a(x);w=i(mt,"having all inputs as keyword arguments (like PyTorch models), or"),mt.forEach(t),T=l(ze),$=s(ze,"LI",{});var $e=a($);Oe=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),ze.forEach(t),me=l(y),q=s(y,"P",{});var Q=a(q);Pe=i(Q,"This second option is useful when using "),ae=s(Q,"CODE",{});var gt=a(ae);Ae=i(gt,"tf.keras.Model.fit"),gt.forEach(t),re=i(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=s(Q,"CODE",{});var Ke=a(ie);Ie=i(Ke,"model(inputs)"),Ke.forEach(t),Ce=i(Q,"."),Q.forEach(t),N=l(y),O=s(y,"P",{});var le=a(O);xe=i(le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),le.forEach(t),H=l(y),j=s(y,"UL",{});var I=a(j);S=s(I,"LI",{});var J=a(S);Le=i(J,"a single Tensor with "),Y=s(J,"CODE",{});var Fe=a(Y);ee=i(Fe,"input_ids"),Fe.forEach(t),Ge=i(J," only and nothing else: "),D=s(J,"CODE",{});var ft=a(D);Ne=i(ft,"model(input_ids)"),ft.forEach(t),J.forEach(t),De=l(I),A=s(I,"LI",{});var X=a(A);ge=i(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(X,"CODE",{});var _t=a(de);Me=i(_t,"model([input_ids, attention_mask])"),_t.forEach(t),te=i(X," or "),K=s(X,"CODE",{});var Qe=a(K);Ue=i(Qe,"model([input_ids, attention_mask, token_type_ids])"),Qe.forEach(t),X.forEach(t),We=l(I),U=s(I,"LI",{});var R=a(U);Be=i(R,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=s(R,"CODE",{});var kt=a(oe);V=i(kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),kt.forEach(t),R.forEach(t),I.forEach(t)},m(y,F){u(y,h,F),e(h,z),u(y,b,F),u(y,P,F),e(P,x),e(x,w),e(P,T),e(P,$),e($,Oe),u(y,me,F),u(y,q,F),e(q,Pe),e(q,ae),e(ae,Ae),e(q,re),e(q,ie),e(ie,Ie),e(q,Ce),u(y,N,F),u(y,O,F),e(O,xe),u(y,H,F),u(y,j,F),e(j,S),e(S,Le),e(S,Y),e(Y,ee),e(S,Ge),e(S,D),e(D,Ne),e(j,De),e(j,A),e(A,ge),e(A,de),e(de,Me),e(A,te),e(A,K),e(K,Ue),e(j,We),e(j,U),e(U,Be),e(U,oe),e(oe,V)},d(y){y&&t(h),y&&t(b),y&&t(P),y&&t(me),y&&t(q),y&&t(N),y&&t(O),y&&t(H),y&&t(j)}}}function Dk(B){let h,z,b,P,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),P=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var T=a(h);z=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(T,"CODE",{});var $=a(b);P=i($,"Module"),$.forEach(t),x=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,h,T),e(h,z),e(h,b),e(b,P),e(h,x)},d(w){w&&t(h)}}}function Uk(B){let h,z,b,P,x,w,T,$,Oe,me,q,Pe,ae,Ae,re,ie,Ie,Ce,N,O,xe,H,j,S,Le,Y,ee,Ge,D,Ne,De,A,ge,de,Me,te,K,Ue,We,U,Be,oe,V;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),b=d(),P=n("ul"),x=n("li"),w=r("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),$=n("li"),Oe=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=d(),q=n("p"),Pe=r("This second option is useful when using "),ae=n("code"),Ae=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=n("code"),Ie=r("model(inputs)"),Ce=r("."),N=d(),O=n("p"),xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),H=d(),j=n("ul"),S=n("li"),Le=r("a single Tensor with "),Y=n("code"),ee=r("input_ids"),Ge=r(" only and nothing else: "),D=n("code"),Ne=r("model(input_ids)"),De=d(),A=n("li"),ge=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),Me=r("model([input_ids, attention_mask])"),te=r(" or "),K=n("code"),Ue=r("model([input_ids, attention_mask, token_type_ids])"),We=d(),U=n("li"),Be=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=n("code"),V=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){h=s(y,"P",{});var F=a(h);z=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),b=l(y),P=s(y,"UL",{});var ze=a(P);x=s(ze,"LI",{});var mt=a(x);w=i(mt,"having all inputs as keyword arguments (like PyTorch models), or"),mt.forEach(t),T=l(ze),$=s(ze,"LI",{});var $e=a($);Oe=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),ze.forEach(t),me=l(y),q=s(y,"P",{});var Q=a(q);Pe=i(Q,"This second option is useful when using "),ae=s(Q,"CODE",{});var gt=a(ae);Ae=i(gt,"tf.keras.Model.fit"),gt.forEach(t),re=i(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=s(Q,"CODE",{});var Ke=a(ie);Ie=i(Ke,"model(inputs)"),Ke.forEach(t),Ce=i(Q,"."),Q.forEach(t),N=l(y),O=s(y,"P",{});var le=a(O);xe=i(le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),le.forEach(t),H=l(y),j=s(y,"UL",{});var I=a(j);S=s(I,"LI",{});var J=a(S);Le=i(J,"a single Tensor with "),Y=s(J,"CODE",{});var Fe=a(Y);ee=i(Fe,"input_ids"),Fe.forEach(t),Ge=i(J," only and nothing else: "),D=s(J,"CODE",{});var ft=a(D);Ne=i(ft,"model(input_ids)"),ft.forEach(t),J.forEach(t),De=l(I),A=s(I,"LI",{});var X=a(A);ge=i(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(X,"CODE",{});var _t=a(de);Me=i(_t,"model([input_ids, attention_mask])"),_t.forEach(t),te=i(X," or "),K=s(X,"CODE",{});var Qe=a(K);Ue=i(Qe,"model([input_ids, attention_mask, token_type_ids])"),Qe.forEach(t),X.forEach(t),We=l(I),U=s(I,"LI",{});var R=a(U);Be=i(R,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=s(R,"CODE",{});var kt=a(oe);V=i(kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),kt.forEach(t),R.forEach(t),I.forEach(t)},m(y,F){u(y,h,F),e(h,z),u(y,b,F),u(y,P,F),e(P,x),e(x,w),e(P,T),e(P,$),e($,Oe),u(y,me,F),u(y,q,F),e(q,Pe),e(q,ae),e(ae,Ae),e(q,re),e(q,ie),e(ie,Ie),e(q,Ce),u(y,N,F),u(y,O,F),e(O,xe),u(y,H,F),u(y,j,F),e(j,S),e(S,Le),e(S,Y),e(Y,ee),e(S,Ge),e(S,D),e(D,Ne),e(j,De),e(j,A),e(A,ge),e(A,de),e(de,Me),e(A,te),e(A,K),e(K,Ue),e(j,We),e(j,U),e(U,Be),e(U,oe),e(oe,V)},d(y){y&&t(h),y&&t(b),y&&t(P),y&&t(me),y&&t(q),y&&t(N),y&&t(O),y&&t(H),y&&t(j)}}}function Wk(B){let h,z,b,P,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),P=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var T=a(h);z=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(T,"CODE",{});var $=a(b);P=i($,"Module"),$.forEach(t),x=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,h,T),e(h,z),e(h,b),e(b,P),e(h,x)},d(w){w&&t(h)}}}function Bk(B){let h,z,b,P,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),P=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var T=a(h);z=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(T,"CODE",{});var $=a(b);P=i($,"Module"),$.forEach(t),x=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,h,T),e(h,z),e(h,b),e(b,P),e(h,x)},d(w){w&&t(h)}}}function Vk(B){let h,z,b,P,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),P=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var T=a(h);z=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(T,"CODE",{});var $=a(b);P=i($,"Module"),$.forEach(t),x=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,h,T),e(h,z),e(h,b),e(b,P),e(h,x)},d(w){w&&t(h)}}}function Rk(B){let h,z,b,P,x,w,T,$,Oe,me,q,Pe,ae,Ae,re,ie,Ie,Ce,N,O,xe,H,j,S,Le,Y,ee,Ge,D,Ne,De,A,ge,de,Me,te,K,Ue,We,U,Be,oe,V,y,F,ze,mt,$e,Q,gt,Ke,le,I,J,Fe,ft,X,_t,Qe,R,kt,qo,Yd,el,ca,tl,ol,Ci,fe,ua,nl,sl,pa,al,rl,ha,il,dl,Eo,ll,Co,cl,ul,pl,Bt,Mo,hl,ml,jo,gl,fl,Mi,vt,Vt,ma,So,_l,ga,kl,ji,Je,Rt,Oo,vl,yl,Ao,bl,Tl,wl,fa,Pl,xl,_a,zl,Si,yt,Ht,ka,Io,$l,va,Fl,Oi,_e,ya,ba,ql,El,Ta,xs,Cl,zs,Ml,jl,Lo,wa,Sl,Ol,bt,Pa,Al,Il,xa,Ll,Gl,Go,Nl,za,Dl,Ul,Wl,$a,Ve,Bl,Fa,Vl,Rl,qa,Hl,Kl,Ea,Ql,Jl,Xl,Ca,Tt,Zl,No,Yl,ec,Ma,tc,oc,Ai,wt,Kt,ja,Do,nc,Sa,sc,Ii,Uo,Li,Pt,Qt,Oa,Wo,ac,Aa,rc,Gi,ce,Bo,ic,xt,dc,$s,lc,cc,Vo,uc,pc,hc,zt,mc,Fs,gc,fc,qs,_c,kc,vc,Ia,yc,bc,Ro,Ni,$t,Jt,La,Ho,Tc,Ga,wc,Di,Xt,Pc,Na,xc,zc,Ui,W,Ko,$c,Qo,Fc,Jo,qc,Ec,Cc,Xo,Mc,Es,jc,Sc,Oc,je,Zo,Ac,Yo,Ic,Da,Lc,Gc,Nc,en,Cs,Dc,Ua,Uc,Wc,tn,Bc,Wa,Vc,Rc,Hc,Ba,Kc,Qc,Zt,on,Jc,Va,Xc,Zc,Yt,nn,Yc,Ra,eu,tu,eo,sn,ou,Ha,nu,Wi,Ft,to,Ka,an,su,Qa,au,Bi,ue,rn,ru,qt,iu,Ja,du,lu,dn,cu,uu,pu,ln,hu,Ms,mu,gu,fu,Xe,cn,_u,Xa,ku,vu,un,js,yu,Za,bu,Tu,pn,wu,Ya,Pu,xu,zu,oo,hn,$u,er,Fu,Vi,Et,no,tr,mn,qu,or,Eu,Ri,qe,gn,Cu,fn,Mu,Ss,ju,Su,Ou,_n,Au,kn,Iu,Lu,Gu,ke,vn,Nu,Ct,Du,Os,Uu,Wu,nr,Bu,Vu,Ru,so,Hu,sr,Ku,Qu,yn,Hi,Mt,ao,ar,bn,Ju,rr,Xu,Ki,Ee,Tn,Zu,wn,Yu,As,ep,tp,op,Pn,np,xn,sp,ap,rp,ve,zn,ip,jt,dp,Is,lp,cp,ir,up,pp,hp,ro,mp,dr,gp,fp,$n,Qi,St,io,lr,Fn,_p,cr,kp,Ji,Ot,qn,vp,Ze,En,yp,ur,bp,Tp,Cn,Xi,At,lo,pr,Mn,wp,hr,Pp,Zi,pe,jn,xp,Sn,zp,Ls,$p,Fp,qp,On,Ep,An,Cp,Mp,jp,co,Sp,ye,In,Op,It,Ap,Gs,Ip,Lp,mr,Gp,Np,Dp,uo,Up,gr,Wp,Bp,Ln,Yi,Lt,po,fr,Gn,Vp,_r,Rp,ed,he,Nn,Hp,Dn,Kp,Ns,Qp,Jp,Xp,Un,Zp,Wn,Yp,eh,th,ho,oh,be,Bn,nh,Gt,sh,Ds,ah,rh,kr,ih,dh,lh,mo,ch,vr,uh,ph,Vn,td,Nt,go,yr,Rn,hh,br,mh,od,L,Hn,gh,Kn,fh,Us,_h,kh,vh,Qn,yh,Jn,bh,Th,wh,Tr,Ph,xh,Re,wr,Xn,zh,$h,Pr,Zn,Fh,qh,xr,Yn,Eh,Ch,zr,es,Mh,jh,Te,ts,Sh,Dt,Oh,$r,Ah,Ih,Fr,Lh,Gh,Nh,fo,Dh,qr,Uh,Wh,os,Bh,Ye,ns,Vh,Er,Rh,Hh,ss,Kh,et,as,Qh,Cr,Jh,Xh,rs,nd,Ut,_o,Mr,is,Zh,jr,Yh,sd,G,ds,em,ls,tm,Ws,om,nm,sm,cs,am,us,rm,im,dm,Sr,lm,cm,He,Or,ps,um,pm,Ar,hs,hm,mm,Ir,ms,gm,fm,Lr,gs,_m,km,E,fs,vm,Wt,ym,Gr,bm,Tm,Nr,wm,Pm,xm,ko,zm,Dr,$m,Fm,Ur,Wr,Br,Vr,qm,Em,Rr,Hr,Kr,Qr,Cm,Mm,Jr,Xr,Zr,Yr,jm,Sm,ei,ti,_s,vo,yo,oi,ks,Om,ni,Am,Im,si,Lm,Gm,ai,Nm,Dm,ri,ii,di,li,Um,Wm,ci,ui,pi,hi,Bm,Vm,mi,gi,fi,_i,Rm,Hm,ki,vi,yi,bi,Km,Qm,tt,vs,Jm,Ti,Xm,Zm,ys,Ym,ot,bs,eg,wi,tg,og,Ts,ad;return w=new Z({}),H=new Z({}),Fe=new Z({}),So=new Z({}),Io=new Z({}),Do=new Z({}),Uo=new Se({props:{code:`from transformers import PegasusForConditionalGeneration, PegasusTokenizer
import torch

src_text = [
    """ PG&E stated it scheduled the blackouts in response to forecasts for high winds amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."""
]

model_name = "google/pegasus-xsum"
device = "cuda" if torch.cuda.is_available() else "cpu"
tokenizer = PegasusTokenizer.from_pretrained(model_name)
model = PegasusForConditionalGeneration.from_pretrained(model_name).to(device)
batch = tokenizer(src_text, truncation=True, padding="longest", return_tensors="pt").to(device)
translated = model.generate(**batch)
tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=True)
assert (
    tgt_text[0]
    == "California's largest electricity provider has turned off power to hundreds of thousands of customers."
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusForConditionalGeneration, PegasusTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&quot;&quot; PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;&quot;&quot;</span>
<span class="hljs-meta">... </span>]

<span class="hljs-meta">... </span>model_name = <span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>
<span class="hljs-meta">... </span>device = <span class="hljs-string">&quot;cuda&quot;</span> <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;cpu&quot;</span>
<span class="hljs-meta">... </span>tokenizer = PegasusTokenizer.from_pretrained(model_name)
<span class="hljs-meta">... </span>model = PegasusForConditionalGeneration.from_pretrained(model_name).to(device)
<span class="hljs-meta">... </span>batch = tokenizer(src_text, truncation=<span class="hljs-literal">True</span>, padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).to(device)
<span class="hljs-meta">... </span>translated = model.generate(**batch)
<span class="hljs-meta">... </span>tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">... </span><span class="hljs-keyword">assert</span> (
<span class="hljs-meta">... </span>    tgt_text[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    == <span class="hljs-string">&quot;California&#x27;s largest electricity provider has turned off power to hundreds of thousands of customers.&quot;</span>
<span class="hljs-meta">... </span>)`}}),Wo=new Z({}),Bo=new C({props:{name:"class transformers.PegasusConfig",anchor:"transformers.PegasusConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 0"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"forced_eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/configuration_pegasus.py#L29",parametersDescription:[{anchor:"transformers.PegasusConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the PEGASUS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusModel">PegasusModel</a> or <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.TFPegasusModel">TFPegasusModel</a>.`,name:"vocab_size"},{anchor:"transformers.PegasusConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.PegasusConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.PegasusConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.PegasusConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.PegasusConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.PegasusConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.PegasusConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.PegasusConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.PegasusConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.PegasusConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.PegasusConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.PegasusConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.PegasusConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.PegasusConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.PegasusConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.PegasusConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.PegasusConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Ro=new Se({props:{code:`from transformers import PegasusModel, PegasusConfig

# Initializing a PEGASUS google/pegasus-large style configuration
configuration = PegasusConfig()

# Initializing a model from the google/pegasus-large style configuration
model = PegasusModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusModel, PegasusConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a PEGASUS google/pegasus-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = PegasusConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the google/pegasus-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ho=new Z({}),Ko=new C({props:{name:"class transformers.PegasusTokenizer",anchor:"transformers.PegasusTokenizer",parameters:[{name:"vocab_file",val:""},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py#L41",parametersDescription:[{anchor:"transformers.PegasusTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.PegasusTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PegasusTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.PegasusTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PegasusTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_2&gt;&quot;</code>) &#x2014;
The token used for masking single token values. This is the token used when training this model with masked
language modeling (MLM). This is the token that the PEGASUS encoder will try to predict during pretraining.
It corresponds to <em>[MASK2]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive
Summarization</a>.`,name:"mask_token"},{anchor:"transformers.PegasusTokenizer.mask_token_sent",description:`<strong>mask_token_sent</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_1&gt;&quot;</code>) &#x2014;
The token used for masking whole target sentences. This is the token used when training this model with gap
sentences generation (GSG). This is the sentence that the PEGASUS decoder will try to predict during
pretraining. It corresponds to <em>[MASK1]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for
Abstractive Summarization</a>.`,name:"mask_token_sent"},{anchor:"transformers.PegasusTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer. If no additional_special_tokens are provided <mask_2> and
<unk_2, \u2026, unk_102> are used as additional special tokens corresponding to the <a href="https://github.com/google-research/pegasus/blob/939830367bcf411193d2b5eca2f2f90f3f9260ca/pegasus/ops/pretrain_parsing_ops.cc#L66" rel="nofollow">original PEGASUS
tokenizer</a>
that uses the tokens 2 - 104 only for pretraining</unk_2,></mask_2>`,name:"additional_special_tokens"},{anchor:"transformers.PegasusTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}]}}),Zo=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py#L255",parametersDescription:[{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),on=new C({props:{name:"convert_tokens_to_string",anchor:"transformers.PegasusTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py#L229"}}),nn=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py#L244"}}),sn=new C({props:{name:"num_special_tokens_to_add",anchor:"transformers.PegasusTokenizer.num_special_tokens_to_add",parameters:[{name:"pair",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py#L234"}}),an=new Z({}),rn=new C({props:{name:"class transformers.PegasusTokenizerFast",anchor:"transformers.PegasusTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L51",parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.PegasusTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PegasusTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.PegasusTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PegasusTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_2&gt;&quot;</code>) &#x2014;
The token used for masking single token values. This is the token used when training this model with masked
language modeling (MLM). This is the token that the PEGASUS encoder will try to predict during pretraining.
It corresponds to <em>[MASK2]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive
Summarization</a>.`,name:"mask_token"},{anchor:"transformers.PegasusTokenizerFast.mask_token_sent",description:`<strong>mask_token_sent</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask_1&gt;&quot;</code>) &#x2014;
The token used for masking whole target sentences. This is the token used when training this model with gap
sentences generation (GSG). This is the sentence that the PEGASUS decoder will try to predict during
pretraining. It corresponds to <em>[MASK1]</em> in <a href="https://arxiv.org/pdf/1912.08777.pdf" rel="nofollow">PEGASUS: Pre-training with Extracted Gap-sentences for
Abstractive Summarization</a>.`,name:"mask_token_sent"},{anchor:"transformers.PegasusTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer. If no additional_special_tokens are provided <mask_2> and
<unk_2, \u2026, unk_102> are used as additional special tokens corresponding to the <a href="https://github.com/google-research/pegasus/blob/939830367bcf411193d2b5eca2f2f90f3f9260ca/pegasus/ops/pretrain_parsing_ops.cc#L66" rel="nofollow">original PEGASUS
tokenizer</a>
that uses the tokens 2 - 104 only for pretraining</unk_2,></mask_2>`,name:"additional_special_tokens"}]}}),cn=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L175",parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hn=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L164"}}),mn=new Z({}),gn=new C({props:{name:"class transformers.PegasusModel",anchor:"transformers.PegasusModel",parameters:[{name:"config",val:": PegasusConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_pegasus.py#L1133",parametersDescription:[{anchor:"transformers.PegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new C({props:{name:"forward",anchor:"transformers.PegasusModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_pegasus.py#L1183",parametersDescription:[{anchor:"transformers.PegasusModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.PegasusModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PegasusModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PegasusModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PegasusModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PegasusModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PegasusModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.PegasusModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PegasusModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PegasusModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new Fo({props:{$$slots:{default:[Lk]},$$scope:{ctx:B}}}),yn=new Se({props:{code:`from transformers import PegasusTokenizer, PegasusModel

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = PegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_inputs = tokenizer("Studies show that", return_tensors="pt")
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">4</span>, <span class="hljs-number">1024</span>]`}}),bn=new Z({}),Tn=new C({props:{name:"class transformers.PegasusForConditionalGeneration",anchor:"transformers.PegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_pegasus.py#L1282",parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zn=new C({props:{name:"forward",anchor:"transformers.PegasusForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_pegasus.py#L1350",parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PegasusForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PegasusForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PegasusForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PegasusForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new Fo({props:{$$slots:{default:[Gk]},$$scope:{ctx:B}}}),$n=new Se({props:{code:`from transformers import PegasusTokenizer, PegasusForConditionalGeneration

model = PegasusForConditionalGeneration.from_pretrained("google/pegasus-xsum")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-xsum")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"])
tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;California&#x27;s largest electricity provider has turned off power to hundreds of thousands of customers.&quot;</span>`}}),Fn=new Z({}),qn=new C({props:{name:"class transformers.PegasusForCausalLM",anchor:"transformers.PegasusForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_pegasus.py#L1489"}}),En=new C({props:{name:"forward",anchor:"transformers.PegasusForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_pegasus.py#L1542",parametersDescription:[{anchor:"transformers.PegasusForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.PegasusForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.PegasusForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PegasusForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PegasusForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PegasusForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.PegasusForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.PegasusForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cn=new Se({props:{code:`from transformers import PegasusTokenizer, PegasusForCausalLM

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = PegasusForCausalLM.from_pretrained("google/pegasus-large", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),Mn=new Z({}),jn=new C({props:{name:"class transformers.TFPegasusModel",anchor:"transformers.TFPegasusModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1165",parametersDescription:[{anchor:"transformers.TFPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),co=new Fo({props:{$$slots:{default:[Nk]},$$scope:{ctx:B}}}),In=new C({props:{name:"call",anchor:"transformers.TFPegasusModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1177",parametersDescription:[{anchor:"transformers.TFPegasusModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFPegasusModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFPegasusModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFPegasusModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFPegasusModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFPegasusModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFPegasusModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation output_attentions (<code>bool</code>,
<em>optional</em>): Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code>
under returned tensors for more detail. This argument can be used only in eager mode, in graph mode the
value in the config will be used instead.`,name:"use_cache"},{anchor:"transformers.TFPegasusModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFPegasusModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFPegasusModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new Fo({props:{$$slots:{default:[Dk]},$$scope:{ctx:B}}}),Ln=new Se({props:{code:`from transformers import PegasusTokenizer, TFPegasusModel
import tensorflow as tf

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = TFPegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, TFPegasusModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Gn=new Z({}),Nn=new C({props:{name:"class transformers.TFPegasusForConditionalGeneration",anchor:"transformers.TFPegasusForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1252",parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new Fo({props:{$$slots:{default:[Uk]},$$scope:{ctx:B}}}),Bn=new C({props:{name:"call",anchor:"transformers.TFPegasusForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1285",parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation output_attentions (<code>bool</code>,
<em>optional</em>): Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code>
under returned tensors for more detail. This argument can be used only in eager mode, in graph mode the
value in the config will be used instead.`,name:"use_cache"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mo=new Fo({props:{$$slots:{default:[Wk]},$$scope:{ctx:B}}}),Vn=new Se({props:{code:`from transformers import PegasusTokenizer, TFPegasusForConditionalGeneration

model = TFPegasusForConditionalGeneration.from_pretrained("google/pegasus-xsum")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-xsum")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(input_ids)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, TFPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Rn=new Z({}),Hn=new C({props:{name:"class transformers.FlaxPegasusModel",anchor:"transformers.FlaxPegasusModel",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1216",parametersDescription:[{anchor:"transformers.FlaxPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),ts=new C({props:{name:"__call__",anchor:"transformers.FlaxPegasusModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1151",parametersDescription:[{anchor:"transformers.FlaxPegasusModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new Fo({props:{$$slots:{default:[Bk]},$$scope:{ctx:B}}}),os=new Se({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusModel

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = FlaxPegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ns=new C({props:{name:"encode",anchor:"transformers.FlaxPegasusModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L974",parametersDescription:[{anchor:"transformers.FlaxPegasusModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ss=new Se({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),as=new C({props:{name:"decode",anchor:"transformers.FlaxPegasusModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1037",parametersDescription:[{anchor:"transformers.FlaxPegasusModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxPegasusModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxPegasusModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxPegasusModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rs=new Se({props:{code:`import jax.numpy as jnp
from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),is=new Z({}),ds=new C({props:{name:"class transformers.FlaxPegasusForConditionalGeneration",anchor:"transformers.FlaxPegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1303",parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),fs=new C({props:{name:"__call__",anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1151",parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new Fo({props:{$$slots:{default:[Vk]},$$scope:{ctx:B}}}),ks=new Z({}),vs=new C({props:{name:"encode",anchor:"transformers.FlaxPegasusForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L974",parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ys=new Se({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),bs=new C({props:{name:"decode",anchor:"transformers.FlaxPegasusForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1307",parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ts=new Se({props:{code:`import jax.numpy as jnp
from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=n("meta"),z=d(),b=n("h1"),P=n("a"),x=n("span"),m(w.$$.fragment),T=d(),$=n("span"),Oe=r("Pegasus"),me=d(),q=n("p"),Pe=n("strong"),ae=r("DISCLAIMER:"),Ae=r(" If you see something strange, file a "),re=n("a"),ie=r("Github Issue"),Ie=r(`
and assign @patrickvonplaten.`),Ce=d(),N=n("h2"),O=n("a"),xe=n("span"),m(H.$$.fragment),j=d(),S=n("span"),Le=r("Overview"),Y=d(),ee=n("p"),Ge=r("The Pegasus model was proposed in "),D=n("a"),Ne=r("PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),De=r(" by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),A=d(),ge=n("p"),de=r("According to the abstract,"),Me=d(),te=n("ul"),K=n("li"),Ue=r(`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),We=d(),U=n("li"),Be=r("Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),oe=d(),V=n("p"),y=r("This model was contributed by "),F=n("a"),ze=r("sshleifer"),mt=r(". The Authors\u2019 code can be found "),$e=n("a"),Q=r("here"),gt=r("."),Ke=d(),le=n("h2"),I=n("a"),J=n("span"),m(Fe.$$.fragment),ft=d(),X=n("span"),_t=r("Checkpoints"),Qe=d(),R=n("p"),kt=r("All the "),qo=n("a"),Yd=r("checkpoints"),el=r(` are fine-tuned for summarization, besides
`),ca=n("em"),tl=r("pegasus-large"),ol=r(", whence the other checkpoints are fine-tuned:"),Ci=d(),fe=n("ul"),ua=n("li"),nl=r("Each checkpoint is 2.2 GB on disk and 568M parameters."),sl=d(),pa=n("li"),al=r("FP16 is not supported (help/ideas on this appreciated!)."),rl=d(),ha=n("li"),il=r("Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),dl=d(),Eo=n("li"),ll=r("Full replication results and correctly pre-processed data can be found in this "),Co=n("a"),cl=r("Issue"),ul=r("."),pl=d(),Bt=n("li"),Mo=n("a"),hl=r("Distilled checkpoints"),ml=r(" are described in this "),jo=n("a"),gl=r("paper"),fl=r("."),Mi=d(),vt=n("h3"),Vt=n("a"),ma=n("span"),m(So.$$.fragment),_l=d(),ga=n("span"),kl=r("Examples"),ji=d(),Je=n("ul"),Rt=n("li"),Oo=n("a"),vl=r("Script"),yl=r(` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),Ao=n("a"),bl=r("examples/pytorch/summarization/"),Tl=r("."),wl=d(),fa=n("li"),Pl=r("FP16 is not supported (help/ideas on this appreciated!)."),xl=d(),_a=n("li"),zl=r("The adafactor optimizer is recommended for pegasus fine-tuning."),Si=d(),yt=n("h2"),Ht=n("a"),ka=n("span"),m(Io.$$.fragment),$l=d(),va=n("span"),Fl=r("Implementation Notes"),Oi=d(),_e=n("ul"),ya=n("li"),ba=n("p"),ql=r("All models are transformer encoder-decoders with 16 layers in each component."),El=d(),Ta=n("li"),xs=n("p"),Cl=r("The implementation is completely inherited from "),zs=n("a"),Ml=r("BartForConditionalGeneration"),jl=d(),Lo=n("li"),wa=n("p"),Sl=r("Some key configuration differences:"),Ol=d(),bt=n("ul"),Pa=n("li"),Al=r("static, sinusoidal position embeddings"),Il=d(),xa=n("li"),Ll=r("the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),Gl=d(),Go=n("li"),Nl=r("more beams are used ("),za=n("code"),Dl=r("num_beams=8"),Ul=r(")"),Wl=d(),$a=n("li"),Ve=n("p"),Bl=r("All pretrained pegasus checkpoints are the same besides three attributes: "),Fa=n("code"),Vl=r("tokenizer.model_max_length"),Rl=r(` (maximum
input size), `),qa=n("code"),Hl=r("max_length"),Kl=r(" (the maximum number of tokens to generate) and "),Ea=n("code"),Ql=r("length_penalty"),Jl=r("."),Xl=d(),Ca=n("li"),Tt=n("p"),Zl=r("The code to convert checkpoints trained in the author\u2019s "),No=n("a"),Yl=r("repo"),ec=r(` can be
found in `),Ma=n("code"),tc=r("convert_pegasus_tf_to_pytorch.py"),oc=r("."),Ai=d(),wt=n("h2"),Kt=n("a"),ja=n("span"),m(Do.$$.fragment),nc=d(),Sa=n("span"),sc=r("Usage Example"),Ii=d(),m(Uo.$$.fragment),Li=d(),Pt=n("h2"),Qt=n("a"),Oa=n("span"),m(Wo.$$.fragment),ac=d(),Aa=n("span"),rc=r("PegasusConfig"),Gi=d(),ce=n("div"),m(Bo.$$.fragment),ic=d(),xt=n("p"),dc=r("This is the configuration class to store the configuration of a "),$s=n("a"),lc=r("PegasusModel"),cc=r(`. It is used to instantiate an
PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PEGASUS
`),Vo=n("a"),uc=r("google/pegasus-large"),pc=r(" architecture."),hc=d(),zt=n("p"),mc=r("Configuration objects inherit from "),Fs=n("a"),gc=r("PretrainedConfig"),fc=r(` and can be used to control the model outputs. Read the
documentation from `),qs=n("a"),_c=r("PretrainedConfig"),kc=r(" for more information."),vc=d(),Ia=n("p"),yc=r("Example:"),bc=d(),m(Ro.$$.fragment),Ni=d(),$t=n("h2"),Jt=n("a"),La=n("span"),m(Ho.$$.fragment),Tc=d(),Ga=n("span"),wc=r("PegasusTokenizer"),Di=d(),Xt=n("p"),Pc=r("warning: "),Na=n("code"),xc=r("add_tokens"),zc=r(" does not work at the moment."),Ui=d(),W=n("div"),m(Ko.$$.fragment),$c=d(),Qo=n("p"),Fc=r("Construct a PEGASUS tokenizer. Based on "),Jo=n("a"),qc=r("SentencePiece"),Ec=r("."),Cc=d(),Xo=n("p"),Mc=r("This tokenizer inherits from "),Es=n("a"),jc=r("PreTrainedTokenizer"),Sc=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Oc=d(),je=n("div"),m(Zo.$$.fragment),Ac=d(),Yo=n("p"),Ic=r(`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Da=n("code"),Lc=r("X"),Gc=r(" represents the sequence:"),Nc=d(),en=n("ul"),Cs=n("li"),Dc=r("single sequence: "),Ua=n("code"),Uc=r("X </s>"),Wc=d(),tn=n("li"),Bc=r("pair of sequences: "),Wa=n("code"),Vc=r("A B </s>"),Rc=r(" (not intended use)"),Hc=d(),Ba=n("p"),Kc=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Qc=d(),Zt=n("div"),m(on.$$.fragment),Jc=d(),Va=n("p"),Xc=r("Converts a sequence of tokens (string) in a single string."),Zc=d(),Yt=n("div"),m(nn.$$.fragment),Yc=d(),Ra=n("p"),eu=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),tu=d(),eo=n("div"),m(sn.$$.fragment),ou=d(),Ha=n("p"),nu=r("Just EOS"),Wi=d(),Ft=n("h2"),to=n("a"),Ka=n("span"),m(an.$$.fragment),su=d(),Qa=n("span"),au=r("PegasusTokenizerFast"),Bi=d(),ue=n("div"),m(rn.$$.fragment),ru=d(),qt=n("p"),iu=r("Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),Ja=n("em"),du=r("tokenizers"),lu=r(` library). Based on
`),dn=n("a"),cu=r("Unigram"),uu=r("."),pu=d(),ln=n("p"),hu=r("This tokenizer inherits from "),Ms=n("a"),mu=r("PreTrainedTokenizerFast"),gu=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),fu=d(),Xe=n("div"),m(cn.$$.fragment),_u=d(),Xa=n("p"),ku=r("Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),vu=d(),un=n("ul"),js=n("li"),yu=r("single sequence: "),Za=n("code"),bu=r("X </s>"),Tu=d(),pn=n("li"),wu=r("pair of sequences: "),Ya=n("code"),Pu=r("A B </s>"),xu=r(" (not intended use)"),zu=d(),oo=n("div"),m(hn.$$.fragment),$u=d(),er=n("p"),Fu=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),Vi=d(),Et=n("h2"),no=n("a"),tr=n("span"),m(mn.$$.fragment),qu=d(),or=n("span"),Eu=r("PegasusModel"),Ri=d(),qe=n("div"),m(gn.$$.fragment),Cu=d(),fn=n("p"),Mu=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ss=n("a"),ju=r("PreTrainedModel"),Su=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ou=d(),_n=n("p"),Au=r("This model is also a PyTorch "),kn=n("a"),Iu=r("torch.nn.Module"),Lu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gu=d(),ke=n("div"),m(vn.$$.fragment),Nu=d(),Ct=n("p"),Du=r("The "),Os=n("a"),Uu=r("PegasusModel"),Wu=r(" forward method, overrides the "),nr=n("code"),Bu=r("__call__"),Vu=r(" special method."),Ru=d(),m(so.$$.fragment),Hu=d(),sr=n("p"),Ku=r("Example:"),Qu=d(),m(yn.$$.fragment),Hi=d(),Mt=n("h2"),ao=n("a"),ar=n("span"),m(bn.$$.fragment),Ju=d(),rr=n("span"),Xu=r("PegasusForConditionalGeneration"),Ki=d(),Ee=n("div"),m(Tn.$$.fragment),Zu=d(),wn=n("p"),Yu=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),As=n("a"),ep=r("PreTrainedModel"),tp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),op=d(),Pn=n("p"),np=r("This model is also a PyTorch "),xn=n("a"),sp=r("torch.nn.Module"),ap=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rp=d(),ve=n("div"),m(zn.$$.fragment),ip=d(),jt=n("p"),dp=r("The "),Is=n("a"),lp=r("PegasusForConditionalGeneration"),cp=r(" forward method, overrides the "),ir=n("code"),up=r("__call__"),pp=r(" special method."),hp=d(),m(ro.$$.fragment),mp=d(),dr=n("p"),gp=r("Summarization example:"),fp=d(),m($n.$$.fragment),Qi=d(),St=n("h2"),io=n("a"),lr=n("span"),m(Fn.$$.fragment),_p=d(),cr=n("span"),kp=r("PegasusForCausalLM"),Ji=d(),Ot=n("div"),m(qn.$$.fragment),vp=d(),Ze=n("div"),m(En.$$.fragment),yp=d(),ur=n("p"),bp=r("Example:"),Tp=d(),m(Cn.$$.fragment),Xi=d(),At=n("h2"),lo=n("a"),pr=n("span"),m(Mn.$$.fragment),wp=d(),hr=n("span"),Pp=r("TFPegasusModel"),Zi=d(),pe=n("div"),m(jn.$$.fragment),xp=d(),Sn=n("p"),zp=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ls=n("a"),$p=r("TFPreTrainedModel"),Fp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qp=d(),On=n("p"),Ep=r("This model is also a "),An=n("a"),Cp=r("tf.keras.Model"),Mp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jp=d(),m(co.$$.fragment),Sp=d(),ye=n("div"),m(In.$$.fragment),Op=d(),It=n("p"),Ap=r("The "),Gs=n("a"),Ip=r("TFPegasusModel"),Lp=r(" forward method, overrides the "),mr=n("code"),Gp=r("__call__"),Np=r(" special method."),Dp=d(),m(uo.$$.fragment),Up=d(),gr=n("p"),Wp=r("Example:"),Bp=d(),m(Ln.$$.fragment),Yi=d(),Lt=n("h2"),po=n("a"),fr=n("span"),m(Gn.$$.fragment),Vp=d(),_r=n("span"),Rp=r("TFPegasusForConditionalGeneration"),ed=d(),he=n("div"),m(Nn.$$.fragment),Hp=d(),Dn=n("p"),Kp=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ns=n("a"),Qp=r("TFPreTrainedModel"),Jp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp=d(),Un=n("p"),Zp=r("This model is also a "),Wn=n("a"),Yp=r("tf.keras.Model"),eh=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),th=d(),m(ho.$$.fragment),oh=d(),be=n("div"),m(Bn.$$.fragment),nh=d(),Gt=n("p"),sh=r("The "),Ds=n("a"),ah=r("TFPegasusForConditionalGeneration"),rh=r(" forward method, overrides the "),kr=n("code"),ih=r("__call__"),dh=r(" special method."),lh=d(),m(mo.$$.fragment),ch=d(),vr=n("p"),uh=r("Summarization example:"),ph=d(),m(Vn.$$.fragment),td=d(),Nt=n("h2"),go=n("a"),yr=n("span"),m(Rn.$$.fragment),hh=d(),br=n("span"),mh=r("FlaxPegasusModel"),od=d(),L=n("div"),m(Hn.$$.fragment),gh=d(),Kn=n("p"),fh=r(`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Us=n("a"),_h=r("FlaxPreTrainedModel"),kh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh=d(),Qn=n("p"),yh=r(`This model is also a Flax Linen
`),Jn=n("a"),bh=r("flax.nn.Module"),Th=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wh=d(),Tr=n("p"),Ph=r("Finally, this model supports inherent JAX features such as:"),xh=d(),Re=n("ul"),wr=n("li"),Xn=n("a"),zh=r("Just-In-Time (JIT) compilation"),$h=d(),Pr=n("li"),Zn=n("a"),Fh=r("Automatic Differentiation"),qh=d(),xr=n("li"),Yn=n("a"),Eh=r("Vectorization"),Ch=d(),zr=n("li"),es=n("a"),Mh=r("Parallelization"),jh=d(),Te=n("div"),m(ts.$$.fragment),Sh=d(),Dt=n("p"),Oh=r("The "),$r=n("code"),Ah=r("FlaxPegasusPreTrainedModel"),Ih=r("forward method, overrides the "),Fr=n("code"),Lh=r("__call__"),Gh=r(" special method."),Nh=d(),m(fo.$$.fragment),Dh=d(),qr=n("p"),Uh=r("Example:"),Wh=d(),m(os.$$.fragment),Bh=d(),Ye=n("div"),m(ns.$$.fragment),Vh=d(),Er=n("p"),Rh=r("Example:"),Hh=d(),m(ss.$$.fragment),Kh=d(),et=n("div"),m(as.$$.fragment),Qh=d(),Cr=n("p"),Jh=r("Example:"),Xh=d(),m(rs.$$.fragment),nd=d(),Ut=n("h2"),_o=n("a"),Mr=n("span"),m(is.$$.fragment),Zh=d(),jr=n("span"),Yh=r("FlaxPegasusForConditionalGeneration"),sd=d(),G=n("div"),m(ds.$$.fragment),em=d(),ls=n("p"),tm=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ws=n("a"),om=r("FlaxPreTrainedModel"),nm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm=d(),cs=n("p"),am=r(`This model is also a Flax Linen
`),us=n("a"),rm=r("flax.nn.Module"),im=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),dm=d(),Sr=n("p"),lm=r("Finally, this model supports inherent JAX features such as:"),cm=d(),He=n("ul"),Or=n("li"),ps=n("a"),um=r("Just-In-Time (JIT) compilation"),pm=d(),Ar=n("li"),hs=n("a"),hm=r("Automatic Differentiation"),mm=d(),Ir=n("li"),ms=n("a"),gm=r("Vectorization"),fm=d(),Lr=n("li"),gs=n("a"),_m=r("Parallelization"),km=d(),E=n("div"),m(fs.$$.fragment),vm=d(),Wt=n("p"),ym=r("The "),Gr=n("code"),bm=r("FlaxPegasusPreTrainedModel"),Tm=r("forward method, overrides the "),Nr=n("code"),wm=r("__call__"),Pm=r(" special method."),xm=d(),m(ko.$$.fragment),zm=d(),Dr=n("p"),$m=r("Summarization example:"),Fm=d(),Ur=n("blockquote"),Wr=n("blockquote"),Br=n("blockquote"),Vr=n("p"),qm=r("from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),Em=d(),Rr=n("blockquote"),Hr=n("blockquote"),Kr=n("blockquote"),Qr=n("p"),Cm=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),Mm=d(),Jr=n("blockquote"),Xr=n("blockquote"),Zr=n("blockquote"),Yr=n("p"),jm=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Sm=d(),ei=n("blockquote"),ti=n("blockquote"),_s=n("blockquote"),vo=n("h1"),yo=n("a"),oi=n("span"),m(ks.$$.fragment),Om=d(),ni=n("span"),Am=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Im=d(),si=n("p"),Lm=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Gm=d(),ai=n("p"),Nm=r("Mask filling example:"),Dm=d(),ri=n("blockquote"),ii=n("blockquote"),di=n("blockquote"),li=n("p"),Um=r(`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019) >>> TXT = \u201CMy friends are <mask> but they eat too many
carbs.\u201D`),Wm=d(),ci=n("blockquote"),ui=n("blockquote"),pi=n("blockquote"),hi=n("p"),Bm=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> input_ids =
tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Vm=d(),mi=n("blockquote"),gi=n("blockquote"),fi=n("blockquote"),_i=n("p"),Rm=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Hm=d(),ki=n("blockquote"),vi=n("blockquote"),yi=n("blockquote"),bi=n("p"),Km=r("tokenizer.decode(predictions).split()"),Qm=d(),tt=n("div"),m(vs.$$.fragment),Jm=d(),Ti=n("p"),Xm=r("Example:"),Zm=d(),m(ys.$$.fragment),Ym=d(),ot=n("div"),m(bs.$$.fragment),eg=d(),wi=n("p"),tg=r("Example:"),og=d(),m(Ts.$$.fragment),this.h()},l(o){const p=Ak('[data-svelte="svelte-1phssyn"]',document.head);h=s(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(o),b=s(o,"H1",{class:!0});var ws=a(b);P=s(ws,"A",{id:!0,class:!0,href:!0});var Pi=a(P);x=s(Pi,"SPAN",{});var xi=a(x);g(w.$$.fragment,xi),xi.forEach(t),Pi.forEach(t),T=l(ws),$=s(ws,"SPAN",{});var zi=a($);Oe=i(zi,"Pegasus"),zi.forEach(t),ws.forEach(t),me=l(o),q=s(o,"P",{});var bo=a(q);Pe=s(bo,"STRONG",{});var $i=a(Pe);ae=i($i,"DISCLAIMER:"),$i.forEach(t),Ae=i(bo," If you see something strange, file a "),re=s(bo,"A",{href:!0,rel:!0});var Fi=a(re);ie=i(Fi,"Github Issue"),Fi.forEach(t),Ie=i(bo,`
and assign @patrickvonplaten.`),bo.forEach(t),Ce=l(o),N=s(o,"H2",{class:!0});var Ps=a(N);O=s(Ps,"A",{id:!0,class:!0,href:!0});var rg=a(O);xe=s(rg,"SPAN",{});var ig=a(xe);g(H.$$.fragment,ig),ig.forEach(t),rg.forEach(t),j=l(Ps),S=s(Ps,"SPAN",{});var dg=a(S);Le=i(dg,"Overview"),dg.forEach(t),Ps.forEach(t),Y=l(o),ee=s(o,"P",{});var rd=a(ee);Ge=i(rd,"The Pegasus model was proposed in "),D=s(rd,"A",{href:!0,rel:!0});var lg=a(D);Ne=i(lg,"PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),lg.forEach(t),De=i(rd," by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),rd.forEach(t),A=l(o),ge=s(o,"P",{});var cg=a(ge);de=i(cg,"According to the abstract,"),cg.forEach(t),Me=l(o),te=s(o,"UL",{});var id=a(te);K=s(id,"LI",{});var ug=a(K);Ue=i(ug,`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),ug.forEach(t),We=l(id),U=s(id,"LI",{});var pg=a(U);Be=i(pg,"Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),pg.forEach(t),id.forEach(t),oe=l(o),V=s(o,"P",{});var Bs=a(V);y=i(Bs,"This model was contributed by "),F=s(Bs,"A",{href:!0,rel:!0});var hg=a(F);ze=i(hg,"sshleifer"),hg.forEach(t),mt=i(Bs,". The Authors\u2019 code can be found "),$e=s(Bs,"A",{href:!0,rel:!0});var mg=a($e);Q=i(mg,"here"),mg.forEach(t),gt=i(Bs,"."),Bs.forEach(t),Ke=l(o),le=s(o,"H2",{class:!0});var dd=a(le);I=s(dd,"A",{id:!0,class:!0,href:!0});var gg=a(I);J=s(gg,"SPAN",{});var fg=a(J);g(Fe.$$.fragment,fg),fg.forEach(t),gg.forEach(t),ft=l(dd),X=s(dd,"SPAN",{});var _g=a(X);_t=i(_g,"Checkpoints"),_g.forEach(t),dd.forEach(t),Qe=l(o),R=s(o,"P",{});var Vs=a(R);kt=i(Vs,"All the "),qo=s(Vs,"A",{href:!0,rel:!0});var kg=a(qo);Yd=i(kg,"checkpoints"),kg.forEach(t),el=i(Vs,` are fine-tuned for summarization, besides
`),ca=s(Vs,"EM",{});var vg=a(ca);tl=i(vg,"pegasus-large"),vg.forEach(t),ol=i(Vs,", whence the other checkpoints are fine-tuned:"),Vs.forEach(t),Ci=l(o),fe=s(o,"UL",{});var nt=a(fe);ua=s(nt,"LI",{});var yg=a(ua);nl=i(yg,"Each checkpoint is 2.2 GB on disk and 568M parameters."),yg.forEach(t),sl=l(nt),pa=s(nt,"LI",{});var bg=a(pa);al=i(bg,"FP16 is not supported (help/ideas on this appreciated!)."),bg.forEach(t),rl=l(nt),ha=s(nt,"LI",{});var Tg=a(ha);il=i(Tg,"Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),Tg.forEach(t),dl=l(nt),Eo=s(nt,"LI",{});var ld=a(Eo);ll=i(ld,"Full replication results and correctly pre-processed data can be found in this "),Co=s(ld,"A",{href:!0,rel:!0});var wg=a(Co);cl=i(wg,"Issue"),wg.forEach(t),ul=i(ld,"."),ld.forEach(t),pl=l(nt),Bt=s(nt,"LI",{});var qi=a(Bt);Mo=s(qi,"A",{href:!0,rel:!0});var Pg=a(Mo);hl=i(Pg,"Distilled checkpoints"),Pg.forEach(t),ml=i(qi," are described in this "),jo=s(qi,"A",{href:!0,rel:!0});var xg=a(jo);gl=i(xg,"paper"),xg.forEach(t),fl=i(qi,"."),qi.forEach(t),nt.forEach(t),Mi=l(o),vt=s(o,"H3",{class:!0});var cd=a(vt);Vt=s(cd,"A",{id:!0,class:!0,href:!0});var zg=a(Vt);ma=s(zg,"SPAN",{});var $g=a(ma);g(So.$$.fragment,$g),$g.forEach(t),zg.forEach(t),_l=l(cd),ga=s(cd,"SPAN",{});var Fg=a(ga);kl=i(Fg,"Examples"),Fg.forEach(t),cd.forEach(t),ji=l(o),Je=s(o,"UL",{});var Rs=a(Je);Rt=s(Rs,"LI",{});var Ei=a(Rt);Oo=s(Ei,"A",{href:!0,rel:!0});var qg=a(Oo);vl=i(qg,"Script"),qg.forEach(t),yl=i(Ei,` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),Ao=s(Ei,"A",{href:!0,rel:!0});var Eg=a(Ao);bl=i(Eg,"examples/pytorch/summarization/"),Eg.forEach(t),Tl=i(Ei,"."),Ei.forEach(t),wl=l(Rs),fa=s(Rs,"LI",{});var Cg=a(fa);Pl=i(Cg,"FP16 is not supported (help/ideas on this appreciated!)."),Cg.forEach(t),xl=l(Rs),_a=s(Rs,"LI",{});var Mg=a(_a);zl=i(Mg,"The adafactor optimizer is recommended for pegasus fine-tuning."),Mg.forEach(t),Rs.forEach(t),Si=l(o),yt=s(o,"H2",{class:!0});var ud=a(yt);Ht=s(ud,"A",{id:!0,class:!0,href:!0});var jg=a(Ht);ka=s(jg,"SPAN",{});var Sg=a(ka);g(Io.$$.fragment,Sg),Sg.forEach(t),jg.forEach(t),$l=l(ud),va=s(ud,"SPAN",{});var Og=a(va);Fl=i(Og,"Implementation Notes"),Og.forEach(t),ud.forEach(t),Oi=l(o),_e=s(o,"UL",{});var st=a(_e);ya=s(st,"LI",{});var Ag=a(ya);ba=s(Ag,"P",{});var Ig=a(ba);ql=i(Ig,"All models are transformer encoder-decoders with 16 layers in each component."),Ig.forEach(t),Ag.forEach(t),El=l(st),Ta=s(st,"LI",{});var Lg=a(Ta);xs=s(Lg,"P",{});var ng=a(xs);Cl=i(ng,"The implementation is completely inherited from "),zs=s(ng,"A",{href:!0});var Gg=a(zs);Ml=i(Gg,"BartForConditionalGeneration"),Gg.forEach(t),ng.forEach(t),Lg.forEach(t),jl=l(st),Lo=s(st,"LI",{});var pd=a(Lo);wa=s(pd,"P",{});var Ng=a(wa);Sl=i(Ng,"Some key configuration differences:"),Ng.forEach(t),Ol=l(pd),bt=s(pd,"UL",{});var Hs=a(bt);Pa=s(Hs,"LI",{});var Dg=a(Pa);Al=i(Dg,"static, sinusoidal position embeddings"),Dg.forEach(t),Il=l(Hs),xa=s(Hs,"LI",{});var Ug=a(xa);Ll=i(Ug,"the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),Ug.forEach(t),Gl=l(Hs),Go=s(Hs,"LI",{});var hd=a(Go);Nl=i(hd,"more beams are used ("),za=s(hd,"CODE",{});var Wg=a(za);Dl=i(Wg,"num_beams=8"),Wg.forEach(t),Ul=i(hd,")"),hd.forEach(t),Hs.forEach(t),pd.forEach(t),Wl=l(st),$a=s(st,"LI",{});var Bg=a($a);Ve=s(Bg,"P",{});var To=a(Ve);Bl=i(To,"All pretrained pegasus checkpoints are the same besides three attributes: "),Fa=s(To,"CODE",{});var Vg=a(Fa);Vl=i(Vg,"tokenizer.model_max_length"),Vg.forEach(t),Rl=i(To,` (maximum
input size), `),qa=s(To,"CODE",{});var Rg=a(qa);Hl=i(Rg,"max_length"),Rg.forEach(t),Kl=i(To," (the maximum number of tokens to generate) and "),Ea=s(To,"CODE",{});var Hg=a(Ea);Ql=i(Hg,"length_penalty"),Hg.forEach(t),Jl=i(To,"."),To.forEach(t),Bg.forEach(t),Xl=l(st),Ca=s(st,"LI",{});var Kg=a(Ca);Tt=s(Kg,"P",{});var Ks=a(Tt);Zl=i(Ks,"The code to convert checkpoints trained in the author\u2019s "),No=s(Ks,"A",{href:!0,rel:!0});var Qg=a(No);Yl=i(Qg,"repo"),Qg.forEach(t),ec=i(Ks,` can be
found in `),Ma=s(Ks,"CODE",{});var Jg=a(Ma);tc=i(Jg,"convert_pegasus_tf_to_pytorch.py"),Jg.forEach(t),oc=i(Ks,"."),Ks.forEach(t),Kg.forEach(t),st.forEach(t),Ai=l(o),wt=s(o,"H2",{class:!0});var md=a(wt);Kt=s(md,"A",{id:!0,class:!0,href:!0});var Xg=a(Kt);ja=s(Xg,"SPAN",{});var Zg=a(ja);g(Do.$$.fragment,Zg),Zg.forEach(t),Xg.forEach(t),nc=l(md),Sa=s(md,"SPAN",{});var Yg=a(Sa);sc=i(Yg,"Usage Example"),Yg.forEach(t),md.forEach(t),Ii=l(o),g(Uo.$$.fragment,o),Li=l(o),Pt=s(o,"H2",{class:!0});var gd=a(Pt);Qt=s(gd,"A",{id:!0,class:!0,href:!0});var ef=a(Qt);Oa=s(ef,"SPAN",{});var tf=a(Oa);g(Wo.$$.fragment,tf),tf.forEach(t),ef.forEach(t),ac=l(gd),Aa=s(gd,"SPAN",{});var of=a(Aa);rc=i(of,"PegasusConfig"),of.forEach(t),gd.forEach(t),Gi=l(o),ce=s(o,"DIV",{class:!0});var at=a(ce);g(Bo.$$.fragment,at),ic=l(at),xt=s(at,"P",{});var Qs=a(xt);dc=i(Qs,"This is the configuration class to store the configuration of a "),$s=s(Qs,"A",{href:!0});var nf=a($s);lc=i(nf,"PegasusModel"),nf.forEach(t),cc=i(Qs,`. It is used to instantiate an
PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PEGASUS
`),Vo=s(Qs,"A",{href:!0,rel:!0});var sf=a(Vo);uc=i(sf,"google/pegasus-large"),sf.forEach(t),pc=i(Qs," architecture."),Qs.forEach(t),hc=l(at),zt=s(at,"P",{});var Js=a(zt);mc=i(Js,"Configuration objects inherit from "),Fs=s(Js,"A",{href:!0});var af=a(Fs);gc=i(af,"PretrainedConfig"),af.forEach(t),fc=i(Js,` and can be used to control the model outputs. Read the
documentation from `),qs=s(Js,"A",{href:!0});var rf=a(qs);_c=i(rf,"PretrainedConfig"),rf.forEach(t),kc=i(Js," for more information."),Js.forEach(t),vc=l(at),Ia=s(at,"P",{});var df=a(Ia);yc=i(df,"Example:"),df.forEach(t),bc=l(at),g(Ro.$$.fragment,at),at.forEach(t),Ni=l(o),$t=s(o,"H2",{class:!0});var fd=a($t);Jt=s(fd,"A",{id:!0,class:!0,href:!0});var lf=a(Jt);La=s(lf,"SPAN",{});var cf=a(La);g(Ho.$$.fragment,cf),cf.forEach(t),lf.forEach(t),Tc=l(fd),Ga=s(fd,"SPAN",{});var uf=a(Ga);wc=i(uf,"PegasusTokenizer"),uf.forEach(t),fd.forEach(t),Di=l(o),Xt=s(o,"P",{});var _d=a(Xt);Pc=i(_d,"warning: "),Na=s(_d,"CODE",{});var pf=a(Na);xc=i(pf,"add_tokens"),pf.forEach(t),zc=i(_d," does not work at the moment."),_d.forEach(t),Ui=l(o),W=s(o,"DIV",{class:!0});var we=a(W);g(Ko.$$.fragment,we),$c=l(we),Qo=s(we,"P",{});var kd=a(Qo);Fc=i(kd,"Construct a PEGASUS tokenizer. Based on "),Jo=s(kd,"A",{href:!0,rel:!0});var hf=a(Jo);qc=i(hf,"SentencePiece"),hf.forEach(t),Ec=i(kd,"."),kd.forEach(t),Cc=l(we),Xo=s(we,"P",{});var vd=a(Xo);Mc=i(vd,"This tokenizer inherits from "),Es=s(vd,"A",{href:!0});var mf=a(Es);jc=i(mf,"PreTrainedTokenizer"),mf.forEach(t),Sc=i(vd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),vd.forEach(t),Oc=l(we),je=s(we,"DIV",{class:!0});var wo=a(je);g(Zo.$$.fragment,wo),Ac=l(wo),Yo=s(wo,"P",{});var yd=a(Yo);Ic=i(yd,`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Da=s(yd,"CODE",{});var gf=a(Da);Lc=i(gf,"X"),gf.forEach(t),Gc=i(yd," represents the sequence:"),yd.forEach(t),Nc=l(wo),en=s(wo,"UL",{});var bd=a(en);Cs=s(bd,"LI",{});var sg=a(Cs);Dc=i(sg,"single sequence: "),Ua=s(sg,"CODE",{});var ff=a(Ua);Uc=i(ff,"X </s>"),ff.forEach(t),sg.forEach(t),Wc=l(bd),tn=s(bd,"LI",{});var Td=a(tn);Bc=i(Td,"pair of sequences: "),Wa=s(Td,"CODE",{});var _f=a(Wa);Vc=i(_f,"A B </s>"),_f.forEach(t),Rc=i(Td," (not intended use)"),Td.forEach(t),bd.forEach(t),Hc=l(wo),Ba=s(wo,"P",{});var kf=a(Ba);Kc=i(kf,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),kf.forEach(t),wo.forEach(t),Qc=l(we),Zt=s(we,"DIV",{class:!0});var wd=a(Zt);g(on.$$.fragment,wd),Jc=l(wd),Va=s(wd,"P",{});var vf=a(Va);Xc=i(vf,"Converts a sequence of tokens (string) in a single string."),vf.forEach(t),wd.forEach(t),Zc=l(we),Yt=s(we,"DIV",{class:!0});var Pd=a(Yt);g(nn.$$.fragment,Pd),Yc=l(Pd),Ra=s(Pd,"P",{});var yf=a(Ra);eu=i(yf,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),yf.forEach(t),Pd.forEach(t),tu=l(we),eo=s(we,"DIV",{class:!0});var xd=a(eo);g(sn.$$.fragment,xd),ou=l(xd),Ha=s(xd,"P",{});var bf=a(Ha);nu=i(bf,"Just EOS"),bf.forEach(t),xd.forEach(t),we.forEach(t),Wi=l(o),Ft=s(o,"H2",{class:!0});var zd=a(Ft);to=s(zd,"A",{id:!0,class:!0,href:!0});var Tf=a(to);Ka=s(Tf,"SPAN",{});var wf=a(Ka);g(an.$$.fragment,wf),wf.forEach(t),Tf.forEach(t),su=l(zd),Qa=s(zd,"SPAN",{});var Pf=a(Qa);au=i(Pf,"PegasusTokenizerFast"),Pf.forEach(t),zd.forEach(t),Bi=l(o),ue=s(o,"DIV",{class:!0});var rt=a(ue);g(rn.$$.fragment,rt),ru=l(rt),qt=s(rt,"P",{});var Xs=a(qt);iu=i(Xs,"Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),Ja=s(Xs,"EM",{});var xf=a(Ja);du=i(xf,"tokenizers"),xf.forEach(t),lu=i(Xs,` library). Based on
`),dn=s(Xs,"A",{href:!0,rel:!0});var zf=a(dn);cu=i(zf,"Unigram"),zf.forEach(t),uu=i(Xs,"."),Xs.forEach(t),pu=l(rt),ln=s(rt,"P",{});var $d=a(ln);hu=i($d,"This tokenizer inherits from "),Ms=s($d,"A",{href:!0});var $f=a(Ms);mu=i($f,"PreTrainedTokenizerFast"),$f.forEach(t),gu=i($d,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),$d.forEach(t),fu=l(rt),Xe=s(rt,"DIV",{class:!0});var Zs=a(Xe);g(cn.$$.fragment,Zs),_u=l(Zs),Xa=s(Zs,"P",{});var Ff=a(Xa);ku=i(Ff,"Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),Ff.forEach(t),vu=l(Zs),un=s(Zs,"UL",{});var Fd=a(un);js=s(Fd,"LI",{});var ag=a(js);yu=i(ag,"single sequence: "),Za=s(ag,"CODE",{});var qf=a(Za);bu=i(qf,"X </s>"),qf.forEach(t),ag.forEach(t),Tu=l(Fd),pn=s(Fd,"LI",{});var qd=a(pn);wu=i(qd,"pair of sequences: "),Ya=s(qd,"CODE",{});var Ef=a(Ya);Pu=i(Ef,"A B </s>"),Ef.forEach(t),xu=i(qd," (not intended use)"),qd.forEach(t),Fd.forEach(t),Zs.forEach(t),zu=l(rt),oo=s(rt,"DIV",{class:!0});var Ed=a(oo);g(hn.$$.fragment,Ed),$u=l(Ed),er=s(Ed,"P",{});var Cf=a(er);Fu=i(Cf,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),Cf.forEach(t),Ed.forEach(t),rt.forEach(t),Vi=l(o),Et=s(o,"H2",{class:!0});var Cd=a(Et);no=s(Cd,"A",{id:!0,class:!0,href:!0});var Mf=a(no);tr=s(Mf,"SPAN",{});var jf=a(tr);g(mn.$$.fragment,jf),jf.forEach(t),Mf.forEach(t),qu=l(Cd),or=s(Cd,"SPAN",{});var Sf=a(or);Eu=i(Sf,"PegasusModel"),Sf.forEach(t),Cd.forEach(t),Ri=l(o),qe=s(o,"DIV",{class:!0});var Po=a(qe);g(gn.$$.fragment,Po),Cu=l(Po),fn=s(Po,"P",{});var Md=a(fn);Mu=i(Md,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ss=s(Md,"A",{href:!0});var Of=a(Ss);ju=i(Of,"PreTrainedModel"),Of.forEach(t),Su=i(Md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Md.forEach(t),Ou=l(Po),_n=s(Po,"P",{});var jd=a(_n);Au=i(jd,"This model is also a PyTorch "),kn=s(jd,"A",{href:!0,rel:!0});var Af=a(kn);Iu=i(Af,"torch.nn.Module"),Af.forEach(t),Lu=i(jd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jd.forEach(t),Gu=l(Po),ke=s(Po,"DIV",{class:!0});var it=a(ke);g(vn.$$.fragment,it),Nu=l(it),Ct=s(it,"P",{});var Ys=a(Ct);Du=i(Ys,"The "),Os=s(Ys,"A",{href:!0});var If=a(Os);Uu=i(If,"PegasusModel"),If.forEach(t),Wu=i(Ys," forward method, overrides the "),nr=s(Ys,"CODE",{});var Lf=a(nr);Bu=i(Lf,"__call__"),Lf.forEach(t),Vu=i(Ys," special method."),Ys.forEach(t),Ru=l(it),g(so.$$.fragment,it),Hu=l(it),sr=s(it,"P",{});var Gf=a(sr);Ku=i(Gf,"Example:"),Gf.forEach(t),Qu=l(it),g(yn.$$.fragment,it),it.forEach(t),Po.forEach(t),Hi=l(o),Mt=s(o,"H2",{class:!0});var Sd=a(Mt);ao=s(Sd,"A",{id:!0,class:!0,href:!0});var Nf=a(ao);ar=s(Nf,"SPAN",{});var Df=a(ar);g(bn.$$.fragment,Df),Df.forEach(t),Nf.forEach(t),Ju=l(Sd),rr=s(Sd,"SPAN",{});var Uf=a(rr);Xu=i(Uf,"PegasusForConditionalGeneration"),Uf.forEach(t),Sd.forEach(t),Ki=l(o),Ee=s(o,"DIV",{class:!0});var xo=a(Ee);g(Tn.$$.fragment,xo),Zu=l(xo),wn=s(xo,"P",{});var Od=a(wn);Yu=i(Od,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),As=s(Od,"A",{href:!0});var Wf=a(As);ep=i(Wf,"PreTrainedModel"),Wf.forEach(t),tp=i(Od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Od.forEach(t),op=l(xo),Pn=s(xo,"P",{});var Ad=a(Pn);np=i(Ad,"This model is also a PyTorch "),xn=s(Ad,"A",{href:!0,rel:!0});var Bf=a(xn);sp=i(Bf,"torch.nn.Module"),Bf.forEach(t),ap=i(Ad,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ad.forEach(t),rp=l(xo),ve=s(xo,"DIV",{class:!0});var dt=a(ve);g(zn.$$.fragment,dt),ip=l(dt),jt=s(dt,"P",{});var ea=a(jt);dp=i(ea,"The "),Is=s(ea,"A",{href:!0});var Vf=a(Is);lp=i(Vf,"PegasusForConditionalGeneration"),Vf.forEach(t),cp=i(ea," forward method, overrides the "),ir=s(ea,"CODE",{});var Rf=a(ir);up=i(Rf,"__call__"),Rf.forEach(t),pp=i(ea," special method."),ea.forEach(t),hp=l(dt),g(ro.$$.fragment,dt),mp=l(dt),dr=s(dt,"P",{});var Hf=a(dr);gp=i(Hf,"Summarization example:"),Hf.forEach(t),fp=l(dt),g($n.$$.fragment,dt),dt.forEach(t),xo.forEach(t),Qi=l(o),St=s(o,"H2",{class:!0});var Id=a(St);io=s(Id,"A",{id:!0,class:!0,href:!0});var Kf=a(io);lr=s(Kf,"SPAN",{});var Qf=a(lr);g(Fn.$$.fragment,Qf),Qf.forEach(t),Kf.forEach(t),_p=l(Id),cr=s(Id,"SPAN",{});var Jf=a(cr);kp=i(Jf,"PegasusForCausalLM"),Jf.forEach(t),Id.forEach(t),Ji=l(o),Ot=s(o,"DIV",{class:!0});var Ld=a(Ot);g(qn.$$.fragment,Ld),vp=l(Ld),Ze=s(Ld,"DIV",{class:!0});var ta=a(Ze);g(En.$$.fragment,ta),yp=l(ta),ur=s(ta,"P",{});var Xf=a(ur);bp=i(Xf,"Example:"),Xf.forEach(t),Tp=l(ta),g(Cn.$$.fragment,ta),ta.forEach(t),Ld.forEach(t),Xi=l(o),At=s(o,"H2",{class:!0});var Gd=a(At);lo=s(Gd,"A",{id:!0,class:!0,href:!0});var Zf=a(lo);pr=s(Zf,"SPAN",{});var Yf=a(pr);g(Mn.$$.fragment,Yf),Yf.forEach(t),Zf.forEach(t),wp=l(Gd),hr=s(Gd,"SPAN",{});var e_=a(hr);Pp=i(e_,"TFPegasusModel"),e_.forEach(t),Gd.forEach(t),Zi=l(o),pe=s(o,"DIV",{class:!0});var lt=a(pe);g(jn.$$.fragment,lt),xp=l(lt),Sn=s(lt,"P",{});var Nd=a(Sn);zp=i(Nd,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ls=s(Nd,"A",{href:!0});var t_=a(Ls);$p=i(t_,"TFPreTrainedModel"),t_.forEach(t),Fp=i(Nd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nd.forEach(t),qp=l(lt),On=s(lt,"P",{});var Dd=a(On);Ep=i(Dd,"This model is also a "),An=s(Dd,"A",{href:!0,rel:!0});var o_=a(An);Cp=i(o_,"tf.keras.Model"),o_.forEach(t),Mp=i(Dd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dd.forEach(t),jp=l(lt),g(co.$$.fragment,lt),Sp=l(lt),ye=s(lt,"DIV",{class:!0});var ct=a(ye);g(In.$$.fragment,ct),Op=l(ct),It=s(ct,"P",{});var oa=a(It);Ap=i(oa,"The "),Gs=s(oa,"A",{href:!0});var n_=a(Gs);Ip=i(n_,"TFPegasusModel"),n_.forEach(t),Lp=i(oa," forward method, overrides the "),mr=s(oa,"CODE",{});var s_=a(mr);Gp=i(s_,"__call__"),s_.forEach(t),Np=i(oa," special method."),oa.forEach(t),Dp=l(ct),g(uo.$$.fragment,ct),Up=l(ct),gr=s(ct,"P",{});var a_=a(gr);Wp=i(a_,"Example:"),a_.forEach(t),Bp=l(ct),g(Ln.$$.fragment,ct),ct.forEach(t),lt.forEach(t),Yi=l(o),Lt=s(o,"H2",{class:!0});var Ud=a(Lt);po=s(Ud,"A",{id:!0,class:!0,href:!0});var r_=a(po);fr=s(r_,"SPAN",{});var i_=a(fr);g(Gn.$$.fragment,i_),i_.forEach(t),r_.forEach(t),Vp=l(Ud),_r=s(Ud,"SPAN",{});var d_=a(_r);Rp=i(d_,"TFPegasusForConditionalGeneration"),d_.forEach(t),Ud.forEach(t),ed=l(o),he=s(o,"DIV",{class:!0});var ut=a(he);g(Nn.$$.fragment,ut),Hp=l(ut),Dn=s(ut,"P",{});var Wd=a(Dn);Kp=i(Wd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ns=s(Wd,"A",{href:!0});var l_=a(Ns);Qp=i(l_,"TFPreTrainedModel"),l_.forEach(t),Jp=i(Wd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wd.forEach(t),Xp=l(ut),Un=s(ut,"P",{});var Bd=a(Un);Zp=i(Bd,"This model is also a "),Wn=s(Bd,"A",{href:!0,rel:!0});var c_=a(Wn);Yp=i(c_,"tf.keras.Model"),c_.forEach(t),eh=i(Bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bd.forEach(t),th=l(ut),g(ho.$$.fragment,ut),oh=l(ut),be=s(ut,"DIV",{class:!0});var pt=a(be);g(Bn.$$.fragment,pt),nh=l(pt),Gt=s(pt,"P",{});var na=a(Gt);sh=i(na,"The "),Ds=s(na,"A",{href:!0});var u_=a(Ds);ah=i(u_,"TFPegasusForConditionalGeneration"),u_.forEach(t),rh=i(na," forward method, overrides the "),kr=s(na,"CODE",{});var p_=a(kr);ih=i(p_,"__call__"),p_.forEach(t),dh=i(na," special method."),na.forEach(t),lh=l(pt),g(mo.$$.fragment,pt),ch=l(pt),vr=s(pt,"P",{});var h_=a(vr);uh=i(h_,"Summarization example:"),h_.forEach(t),ph=l(pt),g(Vn.$$.fragment,pt),pt.forEach(t),ut.forEach(t),td=l(o),Nt=s(o,"H2",{class:!0});var Vd=a(Nt);go=s(Vd,"A",{id:!0,class:!0,href:!0});var m_=a(go);yr=s(m_,"SPAN",{});var g_=a(yr);g(Rn.$$.fragment,g_),g_.forEach(t),m_.forEach(t),hh=l(Vd),br=s(Vd,"SPAN",{});var f_=a(br);mh=i(f_,"FlaxPegasusModel"),f_.forEach(t),Vd.forEach(t),od=l(o),L=s(o,"DIV",{class:!0});var ne=a(L);g(Hn.$$.fragment,ne),gh=l(ne),Kn=s(ne,"P",{});var Rd=a(Kn);fh=i(Rd,`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Us=s(Rd,"A",{href:!0});var __=a(Us);_h=i(__,"FlaxPreTrainedModel"),__.forEach(t),kh=i(Rd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rd.forEach(t),vh=l(ne),Qn=s(ne,"P",{});var Hd=a(Qn);yh=i(Hd,`This model is also a Flax Linen
`),Jn=s(Hd,"A",{href:!0,rel:!0});var k_=a(Jn);bh=i(k_,"flax.nn.Module"),k_.forEach(t),Th=i(Hd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Hd.forEach(t),wh=l(ne),Tr=s(ne,"P",{});var v_=a(Tr);Ph=i(v_,"Finally, this model supports inherent JAX features such as:"),v_.forEach(t),xh=l(ne),Re=s(ne,"UL",{});var zo=a(Re);wr=s(zo,"LI",{});var y_=a(wr);Xn=s(y_,"A",{href:!0,rel:!0});var b_=a(Xn);zh=i(b_,"Just-In-Time (JIT) compilation"),b_.forEach(t),y_.forEach(t),$h=l(zo),Pr=s(zo,"LI",{});var T_=a(Pr);Zn=s(T_,"A",{href:!0,rel:!0});var w_=a(Zn);Fh=i(w_,"Automatic Differentiation"),w_.forEach(t),T_.forEach(t),qh=l(zo),xr=s(zo,"LI",{});var P_=a(xr);Yn=s(P_,"A",{href:!0,rel:!0});var x_=a(Yn);Eh=i(x_,"Vectorization"),x_.forEach(t),P_.forEach(t),Ch=l(zo),zr=s(zo,"LI",{});var z_=a(zr);es=s(z_,"A",{href:!0,rel:!0});var $_=a(es);Mh=i($_,"Parallelization"),$_.forEach(t),z_.forEach(t),zo.forEach(t),jh=l(ne),Te=s(ne,"DIV",{class:!0});var ht=a(Te);g(ts.$$.fragment,ht),Sh=l(ht),Dt=s(ht,"P",{});var sa=a(Dt);Oh=i(sa,"The "),$r=s(sa,"CODE",{});var F_=a($r);Ah=i(F_,"FlaxPegasusPreTrainedModel"),F_.forEach(t),Ih=i(sa,"forward method, overrides the "),Fr=s(sa,"CODE",{});var q_=a(Fr);Lh=i(q_,"__call__"),q_.forEach(t),Gh=i(sa," special method."),sa.forEach(t),Nh=l(ht),g(fo.$$.fragment,ht),Dh=l(ht),qr=s(ht,"P",{});var E_=a(qr);Uh=i(E_,"Example:"),E_.forEach(t),Wh=l(ht),g(os.$$.fragment,ht),ht.forEach(t),Bh=l(ne),Ye=s(ne,"DIV",{class:!0});var aa=a(Ye);g(ns.$$.fragment,aa),Vh=l(aa),Er=s(aa,"P",{});var C_=a(Er);Rh=i(C_,"Example:"),C_.forEach(t),Hh=l(aa),g(ss.$$.fragment,aa),aa.forEach(t),Kh=l(ne),et=s(ne,"DIV",{class:!0});var ra=a(et);g(as.$$.fragment,ra),Qh=l(ra),Cr=s(ra,"P",{});var M_=a(Cr);Jh=i(M_,"Example:"),M_.forEach(t),Xh=l(ra),g(rs.$$.fragment,ra),ra.forEach(t),ne.forEach(t),nd=l(o),Ut=s(o,"H2",{class:!0});var Kd=a(Ut);_o=s(Kd,"A",{id:!0,class:!0,href:!0});var j_=a(_o);Mr=s(j_,"SPAN",{});var S_=a(Mr);g(is.$$.fragment,S_),S_.forEach(t),j_.forEach(t),Zh=l(Kd),jr=s(Kd,"SPAN",{});var O_=a(jr);Yh=i(O_,"FlaxPegasusForConditionalGeneration"),O_.forEach(t),Kd.forEach(t),sd=l(o),G=s(o,"DIV",{class:!0});var se=a(G);g(ds.$$.fragment,se),em=l(se),ls=s(se,"P",{});var Qd=a(ls);tm=i(Qd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ws=s(Qd,"A",{href:!0});var A_=a(Ws);om=i(A_,"FlaxPreTrainedModel"),A_.forEach(t),nm=i(Qd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qd.forEach(t),sm=l(se),cs=s(se,"P",{});var Jd=a(cs);am=i(Jd,`This model is also a Flax Linen
`),us=s(Jd,"A",{href:!0,rel:!0});var I_=a(us);rm=i(I_,"flax.nn.Module"),I_.forEach(t),im=i(Jd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Jd.forEach(t),dm=l(se),Sr=s(se,"P",{});var L_=a(Sr);lm=i(L_,"Finally, this model supports inherent JAX features such as:"),L_.forEach(t),cm=l(se),He=s(se,"UL",{});var $o=a(He);Or=s($o,"LI",{});var G_=a(Or);ps=s(G_,"A",{href:!0,rel:!0});var N_=a(ps);um=i(N_,"Just-In-Time (JIT) compilation"),N_.forEach(t),G_.forEach(t),pm=l($o),Ar=s($o,"LI",{});var D_=a(Ar);hs=s(D_,"A",{href:!0,rel:!0});var U_=a(hs);hm=i(U_,"Automatic Differentiation"),U_.forEach(t),D_.forEach(t),mm=l($o),Ir=s($o,"LI",{});var W_=a(Ir);ms=s(W_,"A",{href:!0,rel:!0});var B_=a(ms);gm=i(B_,"Vectorization"),B_.forEach(t),W_.forEach(t),fm=l($o),Lr=s($o,"LI",{});var V_=a(Lr);gs=s(V_,"A",{href:!0,rel:!0});var R_=a(gs);_m=i(R_,"Parallelization"),R_.forEach(t),V_.forEach(t),$o.forEach(t),km=l(se),E=s(se,"DIV",{class:!0});var M=a(E);g(fs.$$.fragment,M),vm=l(M),Wt=s(M,"P",{});var ia=a(Wt);ym=i(ia,"The "),Gr=s(ia,"CODE",{});var H_=a(Gr);bm=i(H_,"FlaxPegasusPreTrainedModel"),H_.forEach(t),Tm=i(ia,"forward method, overrides the "),Nr=s(ia,"CODE",{});var K_=a(Nr);wm=i(K_,"__call__"),K_.forEach(t),Pm=i(ia," special method."),ia.forEach(t),xm=l(M),g(ko.$$.fragment,M),zm=l(M),Dr=s(M,"P",{});var Q_=a(Dr);$m=i(Q_,"Summarization example:"),Q_.forEach(t),Fm=l(M),Ur=s(M,"BLOCKQUOTE",{});var J_=a(Ur);Wr=s(J_,"BLOCKQUOTE",{});var X_=a(Wr);Br=s(X_,"BLOCKQUOTE",{});var Z_=a(Br);Vr=s(Z_,"P",{});var Y_=a(Vr);qm=i(Y_,"from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),Y_.forEach(t),Z_.forEach(t),X_.forEach(t),J_.forEach(t),Em=l(M),Rr=s(M,"BLOCKQUOTE",{});var ek=a(Rr);Hr=s(ek,"BLOCKQUOTE",{});var tk=a(Hr);Kr=s(tk,"BLOCKQUOTE",{});var ok=a(Kr);Qr=s(ok,"P",{});var nk=a(Qr);Cm=i(nk,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),nk.forEach(t),ok.forEach(t),tk.forEach(t),ek.forEach(t),Mm=l(M),Jr=s(M,"BLOCKQUOTE",{});var sk=a(Jr);Xr=s(sk,"BLOCKQUOTE",{});var ak=a(Xr);Zr=s(ak,"BLOCKQUOTE",{});var rk=a(Zr);Yr=s(rk,"P",{});var ik=a(Yr);jm=i(ik,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),ik.forEach(t),rk.forEach(t),ak.forEach(t),sk.forEach(t),Sm=l(M),ei=s(M,"BLOCKQUOTE",{});var dk=a(ei);ti=s(dk,"BLOCKQUOTE",{});var lk=a(ti);_s=s(lk,"BLOCKQUOTE",{});var Xd=a(_s);vo=s(Xd,"H1",{class:!0});var Zd=a(vo);yo=s(Zd,"A",{id:!0,class:!0,href:!0});var ck=a(yo);oi=s(ck,"SPAN",{});var uk=a(oi);g(ks.$$.fragment,uk),uk.forEach(t),ck.forEach(t),Om=l(Zd),ni=s(Zd,"SPAN",{});var pk=a(ni);Am=i(pk,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),pk.forEach(t),Zd.forEach(t),Im=l(Xd),si=s(Xd,"P",{});var hk=a(si);Lm=i(hk,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),hk.forEach(t),Xd.forEach(t),lk.forEach(t),dk.forEach(t),Gm=l(M),ai=s(M,"P",{});var mk=a(ai);Nm=i(mk,"Mask filling example:"),mk.forEach(t),Dm=l(M),ri=s(M,"BLOCKQUOTE",{});var gk=a(ri);ii=s(gk,"BLOCKQUOTE",{});var fk=a(ii);di=s(fk,"BLOCKQUOTE",{});var _k=a(di);li=s(_k,"P",{});var kk=a(li);Um=i(kk,`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019) >>> TXT = \u201CMy friends are <mask> but they eat too many
carbs.\u201D`),kk.forEach(t),_k.forEach(t),fk.forEach(t),gk.forEach(t),Wm=l(M),ci=s(M,"BLOCKQUOTE",{});var vk=a(ci);ui=s(vk,"BLOCKQUOTE",{});var yk=a(ui);pi=s(yk,"BLOCKQUOTE",{});var bk=a(pi);hi=s(bk,"P",{});var Tk=a(hi);Bm=i(Tk,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> input_ids =
tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Tk.forEach(t),bk.forEach(t),yk.forEach(t),vk.forEach(t),Vm=l(M),mi=s(M,"BLOCKQUOTE",{});var wk=a(mi);gi=s(wk,"BLOCKQUOTE",{});var Pk=a(gi);fi=s(Pk,"BLOCKQUOTE",{});var xk=a(fi);_i=s(xk,"P",{});var zk=a(_i);Rm=i(zk,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),zk.forEach(t),xk.forEach(t),Pk.forEach(t),wk.forEach(t),Hm=l(M),ki=s(M,"BLOCKQUOTE",{});var $k=a(ki);vi=s($k,"BLOCKQUOTE",{});var Fk=a(vi);yi=s(Fk,"BLOCKQUOTE",{});var qk=a(yi);bi=s(qk,"P",{});var Ek=a(bi);Km=i(Ek,"tokenizer.decode(predictions).split()"),Ek.forEach(t),qk.forEach(t),Fk.forEach(t),$k.forEach(t),M.forEach(t),Qm=l(se),tt=s(se,"DIV",{class:!0});var da=a(tt);g(vs.$$.fragment,da),Jm=l(da),Ti=s(da,"P",{});var Ck=a(Ti);Xm=i(Ck,"Example:"),Ck.forEach(t),Zm=l(da),g(ys.$$.fragment,da),da.forEach(t),Ym=l(se),ot=s(se,"DIV",{class:!0});var la=a(ot);g(bs.$$.fragment,la),eg=l(la),wi=s(la,"P",{});var Mk=a(wi);tg=i(Mk,"Example:"),Mk.forEach(t),og=l(la),g(Ts.$$.fragment,la),la.forEach(t),se.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Hk)),c(P,"id","pegasus"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#pegasus"),c(b,"class","relative group"),c(re,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),c(re,"rel","nofollow"),c(O,"id","overview"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#overview"),c(N,"class","relative group"),c(D,"href","https://arxiv.org/pdf/1912.08777.pdf"),c(D,"rel","nofollow"),c(F,"href","https://huggingface.co/sshleifer"),c(F,"rel","nofollow"),c($e,"href","https://github.com/google-research/pegasus"),c($e,"rel","nofollow"),c(I,"id","checkpoints"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#checkpoints"),c(le,"class","relative group"),c(qo,"href","https://huggingface.co/models?search=pegasus"),c(qo,"rel","nofollow"),c(Co,"href","https://github.com/huggingface/transformers/issues/6844#issue-689259666"),c(Co,"rel","nofollow"),c(Mo,"href","https://huggingface.co/models?search=distill-pegasus"),c(Mo,"rel","nofollow"),c(jo,"href","https://arxiv.org/abs/2010.13002"),c(jo,"rel","nofollow"),c(Vt,"id","examples"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#examples"),c(vt,"class","relative group"),c(Oo,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/seq2seq-distillation/finetune_pegasus_xsum.sh"),c(Oo,"rel","nofollow"),c(Ao,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),c(Ao,"rel","nofollow"),c(Ht,"id","implementation-notes"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#implementation-notes"),c(yt,"class","relative group"),c(zs,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(No,"href","https://github.com/google-research/pegasus"),c(No,"rel","nofollow"),c(Kt,"id","usage-example"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#usage-example"),c(wt,"class","relative group"),c(Qt,"id","transformers.PegasusConfig"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.PegasusConfig"),c(Pt,"class","relative group"),c($s,"href","/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusModel"),c(Vo,"href","https://huggingface.co/google/pegasus-large"),c(Vo,"rel","nofollow"),c(Fs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(qs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ce,"class","docstring"),c(Jt,"id","transformers.PegasusTokenizer"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.PegasusTokenizer"),c($t,"class","relative group"),c(Jo,"href","https://github.com/google/sentencepiece"),c(Jo,"rel","nofollow"),c(Es,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(je,"class","docstring"),c(Zt,"class","docstring"),c(Yt,"class","docstring"),c(eo,"class","docstring"),c(W,"class","docstring"),c(to,"id","transformers.PegasusTokenizerFast"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.PegasusTokenizerFast"),c(Ft,"class","relative group"),c(dn,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(dn,"rel","nofollow"),c(Ms,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Xe,"class","docstring"),c(oo,"class","docstring"),c(ue,"class","docstring"),c(no,"id","transformers.PegasusModel"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.PegasusModel"),c(Et,"class","relative group"),c(Ss,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(kn,"rel","nofollow"),c(Os,"href","/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusModel"),c(ke,"class","docstring"),c(qe,"class","docstring"),c(ao,"id","transformers.PegasusForConditionalGeneration"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.PegasusForConditionalGeneration"),c(Mt,"class","relative group"),c(As,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xn,"rel","nofollow"),c(Is,"href","/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusForConditionalGeneration"),c(ve,"class","docstring"),c(Ee,"class","docstring"),c(io,"id","transformers.PegasusForCausalLM"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.PegasusForCausalLM"),c(St,"class","relative group"),c(Ze,"class","docstring"),c(Ot,"class","docstring"),c(lo,"id","transformers.TFPegasusModel"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.TFPegasusModel"),c(At,"class","relative group"),c(Ls,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(An,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(An,"rel","nofollow"),c(Gs,"href","/docs/transformers/main/en/model_doc/pegasus#transformers.TFPegasusModel"),c(ye,"class","docstring"),c(pe,"class","docstring"),c(po,"id","transformers.TFPegasusForConditionalGeneration"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.TFPegasusForConditionalGeneration"),c(Lt,"class","relative group"),c(Ns,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wn,"rel","nofollow"),c(Ds,"href","/docs/transformers/main/en/model_doc/pegasus#transformers.TFPegasusForConditionalGeneration"),c(be,"class","docstring"),c(he,"class","docstring"),c(go,"id","transformers.FlaxPegasusModel"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.FlaxPegasusModel"),c(Nt,"class","relative group"),c(Us,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Jn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Jn,"rel","nofollow"),c(Xn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xn,"rel","nofollow"),c(Zn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Zn,"rel","nofollow"),c(Yn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Yn,"rel","nofollow"),c(es,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(es,"rel","nofollow"),c(Te,"class","docstring"),c(Ye,"class","docstring"),c(et,"class","docstring"),c(L,"class","docstring"),c(_o,"id","transformers.FlaxPegasusForConditionalGeneration"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.FlaxPegasusForConditionalGeneration"),c(Ut,"class","relative group"),c(Ws,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(us,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(us,"rel","nofollow"),c(ps,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ps,"rel","nofollow"),c(hs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(hs,"rel","nofollow"),c(ms,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ms,"rel","nofollow"),c(gs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gs,"rel","nofollow"),c(yo,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(vo,"class","relative group"),c(E,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(G,"class","docstring")},m(o,p){e(document.head,h),u(o,z,p),u(o,b,p),e(b,P),e(P,x),f(w,x,null),e(b,T),e(b,$),e($,Oe),u(o,me,p),u(o,q,p),e(q,Pe),e(Pe,ae),e(q,Ae),e(q,re),e(re,ie),e(q,Ie),u(o,Ce,p),u(o,N,p),e(N,O),e(O,xe),f(H,xe,null),e(N,j),e(N,S),e(S,Le),u(o,Y,p),u(o,ee,p),e(ee,Ge),e(ee,D),e(D,Ne),e(ee,De),u(o,A,p),u(o,ge,p),e(ge,de),u(o,Me,p),u(o,te,p),e(te,K),e(K,Ue),e(te,We),e(te,U),e(U,Be),u(o,oe,p),u(o,V,p),e(V,y),e(V,F),e(F,ze),e(V,mt),e(V,$e),e($e,Q),e(V,gt),u(o,Ke,p),u(o,le,p),e(le,I),e(I,J),f(Fe,J,null),e(le,ft),e(le,X),e(X,_t),u(o,Qe,p),u(o,R,p),e(R,kt),e(R,qo),e(qo,Yd),e(R,el),e(R,ca),e(ca,tl),e(R,ol),u(o,Ci,p),u(o,fe,p),e(fe,ua),e(ua,nl),e(fe,sl),e(fe,pa),e(pa,al),e(fe,rl),e(fe,ha),e(ha,il),e(fe,dl),e(fe,Eo),e(Eo,ll),e(Eo,Co),e(Co,cl),e(Eo,ul),e(fe,pl),e(fe,Bt),e(Bt,Mo),e(Mo,hl),e(Bt,ml),e(Bt,jo),e(jo,gl),e(Bt,fl),u(o,Mi,p),u(o,vt,p),e(vt,Vt),e(Vt,ma),f(So,ma,null),e(vt,_l),e(vt,ga),e(ga,kl),u(o,ji,p),u(o,Je,p),e(Je,Rt),e(Rt,Oo),e(Oo,vl),e(Rt,yl),e(Rt,Ao),e(Ao,bl),e(Rt,Tl),e(Je,wl),e(Je,fa),e(fa,Pl),e(Je,xl),e(Je,_a),e(_a,zl),u(o,Si,p),u(o,yt,p),e(yt,Ht),e(Ht,ka),f(Io,ka,null),e(yt,$l),e(yt,va),e(va,Fl),u(o,Oi,p),u(o,_e,p),e(_e,ya),e(ya,ba),e(ba,ql),e(_e,El),e(_e,Ta),e(Ta,xs),e(xs,Cl),e(xs,zs),e(zs,Ml),e(_e,jl),e(_e,Lo),e(Lo,wa),e(wa,Sl),e(Lo,Ol),e(Lo,bt),e(bt,Pa),e(Pa,Al),e(bt,Il),e(bt,xa),e(xa,Ll),e(bt,Gl),e(bt,Go),e(Go,Nl),e(Go,za),e(za,Dl),e(Go,Ul),e(_e,Wl),e(_e,$a),e($a,Ve),e(Ve,Bl),e(Ve,Fa),e(Fa,Vl),e(Ve,Rl),e(Ve,qa),e(qa,Hl),e(Ve,Kl),e(Ve,Ea),e(Ea,Ql),e(Ve,Jl),e(_e,Xl),e(_e,Ca),e(Ca,Tt),e(Tt,Zl),e(Tt,No),e(No,Yl),e(Tt,ec),e(Tt,Ma),e(Ma,tc),e(Tt,oc),u(o,Ai,p),u(o,wt,p),e(wt,Kt),e(Kt,ja),f(Do,ja,null),e(wt,nc),e(wt,Sa),e(Sa,sc),u(o,Ii,p),f(Uo,o,p),u(o,Li,p),u(o,Pt,p),e(Pt,Qt),e(Qt,Oa),f(Wo,Oa,null),e(Pt,ac),e(Pt,Aa),e(Aa,rc),u(o,Gi,p),u(o,ce,p),f(Bo,ce,null),e(ce,ic),e(ce,xt),e(xt,dc),e(xt,$s),e($s,lc),e(xt,cc),e(xt,Vo),e(Vo,uc),e(xt,pc),e(ce,hc),e(ce,zt),e(zt,mc),e(zt,Fs),e(Fs,gc),e(zt,fc),e(zt,qs),e(qs,_c),e(zt,kc),e(ce,vc),e(ce,Ia),e(Ia,yc),e(ce,bc),f(Ro,ce,null),u(o,Ni,p),u(o,$t,p),e($t,Jt),e(Jt,La),f(Ho,La,null),e($t,Tc),e($t,Ga),e(Ga,wc),u(o,Di,p),u(o,Xt,p),e(Xt,Pc),e(Xt,Na),e(Na,xc),e(Xt,zc),u(o,Ui,p),u(o,W,p),f(Ko,W,null),e(W,$c),e(W,Qo),e(Qo,Fc),e(Qo,Jo),e(Jo,qc),e(Qo,Ec),e(W,Cc),e(W,Xo),e(Xo,Mc),e(Xo,Es),e(Es,jc),e(Xo,Sc),e(W,Oc),e(W,je),f(Zo,je,null),e(je,Ac),e(je,Yo),e(Yo,Ic),e(Yo,Da),e(Da,Lc),e(Yo,Gc),e(je,Nc),e(je,en),e(en,Cs),e(Cs,Dc),e(Cs,Ua),e(Ua,Uc),e(en,Wc),e(en,tn),e(tn,Bc),e(tn,Wa),e(Wa,Vc),e(tn,Rc),e(je,Hc),e(je,Ba),e(Ba,Kc),e(W,Qc),e(W,Zt),f(on,Zt,null),e(Zt,Jc),e(Zt,Va),e(Va,Xc),e(W,Zc),e(W,Yt),f(nn,Yt,null),e(Yt,Yc),e(Yt,Ra),e(Ra,eu),e(W,tu),e(W,eo),f(sn,eo,null),e(eo,ou),e(eo,Ha),e(Ha,nu),u(o,Wi,p),u(o,Ft,p),e(Ft,to),e(to,Ka),f(an,Ka,null),e(Ft,su),e(Ft,Qa),e(Qa,au),u(o,Bi,p),u(o,ue,p),f(rn,ue,null),e(ue,ru),e(ue,qt),e(qt,iu),e(qt,Ja),e(Ja,du),e(qt,lu),e(qt,dn),e(dn,cu),e(qt,uu),e(ue,pu),e(ue,ln),e(ln,hu),e(ln,Ms),e(Ms,mu),e(ln,gu),e(ue,fu),e(ue,Xe),f(cn,Xe,null),e(Xe,_u),e(Xe,Xa),e(Xa,ku),e(Xe,vu),e(Xe,un),e(un,js),e(js,yu),e(js,Za),e(Za,bu),e(un,Tu),e(un,pn),e(pn,wu),e(pn,Ya),e(Ya,Pu),e(pn,xu),e(ue,zu),e(ue,oo),f(hn,oo,null),e(oo,$u),e(oo,er),e(er,Fu),u(o,Vi,p),u(o,Et,p),e(Et,no),e(no,tr),f(mn,tr,null),e(Et,qu),e(Et,or),e(or,Eu),u(o,Ri,p),u(o,qe,p),f(gn,qe,null),e(qe,Cu),e(qe,fn),e(fn,Mu),e(fn,Ss),e(Ss,ju),e(fn,Su),e(qe,Ou),e(qe,_n),e(_n,Au),e(_n,kn),e(kn,Iu),e(_n,Lu),e(qe,Gu),e(qe,ke),f(vn,ke,null),e(ke,Nu),e(ke,Ct),e(Ct,Du),e(Ct,Os),e(Os,Uu),e(Ct,Wu),e(Ct,nr),e(nr,Bu),e(Ct,Vu),e(ke,Ru),f(so,ke,null),e(ke,Hu),e(ke,sr),e(sr,Ku),e(ke,Qu),f(yn,ke,null),u(o,Hi,p),u(o,Mt,p),e(Mt,ao),e(ao,ar),f(bn,ar,null),e(Mt,Ju),e(Mt,rr),e(rr,Xu),u(o,Ki,p),u(o,Ee,p),f(Tn,Ee,null),e(Ee,Zu),e(Ee,wn),e(wn,Yu),e(wn,As),e(As,ep),e(wn,tp),e(Ee,op),e(Ee,Pn),e(Pn,np),e(Pn,xn),e(xn,sp),e(Pn,ap),e(Ee,rp),e(Ee,ve),f(zn,ve,null),e(ve,ip),e(ve,jt),e(jt,dp),e(jt,Is),e(Is,lp),e(jt,cp),e(jt,ir),e(ir,up),e(jt,pp),e(ve,hp),f(ro,ve,null),e(ve,mp),e(ve,dr),e(dr,gp),e(ve,fp),f($n,ve,null),u(o,Qi,p),u(o,St,p),e(St,io),e(io,lr),f(Fn,lr,null),e(St,_p),e(St,cr),e(cr,kp),u(o,Ji,p),u(o,Ot,p),f(qn,Ot,null),e(Ot,vp),e(Ot,Ze),f(En,Ze,null),e(Ze,yp),e(Ze,ur),e(ur,bp),e(Ze,Tp),f(Cn,Ze,null),u(o,Xi,p),u(o,At,p),e(At,lo),e(lo,pr),f(Mn,pr,null),e(At,wp),e(At,hr),e(hr,Pp),u(o,Zi,p),u(o,pe,p),f(jn,pe,null),e(pe,xp),e(pe,Sn),e(Sn,zp),e(Sn,Ls),e(Ls,$p),e(Sn,Fp),e(pe,qp),e(pe,On),e(On,Ep),e(On,An),e(An,Cp),e(On,Mp),e(pe,jp),f(co,pe,null),e(pe,Sp),e(pe,ye),f(In,ye,null),e(ye,Op),e(ye,It),e(It,Ap),e(It,Gs),e(Gs,Ip),e(It,Lp),e(It,mr),e(mr,Gp),e(It,Np),e(ye,Dp),f(uo,ye,null),e(ye,Up),e(ye,gr),e(gr,Wp),e(ye,Bp),f(Ln,ye,null),u(o,Yi,p),u(o,Lt,p),e(Lt,po),e(po,fr),f(Gn,fr,null),e(Lt,Vp),e(Lt,_r),e(_r,Rp),u(o,ed,p),u(o,he,p),f(Nn,he,null),e(he,Hp),e(he,Dn),e(Dn,Kp),e(Dn,Ns),e(Ns,Qp),e(Dn,Jp),e(he,Xp),e(he,Un),e(Un,Zp),e(Un,Wn),e(Wn,Yp),e(Un,eh),e(he,th),f(ho,he,null),e(he,oh),e(he,be),f(Bn,be,null),e(be,nh),e(be,Gt),e(Gt,sh),e(Gt,Ds),e(Ds,ah),e(Gt,rh),e(Gt,kr),e(kr,ih),e(Gt,dh),e(be,lh),f(mo,be,null),e(be,ch),e(be,vr),e(vr,uh),e(be,ph),f(Vn,be,null),u(o,td,p),u(o,Nt,p),e(Nt,go),e(go,yr),f(Rn,yr,null),e(Nt,hh),e(Nt,br),e(br,mh),u(o,od,p),u(o,L,p),f(Hn,L,null),e(L,gh),e(L,Kn),e(Kn,fh),e(Kn,Us),e(Us,_h),e(Kn,kh),e(L,vh),e(L,Qn),e(Qn,yh),e(Qn,Jn),e(Jn,bh),e(Qn,Th),e(L,wh),e(L,Tr),e(Tr,Ph),e(L,xh),e(L,Re),e(Re,wr),e(wr,Xn),e(Xn,zh),e(Re,$h),e(Re,Pr),e(Pr,Zn),e(Zn,Fh),e(Re,qh),e(Re,xr),e(xr,Yn),e(Yn,Eh),e(Re,Ch),e(Re,zr),e(zr,es),e(es,Mh),e(L,jh),e(L,Te),f(ts,Te,null),e(Te,Sh),e(Te,Dt),e(Dt,Oh),e(Dt,$r),e($r,Ah),e(Dt,Ih),e(Dt,Fr),e(Fr,Lh),e(Dt,Gh),e(Te,Nh),f(fo,Te,null),e(Te,Dh),e(Te,qr),e(qr,Uh),e(Te,Wh),f(os,Te,null),e(L,Bh),e(L,Ye),f(ns,Ye,null),e(Ye,Vh),e(Ye,Er),e(Er,Rh),e(Ye,Hh),f(ss,Ye,null),e(L,Kh),e(L,et),f(as,et,null),e(et,Qh),e(et,Cr),e(Cr,Jh),e(et,Xh),f(rs,et,null),u(o,nd,p),u(o,Ut,p),e(Ut,_o),e(_o,Mr),f(is,Mr,null),e(Ut,Zh),e(Ut,jr),e(jr,Yh),u(o,sd,p),u(o,G,p),f(ds,G,null),e(G,em),e(G,ls),e(ls,tm),e(ls,Ws),e(Ws,om),e(ls,nm),e(G,sm),e(G,cs),e(cs,am),e(cs,us),e(us,rm),e(cs,im),e(G,dm),e(G,Sr),e(Sr,lm),e(G,cm),e(G,He),e(He,Or),e(Or,ps),e(ps,um),e(He,pm),e(He,Ar),e(Ar,hs),e(hs,hm),e(He,mm),e(He,Ir),e(Ir,ms),e(ms,gm),e(He,fm),e(He,Lr),e(Lr,gs),e(gs,_m),e(G,km),e(G,E),f(fs,E,null),e(E,vm),e(E,Wt),e(Wt,ym),e(Wt,Gr),e(Gr,bm),e(Wt,Tm),e(Wt,Nr),e(Nr,wm),e(Wt,Pm),e(E,xm),f(ko,E,null),e(E,zm),e(E,Dr),e(Dr,$m),e(E,Fm),e(E,Ur),e(Ur,Wr),e(Wr,Br),e(Br,Vr),e(Vr,qm),e(E,Em),e(E,Rr),e(Rr,Hr),e(Hr,Kr),e(Kr,Qr),e(Qr,Cm),e(E,Mm),e(E,Jr),e(Jr,Xr),e(Xr,Zr),e(Zr,Yr),e(Yr,jm),e(E,Sm),e(E,ei),e(ei,ti),e(ti,_s),e(_s,vo),e(vo,yo),e(yo,oi),f(ks,oi,null),e(vo,Om),e(vo,ni),e(ni,Am),e(_s,Im),e(_s,si),e(si,Lm),e(E,Gm),e(E,ai),e(ai,Nm),e(E,Dm),e(E,ri),e(ri,ii),e(ii,di),e(di,li),e(li,Um),e(E,Wm),e(E,ci),e(ci,ui),e(ui,pi),e(pi,hi),e(hi,Bm),e(E,Vm),e(E,mi),e(mi,gi),e(gi,fi),e(fi,_i),e(_i,Rm),e(E,Hm),e(E,ki),e(ki,vi),e(vi,yi),e(yi,bi),e(bi,Km),e(G,Qm),e(G,tt),f(vs,tt,null),e(tt,Jm),e(tt,Ti),e(Ti,Xm),e(tt,Zm),f(ys,tt,null),e(G,Ym),e(G,ot),f(bs,ot,null),e(ot,eg),e(ot,wi),e(wi,tg),e(ot,og),f(Ts,ot,null),ad=!0},p(o,[p]){const ws={};p&2&&(ws.$$scope={dirty:p,ctx:o}),so.$set(ws);const Pi={};p&2&&(Pi.$$scope={dirty:p,ctx:o}),ro.$set(Pi);const xi={};p&2&&(xi.$$scope={dirty:p,ctx:o}),co.$set(xi);const zi={};p&2&&(zi.$$scope={dirty:p,ctx:o}),uo.$set(zi);const bo={};p&2&&(bo.$$scope={dirty:p,ctx:o}),ho.$set(bo);const $i={};p&2&&($i.$$scope={dirty:p,ctx:o}),mo.$set($i);const Fi={};p&2&&(Fi.$$scope={dirty:p,ctx:o}),fo.$set(Fi);const Ps={};p&2&&(Ps.$$scope={dirty:p,ctx:o}),ko.$set(Ps)},i(o){ad||(_(w.$$.fragment,o),_(H.$$.fragment,o),_(Fe.$$.fragment,o),_(So.$$.fragment,o),_(Io.$$.fragment,o),_(Do.$$.fragment,o),_(Uo.$$.fragment,o),_(Wo.$$.fragment,o),_(Bo.$$.fragment,o),_(Ro.$$.fragment,o),_(Ho.$$.fragment,o),_(Ko.$$.fragment,o),_(Zo.$$.fragment,o),_(on.$$.fragment,o),_(nn.$$.fragment,o),_(sn.$$.fragment,o),_(an.$$.fragment,o),_(rn.$$.fragment,o),_(cn.$$.fragment,o),_(hn.$$.fragment,o),_(mn.$$.fragment,o),_(gn.$$.fragment,o),_(vn.$$.fragment,o),_(so.$$.fragment,o),_(yn.$$.fragment,o),_(bn.$$.fragment,o),_(Tn.$$.fragment,o),_(zn.$$.fragment,o),_(ro.$$.fragment,o),_($n.$$.fragment,o),_(Fn.$$.fragment,o),_(qn.$$.fragment,o),_(En.$$.fragment,o),_(Cn.$$.fragment,o),_(Mn.$$.fragment,o),_(jn.$$.fragment,o),_(co.$$.fragment,o),_(In.$$.fragment,o),_(uo.$$.fragment,o),_(Ln.$$.fragment,o),_(Gn.$$.fragment,o),_(Nn.$$.fragment,o),_(ho.$$.fragment,o),_(Bn.$$.fragment,o),_(mo.$$.fragment,o),_(Vn.$$.fragment,o),_(Rn.$$.fragment,o),_(Hn.$$.fragment,o),_(ts.$$.fragment,o),_(fo.$$.fragment,o),_(os.$$.fragment,o),_(ns.$$.fragment,o),_(ss.$$.fragment,o),_(as.$$.fragment,o),_(rs.$$.fragment,o),_(is.$$.fragment,o),_(ds.$$.fragment,o),_(fs.$$.fragment,o),_(ko.$$.fragment,o),_(ks.$$.fragment,o),_(vs.$$.fragment,o),_(ys.$$.fragment,o),_(bs.$$.fragment,o),_(Ts.$$.fragment,o),ad=!0)},o(o){k(w.$$.fragment,o),k(H.$$.fragment,o),k(Fe.$$.fragment,o),k(So.$$.fragment,o),k(Io.$$.fragment,o),k(Do.$$.fragment,o),k(Uo.$$.fragment,o),k(Wo.$$.fragment,o),k(Bo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ho.$$.fragment,o),k(Ko.$$.fragment,o),k(Zo.$$.fragment,o),k(on.$$.fragment,o),k(nn.$$.fragment,o),k(sn.$$.fragment,o),k(an.$$.fragment,o),k(rn.$$.fragment,o),k(cn.$$.fragment,o),k(hn.$$.fragment,o),k(mn.$$.fragment,o),k(gn.$$.fragment,o),k(vn.$$.fragment,o),k(so.$$.fragment,o),k(yn.$$.fragment,o),k(bn.$$.fragment,o),k(Tn.$$.fragment,o),k(zn.$$.fragment,o),k(ro.$$.fragment,o),k($n.$$.fragment,o),k(Fn.$$.fragment,o),k(qn.$$.fragment,o),k(En.$$.fragment,o),k(Cn.$$.fragment,o),k(Mn.$$.fragment,o),k(jn.$$.fragment,o),k(co.$$.fragment,o),k(In.$$.fragment,o),k(uo.$$.fragment,o),k(Ln.$$.fragment,o),k(Gn.$$.fragment,o),k(Nn.$$.fragment,o),k(ho.$$.fragment,o),k(Bn.$$.fragment,o),k(mo.$$.fragment,o),k(Vn.$$.fragment,o),k(Rn.$$.fragment,o),k(Hn.$$.fragment,o),k(ts.$$.fragment,o),k(fo.$$.fragment,o),k(os.$$.fragment,o),k(ns.$$.fragment,o),k(ss.$$.fragment,o),k(as.$$.fragment,o),k(rs.$$.fragment,o),k(is.$$.fragment,o),k(ds.$$.fragment,o),k(fs.$$.fragment,o),k(ko.$$.fragment,o),k(ks.$$.fragment,o),k(vs.$$.fragment,o),k(ys.$$.fragment,o),k(bs.$$.fragment,o),k(Ts.$$.fragment,o),ad=!1},d(o){t(h),o&&t(z),o&&t(b),v(w),o&&t(me),o&&t(q),o&&t(Ce),o&&t(N),v(H),o&&t(Y),o&&t(ee),o&&t(A),o&&t(ge),o&&t(Me),o&&t(te),o&&t(oe),o&&t(V),o&&t(Ke),o&&t(le),v(Fe),o&&t(Qe),o&&t(R),o&&t(Ci),o&&t(fe),o&&t(Mi),o&&t(vt),v(So),o&&t(ji),o&&t(Je),o&&t(Si),o&&t(yt),v(Io),o&&t(Oi),o&&t(_e),o&&t(Ai),o&&t(wt),v(Do),o&&t(Ii),v(Uo,o),o&&t(Li),o&&t(Pt),v(Wo),o&&t(Gi),o&&t(ce),v(Bo),v(Ro),o&&t(Ni),o&&t($t),v(Ho),o&&t(Di),o&&t(Xt),o&&t(Ui),o&&t(W),v(Ko),v(Zo),v(on),v(nn),v(sn),o&&t(Wi),o&&t(Ft),v(an),o&&t(Bi),o&&t(ue),v(rn),v(cn),v(hn),o&&t(Vi),o&&t(Et),v(mn),o&&t(Ri),o&&t(qe),v(gn),v(vn),v(so),v(yn),o&&t(Hi),o&&t(Mt),v(bn),o&&t(Ki),o&&t(Ee),v(Tn),v(zn),v(ro),v($n),o&&t(Qi),o&&t(St),v(Fn),o&&t(Ji),o&&t(Ot),v(qn),v(En),v(Cn),o&&t(Xi),o&&t(At),v(Mn),o&&t(Zi),o&&t(pe),v(jn),v(co),v(In),v(uo),v(Ln),o&&t(Yi),o&&t(Lt),v(Gn),o&&t(ed),o&&t(he),v(Nn),v(ho),v(Bn),v(mo),v(Vn),o&&t(td),o&&t(Nt),v(Rn),o&&t(od),o&&t(L),v(Hn),v(ts),v(fo),v(os),v(ns),v(ss),v(as),v(rs),o&&t(nd),o&&t(Ut),v(is),o&&t(sd),o&&t(G),v(ds),v(fs),v(ko),v(ks),v(vs),v(ys),v(bs),v(Ts)}}}const Hk={local:"pegasus",sections:[{local:"overview",title:"Overview"},{local:"checkpoints",sections:[{local:"examples",title:"Examples"}],title:"Checkpoints"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage-example",title:"Usage Example"},{local:"transformers.PegasusConfig",title:"PegasusConfig"},{local:"transformers.PegasusTokenizer",title:"PegasusTokenizer"},{local:"transformers.PegasusTokenizerFast",title:"PegasusTokenizerFast"},{local:"transformers.PegasusModel",title:"PegasusModel"},{local:"transformers.PegasusForConditionalGeneration",title:"PegasusForConditionalGeneration"},{local:"transformers.PegasusForCausalLM",title:"PegasusForCausalLM"},{local:"transformers.TFPegasusModel",title:"TFPegasusModel"},{local:"transformers.TFPegasusForConditionalGeneration",title:"TFPegasusForConditionalGeneration"},{local:"transformers.FlaxPegasusModel",title:"FlaxPegasusModel"},{local:"transformers.FlaxPegasusForConditionalGeneration",title:"FlaxPegasusForConditionalGeneration"}],title:"Pegasus"};function Kk(B){return Ik(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ev extends jk{constructor(h){super();Sk(this,h,Kk,Rk,Ok,{})}}export{ev as default,Hk as metadata};
