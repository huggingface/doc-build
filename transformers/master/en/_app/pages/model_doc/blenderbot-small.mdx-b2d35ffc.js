import{S as ff,i as _f,s as gf,e as o,k as l,w as f,t as r,L as bf,c as n,d as t,m as i,a,x as _,h as d,b as c,J as e,g as p,y as g,q as b,o as k,B as v}from"../../chunks/vendor-9e2b328e.js";import{T as zn}from"../../chunks/Tip-76f97a76.js";import{D as M}from"../../chunks/Docstring-50fd6873.js";import{C as $t}from"../../chunks/CodeBlock-88e23343.js";import{I as $e}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function kf(H){let h,x,y,T,B;return{c(){h=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function vf(H){let h,x,y,T,B;return{c(){h=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function yf(H){let h,x,y,T,B,S,w,q,Pe,fe,z,je,U,Oe,Le,W,Ne,Ie,Q,V,Ae,Z,C,O,_e,se,Fe,J,A,Te,re,L,we,de,Ee,ee,le,ie,De,X,Me,R,Ge;return{c(){h=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),y=l(),T=o("ul"),B=o("li"),S=r("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),q=o("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),fe=l(),z=o("p"),je=r("This second option is useful when using "),U=o("code"),Oe=r("tf.keras.Model.fit"),Le=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=o("code"),Ne=r("model(inputs)"),Ie=r("."),Q=l(),V=o("p"),Ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),C=o("ul"),O=o("li"),_e=r("a single Tensor with "),se=o("code"),Fe=r("input_ids"),J=r(" only and nothing else: "),A=o("code"),Te=r("model(input_ids)"),re=l(),L=o("li"),we=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=o("code"),Ee=r("model([input_ids, attention_mask])"),ee=r(" or "),le=o("code"),ie=r("model([input_ids, attention_mask, token_type_ids])"),De=l(),X=o("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Ge=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){h=n(u,"P",{});var $=a(h);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),y=i(u),T=n(u,"UL",{});var ce=a(T);B=n(ce,"LI",{});var rt=a(B);S=d(rt,"having all inputs as keyword arguments (like PyTorch models), or"),rt.forEach(t),w=i(ce),q=n(ce,"LI",{});var Ke=a(q);Pe=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),ce.forEach(t),fe=i(u),z=n(u,"P",{});var P=a(z);je=d(P,"This second option is useful when using "),U=n(P,"CODE",{});var dt=a(U);Oe=d(dt,"tf.keras.Model.fit"),dt.forEach(t),Le=d(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n(P,"CODE",{});var Se=a(W);Ne=d(Se,"model(inputs)"),Se.forEach(t),Ie=d(P,"."),P.forEach(t),Q=i(u),V=n(u,"P",{});var lt=a(V);Ae=d(lt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),lt.forEach(t),Z=i(u),C=n(u,"UL",{});var Y=a(C);O=n(Y,"LI",{});var D=a(O);_e=d(D,"a single Tensor with "),se=n(D,"CODE",{});var it=a(se);Fe=d(it,"input_ids"),it.forEach(t),J=d(D," only and nothing else: "),A=n(D,"CODE",{});var ct=a(A);Te=d(ct,"model(input_ids)"),ct.forEach(t),D.forEach(t),re=i(Y),L=n(Y,"LI",{});var te=a(L);we=d(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n(te,"CODE",{});var pe=a(de);Ee=d(pe,"model([input_ids, attention_mask])"),pe.forEach(t),ee=d(te," or "),le=n(te,"CODE",{});var ge=a(le);ie=d(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),te.forEach(t),De=i(Y),X=n(Y,"LI",{});var Be=a(X);Me=d(Be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(Be,"CODE",{});var ze=a(R);Ge=d(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),Be.forEach(t),Y.forEach(t)},m(u,$){p(u,h,$),e(h,x),p(u,y,$),p(u,T,$),e(T,B),e(B,S),e(T,w),e(T,q),e(q,Pe),p(u,fe,$),p(u,z,$),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ie),p(u,Q,$),p(u,V,$),e(V,Ae),p(u,Z,$),p(u,C,$),e(C,O),e(O,_e),e(O,se),e(se,Fe),e(O,J),e(O,A),e(A,Te),e(C,re),e(C,L),e(L,we),e(L,de),e(de,Ee),e(L,ee),e(L,le),e(le,ie),e(C,De),e(C,X),e(X,Me),e(X,R),e(R,Ge)},d(u){u&&t(h),u&&t(y),u&&t(T),u&&t(fe),u&&t(z),u&&t(Q),u&&t(V),u&&t(Z),u&&t(C)}}}function Tf(H){let h,x,y,T,B;return{c(){h=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function wf(H){let h,x,y,T,B,S,w,q,Pe,fe,z,je,U,Oe,Le,W,Ne,Ie,Q,V,Ae,Z,C,O,_e,se,Fe,J,A,Te,re,L,we,de,Ee,ee,le,ie,De,X,Me,R,Ge;return{c(){h=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),y=l(),T=o("ul"),B=o("li"),S=r("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),q=o("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),fe=l(),z=o("p"),je=r("This second option is useful when using "),U=o("code"),Oe=r("tf.keras.Model.fit"),Le=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=o("code"),Ne=r("model(inputs)"),Ie=r("."),Q=l(),V=o("p"),Ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),C=o("ul"),O=o("li"),_e=r("a single Tensor with "),se=o("code"),Fe=r("input_ids"),J=r(" only and nothing else: "),A=o("code"),Te=r("model(input_ids)"),re=l(),L=o("li"),we=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=o("code"),Ee=r("model([input_ids, attention_mask])"),ee=r(" or "),le=o("code"),ie=r("model([input_ids, attention_mask, token_type_ids])"),De=l(),X=o("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Ge=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){h=n(u,"P",{});var $=a(h);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),y=i(u),T=n(u,"UL",{});var ce=a(T);B=n(ce,"LI",{});var rt=a(B);S=d(rt,"having all inputs as keyword arguments (like PyTorch models), or"),rt.forEach(t),w=i(ce),q=n(ce,"LI",{});var Ke=a(q);Pe=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),ce.forEach(t),fe=i(u),z=n(u,"P",{});var P=a(z);je=d(P,"This second option is useful when using "),U=n(P,"CODE",{});var dt=a(U);Oe=d(dt,"tf.keras.Model.fit"),dt.forEach(t),Le=d(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n(P,"CODE",{});var Se=a(W);Ne=d(Se,"model(inputs)"),Se.forEach(t),Ie=d(P,"."),P.forEach(t),Q=i(u),V=n(u,"P",{});var lt=a(V);Ae=d(lt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),lt.forEach(t),Z=i(u),C=n(u,"UL",{});var Y=a(C);O=n(Y,"LI",{});var D=a(O);_e=d(D,"a single Tensor with "),se=n(D,"CODE",{});var it=a(se);Fe=d(it,"input_ids"),it.forEach(t),J=d(D," only and nothing else: "),A=n(D,"CODE",{});var ct=a(A);Te=d(ct,"model(input_ids)"),ct.forEach(t),D.forEach(t),re=i(Y),L=n(Y,"LI",{});var te=a(L);we=d(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n(te,"CODE",{});var pe=a(de);Ee=d(pe,"model([input_ids, attention_mask])"),pe.forEach(t),ee=d(te," or "),le=n(te,"CODE",{});var ge=a(le);ie=d(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),te.forEach(t),De=i(Y),X=n(Y,"LI",{});var Be=a(X);Me=d(Be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(Be,"CODE",{});var ze=a(R);Ge=d(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),Be.forEach(t),Y.forEach(t)},m(u,$){p(u,h,$),e(h,x),p(u,y,$),p(u,T,$),e(T,B),e(B,S),e(T,w),e(T,q),e(q,Pe),p(u,fe,$),p(u,z,$),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ie),p(u,Q,$),p(u,V,$),e(V,Ae),p(u,Z,$),p(u,C,$),e(C,O),e(O,_e),e(O,se),e(se,Fe),e(O,J),e(O,A),e(A,Te),e(C,re),e(C,L),e(L,we),e(L,de),e(de,Ee),e(L,ee),e(L,le),e(le,ie),e(C,De),e(C,X),e(X,Me),e(X,R),e(R,Ge)},d(u){u&&t(h),u&&t(y),u&&t(T),u&&t(fe),u&&t(z),u&&t(Q),u&&t(V),u&&t(Z),u&&t(C)}}}function Sf(H){let h,x,y,T,B;return{c(){h=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function Bf(H){let h,x,y,T,B;return{c(){h=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){h=n(S,"P",{});var w=a(h);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,h,w),e(h,x),e(h,y),e(y,T),e(h,B)},d(S){S&&t(h)}}}function zf(H){let h,x,y,T,B,S,w,q,Pe,fe,z,je,U,Oe,Le,W,Ne,Ie,Q,V,Ae,Z,C,O,_e,se,Fe,J,A,Te,re,L,we,de,Ee,ee,le,ie,De,X,Me,R,Ge,u,$,ce,rt,Ke,P,dt,Se,lt,Y,D,it,ct,te,pe,ge,Be,ze,yd,la,Td,Tr,me,eo,wd,pt,Sd,xn,Bd,zd,to,xd,qd,$d,mt,Fd,qn,Ed,Md,$n,Cd,Pd,jd,ia,Od,Ld,oo,wr,ht,Ft,ca,no,Nd,pa,Id,Sr,G,ao,Ad,ma,Dd,Gd,so,Ud,Fn,Wd,Rd,Kd,He,ro,Hd,ha,Qd,Vd,ua,Jd,Xd,Et,lo,Yd,ut,Zd,fa,el,tl,_a,ol,nl,al,Qe,io,sl,En,rl,Mn,dl,ll,ga,il,cl,Cn,co,Br,ft,Mt,ba,po,pl,ka,ml,zr,Ue,mo,hl,ho,ul,va,fl,_l,gl,Ct,uo,bl,ya,kl,xr,_t,Pt,Ta,fo,vl,wa,yl,qr,xe,_o,Tl,go,wl,Pn,Sl,Bl,zl,bo,xl,ko,ql,$l,Fl,be,vo,El,gt,Ml,jn,Cl,Pl,Sa,jl,Ol,Ll,jt,Nl,Ba,Il,Al,yo,$r,bt,Ot,za,To,Dl,xa,Gl,Fr,qe,wo,Ul,So,Wl,On,Rl,Kl,Hl,Bo,Ql,zo,Vl,Jl,Xl,oe,xo,Yl,kt,Zl,Ln,ei,ti,qa,oi,ni,ai,Lt,si,$a,ri,di,Fa,Ea,Ma,Ca,li,ii,Pa,ja,Oa,qo,ci,La,pi,mi,Er,vt,Nt,Na,$o,hi,Ia,ui,Mr,yt,Fo,fi,Ve,Eo,_i,Aa,gi,bi,Mo,Cr,Tt,It,Da,Co,ki,Ga,vi,Pr,he,Po,yi,jo,Ti,Nn,wi,Si,Bi,Oo,zi,Lo,xi,qi,$i,At,Fi,ke,No,Ei,wt,Mi,In,Ci,Pi,Ua,ji,Oi,Li,Dt,Ni,Wa,Ii,Ai,Io,jr,St,Gt,Ra,Ao,Di,Ka,Gi,Or,ue,Do,Ui,Go,Wi,An,Ri,Ki,Hi,Uo,Qi,Wo,Vi,Ji,Xi,Ut,Yi,j,Ro,Zi,Bt,ec,Dn,tc,oc,Ha,nc,ac,sc,Wt,rc,Qa,dc,lc,Va,Ja,Xa,Ya,ic,cc,Za,es,ts,os,pc,mc,ns,as,ss,rs,hc,uc,ds,ls,is,Ko,fc,cs,_c,gc,bc,ps,ms,hs,us,kc,Lr,zt,Rt,fs,Ho,vc,_s,yc,Nr,N,Qo,Tc,Vo,wc,Gn,Sc,Bc,zc,Jo,xc,Xo,qc,$c,Fc,gs,Ec,Mc,We,bs,Yo,Cc,Pc,ks,Zo,jc,Oc,vs,en,Lc,Nc,ys,tn,Ic,Ac,Je,on,Dc,Ts,Gc,Uc,nn,Wc,Xe,an,Rc,ws,Kc,Hc,sn,Qc,Ye,rn,Vc,Ss,Jc,Xc,dn,Ir,xt,Kt,Bs,ln,Yc,zs,Zc,Ar,I,cn,ep,pn,tp,Un,op,np,ap,mn,sp,hn,rp,dp,lp,xs,ip,cp,Re,qs,un,pp,mp,$s,fn,hp,up,Fs,_n,fp,_p,Es,gn,gp,bp,F,bn,kp,qt,vp,Ms,yp,Tp,Cs,wp,Sp,Bp,Ht,zp,Ps,xp,qp,js,Os,Ls,Ns,$p,Fp,Is,As,Ds,Gs,Ep,Mp,Us,Ws,Rs,Ks,Cp,Pp,Hs,Qs,kn,Qt,Vt,Vs,vn,jp,Js,Op,Lp,Xs,Np,Ip,Ys,Ap,Dp,Zs,er,tr,or,Gp,Up,nr,ar,sr,rr,Wp,Rp,dr,lr,ir,cr,Kp,Hp,pr,mr,hr,ur,Qp,Vp,Ze,yn,Jp,fr,Xp,Yp,Tn,Zp,et,wn,em,_r,tm,om,Sn,Dr;return S=new $e({}),re=new $e({}),ze=new $e({}),eo=new M({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),oo=new $t({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

# Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration
configuration = BlenderbotSmallConfig()

# Initializing a model from the facebook/blenderbot_small-90M style configuration
model = BlenderbotSmallModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallModel, BlenderbotSmallConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotSmallConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),no=new $e({}),ao=new M({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L67",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),ro=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils_base.py#L2884",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),lo=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils.py#L843",parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),io=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils_base.py#L2864",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),co=new M({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L209"}}),po=new $e({}),mo=new M({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L50",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}]}}),uo=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L96",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fo=new $e({}),_o=new M({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1058",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vo=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1085",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),jt=new zn({props:{$$slots:{default:[kf]},$$scope:{ctx:H}}}),yo=new $t({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

model = BlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),To=new $e({}),wo=new M({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1184",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xo=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1228",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),Lt=new zn({props:{$$slots:{default:[vf]},$$scope:{ctx:H}}}),$o=new $e({}),Fo=new M({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1364"}}),Eo=new M({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1395",parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),Mo=new $t({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = BlenderbotSmallForCausalLM.from_pretrained(
    "facebook/blenderbot_small-90M", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Co=new $e({}),Po=new M({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1174",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),At=new zn({props:{$$slots:{default:[yf]},$$scope:{ctx:H}}}),No=new M({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1186",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),Dt=new zn({props:{$$slots:{default:[Tf]},$$scope:{ctx:H}}}),Io=new $t({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
import tensorflow as tf

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = TFBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, TFBlenderbotSmallModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ao=new $e({}),Do=new M({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1281",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ut=new zn({props:{$$slots:{default:[wf]},$$scope:{ctx:H}}}),Ro=new M({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1314",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),Wt=new zn({props:{$$slots:{default:[Sf]},$$scope:{ctx:H}}}),Ho=new $e({}),Qo=new M({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1218",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),on=new M({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1154",returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),nn=new $t({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),an=new M({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L975",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
`}}),sn=new $t({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),rn=new M({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1038",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
`}}),dn=new $t({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),ln=new $e({}),cn=new M({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1306",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),bn=new M({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1154",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
`}}),Ht=new zn({props:{$$slots:{default:[Bf]},$$scope:{ctx:H}}}),vn=new $e({}),yn=new M({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L975",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
`}}),Tn=new $t({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),wn=new M({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1310",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
`}}),Sn=new $t({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=o("meta"),x=l(),y=o("h1"),T=o("a"),B=o("span"),f(S.$$.fragment),w=l(),q=o("span"),Pe=r("Blenderbot Small"),fe=l(),z=o("p"),je=r("Note that "),U=o("a"),Oe=r("BlenderbotSmallModel"),Le=r(` and
`),W=o("a"),Ne=r("BlenderbotSmallForConditionalGeneration"),Ie=r(` are only used in combination with the checkpoint
`),Q=o("a"),V=r("facebook/blenderbot-90M"),Ae=r(`. Larger Blenderbot checkpoints should
instead be used with `),Z=o("a"),C=r("BlenderbotModel"),O=r(` and
`),_e=o("a"),se=r("BlenderbotForConditionalGeneration"),Fe=l(),J=o("h2"),A=o("a"),Te=o("span"),f(re.$$.fragment),L=l(),we=o("span"),de=r("Overview"),Ee=l(),ee=o("p"),le=r("The Blender chatbot model was proposed in "),ie=o("a"),De=r("Recipes for building an open-domain chatbot"),X=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Me=l(),R=o("p"),Ge=r("The abstract of the paper is the following:"),u=l(),$=o("p"),ce=o("em"),rt=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ke=l(),P=o("p"),dt=r("This model was contributed by "),Se=o("a"),lt=r("patrickvonplaten"),Y=r(`. The authors\u2019 code can be
found `),D=o("a"),it=r("here"),ct=r(" ."),te=l(),pe=o("h2"),ge=o("a"),Be=o("span"),f(ze.$$.fragment),yd=l(),la=o("span"),Td=r("BlenderbotSmallConfig"),Tr=l(),me=o("div"),f(eo.$$.fragment),wd=l(),pt=o("p"),Sd=r("This is the configuration class to store the configuration of a "),xn=o("a"),Bd=r("BlenderbotSmallModel"),zd=r(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),to=o("a"),xd=r("facebook/blenderbot_small-90M"),qd=r(" architecture."),$d=l(),mt=o("p"),Fd=r("Configuration objects inherit from "),qn=o("a"),Ed=r("PretrainedConfig"),Md=r(` and can be used to control the model outputs. Read the
documentation from `),$n=o("a"),Cd=r("PretrainedConfig"),Pd=r(" for more information."),jd=l(),ia=o("p"),Od=r("Example:"),Ld=l(),f(oo.$$.fragment),wr=l(),ht=o("h2"),Ft=o("a"),ca=o("span"),f(no.$$.fragment),Nd=l(),pa=o("span"),Id=r("BlenderbotSmallTokenizer"),Sr=l(),G=o("div"),f(ao.$$.fragment),Ad=l(),ma=o("p"),Dd=r("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Gd=l(),so=o("p"),Ud=r("This tokenizer inherits from "),Fn=o("a"),Wd=r("PreTrainedTokenizer"),Rd=r(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Kd=l(),He=o("div"),f(ro.$$.fragment),Hd=l(),ha=o("p"),Qd=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Vd=l(),ua=o("p"),Jd=r("This implementation does not add special tokens and this method should be overridden in a subclass."),Xd=l(),Et=o("div"),f(lo.$$.fragment),Yd=l(),ut=o("p"),Zd=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=o("code"),el=r("prepare_for_model"),tl=r(" or "),_a=o("code"),ol=r("encode_plus"),nl=r(" methods."),al=l(),Qe=o("div"),f(io.$$.fragment),sl=l(),En=o("p"),rl=r("Create the token type IDs corresponding to the sequences passed. "),Mn=o("a"),dl=r(`What are token type
IDs?`),ll=l(),ga=o("p"),il=r("Should be overridden in a subclass if the model has a special way of building those."),cl=l(),Cn=o("div"),f(co.$$.fragment),Br=l(),ft=o("h2"),Mt=o("a"),ba=o("span"),f(po.$$.fragment),pl=l(),ka=o("span"),ml=r("BlenderbotSmallTokenizerFast"),zr=l(),Ue=o("div"),f(mo.$$.fragment),hl=l(),ho=o("p"),ul=r("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),va=o("em"),fl=r("tokenizers"),_l=r(" library)."),gl=l(),Ct=o("div"),f(uo.$$.fragment),bl=l(),ya=o("p"),kl=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),xr=l(),_t=o("h2"),Pt=o("a"),Ta=o("span"),f(fo.$$.fragment),vl=l(),wa=o("span"),yl=r("BlenderbotSmallModel"),qr=l(),xe=o("div"),f(_o.$$.fragment),Tl=l(),go=o("p"),wl=r(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=o("a"),Sl=r("PreTrainedModel"),Bl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zl=l(),bo=o("p"),xl=r("This model is also a PyTorch "),ko=o("a"),ql=r("torch.nn.Module"),$l=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fl=l(),be=o("div"),f(vo.$$.fragment),El=l(),gt=o("p"),Ml=r("The "),jn=o("a"),Cl=r("BlenderbotSmallModel"),Pl=r(" forward method, overrides the "),Sa=o("code"),jl=r("__call__"),Ol=r(" special method."),Ll=l(),f(jt.$$.fragment),Nl=l(),Ba=o("p"),Il=r("Example:"),Al=l(),f(yo.$$.fragment),$r=l(),bt=o("h2"),Ot=o("a"),za=o("span"),f(To.$$.fragment),Dl=l(),xa=o("span"),Gl=r("BlenderbotSmallForConditionalGeneration"),Fr=l(),qe=o("div"),f(wo.$$.fragment),Ul=l(),So=o("p"),Wl=r(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),On=o("a"),Rl=r("PreTrainedModel"),Kl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl=l(),Bo=o("p"),Ql=r("This model is also a PyTorch "),zo=o("a"),Vl=r("torch.nn.Module"),Jl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xl=l(),oe=o("div"),f(xo.$$.fragment),Yl=l(),kt=o("p"),Zl=r("The "),Ln=o("a"),ei=r("BlenderbotSmallForConditionalGeneration"),ti=r(" forward method, overrides the "),qa=o("code"),oi=r("__call__"),ni=r(" special method."),ai=l(),f(Lt.$$.fragment),si=l(),$a=o("p"),ri=r("Conversation example::"),di=l(),Fa=o("blockquote"),Ea=o("blockquote"),Ma=o("blockquote"),Ca=o("p"),li=r(`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat
too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),ii=l(),Pa=o("blockquote"),ja=o("blockquote"),Oa=o("blockquote"),qo=o("p"),ci=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),La=o("s"),pi=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),mi=r(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019) >>>
inputs.pop(\u201Ctoken_type_ids\u201D) >>> next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D,
tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),Er=l(),vt=o("h2"),Nt=o("a"),Na=o("span"),f($o.$$.fragment),hi=l(),Ia=o("span"),ui=r("BlenderbotSmallForCausalLM"),Mr=l(),yt=o("div"),f(Fo.$$.fragment),fi=l(),Ve=o("div"),f(Eo.$$.fragment),_i=l(),Aa=o("p"),gi=r("Example:"),bi=l(),f(Mo.$$.fragment),Cr=l(),Tt=o("h2"),It=o("a"),Da=o("span"),f(Co.$$.fragment),ki=l(),Ga=o("span"),vi=r("TFBlenderbotSmallModel"),Pr=l(),he=o("div"),f(Po.$$.fragment),yi=l(),jo=o("p"),Ti=r(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=o("a"),wi=r("TFPreTrainedModel"),Si=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bi=l(),Oo=o("p"),zi=r("This model is also a "),Lo=o("a"),xi=r("tf.keras.Model"),qi=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$i=l(),f(At.$$.fragment),Fi=l(),ke=o("div"),f(No.$$.fragment),Ei=l(),wt=o("p"),Mi=r("The "),In=o("a"),Ci=r("TFBlenderbotSmallModel"),Pi=r(" forward method, overrides the "),Ua=o("code"),ji=r("__call__"),Oi=r(" special method."),Li=l(),f(Dt.$$.fragment),Ni=l(),Wa=o("p"),Ii=r("Example:"),Ai=l(),f(Io.$$.fragment),jr=l(),St=o("h2"),Gt=o("a"),Ra=o("span"),f(Ao.$$.fragment),Di=l(),Ka=o("span"),Gi=r("TFBlenderbotSmallForConditionalGeneration"),Or=l(),ue=o("div"),f(Do.$$.fragment),Ui=l(),Go=o("p"),Wi=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=o("a"),Ri=r("TFPreTrainedModel"),Ki=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hi=l(),Uo=o("p"),Qi=r("This model is also a "),Wo=o("a"),Vi=r("tf.keras.Model"),Ji=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xi=l(),f(Ut.$$.fragment),Yi=l(),j=o("div"),f(Ro.$$.fragment),Zi=l(),Bt=o("p"),ec=r("The "),Dn=o("a"),tc=r("TFBlenderbotSmallForConditionalGeneration"),oc=r(" forward method, overrides the "),Ha=o("code"),nc=r("__call__"),ac=r(" special method."),sc=l(),f(Wt.$$.fragment),rc=l(),Qa=o("p"),dc=r("Conversation example::"),lc=l(),Va=o("blockquote"),Ja=o("blockquote"),Xa=o("blockquote"),Ya=o("p"),ic=r(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),cc=l(),Za=o("blockquote"),es=o("blockquote"),ts=o("blockquote"),os=o("p"),pc=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),mc=l(),ns=o("blockquote"),as=o("blockquote"),ss=o("blockquote"),rs=o("p"),hc=r(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),uc=l(),ds=o("blockquote"),ls=o("blockquote"),is=o("blockquote"),Ko=o("p"),fc=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),cs=o("s"),_c=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),gc=r(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),bc=l(),ps=o("blockquote"),ms=o("blockquote"),hs=o("blockquote"),us=o("p"),kc=r(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Lr=l(),zt=o("h2"),Rt=o("a"),fs=o("span"),f(Ho.$$.fragment),vc=l(),_s=o("span"),yc=r("FlaxBlenderbotSmallModel"),Nr=l(),N=o("div"),f(Qo.$$.fragment),Tc=l(),Vo=o("p"),wc=r(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=o("a"),Sc=r("FlaxPreTrainedModel"),Bc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc=l(),Jo=o("p"),xc=r(`This model is also a Flax Linen
`),Xo=o("a"),qc=r("flax.nn.Module"),$c=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fc=l(),gs=o("p"),Ec=r("Finally, this model supports inherent JAX features such as:"),Mc=l(),We=o("ul"),bs=o("li"),Yo=o("a"),Cc=r("Just-In-Time (JIT) compilation"),Pc=l(),ks=o("li"),Zo=o("a"),jc=r("Automatic Differentiation"),Oc=l(),vs=o("li"),en=o("a"),Lc=r("Vectorization"),Nc=l(),ys=o("li"),tn=o("a"),Ic=r("Parallelization"),Ac=l(),Je=o("div"),f(on.$$.fragment),Dc=l(),Ts=o("p"),Gc=r("Example:"),Uc=l(),f(nn.$$.fragment),Wc=l(),Xe=o("div"),f(an.$$.fragment),Rc=l(),ws=o("p"),Kc=r("Example:"),Hc=l(),f(sn.$$.fragment),Qc=l(),Ye=o("div"),f(rn.$$.fragment),Vc=l(),Ss=o("p"),Jc=r("Example:"),Xc=l(),f(dn.$$.fragment),Ir=l(),xt=o("h2"),Kt=o("a"),Bs=o("span"),f(ln.$$.fragment),Yc=l(),zs=o("span"),Zc=r("FlaxBlenderbotForConditionalGeneration"),Ar=l(),I=o("div"),f(cn.$$.fragment),ep=l(),pn=o("p"),tp=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Un=o("a"),op=r("FlaxPreTrainedModel"),np=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ap=l(),mn=o("p"),sp=r(`This model is also a Flax Linen
`),hn=o("a"),rp=r("flax.nn.Module"),dp=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lp=l(),xs=o("p"),ip=r("Finally, this model supports inherent JAX features such as:"),cp=l(),Re=o("ul"),qs=o("li"),un=o("a"),pp=r("Just-In-Time (JIT) compilation"),mp=l(),$s=o("li"),fn=o("a"),hp=r("Automatic Differentiation"),up=l(),Fs=o("li"),_n=o("a"),fp=r("Vectorization"),_p=l(),Es=o("li"),gn=o("a"),gp=r("Parallelization"),bp=l(),F=o("div"),f(bn.$$.fragment),kp=l(),qt=o("p"),vp=r("The "),Ms=o("code"),yp=r("FlaxBlenderbotSmallPreTrainedModel"),Tp=r("forward method, overrides the "),Cs=o("code"),wp=r("__call__"),Sp=r(" special method."),Bp=l(),f(Ht.$$.fragment),zp=l(),Ps=o("p"),xp=r("Summarization example:"),qp=l(),js=o("blockquote"),Os=o("blockquote"),Ls=o("blockquote"),Ns=o("p"),$p=r("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),Fp=l(),Is=o("blockquote"),As=o("blockquote"),Ds=o("blockquote"),Gs=o("p"),Ep=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),Mp=l(),Us=o("blockquote"),Ws=o("blockquote"),Rs=o("blockquote"),Ks=o("p"),Cp=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Pp=l(),Hs=o("blockquote"),Qs=o("blockquote"),kn=o("blockquote"),Qt=o("h1"),Vt=o("a"),Vs=o("span"),f(vn.$$.fragment),jp=l(),Js=o("span"),Op=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Lp=l(),Xs=o("p"),Np=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Ip=l(),Ys=o("p"),Ap=r("Mask filling example:"),Dp=l(),Zs=o("blockquote"),er=o("blockquote"),tr=o("blockquote"),or=o("p"),Gp=r(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Up=l(),nr=o("blockquote"),ar=o("blockquote"),sr=o("blockquote"),rr=o("p"),Wp=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Rp=l(),dr=o("blockquote"),lr=o("blockquote"),ir=o("blockquote"),cr=o("p"),Kp=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Hp=l(),pr=o("blockquote"),mr=o("blockquote"),hr=o("blockquote"),ur=o("p"),Qp=r("tokenizer.decode(predictions).split()"),Vp=l(),Ze=o("div"),f(yn.$$.fragment),Jp=l(),fr=o("p"),Xp=r("Example:"),Yp=l(),f(Tn.$$.fragment),Zp=l(),et=o("div"),f(wn.$$.fragment),em=l(),_r=o("p"),tm=r("Example:"),om=l(),f(Sn.$$.fragment),this.h()},l(s){const m=bf('[data-svelte="svelte-1phssyn"]',document.head);h=n(m,"META",{name:!0,content:!0}),m.forEach(t),x=i(s),y=n(s,"H1",{class:!0});var Bn=a(y);T=n(Bn,"A",{id:!0,class:!0,href:!0});var gr=a(T);B=n(gr,"SPAN",{});var br=a(B);_(S.$$.fragment,br),br.forEach(t),gr.forEach(t),w=i(Bn),q=n(Bn,"SPAN",{});var kr=a(q);Pe=d(kr,"Blenderbot Small"),kr.forEach(t),Bn.forEach(t),fe=i(s),z=n(s,"P",{});var ve=a(z);je=d(ve,"Note that "),U=n(ve,"A",{href:!0});var vr=a(U);Oe=d(vr,"BlenderbotSmallModel"),vr.forEach(t),Le=d(ve,` and
`),W=n(ve,"A",{href:!0});var yr=a(W);Ne=d(yr,"BlenderbotSmallForConditionalGeneration"),yr.forEach(t),Ie=d(ve,` are only used in combination with the checkpoint
`),Q=n(ve,"A",{href:!0,rel:!0});var am=a(Q);V=d(am,"facebook/blenderbot-90M"),am.forEach(t),Ae=d(ve,`. Larger Blenderbot checkpoints should
instead be used with `),Z=n(ve,"A",{href:!0});var sm=a(Z);C=d(sm,"BlenderbotModel"),sm.forEach(t),O=d(ve,` and
`),_e=n(ve,"A",{href:!0});var rm=a(_e);se=d(rm,"BlenderbotForConditionalGeneration"),rm.forEach(t),ve.forEach(t),Fe=i(s),J=n(s,"H2",{class:!0});var Gr=a(J);A=n(Gr,"A",{id:!0,class:!0,href:!0});var dm=a(A);Te=n(dm,"SPAN",{});var lm=a(Te);_(re.$$.fragment,lm),lm.forEach(t),dm.forEach(t),L=i(Gr),we=n(Gr,"SPAN",{});var im=a(we);de=d(im,"Overview"),im.forEach(t),Gr.forEach(t),Ee=i(s),ee=n(s,"P",{});var Ur=a(ee);le=d(Ur,"The Blender chatbot model was proposed in "),ie=n(Ur,"A",{href:!0,rel:!0});var cm=a(ie);De=d(cm,"Recipes for building an open-domain chatbot"),cm.forEach(t),X=d(Ur,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Ur.forEach(t),Me=i(s),R=n(s,"P",{});var pm=a(R);Ge=d(pm,"The abstract of the paper is the following:"),pm.forEach(t),u=i(s),$=n(s,"P",{});var mm=a($);ce=n(mm,"EM",{});var hm=a(ce);rt=d(hm,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),hm.forEach(t),mm.forEach(t),Ke=i(s),P=n(s,"P",{});var Wn=a(P);dt=d(Wn,"This model was contributed by "),Se=n(Wn,"A",{href:!0,rel:!0});var um=a(Se);lt=d(um,"patrickvonplaten"),um.forEach(t),Y=d(Wn,`. The authors\u2019 code can be
found `),D=n(Wn,"A",{href:!0,rel:!0});var fm=a(D);it=d(fm,"here"),fm.forEach(t),ct=d(Wn," ."),Wn.forEach(t),te=i(s),pe=n(s,"H2",{class:!0});var Wr=a(pe);ge=n(Wr,"A",{id:!0,class:!0,href:!0});var _m=a(ge);Be=n(_m,"SPAN",{});var gm=a(Be);_(ze.$$.fragment,gm),gm.forEach(t),_m.forEach(t),yd=i(Wr),la=n(Wr,"SPAN",{});var bm=a(la);Td=d(bm,"BlenderbotSmallConfig"),bm.forEach(t),Wr.forEach(t),Tr=i(s),me=n(s,"DIV",{class:!0});var tt=a(me);_(eo.$$.fragment,tt),wd=i(tt),pt=n(tt,"P",{});var Rn=a(pt);Sd=d(Rn,"This is the configuration class to store the configuration of a "),xn=n(Rn,"A",{href:!0});var km=a(xn);Bd=d(km,"BlenderbotSmallModel"),km.forEach(t),zd=d(Rn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),to=n(Rn,"A",{href:!0,rel:!0});var vm=a(to);xd=d(vm,"facebook/blenderbot_small-90M"),vm.forEach(t),qd=d(Rn," architecture."),Rn.forEach(t),$d=i(tt),mt=n(tt,"P",{});var Kn=a(mt);Fd=d(Kn,"Configuration objects inherit from "),qn=n(Kn,"A",{href:!0});var ym=a(qn);Ed=d(ym,"PretrainedConfig"),ym.forEach(t),Md=d(Kn,` and can be used to control the model outputs. Read the
documentation from `),$n=n(Kn,"A",{href:!0});var Tm=a($n);Cd=d(Tm,"PretrainedConfig"),Tm.forEach(t),Pd=d(Kn," for more information."),Kn.forEach(t),jd=i(tt),ia=n(tt,"P",{});var wm=a(ia);Od=d(wm,"Example:"),wm.forEach(t),Ld=i(tt),_(oo.$$.fragment,tt),tt.forEach(t),wr=i(s),ht=n(s,"H2",{class:!0});var Rr=a(ht);Ft=n(Rr,"A",{id:!0,class:!0,href:!0});var Sm=a(Ft);ca=n(Sm,"SPAN",{});var Bm=a(ca);_(no.$$.fragment,Bm),Bm.forEach(t),Sm.forEach(t),Nd=i(Rr),pa=n(Rr,"SPAN",{});var zm=a(pa);Id=d(zm,"BlenderbotSmallTokenizer"),zm.forEach(t),Rr.forEach(t),Sr=i(s),G=n(s,"DIV",{class:!0});var ye=a(G);_(ao.$$.fragment,ye),Ad=i(ye),ma=n(ye,"P",{});var xm=a(ma);Dd=d(xm,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),xm.forEach(t),Gd=i(ye),so=n(ye,"P",{});var Kr=a(so);Ud=d(Kr,"This tokenizer inherits from "),Fn=n(Kr,"A",{href:!0});var qm=a(Fn);Wd=d(qm,"PreTrainedTokenizer"),qm.forEach(t),Rd=d(Kr,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Kr.forEach(t),Kd=i(ye),He=n(ye,"DIV",{class:!0});var Hn=a(He);_(ro.$$.fragment,Hn),Hd=i(Hn),ha=n(Hn,"P",{});var $m=a(ha);Qd=d($m,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),$m.forEach(t),Vd=i(Hn),ua=n(Hn,"P",{});var Fm=a(ua);Jd=d(Fm,"This implementation does not add special tokens and this method should be overridden in a subclass."),Fm.forEach(t),Hn.forEach(t),Xd=i(ye),Et=n(ye,"DIV",{class:!0});var Hr=a(Et);_(lo.$$.fragment,Hr),Yd=i(Hr),ut=n(Hr,"P",{});var Qn=a(ut);Zd=d(Qn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=n(Qn,"CODE",{});var Em=a(fa);el=d(Em,"prepare_for_model"),Em.forEach(t),tl=d(Qn," or "),_a=n(Qn,"CODE",{});var Mm=a(_a);ol=d(Mm,"encode_plus"),Mm.forEach(t),nl=d(Qn," methods."),Qn.forEach(t),Hr.forEach(t),al=i(ye),Qe=n(ye,"DIV",{class:!0});var Vn=a(Qe);_(io.$$.fragment,Vn),sl=i(Vn),En=n(Vn,"P",{});var nm=a(En);rl=d(nm,"Create the token type IDs corresponding to the sequences passed. "),Mn=n(nm,"A",{href:!0});var Cm=a(Mn);dl=d(Cm,`What are token type
IDs?`),Cm.forEach(t),nm.forEach(t),ll=i(Vn),ga=n(Vn,"P",{});var Pm=a(ga);il=d(Pm,"Should be overridden in a subclass if the model has a special way of building those."),Pm.forEach(t),Vn.forEach(t),cl=i(ye),Cn=n(ye,"DIV",{class:!0});var jm=a(Cn);_(co.$$.fragment,jm),jm.forEach(t),ye.forEach(t),Br=i(s),ft=n(s,"H2",{class:!0});var Qr=a(ft);Mt=n(Qr,"A",{id:!0,class:!0,href:!0});var Om=a(Mt);ba=n(Om,"SPAN",{});var Lm=a(ba);_(po.$$.fragment,Lm),Lm.forEach(t),Om.forEach(t),pl=i(Qr),ka=n(Qr,"SPAN",{});var Nm=a(ka);ml=d(Nm,"BlenderbotSmallTokenizerFast"),Nm.forEach(t),Qr.forEach(t),zr=i(s),Ue=n(s,"DIV",{class:!0});var Jn=a(Ue);_(mo.$$.fragment,Jn),hl=i(Jn),ho=n(Jn,"P",{});var Vr=a(ho);ul=d(Vr,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),va=n(Vr,"EM",{});var Im=a(va);fl=d(Im,"tokenizers"),Im.forEach(t),_l=d(Vr," library)."),Vr.forEach(t),gl=i(Jn),Ct=n(Jn,"DIV",{class:!0});var Jr=a(Ct);_(uo.$$.fragment,Jr),bl=i(Jr),ya=n(Jr,"P",{});var Am=a(ya);kl=d(Am,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Am.forEach(t),Jr.forEach(t),Jn.forEach(t),xr=i(s),_t=n(s,"H2",{class:!0});var Xr=a(_t);Pt=n(Xr,"A",{id:!0,class:!0,href:!0});var Dm=a(Pt);Ta=n(Dm,"SPAN",{});var Gm=a(Ta);_(fo.$$.fragment,Gm),Gm.forEach(t),Dm.forEach(t),vl=i(Xr),wa=n(Xr,"SPAN",{});var Um=a(wa);yl=d(Um,"BlenderbotSmallModel"),Um.forEach(t),Xr.forEach(t),qr=i(s),xe=n(s,"DIV",{class:!0});var Jt=a(xe);_(_o.$$.fragment,Jt),Tl=i(Jt),go=n(Jt,"P",{});var Yr=a(go);wl=d(Yr,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=n(Yr,"A",{href:!0});var Wm=a(Pn);Sl=d(Wm,"PreTrainedModel"),Wm.forEach(t),Bl=d(Yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr.forEach(t),zl=i(Jt),bo=n(Jt,"P",{});var Zr=a(bo);xl=d(Zr,"This model is also a PyTorch "),ko=n(Zr,"A",{href:!0,rel:!0});var Rm=a(ko);ql=d(Rm,"torch.nn.Module"),Rm.forEach(t),$l=d(Zr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zr.forEach(t),Fl=i(Jt),be=n(Jt,"DIV",{class:!0});var ot=a(be);_(vo.$$.fragment,ot),El=i(ot),gt=n(ot,"P",{});var Xn=a(gt);Ml=d(Xn,"The "),jn=n(Xn,"A",{href:!0});var Km=a(jn);Cl=d(Km,"BlenderbotSmallModel"),Km.forEach(t),Pl=d(Xn," forward method, overrides the "),Sa=n(Xn,"CODE",{});var Hm=a(Sa);jl=d(Hm,"__call__"),Hm.forEach(t),Ol=d(Xn," special method."),Xn.forEach(t),Ll=i(ot),_(jt.$$.fragment,ot),Nl=i(ot),Ba=n(ot,"P",{});var Qm=a(Ba);Il=d(Qm,"Example:"),Qm.forEach(t),Al=i(ot),_(yo.$$.fragment,ot),ot.forEach(t),Jt.forEach(t),$r=i(s),bt=n(s,"H2",{class:!0});var ed=a(bt);Ot=n(ed,"A",{id:!0,class:!0,href:!0});var Vm=a(Ot);za=n(Vm,"SPAN",{});var Jm=a(za);_(To.$$.fragment,Jm),Jm.forEach(t),Vm.forEach(t),Dl=i(ed),xa=n(ed,"SPAN",{});var Xm=a(xa);Gl=d(Xm,"BlenderbotSmallForConditionalGeneration"),Xm.forEach(t),ed.forEach(t),Fr=i(s),qe=n(s,"DIV",{class:!0});var Xt=a(qe);_(wo.$$.fragment,Xt),Ul=i(Xt),So=n(Xt,"P",{});var td=a(So);Wl=d(td,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),On=n(td,"A",{href:!0});var Ym=a(On);Rl=d(Ym,"PreTrainedModel"),Ym.forEach(t),Kl=d(td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td.forEach(t),Hl=i(Xt),Bo=n(Xt,"P",{});var od=a(Bo);Ql=d(od,"This model is also a PyTorch "),zo=n(od,"A",{href:!0,rel:!0});var Zm=a(zo);Vl=d(Zm,"torch.nn.Module"),Zm.forEach(t),Jl=d(od,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),od.forEach(t),Xl=i(Xt),oe=n(Xt,"DIV",{class:!0});var Ce=a(oe);_(xo.$$.fragment,Ce),Yl=i(Ce),kt=n(Ce,"P",{});var Yn=a(kt);Zl=d(Yn,"The "),Ln=n(Yn,"A",{href:!0});var eh=a(Ln);ei=d(eh,"BlenderbotSmallForConditionalGeneration"),eh.forEach(t),ti=d(Yn," forward method, overrides the "),qa=n(Yn,"CODE",{});var th=a(qa);oi=d(th,"__call__"),th.forEach(t),ni=d(Yn," special method."),Yn.forEach(t),ai=i(Ce),_(Lt.$$.fragment,Ce),si=i(Ce),$a=n(Ce,"P",{});var oh=a($a);ri=d(oh,"Conversation example::"),oh.forEach(t),di=i(Ce),Fa=n(Ce,"BLOCKQUOTE",{});var nh=a(Fa);Ea=n(nh,"BLOCKQUOTE",{});var ah=a(Ea);Ma=n(ah,"BLOCKQUOTE",{});var sh=a(Ma);Ca=n(sh,"P",{});var rh=a(Ca);li=d(rh,`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat
too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),rh.forEach(t),sh.forEach(t),ah.forEach(t),nh.forEach(t),ii=i(Ce),Pa=n(Ce,"BLOCKQUOTE",{});var dh=a(Pa);ja=n(dh,"BLOCKQUOTE",{});var lh=a(ja);Oa=n(lh,"BLOCKQUOTE",{});var ih=a(Oa);qo=n(ih,"P",{});var nd=a(qo);ci=d(nd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),La=n(nd,"S",{});var ch=a(La);pi=d(ch,"what kind of carbs do they eat? i don\u2019t know much about carbs."),ch.forEach(t),mi=d(nd,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019) >>>
inputs.pop(\u201Ctoken_type_ids\u201D) >>> next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D,
tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),nd.forEach(t),ih.forEach(t),lh.forEach(t),dh.forEach(t),Ce.forEach(t),Xt.forEach(t),Er=i(s),vt=n(s,"H2",{class:!0});var ad=a(vt);Nt=n(ad,"A",{id:!0,class:!0,href:!0});var ph=a(Nt);Na=n(ph,"SPAN",{});var mh=a(Na);_($o.$$.fragment,mh),mh.forEach(t),ph.forEach(t),hi=i(ad),Ia=n(ad,"SPAN",{});var hh=a(Ia);ui=d(hh,"BlenderbotSmallForCausalLM"),hh.forEach(t),ad.forEach(t),Mr=i(s),yt=n(s,"DIV",{class:!0});var sd=a(yt);_(Fo.$$.fragment,sd),fi=i(sd),Ve=n(sd,"DIV",{class:!0});var Zn=a(Ve);_(Eo.$$.fragment,Zn),_i=i(Zn),Aa=n(Zn,"P",{});var uh=a(Aa);gi=d(uh,"Example:"),uh.forEach(t),bi=i(Zn),_(Mo.$$.fragment,Zn),Zn.forEach(t),sd.forEach(t),Cr=i(s),Tt=n(s,"H2",{class:!0});var rd=a(Tt);It=n(rd,"A",{id:!0,class:!0,href:!0});var fh=a(It);Da=n(fh,"SPAN",{});var _h=a(Da);_(Co.$$.fragment,_h),_h.forEach(t),fh.forEach(t),ki=i(rd),Ga=n(rd,"SPAN",{});var gh=a(Ga);vi=d(gh,"TFBlenderbotSmallModel"),gh.forEach(t),rd.forEach(t),Pr=i(s),he=n(s,"DIV",{class:!0});var nt=a(he);_(Po.$$.fragment,nt),yi=i(nt),jo=n(nt,"P",{});var dd=a(jo);Ti=d(dd,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=n(dd,"A",{href:!0});var bh=a(Nn);wi=d(bh,"TFPreTrainedModel"),bh.forEach(t),Si=d(dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dd.forEach(t),Bi=i(nt),Oo=n(nt,"P",{});var ld=a(Oo);zi=d(ld,"This model is also a "),Lo=n(ld,"A",{href:!0,rel:!0});var kh=a(Lo);xi=d(kh,"tf.keras.Model"),kh.forEach(t),qi=d(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(t),$i=i(nt),_(At.$$.fragment,nt),Fi=i(nt),ke=n(nt,"DIV",{class:!0});var at=a(ke);_(No.$$.fragment,at),Ei=i(at),wt=n(at,"P",{});var ea=a(wt);Mi=d(ea,"The "),In=n(ea,"A",{href:!0});var vh=a(In);Ci=d(vh,"TFBlenderbotSmallModel"),vh.forEach(t),Pi=d(ea," forward method, overrides the "),Ua=n(ea,"CODE",{});var yh=a(Ua);ji=d(yh,"__call__"),yh.forEach(t),Oi=d(ea," special method."),ea.forEach(t),Li=i(at),_(Dt.$$.fragment,at),Ni=i(at),Wa=n(at,"P",{});var Th=a(Wa);Ii=d(Th,"Example:"),Th.forEach(t),Ai=i(at),_(Io.$$.fragment,at),at.forEach(t),nt.forEach(t),jr=i(s),St=n(s,"H2",{class:!0});var id=a(St);Gt=n(id,"A",{id:!0,class:!0,href:!0});var wh=a(Gt);Ra=n(wh,"SPAN",{});var Sh=a(Ra);_(Ao.$$.fragment,Sh),Sh.forEach(t),wh.forEach(t),Di=i(id),Ka=n(id,"SPAN",{});var Bh=a(Ka);Gi=d(Bh,"TFBlenderbotSmallForConditionalGeneration"),Bh.forEach(t),id.forEach(t),Or=i(s),ue=n(s,"DIV",{class:!0});var st=a(ue);_(Do.$$.fragment,st),Ui=i(st),Go=n(st,"P",{});var cd=a(Go);Wi=d(cd,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=n(cd,"A",{href:!0});var zh=a(An);Ri=d(zh,"TFPreTrainedModel"),zh.forEach(t),Ki=d(cd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cd.forEach(t),Hi=i(st),Uo=n(st,"P",{});var pd=a(Uo);Qi=d(pd,"This model is also a "),Wo=n(pd,"A",{href:!0,rel:!0});var xh=a(Wo);Vi=d(xh,"tf.keras.Model"),xh.forEach(t),Ji=d(pd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pd.forEach(t),Xi=i(st),_(Ut.$$.fragment,st),Yi=i(st),j=n(st,"DIV",{class:!0});var K=a(j);_(Ro.$$.fragment,K),Zi=i(K),Bt=n(K,"P",{});var ta=a(Bt);ec=d(ta,"The "),Dn=n(ta,"A",{href:!0});var qh=a(Dn);tc=d(qh,"TFBlenderbotSmallForConditionalGeneration"),qh.forEach(t),oc=d(ta," forward method, overrides the "),Ha=n(ta,"CODE",{});var $h=a(Ha);nc=d($h,"__call__"),$h.forEach(t),ac=d(ta," special method."),ta.forEach(t),sc=i(K),_(Wt.$$.fragment,K),rc=i(K),Qa=n(K,"P",{});var Fh=a(Qa);dc=d(Fh,"Conversation example::"),Fh.forEach(t),lc=i(K),Va=n(K,"BLOCKQUOTE",{});var Eh=a(Va);Ja=n(Eh,"BLOCKQUOTE",{});var Mh=a(Ja);Xa=n(Mh,"BLOCKQUOTE",{});var Ch=a(Xa);Ya=n(Ch,"P",{});var Ph=a(Ya);ic=d(Ph,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Ph.forEach(t),Ch.forEach(t),Mh.forEach(t),Eh.forEach(t),cc=i(K),Za=n(K,"BLOCKQUOTE",{});var jh=a(Za);es=n(jh,"BLOCKQUOTE",{});var Oh=a(es);ts=n(Oh,"BLOCKQUOTE",{});var Lh=a(ts);os=n(Lh,"P",{});var Nh=a(os);pc=d(Nh,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Nh.forEach(t),Lh.forEach(t),Oh.forEach(t),jh.forEach(t),mc=i(K),ns=n(K,"BLOCKQUOTE",{});var Ih=a(ns);as=n(Ih,"BLOCKQUOTE",{});var Ah=a(as);ss=n(Ah,"BLOCKQUOTE",{});var Dh=a(ss);rs=n(Dh,"P",{});var Gh=a(rs);hc=d(Gh,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Gh.forEach(t),Dh.forEach(t),Ah.forEach(t),Ih.forEach(t),uc=i(K),ds=n(K,"BLOCKQUOTE",{});var Uh=a(ds);ls=n(Uh,"BLOCKQUOTE",{});var Wh=a(ls);is=n(Wh,"BLOCKQUOTE",{});var Rh=a(is);Ko=n(Rh,"P",{});var md=a(Ko);fc=d(md,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),cs=n(md,"S",{});var Kh=a(cs);_c=d(Kh,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Kh.forEach(t),gc=d(md,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),md.forEach(t),Rh.forEach(t),Wh.forEach(t),Uh.forEach(t),bc=i(K),ps=n(K,"BLOCKQUOTE",{});var Hh=a(ps);ms=n(Hh,"BLOCKQUOTE",{});var Qh=a(ms);hs=n(Qh,"BLOCKQUOTE",{});var Vh=a(hs);us=n(Vh,"P",{});var Jh=a(us);kc=d(Jh,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Jh.forEach(t),Vh.forEach(t),Qh.forEach(t),Hh.forEach(t),K.forEach(t),st.forEach(t),Lr=i(s),zt=n(s,"H2",{class:!0});var hd=a(zt);Rt=n(hd,"A",{id:!0,class:!0,href:!0});var Xh=a(Rt);fs=n(Xh,"SPAN",{});var Yh=a(fs);_(Ho.$$.fragment,Yh),Yh.forEach(t),Xh.forEach(t),vc=i(hd),_s=n(hd,"SPAN",{});var Zh=a(_s);yc=d(Zh,"FlaxBlenderbotSmallModel"),Zh.forEach(t),hd.forEach(t),Nr=i(s),N=n(s,"DIV",{class:!0});var ne=a(N);_(Qo.$$.fragment,ne),Tc=i(ne),Vo=n(ne,"P",{});var ud=a(Vo);wc=d(ud,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=n(ud,"A",{href:!0});var eu=a(Gn);Sc=d(eu,"FlaxPreTrainedModel"),eu.forEach(t),Bc=d(ud,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ud.forEach(t),zc=i(ne),Jo=n(ne,"P",{});var fd=a(Jo);xc=d(fd,`This model is also a Flax Linen
`),Xo=n(fd,"A",{href:!0,rel:!0});var tu=a(Xo);qc=d(tu,"flax.nn.Module"),tu.forEach(t),$c=d(fd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fd.forEach(t),Fc=i(ne),gs=n(ne,"P",{});var ou=a(gs);Ec=d(ou,"Finally, this model supports inherent JAX features such as:"),ou.forEach(t),Mc=i(ne),We=n(ne,"UL",{});var Yt=a(We);bs=n(Yt,"LI",{});var nu=a(bs);Yo=n(nu,"A",{href:!0,rel:!0});var au=a(Yo);Cc=d(au,"Just-In-Time (JIT) compilation"),au.forEach(t),nu.forEach(t),Pc=i(Yt),ks=n(Yt,"LI",{});var su=a(ks);Zo=n(su,"A",{href:!0,rel:!0});var ru=a(Zo);jc=d(ru,"Automatic Differentiation"),ru.forEach(t),su.forEach(t),Oc=i(Yt),vs=n(Yt,"LI",{});var du=a(vs);en=n(du,"A",{href:!0,rel:!0});var lu=a(en);Lc=d(lu,"Vectorization"),lu.forEach(t),du.forEach(t),Nc=i(Yt),ys=n(Yt,"LI",{});var iu=a(ys);tn=n(iu,"A",{href:!0,rel:!0});var cu=a(tn);Ic=d(cu,"Parallelization"),cu.forEach(t),iu.forEach(t),Yt.forEach(t),Ac=i(ne),Je=n(ne,"DIV",{class:!0});var oa=a(Je);_(on.$$.fragment,oa),Dc=i(oa),Ts=n(oa,"P",{});var pu=a(Ts);Gc=d(pu,"Example:"),pu.forEach(t),Uc=i(oa),_(nn.$$.fragment,oa),oa.forEach(t),Wc=i(ne),Xe=n(ne,"DIV",{class:!0});var na=a(Xe);_(an.$$.fragment,na),Rc=i(na),ws=n(na,"P",{});var mu=a(ws);Kc=d(mu,"Example:"),mu.forEach(t),Hc=i(na),_(sn.$$.fragment,na),na.forEach(t),Qc=i(ne),Ye=n(ne,"DIV",{class:!0});var aa=a(Ye);_(rn.$$.fragment,aa),Vc=i(aa),Ss=n(aa,"P",{});var hu=a(Ss);Jc=d(hu,"Example:"),hu.forEach(t),Xc=i(aa),_(dn.$$.fragment,aa),aa.forEach(t),ne.forEach(t),Ir=i(s),xt=n(s,"H2",{class:!0});var _d=a(xt);Kt=n(_d,"A",{id:!0,class:!0,href:!0});var uu=a(Kt);Bs=n(uu,"SPAN",{});var fu=a(Bs);_(ln.$$.fragment,fu),fu.forEach(t),uu.forEach(t),Yc=i(_d),zs=n(_d,"SPAN",{});var _u=a(zs);Zc=d(_u,"FlaxBlenderbotForConditionalGeneration"),_u.forEach(t),_d.forEach(t),Ar=i(s),I=n(s,"DIV",{class:!0});var ae=a(I);_(cn.$$.fragment,ae),ep=i(ae),pn=n(ae,"P",{});var gd=a(pn);tp=d(gd,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Un=n(gd,"A",{href:!0});var gu=a(Un);op=d(gu,"FlaxPreTrainedModel"),gu.forEach(t),np=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),ap=i(ae),mn=n(ae,"P",{});var bd=a(mn);sp=d(bd,`This model is also a Flax Linen
`),hn=n(bd,"A",{href:!0,rel:!0});var bu=a(hn);rp=d(bu,"flax.nn.Module"),bu.forEach(t),dp=d(bd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bd.forEach(t),lp=i(ae),xs=n(ae,"P",{});var ku=a(xs);ip=d(ku,"Finally, this model supports inherent JAX features such as:"),ku.forEach(t),cp=i(ae),Re=n(ae,"UL",{});var Zt=a(Re);qs=n(Zt,"LI",{});var vu=a(qs);un=n(vu,"A",{href:!0,rel:!0});var yu=a(un);pp=d(yu,"Just-In-Time (JIT) compilation"),yu.forEach(t),vu.forEach(t),mp=i(Zt),$s=n(Zt,"LI",{});var Tu=a($s);fn=n(Tu,"A",{href:!0,rel:!0});var wu=a(fn);hp=d(wu,"Automatic Differentiation"),wu.forEach(t),Tu.forEach(t),up=i(Zt),Fs=n(Zt,"LI",{});var Su=a(Fs);_n=n(Su,"A",{href:!0,rel:!0});var Bu=a(_n);fp=d(Bu,"Vectorization"),Bu.forEach(t),Su.forEach(t),_p=i(Zt),Es=n(Zt,"LI",{});var zu=a(Es);gn=n(zu,"A",{href:!0,rel:!0});var xu=a(gn);gp=d(xu,"Parallelization"),xu.forEach(t),zu.forEach(t),Zt.forEach(t),bp=i(ae),F=n(ae,"DIV",{class:!0});var E=a(F);_(bn.$$.fragment,E),kp=i(E),qt=n(E,"P",{});var sa=a(qt);vp=d(sa,"The "),Ms=n(sa,"CODE",{});var qu=a(Ms);yp=d(qu,"FlaxBlenderbotSmallPreTrainedModel"),qu.forEach(t),Tp=d(sa,"forward method, overrides the "),Cs=n(sa,"CODE",{});var $u=a(Cs);wp=d($u,"__call__"),$u.forEach(t),Sp=d(sa," special method."),sa.forEach(t),Bp=i(E),_(Ht.$$.fragment,E),zp=i(E),Ps=n(E,"P",{});var Fu=a(Ps);xp=d(Fu,"Summarization example:"),Fu.forEach(t),qp=i(E),js=n(E,"BLOCKQUOTE",{});var Eu=a(js);Os=n(Eu,"BLOCKQUOTE",{});var Mu=a(Os);Ls=n(Mu,"BLOCKQUOTE",{});var Cu=a(Ls);Ns=n(Cu,"P",{});var Pu=a(Ns);$p=d(Pu,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),Pu.forEach(t),Cu.forEach(t),Mu.forEach(t),Eu.forEach(t),Fp=i(E),Is=n(E,"BLOCKQUOTE",{});var ju=a(Is);As=n(ju,"BLOCKQUOTE",{});var Ou=a(As);Ds=n(Ou,"BLOCKQUOTE",{});var Lu=a(Ds);Gs=n(Lu,"P",{});var Nu=a(Gs);Ep=d(Nu,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),Nu.forEach(t),Lu.forEach(t),Ou.forEach(t),ju.forEach(t),Mp=i(E),Us=n(E,"BLOCKQUOTE",{});var Iu=a(Us);Ws=n(Iu,"BLOCKQUOTE",{});var Au=a(Ws);Rs=n(Au,"BLOCKQUOTE",{});var Du=a(Rs);Ks=n(Du,"P",{});var Gu=a(Ks);Cp=d(Gu,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Gu.forEach(t),Du.forEach(t),Au.forEach(t),Iu.forEach(t),Pp=i(E),Hs=n(E,"BLOCKQUOTE",{});var Uu=a(Hs);Qs=n(Uu,"BLOCKQUOTE",{});var Wu=a(Qs);kn=n(Wu,"BLOCKQUOTE",{});var kd=a(kn);Qt=n(kd,"H1",{class:!0});var vd=a(Qt);Vt=n(vd,"A",{id:!0,class:!0,href:!0});var Ru=a(Vt);Vs=n(Ru,"SPAN",{});var Ku=a(Vs);_(vn.$$.fragment,Ku),Ku.forEach(t),Ru.forEach(t),jp=i(vd),Js=n(vd,"SPAN",{});var Hu=a(Js);Op=d(Hu,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Hu.forEach(t),vd.forEach(t),Lp=i(kd),Xs=n(kd,"P",{});var Qu=a(Xs);Np=d(Qu,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Qu.forEach(t),kd.forEach(t),Wu.forEach(t),Uu.forEach(t),Ip=i(E),Ys=n(E,"P",{});var Vu=a(Ys);Ap=d(Vu,"Mask filling example:"),Vu.forEach(t),Dp=i(E),Zs=n(E,"BLOCKQUOTE",{});var Ju=a(Zs);er=n(Ju,"BLOCKQUOTE",{});var Xu=a(er);tr=n(Xu,"BLOCKQUOTE",{});var Yu=a(tr);or=n(Yu,"P",{});var Zu=a(or);Gp=d(Zu,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Zu.forEach(t),Yu.forEach(t),Xu.forEach(t),Ju.forEach(t),Up=i(E),nr=n(E,"BLOCKQUOTE",{});var ef=a(nr);ar=n(ef,"BLOCKQUOTE",{});var tf=a(ar);sr=n(tf,"BLOCKQUOTE",{});var of=a(sr);rr=n(of,"P",{});var nf=a(rr);Wp=d(nf,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),nf.forEach(t),of.forEach(t),tf.forEach(t),ef.forEach(t),Rp=i(E),dr=n(E,"BLOCKQUOTE",{});var af=a(dr);lr=n(af,"BLOCKQUOTE",{});var sf=a(lr);ir=n(sf,"BLOCKQUOTE",{});var rf=a(ir);cr=n(rf,"P",{});var df=a(cr);Kp=d(df,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),df.forEach(t),rf.forEach(t),sf.forEach(t),af.forEach(t),Hp=i(E),pr=n(E,"BLOCKQUOTE",{});var lf=a(pr);mr=n(lf,"BLOCKQUOTE",{});var cf=a(mr);hr=n(cf,"BLOCKQUOTE",{});var pf=a(hr);ur=n(pf,"P",{});var mf=a(ur);Qp=d(mf,"tokenizer.decode(predictions).split()"),mf.forEach(t),pf.forEach(t),cf.forEach(t),lf.forEach(t),E.forEach(t),Vp=i(ae),Ze=n(ae,"DIV",{class:!0});var ra=a(Ze);_(yn.$$.fragment,ra),Jp=i(ra),fr=n(ra,"P",{});var hf=a(fr);Xp=d(hf,"Example:"),hf.forEach(t),Yp=i(ra),_(Tn.$$.fragment,ra),ra.forEach(t),Zp=i(ae),et=n(ae,"DIV",{class:!0});var da=a(et);_(wn.$$.fragment,da),em=i(da),_r=n(da,"P",{});var uf=a(_r);tm=d(uf,"Example:"),uf.forEach(t),om=i(da),_(Sn.$$.fragment,da),da.forEach(t),ae.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(xf)),c(T,"id","blenderbot-small"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot-small"),c(y,"class","relative group"),c(U,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(W,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(Q,"href","https://huggingface.co/facebook/blenderbot-90M"),c(Q,"rel","nofollow"),c(Z,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(_e,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(A,"id","overview"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#overview"),c(J,"class","relative group"),c(ie,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(ie,"rel","nofollow"),c(Se,"href","https://huggingface.co/patrickvonplaten"),c(Se,"rel","nofollow"),c(D,"href","https://github.com/facebookresearch/ParlAI"),c(D,"rel","nofollow"),c(ge,"id","transformers.BlenderbotSmallConfig"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#transformers.BlenderbotSmallConfig"),c(pe,"class","relative group"),c(xn,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(to,"href","https://huggingface.co/facebook/blenderbot_small-90M"),c(to,"rel","nofollow"),c(qn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c($n,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(me,"class","docstring"),c(Ft,"id","transformers.BlenderbotSmallTokenizer"),c(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ft,"href","#transformers.BlenderbotSmallTokenizer"),c(ht,"class","relative group"),c(Fn,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(He,"class","docstring"),c(Et,"class","docstring"),c(Mn,"href","../glossary#token-type-ids"),c(Qe,"class","docstring"),c(Cn,"class","docstring"),c(G,"class","docstring"),c(Mt,"id","transformers.BlenderbotSmallTokenizerFast"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.BlenderbotSmallTokenizerFast"),c(ft,"class","relative group"),c(Ct,"class","docstring"),c(Ue,"class","docstring"),c(Pt,"id","transformers.BlenderbotSmallModel"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.BlenderbotSmallModel"),c(_t,"class","relative group"),c(Pn,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ko,"rel","nofollow"),c(jn,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(be,"class","docstring"),c(xe,"class","docstring"),c(Ot,"id","transformers.BlenderbotSmallForConditionalGeneration"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.BlenderbotSmallForConditionalGeneration"),c(bt,"class","relative group"),c(On,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zo,"rel","nofollow"),c(Ln,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(oe,"class","docstring"),c(qe,"class","docstring"),c(Nt,"id","transformers.BlenderbotSmallForCausalLM"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.BlenderbotSmallForCausalLM"),c(vt,"class","relative group"),c(Ve,"class","docstring"),c(yt,"class","docstring"),c(It,"id","transformers.TFBlenderbotSmallModel"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.TFBlenderbotSmallModel"),c(Tt,"class","relative group"),c(Nn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Lo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Lo,"rel","nofollow"),c(In,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),c(ke,"class","docstring"),c(he,"class","docstring"),c(Gt,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),c(St,"class","relative group"),c(An,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Wo,"rel","nofollow"),c(Dn,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),c(j,"class","docstring"),c(ue,"class","docstring"),c(Rt,"id","transformers.FlaxBlenderbotSmallModel"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.FlaxBlenderbotSmallModel"),c(zt,"class","relative group"),c(Gn,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Xo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Xo,"rel","nofollow"),c(Yo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Yo,"rel","nofollow"),c(Zo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Zo,"rel","nofollow"),c(en,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(en,"rel","nofollow"),c(tn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(tn,"rel","nofollow"),c(Je,"class","docstring"),c(Xe,"class","docstring"),c(Ye,"class","docstring"),c(N,"class","docstring"),c(Kt,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(xt,"class","relative group"),c(Un,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(hn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(hn,"rel","nofollow"),c(un,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(un,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(Vt,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Qt,"class","relative group"),c(F,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(I,"class","docstring")},m(s,m){e(document.head,h),p(s,x,m),p(s,y,m),e(y,T),e(T,B),g(S,B,null),e(y,w),e(y,q),e(q,Pe),p(s,fe,m),p(s,z,m),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ie),e(z,Q),e(Q,V),e(z,Ae),e(z,Z),e(Z,C),e(z,O),e(z,_e),e(_e,se),p(s,Fe,m),p(s,J,m),e(J,A),e(A,Te),g(re,Te,null),e(J,L),e(J,we),e(we,de),p(s,Ee,m),p(s,ee,m),e(ee,le),e(ee,ie),e(ie,De),e(ee,X),p(s,Me,m),p(s,R,m),e(R,Ge),p(s,u,m),p(s,$,m),e($,ce),e(ce,rt),p(s,Ke,m),p(s,P,m),e(P,dt),e(P,Se),e(Se,lt),e(P,Y),e(P,D),e(D,it),e(P,ct),p(s,te,m),p(s,pe,m),e(pe,ge),e(ge,Be),g(ze,Be,null),e(pe,yd),e(pe,la),e(la,Td),p(s,Tr,m),p(s,me,m),g(eo,me,null),e(me,wd),e(me,pt),e(pt,Sd),e(pt,xn),e(xn,Bd),e(pt,zd),e(pt,to),e(to,xd),e(pt,qd),e(me,$d),e(me,mt),e(mt,Fd),e(mt,qn),e(qn,Ed),e(mt,Md),e(mt,$n),e($n,Cd),e(mt,Pd),e(me,jd),e(me,ia),e(ia,Od),e(me,Ld),g(oo,me,null),p(s,wr,m),p(s,ht,m),e(ht,Ft),e(Ft,ca),g(no,ca,null),e(ht,Nd),e(ht,pa),e(pa,Id),p(s,Sr,m),p(s,G,m),g(ao,G,null),e(G,Ad),e(G,ma),e(ma,Dd),e(G,Gd),e(G,so),e(so,Ud),e(so,Fn),e(Fn,Wd),e(so,Rd),e(G,Kd),e(G,He),g(ro,He,null),e(He,Hd),e(He,ha),e(ha,Qd),e(He,Vd),e(He,ua),e(ua,Jd),e(G,Xd),e(G,Et),g(lo,Et,null),e(Et,Yd),e(Et,ut),e(ut,Zd),e(ut,fa),e(fa,el),e(ut,tl),e(ut,_a),e(_a,ol),e(ut,nl),e(G,al),e(G,Qe),g(io,Qe,null),e(Qe,sl),e(Qe,En),e(En,rl),e(En,Mn),e(Mn,dl),e(Qe,ll),e(Qe,ga),e(ga,il),e(G,cl),e(G,Cn),g(co,Cn,null),p(s,Br,m),p(s,ft,m),e(ft,Mt),e(Mt,ba),g(po,ba,null),e(ft,pl),e(ft,ka),e(ka,ml),p(s,zr,m),p(s,Ue,m),g(mo,Ue,null),e(Ue,hl),e(Ue,ho),e(ho,ul),e(ho,va),e(va,fl),e(ho,_l),e(Ue,gl),e(Ue,Ct),g(uo,Ct,null),e(Ct,bl),e(Ct,ya),e(ya,kl),p(s,xr,m),p(s,_t,m),e(_t,Pt),e(Pt,Ta),g(fo,Ta,null),e(_t,vl),e(_t,wa),e(wa,yl),p(s,qr,m),p(s,xe,m),g(_o,xe,null),e(xe,Tl),e(xe,go),e(go,wl),e(go,Pn),e(Pn,Sl),e(go,Bl),e(xe,zl),e(xe,bo),e(bo,xl),e(bo,ko),e(ko,ql),e(bo,$l),e(xe,Fl),e(xe,be),g(vo,be,null),e(be,El),e(be,gt),e(gt,Ml),e(gt,jn),e(jn,Cl),e(gt,Pl),e(gt,Sa),e(Sa,jl),e(gt,Ol),e(be,Ll),g(jt,be,null),e(be,Nl),e(be,Ba),e(Ba,Il),e(be,Al),g(yo,be,null),p(s,$r,m),p(s,bt,m),e(bt,Ot),e(Ot,za),g(To,za,null),e(bt,Dl),e(bt,xa),e(xa,Gl),p(s,Fr,m),p(s,qe,m),g(wo,qe,null),e(qe,Ul),e(qe,So),e(So,Wl),e(So,On),e(On,Rl),e(So,Kl),e(qe,Hl),e(qe,Bo),e(Bo,Ql),e(Bo,zo),e(zo,Vl),e(Bo,Jl),e(qe,Xl),e(qe,oe),g(xo,oe,null),e(oe,Yl),e(oe,kt),e(kt,Zl),e(kt,Ln),e(Ln,ei),e(kt,ti),e(kt,qa),e(qa,oi),e(kt,ni),e(oe,ai),g(Lt,oe,null),e(oe,si),e(oe,$a),e($a,ri),e(oe,di),e(oe,Fa),e(Fa,Ea),e(Ea,Ma),e(Ma,Ca),e(Ca,li),e(oe,ii),e(oe,Pa),e(Pa,ja),e(ja,Oa),e(Oa,qo),e(qo,ci),e(qo,La),e(La,pi),e(qo,mi),p(s,Er,m),p(s,vt,m),e(vt,Nt),e(Nt,Na),g($o,Na,null),e(vt,hi),e(vt,Ia),e(Ia,ui),p(s,Mr,m),p(s,yt,m),g(Fo,yt,null),e(yt,fi),e(yt,Ve),g(Eo,Ve,null),e(Ve,_i),e(Ve,Aa),e(Aa,gi),e(Ve,bi),g(Mo,Ve,null),p(s,Cr,m),p(s,Tt,m),e(Tt,It),e(It,Da),g(Co,Da,null),e(Tt,ki),e(Tt,Ga),e(Ga,vi),p(s,Pr,m),p(s,he,m),g(Po,he,null),e(he,yi),e(he,jo),e(jo,Ti),e(jo,Nn),e(Nn,wi),e(jo,Si),e(he,Bi),e(he,Oo),e(Oo,zi),e(Oo,Lo),e(Lo,xi),e(Oo,qi),e(he,$i),g(At,he,null),e(he,Fi),e(he,ke),g(No,ke,null),e(ke,Ei),e(ke,wt),e(wt,Mi),e(wt,In),e(In,Ci),e(wt,Pi),e(wt,Ua),e(Ua,ji),e(wt,Oi),e(ke,Li),g(Dt,ke,null),e(ke,Ni),e(ke,Wa),e(Wa,Ii),e(ke,Ai),g(Io,ke,null),p(s,jr,m),p(s,St,m),e(St,Gt),e(Gt,Ra),g(Ao,Ra,null),e(St,Di),e(St,Ka),e(Ka,Gi),p(s,Or,m),p(s,ue,m),g(Do,ue,null),e(ue,Ui),e(ue,Go),e(Go,Wi),e(Go,An),e(An,Ri),e(Go,Ki),e(ue,Hi),e(ue,Uo),e(Uo,Qi),e(Uo,Wo),e(Wo,Vi),e(Uo,Ji),e(ue,Xi),g(Ut,ue,null),e(ue,Yi),e(ue,j),g(Ro,j,null),e(j,Zi),e(j,Bt),e(Bt,ec),e(Bt,Dn),e(Dn,tc),e(Bt,oc),e(Bt,Ha),e(Ha,nc),e(Bt,ac),e(j,sc),g(Wt,j,null),e(j,rc),e(j,Qa),e(Qa,dc),e(j,lc),e(j,Va),e(Va,Ja),e(Ja,Xa),e(Xa,Ya),e(Ya,ic),e(j,cc),e(j,Za),e(Za,es),e(es,ts),e(ts,os),e(os,pc),e(j,mc),e(j,ns),e(ns,as),e(as,ss),e(ss,rs),e(rs,hc),e(j,uc),e(j,ds),e(ds,ls),e(ls,is),e(is,Ko),e(Ko,fc),e(Ko,cs),e(cs,_c),e(Ko,gc),e(j,bc),e(j,ps),e(ps,ms),e(ms,hs),e(hs,us),e(us,kc),p(s,Lr,m),p(s,zt,m),e(zt,Rt),e(Rt,fs),g(Ho,fs,null),e(zt,vc),e(zt,_s),e(_s,yc),p(s,Nr,m),p(s,N,m),g(Qo,N,null),e(N,Tc),e(N,Vo),e(Vo,wc),e(Vo,Gn),e(Gn,Sc),e(Vo,Bc),e(N,zc),e(N,Jo),e(Jo,xc),e(Jo,Xo),e(Xo,qc),e(Jo,$c),e(N,Fc),e(N,gs),e(gs,Ec),e(N,Mc),e(N,We),e(We,bs),e(bs,Yo),e(Yo,Cc),e(We,Pc),e(We,ks),e(ks,Zo),e(Zo,jc),e(We,Oc),e(We,vs),e(vs,en),e(en,Lc),e(We,Nc),e(We,ys),e(ys,tn),e(tn,Ic),e(N,Ac),e(N,Je),g(on,Je,null),e(Je,Dc),e(Je,Ts),e(Ts,Gc),e(Je,Uc),g(nn,Je,null),e(N,Wc),e(N,Xe),g(an,Xe,null),e(Xe,Rc),e(Xe,ws),e(ws,Kc),e(Xe,Hc),g(sn,Xe,null),e(N,Qc),e(N,Ye),g(rn,Ye,null),e(Ye,Vc),e(Ye,Ss),e(Ss,Jc),e(Ye,Xc),g(dn,Ye,null),p(s,Ir,m),p(s,xt,m),e(xt,Kt),e(Kt,Bs),g(ln,Bs,null),e(xt,Yc),e(xt,zs),e(zs,Zc),p(s,Ar,m),p(s,I,m),g(cn,I,null),e(I,ep),e(I,pn),e(pn,tp),e(pn,Un),e(Un,op),e(pn,np),e(I,ap),e(I,mn),e(mn,sp),e(mn,hn),e(hn,rp),e(mn,dp),e(I,lp),e(I,xs),e(xs,ip),e(I,cp),e(I,Re),e(Re,qs),e(qs,un),e(un,pp),e(Re,mp),e(Re,$s),e($s,fn),e(fn,hp),e(Re,up),e(Re,Fs),e(Fs,_n),e(_n,fp),e(Re,_p),e(Re,Es),e(Es,gn),e(gn,gp),e(I,bp),e(I,F),g(bn,F,null),e(F,kp),e(F,qt),e(qt,vp),e(qt,Ms),e(Ms,yp),e(qt,Tp),e(qt,Cs),e(Cs,wp),e(qt,Sp),e(F,Bp),g(Ht,F,null),e(F,zp),e(F,Ps),e(Ps,xp),e(F,qp),e(F,js),e(js,Os),e(Os,Ls),e(Ls,Ns),e(Ns,$p),e(F,Fp),e(F,Is),e(Is,As),e(As,Ds),e(Ds,Gs),e(Gs,Ep),e(F,Mp),e(F,Us),e(Us,Ws),e(Ws,Rs),e(Rs,Ks),e(Ks,Cp),e(F,Pp),e(F,Hs),e(Hs,Qs),e(Qs,kn),e(kn,Qt),e(Qt,Vt),e(Vt,Vs),g(vn,Vs,null),e(Qt,jp),e(Qt,Js),e(Js,Op),e(kn,Lp),e(kn,Xs),e(Xs,Np),e(F,Ip),e(F,Ys),e(Ys,Ap),e(F,Dp),e(F,Zs),e(Zs,er),e(er,tr),e(tr,or),e(or,Gp),e(F,Up),e(F,nr),e(nr,ar),e(ar,sr),e(sr,rr),e(rr,Wp),e(F,Rp),e(F,dr),e(dr,lr),e(lr,ir),e(ir,cr),e(cr,Kp),e(F,Hp),e(F,pr),e(pr,mr),e(mr,hr),e(hr,ur),e(ur,Qp),e(I,Vp),e(I,Ze),g(yn,Ze,null),e(Ze,Jp),e(Ze,fr),e(fr,Xp),e(Ze,Yp),g(Tn,Ze,null),e(I,Zp),e(I,et),g(wn,et,null),e(et,em),e(et,_r),e(_r,tm),e(et,om),g(Sn,et,null),Dr=!0},p(s,[m]){const Bn={};m&2&&(Bn.$$scope={dirty:m,ctx:s}),jt.$set(Bn);const gr={};m&2&&(gr.$$scope={dirty:m,ctx:s}),Lt.$set(gr);const br={};m&2&&(br.$$scope={dirty:m,ctx:s}),At.$set(br);const kr={};m&2&&(kr.$$scope={dirty:m,ctx:s}),Dt.$set(kr);const ve={};m&2&&(ve.$$scope={dirty:m,ctx:s}),Ut.$set(ve);const vr={};m&2&&(vr.$$scope={dirty:m,ctx:s}),Wt.$set(vr);const yr={};m&2&&(yr.$$scope={dirty:m,ctx:s}),Ht.$set(yr)},i(s){Dr||(b(S.$$.fragment,s),b(re.$$.fragment,s),b(ze.$$.fragment,s),b(eo.$$.fragment,s),b(oo.$$.fragment,s),b(no.$$.fragment,s),b(ao.$$.fragment,s),b(ro.$$.fragment,s),b(lo.$$.fragment,s),b(io.$$.fragment,s),b(co.$$.fragment,s),b(po.$$.fragment,s),b(mo.$$.fragment,s),b(uo.$$.fragment,s),b(fo.$$.fragment,s),b(_o.$$.fragment,s),b(vo.$$.fragment,s),b(jt.$$.fragment,s),b(yo.$$.fragment,s),b(To.$$.fragment,s),b(wo.$$.fragment,s),b(xo.$$.fragment,s),b(Lt.$$.fragment,s),b($o.$$.fragment,s),b(Fo.$$.fragment,s),b(Eo.$$.fragment,s),b(Mo.$$.fragment,s),b(Co.$$.fragment,s),b(Po.$$.fragment,s),b(At.$$.fragment,s),b(No.$$.fragment,s),b(Dt.$$.fragment,s),b(Io.$$.fragment,s),b(Ao.$$.fragment,s),b(Do.$$.fragment,s),b(Ut.$$.fragment,s),b(Ro.$$.fragment,s),b(Wt.$$.fragment,s),b(Ho.$$.fragment,s),b(Qo.$$.fragment,s),b(on.$$.fragment,s),b(nn.$$.fragment,s),b(an.$$.fragment,s),b(sn.$$.fragment,s),b(rn.$$.fragment,s),b(dn.$$.fragment,s),b(ln.$$.fragment,s),b(cn.$$.fragment,s),b(bn.$$.fragment,s),b(Ht.$$.fragment,s),b(vn.$$.fragment,s),b(yn.$$.fragment,s),b(Tn.$$.fragment,s),b(wn.$$.fragment,s),b(Sn.$$.fragment,s),Dr=!0)},o(s){k(S.$$.fragment,s),k(re.$$.fragment,s),k(ze.$$.fragment,s),k(eo.$$.fragment,s),k(oo.$$.fragment,s),k(no.$$.fragment,s),k(ao.$$.fragment,s),k(ro.$$.fragment,s),k(lo.$$.fragment,s),k(io.$$.fragment,s),k(co.$$.fragment,s),k(po.$$.fragment,s),k(mo.$$.fragment,s),k(uo.$$.fragment,s),k(fo.$$.fragment,s),k(_o.$$.fragment,s),k(vo.$$.fragment,s),k(jt.$$.fragment,s),k(yo.$$.fragment,s),k(To.$$.fragment,s),k(wo.$$.fragment,s),k(xo.$$.fragment,s),k(Lt.$$.fragment,s),k($o.$$.fragment,s),k(Fo.$$.fragment,s),k(Eo.$$.fragment,s),k(Mo.$$.fragment,s),k(Co.$$.fragment,s),k(Po.$$.fragment,s),k(At.$$.fragment,s),k(No.$$.fragment,s),k(Dt.$$.fragment,s),k(Io.$$.fragment,s),k(Ao.$$.fragment,s),k(Do.$$.fragment,s),k(Ut.$$.fragment,s),k(Ro.$$.fragment,s),k(Wt.$$.fragment,s),k(Ho.$$.fragment,s),k(Qo.$$.fragment,s),k(on.$$.fragment,s),k(nn.$$.fragment,s),k(an.$$.fragment,s),k(sn.$$.fragment,s),k(rn.$$.fragment,s),k(dn.$$.fragment,s),k(ln.$$.fragment,s),k(cn.$$.fragment,s),k(bn.$$.fragment,s),k(Ht.$$.fragment,s),k(vn.$$.fragment,s),k(yn.$$.fragment,s),k(Tn.$$.fragment,s),k(wn.$$.fragment,s),k(Sn.$$.fragment,s),Dr=!1},d(s){t(h),s&&t(x),s&&t(y),v(S),s&&t(fe),s&&t(z),s&&t(Fe),s&&t(J),v(re),s&&t(Ee),s&&t(ee),s&&t(Me),s&&t(R),s&&t(u),s&&t($),s&&t(Ke),s&&t(P),s&&t(te),s&&t(pe),v(ze),s&&t(Tr),s&&t(me),v(eo),v(oo),s&&t(wr),s&&t(ht),v(no),s&&t(Sr),s&&t(G),v(ao),v(ro),v(lo),v(io),v(co),s&&t(Br),s&&t(ft),v(po),s&&t(zr),s&&t(Ue),v(mo),v(uo),s&&t(xr),s&&t(_t),v(fo),s&&t(qr),s&&t(xe),v(_o),v(vo),v(jt),v(yo),s&&t($r),s&&t(bt),v(To),s&&t(Fr),s&&t(qe),v(wo),v(xo),v(Lt),s&&t(Er),s&&t(vt),v($o),s&&t(Mr),s&&t(yt),v(Fo),v(Eo),v(Mo),s&&t(Cr),s&&t(Tt),v(Co),s&&t(Pr),s&&t(he),v(Po),v(At),v(No),v(Dt),v(Io),s&&t(jr),s&&t(St),v(Ao),s&&t(Or),s&&t(ue),v(Do),v(Ut),v(Ro),v(Wt),s&&t(Lr),s&&t(zt),v(Ho),s&&t(Nr),s&&t(N),v(Qo),v(on),v(nn),v(an),v(sn),v(rn),v(dn),s&&t(Ir),s&&t(xt),v(ln),s&&t(Ar),s&&t(I),v(cn),v(bn),v(Ht),v(vn),v(yn),v(Tn),v(wn),v(Sn)}}}const xf={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function qf(H,h,x){let{fw:y}=h;return H.$$set=T=>{"fw"in T&&x(0,y=T.fw)},[y]}class jf extends ff{constructor(h){super();_f(this,h,qf,zf,gf,{fw:0})}}export{jf as default,xf as metadata};
