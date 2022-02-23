import{S as Pb,i as wb,s as xb,e as o,k as d,w as f,t as r,L as zb,c as n,d as t,m as l,a as s,x as g,h as i,b as c,J as e,g as u,y as _,q as k,o as v,B as b}from"../../chunks/vendor-b1433968.js";import{T as Mo}from"../../chunks/Tip-c3840994.js";import{D as C}from"../../chunks/Docstring-ff504c58.js";import{C as ht}from"../../chunks/CodeBlock-a320dbd7.js";import{I as Q}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function Eb(U){let h,z,y,T,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=n(w,"P",{});var P=s(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(P,"CODE",{});var E=s(y);T=i(E,"Module"),E.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,y),e(y,T),e(h,x)},d(w){w&&t(h)}}}function $b(U){let h,z,y,T,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=n(w,"P",{});var P=s(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(P,"CODE",{});var E=s(y);T=i(E,"Module"),E.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,y),e(y,T),e(h,x)},d(w){w&&t(h)}}}function qb(U){let h,z,y,T,x,w,P,E,Ae,ke,q,ze,le,Ie,ce,ue,Le,je,B,O,Ee,J,j,S,Ne,te,oe,Ge,W,De,Ue,A,ve,pe,Se,ne,X,Be,We,K,Ke,se,R;return{c(){h=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),y=d(),T=o("ul"),x=o("li"),w=r("having all inputs as keyword arguments (like PyTorch models), or"),P=d(),E=o("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),ke=d(),q=o("p"),ze=r("This second option is useful when using "),le=o("code"),Ie=r("tf.keras.Model.fit"),ce=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),ue=o("code"),Le=r("model(inputs)"),je=r("."),B=d(),O=o("p"),Ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),J=d(),j=o("ul"),S=o("li"),Ne=r("a single Tensor with "),te=o("code"),oe=r("input_ids"),Ge=r(" only and nothing else: "),W=o("code"),De=r("model(input_ids)"),Ue=d(),A=o("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),pe=o("code"),Se=r("model([input_ids, attention_mask])"),ne=r(" or "),X=o("code"),Be=r("model([input_ids, attention_mask, token_type_ids])"),We=d(),K=o("li"),Ke=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=o("code"),R=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){h=n(m,"P",{});var $=s(h);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),y=l(m),T=n(m,"UL",{});var $e=s(T);x=n($e,"LI",{});var mt=s(x);w=i(mt,"having all inputs as keyword arguments (like PyTorch models), or"),mt.forEach(t),P=l($e),E=n($e,"LI",{});var qe=s(E);Ae=i(qe,"having all inputs as a list, tuple or dict in the first positional arguments."),qe.forEach(t),$e.forEach(t),ke=l(m),q=n(m,"P",{});var Z=s(q);ze=i(Z,"This second option is useful when using "),le=n(Z,"CODE",{});var ft=s(le);Ie=i(ft,"tf.keras.Model.fit"),ft.forEach(t),ce=i(Z,` method which currently requires having all
the tensors in the first argument of the model call function: `),ue=n(Z,"CODE",{});var Ve=s(ue);Le=i(Ve,"model(inputs)"),Ve.forEach(t),je=i(Z,"."),Z.forEach(t),B=l(m),O=n(m,"P",{});var he=s(O);Ee=i(he,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),he.forEach(t),J=l(m),j=n(m,"UL",{});var I=s(j);S=n(I,"LI",{});var Y=s(S);Ne=i(Y,"a single Tensor with "),te=n(Y,"CODE",{});var Fe=s(te);oe=i(Fe,"input_ids"),Fe.forEach(t),Ge=i(Y," only and nothing else: "),W=n(Y,"CODE",{});var gt=s(W);De=i(gt,"model(input_ids)"),gt.forEach(t),Y.forEach(t),Ue=l(I),A=n(I,"LI",{});var ee=s(A);ve=i(ee,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),pe=n(ee,"CODE",{});var _t=s(pe);Se=i(_t,"model([input_ids, attention_mask])"),_t.forEach(t),ne=i(ee," or "),X=n(ee,"CODE",{});var Je=s(X);Be=i(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),ee.forEach(t),We=l(I),K=n(I,"LI",{});var V=s(K);Ke=i(V,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=n(V,"CODE",{});var kt=s(se);R=i(kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),kt.forEach(t),V.forEach(t),I.forEach(t)},m(m,$){u(m,h,$),e(h,z),u(m,y,$),u(m,T,$),e(T,x),e(x,w),e(T,P),e(T,E),e(E,Ae),u(m,ke,$),u(m,q,$),e(q,ze),e(q,le),e(le,Ie),e(q,ce),e(q,ue),e(ue,Le),e(q,je),u(m,B,$),u(m,O,$),e(O,Ee),u(m,J,$),u(m,j,$),e(j,S),e(S,Ne),e(S,te),e(te,oe),e(S,Ge),e(S,W),e(W,De),e(j,Ue),e(j,A),e(A,ve),e(A,pe),e(pe,Se),e(A,ne),e(A,X),e(X,Be),e(j,We),e(j,K),e(K,Ke),e(K,se),e(se,R)},d(m){m&&t(h),m&&t(y),m&&t(T),m&&t(ke),m&&t(q),m&&t(B),m&&t(O),m&&t(J),m&&t(j)}}}function Fb(U){let h,z,y,T,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=n(w,"P",{});var P=s(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(P,"CODE",{});var E=s(y);T=i(E,"Module"),E.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,y),e(y,T),e(h,x)},d(w){w&&t(h)}}}function Mb(U){let h,z,y,T,x,w,P,E,Ae,ke,q,ze,le,Ie,ce,ue,Le,je,B,O,Ee,J,j,S,Ne,te,oe,Ge,W,De,Ue,A,ve,pe,Se,ne,X,Be,We,K,Ke,se,R;return{c(){h=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),y=d(),T=o("ul"),x=o("li"),w=r("having all inputs as keyword arguments (like PyTorch models), or"),P=d(),E=o("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),ke=d(),q=o("p"),ze=r("This second option is useful when using "),le=o("code"),Ie=r("tf.keras.Model.fit"),ce=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),ue=o("code"),Le=r("model(inputs)"),je=r("."),B=d(),O=o("p"),Ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),J=d(),j=o("ul"),S=o("li"),Ne=r("a single Tensor with "),te=o("code"),oe=r("input_ids"),Ge=r(" only and nothing else: "),W=o("code"),De=r("model(input_ids)"),Ue=d(),A=o("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),pe=o("code"),Se=r("model([input_ids, attention_mask])"),ne=r(" or "),X=o("code"),Be=r("model([input_ids, attention_mask, token_type_ids])"),We=d(),K=o("li"),Ke=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=o("code"),R=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){h=n(m,"P",{});var $=s(h);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),y=l(m),T=n(m,"UL",{});var $e=s(T);x=n($e,"LI",{});var mt=s(x);w=i(mt,"having all inputs as keyword arguments (like PyTorch models), or"),mt.forEach(t),P=l($e),E=n($e,"LI",{});var qe=s(E);Ae=i(qe,"having all inputs as a list, tuple or dict in the first positional arguments."),qe.forEach(t),$e.forEach(t),ke=l(m),q=n(m,"P",{});var Z=s(q);ze=i(Z,"This second option is useful when using "),le=n(Z,"CODE",{});var ft=s(le);Ie=i(ft,"tf.keras.Model.fit"),ft.forEach(t),ce=i(Z,` method which currently requires having all
the tensors in the first argument of the model call function: `),ue=n(Z,"CODE",{});var Ve=s(ue);Le=i(Ve,"model(inputs)"),Ve.forEach(t),je=i(Z,"."),Z.forEach(t),B=l(m),O=n(m,"P",{});var he=s(O);Ee=i(he,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),he.forEach(t),J=l(m),j=n(m,"UL",{});var I=s(j);S=n(I,"LI",{});var Y=s(S);Ne=i(Y,"a single Tensor with "),te=n(Y,"CODE",{});var Fe=s(te);oe=i(Fe,"input_ids"),Fe.forEach(t),Ge=i(Y," only and nothing else: "),W=n(Y,"CODE",{});var gt=s(W);De=i(gt,"model(input_ids)"),gt.forEach(t),Y.forEach(t),Ue=l(I),A=n(I,"LI",{});var ee=s(A);ve=i(ee,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),pe=n(ee,"CODE",{});var _t=s(pe);Se=i(_t,"model([input_ids, attention_mask])"),_t.forEach(t),ne=i(ee," or "),X=n(ee,"CODE",{});var Je=s(X);Be=i(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),ee.forEach(t),We=l(I),K=n(I,"LI",{});var V=s(K);Ke=i(V,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=n(V,"CODE",{});var kt=s(se);R=i(kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),kt.forEach(t),V.forEach(t),I.forEach(t)},m(m,$){u(m,h,$),e(h,z),u(m,y,$),u(m,T,$),e(T,x),e(x,w),e(T,P),e(T,E),e(E,Ae),u(m,ke,$),u(m,q,$),e(q,ze),e(q,le),e(le,Ie),e(q,ce),e(q,ue),e(ue,Le),e(q,je),u(m,B,$),u(m,O,$),e(O,Ee),u(m,J,$),u(m,j,$),e(j,S),e(S,Ne),e(S,te),e(te,oe),e(S,Ge),e(S,W),e(W,De),e(j,Ue),e(j,A),e(A,ve),e(A,pe),e(pe,Se),e(A,ne),e(A,X),e(X,Be),e(j,We),e(j,K),e(K,Ke),e(K,se),e(se,R)},d(m){m&&t(h),m&&t(y),m&&t(T),m&&t(ke),m&&t(q),m&&t(B),m&&t(O),m&&t(J),m&&t(j)}}}function Cb(U){let h,z,y,T,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=n(w,"P",{});var P=s(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(P,"CODE",{});var E=s(y);T=i(E,"Module"),E.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,y),e(y,T),e(h,x)},d(w){w&&t(h)}}}function jb(U){let h,z,y,T,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=n(w,"P",{});var P=s(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(P,"CODE",{});var E=s(y);T=i(E,"Module"),E.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,y),e(y,T),e(h,x)},d(w){w&&t(h)}}}function Sb(U){let h,z,y,T,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){h=n(w,"P",{});var P=s(h);z=i(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(P,"CODE",{});var E=s(y);T=i(E,"Module"),E.forEach(t),x=i(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,y),e(y,T),e(h,x)},d(w){w&&t(h)}}}function Ob(U){let h,z,y,T,x,w,P,E,Ae,ke,q,ze,le,Ie,ce,ue,Le,je,B,O,Ee,J,j,S,Ne,te,oe,Ge,W,De,Ue,A,ve,pe,Se,ne,X,Be,We,K,Ke,se,R,m,$,$e,mt,qe,Z,ft,Ve,he,I,Y,Fe,gt,ee,_t,Je,V,kt,Co,Dl,Ul,fa,Bl,Wl,gd,be,ga,Kl,Hl,_a,Ql,Rl,ka,Vl,Jl,jo,Xl,So,Zl,Yl,ec,Bt,Oo,tc,oc,Ao,nc,sc,_d,vt,Wt,va,Io,ac,ba,rc,kd,Xe,Kt,Lo,ic,dc,No,lc,cc,uc,ya,pc,hc,Ta,mc,vd,bt,Ht,Pa,Go,fc,wa,gc,bd,ye,xa,za,_c,kc,Ea,Fs,vc,Ms,bc,yc,Do,$a,Tc,Pc,yt,qa,wc,xc,Fa,zc,Ec,Uo,$c,Ma,qc,Fc,Mc,Ca,He,Cc,ja,jc,Sc,Sa,Oc,Ac,Oa,Ic,Lc,Nc,Aa,Tt,Gc,Bo,Dc,Uc,Ia,Bc,Wc,yd,Pt,Qt,La,Wo,Kc,Na,Hc,Td,Ko,Pd,wt,Rt,Ga,Ho,Qc,Da,Rc,wd,me,Qo,Vc,xt,Jc,Cs,Xc,Zc,Ro,Yc,eu,tu,zt,ou,js,nu,su,Ss,au,ru,iu,Ua,du,lu,Vo,xd,Et,Vt,Ba,Jo,cu,Wa,uu,zd,Jt,pu,Ka,hu,mu,Ed,H,Xo,fu,Zo,gu,Yo,_u,ku,vu,en,bu,Os,yu,Tu,Pu,Oe,tn,wu,on,xu,Ha,zu,Eu,$u,nn,As,qu,Qa,Fu,Mu,sn,Cu,Ra,ju,Su,Ou,Va,Au,Iu,Xt,an,Lu,Ja,Nu,Gu,Zt,rn,Du,Xa,Uu,Bu,Yt,dn,Wu,Za,Ku,$d,$t,eo,Ya,ln,Hu,er,Qu,qd,fe,cn,Ru,qt,Vu,tr,Ju,Xu,un,Zu,Yu,ep,pn,tp,Is,op,np,sp,Ze,hn,ap,or,rp,ip,mn,Ls,dp,nr,lp,cp,fn,up,sr,pp,hp,mp,to,gn,fp,ar,gp,Fd,Ft,oo,rr,_n,_p,ir,kp,Md,Me,kn,vp,vn,bp,Ns,yp,Tp,Pp,bn,wp,yn,xp,zp,Ep,Te,Tn,$p,Mt,qp,Gs,Fp,Mp,dr,Cp,jp,Sp,no,Op,lr,Ap,Ip,Pn,Cd,Ct,so,cr,wn,Lp,ur,Np,jd,Ce,xn,Gp,zn,Dp,Ds,Up,Bp,Wp,En,Kp,$n,Hp,Qp,Rp,G,qn,Vp,jt,Jp,Us,Xp,Zp,pr,Yp,eh,th,ao,oh,hr,nh,sh,mr,fr,gr,_r,ah,rh,kr,vr,br,yr,ih,dh,Tr,Pr,wr,xr,lh,ch,zr,Er,Fn,ro,io,$r,Mn,uh,qr,ph,hh,Fr,mh,Sd,St,lo,Mr,Cn,fh,Cr,gh,Od,jn,Ye,Sn,_h,jr,kh,vh,On,Ad,Ot,co,Sr,An,bh,Or,yh,Id,ge,In,Th,Ln,Ph,Bs,wh,xh,zh,Nn,Eh,Gn,$h,qh,Fh,uo,Mh,Pe,Dn,Ch,At,jh,Ws,Sh,Oh,Ar,Ah,Ih,Lh,po,Nh,Ir,Gh,Dh,Un,Ld,It,ho,Lr,Bn,Uh,Nr,Bh,Nd,_e,Wn,Wh,Kn,Kh,Ks,Hh,Qh,Rh,Hn,Vh,Qn,Jh,Xh,Zh,mo,Yh,D,Rn,em,Lt,tm,Hs,om,nm,Gr,sm,am,rm,fo,im,Dr,dm,lm,Ur,Br,Wr,Kr,cm,um,Hr,Qr,Rr,Vr,pm,hm,Jr,Xr,Zr,Yr,mm,fm,ei,ti,Vn,go,_o,oi,Jn,gm,ni,_m,km,si,vm,Gd,Nt,ko,ai,Xn,bm,ri,ym,Dd,L,Zn,Tm,Yn,Pm,Qs,wm,xm,zm,es,Em,ts,$m,qm,Fm,ii,Mm,Cm,Qe,di,os,jm,Sm,li,ns,Om,Am,ci,ss,Im,Lm,ui,as,Nm,Gm,we,rs,Dm,Gt,Um,pi,Bm,Wm,hi,Km,Hm,Qm,vo,Rm,mi,Vm,Jm,is,Xm,et,ds,Zm,fi,Ym,ef,ls,tf,tt,cs,of,gi,nf,sf,us,Ud,Dt,bo,_i,ps,af,ki,rf,Bd,N,hs,df,ms,lf,Rs,cf,uf,pf,fs,hf,gs,mf,ff,gf,vi,_f,kf,Re,bi,_s,vf,bf,yi,ks,yf,Tf,Ti,vs,Pf,wf,Pi,bs,xf,zf,F,ys,Ef,Ut,$f,wi,qf,Ff,xi,Mf,Cf,jf,yo,Sf,zi,Of,Af,Ei,$i,qi,Fi,If,Lf,Mi,Ci,ji,Si,Nf,Gf,Oi,Ai,Ii,Li,Df,Uf,Ni,Gi,Ts,To,Po,Di,Ps,Bf,Ui,Wf,Kf,Bi,Hf,Qf,Wi,Rf,Vf,Ki,Hi,Qi,Ri,Jf,Xf,Vi,Ji,Xi,Zi,Zf,Yf,Yi,ed,td,od,eg,tg,nd,sd,ad,rd,og,ng,ot,ws,sg,id,ag,rg,xs,ig,nt,zs,dg,dd,lg,cg,Es,Wd;return w=new Q({}),J=new Q({}),Fe=new Q({}),Io=new Q({}),Go=new Q({}),Wo=new Q({}),Ko=new ht({props:{code:`from transformers import PegasusForConditionalGeneration, PegasusTokenizer
import torch
src_text = [
    """ PG&E stated it scheduled the blackouts in response to forecasts for high winds amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."""
]

model_name = 'google/pegasus-xsum'
device = 'cuda' if torch.cuda.is_available() else 'cpu'
tokenizer = PegasusTokenizer.from_pretrained(model_name)
model = PegasusForConditionalGeneration.from_pretrained(model_name).to(device)
batch = tokenizer(src_text, truncation=True, padding='longest', return_tensors="pt").to(device)
translated = model.generate(**batch)
tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=True)
assert tgt_text[0] == "California's largest electricity provider has turned off power to hundreds of thousands of customers.",`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusForConditionalGeneration, PegasusTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&quot;&quot; PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;&quot;&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&#x27;google/pegasus-xsum&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>device = <span class="hljs-string">&#x27;cuda&#x27;</span> <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> <span class="hljs-string">&#x27;cpu&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusForConditionalGeneration.from_pretrained(model_name).to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer(src_text, truncation=<span class="hljs-literal">True</span>, padding=<span class="hljs-string">&#x27;longest&#x27;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> tgt_text[<span class="hljs-number">0</span>] == <span class="hljs-string">&quot;California&#x27;s largest electricity provider has turned off power to hundreds of thousands of customers.&quot;</span>`}}),Ho=new Q({}),Qo=new C({props:{name:"class transformers.PegasusConfig",anchor:"transformers.PegasusConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 0"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"forced_eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/configuration_pegasus.py#L29",parametersDescription:[{anchor:"transformers.PegasusConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the PEGASUS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusModel">PegasusModel</a> or
<a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.TFPegasusModel">TFPegasusModel</a>.`,name:"vocab_size"},{anchor:"transformers.PegasusConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.PegasusConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.PegasusConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.PegasusConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.PegasusConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.PegasusConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.PegasusConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.PegasusConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.PegasusConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.PegasusConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.PegasusConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.PegasusConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.PegasusConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.PegasusConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.PegasusConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.PegasusConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.PegasusConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Vo=new ht({props:{code:`from transformers import PegasusModel, PegasusConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Jo=new Q({}),Xo=new C({props:{name:"class transformers.PegasusTokenizer",anchor:"transformers.PegasusTokenizer",parameters:[{name:"vocab_file",val:""},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/tokenization_pegasus.py#L41",parametersDescription:[{anchor:"transformers.PegasusTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.PegasusTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PegasusTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of
sequence. The token used is the <code>sep_token</code>.</p>

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
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for SentencePiece</a> can be used, among other things, to set:</p>
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
</ul>`,name:"sp_model_kwargs"}]}}),tn=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/tokenization_pegasus.py#L253",parametersDescription:[{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),an=new C({props:{name:"convert_tokens_to_string",anchor:"transformers.PegasusTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/tokenization_pegasus.py#L227"}}),rn=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/tokenization_pegasus.py#L242"}}),dn=new C({props:{name:"num_special_tokens_to_add",anchor:"transformers.PegasusTokenizer.num_special_tokens_to_add",parameters:[{name:"pair",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/tokenization_pegasus.py#L232"}}),ln=new Q({}),cn=new C({props:{name:"class transformers.PegasusTokenizerFast",anchor:"transformers.PegasusTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L52",parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.PegasusTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PegasusTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of
sequence. The token used is the <code>sep_token</code>.</p>

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
that uses the tokens 2 - 104 only for pretraining</unk_2,></mask_2>`,name:"additional_special_tokens"}]}}),hn=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L175",parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gn=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L164"}}),_n=new Q({}),kn=new C({props:{name:"class transformers.PegasusModel",anchor:"transformers.PegasusModel",parameters:[{name:"config",val:": PegasusConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_pegasus.py#L1128",parametersDescription:[{anchor:"transformers.PegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Tn=new C({props:{name:"forward",anchor:"transformers.PegasusModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_pegasus.py#L1177",parametersDescription:[{anchor:"transformers.PegasusModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.PegasusModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PegasusModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PegasusModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.PegasusModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PegasusModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PegasusModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new Mo({props:{$$slots:{default:[Eb]},$$scope:{ctx:U}}}),Pn=new ht({props:{code:`from transformers import PegasusTokenizer, PegasusModel

tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-large")
model = PegasusModel.from_pretrained("google/pegasus-large")

input_ids = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt").input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusModel.from_pretrained(<span class="hljs-string">&quot;google/pegasus-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),wn=new Q({}),xn=new C({props:{name:"class transformers.PegasusForConditionalGeneration",anchor:"transformers.PegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_pegasus.py#L1274",parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qn=new C({props:{name:"forward",anchor:"transformers.PegasusForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_pegasus.py#L1341",parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Pegasus uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PegasusForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PegasusForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PegasusForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PegasusForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ao=new Mo({props:{$$slots:{default:[$b]},$$scope:{ctx:U}}}),Mn=new Q({}),Cn=new Q({}),Sn=new C({props:{name:"forward",anchor:"transformers.PegasusForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_pegasus.py#L1528",parametersDescription:[{anchor:"transformers.PegasusForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a>
for details.</p>
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
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2
tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two
additional tensors are only required when the model is used as a decoder in a Sequence to Sequence
model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential
decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PegasusForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.PegasusForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.PegasusForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PegasusForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.PegasusForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the
cached key, value states of the self-attention and the cross-attention layers if model is used in
encoder-decoder setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new ht({props:{code:`from transformers import PegasusTokenizer, PegasusForCausalLM

tokenizer = PegasusTokenizer.from_pretrained('facebook/bart-large')
model = PegasusForCausalLM.from_pretrained('facebook/bart-large', add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusForCausalLM.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),An=new Q({}),In=new C({props:{name:"class transformers.TFPegasusModel",anchor:"transformers.TFPegasusModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1220",parametersDescription:[{anchor:"transformers.TFPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),uo=new Mo({props:{$$slots:{default:[qb]},$$scope:{ctx:U}}}),Dn=new C({props:{name:"call",anchor:"transformers.TFPegasusModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1232",parametersDescription:[{anchor:"transformers.TFPegasusModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFPegasusModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation
output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to return the attentions tensors of all
attention layers. See <code>attentions</code> under returned tensors for more detail. This argument can be used only
in eager mode, in graph mode the value in the config will be used instead.`,name:"use_cache"},{anchor:"transformers.TFPegasusModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFPegasusModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFPegasusModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),po=new Mo({props:{$$slots:{default:[Fb]},$$scope:{ctx:U}}}),Un=new ht({props:{code:`from transformers import PegasusTokenizer, TFPegasusModel
import tensorflow as tf

tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-large')
model = TFPegasusModel.from_pretrained('google/pegasus-large')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, TFPegasusModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPegasusModel.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Bn=new Q({}),Wn=new C({props:{name:"class transformers.TFPegasusForConditionalGeneration",anchor:"transformers.TFPegasusForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1327",parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),mo=new Mo({props:{$$slots:{default:[Mb]},$$scope:{ctx:U}}}),Rn=new C({props:{name:"call",anchor:"transformers.TFPegasusForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1360",parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation
output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to return the attentions tensors of all
attention layers. See <code>attentions</code> under returned tensors for more detail. This argument can be used only
in eager mode, in graph mode the value in the config will be used instead.`,name:"use_cache"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fo=new Mo({props:{$$slots:{default:[Cb]},$$scope:{ctx:U}}}),Jn=new Q({}),Xn=new Q({}),Zn=new C({props:{name:"class transformers.FlaxPegasusModel",anchor:"transformers.FlaxPegasusModel",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1216",parametersDescription:[{anchor:"transformers.FlaxPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),rs=new C({props:{name:"__call__",anchor:"transformers.FlaxPegasusPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1151",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new Mo({props:{$$slots:{default:[jb]},$$scope:{ctx:U}}}),is=new ht({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusModel

tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-large')
model = FlaxPegasusModel.from_pretrained('google/pegasus-large')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusModel.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ds=new C({props:{name:"encode",anchor:"transformers.FlaxPegasusPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L975",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ls=new ht({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained('google/pegasus-large')
tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-large')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='np')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),cs=new C({props:{name:"decode",anchor:"transformers.FlaxPegasusPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1038",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),us=new ht({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained('google/pegasus-large')
tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-large')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='np')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),ps=new Q({}),hs=new C({props:{name:"class transformers.FlaxPegasusForConditionalGeneration",anchor:"transformers.FlaxPegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1303",parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),ys=new C({props:{name:"__call__",anchor:"transformers.FlaxPegasusPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1151",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusConfig"
>PegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new Mo({props:{$$slots:{default:[Sb]},$$scope:{ctx:U}}}),Ps=new Q({}),ws=new C({props:{name:"encode",anchor:"transformers.FlaxPegasusPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L975",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xs=new ht({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained('google/pegasus-large')
tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-large')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='np')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),zs=new C({props:{name:"decode",anchor:"transformers.FlaxPegasusForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1307",parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.pegasus.configuration_pegasus.PegasusConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached
key, value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Es=new ht({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained('google/pegasus-large')
tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-large')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='np')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=o("meta"),z=d(),y=o("h1"),T=o("a"),x=o("span"),f(w.$$.fragment),P=d(),E=o("span"),Ae=r("Pegasus"),ke=d(),q=o("p"),ze=o("strong"),le=r("DISCLAIMER:"),Ie=r(" If you see something strange, file a "),ce=o("a"),ue=r("Github Issue"),Le=r(`
and assign @patrickvonplaten.`),je=d(),B=o("h2"),O=o("a"),Ee=o("span"),f(J.$$.fragment),j=d(),S=o("span"),Ne=r("Overview"),te=d(),oe=o("p"),Ge=r("The Pegasus model was proposed in "),W=o("a"),De=r("PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),Ue=r(" by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),A=d(),ve=o("p"),pe=r("According to the abstract,"),Se=d(),ne=o("ul"),X=o("li"),Be=r(`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),We=d(),K=o("li"),Ke=r("Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),se=d(),R=o("p"),m=r("This model was contributed by "),$=o("a"),$e=r("sshleifer"),mt=r(". The Authors\u2019 code can be found "),qe=o("a"),Z=r("here"),ft=r("."),Ve=d(),he=o("h2"),I=o("a"),Y=o("span"),f(Fe.$$.fragment),gt=d(),ee=o("span"),_t=r("Checkpoints"),Je=d(),V=o("p"),kt=r("All the "),Co=o("a"),Dl=r("checkpoints"),Ul=r(` are fine-tuned for summarization, besides
`),fa=o("em"),Bl=r("pegasus-large"),Wl=r(", whence the other checkpoints are fine-tuned:"),gd=d(),be=o("ul"),ga=o("li"),Kl=r("Each checkpoint is 2.2 GB on disk and 568M parameters."),Hl=d(),_a=o("li"),Ql=r("FP16 is not supported (help/ideas on this appreciated!)."),Rl=d(),ka=o("li"),Vl=r("Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),Jl=d(),jo=o("li"),Xl=r("Full replication results and correctly pre-processed data can be found in this "),So=o("a"),Zl=r("Issue"),Yl=r("."),ec=d(),Bt=o("li"),Oo=o("a"),tc=r("Distilled checkpoints"),oc=r(" are described in this "),Ao=o("a"),nc=r("paper"),sc=r("."),_d=d(),vt=o("h3"),Wt=o("a"),va=o("span"),f(Io.$$.fragment),ac=d(),ba=o("span"),rc=r("Examples"),kd=d(),Xe=o("ul"),Kt=o("li"),Lo=o("a"),ic=r("Script"),dc=r(` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),No=o("a"),lc=r("examples/pytorch/summarization/"),cc=r("."),uc=d(),ya=o("li"),pc=r("FP16 is not supported (help/ideas on this appreciated!)."),hc=d(),Ta=o("li"),mc=r("The adafactor optimizer is recommended for pegasus fine-tuning."),vd=d(),bt=o("h2"),Ht=o("a"),Pa=o("span"),f(Go.$$.fragment),fc=d(),wa=o("span"),gc=r("Implementation Notes"),bd=d(),ye=o("ul"),xa=o("li"),za=o("p"),_c=r("All models are transformer encoder-decoders with 16 layers in each component."),kc=d(),Ea=o("li"),Fs=o("p"),vc=r("The implementation is completely inherited from "),Ms=o("a"),bc=r("BartForConditionalGeneration"),yc=d(),Do=o("li"),$a=o("p"),Tc=r("Some key configuration differences:"),Pc=d(),yt=o("ul"),qa=o("li"),wc=r("static, sinusoidal position embeddings"),xc=d(),Fa=o("li"),zc=r("the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),Ec=d(),Uo=o("li"),$c=r("more beams are used ("),Ma=o("code"),qc=r("num_beams=8"),Fc=r(")"),Mc=d(),Ca=o("li"),He=o("p"),Cc=r("All pretrained pegasus checkpoints are the same besides three attributes: "),ja=o("code"),jc=r("tokenizer.model_max_length"),Sc=r(` (maximum
input size), `),Sa=o("code"),Oc=r("max_length"),Ac=r(" (the maximum number of tokens to generate) and "),Oa=o("code"),Ic=r("length_penalty"),Lc=r("."),Nc=d(),Aa=o("li"),Tt=o("p"),Gc=r("The code to convert checkpoints trained in the author\u2019s "),Bo=o("a"),Dc=r("repo"),Uc=r(` can be
found in `),Ia=o("code"),Bc=r("convert_pegasus_tf_to_pytorch.py"),Wc=r("."),yd=d(),Pt=o("h2"),Qt=o("a"),La=o("span"),f(Wo.$$.fragment),Kc=d(),Na=o("span"),Hc=r("Usage Example"),Td=d(),f(Ko.$$.fragment),Pd=d(),wt=o("h2"),Rt=o("a"),Ga=o("span"),f(Ho.$$.fragment),Qc=d(),Da=o("span"),Rc=r("PegasusConfig"),wd=d(),me=o("div"),f(Qo.$$.fragment),Vc=d(),xt=o("p"),Jc=r("This is the configuration class to store the configuration of a "),Cs=o("a"),Xc=r("PegasusModel"),Zc=r(`. It is used to
instantiate an PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the PEGASUS `),Ro=o("a"),Yc=r("google/pegasus-large"),eu=r(" architecture."),tu=d(),zt=o("p"),ou=r("Configuration objects inherit from "),js=o("a"),nu=r("PretrainedConfig"),su=r(` and can be used to control the model
outputs. Read the documentation from `),Ss=o("a"),au=r("PretrainedConfig"),ru=r(" for more information."),iu=d(),Ua=o("p"),du=r("Example:"),lu=d(),f(Vo.$$.fragment),xd=d(),Et=o("h2"),Vt=o("a"),Ba=o("span"),f(Jo.$$.fragment),cu=d(),Wa=o("span"),uu=r("PegasusTokenizer"),zd=d(),Jt=o("p"),pu=r("warning: "),Ka=o("code"),hu=r("add_tokens"),mu=r(" does not work at the moment."),Ed=d(),H=o("div"),f(Xo.$$.fragment),fu=d(),Zo=o("p"),gu=r("Construct a PEGASUS tokenizer. Based on "),Yo=o("a"),_u=r("SentencePiece"),ku=r("."),vu=d(),en=o("p"),bu=r("This tokenizer inherits from "),Os=o("a"),yu=r("PreTrainedTokenizer"),Tu=r(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Pu=d(),Oe=o("div"),f(tn.$$.fragment),wu=d(),on=o("p"),xu=r(`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Ha=o("code"),zu=r("X"),Eu=r(" represents the sequence:"),$u=d(),nn=o("ul"),As=o("li"),qu=r("single sequence: "),Qa=o("code"),Fu=r("X </s>"),Mu=d(),sn=o("li"),Cu=r("pair of sequences: "),Ra=o("code"),ju=r("A B </s>"),Su=r(" (not intended use)"),Ou=d(),Va=o("p"),Au=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Iu=d(),Xt=o("div"),f(an.$$.fragment),Lu=d(),Ja=o("p"),Nu=r("Converts a sequence of tokens (string) in a single string."),Gu=d(),Zt=o("div"),f(rn.$$.fragment),Du=d(),Xa=o("p"),Uu=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),Bu=d(),Yt=o("div"),f(dn.$$.fragment),Wu=d(),Za=o("p"),Ku=r("Just EOS"),$d=d(),$t=o("h2"),eo=o("a"),Ya=o("span"),f(ln.$$.fragment),Hu=d(),er=o("span"),Qu=r("PegasusTokenizerFast"),qd=d(),fe=o("div"),f(cn.$$.fragment),Ru=d(),qt=o("p"),Vu=r("Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),tr=o("em"),Ju=r("tokenizers"),Xu=r(" library). Based on "),un=o("a"),Zu=r("Unigram"),Yu=r("."),ep=d(),pn=o("p"),tp=r("This tokenizer inherits from "),Is=o("a"),op=r("PreTrainedTokenizerFast"),np=r(` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),sp=d(),Ze=o("div"),f(hn.$$.fragment),ap=d(),or=o("p"),rp=r("Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),ip=d(),mn=o("ul"),Ls=o("li"),dp=r("single sequence: "),nr=o("code"),lp=r("X </s>"),cp=d(),fn=o("li"),up=r("pair of sequences: "),sr=o("code"),pp=r("A B </s>"),hp=r(" (not intended use)"),mp=d(),to=o("div"),f(gn.$$.fragment),fp=d(),ar=o("p"),gp=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),Fd=d(),Ft=o("h2"),oo=o("a"),rr=o("span"),f(_n.$$.fragment),_p=d(),ir=o("span"),kp=r("PegasusModel"),Md=d(),Me=o("div"),f(kn.$$.fragment),vp=d(),vn=o("p"),bp=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ns=o("a"),yp=r("PreTrainedModel"),Tp=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Pp=d(),bn=o("p"),wp=r("This model is also a PyTorch "),yn=o("a"),xp=r("torch.nn.Module"),zp=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ep=d(),Te=o("div"),f(Tn.$$.fragment),$p=d(),Mt=o("p"),qp=r("The "),Gs=o("a"),Fp=r("PegasusModel"),Mp=r(" forward method, overrides the "),dr=o("code"),Cp=r("__call__"),jp=r(" special method."),Sp=d(),f(no.$$.fragment),Op=d(),lr=o("p"),Ap=r("Example:"),Ip=d(),f(Pn.$$.fragment),Cd=d(),Ct=o("h2"),so=o("a"),cr=o("span"),f(wn.$$.fragment),Lp=d(),ur=o("span"),Np=r("PegasusForConditionalGeneration"),jd=d(),Ce=o("div"),f(xn.$$.fragment),Gp=d(),zn=o("p"),Dp=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ds=o("a"),Up=r("PreTrainedModel"),Bp=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Wp=d(),En=o("p"),Kp=r("This model is also a PyTorch "),$n=o("a"),Hp=r("torch.nn.Module"),Qp=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Rp=d(),G=o("div"),f(qn.$$.fragment),Vp=d(),jt=o("p"),Jp=r("The "),Us=o("a"),Xp=r("PegasusForConditionalGeneration"),Zp=r(" forward method, overrides the "),pr=o("code"),Yp=r("__call__"),eh=r(" special method."),th=d(),f(ao.$$.fragment),oh=d(),hr=o("p"),nh=r("Summarization example::"),sh=d(),mr=o("blockquote"),fr=o("blockquote"),gr=o("blockquote"),_r=o("p"),ah=r("from transformers import PegasusTokenizer, PegasusForConditionalGeneration"),rh=d(),kr=o("blockquote"),vr=o("blockquote"),br=o("blockquote"),yr=o("p"),ih=r(`model = PegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-xsum\u2019)
tokenizer = PegasusTokenizer.from_pretrained(\u2018google/pegasus-xsum\u2019)`),dh=d(),Tr=o("blockquote"),Pr=o("blockquote"),wr=o("blockquote"),xr=o("p"),lh=r(`ARTICLE_TO_SUMMARIZE = (
\u2026 \u201CPG&E stated it scheduled the blackouts in response to forecasts for high winds \u201D
\u2026 \u201Camid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were \u201D
\u2026 \u201Cscheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.\u201D
\u2026 )
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018pt\u2019)`),ch=d(),zr=o("blockquote"),Er=o("blockquote"),Fn=o("blockquote"),ro=o("h1"),io=o("a"),$r=o("span"),f(Mn.$$.fragment),uh=d(),qr=o("span"),ph=r("Generate Summary"),hh=d(),Fr=o("p"),mh=r(`summary_ids = model.generate(inputs[\u2018input_ids\u2019])
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),Sd=d(),St=o("h2"),lo=o("a"),Mr=o("span"),f(Cn.$$.fragment),fh=d(),Cr=o("span"),gh=r("PegasusForCausalLM"),Od=d(),jn=o("div"),Ye=o("div"),f(Sn.$$.fragment),_h=d(),jr=o("p"),kh=r("Example:"),vh=d(),f(On.$$.fragment),Ad=d(),Ot=o("h2"),co=o("a"),Sr=o("span"),f(An.$$.fragment),bh=d(),Or=o("span"),yh=r("TFPegasusModel"),Id=d(),ge=o("div"),f(In.$$.fragment),Th=d(),Ln=o("p"),Ph=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Bs=o("a"),wh=r("TFPreTrainedModel"),xh=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),zh=d(),Nn=o("p"),Eh=r("This model is also a "),Gn=o("a"),$h=r("tf.keras.Model"),qh=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Fh=d(),f(uo.$$.fragment),Mh=d(),Pe=o("div"),f(Dn.$$.fragment),Ch=d(),At=o("p"),jh=r("The "),Ws=o("a"),Sh=r("TFPegasusModel"),Oh=r(" forward method, overrides the "),Ar=o("code"),Ah=r("__call__"),Ih=r(" special method."),Lh=d(),f(po.$$.fragment),Nh=d(),Ir=o("p"),Gh=r("Example:"),Dh=d(),f(Un.$$.fragment),Ld=d(),It=o("h2"),ho=o("a"),Lr=o("span"),f(Bn.$$.fragment),Uh=d(),Nr=o("span"),Bh=r("TFPegasusForConditionalGeneration"),Nd=d(),_e=o("div"),f(Wn.$$.fragment),Wh=d(),Kn=o("p"),Kh=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ks=o("a"),Hh=r("TFPreTrainedModel"),Qh=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Rh=d(),Hn=o("p"),Vh=r("This model is also a "),Qn=o("a"),Jh=r("tf.keras.Model"),Xh=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Zh=d(),f(mo.$$.fragment),Yh=d(),D=o("div"),f(Rn.$$.fragment),em=d(),Lt=o("p"),tm=r("The "),Hs=o("a"),om=r("TFPegasusForConditionalGeneration"),nm=r(" forward method, overrides the "),Gr=o("code"),sm=r("__call__"),am=r(" special method."),rm=d(),f(fo.$$.fragment),im=d(),Dr=o("p"),dm=r("Summarization example::"),lm=d(),Ur=o("blockquote"),Br=o("blockquote"),Wr=o("blockquote"),Kr=o("p"),cm=r("from transformers import PegasusTokenizer, TFPegasusForConditionalGeneration"),um=d(),Hr=o("blockquote"),Qr=o("blockquote"),Rr=o("blockquote"),Vr=o("p"),pm=r(`model = TFPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-xsum\u2019)
tokenizer = PegasusTokenizer.from_pretrained(\u2018google/pegasus-xsum\u2019)`),hm=d(),Jr=o("blockquote"),Xr=o("blockquote"),Zr=o("blockquote"),Yr=o("p"),mm=r(`ARTICLE_TO_SUMMARIZE = (
\u2026 \u201CPG&E stated it scheduled the blackouts in response to forecasts for high winds \u201D
\u2026 \u201Camid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were \u201D
\u2026 \u201Cscheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.\u201D
\u2026 )
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018tf\u2019)`),fm=d(),ei=o("blockquote"),ti=o("blockquote"),Vn=o("blockquote"),go=o("h1"),_o=o("a"),oi=o("span"),f(Jn.$$.fragment),gm=d(),ni=o("span"),_m=r("Generate Summary"),km=d(),si=o("p"),vm=r(`summary_ids = model.generate(inputs[\u2018input_ids\u2019])
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),Gd=d(),Nt=o("h2"),ko=o("a"),ai=o("span"),f(Xn.$$.fragment),bm=d(),ri=o("span"),ym=r("FlaxPegasusModel"),Dd=d(),L=o("div"),f(Zn.$$.fragment),Tm=d(),Yn=o("p"),Pm=r(`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Qs=o("a"),wm=r("FlaxPreTrainedModel"),xm=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),zm=d(),es=o("p"),Em=r("This model is also a Flax Linen "),ts=o("a"),$m=r("flax.nn.Module"),qm=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fm=d(),ii=o("p"),Mm=r("Finally, this model supports inherent JAX features such as:"),Cm=d(),Qe=o("ul"),di=o("li"),os=o("a"),jm=r("Just-In-Time (JIT) compilation"),Sm=d(),li=o("li"),ns=o("a"),Om=r("Automatic Differentiation"),Am=d(),ci=o("li"),ss=o("a"),Im=r("Vectorization"),Lm=d(),ui=o("li"),as=o("a"),Nm=r("Parallelization"),Gm=d(),we=o("div"),f(rs.$$.fragment),Dm=d(),Gt=o("p"),Um=r("The "),pi=o("code"),Bm=r("FlaxPegasusPreTrainedModel"),Wm=r(" forward method, overrides the "),hi=o("code"),Km=r("__call__"),Hm=r(" special method."),Qm=d(),f(vo.$$.fragment),Rm=d(),mi=o("p"),Vm=r("Example:"),Jm=d(),f(is.$$.fragment),Xm=d(),et=o("div"),f(ds.$$.fragment),Zm=d(),fi=o("p"),Ym=r("Example:"),ef=d(),f(ls.$$.fragment),tf=d(),tt=o("div"),f(cs.$$.fragment),of=d(),gi=o("p"),nf=r("Example:"),sf=d(),f(us.$$.fragment),Ud=d(),Dt=o("h2"),bo=o("a"),_i=o("span"),f(ps.$$.fragment),af=d(),ki=o("span"),rf=r("FlaxPegasusForConditionalGeneration"),Bd=d(),N=o("div"),f(hs.$$.fragment),df=d(),ms=o("p"),lf=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Rs=o("a"),cf=r("FlaxPreTrainedModel"),uf=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),pf=d(),fs=o("p"),hf=r("This model is also a Flax Linen "),gs=o("a"),mf=r("flax.nn.Module"),ff=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),gf=d(),vi=o("p"),_f=r("Finally, this model supports inherent JAX features such as:"),kf=d(),Re=o("ul"),bi=o("li"),_s=o("a"),vf=r("Just-In-Time (JIT) compilation"),bf=d(),yi=o("li"),ks=o("a"),yf=r("Automatic Differentiation"),Tf=d(),Ti=o("li"),vs=o("a"),Pf=r("Vectorization"),wf=d(),Pi=o("li"),bs=o("a"),xf=r("Parallelization"),zf=d(),F=o("div"),f(ys.$$.fragment),Ef=d(),Ut=o("p"),$f=r("The "),wi=o("code"),qf=r("FlaxPegasusPreTrainedModel"),Ff=r(" forward method, overrides the "),xi=o("code"),Mf=r("__call__"),Cf=r(" special method."),jf=d(),f(yo.$$.fragment),Sf=d(),zi=o("p"),Of=r("Summarization example::"),Af=d(),Ei=o("blockquote"),$i=o("blockquote"),qi=o("blockquote"),Fi=o("p"),If=r("from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),Lf=d(),Mi=o("blockquote"),Ci=o("blockquote"),ji=o("blockquote"),Si=o("p"),Nf=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019)
tokenizer = PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),Gf=d(),Oi=o("blockquote"),Ai=o("blockquote"),Ii=o("blockquote"),Li=o("p"),Df=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Uf=d(),Ni=o("blockquote"),Gi=o("blockquote"),Ts=o("blockquote"),To=o("h1"),Po=o("a"),Di=o("span"),f(Ps.$$.fragment),Bf=d(),Ui=o("span"),Wf=r("Generate Summary"),Kf=d(),Bi=o("p"),Hf=r(`summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`),Qf=d(),Wi=o("p"),Rf=r("Mask filling example::"),Vf=d(),Ki=o("blockquote"),Hi=o("blockquote"),Qi=o("blockquote"),Ri=o("p"),Jf=r(`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration
tokenizer = PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)
TXT = \u201CMy friends are <mask> but they eat too many carbs.\u201D`),Xf=d(),Vi=o("blockquote"),Ji=o("blockquote"),Xi=o("blockquote"),Zi=o("p"),Zf=r(`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019)
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits`),Yf=d(),Yi=o("blockquote"),ed=o("blockquote"),td=o("blockquote"),od=o("p"),eg=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs)`),tg=d(),nd=o("blockquote"),sd=o("blockquote"),ad=o("blockquote"),rd=o("p"),og=r("tokenizer.decode(predictions).split()"),ng=d(),ot=o("div"),f(ws.$$.fragment),sg=d(),id=o("p"),ag=r("Example:"),rg=d(),f(xs.$$.fragment),ig=d(),nt=o("div"),f(zs.$$.fragment),dg=d(),dd=o("p"),lg=r("Example:"),cg=d(),f(Es.$$.fragment),this.h()},l(a){const p=zb('[data-svelte="svelte-1phssyn"]',document.head);h=n(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(a),y=n(a,"H1",{class:!0});var $s=s(y);T=n($s,"A",{id:!0,class:!0,href:!0});var ld=s(T);x=n(ld,"SPAN",{});var cd=s(x);g(w.$$.fragment,cd),cd.forEach(t),ld.forEach(t),P=l($s),E=n($s,"SPAN",{});var ud=s(E);Ae=i(ud,"Pegasus"),ud.forEach(t),$s.forEach(t),ke=l(a),q=n(a,"P",{});var wo=s(q);ze=n(wo,"STRONG",{});var pd=s(ze);le=i(pd,"DISCLAIMER:"),pd.forEach(t),Ie=i(wo," If you see something strange, file a "),ce=n(wo,"A",{href:!0,rel:!0});var hd=s(ce);ue=i(hd,"Github Issue"),hd.forEach(t),Le=i(wo,`
and assign @patrickvonplaten.`),wo.forEach(t),je=l(a),B=n(a,"H2",{class:!0});var qs=s(B);O=n(qs,"A",{id:!0,class:!0,href:!0});var mg=s(O);Ee=n(mg,"SPAN",{});var fg=s(Ee);g(J.$$.fragment,fg),fg.forEach(t),mg.forEach(t),j=l(qs),S=n(qs,"SPAN",{});var gg=s(S);Ne=i(gg,"Overview"),gg.forEach(t),qs.forEach(t),te=l(a),oe=n(a,"P",{});var Kd=s(oe);Ge=i(Kd,"The Pegasus model was proposed in "),W=n(Kd,"A",{href:!0,rel:!0});var _g=s(W);De=i(_g,"PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),_g.forEach(t),Ue=i(Kd," by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),Kd.forEach(t),A=l(a),ve=n(a,"P",{});var kg=s(ve);pe=i(kg,"According to the abstract,"),kg.forEach(t),Se=l(a),ne=n(a,"UL",{});var Hd=s(ne);X=n(Hd,"LI",{});var vg=s(X);Be=i(vg,`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),vg.forEach(t),We=l(Hd),K=n(Hd,"LI",{});var bg=s(K);Ke=i(bg,"Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),bg.forEach(t),Hd.forEach(t),se=l(a),R=n(a,"P",{});var Vs=s(R);m=i(Vs,"This model was contributed by "),$=n(Vs,"A",{href:!0,rel:!0});var yg=s($);$e=i(yg,"sshleifer"),yg.forEach(t),mt=i(Vs,". The Authors\u2019 code can be found "),qe=n(Vs,"A",{href:!0,rel:!0});var Tg=s(qe);Z=i(Tg,"here"),Tg.forEach(t),ft=i(Vs,"."),Vs.forEach(t),Ve=l(a),he=n(a,"H2",{class:!0});var Qd=s(he);I=n(Qd,"A",{id:!0,class:!0,href:!0});var Pg=s(I);Y=n(Pg,"SPAN",{});var wg=s(Y);g(Fe.$$.fragment,wg),wg.forEach(t),Pg.forEach(t),gt=l(Qd),ee=n(Qd,"SPAN",{});var xg=s(ee);_t=i(xg,"Checkpoints"),xg.forEach(t),Qd.forEach(t),Je=l(a),V=n(a,"P",{});var Js=s(V);kt=i(Js,"All the "),Co=n(Js,"A",{href:!0,rel:!0});var zg=s(Co);Dl=i(zg,"checkpoints"),zg.forEach(t),Ul=i(Js,` are fine-tuned for summarization, besides
`),fa=n(Js,"EM",{});var Eg=s(fa);Bl=i(Eg,"pegasus-large"),Eg.forEach(t),Wl=i(Js,", whence the other checkpoints are fine-tuned:"),Js.forEach(t),gd=l(a),be=n(a,"UL",{});var st=s(be);ga=n(st,"LI",{});var $g=s(ga);Kl=i($g,"Each checkpoint is 2.2 GB on disk and 568M parameters."),$g.forEach(t),Hl=l(st),_a=n(st,"LI",{});var qg=s(_a);Ql=i(qg,"FP16 is not supported (help/ideas on this appreciated!)."),qg.forEach(t),Rl=l(st),ka=n(st,"LI",{});var Fg=s(ka);Vl=i(Fg,"Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),Fg.forEach(t),Jl=l(st),jo=n(st,"LI",{});var Rd=s(jo);Xl=i(Rd,"Full replication results and correctly pre-processed data can be found in this "),So=n(Rd,"A",{href:!0,rel:!0});var Mg=s(So);Zl=i(Mg,"Issue"),Mg.forEach(t),Yl=i(Rd,"."),Rd.forEach(t),ec=l(st),Bt=n(st,"LI",{});var md=s(Bt);Oo=n(md,"A",{href:!0,rel:!0});var Cg=s(Oo);tc=i(Cg,"Distilled checkpoints"),Cg.forEach(t),oc=i(md," are described in this "),Ao=n(md,"A",{href:!0,rel:!0});var jg=s(Ao);nc=i(jg,"paper"),jg.forEach(t),sc=i(md,"."),md.forEach(t),st.forEach(t),_d=l(a),vt=n(a,"H3",{class:!0});var Vd=s(vt);Wt=n(Vd,"A",{id:!0,class:!0,href:!0});var Sg=s(Wt);va=n(Sg,"SPAN",{});var Og=s(va);g(Io.$$.fragment,Og),Og.forEach(t),Sg.forEach(t),ac=l(Vd),ba=n(Vd,"SPAN",{});var Ag=s(ba);rc=i(Ag,"Examples"),Ag.forEach(t),Vd.forEach(t),kd=l(a),Xe=n(a,"UL",{});var Xs=s(Xe);Kt=n(Xs,"LI",{});var fd=s(Kt);Lo=n(fd,"A",{href:!0,rel:!0});var Ig=s(Lo);ic=i(Ig,"Script"),Ig.forEach(t),dc=i(fd,` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),No=n(fd,"A",{href:!0,rel:!0});var Lg=s(No);lc=i(Lg,"examples/pytorch/summarization/"),Lg.forEach(t),cc=i(fd,"."),fd.forEach(t),uc=l(Xs),ya=n(Xs,"LI",{});var Ng=s(ya);pc=i(Ng,"FP16 is not supported (help/ideas on this appreciated!)."),Ng.forEach(t),hc=l(Xs),Ta=n(Xs,"LI",{});var Gg=s(Ta);mc=i(Gg,"The adafactor optimizer is recommended for pegasus fine-tuning."),Gg.forEach(t),Xs.forEach(t),vd=l(a),bt=n(a,"H2",{class:!0});var Jd=s(bt);Ht=n(Jd,"A",{id:!0,class:!0,href:!0});var Dg=s(Ht);Pa=n(Dg,"SPAN",{});var Ug=s(Pa);g(Go.$$.fragment,Ug),Ug.forEach(t),Dg.forEach(t),fc=l(Jd),wa=n(Jd,"SPAN",{});var Bg=s(wa);gc=i(Bg,"Implementation Notes"),Bg.forEach(t),Jd.forEach(t),bd=l(a),ye=n(a,"UL",{});var at=s(ye);xa=n(at,"LI",{});var Wg=s(xa);za=n(Wg,"P",{});var Kg=s(za);_c=i(Kg,"All models are transformer encoder-decoders with 16 layers in each component."),Kg.forEach(t),Wg.forEach(t),kc=l(at),Ea=n(at,"LI",{});var Hg=s(Ea);Fs=n(Hg,"P",{});var ug=s(Fs);vc=i(ug,"The implementation is completely inherited from "),Ms=n(ug,"A",{href:!0});var Qg=s(Ms);bc=i(Qg,"BartForConditionalGeneration"),Qg.forEach(t),ug.forEach(t),Hg.forEach(t),yc=l(at),Do=n(at,"LI",{});var Xd=s(Do);$a=n(Xd,"P",{});var Rg=s($a);Tc=i(Rg,"Some key configuration differences:"),Rg.forEach(t),Pc=l(Xd),yt=n(Xd,"UL",{});var Zs=s(yt);qa=n(Zs,"LI",{});var Vg=s(qa);wc=i(Vg,"static, sinusoidal position embeddings"),Vg.forEach(t),xc=l(Zs),Fa=n(Zs,"LI",{});var Jg=s(Fa);zc=i(Jg,"the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),Jg.forEach(t),Ec=l(Zs),Uo=n(Zs,"LI",{});var Zd=s(Uo);$c=i(Zd,"more beams are used ("),Ma=n(Zd,"CODE",{});var Xg=s(Ma);qc=i(Xg,"num_beams=8"),Xg.forEach(t),Fc=i(Zd,")"),Zd.forEach(t),Zs.forEach(t),Xd.forEach(t),Mc=l(at),Ca=n(at,"LI",{});var Zg=s(Ca);He=n(Zg,"P",{});var xo=s(He);Cc=i(xo,"All pretrained pegasus checkpoints are the same besides three attributes: "),ja=n(xo,"CODE",{});var Yg=s(ja);jc=i(Yg,"tokenizer.model_max_length"),Yg.forEach(t),Sc=i(xo,` (maximum
input size), `),Sa=n(xo,"CODE",{});var e_=s(Sa);Oc=i(e_,"max_length"),e_.forEach(t),Ac=i(xo," (the maximum number of tokens to generate) and "),Oa=n(xo,"CODE",{});var t_=s(Oa);Ic=i(t_,"length_penalty"),t_.forEach(t),Lc=i(xo,"."),xo.forEach(t),Zg.forEach(t),Nc=l(at),Aa=n(at,"LI",{});var o_=s(Aa);Tt=n(o_,"P",{});var Ys=s(Tt);Gc=i(Ys,"The code to convert checkpoints trained in the author\u2019s "),Bo=n(Ys,"A",{href:!0,rel:!0});var n_=s(Bo);Dc=i(n_,"repo"),n_.forEach(t),Uc=i(Ys,` can be
found in `),Ia=n(Ys,"CODE",{});var s_=s(Ia);Bc=i(s_,"convert_pegasus_tf_to_pytorch.py"),s_.forEach(t),Wc=i(Ys,"."),Ys.forEach(t),o_.forEach(t),at.forEach(t),yd=l(a),Pt=n(a,"H2",{class:!0});var Yd=s(Pt);Qt=n(Yd,"A",{id:!0,class:!0,href:!0});var a_=s(Qt);La=n(a_,"SPAN",{});var r_=s(La);g(Wo.$$.fragment,r_),r_.forEach(t),a_.forEach(t),Kc=l(Yd),Na=n(Yd,"SPAN",{});var i_=s(Na);Hc=i(i_,"Usage Example"),i_.forEach(t),Yd.forEach(t),Td=l(a),g(Ko.$$.fragment,a),Pd=l(a),wt=n(a,"H2",{class:!0});var el=s(wt);Rt=n(el,"A",{id:!0,class:!0,href:!0});var d_=s(Rt);Ga=n(d_,"SPAN",{});var l_=s(Ga);g(Ho.$$.fragment,l_),l_.forEach(t),d_.forEach(t),Qc=l(el),Da=n(el,"SPAN",{});var c_=s(Da);Rc=i(c_,"PegasusConfig"),c_.forEach(t),el.forEach(t),wd=l(a),me=n(a,"DIV",{class:!0});var rt=s(me);g(Qo.$$.fragment,rt),Vc=l(rt),xt=n(rt,"P",{});var ea=s(xt);Jc=i(ea,"This is the configuration class to store the configuration of a "),Cs=n(ea,"A",{href:!0});var u_=s(Cs);Xc=i(u_,"PegasusModel"),u_.forEach(t),Zc=i(ea,`. It is used to
instantiate an PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the PEGASUS `),Ro=n(ea,"A",{href:!0,rel:!0});var p_=s(Ro);Yc=i(p_,"google/pegasus-large"),p_.forEach(t),eu=i(ea," architecture."),ea.forEach(t),tu=l(rt),zt=n(rt,"P",{});var ta=s(zt);ou=i(ta,"Configuration objects inherit from "),js=n(ta,"A",{href:!0});var h_=s(js);nu=i(h_,"PretrainedConfig"),h_.forEach(t),su=i(ta,` and can be used to control the model
outputs. Read the documentation from `),Ss=n(ta,"A",{href:!0});var m_=s(Ss);au=i(m_,"PretrainedConfig"),m_.forEach(t),ru=i(ta," for more information."),ta.forEach(t),iu=l(rt),Ua=n(rt,"P",{});var f_=s(Ua);du=i(f_,"Example:"),f_.forEach(t),lu=l(rt),g(Vo.$$.fragment,rt),rt.forEach(t),xd=l(a),Et=n(a,"H2",{class:!0});var tl=s(Et);Vt=n(tl,"A",{id:!0,class:!0,href:!0});var g_=s(Vt);Ba=n(g_,"SPAN",{});var __=s(Ba);g(Jo.$$.fragment,__),__.forEach(t),g_.forEach(t),cu=l(tl),Wa=n(tl,"SPAN",{});var k_=s(Wa);uu=i(k_,"PegasusTokenizer"),k_.forEach(t),tl.forEach(t),zd=l(a),Jt=n(a,"P",{});var ol=s(Jt);pu=i(ol,"warning: "),Ka=n(ol,"CODE",{});var v_=s(Ka);hu=i(v_,"add_tokens"),v_.forEach(t),mu=i(ol," does not work at the moment."),ol.forEach(t),Ed=l(a),H=n(a,"DIV",{class:!0});var xe=s(H);g(Xo.$$.fragment,xe),fu=l(xe),Zo=n(xe,"P",{});var nl=s(Zo);gu=i(nl,"Construct a PEGASUS tokenizer. Based on "),Yo=n(nl,"A",{href:!0,rel:!0});var b_=s(Yo);_u=i(b_,"SentencePiece"),b_.forEach(t),ku=i(nl,"."),nl.forEach(t),vu=l(xe),en=n(xe,"P",{});var sl=s(en);bu=i(sl,"This tokenizer inherits from "),Os=n(sl,"A",{href:!0});var y_=s(Os);yu=i(y_,"PreTrainedTokenizer"),y_.forEach(t),Tu=i(sl,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),sl.forEach(t),Pu=l(xe),Oe=n(xe,"DIV",{class:!0});var zo=s(Oe);g(tn.$$.fragment,zo),wu=l(zo),on=n(zo,"P",{});var al=s(on);xu=i(al,`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Ha=n(al,"CODE",{});var T_=s(Ha);zu=i(T_,"X"),T_.forEach(t),Eu=i(al," represents the sequence:"),al.forEach(t),$u=l(zo),nn=n(zo,"UL",{});var rl=s(nn);As=n(rl,"LI",{});var pg=s(As);qu=i(pg,"single sequence: "),Qa=n(pg,"CODE",{});var P_=s(Qa);Fu=i(P_,"X </s>"),P_.forEach(t),pg.forEach(t),Mu=l(rl),sn=n(rl,"LI",{});var il=s(sn);Cu=i(il,"pair of sequences: "),Ra=n(il,"CODE",{});var w_=s(Ra);ju=i(w_,"A B </s>"),w_.forEach(t),Su=i(il," (not intended use)"),il.forEach(t),rl.forEach(t),Ou=l(zo),Va=n(zo,"P",{});var x_=s(Va);Au=i(x_,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),x_.forEach(t),zo.forEach(t),Iu=l(xe),Xt=n(xe,"DIV",{class:!0});var dl=s(Xt);g(an.$$.fragment,dl),Lu=l(dl),Ja=n(dl,"P",{});var z_=s(Ja);Nu=i(z_,"Converts a sequence of tokens (string) in a single string."),z_.forEach(t),dl.forEach(t),Gu=l(xe),Zt=n(xe,"DIV",{class:!0});var ll=s(Zt);g(rn.$$.fragment,ll),Du=l(ll),Xa=n(ll,"P",{});var E_=s(Xa);Uu=i(E_,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),E_.forEach(t),ll.forEach(t),Bu=l(xe),Yt=n(xe,"DIV",{class:!0});var cl=s(Yt);g(dn.$$.fragment,cl),Wu=l(cl),Za=n(cl,"P",{});var $_=s(Za);Ku=i($_,"Just EOS"),$_.forEach(t),cl.forEach(t),xe.forEach(t),$d=l(a),$t=n(a,"H2",{class:!0});var ul=s($t);eo=n(ul,"A",{id:!0,class:!0,href:!0});var q_=s(eo);Ya=n(q_,"SPAN",{});var F_=s(Ya);g(ln.$$.fragment,F_),F_.forEach(t),q_.forEach(t),Hu=l(ul),er=n(ul,"SPAN",{});var M_=s(er);Qu=i(M_,"PegasusTokenizerFast"),M_.forEach(t),ul.forEach(t),qd=l(a),fe=n(a,"DIV",{class:!0});var it=s(fe);g(cn.$$.fragment,it),Ru=l(it),qt=n(it,"P",{});var oa=s(qt);Vu=i(oa,"Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),tr=n(oa,"EM",{});var C_=s(tr);Ju=i(C_,"tokenizers"),C_.forEach(t),Xu=i(oa," library). Based on "),un=n(oa,"A",{href:!0,rel:!0});var j_=s(un);Zu=i(j_,"Unigram"),j_.forEach(t),Yu=i(oa,"."),oa.forEach(t),ep=l(it),pn=n(it,"P",{});var pl=s(pn);tp=i(pl,"This tokenizer inherits from "),Is=n(pl,"A",{href:!0});var S_=s(Is);op=i(S_,"PreTrainedTokenizerFast"),S_.forEach(t),np=i(pl,` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),pl.forEach(t),sp=l(it),Ze=n(it,"DIV",{class:!0});var na=s(Ze);g(hn.$$.fragment,na),ap=l(na),or=n(na,"P",{});var O_=s(or);rp=i(O_,"Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),O_.forEach(t),ip=l(na),mn=n(na,"UL",{});var hl=s(mn);Ls=n(hl,"LI",{});var hg=s(Ls);dp=i(hg,"single sequence: "),nr=n(hg,"CODE",{});var A_=s(nr);lp=i(A_,"X </s>"),A_.forEach(t),hg.forEach(t),cp=l(hl),fn=n(hl,"LI",{});var ml=s(fn);up=i(ml,"pair of sequences: "),sr=n(ml,"CODE",{});var I_=s(sr);pp=i(I_,"A B </s>"),I_.forEach(t),hp=i(ml," (not intended use)"),ml.forEach(t),hl.forEach(t),na.forEach(t),mp=l(it),to=n(it,"DIV",{class:!0});var fl=s(to);g(gn.$$.fragment,fl),fp=l(fl),ar=n(fl,"P",{});var L_=s(ar);gp=i(L_,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),L_.forEach(t),fl.forEach(t),it.forEach(t),Fd=l(a),Ft=n(a,"H2",{class:!0});var gl=s(Ft);oo=n(gl,"A",{id:!0,class:!0,href:!0});var N_=s(oo);rr=n(N_,"SPAN",{});var G_=s(rr);g(_n.$$.fragment,G_),G_.forEach(t),N_.forEach(t),_p=l(gl),ir=n(gl,"SPAN",{});var D_=s(ir);kp=i(D_,"PegasusModel"),D_.forEach(t),gl.forEach(t),Md=l(a),Me=n(a,"DIV",{class:!0});var Eo=s(Me);g(kn.$$.fragment,Eo),vp=l(Eo),vn=n(Eo,"P",{});var _l=s(vn);bp=i(_l,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ns=n(_l,"A",{href:!0});var U_=s(Ns);yp=i(U_,"PreTrainedModel"),U_.forEach(t),Tp=i(_l,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),_l.forEach(t),Pp=l(Eo),bn=n(Eo,"P",{});var kl=s(bn);wp=i(kl,"This model is also a PyTorch "),yn=n(kl,"A",{href:!0,rel:!0});var B_=s(yn);xp=i(B_,"torch.nn.Module"),B_.forEach(t),zp=i(kl,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),kl.forEach(t),Ep=l(Eo),Te=n(Eo,"DIV",{class:!0});var dt=s(Te);g(Tn.$$.fragment,dt),$p=l(dt),Mt=n(dt,"P",{});var sa=s(Mt);qp=i(sa,"The "),Gs=n(sa,"A",{href:!0});var W_=s(Gs);Fp=i(W_,"PegasusModel"),W_.forEach(t),Mp=i(sa," forward method, overrides the "),dr=n(sa,"CODE",{});var K_=s(dr);Cp=i(K_,"__call__"),K_.forEach(t),jp=i(sa," special method."),sa.forEach(t),Sp=l(dt),g(no.$$.fragment,dt),Op=l(dt),lr=n(dt,"P",{});var H_=s(lr);Ap=i(H_,"Example:"),H_.forEach(t),Ip=l(dt),g(Pn.$$.fragment,dt),dt.forEach(t),Eo.forEach(t),Cd=l(a),Ct=n(a,"H2",{class:!0});var vl=s(Ct);so=n(vl,"A",{id:!0,class:!0,href:!0});var Q_=s(so);cr=n(Q_,"SPAN",{});var R_=s(cr);g(wn.$$.fragment,R_),R_.forEach(t),Q_.forEach(t),Lp=l(vl),ur=n(vl,"SPAN",{});var V_=s(ur);Np=i(V_,"PegasusForConditionalGeneration"),V_.forEach(t),vl.forEach(t),jd=l(a),Ce=n(a,"DIV",{class:!0});var $o=s(Ce);g(xn.$$.fragment,$o),Gp=l($o),zn=n($o,"P",{});var bl=s(zn);Dp=i(bl,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ds=n(bl,"A",{href:!0});var J_=s(Ds);Up=i(J_,"PreTrainedModel"),J_.forEach(t),Bp=i(bl,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),bl.forEach(t),Wp=l($o),En=n($o,"P",{});var yl=s(En);Kp=i(yl,"This model is also a PyTorch "),$n=n(yl,"A",{href:!0,rel:!0});var X_=s($n);Hp=i(X_,"torch.nn.Module"),X_.forEach(t),Qp=i(yl,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),yl.forEach(t),Rp=l($o),G=n($o,"DIV",{class:!0});var ae=s(G);g(qn.$$.fragment,ae),Vp=l(ae),jt=n(ae,"P",{});var aa=s(jt);Jp=i(aa,"The "),Us=n(aa,"A",{href:!0});var Z_=s(Us);Xp=i(Z_,"PegasusForConditionalGeneration"),Z_.forEach(t),Zp=i(aa," forward method, overrides the "),pr=n(aa,"CODE",{});var Y_=s(pr);Yp=i(Y_,"__call__"),Y_.forEach(t),eh=i(aa," special method."),aa.forEach(t),th=l(ae),g(ao.$$.fragment,ae),oh=l(ae),hr=n(ae,"P",{});var ek=s(hr);nh=i(ek,"Summarization example::"),ek.forEach(t),sh=l(ae),mr=n(ae,"BLOCKQUOTE",{});var tk=s(mr);fr=n(tk,"BLOCKQUOTE",{});var ok=s(fr);gr=n(ok,"BLOCKQUOTE",{});var nk=s(gr);_r=n(nk,"P",{});var sk=s(_r);ah=i(sk,"from transformers import PegasusTokenizer, PegasusForConditionalGeneration"),sk.forEach(t),nk.forEach(t),ok.forEach(t),tk.forEach(t),rh=l(ae),kr=n(ae,"BLOCKQUOTE",{});var ak=s(kr);vr=n(ak,"BLOCKQUOTE",{});var rk=s(vr);br=n(rk,"BLOCKQUOTE",{});var ik=s(br);yr=n(ik,"P",{});var dk=s(yr);ih=i(dk,`model = PegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-xsum\u2019)
tokenizer = PegasusTokenizer.from_pretrained(\u2018google/pegasus-xsum\u2019)`),dk.forEach(t),ik.forEach(t),rk.forEach(t),ak.forEach(t),dh=l(ae),Tr=n(ae,"BLOCKQUOTE",{});var lk=s(Tr);Pr=n(lk,"BLOCKQUOTE",{});var ck=s(Pr);wr=n(ck,"BLOCKQUOTE",{});var uk=s(wr);xr=n(uk,"P",{});var pk=s(xr);lh=i(pk,`ARTICLE_TO_SUMMARIZE = (
\u2026 \u201CPG&E stated it scheduled the blackouts in response to forecasts for high winds \u201D
\u2026 \u201Camid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were \u201D
\u2026 \u201Cscheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.\u201D
\u2026 )
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018pt\u2019)`),pk.forEach(t),uk.forEach(t),ck.forEach(t),lk.forEach(t),ch=l(ae),zr=n(ae,"BLOCKQUOTE",{});var hk=s(zr);Er=n(hk,"BLOCKQUOTE",{});var mk=s(Er);Fn=n(mk,"BLOCKQUOTE",{});var Tl=s(Fn);ro=n(Tl,"H1",{class:!0});var Pl=s(ro);io=n(Pl,"A",{id:!0,class:!0,href:!0});var fk=s(io);$r=n(fk,"SPAN",{});var gk=s($r);g(Mn.$$.fragment,gk),gk.forEach(t),fk.forEach(t),uh=l(Pl),qr=n(Pl,"SPAN",{});var _k=s(qr);ph=i(_k,"Generate Summary"),_k.forEach(t),Pl.forEach(t),hh=l(Tl),Fr=n(Tl,"P",{});var kk=s(Fr);mh=i(kk,`summary_ids = model.generate(inputs[\u2018input_ids\u2019])
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),kk.forEach(t),Tl.forEach(t),mk.forEach(t),hk.forEach(t),ae.forEach(t),$o.forEach(t),Sd=l(a),St=n(a,"H2",{class:!0});var wl=s(St);lo=n(wl,"A",{id:!0,class:!0,href:!0});var vk=s(lo);Mr=n(vk,"SPAN",{});var bk=s(Mr);g(Cn.$$.fragment,bk),bk.forEach(t),vk.forEach(t),fh=l(wl),Cr=n(wl,"SPAN",{});var yk=s(Cr);gh=i(yk,"PegasusForCausalLM"),yk.forEach(t),wl.forEach(t),Od=l(a),jn=n(a,"DIV",{class:!0});var Tk=s(jn);Ye=n(Tk,"DIV",{class:!0});var ra=s(Ye);g(Sn.$$.fragment,ra),_h=l(ra),jr=n(ra,"P",{});var Pk=s(jr);kh=i(Pk,"Example:"),Pk.forEach(t),vh=l(ra),g(On.$$.fragment,ra),ra.forEach(t),Tk.forEach(t),Ad=l(a),Ot=n(a,"H2",{class:!0});var xl=s(Ot);co=n(xl,"A",{id:!0,class:!0,href:!0});var wk=s(co);Sr=n(wk,"SPAN",{});var xk=s(Sr);g(An.$$.fragment,xk),xk.forEach(t),wk.forEach(t),bh=l(xl),Or=n(xl,"SPAN",{});var zk=s(Or);yh=i(zk,"TFPegasusModel"),zk.forEach(t),xl.forEach(t),Id=l(a),ge=n(a,"DIV",{class:!0});var lt=s(ge);g(In.$$.fragment,lt),Th=l(lt),Ln=n(lt,"P",{});var zl=s(Ln);Ph=i(zl,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Bs=n(zl,"A",{href:!0});var Ek=s(Bs);wh=i(Ek,"TFPreTrainedModel"),Ek.forEach(t),xh=i(zl,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),zl.forEach(t),zh=l(lt),Nn=n(lt,"P",{});var El=s(Nn);Eh=i(El,"This model is also a "),Gn=n(El,"A",{href:!0,rel:!0});var $k=s(Gn);$h=i($k,"tf.keras.Model"),$k.forEach(t),qh=i(El,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),El.forEach(t),Fh=l(lt),g(uo.$$.fragment,lt),Mh=l(lt),Pe=n(lt,"DIV",{class:!0});var ct=s(Pe);g(Dn.$$.fragment,ct),Ch=l(ct),At=n(ct,"P",{});var ia=s(At);jh=i(ia,"The "),Ws=n(ia,"A",{href:!0});var qk=s(Ws);Sh=i(qk,"TFPegasusModel"),qk.forEach(t),Oh=i(ia," forward method, overrides the "),Ar=n(ia,"CODE",{});var Fk=s(Ar);Ah=i(Fk,"__call__"),Fk.forEach(t),Ih=i(ia," special method."),ia.forEach(t),Lh=l(ct),g(po.$$.fragment,ct),Nh=l(ct),Ir=n(ct,"P",{});var Mk=s(Ir);Gh=i(Mk,"Example:"),Mk.forEach(t),Dh=l(ct),g(Un.$$.fragment,ct),ct.forEach(t),lt.forEach(t),Ld=l(a),It=n(a,"H2",{class:!0});var $l=s(It);ho=n($l,"A",{id:!0,class:!0,href:!0});var Ck=s(ho);Lr=n(Ck,"SPAN",{});var jk=s(Lr);g(Bn.$$.fragment,jk),jk.forEach(t),Ck.forEach(t),Uh=l($l),Nr=n($l,"SPAN",{});var Sk=s(Nr);Bh=i(Sk,"TFPegasusForConditionalGeneration"),Sk.forEach(t),$l.forEach(t),Nd=l(a),_e=n(a,"DIV",{class:!0});var ut=s(_e);g(Wn.$$.fragment,ut),Wh=l(ut),Kn=n(ut,"P",{});var ql=s(Kn);Kh=i(ql,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ks=n(ql,"A",{href:!0});var Ok=s(Ks);Hh=i(Ok,"TFPreTrainedModel"),Ok.forEach(t),Qh=i(ql,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ql.forEach(t),Rh=l(ut),Hn=n(ut,"P",{});var Fl=s(Hn);Vh=i(Fl,"This model is also a "),Qn=n(Fl,"A",{href:!0,rel:!0});var Ak=s(Qn);Jh=i(Ak,"tf.keras.Model"),Ak.forEach(t),Xh=i(Fl,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Fl.forEach(t),Zh=l(ut),g(mo.$$.fragment,ut),Yh=l(ut),D=n(ut,"DIV",{class:!0});var re=s(D);g(Rn.$$.fragment,re),em=l(re),Lt=n(re,"P",{});var da=s(Lt);tm=i(da,"The "),Hs=n(da,"A",{href:!0});var Ik=s(Hs);om=i(Ik,"TFPegasusForConditionalGeneration"),Ik.forEach(t),nm=i(da," forward method, overrides the "),Gr=n(da,"CODE",{});var Lk=s(Gr);sm=i(Lk,"__call__"),Lk.forEach(t),am=i(da," special method."),da.forEach(t),rm=l(re),g(fo.$$.fragment,re),im=l(re),Dr=n(re,"P",{});var Nk=s(Dr);dm=i(Nk,"Summarization example::"),Nk.forEach(t),lm=l(re),Ur=n(re,"BLOCKQUOTE",{});var Gk=s(Ur);Br=n(Gk,"BLOCKQUOTE",{});var Dk=s(Br);Wr=n(Dk,"BLOCKQUOTE",{});var Uk=s(Wr);Kr=n(Uk,"P",{});var Bk=s(Kr);cm=i(Bk,"from transformers import PegasusTokenizer, TFPegasusForConditionalGeneration"),Bk.forEach(t),Uk.forEach(t),Dk.forEach(t),Gk.forEach(t),um=l(re),Hr=n(re,"BLOCKQUOTE",{});var Wk=s(Hr);Qr=n(Wk,"BLOCKQUOTE",{});var Kk=s(Qr);Rr=n(Kk,"BLOCKQUOTE",{});var Hk=s(Rr);Vr=n(Hk,"P",{});var Qk=s(Vr);pm=i(Qk,`model = TFPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-xsum\u2019)
tokenizer = PegasusTokenizer.from_pretrained(\u2018google/pegasus-xsum\u2019)`),Qk.forEach(t),Hk.forEach(t),Kk.forEach(t),Wk.forEach(t),hm=l(re),Jr=n(re,"BLOCKQUOTE",{});var Rk=s(Jr);Xr=n(Rk,"BLOCKQUOTE",{});var Vk=s(Xr);Zr=n(Vk,"BLOCKQUOTE",{});var Jk=s(Zr);Yr=n(Jk,"P",{});var Xk=s(Yr);mm=i(Xk,`ARTICLE_TO_SUMMARIZE = (
\u2026 \u201CPG&E stated it scheduled the blackouts in response to forecasts for high winds \u201D
\u2026 \u201Camid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were \u201D
\u2026 \u201Cscheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.\u201D
\u2026 )
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018tf\u2019)`),Xk.forEach(t),Jk.forEach(t),Vk.forEach(t),Rk.forEach(t),fm=l(re),ei=n(re,"BLOCKQUOTE",{});var Zk=s(ei);ti=n(Zk,"BLOCKQUOTE",{});var Yk=s(ti);Vn=n(Yk,"BLOCKQUOTE",{});var Ml=s(Vn);go=n(Ml,"H1",{class:!0});var Cl=s(go);_o=n(Cl,"A",{id:!0,class:!0,href:!0});var ev=s(_o);oi=n(ev,"SPAN",{});var tv=s(oi);g(Jn.$$.fragment,tv),tv.forEach(t),ev.forEach(t),gm=l(Cl),ni=n(Cl,"SPAN",{});var ov=s(ni);_m=i(ov,"Generate Summary"),ov.forEach(t),Cl.forEach(t),km=l(Ml),si=n(Ml,"P",{});var nv=s(si);vm=i(nv,`summary_ids = model.generate(inputs[\u2018input_ids\u2019])
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),nv.forEach(t),Ml.forEach(t),Yk.forEach(t),Zk.forEach(t),re.forEach(t),ut.forEach(t),Gd=l(a),Nt=n(a,"H2",{class:!0});var jl=s(Nt);ko=n(jl,"A",{id:!0,class:!0,href:!0});var sv=s(ko);ai=n(sv,"SPAN",{});var av=s(ai);g(Xn.$$.fragment,av),av.forEach(t),sv.forEach(t),bm=l(jl),ri=n(jl,"SPAN",{});var rv=s(ri);ym=i(rv,"FlaxPegasusModel"),rv.forEach(t),jl.forEach(t),Dd=l(a),L=n(a,"DIV",{class:!0});var ie=s(L);g(Zn.$$.fragment,ie),Tm=l(ie),Yn=n(ie,"P",{});var Sl=s(Yn);Pm=i(Sl,`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Qs=n(Sl,"A",{href:!0});var iv=s(Qs);wm=i(iv,"FlaxPreTrainedModel"),iv.forEach(t),xm=i(Sl,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Sl.forEach(t),zm=l(ie),es=n(ie,"P",{});var Ol=s(es);Em=i(Ol,"This model is also a Flax Linen "),ts=n(Ol,"A",{href:!0,rel:!0});var dv=s(ts);$m=i(dv,"flax.nn.Module"),dv.forEach(t),qm=i(Ol,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ol.forEach(t),Fm=l(ie),ii=n(ie,"P",{});var lv=s(ii);Mm=i(lv,"Finally, this model supports inherent JAX features such as:"),lv.forEach(t),Cm=l(ie),Qe=n(ie,"UL",{});var qo=s(Qe);di=n(qo,"LI",{});var cv=s(di);os=n(cv,"A",{href:!0,rel:!0});var uv=s(os);jm=i(uv,"Just-In-Time (JIT) compilation"),uv.forEach(t),cv.forEach(t),Sm=l(qo),li=n(qo,"LI",{});var pv=s(li);ns=n(pv,"A",{href:!0,rel:!0});var hv=s(ns);Om=i(hv,"Automatic Differentiation"),hv.forEach(t),pv.forEach(t),Am=l(qo),ci=n(qo,"LI",{});var mv=s(ci);ss=n(mv,"A",{href:!0,rel:!0});var fv=s(ss);Im=i(fv,"Vectorization"),fv.forEach(t),mv.forEach(t),Lm=l(qo),ui=n(qo,"LI",{});var gv=s(ui);as=n(gv,"A",{href:!0,rel:!0});var _v=s(as);Nm=i(_v,"Parallelization"),_v.forEach(t),gv.forEach(t),qo.forEach(t),Gm=l(ie),we=n(ie,"DIV",{class:!0});var pt=s(we);g(rs.$$.fragment,pt),Dm=l(pt),Gt=n(pt,"P",{});var la=s(Gt);Um=i(la,"The "),pi=n(la,"CODE",{});var kv=s(pi);Bm=i(kv,"FlaxPegasusPreTrainedModel"),kv.forEach(t),Wm=i(la," forward method, overrides the "),hi=n(la,"CODE",{});var vv=s(hi);Km=i(vv,"__call__"),vv.forEach(t),Hm=i(la," special method."),la.forEach(t),Qm=l(pt),g(vo.$$.fragment,pt),Rm=l(pt),mi=n(pt,"P",{});var bv=s(mi);Vm=i(bv,"Example:"),bv.forEach(t),Jm=l(pt),g(is.$$.fragment,pt),pt.forEach(t),Xm=l(ie),et=n(ie,"DIV",{class:!0});var ca=s(et);g(ds.$$.fragment,ca),Zm=l(ca),fi=n(ca,"P",{});var yv=s(fi);Ym=i(yv,"Example:"),yv.forEach(t),ef=l(ca),g(ls.$$.fragment,ca),ca.forEach(t),tf=l(ie),tt=n(ie,"DIV",{class:!0});var ua=s(tt);g(cs.$$.fragment,ua),of=l(ua),gi=n(ua,"P",{});var Tv=s(gi);nf=i(Tv,"Example:"),Tv.forEach(t),sf=l(ua),g(us.$$.fragment,ua),ua.forEach(t),ie.forEach(t),Ud=l(a),Dt=n(a,"H2",{class:!0});var Al=s(Dt);bo=n(Al,"A",{id:!0,class:!0,href:!0});var Pv=s(bo);_i=n(Pv,"SPAN",{});var wv=s(_i);g(ps.$$.fragment,wv),wv.forEach(t),Pv.forEach(t),af=l(Al),ki=n(Al,"SPAN",{});var xv=s(ki);rf=i(xv,"FlaxPegasusForConditionalGeneration"),xv.forEach(t),Al.forEach(t),Bd=l(a),N=n(a,"DIV",{class:!0});var de=s(N);g(hs.$$.fragment,de),df=l(de),ms=n(de,"P",{});var Il=s(ms);lf=i(Il,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Rs=n(Il,"A",{href:!0});var zv=s(Rs);cf=i(zv,"FlaxPreTrainedModel"),zv.forEach(t),uf=i(Il,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Il.forEach(t),pf=l(de),fs=n(de,"P",{});var Ll=s(fs);hf=i(Ll,"This model is also a Flax Linen "),gs=n(Ll,"A",{href:!0,rel:!0});var Ev=s(gs);mf=i(Ev,"flax.nn.Module"),Ev.forEach(t),ff=i(Ll,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ll.forEach(t),gf=l(de),vi=n(de,"P",{});var $v=s(vi);_f=i($v,"Finally, this model supports inherent JAX features such as:"),$v.forEach(t),kf=l(de),Re=n(de,"UL",{});var Fo=s(Re);bi=n(Fo,"LI",{});var qv=s(bi);_s=n(qv,"A",{href:!0,rel:!0});var Fv=s(_s);vf=i(Fv,"Just-In-Time (JIT) compilation"),Fv.forEach(t),qv.forEach(t),bf=l(Fo),yi=n(Fo,"LI",{});var Mv=s(yi);ks=n(Mv,"A",{href:!0,rel:!0});var Cv=s(ks);yf=i(Cv,"Automatic Differentiation"),Cv.forEach(t),Mv.forEach(t),Tf=l(Fo),Ti=n(Fo,"LI",{});var jv=s(Ti);vs=n(jv,"A",{href:!0,rel:!0});var Sv=s(vs);Pf=i(Sv,"Vectorization"),Sv.forEach(t),jv.forEach(t),wf=l(Fo),Pi=n(Fo,"LI",{});var Ov=s(Pi);bs=n(Ov,"A",{href:!0,rel:!0});var Av=s(bs);xf=i(Av,"Parallelization"),Av.forEach(t),Ov.forEach(t),Fo.forEach(t),zf=l(de),F=n(de,"DIV",{class:!0});var M=s(F);g(ys.$$.fragment,M),Ef=l(M),Ut=n(M,"P",{});var pa=s(Ut);$f=i(pa,"The "),wi=n(pa,"CODE",{});var Iv=s(wi);qf=i(Iv,"FlaxPegasusPreTrainedModel"),Iv.forEach(t),Ff=i(pa," forward method, overrides the "),xi=n(pa,"CODE",{});var Lv=s(xi);Mf=i(Lv,"__call__"),Lv.forEach(t),Cf=i(pa," special method."),pa.forEach(t),jf=l(M),g(yo.$$.fragment,M),Sf=l(M),zi=n(M,"P",{});var Nv=s(zi);Of=i(Nv,"Summarization example::"),Nv.forEach(t),Af=l(M),Ei=n(M,"BLOCKQUOTE",{});var Gv=s(Ei);$i=n(Gv,"BLOCKQUOTE",{});var Dv=s($i);qi=n(Dv,"BLOCKQUOTE",{});var Uv=s(qi);Fi=n(Uv,"P",{});var Bv=s(Fi);If=i(Bv,"from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration"),Bv.forEach(t),Uv.forEach(t),Dv.forEach(t),Gv.forEach(t),Lf=l(M),Mi=n(M,"BLOCKQUOTE",{});var Wv=s(Mi);Ci=n(Wv,"BLOCKQUOTE",{});var Kv=s(Ci);ji=n(Kv,"BLOCKQUOTE",{});var Hv=s(ji);Si=n(Hv,"P",{});var Qv=s(Si);Nf=i(Qv,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019)
tokenizer = PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)`),Qv.forEach(t),Hv.forEach(t),Kv.forEach(t),Wv.forEach(t),Gf=l(M),Oi=n(M,"BLOCKQUOTE",{});var Rv=s(Oi);Ai=n(Rv,"BLOCKQUOTE",{});var Vv=s(Ai);Ii=n(Vv,"BLOCKQUOTE",{});var Jv=s(Ii);Li=n(Jv,"P",{});var Xv=s(Li);Df=i(Xv,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Xv.forEach(t),Jv.forEach(t),Vv.forEach(t),Rv.forEach(t),Uf=l(M),Ni=n(M,"BLOCKQUOTE",{});var Zv=s(Ni);Gi=n(Zv,"BLOCKQUOTE",{});var Yv=s(Gi);Ts=n(Yv,"BLOCKQUOTE",{});var Nl=s(Ts);To=n(Nl,"H1",{class:!0});var Gl=s(To);Po=n(Gl,"A",{id:!0,class:!0,href:!0});var eb=s(Po);Di=n(eb,"SPAN",{});var tb=s(Di);g(Ps.$$.fragment,tb),tb.forEach(t),eb.forEach(t),Bf=l(Gl),Ui=n(Gl,"SPAN",{});var ob=s(Ui);Wf=i(ob,"Generate Summary"),ob.forEach(t),Gl.forEach(t),Kf=l(Nl),Bi=n(Nl,"P",{});var nb=s(Bi);Hf=i(nb,`summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`),nb.forEach(t),Nl.forEach(t),Yv.forEach(t),Zv.forEach(t),Qf=l(M),Wi=n(M,"P",{});var sb=s(Wi);Rf=i(sb,"Mask filling example::"),sb.forEach(t),Vf=l(M),Ki=n(M,"BLOCKQUOTE",{});var ab=s(Ki);Hi=n(ab,"BLOCKQUOTE",{});var rb=s(Hi);Qi=n(rb,"BLOCKQUOTE",{});var ib=s(Qi);Ri=n(ib,"P",{});var db=s(Ri);Jf=i(db,`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration
tokenizer = PegasusTokenizer.from_pretrained(\u2018google/pegasus-large\u2019)
TXT = \u201CMy friends are <mask> but they eat too many carbs.\u201D`),db.forEach(t),ib.forEach(t),rb.forEach(t),ab.forEach(t),Xf=l(M),Vi=n(M,"BLOCKQUOTE",{});var lb=s(Vi);Ji=n(lb,"BLOCKQUOTE",{});var cb=s(Ji);Xi=n(cb,"BLOCKQUOTE",{});var ub=s(Xi);Zi=n(ub,"P",{});var pb=s(Zi);Zf=i(pb,`model = FlaxPegasusForConditionalGeneration.from_pretrained(\u2018google/pegasus-large\u2019)
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits`),pb.forEach(t),ub.forEach(t),cb.forEach(t),lb.forEach(t),Yf=l(M),Yi=n(M,"BLOCKQUOTE",{});var hb=s(Yi);ed=n(hb,"BLOCKQUOTE",{});var mb=s(ed);td=n(mb,"BLOCKQUOTE",{});var fb=s(td);od=n(fb,"P",{});var gb=s(od);eg=i(gb,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs)`),gb.forEach(t),fb.forEach(t),mb.forEach(t),hb.forEach(t),tg=l(M),nd=n(M,"BLOCKQUOTE",{});var _b=s(nd);sd=n(_b,"BLOCKQUOTE",{});var kb=s(sd);ad=n(kb,"BLOCKQUOTE",{});var vb=s(ad);rd=n(vb,"P",{});var bb=s(rd);og=i(bb,"tokenizer.decode(predictions).split()"),bb.forEach(t),vb.forEach(t),kb.forEach(t),_b.forEach(t),M.forEach(t),ng=l(de),ot=n(de,"DIV",{class:!0});var ha=s(ot);g(ws.$$.fragment,ha),sg=l(ha),id=n(ha,"P",{});var yb=s(id);ag=i(yb,"Example:"),yb.forEach(t),rg=l(ha),g(xs.$$.fragment,ha),ha.forEach(t),ig=l(de),nt=n(de,"DIV",{class:!0});var ma=s(nt);g(zs.$$.fragment,ma),dg=l(ma),dd=n(ma,"P",{});var Tb=s(dd);lg=i(Tb,"Example:"),Tb.forEach(t),cg=l(ma),g(Es.$$.fragment,ma),ma.forEach(t),de.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Ab)),c(T,"id","pegasus"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#pegasus"),c(y,"class","relative group"),c(ce,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),c(ce,"rel","nofollow"),c(O,"id","overview"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#overview"),c(B,"class","relative group"),c(W,"href","https://arxiv.org/pdf/1912.08777.pdf"),c(W,"rel","nofollow"),c($,"href","https://huggingface.co/sshleifer"),c($,"rel","nofollow"),c(qe,"href","https://github.com/google-research/pegasus"),c(qe,"rel","nofollow"),c(I,"id","checkpoints"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#checkpoints"),c(he,"class","relative group"),c(Co,"href","https://huggingface.co/models?search=pegasus"),c(Co,"rel","nofollow"),c(So,"href","https://github.com/huggingface/transformers/issues/6844#issue-689259666"),c(So,"rel","nofollow"),c(Oo,"href","https://huggingface.co/models?search=distill-pegasus"),c(Oo,"rel","nofollow"),c(Ao,"href","https://arxiv.org/abs/2010.13002"),c(Ao,"rel","nofollow"),c(Wt,"id","examples"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#examples"),c(vt,"class","relative group"),c(Lo,"href","https://github.com/huggingface/transformers/tree/master/examples/research_projects/seq2seq-distillation/finetune_pegasus_xsum.sh"),c(Lo,"rel","nofollow"),c(No,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/README.md"),c(No,"rel","nofollow"),c(Ht,"id","implementation-notes"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#implementation-notes"),c(bt,"class","relative group"),c(Ms,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Bo,"href","https://github.com/google-research/pegasus"),c(Bo,"rel","nofollow"),c(Qt,"id","usage-example"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#usage-example"),c(Pt,"class","relative group"),c(Rt,"id","transformers.PegasusConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.PegasusConfig"),c(wt,"class","relative group"),c(Cs,"href","/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusModel"),c(Ro,"href","https://huggingface.co/google/pegasus-large"),c(Ro,"rel","nofollow"),c(js,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ss,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(me,"class","docstring"),c(Vt,"id","transformers.PegasusTokenizer"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.PegasusTokenizer"),c(Et,"class","relative group"),c(Yo,"href","https://github.com/google/sentencepiece"),c(Yo,"rel","nofollow"),c(Os,"href","/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Oe,"class","docstring"),c(Xt,"class","docstring"),c(Zt,"class","docstring"),c(Yt,"class","docstring"),c(H,"class","docstring"),c(eo,"id","transformers.PegasusTokenizerFast"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.PegasusTokenizerFast"),c($t,"class","relative group"),c(un,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(un,"rel","nofollow"),c(Is,"href","/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ze,"class","docstring"),c(to,"class","docstring"),c(fe,"class","docstring"),c(oo,"id","transformers.PegasusModel"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.PegasusModel"),c(Ft,"class","relative group"),c(Ns,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yn,"rel","nofollow"),c(Gs,"href","/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusModel"),c(Te,"class","docstring"),c(Me,"class","docstring"),c(so,"id","transformers.PegasusForConditionalGeneration"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.PegasusForConditionalGeneration"),c(Ct,"class","relative group"),c(Ds,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c($n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c($n,"rel","nofollow"),c(Us,"href","/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.PegasusForConditionalGeneration"),c(io,"id","generate-summary"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#generate-summary"),c(ro,"class","relative group"),c(G,"class","docstring"),c(Ce,"class","docstring"),c(lo,"id","transformers.PegasusForCausalLM"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.PegasusForCausalLM"),c(St,"class","relative group"),c(Ye,"class","docstring"),c(jn,"class","docstring"),c(co,"id","transformers.TFPegasusModel"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.TFPegasusModel"),c(Ot,"class","relative group"),c(Bs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Gn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Gn,"rel","nofollow"),c(Ws,"href","/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.TFPegasusModel"),c(Pe,"class","docstring"),c(ge,"class","docstring"),c(ho,"id","transformers.TFPegasusForConditionalGeneration"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.TFPegasusForConditionalGeneration"),c(It,"class","relative group"),c(Ks,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Qn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Qn,"rel","nofollow"),c(Hs,"href","/docs/transformers/v4.15.0/en/model_doc/pegasus#transformers.TFPegasusForConditionalGeneration"),c(_o,"id","generate-summary"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#generate-summary"),c(go,"class","relative group"),c(D,"class","docstring"),c(_e,"class","docstring"),c(ko,"id","transformers.FlaxPegasusModel"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.FlaxPegasusModel"),c(Nt,"class","relative group"),c(Qs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ts,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ts,"rel","nofollow"),c(os,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(os,"rel","nofollow"),c(ns,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ns,"rel","nofollow"),c(ss,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ss,"rel","nofollow"),c(as,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(as,"rel","nofollow"),c(we,"class","docstring"),c(et,"class","docstring"),c(tt,"class","docstring"),c(L,"class","docstring"),c(bo,"id","transformers.FlaxPegasusForConditionalGeneration"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.FlaxPegasusForConditionalGeneration"),c(Dt,"class","relative group"),c(Rs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(gs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(gs,"rel","nofollow"),c(_s,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(_s,"rel","nofollow"),c(ks,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ks,"rel","nofollow"),c(vs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(vs,"rel","nofollow"),c(bs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(bs,"rel","nofollow"),c(Po,"id","generate-summary"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#generate-summary"),c(To,"class","relative group"),c(F,"class","docstring"),c(ot,"class","docstring"),c(nt,"class","docstring"),c(N,"class","docstring")},m(a,p){e(document.head,h),u(a,z,p),u(a,y,p),e(y,T),e(T,x),_(w,x,null),e(y,P),e(y,E),e(E,Ae),u(a,ke,p),u(a,q,p),e(q,ze),e(ze,le),e(q,Ie),e(q,ce),e(ce,ue),e(q,Le),u(a,je,p),u(a,B,p),e(B,O),e(O,Ee),_(J,Ee,null),e(B,j),e(B,S),e(S,Ne),u(a,te,p),u(a,oe,p),e(oe,Ge),e(oe,W),e(W,De),e(oe,Ue),u(a,A,p),u(a,ve,p),e(ve,pe),u(a,Se,p),u(a,ne,p),e(ne,X),e(X,Be),e(ne,We),e(ne,K),e(K,Ke),u(a,se,p),u(a,R,p),e(R,m),e(R,$),e($,$e),e(R,mt),e(R,qe),e(qe,Z),e(R,ft),u(a,Ve,p),u(a,he,p),e(he,I),e(I,Y),_(Fe,Y,null),e(he,gt),e(he,ee),e(ee,_t),u(a,Je,p),u(a,V,p),e(V,kt),e(V,Co),e(Co,Dl),e(V,Ul),e(V,fa),e(fa,Bl),e(V,Wl),u(a,gd,p),u(a,be,p),e(be,ga),e(ga,Kl),e(be,Hl),e(be,_a),e(_a,Ql),e(be,Rl),e(be,ka),e(ka,Vl),e(be,Jl),e(be,jo),e(jo,Xl),e(jo,So),e(So,Zl),e(jo,Yl),e(be,ec),e(be,Bt),e(Bt,Oo),e(Oo,tc),e(Bt,oc),e(Bt,Ao),e(Ao,nc),e(Bt,sc),u(a,_d,p),u(a,vt,p),e(vt,Wt),e(Wt,va),_(Io,va,null),e(vt,ac),e(vt,ba),e(ba,rc),u(a,kd,p),u(a,Xe,p),e(Xe,Kt),e(Kt,Lo),e(Lo,ic),e(Kt,dc),e(Kt,No),e(No,lc),e(Kt,cc),e(Xe,uc),e(Xe,ya),e(ya,pc),e(Xe,hc),e(Xe,Ta),e(Ta,mc),u(a,vd,p),u(a,bt,p),e(bt,Ht),e(Ht,Pa),_(Go,Pa,null),e(bt,fc),e(bt,wa),e(wa,gc),u(a,bd,p),u(a,ye,p),e(ye,xa),e(xa,za),e(za,_c),e(ye,kc),e(ye,Ea),e(Ea,Fs),e(Fs,vc),e(Fs,Ms),e(Ms,bc),e(ye,yc),e(ye,Do),e(Do,$a),e($a,Tc),e(Do,Pc),e(Do,yt),e(yt,qa),e(qa,wc),e(yt,xc),e(yt,Fa),e(Fa,zc),e(yt,Ec),e(yt,Uo),e(Uo,$c),e(Uo,Ma),e(Ma,qc),e(Uo,Fc),e(ye,Mc),e(ye,Ca),e(Ca,He),e(He,Cc),e(He,ja),e(ja,jc),e(He,Sc),e(He,Sa),e(Sa,Oc),e(He,Ac),e(He,Oa),e(Oa,Ic),e(He,Lc),e(ye,Nc),e(ye,Aa),e(Aa,Tt),e(Tt,Gc),e(Tt,Bo),e(Bo,Dc),e(Tt,Uc),e(Tt,Ia),e(Ia,Bc),e(Tt,Wc),u(a,yd,p),u(a,Pt,p),e(Pt,Qt),e(Qt,La),_(Wo,La,null),e(Pt,Kc),e(Pt,Na),e(Na,Hc),u(a,Td,p),_(Ko,a,p),u(a,Pd,p),u(a,wt,p),e(wt,Rt),e(Rt,Ga),_(Ho,Ga,null),e(wt,Qc),e(wt,Da),e(Da,Rc),u(a,wd,p),u(a,me,p),_(Qo,me,null),e(me,Vc),e(me,xt),e(xt,Jc),e(xt,Cs),e(Cs,Xc),e(xt,Zc),e(xt,Ro),e(Ro,Yc),e(xt,eu),e(me,tu),e(me,zt),e(zt,ou),e(zt,js),e(js,nu),e(zt,su),e(zt,Ss),e(Ss,au),e(zt,ru),e(me,iu),e(me,Ua),e(Ua,du),e(me,lu),_(Vo,me,null),u(a,xd,p),u(a,Et,p),e(Et,Vt),e(Vt,Ba),_(Jo,Ba,null),e(Et,cu),e(Et,Wa),e(Wa,uu),u(a,zd,p),u(a,Jt,p),e(Jt,pu),e(Jt,Ka),e(Ka,hu),e(Jt,mu),u(a,Ed,p),u(a,H,p),_(Xo,H,null),e(H,fu),e(H,Zo),e(Zo,gu),e(Zo,Yo),e(Yo,_u),e(Zo,ku),e(H,vu),e(H,en),e(en,bu),e(en,Os),e(Os,yu),e(en,Tu),e(H,Pu),e(H,Oe),_(tn,Oe,null),e(Oe,wu),e(Oe,on),e(on,xu),e(on,Ha),e(Ha,zu),e(on,Eu),e(Oe,$u),e(Oe,nn),e(nn,As),e(As,qu),e(As,Qa),e(Qa,Fu),e(nn,Mu),e(nn,sn),e(sn,Cu),e(sn,Ra),e(Ra,ju),e(sn,Su),e(Oe,Ou),e(Oe,Va),e(Va,Au),e(H,Iu),e(H,Xt),_(an,Xt,null),e(Xt,Lu),e(Xt,Ja),e(Ja,Nu),e(H,Gu),e(H,Zt),_(rn,Zt,null),e(Zt,Du),e(Zt,Xa),e(Xa,Uu),e(H,Bu),e(H,Yt),_(dn,Yt,null),e(Yt,Wu),e(Yt,Za),e(Za,Ku),u(a,$d,p),u(a,$t,p),e($t,eo),e(eo,Ya),_(ln,Ya,null),e($t,Hu),e($t,er),e(er,Qu),u(a,qd,p),u(a,fe,p),_(cn,fe,null),e(fe,Ru),e(fe,qt),e(qt,Vu),e(qt,tr),e(tr,Ju),e(qt,Xu),e(qt,un),e(un,Zu),e(qt,Yu),e(fe,ep),e(fe,pn),e(pn,tp),e(pn,Is),e(Is,op),e(pn,np),e(fe,sp),e(fe,Ze),_(hn,Ze,null),e(Ze,ap),e(Ze,or),e(or,rp),e(Ze,ip),e(Ze,mn),e(mn,Ls),e(Ls,dp),e(Ls,nr),e(nr,lp),e(mn,cp),e(mn,fn),e(fn,up),e(fn,sr),e(sr,pp),e(fn,hp),e(fe,mp),e(fe,to),_(gn,to,null),e(to,fp),e(to,ar),e(ar,gp),u(a,Fd,p),u(a,Ft,p),e(Ft,oo),e(oo,rr),_(_n,rr,null),e(Ft,_p),e(Ft,ir),e(ir,kp),u(a,Md,p),u(a,Me,p),_(kn,Me,null),e(Me,vp),e(Me,vn),e(vn,bp),e(vn,Ns),e(Ns,yp),e(vn,Tp),e(Me,Pp),e(Me,bn),e(bn,wp),e(bn,yn),e(yn,xp),e(bn,zp),e(Me,Ep),e(Me,Te),_(Tn,Te,null),e(Te,$p),e(Te,Mt),e(Mt,qp),e(Mt,Gs),e(Gs,Fp),e(Mt,Mp),e(Mt,dr),e(dr,Cp),e(Mt,jp),e(Te,Sp),_(no,Te,null),e(Te,Op),e(Te,lr),e(lr,Ap),e(Te,Ip),_(Pn,Te,null),u(a,Cd,p),u(a,Ct,p),e(Ct,so),e(so,cr),_(wn,cr,null),e(Ct,Lp),e(Ct,ur),e(ur,Np),u(a,jd,p),u(a,Ce,p),_(xn,Ce,null),e(Ce,Gp),e(Ce,zn),e(zn,Dp),e(zn,Ds),e(Ds,Up),e(zn,Bp),e(Ce,Wp),e(Ce,En),e(En,Kp),e(En,$n),e($n,Hp),e(En,Qp),e(Ce,Rp),e(Ce,G),_(qn,G,null),e(G,Vp),e(G,jt),e(jt,Jp),e(jt,Us),e(Us,Xp),e(jt,Zp),e(jt,pr),e(pr,Yp),e(jt,eh),e(G,th),_(ao,G,null),e(G,oh),e(G,hr),e(hr,nh),e(G,sh),e(G,mr),e(mr,fr),e(fr,gr),e(gr,_r),e(_r,ah),e(G,rh),e(G,kr),e(kr,vr),e(vr,br),e(br,yr),e(yr,ih),e(G,dh),e(G,Tr),e(Tr,Pr),e(Pr,wr),e(wr,xr),e(xr,lh),e(G,ch),e(G,zr),e(zr,Er),e(Er,Fn),e(Fn,ro),e(ro,io),e(io,$r),_(Mn,$r,null),e(ro,uh),e(ro,qr),e(qr,ph),e(Fn,hh),e(Fn,Fr),e(Fr,mh),u(a,Sd,p),u(a,St,p),e(St,lo),e(lo,Mr),_(Cn,Mr,null),e(St,fh),e(St,Cr),e(Cr,gh),u(a,Od,p),u(a,jn,p),e(jn,Ye),_(Sn,Ye,null),e(Ye,_h),e(Ye,jr),e(jr,kh),e(Ye,vh),_(On,Ye,null),u(a,Ad,p),u(a,Ot,p),e(Ot,co),e(co,Sr),_(An,Sr,null),e(Ot,bh),e(Ot,Or),e(Or,yh),u(a,Id,p),u(a,ge,p),_(In,ge,null),e(ge,Th),e(ge,Ln),e(Ln,Ph),e(Ln,Bs),e(Bs,wh),e(Ln,xh),e(ge,zh),e(ge,Nn),e(Nn,Eh),e(Nn,Gn),e(Gn,$h),e(Nn,qh),e(ge,Fh),_(uo,ge,null),e(ge,Mh),e(ge,Pe),_(Dn,Pe,null),e(Pe,Ch),e(Pe,At),e(At,jh),e(At,Ws),e(Ws,Sh),e(At,Oh),e(At,Ar),e(Ar,Ah),e(At,Ih),e(Pe,Lh),_(po,Pe,null),e(Pe,Nh),e(Pe,Ir),e(Ir,Gh),e(Pe,Dh),_(Un,Pe,null),u(a,Ld,p),u(a,It,p),e(It,ho),e(ho,Lr),_(Bn,Lr,null),e(It,Uh),e(It,Nr),e(Nr,Bh),u(a,Nd,p),u(a,_e,p),_(Wn,_e,null),e(_e,Wh),e(_e,Kn),e(Kn,Kh),e(Kn,Ks),e(Ks,Hh),e(Kn,Qh),e(_e,Rh),e(_e,Hn),e(Hn,Vh),e(Hn,Qn),e(Qn,Jh),e(Hn,Xh),e(_e,Zh),_(mo,_e,null),e(_e,Yh),e(_e,D),_(Rn,D,null),e(D,em),e(D,Lt),e(Lt,tm),e(Lt,Hs),e(Hs,om),e(Lt,nm),e(Lt,Gr),e(Gr,sm),e(Lt,am),e(D,rm),_(fo,D,null),e(D,im),e(D,Dr),e(Dr,dm),e(D,lm),e(D,Ur),e(Ur,Br),e(Br,Wr),e(Wr,Kr),e(Kr,cm),e(D,um),e(D,Hr),e(Hr,Qr),e(Qr,Rr),e(Rr,Vr),e(Vr,pm),e(D,hm),e(D,Jr),e(Jr,Xr),e(Xr,Zr),e(Zr,Yr),e(Yr,mm),e(D,fm),e(D,ei),e(ei,ti),e(ti,Vn),e(Vn,go),e(go,_o),e(_o,oi),_(Jn,oi,null),e(go,gm),e(go,ni),e(ni,_m),e(Vn,km),e(Vn,si),e(si,vm),u(a,Gd,p),u(a,Nt,p),e(Nt,ko),e(ko,ai),_(Xn,ai,null),e(Nt,bm),e(Nt,ri),e(ri,ym),u(a,Dd,p),u(a,L,p),_(Zn,L,null),e(L,Tm),e(L,Yn),e(Yn,Pm),e(Yn,Qs),e(Qs,wm),e(Yn,xm),e(L,zm),e(L,es),e(es,Em),e(es,ts),e(ts,$m),e(es,qm),e(L,Fm),e(L,ii),e(ii,Mm),e(L,Cm),e(L,Qe),e(Qe,di),e(di,os),e(os,jm),e(Qe,Sm),e(Qe,li),e(li,ns),e(ns,Om),e(Qe,Am),e(Qe,ci),e(ci,ss),e(ss,Im),e(Qe,Lm),e(Qe,ui),e(ui,as),e(as,Nm),e(L,Gm),e(L,we),_(rs,we,null),e(we,Dm),e(we,Gt),e(Gt,Um),e(Gt,pi),e(pi,Bm),e(Gt,Wm),e(Gt,hi),e(hi,Km),e(Gt,Hm),e(we,Qm),_(vo,we,null),e(we,Rm),e(we,mi),e(mi,Vm),e(we,Jm),_(is,we,null),e(L,Xm),e(L,et),_(ds,et,null),e(et,Zm),e(et,fi),e(fi,Ym),e(et,ef),_(ls,et,null),e(L,tf),e(L,tt),_(cs,tt,null),e(tt,of),e(tt,gi),e(gi,nf),e(tt,sf),_(us,tt,null),u(a,Ud,p),u(a,Dt,p),e(Dt,bo),e(bo,_i),_(ps,_i,null),e(Dt,af),e(Dt,ki),e(ki,rf),u(a,Bd,p),u(a,N,p),_(hs,N,null),e(N,df),e(N,ms),e(ms,lf),e(ms,Rs),e(Rs,cf),e(ms,uf),e(N,pf),e(N,fs),e(fs,hf),e(fs,gs),e(gs,mf),e(fs,ff),e(N,gf),e(N,vi),e(vi,_f),e(N,kf),e(N,Re),e(Re,bi),e(bi,_s),e(_s,vf),e(Re,bf),e(Re,yi),e(yi,ks),e(ks,yf),e(Re,Tf),e(Re,Ti),e(Ti,vs),e(vs,Pf),e(Re,wf),e(Re,Pi),e(Pi,bs),e(bs,xf),e(N,zf),e(N,F),_(ys,F,null),e(F,Ef),e(F,Ut),e(Ut,$f),e(Ut,wi),e(wi,qf),e(Ut,Ff),e(Ut,xi),e(xi,Mf),e(Ut,Cf),e(F,jf),_(yo,F,null),e(F,Sf),e(F,zi),e(zi,Of),e(F,Af),e(F,Ei),e(Ei,$i),e($i,qi),e(qi,Fi),e(Fi,If),e(F,Lf),e(F,Mi),e(Mi,Ci),e(Ci,ji),e(ji,Si),e(Si,Nf),e(F,Gf),e(F,Oi),e(Oi,Ai),e(Ai,Ii),e(Ii,Li),e(Li,Df),e(F,Uf),e(F,Ni),e(Ni,Gi),e(Gi,Ts),e(Ts,To),e(To,Po),e(Po,Di),_(Ps,Di,null),e(To,Bf),e(To,Ui),e(Ui,Wf),e(Ts,Kf),e(Ts,Bi),e(Bi,Hf),e(F,Qf),e(F,Wi),e(Wi,Rf),e(F,Vf),e(F,Ki),e(Ki,Hi),e(Hi,Qi),e(Qi,Ri),e(Ri,Jf),e(F,Xf),e(F,Vi),e(Vi,Ji),e(Ji,Xi),e(Xi,Zi),e(Zi,Zf),e(F,Yf),e(F,Yi),e(Yi,ed),e(ed,td),e(td,od),e(od,eg),e(F,tg),e(F,nd),e(nd,sd),e(sd,ad),e(ad,rd),e(rd,og),e(N,ng),e(N,ot),_(ws,ot,null),e(ot,sg),e(ot,id),e(id,ag),e(ot,rg),_(xs,ot,null),e(N,ig),e(N,nt),_(zs,nt,null),e(nt,dg),e(nt,dd),e(dd,lg),e(nt,cg),_(Es,nt,null),Wd=!0},p(a,[p]){const $s={};p&2&&($s.$$scope={dirty:p,ctx:a}),no.$set($s);const ld={};p&2&&(ld.$$scope={dirty:p,ctx:a}),ao.$set(ld);const cd={};p&2&&(cd.$$scope={dirty:p,ctx:a}),uo.$set(cd);const ud={};p&2&&(ud.$$scope={dirty:p,ctx:a}),po.$set(ud);const wo={};p&2&&(wo.$$scope={dirty:p,ctx:a}),mo.$set(wo);const pd={};p&2&&(pd.$$scope={dirty:p,ctx:a}),fo.$set(pd);const hd={};p&2&&(hd.$$scope={dirty:p,ctx:a}),vo.$set(hd);const qs={};p&2&&(qs.$$scope={dirty:p,ctx:a}),yo.$set(qs)},i(a){Wd||(k(w.$$.fragment,a),k(J.$$.fragment,a),k(Fe.$$.fragment,a),k(Io.$$.fragment,a),k(Go.$$.fragment,a),k(Wo.$$.fragment,a),k(Ko.$$.fragment,a),k(Ho.$$.fragment,a),k(Qo.$$.fragment,a),k(Vo.$$.fragment,a),k(Jo.$$.fragment,a),k(Xo.$$.fragment,a),k(tn.$$.fragment,a),k(an.$$.fragment,a),k(rn.$$.fragment,a),k(dn.$$.fragment,a),k(ln.$$.fragment,a),k(cn.$$.fragment,a),k(hn.$$.fragment,a),k(gn.$$.fragment,a),k(_n.$$.fragment,a),k(kn.$$.fragment,a),k(Tn.$$.fragment,a),k(no.$$.fragment,a),k(Pn.$$.fragment,a),k(wn.$$.fragment,a),k(xn.$$.fragment,a),k(qn.$$.fragment,a),k(ao.$$.fragment,a),k(Mn.$$.fragment,a),k(Cn.$$.fragment,a),k(Sn.$$.fragment,a),k(On.$$.fragment,a),k(An.$$.fragment,a),k(In.$$.fragment,a),k(uo.$$.fragment,a),k(Dn.$$.fragment,a),k(po.$$.fragment,a),k(Un.$$.fragment,a),k(Bn.$$.fragment,a),k(Wn.$$.fragment,a),k(mo.$$.fragment,a),k(Rn.$$.fragment,a),k(fo.$$.fragment,a),k(Jn.$$.fragment,a),k(Xn.$$.fragment,a),k(Zn.$$.fragment,a),k(rs.$$.fragment,a),k(vo.$$.fragment,a),k(is.$$.fragment,a),k(ds.$$.fragment,a),k(ls.$$.fragment,a),k(cs.$$.fragment,a),k(us.$$.fragment,a),k(ps.$$.fragment,a),k(hs.$$.fragment,a),k(ys.$$.fragment,a),k(yo.$$.fragment,a),k(Ps.$$.fragment,a),k(ws.$$.fragment,a),k(xs.$$.fragment,a),k(zs.$$.fragment,a),k(Es.$$.fragment,a),Wd=!0)},o(a){v(w.$$.fragment,a),v(J.$$.fragment,a),v(Fe.$$.fragment,a),v(Io.$$.fragment,a),v(Go.$$.fragment,a),v(Wo.$$.fragment,a),v(Ko.$$.fragment,a),v(Ho.$$.fragment,a),v(Qo.$$.fragment,a),v(Vo.$$.fragment,a),v(Jo.$$.fragment,a),v(Xo.$$.fragment,a),v(tn.$$.fragment,a),v(an.$$.fragment,a),v(rn.$$.fragment,a),v(dn.$$.fragment,a),v(ln.$$.fragment,a),v(cn.$$.fragment,a),v(hn.$$.fragment,a),v(gn.$$.fragment,a),v(_n.$$.fragment,a),v(kn.$$.fragment,a),v(Tn.$$.fragment,a),v(no.$$.fragment,a),v(Pn.$$.fragment,a),v(wn.$$.fragment,a),v(xn.$$.fragment,a),v(qn.$$.fragment,a),v(ao.$$.fragment,a),v(Mn.$$.fragment,a),v(Cn.$$.fragment,a),v(Sn.$$.fragment,a),v(On.$$.fragment,a),v(An.$$.fragment,a),v(In.$$.fragment,a),v(uo.$$.fragment,a),v(Dn.$$.fragment,a),v(po.$$.fragment,a),v(Un.$$.fragment,a),v(Bn.$$.fragment,a),v(Wn.$$.fragment,a),v(mo.$$.fragment,a),v(Rn.$$.fragment,a),v(fo.$$.fragment,a),v(Jn.$$.fragment,a),v(Xn.$$.fragment,a),v(Zn.$$.fragment,a),v(rs.$$.fragment,a),v(vo.$$.fragment,a),v(is.$$.fragment,a),v(ds.$$.fragment,a),v(ls.$$.fragment,a),v(cs.$$.fragment,a),v(us.$$.fragment,a),v(ps.$$.fragment,a),v(hs.$$.fragment,a),v(ys.$$.fragment,a),v(yo.$$.fragment,a),v(Ps.$$.fragment,a),v(ws.$$.fragment,a),v(xs.$$.fragment,a),v(zs.$$.fragment,a),v(Es.$$.fragment,a),Wd=!1},d(a){t(h),a&&t(z),a&&t(y),b(w),a&&t(ke),a&&t(q),a&&t(je),a&&t(B),b(J),a&&t(te),a&&t(oe),a&&t(A),a&&t(ve),a&&t(Se),a&&t(ne),a&&t(se),a&&t(R),a&&t(Ve),a&&t(he),b(Fe),a&&t(Je),a&&t(V),a&&t(gd),a&&t(be),a&&t(_d),a&&t(vt),b(Io),a&&t(kd),a&&t(Xe),a&&t(vd),a&&t(bt),b(Go),a&&t(bd),a&&t(ye),a&&t(yd),a&&t(Pt),b(Wo),a&&t(Td),b(Ko,a),a&&t(Pd),a&&t(wt),b(Ho),a&&t(wd),a&&t(me),b(Qo),b(Vo),a&&t(xd),a&&t(Et),b(Jo),a&&t(zd),a&&t(Jt),a&&t(Ed),a&&t(H),b(Xo),b(tn),b(an),b(rn),b(dn),a&&t($d),a&&t($t),b(ln),a&&t(qd),a&&t(fe),b(cn),b(hn),b(gn),a&&t(Fd),a&&t(Ft),b(_n),a&&t(Md),a&&t(Me),b(kn),b(Tn),b(no),b(Pn),a&&t(Cd),a&&t(Ct),b(wn),a&&t(jd),a&&t(Ce),b(xn),b(qn),b(ao),b(Mn),a&&t(Sd),a&&t(St),b(Cn),a&&t(Od),a&&t(jn),b(Sn),b(On),a&&t(Ad),a&&t(Ot),b(An),a&&t(Id),a&&t(ge),b(In),b(uo),b(Dn),b(po),b(Un),a&&t(Ld),a&&t(It),b(Bn),a&&t(Nd),a&&t(_e),b(Wn),b(mo),b(Rn),b(fo),b(Jn),a&&t(Gd),a&&t(Nt),b(Xn),a&&t(Dd),a&&t(L),b(Zn),b(rs),b(vo),b(is),b(ds),b(ls),b(cs),b(us),a&&t(Ud),a&&t(Dt),b(ps),a&&t(Bd),a&&t(N),b(hs),b(ys),b(yo),b(Ps),b(ws),b(xs),b(zs),b(Es)}}}const Ab={local:"pegasus",sections:[{local:"overview",title:"Overview"},{local:"checkpoints",sections:[{local:"examples",title:"Examples"}],title:"Checkpoints"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage-example",title:"Usage Example"},{local:"transformers.PegasusConfig",title:"PegasusConfig"},{local:"transformers.PegasusTokenizer",title:"PegasusTokenizer"},{local:"transformers.PegasusTokenizerFast",title:"PegasusTokenizerFast"},{local:"transformers.PegasusModel",title:"PegasusModel"},{local:"transformers.PegasusForConditionalGeneration",title:"PegasusForConditionalGeneration"},{local:"transformers.PegasusForCausalLM",title:"PegasusForCausalLM"},{local:"transformers.TFPegasusModel",title:"TFPegasusModel"},{local:"transformers.TFPegasusForConditionalGeneration",title:"TFPegasusForConditionalGeneration"},{local:"transformers.FlaxPegasusModel",title:"FlaxPegasusModel"},{local:"transformers.FlaxPegasusForConditionalGeneration",title:"FlaxPegasusForConditionalGeneration"}],title:"Pegasus"};function Ib(U,h,z){let{fw:y}=h;return U.$$set=T=>{"fw"in T&&z(0,y=T.fw)},[y]}class Wb extends Pb{constructor(h){super();wb(this,h,Ib,Ob,xb,{fw:0})}}export{Wb as default,Ab as metadata};
