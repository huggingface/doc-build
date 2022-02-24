import{S as Kg,i as Yg,s as Qg,e as n,k as d,w as m,t as r,M as e_,c as s,d as t,m as l,a,x as f,h as i,b as c,F as e,g as u,y as g,q as _,o as v,B as k}from"../../chunks/vendor-ab4e3193.js";import{T as xo}from"../../chunks/Tip-b5c6375a.js";import{D as M}from"../../chunks/Docstring-b69c0bd4.js";import{C as we}from"../../chunks/CodeBlock-516df0c5.js";import{I as ne}from"../../chunks/IconCopyLink-d992940d.js";import"../../chunks/CopyButton-204b56db.js";function t_(O){let h,z,T,b,x;return{c(){h=n("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),T=n("code"),b=r("Module"),x=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),T=s(P,"CODE",{});var $=a(T);b=i($,"Module"),$.forEach(t),x=i(P,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,T),e(T,b),e(h,x)},d(w){w&&t(h)}}}function o_(O){let h,z,T,b,x;return{c(){h=n("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),T=n("code"),b=r("Module"),x=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),T=s(P,"CODE",{});var $=a(T);b=i($,"Module"),$.forEach(t),x=i(P,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,T),e(T,b),e(h,x)},d(w){w&&t(h)}}}function n_(O){let h,z,T,b,x,w,P,$,Ae,he,E,xe,se,Ie,ae,re,Ne,qe,L,C,ze,H,j,q,Oe,K,Y,Le,G,Ge,De,S,me,ie,Ce,Q,V,Ue,We,D,Be,ee,W;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),T=d(),b=n("ul"),x=n("li"),w=r("having all inputs as keyword arguments (like PyTorch models), or"),P=d(),$=n("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),he=d(),E=n("p"),xe=r("This second option is useful when using "),se=n("code"),Ie=r("tf.keras.Model.fit"),ae=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),re=n("code"),Ne=r("model(inputs)"),qe=r("."),L=d(),C=n("p"),ze=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),H=d(),j=n("ul"),q=n("li"),Oe=r("a single Tensor with "),K=n("code"),Y=r("input_ids"),Le=r(" only and nothing else: "),G=n("code"),Ge=r("model(input_ids)"),De=d(),S=n("li"),me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ie=n("code"),Ce=r("model([input_ids, attention_mask])"),Q=r(" or "),V=n("code"),Ue=r("model([input_ids, attention_mask, token_type_ids])"),We=d(),D=n("li"),Be=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=n("code"),W=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){h=s(y,"P",{});var F=a(h);z=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),T=l(y),b=s(y,"UL",{});var $e=a(b);x=s($e,"LI",{});var mt=a(x);w=i(mt,"having all inputs as keyword arguments (like PyTorch models), or"),mt.forEach(t),P=l($e),$=s($e,"LI",{});var Fe=a($);Ae=i(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),$e.forEach(t),he=l(y),E=s(y,"P",{});var J=a(E);xe=i(J,"This second option is useful when using "),se=s(J,"CODE",{});var ft=a(se);Ie=i(ft,"tf.keras.Model.fit"),ft.forEach(t),ae=i(J,` method which currently requires having all
the tensors in the first argument of the model call function: `),re=s(J,"CODE",{});var Je=a(re);Ne=i(Je,"model(inputs)"),Je.forEach(t),qe=i(J,"."),J.forEach(t),L=l(y),C=s(y,"P",{});var de=a(C);ze=i(de,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),de.forEach(t),H=l(y),j=s(y,"UL",{});var A=a(j);q=s(A,"LI",{});var X=a(q);Oe=i(X,"a single Tensor with "),K=s(X,"CODE",{});var Ee=a(K);Y=i(Ee,"input_ids"),Ee.forEach(t),Le=i(X," only and nothing else: "),G=s(X,"CODE",{});var gt=a(G);Ge=i(gt,"model(input_ids)"),gt.forEach(t),X.forEach(t),De=l(A),S=s(A,"LI",{});var Z=a(S);me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ie=s(Z,"CODE",{});var _t=a(ie);Ce=i(_t,"model([input_ids, attention_mask])"),_t.forEach(t),Q=i(Z," or "),V=s(Z,"CODE",{});var Xe=a(V);Ue=i(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Z.forEach(t),We=l(A),D=s(A,"LI",{});var B=a(D);Be=i(B,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=s(B,"CODE",{});var vt=a(ee);W=i(vt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),vt.forEach(t),B.forEach(t),A.forEach(t)},m(y,F){u(y,h,F),e(h,z),u(y,T,F),u(y,b,F),e(b,x),e(x,w),e(b,P),e(b,$),e($,Ae),u(y,he,F),u(y,E,F),e(E,xe),e(E,se),e(se,Ie),e(E,ae),e(E,re),e(re,Ne),e(E,qe),u(y,L,F),u(y,C,F),e(C,ze),u(y,H,F),u(y,j,F),e(j,q),e(q,Oe),e(q,K),e(K,Y),e(q,Le),e(q,G),e(G,Ge),e(j,De),e(j,S),e(S,me),e(S,ie),e(ie,Ce),e(S,Q),e(S,V),e(V,Ue),e(j,We),e(j,D),e(D,Be),e(D,ee),e(ee,W)},d(y){y&&t(h),y&&t(T),y&&t(b),y&&t(he),y&&t(E),y&&t(L),y&&t(C),y&&t(H),y&&t(j)}}}function s_(O){let h,z,T,b,x;return{c(){h=n("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),T=n("code"),b=r("Module"),x=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),T=s(P,"CODE",{});var $=a(T);b=i($,"Module"),$.forEach(t),x=i(P,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,T),e(T,b),e(h,x)},d(w){w&&t(h)}}}function a_(O){let h,z,T,b,x,w,P,$,Ae,he,E,xe,se,Ie,ae,re,Ne,qe,L,C,ze,H,j,q,Oe,K,Y,Le,G,Ge,De,S,me,ie,Ce,Q,V,Ue,We,D,Be,ee,W;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),T=d(),b=n("ul"),x=n("li"),w=r("having all inputs as keyword arguments (like PyTorch models), or"),P=d(),$=n("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),he=d(),E=n("p"),xe=r("This second option is useful when using "),se=n("code"),Ie=r("tf.keras.Model.fit"),ae=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),re=n("code"),Ne=r("model(inputs)"),qe=r("."),L=d(),C=n("p"),ze=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),H=d(),j=n("ul"),q=n("li"),Oe=r("a single Tensor with "),K=n("code"),Y=r("input_ids"),Le=r(" only and nothing else: "),G=n("code"),Ge=r("model(input_ids)"),De=d(),S=n("li"),me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ie=n("code"),Ce=r("model([input_ids, attention_mask])"),Q=r(" or "),V=n("code"),Ue=r("model([input_ids, attention_mask, token_type_ids])"),We=d(),D=n("li"),Be=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=n("code"),W=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){h=s(y,"P",{});var F=a(h);z=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),T=l(y),b=s(y,"UL",{});var $e=a(b);x=s($e,"LI",{});var mt=a(x);w=i(mt,"having all inputs as keyword arguments (like PyTorch models), or"),mt.forEach(t),P=l($e),$=s($e,"LI",{});var Fe=a($);Ae=i(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),$e.forEach(t),he=l(y),E=s(y,"P",{});var J=a(E);xe=i(J,"This second option is useful when using "),se=s(J,"CODE",{});var ft=a(se);Ie=i(ft,"tf.keras.Model.fit"),ft.forEach(t),ae=i(J,` method which currently requires having all
the tensors in the first argument of the model call function: `),re=s(J,"CODE",{});var Je=a(re);Ne=i(Je,"model(inputs)"),Je.forEach(t),qe=i(J,"."),J.forEach(t),L=l(y),C=s(y,"P",{});var de=a(C);ze=i(de,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),de.forEach(t),H=l(y),j=s(y,"UL",{});var A=a(j);q=s(A,"LI",{});var X=a(q);Oe=i(X,"a single Tensor with "),K=s(X,"CODE",{});var Ee=a(K);Y=i(Ee,"input_ids"),Ee.forEach(t),Le=i(X," only and nothing else: "),G=s(X,"CODE",{});var gt=a(G);Ge=i(gt,"model(input_ids)"),gt.forEach(t),X.forEach(t),De=l(A),S=s(A,"LI",{});var Z=a(S);me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ie=s(Z,"CODE",{});var _t=a(ie);Ce=i(_t,"model([input_ids, attention_mask])"),_t.forEach(t),Q=i(Z," or "),V=s(Z,"CODE",{});var Xe=a(V);Ue=i(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Z.forEach(t),We=l(A),D=s(A,"LI",{});var B=a(D);Be=i(B,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=s(B,"CODE",{});var vt=a(ee);W=i(vt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),vt.forEach(t),B.forEach(t),A.forEach(t)},m(y,F){u(y,h,F),e(h,z),u(y,T,F),u(y,b,F),e(b,x),e(x,w),e(b,P),e(b,$),e($,Ae),u(y,he,F),u(y,E,F),e(E,xe),e(E,se),e(se,Ie),e(E,ae),e(E,re),e(re,Ne),e(E,qe),u(y,L,F),u(y,C,F),e(C,ze),u(y,H,F),u(y,j,F),e(j,q),e(q,Oe),e(q,K),e(K,Y),e(q,Le),e(q,G),e(G,Ge),e(j,De),e(j,S),e(S,me),e(S,ie),e(ie,Ce),e(S,Q),e(S,V),e(V,Ue),e(j,We),e(j,D),e(D,Be),e(D,ee),e(ee,W)},d(y){y&&t(h),y&&t(T),y&&t(b),y&&t(he),y&&t(E),y&&t(L),y&&t(C),y&&t(H),y&&t(j)}}}function r_(O){let h,z,T,b,x;return{c(){h=n("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),T=n("code"),b=r("Module"),x=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),T=s(P,"CODE",{});var $=a(T);b=i($,"Module"),$.forEach(t),x=i(P,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,T),e(T,b),e(h,x)},d(w){w&&t(h)}}}function i_(O){let h,z,T,b,x;return{c(){h=n("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),T=n("code"),b=r("Module"),x=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),T=s(P,"CODE",{});var $=a(T);b=i($,"Module"),$.forEach(t),x=i(P,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,T),e(T,b),e(h,x)},d(w){w&&t(h)}}}function d_(O){let h,z,T,b,x;return{c(){h=n("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),T=n("code"),b=r("Module"),x=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(w){h=s(w,"P",{});var P=a(h);z=i(P,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),T=s(P,"CODE",{});var $=a(T);b=i($,"Module"),$.forEach(t),x=i(P,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),P.forEach(t)},m(w,P){u(w,h,P),e(h,z),e(h,T),e(T,b),e(h,x)},d(w){w&&t(h)}}}function l_(O){let h,z,T,b,x,w,P,$,Ae,he,E,xe,se,Ie,ae,re,Ne,qe,L,C,ze,H,j,q,Oe,K,Y,Le,G,Ge,De,S,me,ie,Ce,Q,V,Ue,We,D,Be,ee,W,y,F,$e,mt,Fe,J,ft,Je,de,A,X,Ee,gt,Z,_t,Xe,B,vt,zo,md,fd,ia,gd,_d,Xr,fe,da,vd,kd,la,yd,Td,ca,bd,Pd,$o,wd,Fo,xd,zd,$d,Wt,Eo,Fd,Ed,Mo,Md,jd,Zr,kt,Bt,ua,jo,qd,pa,Cd,Kr,Ze,Rt,qo,Sd,Ad,Co,Id,Nd,Od,ha,Ld,Gd,ma,Dd,Yr,yt,Ht,fa,So,Ud,ga,Wd,Qr,ge,_a,va,Bd,Rd,ka,bs,Hd,Ps,Vd,Jd,Ao,ya,Xd,Zd,Tt,Ta,Kd,Yd,ba,Qd,el,Io,tl,Pa,ol,nl,sl,wa,Re,al,xa,rl,il,za,dl,ll,$a,cl,ul,pl,Fa,bt,hl,No,ml,fl,Ea,gl,_l,ei,Pt,Vt,Ma,Oo,vl,ja,kl,ti,Lo,oi,wt,Jt,qa,Go,yl,Ca,Tl,ni,le,Do,bl,xt,Pl,ws,wl,xl,Uo,zl,$l,Fl,zt,El,xs,Ml,jl,zs,ql,Cl,Sl,Sa,Al,Il,Wo,si,$t,Xt,Aa,Bo,Nl,Ia,Ol,ai,Zt,Ll,Na,Gl,Dl,ri,U,Ro,Ul,Ho,Wl,Vo,Bl,Rl,Hl,Jo,Vl,$s,Jl,Xl,Zl,Se,Xo,Kl,Zo,Yl,Oa,Ql,ec,tc,Ko,Fs,oc,La,nc,sc,Yo,ac,Ga,rc,ic,dc,Da,lc,cc,Kt,Qo,uc,Ua,pc,hc,Yt,en,mc,Wa,fc,gc,Qt,tn,_c,Ba,vc,ii,Ft,eo,Ra,on,kc,Ha,yc,di,ce,nn,Tc,Et,bc,Va,Pc,wc,sn,xc,zc,$c,an,Fc,Es,Ec,Mc,jc,Ke,rn,qc,Ja,Cc,Sc,dn,Ms,Ac,Xa,Ic,Nc,ln,Oc,Za,Lc,Gc,Dc,to,cn,Uc,Ka,Wc,li,Mt,oo,Ya,un,Bc,Qa,Rc,ci,Me,pn,Hc,hn,Vc,js,Jc,Xc,Zc,mn,Kc,fn,Yc,Qc,eu,_e,gn,tu,jt,ou,qs,nu,su,er,au,ru,iu,no,du,tr,lu,cu,_n,ui,qt,so,or,vn,uu,nr,pu,pi,je,kn,hu,yn,mu,Cs,fu,gu,_u,Tn,vu,bn,ku,yu,Tu,ve,Pn,bu,Ct,Pu,Ss,wu,xu,sr,zu,$u,Fu,ao,Eu,ar,Mu,ju,wn,hi,St,ro,rr,xn,qu,ir,Cu,mi,zn,Ye,$n,Su,dr,Au,Iu,Fn,fi,At,io,lr,En,Nu,cr,Ou,gi,ue,Mn,Lu,jn,Gu,As,Du,Uu,Wu,qn,Bu,Cn,Ru,Hu,Vu,lo,Ju,ke,Sn,Xu,It,Zu,Is,Ku,Yu,ur,Qu,ep,tp,co,op,pr,np,sp,An,_i,Nt,uo,hr,In,ap,mr,rp,vi,pe,Nn,ip,On,dp,Ns,lp,cp,up,Ln,pp,Gn,hp,mp,fp,po,gp,ye,Dn,_p,Ot,vp,Os,kp,yp,fr,Tp,bp,Pp,ho,wp,gr,xp,zp,Un,ki,Lt,mo,_r,Wn,$p,vr,Fp,yi,I,Bn,Ep,Rn,Mp,Ls,jp,qp,Cp,Hn,Sp,Vn,Ap,Ip,Np,kr,Op,Lp,He,yr,Jn,Gp,Dp,Tr,Xn,Up,Wp,br,Zn,Bp,Rp,Pr,Kn,Hp,Vp,Te,Yn,Jp,Gt,Xp,wr,Zp,Kp,xr,Yp,Qp,eh,fo,th,zr,oh,nh,Qn,sh,Qe,es,ah,$r,rh,ih,ts,dh,et,os,lh,Fr,ch,uh,ns,Ti,Dt,go,Er,ss,ph,Mr,hh,bi,N,as,mh,rs,fh,Gs,gh,_h,vh,is,kh,ds,yh,Th,bh,jr,Ph,wh,Ve,qr,ls,xh,zh,Cr,cs,$h,Fh,Sr,us,Eh,Mh,Ar,ps,jh,qh,R,hs,Ch,Ut,Sh,Ir,Ah,Ih,Nr,Nh,Oh,Lh,_o,Gh,Or,Dh,Uh,ms,Wh,Lr,Bh,Rh,fs,Hh,tt,gs,Vh,Gr,Jh,Xh,_s,Zh,ot,vs,Kh,Dr,Yh,Qh,ks,Pi;return w=new ne({}),H=new ne({}),Ee=new ne({}),jo=new ne({}),So=new ne({}),Oo=new ne({}),Lo=new we({props:{code:`from transformers import PegasusForConditionalGeneration, PegasusTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> tgt_text[<span class="hljs-number">0</span>] == <span class="hljs-string">&quot;California&#x27;s largest electricity provider has turned off power to hundreds of thousands of customers.&quot;</span>`}}),Go=new ne({}),Do=new M({props:{name:"class transformers.PegasusConfig",anchor:"transformers.PegasusConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 0"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"forced_eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/configuration_pegasus.py#L29",parametersDescription:[{anchor:"transformers.PegasusConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the PEGASUS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusModel">PegasusModel</a> or
<a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.TFPegasusModel">TFPegasusModel</a>.`,name:"vocab_size"},{anchor:"transformers.PegasusConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The standard deviation of the truncated<em>normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder<em>layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.PegasusConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.PegasusConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.PegasusConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Wo=new we({props:{code:`from transformers import PegasusModel, PegasusConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Bo=new ne({}),Ro=new M({props:{name:"class transformers.PegasusTokenizer",anchor:"transformers.PegasusTokenizer",parameters:[{name:"vocab_file",val:""},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/tokenization_pegasus.py#L41",parametersDescription:[{anchor:"transformers.PegasusTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.PegasusTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PegasusTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),Xo=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/tokenization_pegasus.py#L252",parametersDescription:[{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qo=new M({props:{name:"convert_tokens_to_string",anchor:"transformers.PegasusTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/tokenization_pegasus.py#L226"}}),en=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/tokenization_pegasus.py#L241"}}),tn=new M({props:{name:"num_special_tokens_to_add",anchor:"transformers.PegasusTokenizer.num_special_tokens_to_add",parameters:[{name:"pair",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/tokenization_pegasus.py#L231"}}),on=new ne({}),nn=new M({props:{name:"class transformers.PegasusTokenizerFast",anchor:"transformers.PegasusTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"mask_token",val:" = '<mask_2>'"},{name:"mask_token_sent",val:" = '<mask_1>'"},{name:"additional_special_tokens",val:" = None"},{name:"offset",val:" = 103"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L52",parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.PegasusTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PegasusTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}]}}),rn=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L174",parametersDescription:[{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.PegasusTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cn=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.PegasusTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/tokenization_pegasus_fast.py#L163"}}),un=new ne({}),pn=new M({props:{name:"class transformers.PegasusModel",anchor:"transformers.PegasusModel",parameters:[{name:"config",val:": PegasusConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_pegasus.py#L1137",parametersDescription:[{anchor:"transformers.PegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),gn=new M({props:{name:"forward",anchor:"transformers.PegasusModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_pegasus.py#L1187",parametersDescription:[{anchor:"transformers.PegasusModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new xo({props:{$$slots:{default:[t_]},$$scope:{ctx:O}}}),_n=new we({props:{code:`from transformers import PegasusTokenizer, PegasusModel

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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vn=new ne({}),kn=new M({props:{name:"class transformers.PegasusForConditionalGeneration",anchor:"transformers.PegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_pegasus.py#L1283",parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pn=new M({props:{name:"forward",anchor:"transformers.PegasusForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_pegasus.py#L1351",parametersDescription:[{anchor:"transformers.PegasusForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PegasusForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PegasusForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PegasusForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ao=new xo({props:{$$slots:{default:[o_]},$$scope:{ctx:O}}}),wn=new we({props:{code:`from transformers import PegasusTokenizer, PegasusForConditionalGeneration

model = PegasusForConditionalGeneration.from_pretrained('google/pegasus-xsum')
tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-xsum')

ARTICLE_TO_SUMMARIZE = (
"PG&E stated it scheduled the blackouts in response to forecasts for high winds "
"amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
"scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors='pt')

# Generate Summary
summary_ids = model.generate(inputs['input_ids'])
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, PegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = PegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-xsum&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-xsum&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span><span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span><span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span><span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>([tokenizer.decode(g, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>) <span class="hljs-keyword">for</span> g <span class="hljs-keyword">in</span> summary_ids])`}}),xn=new ne({}),$n=new M({props:{name:"forward",anchor:"transformers.PegasusForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_pegasus.py#L1540",parametersDescription:[{anchor:"transformers.PegasusForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a>
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fn=new we({props:{code:`from transformers import PegasusTokenizer, PegasusForCausalLM

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),En=new ne({}),Mn=new M({props:{name:"class transformers.TFPegasusModel",anchor:"transformers.TFPegasusModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1222",parametersDescription:[{anchor:"transformers.TFPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),lo=new xo({props:{$$slots:{default:[n_]},$$scope:{ctx:O}}}),Sn=new M({props:{name:"call",anchor:"transformers.TFPegasusModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1234",parametersDescription:[{anchor:"transformers.TFPegasusModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
output<em>attentions (<code>bool</code>, _optional</em>): Whether or not to return the attentions tensors of all
attention layers. See <code>attentions</code> under returned tensors for more detail. This argument can be used only
in eager mode, in graph mode the value in the config will be used instead.`,name:"use_cache"},{anchor:"transformers.TFPegasusModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFPegasusModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFPegasusModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>TFSeq2SeqModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new xo({props:{$$slots:{default:[s_]},$$scope:{ctx:O}}}),An=new we({props:{code:`from transformers import PegasusTokenizer, TFPegasusModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),In=new ne({}),Nn=new M({props:{name:"class transformers.TFPegasusForConditionalGeneration",anchor:"transformers.TFPegasusForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1329",parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),po=new xo({props:{$$slots:{default:[a_]},$$scope:{ctx:O}}}),Dn=new M({props:{name:"call",anchor:"transformers.TFPegasusForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_tf_pegasus.py#L1362",parametersDescription:[{anchor:"transformers.TFPegasusForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
output<em>attentions (<code>bool</code>, _optional</em>): Whether or not to return the attentions tensors of all
attention layers. See <code>attentions</code> under returned tensors for more detail. This argument can be used only
in eager mode, in graph mode the value in the config will be used instead.`,name:"use_cache"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFPegasusForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>TFSeq2SeqLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ho=new xo({props:{$$slots:{default:[r_]},$$scope:{ctx:O}}}),Un=new we({props:{code:`from transformers import PegasusTokenizer, TFPegasusForConditionalGeneration

model = TFPegasusForConditionalGeneration.from_pretrained('google/pegasus-xsum')
tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-xsum')

ARTICLE_TO_SUMMARIZE = (
"PG&E stated it scheduled the blackouts in response to forecasts for high winds "
"amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
"scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors='tf')

# Generate Summary
summary_ids = model.generate(inputs['input_ids'])
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, TFPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-xsum&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-xsum&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span><span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span><span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span><span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>([tokenizer.decode(g, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>) <span class="hljs-keyword">for</span> g <span class="hljs-keyword">in</span> summary_ids])`}}),Wn=new ne({}),Bn=new M({props:{name:"class transformers.FlaxPegasusModel",anchor:"transformers.FlaxPegasusModel",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1220",parametersDescription:[{anchor:"transformers.FlaxPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Yn=new M({props:{name:"__call__",anchor:"transformers.FlaxPegasusPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1155",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new xo({props:{$$slots:{default:[i_]},$$scope:{ctx:O}}}),Qn=new we({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusModel

tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-large')
model = FlaxPegasusModel.from_pretrained('google/pegasus-large')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusModel.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),es=new M({props:{name:"encode",anchor:"transformers.FlaxPegasusPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_flax_pegasus.py#L981",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ts=new we({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained('google/pegasus-large')
tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-large')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='np')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),os=new M({props:{name:"decode",anchor:"transformers.FlaxPegasusPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1043",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ns=new we({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),ss=new ne({}),as=new M({props:{name:"class transformers.FlaxPegasusForConditionalGeneration",anchor:"transformers.FlaxPegasusForConditionalGeneration",parameters:[{name:"config",val:": PegasusConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1307",parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig">PegasusConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxPegasusForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),hs=new M({props:{name:"__call__",anchor:"transformers.FlaxPegasusPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1155",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxPegasusPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusConfig"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new xo({props:{$$slots:{default:[d_]},$$scope:{ctx:O}}}),ms=new we({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained('google/pegasus-large')
tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-large')

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors='np')

# Generate Summary
summary_ids = model.generate(inputs['input_ids']).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),fs=new we({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration
tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-large')
TXT = "My friends are <mask> but they eat too many carbs."

model = FlaxPegasusForConditionalGeneration.from_pretrained('google/pegasus-large')
input_ids = tokenizer([TXT], return_tensors='np')['input_ids']
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs)

tokenizer.decode(predictions).split(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits[<span class="hljs-number">0</span>, masked_index], axis=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = jax.lax.top_k(probs)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),gs=new M({props:{name:"encode",anchor:"transformers.FlaxPegasusPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_flax_pegasus.py#L981",parametersDescription:[{anchor:"transformers.FlaxPegasusPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_s=new we({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

model = FlaxPegasusForConditionalGeneration.from_pretrained('google/pegasus-large')
tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-large')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='np')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, FlaxPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/pegasus-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),vs=new M({props:{name:"decode",anchor:"transformers.FlaxPegasusForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/pegasus/modeling_flax_pegasus.py#L1311",parametersDescription:[{anchor:"transformers.FlaxPegasusForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>PegasusConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ks=new we({props:{code:`from transformers import PegasusTokenizer, FlaxPegasusForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=n("meta"),z=d(),T=n("h1"),b=n("a"),x=n("span"),m(w.$$.fragment),P=d(),$=n("span"),Ae=r("Pegasus"),he=d(),E=n("p"),xe=n("strong"),se=r("DISCLAIMER:"),Ie=r(" If you see something strange, file a "),ae=n("a"),re=r("Github Issue"),Ne=r(`
and assign @patrickvonplaten.`),qe=d(),L=n("h2"),C=n("a"),ze=n("span"),m(H.$$.fragment),j=d(),q=n("span"),Oe=r("Overview"),K=d(),Y=n("p"),Le=r("The Pegasus model was proposed in "),G=n("a"),Ge=r("PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),De=r(" by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),S=d(),me=n("p"),ie=r("According to the abstract,"),Ce=d(),Q=n("ul"),V=n("li"),Ue=r(`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),We=d(),D=n("li"),Be=r("Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),ee=d(),W=n("p"),y=r("This model was contributed by "),F=n("a"),$e=r("sshleifer"),mt=r(". The Authors\u2019 code can be found "),Fe=n("a"),J=r("here"),ft=r("."),Je=d(),de=n("h2"),A=n("a"),X=n("span"),m(Ee.$$.fragment),gt=d(),Z=n("span"),_t=r("Checkpoints"),Xe=d(),B=n("p"),vt=r("All the "),zo=n("a"),md=r("checkpoints"),fd=r(` are fine-tuned for summarization, besides
`),ia=n("em"),gd=r("pegasus-large"),_d=r(", whence the other checkpoints are fine-tuned:"),Xr=d(),fe=n("ul"),da=n("li"),vd=r("Each checkpoint is 2.2 GB on disk and 568M parameters."),kd=d(),la=n("li"),yd=r("FP16 is not supported (help/ideas on this appreciated!)."),Td=d(),ca=n("li"),bd=r("Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),Pd=d(),$o=n("li"),wd=r("Full replication results and correctly pre-processed data can be found in this "),Fo=n("a"),xd=r("Issue"),zd=r("."),$d=d(),Wt=n("li"),Eo=n("a"),Fd=r("Distilled checkpoints"),Ed=r(" are described in this "),Mo=n("a"),Md=r("paper"),jd=r("."),Zr=d(),kt=n("h3"),Bt=n("a"),ua=n("span"),m(jo.$$.fragment),qd=d(),pa=n("span"),Cd=r("Examples"),Kr=d(),Ze=n("ul"),Rt=n("li"),qo=n("a"),Sd=r("Script"),Ad=r(` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),Co=n("a"),Id=r("examples/pytorch/summarization/"),Nd=r("."),Od=d(),ha=n("li"),Ld=r("FP16 is not supported (help/ideas on this appreciated!)."),Gd=d(),ma=n("li"),Dd=r("The adafactor optimizer is recommended for pegasus fine-tuning."),Yr=d(),yt=n("h2"),Ht=n("a"),fa=n("span"),m(So.$$.fragment),Ud=d(),ga=n("span"),Wd=r("Implementation Notes"),Qr=d(),ge=n("ul"),_a=n("li"),va=n("p"),Bd=r("All models are transformer encoder-decoders with 16 layers in each component."),Rd=d(),ka=n("li"),bs=n("p"),Hd=r("The implementation is completely inherited from "),Ps=n("a"),Vd=r("BartForConditionalGeneration"),Jd=d(),Ao=n("li"),ya=n("p"),Xd=r("Some key configuration differences:"),Zd=d(),Tt=n("ul"),Ta=n("li"),Kd=r("static, sinusoidal position embeddings"),Yd=d(),ba=n("li"),Qd=r("the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),el=d(),Io=n("li"),tl=r("more beams are used ("),Pa=n("code"),ol=r("num_beams=8"),nl=r(")"),sl=d(),wa=n("li"),Re=n("p"),al=r("All pretrained pegasus checkpoints are the same besides three attributes: "),xa=n("code"),rl=r("tokenizer.model_max_length"),il=r(` (maximum
input size), `),za=n("code"),dl=r("max_length"),ll=r(" (the maximum number of tokens to generate) and "),$a=n("code"),cl=r("length_penalty"),ul=r("."),pl=d(),Fa=n("li"),bt=n("p"),hl=r("The code to convert checkpoints trained in the author\u2019s "),No=n("a"),ml=r("repo"),fl=r(` can be
found in `),Ea=n("code"),gl=r("convert_pegasus_tf_to_pytorch.py"),_l=r("."),ei=d(),Pt=n("h2"),Vt=n("a"),Ma=n("span"),m(Oo.$$.fragment),vl=d(),ja=n("span"),kl=r("Usage Example"),ti=d(),m(Lo.$$.fragment),oi=d(),wt=n("h2"),Jt=n("a"),qa=n("span"),m(Go.$$.fragment),yl=d(),Ca=n("span"),Tl=r("PegasusConfig"),ni=d(),le=n("div"),m(Do.$$.fragment),bl=d(),xt=n("p"),Pl=r("This is the configuration class to store the configuration of a "),ws=n("a"),wl=r("PegasusModel"),xl=r(`. It is used to
instantiate an PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the PEGASUS `),Uo=n("a"),zl=r("google/pegasus-large"),$l=r(" architecture."),Fl=d(),zt=n("p"),El=r("Configuration objects inherit from "),xs=n("a"),Ml=r("PretrainedConfig"),jl=r(` and can be used to control the model
outputs. Read the documentation from `),zs=n("a"),ql=r("PretrainedConfig"),Cl=r(" for more information."),Sl=d(),Sa=n("p"),Al=r("Example:"),Il=d(),m(Wo.$$.fragment),si=d(),$t=n("h2"),Xt=n("a"),Aa=n("span"),m(Bo.$$.fragment),Nl=d(),Ia=n("span"),Ol=r("PegasusTokenizer"),ai=d(),Zt=n("p"),Ll=r("warning: "),Na=n("code"),Gl=r("add_tokens"),Dl=r(" does not work at the moment."),ri=d(),U=n("div"),m(Ro.$$.fragment),Ul=d(),Ho=n("p"),Wl=r("Construct a PEGASUS tokenizer. Based on "),Vo=n("a"),Bl=r("SentencePiece"),Rl=r("."),Hl=d(),Jo=n("p"),Vl=r("This tokenizer inherits from "),$s=n("a"),Jl=r("PreTrainedTokenizer"),Xl=r(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Zl=d(),Se=n("div"),m(Xo.$$.fragment),Kl=d(),Zo=n("p"),Yl=r(`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Oa=n("code"),Ql=r("X"),ec=r(" represents the sequence:"),tc=d(),Ko=n("ul"),Fs=n("li"),oc=r("single sequence: "),La=n("code"),nc=r("X </s>"),sc=d(),Yo=n("li"),ac=r("pair of sequences: "),Ga=n("code"),rc=r("A B </s>"),ic=r(" (not intended use)"),dc=d(),Da=n("p"),lc=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),cc=d(),Kt=n("div"),m(Qo.$$.fragment),uc=d(),Ua=n("p"),pc=r("Converts a sequence of tokens (string) in a single string."),hc=d(),Yt=n("div"),m(en.$$.fragment),mc=d(),Wa=n("p"),fc=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),gc=d(),Qt=n("div"),m(tn.$$.fragment),_c=d(),Ba=n("p"),vc=r("Just EOS"),ii=d(),Ft=n("h2"),eo=n("a"),Ra=n("span"),m(on.$$.fragment),kc=d(),Ha=n("span"),yc=r("PegasusTokenizerFast"),di=d(),ce=n("div"),m(nn.$$.fragment),Tc=d(),Et=n("p"),bc=r("Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),Va=n("em"),Pc=r("tokenizers"),wc=r(" library). Based on "),sn=n("a"),xc=r("Unigram"),zc=r("."),$c=d(),an=n("p"),Fc=r("This tokenizer inherits from "),Es=n("a"),Ec=r("PreTrainedTokenizerFast"),Mc=r(` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),jc=d(),Ke=n("div"),m(rn.$$.fragment),qc=d(),Ja=n("p"),Cc=r("Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),Sc=d(),dn=n("ul"),Ms=n("li"),Ac=r("single sequence: "),Xa=n("code"),Ic=r("X </s>"),Nc=d(),ln=n("li"),Oc=r("pair of sequences: "),Za=n("code"),Lc=r("A B </s>"),Gc=r(" (not intended use)"),Dc=d(),to=n("div"),m(cn.$$.fragment),Uc=d(),Ka=n("p"),Wc=r("Get list where entries are [1] if a token is [eos] or [pad] else 0."),li=d(),Mt=n("h2"),oo=n("a"),Ya=n("span"),m(un.$$.fragment),Bc=d(),Qa=n("span"),Rc=r("PegasusModel"),ci=d(),Me=n("div"),m(pn.$$.fragment),Hc=d(),hn=n("p"),Vc=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),js=n("a"),Jc=r("PreTrainedModel"),Xc=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Zc=d(),mn=n("p"),Kc=r("This model is also a PyTorch "),fn=n("a"),Yc=r("torch.nn.Module"),Qc=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),eu=d(),_e=n("div"),m(gn.$$.fragment),tu=d(),jt=n("p"),ou=r("The "),qs=n("a"),nu=r("PegasusModel"),su=r(" forward method, overrides the "),er=n("code"),au=r("__call__"),ru=r(" special method."),iu=d(),m(no.$$.fragment),du=d(),tr=n("p"),lu=r("Example:"),cu=d(),m(_n.$$.fragment),ui=d(),qt=n("h2"),so=n("a"),or=n("span"),m(vn.$$.fragment),uu=d(),nr=n("span"),pu=r("PegasusForConditionalGeneration"),pi=d(),je=n("div"),m(kn.$$.fragment),hu=d(),yn=n("p"),mu=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Cs=n("a"),fu=r("PreTrainedModel"),gu=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),_u=d(),Tn=n("p"),vu=r("This model is also a PyTorch "),bn=n("a"),ku=r("torch.nn.Module"),yu=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Tu=d(),ve=n("div"),m(Pn.$$.fragment),bu=d(),Ct=n("p"),Pu=r("The "),Ss=n("a"),wu=r("PegasusForConditionalGeneration"),xu=r(" forward method, overrides the "),sr=n("code"),zu=r("__call__"),$u=r(" special method."),Fu=d(),m(ao.$$.fragment),Eu=d(),ar=n("p"),Mu=r("Summarization example:"),ju=d(),m(wn.$$.fragment),hi=d(),St=n("h2"),ro=n("a"),rr=n("span"),m(xn.$$.fragment),qu=d(),ir=n("span"),Cu=r("PegasusForCausalLM"),mi=d(),zn=n("div"),Ye=n("div"),m($n.$$.fragment),Su=d(),dr=n("p"),Au=r("Example:"),Iu=d(),m(Fn.$$.fragment),fi=d(),At=n("h2"),io=n("a"),lr=n("span"),m(En.$$.fragment),Nu=d(),cr=n("span"),Ou=r("TFPegasusModel"),gi=d(),ue=n("div"),m(Mn.$$.fragment),Lu=d(),jn=n("p"),Gu=r(`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),As=n("a"),Du=r("TFPreTrainedModel"),Uu=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Wu=d(),qn=n("p"),Bu=r("This model is also a "),Cn=n("a"),Ru=r("tf.keras.Model"),Hu=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Vu=d(),m(lo.$$.fragment),Ju=d(),ke=n("div"),m(Sn.$$.fragment),Xu=d(),It=n("p"),Zu=r("The "),Is=n("a"),Ku=r("TFPegasusModel"),Yu=r(" forward method, overrides the "),ur=n("code"),Qu=r("__call__"),ep=r(" special method."),tp=d(),m(co.$$.fragment),op=d(),pr=n("p"),np=r("Example:"),sp=d(),m(An.$$.fragment),_i=d(),Nt=n("h2"),uo=n("a"),hr=n("span"),m(In.$$.fragment),ap=d(),mr=n("span"),rp=r("TFPegasusForConditionalGeneration"),vi=d(),pe=n("div"),m(Nn.$$.fragment),ip=d(),On=n("p"),dp=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ns=n("a"),lp=r("TFPreTrainedModel"),cp=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),up=d(),Ln=n("p"),pp=r("This model is also a "),Gn=n("a"),hp=r("tf.keras.Model"),mp=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),fp=d(),m(po.$$.fragment),gp=d(),ye=n("div"),m(Dn.$$.fragment),_p=d(),Ot=n("p"),vp=r("The "),Os=n("a"),kp=r("TFPegasusForConditionalGeneration"),yp=r(" forward method, overrides the "),fr=n("code"),Tp=r("__call__"),bp=r(" special method."),Pp=d(),m(ho.$$.fragment),wp=d(),gr=n("p"),xp=r("Summarization example:"),zp=d(),m(Un.$$.fragment),ki=d(),Lt=n("h2"),mo=n("a"),_r=n("span"),m(Wn.$$.fragment),$p=d(),vr=n("span"),Fp=r("FlaxPegasusModel"),yi=d(),I=n("div"),m(Bn.$$.fragment),Ep=d(),Rn=n("p"),Mp=r(`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ls=n("a"),jp=r("FlaxPreTrainedModel"),qp=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Cp=d(),Hn=n("p"),Sp=r("This model is also a Flax Linen "),Vn=n("a"),Ap=r("flax.nn.Module"),Ip=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Np=d(),kr=n("p"),Op=r("Finally, this model supports inherent JAX features such as:"),Lp=d(),He=n("ul"),yr=n("li"),Jn=n("a"),Gp=r("Just-In-Time (JIT) compilation"),Dp=d(),Tr=n("li"),Xn=n("a"),Up=r("Automatic Differentiation"),Wp=d(),br=n("li"),Zn=n("a"),Bp=r("Vectorization"),Rp=d(),Pr=n("li"),Kn=n("a"),Hp=r("Parallelization"),Vp=d(),Te=n("div"),m(Yn.$$.fragment),Jp=d(),Gt=n("p"),Xp=r("The "),wr=n("code"),Zp=r("FlaxPegasusPreTrainedModel"),Kp=r(" forward method, overrides the "),xr=n("code"),Yp=r("__call__"),Qp=r(" special method."),eh=d(),m(fo.$$.fragment),th=d(),zr=n("p"),oh=r("Example:"),nh=d(),m(Qn.$$.fragment),sh=d(),Qe=n("div"),m(es.$$.fragment),ah=d(),$r=n("p"),rh=r("Example:"),ih=d(),m(ts.$$.fragment),dh=d(),et=n("div"),m(os.$$.fragment),lh=d(),Fr=n("p"),ch=r("Example:"),uh=d(),m(ns.$$.fragment),Ti=d(),Dt=n("h2"),go=n("a"),Er=n("span"),m(ss.$$.fragment),ph=d(),Mr=n("span"),hh=r("FlaxPegasusForConditionalGeneration"),bi=d(),N=n("div"),m(as.$$.fragment),mh=d(),rs=n("p"),fh=r(`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Gs=n("a"),gh=r("FlaxPreTrainedModel"),_h=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),vh=d(),is=n("p"),kh=r("This model is also a Flax Linen "),ds=n("a"),yh=r("flax.nn.Module"),Th=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bh=d(),jr=n("p"),Ph=r("Finally, this model supports inherent JAX features such as:"),wh=d(),Ve=n("ul"),qr=n("li"),ls=n("a"),xh=r("Just-In-Time (JIT) compilation"),zh=d(),Cr=n("li"),cs=n("a"),$h=r("Automatic Differentiation"),Fh=d(),Sr=n("li"),us=n("a"),Eh=r("Vectorization"),Mh=d(),Ar=n("li"),ps=n("a"),jh=r("Parallelization"),qh=d(),R=n("div"),m(hs.$$.fragment),Ch=d(),Ut=n("p"),Sh=r("The "),Ir=n("code"),Ah=r("FlaxPegasusPreTrainedModel"),Ih=r(" forward method, overrides the "),Nr=n("code"),Nh=r("__call__"),Oh=r(" special method."),Lh=d(),m(_o.$$.fragment),Gh=d(),Or=n("p"),Dh=r("Summarization example:"),Uh=d(),m(ms.$$.fragment),Wh=d(),Lr=n("p"),Bh=r("Mask filling example:"),Rh=d(),m(fs.$$.fragment),Hh=d(),tt=n("div"),m(gs.$$.fragment),Vh=d(),Gr=n("p"),Jh=r("Example:"),Xh=d(),m(_s.$$.fragment),Zh=d(),ot=n("div"),m(vs.$$.fragment),Kh=d(),Dr=n("p"),Yh=r("Example:"),Qh=d(),m(ks.$$.fragment),this.h()},l(o){const p=e_('[data-svelte="svelte-1phssyn"]',document.head);h=s(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(o),T=s(o,"H1",{class:!0});var ys=a(T);b=s(ys,"A",{id:!0,class:!0,href:!0});var Ur=a(b);x=s(Ur,"SPAN",{});var Wr=a(x);f(w.$$.fragment,Wr),Wr.forEach(t),Ur.forEach(t),P=l(ys),$=s(ys,"SPAN",{});var Br=a($);Ae=i(Br,"Pegasus"),Br.forEach(t),ys.forEach(t),he=l(o),E=s(o,"P",{});var vo=a(E);xe=s(vo,"STRONG",{});var Rr=a(xe);se=i(Rr,"DISCLAIMER:"),Rr.forEach(t),Ie=i(vo," If you see something strange, file a "),ae=s(vo,"A",{href:!0,rel:!0});var Hr=a(ae);re=i(Hr,"Github Issue"),Hr.forEach(t),Ne=i(vo,`
and assign @patrickvonplaten.`),vo.forEach(t),qe=l(o),L=s(o,"H2",{class:!0});var Ts=a(L);C=s(Ts,"A",{id:!0,class:!0,href:!0});var nm=a(C);ze=s(nm,"SPAN",{});var sm=a(ze);f(H.$$.fragment,sm),sm.forEach(t),nm.forEach(t),j=l(Ts),q=s(Ts,"SPAN",{});var am=a(q);Oe=i(am,"Overview"),am.forEach(t),Ts.forEach(t),K=l(o),Y=s(o,"P",{});var wi=a(Y);Le=i(wi,"The Pegasus model was proposed in "),G=s(wi,"A",{href:!0,rel:!0});var rm=a(G);Ge=i(rm,"PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization"),rm.forEach(t),De=i(wi," by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu on Dec 18, 2019."),wi.forEach(t),S=l(o),me=s(o,"P",{});var im=a(me);ie=i(im,"According to the abstract,"),im.forEach(t),Ce=l(o),Q=s(o,"UL",{});var xi=a(Q);V=s(xi,"LI",{});var dm=a(V);Ue=i(dm,`Pegasus\u2019 pretraining task is intentionally similar to summarization: important sentences are removed/masked from an
input document and are generated together as one output sequence from the remaining sentences, similar to an
extractive summary.`),dm.forEach(t),We=l(xi),D=s(xi,"LI",{});var lm=a(D);Be=i(lm,"Pegasus achieves SOTA summarization performance on all 12 downstream tasks, as measured by ROUGE and human eval."),lm.forEach(t),xi.forEach(t),ee=l(o),W=s(o,"P",{});var Ds=a(W);y=i(Ds,"This model was contributed by "),F=s(Ds,"A",{href:!0,rel:!0});var cm=a(F);$e=i(cm,"sshleifer"),cm.forEach(t),mt=i(Ds,". The Authors\u2019 code can be found "),Fe=s(Ds,"A",{href:!0,rel:!0});var um=a(Fe);J=i(um,"here"),um.forEach(t),ft=i(Ds,"."),Ds.forEach(t),Je=l(o),de=s(o,"H2",{class:!0});var zi=a(de);A=s(zi,"A",{id:!0,class:!0,href:!0});var pm=a(A);X=s(pm,"SPAN",{});var hm=a(X);f(Ee.$$.fragment,hm),hm.forEach(t),pm.forEach(t),gt=l(zi),Z=s(zi,"SPAN",{});var mm=a(Z);_t=i(mm,"Checkpoints"),mm.forEach(t),zi.forEach(t),Xe=l(o),B=s(o,"P",{});var Us=a(B);vt=i(Us,"All the "),zo=s(Us,"A",{href:!0,rel:!0});var fm=a(zo);md=i(fm,"checkpoints"),fm.forEach(t),fd=i(Us,` are fine-tuned for summarization, besides
`),ia=s(Us,"EM",{});var gm=a(ia);gd=i(gm,"pegasus-large"),gm.forEach(t),_d=i(Us,", whence the other checkpoints are fine-tuned:"),Us.forEach(t),Xr=l(o),fe=s(o,"UL",{});var nt=a(fe);da=s(nt,"LI",{});var _m=a(da);vd=i(_m,"Each checkpoint is 2.2 GB on disk and 568M parameters."),_m.forEach(t),kd=l(nt),la=s(nt,"LI",{});var vm=a(la);yd=i(vm,"FP16 is not supported (help/ideas on this appreciated!)."),vm.forEach(t),Td=l(nt),ca=s(nt,"LI",{});var km=a(ca);bd=i(km,"Summarizing xsum in fp32 takes about 400ms/sample, with default parameters on a v100 GPU."),km.forEach(t),Pd=l(nt),$o=s(nt,"LI",{});var $i=a($o);wd=i($i,"Full replication results and correctly pre-processed data can be found in this "),Fo=s($i,"A",{href:!0,rel:!0});var ym=a(Fo);xd=i(ym,"Issue"),ym.forEach(t),zd=i($i,"."),$i.forEach(t),$d=l(nt),Wt=s(nt,"LI",{});var Vr=a(Wt);Eo=s(Vr,"A",{href:!0,rel:!0});var Tm=a(Eo);Fd=i(Tm,"Distilled checkpoints"),Tm.forEach(t),Ed=i(Vr," are described in this "),Mo=s(Vr,"A",{href:!0,rel:!0});var bm=a(Mo);Md=i(bm,"paper"),bm.forEach(t),jd=i(Vr,"."),Vr.forEach(t),nt.forEach(t),Zr=l(o),kt=s(o,"H3",{class:!0});var Fi=a(kt);Bt=s(Fi,"A",{id:!0,class:!0,href:!0});var Pm=a(Bt);ua=s(Pm,"SPAN",{});var wm=a(ua);f(jo.$$.fragment,wm),wm.forEach(t),Pm.forEach(t),qd=l(Fi),pa=s(Fi,"SPAN",{});var xm=a(pa);Cd=i(xm,"Examples"),xm.forEach(t),Fi.forEach(t),Kr=l(o),Ze=s(o,"UL",{});var Ws=a(Ze);Rt=s(Ws,"LI",{});var Jr=a(Rt);qo=s(Jr,"A",{href:!0,rel:!0});var zm=a(qo);Sd=i(zm,"Script"),zm.forEach(t),Ad=i(Jr,` to fine-tune pegasus
on the XSUM dataset. Data download instructions at `),Co=s(Jr,"A",{href:!0,rel:!0});var $m=a(Co);Id=i($m,"examples/pytorch/summarization/"),$m.forEach(t),Nd=i(Jr,"."),Jr.forEach(t),Od=l(Ws),ha=s(Ws,"LI",{});var Fm=a(ha);Ld=i(Fm,"FP16 is not supported (help/ideas on this appreciated!)."),Fm.forEach(t),Gd=l(Ws),ma=s(Ws,"LI",{});var Em=a(ma);Dd=i(Em,"The adafactor optimizer is recommended for pegasus fine-tuning."),Em.forEach(t),Ws.forEach(t),Yr=l(o),yt=s(o,"H2",{class:!0});var Ei=a(yt);Ht=s(Ei,"A",{id:!0,class:!0,href:!0});var Mm=a(Ht);fa=s(Mm,"SPAN",{});var jm=a(fa);f(So.$$.fragment,jm),jm.forEach(t),Mm.forEach(t),Ud=l(Ei),ga=s(Ei,"SPAN",{});var qm=a(ga);Wd=i(qm,"Implementation Notes"),qm.forEach(t),Ei.forEach(t),Qr=l(o),ge=s(o,"UL",{});var st=a(ge);_a=s(st,"LI",{});var Cm=a(_a);va=s(Cm,"P",{});var Sm=a(va);Bd=i(Sm,"All models are transformer encoder-decoders with 16 layers in each component."),Sm.forEach(t),Cm.forEach(t),Rd=l(st),ka=s(st,"LI",{});var Am=a(ka);bs=s(Am,"P",{});var em=a(bs);Hd=i(em,"The implementation is completely inherited from "),Ps=s(em,"A",{href:!0});var Im=a(Ps);Vd=i(Im,"BartForConditionalGeneration"),Im.forEach(t),em.forEach(t),Am.forEach(t),Jd=l(st),Ao=s(st,"LI",{});var Mi=a(Ao);ya=s(Mi,"P",{});var Nm=a(ya);Xd=i(Nm,"Some key configuration differences:"),Nm.forEach(t),Zd=l(Mi),Tt=s(Mi,"UL",{});var Bs=a(Tt);Ta=s(Bs,"LI",{});var Om=a(Ta);Kd=i(Om,"static, sinusoidal position embeddings"),Om.forEach(t),Yd=l(Bs),ba=s(Bs,"LI",{});var Lm=a(ba);Qd=i(Lm,"the model starts generating with pad_token_id (which has 0 token_embedding) as the prefix."),Lm.forEach(t),el=l(Bs),Io=s(Bs,"LI",{});var ji=a(Io);tl=i(ji,"more beams are used ("),Pa=s(ji,"CODE",{});var Gm=a(Pa);ol=i(Gm,"num_beams=8"),Gm.forEach(t),nl=i(ji,")"),ji.forEach(t),Bs.forEach(t),Mi.forEach(t),sl=l(st),wa=s(st,"LI",{});var Dm=a(wa);Re=s(Dm,"P",{});var ko=a(Re);al=i(ko,"All pretrained pegasus checkpoints are the same besides three attributes: "),xa=s(ko,"CODE",{});var Um=a(xa);rl=i(Um,"tokenizer.model_max_length"),Um.forEach(t),il=i(ko,` (maximum
input size), `),za=s(ko,"CODE",{});var Wm=a(za);dl=i(Wm,"max_length"),Wm.forEach(t),ll=i(ko," (the maximum number of tokens to generate) and "),$a=s(ko,"CODE",{});var Bm=a($a);cl=i(Bm,"length_penalty"),Bm.forEach(t),ul=i(ko,"."),ko.forEach(t),Dm.forEach(t),pl=l(st),Fa=s(st,"LI",{});var Rm=a(Fa);bt=s(Rm,"P",{});var Rs=a(bt);hl=i(Rs,"The code to convert checkpoints trained in the author\u2019s "),No=s(Rs,"A",{href:!0,rel:!0});var Hm=a(No);ml=i(Hm,"repo"),Hm.forEach(t),fl=i(Rs,` can be
found in `),Ea=s(Rs,"CODE",{});var Vm=a(Ea);gl=i(Vm,"convert_pegasus_tf_to_pytorch.py"),Vm.forEach(t),_l=i(Rs,"."),Rs.forEach(t),Rm.forEach(t),st.forEach(t),ei=l(o),Pt=s(o,"H2",{class:!0});var qi=a(Pt);Vt=s(qi,"A",{id:!0,class:!0,href:!0});var Jm=a(Vt);Ma=s(Jm,"SPAN",{});var Xm=a(Ma);f(Oo.$$.fragment,Xm),Xm.forEach(t),Jm.forEach(t),vl=l(qi),ja=s(qi,"SPAN",{});var Zm=a(ja);kl=i(Zm,"Usage Example"),Zm.forEach(t),qi.forEach(t),ti=l(o),f(Lo.$$.fragment,o),oi=l(o),wt=s(o,"H2",{class:!0});var Ci=a(wt);Jt=s(Ci,"A",{id:!0,class:!0,href:!0});var Km=a(Jt);qa=s(Km,"SPAN",{});var Ym=a(qa);f(Go.$$.fragment,Ym),Ym.forEach(t),Km.forEach(t),yl=l(Ci),Ca=s(Ci,"SPAN",{});var Qm=a(Ca);Tl=i(Qm,"PegasusConfig"),Qm.forEach(t),Ci.forEach(t),ni=l(o),le=s(o,"DIV",{class:!0});var at=a(le);f(Do.$$.fragment,at),bl=l(at),xt=s(at,"P",{});var Hs=a(xt);Pl=i(Hs,"This is the configuration class to store the configuration of a "),ws=s(Hs,"A",{href:!0});var ef=a(ws);wl=i(ef,"PegasusModel"),ef.forEach(t),xl=i(Hs,`. It is used to
instantiate an PEGASUS model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the PEGASUS `),Uo=s(Hs,"A",{href:!0,rel:!0});var tf=a(Uo);zl=i(tf,"google/pegasus-large"),tf.forEach(t),$l=i(Hs," architecture."),Hs.forEach(t),Fl=l(at),zt=s(at,"P",{});var Vs=a(zt);El=i(Vs,"Configuration objects inherit from "),xs=s(Vs,"A",{href:!0});var of=a(xs);Ml=i(of,"PretrainedConfig"),of.forEach(t),jl=i(Vs,` and can be used to control the model
outputs. Read the documentation from `),zs=s(Vs,"A",{href:!0});var nf=a(zs);ql=i(nf,"PretrainedConfig"),nf.forEach(t),Cl=i(Vs," for more information."),Vs.forEach(t),Sl=l(at),Sa=s(at,"P",{});var sf=a(Sa);Al=i(sf,"Example:"),sf.forEach(t),Il=l(at),f(Wo.$$.fragment,at),at.forEach(t),si=l(o),$t=s(o,"H2",{class:!0});var Si=a($t);Xt=s(Si,"A",{id:!0,class:!0,href:!0});var af=a(Xt);Aa=s(af,"SPAN",{});var rf=a(Aa);f(Bo.$$.fragment,rf),rf.forEach(t),af.forEach(t),Nl=l(Si),Ia=s(Si,"SPAN",{});var df=a(Ia);Ol=i(df,"PegasusTokenizer"),df.forEach(t),Si.forEach(t),ai=l(o),Zt=s(o,"P",{});var Ai=a(Zt);Ll=i(Ai,"warning: "),Na=s(Ai,"CODE",{});var lf=a(Na);Gl=i(lf,"add_tokens"),lf.forEach(t),Dl=i(Ai," does not work at the moment."),Ai.forEach(t),ri=l(o),U=s(o,"DIV",{class:!0});var be=a(U);f(Ro.$$.fragment,be),Ul=l(be),Ho=s(be,"P",{});var Ii=a(Ho);Wl=i(Ii,"Construct a PEGASUS tokenizer. Based on "),Vo=s(Ii,"A",{href:!0,rel:!0});var cf=a(Vo);Bl=i(cf,"SentencePiece"),cf.forEach(t),Rl=i(Ii,"."),Ii.forEach(t),Hl=l(be),Jo=s(be,"P",{});var Ni=a(Jo);Vl=i(Ni,"This tokenizer inherits from "),$s=s(Ni,"A",{href:!0});var uf=a($s);Jl=i(uf,"PreTrainedTokenizer"),uf.forEach(t),Xl=i(Ni,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Ni.forEach(t),Zl=l(be),Se=s(be,"DIV",{class:!0});var yo=a(Se);f(Xo.$$.fragment,yo),Kl=l(yo),Zo=s(yo,"P",{});var Oi=a(Zo);Yl=i(Oi,`Build model inputs from a sequence or a pair of sequences for sequence classification tasks by concatenating
and adding special tokens. A PEGASUS sequence has the following format, where `),Oa=s(Oi,"CODE",{});var pf=a(Oa);Ql=i(pf,"X"),pf.forEach(t),ec=i(Oi," represents the sequence:"),Oi.forEach(t),tc=l(yo),Ko=s(yo,"UL",{});var Li=a(Ko);Fs=s(Li,"LI",{});var tm=a(Fs);oc=i(tm,"single sequence: "),La=s(tm,"CODE",{});var hf=a(La);nc=i(hf,"X </s>"),hf.forEach(t),tm.forEach(t),sc=l(Li),Yo=s(Li,"LI",{});var Gi=a(Yo);ac=i(Gi,"pair of sequences: "),Ga=s(Gi,"CODE",{});var mf=a(Ga);rc=i(mf,"A B </s>"),mf.forEach(t),ic=i(Gi," (not intended use)"),Gi.forEach(t),Li.forEach(t),dc=l(yo),Da=s(yo,"P",{});var ff=a(Da);lc=i(ff,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),ff.forEach(t),yo.forEach(t),cc=l(be),Kt=s(be,"DIV",{class:!0});var Di=a(Kt);f(Qo.$$.fragment,Di),uc=l(Di),Ua=s(Di,"P",{});var gf=a(Ua);pc=i(gf,"Converts a sequence of tokens (string) in a single string."),gf.forEach(t),Di.forEach(t),hc=l(be),Yt=s(be,"DIV",{class:!0});var Ui=a(Yt);f(en.$$.fragment,Ui),mc=l(Ui),Wa=s(Ui,"P",{});var _f=a(Wa);fc=i(_f,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),_f.forEach(t),Ui.forEach(t),gc=l(be),Qt=s(be,"DIV",{class:!0});var Wi=a(Qt);f(tn.$$.fragment,Wi),_c=l(Wi),Ba=s(Wi,"P",{});var vf=a(Ba);vc=i(vf,"Just EOS"),vf.forEach(t),Wi.forEach(t),be.forEach(t),ii=l(o),Ft=s(o,"H2",{class:!0});var Bi=a(Ft);eo=s(Bi,"A",{id:!0,class:!0,href:!0});var kf=a(eo);Ra=s(kf,"SPAN",{});var yf=a(Ra);f(on.$$.fragment,yf),yf.forEach(t),kf.forEach(t),kc=l(Bi),Ha=s(Bi,"SPAN",{});var Tf=a(Ha);yc=i(Tf,"PegasusTokenizerFast"),Tf.forEach(t),Bi.forEach(t),di=l(o),ce=s(o,"DIV",{class:!0});var rt=a(ce);f(nn.$$.fragment,rt),Tc=l(rt),Et=s(rt,"P",{});var Js=a(Et);bc=i(Js,"Construct a \u201Cfast\u201D PEGASUS tokenizer (backed by HuggingFace\u2019s "),Va=s(Js,"EM",{});var bf=a(Va);Pc=i(bf,"tokenizers"),bf.forEach(t),wc=i(Js," library). Based on "),sn=s(Js,"A",{href:!0,rel:!0});var Pf=a(sn);xc=i(Pf,"Unigram"),Pf.forEach(t),zc=i(Js,"."),Js.forEach(t),$c=l(rt),an=s(rt,"P",{});var Ri=a(an);Fc=i(Ri,"This tokenizer inherits from "),Es=s(Ri,"A",{href:!0});var wf=a(Es);Ec=i(wf,"PreTrainedTokenizerFast"),wf.forEach(t),Mc=i(Ri,` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),Ri.forEach(t),jc=l(rt),Ke=s(rt,"DIV",{class:!0});var Xs=a(Ke);f(rn.$$.fragment,Xs),qc=l(Xs),Ja=s(Xs,"P",{});var xf=a(Ja);Cc=i(xf,"Build model inputs from a sequence by adding eos to the end. no bos token is added to the front."),xf.forEach(t),Sc=l(Xs),dn=s(Xs,"UL",{});var Hi=a(dn);Ms=s(Hi,"LI",{});var om=a(Ms);Ac=i(om,"single sequence: "),Xa=s(om,"CODE",{});var zf=a(Xa);Ic=i(zf,"X </s>"),zf.forEach(t),om.forEach(t),Nc=l(Hi),ln=s(Hi,"LI",{});var Vi=a(ln);Oc=i(Vi,"pair of sequences: "),Za=s(Vi,"CODE",{});var $f=a(Za);Lc=i($f,"A B </s>"),$f.forEach(t),Gc=i(Vi," (not intended use)"),Vi.forEach(t),Hi.forEach(t),Xs.forEach(t),Dc=l(rt),to=s(rt,"DIV",{class:!0});var Ji=a(to);f(cn.$$.fragment,Ji),Uc=l(Ji),Ka=s(Ji,"P",{});var Ff=a(Ka);Wc=i(Ff,"Get list where entries are [1] if a token is [eos] or [pad] else 0."),Ff.forEach(t),Ji.forEach(t),rt.forEach(t),li=l(o),Mt=s(o,"H2",{class:!0});var Xi=a(Mt);oo=s(Xi,"A",{id:!0,class:!0,href:!0});var Ef=a(oo);Ya=s(Ef,"SPAN",{});var Mf=a(Ya);f(un.$$.fragment,Mf),Mf.forEach(t),Ef.forEach(t),Bc=l(Xi),Qa=s(Xi,"SPAN",{});var jf=a(Qa);Rc=i(jf,"PegasusModel"),jf.forEach(t),Xi.forEach(t),ci=l(o),Me=s(o,"DIV",{class:!0});var To=a(Me);f(pn.$$.fragment,To),Hc=l(To),hn=s(To,"P",{});var Zi=a(hn);Vc=i(Zi,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),js=s(Zi,"A",{href:!0});var qf=a(js);Jc=i(qf,"PreTrainedModel"),qf.forEach(t),Xc=i(Zi,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Zi.forEach(t),Zc=l(To),mn=s(To,"P",{});var Ki=a(mn);Kc=i(Ki,"This model is also a PyTorch "),fn=s(Ki,"A",{href:!0,rel:!0});var Cf=a(fn);Yc=i(Cf,"torch.nn.Module"),Cf.forEach(t),Qc=i(Ki,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ki.forEach(t),eu=l(To),_e=s(To,"DIV",{class:!0});var it=a(_e);f(gn.$$.fragment,it),tu=l(it),jt=s(it,"P",{});var Zs=a(jt);ou=i(Zs,"The "),qs=s(Zs,"A",{href:!0});var Sf=a(qs);nu=i(Sf,"PegasusModel"),Sf.forEach(t),su=i(Zs," forward method, overrides the "),er=s(Zs,"CODE",{});var Af=a(er);au=i(Af,"__call__"),Af.forEach(t),ru=i(Zs," special method."),Zs.forEach(t),iu=l(it),f(no.$$.fragment,it),du=l(it),tr=s(it,"P",{});var If=a(tr);lu=i(If,"Example:"),If.forEach(t),cu=l(it),f(_n.$$.fragment,it),it.forEach(t),To.forEach(t),ui=l(o),qt=s(o,"H2",{class:!0});var Yi=a(qt);so=s(Yi,"A",{id:!0,class:!0,href:!0});var Nf=a(so);or=s(Nf,"SPAN",{});var Of=a(or);f(vn.$$.fragment,Of),Of.forEach(t),Nf.forEach(t),uu=l(Yi),nr=s(Yi,"SPAN",{});var Lf=a(nr);pu=i(Lf,"PegasusForConditionalGeneration"),Lf.forEach(t),Yi.forEach(t),pi=l(o),je=s(o,"DIV",{class:!0});var bo=a(je);f(kn.$$.fragment,bo),hu=l(bo),yn=s(bo,"P",{});var Qi=a(yn);mu=i(Qi,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Cs=s(Qi,"A",{href:!0});var Gf=a(Cs);fu=i(Gf,"PreTrainedModel"),Gf.forEach(t),gu=i(Qi,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Qi.forEach(t),_u=l(bo),Tn=s(bo,"P",{});var ed=a(Tn);vu=i(ed,"This model is also a PyTorch "),bn=s(ed,"A",{href:!0,rel:!0});var Df=a(bn);ku=i(Df,"torch.nn.Module"),Df.forEach(t),yu=i(ed,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ed.forEach(t),Tu=l(bo),ve=s(bo,"DIV",{class:!0});var dt=a(ve);f(Pn.$$.fragment,dt),bu=l(dt),Ct=s(dt,"P",{});var Ks=a(Ct);Pu=i(Ks,"The "),Ss=s(Ks,"A",{href:!0});var Uf=a(Ss);wu=i(Uf,"PegasusForConditionalGeneration"),Uf.forEach(t),xu=i(Ks," forward method, overrides the "),sr=s(Ks,"CODE",{});var Wf=a(sr);zu=i(Wf,"__call__"),Wf.forEach(t),$u=i(Ks," special method."),Ks.forEach(t),Fu=l(dt),f(ao.$$.fragment,dt),Eu=l(dt),ar=s(dt,"P",{});var Bf=a(ar);Mu=i(Bf,"Summarization example:"),Bf.forEach(t),ju=l(dt),f(wn.$$.fragment,dt),dt.forEach(t),bo.forEach(t),hi=l(o),St=s(o,"H2",{class:!0});var td=a(St);ro=s(td,"A",{id:!0,class:!0,href:!0});var Rf=a(ro);rr=s(Rf,"SPAN",{});var Hf=a(rr);f(xn.$$.fragment,Hf),Hf.forEach(t),Rf.forEach(t),qu=l(td),ir=s(td,"SPAN",{});var Vf=a(ir);Cu=i(Vf,"PegasusForCausalLM"),Vf.forEach(t),td.forEach(t),mi=l(o),zn=s(o,"DIV",{class:!0});var Jf=a(zn);Ye=s(Jf,"DIV",{class:!0});var Ys=a(Ye);f($n.$$.fragment,Ys),Su=l(Ys),dr=s(Ys,"P",{});var Xf=a(dr);Au=i(Xf,"Example:"),Xf.forEach(t),Iu=l(Ys),f(Fn.$$.fragment,Ys),Ys.forEach(t),Jf.forEach(t),fi=l(o),At=s(o,"H2",{class:!0});var od=a(At);io=s(od,"A",{id:!0,class:!0,href:!0});var Zf=a(io);lr=s(Zf,"SPAN",{});var Kf=a(lr);f(En.$$.fragment,Kf),Kf.forEach(t),Zf.forEach(t),Nu=l(od),cr=s(od,"SPAN",{});var Yf=a(cr);Ou=i(Yf,"TFPegasusModel"),Yf.forEach(t),od.forEach(t),gi=l(o),ue=s(o,"DIV",{class:!0});var lt=a(ue);f(Mn.$$.fragment,lt),Lu=l(lt),jn=s(lt,"P",{});var nd=a(jn);Gu=i(nd,`The bare PEGASUS Model outputting raw hidden-states without any specific head on top.
This model inherits from `),As=s(nd,"A",{href:!0});var Qf=a(As);Du=i(Qf,"TFPreTrainedModel"),Qf.forEach(t),Uu=i(nd,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),nd.forEach(t),Wu=l(lt),qn=s(lt,"P",{});var sd=a(qn);Bu=i(sd,"This model is also a "),Cn=s(sd,"A",{href:!0,rel:!0});var eg=a(Cn);Ru=i(eg,"tf.keras.Model"),eg.forEach(t),Hu=i(sd,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),sd.forEach(t),Vu=l(lt),f(lo.$$.fragment,lt),Ju=l(lt),ke=s(lt,"DIV",{class:!0});var ct=a(ke);f(Sn.$$.fragment,ct),Xu=l(ct),It=s(ct,"P",{});var Qs=a(It);Zu=i(Qs,"The "),Is=s(Qs,"A",{href:!0});var tg=a(Is);Ku=i(tg,"TFPegasusModel"),tg.forEach(t),Yu=i(Qs," forward method, overrides the "),ur=s(Qs,"CODE",{});var og=a(ur);Qu=i(og,"__call__"),og.forEach(t),ep=i(Qs," special method."),Qs.forEach(t),tp=l(ct),f(co.$$.fragment,ct),op=l(ct),pr=s(ct,"P",{});var ng=a(pr);np=i(ng,"Example:"),ng.forEach(t),sp=l(ct),f(An.$$.fragment,ct),ct.forEach(t),lt.forEach(t),_i=l(o),Nt=s(o,"H2",{class:!0});var ad=a(Nt);uo=s(ad,"A",{id:!0,class:!0,href:!0});var sg=a(uo);hr=s(sg,"SPAN",{});var ag=a(hr);f(In.$$.fragment,ag),ag.forEach(t),sg.forEach(t),ap=l(ad),mr=s(ad,"SPAN",{});var rg=a(mr);rp=i(rg,"TFPegasusForConditionalGeneration"),rg.forEach(t),ad.forEach(t),vi=l(o),pe=s(o,"DIV",{class:!0});var ut=a(pe);f(Nn.$$.fragment,ut),ip=l(ut),On=s(ut,"P",{});var rd=a(On);dp=i(rd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ns=s(rd,"A",{href:!0});var ig=a(Ns);lp=i(ig,"TFPreTrainedModel"),ig.forEach(t),cp=i(rd,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),rd.forEach(t),up=l(ut),Ln=s(ut,"P",{});var id=a(Ln);pp=i(id,"This model is also a "),Gn=s(id,"A",{href:!0,rel:!0});var dg=a(Gn);hp=i(dg,"tf.keras.Model"),dg.forEach(t),mp=i(id,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),id.forEach(t),fp=l(ut),f(po.$$.fragment,ut),gp=l(ut),ye=s(ut,"DIV",{class:!0});var pt=a(ye);f(Dn.$$.fragment,pt),_p=l(pt),Ot=s(pt,"P",{});var ea=a(Ot);vp=i(ea,"The "),Os=s(ea,"A",{href:!0});var lg=a(Os);kp=i(lg,"TFPegasusForConditionalGeneration"),lg.forEach(t),yp=i(ea," forward method, overrides the "),fr=s(ea,"CODE",{});var cg=a(fr);Tp=i(cg,"__call__"),cg.forEach(t),bp=i(ea," special method."),ea.forEach(t),Pp=l(pt),f(ho.$$.fragment,pt),wp=l(pt),gr=s(pt,"P",{});var ug=a(gr);xp=i(ug,"Summarization example:"),ug.forEach(t),zp=l(pt),f(Un.$$.fragment,pt),pt.forEach(t),ut.forEach(t),ki=l(o),Lt=s(o,"H2",{class:!0});var dd=a(Lt);mo=s(dd,"A",{id:!0,class:!0,href:!0});var pg=a(mo);_r=s(pg,"SPAN",{});var hg=a(_r);f(Wn.$$.fragment,hg),hg.forEach(t),pg.forEach(t),$p=l(dd),vr=s(dd,"SPAN",{});var mg=a(vr);Fp=i(mg,"FlaxPegasusModel"),mg.forEach(t),dd.forEach(t),yi=l(o),I=s(o,"DIV",{class:!0});var te=a(I);f(Bn.$$.fragment,te),Ep=l(te),Rn=s(te,"P",{});var ld=a(Rn);Mp=i(ld,`The bare Pegasus Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ls=s(ld,"A",{href:!0});var fg=a(Ls);jp=i(fg,"FlaxPreTrainedModel"),fg.forEach(t),qp=i(ld,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ld.forEach(t),Cp=l(te),Hn=s(te,"P",{});var cd=a(Hn);Sp=i(cd,"This model is also a Flax Linen "),Vn=s(cd,"A",{href:!0,rel:!0});var gg=a(Vn);Ap=i(gg,"flax.nn.Module"),gg.forEach(t),Ip=i(cd,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),cd.forEach(t),Np=l(te),kr=s(te,"P",{});var _g=a(kr);Op=i(_g,"Finally, this model supports inherent JAX features such as:"),_g.forEach(t),Lp=l(te),He=s(te,"UL",{});var Po=a(He);yr=s(Po,"LI",{});var vg=a(yr);Jn=s(vg,"A",{href:!0,rel:!0});var kg=a(Jn);Gp=i(kg,"Just-In-Time (JIT) compilation"),kg.forEach(t),vg.forEach(t),Dp=l(Po),Tr=s(Po,"LI",{});var yg=a(Tr);Xn=s(yg,"A",{href:!0,rel:!0});var Tg=a(Xn);Up=i(Tg,"Automatic Differentiation"),Tg.forEach(t),yg.forEach(t),Wp=l(Po),br=s(Po,"LI",{});var bg=a(br);Zn=s(bg,"A",{href:!0,rel:!0});var Pg=a(Zn);Bp=i(Pg,"Vectorization"),Pg.forEach(t),bg.forEach(t),Rp=l(Po),Pr=s(Po,"LI",{});var wg=a(Pr);Kn=s(wg,"A",{href:!0,rel:!0});var xg=a(Kn);Hp=i(xg,"Parallelization"),xg.forEach(t),wg.forEach(t),Po.forEach(t),Vp=l(te),Te=s(te,"DIV",{class:!0});var ht=a(Te);f(Yn.$$.fragment,ht),Jp=l(ht),Gt=s(ht,"P",{});var ta=a(Gt);Xp=i(ta,"The "),wr=s(ta,"CODE",{});var zg=a(wr);Zp=i(zg,"FlaxPegasusPreTrainedModel"),zg.forEach(t),Kp=i(ta," forward method, overrides the "),xr=s(ta,"CODE",{});var $g=a(xr);Yp=i($g,"__call__"),$g.forEach(t),Qp=i(ta," special method."),ta.forEach(t),eh=l(ht),f(fo.$$.fragment,ht),th=l(ht),zr=s(ht,"P",{});var Fg=a(zr);oh=i(Fg,"Example:"),Fg.forEach(t),nh=l(ht),f(Qn.$$.fragment,ht),ht.forEach(t),sh=l(te),Qe=s(te,"DIV",{class:!0});var oa=a(Qe);f(es.$$.fragment,oa),ah=l(oa),$r=s(oa,"P",{});var Eg=a($r);rh=i(Eg,"Example:"),Eg.forEach(t),ih=l(oa),f(ts.$$.fragment,oa),oa.forEach(t),dh=l(te),et=s(te,"DIV",{class:!0});var na=a(et);f(os.$$.fragment,na),lh=l(na),Fr=s(na,"P",{});var Mg=a(Fr);ch=i(Mg,"Example:"),Mg.forEach(t),uh=l(na),f(ns.$$.fragment,na),na.forEach(t),te.forEach(t),Ti=l(o),Dt=s(o,"H2",{class:!0});var ud=a(Dt);go=s(ud,"A",{id:!0,class:!0,href:!0});var jg=a(go);Er=s(jg,"SPAN",{});var qg=a(Er);f(ss.$$.fragment,qg),qg.forEach(t),jg.forEach(t),ph=l(ud),Mr=s(ud,"SPAN",{});var Cg=a(Mr);hh=i(Cg,"FlaxPegasusForConditionalGeneration"),Cg.forEach(t),ud.forEach(t),bi=l(o),N=s(o,"DIV",{class:!0});var oe=a(N);f(as.$$.fragment,oe),mh=l(oe),rs=s(oe,"P",{});var pd=a(rs);fh=i(pd,`The PEGASUS Model with a language modeling head. Can be used for summarization.
This model inherits from `),Gs=s(pd,"A",{href:!0});var Sg=a(Gs);gh=i(Sg,"FlaxPreTrainedModel"),Sg.forEach(t),_h=i(pd,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),pd.forEach(t),vh=l(oe),is=s(oe,"P",{});var hd=a(is);kh=i(hd,"This model is also a Flax Linen "),ds=s(hd,"A",{href:!0,rel:!0});var Ag=a(ds);yh=i(Ag,"flax.nn.Module"),Ag.forEach(t),Th=i(hd,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),hd.forEach(t),bh=l(oe),jr=s(oe,"P",{});var Ig=a(jr);Ph=i(Ig,"Finally, this model supports inherent JAX features such as:"),Ig.forEach(t),wh=l(oe),Ve=s(oe,"UL",{});var wo=a(Ve);qr=s(wo,"LI",{});var Ng=a(qr);ls=s(Ng,"A",{href:!0,rel:!0});var Og=a(ls);xh=i(Og,"Just-In-Time (JIT) compilation"),Og.forEach(t),Ng.forEach(t),zh=l(wo),Cr=s(wo,"LI",{});var Lg=a(Cr);cs=s(Lg,"A",{href:!0,rel:!0});var Gg=a(cs);$h=i(Gg,"Automatic Differentiation"),Gg.forEach(t),Lg.forEach(t),Fh=l(wo),Sr=s(wo,"LI",{});var Dg=a(Sr);us=s(Dg,"A",{href:!0,rel:!0});var Ug=a(us);Eh=i(Ug,"Vectorization"),Ug.forEach(t),Dg.forEach(t),Mh=l(wo),Ar=s(wo,"LI",{});var Wg=a(Ar);ps=s(Wg,"A",{href:!0,rel:!0});var Bg=a(ps);jh=i(Bg,"Parallelization"),Bg.forEach(t),Wg.forEach(t),wo.forEach(t),qh=l(oe),R=s(oe,"DIV",{class:!0});var Pe=a(R);f(hs.$$.fragment,Pe),Ch=l(Pe),Ut=s(Pe,"P",{});var sa=a(Ut);Sh=i(sa,"The "),Ir=s(sa,"CODE",{});var Rg=a(Ir);Ah=i(Rg,"FlaxPegasusPreTrainedModel"),Rg.forEach(t),Ih=i(sa," forward method, overrides the "),Nr=s(sa,"CODE",{});var Hg=a(Nr);Nh=i(Hg,"__call__"),Hg.forEach(t),Oh=i(sa," special method."),sa.forEach(t),Lh=l(Pe),f(_o.$$.fragment,Pe),Gh=l(Pe),Or=s(Pe,"P",{});var Vg=a(Or);Dh=i(Vg,"Summarization example:"),Vg.forEach(t),Uh=l(Pe),f(ms.$$.fragment,Pe),Wh=l(Pe),Lr=s(Pe,"P",{});var Jg=a(Lr);Bh=i(Jg,"Mask filling example:"),Jg.forEach(t),Rh=l(Pe),f(fs.$$.fragment,Pe),Pe.forEach(t),Hh=l(oe),tt=s(oe,"DIV",{class:!0});var aa=a(tt);f(gs.$$.fragment,aa),Vh=l(aa),Gr=s(aa,"P",{});var Xg=a(Gr);Jh=i(Xg,"Example:"),Xg.forEach(t),Xh=l(aa),f(_s.$$.fragment,aa),aa.forEach(t),Zh=l(oe),ot=s(oe,"DIV",{class:!0});var ra=a(ot);f(vs.$$.fragment,ra),Kh=l(ra),Dr=s(ra,"P",{});var Zg=a(Dr);Yh=i(Zg,"Example:"),Zg.forEach(t),Qh=l(ra),f(ks.$$.fragment,ra),ra.forEach(t),oe.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(c_)),c(b,"id","pegasus"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#pegasus"),c(T,"class","relative group"),c(ae,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),c(ae,"rel","nofollow"),c(C,"id","overview"),c(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(C,"href","#overview"),c(L,"class","relative group"),c(G,"href","https://arxiv.org/pdf/1912.08777.pdf"),c(G,"rel","nofollow"),c(F,"href","https://huggingface.co/sshleifer"),c(F,"rel","nofollow"),c(Fe,"href","https://github.com/google-research/pegasus"),c(Fe,"rel","nofollow"),c(A,"id","checkpoints"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#checkpoints"),c(de,"class","relative group"),c(zo,"href","https://huggingface.co/models?search=pegasus"),c(zo,"rel","nofollow"),c(Fo,"href","https://github.com/huggingface/transformers/issues/6844#issue-689259666"),c(Fo,"rel","nofollow"),c(Eo,"href","https://huggingface.co/models?search=distill-pegasus"),c(Eo,"rel","nofollow"),c(Mo,"href","https://arxiv.org/abs/2010.13002"),c(Mo,"rel","nofollow"),c(Bt,"id","examples"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#examples"),c(kt,"class","relative group"),c(qo,"href","https://github.com/huggingface/transformers/tree/master/examples/research_projects/seq2seq-distillation/finetune_pegasus_xsum.sh"),c(qo,"rel","nofollow"),c(Co,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/README.md"),c(Co,"rel","nofollow"),c(Ht,"id","implementation-notes"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#implementation-notes"),c(yt,"class","relative group"),c(Ps,"href","/docs/transformers/v4.14.1/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(No,"href","https://github.com/google-research/pegasus"),c(No,"rel","nofollow"),c(Vt,"id","usage-example"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#usage-example"),c(Pt,"class","relative group"),c(Jt,"id","transformers.PegasusConfig"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.PegasusConfig"),c(wt,"class","relative group"),c(ws,"href","/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusModel"),c(Uo,"href","https://huggingface.co/google/pegasus-large"),c(Uo,"rel","nofollow"),c(xs,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(zs,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(le,"class","docstring"),c(Xt,"id","transformers.PegasusTokenizer"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.PegasusTokenizer"),c($t,"class","relative group"),c(Vo,"href","https://github.com/google/sentencepiece"),c(Vo,"rel","nofollow"),c($s,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Se,"class","docstring"),c(Kt,"class","docstring"),c(Yt,"class","docstring"),c(Qt,"class","docstring"),c(U,"class","docstring"),c(eo,"id","transformers.PegasusTokenizerFast"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.PegasusTokenizerFast"),c(Ft,"class","relative group"),c(sn,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(sn,"rel","nofollow"),c(Es,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ke,"class","docstring"),c(to,"class","docstring"),c(ce,"class","docstring"),c(oo,"id","transformers.PegasusModel"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.PegasusModel"),c(Mt,"class","relative group"),c(js,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fn,"rel","nofollow"),c(qs,"href","/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusModel"),c(_e,"class","docstring"),c(Me,"class","docstring"),c(so,"id","transformers.PegasusForConditionalGeneration"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.PegasusForConditionalGeneration"),c(qt,"class","relative group"),c(Cs,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(bn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bn,"rel","nofollow"),c(Ss,"href","/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.PegasusForConditionalGeneration"),c(ve,"class","docstring"),c(je,"class","docstring"),c(ro,"id","transformers.PegasusForCausalLM"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.PegasusForCausalLM"),c(St,"class","relative group"),c(Ye,"class","docstring"),c(zn,"class","docstring"),c(io,"id","transformers.TFPegasusModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFPegasusModel"),c(At,"class","relative group"),c(As,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(Cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cn,"rel","nofollow"),c(Is,"href","/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.TFPegasusModel"),c(ke,"class","docstring"),c(ue,"class","docstring"),c(uo,"id","transformers.TFPegasusForConditionalGeneration"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFPegasusForConditionalGeneration"),c(Nt,"class","relative group"),c(Ns,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(Gn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Gn,"rel","nofollow"),c(Os,"href","/docs/transformers/v4.14.1/en/model_doc/pegasus#transformers.TFPegasusForConditionalGeneration"),c(ye,"class","docstring"),c(pe,"class","docstring"),c(mo,"id","transformers.FlaxPegasusModel"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.FlaxPegasusModel"),c(Lt,"class","relative group"),c(Ls,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Vn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Vn,"rel","nofollow"),c(Jn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Jn,"rel","nofollow"),c(Xn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Xn,"rel","nofollow"),c(Zn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Zn,"rel","nofollow"),c(Kn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Kn,"rel","nofollow"),c(Te,"class","docstring"),c(Qe,"class","docstring"),c(et,"class","docstring"),c(I,"class","docstring"),c(go,"id","transformers.FlaxPegasusForConditionalGeneration"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.FlaxPegasusForConditionalGeneration"),c(Dt,"class","relative group"),c(Gs,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ds,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ds,"rel","nofollow"),c(ls,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ls,"rel","nofollow"),c(cs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(cs,"rel","nofollow"),c(us,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(us,"rel","nofollow"),c(ps,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ps,"rel","nofollow"),c(R,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(N,"class","docstring")},m(o,p){e(document.head,h),u(o,z,p),u(o,T,p),e(T,b),e(b,x),g(w,x,null),e(T,P),e(T,$),e($,Ae),u(o,he,p),u(o,E,p),e(E,xe),e(xe,se),e(E,Ie),e(E,ae),e(ae,re),e(E,Ne),u(o,qe,p),u(o,L,p),e(L,C),e(C,ze),g(H,ze,null),e(L,j),e(L,q),e(q,Oe),u(o,K,p),u(o,Y,p),e(Y,Le),e(Y,G),e(G,Ge),e(Y,De),u(o,S,p),u(o,me,p),e(me,ie),u(o,Ce,p),u(o,Q,p),e(Q,V),e(V,Ue),e(Q,We),e(Q,D),e(D,Be),u(o,ee,p),u(o,W,p),e(W,y),e(W,F),e(F,$e),e(W,mt),e(W,Fe),e(Fe,J),e(W,ft),u(o,Je,p),u(o,de,p),e(de,A),e(A,X),g(Ee,X,null),e(de,gt),e(de,Z),e(Z,_t),u(o,Xe,p),u(o,B,p),e(B,vt),e(B,zo),e(zo,md),e(B,fd),e(B,ia),e(ia,gd),e(B,_d),u(o,Xr,p),u(o,fe,p),e(fe,da),e(da,vd),e(fe,kd),e(fe,la),e(la,yd),e(fe,Td),e(fe,ca),e(ca,bd),e(fe,Pd),e(fe,$o),e($o,wd),e($o,Fo),e(Fo,xd),e($o,zd),e(fe,$d),e(fe,Wt),e(Wt,Eo),e(Eo,Fd),e(Wt,Ed),e(Wt,Mo),e(Mo,Md),e(Wt,jd),u(o,Zr,p),u(o,kt,p),e(kt,Bt),e(Bt,ua),g(jo,ua,null),e(kt,qd),e(kt,pa),e(pa,Cd),u(o,Kr,p),u(o,Ze,p),e(Ze,Rt),e(Rt,qo),e(qo,Sd),e(Rt,Ad),e(Rt,Co),e(Co,Id),e(Rt,Nd),e(Ze,Od),e(Ze,ha),e(ha,Ld),e(Ze,Gd),e(Ze,ma),e(ma,Dd),u(o,Yr,p),u(o,yt,p),e(yt,Ht),e(Ht,fa),g(So,fa,null),e(yt,Ud),e(yt,ga),e(ga,Wd),u(o,Qr,p),u(o,ge,p),e(ge,_a),e(_a,va),e(va,Bd),e(ge,Rd),e(ge,ka),e(ka,bs),e(bs,Hd),e(bs,Ps),e(Ps,Vd),e(ge,Jd),e(ge,Ao),e(Ao,ya),e(ya,Xd),e(Ao,Zd),e(Ao,Tt),e(Tt,Ta),e(Ta,Kd),e(Tt,Yd),e(Tt,ba),e(ba,Qd),e(Tt,el),e(Tt,Io),e(Io,tl),e(Io,Pa),e(Pa,ol),e(Io,nl),e(ge,sl),e(ge,wa),e(wa,Re),e(Re,al),e(Re,xa),e(xa,rl),e(Re,il),e(Re,za),e(za,dl),e(Re,ll),e(Re,$a),e($a,cl),e(Re,ul),e(ge,pl),e(ge,Fa),e(Fa,bt),e(bt,hl),e(bt,No),e(No,ml),e(bt,fl),e(bt,Ea),e(Ea,gl),e(bt,_l),u(o,ei,p),u(o,Pt,p),e(Pt,Vt),e(Vt,Ma),g(Oo,Ma,null),e(Pt,vl),e(Pt,ja),e(ja,kl),u(o,ti,p),g(Lo,o,p),u(o,oi,p),u(o,wt,p),e(wt,Jt),e(Jt,qa),g(Go,qa,null),e(wt,yl),e(wt,Ca),e(Ca,Tl),u(o,ni,p),u(o,le,p),g(Do,le,null),e(le,bl),e(le,xt),e(xt,Pl),e(xt,ws),e(ws,wl),e(xt,xl),e(xt,Uo),e(Uo,zl),e(xt,$l),e(le,Fl),e(le,zt),e(zt,El),e(zt,xs),e(xs,Ml),e(zt,jl),e(zt,zs),e(zs,ql),e(zt,Cl),e(le,Sl),e(le,Sa),e(Sa,Al),e(le,Il),g(Wo,le,null),u(o,si,p),u(o,$t,p),e($t,Xt),e(Xt,Aa),g(Bo,Aa,null),e($t,Nl),e($t,Ia),e(Ia,Ol),u(o,ai,p),u(o,Zt,p),e(Zt,Ll),e(Zt,Na),e(Na,Gl),e(Zt,Dl),u(o,ri,p),u(o,U,p),g(Ro,U,null),e(U,Ul),e(U,Ho),e(Ho,Wl),e(Ho,Vo),e(Vo,Bl),e(Ho,Rl),e(U,Hl),e(U,Jo),e(Jo,Vl),e(Jo,$s),e($s,Jl),e(Jo,Xl),e(U,Zl),e(U,Se),g(Xo,Se,null),e(Se,Kl),e(Se,Zo),e(Zo,Yl),e(Zo,Oa),e(Oa,Ql),e(Zo,ec),e(Se,tc),e(Se,Ko),e(Ko,Fs),e(Fs,oc),e(Fs,La),e(La,nc),e(Ko,sc),e(Ko,Yo),e(Yo,ac),e(Yo,Ga),e(Ga,rc),e(Yo,ic),e(Se,dc),e(Se,Da),e(Da,lc),e(U,cc),e(U,Kt),g(Qo,Kt,null),e(Kt,uc),e(Kt,Ua),e(Ua,pc),e(U,hc),e(U,Yt),g(en,Yt,null),e(Yt,mc),e(Yt,Wa),e(Wa,fc),e(U,gc),e(U,Qt),g(tn,Qt,null),e(Qt,_c),e(Qt,Ba),e(Ba,vc),u(o,ii,p),u(o,Ft,p),e(Ft,eo),e(eo,Ra),g(on,Ra,null),e(Ft,kc),e(Ft,Ha),e(Ha,yc),u(o,di,p),u(o,ce,p),g(nn,ce,null),e(ce,Tc),e(ce,Et),e(Et,bc),e(Et,Va),e(Va,Pc),e(Et,wc),e(Et,sn),e(sn,xc),e(Et,zc),e(ce,$c),e(ce,an),e(an,Fc),e(an,Es),e(Es,Ec),e(an,Mc),e(ce,jc),e(ce,Ke),g(rn,Ke,null),e(Ke,qc),e(Ke,Ja),e(Ja,Cc),e(Ke,Sc),e(Ke,dn),e(dn,Ms),e(Ms,Ac),e(Ms,Xa),e(Xa,Ic),e(dn,Nc),e(dn,ln),e(ln,Oc),e(ln,Za),e(Za,Lc),e(ln,Gc),e(ce,Dc),e(ce,to),g(cn,to,null),e(to,Uc),e(to,Ka),e(Ka,Wc),u(o,li,p),u(o,Mt,p),e(Mt,oo),e(oo,Ya),g(un,Ya,null),e(Mt,Bc),e(Mt,Qa),e(Qa,Rc),u(o,ci,p),u(o,Me,p),g(pn,Me,null),e(Me,Hc),e(Me,hn),e(hn,Vc),e(hn,js),e(js,Jc),e(hn,Xc),e(Me,Zc),e(Me,mn),e(mn,Kc),e(mn,fn),e(fn,Yc),e(mn,Qc),e(Me,eu),e(Me,_e),g(gn,_e,null),e(_e,tu),e(_e,jt),e(jt,ou),e(jt,qs),e(qs,nu),e(jt,su),e(jt,er),e(er,au),e(jt,ru),e(_e,iu),g(no,_e,null),e(_e,du),e(_e,tr),e(tr,lu),e(_e,cu),g(_n,_e,null),u(o,ui,p),u(o,qt,p),e(qt,so),e(so,or),g(vn,or,null),e(qt,uu),e(qt,nr),e(nr,pu),u(o,pi,p),u(o,je,p),g(kn,je,null),e(je,hu),e(je,yn),e(yn,mu),e(yn,Cs),e(Cs,fu),e(yn,gu),e(je,_u),e(je,Tn),e(Tn,vu),e(Tn,bn),e(bn,ku),e(Tn,yu),e(je,Tu),e(je,ve),g(Pn,ve,null),e(ve,bu),e(ve,Ct),e(Ct,Pu),e(Ct,Ss),e(Ss,wu),e(Ct,xu),e(Ct,sr),e(sr,zu),e(Ct,$u),e(ve,Fu),g(ao,ve,null),e(ve,Eu),e(ve,ar),e(ar,Mu),e(ve,ju),g(wn,ve,null),u(o,hi,p),u(o,St,p),e(St,ro),e(ro,rr),g(xn,rr,null),e(St,qu),e(St,ir),e(ir,Cu),u(o,mi,p),u(o,zn,p),e(zn,Ye),g($n,Ye,null),e(Ye,Su),e(Ye,dr),e(dr,Au),e(Ye,Iu),g(Fn,Ye,null),u(o,fi,p),u(o,At,p),e(At,io),e(io,lr),g(En,lr,null),e(At,Nu),e(At,cr),e(cr,Ou),u(o,gi,p),u(o,ue,p),g(Mn,ue,null),e(ue,Lu),e(ue,jn),e(jn,Gu),e(jn,As),e(As,Du),e(jn,Uu),e(ue,Wu),e(ue,qn),e(qn,Bu),e(qn,Cn),e(Cn,Ru),e(qn,Hu),e(ue,Vu),g(lo,ue,null),e(ue,Ju),e(ue,ke),g(Sn,ke,null),e(ke,Xu),e(ke,It),e(It,Zu),e(It,Is),e(Is,Ku),e(It,Yu),e(It,ur),e(ur,Qu),e(It,ep),e(ke,tp),g(co,ke,null),e(ke,op),e(ke,pr),e(pr,np),e(ke,sp),g(An,ke,null),u(o,_i,p),u(o,Nt,p),e(Nt,uo),e(uo,hr),g(In,hr,null),e(Nt,ap),e(Nt,mr),e(mr,rp),u(o,vi,p),u(o,pe,p),g(Nn,pe,null),e(pe,ip),e(pe,On),e(On,dp),e(On,Ns),e(Ns,lp),e(On,cp),e(pe,up),e(pe,Ln),e(Ln,pp),e(Ln,Gn),e(Gn,hp),e(Ln,mp),e(pe,fp),g(po,pe,null),e(pe,gp),e(pe,ye),g(Dn,ye,null),e(ye,_p),e(ye,Ot),e(Ot,vp),e(Ot,Os),e(Os,kp),e(Ot,yp),e(Ot,fr),e(fr,Tp),e(Ot,bp),e(ye,Pp),g(ho,ye,null),e(ye,wp),e(ye,gr),e(gr,xp),e(ye,zp),g(Un,ye,null),u(o,ki,p),u(o,Lt,p),e(Lt,mo),e(mo,_r),g(Wn,_r,null),e(Lt,$p),e(Lt,vr),e(vr,Fp),u(o,yi,p),u(o,I,p),g(Bn,I,null),e(I,Ep),e(I,Rn),e(Rn,Mp),e(Rn,Ls),e(Ls,jp),e(Rn,qp),e(I,Cp),e(I,Hn),e(Hn,Sp),e(Hn,Vn),e(Vn,Ap),e(Hn,Ip),e(I,Np),e(I,kr),e(kr,Op),e(I,Lp),e(I,He),e(He,yr),e(yr,Jn),e(Jn,Gp),e(He,Dp),e(He,Tr),e(Tr,Xn),e(Xn,Up),e(He,Wp),e(He,br),e(br,Zn),e(Zn,Bp),e(He,Rp),e(He,Pr),e(Pr,Kn),e(Kn,Hp),e(I,Vp),e(I,Te),g(Yn,Te,null),e(Te,Jp),e(Te,Gt),e(Gt,Xp),e(Gt,wr),e(wr,Zp),e(Gt,Kp),e(Gt,xr),e(xr,Yp),e(Gt,Qp),e(Te,eh),g(fo,Te,null),e(Te,th),e(Te,zr),e(zr,oh),e(Te,nh),g(Qn,Te,null),e(I,sh),e(I,Qe),g(es,Qe,null),e(Qe,ah),e(Qe,$r),e($r,rh),e(Qe,ih),g(ts,Qe,null),e(I,dh),e(I,et),g(os,et,null),e(et,lh),e(et,Fr),e(Fr,ch),e(et,uh),g(ns,et,null),u(o,Ti,p),u(o,Dt,p),e(Dt,go),e(go,Er),g(ss,Er,null),e(Dt,ph),e(Dt,Mr),e(Mr,hh),u(o,bi,p),u(o,N,p),g(as,N,null),e(N,mh),e(N,rs),e(rs,fh),e(rs,Gs),e(Gs,gh),e(rs,_h),e(N,vh),e(N,is),e(is,kh),e(is,ds),e(ds,yh),e(is,Th),e(N,bh),e(N,jr),e(jr,Ph),e(N,wh),e(N,Ve),e(Ve,qr),e(qr,ls),e(ls,xh),e(Ve,zh),e(Ve,Cr),e(Cr,cs),e(cs,$h),e(Ve,Fh),e(Ve,Sr),e(Sr,us),e(us,Eh),e(Ve,Mh),e(Ve,Ar),e(Ar,ps),e(ps,jh),e(N,qh),e(N,R),g(hs,R,null),e(R,Ch),e(R,Ut),e(Ut,Sh),e(Ut,Ir),e(Ir,Ah),e(Ut,Ih),e(Ut,Nr),e(Nr,Nh),e(Ut,Oh),e(R,Lh),g(_o,R,null),e(R,Gh),e(R,Or),e(Or,Dh),e(R,Uh),g(ms,R,null),e(R,Wh),e(R,Lr),e(Lr,Bh),e(R,Rh),g(fs,R,null),e(N,Hh),e(N,tt),g(gs,tt,null),e(tt,Vh),e(tt,Gr),e(Gr,Jh),e(tt,Xh),g(_s,tt,null),e(N,Zh),e(N,ot),g(vs,ot,null),e(ot,Kh),e(ot,Dr),e(Dr,Yh),e(ot,Qh),g(ks,ot,null),Pi=!0},p(o,[p]){const ys={};p&2&&(ys.$$scope={dirty:p,ctx:o}),no.$set(ys);const Ur={};p&2&&(Ur.$$scope={dirty:p,ctx:o}),ao.$set(Ur);const Wr={};p&2&&(Wr.$$scope={dirty:p,ctx:o}),lo.$set(Wr);const Br={};p&2&&(Br.$$scope={dirty:p,ctx:o}),co.$set(Br);const vo={};p&2&&(vo.$$scope={dirty:p,ctx:o}),po.$set(vo);const Rr={};p&2&&(Rr.$$scope={dirty:p,ctx:o}),ho.$set(Rr);const Hr={};p&2&&(Hr.$$scope={dirty:p,ctx:o}),fo.$set(Hr);const Ts={};p&2&&(Ts.$$scope={dirty:p,ctx:o}),_o.$set(Ts)},i(o){Pi||(_(w.$$.fragment,o),_(H.$$.fragment,o),_(Ee.$$.fragment,o),_(jo.$$.fragment,o),_(So.$$.fragment,o),_(Oo.$$.fragment,o),_(Lo.$$.fragment,o),_(Go.$$.fragment,o),_(Do.$$.fragment,o),_(Wo.$$.fragment,o),_(Bo.$$.fragment,o),_(Ro.$$.fragment,o),_(Xo.$$.fragment,o),_(Qo.$$.fragment,o),_(en.$$.fragment,o),_(tn.$$.fragment,o),_(on.$$.fragment,o),_(nn.$$.fragment,o),_(rn.$$.fragment,o),_(cn.$$.fragment,o),_(un.$$.fragment,o),_(pn.$$.fragment,o),_(gn.$$.fragment,o),_(no.$$.fragment,o),_(_n.$$.fragment,o),_(vn.$$.fragment,o),_(kn.$$.fragment,o),_(Pn.$$.fragment,o),_(ao.$$.fragment,o),_(wn.$$.fragment,o),_(xn.$$.fragment,o),_($n.$$.fragment,o),_(Fn.$$.fragment,o),_(En.$$.fragment,o),_(Mn.$$.fragment,o),_(lo.$$.fragment,o),_(Sn.$$.fragment,o),_(co.$$.fragment,o),_(An.$$.fragment,o),_(In.$$.fragment,o),_(Nn.$$.fragment,o),_(po.$$.fragment,o),_(Dn.$$.fragment,o),_(ho.$$.fragment,o),_(Un.$$.fragment,o),_(Wn.$$.fragment,o),_(Bn.$$.fragment,o),_(Yn.$$.fragment,o),_(fo.$$.fragment,o),_(Qn.$$.fragment,o),_(es.$$.fragment,o),_(ts.$$.fragment,o),_(os.$$.fragment,o),_(ns.$$.fragment,o),_(ss.$$.fragment,o),_(as.$$.fragment,o),_(hs.$$.fragment,o),_(_o.$$.fragment,o),_(ms.$$.fragment,o),_(fs.$$.fragment,o),_(gs.$$.fragment,o),_(_s.$$.fragment,o),_(vs.$$.fragment,o),_(ks.$$.fragment,o),Pi=!0)},o(o){v(w.$$.fragment,o),v(H.$$.fragment,o),v(Ee.$$.fragment,o),v(jo.$$.fragment,o),v(So.$$.fragment,o),v(Oo.$$.fragment,o),v(Lo.$$.fragment,o),v(Go.$$.fragment,o),v(Do.$$.fragment,o),v(Wo.$$.fragment,o),v(Bo.$$.fragment,o),v(Ro.$$.fragment,o),v(Xo.$$.fragment,o),v(Qo.$$.fragment,o),v(en.$$.fragment,o),v(tn.$$.fragment,o),v(on.$$.fragment,o),v(nn.$$.fragment,o),v(rn.$$.fragment,o),v(cn.$$.fragment,o),v(un.$$.fragment,o),v(pn.$$.fragment,o),v(gn.$$.fragment,o),v(no.$$.fragment,o),v(_n.$$.fragment,o),v(vn.$$.fragment,o),v(kn.$$.fragment,o),v(Pn.$$.fragment,o),v(ao.$$.fragment,o),v(wn.$$.fragment,o),v(xn.$$.fragment,o),v($n.$$.fragment,o),v(Fn.$$.fragment,o),v(En.$$.fragment,o),v(Mn.$$.fragment,o),v(lo.$$.fragment,o),v(Sn.$$.fragment,o),v(co.$$.fragment,o),v(An.$$.fragment,o),v(In.$$.fragment,o),v(Nn.$$.fragment,o),v(po.$$.fragment,o),v(Dn.$$.fragment,o),v(ho.$$.fragment,o),v(Un.$$.fragment,o),v(Wn.$$.fragment,o),v(Bn.$$.fragment,o),v(Yn.$$.fragment,o),v(fo.$$.fragment,o),v(Qn.$$.fragment,o),v(es.$$.fragment,o),v(ts.$$.fragment,o),v(os.$$.fragment,o),v(ns.$$.fragment,o),v(ss.$$.fragment,o),v(as.$$.fragment,o),v(hs.$$.fragment,o),v(_o.$$.fragment,o),v(ms.$$.fragment,o),v(fs.$$.fragment,o),v(gs.$$.fragment,o),v(_s.$$.fragment,o),v(vs.$$.fragment,o),v(ks.$$.fragment,o),Pi=!1},d(o){t(h),o&&t(z),o&&t(T),k(w),o&&t(he),o&&t(E),o&&t(qe),o&&t(L),k(H),o&&t(K),o&&t(Y),o&&t(S),o&&t(me),o&&t(Ce),o&&t(Q),o&&t(ee),o&&t(W),o&&t(Je),o&&t(de),k(Ee),o&&t(Xe),o&&t(B),o&&t(Xr),o&&t(fe),o&&t(Zr),o&&t(kt),k(jo),o&&t(Kr),o&&t(Ze),o&&t(Yr),o&&t(yt),k(So),o&&t(Qr),o&&t(ge),o&&t(ei),o&&t(Pt),k(Oo),o&&t(ti),k(Lo,o),o&&t(oi),o&&t(wt),k(Go),o&&t(ni),o&&t(le),k(Do),k(Wo),o&&t(si),o&&t($t),k(Bo),o&&t(ai),o&&t(Zt),o&&t(ri),o&&t(U),k(Ro),k(Xo),k(Qo),k(en),k(tn),o&&t(ii),o&&t(Ft),k(on),o&&t(di),o&&t(ce),k(nn),k(rn),k(cn),o&&t(li),o&&t(Mt),k(un),o&&t(ci),o&&t(Me),k(pn),k(gn),k(no),k(_n),o&&t(ui),o&&t(qt),k(vn),o&&t(pi),o&&t(je),k(kn),k(Pn),k(ao),k(wn),o&&t(hi),o&&t(St),k(xn),o&&t(mi),o&&t(zn),k($n),k(Fn),o&&t(fi),o&&t(At),k(En),o&&t(gi),o&&t(ue),k(Mn),k(lo),k(Sn),k(co),k(An),o&&t(_i),o&&t(Nt),k(In),o&&t(vi),o&&t(pe),k(Nn),k(po),k(Dn),k(ho),k(Un),o&&t(ki),o&&t(Lt),k(Wn),o&&t(yi),o&&t(I),k(Bn),k(Yn),k(fo),k(Qn),k(es),k(ts),k(os),k(ns),o&&t(Ti),o&&t(Dt),k(ss),o&&t(bi),o&&t(N),k(as),k(hs),k(_o),k(ms),k(fs),k(gs),k(_s),k(vs),k(ks)}}}const c_={local:"pegasus",sections:[{local:"overview",title:"Overview"},{local:"checkpoints",sections:[{local:"examples",title:"Examples"}],title:"Checkpoints"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage-example",title:"Usage Example"},{local:"transformers.PegasusConfig",title:"PegasusConfig"},{local:"transformers.PegasusTokenizer",title:"PegasusTokenizer"},{local:"transformers.PegasusTokenizerFast",title:"PegasusTokenizerFast"},{local:"transformers.PegasusModel",title:"PegasusModel"},{local:"transformers.PegasusForConditionalGeneration",title:"PegasusForConditionalGeneration"},{local:"transformers.PegasusForCausalLM",title:"PegasusForCausalLM"},{local:"transformers.TFPegasusModel",title:"TFPegasusModel"},{local:"transformers.TFPegasusForConditionalGeneration",title:"TFPegasusForConditionalGeneration"},{local:"transformers.FlaxPegasusModel",title:"FlaxPegasusModel"},{local:"transformers.FlaxPegasusForConditionalGeneration",title:"FlaxPegasusForConditionalGeneration"}],title:"Pegasus"};function u_(O,h,z){let{fw:T}=h;return O.$$set=b=>{"fw"in b&&z(0,T=b.fw)},[T]}class v_ extends Kg{constructor(h){super();Yg(this,h,u_,l_,Qg,{fw:0})}}export{v_ as default,c_ as metadata};
