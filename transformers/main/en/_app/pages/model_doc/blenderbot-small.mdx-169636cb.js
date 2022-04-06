import{S as Hu,i as Ku,s as Qu,e as n,k as l,w as f,t as r,M as Vu,c as a,d as o,m as i,a as s,x as _,h as d,b as c,F as e,g as p,y as g,q as b,o as k,B as y,v as Ju}from"../../chunks/vendor-6b77c823.js";import{T as Bn}from"../../chunks/Tip-39098574.js";import{D as M}from"../../chunks/Docstring-abef54e3.js";import{C as ro}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as qe}from"../../chunks/IconCopyLink-7a11ce68.js";function Xu(Y){let h,x,v,T,z;return{c(){h=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=a(S,"P",{});var w=s(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(w,"CODE",{});var F=s(v);T=d(F,"Module"),F.forEach(o),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,h,w),e(h,x),e(h,v),e(v,T),e(h,z)},d(S){S&&o(h)}}}function Yu(Y){let h,x,v,T,z;return{c(){h=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=a(S,"P",{});var w=s(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(w,"CODE",{});var F=s(v);T=d(F,"Module"),F.forEach(o),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,h,w),e(h,x),e(h,v),e(v,T),e(h,z)},d(S){S&&o(h)}}}function Zu(Y){let h,x,v,T,z,S,w,F,Ce,ue,B,je,U,Oe,Pe,W,Le,Ne,K,Q,Ie,Z,C,P,fe,ae,$e,V,A,Te,se,L,we,re,Ee,ee,de,le,Ae,J,Me,R,De;return{c(){h=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),v=l(),T=n("ul"),z=n("li"),S=r("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),F=n("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=l(),B=n("p"),je=r("This second option is useful when using "),U=n("code"),Oe=r("tf.keras.Model.fit"),Pe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),Le=r("model(inputs)"),Ne=r("."),K=l(),Q=n("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),C=n("ul"),P=n("li"),fe=r("a single Tensor with "),ae=n("code"),$e=r("input_ids"),V=r(" only and nothing else: "),A=n("code"),Te=r("model(input_ids)"),se=l(),L=n("li"),we=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),Ee=r("model([input_ids, attention_mask])"),ee=r(" or "),de=n("code"),le=r("model([input_ids, attention_mask, token_type_ids])"),Ae=l(),J=n("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){h=a(u,"P",{});var q=s(h);x=d(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),v=i(u),T=a(u,"UL",{});var ie=s(T);z=a(ie,"LI",{});var lo=s(z);S=d(lo,"having all inputs as keyword arguments (like PyTorch models), or"),lo.forEach(o),w=i(ie),F=a(ie,"LI",{});var Re=s(F);Ce=d(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(o),ie.forEach(o),ue=i(u),B=a(u,"P",{});var j=s(B);je=d(j,"This second option is useful when using "),U=a(j,"CODE",{});var io=s(U);Oe=d(io,"tf.keras.Model.fit"),io.forEach(o),Pe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a(j,"CODE",{});var Se=s(W);Le=d(Se,"model(inputs)"),Se.forEach(o),Ne=d(j,"."),j.forEach(o),K=i(u),Q=a(u,"P",{});var co=s(Q);Ie=d(co,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),co.forEach(o),Z=i(u),C=a(u,"UL",{});var X=s(C);P=a(X,"LI",{});var D=s(P);fe=d(D,"a single Tensor with "),ae=a(D,"CODE",{});var po=s(ae);$e=d(po,"input_ids"),po.forEach(o),V=d(D," only and nothing else: "),A=a(D,"CODE",{});var mo=s(A);Te=d(mo,"model(input_ids)"),mo.forEach(o),D.forEach(o),se=i(X),L=a(X,"LI",{});var oe=s(L);we=d(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=a(oe,"CODE",{});var ce=s(re);Ee=d(ce,"model([input_ids, attention_mask])"),ce.forEach(o),ee=d(oe," or "),de=a(oe,"CODE",{});var _e=s(de);le=d(_e,"model([input_ids, attention_mask, token_type_ids])"),_e.forEach(o),oe.forEach(o),Ae=i(X),J=a(X,"LI",{});var ze=s(J);Me=d(ze,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(ze,"CODE",{});var Be=s(R);De=d(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(o),ze.forEach(o),X.forEach(o)},m(u,q){p(u,h,q),e(h,x),p(u,v,q),p(u,T,q),e(T,z),e(z,S),e(T,w),e(T,F),e(F,Ce),p(u,ue,q),p(u,B,q),e(B,je),e(B,U),e(U,Oe),e(B,Pe),e(B,W),e(W,Le),e(B,Ne),p(u,K,q),p(u,Q,q),e(Q,Ie),p(u,Z,q),p(u,C,q),e(C,P),e(P,fe),e(P,ae),e(ae,$e),e(P,V),e(P,A),e(A,Te),e(C,se),e(C,L),e(L,we),e(L,re),e(re,Ee),e(L,ee),e(L,de),e(de,le),e(C,Ae),e(C,J),e(J,Me),e(J,R),e(R,De)},d(u){u&&o(h),u&&o(v),u&&o(T),u&&o(ue),u&&o(B),u&&o(K),u&&o(Q),u&&o(Z),u&&o(C)}}}function ef(Y){let h,x,v,T,z;return{c(){h=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=a(S,"P",{});var w=s(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(w,"CODE",{});var F=s(v);T=d(F,"Module"),F.forEach(o),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,h,w),e(h,x),e(h,v),e(v,T),e(h,z)},d(S){S&&o(h)}}}function of(Y){let h,x,v,T,z,S,w,F,Ce,ue,B,je,U,Oe,Pe,W,Le,Ne,K,Q,Ie,Z,C,P,fe,ae,$e,V,A,Te,se,L,we,re,Ee,ee,de,le,Ae,J,Me,R,De;return{c(){h=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),v=l(),T=n("ul"),z=n("li"),S=r("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),F=n("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=l(),B=n("p"),je=r("This second option is useful when using "),U=n("code"),Oe=r("tf.keras.Model.fit"),Pe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),Le=r("model(inputs)"),Ne=r("."),K=l(),Q=n("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),C=n("ul"),P=n("li"),fe=r("a single Tensor with "),ae=n("code"),$e=r("input_ids"),V=r(" only and nothing else: "),A=n("code"),Te=r("model(input_ids)"),se=l(),L=n("li"),we=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),Ee=r("model([input_ids, attention_mask])"),ee=r(" or "),de=n("code"),le=r("model([input_ids, attention_mask, token_type_ids])"),Ae=l(),J=n("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){h=a(u,"P",{});var q=s(h);x=d(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),v=i(u),T=a(u,"UL",{});var ie=s(T);z=a(ie,"LI",{});var lo=s(z);S=d(lo,"having all inputs as keyword arguments (like PyTorch models), or"),lo.forEach(o),w=i(ie),F=a(ie,"LI",{});var Re=s(F);Ce=d(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(o),ie.forEach(o),ue=i(u),B=a(u,"P",{});var j=s(B);je=d(j,"This second option is useful when using "),U=a(j,"CODE",{});var io=s(U);Oe=d(io,"tf.keras.Model.fit"),io.forEach(o),Pe=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a(j,"CODE",{});var Se=s(W);Le=d(Se,"model(inputs)"),Se.forEach(o),Ne=d(j,"."),j.forEach(o),K=i(u),Q=a(u,"P",{});var co=s(Q);Ie=d(co,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),co.forEach(o),Z=i(u),C=a(u,"UL",{});var X=s(C);P=a(X,"LI",{});var D=s(P);fe=d(D,"a single Tensor with "),ae=a(D,"CODE",{});var po=s(ae);$e=d(po,"input_ids"),po.forEach(o),V=d(D," only and nothing else: "),A=a(D,"CODE",{});var mo=s(A);Te=d(mo,"model(input_ids)"),mo.forEach(o),D.forEach(o),se=i(X),L=a(X,"LI",{});var oe=s(L);we=d(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=a(oe,"CODE",{});var ce=s(re);Ee=d(ce,"model([input_ids, attention_mask])"),ce.forEach(o),ee=d(oe," or "),de=a(oe,"CODE",{});var _e=s(de);le=d(_e,"model([input_ids, attention_mask, token_type_ids])"),_e.forEach(o),oe.forEach(o),Ae=i(X),J=a(X,"LI",{});var ze=s(J);Me=d(ze,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(ze,"CODE",{});var Be=s(R);De=d(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(o),ze.forEach(o),X.forEach(o)},m(u,q){p(u,h,q),e(h,x),p(u,v,q),p(u,T,q),e(T,z),e(z,S),e(T,w),e(T,F),e(F,Ce),p(u,ue,q),p(u,B,q),e(B,je),e(B,U),e(U,Oe),e(B,Pe),e(B,W),e(W,Le),e(B,Ne),p(u,K,q),p(u,Q,q),e(Q,Ie),p(u,Z,q),p(u,C,q),e(C,P),e(P,fe),e(P,ae),e(ae,$e),e(P,V),e(P,A),e(A,Te),e(C,se),e(C,L),e(L,we),e(L,re),e(re,Ee),e(L,ee),e(L,de),e(de,le),e(C,Ae),e(C,J),e(J,Me),e(J,R),e(R,De)},d(u){u&&o(h),u&&o(v),u&&o(T),u&&o(ue),u&&o(B),u&&o(K),u&&o(Q),u&&o(Z),u&&o(C)}}}function tf(Y){let h,x,v,T,z;return{c(){h=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=a(S,"P",{});var w=s(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(w,"CODE",{});var F=s(v);T=d(F,"Module"),F.forEach(o),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,h,w),e(h,x),e(h,v),e(v,T),e(h,z)},d(S){S&&o(h)}}}function nf(Y){let h,x,v,T,z;return{c(){h=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),T=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=a(S,"P",{});var w=s(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(w,"CODE",{});var F=s(v);T=d(F,"Module"),F.forEach(o),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,h,w),e(h,x),e(h,v),e(v,T),e(h,z)},d(S){S&&o(h)}}}function af(Y){let h,x,v,T,z,S,w,F,Ce,ue,B,je,U,Oe,Pe,W,Le,Ne,K,Q,Ie,Z,C,P,fe,ae,$e,V,A,Te,se,L,we,re,Ee,ee,de,le,Ae,J,Me,R,De,u,q,ie,lo,Re,j,io,Se,co,X,D,po,mo,oe,ce,_e,ze,Be,md,la,hd,ur,pe,ot,ud,ho,fd,xn,_d,gd,tt,bd,kd,yd,uo,vd,Fn,Td,wd,qn,Sd,zd,Bd,ia,xd,Fd,nt,fr,fo,Eo,ca,at,qd,pa,$d,_r,G,st,Ed,ma,Md,Cd,rt,jd,$n,Od,Pd,Ld,He,dt,Nd,ha,Id,Ad,ua,Dd,Gd,Mo,lt,Ud,_o,Wd,fa,Rd,Hd,_a,Kd,Qd,Vd,Ke,it,Jd,En,Xd,Mn,Yd,Zd,ga,el,ol,Cn,ct,gr,go,Co,ba,pt,tl,ka,nl,br,Ge,mt,al,ht,sl,ya,rl,dl,ll,jo,ut,il,va,cl,kr,bo,Oo,Ta,ft,pl,wa,ml,yr,xe,_t,hl,gt,ul,jn,fl,_l,gl,bt,bl,kt,kl,yl,vl,ge,yt,Tl,ko,wl,On,Sl,zl,Sa,Bl,xl,Fl,Po,ql,za,$l,El,vt,vr,yo,Lo,Ba,Tt,Ml,xa,Cl,Tr,Fe,wt,jl,St,Ol,Pn,Pl,Ll,Nl,zt,Il,Bt,Al,Dl,Gl,be,xt,Ul,vo,Wl,Ln,Rl,Hl,Fa,Kl,Ql,Vl,No,Jl,qa,Xl,Yl,Ft,wr,To,Io,$a,qt,Zl,Ea,ei,Sr,wo,$t,oi,Qe,Et,ti,Ma,ni,ai,Mt,zr,So,Ao,Ca,Ct,si,ja,ri,Br,me,jt,di,Ot,li,Nn,ii,ci,pi,Pt,mi,Lt,hi,ui,fi,Do,_i,ke,Nt,gi,zo,bi,In,ki,yi,Oa,vi,Ti,wi,Go,Si,Pa,zi,Bi,It,xr,Bo,Uo,La,At,xi,Na,Fi,Fr,he,Dt,qi,Gt,$i,An,Ei,Mi,Ci,Ut,ji,Wt,Oi,Pi,Li,Wo,Ni,O,Rt,Ii,xo,Ai,Dn,Di,Gi,Ia,Ui,Wi,Ri,Ro,Hi,Aa,Ki,Qi,Da,Ga,Ua,Wa,Vi,Ji,Ra,Ha,Ka,Qa,Xi,Yi,Va,Ja,Xa,Ya,Zi,ec,Za,es,os,Ht,oc,ts,tc,nc,ac,ns,as,ss,rs,sc,qr,Fo,Ho,ds,Kt,rc,ls,dc,$r,N,Qt,lc,Vt,ic,Gn,cc,pc,mc,Jt,hc,Xt,uc,fc,_c,is,gc,bc,Ue,cs,Yt,kc,yc,ps,Zt,vc,Tc,ms,en,wc,Sc,hs,on,zc,Bc,Ve,tn,xc,us,Fc,qc,nn,$c,Je,an,Ec,fs,Mc,Cc,sn,jc,Xe,rn,Oc,_s,Pc,Lc,dn,Er,qo,Ko,gs,ln,Nc,bs,Ic,Mr,I,cn,Ac,pn,Dc,Un,Gc,Uc,Wc,mn,Rc,hn,Hc,Kc,Qc,ks,Vc,Jc,We,ys,un,Xc,Yc,vs,fn,Zc,ep,Ts,_n,op,tp,ws,gn,np,ap,$,bn,sp,$o,rp,Ss,dp,lp,zs,ip,cp,pp,Qo,mp,Bs,hp,up,xs,Fs,qs,$s,fp,_p,Es,Ms,Cs,js,gp,bp,Os,Ps,Ls,Ns,kp,yp,Is,As,kn,Vo,Jo,Ds,yn,vp,Gs,Tp,wp,Us,Sp,zp,Ws,Bp,xp,Rs,Hs,Ks,Qs,Fp,qp,Vs,Js,Xs,Ys,$p,Ep,Zs,er,or,tr,Mp,Cp,nr,ar,sr,rr,jp,Op,Ye,vn,Pp,dr,Lp,Np,Tn,Ip,Ze,wn,Ap,lr,Dp,Gp,Sn,Cr;return S=new qe({}),se=new qe({}),Be=new qe({}),ot=new M({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L36",parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BlenderbotSmallConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BlenderbotSmallConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BlenderbotSmallConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BlenderbotSmallConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BlenderbotSmallConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BlenderbotSmallConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BlenderbotSmallConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BlenderbotSmallConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BlenderbotSmallConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BlenderbotSmallConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BlenderbotSmallConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BlenderbotSmallConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BlenderbotSmallConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BlenderbotSmallConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotSmallConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),nt=new ro({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

# Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration
configuration = BlenderbotSmallConfig()

# Initializing a model from the facebook/blenderbot_small-90M style configuration
model = BlenderbotSmallModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallModel, BlenderbotSmallConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotSmallConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),at=new qe({}),st=new M({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L67",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),dt=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2876",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),lt=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils.py#L842",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),it=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2856",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ct=new M({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L209"}}),pt=new qe({}),mt=new M({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L50",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}]}}),ut=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L96",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ft=new qe({}),_t=new M({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1074",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yt=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1101",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotSmallModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotSmallModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),Po=new Bn({props:{$$slots:{default:[Xu]},$$scope:{ctx:Y}}}),vt=new ro({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

model = BlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_inputs = tokenizer("Studies show that", return_tensors="pt")  # Batch size 1
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">512</span>]`}}),Tt=new qe({}),wt=new M({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1200",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xt=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1244",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),No=new Bn({props:{$$slots:{default:[Yu]},$$scope:{ctx:Y}}}),Ft=new ro({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

mname = "facebook/blenderbot_small-90M"
model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
print("Human: ", UTTERANCE)

inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])

REPLY = "I'm not sure"
print("Human: ", REPLY)

NEXT_UTTERANCE = (
    "My friends are cool but they eat too many carbs.</s> <s>what kind of carbs do they eat? "
    "i don't know much about carbs</s> "
    "<s> I'm not sure."
)
inputs = tokenizer([NEXT_UTTERANCE], return_tensors="pt")
next_reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
Human:  My friends are cool but they eat too many carbs.

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])
Bot:  what kind of carbs do they eat? i don<span class="hljs-string">&#x27;t know much about carbs.

&gt;&gt;&gt; REPLY = &quot;I&#x27;</span>m <span class="hljs-keyword">not</span> sure<span class="hljs-string">&quot;
&gt;&gt;&gt; print(&quot;</span>Human: <span class="hljs-string">&quot;, REPLY)
Human: I&#x27;m not sure

&gt;&gt;&gt; NEXT_UTTERANCE = (
...     &quot;</span>My friends are cool but they eat too many carbs.&lt;/s&gt; &lt;s&gt;what kind of carbs do they eat? <span class="hljs-string">&quot;
...     &quot;</span>i don<span class="hljs-string">&#x27;t know much about carbs&lt;/s&gt; &quot;
...     &quot;&lt;s&gt; I&#x27;</span>m <span class="hljs-keyword">not</span> sure.<span class="hljs-string">&quot;
... )
&gt;&gt;&gt; inputs = tokenizer([NEXT_UTTERANCE], return_tensors=&quot;</span>pt<span class="hljs-string">&quot;)
&gt;&gt;&gt; next_reply_ids = model.generate(**inputs)
&gt;&gt;&gt; print(&quot;</span>Bot: <span class="hljs-string">&quot;, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])
Bot:  they eat a lot of carbs. carbs are high in fat, protein, and carbohydrates.</span>`}}),qt=new qe({}),$t=new M({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1380"}}),Et=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1411",parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),Mt=new ro({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = BlenderbotSmallForCausalLM.from_pretrained(
    "facebook/blenderbot_small-90M", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),Ct=new qe({}),jt=new M({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1111",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Do=new Bn({props:{$$slots:{default:[Zu]},$$scope:{ctx:Y}}}),Nt=new M({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1123",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotSmallModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotSmallModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotSmallModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotSmallModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotSmallModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),Go=new Bn({props:{$$slots:{default:[ef]},$$scope:{ctx:Y}}}),It=new ro({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
import tensorflow as tf

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = TFBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, TFBlenderbotSmallModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),At=new qe({}),Dt=new M({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1198",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wo=new Bn({props:{$$slots:{default:[of]},$$scope:{ctx:Y}}}),Rt=new M({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1231",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),Ro=new Bn({props:{$$slots:{default:[tf]},$$scope:{ctx:Y}}}),Kt=new qe({}),Qt=new M({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1203",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),tn=new M({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1139",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),nn=new ro({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),an=new M({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L960",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
`}}),sn=new ro({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),rn=new M({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1023",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
`}}),dn=new ro({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),ln=new qe({}),cn=new M({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1291",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),bn=new M({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1139",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),Qo=new Bn({props:{$$slots:{default:[nf]},$$scope:{ctx:Y}}}),yn=new qe({}),vn=new M({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L960",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
`}}),Tn=new ro({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),wn=new M({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1295",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
`}}),Sn=new ro({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=n("meta"),x=l(),v=n("h1"),T=n("a"),z=n("span"),f(S.$$.fragment),w=l(),F=n("span"),Ce=r("Blenderbot Small"),ue=l(),B=n("p"),je=r("Note that "),U=n("a"),Oe=r("BlenderbotSmallModel"),Pe=r(` and
`),W=n("a"),Le=r("BlenderbotSmallForConditionalGeneration"),Ne=r(` are only used in combination with the checkpoint
`),K=n("a"),Q=r("facebook/blenderbot-90M"),Ie=r(`. Larger Blenderbot checkpoints should
instead be used with `),Z=n("a"),C=r("BlenderbotModel"),P=r(` and
`),fe=n("a"),ae=r("BlenderbotForConditionalGeneration"),$e=l(),V=n("h2"),A=n("a"),Te=n("span"),f(se.$$.fragment),L=l(),we=n("span"),re=r("Overview"),Ee=l(),ee=n("p"),de=r("The Blender chatbot model was proposed in "),le=n("a"),Ae=r("Recipes for building an open-domain chatbot"),J=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Me=l(),R=n("p"),De=r("The abstract of the paper is the following:"),u=l(),q=n("p"),ie=n("em"),lo=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Re=l(),j=n("p"),io=r("This model was contributed by "),Se=n("a"),co=r("patrickvonplaten"),X=r(`. The authors\u2019 code can be
found `),D=n("a"),po=r("here"),mo=r(" ."),oe=l(),ce=n("h2"),_e=n("a"),ze=n("span"),f(Be.$$.fragment),md=l(),la=n("span"),hd=r("BlenderbotSmallConfig"),ur=l(),pe=n("div"),f(ot.$$.fragment),ud=l(),ho=n("p"),fd=r("This is the configuration class to store the configuration of a "),xn=n("a"),_d=r("BlenderbotSmallModel"),gd=r(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),tt=n("a"),bd=r("facebook/blenderbot_small-90M"),kd=r(" architecture."),yd=l(),uo=n("p"),vd=r("Configuration objects inherit from "),Fn=n("a"),Td=r("PretrainedConfig"),wd=r(` and can be used to control the model outputs. Read the
documentation from `),qn=n("a"),Sd=r("PretrainedConfig"),zd=r(" for more information."),Bd=l(),ia=n("p"),xd=r("Example:"),Fd=l(),f(nt.$$.fragment),fr=l(),fo=n("h2"),Eo=n("a"),ca=n("span"),f(at.$$.fragment),qd=l(),pa=n("span"),$d=r("BlenderbotSmallTokenizer"),_r=l(),G=n("div"),f(st.$$.fragment),Ed=l(),ma=n("p"),Md=r("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Cd=l(),rt=n("p"),jd=r("This tokenizer inherits from "),$n=n("a"),Od=r("PreTrainedTokenizer"),Pd=r(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ld=l(),He=n("div"),f(dt.$$.fragment),Nd=l(),ha=n("p"),Id=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Ad=l(),ua=n("p"),Dd=r("This implementation does not add special tokens and this method should be overridden in a subclass."),Gd=l(),Mo=n("div"),f(lt.$$.fragment),Ud=l(),_o=n("p"),Wd=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=n("code"),Rd=r("prepare_for_model"),Hd=r(" or "),_a=n("code"),Kd=r("encode_plus"),Qd=r(" methods."),Vd=l(),Ke=n("div"),f(it.$$.fragment),Jd=l(),En=n("p"),Xd=r("Create the token type IDs corresponding to the sequences passed. "),Mn=n("a"),Yd=r(`What are token type
IDs?`),Zd=l(),ga=n("p"),el=r("Should be overridden in a subclass if the model has a special way of building those."),ol=l(),Cn=n("div"),f(ct.$$.fragment),gr=l(),go=n("h2"),Co=n("a"),ba=n("span"),f(pt.$$.fragment),tl=l(),ka=n("span"),nl=r("BlenderbotSmallTokenizerFast"),br=l(),Ge=n("div"),f(mt.$$.fragment),al=l(),ht=n("p"),sl=r("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ya=n("em"),rl=r("tokenizers"),dl=r(" library)."),ll=l(),jo=n("div"),f(ut.$$.fragment),il=l(),va=n("p"),cl=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),kr=l(),bo=n("h2"),Oo=n("a"),Ta=n("span"),f(ft.$$.fragment),pl=l(),wa=n("span"),ml=r("BlenderbotSmallModel"),yr=l(),xe=n("div"),f(_t.$$.fragment),hl=l(),gt=n("p"),ul=r(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=n("a"),fl=r("PreTrainedModel"),_l=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gl=l(),bt=n("p"),bl=r("This model is also a PyTorch "),kt=n("a"),kl=r("torch.nn.Module"),yl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vl=l(),ge=n("div"),f(yt.$$.fragment),Tl=l(),ko=n("p"),wl=r("The "),On=n("a"),Sl=r("BlenderbotSmallModel"),zl=r(" forward method, overrides the "),Sa=n("code"),Bl=r("__call__"),xl=r(" special method."),Fl=l(),f(Po.$$.fragment),ql=l(),za=n("p"),$l=r("Example:"),El=l(),f(vt.$$.fragment),vr=l(),yo=n("h2"),Lo=n("a"),Ba=n("span"),f(Tt.$$.fragment),Ml=l(),xa=n("span"),Cl=r("BlenderbotSmallForConditionalGeneration"),Tr=l(),Fe=n("div"),f(wt.$$.fragment),jl=l(),St=n("p"),Ol=r(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pn=n("a"),Pl=r("PreTrainedModel"),Ll=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl=l(),zt=n("p"),Il=r("This model is also a PyTorch "),Bt=n("a"),Al=r("torch.nn.Module"),Dl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gl=l(),be=n("div"),f(xt.$$.fragment),Ul=l(),vo=n("p"),Wl=r("The "),Ln=n("a"),Rl=r("BlenderbotSmallForConditionalGeneration"),Hl=r(" forward method, overrides the "),Fa=n("code"),Kl=r("__call__"),Ql=r(" special method."),Vl=l(),f(No.$$.fragment),Jl=l(),qa=n("p"),Xl=r("Conversation example:"),Yl=l(),f(Ft.$$.fragment),wr=l(),To=n("h2"),Io=n("a"),$a=n("span"),f(qt.$$.fragment),Zl=l(),Ea=n("span"),ei=r("BlenderbotSmallForCausalLM"),Sr=l(),wo=n("div"),f($t.$$.fragment),oi=l(),Qe=n("div"),f(Et.$$.fragment),ti=l(),Ma=n("p"),ni=r("Example:"),ai=l(),f(Mt.$$.fragment),zr=l(),So=n("h2"),Ao=n("a"),Ca=n("span"),f(Ct.$$.fragment),si=l(),ja=n("span"),ri=r("TFBlenderbotSmallModel"),Br=l(),me=n("div"),f(jt.$$.fragment),di=l(),Ot=n("p"),li=r(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=n("a"),ii=r("TFPreTrainedModel"),ci=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pi=l(),Pt=n("p"),mi=r("This model is also a "),Lt=n("a"),hi=r("tf.keras.Model"),ui=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fi=l(),f(Do.$$.fragment),_i=l(),ke=n("div"),f(Nt.$$.fragment),gi=l(),zo=n("p"),bi=r("The "),In=n("a"),ki=r("TFBlenderbotSmallModel"),yi=r(" forward method, overrides the "),Oa=n("code"),vi=r("__call__"),Ti=r(" special method."),wi=l(),f(Go.$$.fragment),Si=l(),Pa=n("p"),zi=r("Example:"),Bi=l(),f(It.$$.fragment),xr=l(),Bo=n("h2"),Uo=n("a"),La=n("span"),f(At.$$.fragment),xi=l(),Na=n("span"),Fi=r("TFBlenderbotSmallForConditionalGeneration"),Fr=l(),he=n("div"),f(Dt.$$.fragment),qi=l(),Gt=n("p"),$i=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=n("a"),Ei=r("TFPreTrainedModel"),Mi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ci=l(),Ut=n("p"),ji=r("This model is also a "),Wt=n("a"),Oi=r("tf.keras.Model"),Pi=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Li=l(),f(Wo.$$.fragment),Ni=l(),O=n("div"),f(Rt.$$.fragment),Ii=l(),xo=n("p"),Ai=r("The "),Dn=n("a"),Di=r("TFBlenderbotSmallForConditionalGeneration"),Gi=r(" forward method, overrides the "),Ia=n("code"),Ui=r("__call__"),Wi=r(" special method."),Ri=l(),f(Ro.$$.fragment),Hi=l(),Aa=n("p"),Ki=r("Conversation example::"),Qi=l(),Da=n("blockquote"),Ga=n("blockquote"),Ua=n("blockquote"),Wa=n("p"),Vi=r(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Ji=l(),Ra=n("blockquote"),Ha=n("blockquote"),Ka=n("blockquote"),Qa=n("p"),Xi=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Yi=l(),Va=n("blockquote"),Ja=n("blockquote"),Xa=n("blockquote"),Ya=n("p"),Zi=r(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),ec=l(),Za=n("blockquote"),es=n("blockquote"),os=n("blockquote"),Ht=n("p"),oc=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),ts=n("s"),tc=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),nc=r(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),ac=l(),ns=n("blockquote"),as=n("blockquote"),ss=n("blockquote"),rs=n("p"),sc=r(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),qr=l(),Fo=n("h2"),Ho=n("a"),ds=n("span"),f(Kt.$$.fragment),rc=l(),ls=n("span"),dc=r("FlaxBlenderbotSmallModel"),$r=l(),N=n("div"),f(Qt.$$.fragment),lc=l(),Vt=n("p"),ic=r(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=n("a"),cc=r("FlaxPreTrainedModel"),pc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mc=l(),Jt=n("p"),hc=r(`This model is also a Flax Linen
`),Xt=n("a"),uc=r("flax.nn.Module"),fc=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_c=l(),is=n("p"),gc=r("Finally, this model supports inherent JAX features such as:"),bc=l(),Ue=n("ul"),cs=n("li"),Yt=n("a"),kc=r("Just-In-Time (JIT) compilation"),yc=l(),ps=n("li"),Zt=n("a"),vc=r("Automatic Differentiation"),Tc=l(),ms=n("li"),en=n("a"),wc=r("Vectorization"),Sc=l(),hs=n("li"),on=n("a"),zc=r("Parallelization"),Bc=l(),Ve=n("div"),f(tn.$$.fragment),xc=l(),us=n("p"),Fc=r("Example:"),qc=l(),f(nn.$$.fragment),$c=l(),Je=n("div"),f(an.$$.fragment),Ec=l(),fs=n("p"),Mc=r("Example:"),Cc=l(),f(sn.$$.fragment),jc=l(),Xe=n("div"),f(rn.$$.fragment),Oc=l(),_s=n("p"),Pc=r("Example:"),Lc=l(),f(dn.$$.fragment),Er=l(),qo=n("h2"),Ko=n("a"),gs=n("span"),f(ln.$$.fragment),Nc=l(),bs=n("span"),Ic=r("FlaxBlenderbotForConditionalGeneration"),Mr=l(),I=n("div"),f(cn.$$.fragment),Ac=l(),pn=n("p"),Dc=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Un=n("a"),Gc=r("FlaxPreTrainedModel"),Uc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc=l(),mn=n("p"),Rc=r(`This model is also a Flax Linen
`),hn=n("a"),Hc=r("flax.nn.Module"),Kc=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qc=l(),ks=n("p"),Vc=r("Finally, this model supports inherent JAX features such as:"),Jc=l(),We=n("ul"),ys=n("li"),un=n("a"),Xc=r("Just-In-Time (JIT) compilation"),Yc=l(),vs=n("li"),fn=n("a"),Zc=r("Automatic Differentiation"),ep=l(),Ts=n("li"),_n=n("a"),op=r("Vectorization"),tp=l(),ws=n("li"),gn=n("a"),np=r("Parallelization"),ap=l(),$=n("div"),f(bn.$$.fragment),sp=l(),$o=n("p"),rp=r("The "),Ss=n("code"),dp=r("FlaxBlenderbotSmallPreTrainedModel"),lp=r(" forward method, overrides the "),zs=n("code"),ip=r("__call__"),cp=r(" special method."),pp=l(),f(Qo.$$.fragment),mp=l(),Bs=n("p"),hp=r("Summarization example:"),up=l(),xs=n("blockquote"),Fs=n("blockquote"),qs=n("blockquote"),$s=n("p"),fp=r("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),_p=l(),Es=n("blockquote"),Ms=n("blockquote"),Cs=n("blockquote"),js=n("p"),gp=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),bp=l(),Os=n("blockquote"),Ps=n("blockquote"),Ls=n("blockquote"),Ns=n("p"),kp=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),yp=l(),Is=n("blockquote"),As=n("blockquote"),kn=n("blockquote"),Vo=n("h1"),Jo=n("a"),Ds=n("span"),f(yn.$$.fragment),vp=l(),Gs=n("span"),Tp=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),wp=l(),Us=n("p"),Sp=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),zp=l(),Ws=n("p"),Bp=r("Mask filling example:"),xp=l(),Rs=n("blockquote"),Hs=n("blockquote"),Ks=n("blockquote"),Qs=n("p"),Fp=r(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),qp=l(),Vs=n("blockquote"),Js=n("blockquote"),Xs=n("blockquote"),Ys=n("p"),$p=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Ep=l(),Zs=n("blockquote"),er=n("blockquote"),or=n("blockquote"),tr=n("p"),Mp=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Cp=l(),nr=n("blockquote"),ar=n("blockquote"),sr=n("blockquote"),rr=n("p"),jp=r("tokenizer.decode(predictions).split()"),Op=l(),Ye=n("div"),f(vn.$$.fragment),Pp=l(),dr=n("p"),Lp=r("Example:"),Np=l(),f(Tn.$$.fragment),Ip=l(),Ze=n("div"),f(wn.$$.fragment),Ap=l(),lr=n("p"),Dp=r("Example:"),Gp=l(),f(Sn.$$.fragment),this.h()},l(t){const m=Vu('[data-svelte="svelte-1phssyn"]',document.head);h=a(m,"META",{name:!0,content:!0}),m.forEach(o),x=i(t),v=a(t,"H1",{class:!0});var zn=s(v);T=a(zn,"A",{id:!0,class:!0,href:!0});var ir=s(T);z=a(ir,"SPAN",{});var cr=s(z);_(S.$$.fragment,cr),cr.forEach(o),ir.forEach(o),w=i(zn),F=a(zn,"SPAN",{});var pr=s(F);Ce=d(pr,"Blenderbot Small"),pr.forEach(o),zn.forEach(o),ue=i(t),B=a(t,"P",{});var ye=s(B);je=d(ye,"Note that "),U=a(ye,"A",{href:!0});var mr=s(U);Oe=d(mr,"BlenderbotSmallModel"),mr.forEach(o),Pe=d(ye,` and
`),W=a(ye,"A",{href:!0});var hr=s(W);Le=d(hr,"BlenderbotSmallForConditionalGeneration"),hr.forEach(o),Ne=d(ye,` are only used in combination with the checkpoint
`),K=a(ye,"A",{href:!0,rel:!0});var Wp=s(K);Q=d(Wp,"facebook/blenderbot-90M"),Wp.forEach(o),Ie=d(ye,`. Larger Blenderbot checkpoints should
instead be used with `),Z=a(ye,"A",{href:!0});var Rp=s(Z);C=d(Rp,"BlenderbotModel"),Rp.forEach(o),P=d(ye,` and
`),fe=a(ye,"A",{href:!0});var Hp=s(fe);ae=d(Hp,"BlenderbotForConditionalGeneration"),Hp.forEach(o),ye.forEach(o),$e=i(t),V=a(t,"H2",{class:!0});var jr=s(V);A=a(jr,"A",{id:!0,class:!0,href:!0});var Kp=s(A);Te=a(Kp,"SPAN",{});var Qp=s(Te);_(se.$$.fragment,Qp),Qp.forEach(o),Kp.forEach(o),L=i(jr),we=a(jr,"SPAN",{});var Vp=s(we);re=d(Vp,"Overview"),Vp.forEach(o),jr.forEach(o),Ee=i(t),ee=a(t,"P",{});var Or=s(ee);de=d(Or,"The Blender chatbot model was proposed in "),le=a(Or,"A",{href:!0,rel:!0});var Jp=s(le);Ae=d(Jp,"Recipes for building an open-domain chatbot"),Jp.forEach(o),J=d(Or,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Or.forEach(o),Me=i(t),R=a(t,"P",{});var Xp=s(R);De=d(Xp,"The abstract of the paper is the following:"),Xp.forEach(o),u=i(t),q=a(t,"P",{});var Yp=s(q);ie=a(Yp,"EM",{});var Zp=s(ie);lo=d(Zp,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Zp.forEach(o),Yp.forEach(o),Re=i(t),j=a(t,"P",{});var Wn=s(j);io=d(Wn,"This model was contributed by "),Se=a(Wn,"A",{href:!0,rel:!0});var em=s(Se);co=d(em,"patrickvonplaten"),em.forEach(o),X=d(Wn,`. The authors\u2019 code can be
found `),D=a(Wn,"A",{href:!0,rel:!0});var om=s(D);po=d(om,"here"),om.forEach(o),mo=d(Wn," ."),Wn.forEach(o),oe=i(t),ce=a(t,"H2",{class:!0});var Pr=s(ce);_e=a(Pr,"A",{id:!0,class:!0,href:!0});var tm=s(_e);ze=a(tm,"SPAN",{});var nm=s(ze);_(Be.$$.fragment,nm),nm.forEach(o),tm.forEach(o),md=i(Pr),la=a(Pr,"SPAN",{});var am=s(la);hd=d(am,"BlenderbotSmallConfig"),am.forEach(o),Pr.forEach(o),ur=i(t),pe=a(t,"DIV",{class:!0});var eo=s(pe);_(ot.$$.fragment,eo),ud=i(eo),ho=a(eo,"P",{});var Rn=s(ho);fd=d(Rn,"This is the configuration class to store the configuration of a "),xn=a(Rn,"A",{href:!0});var sm=s(xn);_d=d(sm,"BlenderbotSmallModel"),sm.forEach(o),gd=d(Rn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),tt=a(Rn,"A",{href:!0,rel:!0});var rm=s(tt);bd=d(rm,"facebook/blenderbot_small-90M"),rm.forEach(o),kd=d(Rn," architecture."),Rn.forEach(o),yd=i(eo),uo=a(eo,"P",{});var Hn=s(uo);vd=d(Hn,"Configuration objects inherit from "),Fn=a(Hn,"A",{href:!0});var dm=s(Fn);Td=d(dm,"PretrainedConfig"),dm.forEach(o),wd=d(Hn,` and can be used to control the model outputs. Read the
documentation from `),qn=a(Hn,"A",{href:!0});var lm=s(qn);Sd=d(lm,"PretrainedConfig"),lm.forEach(o),zd=d(Hn," for more information."),Hn.forEach(o),Bd=i(eo),ia=a(eo,"P",{});var im=s(ia);xd=d(im,"Example:"),im.forEach(o),Fd=i(eo),_(nt.$$.fragment,eo),eo.forEach(o),fr=i(t),fo=a(t,"H2",{class:!0});var Lr=s(fo);Eo=a(Lr,"A",{id:!0,class:!0,href:!0});var cm=s(Eo);ca=a(cm,"SPAN",{});var pm=s(ca);_(at.$$.fragment,pm),pm.forEach(o),cm.forEach(o),qd=i(Lr),pa=a(Lr,"SPAN",{});var mm=s(pa);$d=d(mm,"BlenderbotSmallTokenizer"),mm.forEach(o),Lr.forEach(o),_r=i(t),G=a(t,"DIV",{class:!0});var ve=s(G);_(st.$$.fragment,ve),Ed=i(ve),ma=a(ve,"P",{});var hm=s(ma);Md=d(hm,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),hm.forEach(o),Cd=i(ve),rt=a(ve,"P",{});var Nr=s(rt);jd=d(Nr,"This tokenizer inherits from "),$n=a(Nr,"A",{href:!0});var um=s($n);Od=d(um,"PreTrainedTokenizer"),um.forEach(o),Pd=d(Nr,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Nr.forEach(o),Ld=i(ve),He=a(ve,"DIV",{class:!0});var Kn=s(He);_(dt.$$.fragment,Kn),Nd=i(Kn),ha=a(Kn,"P",{});var fm=s(ha);Id=d(fm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),fm.forEach(o),Ad=i(Kn),ua=a(Kn,"P",{});var _m=s(ua);Dd=d(_m,"This implementation does not add special tokens and this method should be overridden in a subclass."),_m.forEach(o),Kn.forEach(o),Gd=i(ve),Mo=a(ve,"DIV",{class:!0});var Ir=s(Mo);_(lt.$$.fragment,Ir),Ud=i(Ir),_o=a(Ir,"P",{});var Qn=s(_o);Wd=d(Qn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=a(Qn,"CODE",{});var gm=s(fa);Rd=d(gm,"prepare_for_model"),gm.forEach(o),Hd=d(Qn," or "),_a=a(Qn,"CODE",{});var bm=s(_a);Kd=d(bm,"encode_plus"),bm.forEach(o),Qd=d(Qn," methods."),Qn.forEach(o),Ir.forEach(o),Vd=i(ve),Ke=a(ve,"DIV",{class:!0});var Vn=s(Ke);_(it.$$.fragment,Vn),Jd=i(Vn),En=a(Vn,"P",{});var Up=s(En);Xd=d(Up,"Create the token type IDs corresponding to the sequences passed. "),Mn=a(Up,"A",{href:!0});var km=s(Mn);Yd=d(km,`What are token type
IDs?`),km.forEach(o),Up.forEach(o),Zd=i(Vn),ga=a(Vn,"P",{});var ym=s(ga);el=d(ym,"Should be overridden in a subclass if the model has a special way of building those."),ym.forEach(o),Vn.forEach(o),ol=i(ve),Cn=a(ve,"DIV",{class:!0});var vm=s(Cn);_(ct.$$.fragment,vm),vm.forEach(o),ve.forEach(o),gr=i(t),go=a(t,"H2",{class:!0});var Ar=s(go);Co=a(Ar,"A",{id:!0,class:!0,href:!0});var Tm=s(Co);ba=a(Tm,"SPAN",{});var wm=s(ba);_(pt.$$.fragment,wm),wm.forEach(o),Tm.forEach(o),tl=i(Ar),ka=a(Ar,"SPAN",{});var Sm=s(ka);nl=d(Sm,"BlenderbotSmallTokenizerFast"),Sm.forEach(o),Ar.forEach(o),br=i(t),Ge=a(t,"DIV",{class:!0});var Jn=s(Ge);_(mt.$$.fragment,Jn),al=i(Jn),ht=a(Jn,"P",{});var Dr=s(ht);sl=d(Dr,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ya=a(Dr,"EM",{});var zm=s(ya);rl=d(zm,"tokenizers"),zm.forEach(o),dl=d(Dr," library)."),Dr.forEach(o),ll=i(Jn),jo=a(Jn,"DIV",{class:!0});var Gr=s(jo);_(ut.$$.fragment,Gr),il=i(Gr),va=a(Gr,"P",{});var Bm=s(va);cl=d(Bm,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Bm.forEach(o),Gr.forEach(o),Jn.forEach(o),kr=i(t),bo=a(t,"H2",{class:!0});var Ur=s(bo);Oo=a(Ur,"A",{id:!0,class:!0,href:!0});var xm=s(Oo);Ta=a(xm,"SPAN",{});var Fm=s(Ta);_(ft.$$.fragment,Fm),Fm.forEach(o),xm.forEach(o),pl=i(Ur),wa=a(Ur,"SPAN",{});var qm=s(wa);ml=d(qm,"BlenderbotSmallModel"),qm.forEach(o),Ur.forEach(o),yr=i(t),xe=a(t,"DIV",{class:!0});var Xo=s(xe);_(_t.$$.fragment,Xo),hl=i(Xo),gt=a(Xo,"P",{});var Wr=s(gt);ul=d(Wr,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=a(Wr,"A",{href:!0});var $m=s(jn);fl=d($m,"PreTrainedModel"),$m.forEach(o),_l=d(Wr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wr.forEach(o),gl=i(Xo),bt=a(Xo,"P",{});var Rr=s(bt);bl=d(Rr,"This model is also a PyTorch "),kt=a(Rr,"A",{href:!0,rel:!0});var Em=s(kt);kl=d(Em,"torch.nn.Module"),Em.forEach(o),yl=d(Rr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr.forEach(o),vl=i(Xo),ge=a(Xo,"DIV",{class:!0});var oo=s(ge);_(yt.$$.fragment,oo),Tl=i(oo),ko=a(oo,"P",{});var Xn=s(ko);wl=d(Xn,"The "),On=a(Xn,"A",{href:!0});var Mm=s(On);Sl=d(Mm,"BlenderbotSmallModel"),Mm.forEach(o),zl=d(Xn," forward method, overrides the "),Sa=a(Xn,"CODE",{});var Cm=s(Sa);Bl=d(Cm,"__call__"),Cm.forEach(o),xl=d(Xn," special method."),Xn.forEach(o),Fl=i(oo),_(Po.$$.fragment,oo),ql=i(oo),za=a(oo,"P",{});var jm=s(za);$l=d(jm,"Example:"),jm.forEach(o),El=i(oo),_(vt.$$.fragment,oo),oo.forEach(o),Xo.forEach(o),vr=i(t),yo=a(t,"H2",{class:!0});var Hr=s(yo);Lo=a(Hr,"A",{id:!0,class:!0,href:!0});var Om=s(Lo);Ba=a(Om,"SPAN",{});var Pm=s(Ba);_(Tt.$$.fragment,Pm),Pm.forEach(o),Om.forEach(o),Ml=i(Hr),xa=a(Hr,"SPAN",{});var Lm=s(xa);Cl=d(Lm,"BlenderbotSmallForConditionalGeneration"),Lm.forEach(o),Hr.forEach(o),Tr=i(t),Fe=a(t,"DIV",{class:!0});var Yo=s(Fe);_(wt.$$.fragment,Yo),jl=i(Yo),St=a(Yo,"P",{});var Kr=s(St);Ol=d(Kr,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pn=a(Kr,"A",{href:!0});var Nm=s(Pn);Pl=d(Nm,"PreTrainedModel"),Nm.forEach(o),Ll=d(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(o),Nl=i(Yo),zt=a(Yo,"P",{});var Qr=s(zt);Il=d(Qr,"This model is also a PyTorch "),Bt=a(Qr,"A",{href:!0,rel:!0});var Im=s(Bt);Al=d(Im,"torch.nn.Module"),Im.forEach(o),Dl=d(Qr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qr.forEach(o),Gl=i(Yo),be=a(Yo,"DIV",{class:!0});var to=s(be);_(xt.$$.fragment,to),Ul=i(to),vo=a(to,"P",{});var Yn=s(vo);Wl=d(Yn,"The "),Ln=a(Yn,"A",{href:!0});var Am=s(Ln);Rl=d(Am,"BlenderbotSmallForConditionalGeneration"),Am.forEach(o),Hl=d(Yn," forward method, overrides the "),Fa=a(Yn,"CODE",{});var Dm=s(Fa);Kl=d(Dm,"__call__"),Dm.forEach(o),Ql=d(Yn," special method."),Yn.forEach(o),Vl=i(to),_(No.$$.fragment,to),Jl=i(to),qa=a(to,"P",{});var Gm=s(qa);Xl=d(Gm,"Conversation example:"),Gm.forEach(o),Yl=i(to),_(Ft.$$.fragment,to),to.forEach(o),Yo.forEach(o),wr=i(t),To=a(t,"H2",{class:!0});var Vr=s(To);Io=a(Vr,"A",{id:!0,class:!0,href:!0});var Um=s(Io);$a=a(Um,"SPAN",{});var Wm=s($a);_(qt.$$.fragment,Wm),Wm.forEach(o),Um.forEach(o),Zl=i(Vr),Ea=a(Vr,"SPAN",{});var Rm=s(Ea);ei=d(Rm,"BlenderbotSmallForCausalLM"),Rm.forEach(o),Vr.forEach(o),Sr=i(t),wo=a(t,"DIV",{class:!0});var Jr=s(wo);_($t.$$.fragment,Jr),oi=i(Jr),Qe=a(Jr,"DIV",{class:!0});var Zn=s(Qe);_(Et.$$.fragment,Zn),ti=i(Zn),Ma=a(Zn,"P",{});var Hm=s(Ma);ni=d(Hm,"Example:"),Hm.forEach(o),ai=i(Zn),_(Mt.$$.fragment,Zn),Zn.forEach(o),Jr.forEach(o),zr=i(t),So=a(t,"H2",{class:!0});var Xr=s(So);Ao=a(Xr,"A",{id:!0,class:!0,href:!0});var Km=s(Ao);Ca=a(Km,"SPAN",{});var Qm=s(Ca);_(Ct.$$.fragment,Qm),Qm.forEach(o),Km.forEach(o),si=i(Xr),ja=a(Xr,"SPAN",{});var Vm=s(ja);ri=d(Vm,"TFBlenderbotSmallModel"),Vm.forEach(o),Xr.forEach(o),Br=i(t),me=a(t,"DIV",{class:!0});var no=s(me);_(jt.$$.fragment,no),di=i(no),Ot=a(no,"P",{});var Yr=s(Ot);li=d(Yr,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=a(Yr,"A",{href:!0});var Jm=s(Nn);ii=d(Jm,"TFPreTrainedModel"),Jm.forEach(o),ci=d(Yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr.forEach(o),pi=i(no),Pt=a(no,"P",{});var Zr=s(Pt);mi=d(Zr,"This model is also a "),Lt=a(Zr,"A",{href:!0,rel:!0});var Xm=s(Lt);hi=d(Xm,"tf.keras.Model"),Xm.forEach(o),ui=d(Zr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zr.forEach(o),fi=i(no),_(Do.$$.fragment,no),_i=i(no),ke=a(no,"DIV",{class:!0});var ao=s(ke);_(Nt.$$.fragment,ao),gi=i(ao),zo=a(ao,"P",{});var ea=s(zo);bi=d(ea,"The "),In=a(ea,"A",{href:!0});var Ym=s(In);ki=d(Ym,"TFBlenderbotSmallModel"),Ym.forEach(o),yi=d(ea," forward method, overrides the "),Oa=a(ea,"CODE",{});var Zm=s(Oa);vi=d(Zm,"__call__"),Zm.forEach(o),Ti=d(ea," special method."),ea.forEach(o),wi=i(ao),_(Go.$$.fragment,ao),Si=i(ao),Pa=a(ao,"P",{});var eh=s(Pa);zi=d(eh,"Example:"),eh.forEach(o),Bi=i(ao),_(It.$$.fragment,ao),ao.forEach(o),no.forEach(o),xr=i(t),Bo=a(t,"H2",{class:!0});var ed=s(Bo);Uo=a(ed,"A",{id:!0,class:!0,href:!0});var oh=s(Uo);La=a(oh,"SPAN",{});var th=s(La);_(At.$$.fragment,th),th.forEach(o),oh.forEach(o),xi=i(ed),Na=a(ed,"SPAN",{});var nh=s(Na);Fi=d(nh,"TFBlenderbotSmallForConditionalGeneration"),nh.forEach(o),ed.forEach(o),Fr=i(t),he=a(t,"DIV",{class:!0});var so=s(he);_(Dt.$$.fragment,so),qi=i(so),Gt=a(so,"P",{});var od=s(Gt);$i=d(od,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=a(od,"A",{href:!0});var ah=s(An);Ei=d(ah,"TFPreTrainedModel"),ah.forEach(o),Mi=d(od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),od.forEach(o),Ci=i(so),Ut=a(so,"P",{});var td=s(Ut);ji=d(td,"This model is also a "),Wt=a(td,"A",{href:!0,rel:!0});var sh=s(Wt);Oi=d(sh,"tf.keras.Model"),sh.forEach(o),Pi=d(td,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),td.forEach(o),Li=i(so),_(Wo.$$.fragment,so),Ni=i(so),O=a(so,"DIV",{class:!0});var H=s(O);_(Rt.$$.fragment,H),Ii=i(H),xo=a(H,"P",{});var oa=s(xo);Ai=d(oa,"The "),Dn=a(oa,"A",{href:!0});var rh=s(Dn);Di=d(rh,"TFBlenderbotSmallForConditionalGeneration"),rh.forEach(o),Gi=d(oa," forward method, overrides the "),Ia=a(oa,"CODE",{});var dh=s(Ia);Ui=d(dh,"__call__"),dh.forEach(o),Wi=d(oa," special method."),oa.forEach(o),Ri=i(H),_(Ro.$$.fragment,H),Hi=i(H),Aa=a(H,"P",{});var lh=s(Aa);Ki=d(lh,"Conversation example::"),lh.forEach(o),Qi=i(H),Da=a(H,"BLOCKQUOTE",{});var ih=s(Da);Ga=a(ih,"BLOCKQUOTE",{});var ch=s(Ga);Ua=a(ch,"BLOCKQUOTE",{});var ph=s(Ua);Wa=a(ph,"P",{});var mh=s(Wa);Vi=d(mh,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),mh.forEach(o),ph.forEach(o),ch.forEach(o),ih.forEach(o),Ji=i(H),Ra=a(H,"BLOCKQUOTE",{});var hh=s(Ra);Ha=a(hh,"BLOCKQUOTE",{});var uh=s(Ha);Ka=a(uh,"BLOCKQUOTE",{});var fh=s(Ka);Qa=a(fh,"P",{});var _h=s(Qa);Xi=d(_h,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),_h.forEach(o),fh.forEach(o),uh.forEach(o),hh.forEach(o),Yi=i(H),Va=a(H,"BLOCKQUOTE",{});var gh=s(Va);Ja=a(gh,"BLOCKQUOTE",{});var bh=s(Ja);Xa=a(bh,"BLOCKQUOTE",{});var kh=s(Xa);Ya=a(kh,"P",{});var yh=s(Ya);Zi=d(yh,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),yh.forEach(o),kh.forEach(o),bh.forEach(o),gh.forEach(o),ec=i(H),Za=a(H,"BLOCKQUOTE",{});var vh=s(Za);es=a(vh,"BLOCKQUOTE",{});var Th=s(es);os=a(Th,"BLOCKQUOTE",{});var wh=s(os);Ht=a(wh,"P",{});var nd=s(Ht);oc=d(nd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),ts=a(nd,"S",{});var Sh=s(ts);tc=d(Sh,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Sh.forEach(o),nc=d(nd,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),nd.forEach(o),wh.forEach(o),Th.forEach(o),vh.forEach(o),ac=i(H),ns=a(H,"BLOCKQUOTE",{});var zh=s(ns);as=a(zh,"BLOCKQUOTE",{});var Bh=s(as);ss=a(Bh,"BLOCKQUOTE",{});var xh=s(ss);rs=a(xh,"P",{});var Fh=s(rs);sc=d(Fh,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Fh.forEach(o),xh.forEach(o),Bh.forEach(o),zh.forEach(o),H.forEach(o),so.forEach(o),qr=i(t),Fo=a(t,"H2",{class:!0});var ad=s(Fo);Ho=a(ad,"A",{id:!0,class:!0,href:!0});var qh=s(Ho);ds=a(qh,"SPAN",{});var $h=s(ds);_(Kt.$$.fragment,$h),$h.forEach(o),qh.forEach(o),rc=i(ad),ls=a(ad,"SPAN",{});var Eh=s(ls);dc=d(Eh,"FlaxBlenderbotSmallModel"),Eh.forEach(o),ad.forEach(o),$r=i(t),N=a(t,"DIV",{class:!0});var te=s(N);_(Qt.$$.fragment,te),lc=i(te),Vt=a(te,"P",{});var sd=s(Vt);ic=d(sd,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=a(sd,"A",{href:!0});var Mh=s(Gn);cc=d(Mh,"FlaxPreTrainedModel"),Mh.forEach(o),pc=d(sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd.forEach(o),mc=i(te),Jt=a(te,"P",{});var rd=s(Jt);hc=d(rd,`This model is also a Flax Linen
`),Xt=a(rd,"A",{href:!0,rel:!0});var Ch=s(Xt);uc=d(Ch,"flax.nn.Module"),Ch.forEach(o),fc=d(rd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rd.forEach(o),_c=i(te),is=a(te,"P",{});var jh=s(is);gc=d(jh,"Finally, this model supports inherent JAX features such as:"),jh.forEach(o),bc=i(te),Ue=a(te,"UL",{});var Zo=s(Ue);cs=a(Zo,"LI",{});var Oh=s(cs);Yt=a(Oh,"A",{href:!0,rel:!0});var Ph=s(Yt);kc=d(Ph,"Just-In-Time (JIT) compilation"),Ph.forEach(o),Oh.forEach(o),yc=i(Zo),ps=a(Zo,"LI",{});var Lh=s(ps);Zt=a(Lh,"A",{href:!0,rel:!0});var Nh=s(Zt);vc=d(Nh,"Automatic Differentiation"),Nh.forEach(o),Lh.forEach(o),Tc=i(Zo),ms=a(Zo,"LI",{});var Ih=s(ms);en=a(Ih,"A",{href:!0,rel:!0});var Ah=s(en);wc=d(Ah,"Vectorization"),Ah.forEach(o),Ih.forEach(o),Sc=i(Zo),hs=a(Zo,"LI",{});var Dh=s(hs);on=a(Dh,"A",{href:!0,rel:!0});var Gh=s(on);zc=d(Gh,"Parallelization"),Gh.forEach(o),Dh.forEach(o),Zo.forEach(o),Bc=i(te),Ve=a(te,"DIV",{class:!0});var ta=s(Ve);_(tn.$$.fragment,ta),xc=i(ta),us=a(ta,"P",{});var Uh=s(us);Fc=d(Uh,"Example:"),Uh.forEach(o),qc=i(ta),_(nn.$$.fragment,ta),ta.forEach(o),$c=i(te),Je=a(te,"DIV",{class:!0});var na=s(Je);_(an.$$.fragment,na),Ec=i(na),fs=a(na,"P",{});var Wh=s(fs);Mc=d(Wh,"Example:"),Wh.forEach(o),Cc=i(na),_(sn.$$.fragment,na),na.forEach(o),jc=i(te),Xe=a(te,"DIV",{class:!0});var aa=s(Xe);_(rn.$$.fragment,aa),Oc=i(aa),_s=a(aa,"P",{});var Rh=s(_s);Pc=d(Rh,"Example:"),Rh.forEach(o),Lc=i(aa),_(dn.$$.fragment,aa),aa.forEach(o),te.forEach(o),Er=i(t),qo=a(t,"H2",{class:!0});var dd=s(qo);Ko=a(dd,"A",{id:!0,class:!0,href:!0});var Hh=s(Ko);gs=a(Hh,"SPAN",{});var Kh=s(gs);_(ln.$$.fragment,Kh),Kh.forEach(o),Hh.forEach(o),Nc=i(dd),bs=a(dd,"SPAN",{});var Qh=s(bs);Ic=d(Qh,"FlaxBlenderbotForConditionalGeneration"),Qh.forEach(o),dd.forEach(o),Mr=i(t),I=a(t,"DIV",{class:!0});var ne=s(I);_(cn.$$.fragment,ne),Ac=i(ne),pn=a(ne,"P",{});var ld=s(pn);Dc=d(ld,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Un=a(ld,"A",{href:!0});var Vh=s(Un);Gc=d(Vh,"FlaxPreTrainedModel"),Vh.forEach(o),Uc=d(ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ld.forEach(o),Wc=i(ne),mn=a(ne,"P",{});var id=s(mn);Rc=d(id,`This model is also a Flax Linen
`),hn=a(id,"A",{href:!0,rel:!0});var Jh=s(hn);Hc=d(Jh,"flax.nn.Module"),Jh.forEach(o),Kc=d(id,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),id.forEach(o),Qc=i(ne),ks=a(ne,"P",{});var Xh=s(ks);Vc=d(Xh,"Finally, this model supports inherent JAX features such as:"),Xh.forEach(o),Jc=i(ne),We=a(ne,"UL",{});var et=s(We);ys=a(et,"LI",{});var Yh=s(ys);un=a(Yh,"A",{href:!0,rel:!0});var Zh=s(un);Xc=d(Zh,"Just-In-Time (JIT) compilation"),Zh.forEach(o),Yh.forEach(o),Yc=i(et),vs=a(et,"LI",{});var eu=s(vs);fn=a(eu,"A",{href:!0,rel:!0});var ou=s(fn);Zc=d(ou,"Automatic Differentiation"),ou.forEach(o),eu.forEach(o),ep=i(et),Ts=a(et,"LI",{});var tu=s(Ts);_n=a(tu,"A",{href:!0,rel:!0});var nu=s(_n);op=d(nu,"Vectorization"),nu.forEach(o),tu.forEach(o),tp=i(et),ws=a(et,"LI",{});var au=s(ws);gn=a(au,"A",{href:!0,rel:!0});var su=s(gn);np=d(su,"Parallelization"),su.forEach(o),au.forEach(o),et.forEach(o),ap=i(ne),$=a(ne,"DIV",{class:!0});var E=s($);_(bn.$$.fragment,E),sp=i(E),$o=a(E,"P",{});var sa=s($o);rp=d(sa,"The "),Ss=a(sa,"CODE",{});var ru=s(Ss);dp=d(ru,"FlaxBlenderbotSmallPreTrainedModel"),ru.forEach(o),lp=d(sa," forward method, overrides the "),zs=a(sa,"CODE",{});var du=s(zs);ip=d(du,"__call__"),du.forEach(o),cp=d(sa," special method."),sa.forEach(o),pp=i(E),_(Qo.$$.fragment,E),mp=i(E),Bs=a(E,"P",{});var lu=s(Bs);hp=d(lu,"Summarization example:"),lu.forEach(o),up=i(E),xs=a(E,"BLOCKQUOTE",{});var iu=s(xs);Fs=a(iu,"BLOCKQUOTE",{});var cu=s(Fs);qs=a(cu,"BLOCKQUOTE",{});var pu=s(qs);$s=a(pu,"P",{});var mu=s($s);fp=d(mu,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),mu.forEach(o),pu.forEach(o),cu.forEach(o),iu.forEach(o),_p=i(E),Es=a(E,"BLOCKQUOTE",{});var hu=s(Es);Ms=a(hu,"BLOCKQUOTE",{});var uu=s(Ms);Cs=a(uu,"BLOCKQUOTE",{});var fu=s(Cs);js=a(fu,"P",{});var _u=s(js);gp=d(_u,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),_u.forEach(o),fu.forEach(o),uu.forEach(o),hu.forEach(o),bp=i(E),Os=a(E,"BLOCKQUOTE",{});var gu=s(Os);Ps=a(gu,"BLOCKQUOTE",{});var bu=s(Ps);Ls=a(bu,"BLOCKQUOTE",{});var ku=s(Ls);Ns=a(ku,"P",{});var yu=s(Ns);kp=d(yu,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),yu.forEach(o),ku.forEach(o),bu.forEach(o),gu.forEach(o),yp=i(E),Is=a(E,"BLOCKQUOTE",{});var vu=s(Is);As=a(vu,"BLOCKQUOTE",{});var Tu=s(As);kn=a(Tu,"BLOCKQUOTE",{});var cd=s(kn);Vo=a(cd,"H1",{class:!0});var pd=s(Vo);Jo=a(pd,"A",{id:!0,class:!0,href:!0});var wu=s(Jo);Ds=a(wu,"SPAN",{});var Su=s(Ds);_(yn.$$.fragment,Su),Su.forEach(o),wu.forEach(o),vp=i(pd),Gs=a(pd,"SPAN",{});var zu=s(Gs);Tp=d(zu,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),zu.forEach(o),pd.forEach(o),wp=i(cd),Us=a(cd,"P",{});var Bu=s(Us);Sp=d(Bu,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Bu.forEach(o),cd.forEach(o),Tu.forEach(o),vu.forEach(o),zp=i(E),Ws=a(E,"P",{});var xu=s(Ws);Bp=d(xu,"Mask filling example:"),xu.forEach(o),xp=i(E),Rs=a(E,"BLOCKQUOTE",{});var Fu=s(Rs);Hs=a(Fu,"BLOCKQUOTE",{});var qu=s(Hs);Ks=a(qu,"BLOCKQUOTE",{});var $u=s(Ks);Qs=a($u,"P",{});var Eu=s(Qs);Fp=d(Eu,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Eu.forEach(o),$u.forEach(o),qu.forEach(o),Fu.forEach(o),qp=i(E),Vs=a(E,"BLOCKQUOTE",{});var Mu=s(Vs);Js=a(Mu,"BLOCKQUOTE",{});var Cu=s(Js);Xs=a(Cu,"BLOCKQUOTE",{});var ju=s(Xs);Ys=a(ju,"P",{});var Ou=s(Ys);$p=d(Ou,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Ou.forEach(o),ju.forEach(o),Cu.forEach(o),Mu.forEach(o),Ep=i(E),Zs=a(E,"BLOCKQUOTE",{});var Pu=s(Zs);er=a(Pu,"BLOCKQUOTE",{});var Lu=s(er);or=a(Lu,"BLOCKQUOTE",{});var Nu=s(or);tr=a(Nu,"P",{});var Iu=s(tr);Mp=d(Iu,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Iu.forEach(o),Nu.forEach(o),Lu.forEach(o),Pu.forEach(o),Cp=i(E),nr=a(E,"BLOCKQUOTE",{});var Au=s(nr);ar=a(Au,"BLOCKQUOTE",{});var Du=s(ar);sr=a(Du,"BLOCKQUOTE",{});var Gu=s(sr);rr=a(Gu,"P",{});var Uu=s(rr);jp=d(Uu,"tokenizer.decode(predictions).split()"),Uu.forEach(o),Gu.forEach(o),Du.forEach(o),Au.forEach(o),E.forEach(o),Op=i(ne),Ye=a(ne,"DIV",{class:!0});var ra=s(Ye);_(vn.$$.fragment,ra),Pp=i(ra),dr=a(ra,"P",{});var Wu=s(dr);Lp=d(Wu,"Example:"),Wu.forEach(o),Np=i(ra),_(Tn.$$.fragment,ra),ra.forEach(o),Ip=i(ne),Ze=a(ne,"DIV",{class:!0});var da=s(Ze);_(wn.$$.fragment,da),Ap=i(da),lr=a(da,"P",{});var Ru=s(lr);Dp=d(Ru,"Example:"),Ru.forEach(o),Gp=i(da),_(Sn.$$.fragment,da),da.forEach(o),ne.forEach(o),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(sf)),c(T,"id","blenderbot-small"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot-small"),c(v,"class","relative group"),c(U,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(W,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(K,"href","https://huggingface.co/facebook/blenderbot-90M"),c(K,"rel","nofollow"),c(Z,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(fe,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(A,"id","overview"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#overview"),c(V,"class","relative group"),c(le,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(le,"rel","nofollow"),c(Se,"href","https://huggingface.co/patrickvonplaten"),c(Se,"rel","nofollow"),c(D,"href","https://github.com/facebookresearch/ParlAI"),c(D,"rel","nofollow"),c(_e,"id","transformers.BlenderbotSmallConfig"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#transformers.BlenderbotSmallConfig"),c(ce,"class","relative group"),c(xn,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(tt,"href","https://huggingface.co/facebook/blenderbot_small-90M"),c(tt,"rel","nofollow"),c(Fn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(qn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(pe,"class","docstring"),c(Eo,"id","transformers.BlenderbotSmallTokenizer"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.BlenderbotSmallTokenizer"),c(fo,"class","relative group"),c($n,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(He,"class","docstring"),c(Mo,"class","docstring"),c(Mn,"href","../glossary#token-type-ids"),c(Ke,"class","docstring"),c(Cn,"class","docstring"),c(G,"class","docstring"),c(Co,"id","transformers.BlenderbotSmallTokenizerFast"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.BlenderbotSmallTokenizerFast"),c(go,"class","relative group"),c(jo,"class","docstring"),c(Ge,"class","docstring"),c(Oo,"id","transformers.BlenderbotSmallModel"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.BlenderbotSmallModel"),c(bo,"class","relative group"),c(jn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(kt,"rel","nofollow"),c(On,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(ge,"class","docstring"),c(xe,"class","docstring"),c(Lo,"id","transformers.BlenderbotSmallForConditionalGeneration"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.BlenderbotSmallForConditionalGeneration"),c(yo,"class","relative group"),c(Pn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Bt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Bt,"rel","nofollow"),c(Ln,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(be,"class","docstring"),c(Fe,"class","docstring"),c(Io,"id","transformers.BlenderbotSmallForCausalLM"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.BlenderbotSmallForCausalLM"),c(To,"class","relative group"),c(Qe,"class","docstring"),c(wo,"class","docstring"),c(Ao,"id","transformers.TFBlenderbotSmallModel"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.TFBlenderbotSmallModel"),c(So,"class","relative group"),c(Nn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Lt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Lt,"rel","nofollow"),c(In,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),c(ke,"class","docstring"),c(me,"class","docstring"),c(Uo,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),c(Bo,"class","relative group"),c(An,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wt,"rel","nofollow"),c(Dn,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),c(O,"class","docstring"),c(he,"class","docstring"),c(Ho,"id","transformers.FlaxBlenderbotSmallModel"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.FlaxBlenderbotSmallModel"),c(Fo,"class","relative group"),c(Gn,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Xt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Xt,"rel","nofollow"),c(Yt,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Yt,"rel","nofollow"),c(Zt,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Zt,"rel","nofollow"),c(en,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(en,"rel","nofollow"),c(on,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(on,"rel","nofollow"),c(Ve,"class","docstring"),c(Je,"class","docstring"),c(Xe,"class","docstring"),c(N,"class","docstring"),c(Ko,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(qo,"class","relative group"),c(Un,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(hn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(hn,"rel","nofollow"),c(un,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(un,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(Jo,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Vo,"class","relative group"),c($,"class","docstring"),c(Ye,"class","docstring"),c(Ze,"class","docstring"),c(I,"class","docstring")},m(t,m){e(document.head,h),p(t,x,m),p(t,v,m),e(v,T),e(T,z),g(S,z,null),e(v,w),e(v,F),e(F,Ce),p(t,ue,m),p(t,B,m),e(B,je),e(B,U),e(U,Oe),e(B,Pe),e(B,W),e(W,Le),e(B,Ne),e(B,K),e(K,Q),e(B,Ie),e(B,Z),e(Z,C),e(B,P),e(B,fe),e(fe,ae),p(t,$e,m),p(t,V,m),e(V,A),e(A,Te),g(se,Te,null),e(V,L),e(V,we),e(we,re),p(t,Ee,m),p(t,ee,m),e(ee,de),e(ee,le),e(le,Ae),e(ee,J),p(t,Me,m),p(t,R,m),e(R,De),p(t,u,m),p(t,q,m),e(q,ie),e(ie,lo),p(t,Re,m),p(t,j,m),e(j,io),e(j,Se),e(Se,co),e(j,X),e(j,D),e(D,po),e(j,mo),p(t,oe,m),p(t,ce,m),e(ce,_e),e(_e,ze),g(Be,ze,null),e(ce,md),e(ce,la),e(la,hd),p(t,ur,m),p(t,pe,m),g(ot,pe,null),e(pe,ud),e(pe,ho),e(ho,fd),e(ho,xn),e(xn,_d),e(ho,gd),e(ho,tt),e(tt,bd),e(ho,kd),e(pe,yd),e(pe,uo),e(uo,vd),e(uo,Fn),e(Fn,Td),e(uo,wd),e(uo,qn),e(qn,Sd),e(uo,zd),e(pe,Bd),e(pe,ia),e(ia,xd),e(pe,Fd),g(nt,pe,null),p(t,fr,m),p(t,fo,m),e(fo,Eo),e(Eo,ca),g(at,ca,null),e(fo,qd),e(fo,pa),e(pa,$d),p(t,_r,m),p(t,G,m),g(st,G,null),e(G,Ed),e(G,ma),e(ma,Md),e(G,Cd),e(G,rt),e(rt,jd),e(rt,$n),e($n,Od),e(rt,Pd),e(G,Ld),e(G,He),g(dt,He,null),e(He,Nd),e(He,ha),e(ha,Id),e(He,Ad),e(He,ua),e(ua,Dd),e(G,Gd),e(G,Mo),g(lt,Mo,null),e(Mo,Ud),e(Mo,_o),e(_o,Wd),e(_o,fa),e(fa,Rd),e(_o,Hd),e(_o,_a),e(_a,Kd),e(_o,Qd),e(G,Vd),e(G,Ke),g(it,Ke,null),e(Ke,Jd),e(Ke,En),e(En,Xd),e(En,Mn),e(Mn,Yd),e(Ke,Zd),e(Ke,ga),e(ga,el),e(G,ol),e(G,Cn),g(ct,Cn,null),p(t,gr,m),p(t,go,m),e(go,Co),e(Co,ba),g(pt,ba,null),e(go,tl),e(go,ka),e(ka,nl),p(t,br,m),p(t,Ge,m),g(mt,Ge,null),e(Ge,al),e(Ge,ht),e(ht,sl),e(ht,ya),e(ya,rl),e(ht,dl),e(Ge,ll),e(Ge,jo),g(ut,jo,null),e(jo,il),e(jo,va),e(va,cl),p(t,kr,m),p(t,bo,m),e(bo,Oo),e(Oo,Ta),g(ft,Ta,null),e(bo,pl),e(bo,wa),e(wa,ml),p(t,yr,m),p(t,xe,m),g(_t,xe,null),e(xe,hl),e(xe,gt),e(gt,ul),e(gt,jn),e(jn,fl),e(gt,_l),e(xe,gl),e(xe,bt),e(bt,bl),e(bt,kt),e(kt,kl),e(bt,yl),e(xe,vl),e(xe,ge),g(yt,ge,null),e(ge,Tl),e(ge,ko),e(ko,wl),e(ko,On),e(On,Sl),e(ko,zl),e(ko,Sa),e(Sa,Bl),e(ko,xl),e(ge,Fl),g(Po,ge,null),e(ge,ql),e(ge,za),e(za,$l),e(ge,El),g(vt,ge,null),p(t,vr,m),p(t,yo,m),e(yo,Lo),e(Lo,Ba),g(Tt,Ba,null),e(yo,Ml),e(yo,xa),e(xa,Cl),p(t,Tr,m),p(t,Fe,m),g(wt,Fe,null),e(Fe,jl),e(Fe,St),e(St,Ol),e(St,Pn),e(Pn,Pl),e(St,Ll),e(Fe,Nl),e(Fe,zt),e(zt,Il),e(zt,Bt),e(Bt,Al),e(zt,Dl),e(Fe,Gl),e(Fe,be),g(xt,be,null),e(be,Ul),e(be,vo),e(vo,Wl),e(vo,Ln),e(Ln,Rl),e(vo,Hl),e(vo,Fa),e(Fa,Kl),e(vo,Ql),e(be,Vl),g(No,be,null),e(be,Jl),e(be,qa),e(qa,Xl),e(be,Yl),g(Ft,be,null),p(t,wr,m),p(t,To,m),e(To,Io),e(Io,$a),g(qt,$a,null),e(To,Zl),e(To,Ea),e(Ea,ei),p(t,Sr,m),p(t,wo,m),g($t,wo,null),e(wo,oi),e(wo,Qe),g(Et,Qe,null),e(Qe,ti),e(Qe,Ma),e(Ma,ni),e(Qe,ai),g(Mt,Qe,null),p(t,zr,m),p(t,So,m),e(So,Ao),e(Ao,Ca),g(Ct,Ca,null),e(So,si),e(So,ja),e(ja,ri),p(t,Br,m),p(t,me,m),g(jt,me,null),e(me,di),e(me,Ot),e(Ot,li),e(Ot,Nn),e(Nn,ii),e(Ot,ci),e(me,pi),e(me,Pt),e(Pt,mi),e(Pt,Lt),e(Lt,hi),e(Pt,ui),e(me,fi),g(Do,me,null),e(me,_i),e(me,ke),g(Nt,ke,null),e(ke,gi),e(ke,zo),e(zo,bi),e(zo,In),e(In,ki),e(zo,yi),e(zo,Oa),e(Oa,vi),e(zo,Ti),e(ke,wi),g(Go,ke,null),e(ke,Si),e(ke,Pa),e(Pa,zi),e(ke,Bi),g(It,ke,null),p(t,xr,m),p(t,Bo,m),e(Bo,Uo),e(Uo,La),g(At,La,null),e(Bo,xi),e(Bo,Na),e(Na,Fi),p(t,Fr,m),p(t,he,m),g(Dt,he,null),e(he,qi),e(he,Gt),e(Gt,$i),e(Gt,An),e(An,Ei),e(Gt,Mi),e(he,Ci),e(he,Ut),e(Ut,ji),e(Ut,Wt),e(Wt,Oi),e(Ut,Pi),e(he,Li),g(Wo,he,null),e(he,Ni),e(he,O),g(Rt,O,null),e(O,Ii),e(O,xo),e(xo,Ai),e(xo,Dn),e(Dn,Di),e(xo,Gi),e(xo,Ia),e(Ia,Ui),e(xo,Wi),e(O,Ri),g(Ro,O,null),e(O,Hi),e(O,Aa),e(Aa,Ki),e(O,Qi),e(O,Da),e(Da,Ga),e(Ga,Ua),e(Ua,Wa),e(Wa,Vi),e(O,Ji),e(O,Ra),e(Ra,Ha),e(Ha,Ka),e(Ka,Qa),e(Qa,Xi),e(O,Yi),e(O,Va),e(Va,Ja),e(Ja,Xa),e(Xa,Ya),e(Ya,Zi),e(O,ec),e(O,Za),e(Za,es),e(es,os),e(os,Ht),e(Ht,oc),e(Ht,ts),e(ts,tc),e(Ht,nc),e(O,ac),e(O,ns),e(ns,as),e(as,ss),e(ss,rs),e(rs,sc),p(t,qr,m),p(t,Fo,m),e(Fo,Ho),e(Ho,ds),g(Kt,ds,null),e(Fo,rc),e(Fo,ls),e(ls,dc),p(t,$r,m),p(t,N,m),g(Qt,N,null),e(N,lc),e(N,Vt),e(Vt,ic),e(Vt,Gn),e(Gn,cc),e(Vt,pc),e(N,mc),e(N,Jt),e(Jt,hc),e(Jt,Xt),e(Xt,uc),e(Jt,fc),e(N,_c),e(N,is),e(is,gc),e(N,bc),e(N,Ue),e(Ue,cs),e(cs,Yt),e(Yt,kc),e(Ue,yc),e(Ue,ps),e(ps,Zt),e(Zt,vc),e(Ue,Tc),e(Ue,ms),e(ms,en),e(en,wc),e(Ue,Sc),e(Ue,hs),e(hs,on),e(on,zc),e(N,Bc),e(N,Ve),g(tn,Ve,null),e(Ve,xc),e(Ve,us),e(us,Fc),e(Ve,qc),g(nn,Ve,null),e(N,$c),e(N,Je),g(an,Je,null),e(Je,Ec),e(Je,fs),e(fs,Mc),e(Je,Cc),g(sn,Je,null),e(N,jc),e(N,Xe),g(rn,Xe,null),e(Xe,Oc),e(Xe,_s),e(_s,Pc),e(Xe,Lc),g(dn,Xe,null),p(t,Er,m),p(t,qo,m),e(qo,Ko),e(Ko,gs),g(ln,gs,null),e(qo,Nc),e(qo,bs),e(bs,Ic),p(t,Mr,m),p(t,I,m),g(cn,I,null),e(I,Ac),e(I,pn),e(pn,Dc),e(pn,Un),e(Un,Gc),e(pn,Uc),e(I,Wc),e(I,mn),e(mn,Rc),e(mn,hn),e(hn,Hc),e(mn,Kc),e(I,Qc),e(I,ks),e(ks,Vc),e(I,Jc),e(I,We),e(We,ys),e(ys,un),e(un,Xc),e(We,Yc),e(We,vs),e(vs,fn),e(fn,Zc),e(We,ep),e(We,Ts),e(Ts,_n),e(_n,op),e(We,tp),e(We,ws),e(ws,gn),e(gn,np),e(I,ap),e(I,$),g(bn,$,null),e($,sp),e($,$o),e($o,rp),e($o,Ss),e(Ss,dp),e($o,lp),e($o,zs),e(zs,ip),e($o,cp),e($,pp),g(Qo,$,null),e($,mp),e($,Bs),e(Bs,hp),e($,up),e($,xs),e(xs,Fs),e(Fs,qs),e(qs,$s),e($s,fp),e($,_p),e($,Es),e(Es,Ms),e(Ms,Cs),e(Cs,js),e(js,gp),e($,bp),e($,Os),e(Os,Ps),e(Ps,Ls),e(Ls,Ns),e(Ns,kp),e($,yp),e($,Is),e(Is,As),e(As,kn),e(kn,Vo),e(Vo,Jo),e(Jo,Ds),g(yn,Ds,null),e(Vo,vp),e(Vo,Gs),e(Gs,Tp),e(kn,wp),e(kn,Us),e(Us,Sp),e($,zp),e($,Ws),e(Ws,Bp),e($,xp),e($,Rs),e(Rs,Hs),e(Hs,Ks),e(Ks,Qs),e(Qs,Fp),e($,qp),e($,Vs),e(Vs,Js),e(Js,Xs),e(Xs,Ys),e(Ys,$p),e($,Ep),e($,Zs),e(Zs,er),e(er,or),e(or,tr),e(tr,Mp),e($,Cp),e($,nr),e(nr,ar),e(ar,sr),e(sr,rr),e(rr,jp),e(I,Op),e(I,Ye),g(vn,Ye,null),e(Ye,Pp),e(Ye,dr),e(dr,Lp),e(Ye,Np),g(Tn,Ye,null),e(I,Ip),e(I,Ze),g(wn,Ze,null),e(Ze,Ap),e(Ze,lr),e(lr,Dp),e(Ze,Gp),g(Sn,Ze,null),Cr=!0},p(t,[m]){const zn={};m&2&&(zn.$$scope={dirty:m,ctx:t}),Po.$set(zn);const ir={};m&2&&(ir.$$scope={dirty:m,ctx:t}),No.$set(ir);const cr={};m&2&&(cr.$$scope={dirty:m,ctx:t}),Do.$set(cr);const pr={};m&2&&(pr.$$scope={dirty:m,ctx:t}),Go.$set(pr);const ye={};m&2&&(ye.$$scope={dirty:m,ctx:t}),Wo.$set(ye);const mr={};m&2&&(mr.$$scope={dirty:m,ctx:t}),Ro.$set(mr);const hr={};m&2&&(hr.$$scope={dirty:m,ctx:t}),Qo.$set(hr)},i(t){Cr||(b(S.$$.fragment,t),b(se.$$.fragment,t),b(Be.$$.fragment,t),b(ot.$$.fragment,t),b(nt.$$.fragment,t),b(at.$$.fragment,t),b(st.$$.fragment,t),b(dt.$$.fragment,t),b(lt.$$.fragment,t),b(it.$$.fragment,t),b(ct.$$.fragment,t),b(pt.$$.fragment,t),b(mt.$$.fragment,t),b(ut.$$.fragment,t),b(ft.$$.fragment,t),b(_t.$$.fragment,t),b(yt.$$.fragment,t),b(Po.$$.fragment,t),b(vt.$$.fragment,t),b(Tt.$$.fragment,t),b(wt.$$.fragment,t),b(xt.$$.fragment,t),b(No.$$.fragment,t),b(Ft.$$.fragment,t),b(qt.$$.fragment,t),b($t.$$.fragment,t),b(Et.$$.fragment,t),b(Mt.$$.fragment,t),b(Ct.$$.fragment,t),b(jt.$$.fragment,t),b(Do.$$.fragment,t),b(Nt.$$.fragment,t),b(Go.$$.fragment,t),b(It.$$.fragment,t),b(At.$$.fragment,t),b(Dt.$$.fragment,t),b(Wo.$$.fragment,t),b(Rt.$$.fragment,t),b(Ro.$$.fragment,t),b(Kt.$$.fragment,t),b(Qt.$$.fragment,t),b(tn.$$.fragment,t),b(nn.$$.fragment,t),b(an.$$.fragment,t),b(sn.$$.fragment,t),b(rn.$$.fragment,t),b(dn.$$.fragment,t),b(ln.$$.fragment,t),b(cn.$$.fragment,t),b(bn.$$.fragment,t),b(Qo.$$.fragment,t),b(yn.$$.fragment,t),b(vn.$$.fragment,t),b(Tn.$$.fragment,t),b(wn.$$.fragment,t),b(Sn.$$.fragment,t),Cr=!0)},o(t){k(S.$$.fragment,t),k(se.$$.fragment,t),k(Be.$$.fragment,t),k(ot.$$.fragment,t),k(nt.$$.fragment,t),k(at.$$.fragment,t),k(st.$$.fragment,t),k(dt.$$.fragment,t),k(lt.$$.fragment,t),k(it.$$.fragment,t),k(ct.$$.fragment,t),k(pt.$$.fragment,t),k(mt.$$.fragment,t),k(ut.$$.fragment,t),k(ft.$$.fragment,t),k(_t.$$.fragment,t),k(yt.$$.fragment,t),k(Po.$$.fragment,t),k(vt.$$.fragment,t),k(Tt.$$.fragment,t),k(wt.$$.fragment,t),k(xt.$$.fragment,t),k(No.$$.fragment,t),k(Ft.$$.fragment,t),k(qt.$$.fragment,t),k($t.$$.fragment,t),k(Et.$$.fragment,t),k(Mt.$$.fragment,t),k(Ct.$$.fragment,t),k(jt.$$.fragment,t),k(Do.$$.fragment,t),k(Nt.$$.fragment,t),k(Go.$$.fragment,t),k(It.$$.fragment,t),k(At.$$.fragment,t),k(Dt.$$.fragment,t),k(Wo.$$.fragment,t),k(Rt.$$.fragment,t),k(Ro.$$.fragment,t),k(Kt.$$.fragment,t),k(Qt.$$.fragment,t),k(tn.$$.fragment,t),k(nn.$$.fragment,t),k(an.$$.fragment,t),k(sn.$$.fragment,t),k(rn.$$.fragment,t),k(dn.$$.fragment,t),k(ln.$$.fragment,t),k(cn.$$.fragment,t),k(bn.$$.fragment,t),k(Qo.$$.fragment,t),k(yn.$$.fragment,t),k(vn.$$.fragment,t),k(Tn.$$.fragment,t),k(wn.$$.fragment,t),k(Sn.$$.fragment,t),Cr=!1},d(t){o(h),t&&o(x),t&&o(v),y(S),t&&o(ue),t&&o(B),t&&o($e),t&&o(V),y(se),t&&o(Ee),t&&o(ee),t&&o(Me),t&&o(R),t&&o(u),t&&o(q),t&&o(Re),t&&o(j),t&&o(oe),t&&o(ce),y(Be),t&&o(ur),t&&o(pe),y(ot),y(nt),t&&o(fr),t&&o(fo),y(at),t&&o(_r),t&&o(G),y(st),y(dt),y(lt),y(it),y(ct),t&&o(gr),t&&o(go),y(pt),t&&o(br),t&&o(Ge),y(mt),y(ut),t&&o(kr),t&&o(bo),y(ft),t&&o(yr),t&&o(xe),y(_t),y(yt),y(Po),y(vt),t&&o(vr),t&&o(yo),y(Tt),t&&o(Tr),t&&o(Fe),y(wt),y(xt),y(No),y(Ft),t&&o(wr),t&&o(To),y(qt),t&&o(Sr),t&&o(wo),y($t),y(Et),y(Mt),t&&o(zr),t&&o(So),y(Ct),t&&o(Br),t&&o(me),y(jt),y(Do),y(Nt),y(Go),y(It),t&&o(xr),t&&o(Bo),y(At),t&&o(Fr),t&&o(he),y(Dt),y(Wo),y(Rt),y(Ro),t&&o(qr),t&&o(Fo),y(Kt),t&&o($r),t&&o(N),y(Qt),y(tn),y(nn),y(an),y(sn),y(rn),y(dn),t&&o(Er),t&&o(qo),y(ln),t&&o(Mr),t&&o(I),y(cn),y(bn),y(Qo),y(yn),y(vn),y(Tn),y(wn),y(Sn)}}}const sf={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function rf(Y){return Ju(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hf extends Hu{constructor(h){super();Ku(this,h,rf,af,Qu,{})}}export{hf as default,sf as metadata};
