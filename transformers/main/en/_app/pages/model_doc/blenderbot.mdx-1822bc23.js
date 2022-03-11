import{S as Bf,i as zf,s as xf,e as n,k as i,w as _,t as r,M as Ff,c as a,d as t,m as l,a as s,x as g,h as d,b as c,F as e,g as p,y as b,q as k,o as v,B as y}from"../../chunks/vendor-4833417e.js";import{T as ho}from"../../chunks/Tip-fffd6df1.js";import{D as P}from"../../chunks/Docstring-4f315ed9.js";import{C as Ke}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as pe}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function $f(D){let u,x,f,T,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=a(B,"P",{});var w=s(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var F=s(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function qf(D){let u,x,f,T,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=a(B,"P",{});var w=s(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var F=s(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Mf(D){let u,x,f,T,z,B,w,F,Ee,he,q,ve,te,Ce,oe,ne,je,Fe,G,N,ye,U,M,C,Pe,J,Q,Ne,W,Ae,Oe,A,ue,ae,$e,me,H,Ie,qe,E,Se,R,Le;return{c(){u=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),B=r("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),q=n("p"),ve=r("This second option is useful when using "),te=n("code"),Ce=r("tf.keras.Model.fit"),oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=r("model(inputs)"),Fe=r("."),G=i(),N=n("p"),ye=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),U=i(),M=n("ul"),C=n("li"),Pe=r("a single Tensor with "),J=n("code"),Q=r("input_ids"),Ne=r(" only and nothing else: "),W=n("code"),Ae=r("model(input_ids)"),Oe=i(),A=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=r("model([input_ids, attention_mask])"),me=r(" or "),H=n("code"),Ie=r("model([input_ids, attention_mask, token_type_ids])"),qe=i(),E=n("li"),Se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n("code"),Le=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=a(m,"P",{});var $=s(u);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=l(m),T=a(m,"UL",{});var Te=s(T);z=a(Te,"LI",{});var ht=s(z);B=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(Te),F=a(Te,"LI",{});var Ve=s(F);Ee=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),he=l(m),q=a(m,"P",{});var j=s(q);ve=d(j,"This second option is useful when using "),te=a(j,"CODE",{});var fe=s(te);Ce=d(fe,"tf.keras.Model.fit"),fe.forEach(t),oe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=a(j,"CODE",{});var De=s(ne);je=d(De,"model(inputs)"),De.forEach(t),Fe=d(j,"."),j.forEach(t),G=l(m),N=a(m,"P",{});var we=s(N);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),U=l(m),M=a(m,"UL",{});var K=s(M);C=a(K,"LI",{});var V=s(C);Pe=d(V,"a single Tensor with "),J=a(V,"CODE",{});var ut=s(J);Q=d(ut,"input_ids"),ut.forEach(t),Ne=d(V," only and nothing else: "),W=a(V,"CODE",{});var Je=s(W);Ae=d(Je,"model(input_ids)"),Je.forEach(t),V.forEach(t),Oe=l(K),A=a(K,"LI",{});var O=s(A);ue=d(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=a(O,"CODE",{});var Be=s(ae);$e=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),me=d(O," or "),H=a(O,"CODE",{});var mt=s(H);Ie=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),O.forEach(t),qe=l(K),E=a(K,"LI",{});var se=s(E);Se=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(se,"CODE",{});var ft=s(R);Le=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),se.forEach(t),K.forEach(t)},m(m,$){p(m,u,$),e(u,x),p(m,f,$),p(m,T,$),e(T,z),e(z,B),e(T,w),e(T,F),e(F,Ee),p(m,he,$),p(m,q,$),e(q,ve),e(q,te),e(te,Ce),e(q,oe),e(q,ne),e(ne,je),e(q,Fe),p(m,G,$),p(m,N,$),e(N,ye),p(m,U,$),p(m,M,$),e(M,C),e(C,Pe),e(C,J),e(J,Q),e(C,Ne),e(C,W),e(W,Ae),e(M,Oe),e(M,A),e(A,ue),e(A,ae),e(ae,$e),e(A,me),e(A,H),e(H,Ie),e(M,qe),e(M,E),e(E,Se),e(E,R),e(R,Le)},d(m){m&&t(u),m&&t(f),m&&t(T),m&&t(he),m&&t(q),m&&t(G),m&&t(N),m&&t(U),m&&t(M)}}}function Ef(D){let u,x,f,T,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=a(B,"P",{});var w=s(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var F=s(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Cf(D){let u,x,f,T,z,B,w,F,Ee,he,q,ve,te,Ce,oe,ne,je,Fe,G,N,ye,U,M,C,Pe,J,Q,Ne,W,Ae,Oe,A,ue,ae,$e,me,H,Ie,qe,E,Se,R,Le;return{c(){u=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),B=r("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),q=n("p"),ve=r("This second option is useful when using "),te=n("code"),Ce=r("tf.keras.Model.fit"),oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=r("model(inputs)"),Fe=r("."),G=i(),N=n("p"),ye=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),U=i(),M=n("ul"),C=n("li"),Pe=r("a single Tensor with "),J=n("code"),Q=r("input_ids"),Ne=r(" only and nothing else: "),W=n("code"),Ae=r("model(input_ids)"),Oe=i(),A=n("li"),ue=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=r("model([input_ids, attention_mask])"),me=r(" or "),H=n("code"),Ie=r("model([input_ids, attention_mask, token_type_ids])"),qe=i(),E=n("li"),Se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n("code"),Le=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=a(m,"P",{});var $=s(u);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=l(m),T=a(m,"UL",{});var Te=s(T);z=a(Te,"LI",{});var ht=s(z);B=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(Te),F=a(Te,"LI",{});var Ve=s(F);Ee=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),he=l(m),q=a(m,"P",{});var j=s(q);ve=d(j,"This second option is useful when using "),te=a(j,"CODE",{});var fe=s(te);Ce=d(fe,"tf.keras.Model.fit"),fe.forEach(t),oe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=a(j,"CODE",{});var De=s(ne);je=d(De,"model(inputs)"),De.forEach(t),Fe=d(j,"."),j.forEach(t),G=l(m),N=a(m,"P",{});var we=s(N);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),U=l(m),M=a(m,"UL",{});var K=s(M);C=a(K,"LI",{});var V=s(C);Pe=d(V,"a single Tensor with "),J=a(V,"CODE",{});var ut=s(J);Q=d(ut,"input_ids"),ut.forEach(t),Ne=d(V," only and nothing else: "),W=a(V,"CODE",{});var Je=s(W);Ae=d(Je,"model(input_ids)"),Je.forEach(t),V.forEach(t),Oe=l(K),A=a(K,"LI",{});var O=s(A);ue=d(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=a(O,"CODE",{});var Be=s(ae);$e=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),me=d(O," or "),H=a(O,"CODE",{});var mt=s(H);Ie=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),O.forEach(t),qe=l(K),E=a(K,"LI",{});var se=s(E);Se=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(se,"CODE",{});var ft=s(R);Le=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),se.forEach(t),K.forEach(t)},m(m,$){p(m,u,$),e(u,x),p(m,f,$),p(m,T,$),e(T,z),e(z,B),e(T,w),e(T,F),e(F,Ee),p(m,he,$),p(m,q,$),e(q,ve),e(q,te),e(te,Ce),e(q,oe),e(q,ne),e(ne,je),e(q,Fe),p(m,G,$),p(m,N,$),e(N,ye),p(m,U,$),p(m,M,$),e(M,C),e(C,Pe),e(C,J),e(J,Q),e(C,Ne),e(C,W),e(W,Ae),e(M,Oe),e(M,A),e(A,ue),e(A,ae),e(ae,$e),e(A,me),e(A,H),e(H,Ie),e(M,qe),e(M,E),e(E,Se),e(E,R),e(R,Le)},d(m){m&&t(u),m&&t(f),m&&t(T),m&&t(he),m&&t(q),m&&t(G),m&&t(N),m&&t(U),m&&t(M)}}}function jf(D){let u,x,f,T,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=a(B,"P",{});var w=s(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var F=s(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Pf(D){let u,x,f,T,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=a(B,"P",{});var w=s(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var F=s(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Nf(D){let u,x,f,T,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=a(B,"P",{});var w=s(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var F=s(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Af(D){let u,x,f,T,z,B,w,F,Ee,he,q,ve,te,Ce,oe,ne,je,Fe,G,N,ye,U,M,C,Pe,J,Q,Ne,W,Ae,Oe,A,ue,ae,$e,me,H,Ie,qe,E,Se,R,Le,m,$,Te,ht,Ve,j,fe,De,we,K,V,ut,Je,O,Be,mt,se,ft,$d,qd,uo,Md,mo,Ed,Cd,jd,Ge,Pd,qa,Nd,Ad,Ma,Od,Id,Rn,Sd,Ld,Tr,_t,At,Ea,fo,Dd,Ca,Gd,wr,Un,Wd,Br,_o,zr,gt,Ot,ja,go,Rd,Pa,Ud,xr,re,bo,Hd,bt,Kd,Hn,Vd,Jd,ko,Qd,Xd,Yd,kt,Zd,Kn,ei,ti,Vn,oi,ni,ai,Na,si,ri,vo,Fr,vt,It,Aa,yo,di,Oa,ii,$r,de,To,li,Ia,ci,pi,St,Sa,hi,ui,Jn,mi,fi,_i,wo,gi,Qn,bi,ki,vi,Qe,Bo,yi,La,Ti,wi,Da,Xn,Bi,Ga,zi,qr,yt,Lt,Wa,zo,xi,Ra,Fi,Mr,ie,xo,$i,Fo,qi,Ua,Mi,Ei,Ci,Dt,Ha,ji,Pi,Yn,Ni,Ai,Oi,$o,Ii,Zn,Si,Li,Di,Xe,qo,Gi,Ka,Wi,Ri,Va,ea,Ui,Ja,Hi,Er,Tt,Gt,Qa,Mo,Ki,Xa,Vi,Cr,We,Ji,Ya,Qi,Xi,Za,Yi,Zi,es,el,jr,ze,Eo,tl,Co,ol,ta,nl,al,sl,jo,rl,Po,dl,il,ll,_e,No,cl,wt,pl,oa,hl,ul,ts,ml,fl,_l,Wt,gl,os,bl,kl,Ao,Pr,Bt,Rt,ns,Oo,vl,as,yl,Nr,Re,Tl,na,wl,Bl,ss,zl,xl,rs,Fl,Ar,xe,Io,$l,So,ql,aa,Ml,El,Cl,Lo,jl,Do,Pl,Nl,Al,ge,Go,Ol,zt,Il,sa,Sl,Ll,ds,Dl,Gl,Wl,Ut,Rl,is,Ul,Hl,Wo,Or,xt,Ht,ls,Ro,Kl,cs,Vl,Ir,Ft,Uo,Jl,Ye,Ho,Ql,ps,Xl,Yl,Ko,Sr,$t,Kt,hs,Vo,Zl,us,ec,Lr,le,Jo,tc,Qo,oc,ra,nc,ac,sc,Xo,rc,Yo,dc,ic,lc,Vt,cc,be,Zo,pc,qt,hc,da,uc,mc,ms,fc,_c,gc,Jt,bc,fs,kc,vc,en,Dr,Mt,Qt,_s,tn,yc,gs,Tc,Gr,ce,on,wc,nn,Bc,ia,zc,xc,Fc,an,$c,sn,qc,Mc,Ec,Xt,Cc,X,rn,jc,Et,Pc,la,Nc,Ac,bs,Oc,Ic,Sc,Yt,Lc,ks,Dc,Gc,vs,ys,Ts,ws,Wc,Rc,Bs,zs,xs,dn,Uc,Fs,Hc,Kc,Wr,Ct,Zt,$s,ln,Vc,qs,Jc,Rr,I,cn,Qc,pn,Xc,ca,Yc,Zc,ep,hn,tp,un,op,np,ap,Ms,sp,rp,Ue,Es,mn,dp,ip,Cs,fn,lp,cp,js,_n,pp,hp,Ps,gn,up,mp,ke,bn,fp,jt,_p,Ns,gp,bp,As,kp,vp,yp,eo,Tp,Os,wp,Bp,kn,zp,Ze,vn,xp,Is,Fp,$p,yn,qp,et,Tn,Mp,Ss,Ep,Cp,wn,Ur,Pt,to,Ls,Bn,jp,Ds,Pp,Hr,S,zn,Np,xn,Ap,pa,Op,Ip,Sp,Fn,Lp,$n,Dp,Gp,Wp,Gs,Rp,Up,He,Ws,qn,Hp,Kp,Rs,Mn,Vp,Jp,Us,En,Qp,Xp,Hs,Cn,Yp,Zp,L,jn,eh,Nt,th,Ks,oh,nh,Vs,ah,sh,rh,oo,dh,Js,ih,lh,Qs,Xs,Ys,Zs,ch,ph,er,tr,or,nr,hh,uh,ar,sr,rr,dr,mh,fh,ir,lr,Pn,no,ao,cr,Nn,_h,pr,gh,bh,hr,kh,vh,tt,An,yh,ur,Th,wh,On,Bh,ot,In,zh,mr,xh,Fh,Sn,Kr;return B=new pe({}),U=new pe({}),we=new pe({}),fo=new pe({}),_o=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),vo=new Ke({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),yo=new pe({}),To=new P({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),Bo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
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
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),No=new P({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1118",parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Wt=new ho({props:{$$slots:{default:[$f]},$$scope:{ctx:D}}}),Ao=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">1280</span>]`}}),Oo=new pe({}),Io=new P({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1216",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Go=new P({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1273",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ut=new ho({props:{$$slots:{default:[qf]},$$scope:{ctx:D}}}),Wo=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
Bot:   That&#x27;s too bad. Have you tried encouraging them to change their eating habits?</span>`}}),Ro=new pe({}),Uo=new P({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1409"}}),Ho=new P({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1440",parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<span class="hljs-literal">True</span>`}}),Vo=new pe({}),Jo=new P({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1166",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vt=new ho({props:{$$slots:{default:[Mf]},$$scope:{ctx:D}}}),Zo=new P({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1191",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tn=new pe({}),on=new P({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1286",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xt=new ho({props:{$$slots:{default:[Cf]},$$scope:{ctx:D}}}),rn=new P({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1332",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
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
`}}),Yt=new ho({props:{$$slots:{default:[jf]},$$scope:{ctx:D}}}),ln=new pe({}),cn=new P({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1193",parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1128",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L949",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),yn=new Ke({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Tn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1012",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Bn=new pe({}),zn=new P({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1280",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1128",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),oo=new ho({props:{$$slots:{default:[Nf]},$$scope:{ctx:D}}}),Nn=new pe({}),An=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L949",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),On=new Ke({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),In=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1284",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),Sn=new Ke({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),x=i(),f=n("h1"),T=n("a"),z=n("span"),_(B.$$.fragment),w=i(),F=n("span"),Ee=r("Blenderbot"),he=i(),q=n("p"),ve=n("strong"),te=r("DISCLAIMER:"),Ce=r(" If you see something strange, file a "),oe=n("a"),ne=r("Github Issue"),je=r(" ."),Fe=i(),G=n("h2"),N=n("a"),ye=n("span"),_(U.$$.fragment),M=i(),C=n("span"),Pe=r("Overview"),J=i(),Q=n("p"),Ne=r("The Blender chatbot model was proposed in "),W=n("a"),Ae=r("Recipes for building an open-domain chatbot"),Oe=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),A=i(),ue=n("p"),ae=r("The abstract of the paper is the following:"),$e=i(),me=n("p"),H=n("em"),Ie=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),qe=i(),E=n("p"),Se=r("This model was contributed by "),R=n("a"),Le=r("sshleifer"),m=r(". The authors\u2019 code can be found "),$=n("a"),Te=r("here"),ht=r(" ."),Ve=i(),j=n("h2"),fe=n("a"),De=n("span"),_(we.$$.fragment),K=i(),V=n("span"),ut=r("Implementation Notes"),Je=i(),O=n("ul"),Be=n("li"),mt=r("Blenderbot uses a standard "),se=n("a"),ft=r("seq2seq model transformer"),$d=r(" based architecture."),qd=i(),uo=n("li"),Md=r("Available checkpoints can be found in the "),mo=n("a"),Ed=r("model hub"),Cd=r("."),jd=i(),Ge=n("li"),Pd=r("This is the "),qa=n("em"),Nd=r("default"),Ad=r(` Blenderbot model class. However, some smaller checkpoints, such as
`),Ma=n("code"),Od=r("facebook/blenderbot_small_90M"),Id=r(`, have a different architecture and consequently should be used with
`),Rn=n("a"),Sd=r("BlenderbotSmall"),Ld=r("."),Tr=i(),_t=n("h2"),At=n("a"),Ea=n("span"),_(fo.$$.fragment),Dd=i(),Ca=n("span"),Gd=r("Usage"),wr=i(),Un=n("p"),Wd=r("Here is an example of model usage:"),Br=i(),_(_o.$$.fragment),zr=i(),gt=n("h2"),Ot=n("a"),ja=n("span"),_(go.$$.fragment),Rd=i(),Pa=n("span"),Ud=r("BlenderbotConfig"),xr=i(),re=n("div"),_(bo.$$.fragment),Hd=i(),bt=n("p"),Kd=r("This is the configuration class to store the configuration of a "),Hn=n("a"),Vd=r("BlenderbotModel"),Jd=r(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),ko=n("a"),Qd=r("facebook/blenderbot-3B"),Xd=r(" architecture."),Yd=i(),kt=n("p"),Zd=r("Configuration objects inherit from "),Kn=n("a"),ei=r("PretrainedConfig"),ti=r(` and can be used to control the model outputs. Read the
documentation from `),Vn=n("a"),oi=r("PretrainedConfig"),ni=r(" for more information."),ai=i(),Na=n("p"),si=r("Example:"),ri=i(),_(vo.$$.fragment),Fr=i(),vt=n("h2"),It=n("a"),Aa=n("span"),_(yo.$$.fragment),di=i(),Oa=n("span"),ii=r("BlenderbotTokenizer"),$r=i(),de=n("div"),_(To.$$.fragment),li=i(),Ia=n("p"),ci=r("Construct a Blenderbot tokenizer."),pi=i(),St=n("p"),Sa=n("code"),hi=r("Blenderbot"),ui=r(" is nearly identical to "),Jn=n("a"),mi=r("RobertaTokenizer"),fi=r(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),_i=i(),wo=n("p"),gi=r("Refer to superclass "),Qn=n("a"),bi=r("RobertaTokenizer"),ki=r(" for usage examples and documentation concerning parameters."),vi=i(),Qe=n("div"),_(Bo.$$.fragment),yi=i(),La=n("p"),Ti=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),wi=i(),Da=n("ul"),Xn=n("li"),Bi=r("single sequence: "),Ga=n("code"),zi=r("X </s>"),qr=i(),yt=n("h2"),Lt=n("a"),Wa=n("span"),_(zo.$$.fragment),xi=i(),Ra=n("span"),Fi=r("BlenderbotTokenizerFast"),Mr=i(),ie=n("div"),_(xo.$$.fragment),$i=i(),Fo=n("p"),qi=r("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ua=n("em"),Mi=r("tokenizers"),Ei=r(" library)."),Ci=i(),Dt=n("p"),Ha=n("code"),ji=r("BlenderbotFast"),Pi=r(" is nearly identical to "),Yn=n("a"),Ni=r("RobertaTokenizerFast"),Ai=r(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Oi=i(),$o=n("p"),Ii=r("Refer to superclass "),Zn=n("a"),Si=r("RobertaTokenizerFast"),Li=r(" for usage examples and documentation concerning parameters."),Di=i(),Xe=n("div"),_(qo.$$.fragment),Gi=i(),Ka=n("p"),Wi=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ri=i(),Va=n("ul"),ea=n("li"),Ui=r("single sequence: "),Ja=n("code"),Hi=r("X </s>"),Er=i(),Tt=n("h2"),Gt=n("a"),Qa=n("span"),_(Mo.$$.fragment),Ki=i(),Xa=n("span"),Vi=r("BlenderbotModel"),Cr=i(),We=n("p"),Ji=r("See "),Ya=n("code"),Qi=r("transformers.BartModel"),Xi=r(" for arguments to "),Za=n("em"),Yi=r("forward"),Zi=r(" and "),es=n("em"),el=r("generate"),jr=i(),ze=n("div"),_(Eo.$$.fragment),tl=i(),Co=n("p"),ol=r(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ta=n("a"),nl=r("PreTrainedModel"),al=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sl=i(),jo=n("p"),rl=r("This model is also a PyTorch "),Po=n("a"),dl=r("torch.nn.Module"),il=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ll=i(),_e=n("div"),_(No.$$.fragment),cl=i(),wt=n("p"),pl=r("The "),oa=n("a"),hl=r("BlenderbotModel"),ul=r(" forward method, overrides the "),ts=n("code"),ml=r("__call__"),fl=r(" special method."),_l=i(),_(Wt.$$.fragment),gl=i(),os=n("p"),bl=r("Example:"),kl=i(),_(Ao.$$.fragment),Pr=i(),Bt=n("h2"),Rt=n("a"),ns=n("span"),_(Oo.$$.fragment),vl=i(),as=n("span"),yl=r("BlenderbotForConditionalGeneration"),Nr=i(),Re=n("p"),Tl=r("See "),na=n("a"),wl=r("BartForConditionalGeneration"),Bl=r(" for arguments to "),ss=n("em"),zl=r("forward"),xl=r(" and "),rs=n("em"),Fl=r("generate"),Ar=i(),xe=n("div"),_(Io.$$.fragment),$l=i(),So=n("p"),ql=r(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),aa=n("a"),Ml=r("PreTrainedModel"),El=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cl=i(),Lo=n("p"),jl=r("This model is also a PyTorch "),Do=n("a"),Pl=r("torch.nn.Module"),Nl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Al=i(),ge=n("div"),_(Go.$$.fragment),Ol=i(),zt=n("p"),Il=r("The "),sa=n("a"),Sl=r("BlenderbotForConditionalGeneration"),Ll=r(" forward method, overrides the "),ds=n("code"),Dl=r("__call__"),Gl=r(" special method."),Wl=i(),_(Ut.$$.fragment),Rl=i(),is=n("p"),Ul=r("Conversation example:"),Hl=i(),_(Wo.$$.fragment),Or=i(),xt=n("h2"),Ht=n("a"),ls=n("span"),_(Ro.$$.fragment),Kl=i(),cs=n("span"),Vl=r("BlenderbotForCausalLM"),Ir=i(),Ft=n("div"),_(Uo.$$.fragment),Jl=i(),Ye=n("div"),_(Ho.$$.fragment),Ql=i(),ps=n("p"),Xl=r("Example:"),Yl=i(),_(Ko.$$.fragment),Sr=i(),$t=n("h2"),Kt=n("a"),hs=n("span"),_(Vo.$$.fragment),Zl=i(),us=n("span"),ec=r("TFBlenderbotModel"),Lr=i(),le=n("div"),_(Jo.$$.fragment),tc=i(),Qo=n("p"),oc=r(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ra=n("a"),nc=r("TFPreTrainedModel"),ac=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sc=i(),Xo=n("p"),rc=r("This model is also a "),Yo=n("a"),dc=r("tf.keras.Model"),ic=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lc=i(),_(Vt.$$.fragment),cc=i(),be=n("div"),_(Zo.$$.fragment),pc=i(),qt=n("p"),hc=r("The "),da=n("a"),uc=r("TFBlenderbotModel"),mc=r(" forward method, overrides the "),ms=n("code"),fc=r("__call__"),_c=r(" special method."),gc=i(),_(Jt.$$.fragment),bc=i(),fs=n("p"),kc=r("Example:"),vc=i(),_(en.$$.fragment),Dr=i(),Mt=n("h2"),Qt=n("a"),_s=n("span"),_(tn.$$.fragment),yc=i(),gs=n("span"),Tc=r("TFBlenderbotForConditionalGeneration"),Gr=i(),ce=n("div"),_(on.$$.fragment),wc=i(),nn=n("p"),Bc=r(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=n("a"),zc=r("TFPreTrainedModel"),xc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fc=i(),an=n("p"),$c=r("This model is also a "),sn=n("a"),qc=r("tf.keras.Model"),Mc=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ec=i(),_(Xt.$$.fragment),Cc=i(),X=n("div"),_(rn.$$.fragment),jc=i(),Et=n("p"),Pc=r("The "),la=n("a"),Nc=r("TFBlenderbotForConditionalGeneration"),Ac=r(" forward method, overrides the "),bs=n("code"),Oc=r("__call__"),Ic=r(" special method."),Sc=i(),_(Yt.$$.fragment),Lc=i(),ks=n("p"),Dc=r("Conversation example::"),Gc=i(),vs=n("blockquote"),ys=n("blockquote"),Ts=n("blockquote"),ws=n("p"),Wc=r(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Rc=i(),Bs=n("blockquote"),zs=n("blockquote"),xs=n("blockquote"),dn=n("p"),Uc=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Fs=n("s"),Hc=r(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Kc=r(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Wr=i(),Ct=n("h2"),Zt=n("a"),$s=n("span"),_(ln.$$.fragment),Vc=i(),qs=n("span"),Jc=r("FlaxBlenderbotModel"),Rr=i(),I=n("div"),_(cn.$$.fragment),Qc=i(),pn=n("p"),Xc=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ca=n("a"),Yc=r("FlaxPreTrainedModel"),Zc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep=i(),hn=n("p"),tp=r(`This model is also a Flax Linen
`),un=n("a"),op=r("flax.nn.Module"),np=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ap=i(),Ms=n("p"),sp=r("Finally, this model supports inherent JAX features such as:"),rp=i(),Ue=n("ul"),Es=n("li"),mn=n("a"),dp=r("Just-In-Time (JIT) compilation"),ip=i(),Cs=n("li"),fn=n("a"),lp=r("Automatic Differentiation"),cp=i(),js=n("li"),_n=n("a"),pp=r("Vectorization"),hp=i(),Ps=n("li"),gn=n("a"),up=r("Parallelization"),mp=i(),ke=n("div"),_(bn.$$.fragment),fp=i(),jt=n("p"),_p=r("The "),Ns=n("code"),gp=r("FlaxBlenderbotPreTrainedModel"),bp=r("forward method, overrides the "),As=n("code"),kp=r("__call__"),vp=r(" special method."),yp=i(),_(eo.$$.fragment),Tp=i(),Os=n("p"),wp=r("Example:"),Bp=i(),_(kn.$$.fragment),zp=i(),Ze=n("div"),_(vn.$$.fragment),xp=i(),Is=n("p"),Fp=r("Example:"),$p=i(),_(yn.$$.fragment),qp=i(),et=n("div"),_(Tn.$$.fragment),Mp=i(),Ss=n("p"),Ep=r("Example:"),Cp=i(),_(wn.$$.fragment),Ur=i(),Pt=n("h2"),to=n("a"),Ls=n("span"),_(Bn.$$.fragment),jp=i(),Ds=n("span"),Pp=r("FlaxBlenderbotForConditionalGeneration"),Hr=i(),S=n("div"),_(zn.$$.fragment),Np=i(),xn=n("p"),Ap=r(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),pa=n("a"),Op=r("FlaxPreTrainedModel"),Ip=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sp=i(),Fn=n("p"),Lp=r(`This model is also a Flax Linen
`),$n=n("a"),Dp=r("flax.nn.Module"),Gp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wp=i(),Gs=n("p"),Rp=r("Finally, this model supports inherent JAX features such as:"),Up=i(),He=n("ul"),Ws=n("li"),qn=n("a"),Hp=r("Just-In-Time (JIT) compilation"),Kp=i(),Rs=n("li"),Mn=n("a"),Vp=r("Automatic Differentiation"),Jp=i(),Us=n("li"),En=n("a"),Qp=r("Vectorization"),Xp=i(),Hs=n("li"),Cn=n("a"),Yp=r("Parallelization"),Zp=i(),L=n("div"),_(jn.$$.fragment),eh=i(),Nt=n("p"),th=r("The "),Ks=n("code"),oh=r("FlaxBlenderbotPreTrainedModel"),nh=r("forward method, overrides the "),Vs=n("code"),ah=r("__call__"),sh=r(" special method."),rh=i(),_(oo.$$.fragment),dh=i(),Js=n("p"),ih=r("Conversation example::"),lh=i(),Qs=n("blockquote"),Xs=n("blockquote"),Ys=n("blockquote"),Zs=n("p"),ch=r("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),ph=i(),er=n("blockquote"),tr=n("blockquote"),or=n("blockquote"),nr=n("p"),hh=r(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),uh=i(),ar=n("blockquote"),sr=n("blockquote"),rr=n("blockquote"),dr=n("p"),mh=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),fh=i(),ir=n("blockquote"),lr=n("blockquote"),Pn=n("blockquote"),no=n("h1"),ao=n("a"),cr=n("span"),_(Nn.$$.fragment),_h=i(),pr=n("span"),gh=r("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),bh=i(),hr=n("p"),kh=r(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),vh=i(),tt=n("div"),_(An.$$.fragment),yh=i(),ur=n("p"),Th=r("Example:"),wh=i(),_(On.$$.fragment),Bh=i(),ot=n("div"),_(In.$$.fragment),zh=i(),mr=n("p"),xh=r("Example:"),Fh=i(),_(Sn.$$.fragment),this.h()},l(o){const h=Ff('[data-svelte="svelte-1phssyn"]',document.head);u=a(h,"META",{name:!0,content:!0}),h.forEach(t),x=l(o),f=a(o,"H1",{class:!0});var Ln=s(f);T=a(Ln,"A",{id:!0,class:!0,href:!0});var fr=s(T);z=a(fr,"SPAN",{});var _r=s(z);g(B.$$.fragment,_r),_r.forEach(t),fr.forEach(t),w=l(Ln),F=a(Ln,"SPAN",{});var gr=s(F);Ee=d(gr,"Blenderbot"),gr.forEach(t),Ln.forEach(t),he=l(o),q=a(o,"P",{});var so=s(q);ve=a(so,"STRONG",{});var br=s(ve);te=d(br,"DISCLAIMER:"),br.forEach(t),Ce=d(so," If you see something strange, file a "),oe=a(so,"A",{href:!0,rel:!0});var kr=s(oe);ne=d(kr,"Github Issue"),kr.forEach(t),je=d(so," ."),so.forEach(t),Fe=l(o),G=a(o,"H2",{class:!0});var Dn=s(G);N=a(Dn,"A",{id:!0,class:!0,href:!0});var Mh=s(N);ye=a(Mh,"SPAN",{});var Eh=s(ye);g(U.$$.fragment,Eh),Eh.forEach(t),Mh.forEach(t),M=l(Dn),C=a(Dn,"SPAN",{});var Ch=s(C);Pe=d(Ch,"Overview"),Ch.forEach(t),Dn.forEach(t),J=l(o),Q=a(o,"P",{});var Vr=s(Q);Ne=d(Vr,"The Blender chatbot model was proposed in "),W=a(Vr,"A",{href:!0,rel:!0});var jh=s(W);Ae=d(jh,"Recipes for building an open-domain chatbot"),jh.forEach(t),Oe=d(Vr,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Vr.forEach(t),A=l(o),ue=a(o,"P",{});var Ph=s(ue);ae=d(Ph,"The abstract of the paper is the following:"),Ph.forEach(t),$e=l(o),me=a(o,"P",{});var Nh=s(me);H=a(Nh,"EM",{});var Ah=s(H);Ie=d(Ah,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ah.forEach(t),Nh.forEach(t),qe=l(o),E=a(o,"P",{});var ha=s(E);Se=d(ha,"This model was contributed by "),R=a(ha,"A",{href:!0,rel:!0});var Oh=s(R);Le=d(Oh,"sshleifer"),Oh.forEach(t),m=d(ha,". The authors\u2019 code can be found "),$=a(ha,"A",{href:!0,rel:!0});var Ih=s($);Te=d(Ih,"here"),Ih.forEach(t),ht=d(ha," ."),ha.forEach(t),Ve=l(o),j=a(o,"H2",{class:!0});var Jr=s(j);fe=a(Jr,"A",{id:!0,class:!0,href:!0});var Sh=s(fe);De=a(Sh,"SPAN",{});var Lh=s(De);g(we.$$.fragment,Lh),Lh.forEach(t),Sh.forEach(t),K=l(Jr),V=a(Jr,"SPAN",{});var Dh=s(V);ut=d(Dh,"Implementation Notes"),Dh.forEach(t),Jr.forEach(t),Je=l(o),O=a(o,"UL",{});var ua=s(O);Be=a(ua,"LI",{});var Qr=s(Be);mt=d(Qr,"Blenderbot uses a standard "),se=a(Qr,"A",{href:!0,rel:!0});var Gh=s(se);ft=d(Gh,"seq2seq model transformer"),Gh.forEach(t),$d=d(Qr," based architecture."),Qr.forEach(t),qd=l(ua),uo=a(ua,"LI",{});var Xr=s(uo);Md=d(Xr,"Available checkpoints can be found in the "),mo=a(Xr,"A",{href:!0,rel:!0});var Wh=s(mo);Ed=d(Wh,"model hub"),Wh.forEach(t),Cd=d(Xr,"."),Xr.forEach(t),jd=l(ua),Ge=a(ua,"LI",{});var ro=s(Ge);Pd=d(ro,"This is the "),qa=a(ro,"EM",{});var Rh=s(qa);Nd=d(Rh,"default"),Rh.forEach(t),Ad=d(ro,` Blenderbot model class. However, some smaller checkpoints, such as
`),Ma=a(ro,"CODE",{});var Uh=s(Ma);Od=d(Uh,"facebook/blenderbot_small_90M"),Uh.forEach(t),Id=d(ro,`, have a different architecture and consequently should be used with
`),Rn=a(ro,"A",{href:!0});var Hh=s(Rn);Sd=d(Hh,"BlenderbotSmall"),Hh.forEach(t),Ld=d(ro,"."),ro.forEach(t),ua.forEach(t),Tr=l(o),_t=a(o,"H2",{class:!0});var Yr=s(_t);At=a(Yr,"A",{id:!0,class:!0,href:!0});var Kh=s(At);Ea=a(Kh,"SPAN",{});var Vh=s(Ea);g(fo.$$.fragment,Vh),Vh.forEach(t),Kh.forEach(t),Dd=l(Yr),Ca=a(Yr,"SPAN",{});var Jh=s(Ca);Gd=d(Jh,"Usage"),Jh.forEach(t),Yr.forEach(t),wr=l(o),Un=a(o,"P",{});var Qh=s(Un);Wd=d(Qh,"Here is an example of model usage:"),Qh.forEach(t),Br=l(o),g(_o.$$.fragment,o),zr=l(o),gt=a(o,"H2",{class:!0});var Zr=s(gt);Ot=a(Zr,"A",{id:!0,class:!0,href:!0});var Xh=s(Ot);ja=a(Xh,"SPAN",{});var Yh=s(ja);g(go.$$.fragment,Yh),Yh.forEach(t),Xh.forEach(t),Rd=l(Zr),Pa=a(Zr,"SPAN",{});var Zh=s(Pa);Ud=d(Zh,"BlenderbotConfig"),Zh.forEach(t),Zr.forEach(t),xr=l(o),re=a(o,"DIV",{class:!0});var nt=s(re);g(bo.$$.fragment,nt),Hd=l(nt),bt=a(nt,"P",{});var ma=s(bt);Kd=d(ma,"This is the configuration class to store the configuration of a "),Hn=a(ma,"A",{href:!0});var eu=s(Hn);Vd=d(eu,"BlenderbotModel"),eu.forEach(t),Jd=d(ma,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),ko=a(ma,"A",{href:!0,rel:!0});var tu=s(ko);Qd=d(tu,"facebook/blenderbot-3B"),tu.forEach(t),Xd=d(ma," architecture."),ma.forEach(t),Yd=l(nt),kt=a(nt,"P",{});var fa=s(kt);Zd=d(fa,"Configuration objects inherit from "),Kn=a(fa,"A",{href:!0});var ou=s(Kn);ei=d(ou,"PretrainedConfig"),ou.forEach(t),ti=d(fa,` and can be used to control the model outputs. Read the
documentation from `),Vn=a(fa,"A",{href:!0});var nu=s(Vn);oi=d(nu,"PretrainedConfig"),nu.forEach(t),ni=d(fa," for more information."),fa.forEach(t),ai=l(nt),Na=a(nt,"P",{});var au=s(Na);si=d(au,"Example:"),au.forEach(t),ri=l(nt),g(vo.$$.fragment,nt),nt.forEach(t),Fr=l(o),vt=a(o,"H2",{class:!0});var ed=s(vt);It=a(ed,"A",{id:!0,class:!0,href:!0});var su=s(It);Aa=a(su,"SPAN",{});var ru=s(Aa);g(yo.$$.fragment,ru),ru.forEach(t),su.forEach(t),di=l(ed),Oa=a(ed,"SPAN",{});var du=s(Oa);ii=d(du,"BlenderbotTokenizer"),du.forEach(t),ed.forEach(t),$r=l(o),de=a(o,"DIV",{class:!0});var at=s(de);g(To.$$.fragment,at),li=l(at),Ia=a(at,"P",{});var iu=s(Ia);ci=d(iu,"Construct a Blenderbot tokenizer."),iu.forEach(t),pi=l(at),St=a(at,"P",{});var vr=s(St);Sa=a(vr,"CODE",{});var lu=s(Sa);hi=d(lu,"Blenderbot"),lu.forEach(t),ui=d(vr," is nearly identical to "),Jn=a(vr,"A",{href:!0});var cu=s(Jn);mi=d(cu,"RobertaTokenizer"),cu.forEach(t),fi=d(vr,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),vr.forEach(t),_i=l(at),wo=a(at,"P",{});var td=s(wo);gi=d(td,"Refer to superclass "),Qn=a(td,"A",{href:!0});var pu=s(Qn);bi=d(pu,"RobertaTokenizer"),pu.forEach(t),ki=d(td," for usage examples and documentation concerning parameters."),td.forEach(t),vi=l(at),Qe=a(at,"DIV",{class:!0});var _a=s(Qe);g(Bo.$$.fragment,_a),yi=l(_a),La=a(_a,"P",{});var hu=s(La);Ti=d(hu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),hu.forEach(t),wi=l(_a),Da=a(_a,"UL",{});var uu=s(Da);Xn=a(uu,"LI",{});var $h=s(Xn);Bi=d($h,"single sequence: "),Ga=a($h,"CODE",{});var mu=s(Ga);zi=d(mu,"X </s>"),mu.forEach(t),$h.forEach(t),uu.forEach(t),_a.forEach(t),at.forEach(t),qr=l(o),yt=a(o,"H2",{class:!0});var od=s(yt);Lt=a(od,"A",{id:!0,class:!0,href:!0});var fu=s(Lt);Wa=a(fu,"SPAN",{});var _u=s(Wa);g(zo.$$.fragment,_u),_u.forEach(t),fu.forEach(t),xi=l(od),Ra=a(od,"SPAN",{});var gu=s(Ra);Fi=d(gu,"BlenderbotTokenizerFast"),gu.forEach(t),od.forEach(t),Mr=l(o),ie=a(o,"DIV",{class:!0});var st=s(ie);g(xo.$$.fragment,st),$i=l(st),Fo=a(st,"P",{});var nd=s(Fo);qi=d(nd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ua=a(nd,"EM",{});var bu=s(Ua);Mi=d(bu,"tokenizers"),bu.forEach(t),Ei=d(nd," library)."),nd.forEach(t),Ci=l(st),Dt=a(st,"P",{});var yr=s(Dt);Ha=a(yr,"CODE",{});var ku=s(Ha);ji=d(ku,"BlenderbotFast"),ku.forEach(t),Pi=d(yr," is nearly identical to "),Yn=a(yr,"A",{href:!0});var vu=s(Yn);Ni=d(vu,"RobertaTokenizerFast"),vu.forEach(t),Ai=d(yr,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),yr.forEach(t),Oi=l(st),$o=a(st,"P",{});var ad=s($o);Ii=d(ad,"Refer to superclass "),Zn=a(ad,"A",{href:!0});var yu=s(Zn);Si=d(yu,"RobertaTokenizerFast"),yu.forEach(t),Li=d(ad," for usage examples and documentation concerning parameters."),ad.forEach(t),Di=l(st),Xe=a(st,"DIV",{class:!0});var ga=s(Xe);g(qo.$$.fragment,ga),Gi=l(ga),Ka=a(ga,"P",{});var Tu=s(Ka);Wi=d(Tu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Tu.forEach(t),Ri=l(ga),Va=a(ga,"UL",{});var wu=s(Va);ea=a(wu,"LI",{});var qh=s(ea);Ui=d(qh,"single sequence: "),Ja=a(qh,"CODE",{});var Bu=s(Ja);Hi=d(Bu,"X </s>"),Bu.forEach(t),qh.forEach(t),wu.forEach(t),ga.forEach(t),st.forEach(t),Er=l(o),Tt=a(o,"H2",{class:!0});var sd=s(Tt);Gt=a(sd,"A",{id:!0,class:!0,href:!0});var zu=s(Gt);Qa=a(zu,"SPAN",{});var xu=s(Qa);g(Mo.$$.fragment,xu),xu.forEach(t),zu.forEach(t),Ki=l(sd),Xa=a(sd,"SPAN",{});var Fu=s(Xa);Vi=d(Fu,"BlenderbotModel"),Fu.forEach(t),sd.forEach(t),Cr=l(o),We=a(o,"P",{});var Gn=s(We);Ji=d(Gn,"See "),Ya=a(Gn,"CODE",{});var $u=s(Ya);Qi=d($u,"transformers.BartModel"),$u.forEach(t),Xi=d(Gn," for arguments to "),Za=a(Gn,"EM",{});var qu=s(Za);Yi=d(qu,"forward"),qu.forEach(t),Zi=d(Gn," and "),es=a(Gn,"EM",{});var Mu=s(es);el=d(Mu,"generate"),Mu.forEach(t),Gn.forEach(t),jr=l(o),ze=a(o,"DIV",{class:!0});var io=s(ze);g(Eo.$$.fragment,io),tl=l(io),Co=a(io,"P",{});var rd=s(Co);ol=d(rd,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ta=a(rd,"A",{href:!0});var Eu=s(ta);nl=d(Eu,"PreTrainedModel"),Eu.forEach(t),al=d(rd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rd.forEach(t),sl=l(io),jo=a(io,"P",{});var dd=s(jo);rl=d(dd,"This model is also a PyTorch "),Po=a(dd,"A",{href:!0,rel:!0});var Cu=s(Po);dl=d(Cu,"torch.nn.Module"),Cu.forEach(t),il=d(dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dd.forEach(t),ll=l(io),_e=a(io,"DIV",{class:!0});var rt=s(_e);g(No.$$.fragment,rt),cl=l(rt),wt=a(rt,"P",{});var ba=s(wt);pl=d(ba,"The "),oa=a(ba,"A",{href:!0});var ju=s(oa);hl=d(ju,"BlenderbotModel"),ju.forEach(t),ul=d(ba," forward method, overrides the "),ts=a(ba,"CODE",{});var Pu=s(ts);ml=d(Pu,"__call__"),Pu.forEach(t),fl=d(ba," special method."),ba.forEach(t),_l=l(rt),g(Wt.$$.fragment,rt),gl=l(rt),os=a(rt,"P",{});var Nu=s(os);bl=d(Nu,"Example:"),Nu.forEach(t),kl=l(rt),g(Ao.$$.fragment,rt),rt.forEach(t),io.forEach(t),Pr=l(o),Bt=a(o,"H2",{class:!0});var id=s(Bt);Rt=a(id,"A",{id:!0,class:!0,href:!0});var Au=s(Rt);ns=a(Au,"SPAN",{});var Ou=s(ns);g(Oo.$$.fragment,Ou),Ou.forEach(t),Au.forEach(t),vl=l(id),as=a(id,"SPAN",{});var Iu=s(as);yl=d(Iu,"BlenderbotForConditionalGeneration"),Iu.forEach(t),id.forEach(t),Nr=l(o),Re=a(o,"P",{});var Wn=s(Re);Tl=d(Wn,"See "),na=a(Wn,"A",{href:!0});var Su=s(na);wl=d(Su,"BartForConditionalGeneration"),Su.forEach(t),Bl=d(Wn," for arguments to "),ss=a(Wn,"EM",{});var Lu=s(ss);zl=d(Lu,"forward"),Lu.forEach(t),xl=d(Wn," and "),rs=a(Wn,"EM",{});var Du=s(rs);Fl=d(Du,"generate"),Du.forEach(t),Wn.forEach(t),Ar=l(o),xe=a(o,"DIV",{class:!0});var lo=s(xe);g(Io.$$.fragment,lo),$l=l(lo),So=a(lo,"P",{});var ld=s(So);ql=d(ld,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),aa=a(ld,"A",{href:!0});var Gu=s(aa);Ml=d(Gu,"PreTrainedModel"),Gu.forEach(t),El=d(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(t),Cl=l(lo),Lo=a(lo,"P",{});var cd=s(Lo);jl=d(cd,"This model is also a PyTorch "),Do=a(cd,"A",{href:!0,rel:!0});var Wu=s(Do);Pl=d(Wu,"torch.nn.Module"),Wu.forEach(t),Nl=d(cd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cd.forEach(t),Al=l(lo),ge=a(lo,"DIV",{class:!0});var dt=s(ge);g(Go.$$.fragment,dt),Ol=l(dt),zt=a(dt,"P",{});var ka=s(zt);Il=d(ka,"The "),sa=a(ka,"A",{href:!0});var Ru=s(sa);Sl=d(Ru,"BlenderbotForConditionalGeneration"),Ru.forEach(t),Ll=d(ka," forward method, overrides the "),ds=a(ka,"CODE",{});var Uu=s(ds);Dl=d(Uu,"__call__"),Uu.forEach(t),Gl=d(ka," special method."),ka.forEach(t),Wl=l(dt),g(Ut.$$.fragment,dt),Rl=l(dt),is=a(dt,"P",{});var Hu=s(is);Ul=d(Hu,"Conversation example:"),Hu.forEach(t),Hl=l(dt),g(Wo.$$.fragment,dt),dt.forEach(t),lo.forEach(t),Or=l(o),xt=a(o,"H2",{class:!0});var pd=s(xt);Ht=a(pd,"A",{id:!0,class:!0,href:!0});var Ku=s(Ht);ls=a(Ku,"SPAN",{});var Vu=s(ls);g(Ro.$$.fragment,Vu),Vu.forEach(t),Ku.forEach(t),Kl=l(pd),cs=a(pd,"SPAN",{});var Ju=s(cs);Vl=d(Ju,"BlenderbotForCausalLM"),Ju.forEach(t),pd.forEach(t),Ir=l(o),Ft=a(o,"DIV",{class:!0});var hd=s(Ft);g(Uo.$$.fragment,hd),Jl=l(hd),Ye=a(hd,"DIV",{class:!0});var va=s(Ye);g(Ho.$$.fragment,va),Ql=l(va),ps=a(va,"P",{});var Qu=s(ps);Xl=d(Qu,"Example:"),Qu.forEach(t),Yl=l(va),g(Ko.$$.fragment,va),va.forEach(t),hd.forEach(t),Sr=l(o),$t=a(o,"H2",{class:!0});var ud=s($t);Kt=a(ud,"A",{id:!0,class:!0,href:!0});var Xu=s(Kt);hs=a(Xu,"SPAN",{});var Yu=s(hs);g(Vo.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),Zl=l(ud),us=a(ud,"SPAN",{});var Zu=s(us);ec=d(Zu,"TFBlenderbotModel"),Zu.forEach(t),ud.forEach(t),Lr=l(o),le=a(o,"DIV",{class:!0});var it=s(le);g(Jo.$$.fragment,it),tc=l(it),Qo=a(it,"P",{});var md=s(Qo);oc=d(md,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ra=a(md,"A",{href:!0});var em=s(ra);nc=d(em,"TFPreTrainedModel"),em.forEach(t),ac=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),sc=l(it),Xo=a(it,"P",{});var fd=s(Xo);rc=d(fd,"This model is also a "),Yo=a(fd,"A",{href:!0,rel:!0});var tm=s(Yo);dc=d(tm,"tf.keras.Model"),tm.forEach(t),ic=d(fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fd.forEach(t),lc=l(it),g(Vt.$$.fragment,it),cc=l(it),be=a(it,"DIV",{class:!0});var lt=s(be);g(Zo.$$.fragment,lt),pc=l(lt),qt=a(lt,"P",{});var ya=s(qt);hc=d(ya,"The "),da=a(ya,"A",{href:!0});var om=s(da);uc=d(om,"TFBlenderbotModel"),om.forEach(t),mc=d(ya," forward method, overrides the "),ms=a(ya,"CODE",{});var nm=s(ms);fc=d(nm,"__call__"),nm.forEach(t),_c=d(ya," special method."),ya.forEach(t),gc=l(lt),g(Jt.$$.fragment,lt),bc=l(lt),fs=a(lt,"P",{});var am=s(fs);kc=d(am,"Example:"),am.forEach(t),vc=l(lt),g(en.$$.fragment,lt),lt.forEach(t),it.forEach(t),Dr=l(o),Mt=a(o,"H2",{class:!0});var _d=s(Mt);Qt=a(_d,"A",{id:!0,class:!0,href:!0});var sm=s(Qt);_s=a(sm,"SPAN",{});var rm=s(_s);g(tn.$$.fragment,rm),rm.forEach(t),sm.forEach(t),yc=l(_d),gs=a(_d,"SPAN",{});var dm=s(gs);Tc=d(dm,"TFBlenderbotForConditionalGeneration"),dm.forEach(t),_d.forEach(t),Gr=l(o),ce=a(o,"DIV",{class:!0});var ct=s(ce);g(on.$$.fragment,ct),wc=l(ct),nn=a(ct,"P",{});var gd=s(nn);Bc=d(gd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=a(gd,"A",{href:!0});var im=s(ia);zc=d(im,"TFPreTrainedModel"),im.forEach(t),xc=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),Fc=l(ct),an=a(ct,"P",{});var bd=s(an);$c=d(bd,"This model is also a "),sn=a(bd,"A",{href:!0,rel:!0});var lm=s(sn);qc=d(lm,"tf.keras.Model"),lm.forEach(t),Mc=d(bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd.forEach(t),Ec=l(ct),g(Xt.$$.fragment,ct),Cc=l(ct),X=a(ct,"DIV",{class:!0});var Me=s(X);g(rn.$$.fragment,Me),jc=l(Me),Et=a(Me,"P",{});var Ta=s(Et);Pc=d(Ta,"The "),la=a(Ta,"A",{href:!0});var cm=s(la);Nc=d(cm,"TFBlenderbotForConditionalGeneration"),cm.forEach(t),Ac=d(Ta," forward method, overrides the "),bs=a(Ta,"CODE",{});var pm=s(bs);Oc=d(pm,"__call__"),pm.forEach(t),Ic=d(Ta," special method."),Ta.forEach(t),Sc=l(Me),g(Yt.$$.fragment,Me),Lc=l(Me),ks=a(Me,"P",{});var hm=s(ks);Dc=d(hm,"Conversation example::"),hm.forEach(t),Gc=l(Me),vs=a(Me,"BLOCKQUOTE",{});var um=s(vs);ys=a(um,"BLOCKQUOTE",{});var mm=s(ys);Ts=a(mm,"BLOCKQUOTE",{});var fm=s(Ts);ws=a(fm,"P",{});var _m=s(ws);Wc=d(_m,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),_m.forEach(t),fm.forEach(t),mm.forEach(t),um.forEach(t),Rc=l(Me),Bs=a(Me,"BLOCKQUOTE",{});var gm=s(Bs);zs=a(gm,"BLOCKQUOTE",{});var bm=s(zs);xs=a(bm,"BLOCKQUOTE",{});var km=s(xs);dn=a(km,"P",{});var kd=s(dn);Uc=d(kd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Fs=a(kd,"S",{});var vm=s(Fs);Hc=d(vm,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),vm.forEach(t),Kc=d(kd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),kd.forEach(t),km.forEach(t),bm.forEach(t),gm.forEach(t),Me.forEach(t),ct.forEach(t),Wr=l(o),Ct=a(o,"H2",{class:!0});var vd=s(Ct);Zt=a(vd,"A",{id:!0,class:!0,href:!0});var ym=s(Zt);$s=a(ym,"SPAN",{});var Tm=s($s);g(ln.$$.fragment,Tm),Tm.forEach(t),ym.forEach(t),Vc=l(vd),qs=a(vd,"SPAN",{});var wm=s(qs);Jc=d(wm,"FlaxBlenderbotModel"),wm.forEach(t),vd.forEach(t),Rr=l(o),I=a(o,"DIV",{class:!0});var Y=s(I);g(cn.$$.fragment,Y),Qc=l(Y),pn=a(Y,"P",{});var yd=s(pn);Xc=d(yd,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ca=a(yd,"A",{href:!0});var Bm=s(ca);Yc=d(Bm,"FlaxPreTrainedModel"),Bm.forEach(t),Zc=d(yd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yd.forEach(t),ep=l(Y),hn=a(Y,"P",{});var Td=s(hn);tp=d(Td,`This model is also a Flax Linen
`),un=a(Td,"A",{href:!0,rel:!0});var zm=s(un);op=d(zm,"flax.nn.Module"),zm.forEach(t),np=d(Td,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Td.forEach(t),ap=l(Y),Ms=a(Y,"P",{});var xm=s(Ms);sp=d(xm,"Finally, this model supports inherent JAX features such as:"),xm.forEach(t),rp=l(Y),Ue=a(Y,"UL",{});var co=s(Ue);Es=a(co,"LI",{});var Fm=s(Es);mn=a(Fm,"A",{href:!0,rel:!0});var $m=s(mn);dp=d($m,"Just-In-Time (JIT) compilation"),$m.forEach(t),Fm.forEach(t),ip=l(co),Cs=a(co,"LI",{});var qm=s(Cs);fn=a(qm,"A",{href:!0,rel:!0});var Mm=s(fn);lp=d(Mm,"Automatic Differentiation"),Mm.forEach(t),qm.forEach(t),cp=l(co),js=a(co,"LI",{});var Em=s(js);_n=a(Em,"A",{href:!0,rel:!0});var Cm=s(_n);pp=d(Cm,"Vectorization"),Cm.forEach(t),Em.forEach(t),hp=l(co),Ps=a(co,"LI",{});var jm=s(Ps);gn=a(jm,"A",{href:!0,rel:!0});var Pm=s(gn);up=d(Pm,"Parallelization"),Pm.forEach(t),jm.forEach(t),co.forEach(t),mp=l(Y),ke=a(Y,"DIV",{class:!0});var pt=s(ke);g(bn.$$.fragment,pt),fp=l(pt),jt=a(pt,"P",{});var wa=s(jt);_p=d(wa,"The "),Ns=a(wa,"CODE",{});var Nm=s(Ns);gp=d(Nm,"FlaxBlenderbotPreTrainedModel"),Nm.forEach(t),bp=d(wa,"forward method, overrides the "),As=a(wa,"CODE",{});var Am=s(As);kp=d(Am,"__call__"),Am.forEach(t),vp=d(wa," special method."),wa.forEach(t),yp=l(pt),g(eo.$$.fragment,pt),Tp=l(pt),Os=a(pt,"P",{});var Om=s(Os);wp=d(Om,"Example:"),Om.forEach(t),Bp=l(pt),g(kn.$$.fragment,pt),pt.forEach(t),zp=l(Y),Ze=a(Y,"DIV",{class:!0});var Ba=s(Ze);g(vn.$$.fragment,Ba),xp=l(Ba),Is=a(Ba,"P",{});var Im=s(Is);Fp=d(Im,"Example:"),Im.forEach(t),$p=l(Ba),g(yn.$$.fragment,Ba),Ba.forEach(t),qp=l(Y),et=a(Y,"DIV",{class:!0});var za=s(et);g(Tn.$$.fragment,za),Mp=l(za),Ss=a(za,"P",{});var Sm=s(Ss);Ep=d(Sm,"Example:"),Sm.forEach(t),Cp=l(za),g(wn.$$.fragment,za),za.forEach(t),Y.forEach(t),Ur=l(o),Pt=a(o,"H2",{class:!0});var wd=s(Pt);to=a(wd,"A",{id:!0,class:!0,href:!0});var Lm=s(to);Ls=a(Lm,"SPAN",{});var Dm=s(Ls);g(Bn.$$.fragment,Dm),Dm.forEach(t),Lm.forEach(t),jp=l(wd),Ds=a(wd,"SPAN",{});var Gm=s(Ds);Pp=d(Gm,"FlaxBlenderbotForConditionalGeneration"),Gm.forEach(t),wd.forEach(t),Hr=l(o),S=a(o,"DIV",{class:!0});var Z=s(S);g(zn.$$.fragment,Z),Np=l(Z),xn=a(Z,"P",{});var Bd=s(xn);Ap=d(Bd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),pa=a(Bd,"A",{href:!0});var Wm=s(pa);Op=d(Wm,"FlaxPreTrainedModel"),Wm.forEach(t),Ip=d(Bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd.forEach(t),Sp=l(Z),Fn=a(Z,"P",{});var zd=s(Fn);Lp=d(zd,`This model is also a Flax Linen
`),$n=a(zd,"A",{href:!0,rel:!0});var Rm=s($n);Dp=d(Rm,"flax.nn.Module"),Rm.forEach(t),Gp=d(zd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zd.forEach(t),Wp=l(Z),Gs=a(Z,"P",{});var Um=s(Gs);Rp=d(Um,"Finally, this model supports inherent JAX features such as:"),Um.forEach(t),Up=l(Z),He=a(Z,"UL",{});var po=s(He);Ws=a(po,"LI",{});var Hm=s(Ws);qn=a(Hm,"A",{href:!0,rel:!0});var Km=s(qn);Hp=d(Km,"Just-In-Time (JIT) compilation"),Km.forEach(t),Hm.forEach(t),Kp=l(po),Rs=a(po,"LI",{});var Vm=s(Rs);Mn=a(Vm,"A",{href:!0,rel:!0});var Jm=s(Mn);Vp=d(Jm,"Automatic Differentiation"),Jm.forEach(t),Vm.forEach(t),Jp=l(po),Us=a(po,"LI",{});var Qm=s(Us);En=a(Qm,"A",{href:!0,rel:!0});var Xm=s(En);Qp=d(Xm,"Vectorization"),Xm.forEach(t),Qm.forEach(t),Xp=l(po),Hs=a(po,"LI",{});var Ym=s(Hs);Cn=a(Ym,"A",{href:!0,rel:!0});var Zm=s(Cn);Yp=d(Zm,"Parallelization"),Zm.forEach(t),Ym.forEach(t),po.forEach(t),Zp=l(Z),L=a(Z,"DIV",{class:!0});var ee=s(L);g(jn.$$.fragment,ee),eh=l(ee),Nt=a(ee,"P",{});var xa=s(Nt);th=d(xa,"The "),Ks=a(xa,"CODE",{});var ef=s(Ks);oh=d(ef,"FlaxBlenderbotPreTrainedModel"),ef.forEach(t),nh=d(xa,"forward method, overrides the "),Vs=a(xa,"CODE",{});var tf=s(Vs);ah=d(tf,"__call__"),tf.forEach(t),sh=d(xa," special method."),xa.forEach(t),rh=l(ee),g(oo.$$.fragment,ee),dh=l(ee),Js=a(ee,"P",{});var of=s(Js);ih=d(of,"Conversation example::"),of.forEach(t),lh=l(ee),Qs=a(ee,"BLOCKQUOTE",{});var nf=s(Qs);Xs=a(nf,"BLOCKQUOTE",{});var af=s(Xs);Ys=a(af,"BLOCKQUOTE",{});var sf=s(Ys);Zs=a(sf,"P",{});var rf=s(Zs);ch=d(rf,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),rf.forEach(t),sf.forEach(t),af.forEach(t),nf.forEach(t),ph=l(ee),er=a(ee,"BLOCKQUOTE",{});var df=s(er);tr=a(df,"BLOCKQUOTE",{});var lf=s(tr);or=a(lf,"BLOCKQUOTE",{});var cf=s(or);nr=a(cf,"P",{});var pf=s(nr);hh=d(pf,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),pf.forEach(t),cf.forEach(t),lf.forEach(t),df.forEach(t),uh=l(ee),ar=a(ee,"BLOCKQUOTE",{});var hf=s(ar);sr=a(hf,"BLOCKQUOTE",{});var uf=s(sr);rr=a(uf,"BLOCKQUOTE",{});var mf=s(rr);dr=a(mf,"P",{});var ff=s(dr);mh=d(ff,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),ff.forEach(t),mf.forEach(t),uf.forEach(t),hf.forEach(t),fh=l(ee),ir=a(ee,"BLOCKQUOTE",{});var _f=s(ir);lr=a(_f,"BLOCKQUOTE",{});var gf=s(lr);Pn=a(gf,"BLOCKQUOTE",{});var xd=s(Pn);no=a(xd,"H1",{class:!0});var Fd=s(no);ao=a(Fd,"A",{id:!0,class:!0,href:!0});var bf=s(ao);cr=a(bf,"SPAN",{});var kf=s(cr);g(Nn.$$.fragment,kf),kf.forEach(t),bf.forEach(t),_h=l(Fd),pr=a(Fd,"SPAN",{});var vf=s(pr);gh=d(vf,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),vf.forEach(t),Fd.forEach(t),bh=l(xd),hr=a(xd,"P",{});var yf=s(hr);kh=d(yf,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),yf.forEach(t),xd.forEach(t),gf.forEach(t),_f.forEach(t),ee.forEach(t),vh=l(Z),tt=a(Z,"DIV",{class:!0});var Fa=s(tt);g(An.$$.fragment,Fa),yh=l(Fa),ur=a(Fa,"P",{});var Tf=s(ur);Th=d(Tf,"Example:"),Tf.forEach(t),wh=l(Fa),g(On.$$.fragment,Fa),Fa.forEach(t),Bh=l(Z),ot=a(Z,"DIV",{class:!0});var $a=s(ot);g(In.$$.fragment,$a),zh=l($a),mr=a($a,"P",{});var wf=s(mr);xh=d(wf,"Example:"),wf.forEach(t),Fh=l($a),g(Sn.$$.fragment,$a),$a.forEach(t),Z.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Of)),c(T,"id","blenderbot"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot"),c(f,"class","relative group"),c(oe,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(oe,"rel","nofollow"),c(N,"id","overview"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview"),c(G,"class","relative group"),c(W,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(W,"rel","nofollow"),c(R,"href","https://huggingface.co/sshleifer"),c(R,"rel","nofollow"),c($,"href","https://github.com/facebookresearch/ParlAI"),c($,"rel","nofollow"),c(fe,"id","implementation-notes"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#implementation-notes"),c(j,"class","relative group"),c(se,"href","https://arxiv.org/pdf/1706.03762.pdf"),c(se,"rel","nofollow"),c(mo,"href","https://huggingface.co/models?search=blenderbot"),c(mo,"rel","nofollow"),c(Rn,"href","blenderbot-small"),c(At,"id","usage"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#usage"),c(_t,"class","relative group"),c(Ot,"id","transformers.BlenderbotConfig"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.BlenderbotConfig"),c(gt,"class","relative group"),c(Hn,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(ko,"href","https://huggingface.co/facebook/blenderbot-3B"),c(ko,"rel","nofollow"),c(Kn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Vn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(re,"class","docstring"),c(It,"id","transformers.BlenderbotTokenizer"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.BlenderbotTokenizer"),c(vt,"class","relative group"),c(Jn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qe,"class","docstring"),c(de,"class","docstring"),c(Lt,"id","transformers.BlenderbotTokenizerFast"),c(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lt,"href","#transformers.BlenderbotTokenizerFast"),c(yt,"class","relative group"),c(Yn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Zn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Xe,"class","docstring"),c(ie,"class","docstring"),c(Gt,"id","transformers.BlenderbotModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.BlenderbotModel"),c(Tt,"class","relative group"),c(ta,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Po,"rel","nofollow"),c(oa,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(_e,"class","docstring"),c(ze,"class","docstring"),c(Rt,"id","transformers.BlenderbotForConditionalGeneration"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.BlenderbotForConditionalGeneration"),c(Bt,"class","relative group"),c(na,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(aa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Do,"rel","nofollow"),c(sa,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(ge,"class","docstring"),c(xe,"class","docstring"),c(Ht,"id","transformers.BlenderbotForCausalLM"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.BlenderbotForCausalLM"),c(xt,"class","relative group"),c(Ye,"class","docstring"),c(Ft,"class","docstring"),c(Kt,"id","transformers.TFBlenderbotModel"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.TFBlenderbotModel"),c($t,"class","relative group"),c(ra,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Yo,"rel","nofollow"),c(da,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),c(be,"class","docstring"),c(le,"class","docstring"),c(Qt,"id","transformers.TFBlenderbotForConditionalGeneration"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.TFBlenderbotForConditionalGeneration"),c(Mt,"class","relative group"),c(ia,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(sn,"rel","nofollow"),c(la,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),c(X,"class","docstring"),c(ce,"class","docstring"),c(Zt,"id","transformers.FlaxBlenderbotModel"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.FlaxBlenderbotModel"),c(Ct,"class","relative group"),c(ca,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(un,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(un,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(ke,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(I,"class","docstring"),c(to,"id","transformers.FlaxBlenderbotForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),c(Pt,"class","relative group"),c(pa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($n,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c($n,"rel","nofollow"),c(qn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(qn,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Mn,"rel","nofollow"),c(En,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(En,"rel","nofollow"),c(Cn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Cn,"rel","nofollow"),c(ao,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(no,"class","relative group"),c(L,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(S,"class","docstring")},m(o,h){e(document.head,u),p(o,x,h),p(o,f,h),e(f,T),e(T,z),b(B,z,null),e(f,w),e(f,F),e(F,Ee),p(o,he,h),p(o,q,h),e(q,ve),e(ve,te),e(q,Ce),e(q,oe),e(oe,ne),e(q,je),p(o,Fe,h),p(o,G,h),e(G,N),e(N,ye),b(U,ye,null),e(G,M),e(G,C),e(C,Pe),p(o,J,h),p(o,Q,h),e(Q,Ne),e(Q,W),e(W,Ae),e(Q,Oe),p(o,A,h),p(o,ue,h),e(ue,ae),p(o,$e,h),p(o,me,h),e(me,H),e(H,Ie),p(o,qe,h),p(o,E,h),e(E,Se),e(E,R),e(R,Le),e(E,m),e(E,$),e($,Te),e(E,ht),p(o,Ve,h),p(o,j,h),e(j,fe),e(fe,De),b(we,De,null),e(j,K),e(j,V),e(V,ut),p(o,Je,h),p(o,O,h),e(O,Be),e(Be,mt),e(Be,se),e(se,ft),e(Be,$d),e(O,qd),e(O,uo),e(uo,Md),e(uo,mo),e(mo,Ed),e(uo,Cd),e(O,jd),e(O,Ge),e(Ge,Pd),e(Ge,qa),e(qa,Nd),e(Ge,Ad),e(Ge,Ma),e(Ma,Od),e(Ge,Id),e(Ge,Rn),e(Rn,Sd),e(Ge,Ld),p(o,Tr,h),p(o,_t,h),e(_t,At),e(At,Ea),b(fo,Ea,null),e(_t,Dd),e(_t,Ca),e(Ca,Gd),p(o,wr,h),p(o,Un,h),e(Un,Wd),p(o,Br,h),b(_o,o,h),p(o,zr,h),p(o,gt,h),e(gt,Ot),e(Ot,ja),b(go,ja,null),e(gt,Rd),e(gt,Pa),e(Pa,Ud),p(o,xr,h),p(o,re,h),b(bo,re,null),e(re,Hd),e(re,bt),e(bt,Kd),e(bt,Hn),e(Hn,Vd),e(bt,Jd),e(bt,ko),e(ko,Qd),e(bt,Xd),e(re,Yd),e(re,kt),e(kt,Zd),e(kt,Kn),e(Kn,ei),e(kt,ti),e(kt,Vn),e(Vn,oi),e(kt,ni),e(re,ai),e(re,Na),e(Na,si),e(re,ri),b(vo,re,null),p(o,Fr,h),p(o,vt,h),e(vt,It),e(It,Aa),b(yo,Aa,null),e(vt,di),e(vt,Oa),e(Oa,ii),p(o,$r,h),p(o,de,h),b(To,de,null),e(de,li),e(de,Ia),e(Ia,ci),e(de,pi),e(de,St),e(St,Sa),e(Sa,hi),e(St,ui),e(St,Jn),e(Jn,mi),e(St,fi),e(de,_i),e(de,wo),e(wo,gi),e(wo,Qn),e(Qn,bi),e(wo,ki),e(de,vi),e(de,Qe),b(Bo,Qe,null),e(Qe,yi),e(Qe,La),e(La,Ti),e(Qe,wi),e(Qe,Da),e(Da,Xn),e(Xn,Bi),e(Xn,Ga),e(Ga,zi),p(o,qr,h),p(o,yt,h),e(yt,Lt),e(Lt,Wa),b(zo,Wa,null),e(yt,xi),e(yt,Ra),e(Ra,Fi),p(o,Mr,h),p(o,ie,h),b(xo,ie,null),e(ie,$i),e(ie,Fo),e(Fo,qi),e(Fo,Ua),e(Ua,Mi),e(Fo,Ei),e(ie,Ci),e(ie,Dt),e(Dt,Ha),e(Ha,ji),e(Dt,Pi),e(Dt,Yn),e(Yn,Ni),e(Dt,Ai),e(ie,Oi),e(ie,$o),e($o,Ii),e($o,Zn),e(Zn,Si),e($o,Li),e(ie,Di),e(ie,Xe),b(qo,Xe,null),e(Xe,Gi),e(Xe,Ka),e(Ka,Wi),e(Xe,Ri),e(Xe,Va),e(Va,ea),e(ea,Ui),e(ea,Ja),e(Ja,Hi),p(o,Er,h),p(o,Tt,h),e(Tt,Gt),e(Gt,Qa),b(Mo,Qa,null),e(Tt,Ki),e(Tt,Xa),e(Xa,Vi),p(o,Cr,h),p(o,We,h),e(We,Ji),e(We,Ya),e(Ya,Qi),e(We,Xi),e(We,Za),e(Za,Yi),e(We,Zi),e(We,es),e(es,el),p(o,jr,h),p(o,ze,h),b(Eo,ze,null),e(ze,tl),e(ze,Co),e(Co,ol),e(Co,ta),e(ta,nl),e(Co,al),e(ze,sl),e(ze,jo),e(jo,rl),e(jo,Po),e(Po,dl),e(jo,il),e(ze,ll),e(ze,_e),b(No,_e,null),e(_e,cl),e(_e,wt),e(wt,pl),e(wt,oa),e(oa,hl),e(wt,ul),e(wt,ts),e(ts,ml),e(wt,fl),e(_e,_l),b(Wt,_e,null),e(_e,gl),e(_e,os),e(os,bl),e(_e,kl),b(Ao,_e,null),p(o,Pr,h),p(o,Bt,h),e(Bt,Rt),e(Rt,ns),b(Oo,ns,null),e(Bt,vl),e(Bt,as),e(as,yl),p(o,Nr,h),p(o,Re,h),e(Re,Tl),e(Re,na),e(na,wl),e(Re,Bl),e(Re,ss),e(ss,zl),e(Re,xl),e(Re,rs),e(rs,Fl),p(o,Ar,h),p(o,xe,h),b(Io,xe,null),e(xe,$l),e(xe,So),e(So,ql),e(So,aa),e(aa,Ml),e(So,El),e(xe,Cl),e(xe,Lo),e(Lo,jl),e(Lo,Do),e(Do,Pl),e(Lo,Nl),e(xe,Al),e(xe,ge),b(Go,ge,null),e(ge,Ol),e(ge,zt),e(zt,Il),e(zt,sa),e(sa,Sl),e(zt,Ll),e(zt,ds),e(ds,Dl),e(zt,Gl),e(ge,Wl),b(Ut,ge,null),e(ge,Rl),e(ge,is),e(is,Ul),e(ge,Hl),b(Wo,ge,null),p(o,Or,h),p(o,xt,h),e(xt,Ht),e(Ht,ls),b(Ro,ls,null),e(xt,Kl),e(xt,cs),e(cs,Vl),p(o,Ir,h),p(o,Ft,h),b(Uo,Ft,null),e(Ft,Jl),e(Ft,Ye),b(Ho,Ye,null),e(Ye,Ql),e(Ye,ps),e(ps,Xl),e(Ye,Yl),b(Ko,Ye,null),p(o,Sr,h),p(o,$t,h),e($t,Kt),e(Kt,hs),b(Vo,hs,null),e($t,Zl),e($t,us),e(us,ec),p(o,Lr,h),p(o,le,h),b(Jo,le,null),e(le,tc),e(le,Qo),e(Qo,oc),e(Qo,ra),e(ra,nc),e(Qo,ac),e(le,sc),e(le,Xo),e(Xo,rc),e(Xo,Yo),e(Yo,dc),e(Xo,ic),e(le,lc),b(Vt,le,null),e(le,cc),e(le,be),b(Zo,be,null),e(be,pc),e(be,qt),e(qt,hc),e(qt,da),e(da,uc),e(qt,mc),e(qt,ms),e(ms,fc),e(qt,_c),e(be,gc),b(Jt,be,null),e(be,bc),e(be,fs),e(fs,kc),e(be,vc),b(en,be,null),p(o,Dr,h),p(o,Mt,h),e(Mt,Qt),e(Qt,_s),b(tn,_s,null),e(Mt,yc),e(Mt,gs),e(gs,Tc),p(o,Gr,h),p(o,ce,h),b(on,ce,null),e(ce,wc),e(ce,nn),e(nn,Bc),e(nn,ia),e(ia,zc),e(nn,xc),e(ce,Fc),e(ce,an),e(an,$c),e(an,sn),e(sn,qc),e(an,Mc),e(ce,Ec),b(Xt,ce,null),e(ce,Cc),e(ce,X),b(rn,X,null),e(X,jc),e(X,Et),e(Et,Pc),e(Et,la),e(la,Nc),e(Et,Ac),e(Et,bs),e(bs,Oc),e(Et,Ic),e(X,Sc),b(Yt,X,null),e(X,Lc),e(X,ks),e(ks,Dc),e(X,Gc),e(X,vs),e(vs,ys),e(ys,Ts),e(Ts,ws),e(ws,Wc),e(X,Rc),e(X,Bs),e(Bs,zs),e(zs,xs),e(xs,dn),e(dn,Uc),e(dn,Fs),e(Fs,Hc),e(dn,Kc),p(o,Wr,h),p(o,Ct,h),e(Ct,Zt),e(Zt,$s),b(ln,$s,null),e(Ct,Vc),e(Ct,qs),e(qs,Jc),p(o,Rr,h),p(o,I,h),b(cn,I,null),e(I,Qc),e(I,pn),e(pn,Xc),e(pn,ca),e(ca,Yc),e(pn,Zc),e(I,ep),e(I,hn),e(hn,tp),e(hn,un),e(un,op),e(hn,np),e(I,ap),e(I,Ms),e(Ms,sp),e(I,rp),e(I,Ue),e(Ue,Es),e(Es,mn),e(mn,dp),e(Ue,ip),e(Ue,Cs),e(Cs,fn),e(fn,lp),e(Ue,cp),e(Ue,js),e(js,_n),e(_n,pp),e(Ue,hp),e(Ue,Ps),e(Ps,gn),e(gn,up),e(I,mp),e(I,ke),b(bn,ke,null),e(ke,fp),e(ke,jt),e(jt,_p),e(jt,Ns),e(Ns,gp),e(jt,bp),e(jt,As),e(As,kp),e(jt,vp),e(ke,yp),b(eo,ke,null),e(ke,Tp),e(ke,Os),e(Os,wp),e(ke,Bp),b(kn,ke,null),e(I,zp),e(I,Ze),b(vn,Ze,null),e(Ze,xp),e(Ze,Is),e(Is,Fp),e(Ze,$p),b(yn,Ze,null),e(I,qp),e(I,et),b(Tn,et,null),e(et,Mp),e(et,Ss),e(Ss,Ep),e(et,Cp),b(wn,et,null),p(o,Ur,h),p(o,Pt,h),e(Pt,to),e(to,Ls),b(Bn,Ls,null),e(Pt,jp),e(Pt,Ds),e(Ds,Pp),p(o,Hr,h),p(o,S,h),b(zn,S,null),e(S,Np),e(S,xn),e(xn,Ap),e(xn,pa),e(pa,Op),e(xn,Ip),e(S,Sp),e(S,Fn),e(Fn,Lp),e(Fn,$n),e($n,Dp),e(Fn,Gp),e(S,Wp),e(S,Gs),e(Gs,Rp),e(S,Up),e(S,He),e(He,Ws),e(Ws,qn),e(qn,Hp),e(He,Kp),e(He,Rs),e(Rs,Mn),e(Mn,Vp),e(He,Jp),e(He,Us),e(Us,En),e(En,Qp),e(He,Xp),e(He,Hs),e(Hs,Cn),e(Cn,Yp),e(S,Zp),e(S,L),b(jn,L,null),e(L,eh),e(L,Nt),e(Nt,th),e(Nt,Ks),e(Ks,oh),e(Nt,nh),e(Nt,Vs),e(Vs,ah),e(Nt,sh),e(L,rh),b(oo,L,null),e(L,dh),e(L,Js),e(Js,ih),e(L,lh),e(L,Qs),e(Qs,Xs),e(Xs,Ys),e(Ys,Zs),e(Zs,ch),e(L,ph),e(L,er),e(er,tr),e(tr,or),e(or,nr),e(nr,hh),e(L,uh),e(L,ar),e(ar,sr),e(sr,rr),e(rr,dr),e(dr,mh),e(L,fh),e(L,ir),e(ir,lr),e(lr,Pn),e(Pn,no),e(no,ao),e(ao,cr),b(Nn,cr,null),e(no,_h),e(no,pr),e(pr,gh),e(Pn,bh),e(Pn,hr),e(hr,kh),e(S,vh),e(S,tt),b(An,tt,null),e(tt,yh),e(tt,ur),e(ur,Th),e(tt,wh),b(On,tt,null),e(S,Bh),e(S,ot),b(In,ot,null),e(ot,zh),e(ot,mr),e(mr,xh),e(ot,Fh),b(Sn,ot,null),Kr=!0},p(o,[h]){const Ln={};h&2&&(Ln.$$scope={dirty:h,ctx:o}),Wt.$set(Ln);const fr={};h&2&&(fr.$$scope={dirty:h,ctx:o}),Ut.$set(fr);const _r={};h&2&&(_r.$$scope={dirty:h,ctx:o}),Vt.$set(_r);const gr={};h&2&&(gr.$$scope={dirty:h,ctx:o}),Jt.$set(gr);const so={};h&2&&(so.$$scope={dirty:h,ctx:o}),Xt.$set(so);const br={};h&2&&(br.$$scope={dirty:h,ctx:o}),Yt.$set(br);const kr={};h&2&&(kr.$$scope={dirty:h,ctx:o}),eo.$set(kr);const Dn={};h&2&&(Dn.$$scope={dirty:h,ctx:o}),oo.$set(Dn)},i(o){Kr||(k(B.$$.fragment,o),k(U.$$.fragment,o),k(we.$$.fragment,o),k(fo.$$.fragment,o),k(_o.$$.fragment,o),k(go.$$.fragment,o),k(bo.$$.fragment,o),k(vo.$$.fragment,o),k(yo.$$.fragment,o),k(To.$$.fragment,o),k(Bo.$$.fragment,o),k(zo.$$.fragment,o),k(xo.$$.fragment,o),k(qo.$$.fragment,o),k(Mo.$$.fragment,o),k(Eo.$$.fragment,o),k(No.$$.fragment,o),k(Wt.$$.fragment,o),k(Ao.$$.fragment,o),k(Oo.$$.fragment,o),k(Io.$$.fragment,o),k(Go.$$.fragment,o),k(Ut.$$.fragment,o),k(Wo.$$.fragment,o),k(Ro.$$.fragment,o),k(Uo.$$.fragment,o),k(Ho.$$.fragment,o),k(Ko.$$.fragment,o),k(Vo.$$.fragment,o),k(Jo.$$.fragment,o),k(Vt.$$.fragment,o),k(Zo.$$.fragment,o),k(Jt.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(on.$$.fragment,o),k(Xt.$$.fragment,o),k(rn.$$.fragment,o),k(Yt.$$.fragment,o),k(ln.$$.fragment,o),k(cn.$$.fragment,o),k(bn.$$.fragment,o),k(eo.$$.fragment,o),k(kn.$$.fragment,o),k(vn.$$.fragment,o),k(yn.$$.fragment,o),k(Tn.$$.fragment,o),k(wn.$$.fragment,o),k(Bn.$$.fragment,o),k(zn.$$.fragment,o),k(jn.$$.fragment,o),k(oo.$$.fragment,o),k(Nn.$$.fragment,o),k(An.$$.fragment,o),k(On.$$.fragment,o),k(In.$$.fragment,o),k(Sn.$$.fragment,o),Kr=!0)},o(o){v(B.$$.fragment,o),v(U.$$.fragment,o),v(we.$$.fragment,o),v(fo.$$.fragment,o),v(_o.$$.fragment,o),v(go.$$.fragment,o),v(bo.$$.fragment,o),v(vo.$$.fragment,o),v(yo.$$.fragment,o),v(To.$$.fragment,o),v(Bo.$$.fragment,o),v(zo.$$.fragment,o),v(xo.$$.fragment,o),v(qo.$$.fragment,o),v(Mo.$$.fragment,o),v(Eo.$$.fragment,o),v(No.$$.fragment,o),v(Wt.$$.fragment,o),v(Ao.$$.fragment,o),v(Oo.$$.fragment,o),v(Io.$$.fragment,o),v(Go.$$.fragment,o),v(Ut.$$.fragment,o),v(Wo.$$.fragment,o),v(Ro.$$.fragment,o),v(Uo.$$.fragment,o),v(Ho.$$.fragment,o),v(Ko.$$.fragment,o),v(Vo.$$.fragment,o),v(Jo.$$.fragment,o),v(Vt.$$.fragment,o),v(Zo.$$.fragment,o),v(Jt.$$.fragment,o),v(en.$$.fragment,o),v(tn.$$.fragment,o),v(on.$$.fragment,o),v(Xt.$$.fragment,o),v(rn.$$.fragment,o),v(Yt.$$.fragment,o),v(ln.$$.fragment,o),v(cn.$$.fragment,o),v(bn.$$.fragment,o),v(eo.$$.fragment,o),v(kn.$$.fragment,o),v(vn.$$.fragment,o),v(yn.$$.fragment,o),v(Tn.$$.fragment,o),v(wn.$$.fragment,o),v(Bn.$$.fragment,o),v(zn.$$.fragment,o),v(jn.$$.fragment,o),v(oo.$$.fragment,o),v(Nn.$$.fragment,o),v(An.$$.fragment,o),v(On.$$.fragment,o),v(In.$$.fragment,o),v(Sn.$$.fragment,o),Kr=!1},d(o){t(u),o&&t(x),o&&t(f),y(B),o&&t(he),o&&t(q),o&&t(Fe),o&&t(G),y(U),o&&t(J),o&&t(Q),o&&t(A),o&&t(ue),o&&t($e),o&&t(me),o&&t(qe),o&&t(E),o&&t(Ve),o&&t(j),y(we),o&&t(Je),o&&t(O),o&&t(Tr),o&&t(_t),y(fo),o&&t(wr),o&&t(Un),o&&t(Br),y(_o,o),o&&t(zr),o&&t(gt),y(go),o&&t(xr),o&&t(re),y(bo),y(vo),o&&t(Fr),o&&t(vt),y(yo),o&&t($r),o&&t(de),y(To),y(Bo),o&&t(qr),o&&t(yt),y(zo),o&&t(Mr),o&&t(ie),y(xo),y(qo),o&&t(Er),o&&t(Tt),y(Mo),o&&t(Cr),o&&t(We),o&&t(jr),o&&t(ze),y(Eo),y(No),y(Wt),y(Ao),o&&t(Pr),o&&t(Bt),y(Oo),o&&t(Nr),o&&t(Re),o&&t(Ar),o&&t(xe),y(Io),y(Go),y(Ut),y(Wo),o&&t(Or),o&&t(xt),y(Ro),o&&t(Ir),o&&t(Ft),y(Uo),y(Ho),y(Ko),o&&t(Sr),o&&t($t),y(Vo),o&&t(Lr),o&&t(le),y(Jo),y(Vt),y(Zo),y(Jt),y(en),o&&t(Dr),o&&t(Mt),y(tn),o&&t(Gr),o&&t(ce),y(on),y(Xt),y(rn),y(Yt),o&&t(Wr),o&&t(Ct),y(ln),o&&t(Rr),o&&t(I),y(cn),y(bn),y(eo),y(kn),y(vn),y(yn),y(Tn),y(wn),o&&t(Ur),o&&t(Pt),y(Bn),o&&t(Hr),o&&t(S),y(zn),y(jn),y(oo),y(Nn),y(An),y(On),y(In),y(Sn)}}}const Of={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function If(D,u,x){let{fw:f}=u;return D.$$set=T=>{"fw"in T&&x(0,f=T.fw)},[f]}class Uf extends Bf{constructor(u){super();zf(this,u,If,Af,xf,{fw:0})}}export{Uf as default,Of as metadata};
