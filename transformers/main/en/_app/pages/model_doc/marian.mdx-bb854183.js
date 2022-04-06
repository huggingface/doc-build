import{S as Km,i as Zm,s as Xm,e as o,k as d,w as _,t as r,M as Qm,c as s,d as t,m as l,a,x as v,h as i,b as c,F as e,g as h,y as k,q as T,o as M,B as y,v as ef}from"../../chunks/vendor-6b77c823.js";import{T as pn}from"../../chunks/Tip-39098574.js";import{D as B}from"../../chunks/Docstring-abef54e3.js";import{C as $e}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as he}from"../../chunks/IconCopyLink-7a11ce68.js";function tf(I){let u,z,f,x,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),x=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);x=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){h(b,u,g),e(u,z),e(u,f),e(f,x),e(u,w)},d(b){b&&t(u)}}}function nf(I){let u,z,f,x,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),x=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);x=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){h(b,u,g),e(u,z),e(u,f),e(f,x),e(u,w)},d(b){b&&t(u)}}}function of(I){let u,z,f,x,w,b,g,$,Ae,ue,q,ve,X,Oe,Q,ee,Se,je,G,A,qe,C,E,P,te,ne,ke,He,J,F,Te,N,De,oe,Me,se,ae,re,Ue,O,We,S,H;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),f=d(),x=o("ul"),w=o("li"),b=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),$=o("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=d(),q=o("p"),ve=r("This second option is useful when using "),X=o("code"),Oe=r("tf.keras.Model.fit"),Q=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=o("code"),Se=r("model(inputs)"),je=r("."),G=d(),A=o("p"),qe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),C=d(),E=o("ul"),P=o("li"),te=r("a single Tensor with "),ne=o("code"),ke=r("input_ids"),He=r(" only and nothing else: "),J=o("code"),F=r("model(input_ids)"),Te=d(),N=o("li"),De=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=o("code"),Me=r("model([input_ids, attention_mask])"),se=r(" or "),ae=o("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),Ue=d(),O=o("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=o("code"),H=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=l(m),x=s(m,"UL",{});var ye=a(x);w=s(ye,"LI",{});var nt=a(w);b=i(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),g=l(ye),$=s(ye,"LI",{});var be=a($);Ae=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),ye.forEach(t),ue=l(m),q=s(m,"P",{});var D=a(q);ve=i(D,"This second option is useful when using "),X=s(D,"CODE",{});var ot=a(X);Oe=i(ot,"tf.keras.Model.fit"),ot.forEach(t),Q=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=s(D,"CODE",{});var st=a(ee);Se=i(st,"model(inputs)"),st.forEach(t),je=i(D,"."),D.forEach(t),G=l(m),A=s(m,"P",{});var Re=a(A);qe=i(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(t),C=l(m),E=s(m,"UL",{});var L=a(E);P=s(L,"LI",{});var ie=a(P);te=i(ie,"a single Tensor with "),ne=s(ie,"CODE",{});var at=a(ne);ke=i(at,"input_ids"),at.forEach(t),He=i(ie," only and nothing else: "),J=s(ie,"CODE",{});var Ve=a(J);F=i(Ve,"model(input_ids)"),Ve.forEach(t),ie.forEach(t),Te=l(L),N=s(L,"LI",{});var U=a(N);De=i(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=s(U,"CODE",{});var rt=a(oe);Me=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),se=i(U," or "),ae=s(U,"CODE",{});var it=a(ae);re=i(it,"model([input_ids, attention_mask, token_type_ids])"),it.forEach(t),U.forEach(t),Ue=l(L),O=s(L,"LI",{});var de=a(O);We=i(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s(de,"CODE",{});var xe=a(S);H=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),de.forEach(t),L.forEach(t)},m(m,j){h(m,u,j),e(u,z),h(m,f,j),h(m,x,j),e(x,w),e(w,b),e(x,g),e(x,$),e($,Ae),h(m,ue,j),h(m,q,j),e(q,ve),e(q,X),e(X,Oe),e(q,Q),e(q,ee),e(ee,Se),e(q,je),h(m,G,j),h(m,A,j),e(A,qe),h(m,C,j),h(m,E,j),e(E,P),e(P,te),e(P,ne),e(ne,ke),e(P,He),e(P,J),e(J,F),e(E,Te),e(E,N),e(N,De),e(N,oe),e(oe,Me),e(N,se),e(N,ae),e(ae,re),e(E,Ue),e(E,O),e(O,We),e(O,S),e(S,H)},d(m){m&&t(u),m&&t(f),m&&t(x),m&&t(ue),m&&t(q),m&&t(G),m&&t(A),m&&t(C),m&&t(E)}}}function sf(I){let u,z,f,x,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),x=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);x=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){h(b,u,g),e(u,z),e(u,f),e(f,x),e(u,w)},d(b){b&&t(u)}}}function af(I){let u,z,f,x,w,b,g,$,Ae,ue,q,ve,X,Oe,Q,ee,Se,je,G,A,qe,C,E,P,te,ne,ke,He,J,F,Te,N,De,oe,Me,se,ae,re,Ue,O,We,S,H;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),f=d(),x=o("ul"),w=o("li"),b=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),$=o("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=d(),q=o("p"),ve=r("This second option is useful when using "),X=o("code"),Oe=r("tf.keras.Model.fit"),Q=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=o("code"),Se=r("model(inputs)"),je=r("."),G=d(),A=o("p"),qe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),C=d(),E=o("ul"),P=o("li"),te=r("a single Tensor with "),ne=o("code"),ke=r("input_ids"),He=r(" only and nothing else: "),J=o("code"),F=r("model(input_ids)"),Te=d(),N=o("li"),De=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=o("code"),Me=r("model([input_ids, attention_mask])"),se=r(" or "),ae=o("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),Ue=d(),O=o("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=o("code"),H=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=l(m),x=s(m,"UL",{});var ye=a(x);w=s(ye,"LI",{});var nt=a(w);b=i(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),g=l(ye),$=s(ye,"LI",{});var be=a($);Ae=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),ye.forEach(t),ue=l(m),q=s(m,"P",{});var D=a(q);ve=i(D,"This second option is useful when using "),X=s(D,"CODE",{});var ot=a(X);Oe=i(ot,"tf.keras.Model.fit"),ot.forEach(t),Q=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=s(D,"CODE",{});var st=a(ee);Se=i(st,"model(inputs)"),st.forEach(t),je=i(D,"."),D.forEach(t),G=l(m),A=s(m,"P",{});var Re=a(A);qe=i(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(t),C=l(m),E=s(m,"UL",{});var L=a(E);P=s(L,"LI",{});var ie=a(P);te=i(ie,"a single Tensor with "),ne=s(ie,"CODE",{});var at=a(ne);ke=i(at,"input_ids"),at.forEach(t),He=i(ie," only and nothing else: "),J=s(ie,"CODE",{});var Ve=a(J);F=i(Ve,"model(input_ids)"),Ve.forEach(t),ie.forEach(t),Te=l(L),N=s(L,"LI",{});var U=a(N);De=i(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=s(U,"CODE",{});var rt=a(oe);Me=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),se=i(U," or "),ae=s(U,"CODE",{});var it=a(ae);re=i(it,"model([input_ids, attention_mask, token_type_ids])"),it.forEach(t),U.forEach(t),Ue=l(L),O=s(L,"LI",{});var de=a(O);We=i(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s(de,"CODE",{});var xe=a(S);H=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),de.forEach(t),L.forEach(t)},m(m,j){h(m,u,j),e(u,z),h(m,f,j),h(m,x,j),e(x,w),e(w,b),e(x,g),e(x,$),e($,Ae),h(m,ue,j),h(m,q,j),e(q,ve),e(q,X),e(X,Oe),e(q,Q),e(q,ee),e(ee,Se),e(q,je),h(m,G,j),h(m,A,j),e(A,qe),h(m,C,j),h(m,E,j),e(E,P),e(P,te),e(P,ne),e(ne,ke),e(P,He),e(P,J),e(J,F),e(E,Te),e(E,N),e(N,De),e(N,oe),e(oe,Me),e(N,se),e(N,ae),e(ae,re),e(E,Ue),e(E,O),e(O,We),e(O,S),e(S,H)},d(m){m&&t(u),m&&t(f),m&&t(x),m&&t(ue),m&&t(q),m&&t(G),m&&t(A),m&&t(C),m&&t(E)}}}function rf(I){let u,z,f,x,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),x=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);x=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){h(b,u,g),e(u,z),e(u,f),e(f,x),e(u,w)},d(b){b&&t(u)}}}function df(I){let u,z,f,x,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),x=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);x=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){h(b,u,g),e(u,z),e(u,f),e(f,x),e(u,w)},d(b){b&&t(u)}}}function lf(I){let u,z,f,x,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),x=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);x=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){h(b,u,g),e(u,z),e(u,f),e(f,x),e(u,w)},d(b){b&&t(u)}}}function cf(I){let u,z,f,x,w,b,g,$,Ae,ue,q,ve,X,Oe,Q,ee,Se,je,G,A,qe,C,E,P,te,ne,ke,He,J,F,Te,N,De,oe,Me,se,ae,re,Ue,O,We,S,H,m,j,ye,nt,be,D,ot,st,Re,L,ie,at,Ve,U,rt,it,de,xe,bi,Zo,xi,wi,zi,dt,hn,$i,qs,ji,qi,Ei,un,Fi,Es,Pi,Ni,Ci,lt,Li,Fs,Ii,Ai,Ps,Oi,Si,Hi,Ns,mn,Di,Cs,Ui,Wi,Ri,Ls,fn,Vi,gn,Bi,Gi,Za,ct,Nt,Is,_n,Ji,As,Yi,Xa,Ee,Xo,Ki,Os,Zi,Xi,vn,Qi,kn,ed,td,nd,pt,od,Ss,sd,ad,Hs,rd,id,dd,Ds,ld,Qa,ht,Ct,Us,Tn,cd,Ws,pd,er,Lt,Rs,hd,ud,Vs,Mn,md,tr,ut,It,Bs,yn,fd,Gs,gd,nr,Fe,bn,_d,Js,vd,kd,Td,xn,Md,Ys,yd,bd,xd,wn,wd,zn,zd,$d,jd,$n,qd,Ks,Ed,Fd,or,At,Pd,jn,Nd,Cd,sr,qn,ar,Qo,Ld,rr,En,ir,mt,Ot,Zs,Fn,Id,Xs,Ad,dr,es,Od,lr,Pn,cr,ts,Sd,pr,Nn,hr,ft,St,Qs,Cn,Hd,ea,Dd,ur,le,Ln,Ud,gt,Wd,ns,Rd,Vd,In,Bd,Gd,Jd,_t,Yd,os,Kd,Zd,ss,Xd,Qd,el,ta,tl,nl,An,mr,vt,Ht,na,On,ol,oa,sl,fr,W,Sn,al,Hn,rl,Dn,il,dl,ll,Un,cl,as,pl,hl,ul,sa,ml,fl,Wn,gl,Dt,Rn,_l,aa,vl,gr,kt,Ut,ra,Vn,kl,ia,Tl,_r,we,Bn,Ml,Gn,yl,rs,bl,xl,wl,Jn,zl,Yn,$l,jl,ql,me,Kn,El,Tt,Fl,is,Pl,Nl,da,Cl,Ll,Il,Wt,Al,la,Ol,Sl,Zn,vr,Mt,Rt,ca,Xn,Hl,pa,Dl,kr,ze,Qn,Ul,eo,Wl,ds,Rl,Vl,Bl,to,Gl,no,Jl,Yl,Kl,Y,oo,Zl,yt,Xl,ls,Ql,ec,ha,tc,nc,oc,Vt,sc,so,ac,ao,rc,ic,dc,ua,lc,cc,ro,Tr,bt,Bt,ma,io,pc,fa,hc,Mr,xt,lo,uc,Je,co,mc,ga,fc,gc,po,yr,wt,Gt,_a,ho,_c,va,vc,br,ce,uo,kc,mo,Tc,cs,Mc,yc,bc,fo,xc,go,wc,zc,$c,Jt,jc,fe,_o,qc,zt,Ec,ps,Fc,Pc,ka,Nc,Cc,Lc,Yt,Ic,Ta,Ac,Oc,vo,xr,$t,Kt,Ma,ko,Sc,ya,Hc,wr,pe,To,Dc,Mo,Uc,hs,Wc,Rc,Vc,yo,Bc,bo,Gc,Jc,Yc,Zt,Kc,K,xo,Zc,jt,Xc,us,Qc,ep,ba,tp,np,op,Xt,sp,wo,ap,zo,rp,ip,dp,xa,lp,cp,$o,zr,qt,Qt,wa,jo,pp,za,hp,$r,R,qo,up,Eo,mp,ms,fp,gp,_p,Fo,vp,Po,kp,Tp,Mp,$a,yp,bp,Be,ja,No,xp,wp,qa,Co,zp,$p,Ea,Lo,jp,qp,Fa,Io,Ep,Fp,ge,Ao,Pp,Et,Np,Pa,Cp,Lp,Na,Ip,Ap,Op,en,Sp,Ca,Hp,Dp,Oo,jr,Ft,tn,La,So,Up,Ia,Wp,qr,V,Ho,Rp,Do,Vp,fs,Bp,Gp,Jp,Uo,Yp,Wo,Kp,Zp,Xp,Aa,Qp,eh,Ge,Oa,Ro,th,nh,Sa,Vo,oh,sh,Ha,Bo,ah,rh,Da,Go,ih,dh,_e,Jo,lh,Pt,ch,Ua,ph,hh,Wa,uh,mh,fh,nn,gh,Ra,_h,vh,Yo,Er;return b=new he({}),te=new he({}),_n=new he({}),Tn=new he({}),yn=new he({}),qn=new $e({props:{code:`from transformers import MarianMTModel, MarianTokenizer

src_text = [
    ">>fra<< this is a sentence in english that we want to translate to french",
    ">>por<< This should go to portuguese",
    ">>esp<< And this to Spanish",
]

model_name = "Helsinki-NLP/opus-mt-en-roa"
tokenizer = MarianTokenizer.from_pretrained(model_name)
print(tokenizer.supported_language_codes)

model = MarianMTModel.from_pretrained(model_name)
translated = model.generate(**tokenizer(src_text, return_tensors="pt", padding=True))
[tokenizer.decode(t, skip_special_tokens=True) for t in translated]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianMTModel, MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;fra&lt;&lt; this is a sentence in english that we want to translate to french&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;por&lt;&lt; This should go to portuguese&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;esp&lt;&lt; And this to Spanish&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-roa&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.supported_language_codes)
[<span class="hljs-string">&#x27;&gt;&gt;zlm_Latn&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;mfe&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;hat&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;pap&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ast&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;cat&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ind&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;glg&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;wln&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;spa&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;fra&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ron&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;por&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ita&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;oci&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;arg&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;min&lt;&lt;&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated = model.generate(**tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>[tokenizer.decode(t, skip_special_tokens=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> translated]
[<span class="hljs-string">&quot;c&#x27;est une phrase en anglais que nous voulons traduire en fran\xE7ais&quot;</span>,
 <span class="hljs-string">&#x27;Isto deve ir para o portugu\xEAs.&#x27;</span>,
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),En=new $e({props:{code:`from huggingface_hub import list_models

model_list = list_models()
org = "Helsinki-NLP"
model_ids = [x.modelId for x in model_list if x.modelId.startswith(org)]
suffix = [x.split("/")[1] for x in model_ids]
old_style_multi_models = [f"{org}/{s}" for s in suffix if s != s.lower()]`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

model_list = list_models()
org = <span class="hljs-string">&quot;Helsinki-NLP&quot;</span>
model_ids = [x.modelId <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_list <span class="hljs-keyword">if</span> x.modelId.startswith(org)]
suffix = [x.split(<span class="hljs-string">&quot;/&quot;</span>)[<span class="hljs-number">1</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_ids]
old_style_multi_models = [<span class="hljs-string">f&quot;<span class="hljs-subst">{org}</span>/<span class="hljs-subst">{s}</span>&quot;</span> <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> suffix <span class="hljs-keyword">if</span> s != s.lower()]`}}),Fn=new he({}),Pn=new $e({props:{code:`['Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU',
 'Helsinki-NLP/opus-mt-ROMANCE-en',
 'Helsinki-NLP/opus-mt-SCANDINAVIA-SCANDINAVIA',
 'Helsinki-NLP/opus-mt-de-ZH',
 'Helsinki-NLP/opus-mt-en-CELTIC',
 'Helsinki-NLP/opus-mt-en-ROMANCE',
 'Helsinki-NLP/opus-mt-es-NORWAY',
 'Helsinki-NLP/opus-mt-fi-NORWAY',
 'Helsinki-NLP/opus-mt-fi-ZH',
 'Helsinki-NLP/opus-mt-fi_nb_no_nn_ru_sv_en-SAMI',
 'Helsinki-NLP/opus-mt-sv-NORWAY',
 'Helsinki-NLP/opus-mt-sv-ZH']
GROUP_MEMBERS = {
 'ZH': ['cmn', 'cn', 'yue', 'ze_zh', 'zh_cn', 'zh_CN', 'zh_HK', 'zh_tw', 'zh_TW', 'zh_yue', 'zhs', 'zht', 'zh'],
 'ROMANCE': ['fr', 'fr_BE', 'fr_CA', 'fr_FR', 'wa', 'frp', 'oc', 'ca', 'rm', 'lld', 'fur', 'lij', 'lmo', 'es', 'es_AR', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_ES', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PE', 'es_PR', 'es_SV', 'es_UY', 'es_VE', 'pt', 'pt_br', 'pt_BR', 'pt_PT', 'gl', 'lad', 'an', 'mwl', 'it', 'it_IT', 'co', 'nap', 'scn', 'vec', 'sc', 'ro', 'la'],
 'NORTH_EU': ['de', 'nl', 'fy', 'af', 'da', 'fo', 'is', 'no', 'nb', 'nn', 'sv'],
 'SCANDINAVIA': ['da', 'fo', 'is', 'no', 'nb', 'nn', 'sv'],
 'SAMI': ['se', 'sma', 'smj', 'smn', 'sms'],
 'NORWAY': ['nb_NO', 'nb', 'nn_NO', 'nn', 'nog', 'no_nb', 'no'],
 'CELTIC': ['ga', 'cy', 'br', 'gd', 'kw', 'gv']
}`,highlighted:`[<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-ROMANCE-en&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-SCANDINAVIA-SCANDINAVIA&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-de-ZH&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-CELTIC&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-ROMANCE&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-es-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi-ZH&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi_nb_no_nn_ru_sv_en-SAMI&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-sv-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-sv-ZH&#x27;</span>]
GROUP_MEMBERS = {
 <span class="hljs-string">&#x27;ZH&#x27;</span>: [<span class="hljs-string">&#x27;cmn&#x27;</span>, <span class="hljs-string">&#x27;cn&#x27;</span>, <span class="hljs-string">&#x27;yue&#x27;</span>, <span class="hljs-string">&#x27;ze_zh&#x27;</span>, <span class="hljs-string">&#x27;zh_cn&#x27;</span>, <span class="hljs-string">&#x27;zh_CN&#x27;</span>, <span class="hljs-string">&#x27;zh_HK&#x27;</span>, <span class="hljs-string">&#x27;zh_tw&#x27;</span>, <span class="hljs-string">&#x27;zh_TW&#x27;</span>, <span class="hljs-string">&#x27;zh_yue&#x27;</span>, <span class="hljs-string">&#x27;zhs&#x27;</span>, <span class="hljs-string">&#x27;zht&#x27;</span>, <span class="hljs-string">&#x27;zh&#x27;</span>],
 <span class="hljs-string">&#x27;ROMANCE&#x27;</span>: [<span class="hljs-string">&#x27;fr&#x27;</span>, <span class="hljs-string">&#x27;fr_BE&#x27;</span>, <span class="hljs-string">&#x27;fr_CA&#x27;</span>, <span class="hljs-string">&#x27;fr_FR&#x27;</span>, <span class="hljs-string">&#x27;wa&#x27;</span>, <span class="hljs-string">&#x27;frp&#x27;</span>, <span class="hljs-string">&#x27;oc&#x27;</span>, <span class="hljs-string">&#x27;ca&#x27;</span>, <span class="hljs-string">&#x27;rm&#x27;</span>, <span class="hljs-string">&#x27;lld&#x27;</span>, <span class="hljs-string">&#x27;fur&#x27;</span>, <span class="hljs-string">&#x27;lij&#x27;</span>, <span class="hljs-string">&#x27;lmo&#x27;</span>, <span class="hljs-string">&#x27;es&#x27;</span>, <span class="hljs-string">&#x27;es_AR&#x27;</span>, <span class="hljs-string">&#x27;es_CL&#x27;</span>, <span class="hljs-string">&#x27;es_CO&#x27;</span>, <span class="hljs-string">&#x27;es_CR&#x27;</span>, <span class="hljs-string">&#x27;es_DO&#x27;</span>, <span class="hljs-string">&#x27;es_EC&#x27;</span>, <span class="hljs-string">&#x27;es_ES&#x27;</span>, <span class="hljs-string">&#x27;es_GT&#x27;</span>, <span class="hljs-string">&#x27;es_HN&#x27;</span>, <span class="hljs-string">&#x27;es_MX&#x27;</span>, <span class="hljs-string">&#x27;es_NI&#x27;</span>, <span class="hljs-string">&#x27;es_PA&#x27;</span>, <span class="hljs-string">&#x27;es_PE&#x27;</span>, <span class="hljs-string">&#x27;es_PR&#x27;</span>, <span class="hljs-string">&#x27;es_SV&#x27;</span>, <span class="hljs-string">&#x27;es_UY&#x27;</span>, <span class="hljs-string">&#x27;es_VE&#x27;</span>, <span class="hljs-string">&#x27;pt&#x27;</span>, <span class="hljs-string">&#x27;pt_br&#x27;</span>, <span class="hljs-string">&#x27;pt_BR&#x27;</span>, <span class="hljs-string">&#x27;pt_PT&#x27;</span>, <span class="hljs-string">&#x27;gl&#x27;</span>, <span class="hljs-string">&#x27;lad&#x27;</span>, <span class="hljs-string">&#x27;an&#x27;</span>, <span class="hljs-string">&#x27;mwl&#x27;</span>, <span class="hljs-string">&#x27;it&#x27;</span>, <span class="hljs-string">&#x27;it_IT&#x27;</span>, <span class="hljs-string">&#x27;co&#x27;</span>, <span class="hljs-string">&#x27;nap&#x27;</span>, <span class="hljs-string">&#x27;scn&#x27;</span>, <span class="hljs-string">&#x27;vec&#x27;</span>, <span class="hljs-string">&#x27;sc&#x27;</span>, <span class="hljs-string">&#x27;ro&#x27;</span>, <span class="hljs-string">&#x27;la&#x27;</span>],
 <span class="hljs-string">&#x27;NORTH_EU&#x27;</span>: [<span class="hljs-string">&#x27;de&#x27;</span>, <span class="hljs-string">&#x27;nl&#x27;</span>, <span class="hljs-string">&#x27;fy&#x27;</span>, <span class="hljs-string">&#x27;af&#x27;</span>, <span class="hljs-string">&#x27;da&#x27;</span>, <span class="hljs-string">&#x27;fo&#x27;</span>, <span class="hljs-string">&#x27;is&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;sv&#x27;</span>],
 <span class="hljs-string">&#x27;SCANDINAVIA&#x27;</span>: [<span class="hljs-string">&#x27;da&#x27;</span>, <span class="hljs-string">&#x27;fo&#x27;</span>, <span class="hljs-string">&#x27;is&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;sv&#x27;</span>],
 <span class="hljs-string">&#x27;SAMI&#x27;</span>: [<span class="hljs-string">&#x27;se&#x27;</span>, <span class="hljs-string">&#x27;sma&#x27;</span>, <span class="hljs-string">&#x27;smj&#x27;</span>, <span class="hljs-string">&#x27;smn&#x27;</span>, <span class="hljs-string">&#x27;sms&#x27;</span>],
 <span class="hljs-string">&#x27;NORWAY&#x27;</span>: [<span class="hljs-string">&#x27;nb_NO&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn_NO&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;nog&#x27;</span>, <span class="hljs-string">&#x27;no_nb&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>],
 <span class="hljs-string">&#x27;CELTIC&#x27;</span>: [<span class="hljs-string">&#x27;ga&#x27;</span>, <span class="hljs-string">&#x27;cy&#x27;</span>, <span class="hljs-string">&#x27;br&#x27;</span>, <span class="hljs-string">&#x27;gd&#x27;</span>, <span class="hljs-string">&#x27;kw&#x27;</span>, <span class="hljs-string">&#x27;gv&#x27;</span>]
}`}}),Nn=new $e({props:{code:`from transformers import MarianMTModel, MarianTokenizer

src_text = [
    ">>fr<< this is a sentence in english that we want to translate to french",
    ">>pt<< This should go to portuguese",
    ">>es<< And this to Spanish",
]

model_name = "Helsinki-NLP/opus-mt-en-ROMANCE"
tokenizer = MarianTokenizer.from_pretrained(model_name)

model = MarianMTModel.from_pretrained(model_name)
translated = model.generate(**tokenizer(src_text, return_tensors="pt", padding=True))
tgt_text = [tokenizer.decode(t, skip_special_tokens=True) for t in translated]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianMTModel, MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;fr&lt;&lt; this is a sentence in english that we want to translate to french&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;pt&lt;&lt; This should go to portuguese&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;es&lt;&lt; And this to Spanish&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-ROMANCE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated = model.generate(**tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = [tokenizer.decode(t, skip_special_tokens=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> translated]
[<span class="hljs-string">&quot;c&#x27;est une phrase en anglais que nous voulons traduire en fran\xE7ais&quot;</span>, 
 <span class="hljs-string">&#x27;Isto deve ir para o portugu\xEAs.&#x27;</span>,
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),Cn=new he({}),Ln=new B({props:{name:"class transformers.MarianConfig",anchor:"transformers.MarianConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"decoder_vocab_size",val:" = None"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 58100"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 58100"},{name:"eos_token_id",val:" = 0"},{name:"forced_eos_token_id",val:" = 0"},{name:"share_encoder_decoder_embeddings",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/configuration_marian.py#L34",parametersDescription:[{anchor:"transformers.MarianConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Marian model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianModel">MarianModel</a> or <a href="/docs/transformers/main/en/model_doc/marian#transformers.TFMarianModel">TFMarianModel</a>.`,name:"vocab_size"},{anchor:"transformers.MarianConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MarianConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MarianConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MarianConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MarianConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MarianConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MarianConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MarianConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MarianConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MarianConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MarianConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MarianConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MarianConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MarianConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.MarianConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MarianConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MarianConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),An=new $e({props:{code:`from transformers import MarianModel, MarianConfig

# Initializing a Marian Helsinki-NLP/opus-mt-en-de style configuration
configuration = MarianConfig()

# Initializing a model from the Helsinki-NLP/opus-mt-en-de style configuration
model = MarianModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianModel, MarianConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Marian Helsinki-NLP/opus-mt-en-de style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MarianConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the Helsinki-NLP/opus-mt-en-de style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),On=new he({}),Sn=new B({props:{name:"class transformers.MarianTokenizer",anchor:"transformers.MarianTokenizer",parameters:[{name:"source_spm",val:""},{name:"target_spm",val:""},{name:"vocab",val:""},{name:"target_vocab_file",val:" = None"},{name:"source_lang",val:" = None"},{name:"target_lang",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"model_max_length",val:" = 512"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"separate_vocabs",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/tokenization_marian.py#L60",parametersDescription:[{anchor:"transformers.MarianTokenizer.source_spm",description:`<strong>source_spm</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary for the source language.`,name:"source_spm"},{anchor:"transformers.MarianTokenizer.target_spm",description:`<strong>target_spm</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary for the target language.`,name:"target_spm"},{anchor:"transformers.MarianTokenizer.source_lang",description:`<strong>source_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"source_lang"},{anchor:"transformers.MarianTokenizer.target_lang",description:`<strong>target_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"target_lang"},{anchor:"transformers.MarianTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MarianTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MarianTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MarianTokenizer.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sentence length the model accepts.`,name:"model_max_length"},{anchor:"transformers.MarianTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;eop&gt;&quot;, &quot;&lt;eod&gt;&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.MarianTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Wn=new $e({props:{code:`from transformers import MarianTokenizer

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
src_texts = ["I am a small frog.", "Tom asked his teacher for advice."]
tgt_texts = ["Ich bin ein kleiner Frosch.", "Tom bat seinen Lehrer um Rat."]  # optional
inputs = tokenizer(src_texts, return_tensors="pt", padding=True)
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_texts, return_tensors="pt", padding=True)
inputs["labels"] = labels["input_ids"]

outputs = model(**inputs)  # should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_texts = [<span class="hljs-string">&quot;I am a small frog.&quot;</span>, <span class="hljs-string">&quot;Tom asked his teacher for advice.&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_texts = [<span class="hljs-string">&quot;Ich bin ein kleiner Frosch.&quot;</span>, <span class="hljs-string">&quot;Tom bat seinen Lehrer um Rat.&quot;</span>]  <span class="hljs-comment"># optional</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(src_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-comment"># keys  [input_ids, attention_mask, labels].</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)  <span class="hljs-comment"># should work</span>`}}),Rn=new B({props:{name:"as_target_tokenizer",anchor:"transformers.MarianTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/tokenization_marian.py#L282"}}),Vn=new he({}),Bn=new B({props:{name:"class transformers.MarianModel",anchor:"transformers.MarianModel",parameters:[{name:"config",val:": MarianConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1083",parametersDescription:[{anchor:"transformers.MarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Kn=new B({props:{name:"forward",anchor:"transformers.MarianModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple[torch.Tensor], transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1165",parametersDescription:[{anchor:"transformers.MarianModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.MarianModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MarianModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MarianModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MarianModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarianModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MarianModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MarianModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
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
`}}),Wt=new pn({props:{$$slots:{default:[tf]},$$scope:{ctx:I}}}),Zn=new $e({props:{code:`from transformers import MarianTokenizer, MarianModel

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = MarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_inputs = tokenizer(
    "<pad> Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen",
    return_tensors="pt",
    add_special_tokens=False,
)
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&lt;pad&gt; Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>    add_special_tokens=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">26</span>, <span class="hljs-number">512</span>]`}}),Xn=new he({}),Qn=new B({props:{name:"class transformers.MarianMTModel",anchor:"transformers.MarianMTModel",parameters:[{name:"config",val:": MarianConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1267",parametersDescription:[{anchor:"transformers.MarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),oo=new B({props:{name:"forward",anchor:"transformers.MarianMTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple[torch.Tensor], transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1390",parametersDescription:[{anchor:"transformers.MarianMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.MarianMTModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MarianMTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MarianMTModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianMTModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MarianMTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianMTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarianMTModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MarianMTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MarianMTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianMTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianMTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarianMTModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
`}}),Vt=new pn({props:{$$slots:{default:[nf]},$$scope:{ctx:I}}}),ro=new $e({props:{code:`from transformers import MarianTokenizer, MarianMTModel

src = "fr"  # source language
trg = "en"  # target language

model_name = f"Helsinki-NLP/opus-mt-{src}-{trg}"
model = MarianMTModel.from_pretrained(model_name)
tokenizer = MarianTokenizer.from_pretrained(model_name)

sample_text = "o\xF9 est l'arr\xEAt de bus ?"
batch = tokenizer([sample_text], return_tensors="pt")

generated_ids = model.generate(**batch)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&quot;fr&quot;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&quot;en&quot;</span>  <span class="hljs-comment"># target language</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&quot;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;o\xF9 est l&#x27;arr\xEAt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Where&#x27;s the bus stop?&quot;</span>`}}),io=new he({}),lo=new B({props:{name:"class transformers.MarianForCausalLM",anchor:"transformers.MarianForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1534"}}),co=new B({props:{name:"forward",anchor:"transformers.MarianForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1565",parametersDescription:[{anchor:"transformers.MarianForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MarianForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MarianForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MarianForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MarianForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
`}}),po=new $e({props:{code:`from transformers import MarianTokenizer, MarianForCausalLM

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-fr-en")
model = MarianForCausalLM.from_pretrained("Helsinki-NLP/opus-mt-fr-en", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-fr-en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianForCausalLM.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-fr-en&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),ho=new he({}),uo=new B({props:{name:"class transformers.TFMarianModel",anchor:"transformers.TFMarianModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_tf_marian.py#L1155",parametersDescription:[{anchor:"transformers.TFMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jt=new pn({props:{$$slots:{default:[of]},$$scope:{ctx:I}}}),_o=new B({props:{name:"call",anchor:"transformers.TFMarianModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_tf_marian.py#L1167",parametersDescription:[{anchor:"transformers.TFMarianModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFMarianModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMarianModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMarianModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMarianModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMarianModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMarianModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMarianModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMarianModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMarianModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMarianModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),Yt=new pn({props:{$$slots:{default:[sf]},$$scope:{ctx:I}}}),vo=new $e({props:{code:`from transformers import MarianTokenizer, TFMarianModel
import tensorflow as tf

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = TFMarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, TFMarianModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ko=new he({}),To=new B({props:{name:"class transformers.TFMarianMTModel",anchor:"transformers.TFMarianMTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_tf_marian.py#L1241",parametersDescription:[{anchor:"transformers.TFMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zt=new pn({props:{$$slots:{default:[af]},$$scope:{ctx:I}}}),xo=new B({props:{name:"call",anchor:"transformers.TFMarianMTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_tf_marian.py#L1274",parametersDescription:[{anchor:"transformers.TFMarianMTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianMTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFMarianMTModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMarianMTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMarianMTModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMarianMTModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMarianMTModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMarianMTModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMarianMTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMarianMTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMarianMTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianMTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMarianMTModel.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),Xt=new pn({props:{$$slots:{default:[rf]},$$scope:{ctx:I}}}),$o=new $e({props:{code:`from transformers import MarianTokenizer, TFMarianMTModel
from typing import List

src = "fr"  # source language
trg = "en"  # target language
sample_text = "o\xF9 est l'arr\xEAt de bus ?"
model_name = f"Helsinki-NLP/opus-mt-{src}-{trg}"

model = TFMarianMTModel.from_pretrained(model_name)
tokenizer = MarianTokenizer.from_pretrained(model_name)
batch = tokenizer([sample_text], return_tensors="tf")
gen = model.generate(**batch)
tokenizer.batch_decode(gen, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, TFMarianMTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">List</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&quot;fr&quot;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&quot;en&quot;</span>  <span class="hljs-comment"># target language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;o\xF9 est l&#x27;arr\xEAt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&quot;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(gen, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`}}),jo=new he({}),qo=new B({props:{name:"class transformers.FlaxMarianModel",anchor:"transformers.FlaxMarianModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_flax_marian.py#L1195",parametersDescription:[{anchor:"transformers.FlaxMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ao=new B({props:{name:"__call__",anchor:"transformers.FlaxMarianModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_flax_marian.py#L1130",parametersDescription:[{anchor:"transformers.FlaxMarianModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),en=new pn({props:{$$slots:{default:[df]},$$scope:{ctx:I}}}),Oo=new $e({props:{code:`from transformers import MarianTokenizer, FlaxMarianModel

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = FlaxMarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),So=new he({}),Ho=new B({props:{name:"class transformers.FlaxMarianMTModel",anchor:"transformers.FlaxMarianMTModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_flax_marian.py#L1281",parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianMTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Jo=new B({props:{name:"__call__",anchor:"transformers.FlaxMarianMTModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_flax_marian.py#L1130",parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianMTModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianMTModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianMTModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),nn=new pn({props:{$$slots:{default:[lf]},$$scope:{ctx:I}}}),Yo=new $e({props:{code:`from transformers import MarianTokenizer, FlaxMarianMTModel

model = FlaxMarianMTModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")
tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")

text = "My friends are cool but they eat too many carbs."
input_ids = tokenizer(text, max_length=64, return_tensors="jax").input_ids

sequences = model.generate(input_ids, max_length=64, num_beams=2).sequences

outputs = tokenizer.batch_decode(sequences, skip_special_tokens=True)
# should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianMTModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(text, max_length=<span class="hljs-number">64</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(input_ids, max_length=<span class="hljs-number">64</span>, num_beams=<span class="hljs-number">2</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = tokenizer.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*</span>`}}),{c(){u=o("meta"),z=d(),f=o("h1"),x=o("a"),w=o("span"),_(b.$$.fragment),g=d(),$=o("span"),Ae=r("MarianMT"),ue=d(),q=o("p"),ve=o("strong"),X=r("Bugs:"),Oe=r(" If you see something strange, file a "),Q=o("a"),ee=r("Github Issue"),Se=r(`
and assign @patrickvonplaten.`),je=d(),G=o("p"),A=r("Translations should be similar, but not identical to output in the test set linked to in each model card."),qe=d(),C=o("h2"),E=o("a"),P=o("span"),_(te.$$.fragment),ne=d(),ke=o("span"),He=r("Implementation Notes"),J=d(),F=o("ul"),Te=o("li"),N=o("p"),De=r("Each model is about 298 MB on disk, there are more than 1,000 models."),oe=d(),Me=o("li"),se=o("p"),ae=r("The list of supported language pairs can be found "),re=o("a"),Ue=r("here"),O=r("."),We=d(),S=o("li"),H=o("p"),m=r("Models were originally trained by "),j=o("a"),ye=r("J\xF6rg Tiedemann"),nt=r(" using the "),be=o("a"),D=r("Marian"),ot=r(" C++ library, which supports fast training and translation."),st=d(),Re=o("li"),L=o("p"),ie=r(`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),at=d(),Ve=o("li"),U=o("p"),rt=r("The 80 opus models that require BPE preprocessing are not supported."),it=d(),de=o("li"),xe=o("p"),bi=r("The modeling code is the same as "),Zo=o("a"),xi=r("BartForConditionalGeneration"),wi=r(" with a few minor modifications:"),zi=d(),dt=o("ul"),hn=o("li"),$i=r("static (sinusoid) positional embeddings ("),qs=o("code"),ji=r("MarianConfig.static_position_embeddings=True"),qi=r(")"),Ei=d(),un=o("li"),Fi=r("no layernorm_embedding ("),Es=o("code"),Pi=r("MarianConfig.normalize_embedding=False"),Ni=r(")"),Ci=d(),lt=o("li"),Li=r("the model starts generating with "),Fs=o("code"),Ii=r("pad_token_id"),Ai=r(` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Ps=o("code"),Oi=r("<s/>"),Si=r("),"),Hi=d(),Ns=o("li"),mn=o("p"),Di=r("Code to bulk convert models can be found in "),Cs=o("code"),Ui=r("convert_marian_to_pytorch.py"),Wi=r("."),Ri=d(),Ls=o("li"),fn=o("p"),Vi=r("This model was contributed by "),gn=o("a"),Bi=r("sshleifer"),Gi=r("."),Za=d(),ct=o("h2"),Nt=o("a"),Is=o("span"),_(_n.$$.fragment),Ji=d(),As=o("span"),Yi=r("Naming"),Xa=d(),Ee=o("ul"),Xo=o("li"),Ki=r("All model names use the following format: "),Os=o("code"),Zi=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),Xi=d(),vn=o("li"),Qi=r("The language codes used to name models are inconsistent. Two digit codes can usually be found "),kn=o("a"),ed=r("here"),td=r(`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),nd=d(),pt=o("li"),od=r("Codes formatted like "),Ss=o("code"),sd=r("es_AR"),ad=r(" are usually "),Hs=o("code"),rd=r("code_{region}"),id=r(". That one is Spanish from Argentina."),dd=d(),Ds=o("li"),ld=r(`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),Qa=d(),ht=o("h2"),Ct=o("a"),Us=o("span"),_(Tn.$$.fragment),cd=d(),Ws=o("span"),pd=r("Examples"),er=d(),Lt=o("ul"),Rs=o("li"),hd=r(`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),ud=d(),Vs=o("li"),Mn=o("a"),md=r("Fine-tune on GPU"),tr=d(),ut=o("h2"),It=o("a"),Bs=o("span"),_(yn.$$.fragment),fd=d(),Gs=o("span"),gd=r("Multilingual Models"),nr=d(),Fe=o("ul"),bn=o("li"),_d=r("All model names use the following format: "),Js=o("code"),vd=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),kd=r(":"),Td=d(),xn=o("li"),Md=r(`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Ys=o("code"),yd=r("src_text"),bd=r("."),xd=d(),wn=o("li"),wd=r("You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),zn=o("a"),zd=r("opus-mt-en-roa"),$d=r("."),jd=d(),$n=o("li"),qd=r("Note that if a model is only multilingual on the source side, like "),Ks=o("code"),Ed=r("Helsinki-NLP/opus-mt-roa-en"),Fd=r(`, no language
codes are required.`),or=d(),At=o("p"),Pd=r("New multi-lingual models from the "),jn=o("a"),Nd=r("Tatoeba-Challenge repo"),Cd=r(`
require 3 character language codes:`),sr=d(),_(qn.$$.fragment),ar=d(),Qo=o("p"),Ld=r("Here is the code to see all available pretrained models on the hub:"),rr=d(),_(En.$$.fragment),ir=d(),mt=o("h2"),Ot=o("a"),Zs=o("span"),_(Fn.$$.fragment),Id=d(),Xs=o("span"),Ad=r("Old Style Multi-Lingual Models"),dr=d(),es=o("p"),Od=r(`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),lr=d(),_(Pn.$$.fragment),cr=d(),ts=o("p"),Sd=r("Example of translating english to many romance languages, using old-style 2 character language codes"),pr=d(),_(Nn.$$.fragment),hr=d(),ft=o("h2"),St=o("a"),Qs=o("span"),_(Cn.$$.fragment),Hd=d(),ea=o("span"),Dd=r("MarianConfig"),ur=d(),le=o("div"),_(Ln.$$.fragment),Ud=d(),gt=o("p"),Wd=r("This is the configuration class to store the configuration of a "),ns=o("a"),Rd=r("MarianModel"),Vd=r(`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),In=o("a"),Bd=r("Helsinki-NLP/opus-mt-en-de"),Gd=r(" architecture."),Jd=d(),_t=o("p"),Yd=r("Configuration objects inherit from "),os=o("a"),Kd=r("PretrainedConfig"),Zd=r(` and can be used to control the model outputs. Read the
documentation from `),ss=o("a"),Xd=r("PretrainedConfig"),Qd=r(" for more information."),el=d(),ta=o("p"),tl=r("Examples:"),nl=d(),_(An.$$.fragment),mr=d(),vt=o("h2"),Ht=o("a"),na=o("span"),_(On.$$.fragment),ol=d(),oa=o("span"),sl=r("MarianTokenizer"),fr=d(),W=o("div"),_(Sn.$$.fragment),al=d(),Hn=o("p"),rl=r("Construct a Marian tokenizer. Based on "),Dn=o("a"),il=r("SentencePiece"),dl=r("."),ll=d(),Un=o("p"),cl=r("This tokenizer inherits from "),as=o("a"),pl=r("PreTrainedTokenizer"),hl=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ul=d(),sa=o("p"),ml=r("Examples:"),fl=d(),_(Wn.$$.fragment),gl=d(),Dt=o("div"),_(Rn.$$.fragment),_l=d(),aa=o("p"),vl=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),gr=d(),kt=o("h2"),Ut=o("a"),ra=o("span"),_(Vn.$$.fragment),kl=d(),ia=o("span"),Tl=r("MarianModel"),_r=d(),we=o("div"),_(Bn.$$.fragment),Ml=d(),Gn=o("p"),yl=r(`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rs=o("a"),bl=r("PreTrainedModel"),xl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wl=d(),Jn=o("p"),zl=r("This model is also a PyTorch "),Yn=o("a"),$l=r("torch.nn.Module"),jl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ql=d(),me=o("div"),_(Kn.$$.fragment),El=d(),Tt=o("p"),Fl=r("The "),is=o("a"),Pl=r("MarianModel"),Nl=r(" forward method, overrides the "),da=o("code"),Cl=r("__call__"),Ll=r(" special method."),Il=d(),_(Wt.$$.fragment),Al=d(),la=o("p"),Ol=r("Example:"),Sl=d(),_(Zn.$$.fragment),vr=d(),Mt=o("h2"),Rt=o("a"),ca=o("span"),_(Xn.$$.fragment),Hl=d(),pa=o("span"),Dl=r("MarianMTModel"),kr=d(),ze=o("div"),_(Qn.$$.fragment),Ul=d(),eo=o("p"),Wl=r(`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),ds=o("a"),Rl=r("PreTrainedModel"),Vl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl=d(),to=o("p"),Gl=r("This model is also a PyTorch "),no=o("a"),Jl=r("torch.nn.Module"),Yl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kl=d(),Y=o("div"),_(oo.$$.fragment),Zl=d(),yt=o("p"),Xl=r("The "),ls=o("a"),Ql=r("MarianMTModel"),ec=r(" forward method, overrides the "),ha=o("code"),tc=r("__call__"),nc=r(" special method."),oc=d(),_(Vt.$$.fragment),sc=d(),so=o("p"),ac=r(`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),ao=o("a"),rc=r("here"),ic=r("."),dc=d(),ua=o("p"),lc=r("Examples:"),cc=d(),_(ro.$$.fragment),Tr=d(),bt=o("h2"),Bt=o("a"),ma=o("span"),_(io.$$.fragment),pc=d(),fa=o("span"),hc=r("MarianForCausalLM"),Mr=d(),xt=o("div"),_(lo.$$.fragment),uc=d(),Je=o("div"),_(co.$$.fragment),mc=d(),ga=o("p"),fc=r("Example:"),gc=d(),_(po.$$.fragment),yr=d(),wt=o("h2"),Gt=o("a"),_a=o("span"),_(ho.$$.fragment),_c=d(),va=o("span"),vc=r("TFMarianModel"),br=d(),ce=o("div"),_(uo.$$.fragment),kc=d(),mo=o("p"),Tc=r(`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),cs=o("a"),Mc=r("TFPreTrainedModel"),yc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bc=d(),fo=o("p"),xc=r("This model is also a "),go=o("a"),wc=r("tf.keras.Model"),zc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$c=d(),_(Jt.$$.fragment),jc=d(),fe=o("div"),_(_o.$$.fragment),qc=d(),zt=o("p"),Ec=r("The "),ps=o("a"),Fc=r("TFMarianModel"),Pc=r(" forward method, overrides the "),ka=o("code"),Nc=r("__call__"),Cc=r(" special method."),Lc=d(),_(Yt.$$.fragment),Ic=d(),Ta=o("p"),Ac=r("Example:"),Oc=d(),_(vo.$$.fragment),xr=d(),$t=o("h2"),Kt=o("a"),Ma=o("span"),_(ko.$$.fragment),Sc=d(),ya=o("span"),Hc=r("TFMarianMTModel"),wr=d(),pe=o("div"),_(To.$$.fragment),Dc=d(),Mo=o("p"),Uc=r(`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),hs=o("a"),Wc=r("TFPreTrainedModel"),Rc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vc=d(),yo=o("p"),Bc=r("This model is also a "),bo=o("a"),Gc=r("tf.keras.Model"),Jc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yc=d(),_(Zt.$$.fragment),Kc=d(),K=o("div"),_(xo.$$.fragment),Zc=d(),jt=o("p"),Xc=r("The "),us=o("a"),Qc=r("TFMarianMTModel"),ep=r(" forward method, overrides the "),ba=o("code"),tp=r("__call__"),np=r(" special method."),op=d(),_(Xt.$$.fragment),sp=d(),wo=o("p"),ap=r(`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),zo=o("a"),rp=r("here"),ip=r("."),dp=d(),xa=o("p"),lp=r("Examples:"),cp=d(),_($o.$$.fragment),zr=d(),qt=o("h2"),Qt=o("a"),wa=o("span"),_(jo.$$.fragment),pp=d(),za=o("span"),hp=r("FlaxMarianModel"),$r=d(),R=o("div"),_(qo.$$.fragment),up=d(),Eo=o("p"),mp=r(`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ms=o("a"),fp=r("FlaxPreTrainedModel"),gp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p=d(),Fo=o("p"),vp=r(`This model is also a Flax Linen
`),Po=o("a"),kp=r("flax.nn.Module"),Tp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mp=d(),$a=o("p"),yp=r("Finally, this model supports inherent JAX features such as:"),bp=d(),Be=o("ul"),ja=o("li"),No=o("a"),xp=r("Just-In-Time (JIT) compilation"),wp=d(),qa=o("li"),Co=o("a"),zp=r("Automatic Differentiation"),$p=d(),Ea=o("li"),Lo=o("a"),jp=r("Vectorization"),qp=d(),Fa=o("li"),Io=o("a"),Ep=r("Parallelization"),Fp=d(),ge=o("div"),_(Ao.$$.fragment),Pp=d(),Et=o("p"),Np=r("The "),Pa=o("code"),Cp=r("FlaxMarianPreTrainedModel"),Lp=r(" forward method, overrides the "),Na=o("code"),Ip=r("__call__"),Ap=r(" special method."),Op=d(),_(en.$$.fragment),Sp=d(),Ca=o("p"),Hp=r("Example:"),Dp=d(),_(Oo.$$.fragment),jr=d(),Ft=o("h2"),tn=o("a"),La=o("span"),_(So.$$.fragment),Up=d(),Ia=o("span"),Wp=r("FlaxMarianMTModel"),qr=d(),V=o("div"),_(Ho.$$.fragment),Rp=d(),Do=o("p"),Vp=r(`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),fs=o("a"),Bp=r("FlaxPreTrainedModel"),Gp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jp=d(),Uo=o("p"),Yp=r(`This model is also a Flax Linen
`),Wo=o("a"),Kp=r("flax.nn.Module"),Zp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Xp=d(),Aa=o("p"),Qp=r("Finally, this model supports inherent JAX features such as:"),eh=d(),Ge=o("ul"),Oa=o("li"),Ro=o("a"),th=r("Just-In-Time (JIT) compilation"),nh=d(),Sa=o("li"),Vo=o("a"),oh=r("Automatic Differentiation"),sh=d(),Ha=o("li"),Bo=o("a"),ah=r("Vectorization"),rh=d(),Da=o("li"),Go=o("a"),ih=r("Parallelization"),dh=d(),_e=o("div"),_(Jo.$$.fragment),lh=d(),Pt=o("p"),ch=r("The "),Ua=o("code"),ph=r("FlaxMarianPreTrainedModel"),hh=r(" forward method, overrides the "),Wa=o("code"),uh=r("__call__"),mh=r(" special method."),fh=d(),_(nn.$$.fragment),gh=d(),Ra=o("p"),_h=r("Example:"),vh=d(),_(Yo.$$.fragment),this.h()},l(n){const p=Qm('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(n),f=s(n,"H1",{class:!0});var Ko=a(f);x=s(Ko,"A",{id:!0,class:!0,href:!0});var Va=a(x);w=s(Va,"SPAN",{});var Ba=a(w);v(b.$$.fragment,Ba),Ba.forEach(t),Va.forEach(t),g=l(Ko),$=s(Ko,"SPAN",{});var Ga=a($);Ae=i(Ga,"MarianMT"),Ga.forEach(t),Ko.forEach(t),ue=l(n),q=s(n,"P",{});var on=a(q);ve=s(on,"STRONG",{});var Ja=a(ve);X=i(Ja,"Bugs:"),Ja.forEach(t),Oe=i(on," If you see something strange, file a "),Q=s(on,"A",{href:!0,rel:!0});var Ya=a(Q);ee=i(Ya,"Github Issue"),Ya.forEach(t),Se=i(on,`
and assign @patrickvonplaten.`),on.forEach(t),je=l(n),G=s(n,"P",{});var Ka=a(G);A=i(Ka,"Translations should be similar, but not identical to output in the test set linked to in each model card."),Ka.forEach(t),qe=l(n),C=s(n,"H2",{class:!0});var Fr=a(C);E=s(Fr,"A",{id:!0,class:!0,href:!0});var Th=a(E);P=s(Th,"SPAN",{});var Mh=a(P);v(te.$$.fragment,Mh),Mh.forEach(t),Th.forEach(t),ne=l(Fr),ke=s(Fr,"SPAN",{});var yh=a(ke);He=i(yh,"Implementation Notes"),yh.forEach(t),Fr.forEach(t),J=l(n),F=s(n,"UL",{});var Z=a(F);Te=s(Z,"LI",{});var bh=a(Te);N=s(bh,"P",{});var xh=a(N);De=i(xh,"Each model is about 298 MB on disk, there are more than 1,000 models."),xh.forEach(t),bh.forEach(t),oe=l(Z),Me=s(Z,"LI",{});var wh=a(Me);se=s(wh,"P",{});var Pr=a(se);ae=i(Pr,"The list of supported language pairs can be found "),re=s(Pr,"A",{href:!0,rel:!0});var zh=a(re);Ue=i(zh,"here"),zh.forEach(t),O=i(Pr,"."),Pr.forEach(t),wh.forEach(t),We=l(Z),S=s(Z,"LI",{});var $h=a(S);H=s($h,"P",{});var gs=a(H);m=i(gs,"Models were originally trained by "),j=s(gs,"A",{href:!0,rel:!0});var jh=a(j);ye=i(jh,"J\xF6rg Tiedemann"),jh.forEach(t),nt=i(gs," using the "),be=s(gs,"A",{href:!0,rel:!0});var qh=a(be);D=i(qh,"Marian"),qh.forEach(t),ot=i(gs," C++ library, which supports fast training and translation."),gs.forEach(t),$h.forEach(t),st=l(Z),Re=s(Z,"LI",{});var Eh=a(Re);L=s(Eh,"P",{});var Fh=a(L);ie=i(Fh,`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),Fh.forEach(t),Eh.forEach(t),at=l(Z),Ve=s(Z,"LI",{});var Ph=a(Ve);U=s(Ph,"P",{});var Nh=a(U);rt=i(Nh,"The 80 opus models that require BPE preprocessing are not supported."),Nh.forEach(t),Ph.forEach(t),it=l(Z),de=s(Z,"LI",{});var Nr=a(de);xe=s(Nr,"P",{});var Cr=a(xe);bi=i(Cr,"The modeling code is the same as "),Zo=s(Cr,"A",{href:!0});var Ch=a(Zo);xi=i(Ch,"BartForConditionalGeneration"),Ch.forEach(t),wi=i(Cr," with a few minor modifications:"),Cr.forEach(t),zi=l(Nr),dt=s(Nr,"UL",{});var _s=a(dt);hn=s(_s,"LI",{});var Lr=a(hn);$i=i(Lr,"static (sinusoid) positional embeddings ("),qs=s(Lr,"CODE",{});var Lh=a(qs);ji=i(Lh,"MarianConfig.static_position_embeddings=True"),Lh.forEach(t),qi=i(Lr,")"),Lr.forEach(t),Ei=l(_s),un=s(_s,"LI",{});var Ir=a(un);Fi=i(Ir,"no layernorm_embedding ("),Es=s(Ir,"CODE",{});var Ih=a(Es);Pi=i(Ih,"MarianConfig.normalize_embedding=False"),Ih.forEach(t),Ni=i(Ir,")"),Ir.forEach(t),Ci=l(_s),lt=s(_s,"LI",{});var vs=a(lt);Li=i(vs,"the model starts generating with "),Fs=s(vs,"CODE",{});var Ah=a(Fs);Ii=i(Ah,"pad_token_id"),Ah.forEach(t),Ai=i(vs,` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Ps=s(vs,"CODE",{});var Oh=a(Ps);Oi=i(Oh,"<s/>"),Oh.forEach(t),Si=i(vs,"),"),vs.forEach(t),_s.forEach(t),Nr.forEach(t),Hi=l(Z),Ns=s(Z,"LI",{});var Sh=a(Ns);mn=s(Sh,"P",{});var Ar=a(mn);Di=i(Ar,"Code to bulk convert models can be found in "),Cs=s(Ar,"CODE",{});var Hh=a(Cs);Ui=i(Hh,"convert_marian_to_pytorch.py"),Hh.forEach(t),Wi=i(Ar,"."),Ar.forEach(t),Sh.forEach(t),Ri=l(Z),Ls=s(Z,"LI",{});var Dh=a(Ls);fn=s(Dh,"P",{});var Or=a(fn);Vi=i(Or,"This model was contributed by "),gn=s(Or,"A",{href:!0,rel:!0});var Uh=a(gn);Bi=i(Uh,"sshleifer"),Uh.forEach(t),Gi=i(Or,"."),Or.forEach(t),Dh.forEach(t),Z.forEach(t),Za=l(n),ct=s(n,"H2",{class:!0});var Sr=a(ct);Nt=s(Sr,"A",{id:!0,class:!0,href:!0});var Wh=a(Nt);Is=s(Wh,"SPAN",{});var Rh=a(Is);v(_n.$$.fragment,Rh),Rh.forEach(t),Wh.forEach(t),Ji=l(Sr),As=s(Sr,"SPAN",{});var Vh=a(As);Yi=i(Vh,"Naming"),Vh.forEach(t),Sr.forEach(t),Xa=l(n),Ee=s(n,"UL",{});var sn=a(Ee);Xo=s(sn,"LI",{});var kh=a(Xo);Ki=i(kh,"All model names use the following format: "),Os=s(kh,"CODE",{});var Bh=a(Os);Zi=i(Bh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),Bh.forEach(t),kh.forEach(t),Xi=l(sn),vn=s(sn,"LI",{});var Hr=a(vn);Qi=i(Hr,"The language codes used to name models are inconsistent. Two digit codes can usually be found "),kn=s(Hr,"A",{href:!0,rel:!0});var Gh=a(kn);ed=i(Gh,"here"),Gh.forEach(t),td=i(Hr,`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),Hr.forEach(t),nd=l(sn),pt=s(sn,"LI",{});var ks=a(pt);od=i(ks,"Codes formatted like "),Ss=s(ks,"CODE",{});var Jh=a(Ss);sd=i(Jh,"es_AR"),Jh.forEach(t),ad=i(ks," are usually "),Hs=s(ks,"CODE",{});var Yh=a(Hs);rd=i(Yh,"code_{region}"),Yh.forEach(t),id=i(ks,". That one is Spanish from Argentina."),ks.forEach(t),dd=l(sn),Ds=s(sn,"LI",{});var Kh=a(Ds);ld=i(Kh,`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),Kh.forEach(t),sn.forEach(t),Qa=l(n),ht=s(n,"H2",{class:!0});var Dr=a(ht);Ct=s(Dr,"A",{id:!0,class:!0,href:!0});var Zh=a(Ct);Us=s(Zh,"SPAN",{});var Xh=a(Us);v(Tn.$$.fragment,Xh),Xh.forEach(t),Zh.forEach(t),cd=l(Dr),Ws=s(Dr,"SPAN",{});var Qh=a(Ws);pd=i(Qh,"Examples"),Qh.forEach(t),Dr.forEach(t),er=l(n),Lt=s(n,"UL",{});var Ur=a(Lt);Rs=s(Ur,"LI",{});var eu=a(Rs);hd=i(eu,`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),eu.forEach(t),ud=l(Ur),Vs=s(Ur,"LI",{});var tu=a(Vs);Mn=s(tu,"A",{href:!0,rel:!0});var nu=a(Mn);md=i(nu,"Fine-tune on GPU"),nu.forEach(t),tu.forEach(t),Ur.forEach(t),tr=l(n),ut=s(n,"H2",{class:!0});var Wr=a(ut);It=s(Wr,"A",{id:!0,class:!0,href:!0});var ou=a(It);Bs=s(ou,"SPAN",{});var su=a(Bs);v(yn.$$.fragment,su),su.forEach(t),ou.forEach(t),fd=l(Wr),Gs=s(Wr,"SPAN",{});var au=a(Gs);gd=i(au,"Multilingual Models"),au.forEach(t),Wr.forEach(t),nr=l(n),Fe=s(n,"UL",{});var an=a(Fe);bn=s(an,"LI",{});var Rr=a(bn);_d=i(Rr,"All model names use the following format: "),Js=s(Rr,"CODE",{});var ru=a(Js);vd=i(ru,"Helsinki-NLP/opus-mt-{src}-{tgt}"),ru.forEach(t),kd=i(Rr,":"),Rr.forEach(t),Td=l(an),xn=s(an,"LI",{});var Vr=a(xn);Md=i(Vr,`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Ys=s(Vr,"CODE",{});var iu=a(Ys);yd=i(iu,"src_text"),iu.forEach(t),bd=i(Vr,"."),Vr.forEach(t),xd=l(an),wn=s(an,"LI",{});var Br=a(wn);wd=i(Br,"You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),zn=s(Br,"A",{href:!0,rel:!0});var du=a(zn);zd=i(du,"opus-mt-en-roa"),du.forEach(t),$d=i(Br,"."),Br.forEach(t),jd=l(an),$n=s(an,"LI",{});var Gr=a($n);qd=i(Gr,"Note that if a model is only multilingual on the source side, like "),Ks=s(Gr,"CODE",{});var lu=a(Ks);Ed=i(lu,"Helsinki-NLP/opus-mt-roa-en"),lu.forEach(t),Fd=i(Gr,`, no language
codes are required.`),Gr.forEach(t),an.forEach(t),or=l(n),At=s(n,"P",{});var Jr=a(At);Pd=i(Jr,"New multi-lingual models from the "),jn=s(Jr,"A",{href:!0,rel:!0});var cu=a(jn);Nd=i(cu,"Tatoeba-Challenge repo"),cu.forEach(t),Cd=i(Jr,`
require 3 character language codes:`),Jr.forEach(t),sr=l(n),v(qn.$$.fragment,n),ar=l(n),Qo=s(n,"P",{});var pu=a(Qo);Ld=i(pu,"Here is the code to see all available pretrained models on the hub:"),pu.forEach(t),rr=l(n),v(En.$$.fragment,n),ir=l(n),mt=s(n,"H2",{class:!0});var Yr=a(mt);Ot=s(Yr,"A",{id:!0,class:!0,href:!0});var hu=a(Ot);Zs=s(hu,"SPAN",{});var uu=a(Zs);v(Fn.$$.fragment,uu),uu.forEach(t),hu.forEach(t),Id=l(Yr),Xs=s(Yr,"SPAN",{});var mu=a(Xs);Ad=i(mu,"Old Style Multi-Lingual Models"),mu.forEach(t),Yr.forEach(t),dr=l(n),es=s(n,"P",{});var fu=a(es);Od=i(fu,`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),fu.forEach(t),lr=l(n),v(Pn.$$.fragment,n),cr=l(n),ts=s(n,"P",{});var gu=a(ts);Sd=i(gu,"Example of translating english to many romance languages, using old-style 2 character language codes"),gu.forEach(t),pr=l(n),v(Nn.$$.fragment,n),hr=l(n),ft=s(n,"H2",{class:!0});var Kr=a(ft);St=s(Kr,"A",{id:!0,class:!0,href:!0});var _u=a(St);Qs=s(_u,"SPAN",{});var vu=a(Qs);v(Cn.$$.fragment,vu),vu.forEach(t),_u.forEach(t),Hd=l(Kr),ea=s(Kr,"SPAN",{});var ku=a(ea);Dd=i(ku,"MarianConfig"),ku.forEach(t),Kr.forEach(t),ur=l(n),le=s(n,"DIV",{class:!0});var Ye=a(le);v(Ln.$$.fragment,Ye),Ud=l(Ye),gt=s(Ye,"P",{});var Ts=a(gt);Wd=i(Ts,"This is the configuration class to store the configuration of a "),ns=s(Ts,"A",{href:!0});var Tu=a(ns);Rd=i(Tu,"MarianModel"),Tu.forEach(t),Vd=i(Ts,`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),In=s(Ts,"A",{href:!0,rel:!0});var Mu=a(In);Bd=i(Mu,"Helsinki-NLP/opus-mt-en-de"),Mu.forEach(t),Gd=i(Ts," architecture."),Ts.forEach(t),Jd=l(Ye),_t=s(Ye,"P",{});var Ms=a(_t);Yd=i(Ms,"Configuration objects inherit from "),os=s(Ms,"A",{href:!0});var yu=a(os);Kd=i(yu,"PretrainedConfig"),yu.forEach(t),Zd=i(Ms,` and can be used to control the model outputs. Read the
documentation from `),ss=s(Ms,"A",{href:!0});var bu=a(ss);Xd=i(bu,"PretrainedConfig"),bu.forEach(t),Qd=i(Ms," for more information."),Ms.forEach(t),el=l(Ye),ta=s(Ye,"P",{});var xu=a(ta);tl=i(xu,"Examples:"),xu.forEach(t),nl=l(Ye),v(An.$$.fragment,Ye),Ye.forEach(t),mr=l(n),vt=s(n,"H2",{class:!0});var Zr=a(vt);Ht=s(Zr,"A",{id:!0,class:!0,href:!0});var wu=a(Ht);na=s(wu,"SPAN",{});var zu=a(na);v(On.$$.fragment,zu),zu.forEach(t),wu.forEach(t),ol=l(Zr),oa=s(Zr,"SPAN",{});var $u=a(oa);sl=i($u,"MarianTokenizer"),$u.forEach(t),Zr.forEach(t),fr=l(n),W=s(n,"DIV",{class:!0});var Pe=a(W);v(Sn.$$.fragment,Pe),al=l(Pe),Hn=s(Pe,"P",{});var Xr=a(Hn);rl=i(Xr,"Construct a Marian tokenizer. Based on "),Dn=s(Xr,"A",{href:!0,rel:!0});var ju=a(Dn);il=i(ju,"SentencePiece"),ju.forEach(t),dl=i(Xr,"."),Xr.forEach(t),ll=l(Pe),Un=s(Pe,"P",{});var Qr=a(Un);cl=i(Qr,"This tokenizer inherits from "),as=s(Qr,"A",{href:!0});var qu=a(as);pl=i(qu,"PreTrainedTokenizer"),qu.forEach(t),hl=i(Qr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Qr.forEach(t),ul=l(Pe),sa=s(Pe,"P",{});var Eu=a(sa);ml=i(Eu,"Examples:"),Eu.forEach(t),fl=l(Pe),v(Wn.$$.fragment,Pe),gl=l(Pe),Dt=s(Pe,"DIV",{class:!0});var ei=a(Dt);v(Rn.$$.fragment,ei),_l=l(ei),aa=s(ei,"P",{});var Fu=a(aa);vl=i(Fu,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Fu.forEach(t),ei.forEach(t),Pe.forEach(t),gr=l(n),kt=s(n,"H2",{class:!0});var ti=a(kt);Ut=s(ti,"A",{id:!0,class:!0,href:!0});var Pu=a(Ut);ra=s(Pu,"SPAN",{});var Nu=a(ra);v(Vn.$$.fragment,Nu),Nu.forEach(t),Pu.forEach(t),kl=l(ti),ia=s(ti,"SPAN",{});var Cu=a(ia);Tl=i(Cu,"MarianModel"),Cu.forEach(t),ti.forEach(t),_r=l(n),we=s(n,"DIV",{class:!0});var rn=a(we);v(Bn.$$.fragment,rn),Ml=l(rn),Gn=s(rn,"P",{});var ni=a(Gn);yl=i(ni,`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rs=s(ni,"A",{href:!0});var Lu=a(rs);bl=i(Lu,"PreTrainedModel"),Lu.forEach(t),xl=i(ni,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni.forEach(t),wl=l(rn),Jn=s(rn,"P",{});var oi=a(Jn);zl=i(oi,"This model is also a PyTorch "),Yn=s(oi,"A",{href:!0,rel:!0});var Iu=a(Yn);$l=i(Iu,"torch.nn.Module"),Iu.forEach(t),jl=i(oi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oi.forEach(t),ql=l(rn),me=s(rn,"DIV",{class:!0});var Ke=a(me);v(Kn.$$.fragment,Ke),El=l(Ke),Tt=s(Ke,"P",{});var ys=a(Tt);Fl=i(ys,"The "),is=s(ys,"A",{href:!0});var Au=a(is);Pl=i(Au,"MarianModel"),Au.forEach(t),Nl=i(ys," forward method, overrides the "),da=s(ys,"CODE",{});var Ou=a(da);Cl=i(Ou,"__call__"),Ou.forEach(t),Ll=i(ys," special method."),ys.forEach(t),Il=l(Ke),v(Wt.$$.fragment,Ke),Al=l(Ke),la=s(Ke,"P",{});var Su=a(la);Ol=i(Su,"Example:"),Su.forEach(t),Sl=l(Ke),v(Zn.$$.fragment,Ke),Ke.forEach(t),rn.forEach(t),vr=l(n),Mt=s(n,"H2",{class:!0});var si=a(Mt);Rt=s(si,"A",{id:!0,class:!0,href:!0});var Hu=a(Rt);ca=s(Hu,"SPAN",{});var Du=a(ca);v(Xn.$$.fragment,Du),Du.forEach(t),Hu.forEach(t),Hl=l(si),pa=s(si,"SPAN",{});var Uu=a(pa);Dl=i(Uu,"MarianMTModel"),Uu.forEach(t),si.forEach(t),kr=l(n),ze=s(n,"DIV",{class:!0});var dn=a(ze);v(Qn.$$.fragment,dn),Ul=l(dn),eo=s(dn,"P",{});var ai=a(eo);Wl=i(ai,`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),ds=s(ai,"A",{href:!0});var Wu=a(ds);Rl=i(Wu,"PreTrainedModel"),Wu.forEach(t),Vl=i(ai,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ai.forEach(t),Bl=l(dn),to=s(dn,"P",{});var ri=a(to);Gl=i(ri,"This model is also a PyTorch "),no=s(ri,"A",{href:!0,rel:!0});var Ru=a(no);Jl=i(Ru,"torch.nn.Module"),Ru.forEach(t),Yl=i(ri,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ri.forEach(t),Kl=l(dn),Y=s(dn,"DIV",{class:!0});var Ne=a(Y);v(oo.$$.fragment,Ne),Zl=l(Ne),yt=s(Ne,"P",{});var bs=a(yt);Xl=i(bs,"The "),ls=s(bs,"A",{href:!0});var Vu=a(ls);Ql=i(Vu,"MarianMTModel"),Vu.forEach(t),ec=i(bs," forward method, overrides the "),ha=s(bs,"CODE",{});var Bu=a(ha);tc=i(Bu,"__call__"),Bu.forEach(t),nc=i(bs," special method."),bs.forEach(t),oc=l(Ne),v(Vt.$$.fragment,Ne),sc=l(Ne),so=s(Ne,"P",{});var ii=a(so);ac=i(ii,`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),ao=s(ii,"A",{href:!0,rel:!0});var Gu=a(ao);rc=i(Gu,"here"),Gu.forEach(t),ic=i(ii,"."),ii.forEach(t),dc=l(Ne),ua=s(Ne,"P",{});var Ju=a(ua);lc=i(Ju,"Examples:"),Ju.forEach(t),cc=l(Ne),v(ro.$$.fragment,Ne),Ne.forEach(t),dn.forEach(t),Tr=l(n),bt=s(n,"H2",{class:!0});var di=a(bt);Bt=s(di,"A",{id:!0,class:!0,href:!0});var Yu=a(Bt);ma=s(Yu,"SPAN",{});var Ku=a(ma);v(io.$$.fragment,Ku),Ku.forEach(t),Yu.forEach(t),pc=l(di),fa=s(di,"SPAN",{});var Zu=a(fa);hc=i(Zu,"MarianForCausalLM"),Zu.forEach(t),di.forEach(t),Mr=l(n),xt=s(n,"DIV",{class:!0});var li=a(xt);v(lo.$$.fragment,li),uc=l(li),Je=s(li,"DIV",{class:!0});var xs=a(Je);v(co.$$.fragment,xs),mc=l(xs),ga=s(xs,"P",{});var Xu=a(ga);fc=i(Xu,"Example:"),Xu.forEach(t),gc=l(xs),v(po.$$.fragment,xs),xs.forEach(t),li.forEach(t),yr=l(n),wt=s(n,"H2",{class:!0});var ci=a(wt);Gt=s(ci,"A",{id:!0,class:!0,href:!0});var Qu=a(Gt);_a=s(Qu,"SPAN",{});var em=a(_a);v(ho.$$.fragment,em),em.forEach(t),Qu.forEach(t),_c=l(ci),va=s(ci,"SPAN",{});var tm=a(va);vc=i(tm,"TFMarianModel"),tm.forEach(t),ci.forEach(t),br=l(n),ce=s(n,"DIV",{class:!0});var Ze=a(ce);v(uo.$$.fragment,Ze),kc=l(Ze),mo=s(Ze,"P",{});var pi=a(mo);Tc=i(pi,`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),cs=s(pi,"A",{href:!0});var nm=a(cs);Mc=i(nm,"TFPreTrainedModel"),nm.forEach(t),yc=i(pi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pi.forEach(t),bc=l(Ze),fo=s(Ze,"P",{});var hi=a(fo);xc=i(hi,"This model is also a "),go=s(hi,"A",{href:!0,rel:!0});var om=a(go);wc=i(om,"tf.keras.Model"),om.forEach(t),zc=i(hi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hi.forEach(t),$c=l(Ze),v(Jt.$$.fragment,Ze),jc=l(Ze),fe=s(Ze,"DIV",{class:!0});var Xe=a(fe);v(_o.$$.fragment,Xe),qc=l(Xe),zt=s(Xe,"P",{});var ws=a(zt);Ec=i(ws,"The "),ps=s(ws,"A",{href:!0});var sm=a(ps);Fc=i(sm,"TFMarianModel"),sm.forEach(t),Pc=i(ws," forward method, overrides the "),ka=s(ws,"CODE",{});var am=a(ka);Nc=i(am,"__call__"),am.forEach(t),Cc=i(ws," special method."),ws.forEach(t),Lc=l(Xe),v(Yt.$$.fragment,Xe),Ic=l(Xe),Ta=s(Xe,"P",{});var rm=a(Ta);Ac=i(rm,"Example:"),rm.forEach(t),Oc=l(Xe),v(vo.$$.fragment,Xe),Xe.forEach(t),Ze.forEach(t),xr=l(n),$t=s(n,"H2",{class:!0});var ui=a($t);Kt=s(ui,"A",{id:!0,class:!0,href:!0});var im=a(Kt);Ma=s(im,"SPAN",{});var dm=a(Ma);v(ko.$$.fragment,dm),dm.forEach(t),im.forEach(t),Sc=l(ui),ya=s(ui,"SPAN",{});var lm=a(ya);Hc=i(lm,"TFMarianMTModel"),lm.forEach(t),ui.forEach(t),wr=l(n),pe=s(n,"DIV",{class:!0});var Qe=a(pe);v(To.$$.fragment,Qe),Dc=l(Qe),Mo=s(Qe,"P",{});var mi=a(Mo);Uc=i(mi,`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),hs=s(mi,"A",{href:!0});var cm=a(hs);Wc=i(cm,"TFPreTrainedModel"),cm.forEach(t),Rc=i(mi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mi.forEach(t),Vc=l(Qe),yo=s(Qe,"P",{});var fi=a(yo);Bc=i(fi,"This model is also a "),bo=s(fi,"A",{href:!0,rel:!0});var pm=a(bo);Gc=i(pm,"tf.keras.Model"),pm.forEach(t),Jc=i(fi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fi.forEach(t),Yc=l(Qe),v(Zt.$$.fragment,Qe),Kc=l(Qe),K=s(Qe,"DIV",{class:!0});var Ce=a(K);v(xo.$$.fragment,Ce),Zc=l(Ce),jt=s(Ce,"P",{});var zs=a(jt);Xc=i(zs,"The "),us=s(zs,"A",{href:!0});var hm=a(us);Qc=i(hm,"TFMarianMTModel"),hm.forEach(t),ep=i(zs," forward method, overrides the "),ba=s(zs,"CODE",{});var um=a(ba);tp=i(um,"__call__"),um.forEach(t),np=i(zs," special method."),zs.forEach(t),op=l(Ce),v(Xt.$$.fragment,Ce),sp=l(Ce),wo=s(Ce,"P",{});var gi=a(wo);ap=i(gi,`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),zo=s(gi,"A",{href:!0,rel:!0});var mm=a(zo);rp=i(mm,"here"),mm.forEach(t),ip=i(gi,"."),gi.forEach(t),dp=l(Ce),xa=s(Ce,"P",{});var fm=a(xa);lp=i(fm,"Examples:"),fm.forEach(t),cp=l(Ce),v($o.$$.fragment,Ce),Ce.forEach(t),Qe.forEach(t),zr=l(n),qt=s(n,"H2",{class:!0});var _i=a(qt);Qt=s(_i,"A",{id:!0,class:!0,href:!0});var gm=a(Qt);wa=s(gm,"SPAN",{});var _m=a(wa);v(jo.$$.fragment,_m),_m.forEach(t),gm.forEach(t),pp=l(_i),za=s(_i,"SPAN",{});var vm=a(za);hp=i(vm,"FlaxMarianModel"),vm.forEach(t),_i.forEach(t),$r=l(n),R=s(n,"DIV",{class:!0});var Le=a(R);v(qo.$$.fragment,Le),up=l(Le),Eo=s(Le,"P",{});var vi=a(Eo);mp=i(vi,`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ms=s(vi,"A",{href:!0});var km=a(ms);fp=i(km,"FlaxPreTrainedModel"),km.forEach(t),gp=i(vi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vi.forEach(t),_p=l(Le),Fo=s(Le,"P",{});var ki=a(Fo);vp=i(ki,`This model is also a Flax Linen
`),Po=s(ki,"A",{href:!0,rel:!0});var Tm=a(Po);kp=i(Tm,"flax.nn.Module"),Tm.forEach(t),Tp=i(ki,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ki.forEach(t),Mp=l(Le),$a=s(Le,"P",{});var Mm=a($a);yp=i(Mm,"Finally, this model supports inherent JAX features such as:"),Mm.forEach(t),bp=l(Le),Be=s(Le,"UL",{});var ln=a(Be);ja=s(ln,"LI",{});var ym=a(ja);No=s(ym,"A",{href:!0,rel:!0});var bm=a(No);xp=i(bm,"Just-In-Time (JIT) compilation"),bm.forEach(t),ym.forEach(t),wp=l(ln),qa=s(ln,"LI",{});var xm=a(qa);Co=s(xm,"A",{href:!0,rel:!0});var wm=a(Co);zp=i(wm,"Automatic Differentiation"),wm.forEach(t),xm.forEach(t),$p=l(ln),Ea=s(ln,"LI",{});var zm=a(Ea);Lo=s(zm,"A",{href:!0,rel:!0});var $m=a(Lo);jp=i($m,"Vectorization"),$m.forEach(t),zm.forEach(t),qp=l(ln),Fa=s(ln,"LI",{});var jm=a(Fa);Io=s(jm,"A",{href:!0,rel:!0});var qm=a(Io);Ep=i(qm,"Parallelization"),qm.forEach(t),jm.forEach(t),ln.forEach(t),Fp=l(Le),ge=s(Le,"DIV",{class:!0});var et=a(ge);v(Ao.$$.fragment,et),Pp=l(et),Et=s(et,"P",{});var $s=a(Et);Np=i($s,"The "),Pa=s($s,"CODE",{});var Em=a(Pa);Cp=i(Em,"FlaxMarianPreTrainedModel"),Em.forEach(t),Lp=i($s," forward method, overrides the "),Na=s($s,"CODE",{});var Fm=a(Na);Ip=i(Fm,"__call__"),Fm.forEach(t),Ap=i($s," special method."),$s.forEach(t),Op=l(et),v(en.$$.fragment,et),Sp=l(et),Ca=s(et,"P",{});var Pm=a(Ca);Hp=i(Pm,"Example:"),Pm.forEach(t),Dp=l(et),v(Oo.$$.fragment,et),et.forEach(t),Le.forEach(t),jr=l(n),Ft=s(n,"H2",{class:!0});var Ti=a(Ft);tn=s(Ti,"A",{id:!0,class:!0,href:!0});var Nm=a(tn);La=s(Nm,"SPAN",{});var Cm=a(La);v(So.$$.fragment,Cm),Cm.forEach(t),Nm.forEach(t),Up=l(Ti),Ia=s(Ti,"SPAN",{});var Lm=a(Ia);Wp=i(Lm,"FlaxMarianMTModel"),Lm.forEach(t),Ti.forEach(t),qr=l(n),V=s(n,"DIV",{class:!0});var Ie=a(V);v(Ho.$$.fragment,Ie),Rp=l(Ie),Do=s(Ie,"P",{});var Mi=a(Do);Vp=i(Mi,`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),fs=s(Mi,"A",{href:!0});var Im=a(fs);Bp=i(Im,"FlaxPreTrainedModel"),Im.forEach(t),Gp=i(Mi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mi.forEach(t),Jp=l(Ie),Uo=s(Ie,"P",{});var yi=a(Uo);Yp=i(yi,`This model is also a Flax Linen
`),Wo=s(yi,"A",{href:!0,rel:!0});var Am=a(Wo);Kp=i(Am,"flax.nn.Module"),Am.forEach(t),Zp=i(yi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),yi.forEach(t),Xp=l(Ie),Aa=s(Ie,"P",{});var Om=a(Aa);Qp=i(Om,"Finally, this model supports inherent JAX features such as:"),Om.forEach(t),eh=l(Ie),Ge=s(Ie,"UL",{});var cn=a(Ge);Oa=s(cn,"LI",{});var Sm=a(Oa);Ro=s(Sm,"A",{href:!0,rel:!0});var Hm=a(Ro);th=i(Hm,"Just-In-Time (JIT) compilation"),Hm.forEach(t),Sm.forEach(t),nh=l(cn),Sa=s(cn,"LI",{});var Dm=a(Sa);Vo=s(Dm,"A",{href:!0,rel:!0});var Um=a(Vo);oh=i(Um,"Automatic Differentiation"),Um.forEach(t),Dm.forEach(t),sh=l(cn),Ha=s(cn,"LI",{});var Wm=a(Ha);Bo=s(Wm,"A",{href:!0,rel:!0});var Rm=a(Bo);ah=i(Rm,"Vectorization"),Rm.forEach(t),Wm.forEach(t),rh=l(cn),Da=s(cn,"LI",{});var Vm=a(Da);Go=s(Vm,"A",{href:!0,rel:!0});var Bm=a(Go);ih=i(Bm,"Parallelization"),Bm.forEach(t),Vm.forEach(t),cn.forEach(t),dh=l(Ie),_e=s(Ie,"DIV",{class:!0});var tt=a(_e);v(Jo.$$.fragment,tt),lh=l(tt),Pt=s(tt,"P",{});var js=a(Pt);ch=i(js,"The "),Ua=s(js,"CODE",{});var Gm=a(Ua);ph=i(Gm,"FlaxMarianPreTrainedModel"),Gm.forEach(t),hh=i(js," forward method, overrides the "),Wa=s(js,"CODE",{});var Jm=a(Wa);uh=i(Jm,"__call__"),Jm.forEach(t),mh=i(js," special method."),js.forEach(t),fh=l(tt),v(nn.$$.fragment,tt),gh=l(tt),Ra=s(tt,"P",{});var Ym=a(Ra);_h=i(Ym,"Example:"),Ym.forEach(t),vh=l(tt),v(Yo.$$.fragment,tt),tt.forEach(t),Ie.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(pf)),c(x,"id","marianmt"),c(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(x,"href","#marianmt"),c(f,"class","relative group"),c(Q,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),c(Q,"rel","nofollow"),c(E,"id","implementation-notes"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#implementation-notes"),c(C,"class","relative group"),c(re,"href","https://huggingface.co/Helsinki-NLP"),c(re,"rel","nofollow"),c(j,"href","https://researchportal.helsinki.fi/en/persons/j%C3%B6rg-tiedemann"),c(j,"rel","nofollow"),c(be,"href","https://marian-nmt.github.io/"),c(be,"rel","nofollow"),c(Zo,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(gn,"href","https://huggingface.co/sshleifer"),c(gn,"rel","nofollow"),c(Nt,"id","naming"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#naming"),c(ct,"class","relative group"),c(kn,"href","https://developers.google.com/admin-sdk/directory/v1/languages"),c(kn,"rel","nofollow"),c(Ct,"id","examples"),c(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ct,"href","#examples"),c(ht,"class","relative group"),c(Mn,"href","https://github.com/huggingface/transformers/blob/master/examples/legacy/seq2seq/train_distil_marian_enro.sh"),c(Mn,"rel","nofollow"),c(It,"id","multilingual-models"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#multilingual-models"),c(ut,"class","relative group"),c(zn,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-roa"),c(zn,"rel","nofollow"),c(jn,"href","https://github.com/Helsinki-NLP/Tatoeba-Challenge"),c(jn,"rel","nofollow"),c(Ot,"id","old-style-multilingual-models"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#old-style-multilingual-models"),c(mt,"class","relative group"),c(St,"id","transformers.MarianConfig"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.MarianConfig"),c(ft,"class","relative group"),c(ns,"href","/docs/transformers/main/en/model_doc/marian#transformers.MarianModel"),c(In,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-de"),c(In,"rel","nofollow"),c(os,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ss,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(le,"class","docstring"),c(Ht,"id","transformers.MarianTokenizer"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.MarianTokenizer"),c(vt,"class","relative group"),c(Dn,"href","https://github.com/google/sentencepiece"),c(Dn,"rel","nofollow"),c(as,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Dt,"class","docstring"),c(W,"class","docstring"),c(Ut,"id","transformers.MarianModel"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.MarianModel"),c(kt,"class","relative group"),c(rs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Yn,"rel","nofollow"),c(is,"href","/docs/transformers/main/en/model_doc/marian#transformers.MarianModel"),c(me,"class","docstring"),c(we,"class","docstring"),c(Rt,"id","transformers.MarianMTModel"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.MarianMTModel"),c(Mt,"class","relative group"),c(ds,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(no,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(no,"rel","nofollow"),c(ls,"href","/docs/transformers/main/en/model_doc/marian#transformers.MarianMTModel"),c(ao,"href","https://huggingface.co/models?search=Helsinki-NLP"),c(ao,"rel","nofollow"),c(Y,"class","docstring"),c(ze,"class","docstring"),c(Bt,"id","transformers.MarianForCausalLM"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#transformers.MarianForCausalLM"),c(bt,"class","relative group"),c(Je,"class","docstring"),c(xt,"class","docstring"),c(Gt,"id","transformers.TFMarianModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.TFMarianModel"),c(wt,"class","relative group"),c(cs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(go,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(go,"rel","nofollow"),c(ps,"href","/docs/transformers/main/en/model_doc/marian#transformers.TFMarianModel"),c(fe,"class","docstring"),c(ce,"class","docstring"),c(Kt,"id","transformers.TFMarianMTModel"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.TFMarianMTModel"),c($t,"class","relative group"),c(hs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(bo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(bo,"rel","nofollow"),c(us,"href","/docs/transformers/main/en/model_doc/marian#transformers.TFMarianMTModel"),c(zo,"href","https://huggingface.co/models?search=Helsinki-NLP"),c(zo,"rel","nofollow"),c(K,"class","docstring"),c(pe,"class","docstring"),c(Qt,"id","transformers.FlaxMarianModel"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.FlaxMarianModel"),c(qt,"class","relative group"),c(ms,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Po,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Po,"rel","nofollow"),c(No,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(No,"rel","nofollow"),c(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Co,"rel","nofollow"),c(Lo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Lo,"rel","nofollow"),c(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Io,"rel","nofollow"),c(ge,"class","docstring"),c(R,"class","docstring"),c(tn,"id","transformers.FlaxMarianMTModel"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.FlaxMarianMTModel"),c(Ft,"class","relative group"),c(fs,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Wo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Wo,"rel","nofollow"),c(Ro,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ro,"rel","nofollow"),c(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Vo,"rel","nofollow"),c(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Bo,"rel","nofollow"),c(Go,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Go,"rel","nofollow"),c(_e,"class","docstring"),c(V,"class","docstring")},m(n,p){e(document.head,u),h(n,z,p),h(n,f,p),e(f,x),e(x,w),k(b,w,null),e(f,g),e(f,$),e($,Ae),h(n,ue,p),h(n,q,p),e(q,ve),e(ve,X),e(q,Oe),e(q,Q),e(Q,ee),e(q,Se),h(n,je,p),h(n,G,p),e(G,A),h(n,qe,p),h(n,C,p),e(C,E),e(E,P),k(te,P,null),e(C,ne),e(C,ke),e(ke,He),h(n,J,p),h(n,F,p),e(F,Te),e(Te,N),e(N,De),e(F,oe),e(F,Me),e(Me,se),e(se,ae),e(se,re),e(re,Ue),e(se,O),e(F,We),e(F,S),e(S,H),e(H,m),e(H,j),e(j,ye),e(H,nt),e(H,be),e(be,D),e(H,ot),e(F,st),e(F,Re),e(Re,L),e(L,ie),e(F,at),e(F,Ve),e(Ve,U),e(U,rt),e(F,it),e(F,de),e(de,xe),e(xe,bi),e(xe,Zo),e(Zo,xi),e(xe,wi),e(de,zi),e(de,dt),e(dt,hn),e(hn,$i),e(hn,qs),e(qs,ji),e(hn,qi),e(dt,Ei),e(dt,un),e(un,Fi),e(un,Es),e(Es,Pi),e(un,Ni),e(dt,Ci),e(dt,lt),e(lt,Li),e(lt,Fs),e(Fs,Ii),e(lt,Ai),e(lt,Ps),e(Ps,Oi),e(lt,Si),e(F,Hi),e(F,Ns),e(Ns,mn),e(mn,Di),e(mn,Cs),e(Cs,Ui),e(mn,Wi),e(F,Ri),e(F,Ls),e(Ls,fn),e(fn,Vi),e(fn,gn),e(gn,Bi),e(fn,Gi),h(n,Za,p),h(n,ct,p),e(ct,Nt),e(Nt,Is),k(_n,Is,null),e(ct,Ji),e(ct,As),e(As,Yi),h(n,Xa,p),h(n,Ee,p),e(Ee,Xo),e(Xo,Ki),e(Xo,Os),e(Os,Zi),e(Ee,Xi),e(Ee,vn),e(vn,Qi),e(vn,kn),e(kn,ed),e(vn,td),e(Ee,nd),e(Ee,pt),e(pt,od),e(pt,Ss),e(Ss,sd),e(pt,ad),e(pt,Hs),e(Hs,rd),e(pt,id),e(Ee,dd),e(Ee,Ds),e(Ds,ld),h(n,Qa,p),h(n,ht,p),e(ht,Ct),e(Ct,Us),k(Tn,Us,null),e(ht,cd),e(ht,Ws),e(Ws,pd),h(n,er,p),h(n,Lt,p),e(Lt,Rs),e(Rs,hd),e(Lt,ud),e(Lt,Vs),e(Vs,Mn),e(Mn,md),h(n,tr,p),h(n,ut,p),e(ut,It),e(It,Bs),k(yn,Bs,null),e(ut,fd),e(ut,Gs),e(Gs,gd),h(n,nr,p),h(n,Fe,p),e(Fe,bn),e(bn,_d),e(bn,Js),e(Js,vd),e(bn,kd),e(Fe,Td),e(Fe,xn),e(xn,Md),e(xn,Ys),e(Ys,yd),e(xn,bd),e(Fe,xd),e(Fe,wn),e(wn,wd),e(wn,zn),e(zn,zd),e(wn,$d),e(Fe,jd),e(Fe,$n),e($n,qd),e($n,Ks),e(Ks,Ed),e($n,Fd),h(n,or,p),h(n,At,p),e(At,Pd),e(At,jn),e(jn,Nd),e(At,Cd),h(n,sr,p),k(qn,n,p),h(n,ar,p),h(n,Qo,p),e(Qo,Ld),h(n,rr,p),k(En,n,p),h(n,ir,p),h(n,mt,p),e(mt,Ot),e(Ot,Zs),k(Fn,Zs,null),e(mt,Id),e(mt,Xs),e(Xs,Ad),h(n,dr,p),h(n,es,p),e(es,Od),h(n,lr,p),k(Pn,n,p),h(n,cr,p),h(n,ts,p),e(ts,Sd),h(n,pr,p),k(Nn,n,p),h(n,hr,p),h(n,ft,p),e(ft,St),e(St,Qs),k(Cn,Qs,null),e(ft,Hd),e(ft,ea),e(ea,Dd),h(n,ur,p),h(n,le,p),k(Ln,le,null),e(le,Ud),e(le,gt),e(gt,Wd),e(gt,ns),e(ns,Rd),e(gt,Vd),e(gt,In),e(In,Bd),e(gt,Gd),e(le,Jd),e(le,_t),e(_t,Yd),e(_t,os),e(os,Kd),e(_t,Zd),e(_t,ss),e(ss,Xd),e(_t,Qd),e(le,el),e(le,ta),e(ta,tl),e(le,nl),k(An,le,null),h(n,mr,p),h(n,vt,p),e(vt,Ht),e(Ht,na),k(On,na,null),e(vt,ol),e(vt,oa),e(oa,sl),h(n,fr,p),h(n,W,p),k(Sn,W,null),e(W,al),e(W,Hn),e(Hn,rl),e(Hn,Dn),e(Dn,il),e(Hn,dl),e(W,ll),e(W,Un),e(Un,cl),e(Un,as),e(as,pl),e(Un,hl),e(W,ul),e(W,sa),e(sa,ml),e(W,fl),k(Wn,W,null),e(W,gl),e(W,Dt),k(Rn,Dt,null),e(Dt,_l),e(Dt,aa),e(aa,vl),h(n,gr,p),h(n,kt,p),e(kt,Ut),e(Ut,ra),k(Vn,ra,null),e(kt,kl),e(kt,ia),e(ia,Tl),h(n,_r,p),h(n,we,p),k(Bn,we,null),e(we,Ml),e(we,Gn),e(Gn,yl),e(Gn,rs),e(rs,bl),e(Gn,xl),e(we,wl),e(we,Jn),e(Jn,zl),e(Jn,Yn),e(Yn,$l),e(Jn,jl),e(we,ql),e(we,me),k(Kn,me,null),e(me,El),e(me,Tt),e(Tt,Fl),e(Tt,is),e(is,Pl),e(Tt,Nl),e(Tt,da),e(da,Cl),e(Tt,Ll),e(me,Il),k(Wt,me,null),e(me,Al),e(me,la),e(la,Ol),e(me,Sl),k(Zn,me,null),h(n,vr,p),h(n,Mt,p),e(Mt,Rt),e(Rt,ca),k(Xn,ca,null),e(Mt,Hl),e(Mt,pa),e(pa,Dl),h(n,kr,p),h(n,ze,p),k(Qn,ze,null),e(ze,Ul),e(ze,eo),e(eo,Wl),e(eo,ds),e(ds,Rl),e(eo,Vl),e(ze,Bl),e(ze,to),e(to,Gl),e(to,no),e(no,Jl),e(to,Yl),e(ze,Kl),e(ze,Y),k(oo,Y,null),e(Y,Zl),e(Y,yt),e(yt,Xl),e(yt,ls),e(ls,Ql),e(yt,ec),e(yt,ha),e(ha,tc),e(yt,nc),e(Y,oc),k(Vt,Y,null),e(Y,sc),e(Y,so),e(so,ac),e(so,ao),e(ao,rc),e(so,ic),e(Y,dc),e(Y,ua),e(ua,lc),e(Y,cc),k(ro,Y,null),h(n,Tr,p),h(n,bt,p),e(bt,Bt),e(Bt,ma),k(io,ma,null),e(bt,pc),e(bt,fa),e(fa,hc),h(n,Mr,p),h(n,xt,p),k(lo,xt,null),e(xt,uc),e(xt,Je),k(co,Je,null),e(Je,mc),e(Je,ga),e(ga,fc),e(Je,gc),k(po,Je,null),h(n,yr,p),h(n,wt,p),e(wt,Gt),e(Gt,_a),k(ho,_a,null),e(wt,_c),e(wt,va),e(va,vc),h(n,br,p),h(n,ce,p),k(uo,ce,null),e(ce,kc),e(ce,mo),e(mo,Tc),e(mo,cs),e(cs,Mc),e(mo,yc),e(ce,bc),e(ce,fo),e(fo,xc),e(fo,go),e(go,wc),e(fo,zc),e(ce,$c),k(Jt,ce,null),e(ce,jc),e(ce,fe),k(_o,fe,null),e(fe,qc),e(fe,zt),e(zt,Ec),e(zt,ps),e(ps,Fc),e(zt,Pc),e(zt,ka),e(ka,Nc),e(zt,Cc),e(fe,Lc),k(Yt,fe,null),e(fe,Ic),e(fe,Ta),e(Ta,Ac),e(fe,Oc),k(vo,fe,null),h(n,xr,p),h(n,$t,p),e($t,Kt),e(Kt,Ma),k(ko,Ma,null),e($t,Sc),e($t,ya),e(ya,Hc),h(n,wr,p),h(n,pe,p),k(To,pe,null),e(pe,Dc),e(pe,Mo),e(Mo,Uc),e(Mo,hs),e(hs,Wc),e(Mo,Rc),e(pe,Vc),e(pe,yo),e(yo,Bc),e(yo,bo),e(bo,Gc),e(yo,Jc),e(pe,Yc),k(Zt,pe,null),e(pe,Kc),e(pe,K),k(xo,K,null),e(K,Zc),e(K,jt),e(jt,Xc),e(jt,us),e(us,Qc),e(jt,ep),e(jt,ba),e(ba,tp),e(jt,np),e(K,op),k(Xt,K,null),e(K,sp),e(K,wo),e(wo,ap),e(wo,zo),e(zo,rp),e(wo,ip),e(K,dp),e(K,xa),e(xa,lp),e(K,cp),k($o,K,null),h(n,zr,p),h(n,qt,p),e(qt,Qt),e(Qt,wa),k(jo,wa,null),e(qt,pp),e(qt,za),e(za,hp),h(n,$r,p),h(n,R,p),k(qo,R,null),e(R,up),e(R,Eo),e(Eo,mp),e(Eo,ms),e(ms,fp),e(Eo,gp),e(R,_p),e(R,Fo),e(Fo,vp),e(Fo,Po),e(Po,kp),e(Fo,Tp),e(R,Mp),e(R,$a),e($a,yp),e(R,bp),e(R,Be),e(Be,ja),e(ja,No),e(No,xp),e(Be,wp),e(Be,qa),e(qa,Co),e(Co,zp),e(Be,$p),e(Be,Ea),e(Ea,Lo),e(Lo,jp),e(Be,qp),e(Be,Fa),e(Fa,Io),e(Io,Ep),e(R,Fp),e(R,ge),k(Ao,ge,null),e(ge,Pp),e(ge,Et),e(Et,Np),e(Et,Pa),e(Pa,Cp),e(Et,Lp),e(Et,Na),e(Na,Ip),e(Et,Ap),e(ge,Op),k(en,ge,null),e(ge,Sp),e(ge,Ca),e(Ca,Hp),e(ge,Dp),k(Oo,ge,null),h(n,jr,p),h(n,Ft,p),e(Ft,tn),e(tn,La),k(So,La,null),e(Ft,Up),e(Ft,Ia),e(Ia,Wp),h(n,qr,p),h(n,V,p),k(Ho,V,null),e(V,Rp),e(V,Do),e(Do,Vp),e(Do,fs),e(fs,Bp),e(Do,Gp),e(V,Jp),e(V,Uo),e(Uo,Yp),e(Uo,Wo),e(Wo,Kp),e(Uo,Zp),e(V,Xp),e(V,Aa),e(Aa,Qp),e(V,eh),e(V,Ge),e(Ge,Oa),e(Oa,Ro),e(Ro,th),e(Ge,nh),e(Ge,Sa),e(Sa,Vo),e(Vo,oh),e(Ge,sh),e(Ge,Ha),e(Ha,Bo),e(Bo,ah),e(Ge,rh),e(Ge,Da),e(Da,Go),e(Go,ih),e(V,dh),e(V,_e),k(Jo,_e,null),e(_e,lh),e(_e,Pt),e(Pt,ch),e(Pt,Ua),e(Ua,ph),e(Pt,hh),e(Pt,Wa),e(Wa,uh),e(Pt,mh),e(_e,fh),k(nn,_e,null),e(_e,gh),e(_e,Ra),e(Ra,_h),e(_e,vh),k(Yo,_e,null),Er=!0},p(n,[p]){const Ko={};p&2&&(Ko.$$scope={dirty:p,ctx:n}),Wt.$set(Ko);const Va={};p&2&&(Va.$$scope={dirty:p,ctx:n}),Vt.$set(Va);const Ba={};p&2&&(Ba.$$scope={dirty:p,ctx:n}),Jt.$set(Ba);const Ga={};p&2&&(Ga.$$scope={dirty:p,ctx:n}),Yt.$set(Ga);const on={};p&2&&(on.$$scope={dirty:p,ctx:n}),Zt.$set(on);const Ja={};p&2&&(Ja.$$scope={dirty:p,ctx:n}),Xt.$set(Ja);const Ya={};p&2&&(Ya.$$scope={dirty:p,ctx:n}),en.$set(Ya);const Ka={};p&2&&(Ka.$$scope={dirty:p,ctx:n}),nn.$set(Ka)},i(n){Er||(T(b.$$.fragment,n),T(te.$$.fragment,n),T(_n.$$.fragment,n),T(Tn.$$.fragment,n),T(yn.$$.fragment,n),T(qn.$$.fragment,n),T(En.$$.fragment,n),T(Fn.$$.fragment,n),T(Pn.$$.fragment,n),T(Nn.$$.fragment,n),T(Cn.$$.fragment,n),T(Ln.$$.fragment,n),T(An.$$.fragment,n),T(On.$$.fragment,n),T(Sn.$$.fragment,n),T(Wn.$$.fragment,n),T(Rn.$$.fragment,n),T(Vn.$$.fragment,n),T(Bn.$$.fragment,n),T(Kn.$$.fragment,n),T(Wt.$$.fragment,n),T(Zn.$$.fragment,n),T(Xn.$$.fragment,n),T(Qn.$$.fragment,n),T(oo.$$.fragment,n),T(Vt.$$.fragment,n),T(ro.$$.fragment,n),T(io.$$.fragment,n),T(lo.$$.fragment,n),T(co.$$.fragment,n),T(po.$$.fragment,n),T(ho.$$.fragment,n),T(uo.$$.fragment,n),T(Jt.$$.fragment,n),T(_o.$$.fragment,n),T(Yt.$$.fragment,n),T(vo.$$.fragment,n),T(ko.$$.fragment,n),T(To.$$.fragment,n),T(Zt.$$.fragment,n),T(xo.$$.fragment,n),T(Xt.$$.fragment,n),T($o.$$.fragment,n),T(jo.$$.fragment,n),T(qo.$$.fragment,n),T(Ao.$$.fragment,n),T(en.$$.fragment,n),T(Oo.$$.fragment,n),T(So.$$.fragment,n),T(Ho.$$.fragment,n),T(Jo.$$.fragment,n),T(nn.$$.fragment,n),T(Yo.$$.fragment,n),Er=!0)},o(n){M(b.$$.fragment,n),M(te.$$.fragment,n),M(_n.$$.fragment,n),M(Tn.$$.fragment,n),M(yn.$$.fragment,n),M(qn.$$.fragment,n),M(En.$$.fragment,n),M(Fn.$$.fragment,n),M(Pn.$$.fragment,n),M(Nn.$$.fragment,n),M(Cn.$$.fragment,n),M(Ln.$$.fragment,n),M(An.$$.fragment,n),M(On.$$.fragment,n),M(Sn.$$.fragment,n),M(Wn.$$.fragment,n),M(Rn.$$.fragment,n),M(Vn.$$.fragment,n),M(Bn.$$.fragment,n),M(Kn.$$.fragment,n),M(Wt.$$.fragment,n),M(Zn.$$.fragment,n),M(Xn.$$.fragment,n),M(Qn.$$.fragment,n),M(oo.$$.fragment,n),M(Vt.$$.fragment,n),M(ro.$$.fragment,n),M(io.$$.fragment,n),M(lo.$$.fragment,n),M(co.$$.fragment,n),M(po.$$.fragment,n),M(ho.$$.fragment,n),M(uo.$$.fragment,n),M(Jt.$$.fragment,n),M(_o.$$.fragment,n),M(Yt.$$.fragment,n),M(vo.$$.fragment,n),M(ko.$$.fragment,n),M(To.$$.fragment,n),M(Zt.$$.fragment,n),M(xo.$$.fragment,n),M(Xt.$$.fragment,n),M($o.$$.fragment,n),M(jo.$$.fragment,n),M(qo.$$.fragment,n),M(Ao.$$.fragment,n),M(en.$$.fragment,n),M(Oo.$$.fragment,n),M(So.$$.fragment,n),M(Ho.$$.fragment,n),M(Jo.$$.fragment,n),M(nn.$$.fragment,n),M(Yo.$$.fragment,n),Er=!1},d(n){t(u),n&&t(z),n&&t(f),y(b),n&&t(ue),n&&t(q),n&&t(je),n&&t(G),n&&t(qe),n&&t(C),y(te),n&&t(J),n&&t(F),n&&t(Za),n&&t(ct),y(_n),n&&t(Xa),n&&t(Ee),n&&t(Qa),n&&t(ht),y(Tn),n&&t(er),n&&t(Lt),n&&t(tr),n&&t(ut),y(yn),n&&t(nr),n&&t(Fe),n&&t(or),n&&t(At),n&&t(sr),y(qn,n),n&&t(ar),n&&t(Qo),n&&t(rr),y(En,n),n&&t(ir),n&&t(mt),y(Fn),n&&t(dr),n&&t(es),n&&t(lr),y(Pn,n),n&&t(cr),n&&t(ts),n&&t(pr),y(Nn,n),n&&t(hr),n&&t(ft),y(Cn),n&&t(ur),n&&t(le),y(Ln),y(An),n&&t(mr),n&&t(vt),y(On),n&&t(fr),n&&t(W),y(Sn),y(Wn),y(Rn),n&&t(gr),n&&t(kt),y(Vn),n&&t(_r),n&&t(we),y(Bn),y(Kn),y(Wt),y(Zn),n&&t(vr),n&&t(Mt),y(Xn),n&&t(kr),n&&t(ze),y(Qn),y(oo),y(Vt),y(ro),n&&t(Tr),n&&t(bt),y(io),n&&t(Mr),n&&t(xt),y(lo),y(co),y(po),n&&t(yr),n&&t(wt),y(ho),n&&t(br),n&&t(ce),y(uo),y(Jt),y(_o),y(Yt),y(vo),n&&t(xr),n&&t($t),y(ko),n&&t(wr),n&&t(pe),y(To),y(Zt),y(xo),y(Xt),y($o),n&&t(zr),n&&t(qt),y(jo),n&&t($r),n&&t(R),y(qo),y(Ao),y(en),y(Oo),n&&t(jr),n&&t(Ft),y(So),n&&t(qr),n&&t(V),y(Ho),y(Jo),y(nn),y(Yo)}}}const pf={local:"marianmt",sections:[{local:"implementation-notes",title:"Implementation Notes"},{local:"naming",title:"Naming"},{local:"examples",title:"Examples"},{local:"multilingual-models",title:"Multilingual Models"},{local:"old-style-multilingual-models",title:"Old Style Multi-Lingual Models"},{local:"transformers.MarianConfig",title:"MarianConfig"},{local:"transformers.MarianTokenizer",title:"MarianTokenizer"},{local:"transformers.MarianModel",title:"MarianModel"},{local:"transformers.MarianMTModel",title:"MarianMTModel"},{local:"transformers.MarianForCausalLM",title:"MarianForCausalLM"},{local:"transformers.TFMarianModel",title:"TFMarianModel"},{local:"transformers.TFMarianMTModel",title:"TFMarianMTModel"},{local:"transformers.FlaxMarianModel",title:"FlaxMarianModel"},{local:"transformers.FlaxMarianMTModel",title:"FlaxMarianMTModel"}],title:"MarianMT"};function hf(I){return ef(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vf extends Km{constructor(u){super();Zm(this,u,hf,cf,Xm,{})}}export{vf as default,pf as metadata};
