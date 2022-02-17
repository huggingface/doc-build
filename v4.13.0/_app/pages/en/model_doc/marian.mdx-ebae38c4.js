import{S as Fm,i as Nm,s as Cm,e as o,k as d,w as v,t as r,L as Im,c as s,d as t,m as l,a,x as T,h as i,b as c,J as e,g as h,y as M,q as b,o as y,B as x}from"../../../chunks/vendor-e859c359.js";import{T as ln}from"../../../chunks/Tip-edc75249.js";import{D as Y}from"../../../chunks/Docstring-ade913b3.js";import{C as Ne}from"../../../chunks/CodeBlock-ce4317c2.js";import{I as ce}from"../../../chunks/IconCopyLink-5fae3b20.js";import"../../../chunks/CopyButton-77addb3d.js";function Lm(C){let u,z,f,g,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=o("code"),g=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(k){u=s(k,"P",{});var _=a(u);z=i(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(k,_){h(k,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(k){k&&t(u)}}}function Am(C){let u,z,f,g,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=o("code"),g=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(k){u=s(k,"P",{});var _=a(u);z=i(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(k,_){h(k,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(k){k&&t(u)}}}function Sm(C){let u,z,f,g,w,k,_,$,Ce,pe,E,_e,K,Ie,Z,X,Le,ze,V,A,$e,I,q,F,Q,ee,ke,Ae,G,P,ve,N,Se,te,Te,ne,oe,se,Oe,S,De,O,D;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),f=d(),g=o("ul"),w=o("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),_=d(),$=o("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),pe=d(),E=o("p"),_e=r("This second option is useful when using "),K=o("code"),Ie=r("tf.keras.Model.fit"),Z=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),X=o("code"),Le=r("model(inputs)"),ze=r("."),V=d(),A=o("p"),$e=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),I=d(),q=o("ul"),F=o("li"),Q=r("a single Tensor with "),ee=o("code"),ke=r("input_ids"),Ae=r(" only and nothing else: "),G=o("code"),P=r("model(input_ids)"),ve=d(),N=o("li"),Se=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=o("code"),Te=r("model([input_ids, attention_mask])"),ne=r(" or "),oe=o("code"),se=r("model([input_ids, attention_mask, token_type_ids])"),Oe=d(),S=o("li"),De=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=o("code"),D=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=l(m),g=s(m,"UL",{});var Me=a(g);w=s(Me,"LI",{});var nt=a(w);k=i(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),_=l(Me),$=s(Me,"LI",{});var be=a($);Ce=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),Me.forEach(t),pe=l(m),E=s(m,"P",{});var H=a(E);_e=i(H,"This second option is useful when using "),K=s(H,"CODE",{});var ot=a(K);Ie=i(ot,"tf.keras.Model.fit"),ot.forEach(t),Z=i(H,` method which currently requires having all
the tensors in the first argument of the model call function: `),X=s(H,"CODE",{});var st=a(X);Le=i(st,"model(inputs)"),st.forEach(t),ze=i(H,"."),H.forEach(t),V=l(m),A=s(m,"P",{});var He=a(A);$e=i(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),He.forEach(t),I=l(m),q=s(m,"UL",{});var L=a(q);F=s(L,"LI",{});var ae=a(F);Q=i(ae,"a single Tensor with "),ee=s(ae,"CODE",{});var at=a(ee);ke=i(at,"input_ids"),at.forEach(t),Ae=i(ae," only and nothing else: "),G=s(ae,"CODE",{});var Ue=a(G);P=i(Ue,"model(input_ids)"),Ue.forEach(t),ae.forEach(t),ve=l(L),N=s(L,"LI",{});var U=a(N);Se=i(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=s(U,"CODE",{});var rt=a(te);Te=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),ne=i(U," or "),oe=s(U,"CODE",{});var it=a(oe);se=i(it,"model([input_ids, attention_mask, token_type_ids])"),it.forEach(t),U.forEach(t),Oe=l(L),S=s(L,"LI",{});var re=a(S);De=i(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=s(re,"CODE",{});var ye=a(O);D=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),re.forEach(t),L.forEach(t)},m(m,j){h(m,u,j),e(u,z),h(m,f,j),h(m,g,j),e(g,w),e(w,k),e(g,_),e(g,$),e($,Ce),h(m,pe,j),h(m,E,j),e(E,_e),e(E,K),e(K,Ie),e(E,Z),e(E,X),e(X,Le),e(E,ze),h(m,V,j),h(m,A,j),e(A,$e),h(m,I,j),h(m,q,j),e(q,F),e(F,Q),e(F,ee),e(ee,ke),e(F,Ae),e(F,G),e(G,P),e(q,ve),e(q,N),e(N,Se),e(N,te),e(te,Te),e(N,ne),e(N,oe),e(oe,se),e(q,Oe),e(q,S),e(S,De),e(S,O),e(O,D)},d(m){m&&t(u),m&&t(f),m&&t(g),m&&t(pe),m&&t(E),m&&t(V),m&&t(A),m&&t(I),m&&t(q)}}}function Om(C){let u,z,f,g,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=o("code"),g=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(k){u=s(k,"P",{});var _=a(u);z=i(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(k,_){h(k,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(k){k&&t(u)}}}function Dm(C){let u,z,f,g,w,k,_,$,Ce,pe,E,_e,K,Ie,Z,X,Le,ze,V,A,$e,I,q,F,Q,ee,ke,Ae,G,P,ve,N,Se,te,Te,ne,oe,se,Oe,S,De,O,D;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),f=d(),g=o("ul"),w=o("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),_=d(),$=o("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),pe=d(),E=o("p"),_e=r("This second option is useful when using "),K=o("code"),Ie=r("tf.keras.Model.fit"),Z=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),X=o("code"),Le=r("model(inputs)"),ze=r("."),V=d(),A=o("p"),$e=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),I=d(),q=o("ul"),F=o("li"),Q=r("a single Tensor with "),ee=o("code"),ke=r("input_ids"),Ae=r(" only and nothing else: "),G=o("code"),P=r("model(input_ids)"),ve=d(),N=o("li"),Se=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=o("code"),Te=r("model([input_ids, attention_mask])"),ne=r(" or "),oe=o("code"),se=r("model([input_ids, attention_mask, token_type_ids])"),Oe=d(),S=o("li"),De=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=o("code"),D=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=l(m),g=s(m,"UL",{});var Me=a(g);w=s(Me,"LI",{});var nt=a(w);k=i(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),_=l(Me),$=s(Me,"LI",{});var be=a($);Ce=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),Me.forEach(t),pe=l(m),E=s(m,"P",{});var H=a(E);_e=i(H,"This second option is useful when using "),K=s(H,"CODE",{});var ot=a(K);Ie=i(ot,"tf.keras.Model.fit"),ot.forEach(t),Z=i(H,` method which currently requires having all
the tensors in the first argument of the model call function: `),X=s(H,"CODE",{});var st=a(X);Le=i(st,"model(inputs)"),st.forEach(t),ze=i(H,"."),H.forEach(t),V=l(m),A=s(m,"P",{});var He=a(A);$e=i(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),He.forEach(t),I=l(m),q=s(m,"UL",{});var L=a(q);F=s(L,"LI",{});var ae=a(F);Q=i(ae,"a single Tensor with "),ee=s(ae,"CODE",{});var at=a(ee);ke=i(at,"input_ids"),at.forEach(t),Ae=i(ae," only and nothing else: "),G=s(ae,"CODE",{});var Ue=a(G);P=i(Ue,"model(input_ids)"),Ue.forEach(t),ae.forEach(t),ve=l(L),N=s(L,"LI",{});var U=a(N);Se=i(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=s(U,"CODE",{});var rt=a(te);Te=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),ne=i(U," or "),oe=s(U,"CODE",{});var it=a(oe);se=i(it,"model([input_ids, attention_mask, token_type_ids])"),it.forEach(t),U.forEach(t),Oe=l(L),S=s(L,"LI",{});var re=a(S);De=i(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=s(re,"CODE",{});var ye=a(O);D=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),re.forEach(t),L.forEach(t)},m(m,j){h(m,u,j),e(u,z),h(m,f,j),h(m,g,j),e(g,w),e(w,k),e(g,_),e(g,$),e($,Ce),h(m,pe,j),h(m,E,j),e(E,_e),e(E,K),e(K,Ie),e(E,Z),e(E,X),e(X,Le),e(E,ze),h(m,V,j),h(m,A,j),e(A,$e),h(m,I,j),h(m,q,j),e(q,F),e(F,Q),e(F,ee),e(ee,ke),e(F,Ae),e(F,G),e(G,P),e(q,ve),e(q,N),e(N,Se),e(N,te),e(te,Te),e(N,ne),e(N,oe),e(oe,se),e(q,Oe),e(q,S),e(S,De),e(S,O),e(O,D)},d(m){m&&t(u),m&&t(f),m&&t(g),m&&t(pe),m&&t(E),m&&t(V),m&&t(A),m&&t(I),m&&t(q)}}}function Hm(C){let u,z,f,g,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=o("code"),g=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(k){u=s(k,"P",{});var _=a(u);z=i(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(k,_){h(k,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(k){k&&t(u)}}}function Um(C){let u,z,f,g,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=o("code"),g=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(k){u=s(k,"P",{});var _=a(u);z=i(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(k,_){h(k,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(k){k&&t(u)}}}function Wm(C){let u,z,f,g,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=o("code"),g=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(k){u=s(k,"P",{});var _=a(u);z=i(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(k,_){h(k,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(k){k&&t(u)}}}function Rm(C){let u,z,f,g,w,k,_,$,Ce,pe,E,_e,K,Ie,Z,X,Le,ze,V,A,$e,I,q,F,Q,ee,ke,Ae,G,P,ve,N,Se,te,Te,ne,oe,se,Oe,S,De,O,D,m,j,Me,nt,be,H,ot,st,He,L,ae,at,Ue,U,rt,it,re,ye,fi,Bo,gi,_i,ki,dt,cn,vi,ws,Ti,Mi,bi,pn,yi,zs,xi,wi,zi,lt,$i,$s,ji,Ei,js,qi,Pi,Fi,Es,hn,Ni,qs,Ci,Ii,Li,Ps,un,Ai,mn,Si,Oi,Ga,ct,Ft,Fs,fn,Di,Ns,Hi,Ja,je,Vo,Ui,Cs,Wi,Ri,gn,Bi,_n,Vi,Gi,Ji,pt,Yi,Is,Ki,Zi,Ls,Xi,Qi,ed,As,td,Ya,ht,Nt,Ss,kn,nd,Os,od,Ka,Be,Ds,sd,ad,Hs,vn,rd,id,Us,Tn,dd,Za,ut,Ct,Ws,Mn,ld,Rs,cd,Xa,Ee,bn,pd,Bs,hd,ud,md,yn,fd,Vs,gd,_d,kd,xn,vd,wn,Td,Md,bd,zn,yd,Gs,xd,wd,Qa,It,zd,$n,$d,jd,er,jn,tr,Go,Ed,nr,En,or,mt,Lt,Js,qn,qd,Ys,Pd,sr,Jo,Fd,ar,Pn,rr,Yo,Nd,ir,Fn,dr,ft,At,Ks,Nn,Cd,Zs,Id,lr,ie,Cn,Ld,gt,Ad,Ko,Sd,Od,In,Dd,Hd,Ud,_t,Wd,Zo,Rd,Bd,Xo,Vd,Gd,Jd,Xs,Yd,Kd,Ln,cr,kt,St,Qs,An,Zd,ea,Xd,pr,W,Sn,Qd,On,el,Dn,tl,nl,ol,Hn,sl,Qo,al,rl,il,ta,dl,ll,Un,cl,Ot,Wn,pl,na,hl,hr,vt,Dt,oa,Rn,ul,sa,ml,ur,xe,Bn,fl,Vn,gl,es,_l,kl,vl,Gn,Tl,Jn,Ml,bl,yl,he,Yn,xl,Tt,wl,ts,zl,$l,aa,jl,El,ql,Ht,Pl,ra,Fl,Nl,Kn,mr,Mt,Ut,ia,Zn,Cl,da,Il,fr,we,Xn,Ll,Qn,Al,ns,Sl,Ol,Dl,eo,Hl,to,Ul,Wl,Rl,ue,no,Bl,bt,Vl,os,Gl,Jl,la,Yl,Kl,Zl,Wt,Xl,ca,Ql,ec,oo,gr,yt,Rt,pa,so,tc,ha,nc,_r,ao,Ve,ro,oc,ua,sc,ac,io,kr,xt,Bt,ma,lo,rc,fa,ic,vr,de,co,dc,po,lc,ss,cc,pc,hc,ho,uc,uo,mc,fc,gc,Vt,_c,me,mo,kc,wt,vc,as,Tc,Mc,ga,bc,yc,xc,Gt,wc,_a,zc,$c,fo,Tr,zt,Jt,ka,go,jc,va,Ec,Mr,le,_o,qc,ko,Pc,rs,Fc,Nc,Cc,vo,Ic,To,Lc,Ac,Sc,Yt,Oc,fe,Mo,Dc,$t,Hc,is,Uc,Wc,Ta,Rc,Bc,Vc,Kt,Gc,Ma,Jc,Yc,bo,br,jt,Zt,ba,yo,Kc,ya,Zc,yr,R,xo,Xc,wo,Qc,ds,ep,tp,np,zo,op,$o,sp,ap,rp,xa,ip,dp,We,wa,jo,lp,cp,za,Eo,pp,hp,$a,qo,up,mp,ja,Po,fp,gp,ge,Fo,_p,Et,kp,Ea,vp,Tp,qa,Mp,bp,yp,Xt,xp,Pa,wp,zp,No,xr,qt,Qt,Fa,Co,$p,Na,jp,wr,B,Io,Ep,Lo,qp,ls,Pp,Fp,Np,Ao,Cp,So,Ip,Lp,Ap,Ca,Sp,Op,Re,Ia,Oo,Dp,Hp,La,Do,Up,Wp,Aa,Ho,Rp,Bp,Sa,Uo,Vp,Gp,Ge,Wo,Jp,Pt,Yp,Oa,Kp,Zp,Da,Xp,Qp,eh,en,zr;return k=new ce({}),Q=new ce({}),fn=new ce({}),kn=new ce({}),Mn=new ce({}),jn=new Ne({props:{code:`from transformers import MarianMTModel, MarianTokenizer
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
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),En=new Ne({props:{code:`from huggingface_hub import list_models
model_list = list_models()
org = "Helsinki-NLP"
model_ids = [x.modelId for x in model_list if x.modelId.startswith(org)]
suffix = [x.split('/')[1] for x in model_ids]
old_style_multi_models = [f'{org}/{s}' for s in suffix if s != s.lower()],`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models
model_list = list_models()
org = <span class="hljs-string">&quot;Helsinki-NLP&quot;</span>
model_ids = [x.modelId <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_list <span class="hljs-keyword">if</span> x.modelId.startswith(org)]
suffix = [x.split(<span class="hljs-string">&#x27;/&#x27;</span>)[<span class="hljs-number">1</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_ids]
old_style_multi_models = [<span class="hljs-string">f&#x27;<span class="hljs-subst">{org}</span>/<span class="hljs-subst">{s}</span>&#x27;</span> <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> suffix <span class="hljs-keyword">if</span> s != s.lower()]`}}),qn=new ce({}),Pn=new Ne({props:{code:`['Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU',
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
}`}}),Fn=new Ne({props:{code:`from transformers import MarianMTModel, MarianTokenizer
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
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),Nn=new ce({}),Cn=new Y({props:{name:"class transformers.MarianConfig",anchor:"transformers.MarianConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 58100"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 58100"},{name:"eos_token_id",val:" = 0"},{name:"forced_eos_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/configuration_marian.py#L29",parametersDescription:[{anchor:"transformers.MarianConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Marian model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianModel">MarianModel</a> or
<a href="/docs/transformers/master/en/model_doc/marian#transformers.TFMarianModel">TFMarianModel</a>.`,name:"vocab_size"},{anchor:"transformers.MarianConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The standard deviation of the truncated<em>normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder<em>layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.MarianConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MarianConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MarianConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Ln=new Ne({props:{code:`from transformers import MarianModel, MarianConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),An=new ce({}),Sn=new Y({props:{name:"class transformers.MarianTokenizer",anchor:"transformers.MarianTokenizer",parameters:[{name:"vocab",val:""},{name:"source_spm",val:""},{name:"target_spm",val:""},{name:"source_lang",val:" = None"},{name:"target_lang",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"model_max_length",val:" = 512"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/tokenization_marian.py#L56",parametersDescription:[{anchor:"transformers.MarianTokenizer.source_spm",description:`<strong>source_spm</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Un=new Ne({props:{code:`from transformers import MarianTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs) should work`}}),Wn=new Y({props:{name:"as_target_tokenizer",anchor:"transformers.MarianTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/tokenization_marian.py#L261"}}),Rn=new ce({}),Bn=new Y({props:{name:"class transformers.MarianModel",anchor:"transformers.MarianModel",parameters:[{name:"config",val:": MarianConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_marian.py#L1084",parametersDescription:[{anchor:"transformers.MarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Yn=new Y({props:{name:"forward",anchor:"transformers.MarianModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_marian.py#L1111",parametersDescription:[{anchor:"transformers.MarianModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MarianModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ht=new ln({props:{$$slots:{default:[Lm]},$$scope:{ctx:C}}}),Kn=new Ne({props:{code:`from transformers import MarianTokenizer, MarianModel

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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Zn=new ce({}),Xn=new Y({props:{name:"class transformers.MarianMTModel",anchor:"transformers.MarianMTModel",parameters:[{name:"config",val:": MarianConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_marian.py#L1207",parametersDescription:[{anchor:"transformers.MarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),no=new Y({props:{name:"forward",anchor:"transformers.MarianMTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_marian.py#L1257",parametersDescription:[{anchor:"transformers.MarianMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MarianMTModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarianMTModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig"
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
<p>Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints.
Available models are listed <a
  href="https://huggingface.co/models?search=Helsinki-NLP"
  rel="nofollow"
>here</a>.</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wt=new ln({props:{$$slots:{default:[Am]},$$scope:{ctx:C}}}),oo=new Ne({props:{code:`from transformers import MarianTokenizer, MarianMTModel
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
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`}}),so=new ce({}),ro=new Y({props:{name:"forward",anchor:"transformers.MarianForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_marian.py#L1429",parametersDescription:[{anchor:"transformers.MarianForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new Ne({props:{code:`from transformers import MarianTokenizer, MarianForCausalLM

tokenizer = MarianTokenizer.from_pretrained('facebook/bart-large')
model = MarianForCausalLM.from_pretrained('facebook/bart-large', add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianForCausalLM.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),lo=new ce({}),co=new Y({props:{name:"class transformers.TFMarianModel",anchor:"transformers.TFMarianModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_tf_marian.py#L1213",parametersDescription:[{anchor:"transformers.TFMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Vt=new ln({props:{$$slots:{default:[Sm]},$$scope:{ctx:C}}}),mo=new Y({props:{name:"call",anchor:"transformers.TFMarianModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_tf_marian.py#L1225",parametersDescription:[{anchor:"transformers.TFMarianModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>TFSeq2SeqModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gt=new ln({props:{$$slots:{default:[Om]},$$scope:{ctx:C}}}),fo=new Ne({props:{code:`from transformers import MarianTokenizer, TFMarianModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),go=new ce({}),_o=new Y({props:{name:"class transformers.TFMarianMTModel",anchor:"transformers.TFMarianMTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_tf_marian.py#L1320",parametersDescription:[{anchor:"transformers.TFMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Yt=new ln({props:{$$slots:{default:[Dm]},$$scope:{ctx:C}}}),Mo=new Y({props:{name:"call",anchor:"transformers.TFMarianMTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_tf_marian.py#L1353",parametersDescription:[{anchor:"transformers.TFMarianMTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianMTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianMTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMarianMTModel.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>TFSeq2SeqLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig"
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
<p>TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed <a
  href="https://huggingface.co/models?search=Helsinki-NLP"
  rel="nofollow"
>here</a>.</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Kt=new ln({props:{$$slots:{default:[Hm]},$$scope:{ctx:C}}}),bo=new Ne({props:{code:`from transformers import MarianTokenizer, TFMarianMTModel
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
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`}}),yo=new ce({}),xo=new Y({props:{name:"class transformers.FlaxMarianModel",anchor:"transformers.FlaxMarianModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_flax_marian.py#L1207",parametersDescription:[{anchor:"transformers.FlaxMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxMarianModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Fo=new Y({props:{name:"__call__",anchor:"transformers.FlaxMarianPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_flax_marian.py#L1142",parametersDescription:[{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xt=new ln({props:{$$slots:{default:[Um]},$$scope:{ctx:C}}}),No=new Ne({props:{code:`from transformers import MarianTokenizer, FlaxMarianModel

tokenizer = MarianTokenizer.from_pretrained('Helsinki-NLP/opus-mt-en-de')
model = FlaxMarianModel.from_pretrained('Helsinki-NLP/opus-mt-en-de')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-de&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianModel.from_pretrained(<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-de&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Co=new ce({}),Io=new Y({props:{name:"class transformers.FlaxMarianMTModel",anchor:"transformers.FlaxMarianMTModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_flax_marian.py#L1293",parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxMarianMTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Wo=new Y({props:{name:"__call__",anchor:"transformers.FlaxMarianPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_flax_marian.py#L1142",parametersDescription:[{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import MarianTokenizer, FlaxMarianMTModel</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>model = FlaxMarianMTModel.from_pretrained(\u2018Helsinki-NLP/opus-mt-en-de\u2019)
tokenizer = MarianTokenizer.from_pretrained(\u2018Helsinki-NLP/opus-mt-en-de\u2019)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>text = \u201CMy friends are cool but they eat too many carbs.\u201D
input_ids = tokenizer(text, max_length=64, return_tensors=\u2018jax\u2019).input_ids</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>sequences = model.generate(input_ids, max_length=64, num_beams=2).sequences</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>outputs = tokenizer.batch_decode(sequences, skip_special_tokens=True)</p>
<h1 class="relative group">
	<a 
		id="should-give-<em>meine-freunde-sind-cool,-aber-sie-essen-zu-viele-kohlenhydrate.</em>" 
		class="header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" 
		href="#should-give-<em>meine-freunde-sind-cool,-aber-sie-essen-zu-viele-kohlenhydrate.</em>"
	>
		<span><IconCopyLink/></span>
	</a>
	<span>
		should give <em>Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.</em>
	</span>
</h1>

</blockquote>
</blockquote>
</blockquote>
`,returnType:`
<p>Example</p>
`}}),en=new ln({props:{$$slots:{default:[Wm]},$$scope:{ctx:C}}}),{c(){u=o("meta"),z=d(),f=o("h1"),g=o("a"),w=o("span"),v(k.$$.fragment),_=d(),$=o("span"),Ce=r("MarianMT"),pe=d(),E=o("p"),_e=o("strong"),K=r("Bugs:"),Ie=r(" If you see something strange, file a "),Z=o("a"),X=r("Github Issue"),Le=r(`
and assign @patrickvonplaten.`),ze=d(),V=o("p"),A=r("Translations should be similar, but not identical to output in the test set linked to in each model card."),$e=d(),I=o("h2"),q=o("a"),F=o("span"),v(Q.$$.fragment),ee=d(),ke=o("span"),Ae=r("Implementation Notes"),G=d(),P=o("ul"),ve=o("li"),N=o("p"),Se=r("Each model is about 298 MB on disk, there are more than 1,000 models."),te=d(),Te=o("li"),ne=o("p"),oe=r("The list of supported language pairs can be found "),se=o("a"),Oe=r("here"),S=r("."),De=d(),O=o("li"),D=o("p"),m=r("Models were originally trained by "),j=o("a"),Me=r("J\xF6rg Tiedemann"),nt=r(" using the "),be=o("a"),H=r("Marian"),ot=r(" C++ library, which supports fast training and translation."),st=d(),He=o("li"),L=o("p"),ae=r(`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),at=d(),Ue=o("li"),U=o("p"),rt=r("The 80 opus models that require BPE preprocessing are not supported."),it=d(),re=o("li"),ye=o("p"),fi=r("The modeling code is the same as "),Bo=o("a"),gi=r("BartForConditionalGeneration"),_i=r(" with a few minor modifications:"),ki=d(),dt=o("ul"),cn=o("li"),vi=r("static (sinusoid) positional embeddings ("),ws=o("code"),Ti=r("MarianConfig.static_position_embeddings=True"),Mi=r(")"),bi=d(),pn=o("li"),yi=r("no layernorm_embedding ("),zs=o("code"),xi=r("MarianConfig.normalize_embedding=False"),wi=r(")"),zi=d(),lt=o("li"),$i=r("the model starts generating with "),$s=o("code"),ji=r("pad_token_id"),Ei=r(` (which has 0 as a token_embedding) as the prefix (Bart uses
`),js=o("code"),qi=r("<s/>"),Pi=r("),"),Fi=d(),Es=o("li"),hn=o("p"),Ni=r("Code to bulk convert models can be found in "),qs=o("code"),Ci=r("convert_marian_to_pytorch.py"),Ii=r("."),Li=d(),Ps=o("li"),un=o("p"),Ai=r("This model was contributed by "),mn=o("a"),Si=r("sshleifer"),Oi=r("."),Ga=d(),ct=o("h2"),Ft=o("a"),Fs=o("span"),v(fn.$$.fragment),Di=d(),Ns=o("span"),Hi=r("Naming"),Ja=d(),je=o("ul"),Vo=o("li"),Ui=r("All model names use the following format: "),Cs=o("code"),Wi=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),Ri=d(),gn=o("li"),Bi=r("The language codes used to name models are inconsistent. Two digit codes can usually be found "),_n=o("a"),Vi=r("here"),Gi=r(`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),Ji=d(),pt=o("li"),Yi=r("Codes formatted like "),Is=o("code"),Ki=r("es_AR"),Zi=r(" are usually "),Ls=o("code"),Xi=r("code_{region}"),Qi=r(". That one is Spanish from Argentina."),ed=d(),As=o("li"),td=r(`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),Ya=d(),ht=o("h2"),Nt=o("a"),Ss=o("span"),v(kn.$$.fragment),nd=d(),Os=o("span"),od=r("Examples"),Ka=d(),Be=o("ul"),Ds=o("li"),sd=r(`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),ad=d(),Hs=o("li"),vn=o("a"),rd=r("Fine-tune on GPU"),id=d(),Us=o("li"),Tn=o("a"),dd=r("Fine-tune on GPU with pytorch-lightning"),Za=d(),ut=o("h2"),Ct=o("a"),Ws=o("span"),v(Mn.$$.fragment),ld=d(),Rs=o("span"),cd=r("Multilingual Models"),Xa=d(),Ee=o("ul"),bn=o("li"),pd=r("All model names use the following format: "),Bs=o("code"),hd=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),ud=r(":"),md=d(),yn=o("li"),fd=r(`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Vs=o("code"),gd=r("src_text"),_d=r("."),kd=d(),xn=o("li"),vd=r("You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),wn=o("a"),Td=r("opus-mt-en-roa"),Md=r("."),bd=d(),zn=o("li"),yd=r("Note that if a model is only multilingual on the source side, like "),Gs=o("code"),xd=r("Helsinki-NLP/opus-mt-roa-en"),wd=r(`, no language
codes are required.`),Qa=d(),It=o("p"),zd=r("New multi-lingual models from the "),$n=o("a"),$d=r("Tatoeba-Challenge repo"),jd=r(`
require 3 character language codes:`),er=d(),v(jn.$$.fragment),tr=d(),Go=o("p"),Ed=r("Here is the code to see all available pretrained models on the hub:"),nr=d(),v(En.$$.fragment),or=d(),mt=o("h2"),Lt=o("a"),Js=o("span"),v(qn.$$.fragment),qd=d(),Ys=o("span"),Pd=r("Old Style Multi-Lingual Models"),sr=d(),Jo=o("p"),Fd=r(`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),ar=d(),v(Pn.$$.fragment),rr=d(),Yo=o("p"),Nd=r("Example of translating english to many romance languages, using old-style 2 character language codes"),ir=d(),v(Fn.$$.fragment),dr=d(),ft=o("h2"),At=o("a"),Ks=o("span"),v(Nn.$$.fragment),Cd=d(),Zs=o("span"),Id=r("MarianConfig"),lr=d(),ie=o("div"),v(Cn.$$.fragment),Ld=d(),gt=o("p"),Ad=r("This is the configuration class to store the configuration of a "),Ko=o("a"),Sd=r("MarianModel"),Od=r(`. It is used to
instantiate an Marian model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Marian
`),In=o("a"),Dd=r("Helsinki-NLP/opus-mt-en-de"),Hd=r(" architecture."),Ud=d(),_t=o("p"),Wd=r("Configuration objects inherit from "),Zo=o("a"),Rd=r("PretrainedConfig"),Bd=r(` and can be used to control the model
outputs. Read the documentation from `),Xo=o("a"),Vd=r("PretrainedConfig"),Gd=r(" for more information."),Jd=d(),Xs=o("p"),Yd=r("Examples:"),Kd=d(),v(Ln.$$.fragment),cr=d(),kt=o("h2"),St=o("a"),Qs=o("span"),v(An.$$.fragment),Zd=d(),ea=o("span"),Xd=r("MarianTokenizer"),pr=d(),W=o("div"),v(Sn.$$.fragment),Qd=d(),On=o("p"),el=r("Construct a Marian tokenizer. Based on "),Dn=o("a"),tl=r("SentencePiece"),nl=r("."),ol=d(),Hn=o("p"),sl=r("This tokenizer inherits from "),Qo=o("a"),al=r("PreTrainedTokenizer"),rl=r(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),il=d(),ta=o("p"),dl=r("Examples:"),ll=d(),v(Un.$$.fragment),cl=d(),Ot=o("div"),v(Wn.$$.fragment),pl=d(),na=o("p"),hl=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),hr=d(),vt=o("h2"),Dt=o("a"),oa=o("span"),v(Rn.$$.fragment),ul=d(),sa=o("span"),ml=r("MarianModel"),ur=d(),xe=o("div"),v(Bn.$$.fragment),fl=d(),Vn=o("p"),gl=r(`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),es=o("a"),_l=r("PreTrainedModel"),kl=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),vl=d(),Gn=o("p"),Tl=r("This model is also a PyTorch "),Jn=o("a"),Ml=r("torch.nn.Module"),bl=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),yl=d(),he=o("div"),v(Yn.$$.fragment),xl=d(),Tt=o("p"),wl=r("The "),ts=o("a"),zl=r("MarianModel"),$l=r(" forward method, overrides the "),aa=o("code"),jl=r("__call__"),El=r(" special method."),ql=d(),v(Ht.$$.fragment),Pl=d(),ra=o("p"),Fl=r("Example:"),Nl=d(),v(Kn.$$.fragment),mr=d(),Mt=o("h2"),Ut=o("a"),ia=o("span"),v(Zn.$$.fragment),Cl=d(),da=o("span"),Il=r("MarianMTModel"),fr=d(),we=o("div"),v(Xn.$$.fragment),Ll=d(),Qn=o("p"),Al=r(`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),ns=o("a"),Sl=r("PreTrainedModel"),Ol=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Dl=d(),eo=o("p"),Hl=r("This model is also a PyTorch "),to=o("a"),Ul=r("torch.nn.Module"),Wl=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Rl=d(),ue=o("div"),v(no.$$.fragment),Bl=d(),bt=o("p"),Vl=r("The "),os=o("a"),Gl=r("MarianMTModel"),Jl=r(" forward method, overrides the "),la=o("code"),Yl=r("__call__"),Kl=r(" special method."),Zl=d(),v(Wt.$$.fragment),Xl=d(),ca=o("p"),Ql=r("Examples:"),ec=d(),v(oo.$$.fragment),gr=d(),yt=o("h2"),Rt=o("a"),pa=o("span"),v(so.$$.fragment),tc=d(),ha=o("span"),nc=r("MarianForCausalLM"),_r=d(),ao=o("div"),Ve=o("div"),v(ro.$$.fragment),oc=d(),ua=o("p"),sc=r("Example:"),ac=d(),v(io.$$.fragment),kr=d(),xt=o("h2"),Bt=o("a"),ma=o("span"),v(lo.$$.fragment),rc=d(),fa=o("span"),ic=r("TFMarianModel"),vr=d(),de=o("div"),v(co.$$.fragment),dc=d(),po=o("p"),lc=r(`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ss=o("a"),cc=r("TFPreTrainedModel"),pc=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),hc=d(),ho=o("p"),uc=r("This model is also a "),uo=o("a"),mc=r("tf.keras.Model"),fc=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),gc=d(),v(Vt.$$.fragment),_c=d(),me=o("div"),v(mo.$$.fragment),kc=d(),wt=o("p"),vc=r("The "),as=o("a"),Tc=r("TFMarianModel"),Mc=r(" forward method, overrides the "),ga=o("code"),bc=r("__call__"),yc=r(" special method."),xc=d(),v(Gt.$$.fragment),wc=d(),_a=o("p"),zc=r("Example:"),$c=d(),v(fo.$$.fragment),Tr=d(),zt=o("h2"),Jt=o("a"),ka=o("span"),v(go.$$.fragment),jc=d(),va=o("span"),Ec=r("TFMarianMTModel"),Mr=d(),le=o("div"),v(_o.$$.fragment),qc=d(),ko=o("p"),Pc=r(`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),rs=o("a"),Fc=r("TFPreTrainedModel"),Nc=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Cc=d(),vo=o("p"),Ic=r("This model is also a "),To=o("a"),Lc=r("tf.keras.Model"),Ac=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Sc=d(),v(Yt.$$.fragment),Oc=d(),fe=o("div"),v(Mo.$$.fragment),Dc=d(),$t=o("p"),Hc=r("The "),is=o("a"),Uc=r("TFMarianMTModel"),Wc=r(" forward method, overrides the "),Ta=o("code"),Rc=r("__call__"),Bc=r(" special method."),Vc=d(),v(Kt.$$.fragment),Gc=d(),Ma=o("p"),Jc=r("Examples:"),Yc=d(),v(bo.$$.fragment),br=d(),jt=o("h2"),Zt=o("a"),ba=o("span"),v(yo.$$.fragment),Kc=d(),ya=o("span"),Zc=r("FlaxMarianModel"),yr=d(),R=o("div"),v(xo.$$.fragment),Xc=d(),wo=o("p"),Qc=r(`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ds=o("a"),ep=r("FlaxPreTrainedModel"),tp=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),np=d(),zo=o("p"),op=r("This model is also a Flax Linen "),$o=o("a"),sp=r("flax.nn.Module"),ap=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rp=d(),xa=o("p"),ip=r("Finally, this model supports inherent JAX features such as:"),dp=d(),We=o("ul"),wa=o("li"),jo=o("a"),lp=r("Just-In-Time (JIT) compilation"),cp=d(),za=o("li"),Eo=o("a"),pp=r("Automatic Differentiation"),hp=d(),$a=o("li"),qo=o("a"),up=r("Vectorization"),mp=d(),ja=o("li"),Po=o("a"),fp=r("Parallelization"),gp=d(),ge=o("div"),v(Fo.$$.fragment),_p=d(),Et=o("p"),kp=r("The "),Ea=o("code"),vp=r("FlaxMarianPreTrainedModel"),Tp=r(" forward method, overrides the "),qa=o("code"),Mp=r("__call__"),bp=r(" special method."),yp=d(),v(Xt.$$.fragment),xp=d(),Pa=o("p"),wp=r("Example:"),zp=d(),v(No.$$.fragment),xr=d(),qt=o("h2"),Qt=o("a"),Fa=o("span"),v(Co.$$.fragment),$p=d(),Na=o("span"),jp=r("FlaxMarianMTModel"),wr=d(),B=o("div"),v(Io.$$.fragment),Ep=d(),Lo=o("p"),qp=r(`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),ls=o("a"),Pp=r("FlaxPreTrainedModel"),Fp=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Np=d(),Ao=o("p"),Cp=r("This model is also a Flax Linen "),So=o("a"),Ip=r("flax.nn.Module"),Lp=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ap=d(),Ca=o("p"),Sp=r("Finally, this model supports inherent JAX features such as:"),Op=d(),Re=o("ul"),Ia=o("li"),Oo=o("a"),Dp=r("Just-In-Time (JIT) compilation"),Hp=d(),La=o("li"),Do=o("a"),Up=r("Automatic Differentiation"),Wp=d(),Aa=o("li"),Ho=o("a"),Rp=r("Vectorization"),Bp=d(),Sa=o("li"),Uo=o("a"),Vp=r("Parallelization"),Gp=d(),Ge=o("div"),v(Wo.$$.fragment),Jp=d(),Pt=o("p"),Yp=r("The "),Oa=o("code"),Kp=r("FlaxMarianPreTrainedModel"),Zp=r(" forward method, overrides the "),Da=o("code"),Xp=r("__call__"),Qp=r(" special method."),eh=d(),v(en.$$.fragment),this.h()},l(n){const p=Im('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(n),f=s(n,"H1",{class:!0});var Ro=a(f);g=s(Ro,"A",{id:!0,class:!0,href:!0});var Ha=a(g);w=s(Ha,"SPAN",{});var Ua=a(w);T(k.$$.fragment,Ua),Ua.forEach(t),Ha.forEach(t),_=l(Ro),$=s(Ro,"SPAN",{});var Wa=a($);Ce=i(Wa,"MarianMT"),Wa.forEach(t),Ro.forEach(t),pe=l(n),E=s(n,"P",{});var tn=a(E);_e=s(tn,"STRONG",{});var Ra=a(_e);K=i(Ra,"Bugs:"),Ra.forEach(t),Ie=i(tn," If you see something strange, file a "),Z=s(tn,"A",{href:!0,rel:!0});var Ba=a(Z);X=i(Ba,"Github Issue"),Ba.forEach(t),Le=i(tn,`
and assign @patrickvonplaten.`),tn.forEach(t),ze=l(n),V=s(n,"P",{});var Va=a(V);A=i(Va,"Translations should be similar, but not identical to output in the test set linked to in each model card."),Va.forEach(t),$e=l(n),I=s(n,"H2",{class:!0});var $r=a(I);q=s($r,"A",{id:!0,class:!0,href:!0});var nh=a(q);F=s(nh,"SPAN",{});var oh=a(F);T(Q.$$.fragment,oh),oh.forEach(t),nh.forEach(t),ee=l($r),ke=s($r,"SPAN",{});var sh=a(ke);Ae=i(sh,"Implementation Notes"),sh.forEach(t),$r.forEach(t),G=l(n),P=s(n,"UL",{});var J=a(P);ve=s(J,"LI",{});var ah=a(ve);N=s(ah,"P",{});var rh=a(N);Se=i(rh,"Each model is about 298 MB on disk, there are more than 1,000 models."),rh.forEach(t),ah.forEach(t),te=l(J),Te=s(J,"LI",{});var ih=a(Te);ne=s(ih,"P",{});var jr=a(ne);oe=i(jr,"The list of supported language pairs can be found "),se=s(jr,"A",{href:!0,rel:!0});var dh=a(se);Oe=i(dh,"here"),dh.forEach(t),S=i(jr,"."),jr.forEach(t),ih.forEach(t),De=l(J),O=s(J,"LI",{});var lh=a(O);D=s(lh,"P",{});var cs=a(D);m=i(cs,"Models were originally trained by "),j=s(cs,"A",{href:!0,rel:!0});var ch=a(j);Me=i(ch,"J\xF6rg Tiedemann"),ch.forEach(t),nt=i(cs," using the "),be=s(cs,"A",{href:!0,rel:!0});var ph=a(be);H=i(ph,"Marian"),ph.forEach(t),ot=i(cs," C++ library, which supports fast training and translation."),cs.forEach(t),lh.forEach(t),st=l(J),He=s(J,"LI",{});var hh=a(He);L=s(hh,"P",{});var uh=a(L);ae=i(uh,`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),uh.forEach(t),hh.forEach(t),at=l(J),Ue=s(J,"LI",{});var mh=a(Ue);U=s(mh,"P",{});var fh=a(U);rt=i(fh,"The 80 opus models that require BPE preprocessing are not supported."),fh.forEach(t),mh.forEach(t),it=l(J),re=s(J,"LI",{});var Er=a(re);ye=s(Er,"P",{});var qr=a(ye);fi=i(qr,"The modeling code is the same as "),Bo=s(qr,"A",{href:!0});var gh=a(Bo);gi=i(gh,"BartForConditionalGeneration"),gh.forEach(t),_i=i(qr," with a few minor modifications:"),qr.forEach(t),ki=l(Er),dt=s(Er,"UL",{});var ps=a(dt);cn=s(ps,"LI",{});var Pr=a(cn);vi=i(Pr,"static (sinusoid) positional embeddings ("),ws=s(Pr,"CODE",{});var _h=a(ws);Ti=i(_h,"MarianConfig.static_position_embeddings=True"),_h.forEach(t),Mi=i(Pr,")"),Pr.forEach(t),bi=l(ps),pn=s(ps,"LI",{});var Fr=a(pn);yi=i(Fr,"no layernorm_embedding ("),zs=s(Fr,"CODE",{});var kh=a(zs);xi=i(kh,"MarianConfig.normalize_embedding=False"),kh.forEach(t),wi=i(Fr,")"),Fr.forEach(t),zi=l(ps),lt=s(ps,"LI",{});var hs=a(lt);$i=i(hs,"the model starts generating with "),$s=s(hs,"CODE",{});var vh=a($s);ji=i(vh,"pad_token_id"),vh.forEach(t),Ei=i(hs,` (which has 0 as a token_embedding) as the prefix (Bart uses
`),js=s(hs,"CODE",{});var Th=a(js);qi=i(Th,"<s/>"),Th.forEach(t),Pi=i(hs,"),"),hs.forEach(t),ps.forEach(t),Er.forEach(t),Fi=l(J),Es=s(J,"LI",{});var Mh=a(Es);hn=s(Mh,"P",{});var Nr=a(hn);Ni=i(Nr,"Code to bulk convert models can be found in "),qs=s(Nr,"CODE",{});var bh=a(qs);Ci=i(bh,"convert_marian_to_pytorch.py"),bh.forEach(t),Ii=i(Nr,"."),Nr.forEach(t),Mh.forEach(t),Li=l(J),Ps=s(J,"LI",{});var yh=a(Ps);un=s(yh,"P",{});var Cr=a(un);Ai=i(Cr,"This model was contributed by "),mn=s(Cr,"A",{href:!0,rel:!0});var xh=a(mn);Si=i(xh,"sshleifer"),xh.forEach(t),Oi=i(Cr,"."),Cr.forEach(t),yh.forEach(t),J.forEach(t),Ga=l(n),ct=s(n,"H2",{class:!0});var Ir=a(ct);Ft=s(Ir,"A",{id:!0,class:!0,href:!0});var wh=a(Ft);Fs=s(wh,"SPAN",{});var zh=a(Fs);T(fn.$$.fragment,zh),zh.forEach(t),wh.forEach(t),Di=l(Ir),Ns=s(Ir,"SPAN",{});var $h=a(Ns);Hi=i($h,"Naming"),$h.forEach(t),Ir.forEach(t),Ja=l(n),je=s(n,"UL",{});var nn=a(je);Vo=s(nn,"LI",{});var th=a(Vo);Ui=i(th,"All model names use the following format: "),Cs=s(th,"CODE",{});var jh=a(Cs);Wi=i(jh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),jh.forEach(t),th.forEach(t),Ri=l(nn),gn=s(nn,"LI",{});var Lr=a(gn);Bi=i(Lr,"The language codes used to name models are inconsistent. Two digit codes can usually be found "),_n=s(Lr,"A",{href:!0,rel:!0});var Eh=a(_n);Vi=i(Eh,"here"),Eh.forEach(t),Gi=i(Lr,`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),Lr.forEach(t),Ji=l(nn),pt=s(nn,"LI",{});var us=a(pt);Yi=i(us,"Codes formatted like "),Is=s(us,"CODE",{});var qh=a(Is);Ki=i(qh,"es_AR"),qh.forEach(t),Zi=i(us," are usually "),Ls=s(us,"CODE",{});var Ph=a(Ls);Xi=i(Ph,"code_{region}"),Ph.forEach(t),Qi=i(us,". That one is Spanish from Argentina."),us.forEach(t),ed=l(nn),As=s(nn,"LI",{});var Fh=a(As);td=i(Fh,`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),Fh.forEach(t),nn.forEach(t),Ya=l(n),ht=s(n,"H2",{class:!0});var Ar=a(ht);Nt=s(Ar,"A",{id:!0,class:!0,href:!0});var Nh=a(Nt);Ss=s(Nh,"SPAN",{});var Ch=a(Ss);T(kn.$$.fragment,Ch),Ch.forEach(t),Nh.forEach(t),nd=l(Ar),Os=s(Ar,"SPAN",{});var Ih=a(Os);od=i(Ih,"Examples"),Ih.forEach(t),Ar.forEach(t),Ka=l(n),Be=s(n,"UL",{});var ms=a(Be);Ds=s(ms,"LI",{});var Lh=a(Ds);sd=i(Lh,`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),Lh.forEach(t),ad=l(ms),Hs=s(ms,"LI",{});var Ah=a(Hs);vn=s(Ah,"A",{href:!0,rel:!0});var Sh=a(vn);rd=i(Sh,"Fine-tune on GPU"),Sh.forEach(t),Ah.forEach(t),id=l(ms),Us=s(ms,"LI",{});var Oh=a(Us);Tn=s(Oh,"A",{href:!0,rel:!0});var Dh=a(Tn);dd=i(Dh,"Fine-tune on GPU with pytorch-lightning"),Dh.forEach(t),Oh.forEach(t),ms.forEach(t),Za=l(n),ut=s(n,"H2",{class:!0});var Sr=a(ut);Ct=s(Sr,"A",{id:!0,class:!0,href:!0});var Hh=a(Ct);Ws=s(Hh,"SPAN",{});var Uh=a(Ws);T(Mn.$$.fragment,Uh),Uh.forEach(t),Hh.forEach(t),ld=l(Sr),Rs=s(Sr,"SPAN",{});var Wh=a(Rs);cd=i(Wh,"Multilingual Models"),Wh.forEach(t),Sr.forEach(t),Xa=l(n),Ee=s(n,"UL",{});var on=a(Ee);bn=s(on,"LI",{});var Or=a(bn);pd=i(Or,"All model names use the following format: "),Bs=s(Or,"CODE",{});var Rh=a(Bs);hd=i(Rh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),Rh.forEach(t),ud=i(Or,":"),Or.forEach(t),md=l(on),yn=s(on,"LI",{});var Dr=a(yn);fd=i(Dr,`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Vs=s(Dr,"CODE",{});var Bh=a(Vs);gd=i(Bh,"src_text"),Bh.forEach(t),_d=i(Dr,"."),Dr.forEach(t),kd=l(on),xn=s(on,"LI",{});var Hr=a(xn);vd=i(Hr,"You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),wn=s(Hr,"A",{href:!0,rel:!0});var Vh=a(wn);Td=i(Vh,"opus-mt-en-roa"),Vh.forEach(t),Md=i(Hr,"."),Hr.forEach(t),bd=l(on),zn=s(on,"LI",{});var Ur=a(zn);yd=i(Ur,"Note that if a model is only multilingual on the source side, like "),Gs=s(Ur,"CODE",{});var Gh=a(Gs);xd=i(Gh,"Helsinki-NLP/opus-mt-roa-en"),Gh.forEach(t),wd=i(Ur,`, no language
codes are required.`),Ur.forEach(t),on.forEach(t),Qa=l(n),It=s(n,"P",{});var Wr=a(It);zd=i(Wr,"New multi-lingual models from the "),$n=s(Wr,"A",{href:!0,rel:!0});var Jh=a($n);$d=i(Jh,"Tatoeba-Challenge repo"),Jh.forEach(t),jd=i(Wr,`
require 3 character language codes:`),Wr.forEach(t),er=l(n),T(jn.$$.fragment,n),tr=l(n),Go=s(n,"P",{});var Yh=a(Go);Ed=i(Yh,"Here is the code to see all available pretrained models on the hub:"),Yh.forEach(t),nr=l(n),T(En.$$.fragment,n),or=l(n),mt=s(n,"H2",{class:!0});var Rr=a(mt);Lt=s(Rr,"A",{id:!0,class:!0,href:!0});var Kh=a(Lt);Js=s(Kh,"SPAN",{});var Zh=a(Js);T(qn.$$.fragment,Zh),Zh.forEach(t),Kh.forEach(t),qd=l(Rr),Ys=s(Rr,"SPAN",{});var Xh=a(Ys);Pd=i(Xh,"Old Style Multi-Lingual Models"),Xh.forEach(t),Rr.forEach(t),sr=l(n),Jo=s(n,"P",{});var Qh=a(Jo);Fd=i(Qh,`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),Qh.forEach(t),ar=l(n),T(Pn.$$.fragment,n),rr=l(n),Yo=s(n,"P",{});var eu=a(Yo);Nd=i(eu,"Example of translating english to many romance languages, using old-style 2 character language codes"),eu.forEach(t),ir=l(n),T(Fn.$$.fragment,n),dr=l(n),ft=s(n,"H2",{class:!0});var Br=a(ft);At=s(Br,"A",{id:!0,class:!0,href:!0});var tu=a(At);Ks=s(tu,"SPAN",{});var nu=a(Ks);T(Nn.$$.fragment,nu),nu.forEach(t),tu.forEach(t),Cd=l(Br),Zs=s(Br,"SPAN",{});var ou=a(Zs);Id=i(ou,"MarianConfig"),ou.forEach(t),Br.forEach(t),lr=l(n),ie=s(n,"DIV",{class:!0});var Je=a(ie);T(Cn.$$.fragment,Je),Ld=l(Je),gt=s(Je,"P",{});var fs=a(gt);Ad=i(fs,"This is the configuration class to store the configuration of a "),Ko=s(fs,"A",{href:!0});var su=a(Ko);Sd=i(su,"MarianModel"),su.forEach(t),Od=i(fs,`. It is used to
instantiate an Marian model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Marian
`),In=s(fs,"A",{href:!0,rel:!0});var au=a(In);Dd=i(au,"Helsinki-NLP/opus-mt-en-de"),au.forEach(t),Hd=i(fs," architecture."),fs.forEach(t),Ud=l(Je),_t=s(Je,"P",{});var gs=a(_t);Wd=i(gs,"Configuration objects inherit from "),Zo=s(gs,"A",{href:!0});var ru=a(Zo);Rd=i(ru,"PretrainedConfig"),ru.forEach(t),Bd=i(gs,` and can be used to control the model
outputs. Read the documentation from `),Xo=s(gs,"A",{href:!0});var iu=a(Xo);Vd=i(iu,"PretrainedConfig"),iu.forEach(t),Gd=i(gs," for more information."),gs.forEach(t),Jd=l(Je),Xs=s(Je,"P",{});var du=a(Xs);Yd=i(du,"Examples:"),du.forEach(t),Kd=l(Je),T(Ln.$$.fragment,Je),Je.forEach(t),cr=l(n),kt=s(n,"H2",{class:!0});var Vr=a(kt);St=s(Vr,"A",{id:!0,class:!0,href:!0});var lu=a(St);Qs=s(lu,"SPAN",{});var cu=a(Qs);T(An.$$.fragment,cu),cu.forEach(t),lu.forEach(t),Zd=l(Vr),ea=s(Vr,"SPAN",{});var pu=a(ea);Xd=i(pu,"MarianTokenizer"),pu.forEach(t),Vr.forEach(t),pr=l(n),W=s(n,"DIV",{class:!0});var qe=a(W);T(Sn.$$.fragment,qe),Qd=l(qe),On=s(qe,"P",{});var Gr=a(On);el=i(Gr,"Construct a Marian tokenizer. Based on "),Dn=s(Gr,"A",{href:!0,rel:!0});var hu=a(Dn);tl=i(hu,"SentencePiece"),hu.forEach(t),nl=i(Gr,"."),Gr.forEach(t),ol=l(qe),Hn=s(qe,"P",{});var Jr=a(Hn);sl=i(Jr,"This tokenizer inherits from "),Qo=s(Jr,"A",{href:!0});var uu=a(Qo);al=i(uu,"PreTrainedTokenizer"),uu.forEach(t),rl=i(Jr,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Jr.forEach(t),il=l(qe),ta=s(qe,"P",{});var mu=a(ta);dl=i(mu,"Examples:"),mu.forEach(t),ll=l(qe),T(Un.$$.fragment,qe),cl=l(qe),Ot=s(qe,"DIV",{class:!0});var Yr=a(Ot);T(Wn.$$.fragment,Yr),pl=l(Yr),na=s(Yr,"P",{});var fu=a(na);hl=i(fu,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),fu.forEach(t),Yr.forEach(t),qe.forEach(t),hr=l(n),vt=s(n,"H2",{class:!0});var Kr=a(vt);Dt=s(Kr,"A",{id:!0,class:!0,href:!0});var gu=a(Dt);oa=s(gu,"SPAN",{});var _u=a(oa);T(Rn.$$.fragment,_u),_u.forEach(t),gu.forEach(t),ul=l(Kr),sa=s(Kr,"SPAN",{});var ku=a(sa);ml=i(ku,"MarianModel"),ku.forEach(t),Kr.forEach(t),ur=l(n),xe=s(n,"DIV",{class:!0});var sn=a(xe);T(Bn.$$.fragment,sn),fl=l(sn),Vn=s(sn,"P",{});var Zr=a(Vn);gl=i(Zr,`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),es=s(Zr,"A",{href:!0});var vu=a(es);_l=i(vu,"PreTrainedModel"),vu.forEach(t),kl=i(Zr,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Zr.forEach(t),vl=l(sn),Gn=s(sn,"P",{});var Xr=a(Gn);Tl=i(Xr,"This model is also a PyTorch "),Jn=s(Xr,"A",{href:!0,rel:!0});var Tu=a(Jn);Ml=i(Tu,"torch.nn.Module"),Tu.forEach(t),bl=i(Xr,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Xr.forEach(t),yl=l(sn),he=s(sn,"DIV",{class:!0});var Ye=a(he);T(Yn.$$.fragment,Ye),xl=l(Ye),Tt=s(Ye,"P",{});var _s=a(Tt);wl=i(_s,"The "),ts=s(_s,"A",{href:!0});var Mu=a(ts);zl=i(Mu,"MarianModel"),Mu.forEach(t),$l=i(_s," forward method, overrides the "),aa=s(_s,"CODE",{});var bu=a(aa);jl=i(bu,"__call__"),bu.forEach(t),El=i(_s," special method."),_s.forEach(t),ql=l(Ye),T(Ht.$$.fragment,Ye),Pl=l(Ye),ra=s(Ye,"P",{});var yu=a(ra);Fl=i(yu,"Example:"),yu.forEach(t),Nl=l(Ye),T(Kn.$$.fragment,Ye),Ye.forEach(t),sn.forEach(t),mr=l(n),Mt=s(n,"H2",{class:!0});var Qr=a(Mt);Ut=s(Qr,"A",{id:!0,class:!0,href:!0});var xu=a(Ut);ia=s(xu,"SPAN",{});var wu=a(ia);T(Zn.$$.fragment,wu),wu.forEach(t),xu.forEach(t),Cl=l(Qr),da=s(Qr,"SPAN",{});var zu=a(da);Il=i(zu,"MarianMTModel"),zu.forEach(t),Qr.forEach(t),fr=l(n),we=s(n,"DIV",{class:!0});var an=a(we);T(Xn.$$.fragment,an),Ll=l(an),Qn=s(an,"P",{});var ei=a(Qn);Al=i(ei,`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),ns=s(ei,"A",{href:!0});var $u=a(ns);Sl=i($u,"PreTrainedModel"),$u.forEach(t),Ol=i(ei,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),ei.forEach(t),Dl=l(an),eo=s(an,"P",{});var ti=a(eo);Hl=i(ti,"This model is also a PyTorch "),to=s(ti,"A",{href:!0,rel:!0});var ju=a(to);Ul=i(ju,"torch.nn.Module"),ju.forEach(t),Wl=i(ti,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ti.forEach(t),Rl=l(an),ue=s(an,"DIV",{class:!0});var Ke=a(ue);T(no.$$.fragment,Ke),Bl=l(Ke),bt=s(Ke,"P",{});var ks=a(bt);Vl=i(ks,"The "),os=s(ks,"A",{href:!0});var Eu=a(os);Gl=i(Eu,"MarianMTModel"),Eu.forEach(t),Jl=i(ks," forward method, overrides the "),la=s(ks,"CODE",{});var qu=a(la);Yl=i(qu,"__call__"),qu.forEach(t),Kl=i(ks," special method."),ks.forEach(t),Zl=l(Ke),T(Wt.$$.fragment,Ke),Xl=l(Ke),ca=s(Ke,"P",{});var Pu=a(ca);Ql=i(Pu,"Examples:"),Pu.forEach(t),ec=l(Ke),T(oo.$$.fragment,Ke),Ke.forEach(t),an.forEach(t),gr=l(n),yt=s(n,"H2",{class:!0});var ni=a(yt);Rt=s(ni,"A",{id:!0,class:!0,href:!0});var Fu=a(Rt);pa=s(Fu,"SPAN",{});var Nu=a(pa);T(so.$$.fragment,Nu),Nu.forEach(t),Fu.forEach(t),tc=l(ni),ha=s(ni,"SPAN",{});var Cu=a(ha);nc=i(Cu,"MarianForCausalLM"),Cu.forEach(t),ni.forEach(t),_r=l(n),ao=s(n,"DIV",{class:!0});var Iu=a(ao);Ve=s(Iu,"DIV",{class:!0});var vs=a(Ve);T(ro.$$.fragment,vs),oc=l(vs),ua=s(vs,"P",{});var Lu=a(ua);sc=i(Lu,"Example:"),Lu.forEach(t),ac=l(vs),T(io.$$.fragment,vs),vs.forEach(t),Iu.forEach(t),kr=l(n),xt=s(n,"H2",{class:!0});var oi=a(xt);Bt=s(oi,"A",{id:!0,class:!0,href:!0});var Au=a(Bt);ma=s(Au,"SPAN",{});var Su=a(ma);T(lo.$$.fragment,Su),Su.forEach(t),Au.forEach(t),rc=l(oi),fa=s(oi,"SPAN",{});var Ou=a(fa);ic=i(Ou,"TFMarianModel"),Ou.forEach(t),oi.forEach(t),vr=l(n),de=s(n,"DIV",{class:!0});var Ze=a(de);T(co.$$.fragment,Ze),dc=l(Ze),po=s(Ze,"P",{});var si=a(po);lc=i(si,`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ss=s(si,"A",{href:!0});var Du=a(ss);cc=i(Du,"TFPreTrainedModel"),Du.forEach(t),pc=i(si,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),si.forEach(t),hc=l(Ze),ho=s(Ze,"P",{});var ai=a(ho);uc=i(ai,"This model is also a "),uo=s(ai,"A",{href:!0,rel:!0});var Hu=a(uo);mc=i(Hu,"tf.keras.Model"),Hu.forEach(t),fc=i(ai,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ai.forEach(t),gc=l(Ze),T(Vt.$$.fragment,Ze),_c=l(Ze),me=s(Ze,"DIV",{class:!0});var Xe=a(me);T(mo.$$.fragment,Xe),kc=l(Xe),wt=s(Xe,"P",{});var Ts=a(wt);vc=i(Ts,"The "),as=s(Ts,"A",{href:!0});var Uu=a(as);Tc=i(Uu,"TFMarianModel"),Uu.forEach(t),Mc=i(Ts," forward method, overrides the "),ga=s(Ts,"CODE",{});var Wu=a(ga);bc=i(Wu,"__call__"),Wu.forEach(t),yc=i(Ts," special method."),Ts.forEach(t),xc=l(Xe),T(Gt.$$.fragment,Xe),wc=l(Xe),_a=s(Xe,"P",{});var Ru=a(_a);zc=i(Ru,"Example:"),Ru.forEach(t),$c=l(Xe),T(fo.$$.fragment,Xe),Xe.forEach(t),Ze.forEach(t),Tr=l(n),zt=s(n,"H2",{class:!0});var ri=a(zt);Jt=s(ri,"A",{id:!0,class:!0,href:!0});var Bu=a(Jt);ka=s(Bu,"SPAN",{});var Vu=a(ka);T(go.$$.fragment,Vu),Vu.forEach(t),Bu.forEach(t),jc=l(ri),va=s(ri,"SPAN",{});var Gu=a(va);Ec=i(Gu,"TFMarianMTModel"),Gu.forEach(t),ri.forEach(t),Mr=l(n),le=s(n,"DIV",{class:!0});var Qe=a(le);T(_o.$$.fragment,Qe),qc=l(Qe),ko=s(Qe,"P",{});var ii=a(ko);Pc=i(ii,`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),rs=s(ii,"A",{href:!0});var Ju=a(rs);Fc=i(Ju,"TFPreTrainedModel"),Ju.forEach(t),Nc=i(ii,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ii.forEach(t),Cc=l(Qe),vo=s(Qe,"P",{});var di=a(vo);Ic=i(di,"This model is also a "),To=s(di,"A",{href:!0,rel:!0});var Yu=a(To);Lc=i(Yu,"tf.keras.Model"),Yu.forEach(t),Ac=i(di,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),di.forEach(t),Sc=l(Qe),T(Yt.$$.fragment,Qe),Oc=l(Qe),fe=s(Qe,"DIV",{class:!0});var et=a(fe);T(Mo.$$.fragment,et),Dc=l(et),$t=s(et,"P",{});var Ms=a($t);Hc=i(Ms,"The "),is=s(Ms,"A",{href:!0});var Ku=a(is);Uc=i(Ku,"TFMarianMTModel"),Ku.forEach(t),Wc=i(Ms," forward method, overrides the "),Ta=s(Ms,"CODE",{});var Zu=a(Ta);Rc=i(Zu,"__call__"),Zu.forEach(t),Bc=i(Ms," special method."),Ms.forEach(t),Vc=l(et),T(Kt.$$.fragment,et),Gc=l(et),Ma=s(et,"P",{});var Xu=a(Ma);Jc=i(Xu,"Examples:"),Xu.forEach(t),Yc=l(et),T(bo.$$.fragment,et),et.forEach(t),Qe.forEach(t),br=l(n),jt=s(n,"H2",{class:!0});var li=a(jt);Zt=s(li,"A",{id:!0,class:!0,href:!0});var Qu=a(Zt);ba=s(Qu,"SPAN",{});var em=a(ba);T(yo.$$.fragment,em),em.forEach(t),Qu.forEach(t),Kc=l(li),ya=s(li,"SPAN",{});var tm=a(ya);Zc=i(tm,"FlaxMarianModel"),tm.forEach(t),li.forEach(t),yr=l(n),R=s(n,"DIV",{class:!0});var Pe=a(R);T(xo.$$.fragment,Pe),Xc=l(Pe),wo=s(Pe,"P",{});var ci=a(wo);Qc=i(ci,`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ds=s(ci,"A",{href:!0});var nm=a(ds);ep=i(nm,"FlaxPreTrainedModel"),nm.forEach(t),tp=i(ci,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ci.forEach(t),np=l(Pe),zo=s(Pe,"P",{});var pi=a(zo);op=i(pi,"This model is also a Flax Linen "),$o=s(pi,"A",{href:!0,rel:!0});var om=a($o);sp=i(om,"flax.nn.Module"),om.forEach(t),ap=i(pi,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),pi.forEach(t),rp=l(Pe),xa=s(Pe,"P",{});var sm=a(xa);ip=i(sm,"Finally, this model supports inherent JAX features such as:"),sm.forEach(t),dp=l(Pe),We=s(Pe,"UL",{});var rn=a(We);wa=s(rn,"LI",{});var am=a(wa);jo=s(am,"A",{href:!0,rel:!0});var rm=a(jo);lp=i(rm,"Just-In-Time (JIT) compilation"),rm.forEach(t),am.forEach(t),cp=l(rn),za=s(rn,"LI",{});var im=a(za);Eo=s(im,"A",{href:!0,rel:!0});var dm=a(Eo);pp=i(dm,"Automatic Differentiation"),dm.forEach(t),im.forEach(t),hp=l(rn),$a=s(rn,"LI",{});var lm=a($a);qo=s(lm,"A",{href:!0,rel:!0});var cm=a(qo);up=i(cm,"Vectorization"),cm.forEach(t),lm.forEach(t),mp=l(rn),ja=s(rn,"LI",{});var pm=a(ja);Po=s(pm,"A",{href:!0,rel:!0});var hm=a(Po);fp=i(hm,"Parallelization"),hm.forEach(t),pm.forEach(t),rn.forEach(t),gp=l(Pe),ge=s(Pe,"DIV",{class:!0});var tt=a(ge);T(Fo.$$.fragment,tt),_p=l(tt),Et=s(tt,"P",{});var bs=a(Et);kp=i(bs,"The "),Ea=s(bs,"CODE",{});var um=a(Ea);vp=i(um,"FlaxMarianPreTrainedModel"),um.forEach(t),Tp=i(bs," forward method, overrides the "),qa=s(bs,"CODE",{});var mm=a(qa);Mp=i(mm,"__call__"),mm.forEach(t),bp=i(bs," special method."),bs.forEach(t),yp=l(tt),T(Xt.$$.fragment,tt),xp=l(tt),Pa=s(tt,"P",{});var fm=a(Pa);wp=i(fm,"Example:"),fm.forEach(t),zp=l(tt),T(No.$$.fragment,tt),tt.forEach(t),Pe.forEach(t),xr=l(n),qt=s(n,"H2",{class:!0});var hi=a(qt);Qt=s(hi,"A",{id:!0,class:!0,href:!0});var gm=a(Qt);Fa=s(gm,"SPAN",{});var _m=a(Fa);T(Co.$$.fragment,_m),_m.forEach(t),gm.forEach(t),$p=l(hi),Na=s(hi,"SPAN",{});var km=a(Na);jp=i(km,"FlaxMarianMTModel"),km.forEach(t),hi.forEach(t),wr=l(n),B=s(n,"DIV",{class:!0});var Fe=a(B);T(Io.$$.fragment,Fe),Ep=l(Fe),Lo=s(Fe,"P",{});var ui=a(Lo);qp=i(ui,`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),ls=s(ui,"A",{href:!0});var vm=a(ls);Pp=i(vm,"FlaxPreTrainedModel"),vm.forEach(t),Fp=i(ui,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ui.forEach(t),Np=l(Fe),Ao=s(Fe,"P",{});var mi=a(Ao);Cp=i(mi,"This model is also a Flax Linen "),So=s(mi,"A",{href:!0,rel:!0});var Tm=a(So);Ip=i(Tm,"flax.nn.Module"),Tm.forEach(t),Lp=i(mi,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),mi.forEach(t),Ap=l(Fe),Ca=s(Fe,"P",{});var Mm=a(Ca);Sp=i(Mm,"Finally, this model supports inherent JAX features such as:"),Mm.forEach(t),Op=l(Fe),Re=s(Fe,"UL",{});var dn=a(Re);Ia=s(dn,"LI",{});var bm=a(Ia);Oo=s(bm,"A",{href:!0,rel:!0});var ym=a(Oo);Dp=i(ym,"Just-In-Time (JIT) compilation"),ym.forEach(t),bm.forEach(t),Hp=l(dn),La=s(dn,"LI",{});var xm=a(La);Do=s(xm,"A",{href:!0,rel:!0});var wm=a(Do);Up=i(wm,"Automatic Differentiation"),wm.forEach(t),xm.forEach(t),Wp=l(dn),Aa=s(dn,"LI",{});var zm=a(Aa);Ho=s(zm,"A",{href:!0,rel:!0});var $m=a(Ho);Rp=i($m,"Vectorization"),$m.forEach(t),zm.forEach(t),Bp=l(dn),Sa=s(dn,"LI",{});var jm=a(Sa);Uo=s(jm,"A",{href:!0,rel:!0});var Em=a(Uo);Vp=i(Em,"Parallelization"),Em.forEach(t),jm.forEach(t),dn.forEach(t),Gp=l(Fe),Ge=s(Fe,"DIV",{class:!0});var ys=a(Ge);T(Wo.$$.fragment,ys),Jp=l(ys),Pt=s(ys,"P",{});var xs=a(Pt);Yp=i(xs,"The "),Oa=s(xs,"CODE",{});var qm=a(Oa);Kp=i(qm,"FlaxMarianPreTrainedModel"),qm.forEach(t),Zp=i(xs," forward method, overrides the "),Da=s(xs,"CODE",{});var Pm=a(Da);Xp=i(Pm,"__call__"),Pm.forEach(t),Qp=i(xs," special method."),xs.forEach(t),eh=l(ys),T(en.$$.fragment,ys),ys.forEach(t),Fe.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Bm)),c(g,"id","marianmt"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#marianmt"),c(f,"class","relative group"),c(Z,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),c(Z,"rel","nofollow"),c(q,"id","implementation-notes"),c(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(q,"href","#implementation-notes"),c(I,"class","relative group"),c(se,"href","https://huggingface.co/Helsinki-NLP"),c(se,"rel","nofollow"),c(j,"href","https://researchportal.helsinki.fi/en/persons/j%C3%B6rg-tiedemann"),c(j,"rel","nofollow"),c(be,"href","https://marian-nmt.github.io/"),c(be,"rel","nofollow"),c(Bo,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(mn,"href","https://huggingface.co/sshleifer"),c(mn,"rel","nofollow"),c(Ft,"id","naming"),c(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ft,"href","#naming"),c(ct,"class","relative group"),c(_n,"href","https://developers.google.com/admin-sdk/directory/v1/languages"),c(_n,"rel","nofollow"),c(Nt,"id","examples"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#examples"),c(ht,"class","relative group"),c(vn,"href","https://github.com/huggingface/transformers/blob/master/examples/research_projects/seq2seq-distillation/train_distil_marian_enro_teacher.sh"),c(vn,"rel","nofollow"),c(Tn,"href","https://github.com/huggingface/transformers/blob/master/examples/research_projects/seq2seq-distillation/train_distil_marian_no_teacher.sh"),c(Tn,"rel","nofollow"),c(Ct,"id","multilingual-models"),c(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ct,"href","#multilingual-models"),c(ut,"class","relative group"),c(wn,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-roa"),c(wn,"rel","nofollow"),c($n,"href","https://github.com/Helsinki-NLP/Tatoeba-Challenge"),c($n,"rel","nofollow"),c(Lt,"id","old-style-multilingual-models"),c(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lt,"href","#old-style-multilingual-models"),c(mt,"class","relative group"),c(At,"id","transformers.MarianConfig"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.MarianConfig"),c(ft,"class","relative group"),c(Ko,"href","/docs/transformers/master/en/model_doc/marian#transformers.MarianModel"),c(In,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-de"),c(In,"rel","nofollow"),c(Zo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Xo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(ie,"class","docstring"),c(St,"id","transformers.MarianTokenizer"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.MarianTokenizer"),c(kt,"class","relative group"),c(Dn,"href","https://github.com/google/sentencepiece"),c(Dn,"rel","nofollow"),c(Qo,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Ot,"class","docstring"),c(W,"class","docstring"),c(Dt,"id","transformers.MarianModel"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.MarianModel"),c(vt,"class","relative group"),c(es,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Jn,"rel","nofollow"),c(ts,"href","/docs/transformers/master/en/model_doc/marian#transformers.MarianModel"),c(he,"class","docstring"),c(xe,"class","docstring"),c(Ut,"id","transformers.MarianMTModel"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.MarianMTModel"),c(Mt,"class","relative group"),c(ns,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(to,"rel","nofollow"),c(os,"href","/docs/transformers/master/en/model_doc/marian#transformers.MarianMTModel"),c(ue,"class","docstring"),c(we,"class","docstring"),c(Rt,"id","transformers.MarianForCausalLM"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.MarianForCausalLM"),c(yt,"class","relative group"),c(Ve,"class","docstring"),c(ao,"class","docstring"),c(Bt,"id","transformers.TFMarianModel"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#transformers.TFMarianModel"),c(xt,"class","relative group"),c(ss,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(uo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(uo,"rel","nofollow"),c(as,"href","/docs/transformers/master/en/model_doc/marian#transformers.TFMarianModel"),c(me,"class","docstring"),c(de,"class","docstring"),c(Jt,"id","transformers.TFMarianMTModel"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.TFMarianMTModel"),c(zt,"class","relative group"),c(rs,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(To,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(To,"rel","nofollow"),c(is,"href","/docs/transformers/master/en/model_doc/marian#transformers.TFMarianMTModel"),c(fe,"class","docstring"),c(le,"class","docstring"),c(Zt,"id","transformers.FlaxMarianModel"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.FlaxMarianModel"),c(jt,"class","relative group"),c(ds,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($o,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c($o,"rel","nofollow"),c(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(jo,"rel","nofollow"),c(Eo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Eo,"rel","nofollow"),c(qo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(qo,"rel","nofollow"),c(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Po,"rel","nofollow"),c(ge,"class","docstring"),c(R,"class","docstring"),c(Qt,"id","transformers.FlaxMarianMTModel"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.FlaxMarianMTModel"),c(qt,"class","relative group"),c(ls,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(So,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(So,"rel","nofollow"),c(Oo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Oo,"rel","nofollow"),c(Do,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Do,"rel","nofollow"),c(Ho,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ho,"rel","nofollow"),c(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Uo,"rel","nofollow"),c(Ge,"class","docstring"),c(B,"class","docstring")},m(n,p){e(document.head,u),h(n,z,p),h(n,f,p),e(f,g),e(g,w),M(k,w,null),e(f,_),e(f,$),e($,Ce),h(n,pe,p),h(n,E,p),e(E,_e),e(_e,K),e(E,Ie),e(E,Z),e(Z,X),e(E,Le),h(n,ze,p),h(n,V,p),e(V,A),h(n,$e,p),h(n,I,p),e(I,q),e(q,F),M(Q,F,null),e(I,ee),e(I,ke),e(ke,Ae),h(n,G,p),h(n,P,p),e(P,ve),e(ve,N),e(N,Se),e(P,te),e(P,Te),e(Te,ne),e(ne,oe),e(ne,se),e(se,Oe),e(ne,S),e(P,De),e(P,O),e(O,D),e(D,m),e(D,j),e(j,Me),e(D,nt),e(D,be),e(be,H),e(D,ot),e(P,st),e(P,He),e(He,L),e(L,ae),e(P,at),e(P,Ue),e(Ue,U),e(U,rt),e(P,it),e(P,re),e(re,ye),e(ye,fi),e(ye,Bo),e(Bo,gi),e(ye,_i),e(re,ki),e(re,dt),e(dt,cn),e(cn,vi),e(cn,ws),e(ws,Ti),e(cn,Mi),e(dt,bi),e(dt,pn),e(pn,yi),e(pn,zs),e(zs,xi),e(pn,wi),e(dt,zi),e(dt,lt),e(lt,$i),e(lt,$s),e($s,ji),e(lt,Ei),e(lt,js),e(js,qi),e(lt,Pi),e(P,Fi),e(P,Es),e(Es,hn),e(hn,Ni),e(hn,qs),e(qs,Ci),e(hn,Ii),e(P,Li),e(P,Ps),e(Ps,un),e(un,Ai),e(un,mn),e(mn,Si),e(un,Oi),h(n,Ga,p),h(n,ct,p),e(ct,Ft),e(Ft,Fs),M(fn,Fs,null),e(ct,Di),e(ct,Ns),e(Ns,Hi),h(n,Ja,p),h(n,je,p),e(je,Vo),e(Vo,Ui),e(Vo,Cs),e(Cs,Wi),e(je,Ri),e(je,gn),e(gn,Bi),e(gn,_n),e(_n,Vi),e(gn,Gi),e(je,Ji),e(je,pt),e(pt,Yi),e(pt,Is),e(Is,Ki),e(pt,Zi),e(pt,Ls),e(Ls,Xi),e(pt,Qi),e(je,ed),e(je,As),e(As,td),h(n,Ya,p),h(n,ht,p),e(ht,Nt),e(Nt,Ss),M(kn,Ss,null),e(ht,nd),e(ht,Os),e(Os,od),h(n,Ka,p),h(n,Be,p),e(Be,Ds),e(Ds,sd),e(Be,ad),e(Be,Hs),e(Hs,vn),e(vn,rd),e(Be,id),e(Be,Us),e(Us,Tn),e(Tn,dd),h(n,Za,p),h(n,ut,p),e(ut,Ct),e(Ct,Ws),M(Mn,Ws,null),e(ut,ld),e(ut,Rs),e(Rs,cd),h(n,Xa,p),h(n,Ee,p),e(Ee,bn),e(bn,pd),e(bn,Bs),e(Bs,hd),e(bn,ud),e(Ee,md),e(Ee,yn),e(yn,fd),e(yn,Vs),e(Vs,gd),e(yn,_d),e(Ee,kd),e(Ee,xn),e(xn,vd),e(xn,wn),e(wn,Td),e(xn,Md),e(Ee,bd),e(Ee,zn),e(zn,yd),e(zn,Gs),e(Gs,xd),e(zn,wd),h(n,Qa,p),h(n,It,p),e(It,zd),e(It,$n),e($n,$d),e(It,jd),h(n,er,p),M(jn,n,p),h(n,tr,p),h(n,Go,p),e(Go,Ed),h(n,nr,p),M(En,n,p),h(n,or,p),h(n,mt,p),e(mt,Lt),e(Lt,Js),M(qn,Js,null),e(mt,qd),e(mt,Ys),e(Ys,Pd),h(n,sr,p),h(n,Jo,p),e(Jo,Fd),h(n,ar,p),M(Pn,n,p),h(n,rr,p),h(n,Yo,p),e(Yo,Nd),h(n,ir,p),M(Fn,n,p),h(n,dr,p),h(n,ft,p),e(ft,At),e(At,Ks),M(Nn,Ks,null),e(ft,Cd),e(ft,Zs),e(Zs,Id),h(n,lr,p),h(n,ie,p),M(Cn,ie,null),e(ie,Ld),e(ie,gt),e(gt,Ad),e(gt,Ko),e(Ko,Sd),e(gt,Od),e(gt,In),e(In,Dd),e(gt,Hd),e(ie,Ud),e(ie,_t),e(_t,Wd),e(_t,Zo),e(Zo,Rd),e(_t,Bd),e(_t,Xo),e(Xo,Vd),e(_t,Gd),e(ie,Jd),e(ie,Xs),e(Xs,Yd),e(ie,Kd),M(Ln,ie,null),h(n,cr,p),h(n,kt,p),e(kt,St),e(St,Qs),M(An,Qs,null),e(kt,Zd),e(kt,ea),e(ea,Xd),h(n,pr,p),h(n,W,p),M(Sn,W,null),e(W,Qd),e(W,On),e(On,el),e(On,Dn),e(Dn,tl),e(On,nl),e(W,ol),e(W,Hn),e(Hn,sl),e(Hn,Qo),e(Qo,al),e(Hn,rl),e(W,il),e(W,ta),e(ta,dl),e(W,ll),M(Un,W,null),e(W,cl),e(W,Ot),M(Wn,Ot,null),e(Ot,pl),e(Ot,na),e(na,hl),h(n,hr,p),h(n,vt,p),e(vt,Dt),e(Dt,oa),M(Rn,oa,null),e(vt,ul),e(vt,sa),e(sa,ml),h(n,ur,p),h(n,xe,p),M(Bn,xe,null),e(xe,fl),e(xe,Vn),e(Vn,gl),e(Vn,es),e(es,_l),e(Vn,kl),e(xe,vl),e(xe,Gn),e(Gn,Tl),e(Gn,Jn),e(Jn,Ml),e(Gn,bl),e(xe,yl),e(xe,he),M(Yn,he,null),e(he,xl),e(he,Tt),e(Tt,wl),e(Tt,ts),e(ts,zl),e(Tt,$l),e(Tt,aa),e(aa,jl),e(Tt,El),e(he,ql),M(Ht,he,null),e(he,Pl),e(he,ra),e(ra,Fl),e(he,Nl),M(Kn,he,null),h(n,mr,p),h(n,Mt,p),e(Mt,Ut),e(Ut,ia),M(Zn,ia,null),e(Mt,Cl),e(Mt,da),e(da,Il),h(n,fr,p),h(n,we,p),M(Xn,we,null),e(we,Ll),e(we,Qn),e(Qn,Al),e(Qn,ns),e(ns,Sl),e(Qn,Ol),e(we,Dl),e(we,eo),e(eo,Hl),e(eo,to),e(to,Ul),e(eo,Wl),e(we,Rl),e(we,ue),M(no,ue,null),e(ue,Bl),e(ue,bt),e(bt,Vl),e(bt,os),e(os,Gl),e(bt,Jl),e(bt,la),e(la,Yl),e(bt,Kl),e(ue,Zl),M(Wt,ue,null),e(ue,Xl),e(ue,ca),e(ca,Ql),e(ue,ec),M(oo,ue,null),h(n,gr,p),h(n,yt,p),e(yt,Rt),e(Rt,pa),M(so,pa,null),e(yt,tc),e(yt,ha),e(ha,nc),h(n,_r,p),h(n,ao,p),e(ao,Ve),M(ro,Ve,null),e(Ve,oc),e(Ve,ua),e(ua,sc),e(Ve,ac),M(io,Ve,null),h(n,kr,p),h(n,xt,p),e(xt,Bt),e(Bt,ma),M(lo,ma,null),e(xt,rc),e(xt,fa),e(fa,ic),h(n,vr,p),h(n,de,p),M(co,de,null),e(de,dc),e(de,po),e(po,lc),e(po,ss),e(ss,cc),e(po,pc),e(de,hc),e(de,ho),e(ho,uc),e(ho,uo),e(uo,mc),e(ho,fc),e(de,gc),M(Vt,de,null),e(de,_c),e(de,me),M(mo,me,null),e(me,kc),e(me,wt),e(wt,vc),e(wt,as),e(as,Tc),e(wt,Mc),e(wt,ga),e(ga,bc),e(wt,yc),e(me,xc),M(Gt,me,null),e(me,wc),e(me,_a),e(_a,zc),e(me,$c),M(fo,me,null),h(n,Tr,p),h(n,zt,p),e(zt,Jt),e(Jt,ka),M(go,ka,null),e(zt,jc),e(zt,va),e(va,Ec),h(n,Mr,p),h(n,le,p),M(_o,le,null),e(le,qc),e(le,ko),e(ko,Pc),e(ko,rs),e(rs,Fc),e(ko,Nc),e(le,Cc),e(le,vo),e(vo,Ic),e(vo,To),e(To,Lc),e(vo,Ac),e(le,Sc),M(Yt,le,null),e(le,Oc),e(le,fe),M(Mo,fe,null),e(fe,Dc),e(fe,$t),e($t,Hc),e($t,is),e(is,Uc),e($t,Wc),e($t,Ta),e(Ta,Rc),e($t,Bc),e(fe,Vc),M(Kt,fe,null),e(fe,Gc),e(fe,Ma),e(Ma,Jc),e(fe,Yc),M(bo,fe,null),h(n,br,p),h(n,jt,p),e(jt,Zt),e(Zt,ba),M(yo,ba,null),e(jt,Kc),e(jt,ya),e(ya,Zc),h(n,yr,p),h(n,R,p),M(xo,R,null),e(R,Xc),e(R,wo),e(wo,Qc),e(wo,ds),e(ds,ep),e(wo,tp),e(R,np),e(R,zo),e(zo,op),e(zo,$o),e($o,sp),e(zo,ap),e(R,rp),e(R,xa),e(xa,ip),e(R,dp),e(R,We),e(We,wa),e(wa,jo),e(jo,lp),e(We,cp),e(We,za),e(za,Eo),e(Eo,pp),e(We,hp),e(We,$a),e($a,qo),e(qo,up),e(We,mp),e(We,ja),e(ja,Po),e(Po,fp),e(R,gp),e(R,ge),M(Fo,ge,null),e(ge,_p),e(ge,Et),e(Et,kp),e(Et,Ea),e(Ea,vp),e(Et,Tp),e(Et,qa),e(qa,Mp),e(Et,bp),e(ge,yp),M(Xt,ge,null),e(ge,xp),e(ge,Pa),e(Pa,wp),e(ge,zp),M(No,ge,null),h(n,xr,p),h(n,qt,p),e(qt,Qt),e(Qt,Fa),M(Co,Fa,null),e(qt,$p),e(qt,Na),e(Na,jp),h(n,wr,p),h(n,B,p),M(Io,B,null),e(B,Ep),e(B,Lo),e(Lo,qp),e(Lo,ls),e(ls,Pp),e(Lo,Fp),e(B,Np),e(B,Ao),e(Ao,Cp),e(Ao,So),e(So,Ip),e(Ao,Lp),e(B,Ap),e(B,Ca),e(Ca,Sp),e(B,Op),e(B,Re),e(Re,Ia),e(Ia,Oo),e(Oo,Dp),e(Re,Hp),e(Re,La),e(La,Do),e(Do,Up),e(Re,Wp),e(Re,Aa),e(Aa,Ho),e(Ho,Rp),e(Re,Bp),e(Re,Sa),e(Sa,Uo),e(Uo,Vp),e(B,Gp),e(B,Ge),M(Wo,Ge,null),e(Ge,Jp),e(Ge,Pt),e(Pt,Yp),e(Pt,Oa),e(Oa,Kp),e(Pt,Zp),e(Pt,Da),e(Da,Xp),e(Pt,Qp),e(Ge,eh),M(en,Ge,null),zr=!0},p(n,[p]){const Ro={};p&2&&(Ro.$$scope={dirty:p,ctx:n}),Ht.$set(Ro);const Ha={};p&2&&(Ha.$$scope={dirty:p,ctx:n}),Wt.$set(Ha);const Ua={};p&2&&(Ua.$$scope={dirty:p,ctx:n}),Vt.$set(Ua);const Wa={};p&2&&(Wa.$$scope={dirty:p,ctx:n}),Gt.$set(Wa);const tn={};p&2&&(tn.$$scope={dirty:p,ctx:n}),Yt.$set(tn);const Ra={};p&2&&(Ra.$$scope={dirty:p,ctx:n}),Kt.$set(Ra);const Ba={};p&2&&(Ba.$$scope={dirty:p,ctx:n}),Xt.$set(Ba);const Va={};p&2&&(Va.$$scope={dirty:p,ctx:n}),en.$set(Va)},i(n){zr||(b(k.$$.fragment,n),b(Q.$$.fragment,n),b(fn.$$.fragment,n),b(kn.$$.fragment,n),b(Mn.$$.fragment,n),b(jn.$$.fragment,n),b(En.$$.fragment,n),b(qn.$$.fragment,n),b(Pn.$$.fragment,n),b(Fn.$$.fragment,n),b(Nn.$$.fragment,n),b(Cn.$$.fragment,n),b(Ln.$$.fragment,n),b(An.$$.fragment,n),b(Sn.$$.fragment,n),b(Un.$$.fragment,n),b(Wn.$$.fragment,n),b(Rn.$$.fragment,n),b(Bn.$$.fragment,n),b(Yn.$$.fragment,n),b(Ht.$$.fragment,n),b(Kn.$$.fragment,n),b(Zn.$$.fragment,n),b(Xn.$$.fragment,n),b(no.$$.fragment,n),b(Wt.$$.fragment,n),b(oo.$$.fragment,n),b(so.$$.fragment,n),b(ro.$$.fragment,n),b(io.$$.fragment,n),b(lo.$$.fragment,n),b(co.$$.fragment,n),b(Vt.$$.fragment,n),b(mo.$$.fragment,n),b(Gt.$$.fragment,n),b(fo.$$.fragment,n),b(go.$$.fragment,n),b(_o.$$.fragment,n),b(Yt.$$.fragment,n),b(Mo.$$.fragment,n),b(Kt.$$.fragment,n),b(bo.$$.fragment,n),b(yo.$$.fragment,n),b(xo.$$.fragment,n),b(Fo.$$.fragment,n),b(Xt.$$.fragment,n),b(No.$$.fragment,n),b(Co.$$.fragment,n),b(Io.$$.fragment,n),b(Wo.$$.fragment,n),b(en.$$.fragment,n),zr=!0)},o(n){y(k.$$.fragment,n),y(Q.$$.fragment,n),y(fn.$$.fragment,n),y(kn.$$.fragment,n),y(Mn.$$.fragment,n),y(jn.$$.fragment,n),y(En.$$.fragment,n),y(qn.$$.fragment,n),y(Pn.$$.fragment,n),y(Fn.$$.fragment,n),y(Nn.$$.fragment,n),y(Cn.$$.fragment,n),y(Ln.$$.fragment,n),y(An.$$.fragment,n),y(Sn.$$.fragment,n),y(Un.$$.fragment,n),y(Wn.$$.fragment,n),y(Rn.$$.fragment,n),y(Bn.$$.fragment,n),y(Yn.$$.fragment,n),y(Ht.$$.fragment,n),y(Kn.$$.fragment,n),y(Zn.$$.fragment,n),y(Xn.$$.fragment,n),y(no.$$.fragment,n),y(Wt.$$.fragment,n),y(oo.$$.fragment,n),y(so.$$.fragment,n),y(ro.$$.fragment,n),y(io.$$.fragment,n),y(lo.$$.fragment,n),y(co.$$.fragment,n),y(Vt.$$.fragment,n),y(mo.$$.fragment,n),y(Gt.$$.fragment,n),y(fo.$$.fragment,n),y(go.$$.fragment,n),y(_o.$$.fragment,n),y(Yt.$$.fragment,n),y(Mo.$$.fragment,n),y(Kt.$$.fragment,n),y(bo.$$.fragment,n),y(yo.$$.fragment,n),y(xo.$$.fragment,n),y(Fo.$$.fragment,n),y(Xt.$$.fragment,n),y(No.$$.fragment,n),y(Co.$$.fragment,n),y(Io.$$.fragment,n),y(Wo.$$.fragment,n),y(en.$$.fragment,n),zr=!1},d(n){t(u),n&&t(z),n&&t(f),x(k),n&&t(pe),n&&t(E),n&&t(ze),n&&t(V),n&&t($e),n&&t(I),x(Q),n&&t(G),n&&t(P),n&&t(Ga),n&&t(ct),x(fn),n&&t(Ja),n&&t(je),n&&t(Ya),n&&t(ht),x(kn),n&&t(Ka),n&&t(Be),n&&t(Za),n&&t(ut),x(Mn),n&&t(Xa),n&&t(Ee),n&&t(Qa),n&&t(It),n&&t(er),x(jn,n),n&&t(tr),n&&t(Go),n&&t(nr),x(En,n),n&&t(or),n&&t(mt),x(qn),n&&t(sr),n&&t(Jo),n&&t(ar),x(Pn,n),n&&t(rr),n&&t(Yo),n&&t(ir),x(Fn,n),n&&t(dr),n&&t(ft),x(Nn),n&&t(lr),n&&t(ie),x(Cn),x(Ln),n&&t(cr),n&&t(kt),x(An),n&&t(pr),n&&t(W),x(Sn),x(Un),x(Wn),n&&t(hr),n&&t(vt),x(Rn),n&&t(ur),n&&t(xe),x(Bn),x(Yn),x(Ht),x(Kn),n&&t(mr),n&&t(Mt),x(Zn),n&&t(fr),n&&t(we),x(Xn),x(no),x(Wt),x(oo),n&&t(gr),n&&t(yt),x(so),n&&t(_r),n&&t(ao),x(ro),x(io),n&&t(kr),n&&t(xt),x(lo),n&&t(vr),n&&t(de),x(co),x(Vt),x(mo),x(Gt),x(fo),n&&t(Tr),n&&t(zt),x(go),n&&t(Mr),n&&t(le),x(_o),x(Yt),x(Mo),x(Kt),x(bo),n&&t(br),n&&t(jt),x(yo),n&&t(yr),n&&t(R),x(xo),x(Fo),x(Xt),x(No),n&&t(xr),n&&t(qt),x(Co),n&&t(wr),n&&t(B),x(Io),x(Wo),x(en)}}}const Bm={local:"marianmt",sections:[{local:"implementation-notes",title:"Implementation Notes"},{local:"naming",title:"Naming"},{local:"examples",title:"Examples"},{local:"multilingual-models",title:"Multilingual Models"},{local:"old-style-multilingual-models",title:"Old Style Multi-Lingual Models"},{local:"transformers.MarianConfig",title:"MarianConfig"},{local:"transformers.MarianTokenizer",title:"MarianTokenizer"},{local:"transformers.MarianModel",title:"MarianModel"},{local:"transformers.MarianMTModel",title:"MarianMTModel"},{local:"transformers.MarianForCausalLM",title:"MarianForCausalLM"},{local:"transformers.TFMarianModel",title:"TFMarianModel"},{local:"transformers.TFMarianMTModel",title:"TFMarianMTModel"},{local:"transformers.FlaxMarianModel",title:"FlaxMarianModel"},{local:"transformers.FlaxMarianMTModel",title:"FlaxMarianMTModel"}],title:"MarianMT"};function Vm(C,u,z){let{fw:f}=u;return C.$$set=g=>{"fw"in g&&z(0,f=g.fw)},[f]}class Qm extends Fm{constructor(u){super();Nm(this,u,Vm,Rm,Cm,{fw:0})}}export{Qm as default,Bm as metadata};
