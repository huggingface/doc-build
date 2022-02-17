import{S as ef,i as tf,s as nf,e as o,k as d,w as v,t as r,L as of,c as s,d as t,m as l,a,x as k,h as i,b as c,J as e,g as h,y as T,q as M,o as y,B as b}from"../../../chunks/vendor-b1433968.js";import{T as cn}from"../../../chunks/Tip-c3840994.js";import{D as Z}from"../../../chunks/Docstring-ff504c58.js";import{C as $e}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as he}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function sf(C){let u,z,f,g,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var _=a(u);z=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(x,_){h(x,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(x){x&&t(u)}}}function af(C){let u,z,f,g,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var _=a(u);z=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(x,_){h(x,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(x){x&&t(u)}}}function rf(C){let u,z,f,g,w,x,_,$,Ae,ue,E,ve,X,Se,Q,ee,Oe,je,V,A,Ee,I,P,F,te,ne,ke,De,G,q,Te,N,He,oe,Me,se,ae,re,Ue,S,We,O,D;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),f=d(),g=o("ul"),w=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),_=d(),$=o("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=d(),E=o("p"),ve=r("This second option is useful when using "),X=o("code"),Se=r("tf.keras.Model.fit"),Q=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),ee=o("code"),Oe=r("model(inputs)"),je=r("."),V=d(),A=o("p"),Ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),I=d(),P=o("ul"),F=o("li"),te=r("a single Tensor with "),ne=o("code"),ke=r("input_ids"),De=r(" only and nothing else: "),G=o("code"),q=r("model(input_ids)"),Te=d(),N=o("li"),He=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=o("code"),Me=r("model([input_ids, attention_mask])"),se=r(" or "),ae=o("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),Ue=d(),S=o("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=o("code"),D=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=l(m),g=s(m,"UL",{});var ye=a(g);w=s(ye,"LI",{});var ot=a(w);x=i(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(t),_=l(ye),$=s(ye,"LI",{});var be=a($);Ae=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),ye.forEach(t),ue=l(m),E=s(m,"P",{});var H=a(E);ve=i(H,"This second option is useful when using "),X=s(H,"CODE",{});var st=a(X);Se=i(st,"tf.keras.Model.fit"),st.forEach(t),Q=i(H,` method which currently requires having all
the tensors in the first argument of the model call function: `),ee=s(H,"CODE",{});var at=a(ee);Oe=i(at,"model(inputs)"),at.forEach(t),je=i(H,"."),H.forEach(t),V=l(m),A=s(m,"P",{});var Re=a(A);Ee=i(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Re.forEach(t),I=l(m),P=s(m,"UL",{});var L=a(P);F=s(L,"LI",{});var ie=a(F);te=i(ie,"a single Tensor with "),ne=s(ie,"CODE",{});var rt=a(ne);ke=i(rt,"input_ids"),rt.forEach(t),De=i(ie," only and nothing else: "),G=s(ie,"CODE",{});var Be=a(G);q=i(Be,"model(input_ids)"),Be.forEach(t),ie.forEach(t),Te=l(L),N=s(L,"LI",{});var U=a(N);He=i(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=s(U,"CODE",{});var it=a(oe);Me=i(it,"model([input_ids, attention_mask])"),it.forEach(t),se=i(U," or "),ae=s(U,"CODE",{});var dt=a(ae);re=i(dt,"model([input_ids, attention_mask, token_type_ids])"),dt.forEach(t),U.forEach(t),Ue=l(L),S=s(L,"LI",{});var de=a(S);We=i(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=s(de,"CODE",{});var xe=a(O);D=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),de.forEach(t),L.forEach(t)},m(m,j){h(m,u,j),e(u,z),h(m,f,j),h(m,g,j),e(g,w),e(w,x),e(g,_),e(g,$),e($,Ae),h(m,ue,j),h(m,E,j),e(E,ve),e(E,X),e(X,Se),e(E,Q),e(E,ee),e(ee,Oe),e(E,je),h(m,V,j),h(m,A,j),e(A,Ee),h(m,I,j),h(m,P,j),e(P,F),e(F,te),e(F,ne),e(ne,ke),e(F,De),e(F,G),e(G,q),e(P,Te),e(P,N),e(N,He),e(N,oe),e(oe,Me),e(N,se),e(N,ae),e(ae,re),e(P,Ue),e(P,S),e(S,We),e(S,O),e(O,D)},d(m){m&&t(u),m&&t(f),m&&t(g),m&&t(ue),m&&t(E),m&&t(V),m&&t(A),m&&t(I),m&&t(P)}}}function df(C){let u,z,f,g,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var _=a(u);z=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(x,_){h(x,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(x){x&&t(u)}}}function lf(C){let u,z,f,g,w,x,_,$,Ae,ue,E,ve,X,Se,Q,ee,Oe,je,V,A,Ee,I,P,F,te,ne,ke,De,G,q,Te,N,He,oe,Me,se,ae,re,Ue,S,We,O,D;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),f=d(),g=o("ul"),w=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),_=d(),$=o("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=d(),E=o("p"),ve=r("This second option is useful when using "),X=o("code"),Se=r("tf.keras.Model.fit"),Q=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),ee=o("code"),Oe=r("model(inputs)"),je=r("."),V=d(),A=o("p"),Ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),I=d(),P=o("ul"),F=o("li"),te=r("a single Tensor with "),ne=o("code"),ke=r("input_ids"),De=r(" only and nothing else: "),G=o("code"),q=r("model(input_ids)"),Te=d(),N=o("li"),He=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=o("code"),Me=r("model([input_ids, attention_mask])"),se=r(" or "),ae=o("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),Ue=d(),S=o("li"),We=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=o("code"),D=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=l(m),g=s(m,"UL",{});var ye=a(g);w=s(ye,"LI",{});var ot=a(w);x=i(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(t),_=l(ye),$=s(ye,"LI",{});var be=a($);Ae=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),ye.forEach(t),ue=l(m),E=s(m,"P",{});var H=a(E);ve=i(H,"This second option is useful when using "),X=s(H,"CODE",{});var st=a(X);Se=i(st,"tf.keras.Model.fit"),st.forEach(t),Q=i(H,` method which currently requires having all
the tensors in the first argument of the model call function: `),ee=s(H,"CODE",{});var at=a(ee);Oe=i(at,"model(inputs)"),at.forEach(t),je=i(H,"."),H.forEach(t),V=l(m),A=s(m,"P",{});var Re=a(A);Ee=i(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Re.forEach(t),I=l(m),P=s(m,"UL",{});var L=a(P);F=s(L,"LI",{});var ie=a(F);te=i(ie,"a single Tensor with "),ne=s(ie,"CODE",{});var rt=a(ne);ke=i(rt,"input_ids"),rt.forEach(t),De=i(ie," only and nothing else: "),G=s(ie,"CODE",{});var Be=a(G);q=i(Be,"model(input_ids)"),Be.forEach(t),ie.forEach(t),Te=l(L),N=s(L,"LI",{});var U=a(N);He=i(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=s(U,"CODE",{});var it=a(oe);Me=i(it,"model([input_ids, attention_mask])"),it.forEach(t),se=i(U," or "),ae=s(U,"CODE",{});var dt=a(ae);re=i(dt,"model([input_ids, attention_mask, token_type_ids])"),dt.forEach(t),U.forEach(t),Ue=l(L),S=s(L,"LI",{});var de=a(S);We=i(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=s(de,"CODE",{});var xe=a(O);D=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),de.forEach(t),L.forEach(t)},m(m,j){h(m,u,j),e(u,z),h(m,f,j),h(m,g,j),e(g,w),e(w,x),e(g,_),e(g,$),e($,Ae),h(m,ue,j),h(m,E,j),e(E,ve),e(E,X),e(X,Se),e(E,Q),e(E,ee),e(ee,Oe),e(E,je),h(m,V,j),h(m,A,j),e(A,Ee),h(m,I,j),h(m,P,j),e(P,F),e(F,te),e(F,ne),e(ne,ke),e(F,De),e(F,G),e(G,q),e(P,Te),e(P,N),e(N,He),e(N,oe),e(oe,Me),e(N,se),e(N,ae),e(ae,re),e(P,Ue),e(P,S),e(S,We),e(S,O),e(O,D)},d(m){m&&t(u),m&&t(f),m&&t(g),m&&t(ue),m&&t(E),m&&t(V),m&&t(A),m&&t(I),m&&t(P)}}}function cf(C){let u,z,f,g,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var _=a(u);z=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(x,_){h(x,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(x){x&&t(u)}}}function pf(C){let u,z,f,g,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var _=a(u);z=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(x,_){h(x,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(x){x&&t(u)}}}function hf(C){let u,z,f,g,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var _=a(u);z=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(x,_){h(x,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(x){x&&t(u)}}}function uf(C){let u,z,f,g,w,x,_,$,Ae,ue,E,ve,X,Se,Q,ee,Oe,je,V,A,Ee,I,P,F,te,ne,ke,De,G,q,Te,N,He,oe,Me,se,ae,re,Ue,S,We,O,D,m,j,ye,ot,be,H,st,at,Re,L,ie,rt,Be,U,it,dt,de,xe,bi,Zo,xi,wi,zi,lt,pn,$i,Ps,ji,Ei,Pi,hn,qi,qs,Fi,Ni,Ci,ct,Ii,Fs,Li,Ai,Ns,Si,Oi,Di,Cs,un,Hi,Is,Ui,Wi,Ri,Ls,mn,Bi,fn,Vi,Gi,Qa,pt,Nt,As,gn,Ji,Ss,Yi,er,Pe,Xo,Ki,Os,Zi,Xi,_n,Qi,vn,ed,td,nd,ht,od,Ds,sd,ad,Hs,rd,id,dd,Us,ld,tr,ut,Ct,Ws,kn,cd,Rs,pd,nr,Je,Bs,hd,ud,Vs,Tn,md,fd,Gs,Mn,gd,or,mt,It,Js,yn,_d,Ys,vd,sr,qe,bn,kd,Ks,Td,Md,yd,xn,bd,Zs,xd,wd,zd,wn,$d,zn,jd,Ed,Pd,$n,qd,Xs,Fd,Nd,ar,Lt,Cd,jn,Id,Ld,rr,En,ir,Qo,Ad,dr,Pn,lr,ft,At,Qs,qn,Sd,ea,Od,cr,es,Dd,pr,Fn,hr,ts,Hd,ur,Nn,mr,gt,St,ta,Cn,Ud,na,Wd,fr,le,In,Rd,_t,Bd,ns,Vd,Gd,Ln,Jd,Yd,Kd,vt,Zd,os,Xd,Qd,ss,el,tl,nl,oa,ol,sl,An,gr,kt,Ot,sa,Sn,al,aa,rl,_r,W,On,il,Dn,dl,Hn,ll,cl,pl,Un,hl,as,ul,ml,fl,ra,gl,_l,Wn,vl,Dt,Rn,kl,ia,Tl,vr,Tt,Ht,da,Bn,Ml,la,yl,kr,we,Vn,bl,Gn,xl,rs,wl,zl,$l,Jn,jl,Yn,El,Pl,ql,me,Kn,Fl,Mt,Nl,is,Cl,Il,ca,Ll,Al,Sl,Ut,Ol,pa,Dl,Hl,Zn,Tr,yt,Wt,ha,Xn,Ul,ua,Wl,Mr,ze,Qn,Rl,eo,Bl,ds,Vl,Gl,Jl,to,Yl,no,Kl,Zl,Xl,J,oo,Ql,bt,ec,ls,tc,nc,ma,oc,sc,ac,Rt,rc,so,ic,ao,dc,lc,cc,fa,pc,hc,ro,yr,xt,Bt,ga,io,uc,_a,mc,br,lo,Ye,co,fc,va,gc,_c,po,xr,wt,Vt,ka,ho,vc,Ta,kc,wr,ce,uo,Tc,mo,Mc,cs,yc,bc,xc,fo,wc,go,zc,$c,jc,Gt,Ec,fe,_o,Pc,zt,qc,ps,Fc,Nc,Ma,Cc,Ic,Lc,Jt,Ac,ya,Sc,Oc,vo,zr,$t,Yt,ba,ko,Dc,xa,Hc,$r,pe,To,Uc,Mo,Wc,hs,Rc,Bc,Vc,yo,Gc,bo,Jc,Yc,Kc,Kt,Zc,Y,xo,Xc,jt,Qc,us,ep,tp,wa,np,op,sp,Zt,ap,wo,rp,zo,ip,dp,lp,za,cp,pp,$o,jr,Et,Xt,$a,jo,hp,ja,up,Er,R,Eo,mp,Po,fp,ms,gp,_p,vp,qo,kp,Fo,Tp,Mp,yp,Ea,bp,xp,Ve,Pa,No,wp,zp,qa,Co,$p,jp,Fa,Io,Ep,Pp,Na,Lo,qp,Fp,ge,Ao,Np,Pt,Cp,Ca,Ip,Lp,Ia,Ap,Sp,Op,Qt,Dp,La,Hp,Up,So,Pr,qt,en,Aa,Oo,Wp,Sa,Rp,qr,B,Do,Bp,Ho,Vp,fs,Gp,Jp,Yp,Uo,Kp,Wo,Zp,Xp,Qp,Oa,eh,th,Ge,Da,Ro,nh,oh,Ha,Bo,sh,ah,Ua,Vo,rh,ih,Wa,Go,dh,lh,_e,Jo,ch,Ft,ph,Ra,hh,uh,Ba,mh,fh,gh,tn,_h,Va,vh,kh,Yo,Fr;return x=new he({}),te=new he({}),gn=new he({}),kn=new he({}),yn=new he({}),En=new $e({props:{code:`from transformers import MarianMTModel, MarianTokenizer
src_text = [
    '>>fra<< this is a sentence in english that we want to translate to french',
    '>>por<< This should go to portuguese',
    '>>esp<< And this to Spanish'
]

model_name = 'Helsinki-NLP/opus-mt-en-roa'
tokenizer = MarianTokenizer.from_pretrained(model_name)
print(tokenizer.supported_language_codes)

model = MarianMTModel.from_pretrained(model_name)
translated = model.generate(**tokenizer(src_text, return_tensors="pt", padding=True))
[tokenizer.decode(t, skip_special_tokens=True) for t in translated],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianMTModel, MarianTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&#x27;&gt;&gt;fra&lt;&lt; this is a sentence in english that we want to translate to french&#x27;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&#x27;&gt;&gt;por&lt;&lt; This should go to portuguese&#x27;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&#x27;&gt;&gt;esp&lt;&lt; And this to Spanish&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-roa&#x27;</span>
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
suffix = [x.split('/')[1] for x in model_ids]
old_style_multi_models = [f'{org}/{s}' for s in suffix if s != s.lower()],`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models
model_list = list_models()
org = <span class="hljs-string">&quot;Helsinki-NLP&quot;</span>
model_ids = [x.modelId <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_list <span class="hljs-keyword">if</span> x.modelId.startswith(org)]
suffix = [x.split(<span class="hljs-string">&#x27;/&#x27;</span>)[<span class="hljs-number">1</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_ids]
old_style_multi_models = [<span class="hljs-string">f&#x27;<span class="hljs-subst">{org}</span>/<span class="hljs-subst">{s}</span>&#x27;</span> <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> suffix <span class="hljs-keyword">if</span> s != s.lower()]`}}),qn=new he({}),Fn=new $e({props:{code:`['Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU',
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
},`,highlighted:`[<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU&#x27;</span>,
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
    '>>fr<< this is a sentence in english that we want to translate to french',
    '>>pt<< This should go to portuguese',
    '>>es<< And this to Spanish'
]

model_name = 'Helsinki-NLP/opus-mt-en-ROMANCE'
tokenizer = MarianTokenizer.from_pretrained(model_name)

model = MarianMTModel.from_pretrained(model_name)
translated = model.generate(**tokenizer(src_text, return_tensors="pt", padding=True))
tgt_text = [tokenizer.decode(t, skip_special_tokens=True) for t in translated],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianMTModel, MarianTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&#x27;&gt;&gt;fr&lt;&lt; this is a sentence in english that we want to translate to french&#x27;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&#x27;&gt;&gt;pt&lt;&lt; This should go to portuguese&#x27;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&#x27;&gt;&gt;es&lt;&lt; And this to Spanish&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-ROMANCE&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated = model.generate(**tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = [tokenizer.decode(t, skip_special_tokens=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> translated]
[<span class="hljs-string">&quot;c&#x27;est une phrase en anglais que nous voulons traduire en fran\xE7ais&quot;</span>, 
 <span class="hljs-string">&#x27;Isto deve ir para o portugu\xEAs.&#x27;</span>,
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),Cn=new he({}),In=new Z({props:{name:"class transformers.MarianConfig",anchor:"transformers.MarianConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 58100"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 58100"},{name:"eos_token_id",val:" = 0"},{name:"forced_eos_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/configuration_marian.py#L29",parametersDescription:[{anchor:"transformers.MarianConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Marian model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianModel">MarianModel</a> or
<a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.TFMarianModel">TFMarianModel</a>.`,name:"vocab_size"},{anchor:"transformers.MarianConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MarianConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MarianConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MarianConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MarianConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MarianConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MarianConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MarianConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MarianConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MarianConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MarianConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MarianConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MarianConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MarianConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.MarianConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MarianConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MarianConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),An=new $e({props:{code:`from transformers import MarianModel, MarianConfig

# Initializing a Marian Helsinki-NLP/opus-mt-en-de style configuration
configuration = MarianConfig()

# Initializing a model from the Helsinki-NLP/opus-mt-en-de style configuration
model = MarianModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianModel, MarianConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Marian Helsinki-NLP/opus-mt-en-de style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MarianConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the Helsinki-NLP/opus-mt-en-de style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Sn=new he({}),On=new Z({props:{name:"class transformers.MarianTokenizer",anchor:"transformers.MarianTokenizer",parameters:[{name:"vocab",val:""},{name:"source_spm",val:""},{name:"target_spm",val:""},{name:"source_lang",val:" = None"},{name:"target_lang",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"model_max_length",val:" = 512"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/tokenization_marian.py#L56",parametersDescription:[{anchor:"transformers.MarianTokenizer.source_spm",description:`<strong>source_spm</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Wn=new $e({props:{code:`from transformers import MarianTokenizer
tokenizer = MarianTokenizer.from_pretrained('Helsinki-NLP/opus-mt-en-de')
src_texts = [ "I am a small frog.", "Tom asked his teacher for advice."]
tgt_texts = ["Ich bin ein kleiner Frosch.", "Tom bat seinen Lehrer um Rat."]  # optional
inputs = tokenizer(src_texts, return_tensors="pt", padding=True)
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_texts, return_tensors="pt", padding=True)
inputs["labels"] = labels["input_ids"]
outputs = model(**inputs) should work,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-de&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_texts = [ <span class="hljs-string">&quot;I am a small frog.&quot;</span>, <span class="hljs-string">&quot;Tom asked his teacher for advice.&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_texts = [<span class="hljs-string">&quot;Ich bin ein kleiner Frosch.&quot;</span>, <span class="hljs-string">&quot;Tom bat seinen Lehrer um Rat.&quot;</span>]  <span class="hljs-comment"># optional</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(src_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-comment"># keys  [input_ids, attention_mask, labels].</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs) should work`}}),Rn=new Z({props:{name:"as_target_tokenizer",anchor:"transformers.MarianTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/tokenization_marian.py#L261"}}),Bn=new he({}),Vn=new Z({props:{name:"class transformers.MarianModel",anchor:"transformers.MarianModel",parameters:[{name:"config",val:": MarianConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_marian.py#L1085",parametersDescription:[{anchor:"transformers.MarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Kn=new Z({props:{name:"forward",anchor:"transformers.MarianModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_marian.py#L1112",parametersDescription:[{anchor:"transformers.MarianModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.MarianModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MarianModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MarianModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarianModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MarianModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MarianModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),Ut=new cn({props:{$$slots:{default:[sf]},$$scope:{ctx:C}}}),Zn=new $e({props:{code:`from transformers import MarianTokenizer, MarianModel

tokenizer = MarianTokenizer.from_pretrained('Helsinki-NLP/opus-mt-en-de')
model = MarianModel.from_pretrained('Helsinki-NLP/opus-mt-en-de')

input_ids = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt").input_ids  # Batch size 1
decoder_input_ids = tokenizer("<pad> Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen",
return_tensors="pt", add_special_tokens=False).input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-de&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel.from_pretrained(<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-de&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;&lt;pad&gt; Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen&quot;</span>,
<span class="hljs-meta">... </span>return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Xn=new he({}),Qn=new Z({props:{name:"class transformers.MarianMTModel",anchor:"transformers.MarianMTModel",parameters:[{name:"config",val:": MarianConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_marian.py#L1209",parametersDescription:[{anchor:"transformers.MarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),oo=new Z({props:{name:"forward",anchor:"transformers.MarianMTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_marian.py#L1259",parametersDescription:[{anchor:"transformers.MarianMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.MarianMTModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MarianMTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MarianMTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianMTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarianMTModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MarianMTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MarianMTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianMTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianMTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarianMTModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),Rt=new cn({props:{$$slots:{default:[af]},$$scope:{ctx:C}}}),ro=new $e({props:{code:`from transformers import MarianTokenizer, MarianMTModel
from typing import List
src = 'fr'  # source language
trg = 'en'  # target language
sample_text = "o\xF9 est l'arr\xEAt de bus ?"
model_name = f'Helsinki-NLP/opus-mt-{src}-{trg}'

model = MarianMTModel.from_pretrained(model_name)
tokenizer = MarianTokenizer.from_pretrained(model_name)
batch = tokenizer([sample_text], return_tensors="pt")
gen = model.generate(**batch)
tokenizer.batch_decode(gen, skip_special_tokens=True),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianMTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">List</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&#x27;fr&#x27;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&#x27;en&#x27;</span>  <span class="hljs-comment"># target language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;o\xF9 est l&#x27;arr\xEAt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&#x27;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(gen, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`}}),io=new he({}),co=new Z({props:{name:"forward",anchor:"transformers.MarianForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_marian.py#L1430",parametersDescription:[{anchor:"transformers.MarianForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a>
for details.</p>
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
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MarianForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MarianForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),po=new $e({props:{code:`from transformers import MarianTokenizer, MarianForCausalLM

tokenizer = MarianTokenizer.from_pretrained('facebook/bart-large')
model = MarianForCausalLM.from_pretrained('facebook/bart-large', add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianForCausalLM.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ho=new he({}),uo=new Z({props:{name:"class transformers.TFMarianModel",anchor:"transformers.TFMarianModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_tf_marian.py#L1213",parametersDescription:[{anchor:"transformers.TFMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Gt=new cn({props:{$$slots:{default:[rf]},$$scope:{ctx:C}}}),_o=new Z({props:{name:"call",anchor:"transformers.TFMarianModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_tf_marian.py#L1225",parametersDescription:[{anchor:"transformers.TFMarianModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMarianModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMarianModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMarianModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMarianModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig"
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
`}}),Jt=new cn({props:{$$slots:{default:[df]},$$scope:{ctx:C}}}),vo=new $e({props:{code:`from transformers import MarianTokenizer, TFMarianModel
import tensorflow as tf

tokenizer = MarianTokenizer.from_pretrained('Helsinki-NLP/opus-mt-en-de')
model = TFMarianModel.from_pretrained('Helsinki-NLP/opus-mt-en-de')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, TFMarianModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-de&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMarianModel.from_pretrained(<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-de&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ko=new he({}),To=new Z({props:{name:"class transformers.TFMarianMTModel",anchor:"transformers.TFMarianMTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_tf_marian.py#L1320",parametersDescription:[{anchor:"transformers.TFMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Kt=new cn({props:{$$slots:{default:[lf]},$$scope:{ctx:C}}}),xo=new Z({props:{name:"call",anchor:"transformers.TFMarianMTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_tf_marian.py#L1353",parametersDescription:[{anchor:"transformers.TFMarianMTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianMTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMarianMTModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMarianMTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMarianMTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMarianMTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianMTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMarianMTModel.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig"
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
`}}),Zt=new cn({props:{$$slots:{default:[cf]},$$scope:{ctx:C}}}),$o=new $e({props:{code:`from transformers import MarianTokenizer, TFMarianMTModel
from typing import List
src = 'fr'  # source language
trg = 'en'  # target language
sample_text = "o\xF9 est l'arr\xEAt de bus ?"
model_name = f'Helsinki-NLP/opus-mt-{src}-{trg}'

model = TFMarianMTModel.from_pretrained(model_name)
tokenizer = MarianTokenizer.from_pretrained(model_name)
batch = tokenizer([sample_text], return_tensors="tf")
gen = model.generate(**batch)
tokenizer.batch_decode(gen, skip_special_tokens=True),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, TFMarianMTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">List</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&#x27;fr&#x27;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&#x27;en&#x27;</span>  <span class="hljs-comment"># target language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;o\xF9 est l&#x27;arr\xEAt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&#x27;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(gen, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`}}),jo=new he({}),Eo=new Z({props:{name:"class transformers.FlaxMarianModel",anchor:"transformers.FlaxMarianModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_flax_marian.py#L1209",parametersDescription:[{anchor:"transformers.FlaxMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxMarianModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ao=new Z({props:{name:"__call__",anchor:"transformers.FlaxMarianPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_flax_marian.py#L1144",parametersDescription:[{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),Qt=new cn({props:{$$slots:{default:[pf]},$$scope:{ctx:C}}}),So=new $e({props:{code:`from transformers import MarianTokenizer, FlaxMarianModel

tokenizer = MarianTokenizer.from_pretrained('Helsinki-NLP/opus-mt-en-de')
model = FlaxMarianModel.from_pretrained('Helsinki-NLP/opus-mt-en-de')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-de&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianModel.from_pretrained(<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-de&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Oo=new he({}),Do=new Z({props:{name:"class transformers.FlaxMarianMTModel",anchor:"transformers.FlaxMarianMTModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_flax_marian.py#L1295",parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxMarianMTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Jo=new Z({props:{name:"__call__",anchor:"transformers.FlaxMarianPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/marian/modeling_flax_marian.py#L1144",parametersDescription:[{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),tn=new cn({props:{$$slots:{default:[hf]},$$scope:{ctx:C}}}),Yo=new $e({props:{code:`from transformers import MarianTokenizer, FlaxMarianMTModel

model = FlaxMarianMTModel.from_pretrained('Helsinki-NLP/opus-mt-en-de')
tokenizer = MarianTokenizer.from_pretrained('Helsinki-NLP/opus-mt-en-de')

text = "My friends are cool but they eat too many carbs."
input_ids = tokenizer(text, max_length=64, return_tensors='jax').input_ids

sequences = model.generate(input_ids, max_length=64, num_beams=2).sequences

outputs = tokenizer.batch_decode(sequences, skip_special_tokens=True)
# should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianMTModel.from_pretrained(<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-de&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-de&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(text, max_length=<span class="hljs-number">64</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(input_ids, max_length=<span class="hljs-number">64</span>, num_beams=<span class="hljs-number">2</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = tokenizer.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*</span>`}}),{c(){u=o("meta"),z=d(),f=o("h1"),g=o("a"),w=o("span"),v(x.$$.fragment),_=d(),$=o("span"),Ae=r("MarianMT"),ue=d(),E=o("p"),ve=o("strong"),X=r("Bugs:"),Se=r(" If you see something strange, file a "),Q=o("a"),ee=r("Github Issue"),Oe=r(`
and assign @patrickvonplaten.`),je=d(),V=o("p"),A=r("Translations should be similar, but not identical to output in the test set linked to in each model card."),Ee=d(),I=o("h2"),P=o("a"),F=o("span"),v(te.$$.fragment),ne=d(),ke=o("span"),De=r("Implementation Notes"),G=d(),q=o("ul"),Te=o("li"),N=o("p"),He=r("Each model is about 298 MB on disk, there are more than 1,000 models."),oe=d(),Me=o("li"),se=o("p"),ae=r("The list of supported language pairs can be found "),re=o("a"),Ue=r("here"),S=r("."),We=d(),O=o("li"),D=o("p"),m=r("Models were originally trained by "),j=o("a"),ye=r("J\xF6rg Tiedemann"),ot=r(" using the "),be=o("a"),H=r("Marian"),st=r(" C++ library, which supports fast training and translation."),at=d(),Re=o("li"),L=o("p"),ie=r(`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),rt=d(),Be=o("li"),U=o("p"),it=r("The 80 opus models that require BPE preprocessing are not supported."),dt=d(),de=o("li"),xe=o("p"),bi=r("The modeling code is the same as "),Zo=o("a"),xi=r("BartForConditionalGeneration"),wi=r(" with a few minor modifications:"),zi=d(),lt=o("ul"),pn=o("li"),$i=r("static (sinusoid) positional embeddings ("),Ps=o("code"),ji=r("MarianConfig.static_position_embeddings=True"),Ei=r(")"),Pi=d(),hn=o("li"),qi=r("no layernorm_embedding ("),qs=o("code"),Fi=r("MarianConfig.normalize_embedding=False"),Ni=r(")"),Ci=d(),ct=o("li"),Ii=r("the model starts generating with "),Fs=o("code"),Li=r("pad_token_id"),Ai=r(` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Ns=o("code"),Si=r("<s/>"),Oi=r("),"),Di=d(),Cs=o("li"),un=o("p"),Hi=r("Code to bulk convert models can be found in "),Is=o("code"),Ui=r("convert_marian_to_pytorch.py"),Wi=r("."),Ri=d(),Ls=o("li"),mn=o("p"),Bi=r("This model was contributed by "),fn=o("a"),Vi=r("sshleifer"),Gi=r("."),Qa=d(),pt=o("h2"),Nt=o("a"),As=o("span"),v(gn.$$.fragment),Ji=d(),Ss=o("span"),Yi=r("Naming"),er=d(),Pe=o("ul"),Xo=o("li"),Ki=r("All model names use the following format: "),Os=o("code"),Zi=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),Xi=d(),_n=o("li"),Qi=r("The language codes used to name models are inconsistent. Two digit codes can usually be found "),vn=o("a"),ed=r("here"),td=r(`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),nd=d(),ht=o("li"),od=r("Codes formatted like "),Ds=o("code"),sd=r("es_AR"),ad=r(" are usually "),Hs=o("code"),rd=r("code_{region}"),id=r(". That one is Spanish from Argentina."),dd=d(),Us=o("li"),ld=r(`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),tr=d(),ut=o("h2"),Ct=o("a"),Ws=o("span"),v(kn.$$.fragment),cd=d(),Rs=o("span"),pd=r("Examples"),nr=d(),Je=o("ul"),Bs=o("li"),hd=r(`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),ud=d(),Vs=o("li"),Tn=o("a"),md=r("Fine-tune on GPU"),fd=d(),Gs=o("li"),Mn=o("a"),gd=r("Fine-tune on GPU with pytorch-lightning"),or=d(),mt=o("h2"),It=o("a"),Js=o("span"),v(yn.$$.fragment),_d=d(),Ys=o("span"),vd=r("Multilingual Models"),sr=d(),qe=o("ul"),bn=o("li"),kd=r("All model names use the following format: "),Ks=o("code"),Td=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),Md=r(":"),yd=d(),xn=o("li"),bd=r(`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Zs=o("code"),xd=r("src_text"),wd=r("."),zd=d(),wn=o("li"),$d=r("You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),zn=o("a"),jd=r("opus-mt-en-roa"),Ed=r("."),Pd=d(),$n=o("li"),qd=r("Note that if a model is only multilingual on the source side, like "),Xs=o("code"),Fd=r("Helsinki-NLP/opus-mt-roa-en"),Nd=r(`, no language
codes are required.`),ar=d(),Lt=o("p"),Cd=r("New multi-lingual models from the "),jn=o("a"),Id=r("Tatoeba-Challenge repo"),Ld=r(`
require 3 character language codes:`),rr=d(),v(En.$$.fragment),ir=d(),Qo=o("p"),Ad=r("Here is the code to see all available pretrained models on the hub:"),dr=d(),v(Pn.$$.fragment),lr=d(),ft=o("h2"),At=o("a"),Qs=o("span"),v(qn.$$.fragment),Sd=d(),ea=o("span"),Od=r("Old Style Multi-Lingual Models"),cr=d(),es=o("p"),Dd=r(`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),pr=d(),v(Fn.$$.fragment),hr=d(),ts=o("p"),Hd=r("Example of translating english to many romance languages, using old-style 2 character language codes"),ur=d(),v(Nn.$$.fragment),mr=d(),gt=o("h2"),St=o("a"),ta=o("span"),v(Cn.$$.fragment),Ud=d(),na=o("span"),Wd=r("MarianConfig"),fr=d(),le=o("div"),v(In.$$.fragment),Rd=d(),_t=o("p"),Bd=r("This is the configuration class to store the configuration of a "),ns=o("a"),Vd=r("MarianModel"),Gd=r(`. It is used to
instantiate an Marian model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Marian
`),Ln=o("a"),Jd=r("Helsinki-NLP/opus-mt-en-de"),Yd=r(" architecture."),Kd=d(),vt=o("p"),Zd=r("Configuration objects inherit from "),os=o("a"),Xd=r("PretrainedConfig"),Qd=r(` and can be used to control the model
outputs. Read the documentation from `),ss=o("a"),el=r("PretrainedConfig"),tl=r(" for more information."),nl=d(),oa=o("p"),ol=r("Examples:"),sl=d(),v(An.$$.fragment),gr=d(),kt=o("h2"),Ot=o("a"),sa=o("span"),v(Sn.$$.fragment),al=d(),aa=o("span"),rl=r("MarianTokenizer"),_r=d(),W=o("div"),v(On.$$.fragment),il=d(),Dn=o("p"),dl=r("Construct a Marian tokenizer. Based on "),Hn=o("a"),ll=r("SentencePiece"),cl=r("."),pl=d(),Un=o("p"),hl=r("This tokenizer inherits from "),as=o("a"),ul=r("PreTrainedTokenizer"),ml=r(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),fl=d(),ra=o("p"),gl=r("Examples:"),_l=d(),v(Wn.$$.fragment),vl=d(),Dt=o("div"),v(Rn.$$.fragment),kl=d(),ia=o("p"),Tl=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),vr=d(),Tt=o("h2"),Ht=o("a"),da=o("span"),v(Bn.$$.fragment),Ml=d(),la=o("span"),yl=r("MarianModel"),kr=d(),we=o("div"),v(Vn.$$.fragment),bl=d(),Gn=o("p"),xl=r(`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rs=o("a"),wl=r("PreTrainedModel"),zl=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),$l=d(),Jn=o("p"),jl=r("This model is also a PyTorch "),Yn=o("a"),El=r("torch.nn.Module"),Pl=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ql=d(),me=o("div"),v(Kn.$$.fragment),Fl=d(),Mt=o("p"),Nl=r("The "),is=o("a"),Cl=r("MarianModel"),Il=r(" forward method, overrides the "),ca=o("code"),Ll=r("__call__"),Al=r(" special method."),Sl=d(),v(Ut.$$.fragment),Ol=d(),pa=o("p"),Dl=r("Example:"),Hl=d(),v(Zn.$$.fragment),Tr=d(),yt=o("h2"),Wt=o("a"),ha=o("span"),v(Xn.$$.fragment),Ul=d(),ua=o("span"),Wl=r("MarianMTModel"),Mr=d(),ze=o("div"),v(Qn.$$.fragment),Rl=d(),eo=o("p"),Bl=r(`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),ds=o("a"),Vl=r("PreTrainedModel"),Gl=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Jl=d(),to=o("p"),Yl=r("This model is also a PyTorch "),no=o("a"),Kl=r("torch.nn.Module"),Zl=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Xl=d(),J=o("div"),v(oo.$$.fragment),Ql=d(),bt=o("p"),ec=r("The "),ls=o("a"),tc=r("MarianMTModel"),nc=r(" forward method, overrides the "),ma=o("code"),oc=r("__call__"),sc=r(" special method."),ac=d(),v(Rt.$$.fragment),rc=d(),so=o("p"),ic=r(`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints.
Available models are listed `),ao=o("a"),dc=r("here"),lc=r("."),cc=d(),fa=o("p"),pc=r("Examples:"),hc=d(),v(ro.$$.fragment),yr=d(),xt=o("h2"),Bt=o("a"),ga=o("span"),v(io.$$.fragment),uc=d(),_a=o("span"),mc=r("MarianForCausalLM"),br=d(),lo=o("div"),Ye=o("div"),v(co.$$.fragment),fc=d(),va=o("p"),gc=r("Example:"),_c=d(),v(po.$$.fragment),xr=d(),wt=o("h2"),Vt=o("a"),ka=o("span"),v(ho.$$.fragment),vc=d(),Ta=o("span"),kc=r("TFMarianModel"),wr=d(),ce=o("div"),v(uo.$$.fragment),Tc=d(),mo=o("p"),Mc=r(`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),cs=o("a"),yc=r("TFPreTrainedModel"),bc=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),xc=d(),fo=o("p"),wc=r("This model is also a "),go=o("a"),zc=r("tf.keras.Model"),$c=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),jc=d(),v(Gt.$$.fragment),Ec=d(),fe=o("div"),v(_o.$$.fragment),Pc=d(),zt=o("p"),qc=r("The "),ps=o("a"),Fc=r("TFMarianModel"),Nc=r(" forward method, overrides the "),Ma=o("code"),Cc=r("__call__"),Ic=r(" special method."),Lc=d(),v(Jt.$$.fragment),Ac=d(),ya=o("p"),Sc=r("Example:"),Oc=d(),v(vo.$$.fragment),zr=d(),$t=o("h2"),Yt=o("a"),ba=o("span"),v(ko.$$.fragment),Dc=d(),xa=o("span"),Hc=r("TFMarianMTModel"),$r=d(),pe=o("div"),v(To.$$.fragment),Uc=d(),Mo=o("p"),Wc=r(`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),hs=o("a"),Rc=r("TFPreTrainedModel"),Bc=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Vc=d(),yo=o("p"),Gc=r("This model is also a "),bo=o("a"),Jc=r("tf.keras.Model"),Yc=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Kc=d(),v(Kt.$$.fragment),Zc=d(),Y=o("div"),v(xo.$$.fragment),Xc=d(),jt=o("p"),Qc=r("The "),us=o("a"),ep=r("TFMarianMTModel"),tp=r(" forward method, overrides the "),wa=o("code"),np=r("__call__"),op=r(" special method."),sp=d(),v(Zt.$$.fragment),ap=d(),wo=o("p"),rp=r(`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),zo=o("a"),ip=r("here"),dp=r("."),lp=d(),za=o("p"),cp=r("Examples:"),pp=d(),v($o.$$.fragment),jr=d(),Et=o("h2"),Xt=o("a"),$a=o("span"),v(jo.$$.fragment),hp=d(),ja=o("span"),up=r("FlaxMarianModel"),Er=d(),R=o("div"),v(Eo.$$.fragment),mp=d(),Po=o("p"),fp=r(`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ms=o("a"),gp=r("FlaxPreTrainedModel"),_p=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),vp=d(),qo=o("p"),kp=r("This model is also a Flax Linen "),Fo=o("a"),Tp=r("flax.nn.Module"),Mp=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),yp=d(),Ea=o("p"),bp=r("Finally, this model supports inherent JAX features such as:"),xp=d(),Ve=o("ul"),Pa=o("li"),No=o("a"),wp=r("Just-In-Time (JIT) compilation"),zp=d(),qa=o("li"),Co=o("a"),$p=r("Automatic Differentiation"),jp=d(),Fa=o("li"),Io=o("a"),Ep=r("Vectorization"),Pp=d(),Na=o("li"),Lo=o("a"),qp=r("Parallelization"),Fp=d(),ge=o("div"),v(Ao.$$.fragment),Np=d(),Pt=o("p"),Cp=r("The "),Ca=o("code"),Ip=r("FlaxMarianPreTrainedModel"),Lp=r(" forward method, overrides the "),Ia=o("code"),Ap=r("__call__"),Sp=r(" special method."),Op=d(),v(Qt.$$.fragment),Dp=d(),La=o("p"),Hp=r("Example:"),Up=d(),v(So.$$.fragment),Pr=d(),qt=o("h2"),en=o("a"),Aa=o("span"),v(Oo.$$.fragment),Wp=d(),Sa=o("span"),Rp=r("FlaxMarianMTModel"),qr=d(),B=o("div"),v(Do.$$.fragment),Bp=d(),Ho=o("p"),Vp=r(`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),fs=o("a"),Gp=r("FlaxPreTrainedModel"),Jp=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Yp=d(),Uo=o("p"),Kp=r("This model is also a Flax Linen "),Wo=o("a"),Zp=r("flax.nn.Module"),Xp=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qp=d(),Oa=o("p"),eh=r("Finally, this model supports inherent JAX features such as:"),th=d(),Ge=o("ul"),Da=o("li"),Ro=o("a"),nh=r("Just-In-Time (JIT) compilation"),oh=d(),Ha=o("li"),Bo=o("a"),sh=r("Automatic Differentiation"),ah=d(),Ua=o("li"),Vo=o("a"),rh=r("Vectorization"),ih=d(),Wa=o("li"),Go=o("a"),dh=r("Parallelization"),lh=d(),_e=o("div"),v(Jo.$$.fragment),ch=d(),Ft=o("p"),ph=r("The "),Ra=o("code"),hh=r("FlaxMarianPreTrainedModel"),uh=r(" forward method, overrides the "),Ba=o("code"),mh=r("__call__"),fh=r(" special method."),gh=d(),v(tn.$$.fragment),_h=d(),Va=o("p"),vh=r("Example:"),kh=d(),v(Yo.$$.fragment),this.h()},l(n){const p=of('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(n),f=s(n,"H1",{class:!0});var Ko=a(f);g=s(Ko,"A",{id:!0,class:!0,href:!0});var Ga=a(g);w=s(Ga,"SPAN",{});var Ja=a(w);k(x.$$.fragment,Ja),Ja.forEach(t),Ga.forEach(t),_=l(Ko),$=s(Ko,"SPAN",{});var Ya=a($);Ae=i(Ya,"MarianMT"),Ya.forEach(t),Ko.forEach(t),ue=l(n),E=s(n,"P",{});var nn=a(E);ve=s(nn,"STRONG",{});var Ka=a(ve);X=i(Ka,"Bugs:"),Ka.forEach(t),Se=i(nn," If you see something strange, file a "),Q=s(nn,"A",{href:!0,rel:!0});var Za=a(Q);ee=i(Za,"Github Issue"),Za.forEach(t),Oe=i(nn,`
and assign @patrickvonplaten.`),nn.forEach(t),je=l(n),V=s(n,"P",{});var Xa=a(V);A=i(Xa,"Translations should be similar, but not identical to output in the test set linked to in each model card."),Xa.forEach(t),Ee=l(n),I=s(n,"H2",{class:!0});var Nr=a(I);P=s(Nr,"A",{id:!0,class:!0,href:!0});var Mh=a(P);F=s(Mh,"SPAN",{});var yh=a(F);k(te.$$.fragment,yh),yh.forEach(t),Mh.forEach(t),ne=l(Nr),ke=s(Nr,"SPAN",{});var bh=a(ke);De=i(bh,"Implementation Notes"),bh.forEach(t),Nr.forEach(t),G=l(n),q=s(n,"UL",{});var K=a(q);Te=s(K,"LI",{});var xh=a(Te);N=s(xh,"P",{});var wh=a(N);He=i(wh,"Each model is about 298 MB on disk, there are more than 1,000 models."),wh.forEach(t),xh.forEach(t),oe=l(K),Me=s(K,"LI",{});var zh=a(Me);se=s(zh,"P",{});var Cr=a(se);ae=i(Cr,"The list of supported language pairs can be found "),re=s(Cr,"A",{href:!0,rel:!0});var $h=a(re);Ue=i($h,"here"),$h.forEach(t),S=i(Cr,"."),Cr.forEach(t),zh.forEach(t),We=l(K),O=s(K,"LI",{});var jh=a(O);D=s(jh,"P",{});var gs=a(D);m=i(gs,"Models were originally trained by "),j=s(gs,"A",{href:!0,rel:!0});var Eh=a(j);ye=i(Eh,"J\xF6rg Tiedemann"),Eh.forEach(t),ot=i(gs," using the "),be=s(gs,"A",{href:!0,rel:!0});var Ph=a(be);H=i(Ph,"Marian"),Ph.forEach(t),st=i(gs," C++ library, which supports fast training and translation."),gs.forEach(t),jh.forEach(t),at=l(K),Re=s(K,"LI",{});var qh=a(Re);L=s(qh,"P",{});var Fh=a(L);ie=i(Fh,`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),Fh.forEach(t),qh.forEach(t),rt=l(K),Be=s(K,"LI",{});var Nh=a(Be);U=s(Nh,"P",{});var Ch=a(U);it=i(Ch,"The 80 opus models that require BPE preprocessing are not supported."),Ch.forEach(t),Nh.forEach(t),dt=l(K),de=s(K,"LI",{});var Ir=a(de);xe=s(Ir,"P",{});var Lr=a(xe);bi=i(Lr,"The modeling code is the same as "),Zo=s(Lr,"A",{href:!0});var Ih=a(Zo);xi=i(Ih,"BartForConditionalGeneration"),Ih.forEach(t),wi=i(Lr," with a few minor modifications:"),Lr.forEach(t),zi=l(Ir),lt=s(Ir,"UL",{});var _s=a(lt);pn=s(_s,"LI",{});var Ar=a(pn);$i=i(Ar,"static (sinusoid) positional embeddings ("),Ps=s(Ar,"CODE",{});var Lh=a(Ps);ji=i(Lh,"MarianConfig.static_position_embeddings=True"),Lh.forEach(t),Ei=i(Ar,")"),Ar.forEach(t),Pi=l(_s),hn=s(_s,"LI",{});var Sr=a(hn);qi=i(Sr,"no layernorm_embedding ("),qs=s(Sr,"CODE",{});var Ah=a(qs);Fi=i(Ah,"MarianConfig.normalize_embedding=False"),Ah.forEach(t),Ni=i(Sr,")"),Sr.forEach(t),Ci=l(_s),ct=s(_s,"LI",{});var vs=a(ct);Ii=i(vs,"the model starts generating with "),Fs=s(vs,"CODE",{});var Sh=a(Fs);Li=i(Sh,"pad_token_id"),Sh.forEach(t),Ai=i(vs,` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Ns=s(vs,"CODE",{});var Oh=a(Ns);Si=i(Oh,"<s/>"),Oh.forEach(t),Oi=i(vs,"),"),vs.forEach(t),_s.forEach(t),Ir.forEach(t),Di=l(K),Cs=s(K,"LI",{});var Dh=a(Cs);un=s(Dh,"P",{});var Or=a(un);Hi=i(Or,"Code to bulk convert models can be found in "),Is=s(Or,"CODE",{});var Hh=a(Is);Ui=i(Hh,"convert_marian_to_pytorch.py"),Hh.forEach(t),Wi=i(Or,"."),Or.forEach(t),Dh.forEach(t),Ri=l(K),Ls=s(K,"LI",{});var Uh=a(Ls);mn=s(Uh,"P",{});var Dr=a(mn);Bi=i(Dr,"This model was contributed by "),fn=s(Dr,"A",{href:!0,rel:!0});var Wh=a(fn);Vi=i(Wh,"sshleifer"),Wh.forEach(t),Gi=i(Dr,"."),Dr.forEach(t),Uh.forEach(t),K.forEach(t),Qa=l(n),pt=s(n,"H2",{class:!0});var Hr=a(pt);Nt=s(Hr,"A",{id:!0,class:!0,href:!0});var Rh=a(Nt);As=s(Rh,"SPAN",{});var Bh=a(As);k(gn.$$.fragment,Bh),Bh.forEach(t),Rh.forEach(t),Ji=l(Hr),Ss=s(Hr,"SPAN",{});var Vh=a(Ss);Yi=i(Vh,"Naming"),Vh.forEach(t),Hr.forEach(t),er=l(n),Pe=s(n,"UL",{});var on=a(Pe);Xo=s(on,"LI",{});var Th=a(Xo);Ki=i(Th,"All model names use the following format: "),Os=s(Th,"CODE",{});var Gh=a(Os);Zi=i(Gh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),Gh.forEach(t),Th.forEach(t),Xi=l(on),_n=s(on,"LI",{});var Ur=a(_n);Qi=i(Ur,"The language codes used to name models are inconsistent. Two digit codes can usually be found "),vn=s(Ur,"A",{href:!0,rel:!0});var Jh=a(vn);ed=i(Jh,"here"),Jh.forEach(t),td=i(Ur,`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),Ur.forEach(t),nd=l(on),ht=s(on,"LI",{});var ks=a(ht);od=i(ks,"Codes formatted like "),Ds=s(ks,"CODE",{});var Yh=a(Ds);sd=i(Yh,"es_AR"),Yh.forEach(t),ad=i(ks," are usually "),Hs=s(ks,"CODE",{});var Kh=a(Hs);rd=i(Kh,"code_{region}"),Kh.forEach(t),id=i(ks,". That one is Spanish from Argentina."),ks.forEach(t),dd=l(on),Us=s(on,"LI",{});var Zh=a(Us);ld=i(Zh,`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),Zh.forEach(t),on.forEach(t),tr=l(n),ut=s(n,"H2",{class:!0});var Wr=a(ut);Ct=s(Wr,"A",{id:!0,class:!0,href:!0});var Xh=a(Ct);Ws=s(Xh,"SPAN",{});var Qh=a(Ws);k(kn.$$.fragment,Qh),Qh.forEach(t),Xh.forEach(t),cd=l(Wr),Rs=s(Wr,"SPAN",{});var eu=a(Rs);pd=i(eu,"Examples"),eu.forEach(t),Wr.forEach(t),nr=l(n),Je=s(n,"UL",{});var Ts=a(Je);Bs=s(Ts,"LI",{});var tu=a(Bs);hd=i(tu,`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),tu.forEach(t),ud=l(Ts),Vs=s(Ts,"LI",{});var nu=a(Vs);Tn=s(nu,"A",{href:!0,rel:!0});var ou=a(Tn);md=i(ou,"Fine-tune on GPU"),ou.forEach(t),nu.forEach(t),fd=l(Ts),Gs=s(Ts,"LI",{});var su=a(Gs);Mn=s(su,"A",{href:!0,rel:!0});var au=a(Mn);gd=i(au,"Fine-tune on GPU with pytorch-lightning"),au.forEach(t),su.forEach(t),Ts.forEach(t),or=l(n),mt=s(n,"H2",{class:!0});var Rr=a(mt);It=s(Rr,"A",{id:!0,class:!0,href:!0});var ru=a(It);Js=s(ru,"SPAN",{});var iu=a(Js);k(yn.$$.fragment,iu),iu.forEach(t),ru.forEach(t),_d=l(Rr),Ys=s(Rr,"SPAN",{});var du=a(Ys);vd=i(du,"Multilingual Models"),du.forEach(t),Rr.forEach(t),sr=l(n),qe=s(n,"UL",{});var sn=a(qe);bn=s(sn,"LI",{});var Br=a(bn);kd=i(Br,"All model names use the following format: "),Ks=s(Br,"CODE",{});var lu=a(Ks);Td=i(lu,"Helsinki-NLP/opus-mt-{src}-{tgt}"),lu.forEach(t),Md=i(Br,":"),Br.forEach(t),yd=l(sn),xn=s(sn,"LI",{});var Vr=a(xn);bd=i(Vr,`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Zs=s(Vr,"CODE",{});var cu=a(Zs);xd=i(cu,"src_text"),cu.forEach(t),wd=i(Vr,"."),Vr.forEach(t),zd=l(sn),wn=s(sn,"LI",{});var Gr=a(wn);$d=i(Gr,"You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),zn=s(Gr,"A",{href:!0,rel:!0});var pu=a(zn);jd=i(pu,"opus-mt-en-roa"),pu.forEach(t),Ed=i(Gr,"."),Gr.forEach(t),Pd=l(sn),$n=s(sn,"LI",{});var Jr=a($n);qd=i(Jr,"Note that if a model is only multilingual on the source side, like "),Xs=s(Jr,"CODE",{});var hu=a(Xs);Fd=i(hu,"Helsinki-NLP/opus-mt-roa-en"),hu.forEach(t),Nd=i(Jr,`, no language
codes are required.`),Jr.forEach(t),sn.forEach(t),ar=l(n),Lt=s(n,"P",{});var Yr=a(Lt);Cd=i(Yr,"New multi-lingual models from the "),jn=s(Yr,"A",{href:!0,rel:!0});var uu=a(jn);Id=i(uu,"Tatoeba-Challenge repo"),uu.forEach(t),Ld=i(Yr,`
require 3 character language codes:`),Yr.forEach(t),rr=l(n),k(En.$$.fragment,n),ir=l(n),Qo=s(n,"P",{});var mu=a(Qo);Ad=i(mu,"Here is the code to see all available pretrained models on the hub:"),mu.forEach(t),dr=l(n),k(Pn.$$.fragment,n),lr=l(n),ft=s(n,"H2",{class:!0});var Kr=a(ft);At=s(Kr,"A",{id:!0,class:!0,href:!0});var fu=a(At);Qs=s(fu,"SPAN",{});var gu=a(Qs);k(qn.$$.fragment,gu),gu.forEach(t),fu.forEach(t),Sd=l(Kr),ea=s(Kr,"SPAN",{});var _u=a(ea);Od=i(_u,"Old Style Multi-Lingual Models"),_u.forEach(t),Kr.forEach(t),cr=l(n),es=s(n,"P",{});var vu=a(es);Dd=i(vu,`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),vu.forEach(t),pr=l(n),k(Fn.$$.fragment,n),hr=l(n),ts=s(n,"P",{});var ku=a(ts);Hd=i(ku,"Example of translating english to many romance languages, using old-style 2 character language codes"),ku.forEach(t),ur=l(n),k(Nn.$$.fragment,n),mr=l(n),gt=s(n,"H2",{class:!0});var Zr=a(gt);St=s(Zr,"A",{id:!0,class:!0,href:!0});var Tu=a(St);ta=s(Tu,"SPAN",{});var Mu=a(ta);k(Cn.$$.fragment,Mu),Mu.forEach(t),Tu.forEach(t),Ud=l(Zr),na=s(Zr,"SPAN",{});var yu=a(na);Wd=i(yu,"MarianConfig"),yu.forEach(t),Zr.forEach(t),fr=l(n),le=s(n,"DIV",{class:!0});var Ke=a(le);k(In.$$.fragment,Ke),Rd=l(Ke),_t=s(Ke,"P",{});var Ms=a(_t);Bd=i(Ms,"This is the configuration class to store the configuration of a "),ns=s(Ms,"A",{href:!0});var bu=a(ns);Vd=i(bu,"MarianModel"),bu.forEach(t),Gd=i(Ms,`. It is used to
instantiate an Marian model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Marian
`),Ln=s(Ms,"A",{href:!0,rel:!0});var xu=a(Ln);Jd=i(xu,"Helsinki-NLP/opus-mt-en-de"),xu.forEach(t),Yd=i(Ms," architecture."),Ms.forEach(t),Kd=l(Ke),vt=s(Ke,"P",{});var ys=a(vt);Zd=i(ys,"Configuration objects inherit from "),os=s(ys,"A",{href:!0});var wu=a(os);Xd=i(wu,"PretrainedConfig"),wu.forEach(t),Qd=i(ys,` and can be used to control the model
outputs. Read the documentation from `),ss=s(ys,"A",{href:!0});var zu=a(ss);el=i(zu,"PretrainedConfig"),zu.forEach(t),tl=i(ys," for more information."),ys.forEach(t),nl=l(Ke),oa=s(Ke,"P",{});var $u=a(oa);ol=i($u,"Examples:"),$u.forEach(t),sl=l(Ke),k(An.$$.fragment,Ke),Ke.forEach(t),gr=l(n),kt=s(n,"H2",{class:!0});var Xr=a(kt);Ot=s(Xr,"A",{id:!0,class:!0,href:!0});var ju=a(Ot);sa=s(ju,"SPAN",{});var Eu=a(sa);k(Sn.$$.fragment,Eu),Eu.forEach(t),ju.forEach(t),al=l(Xr),aa=s(Xr,"SPAN",{});var Pu=a(aa);rl=i(Pu,"MarianTokenizer"),Pu.forEach(t),Xr.forEach(t),_r=l(n),W=s(n,"DIV",{class:!0});var Fe=a(W);k(On.$$.fragment,Fe),il=l(Fe),Dn=s(Fe,"P",{});var Qr=a(Dn);dl=i(Qr,"Construct a Marian tokenizer. Based on "),Hn=s(Qr,"A",{href:!0,rel:!0});var qu=a(Hn);ll=i(qu,"SentencePiece"),qu.forEach(t),cl=i(Qr,"."),Qr.forEach(t),pl=l(Fe),Un=s(Fe,"P",{});var ei=a(Un);hl=i(ei,"This tokenizer inherits from "),as=s(ei,"A",{href:!0});var Fu=a(as);ul=i(Fu,"PreTrainedTokenizer"),Fu.forEach(t),ml=i(ei,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),ei.forEach(t),fl=l(Fe),ra=s(Fe,"P",{});var Nu=a(ra);gl=i(Nu,"Examples:"),Nu.forEach(t),_l=l(Fe),k(Wn.$$.fragment,Fe),vl=l(Fe),Dt=s(Fe,"DIV",{class:!0});var ti=a(Dt);k(Rn.$$.fragment,ti),kl=l(ti),ia=s(ti,"P",{});var Cu=a(ia);Tl=i(Cu,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Cu.forEach(t),ti.forEach(t),Fe.forEach(t),vr=l(n),Tt=s(n,"H2",{class:!0});var ni=a(Tt);Ht=s(ni,"A",{id:!0,class:!0,href:!0});var Iu=a(Ht);da=s(Iu,"SPAN",{});var Lu=a(da);k(Bn.$$.fragment,Lu),Lu.forEach(t),Iu.forEach(t),Ml=l(ni),la=s(ni,"SPAN",{});var Au=a(la);yl=i(Au,"MarianModel"),Au.forEach(t),ni.forEach(t),kr=l(n),we=s(n,"DIV",{class:!0});var an=a(we);k(Vn.$$.fragment,an),bl=l(an),Gn=s(an,"P",{});var oi=a(Gn);xl=i(oi,`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rs=s(oi,"A",{href:!0});var Su=a(rs);wl=i(Su,"PreTrainedModel"),Su.forEach(t),zl=i(oi,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),oi.forEach(t),$l=l(an),Jn=s(an,"P",{});var si=a(Jn);jl=i(si,"This model is also a PyTorch "),Yn=s(si,"A",{href:!0,rel:!0});var Ou=a(Yn);El=i(Ou,"torch.nn.Module"),Ou.forEach(t),Pl=i(si,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),si.forEach(t),ql=l(an),me=s(an,"DIV",{class:!0});var Ze=a(me);k(Kn.$$.fragment,Ze),Fl=l(Ze),Mt=s(Ze,"P",{});var bs=a(Mt);Nl=i(bs,"The "),is=s(bs,"A",{href:!0});var Du=a(is);Cl=i(Du,"MarianModel"),Du.forEach(t),Il=i(bs," forward method, overrides the "),ca=s(bs,"CODE",{});var Hu=a(ca);Ll=i(Hu,"__call__"),Hu.forEach(t),Al=i(bs," special method."),bs.forEach(t),Sl=l(Ze),k(Ut.$$.fragment,Ze),Ol=l(Ze),pa=s(Ze,"P",{});var Uu=a(pa);Dl=i(Uu,"Example:"),Uu.forEach(t),Hl=l(Ze),k(Zn.$$.fragment,Ze),Ze.forEach(t),an.forEach(t),Tr=l(n),yt=s(n,"H2",{class:!0});var ai=a(yt);Wt=s(ai,"A",{id:!0,class:!0,href:!0});var Wu=a(Wt);ha=s(Wu,"SPAN",{});var Ru=a(ha);k(Xn.$$.fragment,Ru),Ru.forEach(t),Wu.forEach(t),Ul=l(ai),ua=s(ai,"SPAN",{});var Bu=a(ua);Wl=i(Bu,"MarianMTModel"),Bu.forEach(t),ai.forEach(t),Mr=l(n),ze=s(n,"DIV",{class:!0});var rn=a(ze);k(Qn.$$.fragment,rn),Rl=l(rn),eo=s(rn,"P",{});var ri=a(eo);Bl=i(ri,`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),ds=s(ri,"A",{href:!0});var Vu=a(ds);Vl=i(Vu,"PreTrainedModel"),Vu.forEach(t),Gl=i(ri,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),ri.forEach(t),Jl=l(rn),to=s(rn,"P",{});var ii=a(to);Yl=i(ii,"This model is also a PyTorch "),no=s(ii,"A",{href:!0,rel:!0});var Gu=a(no);Kl=i(Gu,"torch.nn.Module"),Gu.forEach(t),Zl=i(ii,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ii.forEach(t),Xl=l(rn),J=s(rn,"DIV",{class:!0});var Ne=a(J);k(oo.$$.fragment,Ne),Ql=l(Ne),bt=s(Ne,"P",{});var xs=a(bt);ec=i(xs,"The "),ls=s(xs,"A",{href:!0});var Ju=a(ls);tc=i(Ju,"MarianMTModel"),Ju.forEach(t),nc=i(xs," forward method, overrides the "),ma=s(xs,"CODE",{});var Yu=a(ma);oc=i(Yu,"__call__"),Yu.forEach(t),sc=i(xs," special method."),xs.forEach(t),ac=l(Ne),k(Rt.$$.fragment,Ne),rc=l(Ne),so=s(Ne,"P",{});var di=a(so);ic=i(di,`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints.
Available models are listed `),ao=s(di,"A",{href:!0,rel:!0});var Ku=a(ao);dc=i(Ku,"here"),Ku.forEach(t),lc=i(di,"."),di.forEach(t),cc=l(Ne),fa=s(Ne,"P",{});var Zu=a(fa);pc=i(Zu,"Examples:"),Zu.forEach(t),hc=l(Ne),k(ro.$$.fragment,Ne),Ne.forEach(t),rn.forEach(t),yr=l(n),xt=s(n,"H2",{class:!0});var li=a(xt);Bt=s(li,"A",{id:!0,class:!0,href:!0});var Xu=a(Bt);ga=s(Xu,"SPAN",{});var Qu=a(ga);k(io.$$.fragment,Qu),Qu.forEach(t),Xu.forEach(t),uc=l(li),_a=s(li,"SPAN",{});var em=a(_a);mc=i(em,"MarianForCausalLM"),em.forEach(t),li.forEach(t),br=l(n),lo=s(n,"DIV",{class:!0});var tm=a(lo);Ye=s(tm,"DIV",{class:!0});var ws=a(Ye);k(co.$$.fragment,ws),fc=l(ws),va=s(ws,"P",{});var nm=a(va);gc=i(nm,"Example:"),nm.forEach(t),_c=l(ws),k(po.$$.fragment,ws),ws.forEach(t),tm.forEach(t),xr=l(n),wt=s(n,"H2",{class:!0});var ci=a(wt);Vt=s(ci,"A",{id:!0,class:!0,href:!0});var om=a(Vt);ka=s(om,"SPAN",{});var sm=a(ka);k(ho.$$.fragment,sm),sm.forEach(t),om.forEach(t),vc=l(ci),Ta=s(ci,"SPAN",{});var am=a(Ta);kc=i(am,"TFMarianModel"),am.forEach(t),ci.forEach(t),wr=l(n),ce=s(n,"DIV",{class:!0});var Xe=a(ce);k(uo.$$.fragment,Xe),Tc=l(Xe),mo=s(Xe,"P",{});var pi=a(mo);Mc=i(pi,`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),cs=s(pi,"A",{href:!0});var rm=a(cs);yc=i(rm,"TFPreTrainedModel"),rm.forEach(t),bc=i(pi,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),pi.forEach(t),xc=l(Xe),fo=s(Xe,"P",{});var hi=a(fo);wc=i(hi,"This model is also a "),go=s(hi,"A",{href:!0,rel:!0});var im=a(go);zc=i(im,"tf.keras.Model"),im.forEach(t),$c=i(hi,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),hi.forEach(t),jc=l(Xe),k(Gt.$$.fragment,Xe),Ec=l(Xe),fe=s(Xe,"DIV",{class:!0});var Qe=a(fe);k(_o.$$.fragment,Qe),Pc=l(Qe),zt=s(Qe,"P",{});var zs=a(zt);qc=i(zs,"The "),ps=s(zs,"A",{href:!0});var dm=a(ps);Fc=i(dm,"TFMarianModel"),dm.forEach(t),Nc=i(zs," forward method, overrides the "),Ma=s(zs,"CODE",{});var lm=a(Ma);Cc=i(lm,"__call__"),lm.forEach(t),Ic=i(zs," special method."),zs.forEach(t),Lc=l(Qe),k(Jt.$$.fragment,Qe),Ac=l(Qe),ya=s(Qe,"P",{});var cm=a(ya);Sc=i(cm,"Example:"),cm.forEach(t),Oc=l(Qe),k(vo.$$.fragment,Qe),Qe.forEach(t),Xe.forEach(t),zr=l(n),$t=s(n,"H2",{class:!0});var ui=a($t);Yt=s(ui,"A",{id:!0,class:!0,href:!0});var pm=a(Yt);ba=s(pm,"SPAN",{});var hm=a(ba);k(ko.$$.fragment,hm),hm.forEach(t),pm.forEach(t),Dc=l(ui),xa=s(ui,"SPAN",{});var um=a(xa);Hc=i(um,"TFMarianMTModel"),um.forEach(t),ui.forEach(t),$r=l(n),pe=s(n,"DIV",{class:!0});var et=a(pe);k(To.$$.fragment,et),Uc=l(et),Mo=s(et,"P",{});var mi=a(Mo);Wc=i(mi,`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),hs=s(mi,"A",{href:!0});var mm=a(hs);Rc=i(mm,"TFPreTrainedModel"),mm.forEach(t),Bc=i(mi,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),mi.forEach(t),Vc=l(et),yo=s(et,"P",{});var fi=a(yo);Gc=i(fi,"This model is also a "),bo=s(fi,"A",{href:!0,rel:!0});var fm=a(bo);Jc=i(fm,"tf.keras.Model"),fm.forEach(t),Yc=i(fi,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),fi.forEach(t),Kc=l(et),k(Kt.$$.fragment,et),Zc=l(et),Y=s(et,"DIV",{class:!0});var Ce=a(Y);k(xo.$$.fragment,Ce),Xc=l(Ce),jt=s(Ce,"P",{});var $s=a(jt);Qc=i($s,"The "),us=s($s,"A",{href:!0});var gm=a(us);ep=i(gm,"TFMarianMTModel"),gm.forEach(t),tp=i($s," forward method, overrides the "),wa=s($s,"CODE",{});var _m=a(wa);np=i(_m,"__call__"),_m.forEach(t),op=i($s," special method."),$s.forEach(t),sp=l(Ce),k(Zt.$$.fragment,Ce),ap=l(Ce),wo=s(Ce,"P",{});var gi=a(wo);rp=i(gi,`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),zo=s(gi,"A",{href:!0,rel:!0});var vm=a(zo);ip=i(vm,"here"),vm.forEach(t),dp=i(gi,"."),gi.forEach(t),lp=l(Ce),za=s(Ce,"P",{});var km=a(za);cp=i(km,"Examples:"),km.forEach(t),pp=l(Ce),k($o.$$.fragment,Ce),Ce.forEach(t),et.forEach(t),jr=l(n),Et=s(n,"H2",{class:!0});var _i=a(Et);Xt=s(_i,"A",{id:!0,class:!0,href:!0});var Tm=a(Xt);$a=s(Tm,"SPAN",{});var Mm=a($a);k(jo.$$.fragment,Mm),Mm.forEach(t),Tm.forEach(t),hp=l(_i),ja=s(_i,"SPAN",{});var ym=a(ja);up=i(ym,"FlaxMarianModel"),ym.forEach(t),_i.forEach(t),Er=l(n),R=s(n,"DIV",{class:!0});var Ie=a(R);k(Eo.$$.fragment,Ie),mp=l(Ie),Po=s(Ie,"P",{});var vi=a(Po);fp=i(vi,`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ms=s(vi,"A",{href:!0});var bm=a(ms);gp=i(bm,"FlaxPreTrainedModel"),bm.forEach(t),_p=i(vi,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),vi.forEach(t),vp=l(Ie),qo=s(Ie,"P",{});var ki=a(qo);kp=i(ki,"This model is also a Flax Linen "),Fo=s(ki,"A",{href:!0,rel:!0});var xm=a(Fo);Tp=i(xm,"flax.nn.Module"),xm.forEach(t),Mp=i(ki,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ki.forEach(t),yp=l(Ie),Ea=s(Ie,"P",{});var wm=a(Ea);bp=i(wm,"Finally, this model supports inherent JAX features such as:"),wm.forEach(t),xp=l(Ie),Ve=s(Ie,"UL",{});var dn=a(Ve);Pa=s(dn,"LI",{});var zm=a(Pa);No=s(zm,"A",{href:!0,rel:!0});var $m=a(No);wp=i($m,"Just-In-Time (JIT) compilation"),$m.forEach(t),zm.forEach(t),zp=l(dn),qa=s(dn,"LI",{});var jm=a(qa);Co=s(jm,"A",{href:!0,rel:!0});var Em=a(Co);$p=i(Em,"Automatic Differentiation"),Em.forEach(t),jm.forEach(t),jp=l(dn),Fa=s(dn,"LI",{});var Pm=a(Fa);Io=s(Pm,"A",{href:!0,rel:!0});var qm=a(Io);Ep=i(qm,"Vectorization"),qm.forEach(t),Pm.forEach(t),Pp=l(dn),Na=s(dn,"LI",{});var Fm=a(Na);Lo=s(Fm,"A",{href:!0,rel:!0});var Nm=a(Lo);qp=i(Nm,"Parallelization"),Nm.forEach(t),Fm.forEach(t),dn.forEach(t),Fp=l(Ie),ge=s(Ie,"DIV",{class:!0});var tt=a(ge);k(Ao.$$.fragment,tt),Np=l(tt),Pt=s(tt,"P",{});var js=a(Pt);Cp=i(js,"The "),Ca=s(js,"CODE",{});var Cm=a(Ca);Ip=i(Cm,"FlaxMarianPreTrainedModel"),Cm.forEach(t),Lp=i(js," forward method, overrides the "),Ia=s(js,"CODE",{});var Im=a(Ia);Ap=i(Im,"__call__"),Im.forEach(t),Sp=i(js," special method."),js.forEach(t),Op=l(tt),k(Qt.$$.fragment,tt),Dp=l(tt),La=s(tt,"P",{});var Lm=a(La);Hp=i(Lm,"Example:"),Lm.forEach(t),Up=l(tt),k(So.$$.fragment,tt),tt.forEach(t),Ie.forEach(t),Pr=l(n),qt=s(n,"H2",{class:!0});var Ti=a(qt);en=s(Ti,"A",{id:!0,class:!0,href:!0});var Am=a(en);Aa=s(Am,"SPAN",{});var Sm=a(Aa);k(Oo.$$.fragment,Sm),Sm.forEach(t),Am.forEach(t),Wp=l(Ti),Sa=s(Ti,"SPAN",{});var Om=a(Sa);Rp=i(Om,"FlaxMarianMTModel"),Om.forEach(t),Ti.forEach(t),qr=l(n),B=s(n,"DIV",{class:!0});var Le=a(B);k(Do.$$.fragment,Le),Bp=l(Le),Ho=s(Le,"P",{});var Mi=a(Ho);Vp=i(Mi,`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),fs=s(Mi,"A",{href:!0});var Dm=a(fs);Gp=i(Dm,"FlaxPreTrainedModel"),Dm.forEach(t),Jp=i(Mi,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Mi.forEach(t),Yp=l(Le),Uo=s(Le,"P",{});var yi=a(Uo);Kp=i(yi,"This model is also a Flax Linen "),Wo=s(yi,"A",{href:!0,rel:!0});var Hm=a(Wo);Zp=i(Hm,"flax.nn.Module"),Hm.forEach(t),Xp=i(yi,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),yi.forEach(t),Qp=l(Le),Oa=s(Le,"P",{});var Um=a(Oa);eh=i(Um,"Finally, this model supports inherent JAX features such as:"),Um.forEach(t),th=l(Le),Ge=s(Le,"UL",{});var ln=a(Ge);Da=s(ln,"LI",{});var Wm=a(Da);Ro=s(Wm,"A",{href:!0,rel:!0});var Rm=a(Ro);nh=i(Rm,"Just-In-Time (JIT) compilation"),Rm.forEach(t),Wm.forEach(t),oh=l(ln),Ha=s(ln,"LI",{});var Bm=a(Ha);Bo=s(Bm,"A",{href:!0,rel:!0});var Vm=a(Bo);sh=i(Vm,"Automatic Differentiation"),Vm.forEach(t),Bm.forEach(t),ah=l(ln),Ua=s(ln,"LI",{});var Gm=a(Ua);Vo=s(Gm,"A",{href:!0,rel:!0});var Jm=a(Vo);rh=i(Jm,"Vectorization"),Jm.forEach(t),Gm.forEach(t),ih=l(ln),Wa=s(ln,"LI",{});var Ym=a(Wa);Go=s(Ym,"A",{href:!0,rel:!0});var Km=a(Go);dh=i(Km,"Parallelization"),Km.forEach(t),Ym.forEach(t),ln.forEach(t),lh=l(Le),_e=s(Le,"DIV",{class:!0});var nt=a(_e);k(Jo.$$.fragment,nt),ch=l(nt),Ft=s(nt,"P",{});var Es=a(Ft);ph=i(Es,"The "),Ra=s(Es,"CODE",{});var Zm=a(Ra);hh=i(Zm,"FlaxMarianPreTrainedModel"),Zm.forEach(t),uh=i(Es," forward method, overrides the "),Ba=s(Es,"CODE",{});var Xm=a(Ba);mh=i(Xm,"__call__"),Xm.forEach(t),fh=i(Es," special method."),Es.forEach(t),gh=l(nt),k(tn.$$.fragment,nt),_h=l(nt),Va=s(nt,"P",{});var Qm=a(Va);vh=i(Qm,"Example:"),Qm.forEach(t),kh=l(nt),k(Yo.$$.fragment,nt),nt.forEach(t),Le.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(mf)),c(g,"id","marianmt"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#marianmt"),c(f,"class","relative group"),c(Q,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),c(Q,"rel","nofollow"),c(P,"id","implementation-notes"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#implementation-notes"),c(I,"class","relative group"),c(re,"href","https://huggingface.co/Helsinki-NLP"),c(re,"rel","nofollow"),c(j,"href","https://researchportal.helsinki.fi/en/persons/j%C3%B6rg-tiedemann"),c(j,"rel","nofollow"),c(be,"href","https://marian-nmt.github.io/"),c(be,"rel","nofollow"),c(Zo,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(fn,"href","https://huggingface.co/sshleifer"),c(fn,"rel","nofollow"),c(Nt,"id","naming"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#naming"),c(pt,"class","relative group"),c(vn,"href","https://developers.google.com/admin-sdk/directory/v1/languages"),c(vn,"rel","nofollow"),c(Ct,"id","examples"),c(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ct,"href","#examples"),c(ut,"class","relative group"),c(Tn,"href","https://github.com/huggingface/transformers/blob/master/examples/research_projects/seq2seq-distillation/train_distil_marian_enro_teacher.sh"),c(Tn,"rel","nofollow"),c(Mn,"href","https://github.com/huggingface/transformers/blob/master/examples/research_projects/seq2seq-distillation/train_distil_marian_no_teacher.sh"),c(Mn,"rel","nofollow"),c(It,"id","multilingual-models"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#multilingual-models"),c(mt,"class","relative group"),c(zn,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-roa"),c(zn,"rel","nofollow"),c(jn,"href","https://github.com/Helsinki-NLP/Tatoeba-Challenge"),c(jn,"rel","nofollow"),c(At,"id","old-style-multilingual-models"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#old-style-multilingual-models"),c(ft,"class","relative group"),c(St,"id","transformers.MarianConfig"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.MarianConfig"),c(gt,"class","relative group"),c(ns,"href","/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianModel"),c(Ln,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-de"),c(Ln,"rel","nofollow"),c(os,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(ss,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(le,"class","docstring"),c(Ot,"id","transformers.MarianTokenizer"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.MarianTokenizer"),c(kt,"class","relative group"),c(Hn,"href","https://github.com/google/sentencepiece"),c(Hn,"rel","nofollow"),c(as,"href","/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Dt,"class","docstring"),c(W,"class","docstring"),c(Ht,"id","transformers.MarianModel"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.MarianModel"),c(Tt,"class","relative group"),c(rs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Yn,"rel","nofollow"),c(is,"href","/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianModel"),c(me,"class","docstring"),c(we,"class","docstring"),c(Wt,"id","transformers.MarianMTModel"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#transformers.MarianMTModel"),c(yt,"class","relative group"),c(ds,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(no,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(no,"rel","nofollow"),c(ls,"href","/docs/transformers/v4.15.0/en/model_doc/marian#transformers.MarianMTModel"),c(ao,"href","https://huggingface.co/models?search=Helsinki-NLP"),c(ao,"rel","nofollow"),c(J,"class","docstring"),c(ze,"class","docstring"),c(Bt,"id","transformers.MarianForCausalLM"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#transformers.MarianForCausalLM"),c(xt,"class","relative group"),c(Ye,"class","docstring"),c(lo,"class","docstring"),c(Vt,"id","transformers.TFMarianModel"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.TFMarianModel"),c(wt,"class","relative group"),c(cs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(go,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(go,"rel","nofollow"),c(ps,"href","/docs/transformers/v4.15.0/en/model_doc/marian#transformers.TFMarianModel"),c(fe,"class","docstring"),c(ce,"class","docstring"),c(Yt,"id","transformers.TFMarianMTModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.TFMarianMTModel"),c($t,"class","relative group"),c(hs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(bo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(bo,"rel","nofollow"),c(us,"href","/docs/transformers/v4.15.0/en/model_doc/marian#transformers.TFMarianMTModel"),c(zo,"href","https://huggingface.co/models?search=Helsinki-NLP"),c(zo,"rel","nofollow"),c(Y,"class","docstring"),c(pe,"class","docstring"),c(Xt,"id","transformers.FlaxMarianModel"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.FlaxMarianModel"),c(Et,"class","relative group"),c(ms,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Fo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Fo,"rel","nofollow"),c(No,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(No,"rel","nofollow"),c(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Co,"rel","nofollow"),c(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Io,"rel","nofollow"),c(Lo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Lo,"rel","nofollow"),c(ge,"class","docstring"),c(R,"class","docstring"),c(en,"id","transformers.FlaxMarianMTModel"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.FlaxMarianMTModel"),c(qt,"class","relative group"),c(fs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Wo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Wo,"rel","nofollow"),c(Ro,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ro,"rel","nofollow"),c(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Bo,"rel","nofollow"),c(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Vo,"rel","nofollow"),c(Go,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Go,"rel","nofollow"),c(_e,"class","docstring"),c(B,"class","docstring")},m(n,p){e(document.head,u),h(n,z,p),h(n,f,p),e(f,g),e(g,w),T(x,w,null),e(f,_),e(f,$),e($,Ae),h(n,ue,p),h(n,E,p),e(E,ve),e(ve,X),e(E,Se),e(E,Q),e(Q,ee),e(E,Oe),h(n,je,p),h(n,V,p),e(V,A),h(n,Ee,p),h(n,I,p),e(I,P),e(P,F),T(te,F,null),e(I,ne),e(I,ke),e(ke,De),h(n,G,p),h(n,q,p),e(q,Te),e(Te,N),e(N,He),e(q,oe),e(q,Me),e(Me,se),e(se,ae),e(se,re),e(re,Ue),e(se,S),e(q,We),e(q,O),e(O,D),e(D,m),e(D,j),e(j,ye),e(D,ot),e(D,be),e(be,H),e(D,st),e(q,at),e(q,Re),e(Re,L),e(L,ie),e(q,rt),e(q,Be),e(Be,U),e(U,it),e(q,dt),e(q,de),e(de,xe),e(xe,bi),e(xe,Zo),e(Zo,xi),e(xe,wi),e(de,zi),e(de,lt),e(lt,pn),e(pn,$i),e(pn,Ps),e(Ps,ji),e(pn,Ei),e(lt,Pi),e(lt,hn),e(hn,qi),e(hn,qs),e(qs,Fi),e(hn,Ni),e(lt,Ci),e(lt,ct),e(ct,Ii),e(ct,Fs),e(Fs,Li),e(ct,Ai),e(ct,Ns),e(Ns,Si),e(ct,Oi),e(q,Di),e(q,Cs),e(Cs,un),e(un,Hi),e(un,Is),e(Is,Ui),e(un,Wi),e(q,Ri),e(q,Ls),e(Ls,mn),e(mn,Bi),e(mn,fn),e(fn,Vi),e(mn,Gi),h(n,Qa,p),h(n,pt,p),e(pt,Nt),e(Nt,As),T(gn,As,null),e(pt,Ji),e(pt,Ss),e(Ss,Yi),h(n,er,p),h(n,Pe,p),e(Pe,Xo),e(Xo,Ki),e(Xo,Os),e(Os,Zi),e(Pe,Xi),e(Pe,_n),e(_n,Qi),e(_n,vn),e(vn,ed),e(_n,td),e(Pe,nd),e(Pe,ht),e(ht,od),e(ht,Ds),e(Ds,sd),e(ht,ad),e(ht,Hs),e(Hs,rd),e(ht,id),e(Pe,dd),e(Pe,Us),e(Us,ld),h(n,tr,p),h(n,ut,p),e(ut,Ct),e(Ct,Ws),T(kn,Ws,null),e(ut,cd),e(ut,Rs),e(Rs,pd),h(n,nr,p),h(n,Je,p),e(Je,Bs),e(Bs,hd),e(Je,ud),e(Je,Vs),e(Vs,Tn),e(Tn,md),e(Je,fd),e(Je,Gs),e(Gs,Mn),e(Mn,gd),h(n,or,p),h(n,mt,p),e(mt,It),e(It,Js),T(yn,Js,null),e(mt,_d),e(mt,Ys),e(Ys,vd),h(n,sr,p),h(n,qe,p),e(qe,bn),e(bn,kd),e(bn,Ks),e(Ks,Td),e(bn,Md),e(qe,yd),e(qe,xn),e(xn,bd),e(xn,Zs),e(Zs,xd),e(xn,wd),e(qe,zd),e(qe,wn),e(wn,$d),e(wn,zn),e(zn,jd),e(wn,Ed),e(qe,Pd),e(qe,$n),e($n,qd),e($n,Xs),e(Xs,Fd),e($n,Nd),h(n,ar,p),h(n,Lt,p),e(Lt,Cd),e(Lt,jn),e(jn,Id),e(Lt,Ld),h(n,rr,p),T(En,n,p),h(n,ir,p),h(n,Qo,p),e(Qo,Ad),h(n,dr,p),T(Pn,n,p),h(n,lr,p),h(n,ft,p),e(ft,At),e(At,Qs),T(qn,Qs,null),e(ft,Sd),e(ft,ea),e(ea,Od),h(n,cr,p),h(n,es,p),e(es,Dd),h(n,pr,p),T(Fn,n,p),h(n,hr,p),h(n,ts,p),e(ts,Hd),h(n,ur,p),T(Nn,n,p),h(n,mr,p),h(n,gt,p),e(gt,St),e(St,ta),T(Cn,ta,null),e(gt,Ud),e(gt,na),e(na,Wd),h(n,fr,p),h(n,le,p),T(In,le,null),e(le,Rd),e(le,_t),e(_t,Bd),e(_t,ns),e(ns,Vd),e(_t,Gd),e(_t,Ln),e(Ln,Jd),e(_t,Yd),e(le,Kd),e(le,vt),e(vt,Zd),e(vt,os),e(os,Xd),e(vt,Qd),e(vt,ss),e(ss,el),e(vt,tl),e(le,nl),e(le,oa),e(oa,ol),e(le,sl),T(An,le,null),h(n,gr,p),h(n,kt,p),e(kt,Ot),e(Ot,sa),T(Sn,sa,null),e(kt,al),e(kt,aa),e(aa,rl),h(n,_r,p),h(n,W,p),T(On,W,null),e(W,il),e(W,Dn),e(Dn,dl),e(Dn,Hn),e(Hn,ll),e(Dn,cl),e(W,pl),e(W,Un),e(Un,hl),e(Un,as),e(as,ul),e(Un,ml),e(W,fl),e(W,ra),e(ra,gl),e(W,_l),T(Wn,W,null),e(W,vl),e(W,Dt),T(Rn,Dt,null),e(Dt,kl),e(Dt,ia),e(ia,Tl),h(n,vr,p),h(n,Tt,p),e(Tt,Ht),e(Ht,da),T(Bn,da,null),e(Tt,Ml),e(Tt,la),e(la,yl),h(n,kr,p),h(n,we,p),T(Vn,we,null),e(we,bl),e(we,Gn),e(Gn,xl),e(Gn,rs),e(rs,wl),e(Gn,zl),e(we,$l),e(we,Jn),e(Jn,jl),e(Jn,Yn),e(Yn,El),e(Jn,Pl),e(we,ql),e(we,me),T(Kn,me,null),e(me,Fl),e(me,Mt),e(Mt,Nl),e(Mt,is),e(is,Cl),e(Mt,Il),e(Mt,ca),e(ca,Ll),e(Mt,Al),e(me,Sl),T(Ut,me,null),e(me,Ol),e(me,pa),e(pa,Dl),e(me,Hl),T(Zn,me,null),h(n,Tr,p),h(n,yt,p),e(yt,Wt),e(Wt,ha),T(Xn,ha,null),e(yt,Ul),e(yt,ua),e(ua,Wl),h(n,Mr,p),h(n,ze,p),T(Qn,ze,null),e(ze,Rl),e(ze,eo),e(eo,Bl),e(eo,ds),e(ds,Vl),e(eo,Gl),e(ze,Jl),e(ze,to),e(to,Yl),e(to,no),e(no,Kl),e(to,Zl),e(ze,Xl),e(ze,J),T(oo,J,null),e(J,Ql),e(J,bt),e(bt,ec),e(bt,ls),e(ls,tc),e(bt,nc),e(bt,ma),e(ma,oc),e(bt,sc),e(J,ac),T(Rt,J,null),e(J,rc),e(J,so),e(so,ic),e(so,ao),e(ao,dc),e(so,lc),e(J,cc),e(J,fa),e(fa,pc),e(J,hc),T(ro,J,null),h(n,yr,p),h(n,xt,p),e(xt,Bt),e(Bt,ga),T(io,ga,null),e(xt,uc),e(xt,_a),e(_a,mc),h(n,br,p),h(n,lo,p),e(lo,Ye),T(co,Ye,null),e(Ye,fc),e(Ye,va),e(va,gc),e(Ye,_c),T(po,Ye,null),h(n,xr,p),h(n,wt,p),e(wt,Vt),e(Vt,ka),T(ho,ka,null),e(wt,vc),e(wt,Ta),e(Ta,kc),h(n,wr,p),h(n,ce,p),T(uo,ce,null),e(ce,Tc),e(ce,mo),e(mo,Mc),e(mo,cs),e(cs,yc),e(mo,bc),e(ce,xc),e(ce,fo),e(fo,wc),e(fo,go),e(go,zc),e(fo,$c),e(ce,jc),T(Gt,ce,null),e(ce,Ec),e(ce,fe),T(_o,fe,null),e(fe,Pc),e(fe,zt),e(zt,qc),e(zt,ps),e(ps,Fc),e(zt,Nc),e(zt,Ma),e(Ma,Cc),e(zt,Ic),e(fe,Lc),T(Jt,fe,null),e(fe,Ac),e(fe,ya),e(ya,Sc),e(fe,Oc),T(vo,fe,null),h(n,zr,p),h(n,$t,p),e($t,Yt),e(Yt,ba),T(ko,ba,null),e($t,Dc),e($t,xa),e(xa,Hc),h(n,$r,p),h(n,pe,p),T(To,pe,null),e(pe,Uc),e(pe,Mo),e(Mo,Wc),e(Mo,hs),e(hs,Rc),e(Mo,Bc),e(pe,Vc),e(pe,yo),e(yo,Gc),e(yo,bo),e(bo,Jc),e(yo,Yc),e(pe,Kc),T(Kt,pe,null),e(pe,Zc),e(pe,Y),T(xo,Y,null),e(Y,Xc),e(Y,jt),e(jt,Qc),e(jt,us),e(us,ep),e(jt,tp),e(jt,wa),e(wa,np),e(jt,op),e(Y,sp),T(Zt,Y,null),e(Y,ap),e(Y,wo),e(wo,rp),e(wo,zo),e(zo,ip),e(wo,dp),e(Y,lp),e(Y,za),e(za,cp),e(Y,pp),T($o,Y,null),h(n,jr,p),h(n,Et,p),e(Et,Xt),e(Xt,$a),T(jo,$a,null),e(Et,hp),e(Et,ja),e(ja,up),h(n,Er,p),h(n,R,p),T(Eo,R,null),e(R,mp),e(R,Po),e(Po,fp),e(Po,ms),e(ms,gp),e(Po,_p),e(R,vp),e(R,qo),e(qo,kp),e(qo,Fo),e(Fo,Tp),e(qo,Mp),e(R,yp),e(R,Ea),e(Ea,bp),e(R,xp),e(R,Ve),e(Ve,Pa),e(Pa,No),e(No,wp),e(Ve,zp),e(Ve,qa),e(qa,Co),e(Co,$p),e(Ve,jp),e(Ve,Fa),e(Fa,Io),e(Io,Ep),e(Ve,Pp),e(Ve,Na),e(Na,Lo),e(Lo,qp),e(R,Fp),e(R,ge),T(Ao,ge,null),e(ge,Np),e(ge,Pt),e(Pt,Cp),e(Pt,Ca),e(Ca,Ip),e(Pt,Lp),e(Pt,Ia),e(Ia,Ap),e(Pt,Sp),e(ge,Op),T(Qt,ge,null),e(ge,Dp),e(ge,La),e(La,Hp),e(ge,Up),T(So,ge,null),h(n,Pr,p),h(n,qt,p),e(qt,en),e(en,Aa),T(Oo,Aa,null),e(qt,Wp),e(qt,Sa),e(Sa,Rp),h(n,qr,p),h(n,B,p),T(Do,B,null),e(B,Bp),e(B,Ho),e(Ho,Vp),e(Ho,fs),e(fs,Gp),e(Ho,Jp),e(B,Yp),e(B,Uo),e(Uo,Kp),e(Uo,Wo),e(Wo,Zp),e(Uo,Xp),e(B,Qp),e(B,Oa),e(Oa,eh),e(B,th),e(B,Ge),e(Ge,Da),e(Da,Ro),e(Ro,nh),e(Ge,oh),e(Ge,Ha),e(Ha,Bo),e(Bo,sh),e(Ge,ah),e(Ge,Ua),e(Ua,Vo),e(Vo,rh),e(Ge,ih),e(Ge,Wa),e(Wa,Go),e(Go,dh),e(B,lh),e(B,_e),T(Jo,_e,null),e(_e,ch),e(_e,Ft),e(Ft,ph),e(Ft,Ra),e(Ra,hh),e(Ft,uh),e(Ft,Ba),e(Ba,mh),e(Ft,fh),e(_e,gh),T(tn,_e,null),e(_e,_h),e(_e,Va),e(Va,vh),e(_e,kh),T(Yo,_e,null),Fr=!0},p(n,[p]){const Ko={};p&2&&(Ko.$$scope={dirty:p,ctx:n}),Ut.$set(Ko);const Ga={};p&2&&(Ga.$$scope={dirty:p,ctx:n}),Rt.$set(Ga);const Ja={};p&2&&(Ja.$$scope={dirty:p,ctx:n}),Gt.$set(Ja);const Ya={};p&2&&(Ya.$$scope={dirty:p,ctx:n}),Jt.$set(Ya);const nn={};p&2&&(nn.$$scope={dirty:p,ctx:n}),Kt.$set(nn);const Ka={};p&2&&(Ka.$$scope={dirty:p,ctx:n}),Zt.$set(Ka);const Za={};p&2&&(Za.$$scope={dirty:p,ctx:n}),Qt.$set(Za);const Xa={};p&2&&(Xa.$$scope={dirty:p,ctx:n}),tn.$set(Xa)},i(n){Fr||(M(x.$$.fragment,n),M(te.$$.fragment,n),M(gn.$$.fragment,n),M(kn.$$.fragment,n),M(yn.$$.fragment,n),M(En.$$.fragment,n),M(Pn.$$.fragment,n),M(qn.$$.fragment,n),M(Fn.$$.fragment,n),M(Nn.$$.fragment,n),M(Cn.$$.fragment,n),M(In.$$.fragment,n),M(An.$$.fragment,n),M(Sn.$$.fragment,n),M(On.$$.fragment,n),M(Wn.$$.fragment,n),M(Rn.$$.fragment,n),M(Bn.$$.fragment,n),M(Vn.$$.fragment,n),M(Kn.$$.fragment,n),M(Ut.$$.fragment,n),M(Zn.$$.fragment,n),M(Xn.$$.fragment,n),M(Qn.$$.fragment,n),M(oo.$$.fragment,n),M(Rt.$$.fragment,n),M(ro.$$.fragment,n),M(io.$$.fragment,n),M(co.$$.fragment,n),M(po.$$.fragment,n),M(ho.$$.fragment,n),M(uo.$$.fragment,n),M(Gt.$$.fragment,n),M(_o.$$.fragment,n),M(Jt.$$.fragment,n),M(vo.$$.fragment,n),M(ko.$$.fragment,n),M(To.$$.fragment,n),M(Kt.$$.fragment,n),M(xo.$$.fragment,n),M(Zt.$$.fragment,n),M($o.$$.fragment,n),M(jo.$$.fragment,n),M(Eo.$$.fragment,n),M(Ao.$$.fragment,n),M(Qt.$$.fragment,n),M(So.$$.fragment,n),M(Oo.$$.fragment,n),M(Do.$$.fragment,n),M(Jo.$$.fragment,n),M(tn.$$.fragment,n),M(Yo.$$.fragment,n),Fr=!0)},o(n){y(x.$$.fragment,n),y(te.$$.fragment,n),y(gn.$$.fragment,n),y(kn.$$.fragment,n),y(yn.$$.fragment,n),y(En.$$.fragment,n),y(Pn.$$.fragment,n),y(qn.$$.fragment,n),y(Fn.$$.fragment,n),y(Nn.$$.fragment,n),y(Cn.$$.fragment,n),y(In.$$.fragment,n),y(An.$$.fragment,n),y(Sn.$$.fragment,n),y(On.$$.fragment,n),y(Wn.$$.fragment,n),y(Rn.$$.fragment,n),y(Bn.$$.fragment,n),y(Vn.$$.fragment,n),y(Kn.$$.fragment,n),y(Ut.$$.fragment,n),y(Zn.$$.fragment,n),y(Xn.$$.fragment,n),y(Qn.$$.fragment,n),y(oo.$$.fragment,n),y(Rt.$$.fragment,n),y(ro.$$.fragment,n),y(io.$$.fragment,n),y(co.$$.fragment,n),y(po.$$.fragment,n),y(ho.$$.fragment,n),y(uo.$$.fragment,n),y(Gt.$$.fragment,n),y(_o.$$.fragment,n),y(Jt.$$.fragment,n),y(vo.$$.fragment,n),y(ko.$$.fragment,n),y(To.$$.fragment,n),y(Kt.$$.fragment,n),y(xo.$$.fragment,n),y(Zt.$$.fragment,n),y($o.$$.fragment,n),y(jo.$$.fragment,n),y(Eo.$$.fragment,n),y(Ao.$$.fragment,n),y(Qt.$$.fragment,n),y(So.$$.fragment,n),y(Oo.$$.fragment,n),y(Do.$$.fragment,n),y(Jo.$$.fragment,n),y(tn.$$.fragment,n),y(Yo.$$.fragment,n),Fr=!1},d(n){t(u),n&&t(z),n&&t(f),b(x),n&&t(ue),n&&t(E),n&&t(je),n&&t(V),n&&t(Ee),n&&t(I),b(te),n&&t(G),n&&t(q),n&&t(Qa),n&&t(pt),b(gn),n&&t(er),n&&t(Pe),n&&t(tr),n&&t(ut),b(kn),n&&t(nr),n&&t(Je),n&&t(or),n&&t(mt),b(yn),n&&t(sr),n&&t(qe),n&&t(ar),n&&t(Lt),n&&t(rr),b(En,n),n&&t(ir),n&&t(Qo),n&&t(dr),b(Pn,n),n&&t(lr),n&&t(ft),b(qn),n&&t(cr),n&&t(es),n&&t(pr),b(Fn,n),n&&t(hr),n&&t(ts),n&&t(ur),b(Nn,n),n&&t(mr),n&&t(gt),b(Cn),n&&t(fr),n&&t(le),b(In),b(An),n&&t(gr),n&&t(kt),b(Sn),n&&t(_r),n&&t(W),b(On),b(Wn),b(Rn),n&&t(vr),n&&t(Tt),b(Bn),n&&t(kr),n&&t(we),b(Vn),b(Kn),b(Ut),b(Zn),n&&t(Tr),n&&t(yt),b(Xn),n&&t(Mr),n&&t(ze),b(Qn),b(oo),b(Rt),b(ro),n&&t(yr),n&&t(xt),b(io),n&&t(br),n&&t(lo),b(co),b(po),n&&t(xr),n&&t(wt),b(ho),n&&t(wr),n&&t(ce),b(uo),b(Gt),b(_o),b(Jt),b(vo),n&&t(zr),n&&t($t),b(ko),n&&t($r),n&&t(pe),b(To),b(Kt),b(xo),b(Zt),b($o),n&&t(jr),n&&t(Et),b(jo),n&&t(Er),n&&t(R),b(Eo),b(Ao),b(Qt),b(So),n&&t(Pr),n&&t(qt),b(Oo),n&&t(qr),n&&t(B),b(Do),b(Jo),b(tn),b(Yo)}}}const mf={local:"marianmt",sections:[{local:"implementation-notes",title:"Implementation Notes"},{local:"naming",title:"Naming"},{local:"examples",title:"Examples"},{local:"multilingual-models",title:"Multilingual Models"},{local:"old-style-multilingual-models",title:"Old Style Multi-Lingual Models"},{local:"transformers.MarianConfig",title:"MarianConfig"},{local:"transformers.MarianTokenizer",title:"MarianTokenizer"},{local:"transformers.MarianModel",title:"MarianModel"},{local:"transformers.MarianMTModel",title:"MarianMTModel"},{local:"transformers.MarianForCausalLM",title:"MarianForCausalLM"},{local:"transformers.TFMarianModel",title:"TFMarianModel"},{local:"transformers.TFMarianMTModel",title:"TFMarianMTModel"},{local:"transformers.FlaxMarianModel",title:"FlaxMarianModel"},{local:"transformers.FlaxMarianMTModel",title:"FlaxMarianMTModel"}],title:"MarianMT"};function ff(C,u,z){let{fw:f}=u;return C.$$set=g=>{"fw"in g&&z(0,f=g.fw)},[f]}class yf extends ef{constructor(u){super();tf(this,u,ff,uf,nf,{fw:0})}}export{yf as default,mf as metadata};
