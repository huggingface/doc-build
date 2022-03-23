import{S as Bf,i as zf,s as xf,e as n,k as i,w as f,t as r,M as Ff,c as a,d as t,m as l,a as s,x as _,h as d,b as c,F as e,g as p,y as g,q as b,o as k,B as y,v as $f}from"../../chunks/vendor-6b77c823.js";import{T as ho}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-abef54e3.js";import{C as Ke}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as pe}from"../../chunks/IconCopyLink-7a11ce68.js";function qf(U){let u,x,v,B,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),B=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=a(w,"P",{});var T=s(u);x=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(T,"CODE",{});var F=s(v);B=d(F,"Module"),F.forEach(t),z=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,x),e(u,v),e(v,B),e(u,z)},d(w){w&&t(u)}}}function Mf(U){let u,x,v,B,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),B=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=a(w,"P",{});var T=s(u);x=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(T,"CODE",{});var F=s(v);B=d(F,"Module"),F.forEach(t),z=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,x),e(u,v),e(v,B),e(u,z)},d(w){w&&t(u)}}}function Ef(U){let u,x,v,B,z,w,T,F,Ee,he,q,ye,te,Ce,oe,ne,je,Fe,D,O,ve,R,M,C,Pe,J,Q,Oe,G,Ne,Ae,N,ue,ae,$e,me,H,Ie,qe,E,Le,W,Se;return{c(){u=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),v=i(),B=n("ul"),z=n("li"),w=r("having all inputs as keyword arguments (like PyTorch models), or"),T=i(),F=n("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),q=n("p"),ye=r("This second option is useful when using "),te=n("code"),Ce=r("tf.keras.Model.fit"),oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=r("model(inputs)"),Fe=r("."),D=i(),O=n("p"),ve=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),M=n("ul"),C=n("li"),Pe=r("a single Tensor with "),J=n("code"),Q=r("input_ids"),Oe=r(" only and nothing else: "),G=n("code"),Ne=r("model(input_ids)"),Ae=i(),N=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=r("model([input_ids, attention_mask])"),me=r(" or "),H=n("code"),Ie=r("model([input_ids, attention_mask, token_type_ids])"),qe=i(),E=n("li"),Le=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=n("code"),Se=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=a(m,"P",{});var $=s(u);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(m),B=a(m,"UL",{});var Te=s(B);z=a(Te,"LI",{});var ht=s(z);w=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),T=l(Te),F=a(Te,"LI",{});var Ve=s(F);Ee=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),he=l(m),q=a(m,"P",{});var j=s(q);ye=d(j,"This second option is useful when using "),te=a(j,"CODE",{});var fe=s(te);Ce=d(fe,"tf.keras.Model.fit"),fe.forEach(t),oe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=a(j,"CODE",{});var De=s(ne);je=d(De,"model(inputs)"),De.forEach(t),Fe=d(j,"."),j.forEach(t),D=l(m),O=a(m,"P",{});var we=s(O);ve=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),M=a(m,"UL",{});var K=s(M);C=a(K,"LI",{});var V=s(C);Pe=d(V,"a single Tensor with "),J=a(V,"CODE",{});var ut=s(J);Q=d(ut,"input_ids"),ut.forEach(t),Oe=d(V," only and nothing else: "),G=a(V,"CODE",{});var Je=s(G);Ne=d(Je,"model(input_ids)"),Je.forEach(t),V.forEach(t),Ae=l(K),N=a(K,"LI",{});var A=s(N);ue=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=a(A,"CODE",{});var Be=s(ae);$e=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),me=d(A," or "),H=a(A,"CODE",{});var mt=s(H);Ie=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),qe=l(K),E=a(K,"LI",{});var se=s(E);Le=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(se,"CODE",{});var ft=s(W);Se=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),se.forEach(t),K.forEach(t)},m(m,$){p(m,u,$),e(u,x),p(m,v,$),p(m,B,$),e(B,z),e(z,w),e(B,T),e(B,F),e(F,Ee),p(m,he,$),p(m,q,$),e(q,ye),e(q,te),e(te,Ce),e(q,oe),e(q,ne),e(ne,je),e(q,Fe),p(m,D,$),p(m,O,$),e(O,ve),p(m,R,$),p(m,M,$),e(M,C),e(C,Pe),e(C,J),e(J,Q),e(C,Oe),e(C,G),e(G,Ne),e(M,Ae),e(M,N),e(N,ue),e(N,ae),e(ae,$e),e(N,me),e(N,H),e(H,Ie),e(M,qe),e(M,E),e(E,Le),e(E,W),e(W,Se)},d(m){m&&t(u),m&&t(v),m&&t(B),m&&t(he),m&&t(q),m&&t(D),m&&t(O),m&&t(R),m&&t(M)}}}function Cf(U){let u,x,v,B,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),B=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=a(w,"P",{});var T=s(u);x=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(T,"CODE",{});var F=s(v);B=d(F,"Module"),F.forEach(t),z=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,x),e(u,v),e(v,B),e(u,z)},d(w){w&&t(u)}}}function jf(U){let u,x,v,B,z,w,T,F,Ee,he,q,ye,te,Ce,oe,ne,je,Fe,D,O,ve,R,M,C,Pe,J,Q,Oe,G,Ne,Ae,N,ue,ae,$e,me,H,Ie,qe,E,Le,W,Se;return{c(){u=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),v=i(),B=n("ul"),z=n("li"),w=r("having all inputs as keyword arguments (like PyTorch models), or"),T=i(),F=n("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),q=n("p"),ye=r("This second option is useful when using "),te=n("code"),Ce=r("tf.keras.Model.fit"),oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=r("model(inputs)"),Fe=r("."),D=i(),O=n("p"),ve=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),M=n("ul"),C=n("li"),Pe=r("a single Tensor with "),J=n("code"),Q=r("input_ids"),Oe=r(" only and nothing else: "),G=n("code"),Ne=r("model(input_ids)"),Ae=i(),N=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=r("model([input_ids, attention_mask])"),me=r(" or "),H=n("code"),Ie=r("model([input_ids, attention_mask, token_type_ids])"),qe=i(),E=n("li"),Le=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=n("code"),Se=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=a(m,"P",{});var $=s(u);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(m),B=a(m,"UL",{});var Te=s(B);z=a(Te,"LI",{});var ht=s(z);w=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),T=l(Te),F=a(Te,"LI",{});var Ve=s(F);Ee=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),he=l(m),q=a(m,"P",{});var j=s(q);ye=d(j,"This second option is useful when using "),te=a(j,"CODE",{});var fe=s(te);Ce=d(fe,"tf.keras.Model.fit"),fe.forEach(t),oe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=a(j,"CODE",{});var De=s(ne);je=d(De,"model(inputs)"),De.forEach(t),Fe=d(j,"."),j.forEach(t),D=l(m),O=a(m,"P",{});var we=s(O);ve=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),M=a(m,"UL",{});var K=s(M);C=a(K,"LI",{});var V=s(C);Pe=d(V,"a single Tensor with "),J=a(V,"CODE",{});var ut=s(J);Q=d(ut,"input_ids"),ut.forEach(t),Oe=d(V," only and nothing else: "),G=a(V,"CODE",{});var Je=s(G);Ne=d(Je,"model(input_ids)"),Je.forEach(t),V.forEach(t),Ae=l(K),N=a(K,"LI",{});var A=s(N);ue=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=a(A,"CODE",{});var Be=s(ae);$e=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),me=d(A," or "),H=a(A,"CODE",{});var mt=s(H);Ie=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),qe=l(K),E=a(K,"LI",{});var se=s(E);Le=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(se,"CODE",{});var ft=s(W);Se=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),se.forEach(t),K.forEach(t)},m(m,$){p(m,u,$),e(u,x),p(m,v,$),p(m,B,$),e(B,z),e(z,w),e(B,T),e(B,F),e(F,Ee),p(m,he,$),p(m,q,$),e(q,ye),e(q,te),e(te,Ce),e(q,oe),e(q,ne),e(ne,je),e(q,Fe),p(m,D,$),p(m,O,$),e(O,ve),p(m,R,$),p(m,M,$),e(M,C),e(C,Pe),e(C,J),e(J,Q),e(C,Oe),e(C,G),e(G,Ne),e(M,Ae),e(M,N),e(N,ue),e(N,ae),e(ae,$e),e(N,me),e(N,H),e(H,Ie),e(M,qe),e(M,E),e(E,Le),e(E,W),e(W,Se)},d(m){m&&t(u),m&&t(v),m&&t(B),m&&t(he),m&&t(q),m&&t(D),m&&t(O),m&&t(R),m&&t(M)}}}function Pf(U){let u,x,v,B,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),B=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=a(w,"P",{});var T=s(u);x=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(T,"CODE",{});var F=s(v);B=d(F,"Module"),F.forEach(t),z=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,x),e(u,v),e(v,B),e(u,z)},d(w){w&&t(u)}}}function Of(U){let u,x,v,B,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),B=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=a(w,"P",{});var T=s(u);x=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(T,"CODE",{});var F=s(v);B=d(F,"Module"),F.forEach(t),z=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,x),e(u,v),e(v,B),e(u,z)},d(w){w&&t(u)}}}function Nf(U){let u,x,v,B,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),B=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){u=a(w,"P",{});var T=s(u);x=d(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(T,"CODE",{});var F=s(v);B=d(F,"Module"),F.forEach(t),z=d(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){p(w,u,T),e(u,x),e(u,v),e(v,B),e(u,z)},d(w){w&&t(u)}}}function Af(U){let u,x,v,B,z,w,T,F,Ee,he,q,ye,te,Ce,oe,ne,je,Fe,D,O,ve,R,M,C,Pe,J,Q,Oe,G,Ne,Ae,N,ue,ae,$e,me,H,Ie,qe,E,Le,W,Se,m,$,Te,ht,Ve,j,fe,De,we,K,V,ut,Je,A,Be,mt,se,ft,$d,qd,uo,Md,mo,Ed,Cd,jd,Ge,Pd,qa,Od,Nd,Ma,Ad,Id,Un,Ld,Sd,Tr,_t,Nt,Ea,fo,Dd,Ca,Gd,wr,Rn,Wd,Br,_o,zr,gt,At,ja,go,Ud,Pa,Rd,xr,re,bo,Hd,bt,Kd,Hn,Vd,Jd,ko,Qd,Xd,Yd,kt,Zd,Kn,ei,ti,Vn,oi,ni,ai,Oa,si,ri,yo,Fr,yt,It,Na,vo,di,Aa,ii,$r,de,To,li,Ia,ci,pi,Lt,La,hi,ui,Jn,mi,fi,_i,wo,gi,Qn,bi,ki,yi,Qe,Bo,vi,Sa,Ti,wi,Da,Xn,Bi,Ga,zi,qr,vt,St,Wa,zo,xi,Ua,Fi,Mr,ie,xo,$i,Fo,qi,Ra,Mi,Ei,Ci,Dt,Ha,ji,Pi,Yn,Oi,Ni,Ai,$o,Ii,Zn,Li,Si,Di,Xe,qo,Gi,Ka,Wi,Ui,Va,ea,Ri,Ja,Hi,Er,Tt,Gt,Qa,Mo,Ki,Xa,Vi,Cr,We,Ji,Ya,Qi,Xi,Za,Yi,Zi,es,el,jr,ze,Eo,tl,Co,ol,ta,nl,al,sl,jo,rl,Po,dl,il,ll,_e,Oo,cl,wt,pl,oa,hl,ul,ts,ml,fl,_l,Wt,gl,os,bl,kl,No,Pr,Bt,Ut,ns,Ao,yl,as,vl,Or,Ue,Tl,na,wl,Bl,ss,zl,xl,rs,Fl,Nr,xe,Io,$l,Lo,ql,aa,Ml,El,Cl,So,jl,Do,Pl,Ol,Nl,ge,Go,Al,zt,Il,sa,Ll,Sl,ds,Dl,Gl,Wl,Rt,Ul,is,Rl,Hl,Wo,Ar,xt,Ht,ls,Uo,Kl,cs,Vl,Ir,Ft,Ro,Jl,Ye,Ho,Ql,ps,Xl,Yl,Ko,Lr,$t,Kt,hs,Vo,Zl,us,ec,Sr,le,Jo,tc,Qo,oc,ra,nc,ac,sc,Xo,rc,Yo,dc,ic,lc,Vt,cc,be,Zo,pc,qt,hc,da,uc,mc,ms,fc,_c,gc,Jt,bc,fs,kc,yc,en,Dr,Mt,Qt,_s,tn,vc,gs,Tc,Gr,ce,on,wc,nn,Bc,ia,zc,xc,Fc,an,$c,sn,qc,Mc,Ec,Xt,Cc,X,rn,jc,Et,Pc,la,Oc,Nc,bs,Ac,Ic,Lc,Yt,Sc,ks,Dc,Gc,ys,vs,Ts,ws,Wc,Uc,Bs,zs,xs,dn,Rc,Fs,Hc,Kc,Wr,Ct,Zt,$s,ln,Vc,qs,Jc,Ur,I,cn,Qc,pn,Xc,ca,Yc,Zc,ep,hn,tp,un,op,np,ap,Ms,sp,rp,Re,Es,mn,dp,ip,Cs,fn,lp,cp,js,_n,pp,hp,Ps,gn,up,mp,ke,bn,fp,jt,_p,Os,gp,bp,Ns,kp,yp,vp,eo,Tp,As,wp,Bp,kn,zp,Ze,yn,xp,Is,Fp,$p,vn,qp,et,Tn,Mp,Ls,Ep,Cp,wn,Rr,Pt,to,Ss,Bn,jp,Ds,Pp,Hr,L,zn,Op,xn,Np,pa,Ap,Ip,Lp,Fn,Sp,$n,Dp,Gp,Wp,Gs,Up,Rp,He,Ws,qn,Hp,Kp,Us,Mn,Vp,Jp,Rs,En,Qp,Xp,Hs,Cn,Yp,Zp,S,jn,eh,Ot,th,Ks,oh,nh,Vs,ah,sh,rh,oo,dh,Js,ih,lh,Qs,Xs,Ys,Zs,ch,ph,er,tr,or,nr,hh,uh,ar,sr,rr,dr,mh,fh,ir,lr,Pn,no,ao,cr,On,_h,pr,gh,bh,hr,kh,yh,tt,Nn,vh,ur,Th,wh,An,Bh,ot,In,zh,mr,xh,Fh,Ln,Kr;return w=new pe({}),R=new pe({}),we=new pe({}),fo=new pe({}),_o=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),go=new pe({}),bo=new P({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/configuration_blenderbot.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),yo=new Ke({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),vo=new pe({}),To=new P({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),Bo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zo=new pe({}),xo=new P({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),qo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L61",parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Mo=new pe({}),Eo=new P({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1080",parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Oo=new P({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1118",parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),Wt=new ho({props:{$$slots:{default:[qf]},$$scope:{ctx:U}}}),No=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">1280</span>]`}}),Ao=new pe({}),Io=new P({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1216",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Go=new P({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1273",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
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
`}}),Rt=new ho({props:{$$slots:{default:[Mf]},$$scope:{ctx:U}}}),Wo=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
Bot:   That&#x27;s too bad. Have you tried encouraging them to change their eating habits?</span>`}}),Uo=new pe({}),Ro=new P({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1409"}}),Ho=new P({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1440",parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),Ko=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

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
<span class="hljs-literal">True</span>`}}),Vo=new pe({}),Jo=new P({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1105",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vt=new ho({props:{$$slots:{default:[Ef]},$$scope:{ctx:U}}}),Zo=new P({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1130",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
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
`}}),Jt=new ho({props:{$$slots:{default:[Cf]},$$scope:{ctx:U}}}),en=new Ke({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tn=new pe({}),on=new P({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1204",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xt=new ho({props:{$$slots:{default:[jf]},$$scope:{ctx:U}}}),rn=new P({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1250",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
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
`}}),Yt=new ho({props:{$$slots:{default:[Pf]},$$scope:{ctx:U}}}),ln=new pe({}),cn=new P({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1207",parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1142",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),eo=new ho({props:{$$slots:{default:[Of]},$$scope:{ctx:U}}}),kn=new Ke({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),yn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),vn=new Ke({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Tn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1026",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),wn=new Ke({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Bn=new pe({}),zn=new P({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1294",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1142",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),oo=new ho({props:{$$slots:{default:[Nf]},$$scope:{ctx:U}}}),On=new pe({}),Nn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),An=new Ke({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),In=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1298",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),Ln=new Ke({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),x=i(),v=n("h1"),B=n("a"),z=n("span"),f(w.$$.fragment),T=i(),F=n("span"),Ee=r("Blenderbot"),he=i(),q=n("p"),ye=n("strong"),te=r("DISCLAIMER:"),Ce=r(" If you see something strange, file a "),oe=n("a"),ne=r("Github Issue"),je=r(" ."),Fe=i(),D=n("h2"),O=n("a"),ve=n("span"),f(R.$$.fragment),M=i(),C=n("span"),Pe=r("Overview"),J=i(),Q=n("p"),Oe=r("The Blender chatbot model was proposed in "),G=n("a"),Ne=r("Recipes for building an open-domain chatbot"),Ae=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),N=i(),ue=n("p"),ae=r("The abstract of the paper is the following:"),$e=i(),me=n("p"),H=n("em"),Ie=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),qe=i(),E=n("p"),Le=r("This model was contributed by "),W=n("a"),Se=r("sshleifer"),m=r(". The authors\u2019 code can be found "),$=n("a"),Te=r("here"),ht=r(" ."),Ve=i(),j=n("h2"),fe=n("a"),De=n("span"),f(we.$$.fragment),K=i(),V=n("span"),ut=r("Implementation Notes"),Je=i(),A=n("ul"),Be=n("li"),mt=r("Blenderbot uses a standard "),se=n("a"),ft=r("seq2seq model transformer"),$d=r(" based architecture."),qd=i(),uo=n("li"),Md=r("Available checkpoints can be found in the "),mo=n("a"),Ed=r("model hub"),Cd=r("."),jd=i(),Ge=n("li"),Pd=r("This is the "),qa=n("em"),Od=r("default"),Nd=r(` Blenderbot model class. However, some smaller checkpoints, such as
`),Ma=n("code"),Ad=r("facebook/blenderbot_small_90M"),Id=r(`, have a different architecture and consequently should be used with
`),Un=n("a"),Ld=r("BlenderbotSmall"),Sd=r("."),Tr=i(),_t=n("h2"),Nt=n("a"),Ea=n("span"),f(fo.$$.fragment),Dd=i(),Ca=n("span"),Gd=r("Usage"),wr=i(),Rn=n("p"),Wd=r("Here is an example of model usage:"),Br=i(),f(_o.$$.fragment),zr=i(),gt=n("h2"),At=n("a"),ja=n("span"),f(go.$$.fragment),Ud=i(),Pa=n("span"),Rd=r("BlenderbotConfig"),xr=i(),re=n("div"),f(bo.$$.fragment),Hd=i(),bt=n("p"),Kd=r("This is the configuration class to store the configuration of a "),Hn=n("a"),Vd=r("BlenderbotModel"),Jd=r(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),ko=n("a"),Qd=r("facebook/blenderbot-3B"),Xd=r(" architecture."),Yd=i(),kt=n("p"),Zd=r("Configuration objects inherit from "),Kn=n("a"),ei=r("PretrainedConfig"),ti=r(` and can be used to control the model outputs. Read the
documentation from `),Vn=n("a"),oi=r("PretrainedConfig"),ni=r(" for more information."),ai=i(),Oa=n("p"),si=r("Example:"),ri=i(),f(yo.$$.fragment),Fr=i(),yt=n("h2"),It=n("a"),Na=n("span"),f(vo.$$.fragment),di=i(),Aa=n("span"),ii=r("BlenderbotTokenizer"),$r=i(),de=n("div"),f(To.$$.fragment),li=i(),Ia=n("p"),ci=r("Construct a Blenderbot tokenizer."),pi=i(),Lt=n("p"),La=n("code"),hi=r("Blenderbot"),ui=r(" is nearly identical to "),Jn=n("a"),mi=r("RobertaTokenizer"),fi=r(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),_i=i(),wo=n("p"),gi=r("Refer to superclass "),Qn=n("a"),bi=r("RobertaTokenizer"),ki=r(" for usage examples and documentation concerning parameters."),yi=i(),Qe=n("div"),f(Bo.$$.fragment),vi=i(),Sa=n("p"),Ti=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),wi=i(),Da=n("ul"),Xn=n("li"),Bi=r("single sequence: "),Ga=n("code"),zi=r("X </s>"),qr=i(),vt=n("h2"),St=n("a"),Wa=n("span"),f(zo.$$.fragment),xi=i(),Ua=n("span"),Fi=r("BlenderbotTokenizerFast"),Mr=i(),ie=n("div"),f(xo.$$.fragment),$i=i(),Fo=n("p"),qi=r("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ra=n("em"),Mi=r("tokenizers"),Ei=r(" library)."),Ci=i(),Dt=n("p"),Ha=n("code"),ji=r("BlenderbotFast"),Pi=r(" is nearly identical to "),Yn=n("a"),Oi=r("RobertaTokenizerFast"),Ni=r(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Ai=i(),$o=n("p"),Ii=r("Refer to superclass "),Zn=n("a"),Li=r("RobertaTokenizerFast"),Si=r(" for usage examples and documentation concerning parameters."),Di=i(),Xe=n("div"),f(qo.$$.fragment),Gi=i(),Ka=n("p"),Wi=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ui=i(),Va=n("ul"),ea=n("li"),Ri=r("single sequence: "),Ja=n("code"),Hi=r("X </s>"),Er=i(),Tt=n("h2"),Gt=n("a"),Qa=n("span"),f(Mo.$$.fragment),Ki=i(),Xa=n("span"),Vi=r("BlenderbotModel"),Cr=i(),We=n("p"),Ji=r("See "),Ya=n("code"),Qi=r("transformers.BartModel"),Xi=r(" for arguments to "),Za=n("em"),Yi=r("forward"),Zi=r(" and "),es=n("em"),el=r("generate"),jr=i(),ze=n("div"),f(Eo.$$.fragment),tl=i(),Co=n("p"),ol=r(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ta=n("a"),nl=r("PreTrainedModel"),al=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sl=i(),jo=n("p"),rl=r("This model is also a PyTorch "),Po=n("a"),dl=r("torch.nn.Module"),il=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ll=i(),_e=n("div"),f(Oo.$$.fragment),cl=i(),wt=n("p"),pl=r("The "),oa=n("a"),hl=r("BlenderbotModel"),ul=r(" forward method, overrides the "),ts=n("code"),ml=r("__call__"),fl=r(" special method."),_l=i(),f(Wt.$$.fragment),gl=i(),os=n("p"),bl=r("Example:"),kl=i(),f(No.$$.fragment),Pr=i(),Bt=n("h2"),Ut=n("a"),ns=n("span"),f(Ao.$$.fragment),yl=i(),as=n("span"),vl=r("BlenderbotForConditionalGeneration"),Or=i(),Ue=n("p"),Tl=r("See "),na=n("a"),wl=r("BartForConditionalGeneration"),Bl=r(" for arguments to "),ss=n("em"),zl=r("forward"),xl=r(" and "),rs=n("em"),Fl=r("generate"),Nr=i(),xe=n("div"),f(Io.$$.fragment),$l=i(),Lo=n("p"),ql=r(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),aa=n("a"),Ml=r("PreTrainedModel"),El=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cl=i(),So=n("p"),jl=r("This model is also a PyTorch "),Do=n("a"),Pl=r("torch.nn.Module"),Ol=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nl=i(),ge=n("div"),f(Go.$$.fragment),Al=i(),zt=n("p"),Il=r("The "),sa=n("a"),Ll=r("BlenderbotForConditionalGeneration"),Sl=r(" forward method, overrides the "),ds=n("code"),Dl=r("__call__"),Gl=r(" special method."),Wl=i(),f(Rt.$$.fragment),Ul=i(),is=n("p"),Rl=r("Conversation example:"),Hl=i(),f(Wo.$$.fragment),Ar=i(),xt=n("h2"),Ht=n("a"),ls=n("span"),f(Uo.$$.fragment),Kl=i(),cs=n("span"),Vl=r("BlenderbotForCausalLM"),Ir=i(),Ft=n("div"),f(Ro.$$.fragment),Jl=i(),Ye=n("div"),f(Ho.$$.fragment),Ql=i(),ps=n("p"),Xl=r("Example:"),Yl=i(),f(Ko.$$.fragment),Lr=i(),$t=n("h2"),Kt=n("a"),hs=n("span"),f(Vo.$$.fragment),Zl=i(),us=n("span"),ec=r("TFBlenderbotModel"),Sr=i(),le=n("div"),f(Jo.$$.fragment),tc=i(),Qo=n("p"),oc=r(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ra=n("a"),nc=r("TFPreTrainedModel"),ac=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sc=i(),Xo=n("p"),rc=r("This model is also a "),Yo=n("a"),dc=r("tf.keras.Model"),ic=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lc=i(),f(Vt.$$.fragment),cc=i(),be=n("div"),f(Zo.$$.fragment),pc=i(),qt=n("p"),hc=r("The "),da=n("a"),uc=r("TFBlenderbotModel"),mc=r(" forward method, overrides the "),ms=n("code"),fc=r("__call__"),_c=r(" special method."),gc=i(),f(Jt.$$.fragment),bc=i(),fs=n("p"),kc=r("Example:"),yc=i(),f(en.$$.fragment),Dr=i(),Mt=n("h2"),Qt=n("a"),_s=n("span"),f(tn.$$.fragment),vc=i(),gs=n("span"),Tc=r("TFBlenderbotForConditionalGeneration"),Gr=i(),ce=n("div"),f(on.$$.fragment),wc=i(),nn=n("p"),Bc=r(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=n("a"),zc=r("TFPreTrainedModel"),xc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fc=i(),an=n("p"),$c=r("This model is also a "),sn=n("a"),qc=r("tf.keras.Model"),Mc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ec=i(),f(Xt.$$.fragment),Cc=i(),X=n("div"),f(rn.$$.fragment),jc=i(),Et=n("p"),Pc=r("The "),la=n("a"),Oc=r("TFBlenderbotForConditionalGeneration"),Nc=r(" forward method, overrides the "),bs=n("code"),Ac=r("__call__"),Ic=r(" special method."),Lc=i(),f(Yt.$$.fragment),Sc=i(),ks=n("p"),Dc=r("Conversation example::"),Gc=i(),ys=n("blockquote"),vs=n("blockquote"),Ts=n("blockquote"),ws=n("p"),Wc=r(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Uc=i(),Bs=n("blockquote"),zs=n("blockquote"),xs=n("blockquote"),dn=n("p"),Rc=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Fs=n("s"),Hc=r(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Kc=r(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Wr=i(),Ct=n("h2"),Zt=n("a"),$s=n("span"),f(ln.$$.fragment),Vc=i(),qs=n("span"),Jc=r("FlaxBlenderbotModel"),Ur=i(),I=n("div"),f(cn.$$.fragment),Qc=i(),pn=n("p"),Xc=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ca=n("a"),Yc=r("FlaxPreTrainedModel"),Zc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep=i(),hn=n("p"),tp=r(`This model is also a Flax Linen
`),un=n("a"),op=r("flax.nn.Module"),np=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ap=i(),Ms=n("p"),sp=r("Finally, this model supports inherent JAX features such as:"),rp=i(),Re=n("ul"),Es=n("li"),mn=n("a"),dp=r("Just-In-Time (JIT) compilation"),ip=i(),Cs=n("li"),fn=n("a"),lp=r("Automatic Differentiation"),cp=i(),js=n("li"),_n=n("a"),pp=r("Vectorization"),hp=i(),Ps=n("li"),gn=n("a"),up=r("Parallelization"),mp=i(),ke=n("div"),f(bn.$$.fragment),fp=i(),jt=n("p"),_p=r("The "),Os=n("code"),gp=r("FlaxBlenderbotPreTrainedModel"),bp=r("forward method, overrides the "),Ns=n("code"),kp=r("__call__"),yp=r(" special method."),vp=i(),f(eo.$$.fragment),Tp=i(),As=n("p"),wp=r("Example:"),Bp=i(),f(kn.$$.fragment),zp=i(),Ze=n("div"),f(yn.$$.fragment),xp=i(),Is=n("p"),Fp=r("Example:"),$p=i(),f(vn.$$.fragment),qp=i(),et=n("div"),f(Tn.$$.fragment),Mp=i(),Ls=n("p"),Ep=r("Example:"),Cp=i(),f(wn.$$.fragment),Rr=i(),Pt=n("h2"),to=n("a"),Ss=n("span"),f(Bn.$$.fragment),jp=i(),Ds=n("span"),Pp=r("FlaxBlenderbotForConditionalGeneration"),Hr=i(),L=n("div"),f(zn.$$.fragment),Op=i(),xn=n("p"),Np=r(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),pa=n("a"),Ap=r("FlaxPreTrainedModel"),Ip=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lp=i(),Fn=n("p"),Sp=r(`This model is also a Flax Linen
`),$n=n("a"),Dp=r("flax.nn.Module"),Gp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wp=i(),Gs=n("p"),Up=r("Finally, this model supports inherent JAX features such as:"),Rp=i(),He=n("ul"),Ws=n("li"),qn=n("a"),Hp=r("Just-In-Time (JIT) compilation"),Kp=i(),Us=n("li"),Mn=n("a"),Vp=r("Automatic Differentiation"),Jp=i(),Rs=n("li"),En=n("a"),Qp=r("Vectorization"),Xp=i(),Hs=n("li"),Cn=n("a"),Yp=r("Parallelization"),Zp=i(),S=n("div"),f(jn.$$.fragment),eh=i(),Ot=n("p"),th=r("The "),Ks=n("code"),oh=r("FlaxBlenderbotPreTrainedModel"),nh=r("forward method, overrides the "),Vs=n("code"),ah=r("__call__"),sh=r(" special method."),rh=i(),f(oo.$$.fragment),dh=i(),Js=n("p"),ih=r("Conversation example::"),lh=i(),Qs=n("blockquote"),Xs=n("blockquote"),Ys=n("blockquote"),Zs=n("p"),ch=r("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),ph=i(),er=n("blockquote"),tr=n("blockquote"),or=n("blockquote"),nr=n("p"),hh=r(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),uh=i(),ar=n("blockquote"),sr=n("blockquote"),rr=n("blockquote"),dr=n("p"),mh=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),fh=i(),ir=n("blockquote"),lr=n("blockquote"),Pn=n("blockquote"),no=n("h1"),ao=n("a"),cr=n("span"),f(On.$$.fragment),_h=i(),pr=n("span"),gh=r("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),bh=i(),hr=n("p"),kh=r(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),yh=i(),tt=n("div"),f(Nn.$$.fragment),vh=i(),ur=n("p"),Th=r("Example:"),wh=i(),f(An.$$.fragment),Bh=i(),ot=n("div"),f(In.$$.fragment),zh=i(),mr=n("p"),xh=r("Example:"),Fh=i(),f(Ln.$$.fragment),this.h()},l(o){const h=Ff('[data-svelte="svelte-1phssyn"]',document.head);u=a(h,"META",{name:!0,content:!0}),h.forEach(t),x=l(o),v=a(o,"H1",{class:!0});var Sn=s(v);B=a(Sn,"A",{id:!0,class:!0,href:!0});var fr=s(B);z=a(fr,"SPAN",{});var _r=s(z);_(w.$$.fragment,_r),_r.forEach(t),fr.forEach(t),T=l(Sn),F=a(Sn,"SPAN",{});var gr=s(F);Ee=d(gr,"Blenderbot"),gr.forEach(t),Sn.forEach(t),he=l(o),q=a(o,"P",{});var so=s(q);ye=a(so,"STRONG",{});var br=s(ye);te=d(br,"DISCLAIMER:"),br.forEach(t),Ce=d(so," If you see something strange, file a "),oe=a(so,"A",{href:!0,rel:!0});var kr=s(oe);ne=d(kr,"Github Issue"),kr.forEach(t),je=d(so," ."),so.forEach(t),Fe=l(o),D=a(o,"H2",{class:!0});var Dn=s(D);O=a(Dn,"A",{id:!0,class:!0,href:!0});var Mh=s(O);ve=a(Mh,"SPAN",{});var Eh=s(ve);_(R.$$.fragment,Eh),Eh.forEach(t),Mh.forEach(t),M=l(Dn),C=a(Dn,"SPAN",{});var Ch=s(C);Pe=d(Ch,"Overview"),Ch.forEach(t),Dn.forEach(t),J=l(o),Q=a(o,"P",{});var Vr=s(Q);Oe=d(Vr,"The Blender chatbot model was proposed in "),G=a(Vr,"A",{href:!0,rel:!0});var jh=s(G);Ne=d(jh,"Recipes for building an open-domain chatbot"),jh.forEach(t),Ae=d(Vr,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Vr.forEach(t),N=l(o),ue=a(o,"P",{});var Ph=s(ue);ae=d(Ph,"The abstract of the paper is the following:"),Ph.forEach(t),$e=l(o),me=a(o,"P",{});var Oh=s(me);H=a(Oh,"EM",{});var Nh=s(H);Ie=d(Nh,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Nh.forEach(t),Oh.forEach(t),qe=l(o),E=a(o,"P",{});var ha=s(E);Le=d(ha,"This model was contributed by "),W=a(ha,"A",{href:!0,rel:!0});var Ah=s(W);Se=d(Ah,"sshleifer"),Ah.forEach(t),m=d(ha,". The authors\u2019 code can be found "),$=a(ha,"A",{href:!0,rel:!0});var Ih=s($);Te=d(Ih,"here"),Ih.forEach(t),ht=d(ha," ."),ha.forEach(t),Ve=l(o),j=a(o,"H2",{class:!0});var Jr=s(j);fe=a(Jr,"A",{id:!0,class:!0,href:!0});var Lh=s(fe);De=a(Lh,"SPAN",{});var Sh=s(De);_(we.$$.fragment,Sh),Sh.forEach(t),Lh.forEach(t),K=l(Jr),V=a(Jr,"SPAN",{});var Dh=s(V);ut=d(Dh,"Implementation Notes"),Dh.forEach(t),Jr.forEach(t),Je=l(o),A=a(o,"UL",{});var ua=s(A);Be=a(ua,"LI",{});var Qr=s(Be);mt=d(Qr,"Blenderbot uses a standard "),se=a(Qr,"A",{href:!0,rel:!0});var Gh=s(se);ft=d(Gh,"seq2seq model transformer"),Gh.forEach(t),$d=d(Qr," based architecture."),Qr.forEach(t),qd=l(ua),uo=a(ua,"LI",{});var Xr=s(uo);Md=d(Xr,"Available checkpoints can be found in the "),mo=a(Xr,"A",{href:!0,rel:!0});var Wh=s(mo);Ed=d(Wh,"model hub"),Wh.forEach(t),Cd=d(Xr,"."),Xr.forEach(t),jd=l(ua),Ge=a(ua,"LI",{});var ro=s(Ge);Pd=d(ro,"This is the "),qa=a(ro,"EM",{});var Uh=s(qa);Od=d(Uh,"default"),Uh.forEach(t),Nd=d(ro,` Blenderbot model class. However, some smaller checkpoints, such as
`),Ma=a(ro,"CODE",{});var Rh=s(Ma);Ad=d(Rh,"facebook/blenderbot_small_90M"),Rh.forEach(t),Id=d(ro,`, have a different architecture and consequently should be used with
`),Un=a(ro,"A",{href:!0});var Hh=s(Un);Ld=d(Hh,"BlenderbotSmall"),Hh.forEach(t),Sd=d(ro,"."),ro.forEach(t),ua.forEach(t),Tr=l(o),_t=a(o,"H2",{class:!0});var Yr=s(_t);Nt=a(Yr,"A",{id:!0,class:!0,href:!0});var Kh=s(Nt);Ea=a(Kh,"SPAN",{});var Vh=s(Ea);_(fo.$$.fragment,Vh),Vh.forEach(t),Kh.forEach(t),Dd=l(Yr),Ca=a(Yr,"SPAN",{});var Jh=s(Ca);Gd=d(Jh,"Usage"),Jh.forEach(t),Yr.forEach(t),wr=l(o),Rn=a(o,"P",{});var Qh=s(Rn);Wd=d(Qh,"Here is an example of model usage:"),Qh.forEach(t),Br=l(o),_(_o.$$.fragment,o),zr=l(o),gt=a(o,"H2",{class:!0});var Zr=s(gt);At=a(Zr,"A",{id:!0,class:!0,href:!0});var Xh=s(At);ja=a(Xh,"SPAN",{});var Yh=s(ja);_(go.$$.fragment,Yh),Yh.forEach(t),Xh.forEach(t),Ud=l(Zr),Pa=a(Zr,"SPAN",{});var Zh=s(Pa);Rd=d(Zh,"BlenderbotConfig"),Zh.forEach(t),Zr.forEach(t),xr=l(o),re=a(o,"DIV",{class:!0});var nt=s(re);_(bo.$$.fragment,nt),Hd=l(nt),bt=a(nt,"P",{});var ma=s(bt);Kd=d(ma,"This is the configuration class to store the configuration of a "),Hn=a(ma,"A",{href:!0});var eu=s(Hn);Vd=d(eu,"BlenderbotModel"),eu.forEach(t),Jd=d(ma,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),ko=a(ma,"A",{href:!0,rel:!0});var tu=s(ko);Qd=d(tu,"facebook/blenderbot-3B"),tu.forEach(t),Xd=d(ma," architecture."),ma.forEach(t),Yd=l(nt),kt=a(nt,"P",{});var fa=s(kt);Zd=d(fa,"Configuration objects inherit from "),Kn=a(fa,"A",{href:!0});var ou=s(Kn);ei=d(ou,"PretrainedConfig"),ou.forEach(t),ti=d(fa,` and can be used to control the model outputs. Read the
documentation from `),Vn=a(fa,"A",{href:!0});var nu=s(Vn);oi=d(nu,"PretrainedConfig"),nu.forEach(t),ni=d(fa," for more information."),fa.forEach(t),ai=l(nt),Oa=a(nt,"P",{});var au=s(Oa);si=d(au,"Example:"),au.forEach(t),ri=l(nt),_(yo.$$.fragment,nt),nt.forEach(t),Fr=l(o),yt=a(o,"H2",{class:!0});var ed=s(yt);It=a(ed,"A",{id:!0,class:!0,href:!0});var su=s(It);Na=a(su,"SPAN",{});var ru=s(Na);_(vo.$$.fragment,ru),ru.forEach(t),su.forEach(t),di=l(ed),Aa=a(ed,"SPAN",{});var du=s(Aa);ii=d(du,"BlenderbotTokenizer"),du.forEach(t),ed.forEach(t),$r=l(o),de=a(o,"DIV",{class:!0});var at=s(de);_(To.$$.fragment,at),li=l(at),Ia=a(at,"P",{});var iu=s(Ia);ci=d(iu,"Construct a Blenderbot tokenizer."),iu.forEach(t),pi=l(at),Lt=a(at,"P",{});var yr=s(Lt);La=a(yr,"CODE",{});var lu=s(La);hi=d(lu,"Blenderbot"),lu.forEach(t),ui=d(yr," is nearly identical to "),Jn=a(yr,"A",{href:!0});var cu=s(Jn);mi=d(cu,"RobertaTokenizer"),cu.forEach(t),fi=d(yr,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),yr.forEach(t),_i=l(at),wo=a(at,"P",{});var td=s(wo);gi=d(td,"Refer to superclass "),Qn=a(td,"A",{href:!0});var pu=s(Qn);bi=d(pu,"RobertaTokenizer"),pu.forEach(t),ki=d(td," for usage examples and documentation concerning parameters."),td.forEach(t),yi=l(at),Qe=a(at,"DIV",{class:!0});var _a=s(Qe);_(Bo.$$.fragment,_a),vi=l(_a),Sa=a(_a,"P",{});var hu=s(Sa);Ti=d(hu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),hu.forEach(t),wi=l(_a),Da=a(_a,"UL",{});var uu=s(Da);Xn=a(uu,"LI",{});var $h=s(Xn);Bi=d($h,"single sequence: "),Ga=a($h,"CODE",{});var mu=s(Ga);zi=d(mu,"X </s>"),mu.forEach(t),$h.forEach(t),uu.forEach(t),_a.forEach(t),at.forEach(t),qr=l(o),vt=a(o,"H2",{class:!0});var od=s(vt);St=a(od,"A",{id:!0,class:!0,href:!0});var fu=s(St);Wa=a(fu,"SPAN",{});var _u=s(Wa);_(zo.$$.fragment,_u),_u.forEach(t),fu.forEach(t),xi=l(od),Ua=a(od,"SPAN",{});var gu=s(Ua);Fi=d(gu,"BlenderbotTokenizerFast"),gu.forEach(t),od.forEach(t),Mr=l(o),ie=a(o,"DIV",{class:!0});var st=s(ie);_(xo.$$.fragment,st),$i=l(st),Fo=a(st,"P",{});var nd=s(Fo);qi=d(nd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ra=a(nd,"EM",{});var bu=s(Ra);Mi=d(bu,"tokenizers"),bu.forEach(t),Ei=d(nd," library)."),nd.forEach(t),Ci=l(st),Dt=a(st,"P",{});var vr=s(Dt);Ha=a(vr,"CODE",{});var ku=s(Ha);ji=d(ku,"BlenderbotFast"),ku.forEach(t),Pi=d(vr," is nearly identical to "),Yn=a(vr,"A",{href:!0});var yu=s(Yn);Oi=d(yu,"RobertaTokenizerFast"),yu.forEach(t),Ni=d(vr,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),vr.forEach(t),Ai=l(st),$o=a(st,"P",{});var ad=s($o);Ii=d(ad,"Refer to superclass "),Zn=a(ad,"A",{href:!0});var vu=s(Zn);Li=d(vu,"RobertaTokenizerFast"),vu.forEach(t),Si=d(ad," for usage examples and documentation concerning parameters."),ad.forEach(t),Di=l(st),Xe=a(st,"DIV",{class:!0});var ga=s(Xe);_(qo.$$.fragment,ga),Gi=l(ga),Ka=a(ga,"P",{});var Tu=s(Ka);Wi=d(Tu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Tu.forEach(t),Ui=l(ga),Va=a(ga,"UL",{});var wu=s(Va);ea=a(wu,"LI",{});var qh=s(ea);Ri=d(qh,"single sequence: "),Ja=a(qh,"CODE",{});var Bu=s(Ja);Hi=d(Bu,"X </s>"),Bu.forEach(t),qh.forEach(t),wu.forEach(t),ga.forEach(t),st.forEach(t),Er=l(o),Tt=a(o,"H2",{class:!0});var sd=s(Tt);Gt=a(sd,"A",{id:!0,class:!0,href:!0});var zu=s(Gt);Qa=a(zu,"SPAN",{});var xu=s(Qa);_(Mo.$$.fragment,xu),xu.forEach(t),zu.forEach(t),Ki=l(sd),Xa=a(sd,"SPAN",{});var Fu=s(Xa);Vi=d(Fu,"BlenderbotModel"),Fu.forEach(t),sd.forEach(t),Cr=l(o),We=a(o,"P",{});var Gn=s(We);Ji=d(Gn,"See "),Ya=a(Gn,"CODE",{});var $u=s(Ya);Qi=d($u,"transformers.BartModel"),$u.forEach(t),Xi=d(Gn," for arguments to "),Za=a(Gn,"EM",{});var qu=s(Za);Yi=d(qu,"forward"),qu.forEach(t),Zi=d(Gn," and "),es=a(Gn,"EM",{});var Mu=s(es);el=d(Mu,"generate"),Mu.forEach(t),Gn.forEach(t),jr=l(o),ze=a(o,"DIV",{class:!0});var io=s(ze);_(Eo.$$.fragment,io),tl=l(io),Co=a(io,"P",{});var rd=s(Co);ol=d(rd,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ta=a(rd,"A",{href:!0});var Eu=s(ta);nl=d(Eu,"PreTrainedModel"),Eu.forEach(t),al=d(rd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rd.forEach(t),sl=l(io),jo=a(io,"P",{});var dd=s(jo);rl=d(dd,"This model is also a PyTorch "),Po=a(dd,"A",{href:!0,rel:!0});var Cu=s(Po);dl=d(Cu,"torch.nn.Module"),Cu.forEach(t),il=d(dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dd.forEach(t),ll=l(io),_e=a(io,"DIV",{class:!0});var rt=s(_e);_(Oo.$$.fragment,rt),cl=l(rt),wt=a(rt,"P",{});var ba=s(wt);pl=d(ba,"The "),oa=a(ba,"A",{href:!0});var ju=s(oa);hl=d(ju,"BlenderbotModel"),ju.forEach(t),ul=d(ba," forward method, overrides the "),ts=a(ba,"CODE",{});var Pu=s(ts);ml=d(Pu,"__call__"),Pu.forEach(t),fl=d(ba," special method."),ba.forEach(t),_l=l(rt),_(Wt.$$.fragment,rt),gl=l(rt),os=a(rt,"P",{});var Ou=s(os);bl=d(Ou,"Example:"),Ou.forEach(t),kl=l(rt),_(No.$$.fragment,rt),rt.forEach(t),io.forEach(t),Pr=l(o),Bt=a(o,"H2",{class:!0});var id=s(Bt);Ut=a(id,"A",{id:!0,class:!0,href:!0});var Nu=s(Ut);ns=a(Nu,"SPAN",{});var Au=s(ns);_(Ao.$$.fragment,Au),Au.forEach(t),Nu.forEach(t),yl=l(id),as=a(id,"SPAN",{});var Iu=s(as);vl=d(Iu,"BlenderbotForConditionalGeneration"),Iu.forEach(t),id.forEach(t),Or=l(o),Ue=a(o,"P",{});var Wn=s(Ue);Tl=d(Wn,"See "),na=a(Wn,"A",{href:!0});var Lu=s(na);wl=d(Lu,"BartForConditionalGeneration"),Lu.forEach(t),Bl=d(Wn," for arguments to "),ss=a(Wn,"EM",{});var Su=s(ss);zl=d(Su,"forward"),Su.forEach(t),xl=d(Wn," and "),rs=a(Wn,"EM",{});var Du=s(rs);Fl=d(Du,"generate"),Du.forEach(t),Wn.forEach(t),Nr=l(o),xe=a(o,"DIV",{class:!0});var lo=s(xe);_(Io.$$.fragment,lo),$l=l(lo),Lo=a(lo,"P",{});var ld=s(Lo);ql=d(ld,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),aa=a(ld,"A",{href:!0});var Gu=s(aa);Ml=d(Gu,"PreTrainedModel"),Gu.forEach(t),El=d(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(t),Cl=l(lo),So=a(lo,"P",{});var cd=s(So);jl=d(cd,"This model is also a PyTorch "),Do=a(cd,"A",{href:!0,rel:!0});var Wu=s(Do);Pl=d(Wu,"torch.nn.Module"),Wu.forEach(t),Ol=d(cd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cd.forEach(t),Nl=l(lo),ge=a(lo,"DIV",{class:!0});var dt=s(ge);_(Go.$$.fragment,dt),Al=l(dt),zt=a(dt,"P",{});var ka=s(zt);Il=d(ka,"The "),sa=a(ka,"A",{href:!0});var Uu=s(sa);Ll=d(Uu,"BlenderbotForConditionalGeneration"),Uu.forEach(t),Sl=d(ka," forward method, overrides the "),ds=a(ka,"CODE",{});var Ru=s(ds);Dl=d(Ru,"__call__"),Ru.forEach(t),Gl=d(ka," special method."),ka.forEach(t),Wl=l(dt),_(Rt.$$.fragment,dt),Ul=l(dt),is=a(dt,"P",{});var Hu=s(is);Rl=d(Hu,"Conversation example:"),Hu.forEach(t),Hl=l(dt),_(Wo.$$.fragment,dt),dt.forEach(t),lo.forEach(t),Ar=l(o),xt=a(o,"H2",{class:!0});var pd=s(xt);Ht=a(pd,"A",{id:!0,class:!0,href:!0});var Ku=s(Ht);ls=a(Ku,"SPAN",{});var Vu=s(ls);_(Uo.$$.fragment,Vu),Vu.forEach(t),Ku.forEach(t),Kl=l(pd),cs=a(pd,"SPAN",{});var Ju=s(cs);Vl=d(Ju,"BlenderbotForCausalLM"),Ju.forEach(t),pd.forEach(t),Ir=l(o),Ft=a(o,"DIV",{class:!0});var hd=s(Ft);_(Ro.$$.fragment,hd),Jl=l(hd),Ye=a(hd,"DIV",{class:!0});var ya=s(Ye);_(Ho.$$.fragment,ya),Ql=l(ya),ps=a(ya,"P",{});var Qu=s(ps);Xl=d(Qu,"Example:"),Qu.forEach(t),Yl=l(ya),_(Ko.$$.fragment,ya),ya.forEach(t),hd.forEach(t),Lr=l(o),$t=a(o,"H2",{class:!0});var ud=s($t);Kt=a(ud,"A",{id:!0,class:!0,href:!0});var Xu=s(Kt);hs=a(Xu,"SPAN",{});var Yu=s(hs);_(Vo.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),Zl=l(ud),us=a(ud,"SPAN",{});var Zu=s(us);ec=d(Zu,"TFBlenderbotModel"),Zu.forEach(t),ud.forEach(t),Sr=l(o),le=a(o,"DIV",{class:!0});var it=s(le);_(Jo.$$.fragment,it),tc=l(it),Qo=a(it,"P",{});var md=s(Qo);oc=d(md,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ra=a(md,"A",{href:!0});var em=s(ra);nc=d(em,"TFPreTrainedModel"),em.forEach(t),ac=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),sc=l(it),Xo=a(it,"P",{});var fd=s(Xo);rc=d(fd,"This model is also a "),Yo=a(fd,"A",{href:!0,rel:!0});var tm=s(Yo);dc=d(tm,"tf.keras.Model"),tm.forEach(t),ic=d(fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fd.forEach(t),lc=l(it),_(Vt.$$.fragment,it),cc=l(it),be=a(it,"DIV",{class:!0});var lt=s(be);_(Zo.$$.fragment,lt),pc=l(lt),qt=a(lt,"P",{});var va=s(qt);hc=d(va,"The "),da=a(va,"A",{href:!0});var om=s(da);uc=d(om,"TFBlenderbotModel"),om.forEach(t),mc=d(va," forward method, overrides the "),ms=a(va,"CODE",{});var nm=s(ms);fc=d(nm,"__call__"),nm.forEach(t),_c=d(va," special method."),va.forEach(t),gc=l(lt),_(Jt.$$.fragment,lt),bc=l(lt),fs=a(lt,"P",{});var am=s(fs);kc=d(am,"Example:"),am.forEach(t),yc=l(lt),_(en.$$.fragment,lt),lt.forEach(t),it.forEach(t),Dr=l(o),Mt=a(o,"H2",{class:!0});var _d=s(Mt);Qt=a(_d,"A",{id:!0,class:!0,href:!0});var sm=s(Qt);_s=a(sm,"SPAN",{});var rm=s(_s);_(tn.$$.fragment,rm),rm.forEach(t),sm.forEach(t),vc=l(_d),gs=a(_d,"SPAN",{});var dm=s(gs);Tc=d(dm,"TFBlenderbotForConditionalGeneration"),dm.forEach(t),_d.forEach(t),Gr=l(o),ce=a(o,"DIV",{class:!0});var ct=s(ce);_(on.$$.fragment,ct),wc=l(ct),nn=a(ct,"P",{});var gd=s(nn);Bc=d(gd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=a(gd,"A",{href:!0});var im=s(ia);zc=d(im,"TFPreTrainedModel"),im.forEach(t),xc=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),Fc=l(ct),an=a(ct,"P",{});var bd=s(an);$c=d(bd,"This model is also a "),sn=a(bd,"A",{href:!0,rel:!0});var lm=s(sn);qc=d(lm,"tf.keras.Model"),lm.forEach(t),Mc=d(bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd.forEach(t),Ec=l(ct),_(Xt.$$.fragment,ct),Cc=l(ct),X=a(ct,"DIV",{class:!0});var Me=s(X);_(rn.$$.fragment,Me),jc=l(Me),Et=a(Me,"P",{});var Ta=s(Et);Pc=d(Ta,"The "),la=a(Ta,"A",{href:!0});var cm=s(la);Oc=d(cm,"TFBlenderbotForConditionalGeneration"),cm.forEach(t),Nc=d(Ta," forward method, overrides the "),bs=a(Ta,"CODE",{});var pm=s(bs);Ac=d(pm,"__call__"),pm.forEach(t),Ic=d(Ta," special method."),Ta.forEach(t),Lc=l(Me),_(Yt.$$.fragment,Me),Sc=l(Me),ks=a(Me,"P",{});var hm=s(ks);Dc=d(hm,"Conversation example::"),hm.forEach(t),Gc=l(Me),ys=a(Me,"BLOCKQUOTE",{});var um=s(ys);vs=a(um,"BLOCKQUOTE",{});var mm=s(vs);Ts=a(mm,"BLOCKQUOTE",{});var fm=s(Ts);ws=a(fm,"P",{});var _m=s(ws);Wc=d(_m,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),_m.forEach(t),fm.forEach(t),mm.forEach(t),um.forEach(t),Uc=l(Me),Bs=a(Me,"BLOCKQUOTE",{});var gm=s(Bs);zs=a(gm,"BLOCKQUOTE",{});var bm=s(zs);xs=a(bm,"BLOCKQUOTE",{});var km=s(xs);dn=a(km,"P",{});var kd=s(dn);Rc=d(kd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Fs=a(kd,"S",{});var ym=s(Fs);Hc=d(ym,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),ym.forEach(t),Kc=d(kd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),kd.forEach(t),km.forEach(t),bm.forEach(t),gm.forEach(t),Me.forEach(t),ct.forEach(t),Wr=l(o),Ct=a(o,"H2",{class:!0});var yd=s(Ct);Zt=a(yd,"A",{id:!0,class:!0,href:!0});var vm=s(Zt);$s=a(vm,"SPAN",{});var Tm=s($s);_(ln.$$.fragment,Tm),Tm.forEach(t),vm.forEach(t),Vc=l(yd),qs=a(yd,"SPAN",{});var wm=s(qs);Jc=d(wm,"FlaxBlenderbotModel"),wm.forEach(t),yd.forEach(t),Ur=l(o),I=a(o,"DIV",{class:!0});var Y=s(I);_(cn.$$.fragment,Y),Qc=l(Y),pn=a(Y,"P",{});var vd=s(pn);Xc=d(vd,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ca=a(vd,"A",{href:!0});var Bm=s(ca);Yc=d(Bm,"FlaxPreTrainedModel"),Bm.forEach(t),Zc=d(vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vd.forEach(t),ep=l(Y),hn=a(Y,"P",{});var Td=s(hn);tp=d(Td,`This model is also a Flax Linen
`),un=a(Td,"A",{href:!0,rel:!0});var zm=s(un);op=d(zm,"flax.nn.Module"),zm.forEach(t),np=d(Td,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Td.forEach(t),ap=l(Y),Ms=a(Y,"P",{});var xm=s(Ms);sp=d(xm,"Finally, this model supports inherent JAX features such as:"),xm.forEach(t),rp=l(Y),Re=a(Y,"UL",{});var co=s(Re);Es=a(co,"LI",{});var Fm=s(Es);mn=a(Fm,"A",{href:!0,rel:!0});var $m=s(mn);dp=d($m,"Just-In-Time (JIT) compilation"),$m.forEach(t),Fm.forEach(t),ip=l(co),Cs=a(co,"LI",{});var qm=s(Cs);fn=a(qm,"A",{href:!0,rel:!0});var Mm=s(fn);lp=d(Mm,"Automatic Differentiation"),Mm.forEach(t),qm.forEach(t),cp=l(co),js=a(co,"LI",{});var Em=s(js);_n=a(Em,"A",{href:!0,rel:!0});var Cm=s(_n);pp=d(Cm,"Vectorization"),Cm.forEach(t),Em.forEach(t),hp=l(co),Ps=a(co,"LI",{});var jm=s(Ps);gn=a(jm,"A",{href:!0,rel:!0});var Pm=s(gn);up=d(Pm,"Parallelization"),Pm.forEach(t),jm.forEach(t),co.forEach(t),mp=l(Y),ke=a(Y,"DIV",{class:!0});var pt=s(ke);_(bn.$$.fragment,pt),fp=l(pt),jt=a(pt,"P",{});var wa=s(jt);_p=d(wa,"The "),Os=a(wa,"CODE",{});var Om=s(Os);gp=d(Om,"FlaxBlenderbotPreTrainedModel"),Om.forEach(t),bp=d(wa,"forward method, overrides the "),Ns=a(wa,"CODE",{});var Nm=s(Ns);kp=d(Nm,"__call__"),Nm.forEach(t),yp=d(wa," special method."),wa.forEach(t),vp=l(pt),_(eo.$$.fragment,pt),Tp=l(pt),As=a(pt,"P",{});var Am=s(As);wp=d(Am,"Example:"),Am.forEach(t),Bp=l(pt),_(kn.$$.fragment,pt),pt.forEach(t),zp=l(Y),Ze=a(Y,"DIV",{class:!0});var Ba=s(Ze);_(yn.$$.fragment,Ba),xp=l(Ba),Is=a(Ba,"P",{});var Im=s(Is);Fp=d(Im,"Example:"),Im.forEach(t),$p=l(Ba),_(vn.$$.fragment,Ba),Ba.forEach(t),qp=l(Y),et=a(Y,"DIV",{class:!0});var za=s(et);_(Tn.$$.fragment,za),Mp=l(za),Ls=a(za,"P",{});var Lm=s(Ls);Ep=d(Lm,"Example:"),Lm.forEach(t),Cp=l(za),_(wn.$$.fragment,za),za.forEach(t),Y.forEach(t),Rr=l(o),Pt=a(o,"H2",{class:!0});var wd=s(Pt);to=a(wd,"A",{id:!0,class:!0,href:!0});var Sm=s(to);Ss=a(Sm,"SPAN",{});var Dm=s(Ss);_(Bn.$$.fragment,Dm),Dm.forEach(t),Sm.forEach(t),jp=l(wd),Ds=a(wd,"SPAN",{});var Gm=s(Ds);Pp=d(Gm,"FlaxBlenderbotForConditionalGeneration"),Gm.forEach(t),wd.forEach(t),Hr=l(o),L=a(o,"DIV",{class:!0});var Z=s(L);_(zn.$$.fragment,Z),Op=l(Z),xn=a(Z,"P",{});var Bd=s(xn);Np=d(Bd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),pa=a(Bd,"A",{href:!0});var Wm=s(pa);Ap=d(Wm,"FlaxPreTrainedModel"),Wm.forEach(t),Ip=d(Bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd.forEach(t),Lp=l(Z),Fn=a(Z,"P",{});var zd=s(Fn);Sp=d(zd,`This model is also a Flax Linen
`),$n=a(zd,"A",{href:!0,rel:!0});var Um=s($n);Dp=d(Um,"flax.nn.Module"),Um.forEach(t),Gp=d(zd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zd.forEach(t),Wp=l(Z),Gs=a(Z,"P",{});var Rm=s(Gs);Up=d(Rm,"Finally, this model supports inherent JAX features such as:"),Rm.forEach(t),Rp=l(Z),He=a(Z,"UL",{});var po=s(He);Ws=a(po,"LI",{});var Hm=s(Ws);qn=a(Hm,"A",{href:!0,rel:!0});var Km=s(qn);Hp=d(Km,"Just-In-Time (JIT) compilation"),Km.forEach(t),Hm.forEach(t),Kp=l(po),Us=a(po,"LI",{});var Vm=s(Us);Mn=a(Vm,"A",{href:!0,rel:!0});var Jm=s(Mn);Vp=d(Jm,"Automatic Differentiation"),Jm.forEach(t),Vm.forEach(t),Jp=l(po),Rs=a(po,"LI",{});var Qm=s(Rs);En=a(Qm,"A",{href:!0,rel:!0});var Xm=s(En);Qp=d(Xm,"Vectorization"),Xm.forEach(t),Qm.forEach(t),Xp=l(po),Hs=a(po,"LI",{});var Ym=s(Hs);Cn=a(Ym,"A",{href:!0,rel:!0});var Zm=s(Cn);Yp=d(Zm,"Parallelization"),Zm.forEach(t),Ym.forEach(t),po.forEach(t),Zp=l(Z),S=a(Z,"DIV",{class:!0});var ee=s(S);_(jn.$$.fragment,ee),eh=l(ee),Ot=a(ee,"P",{});var xa=s(Ot);th=d(xa,"The "),Ks=a(xa,"CODE",{});var ef=s(Ks);oh=d(ef,"FlaxBlenderbotPreTrainedModel"),ef.forEach(t),nh=d(xa,"forward method, overrides the "),Vs=a(xa,"CODE",{});var tf=s(Vs);ah=d(tf,"__call__"),tf.forEach(t),sh=d(xa," special method."),xa.forEach(t),rh=l(ee),_(oo.$$.fragment,ee),dh=l(ee),Js=a(ee,"P",{});var of=s(Js);ih=d(of,"Conversation example::"),of.forEach(t),lh=l(ee),Qs=a(ee,"BLOCKQUOTE",{});var nf=s(Qs);Xs=a(nf,"BLOCKQUOTE",{});var af=s(Xs);Ys=a(af,"BLOCKQUOTE",{});var sf=s(Ys);Zs=a(sf,"P",{});var rf=s(Zs);ch=d(rf,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),rf.forEach(t),sf.forEach(t),af.forEach(t),nf.forEach(t),ph=l(ee),er=a(ee,"BLOCKQUOTE",{});var df=s(er);tr=a(df,"BLOCKQUOTE",{});var lf=s(tr);or=a(lf,"BLOCKQUOTE",{});var cf=s(or);nr=a(cf,"P",{});var pf=s(nr);hh=d(pf,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),pf.forEach(t),cf.forEach(t),lf.forEach(t),df.forEach(t),uh=l(ee),ar=a(ee,"BLOCKQUOTE",{});var hf=s(ar);sr=a(hf,"BLOCKQUOTE",{});var uf=s(sr);rr=a(uf,"BLOCKQUOTE",{});var mf=s(rr);dr=a(mf,"P",{});var ff=s(dr);mh=d(ff,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),ff.forEach(t),mf.forEach(t),uf.forEach(t),hf.forEach(t),fh=l(ee),ir=a(ee,"BLOCKQUOTE",{});var _f=s(ir);lr=a(_f,"BLOCKQUOTE",{});var gf=s(lr);Pn=a(gf,"BLOCKQUOTE",{});var xd=s(Pn);no=a(xd,"H1",{class:!0});var Fd=s(no);ao=a(Fd,"A",{id:!0,class:!0,href:!0});var bf=s(ao);cr=a(bf,"SPAN",{});var kf=s(cr);_(On.$$.fragment,kf),kf.forEach(t),bf.forEach(t),_h=l(Fd),pr=a(Fd,"SPAN",{});var yf=s(pr);gh=d(yf,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),yf.forEach(t),Fd.forEach(t),bh=l(xd),hr=a(xd,"P",{});var vf=s(hr);kh=d(vf,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),vf.forEach(t),xd.forEach(t),gf.forEach(t),_f.forEach(t),ee.forEach(t),yh=l(Z),tt=a(Z,"DIV",{class:!0});var Fa=s(tt);_(Nn.$$.fragment,Fa),vh=l(Fa),ur=a(Fa,"P",{});var Tf=s(ur);Th=d(Tf,"Example:"),Tf.forEach(t),wh=l(Fa),_(An.$$.fragment,Fa),Fa.forEach(t),Bh=l(Z),ot=a(Z,"DIV",{class:!0});var $a=s(ot);_(In.$$.fragment,$a),zh=l($a),mr=a($a,"P",{});var wf=s(mr);xh=d(wf,"Example:"),wf.forEach(t),Fh=l($a),_(Ln.$$.fragment,$a),$a.forEach(t),Z.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(If)),c(B,"id","blenderbot"),c(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(B,"href","#blenderbot"),c(v,"class","relative group"),c(oe,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(oe,"rel","nofollow"),c(O,"id","overview"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#overview"),c(D,"class","relative group"),c(G,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(G,"rel","nofollow"),c(W,"href","https://huggingface.co/sshleifer"),c(W,"rel","nofollow"),c($,"href","https://github.com/facebookresearch/ParlAI"),c($,"rel","nofollow"),c(fe,"id","implementation-notes"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#implementation-notes"),c(j,"class","relative group"),c(se,"href","https://arxiv.org/pdf/1706.03762.pdf"),c(se,"rel","nofollow"),c(mo,"href","https://huggingface.co/models?search=blenderbot"),c(mo,"rel","nofollow"),c(Un,"href","blenderbot-small"),c(Nt,"id","usage"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#usage"),c(_t,"class","relative group"),c(At,"id","transformers.BlenderbotConfig"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.BlenderbotConfig"),c(gt,"class","relative group"),c(Hn,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(ko,"href","https://huggingface.co/facebook/blenderbot-3B"),c(ko,"rel","nofollow"),c(Kn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Vn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(re,"class","docstring"),c(It,"id","transformers.BlenderbotTokenizer"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.BlenderbotTokenizer"),c(yt,"class","relative group"),c(Jn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qe,"class","docstring"),c(de,"class","docstring"),c(St,"id","transformers.BlenderbotTokenizerFast"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.BlenderbotTokenizerFast"),c(vt,"class","relative group"),c(Yn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Zn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Xe,"class","docstring"),c(ie,"class","docstring"),c(Gt,"id","transformers.BlenderbotModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.BlenderbotModel"),c(Tt,"class","relative group"),c(ta,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Po,"rel","nofollow"),c(oa,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(_e,"class","docstring"),c(ze,"class","docstring"),c(Ut,"id","transformers.BlenderbotForConditionalGeneration"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.BlenderbotForConditionalGeneration"),c(Bt,"class","relative group"),c(na,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(aa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Do,"rel","nofollow"),c(sa,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(ge,"class","docstring"),c(xe,"class","docstring"),c(Ht,"id","transformers.BlenderbotForCausalLM"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.BlenderbotForCausalLM"),c(xt,"class","relative group"),c(Ye,"class","docstring"),c(Ft,"class","docstring"),c(Kt,"id","transformers.TFBlenderbotModel"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.TFBlenderbotModel"),c($t,"class","relative group"),c(ra,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Yo,"rel","nofollow"),c(da,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),c(be,"class","docstring"),c(le,"class","docstring"),c(Qt,"id","transformers.TFBlenderbotForConditionalGeneration"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.TFBlenderbotForConditionalGeneration"),c(Mt,"class","relative group"),c(ia,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(sn,"rel","nofollow"),c(la,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),c(X,"class","docstring"),c(ce,"class","docstring"),c(Zt,"id","transformers.FlaxBlenderbotModel"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.FlaxBlenderbotModel"),c(Ct,"class","relative group"),c(ca,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(un,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(un,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(ke,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(I,"class","docstring"),c(to,"id","transformers.FlaxBlenderbotForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),c(Pt,"class","relative group"),c(pa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($n,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c($n,"rel","nofollow"),c(qn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(qn,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Mn,"rel","nofollow"),c(En,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(En,"rel","nofollow"),c(Cn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Cn,"rel","nofollow"),c(ao,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(no,"class","relative group"),c(S,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(L,"class","docstring")},m(o,h){e(document.head,u),p(o,x,h),p(o,v,h),e(v,B),e(B,z),g(w,z,null),e(v,T),e(v,F),e(F,Ee),p(o,he,h),p(o,q,h),e(q,ye),e(ye,te),e(q,Ce),e(q,oe),e(oe,ne),e(q,je),p(o,Fe,h),p(o,D,h),e(D,O),e(O,ve),g(R,ve,null),e(D,M),e(D,C),e(C,Pe),p(o,J,h),p(o,Q,h),e(Q,Oe),e(Q,G),e(G,Ne),e(Q,Ae),p(o,N,h),p(o,ue,h),e(ue,ae),p(o,$e,h),p(o,me,h),e(me,H),e(H,Ie),p(o,qe,h),p(o,E,h),e(E,Le),e(E,W),e(W,Se),e(E,m),e(E,$),e($,Te),e(E,ht),p(o,Ve,h),p(o,j,h),e(j,fe),e(fe,De),g(we,De,null),e(j,K),e(j,V),e(V,ut),p(o,Je,h),p(o,A,h),e(A,Be),e(Be,mt),e(Be,se),e(se,ft),e(Be,$d),e(A,qd),e(A,uo),e(uo,Md),e(uo,mo),e(mo,Ed),e(uo,Cd),e(A,jd),e(A,Ge),e(Ge,Pd),e(Ge,qa),e(qa,Od),e(Ge,Nd),e(Ge,Ma),e(Ma,Ad),e(Ge,Id),e(Ge,Un),e(Un,Ld),e(Ge,Sd),p(o,Tr,h),p(o,_t,h),e(_t,Nt),e(Nt,Ea),g(fo,Ea,null),e(_t,Dd),e(_t,Ca),e(Ca,Gd),p(o,wr,h),p(o,Rn,h),e(Rn,Wd),p(o,Br,h),g(_o,o,h),p(o,zr,h),p(o,gt,h),e(gt,At),e(At,ja),g(go,ja,null),e(gt,Ud),e(gt,Pa),e(Pa,Rd),p(o,xr,h),p(o,re,h),g(bo,re,null),e(re,Hd),e(re,bt),e(bt,Kd),e(bt,Hn),e(Hn,Vd),e(bt,Jd),e(bt,ko),e(ko,Qd),e(bt,Xd),e(re,Yd),e(re,kt),e(kt,Zd),e(kt,Kn),e(Kn,ei),e(kt,ti),e(kt,Vn),e(Vn,oi),e(kt,ni),e(re,ai),e(re,Oa),e(Oa,si),e(re,ri),g(yo,re,null),p(o,Fr,h),p(o,yt,h),e(yt,It),e(It,Na),g(vo,Na,null),e(yt,di),e(yt,Aa),e(Aa,ii),p(o,$r,h),p(o,de,h),g(To,de,null),e(de,li),e(de,Ia),e(Ia,ci),e(de,pi),e(de,Lt),e(Lt,La),e(La,hi),e(Lt,ui),e(Lt,Jn),e(Jn,mi),e(Lt,fi),e(de,_i),e(de,wo),e(wo,gi),e(wo,Qn),e(Qn,bi),e(wo,ki),e(de,yi),e(de,Qe),g(Bo,Qe,null),e(Qe,vi),e(Qe,Sa),e(Sa,Ti),e(Qe,wi),e(Qe,Da),e(Da,Xn),e(Xn,Bi),e(Xn,Ga),e(Ga,zi),p(o,qr,h),p(o,vt,h),e(vt,St),e(St,Wa),g(zo,Wa,null),e(vt,xi),e(vt,Ua),e(Ua,Fi),p(o,Mr,h),p(o,ie,h),g(xo,ie,null),e(ie,$i),e(ie,Fo),e(Fo,qi),e(Fo,Ra),e(Ra,Mi),e(Fo,Ei),e(ie,Ci),e(ie,Dt),e(Dt,Ha),e(Ha,ji),e(Dt,Pi),e(Dt,Yn),e(Yn,Oi),e(Dt,Ni),e(ie,Ai),e(ie,$o),e($o,Ii),e($o,Zn),e(Zn,Li),e($o,Si),e(ie,Di),e(ie,Xe),g(qo,Xe,null),e(Xe,Gi),e(Xe,Ka),e(Ka,Wi),e(Xe,Ui),e(Xe,Va),e(Va,ea),e(ea,Ri),e(ea,Ja),e(Ja,Hi),p(o,Er,h),p(o,Tt,h),e(Tt,Gt),e(Gt,Qa),g(Mo,Qa,null),e(Tt,Ki),e(Tt,Xa),e(Xa,Vi),p(o,Cr,h),p(o,We,h),e(We,Ji),e(We,Ya),e(Ya,Qi),e(We,Xi),e(We,Za),e(Za,Yi),e(We,Zi),e(We,es),e(es,el),p(o,jr,h),p(o,ze,h),g(Eo,ze,null),e(ze,tl),e(ze,Co),e(Co,ol),e(Co,ta),e(ta,nl),e(Co,al),e(ze,sl),e(ze,jo),e(jo,rl),e(jo,Po),e(Po,dl),e(jo,il),e(ze,ll),e(ze,_e),g(Oo,_e,null),e(_e,cl),e(_e,wt),e(wt,pl),e(wt,oa),e(oa,hl),e(wt,ul),e(wt,ts),e(ts,ml),e(wt,fl),e(_e,_l),g(Wt,_e,null),e(_e,gl),e(_e,os),e(os,bl),e(_e,kl),g(No,_e,null),p(o,Pr,h),p(o,Bt,h),e(Bt,Ut),e(Ut,ns),g(Ao,ns,null),e(Bt,yl),e(Bt,as),e(as,vl),p(o,Or,h),p(o,Ue,h),e(Ue,Tl),e(Ue,na),e(na,wl),e(Ue,Bl),e(Ue,ss),e(ss,zl),e(Ue,xl),e(Ue,rs),e(rs,Fl),p(o,Nr,h),p(o,xe,h),g(Io,xe,null),e(xe,$l),e(xe,Lo),e(Lo,ql),e(Lo,aa),e(aa,Ml),e(Lo,El),e(xe,Cl),e(xe,So),e(So,jl),e(So,Do),e(Do,Pl),e(So,Ol),e(xe,Nl),e(xe,ge),g(Go,ge,null),e(ge,Al),e(ge,zt),e(zt,Il),e(zt,sa),e(sa,Ll),e(zt,Sl),e(zt,ds),e(ds,Dl),e(zt,Gl),e(ge,Wl),g(Rt,ge,null),e(ge,Ul),e(ge,is),e(is,Rl),e(ge,Hl),g(Wo,ge,null),p(o,Ar,h),p(o,xt,h),e(xt,Ht),e(Ht,ls),g(Uo,ls,null),e(xt,Kl),e(xt,cs),e(cs,Vl),p(o,Ir,h),p(o,Ft,h),g(Ro,Ft,null),e(Ft,Jl),e(Ft,Ye),g(Ho,Ye,null),e(Ye,Ql),e(Ye,ps),e(ps,Xl),e(Ye,Yl),g(Ko,Ye,null),p(o,Lr,h),p(o,$t,h),e($t,Kt),e(Kt,hs),g(Vo,hs,null),e($t,Zl),e($t,us),e(us,ec),p(o,Sr,h),p(o,le,h),g(Jo,le,null),e(le,tc),e(le,Qo),e(Qo,oc),e(Qo,ra),e(ra,nc),e(Qo,ac),e(le,sc),e(le,Xo),e(Xo,rc),e(Xo,Yo),e(Yo,dc),e(Xo,ic),e(le,lc),g(Vt,le,null),e(le,cc),e(le,be),g(Zo,be,null),e(be,pc),e(be,qt),e(qt,hc),e(qt,da),e(da,uc),e(qt,mc),e(qt,ms),e(ms,fc),e(qt,_c),e(be,gc),g(Jt,be,null),e(be,bc),e(be,fs),e(fs,kc),e(be,yc),g(en,be,null),p(o,Dr,h),p(o,Mt,h),e(Mt,Qt),e(Qt,_s),g(tn,_s,null),e(Mt,vc),e(Mt,gs),e(gs,Tc),p(o,Gr,h),p(o,ce,h),g(on,ce,null),e(ce,wc),e(ce,nn),e(nn,Bc),e(nn,ia),e(ia,zc),e(nn,xc),e(ce,Fc),e(ce,an),e(an,$c),e(an,sn),e(sn,qc),e(an,Mc),e(ce,Ec),g(Xt,ce,null),e(ce,Cc),e(ce,X),g(rn,X,null),e(X,jc),e(X,Et),e(Et,Pc),e(Et,la),e(la,Oc),e(Et,Nc),e(Et,bs),e(bs,Ac),e(Et,Ic),e(X,Lc),g(Yt,X,null),e(X,Sc),e(X,ks),e(ks,Dc),e(X,Gc),e(X,ys),e(ys,vs),e(vs,Ts),e(Ts,ws),e(ws,Wc),e(X,Uc),e(X,Bs),e(Bs,zs),e(zs,xs),e(xs,dn),e(dn,Rc),e(dn,Fs),e(Fs,Hc),e(dn,Kc),p(o,Wr,h),p(o,Ct,h),e(Ct,Zt),e(Zt,$s),g(ln,$s,null),e(Ct,Vc),e(Ct,qs),e(qs,Jc),p(o,Ur,h),p(o,I,h),g(cn,I,null),e(I,Qc),e(I,pn),e(pn,Xc),e(pn,ca),e(ca,Yc),e(pn,Zc),e(I,ep),e(I,hn),e(hn,tp),e(hn,un),e(un,op),e(hn,np),e(I,ap),e(I,Ms),e(Ms,sp),e(I,rp),e(I,Re),e(Re,Es),e(Es,mn),e(mn,dp),e(Re,ip),e(Re,Cs),e(Cs,fn),e(fn,lp),e(Re,cp),e(Re,js),e(js,_n),e(_n,pp),e(Re,hp),e(Re,Ps),e(Ps,gn),e(gn,up),e(I,mp),e(I,ke),g(bn,ke,null),e(ke,fp),e(ke,jt),e(jt,_p),e(jt,Os),e(Os,gp),e(jt,bp),e(jt,Ns),e(Ns,kp),e(jt,yp),e(ke,vp),g(eo,ke,null),e(ke,Tp),e(ke,As),e(As,wp),e(ke,Bp),g(kn,ke,null),e(I,zp),e(I,Ze),g(yn,Ze,null),e(Ze,xp),e(Ze,Is),e(Is,Fp),e(Ze,$p),g(vn,Ze,null),e(I,qp),e(I,et),g(Tn,et,null),e(et,Mp),e(et,Ls),e(Ls,Ep),e(et,Cp),g(wn,et,null),p(o,Rr,h),p(o,Pt,h),e(Pt,to),e(to,Ss),g(Bn,Ss,null),e(Pt,jp),e(Pt,Ds),e(Ds,Pp),p(o,Hr,h),p(o,L,h),g(zn,L,null),e(L,Op),e(L,xn),e(xn,Np),e(xn,pa),e(pa,Ap),e(xn,Ip),e(L,Lp),e(L,Fn),e(Fn,Sp),e(Fn,$n),e($n,Dp),e(Fn,Gp),e(L,Wp),e(L,Gs),e(Gs,Up),e(L,Rp),e(L,He),e(He,Ws),e(Ws,qn),e(qn,Hp),e(He,Kp),e(He,Us),e(Us,Mn),e(Mn,Vp),e(He,Jp),e(He,Rs),e(Rs,En),e(En,Qp),e(He,Xp),e(He,Hs),e(Hs,Cn),e(Cn,Yp),e(L,Zp),e(L,S),g(jn,S,null),e(S,eh),e(S,Ot),e(Ot,th),e(Ot,Ks),e(Ks,oh),e(Ot,nh),e(Ot,Vs),e(Vs,ah),e(Ot,sh),e(S,rh),g(oo,S,null),e(S,dh),e(S,Js),e(Js,ih),e(S,lh),e(S,Qs),e(Qs,Xs),e(Xs,Ys),e(Ys,Zs),e(Zs,ch),e(S,ph),e(S,er),e(er,tr),e(tr,or),e(or,nr),e(nr,hh),e(S,uh),e(S,ar),e(ar,sr),e(sr,rr),e(rr,dr),e(dr,mh),e(S,fh),e(S,ir),e(ir,lr),e(lr,Pn),e(Pn,no),e(no,ao),e(ao,cr),g(On,cr,null),e(no,_h),e(no,pr),e(pr,gh),e(Pn,bh),e(Pn,hr),e(hr,kh),e(L,yh),e(L,tt),g(Nn,tt,null),e(tt,vh),e(tt,ur),e(ur,Th),e(tt,wh),g(An,tt,null),e(L,Bh),e(L,ot),g(In,ot,null),e(ot,zh),e(ot,mr),e(mr,xh),e(ot,Fh),g(Ln,ot,null),Kr=!0},p(o,[h]){const Sn={};h&2&&(Sn.$$scope={dirty:h,ctx:o}),Wt.$set(Sn);const fr={};h&2&&(fr.$$scope={dirty:h,ctx:o}),Rt.$set(fr);const _r={};h&2&&(_r.$$scope={dirty:h,ctx:o}),Vt.$set(_r);const gr={};h&2&&(gr.$$scope={dirty:h,ctx:o}),Jt.$set(gr);const so={};h&2&&(so.$$scope={dirty:h,ctx:o}),Xt.$set(so);const br={};h&2&&(br.$$scope={dirty:h,ctx:o}),Yt.$set(br);const kr={};h&2&&(kr.$$scope={dirty:h,ctx:o}),eo.$set(kr);const Dn={};h&2&&(Dn.$$scope={dirty:h,ctx:o}),oo.$set(Dn)},i(o){Kr||(b(w.$$.fragment,o),b(R.$$.fragment,o),b(we.$$.fragment,o),b(fo.$$.fragment,o),b(_o.$$.fragment,o),b(go.$$.fragment,o),b(bo.$$.fragment,o),b(yo.$$.fragment,o),b(vo.$$.fragment,o),b(To.$$.fragment,o),b(Bo.$$.fragment,o),b(zo.$$.fragment,o),b(xo.$$.fragment,o),b(qo.$$.fragment,o),b(Mo.$$.fragment,o),b(Eo.$$.fragment,o),b(Oo.$$.fragment,o),b(Wt.$$.fragment,o),b(No.$$.fragment,o),b(Ao.$$.fragment,o),b(Io.$$.fragment,o),b(Go.$$.fragment,o),b(Rt.$$.fragment,o),b(Wo.$$.fragment,o),b(Uo.$$.fragment,o),b(Ro.$$.fragment,o),b(Ho.$$.fragment,o),b(Ko.$$.fragment,o),b(Vo.$$.fragment,o),b(Jo.$$.fragment,o),b(Vt.$$.fragment,o),b(Zo.$$.fragment,o),b(Jt.$$.fragment,o),b(en.$$.fragment,o),b(tn.$$.fragment,o),b(on.$$.fragment,o),b(Xt.$$.fragment,o),b(rn.$$.fragment,o),b(Yt.$$.fragment,o),b(ln.$$.fragment,o),b(cn.$$.fragment,o),b(bn.$$.fragment,o),b(eo.$$.fragment,o),b(kn.$$.fragment,o),b(yn.$$.fragment,o),b(vn.$$.fragment,o),b(Tn.$$.fragment,o),b(wn.$$.fragment,o),b(Bn.$$.fragment,o),b(zn.$$.fragment,o),b(jn.$$.fragment,o),b(oo.$$.fragment,o),b(On.$$.fragment,o),b(Nn.$$.fragment,o),b(An.$$.fragment,o),b(In.$$.fragment,o),b(Ln.$$.fragment,o),Kr=!0)},o(o){k(w.$$.fragment,o),k(R.$$.fragment,o),k(we.$$.fragment,o),k(fo.$$.fragment,o),k(_o.$$.fragment,o),k(go.$$.fragment,o),k(bo.$$.fragment,o),k(yo.$$.fragment,o),k(vo.$$.fragment,o),k(To.$$.fragment,o),k(Bo.$$.fragment,o),k(zo.$$.fragment,o),k(xo.$$.fragment,o),k(qo.$$.fragment,o),k(Mo.$$.fragment,o),k(Eo.$$.fragment,o),k(Oo.$$.fragment,o),k(Wt.$$.fragment,o),k(No.$$.fragment,o),k(Ao.$$.fragment,o),k(Io.$$.fragment,o),k(Go.$$.fragment,o),k(Rt.$$.fragment,o),k(Wo.$$.fragment,o),k(Uo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ho.$$.fragment,o),k(Ko.$$.fragment,o),k(Vo.$$.fragment,o),k(Jo.$$.fragment,o),k(Vt.$$.fragment,o),k(Zo.$$.fragment,o),k(Jt.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(on.$$.fragment,o),k(Xt.$$.fragment,o),k(rn.$$.fragment,o),k(Yt.$$.fragment,o),k(ln.$$.fragment,o),k(cn.$$.fragment,o),k(bn.$$.fragment,o),k(eo.$$.fragment,o),k(kn.$$.fragment,o),k(yn.$$.fragment,o),k(vn.$$.fragment,o),k(Tn.$$.fragment,o),k(wn.$$.fragment,o),k(Bn.$$.fragment,o),k(zn.$$.fragment,o),k(jn.$$.fragment,o),k(oo.$$.fragment,o),k(On.$$.fragment,o),k(Nn.$$.fragment,o),k(An.$$.fragment,o),k(In.$$.fragment,o),k(Ln.$$.fragment,o),Kr=!1},d(o){t(u),o&&t(x),o&&t(v),y(w),o&&t(he),o&&t(q),o&&t(Fe),o&&t(D),y(R),o&&t(J),o&&t(Q),o&&t(N),o&&t(ue),o&&t($e),o&&t(me),o&&t(qe),o&&t(E),o&&t(Ve),o&&t(j),y(we),o&&t(Je),o&&t(A),o&&t(Tr),o&&t(_t),y(fo),o&&t(wr),o&&t(Rn),o&&t(Br),y(_o,o),o&&t(zr),o&&t(gt),y(go),o&&t(xr),o&&t(re),y(bo),y(yo),o&&t(Fr),o&&t(yt),y(vo),o&&t($r),o&&t(de),y(To),y(Bo),o&&t(qr),o&&t(vt),y(zo),o&&t(Mr),o&&t(ie),y(xo),y(qo),o&&t(Er),o&&t(Tt),y(Mo),o&&t(Cr),o&&t(We),o&&t(jr),o&&t(ze),y(Eo),y(Oo),y(Wt),y(No),o&&t(Pr),o&&t(Bt),y(Ao),o&&t(Or),o&&t(Ue),o&&t(Nr),o&&t(xe),y(Io),y(Go),y(Rt),y(Wo),o&&t(Ar),o&&t(xt),y(Uo),o&&t(Ir),o&&t(Ft),y(Ro),y(Ho),y(Ko),o&&t(Lr),o&&t($t),y(Vo),o&&t(Sr),o&&t(le),y(Jo),y(Vt),y(Zo),y(Jt),y(en),o&&t(Dr),o&&t(Mt),y(tn),o&&t(Gr),o&&t(ce),y(on),y(Xt),y(rn),y(Yt),o&&t(Wr),o&&t(Ct),y(ln),o&&t(Ur),o&&t(I),y(cn),y(bn),y(eo),y(kn),y(yn),y(vn),y(Tn),y(wn),o&&t(Rr),o&&t(Pt),y(Bn),o&&t(Hr),o&&t(L),y(zn),y(jn),y(oo),y(On),y(Nn),y(An),y(In),y(Ln)}}}const If={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function Lf(U){return $f(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Rf extends Bf{constructor(u){super();zf(this,u,Lf,Af,xf,{})}}export{Rf as default,If as metadata};
