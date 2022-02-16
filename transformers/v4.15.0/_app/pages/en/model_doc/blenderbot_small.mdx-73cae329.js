import{S as pf,i as hf,s as uf,e as t,k as l,w as f,t as r,L as mf,c as n,d as o,m as i,a,x as _,h as d,b as c,J as e,g as p,y as g,q as b,o as k,B as v}from"../../../chunks/vendor-b1433968.js";import{T as Sn}from"../../../chunks/Tip-c3840994.js";import{D as P}from"../../../chunks/Docstring-ff504c58.js";import{C as qo}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as qe}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function ff(H){let u,z,y,T,x;return{c(){u=t("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=t("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var F=a(y);T=d(F,"Module"),F.forEach(o),x=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,u,w),e(u,z),e(u,y),e(y,T),e(u,x)},d(S){S&&o(u)}}}function _f(H){let u,z,y,T,x;return{c(){u=t("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=t("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var F=a(y);T=d(F,"Module"),F.forEach(o),x=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,u,w),e(u,z),e(u,y),e(y,T),e(u,x)},d(S){S&&o(u)}}}function gf(H){let u,z,y,T,x,S,w,F,Pe,fe,B,je,U,Oe,Le,W,Ne,Ae,Q,V,Ie,Z,M,O,_e,se,Ee,J,I,Te,re,L,we,de,$e,ee,le,ie,De,X,Me,R,Ge;return{c(){u=t("p"),z=r("TF 2.0 models accepts two formats as inputs:"),y=l(),T=t("ul"),x=t("li"),S=r("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),F=t("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),fe=l(),B=t("p"),je=r("This second option is useful when using "),U=t("code"),Oe=r("tf.keras.Model.fit"),Le=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),W=t("code"),Ne=r("model(inputs)"),Ae=r("."),Q=l(),V=t("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Z=l(),M=t("ul"),O=t("li"),_e=r("a single Tensor with "),se=t("code"),Ee=r("input_ids"),J=r(" only and nothing else: "),I=t("code"),Te=r("model(input_ids)"),re=l(),L=t("li"),we=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=t("code"),$e=r("model([input_ids, attention_mask])"),ee=r(" or "),le=t("code"),ie=r("model([input_ids, attention_mask, token_type_ids])"),De=l(),X=t("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=t("code"),Ge=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=n(m,"P",{});var q=a(u);z=d(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),y=i(m),T=n(m,"UL",{});var ce=a(T);x=n(ce,"LI",{});var ro=a(x);S=d(ro,"having all inputs as keyword arguments (like PyTorch models), or"),ro.forEach(o),w=i(ce),F=n(ce,"LI",{});var Ke=a(F);Pe=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(o),ce.forEach(o),fe=i(m),B=n(m,"P",{});var C=a(B);je=d(C,"This second option is useful when using "),U=n(C,"CODE",{});var lo=a(U);Oe=d(lo,"tf.keras.Model.fit"),lo.forEach(o),Le=d(C,` method which currently requires having all
the tensors in the first argument of the model call function: `),W=n(C,"CODE",{});var Se=a(W);Ne=d(Se,"model(inputs)"),Se.forEach(o),Ae=d(C,"."),C.forEach(o),Q=i(m),V=n(m,"P",{});var io=a(V);Ie=d(io,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),io.forEach(o),Z=i(m),M=n(m,"UL",{});var Y=a(M);O=n(Y,"LI",{});var D=a(O);_e=d(D,"a single Tensor with "),se=n(D,"CODE",{});var co=a(se);Ee=d(co,"input_ids"),co.forEach(o),J=d(D," only and nothing else: "),I=n(D,"CODE",{});var po=a(I);Te=d(po,"model(input_ids)"),po.forEach(o),D.forEach(o),re=i(Y),L=n(Y,"LI",{});var oe=a(L);we=d(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n(oe,"CODE",{});var pe=a(de);$e=d(pe,"model([input_ids, attention_mask])"),pe.forEach(o),ee=d(oe," or "),le=n(oe,"CODE",{});var ge=a(le);ie=d(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(o),oe.forEach(o),De=i(Y),X=n(Y,"LI",{});var xe=a(X);Me=d(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(xe,"CODE",{});var Be=a(R);Ge=d(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(o),xe.forEach(o),Y.forEach(o)},m(m,q){p(m,u,q),e(u,z),p(m,y,q),p(m,T,q),e(T,x),e(x,S),e(T,w),e(T,F),e(F,Pe),p(m,fe,q),p(m,B,q),e(B,je),e(B,U),e(U,Oe),e(B,Le),e(B,W),e(W,Ne),e(B,Ae),p(m,Q,q),p(m,V,q),e(V,Ie),p(m,Z,q),p(m,M,q),e(M,O),e(O,_e),e(O,se),e(se,Ee),e(O,J),e(O,I),e(I,Te),e(M,re),e(M,L),e(L,we),e(L,de),e(de,$e),e(L,ee),e(L,le),e(le,ie),e(M,De),e(M,X),e(X,Me),e(X,R),e(R,Ge)},d(m){m&&o(u),m&&o(y),m&&o(T),m&&o(fe),m&&o(B),m&&o(Q),m&&o(V),m&&o(Z),m&&o(M)}}}function bf(H){let u,z,y,T,x;return{c(){u=t("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=t("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var F=a(y);T=d(F,"Module"),F.forEach(o),x=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,u,w),e(u,z),e(u,y),e(y,T),e(u,x)},d(S){S&&o(u)}}}function kf(H){let u,z,y,T,x,S,w,F,Pe,fe,B,je,U,Oe,Le,W,Ne,Ae,Q,V,Ie,Z,M,O,_e,se,Ee,J,I,Te,re,L,we,de,$e,ee,le,ie,De,X,Me,R,Ge;return{c(){u=t("p"),z=r("TF 2.0 models accepts two formats as inputs:"),y=l(),T=t("ul"),x=t("li"),S=r("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),F=t("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),fe=l(),B=t("p"),je=r("This second option is useful when using "),U=t("code"),Oe=r("tf.keras.Model.fit"),Le=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),W=t("code"),Ne=r("model(inputs)"),Ae=r("."),Q=l(),V=t("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Z=l(),M=t("ul"),O=t("li"),_e=r("a single Tensor with "),se=t("code"),Ee=r("input_ids"),J=r(" only and nothing else: "),I=t("code"),Te=r("model(input_ids)"),re=l(),L=t("li"),we=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=t("code"),$e=r("model([input_ids, attention_mask])"),ee=r(" or "),le=t("code"),ie=r("model([input_ids, attention_mask, token_type_ids])"),De=l(),X=t("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=t("code"),Ge=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=n(m,"P",{});var q=a(u);z=d(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),y=i(m),T=n(m,"UL",{});var ce=a(T);x=n(ce,"LI",{});var ro=a(x);S=d(ro,"having all inputs as keyword arguments (like PyTorch models), or"),ro.forEach(o),w=i(ce),F=n(ce,"LI",{});var Ke=a(F);Pe=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(o),ce.forEach(o),fe=i(m),B=n(m,"P",{});var C=a(B);je=d(C,"This second option is useful when using "),U=n(C,"CODE",{});var lo=a(U);Oe=d(lo,"tf.keras.Model.fit"),lo.forEach(o),Le=d(C,` method which currently requires having all
the tensors in the first argument of the model call function: `),W=n(C,"CODE",{});var Se=a(W);Ne=d(Se,"model(inputs)"),Se.forEach(o),Ae=d(C,"."),C.forEach(o),Q=i(m),V=n(m,"P",{});var io=a(V);Ie=d(io,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),io.forEach(o),Z=i(m),M=n(m,"UL",{});var Y=a(M);O=n(Y,"LI",{});var D=a(O);_e=d(D,"a single Tensor with "),se=n(D,"CODE",{});var co=a(se);Ee=d(co,"input_ids"),co.forEach(o),J=d(D," only and nothing else: "),I=n(D,"CODE",{});var po=a(I);Te=d(po,"model(input_ids)"),po.forEach(o),D.forEach(o),re=i(Y),L=n(Y,"LI",{});var oe=a(L);we=d(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n(oe,"CODE",{});var pe=a(de);$e=d(pe,"model([input_ids, attention_mask])"),pe.forEach(o),ee=d(oe," or "),le=n(oe,"CODE",{});var ge=a(le);ie=d(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(o),oe.forEach(o),De=i(Y),X=n(Y,"LI",{});var xe=a(X);Me=d(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(xe,"CODE",{});var Be=a(R);Ge=d(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(o),xe.forEach(o),Y.forEach(o)},m(m,q){p(m,u,q),e(u,z),p(m,y,q),p(m,T,q),e(T,x),e(x,S),e(T,w),e(T,F),e(F,Pe),p(m,fe,q),p(m,B,q),e(B,je),e(B,U),e(U,Oe),e(B,Le),e(B,W),e(W,Ne),e(B,Ae),p(m,Q,q),p(m,V,q),e(V,Ie),p(m,Z,q),p(m,M,q),e(M,O),e(O,_e),e(O,se),e(se,Ee),e(O,J),e(O,I),e(I,Te),e(M,re),e(M,L),e(L,we),e(L,de),e(de,$e),e(L,ee),e(L,le),e(le,ie),e(M,De),e(M,X),e(X,Me),e(X,R),e(R,Ge)},d(m){m&&o(u),m&&o(y),m&&o(T),m&&o(fe),m&&o(B),m&&o(Q),m&&o(V),m&&o(Z),m&&o(M)}}}function vf(H){let u,z,y,T,x;return{c(){u=t("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=t("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var F=a(y);T=d(F,"Module"),F.forEach(o),x=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,u,w),e(u,z),e(u,y),e(y,T),e(u,x)},d(S){S&&o(u)}}}function yf(H){let u,z,y,T,x;return{c(){u=t("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=t("code"),T=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var F=a(y);T=d(F,"Module"),F.forEach(o),x=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(S,w){p(S,u,w),e(u,z),e(u,y),e(y,T),e(u,x)},d(S){S&&o(u)}}}function Tf(H){let u,z,y,T,x,S,w,F,Pe,fe,B,je,U,Oe,Le,W,Ne,Ae,Q,V,Ie,Z,M,O,_e,se,Ee,J,I,Te,re,L,we,de,$e,ee,le,ie,De,X,Me,R,Ge,m,q,ce,ro,Ke,C,lo,Se,io,Y,D,co,po,oe,pe,ge,xe,Be,bd,sa,kd,vr,he,et,vd,ho,yd,xn,Td,wd,ot,Sd,xd,Bd,uo,zd,Bn,Fd,qd,zn,Ed,$d,Md,ra,Cd,Pd,tt,yr,mo,Eo,da,nt,jd,la,Od,Tr,G,at,Ld,ia,Nd,Ad,st,Id,Fn,Dd,Gd,Ud,He,rt,Wd,ca,Rd,Kd,pa,Hd,Qd,$o,dt,Vd,fo,Jd,ha,Xd,Yd,ua,Zd,el,ol,Qe,lt,tl,qn,nl,En,al,sl,ma,rl,dl,fa,wr,_o,Mo,_a,it,ll,ga,il,Sr,Ue,ct,cl,pt,pl,ba,hl,ul,ml,Co,ht,fl,ka,_l,xr,go,Po,va,ut,gl,ya,bl,Br,ze,mt,kl,ft,vl,$n,yl,Tl,wl,_t,Sl,gt,xl,Bl,zl,be,bt,Fl,bo,ql,Mn,El,$l,Ta,Ml,Cl,Pl,jo,jl,wa,Ol,Ll,kt,zr,ko,Oo,Sa,vt,Nl,xa,Al,Fr,Fe,yt,Il,Tt,Dl,Cn,Gl,Ul,Wl,wt,Rl,St,Kl,Hl,Ql,te,xt,Vl,vo,Jl,Pn,Xl,Yl,Ba,Zl,ei,oi,Lo,ti,za,ni,ai,Fa,qa,Ea,$a,si,ri,Ma,Ca,Pa,Bt,di,ja,li,ii,qr,yo,No,Oa,zt,ci,La,pi,Er,Ft,Ve,qt,hi,Na,ui,mi,Et,$r,To,Ao,Aa,$t,fi,Ia,_i,Mr,ue,Mt,gi,Ct,bi,jn,ki,vi,yi,Pt,Ti,jt,wi,Si,xi,Io,Bi,ke,Ot,zi,wo,Fi,On,qi,Ei,Da,$i,Mi,Ci,Do,Pi,Ga,ji,Oi,Lt,Cr,So,Go,Ua,Nt,Li,Wa,Ni,Pr,me,At,Ai,It,Ii,Ln,Di,Gi,Ui,Dt,Wi,Gt,Ri,Ki,Hi,Uo,Qi,j,Ut,Vi,xo,Ji,Nn,Xi,Yi,Ra,Zi,ec,oc,Wo,tc,Ka,nc,ac,Ha,Qa,Va,Ja,sc,rc,Xa,Ya,Za,es,dc,lc,os,ts,ns,as,ic,cc,ss,rs,ds,Wt,pc,ls,hc,uc,mc,is,cs,ps,hs,fc,jr,Bo,Ro,us,Rt,_c,ms,gc,Or,N,Kt,bc,Ht,kc,An,vc,yc,Tc,Qt,wc,Vt,Sc,xc,Bc,fs,zc,Fc,We,_s,Jt,qc,Ec,gs,Xt,$c,Mc,bs,Yt,Cc,Pc,ks,Zt,jc,Oc,Je,en,Lc,vs,Nc,Ac,on,Ic,Xe,tn,Dc,ys,Gc,Uc,nn,Wc,Ye,an,Rc,Ts,Kc,Hc,sn,Lr,zo,Ko,ws,rn,Qc,Ss,Vc,Nr,A,dn,Jc,ln,Xc,In,Yc,Zc,ep,cn,op,pn,tp,np,ap,xs,sp,rp,Re,Bs,hn,dp,lp,zs,un,ip,cp,Fs,mn,pp,hp,qs,fn,up,mp,E,_n,fp,Fo,_p,Es,gp,bp,$s,kp,vp,yp,Ho,Tp,Ms,wp,Sp,Cs,Ps,js,Os,xp,Bp,Ls,Ns,As,Is,zp,Fp,Ds,Gs,Us,Ws,qp,Ep,Rs,Ks,gn,Qo,Vo,Hs,bn,$p,Qs,Mp,Cp,Vs,Pp,jp,Js,Op,Lp,Xs,Ys,Zs,er,Np,Ap,or,tr,nr,ar,Ip,Dp,sr,rr,dr,lr,Gp,Up,ir,cr,pr,hr,Wp,Rp,Ze,kn,Kp,ur,Hp,Qp,vn,Vp,eo,yn,Jp,mr,Xp,Yp,Tn,Ar;return S=new qe({}),re=new qe({}),Be=new qe({}),et=new P({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or
<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BlenderbotSmallConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BlenderbotSmallConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BlenderbotSmallConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BlenderbotSmallConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BlenderbotSmallConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BlenderbotSmallConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BlenderbotSmallConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BlenderbotSmallConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BlenderbotSmallConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BlenderbotSmallConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BlenderbotSmallConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BlenderbotSmallConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BlenderbotSmallConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.BlenderbotSmallConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotSmallConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),tt=new qo({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),nt=new qe({}),at=new P({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L67",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),rt=new P({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/tokenization_utils_base.py#L2837",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),dt=new P({props:{name:"get\\_special\\_tokens\\_mask",anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/tokenization_utils.py#L836",parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),lt=new P({props:{name:"create\\_token\\_type\\_ids\\_from\\_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/tokenization_utils_base.py#L2818",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),it=new qe({}),ct=new P({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L50",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}]}}),ht=new P({props:{name:"create\\_token\\_type\\_ids\\_from\\_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L96",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ut=new qe({}),mt=new P({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1068",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bt=new P({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1095",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation.
If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotSmallModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotSmallModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jo=new Sn({props:{$$slots:{default:[ff]},$$scope:{ctx:H}}}),kt=new qo({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

model = BlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

input_ids = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt").input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vt=new qe({}),yt=new P({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1192",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xt=new P({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1236",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation.
If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new Sn({props:{$$slots:{default:[_f]},$$scope:{ctx:H}}}),zt=new qe({}),qt=new P({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1399",parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a>
for details.</p>
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
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Et=new qo({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/bart-large')
model = BlenderbotSmallForCausalLM.from_pretrained('facebook/bart-large', add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForCausalLM.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$t=new qe({}),Mt=new P({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1180",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Io=new Sn({props:{$$slots:{default:[gf]},$$scope:{ctx:H}}}),Ot=new P({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1192",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation.
If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotSmallModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotSmallModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotSmallModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotSmallModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new Sn({props:{$$slots:{default:[bf]},$$scope:{ctx:H}}}),Lt=new qo({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
import tensorflow as tf

tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/blenderbot_small-90M')
model = TFBlenderbotSmallModel.from_pretrained('facebook/blenderbot_small-90M')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, TFBlenderbotSmallModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Nt=new qe({}),At=new P({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1287",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Uo=new Sn({props:{$$slots:{default:[kf]},$$scope:{ctx:H}}}),Ut=new P({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1320",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation.
If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wo=new Sn({props:{$$slots:{default:[vf]},$$scope:{ctx:H}}}),Rt=new qe({}),Kt=new P({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1217",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),en=new P({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1153",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new qo({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/blenderbot_small-90M')
model = FlaxBlenderbotSmallModel.from_pretrained('facebook/blenderbot_small-90M')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L975",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new qo({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained('facebook/blenderbot_small-90M')
tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/blenderbot_small-90M')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='np')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),an=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1038",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new qo({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained('facebook/blenderbot_small-90M')
tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/blenderbot_small-90M')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='np')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),rn=new qe({}),dn=new P({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1305",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),_n=new P({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1153",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new Sn({props:{$$slots:{default:[yf]},$$scope:{ctx:H}}}),bn=new qe({}),kn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L975",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new qo({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained('facebook/blenderbot_small-90M')
tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/blenderbot_small-90M')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='np')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),yn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1309",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new qo({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained('facebook/blenderbot_small-90M')
tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/blenderbot_small-90M')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='np')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=t("meta"),z=l(),y=t("h1"),T=t("a"),x=t("span"),f(S.$$.fragment),w=l(),F=t("span"),Pe=r("Blenderbot Small"),fe=l(),B=t("p"),je=r("Note that "),U=t("a"),Oe=r("BlenderbotSmallModel"),Le=r(` and
`),W=t("a"),Ne=r("BlenderbotSmallForConditionalGeneration"),Ae=r(` are only used in combination with the checkpoint
`),Q=t("a"),V=r("facebook/blenderbot-90M"),Ie=r(`. Larger Blenderbot checkpoints should
instead be used with `),Z=t("a"),M=r("BlenderbotModel"),O=r(` and
`),_e=t("a"),se=r("BlenderbotForConditionalGeneration"),Ee=l(),J=t("h2"),I=t("a"),Te=t("span"),f(re.$$.fragment),L=l(),we=t("span"),de=r("Overview"),$e=l(),ee=t("p"),le=r("The Blender chatbot model was proposed in "),ie=t("a"),De=r("Recipes for building an open-domain chatbot"),X=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Me=l(),R=t("p"),Ge=r("The abstract of the paper is the following:"),m=l(),q=t("p"),ce=t("em"),ro=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ke=l(),C=t("p"),lo=r("This model was contributed by "),Se=t("a"),io=r("patrickvonplaten"),Y=r(`. The authors\u2019 code can be
found `),D=t("a"),co=r("here"),po=r(" ."),oe=l(),pe=t("h2"),ge=t("a"),xe=t("span"),f(Be.$$.fragment),bd=l(),sa=t("span"),kd=r("BlenderbotSmallConfig"),vr=l(),he=t("div"),f(et.$$.fragment),vd=l(),ho=t("p"),yd=r("This is the configuration class to store the configuration of a "),xn=t("a"),Td=r("BlenderbotSmallModel"),wd=r(`. It is
used to instantiate an BlenderbotSmall model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),ot=t("a"),Sd=r("facebook/blenderbot_small-90M"),xd=r(" architecture."),Bd=l(),uo=t("p"),zd=r("Configuration objects inherit from "),Bn=t("a"),Fd=r("PretrainedConfig"),qd=r(` and can be used to control the model
outputs. Read the documentation from `),zn=t("a"),Ed=r("PretrainedConfig"),$d=r(" for more information."),Md=l(),ra=t("p"),Cd=r("Example:"),Pd=l(),f(tt.$$.fragment),yr=l(),mo=t("h2"),Eo=t("a"),da=t("span"),f(nt.$$.fragment),jd=l(),la=t("span"),Od=r("BlenderbotSmallTokenizer"),Tr=l(),G=t("div"),f(at.$$.fragment),Ld=l(),ia=t("p"),Nd=r("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Ad=l(),st=t("p"),Id=r("This tokenizer inherits from "),Fn=t("a"),Dd=r("PreTrainedTokenizer"),Gd=r(` which contains most of the main methods.
Users should refer to the superclass for more information regarding methods.`),Ud=l(),He=t("div"),f(rt.$$.fragment),Wd=l(),ca=t("p"),Rd=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Kd=l(),pa=t("p"),Hd=r("This implementation does not add special tokens and this method should be overridden in a subclass."),Qd=l(),$o=t("div"),f(dt.$$.fragment),Vd=l(),fo=t("p"),Jd=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ha=t("code"),Xd=r("prepare_for_model"),Yd=r(" or "),ua=t("code"),Zd=r("encode_plus"),el=r(" methods."),ol=l(),Qe=t("div"),f(lt.$$.fragment),tl=l(),qn=t("p"),nl=r("Create the token type IDs corresponding to the sequences passed. "),En=t("a"),al=r("What are token type IDs?"),sl=l(),ma=t("p"),rl=r("Should be overridden in a subclass if the model has a special way of building those."),dl=l(),fa=t("div"),wr=l(),_o=t("h2"),Mo=t("a"),_a=t("span"),f(it.$$.fragment),ll=l(),ga=t("span"),il=r("BlenderbotSmallTokenizerFast"),Sr=l(),Ue=t("div"),f(ct.$$.fragment),cl=l(),pt=t("p"),pl=r("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ba=t("em"),hl=r("tokenizers"),ul=r(" library)."),ml=l(),Co=t("div"),f(ht.$$.fragment),fl=l(),ka=t("p"),_l=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),xr=l(),go=t("h2"),Po=t("a"),va=t("span"),f(ut.$$.fragment),gl=l(),ya=t("span"),bl=r("BlenderbotSmallModel"),Br=l(),ze=t("div"),f(mt.$$.fragment),kl=l(),ft=t("p"),vl=r(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$n=t("a"),yl=r("PreTrainedModel"),Tl=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),wl=l(),_t=t("p"),Sl=r("This model is also a PyTorch "),gt=t("a"),xl=r("torch.nn.Module"),Bl=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),zl=l(),be=t("div"),f(bt.$$.fragment),Fl=l(),bo=t("p"),ql=r("The "),Mn=t("a"),El=r("BlenderbotSmallModel"),$l=r(" forward method, overrides the "),Ta=t("code"),Ml=r("__call__"),Cl=r(" special method."),Pl=l(),f(jo.$$.fragment),jl=l(),wa=t("p"),Ol=r("Example:"),Ll=l(),f(kt.$$.fragment),zr=l(),ko=t("h2"),Oo=t("a"),Sa=t("span"),f(vt.$$.fragment),Nl=l(),xa=t("span"),Al=r("BlenderbotSmallForConditionalGeneration"),Fr=l(),Fe=t("div"),f(yt.$$.fragment),Il=l(),Tt=t("p"),Dl=r(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),Cn=t("a"),Gl=r("PreTrainedModel"),Ul=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Wl=l(),wt=t("p"),Rl=r("This model is also a PyTorch "),St=t("a"),Kl=r("torch.nn.Module"),Hl=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ql=l(),te=t("div"),f(xt.$$.fragment),Vl=l(),vo=t("p"),Jl=r("The "),Pn=t("a"),Xl=r("BlenderbotSmallForConditionalGeneration"),Yl=r(" forward method, overrides the "),Ba=t("code"),Zl=r("__call__"),ei=r(" special method."),oi=l(),f(Lo.$$.fragment),ti=l(),za=t("p"),ni=r("Conversation example::"),ai=l(),Fa=t("blockquote"),qa=t("blockquote"),Ea=t("blockquote"),$a=t("p"),si=r(`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration
mname = \u2018facebook/blenderbot_small-90M\u2019
model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)
UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D
print(\u201CHuman: \u201D, UTTERANCE)
inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019)
reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])
what kind of carbs do they eat? i don\u2019t know much about carbs.`),ri=l(),Ma=t("blockquote"),Ca=t("blockquote"),Pa=t("blockquote"),Bt=t("p"),di=r(`REPLY = \u201CI\u2019m not sure\u201D
print(\u201CHuman: \u201D, REPLY)
NEXT_UTTERANCE = (
\u2026 \u201CMy friends are cool but they eat too many carbs.</s> \u201D
\u2026 \u201D`),ja=t("s"),li=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),ii=r(` \u201D
\u2026 \u201D<s>I\u2019m not sure.\u201D
\u2026 )
inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019)
inputs.pop(\u201Ctoken_type_ids\u201D)
next_reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),qr=l(),yo=t("h2"),No=t("a"),Oa=t("span"),f(zt.$$.fragment),ci=l(),La=t("span"),pi=r("BlenderbotSmallForCausalLM"),Er=l(),Ft=t("div"),Ve=t("div"),f(qt.$$.fragment),hi=l(),Na=t("p"),ui=r("Example:"),mi=l(),f(Et.$$.fragment),$r=l(),To=t("h2"),Ao=t("a"),Aa=t("span"),f($t.$$.fragment),fi=l(),Ia=t("span"),_i=r("TFBlenderbotSmallModel"),Mr=l(),ue=t("div"),f(Mt.$$.fragment),gi=l(),Ct=t("p"),bi=r(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=t("a"),ki=r("TFPreTrainedModel"),vi=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),yi=l(),Pt=t("p"),Ti=r("This model is also a "),jt=t("a"),wi=r("tf.keras.Model"),Si=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),xi=l(),f(Io.$$.fragment),Bi=l(),ke=t("div"),f(Ot.$$.fragment),zi=l(),wo=t("p"),Fi=r("The "),On=t("a"),qi=r("TFBlenderbotSmallModel"),Ei=r(" forward method, overrides the "),Da=t("code"),$i=r("__call__"),Mi=r(" special method."),Ci=l(),f(Do.$$.fragment),Pi=l(),Ga=t("p"),ji=r("Example:"),Oi=l(),f(Lt.$$.fragment),Cr=l(),So=t("h2"),Go=t("a"),Ua=t("span"),f(Nt.$$.fragment),Li=l(),Wa=t("span"),Ni=r("TFBlenderbotSmallForConditionalGeneration"),Pr=l(),me=t("div"),f(At.$$.fragment),Ai=l(),It=t("p"),Ii=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ln=t("a"),Di=r("TFPreTrainedModel"),Gi=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ui=l(),Dt=t("p"),Wi=r("This model is also a "),Gt=t("a"),Ri=r("tf.keras.Model"),Ki=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Hi=l(),f(Uo.$$.fragment),Qi=l(),j=t("div"),f(Ut.$$.fragment),Vi=l(),xo=t("p"),Ji=r("The "),Nn=t("a"),Xi=r("TFBlenderbotSmallForConditionalGeneration"),Yi=r(" forward method, overrides the "),Ra=t("code"),Zi=r("__call__"),ec=r(" special method."),oc=l(),f(Wo.$$.fragment),tc=l(),Ka=t("p"),nc=r("Conversation example::"),ac=l(),Ha=t("blockquote"),Qa=t("blockquote"),Va=t("blockquote"),Ja=t("p"),sc=r(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration
mname = \u2018facebook/blenderbot_small-90M\u2019
model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),rc=l(),Xa=t("blockquote"),Ya=t("blockquote"),Za=t("blockquote"),es=t("p"),dc=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D
print(\u201CHuman: \u201D, UTTERANCE)
inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),lc=l(),os=t("blockquote"),ts=t("blockquote"),ns=t("blockquote"),as=t("p"),ic=r(`reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])
what kind of carbs do they eat? i don\u2019t know much about carbs.`),cc=l(),ss=t("blockquote"),rs=t("blockquote"),ds=t("blockquote"),Wt=t("p"),pc=r(`REPLY = \u201CI\u2019m not sure\u201D
print(\u201CHuman: \u201D, REPLY)
NEXT_UTTERANCE = (
\u2026 \u201CMy friends are cool but they eat too many carbs.</s> \u201D
\u2026 \u201D`),ls=t("s"),hc=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),uc=r(` \u201D
\u2026 \u201D<s>I\u2019m not sure.\u201D
\u2026 )`),mc=l(),is=t("blockquote"),cs=t("blockquote"),ps=t("blockquote"),hs=t("p"),fc=r(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
inputs.pop(\u201Ctoken_type_ids\u201D)
next_reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),jr=l(),Bo=t("h2"),Ro=t("a"),us=t("span"),f(Rt.$$.fragment),_c=l(),ms=t("span"),gc=r("FlaxBlenderbotSmallModel"),Or=l(),N=t("div"),f(Kt.$$.fragment),bc=l(),Ht=t("p"),kc=r(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),An=t("a"),vc=r("FlaxPreTrainedModel"),yc=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Tc=l(),Qt=t("p"),wc=r("This model is also a Flax Linen "),Vt=t("a"),Sc=r("flax.nn.Module"),xc=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bc=l(),fs=t("p"),zc=r("Finally, this model supports inherent JAX features such as:"),Fc=l(),We=t("ul"),_s=t("li"),Jt=t("a"),qc=r("Just-In-Time (JIT) compilation"),Ec=l(),gs=t("li"),Xt=t("a"),$c=r("Automatic Differentiation"),Mc=l(),bs=t("li"),Yt=t("a"),Cc=r("Vectorization"),Pc=l(),ks=t("li"),Zt=t("a"),jc=r("Parallelization"),Oc=l(),Je=t("div"),f(en.$$.fragment),Lc=l(),vs=t("p"),Nc=r("Example:"),Ac=l(),f(on.$$.fragment),Ic=l(),Xe=t("div"),f(tn.$$.fragment),Dc=l(),ys=t("p"),Gc=r("Example:"),Uc=l(),f(nn.$$.fragment),Wc=l(),Ye=t("div"),f(an.$$.fragment),Rc=l(),Ts=t("p"),Kc=r("Example:"),Hc=l(),f(sn.$$.fragment),Lr=l(),zo=t("h2"),Ko=t("a"),ws=t("span"),f(rn.$$.fragment),Qc=l(),Ss=t("span"),Vc=r("FlaxBlenderbotForConditionalGeneration"),Nr=l(),A=t("div"),f(dn.$$.fragment),Jc=l(),ln=t("p"),Xc=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=t("a"),Yc=r("FlaxPreTrainedModel"),Zc=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ep=l(),cn=t("p"),op=r("This model is also a Flax Linen "),pn=t("a"),tp=r("flax.nn.Module"),np=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ap=l(),xs=t("p"),sp=r("Finally, this model supports inherent JAX features such as:"),rp=l(),Re=t("ul"),Bs=t("li"),hn=t("a"),dp=r("Just-In-Time (JIT) compilation"),lp=l(),zs=t("li"),un=t("a"),ip=r("Automatic Differentiation"),cp=l(),Fs=t("li"),mn=t("a"),pp=r("Vectorization"),hp=l(),qs=t("li"),fn=t("a"),up=r("Parallelization"),mp=l(),E=t("div"),f(_n.$$.fragment),fp=l(),Fo=t("p"),_p=r("The "),Es=t("code"),gp=r("FlaxBlenderbotSmallPreTrainedModel"),bp=r(" forward method, overrides the "),$s=t("code"),kp=r("__call__"),vp=r(" special method."),yp=l(),f(Ho.$$.fragment),Tp=l(),Ms=t("p"),wp=r("Summarization example::"),Sp=l(),Cs=t("blockquote"),Ps=t("blockquote"),js=t("blockquote"),Os=t("p"),xp=r("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),Bp=l(),Ls=t("blockquote"),Ns=t("blockquote"),As=t("blockquote"),Is=t("p"),zp=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),Fp=l(),Ds=t("blockquote"),Gs=t("blockquote"),Us=t("blockquote"),Ws=t("p"),qp=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Ep=l(),Rs=t("blockquote"),Ks=t("blockquote"),gn=t("blockquote"),Qo=t("h1"),Vo=t("a"),Hs=t("span"),f(bn.$$.fragment),$p=l(),Qs=t("span"),Mp=r("Generate Summary"),Cp=l(),Vs=t("p"),Pp=r(`summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`),jp=l(),Js=t("p"),Op=r("Mask filling example::"),Lp=l(),Xs=t("blockquote"),Ys=t("blockquote"),Zs=t("blockquote"),er=t("p"),Np=r(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)
TXT = \u201CMy friends are <mask> but they eat too many carbs.\u201D`),Ap=l(),or=t("blockquote"),tr=t("blockquote"),nr=t("blockquote"),ar=t("p"),Ip=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits`),Dp=l(),sr=t("blockquote"),rr=t("blockquote"),dr=t("blockquote"),lr=t("p"),Gp=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs)`),Up=l(),ir=t("blockquote"),cr=t("blockquote"),pr=t("blockquote"),hr=t("p"),Wp=r("tokenizer.decode(predictions).split()"),Rp=l(),Ze=t("div"),f(kn.$$.fragment),Kp=l(),ur=t("p"),Hp=r("Example:"),Qp=l(),f(vn.$$.fragment),Vp=l(),eo=t("div"),f(yn.$$.fragment),Jp=l(),mr=t("p"),Xp=r("Example:"),Yp=l(),f(Tn.$$.fragment),this.h()},l(s){const h=mf('[data-svelte="svelte-1phssyn"]',document.head);u=n(h,"META",{name:!0,content:!0}),h.forEach(o),z=i(s),y=n(s,"H1",{class:!0});var wn=a(y);T=n(wn,"A",{id:!0,class:!0,href:!0});var fr=a(T);x=n(fr,"SPAN",{});var _r=a(x);_(S.$$.fragment,_r),_r.forEach(o),fr.forEach(o),w=i(wn),F=n(wn,"SPAN",{});var gr=a(F);Pe=d(gr,"Blenderbot Small"),gr.forEach(o),wn.forEach(o),fe=i(s),B=n(s,"P",{});var ve=a(B);je=d(ve,"Note that "),U=n(ve,"A",{href:!0});var br=a(U);Oe=d(br,"BlenderbotSmallModel"),br.forEach(o),Le=d(ve,` and
`),W=n(ve,"A",{href:!0});var kr=a(W);Ne=d(kr,"BlenderbotSmallForConditionalGeneration"),kr.forEach(o),Ae=d(ve,` are only used in combination with the checkpoint
`),Q=n(ve,"A",{href:!0,rel:!0});var eh=a(Q);V=d(eh,"facebook/blenderbot-90M"),eh.forEach(o),Ie=d(ve,`. Larger Blenderbot checkpoints should
instead be used with `),Z=n(ve,"A",{href:!0});var oh=a(Z);M=d(oh,"BlenderbotModel"),oh.forEach(o),O=d(ve,` and
`),_e=n(ve,"A",{href:!0});var th=a(_e);se=d(th,"BlenderbotForConditionalGeneration"),th.forEach(o),ve.forEach(o),Ee=i(s),J=n(s,"H2",{class:!0});var Ir=a(J);I=n(Ir,"A",{id:!0,class:!0,href:!0});var nh=a(I);Te=n(nh,"SPAN",{});var ah=a(Te);_(re.$$.fragment,ah),ah.forEach(o),nh.forEach(o),L=i(Ir),we=n(Ir,"SPAN",{});var sh=a(we);de=d(sh,"Overview"),sh.forEach(o),Ir.forEach(o),$e=i(s),ee=n(s,"P",{});var Dr=a(ee);le=d(Dr,"The Blender chatbot model was proposed in "),ie=n(Dr,"A",{href:!0,rel:!0});var rh=a(ie);De=d(rh,"Recipes for building an open-domain chatbot"),rh.forEach(o),X=d(Dr,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Dr.forEach(o),Me=i(s),R=n(s,"P",{});var dh=a(R);Ge=d(dh,"The abstract of the paper is the following:"),dh.forEach(o),m=i(s),q=n(s,"P",{});var lh=a(q);ce=n(lh,"EM",{});var ih=a(ce);ro=d(ih,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),ih.forEach(o),lh.forEach(o),Ke=i(s),C=n(s,"P",{});var Dn=a(C);lo=d(Dn,"This model was contributed by "),Se=n(Dn,"A",{href:!0,rel:!0});var ch=a(Se);io=d(ch,"patrickvonplaten"),ch.forEach(o),Y=d(Dn,`. The authors\u2019 code can be
found `),D=n(Dn,"A",{href:!0,rel:!0});var ph=a(D);co=d(ph,"here"),ph.forEach(o),po=d(Dn," ."),Dn.forEach(o),oe=i(s),pe=n(s,"H2",{class:!0});var Gr=a(pe);ge=n(Gr,"A",{id:!0,class:!0,href:!0});var hh=a(ge);xe=n(hh,"SPAN",{});var uh=a(xe);_(Be.$$.fragment,uh),uh.forEach(o),hh.forEach(o),bd=i(Gr),sa=n(Gr,"SPAN",{});var mh=a(sa);kd=d(mh,"BlenderbotSmallConfig"),mh.forEach(o),Gr.forEach(o),vr=i(s),he=n(s,"DIV",{class:!0});var oo=a(he);_(et.$$.fragment,oo),vd=i(oo),ho=n(oo,"P",{});var Gn=a(ho);yd=d(Gn,"This is the configuration class to store the configuration of a "),xn=n(Gn,"A",{href:!0});var fh=a(xn);Td=d(fh,"BlenderbotSmallModel"),fh.forEach(o),wd=d(Gn,`. It is
used to instantiate an BlenderbotSmall model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),ot=n(Gn,"A",{href:!0,rel:!0});var _h=a(ot);Sd=d(_h,"facebook/blenderbot_small-90M"),_h.forEach(o),xd=d(Gn," architecture."),Gn.forEach(o),Bd=i(oo),uo=n(oo,"P",{});var Un=a(uo);zd=d(Un,"Configuration objects inherit from "),Bn=n(Un,"A",{href:!0});var gh=a(Bn);Fd=d(gh,"PretrainedConfig"),gh.forEach(o),qd=d(Un,` and can be used to control the model
outputs. Read the documentation from `),zn=n(Un,"A",{href:!0});var bh=a(zn);Ed=d(bh,"PretrainedConfig"),bh.forEach(o),$d=d(Un," for more information."),Un.forEach(o),Md=i(oo),ra=n(oo,"P",{});var kh=a(ra);Cd=d(kh,"Example:"),kh.forEach(o),Pd=i(oo),_(tt.$$.fragment,oo),oo.forEach(o),yr=i(s),mo=n(s,"H2",{class:!0});var Ur=a(mo);Eo=n(Ur,"A",{id:!0,class:!0,href:!0});var vh=a(Eo);da=n(vh,"SPAN",{});var yh=a(da);_(nt.$$.fragment,yh),yh.forEach(o),vh.forEach(o),jd=i(Ur),la=n(Ur,"SPAN",{});var Th=a(la);Od=d(Th,"BlenderbotSmallTokenizer"),Th.forEach(o),Ur.forEach(o),Tr=i(s),G=n(s,"DIV",{class:!0});var ye=a(G);_(at.$$.fragment,ye),Ld=i(ye),ia=n(ye,"P",{});var wh=a(ia);Nd=d(wh,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),wh.forEach(o),Ad=i(ye),st=n(ye,"P",{});var Wr=a(st);Id=d(Wr,"This tokenizer inherits from "),Fn=n(Wr,"A",{href:!0});var Sh=a(Fn);Dd=d(Sh,"PreTrainedTokenizer"),Sh.forEach(o),Gd=d(Wr,` which contains most of the main methods.
Users should refer to the superclass for more information regarding methods.`),Wr.forEach(o),Ud=i(ye),He=n(ye,"DIV",{class:!0});var Wn=a(He);_(rt.$$.fragment,Wn),Wd=i(Wn),ca=n(Wn,"P",{});var xh=a(ca);Rd=d(xh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),xh.forEach(o),Kd=i(Wn),pa=n(Wn,"P",{});var Bh=a(pa);Hd=d(Bh,"This implementation does not add special tokens and this method should be overridden in a subclass."),Bh.forEach(o),Wn.forEach(o),Qd=i(ye),$o=n(ye,"DIV",{class:!0});var Rr=a($o);_(dt.$$.fragment,Rr),Vd=i(Rr),fo=n(Rr,"P",{});var Rn=a(fo);Jd=d(Rn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ha=n(Rn,"CODE",{});var zh=a(ha);Xd=d(zh,"prepare_for_model"),zh.forEach(o),Yd=d(Rn," or "),ua=n(Rn,"CODE",{});var Fh=a(ua);Zd=d(Fh,"encode_plus"),Fh.forEach(o),el=d(Rn," methods."),Rn.forEach(o),Rr.forEach(o),ol=i(ye),Qe=n(ye,"DIV",{class:!0});var Kn=a(Qe);_(lt.$$.fragment,Kn),tl=i(Kn),qn=n(Kn,"P",{});var Zp=a(qn);nl=d(Zp,"Create the token type IDs corresponding to the sequences passed. "),En=n(Zp,"A",{href:!0});var qh=a(En);al=d(qh,"What are token type IDs?"),qh.forEach(o),Zp.forEach(o),sl=i(Kn),ma=n(Kn,"P",{});var Eh=a(ma);rl=d(Eh,"Should be overridden in a subclass if the model has a special way of building those."),Eh.forEach(o),Kn.forEach(o),dl=i(ye),fa=n(ye,"DIV",{class:!0}),a(fa).forEach(o),ye.forEach(o),wr=i(s),_o=n(s,"H2",{class:!0});var Kr=a(_o);Mo=n(Kr,"A",{id:!0,class:!0,href:!0});var $h=a(Mo);_a=n($h,"SPAN",{});var Mh=a(_a);_(it.$$.fragment,Mh),Mh.forEach(o),$h.forEach(o),ll=i(Kr),ga=n(Kr,"SPAN",{});var Ch=a(ga);il=d(Ch,"BlenderbotSmallTokenizerFast"),Ch.forEach(o),Kr.forEach(o),Sr=i(s),Ue=n(s,"DIV",{class:!0});var Hn=a(Ue);_(ct.$$.fragment,Hn),cl=i(Hn),pt=n(Hn,"P",{});var Hr=a(pt);pl=d(Hr,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ba=n(Hr,"EM",{});var Ph=a(ba);hl=d(Ph,"tokenizers"),Ph.forEach(o),ul=d(Hr," library)."),Hr.forEach(o),ml=i(Hn),Co=n(Hn,"DIV",{class:!0});var Qr=a(Co);_(ht.$$.fragment,Qr),fl=i(Qr),ka=n(Qr,"P",{});var jh=a(ka);_l=d(jh,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),jh.forEach(o),Qr.forEach(o),Hn.forEach(o),xr=i(s),go=n(s,"H2",{class:!0});var Vr=a(go);Po=n(Vr,"A",{id:!0,class:!0,href:!0});var Oh=a(Po);va=n(Oh,"SPAN",{});var Lh=a(va);_(ut.$$.fragment,Lh),Lh.forEach(o),Oh.forEach(o),gl=i(Vr),ya=n(Vr,"SPAN",{});var Nh=a(ya);bl=d(Nh,"BlenderbotSmallModel"),Nh.forEach(o),Vr.forEach(o),Br=i(s),ze=n(s,"DIV",{class:!0});var Jo=a(ze);_(mt.$$.fragment,Jo),kl=i(Jo),ft=n(Jo,"P",{});var Jr=a(ft);vl=d(Jr,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$n=n(Jr,"A",{href:!0});var Ah=a($n);yl=d(Ah,"PreTrainedModel"),Ah.forEach(o),Tl=d(Jr,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Jr.forEach(o),wl=i(Jo),_t=n(Jo,"P",{});var Xr=a(_t);Sl=d(Xr,"This model is also a PyTorch "),gt=n(Xr,"A",{href:!0,rel:!0});var Ih=a(gt);xl=d(Ih,"torch.nn.Module"),Ih.forEach(o),Bl=d(Xr,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Xr.forEach(o),zl=i(Jo),be=n(Jo,"DIV",{class:!0});var to=a(be);_(bt.$$.fragment,to),Fl=i(to),bo=n(to,"P",{});var Qn=a(bo);ql=d(Qn,"The "),Mn=n(Qn,"A",{href:!0});var Dh=a(Mn);El=d(Dh,"BlenderbotSmallModel"),Dh.forEach(o),$l=d(Qn," forward method, overrides the "),Ta=n(Qn,"CODE",{});var Gh=a(Ta);Ml=d(Gh,"__call__"),Gh.forEach(o),Cl=d(Qn," special method."),Qn.forEach(o),Pl=i(to),_(jo.$$.fragment,to),jl=i(to),wa=n(to,"P",{});var Uh=a(wa);Ol=d(Uh,"Example:"),Uh.forEach(o),Ll=i(to),_(kt.$$.fragment,to),to.forEach(o),Jo.forEach(o),zr=i(s),ko=n(s,"H2",{class:!0});var Yr=a(ko);Oo=n(Yr,"A",{id:!0,class:!0,href:!0});var Wh=a(Oo);Sa=n(Wh,"SPAN",{});var Rh=a(Sa);_(vt.$$.fragment,Rh),Rh.forEach(o),Wh.forEach(o),Nl=i(Yr),xa=n(Yr,"SPAN",{});var Kh=a(xa);Al=d(Kh,"BlenderbotSmallForConditionalGeneration"),Kh.forEach(o),Yr.forEach(o),Fr=i(s),Fe=n(s,"DIV",{class:!0});var Xo=a(Fe);_(yt.$$.fragment,Xo),Il=i(Xo),Tt=n(Xo,"P",{});var Zr=a(Tt);Dl=d(Zr,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),Cn=n(Zr,"A",{href:!0});var Hh=a(Cn);Gl=d(Hh,"PreTrainedModel"),Hh.forEach(o),Ul=d(Zr,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Zr.forEach(o),Wl=i(Xo),wt=n(Xo,"P",{});var ed=a(wt);Rl=d(ed,"This model is also a PyTorch "),St=n(ed,"A",{href:!0,rel:!0});var Qh=a(St);Kl=d(Qh,"torch.nn.Module"),Qh.forEach(o),Hl=d(ed,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ed.forEach(o),Ql=i(Xo),te=n(Xo,"DIV",{class:!0});var Ce=a(te);_(xt.$$.fragment,Ce),Vl=i(Ce),vo=n(Ce,"P",{});var Vn=a(vo);Jl=d(Vn,"The "),Pn=n(Vn,"A",{href:!0});var Vh=a(Pn);Xl=d(Vh,"BlenderbotSmallForConditionalGeneration"),Vh.forEach(o),Yl=d(Vn," forward method, overrides the "),Ba=n(Vn,"CODE",{});var Jh=a(Ba);Zl=d(Jh,"__call__"),Jh.forEach(o),ei=d(Vn," special method."),Vn.forEach(o),oi=i(Ce),_(Lo.$$.fragment,Ce),ti=i(Ce),za=n(Ce,"P",{});var Xh=a(za);ni=d(Xh,"Conversation example::"),Xh.forEach(o),ai=i(Ce),Fa=n(Ce,"BLOCKQUOTE",{});var Yh=a(Fa);qa=n(Yh,"BLOCKQUOTE",{});var Zh=a(qa);Ea=n(Zh,"BLOCKQUOTE",{});var eu=a(Ea);$a=n(eu,"P",{});var ou=a($a);si=d(ou,`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration
mname = \u2018facebook/blenderbot_small-90M\u2019
model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)
UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D
print(\u201CHuman: \u201D, UTTERANCE)
inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019)
reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])
what kind of carbs do they eat? i don\u2019t know much about carbs.`),ou.forEach(o),eu.forEach(o),Zh.forEach(o),Yh.forEach(o),ri=i(Ce),Ma=n(Ce,"BLOCKQUOTE",{});var tu=a(Ma);Ca=n(tu,"BLOCKQUOTE",{});var nu=a(Ca);Pa=n(nu,"BLOCKQUOTE",{});var au=a(Pa);Bt=n(au,"P",{});var od=a(Bt);di=d(od,`REPLY = \u201CI\u2019m not sure\u201D
print(\u201CHuman: \u201D, REPLY)
NEXT_UTTERANCE = (
\u2026 \u201CMy friends are cool but they eat too many carbs.</s> \u201D
\u2026 \u201D`),ja=n(od,"S",{});var su=a(ja);li=d(su,"what kind of carbs do they eat? i don\u2019t know much about carbs."),su.forEach(o),ii=d(od,` \u201D
\u2026 \u201D<s>I\u2019m not sure.\u201D
\u2026 )
inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019)
inputs.pop(\u201Ctoken_type_ids\u201D)
next_reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),od.forEach(o),au.forEach(o),nu.forEach(o),tu.forEach(o),Ce.forEach(o),Xo.forEach(o),qr=i(s),yo=n(s,"H2",{class:!0});var td=a(yo);No=n(td,"A",{id:!0,class:!0,href:!0});var ru=a(No);Oa=n(ru,"SPAN",{});var du=a(Oa);_(zt.$$.fragment,du),du.forEach(o),ru.forEach(o),ci=i(td),La=n(td,"SPAN",{});var lu=a(La);pi=d(lu,"BlenderbotSmallForCausalLM"),lu.forEach(o),td.forEach(o),Er=i(s),Ft=n(s,"DIV",{class:!0});var iu=a(Ft);Ve=n(iu,"DIV",{class:!0});var Jn=a(Ve);_(qt.$$.fragment,Jn),hi=i(Jn),Na=n(Jn,"P",{});var cu=a(Na);ui=d(cu,"Example:"),cu.forEach(o),mi=i(Jn),_(Et.$$.fragment,Jn),Jn.forEach(o),iu.forEach(o),$r=i(s),To=n(s,"H2",{class:!0});var nd=a(To);Ao=n(nd,"A",{id:!0,class:!0,href:!0});var pu=a(Ao);Aa=n(pu,"SPAN",{});var hu=a(Aa);_($t.$$.fragment,hu),hu.forEach(o),pu.forEach(o),fi=i(nd),Ia=n(nd,"SPAN",{});var uu=a(Ia);_i=d(uu,"TFBlenderbotSmallModel"),uu.forEach(o),nd.forEach(o),Mr=i(s),ue=n(s,"DIV",{class:!0});var no=a(ue);_(Mt.$$.fragment,no),gi=i(no),Ct=n(no,"P",{});var ad=a(Ct);bi=d(ad,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=n(ad,"A",{href:!0});var mu=a(jn);ki=d(mu,"TFPreTrainedModel"),mu.forEach(o),vi=d(ad,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ad.forEach(o),yi=i(no),Pt=n(no,"P",{});var sd=a(Pt);Ti=d(sd,"This model is also a "),jt=n(sd,"A",{href:!0,rel:!0});var fu=a(jt);wi=d(fu,"tf.keras.Model"),fu.forEach(o),Si=d(sd,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),sd.forEach(o),xi=i(no),_(Io.$$.fragment,no),Bi=i(no),ke=n(no,"DIV",{class:!0});var ao=a(ke);_(Ot.$$.fragment,ao),zi=i(ao),wo=n(ao,"P",{});var Xn=a(wo);Fi=d(Xn,"The "),On=n(Xn,"A",{href:!0});var _u=a(On);qi=d(_u,"TFBlenderbotSmallModel"),_u.forEach(o),Ei=d(Xn," forward method, overrides the "),Da=n(Xn,"CODE",{});var gu=a(Da);$i=d(gu,"__call__"),gu.forEach(o),Mi=d(Xn," special method."),Xn.forEach(o),Ci=i(ao),_(Do.$$.fragment,ao),Pi=i(ao),Ga=n(ao,"P",{});var bu=a(Ga);ji=d(bu,"Example:"),bu.forEach(o),Oi=i(ao),_(Lt.$$.fragment,ao),ao.forEach(o),no.forEach(o),Cr=i(s),So=n(s,"H2",{class:!0});var rd=a(So);Go=n(rd,"A",{id:!0,class:!0,href:!0});var ku=a(Go);Ua=n(ku,"SPAN",{});var vu=a(Ua);_(Nt.$$.fragment,vu),vu.forEach(o),ku.forEach(o),Li=i(rd),Wa=n(rd,"SPAN",{});var yu=a(Wa);Ni=d(yu,"TFBlenderbotSmallForConditionalGeneration"),yu.forEach(o),rd.forEach(o),Pr=i(s),me=n(s,"DIV",{class:!0});var so=a(me);_(At.$$.fragment,so),Ai=i(so),It=n(so,"P",{});var dd=a(It);Ii=d(dd,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ln=n(dd,"A",{href:!0});var Tu=a(Ln);Di=d(Tu,"TFPreTrainedModel"),Tu.forEach(o),Gi=d(dd,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),dd.forEach(o),Ui=i(so),Dt=n(so,"P",{});var ld=a(Dt);Wi=d(ld,"This model is also a "),Gt=n(ld,"A",{href:!0,rel:!0});var wu=a(Gt);Ri=d(wu,"tf.keras.Model"),wu.forEach(o),Ki=d(ld,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ld.forEach(o),Hi=i(so),_(Uo.$$.fragment,so),Qi=i(so),j=n(so,"DIV",{class:!0});var K=a(j);_(Ut.$$.fragment,K),Vi=i(K),xo=n(K,"P",{});var Yn=a(xo);Ji=d(Yn,"The "),Nn=n(Yn,"A",{href:!0});var Su=a(Nn);Xi=d(Su,"TFBlenderbotSmallForConditionalGeneration"),Su.forEach(o),Yi=d(Yn," forward method, overrides the "),Ra=n(Yn,"CODE",{});var xu=a(Ra);Zi=d(xu,"__call__"),xu.forEach(o),ec=d(Yn," special method."),Yn.forEach(o),oc=i(K),_(Wo.$$.fragment,K),tc=i(K),Ka=n(K,"P",{});var Bu=a(Ka);nc=d(Bu,"Conversation example::"),Bu.forEach(o),ac=i(K),Ha=n(K,"BLOCKQUOTE",{});var zu=a(Ha);Qa=n(zu,"BLOCKQUOTE",{});var Fu=a(Qa);Va=n(Fu,"BLOCKQUOTE",{});var qu=a(Va);Ja=n(qu,"P",{});var Eu=a(Ja);sc=d(Eu,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration
mname = \u2018facebook/blenderbot_small-90M\u2019
model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Eu.forEach(o),qu.forEach(o),Fu.forEach(o),zu.forEach(o),rc=i(K),Xa=n(K,"BLOCKQUOTE",{});var $u=a(Xa);Ya=n($u,"BLOCKQUOTE",{});var Mu=a(Ya);Za=n(Mu,"BLOCKQUOTE",{});var Cu=a(Za);es=n(Cu,"P",{});var Pu=a(es);dc=d(Pu,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D
print(\u201CHuman: \u201D, UTTERANCE)
inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Pu.forEach(o),Cu.forEach(o),Mu.forEach(o),$u.forEach(o),lc=i(K),os=n(K,"BLOCKQUOTE",{});var ju=a(os);ts=n(ju,"BLOCKQUOTE",{});var Ou=a(ts);ns=n(Ou,"BLOCKQUOTE",{});var Lu=a(ns);as=n(Lu,"P",{});var Nu=a(as);ic=d(Nu,`reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])
what kind of carbs do they eat? i don\u2019t know much about carbs.`),Nu.forEach(o),Lu.forEach(o),Ou.forEach(o),ju.forEach(o),cc=i(K),ss=n(K,"BLOCKQUOTE",{});var Au=a(ss);rs=n(Au,"BLOCKQUOTE",{});var Iu=a(rs);ds=n(Iu,"BLOCKQUOTE",{});var Du=a(ds);Wt=n(Du,"P",{});var id=a(Wt);pc=d(id,`REPLY = \u201CI\u2019m not sure\u201D
print(\u201CHuman: \u201D, REPLY)
NEXT_UTTERANCE = (
\u2026 \u201CMy friends are cool but they eat too many carbs.</s> \u201D
\u2026 \u201D`),ls=n(id,"S",{});var Gu=a(ls);hc=d(Gu,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Gu.forEach(o),uc=d(id,` \u201D
\u2026 \u201D<s>I\u2019m not sure.\u201D
\u2026 )`),id.forEach(o),Du.forEach(o),Iu.forEach(o),Au.forEach(o),mc=i(K),is=n(K,"BLOCKQUOTE",{});var Uu=a(is);cs=n(Uu,"BLOCKQUOTE",{});var Wu=a(cs);ps=n(Wu,"BLOCKQUOTE",{});var Ru=a(ps);hs=n(Ru,"P",{});var Ku=a(hs);fc=d(Ku,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
inputs.pop(\u201Ctoken_type_ids\u201D)
next_reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),Ku.forEach(o),Ru.forEach(o),Wu.forEach(o),Uu.forEach(o),K.forEach(o),so.forEach(o),jr=i(s),Bo=n(s,"H2",{class:!0});var cd=a(Bo);Ro=n(cd,"A",{id:!0,class:!0,href:!0});var Hu=a(Ro);us=n(Hu,"SPAN",{});var Qu=a(us);_(Rt.$$.fragment,Qu),Qu.forEach(o),Hu.forEach(o),_c=i(cd),ms=n(cd,"SPAN",{});var Vu=a(ms);gc=d(Vu,"FlaxBlenderbotSmallModel"),Vu.forEach(o),cd.forEach(o),Or=i(s),N=n(s,"DIV",{class:!0});var ne=a(N);_(Kt.$$.fragment,ne),bc=i(ne),Ht=n(ne,"P",{});var pd=a(Ht);kc=d(pd,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),An=n(pd,"A",{href:!0});var Ju=a(An);vc=d(Ju,"FlaxPreTrainedModel"),Ju.forEach(o),yc=d(pd,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),pd.forEach(o),Tc=i(ne),Qt=n(ne,"P",{});var hd=a(Qt);wc=d(hd,"This model is also a Flax Linen "),Vt=n(hd,"A",{href:!0,rel:!0});var Xu=a(Vt);Sc=d(Xu,"flax.nn.Module"),Xu.forEach(o),xc=d(hd,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),hd.forEach(o),Bc=i(ne),fs=n(ne,"P",{});var Yu=a(fs);zc=d(Yu,"Finally, this model supports inherent JAX features such as:"),Yu.forEach(o),Fc=i(ne),We=n(ne,"UL",{});var Yo=a(We);_s=n(Yo,"LI",{});var Zu=a(_s);Jt=n(Zu,"A",{href:!0,rel:!0});var em=a(Jt);qc=d(em,"Just-In-Time (JIT) compilation"),em.forEach(o),Zu.forEach(o),Ec=i(Yo),gs=n(Yo,"LI",{});var om=a(gs);Xt=n(om,"A",{href:!0,rel:!0});var tm=a(Xt);$c=d(tm,"Automatic Differentiation"),tm.forEach(o),om.forEach(o),Mc=i(Yo),bs=n(Yo,"LI",{});var nm=a(bs);Yt=n(nm,"A",{href:!0,rel:!0});var am=a(Yt);Cc=d(am,"Vectorization"),am.forEach(o),nm.forEach(o),Pc=i(Yo),ks=n(Yo,"LI",{});var sm=a(ks);Zt=n(sm,"A",{href:!0,rel:!0});var rm=a(Zt);jc=d(rm,"Parallelization"),rm.forEach(o),sm.forEach(o),Yo.forEach(o),Oc=i(ne),Je=n(ne,"DIV",{class:!0});var Zn=a(Je);_(en.$$.fragment,Zn),Lc=i(Zn),vs=n(Zn,"P",{});var dm=a(vs);Nc=d(dm,"Example:"),dm.forEach(o),Ac=i(Zn),_(on.$$.fragment,Zn),Zn.forEach(o),Ic=i(ne),Xe=n(ne,"DIV",{class:!0});var ea=a(Xe);_(tn.$$.fragment,ea),Dc=i(ea),ys=n(ea,"P",{});var lm=a(ys);Gc=d(lm,"Example:"),lm.forEach(o),Uc=i(ea),_(nn.$$.fragment,ea),ea.forEach(o),Wc=i(ne),Ye=n(ne,"DIV",{class:!0});var oa=a(Ye);_(an.$$.fragment,oa),Rc=i(oa),Ts=n(oa,"P",{});var im=a(Ts);Kc=d(im,"Example:"),im.forEach(o),Hc=i(oa),_(sn.$$.fragment,oa),oa.forEach(o),ne.forEach(o),Lr=i(s),zo=n(s,"H2",{class:!0});var ud=a(zo);Ko=n(ud,"A",{id:!0,class:!0,href:!0});var cm=a(Ko);ws=n(cm,"SPAN",{});var pm=a(ws);_(rn.$$.fragment,pm),pm.forEach(o),cm.forEach(o),Qc=i(ud),Ss=n(ud,"SPAN",{});var hm=a(Ss);Vc=d(hm,"FlaxBlenderbotForConditionalGeneration"),hm.forEach(o),ud.forEach(o),Nr=i(s),A=n(s,"DIV",{class:!0});var ae=a(A);_(dn.$$.fragment,ae),Jc=i(ae),ln=n(ae,"P",{});var md=a(ln);Xc=d(md,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=n(md,"A",{href:!0});var um=a(In);Yc=d(um,"FlaxPreTrainedModel"),um.forEach(o),Zc=d(md,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),md.forEach(o),ep=i(ae),cn=n(ae,"P",{});var fd=a(cn);op=d(fd,"This model is also a Flax Linen "),pn=n(fd,"A",{href:!0,rel:!0});var mm=a(pn);tp=d(mm,"flax.nn.Module"),mm.forEach(o),np=d(fd,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fd.forEach(o),ap=i(ae),xs=n(ae,"P",{});var fm=a(xs);sp=d(fm,"Finally, this model supports inherent JAX features such as:"),fm.forEach(o),rp=i(ae),Re=n(ae,"UL",{});var Zo=a(Re);Bs=n(Zo,"LI",{});var _m=a(Bs);hn=n(_m,"A",{href:!0,rel:!0});var gm=a(hn);dp=d(gm,"Just-In-Time (JIT) compilation"),gm.forEach(o),_m.forEach(o),lp=i(Zo),zs=n(Zo,"LI",{});var bm=a(zs);un=n(bm,"A",{href:!0,rel:!0});var km=a(un);ip=d(km,"Automatic Differentiation"),km.forEach(o),bm.forEach(o),cp=i(Zo),Fs=n(Zo,"LI",{});var vm=a(Fs);mn=n(vm,"A",{href:!0,rel:!0});var ym=a(mn);pp=d(ym,"Vectorization"),ym.forEach(o),vm.forEach(o),hp=i(Zo),qs=n(Zo,"LI",{});var Tm=a(qs);fn=n(Tm,"A",{href:!0,rel:!0});var wm=a(fn);up=d(wm,"Parallelization"),wm.forEach(o),Tm.forEach(o),Zo.forEach(o),mp=i(ae),E=n(ae,"DIV",{class:!0});var $=a(E);_(_n.$$.fragment,$),fp=i($),Fo=n($,"P",{});var ta=a(Fo);_p=d(ta,"The "),Es=n(ta,"CODE",{});var Sm=a(Es);gp=d(Sm,"FlaxBlenderbotSmallPreTrainedModel"),Sm.forEach(o),bp=d(ta," forward method, overrides the "),$s=n(ta,"CODE",{});var xm=a($s);kp=d(xm,"__call__"),xm.forEach(o),vp=d(ta," special method."),ta.forEach(o),yp=i($),_(Ho.$$.fragment,$),Tp=i($),Ms=n($,"P",{});var Bm=a(Ms);wp=d(Bm,"Summarization example::"),Bm.forEach(o),Sp=i($),Cs=n($,"BLOCKQUOTE",{});var zm=a(Cs);Ps=n(zm,"BLOCKQUOTE",{});var Fm=a(Ps);js=n(Fm,"BLOCKQUOTE",{});var qm=a(js);Os=n(qm,"P",{});var Em=a(Os);xp=d(Em,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),Em.forEach(o),qm.forEach(o),Fm.forEach(o),zm.forEach(o),Bp=i($),Ls=n($,"BLOCKQUOTE",{});var $m=a(Ls);Ns=n($m,"BLOCKQUOTE",{});var Mm=a(Ns);As=n(Mm,"BLOCKQUOTE",{});var Cm=a(As);Is=n(Cm,"P",{});var Pm=a(Is);zp=d(Pm,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),Pm.forEach(o),Cm.forEach(o),Mm.forEach(o),$m.forEach(o),Fp=i($),Ds=n($,"BLOCKQUOTE",{});var jm=a(Ds);Gs=n(jm,"BLOCKQUOTE",{});var Om=a(Gs);Us=n(Om,"BLOCKQUOTE",{});var Lm=a(Us);Ws=n(Lm,"P",{});var Nm=a(Ws);qp=d(Nm,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Nm.forEach(o),Lm.forEach(o),Om.forEach(o),jm.forEach(o),Ep=i($),Rs=n($,"BLOCKQUOTE",{});var Am=a(Rs);Ks=n(Am,"BLOCKQUOTE",{});var Im=a(Ks);gn=n(Im,"BLOCKQUOTE",{});var _d=a(gn);Qo=n(_d,"H1",{class:!0});var gd=a(Qo);Vo=n(gd,"A",{id:!0,class:!0,href:!0});var Dm=a(Vo);Hs=n(Dm,"SPAN",{});var Gm=a(Hs);_(bn.$$.fragment,Gm),Gm.forEach(o),Dm.forEach(o),$p=i(gd),Qs=n(gd,"SPAN",{});var Um=a(Qs);Mp=d(Um,"Generate Summary"),Um.forEach(o),gd.forEach(o),Cp=i(_d),Vs=n(_d,"P",{});var Wm=a(Vs);Pp=d(Wm,`summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`),Wm.forEach(o),_d.forEach(o),Im.forEach(o),Am.forEach(o),jp=i($),Js=n($,"P",{});var Rm=a(Js);Op=d(Rm,"Mask filling example::"),Rm.forEach(o),Lp=i($),Xs=n($,"BLOCKQUOTE",{});var Km=a(Xs);Ys=n(Km,"BLOCKQUOTE",{});var Hm=a(Ys);Zs=n(Hm,"BLOCKQUOTE",{});var Qm=a(Zs);er=n(Qm,"P",{});var Vm=a(er);Np=d(Vm,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)
TXT = \u201CMy friends are <mask> but they eat too many carbs.\u201D`),Vm.forEach(o),Qm.forEach(o),Hm.forEach(o),Km.forEach(o),Ap=i($),or=n($,"BLOCKQUOTE",{});var Jm=a(or);tr=n(Jm,"BLOCKQUOTE",{});var Xm=a(tr);nr=n(Xm,"BLOCKQUOTE",{});var Ym=a(nr);ar=n(Ym,"P",{});var Zm=a(ar);Ip=d(Zm,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits`),Zm.forEach(o),Ym.forEach(o),Xm.forEach(o),Jm.forEach(o),Dp=i($),sr=n($,"BLOCKQUOTE",{});var ef=a(sr);rr=n(ef,"BLOCKQUOTE",{});var of=a(rr);dr=n(of,"BLOCKQUOTE",{});var tf=a(dr);lr=n(tf,"P",{});var nf=a(lr);Gp=d(nf,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs)`),nf.forEach(o),tf.forEach(o),of.forEach(o),ef.forEach(o),Up=i($),ir=n($,"BLOCKQUOTE",{});var af=a(ir);cr=n(af,"BLOCKQUOTE",{});var sf=a(cr);pr=n(sf,"BLOCKQUOTE",{});var rf=a(pr);hr=n(rf,"P",{});var df=a(hr);Wp=d(df,"tokenizer.decode(predictions).split()"),df.forEach(o),rf.forEach(o),sf.forEach(o),af.forEach(o),$.forEach(o),Rp=i(ae),Ze=n(ae,"DIV",{class:!0});var na=a(Ze);_(kn.$$.fragment,na),Kp=i(na),ur=n(na,"P",{});var lf=a(ur);Hp=d(lf,"Example:"),lf.forEach(o),Qp=i(na),_(vn.$$.fragment,na),na.forEach(o),Vp=i(ae),eo=n(ae,"DIV",{class:!0});var aa=a(eo);_(yn.$$.fragment,aa),Jp=i(aa),mr=n(aa,"P",{});var cf=a(mr);Xp=d(cf,"Example:"),cf.forEach(o),Yp=i(aa),_(Tn.$$.fragment,aa),aa.forEach(o),ae.forEach(o),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(wf)),c(T,"id","blenderbot-small"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot-small"),c(y,"class","relative group"),c(U,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallModel"),c(W,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallForConditionalGeneration"),c(Q,"href","https://huggingface.co/facebook/blenderbot-90M"),c(Q,"rel","nofollow"),c(Z,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(_e,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(I,"id","overview"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#overview"),c(J,"class","relative group"),c(ie,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(ie,"rel","nofollow"),c(Se,"href","https://huggingface.co/patrickvonplaten"),c(Se,"rel","nofollow"),c(D,"href","https://github.com/facebookresearch/ParlAI"),c(D,"rel","nofollow"),c(ge,"id","transformers.BlenderbotSmallConfig"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#transformers.BlenderbotSmallConfig"),c(pe,"class","relative group"),c(xn,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallModel"),c(ot,"href","https://huggingface.co/facebook/blenderbot_small-90M"),c(ot,"rel","nofollow"),c(Bn,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(zn,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(he,"class","docstring"),c(Eo,"id","transformers.BlenderbotSmallTokenizer"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.BlenderbotSmallTokenizer"),c(mo,"class","relative group"),c(Fn,"href","/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(He,"class","docstring"),c($o,"class","docstring"),c(En,"href","../glossary#token-type-ids"),c(Qe,"class","docstring"),c(fa,"class","docstring"),c(G,"class","docstring"),c(Mo,"id","transformers.BlenderbotSmallTokenizerFast"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.BlenderbotSmallTokenizerFast"),c(_o,"class","relative group"),c(Co,"class","docstring"),c(Ue,"class","docstring"),c(Po,"id","transformers.BlenderbotSmallModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.BlenderbotSmallModel"),c(go,"class","relative group"),c($n,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(gt,"rel","nofollow"),c(Mn,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallModel"),c(be,"class","docstring"),c(ze,"class","docstring"),c(Oo,"id","transformers.BlenderbotSmallForConditionalGeneration"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.BlenderbotSmallForConditionalGeneration"),c(ko,"class","relative group"),c(Cn,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(St,"rel","nofollow"),c(Pn,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.BlenderbotSmallForConditionalGeneration"),c(te,"class","docstring"),c(Fe,"class","docstring"),c(No,"id","transformers.BlenderbotSmallForCausalLM"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.BlenderbotSmallForCausalLM"),c(yo,"class","relative group"),c(Ve,"class","docstring"),c(Ft,"class","docstring"),c(Ao,"id","transformers.TFBlenderbotSmallModel"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.TFBlenderbotSmallModel"),c(To,"class","relative group"),c(jn,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(jt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(jt,"rel","nofollow"),c(On,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.TFBlenderbotSmallModel"),c(ke,"class","docstring"),c(ue,"class","docstring"),c(Go,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),c(So,"class","relative group"),c(Ln,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Gt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Gt,"rel","nofollow"),c(Nn,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot_small#transformers.TFBlenderbotSmallForConditionalGeneration"),c(j,"class","docstring"),c(me,"class","docstring"),c(Ro,"id","transformers.FlaxBlenderbotSmallModel"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.FlaxBlenderbotSmallModel"),c(Bo,"class","relative group"),c(An,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Vt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Vt,"rel","nofollow"),c(Jt,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Jt,"rel","nofollow"),c(Xt,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Xt,"rel","nofollow"),c(Yt,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Yt,"rel","nofollow"),c(Zt,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zt,"rel","nofollow"),c(Je,"class","docstring"),c(Xe,"class","docstring"),c(Ye,"class","docstring"),c(N,"class","docstring"),c(Ko,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(zo,"class","relative group"),c(In,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(pn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(pn,"rel","nofollow"),c(hn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(hn,"rel","nofollow"),c(un,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(un,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(fn,"rel","nofollow"),c(Vo,"id","generate-summary"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#generate-summary"),c(Qo,"class","relative group"),c(E,"class","docstring"),c(Ze,"class","docstring"),c(eo,"class","docstring"),c(A,"class","docstring")},m(s,h){e(document.head,u),p(s,z,h),p(s,y,h),e(y,T),e(T,x),g(S,x,null),e(y,w),e(y,F),e(F,Pe),p(s,fe,h),p(s,B,h),e(B,je),e(B,U),e(U,Oe),e(B,Le),e(B,W),e(W,Ne),e(B,Ae),e(B,Q),e(Q,V),e(B,Ie),e(B,Z),e(Z,M),e(B,O),e(B,_e),e(_e,se),p(s,Ee,h),p(s,J,h),e(J,I),e(I,Te),g(re,Te,null),e(J,L),e(J,we),e(we,de),p(s,$e,h),p(s,ee,h),e(ee,le),e(ee,ie),e(ie,De),e(ee,X),p(s,Me,h),p(s,R,h),e(R,Ge),p(s,m,h),p(s,q,h),e(q,ce),e(ce,ro),p(s,Ke,h),p(s,C,h),e(C,lo),e(C,Se),e(Se,io),e(C,Y),e(C,D),e(D,co),e(C,po),p(s,oe,h),p(s,pe,h),e(pe,ge),e(ge,xe),g(Be,xe,null),e(pe,bd),e(pe,sa),e(sa,kd),p(s,vr,h),p(s,he,h),g(et,he,null),e(he,vd),e(he,ho),e(ho,yd),e(ho,xn),e(xn,Td),e(ho,wd),e(ho,ot),e(ot,Sd),e(ho,xd),e(he,Bd),e(he,uo),e(uo,zd),e(uo,Bn),e(Bn,Fd),e(uo,qd),e(uo,zn),e(zn,Ed),e(uo,$d),e(he,Md),e(he,ra),e(ra,Cd),e(he,Pd),g(tt,he,null),p(s,yr,h),p(s,mo,h),e(mo,Eo),e(Eo,da),g(nt,da,null),e(mo,jd),e(mo,la),e(la,Od),p(s,Tr,h),p(s,G,h),g(at,G,null),e(G,Ld),e(G,ia),e(ia,Nd),e(G,Ad),e(G,st),e(st,Id),e(st,Fn),e(Fn,Dd),e(st,Gd),e(G,Ud),e(G,He),g(rt,He,null),e(He,Wd),e(He,ca),e(ca,Rd),e(He,Kd),e(He,pa),e(pa,Hd),e(G,Qd),e(G,$o),g(dt,$o,null),e($o,Vd),e($o,fo),e(fo,Jd),e(fo,ha),e(ha,Xd),e(fo,Yd),e(fo,ua),e(ua,Zd),e(fo,el),e(G,ol),e(G,Qe),g(lt,Qe,null),e(Qe,tl),e(Qe,qn),e(qn,nl),e(qn,En),e(En,al),e(Qe,sl),e(Qe,ma),e(ma,rl),e(G,dl),e(G,fa),p(s,wr,h),p(s,_o,h),e(_o,Mo),e(Mo,_a),g(it,_a,null),e(_o,ll),e(_o,ga),e(ga,il),p(s,Sr,h),p(s,Ue,h),g(ct,Ue,null),e(Ue,cl),e(Ue,pt),e(pt,pl),e(pt,ba),e(ba,hl),e(pt,ul),e(Ue,ml),e(Ue,Co),g(ht,Co,null),e(Co,fl),e(Co,ka),e(ka,_l),p(s,xr,h),p(s,go,h),e(go,Po),e(Po,va),g(ut,va,null),e(go,gl),e(go,ya),e(ya,bl),p(s,Br,h),p(s,ze,h),g(mt,ze,null),e(ze,kl),e(ze,ft),e(ft,vl),e(ft,$n),e($n,yl),e(ft,Tl),e(ze,wl),e(ze,_t),e(_t,Sl),e(_t,gt),e(gt,xl),e(_t,Bl),e(ze,zl),e(ze,be),g(bt,be,null),e(be,Fl),e(be,bo),e(bo,ql),e(bo,Mn),e(Mn,El),e(bo,$l),e(bo,Ta),e(Ta,Ml),e(bo,Cl),e(be,Pl),g(jo,be,null),e(be,jl),e(be,wa),e(wa,Ol),e(be,Ll),g(kt,be,null),p(s,zr,h),p(s,ko,h),e(ko,Oo),e(Oo,Sa),g(vt,Sa,null),e(ko,Nl),e(ko,xa),e(xa,Al),p(s,Fr,h),p(s,Fe,h),g(yt,Fe,null),e(Fe,Il),e(Fe,Tt),e(Tt,Dl),e(Tt,Cn),e(Cn,Gl),e(Tt,Ul),e(Fe,Wl),e(Fe,wt),e(wt,Rl),e(wt,St),e(St,Kl),e(wt,Hl),e(Fe,Ql),e(Fe,te),g(xt,te,null),e(te,Vl),e(te,vo),e(vo,Jl),e(vo,Pn),e(Pn,Xl),e(vo,Yl),e(vo,Ba),e(Ba,Zl),e(vo,ei),e(te,oi),g(Lo,te,null),e(te,ti),e(te,za),e(za,ni),e(te,ai),e(te,Fa),e(Fa,qa),e(qa,Ea),e(Ea,$a),e($a,si),e(te,ri),e(te,Ma),e(Ma,Ca),e(Ca,Pa),e(Pa,Bt),e(Bt,di),e(Bt,ja),e(ja,li),e(Bt,ii),p(s,qr,h),p(s,yo,h),e(yo,No),e(No,Oa),g(zt,Oa,null),e(yo,ci),e(yo,La),e(La,pi),p(s,Er,h),p(s,Ft,h),e(Ft,Ve),g(qt,Ve,null),e(Ve,hi),e(Ve,Na),e(Na,ui),e(Ve,mi),g(Et,Ve,null),p(s,$r,h),p(s,To,h),e(To,Ao),e(Ao,Aa),g($t,Aa,null),e(To,fi),e(To,Ia),e(Ia,_i),p(s,Mr,h),p(s,ue,h),g(Mt,ue,null),e(ue,gi),e(ue,Ct),e(Ct,bi),e(Ct,jn),e(jn,ki),e(Ct,vi),e(ue,yi),e(ue,Pt),e(Pt,Ti),e(Pt,jt),e(jt,wi),e(Pt,Si),e(ue,xi),g(Io,ue,null),e(ue,Bi),e(ue,ke),g(Ot,ke,null),e(ke,zi),e(ke,wo),e(wo,Fi),e(wo,On),e(On,qi),e(wo,Ei),e(wo,Da),e(Da,$i),e(wo,Mi),e(ke,Ci),g(Do,ke,null),e(ke,Pi),e(ke,Ga),e(Ga,ji),e(ke,Oi),g(Lt,ke,null),p(s,Cr,h),p(s,So,h),e(So,Go),e(Go,Ua),g(Nt,Ua,null),e(So,Li),e(So,Wa),e(Wa,Ni),p(s,Pr,h),p(s,me,h),g(At,me,null),e(me,Ai),e(me,It),e(It,Ii),e(It,Ln),e(Ln,Di),e(It,Gi),e(me,Ui),e(me,Dt),e(Dt,Wi),e(Dt,Gt),e(Gt,Ri),e(Dt,Ki),e(me,Hi),g(Uo,me,null),e(me,Qi),e(me,j),g(Ut,j,null),e(j,Vi),e(j,xo),e(xo,Ji),e(xo,Nn),e(Nn,Xi),e(xo,Yi),e(xo,Ra),e(Ra,Zi),e(xo,ec),e(j,oc),g(Wo,j,null),e(j,tc),e(j,Ka),e(Ka,nc),e(j,ac),e(j,Ha),e(Ha,Qa),e(Qa,Va),e(Va,Ja),e(Ja,sc),e(j,rc),e(j,Xa),e(Xa,Ya),e(Ya,Za),e(Za,es),e(es,dc),e(j,lc),e(j,os),e(os,ts),e(ts,ns),e(ns,as),e(as,ic),e(j,cc),e(j,ss),e(ss,rs),e(rs,ds),e(ds,Wt),e(Wt,pc),e(Wt,ls),e(ls,hc),e(Wt,uc),e(j,mc),e(j,is),e(is,cs),e(cs,ps),e(ps,hs),e(hs,fc),p(s,jr,h),p(s,Bo,h),e(Bo,Ro),e(Ro,us),g(Rt,us,null),e(Bo,_c),e(Bo,ms),e(ms,gc),p(s,Or,h),p(s,N,h),g(Kt,N,null),e(N,bc),e(N,Ht),e(Ht,kc),e(Ht,An),e(An,vc),e(Ht,yc),e(N,Tc),e(N,Qt),e(Qt,wc),e(Qt,Vt),e(Vt,Sc),e(Qt,xc),e(N,Bc),e(N,fs),e(fs,zc),e(N,Fc),e(N,We),e(We,_s),e(_s,Jt),e(Jt,qc),e(We,Ec),e(We,gs),e(gs,Xt),e(Xt,$c),e(We,Mc),e(We,bs),e(bs,Yt),e(Yt,Cc),e(We,Pc),e(We,ks),e(ks,Zt),e(Zt,jc),e(N,Oc),e(N,Je),g(en,Je,null),e(Je,Lc),e(Je,vs),e(vs,Nc),e(Je,Ac),g(on,Je,null),e(N,Ic),e(N,Xe),g(tn,Xe,null),e(Xe,Dc),e(Xe,ys),e(ys,Gc),e(Xe,Uc),g(nn,Xe,null),e(N,Wc),e(N,Ye),g(an,Ye,null),e(Ye,Rc),e(Ye,Ts),e(Ts,Kc),e(Ye,Hc),g(sn,Ye,null),p(s,Lr,h),p(s,zo,h),e(zo,Ko),e(Ko,ws),g(rn,ws,null),e(zo,Qc),e(zo,Ss),e(Ss,Vc),p(s,Nr,h),p(s,A,h),g(dn,A,null),e(A,Jc),e(A,ln),e(ln,Xc),e(ln,In),e(In,Yc),e(ln,Zc),e(A,ep),e(A,cn),e(cn,op),e(cn,pn),e(pn,tp),e(cn,np),e(A,ap),e(A,xs),e(xs,sp),e(A,rp),e(A,Re),e(Re,Bs),e(Bs,hn),e(hn,dp),e(Re,lp),e(Re,zs),e(zs,un),e(un,ip),e(Re,cp),e(Re,Fs),e(Fs,mn),e(mn,pp),e(Re,hp),e(Re,qs),e(qs,fn),e(fn,up),e(A,mp),e(A,E),g(_n,E,null),e(E,fp),e(E,Fo),e(Fo,_p),e(Fo,Es),e(Es,gp),e(Fo,bp),e(Fo,$s),e($s,kp),e(Fo,vp),e(E,yp),g(Ho,E,null),e(E,Tp),e(E,Ms),e(Ms,wp),e(E,Sp),e(E,Cs),e(Cs,Ps),e(Ps,js),e(js,Os),e(Os,xp),e(E,Bp),e(E,Ls),e(Ls,Ns),e(Ns,As),e(As,Is),e(Is,zp),e(E,Fp),e(E,Ds),e(Ds,Gs),e(Gs,Us),e(Us,Ws),e(Ws,qp),e(E,Ep),e(E,Rs),e(Rs,Ks),e(Ks,gn),e(gn,Qo),e(Qo,Vo),e(Vo,Hs),g(bn,Hs,null),e(Qo,$p),e(Qo,Qs),e(Qs,Mp),e(gn,Cp),e(gn,Vs),e(Vs,Pp),e(E,jp),e(E,Js),e(Js,Op),e(E,Lp),e(E,Xs),e(Xs,Ys),e(Ys,Zs),e(Zs,er),e(er,Np),e(E,Ap),e(E,or),e(or,tr),e(tr,nr),e(nr,ar),e(ar,Ip),e(E,Dp),e(E,sr),e(sr,rr),e(rr,dr),e(dr,lr),e(lr,Gp),e(E,Up),e(E,ir),e(ir,cr),e(cr,pr),e(pr,hr),e(hr,Wp),e(A,Rp),e(A,Ze),g(kn,Ze,null),e(Ze,Kp),e(Ze,ur),e(ur,Hp),e(Ze,Qp),g(vn,Ze,null),e(A,Vp),e(A,eo),g(yn,eo,null),e(eo,Jp),e(eo,mr),e(mr,Xp),e(eo,Yp),g(Tn,eo,null),Ar=!0},p(s,[h]){const wn={};h&2&&(wn.$$scope={dirty:h,ctx:s}),jo.$set(wn);const fr={};h&2&&(fr.$$scope={dirty:h,ctx:s}),Lo.$set(fr);const _r={};h&2&&(_r.$$scope={dirty:h,ctx:s}),Io.$set(_r);const gr={};h&2&&(gr.$$scope={dirty:h,ctx:s}),Do.$set(gr);const ve={};h&2&&(ve.$$scope={dirty:h,ctx:s}),Uo.$set(ve);const br={};h&2&&(br.$$scope={dirty:h,ctx:s}),Wo.$set(br);const kr={};h&2&&(kr.$$scope={dirty:h,ctx:s}),Ho.$set(kr)},i(s){Ar||(b(S.$$.fragment,s),b(re.$$.fragment,s),b(Be.$$.fragment,s),b(et.$$.fragment,s),b(tt.$$.fragment,s),b(nt.$$.fragment,s),b(at.$$.fragment,s),b(rt.$$.fragment,s),b(dt.$$.fragment,s),b(lt.$$.fragment,s),b(it.$$.fragment,s),b(ct.$$.fragment,s),b(ht.$$.fragment,s),b(ut.$$.fragment,s),b(mt.$$.fragment,s),b(bt.$$.fragment,s),b(jo.$$.fragment,s),b(kt.$$.fragment,s),b(vt.$$.fragment,s),b(yt.$$.fragment,s),b(xt.$$.fragment,s),b(Lo.$$.fragment,s),b(zt.$$.fragment,s),b(qt.$$.fragment,s),b(Et.$$.fragment,s),b($t.$$.fragment,s),b(Mt.$$.fragment,s),b(Io.$$.fragment,s),b(Ot.$$.fragment,s),b(Do.$$.fragment,s),b(Lt.$$.fragment,s),b(Nt.$$.fragment,s),b(At.$$.fragment,s),b(Uo.$$.fragment,s),b(Ut.$$.fragment,s),b(Wo.$$.fragment,s),b(Rt.$$.fragment,s),b(Kt.$$.fragment,s),b(en.$$.fragment,s),b(on.$$.fragment,s),b(tn.$$.fragment,s),b(nn.$$.fragment,s),b(an.$$.fragment,s),b(sn.$$.fragment,s),b(rn.$$.fragment,s),b(dn.$$.fragment,s),b(_n.$$.fragment,s),b(Ho.$$.fragment,s),b(bn.$$.fragment,s),b(kn.$$.fragment,s),b(vn.$$.fragment,s),b(yn.$$.fragment,s),b(Tn.$$.fragment,s),Ar=!0)},o(s){k(S.$$.fragment,s),k(re.$$.fragment,s),k(Be.$$.fragment,s),k(et.$$.fragment,s),k(tt.$$.fragment,s),k(nt.$$.fragment,s),k(at.$$.fragment,s),k(rt.$$.fragment,s),k(dt.$$.fragment,s),k(lt.$$.fragment,s),k(it.$$.fragment,s),k(ct.$$.fragment,s),k(ht.$$.fragment,s),k(ut.$$.fragment,s),k(mt.$$.fragment,s),k(bt.$$.fragment,s),k(jo.$$.fragment,s),k(kt.$$.fragment,s),k(vt.$$.fragment,s),k(yt.$$.fragment,s),k(xt.$$.fragment,s),k(Lo.$$.fragment,s),k(zt.$$.fragment,s),k(qt.$$.fragment,s),k(Et.$$.fragment,s),k($t.$$.fragment,s),k(Mt.$$.fragment,s),k(Io.$$.fragment,s),k(Ot.$$.fragment,s),k(Do.$$.fragment,s),k(Lt.$$.fragment,s),k(Nt.$$.fragment,s),k(At.$$.fragment,s),k(Uo.$$.fragment,s),k(Ut.$$.fragment,s),k(Wo.$$.fragment,s),k(Rt.$$.fragment,s),k(Kt.$$.fragment,s),k(en.$$.fragment,s),k(on.$$.fragment,s),k(tn.$$.fragment,s),k(nn.$$.fragment,s),k(an.$$.fragment,s),k(sn.$$.fragment,s),k(rn.$$.fragment,s),k(dn.$$.fragment,s),k(_n.$$.fragment,s),k(Ho.$$.fragment,s),k(bn.$$.fragment,s),k(kn.$$.fragment,s),k(vn.$$.fragment,s),k(yn.$$.fragment,s),k(Tn.$$.fragment,s),Ar=!1},d(s){o(u),s&&o(z),s&&o(y),v(S),s&&o(fe),s&&o(B),s&&o(Ee),s&&o(J),v(re),s&&o($e),s&&o(ee),s&&o(Me),s&&o(R),s&&o(m),s&&o(q),s&&o(Ke),s&&o(C),s&&o(oe),s&&o(pe),v(Be),s&&o(vr),s&&o(he),v(et),v(tt),s&&o(yr),s&&o(mo),v(nt),s&&o(Tr),s&&o(G),v(at),v(rt),v(dt),v(lt),s&&o(wr),s&&o(_o),v(it),s&&o(Sr),s&&o(Ue),v(ct),v(ht),s&&o(xr),s&&o(go),v(ut),s&&o(Br),s&&o(ze),v(mt),v(bt),v(jo),v(kt),s&&o(zr),s&&o(ko),v(vt),s&&o(Fr),s&&o(Fe),v(yt),v(xt),v(Lo),s&&o(qr),s&&o(yo),v(zt),s&&o(Er),s&&o(Ft),v(qt),v(Et),s&&o($r),s&&o(To),v($t),s&&o(Mr),s&&o(ue),v(Mt),v(Io),v(Ot),v(Do),v(Lt),s&&o(Cr),s&&o(So),v(Nt),s&&o(Pr),s&&o(me),v(At),v(Uo),v(Ut),v(Wo),s&&o(jr),s&&o(Bo),v(Rt),s&&o(Or),s&&o(N),v(Kt),v(en),v(on),v(tn),v(nn),v(an),v(sn),s&&o(Lr),s&&o(zo),v(rn),s&&o(Nr),s&&o(A),v(dn),v(_n),v(Ho),v(bn),v(kn),v(vn),v(yn),v(Tn)}}}const wf={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function Sf(H,u,z){let{fw:y}=u;return H.$$set=T=>{"fw"in T&&z(0,y=T.fw)},[y]}class $f extends pf{constructor(u){super();hf(this,u,Sf,Tf,uf,{fw:0})}}export{$f as default,wf as metadata};
