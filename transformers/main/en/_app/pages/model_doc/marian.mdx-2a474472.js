import{S as nf,i as of,s as sf,e as o,k as d,w as _,t as r,M as af,c as s,d as t,m as l,a,x as v,h as i,b as c,F as e,g as h,y as k,q as T,o as M,B as y,v as rf}from"../../chunks/vendor-6b77c823.js";import{T as pn}from"../../chunks/Tip-39098574.js";import{D as V}from"../../chunks/Docstring-abef54e3.js";import{C as $e}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as he}from"../../chunks/IconCopyLink-7a11ce68.js";function df(I){let u,z,f,x,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),x=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);x=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){h(b,u,g),e(u,z),e(u,f),e(f,x),e(u,w)},d(b){b&&t(u)}}}function lf(I){let u,z,f,x,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),x=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);x=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){h(b,u,g),e(u,z),e(u,f),e(f,x),e(u,w)},d(b){b&&t(u)}}}function cf(I){let u,z,f,x,w,b,g,$,Ae,ue,q,ve,X,Oe,Q,ee,Se,je,G,A,qe,C,E,F,te,ne,ke,He,J,P,Te,N,De,oe,Me,se,ae,re,Ue,O,We,S,H;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),f=d(),x=o("ul"),w=o("li"),b=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),$=o("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=d(),q=o("p"),ve=r("This second option is useful when using "),X=o("code"),Oe=r("tf.keras.Model.fit"),Q=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=o("code"),Se=r("model(inputs)"),je=r("."),G=d(),A=o("p"),qe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),C=d(),E=o("ul"),F=o("li"),te=r("a single Tensor with "),ne=o("code"),ke=r("input_ids"),He=r(" only and nothing else: "),J=o("code"),P=r("model(input_ids)"),Te=d(),N=o("li"),De=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=o("code"),Me=r("model([input_ids, attention_mask])"),se=r(" or "),ae=o("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),Ue=d(),O=o("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=o("code"),H=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=l(m),x=s(m,"UL",{});var ye=a(x);w=s(ye,"LI",{});var ot=a(w);b=i(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(t),g=l(ye),$=s(ye,"LI",{});var be=a($);Ae=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),ye.forEach(t),ue=l(m),q=s(m,"P",{});var D=a(q);ve=i(D,"This second option is useful when using "),X=s(D,"CODE",{});var st=a(X);Oe=i(st,"tf.keras.Model.fit"),st.forEach(t),Q=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=s(D,"CODE",{});var at=a(ee);Se=i(at,"model(inputs)"),at.forEach(t),je=i(D,"."),D.forEach(t),G=l(m),A=s(m,"P",{});var Re=a(A);qe=i(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(t),C=l(m),E=s(m,"UL",{});var L=a(E);F=s(L,"LI",{});var ie=a(F);te=i(ie,"a single Tensor with "),ne=s(ie,"CODE",{});var rt=a(ne);ke=i(rt,"input_ids"),rt.forEach(t),He=i(ie," only and nothing else: "),J=s(ie,"CODE",{});var Be=a(J);P=i(Be,"model(input_ids)"),Be.forEach(t),ie.forEach(t),Te=l(L),N=s(L,"LI",{});var U=a(N);De=i(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=s(U,"CODE",{});var it=a(oe);Me=i(it,"model([input_ids, attention_mask])"),it.forEach(t),se=i(U," or "),ae=s(U,"CODE",{});var dt=a(ae);re=i(dt,"model([input_ids, attention_mask, token_type_ids])"),dt.forEach(t),U.forEach(t),Ue=l(L),O=s(L,"LI",{});var de=a(O);We=i(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s(de,"CODE",{});var xe=a(S);H=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),de.forEach(t),L.forEach(t)},m(m,j){h(m,u,j),e(u,z),h(m,f,j),h(m,x,j),e(x,w),e(w,b),e(x,g),e(x,$),e($,Ae),h(m,ue,j),h(m,q,j),e(q,ve),e(q,X),e(X,Oe),e(q,Q),e(q,ee),e(ee,Se),e(q,je),h(m,G,j),h(m,A,j),e(A,qe),h(m,C,j),h(m,E,j),e(E,F),e(F,te),e(F,ne),e(ne,ke),e(F,He),e(F,J),e(J,P),e(E,Te),e(E,N),e(N,De),e(N,oe),e(oe,Me),e(N,se),e(N,ae),e(ae,re),e(E,Ue),e(E,O),e(O,We),e(O,S),e(S,H)},d(m){m&&t(u),m&&t(f),m&&t(x),m&&t(ue),m&&t(q),m&&t(G),m&&t(A),m&&t(C),m&&t(E)}}}function pf(I){let u,z,f,x,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),x=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);x=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){h(b,u,g),e(u,z),e(u,f),e(f,x),e(u,w)},d(b){b&&t(u)}}}function hf(I){let u,z,f,x,w,b,g,$,Ae,ue,q,ve,X,Oe,Q,ee,Se,je,G,A,qe,C,E,F,te,ne,ke,He,J,P,Te,N,De,oe,Me,se,ae,re,Ue,O,We,S,H;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),f=d(),x=o("ul"),w=o("li"),b=r("having all inputs as keyword arguments (like PyTorch models), or"),g=d(),$=o("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=d(),q=o("p"),ve=r("This second option is useful when using "),X=o("code"),Oe=r("tf.keras.Model.fit"),Q=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=o("code"),Se=r("model(inputs)"),je=r("."),G=d(),A=o("p"),qe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),C=d(),E=o("ul"),F=o("li"),te=r("a single Tensor with "),ne=o("code"),ke=r("input_ids"),He=r(" only and nothing else: "),J=o("code"),P=r("model(input_ids)"),Te=d(),N=o("li"),De=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=o("code"),Me=r("model([input_ids, attention_mask])"),se=r(" or "),ae=o("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),Ue=d(),O=o("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=o("code"),H=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=l(m),x=s(m,"UL",{});var ye=a(x);w=s(ye,"LI",{});var ot=a(w);b=i(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(t),g=l(ye),$=s(ye,"LI",{});var be=a($);Ae=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),ye.forEach(t),ue=l(m),q=s(m,"P",{});var D=a(q);ve=i(D,"This second option is useful when using "),X=s(D,"CODE",{});var st=a(X);Oe=i(st,"tf.keras.Model.fit"),st.forEach(t),Q=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=s(D,"CODE",{});var at=a(ee);Se=i(at,"model(inputs)"),at.forEach(t),je=i(D,"."),D.forEach(t),G=l(m),A=s(m,"P",{});var Re=a(A);qe=i(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(t),C=l(m),E=s(m,"UL",{});var L=a(E);F=s(L,"LI",{});var ie=a(F);te=i(ie,"a single Tensor with "),ne=s(ie,"CODE",{});var rt=a(ne);ke=i(rt,"input_ids"),rt.forEach(t),He=i(ie," only and nothing else: "),J=s(ie,"CODE",{});var Be=a(J);P=i(Be,"model(input_ids)"),Be.forEach(t),ie.forEach(t),Te=l(L),N=s(L,"LI",{});var U=a(N);De=i(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=s(U,"CODE",{});var it=a(oe);Me=i(it,"model([input_ids, attention_mask])"),it.forEach(t),se=i(U," or "),ae=s(U,"CODE",{});var dt=a(ae);re=i(dt,"model([input_ids, attention_mask, token_type_ids])"),dt.forEach(t),U.forEach(t),Ue=l(L),O=s(L,"LI",{});var de=a(O);We=i(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s(de,"CODE",{});var xe=a(S);H=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),de.forEach(t),L.forEach(t)},m(m,j){h(m,u,j),e(u,z),h(m,f,j),h(m,x,j),e(x,w),e(w,b),e(x,g),e(x,$),e($,Ae),h(m,ue,j),h(m,q,j),e(q,ve),e(q,X),e(X,Oe),e(q,Q),e(q,ee),e(ee,Se),e(q,je),h(m,G,j),h(m,A,j),e(A,qe),h(m,C,j),h(m,E,j),e(E,F),e(F,te),e(F,ne),e(ne,ke),e(F,He),e(F,J),e(J,P),e(E,Te),e(E,N),e(N,De),e(N,oe),e(oe,Me),e(N,se),e(N,ae),e(ae,re),e(E,Ue),e(E,O),e(O,We),e(O,S),e(S,H)},d(m){m&&t(u),m&&t(f),m&&t(x),m&&t(ue),m&&t(q),m&&t(G),m&&t(A),m&&t(C),m&&t(E)}}}function uf(I){let u,z,f,x,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),x=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);x=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){h(b,u,g),e(u,z),e(u,f),e(f,x),e(u,w)},d(b){b&&t(u)}}}function mf(I){let u,z,f,x,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),x=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);x=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){h(b,u,g),e(u,z),e(u,f),e(f,x),e(u,w)},d(b){b&&t(u)}}}function ff(I){let u,z,f,x,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),x=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var g=a(u);z=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var $=a(f);x=i($,"Module"),$.forEach(t),w=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){h(b,u,g),e(u,z),e(u,f),e(f,x),e(u,w)},d(b){b&&t(u)}}}function gf(I){let u,z,f,x,w,b,g,$,Ae,ue,q,ve,X,Oe,Q,ee,Se,je,G,A,qe,C,E,F,te,ne,ke,He,J,P,Te,N,De,oe,Me,se,ae,re,Ue,O,We,S,H,m,j,ye,ot,be,D,st,at,Re,L,ie,rt,Be,U,it,dt,de,xe,wi,Xo,zi,$i,ji,lt,hn,qi,Ps,Ei,Pi,Fi,un,Ni,Fs,Ci,Li,Ii,ct,Ai,Ns,Oi,Si,Cs,Hi,Di,Ui,Ls,mn,Wi,Is,Ri,Bi,Vi,As,fn,Gi,gn,Ji,Yi,er,pt,Ct,Os,_n,Ki,Ss,Zi,tr,Ee,Qo,Xi,Hs,Qi,ed,vn,td,kn,nd,od,sd,ht,ad,Ds,rd,id,Us,dd,ld,cd,Ws,pd,nr,ut,Lt,Rs,Tn,hd,Bs,ud,or,Je,Vs,md,fd,Gs,Mn,gd,_d,Js,yn,vd,sr,mt,It,Ys,bn,kd,Ks,Td,ar,Pe,xn,Md,Zs,yd,bd,xd,wn,wd,Xs,zd,$d,jd,zn,qd,$n,Ed,Pd,Fd,jn,Nd,Qs,Cd,Ld,rr,At,Id,qn,Ad,Od,ir,En,dr,es,Sd,lr,Pn,cr,ft,Ot,ea,Fn,Hd,ta,Dd,pr,ts,Ud,hr,Nn,ur,ns,Wd,mr,Cn,fr,gt,St,na,Ln,Rd,oa,Bd,gr,le,In,Vd,_t,Gd,os,Jd,Yd,An,Kd,Zd,Xd,vt,Qd,ss,el,tl,as,nl,ol,sl,sa,al,rl,On,_r,kt,Ht,aa,Sn,il,ra,dl,vr,W,Hn,ll,Dn,cl,Un,pl,hl,ul,Wn,ml,rs,fl,gl,_l,ia,vl,kl,Rn,Tl,Dt,Bn,Ml,da,yl,kr,Tt,Ut,la,Vn,bl,ca,xl,Tr,we,Gn,wl,Jn,zl,is,$l,jl,ql,Yn,El,Kn,Pl,Fl,Nl,me,Zn,Cl,Mt,Ll,ds,Il,Al,pa,Ol,Sl,Hl,Wt,Dl,ha,Ul,Wl,Xn,Mr,yt,Rt,ua,Qn,Rl,ma,Bl,yr,ze,eo,Vl,to,Gl,ls,Jl,Yl,Kl,no,Zl,oo,Xl,Ql,ec,Y,so,tc,bt,nc,cs,oc,sc,fa,ac,rc,ic,Bt,dc,ao,lc,ro,cc,pc,hc,ga,uc,mc,io,br,xt,Vt,_a,lo,fc,va,gc,xr,wt,co,_c,Ye,po,vc,ka,kc,Tc,ho,wr,zt,Gt,Ta,uo,Mc,Ma,yc,zr,ce,mo,bc,fo,xc,ps,wc,zc,$c,go,jc,_o,qc,Ec,Pc,Jt,Fc,fe,vo,Nc,$t,Cc,hs,Lc,Ic,ya,Ac,Oc,Sc,Yt,Hc,ba,Dc,Uc,ko,$r,jt,Kt,xa,To,Wc,wa,Rc,jr,pe,Mo,Bc,yo,Vc,us,Gc,Jc,Yc,bo,Kc,xo,Zc,Xc,Qc,Zt,ep,K,wo,tp,qt,np,ms,op,sp,za,ap,rp,ip,Xt,dp,zo,lp,$o,cp,pp,hp,$a,up,mp,jo,qr,Et,Qt,ja,qo,fp,qa,gp,Er,R,Eo,_p,Po,vp,fs,kp,Tp,Mp,Fo,yp,No,bp,xp,wp,Ea,zp,$p,Ve,Pa,Co,jp,qp,Fa,Lo,Ep,Pp,Na,Io,Fp,Np,Ca,Ao,Cp,Lp,ge,Oo,Ip,Pt,Ap,La,Op,Sp,Ia,Hp,Dp,Up,en,Wp,Aa,Rp,Bp,So,Pr,Ft,tn,Oa,Ho,Vp,Sa,Gp,Fr,B,Do,Jp,Uo,Yp,gs,Kp,Zp,Xp,Wo,Qp,Ro,eh,th,nh,Ha,oh,sh,Ge,Da,Bo,ah,rh,Ua,Vo,ih,dh,Wa,Go,lh,ch,Ra,Jo,ph,hh,_e,Yo,uh,Nt,mh,Ba,fh,gh,Va,_h,vh,kh,nn,Th,Ga,Mh,yh,Ko,Nr;return b=new he({}),te=new he({}),_n=new he({}),Tn=new he({}),bn=new he({}),En=new $e({props:{code:`from transformers import MarianMTModel, MarianTokenizer

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
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),Pn=new $e({props:{code:`from huggingface_hub import list_models

model_list = list_models()
org = "Helsinki-NLP"
model_ids = [x.modelId for x in model_list if x.modelId.startswith(org)]
suffix = [x.split("/")[1] for x in model_ids]
old_style_multi_models = [f"{org}/{s}" for s in suffix if s != s.lower()]`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

model_list = list_models()
org = <span class="hljs-string">&quot;Helsinki-NLP&quot;</span>
model_ids = [x.modelId <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_list <span class="hljs-keyword">if</span> x.modelId.startswith(org)]
suffix = [x.split(<span class="hljs-string">&quot;/&quot;</span>)[<span class="hljs-number">1</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_ids]
old_style_multi_models = [<span class="hljs-string">f&quot;<span class="hljs-subst">{org}</span>/<span class="hljs-subst">{s}</span>&quot;</span> <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> suffix <span class="hljs-keyword">if</span> s != s.lower()]`}}),Fn=new he({}),Nn=new $e({props:{code:`['Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU',
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
}`}}),Cn=new $e({props:{code:`from transformers import MarianMTModel, MarianTokenizer

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
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),Ln=new he({}),In=new V({props:{name:"class transformers.MarianConfig",anchor:"transformers.MarianConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"decoder_vocab_size",val:" = None"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 58100"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 58100"},{name:"eos_token_id",val:" = 0"},{name:"forced_eos_token_id",val:" = 0"},{name:"share_encoder_decoder_embeddings",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/configuration_marian.py#L35",parametersDescription:[{anchor:"transformers.MarianConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),On=new $e({props:{code:`from transformers import MarianModel, MarianConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Sn=new he({}),Hn=new V({props:{name:"class transformers.MarianTokenizer",anchor:"transformers.MarianTokenizer",parameters:[{name:"source_spm",val:""},{name:"target_spm",val:""},{name:"vocab",val:""},{name:"target_vocab_file",val:" = None"},{name:"source_lang",val:" = None"},{name:"target_lang",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"model_max_length",val:" = 512"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"separate_vocabs",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/tokenization_marian.py#L60",parametersDescription:[{anchor:"transformers.MarianTokenizer.source_spm",description:`<strong>source_spm</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Rn=new $e({props:{code:`from transformers import MarianTokenizer

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

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)  <span class="hljs-comment"># should work</span>`}}),Bn=new V({props:{name:"as_target_tokenizer",anchor:"transformers.MarianTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/tokenization_marian.py#L282"}}),Vn=new he({}),Gn=new V({props:{name:"class transformers.MarianModel",anchor:"transformers.MarianModel",parameters:[{name:"config",val:": MarianConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1083",parametersDescription:[{anchor:"transformers.MarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zn=new V({props:{name:"forward",anchor:"transformers.MarianModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple[torch.Tensor], transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1165",parametersDescription:[{anchor:"transformers.MarianModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),Wt=new pn({props:{$$slots:{default:[df]},$$scope:{ctx:I}}}),Xn=new $e({props:{code:`from transformers import MarianTokenizer, MarianModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">26</span>, <span class="hljs-number">512</span>]`}}),Qn=new he({}),eo=new V({props:{name:"class transformers.MarianMTModel",anchor:"transformers.MarianMTModel",parameters:[{name:"config",val:": MarianConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1267",parametersDescription:[{anchor:"transformers.MarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),so=new V({props:{name:"forward",anchor:"transformers.MarianMTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple[torch.Tensor], transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1390",parametersDescription:[{anchor:"transformers.MarianMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarianMTModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),Bt=new pn({props:{$$slots:{default:[lf]},$$scope:{ctx:I}}}),io=new $e({props:{code:`from transformers import MarianTokenizer, MarianMTModel

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
<span class="hljs-string">&quot;Where&#x27;s the bus stop?&quot;</span>`}}),lo=new he({}),co=new V({props:{name:"class transformers.MarianForCausalLM",anchor:"transformers.MarianForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1534"}}),po=new V({props:{name:"forward",anchor:"transformers.MarianForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1565",parametersDescription:[{anchor:"transformers.MarianForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),ho=new $e({props:{code:`from transformers import MarianTokenizer, MarianForCausalLM

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
<span class="hljs-literal">True</span>`}}),uo=new he({}),mo=new V({props:{name:"class transformers.TFMarianModel",anchor:"transformers.TFMarianModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_tf_marian.py#L1157",parametersDescription:[{anchor:"transformers.TFMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jt=new pn({props:{$$slots:{default:[cf]},$$scope:{ctx:I}}}),vo=new V({props:{name:"call",anchor:"transformers.TFMarianModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_tf_marian.py#L1169",parametersDescription:[{anchor:"transformers.TFMarianModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
`}}),Yt=new pn({props:{$$slots:{default:[pf]},$$scope:{ctx:I}}}),ko=new $e({props:{code:`from transformers import MarianTokenizer, TFMarianModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),To=new he({}),Mo=new V({props:{name:"class transformers.TFMarianMTModel",anchor:"transformers.TFMarianMTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_tf_marian.py#L1243",parametersDescription:[{anchor:"transformers.TFMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zt=new pn({props:{$$slots:{default:[hf]},$$scope:{ctx:I}}}),wo=new V({props:{name:"call",anchor:"transformers.TFMarianMTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_tf_marian.py#L1276",parametersDescription:[{anchor:"transformers.TFMarianMTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianMTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianMTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
`}}),Xt=new pn({props:{$$slots:{default:[uf]},$$scope:{ctx:I}}}),jo=new $e({props:{code:`from transformers import MarianTokenizer, TFMarianMTModel
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
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`}}),qo=new he({}),Eo=new V({props:{name:"class transformers.FlaxMarianModel",anchor:"transformers.FlaxMarianModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_flax_marian.py#L1196",parametersDescription:[{anchor:"transformers.FlaxMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Oo=new V({props:{name:"__call__",anchor:"transformers.FlaxMarianPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_flax_marian.py#L1131",parametersDescription:[{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),en=new pn({props:{$$slots:{default:[mf]},$$scope:{ctx:I}}}),So=new $e({props:{code:`from transformers import MarianTokenizer, FlaxMarianModel

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = FlaxMarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ho=new he({}),Do=new V({props:{name:"class transformers.FlaxMarianMTModel",anchor:"transformers.FlaxMarianMTModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_flax_marian.py#L1282",parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianMTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Yo=new V({props:{name:"__call__",anchor:"transformers.FlaxMarianPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/marian/modeling_flax_marian.py#L1131",parametersDescription:[{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),nn=new pn({props:{$$slots:{default:[ff]},$$scope:{ctx:I}}}),Ko=new $e({props:{code:`from transformers import MarianTokenizer, FlaxMarianMTModel

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
and assign @patrickvonplaten.`),je=d(),G=o("p"),A=r("Translations should be similar, but not identical to output in the test set linked to in each model card."),qe=d(),C=o("h2"),E=o("a"),F=o("span"),_(te.$$.fragment),ne=d(),ke=o("span"),He=r("Implementation Notes"),J=d(),P=o("ul"),Te=o("li"),N=o("p"),De=r("Each model is about 298 MB on disk, there are more than 1,000 models."),oe=d(),Me=o("li"),se=o("p"),ae=r("The list of supported language pairs can be found "),re=o("a"),Ue=r("here"),O=r("."),We=d(),S=o("li"),H=o("p"),m=r("Models were originally trained by "),j=o("a"),ye=r("J\xF6rg Tiedemann"),ot=r(" using the "),be=o("a"),D=r("Marian"),st=r(" C++ library, which supports fast training and translation."),at=d(),Re=o("li"),L=o("p"),ie=r(`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),rt=d(),Be=o("li"),U=o("p"),it=r("The 80 opus models that require BPE preprocessing are not supported."),dt=d(),de=o("li"),xe=o("p"),wi=r("The modeling code is the same as "),Xo=o("a"),zi=r("BartForConditionalGeneration"),$i=r(" with a few minor modifications:"),ji=d(),lt=o("ul"),hn=o("li"),qi=r("static (sinusoid) positional embeddings ("),Ps=o("code"),Ei=r("MarianConfig.static_position_embeddings=True"),Pi=r(")"),Fi=d(),un=o("li"),Ni=r("no layernorm_embedding ("),Fs=o("code"),Ci=r("MarianConfig.normalize_embedding=False"),Li=r(")"),Ii=d(),ct=o("li"),Ai=r("the model starts generating with "),Ns=o("code"),Oi=r("pad_token_id"),Si=r(` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Cs=o("code"),Hi=r("<s/>"),Di=r("),"),Ui=d(),Ls=o("li"),mn=o("p"),Wi=r("Code to bulk convert models can be found in "),Is=o("code"),Ri=r("convert_marian_to_pytorch.py"),Bi=r("."),Vi=d(),As=o("li"),fn=o("p"),Gi=r("This model was contributed by "),gn=o("a"),Ji=r("sshleifer"),Yi=r("."),er=d(),pt=o("h2"),Ct=o("a"),Os=o("span"),_(_n.$$.fragment),Ki=d(),Ss=o("span"),Zi=r("Naming"),tr=d(),Ee=o("ul"),Qo=o("li"),Xi=r("All model names use the following format: "),Hs=o("code"),Qi=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),ed=d(),vn=o("li"),td=r("The language codes used to name models are inconsistent. Two digit codes can usually be found "),kn=o("a"),nd=r("here"),od=r(`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),sd=d(),ht=o("li"),ad=r("Codes formatted like "),Ds=o("code"),rd=r("es_AR"),id=r(" are usually "),Us=o("code"),dd=r("code_{region}"),ld=r(". That one is Spanish from Argentina."),cd=d(),Ws=o("li"),pd=r(`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),nr=d(),ut=o("h2"),Lt=o("a"),Rs=o("span"),_(Tn.$$.fragment),hd=d(),Bs=o("span"),ud=r("Examples"),or=d(),Je=o("ul"),Vs=o("li"),md=r(`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),fd=d(),Gs=o("li"),Mn=o("a"),gd=r("Fine-tune on GPU"),_d=d(),Js=o("li"),yn=o("a"),vd=r("Fine-tune on GPU with pytorch-lightning"),sr=d(),mt=o("h2"),It=o("a"),Ys=o("span"),_(bn.$$.fragment),kd=d(),Ks=o("span"),Td=r("Multilingual Models"),ar=d(),Pe=o("ul"),xn=o("li"),Md=r("All model names use the following format: "),Zs=o("code"),yd=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),bd=r(":"),xd=d(),wn=o("li"),wd=r(`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Xs=o("code"),zd=r("src_text"),$d=r("."),jd=d(),zn=o("li"),qd=r("You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),$n=o("a"),Ed=r("opus-mt-en-roa"),Pd=r("."),Fd=d(),jn=o("li"),Nd=r("Note that if a model is only multilingual on the source side, like "),Qs=o("code"),Cd=r("Helsinki-NLP/opus-mt-roa-en"),Ld=r(`, no language
codes are required.`),rr=d(),At=o("p"),Id=r("New multi-lingual models from the "),qn=o("a"),Ad=r("Tatoeba-Challenge repo"),Od=r(`
require 3 character language codes:`),ir=d(),_(En.$$.fragment),dr=d(),es=o("p"),Sd=r("Here is the code to see all available pretrained models on the hub:"),lr=d(),_(Pn.$$.fragment),cr=d(),ft=o("h2"),Ot=o("a"),ea=o("span"),_(Fn.$$.fragment),Hd=d(),ta=o("span"),Dd=r("Old Style Multi-Lingual Models"),pr=d(),ts=o("p"),Ud=r(`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),hr=d(),_(Nn.$$.fragment),ur=d(),ns=o("p"),Wd=r("Example of translating english to many romance languages, using old-style 2 character language codes"),mr=d(),_(Cn.$$.fragment),fr=d(),gt=o("h2"),St=o("a"),na=o("span"),_(Ln.$$.fragment),Rd=d(),oa=o("span"),Bd=r("MarianConfig"),gr=d(),le=o("div"),_(In.$$.fragment),Vd=d(),_t=o("p"),Gd=r("This is the configuration class to store the configuration of a "),os=o("a"),Jd=r("MarianModel"),Yd=r(`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),An=o("a"),Kd=r("Helsinki-NLP/opus-mt-en-de"),Zd=r(" architecture."),Xd=d(),vt=o("p"),Qd=r("Configuration objects inherit from "),ss=o("a"),el=r("PretrainedConfig"),tl=r(` and can be used to control the model outputs. Read the
documentation from `),as=o("a"),nl=r("PretrainedConfig"),ol=r(" for more information."),sl=d(),sa=o("p"),al=r("Examples:"),rl=d(),_(On.$$.fragment),_r=d(),kt=o("h2"),Ht=o("a"),aa=o("span"),_(Sn.$$.fragment),il=d(),ra=o("span"),dl=r("MarianTokenizer"),vr=d(),W=o("div"),_(Hn.$$.fragment),ll=d(),Dn=o("p"),cl=r("Construct a Marian tokenizer. Based on "),Un=o("a"),pl=r("SentencePiece"),hl=r("."),ul=d(),Wn=o("p"),ml=r("This tokenizer inherits from "),rs=o("a"),fl=r("PreTrainedTokenizer"),gl=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),_l=d(),ia=o("p"),vl=r("Examples:"),kl=d(),_(Rn.$$.fragment),Tl=d(),Dt=o("div"),_(Bn.$$.fragment),Ml=d(),da=o("p"),yl=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),kr=d(),Tt=o("h2"),Ut=o("a"),la=o("span"),_(Vn.$$.fragment),bl=d(),ca=o("span"),xl=r("MarianModel"),Tr=d(),we=o("div"),_(Gn.$$.fragment),wl=d(),Jn=o("p"),zl=r(`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),is=o("a"),$l=r("PreTrainedModel"),jl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ql=d(),Yn=o("p"),El=r("This model is also a PyTorch "),Kn=o("a"),Pl=r("torch.nn.Module"),Fl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nl=d(),me=o("div"),_(Zn.$$.fragment),Cl=d(),Mt=o("p"),Ll=r("The "),ds=o("a"),Il=r("MarianModel"),Al=r(" forward method, overrides the "),pa=o("code"),Ol=r("__call__"),Sl=r(" special method."),Hl=d(),_(Wt.$$.fragment),Dl=d(),ha=o("p"),Ul=r("Example:"),Wl=d(),_(Xn.$$.fragment),Mr=d(),yt=o("h2"),Rt=o("a"),ua=o("span"),_(Qn.$$.fragment),Rl=d(),ma=o("span"),Bl=r("MarianMTModel"),yr=d(),ze=o("div"),_(eo.$$.fragment),Vl=d(),to=o("p"),Gl=r(`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),ls=o("a"),Jl=r("PreTrainedModel"),Yl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kl=d(),no=o("p"),Zl=r("This model is also a PyTorch "),oo=o("a"),Xl=r("torch.nn.Module"),Ql=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ec=d(),Y=o("div"),_(so.$$.fragment),tc=d(),bt=o("p"),nc=r("The "),cs=o("a"),oc=r("MarianMTModel"),sc=r(" forward method, overrides the "),fa=o("code"),ac=r("__call__"),rc=r(" special method."),ic=d(),_(Bt.$$.fragment),dc=d(),ao=o("p"),lc=r(`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),ro=o("a"),cc=r("here"),pc=r("."),hc=d(),ga=o("p"),uc=r("Examples:"),mc=d(),_(io.$$.fragment),br=d(),xt=o("h2"),Vt=o("a"),_a=o("span"),_(lo.$$.fragment),fc=d(),va=o("span"),gc=r("MarianForCausalLM"),xr=d(),wt=o("div"),_(co.$$.fragment),_c=d(),Ye=o("div"),_(po.$$.fragment),vc=d(),ka=o("p"),kc=r("Example:"),Tc=d(),_(ho.$$.fragment),wr=d(),zt=o("h2"),Gt=o("a"),Ta=o("span"),_(uo.$$.fragment),Mc=d(),Ma=o("span"),yc=r("TFMarianModel"),zr=d(),ce=o("div"),_(mo.$$.fragment),bc=d(),fo=o("p"),xc=r(`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ps=o("a"),wc=r("TFPreTrainedModel"),zc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$c=d(),go=o("p"),jc=r("This model is also a "),_o=o("a"),qc=r("tf.keras.Model"),Ec=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pc=d(),_(Jt.$$.fragment),Fc=d(),fe=o("div"),_(vo.$$.fragment),Nc=d(),$t=o("p"),Cc=r("The "),hs=o("a"),Lc=r("TFMarianModel"),Ic=r(" forward method, overrides the "),ya=o("code"),Ac=r("__call__"),Oc=r(" special method."),Sc=d(),_(Yt.$$.fragment),Hc=d(),ba=o("p"),Dc=r("Example:"),Uc=d(),_(ko.$$.fragment),$r=d(),jt=o("h2"),Kt=o("a"),xa=o("span"),_(To.$$.fragment),Wc=d(),wa=o("span"),Rc=r("TFMarianMTModel"),jr=d(),pe=o("div"),_(Mo.$$.fragment),Bc=d(),yo=o("p"),Vc=r(`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),us=o("a"),Gc=r("TFPreTrainedModel"),Jc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yc=d(),bo=o("p"),Kc=r("This model is also a "),xo=o("a"),Zc=r("tf.keras.Model"),Xc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qc=d(),_(Zt.$$.fragment),ep=d(),K=o("div"),_(wo.$$.fragment),tp=d(),qt=o("p"),np=r("The "),ms=o("a"),op=r("TFMarianMTModel"),sp=r(" forward method, overrides the "),za=o("code"),ap=r("__call__"),rp=r(" special method."),ip=d(),_(Xt.$$.fragment),dp=d(),zo=o("p"),lp=r(`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),$o=o("a"),cp=r("here"),pp=r("."),hp=d(),$a=o("p"),up=r("Examples:"),mp=d(),_(jo.$$.fragment),qr=d(),Et=o("h2"),Qt=o("a"),ja=o("span"),_(qo.$$.fragment),fp=d(),qa=o("span"),gp=r("FlaxMarianModel"),Er=d(),R=o("div"),_(Eo.$$.fragment),_p=d(),Po=o("p"),vp=r(`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),fs=o("a"),kp=r("FlaxPreTrainedModel"),Tp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mp=d(),Fo=o("p"),yp=r(`This model is also a Flax Linen
`),No=o("a"),bp=r("flax.nn.Module"),xp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wp=d(),Ea=o("p"),zp=r("Finally, this model supports inherent JAX features such as:"),$p=d(),Ve=o("ul"),Pa=o("li"),Co=o("a"),jp=r("Just-In-Time (JIT) compilation"),qp=d(),Fa=o("li"),Lo=o("a"),Ep=r("Automatic Differentiation"),Pp=d(),Na=o("li"),Io=o("a"),Fp=r("Vectorization"),Np=d(),Ca=o("li"),Ao=o("a"),Cp=r("Parallelization"),Lp=d(),ge=o("div"),_(Oo.$$.fragment),Ip=d(),Pt=o("p"),Ap=r("The "),La=o("code"),Op=r("FlaxMarianPreTrainedModel"),Sp=r("forward method, overrides the "),Ia=o("code"),Hp=r("__call__"),Dp=r(" special method."),Up=d(),_(en.$$.fragment),Wp=d(),Aa=o("p"),Rp=r("Example:"),Bp=d(),_(So.$$.fragment),Pr=d(),Ft=o("h2"),tn=o("a"),Oa=o("span"),_(Ho.$$.fragment),Vp=d(),Sa=o("span"),Gp=r("FlaxMarianMTModel"),Fr=d(),B=o("div"),_(Do.$$.fragment),Jp=d(),Uo=o("p"),Yp=r(`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),gs=o("a"),Kp=r("FlaxPreTrainedModel"),Zp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp=d(),Wo=o("p"),Qp=r(`This model is also a Flax Linen
`),Ro=o("a"),eh=r("flax.nn.Module"),th=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),nh=d(),Ha=o("p"),oh=r("Finally, this model supports inherent JAX features such as:"),sh=d(),Ge=o("ul"),Da=o("li"),Bo=o("a"),ah=r("Just-In-Time (JIT) compilation"),rh=d(),Ua=o("li"),Vo=o("a"),ih=r("Automatic Differentiation"),dh=d(),Wa=o("li"),Go=o("a"),lh=r("Vectorization"),ch=d(),Ra=o("li"),Jo=o("a"),ph=r("Parallelization"),hh=d(),_e=o("div"),_(Yo.$$.fragment),uh=d(),Nt=o("p"),mh=r("The "),Ba=o("code"),fh=r("FlaxMarianPreTrainedModel"),gh=r("forward method, overrides the "),Va=o("code"),_h=r("__call__"),vh=r(" special method."),kh=d(),_(nn.$$.fragment),Th=d(),Ga=o("p"),Mh=r("Example:"),yh=d(),_(Ko.$$.fragment),this.h()},l(n){const p=af('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(n),f=s(n,"H1",{class:!0});var Zo=a(f);x=s(Zo,"A",{id:!0,class:!0,href:!0});var Ja=a(x);w=s(Ja,"SPAN",{});var Ya=a(w);v(b.$$.fragment,Ya),Ya.forEach(t),Ja.forEach(t),g=l(Zo),$=s(Zo,"SPAN",{});var Ka=a($);Ae=i(Ka,"MarianMT"),Ka.forEach(t),Zo.forEach(t),ue=l(n),q=s(n,"P",{});var on=a(q);ve=s(on,"STRONG",{});var Za=a(ve);X=i(Za,"Bugs:"),Za.forEach(t),Oe=i(on," If you see something strange, file a "),Q=s(on,"A",{href:!0,rel:!0});var Xa=a(Q);ee=i(Xa,"Github Issue"),Xa.forEach(t),Se=i(on,`
and assign @patrickvonplaten.`),on.forEach(t),je=l(n),G=s(n,"P",{});var Qa=a(G);A=i(Qa,"Translations should be similar, but not identical to output in the test set linked to in each model card."),Qa.forEach(t),qe=l(n),C=s(n,"H2",{class:!0});var Cr=a(C);E=s(Cr,"A",{id:!0,class:!0,href:!0});var xh=a(E);F=s(xh,"SPAN",{});var wh=a(F);v(te.$$.fragment,wh),wh.forEach(t),xh.forEach(t),ne=l(Cr),ke=s(Cr,"SPAN",{});var zh=a(ke);He=i(zh,"Implementation Notes"),zh.forEach(t),Cr.forEach(t),J=l(n),P=s(n,"UL",{});var Z=a(P);Te=s(Z,"LI",{});var $h=a(Te);N=s($h,"P",{});var jh=a(N);De=i(jh,"Each model is about 298 MB on disk, there are more than 1,000 models."),jh.forEach(t),$h.forEach(t),oe=l(Z),Me=s(Z,"LI",{});var qh=a(Me);se=s(qh,"P",{});var Lr=a(se);ae=i(Lr,"The list of supported language pairs can be found "),re=s(Lr,"A",{href:!0,rel:!0});var Eh=a(re);Ue=i(Eh,"here"),Eh.forEach(t),O=i(Lr,"."),Lr.forEach(t),qh.forEach(t),We=l(Z),S=s(Z,"LI",{});var Ph=a(S);H=s(Ph,"P",{});var _s=a(H);m=i(_s,"Models were originally trained by "),j=s(_s,"A",{href:!0,rel:!0});var Fh=a(j);ye=i(Fh,"J\xF6rg Tiedemann"),Fh.forEach(t),ot=i(_s," using the "),be=s(_s,"A",{href:!0,rel:!0});var Nh=a(be);D=i(Nh,"Marian"),Nh.forEach(t),st=i(_s," C++ library, which supports fast training and translation."),_s.forEach(t),Ph.forEach(t),at=l(Z),Re=s(Z,"LI",{});var Ch=a(Re);L=s(Ch,"P",{});var Lh=a(L);ie=i(Lh,`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),Lh.forEach(t),Ch.forEach(t),rt=l(Z),Be=s(Z,"LI",{});var Ih=a(Be);U=s(Ih,"P",{});var Ah=a(U);it=i(Ah,"The 80 opus models that require BPE preprocessing are not supported."),Ah.forEach(t),Ih.forEach(t),dt=l(Z),de=s(Z,"LI",{});var Ir=a(de);xe=s(Ir,"P",{});var Ar=a(xe);wi=i(Ar,"The modeling code is the same as "),Xo=s(Ar,"A",{href:!0});var Oh=a(Xo);zi=i(Oh,"BartForConditionalGeneration"),Oh.forEach(t),$i=i(Ar," with a few minor modifications:"),Ar.forEach(t),ji=l(Ir),lt=s(Ir,"UL",{});var vs=a(lt);hn=s(vs,"LI",{});var Or=a(hn);qi=i(Or,"static (sinusoid) positional embeddings ("),Ps=s(Or,"CODE",{});var Sh=a(Ps);Ei=i(Sh,"MarianConfig.static_position_embeddings=True"),Sh.forEach(t),Pi=i(Or,")"),Or.forEach(t),Fi=l(vs),un=s(vs,"LI",{});var Sr=a(un);Ni=i(Sr,"no layernorm_embedding ("),Fs=s(Sr,"CODE",{});var Hh=a(Fs);Ci=i(Hh,"MarianConfig.normalize_embedding=False"),Hh.forEach(t),Li=i(Sr,")"),Sr.forEach(t),Ii=l(vs),ct=s(vs,"LI",{});var ks=a(ct);Ai=i(ks,"the model starts generating with "),Ns=s(ks,"CODE",{});var Dh=a(Ns);Oi=i(Dh,"pad_token_id"),Dh.forEach(t),Si=i(ks,` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Cs=s(ks,"CODE",{});var Uh=a(Cs);Hi=i(Uh,"<s/>"),Uh.forEach(t),Di=i(ks,"),"),ks.forEach(t),vs.forEach(t),Ir.forEach(t),Ui=l(Z),Ls=s(Z,"LI",{});var Wh=a(Ls);mn=s(Wh,"P",{});var Hr=a(mn);Wi=i(Hr,"Code to bulk convert models can be found in "),Is=s(Hr,"CODE",{});var Rh=a(Is);Ri=i(Rh,"convert_marian_to_pytorch.py"),Rh.forEach(t),Bi=i(Hr,"."),Hr.forEach(t),Wh.forEach(t),Vi=l(Z),As=s(Z,"LI",{});var Bh=a(As);fn=s(Bh,"P",{});var Dr=a(fn);Gi=i(Dr,"This model was contributed by "),gn=s(Dr,"A",{href:!0,rel:!0});var Vh=a(gn);Ji=i(Vh,"sshleifer"),Vh.forEach(t),Yi=i(Dr,"."),Dr.forEach(t),Bh.forEach(t),Z.forEach(t),er=l(n),pt=s(n,"H2",{class:!0});var Ur=a(pt);Ct=s(Ur,"A",{id:!0,class:!0,href:!0});var Gh=a(Ct);Os=s(Gh,"SPAN",{});var Jh=a(Os);v(_n.$$.fragment,Jh),Jh.forEach(t),Gh.forEach(t),Ki=l(Ur),Ss=s(Ur,"SPAN",{});var Yh=a(Ss);Zi=i(Yh,"Naming"),Yh.forEach(t),Ur.forEach(t),tr=l(n),Ee=s(n,"UL",{});var sn=a(Ee);Qo=s(sn,"LI",{});var bh=a(Qo);Xi=i(bh,"All model names use the following format: "),Hs=s(bh,"CODE",{});var Kh=a(Hs);Qi=i(Kh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),Kh.forEach(t),bh.forEach(t),ed=l(sn),vn=s(sn,"LI",{});var Wr=a(vn);td=i(Wr,"The language codes used to name models are inconsistent. Two digit codes can usually be found "),kn=s(Wr,"A",{href:!0,rel:!0});var Zh=a(kn);nd=i(Zh,"here"),Zh.forEach(t),od=i(Wr,`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),Wr.forEach(t),sd=l(sn),ht=s(sn,"LI",{});var Ts=a(ht);ad=i(Ts,"Codes formatted like "),Ds=s(Ts,"CODE",{});var Xh=a(Ds);rd=i(Xh,"es_AR"),Xh.forEach(t),id=i(Ts," are usually "),Us=s(Ts,"CODE",{});var Qh=a(Us);dd=i(Qh,"code_{region}"),Qh.forEach(t),ld=i(Ts,". That one is Spanish from Argentina."),Ts.forEach(t),cd=l(sn),Ws=s(sn,"LI",{});var eu=a(Ws);pd=i(eu,`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),eu.forEach(t),sn.forEach(t),nr=l(n),ut=s(n,"H2",{class:!0});var Rr=a(ut);Lt=s(Rr,"A",{id:!0,class:!0,href:!0});var tu=a(Lt);Rs=s(tu,"SPAN",{});var nu=a(Rs);v(Tn.$$.fragment,nu),nu.forEach(t),tu.forEach(t),hd=l(Rr),Bs=s(Rr,"SPAN",{});var ou=a(Bs);ud=i(ou,"Examples"),ou.forEach(t),Rr.forEach(t),or=l(n),Je=s(n,"UL",{});var Ms=a(Je);Vs=s(Ms,"LI",{});var su=a(Vs);md=i(su,`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),su.forEach(t),fd=l(Ms),Gs=s(Ms,"LI",{});var au=a(Gs);Mn=s(au,"A",{href:!0,rel:!0});var ru=a(Mn);gd=i(ru,"Fine-tune on GPU"),ru.forEach(t),au.forEach(t),_d=l(Ms),Js=s(Ms,"LI",{});var iu=a(Js);yn=s(iu,"A",{href:!0,rel:!0});var du=a(yn);vd=i(du,"Fine-tune on GPU with pytorch-lightning"),du.forEach(t),iu.forEach(t),Ms.forEach(t),sr=l(n),mt=s(n,"H2",{class:!0});var Br=a(mt);It=s(Br,"A",{id:!0,class:!0,href:!0});var lu=a(It);Ys=s(lu,"SPAN",{});var cu=a(Ys);v(bn.$$.fragment,cu),cu.forEach(t),lu.forEach(t),kd=l(Br),Ks=s(Br,"SPAN",{});var pu=a(Ks);Td=i(pu,"Multilingual Models"),pu.forEach(t),Br.forEach(t),ar=l(n),Pe=s(n,"UL",{});var an=a(Pe);xn=s(an,"LI",{});var Vr=a(xn);Md=i(Vr,"All model names use the following format: "),Zs=s(Vr,"CODE",{});var hu=a(Zs);yd=i(hu,"Helsinki-NLP/opus-mt-{src}-{tgt}"),hu.forEach(t),bd=i(Vr,":"),Vr.forEach(t),xd=l(an),wn=s(an,"LI",{});var Gr=a(wn);wd=i(Gr,`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Xs=s(Gr,"CODE",{});var uu=a(Xs);zd=i(uu,"src_text"),uu.forEach(t),$d=i(Gr,"."),Gr.forEach(t),jd=l(an),zn=s(an,"LI",{});var Jr=a(zn);qd=i(Jr,"You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),$n=s(Jr,"A",{href:!0,rel:!0});var mu=a($n);Ed=i(mu,"opus-mt-en-roa"),mu.forEach(t),Pd=i(Jr,"."),Jr.forEach(t),Fd=l(an),jn=s(an,"LI",{});var Yr=a(jn);Nd=i(Yr,"Note that if a model is only multilingual on the source side, like "),Qs=s(Yr,"CODE",{});var fu=a(Qs);Cd=i(fu,"Helsinki-NLP/opus-mt-roa-en"),fu.forEach(t),Ld=i(Yr,`, no language
codes are required.`),Yr.forEach(t),an.forEach(t),rr=l(n),At=s(n,"P",{});var Kr=a(At);Id=i(Kr,"New multi-lingual models from the "),qn=s(Kr,"A",{href:!0,rel:!0});var gu=a(qn);Ad=i(gu,"Tatoeba-Challenge repo"),gu.forEach(t),Od=i(Kr,`
require 3 character language codes:`),Kr.forEach(t),ir=l(n),v(En.$$.fragment,n),dr=l(n),es=s(n,"P",{});var _u=a(es);Sd=i(_u,"Here is the code to see all available pretrained models on the hub:"),_u.forEach(t),lr=l(n),v(Pn.$$.fragment,n),cr=l(n),ft=s(n,"H2",{class:!0});var Zr=a(ft);Ot=s(Zr,"A",{id:!0,class:!0,href:!0});var vu=a(Ot);ea=s(vu,"SPAN",{});var ku=a(ea);v(Fn.$$.fragment,ku),ku.forEach(t),vu.forEach(t),Hd=l(Zr),ta=s(Zr,"SPAN",{});var Tu=a(ta);Dd=i(Tu,"Old Style Multi-Lingual Models"),Tu.forEach(t),Zr.forEach(t),pr=l(n),ts=s(n,"P",{});var Mu=a(ts);Ud=i(Mu,`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),Mu.forEach(t),hr=l(n),v(Nn.$$.fragment,n),ur=l(n),ns=s(n,"P",{});var yu=a(ns);Wd=i(yu,"Example of translating english to many romance languages, using old-style 2 character language codes"),yu.forEach(t),mr=l(n),v(Cn.$$.fragment,n),fr=l(n),gt=s(n,"H2",{class:!0});var Xr=a(gt);St=s(Xr,"A",{id:!0,class:!0,href:!0});var bu=a(St);na=s(bu,"SPAN",{});var xu=a(na);v(Ln.$$.fragment,xu),xu.forEach(t),bu.forEach(t),Rd=l(Xr),oa=s(Xr,"SPAN",{});var wu=a(oa);Bd=i(wu,"MarianConfig"),wu.forEach(t),Xr.forEach(t),gr=l(n),le=s(n,"DIV",{class:!0});var Ke=a(le);v(In.$$.fragment,Ke),Vd=l(Ke),_t=s(Ke,"P",{});var ys=a(_t);Gd=i(ys,"This is the configuration class to store the configuration of a "),os=s(ys,"A",{href:!0});var zu=a(os);Jd=i(zu,"MarianModel"),zu.forEach(t),Yd=i(ys,`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),An=s(ys,"A",{href:!0,rel:!0});var $u=a(An);Kd=i($u,"Helsinki-NLP/opus-mt-en-de"),$u.forEach(t),Zd=i(ys," architecture."),ys.forEach(t),Xd=l(Ke),vt=s(Ke,"P",{});var bs=a(vt);Qd=i(bs,"Configuration objects inherit from "),ss=s(bs,"A",{href:!0});var ju=a(ss);el=i(ju,"PretrainedConfig"),ju.forEach(t),tl=i(bs,` and can be used to control the model outputs. Read the
documentation from `),as=s(bs,"A",{href:!0});var qu=a(as);nl=i(qu,"PretrainedConfig"),qu.forEach(t),ol=i(bs," for more information."),bs.forEach(t),sl=l(Ke),sa=s(Ke,"P",{});var Eu=a(sa);al=i(Eu,"Examples:"),Eu.forEach(t),rl=l(Ke),v(On.$$.fragment,Ke),Ke.forEach(t),_r=l(n),kt=s(n,"H2",{class:!0});var Qr=a(kt);Ht=s(Qr,"A",{id:!0,class:!0,href:!0});var Pu=a(Ht);aa=s(Pu,"SPAN",{});var Fu=a(aa);v(Sn.$$.fragment,Fu),Fu.forEach(t),Pu.forEach(t),il=l(Qr),ra=s(Qr,"SPAN",{});var Nu=a(ra);dl=i(Nu,"MarianTokenizer"),Nu.forEach(t),Qr.forEach(t),vr=l(n),W=s(n,"DIV",{class:!0});var Fe=a(W);v(Hn.$$.fragment,Fe),ll=l(Fe),Dn=s(Fe,"P",{});var ei=a(Dn);cl=i(ei,"Construct a Marian tokenizer. Based on "),Un=s(ei,"A",{href:!0,rel:!0});var Cu=a(Un);pl=i(Cu,"SentencePiece"),Cu.forEach(t),hl=i(ei,"."),ei.forEach(t),ul=l(Fe),Wn=s(Fe,"P",{});var ti=a(Wn);ml=i(ti,"This tokenizer inherits from "),rs=s(ti,"A",{href:!0});var Lu=a(rs);fl=i(Lu,"PreTrainedTokenizer"),Lu.forEach(t),gl=i(ti,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ti.forEach(t),_l=l(Fe),ia=s(Fe,"P",{});var Iu=a(ia);vl=i(Iu,"Examples:"),Iu.forEach(t),kl=l(Fe),v(Rn.$$.fragment,Fe),Tl=l(Fe),Dt=s(Fe,"DIV",{class:!0});var ni=a(Dt);v(Bn.$$.fragment,ni),Ml=l(ni),da=s(ni,"P",{});var Au=a(da);yl=i(Au,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Au.forEach(t),ni.forEach(t),Fe.forEach(t),kr=l(n),Tt=s(n,"H2",{class:!0});var oi=a(Tt);Ut=s(oi,"A",{id:!0,class:!0,href:!0});var Ou=a(Ut);la=s(Ou,"SPAN",{});var Su=a(la);v(Vn.$$.fragment,Su),Su.forEach(t),Ou.forEach(t),bl=l(oi),ca=s(oi,"SPAN",{});var Hu=a(ca);xl=i(Hu,"MarianModel"),Hu.forEach(t),oi.forEach(t),Tr=l(n),we=s(n,"DIV",{class:!0});var rn=a(we);v(Gn.$$.fragment,rn),wl=l(rn),Jn=s(rn,"P",{});var si=a(Jn);zl=i(si,`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),is=s(si,"A",{href:!0});var Du=a(is);$l=i(Du,"PreTrainedModel"),Du.forEach(t),jl=i(si,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),si.forEach(t),ql=l(rn),Yn=s(rn,"P",{});var ai=a(Yn);El=i(ai,"This model is also a PyTorch "),Kn=s(ai,"A",{href:!0,rel:!0});var Uu=a(Kn);Pl=i(Uu,"torch.nn.Module"),Uu.forEach(t),Fl=i(ai,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ai.forEach(t),Nl=l(rn),me=s(rn,"DIV",{class:!0});var Ze=a(me);v(Zn.$$.fragment,Ze),Cl=l(Ze),Mt=s(Ze,"P",{});var xs=a(Mt);Ll=i(xs,"The "),ds=s(xs,"A",{href:!0});var Wu=a(ds);Il=i(Wu,"MarianModel"),Wu.forEach(t),Al=i(xs," forward method, overrides the "),pa=s(xs,"CODE",{});var Ru=a(pa);Ol=i(Ru,"__call__"),Ru.forEach(t),Sl=i(xs," special method."),xs.forEach(t),Hl=l(Ze),v(Wt.$$.fragment,Ze),Dl=l(Ze),ha=s(Ze,"P",{});var Bu=a(ha);Ul=i(Bu,"Example:"),Bu.forEach(t),Wl=l(Ze),v(Xn.$$.fragment,Ze),Ze.forEach(t),rn.forEach(t),Mr=l(n),yt=s(n,"H2",{class:!0});var ri=a(yt);Rt=s(ri,"A",{id:!0,class:!0,href:!0});var Vu=a(Rt);ua=s(Vu,"SPAN",{});var Gu=a(ua);v(Qn.$$.fragment,Gu),Gu.forEach(t),Vu.forEach(t),Rl=l(ri),ma=s(ri,"SPAN",{});var Ju=a(ma);Bl=i(Ju,"MarianMTModel"),Ju.forEach(t),ri.forEach(t),yr=l(n),ze=s(n,"DIV",{class:!0});var dn=a(ze);v(eo.$$.fragment,dn),Vl=l(dn),to=s(dn,"P",{});var ii=a(to);Gl=i(ii,`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),ls=s(ii,"A",{href:!0});var Yu=a(ls);Jl=i(Yu,"PreTrainedModel"),Yu.forEach(t),Yl=i(ii,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii.forEach(t),Kl=l(dn),no=s(dn,"P",{});var di=a(no);Zl=i(di,"This model is also a PyTorch "),oo=s(di,"A",{href:!0,rel:!0});var Ku=a(oo);Xl=i(Ku,"torch.nn.Module"),Ku.forEach(t),Ql=i(di,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),di.forEach(t),ec=l(dn),Y=s(dn,"DIV",{class:!0});var Ne=a(Y);v(so.$$.fragment,Ne),tc=l(Ne),bt=s(Ne,"P",{});var ws=a(bt);nc=i(ws,"The "),cs=s(ws,"A",{href:!0});var Zu=a(cs);oc=i(Zu,"MarianMTModel"),Zu.forEach(t),sc=i(ws," forward method, overrides the "),fa=s(ws,"CODE",{});var Xu=a(fa);ac=i(Xu,"__call__"),Xu.forEach(t),rc=i(ws," special method."),ws.forEach(t),ic=l(Ne),v(Bt.$$.fragment,Ne),dc=l(Ne),ao=s(Ne,"P",{});var li=a(ao);lc=i(li,`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),ro=s(li,"A",{href:!0,rel:!0});var Qu=a(ro);cc=i(Qu,"here"),Qu.forEach(t),pc=i(li,"."),li.forEach(t),hc=l(Ne),ga=s(Ne,"P",{});var em=a(ga);uc=i(em,"Examples:"),em.forEach(t),mc=l(Ne),v(io.$$.fragment,Ne),Ne.forEach(t),dn.forEach(t),br=l(n),xt=s(n,"H2",{class:!0});var ci=a(xt);Vt=s(ci,"A",{id:!0,class:!0,href:!0});var tm=a(Vt);_a=s(tm,"SPAN",{});var nm=a(_a);v(lo.$$.fragment,nm),nm.forEach(t),tm.forEach(t),fc=l(ci),va=s(ci,"SPAN",{});var om=a(va);gc=i(om,"MarianForCausalLM"),om.forEach(t),ci.forEach(t),xr=l(n),wt=s(n,"DIV",{class:!0});var pi=a(wt);v(co.$$.fragment,pi),_c=l(pi),Ye=s(pi,"DIV",{class:!0});var zs=a(Ye);v(po.$$.fragment,zs),vc=l(zs),ka=s(zs,"P",{});var sm=a(ka);kc=i(sm,"Example:"),sm.forEach(t),Tc=l(zs),v(ho.$$.fragment,zs),zs.forEach(t),pi.forEach(t),wr=l(n),zt=s(n,"H2",{class:!0});var hi=a(zt);Gt=s(hi,"A",{id:!0,class:!0,href:!0});var am=a(Gt);Ta=s(am,"SPAN",{});var rm=a(Ta);v(uo.$$.fragment,rm),rm.forEach(t),am.forEach(t),Mc=l(hi),Ma=s(hi,"SPAN",{});var im=a(Ma);yc=i(im,"TFMarianModel"),im.forEach(t),hi.forEach(t),zr=l(n),ce=s(n,"DIV",{class:!0});var Xe=a(ce);v(mo.$$.fragment,Xe),bc=l(Xe),fo=s(Xe,"P",{});var ui=a(fo);xc=i(ui,`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ps=s(ui,"A",{href:!0});var dm=a(ps);wc=i(dm,"TFPreTrainedModel"),dm.forEach(t),zc=i(ui,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ui.forEach(t),$c=l(Xe),go=s(Xe,"P",{});var mi=a(go);jc=i(mi,"This model is also a "),_o=s(mi,"A",{href:!0,rel:!0});var lm=a(_o);qc=i(lm,"tf.keras.Model"),lm.forEach(t),Ec=i(mi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mi.forEach(t),Pc=l(Xe),v(Jt.$$.fragment,Xe),Fc=l(Xe),fe=s(Xe,"DIV",{class:!0});var Qe=a(fe);v(vo.$$.fragment,Qe),Nc=l(Qe),$t=s(Qe,"P",{});var $s=a($t);Cc=i($s,"The "),hs=s($s,"A",{href:!0});var cm=a(hs);Lc=i(cm,"TFMarianModel"),cm.forEach(t),Ic=i($s," forward method, overrides the "),ya=s($s,"CODE",{});var pm=a(ya);Ac=i(pm,"__call__"),pm.forEach(t),Oc=i($s," special method."),$s.forEach(t),Sc=l(Qe),v(Yt.$$.fragment,Qe),Hc=l(Qe),ba=s(Qe,"P",{});var hm=a(ba);Dc=i(hm,"Example:"),hm.forEach(t),Uc=l(Qe),v(ko.$$.fragment,Qe),Qe.forEach(t),Xe.forEach(t),$r=l(n),jt=s(n,"H2",{class:!0});var fi=a(jt);Kt=s(fi,"A",{id:!0,class:!0,href:!0});var um=a(Kt);xa=s(um,"SPAN",{});var mm=a(xa);v(To.$$.fragment,mm),mm.forEach(t),um.forEach(t),Wc=l(fi),wa=s(fi,"SPAN",{});var fm=a(wa);Rc=i(fm,"TFMarianMTModel"),fm.forEach(t),fi.forEach(t),jr=l(n),pe=s(n,"DIV",{class:!0});var et=a(pe);v(Mo.$$.fragment,et),Bc=l(et),yo=s(et,"P",{});var gi=a(yo);Vc=i(gi,`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),us=s(gi,"A",{href:!0});var gm=a(us);Gc=i(gm,"TFPreTrainedModel"),gm.forEach(t),Jc=i(gi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gi.forEach(t),Yc=l(et),bo=s(et,"P",{});var _i=a(bo);Kc=i(_i,"This model is also a "),xo=s(_i,"A",{href:!0,rel:!0});var _m=a(xo);Zc=i(_m,"tf.keras.Model"),_m.forEach(t),Xc=i(_i,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_i.forEach(t),Qc=l(et),v(Zt.$$.fragment,et),ep=l(et),K=s(et,"DIV",{class:!0});var Ce=a(K);v(wo.$$.fragment,Ce),tp=l(Ce),qt=s(Ce,"P",{});var js=a(qt);np=i(js,"The "),ms=s(js,"A",{href:!0});var vm=a(ms);op=i(vm,"TFMarianMTModel"),vm.forEach(t),sp=i(js," forward method, overrides the "),za=s(js,"CODE",{});var km=a(za);ap=i(km,"__call__"),km.forEach(t),rp=i(js," special method."),js.forEach(t),ip=l(Ce),v(Xt.$$.fragment,Ce),dp=l(Ce),zo=s(Ce,"P",{});var vi=a(zo);lp=i(vi,`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),$o=s(vi,"A",{href:!0,rel:!0});var Tm=a($o);cp=i(Tm,"here"),Tm.forEach(t),pp=i(vi,"."),vi.forEach(t),hp=l(Ce),$a=s(Ce,"P",{});var Mm=a($a);up=i(Mm,"Examples:"),Mm.forEach(t),mp=l(Ce),v(jo.$$.fragment,Ce),Ce.forEach(t),et.forEach(t),qr=l(n),Et=s(n,"H2",{class:!0});var ki=a(Et);Qt=s(ki,"A",{id:!0,class:!0,href:!0});var ym=a(Qt);ja=s(ym,"SPAN",{});var bm=a(ja);v(qo.$$.fragment,bm),bm.forEach(t),ym.forEach(t),fp=l(ki),qa=s(ki,"SPAN",{});var xm=a(qa);gp=i(xm,"FlaxMarianModel"),xm.forEach(t),ki.forEach(t),Er=l(n),R=s(n,"DIV",{class:!0});var Le=a(R);v(Eo.$$.fragment,Le),_p=l(Le),Po=s(Le,"P",{});var Ti=a(Po);vp=i(Ti,`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),fs=s(Ti,"A",{href:!0});var wm=a(fs);kp=i(wm,"FlaxPreTrainedModel"),wm.forEach(t),Tp=i(Ti,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ti.forEach(t),Mp=l(Le),Fo=s(Le,"P",{});var Mi=a(Fo);yp=i(Mi,`This model is also a Flax Linen
`),No=s(Mi,"A",{href:!0,rel:!0});var zm=a(No);bp=i(zm,"flax.nn.Module"),zm.forEach(t),xp=i(Mi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mi.forEach(t),wp=l(Le),Ea=s(Le,"P",{});var $m=a(Ea);zp=i($m,"Finally, this model supports inherent JAX features such as:"),$m.forEach(t),$p=l(Le),Ve=s(Le,"UL",{});var ln=a(Ve);Pa=s(ln,"LI",{});var jm=a(Pa);Co=s(jm,"A",{href:!0,rel:!0});var qm=a(Co);jp=i(qm,"Just-In-Time (JIT) compilation"),qm.forEach(t),jm.forEach(t),qp=l(ln),Fa=s(ln,"LI",{});var Em=a(Fa);Lo=s(Em,"A",{href:!0,rel:!0});var Pm=a(Lo);Ep=i(Pm,"Automatic Differentiation"),Pm.forEach(t),Em.forEach(t),Pp=l(ln),Na=s(ln,"LI",{});var Fm=a(Na);Io=s(Fm,"A",{href:!0,rel:!0});var Nm=a(Io);Fp=i(Nm,"Vectorization"),Nm.forEach(t),Fm.forEach(t),Np=l(ln),Ca=s(ln,"LI",{});var Cm=a(Ca);Ao=s(Cm,"A",{href:!0,rel:!0});var Lm=a(Ao);Cp=i(Lm,"Parallelization"),Lm.forEach(t),Cm.forEach(t),ln.forEach(t),Lp=l(Le),ge=s(Le,"DIV",{class:!0});var tt=a(ge);v(Oo.$$.fragment,tt),Ip=l(tt),Pt=s(tt,"P",{});var qs=a(Pt);Ap=i(qs,"The "),La=s(qs,"CODE",{});var Im=a(La);Op=i(Im,"FlaxMarianPreTrainedModel"),Im.forEach(t),Sp=i(qs,"forward method, overrides the "),Ia=s(qs,"CODE",{});var Am=a(Ia);Hp=i(Am,"__call__"),Am.forEach(t),Dp=i(qs," special method."),qs.forEach(t),Up=l(tt),v(en.$$.fragment,tt),Wp=l(tt),Aa=s(tt,"P",{});var Om=a(Aa);Rp=i(Om,"Example:"),Om.forEach(t),Bp=l(tt),v(So.$$.fragment,tt),tt.forEach(t),Le.forEach(t),Pr=l(n),Ft=s(n,"H2",{class:!0});var yi=a(Ft);tn=s(yi,"A",{id:!0,class:!0,href:!0});var Sm=a(tn);Oa=s(Sm,"SPAN",{});var Hm=a(Oa);v(Ho.$$.fragment,Hm),Hm.forEach(t),Sm.forEach(t),Vp=l(yi),Sa=s(yi,"SPAN",{});var Dm=a(Sa);Gp=i(Dm,"FlaxMarianMTModel"),Dm.forEach(t),yi.forEach(t),Fr=l(n),B=s(n,"DIV",{class:!0});var Ie=a(B);v(Do.$$.fragment,Ie),Jp=l(Ie),Uo=s(Ie,"P",{});var bi=a(Uo);Yp=i(bi,`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),gs=s(bi,"A",{href:!0});var Um=a(gs);Kp=i(Um,"FlaxPreTrainedModel"),Um.forEach(t),Zp=i(bi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bi.forEach(t),Xp=l(Ie),Wo=s(Ie,"P",{});var xi=a(Wo);Qp=i(xi,`This model is also a Flax Linen
`),Ro=s(xi,"A",{href:!0,rel:!0});var Wm=a(Ro);eh=i(Wm,"flax.nn.Module"),Wm.forEach(t),th=i(xi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xi.forEach(t),nh=l(Ie),Ha=s(Ie,"P",{});var Rm=a(Ha);oh=i(Rm,"Finally, this model supports inherent JAX features such as:"),Rm.forEach(t),sh=l(Ie),Ge=s(Ie,"UL",{});var cn=a(Ge);Da=s(cn,"LI",{});var Bm=a(Da);Bo=s(Bm,"A",{href:!0,rel:!0});var Vm=a(Bo);ah=i(Vm,"Just-In-Time (JIT) compilation"),Vm.forEach(t),Bm.forEach(t),rh=l(cn),Ua=s(cn,"LI",{});var Gm=a(Ua);Vo=s(Gm,"A",{href:!0,rel:!0});var Jm=a(Vo);ih=i(Jm,"Automatic Differentiation"),Jm.forEach(t),Gm.forEach(t),dh=l(cn),Wa=s(cn,"LI",{});var Ym=a(Wa);Go=s(Ym,"A",{href:!0,rel:!0});var Km=a(Go);lh=i(Km,"Vectorization"),Km.forEach(t),Ym.forEach(t),ch=l(cn),Ra=s(cn,"LI",{});var Zm=a(Ra);Jo=s(Zm,"A",{href:!0,rel:!0});var Xm=a(Jo);ph=i(Xm,"Parallelization"),Xm.forEach(t),Zm.forEach(t),cn.forEach(t),hh=l(Ie),_e=s(Ie,"DIV",{class:!0});var nt=a(_e);v(Yo.$$.fragment,nt),uh=l(nt),Nt=s(nt,"P",{});var Es=a(Nt);mh=i(Es,"The "),Ba=s(Es,"CODE",{});var Qm=a(Ba);fh=i(Qm,"FlaxMarianPreTrainedModel"),Qm.forEach(t),gh=i(Es,"forward method, overrides the "),Va=s(Es,"CODE",{});var ef=a(Va);_h=i(ef,"__call__"),ef.forEach(t),vh=i(Es," special method."),Es.forEach(t),kh=l(nt),v(nn.$$.fragment,nt),Th=l(nt),Ga=s(nt,"P",{});var tf=a(Ga);Mh=i(tf,"Example:"),tf.forEach(t),yh=l(nt),v(Ko.$$.fragment,nt),nt.forEach(t),Ie.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(_f)),c(x,"id","marianmt"),c(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(x,"href","#marianmt"),c(f,"class","relative group"),c(Q,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),c(Q,"rel","nofollow"),c(E,"id","implementation-notes"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#implementation-notes"),c(C,"class","relative group"),c(re,"href","https://huggingface.co/Helsinki-NLP"),c(re,"rel","nofollow"),c(j,"href","https://researchportal.helsinki.fi/en/persons/j%C3%B6rg-tiedemann"),c(j,"rel","nofollow"),c(be,"href","https://marian-nmt.github.io/"),c(be,"rel","nofollow"),c(Xo,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(gn,"href","https://huggingface.co/sshleifer"),c(gn,"rel","nofollow"),c(Ct,"id","naming"),c(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ct,"href","#naming"),c(pt,"class","relative group"),c(kn,"href","https://developers.google.com/admin-sdk/directory/v1/languages"),c(kn,"rel","nofollow"),c(Lt,"id","examples"),c(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lt,"href","#examples"),c(ut,"class","relative group"),c(Mn,"href","https://github.com/huggingface/transformers/blob/main/examples/research_projects/seq2seq-distillation/train_distil_marian_enro_teacher.sh"),c(Mn,"rel","nofollow"),c(yn,"href","https://github.com/huggingface/transformers/blob/main/examples/research_projects/seq2seq-distillation/train_distil_marian_no_teacher.sh"),c(yn,"rel","nofollow"),c(It,"id","multilingual-models"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#multilingual-models"),c(mt,"class","relative group"),c($n,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-roa"),c($n,"rel","nofollow"),c(qn,"href","https://github.com/Helsinki-NLP/Tatoeba-Challenge"),c(qn,"rel","nofollow"),c(Ot,"id","old-style-multilingual-models"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#old-style-multilingual-models"),c(ft,"class","relative group"),c(St,"id","transformers.MarianConfig"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.MarianConfig"),c(gt,"class","relative group"),c(os,"href","/docs/transformers/main/en/model_doc/marian#transformers.MarianModel"),c(An,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-de"),c(An,"rel","nofollow"),c(ss,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(as,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(le,"class","docstring"),c(Ht,"id","transformers.MarianTokenizer"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.MarianTokenizer"),c(kt,"class","relative group"),c(Un,"href","https://github.com/google/sentencepiece"),c(Un,"rel","nofollow"),c(rs,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Dt,"class","docstring"),c(W,"class","docstring"),c(Ut,"id","transformers.MarianModel"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.MarianModel"),c(Tt,"class","relative group"),c(is,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Kn,"rel","nofollow"),c(ds,"href","/docs/transformers/main/en/model_doc/marian#transformers.MarianModel"),c(me,"class","docstring"),c(we,"class","docstring"),c(Rt,"id","transformers.MarianMTModel"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.MarianMTModel"),c(yt,"class","relative group"),c(ls,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(oo,"rel","nofollow"),c(cs,"href","/docs/transformers/main/en/model_doc/marian#transformers.MarianMTModel"),c(ro,"href","https://huggingface.co/models?search=Helsinki-NLP"),c(ro,"rel","nofollow"),c(Y,"class","docstring"),c(ze,"class","docstring"),c(Vt,"id","transformers.MarianForCausalLM"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.MarianForCausalLM"),c(xt,"class","relative group"),c(Ye,"class","docstring"),c(wt,"class","docstring"),c(Gt,"id","transformers.TFMarianModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.TFMarianModel"),c(zt,"class","relative group"),c(ps,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(_o,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(_o,"rel","nofollow"),c(hs,"href","/docs/transformers/main/en/model_doc/marian#transformers.TFMarianModel"),c(fe,"class","docstring"),c(ce,"class","docstring"),c(Kt,"id","transformers.TFMarianMTModel"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.TFMarianMTModel"),c(jt,"class","relative group"),c(us,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(xo,"rel","nofollow"),c(ms,"href","/docs/transformers/main/en/model_doc/marian#transformers.TFMarianMTModel"),c($o,"href","https://huggingface.co/models?search=Helsinki-NLP"),c($o,"rel","nofollow"),c(K,"class","docstring"),c(pe,"class","docstring"),c(Qt,"id","transformers.FlaxMarianModel"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.FlaxMarianModel"),c(Et,"class","relative group"),c(fs,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(No,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(No,"rel","nofollow"),c(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Co,"rel","nofollow"),c(Lo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Lo,"rel","nofollow"),c(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Io,"rel","nofollow"),c(Ao,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ao,"rel","nofollow"),c(ge,"class","docstring"),c(R,"class","docstring"),c(tn,"id","transformers.FlaxMarianMTModel"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.FlaxMarianMTModel"),c(Ft,"class","relative group"),c(gs,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ro,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ro,"rel","nofollow"),c(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Bo,"rel","nofollow"),c(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Vo,"rel","nofollow"),c(Go,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Go,"rel","nofollow"),c(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Jo,"rel","nofollow"),c(_e,"class","docstring"),c(B,"class","docstring")},m(n,p){e(document.head,u),h(n,z,p),h(n,f,p),e(f,x),e(x,w),k(b,w,null),e(f,g),e(f,$),e($,Ae),h(n,ue,p),h(n,q,p),e(q,ve),e(ve,X),e(q,Oe),e(q,Q),e(Q,ee),e(q,Se),h(n,je,p),h(n,G,p),e(G,A),h(n,qe,p),h(n,C,p),e(C,E),e(E,F),k(te,F,null),e(C,ne),e(C,ke),e(ke,He),h(n,J,p),h(n,P,p),e(P,Te),e(Te,N),e(N,De),e(P,oe),e(P,Me),e(Me,se),e(se,ae),e(se,re),e(re,Ue),e(se,O),e(P,We),e(P,S),e(S,H),e(H,m),e(H,j),e(j,ye),e(H,ot),e(H,be),e(be,D),e(H,st),e(P,at),e(P,Re),e(Re,L),e(L,ie),e(P,rt),e(P,Be),e(Be,U),e(U,it),e(P,dt),e(P,de),e(de,xe),e(xe,wi),e(xe,Xo),e(Xo,zi),e(xe,$i),e(de,ji),e(de,lt),e(lt,hn),e(hn,qi),e(hn,Ps),e(Ps,Ei),e(hn,Pi),e(lt,Fi),e(lt,un),e(un,Ni),e(un,Fs),e(Fs,Ci),e(un,Li),e(lt,Ii),e(lt,ct),e(ct,Ai),e(ct,Ns),e(Ns,Oi),e(ct,Si),e(ct,Cs),e(Cs,Hi),e(ct,Di),e(P,Ui),e(P,Ls),e(Ls,mn),e(mn,Wi),e(mn,Is),e(Is,Ri),e(mn,Bi),e(P,Vi),e(P,As),e(As,fn),e(fn,Gi),e(fn,gn),e(gn,Ji),e(fn,Yi),h(n,er,p),h(n,pt,p),e(pt,Ct),e(Ct,Os),k(_n,Os,null),e(pt,Ki),e(pt,Ss),e(Ss,Zi),h(n,tr,p),h(n,Ee,p),e(Ee,Qo),e(Qo,Xi),e(Qo,Hs),e(Hs,Qi),e(Ee,ed),e(Ee,vn),e(vn,td),e(vn,kn),e(kn,nd),e(vn,od),e(Ee,sd),e(Ee,ht),e(ht,ad),e(ht,Ds),e(Ds,rd),e(ht,id),e(ht,Us),e(Us,dd),e(ht,ld),e(Ee,cd),e(Ee,Ws),e(Ws,pd),h(n,nr,p),h(n,ut,p),e(ut,Lt),e(Lt,Rs),k(Tn,Rs,null),e(ut,hd),e(ut,Bs),e(Bs,ud),h(n,or,p),h(n,Je,p),e(Je,Vs),e(Vs,md),e(Je,fd),e(Je,Gs),e(Gs,Mn),e(Mn,gd),e(Je,_d),e(Je,Js),e(Js,yn),e(yn,vd),h(n,sr,p),h(n,mt,p),e(mt,It),e(It,Ys),k(bn,Ys,null),e(mt,kd),e(mt,Ks),e(Ks,Td),h(n,ar,p),h(n,Pe,p),e(Pe,xn),e(xn,Md),e(xn,Zs),e(Zs,yd),e(xn,bd),e(Pe,xd),e(Pe,wn),e(wn,wd),e(wn,Xs),e(Xs,zd),e(wn,$d),e(Pe,jd),e(Pe,zn),e(zn,qd),e(zn,$n),e($n,Ed),e(zn,Pd),e(Pe,Fd),e(Pe,jn),e(jn,Nd),e(jn,Qs),e(Qs,Cd),e(jn,Ld),h(n,rr,p),h(n,At,p),e(At,Id),e(At,qn),e(qn,Ad),e(At,Od),h(n,ir,p),k(En,n,p),h(n,dr,p),h(n,es,p),e(es,Sd),h(n,lr,p),k(Pn,n,p),h(n,cr,p),h(n,ft,p),e(ft,Ot),e(Ot,ea),k(Fn,ea,null),e(ft,Hd),e(ft,ta),e(ta,Dd),h(n,pr,p),h(n,ts,p),e(ts,Ud),h(n,hr,p),k(Nn,n,p),h(n,ur,p),h(n,ns,p),e(ns,Wd),h(n,mr,p),k(Cn,n,p),h(n,fr,p),h(n,gt,p),e(gt,St),e(St,na),k(Ln,na,null),e(gt,Rd),e(gt,oa),e(oa,Bd),h(n,gr,p),h(n,le,p),k(In,le,null),e(le,Vd),e(le,_t),e(_t,Gd),e(_t,os),e(os,Jd),e(_t,Yd),e(_t,An),e(An,Kd),e(_t,Zd),e(le,Xd),e(le,vt),e(vt,Qd),e(vt,ss),e(ss,el),e(vt,tl),e(vt,as),e(as,nl),e(vt,ol),e(le,sl),e(le,sa),e(sa,al),e(le,rl),k(On,le,null),h(n,_r,p),h(n,kt,p),e(kt,Ht),e(Ht,aa),k(Sn,aa,null),e(kt,il),e(kt,ra),e(ra,dl),h(n,vr,p),h(n,W,p),k(Hn,W,null),e(W,ll),e(W,Dn),e(Dn,cl),e(Dn,Un),e(Un,pl),e(Dn,hl),e(W,ul),e(W,Wn),e(Wn,ml),e(Wn,rs),e(rs,fl),e(Wn,gl),e(W,_l),e(W,ia),e(ia,vl),e(W,kl),k(Rn,W,null),e(W,Tl),e(W,Dt),k(Bn,Dt,null),e(Dt,Ml),e(Dt,da),e(da,yl),h(n,kr,p),h(n,Tt,p),e(Tt,Ut),e(Ut,la),k(Vn,la,null),e(Tt,bl),e(Tt,ca),e(ca,xl),h(n,Tr,p),h(n,we,p),k(Gn,we,null),e(we,wl),e(we,Jn),e(Jn,zl),e(Jn,is),e(is,$l),e(Jn,jl),e(we,ql),e(we,Yn),e(Yn,El),e(Yn,Kn),e(Kn,Pl),e(Yn,Fl),e(we,Nl),e(we,me),k(Zn,me,null),e(me,Cl),e(me,Mt),e(Mt,Ll),e(Mt,ds),e(ds,Il),e(Mt,Al),e(Mt,pa),e(pa,Ol),e(Mt,Sl),e(me,Hl),k(Wt,me,null),e(me,Dl),e(me,ha),e(ha,Ul),e(me,Wl),k(Xn,me,null),h(n,Mr,p),h(n,yt,p),e(yt,Rt),e(Rt,ua),k(Qn,ua,null),e(yt,Rl),e(yt,ma),e(ma,Bl),h(n,yr,p),h(n,ze,p),k(eo,ze,null),e(ze,Vl),e(ze,to),e(to,Gl),e(to,ls),e(ls,Jl),e(to,Yl),e(ze,Kl),e(ze,no),e(no,Zl),e(no,oo),e(oo,Xl),e(no,Ql),e(ze,ec),e(ze,Y),k(so,Y,null),e(Y,tc),e(Y,bt),e(bt,nc),e(bt,cs),e(cs,oc),e(bt,sc),e(bt,fa),e(fa,ac),e(bt,rc),e(Y,ic),k(Bt,Y,null),e(Y,dc),e(Y,ao),e(ao,lc),e(ao,ro),e(ro,cc),e(ao,pc),e(Y,hc),e(Y,ga),e(ga,uc),e(Y,mc),k(io,Y,null),h(n,br,p),h(n,xt,p),e(xt,Vt),e(Vt,_a),k(lo,_a,null),e(xt,fc),e(xt,va),e(va,gc),h(n,xr,p),h(n,wt,p),k(co,wt,null),e(wt,_c),e(wt,Ye),k(po,Ye,null),e(Ye,vc),e(Ye,ka),e(ka,kc),e(Ye,Tc),k(ho,Ye,null),h(n,wr,p),h(n,zt,p),e(zt,Gt),e(Gt,Ta),k(uo,Ta,null),e(zt,Mc),e(zt,Ma),e(Ma,yc),h(n,zr,p),h(n,ce,p),k(mo,ce,null),e(ce,bc),e(ce,fo),e(fo,xc),e(fo,ps),e(ps,wc),e(fo,zc),e(ce,$c),e(ce,go),e(go,jc),e(go,_o),e(_o,qc),e(go,Ec),e(ce,Pc),k(Jt,ce,null),e(ce,Fc),e(ce,fe),k(vo,fe,null),e(fe,Nc),e(fe,$t),e($t,Cc),e($t,hs),e(hs,Lc),e($t,Ic),e($t,ya),e(ya,Ac),e($t,Oc),e(fe,Sc),k(Yt,fe,null),e(fe,Hc),e(fe,ba),e(ba,Dc),e(fe,Uc),k(ko,fe,null),h(n,$r,p),h(n,jt,p),e(jt,Kt),e(Kt,xa),k(To,xa,null),e(jt,Wc),e(jt,wa),e(wa,Rc),h(n,jr,p),h(n,pe,p),k(Mo,pe,null),e(pe,Bc),e(pe,yo),e(yo,Vc),e(yo,us),e(us,Gc),e(yo,Jc),e(pe,Yc),e(pe,bo),e(bo,Kc),e(bo,xo),e(xo,Zc),e(bo,Xc),e(pe,Qc),k(Zt,pe,null),e(pe,ep),e(pe,K),k(wo,K,null),e(K,tp),e(K,qt),e(qt,np),e(qt,ms),e(ms,op),e(qt,sp),e(qt,za),e(za,ap),e(qt,rp),e(K,ip),k(Xt,K,null),e(K,dp),e(K,zo),e(zo,lp),e(zo,$o),e($o,cp),e(zo,pp),e(K,hp),e(K,$a),e($a,up),e(K,mp),k(jo,K,null),h(n,qr,p),h(n,Et,p),e(Et,Qt),e(Qt,ja),k(qo,ja,null),e(Et,fp),e(Et,qa),e(qa,gp),h(n,Er,p),h(n,R,p),k(Eo,R,null),e(R,_p),e(R,Po),e(Po,vp),e(Po,fs),e(fs,kp),e(Po,Tp),e(R,Mp),e(R,Fo),e(Fo,yp),e(Fo,No),e(No,bp),e(Fo,xp),e(R,wp),e(R,Ea),e(Ea,zp),e(R,$p),e(R,Ve),e(Ve,Pa),e(Pa,Co),e(Co,jp),e(Ve,qp),e(Ve,Fa),e(Fa,Lo),e(Lo,Ep),e(Ve,Pp),e(Ve,Na),e(Na,Io),e(Io,Fp),e(Ve,Np),e(Ve,Ca),e(Ca,Ao),e(Ao,Cp),e(R,Lp),e(R,ge),k(Oo,ge,null),e(ge,Ip),e(ge,Pt),e(Pt,Ap),e(Pt,La),e(La,Op),e(Pt,Sp),e(Pt,Ia),e(Ia,Hp),e(Pt,Dp),e(ge,Up),k(en,ge,null),e(ge,Wp),e(ge,Aa),e(Aa,Rp),e(ge,Bp),k(So,ge,null),h(n,Pr,p),h(n,Ft,p),e(Ft,tn),e(tn,Oa),k(Ho,Oa,null),e(Ft,Vp),e(Ft,Sa),e(Sa,Gp),h(n,Fr,p),h(n,B,p),k(Do,B,null),e(B,Jp),e(B,Uo),e(Uo,Yp),e(Uo,gs),e(gs,Kp),e(Uo,Zp),e(B,Xp),e(B,Wo),e(Wo,Qp),e(Wo,Ro),e(Ro,eh),e(Wo,th),e(B,nh),e(B,Ha),e(Ha,oh),e(B,sh),e(B,Ge),e(Ge,Da),e(Da,Bo),e(Bo,ah),e(Ge,rh),e(Ge,Ua),e(Ua,Vo),e(Vo,ih),e(Ge,dh),e(Ge,Wa),e(Wa,Go),e(Go,lh),e(Ge,ch),e(Ge,Ra),e(Ra,Jo),e(Jo,ph),e(B,hh),e(B,_e),k(Yo,_e,null),e(_e,uh),e(_e,Nt),e(Nt,mh),e(Nt,Ba),e(Ba,fh),e(Nt,gh),e(Nt,Va),e(Va,_h),e(Nt,vh),e(_e,kh),k(nn,_e,null),e(_e,Th),e(_e,Ga),e(Ga,Mh),e(_e,yh),k(Ko,_e,null),Nr=!0},p(n,[p]){const Zo={};p&2&&(Zo.$$scope={dirty:p,ctx:n}),Wt.$set(Zo);const Ja={};p&2&&(Ja.$$scope={dirty:p,ctx:n}),Bt.$set(Ja);const Ya={};p&2&&(Ya.$$scope={dirty:p,ctx:n}),Jt.$set(Ya);const Ka={};p&2&&(Ka.$$scope={dirty:p,ctx:n}),Yt.$set(Ka);const on={};p&2&&(on.$$scope={dirty:p,ctx:n}),Zt.$set(on);const Za={};p&2&&(Za.$$scope={dirty:p,ctx:n}),Xt.$set(Za);const Xa={};p&2&&(Xa.$$scope={dirty:p,ctx:n}),en.$set(Xa);const Qa={};p&2&&(Qa.$$scope={dirty:p,ctx:n}),nn.$set(Qa)},i(n){Nr||(T(b.$$.fragment,n),T(te.$$.fragment,n),T(_n.$$.fragment,n),T(Tn.$$.fragment,n),T(bn.$$.fragment,n),T(En.$$.fragment,n),T(Pn.$$.fragment,n),T(Fn.$$.fragment,n),T(Nn.$$.fragment,n),T(Cn.$$.fragment,n),T(Ln.$$.fragment,n),T(In.$$.fragment,n),T(On.$$.fragment,n),T(Sn.$$.fragment,n),T(Hn.$$.fragment,n),T(Rn.$$.fragment,n),T(Bn.$$.fragment,n),T(Vn.$$.fragment,n),T(Gn.$$.fragment,n),T(Zn.$$.fragment,n),T(Wt.$$.fragment,n),T(Xn.$$.fragment,n),T(Qn.$$.fragment,n),T(eo.$$.fragment,n),T(so.$$.fragment,n),T(Bt.$$.fragment,n),T(io.$$.fragment,n),T(lo.$$.fragment,n),T(co.$$.fragment,n),T(po.$$.fragment,n),T(ho.$$.fragment,n),T(uo.$$.fragment,n),T(mo.$$.fragment,n),T(Jt.$$.fragment,n),T(vo.$$.fragment,n),T(Yt.$$.fragment,n),T(ko.$$.fragment,n),T(To.$$.fragment,n),T(Mo.$$.fragment,n),T(Zt.$$.fragment,n),T(wo.$$.fragment,n),T(Xt.$$.fragment,n),T(jo.$$.fragment,n),T(qo.$$.fragment,n),T(Eo.$$.fragment,n),T(Oo.$$.fragment,n),T(en.$$.fragment,n),T(So.$$.fragment,n),T(Ho.$$.fragment,n),T(Do.$$.fragment,n),T(Yo.$$.fragment,n),T(nn.$$.fragment,n),T(Ko.$$.fragment,n),Nr=!0)},o(n){M(b.$$.fragment,n),M(te.$$.fragment,n),M(_n.$$.fragment,n),M(Tn.$$.fragment,n),M(bn.$$.fragment,n),M(En.$$.fragment,n),M(Pn.$$.fragment,n),M(Fn.$$.fragment,n),M(Nn.$$.fragment,n),M(Cn.$$.fragment,n),M(Ln.$$.fragment,n),M(In.$$.fragment,n),M(On.$$.fragment,n),M(Sn.$$.fragment,n),M(Hn.$$.fragment,n),M(Rn.$$.fragment,n),M(Bn.$$.fragment,n),M(Vn.$$.fragment,n),M(Gn.$$.fragment,n),M(Zn.$$.fragment,n),M(Wt.$$.fragment,n),M(Xn.$$.fragment,n),M(Qn.$$.fragment,n),M(eo.$$.fragment,n),M(so.$$.fragment,n),M(Bt.$$.fragment,n),M(io.$$.fragment,n),M(lo.$$.fragment,n),M(co.$$.fragment,n),M(po.$$.fragment,n),M(ho.$$.fragment,n),M(uo.$$.fragment,n),M(mo.$$.fragment,n),M(Jt.$$.fragment,n),M(vo.$$.fragment,n),M(Yt.$$.fragment,n),M(ko.$$.fragment,n),M(To.$$.fragment,n),M(Mo.$$.fragment,n),M(Zt.$$.fragment,n),M(wo.$$.fragment,n),M(Xt.$$.fragment,n),M(jo.$$.fragment,n),M(qo.$$.fragment,n),M(Eo.$$.fragment,n),M(Oo.$$.fragment,n),M(en.$$.fragment,n),M(So.$$.fragment,n),M(Ho.$$.fragment,n),M(Do.$$.fragment,n),M(Yo.$$.fragment,n),M(nn.$$.fragment,n),M(Ko.$$.fragment,n),Nr=!1},d(n){t(u),n&&t(z),n&&t(f),y(b),n&&t(ue),n&&t(q),n&&t(je),n&&t(G),n&&t(qe),n&&t(C),y(te),n&&t(J),n&&t(P),n&&t(er),n&&t(pt),y(_n),n&&t(tr),n&&t(Ee),n&&t(nr),n&&t(ut),y(Tn),n&&t(or),n&&t(Je),n&&t(sr),n&&t(mt),y(bn),n&&t(ar),n&&t(Pe),n&&t(rr),n&&t(At),n&&t(ir),y(En,n),n&&t(dr),n&&t(es),n&&t(lr),y(Pn,n),n&&t(cr),n&&t(ft),y(Fn),n&&t(pr),n&&t(ts),n&&t(hr),y(Nn,n),n&&t(ur),n&&t(ns),n&&t(mr),y(Cn,n),n&&t(fr),n&&t(gt),y(Ln),n&&t(gr),n&&t(le),y(In),y(On),n&&t(_r),n&&t(kt),y(Sn),n&&t(vr),n&&t(W),y(Hn),y(Rn),y(Bn),n&&t(kr),n&&t(Tt),y(Vn),n&&t(Tr),n&&t(we),y(Gn),y(Zn),y(Wt),y(Xn),n&&t(Mr),n&&t(yt),y(Qn),n&&t(yr),n&&t(ze),y(eo),y(so),y(Bt),y(io),n&&t(br),n&&t(xt),y(lo),n&&t(xr),n&&t(wt),y(co),y(po),y(ho),n&&t(wr),n&&t(zt),y(uo),n&&t(zr),n&&t(ce),y(mo),y(Jt),y(vo),y(Yt),y(ko),n&&t($r),n&&t(jt),y(To),n&&t(jr),n&&t(pe),y(Mo),y(Zt),y(wo),y(Xt),y(jo),n&&t(qr),n&&t(Et),y(qo),n&&t(Er),n&&t(R),y(Eo),y(Oo),y(en),y(So),n&&t(Pr),n&&t(Ft),y(Ho),n&&t(Fr),n&&t(B),y(Do),y(Yo),y(nn),y(Ko)}}}const _f={local:"marianmt",sections:[{local:"implementation-notes",title:"Implementation Notes"},{local:"naming",title:"Naming"},{local:"examples",title:"Examples"},{local:"multilingual-models",title:"Multilingual Models"},{local:"old-style-multilingual-models",title:"Old Style Multi-Lingual Models"},{local:"transformers.MarianConfig",title:"MarianConfig"},{local:"transformers.MarianTokenizer",title:"MarianTokenizer"},{local:"transformers.MarianModel",title:"MarianModel"},{local:"transformers.MarianMTModel",title:"MarianMTModel"},{local:"transformers.MarianForCausalLM",title:"MarianForCausalLM"},{local:"transformers.TFMarianModel",title:"TFMarianModel"},{local:"transformers.TFMarianMTModel",title:"TFMarianMTModel"},{local:"transformers.FlaxMarianModel",title:"FlaxMarianModel"},{local:"transformers.FlaxMarianMTModel",title:"FlaxMarianMTModel"}],title:"MarianMT"};function vf(I){return rf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xf extends nf{constructor(u){super();of(this,u,vf,gf,sf,{})}}export{xf as default,_f as metadata};
