import{S as nf,i as of,s as sf,e as o,k as d,w as k,t as r,M as af,c as s,d as t,m as l,a,x as v,h as i,b as c,F as e,g as h,y as T,q as M,o as y,B as b}from"../../chunks/vendor-329198bb.js";import{T as pn}from"../../chunks/Tip-39ae8a84.js";import{D as V}from"../../chunks/Docstring-88811472.js";import{C as $e}from"../../chunks/CodeBlock-49151c5f.js";import{I as he}from"../../chunks/IconCopyLink-236b0ec7.js";import"../../chunks/CopyButton-970e2b07.js";function rf(C){let u,z,f,g,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var _=a(u);z=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(x,_){h(x,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(x){x&&t(u)}}}function df(C){let u,z,f,g,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var _=a(u);z=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(x,_){h(x,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(x){x&&t(u)}}}function lf(C){let u,z,f,g,w,x,_,$,Ae,ue,E,ke,X,Se,Q,ee,Oe,je,G,A,Ee,I,q,F,te,ne,ve,He,J,P,Te,N,De,oe,Me,se,ae,re,Ue,S,Re,O,H;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),f=d(),g=o("ul"),w=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),_=d(),$=o("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=d(),E=o("p"),ke=r("This second option is useful when using "),X=o("code"),Se=r("tf.keras.Model.fit"),Q=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=o("code"),Oe=r("model(inputs)"),je=r("."),G=d(),A=o("p"),Ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),I=d(),q=o("ul"),F=o("li"),te=r("a single Tensor with "),ne=o("code"),ve=r("input_ids"),He=r(" only and nothing else: "),J=o("code"),P=r("model(input_ids)"),Te=d(),N=o("li"),De=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=o("code"),Me=r("model([input_ids, attention_mask])"),se=r(" or "),ae=o("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),Ue=d(),S=o("li"),Re=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=o("code"),H=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=l(m),g=s(m,"UL",{});var ye=a(g);w=s(ye,"LI",{});var ot=a(w);x=i(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(t),_=l(ye),$=s(ye,"LI",{});var be=a($);Ae=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),ye.forEach(t),ue=l(m),E=s(m,"P",{});var D=a(E);ke=i(D,"This second option is useful when using "),X=s(D,"CODE",{});var st=a(X);Se=i(st,"tf.keras.Model.fit"),st.forEach(t),Q=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=s(D,"CODE",{});var at=a(ee);Oe=i(at,"model(inputs)"),at.forEach(t),je=i(D,"."),D.forEach(t),G=l(m),A=s(m,"P",{});var We=a(A);Ee=i(We,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),We.forEach(t),I=l(m),q=s(m,"UL",{});var L=a(q);F=s(L,"LI",{});var ie=a(F);te=i(ie,"a single Tensor with "),ne=s(ie,"CODE",{});var rt=a(ne);ve=i(rt,"input_ids"),rt.forEach(t),He=i(ie," only and nothing else: "),J=s(ie,"CODE",{});var Be=a(J);P=i(Be,"model(input_ids)"),Be.forEach(t),ie.forEach(t),Te=l(L),N=s(L,"LI",{});var U=a(N);De=i(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=s(U,"CODE",{});var it=a(oe);Me=i(it,"model([input_ids, attention_mask])"),it.forEach(t),se=i(U," or "),ae=s(U,"CODE",{});var dt=a(ae);re=i(dt,"model([input_ids, attention_mask, token_type_ids])"),dt.forEach(t),U.forEach(t),Ue=l(L),S=s(L,"LI",{});var de=a(S);Re=i(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=s(de,"CODE",{});var xe=a(O);H=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),de.forEach(t),L.forEach(t)},m(m,j){h(m,u,j),e(u,z),h(m,f,j),h(m,g,j),e(g,w),e(w,x),e(g,_),e(g,$),e($,Ae),h(m,ue,j),h(m,E,j),e(E,ke),e(E,X),e(X,Se),e(E,Q),e(E,ee),e(ee,Oe),e(E,je),h(m,G,j),h(m,A,j),e(A,Ee),h(m,I,j),h(m,q,j),e(q,F),e(F,te),e(F,ne),e(ne,ve),e(F,He),e(F,J),e(J,P),e(q,Te),e(q,N),e(N,De),e(N,oe),e(oe,Me),e(N,se),e(N,ae),e(ae,re),e(q,Ue),e(q,S),e(S,Re),e(S,O),e(O,H)},d(m){m&&t(u),m&&t(f),m&&t(g),m&&t(ue),m&&t(E),m&&t(G),m&&t(A),m&&t(I),m&&t(q)}}}function cf(C){let u,z,f,g,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var _=a(u);z=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(x,_){h(x,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(x){x&&t(u)}}}function pf(C){let u,z,f,g,w,x,_,$,Ae,ue,E,ke,X,Se,Q,ee,Oe,je,G,A,Ee,I,q,F,te,ne,ve,He,J,P,Te,N,De,oe,Me,se,ae,re,Ue,S,Re,O,H;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),f=d(),g=o("ul"),w=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),_=d(),$=o("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=d(),E=o("p"),ke=r("This second option is useful when using "),X=o("code"),Se=r("tf.keras.Model.fit"),Q=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=o("code"),Oe=r("model(inputs)"),je=r("."),G=d(),A=o("p"),Ee=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),I=d(),q=o("ul"),F=o("li"),te=r("a single Tensor with "),ne=o("code"),ve=r("input_ids"),He=r(" only and nothing else: "),J=o("code"),P=r("model(input_ids)"),Te=d(),N=o("li"),De=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=o("code"),Me=r("model([input_ids, attention_mask])"),se=r(" or "),ae=o("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),Ue=d(),S=o("li"),Re=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=o("code"),H=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),f=l(m),g=s(m,"UL",{});var ye=a(g);w=s(ye,"LI",{});var ot=a(w);x=i(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(t),_=l(ye),$=s(ye,"LI",{});var be=a($);Ae=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),ye.forEach(t),ue=l(m),E=s(m,"P",{});var D=a(E);ke=i(D,"This second option is useful when using "),X=s(D,"CODE",{});var st=a(X);Se=i(st,"tf.keras.Model.fit"),st.forEach(t),Q=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),ee=s(D,"CODE",{});var at=a(ee);Oe=i(at,"model(inputs)"),at.forEach(t),je=i(D,"."),D.forEach(t),G=l(m),A=s(m,"P",{});var We=a(A);Ee=i(We,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),We.forEach(t),I=l(m),q=s(m,"UL",{});var L=a(q);F=s(L,"LI",{});var ie=a(F);te=i(ie,"a single Tensor with "),ne=s(ie,"CODE",{});var rt=a(ne);ve=i(rt,"input_ids"),rt.forEach(t),He=i(ie," only and nothing else: "),J=s(ie,"CODE",{});var Be=a(J);P=i(Be,"model(input_ids)"),Be.forEach(t),ie.forEach(t),Te=l(L),N=s(L,"LI",{});var U=a(N);De=i(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),oe=s(U,"CODE",{});var it=a(oe);Me=i(it,"model([input_ids, attention_mask])"),it.forEach(t),se=i(U," or "),ae=s(U,"CODE",{});var dt=a(ae);re=i(dt,"model([input_ids, attention_mask, token_type_ids])"),dt.forEach(t),U.forEach(t),Ue=l(L),S=s(L,"LI",{});var de=a(S);Re=i(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=s(de,"CODE",{});var xe=a(O);H=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),de.forEach(t),L.forEach(t)},m(m,j){h(m,u,j),e(u,z),h(m,f,j),h(m,g,j),e(g,w),e(w,x),e(g,_),e(g,$),e($,Ae),h(m,ue,j),h(m,E,j),e(E,ke),e(E,X),e(X,Se),e(E,Q),e(E,ee),e(ee,Oe),e(E,je),h(m,G,j),h(m,A,j),e(A,Ee),h(m,I,j),h(m,q,j),e(q,F),e(F,te),e(F,ne),e(ne,ve),e(F,He),e(F,J),e(J,P),e(q,Te),e(q,N),e(N,De),e(N,oe),e(oe,Me),e(N,se),e(N,ae),e(ae,re),e(q,Ue),e(q,S),e(S,Re),e(S,O),e(O,H)},d(m){m&&t(u),m&&t(f),m&&t(g),m&&t(ue),m&&t(E),m&&t(G),m&&t(A),m&&t(I),m&&t(q)}}}function hf(C){let u,z,f,g,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var _=a(u);z=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(x,_){h(x,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(x){x&&t(u)}}}function uf(C){let u,z,f,g,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var _=a(u);z=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(x,_){h(x,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(x){x&&t(u)}}}function mf(C){let u,z,f,g,w;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=r("Module"),w=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var _=a(u);z=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var $=a(f);g=i($,"Module"),$.forEach(t),w=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(x,_){h(x,u,_),e(u,z),e(u,f),e(f,g),e(u,w)},d(x){x&&t(u)}}}function ff(C){let u,z,f,g,w,x,_,$,Ae,ue,E,ke,X,Se,Q,ee,Oe,je,G,A,Ee,I,q,F,te,ne,ve,He,J,P,Te,N,De,oe,Me,se,ae,re,Ue,S,Re,O,H,m,j,ye,ot,be,D,st,at,We,L,ie,rt,Be,U,it,dt,de,xe,wi,Xo,zi,$i,ji,lt,hn,Ei,Ps,qi,Pi,Fi,un,Ni,Fs,Ci,Ii,Li,ct,Ai,Ns,Si,Oi,Cs,Hi,Di,Ui,Is,mn,Ri,Ls,Wi,Bi,Vi,As,fn,Gi,gn,Ji,Yi,er,pt,Ct,Ss,_n,Ki,Os,Zi,tr,qe,Qo,Xi,Hs,Qi,ed,kn,td,vn,nd,od,sd,ht,ad,Ds,rd,id,Us,dd,ld,cd,Rs,pd,nr,ut,It,Ws,Tn,hd,Bs,ud,or,Je,Vs,md,fd,Gs,Mn,gd,_d,Js,yn,kd,sr,mt,Lt,Ys,bn,vd,Ks,Td,ar,Pe,xn,Md,Zs,yd,bd,xd,wn,wd,Xs,zd,$d,jd,zn,Ed,$n,qd,Pd,Fd,jn,Nd,Qs,Cd,Id,rr,At,Ld,En,Ad,Sd,ir,qn,dr,es,Od,lr,Pn,cr,ft,St,ea,Fn,Hd,ta,Dd,pr,ts,Ud,hr,Nn,ur,ns,Rd,mr,Cn,fr,gt,Ot,na,In,Wd,oa,Bd,gr,le,Ln,Vd,_t,Gd,os,Jd,Yd,An,Kd,Zd,Xd,kt,Qd,ss,el,tl,as,nl,ol,sl,sa,al,rl,Sn,_r,vt,Ht,aa,On,il,ra,dl,kr,R,Hn,ll,Dn,cl,Un,pl,hl,ul,Rn,ml,rs,fl,gl,_l,ia,kl,vl,Wn,Tl,Dt,Bn,Ml,da,yl,vr,Tt,Ut,la,Vn,bl,ca,xl,Tr,we,Gn,wl,Jn,zl,is,$l,jl,El,Yn,ql,Kn,Pl,Fl,Nl,me,Zn,Cl,Mt,Il,ds,Ll,Al,pa,Sl,Ol,Hl,Rt,Dl,ha,Ul,Rl,Xn,Mr,yt,Wt,ua,Qn,Wl,ma,Bl,yr,ze,eo,Vl,to,Gl,ls,Jl,Yl,Kl,no,Zl,oo,Xl,Ql,ec,Y,so,tc,bt,nc,cs,oc,sc,fa,ac,rc,ic,Bt,dc,ao,lc,ro,cc,pc,hc,ga,uc,mc,io,br,xt,Vt,_a,lo,fc,ka,gc,xr,wt,co,_c,Ye,po,kc,va,vc,Tc,ho,wr,zt,Gt,Ta,uo,Mc,Ma,yc,zr,ce,mo,bc,fo,xc,ps,wc,zc,$c,go,jc,_o,Ec,qc,Pc,Jt,Fc,fe,ko,Nc,$t,Cc,hs,Ic,Lc,ya,Ac,Sc,Oc,Yt,Hc,ba,Dc,Uc,vo,$r,jt,Kt,xa,To,Rc,wa,Wc,jr,pe,Mo,Bc,yo,Vc,us,Gc,Jc,Yc,bo,Kc,xo,Zc,Xc,Qc,Zt,ep,K,wo,tp,Et,np,ms,op,sp,za,ap,rp,ip,Xt,dp,zo,lp,$o,cp,pp,hp,$a,up,mp,jo,Er,qt,Qt,ja,Eo,fp,Ea,gp,qr,W,qo,_p,Po,kp,fs,vp,Tp,Mp,Fo,yp,No,bp,xp,wp,qa,zp,$p,Ve,Pa,Co,jp,Ep,Fa,Io,qp,Pp,Na,Lo,Fp,Np,Ca,Ao,Cp,Ip,ge,So,Lp,Pt,Ap,Ia,Sp,Op,La,Hp,Dp,Up,en,Rp,Aa,Wp,Bp,Oo,Pr,Ft,tn,Sa,Ho,Vp,Oa,Gp,Fr,B,Do,Jp,Uo,Yp,gs,Kp,Zp,Xp,Ro,Qp,Wo,eh,th,nh,Ha,oh,sh,Ge,Da,Bo,ah,rh,Ua,Vo,ih,dh,Ra,Go,lh,ch,Wa,Jo,ph,hh,_e,Yo,uh,Nt,mh,Ba,fh,gh,Va,_h,kh,vh,nn,Th,Ga,Mh,yh,Ko,Nr;return x=new he({}),te=new he({}),_n=new he({}),Tn=new he({}),bn=new he({}),qn=new $e({props:{code:`from transformers import MarianMTModel, MarianTokenizer

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
 <span class="hljs-string">&#x27;Y esto al espa\xF1ol&#x27;</span>]`}}),In=new he({}),Ln=new V({props:{name:"class transformers.MarianConfig",anchor:"transformers.MarianConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 58100"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 58100"},{name:"eos_token_id",val:" = 0"},{name:"forced_eos_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/configuration_marian.py#L35",parametersDescription:[{anchor:"transformers.MarianConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Marian model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianModel">MarianModel</a> or <a href="/docs/transformers/master/en/model_doc/marian#transformers.TFMarianModel">TFMarianModel</a>.`,name:"vocab_size"},{anchor:"transformers.MarianConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Sn=new $e({props:{code:`from transformers import MarianModel, MarianConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),On=new he({}),Hn=new V({props:{name:"class transformers.MarianTokenizer",anchor:"transformers.MarianTokenizer",parameters:[{name:"vocab",val:""},{name:"source_spm",val:""},{name:"target_spm",val:""},{name:"source_lang",val:" = None"},{name:"target_lang",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"model_max_length",val:" = 512"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/tokenization_marian.py#L59",parametersDescription:[{anchor:"transformers.MarianTokenizer.source_spm",description:`<strong>source_spm</strong> (<code>str</code>) &#x2014;
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

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)  <span class="hljs-comment"># should work</span>`}}),Bn=new V({props:{name:"as_target_tokenizer",anchor:"transformers.MarianTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/tokenization_marian.py#L268"}}),Vn=new he({}),Gn=new V({props:{name:"class transformers.MarianModel",anchor:"transformers.MarianModel",parameters:[{name:"config",val:": MarianConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_marian.py#L1081",parametersDescription:[{anchor:"transformers.MarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zn=new V({props:{name:"forward",anchor:"transformers.MarianModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_marian.py#L1108",parametersDescription:[{anchor:"transformers.MarianModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig"
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
`}}),Rt=new pn({props:{$$slots:{default:[rf]},$$scope:{ctx:C}}}),Xn=new $e({props:{code:`from transformers import MarianTokenizer, MarianModel

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = MarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer(
    "<pad> Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen",
    return_tensors="pt",
    add_special_tokens=False,
).input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&lt;pad&gt; Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>    add_special_tokens=<span class="hljs-literal">False</span>,
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Qn=new he({}),eo=new V({props:{name:"class transformers.MarianMTModel",anchor:"transformers.MarianMTModel",parameters:[{name:"config",val:": MarianConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_marian.py#L1210",parametersDescription:[{anchor:"transformers.MarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),so=new V({props:{name:"forward",anchor:"transformers.MarianMTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_marian.py#L1260",parametersDescription:[{anchor:"transformers.MarianMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarianMTModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
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
`}}),Bt=new pn({props:{$$slots:{default:[df]},$$scope:{ctx:C}}}),io=new $e({props:{code:`from transformers import MarianTokenizer, MarianMTModel
from typing import List

src = "fr"  # source language
trg = "en"  # target language
sample_text = "o\xF9 est l'arr\xEAt de bus ?"
model_name = f"Helsinki-NLP/opus-mt-{src}-{trg}"

model = MarianMTModel.from_pretrained(model_name)
tokenizer = MarianTokenizer.from_pretrained(model_name)
batch = tokenizer([sample_text], return_tensors="pt")
gen = model.generate(**batch)
tokenizer.batch_decode(gen, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianMTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">List</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&quot;fr&quot;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&quot;en&quot;</span>  <span class="hljs-comment"># target language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;o\xF9 est l&#x27;arr\xEAt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&quot;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(gen, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`}}),lo=new he({}),co=new V({props:{name:"class transformers.MarianForCausalLM",anchor:"transformers.MarianForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_marian.py#L1404"}}),po=new V({props:{name:"forward",anchor:"transformers.MarianForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_marian.py#L1435",parametersDescription:[{anchor:"transformers.MarianForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
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
`}}),ho=new $e({props:{code:`from transformers import MarianTokenizer, MarianForCausalLM

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-fr-en")
model = MarianForCausalLM.from_pretrained("Helsinki-NLP/opus-mt-fr-en", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, MarianForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-fr-en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianForCausalLM.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-fr-en&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),uo=new he({}),mo=new V({props:{name:"class transformers.TFMarianModel",anchor:"transformers.TFMarianModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_tf_marian.py#L1217",parametersDescription:[{anchor:"transformers.TFMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jt=new pn({props:{$$slots:{default:[lf]},$$scope:{ctx:C}}}),ko=new V({props:{name:"call",anchor:"transformers.TFMarianModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_tf_marian.py#L1229",parametersDescription:[{anchor:"transformers.TFMarianModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
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
`}}),Yt=new pn({props:{$$slots:{default:[cf]},$$scope:{ctx:C}}}),vo=new $e({props:{code:`from transformers import MarianTokenizer, TFMarianModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),To=new he({}),Mo=new V({props:{name:"class transformers.TFMarianMTModel",anchor:"transformers.TFMarianMTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_tf_marian.py#L1324",parametersDescription:[{anchor:"transformers.TFMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zt=new pn({props:{$$slots:{default:[pf]},$$scope:{ctx:C}}}),wo=new V({props:{name:"call",anchor:"transformers.TFMarianMTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_tf_marian.py#L1357",parametersDescription:[{anchor:"transformers.TFMarianMTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianMTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianMTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMarianMTModel.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
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
`}}),Xt=new pn({props:{$$slots:{default:[hf]},$$scope:{ctx:C}}}),jo=new $e({props:{code:`from transformers import MarianTokenizer, TFMarianMTModel
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
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`}}),Eo=new he({}),qo=new V({props:{name:"class transformers.FlaxMarianModel",anchor:"transformers.FlaxMarianModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_flax_marian.py#L1210",parametersDescription:[{anchor:"transformers.FlaxMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),So=new V({props:{name:"__call__",anchor:"transformers.FlaxMarianPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_flax_marian.py#L1145",parametersDescription:[{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig"
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
`}}),en=new pn({props:{$$slots:{default:[uf]},$$scope:{ctx:C}}}),Oo=new $e({props:{code:`from transformers import MarianTokenizer, FlaxMarianModel

tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = FlaxMarianModel.from_pretrained("Helsinki-NLP/opus-mt-en-de")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianTokenizer, FlaxMarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ho=new he({}),Do=new V({props:{name:"class transformers.FlaxMarianMTModel",anchor:"transformers.FlaxMarianMTModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_flax_marian.py#L1296",parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianMTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Yo=new V({props:{name:"__call__",anchor:"transformers.FlaxMarianPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/marian/modeling_flax_marian.py#L1145",parametersDescription:[{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/marian#transformers.MarianTokenizer">MarianTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/marian#transformers.MarianConfig"
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
`}}),nn=new pn({props:{$$slots:{default:[mf]},$$scope:{ctx:C}}}),Ko=new $e({props:{code:`from transformers import MarianTokenizer, FlaxMarianMTModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*</span>`}}),{c(){u=o("meta"),z=d(),f=o("h1"),g=o("a"),w=o("span"),k(x.$$.fragment),_=d(),$=o("span"),Ae=r("MarianMT"),ue=d(),E=o("p"),ke=o("strong"),X=r("Bugs:"),Se=r(" If you see something strange, file a "),Q=o("a"),ee=r("Github Issue"),Oe=r(`
and assign @patrickvonplaten.`),je=d(),G=o("p"),A=r("Translations should be similar, but not identical to output in the test set linked to in each model card."),Ee=d(),I=o("h2"),q=o("a"),F=o("span"),k(te.$$.fragment),ne=d(),ve=o("span"),He=r("Implementation Notes"),J=d(),P=o("ul"),Te=o("li"),N=o("p"),De=r("Each model is about 298 MB on disk, there are more than 1,000 models."),oe=d(),Me=o("li"),se=o("p"),ae=r("The list of supported language pairs can be found "),re=o("a"),Ue=r("here"),S=r("."),Re=d(),O=o("li"),H=o("p"),m=r("Models were originally trained by "),j=o("a"),ye=r("J\xF6rg Tiedemann"),ot=r(" using the "),be=o("a"),D=r("Marian"),st=r(" C++ library, which supports fast training and translation."),at=d(),We=o("li"),L=o("p"),ie=r(`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),rt=d(),Be=o("li"),U=o("p"),it=r("The 80 opus models that require BPE preprocessing are not supported."),dt=d(),de=o("li"),xe=o("p"),wi=r("The modeling code is the same as "),Xo=o("a"),zi=r("BartForConditionalGeneration"),$i=r(" with a few minor modifications:"),ji=d(),lt=o("ul"),hn=o("li"),Ei=r("static (sinusoid) positional embeddings ("),Ps=o("code"),qi=r("MarianConfig.static_position_embeddings=True"),Pi=r(")"),Fi=d(),un=o("li"),Ni=r("no layernorm_embedding ("),Fs=o("code"),Ci=r("MarianConfig.normalize_embedding=False"),Ii=r(")"),Li=d(),ct=o("li"),Ai=r("the model starts generating with "),Ns=o("code"),Si=r("pad_token_id"),Oi=r(` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Cs=o("code"),Hi=r("<s/>"),Di=r("),"),Ui=d(),Is=o("li"),mn=o("p"),Ri=r("Code to bulk convert models can be found in "),Ls=o("code"),Wi=r("convert_marian_to_pytorch.py"),Bi=r("."),Vi=d(),As=o("li"),fn=o("p"),Gi=r("This model was contributed by "),gn=o("a"),Ji=r("sshleifer"),Yi=r("."),er=d(),pt=o("h2"),Ct=o("a"),Ss=o("span"),k(_n.$$.fragment),Ki=d(),Os=o("span"),Zi=r("Naming"),tr=d(),qe=o("ul"),Qo=o("li"),Xi=r("All model names use the following format: "),Hs=o("code"),Qi=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),ed=d(),kn=o("li"),td=r("The language codes used to name models are inconsistent. Two digit codes can usually be found "),vn=o("a"),nd=r("here"),od=r(`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),sd=d(),ht=o("li"),ad=r("Codes formatted like "),Ds=o("code"),rd=r("es_AR"),id=r(" are usually "),Us=o("code"),dd=r("code_{region}"),ld=r(". That one is Spanish from Argentina."),cd=d(),Rs=o("li"),pd=r(`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),nr=d(),ut=o("h2"),It=o("a"),Ws=o("span"),k(Tn.$$.fragment),hd=d(),Bs=o("span"),ud=r("Examples"),or=d(),Je=o("ul"),Vs=o("li"),md=r(`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),fd=d(),Gs=o("li"),Mn=o("a"),gd=r("Fine-tune on GPU"),_d=d(),Js=o("li"),yn=o("a"),kd=r("Fine-tune on GPU with pytorch-lightning"),sr=d(),mt=o("h2"),Lt=o("a"),Ys=o("span"),k(bn.$$.fragment),vd=d(),Ks=o("span"),Td=r("Multilingual Models"),ar=d(),Pe=o("ul"),xn=o("li"),Md=r("All model names use the following format: "),Zs=o("code"),yd=r("Helsinki-NLP/opus-mt-{src}-{tgt}"),bd=r(":"),xd=d(),wn=o("li"),wd=r(`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Xs=o("code"),zd=r("src_text"),$d=r("."),jd=d(),zn=o("li"),Ed=r("You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),$n=o("a"),qd=r("opus-mt-en-roa"),Pd=r("."),Fd=d(),jn=o("li"),Nd=r("Note that if a model is only multilingual on the source side, like "),Qs=o("code"),Cd=r("Helsinki-NLP/opus-mt-roa-en"),Id=r(`, no language
codes are required.`),rr=d(),At=o("p"),Ld=r("New multi-lingual models from the "),En=o("a"),Ad=r("Tatoeba-Challenge repo"),Sd=r(`
require 3 character language codes:`),ir=d(),k(qn.$$.fragment),dr=d(),es=o("p"),Od=r("Here is the code to see all available pretrained models on the hub:"),lr=d(),k(Pn.$$.fragment),cr=d(),ft=o("h2"),St=o("a"),ea=o("span"),k(Fn.$$.fragment),Hd=d(),ta=o("span"),Dd=r("Old Style Multi-Lingual Models"),pr=d(),ts=o("p"),Ud=r(`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),hr=d(),k(Nn.$$.fragment),ur=d(),ns=o("p"),Rd=r("Example of translating english to many romance languages, using old-style 2 character language codes"),mr=d(),k(Cn.$$.fragment),fr=d(),gt=o("h2"),Ot=o("a"),na=o("span"),k(In.$$.fragment),Wd=d(),oa=o("span"),Bd=r("MarianConfig"),gr=d(),le=o("div"),k(Ln.$$.fragment),Vd=d(),_t=o("p"),Gd=r("This is the configuration class to store the configuration of a "),os=o("a"),Jd=r("MarianModel"),Yd=r(`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),An=o("a"),Kd=r("Helsinki-NLP/opus-mt-en-de"),Zd=r(" architecture."),Xd=d(),kt=o("p"),Qd=r("Configuration objects inherit from "),ss=o("a"),el=r("PretrainedConfig"),tl=r(` and can be used to control the model outputs. Read the
documentation from `),as=o("a"),nl=r("PretrainedConfig"),ol=r(" for more information."),sl=d(),sa=o("p"),al=r("Examples:"),rl=d(),k(Sn.$$.fragment),_r=d(),vt=o("h2"),Ht=o("a"),aa=o("span"),k(On.$$.fragment),il=d(),ra=o("span"),dl=r("MarianTokenizer"),kr=d(),R=o("div"),k(Hn.$$.fragment),ll=d(),Dn=o("p"),cl=r("Construct a Marian tokenizer. Based on "),Un=o("a"),pl=r("SentencePiece"),hl=r("."),ul=d(),Rn=o("p"),ml=r("This tokenizer inherits from "),rs=o("a"),fl=r("PreTrainedTokenizer"),gl=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),_l=d(),ia=o("p"),kl=r("Examples:"),vl=d(),k(Wn.$$.fragment),Tl=d(),Dt=o("div"),k(Bn.$$.fragment),Ml=d(),da=o("p"),yl=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),vr=d(),Tt=o("h2"),Ut=o("a"),la=o("span"),k(Vn.$$.fragment),bl=d(),ca=o("span"),xl=r("MarianModel"),Tr=d(),we=o("div"),k(Gn.$$.fragment),wl=d(),Jn=o("p"),zl=r(`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),is=o("a"),$l=r("PreTrainedModel"),jl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),El=d(),Yn=o("p"),ql=r("This model is also a PyTorch "),Kn=o("a"),Pl=r("torch.nn.Module"),Fl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nl=d(),me=o("div"),k(Zn.$$.fragment),Cl=d(),Mt=o("p"),Il=r("The "),ds=o("a"),Ll=r("MarianModel"),Al=r(" forward method, overrides the "),pa=o("code"),Sl=r("__call__"),Ol=r(" special method."),Hl=d(),k(Rt.$$.fragment),Dl=d(),ha=o("p"),Ul=r("Example:"),Rl=d(),k(Xn.$$.fragment),Mr=d(),yt=o("h2"),Wt=o("a"),ua=o("span"),k(Qn.$$.fragment),Wl=d(),ma=o("span"),Bl=r("MarianMTModel"),yr=d(),ze=o("div"),k(eo.$$.fragment),Vl=d(),to=o("p"),Gl=r(`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),ls=o("a"),Jl=r("PreTrainedModel"),Yl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kl=d(),no=o("p"),Zl=r("This model is also a PyTorch "),oo=o("a"),Xl=r("torch.nn.Module"),Ql=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ec=d(),Y=o("div"),k(so.$$.fragment),tc=d(),bt=o("p"),nc=r("The "),cs=o("a"),oc=r("MarianMTModel"),sc=r(" forward method, overrides the "),fa=o("code"),ac=r("__call__"),rc=r(" special method."),ic=d(),k(Bt.$$.fragment),dc=d(),ao=o("p"),lc=r(`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints.
Available models are listed `),ro=o("a"),cc=r("here"),pc=r("."),hc=d(),ga=o("p"),uc=r("Examples:"),mc=d(),k(io.$$.fragment),br=d(),xt=o("h2"),Vt=o("a"),_a=o("span"),k(lo.$$.fragment),fc=d(),ka=o("span"),gc=r("MarianForCausalLM"),xr=d(),wt=o("div"),k(co.$$.fragment),_c=d(),Ye=o("div"),k(po.$$.fragment),kc=d(),va=o("p"),vc=r("Example:"),Tc=d(),k(ho.$$.fragment),wr=d(),zt=o("h2"),Gt=o("a"),Ta=o("span"),k(uo.$$.fragment),Mc=d(),Ma=o("span"),yc=r("TFMarianModel"),zr=d(),ce=o("div"),k(mo.$$.fragment),bc=d(),fo=o("p"),xc=r(`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ps=o("a"),wc=r("TFPreTrainedModel"),zc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$c=d(),go=o("p"),jc=r("This model is also a "),_o=o("a"),Ec=r("tf.keras.Model"),qc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pc=d(),k(Jt.$$.fragment),Fc=d(),fe=o("div"),k(ko.$$.fragment),Nc=d(),$t=o("p"),Cc=r("The "),hs=o("a"),Ic=r("TFMarianModel"),Lc=r(" forward method, overrides the "),ya=o("code"),Ac=r("__call__"),Sc=r(" special method."),Oc=d(),k(Yt.$$.fragment),Hc=d(),ba=o("p"),Dc=r("Example:"),Uc=d(),k(vo.$$.fragment),$r=d(),jt=o("h2"),Kt=o("a"),xa=o("span"),k(To.$$.fragment),Rc=d(),wa=o("span"),Wc=r("TFMarianMTModel"),jr=d(),pe=o("div"),k(Mo.$$.fragment),Bc=d(),yo=o("p"),Vc=r(`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),us=o("a"),Gc=r("TFPreTrainedModel"),Jc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yc=d(),bo=o("p"),Kc=r("This model is also a "),xo=o("a"),Zc=r("tf.keras.Model"),Xc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qc=d(),k(Zt.$$.fragment),ep=d(),K=o("div"),k(wo.$$.fragment),tp=d(),Et=o("p"),np=r("The "),ms=o("a"),op=r("TFMarianMTModel"),sp=r(" forward method, overrides the "),za=o("code"),ap=r("__call__"),rp=r(" special method."),ip=d(),k(Xt.$$.fragment),dp=d(),zo=o("p"),lp=r(`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),$o=o("a"),cp=r("here"),pp=r("."),hp=d(),$a=o("p"),up=r("Examples:"),mp=d(),k(jo.$$.fragment),Er=d(),qt=o("h2"),Qt=o("a"),ja=o("span"),k(Eo.$$.fragment),fp=d(),Ea=o("span"),gp=r("FlaxMarianModel"),qr=d(),W=o("div"),k(qo.$$.fragment),_p=d(),Po=o("p"),kp=r(`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),fs=o("a"),vp=r("FlaxPreTrainedModel"),Tp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mp=d(),Fo=o("p"),yp=r(`This model is also a Flax Linen
`),No=o("a"),bp=r("flax.nn.Module"),xp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wp=d(),qa=o("p"),zp=r("Finally, this model supports inherent JAX features such as:"),$p=d(),Ve=o("ul"),Pa=o("li"),Co=o("a"),jp=r("Just-In-Time (JIT) compilation"),Ep=d(),Fa=o("li"),Io=o("a"),qp=r("Automatic Differentiation"),Pp=d(),Na=o("li"),Lo=o("a"),Fp=r("Vectorization"),Np=d(),Ca=o("li"),Ao=o("a"),Cp=r("Parallelization"),Ip=d(),ge=o("div"),k(So.$$.fragment),Lp=d(),Pt=o("p"),Ap=r("The "),Ia=o("code"),Sp=r("FlaxMarianPreTrainedModel"),Op=r("forward method, overrides the "),La=o("code"),Hp=r("__call__"),Dp=r(" special method."),Up=d(),k(en.$$.fragment),Rp=d(),Aa=o("p"),Wp=r("Example:"),Bp=d(),k(Oo.$$.fragment),Pr=d(),Ft=o("h2"),tn=o("a"),Sa=o("span"),k(Ho.$$.fragment),Vp=d(),Oa=o("span"),Gp=r("FlaxMarianMTModel"),Fr=d(),B=o("div"),k(Do.$$.fragment),Jp=d(),Uo=o("p"),Yp=r(`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),gs=o("a"),Kp=r("FlaxPreTrainedModel"),Zp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp=d(),Ro=o("p"),Qp=r(`This model is also a Flax Linen
`),Wo=o("a"),eh=r("flax.nn.Module"),th=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),nh=d(),Ha=o("p"),oh=r("Finally, this model supports inherent JAX features such as:"),sh=d(),Ge=o("ul"),Da=o("li"),Bo=o("a"),ah=r("Just-In-Time (JIT) compilation"),rh=d(),Ua=o("li"),Vo=o("a"),ih=r("Automatic Differentiation"),dh=d(),Ra=o("li"),Go=o("a"),lh=r("Vectorization"),ch=d(),Wa=o("li"),Jo=o("a"),ph=r("Parallelization"),hh=d(),_e=o("div"),k(Yo.$$.fragment),uh=d(),Nt=o("p"),mh=r("The "),Ba=o("code"),fh=r("FlaxMarianPreTrainedModel"),gh=r("forward method, overrides the "),Va=o("code"),_h=r("__call__"),kh=r(" special method."),vh=d(),k(nn.$$.fragment),Th=d(),Ga=o("p"),Mh=r("Example:"),yh=d(),k(Ko.$$.fragment),this.h()},l(n){const p=af('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(n),f=s(n,"H1",{class:!0});var Zo=a(f);g=s(Zo,"A",{id:!0,class:!0,href:!0});var Ja=a(g);w=s(Ja,"SPAN",{});var Ya=a(w);v(x.$$.fragment,Ya),Ya.forEach(t),Ja.forEach(t),_=l(Zo),$=s(Zo,"SPAN",{});var Ka=a($);Ae=i(Ka,"MarianMT"),Ka.forEach(t),Zo.forEach(t),ue=l(n),E=s(n,"P",{});var on=a(E);ke=s(on,"STRONG",{});var Za=a(ke);X=i(Za,"Bugs:"),Za.forEach(t),Se=i(on," If you see something strange, file a "),Q=s(on,"A",{href:!0,rel:!0});var Xa=a(Q);ee=i(Xa,"Github Issue"),Xa.forEach(t),Oe=i(on,`
and assign @patrickvonplaten.`),on.forEach(t),je=l(n),G=s(n,"P",{});var Qa=a(G);A=i(Qa,"Translations should be similar, but not identical to output in the test set linked to in each model card."),Qa.forEach(t),Ee=l(n),I=s(n,"H2",{class:!0});var Cr=a(I);q=s(Cr,"A",{id:!0,class:!0,href:!0});var xh=a(q);F=s(xh,"SPAN",{});var wh=a(F);v(te.$$.fragment,wh),wh.forEach(t),xh.forEach(t),ne=l(Cr),ve=s(Cr,"SPAN",{});var zh=a(ve);He=i(zh,"Implementation Notes"),zh.forEach(t),Cr.forEach(t),J=l(n),P=s(n,"UL",{});var Z=a(P);Te=s(Z,"LI",{});var $h=a(Te);N=s($h,"P",{});var jh=a(N);De=i(jh,"Each model is about 298 MB on disk, there are more than 1,000 models."),jh.forEach(t),$h.forEach(t),oe=l(Z),Me=s(Z,"LI",{});var Eh=a(Me);se=s(Eh,"P",{});var Ir=a(se);ae=i(Ir,"The list of supported language pairs can be found "),re=s(Ir,"A",{href:!0,rel:!0});var qh=a(re);Ue=i(qh,"here"),qh.forEach(t),S=i(Ir,"."),Ir.forEach(t),Eh.forEach(t),Re=l(Z),O=s(Z,"LI",{});var Ph=a(O);H=s(Ph,"P",{});var _s=a(H);m=i(_s,"Models were originally trained by "),j=s(_s,"A",{href:!0,rel:!0});var Fh=a(j);ye=i(Fh,"J\xF6rg Tiedemann"),Fh.forEach(t),ot=i(_s," using the "),be=s(_s,"A",{href:!0,rel:!0});var Nh=a(be);D=i(Nh,"Marian"),Nh.forEach(t),st=i(_s," C++ library, which supports fast training and translation."),_s.forEach(t),Ph.forEach(t),at=l(Z),We=s(Z,"LI",{});var Ch=a(We);L=s(Ch,"P",{});var Ih=a(L);ie=i(Ih,`All models are transformer encoder-decoders with 6 layers in each component. Each model\u2019s performance is documented
in a model card.`),Ih.forEach(t),Ch.forEach(t),rt=l(Z),Be=s(Z,"LI",{});var Lh=a(Be);U=s(Lh,"P",{});var Ah=a(U);it=i(Ah,"The 80 opus models that require BPE preprocessing are not supported."),Ah.forEach(t),Lh.forEach(t),dt=l(Z),de=s(Z,"LI",{});var Lr=a(de);xe=s(Lr,"P",{});var Ar=a(xe);wi=i(Ar,"The modeling code is the same as "),Xo=s(Ar,"A",{href:!0});var Sh=a(Xo);zi=i(Sh,"BartForConditionalGeneration"),Sh.forEach(t),$i=i(Ar," with a few minor modifications:"),Ar.forEach(t),ji=l(Lr),lt=s(Lr,"UL",{});var ks=a(lt);hn=s(ks,"LI",{});var Sr=a(hn);Ei=i(Sr,"static (sinusoid) positional embeddings ("),Ps=s(Sr,"CODE",{});var Oh=a(Ps);qi=i(Oh,"MarianConfig.static_position_embeddings=True"),Oh.forEach(t),Pi=i(Sr,")"),Sr.forEach(t),Fi=l(ks),un=s(ks,"LI",{});var Or=a(un);Ni=i(Or,"no layernorm_embedding ("),Fs=s(Or,"CODE",{});var Hh=a(Fs);Ci=i(Hh,"MarianConfig.normalize_embedding=False"),Hh.forEach(t),Ii=i(Or,")"),Or.forEach(t),Li=l(ks),ct=s(ks,"LI",{});var vs=a(ct);Ai=i(vs,"the model starts generating with "),Ns=s(vs,"CODE",{});var Dh=a(Ns);Si=i(Dh,"pad_token_id"),Dh.forEach(t),Oi=i(vs,` (which has 0 as a token_embedding) as the prefix (Bart uses
`),Cs=s(vs,"CODE",{});var Uh=a(Cs);Hi=i(Uh,"<s/>"),Uh.forEach(t),Di=i(vs,"),"),vs.forEach(t),ks.forEach(t),Lr.forEach(t),Ui=l(Z),Is=s(Z,"LI",{});var Rh=a(Is);mn=s(Rh,"P",{});var Hr=a(mn);Ri=i(Hr,"Code to bulk convert models can be found in "),Ls=s(Hr,"CODE",{});var Wh=a(Ls);Wi=i(Wh,"convert_marian_to_pytorch.py"),Wh.forEach(t),Bi=i(Hr,"."),Hr.forEach(t),Rh.forEach(t),Vi=l(Z),As=s(Z,"LI",{});var Bh=a(As);fn=s(Bh,"P",{});var Dr=a(fn);Gi=i(Dr,"This model was contributed by "),gn=s(Dr,"A",{href:!0,rel:!0});var Vh=a(gn);Ji=i(Vh,"sshleifer"),Vh.forEach(t),Yi=i(Dr,"."),Dr.forEach(t),Bh.forEach(t),Z.forEach(t),er=l(n),pt=s(n,"H2",{class:!0});var Ur=a(pt);Ct=s(Ur,"A",{id:!0,class:!0,href:!0});var Gh=a(Ct);Ss=s(Gh,"SPAN",{});var Jh=a(Ss);v(_n.$$.fragment,Jh),Jh.forEach(t),Gh.forEach(t),Ki=l(Ur),Os=s(Ur,"SPAN",{});var Yh=a(Os);Zi=i(Yh,"Naming"),Yh.forEach(t),Ur.forEach(t),tr=l(n),qe=s(n,"UL",{});var sn=a(qe);Qo=s(sn,"LI",{});var bh=a(Qo);Xi=i(bh,"All model names use the following format: "),Hs=s(bh,"CODE",{});var Kh=a(Hs);Qi=i(Kh,"Helsinki-NLP/opus-mt-{src}-{tgt}"),Kh.forEach(t),bh.forEach(t),ed=l(sn),kn=s(sn,"LI",{});var Rr=a(kn);td=i(Rr,"The language codes used to name models are inconsistent. Two digit codes can usually be found "),vn=s(Rr,"A",{href:!0,rel:!0});var Zh=a(vn);nd=i(Zh,"here"),Zh.forEach(t),od=i(Rr,`, three digit codes require googling \u201Clanguage
code {code}\u201C.`),Rr.forEach(t),sd=l(sn),ht=s(sn,"LI",{});var Ts=a(ht);ad=i(Ts,"Codes formatted like "),Ds=s(Ts,"CODE",{});var Xh=a(Ds);rd=i(Xh,"es_AR"),Xh.forEach(t),id=i(Ts," are usually "),Us=s(Ts,"CODE",{});var Qh=a(Us);dd=i(Qh,"code_{region}"),Qh.forEach(t),ld=i(Ts,". That one is Spanish from Argentina."),Ts.forEach(t),cd=l(sn),Rs=s(sn,"LI",{});var eu=a(Rs);pd=i(eu,`The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.`),eu.forEach(t),sn.forEach(t),nr=l(n),ut=s(n,"H2",{class:!0});var Wr=a(ut);It=s(Wr,"A",{id:!0,class:!0,href:!0});var tu=a(It);Ws=s(tu,"SPAN",{});var nu=a(Ws);v(Tn.$$.fragment,nu),nu.forEach(t),tu.forEach(t),hd=l(Wr),Bs=s(Wr,"SPAN",{});var ou=a(Bs);ud=i(ou,"Examples"),ou.forEach(t),Wr.forEach(t),or=l(n),Je=s(n,"UL",{});var Ms=a(Je);Vs=s(Ms,"LI",{});var su=a(Vs);md=i(su,`Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.`),su.forEach(t),fd=l(Ms),Gs=s(Ms,"LI",{});var au=a(Gs);Mn=s(au,"A",{href:!0,rel:!0});var ru=a(Mn);gd=i(ru,"Fine-tune on GPU"),ru.forEach(t),au.forEach(t),_d=l(Ms),Js=s(Ms,"LI",{});var iu=a(Js);yn=s(iu,"A",{href:!0,rel:!0});var du=a(yn);kd=i(du,"Fine-tune on GPU with pytorch-lightning"),du.forEach(t),iu.forEach(t),Ms.forEach(t),sr=l(n),mt=s(n,"H2",{class:!0});var Br=a(mt);Lt=s(Br,"A",{id:!0,class:!0,href:!0});var lu=a(Lt);Ys=s(lu,"SPAN",{});var cu=a(Ys);v(bn.$$.fragment,cu),cu.forEach(t),lu.forEach(t),vd=l(Br),Ks=s(Br,"SPAN",{});var pu=a(Ks);Td=i(pu,"Multilingual Models"),pu.forEach(t),Br.forEach(t),ar=l(n),Pe=s(n,"UL",{});var an=a(Pe);xn=s(an,"LI",{});var Vr=a(xn);Md=i(Vr,"All model names use the following format: "),Zs=s(Vr,"CODE",{});var hu=a(Zs);yd=i(hu,"Helsinki-NLP/opus-mt-{src}-{tgt}"),hu.forEach(t),bd=i(Vr,":"),Vr.forEach(t),xd=l(an),wn=s(an,"LI",{});var Gr=a(wn);wd=i(Gr,`If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the `),Xs=s(Gr,"CODE",{});var uu=a(Xs);zd=i(uu,"src_text"),uu.forEach(t),$d=i(Gr,"."),Gr.forEach(t),jd=l(an),zn=s(an,"LI",{});var Jr=a(zn);Ed=i(Jr,"You can see a models\u2019s supported language codes in its model card, under target constituents, like in "),$n=s(Jr,"A",{href:!0,rel:!0});var mu=a($n);qd=i(mu,"opus-mt-en-roa"),mu.forEach(t),Pd=i(Jr,"."),Jr.forEach(t),Fd=l(an),jn=s(an,"LI",{});var Yr=a(jn);Nd=i(Yr,"Note that if a model is only multilingual on the source side, like "),Qs=s(Yr,"CODE",{});var fu=a(Qs);Cd=i(fu,"Helsinki-NLP/opus-mt-roa-en"),fu.forEach(t),Id=i(Yr,`, no language
codes are required.`),Yr.forEach(t),an.forEach(t),rr=l(n),At=s(n,"P",{});var Kr=a(At);Ld=i(Kr,"New multi-lingual models from the "),En=s(Kr,"A",{href:!0,rel:!0});var gu=a(En);Ad=i(gu,"Tatoeba-Challenge repo"),gu.forEach(t),Sd=i(Kr,`
require 3 character language codes:`),Kr.forEach(t),ir=l(n),v(qn.$$.fragment,n),dr=l(n),es=s(n,"P",{});var _u=a(es);Od=i(_u,"Here is the code to see all available pretrained models on the hub:"),_u.forEach(t),lr=l(n),v(Pn.$$.fragment,n),cr=l(n),ft=s(n,"H2",{class:!0});var Zr=a(ft);St=s(Zr,"A",{id:!0,class:!0,href:!0});var ku=a(St);ea=s(ku,"SPAN",{});var vu=a(ea);v(Fn.$$.fragment,vu),vu.forEach(t),ku.forEach(t),Hd=l(Zr),ta=s(Zr,"SPAN",{});var Tu=a(ta);Dd=i(Tu,"Old Style Multi-Lingual Models"),Tu.forEach(t),Zr.forEach(t),pr=l(n),ts=s(n,"P",{});var Mu=a(ts);Ud=i(Mu,`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`),Mu.forEach(t),hr=l(n),v(Nn.$$.fragment,n),ur=l(n),ns=s(n,"P",{});var yu=a(ns);Rd=i(yu,"Example of translating english to many romance languages, using old-style 2 character language codes"),yu.forEach(t),mr=l(n),v(Cn.$$.fragment,n),fr=l(n),gt=s(n,"H2",{class:!0});var Xr=a(gt);Ot=s(Xr,"A",{id:!0,class:!0,href:!0});var bu=a(Ot);na=s(bu,"SPAN",{});var xu=a(na);v(In.$$.fragment,xu),xu.forEach(t),bu.forEach(t),Wd=l(Xr),oa=s(Xr,"SPAN",{});var wu=a(oa);Bd=i(wu,"MarianConfig"),wu.forEach(t),Xr.forEach(t),gr=l(n),le=s(n,"DIV",{class:!0});var Ke=a(le);v(Ln.$$.fragment,Ke),Vd=l(Ke),_t=s(Ke,"P",{});var ys=a(_t);Gd=i(ys,"This is the configuration class to store the configuration of a "),os=s(ys,"A",{href:!0});var zu=a(os);Jd=i(zu,"MarianModel"),zu.forEach(t),Yd=i(ys,`. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
`),An=s(ys,"A",{href:!0,rel:!0});var $u=a(An);Kd=i($u,"Helsinki-NLP/opus-mt-en-de"),$u.forEach(t),Zd=i(ys," architecture."),ys.forEach(t),Xd=l(Ke),kt=s(Ke,"P",{});var bs=a(kt);Qd=i(bs,"Configuration objects inherit from "),ss=s(bs,"A",{href:!0});var ju=a(ss);el=i(ju,"PretrainedConfig"),ju.forEach(t),tl=i(bs,` and can be used to control the model outputs. Read the
documentation from `),as=s(bs,"A",{href:!0});var Eu=a(as);nl=i(Eu,"PretrainedConfig"),Eu.forEach(t),ol=i(bs," for more information."),bs.forEach(t),sl=l(Ke),sa=s(Ke,"P",{});var qu=a(sa);al=i(qu,"Examples:"),qu.forEach(t),rl=l(Ke),v(Sn.$$.fragment,Ke),Ke.forEach(t),_r=l(n),vt=s(n,"H2",{class:!0});var Qr=a(vt);Ht=s(Qr,"A",{id:!0,class:!0,href:!0});var Pu=a(Ht);aa=s(Pu,"SPAN",{});var Fu=a(aa);v(On.$$.fragment,Fu),Fu.forEach(t),Pu.forEach(t),il=l(Qr),ra=s(Qr,"SPAN",{});var Nu=a(ra);dl=i(Nu,"MarianTokenizer"),Nu.forEach(t),Qr.forEach(t),kr=l(n),R=s(n,"DIV",{class:!0});var Fe=a(R);v(Hn.$$.fragment,Fe),ll=l(Fe),Dn=s(Fe,"P",{});var ei=a(Dn);cl=i(ei,"Construct a Marian tokenizer. Based on "),Un=s(ei,"A",{href:!0,rel:!0});var Cu=a(Un);pl=i(Cu,"SentencePiece"),Cu.forEach(t),hl=i(ei,"."),ei.forEach(t),ul=l(Fe),Rn=s(Fe,"P",{});var ti=a(Rn);ml=i(ti,"This tokenizer inherits from "),rs=s(ti,"A",{href:!0});var Iu=a(rs);fl=i(Iu,"PreTrainedTokenizer"),Iu.forEach(t),gl=i(ti,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ti.forEach(t),_l=l(Fe),ia=s(Fe,"P",{});var Lu=a(ia);kl=i(Lu,"Examples:"),Lu.forEach(t),vl=l(Fe),v(Wn.$$.fragment,Fe),Tl=l(Fe),Dt=s(Fe,"DIV",{class:!0});var ni=a(Dt);v(Bn.$$.fragment,ni),Ml=l(ni),da=s(ni,"P",{});var Au=a(da);yl=i(Au,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Au.forEach(t),ni.forEach(t),Fe.forEach(t),vr=l(n),Tt=s(n,"H2",{class:!0});var oi=a(Tt);Ut=s(oi,"A",{id:!0,class:!0,href:!0});var Su=a(Ut);la=s(Su,"SPAN",{});var Ou=a(la);v(Vn.$$.fragment,Ou),Ou.forEach(t),Su.forEach(t),bl=l(oi),ca=s(oi,"SPAN",{});var Hu=a(ca);xl=i(Hu,"MarianModel"),Hu.forEach(t),oi.forEach(t),Tr=l(n),we=s(n,"DIV",{class:!0});var rn=a(we);v(Gn.$$.fragment,rn),wl=l(rn),Jn=s(rn,"P",{});var si=a(Jn);zl=i(si,`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from `),is=s(si,"A",{href:!0});var Du=a(is);$l=i(Du,"PreTrainedModel"),Du.forEach(t),jl=i(si,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),si.forEach(t),El=l(rn),Yn=s(rn,"P",{});var ai=a(Yn);ql=i(ai,"This model is also a PyTorch "),Kn=s(ai,"A",{href:!0,rel:!0});var Uu=a(Kn);Pl=i(Uu,"torch.nn.Module"),Uu.forEach(t),Fl=i(ai,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ai.forEach(t),Nl=l(rn),me=s(rn,"DIV",{class:!0});var Ze=a(me);v(Zn.$$.fragment,Ze),Cl=l(Ze),Mt=s(Ze,"P",{});var xs=a(Mt);Il=i(xs,"The "),ds=s(xs,"A",{href:!0});var Ru=a(ds);Ll=i(Ru,"MarianModel"),Ru.forEach(t),Al=i(xs," forward method, overrides the "),pa=s(xs,"CODE",{});var Wu=a(pa);Sl=i(Wu,"__call__"),Wu.forEach(t),Ol=i(xs," special method."),xs.forEach(t),Hl=l(Ze),v(Rt.$$.fragment,Ze),Dl=l(Ze),ha=s(Ze,"P",{});var Bu=a(ha);Ul=i(Bu,"Example:"),Bu.forEach(t),Rl=l(Ze),v(Xn.$$.fragment,Ze),Ze.forEach(t),rn.forEach(t),Mr=l(n),yt=s(n,"H2",{class:!0});var ri=a(yt);Wt=s(ri,"A",{id:!0,class:!0,href:!0});var Vu=a(Wt);ua=s(Vu,"SPAN",{});var Gu=a(ua);v(Qn.$$.fragment,Gu),Gu.forEach(t),Vu.forEach(t),Wl=l(ri),ma=s(ri,"SPAN",{});var Ju=a(ma);Bl=i(Ju,"MarianMTModel"),Ju.forEach(t),ri.forEach(t),yr=l(n),ze=s(n,"DIV",{class:!0});var dn=a(ze);v(eo.$$.fragment,dn),Vl=l(dn),to=s(dn,"P",{});var ii=a(to);Gl=i(ii,`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from `),ls=s(ii,"A",{href:!0});var Yu=a(ls);Jl=i(Yu,"PreTrainedModel"),Yu.forEach(t),Yl=i(ii,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii.forEach(t),Kl=l(dn),no=s(dn,"P",{});var di=a(no);Zl=i(di,"This model is also a PyTorch "),oo=s(di,"A",{href:!0,rel:!0});var Ku=a(oo);Xl=i(Ku,"torch.nn.Module"),Ku.forEach(t),Ql=i(di,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),di.forEach(t),ec=l(dn),Y=s(dn,"DIV",{class:!0});var Ne=a(Y);v(so.$$.fragment,Ne),tc=l(Ne),bt=s(Ne,"P",{});var ws=a(bt);nc=i(ws,"The "),cs=s(ws,"A",{href:!0});var Zu=a(cs);oc=i(Zu,"MarianMTModel"),Zu.forEach(t),sc=i(ws," forward method, overrides the "),fa=s(ws,"CODE",{});var Xu=a(fa);ac=i(Xu,"__call__"),Xu.forEach(t),rc=i(ws," special method."),ws.forEach(t),ic=l(Ne),v(Bt.$$.fragment,Ne),dc=l(Ne),ao=s(Ne,"P",{});var li=a(ao);lc=i(li,`Pytorch version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints.
Available models are listed `),ro=s(li,"A",{href:!0,rel:!0});var Qu=a(ro);cc=i(Qu,"here"),Qu.forEach(t),pc=i(li,"."),li.forEach(t),hc=l(Ne),ga=s(Ne,"P",{});var em=a(ga);uc=i(em,"Examples:"),em.forEach(t),mc=l(Ne),v(io.$$.fragment,Ne),Ne.forEach(t),dn.forEach(t),br=l(n),xt=s(n,"H2",{class:!0});var ci=a(xt);Vt=s(ci,"A",{id:!0,class:!0,href:!0});var tm=a(Vt);_a=s(tm,"SPAN",{});var nm=a(_a);v(lo.$$.fragment,nm),nm.forEach(t),tm.forEach(t),fc=l(ci),ka=s(ci,"SPAN",{});var om=a(ka);gc=i(om,"MarianForCausalLM"),om.forEach(t),ci.forEach(t),xr=l(n),wt=s(n,"DIV",{class:!0});var pi=a(wt);v(co.$$.fragment,pi),_c=l(pi),Ye=s(pi,"DIV",{class:!0});var zs=a(Ye);v(po.$$.fragment,zs),kc=l(zs),va=s(zs,"P",{});var sm=a(va);vc=i(sm,"Example:"),sm.forEach(t),Tc=l(zs),v(ho.$$.fragment,zs),zs.forEach(t),pi.forEach(t),wr=l(n),zt=s(n,"H2",{class:!0});var hi=a(zt);Gt=s(hi,"A",{id:!0,class:!0,href:!0});var am=a(Gt);Ta=s(am,"SPAN",{});var rm=a(Ta);v(uo.$$.fragment,rm),rm.forEach(t),am.forEach(t),Mc=l(hi),Ma=s(hi,"SPAN",{});var im=a(Ma);yc=i(im,"TFMarianModel"),im.forEach(t),hi.forEach(t),zr=l(n),ce=s(n,"DIV",{class:!0});var Xe=a(ce);v(mo.$$.fragment,Xe),bc=l(Xe),fo=s(Xe,"P",{});var ui=a(fo);xc=i(ui,`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ps=s(ui,"A",{href:!0});var dm=a(ps);wc=i(dm,"TFPreTrainedModel"),dm.forEach(t),zc=i(ui,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ui.forEach(t),$c=l(Xe),go=s(Xe,"P",{});var mi=a(go);jc=i(mi,"This model is also a "),_o=s(mi,"A",{href:!0,rel:!0});var lm=a(_o);Ec=i(lm,"tf.keras.Model"),lm.forEach(t),qc=i(mi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mi.forEach(t),Pc=l(Xe),v(Jt.$$.fragment,Xe),Fc=l(Xe),fe=s(Xe,"DIV",{class:!0});var Qe=a(fe);v(ko.$$.fragment,Qe),Nc=l(Qe),$t=s(Qe,"P",{});var $s=a($t);Cc=i($s,"The "),hs=s($s,"A",{href:!0});var cm=a(hs);Ic=i(cm,"TFMarianModel"),cm.forEach(t),Lc=i($s," forward method, overrides the "),ya=s($s,"CODE",{});var pm=a(ya);Ac=i(pm,"__call__"),pm.forEach(t),Sc=i($s," special method."),$s.forEach(t),Oc=l(Qe),v(Yt.$$.fragment,Qe),Hc=l(Qe),ba=s(Qe,"P",{});var hm=a(ba);Dc=i(hm,"Example:"),hm.forEach(t),Uc=l(Qe),v(vo.$$.fragment,Qe),Qe.forEach(t),Xe.forEach(t),$r=l(n),jt=s(n,"H2",{class:!0});var fi=a(jt);Kt=s(fi,"A",{id:!0,class:!0,href:!0});var um=a(Kt);xa=s(um,"SPAN",{});var mm=a(xa);v(To.$$.fragment,mm),mm.forEach(t),um.forEach(t),Rc=l(fi),wa=s(fi,"SPAN",{});var fm=a(wa);Wc=i(fm,"TFMarianMTModel"),fm.forEach(t),fi.forEach(t),jr=l(n),pe=s(n,"DIV",{class:!0});var et=a(pe);v(Mo.$$.fragment,et),Bc=l(et),yo=s(et,"P",{});var gi=a(yo);Vc=i(gi,`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from `),us=s(gi,"A",{href:!0});var gm=a(us);Gc=i(gm,"TFPreTrainedModel"),gm.forEach(t),Jc=i(gi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gi.forEach(t),Yc=l(et),bo=s(et,"P",{});var _i=a(bo);Kc=i(_i,"This model is also a "),xo=s(_i,"A",{href:!0,rel:!0});var _m=a(xo);Zc=i(_m,"tf.keras.Model"),_m.forEach(t),Xc=i(_i,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_i.forEach(t),Qc=l(et),v(Zt.$$.fragment,et),ep=l(et),K=s(et,"DIV",{class:!0});var Ce=a(K);v(wo.$$.fragment,Ce),tp=l(Ce),Et=s(Ce,"P",{});var js=a(Et);np=i(js,"The "),ms=s(js,"A",{href:!0});var km=a(ms);op=i(km,"TFMarianMTModel"),km.forEach(t),sp=i(js," forward method, overrides the "),za=s(js,"CODE",{});var vm=a(za);ap=i(vm,"__call__"),vm.forEach(t),rp=i(js," special method."),js.forEach(t),ip=l(Ce),v(Xt.$$.fragment,Ce),dp=l(Ce),zo=s(Ce,"P",{});var ki=a(zo);lp=i(ki,`TF version of marian-nmt\u2019s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed `),$o=s(ki,"A",{href:!0,rel:!0});var Tm=a($o);cp=i(Tm,"here"),Tm.forEach(t),pp=i(ki,"."),ki.forEach(t),hp=l(Ce),$a=s(Ce,"P",{});var Mm=a($a);up=i(Mm,"Examples:"),Mm.forEach(t),mp=l(Ce),v(jo.$$.fragment,Ce),Ce.forEach(t),et.forEach(t),Er=l(n),qt=s(n,"H2",{class:!0});var vi=a(qt);Qt=s(vi,"A",{id:!0,class:!0,href:!0});var ym=a(Qt);ja=s(ym,"SPAN",{});var bm=a(ja);v(Eo.$$.fragment,bm),bm.forEach(t),ym.forEach(t),fp=l(vi),Ea=s(vi,"SPAN",{});var xm=a(Ea);gp=i(xm,"FlaxMarianModel"),xm.forEach(t),vi.forEach(t),qr=l(n),W=s(n,"DIV",{class:!0});var Ie=a(W);v(qo.$$.fragment,Ie),_p=l(Ie),Po=s(Ie,"P",{});var Ti=a(Po);kp=i(Ti,`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),fs=s(Ti,"A",{href:!0});var wm=a(fs);vp=i(wm,"FlaxPreTrainedModel"),wm.forEach(t),Tp=i(Ti,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ti.forEach(t),Mp=l(Ie),Fo=s(Ie,"P",{});var Mi=a(Fo);yp=i(Mi,`This model is also a Flax Linen
`),No=s(Mi,"A",{href:!0,rel:!0});var zm=a(No);bp=i(zm,"flax.nn.Module"),zm.forEach(t),xp=i(Mi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mi.forEach(t),wp=l(Ie),qa=s(Ie,"P",{});var $m=a(qa);zp=i($m,"Finally, this model supports inherent JAX features such as:"),$m.forEach(t),$p=l(Ie),Ve=s(Ie,"UL",{});var ln=a(Ve);Pa=s(ln,"LI",{});var jm=a(Pa);Co=s(jm,"A",{href:!0,rel:!0});var Em=a(Co);jp=i(Em,"Just-In-Time (JIT) compilation"),Em.forEach(t),jm.forEach(t),Ep=l(ln),Fa=s(ln,"LI",{});var qm=a(Fa);Io=s(qm,"A",{href:!0,rel:!0});var Pm=a(Io);qp=i(Pm,"Automatic Differentiation"),Pm.forEach(t),qm.forEach(t),Pp=l(ln),Na=s(ln,"LI",{});var Fm=a(Na);Lo=s(Fm,"A",{href:!0,rel:!0});var Nm=a(Lo);Fp=i(Nm,"Vectorization"),Nm.forEach(t),Fm.forEach(t),Np=l(ln),Ca=s(ln,"LI",{});var Cm=a(Ca);Ao=s(Cm,"A",{href:!0,rel:!0});var Im=a(Ao);Cp=i(Im,"Parallelization"),Im.forEach(t),Cm.forEach(t),ln.forEach(t),Ip=l(Ie),ge=s(Ie,"DIV",{class:!0});var tt=a(ge);v(So.$$.fragment,tt),Lp=l(tt),Pt=s(tt,"P",{});var Es=a(Pt);Ap=i(Es,"The "),Ia=s(Es,"CODE",{});var Lm=a(Ia);Sp=i(Lm,"FlaxMarianPreTrainedModel"),Lm.forEach(t),Op=i(Es,"forward method, overrides the "),La=s(Es,"CODE",{});var Am=a(La);Hp=i(Am,"__call__"),Am.forEach(t),Dp=i(Es," special method."),Es.forEach(t),Up=l(tt),v(en.$$.fragment,tt),Rp=l(tt),Aa=s(tt,"P",{});var Sm=a(Aa);Wp=i(Sm,"Example:"),Sm.forEach(t),Bp=l(tt),v(Oo.$$.fragment,tt),tt.forEach(t),Ie.forEach(t),Pr=l(n),Ft=s(n,"H2",{class:!0});var yi=a(Ft);tn=s(yi,"A",{id:!0,class:!0,href:!0});var Om=a(tn);Sa=s(Om,"SPAN",{});var Hm=a(Sa);v(Ho.$$.fragment,Hm),Hm.forEach(t),Om.forEach(t),Vp=l(yi),Oa=s(yi,"SPAN",{});var Dm=a(Oa);Gp=i(Dm,"FlaxMarianMTModel"),Dm.forEach(t),yi.forEach(t),Fr=l(n),B=s(n,"DIV",{class:!0});var Le=a(B);v(Do.$$.fragment,Le),Jp=l(Le),Uo=s(Le,"P",{});var bi=a(Uo);Yp=i(bi,`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from `),gs=s(bi,"A",{href:!0});var Um=a(gs);Kp=i(Um,"FlaxPreTrainedModel"),Um.forEach(t),Zp=i(bi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bi.forEach(t),Xp=l(Le),Ro=s(Le,"P",{});var xi=a(Ro);Qp=i(xi,`This model is also a Flax Linen
`),Wo=s(xi,"A",{href:!0,rel:!0});var Rm=a(Wo);eh=i(Rm,"flax.nn.Module"),Rm.forEach(t),th=i(xi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xi.forEach(t),nh=l(Le),Ha=s(Le,"P",{});var Wm=a(Ha);oh=i(Wm,"Finally, this model supports inherent JAX features such as:"),Wm.forEach(t),sh=l(Le),Ge=s(Le,"UL",{});var cn=a(Ge);Da=s(cn,"LI",{});var Bm=a(Da);Bo=s(Bm,"A",{href:!0,rel:!0});var Vm=a(Bo);ah=i(Vm,"Just-In-Time (JIT) compilation"),Vm.forEach(t),Bm.forEach(t),rh=l(cn),Ua=s(cn,"LI",{});var Gm=a(Ua);Vo=s(Gm,"A",{href:!0,rel:!0});var Jm=a(Vo);ih=i(Jm,"Automatic Differentiation"),Jm.forEach(t),Gm.forEach(t),dh=l(cn),Ra=s(cn,"LI",{});var Ym=a(Ra);Go=s(Ym,"A",{href:!0,rel:!0});var Km=a(Go);lh=i(Km,"Vectorization"),Km.forEach(t),Ym.forEach(t),ch=l(cn),Wa=s(cn,"LI",{});var Zm=a(Wa);Jo=s(Zm,"A",{href:!0,rel:!0});var Xm=a(Jo);ph=i(Xm,"Parallelization"),Xm.forEach(t),Zm.forEach(t),cn.forEach(t),hh=l(Le),_e=s(Le,"DIV",{class:!0});var nt=a(_e);v(Yo.$$.fragment,nt),uh=l(nt),Nt=s(nt,"P",{});var qs=a(Nt);mh=i(qs,"The "),Ba=s(qs,"CODE",{});var Qm=a(Ba);fh=i(Qm,"FlaxMarianPreTrainedModel"),Qm.forEach(t),gh=i(qs,"forward method, overrides the "),Va=s(qs,"CODE",{});var ef=a(Va);_h=i(ef,"__call__"),ef.forEach(t),kh=i(qs," special method."),qs.forEach(t),vh=l(nt),v(nn.$$.fragment,nt),Th=l(nt),Ga=s(nt,"P",{});var tf=a(Ga);Mh=i(tf,"Example:"),tf.forEach(t),yh=l(nt),v(Ko.$$.fragment,nt),nt.forEach(t),Le.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(gf)),c(g,"id","marianmt"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#marianmt"),c(f,"class","relative group"),c(Q,"href","https://github.com/huggingface/transformers/issues/new?assignees=sshleifer&labels=&template=bug-report.md&title"),c(Q,"rel","nofollow"),c(q,"id","implementation-notes"),c(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(q,"href","#implementation-notes"),c(I,"class","relative group"),c(re,"href","https://huggingface.co/Helsinki-NLP"),c(re,"rel","nofollow"),c(j,"href","https://researchportal.helsinki.fi/en/persons/j%C3%B6rg-tiedemann"),c(j,"rel","nofollow"),c(be,"href","https://marian-nmt.github.io/"),c(be,"rel","nofollow"),c(Xo,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(gn,"href","https://huggingface.co/sshleifer"),c(gn,"rel","nofollow"),c(Ct,"id","naming"),c(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ct,"href","#naming"),c(pt,"class","relative group"),c(vn,"href","https://developers.google.com/admin-sdk/directory/v1/languages"),c(vn,"rel","nofollow"),c(It,"id","examples"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#examples"),c(ut,"class","relative group"),c(Mn,"href","https://github.com/huggingface/transformers/blob/master/examples/research_projects/seq2seq-distillation/train_distil_marian_enro_teacher.sh"),c(Mn,"rel","nofollow"),c(yn,"href","https://github.com/huggingface/transformers/blob/master/examples/research_projects/seq2seq-distillation/train_distil_marian_no_teacher.sh"),c(yn,"rel","nofollow"),c(Lt,"id","multilingual-models"),c(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lt,"href","#multilingual-models"),c(mt,"class","relative group"),c($n,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-roa"),c($n,"rel","nofollow"),c(En,"href","https://github.com/Helsinki-NLP/Tatoeba-Challenge"),c(En,"rel","nofollow"),c(St,"id","old-style-multilingual-models"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#old-style-multilingual-models"),c(ft,"class","relative group"),c(Ot,"id","transformers.MarianConfig"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.MarianConfig"),c(gt,"class","relative group"),c(os,"href","/docs/transformers/master/en/model_doc/marian#transformers.MarianModel"),c(An,"href","https://huggingface.co/Helsinki-NLP/opus-mt-en-de"),c(An,"rel","nofollow"),c(ss,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(as,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(le,"class","docstring"),c(Ht,"id","transformers.MarianTokenizer"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.MarianTokenizer"),c(vt,"class","relative group"),c(Un,"href","https://github.com/google/sentencepiece"),c(Un,"rel","nofollow"),c(rs,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Dt,"class","docstring"),c(R,"class","docstring"),c(Ut,"id","transformers.MarianModel"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.MarianModel"),c(Tt,"class","relative group"),c(is,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Kn,"rel","nofollow"),c(ds,"href","/docs/transformers/master/en/model_doc/marian#transformers.MarianModel"),c(me,"class","docstring"),c(we,"class","docstring"),c(Wt,"id","transformers.MarianMTModel"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#transformers.MarianMTModel"),c(yt,"class","relative group"),c(ls,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(oo,"rel","nofollow"),c(cs,"href","/docs/transformers/master/en/model_doc/marian#transformers.MarianMTModel"),c(ro,"href","https://huggingface.co/models?search=Helsinki-NLP"),c(ro,"rel","nofollow"),c(Y,"class","docstring"),c(ze,"class","docstring"),c(Vt,"id","transformers.MarianForCausalLM"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.MarianForCausalLM"),c(xt,"class","relative group"),c(Ye,"class","docstring"),c(wt,"class","docstring"),c(Gt,"id","transformers.TFMarianModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.TFMarianModel"),c(zt,"class","relative group"),c(ps,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(_o,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(_o,"rel","nofollow"),c(hs,"href","/docs/transformers/master/en/model_doc/marian#transformers.TFMarianModel"),c(fe,"class","docstring"),c(ce,"class","docstring"),c(Kt,"id","transformers.TFMarianMTModel"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.TFMarianMTModel"),c(jt,"class","relative group"),c(us,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(xo,"rel","nofollow"),c(ms,"href","/docs/transformers/master/en/model_doc/marian#transformers.TFMarianMTModel"),c($o,"href","https://huggingface.co/models?search=Helsinki-NLP"),c($o,"rel","nofollow"),c(K,"class","docstring"),c(pe,"class","docstring"),c(Qt,"id","transformers.FlaxMarianModel"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.FlaxMarianModel"),c(qt,"class","relative group"),c(fs,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(No,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(No,"rel","nofollow"),c(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Co,"rel","nofollow"),c(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Io,"rel","nofollow"),c(Lo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Lo,"rel","nofollow"),c(Ao,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ao,"rel","nofollow"),c(ge,"class","docstring"),c(W,"class","docstring"),c(tn,"id","transformers.FlaxMarianMTModel"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.FlaxMarianMTModel"),c(Ft,"class","relative group"),c(gs,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Wo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Wo,"rel","nofollow"),c(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Bo,"rel","nofollow"),c(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Vo,"rel","nofollow"),c(Go,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Go,"rel","nofollow"),c(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Jo,"rel","nofollow"),c(_e,"class","docstring"),c(B,"class","docstring")},m(n,p){e(document.head,u),h(n,z,p),h(n,f,p),e(f,g),e(g,w),T(x,w,null),e(f,_),e(f,$),e($,Ae),h(n,ue,p),h(n,E,p),e(E,ke),e(ke,X),e(E,Se),e(E,Q),e(Q,ee),e(E,Oe),h(n,je,p),h(n,G,p),e(G,A),h(n,Ee,p),h(n,I,p),e(I,q),e(q,F),T(te,F,null),e(I,ne),e(I,ve),e(ve,He),h(n,J,p),h(n,P,p),e(P,Te),e(Te,N),e(N,De),e(P,oe),e(P,Me),e(Me,se),e(se,ae),e(se,re),e(re,Ue),e(se,S),e(P,Re),e(P,O),e(O,H),e(H,m),e(H,j),e(j,ye),e(H,ot),e(H,be),e(be,D),e(H,st),e(P,at),e(P,We),e(We,L),e(L,ie),e(P,rt),e(P,Be),e(Be,U),e(U,it),e(P,dt),e(P,de),e(de,xe),e(xe,wi),e(xe,Xo),e(Xo,zi),e(xe,$i),e(de,ji),e(de,lt),e(lt,hn),e(hn,Ei),e(hn,Ps),e(Ps,qi),e(hn,Pi),e(lt,Fi),e(lt,un),e(un,Ni),e(un,Fs),e(Fs,Ci),e(un,Ii),e(lt,Li),e(lt,ct),e(ct,Ai),e(ct,Ns),e(Ns,Si),e(ct,Oi),e(ct,Cs),e(Cs,Hi),e(ct,Di),e(P,Ui),e(P,Is),e(Is,mn),e(mn,Ri),e(mn,Ls),e(Ls,Wi),e(mn,Bi),e(P,Vi),e(P,As),e(As,fn),e(fn,Gi),e(fn,gn),e(gn,Ji),e(fn,Yi),h(n,er,p),h(n,pt,p),e(pt,Ct),e(Ct,Ss),T(_n,Ss,null),e(pt,Ki),e(pt,Os),e(Os,Zi),h(n,tr,p),h(n,qe,p),e(qe,Qo),e(Qo,Xi),e(Qo,Hs),e(Hs,Qi),e(qe,ed),e(qe,kn),e(kn,td),e(kn,vn),e(vn,nd),e(kn,od),e(qe,sd),e(qe,ht),e(ht,ad),e(ht,Ds),e(Ds,rd),e(ht,id),e(ht,Us),e(Us,dd),e(ht,ld),e(qe,cd),e(qe,Rs),e(Rs,pd),h(n,nr,p),h(n,ut,p),e(ut,It),e(It,Ws),T(Tn,Ws,null),e(ut,hd),e(ut,Bs),e(Bs,ud),h(n,or,p),h(n,Je,p),e(Je,Vs),e(Vs,md),e(Je,fd),e(Je,Gs),e(Gs,Mn),e(Mn,gd),e(Je,_d),e(Je,Js),e(Js,yn),e(yn,kd),h(n,sr,p),h(n,mt,p),e(mt,Lt),e(Lt,Ys),T(bn,Ys,null),e(mt,vd),e(mt,Ks),e(Ks,Td),h(n,ar,p),h(n,Pe,p),e(Pe,xn),e(xn,Md),e(xn,Zs),e(Zs,yd),e(xn,bd),e(Pe,xd),e(Pe,wn),e(wn,wd),e(wn,Xs),e(Xs,zd),e(wn,$d),e(Pe,jd),e(Pe,zn),e(zn,Ed),e(zn,$n),e($n,qd),e(zn,Pd),e(Pe,Fd),e(Pe,jn),e(jn,Nd),e(jn,Qs),e(Qs,Cd),e(jn,Id),h(n,rr,p),h(n,At,p),e(At,Ld),e(At,En),e(En,Ad),e(At,Sd),h(n,ir,p),T(qn,n,p),h(n,dr,p),h(n,es,p),e(es,Od),h(n,lr,p),T(Pn,n,p),h(n,cr,p),h(n,ft,p),e(ft,St),e(St,ea),T(Fn,ea,null),e(ft,Hd),e(ft,ta),e(ta,Dd),h(n,pr,p),h(n,ts,p),e(ts,Ud),h(n,hr,p),T(Nn,n,p),h(n,ur,p),h(n,ns,p),e(ns,Rd),h(n,mr,p),T(Cn,n,p),h(n,fr,p),h(n,gt,p),e(gt,Ot),e(Ot,na),T(In,na,null),e(gt,Wd),e(gt,oa),e(oa,Bd),h(n,gr,p),h(n,le,p),T(Ln,le,null),e(le,Vd),e(le,_t),e(_t,Gd),e(_t,os),e(os,Jd),e(_t,Yd),e(_t,An),e(An,Kd),e(_t,Zd),e(le,Xd),e(le,kt),e(kt,Qd),e(kt,ss),e(ss,el),e(kt,tl),e(kt,as),e(as,nl),e(kt,ol),e(le,sl),e(le,sa),e(sa,al),e(le,rl),T(Sn,le,null),h(n,_r,p),h(n,vt,p),e(vt,Ht),e(Ht,aa),T(On,aa,null),e(vt,il),e(vt,ra),e(ra,dl),h(n,kr,p),h(n,R,p),T(Hn,R,null),e(R,ll),e(R,Dn),e(Dn,cl),e(Dn,Un),e(Un,pl),e(Dn,hl),e(R,ul),e(R,Rn),e(Rn,ml),e(Rn,rs),e(rs,fl),e(Rn,gl),e(R,_l),e(R,ia),e(ia,kl),e(R,vl),T(Wn,R,null),e(R,Tl),e(R,Dt),T(Bn,Dt,null),e(Dt,Ml),e(Dt,da),e(da,yl),h(n,vr,p),h(n,Tt,p),e(Tt,Ut),e(Ut,la),T(Vn,la,null),e(Tt,bl),e(Tt,ca),e(ca,xl),h(n,Tr,p),h(n,we,p),T(Gn,we,null),e(we,wl),e(we,Jn),e(Jn,zl),e(Jn,is),e(is,$l),e(Jn,jl),e(we,El),e(we,Yn),e(Yn,ql),e(Yn,Kn),e(Kn,Pl),e(Yn,Fl),e(we,Nl),e(we,me),T(Zn,me,null),e(me,Cl),e(me,Mt),e(Mt,Il),e(Mt,ds),e(ds,Ll),e(Mt,Al),e(Mt,pa),e(pa,Sl),e(Mt,Ol),e(me,Hl),T(Rt,me,null),e(me,Dl),e(me,ha),e(ha,Ul),e(me,Rl),T(Xn,me,null),h(n,Mr,p),h(n,yt,p),e(yt,Wt),e(Wt,ua),T(Qn,ua,null),e(yt,Wl),e(yt,ma),e(ma,Bl),h(n,yr,p),h(n,ze,p),T(eo,ze,null),e(ze,Vl),e(ze,to),e(to,Gl),e(to,ls),e(ls,Jl),e(to,Yl),e(ze,Kl),e(ze,no),e(no,Zl),e(no,oo),e(oo,Xl),e(no,Ql),e(ze,ec),e(ze,Y),T(so,Y,null),e(Y,tc),e(Y,bt),e(bt,nc),e(bt,cs),e(cs,oc),e(bt,sc),e(bt,fa),e(fa,ac),e(bt,rc),e(Y,ic),T(Bt,Y,null),e(Y,dc),e(Y,ao),e(ao,lc),e(ao,ro),e(ro,cc),e(ao,pc),e(Y,hc),e(Y,ga),e(ga,uc),e(Y,mc),T(io,Y,null),h(n,br,p),h(n,xt,p),e(xt,Vt),e(Vt,_a),T(lo,_a,null),e(xt,fc),e(xt,ka),e(ka,gc),h(n,xr,p),h(n,wt,p),T(co,wt,null),e(wt,_c),e(wt,Ye),T(po,Ye,null),e(Ye,kc),e(Ye,va),e(va,vc),e(Ye,Tc),T(ho,Ye,null),h(n,wr,p),h(n,zt,p),e(zt,Gt),e(Gt,Ta),T(uo,Ta,null),e(zt,Mc),e(zt,Ma),e(Ma,yc),h(n,zr,p),h(n,ce,p),T(mo,ce,null),e(ce,bc),e(ce,fo),e(fo,xc),e(fo,ps),e(ps,wc),e(fo,zc),e(ce,$c),e(ce,go),e(go,jc),e(go,_o),e(_o,Ec),e(go,qc),e(ce,Pc),T(Jt,ce,null),e(ce,Fc),e(ce,fe),T(ko,fe,null),e(fe,Nc),e(fe,$t),e($t,Cc),e($t,hs),e(hs,Ic),e($t,Lc),e($t,ya),e(ya,Ac),e($t,Sc),e(fe,Oc),T(Yt,fe,null),e(fe,Hc),e(fe,ba),e(ba,Dc),e(fe,Uc),T(vo,fe,null),h(n,$r,p),h(n,jt,p),e(jt,Kt),e(Kt,xa),T(To,xa,null),e(jt,Rc),e(jt,wa),e(wa,Wc),h(n,jr,p),h(n,pe,p),T(Mo,pe,null),e(pe,Bc),e(pe,yo),e(yo,Vc),e(yo,us),e(us,Gc),e(yo,Jc),e(pe,Yc),e(pe,bo),e(bo,Kc),e(bo,xo),e(xo,Zc),e(bo,Xc),e(pe,Qc),T(Zt,pe,null),e(pe,ep),e(pe,K),T(wo,K,null),e(K,tp),e(K,Et),e(Et,np),e(Et,ms),e(ms,op),e(Et,sp),e(Et,za),e(za,ap),e(Et,rp),e(K,ip),T(Xt,K,null),e(K,dp),e(K,zo),e(zo,lp),e(zo,$o),e($o,cp),e(zo,pp),e(K,hp),e(K,$a),e($a,up),e(K,mp),T(jo,K,null),h(n,Er,p),h(n,qt,p),e(qt,Qt),e(Qt,ja),T(Eo,ja,null),e(qt,fp),e(qt,Ea),e(Ea,gp),h(n,qr,p),h(n,W,p),T(qo,W,null),e(W,_p),e(W,Po),e(Po,kp),e(Po,fs),e(fs,vp),e(Po,Tp),e(W,Mp),e(W,Fo),e(Fo,yp),e(Fo,No),e(No,bp),e(Fo,xp),e(W,wp),e(W,qa),e(qa,zp),e(W,$p),e(W,Ve),e(Ve,Pa),e(Pa,Co),e(Co,jp),e(Ve,Ep),e(Ve,Fa),e(Fa,Io),e(Io,qp),e(Ve,Pp),e(Ve,Na),e(Na,Lo),e(Lo,Fp),e(Ve,Np),e(Ve,Ca),e(Ca,Ao),e(Ao,Cp),e(W,Ip),e(W,ge),T(So,ge,null),e(ge,Lp),e(ge,Pt),e(Pt,Ap),e(Pt,Ia),e(Ia,Sp),e(Pt,Op),e(Pt,La),e(La,Hp),e(Pt,Dp),e(ge,Up),T(en,ge,null),e(ge,Rp),e(ge,Aa),e(Aa,Wp),e(ge,Bp),T(Oo,ge,null),h(n,Pr,p),h(n,Ft,p),e(Ft,tn),e(tn,Sa),T(Ho,Sa,null),e(Ft,Vp),e(Ft,Oa),e(Oa,Gp),h(n,Fr,p),h(n,B,p),T(Do,B,null),e(B,Jp),e(B,Uo),e(Uo,Yp),e(Uo,gs),e(gs,Kp),e(Uo,Zp),e(B,Xp),e(B,Ro),e(Ro,Qp),e(Ro,Wo),e(Wo,eh),e(Ro,th),e(B,nh),e(B,Ha),e(Ha,oh),e(B,sh),e(B,Ge),e(Ge,Da),e(Da,Bo),e(Bo,ah),e(Ge,rh),e(Ge,Ua),e(Ua,Vo),e(Vo,ih),e(Ge,dh),e(Ge,Ra),e(Ra,Go),e(Go,lh),e(Ge,ch),e(Ge,Wa),e(Wa,Jo),e(Jo,ph),e(B,hh),e(B,_e),T(Yo,_e,null),e(_e,uh),e(_e,Nt),e(Nt,mh),e(Nt,Ba),e(Ba,fh),e(Nt,gh),e(Nt,Va),e(Va,_h),e(Nt,kh),e(_e,vh),T(nn,_e,null),e(_e,Th),e(_e,Ga),e(Ga,Mh),e(_e,yh),T(Ko,_e,null),Nr=!0},p(n,[p]){const Zo={};p&2&&(Zo.$$scope={dirty:p,ctx:n}),Rt.$set(Zo);const Ja={};p&2&&(Ja.$$scope={dirty:p,ctx:n}),Bt.$set(Ja);const Ya={};p&2&&(Ya.$$scope={dirty:p,ctx:n}),Jt.$set(Ya);const Ka={};p&2&&(Ka.$$scope={dirty:p,ctx:n}),Yt.$set(Ka);const on={};p&2&&(on.$$scope={dirty:p,ctx:n}),Zt.$set(on);const Za={};p&2&&(Za.$$scope={dirty:p,ctx:n}),Xt.$set(Za);const Xa={};p&2&&(Xa.$$scope={dirty:p,ctx:n}),en.$set(Xa);const Qa={};p&2&&(Qa.$$scope={dirty:p,ctx:n}),nn.$set(Qa)},i(n){Nr||(M(x.$$.fragment,n),M(te.$$.fragment,n),M(_n.$$.fragment,n),M(Tn.$$.fragment,n),M(bn.$$.fragment,n),M(qn.$$.fragment,n),M(Pn.$$.fragment,n),M(Fn.$$.fragment,n),M(Nn.$$.fragment,n),M(Cn.$$.fragment,n),M(In.$$.fragment,n),M(Ln.$$.fragment,n),M(Sn.$$.fragment,n),M(On.$$.fragment,n),M(Hn.$$.fragment,n),M(Wn.$$.fragment,n),M(Bn.$$.fragment,n),M(Vn.$$.fragment,n),M(Gn.$$.fragment,n),M(Zn.$$.fragment,n),M(Rt.$$.fragment,n),M(Xn.$$.fragment,n),M(Qn.$$.fragment,n),M(eo.$$.fragment,n),M(so.$$.fragment,n),M(Bt.$$.fragment,n),M(io.$$.fragment,n),M(lo.$$.fragment,n),M(co.$$.fragment,n),M(po.$$.fragment,n),M(ho.$$.fragment,n),M(uo.$$.fragment,n),M(mo.$$.fragment,n),M(Jt.$$.fragment,n),M(ko.$$.fragment,n),M(Yt.$$.fragment,n),M(vo.$$.fragment,n),M(To.$$.fragment,n),M(Mo.$$.fragment,n),M(Zt.$$.fragment,n),M(wo.$$.fragment,n),M(Xt.$$.fragment,n),M(jo.$$.fragment,n),M(Eo.$$.fragment,n),M(qo.$$.fragment,n),M(So.$$.fragment,n),M(en.$$.fragment,n),M(Oo.$$.fragment,n),M(Ho.$$.fragment,n),M(Do.$$.fragment,n),M(Yo.$$.fragment,n),M(nn.$$.fragment,n),M(Ko.$$.fragment,n),Nr=!0)},o(n){y(x.$$.fragment,n),y(te.$$.fragment,n),y(_n.$$.fragment,n),y(Tn.$$.fragment,n),y(bn.$$.fragment,n),y(qn.$$.fragment,n),y(Pn.$$.fragment,n),y(Fn.$$.fragment,n),y(Nn.$$.fragment,n),y(Cn.$$.fragment,n),y(In.$$.fragment,n),y(Ln.$$.fragment,n),y(Sn.$$.fragment,n),y(On.$$.fragment,n),y(Hn.$$.fragment,n),y(Wn.$$.fragment,n),y(Bn.$$.fragment,n),y(Vn.$$.fragment,n),y(Gn.$$.fragment,n),y(Zn.$$.fragment,n),y(Rt.$$.fragment,n),y(Xn.$$.fragment,n),y(Qn.$$.fragment,n),y(eo.$$.fragment,n),y(so.$$.fragment,n),y(Bt.$$.fragment,n),y(io.$$.fragment,n),y(lo.$$.fragment,n),y(co.$$.fragment,n),y(po.$$.fragment,n),y(ho.$$.fragment,n),y(uo.$$.fragment,n),y(mo.$$.fragment,n),y(Jt.$$.fragment,n),y(ko.$$.fragment,n),y(Yt.$$.fragment,n),y(vo.$$.fragment,n),y(To.$$.fragment,n),y(Mo.$$.fragment,n),y(Zt.$$.fragment,n),y(wo.$$.fragment,n),y(Xt.$$.fragment,n),y(jo.$$.fragment,n),y(Eo.$$.fragment,n),y(qo.$$.fragment,n),y(So.$$.fragment,n),y(en.$$.fragment,n),y(Oo.$$.fragment,n),y(Ho.$$.fragment,n),y(Do.$$.fragment,n),y(Yo.$$.fragment,n),y(nn.$$.fragment,n),y(Ko.$$.fragment,n),Nr=!1},d(n){t(u),n&&t(z),n&&t(f),b(x),n&&t(ue),n&&t(E),n&&t(je),n&&t(G),n&&t(Ee),n&&t(I),b(te),n&&t(J),n&&t(P),n&&t(er),n&&t(pt),b(_n),n&&t(tr),n&&t(qe),n&&t(nr),n&&t(ut),b(Tn),n&&t(or),n&&t(Je),n&&t(sr),n&&t(mt),b(bn),n&&t(ar),n&&t(Pe),n&&t(rr),n&&t(At),n&&t(ir),b(qn,n),n&&t(dr),n&&t(es),n&&t(lr),b(Pn,n),n&&t(cr),n&&t(ft),b(Fn),n&&t(pr),n&&t(ts),n&&t(hr),b(Nn,n),n&&t(ur),n&&t(ns),n&&t(mr),b(Cn,n),n&&t(fr),n&&t(gt),b(In),n&&t(gr),n&&t(le),b(Ln),b(Sn),n&&t(_r),n&&t(vt),b(On),n&&t(kr),n&&t(R),b(Hn),b(Wn),b(Bn),n&&t(vr),n&&t(Tt),b(Vn),n&&t(Tr),n&&t(we),b(Gn),b(Zn),b(Rt),b(Xn),n&&t(Mr),n&&t(yt),b(Qn),n&&t(yr),n&&t(ze),b(eo),b(so),b(Bt),b(io),n&&t(br),n&&t(xt),b(lo),n&&t(xr),n&&t(wt),b(co),b(po),b(ho),n&&t(wr),n&&t(zt),b(uo),n&&t(zr),n&&t(ce),b(mo),b(Jt),b(ko),b(Yt),b(vo),n&&t($r),n&&t(jt),b(To),n&&t(jr),n&&t(pe),b(Mo),b(Zt),b(wo),b(Xt),b(jo),n&&t(Er),n&&t(qt),b(Eo),n&&t(qr),n&&t(W),b(qo),b(So),b(en),b(Oo),n&&t(Pr),n&&t(Ft),b(Ho),n&&t(Fr),n&&t(B),b(Do),b(Yo),b(nn),b(Ko)}}}const gf={local:"marianmt",sections:[{local:"implementation-notes",title:"Implementation Notes"},{local:"naming",title:"Naming"},{local:"examples",title:"Examples"},{local:"multilingual-models",title:"Multilingual Models"},{local:"old-style-multilingual-models",title:"Old Style Multi-Lingual Models"},{local:"transformers.MarianConfig",title:"MarianConfig"},{local:"transformers.MarianTokenizer",title:"MarianTokenizer"},{local:"transformers.MarianModel",title:"MarianModel"},{local:"transformers.MarianMTModel",title:"MarianMTModel"},{local:"transformers.MarianForCausalLM",title:"MarianForCausalLM"},{local:"transformers.TFMarianModel",title:"TFMarianModel"},{local:"transformers.TFMarianMTModel",title:"TFMarianMTModel"},{local:"transformers.FlaxMarianModel",title:"FlaxMarianModel"},{local:"transformers.FlaxMarianMTModel",title:"FlaxMarianMTModel"}],title:"MarianMT"};function _f(C,u,z){let{fw:f}=u;return C.$$set=g=>{"fw"in g&&z(0,f=g.fw)},[f]}class xf extends nf{constructor(u){super();of(this,u,_f,ff,sf,{fw:0})}}export{xf as default,gf as metadata};
