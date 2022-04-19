import{S as xf,i as zf,s as Bf,e as n,k as i,w as f,t as s,M as Ff,c as a,d as t,m as l,a as r,x as _,h as d,b as c,F as e,g as p,y as g,q as b,o as y,B as k,v as $f}from"../../chunks/vendor-6b77c823.js";import{T as ho}from"../../chunks/Tip-39098574.js";import{D as O}from"../../chunks/Docstring-53452dc4.js";import{C as Ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as pe}from"../../chunks/IconCopyLink-7a11ce68.js";function qf(U){let u,B,v,x,z;return{c(){u=n("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=a(w,"P",{});var T=r(u);B=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(T,"CODE",{});var F=r(v);x=d(F,"Module"),F.forEach(t),z=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,B),e(u,v),e(v,x),e(u,z)},d(w){w&&t(u)}}}function Ef(U){let u,B,v,x,z;return{c(){u=n("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=a(w,"P",{});var T=r(u);B=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(T,"CODE",{});var F=r(v);x=d(F,"Module"),F.forEach(t),z=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,B),e(u,v),e(v,x),e(u,z)},d(w){w&&t(u)}}}function Mf(U){let u,B,v,x,z,w,T,F,Me,he,q,ke,te,Ce,oe,ne,je,Fe,D,P,ve,R,E,C,Oe,J,Q,Pe,G,Ne,Ae,N,ue,ae,$e,me,H,Ie,qe,M,Le,W,Se;return{c(){u=n("p"),B=s("TF 2.0 models accepts two formats as inputs:"),v=i(),x=n("ul"),z=n("li"),w=s("having all inputs as keyword arguments (like PyTorch models), or"),T=i(),F=n("li"),Me=s("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),q=n("p"),ke=s("This second option is useful when using "),te=n("code"),Ce=s("tf.keras.Model.fit"),oe=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=s("model(inputs)"),Fe=s("."),D=i(),P=n("p"),ve=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),E=n("ul"),C=n("li"),Oe=s("a single Tensor with "),J=n("code"),Q=s("input_ids"),Pe=s(" only and nothing else: "),G=n("code"),Ne=s("model(input_ids)"),Ae=i(),N=n("li"),ue=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=s("model([input_ids, attention_mask])"),me=s(" or "),H=n("code"),Ie=s("model([input_ids, attention_mask, token_type_ids])"),qe=i(),M=n("li"),Le=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=n("code"),Se=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=a(m,"P",{});var $=r(u);B=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(m),x=a(m,"UL",{});var Te=r(x);z=a(Te,"LI",{});var ht=r(z);w=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),T=l(Te),F=a(Te,"LI",{});var Ke=r(F);Me=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),Te.forEach(t),he=l(m),q=a(m,"P",{});var j=r(q);ke=d(j,"This second option is useful when using "),te=a(j,"CODE",{});var fe=r(te);Ce=d(fe,"tf.keras.Model.fit"),fe.forEach(t),oe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=a(j,"CODE",{});var De=r(ne);je=d(De,"model(inputs)"),De.forEach(t),Fe=d(j,"."),j.forEach(t),D=l(m),P=a(m,"P",{});var we=r(P);ve=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),E=a(m,"UL",{});var V=r(E);C=a(V,"LI",{});var K=r(C);Oe=d(K,"a single Tensor with "),J=a(K,"CODE",{});var ut=r(J);Q=d(ut,"input_ids"),ut.forEach(t),Pe=d(K," only and nothing else: "),G=a(K,"CODE",{});var Je=r(G);Ne=d(Je,"model(input_ids)"),Je.forEach(t),K.forEach(t),Ae=l(V),N=a(V,"LI",{});var A=r(N);ue=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=a(A,"CODE",{});var xe=r(ae);$e=d(xe,"model([input_ids, attention_mask])"),xe.forEach(t),me=d(A," or "),H=a(A,"CODE",{});var mt=r(H);Ie=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),qe=l(V),M=a(V,"LI",{});var re=r(M);Le=d(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(re,"CODE",{});var ft=r(W);Se=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),re.forEach(t),V.forEach(t)},m(m,$){p(m,u,$),e(u,B),p(m,v,$),p(m,x,$),e(x,z),e(z,w),e(x,T),e(x,F),e(F,Me),p(m,he,$),p(m,q,$),e(q,ke),e(q,te),e(te,Ce),e(q,oe),e(q,ne),e(ne,je),e(q,Fe),p(m,D,$),p(m,P,$),e(P,ve),p(m,R,$),p(m,E,$),e(E,C),e(C,Oe),e(C,J),e(J,Q),e(C,Pe),e(C,G),e(G,Ne),e(E,Ae),e(E,N),e(N,ue),e(N,ae),e(ae,$e),e(N,me),e(N,H),e(H,Ie),e(E,qe),e(E,M),e(M,Le),e(M,W),e(W,Se)},d(m){m&&t(u),m&&t(v),m&&t(x),m&&t(he),m&&t(q),m&&t(D),m&&t(P),m&&t(R),m&&t(E)}}}function Cf(U){let u,B,v,x,z;return{c(){u=n("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=a(w,"P",{});var T=r(u);B=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(T,"CODE",{});var F=r(v);x=d(F,"Module"),F.forEach(t),z=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,B),e(u,v),e(v,x),e(u,z)},d(w){w&&t(u)}}}function jf(U){let u,B,v,x,z,w,T,F,Me,he,q,ke,te,Ce,oe,ne,je,Fe,D,P,ve,R,E,C,Oe,J,Q,Pe,G,Ne,Ae,N,ue,ae,$e,me,H,Ie,qe,M,Le,W,Se;return{c(){u=n("p"),B=s("TF 2.0 models accepts two formats as inputs:"),v=i(),x=n("ul"),z=n("li"),w=s("having all inputs as keyword arguments (like PyTorch models), or"),T=i(),F=n("li"),Me=s("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),q=n("p"),ke=s("This second option is useful when using "),te=n("code"),Ce=s("tf.keras.Model.fit"),oe=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=s("model(inputs)"),Fe=s("."),D=i(),P=n("p"),ve=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),E=n("ul"),C=n("li"),Oe=s("a single Tensor with "),J=n("code"),Q=s("input_ids"),Pe=s(" only and nothing else: "),G=n("code"),Ne=s("model(input_ids)"),Ae=i(),N=n("li"),ue=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=s("model([input_ids, attention_mask])"),me=s(" or "),H=n("code"),Ie=s("model([input_ids, attention_mask, token_type_ids])"),qe=i(),M=n("li"),Le=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=n("code"),Se=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=a(m,"P",{});var $=r(u);B=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(m),x=a(m,"UL",{});var Te=r(x);z=a(Te,"LI",{});var ht=r(z);w=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),T=l(Te),F=a(Te,"LI",{});var Ke=r(F);Me=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),Te.forEach(t),he=l(m),q=a(m,"P",{});var j=r(q);ke=d(j,"This second option is useful when using "),te=a(j,"CODE",{});var fe=r(te);Ce=d(fe,"tf.keras.Model.fit"),fe.forEach(t),oe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=a(j,"CODE",{});var De=r(ne);je=d(De,"model(inputs)"),De.forEach(t),Fe=d(j,"."),j.forEach(t),D=l(m),P=a(m,"P",{});var we=r(P);ve=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),E=a(m,"UL",{});var V=r(E);C=a(V,"LI",{});var K=r(C);Oe=d(K,"a single Tensor with "),J=a(K,"CODE",{});var ut=r(J);Q=d(ut,"input_ids"),ut.forEach(t),Pe=d(K," only and nothing else: "),G=a(K,"CODE",{});var Je=r(G);Ne=d(Je,"model(input_ids)"),Je.forEach(t),K.forEach(t),Ae=l(V),N=a(V,"LI",{});var A=r(N);ue=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=a(A,"CODE",{});var xe=r(ae);$e=d(xe,"model([input_ids, attention_mask])"),xe.forEach(t),me=d(A," or "),H=a(A,"CODE",{});var mt=r(H);Ie=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),qe=l(V),M=a(V,"LI",{});var re=r(M);Le=d(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(re,"CODE",{});var ft=r(W);Se=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),re.forEach(t),V.forEach(t)},m(m,$){p(m,u,$),e(u,B),p(m,v,$),p(m,x,$),e(x,z),e(z,w),e(x,T),e(x,F),e(F,Me),p(m,he,$),p(m,q,$),e(q,ke),e(q,te),e(te,Ce),e(q,oe),e(q,ne),e(ne,je),e(q,Fe),p(m,D,$),p(m,P,$),e(P,ve),p(m,R,$),p(m,E,$),e(E,C),e(C,Oe),e(C,J),e(J,Q),e(C,Pe),e(C,G),e(G,Ne),e(E,Ae),e(E,N),e(N,ue),e(N,ae),e(ae,$e),e(N,me),e(N,H),e(H,Ie),e(E,qe),e(E,M),e(M,Le),e(M,W),e(W,Se)},d(m){m&&t(u),m&&t(v),m&&t(x),m&&t(he),m&&t(q),m&&t(D),m&&t(P),m&&t(R),m&&t(E)}}}function Of(U){let u,B,v,x,z;return{c(){u=n("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=a(w,"P",{});var T=r(u);B=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(T,"CODE",{});var F=r(v);x=d(F,"Module"),F.forEach(t),z=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,B),e(u,v),e(v,x),e(u,z)},d(w){w&&t(u)}}}function Pf(U){let u,B,v,x,z;return{c(){u=n("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=a(w,"P",{});var T=r(u);B=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(T,"CODE",{});var F=r(v);x=d(F,"Module"),F.forEach(t),z=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,B),e(u,v),e(v,x),e(u,z)},d(w){w&&t(u)}}}function Nf(U){let u,B,v,x,z;return{c(){u=n("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=a(w,"P",{});var T=r(u);B=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(T,"CODE",{});var F=r(v);x=d(F,"Module"),F.forEach(t),z=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,B),e(u,v),e(v,x),e(u,z)},d(w){w&&t(u)}}}function Af(U){let u,B,v,x,z,w,T,F,Me,he,q,ke,te,Ce,oe,ne,je,Fe,D,P,ve,R,E,C,Oe,J,Q,Pe,G,Ne,Ae,N,ue,ae,$e,me,H,Ie,qe,M,Le,W,Se,m,$,Te,ht,Ke,j,fe,De,we,V,K,ut,Je,A,xe,mt,re,ft,$d,qd,uo,Ed,mo,Md,Cd,jd,Ge,Od,qa,Pd,Nd,Ea,Ad,Id,Un,Ld,Sd,Ts,_t,Nt,Ma,fo,Dd,Ca,Gd,ws,Rn,Wd,xs,_o,zs,gt,At,ja,go,Ud,Oa,Rd,Bs,se,bo,Hd,bt,Vd,Hn,Kd,Jd,yo,Qd,Xd,Yd,yt,Zd,Vn,ei,ti,Kn,oi,ni,ai,Pa,ri,si,ko,Fs,kt,It,Na,vo,di,Aa,ii,$s,de,To,li,Ia,ci,pi,Lt,La,hi,ui,Jn,mi,fi,_i,wo,gi,Qn,bi,yi,ki,Qe,xo,vi,Sa,Ti,wi,Da,Xn,xi,Ga,zi,qs,vt,St,Wa,zo,Bi,Ua,Fi,Es,ie,Bo,$i,Fo,qi,Ra,Ei,Mi,Ci,Dt,Ha,ji,Oi,Yn,Pi,Ni,Ai,$o,Ii,Zn,Li,Si,Di,Xe,qo,Gi,Va,Wi,Ui,Ka,ea,Ri,Ja,Hi,Ms,Tt,Gt,Qa,Eo,Vi,Xa,Ki,Cs,We,Ji,Ya,Qi,Xi,Za,Yi,Zi,er,el,js,ze,Mo,tl,Co,ol,ta,nl,al,rl,jo,sl,Oo,dl,il,ll,_e,Po,cl,wt,pl,oa,hl,ul,tr,ml,fl,_l,Wt,gl,or,bl,yl,No,Os,xt,Ut,nr,Ao,kl,ar,vl,Ps,Ue,Tl,na,wl,xl,rr,zl,Bl,sr,Fl,Ns,Be,Io,$l,Lo,ql,aa,El,Ml,Cl,So,jl,Do,Ol,Pl,Nl,ge,Go,Al,zt,Il,ra,Ll,Sl,dr,Dl,Gl,Wl,Rt,Ul,ir,Rl,Hl,Wo,As,Bt,Ht,lr,Uo,Vl,cr,Kl,Is,Ft,Ro,Jl,Ye,Ho,Ql,pr,Xl,Yl,Vo,Ls,$t,Vt,hr,Ko,Zl,ur,ec,Ss,le,Jo,tc,Qo,oc,sa,nc,ac,rc,Xo,sc,Yo,dc,ic,lc,Kt,cc,be,Zo,pc,qt,hc,da,uc,mc,mr,fc,_c,gc,Jt,bc,fr,yc,kc,en,Ds,Et,Qt,_r,tn,vc,gr,Tc,Gs,ce,on,wc,nn,xc,ia,zc,Bc,Fc,an,$c,rn,qc,Ec,Mc,Xt,Cc,X,sn,jc,Mt,Oc,la,Pc,Nc,br,Ac,Ic,Lc,Yt,Sc,yr,Dc,Gc,kr,vr,Tr,wr,Wc,Uc,xr,zr,Br,dn,Rc,Fr,Hc,Vc,Ws,Ct,Zt,$r,ln,Kc,qr,Jc,Us,I,cn,Qc,pn,Xc,ca,Yc,Zc,ep,hn,tp,un,op,np,ap,Er,rp,sp,Re,Mr,mn,dp,ip,Cr,fn,lp,cp,jr,_n,pp,hp,Or,gn,up,mp,ye,bn,fp,jt,_p,Pr,gp,bp,Nr,yp,kp,vp,eo,Tp,Ar,wp,xp,yn,zp,Ze,kn,Bp,Ir,Fp,$p,vn,qp,et,Tn,Ep,Lr,Mp,Cp,wn,Rs,Ot,to,Sr,xn,jp,Dr,Op,Hs,L,zn,Pp,Bn,Np,pa,Ap,Ip,Lp,Fn,Sp,$n,Dp,Gp,Wp,Gr,Up,Rp,He,Wr,qn,Hp,Vp,Ur,En,Kp,Jp,Rr,Mn,Qp,Xp,Hr,Cn,Yp,Zp,S,jn,eh,Pt,th,Vr,oh,nh,Kr,ah,rh,sh,oo,dh,Jr,ih,lh,Qr,Xr,Yr,Zr,ch,ph,es,ts,os,ns,hh,uh,as,rs,ss,ds,mh,fh,is,ls,On,no,ao,cs,Pn,_h,ps,gh,bh,hs,yh,kh,tt,Nn,vh,us,Th,wh,An,xh,ot,In,zh,ms,Bh,Fh,Ln,Vs;return w=new pe({}),R=new pe({}),we=new pe({}),fo=new pe({}),_o=new Ve({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

mname = "facebook/blenderbot-400M-distill"
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print(tokenizer.batch_decode(reply_ids))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(reply_ids))
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),go=new pe({}),bo=new O({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Blenderbot model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> or <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotModel">TFBlenderbotModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BlenderbotConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BlenderbotConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BlenderbotConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BlenderbotConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BlenderbotConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BlenderbotConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BlenderbotConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BlenderbotConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BlenderbotConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BlenderbotConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BlenderbotConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BlenderbotConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BlenderbotConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BlenderbotConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/configuration_blenderbot.py#L36"}}),ko=new Ve({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

# Initializing a Blenderbot facebook/blenderbot-3B style configuration
configuration = BlenderbotConfig()

# Initializing a model from the facebook/blenderbot-3B style configuration
model = BlenderbotModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotModel, BlenderbotConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Blenderbot facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),vo=new pe({}),To=new O({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),xo=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zo=new pe({}),Bo=new O({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),qo=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L61",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Eo=new pe({}),Mo=new O({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1082"}}),Po=new O({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1120",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),Wt=new ho({props:{$$slots:{default:[qf]},$$scope:{ctx:U}}}),No=new Ve({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

model = BlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">1280</span>]`}}),Ao=new pe({}),Io=new O({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1218"}}),Go=new O({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1275",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),Rt=new ho({props:{$$slots:{default:[Ef]},$$scope:{ctx:U}}}),Wo=new Ve({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

mname = "facebook/blenderbot-400M-distill"
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
print("Human: ", UTTERANCE)

inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])

REPLY = "I'm not sure"
print("Human: ", REPLY)

NEXT_UTTERANCE = (
    "My friends are cool but they eat too many carbs.</s> <s>That's unfortunate. "
    "Are they trying to lose weight or are they just trying to be healthier?</s> "
    "<s> I'm not sure."
)
inputs = tokenizer([NEXT_UTTERANCE], return_tensors="pt")
next_reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
Human:  My friends are cool but they eat too many carbs.

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])
Bot: That<span class="hljs-string">&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?

&gt;&gt;&gt; REPLY = &quot;I&#x27;</span>m <span class="hljs-keyword">not</span> sure<span class="hljs-string">&quot;
&gt;&gt;&gt; print(&quot;</span>Human: <span class="hljs-string">&quot;, REPLY)
Human: I&#x27;m not sure

&gt;&gt;&gt; NEXT_UTTERANCE = (
...     &quot;</span>My friends are cool but they eat too many carbs.&lt;/s&gt; &lt;s&gt;That<span class="hljs-string">&#x27;s unfortunate. &quot;
...     &quot;Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt; &quot;
...     &quot;&lt;s&gt; I&#x27;</span>m <span class="hljs-keyword">not</span> sure.<span class="hljs-string">&quot;
... )
&gt;&gt;&gt; inputs = tokenizer([NEXT_UTTERANCE], return_tensors=&quot;</span>pt<span class="hljs-string">&quot;)
&gt;&gt;&gt; next_reply_ids = model.generate(**inputs)
&gt;&gt;&gt; print(&quot;</span>Bot: <span class="hljs-string">&quot;, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])
Bot:   That&#x27;s too bad. Have you tried encouraging them to change their eating habits?</span>`}}),Uo=new pe({}),Ro=new O({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1411"}}),Ho=new O({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BlenderbotForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BlenderbotForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1442",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),Vo=new Ve({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = BlenderbotForCausalLM.from_pretrained(
    "facebook/blenderbot-400M-distill", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),Ko=new pe({}),Jo=new O({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1109"}}),Kt=new ho({props:{$$slots:{default:[Mf]},$$scope:{ctx:U}}}),Zo=new O({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1134",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
`}}),Jt=new ho({props:{$$slots:{default:[Cf]},$$scope:{ctx:U}}}),en=new Ve({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
import tensorflow as tf

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = TFBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, TFBlenderbotModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tn=new pe({}),on=new O({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1208"}}),Xt=new ho({props:{$$slots:{default:[jf]},$$scope:{ctx:U}}}),sn=new O({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1254",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
`}}),Yt=new ho({props:{$$slots:{default:[Of]},$$scope:{ctx:U}}}),ln=new pe({}),cn=new O({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1218"}}),bn=new O({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1153",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),eo=new ho({props:{$$slots:{default:[Pf]},$$scope:{ctx:U}}}),yn=new Ve({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),kn=new O({props:{name:"encode",anchor:"transformers.FlaxBlenderbotModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L974",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
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
`}}),vn=new Ve({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Tn=new O({props:{name:"decode",anchor:"transformers.FlaxBlenderbotModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1037",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
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
`}}),wn=new Ve({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),xn=new pe({}),zn=new O({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1305"}}),jn=new O({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1153",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),oo=new ho({props:{$$slots:{default:[Nf]},$$scope:{ctx:U}}}),Pn=new pe({}),Nn=new O({props:{name:"encode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L974",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
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
`}}),An=new Ve({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),In=new O({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1309",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
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
`}}),Ln=new Ve({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),B=i(),v=n("h1"),x=n("a"),z=n("span"),f(w.$$.fragment),T=i(),F=n("span"),Me=s("Blenderbot"),he=i(),q=n("p"),ke=n("strong"),te=s("DISCLAIMER:"),Ce=s(" If you see something strange, file a "),oe=n("a"),ne=s("Github Issue"),je=s(" ."),Fe=i(),D=n("h2"),P=n("a"),ve=n("span"),f(R.$$.fragment),E=i(),C=n("span"),Oe=s("Overview"),J=i(),Q=n("p"),Pe=s("The Blender chatbot model was proposed in "),G=n("a"),Ne=s("Recipes for building an open-domain chatbot"),Ae=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),N=i(),ue=n("p"),ae=s("The abstract of the paper is the following:"),$e=i(),me=n("p"),H=n("em"),Ie=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),qe=i(),M=n("p"),Le=s("This model was contributed by "),W=n("a"),Se=s("sshleifer"),m=s(". The authors\u2019 code can be found "),$=n("a"),Te=s("here"),ht=s(" ."),Ke=i(),j=n("h2"),fe=n("a"),De=n("span"),f(we.$$.fragment),V=i(),K=n("span"),ut=s("Implementation Notes"),Je=i(),A=n("ul"),xe=n("li"),mt=s("Blenderbot uses a standard "),re=n("a"),ft=s("seq2seq model transformer"),$d=s(" based architecture."),qd=i(),uo=n("li"),Ed=s("Available checkpoints can be found in the "),mo=n("a"),Md=s("model hub"),Cd=s("."),jd=i(),Ge=n("li"),Od=s("This is the "),qa=n("em"),Pd=s("default"),Nd=s(` Blenderbot model class. However, some smaller checkpoints, such as
`),Ea=n("code"),Ad=s("facebook/blenderbot_small_90M"),Id=s(`, have a different architecture and consequently should be used with
`),Un=n("a"),Ld=s("BlenderbotSmall"),Sd=s("."),Ts=i(),_t=n("h2"),Nt=n("a"),Ma=n("span"),f(fo.$$.fragment),Dd=i(),Ca=n("span"),Gd=s("Usage"),ws=i(),Rn=n("p"),Wd=s("Here is an example of model usage:"),xs=i(),f(_o.$$.fragment),zs=i(),gt=n("h2"),At=n("a"),ja=n("span"),f(go.$$.fragment),Ud=i(),Oa=n("span"),Rd=s("BlenderbotConfig"),Bs=i(),se=n("div"),f(bo.$$.fragment),Hd=i(),bt=n("p"),Vd=s("This is the configuration class to store the configuration of a "),Hn=n("a"),Kd=s("BlenderbotModel"),Jd=s(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),yo=n("a"),Qd=s("facebook/blenderbot-3B"),Xd=s(" architecture."),Yd=i(),yt=n("p"),Zd=s("Configuration objects inherit from "),Vn=n("a"),ei=s("PretrainedConfig"),ti=s(` and can be used to control the model outputs. Read the
documentation from `),Kn=n("a"),oi=s("PretrainedConfig"),ni=s(" for more information."),ai=i(),Pa=n("p"),ri=s("Example:"),si=i(),f(ko.$$.fragment),Fs=i(),kt=n("h2"),It=n("a"),Na=n("span"),f(vo.$$.fragment),di=i(),Aa=n("span"),ii=s("BlenderbotTokenizer"),$s=i(),de=n("div"),f(To.$$.fragment),li=i(),Ia=n("p"),ci=s("Construct a Blenderbot tokenizer."),pi=i(),Lt=n("p"),La=n("code"),hi=s("Blenderbot"),ui=s(" is nearly identical to "),Jn=n("a"),mi=s("RobertaTokenizer"),fi=s(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),_i=i(),wo=n("p"),gi=s("Refer to superclass "),Qn=n("a"),bi=s("RobertaTokenizer"),yi=s(" for usage examples and documentation concerning parameters."),ki=i(),Qe=n("div"),f(xo.$$.fragment),vi=i(),Sa=n("p"),Ti=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),wi=i(),Da=n("ul"),Xn=n("li"),xi=s("single sequence: "),Ga=n("code"),zi=s("X </s>"),qs=i(),vt=n("h2"),St=n("a"),Wa=n("span"),f(zo.$$.fragment),Bi=i(),Ua=n("span"),Fi=s("BlenderbotTokenizerFast"),Es=i(),ie=n("div"),f(Bo.$$.fragment),$i=i(),Fo=n("p"),qi=s("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ra=n("em"),Ei=s("tokenizers"),Mi=s(" library)."),Ci=i(),Dt=n("p"),Ha=n("code"),ji=s("BlenderbotFast"),Oi=s(" is nearly identical to "),Yn=n("a"),Pi=s("RobertaTokenizerFast"),Ni=s(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Ai=i(),$o=n("p"),Ii=s("Refer to superclass "),Zn=n("a"),Li=s("RobertaTokenizerFast"),Si=s(" for usage examples and documentation concerning parameters."),Di=i(),Xe=n("div"),f(qo.$$.fragment),Gi=i(),Va=n("p"),Wi=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ui=i(),Ka=n("ul"),ea=n("li"),Ri=s("single sequence: "),Ja=n("code"),Hi=s("X </s>"),Ms=i(),Tt=n("h2"),Gt=n("a"),Qa=n("span"),f(Eo.$$.fragment),Vi=i(),Xa=n("span"),Ki=s("BlenderbotModel"),Cs=i(),We=n("p"),Ji=s("See "),Ya=n("code"),Qi=s("transformers.BartModel"),Xi=s(" for arguments to "),Za=n("em"),Yi=s("forward"),Zi=s(" and "),er=n("em"),el=s("generate"),js=i(),ze=n("div"),f(Mo.$$.fragment),tl=i(),Co=n("p"),ol=s(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ta=n("a"),nl=s("PreTrainedModel"),al=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rl=i(),jo=n("p"),sl=s("This model is also a PyTorch "),Oo=n("a"),dl=s("torch.nn.Module"),il=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ll=i(),_e=n("div"),f(Po.$$.fragment),cl=i(),wt=n("p"),pl=s("The "),oa=n("a"),hl=s("BlenderbotModel"),ul=s(" forward method, overrides the "),tr=n("code"),ml=s("__call__"),fl=s(" special method."),_l=i(),f(Wt.$$.fragment),gl=i(),or=n("p"),bl=s("Example:"),yl=i(),f(No.$$.fragment),Os=i(),xt=n("h2"),Ut=n("a"),nr=n("span"),f(Ao.$$.fragment),kl=i(),ar=n("span"),vl=s("BlenderbotForConditionalGeneration"),Ps=i(),Ue=n("p"),Tl=s("See "),na=n("a"),wl=s("BartForConditionalGeneration"),xl=s(" for arguments to "),rr=n("em"),zl=s("forward"),Bl=s(" and "),sr=n("em"),Fl=s("generate"),Ns=i(),Be=n("div"),f(Io.$$.fragment),$l=i(),Lo=n("p"),ql=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),aa=n("a"),El=s("PreTrainedModel"),Ml=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cl=i(),So=n("p"),jl=s("This model is also a PyTorch "),Do=n("a"),Ol=s("torch.nn.Module"),Pl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nl=i(),ge=n("div"),f(Go.$$.fragment),Al=i(),zt=n("p"),Il=s("The "),ra=n("a"),Ll=s("BlenderbotForConditionalGeneration"),Sl=s(" forward method, overrides the "),dr=n("code"),Dl=s("__call__"),Gl=s(" special method."),Wl=i(),f(Rt.$$.fragment),Ul=i(),ir=n("p"),Rl=s("Conversation example:"),Hl=i(),f(Wo.$$.fragment),As=i(),Bt=n("h2"),Ht=n("a"),lr=n("span"),f(Uo.$$.fragment),Vl=i(),cr=n("span"),Kl=s("BlenderbotForCausalLM"),Is=i(),Ft=n("div"),f(Ro.$$.fragment),Jl=i(),Ye=n("div"),f(Ho.$$.fragment),Ql=i(),pr=n("p"),Xl=s("Example:"),Yl=i(),f(Vo.$$.fragment),Ls=i(),$t=n("h2"),Vt=n("a"),hr=n("span"),f(Ko.$$.fragment),Zl=i(),ur=n("span"),ec=s("TFBlenderbotModel"),Ss=i(),le=n("div"),f(Jo.$$.fragment),tc=i(),Qo=n("p"),oc=s(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),sa=n("a"),nc=s("TFPreTrainedModel"),ac=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rc=i(),Xo=n("p"),sc=s("This model is also a "),Yo=n("a"),dc=s("tf.keras.Model"),ic=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lc=i(),f(Kt.$$.fragment),cc=i(),be=n("div"),f(Zo.$$.fragment),pc=i(),qt=n("p"),hc=s("The "),da=n("a"),uc=s("TFBlenderbotModel"),mc=s(" forward method, overrides the "),mr=n("code"),fc=s("__call__"),_c=s(" special method."),gc=i(),f(Jt.$$.fragment),bc=i(),fr=n("p"),yc=s("Example:"),kc=i(),f(en.$$.fragment),Ds=i(),Et=n("h2"),Qt=n("a"),_r=n("span"),f(tn.$$.fragment),vc=i(),gr=n("span"),Tc=s("TFBlenderbotForConditionalGeneration"),Gs=i(),ce=n("div"),f(on.$$.fragment),wc=i(),nn=n("p"),xc=s(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=n("a"),zc=s("TFPreTrainedModel"),Bc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fc=i(),an=n("p"),$c=s("This model is also a "),rn=n("a"),qc=s("tf.keras.Model"),Ec=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mc=i(),f(Xt.$$.fragment),Cc=i(),X=n("div"),f(sn.$$.fragment),jc=i(),Mt=n("p"),Oc=s("The "),la=n("a"),Pc=s("TFBlenderbotForConditionalGeneration"),Nc=s(" forward method, overrides the "),br=n("code"),Ac=s("__call__"),Ic=s(" special method."),Lc=i(),f(Yt.$$.fragment),Sc=i(),yr=n("p"),Dc=s("Conversation example::"),Gc=i(),kr=n("blockquote"),vr=n("blockquote"),Tr=n("blockquote"),wr=n("p"),Wc=s(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Uc=i(),xr=n("blockquote"),zr=n("blockquote"),Br=n("blockquote"),dn=n("p"),Rc=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Fr=n("s"),Hc=s(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Vc=s(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Ws=i(),Ct=n("h2"),Zt=n("a"),$r=n("span"),f(ln.$$.fragment),Kc=i(),qr=n("span"),Jc=s("FlaxBlenderbotModel"),Us=i(),I=n("div"),f(cn.$$.fragment),Qc=i(),pn=n("p"),Xc=s(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ca=n("a"),Yc=s("FlaxPreTrainedModel"),Zc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep=i(),hn=n("p"),tp=s(`This model is also a Flax Linen
`),un=n("a"),op=s("flax.nn.Module"),np=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ap=i(),Er=n("p"),rp=s("Finally, this model supports inherent JAX features such as:"),sp=i(),Re=n("ul"),Mr=n("li"),mn=n("a"),dp=s("Just-In-Time (JIT) compilation"),ip=i(),Cr=n("li"),fn=n("a"),lp=s("Automatic Differentiation"),cp=i(),jr=n("li"),_n=n("a"),pp=s("Vectorization"),hp=i(),Or=n("li"),gn=n("a"),up=s("Parallelization"),mp=i(),ye=n("div"),f(bn.$$.fragment),fp=i(),jt=n("p"),_p=s("The "),Pr=n("code"),gp=s("FlaxBlenderbotPreTrainedModel"),bp=s(" forward method, overrides the "),Nr=n("code"),yp=s("__call__"),kp=s(" special method."),vp=i(),f(eo.$$.fragment),Tp=i(),Ar=n("p"),wp=s("Example:"),xp=i(),f(yn.$$.fragment),zp=i(),Ze=n("div"),f(kn.$$.fragment),Bp=i(),Ir=n("p"),Fp=s("Example:"),$p=i(),f(vn.$$.fragment),qp=i(),et=n("div"),f(Tn.$$.fragment),Ep=i(),Lr=n("p"),Mp=s("Example:"),Cp=i(),f(wn.$$.fragment),Rs=i(),Ot=n("h2"),to=n("a"),Sr=n("span"),f(xn.$$.fragment),jp=i(),Dr=n("span"),Op=s("FlaxBlenderbotForConditionalGeneration"),Hs=i(),L=n("div"),f(zn.$$.fragment),Pp=i(),Bn=n("p"),Np=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),pa=n("a"),Ap=s("FlaxPreTrainedModel"),Ip=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lp=i(),Fn=n("p"),Sp=s(`This model is also a Flax Linen
`),$n=n("a"),Dp=s("flax.nn.Module"),Gp=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wp=i(),Gr=n("p"),Up=s("Finally, this model supports inherent JAX features such as:"),Rp=i(),He=n("ul"),Wr=n("li"),qn=n("a"),Hp=s("Just-In-Time (JIT) compilation"),Vp=i(),Ur=n("li"),En=n("a"),Kp=s("Automatic Differentiation"),Jp=i(),Rr=n("li"),Mn=n("a"),Qp=s("Vectorization"),Xp=i(),Hr=n("li"),Cn=n("a"),Yp=s("Parallelization"),Zp=i(),S=n("div"),f(jn.$$.fragment),eh=i(),Pt=n("p"),th=s("The "),Vr=n("code"),oh=s("FlaxBlenderbotPreTrainedModel"),nh=s(" forward method, overrides the "),Kr=n("code"),ah=s("__call__"),rh=s(" special method."),sh=i(),f(oo.$$.fragment),dh=i(),Jr=n("p"),ih=s("Conversation example::"),lh=i(),Qr=n("blockquote"),Xr=n("blockquote"),Yr=n("blockquote"),Zr=n("p"),ch=s("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),ph=i(),es=n("blockquote"),ts=n("blockquote"),os=n("blockquote"),ns=n("p"),hh=s(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),uh=i(),as=n("blockquote"),rs=n("blockquote"),ss=n("blockquote"),ds=n("p"),mh=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),fh=i(),is=n("blockquote"),ls=n("blockquote"),On=n("blockquote"),no=n("h1"),ao=n("a"),cs=n("span"),f(Pn.$$.fragment),_h=i(),ps=n("span"),gh=s("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),bh=i(),hs=n("p"),yh=s(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),kh=i(),tt=n("div"),f(Nn.$$.fragment),vh=i(),us=n("p"),Th=s("Example:"),wh=i(),f(An.$$.fragment),xh=i(),ot=n("div"),f(In.$$.fragment),zh=i(),ms=n("p"),Bh=s("Example:"),Fh=i(),f(Ln.$$.fragment),this.h()},l(o){const h=Ff('[data-svelte="svelte-1phssyn"]',document.head);u=a(h,"META",{name:!0,content:!0}),h.forEach(t),B=l(o),v=a(o,"H1",{class:!0});var Sn=r(v);x=a(Sn,"A",{id:!0,class:!0,href:!0});var fs=r(x);z=a(fs,"SPAN",{});var _s=r(z);_(w.$$.fragment,_s),_s.forEach(t),fs.forEach(t),T=l(Sn),F=a(Sn,"SPAN",{});var gs=r(F);Me=d(gs,"Blenderbot"),gs.forEach(t),Sn.forEach(t),he=l(o),q=a(o,"P",{});var ro=r(q);ke=a(ro,"STRONG",{});var bs=r(ke);te=d(bs,"DISCLAIMER:"),bs.forEach(t),Ce=d(ro," If you see something strange, file a "),oe=a(ro,"A",{href:!0,rel:!0});var ys=r(oe);ne=d(ys,"Github Issue"),ys.forEach(t),je=d(ro," ."),ro.forEach(t),Fe=l(o),D=a(o,"H2",{class:!0});var Dn=r(D);P=a(Dn,"A",{id:!0,class:!0,href:!0});var Eh=r(P);ve=a(Eh,"SPAN",{});var Mh=r(ve);_(R.$$.fragment,Mh),Mh.forEach(t),Eh.forEach(t),E=l(Dn),C=a(Dn,"SPAN",{});var Ch=r(C);Oe=d(Ch,"Overview"),Ch.forEach(t),Dn.forEach(t),J=l(o),Q=a(o,"P",{});var Ks=r(Q);Pe=d(Ks,"The Blender chatbot model was proposed in "),G=a(Ks,"A",{href:!0,rel:!0});var jh=r(G);Ne=d(jh,"Recipes for building an open-domain chatbot"),jh.forEach(t),Ae=d(Ks,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Ks.forEach(t),N=l(o),ue=a(o,"P",{});var Oh=r(ue);ae=d(Oh,"The abstract of the paper is the following:"),Oh.forEach(t),$e=l(o),me=a(o,"P",{});var Ph=r(me);H=a(Ph,"EM",{});var Nh=r(H);Ie=d(Nh,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Nh.forEach(t),Ph.forEach(t),qe=l(o),M=a(o,"P",{});var ha=r(M);Le=d(ha,"This model was contributed by "),W=a(ha,"A",{href:!0,rel:!0});var Ah=r(W);Se=d(Ah,"sshleifer"),Ah.forEach(t),m=d(ha,". The authors\u2019 code can be found "),$=a(ha,"A",{href:!0,rel:!0});var Ih=r($);Te=d(Ih,"here"),Ih.forEach(t),ht=d(ha," ."),ha.forEach(t),Ke=l(o),j=a(o,"H2",{class:!0});var Js=r(j);fe=a(Js,"A",{id:!0,class:!0,href:!0});var Lh=r(fe);De=a(Lh,"SPAN",{});var Sh=r(De);_(we.$$.fragment,Sh),Sh.forEach(t),Lh.forEach(t),V=l(Js),K=a(Js,"SPAN",{});var Dh=r(K);ut=d(Dh,"Implementation Notes"),Dh.forEach(t),Js.forEach(t),Je=l(o),A=a(o,"UL",{});var ua=r(A);xe=a(ua,"LI",{});var Qs=r(xe);mt=d(Qs,"Blenderbot uses a standard "),re=a(Qs,"A",{href:!0,rel:!0});var Gh=r(re);ft=d(Gh,"seq2seq model transformer"),Gh.forEach(t),$d=d(Qs," based architecture."),Qs.forEach(t),qd=l(ua),uo=a(ua,"LI",{});var Xs=r(uo);Ed=d(Xs,"Available checkpoints can be found in the "),mo=a(Xs,"A",{href:!0,rel:!0});var Wh=r(mo);Md=d(Wh,"model hub"),Wh.forEach(t),Cd=d(Xs,"."),Xs.forEach(t),jd=l(ua),Ge=a(ua,"LI",{});var so=r(Ge);Od=d(so,"This is the "),qa=a(so,"EM",{});var Uh=r(qa);Pd=d(Uh,"default"),Uh.forEach(t),Nd=d(so,` Blenderbot model class. However, some smaller checkpoints, such as
`),Ea=a(so,"CODE",{});var Rh=r(Ea);Ad=d(Rh,"facebook/blenderbot_small_90M"),Rh.forEach(t),Id=d(so,`, have a different architecture and consequently should be used with
`),Un=a(so,"A",{href:!0});var Hh=r(Un);Ld=d(Hh,"BlenderbotSmall"),Hh.forEach(t),Sd=d(so,"."),so.forEach(t),ua.forEach(t),Ts=l(o),_t=a(o,"H2",{class:!0});var Ys=r(_t);Nt=a(Ys,"A",{id:!0,class:!0,href:!0});var Vh=r(Nt);Ma=a(Vh,"SPAN",{});var Kh=r(Ma);_(fo.$$.fragment,Kh),Kh.forEach(t),Vh.forEach(t),Dd=l(Ys),Ca=a(Ys,"SPAN",{});var Jh=r(Ca);Gd=d(Jh,"Usage"),Jh.forEach(t),Ys.forEach(t),ws=l(o),Rn=a(o,"P",{});var Qh=r(Rn);Wd=d(Qh,"Here is an example of model usage:"),Qh.forEach(t),xs=l(o),_(_o.$$.fragment,o),zs=l(o),gt=a(o,"H2",{class:!0});var Zs=r(gt);At=a(Zs,"A",{id:!0,class:!0,href:!0});var Xh=r(At);ja=a(Xh,"SPAN",{});var Yh=r(ja);_(go.$$.fragment,Yh),Yh.forEach(t),Xh.forEach(t),Ud=l(Zs),Oa=a(Zs,"SPAN",{});var Zh=r(Oa);Rd=d(Zh,"BlenderbotConfig"),Zh.forEach(t),Zs.forEach(t),Bs=l(o),se=a(o,"DIV",{class:!0});var nt=r(se);_(bo.$$.fragment,nt),Hd=l(nt),bt=a(nt,"P",{});var ma=r(bt);Vd=d(ma,"This is the configuration class to store the configuration of a "),Hn=a(ma,"A",{href:!0});var eu=r(Hn);Kd=d(eu,"BlenderbotModel"),eu.forEach(t),Jd=d(ma,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),yo=a(ma,"A",{href:!0,rel:!0});var tu=r(yo);Qd=d(tu,"facebook/blenderbot-3B"),tu.forEach(t),Xd=d(ma," architecture."),ma.forEach(t),Yd=l(nt),yt=a(nt,"P",{});var fa=r(yt);Zd=d(fa,"Configuration objects inherit from "),Vn=a(fa,"A",{href:!0});var ou=r(Vn);ei=d(ou,"PretrainedConfig"),ou.forEach(t),ti=d(fa,` and can be used to control the model outputs. Read the
documentation from `),Kn=a(fa,"A",{href:!0});var nu=r(Kn);oi=d(nu,"PretrainedConfig"),nu.forEach(t),ni=d(fa," for more information."),fa.forEach(t),ai=l(nt),Pa=a(nt,"P",{});var au=r(Pa);ri=d(au,"Example:"),au.forEach(t),si=l(nt),_(ko.$$.fragment,nt),nt.forEach(t),Fs=l(o),kt=a(o,"H2",{class:!0});var ed=r(kt);It=a(ed,"A",{id:!0,class:!0,href:!0});var ru=r(It);Na=a(ru,"SPAN",{});var su=r(Na);_(vo.$$.fragment,su),su.forEach(t),ru.forEach(t),di=l(ed),Aa=a(ed,"SPAN",{});var du=r(Aa);ii=d(du,"BlenderbotTokenizer"),du.forEach(t),ed.forEach(t),$s=l(o),de=a(o,"DIV",{class:!0});var at=r(de);_(To.$$.fragment,at),li=l(at),Ia=a(at,"P",{});var iu=r(Ia);ci=d(iu,"Construct a Blenderbot tokenizer."),iu.forEach(t),pi=l(at),Lt=a(at,"P",{});var ks=r(Lt);La=a(ks,"CODE",{});var lu=r(La);hi=d(lu,"Blenderbot"),lu.forEach(t),ui=d(ks," is nearly identical to "),Jn=a(ks,"A",{href:!0});var cu=r(Jn);mi=d(cu,"RobertaTokenizer"),cu.forEach(t),fi=d(ks,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),ks.forEach(t),_i=l(at),wo=a(at,"P",{});var td=r(wo);gi=d(td,"Refer to superclass "),Qn=a(td,"A",{href:!0});var pu=r(Qn);bi=d(pu,"RobertaTokenizer"),pu.forEach(t),yi=d(td," for usage examples and documentation concerning parameters."),td.forEach(t),ki=l(at),Qe=a(at,"DIV",{class:!0});var _a=r(Qe);_(xo.$$.fragment,_a),vi=l(_a),Sa=a(_a,"P",{});var hu=r(Sa);Ti=d(hu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),hu.forEach(t),wi=l(_a),Da=a(_a,"UL",{});var uu=r(Da);Xn=a(uu,"LI",{});var $h=r(Xn);xi=d($h,"single sequence: "),Ga=a($h,"CODE",{});var mu=r(Ga);zi=d(mu,"X </s>"),mu.forEach(t),$h.forEach(t),uu.forEach(t),_a.forEach(t),at.forEach(t),qs=l(o),vt=a(o,"H2",{class:!0});var od=r(vt);St=a(od,"A",{id:!0,class:!0,href:!0});var fu=r(St);Wa=a(fu,"SPAN",{});var _u=r(Wa);_(zo.$$.fragment,_u),_u.forEach(t),fu.forEach(t),Bi=l(od),Ua=a(od,"SPAN",{});var gu=r(Ua);Fi=d(gu,"BlenderbotTokenizerFast"),gu.forEach(t),od.forEach(t),Es=l(o),ie=a(o,"DIV",{class:!0});var rt=r(ie);_(Bo.$$.fragment,rt),$i=l(rt),Fo=a(rt,"P",{});var nd=r(Fo);qi=d(nd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ra=a(nd,"EM",{});var bu=r(Ra);Ei=d(bu,"tokenizers"),bu.forEach(t),Mi=d(nd," library)."),nd.forEach(t),Ci=l(rt),Dt=a(rt,"P",{});var vs=r(Dt);Ha=a(vs,"CODE",{});var yu=r(Ha);ji=d(yu,"BlenderbotFast"),yu.forEach(t),Oi=d(vs," is nearly identical to "),Yn=a(vs,"A",{href:!0});var ku=r(Yn);Pi=d(ku,"RobertaTokenizerFast"),ku.forEach(t),Ni=d(vs,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),vs.forEach(t),Ai=l(rt),$o=a(rt,"P",{});var ad=r($o);Ii=d(ad,"Refer to superclass "),Zn=a(ad,"A",{href:!0});var vu=r(Zn);Li=d(vu,"RobertaTokenizerFast"),vu.forEach(t),Si=d(ad," for usage examples and documentation concerning parameters."),ad.forEach(t),Di=l(rt),Xe=a(rt,"DIV",{class:!0});var ga=r(Xe);_(qo.$$.fragment,ga),Gi=l(ga),Va=a(ga,"P",{});var Tu=r(Va);Wi=d(Tu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Tu.forEach(t),Ui=l(ga),Ka=a(ga,"UL",{});var wu=r(Ka);ea=a(wu,"LI",{});var qh=r(ea);Ri=d(qh,"single sequence: "),Ja=a(qh,"CODE",{});var xu=r(Ja);Hi=d(xu,"X </s>"),xu.forEach(t),qh.forEach(t),wu.forEach(t),ga.forEach(t),rt.forEach(t),Ms=l(o),Tt=a(o,"H2",{class:!0});var rd=r(Tt);Gt=a(rd,"A",{id:!0,class:!0,href:!0});var zu=r(Gt);Qa=a(zu,"SPAN",{});var Bu=r(Qa);_(Eo.$$.fragment,Bu),Bu.forEach(t),zu.forEach(t),Vi=l(rd),Xa=a(rd,"SPAN",{});var Fu=r(Xa);Ki=d(Fu,"BlenderbotModel"),Fu.forEach(t),rd.forEach(t),Cs=l(o),We=a(o,"P",{});var Gn=r(We);Ji=d(Gn,"See "),Ya=a(Gn,"CODE",{});var $u=r(Ya);Qi=d($u,"transformers.BartModel"),$u.forEach(t),Xi=d(Gn," for arguments to "),Za=a(Gn,"EM",{});var qu=r(Za);Yi=d(qu,"forward"),qu.forEach(t),Zi=d(Gn," and "),er=a(Gn,"EM",{});var Eu=r(er);el=d(Eu,"generate"),Eu.forEach(t),Gn.forEach(t),js=l(o),ze=a(o,"DIV",{class:!0});var io=r(ze);_(Mo.$$.fragment,io),tl=l(io),Co=a(io,"P",{});var sd=r(Co);ol=d(sd,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ta=a(sd,"A",{href:!0});var Mu=r(ta);nl=d(Mu,"PreTrainedModel"),Mu.forEach(t),al=d(sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd.forEach(t),rl=l(io),jo=a(io,"P",{});var dd=r(jo);sl=d(dd,"This model is also a PyTorch "),Oo=a(dd,"A",{href:!0,rel:!0});var Cu=r(Oo);dl=d(Cu,"torch.nn.Module"),Cu.forEach(t),il=d(dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dd.forEach(t),ll=l(io),_e=a(io,"DIV",{class:!0});var st=r(_e);_(Po.$$.fragment,st),cl=l(st),wt=a(st,"P",{});var ba=r(wt);pl=d(ba,"The "),oa=a(ba,"A",{href:!0});var ju=r(oa);hl=d(ju,"BlenderbotModel"),ju.forEach(t),ul=d(ba," forward method, overrides the "),tr=a(ba,"CODE",{});var Ou=r(tr);ml=d(Ou,"__call__"),Ou.forEach(t),fl=d(ba," special method."),ba.forEach(t),_l=l(st),_(Wt.$$.fragment,st),gl=l(st),or=a(st,"P",{});var Pu=r(or);bl=d(Pu,"Example:"),Pu.forEach(t),yl=l(st),_(No.$$.fragment,st),st.forEach(t),io.forEach(t),Os=l(o),xt=a(o,"H2",{class:!0});var id=r(xt);Ut=a(id,"A",{id:!0,class:!0,href:!0});var Nu=r(Ut);nr=a(Nu,"SPAN",{});var Au=r(nr);_(Ao.$$.fragment,Au),Au.forEach(t),Nu.forEach(t),kl=l(id),ar=a(id,"SPAN",{});var Iu=r(ar);vl=d(Iu,"BlenderbotForConditionalGeneration"),Iu.forEach(t),id.forEach(t),Ps=l(o),Ue=a(o,"P",{});var Wn=r(Ue);Tl=d(Wn,"See "),na=a(Wn,"A",{href:!0});var Lu=r(na);wl=d(Lu,"BartForConditionalGeneration"),Lu.forEach(t),xl=d(Wn," for arguments to "),rr=a(Wn,"EM",{});var Su=r(rr);zl=d(Su,"forward"),Su.forEach(t),Bl=d(Wn," and "),sr=a(Wn,"EM",{});var Du=r(sr);Fl=d(Du,"generate"),Du.forEach(t),Wn.forEach(t),Ns=l(o),Be=a(o,"DIV",{class:!0});var lo=r(Be);_(Io.$$.fragment,lo),$l=l(lo),Lo=a(lo,"P",{});var ld=r(Lo);ql=d(ld,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),aa=a(ld,"A",{href:!0});var Gu=r(aa);El=d(Gu,"PreTrainedModel"),Gu.forEach(t),Ml=d(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(t),Cl=l(lo),So=a(lo,"P",{});var cd=r(So);jl=d(cd,"This model is also a PyTorch "),Do=a(cd,"A",{href:!0,rel:!0});var Wu=r(Do);Ol=d(Wu,"torch.nn.Module"),Wu.forEach(t),Pl=d(cd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cd.forEach(t),Nl=l(lo),ge=a(lo,"DIV",{class:!0});var dt=r(ge);_(Go.$$.fragment,dt),Al=l(dt),zt=a(dt,"P",{});var ya=r(zt);Il=d(ya,"The "),ra=a(ya,"A",{href:!0});var Uu=r(ra);Ll=d(Uu,"BlenderbotForConditionalGeneration"),Uu.forEach(t),Sl=d(ya," forward method, overrides the "),dr=a(ya,"CODE",{});var Ru=r(dr);Dl=d(Ru,"__call__"),Ru.forEach(t),Gl=d(ya," special method."),ya.forEach(t),Wl=l(dt),_(Rt.$$.fragment,dt),Ul=l(dt),ir=a(dt,"P",{});var Hu=r(ir);Rl=d(Hu,"Conversation example:"),Hu.forEach(t),Hl=l(dt),_(Wo.$$.fragment,dt),dt.forEach(t),lo.forEach(t),As=l(o),Bt=a(o,"H2",{class:!0});var pd=r(Bt);Ht=a(pd,"A",{id:!0,class:!0,href:!0});var Vu=r(Ht);lr=a(Vu,"SPAN",{});var Ku=r(lr);_(Uo.$$.fragment,Ku),Ku.forEach(t),Vu.forEach(t),Vl=l(pd),cr=a(pd,"SPAN",{});var Ju=r(cr);Kl=d(Ju,"BlenderbotForCausalLM"),Ju.forEach(t),pd.forEach(t),Is=l(o),Ft=a(o,"DIV",{class:!0});var hd=r(Ft);_(Ro.$$.fragment,hd),Jl=l(hd),Ye=a(hd,"DIV",{class:!0});var ka=r(Ye);_(Ho.$$.fragment,ka),Ql=l(ka),pr=a(ka,"P",{});var Qu=r(pr);Xl=d(Qu,"Example:"),Qu.forEach(t),Yl=l(ka),_(Vo.$$.fragment,ka),ka.forEach(t),hd.forEach(t),Ls=l(o),$t=a(o,"H2",{class:!0});var ud=r($t);Vt=a(ud,"A",{id:!0,class:!0,href:!0});var Xu=r(Vt);hr=a(Xu,"SPAN",{});var Yu=r(hr);_(Ko.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),Zl=l(ud),ur=a(ud,"SPAN",{});var Zu=r(ur);ec=d(Zu,"TFBlenderbotModel"),Zu.forEach(t),ud.forEach(t),Ss=l(o),le=a(o,"DIV",{class:!0});var it=r(le);_(Jo.$$.fragment,it),tc=l(it),Qo=a(it,"P",{});var md=r(Qo);oc=d(md,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),sa=a(md,"A",{href:!0});var em=r(sa);nc=d(em,"TFPreTrainedModel"),em.forEach(t),ac=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),rc=l(it),Xo=a(it,"P",{});var fd=r(Xo);sc=d(fd,"This model is also a "),Yo=a(fd,"A",{href:!0,rel:!0});var tm=r(Yo);dc=d(tm,"tf.keras.Model"),tm.forEach(t),ic=d(fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fd.forEach(t),lc=l(it),_(Kt.$$.fragment,it),cc=l(it),be=a(it,"DIV",{class:!0});var lt=r(be);_(Zo.$$.fragment,lt),pc=l(lt),qt=a(lt,"P",{});var va=r(qt);hc=d(va,"The "),da=a(va,"A",{href:!0});var om=r(da);uc=d(om,"TFBlenderbotModel"),om.forEach(t),mc=d(va," forward method, overrides the "),mr=a(va,"CODE",{});var nm=r(mr);fc=d(nm,"__call__"),nm.forEach(t),_c=d(va," special method."),va.forEach(t),gc=l(lt),_(Jt.$$.fragment,lt),bc=l(lt),fr=a(lt,"P",{});var am=r(fr);yc=d(am,"Example:"),am.forEach(t),kc=l(lt),_(en.$$.fragment,lt),lt.forEach(t),it.forEach(t),Ds=l(o),Et=a(o,"H2",{class:!0});var _d=r(Et);Qt=a(_d,"A",{id:!0,class:!0,href:!0});var rm=r(Qt);_r=a(rm,"SPAN",{});var sm=r(_r);_(tn.$$.fragment,sm),sm.forEach(t),rm.forEach(t),vc=l(_d),gr=a(_d,"SPAN",{});var dm=r(gr);Tc=d(dm,"TFBlenderbotForConditionalGeneration"),dm.forEach(t),_d.forEach(t),Gs=l(o),ce=a(o,"DIV",{class:!0});var ct=r(ce);_(on.$$.fragment,ct),wc=l(ct),nn=a(ct,"P",{});var gd=r(nn);xc=d(gd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=a(gd,"A",{href:!0});var im=r(ia);zc=d(im,"TFPreTrainedModel"),im.forEach(t),Bc=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),Fc=l(ct),an=a(ct,"P",{});var bd=r(an);$c=d(bd,"This model is also a "),rn=a(bd,"A",{href:!0,rel:!0});var lm=r(rn);qc=d(lm,"tf.keras.Model"),lm.forEach(t),Ec=d(bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd.forEach(t),Mc=l(ct),_(Xt.$$.fragment,ct),Cc=l(ct),X=a(ct,"DIV",{class:!0});var Ee=r(X);_(sn.$$.fragment,Ee),jc=l(Ee),Mt=a(Ee,"P",{});var Ta=r(Mt);Oc=d(Ta,"The "),la=a(Ta,"A",{href:!0});var cm=r(la);Pc=d(cm,"TFBlenderbotForConditionalGeneration"),cm.forEach(t),Nc=d(Ta," forward method, overrides the "),br=a(Ta,"CODE",{});var pm=r(br);Ac=d(pm,"__call__"),pm.forEach(t),Ic=d(Ta," special method."),Ta.forEach(t),Lc=l(Ee),_(Yt.$$.fragment,Ee),Sc=l(Ee),yr=a(Ee,"P",{});var hm=r(yr);Dc=d(hm,"Conversation example::"),hm.forEach(t),Gc=l(Ee),kr=a(Ee,"BLOCKQUOTE",{});var um=r(kr);vr=a(um,"BLOCKQUOTE",{});var mm=r(vr);Tr=a(mm,"BLOCKQUOTE",{});var fm=r(Tr);wr=a(fm,"P",{});var _m=r(wr);Wc=d(_m,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),_m.forEach(t),fm.forEach(t),mm.forEach(t),um.forEach(t),Uc=l(Ee),xr=a(Ee,"BLOCKQUOTE",{});var gm=r(xr);zr=a(gm,"BLOCKQUOTE",{});var bm=r(zr);Br=a(bm,"BLOCKQUOTE",{});var ym=r(Br);dn=a(ym,"P",{});var yd=r(dn);Rc=d(yd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Fr=a(yd,"S",{});var km=r(Fr);Hc=d(km,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),km.forEach(t),Vc=d(yd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),yd.forEach(t),ym.forEach(t),bm.forEach(t),gm.forEach(t),Ee.forEach(t),ct.forEach(t),Ws=l(o),Ct=a(o,"H2",{class:!0});var kd=r(Ct);Zt=a(kd,"A",{id:!0,class:!0,href:!0});var vm=r(Zt);$r=a(vm,"SPAN",{});var Tm=r($r);_(ln.$$.fragment,Tm),Tm.forEach(t),vm.forEach(t),Kc=l(kd),qr=a(kd,"SPAN",{});var wm=r(qr);Jc=d(wm,"FlaxBlenderbotModel"),wm.forEach(t),kd.forEach(t),Us=l(o),I=a(o,"DIV",{class:!0});var Y=r(I);_(cn.$$.fragment,Y),Qc=l(Y),pn=a(Y,"P",{});var vd=r(pn);Xc=d(vd,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ca=a(vd,"A",{href:!0});var xm=r(ca);Yc=d(xm,"FlaxPreTrainedModel"),xm.forEach(t),Zc=d(vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vd.forEach(t),ep=l(Y),hn=a(Y,"P",{});var Td=r(hn);tp=d(Td,`This model is also a Flax Linen
`),un=a(Td,"A",{href:!0,rel:!0});var zm=r(un);op=d(zm,"flax.nn.Module"),zm.forEach(t),np=d(Td,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Td.forEach(t),ap=l(Y),Er=a(Y,"P",{});var Bm=r(Er);rp=d(Bm,"Finally, this model supports inherent JAX features such as:"),Bm.forEach(t),sp=l(Y),Re=a(Y,"UL",{});var co=r(Re);Mr=a(co,"LI",{});var Fm=r(Mr);mn=a(Fm,"A",{href:!0,rel:!0});var $m=r(mn);dp=d($m,"Just-In-Time (JIT) compilation"),$m.forEach(t),Fm.forEach(t),ip=l(co),Cr=a(co,"LI",{});var qm=r(Cr);fn=a(qm,"A",{href:!0,rel:!0});var Em=r(fn);lp=d(Em,"Automatic Differentiation"),Em.forEach(t),qm.forEach(t),cp=l(co),jr=a(co,"LI",{});var Mm=r(jr);_n=a(Mm,"A",{href:!0,rel:!0});var Cm=r(_n);pp=d(Cm,"Vectorization"),Cm.forEach(t),Mm.forEach(t),hp=l(co),Or=a(co,"LI",{});var jm=r(Or);gn=a(jm,"A",{href:!0,rel:!0});var Om=r(gn);up=d(Om,"Parallelization"),Om.forEach(t),jm.forEach(t),co.forEach(t),mp=l(Y),ye=a(Y,"DIV",{class:!0});var pt=r(ye);_(bn.$$.fragment,pt),fp=l(pt),jt=a(pt,"P",{});var wa=r(jt);_p=d(wa,"The "),Pr=a(wa,"CODE",{});var Pm=r(Pr);gp=d(Pm,"FlaxBlenderbotPreTrainedModel"),Pm.forEach(t),bp=d(wa," forward method, overrides the "),Nr=a(wa,"CODE",{});var Nm=r(Nr);yp=d(Nm,"__call__"),Nm.forEach(t),kp=d(wa," special method."),wa.forEach(t),vp=l(pt),_(eo.$$.fragment,pt),Tp=l(pt),Ar=a(pt,"P",{});var Am=r(Ar);wp=d(Am,"Example:"),Am.forEach(t),xp=l(pt),_(yn.$$.fragment,pt),pt.forEach(t),zp=l(Y),Ze=a(Y,"DIV",{class:!0});var xa=r(Ze);_(kn.$$.fragment,xa),Bp=l(xa),Ir=a(xa,"P",{});var Im=r(Ir);Fp=d(Im,"Example:"),Im.forEach(t),$p=l(xa),_(vn.$$.fragment,xa),xa.forEach(t),qp=l(Y),et=a(Y,"DIV",{class:!0});var za=r(et);_(Tn.$$.fragment,za),Ep=l(za),Lr=a(za,"P",{});var Lm=r(Lr);Mp=d(Lm,"Example:"),Lm.forEach(t),Cp=l(za),_(wn.$$.fragment,za),za.forEach(t),Y.forEach(t),Rs=l(o),Ot=a(o,"H2",{class:!0});var wd=r(Ot);to=a(wd,"A",{id:!0,class:!0,href:!0});var Sm=r(to);Sr=a(Sm,"SPAN",{});var Dm=r(Sr);_(xn.$$.fragment,Dm),Dm.forEach(t),Sm.forEach(t),jp=l(wd),Dr=a(wd,"SPAN",{});var Gm=r(Dr);Op=d(Gm,"FlaxBlenderbotForConditionalGeneration"),Gm.forEach(t),wd.forEach(t),Hs=l(o),L=a(o,"DIV",{class:!0});var Z=r(L);_(zn.$$.fragment,Z),Pp=l(Z),Bn=a(Z,"P",{});var xd=r(Bn);Np=d(xd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),pa=a(xd,"A",{href:!0});var Wm=r(pa);Ap=d(Wm,"FlaxPreTrainedModel"),Wm.forEach(t),Ip=d(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),Lp=l(Z),Fn=a(Z,"P",{});var zd=r(Fn);Sp=d(zd,`This model is also a Flax Linen
`),$n=a(zd,"A",{href:!0,rel:!0});var Um=r($n);Dp=d(Um,"flax.nn.Module"),Um.forEach(t),Gp=d(zd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zd.forEach(t),Wp=l(Z),Gr=a(Z,"P",{});var Rm=r(Gr);Up=d(Rm,"Finally, this model supports inherent JAX features such as:"),Rm.forEach(t),Rp=l(Z),He=a(Z,"UL",{});var po=r(He);Wr=a(po,"LI",{});var Hm=r(Wr);qn=a(Hm,"A",{href:!0,rel:!0});var Vm=r(qn);Hp=d(Vm,"Just-In-Time (JIT) compilation"),Vm.forEach(t),Hm.forEach(t),Vp=l(po),Ur=a(po,"LI",{});var Km=r(Ur);En=a(Km,"A",{href:!0,rel:!0});var Jm=r(En);Kp=d(Jm,"Automatic Differentiation"),Jm.forEach(t),Km.forEach(t),Jp=l(po),Rr=a(po,"LI",{});var Qm=r(Rr);Mn=a(Qm,"A",{href:!0,rel:!0});var Xm=r(Mn);Qp=d(Xm,"Vectorization"),Xm.forEach(t),Qm.forEach(t),Xp=l(po),Hr=a(po,"LI",{});var Ym=r(Hr);Cn=a(Ym,"A",{href:!0,rel:!0});var Zm=r(Cn);Yp=d(Zm,"Parallelization"),Zm.forEach(t),Ym.forEach(t),po.forEach(t),Zp=l(Z),S=a(Z,"DIV",{class:!0});var ee=r(S);_(jn.$$.fragment,ee),eh=l(ee),Pt=a(ee,"P",{});var Ba=r(Pt);th=d(Ba,"The "),Vr=a(Ba,"CODE",{});var ef=r(Vr);oh=d(ef,"FlaxBlenderbotPreTrainedModel"),ef.forEach(t),nh=d(Ba," forward method, overrides the "),Kr=a(Ba,"CODE",{});var tf=r(Kr);ah=d(tf,"__call__"),tf.forEach(t),rh=d(Ba," special method."),Ba.forEach(t),sh=l(ee),_(oo.$$.fragment,ee),dh=l(ee),Jr=a(ee,"P",{});var of=r(Jr);ih=d(of,"Conversation example::"),of.forEach(t),lh=l(ee),Qr=a(ee,"BLOCKQUOTE",{});var nf=r(Qr);Xr=a(nf,"BLOCKQUOTE",{});var af=r(Xr);Yr=a(af,"BLOCKQUOTE",{});var rf=r(Yr);Zr=a(rf,"P",{});var sf=r(Zr);ch=d(sf,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),sf.forEach(t),rf.forEach(t),af.forEach(t),nf.forEach(t),ph=l(ee),es=a(ee,"BLOCKQUOTE",{});var df=r(es);ts=a(df,"BLOCKQUOTE",{});var lf=r(ts);os=a(lf,"BLOCKQUOTE",{});var cf=r(os);ns=a(cf,"P",{});var pf=r(ns);hh=d(pf,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),pf.forEach(t),cf.forEach(t),lf.forEach(t),df.forEach(t),uh=l(ee),as=a(ee,"BLOCKQUOTE",{});var hf=r(as);rs=a(hf,"BLOCKQUOTE",{});var uf=r(rs);ss=a(uf,"BLOCKQUOTE",{});var mf=r(ss);ds=a(mf,"P",{});var ff=r(ds);mh=d(ff,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),ff.forEach(t),mf.forEach(t),uf.forEach(t),hf.forEach(t),fh=l(ee),is=a(ee,"BLOCKQUOTE",{});var _f=r(is);ls=a(_f,"BLOCKQUOTE",{});var gf=r(ls);On=a(gf,"BLOCKQUOTE",{});var Bd=r(On);no=a(Bd,"H1",{class:!0});var Fd=r(no);ao=a(Fd,"A",{id:!0,class:!0,href:!0});var bf=r(ao);cs=a(bf,"SPAN",{});var yf=r(cs);_(Pn.$$.fragment,yf),yf.forEach(t),bf.forEach(t),_h=l(Fd),ps=a(Fd,"SPAN",{});var kf=r(ps);gh=d(kf,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),kf.forEach(t),Fd.forEach(t),bh=l(Bd),hs=a(Bd,"P",{});var vf=r(hs);yh=d(vf,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),vf.forEach(t),Bd.forEach(t),gf.forEach(t),_f.forEach(t),ee.forEach(t),kh=l(Z),tt=a(Z,"DIV",{class:!0});var Fa=r(tt);_(Nn.$$.fragment,Fa),vh=l(Fa),us=a(Fa,"P",{});var Tf=r(us);Th=d(Tf,"Example:"),Tf.forEach(t),wh=l(Fa),_(An.$$.fragment,Fa),Fa.forEach(t),xh=l(Z),ot=a(Z,"DIV",{class:!0});var $a=r(ot);_(In.$$.fragment,$a),zh=l($a),ms=a($a,"P",{});var wf=r(ms);Bh=d(wf,"Example:"),wf.forEach(t),Fh=l($a),_(Ln.$$.fragment,$a),$a.forEach(t),Z.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(If)),c(x,"id","blenderbot"),c(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(x,"href","#blenderbot"),c(v,"class","relative group"),c(oe,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(oe,"rel","nofollow"),c(P,"id","overview"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#overview"),c(D,"class","relative group"),c(G,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(G,"rel","nofollow"),c(W,"href","https://huggingface.co/sshleifer"),c(W,"rel","nofollow"),c($,"href","https://github.com/facebookresearch/ParlAI"),c($,"rel","nofollow"),c(fe,"id","implementation-notes"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#implementation-notes"),c(j,"class","relative group"),c(re,"href","https://arxiv.org/pdf/1706.03762.pdf"),c(re,"rel","nofollow"),c(mo,"href","https://huggingface.co/models?search=blenderbot"),c(mo,"rel","nofollow"),c(Un,"href","blenderbot-small"),c(Nt,"id","usage"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#usage"),c(_t,"class","relative group"),c(At,"id","transformers.BlenderbotConfig"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.BlenderbotConfig"),c(gt,"class","relative group"),c(Hn,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(yo,"href","https://huggingface.co/facebook/blenderbot-3B"),c(yo,"rel","nofollow"),c(Vn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Kn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(It,"id","transformers.BlenderbotTokenizer"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.BlenderbotTokenizer"),c(kt,"class","relative group"),c(Jn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(St,"id","transformers.BlenderbotTokenizerFast"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.BlenderbotTokenizerFast"),c(vt,"class","relative group"),c(Yn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Zn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Gt,"id","transformers.BlenderbotModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.BlenderbotModel"),c(Tt,"class","relative group"),c(ta,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Oo,"rel","nofollow"),c(oa,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ut,"id","transformers.BlenderbotForConditionalGeneration"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.BlenderbotForConditionalGeneration"),c(xt,"class","relative group"),c(na,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(aa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Do,"rel","nofollow"),c(ra,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ht,"id","transformers.BlenderbotForCausalLM"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.BlenderbotForCausalLM"),c(Bt,"class","relative group"),c(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vt,"id","transformers.TFBlenderbotModel"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.TFBlenderbotModel"),c($t,"class","relative group"),c(sa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Yo,"rel","nofollow"),c(da,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Qt,"id","transformers.TFBlenderbotForConditionalGeneration"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.TFBlenderbotForConditionalGeneration"),c(Et,"class","relative group"),c(ia,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(rn,"rel","nofollow"),c(la,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zt,"id","transformers.FlaxBlenderbotModel"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.FlaxBlenderbotModel"),c(Ct,"class","relative group"),c(ca,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(un,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(un,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"id","transformers.FlaxBlenderbotForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),c(Ot,"class","relative group"),c(pa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($n,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c($n,"rel","nofollow"),c(qn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(qn,"rel","nofollow"),c(En,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(En,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Mn,"rel","nofollow"),c(Cn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Cn,"rel","nofollow"),c(ao,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(no,"class","relative group"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,h){e(document.head,u),p(o,B,h),p(o,v,h),e(v,x),e(x,z),g(w,z,null),e(v,T),e(v,F),e(F,Me),p(o,he,h),p(o,q,h),e(q,ke),e(ke,te),e(q,Ce),e(q,oe),e(oe,ne),e(q,je),p(o,Fe,h),p(o,D,h),e(D,P),e(P,ve),g(R,ve,null),e(D,E),e(D,C),e(C,Oe),p(o,J,h),p(o,Q,h),e(Q,Pe),e(Q,G),e(G,Ne),e(Q,Ae),p(o,N,h),p(o,ue,h),e(ue,ae),p(o,$e,h),p(o,me,h),e(me,H),e(H,Ie),p(o,qe,h),p(o,M,h),e(M,Le),e(M,W),e(W,Se),e(M,m),e(M,$),e($,Te),e(M,ht),p(o,Ke,h),p(o,j,h),e(j,fe),e(fe,De),g(we,De,null),e(j,V),e(j,K),e(K,ut),p(o,Je,h),p(o,A,h),e(A,xe),e(xe,mt),e(xe,re),e(re,ft),e(xe,$d),e(A,qd),e(A,uo),e(uo,Ed),e(uo,mo),e(mo,Md),e(uo,Cd),e(A,jd),e(A,Ge),e(Ge,Od),e(Ge,qa),e(qa,Pd),e(Ge,Nd),e(Ge,Ea),e(Ea,Ad),e(Ge,Id),e(Ge,Un),e(Un,Ld),e(Ge,Sd),p(o,Ts,h),p(o,_t,h),e(_t,Nt),e(Nt,Ma),g(fo,Ma,null),e(_t,Dd),e(_t,Ca),e(Ca,Gd),p(o,ws,h),p(o,Rn,h),e(Rn,Wd),p(o,xs,h),g(_o,o,h),p(o,zs,h),p(o,gt,h),e(gt,At),e(At,ja),g(go,ja,null),e(gt,Ud),e(gt,Oa),e(Oa,Rd),p(o,Bs,h),p(o,se,h),g(bo,se,null),e(se,Hd),e(se,bt),e(bt,Vd),e(bt,Hn),e(Hn,Kd),e(bt,Jd),e(bt,yo),e(yo,Qd),e(bt,Xd),e(se,Yd),e(se,yt),e(yt,Zd),e(yt,Vn),e(Vn,ei),e(yt,ti),e(yt,Kn),e(Kn,oi),e(yt,ni),e(se,ai),e(se,Pa),e(Pa,ri),e(se,si),g(ko,se,null),p(o,Fs,h),p(o,kt,h),e(kt,It),e(It,Na),g(vo,Na,null),e(kt,di),e(kt,Aa),e(Aa,ii),p(o,$s,h),p(o,de,h),g(To,de,null),e(de,li),e(de,Ia),e(Ia,ci),e(de,pi),e(de,Lt),e(Lt,La),e(La,hi),e(Lt,ui),e(Lt,Jn),e(Jn,mi),e(Lt,fi),e(de,_i),e(de,wo),e(wo,gi),e(wo,Qn),e(Qn,bi),e(wo,yi),e(de,ki),e(de,Qe),g(xo,Qe,null),e(Qe,vi),e(Qe,Sa),e(Sa,Ti),e(Qe,wi),e(Qe,Da),e(Da,Xn),e(Xn,xi),e(Xn,Ga),e(Ga,zi),p(o,qs,h),p(o,vt,h),e(vt,St),e(St,Wa),g(zo,Wa,null),e(vt,Bi),e(vt,Ua),e(Ua,Fi),p(o,Es,h),p(o,ie,h),g(Bo,ie,null),e(ie,$i),e(ie,Fo),e(Fo,qi),e(Fo,Ra),e(Ra,Ei),e(Fo,Mi),e(ie,Ci),e(ie,Dt),e(Dt,Ha),e(Ha,ji),e(Dt,Oi),e(Dt,Yn),e(Yn,Pi),e(Dt,Ni),e(ie,Ai),e(ie,$o),e($o,Ii),e($o,Zn),e(Zn,Li),e($o,Si),e(ie,Di),e(ie,Xe),g(qo,Xe,null),e(Xe,Gi),e(Xe,Va),e(Va,Wi),e(Xe,Ui),e(Xe,Ka),e(Ka,ea),e(ea,Ri),e(ea,Ja),e(Ja,Hi),p(o,Ms,h),p(o,Tt,h),e(Tt,Gt),e(Gt,Qa),g(Eo,Qa,null),e(Tt,Vi),e(Tt,Xa),e(Xa,Ki),p(o,Cs,h),p(o,We,h),e(We,Ji),e(We,Ya),e(Ya,Qi),e(We,Xi),e(We,Za),e(Za,Yi),e(We,Zi),e(We,er),e(er,el),p(o,js,h),p(o,ze,h),g(Mo,ze,null),e(ze,tl),e(ze,Co),e(Co,ol),e(Co,ta),e(ta,nl),e(Co,al),e(ze,rl),e(ze,jo),e(jo,sl),e(jo,Oo),e(Oo,dl),e(jo,il),e(ze,ll),e(ze,_e),g(Po,_e,null),e(_e,cl),e(_e,wt),e(wt,pl),e(wt,oa),e(oa,hl),e(wt,ul),e(wt,tr),e(tr,ml),e(wt,fl),e(_e,_l),g(Wt,_e,null),e(_e,gl),e(_e,or),e(or,bl),e(_e,yl),g(No,_e,null),p(o,Os,h),p(o,xt,h),e(xt,Ut),e(Ut,nr),g(Ao,nr,null),e(xt,kl),e(xt,ar),e(ar,vl),p(o,Ps,h),p(o,Ue,h),e(Ue,Tl),e(Ue,na),e(na,wl),e(Ue,xl),e(Ue,rr),e(rr,zl),e(Ue,Bl),e(Ue,sr),e(sr,Fl),p(o,Ns,h),p(o,Be,h),g(Io,Be,null),e(Be,$l),e(Be,Lo),e(Lo,ql),e(Lo,aa),e(aa,El),e(Lo,Ml),e(Be,Cl),e(Be,So),e(So,jl),e(So,Do),e(Do,Ol),e(So,Pl),e(Be,Nl),e(Be,ge),g(Go,ge,null),e(ge,Al),e(ge,zt),e(zt,Il),e(zt,ra),e(ra,Ll),e(zt,Sl),e(zt,dr),e(dr,Dl),e(zt,Gl),e(ge,Wl),g(Rt,ge,null),e(ge,Ul),e(ge,ir),e(ir,Rl),e(ge,Hl),g(Wo,ge,null),p(o,As,h),p(o,Bt,h),e(Bt,Ht),e(Ht,lr),g(Uo,lr,null),e(Bt,Vl),e(Bt,cr),e(cr,Kl),p(o,Is,h),p(o,Ft,h),g(Ro,Ft,null),e(Ft,Jl),e(Ft,Ye),g(Ho,Ye,null),e(Ye,Ql),e(Ye,pr),e(pr,Xl),e(Ye,Yl),g(Vo,Ye,null),p(o,Ls,h),p(o,$t,h),e($t,Vt),e(Vt,hr),g(Ko,hr,null),e($t,Zl),e($t,ur),e(ur,ec),p(o,Ss,h),p(o,le,h),g(Jo,le,null),e(le,tc),e(le,Qo),e(Qo,oc),e(Qo,sa),e(sa,nc),e(Qo,ac),e(le,rc),e(le,Xo),e(Xo,sc),e(Xo,Yo),e(Yo,dc),e(Xo,ic),e(le,lc),g(Kt,le,null),e(le,cc),e(le,be),g(Zo,be,null),e(be,pc),e(be,qt),e(qt,hc),e(qt,da),e(da,uc),e(qt,mc),e(qt,mr),e(mr,fc),e(qt,_c),e(be,gc),g(Jt,be,null),e(be,bc),e(be,fr),e(fr,yc),e(be,kc),g(en,be,null),p(o,Ds,h),p(o,Et,h),e(Et,Qt),e(Qt,_r),g(tn,_r,null),e(Et,vc),e(Et,gr),e(gr,Tc),p(o,Gs,h),p(o,ce,h),g(on,ce,null),e(ce,wc),e(ce,nn),e(nn,xc),e(nn,ia),e(ia,zc),e(nn,Bc),e(ce,Fc),e(ce,an),e(an,$c),e(an,rn),e(rn,qc),e(an,Ec),e(ce,Mc),g(Xt,ce,null),e(ce,Cc),e(ce,X),g(sn,X,null),e(X,jc),e(X,Mt),e(Mt,Oc),e(Mt,la),e(la,Pc),e(Mt,Nc),e(Mt,br),e(br,Ac),e(Mt,Ic),e(X,Lc),g(Yt,X,null),e(X,Sc),e(X,yr),e(yr,Dc),e(X,Gc),e(X,kr),e(kr,vr),e(vr,Tr),e(Tr,wr),e(wr,Wc),e(X,Uc),e(X,xr),e(xr,zr),e(zr,Br),e(Br,dn),e(dn,Rc),e(dn,Fr),e(Fr,Hc),e(dn,Vc),p(o,Ws,h),p(o,Ct,h),e(Ct,Zt),e(Zt,$r),g(ln,$r,null),e(Ct,Kc),e(Ct,qr),e(qr,Jc),p(o,Us,h),p(o,I,h),g(cn,I,null),e(I,Qc),e(I,pn),e(pn,Xc),e(pn,ca),e(ca,Yc),e(pn,Zc),e(I,ep),e(I,hn),e(hn,tp),e(hn,un),e(un,op),e(hn,np),e(I,ap),e(I,Er),e(Er,rp),e(I,sp),e(I,Re),e(Re,Mr),e(Mr,mn),e(mn,dp),e(Re,ip),e(Re,Cr),e(Cr,fn),e(fn,lp),e(Re,cp),e(Re,jr),e(jr,_n),e(_n,pp),e(Re,hp),e(Re,Or),e(Or,gn),e(gn,up),e(I,mp),e(I,ye),g(bn,ye,null),e(ye,fp),e(ye,jt),e(jt,_p),e(jt,Pr),e(Pr,gp),e(jt,bp),e(jt,Nr),e(Nr,yp),e(jt,kp),e(ye,vp),g(eo,ye,null),e(ye,Tp),e(ye,Ar),e(Ar,wp),e(ye,xp),g(yn,ye,null),e(I,zp),e(I,Ze),g(kn,Ze,null),e(Ze,Bp),e(Ze,Ir),e(Ir,Fp),e(Ze,$p),g(vn,Ze,null),e(I,qp),e(I,et),g(Tn,et,null),e(et,Ep),e(et,Lr),e(Lr,Mp),e(et,Cp),g(wn,et,null),p(o,Rs,h),p(o,Ot,h),e(Ot,to),e(to,Sr),g(xn,Sr,null),e(Ot,jp),e(Ot,Dr),e(Dr,Op),p(o,Hs,h),p(o,L,h),g(zn,L,null),e(L,Pp),e(L,Bn),e(Bn,Np),e(Bn,pa),e(pa,Ap),e(Bn,Ip),e(L,Lp),e(L,Fn),e(Fn,Sp),e(Fn,$n),e($n,Dp),e(Fn,Gp),e(L,Wp),e(L,Gr),e(Gr,Up),e(L,Rp),e(L,He),e(He,Wr),e(Wr,qn),e(qn,Hp),e(He,Vp),e(He,Ur),e(Ur,En),e(En,Kp),e(He,Jp),e(He,Rr),e(Rr,Mn),e(Mn,Qp),e(He,Xp),e(He,Hr),e(Hr,Cn),e(Cn,Yp),e(L,Zp),e(L,S),g(jn,S,null),e(S,eh),e(S,Pt),e(Pt,th),e(Pt,Vr),e(Vr,oh),e(Pt,nh),e(Pt,Kr),e(Kr,ah),e(Pt,rh),e(S,sh),g(oo,S,null),e(S,dh),e(S,Jr),e(Jr,ih),e(S,lh),e(S,Qr),e(Qr,Xr),e(Xr,Yr),e(Yr,Zr),e(Zr,ch),e(S,ph),e(S,es),e(es,ts),e(ts,os),e(os,ns),e(ns,hh),e(S,uh),e(S,as),e(as,rs),e(rs,ss),e(ss,ds),e(ds,mh),e(S,fh),e(S,is),e(is,ls),e(ls,On),e(On,no),e(no,ao),e(ao,cs),g(Pn,cs,null),e(no,_h),e(no,ps),e(ps,gh),e(On,bh),e(On,hs),e(hs,yh),e(L,kh),e(L,tt),g(Nn,tt,null),e(tt,vh),e(tt,us),e(us,Th),e(tt,wh),g(An,tt,null),e(L,xh),e(L,ot),g(In,ot,null),e(ot,zh),e(ot,ms),e(ms,Bh),e(ot,Fh),g(Ln,ot,null),Vs=!0},p(o,[h]){const Sn={};h&2&&(Sn.$$scope={dirty:h,ctx:o}),Wt.$set(Sn);const fs={};h&2&&(fs.$$scope={dirty:h,ctx:o}),Rt.$set(fs);const _s={};h&2&&(_s.$$scope={dirty:h,ctx:o}),Kt.$set(_s);const gs={};h&2&&(gs.$$scope={dirty:h,ctx:o}),Jt.$set(gs);const ro={};h&2&&(ro.$$scope={dirty:h,ctx:o}),Xt.$set(ro);const bs={};h&2&&(bs.$$scope={dirty:h,ctx:o}),Yt.$set(bs);const ys={};h&2&&(ys.$$scope={dirty:h,ctx:o}),eo.$set(ys);const Dn={};h&2&&(Dn.$$scope={dirty:h,ctx:o}),oo.$set(Dn)},i(o){Vs||(b(w.$$.fragment,o),b(R.$$.fragment,o),b(we.$$.fragment,o),b(fo.$$.fragment,o),b(_o.$$.fragment,o),b(go.$$.fragment,o),b(bo.$$.fragment,o),b(ko.$$.fragment,o),b(vo.$$.fragment,o),b(To.$$.fragment,o),b(xo.$$.fragment,o),b(zo.$$.fragment,o),b(Bo.$$.fragment,o),b(qo.$$.fragment,o),b(Eo.$$.fragment,o),b(Mo.$$.fragment,o),b(Po.$$.fragment,o),b(Wt.$$.fragment,o),b(No.$$.fragment,o),b(Ao.$$.fragment,o),b(Io.$$.fragment,o),b(Go.$$.fragment,o),b(Rt.$$.fragment,o),b(Wo.$$.fragment,o),b(Uo.$$.fragment,o),b(Ro.$$.fragment,o),b(Ho.$$.fragment,o),b(Vo.$$.fragment,o),b(Ko.$$.fragment,o),b(Jo.$$.fragment,o),b(Kt.$$.fragment,o),b(Zo.$$.fragment,o),b(Jt.$$.fragment,o),b(en.$$.fragment,o),b(tn.$$.fragment,o),b(on.$$.fragment,o),b(Xt.$$.fragment,o),b(sn.$$.fragment,o),b(Yt.$$.fragment,o),b(ln.$$.fragment,o),b(cn.$$.fragment,o),b(bn.$$.fragment,o),b(eo.$$.fragment,o),b(yn.$$.fragment,o),b(kn.$$.fragment,o),b(vn.$$.fragment,o),b(Tn.$$.fragment,o),b(wn.$$.fragment,o),b(xn.$$.fragment,o),b(zn.$$.fragment,o),b(jn.$$.fragment,o),b(oo.$$.fragment,o),b(Pn.$$.fragment,o),b(Nn.$$.fragment,o),b(An.$$.fragment,o),b(In.$$.fragment,o),b(Ln.$$.fragment,o),Vs=!0)},o(o){y(w.$$.fragment,o),y(R.$$.fragment,o),y(we.$$.fragment,o),y(fo.$$.fragment,o),y(_o.$$.fragment,o),y(go.$$.fragment,o),y(bo.$$.fragment,o),y(ko.$$.fragment,o),y(vo.$$.fragment,o),y(To.$$.fragment,o),y(xo.$$.fragment,o),y(zo.$$.fragment,o),y(Bo.$$.fragment,o),y(qo.$$.fragment,o),y(Eo.$$.fragment,o),y(Mo.$$.fragment,o),y(Po.$$.fragment,o),y(Wt.$$.fragment,o),y(No.$$.fragment,o),y(Ao.$$.fragment,o),y(Io.$$.fragment,o),y(Go.$$.fragment,o),y(Rt.$$.fragment,o),y(Wo.$$.fragment,o),y(Uo.$$.fragment,o),y(Ro.$$.fragment,o),y(Ho.$$.fragment,o),y(Vo.$$.fragment,o),y(Ko.$$.fragment,o),y(Jo.$$.fragment,o),y(Kt.$$.fragment,o),y(Zo.$$.fragment,o),y(Jt.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(Xt.$$.fragment,o),y(sn.$$.fragment,o),y(Yt.$$.fragment,o),y(ln.$$.fragment,o),y(cn.$$.fragment,o),y(bn.$$.fragment,o),y(eo.$$.fragment,o),y(yn.$$.fragment,o),y(kn.$$.fragment,o),y(vn.$$.fragment,o),y(Tn.$$.fragment,o),y(wn.$$.fragment,o),y(xn.$$.fragment,o),y(zn.$$.fragment,o),y(jn.$$.fragment,o),y(oo.$$.fragment,o),y(Pn.$$.fragment,o),y(Nn.$$.fragment,o),y(An.$$.fragment,o),y(In.$$.fragment,o),y(Ln.$$.fragment,o),Vs=!1},d(o){t(u),o&&t(B),o&&t(v),k(w),o&&t(he),o&&t(q),o&&t(Fe),o&&t(D),k(R),o&&t(J),o&&t(Q),o&&t(N),o&&t(ue),o&&t($e),o&&t(me),o&&t(qe),o&&t(M),o&&t(Ke),o&&t(j),k(we),o&&t(Je),o&&t(A),o&&t(Ts),o&&t(_t),k(fo),o&&t(ws),o&&t(Rn),o&&t(xs),k(_o,o),o&&t(zs),o&&t(gt),k(go),o&&t(Bs),o&&t(se),k(bo),k(ko),o&&t(Fs),o&&t(kt),k(vo),o&&t($s),o&&t(de),k(To),k(xo),o&&t(qs),o&&t(vt),k(zo),o&&t(Es),o&&t(ie),k(Bo),k(qo),o&&t(Ms),o&&t(Tt),k(Eo),o&&t(Cs),o&&t(We),o&&t(js),o&&t(ze),k(Mo),k(Po),k(Wt),k(No),o&&t(Os),o&&t(xt),k(Ao),o&&t(Ps),o&&t(Ue),o&&t(Ns),o&&t(Be),k(Io),k(Go),k(Rt),k(Wo),o&&t(As),o&&t(Bt),k(Uo),o&&t(Is),o&&t(Ft),k(Ro),k(Ho),k(Vo),o&&t(Ls),o&&t($t),k(Ko),o&&t(Ss),o&&t(le),k(Jo),k(Kt),k(Zo),k(Jt),k(en),o&&t(Ds),o&&t(Et),k(tn),o&&t(Gs),o&&t(ce),k(on),k(Xt),k(sn),k(Yt),o&&t(Ws),o&&t(Ct),k(ln),o&&t(Us),o&&t(I),k(cn),k(bn),k(eo),k(yn),k(kn),k(vn),k(Tn),k(wn),o&&t(Rs),o&&t(Ot),k(xn),o&&t(Hs),o&&t(L),k(zn),k(jn),k(oo),k(Pn),k(Nn),k(An),k(In),k(Ln)}}}const If={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function Lf(U){return $f(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Rf extends xf{constructor(u){super();zf(this,u,Lf,Af,Bf,{})}}export{Rf as default,If as metadata};
