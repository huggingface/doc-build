import{S as Uf,i as Rf,s as Hf,e as n,k as i,w as _,t as a,L as Kf,c as s,d as t,m as l,a as r,x as g,h as d,b as c,J as e,g as p,y as b,q as k,o as v,B as y}from"../../../chunks/vendor-9e2b328e.js";import{T as po}from"../../../chunks/Tip-76f97a76.js";import{D as A}from"../../../chunks/Docstring-50fd6873.js";import{C as pt}from"../../../chunks/CodeBlock-b9ff96e9.js";import{I as ue}from"../../../chunks/IconCopyLink-fd0e58fd.js";import"../../../chunks/CopyButton-4b97cbf7.js";function Vf(D){let h,x,f,T,z;return{c(){h=n("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){h=s(B,"P",{});var w=r(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(w,"CODE",{});var F=r(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,h,w),e(h,x),e(h,f),e(f,T),e(h,z)},d(B){B&&t(h)}}}function Qf(D){let h,x,f,T,z;return{c(){h=n("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){h=s(B,"P",{});var w=r(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(w,"CODE",{});var F=r(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,h,w),e(h,x),e(h,f),e(f,T),e(h,z)},d(B){B&&t(h)}}}function Jf(D){let h,x,f,T,z,B,w,F,Ce,he,q,ve,oe,je,ne,se,Pe,Fe,G,P,ye,R,E,C,Ne,Q,J,Oe,W,Ae,Ie,N,me,re,$e,fe,H,Se,qe,M,Le,U,De;return{c(){h=n("p"),x=a("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),B=a("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),q=n("p"),ve=a("This second option is useful when using "),oe=n("code"),je=a("tf.keras.Model.fit"),ne=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),se=n("code"),Pe=a("model(inputs)"),Fe=a("."),G=i(),P=n("p"),ye=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),E=n("ul"),C=n("li"),Ne=a("a single Tensor with "),Q=n("code"),J=a("input_ids"),Oe=a(" only and nothing else: "),W=n("code"),Ae=a("model(input_ids)"),Ie=i(),N=n("li"),me=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),$e=a("model([input_ids, attention_mask])"),fe=a(" or "),H=n("code"),Se=a("model([input_ids, attention_mask, token_type_ids])"),qe=i(),M=n("li"),Le=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),De=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){h=s(m,"P",{});var $=r(h);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=l(m),T=s(m,"UL",{});var Te=r(T);z=s(Te,"LI",{});var ut=r(z);B=d(ut,"having all inputs as keyword arguments (like PyTorch models), or"),ut.forEach(t),w=l(Te),F=s(Te,"LI",{});var Ve=r(F);Ce=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),he=l(m),q=s(m,"P",{});var j=r(q);ve=d(j,"This second option is useful when using "),oe=s(j,"CODE",{});var _e=r(oe);je=d(_e,"tf.keras.Model.fit"),_e.forEach(t),ne=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),se=s(j,"CODE",{});var Ge=r(se);Pe=d(Ge,"model(inputs)"),Ge.forEach(t),Fe=d(j,"."),j.forEach(t),G=l(m),P=s(m,"P",{});var we=r(P);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),E=s(m,"UL",{});var K=r(E);C=s(K,"LI",{});var V=r(C);Ne=d(V,"a single Tensor with "),Q=s(V,"CODE",{});var ht=r(Q);J=d(ht,"input_ids"),ht.forEach(t),Oe=d(V," only and nothing else: "),W=s(V,"CODE",{});var Qe=r(W);Ae=d(Qe,"model(input_ids)"),Qe.forEach(t),V.forEach(t),Ie=l(K),N=s(K,"LI",{});var O=r(N);me=d(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=s(O,"CODE",{});var Be=r(re);$e=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=d(O," or "),H=s(O,"CODE",{});var mt=r(H);Se=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),O.forEach(t),qe=l(K),M=s(K,"LI",{});var ae=r(M);Le=d(ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(ae,"CODE",{});var ft=r(U);De=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),ae.forEach(t),K.forEach(t)},m(m,$){p(m,h,$),e(h,x),p(m,f,$),p(m,T,$),e(T,z),e(z,B),e(T,w),e(T,F),e(F,Ce),p(m,he,$),p(m,q,$),e(q,ve),e(q,oe),e(oe,je),e(q,ne),e(q,se),e(se,Pe),e(q,Fe),p(m,G,$),p(m,P,$),e(P,ye),p(m,R,$),p(m,E,$),e(E,C),e(C,Ne),e(C,Q),e(Q,J),e(C,Oe),e(C,W),e(W,Ae),e(E,Ie),e(E,N),e(N,me),e(N,re),e(re,$e),e(N,fe),e(N,H),e(H,Se),e(E,qe),e(E,M),e(M,Le),e(M,U),e(U,De)},d(m){m&&t(h),m&&t(f),m&&t(T),m&&t(he),m&&t(q),m&&t(G),m&&t(P),m&&t(R),m&&t(E)}}}function Xf(D){let h,x,f,T,z;return{c(){h=n("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){h=s(B,"P",{});var w=r(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(w,"CODE",{});var F=r(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,h,w),e(h,x),e(h,f),e(f,T),e(h,z)},d(B){B&&t(h)}}}function Yf(D){let h,x,f,T,z,B,w,F,Ce,he,q,ve,oe,je,ne,se,Pe,Fe,G,P,ye,R,E,C,Ne,Q,J,Oe,W,Ae,Ie,N,me,re,$e,fe,H,Se,qe,M,Le,U,De;return{c(){h=n("p"),x=a("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),B=a("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),q=n("p"),ve=a("This second option is useful when using "),oe=n("code"),je=a("tf.keras.Model.fit"),ne=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),se=n("code"),Pe=a("model(inputs)"),Fe=a("."),G=i(),P=n("p"),ye=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),E=n("ul"),C=n("li"),Ne=a("a single Tensor with "),Q=n("code"),J=a("input_ids"),Oe=a(" only and nothing else: "),W=n("code"),Ae=a("model(input_ids)"),Ie=i(),N=n("li"),me=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),$e=a("model([input_ids, attention_mask])"),fe=a(" or "),H=n("code"),Se=a("model([input_ids, attention_mask, token_type_ids])"),qe=i(),M=n("li"),Le=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),De=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){h=s(m,"P",{});var $=r(h);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=l(m),T=s(m,"UL",{});var Te=r(T);z=s(Te,"LI",{});var ut=r(z);B=d(ut,"having all inputs as keyword arguments (like PyTorch models), or"),ut.forEach(t),w=l(Te),F=s(Te,"LI",{});var Ve=r(F);Ce=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),he=l(m),q=s(m,"P",{});var j=r(q);ve=d(j,"This second option is useful when using "),oe=s(j,"CODE",{});var _e=r(oe);je=d(_e,"tf.keras.Model.fit"),_e.forEach(t),ne=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),se=s(j,"CODE",{});var Ge=r(se);Pe=d(Ge,"model(inputs)"),Ge.forEach(t),Fe=d(j,"."),j.forEach(t),G=l(m),P=s(m,"P",{});var we=r(P);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),E=s(m,"UL",{});var K=r(E);C=s(K,"LI",{});var V=r(C);Ne=d(V,"a single Tensor with "),Q=s(V,"CODE",{});var ht=r(Q);J=d(ht,"input_ids"),ht.forEach(t),Oe=d(V," only and nothing else: "),W=s(V,"CODE",{});var Qe=r(W);Ae=d(Qe,"model(input_ids)"),Qe.forEach(t),V.forEach(t),Ie=l(K),N=s(K,"LI",{});var O=r(N);me=d(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=s(O,"CODE",{});var Be=r(re);$e=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=d(O," or "),H=s(O,"CODE",{});var mt=r(H);Se=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),O.forEach(t),qe=l(K),M=s(K,"LI",{});var ae=r(M);Le=d(ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s(ae,"CODE",{});var ft=r(U);De=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),ae.forEach(t),K.forEach(t)},m(m,$){p(m,h,$),e(h,x),p(m,f,$),p(m,T,$),e(T,z),e(z,B),e(T,w),e(T,F),e(F,Ce),p(m,he,$),p(m,q,$),e(q,ve),e(q,oe),e(oe,je),e(q,ne),e(q,se),e(se,Pe),e(q,Fe),p(m,G,$),p(m,P,$),e(P,ye),p(m,R,$),p(m,E,$),e(E,C),e(C,Ne),e(C,Q),e(Q,J),e(C,Oe),e(C,W),e(W,Ae),e(E,Ie),e(E,N),e(N,me),e(N,re),e(re,$e),e(N,fe),e(N,H),e(H,Se),e(E,qe),e(E,M),e(M,Le),e(M,U),e(U,De)},d(m){m&&t(h),m&&t(f),m&&t(T),m&&t(he),m&&t(q),m&&t(G),m&&t(P),m&&t(R),m&&t(E)}}}function Zf(D){let h,x,f,T,z;return{c(){h=n("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){h=s(B,"P",{});var w=r(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(w,"CODE",{});var F=r(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,h,w),e(h,x),e(h,f),e(f,T),e(h,z)},d(B){B&&t(h)}}}function e_(D){let h,x,f,T,z;return{c(){h=n("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){h=s(B,"P",{});var w=r(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(w,"CODE",{});var F=r(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,h,w),e(h,x),e(h,f),e(f,T),e(h,z)},d(B){B&&t(h)}}}function t_(D){let h,x,f,T,z;return{c(){h=n("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=a("Module"),z=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){h=s(B,"P",{});var w=r(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(w,"CODE",{});var F=r(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,h,w),e(h,x),e(h,f),e(f,T),e(h,z)},d(B){B&&t(h)}}}function o_(D){let h,x,f,T,z,B,w,F,Ce,he,q,ve,oe,je,ne,se,Pe,Fe,G,P,ye,R,E,C,Ne,Q,J,Oe,W,Ae,Ie,N,me,re,$e,fe,H,Se,qe,M,Le,U,De,m,$,Te,ut,Ve,j,_e,Ge,we,K,V,ht,Qe,O,Be,mt,ae,ft,Nd,Od,uo,Ad,ho,Id,Sd,Ld,We,Dd,$s,Gd,Wd,qs,Ud,Rd,Wn,Hd,Kd,qa,_t,Nt,Es,mo,Vd,Ms,Qd,Ea,Un,Jd,Ma,fo,Ca,gt,Ot,Cs,_o,Xd,js,Yd,ja,de,go,Zd,bt,ei,Rn,ti,oi,bo,ni,si,ri,kt,ai,Hn,di,ii,Kn,li,ci,pi,Ps,ui,hi,ko,Pa,vt,At,Ns,vo,mi,Os,fi,Na,ie,yo,_i,As,gi,bi,It,Is,ki,vi,Vn,yi,Ti,wi,To,Bi,Qn,zi,xi,Fi,Je,wo,$i,Ss,qi,Ei,Ls,Jn,Mi,Ds,Ci,Oa,yt,St,Gs,Bo,ji,Ws,Pi,Aa,le,zo,Ni,xo,Oi,Us,Ai,Ii,Si,Lt,Rs,Li,Di,Xn,Gi,Wi,Ui,Fo,Ri,Yn,Hi,Ki,Vi,Xe,$o,Qi,Hs,Ji,Xi,Ks,Zn,Yi,Vs,Zi,Ia,Tt,Dt,Qs,qo,el,Js,tl,Sa,Ue,ol,Xs,nl,sl,Ys,rl,al,Zs,dl,La,ze,Eo,il,Mo,ll,es,cl,pl,ul,Co,hl,jo,ml,fl,_l,ge,Po,gl,wt,bl,ts,kl,vl,er,yl,Tl,wl,Gt,Bl,tr,zl,xl,No,Da,Bt,Wt,or,Oo,Fl,nr,$l,Ga,Re,ql,os,El,Ml,sr,Cl,jl,rr,Pl,Wa,xe,Ao,Nl,Io,Ol,ns,Al,Il,Sl,So,Ll,Lo,Dl,Gl,Wl,X,Do,Ul,zt,Rl,ss,Hl,Kl,ar,Vl,Ql,Jl,Ut,Xl,dr,Yl,Zl,ir,lr,cr,pr,ec,tc,ur,hr,mr,Go,oc,fr,nc,sc,Ua,xt,Rt,_r,Wo,rc,gr,ac,Ra,Uo,Ye,Ro,dc,br,ic,lc,Ho,Ha,Ft,Ht,kr,Ko,cc,vr,pc,Ka,ce,Vo,uc,Qo,hc,rs,mc,fc,_c,Jo,gc,Xo,bc,kc,vc,Kt,yc,be,Yo,Tc,$t,wc,as,Bc,zc,yr,xc,Fc,$c,Vt,qc,Tr,Ec,Mc,Zo,Va,qt,Qt,wr,en,Cc,Br,jc,Qa,pe,tn,Pc,on,Nc,ds,Oc,Ac,Ic,nn,Sc,sn,Lc,Dc,Gc,Jt,Wc,Y,rn,Uc,Et,Rc,is,Hc,Kc,zr,Vc,Qc,Jc,Xt,Xc,xr,Yc,Zc,Fr,$r,qr,Er,ep,tp,Mr,Cr,jr,an,op,Pr,np,sp,Ja,Mt,Yt,Nr,dn,rp,Or,ap,Xa,I,ln,dp,cn,ip,ls,lp,cp,pp,pn,up,un,hp,mp,fp,Ar,_p,gp,He,Ir,hn,bp,kp,Sr,mn,vp,yp,Lr,fn,Tp,wp,Dr,_n,Bp,zp,ke,gn,xp,Ct,Fp,Gr,$p,qp,Wr,Ep,Mp,Cp,Zt,jp,Ur,Pp,Np,bn,Op,Ze,kn,Ap,Rr,Ip,Sp,vn,Lp,et,yn,Dp,Hr,Gp,Wp,Tn,Ya,jt,eo,Kr,wn,Up,Vr,Rp,Za,S,Bn,Hp,zn,Kp,cs,Vp,Qp,Jp,xn,Xp,Fn,Yp,Zp,eu,Qr,tu,ou,Ke,Jr,$n,nu,su,Xr,qn,ru,au,Yr,En,du,iu,Zr,Mn,lu,cu,L,Cn,pu,Pt,uu,ea,hu,mu,ta,fu,_u,gu,to,bu,oa,ku,vu,na,sa,ra,aa,yu,Tu,da,ia,la,ca,wu,Bu,pa,ua,ha,ma,zu,xu,fa,_a,jn,oo,no,ga,Pn,Fu,ba,$u,qu,ka,Eu,Mu,tt,Nn,Cu,va,ju,Pu,On,Nu,ot,An,Ou,ya,Au,Iu,In,ed;return B=new ue({}),R=new ue({}),we=new ue({}),mo=new ue({}),fo=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

mname = "facebook/blenderbot-400M-distill"
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print(tokenizer.batch_decode(reply_ids)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(reply_ids))
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),_o=new ue({}),go=new A({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/configuration_blenderbot.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Blenderbot model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> or <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.TFBlenderbotModel">TFBlenderbotModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),ko=new pt({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),vo=new ue({}),yo=new A({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),wo=new A({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bo=new ue({}),zo=new A({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),$o=new A({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L61",parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qo=new ue({}),Eo=new A({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_blenderbot.py#L1064",parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Po=new A({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_blenderbot.py#L1102",parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gt=new po({props:{$$slots:{default:[Vf]},$$scope:{ctx:D}}}),No=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

model = BlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Oo=new ue({}),Ao=new A({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_blenderbot.py#L1200",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Do=new A({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_blenderbot.py#L1257",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ut=new po({props:{$$slots:{default:[Qf]},$$scope:{ctx:D}}}),Wo=new ue({}),Ro=new A({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_blenderbot.py#L1424",parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = BlenderbotForCausalLM.from_pretrained(
    "facebook/blenderbot-400M-distill", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ko=new ue({}),Vo=new A({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1175",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Kt=new po({props:{$$slots:{default:[Jf]},$$scope:{ctx:D}}}),Yo=new A({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1200",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vt=new po({props:{$$slots:{default:[Xf]},$$scope:{ctx:D}}}),Zo=new pt({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
import tensorflow as tf

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = TFBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, TFBlenderbotModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),en=new ue({}),tn=new A({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1295",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jt=new po({props:{$$slots:{default:[Yf]},$$scope:{ctx:D}}}),rn=new A({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1341",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xt=new po({props:{$$slots:{default:[Zf]},$$scope:{ctx:D}}}),dn=new ue({}),ln=new A({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1207",parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),gn=new A({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1142",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new po({props:{$$slots:{default:[e_]},$$scope:{ctx:D}}}),bn=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),kn=new A({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),yn=new A({props:{name:"decode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1026",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new pt({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),wn=new ue({}),Bn=new A({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1294",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Cn=new A({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1142",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new po({props:{$$slots:{default:[t_]},$$scope:{ctx:D}}}),Pn=new ue({}),Nn=new A({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),An=new A({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1298",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new pt({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=n("meta"),x=i(),f=n("h1"),T=n("a"),z=n("span"),_(B.$$.fragment),w=i(),F=n("span"),Ce=a("Blenderbot"),he=i(),q=n("p"),ve=n("strong"),oe=a("DISCLAIMER:"),je=a(" If you see something strange, file a "),ne=n("a"),se=a("Github Issue"),Pe=a(" ."),Fe=i(),G=n("h2"),P=n("a"),ye=n("span"),_(R.$$.fragment),E=i(),C=n("span"),Ne=a("Overview"),Q=i(),J=n("p"),Oe=a("The Blender chatbot model was proposed in "),W=n("a"),Ae=a("Recipes for building an open-domain chatbot"),Ie=a(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),N=i(),me=n("p"),re=a("The abstract of the paper is the following:"),$e=i(),fe=n("p"),H=n("em"),Se=a(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),qe=i(),M=n("p"),Le=a("This model was contributed by "),U=n("a"),De=a("sshleifer"),m=a(". The authors\u2019 code can be found "),$=n("a"),Te=a("here"),ut=a(" ."),Ve=i(),j=n("h2"),_e=n("a"),Ge=n("span"),_(we.$$.fragment),K=i(),V=n("span"),ht=a("Implementation Notes"),Qe=i(),O=n("ul"),Be=n("li"),mt=a("Blenderbot uses a standard "),ae=n("a"),ft=a("seq2seq model transformer"),Nd=a(" based architecture."),Od=i(),uo=n("li"),Ad=a("Available checkpoints can be found in the "),ho=n("a"),Id=a("model hub"),Sd=a("."),Ld=i(),We=n("li"),Dd=a("This is the "),$s=n("em"),Gd=a("default"),Wd=a(` Blenderbot model class. However, some smaller checkpoints, such as
`),qs=n("code"),Ud=a("facebook/blenderbot_small_90M"),Rd=a(`, have a different architecture and consequently should be used with
`),Wn=n("a"),Hd=a("BlenderbotSmall"),Kd=a("."),qa=i(),_t=n("h2"),Nt=n("a"),Es=n("span"),_(mo.$$.fragment),Vd=i(),Ms=n("span"),Qd=a("Usage"),Ea=i(),Un=n("p"),Jd=a("Here is an example of model usage:"),Ma=i(),_(fo.$$.fragment),Ca=i(),gt=n("h2"),Ot=n("a"),Cs=n("span"),_(_o.$$.fragment),Xd=i(),js=n("span"),Yd=a("BlenderbotConfig"),ja=i(),de=n("div"),_(go.$$.fragment),Zd=i(),bt=n("p"),ei=a("This is the configuration class to store the configuration of a "),Rn=n("a"),ti=a("BlenderbotModel"),oi=a(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),bo=n("a"),ni=a("facebook/blenderbot-3B"),si=a(" architecture."),ri=i(),kt=n("p"),ai=a("Configuration objects inherit from "),Hn=n("a"),di=a("PretrainedConfig"),ii=a(` and can be used to control the model outputs. Read the
documentation from `),Kn=n("a"),li=a("PretrainedConfig"),ci=a(" for more information."),pi=i(),Ps=n("p"),ui=a("Example:"),hi=i(),_(ko.$$.fragment),Pa=i(),vt=n("h2"),At=n("a"),Ns=n("span"),_(vo.$$.fragment),mi=i(),Os=n("span"),fi=a("BlenderbotTokenizer"),Na=i(),ie=n("div"),_(yo.$$.fragment),_i=i(),As=n("p"),gi=a("Construct a Blenderbot tokenizer."),bi=i(),It=n("p"),Is=n("code"),ki=a("Blenderbot"),vi=a(" is nearly identical to "),Vn=n("a"),yi=a("RobertaTokenizer"),Ti=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),wi=i(),To=n("p"),Bi=a("Refer to superclass "),Qn=n("a"),zi=a("RobertaTokenizer"),xi=a(" for usage examples and documentation concerning parameters."),Fi=i(),Je=n("div"),_(wo.$$.fragment),$i=i(),Ss=n("p"),qi=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ei=i(),Ls=n("ul"),Jn=n("li"),Mi=a("single sequence: "),Ds=n("code"),Ci=a("X </s>"),Oa=i(),yt=n("h2"),St=n("a"),Gs=n("span"),_(Bo.$$.fragment),ji=i(),Ws=n("span"),Pi=a("BlenderbotTokenizerFast"),Aa=i(),le=n("div"),_(zo.$$.fragment),Ni=i(),xo=n("p"),Oi=a("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Us=n("em"),Ai=a("tokenizers"),Ii=a(" library)."),Si=i(),Lt=n("p"),Rs=n("code"),Li=a("BlenderbotFast"),Di=a(" is nearly identical to "),Xn=n("a"),Gi=a("RobertaTokenizerFast"),Wi=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Ui=i(),Fo=n("p"),Ri=a("Refer to superclass "),Yn=n("a"),Hi=a("RobertaTokenizerFast"),Ki=a(" for usage examples and documentation concerning parameters."),Vi=i(),Xe=n("div"),_($o.$$.fragment),Qi=i(),Hs=n("p"),Ji=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Xi=i(),Ks=n("ul"),Zn=n("li"),Yi=a("single sequence: "),Vs=n("code"),Zi=a("X </s>"),Ia=i(),Tt=n("h2"),Dt=n("a"),Qs=n("span"),_(qo.$$.fragment),el=i(),Js=n("span"),tl=a("BlenderbotModel"),Sa=i(),Ue=n("p"),ol=a("See "),Xs=n("code"),nl=a("transformers.BartModel"),sl=a(" for arguments to "),Ys=n("em"),rl=a("forward"),al=a(" and "),Zs=n("em"),dl=a("generate"),La=i(),ze=n("div"),_(Eo.$$.fragment),il=i(),Mo=n("p"),ll=a(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),es=n("a"),cl=a("PreTrainedModel"),pl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ul=i(),Co=n("p"),hl=a("This model is also a PyTorch "),jo=n("a"),ml=a("torch.nn.Module"),fl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_l=i(),ge=n("div"),_(Po.$$.fragment),gl=i(),wt=n("p"),bl=a("The "),ts=n("a"),kl=a("BlenderbotModel"),vl=a(" forward method, overrides the "),er=n("code"),yl=a("__call__"),Tl=a(" special method."),wl=i(),_(Gt.$$.fragment),Bl=i(),tr=n("p"),zl=a("Example:"),xl=i(),_(No.$$.fragment),Da=i(),Bt=n("h2"),Wt=n("a"),or=n("span"),_(Oo.$$.fragment),Fl=i(),nr=n("span"),$l=a("BlenderbotForConditionalGeneration"),Ga=i(),Re=n("p"),ql=a("See "),os=n("a"),El=a("BartForConditionalGeneration"),Ml=a(" for arguments to "),sr=n("em"),Cl=a("forward"),jl=a(" and "),rr=n("em"),Pl=a("generate"),Wa=i(),xe=n("div"),_(Ao.$$.fragment),Nl=i(),Io=n("p"),Ol=a(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ns=n("a"),Al=a("PreTrainedModel"),Il=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sl=i(),So=n("p"),Ll=a("This model is also a PyTorch "),Lo=n("a"),Dl=a("torch.nn.Module"),Gl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wl=i(),X=n("div"),_(Do.$$.fragment),Ul=i(),zt=n("p"),Rl=a("The "),ss=n("a"),Hl=a("BlenderbotForConditionalGeneration"),Kl=a(" forward method, overrides the "),ar=n("code"),Vl=a("__call__"),Ql=a(" special method."),Jl=i(),_(Ut.$$.fragment),Xl=i(),dr=n("p"),Yl=a("Conversation example::"),Zl=i(),ir=n("blockquote"),lr=n("blockquote"),cr=n("blockquote"),pr=n("p"),ec=a(`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = BlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),tc=i(),ur=n("blockquote"),hr=n("blockquote"),mr=n("blockquote"),Go=n("p"),oc=a(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),fr=n("s"),nc=a(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),sc=a(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Ua=i(),xt=n("h2"),Rt=n("a"),_r=n("span"),_(Wo.$$.fragment),rc=i(),gr=n("span"),ac=a("BlenderbotForCausalLM"),Ra=i(),Uo=n("div"),Ye=n("div"),_(Ro.$$.fragment),dc=i(),br=n("p"),ic=a("Example:"),lc=i(),_(Ho.$$.fragment),Ha=i(),Ft=n("h2"),Ht=n("a"),kr=n("span"),_(Ko.$$.fragment),cc=i(),vr=n("span"),pc=a("TFBlenderbotModel"),Ka=i(),ce=n("div"),_(Vo.$$.fragment),uc=i(),Qo=n("p"),hc=a(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rs=n("a"),mc=a("TFPreTrainedModel"),fc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c=i(),Jo=n("p"),gc=a("This model is also a "),Xo=n("a"),bc=a("tf.keras.Model"),kc=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vc=i(),_(Kt.$$.fragment),yc=i(),be=n("div"),_(Yo.$$.fragment),Tc=i(),$t=n("p"),wc=a("The "),as=n("a"),Bc=a("TFBlenderbotModel"),zc=a(" forward method, overrides the "),yr=n("code"),xc=a("__call__"),Fc=a(" special method."),$c=i(),_(Vt.$$.fragment),qc=i(),Tr=n("p"),Ec=a("Example:"),Mc=i(),_(Zo.$$.fragment),Va=i(),qt=n("h2"),Qt=n("a"),wr=n("span"),_(en.$$.fragment),Cc=i(),Br=n("span"),jc=a("TFBlenderbotForConditionalGeneration"),Qa=i(),pe=n("div"),_(tn.$$.fragment),Pc=i(),on=n("p"),Nc=a(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ds=n("a"),Oc=a("TFPreTrainedModel"),Ac=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ic=i(),nn=n("p"),Sc=a("This model is also a "),sn=n("a"),Lc=a("tf.keras.Model"),Dc=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gc=i(),_(Jt.$$.fragment),Wc=i(),Y=n("div"),_(rn.$$.fragment),Uc=i(),Et=n("p"),Rc=a("The "),is=n("a"),Hc=a("TFBlenderbotForConditionalGeneration"),Kc=a(" forward method, overrides the "),zr=n("code"),Vc=a("__call__"),Qc=a(" special method."),Jc=i(),_(Xt.$$.fragment),Xc=i(),xr=n("p"),Yc=a("Conversation example::"),Zc=i(),Fr=n("blockquote"),$r=n("blockquote"),qr=n("blockquote"),Er=n("p"),ep=a(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),tp=i(),Mr=n("blockquote"),Cr=n("blockquote"),jr=n("blockquote"),an=n("p"),op=a(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Pr=n("s"),np=a(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),sp=a(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Ja=i(),Mt=n("h2"),Yt=n("a"),Nr=n("span"),_(dn.$$.fragment),rp=i(),Or=n("span"),ap=a("FlaxBlenderbotModel"),Xa=i(),I=n("div"),_(ln.$$.fragment),dp=i(),cn=n("p"),ip=a(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ls=n("a"),lp=a("FlaxPreTrainedModel"),cp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pp=i(),pn=n("p"),up=a(`This model is also a Flax Linen
`),un=n("a"),hp=a("flax.nn.Module"),mp=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fp=i(),Ar=n("p"),_p=a("Finally, this model supports inherent JAX features such as:"),gp=i(),He=n("ul"),Ir=n("li"),hn=n("a"),bp=a("Just-In-Time (JIT) compilation"),kp=i(),Sr=n("li"),mn=n("a"),vp=a("Automatic Differentiation"),yp=i(),Lr=n("li"),fn=n("a"),Tp=a("Vectorization"),wp=i(),Dr=n("li"),_n=n("a"),Bp=a("Parallelization"),zp=i(),ke=n("div"),_(gn.$$.fragment),xp=i(),Ct=n("p"),Fp=a("The "),Gr=n("code"),$p=a("FlaxBlenderbotPreTrainedModel"),qp=a("forward method, overrides the "),Wr=n("code"),Ep=a("__call__"),Mp=a(" special method."),Cp=i(),_(Zt.$$.fragment),jp=i(),Ur=n("p"),Pp=a("Example:"),Np=i(),_(bn.$$.fragment),Op=i(),Ze=n("div"),_(kn.$$.fragment),Ap=i(),Rr=n("p"),Ip=a("Example:"),Sp=i(),_(vn.$$.fragment),Lp=i(),et=n("div"),_(yn.$$.fragment),Dp=i(),Hr=n("p"),Gp=a("Example:"),Wp=i(),_(Tn.$$.fragment),Ya=i(),jt=n("h2"),eo=n("a"),Kr=n("span"),_(wn.$$.fragment),Up=i(),Vr=n("span"),Rp=a("FlaxBlenderbotForConditionalGeneration"),Za=i(),S=n("div"),_(Bn.$$.fragment),Hp=i(),zn=n("p"),Kp=a(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),cs=n("a"),Vp=a("FlaxPreTrainedModel"),Qp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jp=i(),xn=n("p"),Xp=a(`This model is also a Flax Linen
`),Fn=n("a"),Yp=a("flax.nn.Module"),Zp=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),eu=i(),Qr=n("p"),tu=a("Finally, this model supports inherent JAX features such as:"),ou=i(),Ke=n("ul"),Jr=n("li"),$n=n("a"),nu=a("Just-In-Time (JIT) compilation"),su=i(),Xr=n("li"),qn=n("a"),ru=a("Automatic Differentiation"),au=i(),Yr=n("li"),En=n("a"),du=a("Vectorization"),iu=i(),Zr=n("li"),Mn=n("a"),lu=a("Parallelization"),cu=i(),L=n("div"),_(Cn.$$.fragment),pu=i(),Pt=n("p"),uu=a("The "),ea=n("code"),hu=a("FlaxBlenderbotPreTrainedModel"),mu=a("forward method, overrides the "),ta=n("code"),fu=a("__call__"),_u=a(" special method."),gu=i(),_(to.$$.fragment),bu=i(),oa=n("p"),ku=a("Conversation example::"),vu=i(),na=n("blockquote"),sa=n("blockquote"),ra=n("blockquote"),aa=n("p"),yu=a("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Tu=i(),da=n("blockquote"),ia=n("blockquote"),la=n("blockquote"),ca=n("p"),wu=a(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Bu=i(),pa=n("blockquote"),ua=n("blockquote"),ha=n("blockquote"),ma=n("p"),zu=a(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),xu=i(),fa=n("blockquote"),_a=n("blockquote"),jn=n("blockquote"),oo=n("h1"),no=n("a"),ga=n("span"),_(Pn.$$.fragment),Fu=i(),ba=n("span"),$u=a("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),qu=i(),ka=n("p"),Eu=a(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Mu=i(),tt=n("div"),_(Nn.$$.fragment),Cu=i(),va=n("p"),ju=a("Example:"),Pu=i(),_(On.$$.fragment),Nu=i(),ot=n("div"),_(An.$$.fragment),Ou=i(),ya=n("p"),Au=a("Example:"),Iu=i(),_(In.$$.fragment),this.h()},l(o){const u=Kf('[data-svelte="svelte-1phssyn"]',document.head);h=s(u,"META",{name:!0,content:!0}),u.forEach(t),x=l(o),f=s(o,"H1",{class:!0});var Sn=r(f);T=s(Sn,"A",{id:!0,class:!0,href:!0});var Ta=r(T);z=s(Ta,"SPAN",{});var wa=r(z);g(B.$$.fragment,wa),wa.forEach(t),Ta.forEach(t),w=l(Sn),F=s(Sn,"SPAN",{});var Ba=r(F);Ce=d(Ba,"Blenderbot"),Ba.forEach(t),Sn.forEach(t),he=l(o),q=s(o,"P",{});var so=r(q);ve=s(so,"STRONG",{});var za=r(ve);oe=d(za,"DISCLAIMER:"),za.forEach(t),je=d(so," If you see something strange, file a "),ne=s(so,"A",{href:!0,rel:!0});var xa=r(ne);se=d(xa,"Github Issue"),xa.forEach(t),Pe=d(so," ."),so.forEach(t),Fe=l(o),G=s(o,"H2",{class:!0});var Ln=r(G);P=s(Ln,"A",{id:!0,class:!0,href:!0});var Du=r(P);ye=s(Du,"SPAN",{});var Gu=r(ye);g(R.$$.fragment,Gu),Gu.forEach(t),Du.forEach(t),E=l(Ln),C=s(Ln,"SPAN",{});var Wu=r(C);Ne=d(Wu,"Overview"),Wu.forEach(t),Ln.forEach(t),Q=l(o),J=s(o,"P",{});var td=r(J);Oe=d(td,"The Blender chatbot model was proposed in "),W=s(td,"A",{href:!0,rel:!0});var Uu=r(W);Ae=d(Uu,"Recipes for building an open-domain chatbot"),Uu.forEach(t),Ie=d(td,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),td.forEach(t),N=l(o),me=s(o,"P",{});var Ru=r(me);re=d(Ru,"The abstract of the paper is the following:"),Ru.forEach(t),$e=l(o),fe=s(o,"P",{});var Hu=r(fe);H=s(Hu,"EM",{});var Ku=r(H);Se=d(Ku,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ku.forEach(t),Hu.forEach(t),qe=l(o),M=s(o,"P",{});var ps=r(M);Le=d(ps,"This model was contributed by "),U=s(ps,"A",{href:!0,rel:!0});var Vu=r(U);De=d(Vu,"sshleifer"),Vu.forEach(t),m=d(ps,". The authors\u2019 code can be found "),$=s(ps,"A",{href:!0,rel:!0});var Qu=r($);Te=d(Qu,"here"),Qu.forEach(t),ut=d(ps," ."),ps.forEach(t),Ve=l(o),j=s(o,"H2",{class:!0});var od=r(j);_e=s(od,"A",{id:!0,class:!0,href:!0});var Ju=r(_e);Ge=s(Ju,"SPAN",{});var Xu=r(Ge);g(we.$$.fragment,Xu),Xu.forEach(t),Ju.forEach(t),K=l(od),V=s(od,"SPAN",{});var Yu=r(V);ht=d(Yu,"Implementation Notes"),Yu.forEach(t),od.forEach(t),Qe=l(o),O=s(o,"UL",{});var us=r(O);Be=s(us,"LI",{});var nd=r(Be);mt=d(nd,"Blenderbot uses a standard "),ae=s(nd,"A",{href:!0,rel:!0});var Zu=r(ae);ft=d(Zu,"seq2seq model transformer"),Zu.forEach(t),Nd=d(nd," based architecture."),nd.forEach(t),Od=l(us),uo=s(us,"LI",{});var sd=r(uo);Ad=d(sd,"Available checkpoints can be found in the "),ho=s(sd,"A",{href:!0,rel:!0});var eh=r(ho);Id=d(eh,"model hub"),eh.forEach(t),Sd=d(sd,"."),sd.forEach(t),Ld=l(us),We=s(us,"LI",{});var ro=r(We);Dd=d(ro,"This is the "),$s=s(ro,"EM",{});var th=r($s);Gd=d(th,"default"),th.forEach(t),Wd=d(ro,` Blenderbot model class. However, some smaller checkpoints, such as
`),qs=s(ro,"CODE",{});var oh=r(qs);Ud=d(oh,"facebook/blenderbot_small_90M"),oh.forEach(t),Rd=d(ro,`, have a different architecture and consequently should be used with
`),Wn=s(ro,"A",{href:!0});var nh=r(Wn);Hd=d(nh,"BlenderbotSmall"),nh.forEach(t),Kd=d(ro,"."),ro.forEach(t),us.forEach(t),qa=l(o),_t=s(o,"H2",{class:!0});var rd=r(_t);Nt=s(rd,"A",{id:!0,class:!0,href:!0});var sh=r(Nt);Es=s(sh,"SPAN",{});var rh=r(Es);g(mo.$$.fragment,rh),rh.forEach(t),sh.forEach(t),Vd=l(rd),Ms=s(rd,"SPAN",{});var ah=r(Ms);Qd=d(ah,"Usage"),ah.forEach(t),rd.forEach(t),Ea=l(o),Un=s(o,"P",{});var dh=r(Un);Jd=d(dh,"Here is an example of model usage:"),dh.forEach(t),Ma=l(o),g(fo.$$.fragment,o),Ca=l(o),gt=s(o,"H2",{class:!0});var ad=r(gt);Ot=s(ad,"A",{id:!0,class:!0,href:!0});var ih=r(Ot);Cs=s(ih,"SPAN",{});var lh=r(Cs);g(_o.$$.fragment,lh),lh.forEach(t),ih.forEach(t),Xd=l(ad),js=s(ad,"SPAN",{});var ch=r(js);Yd=d(ch,"BlenderbotConfig"),ch.forEach(t),ad.forEach(t),ja=l(o),de=s(o,"DIV",{class:!0});var nt=r(de);g(go.$$.fragment,nt),Zd=l(nt),bt=s(nt,"P",{});var hs=r(bt);ei=d(hs,"This is the configuration class to store the configuration of a "),Rn=s(hs,"A",{href:!0});var ph=r(Rn);ti=d(ph,"BlenderbotModel"),ph.forEach(t),oi=d(hs,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),bo=s(hs,"A",{href:!0,rel:!0});var uh=r(bo);ni=d(uh,"facebook/blenderbot-3B"),uh.forEach(t),si=d(hs," architecture."),hs.forEach(t),ri=l(nt),kt=s(nt,"P",{});var ms=r(kt);ai=d(ms,"Configuration objects inherit from "),Hn=s(ms,"A",{href:!0});var hh=r(Hn);di=d(hh,"PretrainedConfig"),hh.forEach(t),ii=d(ms,` and can be used to control the model outputs. Read the
documentation from `),Kn=s(ms,"A",{href:!0});var mh=r(Kn);li=d(mh,"PretrainedConfig"),mh.forEach(t),ci=d(ms," for more information."),ms.forEach(t),pi=l(nt),Ps=s(nt,"P",{});var fh=r(Ps);ui=d(fh,"Example:"),fh.forEach(t),hi=l(nt),g(ko.$$.fragment,nt),nt.forEach(t),Pa=l(o),vt=s(o,"H2",{class:!0});var dd=r(vt);At=s(dd,"A",{id:!0,class:!0,href:!0});var _h=r(At);Ns=s(_h,"SPAN",{});var gh=r(Ns);g(vo.$$.fragment,gh),gh.forEach(t),_h.forEach(t),mi=l(dd),Os=s(dd,"SPAN",{});var bh=r(Os);fi=d(bh,"BlenderbotTokenizer"),bh.forEach(t),dd.forEach(t),Na=l(o),ie=s(o,"DIV",{class:!0});var st=r(ie);g(yo.$$.fragment,st),_i=l(st),As=s(st,"P",{});var kh=r(As);gi=d(kh,"Construct a Blenderbot tokenizer."),kh.forEach(t),bi=l(st),It=s(st,"P",{});var Fa=r(It);Is=s(Fa,"CODE",{});var vh=r(Is);ki=d(vh,"Blenderbot"),vh.forEach(t),vi=d(Fa," is nearly identical to "),Vn=s(Fa,"A",{href:!0});var yh=r(Vn);yi=d(yh,"RobertaTokenizer"),yh.forEach(t),Ti=d(Fa,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Fa.forEach(t),wi=l(st),To=s(st,"P",{});var id=r(To);Bi=d(id,"Refer to superclass "),Qn=s(id,"A",{href:!0});var Th=r(Qn);zi=d(Th,"RobertaTokenizer"),Th.forEach(t),xi=d(id," for usage examples and documentation concerning parameters."),id.forEach(t),Fi=l(st),Je=s(st,"DIV",{class:!0});var fs=r(Je);g(wo.$$.fragment,fs),$i=l(fs),Ss=s(fs,"P",{});var wh=r(Ss);qi=d(wh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),wh.forEach(t),Ei=l(fs),Ls=s(fs,"UL",{});var Bh=r(Ls);Jn=s(Bh,"LI",{});var Su=r(Jn);Mi=d(Su,"single sequence: "),Ds=s(Su,"CODE",{});var zh=r(Ds);Ci=d(zh,"X </s>"),zh.forEach(t),Su.forEach(t),Bh.forEach(t),fs.forEach(t),st.forEach(t),Oa=l(o),yt=s(o,"H2",{class:!0});var ld=r(yt);St=s(ld,"A",{id:!0,class:!0,href:!0});var xh=r(St);Gs=s(xh,"SPAN",{});var Fh=r(Gs);g(Bo.$$.fragment,Fh),Fh.forEach(t),xh.forEach(t),ji=l(ld),Ws=s(ld,"SPAN",{});var $h=r(Ws);Pi=d($h,"BlenderbotTokenizerFast"),$h.forEach(t),ld.forEach(t),Aa=l(o),le=s(o,"DIV",{class:!0});var rt=r(le);g(zo.$$.fragment,rt),Ni=l(rt),xo=s(rt,"P",{});var cd=r(xo);Oi=d(cd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Us=s(cd,"EM",{});var qh=r(Us);Ai=d(qh,"tokenizers"),qh.forEach(t),Ii=d(cd," library)."),cd.forEach(t),Si=l(rt),Lt=s(rt,"P",{});var $a=r(Lt);Rs=s($a,"CODE",{});var Eh=r(Rs);Li=d(Eh,"BlenderbotFast"),Eh.forEach(t),Di=d($a," is nearly identical to "),Xn=s($a,"A",{href:!0});var Mh=r(Xn);Gi=d(Mh,"RobertaTokenizerFast"),Mh.forEach(t),Wi=d($a,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),$a.forEach(t),Ui=l(rt),Fo=s(rt,"P",{});var pd=r(Fo);Ri=d(pd,"Refer to superclass "),Yn=s(pd,"A",{href:!0});var Ch=r(Yn);Hi=d(Ch,"RobertaTokenizerFast"),Ch.forEach(t),Ki=d(pd," for usage examples and documentation concerning parameters."),pd.forEach(t),Vi=l(rt),Xe=s(rt,"DIV",{class:!0});var _s=r(Xe);g($o.$$.fragment,_s),Qi=l(_s),Hs=s(_s,"P",{});var jh=r(Hs);Ji=d(jh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),jh.forEach(t),Xi=l(_s),Ks=s(_s,"UL",{});var Ph=r(Ks);Zn=s(Ph,"LI",{});var Lu=r(Zn);Yi=d(Lu,"single sequence: "),Vs=s(Lu,"CODE",{});var Nh=r(Vs);Zi=d(Nh,"X </s>"),Nh.forEach(t),Lu.forEach(t),Ph.forEach(t),_s.forEach(t),rt.forEach(t),Ia=l(o),Tt=s(o,"H2",{class:!0});var ud=r(Tt);Dt=s(ud,"A",{id:!0,class:!0,href:!0});var Oh=r(Dt);Qs=s(Oh,"SPAN",{});var Ah=r(Qs);g(qo.$$.fragment,Ah),Ah.forEach(t),Oh.forEach(t),el=l(ud),Js=s(ud,"SPAN",{});var Ih=r(Js);tl=d(Ih,"BlenderbotModel"),Ih.forEach(t),ud.forEach(t),Sa=l(o),Ue=s(o,"P",{});var Dn=r(Ue);ol=d(Dn,"See "),Xs=s(Dn,"CODE",{});var Sh=r(Xs);nl=d(Sh,"transformers.BartModel"),Sh.forEach(t),sl=d(Dn," for arguments to "),Ys=s(Dn,"EM",{});var Lh=r(Ys);rl=d(Lh,"forward"),Lh.forEach(t),al=d(Dn," and "),Zs=s(Dn,"EM",{});var Dh=r(Zs);dl=d(Dh,"generate"),Dh.forEach(t),Dn.forEach(t),La=l(o),ze=s(o,"DIV",{class:!0});var ao=r(ze);g(Eo.$$.fragment,ao),il=l(ao),Mo=s(ao,"P",{});var hd=r(Mo);ll=d(hd,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),es=s(hd,"A",{href:!0});var Gh=r(es);cl=d(Gh,"PreTrainedModel"),Gh.forEach(t),pl=d(hd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hd.forEach(t),ul=l(ao),Co=s(ao,"P",{});var md=r(Co);hl=d(md,"This model is also a PyTorch "),jo=s(md,"A",{href:!0,rel:!0});var Wh=r(jo);ml=d(Wh,"torch.nn.Module"),Wh.forEach(t),fl=d(md,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),md.forEach(t),_l=l(ao),ge=s(ao,"DIV",{class:!0});var at=r(ge);g(Po.$$.fragment,at),gl=l(at),wt=s(at,"P",{});var gs=r(wt);bl=d(gs,"The "),ts=s(gs,"A",{href:!0});var Uh=r(ts);kl=d(Uh,"BlenderbotModel"),Uh.forEach(t),vl=d(gs," forward method, overrides the "),er=s(gs,"CODE",{});var Rh=r(er);yl=d(Rh,"__call__"),Rh.forEach(t),Tl=d(gs," special method."),gs.forEach(t),wl=l(at),g(Gt.$$.fragment,at),Bl=l(at),tr=s(at,"P",{});var Hh=r(tr);zl=d(Hh,"Example:"),Hh.forEach(t),xl=l(at),g(No.$$.fragment,at),at.forEach(t),ao.forEach(t),Da=l(o),Bt=s(o,"H2",{class:!0});var fd=r(Bt);Wt=s(fd,"A",{id:!0,class:!0,href:!0});var Kh=r(Wt);or=s(Kh,"SPAN",{});var Vh=r(or);g(Oo.$$.fragment,Vh),Vh.forEach(t),Kh.forEach(t),Fl=l(fd),nr=s(fd,"SPAN",{});var Qh=r(nr);$l=d(Qh,"BlenderbotForConditionalGeneration"),Qh.forEach(t),fd.forEach(t),Ga=l(o),Re=s(o,"P",{});var Gn=r(Re);ql=d(Gn,"See "),os=s(Gn,"A",{href:!0});var Jh=r(os);El=d(Jh,"BartForConditionalGeneration"),Jh.forEach(t),Ml=d(Gn," for arguments to "),sr=s(Gn,"EM",{});var Xh=r(sr);Cl=d(Xh,"forward"),Xh.forEach(t),jl=d(Gn," and "),rr=s(Gn,"EM",{});var Yh=r(rr);Pl=d(Yh,"generate"),Yh.forEach(t),Gn.forEach(t),Wa=l(o),xe=s(o,"DIV",{class:!0});var io=r(xe);g(Ao.$$.fragment,io),Nl=l(io),Io=s(io,"P",{});var _d=r(Io);Ol=d(_d,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ns=s(_d,"A",{href:!0});var Zh=r(ns);Al=d(Zh,"PreTrainedModel"),Zh.forEach(t),Il=d(_d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_d.forEach(t),Sl=l(io),So=s(io,"P",{});var gd=r(So);Ll=d(gd,"This model is also a PyTorch "),Lo=s(gd,"A",{href:!0,rel:!0});var em=r(Lo);Dl=d(em,"torch.nn.Module"),em.forEach(t),Gl=d(gd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gd.forEach(t),Wl=l(io),X=s(io,"DIV",{class:!0});var Ee=r(X);g(Do.$$.fragment,Ee),Ul=l(Ee),zt=s(Ee,"P",{});var bs=r(zt);Rl=d(bs,"The "),ss=s(bs,"A",{href:!0});var tm=r(ss);Hl=d(tm,"BlenderbotForConditionalGeneration"),tm.forEach(t),Kl=d(bs," forward method, overrides the "),ar=s(bs,"CODE",{});var om=r(ar);Vl=d(om,"__call__"),om.forEach(t),Ql=d(bs," special method."),bs.forEach(t),Jl=l(Ee),g(Ut.$$.fragment,Ee),Xl=l(Ee),dr=s(Ee,"P",{});var nm=r(dr);Yl=d(nm,"Conversation example::"),nm.forEach(t),Zl=l(Ee),ir=s(Ee,"BLOCKQUOTE",{});var sm=r(ir);lr=s(sm,"BLOCKQUOTE",{});var rm=r(lr);cr=s(rm,"BLOCKQUOTE",{});var am=r(cr);pr=s(am,"P",{});var dm=r(pr);ec=d(dm,`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = BlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),dm.forEach(t),am.forEach(t),rm.forEach(t),sm.forEach(t),tc=l(Ee),ur=s(Ee,"BLOCKQUOTE",{});var im=r(ur);hr=s(im,"BLOCKQUOTE",{});var lm=r(hr);mr=s(lm,"BLOCKQUOTE",{});var cm=r(mr);Go=s(cm,"P",{});var bd=r(Go);oc=d(bd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),fr=s(bd,"S",{});var pm=r(fr);nc=d(pm,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),pm.forEach(t),sc=d(bd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),bd.forEach(t),cm.forEach(t),lm.forEach(t),im.forEach(t),Ee.forEach(t),io.forEach(t),Ua=l(o),xt=s(o,"H2",{class:!0});var kd=r(xt);Rt=s(kd,"A",{id:!0,class:!0,href:!0});var um=r(Rt);_r=s(um,"SPAN",{});var hm=r(_r);g(Wo.$$.fragment,hm),hm.forEach(t),um.forEach(t),rc=l(kd),gr=s(kd,"SPAN",{});var mm=r(gr);ac=d(mm,"BlenderbotForCausalLM"),mm.forEach(t),kd.forEach(t),Ra=l(o),Uo=s(o,"DIV",{class:!0});var fm=r(Uo);Ye=s(fm,"DIV",{class:!0});var ks=r(Ye);g(Ro.$$.fragment,ks),dc=l(ks),br=s(ks,"P",{});var _m=r(br);ic=d(_m,"Example:"),_m.forEach(t),lc=l(ks),g(Ho.$$.fragment,ks),ks.forEach(t),fm.forEach(t),Ha=l(o),Ft=s(o,"H2",{class:!0});var vd=r(Ft);Ht=s(vd,"A",{id:!0,class:!0,href:!0});var gm=r(Ht);kr=s(gm,"SPAN",{});var bm=r(kr);g(Ko.$$.fragment,bm),bm.forEach(t),gm.forEach(t),cc=l(vd),vr=s(vd,"SPAN",{});var km=r(vr);pc=d(km,"TFBlenderbotModel"),km.forEach(t),vd.forEach(t),Ka=l(o),ce=s(o,"DIV",{class:!0});var dt=r(ce);g(Vo.$$.fragment,dt),uc=l(dt),Qo=s(dt,"P",{});var yd=r(Qo);hc=d(yd,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rs=s(yd,"A",{href:!0});var vm=r(rs);mc=d(vm,"TFPreTrainedModel"),vm.forEach(t),fc=d(yd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yd.forEach(t),_c=l(dt),Jo=s(dt,"P",{});var Td=r(Jo);gc=d(Td,"This model is also a "),Xo=s(Td,"A",{href:!0,rel:!0});var ym=r(Xo);bc=d(ym,"tf.keras.Model"),ym.forEach(t),kc=d(Td,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Td.forEach(t),vc=l(dt),g(Kt.$$.fragment,dt),yc=l(dt),be=s(dt,"DIV",{class:!0});var it=r(be);g(Yo.$$.fragment,it),Tc=l(it),$t=s(it,"P",{});var vs=r($t);wc=d(vs,"The "),as=s(vs,"A",{href:!0});var Tm=r(as);Bc=d(Tm,"TFBlenderbotModel"),Tm.forEach(t),zc=d(vs," forward method, overrides the "),yr=s(vs,"CODE",{});var wm=r(yr);xc=d(wm,"__call__"),wm.forEach(t),Fc=d(vs," special method."),vs.forEach(t),$c=l(it),g(Vt.$$.fragment,it),qc=l(it),Tr=s(it,"P",{});var Bm=r(Tr);Ec=d(Bm,"Example:"),Bm.forEach(t),Mc=l(it),g(Zo.$$.fragment,it),it.forEach(t),dt.forEach(t),Va=l(o),qt=s(o,"H2",{class:!0});var wd=r(qt);Qt=s(wd,"A",{id:!0,class:!0,href:!0});var zm=r(Qt);wr=s(zm,"SPAN",{});var xm=r(wr);g(en.$$.fragment,xm),xm.forEach(t),zm.forEach(t),Cc=l(wd),Br=s(wd,"SPAN",{});var Fm=r(Br);jc=d(Fm,"TFBlenderbotForConditionalGeneration"),Fm.forEach(t),wd.forEach(t),Qa=l(o),pe=s(o,"DIV",{class:!0});var lt=r(pe);g(tn.$$.fragment,lt),Pc=l(lt),on=s(lt,"P",{});var Bd=r(on);Nc=d(Bd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ds=s(Bd,"A",{href:!0});var $m=r(ds);Oc=d($m,"TFPreTrainedModel"),$m.forEach(t),Ac=d(Bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd.forEach(t),Ic=l(lt),nn=s(lt,"P",{});var zd=r(nn);Sc=d(zd,"This model is also a "),sn=s(zd,"A",{href:!0,rel:!0});var qm=r(sn);Lc=d(qm,"tf.keras.Model"),qm.forEach(t),Dc=d(zd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zd.forEach(t),Gc=l(lt),g(Jt.$$.fragment,lt),Wc=l(lt),Y=s(lt,"DIV",{class:!0});var Me=r(Y);g(rn.$$.fragment,Me),Uc=l(Me),Et=s(Me,"P",{});var ys=r(Et);Rc=d(ys,"The "),is=s(ys,"A",{href:!0});var Em=r(is);Hc=d(Em,"TFBlenderbotForConditionalGeneration"),Em.forEach(t),Kc=d(ys," forward method, overrides the "),zr=s(ys,"CODE",{});var Mm=r(zr);Vc=d(Mm,"__call__"),Mm.forEach(t),Qc=d(ys," special method."),ys.forEach(t),Jc=l(Me),g(Xt.$$.fragment,Me),Xc=l(Me),xr=s(Me,"P",{});var Cm=r(xr);Yc=d(Cm,"Conversation example::"),Cm.forEach(t),Zc=l(Me),Fr=s(Me,"BLOCKQUOTE",{});var jm=r(Fr);$r=s(jm,"BLOCKQUOTE",{});var Pm=r($r);qr=s(Pm,"BLOCKQUOTE",{});var Nm=r(qr);Er=s(Nm,"P",{});var Om=r(Er);ep=d(Om,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Om.forEach(t),Nm.forEach(t),Pm.forEach(t),jm.forEach(t),tp=l(Me),Mr=s(Me,"BLOCKQUOTE",{});var Am=r(Mr);Cr=s(Am,"BLOCKQUOTE",{});var Im=r(Cr);jr=s(Im,"BLOCKQUOTE",{});var Sm=r(jr);an=s(Sm,"P",{});var xd=r(an);op=d(xd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Pr=s(xd,"S",{});var Lm=r(Pr);np=d(Lm,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Lm.forEach(t),sp=d(xd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),xd.forEach(t),Sm.forEach(t),Im.forEach(t),Am.forEach(t),Me.forEach(t),lt.forEach(t),Ja=l(o),Mt=s(o,"H2",{class:!0});var Fd=r(Mt);Yt=s(Fd,"A",{id:!0,class:!0,href:!0});var Dm=r(Yt);Nr=s(Dm,"SPAN",{});var Gm=r(Nr);g(dn.$$.fragment,Gm),Gm.forEach(t),Dm.forEach(t),rp=l(Fd),Or=s(Fd,"SPAN",{});var Wm=r(Or);ap=d(Wm,"FlaxBlenderbotModel"),Wm.forEach(t),Fd.forEach(t),Xa=l(o),I=s(o,"DIV",{class:!0});var Z=r(I);g(ln.$$.fragment,Z),dp=l(Z),cn=s(Z,"P",{});var $d=r(cn);ip=d($d,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ls=s($d,"A",{href:!0});var Um=r(ls);lp=d(Um,"FlaxPreTrainedModel"),Um.forEach(t),cp=d($d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$d.forEach(t),pp=l(Z),pn=s(Z,"P",{});var qd=r(pn);up=d(qd,`This model is also a Flax Linen
`),un=s(qd,"A",{href:!0,rel:!0});var Rm=r(un);hp=d(Rm,"flax.nn.Module"),Rm.forEach(t),mp=d(qd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),qd.forEach(t),fp=l(Z),Ar=s(Z,"P",{});var Hm=r(Ar);_p=d(Hm,"Finally, this model supports inherent JAX features such as:"),Hm.forEach(t),gp=l(Z),He=s(Z,"UL",{});var lo=r(He);Ir=s(lo,"LI",{});var Km=r(Ir);hn=s(Km,"A",{href:!0,rel:!0});var Vm=r(hn);bp=d(Vm,"Just-In-Time (JIT) compilation"),Vm.forEach(t),Km.forEach(t),kp=l(lo),Sr=s(lo,"LI",{});var Qm=r(Sr);mn=s(Qm,"A",{href:!0,rel:!0});var Jm=r(mn);vp=d(Jm,"Automatic Differentiation"),Jm.forEach(t),Qm.forEach(t),yp=l(lo),Lr=s(lo,"LI",{});var Xm=r(Lr);fn=s(Xm,"A",{href:!0,rel:!0});var Ym=r(fn);Tp=d(Ym,"Vectorization"),Ym.forEach(t),Xm.forEach(t),wp=l(lo),Dr=s(lo,"LI",{});var Zm=r(Dr);_n=s(Zm,"A",{href:!0,rel:!0});var ef=r(_n);Bp=d(ef,"Parallelization"),ef.forEach(t),Zm.forEach(t),lo.forEach(t),zp=l(Z),ke=s(Z,"DIV",{class:!0});var ct=r(ke);g(gn.$$.fragment,ct),xp=l(ct),Ct=s(ct,"P",{});var Ts=r(Ct);Fp=d(Ts,"The "),Gr=s(Ts,"CODE",{});var tf=r(Gr);$p=d(tf,"FlaxBlenderbotPreTrainedModel"),tf.forEach(t),qp=d(Ts,"forward method, overrides the "),Wr=s(Ts,"CODE",{});var of=r(Wr);Ep=d(of,"__call__"),of.forEach(t),Mp=d(Ts," special method."),Ts.forEach(t),Cp=l(ct),g(Zt.$$.fragment,ct),jp=l(ct),Ur=s(ct,"P",{});var nf=r(Ur);Pp=d(nf,"Example:"),nf.forEach(t),Np=l(ct),g(bn.$$.fragment,ct),ct.forEach(t),Op=l(Z),Ze=s(Z,"DIV",{class:!0});var ws=r(Ze);g(kn.$$.fragment,ws),Ap=l(ws),Rr=s(ws,"P",{});var sf=r(Rr);Ip=d(sf,"Example:"),sf.forEach(t),Sp=l(ws),g(vn.$$.fragment,ws),ws.forEach(t),Lp=l(Z),et=s(Z,"DIV",{class:!0});var Bs=r(et);g(yn.$$.fragment,Bs),Dp=l(Bs),Hr=s(Bs,"P",{});var rf=r(Hr);Gp=d(rf,"Example:"),rf.forEach(t),Wp=l(Bs),g(Tn.$$.fragment,Bs),Bs.forEach(t),Z.forEach(t),Ya=l(o),jt=s(o,"H2",{class:!0});var Ed=r(jt);eo=s(Ed,"A",{id:!0,class:!0,href:!0});var af=r(eo);Kr=s(af,"SPAN",{});var df=r(Kr);g(wn.$$.fragment,df),df.forEach(t),af.forEach(t),Up=l(Ed),Vr=s(Ed,"SPAN",{});var lf=r(Vr);Rp=d(lf,"FlaxBlenderbotForConditionalGeneration"),lf.forEach(t),Ed.forEach(t),Za=l(o),S=s(o,"DIV",{class:!0});var ee=r(S);g(Bn.$$.fragment,ee),Hp=l(ee),zn=s(ee,"P",{});var Md=r(zn);Kp=d(Md,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),cs=s(Md,"A",{href:!0});var cf=r(cs);Vp=d(cf,"FlaxPreTrainedModel"),cf.forEach(t),Qp=d(Md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Md.forEach(t),Jp=l(ee),xn=s(ee,"P",{});var Cd=r(xn);Xp=d(Cd,`This model is also a Flax Linen
`),Fn=s(Cd,"A",{href:!0,rel:!0});var pf=r(Fn);Yp=d(pf,"flax.nn.Module"),pf.forEach(t),Zp=d(Cd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Cd.forEach(t),eu=l(ee),Qr=s(ee,"P",{});var uf=r(Qr);tu=d(uf,"Finally, this model supports inherent JAX features such as:"),uf.forEach(t),ou=l(ee),Ke=s(ee,"UL",{});var co=r(Ke);Jr=s(co,"LI",{});var hf=r(Jr);$n=s(hf,"A",{href:!0,rel:!0});var mf=r($n);nu=d(mf,"Just-In-Time (JIT) compilation"),mf.forEach(t),hf.forEach(t),su=l(co),Xr=s(co,"LI",{});var ff=r(Xr);qn=s(ff,"A",{href:!0,rel:!0});var _f=r(qn);ru=d(_f,"Automatic Differentiation"),_f.forEach(t),ff.forEach(t),au=l(co),Yr=s(co,"LI",{});var gf=r(Yr);En=s(gf,"A",{href:!0,rel:!0});var bf=r(En);du=d(bf,"Vectorization"),bf.forEach(t),gf.forEach(t),iu=l(co),Zr=s(co,"LI",{});var kf=r(Zr);Mn=s(kf,"A",{href:!0,rel:!0});var vf=r(Mn);lu=d(vf,"Parallelization"),vf.forEach(t),kf.forEach(t),co.forEach(t),cu=l(ee),L=s(ee,"DIV",{class:!0});var te=r(L);g(Cn.$$.fragment,te),pu=l(te),Pt=s(te,"P",{});var zs=r(Pt);uu=d(zs,"The "),ea=s(zs,"CODE",{});var yf=r(ea);hu=d(yf,"FlaxBlenderbotPreTrainedModel"),yf.forEach(t),mu=d(zs,"forward method, overrides the "),ta=s(zs,"CODE",{});var Tf=r(ta);fu=d(Tf,"__call__"),Tf.forEach(t),_u=d(zs," special method."),zs.forEach(t),gu=l(te),g(to.$$.fragment,te),bu=l(te),oa=s(te,"P",{});var wf=r(oa);ku=d(wf,"Conversation example::"),wf.forEach(t),vu=l(te),na=s(te,"BLOCKQUOTE",{});var Bf=r(na);sa=s(Bf,"BLOCKQUOTE",{});var zf=r(sa);ra=s(zf,"BLOCKQUOTE",{});var xf=r(ra);aa=s(xf,"P",{});var Ff=r(aa);yu=d(Ff,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Ff.forEach(t),xf.forEach(t),zf.forEach(t),Bf.forEach(t),Tu=l(te),da=s(te,"BLOCKQUOTE",{});var $f=r(da);ia=s($f,"BLOCKQUOTE",{});var qf=r(ia);la=s(qf,"BLOCKQUOTE",{});var Ef=r(la);ca=s(Ef,"P",{});var Mf=r(ca);wu=d(Mf,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Mf.forEach(t),Ef.forEach(t),qf.forEach(t),$f.forEach(t),Bu=l(te),pa=s(te,"BLOCKQUOTE",{});var Cf=r(pa);ua=s(Cf,"BLOCKQUOTE",{});var jf=r(ua);ha=s(jf,"BLOCKQUOTE",{});var Pf=r(ha);ma=s(Pf,"P",{});var Nf=r(ma);zu=d(Nf,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Nf.forEach(t),Pf.forEach(t),jf.forEach(t),Cf.forEach(t),xu=l(te),fa=s(te,"BLOCKQUOTE",{});var Of=r(fa);_a=s(Of,"BLOCKQUOTE",{});var Af=r(_a);jn=s(Af,"BLOCKQUOTE",{});var jd=r(jn);oo=s(jd,"H1",{class:!0});var Pd=r(oo);no=s(Pd,"A",{id:!0,class:!0,href:!0});var If=r(no);ga=s(If,"SPAN",{});var Sf=r(ga);g(Pn.$$.fragment,Sf),Sf.forEach(t),If.forEach(t),Fu=l(Pd),ba=s(Pd,"SPAN",{});var Lf=r(ba);$u=d(Lf,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),Lf.forEach(t),Pd.forEach(t),qu=l(jd),ka=s(jd,"P",{});var Df=r(ka);Eu=d(Df,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Df.forEach(t),jd.forEach(t),Af.forEach(t),Of.forEach(t),te.forEach(t),Mu=l(ee),tt=s(ee,"DIV",{class:!0});var xs=r(tt);g(Nn.$$.fragment,xs),Cu=l(xs),va=s(xs,"P",{});var Gf=r(va);ju=d(Gf,"Example:"),Gf.forEach(t),Pu=l(xs),g(On.$$.fragment,xs),xs.forEach(t),Nu=l(ee),ot=s(ee,"DIV",{class:!0});var Fs=r(ot);g(An.$$.fragment,Fs),Ou=l(Fs),ya=s(Fs,"P",{});var Wf=r(ya);Au=d(Wf,"Example:"),Wf.forEach(t),Iu=l(Fs),g(In.$$.fragment,Fs),Fs.forEach(t),ee.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(n_)),c(T,"id","blenderbot"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot"),c(f,"class","relative group"),c(ne,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ne,"rel","nofollow"),c(P,"id","overview"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#overview"),c(G,"class","relative group"),c(W,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(W,"rel","nofollow"),c(U,"href","https://huggingface.co/sshleifer"),c(U,"rel","nofollow"),c($,"href","https://github.com/facebookresearch/ParlAI"),c($,"rel","nofollow"),c(_e,"id","implementation-notes"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#implementation-notes"),c(j,"class","relative group"),c(ae,"href","https://arxiv.org/pdf/1706.03762.pdf"),c(ae,"rel","nofollow"),c(ho,"href","https://huggingface.co/models?search=blenderbot"),c(ho,"rel","nofollow"),c(Wn,"href","blenderbot-small"),c(Nt,"id","usage"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#usage"),c(_t,"class","relative group"),c(Ot,"id","transformers.BlenderbotConfig"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.BlenderbotConfig"),c(gt,"class","relative group"),c(Rn,"href","/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(bo,"href","https://huggingface.co/facebook/blenderbot-3B"),c(bo,"rel","nofollow"),c(Hn,"href","/docs/transformers/doc-build-test/en/main_classes/configuration#transformers.PretrainedConfig"),c(Kn,"href","/docs/transformers/doc-build-test/en/main_classes/configuration#transformers.PretrainedConfig"),c(de,"class","docstring"),c(At,"id","transformers.BlenderbotTokenizer"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.BlenderbotTokenizer"),c(vt,"class","relative group"),c(Vn,"href","/docs/transformers/doc-build-test/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qn,"href","/docs/transformers/doc-build-test/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Je,"class","docstring"),c(ie,"class","docstring"),c(St,"id","transformers.BlenderbotTokenizerFast"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.BlenderbotTokenizerFast"),c(yt,"class","relative group"),c(Xn,"href","/docs/transformers/doc-build-test/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Yn,"href","/docs/transformers/doc-build-test/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Xe,"class","docstring"),c(le,"class","docstring"),c(Dt,"id","transformers.BlenderbotModel"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.BlenderbotModel"),c(Tt,"class","relative group"),c(es,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),c(jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(jo,"rel","nofollow"),c(ts,"href","/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(ge,"class","docstring"),c(ze,"class","docstring"),c(Wt,"id","transformers.BlenderbotForConditionalGeneration"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#transformers.BlenderbotForConditionalGeneration"),c(Bt,"class","relative group"),c(os,"href","/docs/transformers/doc-build-test/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(ns,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),c(Lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Lo,"rel","nofollow"),c(ss,"href","/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(X,"class","docstring"),c(xe,"class","docstring"),c(Rt,"id","transformers.BlenderbotForCausalLM"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.BlenderbotForCausalLM"),c(xt,"class","relative group"),c(Ye,"class","docstring"),c(Uo,"class","docstring"),c(Ht,"id","transformers.TFBlenderbotModel"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.TFBlenderbotModel"),c(Ft,"class","relative group"),c(rs,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.TFPreTrainedModel"),c(Xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Xo,"rel","nofollow"),c(as,"href","/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),c(be,"class","docstring"),c(ce,"class","docstring"),c(Qt,"id","transformers.TFBlenderbotForConditionalGeneration"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.TFBlenderbotForConditionalGeneration"),c(qt,"class","relative group"),c(ds,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.TFPreTrainedModel"),c(sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(sn,"rel","nofollow"),c(is,"href","/docs/transformers/doc-build-test/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),c(Y,"class","docstring"),c(pe,"class","docstring"),c(Yt,"id","transformers.FlaxBlenderbotModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.FlaxBlenderbotModel"),c(Mt,"class","relative group"),c(ls,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(un,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(un,"rel","nofollow"),c(hn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(hn,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(_n,"rel","nofollow"),c(ke,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(I,"class","docstring"),c(eo,"id","transformers.FlaxBlenderbotForConditionalGeneration"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),c(jt,"class","relative group"),c(cs,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Fn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Fn,"rel","nofollow"),c($n,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c($n,"rel","nofollow"),c(qn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(qn,"rel","nofollow"),c(En,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(En,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Mn,"rel","nofollow"),c(no,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(oo,"class","relative group"),c(L,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(S,"class","docstring")},m(o,u){e(document.head,h),p(o,x,u),p(o,f,u),e(f,T),e(T,z),b(B,z,null),e(f,w),e(f,F),e(F,Ce),p(o,he,u),p(o,q,u),e(q,ve),e(ve,oe),e(q,je),e(q,ne),e(ne,se),e(q,Pe),p(o,Fe,u),p(o,G,u),e(G,P),e(P,ye),b(R,ye,null),e(G,E),e(G,C),e(C,Ne),p(o,Q,u),p(o,J,u),e(J,Oe),e(J,W),e(W,Ae),e(J,Ie),p(o,N,u),p(o,me,u),e(me,re),p(o,$e,u),p(o,fe,u),e(fe,H),e(H,Se),p(o,qe,u),p(o,M,u),e(M,Le),e(M,U),e(U,De),e(M,m),e(M,$),e($,Te),e(M,ut),p(o,Ve,u),p(o,j,u),e(j,_e),e(_e,Ge),b(we,Ge,null),e(j,K),e(j,V),e(V,ht),p(o,Qe,u),p(o,O,u),e(O,Be),e(Be,mt),e(Be,ae),e(ae,ft),e(Be,Nd),e(O,Od),e(O,uo),e(uo,Ad),e(uo,ho),e(ho,Id),e(uo,Sd),e(O,Ld),e(O,We),e(We,Dd),e(We,$s),e($s,Gd),e(We,Wd),e(We,qs),e(qs,Ud),e(We,Rd),e(We,Wn),e(Wn,Hd),e(We,Kd),p(o,qa,u),p(o,_t,u),e(_t,Nt),e(Nt,Es),b(mo,Es,null),e(_t,Vd),e(_t,Ms),e(Ms,Qd),p(o,Ea,u),p(o,Un,u),e(Un,Jd),p(o,Ma,u),b(fo,o,u),p(o,Ca,u),p(o,gt,u),e(gt,Ot),e(Ot,Cs),b(_o,Cs,null),e(gt,Xd),e(gt,js),e(js,Yd),p(o,ja,u),p(o,de,u),b(go,de,null),e(de,Zd),e(de,bt),e(bt,ei),e(bt,Rn),e(Rn,ti),e(bt,oi),e(bt,bo),e(bo,ni),e(bt,si),e(de,ri),e(de,kt),e(kt,ai),e(kt,Hn),e(Hn,di),e(kt,ii),e(kt,Kn),e(Kn,li),e(kt,ci),e(de,pi),e(de,Ps),e(Ps,ui),e(de,hi),b(ko,de,null),p(o,Pa,u),p(o,vt,u),e(vt,At),e(At,Ns),b(vo,Ns,null),e(vt,mi),e(vt,Os),e(Os,fi),p(o,Na,u),p(o,ie,u),b(yo,ie,null),e(ie,_i),e(ie,As),e(As,gi),e(ie,bi),e(ie,It),e(It,Is),e(Is,ki),e(It,vi),e(It,Vn),e(Vn,yi),e(It,Ti),e(ie,wi),e(ie,To),e(To,Bi),e(To,Qn),e(Qn,zi),e(To,xi),e(ie,Fi),e(ie,Je),b(wo,Je,null),e(Je,$i),e(Je,Ss),e(Ss,qi),e(Je,Ei),e(Je,Ls),e(Ls,Jn),e(Jn,Mi),e(Jn,Ds),e(Ds,Ci),p(o,Oa,u),p(o,yt,u),e(yt,St),e(St,Gs),b(Bo,Gs,null),e(yt,ji),e(yt,Ws),e(Ws,Pi),p(o,Aa,u),p(o,le,u),b(zo,le,null),e(le,Ni),e(le,xo),e(xo,Oi),e(xo,Us),e(Us,Ai),e(xo,Ii),e(le,Si),e(le,Lt),e(Lt,Rs),e(Rs,Li),e(Lt,Di),e(Lt,Xn),e(Xn,Gi),e(Lt,Wi),e(le,Ui),e(le,Fo),e(Fo,Ri),e(Fo,Yn),e(Yn,Hi),e(Fo,Ki),e(le,Vi),e(le,Xe),b($o,Xe,null),e(Xe,Qi),e(Xe,Hs),e(Hs,Ji),e(Xe,Xi),e(Xe,Ks),e(Ks,Zn),e(Zn,Yi),e(Zn,Vs),e(Vs,Zi),p(o,Ia,u),p(o,Tt,u),e(Tt,Dt),e(Dt,Qs),b(qo,Qs,null),e(Tt,el),e(Tt,Js),e(Js,tl),p(o,Sa,u),p(o,Ue,u),e(Ue,ol),e(Ue,Xs),e(Xs,nl),e(Ue,sl),e(Ue,Ys),e(Ys,rl),e(Ue,al),e(Ue,Zs),e(Zs,dl),p(o,La,u),p(o,ze,u),b(Eo,ze,null),e(ze,il),e(ze,Mo),e(Mo,ll),e(Mo,es),e(es,cl),e(Mo,pl),e(ze,ul),e(ze,Co),e(Co,hl),e(Co,jo),e(jo,ml),e(Co,fl),e(ze,_l),e(ze,ge),b(Po,ge,null),e(ge,gl),e(ge,wt),e(wt,bl),e(wt,ts),e(ts,kl),e(wt,vl),e(wt,er),e(er,yl),e(wt,Tl),e(ge,wl),b(Gt,ge,null),e(ge,Bl),e(ge,tr),e(tr,zl),e(ge,xl),b(No,ge,null),p(o,Da,u),p(o,Bt,u),e(Bt,Wt),e(Wt,or),b(Oo,or,null),e(Bt,Fl),e(Bt,nr),e(nr,$l),p(o,Ga,u),p(o,Re,u),e(Re,ql),e(Re,os),e(os,El),e(Re,Ml),e(Re,sr),e(sr,Cl),e(Re,jl),e(Re,rr),e(rr,Pl),p(o,Wa,u),p(o,xe,u),b(Ao,xe,null),e(xe,Nl),e(xe,Io),e(Io,Ol),e(Io,ns),e(ns,Al),e(Io,Il),e(xe,Sl),e(xe,So),e(So,Ll),e(So,Lo),e(Lo,Dl),e(So,Gl),e(xe,Wl),e(xe,X),b(Do,X,null),e(X,Ul),e(X,zt),e(zt,Rl),e(zt,ss),e(ss,Hl),e(zt,Kl),e(zt,ar),e(ar,Vl),e(zt,Ql),e(X,Jl),b(Ut,X,null),e(X,Xl),e(X,dr),e(dr,Yl),e(X,Zl),e(X,ir),e(ir,lr),e(lr,cr),e(cr,pr),e(pr,ec),e(X,tc),e(X,ur),e(ur,hr),e(hr,mr),e(mr,Go),e(Go,oc),e(Go,fr),e(fr,nc),e(Go,sc),p(o,Ua,u),p(o,xt,u),e(xt,Rt),e(Rt,_r),b(Wo,_r,null),e(xt,rc),e(xt,gr),e(gr,ac),p(o,Ra,u),p(o,Uo,u),e(Uo,Ye),b(Ro,Ye,null),e(Ye,dc),e(Ye,br),e(br,ic),e(Ye,lc),b(Ho,Ye,null),p(o,Ha,u),p(o,Ft,u),e(Ft,Ht),e(Ht,kr),b(Ko,kr,null),e(Ft,cc),e(Ft,vr),e(vr,pc),p(o,Ka,u),p(o,ce,u),b(Vo,ce,null),e(ce,uc),e(ce,Qo),e(Qo,hc),e(Qo,rs),e(rs,mc),e(Qo,fc),e(ce,_c),e(ce,Jo),e(Jo,gc),e(Jo,Xo),e(Xo,bc),e(Jo,kc),e(ce,vc),b(Kt,ce,null),e(ce,yc),e(ce,be),b(Yo,be,null),e(be,Tc),e(be,$t),e($t,wc),e($t,as),e(as,Bc),e($t,zc),e($t,yr),e(yr,xc),e($t,Fc),e(be,$c),b(Vt,be,null),e(be,qc),e(be,Tr),e(Tr,Ec),e(be,Mc),b(Zo,be,null),p(o,Va,u),p(o,qt,u),e(qt,Qt),e(Qt,wr),b(en,wr,null),e(qt,Cc),e(qt,Br),e(Br,jc),p(o,Qa,u),p(o,pe,u),b(tn,pe,null),e(pe,Pc),e(pe,on),e(on,Nc),e(on,ds),e(ds,Oc),e(on,Ac),e(pe,Ic),e(pe,nn),e(nn,Sc),e(nn,sn),e(sn,Lc),e(nn,Dc),e(pe,Gc),b(Jt,pe,null),e(pe,Wc),e(pe,Y),b(rn,Y,null),e(Y,Uc),e(Y,Et),e(Et,Rc),e(Et,is),e(is,Hc),e(Et,Kc),e(Et,zr),e(zr,Vc),e(Et,Qc),e(Y,Jc),b(Xt,Y,null),e(Y,Xc),e(Y,xr),e(xr,Yc),e(Y,Zc),e(Y,Fr),e(Fr,$r),e($r,qr),e(qr,Er),e(Er,ep),e(Y,tp),e(Y,Mr),e(Mr,Cr),e(Cr,jr),e(jr,an),e(an,op),e(an,Pr),e(Pr,np),e(an,sp),p(o,Ja,u),p(o,Mt,u),e(Mt,Yt),e(Yt,Nr),b(dn,Nr,null),e(Mt,rp),e(Mt,Or),e(Or,ap),p(o,Xa,u),p(o,I,u),b(ln,I,null),e(I,dp),e(I,cn),e(cn,ip),e(cn,ls),e(ls,lp),e(cn,cp),e(I,pp),e(I,pn),e(pn,up),e(pn,un),e(un,hp),e(pn,mp),e(I,fp),e(I,Ar),e(Ar,_p),e(I,gp),e(I,He),e(He,Ir),e(Ir,hn),e(hn,bp),e(He,kp),e(He,Sr),e(Sr,mn),e(mn,vp),e(He,yp),e(He,Lr),e(Lr,fn),e(fn,Tp),e(He,wp),e(He,Dr),e(Dr,_n),e(_n,Bp),e(I,zp),e(I,ke),b(gn,ke,null),e(ke,xp),e(ke,Ct),e(Ct,Fp),e(Ct,Gr),e(Gr,$p),e(Ct,qp),e(Ct,Wr),e(Wr,Ep),e(Ct,Mp),e(ke,Cp),b(Zt,ke,null),e(ke,jp),e(ke,Ur),e(Ur,Pp),e(ke,Np),b(bn,ke,null),e(I,Op),e(I,Ze),b(kn,Ze,null),e(Ze,Ap),e(Ze,Rr),e(Rr,Ip),e(Ze,Sp),b(vn,Ze,null),e(I,Lp),e(I,et),b(yn,et,null),e(et,Dp),e(et,Hr),e(Hr,Gp),e(et,Wp),b(Tn,et,null),p(o,Ya,u),p(o,jt,u),e(jt,eo),e(eo,Kr),b(wn,Kr,null),e(jt,Up),e(jt,Vr),e(Vr,Rp),p(o,Za,u),p(o,S,u),b(Bn,S,null),e(S,Hp),e(S,zn),e(zn,Kp),e(zn,cs),e(cs,Vp),e(zn,Qp),e(S,Jp),e(S,xn),e(xn,Xp),e(xn,Fn),e(Fn,Yp),e(xn,Zp),e(S,eu),e(S,Qr),e(Qr,tu),e(S,ou),e(S,Ke),e(Ke,Jr),e(Jr,$n),e($n,nu),e(Ke,su),e(Ke,Xr),e(Xr,qn),e(qn,ru),e(Ke,au),e(Ke,Yr),e(Yr,En),e(En,du),e(Ke,iu),e(Ke,Zr),e(Zr,Mn),e(Mn,lu),e(S,cu),e(S,L),b(Cn,L,null),e(L,pu),e(L,Pt),e(Pt,uu),e(Pt,ea),e(ea,hu),e(Pt,mu),e(Pt,ta),e(ta,fu),e(Pt,_u),e(L,gu),b(to,L,null),e(L,bu),e(L,oa),e(oa,ku),e(L,vu),e(L,na),e(na,sa),e(sa,ra),e(ra,aa),e(aa,yu),e(L,Tu),e(L,da),e(da,ia),e(ia,la),e(la,ca),e(ca,wu),e(L,Bu),e(L,pa),e(pa,ua),e(ua,ha),e(ha,ma),e(ma,zu),e(L,xu),e(L,fa),e(fa,_a),e(_a,jn),e(jn,oo),e(oo,no),e(no,ga),b(Pn,ga,null),e(oo,Fu),e(oo,ba),e(ba,$u),e(jn,qu),e(jn,ka),e(ka,Eu),e(S,Mu),e(S,tt),b(Nn,tt,null),e(tt,Cu),e(tt,va),e(va,ju),e(tt,Pu),b(On,tt,null),e(S,Nu),e(S,ot),b(An,ot,null),e(ot,Ou),e(ot,ya),e(ya,Au),e(ot,Iu),b(In,ot,null),ed=!0},p(o,[u]){const Sn={};u&2&&(Sn.$$scope={dirty:u,ctx:o}),Gt.$set(Sn);const Ta={};u&2&&(Ta.$$scope={dirty:u,ctx:o}),Ut.$set(Ta);const wa={};u&2&&(wa.$$scope={dirty:u,ctx:o}),Kt.$set(wa);const Ba={};u&2&&(Ba.$$scope={dirty:u,ctx:o}),Vt.$set(Ba);const so={};u&2&&(so.$$scope={dirty:u,ctx:o}),Jt.$set(so);const za={};u&2&&(za.$$scope={dirty:u,ctx:o}),Xt.$set(za);const xa={};u&2&&(xa.$$scope={dirty:u,ctx:o}),Zt.$set(xa);const Ln={};u&2&&(Ln.$$scope={dirty:u,ctx:o}),to.$set(Ln)},i(o){ed||(k(B.$$.fragment,o),k(R.$$.fragment,o),k(we.$$.fragment,o),k(mo.$$.fragment,o),k(fo.$$.fragment,o),k(_o.$$.fragment,o),k(go.$$.fragment,o),k(ko.$$.fragment,o),k(vo.$$.fragment,o),k(yo.$$.fragment,o),k(wo.$$.fragment,o),k(Bo.$$.fragment,o),k(zo.$$.fragment,o),k($o.$$.fragment,o),k(qo.$$.fragment,o),k(Eo.$$.fragment,o),k(Po.$$.fragment,o),k(Gt.$$.fragment,o),k(No.$$.fragment,o),k(Oo.$$.fragment,o),k(Ao.$$.fragment,o),k(Do.$$.fragment,o),k(Ut.$$.fragment,o),k(Wo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ho.$$.fragment,o),k(Ko.$$.fragment,o),k(Vo.$$.fragment,o),k(Kt.$$.fragment,o),k(Yo.$$.fragment,o),k(Vt.$$.fragment,o),k(Zo.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(Jt.$$.fragment,o),k(rn.$$.fragment,o),k(Xt.$$.fragment,o),k(dn.$$.fragment,o),k(ln.$$.fragment,o),k(gn.$$.fragment,o),k(Zt.$$.fragment,o),k(bn.$$.fragment,o),k(kn.$$.fragment,o),k(vn.$$.fragment,o),k(yn.$$.fragment,o),k(Tn.$$.fragment,o),k(wn.$$.fragment,o),k(Bn.$$.fragment,o),k(Cn.$$.fragment,o),k(to.$$.fragment,o),k(Pn.$$.fragment,o),k(Nn.$$.fragment,o),k(On.$$.fragment,o),k(An.$$.fragment,o),k(In.$$.fragment,o),ed=!0)},o(o){v(B.$$.fragment,o),v(R.$$.fragment,o),v(we.$$.fragment,o),v(mo.$$.fragment,o),v(fo.$$.fragment,o),v(_o.$$.fragment,o),v(go.$$.fragment,o),v(ko.$$.fragment,o),v(vo.$$.fragment,o),v(yo.$$.fragment,o),v(wo.$$.fragment,o),v(Bo.$$.fragment,o),v(zo.$$.fragment,o),v($o.$$.fragment,o),v(qo.$$.fragment,o),v(Eo.$$.fragment,o),v(Po.$$.fragment,o),v(Gt.$$.fragment,o),v(No.$$.fragment,o),v(Oo.$$.fragment,o),v(Ao.$$.fragment,o),v(Do.$$.fragment,o),v(Ut.$$.fragment,o),v(Wo.$$.fragment,o),v(Ro.$$.fragment,o),v(Ho.$$.fragment,o),v(Ko.$$.fragment,o),v(Vo.$$.fragment,o),v(Kt.$$.fragment,o),v(Yo.$$.fragment,o),v(Vt.$$.fragment,o),v(Zo.$$.fragment,o),v(en.$$.fragment,o),v(tn.$$.fragment,o),v(Jt.$$.fragment,o),v(rn.$$.fragment,o),v(Xt.$$.fragment,o),v(dn.$$.fragment,o),v(ln.$$.fragment,o),v(gn.$$.fragment,o),v(Zt.$$.fragment,o),v(bn.$$.fragment,o),v(kn.$$.fragment,o),v(vn.$$.fragment,o),v(yn.$$.fragment,o),v(Tn.$$.fragment,o),v(wn.$$.fragment,o),v(Bn.$$.fragment,o),v(Cn.$$.fragment,o),v(to.$$.fragment,o),v(Pn.$$.fragment,o),v(Nn.$$.fragment,o),v(On.$$.fragment,o),v(An.$$.fragment,o),v(In.$$.fragment,o),ed=!1},d(o){t(h),o&&t(x),o&&t(f),y(B),o&&t(he),o&&t(q),o&&t(Fe),o&&t(G),y(R),o&&t(Q),o&&t(J),o&&t(N),o&&t(me),o&&t($e),o&&t(fe),o&&t(qe),o&&t(M),o&&t(Ve),o&&t(j),y(we),o&&t(Qe),o&&t(O),o&&t(qa),o&&t(_t),y(mo),o&&t(Ea),o&&t(Un),o&&t(Ma),y(fo,o),o&&t(Ca),o&&t(gt),y(_o),o&&t(ja),o&&t(de),y(go),y(ko),o&&t(Pa),o&&t(vt),y(vo),o&&t(Na),o&&t(ie),y(yo),y(wo),o&&t(Oa),o&&t(yt),y(Bo),o&&t(Aa),o&&t(le),y(zo),y($o),o&&t(Ia),o&&t(Tt),y(qo),o&&t(Sa),o&&t(Ue),o&&t(La),o&&t(ze),y(Eo),y(Po),y(Gt),y(No),o&&t(Da),o&&t(Bt),y(Oo),o&&t(Ga),o&&t(Re),o&&t(Wa),o&&t(xe),y(Ao),y(Do),y(Ut),o&&t(Ua),o&&t(xt),y(Wo),o&&t(Ra),o&&t(Uo),y(Ro),y(Ho),o&&t(Ha),o&&t(Ft),y(Ko),o&&t(Ka),o&&t(ce),y(Vo),y(Kt),y(Yo),y(Vt),y(Zo),o&&t(Va),o&&t(qt),y(en),o&&t(Qa),o&&t(pe),y(tn),y(Jt),y(rn),y(Xt),o&&t(Ja),o&&t(Mt),y(dn),o&&t(Xa),o&&t(I),y(ln),y(gn),y(Zt),y(bn),y(kn),y(vn),y(yn),y(Tn),o&&t(Ya),o&&t(jt),y(wn),o&&t(Za),o&&t(S),y(Bn),y(Cn),y(to),y(Pn),y(Nn),y(On),y(An),y(In)}}}const n_={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function s_(D,h,x){let{fw:f}=h;return D.$$set=T=>{"fw"in T&&x(0,f=T.fw)},[f]}class p_ extends Uf{constructor(h){super();Rf(this,h,s_,o_,Hf,{fw:0})}}export{p_ as default,n_ as metadata};
