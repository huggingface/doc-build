import{S as Bf,i as zf,s as xf,e as n,k as i,w as _,t as r,M as Ff,c as s,d as t,m as l,a,x as g,h as d,b as c,F as e,g as p,y as b,q as k,o as y,B as v}from"../../chunks/vendor-6b77c823.js";import{T as ho}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-abef54e3.js";import{C as Ke}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as pe}from"../../chunks/IconCopyLink-7a11ce68.js";function $f(D){let u,x,f,T,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=s(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function qf(D){let u,x,f,T,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=s(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Mf(D){let u,x,f,T,z,B,w,F,Ee,he,q,ye,te,Ce,oe,ne,je,Fe,G,O,ve,R,M,C,Pe,J,Q,Oe,W,Ne,Ae,N,ue,se,$e,me,H,Ie,qe,E,Le,U,Se;return{c(){u=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),B=r("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),q=n("p"),ye=r("This second option is useful when using "),te=n("code"),Ce=r("tf.keras.Model.fit"),oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=r("model(inputs)"),Fe=r("."),G=i(),O=n("p"),ve=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),M=n("ul"),C=n("li"),Pe=r("a single Tensor with "),J=n("code"),Q=r("input_ids"),Oe=r(" only and nothing else: "),W=n("code"),Ne=r("model(input_ids)"),Ae=i(),N=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=n("code"),$e=r("model([input_ids, attention_mask])"),me=r(" or "),H=n("code"),Ie=r("model([input_ids, attention_mask, token_type_ids])"),qe=i(),E=n("li"),Le=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),Se=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var $=a(u);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=l(m),T=s(m,"UL",{});var Te=a(T);z=s(Te,"LI",{});var ht=a(z);B=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(Te),F=s(Te,"LI",{});var Ve=a(F);Ee=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),he=l(m),q=s(m,"P",{});var j=a(q);ye=d(j,"This second option is useful when using "),te=s(j,"CODE",{});var fe=a(te);Ce=d(fe,"tf.keras.Model.fit"),fe.forEach(t),oe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=s(j,"CODE",{});var De=a(ne);je=d(De,"model(inputs)"),De.forEach(t),Fe=d(j,"."),j.forEach(t),G=l(m),O=s(m,"P",{});var we=a(O);ve=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),M=s(m,"UL",{});var K=a(M);C=s(K,"LI",{});var V=a(C);Pe=d(V,"a single Tensor with "),J=s(V,"CODE",{});var ut=a(J);Q=d(ut,"input_ids"),ut.forEach(t),Oe=d(V," only and nothing else: "),W=s(V,"CODE",{});var Je=a(W);Ne=d(Je,"model(input_ids)"),Je.forEach(t),V.forEach(t),Ae=l(K),N=s(K,"LI",{});var A=a(N);ue=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=s(A,"CODE",{});var Be=a(se);$e=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),me=d(A," or "),H=s(A,"CODE",{});var mt=a(H);Ie=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),qe=l(K),E=s(K,"LI",{});var ae=a(E);Le=d(ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(ae,"CODE",{});var ft=a(U);Se=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),ae.forEach(t),K.forEach(t)},m(m,$){p(m,u,$),e(u,x),p(m,f,$),p(m,T,$),e(T,z),e(z,B),e(T,w),e(T,F),e(F,Ee),p(m,he,$),p(m,q,$),e(q,ye),e(q,te),e(te,Ce),e(q,oe),e(q,ne),e(ne,je),e(q,Fe),p(m,G,$),p(m,O,$),e(O,ve),p(m,R,$),p(m,M,$),e(M,C),e(C,Pe),e(C,J),e(J,Q),e(C,Oe),e(C,W),e(W,Ne),e(M,Ae),e(M,N),e(N,ue),e(N,se),e(se,$e),e(N,me),e(N,H),e(H,Ie),e(M,qe),e(M,E),e(E,Le),e(E,U),e(U,Se)},d(m){m&&t(u),m&&t(f),m&&t(T),m&&t(he),m&&t(q),m&&t(G),m&&t(O),m&&t(R),m&&t(M)}}}function Ef(D){let u,x,f,T,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=s(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Cf(D){let u,x,f,T,z,B,w,F,Ee,he,q,ye,te,Ce,oe,ne,je,Fe,G,O,ve,R,M,C,Pe,J,Q,Oe,W,Ne,Ae,N,ue,se,$e,me,H,Ie,qe,E,Le,U,Se;return{c(){u=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),B=r("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),q=n("p"),ye=r("This second option is useful when using "),te=n("code"),Ce=r("tf.keras.Model.fit"),oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=r("model(inputs)"),Fe=r("."),G=i(),O=n("p"),ve=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),M=n("ul"),C=n("li"),Pe=r("a single Tensor with "),J=n("code"),Q=r("input_ids"),Oe=r(" only and nothing else: "),W=n("code"),Ne=r("model(input_ids)"),Ae=i(),N=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=n("code"),$e=r("model([input_ids, attention_mask])"),me=r(" or "),H=n("code"),Ie=r("model([input_ids, attention_mask, token_type_ids])"),qe=i(),E=n("li"),Le=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),Se=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var $=a(u);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=l(m),T=s(m,"UL",{});var Te=a(T);z=s(Te,"LI",{});var ht=a(z);B=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(Te),F=s(Te,"LI",{});var Ve=a(F);Ee=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),he=l(m),q=s(m,"P",{});var j=a(q);ye=d(j,"This second option is useful when using "),te=s(j,"CODE",{});var fe=a(te);Ce=d(fe,"tf.keras.Model.fit"),fe.forEach(t),oe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=s(j,"CODE",{});var De=a(ne);je=d(De,"model(inputs)"),De.forEach(t),Fe=d(j,"."),j.forEach(t),G=l(m),O=s(m,"P",{});var we=a(O);ve=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),M=s(m,"UL",{});var K=a(M);C=s(K,"LI",{});var V=a(C);Pe=d(V,"a single Tensor with "),J=s(V,"CODE",{});var ut=a(J);Q=d(ut,"input_ids"),ut.forEach(t),Oe=d(V," only and nothing else: "),W=s(V,"CODE",{});var Je=a(W);Ne=d(Je,"model(input_ids)"),Je.forEach(t),V.forEach(t),Ae=l(K),N=s(K,"LI",{});var A=a(N);ue=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),se=s(A,"CODE",{});var Be=a(se);$e=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),me=d(A," or "),H=s(A,"CODE",{});var mt=a(H);Ie=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),qe=l(K),E=s(K,"LI",{});var ae=a(E);Le=d(ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(ae,"CODE",{});var ft=a(U);Se=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),ae.forEach(t),K.forEach(t)},m(m,$){p(m,u,$),e(u,x),p(m,f,$),p(m,T,$),e(T,z),e(z,B),e(T,w),e(T,F),e(F,Ee),p(m,he,$),p(m,q,$),e(q,ye),e(q,te),e(te,Ce),e(q,oe),e(q,ne),e(ne,je),e(q,Fe),p(m,G,$),p(m,O,$),e(O,ve),p(m,R,$),p(m,M,$),e(M,C),e(C,Pe),e(C,J),e(J,Q),e(C,Oe),e(C,W),e(W,Ne),e(M,Ae),e(M,N),e(N,ue),e(N,se),e(se,$e),e(N,me),e(N,H),e(H,Ie),e(M,qe),e(M,E),e(E,Le),e(E,U),e(U,Se)},d(m){m&&t(u),m&&t(f),m&&t(T),m&&t(he),m&&t(q),m&&t(G),m&&t(O),m&&t(R),m&&t(M)}}}function jf(D){let u,x,f,T,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=s(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Pf(D){let u,x,f,T,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=s(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Of(D){let u,x,f,T,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=s(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Nf(D){let u,x,f,T,z,B,w,F,Ee,he,q,ye,te,Ce,oe,ne,je,Fe,G,O,ve,R,M,C,Pe,J,Q,Oe,W,Ne,Ae,N,ue,se,$e,me,H,Ie,qe,E,Le,U,Se,m,$,Te,ht,Ve,j,fe,De,we,K,V,ut,Je,A,Be,mt,ae,ft,$d,qd,uo,Md,mo,Ed,Cd,jd,Ge,Pd,qs,Od,Nd,Ms,Ad,Id,Un,Ld,Sd,Tr,_t,Nt,Es,fo,Dd,Cs,Gd,wr,Rn,Wd,Br,_o,zr,gt,At,js,go,Ud,Ps,Rd,xr,re,bo,Hd,bt,Kd,Hn,Vd,Jd,ko,Qd,Xd,Yd,kt,Zd,Kn,ei,ti,Vn,oi,ni,si,Os,ai,ri,yo,Fr,yt,It,Ns,vo,di,As,ii,$r,de,To,li,Is,ci,pi,Lt,Ls,hi,ui,Jn,mi,fi,_i,wo,gi,Qn,bi,ki,yi,Qe,Bo,vi,Ss,Ti,wi,Ds,Xn,Bi,Gs,zi,qr,vt,St,Ws,zo,xi,Us,Fi,Mr,ie,xo,$i,Fo,qi,Rs,Mi,Ei,Ci,Dt,Hs,ji,Pi,Yn,Oi,Ni,Ai,$o,Ii,Zn,Li,Si,Di,Xe,qo,Gi,Ks,Wi,Ui,Vs,es,Ri,Js,Hi,Er,Tt,Gt,Qs,Mo,Ki,Xs,Vi,Cr,We,Ji,Ys,Qi,Xi,Zs,Yi,Zi,ea,el,jr,ze,Eo,tl,Co,ol,ts,nl,sl,al,jo,rl,Po,dl,il,ll,_e,Oo,cl,wt,pl,os,hl,ul,ta,ml,fl,_l,Wt,gl,oa,bl,kl,No,Pr,Bt,Ut,na,Ao,yl,sa,vl,Or,Ue,Tl,ns,wl,Bl,aa,zl,xl,ra,Fl,Nr,xe,Io,$l,Lo,ql,ss,Ml,El,Cl,So,jl,Do,Pl,Ol,Nl,ge,Go,Al,zt,Il,as,Ll,Sl,da,Dl,Gl,Wl,Rt,Ul,ia,Rl,Hl,Wo,Ar,xt,Ht,la,Uo,Kl,ca,Vl,Ir,Ft,Ro,Jl,Ye,Ho,Ql,pa,Xl,Yl,Ko,Lr,$t,Kt,ha,Vo,Zl,ua,ec,Sr,le,Jo,tc,Qo,oc,rs,nc,sc,ac,Xo,rc,Yo,dc,ic,lc,Vt,cc,be,Zo,pc,qt,hc,ds,uc,mc,ma,fc,_c,gc,Jt,bc,fa,kc,yc,en,Dr,Mt,Qt,_a,tn,vc,ga,Tc,Gr,ce,on,wc,nn,Bc,is,zc,xc,Fc,sn,$c,an,qc,Mc,Ec,Xt,Cc,X,rn,jc,Et,Pc,ls,Oc,Nc,ba,Ac,Ic,Lc,Yt,Sc,ka,Dc,Gc,ya,va,Ta,wa,Wc,Uc,Ba,za,xa,dn,Rc,Fa,Hc,Kc,Wr,Ct,Zt,$a,ln,Vc,qa,Jc,Ur,I,cn,Qc,pn,Xc,cs,Yc,Zc,ep,hn,tp,un,op,np,sp,Ma,ap,rp,Re,Ea,mn,dp,ip,Ca,fn,lp,cp,ja,_n,pp,hp,Pa,gn,up,mp,ke,bn,fp,jt,_p,Oa,gp,bp,Na,kp,yp,vp,eo,Tp,Aa,wp,Bp,kn,zp,Ze,yn,xp,Ia,Fp,$p,vn,qp,et,Tn,Mp,La,Ep,Cp,wn,Rr,Pt,to,Sa,Bn,jp,Da,Pp,Hr,L,zn,Op,xn,Np,ps,Ap,Ip,Lp,Fn,Sp,$n,Dp,Gp,Wp,Ga,Up,Rp,He,Wa,qn,Hp,Kp,Ua,Mn,Vp,Jp,Ra,En,Qp,Xp,Ha,Cn,Yp,Zp,S,jn,eh,Ot,th,Ka,oh,nh,Va,sh,ah,rh,oo,dh,Ja,ih,lh,Qa,Xa,Ya,Za,ch,ph,er,tr,or,nr,hh,uh,sr,ar,rr,dr,mh,fh,ir,lr,Pn,no,so,cr,On,_h,pr,gh,bh,hr,kh,yh,tt,Nn,vh,ur,Th,wh,An,Bh,ot,In,zh,mr,xh,Fh,Ln,Kr;return B=new pe({}),R=new pe({}),we=new pe({}),fo=new pe({}),_o=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),go=new pe({}),bo=new P({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/configuration_blenderbot.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Blenderbot model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> or <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.TFBlenderbotModel">TFBlenderbotModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),vo=new pe({}),To=new P({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),Bo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zo=new pe({}),xo=new P({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),qo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L61",parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Mo=new pe({}),Eo=new P({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1080",parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Oo=new P({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1118",parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wt=new ho({props:{$$slots:{default:[$f]},$$scope:{ctx:D}}}),No=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">1280</span>]`}}),Ao=new pe({}),Io=new P({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1216",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Go=new P({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1273",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new ho({props:{$$slots:{default:[qf]},$$scope:{ctx:D}}}),Wo=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
Bot:   That&#x27;s too bad. Have you tried encouraging them to change their eating habits?</span>`}}),Uo=new pe({}),Ro=new P({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1409"}}),Ho=new P({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1440",parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
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
<span class="hljs-literal">True</span>`}}),Vo=new pe({}),Jo=new P({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1105",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vt=new ho({props:{$$slots:{default:[Mf]},$$scope:{ctx:D}}}),Zo=new P({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1130",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jt=new ho({props:{$$slots:{default:[Ef]},$$scope:{ctx:D}}}),en=new Ke({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tn=new pe({}),on=new P({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1204",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xt=new ho({props:{$$slots:{default:[Cf]},$$scope:{ctx:D}}}),rn=new P({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1250",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yt=new ho({props:{$$slots:{default:[jf]},$$scope:{ctx:D}}}),ln=new pe({}),cn=new P({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1207",parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1142",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new ho({props:{$$slots:{default:[Pf]},$$scope:{ctx:D}}}),kn=new Ke({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),yn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Tn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1026",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Bn=new pe({}),zn=new P({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1294",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1142",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new ho({props:{$$slots:{default:[Of]},$$scope:{ctx:D}}}),On=new pe({}),Nn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),In=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1298",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),x=i(),f=n("h1"),T=n("a"),z=n("span"),_(B.$$.fragment),w=i(),F=n("span"),Ee=r("Blenderbot"),he=i(),q=n("p"),ye=n("strong"),te=r("DISCLAIMER:"),Ce=r(" If you see something strange, file a "),oe=n("a"),ne=r("Github Issue"),je=r(" ."),Fe=i(),G=n("h2"),O=n("a"),ve=n("span"),_(R.$$.fragment),M=i(),C=n("span"),Pe=r("Overview"),J=i(),Q=n("p"),Oe=r("The Blender chatbot model was proposed in "),W=n("a"),Ne=r("Recipes for building an open-domain chatbot"),Ae=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),N=i(),ue=n("p"),se=r("The abstract of the paper is the following:"),$e=i(),me=n("p"),H=n("em"),Ie=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),qe=i(),E=n("p"),Le=r("This model was contributed by "),U=n("a"),Se=r("sshleifer"),m=r(". The authors\u2019 code can be found "),$=n("a"),Te=r("here"),ht=r(" ."),Ve=i(),j=n("h2"),fe=n("a"),De=n("span"),_(we.$$.fragment),K=i(),V=n("span"),ut=r("Implementation Notes"),Je=i(),A=n("ul"),Be=n("li"),mt=r("Blenderbot uses a standard "),ae=n("a"),ft=r("seq2seq model transformer"),$d=r(" based architecture."),qd=i(),uo=n("li"),Md=r("Available checkpoints can be found in the "),mo=n("a"),Ed=r("model hub"),Cd=r("."),jd=i(),Ge=n("li"),Pd=r("This is the "),qs=n("em"),Od=r("default"),Nd=r(` Blenderbot model class. However, some smaller checkpoints, such as
`),Ms=n("code"),Ad=r("facebook/blenderbot_small_90M"),Id=r(`, have a different architecture and consequently should be used with
`),Un=n("a"),Ld=r("BlenderbotSmall"),Sd=r("."),Tr=i(),_t=n("h2"),Nt=n("a"),Es=n("span"),_(fo.$$.fragment),Dd=i(),Cs=n("span"),Gd=r("Usage"),wr=i(),Rn=n("p"),Wd=r("Here is an example of model usage:"),Br=i(),_(_o.$$.fragment),zr=i(),gt=n("h2"),At=n("a"),js=n("span"),_(go.$$.fragment),Ud=i(),Ps=n("span"),Rd=r("BlenderbotConfig"),xr=i(),re=n("div"),_(bo.$$.fragment),Hd=i(),bt=n("p"),Kd=r("This is the configuration class to store the configuration of a "),Hn=n("a"),Vd=r("BlenderbotModel"),Jd=r(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),ko=n("a"),Qd=r("facebook/blenderbot-3B"),Xd=r(" architecture."),Yd=i(),kt=n("p"),Zd=r("Configuration objects inherit from "),Kn=n("a"),ei=r("PretrainedConfig"),ti=r(` and can be used to control the model outputs. Read the
documentation from `),Vn=n("a"),oi=r("PretrainedConfig"),ni=r(" for more information."),si=i(),Os=n("p"),ai=r("Example:"),ri=i(),_(yo.$$.fragment),Fr=i(),yt=n("h2"),It=n("a"),Ns=n("span"),_(vo.$$.fragment),di=i(),As=n("span"),ii=r("BlenderbotTokenizer"),$r=i(),de=n("div"),_(To.$$.fragment),li=i(),Is=n("p"),ci=r("Construct a Blenderbot tokenizer."),pi=i(),Lt=n("p"),Ls=n("code"),hi=r("Blenderbot"),ui=r(" is nearly identical to "),Jn=n("a"),mi=r("RobertaTokenizer"),fi=r(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),_i=i(),wo=n("p"),gi=r("Refer to superclass "),Qn=n("a"),bi=r("RobertaTokenizer"),ki=r(" for usage examples and documentation concerning parameters."),yi=i(),Qe=n("div"),_(Bo.$$.fragment),vi=i(),Ss=n("p"),Ti=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),wi=i(),Ds=n("ul"),Xn=n("li"),Bi=r("single sequence: "),Gs=n("code"),zi=r("X </s>"),qr=i(),vt=n("h2"),St=n("a"),Ws=n("span"),_(zo.$$.fragment),xi=i(),Us=n("span"),Fi=r("BlenderbotTokenizerFast"),Mr=i(),ie=n("div"),_(xo.$$.fragment),$i=i(),Fo=n("p"),qi=r("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Rs=n("em"),Mi=r("tokenizers"),Ei=r(" library)."),Ci=i(),Dt=n("p"),Hs=n("code"),ji=r("BlenderbotFast"),Pi=r(" is nearly identical to "),Yn=n("a"),Oi=r("RobertaTokenizerFast"),Ni=r(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Ai=i(),$o=n("p"),Ii=r("Refer to superclass "),Zn=n("a"),Li=r("RobertaTokenizerFast"),Si=r(" for usage examples and documentation concerning parameters."),Di=i(),Xe=n("div"),_(qo.$$.fragment),Gi=i(),Ks=n("p"),Wi=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ui=i(),Vs=n("ul"),es=n("li"),Ri=r("single sequence: "),Js=n("code"),Hi=r("X </s>"),Er=i(),Tt=n("h2"),Gt=n("a"),Qs=n("span"),_(Mo.$$.fragment),Ki=i(),Xs=n("span"),Vi=r("BlenderbotModel"),Cr=i(),We=n("p"),Ji=r("See "),Ys=n("code"),Qi=r("transformers.BartModel"),Xi=r(" for arguments to "),Zs=n("em"),Yi=r("forward"),Zi=r(" and "),ea=n("em"),el=r("generate"),jr=i(),ze=n("div"),_(Eo.$$.fragment),tl=i(),Co=n("p"),ol=r(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ts=n("a"),nl=r("PreTrainedModel"),sl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),al=i(),jo=n("p"),rl=r("This model is also a PyTorch "),Po=n("a"),dl=r("torch.nn.Module"),il=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ll=i(),_e=n("div"),_(Oo.$$.fragment),cl=i(),wt=n("p"),pl=r("The "),os=n("a"),hl=r("BlenderbotModel"),ul=r(" forward method, overrides the "),ta=n("code"),ml=r("__call__"),fl=r(" special method."),_l=i(),_(Wt.$$.fragment),gl=i(),oa=n("p"),bl=r("Example:"),kl=i(),_(No.$$.fragment),Pr=i(),Bt=n("h2"),Ut=n("a"),na=n("span"),_(Ao.$$.fragment),yl=i(),sa=n("span"),vl=r("BlenderbotForConditionalGeneration"),Or=i(),Ue=n("p"),Tl=r("See "),ns=n("a"),wl=r("BartForConditionalGeneration"),Bl=r(" for arguments to "),aa=n("em"),zl=r("forward"),xl=r(" and "),ra=n("em"),Fl=r("generate"),Nr=i(),xe=n("div"),_(Io.$$.fragment),$l=i(),Lo=n("p"),ql=r(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ss=n("a"),Ml=r("PreTrainedModel"),El=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cl=i(),So=n("p"),jl=r("This model is also a PyTorch "),Do=n("a"),Pl=r("torch.nn.Module"),Ol=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nl=i(),ge=n("div"),_(Go.$$.fragment),Al=i(),zt=n("p"),Il=r("The "),as=n("a"),Ll=r("BlenderbotForConditionalGeneration"),Sl=r(" forward method, overrides the "),da=n("code"),Dl=r("__call__"),Gl=r(" special method."),Wl=i(),_(Rt.$$.fragment),Ul=i(),ia=n("p"),Rl=r("Conversation example:"),Hl=i(),_(Wo.$$.fragment),Ar=i(),xt=n("h2"),Ht=n("a"),la=n("span"),_(Uo.$$.fragment),Kl=i(),ca=n("span"),Vl=r("BlenderbotForCausalLM"),Ir=i(),Ft=n("div"),_(Ro.$$.fragment),Jl=i(),Ye=n("div"),_(Ho.$$.fragment),Ql=i(),pa=n("p"),Xl=r("Example:"),Yl=i(),_(Ko.$$.fragment),Lr=i(),$t=n("h2"),Kt=n("a"),ha=n("span"),_(Vo.$$.fragment),Zl=i(),ua=n("span"),ec=r("TFBlenderbotModel"),Sr=i(),le=n("div"),_(Jo.$$.fragment),tc=i(),Qo=n("p"),oc=r(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rs=n("a"),nc=r("TFPreTrainedModel"),sc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ac=i(),Xo=n("p"),rc=r("This model is also a "),Yo=n("a"),dc=r("tf.keras.Model"),ic=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lc=i(),_(Vt.$$.fragment),cc=i(),be=n("div"),_(Zo.$$.fragment),pc=i(),qt=n("p"),hc=r("The "),ds=n("a"),uc=r("TFBlenderbotModel"),mc=r(" forward method, overrides the "),ma=n("code"),fc=r("__call__"),_c=r(" special method."),gc=i(),_(Jt.$$.fragment),bc=i(),fa=n("p"),kc=r("Example:"),yc=i(),_(en.$$.fragment),Dr=i(),Mt=n("h2"),Qt=n("a"),_a=n("span"),_(tn.$$.fragment),vc=i(),ga=n("span"),Tc=r("TFBlenderbotForConditionalGeneration"),Gr=i(),ce=n("div"),_(on.$$.fragment),wc=i(),nn=n("p"),Bc=r(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),is=n("a"),zc=r("TFPreTrainedModel"),xc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fc=i(),sn=n("p"),$c=r("This model is also a "),an=n("a"),qc=r("tf.keras.Model"),Mc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ec=i(),_(Xt.$$.fragment),Cc=i(),X=n("div"),_(rn.$$.fragment),jc=i(),Et=n("p"),Pc=r("The "),ls=n("a"),Oc=r("TFBlenderbotForConditionalGeneration"),Nc=r(" forward method, overrides the "),ba=n("code"),Ac=r("__call__"),Ic=r(" special method."),Lc=i(),_(Yt.$$.fragment),Sc=i(),ka=n("p"),Dc=r("Conversation example::"),Gc=i(),ya=n("blockquote"),va=n("blockquote"),Ta=n("blockquote"),wa=n("p"),Wc=r(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Uc=i(),Ba=n("blockquote"),za=n("blockquote"),xa=n("blockquote"),dn=n("p"),Rc=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Fa=n("s"),Hc=r(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Kc=r(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Wr=i(),Ct=n("h2"),Zt=n("a"),$a=n("span"),_(ln.$$.fragment),Vc=i(),qa=n("span"),Jc=r("FlaxBlenderbotModel"),Ur=i(),I=n("div"),_(cn.$$.fragment),Qc=i(),pn=n("p"),Xc=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),cs=n("a"),Yc=r("FlaxPreTrainedModel"),Zc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep=i(),hn=n("p"),tp=r(`This model is also a Flax Linen
`),un=n("a"),op=r("flax.nn.Module"),np=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),sp=i(),Ma=n("p"),ap=r("Finally, this model supports inherent JAX features such as:"),rp=i(),Re=n("ul"),Ea=n("li"),mn=n("a"),dp=r("Just-In-Time (JIT) compilation"),ip=i(),Ca=n("li"),fn=n("a"),lp=r("Automatic Differentiation"),cp=i(),ja=n("li"),_n=n("a"),pp=r("Vectorization"),hp=i(),Pa=n("li"),gn=n("a"),up=r("Parallelization"),mp=i(),ke=n("div"),_(bn.$$.fragment),fp=i(),jt=n("p"),_p=r("The "),Oa=n("code"),gp=r("FlaxBlenderbotPreTrainedModel"),bp=r("forward method, overrides the "),Na=n("code"),kp=r("__call__"),yp=r(" special method."),vp=i(),_(eo.$$.fragment),Tp=i(),Aa=n("p"),wp=r("Example:"),Bp=i(),_(kn.$$.fragment),zp=i(),Ze=n("div"),_(yn.$$.fragment),xp=i(),Ia=n("p"),Fp=r("Example:"),$p=i(),_(vn.$$.fragment),qp=i(),et=n("div"),_(Tn.$$.fragment),Mp=i(),La=n("p"),Ep=r("Example:"),Cp=i(),_(wn.$$.fragment),Rr=i(),Pt=n("h2"),to=n("a"),Sa=n("span"),_(Bn.$$.fragment),jp=i(),Da=n("span"),Pp=r("FlaxBlenderbotForConditionalGeneration"),Hr=i(),L=n("div"),_(zn.$$.fragment),Op=i(),xn=n("p"),Np=r(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ps=n("a"),Ap=r("FlaxPreTrainedModel"),Ip=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lp=i(),Fn=n("p"),Sp=r(`This model is also a Flax Linen
`),$n=n("a"),Dp=r("flax.nn.Module"),Gp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wp=i(),Ga=n("p"),Up=r("Finally, this model supports inherent JAX features such as:"),Rp=i(),He=n("ul"),Wa=n("li"),qn=n("a"),Hp=r("Just-In-Time (JIT) compilation"),Kp=i(),Ua=n("li"),Mn=n("a"),Vp=r("Automatic Differentiation"),Jp=i(),Ra=n("li"),En=n("a"),Qp=r("Vectorization"),Xp=i(),Ha=n("li"),Cn=n("a"),Yp=r("Parallelization"),Zp=i(),S=n("div"),_(jn.$$.fragment),eh=i(),Ot=n("p"),th=r("The "),Ka=n("code"),oh=r("FlaxBlenderbotPreTrainedModel"),nh=r("forward method, overrides the "),Va=n("code"),sh=r("__call__"),ah=r(" special method."),rh=i(),_(oo.$$.fragment),dh=i(),Ja=n("p"),ih=r("Conversation example::"),lh=i(),Qa=n("blockquote"),Xa=n("blockquote"),Ya=n("blockquote"),Za=n("p"),ch=r("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),ph=i(),er=n("blockquote"),tr=n("blockquote"),or=n("blockquote"),nr=n("p"),hh=r(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),uh=i(),sr=n("blockquote"),ar=n("blockquote"),rr=n("blockquote"),dr=n("p"),mh=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),fh=i(),ir=n("blockquote"),lr=n("blockquote"),Pn=n("blockquote"),no=n("h1"),so=n("a"),cr=n("span"),_(On.$$.fragment),_h=i(),pr=n("span"),gh=r("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),bh=i(),hr=n("p"),kh=r(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),yh=i(),tt=n("div"),_(Nn.$$.fragment),vh=i(),ur=n("p"),Th=r("Example:"),wh=i(),_(An.$$.fragment),Bh=i(),ot=n("div"),_(In.$$.fragment),zh=i(),mr=n("p"),xh=r("Example:"),Fh=i(),_(Ln.$$.fragment),this.h()},l(o){const h=Ff('[data-svelte="svelte-1phssyn"]',document.head);u=s(h,"META",{name:!0,content:!0}),h.forEach(t),x=l(o),f=s(o,"H1",{class:!0});var Sn=a(f);T=s(Sn,"A",{id:!0,class:!0,href:!0});var fr=a(T);z=s(fr,"SPAN",{});var _r=a(z);g(B.$$.fragment,_r),_r.forEach(t),fr.forEach(t),w=l(Sn),F=s(Sn,"SPAN",{});var gr=a(F);Ee=d(gr,"Blenderbot"),gr.forEach(t),Sn.forEach(t),he=l(o),q=s(o,"P",{});var ao=a(q);ye=s(ao,"STRONG",{});var br=a(ye);te=d(br,"DISCLAIMER:"),br.forEach(t),Ce=d(ao," If you see something strange, file a "),oe=s(ao,"A",{href:!0,rel:!0});var kr=a(oe);ne=d(kr,"Github Issue"),kr.forEach(t),je=d(ao," ."),ao.forEach(t),Fe=l(o),G=s(o,"H2",{class:!0});var Dn=a(G);O=s(Dn,"A",{id:!0,class:!0,href:!0});var Mh=a(O);ve=s(Mh,"SPAN",{});var Eh=a(ve);g(R.$$.fragment,Eh),Eh.forEach(t),Mh.forEach(t),M=l(Dn),C=s(Dn,"SPAN",{});var Ch=a(C);Pe=d(Ch,"Overview"),Ch.forEach(t),Dn.forEach(t),J=l(o),Q=s(o,"P",{});var Vr=a(Q);Oe=d(Vr,"The Blender chatbot model was proposed in "),W=s(Vr,"A",{href:!0,rel:!0});var jh=a(W);Ne=d(jh,"Recipes for building an open-domain chatbot"),jh.forEach(t),Ae=d(Vr,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Vr.forEach(t),N=l(o),ue=s(o,"P",{});var Ph=a(ue);se=d(Ph,"The abstract of the paper is the following:"),Ph.forEach(t),$e=l(o),me=s(o,"P",{});var Oh=a(me);H=s(Oh,"EM",{});var Nh=a(H);Ie=d(Nh,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Nh.forEach(t),Oh.forEach(t),qe=l(o),E=s(o,"P",{});var hs=a(E);Le=d(hs,"This model was contributed by "),U=s(hs,"A",{href:!0,rel:!0});var Ah=a(U);Se=d(Ah,"sshleifer"),Ah.forEach(t),m=d(hs,". The authors\u2019 code can be found "),$=s(hs,"A",{href:!0,rel:!0});var Ih=a($);Te=d(Ih,"here"),Ih.forEach(t),ht=d(hs," ."),hs.forEach(t),Ve=l(o),j=s(o,"H2",{class:!0});var Jr=a(j);fe=s(Jr,"A",{id:!0,class:!0,href:!0});var Lh=a(fe);De=s(Lh,"SPAN",{});var Sh=a(De);g(we.$$.fragment,Sh),Sh.forEach(t),Lh.forEach(t),K=l(Jr),V=s(Jr,"SPAN",{});var Dh=a(V);ut=d(Dh,"Implementation Notes"),Dh.forEach(t),Jr.forEach(t),Je=l(o),A=s(o,"UL",{});var us=a(A);Be=s(us,"LI",{});var Qr=a(Be);mt=d(Qr,"Blenderbot uses a standard "),ae=s(Qr,"A",{href:!0,rel:!0});var Gh=a(ae);ft=d(Gh,"seq2seq model transformer"),Gh.forEach(t),$d=d(Qr," based architecture."),Qr.forEach(t),qd=l(us),uo=s(us,"LI",{});var Xr=a(uo);Md=d(Xr,"Available checkpoints can be found in the "),mo=s(Xr,"A",{href:!0,rel:!0});var Wh=a(mo);Ed=d(Wh,"model hub"),Wh.forEach(t),Cd=d(Xr,"."),Xr.forEach(t),jd=l(us),Ge=s(us,"LI",{});var ro=a(Ge);Pd=d(ro,"This is the "),qs=s(ro,"EM",{});var Uh=a(qs);Od=d(Uh,"default"),Uh.forEach(t),Nd=d(ro,` Blenderbot model class. However, some smaller checkpoints, such as
`),Ms=s(ro,"CODE",{});var Rh=a(Ms);Ad=d(Rh,"facebook/blenderbot_small_90M"),Rh.forEach(t),Id=d(ro,`, have a different architecture and consequently should be used with
`),Un=s(ro,"A",{href:!0});var Hh=a(Un);Ld=d(Hh,"BlenderbotSmall"),Hh.forEach(t),Sd=d(ro,"."),ro.forEach(t),us.forEach(t),Tr=l(o),_t=s(o,"H2",{class:!0});var Yr=a(_t);Nt=s(Yr,"A",{id:!0,class:!0,href:!0});var Kh=a(Nt);Es=s(Kh,"SPAN",{});var Vh=a(Es);g(fo.$$.fragment,Vh),Vh.forEach(t),Kh.forEach(t),Dd=l(Yr),Cs=s(Yr,"SPAN",{});var Jh=a(Cs);Gd=d(Jh,"Usage"),Jh.forEach(t),Yr.forEach(t),wr=l(o),Rn=s(o,"P",{});var Qh=a(Rn);Wd=d(Qh,"Here is an example of model usage:"),Qh.forEach(t),Br=l(o),g(_o.$$.fragment,o),zr=l(o),gt=s(o,"H2",{class:!0});var Zr=a(gt);At=s(Zr,"A",{id:!0,class:!0,href:!0});var Xh=a(At);js=s(Xh,"SPAN",{});var Yh=a(js);g(go.$$.fragment,Yh),Yh.forEach(t),Xh.forEach(t),Ud=l(Zr),Ps=s(Zr,"SPAN",{});var Zh=a(Ps);Rd=d(Zh,"BlenderbotConfig"),Zh.forEach(t),Zr.forEach(t),xr=l(o),re=s(o,"DIV",{class:!0});var nt=a(re);g(bo.$$.fragment,nt),Hd=l(nt),bt=s(nt,"P",{});var ms=a(bt);Kd=d(ms,"This is the configuration class to store the configuration of a "),Hn=s(ms,"A",{href:!0});var eu=a(Hn);Vd=d(eu,"BlenderbotModel"),eu.forEach(t),Jd=d(ms,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),ko=s(ms,"A",{href:!0,rel:!0});var tu=a(ko);Qd=d(tu,"facebook/blenderbot-3B"),tu.forEach(t),Xd=d(ms," architecture."),ms.forEach(t),Yd=l(nt),kt=s(nt,"P",{});var fs=a(kt);Zd=d(fs,"Configuration objects inherit from "),Kn=s(fs,"A",{href:!0});var ou=a(Kn);ei=d(ou,"PretrainedConfig"),ou.forEach(t),ti=d(fs,` and can be used to control the model outputs. Read the
documentation from `),Vn=s(fs,"A",{href:!0});var nu=a(Vn);oi=d(nu,"PretrainedConfig"),nu.forEach(t),ni=d(fs," for more information."),fs.forEach(t),si=l(nt),Os=s(nt,"P",{});var su=a(Os);ai=d(su,"Example:"),su.forEach(t),ri=l(nt),g(yo.$$.fragment,nt),nt.forEach(t),Fr=l(o),yt=s(o,"H2",{class:!0});var ed=a(yt);It=s(ed,"A",{id:!0,class:!0,href:!0});var au=a(It);Ns=s(au,"SPAN",{});var ru=a(Ns);g(vo.$$.fragment,ru),ru.forEach(t),au.forEach(t),di=l(ed),As=s(ed,"SPAN",{});var du=a(As);ii=d(du,"BlenderbotTokenizer"),du.forEach(t),ed.forEach(t),$r=l(o),de=s(o,"DIV",{class:!0});var st=a(de);g(To.$$.fragment,st),li=l(st),Is=s(st,"P",{});var iu=a(Is);ci=d(iu,"Construct a Blenderbot tokenizer."),iu.forEach(t),pi=l(st),Lt=s(st,"P",{});var yr=a(Lt);Ls=s(yr,"CODE",{});var lu=a(Ls);hi=d(lu,"Blenderbot"),lu.forEach(t),ui=d(yr," is nearly identical to "),Jn=s(yr,"A",{href:!0});var cu=a(Jn);mi=d(cu,"RobertaTokenizer"),cu.forEach(t),fi=d(yr,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),yr.forEach(t),_i=l(st),wo=s(st,"P",{});var td=a(wo);gi=d(td,"Refer to superclass "),Qn=s(td,"A",{href:!0});var pu=a(Qn);bi=d(pu,"RobertaTokenizer"),pu.forEach(t),ki=d(td," for usage examples and documentation concerning parameters."),td.forEach(t),yi=l(st),Qe=s(st,"DIV",{class:!0});var _s=a(Qe);g(Bo.$$.fragment,_s),vi=l(_s),Ss=s(_s,"P",{});var hu=a(Ss);Ti=d(hu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),hu.forEach(t),wi=l(_s),Ds=s(_s,"UL",{});var uu=a(Ds);Xn=s(uu,"LI",{});var $h=a(Xn);Bi=d($h,"single sequence: "),Gs=s($h,"CODE",{});var mu=a(Gs);zi=d(mu,"X </s>"),mu.forEach(t),$h.forEach(t),uu.forEach(t),_s.forEach(t),st.forEach(t),qr=l(o),vt=s(o,"H2",{class:!0});var od=a(vt);St=s(od,"A",{id:!0,class:!0,href:!0});var fu=a(St);Ws=s(fu,"SPAN",{});var _u=a(Ws);g(zo.$$.fragment,_u),_u.forEach(t),fu.forEach(t),xi=l(od),Us=s(od,"SPAN",{});var gu=a(Us);Fi=d(gu,"BlenderbotTokenizerFast"),gu.forEach(t),od.forEach(t),Mr=l(o),ie=s(o,"DIV",{class:!0});var at=a(ie);g(xo.$$.fragment,at),$i=l(at),Fo=s(at,"P",{});var nd=a(Fo);qi=d(nd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Rs=s(nd,"EM",{});var bu=a(Rs);Mi=d(bu,"tokenizers"),bu.forEach(t),Ei=d(nd," library)."),nd.forEach(t),Ci=l(at),Dt=s(at,"P",{});var vr=a(Dt);Hs=s(vr,"CODE",{});var ku=a(Hs);ji=d(ku,"BlenderbotFast"),ku.forEach(t),Pi=d(vr," is nearly identical to "),Yn=s(vr,"A",{href:!0});var yu=a(Yn);Oi=d(yu,"RobertaTokenizerFast"),yu.forEach(t),Ni=d(vr,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),vr.forEach(t),Ai=l(at),$o=s(at,"P",{});var sd=a($o);Ii=d(sd,"Refer to superclass "),Zn=s(sd,"A",{href:!0});var vu=a(Zn);Li=d(vu,"RobertaTokenizerFast"),vu.forEach(t),Si=d(sd," for usage examples and documentation concerning parameters."),sd.forEach(t),Di=l(at),Xe=s(at,"DIV",{class:!0});var gs=a(Xe);g(qo.$$.fragment,gs),Gi=l(gs),Ks=s(gs,"P",{});var Tu=a(Ks);Wi=d(Tu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Tu.forEach(t),Ui=l(gs),Vs=s(gs,"UL",{});var wu=a(Vs);es=s(wu,"LI",{});var qh=a(es);Ri=d(qh,"single sequence: "),Js=s(qh,"CODE",{});var Bu=a(Js);Hi=d(Bu,"X </s>"),Bu.forEach(t),qh.forEach(t),wu.forEach(t),gs.forEach(t),at.forEach(t),Er=l(o),Tt=s(o,"H2",{class:!0});var ad=a(Tt);Gt=s(ad,"A",{id:!0,class:!0,href:!0});var zu=a(Gt);Qs=s(zu,"SPAN",{});var xu=a(Qs);g(Mo.$$.fragment,xu),xu.forEach(t),zu.forEach(t),Ki=l(ad),Xs=s(ad,"SPAN",{});var Fu=a(Xs);Vi=d(Fu,"BlenderbotModel"),Fu.forEach(t),ad.forEach(t),Cr=l(o),We=s(o,"P",{});var Gn=a(We);Ji=d(Gn,"See "),Ys=s(Gn,"CODE",{});var $u=a(Ys);Qi=d($u,"transformers.BartModel"),$u.forEach(t),Xi=d(Gn," for arguments to "),Zs=s(Gn,"EM",{});var qu=a(Zs);Yi=d(qu,"forward"),qu.forEach(t),Zi=d(Gn," and "),ea=s(Gn,"EM",{});var Mu=a(ea);el=d(Mu,"generate"),Mu.forEach(t),Gn.forEach(t),jr=l(o),ze=s(o,"DIV",{class:!0});var io=a(ze);g(Eo.$$.fragment,io),tl=l(io),Co=s(io,"P",{});var rd=a(Co);ol=d(rd,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ts=s(rd,"A",{href:!0});var Eu=a(ts);nl=d(Eu,"PreTrainedModel"),Eu.forEach(t),sl=d(rd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rd.forEach(t),al=l(io),jo=s(io,"P",{});var dd=a(jo);rl=d(dd,"This model is also a PyTorch "),Po=s(dd,"A",{href:!0,rel:!0});var Cu=a(Po);dl=d(Cu,"torch.nn.Module"),Cu.forEach(t),il=d(dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dd.forEach(t),ll=l(io),_e=s(io,"DIV",{class:!0});var rt=a(_e);g(Oo.$$.fragment,rt),cl=l(rt),wt=s(rt,"P",{});var bs=a(wt);pl=d(bs,"The "),os=s(bs,"A",{href:!0});var ju=a(os);hl=d(ju,"BlenderbotModel"),ju.forEach(t),ul=d(bs," forward method, overrides the "),ta=s(bs,"CODE",{});var Pu=a(ta);ml=d(Pu,"__call__"),Pu.forEach(t),fl=d(bs," special method."),bs.forEach(t),_l=l(rt),g(Wt.$$.fragment,rt),gl=l(rt),oa=s(rt,"P",{});var Ou=a(oa);bl=d(Ou,"Example:"),Ou.forEach(t),kl=l(rt),g(No.$$.fragment,rt),rt.forEach(t),io.forEach(t),Pr=l(o),Bt=s(o,"H2",{class:!0});var id=a(Bt);Ut=s(id,"A",{id:!0,class:!0,href:!0});var Nu=a(Ut);na=s(Nu,"SPAN",{});var Au=a(na);g(Ao.$$.fragment,Au),Au.forEach(t),Nu.forEach(t),yl=l(id),sa=s(id,"SPAN",{});var Iu=a(sa);vl=d(Iu,"BlenderbotForConditionalGeneration"),Iu.forEach(t),id.forEach(t),Or=l(o),Ue=s(o,"P",{});var Wn=a(Ue);Tl=d(Wn,"See "),ns=s(Wn,"A",{href:!0});var Lu=a(ns);wl=d(Lu,"BartForConditionalGeneration"),Lu.forEach(t),Bl=d(Wn," for arguments to "),aa=s(Wn,"EM",{});var Su=a(aa);zl=d(Su,"forward"),Su.forEach(t),xl=d(Wn," and "),ra=s(Wn,"EM",{});var Du=a(ra);Fl=d(Du,"generate"),Du.forEach(t),Wn.forEach(t),Nr=l(o),xe=s(o,"DIV",{class:!0});var lo=a(xe);g(Io.$$.fragment,lo),$l=l(lo),Lo=s(lo,"P",{});var ld=a(Lo);ql=d(ld,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ss=s(ld,"A",{href:!0});var Gu=a(ss);Ml=d(Gu,"PreTrainedModel"),Gu.forEach(t),El=d(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(t),Cl=l(lo),So=s(lo,"P",{});var cd=a(So);jl=d(cd,"This model is also a PyTorch "),Do=s(cd,"A",{href:!0,rel:!0});var Wu=a(Do);Pl=d(Wu,"torch.nn.Module"),Wu.forEach(t),Ol=d(cd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cd.forEach(t),Nl=l(lo),ge=s(lo,"DIV",{class:!0});var dt=a(ge);g(Go.$$.fragment,dt),Al=l(dt),zt=s(dt,"P",{});var ks=a(zt);Il=d(ks,"The "),as=s(ks,"A",{href:!0});var Uu=a(as);Ll=d(Uu,"BlenderbotForConditionalGeneration"),Uu.forEach(t),Sl=d(ks," forward method, overrides the "),da=s(ks,"CODE",{});var Ru=a(da);Dl=d(Ru,"__call__"),Ru.forEach(t),Gl=d(ks," special method."),ks.forEach(t),Wl=l(dt),g(Rt.$$.fragment,dt),Ul=l(dt),ia=s(dt,"P",{});var Hu=a(ia);Rl=d(Hu,"Conversation example:"),Hu.forEach(t),Hl=l(dt),g(Wo.$$.fragment,dt),dt.forEach(t),lo.forEach(t),Ar=l(o),xt=s(o,"H2",{class:!0});var pd=a(xt);Ht=s(pd,"A",{id:!0,class:!0,href:!0});var Ku=a(Ht);la=s(Ku,"SPAN",{});var Vu=a(la);g(Uo.$$.fragment,Vu),Vu.forEach(t),Ku.forEach(t),Kl=l(pd),ca=s(pd,"SPAN",{});var Ju=a(ca);Vl=d(Ju,"BlenderbotForCausalLM"),Ju.forEach(t),pd.forEach(t),Ir=l(o),Ft=s(o,"DIV",{class:!0});var hd=a(Ft);g(Ro.$$.fragment,hd),Jl=l(hd),Ye=s(hd,"DIV",{class:!0});var ys=a(Ye);g(Ho.$$.fragment,ys),Ql=l(ys),pa=s(ys,"P",{});var Qu=a(pa);Xl=d(Qu,"Example:"),Qu.forEach(t),Yl=l(ys),g(Ko.$$.fragment,ys),ys.forEach(t),hd.forEach(t),Lr=l(o),$t=s(o,"H2",{class:!0});var ud=a($t);Kt=s(ud,"A",{id:!0,class:!0,href:!0});var Xu=a(Kt);ha=s(Xu,"SPAN",{});var Yu=a(ha);g(Vo.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),Zl=l(ud),ua=s(ud,"SPAN",{});var Zu=a(ua);ec=d(Zu,"TFBlenderbotModel"),Zu.forEach(t),ud.forEach(t),Sr=l(o),le=s(o,"DIV",{class:!0});var it=a(le);g(Jo.$$.fragment,it),tc=l(it),Qo=s(it,"P",{});var md=a(Qo);oc=d(md,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rs=s(md,"A",{href:!0});var em=a(rs);nc=d(em,"TFPreTrainedModel"),em.forEach(t),sc=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),ac=l(it),Xo=s(it,"P",{});var fd=a(Xo);rc=d(fd,"This model is also a "),Yo=s(fd,"A",{href:!0,rel:!0});var tm=a(Yo);dc=d(tm,"tf.keras.Model"),tm.forEach(t),ic=d(fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fd.forEach(t),lc=l(it),g(Vt.$$.fragment,it),cc=l(it),be=s(it,"DIV",{class:!0});var lt=a(be);g(Zo.$$.fragment,lt),pc=l(lt),qt=s(lt,"P",{});var vs=a(qt);hc=d(vs,"The "),ds=s(vs,"A",{href:!0});var om=a(ds);uc=d(om,"TFBlenderbotModel"),om.forEach(t),mc=d(vs," forward method, overrides the "),ma=s(vs,"CODE",{});var nm=a(ma);fc=d(nm,"__call__"),nm.forEach(t),_c=d(vs," special method."),vs.forEach(t),gc=l(lt),g(Jt.$$.fragment,lt),bc=l(lt),fa=s(lt,"P",{});var sm=a(fa);kc=d(sm,"Example:"),sm.forEach(t),yc=l(lt),g(en.$$.fragment,lt),lt.forEach(t),it.forEach(t),Dr=l(o),Mt=s(o,"H2",{class:!0});var _d=a(Mt);Qt=s(_d,"A",{id:!0,class:!0,href:!0});var am=a(Qt);_a=s(am,"SPAN",{});var rm=a(_a);g(tn.$$.fragment,rm),rm.forEach(t),am.forEach(t),vc=l(_d),ga=s(_d,"SPAN",{});var dm=a(ga);Tc=d(dm,"TFBlenderbotForConditionalGeneration"),dm.forEach(t),_d.forEach(t),Gr=l(o),ce=s(o,"DIV",{class:!0});var ct=a(ce);g(on.$$.fragment,ct),wc=l(ct),nn=s(ct,"P",{});var gd=a(nn);Bc=d(gd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),is=s(gd,"A",{href:!0});var im=a(is);zc=d(im,"TFPreTrainedModel"),im.forEach(t),xc=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),Fc=l(ct),sn=s(ct,"P",{});var bd=a(sn);$c=d(bd,"This model is also a "),an=s(bd,"A",{href:!0,rel:!0});var lm=a(an);qc=d(lm,"tf.keras.Model"),lm.forEach(t),Mc=d(bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd.forEach(t),Ec=l(ct),g(Xt.$$.fragment,ct),Cc=l(ct),X=s(ct,"DIV",{class:!0});var Me=a(X);g(rn.$$.fragment,Me),jc=l(Me),Et=s(Me,"P",{});var Ts=a(Et);Pc=d(Ts,"The "),ls=s(Ts,"A",{href:!0});var cm=a(ls);Oc=d(cm,"TFBlenderbotForConditionalGeneration"),cm.forEach(t),Nc=d(Ts," forward method, overrides the "),ba=s(Ts,"CODE",{});var pm=a(ba);Ac=d(pm,"__call__"),pm.forEach(t),Ic=d(Ts," special method."),Ts.forEach(t),Lc=l(Me),g(Yt.$$.fragment,Me),Sc=l(Me),ka=s(Me,"P",{});var hm=a(ka);Dc=d(hm,"Conversation example::"),hm.forEach(t),Gc=l(Me),ya=s(Me,"BLOCKQUOTE",{});var um=a(ya);va=s(um,"BLOCKQUOTE",{});var mm=a(va);Ta=s(mm,"BLOCKQUOTE",{});var fm=a(Ta);wa=s(fm,"P",{});var _m=a(wa);Wc=d(_m,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),_m.forEach(t),fm.forEach(t),mm.forEach(t),um.forEach(t),Uc=l(Me),Ba=s(Me,"BLOCKQUOTE",{});var gm=a(Ba);za=s(gm,"BLOCKQUOTE",{});var bm=a(za);xa=s(bm,"BLOCKQUOTE",{});var km=a(xa);dn=s(km,"P",{});var kd=a(dn);Rc=d(kd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Fa=s(kd,"S",{});var ym=a(Fa);Hc=d(ym,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),ym.forEach(t),Kc=d(kd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),kd.forEach(t),km.forEach(t),bm.forEach(t),gm.forEach(t),Me.forEach(t),ct.forEach(t),Wr=l(o),Ct=s(o,"H2",{class:!0});var yd=a(Ct);Zt=s(yd,"A",{id:!0,class:!0,href:!0});var vm=a(Zt);$a=s(vm,"SPAN",{});var Tm=a($a);g(ln.$$.fragment,Tm),Tm.forEach(t),vm.forEach(t),Vc=l(yd),qa=s(yd,"SPAN",{});var wm=a(qa);Jc=d(wm,"FlaxBlenderbotModel"),wm.forEach(t),yd.forEach(t),Ur=l(o),I=s(o,"DIV",{class:!0});var Y=a(I);g(cn.$$.fragment,Y),Qc=l(Y),pn=s(Y,"P",{});var vd=a(pn);Xc=d(vd,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),cs=s(vd,"A",{href:!0});var Bm=a(cs);Yc=d(Bm,"FlaxPreTrainedModel"),Bm.forEach(t),Zc=d(vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vd.forEach(t),ep=l(Y),hn=s(Y,"P",{});var Td=a(hn);tp=d(Td,`This model is also a Flax Linen
`),un=s(Td,"A",{href:!0,rel:!0});var zm=a(un);op=d(zm,"flax.nn.Module"),zm.forEach(t),np=d(Td,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Td.forEach(t),sp=l(Y),Ma=s(Y,"P",{});var xm=a(Ma);ap=d(xm,"Finally, this model supports inherent JAX features such as:"),xm.forEach(t),rp=l(Y),Re=s(Y,"UL",{});var co=a(Re);Ea=s(co,"LI",{});var Fm=a(Ea);mn=s(Fm,"A",{href:!0,rel:!0});var $m=a(mn);dp=d($m,"Just-In-Time (JIT) compilation"),$m.forEach(t),Fm.forEach(t),ip=l(co),Ca=s(co,"LI",{});var qm=a(Ca);fn=s(qm,"A",{href:!0,rel:!0});var Mm=a(fn);lp=d(Mm,"Automatic Differentiation"),Mm.forEach(t),qm.forEach(t),cp=l(co),ja=s(co,"LI",{});var Em=a(ja);_n=s(Em,"A",{href:!0,rel:!0});var Cm=a(_n);pp=d(Cm,"Vectorization"),Cm.forEach(t),Em.forEach(t),hp=l(co),Pa=s(co,"LI",{});var jm=a(Pa);gn=s(jm,"A",{href:!0,rel:!0});var Pm=a(gn);up=d(Pm,"Parallelization"),Pm.forEach(t),jm.forEach(t),co.forEach(t),mp=l(Y),ke=s(Y,"DIV",{class:!0});var pt=a(ke);g(bn.$$.fragment,pt),fp=l(pt),jt=s(pt,"P",{});var ws=a(jt);_p=d(ws,"The "),Oa=s(ws,"CODE",{});var Om=a(Oa);gp=d(Om,"FlaxBlenderbotPreTrainedModel"),Om.forEach(t),bp=d(ws,"forward method, overrides the "),Na=s(ws,"CODE",{});var Nm=a(Na);kp=d(Nm,"__call__"),Nm.forEach(t),yp=d(ws," special method."),ws.forEach(t),vp=l(pt),g(eo.$$.fragment,pt),Tp=l(pt),Aa=s(pt,"P",{});var Am=a(Aa);wp=d(Am,"Example:"),Am.forEach(t),Bp=l(pt),g(kn.$$.fragment,pt),pt.forEach(t),zp=l(Y),Ze=s(Y,"DIV",{class:!0});var Bs=a(Ze);g(yn.$$.fragment,Bs),xp=l(Bs),Ia=s(Bs,"P",{});var Im=a(Ia);Fp=d(Im,"Example:"),Im.forEach(t),$p=l(Bs),g(vn.$$.fragment,Bs),Bs.forEach(t),qp=l(Y),et=s(Y,"DIV",{class:!0});var zs=a(et);g(Tn.$$.fragment,zs),Mp=l(zs),La=s(zs,"P",{});var Lm=a(La);Ep=d(Lm,"Example:"),Lm.forEach(t),Cp=l(zs),g(wn.$$.fragment,zs),zs.forEach(t),Y.forEach(t),Rr=l(o),Pt=s(o,"H2",{class:!0});var wd=a(Pt);to=s(wd,"A",{id:!0,class:!0,href:!0});var Sm=a(to);Sa=s(Sm,"SPAN",{});var Dm=a(Sa);g(Bn.$$.fragment,Dm),Dm.forEach(t),Sm.forEach(t),jp=l(wd),Da=s(wd,"SPAN",{});var Gm=a(Da);Pp=d(Gm,"FlaxBlenderbotForConditionalGeneration"),Gm.forEach(t),wd.forEach(t),Hr=l(o),L=s(o,"DIV",{class:!0});var Z=a(L);g(zn.$$.fragment,Z),Op=l(Z),xn=s(Z,"P",{});var Bd=a(xn);Np=d(Bd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ps=s(Bd,"A",{href:!0});var Wm=a(ps);Ap=d(Wm,"FlaxPreTrainedModel"),Wm.forEach(t),Ip=d(Bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd.forEach(t),Lp=l(Z),Fn=s(Z,"P",{});var zd=a(Fn);Sp=d(zd,`This model is also a Flax Linen
`),$n=s(zd,"A",{href:!0,rel:!0});var Um=a($n);Dp=d(Um,"flax.nn.Module"),Um.forEach(t),Gp=d(zd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zd.forEach(t),Wp=l(Z),Ga=s(Z,"P",{});var Rm=a(Ga);Up=d(Rm,"Finally, this model supports inherent JAX features such as:"),Rm.forEach(t),Rp=l(Z),He=s(Z,"UL",{});var po=a(He);Wa=s(po,"LI",{});var Hm=a(Wa);qn=s(Hm,"A",{href:!0,rel:!0});var Km=a(qn);Hp=d(Km,"Just-In-Time (JIT) compilation"),Km.forEach(t),Hm.forEach(t),Kp=l(po),Ua=s(po,"LI",{});var Vm=a(Ua);Mn=s(Vm,"A",{href:!0,rel:!0});var Jm=a(Mn);Vp=d(Jm,"Automatic Differentiation"),Jm.forEach(t),Vm.forEach(t),Jp=l(po),Ra=s(po,"LI",{});var Qm=a(Ra);En=s(Qm,"A",{href:!0,rel:!0});var Xm=a(En);Qp=d(Xm,"Vectorization"),Xm.forEach(t),Qm.forEach(t),Xp=l(po),Ha=s(po,"LI",{});var Ym=a(Ha);Cn=s(Ym,"A",{href:!0,rel:!0});var Zm=a(Cn);Yp=d(Zm,"Parallelization"),Zm.forEach(t),Ym.forEach(t),po.forEach(t),Zp=l(Z),S=s(Z,"DIV",{class:!0});var ee=a(S);g(jn.$$.fragment,ee),eh=l(ee),Ot=s(ee,"P",{});var xs=a(Ot);th=d(xs,"The "),Ka=s(xs,"CODE",{});var ef=a(Ka);oh=d(ef,"FlaxBlenderbotPreTrainedModel"),ef.forEach(t),nh=d(xs,"forward method, overrides the "),Va=s(xs,"CODE",{});var tf=a(Va);sh=d(tf,"__call__"),tf.forEach(t),ah=d(xs," special method."),xs.forEach(t),rh=l(ee),g(oo.$$.fragment,ee),dh=l(ee),Ja=s(ee,"P",{});var of=a(Ja);ih=d(of,"Conversation example::"),of.forEach(t),lh=l(ee),Qa=s(ee,"BLOCKQUOTE",{});var nf=a(Qa);Xa=s(nf,"BLOCKQUOTE",{});var sf=a(Xa);Ya=s(sf,"BLOCKQUOTE",{});var af=a(Ya);Za=s(af,"P",{});var rf=a(Za);ch=d(rf,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),rf.forEach(t),af.forEach(t),sf.forEach(t),nf.forEach(t),ph=l(ee),er=s(ee,"BLOCKQUOTE",{});var df=a(er);tr=s(df,"BLOCKQUOTE",{});var lf=a(tr);or=s(lf,"BLOCKQUOTE",{});var cf=a(or);nr=s(cf,"P",{});var pf=a(nr);hh=d(pf,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),pf.forEach(t),cf.forEach(t),lf.forEach(t),df.forEach(t),uh=l(ee),sr=s(ee,"BLOCKQUOTE",{});var hf=a(sr);ar=s(hf,"BLOCKQUOTE",{});var uf=a(ar);rr=s(uf,"BLOCKQUOTE",{});var mf=a(rr);dr=s(mf,"P",{});var ff=a(dr);mh=d(ff,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),ff.forEach(t),mf.forEach(t),uf.forEach(t),hf.forEach(t),fh=l(ee),ir=s(ee,"BLOCKQUOTE",{});var _f=a(ir);lr=s(_f,"BLOCKQUOTE",{});var gf=a(lr);Pn=s(gf,"BLOCKQUOTE",{});var xd=a(Pn);no=s(xd,"H1",{class:!0});var Fd=a(no);so=s(Fd,"A",{id:!0,class:!0,href:!0});var bf=a(so);cr=s(bf,"SPAN",{});var kf=a(cr);g(On.$$.fragment,kf),kf.forEach(t),bf.forEach(t),_h=l(Fd),pr=s(Fd,"SPAN",{});var yf=a(pr);gh=d(yf,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),yf.forEach(t),Fd.forEach(t),bh=l(xd),hr=s(xd,"P",{});var vf=a(hr);kh=d(vf,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),vf.forEach(t),xd.forEach(t),gf.forEach(t),_f.forEach(t),ee.forEach(t),yh=l(Z),tt=s(Z,"DIV",{class:!0});var Fs=a(tt);g(Nn.$$.fragment,Fs),vh=l(Fs),ur=s(Fs,"P",{});var Tf=a(ur);Th=d(Tf,"Example:"),Tf.forEach(t),wh=l(Fs),g(An.$$.fragment,Fs),Fs.forEach(t),Bh=l(Z),ot=s(Z,"DIV",{class:!0});var $s=a(ot);g(In.$$.fragment,$s),zh=l($s),mr=s($s,"P",{});var wf=a(mr);xh=d(wf,"Example:"),wf.forEach(t),Fh=l($s),g(Ln.$$.fragment,$s),$s.forEach(t),Z.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Af)),c(T,"id","blenderbot"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot"),c(f,"class","relative group"),c(oe,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(oe,"rel","nofollow"),c(O,"id","overview"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#overview"),c(G,"class","relative group"),c(W,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(W,"rel","nofollow"),c(U,"href","https://huggingface.co/sshleifer"),c(U,"rel","nofollow"),c($,"href","https://github.com/facebookresearch/ParlAI"),c($,"rel","nofollow"),c(fe,"id","implementation-notes"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#implementation-notes"),c(j,"class","relative group"),c(ae,"href","https://arxiv.org/pdf/1706.03762.pdf"),c(ae,"rel","nofollow"),c(mo,"href","https://huggingface.co/models?search=blenderbot"),c(mo,"rel","nofollow"),c(Un,"href","blenderbot-small"),c(Nt,"id","usage"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#usage"),c(_t,"class","relative group"),c(At,"id","transformers.BlenderbotConfig"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.BlenderbotConfig"),c(gt,"class","relative group"),c(Hn,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(ko,"href","https://huggingface.co/facebook/blenderbot-3B"),c(ko,"rel","nofollow"),c(Kn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Vn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(re,"class","docstring"),c(It,"id","transformers.BlenderbotTokenizer"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.BlenderbotTokenizer"),c(yt,"class","relative group"),c(Jn,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qn,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qe,"class","docstring"),c(de,"class","docstring"),c(St,"id","transformers.BlenderbotTokenizerFast"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.BlenderbotTokenizerFast"),c(vt,"class","relative group"),c(Yn,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Zn,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Xe,"class","docstring"),c(ie,"class","docstring"),c(Gt,"id","transformers.BlenderbotModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.BlenderbotModel"),c(Tt,"class","relative group"),c(ts,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Po,"rel","nofollow"),c(os,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(_e,"class","docstring"),c(ze,"class","docstring"),c(Ut,"id","transformers.BlenderbotForConditionalGeneration"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.BlenderbotForConditionalGeneration"),c(Bt,"class","relative group"),c(ns,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(ss,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Do,"rel","nofollow"),c(as,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(ge,"class","docstring"),c(xe,"class","docstring"),c(Ht,"id","transformers.BlenderbotForCausalLM"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.BlenderbotForCausalLM"),c(xt,"class","relative group"),c(Ye,"class","docstring"),c(Ft,"class","docstring"),c(Kt,"id","transformers.TFBlenderbotModel"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.TFBlenderbotModel"),c($t,"class","relative group"),c(rs,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Yo,"rel","nofollow"),c(ds,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),c(be,"class","docstring"),c(le,"class","docstring"),c(Qt,"id","transformers.TFBlenderbotForConditionalGeneration"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.TFBlenderbotForConditionalGeneration"),c(Mt,"class","relative group"),c(is,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(an,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(an,"rel","nofollow"),c(ls,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),c(X,"class","docstring"),c(ce,"class","docstring"),c(Zt,"id","transformers.FlaxBlenderbotModel"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.FlaxBlenderbotModel"),c(Ct,"class","relative group"),c(cs,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(un,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(un,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(ke,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(I,"class","docstring"),c(to,"id","transformers.FlaxBlenderbotForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),c(Pt,"class","relative group"),c(ps,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($n,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c($n,"rel","nofollow"),c(qn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(qn,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Mn,"rel","nofollow"),c(En,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(En,"rel","nofollow"),c(Cn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Cn,"rel","nofollow"),c(so,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(no,"class","relative group"),c(S,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(L,"class","docstring")},m(o,h){e(document.head,u),p(o,x,h),p(o,f,h),e(f,T),e(T,z),b(B,z,null),e(f,w),e(f,F),e(F,Ee),p(o,he,h),p(o,q,h),e(q,ye),e(ye,te),e(q,Ce),e(q,oe),e(oe,ne),e(q,je),p(o,Fe,h),p(o,G,h),e(G,O),e(O,ve),b(R,ve,null),e(G,M),e(G,C),e(C,Pe),p(o,J,h),p(o,Q,h),e(Q,Oe),e(Q,W),e(W,Ne),e(Q,Ae),p(o,N,h),p(o,ue,h),e(ue,se),p(o,$e,h),p(o,me,h),e(me,H),e(H,Ie),p(o,qe,h),p(o,E,h),e(E,Le),e(E,U),e(U,Se),e(E,m),e(E,$),e($,Te),e(E,ht),p(o,Ve,h),p(o,j,h),e(j,fe),e(fe,De),b(we,De,null),e(j,K),e(j,V),e(V,ut),p(o,Je,h),p(o,A,h),e(A,Be),e(Be,mt),e(Be,ae),e(ae,ft),e(Be,$d),e(A,qd),e(A,uo),e(uo,Md),e(uo,mo),e(mo,Ed),e(uo,Cd),e(A,jd),e(A,Ge),e(Ge,Pd),e(Ge,qs),e(qs,Od),e(Ge,Nd),e(Ge,Ms),e(Ms,Ad),e(Ge,Id),e(Ge,Un),e(Un,Ld),e(Ge,Sd),p(o,Tr,h),p(o,_t,h),e(_t,Nt),e(Nt,Es),b(fo,Es,null),e(_t,Dd),e(_t,Cs),e(Cs,Gd),p(o,wr,h),p(o,Rn,h),e(Rn,Wd),p(o,Br,h),b(_o,o,h),p(o,zr,h),p(o,gt,h),e(gt,At),e(At,js),b(go,js,null),e(gt,Ud),e(gt,Ps),e(Ps,Rd),p(o,xr,h),p(o,re,h),b(bo,re,null),e(re,Hd),e(re,bt),e(bt,Kd),e(bt,Hn),e(Hn,Vd),e(bt,Jd),e(bt,ko),e(ko,Qd),e(bt,Xd),e(re,Yd),e(re,kt),e(kt,Zd),e(kt,Kn),e(Kn,ei),e(kt,ti),e(kt,Vn),e(Vn,oi),e(kt,ni),e(re,si),e(re,Os),e(Os,ai),e(re,ri),b(yo,re,null),p(o,Fr,h),p(o,yt,h),e(yt,It),e(It,Ns),b(vo,Ns,null),e(yt,di),e(yt,As),e(As,ii),p(o,$r,h),p(o,de,h),b(To,de,null),e(de,li),e(de,Is),e(Is,ci),e(de,pi),e(de,Lt),e(Lt,Ls),e(Ls,hi),e(Lt,ui),e(Lt,Jn),e(Jn,mi),e(Lt,fi),e(de,_i),e(de,wo),e(wo,gi),e(wo,Qn),e(Qn,bi),e(wo,ki),e(de,yi),e(de,Qe),b(Bo,Qe,null),e(Qe,vi),e(Qe,Ss),e(Ss,Ti),e(Qe,wi),e(Qe,Ds),e(Ds,Xn),e(Xn,Bi),e(Xn,Gs),e(Gs,zi),p(o,qr,h),p(o,vt,h),e(vt,St),e(St,Ws),b(zo,Ws,null),e(vt,xi),e(vt,Us),e(Us,Fi),p(o,Mr,h),p(o,ie,h),b(xo,ie,null),e(ie,$i),e(ie,Fo),e(Fo,qi),e(Fo,Rs),e(Rs,Mi),e(Fo,Ei),e(ie,Ci),e(ie,Dt),e(Dt,Hs),e(Hs,ji),e(Dt,Pi),e(Dt,Yn),e(Yn,Oi),e(Dt,Ni),e(ie,Ai),e(ie,$o),e($o,Ii),e($o,Zn),e(Zn,Li),e($o,Si),e(ie,Di),e(ie,Xe),b(qo,Xe,null),e(Xe,Gi),e(Xe,Ks),e(Ks,Wi),e(Xe,Ui),e(Xe,Vs),e(Vs,es),e(es,Ri),e(es,Js),e(Js,Hi),p(o,Er,h),p(o,Tt,h),e(Tt,Gt),e(Gt,Qs),b(Mo,Qs,null),e(Tt,Ki),e(Tt,Xs),e(Xs,Vi),p(o,Cr,h),p(o,We,h),e(We,Ji),e(We,Ys),e(Ys,Qi),e(We,Xi),e(We,Zs),e(Zs,Yi),e(We,Zi),e(We,ea),e(ea,el),p(o,jr,h),p(o,ze,h),b(Eo,ze,null),e(ze,tl),e(ze,Co),e(Co,ol),e(Co,ts),e(ts,nl),e(Co,sl),e(ze,al),e(ze,jo),e(jo,rl),e(jo,Po),e(Po,dl),e(jo,il),e(ze,ll),e(ze,_e),b(Oo,_e,null),e(_e,cl),e(_e,wt),e(wt,pl),e(wt,os),e(os,hl),e(wt,ul),e(wt,ta),e(ta,ml),e(wt,fl),e(_e,_l),b(Wt,_e,null),e(_e,gl),e(_e,oa),e(oa,bl),e(_e,kl),b(No,_e,null),p(o,Pr,h),p(o,Bt,h),e(Bt,Ut),e(Ut,na),b(Ao,na,null),e(Bt,yl),e(Bt,sa),e(sa,vl),p(o,Or,h),p(o,Ue,h),e(Ue,Tl),e(Ue,ns),e(ns,wl),e(Ue,Bl),e(Ue,aa),e(aa,zl),e(Ue,xl),e(Ue,ra),e(ra,Fl),p(o,Nr,h),p(o,xe,h),b(Io,xe,null),e(xe,$l),e(xe,Lo),e(Lo,ql),e(Lo,ss),e(ss,Ml),e(Lo,El),e(xe,Cl),e(xe,So),e(So,jl),e(So,Do),e(Do,Pl),e(So,Ol),e(xe,Nl),e(xe,ge),b(Go,ge,null),e(ge,Al),e(ge,zt),e(zt,Il),e(zt,as),e(as,Ll),e(zt,Sl),e(zt,da),e(da,Dl),e(zt,Gl),e(ge,Wl),b(Rt,ge,null),e(ge,Ul),e(ge,ia),e(ia,Rl),e(ge,Hl),b(Wo,ge,null),p(o,Ar,h),p(o,xt,h),e(xt,Ht),e(Ht,la),b(Uo,la,null),e(xt,Kl),e(xt,ca),e(ca,Vl),p(o,Ir,h),p(o,Ft,h),b(Ro,Ft,null),e(Ft,Jl),e(Ft,Ye),b(Ho,Ye,null),e(Ye,Ql),e(Ye,pa),e(pa,Xl),e(Ye,Yl),b(Ko,Ye,null),p(o,Lr,h),p(o,$t,h),e($t,Kt),e(Kt,ha),b(Vo,ha,null),e($t,Zl),e($t,ua),e(ua,ec),p(o,Sr,h),p(o,le,h),b(Jo,le,null),e(le,tc),e(le,Qo),e(Qo,oc),e(Qo,rs),e(rs,nc),e(Qo,sc),e(le,ac),e(le,Xo),e(Xo,rc),e(Xo,Yo),e(Yo,dc),e(Xo,ic),e(le,lc),b(Vt,le,null),e(le,cc),e(le,be),b(Zo,be,null),e(be,pc),e(be,qt),e(qt,hc),e(qt,ds),e(ds,uc),e(qt,mc),e(qt,ma),e(ma,fc),e(qt,_c),e(be,gc),b(Jt,be,null),e(be,bc),e(be,fa),e(fa,kc),e(be,yc),b(en,be,null),p(o,Dr,h),p(o,Mt,h),e(Mt,Qt),e(Qt,_a),b(tn,_a,null),e(Mt,vc),e(Mt,ga),e(ga,Tc),p(o,Gr,h),p(o,ce,h),b(on,ce,null),e(ce,wc),e(ce,nn),e(nn,Bc),e(nn,is),e(is,zc),e(nn,xc),e(ce,Fc),e(ce,sn),e(sn,$c),e(sn,an),e(an,qc),e(sn,Mc),e(ce,Ec),b(Xt,ce,null),e(ce,Cc),e(ce,X),b(rn,X,null),e(X,jc),e(X,Et),e(Et,Pc),e(Et,ls),e(ls,Oc),e(Et,Nc),e(Et,ba),e(ba,Ac),e(Et,Ic),e(X,Lc),b(Yt,X,null),e(X,Sc),e(X,ka),e(ka,Dc),e(X,Gc),e(X,ya),e(ya,va),e(va,Ta),e(Ta,wa),e(wa,Wc),e(X,Uc),e(X,Ba),e(Ba,za),e(za,xa),e(xa,dn),e(dn,Rc),e(dn,Fa),e(Fa,Hc),e(dn,Kc),p(o,Wr,h),p(o,Ct,h),e(Ct,Zt),e(Zt,$a),b(ln,$a,null),e(Ct,Vc),e(Ct,qa),e(qa,Jc),p(o,Ur,h),p(o,I,h),b(cn,I,null),e(I,Qc),e(I,pn),e(pn,Xc),e(pn,cs),e(cs,Yc),e(pn,Zc),e(I,ep),e(I,hn),e(hn,tp),e(hn,un),e(un,op),e(hn,np),e(I,sp),e(I,Ma),e(Ma,ap),e(I,rp),e(I,Re),e(Re,Ea),e(Ea,mn),e(mn,dp),e(Re,ip),e(Re,Ca),e(Ca,fn),e(fn,lp),e(Re,cp),e(Re,ja),e(ja,_n),e(_n,pp),e(Re,hp),e(Re,Pa),e(Pa,gn),e(gn,up),e(I,mp),e(I,ke),b(bn,ke,null),e(ke,fp),e(ke,jt),e(jt,_p),e(jt,Oa),e(Oa,gp),e(jt,bp),e(jt,Na),e(Na,kp),e(jt,yp),e(ke,vp),b(eo,ke,null),e(ke,Tp),e(ke,Aa),e(Aa,wp),e(ke,Bp),b(kn,ke,null),e(I,zp),e(I,Ze),b(yn,Ze,null),e(Ze,xp),e(Ze,Ia),e(Ia,Fp),e(Ze,$p),b(vn,Ze,null),e(I,qp),e(I,et),b(Tn,et,null),e(et,Mp),e(et,La),e(La,Ep),e(et,Cp),b(wn,et,null),p(o,Rr,h),p(o,Pt,h),e(Pt,to),e(to,Sa),b(Bn,Sa,null),e(Pt,jp),e(Pt,Da),e(Da,Pp),p(o,Hr,h),p(o,L,h),b(zn,L,null),e(L,Op),e(L,xn),e(xn,Np),e(xn,ps),e(ps,Ap),e(xn,Ip),e(L,Lp),e(L,Fn),e(Fn,Sp),e(Fn,$n),e($n,Dp),e(Fn,Gp),e(L,Wp),e(L,Ga),e(Ga,Up),e(L,Rp),e(L,He),e(He,Wa),e(Wa,qn),e(qn,Hp),e(He,Kp),e(He,Ua),e(Ua,Mn),e(Mn,Vp),e(He,Jp),e(He,Ra),e(Ra,En),e(En,Qp),e(He,Xp),e(He,Ha),e(Ha,Cn),e(Cn,Yp),e(L,Zp),e(L,S),b(jn,S,null),e(S,eh),e(S,Ot),e(Ot,th),e(Ot,Ka),e(Ka,oh),e(Ot,nh),e(Ot,Va),e(Va,sh),e(Ot,ah),e(S,rh),b(oo,S,null),e(S,dh),e(S,Ja),e(Ja,ih),e(S,lh),e(S,Qa),e(Qa,Xa),e(Xa,Ya),e(Ya,Za),e(Za,ch),e(S,ph),e(S,er),e(er,tr),e(tr,or),e(or,nr),e(nr,hh),e(S,uh),e(S,sr),e(sr,ar),e(ar,rr),e(rr,dr),e(dr,mh),e(S,fh),e(S,ir),e(ir,lr),e(lr,Pn),e(Pn,no),e(no,so),e(so,cr),b(On,cr,null),e(no,_h),e(no,pr),e(pr,gh),e(Pn,bh),e(Pn,hr),e(hr,kh),e(L,yh),e(L,tt),b(Nn,tt,null),e(tt,vh),e(tt,ur),e(ur,Th),e(tt,wh),b(An,tt,null),e(L,Bh),e(L,ot),b(In,ot,null),e(ot,zh),e(ot,mr),e(mr,xh),e(ot,Fh),b(Ln,ot,null),Kr=!0},p(o,[h]){const Sn={};h&2&&(Sn.$$scope={dirty:h,ctx:o}),Wt.$set(Sn);const fr={};h&2&&(fr.$$scope={dirty:h,ctx:o}),Rt.$set(fr);const _r={};h&2&&(_r.$$scope={dirty:h,ctx:o}),Vt.$set(_r);const gr={};h&2&&(gr.$$scope={dirty:h,ctx:o}),Jt.$set(gr);const ao={};h&2&&(ao.$$scope={dirty:h,ctx:o}),Xt.$set(ao);const br={};h&2&&(br.$$scope={dirty:h,ctx:o}),Yt.$set(br);const kr={};h&2&&(kr.$$scope={dirty:h,ctx:o}),eo.$set(kr);const Dn={};h&2&&(Dn.$$scope={dirty:h,ctx:o}),oo.$set(Dn)},i(o){Kr||(k(B.$$.fragment,o),k(R.$$.fragment,o),k(we.$$.fragment,o),k(fo.$$.fragment,o),k(_o.$$.fragment,o),k(go.$$.fragment,o),k(bo.$$.fragment,o),k(yo.$$.fragment,o),k(vo.$$.fragment,o),k(To.$$.fragment,o),k(Bo.$$.fragment,o),k(zo.$$.fragment,o),k(xo.$$.fragment,o),k(qo.$$.fragment,o),k(Mo.$$.fragment,o),k(Eo.$$.fragment,o),k(Oo.$$.fragment,o),k(Wt.$$.fragment,o),k(No.$$.fragment,o),k(Ao.$$.fragment,o),k(Io.$$.fragment,o),k(Go.$$.fragment,o),k(Rt.$$.fragment,o),k(Wo.$$.fragment,o),k(Uo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ho.$$.fragment,o),k(Ko.$$.fragment,o),k(Vo.$$.fragment,o),k(Jo.$$.fragment,o),k(Vt.$$.fragment,o),k(Zo.$$.fragment,o),k(Jt.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(on.$$.fragment,o),k(Xt.$$.fragment,o),k(rn.$$.fragment,o),k(Yt.$$.fragment,o),k(ln.$$.fragment,o),k(cn.$$.fragment,o),k(bn.$$.fragment,o),k(eo.$$.fragment,o),k(kn.$$.fragment,o),k(yn.$$.fragment,o),k(vn.$$.fragment,o),k(Tn.$$.fragment,o),k(wn.$$.fragment,o),k(Bn.$$.fragment,o),k(zn.$$.fragment,o),k(jn.$$.fragment,o),k(oo.$$.fragment,o),k(On.$$.fragment,o),k(Nn.$$.fragment,o),k(An.$$.fragment,o),k(In.$$.fragment,o),k(Ln.$$.fragment,o),Kr=!0)},o(o){y(B.$$.fragment,o),y(R.$$.fragment,o),y(we.$$.fragment,o),y(fo.$$.fragment,o),y(_o.$$.fragment,o),y(go.$$.fragment,o),y(bo.$$.fragment,o),y(yo.$$.fragment,o),y(vo.$$.fragment,o),y(To.$$.fragment,o),y(Bo.$$.fragment,o),y(zo.$$.fragment,o),y(xo.$$.fragment,o),y(qo.$$.fragment,o),y(Mo.$$.fragment,o),y(Eo.$$.fragment,o),y(Oo.$$.fragment,o),y(Wt.$$.fragment,o),y(No.$$.fragment,o),y(Ao.$$.fragment,o),y(Io.$$.fragment,o),y(Go.$$.fragment,o),y(Rt.$$.fragment,o),y(Wo.$$.fragment,o),y(Uo.$$.fragment,o),y(Ro.$$.fragment,o),y(Ho.$$.fragment,o),y(Ko.$$.fragment,o),y(Vo.$$.fragment,o),y(Jo.$$.fragment,o),y(Vt.$$.fragment,o),y(Zo.$$.fragment,o),y(Jt.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(Xt.$$.fragment,o),y(rn.$$.fragment,o),y(Yt.$$.fragment,o),y(ln.$$.fragment,o),y(cn.$$.fragment,o),y(bn.$$.fragment,o),y(eo.$$.fragment,o),y(kn.$$.fragment,o),y(yn.$$.fragment,o),y(vn.$$.fragment,o),y(Tn.$$.fragment,o),y(wn.$$.fragment,o),y(Bn.$$.fragment,o),y(zn.$$.fragment,o),y(jn.$$.fragment,o),y(oo.$$.fragment,o),y(On.$$.fragment,o),y(Nn.$$.fragment,o),y(An.$$.fragment,o),y(In.$$.fragment,o),y(Ln.$$.fragment,o),Kr=!1},d(o){t(u),o&&t(x),o&&t(f),v(B),o&&t(he),o&&t(q),o&&t(Fe),o&&t(G),v(R),o&&t(J),o&&t(Q),o&&t(N),o&&t(ue),o&&t($e),o&&t(me),o&&t(qe),o&&t(E),o&&t(Ve),o&&t(j),v(we),o&&t(Je),o&&t(A),o&&t(Tr),o&&t(_t),v(fo),o&&t(wr),o&&t(Rn),o&&t(Br),v(_o,o),o&&t(zr),o&&t(gt),v(go),o&&t(xr),o&&t(re),v(bo),v(yo),o&&t(Fr),o&&t(yt),v(vo),o&&t($r),o&&t(de),v(To),v(Bo),o&&t(qr),o&&t(vt),v(zo),o&&t(Mr),o&&t(ie),v(xo),v(qo),o&&t(Er),o&&t(Tt),v(Mo),o&&t(Cr),o&&t(We),o&&t(jr),o&&t(ze),v(Eo),v(Oo),v(Wt),v(No),o&&t(Pr),o&&t(Bt),v(Ao),o&&t(Or),o&&t(Ue),o&&t(Nr),o&&t(xe),v(Io),v(Go),v(Rt),v(Wo),o&&t(Ar),o&&t(xt),v(Uo),o&&t(Ir),o&&t(Ft),v(Ro),v(Ho),v(Ko),o&&t(Lr),o&&t($t),v(Vo),o&&t(Sr),o&&t(le),v(Jo),v(Vt),v(Zo),v(Jt),v(en),o&&t(Dr),o&&t(Mt),v(tn),o&&t(Gr),o&&t(ce),v(on),v(Xt),v(rn),v(Yt),o&&t(Wr),o&&t(Ct),v(ln),o&&t(Ur),o&&t(I),v(cn),v(bn),v(eo),v(kn),v(yn),v(vn),v(Tn),v(wn),o&&t(Rr),o&&t(Pt),v(Bn),o&&t(Hr),o&&t(L),v(zn),v(jn),v(oo),v(On),v(Nn),v(An),v(In),v(Ln)}}}const Af={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function If(D,u,x){let{fw:f}=u;return D.$$set=T=>{"fw"in T&&x(0,f=T.fw)},[f]}class Uf extends Bf{constructor(u){super();zf(this,u,If,Nf,xf,{fw:0})}}export{Uf as default,Af as metadata};
