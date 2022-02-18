import{S as nm,i as sm,s as am,e as n,k as i,w as _,t as r,L as rm,c as s,d as t,m as l,a,x as g,h as d,b as c,J as e,g as p,y as b,q as k,o as v,B as y}from"../../chunks/vendor-e859c359.js";import{T as lo}from"../../chunks/Tip-edc75249.js";import{D as I}from"../../chunks/Docstring-ade913b3.js";import{C as Be}from"../../chunks/CodeBlock-ce4317c2.js";import{I as be}from"../../chunks/IconCopyLink-5fae3b20.js";import"../../chunks/CopyButton-77addb3d.js";function dm(L){let u,B,f,T,z;return{c(){u=n("p"),B=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=n("code"),T=r("Module"),z=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);B=d(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,B),e(u,f),e(f,T),e(u,z)},d(x){x&&t(u)}}}function im(L){let u,B,f,T,z;return{c(){u=n("p"),B=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=n("code"),T=r("Module"),z=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);B=d(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,B),e(u,f),e(f,T),e(u,z)},d(x){x&&t(u)}}}function lm(L){let u,B,f,T,z,x,w,F,Ee,ie,M,ke,Q,qe,Z,ee,je,Fe,D,P,ve,R,E,j,Ce,J,X,Pe,G,Ne,Ae,N,le,te,$e,ce,U,Ie,Me,q,Se,W,Oe;return{c(){u=n("p"),B=r("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),ie=i(),M=n("p"),ke=r("This second option is useful when using "),Q=n("code"),qe=r("tf.keras.Model.fit"),Z=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),ee=n("code"),je=r("model(inputs)"),Fe=r("."),D=i(),P=n("p"),ve=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),R=i(),E=n("ul"),j=n("li"),Ce=r("a single Tensor with "),J=n("code"),X=r("input_ids"),Pe=r(" only and nothing else: "),G=n("code"),Ne=r("model(input_ids)"),Ae=i(),N=n("li"),le=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=n("code"),$e=r("model([input_ids, attention_mask])"),ce=r(" or "),U=n("code"),Ie=r("model([input_ids, attention_mask, token_type_ids])"),Me=i(),q=n("li"),Se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=n("code"),Oe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var $=a(u);B=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=l(m),T=s(m,"UL",{});var ye=a(T);z=s(ye,"LI",{});var ht=a(z);x=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(ye),F=s(ye,"LI",{});var He=a(F);Ee=d(He,"having all inputs as a list, tuple or dict in the first positional arguments."),He.forEach(t),ye.forEach(t),ie=l(m),M=s(m,"P",{});var C=a(M);ke=d(C,"This second option is useful when using "),Q=s(C,"CODE",{});var pe=a(Q);qe=d(pe,"tf.keras.Model.fit"),pe.forEach(t),Z=d(C,` method which currently requires having all
the tensors in the first argument of the model call function: `),ee=s(C,"CODE",{});var Le=a(ee);je=d(Le,"model(inputs)"),Le.forEach(t),Fe=d(C,"."),C.forEach(t),D=l(m),P=s(m,"P",{});var Te=a(P);ve=d(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Te.forEach(t),R=l(m),E=s(m,"UL",{});var H=a(E);j=s(H,"LI",{});var V=a(j);Ce=d(V,"a single Tensor with "),J=s(V,"CODE",{});var ut=a(J);X=d(ut,"input_ids"),ut.forEach(t),Pe=d(V," only and nothing else: "),G=s(V,"CODE",{});var Ve=a(G);Ne=d(Ve,"model(input_ids)"),Ve.forEach(t),V.forEach(t),Ae=l(H),N=s(H,"LI",{});var A=a(N);le=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=s(A,"CODE",{});var we=a(te);$e=d(we,"model([input_ids, attention_mask])"),we.forEach(t),ce=d(A," or "),U=s(A,"CODE",{});var mt=a(U);Ie=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),Me=l(H),q=s(H,"LI",{});var oe=a(q);Se=d(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(oe,"CODE",{});var ft=a(W);Oe=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),oe.forEach(t),H.forEach(t)},m(m,$){p(m,u,$),e(u,B),p(m,f,$),p(m,T,$),e(T,z),e(z,x),e(T,w),e(T,F),e(F,Ee),p(m,ie,$),p(m,M,$),e(M,ke),e(M,Q),e(Q,qe),e(M,Z),e(M,ee),e(ee,je),e(M,Fe),p(m,D,$),p(m,P,$),e(P,ve),p(m,R,$),p(m,E,$),e(E,j),e(j,Ce),e(j,J),e(J,X),e(j,Pe),e(j,G),e(G,Ne),e(E,Ae),e(E,N),e(N,le),e(N,te),e(te,$e),e(N,ce),e(N,U),e(U,Ie),e(E,Me),e(E,q),e(q,Se),e(q,W),e(W,Oe)},d(m){m&&t(u),m&&t(f),m&&t(T),m&&t(ie),m&&t(M),m&&t(D),m&&t(P),m&&t(R),m&&t(E)}}}function cm(L){let u,B,f,T,z;return{c(){u=n("p"),B=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=n("code"),T=r("Module"),z=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);B=d(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,B),e(u,f),e(f,T),e(u,z)},d(x){x&&t(u)}}}function pm(L){let u,B,f,T,z,x,w,F,Ee,ie,M,ke,Q,qe,Z,ee,je,Fe,D,P,ve,R,E,j,Ce,J,X,Pe,G,Ne,Ae,N,le,te,$e,ce,U,Ie,Me,q,Se,W,Oe;return{c(){u=n("p"),B=r("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),ie=i(),M=n("p"),ke=r("This second option is useful when using "),Q=n("code"),qe=r("tf.keras.Model.fit"),Z=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),ee=n("code"),je=r("model(inputs)"),Fe=r("."),D=i(),P=n("p"),ve=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),R=i(),E=n("ul"),j=n("li"),Ce=r("a single Tensor with "),J=n("code"),X=r("input_ids"),Pe=r(" only and nothing else: "),G=n("code"),Ne=r("model(input_ids)"),Ae=i(),N=n("li"),le=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=n("code"),$e=r("model([input_ids, attention_mask])"),ce=r(" or "),U=n("code"),Ie=r("model([input_ids, attention_mask, token_type_ids])"),Me=i(),q=n("li"),Se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=n("code"),Oe=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var $=a(u);B=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=l(m),T=s(m,"UL",{});var ye=a(T);z=s(ye,"LI",{});var ht=a(z);x=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(ye),F=s(ye,"LI",{});var He=a(F);Ee=d(He,"having all inputs as a list, tuple or dict in the first positional arguments."),He.forEach(t),ye.forEach(t),ie=l(m),M=s(m,"P",{});var C=a(M);ke=d(C,"This second option is useful when using "),Q=s(C,"CODE",{});var pe=a(Q);qe=d(pe,"tf.keras.Model.fit"),pe.forEach(t),Z=d(C,` method which currently requires having all
the tensors in the first argument of the model call function: `),ee=s(C,"CODE",{});var Le=a(ee);je=d(Le,"model(inputs)"),Le.forEach(t),Fe=d(C,"."),C.forEach(t),D=l(m),P=s(m,"P",{});var Te=a(P);ve=d(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Te.forEach(t),R=l(m),E=s(m,"UL",{});var H=a(E);j=s(H,"LI",{});var V=a(j);Ce=d(V,"a single Tensor with "),J=s(V,"CODE",{});var ut=a(J);X=d(ut,"input_ids"),ut.forEach(t),Pe=d(V," only and nothing else: "),G=s(V,"CODE",{});var Ve=a(G);Ne=d(Ve,"model(input_ids)"),Ve.forEach(t),V.forEach(t),Ae=l(H),N=s(H,"LI",{});var A=a(N);le=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=s(A,"CODE",{});var we=a(te);$e=d(we,"model([input_ids, attention_mask])"),we.forEach(t),ce=d(A," or "),U=s(A,"CODE",{});var mt=a(U);Ie=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),Me=l(H),q=s(H,"LI",{});var oe=a(q);Se=d(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(oe,"CODE",{});var ft=a(W);Oe=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),oe.forEach(t),H.forEach(t)},m(m,$){p(m,u,$),e(u,B),p(m,f,$),p(m,T,$),e(T,z),e(z,x),e(T,w),e(T,F),e(F,Ee),p(m,ie,$),p(m,M,$),e(M,ke),e(M,Q),e(Q,qe),e(M,Z),e(M,ee),e(ee,je),e(M,Fe),p(m,D,$),p(m,P,$),e(P,ve),p(m,R,$),p(m,E,$),e(E,j),e(j,Ce),e(j,J),e(J,X),e(j,Pe),e(j,G),e(G,Ne),e(E,Ae),e(E,N),e(N,le),e(N,te),e(te,$e),e(N,ce),e(N,U),e(U,Ie),e(E,Me),e(E,q),e(q,Se),e(q,W),e(W,Oe)},d(m){m&&t(u),m&&t(f),m&&t(T),m&&t(ie),m&&t(M),m&&t(D),m&&t(P),m&&t(R),m&&t(E)}}}function hm(L){let u,B,f,T,z;return{c(){u=n("p"),B=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=n("code"),T=r("Module"),z=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);B=d(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,B),e(u,f),e(f,T),e(u,z)},d(x){x&&t(u)}}}function um(L){let u,B,f,T,z;return{c(){u=n("p"),B=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=n("code"),T=r("Module"),z=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);B=d(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,B),e(u,f),e(f,T),e(u,z)},d(x){x&&t(u)}}}function mm(L){let u,B,f,T,z;return{c(){u=n("p"),B=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=n("code"),T=r("Module"),z=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){u=s(x,"P",{});var w=a(u);B=d(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,B),e(u,f),e(f,T),e(u,z)},d(x){x&&t(u)}}}function fm(L){let u,B,f,T,z,x,w,F,Ee,ie,M,ke,Q,qe,Z,ee,je,Fe,D,P,ve,R,E,j,Ce,J,X,Pe,G,Ne,Ae,N,le,te,$e,ce,U,Ie,Me,q,Se,W,Oe,m,$,ye,ht,He,C,pe,Le,Te,H,V,ut,Ve,A,we,mt,oe,ft,Xr,Kr,co,Yr,po,Qr,Zr,ed,De,td,xs,od,nd,zs,sd,ad,Ln,rd,dd,Va,_t,Nt,Bs,ho,id,Fs,ld,Ja,Dn,cd,Xa,uo,Ka,gt,At,$s,mo,pd,Ms,hd,Ya,ne,fo,ud,bt,md,Gn,fd,_d,_o,gd,bd,kd,kt,vd,Wn,yd,Td,Rn,wd,xd,zd,Es,Bd,Fd,go,Qa,vt,It,qs,bo,$d,js,Md,Za,se,ko,Ed,Cs,qd,jd,St,Ps,Cd,Pd,Un,Nd,Ad,Id,vo,Sd,Hn,Od,Ld,Dd,Je,yo,Gd,Ns,Wd,Rd,As,Vn,Ud,Is,Hd,er,yt,Ot,Ss,To,Vd,Os,Jd,tr,ae,wo,Xd,xo,Kd,Ls,Yd,Qd,Zd,Lt,Ds,ei,ti,Jn,oi,ni,si,zo,ai,Xn,ri,di,ii,Xe,Bo,li,Gs,ci,pi,Ws,Kn,hi,Rs,ui,or,Tt,Dt,Us,Fo,mi,Hs,fi,nr,Ge,_i,Vs,gi,bi,Js,ki,vi,Xs,yi,sr,xe,$o,Ti,Mo,wi,Yn,xi,zi,Bi,Eo,Fi,qo,$i,Mi,Ei,he,jo,qi,wt,ji,Qn,Ci,Pi,Ks,Ni,Ai,Ii,Gt,Si,Ys,Oi,Li,Co,ar,xt,Wt,Qs,Po,Di,Zs,Gi,rr,We,Wi,ea,Ri,Ui,ta,Hi,Vi,oa,Ji,dr,ze,No,Xi,Ao,Ki,Zn,Yi,Qi,Zi,Io,el,So,tl,ol,nl,ue,Oo,sl,zt,al,es,rl,dl,na,il,ll,cl,Rt,pl,sa,hl,ul,Lo,ir,Bt,Ut,aa,Do,ml,ra,fl,lr,Go,Ke,Wo,_l,da,gl,bl,Ro,cr,Ft,Ht,ia,Uo,kl,la,vl,pr,re,Ho,yl,Vo,Tl,ts,wl,xl,zl,Jo,Bl,Xo,Fl,$l,Ml,Vt,El,me,Ko,ql,$t,jl,os,Cl,Pl,ca,Nl,Al,Il,Jt,Sl,pa,Ol,Ll,Yo,hr,Mt,Xt,ha,Qo,Dl,ua,Gl,ur,de,Zo,Wl,en,Rl,ns,Ul,Hl,Vl,tn,Jl,on,Xl,Kl,Yl,Kt,Ql,fe,nn,Zl,Et,ec,ss,tc,oc,ma,nc,sc,ac,Yt,rc,fa,dc,ic,sn,mr,qt,Qt,_a,an,lc,ga,cc,fr,S,rn,pc,dn,hc,as,uc,mc,fc,ln,_c,cn,gc,bc,kc,ba,vc,yc,Re,ka,pn,Tc,wc,va,hn,xc,zc,ya,un,Bc,Fc,Ta,mn,$c,Mc,_e,fn,Ec,jt,qc,wa,jc,Cc,xa,Pc,Nc,Ac,Zt,Ic,za,Sc,Oc,_n,Lc,Ye,gn,Dc,Ba,Gc,Wc,bn,Rc,Qe,kn,Uc,Fa,Hc,Vc,vn,_r,Ct,eo,$a,yn,Jc,Ma,Xc,gr,O,Tn,Kc,wn,Yc,rs,Qc,Zc,ep,xn,tp,zn,op,np,sp,Ea,ap,rp,Ue,qa,Bn,dp,ip,ja,Fn,lp,cp,Ca,$n,pp,hp,Pa,Mn,up,mp,ge,En,fp,Pt,_p,Na,gp,bp,Aa,kp,vp,yp,to,Tp,Ia,wp,xp,qn,zp,Ze,jn,Bp,Sa,Fp,$p,Cn,Mp,et,Pn,Ep,Oa,qp,jp,Nn,br;return x=new be({}),R=new be({}),Te=new be({}),ho=new be({}),uo=new Be({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration
mname = 'facebook/blenderbot-400M-distill'
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([UTTERANCE], return_tensors='pt')
reply_ids = model.generate(**inputs)
print(tokenizer.batch_decode(reply_ids)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForConditionalGeneration</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">mname = <span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model = BlenderbotForConditionalGeneration.from_pretrained(mname)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BlenderbotTokenizer.from_pretrained(mname)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">reply_ids = model.generate(**inputs)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-built_in">print</span>(tokenizer.batch_decode(reply_ids))</span>
[&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;]`}}),mo=new be({}),fo=new I({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/configuration_blenderbot.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Blenderbot model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> or
<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.TFBlenderbotModel">TFBlenderbotModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BlenderbotConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BlenderbotConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BlenderbotConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BlenderbotConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BlenderbotConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BlenderbotConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BlenderbotConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BlenderbotConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BlenderbotConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BlenderbotConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BlenderbotConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BlenderbotConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BlenderbotConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated<em>normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder<em>layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.BlenderbotConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),go=new Be({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

# Initializing a Blenderbot facebook/blenderbot-3B style configuration
configuration = BlenderbotConfig()

# Initializing a model from the facebook/blenderbot-3B style configuration
model = BlenderbotModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotModel, BlenderbotConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Blenderbot facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),bo=new be({}),ko=new I({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),yo=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/tokenization_blenderbot.py#L61",parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),To=new be({}),wo=new I({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),Bo=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L63",parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fo=new be({}),$o=new I({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1078",parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new I({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1116",parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),Gt=new lo({props:{$$slots:{default:[dm]},$$scope:{ctx:L}}}),Co=new Be({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

model = BlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

input_ids = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt").input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Po=new be({}),No=new I({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1211",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Oo=new I({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1268",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new lo({props:{$$slots:{default:[im]},$$scope:{ctx:L}}}),Lo=new Be({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration
mname = 'facebook/blenderbot-400M-distill'
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
print("Human: ", UTTERANCE)
inputs = tokenizer([UTTERANCE], return_tensors='pt')
reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])

REPLY = "I'm not sure"
print("Human: ", REPLY)
NEXT_UTTERANCE = (
"My friends are cool but they eat too many carbs.</s> <s>That's unfortunate. "
"Are they trying to lose weight or are they just trying to be healthier?</s> "
"<s> I'm not sure."
)
inputs = tokenizer([NEXT_UTTERANCE], return_tensors='pt')
next_reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>REPLY = <span class="hljs-string">&quot;I&#x27;m not sure&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, REPLY)
<span class="hljs-meta">&gt;&gt;&gt; </span>NEXT_UTTERANCE = (
<span class="hljs-meta">... </span><span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&lt;/s&gt; &lt;s&gt;That&#x27;s unfortunate. &quot;</span>
<span class="hljs-meta">... </span><span class="hljs-string">&quot;Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt; &quot;</span>
<span class="hljs-meta">... </span><span class="hljs-string">&quot;&lt;s&gt; I&#x27;m not sure.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([NEXT_UTTERANCE], return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>next_reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])`}}),Do=new be({}),Wo=new I({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1432",parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a>
for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BlenderbotForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BlenderbotForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BlenderbotForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),Ro=new Be({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

tokenizer = BlenderbotTokenizer.from_pretrained('facebook/bart-large')
model = BlenderbotForCausalLM.from_pretrained('facebook/bart-large', add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForCausalLM.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Uo=new be({}),Ho=new I({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1182",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Vt=new lo({props:{$$slots:{default:[lm]},$$scope:{ctx:L}}}),Ko=new I({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1207",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>TFSeq2SeqModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),Jt=new lo({props:{$$slots:{default:[cm]},$$scope:{ctx:L}}}),Yo=new Be({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
import tensorflow as tf

tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')
model = TFBlenderbotModel.from_pretrained('facebook/blenderbot-400M-distill')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, TFBlenderbotModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotModel.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Qo=new be({}),Zo=new I({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1302",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Kt=new lo({props:{$$slots:{default:[pm]},$$scope:{ctx:L}}}),nn=new I({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1348",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>TFSeq2SeqLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yt=new lo({props:{$$slots:{default:[hm]},$$scope:{ctx:L}}}),sn=new Be({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration
mname = 'facebook/blenderbot-400M-distill'
model = TFBlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
print("Human: ", UTTERANCE)
inputs = tokenizer([UTTERANCE], return_tensors='tf')
reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])

REPLY = "I'm not sure"
print("Human: ", REPLY)
NEXT_UTTERANCE = (
"My friends are cool but they eat too many carbs.</s> <s>That's unfortunate. "
"Are they trying to lose weight or are they just trying to be healthier?</s> "
"<s> I'm not sure."
)
inputs = tokenizer([NEXT_UTTERANCE], return_tensors='tf')
next_reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, TFBlenderbotForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>REPLY = <span class="hljs-string">&quot;I&#x27;m not sure&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, REPLY)
<span class="hljs-meta">&gt;&gt;&gt; </span>NEXT_UTTERANCE = (
<span class="hljs-meta">... </span><span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&lt;/s&gt; &lt;s&gt;That&#x27;s unfortunate. &quot;</span>
<span class="hljs-meta">... </span><span class="hljs-string">&quot;Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt; &quot;</span>
<span class="hljs-meta">... </span><span class="hljs-string">&quot;&lt;s&gt; I&#x27;m not sure.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([NEXT_UTTERANCE], return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>next_reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])`}}),an=new be({}),rn=new I({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1210",parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),fn=new I({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1145",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),Zt=new lo({props:{$$slots:{default:[um]},$$scope:{ctx:L}}}),_n=new Be({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')
model = FlaxBlenderbotModel.from_pretrained('facebook/blenderbot-400M-distill')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),gn=new I({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L969",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>BlenderbotConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bn=new Be({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained('facebook/blenderbot-400M-distill')
tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),kn=new I({props:{name:"decode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1031",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>BlenderbotConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new Be({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained('facebook/blenderbot-400M-distill')
tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),yn=new be({}),Tn=new I({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1297",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),En=new I({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1145",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new lo({props:{$$slots:{default:[mm]},$$scope:{ctx:L}}}),qn=new Be({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig

model = FlaxBlenderbotForConditionalGeneration.from_pretrained('facebook/blenderbot-400M-distill')
tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')

UTTERANCE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([UTTERANCE], max_length=1024, return_tensors='np')

# Generate Reply
reply_ids = model.generate(inputs['input_ids'], num_beams=4, max_length=5, early_stopping=True).sequences
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in reply_ids]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Reply</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(inputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>, early_stopping=<span class="hljs-literal">True</span>).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>([tokenizer.decode(g, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>) <span class="hljs-keyword">for</span> g <span class="hljs-keyword">in</span> reply_ids])`}}),jn=new I({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L969",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>BlenderbotConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cn=new Be({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained('facebook/blenderbot-400M-distill')
tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Pn=new I({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1301",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>BlenderbotConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new Be({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained('facebook/blenderbot-400M-distill')
tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),B=i(),f=n("h1"),T=n("a"),z=n("span"),_(x.$$.fragment),w=i(),F=n("span"),Ee=r("Blenderbot"),ie=i(),M=n("p"),ke=n("strong"),Q=r("DISCLAIMER:"),qe=r(" If you see something strange, file a "),Z=n("a"),ee=r("Github Issue"),je=r(" ."),Fe=i(),D=n("h2"),P=n("a"),ve=n("span"),_(R.$$.fragment),E=i(),j=n("span"),Ce=r("Overview"),J=i(),X=n("p"),Pe=r("The Blender chatbot model was proposed in "),G=n("a"),Ne=r("Recipes for building an open-domain chatbot"),Ae=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),N=i(),le=n("p"),te=r("The abstract of the paper is the following:"),$e=i(),ce=n("p"),U=n("em"),Ie=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Me=i(),q=n("p"),Se=r("This model was contributed by "),W=n("a"),Oe=r("sshleifer"),m=r(". The authors\u2019 code can be found "),$=n("a"),ye=r("here"),ht=r(" ."),He=i(),C=n("h2"),pe=n("a"),Le=n("span"),_(Te.$$.fragment),H=i(),V=n("span"),ut=r("Implementation Notes"),Ve=i(),A=n("ul"),we=n("li"),mt=r("Blenderbot uses a standard "),oe=n("a"),ft=r("seq2seq model transformer"),Xr=r(" based architecture."),Kr=i(),co=n("li"),Yr=r("Available checkpoints can be found in the "),po=n("a"),Qr=r("model hub"),Zr=r("."),ed=i(),De=n("li"),td=r("This is the "),xs=n("em"),od=r("default"),nd=r(` Blenderbot model class. However, some smaller checkpoints, such as
`),zs=n("code"),sd=r("facebook/blenderbot_small_90M"),ad=r(`, have a different architecture and consequently should be used with
`),Ln=n("a"),rd=r("BlenderbotSmall"),dd=r("."),Va=i(),_t=n("h2"),Nt=n("a"),Bs=n("span"),_(ho.$$.fragment),id=i(),Fs=n("span"),ld=r("Usage"),Ja=i(),Dn=n("p"),cd=r("Here is an example of model usage:"),Xa=i(),_(uo.$$.fragment),Ka=i(),gt=n("h2"),At=n("a"),$s=n("span"),_(mo.$$.fragment),pd=i(),Ms=n("span"),hd=r("BlenderbotConfig"),Ya=i(),ne=n("div"),_(fo.$$.fragment),ud=i(),bt=n("p"),md=r("This is the configuration class to store the configuration of a "),Gn=n("a"),fd=r("BlenderbotModel"),_d=r(`. It is used
to instantiate an Blenderbot model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),_o=n("a"),gd=r("facebook/blenderbot-3B"),bd=r(" architecture."),kd=i(),kt=n("p"),vd=r("Configuration objects inherit from "),Wn=n("a"),yd=r("PretrainedConfig"),Td=r(` and can be used to control the model
outputs. Read the documentation from `),Rn=n("a"),wd=r("PretrainedConfig"),xd=r(" for more information."),zd=i(),Es=n("p"),Bd=r("Example:"),Fd=i(),_(go.$$.fragment),Qa=i(),vt=n("h2"),It=n("a"),qs=n("span"),_(bo.$$.fragment),$d=i(),js=n("span"),Md=r("BlenderbotTokenizer"),Za=i(),se=n("div"),_(ko.$$.fragment),Ed=i(),Cs=n("p"),qd=r("Construct a Blenderbot tokenizer."),jd=i(),St=n("p"),Ps=n("code"),Cd=r("Blenderbot"),Pd=r(" is nearly identical to "),Un=n("a"),Nd=r("RobertaTokenizer"),Ad=r(` and runs
end-to-end tokenization: punctuation splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token
to the beginning of sequences.`),Id=i(),vo=n("p"),Sd=r("Refer to superclass "),Hn=n("a"),Od=r("RobertaTokenizer"),Ld=r(` for usage examples and documentation concerning
parameters.`),Dd=i(),Je=n("div"),_(yo.$$.fragment),Gd=i(),Ns=n("p"),Wd=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Rd=i(),As=n("ul"),Vn=n("li"),Ud=r("single sequence: "),Is=n("code"),Hd=r("X </s>"),er=i(),yt=n("h2"),Ot=n("a"),Ss=n("span"),_(To.$$.fragment),Vd=i(),Os=n("span"),Jd=r("BlenderbotTokenizerFast"),tr=i(),ae=n("div"),_(wo.$$.fragment),Xd=i(),xo=n("p"),Kd=r("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ls=n("em"),Yd=r("tokenizers"),Qd=r(" library)."),Zd=i(),Lt=n("p"),Ds=n("code"),ei=r("BlenderbotFast"),ti=r(" is nearly identical to "),Jn=n("a"),oi=r("RobertaTokenizerFast"),ni=r(` and runs
end-to-end tokenization: punctuation splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token
to the beginning of sequences.`),si=i(),zo=n("p"),ai=r("Refer to superclass "),Xn=n("a"),ri=r("RobertaTokenizerFast"),di=r(` for usage examples and documentation concerning
parameters.`),ii=i(),Xe=n("div"),_(Bo.$$.fragment),li=i(),Gs=n("p"),ci=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),pi=i(),Ws=n("ul"),Kn=n("li"),hi=r("single sequence: "),Rs=n("code"),ui=r("X </s>"),or=i(),Tt=n("h2"),Dt=n("a"),Us=n("span"),_(Fo.$$.fragment),mi=i(),Hs=n("span"),fi=r("BlenderbotModel"),nr=i(),Ge=n("p"),_i=r("See "),Vs=n("code"),gi=r("transformers.BartModel"),bi=r(" for arguments to "),Js=n("em"),ki=r("forward"),vi=r(" and "),Xs=n("em"),yi=r("generate"),sr=i(),xe=n("div"),_($o.$$.fragment),Ti=i(),Mo=n("p"),wi=r(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Yn=n("a"),xi=r("PreTrainedModel"),zi=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Bi=i(),Eo=n("p"),Fi=r("This model is also a PyTorch "),qo=n("a"),$i=r("torch.nn.Module"),Mi=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ei=i(),he=n("div"),_(jo.$$.fragment),qi=i(),wt=n("p"),ji=r("The "),Qn=n("a"),Ci=r("BlenderbotModel"),Pi=r(" forward method, overrides the "),Ks=n("code"),Ni=r("__call__"),Ai=r(" special method."),Ii=i(),_(Gt.$$.fragment),Si=i(),Ys=n("p"),Oi=r("Example:"),Li=i(),_(Co.$$.fragment),ar=i(),xt=n("h2"),Wt=n("a"),Qs=n("span"),_(Po.$$.fragment),Di=i(),Zs=n("span"),Gi=r("BlenderbotForConditionalGeneration"),rr=i(),We=n("p"),Wi=r("See "),ea=n("code"),Ri=r("transformers.BartForConditionalGeneration"),Ui=r(" for arguments to "),ta=n("em"),Hi=r("forward"),Vi=r(" and "),oa=n("em"),Ji=r("generate"),dr=i(),ze=n("div"),_(No.$$.fragment),Xi=i(),Ao=n("p"),Ki=r(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),Zn=n("a"),Yi=r("PreTrainedModel"),Qi=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Zi=i(),Io=n("p"),el=r("This model is also a PyTorch "),So=n("a"),tl=r("torch.nn.Module"),ol=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),nl=i(),ue=n("div"),_(Oo.$$.fragment),sl=i(),zt=n("p"),al=r("The "),es=n("a"),rl=r("BlenderbotForConditionalGeneration"),dl=r(" forward method, overrides the "),na=n("code"),il=r("__call__"),ll=r(" special method."),cl=i(),_(Rt.$$.fragment),pl=i(),sa=n("p"),hl=r("Conversation example:"),ul=i(),_(Lo.$$.fragment),ir=i(),Bt=n("h2"),Ut=n("a"),aa=n("span"),_(Do.$$.fragment),ml=i(),ra=n("span"),fl=r("BlenderbotForCausalLM"),lr=i(),Go=n("div"),Ke=n("div"),_(Wo.$$.fragment),_l=i(),da=n("p"),gl=r("Example:"),bl=i(),_(Ro.$$.fragment),cr=i(),Ft=n("h2"),Ht=n("a"),ia=n("span"),_(Uo.$$.fragment),kl=i(),la=n("span"),vl=r("TFBlenderbotModel"),pr=i(),re=n("div"),_(Ho.$$.fragment),yl=i(),Vo=n("p"),Tl=r(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ts=n("a"),wl=r("TFPreTrainedModel"),xl=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),zl=i(),Jo=n("p"),Bl=r("This model is also a "),Xo=n("a"),Fl=r("tf.keras.Model"),$l=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ml=i(),_(Vt.$$.fragment),El=i(),me=n("div"),_(Ko.$$.fragment),ql=i(),$t=n("p"),jl=r("The "),os=n("a"),Cl=r("TFBlenderbotModel"),Pl=r(" forward method, overrides the "),ca=n("code"),Nl=r("__call__"),Al=r(" special method."),Il=i(),_(Jt.$$.fragment),Sl=i(),pa=n("p"),Ol=r("Example:"),Ll=i(),_(Yo.$$.fragment),hr=i(),Mt=n("h2"),Xt=n("a"),ha=n("span"),_(Qo.$$.fragment),Dl=i(),ua=n("span"),Gl=r("TFBlenderbotForConditionalGeneration"),ur=i(),de=n("div"),_(Zo.$$.fragment),Wl=i(),en=n("p"),Rl=r(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ns=n("a"),Ul=r("TFPreTrainedModel"),Hl=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Vl=i(),tn=n("p"),Jl=r("This model is also a "),on=n("a"),Xl=r("tf.keras.Model"),Kl=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Yl=i(),_(Kt.$$.fragment),Ql=i(),fe=n("div"),_(nn.$$.fragment),Zl=i(),Et=n("p"),ec=r("The "),ss=n("a"),tc=r("TFBlenderbotForConditionalGeneration"),oc=r(" forward method, overrides the "),ma=n("code"),nc=r("__call__"),sc=r(" special method."),ac=i(),_(Yt.$$.fragment),rc=i(),fa=n("p"),dc=r("Conversation example:"),ic=i(),_(sn.$$.fragment),mr=i(),qt=n("h2"),Qt=n("a"),_a=n("span"),_(an.$$.fragment),lc=i(),ga=n("span"),cc=r("FlaxBlenderbotModel"),fr=i(),S=n("div"),_(rn.$$.fragment),pc=i(),dn=n("p"),hc=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),as=n("a"),uc=r("FlaxPreTrainedModel"),mc=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),fc=i(),ln=n("p"),_c=r("This model is also a Flax Linen "),cn=n("a"),gc=r("flax.nn.Module"),bc=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),kc=i(),ba=n("p"),vc=r("Finally, this model supports inherent JAX features such as:"),yc=i(),Re=n("ul"),ka=n("li"),pn=n("a"),Tc=r("Just-In-Time (JIT) compilation"),wc=i(),va=n("li"),hn=n("a"),xc=r("Automatic Differentiation"),zc=i(),ya=n("li"),un=n("a"),Bc=r("Vectorization"),Fc=i(),Ta=n("li"),mn=n("a"),$c=r("Parallelization"),Mc=i(),_e=n("div"),_(fn.$$.fragment),Ec=i(),jt=n("p"),qc=r("The "),wa=n("code"),jc=r("FlaxBlenderbotPreTrainedModel"),Cc=r(" forward method, overrides the "),xa=n("code"),Pc=r("__call__"),Nc=r(" special method."),Ac=i(),_(Zt.$$.fragment),Ic=i(),za=n("p"),Sc=r("Example:"),Oc=i(),_(_n.$$.fragment),Lc=i(),Ye=n("div"),_(gn.$$.fragment),Dc=i(),Ba=n("p"),Gc=r("Example:"),Wc=i(),_(bn.$$.fragment),Rc=i(),Qe=n("div"),_(kn.$$.fragment),Uc=i(),Fa=n("p"),Hc=r("Example:"),Vc=i(),_(vn.$$.fragment),_r=i(),Ct=n("h2"),eo=n("a"),$a=n("span"),_(yn.$$.fragment),Jc=i(),Ma=n("span"),Xc=r("FlaxBlenderbotForConditionalGeneration"),gr=i(),O=n("div"),_(Tn.$$.fragment),Kc=i(),wn=n("p"),Yc=r(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),rs=n("a"),Qc=r("FlaxPreTrainedModel"),Zc=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ep=i(),xn=n("p"),tp=r("This model is also a Flax Linen "),zn=n("a"),op=r("flax.nn.Module"),np=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),sp=i(),Ea=n("p"),ap=r("Finally, this model supports inherent JAX features such as:"),rp=i(),Ue=n("ul"),qa=n("li"),Bn=n("a"),dp=r("Just-In-Time (JIT) compilation"),ip=i(),ja=n("li"),Fn=n("a"),lp=r("Automatic Differentiation"),cp=i(),Ca=n("li"),$n=n("a"),pp=r("Vectorization"),hp=i(),Pa=n("li"),Mn=n("a"),up=r("Parallelization"),mp=i(),ge=n("div"),_(En.$$.fragment),fp=i(),Pt=n("p"),_p=r("The "),Na=n("code"),gp=r("FlaxBlenderbotPreTrainedModel"),bp=r(" forward method, overrides the "),Aa=n("code"),kp=r("__call__"),vp=r(" special method."),yp=i(),_(to.$$.fragment),Tp=i(),Ia=n("p"),wp=r("Conversation example:"),xp=i(),_(qn.$$.fragment),zp=i(),Ze=n("div"),_(jn.$$.fragment),Bp=i(),Sa=n("p"),Fp=r("Example:"),$p=i(),_(Cn.$$.fragment),Mp=i(),et=n("div"),_(Pn.$$.fragment),Ep=i(),Oa=n("p"),qp=r("Example:"),jp=i(),_(Nn.$$.fragment),this.h()},l(o){const h=rm('[data-svelte="svelte-1phssyn"]',document.head);u=s(h,"META",{name:!0,content:!0}),h.forEach(t),B=l(o),f=s(o,"H1",{class:!0});var An=a(f);T=s(An,"A",{id:!0,class:!0,href:!0});var La=a(T);z=s(La,"SPAN",{});var Da=a(z);g(x.$$.fragment,Da),Da.forEach(t),La.forEach(t),w=l(An),F=s(An,"SPAN",{});var Ga=a(F);Ee=d(Ga,"Blenderbot"),Ga.forEach(t),An.forEach(t),ie=l(o),M=s(o,"P",{});var oo=a(M);ke=s(oo,"STRONG",{});var Wa=a(ke);Q=d(Wa,"DISCLAIMER:"),Wa.forEach(t),qe=d(oo," If you see something strange, file a "),Z=s(oo,"A",{href:!0,rel:!0});var Ra=a(Z);ee=d(Ra,"Github Issue"),Ra.forEach(t),je=d(oo," ."),oo.forEach(t),Fe=l(o),D=s(o,"H2",{class:!0});var In=a(D);P=s(In,"A",{id:!0,class:!0,href:!0});var Np=a(P);ve=s(Np,"SPAN",{});var Ap=a(ve);g(R.$$.fragment,Ap),Ap.forEach(t),Np.forEach(t),E=l(In),j=s(In,"SPAN",{});var Ip=a(j);Ce=d(Ip,"Overview"),Ip.forEach(t),In.forEach(t),J=l(o),X=s(o,"P",{});var kr=a(X);Pe=d(kr,"The Blender chatbot model was proposed in "),G=s(kr,"A",{href:!0,rel:!0});var Sp=a(G);Ne=d(Sp,"Recipes for building an open-domain chatbot"),Sp.forEach(t),Ae=d(kr,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),kr.forEach(t),N=l(o),le=s(o,"P",{});var Op=a(le);te=d(Op,"The abstract of the paper is the following:"),Op.forEach(t),$e=l(o),ce=s(o,"P",{});var Lp=a(ce);U=s(Lp,"EM",{});var Dp=a(U);Ie=d(Dp,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Dp.forEach(t),Lp.forEach(t),Me=l(o),q=s(o,"P",{});var ds=a(q);Se=d(ds,"This model was contributed by "),W=s(ds,"A",{href:!0,rel:!0});var Gp=a(W);Oe=d(Gp,"sshleifer"),Gp.forEach(t),m=d(ds,". The authors\u2019 code can be found "),$=s(ds,"A",{href:!0,rel:!0});var Wp=a($);ye=d(Wp,"here"),Wp.forEach(t),ht=d(ds," ."),ds.forEach(t),He=l(o),C=s(o,"H2",{class:!0});var vr=a(C);pe=s(vr,"A",{id:!0,class:!0,href:!0});var Rp=a(pe);Le=s(Rp,"SPAN",{});var Up=a(Le);g(Te.$$.fragment,Up),Up.forEach(t),Rp.forEach(t),H=l(vr),V=s(vr,"SPAN",{});var Hp=a(V);ut=d(Hp,"Implementation Notes"),Hp.forEach(t),vr.forEach(t),Ve=l(o),A=s(o,"UL",{});var is=a(A);we=s(is,"LI",{});var yr=a(we);mt=d(yr,"Blenderbot uses a standard "),oe=s(yr,"A",{href:!0,rel:!0});var Vp=a(oe);ft=d(Vp,"seq2seq model transformer"),Vp.forEach(t),Xr=d(yr," based architecture."),yr.forEach(t),Kr=l(is),co=s(is,"LI",{});var Tr=a(co);Yr=d(Tr,"Available checkpoints can be found in the "),po=s(Tr,"A",{href:!0,rel:!0});var Jp=a(po);Qr=d(Jp,"model hub"),Jp.forEach(t),Zr=d(Tr,"."),Tr.forEach(t),ed=l(is),De=s(is,"LI",{});var no=a(De);td=d(no,"This is the "),xs=s(no,"EM",{});var Xp=a(xs);od=d(Xp,"default"),Xp.forEach(t),nd=d(no,` Blenderbot model class. However, some smaller checkpoints, such as
`),zs=s(no,"CODE",{});var Kp=a(zs);sd=d(Kp,"facebook/blenderbot_small_90M"),Kp.forEach(t),ad=d(no,`, have a different architecture and consequently should be used with
`),Ln=s(no,"A",{href:!0});var Yp=a(Ln);rd=d(Yp,"BlenderbotSmall"),Yp.forEach(t),dd=d(no,"."),no.forEach(t),is.forEach(t),Va=l(o),_t=s(o,"H2",{class:!0});var wr=a(_t);Nt=s(wr,"A",{id:!0,class:!0,href:!0});var Qp=a(Nt);Bs=s(Qp,"SPAN",{});var Zp=a(Bs);g(ho.$$.fragment,Zp),Zp.forEach(t),Qp.forEach(t),id=l(wr),Fs=s(wr,"SPAN",{});var eh=a(Fs);ld=d(eh,"Usage"),eh.forEach(t),wr.forEach(t),Ja=l(o),Dn=s(o,"P",{});var th=a(Dn);cd=d(th,"Here is an example of model usage:"),th.forEach(t),Xa=l(o),g(uo.$$.fragment,o),Ka=l(o),gt=s(o,"H2",{class:!0});var xr=a(gt);At=s(xr,"A",{id:!0,class:!0,href:!0});var oh=a(At);$s=s(oh,"SPAN",{});var nh=a($s);g(mo.$$.fragment,nh),nh.forEach(t),oh.forEach(t),pd=l(xr),Ms=s(xr,"SPAN",{});var sh=a(Ms);hd=d(sh,"BlenderbotConfig"),sh.forEach(t),xr.forEach(t),Ya=l(o),ne=s(o,"DIV",{class:!0});var tt=a(ne);g(fo.$$.fragment,tt),ud=l(tt),bt=s(tt,"P",{});var ls=a(bt);md=d(ls,"This is the configuration class to store the configuration of a "),Gn=s(ls,"A",{href:!0});var ah=a(Gn);fd=d(ah,"BlenderbotModel"),ah.forEach(t),_d=d(ls,`. It is used
to instantiate an Blenderbot model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),_o=s(ls,"A",{href:!0,rel:!0});var rh=a(_o);gd=d(rh,"facebook/blenderbot-3B"),rh.forEach(t),bd=d(ls," architecture."),ls.forEach(t),kd=l(tt),kt=s(tt,"P",{});var cs=a(kt);vd=d(cs,"Configuration objects inherit from "),Wn=s(cs,"A",{href:!0});var dh=a(Wn);yd=d(dh,"PretrainedConfig"),dh.forEach(t),Td=d(cs,` and can be used to control the model
outputs. Read the documentation from `),Rn=s(cs,"A",{href:!0});var ih=a(Rn);wd=d(ih,"PretrainedConfig"),ih.forEach(t),xd=d(cs," for more information."),cs.forEach(t),zd=l(tt),Es=s(tt,"P",{});var lh=a(Es);Bd=d(lh,"Example:"),lh.forEach(t),Fd=l(tt),g(go.$$.fragment,tt),tt.forEach(t),Qa=l(o),vt=s(o,"H2",{class:!0});var zr=a(vt);It=s(zr,"A",{id:!0,class:!0,href:!0});var ch=a(It);qs=s(ch,"SPAN",{});var ph=a(qs);g(bo.$$.fragment,ph),ph.forEach(t),ch.forEach(t),$d=l(zr),js=s(zr,"SPAN",{});var hh=a(js);Md=d(hh,"BlenderbotTokenizer"),hh.forEach(t),zr.forEach(t),Za=l(o),se=s(o,"DIV",{class:!0});var ot=a(se);g(ko.$$.fragment,ot),Ed=l(ot),Cs=s(ot,"P",{});var uh=a(Cs);qd=d(uh,"Construct a Blenderbot tokenizer."),uh.forEach(t),jd=l(ot),St=s(ot,"P",{});var Ua=a(St);Ps=s(Ua,"CODE",{});var mh=a(Ps);Cd=d(mh,"Blenderbot"),mh.forEach(t),Pd=d(Ua," is nearly identical to "),Un=s(Ua,"A",{href:!0});var fh=a(Un);Nd=d(fh,"RobertaTokenizer"),fh.forEach(t),Ad=d(Ua,` and runs
end-to-end tokenization: punctuation splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token
to the beginning of sequences.`),Ua.forEach(t),Id=l(ot),vo=s(ot,"P",{});var Br=a(vo);Sd=d(Br,"Refer to superclass "),Hn=s(Br,"A",{href:!0});var _h=a(Hn);Od=d(_h,"RobertaTokenizer"),_h.forEach(t),Ld=d(Br,` for usage examples and documentation concerning
parameters.`),Br.forEach(t),Dd=l(ot),Je=s(ot,"DIV",{class:!0});var ps=a(Je);g(yo.$$.fragment,ps),Gd=l(ps),Ns=s(ps,"P",{});var gh=a(Ns);Wd=d(gh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),gh.forEach(t),Rd=l(ps),As=s(ps,"UL",{});var bh=a(As);Vn=s(bh,"LI",{});var Cp=a(Vn);Ud=d(Cp,"single sequence: "),Is=s(Cp,"CODE",{});var kh=a(Is);Hd=d(kh,"X </s>"),kh.forEach(t),Cp.forEach(t),bh.forEach(t),ps.forEach(t),ot.forEach(t),er=l(o),yt=s(o,"H2",{class:!0});var Fr=a(yt);Ot=s(Fr,"A",{id:!0,class:!0,href:!0});var vh=a(Ot);Ss=s(vh,"SPAN",{});var yh=a(Ss);g(To.$$.fragment,yh),yh.forEach(t),vh.forEach(t),Vd=l(Fr),Os=s(Fr,"SPAN",{});var Th=a(Os);Jd=d(Th,"BlenderbotTokenizerFast"),Th.forEach(t),Fr.forEach(t),tr=l(o),ae=s(o,"DIV",{class:!0});var nt=a(ae);g(wo.$$.fragment,nt),Xd=l(nt),xo=s(nt,"P",{});var $r=a(xo);Kd=d($r,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ls=s($r,"EM",{});var wh=a(Ls);Yd=d(wh,"tokenizers"),wh.forEach(t),Qd=d($r," library)."),$r.forEach(t),Zd=l(nt),Lt=s(nt,"P",{});var Ha=a(Lt);Ds=s(Ha,"CODE",{});var xh=a(Ds);ei=d(xh,"BlenderbotFast"),xh.forEach(t),ti=d(Ha," is nearly identical to "),Jn=s(Ha,"A",{href:!0});var zh=a(Jn);oi=d(zh,"RobertaTokenizerFast"),zh.forEach(t),ni=d(Ha,` and runs
end-to-end tokenization: punctuation splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token
to the beginning of sequences.`),Ha.forEach(t),si=l(nt),zo=s(nt,"P",{});var Mr=a(zo);ai=d(Mr,"Refer to superclass "),Xn=s(Mr,"A",{href:!0});var Bh=a(Xn);ri=d(Bh,"RobertaTokenizerFast"),Bh.forEach(t),di=d(Mr,` for usage examples and documentation concerning
parameters.`),Mr.forEach(t),ii=l(nt),Xe=s(nt,"DIV",{class:!0});var hs=a(Xe);g(Bo.$$.fragment,hs),li=l(hs),Gs=s(hs,"P",{});var Fh=a(Gs);ci=d(Fh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Fh.forEach(t),pi=l(hs),Ws=s(hs,"UL",{});var $h=a(Ws);Kn=s($h,"LI",{});var Pp=a(Kn);hi=d(Pp,"single sequence: "),Rs=s(Pp,"CODE",{});var Mh=a(Rs);ui=d(Mh,"X </s>"),Mh.forEach(t),Pp.forEach(t),$h.forEach(t),hs.forEach(t),nt.forEach(t),or=l(o),Tt=s(o,"H2",{class:!0});var Er=a(Tt);Dt=s(Er,"A",{id:!0,class:!0,href:!0});var Eh=a(Dt);Us=s(Eh,"SPAN",{});var qh=a(Us);g(Fo.$$.fragment,qh),qh.forEach(t),Eh.forEach(t),mi=l(Er),Hs=s(Er,"SPAN",{});var jh=a(Hs);fi=d(jh,"BlenderbotModel"),jh.forEach(t),Er.forEach(t),nr=l(o),Ge=s(o,"P",{});var Sn=a(Ge);_i=d(Sn,"See "),Vs=s(Sn,"CODE",{});var Ch=a(Vs);gi=d(Ch,"transformers.BartModel"),Ch.forEach(t),bi=d(Sn," for arguments to "),Js=s(Sn,"EM",{});var Ph=a(Js);ki=d(Ph,"forward"),Ph.forEach(t),vi=d(Sn," and "),Xs=s(Sn,"EM",{});var Nh=a(Xs);yi=d(Nh,"generate"),Nh.forEach(t),Sn.forEach(t),sr=l(o),xe=s(o,"DIV",{class:!0});var so=a(xe);g($o.$$.fragment,so),Ti=l(so),Mo=s(so,"P",{});var qr=a(Mo);wi=d(qr,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Yn=s(qr,"A",{href:!0});var Ah=a(Yn);xi=d(Ah,"PreTrainedModel"),Ah.forEach(t),zi=d(qr,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),qr.forEach(t),Bi=l(so),Eo=s(so,"P",{});var jr=a(Eo);Fi=d(jr,"This model is also a PyTorch "),qo=s(jr,"A",{href:!0,rel:!0});var Ih=a(qo);$i=d(Ih,"torch.nn.Module"),Ih.forEach(t),Mi=d(jr,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),jr.forEach(t),Ei=l(so),he=s(so,"DIV",{class:!0});var st=a(he);g(jo.$$.fragment,st),qi=l(st),wt=s(st,"P",{});var us=a(wt);ji=d(us,"The "),Qn=s(us,"A",{href:!0});var Sh=a(Qn);Ci=d(Sh,"BlenderbotModel"),Sh.forEach(t),Pi=d(us," forward method, overrides the "),Ks=s(us,"CODE",{});var Oh=a(Ks);Ni=d(Oh,"__call__"),Oh.forEach(t),Ai=d(us," special method."),us.forEach(t),Ii=l(st),g(Gt.$$.fragment,st),Si=l(st),Ys=s(st,"P",{});var Lh=a(Ys);Oi=d(Lh,"Example:"),Lh.forEach(t),Li=l(st),g(Co.$$.fragment,st),st.forEach(t),so.forEach(t),ar=l(o),xt=s(o,"H2",{class:!0});var Cr=a(xt);Wt=s(Cr,"A",{id:!0,class:!0,href:!0});var Dh=a(Wt);Qs=s(Dh,"SPAN",{});var Gh=a(Qs);g(Po.$$.fragment,Gh),Gh.forEach(t),Dh.forEach(t),Di=l(Cr),Zs=s(Cr,"SPAN",{});var Wh=a(Zs);Gi=d(Wh,"BlenderbotForConditionalGeneration"),Wh.forEach(t),Cr.forEach(t),rr=l(o),We=s(o,"P",{});var On=a(We);Wi=d(On,"See "),ea=s(On,"CODE",{});var Rh=a(ea);Ri=d(Rh,"transformers.BartForConditionalGeneration"),Rh.forEach(t),Ui=d(On," for arguments to "),ta=s(On,"EM",{});var Uh=a(ta);Hi=d(Uh,"forward"),Uh.forEach(t),Vi=d(On," and "),oa=s(On,"EM",{});var Hh=a(oa);Ji=d(Hh,"generate"),Hh.forEach(t),On.forEach(t),dr=l(o),ze=s(o,"DIV",{class:!0});var ao=a(ze);g(No.$$.fragment,ao),Xi=l(ao),Ao=s(ao,"P",{});var Pr=a(Ao);Ki=d(Pr,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),Zn=s(Pr,"A",{href:!0});var Vh=a(Zn);Yi=d(Vh,"PreTrainedModel"),Vh.forEach(t),Qi=d(Pr,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Pr.forEach(t),Zi=l(ao),Io=s(ao,"P",{});var Nr=a(Io);el=d(Nr,"This model is also a PyTorch "),So=s(Nr,"A",{href:!0,rel:!0});var Jh=a(So);tl=d(Jh,"torch.nn.Module"),Jh.forEach(t),ol=d(Nr,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Nr.forEach(t),nl=l(ao),ue=s(ao,"DIV",{class:!0});var at=a(ue);g(Oo.$$.fragment,at),sl=l(at),zt=s(at,"P",{});var ms=a(zt);al=d(ms,"The "),es=s(ms,"A",{href:!0});var Xh=a(es);rl=d(Xh,"BlenderbotForConditionalGeneration"),Xh.forEach(t),dl=d(ms," forward method, overrides the "),na=s(ms,"CODE",{});var Kh=a(na);il=d(Kh,"__call__"),Kh.forEach(t),ll=d(ms," special method."),ms.forEach(t),cl=l(at),g(Rt.$$.fragment,at),pl=l(at),sa=s(at,"P",{});var Yh=a(sa);hl=d(Yh,"Conversation example:"),Yh.forEach(t),ul=l(at),g(Lo.$$.fragment,at),at.forEach(t),ao.forEach(t),ir=l(o),Bt=s(o,"H2",{class:!0});var Ar=a(Bt);Ut=s(Ar,"A",{id:!0,class:!0,href:!0});var Qh=a(Ut);aa=s(Qh,"SPAN",{});var Zh=a(aa);g(Do.$$.fragment,Zh),Zh.forEach(t),Qh.forEach(t),ml=l(Ar),ra=s(Ar,"SPAN",{});var eu=a(ra);fl=d(eu,"BlenderbotForCausalLM"),eu.forEach(t),Ar.forEach(t),lr=l(o),Go=s(o,"DIV",{class:!0});var tu=a(Go);Ke=s(tu,"DIV",{class:!0});var fs=a(Ke);g(Wo.$$.fragment,fs),_l=l(fs),da=s(fs,"P",{});var ou=a(da);gl=d(ou,"Example:"),ou.forEach(t),bl=l(fs),g(Ro.$$.fragment,fs),fs.forEach(t),tu.forEach(t),cr=l(o),Ft=s(o,"H2",{class:!0});var Ir=a(Ft);Ht=s(Ir,"A",{id:!0,class:!0,href:!0});var nu=a(Ht);ia=s(nu,"SPAN",{});var su=a(ia);g(Uo.$$.fragment,su),su.forEach(t),nu.forEach(t),kl=l(Ir),la=s(Ir,"SPAN",{});var au=a(la);vl=d(au,"TFBlenderbotModel"),au.forEach(t),Ir.forEach(t),pr=l(o),re=s(o,"DIV",{class:!0});var rt=a(re);g(Ho.$$.fragment,rt),yl=l(rt),Vo=s(rt,"P",{});var Sr=a(Vo);Tl=d(Sr,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ts=s(Sr,"A",{href:!0});var ru=a(ts);wl=d(ru,"TFPreTrainedModel"),ru.forEach(t),xl=d(Sr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Sr.forEach(t),zl=l(rt),Jo=s(rt,"P",{});var Or=a(Jo);Bl=d(Or,"This model is also a "),Xo=s(Or,"A",{href:!0,rel:!0});var du=a(Xo);Fl=d(du,"tf.keras.Model"),du.forEach(t),$l=d(Or,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Or.forEach(t),Ml=l(rt),g(Vt.$$.fragment,rt),El=l(rt),me=s(rt,"DIV",{class:!0});var dt=a(me);g(Ko.$$.fragment,dt),ql=l(dt),$t=s(dt,"P",{});var _s=a($t);jl=d(_s,"The "),os=s(_s,"A",{href:!0});var iu=a(os);Cl=d(iu,"TFBlenderbotModel"),iu.forEach(t),Pl=d(_s," forward method, overrides the "),ca=s(_s,"CODE",{});var lu=a(ca);Nl=d(lu,"__call__"),lu.forEach(t),Al=d(_s," special method."),_s.forEach(t),Il=l(dt),g(Jt.$$.fragment,dt),Sl=l(dt),pa=s(dt,"P",{});var cu=a(pa);Ol=d(cu,"Example:"),cu.forEach(t),Ll=l(dt),g(Yo.$$.fragment,dt),dt.forEach(t),rt.forEach(t),hr=l(o),Mt=s(o,"H2",{class:!0});var Lr=a(Mt);Xt=s(Lr,"A",{id:!0,class:!0,href:!0});var pu=a(Xt);ha=s(pu,"SPAN",{});var hu=a(ha);g(Qo.$$.fragment,hu),hu.forEach(t),pu.forEach(t),Dl=l(Lr),ua=s(Lr,"SPAN",{});var uu=a(ua);Gl=d(uu,"TFBlenderbotForConditionalGeneration"),uu.forEach(t),Lr.forEach(t),ur=l(o),de=s(o,"DIV",{class:!0});var it=a(de);g(Zo.$$.fragment,it),Wl=l(it),en=s(it,"P",{});var Dr=a(en);Rl=d(Dr,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ns=s(Dr,"A",{href:!0});var mu=a(ns);Ul=d(mu,"TFPreTrainedModel"),mu.forEach(t),Hl=d(Dr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Dr.forEach(t),Vl=l(it),tn=s(it,"P",{});var Gr=a(tn);Jl=d(Gr,"This model is also a "),on=s(Gr,"A",{href:!0,rel:!0});var fu=a(on);Xl=d(fu,"tf.keras.Model"),fu.forEach(t),Kl=d(Gr,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Gr.forEach(t),Yl=l(it),g(Kt.$$.fragment,it),Ql=l(it),fe=s(it,"DIV",{class:!0});var lt=a(fe);g(nn.$$.fragment,lt),Zl=l(lt),Et=s(lt,"P",{});var gs=a(Et);ec=d(gs,"The "),ss=s(gs,"A",{href:!0});var _u=a(ss);tc=d(_u,"TFBlenderbotForConditionalGeneration"),_u.forEach(t),oc=d(gs," forward method, overrides the "),ma=s(gs,"CODE",{});var gu=a(ma);nc=d(gu,"__call__"),gu.forEach(t),sc=d(gs," special method."),gs.forEach(t),ac=l(lt),g(Yt.$$.fragment,lt),rc=l(lt),fa=s(lt,"P",{});var bu=a(fa);dc=d(bu,"Conversation example:"),bu.forEach(t),ic=l(lt),g(sn.$$.fragment,lt),lt.forEach(t),it.forEach(t),mr=l(o),qt=s(o,"H2",{class:!0});var Wr=a(qt);Qt=s(Wr,"A",{id:!0,class:!0,href:!0});var ku=a(Qt);_a=s(ku,"SPAN",{});var vu=a(_a);g(an.$$.fragment,vu),vu.forEach(t),ku.forEach(t),lc=l(Wr),ga=s(Wr,"SPAN",{});var yu=a(ga);cc=d(yu,"FlaxBlenderbotModel"),yu.forEach(t),Wr.forEach(t),fr=l(o),S=s(o,"DIV",{class:!0});var K=a(S);g(rn.$$.fragment,K),pc=l(K),dn=s(K,"P",{});var Rr=a(dn);hc=d(Rr,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),as=s(Rr,"A",{href:!0});var Tu=a(as);uc=d(Tu,"FlaxPreTrainedModel"),Tu.forEach(t),mc=d(Rr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Rr.forEach(t),fc=l(K),ln=s(K,"P",{});var Ur=a(ln);_c=d(Ur,"This model is also a Flax Linen "),cn=s(Ur,"A",{href:!0,rel:!0});var wu=a(cn);gc=d(wu,"flax.nn.Module"),wu.forEach(t),bc=d(Ur,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ur.forEach(t),kc=l(K),ba=s(K,"P",{});var xu=a(ba);vc=d(xu,"Finally, this model supports inherent JAX features such as:"),xu.forEach(t),yc=l(K),Re=s(K,"UL",{});var ro=a(Re);ka=s(ro,"LI",{});var zu=a(ka);pn=s(zu,"A",{href:!0,rel:!0});var Bu=a(pn);Tc=d(Bu,"Just-In-Time (JIT) compilation"),Bu.forEach(t),zu.forEach(t),wc=l(ro),va=s(ro,"LI",{});var Fu=a(va);hn=s(Fu,"A",{href:!0,rel:!0});var $u=a(hn);xc=d($u,"Automatic Differentiation"),$u.forEach(t),Fu.forEach(t),zc=l(ro),ya=s(ro,"LI",{});var Mu=a(ya);un=s(Mu,"A",{href:!0,rel:!0});var Eu=a(un);Bc=d(Eu,"Vectorization"),Eu.forEach(t),Mu.forEach(t),Fc=l(ro),Ta=s(ro,"LI",{});var qu=a(Ta);mn=s(qu,"A",{href:!0,rel:!0});var ju=a(mn);$c=d(ju,"Parallelization"),ju.forEach(t),qu.forEach(t),ro.forEach(t),Mc=l(K),_e=s(K,"DIV",{class:!0});var ct=a(_e);g(fn.$$.fragment,ct),Ec=l(ct),jt=s(ct,"P",{});var bs=a(jt);qc=d(bs,"The "),wa=s(bs,"CODE",{});var Cu=a(wa);jc=d(Cu,"FlaxBlenderbotPreTrainedModel"),Cu.forEach(t),Cc=d(bs," forward method, overrides the "),xa=s(bs,"CODE",{});var Pu=a(xa);Pc=d(Pu,"__call__"),Pu.forEach(t),Nc=d(bs," special method."),bs.forEach(t),Ac=l(ct),g(Zt.$$.fragment,ct),Ic=l(ct),za=s(ct,"P",{});var Nu=a(za);Sc=d(Nu,"Example:"),Nu.forEach(t),Oc=l(ct),g(_n.$$.fragment,ct),ct.forEach(t),Lc=l(K),Ye=s(K,"DIV",{class:!0});var ks=a(Ye);g(gn.$$.fragment,ks),Dc=l(ks),Ba=s(ks,"P",{});var Au=a(Ba);Gc=d(Au,"Example:"),Au.forEach(t),Wc=l(ks),g(bn.$$.fragment,ks),ks.forEach(t),Rc=l(K),Qe=s(K,"DIV",{class:!0});var vs=a(Qe);g(kn.$$.fragment,vs),Uc=l(vs),Fa=s(vs,"P",{});var Iu=a(Fa);Hc=d(Iu,"Example:"),Iu.forEach(t),Vc=l(vs),g(vn.$$.fragment,vs),vs.forEach(t),K.forEach(t),_r=l(o),Ct=s(o,"H2",{class:!0});var Hr=a(Ct);eo=s(Hr,"A",{id:!0,class:!0,href:!0});var Su=a(eo);$a=s(Su,"SPAN",{});var Ou=a($a);g(yn.$$.fragment,Ou),Ou.forEach(t),Su.forEach(t),Jc=l(Hr),Ma=s(Hr,"SPAN",{});var Lu=a(Ma);Xc=d(Lu,"FlaxBlenderbotForConditionalGeneration"),Lu.forEach(t),Hr.forEach(t),gr=l(o),O=s(o,"DIV",{class:!0});var Y=a(O);g(Tn.$$.fragment,Y),Kc=l(Y),wn=s(Y,"P",{});var Vr=a(wn);Yc=d(Vr,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),rs=s(Vr,"A",{href:!0});var Du=a(rs);Qc=d(Du,"FlaxPreTrainedModel"),Du.forEach(t),Zc=d(Vr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Vr.forEach(t),ep=l(Y),xn=s(Y,"P",{});var Jr=a(xn);tp=d(Jr,"This model is also a Flax Linen "),zn=s(Jr,"A",{href:!0,rel:!0});var Gu=a(zn);op=d(Gu,"flax.nn.Module"),Gu.forEach(t),np=d(Jr,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Jr.forEach(t),sp=l(Y),Ea=s(Y,"P",{});var Wu=a(Ea);ap=d(Wu,"Finally, this model supports inherent JAX features such as:"),Wu.forEach(t),rp=l(Y),Ue=s(Y,"UL",{});var io=a(Ue);qa=s(io,"LI",{});var Ru=a(qa);Bn=s(Ru,"A",{href:!0,rel:!0});var Uu=a(Bn);dp=d(Uu,"Just-In-Time (JIT) compilation"),Uu.forEach(t),Ru.forEach(t),ip=l(io),ja=s(io,"LI",{});var Hu=a(ja);Fn=s(Hu,"A",{href:!0,rel:!0});var Vu=a(Fn);lp=d(Vu,"Automatic Differentiation"),Vu.forEach(t),Hu.forEach(t),cp=l(io),Ca=s(io,"LI",{});var Ju=a(Ca);$n=s(Ju,"A",{href:!0,rel:!0});var Xu=a($n);pp=d(Xu,"Vectorization"),Xu.forEach(t),Ju.forEach(t),hp=l(io),Pa=s(io,"LI",{});var Ku=a(Pa);Mn=s(Ku,"A",{href:!0,rel:!0});var Yu=a(Mn);up=d(Yu,"Parallelization"),Yu.forEach(t),Ku.forEach(t),io.forEach(t),mp=l(Y),ge=s(Y,"DIV",{class:!0});var pt=a(ge);g(En.$$.fragment,pt),fp=l(pt),Pt=s(pt,"P",{});var ys=a(Pt);_p=d(ys,"The "),Na=s(ys,"CODE",{});var Qu=a(Na);gp=d(Qu,"FlaxBlenderbotPreTrainedModel"),Qu.forEach(t),bp=d(ys," forward method, overrides the "),Aa=s(ys,"CODE",{});var Zu=a(Aa);kp=d(Zu,"__call__"),Zu.forEach(t),vp=d(ys," special method."),ys.forEach(t),yp=l(pt),g(to.$$.fragment,pt),Tp=l(pt),Ia=s(pt,"P",{});var em=a(Ia);wp=d(em,"Conversation example:"),em.forEach(t),xp=l(pt),g(qn.$$.fragment,pt),pt.forEach(t),zp=l(Y),Ze=s(Y,"DIV",{class:!0});var Ts=a(Ze);g(jn.$$.fragment,Ts),Bp=l(Ts),Sa=s(Ts,"P",{});var tm=a(Sa);Fp=d(tm,"Example:"),tm.forEach(t),$p=l(Ts),g(Cn.$$.fragment,Ts),Ts.forEach(t),Mp=l(Y),et=s(Y,"DIV",{class:!0});var ws=a(et);g(Pn.$$.fragment,ws),Ep=l(ws),Oa=s(ws,"P",{});var om=a(Oa);qp=d(om,"Example:"),om.forEach(t),jp=l(ws),g(Nn.$$.fragment,ws),ws.forEach(t),Y.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(_m)),c(T,"id","blenderbot"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot"),c(f,"class","relative group"),c(Z,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(Z,"rel","nofollow"),c(P,"id","overview"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#overview"),c(D,"class","relative group"),c(G,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(G,"rel","nofollow"),c(W,"href","https://huggingface.co/sshleifer"),c(W,"rel","nofollow"),c($,"href","https://github.com/facebookresearch/ParlAI"),c($,"rel","nofollow"),c(pe,"id","implementation-notes"),c(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pe,"href","#implementation-notes"),c(C,"class","relative group"),c(oe,"href","https://arxiv.org/pdf/1706.03762.pdf"),c(oe,"rel","nofollow"),c(po,"href","https://huggingface.co/models?search=blenderbot"),c(po,"rel","nofollow"),c(Ln,"href","blenderbot_small"),c(Nt,"id","usage"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#usage"),c(_t,"class","relative group"),c(At,"id","transformers.BlenderbotConfig"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.BlenderbotConfig"),c(gt,"class","relative group"),c(Gn,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(_o,"href","https://huggingface.co/facebook/blenderbot-3B"),c(_o,"rel","nofollow"),c(Wn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Rn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(ne,"class","docstring"),c(It,"id","transformers.BlenderbotTokenizer"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.BlenderbotTokenizer"),c(vt,"class","relative group"),c(Un,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Hn,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Je,"class","docstring"),c(se,"class","docstring"),c(Ot,"id","transformers.BlenderbotTokenizerFast"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.BlenderbotTokenizerFast"),c(yt,"class","relative group"),c(Jn,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Xn,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Xe,"class","docstring"),c(ae,"class","docstring"),c(Dt,"id","transformers.BlenderbotModel"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.BlenderbotModel"),c(Tt,"class","relative group"),c(Yn,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(qo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qo,"rel","nofollow"),c(Qn,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(he,"class","docstring"),c(xe,"class","docstring"),c(Wt,"id","transformers.BlenderbotForConditionalGeneration"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#transformers.BlenderbotForConditionalGeneration"),c(xt,"class","relative group"),c(Zn,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(So,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(So,"rel","nofollow"),c(es,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(ue,"class","docstring"),c(ze,"class","docstring"),c(Ut,"id","transformers.BlenderbotForCausalLM"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.BlenderbotForCausalLM"),c(Bt,"class","relative group"),c(Ke,"class","docstring"),c(Go,"class","docstring"),c(Ht,"id","transformers.TFBlenderbotModel"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.TFBlenderbotModel"),c(Ft,"class","relative group"),c(ts,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Xo,"rel","nofollow"),c(os,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),c(me,"class","docstring"),c(re,"class","docstring"),c(Xt,"id","transformers.TFBlenderbotForConditionalGeneration"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.TFBlenderbotForConditionalGeneration"),c(Mt,"class","relative group"),c(ns,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(on,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(on,"rel","nofollow"),c(ss,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),c(fe,"class","docstring"),c(de,"class","docstring"),c(Qt,"id","transformers.FlaxBlenderbotModel"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.FlaxBlenderbotModel"),c(qt,"class","relative group"),c(as,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(cn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(cn,"rel","nofollow"),c(pn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(pn,"rel","nofollow"),c(hn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(hn,"rel","nofollow"),c(un,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(un,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(mn,"rel","nofollow"),c(_e,"class","docstring"),c(Ye,"class","docstring"),c(Qe,"class","docstring"),c(S,"class","docstring"),c(eo,"id","transformers.FlaxBlenderbotForConditionalGeneration"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),c(Ct,"class","relative group"),c(rs,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(zn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(zn,"rel","nofollow"),c(Bn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Bn,"rel","nofollow"),c(Fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Fn,"rel","nofollow"),c($n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c($n,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Mn,"rel","nofollow"),c(ge,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(O,"class","docstring")},m(o,h){e(document.head,u),p(o,B,h),p(o,f,h),e(f,T),e(T,z),b(x,z,null),e(f,w),e(f,F),e(F,Ee),p(o,ie,h),p(o,M,h),e(M,ke),e(ke,Q),e(M,qe),e(M,Z),e(Z,ee),e(M,je),p(o,Fe,h),p(o,D,h),e(D,P),e(P,ve),b(R,ve,null),e(D,E),e(D,j),e(j,Ce),p(o,J,h),p(o,X,h),e(X,Pe),e(X,G),e(G,Ne),e(X,Ae),p(o,N,h),p(o,le,h),e(le,te),p(o,$e,h),p(o,ce,h),e(ce,U),e(U,Ie),p(o,Me,h),p(o,q,h),e(q,Se),e(q,W),e(W,Oe),e(q,m),e(q,$),e($,ye),e(q,ht),p(o,He,h),p(o,C,h),e(C,pe),e(pe,Le),b(Te,Le,null),e(C,H),e(C,V),e(V,ut),p(o,Ve,h),p(o,A,h),e(A,we),e(we,mt),e(we,oe),e(oe,ft),e(we,Xr),e(A,Kr),e(A,co),e(co,Yr),e(co,po),e(po,Qr),e(co,Zr),e(A,ed),e(A,De),e(De,td),e(De,xs),e(xs,od),e(De,nd),e(De,zs),e(zs,sd),e(De,ad),e(De,Ln),e(Ln,rd),e(De,dd),p(o,Va,h),p(o,_t,h),e(_t,Nt),e(Nt,Bs),b(ho,Bs,null),e(_t,id),e(_t,Fs),e(Fs,ld),p(o,Ja,h),p(o,Dn,h),e(Dn,cd),p(o,Xa,h),b(uo,o,h),p(o,Ka,h),p(o,gt,h),e(gt,At),e(At,$s),b(mo,$s,null),e(gt,pd),e(gt,Ms),e(Ms,hd),p(o,Ya,h),p(o,ne,h),b(fo,ne,null),e(ne,ud),e(ne,bt),e(bt,md),e(bt,Gn),e(Gn,fd),e(bt,_d),e(bt,_o),e(_o,gd),e(bt,bd),e(ne,kd),e(ne,kt),e(kt,vd),e(kt,Wn),e(Wn,yd),e(kt,Td),e(kt,Rn),e(Rn,wd),e(kt,xd),e(ne,zd),e(ne,Es),e(Es,Bd),e(ne,Fd),b(go,ne,null),p(o,Qa,h),p(o,vt,h),e(vt,It),e(It,qs),b(bo,qs,null),e(vt,$d),e(vt,js),e(js,Md),p(o,Za,h),p(o,se,h),b(ko,se,null),e(se,Ed),e(se,Cs),e(Cs,qd),e(se,jd),e(se,St),e(St,Ps),e(Ps,Cd),e(St,Pd),e(St,Un),e(Un,Nd),e(St,Ad),e(se,Id),e(se,vo),e(vo,Sd),e(vo,Hn),e(Hn,Od),e(vo,Ld),e(se,Dd),e(se,Je),b(yo,Je,null),e(Je,Gd),e(Je,Ns),e(Ns,Wd),e(Je,Rd),e(Je,As),e(As,Vn),e(Vn,Ud),e(Vn,Is),e(Is,Hd),p(o,er,h),p(o,yt,h),e(yt,Ot),e(Ot,Ss),b(To,Ss,null),e(yt,Vd),e(yt,Os),e(Os,Jd),p(o,tr,h),p(o,ae,h),b(wo,ae,null),e(ae,Xd),e(ae,xo),e(xo,Kd),e(xo,Ls),e(Ls,Yd),e(xo,Qd),e(ae,Zd),e(ae,Lt),e(Lt,Ds),e(Ds,ei),e(Lt,ti),e(Lt,Jn),e(Jn,oi),e(Lt,ni),e(ae,si),e(ae,zo),e(zo,ai),e(zo,Xn),e(Xn,ri),e(zo,di),e(ae,ii),e(ae,Xe),b(Bo,Xe,null),e(Xe,li),e(Xe,Gs),e(Gs,ci),e(Xe,pi),e(Xe,Ws),e(Ws,Kn),e(Kn,hi),e(Kn,Rs),e(Rs,ui),p(o,or,h),p(o,Tt,h),e(Tt,Dt),e(Dt,Us),b(Fo,Us,null),e(Tt,mi),e(Tt,Hs),e(Hs,fi),p(o,nr,h),p(o,Ge,h),e(Ge,_i),e(Ge,Vs),e(Vs,gi),e(Ge,bi),e(Ge,Js),e(Js,ki),e(Ge,vi),e(Ge,Xs),e(Xs,yi),p(o,sr,h),p(o,xe,h),b($o,xe,null),e(xe,Ti),e(xe,Mo),e(Mo,wi),e(Mo,Yn),e(Yn,xi),e(Mo,zi),e(xe,Bi),e(xe,Eo),e(Eo,Fi),e(Eo,qo),e(qo,$i),e(Eo,Mi),e(xe,Ei),e(xe,he),b(jo,he,null),e(he,qi),e(he,wt),e(wt,ji),e(wt,Qn),e(Qn,Ci),e(wt,Pi),e(wt,Ks),e(Ks,Ni),e(wt,Ai),e(he,Ii),b(Gt,he,null),e(he,Si),e(he,Ys),e(Ys,Oi),e(he,Li),b(Co,he,null),p(o,ar,h),p(o,xt,h),e(xt,Wt),e(Wt,Qs),b(Po,Qs,null),e(xt,Di),e(xt,Zs),e(Zs,Gi),p(o,rr,h),p(o,We,h),e(We,Wi),e(We,ea),e(ea,Ri),e(We,Ui),e(We,ta),e(ta,Hi),e(We,Vi),e(We,oa),e(oa,Ji),p(o,dr,h),p(o,ze,h),b(No,ze,null),e(ze,Xi),e(ze,Ao),e(Ao,Ki),e(Ao,Zn),e(Zn,Yi),e(Ao,Qi),e(ze,Zi),e(ze,Io),e(Io,el),e(Io,So),e(So,tl),e(Io,ol),e(ze,nl),e(ze,ue),b(Oo,ue,null),e(ue,sl),e(ue,zt),e(zt,al),e(zt,es),e(es,rl),e(zt,dl),e(zt,na),e(na,il),e(zt,ll),e(ue,cl),b(Rt,ue,null),e(ue,pl),e(ue,sa),e(sa,hl),e(ue,ul),b(Lo,ue,null),p(o,ir,h),p(o,Bt,h),e(Bt,Ut),e(Ut,aa),b(Do,aa,null),e(Bt,ml),e(Bt,ra),e(ra,fl),p(o,lr,h),p(o,Go,h),e(Go,Ke),b(Wo,Ke,null),e(Ke,_l),e(Ke,da),e(da,gl),e(Ke,bl),b(Ro,Ke,null),p(o,cr,h),p(o,Ft,h),e(Ft,Ht),e(Ht,ia),b(Uo,ia,null),e(Ft,kl),e(Ft,la),e(la,vl),p(o,pr,h),p(o,re,h),b(Ho,re,null),e(re,yl),e(re,Vo),e(Vo,Tl),e(Vo,ts),e(ts,wl),e(Vo,xl),e(re,zl),e(re,Jo),e(Jo,Bl),e(Jo,Xo),e(Xo,Fl),e(Jo,$l),e(re,Ml),b(Vt,re,null),e(re,El),e(re,me),b(Ko,me,null),e(me,ql),e(me,$t),e($t,jl),e($t,os),e(os,Cl),e($t,Pl),e($t,ca),e(ca,Nl),e($t,Al),e(me,Il),b(Jt,me,null),e(me,Sl),e(me,pa),e(pa,Ol),e(me,Ll),b(Yo,me,null),p(o,hr,h),p(o,Mt,h),e(Mt,Xt),e(Xt,ha),b(Qo,ha,null),e(Mt,Dl),e(Mt,ua),e(ua,Gl),p(o,ur,h),p(o,de,h),b(Zo,de,null),e(de,Wl),e(de,en),e(en,Rl),e(en,ns),e(ns,Ul),e(en,Hl),e(de,Vl),e(de,tn),e(tn,Jl),e(tn,on),e(on,Xl),e(tn,Kl),e(de,Yl),b(Kt,de,null),e(de,Ql),e(de,fe),b(nn,fe,null),e(fe,Zl),e(fe,Et),e(Et,ec),e(Et,ss),e(ss,tc),e(Et,oc),e(Et,ma),e(ma,nc),e(Et,sc),e(fe,ac),b(Yt,fe,null),e(fe,rc),e(fe,fa),e(fa,dc),e(fe,ic),b(sn,fe,null),p(o,mr,h),p(o,qt,h),e(qt,Qt),e(Qt,_a),b(an,_a,null),e(qt,lc),e(qt,ga),e(ga,cc),p(o,fr,h),p(o,S,h),b(rn,S,null),e(S,pc),e(S,dn),e(dn,hc),e(dn,as),e(as,uc),e(dn,mc),e(S,fc),e(S,ln),e(ln,_c),e(ln,cn),e(cn,gc),e(ln,bc),e(S,kc),e(S,ba),e(ba,vc),e(S,yc),e(S,Re),e(Re,ka),e(ka,pn),e(pn,Tc),e(Re,wc),e(Re,va),e(va,hn),e(hn,xc),e(Re,zc),e(Re,ya),e(ya,un),e(un,Bc),e(Re,Fc),e(Re,Ta),e(Ta,mn),e(mn,$c),e(S,Mc),e(S,_e),b(fn,_e,null),e(_e,Ec),e(_e,jt),e(jt,qc),e(jt,wa),e(wa,jc),e(jt,Cc),e(jt,xa),e(xa,Pc),e(jt,Nc),e(_e,Ac),b(Zt,_e,null),e(_e,Ic),e(_e,za),e(za,Sc),e(_e,Oc),b(_n,_e,null),e(S,Lc),e(S,Ye),b(gn,Ye,null),e(Ye,Dc),e(Ye,Ba),e(Ba,Gc),e(Ye,Wc),b(bn,Ye,null),e(S,Rc),e(S,Qe),b(kn,Qe,null),e(Qe,Uc),e(Qe,Fa),e(Fa,Hc),e(Qe,Vc),b(vn,Qe,null),p(o,_r,h),p(o,Ct,h),e(Ct,eo),e(eo,$a),b(yn,$a,null),e(Ct,Jc),e(Ct,Ma),e(Ma,Xc),p(o,gr,h),p(o,O,h),b(Tn,O,null),e(O,Kc),e(O,wn),e(wn,Yc),e(wn,rs),e(rs,Qc),e(wn,Zc),e(O,ep),e(O,xn),e(xn,tp),e(xn,zn),e(zn,op),e(xn,np),e(O,sp),e(O,Ea),e(Ea,ap),e(O,rp),e(O,Ue),e(Ue,qa),e(qa,Bn),e(Bn,dp),e(Ue,ip),e(Ue,ja),e(ja,Fn),e(Fn,lp),e(Ue,cp),e(Ue,Ca),e(Ca,$n),e($n,pp),e(Ue,hp),e(Ue,Pa),e(Pa,Mn),e(Mn,up),e(O,mp),e(O,ge),b(En,ge,null),e(ge,fp),e(ge,Pt),e(Pt,_p),e(Pt,Na),e(Na,gp),e(Pt,bp),e(Pt,Aa),e(Aa,kp),e(Pt,vp),e(ge,yp),b(to,ge,null),e(ge,Tp),e(ge,Ia),e(Ia,wp),e(ge,xp),b(qn,ge,null),e(O,zp),e(O,Ze),b(jn,Ze,null),e(Ze,Bp),e(Ze,Sa),e(Sa,Fp),e(Ze,$p),b(Cn,Ze,null),e(O,Mp),e(O,et),b(Pn,et,null),e(et,Ep),e(et,Oa),e(Oa,qp),e(et,jp),b(Nn,et,null),br=!0},p(o,[h]){const An={};h&2&&(An.$$scope={dirty:h,ctx:o}),Gt.$set(An);const La={};h&2&&(La.$$scope={dirty:h,ctx:o}),Rt.$set(La);const Da={};h&2&&(Da.$$scope={dirty:h,ctx:o}),Vt.$set(Da);const Ga={};h&2&&(Ga.$$scope={dirty:h,ctx:o}),Jt.$set(Ga);const oo={};h&2&&(oo.$$scope={dirty:h,ctx:o}),Kt.$set(oo);const Wa={};h&2&&(Wa.$$scope={dirty:h,ctx:o}),Yt.$set(Wa);const Ra={};h&2&&(Ra.$$scope={dirty:h,ctx:o}),Zt.$set(Ra);const In={};h&2&&(In.$$scope={dirty:h,ctx:o}),to.$set(In)},i(o){br||(k(x.$$.fragment,o),k(R.$$.fragment,o),k(Te.$$.fragment,o),k(ho.$$.fragment,o),k(uo.$$.fragment,o),k(mo.$$.fragment,o),k(fo.$$.fragment,o),k(go.$$.fragment,o),k(bo.$$.fragment,o),k(ko.$$.fragment,o),k(yo.$$.fragment,o),k(To.$$.fragment,o),k(wo.$$.fragment,o),k(Bo.$$.fragment,o),k(Fo.$$.fragment,o),k($o.$$.fragment,o),k(jo.$$.fragment,o),k(Gt.$$.fragment,o),k(Co.$$.fragment,o),k(Po.$$.fragment,o),k(No.$$.fragment,o),k(Oo.$$.fragment,o),k(Rt.$$.fragment,o),k(Lo.$$.fragment,o),k(Do.$$.fragment,o),k(Wo.$$.fragment,o),k(Ro.$$.fragment,o),k(Uo.$$.fragment,o),k(Ho.$$.fragment,o),k(Vt.$$.fragment,o),k(Ko.$$.fragment,o),k(Jt.$$.fragment,o),k(Yo.$$.fragment,o),k(Qo.$$.fragment,o),k(Zo.$$.fragment,o),k(Kt.$$.fragment,o),k(nn.$$.fragment,o),k(Yt.$$.fragment,o),k(sn.$$.fragment,o),k(an.$$.fragment,o),k(rn.$$.fragment,o),k(fn.$$.fragment,o),k(Zt.$$.fragment,o),k(_n.$$.fragment,o),k(gn.$$.fragment,o),k(bn.$$.fragment,o),k(kn.$$.fragment,o),k(vn.$$.fragment,o),k(yn.$$.fragment,o),k(Tn.$$.fragment,o),k(En.$$.fragment,o),k(to.$$.fragment,o),k(qn.$$.fragment,o),k(jn.$$.fragment,o),k(Cn.$$.fragment,o),k(Pn.$$.fragment,o),k(Nn.$$.fragment,o),br=!0)},o(o){v(x.$$.fragment,o),v(R.$$.fragment,o),v(Te.$$.fragment,o),v(ho.$$.fragment,o),v(uo.$$.fragment,o),v(mo.$$.fragment,o),v(fo.$$.fragment,o),v(go.$$.fragment,o),v(bo.$$.fragment,o),v(ko.$$.fragment,o),v(yo.$$.fragment,o),v(To.$$.fragment,o),v(wo.$$.fragment,o),v(Bo.$$.fragment,o),v(Fo.$$.fragment,o),v($o.$$.fragment,o),v(jo.$$.fragment,o),v(Gt.$$.fragment,o),v(Co.$$.fragment,o),v(Po.$$.fragment,o),v(No.$$.fragment,o),v(Oo.$$.fragment,o),v(Rt.$$.fragment,o),v(Lo.$$.fragment,o),v(Do.$$.fragment,o),v(Wo.$$.fragment,o),v(Ro.$$.fragment,o),v(Uo.$$.fragment,o),v(Ho.$$.fragment,o),v(Vt.$$.fragment,o),v(Ko.$$.fragment,o),v(Jt.$$.fragment,o),v(Yo.$$.fragment,o),v(Qo.$$.fragment,o),v(Zo.$$.fragment,o),v(Kt.$$.fragment,o),v(nn.$$.fragment,o),v(Yt.$$.fragment,o),v(sn.$$.fragment,o),v(an.$$.fragment,o),v(rn.$$.fragment,o),v(fn.$$.fragment,o),v(Zt.$$.fragment,o),v(_n.$$.fragment,o),v(gn.$$.fragment,o),v(bn.$$.fragment,o),v(kn.$$.fragment,o),v(vn.$$.fragment,o),v(yn.$$.fragment,o),v(Tn.$$.fragment,o),v(En.$$.fragment,o),v(to.$$.fragment,o),v(qn.$$.fragment,o),v(jn.$$.fragment,o),v(Cn.$$.fragment,o),v(Pn.$$.fragment,o),v(Nn.$$.fragment,o),br=!1},d(o){t(u),o&&t(B),o&&t(f),y(x),o&&t(ie),o&&t(M),o&&t(Fe),o&&t(D),y(R),o&&t(J),o&&t(X),o&&t(N),o&&t(le),o&&t($e),o&&t(ce),o&&t(Me),o&&t(q),o&&t(He),o&&t(C),y(Te),o&&t(Ve),o&&t(A),o&&t(Va),o&&t(_t),y(ho),o&&t(Ja),o&&t(Dn),o&&t(Xa),y(uo,o),o&&t(Ka),o&&t(gt),y(mo),o&&t(Ya),o&&t(ne),y(fo),y(go),o&&t(Qa),o&&t(vt),y(bo),o&&t(Za),o&&t(se),y(ko),y(yo),o&&t(er),o&&t(yt),y(To),o&&t(tr),o&&t(ae),y(wo),y(Bo),o&&t(or),o&&t(Tt),y(Fo),o&&t(nr),o&&t(Ge),o&&t(sr),o&&t(xe),y($o),y(jo),y(Gt),y(Co),o&&t(ar),o&&t(xt),y(Po),o&&t(rr),o&&t(We),o&&t(dr),o&&t(ze),y(No),y(Oo),y(Rt),y(Lo),o&&t(ir),o&&t(Bt),y(Do),o&&t(lr),o&&t(Go),y(Wo),y(Ro),o&&t(cr),o&&t(Ft),y(Uo),o&&t(pr),o&&t(re),y(Ho),y(Vt),y(Ko),y(Jt),y(Yo),o&&t(hr),o&&t(Mt),y(Qo),o&&t(ur),o&&t(de),y(Zo),y(Kt),y(nn),y(Yt),y(sn),o&&t(mr),o&&t(qt),y(an),o&&t(fr),o&&t(S),y(rn),y(fn),y(Zt),y(_n),y(gn),y(bn),y(kn),y(vn),o&&t(_r),o&&t(Ct),y(yn),o&&t(gr),o&&t(O),y(Tn),y(En),y(to),y(qn),y(jn),y(Cn),y(Pn),y(Nn)}}}const _m={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function gm(L,u,B){let{fw:f}=u;return L.$$set=T=>{"fw"in T&&B(0,f=T.fw)},[f]}class xm extends nm{constructor(u){super();sm(this,u,gm,fm,am,{fw:0})}}export{xm as default,_m as metadata};
