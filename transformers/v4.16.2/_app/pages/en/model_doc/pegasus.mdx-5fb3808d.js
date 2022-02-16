import{S as Mk,i as jk,s as Ck,e as n,k as d,w as f,t as r,L as Sk,c as s,d as t,m as l,a,x as g,h as i,b as c,J as e,g as u,y as _,q as k,o as v,B as y}from"../../../chunks/vendor-b1433968.js";import{T as $o}from"../../../chunks/Tip-c3840994.js";import{D as j}from"../../../chunks/Docstring-ff504c58.js";import{C as Se}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as Z}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function Ak(G){let h,z,b,T,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(P,"CODE",{});var $=a(b);T=i($,"Module"),$.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,b),e(b,T),e(h,x)},d(w){w&&t(h)}}}function Ik(G){let h,z,b,T,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(P,"CODE",{});var $=a(b);T=i($,"Module"),$.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,b),e(b,T),e(h,x)},d(w){w&&t(h)}}}function Ok(G){let h,z,b,T,x,w,P,$,Ae,me,F,we,ae,Ie,re,ie,Oe,Me,D,A,xe,K,C,S,Le,Y,ee,Ne,U,Ge,De,I,fe,de,je,te,V,Ue,Be,B,We,oe,H;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),b=d(),T=n("ul"),x=n("li"),w=r("having all inputs as keyword arguments (like PyTorch models), or"),P=d(),$=n("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=d(),F=n("p"),we=r("This second option is useful when using "),ae=n("code"),Ie=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=n("code"),Oe=r("model(inputs)"),Me=r("."),D=d(),A=n("p"),xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=d(),C=n("ul"),S=n("li"),Le=r("a single Tensor with "),Y=n("code"),ee=r("input_ids"),Ne=r(" only and nothing else: "),U=n("code"),Ge=r("model(input_ids)"),De=d(),I=n("li"),fe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),je=r("model([input_ids, attention_mask])"),te=r(" or "),V=n("code"),Ue=r("model([input_ids, attention_mask, token_type_ids])"),Be=d(),B=n("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=n("code"),H=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){h=s(m,"P",{});var q=a(h);z=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),b=l(m),T=s(m,"UL",{});var ze=a(T);x=s(ze,"LI",{});var mt=a(x);w=i(mt,"having all inputs as keyword arguments (like PyTorch models), or"),mt.forEach(t),P=l(ze),$=s(ze,"LI",{});var $e=a($);Ae=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),ze.forEach(t),me=l(m),F=s(m,"P",{});var Q=a(F);we=i(Q,"This second option is useful when using "),ae=s(Q,"CODE",{});var ft=a(ae);Ie=i(ft,"tf.keras.Model.fit"),ft.forEach(t),re=i(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=s(Q,"CODE",{});var Ve=a(ie);Oe=i(Ve,"model(inputs)"),Ve.forEach(t),Me=i(Q,"."),Q.forEach(t),D=l(m),A=s(m,"P",{});var le=a(A);xe=i(le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),le.forEach(t),K=l(m),C=s(m,"UL",{});var O=a(C);S=s(O,"LI",{});var J=a(S);Le=i(J,"a single Tensor with "),Y=s(J,"CODE",{});var qe=a(Y);ee=i(qe,"input_ids"),qe.forEach(t),Ne=i(J," only and nothing else: "),U=s(J,"CODE",{});var gt=a(U);Ge=i(gt,"model(input_ids)"),gt.forEach(t),J.forEach(t),De=l(O),I=s(O,"LI",{});var X=a(I);fe=i(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(X,"CODE",{});var _t=a(de);je=i(_t,"model([input_ids, attention_mask])"),_t.forEach(t),te=i(X," or "),V=s(X,"CODE",{});var Qe=a(V);Ue=i(Qe,"model([input_ids, attention_mask, token_type_ids])"),Qe.forEach(t),X.forEach(t),Be=l(O),B=s(O,"LI",{});var R=a(B);We=i(R,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=s(R,"CODE",{});var kt=a(oe);H=i(kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),kt.forEach(t),R.forEach(t),O.forEach(t)},m(m,q){u(m,h,q),e(h,z),u(m,b,q),u(m,T,q),e(T,x),e(x,w),e(T,P),e(T,$),e($,Ae),u(m,me,q),u(m,F,q),e(F,we),e(F,ae),e(ae,Ie),e(F,re),e(F,ie),e(ie,Oe),e(F,Me),u(m,D,q),u(m,A,q),e(A,xe),u(m,K,q),u(m,C,q),e(C,S),e(S,Le),e(S,Y),e(Y,ee),e(S,Ne),e(S,U),e(U,Ge),e(C,De),e(C,I),e(I,fe),e(I,de),e(de,je),e(I,te),e(I,V),e(V,Ue),e(C,Be),e(C,B),e(B,We),e(B,oe),e(oe,H)},d(m){m&&t(h),m&&t(b),m&&t(T),m&&t(me),m&&t(F),m&&t(D),m&&t(A),m&&t(K),m&&t(C)}}}function Lk(G){let h,z,b,T,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(P,"CODE",{});var $=a(b);T=i($,"Module"),$.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,b),e(b,T),e(h,x)},d(w){w&&t(h)}}}function Nk(G){let h,z,b,T,x,w,P,$,Ae,me,F,we,ae,Ie,re,ie,Oe,Me,D,A,xe,K,C,S,Le,Y,ee,Ne,U,Ge,De,I,fe,de,je,te,V,Ue,Be,B,We,oe,H;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),b=d(),T=n("ul"),x=n("li"),w=r("having all inputs as keyword arguments (like PyTorch models), or"),P=d(),$=n("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=d(),F=n("p"),we=r("This second option is useful when using "),ae=n("code"),Ie=r("tf.keras.Model.fit"),re=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=n("code"),Oe=r("model(inputs)"),Me=r("."),D=d(),A=n("p"),xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=d(),C=n("ul"),S=n("li"),Le=r("a single Tensor with "),Y=n("code"),ee=r("input_ids"),Ne=r(" only and nothing else: "),U=n("code"),Ge=r("model(input_ids)"),De=d(),I=n("li"),fe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),je=r("model([input_ids, attention_mask])"),te=r(" or "),V=n("code"),Ue=r("model([input_ids, attention_mask, token_type_ids])"),Be=d(),B=n("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=n("code"),H=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){h=s(m,"P",{});var q=a(h);z=i(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),b=l(m),T=s(m,"UL",{});var ze=a(T);x=s(ze,"LI",{});var mt=a(x);w=i(mt,"having all inputs as keyword arguments (like PyTorch models), or"),mt.forEach(t),P=l(ze),$=s(ze,"LI",{});var $e=a($);Ae=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),ze.forEach(t),me=l(m),F=s(m,"P",{});var Q=a(F);we=i(Q,"This second option is useful when using "),ae=s(Q,"CODE",{});var ft=a(ae);Ie=i(ft,"tf.keras.Model.fit"),ft.forEach(t),re=i(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),ie=s(Q,"CODE",{});var Ve=a(ie);Oe=i(Ve,"model(inputs)"),Ve.forEach(t),Me=i(Q,"."),Q.forEach(t),D=l(m),A=s(m,"P",{});var le=a(A);xe=i(le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),le.forEach(t),K=l(m),C=s(m,"UL",{});var O=a(C);S=s(O,"LI",{});var J=a(S);Le=i(J,"a single Tensor with "),Y=s(J,"CODE",{});var qe=a(Y);ee=i(qe,"input_ids"),qe.forEach(t),Ne=i(J," only and nothing else: "),U=s(J,"CODE",{});var gt=a(U);Ge=i(gt,"model(input_ids)"),gt.forEach(t),J.forEach(t),De=l(O),I=s(O,"LI",{});var X=a(I);fe=i(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(X,"CODE",{});var _t=a(de);je=i(_t,"model([input_ids, attention_mask])"),_t.forEach(t),te=i(X," or "),V=s(X,"CODE",{});var Qe=a(V);Ue=i(Qe,"model([input_ids, attention_mask, token_type_ids])"),Qe.forEach(t),X.forEach(t),Be=l(O),B=s(O,"LI",{});var R=a(B);We=i(R,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=s(R,"CODE",{});var kt=a(oe);H=i(kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),kt.forEach(t),R.forEach(t),O.forEach(t)},m(m,q){u(m,h,q),e(h,z),u(m,b,q),u(m,T,q),e(T,x),e(x,w),e(T,P),e(T,$),e($,Ae),u(m,me,q),u(m,F,q),e(F,we),e(F,ae),e(ae,Ie),e(F,re),e(F,ie),e(ie,Oe),e(F,Me),u(m,D,q),u(m,A,q),e(A,xe),u(m,K,q),u(m,C,q),e(C,S),e(S,Le),e(S,Y),e(Y,ee),e(S,Ne),e(S,U),e(U,Ge),e(C,De),e(C,I),e(I,fe),e(I,de),e(de,je),e(I,te),e(I,V),e(V,Ue),e(C,Be),e(C,B),e(B,We),e(B,oe),e(oe,H)},d(m){m&&t(h),m&&t(b),m&&t(T),m&&t(me),m&&t(F),m&&t(D),m&&t(A),m&&t(K),m&&t(C)}}}function Gk(G){let h,z,b,T,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(P,"CODE",{});var $=a(b);T=i($,"Module"),$.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,b),e(b,T),e(h,x)},d(w){w&&t(h)}}}function Dk(G){let h,z,b,T,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(P,"CODE",{});var $=a(b);T=i($,"Module"),$.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,b),e(b,T),e(h,x)},d(w){w&&t(h)}}}function Uk(G){let h,z,b,T,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(P,"CODE",{});var $=a(b);T=i($,"Module"),$.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,b),e(b,T),e(h,x)},d(w){w&&t(h)}}}function Bk(G){let h,z,b,T,x,w,P,$,Ae,me,F,we,ae,Ie,re,ie,Oe,Me,D,A,xe,K,C,S,Le,Y,ee,Ne,U,Ge,De,I,fe,de,je,te,V,Ue,Be,B,We,oe,H,m,q,ze,mt,$e,Q,ft,Ve,le,O,J,qe,gt,X,_t,Qe,R,kt,qo,Xd,Zd,la,Yd,el,Ei,ge,ca,tl,ol,ua,nl,sl,pa,al,rl,Fo,il,Eo,dl,ll,cl,Bt,Mo,ul,pl,jo,hl,ml,Mi,vt,Wt,ha,Co,fl,ma,gl,ji,Je,Ht,So,_l,kl,Ao,vl,yl,bl,fa,Tl,Pl,ga,wl,Ci,yt,Rt,_a,Io,xl,ka,zl,Si,_e,va,ya,$l,ql,ba,ws,Fl,xs,El,Ml,Oo,Ta,jl,Cl,bt,Pa,Sl,Al,wa,Il,Ol,Lo,Ll,xa,Nl,Gl,Dl,za,He,Ul,$a,Bl,Wl,qa,Hl,Rl,Fa,Kl,Vl,Ql,Ea,Tt,Jl,No,Xl,Zl,Ma,Yl,ec,Ai,Pt,Kt,ja,Go,tc,Ca,oc,Ii,Do,Oi,wt,Vt,Sa,Uo,nc,Aa,sc,Li,ce,Bo,ac,xt,rc,zs,ic,dc,Wo,lc,cc,uc,zt,pc,$s,hc,mc,qs,fc,gc,_c,Ia,kc,vc,Ho,Ni,$t,Qt,Oa,Ro,yc,La,bc,Gi,Jt,Tc,Na,Pc,wc,Di,W,Ko,xc,Vo,zc,Qo,$c,qc,Fc,Jo,Ec,Fs,Mc,jc,Cc,Ce,Xo,Sc,Zo,Ac,Ga,Ic,Oc,Lc,Yo,Es,Nc,Da,Gc,Dc,en,Uc,Ua,Bc,Wc,Hc,Ba,Rc,Kc,Xt,tn,Vc,Wa,Qc,Jc,Zt,on,Xc,Ha,Zc,Yc,Yt,nn,eu,Ra,tu,Ui,qt,eo,Ka,sn,ou,Va,nu,Bi,ue,an,su,Ft,au,Qa,ru,iu,rn,du,lu,cu,dn,uu,Ms,pu,hu,mu,Xe,ln,fu,Ja,gu,_u,cn,js,ku,Xa,vu,yu,un,bu,Za,Tu,Pu,wu,to,pn,xu,Ya,zu,Wi,Et,oo,er,hn,$u,tr,qu,Hi,Fe,mn,Fu,fn,Eu,Cs,Mu,ju,Cu,gn,Su,_n,Au,Iu,Ou,ke,kn,Lu,Mt,Nu,Ss,Gu,Du,or,Uu,Bu,Wu,no,Hu,nr,Ru,Ku,vn,Ri,jt,so,sr,yn,Vu,ar,Qu,Ki,Ee,bn,Ju,Tn,Xu,As,Zu,Yu,ep,Pn,tp,wn,op,np,sp,ve,xn,ap,Ct,rp,Is,ip,dp,rr,lp,cp,up,ao,pp,ir,hp,mp,zn,Vi,St,ro,dr,$n,fp,lr,gp,Qi,qn,Ze,Fn,_p,cr,kp,vp,En,Ji,At,io,ur,Mn,yp,pr,bp,Xi,pe,jn,Tp,Cn,Pp,Os,wp,xp,zp,Sn,$p,An,qp,Fp,Ep,lo,Mp,ye,In,jp,It,Cp,Ls,Sp,Ap,hr,Ip,Op,Lp,co,Np,mr,Gp,Dp,On,Zi,Ot,uo,fr,Ln,Up,gr,Bp,Yi,he,Nn,Wp,Gn,Hp,Ns,Rp,Kp,Vp,Dn,Qp,Un,Jp,Xp,Zp,po,Yp,be,Bn,eh,Lt,th,Gs,oh,nh,_r,sh,ah,rh,ho,ih,kr,dh,lh,Wn,ed,Nt,mo,vr,Hn,ch,yr,uh,td,L,Rn,ph,Kn,hh,Ds,mh,fh,gh,Vn,_h,Qn,kh,vh,yh,br,bh,Th,Re,Tr,Jn,Ph,wh,Pr,Xn,xh,zh,wr,Zn,$h,qh,xr,Yn,Fh,Eh,Te,es,Mh,Gt,jh,zr,Ch,Sh,$r,Ah,Ih,Oh,fo,Lh,qr,Nh,Gh,ts,Dh,Ye,os,Uh,Fr,Bh,Wh,ns,Hh,et,ss,Rh,Er,Kh,Vh,as,od,Dt,go,Mr,rs,Qh,jr,Jh,nd,N,is,Xh,ds,Zh,Us,Yh,em,tm,ls,om,cs,nm,sm,am,Cr,rm,im,Ke,Sr,us,dm,lm,Ar,ps,cm,um,Ir,hs,pm,hm,Or,ms,mm,fm,E,fs,gm,Ut,_m,Lr,km,vm,Nr,ym,bm,Tm,_o,Pm,Gr,wm,xm,Dr,Ur,Br,Wr,zm,$m,Hr,Rr,Kr,Vr,qm,Fm,Qr,Jr,Xr,Zr,Em,Mm,Yr,ei,gs,ko,vo,ti,_s,jm,oi,Cm,Sm,ni,Am,Im,si,Om,Lm,ai,ri,ii,di,Nm,Gm,li,ci,ui,pi,Dm,Um,hi,mi,fi,gi,Bm,Wm,_i,ki,vi,yi,Hm,Rm,tt,ks,Km,bi,Vm,Qm,vs,Jm,ot,ys,Xm,Ti,Zm,Ym,bs,sd;return w=new Z({}),K=new Z({}),qe=new Z({}),Co=new Z({}),Io=new Z({}),Go=new Z({}),Do=new Se({props:{code:`from transformers import PegasusForConditionalGeneration, PegasusTokenizer
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
),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusForConditionalGeneration, PegasusTokenizer
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
<span class="hljs-meta">... </span>)`}}),Uo=new Z({}),Bo=new j({props:{name:"class transformers.PegasusConfig",anchor:"transformers.PegasusConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 0"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"forced_eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/configuration_pegasus.py#L29",parametersDescription:[{anchor:"transformers.PegasusConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the PEGASUS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusModel">PegasusModel</a> or <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.TFPegasusModel">TFPegasusModel</a>.`,name:"vocab_size"},{anchor:"transformers.PegasusConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Ho=new Se({props:{code:`from transformers import PegasusModel, PegasusConfig

# Initializing a PEGASUS google/pegasus-large style configuration
configuration = PegasusConfig()

# Initializing a model from the google/pegasus-large style configuration
model = PegasusModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusModel, PegasusConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a PEGASUS google/pegasus-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = PegasusConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the google/pegasus-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ro=new Z({}),Ko=new j({props:{name:"class transformers.PegasusTokenizer",anchor:"transformers.PegasusTokenizer",parameters:[{name:"vocab_file",val:""},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/tokenization_pegasus.py#L41",parametersDescription:[{anchor:"transformers.PegasusTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Xo=new j({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/tokenization_pegasus.py#L255",parametersDescription:[{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),tn=new j({props:{name:"convert\\_tokens\\_to\\_string",anchor:"transformers.PegasusTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/tokenization_pegasus.py#L229"}}),on=new j({props:{name:"get\\_special\\_tokens\\_mask",anchor:"transformers.PegasusTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/tokenization_pegasus.py#L244"}}),nn=new j({props:{name:"num\\_special\\_tokens\\_to\\_add",anchor:"transformers.PegasusTokenizer.num_special_tokens_to_add",parameters:[{name:"pair",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/tokenization_pegasus.py#L234"}}),sn=new Z({}),an=new j({props:{name:"class transformers.PegasusTokenizerFast",anchor:"transformers.PegasusTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L52",parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
that uses the tokens 2 - 104 only for pretraining</unk_2,></mask_2>`,name:"additional_special_tokens"}]}}),ln=new j({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L176",parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),pn=new j({props:{name:"get\\_special\\_tokens\\_mask",anchor:"transformers.PegasusTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L165"}}),hn=new Z({}),mn=new j({props:{name:"class transformers.PegasusModel",anchor:"transformers.PegasusModel",parameters:[{name:"config",val:": PegasusConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_pegasus.py#L1133",parametersDescription:[{anchor:"transformers.PegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),kn=new j({props:{name:"forward",anchor:"transformers.PegasusModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_pegasus.py#L1183",parametersDescription:[{anchor:"transformers.PegasusModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.PegasusModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new $o({props:{$$slots:{default:[Ak]},$$scope:{ctx:G}}}),vn=new Se({props:{code:`from transformers import PegasusTokenizer, PegasusModel

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = PegasusModel.from_pretrained("google/pegasus-large")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),yn=new Z({}),bn=new j({props:{name:"class transformers.PegasusForConditionalGeneration",anchor:"transformers.PegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_pegasus.py#L1282",parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xn=new j({props:{name:"forward",anchor:"transformers.PegasusForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_pegasus.py#L1350",parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PegasusForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ao=new $o({props:{$$slots:{default:[Ik]},$$scope:{ctx:G}}}),zn=new Se({props:{code:`from transformers import PegasusTokenizer, PegasusForConditionalGeneration

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
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),$n=new Z({}),Fn=new j({props:{name:"forward",anchor:"transformers.PegasusForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_pegasus.py#L1539",parametersDescription:[{anchor:"transformers.PegasusForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),En=new Se({props:{code:`from transformers import PegasusTokenizer, PegasusForCausalLM

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = PegasusForCausalLM.from_pretrained("google/pegasus-large", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mn=new Z({}),jn=new j({props:{name:"class transformers.TFPegasusModel",anchor:"transformers.TFPegasusModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1221",parametersDescription:[{anchor:"transformers.TFPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new $o({props:{$$slots:{default:[Ok]},$$scope:{ctx:G}}}),In=new j({props:{name:"call",anchor:"transformers.TFPegasusModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1233",parametersDescription:[{anchor:"transformers.TFPegasusModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new $o({props:{$$slots:{default:[Lk]},$$scope:{ctx:G}}}),On=new Se({props:{code:`from transformers import PegasusTokenizer, TFPegasusModel
import tensorflow as tf

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = TFPegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, TFPegasusModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ln=new Z({}),Nn=new j({props:{name:"class transformers.TFPegasusForConditionalGeneration",anchor:"transformers.TFPegasusForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1328",parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),po=new $o({props:{$$slots:{default:[Nk]},$$scope:{ctx:G}}}),Bn=new j({props:{name:"call",anchor:"transformers.TFPegasusForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1361",parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ho=new $o({props:{$$slots:{default:[Gk]},$$scope:{ctx:G}}}),Wn=new Se({props:{code:`from transformers import PegasusTokenizer, TFPegasusForConditionalGeneration

model = TFPegasusForConditionalGeneration.from_pretrained("google/pegasus-xsum")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-xsum")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"])
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, TFPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(ARTICLE_TO_SUMMARIZE, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Hn=new Z({}),Rn=new j({props:{name:"class transformers.FlaxPegasusModel",anchor:"transformers.FlaxPegasusModel",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1217",parametersDescription:[{anchor:"transformers.FlaxPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),es=new j({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxPegasusPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1152",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new $o({props:{$$slots:{default:[Dk]},$$scope:{ctx:G}}}),ts=new Se({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusModel

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = FlaxPegasusModel.from_pretrained("google/pegasus-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),os=new j({props:{name:"encode",anchor:"transformers.FlaxPegasusPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_flax_pegasus.py#L975",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ns=new Se({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),ss=new j({props:{name:"decode",anchor:"transformers.FlaxPegasusPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1038",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),as=new Se({props:{code:`import jax.numpy as jnp
from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),rs=new Z({}),is=new j({props:{name:"class transformers.FlaxPegasusForConditionalGeneration",anchor:"transformers.FlaxPegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1304",parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),fs=new j({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxPegasusPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1152",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new $o({props:{$$slots:{default:[Uk]},$$scope:{ctx:G}}}),_s=new Z({}),ks=new j({props:{name:"encode",anchor:"transformers.FlaxPegasusPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_flax_pegasus.py#L975",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vs=new Se({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),ys=new j({props:{name:"decode",anchor:"transformers.FlaxPegasusForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1308",parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bs=new Se({props:{code:`import jax.numpy as jnp
from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained("google/pegasus-large")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=n("meta"),z=d(),b=n("h1"),T=n("a"),x=n("span"),f(w.$$.fragment),P=d(),$=n("span"),Ae=r("Pegasus"),me=d(),F=n("p"),we=n("strong"),ae=r("DISCLAIMER:"),Ie=r(" If you see something strange, file a "),re=n("a"),ie=r("Github Issue"),Oe=r(`
and assign @patrickvonplaten.`),Me=d(),D=n("h2"),A=n("a"),xe=n("span"),f(K.$$.fragment),C=d(),S=n("span"),Le=r("Overview"),Y=d(),ee=n("p"),Ne=r("The Pegasus model was proposed in "),U=n("a"),Ge=r("PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),De=r(" by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),I=d(),fe=n("p"),de=r("According to the abstract,"),je=d(),te=n("ul"),V=n("li"),Ue=r(`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),Be=d(),B=n("li"),We=r("Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),oe=d(),H=n("p"),m=r("This model was contributed by "),q=n("a"),ze=r("sshleifer"),mt=r(". The Authors\u2019 code can be found "),$e=n("a"),Q=r("here"),ft=r("."),Ve=d(),le=n("h2"),O=n("a"),J=n("span"),f(qe.$$.fragment),gt=d(),X=n("span"),_t=r("Checkpoints"),Qe=d(),R=n("p"),kt=r("All the "),qo=n("a"),Xd=r("checkpoints"),Zd=r(` are fine-tuned for summarization, besides
`),la=n("em"),Yd=r("pegasus-large"),el=r(", whence the other checkpoints are fine-tuned:"),Ei=d(),ge=n("ul"),ca=n("li"),tl=r("Each checkpoint is 2.2 GB on disk and 568M parameters."),ol=d(),ua=n("li"),nl=r("FP16 is not supported (help/ideas on this appreciated!)."),sl=d(),pa=n("li"),al=r("Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),rl=d(),Fo=n("li"),il=r("Full replication results and correctly pre-processed data can be found in this "),Eo=n("a"),dl=r("Issue"),ll=r("."),cl=d(),Bt=n("li"),Mo=n("a"),ul=r("Distilled checkpoints"),pl=r(" are described in this "),jo=n("a"),hl=r("paper"),ml=r("."),Mi=d(),vt=n("h3"),Wt=n("a"),ha=n("span"),f(Co.$$.fragment),fl=d(),ma=n("span"),gl=r("Examples"),ji=d(),Je=n("ul"),Ht=n("li"),So=n("a"),_l=r("Script"),kl=r(` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),Ao=n("a"),vl=r("examples/pytorch/summarization/"),yl=r("."),bl=d(),fa=n("li"),Tl=r("FP16 is not supported (help/ideas on this appreciated!)."),Pl=d(),ga=n("li"),wl=r("The adafactor optimizer is recommended for pegasus fine-tuning."),Ci=d(),yt=n("h2"),Rt=n("a"),_a=n("span"),f(Io.$$.fragment),xl=d(),ka=n("span"),zl=r("Implementation Notes"),Si=d(),_e=n("ul"),va=n("li"),ya=n("p"),$l=r("All models are transformer encoder-decoders with 16 layers in each component."),ql=d(),ba=n("li"),ws=n("p"),Fl=r("The implementation is completely inherited from "),xs=n("a"),El=r("BartForConditionalGeneration"),Ml=d(),Oo=n("li"),Ta=n("p"),jl=r("Some key configuration differences:"),Cl=d(),bt=n("ul"),Pa=n("li"),Sl=r("static, sinusoidal position embeddings"),Al=d(),wa=n("li"),Il=r("the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),Ol=d(),Lo=n("li"),Ll=r("more beams are used ("),xa=n("code"),Nl=r("num_beams=8"),Gl=r(")"),Dl=d(),za=n("li"),He=n("p"),Ul=r("All pretrained pegasus checkpoints are the same besides three attributes: "),$a=n("code"),Bl=r("tokenizer.model_max_length"),Wl=r(` (maximum
input size), `),qa=n("code"),Hl=r("max_length"),Rl=r(" (the maximum number of tokens to generate) and "),Fa=n("code"),Kl=r("length_penalty"),Vl=r("."),Ql=d(),Ea=n("li"),Tt=n("p"),Jl=r("The code to convert checkpoints trained in the author\u2019s "),No=n("a"),Xl=r("repo"),Zl=r(` can be
found in `),Ma=n("code"),Yl=r("convert_pegasus_tf_to_pytorch.py"),ec=r("."),Ai=d(),Pt=n("h2"),Kt=n("a"),ja=n("span"),f(Go.$$.fragment),tc=d(),Ca=n("span"),oc=r("Usage Example"),Ii=d(),f(Do.$$.fragment),Oi=d(),wt=n("h2"),Vt=n("a"),Sa=n("span"),f(Uo.$$.fragment),nc=d(),Aa=n("span"),sc=r("PegasusConfig"),Li=d(),ce=n("div"),f(Bo.$$.fragment),ac=d(),xt=n("p"),rc=r("This is the configuration class to store the configuration of a "),zs=n("a"),ic=r("PegasusModel"),dc=r(`. It is used to instantiate an
PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PEGASUS
`),Wo=n("a"),lc=r("google/pegasus-large"),cc=r(" architecture."),uc=d(),zt=n("p"),pc=r("Configuration objects inherit from "),$s=n("a"),hc=r("PretrainedConfig"),mc=r(` and can be used to control the model outputs. Read the
documentation from `),qs=n("a"),fc=r("PretrainedConfig"),gc=r(" for more information."),_c=d(),Ia=n("p"),kc=r("Example:"),vc=d(),f(Ho.$$.fragment),Ni=d(),$t=n("h2"),Qt=n("a"),Oa=n("span"),f(Ro.$$.fragment),yc=d(),La=n("span"),bc=r("PegasusTokenizer"),Gi=d(),Jt=n("p"),Tc=r("warning: "),Na=n("code"),Pc=r("add_tokens"),wc=r(" does not work at the moment."),Di=d(),W=n("div"),f(Ko.$$.fragment),xc=d(),Vo=n("p"),zc=r("Construct a PEGASUS tokenizer. Based on "),Qo=n("a"),$c=r("SentencePiece"),qc=r("."),Fc=d(),Jo=n("p"),Ec=r("This tokenizer inherits from "),Fs=n("a"),Mc=r("PreTrainedTokenizer"),jc=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Cc=d(),Ce=n("div"),f(Xo.$$.fragment),Sc=d(),Zo=n("p"),Ac=r(`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Ga=n("code"),Ic=r("X"),Oc=r(" represents the sequence:"),Lc=d(),Yo=n("ul"),Es=n("li"),Nc=r("single sequence: "),Da=n("code"),Gc=r("X </s>"),Dc=d(),en=n("li"),Uc=r("pair of sequences: "),Ua=n("code"),Bc=r("A B </s>"),Wc=r(" (not intended use)"),Hc=d(),Ba=n("p"),Rc=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Kc=d(),Xt=n("div"),f(tn.$$.fragment),Vc=d(),Wa=n("p"),Qc=r("Converts a sequence of tokens (string) in a single string."),Jc=d(),Zt=n("div"),f(on.$$.fragment),Xc=d(),Ha=n("p"),Zc=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),Yc=d(),Yt=n("div"),f(nn.$$.fragment),eu=d(),Ra=n("p"),tu=r("Just EOS"),Ui=d(),qt=n("h2"),eo=n("a"),Ka=n("span"),f(sn.$$.fragment),ou=d(),Va=n("span"),nu=r("PegasusTokenizerFast"),Bi=d(),ue=n("div"),f(an.$$.fragment),su=d(),Ft=n("p"),au=r("Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),Qa=n("em"),ru=r("tokenizers"),iu=r(` library). Based on
`),rn=n("a"),du=r("Unigram"),lu=r("."),cu=d(),dn=n("p"),uu=r("This tokenizer inherits from "),Ms=n("a"),pu=r("PreTrainedTokenizerFast"),hu=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),mu=d(),Xe=n("div"),f(ln.$$.fragment),fu=d(),Ja=n("p"),gu=r("Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),_u=d(),cn=n("ul"),js=n("li"),ku=r("single sequence: "),Xa=n("code"),vu=r("X </s>"),yu=d(),un=n("li"),bu=r("pair of sequences: "),Za=n("code"),Tu=r("A B </s>"),Pu=r(" (not intended use)"),wu=d(),to=n("div"),f(pn.$$.fragment),xu=d(),Ya=n("p"),zu=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),Wi=d(),Et=n("h2"),oo=n("a"),er=n("span"),f(hn.$$.fragment),$u=d(),tr=n("span"),qu=r("PegasusModel"),Hi=d(),Fe=n("div"),f(mn.$$.fragment),Fu=d(),fn=n("p"),Eu=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Cs=n("a"),Mu=r("PreTrainedModel"),ju=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cu=d(),gn=n("p"),Su=r("This model is also a PyTorch "),_n=n("a"),Au=r("torch.nn.Module"),Iu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ou=d(),ke=n("div"),f(kn.$$.fragment),Lu=d(),Mt=n("p"),Nu=r("The "),Ss=n("a"),Gu=r("PegasusModel"),Du=r(" forward method, overrides the "),or=n("code"),Uu=r("__call__"),Bu=r(" special method."),Wu=d(),f(no.$$.fragment),Hu=d(),nr=n("p"),Ru=r("Example:"),Ku=d(),f(vn.$$.fragment),Ri=d(),jt=n("h2"),so=n("a"),sr=n("span"),f(yn.$$.fragment),Vu=d(),ar=n("span"),Qu=r("PegasusForConditionalGeneration"),Ki=d(),Ee=n("div"),f(bn.$$.fragment),Ju=d(),Tn=n("p"),Xu=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),As=n("a"),Zu=r("PreTrainedModel"),Yu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep=d(),Pn=n("p"),tp=r("This model is also a PyTorch "),wn=n("a"),op=r("torch.nn.Module"),np=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sp=d(),ve=n("div"),f(xn.$$.fragment),ap=d(),Ct=n("p"),rp=r("The "),Is=n("a"),ip=r("PegasusForConditionalGeneration"),dp=r(" forward method, overrides the "),rr=n("code"),lp=r("__call__"),cp=r(" special method."),up=d(),f(ao.$$.fragment),pp=d(),ir=n("p"),hp=r("Summarization example:"),mp=d(),f(zn.$$.fragment),Vi=d(),St=n("h2"),ro=n("a"),dr=n("span"),f($n.$$.fragment),fp=d(),lr=n("span"),gp=r("PegasusForCausalLM"),Qi=d(),qn=n("div"),Ze=n("div"),f(Fn.$$.fragment),_p=d(),cr=n("p"),kp=r("Example:"),vp=d(),f(En.$$.fragment),Ji=d(),At=n("h2"),io=n("a"),ur=n("span"),f(Mn.$$.fragment),yp=d(),pr=n("span"),bp=r("TFPegasusModel"),Xi=d(),pe=n("div"),f(jn.$$.fragment),Tp=d(),Cn=n("p"),Pp=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Os=n("a"),wp=r("TFPreTrainedModel"),xp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zp=d(),Sn=n("p"),$p=r("This model is also a "),An=n("a"),qp=r("tf.keras.Model"),Fp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ep=d(),f(lo.$$.fragment),Mp=d(),ye=n("div"),f(In.$$.fragment),jp=d(),It=n("p"),Cp=r("The "),Ls=n("a"),Sp=r("TFPegasusModel"),Ap=r(" forward method, overrides the "),hr=n("code"),Ip=r("__call__"),Op=r(" special method."),Lp=d(),f(co.$$.fragment),Np=d(),mr=n("p"),Gp=r("Example:"),Dp=d(),f(On.$$.fragment),Zi=d(),Ot=n("h2"),uo=n("a"),fr=n("span"),f(Ln.$$.fragment),Up=d(),gr=n("span"),Bp=r("TFPegasusForConditionalGeneration"),Yi=d(),he=n("div"),f(Nn.$$.fragment),Wp=d(),Gn=n("p"),Hp=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ns=n("a"),Rp=r("TFPreTrainedModel"),Kp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp=d(),Dn=n("p"),Qp=r("This model is also a "),Un=n("a"),Jp=r("tf.keras.Model"),Xp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zp=d(),f(po.$$.fragment),Yp=d(),be=n("div"),f(Bn.$$.fragment),eh=d(),Lt=n("p"),th=r("The "),Gs=n("a"),oh=r("TFPegasusForConditionalGeneration"),nh=r(" forward method, overrides the "),_r=n("code"),sh=r("__call__"),ah=r(" special method."),rh=d(),f(ho.$$.fragment),ih=d(),kr=n("p"),dh=r("Summarization example:"),lh=d(),f(Wn.$$.fragment),ed=d(),Nt=n("h2"),mo=n("a"),vr=n("span"),f(Hn.$$.fragment),ch=d(),yr=n("span"),uh=r("FlaxPegasusModel"),td=d(),L=n("div"),f(Rn.$$.fragment),ph=d(),Kn=n("p"),hh=r(`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ds=n("a"),mh=r("FlaxPreTrainedModel"),fh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh=d(),Vn=n("p"),_h=r(`This model is also a Flax Linen
`),Qn=n("a"),kh=r("flax.nn.Module"),vh=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),yh=d(),br=n("p"),bh=r("Finally, this model supports inherent JAX features such as:"),Th=d(),Re=n("ul"),Tr=n("li"),Jn=n("a"),Ph=r("Just-In-Time (JIT) compilation"),wh=d(),Pr=n("li"),Xn=n("a"),xh=r("Automatic Differentiation"),zh=d(),wr=n("li"),Zn=n("a"),$h=r("Vectorization"),qh=d(),xr=n("li"),Yn=n("a"),Fh=r("Parallelization"),Eh=d(),Te=n("div"),f(es.$$.fragment),Mh=d(),Gt=n("p"),jh=r("The "),zr=n("code"),Ch=r("FlaxPegasusPreTrainedModel"),Sh=r("forward method, overrides the "),$r=n("code"),Ah=r("__call__"),Ih=r(" special method."),Oh=d(),f(fo.$$.fragment),Lh=d(),qr=n("p"),Nh=r("Example:"),Gh=d(),f(ts.$$.fragment),Dh=d(),Ye=n("div"),f(os.$$.fragment),Uh=d(),Fr=n("p"),Bh=r("Example:"),Wh=d(),f(ns.$$.fragment),Hh=d(),et=n("div"),f(ss.$$.fragment),Rh=d(),Er=n("p"),Kh=r("Example:"),Vh=d(),f(as.$$.fragment),od=d(),Dt=n("h2"),go=n("a"),Mr=n("span"),f(rs.$$.fragment),Qh=d(),jr=n("span"),Jh=r("FlaxPegasusForConditionalGeneration"),nd=d(),N=n("div"),f(is.$$.fragment),Xh=d(),ds=n("p"),Zh=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Us=n("a"),Yh=r("FlaxPreTrainedModel"),em=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tm=d(),ls=n("p"),om=r(`This model is also a Flax Linen
`),cs=n("a"),nm=r("flax.nn.Module"),sm=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),am=d(),Cr=n("p"),rm=r("Finally, this model supports inherent JAX features such as:"),im=d(),Ke=n("ul"),Sr=n("li"),us=n("a"),dm=r("Just-In-Time (JIT) compilation"),lm=d(),Ar=n("li"),ps=n("a"),cm=r("Automatic Differentiation"),um=d(),Ir=n("li"),hs=n("a"),pm=r("Vectorization"),hm=d(),Or=n("li"),ms=n("a"),mm=r("Parallelization"),fm=d(),E=n("div"),f(fs.$$.fragment),gm=d(),Ut=n("p"),_m=r("The "),Lr=n("code"),km=r("FlaxPegasusPreTrainedModel"),vm=r("forward method, overrides the "),Nr=n("code"),ym=r("__call__"),bm=r(" special method."),Tm=d(),f(_o.$$.fragment),Pm=d(),Gr=n("p"),wm=r("Summarization example:"),xm=d(),Dr=n("blockquote"),Ur=n("blockquote"),Br=n("blockquote"),Wr=n("p"),zm=r("from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),$m=d(),Hr=n("blockquote"),Rr=n("blockquote"),Kr=n("blockquote"),Vr=n("p"),qm=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),Fm=d(),Qr=n("blockquote"),Jr=n("blockquote"),Xr=n("blockquote"),Zr=n("p"),Em=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Mm=d(),Yr=n("blockquote"),ei=n("blockquote"),gs=n("blockquote"),ko=n("h1"),vo=n("a"),ti=n("span"),f(_s.$$.fragment),jm=d(),oi=n("span"),Cm=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Sm=d(),ni=n("p"),Am=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Im=d(),si=n("p"),Om=r("Mask filling example:"),Lm=d(),ai=n("blockquote"),ri=n("blockquote"),ii=n("blockquote"),di=n("p"),Nm=r(`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019) >>> TXT = \u201CMy friends are <mask> but they eat too many
carbs.\u201D`),Gm=d(),li=n("blockquote"),ci=n("blockquote"),ui=n("blockquote"),pi=n("p"),Dm=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> input_ids =
tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Um=d(),hi=n("blockquote"),mi=n("blockquote"),fi=n("blockquote"),gi=n("p"),Bm=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Wm=d(),_i=n("blockquote"),ki=n("blockquote"),vi=n("blockquote"),yi=n("p"),Hm=r("tokenizer.decode(predictions).split()"),Rm=d(),tt=n("div"),f(ks.$$.fragment),Km=d(),bi=n("p"),Vm=r("Example:"),Qm=d(),f(vs.$$.fragment),Jm=d(),ot=n("div"),f(ys.$$.fragment),Xm=d(),Ti=n("p"),Zm=r("Example:"),Ym=d(),f(bs.$$.fragment),this.h()},l(o){const p=Sk('[data-svelte="svelte-1phssyn"]',document.head);h=s(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(o),b=s(o,"H1",{class:!0});var Ts=a(b);T=s(Ts,"A",{id:!0,class:!0,href:!0});var Pi=a(T);x=s(Pi,"SPAN",{});var wi=a(x);g(w.$$.fragment,wi),wi.forEach(t),Pi.forEach(t),P=l(Ts),$=s(Ts,"SPAN",{});var xi=a($);Ae=i(xi,"Pegasus"),xi.forEach(t),Ts.forEach(t),me=l(o),F=s(o,"P",{});var yo=a(F);we=s(yo,"STRONG",{});var zi=a(we);ae=i(zi,"DISCLAIMER:"),zi.forEach(t),Ie=i(yo," If you see something strange, file a "),re=s(yo,"A",{href:!0,rel:!0});var $i=a(re);ie=i($i,"Github Issue"),$i.forEach(t),Oe=i(yo,`
and assign @patrickvonplaten.`),yo.forEach(t),Me=l(o),D=s(o,"H2",{class:!0});var Ps=a(D);A=s(Ps,"A",{id:!0,class:!0,href:!0});var nf=a(A);xe=s(nf,"SPAN",{});var sf=a(xe);g(K.$$.fragment,sf),sf.forEach(t),nf.forEach(t),C=l(Ps),S=s(Ps,"SPAN",{});var af=a(S);Le=i(af,"Overview"),af.forEach(t),Ps.forEach(t),Y=l(o),ee=s(o,"P",{});var ad=a(ee);Ne=i(ad,"The Pegasus model was proposed in "),U=s(ad,"A",{href:!0,rel:!0});var rf=a(U);Ge=i(rf,"PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),rf.forEach(t),De=i(ad," by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),ad.forEach(t),I=l(o),fe=s(o,"P",{});var df=a(fe);de=i(df,"According to the abstract,"),df.forEach(t),je=l(o),te=s(o,"UL",{});var rd=a(te);V=s(rd,"LI",{});var lf=a(V);Ue=i(lf,`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),lf.forEach(t),Be=l(rd),B=s(rd,"LI",{});var cf=a(B);We=i(cf,"Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),cf.forEach(t),rd.forEach(t),oe=l(o),H=s(o,"P",{});var Bs=a(H);m=i(Bs,"This model was contributed by "),q=s(Bs,"A",{href:!0,rel:!0});var uf=a(q);ze=i(uf,"sshleifer"),uf.forEach(t),mt=i(Bs,". The Authors\u2019 code can be found "),$e=s(Bs,"A",{href:!0,rel:!0});var pf=a($e);Q=i(pf,"here"),pf.forEach(t),ft=i(Bs,"."),Bs.forEach(t),Ve=l(o),le=s(o,"H2",{class:!0});var id=a(le);O=s(id,"A",{id:!0,class:!0,href:!0});var hf=a(O);J=s(hf,"SPAN",{});var mf=a(J);g(qe.$$.fragment,mf),mf.forEach(t),hf.forEach(t),gt=l(id),X=s(id,"SPAN",{});var ff=a(X);_t=i(ff,"Checkpoints"),ff.forEach(t),id.forEach(t),Qe=l(o),R=s(o,"P",{});var Ws=a(R);kt=i(Ws,"All the "),qo=s(Ws,"A",{href:!0,rel:!0});var gf=a(qo);Xd=i(gf,"checkpoints"),gf.forEach(t),Zd=i(Ws,` are fine-tuned for summarization, besides
`),la=s(Ws,"EM",{});var _f=a(la);Yd=i(_f,"pegasus-large"),_f.forEach(t),el=i(Ws,", whence the other checkpoints are fine-tuned:"),Ws.forEach(t),Ei=l(o),ge=s(o,"UL",{});var nt=a(ge);ca=s(nt,"LI",{});var kf=a(ca);tl=i(kf,"Each checkpoint is 2.2 GB on disk and 568M parameters."),kf.forEach(t),ol=l(nt),ua=s(nt,"LI",{});var vf=a(ua);nl=i(vf,"FP16 is not supported (help/ideas on this appreciated!)."),vf.forEach(t),sl=l(nt),pa=s(nt,"LI",{});var yf=a(pa);al=i(yf,"Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),yf.forEach(t),rl=l(nt),Fo=s(nt,"LI",{});var dd=a(Fo);il=i(dd,"Full replication results and correctly pre-processed data can be found in this "),Eo=s(dd,"A",{href:!0,rel:!0});var bf=a(Eo);dl=i(bf,"Issue"),bf.forEach(t),ll=i(dd,"."),dd.forEach(t),cl=l(nt),Bt=s(nt,"LI",{});var qi=a(Bt);Mo=s(qi,"A",{href:!0,rel:!0});var Tf=a(Mo);ul=i(Tf,"Distilled checkpoints"),Tf.forEach(t),pl=i(qi," are described in this "),jo=s(qi,"A",{href:!0,rel:!0});var Pf=a(jo);hl=i(Pf,"paper"),Pf.forEach(t),ml=i(qi,"."),qi.forEach(t),nt.forEach(t),Mi=l(o),vt=s(o,"H3",{class:!0});var ld=a(vt);Wt=s(ld,"A",{id:!0,class:!0,href:!0});var wf=a(Wt);ha=s(wf,"SPAN",{});var xf=a(ha);g(Co.$$.fragment,xf),xf.forEach(t),wf.forEach(t),fl=l(ld),ma=s(ld,"SPAN",{});var zf=a(ma);gl=i(zf,"Examples"),zf.forEach(t),ld.forEach(t),ji=l(o),Je=s(o,"UL",{});var Hs=a(Je);Ht=s(Hs,"LI",{});var Fi=a(Ht);So=s(Fi,"A",{href:!0,rel:!0});var $f=a(So);_l=i($f,"Script"),$f.forEach(t),kl=i(Fi,` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),Ao=s(Fi,"A",{href:!0,rel:!0});var qf=a(Ao);vl=i(qf,"examples/pytorch/summarization/"),qf.forEach(t),yl=i(Fi,"."),Fi.forEach(t),bl=l(Hs),fa=s(Hs,"LI",{});var Ff=a(fa);Tl=i(Ff,"FP16 is not supported (help/ideas on this appreciated!)."),Ff.forEach(t),Pl=l(Hs),ga=s(Hs,"LI",{});var Ef=a(ga);wl=i(Ef,"The adafactor optimizer is recommended for pegasus fine-tuning."),Ef.forEach(t),Hs.forEach(t),Ci=l(o),yt=s(o,"H2",{class:!0});var cd=a(yt);Rt=s(cd,"A",{id:!0,class:!0,href:!0});var Mf=a(Rt);_a=s(Mf,"SPAN",{});var jf=a(_a);g(Io.$$.fragment,jf),jf.forEach(t),Mf.forEach(t),xl=l(cd),ka=s(cd,"SPAN",{});var Cf=a(ka);zl=i(Cf,"Implementation Notes"),Cf.forEach(t),cd.forEach(t),Si=l(o),_e=s(o,"UL",{});var st=a(_e);va=s(st,"LI",{});var Sf=a(va);ya=s(Sf,"P",{});var Af=a(ya);$l=i(Af,"All models are transformer encoder-decoders with 16 layers in each component."),Af.forEach(t),Sf.forEach(t),ql=l(st),ba=s(st,"LI",{});var If=a(ba);ws=s(If,"P",{});var ef=a(ws);Fl=i(ef,"The implementation is completely inherited from "),xs=s(ef,"A",{href:!0});var Of=a(xs);El=i(Of,"BartForConditionalGeneration"),Of.forEach(t),ef.forEach(t),If.forEach(t),Ml=l(st),Oo=s(st,"LI",{});var ud=a(Oo);Ta=s(ud,"P",{});var Lf=a(Ta);jl=i(Lf,"Some key configuration differences:"),Lf.forEach(t),Cl=l(ud),bt=s(ud,"UL",{});var Rs=a(bt);Pa=s(Rs,"LI",{});var Nf=a(Pa);Sl=i(Nf,"static, sinusoidal position embeddings"),Nf.forEach(t),Al=l(Rs),wa=s(Rs,"LI",{});var Gf=a(wa);Il=i(Gf,"the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),Gf.forEach(t),Ol=l(Rs),Lo=s(Rs,"LI",{});var pd=a(Lo);Ll=i(pd,"more beams are used ("),xa=s(pd,"CODE",{});var Df=a(xa);Nl=i(Df,"num_beams=8"),Df.forEach(t),Gl=i(pd,")"),pd.forEach(t),Rs.forEach(t),ud.forEach(t),Dl=l(st),za=s(st,"LI",{});var Uf=a(za);He=s(Uf,"P",{});var bo=a(He);Ul=i(bo,"All pretrained pegasus checkpoints are the same besides three attributes: "),$a=s(bo,"CODE",{});var Bf=a($a);Bl=i(Bf,"tokenizer.model_max_length"),Bf.forEach(t),Wl=i(bo,` (maximum
input size), `),qa=s(bo,"CODE",{});var Wf=a(qa);Hl=i(Wf,"max_length"),Wf.forEach(t),Rl=i(bo," (the maximum number of tokens to generate) and "),Fa=s(bo,"CODE",{});var Hf=a(Fa);Kl=i(Hf,"length_penalty"),Hf.forEach(t),Vl=i(bo,"."),bo.forEach(t),Uf.forEach(t),Ql=l(st),Ea=s(st,"LI",{});var Rf=a(Ea);Tt=s(Rf,"P",{});var Ks=a(Tt);Jl=i(Ks,"The code to convert checkpoints trained in the author\u2019s "),No=s(Ks,"A",{href:!0,rel:!0});var Kf=a(No);Xl=i(Kf,"repo"),Kf.forEach(t),Zl=i(Ks,` can be
found in `),Ma=s(Ks,"CODE",{});var Vf=a(Ma);Yl=i(Vf,"convert_pegasus_tf_to_pytorch.py"),Vf.forEach(t),ec=i(Ks,"."),Ks.forEach(t),Rf.forEach(t),st.forEach(t),Ai=l(o),Pt=s(o,"H2",{class:!0});var hd=a(Pt);Kt=s(hd,"A",{id:!0,class:!0,href:!0});var Qf=a(Kt);ja=s(Qf,"SPAN",{});var Jf=a(ja);g(Go.$$.fragment,Jf),Jf.forEach(t),Qf.forEach(t),tc=l(hd),Ca=s(hd,"SPAN",{});var Xf=a(Ca);oc=i(Xf,"Usage Example"),Xf.forEach(t),hd.forEach(t),Ii=l(o),g(Do.$$.fragment,o),Oi=l(o),wt=s(o,"H2",{class:!0});var md=a(wt);Vt=s(md,"A",{id:!0,class:!0,href:!0});var Zf=a(Vt);Sa=s(Zf,"SPAN",{});var Yf=a(Sa);g(Uo.$$.fragment,Yf),Yf.forEach(t),Zf.forEach(t),nc=l(md),Aa=s(md,"SPAN",{});var eg=a(Aa);sc=i(eg,"PegasusConfig"),eg.forEach(t),md.forEach(t),Li=l(o),ce=s(o,"DIV",{class:!0});var at=a(ce);g(Bo.$$.fragment,at),ac=l(at),xt=s(at,"P",{});var Vs=a(xt);rc=i(Vs,"This is the configuration class to store the configuration of a "),zs=s(Vs,"A",{href:!0});var tg=a(zs);ic=i(tg,"PegasusModel"),tg.forEach(t),dc=i(Vs,`. It is used to instantiate an
PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PEGASUS
`),Wo=s(Vs,"A",{href:!0,rel:!0});var og=a(Wo);lc=i(og,"google/pegasus-large"),og.forEach(t),cc=i(Vs," architecture."),Vs.forEach(t),uc=l(at),zt=s(at,"P",{});var Qs=a(zt);pc=i(Qs,"Configuration objects inherit from "),$s=s(Qs,"A",{href:!0});var ng=a($s);hc=i(ng,"PretrainedConfig"),ng.forEach(t),mc=i(Qs,` and can be used to control the model outputs. Read the
documentation from `),qs=s(Qs,"A",{href:!0});var sg=a(qs);fc=i(sg,"PretrainedConfig"),sg.forEach(t),gc=i(Qs," for more information."),Qs.forEach(t),_c=l(at),Ia=s(at,"P",{});var ag=a(Ia);kc=i(ag,"Example:"),ag.forEach(t),vc=l(at),g(Ho.$$.fragment,at),at.forEach(t),Ni=l(o),$t=s(o,"H2",{class:!0});var fd=a($t);Qt=s(fd,"A",{id:!0,class:!0,href:!0});var rg=a(Qt);Oa=s(rg,"SPAN",{});var ig=a(Oa);g(Ro.$$.fragment,ig),ig.forEach(t),rg.forEach(t),yc=l(fd),La=s(fd,"SPAN",{});var dg=a(La);bc=i(dg,"PegasusTokenizer"),dg.forEach(t),fd.forEach(t),Gi=l(o),Jt=s(o,"P",{});var gd=a(Jt);Tc=i(gd,"warning: "),Na=s(gd,"CODE",{});var lg=a(Na);Pc=i(lg,"add_tokens"),lg.forEach(t),wc=i(gd," does not work at the moment."),gd.forEach(t),Di=l(o),W=s(o,"DIV",{class:!0});var Pe=a(W);g(Ko.$$.fragment,Pe),xc=l(Pe),Vo=s(Pe,"P",{});var _d=a(Vo);zc=i(_d,"Construct a PEGASUS tokenizer. Based on "),Qo=s(_d,"A",{href:!0,rel:!0});var cg=a(Qo);$c=i(cg,"SentencePiece"),cg.forEach(t),qc=i(_d,"."),_d.forEach(t),Fc=l(Pe),Jo=s(Pe,"P",{});var kd=a(Jo);Ec=i(kd,"This tokenizer inherits from "),Fs=s(kd,"A",{href:!0});var ug=a(Fs);Mc=i(ug,"PreTrainedTokenizer"),ug.forEach(t),jc=i(kd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),kd.forEach(t),Cc=l(Pe),Ce=s(Pe,"DIV",{class:!0});var To=a(Ce);g(Xo.$$.fragment,To),Sc=l(To),Zo=s(To,"P",{});var vd=a(Zo);Ac=i(vd,`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Ga=s(vd,"CODE",{});var pg=a(Ga);Ic=i(pg,"X"),pg.forEach(t),Oc=i(vd," represents the sequence:"),vd.forEach(t),Lc=l(To),Yo=s(To,"UL",{});var yd=a(Yo);Es=s(yd,"LI",{});var tf=a(Es);Nc=i(tf,"single sequence: "),Da=s(tf,"CODE",{});var hg=a(Da);Gc=i(hg,"X </s>"),hg.forEach(t),tf.forEach(t),Dc=l(yd),en=s(yd,"LI",{});var bd=a(en);Uc=i(bd,"pair of sequences: "),Ua=s(bd,"CODE",{});var mg=a(Ua);Bc=i(mg,"A B </s>"),mg.forEach(t),Wc=i(bd," (not intended use)"),bd.forEach(t),yd.forEach(t),Hc=l(To),Ba=s(To,"P",{});var fg=a(Ba);Rc=i(fg,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),fg.forEach(t),To.forEach(t),Kc=l(Pe),Xt=s(Pe,"DIV",{class:!0});var Td=a(Xt);g(tn.$$.fragment,Td),Vc=l(Td),Wa=s(Td,"P",{});var gg=a(Wa);Qc=i(gg,"Converts a sequence of tokens (string) in a single string."),gg.forEach(t),Td.forEach(t),Jc=l(Pe),Zt=s(Pe,"DIV",{class:!0});var Pd=a(Zt);g(on.$$.fragment,Pd),Xc=l(Pd),Ha=s(Pd,"P",{});var _g=a(Ha);Zc=i(_g,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),_g.forEach(t),Pd.forEach(t),Yc=l(Pe),Yt=s(Pe,"DIV",{class:!0});var wd=a(Yt);g(nn.$$.fragment,wd),eu=l(wd),Ra=s(wd,"P",{});var kg=a(Ra);tu=i(kg,"Just EOS"),kg.forEach(t),wd.forEach(t),Pe.forEach(t),Ui=l(o),qt=s(o,"H2",{class:!0});var xd=a(qt);eo=s(xd,"A",{id:!0,class:!0,href:!0});var vg=a(eo);Ka=s(vg,"SPAN",{});var yg=a(Ka);g(sn.$$.fragment,yg),yg.forEach(t),vg.forEach(t),ou=l(xd),Va=s(xd,"SPAN",{});var bg=a(Va);nu=i(bg,"PegasusTokenizerFast"),bg.forEach(t),xd.forEach(t),Bi=l(o),ue=s(o,"DIV",{class:!0});var rt=a(ue);g(an.$$.fragment,rt),su=l(rt),Ft=s(rt,"P",{});var Js=a(Ft);au=i(Js,"Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),Qa=s(Js,"EM",{});var Tg=a(Qa);ru=i(Tg,"tokenizers"),Tg.forEach(t),iu=i(Js,` library). Based on
`),rn=s(Js,"A",{href:!0,rel:!0});var Pg=a(rn);du=i(Pg,"Unigram"),Pg.forEach(t),lu=i(Js,"."),Js.forEach(t),cu=l(rt),dn=s(rt,"P",{});var zd=a(dn);uu=i(zd,"This tokenizer inherits from "),Ms=s(zd,"A",{href:!0});var wg=a(Ms);pu=i(wg,"PreTrainedTokenizerFast"),wg.forEach(t),hu=i(zd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),zd.forEach(t),mu=l(rt),Xe=s(rt,"DIV",{class:!0});var Xs=a(Xe);g(ln.$$.fragment,Xs),fu=l(Xs),Ja=s(Xs,"P",{});var xg=a(Ja);gu=i(xg,"Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),xg.forEach(t),_u=l(Xs),cn=s(Xs,"UL",{});var $d=a(cn);js=s($d,"LI",{});var of=a(js);ku=i(of,"single sequence: "),Xa=s(of,"CODE",{});var zg=a(Xa);vu=i(zg,"X </s>"),zg.forEach(t),of.forEach(t),yu=l($d),un=s($d,"LI",{});var qd=a(un);bu=i(qd,"pair of sequences: "),Za=s(qd,"CODE",{});var $g=a(Za);Tu=i($g,"A B </s>"),$g.forEach(t),Pu=i(qd," (not intended use)"),qd.forEach(t),$d.forEach(t),Xs.forEach(t),wu=l(rt),to=s(rt,"DIV",{class:!0});var Fd=a(to);g(pn.$$.fragment,Fd),xu=l(Fd),Ya=s(Fd,"P",{});var qg=a(Ya);zu=i(qg,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),qg.forEach(t),Fd.forEach(t),rt.forEach(t),Wi=l(o),Et=s(o,"H2",{class:!0});var Ed=a(Et);oo=s(Ed,"A",{id:!0,class:!0,href:!0});var Fg=a(oo);er=s(Fg,"SPAN",{});var Eg=a(er);g(hn.$$.fragment,Eg),Eg.forEach(t),Fg.forEach(t),$u=l(Ed),tr=s(Ed,"SPAN",{});var Mg=a(tr);qu=i(Mg,"PegasusModel"),Mg.forEach(t),Ed.forEach(t),Hi=l(o),Fe=s(o,"DIV",{class:!0});var Po=a(Fe);g(mn.$$.fragment,Po),Fu=l(Po),fn=s(Po,"P",{});var Md=a(fn);Eu=i(Md,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Cs=s(Md,"A",{href:!0});var jg=a(Cs);Mu=i(jg,"PreTrainedModel"),jg.forEach(t),ju=i(Md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Md.forEach(t),Cu=l(Po),gn=s(Po,"P",{});var jd=a(gn);Su=i(jd,"This model is also a PyTorch "),_n=s(jd,"A",{href:!0,rel:!0});var Cg=a(_n);Au=i(Cg,"torch.nn.Module"),Cg.forEach(t),Iu=i(jd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jd.forEach(t),Ou=l(Po),ke=s(Po,"DIV",{class:!0});var it=a(ke);g(kn.$$.fragment,it),Lu=l(it),Mt=s(it,"P",{});var Zs=a(Mt);Nu=i(Zs,"The "),Ss=s(Zs,"A",{href:!0});var Sg=a(Ss);Gu=i(Sg,"PegasusModel"),Sg.forEach(t),Du=i(Zs," forward method, overrides the "),or=s(Zs,"CODE",{});var Ag=a(or);Uu=i(Ag,"__call__"),Ag.forEach(t),Bu=i(Zs," special method."),Zs.forEach(t),Wu=l(it),g(no.$$.fragment,it),Hu=l(it),nr=s(it,"P",{});var Ig=a(nr);Ru=i(Ig,"Example:"),Ig.forEach(t),Ku=l(it),g(vn.$$.fragment,it),it.forEach(t),Po.forEach(t),Ri=l(o),jt=s(o,"H2",{class:!0});var Cd=a(jt);so=s(Cd,"A",{id:!0,class:!0,href:!0});var Og=a(so);sr=s(Og,"SPAN",{});var Lg=a(sr);g(yn.$$.fragment,Lg),Lg.forEach(t),Og.forEach(t),Vu=l(Cd),ar=s(Cd,"SPAN",{});var Ng=a(ar);Qu=i(Ng,"PegasusForConditionalGeneration"),Ng.forEach(t),Cd.forEach(t),Ki=l(o),Ee=s(o,"DIV",{class:!0});var wo=a(Ee);g(bn.$$.fragment,wo),Ju=l(wo),Tn=s(wo,"P",{});var Sd=a(Tn);Xu=i(Sd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),As=s(Sd,"A",{href:!0});var Gg=a(As);Zu=i(Gg,"PreTrainedModel"),Gg.forEach(t),Yu=i(Sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sd.forEach(t),ep=l(wo),Pn=s(wo,"P",{});var Ad=a(Pn);tp=i(Ad,"This model is also a PyTorch "),wn=s(Ad,"A",{href:!0,rel:!0});var Dg=a(wn);op=i(Dg,"torch.nn.Module"),Dg.forEach(t),np=i(Ad,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ad.forEach(t),sp=l(wo),ve=s(wo,"DIV",{class:!0});var dt=a(ve);g(xn.$$.fragment,dt),ap=l(dt),Ct=s(dt,"P",{});var Ys=a(Ct);rp=i(Ys,"The "),Is=s(Ys,"A",{href:!0});var Ug=a(Is);ip=i(Ug,"PegasusForConditionalGeneration"),Ug.forEach(t),dp=i(Ys," forward method, overrides the "),rr=s(Ys,"CODE",{});var Bg=a(rr);lp=i(Bg,"__call__"),Bg.forEach(t),cp=i(Ys," special method."),Ys.forEach(t),up=l(dt),g(ao.$$.fragment,dt),pp=l(dt),ir=s(dt,"P",{});var Wg=a(ir);hp=i(Wg,"Summarization example:"),Wg.forEach(t),mp=l(dt),g(zn.$$.fragment,dt),dt.forEach(t),wo.forEach(t),Vi=l(o),St=s(o,"H2",{class:!0});var Id=a(St);ro=s(Id,"A",{id:!0,class:!0,href:!0});var Hg=a(ro);dr=s(Hg,"SPAN",{});var Rg=a(dr);g($n.$$.fragment,Rg),Rg.forEach(t),Hg.forEach(t),fp=l(Id),lr=s(Id,"SPAN",{});var Kg=a(lr);gp=i(Kg,"PegasusForCausalLM"),Kg.forEach(t),Id.forEach(t),Qi=l(o),qn=s(o,"DIV",{class:!0});var Vg=a(qn);Ze=s(Vg,"DIV",{class:!0});var ea=a(Ze);g(Fn.$$.fragment,ea),_p=l(ea),cr=s(ea,"P",{});var Qg=a(cr);kp=i(Qg,"Example:"),Qg.forEach(t),vp=l(ea),g(En.$$.fragment,ea),ea.forEach(t),Vg.forEach(t),Ji=l(o),At=s(o,"H2",{class:!0});var Od=a(At);io=s(Od,"A",{id:!0,class:!0,href:!0});var Jg=a(io);ur=s(Jg,"SPAN",{});var Xg=a(ur);g(Mn.$$.fragment,Xg),Xg.forEach(t),Jg.forEach(t),yp=l(Od),pr=s(Od,"SPAN",{});var Zg=a(pr);bp=i(Zg,"TFPegasusModel"),Zg.forEach(t),Od.forEach(t),Xi=l(o),pe=s(o,"DIV",{class:!0});var lt=a(pe);g(jn.$$.fragment,lt),Tp=l(lt),Cn=s(lt,"P",{});var Ld=a(Cn);Pp=i(Ld,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Os=s(Ld,"A",{href:!0});var Yg=a(Os);wp=i(Yg,"TFPreTrainedModel"),Yg.forEach(t),xp=i(Ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ld.forEach(t),zp=l(lt),Sn=s(lt,"P",{});var Nd=a(Sn);$p=i(Nd,"This model is also a "),An=s(Nd,"A",{href:!0,rel:!0});var e_=a(An);qp=i(e_,"tf.keras.Model"),e_.forEach(t),Fp=i(Nd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nd.forEach(t),Ep=l(lt),g(lo.$$.fragment,lt),Mp=l(lt),ye=s(lt,"DIV",{class:!0});var ct=a(ye);g(In.$$.fragment,ct),jp=l(ct),It=s(ct,"P",{});var ta=a(It);Cp=i(ta,"The "),Ls=s(ta,"A",{href:!0});var t_=a(Ls);Sp=i(t_,"TFPegasusModel"),t_.forEach(t),Ap=i(ta," forward method, overrides the "),hr=s(ta,"CODE",{});var o_=a(hr);Ip=i(o_,"__call__"),o_.forEach(t),Op=i(ta," special method."),ta.forEach(t),Lp=l(ct),g(co.$$.fragment,ct),Np=l(ct),mr=s(ct,"P",{});var n_=a(mr);Gp=i(n_,"Example:"),n_.forEach(t),Dp=l(ct),g(On.$$.fragment,ct),ct.forEach(t),lt.forEach(t),Zi=l(o),Ot=s(o,"H2",{class:!0});var Gd=a(Ot);uo=s(Gd,"A",{id:!0,class:!0,href:!0});var s_=a(uo);fr=s(s_,"SPAN",{});var a_=a(fr);g(Ln.$$.fragment,a_),a_.forEach(t),s_.forEach(t),Up=l(Gd),gr=s(Gd,"SPAN",{});var r_=a(gr);Bp=i(r_,"TFPegasusForConditionalGeneration"),r_.forEach(t),Gd.forEach(t),Yi=l(o),he=s(o,"DIV",{class:!0});var ut=a(he);g(Nn.$$.fragment,ut),Wp=l(ut),Gn=s(ut,"P",{});var Dd=a(Gn);Hp=i(Dd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ns=s(Dd,"A",{href:!0});var i_=a(Ns);Rp=i(i_,"TFPreTrainedModel"),i_.forEach(t),Kp=i(Dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd.forEach(t),Vp=l(ut),Dn=s(ut,"P",{});var Ud=a(Dn);Qp=i(Ud,"This model is also a "),Un=s(Ud,"A",{href:!0,rel:!0});var d_=a(Un);Jp=i(d_,"tf.keras.Model"),d_.forEach(t),Xp=i(Ud,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ud.forEach(t),Zp=l(ut),g(po.$$.fragment,ut),Yp=l(ut),be=s(ut,"DIV",{class:!0});var pt=a(be);g(Bn.$$.fragment,pt),eh=l(pt),Lt=s(pt,"P",{});var oa=a(Lt);th=i(oa,"The "),Gs=s(oa,"A",{href:!0});var l_=a(Gs);oh=i(l_,"TFPegasusForConditionalGeneration"),l_.forEach(t),nh=i(oa," forward method, overrides the "),_r=s(oa,"CODE",{});var c_=a(_r);sh=i(c_,"__call__"),c_.forEach(t),ah=i(oa," special method."),oa.forEach(t),rh=l(pt),g(ho.$$.fragment,pt),ih=l(pt),kr=s(pt,"P",{});var u_=a(kr);dh=i(u_,"Summarization example:"),u_.forEach(t),lh=l(pt),g(Wn.$$.fragment,pt),pt.forEach(t),ut.forEach(t),ed=l(o),Nt=s(o,"H2",{class:!0});var Bd=a(Nt);mo=s(Bd,"A",{id:!0,class:!0,href:!0});var p_=a(mo);vr=s(p_,"SPAN",{});var h_=a(vr);g(Hn.$$.fragment,h_),h_.forEach(t),p_.forEach(t),ch=l(Bd),yr=s(Bd,"SPAN",{});var m_=a(yr);uh=i(m_,"FlaxPegasusModel"),m_.forEach(t),Bd.forEach(t),td=l(o),L=s(o,"DIV",{class:!0});var ne=a(L);g(Rn.$$.fragment,ne),ph=l(ne),Kn=s(ne,"P",{});var Wd=a(Kn);hh=i(Wd,`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ds=s(Wd,"A",{href:!0});var f_=a(Ds);mh=i(f_,"FlaxPreTrainedModel"),f_.forEach(t),fh=i(Wd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wd.forEach(t),gh=l(ne),Vn=s(ne,"P",{});var Hd=a(Vn);_h=i(Hd,`This model is also a Flax Linen
`),Qn=s(Hd,"A",{href:!0,rel:!0});var g_=a(Qn);kh=i(g_,"flax.nn.Module"),g_.forEach(t),vh=i(Hd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Hd.forEach(t),yh=l(ne),br=s(ne,"P",{});var __=a(br);bh=i(__,"Finally, this model supports inherent JAX features such as:"),__.forEach(t),Th=l(ne),Re=s(ne,"UL",{});var xo=a(Re);Tr=s(xo,"LI",{});var k_=a(Tr);Jn=s(k_,"A",{href:!0,rel:!0});var v_=a(Jn);Ph=i(v_,"Just-In-Time (JIT) compilation"),v_.forEach(t),k_.forEach(t),wh=l(xo),Pr=s(xo,"LI",{});var y_=a(Pr);Xn=s(y_,"A",{href:!0,rel:!0});var b_=a(Xn);xh=i(b_,"Automatic Differentiation"),b_.forEach(t),y_.forEach(t),zh=l(xo),wr=s(xo,"LI",{});var T_=a(wr);Zn=s(T_,"A",{href:!0,rel:!0});var P_=a(Zn);$h=i(P_,"Vectorization"),P_.forEach(t),T_.forEach(t),qh=l(xo),xr=s(xo,"LI",{});var w_=a(xr);Yn=s(w_,"A",{href:!0,rel:!0});var x_=a(Yn);Fh=i(x_,"Parallelization"),x_.forEach(t),w_.forEach(t),xo.forEach(t),Eh=l(ne),Te=s(ne,"DIV",{class:!0});var ht=a(Te);g(es.$$.fragment,ht),Mh=l(ht),Gt=s(ht,"P",{});var na=a(Gt);jh=i(na,"The "),zr=s(na,"CODE",{});var z_=a(zr);Ch=i(z_,"FlaxPegasusPreTrainedModel"),z_.forEach(t),Sh=i(na,"forward method, overrides the "),$r=s(na,"CODE",{});var $_=a($r);Ah=i($_,"__call__"),$_.forEach(t),Ih=i(na," special method."),na.forEach(t),Oh=l(ht),g(fo.$$.fragment,ht),Lh=l(ht),qr=s(ht,"P",{});var q_=a(qr);Nh=i(q_,"Example:"),q_.forEach(t),Gh=l(ht),g(ts.$$.fragment,ht),ht.forEach(t),Dh=l(ne),Ye=s(ne,"DIV",{class:!0});var sa=a(Ye);g(os.$$.fragment,sa),Uh=l(sa),Fr=s(sa,"P",{});var F_=a(Fr);Bh=i(F_,"Example:"),F_.forEach(t),Wh=l(sa),g(ns.$$.fragment,sa),sa.forEach(t),Hh=l(ne),et=s(ne,"DIV",{class:!0});var aa=a(et);g(ss.$$.fragment,aa),Rh=l(aa),Er=s(aa,"P",{});var E_=a(Er);Kh=i(E_,"Example:"),E_.forEach(t),Vh=l(aa),g(as.$$.fragment,aa),aa.forEach(t),ne.forEach(t),od=l(o),Dt=s(o,"H2",{class:!0});var Rd=a(Dt);go=s(Rd,"A",{id:!0,class:!0,href:!0});var M_=a(go);Mr=s(M_,"SPAN",{});var j_=a(Mr);g(rs.$$.fragment,j_),j_.forEach(t),M_.forEach(t),Qh=l(Rd),jr=s(Rd,"SPAN",{});var C_=a(jr);Jh=i(C_,"FlaxPegasusForConditionalGeneration"),C_.forEach(t),Rd.forEach(t),nd=l(o),N=s(o,"DIV",{class:!0});var se=a(N);g(is.$$.fragment,se),Xh=l(se),ds=s(se,"P",{});var Kd=a(ds);Zh=i(Kd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Us=s(Kd,"A",{href:!0});var S_=a(Us);Yh=i(S_,"FlaxPreTrainedModel"),S_.forEach(t),em=i(Kd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kd.forEach(t),tm=l(se),ls=s(se,"P",{});var Vd=a(ls);om=i(Vd,`This model is also a Flax Linen
`),cs=s(Vd,"A",{href:!0,rel:!0});var A_=a(cs);nm=i(A_,"flax.nn.Module"),A_.forEach(t),sm=i(Vd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Vd.forEach(t),am=l(se),Cr=s(se,"P",{});var I_=a(Cr);rm=i(I_,"Finally, this model supports inherent JAX features such as:"),I_.forEach(t),im=l(se),Ke=s(se,"UL",{});var zo=a(Ke);Sr=s(zo,"LI",{});var O_=a(Sr);us=s(O_,"A",{href:!0,rel:!0});var L_=a(us);dm=i(L_,"Just-In-Time (JIT) compilation"),L_.forEach(t),O_.forEach(t),lm=l(zo),Ar=s(zo,"LI",{});var N_=a(Ar);ps=s(N_,"A",{href:!0,rel:!0});var G_=a(ps);cm=i(G_,"Automatic Differentiation"),G_.forEach(t),N_.forEach(t),um=l(zo),Ir=s(zo,"LI",{});var D_=a(Ir);hs=s(D_,"A",{href:!0,rel:!0});var U_=a(hs);pm=i(U_,"Vectorization"),U_.forEach(t),D_.forEach(t),hm=l(zo),Or=s(zo,"LI",{});var B_=a(Or);ms=s(B_,"A",{href:!0,rel:!0});var W_=a(ms);mm=i(W_,"Parallelization"),W_.forEach(t),B_.forEach(t),zo.forEach(t),fm=l(se),E=s(se,"DIV",{class:!0});var M=a(E);g(fs.$$.fragment,M),gm=l(M),Ut=s(M,"P",{});var ra=a(Ut);_m=i(ra,"The "),Lr=s(ra,"CODE",{});var H_=a(Lr);km=i(H_,"FlaxPegasusPreTrainedModel"),H_.forEach(t),vm=i(ra,"forward method, overrides the "),Nr=s(ra,"CODE",{});var R_=a(Nr);ym=i(R_,"__call__"),R_.forEach(t),bm=i(ra," special method."),ra.forEach(t),Tm=l(M),g(_o.$$.fragment,M),Pm=l(M),Gr=s(M,"P",{});var K_=a(Gr);wm=i(K_,"Summarization example:"),K_.forEach(t),xm=l(M),Dr=s(M,"BLOCKQUOTE",{});var V_=a(Dr);Ur=s(V_,"BLOCKQUOTE",{});var Q_=a(Ur);Br=s(Q_,"BLOCKQUOTE",{});var J_=a(Br);Wr=s(J_,"P",{});var X_=a(Wr);zm=i(X_,"from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),X_.forEach(t),J_.forEach(t),Q_.forEach(t),V_.forEach(t),$m=l(M),Hr=s(M,"BLOCKQUOTE",{});var Z_=a(Hr);Rr=s(Z_,"BLOCKQUOTE",{});var Y_=a(Rr);Kr=s(Y_,"BLOCKQUOTE",{});var ek=a(Kr);Vr=s(ek,"P",{});var tk=a(Vr);qm=i(tk,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),tk.forEach(t),ek.forEach(t),Y_.forEach(t),Z_.forEach(t),Fm=l(M),Qr=s(M,"BLOCKQUOTE",{});var ok=a(Qr);Jr=s(ok,"BLOCKQUOTE",{});var nk=a(Jr);Xr=s(nk,"BLOCKQUOTE",{});var sk=a(Xr);Zr=s(sk,"P",{});var ak=a(Zr);Em=i(ak,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),ak.forEach(t),sk.forEach(t),nk.forEach(t),ok.forEach(t),Mm=l(M),Yr=s(M,"BLOCKQUOTE",{});var rk=a(Yr);ei=s(rk,"BLOCKQUOTE",{});var ik=a(ei);gs=s(ik,"BLOCKQUOTE",{});var Qd=a(gs);ko=s(Qd,"H1",{class:!0});var Jd=a(ko);vo=s(Jd,"A",{id:!0,class:!0,href:!0});var dk=a(vo);ti=s(dk,"SPAN",{});var lk=a(ti);g(_s.$$.fragment,lk),lk.forEach(t),dk.forEach(t),jm=l(Jd),oi=s(Jd,"SPAN",{});var ck=a(oi);Cm=i(ck,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),ck.forEach(t),Jd.forEach(t),Sm=l(Qd),ni=s(Qd,"P",{});var uk=a(ni);Am=i(uk,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),uk.forEach(t),Qd.forEach(t),ik.forEach(t),rk.forEach(t),Im=l(M),si=s(M,"P",{});var pk=a(si);Om=i(pk,"Mask filling example:"),pk.forEach(t),Lm=l(M),ai=s(M,"BLOCKQUOTE",{});var hk=a(ai);ri=s(hk,"BLOCKQUOTE",{});var mk=a(ri);ii=s(mk,"BLOCKQUOTE",{});var fk=a(ii);di=s(fk,"P",{});var gk=a(di);Nm=i(gk,`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration >>> tokenizer =
PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019) >>> TXT = \u201CMy friends are <mask> but they eat too many
carbs.\u201D`),gk.forEach(t),fk.forEach(t),mk.forEach(t),hk.forEach(t),Gm=l(M),li=s(M,"BLOCKQUOTE",{});var _k=a(li);ci=s(_k,"BLOCKQUOTE",{});var kk=a(ci);ui=s(kk,"BLOCKQUOTE",{});var vk=a(ui);pi=s(vk,"P",{});var yk=a(pi);Dm=i(yk,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019) >>> input_ids =
tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),yk.forEach(t),vk.forEach(t),kk.forEach(t),_k.forEach(t),Um=l(M),hi=s(M,"BLOCKQUOTE",{});var bk=a(hi);mi=s(bk,"BLOCKQUOTE",{});var Tk=a(mi);fi=s(Tk,"BLOCKQUOTE",{});var Pk=a(fi);gi=s(Pk,"P",{});var wk=a(gi);Bm=i(wk,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),wk.forEach(t),Pk.forEach(t),Tk.forEach(t),bk.forEach(t),Wm=l(M),_i=s(M,"BLOCKQUOTE",{});var xk=a(_i);ki=s(xk,"BLOCKQUOTE",{});var zk=a(ki);vi=s(zk,"BLOCKQUOTE",{});var $k=a(vi);yi=s($k,"P",{});var qk=a(yi);Hm=i(qk,"tokenizer.decode(predictions).split()"),qk.forEach(t),$k.forEach(t),zk.forEach(t),xk.forEach(t),M.forEach(t),Rm=l(se),tt=s(se,"DIV",{class:!0});var ia=a(tt);g(ks.$$.fragment,ia),Km=l(ia),bi=s(ia,"P",{});var Fk=a(bi);Vm=i(Fk,"Example:"),Fk.forEach(t),Qm=l(ia),g(vs.$$.fragment,ia),ia.forEach(t),Jm=l(se),ot=s(se,"DIV",{class:!0});var da=a(ot);g(ys.$$.fragment,da),Xm=l(da),Ti=s(da,"P",{});var Ek=a(Ti);Zm=i(Ek,"Example:"),Ek.forEach(t),Ym=l(da),g(bs.$$.fragment,da),da.forEach(t),se.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Wk)),c(T,"id","pegasus"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#pegasus"),c(b,"class","relative group"),c(re,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),c(re,"rel","nofollow"),c(A,"id","overview"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#overview"),c(D,"class","relative group"),c(U,"href","https://arxiv.org/pdf/1912.08777.pdf"),c(U,"rel","nofollow"),c(q,"href","https://huggingface.co/sshleifer"),c(q,"rel","nofollow"),c($e,"href","https://github.com/google-research/pegasus"),c($e,"rel","nofollow"),c(O,"id","checkpoints"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#checkpoints"),c(le,"class","relative group"),c(qo,"href","https://huggingface.co/models?search=pegasus"),c(qo,"rel","nofollow"),c(Eo,"href","https://github.com/huggingface/transformers/issues/6844#issue-689259666"),c(Eo,"rel","nofollow"),c(Mo,"href","https://huggingface.co/models?search=distill-pegasus"),c(Mo,"rel","nofollow"),c(jo,"href","https://arxiv.org/abs/2010.13002"),c(jo,"rel","nofollow"),c(Wt,"id","examples"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#examples"),c(vt,"class","relative group"),c(So,"href","https://github.com/huggingface/transformers/tree/master/examples/research_projects/seq2seq-distillation/finetune_pegasus_xsum.sh"),c(So,"rel","nofollow"),c(Ao,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/README.md"),c(Ao,"rel","nofollow"),c(Rt,"id","implementation-notes"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#implementation-notes"),c(yt,"class","relative group"),c(xs,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(No,"href","https://github.com/google-research/pegasus"),c(No,"rel","nofollow"),c(Kt,"id","usage-example"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#usage-example"),c(Pt,"class","relative group"),c(Vt,"id","transformers.PegasusConfig"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.PegasusConfig"),c(wt,"class","relative group"),c(zs,"href","/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusModel"),c(Wo,"href","https://huggingface.co/google/pegasus-large"),c(Wo,"rel","nofollow"),c($s,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(qs,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(ce,"class","docstring"),c(Qt,"id","transformers.PegasusTokenizer"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.PegasusTokenizer"),c($t,"class","relative group"),c(Qo,"href","https://github.com/google/sentencepiece"),c(Qo,"rel","nofollow"),c(Fs,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Ce,"class","docstring"),c(Xt,"class","docstring"),c(Zt,"class","docstring"),c(Yt,"class","docstring"),c(W,"class","docstring"),c(eo,"id","transformers.PegasusTokenizerFast"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.PegasusTokenizerFast"),c(qt,"class","relative group"),c(rn,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(rn,"rel","nofollow"),c(Ms,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Xe,"class","docstring"),c(to,"class","docstring"),c(ue,"class","docstring"),c(oo,"id","transformers.PegasusModel"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.PegasusModel"),c(Et,"class","relative group"),c(Cs,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c(Ss,"href","/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusModel"),c(ke,"class","docstring"),c(Fe,"class","docstring"),c(so,"id","transformers.PegasusForConditionalGeneration"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.PegasusForConditionalGeneration"),c(jt,"class","relative group"),c(As,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(wn,"rel","nofollow"),c(Is,"href","/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.PegasusForConditionalGeneration"),c(ve,"class","docstring"),c(Ee,"class","docstring"),c(ro,"id","transformers.PegasusForCausalLM"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.PegasusForCausalLM"),c(St,"class","relative group"),c(Ze,"class","docstring"),c(qn,"class","docstring"),c(io,"id","transformers.TFPegasusModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFPegasusModel"),c(At,"class","relative group"),c(Os,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(An,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(An,"rel","nofollow"),c(Ls,"href","/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.TFPegasusModel"),c(ye,"class","docstring"),c(pe,"class","docstring"),c(uo,"id","transformers.TFPegasusForConditionalGeneration"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFPegasusForConditionalGeneration"),c(Ot,"class","relative group"),c(Ns,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(Un,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Un,"rel","nofollow"),c(Gs,"href","/docs/transformers/v4.16.2/en/model_doc/pegasus#transformers.TFPegasusForConditionalGeneration"),c(be,"class","docstring"),c(he,"class","docstring"),c(mo,"id","transformers.FlaxPegasusModel"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.FlaxPegasusModel"),c(Nt,"class","relative group"),c(Ds,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Qn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Qn,"rel","nofollow"),c(Jn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Jn,"rel","nofollow"),c(Xn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Xn,"rel","nofollow"),c(Zn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Zn,"rel","nofollow"),c(Yn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Yn,"rel","nofollow"),c(Te,"class","docstring"),c(Ye,"class","docstring"),c(et,"class","docstring"),c(L,"class","docstring"),c(go,"id","transformers.FlaxPegasusForConditionalGeneration"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.FlaxPegasusForConditionalGeneration"),c(Dt,"class","relative group"),c(Us,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(cs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(cs,"rel","nofollow"),c(us,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(us,"rel","nofollow"),c(ps,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ps,"rel","nofollow"),c(hs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(hs,"rel","nofollow"),c(ms,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ms,"rel","nofollow"),c(vo,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(ko,"class","relative group"),c(E,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(N,"class","docstring")},m(o,p){e(document.head,h),u(o,z,p),u(o,b,p),e(b,T),e(T,x),_(w,x,null),e(b,P),e(b,$),e($,Ae),u(o,me,p),u(o,F,p),e(F,we),e(we,ae),e(F,Ie),e(F,re),e(re,ie),e(F,Oe),u(o,Me,p),u(o,D,p),e(D,A),e(A,xe),_(K,xe,null),e(D,C),e(D,S),e(S,Le),u(o,Y,p),u(o,ee,p),e(ee,Ne),e(ee,U),e(U,Ge),e(ee,De),u(o,I,p),u(o,fe,p),e(fe,de),u(o,je,p),u(o,te,p),e(te,V),e(V,Ue),e(te,Be),e(te,B),e(B,We),u(o,oe,p),u(o,H,p),e(H,m),e(H,q),e(q,ze),e(H,mt),e(H,$e),e($e,Q),e(H,ft),u(o,Ve,p),u(o,le,p),e(le,O),e(O,J),_(qe,J,null),e(le,gt),e(le,X),e(X,_t),u(o,Qe,p),u(o,R,p),e(R,kt),e(R,qo),e(qo,Xd),e(R,Zd),e(R,la),e(la,Yd),e(R,el),u(o,Ei,p),u(o,ge,p),e(ge,ca),e(ca,tl),e(ge,ol),e(ge,ua),e(ua,nl),e(ge,sl),e(ge,pa),e(pa,al),e(ge,rl),e(ge,Fo),e(Fo,il),e(Fo,Eo),e(Eo,dl),e(Fo,ll),e(ge,cl),e(ge,Bt),e(Bt,Mo),e(Mo,ul),e(Bt,pl),e(Bt,jo),e(jo,hl),e(Bt,ml),u(o,Mi,p),u(o,vt,p),e(vt,Wt),e(Wt,ha),_(Co,ha,null),e(vt,fl),e(vt,ma),e(ma,gl),u(o,ji,p),u(o,Je,p),e(Je,Ht),e(Ht,So),e(So,_l),e(Ht,kl),e(Ht,Ao),e(Ao,vl),e(Ht,yl),e(Je,bl),e(Je,fa),e(fa,Tl),e(Je,Pl),e(Je,ga),e(ga,wl),u(o,Ci,p),u(o,yt,p),e(yt,Rt),e(Rt,_a),_(Io,_a,null),e(yt,xl),e(yt,ka),e(ka,zl),u(o,Si,p),u(o,_e,p),e(_e,va),e(va,ya),e(ya,$l),e(_e,ql),e(_e,ba),e(ba,ws),e(ws,Fl),e(ws,xs),e(xs,El),e(_e,Ml),e(_e,Oo),e(Oo,Ta),e(Ta,jl),e(Oo,Cl),e(Oo,bt),e(bt,Pa),e(Pa,Sl),e(bt,Al),e(bt,wa),e(wa,Il),e(bt,Ol),e(bt,Lo),e(Lo,Ll),e(Lo,xa),e(xa,Nl),e(Lo,Gl),e(_e,Dl),e(_e,za),e(za,He),e(He,Ul),e(He,$a),e($a,Bl),e(He,Wl),e(He,qa),e(qa,Hl),e(He,Rl),e(He,Fa),e(Fa,Kl),e(He,Vl),e(_e,Ql),e(_e,Ea),e(Ea,Tt),e(Tt,Jl),e(Tt,No),e(No,Xl),e(Tt,Zl),e(Tt,Ma),e(Ma,Yl),e(Tt,ec),u(o,Ai,p),u(o,Pt,p),e(Pt,Kt),e(Kt,ja),_(Go,ja,null),e(Pt,tc),e(Pt,Ca),e(Ca,oc),u(o,Ii,p),_(Do,o,p),u(o,Oi,p),u(o,wt,p),e(wt,Vt),e(Vt,Sa),_(Uo,Sa,null),e(wt,nc),e(wt,Aa),e(Aa,sc),u(o,Li,p),u(o,ce,p),_(Bo,ce,null),e(ce,ac),e(ce,xt),e(xt,rc),e(xt,zs),e(zs,ic),e(xt,dc),e(xt,Wo),e(Wo,lc),e(xt,cc),e(ce,uc),e(ce,zt),e(zt,pc),e(zt,$s),e($s,hc),e(zt,mc),e(zt,qs),e(qs,fc),e(zt,gc),e(ce,_c),e(ce,Ia),e(Ia,kc),e(ce,vc),_(Ho,ce,null),u(o,Ni,p),u(o,$t,p),e($t,Qt),e(Qt,Oa),_(Ro,Oa,null),e($t,yc),e($t,La),e(La,bc),u(o,Gi,p),u(o,Jt,p),e(Jt,Tc),e(Jt,Na),e(Na,Pc),e(Jt,wc),u(o,Di,p),u(o,W,p),_(Ko,W,null),e(W,xc),e(W,Vo),e(Vo,zc),e(Vo,Qo),e(Qo,$c),e(Vo,qc),e(W,Fc),e(W,Jo),e(Jo,Ec),e(Jo,Fs),e(Fs,Mc),e(Jo,jc),e(W,Cc),e(W,Ce),_(Xo,Ce,null),e(Ce,Sc),e(Ce,Zo),e(Zo,Ac),e(Zo,Ga),e(Ga,Ic),e(Zo,Oc),e(Ce,Lc),e(Ce,Yo),e(Yo,Es),e(Es,Nc),e(Es,Da),e(Da,Gc),e(Yo,Dc),e(Yo,en),e(en,Uc),e(en,Ua),e(Ua,Bc),e(en,Wc),e(Ce,Hc),e(Ce,Ba),e(Ba,Rc),e(W,Kc),e(W,Xt),_(tn,Xt,null),e(Xt,Vc),e(Xt,Wa),e(Wa,Qc),e(W,Jc),e(W,Zt),_(on,Zt,null),e(Zt,Xc),e(Zt,Ha),e(Ha,Zc),e(W,Yc),e(W,Yt),_(nn,Yt,null),e(Yt,eu),e(Yt,Ra),e(Ra,tu),u(o,Ui,p),u(o,qt,p),e(qt,eo),e(eo,Ka),_(sn,Ka,null),e(qt,ou),e(qt,Va),e(Va,nu),u(o,Bi,p),u(o,ue,p),_(an,ue,null),e(ue,su),e(ue,Ft),e(Ft,au),e(Ft,Qa),e(Qa,ru),e(Ft,iu),e(Ft,rn),e(rn,du),e(Ft,lu),e(ue,cu),e(ue,dn),e(dn,uu),e(dn,Ms),e(Ms,pu),e(dn,hu),e(ue,mu),e(ue,Xe),_(ln,Xe,null),e(Xe,fu),e(Xe,Ja),e(Ja,gu),e(Xe,_u),e(Xe,cn),e(cn,js),e(js,ku),e(js,Xa),e(Xa,vu),e(cn,yu),e(cn,un),e(un,bu),e(un,Za),e(Za,Tu),e(un,Pu),e(ue,wu),e(ue,to),_(pn,to,null),e(to,xu),e(to,Ya),e(Ya,zu),u(o,Wi,p),u(o,Et,p),e(Et,oo),e(oo,er),_(hn,er,null),e(Et,$u),e(Et,tr),e(tr,qu),u(o,Hi,p),u(o,Fe,p),_(mn,Fe,null),e(Fe,Fu),e(Fe,fn),e(fn,Eu),e(fn,Cs),e(Cs,Mu),e(fn,ju),e(Fe,Cu),e(Fe,gn),e(gn,Su),e(gn,_n),e(_n,Au),e(gn,Iu),e(Fe,Ou),e(Fe,ke),_(kn,ke,null),e(ke,Lu),e(ke,Mt),e(Mt,Nu),e(Mt,Ss),e(Ss,Gu),e(Mt,Du),e(Mt,or),e(or,Uu),e(Mt,Bu),e(ke,Wu),_(no,ke,null),e(ke,Hu),e(ke,nr),e(nr,Ru),e(ke,Ku),_(vn,ke,null),u(o,Ri,p),u(o,jt,p),e(jt,so),e(so,sr),_(yn,sr,null),e(jt,Vu),e(jt,ar),e(ar,Qu),u(o,Ki,p),u(o,Ee,p),_(bn,Ee,null),e(Ee,Ju),e(Ee,Tn),e(Tn,Xu),e(Tn,As),e(As,Zu),e(Tn,Yu),e(Ee,ep),e(Ee,Pn),e(Pn,tp),e(Pn,wn),e(wn,op),e(Pn,np),e(Ee,sp),e(Ee,ve),_(xn,ve,null),e(ve,ap),e(ve,Ct),e(Ct,rp),e(Ct,Is),e(Is,ip),e(Ct,dp),e(Ct,rr),e(rr,lp),e(Ct,cp),e(ve,up),_(ao,ve,null),e(ve,pp),e(ve,ir),e(ir,hp),e(ve,mp),_(zn,ve,null),u(o,Vi,p),u(o,St,p),e(St,ro),e(ro,dr),_($n,dr,null),e(St,fp),e(St,lr),e(lr,gp),u(o,Qi,p),u(o,qn,p),e(qn,Ze),_(Fn,Ze,null),e(Ze,_p),e(Ze,cr),e(cr,kp),e(Ze,vp),_(En,Ze,null),u(o,Ji,p),u(o,At,p),e(At,io),e(io,ur),_(Mn,ur,null),e(At,yp),e(At,pr),e(pr,bp),u(o,Xi,p),u(o,pe,p),_(jn,pe,null),e(pe,Tp),e(pe,Cn),e(Cn,Pp),e(Cn,Os),e(Os,wp),e(Cn,xp),e(pe,zp),e(pe,Sn),e(Sn,$p),e(Sn,An),e(An,qp),e(Sn,Fp),e(pe,Ep),_(lo,pe,null),e(pe,Mp),e(pe,ye),_(In,ye,null),e(ye,jp),e(ye,It),e(It,Cp),e(It,Ls),e(Ls,Sp),e(It,Ap),e(It,hr),e(hr,Ip),e(It,Op),e(ye,Lp),_(co,ye,null),e(ye,Np),e(ye,mr),e(mr,Gp),e(ye,Dp),_(On,ye,null),u(o,Zi,p),u(o,Ot,p),e(Ot,uo),e(uo,fr),_(Ln,fr,null),e(Ot,Up),e(Ot,gr),e(gr,Bp),u(o,Yi,p),u(o,he,p),_(Nn,he,null),e(he,Wp),e(he,Gn),e(Gn,Hp),e(Gn,Ns),e(Ns,Rp),e(Gn,Kp),e(he,Vp),e(he,Dn),e(Dn,Qp),e(Dn,Un),e(Un,Jp),e(Dn,Xp),e(he,Zp),_(po,he,null),e(he,Yp),e(he,be),_(Bn,be,null),e(be,eh),e(be,Lt),e(Lt,th),e(Lt,Gs),e(Gs,oh),e(Lt,nh),e(Lt,_r),e(_r,sh),e(Lt,ah),e(be,rh),_(ho,be,null),e(be,ih),e(be,kr),e(kr,dh),e(be,lh),_(Wn,be,null),u(o,ed,p),u(o,Nt,p),e(Nt,mo),e(mo,vr),_(Hn,vr,null),e(Nt,ch),e(Nt,yr),e(yr,uh),u(o,td,p),u(o,L,p),_(Rn,L,null),e(L,ph),e(L,Kn),e(Kn,hh),e(Kn,Ds),e(Ds,mh),e(Kn,fh),e(L,gh),e(L,Vn),e(Vn,_h),e(Vn,Qn),e(Qn,kh),e(Vn,vh),e(L,yh),e(L,br),e(br,bh),e(L,Th),e(L,Re),e(Re,Tr),e(Tr,Jn),e(Jn,Ph),e(Re,wh),e(Re,Pr),e(Pr,Xn),e(Xn,xh),e(Re,zh),e(Re,wr),e(wr,Zn),e(Zn,$h),e(Re,qh),e(Re,xr),e(xr,Yn),e(Yn,Fh),e(L,Eh),e(L,Te),_(es,Te,null),e(Te,Mh),e(Te,Gt),e(Gt,jh),e(Gt,zr),e(zr,Ch),e(Gt,Sh),e(Gt,$r),e($r,Ah),e(Gt,Ih),e(Te,Oh),_(fo,Te,null),e(Te,Lh),e(Te,qr),e(qr,Nh),e(Te,Gh),_(ts,Te,null),e(L,Dh),e(L,Ye),_(os,Ye,null),e(Ye,Uh),e(Ye,Fr),e(Fr,Bh),e(Ye,Wh),_(ns,Ye,null),e(L,Hh),e(L,et),_(ss,et,null),e(et,Rh),e(et,Er),e(Er,Kh),e(et,Vh),_(as,et,null),u(o,od,p),u(o,Dt,p),e(Dt,go),e(go,Mr),_(rs,Mr,null),e(Dt,Qh),e(Dt,jr),e(jr,Jh),u(o,nd,p),u(o,N,p),_(is,N,null),e(N,Xh),e(N,ds),e(ds,Zh),e(ds,Us),e(Us,Yh),e(ds,em),e(N,tm),e(N,ls),e(ls,om),e(ls,cs),e(cs,nm),e(ls,sm),e(N,am),e(N,Cr),e(Cr,rm),e(N,im),e(N,Ke),e(Ke,Sr),e(Sr,us),e(us,dm),e(Ke,lm),e(Ke,Ar),e(Ar,ps),e(ps,cm),e(Ke,um),e(Ke,Ir),e(Ir,hs),e(hs,pm),e(Ke,hm),e(Ke,Or),e(Or,ms),e(ms,mm),e(N,fm),e(N,E),_(fs,E,null),e(E,gm),e(E,Ut),e(Ut,_m),e(Ut,Lr),e(Lr,km),e(Ut,vm),e(Ut,Nr),e(Nr,ym),e(Ut,bm),e(E,Tm),_(_o,E,null),e(E,Pm),e(E,Gr),e(Gr,wm),e(E,xm),e(E,Dr),e(Dr,Ur),e(Ur,Br),e(Br,Wr),e(Wr,zm),e(E,$m),e(E,Hr),e(Hr,Rr),e(Rr,Kr),e(Kr,Vr),e(Vr,qm),e(E,Fm),e(E,Qr),e(Qr,Jr),e(Jr,Xr),e(Xr,Zr),e(Zr,Em),e(E,Mm),e(E,Yr),e(Yr,ei),e(ei,gs),e(gs,ko),e(ko,vo),e(vo,ti),_(_s,ti,null),e(ko,jm),e(ko,oi),e(oi,Cm),e(gs,Sm),e(gs,ni),e(ni,Am),e(E,Im),e(E,si),e(si,Om),e(E,Lm),e(E,ai),e(ai,ri),e(ri,ii),e(ii,di),e(di,Nm),e(E,Gm),e(E,li),e(li,ci),e(ci,ui),e(ui,pi),e(pi,Dm),e(E,Um),e(E,hi),e(hi,mi),e(mi,fi),e(fi,gi),e(gi,Bm),e(E,Wm),e(E,_i),e(_i,ki),e(ki,vi),e(vi,yi),e(yi,Hm),e(N,Rm),e(N,tt),_(ks,tt,null),e(tt,Km),e(tt,bi),e(bi,Vm),e(tt,Qm),_(vs,tt,null),e(N,Jm),e(N,ot),_(ys,ot,null),e(ot,Xm),e(ot,Ti),e(Ti,Zm),e(ot,Ym),_(bs,ot,null),sd=!0},p(o,[p]){const Ts={};p&2&&(Ts.$$scope={dirty:p,ctx:o}),no.$set(Ts);const Pi={};p&2&&(Pi.$$scope={dirty:p,ctx:o}),ao.$set(Pi);const wi={};p&2&&(wi.$$scope={dirty:p,ctx:o}),lo.$set(wi);const xi={};p&2&&(xi.$$scope={dirty:p,ctx:o}),co.$set(xi);const yo={};p&2&&(yo.$$scope={dirty:p,ctx:o}),po.$set(yo);const zi={};p&2&&(zi.$$scope={dirty:p,ctx:o}),ho.$set(zi);const $i={};p&2&&($i.$$scope={dirty:p,ctx:o}),fo.$set($i);const Ps={};p&2&&(Ps.$$scope={dirty:p,ctx:o}),_o.$set(Ps)},i(o){sd||(k(w.$$.fragment,o),k(K.$$.fragment,o),k(qe.$$.fragment,o),k(Co.$$.fragment,o),k(Io.$$.fragment,o),k(Go.$$.fragment,o),k(Do.$$.fragment,o),k(Uo.$$.fragment,o),k(Bo.$$.fragment,o),k(Ho.$$.fragment,o),k(Ro.$$.fragment,o),k(Ko.$$.fragment,o),k(Xo.$$.fragment,o),k(tn.$$.fragment,o),k(on.$$.fragment,o),k(nn.$$.fragment,o),k(sn.$$.fragment,o),k(an.$$.fragment,o),k(ln.$$.fragment,o),k(pn.$$.fragment,o),k(hn.$$.fragment,o),k(mn.$$.fragment,o),k(kn.$$.fragment,o),k(no.$$.fragment,o),k(vn.$$.fragment,o),k(yn.$$.fragment,o),k(bn.$$.fragment,o),k(xn.$$.fragment,o),k(ao.$$.fragment,o),k(zn.$$.fragment,o),k($n.$$.fragment,o),k(Fn.$$.fragment,o),k(En.$$.fragment,o),k(Mn.$$.fragment,o),k(jn.$$.fragment,o),k(lo.$$.fragment,o),k(In.$$.fragment,o),k(co.$$.fragment,o),k(On.$$.fragment,o),k(Ln.$$.fragment,o),k(Nn.$$.fragment,o),k(po.$$.fragment,o),k(Bn.$$.fragment,o),k(ho.$$.fragment,o),k(Wn.$$.fragment,o),k(Hn.$$.fragment,o),k(Rn.$$.fragment,o),k(es.$$.fragment,o),k(fo.$$.fragment,o),k(ts.$$.fragment,o),k(os.$$.fragment,o),k(ns.$$.fragment,o),k(ss.$$.fragment,o),k(as.$$.fragment,o),k(rs.$$.fragment,o),k(is.$$.fragment,o),k(fs.$$.fragment,o),k(_o.$$.fragment,o),k(_s.$$.fragment,o),k(ks.$$.fragment,o),k(vs.$$.fragment,o),k(ys.$$.fragment,o),k(bs.$$.fragment,o),sd=!0)},o(o){v(w.$$.fragment,o),v(K.$$.fragment,o),v(qe.$$.fragment,o),v(Co.$$.fragment,o),v(Io.$$.fragment,o),v(Go.$$.fragment,o),v(Do.$$.fragment,o),v(Uo.$$.fragment,o),v(Bo.$$.fragment,o),v(Ho.$$.fragment,o),v(Ro.$$.fragment,o),v(Ko.$$.fragment,o),v(Xo.$$.fragment,o),v(tn.$$.fragment,o),v(on.$$.fragment,o),v(nn.$$.fragment,o),v(sn.$$.fragment,o),v(an.$$.fragment,o),v(ln.$$.fragment,o),v(pn.$$.fragment,o),v(hn.$$.fragment,o),v(mn.$$.fragment,o),v(kn.$$.fragment,o),v(no.$$.fragment,o),v(vn.$$.fragment,o),v(yn.$$.fragment,o),v(bn.$$.fragment,o),v(xn.$$.fragment,o),v(ao.$$.fragment,o),v(zn.$$.fragment,o),v($n.$$.fragment,o),v(Fn.$$.fragment,o),v(En.$$.fragment,o),v(Mn.$$.fragment,o),v(jn.$$.fragment,o),v(lo.$$.fragment,o),v(In.$$.fragment,o),v(co.$$.fragment,o),v(On.$$.fragment,o),v(Ln.$$.fragment,o),v(Nn.$$.fragment,o),v(po.$$.fragment,o),v(Bn.$$.fragment,o),v(ho.$$.fragment,o),v(Wn.$$.fragment,o),v(Hn.$$.fragment,o),v(Rn.$$.fragment,o),v(es.$$.fragment,o),v(fo.$$.fragment,o),v(ts.$$.fragment,o),v(os.$$.fragment,o),v(ns.$$.fragment,o),v(ss.$$.fragment,o),v(as.$$.fragment,o),v(rs.$$.fragment,o),v(is.$$.fragment,o),v(fs.$$.fragment,o),v(_o.$$.fragment,o),v(_s.$$.fragment,o),v(ks.$$.fragment,o),v(vs.$$.fragment,o),v(ys.$$.fragment,o),v(bs.$$.fragment,o),sd=!1},d(o){t(h),o&&t(z),o&&t(b),y(w),o&&t(me),o&&t(F),o&&t(Me),o&&t(D),y(K),o&&t(Y),o&&t(ee),o&&t(I),o&&t(fe),o&&t(je),o&&t(te),o&&t(oe),o&&t(H),o&&t(Ve),o&&t(le),y(qe),o&&t(Qe),o&&t(R),o&&t(Ei),o&&t(ge),o&&t(Mi),o&&t(vt),y(Co),o&&t(ji),o&&t(Je),o&&t(Ci),o&&t(yt),y(Io),o&&t(Si),o&&t(_e),o&&t(Ai),o&&t(Pt),y(Go),o&&t(Ii),y(Do,o),o&&t(Oi),o&&t(wt),y(Uo),o&&t(Li),o&&t(ce),y(Bo),y(Ho),o&&t(Ni),o&&t($t),y(Ro),o&&t(Gi),o&&t(Jt),o&&t(Di),o&&t(W),y(Ko),y(Xo),y(tn),y(on),y(nn),o&&t(Ui),o&&t(qt),y(sn),o&&t(Bi),o&&t(ue),y(an),y(ln),y(pn),o&&t(Wi),o&&t(Et),y(hn),o&&t(Hi),o&&t(Fe),y(mn),y(kn),y(no),y(vn),o&&t(Ri),o&&t(jt),y(yn),o&&t(Ki),o&&t(Ee),y(bn),y(xn),y(ao),y(zn),o&&t(Vi),o&&t(St),y($n),o&&t(Qi),o&&t(qn),y(Fn),y(En),o&&t(Ji),o&&t(At),y(Mn),o&&t(Xi),o&&t(pe),y(jn),y(lo),y(In),y(co),y(On),o&&t(Zi),o&&t(Ot),y(Ln),o&&t(Yi),o&&t(he),y(Nn),y(po),y(Bn),y(ho),y(Wn),o&&t(ed),o&&t(Nt),y(Hn),o&&t(td),o&&t(L),y(Rn),y(es),y(fo),y(ts),y(os),y(ns),y(ss),y(as),o&&t(od),o&&t(Dt),y(rs),o&&t(nd),o&&t(N),y(is),y(fs),y(_o),y(_s),y(ks),y(vs),y(ys),y(bs)}}}const Wk={local:"pegasus",sections:[{local:"overview",title:"Overview"},{local:"checkpoints",sections:[{local:"examples",title:"Examples"}],title:"Checkpoints"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage-example",title:"Usage Example"},{local:"transformers.PegasusConfig",title:"PegasusConfig"},{local:"transformers.PegasusTokenizer",title:"PegasusTokenizer"},{local:"transformers.PegasusTokenizerFast",title:"PegasusTokenizerFast"},{local:"transformers.PegasusModel",title:"PegasusModel"},{local:"transformers.PegasusForConditionalGeneration",title:"PegasusForConditionalGeneration"},{local:"transformers.PegasusForCausalLM",title:"PegasusForCausalLM"},{local:"transformers.TFPegasusModel",title:"TFPegasusModel"},{local:"transformers.TFPegasusForConditionalGeneration",title:"TFPegasusForConditionalGeneration"},{local:"transformers.FlaxPegasusModel",title:"FlaxPegasusModel"},{local:"transformers.FlaxPegasusForConditionalGeneration",title:"FlaxPegasusForConditionalGeneration"}],title:"Pegasus"};function Hk(G,h,z){let{fw:b}=h;return G.$$set=T=>{"fw"in T&&z(0,b=T.fw)},[b]}class Zk extends Mk{constructor(h){super();jk(this,h,Hk,Bk,Ck,{fw:0})}}export{Zk as default,Wk as metadata};
