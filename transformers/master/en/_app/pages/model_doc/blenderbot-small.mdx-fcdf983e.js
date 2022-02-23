import{S as pf,i as mf,s as uf,e as o,k as l,w as f,t as r,L as hf,c as n,d as t,m as i,a,x as _,h as d,b as c,J as e,g as p,y as g,q as b,o as k,B as v}from"../../chunks/vendor-9e2b328e.js";import{T as Sn}from"../../chunks/Tip-76f97a76.js";import{D as P}from"../../chunks/Docstring-50fd6873.js";import{C as qt}from"../../chunks/CodeBlock-88e23343.js";import{I as Fe}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function ff(H){let u,x,y,T,B;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,u,w),e(u,x),e(u,y),e(y,T),e(u,B)},d(S){S&&t(u)}}}function _f(H){let u,x,y,T,B;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,u,w),e(u,x),e(u,y),e(y,T),e(u,B)},d(S){S&&t(u)}}}function gf(H){let u,x,y,T,B,S,w,q,Pe,fe,z,je,U,Oe,Le,W,Ne,Ae,Q,V,Ie,Z,M,O,_e,se,Ee,J,I,Te,re,L,we,de,$e,ee,le,ie,De,X,Me,R,Ge;return{c(){u=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),y=l(),T=o("ul"),B=o("li"),S=r("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),q=o("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),fe=l(),z=o("p"),je=r("This second option is useful when using "),U=o("code"),Oe=r("tf.keras.Model.fit"),Le=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=o("code"),Ne=r("model(inputs)"),Ae=r("."),Q=l(),V=o("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=o("ul"),O=o("li"),_e=r("a single Tensor with "),se=o("code"),Ee=r("input_ids"),J=r(" only and nothing else: "),I=o("code"),Te=r("model(input_ids)"),re=l(),L=o("li"),we=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=o("code"),$e=r("model([input_ids, attention_mask])"),ee=r(" or "),le=o("code"),ie=r("model([input_ids, attention_mask, token_type_ids])"),De=l(),X=o("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Ge=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){u=n(h,"P",{});var F=a(u);x=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),y=i(h),T=n(h,"UL",{});var ce=a(T);B=n(ce,"LI",{});var rt=a(B);S=d(rt,"having all inputs as keyword arguments (like PyTorch models), or"),rt.forEach(t),w=i(ce),q=n(ce,"LI",{});var Ke=a(q);Pe=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),ce.forEach(t),fe=i(h),z=n(h,"P",{});var C=a(z);je=d(C,"This second option is useful when using "),U=n(C,"CODE",{});var dt=a(U);Oe=d(dt,"tf.keras.Model.fit"),dt.forEach(t),Le=d(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n(C,"CODE",{});var Se=a(W);Ne=d(Se,"model(inputs)"),Se.forEach(t),Ae=d(C,"."),C.forEach(t),Q=i(h),V=n(h,"P",{});var lt=a(V);Ie=d(lt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),lt.forEach(t),Z=i(h),M=n(h,"UL",{});var Y=a(M);O=n(Y,"LI",{});var D=a(O);_e=d(D,"a single Tensor with "),se=n(D,"CODE",{});var it=a(se);Ee=d(it,"input_ids"),it.forEach(t),J=d(D," only and nothing else: "),I=n(D,"CODE",{});var ct=a(I);Te=d(ct,"model(input_ids)"),ct.forEach(t),D.forEach(t),re=i(Y),L=n(Y,"LI",{});var te=a(L);we=d(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n(te,"CODE",{});var pe=a(de);$e=d(pe,"model([input_ids, attention_mask])"),pe.forEach(t),ee=d(te," or "),le=n(te,"CODE",{});var ge=a(le);ie=d(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),te.forEach(t),De=i(Y),X=n(Y,"LI",{});var Be=a(X);Me=d(Be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(Be,"CODE",{});var ze=a(R);Ge=d(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),Be.forEach(t),Y.forEach(t)},m(h,F){p(h,u,F),e(u,x),p(h,y,F),p(h,T,F),e(T,B),e(B,S),e(T,w),e(T,q),e(q,Pe),p(h,fe,F),p(h,z,F),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ae),p(h,Q,F),p(h,V,F),e(V,Ie),p(h,Z,F),p(h,M,F),e(M,O),e(O,_e),e(O,se),e(se,Ee),e(O,J),e(O,I),e(I,Te),e(M,re),e(M,L),e(L,we),e(L,de),e(de,$e),e(L,ee),e(L,le),e(le,ie),e(M,De),e(M,X),e(X,Me),e(X,R),e(R,Ge)},d(h){h&&t(u),h&&t(y),h&&t(T),h&&t(fe),h&&t(z),h&&t(Q),h&&t(V),h&&t(Z),h&&t(M)}}}function bf(H){let u,x,y,T,B;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,u,w),e(u,x),e(u,y),e(y,T),e(u,B)},d(S){S&&t(u)}}}function kf(H){let u,x,y,T,B,S,w,q,Pe,fe,z,je,U,Oe,Le,W,Ne,Ae,Q,V,Ie,Z,M,O,_e,se,Ee,J,I,Te,re,L,we,de,$e,ee,le,ie,De,X,Me,R,Ge;return{c(){u=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),y=l(),T=o("ul"),B=o("li"),S=r("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),q=o("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),fe=l(),z=o("p"),je=r("This second option is useful when using "),U=o("code"),Oe=r("tf.keras.Model.fit"),Le=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=o("code"),Ne=r("model(inputs)"),Ae=r("."),Q=l(),V=o("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=o("ul"),O=o("li"),_e=r("a single Tensor with "),se=o("code"),Ee=r("input_ids"),J=r(" only and nothing else: "),I=o("code"),Te=r("model(input_ids)"),re=l(),L=o("li"),we=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=o("code"),$e=r("model([input_ids, attention_mask])"),ee=r(" or "),le=o("code"),ie=r("model([input_ids, attention_mask, token_type_ids])"),De=l(),X=o("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Ge=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){u=n(h,"P",{});var F=a(u);x=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),y=i(h),T=n(h,"UL",{});var ce=a(T);B=n(ce,"LI",{});var rt=a(B);S=d(rt,"having all inputs as keyword arguments (like PyTorch models), or"),rt.forEach(t),w=i(ce),q=n(ce,"LI",{});var Ke=a(q);Pe=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),ce.forEach(t),fe=i(h),z=n(h,"P",{});var C=a(z);je=d(C,"This second option is useful when using "),U=n(C,"CODE",{});var dt=a(U);Oe=d(dt,"tf.keras.Model.fit"),dt.forEach(t),Le=d(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n(C,"CODE",{});var Se=a(W);Ne=d(Se,"model(inputs)"),Se.forEach(t),Ae=d(C,"."),C.forEach(t),Q=i(h),V=n(h,"P",{});var lt=a(V);Ie=d(lt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),lt.forEach(t),Z=i(h),M=n(h,"UL",{});var Y=a(M);O=n(Y,"LI",{});var D=a(O);_e=d(D,"a single Tensor with "),se=n(D,"CODE",{});var it=a(se);Ee=d(it,"input_ids"),it.forEach(t),J=d(D," only and nothing else: "),I=n(D,"CODE",{});var ct=a(I);Te=d(ct,"model(input_ids)"),ct.forEach(t),D.forEach(t),re=i(Y),L=n(Y,"LI",{});var te=a(L);we=d(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n(te,"CODE",{});var pe=a(de);$e=d(pe,"model([input_ids, attention_mask])"),pe.forEach(t),ee=d(te," or "),le=n(te,"CODE",{});var ge=a(le);ie=d(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),te.forEach(t),De=i(Y),X=n(Y,"LI",{});var Be=a(X);Me=d(Be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(Be,"CODE",{});var ze=a(R);Ge=d(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),Be.forEach(t),Y.forEach(t)},m(h,F){p(h,u,F),e(u,x),p(h,y,F),p(h,T,F),e(T,B),e(B,S),e(T,w),e(T,q),e(q,Pe),p(h,fe,F),p(h,z,F),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ae),p(h,Q,F),p(h,V,F),e(V,Ie),p(h,Z,F),p(h,M,F),e(M,O),e(O,_e),e(O,se),e(se,Ee),e(O,J),e(O,I),e(I,Te),e(M,re),e(M,L),e(L,we),e(L,de),e(de,$e),e(L,ee),e(L,le),e(le,ie),e(M,De),e(M,X),e(X,Me),e(X,R),e(R,Ge)},d(h){h&&t(u),h&&t(y),h&&t(T),h&&t(fe),h&&t(z),h&&t(Q),h&&t(V),h&&t(Z),h&&t(M)}}}function vf(H){let u,x,y,T,B;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,u,w),e(u,x),e(u,y),e(y,T),e(u,B)},d(S){S&&t(u)}}}function yf(H){let u,x,y,T,B;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=o("code"),T=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){u=n(S,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n(w,"CODE",{});var q=a(y);T=d(q,"Module"),q.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(S,w){p(S,u,w),e(u,x),e(u,y),e(y,T),e(u,B)},d(S){S&&t(u)}}}function Tf(H){let u,x,y,T,B,S,w,q,Pe,fe,z,je,U,Oe,Le,W,Ne,Ae,Q,V,Ie,Z,M,O,_e,se,Ee,J,I,Te,re,L,we,de,$e,ee,le,ie,De,X,Me,R,Ge,h,F,ce,rt,Ke,C,dt,Se,lt,Y,D,it,ct,te,pe,ge,Be,ze,bd,sa,kd,vr,me,Zt,vd,pt,yd,Bn,Td,wd,eo,Sd,Bd,zd,mt,xd,zn,qd,Fd,xn,Ed,$d,Md,ra,Cd,Pd,to,yr,ut,Ft,da,oo,jd,la,Od,Tr,G,no,Ld,ia,Nd,Ad,ao,Id,qn,Dd,Gd,Ud,He,so,Wd,ca,Rd,Kd,pa,Hd,Qd,Et,ro,Vd,ht,Jd,ma,Xd,Yd,ua,Zd,el,tl,Qe,lo,ol,Fn,nl,En,al,sl,ha,rl,dl,fa,wr,ft,$t,_a,io,ll,ga,il,Sr,Ue,co,cl,po,pl,ba,ml,ul,hl,Mt,mo,fl,ka,_l,Br,_t,Ct,va,uo,gl,ya,bl,zr,xe,ho,kl,fo,vl,$n,yl,Tl,wl,_o,Sl,go,Bl,zl,xl,be,bo,ql,gt,Fl,Mn,El,$l,Ta,Ml,Cl,Pl,Pt,jl,wa,Ol,Ll,ko,xr,bt,jt,Sa,vo,Nl,Ba,Al,qr,qe,yo,Il,To,Dl,Cn,Gl,Ul,Wl,wo,Rl,So,Kl,Hl,Ql,oe,Bo,Vl,kt,Jl,Pn,Xl,Yl,za,Zl,ei,ti,Ot,oi,xa,ni,ai,qa,Fa,Ea,$a,si,ri,Ma,Ca,Pa,zo,di,ja,li,ii,Fr,vt,Lt,Oa,xo,ci,La,pi,Er,qo,Ve,Fo,mi,Na,ui,hi,Eo,$r,yt,Nt,Aa,$o,fi,Ia,_i,Mr,ue,Mo,gi,Co,bi,jn,ki,vi,yi,Po,Ti,jo,wi,Si,Bi,At,zi,ke,Oo,xi,Tt,qi,On,Fi,Ei,Da,$i,Mi,Ci,It,Pi,Ga,ji,Oi,Lo,Cr,wt,Dt,Ua,No,Li,Wa,Ni,Pr,he,Ao,Ai,Io,Ii,Ln,Di,Gi,Ui,Do,Wi,Go,Ri,Ki,Hi,Gt,Qi,j,Uo,Vi,St,Ji,Nn,Xi,Yi,Ra,Zi,ec,tc,Ut,oc,Ka,nc,ac,Ha,Qa,Va,Ja,sc,rc,Xa,Ya,Za,es,dc,lc,ts,os,ns,as,ic,cc,ss,rs,ds,Wo,pc,ls,mc,uc,hc,is,cs,ps,ms,fc,jr,Bt,Wt,us,Ro,_c,hs,gc,Or,N,Ko,bc,Ho,kc,An,vc,yc,Tc,Qo,wc,Vo,Sc,Bc,zc,fs,xc,qc,We,_s,Jo,Fc,Ec,gs,Xo,$c,Mc,bs,Yo,Cc,Pc,ks,Zo,jc,Oc,Je,en,Lc,vs,Nc,Ac,tn,Ic,Xe,on,Dc,ys,Gc,Uc,nn,Wc,Ye,an,Rc,Ts,Kc,Hc,sn,Lr,zt,Rt,ws,rn,Qc,Ss,Vc,Nr,A,dn,Jc,ln,Xc,In,Yc,Zc,ep,cn,tp,pn,op,np,ap,Bs,sp,rp,Re,zs,mn,dp,lp,xs,un,ip,cp,qs,hn,pp,mp,Fs,fn,up,hp,E,_n,fp,xt,_p,Es,gp,bp,$s,kp,vp,yp,Kt,Tp,Ms,wp,Sp,Cs,Ps,js,Os,Bp,zp,Ls,Ns,As,Is,xp,qp,Ds,Gs,Us,Ws,Fp,Ep,Rs,Ks,gn,Ht,Qt,Hs,bn,$p,Qs,Mp,Cp,Vs,Pp,jp,Js,Op,Lp,Xs,Ys,Zs,er,Np,Ap,tr,or,nr,ar,Ip,Dp,sr,rr,dr,lr,Gp,Up,ir,cr,pr,mr,Wp,Rp,Ze,kn,Kp,ur,Hp,Qp,vn,Vp,et,yn,Jp,hr,Xp,Yp,Tn,Ar;return S=new Fe({}),re=new Fe({}),ze=new Fe({}),Zt=new P({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),to=new qt({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),oo=new Fe({}),no=new P({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L67",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),so=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils_base.py#L2884",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ro=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils.py#L843",parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),lo=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils_base.py#L2864",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),io=new Fe({}),co=new P({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L50",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}]}}),mo=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L96",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),uo=new Fe({}),ho=new P({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1058",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bo=new P({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1085",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pt=new Sn({props:{$$slots:{default:[ff]},$$scope:{ctx:H}}}),ko=new qt({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vo=new Fe({}),yo=new P({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1184",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bo=new P({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1228",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ot=new Sn({props:{$$slots:{default:[_f]},$$scope:{ctx:H}}}),xo=new Fe({}),Fo=new P({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1395",parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new qt({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$o=new Fe({}),Mo=new P({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1174",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),At=new Sn({props:{$$slots:{default:[gf]},$$scope:{ctx:H}}}),Oo=new P({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1186",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),It=new Sn({props:{$$slots:{default:[bf]},$$scope:{ctx:H}}}),Lo=new qt({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),No=new Fe({}),Ao=new P({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1281",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Gt=new Sn({props:{$$slots:{default:[kf]},$$scope:{ctx:H}}}),Uo=new P({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1314",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ut=new Sn({props:{$$slots:{default:[vf]},$$scope:{ctx:H}}}),Ro=new Fe({}),Ko=new P({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1218",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),en=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1154",returnDescription:`
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new qt({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),on=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L975",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new qt({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),an=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1038",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new qt({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),rn=new Fe({}),dn=new P({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1306",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),_n=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1154",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kt=new Sn({props:{$$slots:{default:[yf]},$$scope:{ctx:H}}}),bn=new Fe({}),kn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L975",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new qt({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),yn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1310",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new qt({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=o("meta"),x=l(),y=o("h1"),T=o("a"),B=o("span"),f(S.$$.fragment),w=l(),q=o("span"),Pe=r("Blenderbot Small"),fe=l(),z=o("p"),je=r("Note that "),U=o("a"),Oe=r("BlenderbotSmallModel"),Le=r(` and
`),W=o("a"),Ne=r("BlenderbotSmallForConditionalGeneration"),Ae=r(` are only used in combination with the checkpoint
`),Q=o("a"),V=r("facebook/blenderbot-90M"),Ie=r(`. Larger Blenderbot checkpoints should
instead be used with `),Z=o("a"),M=r("BlenderbotModel"),O=r(` and
`),_e=o("a"),se=r("BlenderbotForConditionalGeneration"),Ee=l(),J=o("h2"),I=o("a"),Te=o("span"),f(re.$$.fragment),L=l(),we=o("span"),de=r("Overview"),$e=l(),ee=o("p"),le=r("The Blender chatbot model was proposed in "),ie=o("a"),De=r("Recipes for building an open-domain chatbot"),X=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Me=l(),R=o("p"),Ge=r("The abstract of the paper is the following:"),h=l(),F=o("p"),ce=o("em"),rt=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ke=l(),C=o("p"),dt=r("This model was contributed by "),Se=o("a"),lt=r("patrickvonplaten"),Y=r(`. The authors\u2019 code can be
found `),D=o("a"),it=r("here"),ct=r(" ."),te=l(),pe=o("h2"),ge=o("a"),Be=o("span"),f(ze.$$.fragment),bd=l(),sa=o("span"),kd=r("BlenderbotSmallConfig"),vr=l(),me=o("div"),f(Zt.$$.fragment),vd=l(),pt=o("p"),yd=r("This is the configuration class to store the configuration of a "),Bn=o("a"),Td=r("BlenderbotSmallModel"),wd=r(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),eo=o("a"),Sd=r("facebook/blenderbot_small-90M"),Bd=r(" architecture."),zd=l(),mt=o("p"),xd=r("Configuration objects inherit from "),zn=o("a"),qd=r("PretrainedConfig"),Fd=r(` and can be used to control the model outputs. Read the
documentation from `),xn=o("a"),Ed=r("PretrainedConfig"),$d=r(" for more information."),Md=l(),ra=o("p"),Cd=r("Example:"),Pd=l(),f(to.$$.fragment),yr=l(),ut=o("h2"),Ft=o("a"),da=o("span"),f(oo.$$.fragment),jd=l(),la=o("span"),Od=r("BlenderbotSmallTokenizer"),Tr=l(),G=o("div"),f(no.$$.fragment),Ld=l(),ia=o("p"),Nd=r("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Ad=l(),ao=o("p"),Id=r("This tokenizer inherits from "),qn=o("a"),Dd=r("PreTrainedTokenizer"),Gd=r(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ud=l(),He=o("div"),f(so.$$.fragment),Wd=l(),ca=o("p"),Rd=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Kd=l(),pa=o("p"),Hd=r("This implementation does not add special tokens and this method should be overridden in a subclass."),Qd=l(),Et=o("div"),f(ro.$$.fragment),Vd=l(),ht=o("p"),Jd=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ma=o("code"),Xd=r("prepare_for_model"),Yd=r(" or "),ua=o("code"),Zd=r("encode_plus"),el=r(" methods."),tl=l(),Qe=o("div"),f(lo.$$.fragment),ol=l(),Fn=o("p"),nl=r("Create the token type IDs corresponding to the sequences passed. "),En=o("a"),al=r(`What are token type
IDs?`),sl=l(),ha=o("p"),rl=r("Should be overridden in a subclass if the model has a special way of building those."),dl=l(),fa=o("div"),wr=l(),ft=o("h2"),$t=o("a"),_a=o("span"),f(io.$$.fragment),ll=l(),ga=o("span"),il=r("BlenderbotSmallTokenizerFast"),Sr=l(),Ue=o("div"),f(co.$$.fragment),cl=l(),po=o("p"),pl=r("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ba=o("em"),ml=r("tokenizers"),ul=r(" library)."),hl=l(),Mt=o("div"),f(mo.$$.fragment),fl=l(),ka=o("p"),_l=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Br=l(),_t=o("h2"),Ct=o("a"),va=o("span"),f(uo.$$.fragment),gl=l(),ya=o("span"),bl=r("BlenderbotSmallModel"),zr=l(),xe=o("div"),f(ho.$$.fragment),kl=l(),fo=o("p"),vl=r(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$n=o("a"),yl=r("PreTrainedModel"),Tl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wl=l(),_o=o("p"),Sl=r("This model is also a PyTorch "),go=o("a"),Bl=r("torch.nn.Module"),zl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xl=l(),be=o("div"),f(bo.$$.fragment),ql=l(),gt=o("p"),Fl=r("The "),Mn=o("a"),El=r("BlenderbotSmallModel"),$l=r(" forward method, overrides the "),Ta=o("code"),Ml=r("__call__"),Cl=r(" special method."),Pl=l(),f(Pt.$$.fragment),jl=l(),wa=o("p"),Ol=r("Example:"),Ll=l(),f(ko.$$.fragment),xr=l(),bt=o("h2"),jt=o("a"),Sa=o("span"),f(vo.$$.fragment),Nl=l(),Ba=o("span"),Al=r("BlenderbotSmallForConditionalGeneration"),qr=l(),qe=o("div"),f(yo.$$.fragment),Il=l(),To=o("p"),Dl=r(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),Cn=o("a"),Gl=r("PreTrainedModel"),Ul=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wl=l(),wo=o("p"),Rl=r("This model is also a PyTorch "),So=o("a"),Kl=r("torch.nn.Module"),Hl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ql=l(),oe=o("div"),f(Bo.$$.fragment),Vl=l(),kt=o("p"),Jl=r("The "),Pn=o("a"),Xl=r("BlenderbotSmallForConditionalGeneration"),Yl=r(" forward method, overrides the "),za=o("code"),Zl=r("__call__"),ei=r(" special method."),ti=l(),f(Ot.$$.fragment),oi=l(),xa=o("p"),ni=r("Conversation example::"),ai=l(),qa=o("blockquote"),Fa=o("blockquote"),Ea=o("blockquote"),$a=o("p"),si=r(`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat
too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),ri=l(),Ma=o("blockquote"),Ca=o("blockquote"),Pa=o("blockquote"),zo=o("p"),di=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),ja=o("s"),li=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),ii=r(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019) >>>
inputs.pop(\u201Ctoken_type_ids\u201D) >>> next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D,
tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),Fr=l(),vt=o("h2"),Lt=o("a"),Oa=o("span"),f(xo.$$.fragment),ci=l(),La=o("span"),pi=r("BlenderbotSmallForCausalLM"),Er=l(),qo=o("div"),Ve=o("div"),f(Fo.$$.fragment),mi=l(),Na=o("p"),ui=r("Example:"),hi=l(),f(Eo.$$.fragment),$r=l(),yt=o("h2"),Nt=o("a"),Aa=o("span"),f($o.$$.fragment),fi=l(),Ia=o("span"),_i=r("TFBlenderbotSmallModel"),Mr=l(),ue=o("div"),f(Mo.$$.fragment),gi=l(),Co=o("p"),bi=r(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=o("a"),ki=r("TFPreTrainedModel"),vi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yi=l(),Po=o("p"),Ti=r("This model is also a "),jo=o("a"),wi=r("tf.keras.Model"),Si=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bi=l(),f(At.$$.fragment),zi=l(),ke=o("div"),f(Oo.$$.fragment),xi=l(),Tt=o("p"),qi=r("The "),On=o("a"),Fi=r("TFBlenderbotSmallModel"),Ei=r(" forward method, overrides the "),Da=o("code"),$i=r("__call__"),Mi=r(" special method."),Ci=l(),f(It.$$.fragment),Pi=l(),Ga=o("p"),ji=r("Example:"),Oi=l(),f(Lo.$$.fragment),Cr=l(),wt=o("h2"),Dt=o("a"),Ua=o("span"),f(No.$$.fragment),Li=l(),Wa=o("span"),Ni=r("TFBlenderbotSmallForConditionalGeneration"),Pr=l(),he=o("div"),f(Ao.$$.fragment),Ai=l(),Io=o("p"),Ii=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ln=o("a"),Di=r("TFPreTrainedModel"),Gi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ui=l(),Do=o("p"),Wi=r("This model is also a "),Go=o("a"),Ri=r("tf.keras.Model"),Ki=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hi=l(),f(Gt.$$.fragment),Qi=l(),j=o("div"),f(Uo.$$.fragment),Vi=l(),St=o("p"),Ji=r("The "),Nn=o("a"),Xi=r("TFBlenderbotSmallForConditionalGeneration"),Yi=r(" forward method, overrides the "),Ra=o("code"),Zi=r("__call__"),ec=r(" special method."),tc=l(),f(Ut.$$.fragment),oc=l(),Ka=o("p"),nc=r("Conversation example::"),ac=l(),Ha=o("blockquote"),Qa=o("blockquote"),Va=o("blockquote"),Ja=o("p"),sc=r(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),rc=l(),Xa=o("blockquote"),Ya=o("blockquote"),Za=o("blockquote"),es=o("p"),dc=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),lc=l(),ts=o("blockquote"),os=o("blockquote"),ns=o("blockquote"),as=o("p"),ic=r(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),cc=l(),ss=o("blockquote"),rs=o("blockquote"),ds=o("blockquote"),Wo=o("p"),pc=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),ls=o("s"),mc=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),uc=r(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),hc=l(),is=o("blockquote"),cs=o("blockquote"),ps=o("blockquote"),ms=o("p"),fc=r(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),jr=l(),Bt=o("h2"),Wt=o("a"),us=o("span"),f(Ro.$$.fragment),_c=l(),hs=o("span"),gc=r("FlaxBlenderbotSmallModel"),Or=l(),N=o("div"),f(Ko.$$.fragment),bc=l(),Ho=o("p"),kc=r(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),An=o("a"),vc=r("FlaxPreTrainedModel"),yc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tc=l(),Qo=o("p"),wc=r(`This model is also a Flax Linen
`),Vo=o("a"),Sc=r("flax.nn.Module"),Bc=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zc=l(),fs=o("p"),xc=r("Finally, this model supports inherent JAX features such as:"),qc=l(),We=o("ul"),_s=o("li"),Jo=o("a"),Fc=r("Just-In-Time (JIT) compilation"),Ec=l(),gs=o("li"),Xo=o("a"),$c=r("Automatic Differentiation"),Mc=l(),bs=o("li"),Yo=o("a"),Cc=r("Vectorization"),Pc=l(),ks=o("li"),Zo=o("a"),jc=r("Parallelization"),Oc=l(),Je=o("div"),f(en.$$.fragment),Lc=l(),vs=o("p"),Nc=r("Example:"),Ac=l(),f(tn.$$.fragment),Ic=l(),Xe=o("div"),f(on.$$.fragment),Dc=l(),ys=o("p"),Gc=r("Example:"),Uc=l(),f(nn.$$.fragment),Wc=l(),Ye=o("div"),f(an.$$.fragment),Rc=l(),Ts=o("p"),Kc=r("Example:"),Hc=l(),f(sn.$$.fragment),Lr=l(),zt=o("h2"),Rt=o("a"),ws=o("span"),f(rn.$$.fragment),Qc=l(),Ss=o("span"),Vc=r("FlaxBlenderbotForConditionalGeneration"),Nr=l(),A=o("div"),f(dn.$$.fragment),Jc=l(),ln=o("p"),Xc=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=o("a"),Yc=r("FlaxPreTrainedModel"),Zc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep=l(),cn=o("p"),tp=r(`This model is also a Flax Linen
`),pn=o("a"),op=r("flax.nn.Module"),np=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ap=l(),Bs=o("p"),sp=r("Finally, this model supports inherent JAX features such as:"),rp=l(),Re=o("ul"),zs=o("li"),mn=o("a"),dp=r("Just-In-Time (JIT) compilation"),lp=l(),xs=o("li"),un=o("a"),ip=r("Automatic Differentiation"),cp=l(),qs=o("li"),hn=o("a"),pp=r("Vectorization"),mp=l(),Fs=o("li"),fn=o("a"),up=r("Parallelization"),hp=l(),E=o("div"),f(_n.$$.fragment),fp=l(),xt=o("p"),_p=r("The "),Es=o("code"),gp=r("FlaxBlenderbotSmallPreTrainedModel"),bp=r("forward method, overrides the "),$s=o("code"),kp=r("__call__"),vp=r(" special method."),yp=l(),f(Kt.$$.fragment),Tp=l(),Ms=o("p"),wp=r("Summarization example:"),Sp=l(),Cs=o("blockquote"),Ps=o("blockquote"),js=o("blockquote"),Os=o("p"),Bp=r("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),zp=l(),Ls=o("blockquote"),Ns=o("blockquote"),As=o("blockquote"),Is=o("p"),xp=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),qp=l(),Ds=o("blockquote"),Gs=o("blockquote"),Us=o("blockquote"),Ws=o("p"),Fp=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Ep=l(),Rs=o("blockquote"),Ks=o("blockquote"),gn=o("blockquote"),Ht=o("h1"),Qt=o("a"),Hs=o("span"),f(bn.$$.fragment),$p=l(),Qs=o("span"),Mp=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Cp=l(),Vs=o("p"),Pp=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),jp=l(),Js=o("p"),Op=r("Mask filling example:"),Lp=l(),Xs=o("blockquote"),Ys=o("blockquote"),Zs=o("blockquote"),er=o("p"),Np=r(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Ap=l(),tr=o("blockquote"),or=o("blockquote"),nr=o("blockquote"),ar=o("p"),Ip=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Dp=l(),sr=o("blockquote"),rr=o("blockquote"),dr=o("blockquote"),lr=o("p"),Gp=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Up=l(),ir=o("blockquote"),cr=o("blockquote"),pr=o("blockquote"),mr=o("p"),Wp=r("tokenizer.decode(predictions).split()"),Rp=l(),Ze=o("div"),f(kn.$$.fragment),Kp=l(),ur=o("p"),Hp=r("Example:"),Qp=l(),f(vn.$$.fragment),Vp=l(),et=o("div"),f(yn.$$.fragment),Jp=l(),hr=o("p"),Xp=r("Example:"),Yp=l(),f(Tn.$$.fragment),this.h()},l(s){const m=hf('[data-svelte="svelte-1phssyn"]',document.head);u=n(m,"META",{name:!0,content:!0}),m.forEach(t),x=i(s),y=n(s,"H1",{class:!0});var wn=a(y);T=n(wn,"A",{id:!0,class:!0,href:!0});var fr=a(T);B=n(fr,"SPAN",{});var _r=a(B);_(S.$$.fragment,_r),_r.forEach(t),fr.forEach(t),w=i(wn),q=n(wn,"SPAN",{});var gr=a(q);Pe=d(gr,"Blenderbot Small"),gr.forEach(t),wn.forEach(t),fe=i(s),z=n(s,"P",{});var ve=a(z);je=d(ve,"Note that "),U=n(ve,"A",{href:!0});var br=a(U);Oe=d(br,"BlenderbotSmallModel"),br.forEach(t),Le=d(ve,` and
`),W=n(ve,"A",{href:!0});var kr=a(W);Ne=d(kr,"BlenderbotSmallForConditionalGeneration"),kr.forEach(t),Ae=d(ve,` are only used in combination with the checkpoint
`),Q=n(ve,"A",{href:!0,rel:!0});var em=a(Q);V=d(em,"facebook/blenderbot-90M"),em.forEach(t),Ie=d(ve,`. Larger Blenderbot checkpoints should
instead be used with `),Z=n(ve,"A",{href:!0});var tm=a(Z);M=d(tm,"BlenderbotModel"),tm.forEach(t),O=d(ve,` and
`),_e=n(ve,"A",{href:!0});var om=a(_e);se=d(om,"BlenderbotForConditionalGeneration"),om.forEach(t),ve.forEach(t),Ee=i(s),J=n(s,"H2",{class:!0});var Ir=a(J);I=n(Ir,"A",{id:!0,class:!0,href:!0});var nm=a(I);Te=n(nm,"SPAN",{});var am=a(Te);_(re.$$.fragment,am),am.forEach(t),nm.forEach(t),L=i(Ir),we=n(Ir,"SPAN",{});var sm=a(we);de=d(sm,"Overview"),sm.forEach(t),Ir.forEach(t),$e=i(s),ee=n(s,"P",{});var Dr=a(ee);le=d(Dr,"The Blender chatbot model was proposed in "),ie=n(Dr,"A",{href:!0,rel:!0});var rm=a(ie);De=d(rm,"Recipes for building an open-domain chatbot"),rm.forEach(t),X=d(Dr,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Dr.forEach(t),Me=i(s),R=n(s,"P",{});var dm=a(R);Ge=d(dm,"The abstract of the paper is the following:"),dm.forEach(t),h=i(s),F=n(s,"P",{});var lm=a(F);ce=n(lm,"EM",{});var im=a(ce);rt=d(im,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),im.forEach(t),lm.forEach(t),Ke=i(s),C=n(s,"P",{});var Dn=a(C);dt=d(Dn,"This model was contributed by "),Se=n(Dn,"A",{href:!0,rel:!0});var cm=a(Se);lt=d(cm,"patrickvonplaten"),cm.forEach(t),Y=d(Dn,`. The authors\u2019 code can be
found `),D=n(Dn,"A",{href:!0,rel:!0});var pm=a(D);it=d(pm,"here"),pm.forEach(t),ct=d(Dn," ."),Dn.forEach(t),te=i(s),pe=n(s,"H2",{class:!0});var Gr=a(pe);ge=n(Gr,"A",{id:!0,class:!0,href:!0});var mm=a(ge);Be=n(mm,"SPAN",{});var um=a(Be);_(ze.$$.fragment,um),um.forEach(t),mm.forEach(t),bd=i(Gr),sa=n(Gr,"SPAN",{});var hm=a(sa);kd=d(hm,"BlenderbotSmallConfig"),hm.forEach(t),Gr.forEach(t),vr=i(s),me=n(s,"DIV",{class:!0});var tt=a(me);_(Zt.$$.fragment,tt),vd=i(tt),pt=n(tt,"P",{});var Gn=a(pt);yd=d(Gn,"This is the configuration class to store the configuration of a "),Bn=n(Gn,"A",{href:!0});var fm=a(Bn);Td=d(fm,"BlenderbotSmallModel"),fm.forEach(t),wd=d(Gn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),eo=n(Gn,"A",{href:!0,rel:!0});var _m=a(eo);Sd=d(_m,"facebook/blenderbot_small-90M"),_m.forEach(t),Bd=d(Gn," architecture."),Gn.forEach(t),zd=i(tt),mt=n(tt,"P",{});var Un=a(mt);xd=d(Un,"Configuration objects inherit from "),zn=n(Un,"A",{href:!0});var gm=a(zn);qd=d(gm,"PretrainedConfig"),gm.forEach(t),Fd=d(Un,` and can be used to control the model outputs. Read the
documentation from `),xn=n(Un,"A",{href:!0});var bm=a(xn);Ed=d(bm,"PretrainedConfig"),bm.forEach(t),$d=d(Un," for more information."),Un.forEach(t),Md=i(tt),ra=n(tt,"P",{});var km=a(ra);Cd=d(km,"Example:"),km.forEach(t),Pd=i(tt),_(to.$$.fragment,tt),tt.forEach(t),yr=i(s),ut=n(s,"H2",{class:!0});var Ur=a(ut);Ft=n(Ur,"A",{id:!0,class:!0,href:!0});var vm=a(Ft);da=n(vm,"SPAN",{});var ym=a(da);_(oo.$$.fragment,ym),ym.forEach(t),vm.forEach(t),jd=i(Ur),la=n(Ur,"SPAN",{});var Tm=a(la);Od=d(Tm,"BlenderbotSmallTokenizer"),Tm.forEach(t),Ur.forEach(t),Tr=i(s),G=n(s,"DIV",{class:!0});var ye=a(G);_(no.$$.fragment,ye),Ld=i(ye),ia=n(ye,"P",{});var wm=a(ia);Nd=d(wm,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),wm.forEach(t),Ad=i(ye),ao=n(ye,"P",{});var Wr=a(ao);Id=d(Wr,"This tokenizer inherits from "),qn=n(Wr,"A",{href:!0});var Sm=a(qn);Dd=d(Sm,"PreTrainedTokenizer"),Sm.forEach(t),Gd=d(Wr,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Wr.forEach(t),Ud=i(ye),He=n(ye,"DIV",{class:!0});var Wn=a(He);_(so.$$.fragment,Wn),Wd=i(Wn),ca=n(Wn,"P",{});var Bm=a(ca);Rd=d(Bm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Bm.forEach(t),Kd=i(Wn),pa=n(Wn,"P",{});var zm=a(pa);Hd=d(zm,"This implementation does not add special tokens and this method should be overridden in a subclass."),zm.forEach(t),Wn.forEach(t),Qd=i(ye),Et=n(ye,"DIV",{class:!0});var Rr=a(Et);_(ro.$$.fragment,Rr),Vd=i(Rr),ht=n(Rr,"P",{});var Rn=a(ht);Jd=d(Rn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ma=n(Rn,"CODE",{});var xm=a(ma);Xd=d(xm,"prepare_for_model"),xm.forEach(t),Yd=d(Rn," or "),ua=n(Rn,"CODE",{});var qm=a(ua);Zd=d(qm,"encode_plus"),qm.forEach(t),el=d(Rn," methods."),Rn.forEach(t),Rr.forEach(t),tl=i(ye),Qe=n(ye,"DIV",{class:!0});var Kn=a(Qe);_(lo.$$.fragment,Kn),ol=i(Kn),Fn=n(Kn,"P",{});var Zp=a(Fn);nl=d(Zp,"Create the token type IDs corresponding to the sequences passed. "),En=n(Zp,"A",{href:!0});var Fm=a(En);al=d(Fm,`What are token type
IDs?`),Fm.forEach(t),Zp.forEach(t),sl=i(Kn),ha=n(Kn,"P",{});var Em=a(ha);rl=d(Em,"Should be overridden in a subclass if the model has a special way of building those."),Em.forEach(t),Kn.forEach(t),dl=i(ye),fa=n(ye,"DIV",{class:!0}),a(fa).forEach(t),ye.forEach(t),wr=i(s),ft=n(s,"H2",{class:!0});var Kr=a(ft);$t=n(Kr,"A",{id:!0,class:!0,href:!0});var $m=a($t);_a=n($m,"SPAN",{});var Mm=a(_a);_(io.$$.fragment,Mm),Mm.forEach(t),$m.forEach(t),ll=i(Kr),ga=n(Kr,"SPAN",{});var Cm=a(ga);il=d(Cm,"BlenderbotSmallTokenizerFast"),Cm.forEach(t),Kr.forEach(t),Sr=i(s),Ue=n(s,"DIV",{class:!0});var Hn=a(Ue);_(co.$$.fragment,Hn),cl=i(Hn),po=n(Hn,"P",{});var Hr=a(po);pl=d(Hr,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ba=n(Hr,"EM",{});var Pm=a(ba);ml=d(Pm,"tokenizers"),Pm.forEach(t),ul=d(Hr," library)."),Hr.forEach(t),hl=i(Hn),Mt=n(Hn,"DIV",{class:!0});var Qr=a(Mt);_(mo.$$.fragment,Qr),fl=i(Qr),ka=n(Qr,"P",{});var jm=a(ka);_l=d(jm,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),jm.forEach(t),Qr.forEach(t),Hn.forEach(t),Br=i(s),_t=n(s,"H2",{class:!0});var Vr=a(_t);Ct=n(Vr,"A",{id:!0,class:!0,href:!0});var Om=a(Ct);va=n(Om,"SPAN",{});var Lm=a(va);_(uo.$$.fragment,Lm),Lm.forEach(t),Om.forEach(t),gl=i(Vr),ya=n(Vr,"SPAN",{});var Nm=a(ya);bl=d(Nm,"BlenderbotSmallModel"),Nm.forEach(t),Vr.forEach(t),zr=i(s),xe=n(s,"DIV",{class:!0});var Vt=a(xe);_(ho.$$.fragment,Vt),kl=i(Vt),fo=n(Vt,"P",{});var Jr=a(fo);vl=d(Jr,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$n=n(Jr,"A",{href:!0});var Am=a($n);yl=d(Am,"PreTrainedModel"),Am.forEach(t),Tl=d(Jr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jr.forEach(t),wl=i(Vt),_o=n(Vt,"P",{});var Xr=a(_o);Sl=d(Xr,"This model is also a PyTorch "),go=n(Xr,"A",{href:!0,rel:!0});var Im=a(go);Bl=d(Im,"torch.nn.Module"),Im.forEach(t),zl=d(Xr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xr.forEach(t),xl=i(Vt),be=n(Vt,"DIV",{class:!0});var ot=a(be);_(bo.$$.fragment,ot),ql=i(ot),gt=n(ot,"P",{});var Qn=a(gt);Fl=d(Qn,"The "),Mn=n(Qn,"A",{href:!0});var Dm=a(Mn);El=d(Dm,"BlenderbotSmallModel"),Dm.forEach(t),$l=d(Qn," forward method, overrides the "),Ta=n(Qn,"CODE",{});var Gm=a(Ta);Ml=d(Gm,"__call__"),Gm.forEach(t),Cl=d(Qn," special method."),Qn.forEach(t),Pl=i(ot),_(Pt.$$.fragment,ot),jl=i(ot),wa=n(ot,"P",{});var Um=a(wa);Ol=d(Um,"Example:"),Um.forEach(t),Ll=i(ot),_(ko.$$.fragment,ot),ot.forEach(t),Vt.forEach(t),xr=i(s),bt=n(s,"H2",{class:!0});var Yr=a(bt);jt=n(Yr,"A",{id:!0,class:!0,href:!0});var Wm=a(jt);Sa=n(Wm,"SPAN",{});var Rm=a(Sa);_(vo.$$.fragment,Rm),Rm.forEach(t),Wm.forEach(t),Nl=i(Yr),Ba=n(Yr,"SPAN",{});var Km=a(Ba);Al=d(Km,"BlenderbotSmallForConditionalGeneration"),Km.forEach(t),Yr.forEach(t),qr=i(s),qe=n(s,"DIV",{class:!0});var Jt=a(qe);_(yo.$$.fragment,Jt),Il=i(Jt),To=n(Jt,"P",{});var Zr=a(To);Dl=d(Zr,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),Cn=n(Zr,"A",{href:!0});var Hm=a(Cn);Gl=d(Hm,"PreTrainedModel"),Hm.forEach(t),Ul=d(Zr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zr.forEach(t),Wl=i(Jt),wo=n(Jt,"P",{});var ed=a(wo);Rl=d(ed,"This model is also a PyTorch "),So=n(ed,"A",{href:!0,rel:!0});var Qm=a(So);Kl=d(Qm,"torch.nn.Module"),Qm.forEach(t),Hl=d(ed,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ed.forEach(t),Ql=i(Jt),oe=n(Jt,"DIV",{class:!0});var Ce=a(oe);_(Bo.$$.fragment,Ce),Vl=i(Ce),kt=n(Ce,"P",{});var Vn=a(kt);Jl=d(Vn,"The "),Pn=n(Vn,"A",{href:!0});var Vm=a(Pn);Xl=d(Vm,"BlenderbotSmallForConditionalGeneration"),Vm.forEach(t),Yl=d(Vn," forward method, overrides the "),za=n(Vn,"CODE",{});var Jm=a(za);Zl=d(Jm,"__call__"),Jm.forEach(t),ei=d(Vn," special method."),Vn.forEach(t),ti=i(Ce),_(Ot.$$.fragment,Ce),oi=i(Ce),xa=n(Ce,"P",{});var Xm=a(xa);ni=d(Xm,"Conversation example::"),Xm.forEach(t),ai=i(Ce),qa=n(Ce,"BLOCKQUOTE",{});var Ym=a(qa);Fa=n(Ym,"BLOCKQUOTE",{});var Zm=a(Fa);Ea=n(Zm,"BLOCKQUOTE",{});var eu=a(Ea);$a=n(eu,"P",{});var tu=a($a);si=d(tu,`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat
too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),tu.forEach(t),eu.forEach(t),Zm.forEach(t),Ym.forEach(t),ri=i(Ce),Ma=n(Ce,"BLOCKQUOTE",{});var ou=a(Ma);Ca=n(ou,"BLOCKQUOTE",{});var nu=a(Ca);Pa=n(nu,"BLOCKQUOTE",{});var au=a(Pa);zo=n(au,"P",{});var td=a(zo);di=d(td,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),ja=n(td,"S",{});var su=a(ja);li=d(su,"what kind of carbs do they eat? i don\u2019t know much about carbs."),su.forEach(t),ii=d(td,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019) >>>
inputs.pop(\u201Ctoken_type_ids\u201D) >>> next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D,
tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),td.forEach(t),au.forEach(t),nu.forEach(t),ou.forEach(t),Ce.forEach(t),Jt.forEach(t),Fr=i(s),vt=n(s,"H2",{class:!0});var od=a(vt);Lt=n(od,"A",{id:!0,class:!0,href:!0});var ru=a(Lt);Oa=n(ru,"SPAN",{});var du=a(Oa);_(xo.$$.fragment,du),du.forEach(t),ru.forEach(t),ci=i(od),La=n(od,"SPAN",{});var lu=a(La);pi=d(lu,"BlenderbotSmallForCausalLM"),lu.forEach(t),od.forEach(t),Er=i(s),qo=n(s,"DIV",{class:!0});var iu=a(qo);Ve=n(iu,"DIV",{class:!0});var Jn=a(Ve);_(Fo.$$.fragment,Jn),mi=i(Jn),Na=n(Jn,"P",{});var cu=a(Na);ui=d(cu,"Example:"),cu.forEach(t),hi=i(Jn),_(Eo.$$.fragment,Jn),Jn.forEach(t),iu.forEach(t),$r=i(s),yt=n(s,"H2",{class:!0});var nd=a(yt);Nt=n(nd,"A",{id:!0,class:!0,href:!0});var pu=a(Nt);Aa=n(pu,"SPAN",{});var mu=a(Aa);_($o.$$.fragment,mu),mu.forEach(t),pu.forEach(t),fi=i(nd),Ia=n(nd,"SPAN",{});var uu=a(Ia);_i=d(uu,"TFBlenderbotSmallModel"),uu.forEach(t),nd.forEach(t),Mr=i(s),ue=n(s,"DIV",{class:!0});var nt=a(ue);_(Mo.$$.fragment,nt),gi=i(nt),Co=n(nt,"P",{});var ad=a(Co);bi=d(ad,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=n(ad,"A",{href:!0});var hu=a(jn);ki=d(hu,"TFPreTrainedModel"),hu.forEach(t),vi=d(ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad.forEach(t),yi=i(nt),Po=n(nt,"P",{});var sd=a(Po);Ti=d(sd,"This model is also a "),jo=n(sd,"A",{href:!0,rel:!0});var fu=a(jo);wi=d(fu,"tf.keras.Model"),fu.forEach(t),Si=d(sd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sd.forEach(t),Bi=i(nt),_(At.$$.fragment,nt),zi=i(nt),ke=n(nt,"DIV",{class:!0});var at=a(ke);_(Oo.$$.fragment,at),xi=i(at),Tt=n(at,"P",{});var Xn=a(Tt);qi=d(Xn,"The "),On=n(Xn,"A",{href:!0});var _u=a(On);Fi=d(_u,"TFBlenderbotSmallModel"),_u.forEach(t),Ei=d(Xn," forward method, overrides the "),Da=n(Xn,"CODE",{});var gu=a(Da);$i=d(gu,"__call__"),gu.forEach(t),Mi=d(Xn," special method."),Xn.forEach(t),Ci=i(at),_(It.$$.fragment,at),Pi=i(at),Ga=n(at,"P",{});var bu=a(Ga);ji=d(bu,"Example:"),bu.forEach(t),Oi=i(at),_(Lo.$$.fragment,at),at.forEach(t),nt.forEach(t),Cr=i(s),wt=n(s,"H2",{class:!0});var rd=a(wt);Dt=n(rd,"A",{id:!0,class:!0,href:!0});var ku=a(Dt);Ua=n(ku,"SPAN",{});var vu=a(Ua);_(No.$$.fragment,vu),vu.forEach(t),ku.forEach(t),Li=i(rd),Wa=n(rd,"SPAN",{});var yu=a(Wa);Ni=d(yu,"TFBlenderbotSmallForConditionalGeneration"),yu.forEach(t),rd.forEach(t),Pr=i(s),he=n(s,"DIV",{class:!0});var st=a(he);_(Ao.$$.fragment,st),Ai=i(st),Io=n(st,"P",{});var dd=a(Io);Ii=d(dd,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ln=n(dd,"A",{href:!0});var Tu=a(Ln);Di=d(Tu,"TFPreTrainedModel"),Tu.forEach(t),Gi=d(dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dd.forEach(t),Ui=i(st),Do=n(st,"P",{});var ld=a(Do);Wi=d(ld,"This model is also a "),Go=n(ld,"A",{href:!0,rel:!0});var wu=a(Go);Ri=d(wu,"tf.keras.Model"),wu.forEach(t),Ki=d(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(t),Hi=i(st),_(Gt.$$.fragment,st),Qi=i(st),j=n(st,"DIV",{class:!0});var K=a(j);_(Uo.$$.fragment,K),Vi=i(K),St=n(K,"P",{});var Yn=a(St);Ji=d(Yn,"The "),Nn=n(Yn,"A",{href:!0});var Su=a(Nn);Xi=d(Su,"TFBlenderbotSmallForConditionalGeneration"),Su.forEach(t),Yi=d(Yn," forward method, overrides the "),Ra=n(Yn,"CODE",{});var Bu=a(Ra);Zi=d(Bu,"__call__"),Bu.forEach(t),ec=d(Yn," special method."),Yn.forEach(t),tc=i(K),_(Ut.$$.fragment,K),oc=i(K),Ka=n(K,"P",{});var zu=a(Ka);nc=d(zu,"Conversation example::"),zu.forEach(t),ac=i(K),Ha=n(K,"BLOCKQUOTE",{});var xu=a(Ha);Qa=n(xu,"BLOCKQUOTE",{});var qu=a(Qa);Va=n(qu,"BLOCKQUOTE",{});var Fu=a(Va);Ja=n(Fu,"P",{});var Eu=a(Ja);sc=d(Eu,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Eu.forEach(t),Fu.forEach(t),qu.forEach(t),xu.forEach(t),rc=i(K),Xa=n(K,"BLOCKQUOTE",{});var $u=a(Xa);Ya=n($u,"BLOCKQUOTE",{});var Mu=a(Ya);Za=n(Mu,"BLOCKQUOTE",{});var Cu=a(Za);es=n(Cu,"P",{});var Pu=a(es);dc=d(Pu,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Pu.forEach(t),Cu.forEach(t),Mu.forEach(t),$u.forEach(t),lc=i(K),ts=n(K,"BLOCKQUOTE",{});var ju=a(ts);os=n(ju,"BLOCKQUOTE",{});var Ou=a(os);ns=n(Ou,"BLOCKQUOTE",{});var Lu=a(ns);as=n(Lu,"P",{});var Nu=a(as);ic=d(Nu,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Nu.forEach(t),Lu.forEach(t),Ou.forEach(t),ju.forEach(t),cc=i(K),ss=n(K,"BLOCKQUOTE",{});var Au=a(ss);rs=n(Au,"BLOCKQUOTE",{});var Iu=a(rs);ds=n(Iu,"BLOCKQUOTE",{});var Du=a(ds);Wo=n(Du,"P",{});var id=a(Wo);pc=d(id,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),ls=n(id,"S",{});var Gu=a(ls);mc=d(Gu,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Gu.forEach(t),uc=d(id,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),id.forEach(t),Du.forEach(t),Iu.forEach(t),Au.forEach(t),hc=i(K),is=n(K,"BLOCKQUOTE",{});var Uu=a(is);cs=n(Uu,"BLOCKQUOTE",{});var Wu=a(cs);ps=n(Wu,"BLOCKQUOTE",{});var Ru=a(ps);ms=n(Ru,"P",{});var Ku=a(ms);fc=d(Ku,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Ku.forEach(t),Ru.forEach(t),Wu.forEach(t),Uu.forEach(t),K.forEach(t),st.forEach(t),jr=i(s),Bt=n(s,"H2",{class:!0});var cd=a(Bt);Wt=n(cd,"A",{id:!0,class:!0,href:!0});var Hu=a(Wt);us=n(Hu,"SPAN",{});var Qu=a(us);_(Ro.$$.fragment,Qu),Qu.forEach(t),Hu.forEach(t),_c=i(cd),hs=n(cd,"SPAN",{});var Vu=a(hs);gc=d(Vu,"FlaxBlenderbotSmallModel"),Vu.forEach(t),cd.forEach(t),Or=i(s),N=n(s,"DIV",{class:!0});var ne=a(N);_(Ko.$$.fragment,ne),bc=i(ne),Ho=n(ne,"P",{});var pd=a(Ho);kc=d(pd,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),An=n(pd,"A",{href:!0});var Ju=a(An);vc=d(Ju,"FlaxPreTrainedModel"),Ju.forEach(t),yc=d(pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd.forEach(t),Tc=i(ne),Qo=n(ne,"P",{});var md=a(Qo);wc=d(md,`This model is also a Flax Linen
`),Vo=n(md,"A",{href:!0,rel:!0});var Xu=a(Vo);Sc=d(Xu,"flax.nn.Module"),Xu.forEach(t),Bc=d(md,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),md.forEach(t),zc=i(ne),fs=n(ne,"P",{});var Yu=a(fs);xc=d(Yu,"Finally, this model supports inherent JAX features such as:"),Yu.forEach(t),qc=i(ne),We=n(ne,"UL",{});var Xt=a(We);_s=n(Xt,"LI",{});var Zu=a(_s);Jo=n(Zu,"A",{href:!0,rel:!0});var eh=a(Jo);Fc=d(eh,"Just-In-Time (JIT) compilation"),eh.forEach(t),Zu.forEach(t),Ec=i(Xt),gs=n(Xt,"LI",{});var th=a(gs);Xo=n(th,"A",{href:!0,rel:!0});var oh=a(Xo);$c=d(oh,"Automatic Differentiation"),oh.forEach(t),th.forEach(t),Mc=i(Xt),bs=n(Xt,"LI",{});var nh=a(bs);Yo=n(nh,"A",{href:!0,rel:!0});var ah=a(Yo);Cc=d(ah,"Vectorization"),ah.forEach(t),nh.forEach(t),Pc=i(Xt),ks=n(Xt,"LI",{});var sh=a(ks);Zo=n(sh,"A",{href:!0,rel:!0});var rh=a(Zo);jc=d(rh,"Parallelization"),rh.forEach(t),sh.forEach(t),Xt.forEach(t),Oc=i(ne),Je=n(ne,"DIV",{class:!0});var Zn=a(Je);_(en.$$.fragment,Zn),Lc=i(Zn),vs=n(Zn,"P",{});var dh=a(vs);Nc=d(dh,"Example:"),dh.forEach(t),Ac=i(Zn),_(tn.$$.fragment,Zn),Zn.forEach(t),Ic=i(ne),Xe=n(ne,"DIV",{class:!0});var ea=a(Xe);_(on.$$.fragment,ea),Dc=i(ea),ys=n(ea,"P",{});var lh=a(ys);Gc=d(lh,"Example:"),lh.forEach(t),Uc=i(ea),_(nn.$$.fragment,ea),ea.forEach(t),Wc=i(ne),Ye=n(ne,"DIV",{class:!0});var ta=a(Ye);_(an.$$.fragment,ta),Rc=i(ta),Ts=n(ta,"P",{});var ih=a(Ts);Kc=d(ih,"Example:"),ih.forEach(t),Hc=i(ta),_(sn.$$.fragment,ta),ta.forEach(t),ne.forEach(t),Lr=i(s),zt=n(s,"H2",{class:!0});var ud=a(zt);Rt=n(ud,"A",{id:!0,class:!0,href:!0});var ch=a(Rt);ws=n(ch,"SPAN",{});var ph=a(ws);_(rn.$$.fragment,ph),ph.forEach(t),ch.forEach(t),Qc=i(ud),Ss=n(ud,"SPAN",{});var mh=a(Ss);Vc=d(mh,"FlaxBlenderbotForConditionalGeneration"),mh.forEach(t),ud.forEach(t),Nr=i(s),A=n(s,"DIV",{class:!0});var ae=a(A);_(dn.$$.fragment,ae),Jc=i(ae),ln=n(ae,"P",{});var hd=a(ln);Xc=d(hd,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=n(hd,"A",{href:!0});var uh=a(In);Yc=d(uh,"FlaxPreTrainedModel"),uh.forEach(t),Zc=d(hd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hd.forEach(t),ep=i(ae),cn=n(ae,"P",{});var fd=a(cn);tp=d(fd,`This model is also a Flax Linen
`),pn=n(fd,"A",{href:!0,rel:!0});var hh=a(pn);op=d(hh,"flax.nn.Module"),hh.forEach(t),np=d(fd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fd.forEach(t),ap=i(ae),Bs=n(ae,"P",{});var fh=a(Bs);sp=d(fh,"Finally, this model supports inherent JAX features such as:"),fh.forEach(t),rp=i(ae),Re=n(ae,"UL",{});var Yt=a(Re);zs=n(Yt,"LI",{});var _h=a(zs);mn=n(_h,"A",{href:!0,rel:!0});var gh=a(mn);dp=d(gh,"Just-In-Time (JIT) compilation"),gh.forEach(t),_h.forEach(t),lp=i(Yt),xs=n(Yt,"LI",{});var bh=a(xs);un=n(bh,"A",{href:!0,rel:!0});var kh=a(un);ip=d(kh,"Automatic Differentiation"),kh.forEach(t),bh.forEach(t),cp=i(Yt),qs=n(Yt,"LI",{});var vh=a(qs);hn=n(vh,"A",{href:!0,rel:!0});var yh=a(hn);pp=d(yh,"Vectorization"),yh.forEach(t),vh.forEach(t),mp=i(Yt),Fs=n(Yt,"LI",{});var Th=a(Fs);fn=n(Th,"A",{href:!0,rel:!0});var wh=a(fn);up=d(wh,"Parallelization"),wh.forEach(t),Th.forEach(t),Yt.forEach(t),hp=i(ae),E=n(ae,"DIV",{class:!0});var $=a(E);_(_n.$$.fragment,$),fp=i($),xt=n($,"P",{});var oa=a(xt);_p=d(oa,"The "),Es=n(oa,"CODE",{});var Sh=a(Es);gp=d(Sh,"FlaxBlenderbotSmallPreTrainedModel"),Sh.forEach(t),bp=d(oa,"forward method, overrides the "),$s=n(oa,"CODE",{});var Bh=a($s);kp=d(Bh,"__call__"),Bh.forEach(t),vp=d(oa," special method."),oa.forEach(t),yp=i($),_(Kt.$$.fragment,$),Tp=i($),Ms=n($,"P",{});var zh=a(Ms);wp=d(zh,"Summarization example:"),zh.forEach(t),Sp=i($),Cs=n($,"BLOCKQUOTE",{});var xh=a(Cs);Ps=n(xh,"BLOCKQUOTE",{});var qh=a(Ps);js=n(qh,"BLOCKQUOTE",{});var Fh=a(js);Os=n(Fh,"P",{});var Eh=a(Os);Bp=d(Eh,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),Eh.forEach(t),Fh.forEach(t),qh.forEach(t),xh.forEach(t),zp=i($),Ls=n($,"BLOCKQUOTE",{});var $h=a(Ls);Ns=n($h,"BLOCKQUOTE",{});var Mh=a(Ns);As=n(Mh,"BLOCKQUOTE",{});var Ch=a(As);Is=n(Ch,"P",{});var Ph=a(Is);xp=d(Ph,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),Ph.forEach(t),Ch.forEach(t),Mh.forEach(t),$h.forEach(t),qp=i($),Ds=n($,"BLOCKQUOTE",{});var jh=a(Ds);Gs=n(jh,"BLOCKQUOTE",{});var Oh=a(Gs);Us=n(Oh,"BLOCKQUOTE",{});var Lh=a(Us);Ws=n(Lh,"P",{});var Nh=a(Ws);Fp=d(Nh,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Nh.forEach(t),Lh.forEach(t),Oh.forEach(t),jh.forEach(t),Ep=i($),Rs=n($,"BLOCKQUOTE",{});var Ah=a(Rs);Ks=n(Ah,"BLOCKQUOTE",{});var Ih=a(Ks);gn=n(Ih,"BLOCKQUOTE",{});var _d=a(gn);Ht=n(_d,"H1",{class:!0});var gd=a(Ht);Qt=n(gd,"A",{id:!0,class:!0,href:!0});var Dh=a(Qt);Hs=n(Dh,"SPAN",{});var Gh=a(Hs);_(bn.$$.fragment,Gh),Gh.forEach(t),Dh.forEach(t),$p=i(gd),Qs=n(gd,"SPAN",{});var Uh=a(Qs);Mp=d(Uh,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Uh.forEach(t),gd.forEach(t),Cp=i(_d),Vs=n(_d,"P",{});var Wh=a(Vs);Pp=d(Wh,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Wh.forEach(t),_d.forEach(t),Ih.forEach(t),Ah.forEach(t),jp=i($),Js=n($,"P",{});var Rh=a(Js);Op=d(Rh,"Mask filling example:"),Rh.forEach(t),Lp=i($),Xs=n($,"BLOCKQUOTE",{});var Kh=a(Xs);Ys=n(Kh,"BLOCKQUOTE",{});var Hh=a(Ys);Zs=n(Hh,"BLOCKQUOTE",{});var Qh=a(Zs);er=n(Qh,"P",{});var Vh=a(er);Np=d(Vh,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Vh.forEach(t),Qh.forEach(t),Hh.forEach(t),Kh.forEach(t),Ap=i($),tr=n($,"BLOCKQUOTE",{});var Jh=a(tr);or=n(Jh,"BLOCKQUOTE",{});var Xh=a(or);nr=n(Xh,"BLOCKQUOTE",{});var Yh=a(nr);ar=n(Yh,"P",{});var Zh=a(ar);Ip=d(Zh,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Zh.forEach(t),Yh.forEach(t),Xh.forEach(t),Jh.forEach(t),Dp=i($),sr=n($,"BLOCKQUOTE",{});var ef=a(sr);rr=n(ef,"BLOCKQUOTE",{});var tf=a(rr);dr=n(tf,"BLOCKQUOTE",{});var of=a(dr);lr=n(of,"P",{});var nf=a(lr);Gp=d(nf,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),nf.forEach(t),of.forEach(t),tf.forEach(t),ef.forEach(t),Up=i($),ir=n($,"BLOCKQUOTE",{});var af=a(ir);cr=n(af,"BLOCKQUOTE",{});var sf=a(cr);pr=n(sf,"BLOCKQUOTE",{});var rf=a(pr);mr=n(rf,"P",{});var df=a(mr);Wp=d(df,"tokenizer.decode(predictions).split()"),df.forEach(t),rf.forEach(t),sf.forEach(t),af.forEach(t),$.forEach(t),Rp=i(ae),Ze=n(ae,"DIV",{class:!0});var na=a(Ze);_(kn.$$.fragment,na),Kp=i(na),ur=n(na,"P",{});var lf=a(ur);Hp=d(lf,"Example:"),lf.forEach(t),Qp=i(na),_(vn.$$.fragment,na),na.forEach(t),Vp=i(ae),et=n(ae,"DIV",{class:!0});var aa=a(et);_(yn.$$.fragment,aa),Jp=i(aa),hr=n(aa,"P",{});var cf=a(hr);Xp=d(cf,"Example:"),cf.forEach(t),Yp=i(aa),_(Tn.$$.fragment,aa),aa.forEach(t),ae.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(wf)),c(T,"id","blenderbot-small"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot-small"),c(y,"class","relative group"),c(U,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(W,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(Q,"href","https://huggingface.co/facebook/blenderbot-90M"),c(Q,"rel","nofollow"),c(Z,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(_e,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(I,"id","overview"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#overview"),c(J,"class","relative group"),c(ie,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(ie,"rel","nofollow"),c(Se,"href","https://huggingface.co/patrickvonplaten"),c(Se,"rel","nofollow"),c(D,"href","https://github.com/facebookresearch/ParlAI"),c(D,"rel","nofollow"),c(ge,"id","transformers.BlenderbotSmallConfig"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#transformers.BlenderbotSmallConfig"),c(pe,"class","relative group"),c(Bn,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(eo,"href","https://huggingface.co/facebook/blenderbot_small-90M"),c(eo,"rel","nofollow"),c(zn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(xn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(me,"class","docstring"),c(Ft,"id","transformers.BlenderbotSmallTokenizer"),c(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ft,"href","#transformers.BlenderbotSmallTokenizer"),c(ut,"class","relative group"),c(qn,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(He,"class","docstring"),c(Et,"class","docstring"),c(En,"href","../glossary#token-type-ids"),c(Qe,"class","docstring"),c(fa,"class","docstring"),c(G,"class","docstring"),c($t,"id","transformers.BlenderbotSmallTokenizerFast"),c($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($t,"href","#transformers.BlenderbotSmallTokenizerFast"),c(ft,"class","relative group"),c(Mt,"class","docstring"),c(Ue,"class","docstring"),c(Ct,"id","transformers.BlenderbotSmallModel"),c(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ct,"href","#transformers.BlenderbotSmallModel"),c(_t,"class","relative group"),c($n,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(go,"rel","nofollow"),c(Mn,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),c(be,"class","docstring"),c(xe,"class","docstring"),c(jt,"id","transformers.BlenderbotSmallForConditionalGeneration"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.BlenderbotSmallForConditionalGeneration"),c(bt,"class","relative group"),c(Cn,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(So,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(So,"rel","nofollow"),c(Pn,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),c(oe,"class","docstring"),c(qe,"class","docstring"),c(Lt,"id","transformers.BlenderbotSmallForCausalLM"),c(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lt,"href","#transformers.BlenderbotSmallForCausalLM"),c(vt,"class","relative group"),c(Ve,"class","docstring"),c(qo,"class","docstring"),c(Nt,"id","transformers.TFBlenderbotSmallModel"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.TFBlenderbotSmallModel"),c(yt,"class","relative group"),c(jn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(jo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(jo,"rel","nofollow"),c(On,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),c(ke,"class","docstring"),c(ue,"class","docstring"),c(Dt,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),c(wt,"class","relative group"),c(Ln,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Go,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Go,"rel","nofollow"),c(Nn,"href","/docs/transformers/master/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),c(j,"class","docstring"),c(he,"class","docstring"),c(Wt,"id","transformers.FlaxBlenderbotSmallModel"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#transformers.FlaxBlenderbotSmallModel"),c(Bt,"class","relative group"),c(An,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Vo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Vo,"rel","nofollow"),c(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Jo,"rel","nofollow"),c(Xo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Xo,"rel","nofollow"),c(Yo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Yo,"rel","nofollow"),c(Zo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zo,"rel","nofollow"),c(Je,"class","docstring"),c(Xe,"class","docstring"),c(Ye,"class","docstring"),c(N,"class","docstring"),c(Rt,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(zt,"class","relative group"),c(In,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(pn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(pn,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(mn,"rel","nofollow"),c(un,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(un,"rel","nofollow"),c(hn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(hn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(fn,"rel","nofollow"),c(Qt,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),c(Ht,"class","relative group"),c(E,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(A,"class","docstring")},m(s,m){e(document.head,u),p(s,x,m),p(s,y,m),e(y,T),e(T,B),g(S,B,null),e(y,w),e(y,q),e(q,Pe),p(s,fe,m),p(s,z,m),e(z,je),e(z,U),e(U,Oe),e(z,Le),e(z,W),e(W,Ne),e(z,Ae),e(z,Q),e(Q,V),e(z,Ie),e(z,Z),e(Z,M),e(z,O),e(z,_e),e(_e,se),p(s,Ee,m),p(s,J,m),e(J,I),e(I,Te),g(re,Te,null),e(J,L),e(J,we),e(we,de),p(s,$e,m),p(s,ee,m),e(ee,le),e(ee,ie),e(ie,De),e(ee,X),p(s,Me,m),p(s,R,m),e(R,Ge),p(s,h,m),p(s,F,m),e(F,ce),e(ce,rt),p(s,Ke,m),p(s,C,m),e(C,dt),e(C,Se),e(Se,lt),e(C,Y),e(C,D),e(D,it),e(C,ct),p(s,te,m),p(s,pe,m),e(pe,ge),e(ge,Be),g(ze,Be,null),e(pe,bd),e(pe,sa),e(sa,kd),p(s,vr,m),p(s,me,m),g(Zt,me,null),e(me,vd),e(me,pt),e(pt,yd),e(pt,Bn),e(Bn,Td),e(pt,wd),e(pt,eo),e(eo,Sd),e(pt,Bd),e(me,zd),e(me,mt),e(mt,xd),e(mt,zn),e(zn,qd),e(mt,Fd),e(mt,xn),e(xn,Ed),e(mt,$d),e(me,Md),e(me,ra),e(ra,Cd),e(me,Pd),g(to,me,null),p(s,yr,m),p(s,ut,m),e(ut,Ft),e(Ft,da),g(oo,da,null),e(ut,jd),e(ut,la),e(la,Od),p(s,Tr,m),p(s,G,m),g(no,G,null),e(G,Ld),e(G,ia),e(ia,Nd),e(G,Ad),e(G,ao),e(ao,Id),e(ao,qn),e(qn,Dd),e(ao,Gd),e(G,Ud),e(G,He),g(so,He,null),e(He,Wd),e(He,ca),e(ca,Rd),e(He,Kd),e(He,pa),e(pa,Hd),e(G,Qd),e(G,Et),g(ro,Et,null),e(Et,Vd),e(Et,ht),e(ht,Jd),e(ht,ma),e(ma,Xd),e(ht,Yd),e(ht,ua),e(ua,Zd),e(ht,el),e(G,tl),e(G,Qe),g(lo,Qe,null),e(Qe,ol),e(Qe,Fn),e(Fn,nl),e(Fn,En),e(En,al),e(Qe,sl),e(Qe,ha),e(ha,rl),e(G,dl),e(G,fa),p(s,wr,m),p(s,ft,m),e(ft,$t),e($t,_a),g(io,_a,null),e(ft,ll),e(ft,ga),e(ga,il),p(s,Sr,m),p(s,Ue,m),g(co,Ue,null),e(Ue,cl),e(Ue,po),e(po,pl),e(po,ba),e(ba,ml),e(po,ul),e(Ue,hl),e(Ue,Mt),g(mo,Mt,null),e(Mt,fl),e(Mt,ka),e(ka,_l),p(s,Br,m),p(s,_t,m),e(_t,Ct),e(Ct,va),g(uo,va,null),e(_t,gl),e(_t,ya),e(ya,bl),p(s,zr,m),p(s,xe,m),g(ho,xe,null),e(xe,kl),e(xe,fo),e(fo,vl),e(fo,$n),e($n,yl),e(fo,Tl),e(xe,wl),e(xe,_o),e(_o,Sl),e(_o,go),e(go,Bl),e(_o,zl),e(xe,xl),e(xe,be),g(bo,be,null),e(be,ql),e(be,gt),e(gt,Fl),e(gt,Mn),e(Mn,El),e(gt,$l),e(gt,Ta),e(Ta,Ml),e(gt,Cl),e(be,Pl),g(Pt,be,null),e(be,jl),e(be,wa),e(wa,Ol),e(be,Ll),g(ko,be,null),p(s,xr,m),p(s,bt,m),e(bt,jt),e(jt,Sa),g(vo,Sa,null),e(bt,Nl),e(bt,Ba),e(Ba,Al),p(s,qr,m),p(s,qe,m),g(yo,qe,null),e(qe,Il),e(qe,To),e(To,Dl),e(To,Cn),e(Cn,Gl),e(To,Ul),e(qe,Wl),e(qe,wo),e(wo,Rl),e(wo,So),e(So,Kl),e(wo,Hl),e(qe,Ql),e(qe,oe),g(Bo,oe,null),e(oe,Vl),e(oe,kt),e(kt,Jl),e(kt,Pn),e(Pn,Xl),e(kt,Yl),e(kt,za),e(za,Zl),e(kt,ei),e(oe,ti),g(Ot,oe,null),e(oe,oi),e(oe,xa),e(xa,ni),e(oe,ai),e(oe,qa),e(qa,Fa),e(Fa,Ea),e(Ea,$a),e($a,si),e(oe,ri),e(oe,Ma),e(Ma,Ca),e(Ca,Pa),e(Pa,zo),e(zo,di),e(zo,ja),e(ja,li),e(zo,ii),p(s,Fr,m),p(s,vt,m),e(vt,Lt),e(Lt,Oa),g(xo,Oa,null),e(vt,ci),e(vt,La),e(La,pi),p(s,Er,m),p(s,qo,m),e(qo,Ve),g(Fo,Ve,null),e(Ve,mi),e(Ve,Na),e(Na,ui),e(Ve,hi),g(Eo,Ve,null),p(s,$r,m),p(s,yt,m),e(yt,Nt),e(Nt,Aa),g($o,Aa,null),e(yt,fi),e(yt,Ia),e(Ia,_i),p(s,Mr,m),p(s,ue,m),g(Mo,ue,null),e(ue,gi),e(ue,Co),e(Co,bi),e(Co,jn),e(jn,ki),e(Co,vi),e(ue,yi),e(ue,Po),e(Po,Ti),e(Po,jo),e(jo,wi),e(Po,Si),e(ue,Bi),g(At,ue,null),e(ue,zi),e(ue,ke),g(Oo,ke,null),e(ke,xi),e(ke,Tt),e(Tt,qi),e(Tt,On),e(On,Fi),e(Tt,Ei),e(Tt,Da),e(Da,$i),e(Tt,Mi),e(ke,Ci),g(It,ke,null),e(ke,Pi),e(ke,Ga),e(Ga,ji),e(ke,Oi),g(Lo,ke,null),p(s,Cr,m),p(s,wt,m),e(wt,Dt),e(Dt,Ua),g(No,Ua,null),e(wt,Li),e(wt,Wa),e(Wa,Ni),p(s,Pr,m),p(s,he,m),g(Ao,he,null),e(he,Ai),e(he,Io),e(Io,Ii),e(Io,Ln),e(Ln,Di),e(Io,Gi),e(he,Ui),e(he,Do),e(Do,Wi),e(Do,Go),e(Go,Ri),e(Do,Ki),e(he,Hi),g(Gt,he,null),e(he,Qi),e(he,j),g(Uo,j,null),e(j,Vi),e(j,St),e(St,Ji),e(St,Nn),e(Nn,Xi),e(St,Yi),e(St,Ra),e(Ra,Zi),e(St,ec),e(j,tc),g(Ut,j,null),e(j,oc),e(j,Ka),e(Ka,nc),e(j,ac),e(j,Ha),e(Ha,Qa),e(Qa,Va),e(Va,Ja),e(Ja,sc),e(j,rc),e(j,Xa),e(Xa,Ya),e(Ya,Za),e(Za,es),e(es,dc),e(j,lc),e(j,ts),e(ts,os),e(os,ns),e(ns,as),e(as,ic),e(j,cc),e(j,ss),e(ss,rs),e(rs,ds),e(ds,Wo),e(Wo,pc),e(Wo,ls),e(ls,mc),e(Wo,uc),e(j,hc),e(j,is),e(is,cs),e(cs,ps),e(ps,ms),e(ms,fc),p(s,jr,m),p(s,Bt,m),e(Bt,Wt),e(Wt,us),g(Ro,us,null),e(Bt,_c),e(Bt,hs),e(hs,gc),p(s,Or,m),p(s,N,m),g(Ko,N,null),e(N,bc),e(N,Ho),e(Ho,kc),e(Ho,An),e(An,vc),e(Ho,yc),e(N,Tc),e(N,Qo),e(Qo,wc),e(Qo,Vo),e(Vo,Sc),e(Qo,Bc),e(N,zc),e(N,fs),e(fs,xc),e(N,qc),e(N,We),e(We,_s),e(_s,Jo),e(Jo,Fc),e(We,Ec),e(We,gs),e(gs,Xo),e(Xo,$c),e(We,Mc),e(We,bs),e(bs,Yo),e(Yo,Cc),e(We,Pc),e(We,ks),e(ks,Zo),e(Zo,jc),e(N,Oc),e(N,Je),g(en,Je,null),e(Je,Lc),e(Je,vs),e(vs,Nc),e(Je,Ac),g(tn,Je,null),e(N,Ic),e(N,Xe),g(on,Xe,null),e(Xe,Dc),e(Xe,ys),e(ys,Gc),e(Xe,Uc),g(nn,Xe,null),e(N,Wc),e(N,Ye),g(an,Ye,null),e(Ye,Rc),e(Ye,Ts),e(Ts,Kc),e(Ye,Hc),g(sn,Ye,null),p(s,Lr,m),p(s,zt,m),e(zt,Rt),e(Rt,ws),g(rn,ws,null),e(zt,Qc),e(zt,Ss),e(Ss,Vc),p(s,Nr,m),p(s,A,m),g(dn,A,null),e(A,Jc),e(A,ln),e(ln,Xc),e(ln,In),e(In,Yc),e(ln,Zc),e(A,ep),e(A,cn),e(cn,tp),e(cn,pn),e(pn,op),e(cn,np),e(A,ap),e(A,Bs),e(Bs,sp),e(A,rp),e(A,Re),e(Re,zs),e(zs,mn),e(mn,dp),e(Re,lp),e(Re,xs),e(xs,un),e(un,ip),e(Re,cp),e(Re,qs),e(qs,hn),e(hn,pp),e(Re,mp),e(Re,Fs),e(Fs,fn),e(fn,up),e(A,hp),e(A,E),g(_n,E,null),e(E,fp),e(E,xt),e(xt,_p),e(xt,Es),e(Es,gp),e(xt,bp),e(xt,$s),e($s,kp),e(xt,vp),e(E,yp),g(Kt,E,null),e(E,Tp),e(E,Ms),e(Ms,wp),e(E,Sp),e(E,Cs),e(Cs,Ps),e(Ps,js),e(js,Os),e(Os,Bp),e(E,zp),e(E,Ls),e(Ls,Ns),e(Ns,As),e(As,Is),e(Is,xp),e(E,qp),e(E,Ds),e(Ds,Gs),e(Gs,Us),e(Us,Ws),e(Ws,Fp),e(E,Ep),e(E,Rs),e(Rs,Ks),e(Ks,gn),e(gn,Ht),e(Ht,Qt),e(Qt,Hs),g(bn,Hs,null),e(Ht,$p),e(Ht,Qs),e(Qs,Mp),e(gn,Cp),e(gn,Vs),e(Vs,Pp),e(E,jp),e(E,Js),e(Js,Op),e(E,Lp),e(E,Xs),e(Xs,Ys),e(Ys,Zs),e(Zs,er),e(er,Np),e(E,Ap),e(E,tr),e(tr,or),e(or,nr),e(nr,ar),e(ar,Ip),e(E,Dp),e(E,sr),e(sr,rr),e(rr,dr),e(dr,lr),e(lr,Gp),e(E,Up),e(E,ir),e(ir,cr),e(cr,pr),e(pr,mr),e(mr,Wp),e(A,Rp),e(A,Ze),g(kn,Ze,null),e(Ze,Kp),e(Ze,ur),e(ur,Hp),e(Ze,Qp),g(vn,Ze,null),e(A,Vp),e(A,et),g(yn,et,null),e(et,Jp),e(et,hr),e(hr,Xp),e(et,Yp),g(Tn,et,null),Ar=!0},p(s,[m]){const wn={};m&2&&(wn.$$scope={dirty:m,ctx:s}),Pt.$set(wn);const fr={};m&2&&(fr.$$scope={dirty:m,ctx:s}),Ot.$set(fr);const _r={};m&2&&(_r.$$scope={dirty:m,ctx:s}),At.$set(_r);const gr={};m&2&&(gr.$$scope={dirty:m,ctx:s}),It.$set(gr);const ve={};m&2&&(ve.$$scope={dirty:m,ctx:s}),Gt.$set(ve);const br={};m&2&&(br.$$scope={dirty:m,ctx:s}),Ut.$set(br);const kr={};m&2&&(kr.$$scope={dirty:m,ctx:s}),Kt.$set(kr)},i(s){Ar||(b(S.$$.fragment,s),b(re.$$.fragment,s),b(ze.$$.fragment,s),b(Zt.$$.fragment,s),b(to.$$.fragment,s),b(oo.$$.fragment,s),b(no.$$.fragment,s),b(so.$$.fragment,s),b(ro.$$.fragment,s),b(lo.$$.fragment,s),b(io.$$.fragment,s),b(co.$$.fragment,s),b(mo.$$.fragment,s),b(uo.$$.fragment,s),b(ho.$$.fragment,s),b(bo.$$.fragment,s),b(Pt.$$.fragment,s),b(ko.$$.fragment,s),b(vo.$$.fragment,s),b(yo.$$.fragment,s),b(Bo.$$.fragment,s),b(Ot.$$.fragment,s),b(xo.$$.fragment,s),b(Fo.$$.fragment,s),b(Eo.$$.fragment,s),b($o.$$.fragment,s),b(Mo.$$.fragment,s),b(At.$$.fragment,s),b(Oo.$$.fragment,s),b(It.$$.fragment,s),b(Lo.$$.fragment,s),b(No.$$.fragment,s),b(Ao.$$.fragment,s),b(Gt.$$.fragment,s),b(Uo.$$.fragment,s),b(Ut.$$.fragment,s),b(Ro.$$.fragment,s),b(Ko.$$.fragment,s),b(en.$$.fragment,s),b(tn.$$.fragment,s),b(on.$$.fragment,s),b(nn.$$.fragment,s),b(an.$$.fragment,s),b(sn.$$.fragment,s),b(rn.$$.fragment,s),b(dn.$$.fragment,s),b(_n.$$.fragment,s),b(Kt.$$.fragment,s),b(bn.$$.fragment,s),b(kn.$$.fragment,s),b(vn.$$.fragment,s),b(yn.$$.fragment,s),b(Tn.$$.fragment,s),Ar=!0)},o(s){k(S.$$.fragment,s),k(re.$$.fragment,s),k(ze.$$.fragment,s),k(Zt.$$.fragment,s),k(to.$$.fragment,s),k(oo.$$.fragment,s),k(no.$$.fragment,s),k(so.$$.fragment,s),k(ro.$$.fragment,s),k(lo.$$.fragment,s),k(io.$$.fragment,s),k(co.$$.fragment,s),k(mo.$$.fragment,s),k(uo.$$.fragment,s),k(ho.$$.fragment,s),k(bo.$$.fragment,s),k(Pt.$$.fragment,s),k(ko.$$.fragment,s),k(vo.$$.fragment,s),k(yo.$$.fragment,s),k(Bo.$$.fragment,s),k(Ot.$$.fragment,s),k(xo.$$.fragment,s),k(Fo.$$.fragment,s),k(Eo.$$.fragment,s),k($o.$$.fragment,s),k(Mo.$$.fragment,s),k(At.$$.fragment,s),k(Oo.$$.fragment,s),k(It.$$.fragment,s),k(Lo.$$.fragment,s),k(No.$$.fragment,s),k(Ao.$$.fragment,s),k(Gt.$$.fragment,s),k(Uo.$$.fragment,s),k(Ut.$$.fragment,s),k(Ro.$$.fragment,s),k(Ko.$$.fragment,s),k(en.$$.fragment,s),k(tn.$$.fragment,s),k(on.$$.fragment,s),k(nn.$$.fragment,s),k(an.$$.fragment,s),k(sn.$$.fragment,s),k(rn.$$.fragment,s),k(dn.$$.fragment,s),k(_n.$$.fragment,s),k(Kt.$$.fragment,s),k(bn.$$.fragment,s),k(kn.$$.fragment,s),k(vn.$$.fragment,s),k(yn.$$.fragment,s),k(Tn.$$.fragment,s),Ar=!1},d(s){t(u),s&&t(x),s&&t(y),v(S),s&&t(fe),s&&t(z),s&&t(Ee),s&&t(J),v(re),s&&t($e),s&&t(ee),s&&t(Me),s&&t(R),s&&t(h),s&&t(F),s&&t(Ke),s&&t(C),s&&t(te),s&&t(pe),v(ze),s&&t(vr),s&&t(me),v(Zt),v(to),s&&t(yr),s&&t(ut),v(oo),s&&t(Tr),s&&t(G),v(no),v(so),v(ro),v(lo),s&&t(wr),s&&t(ft),v(io),s&&t(Sr),s&&t(Ue),v(co),v(mo),s&&t(Br),s&&t(_t),v(uo),s&&t(zr),s&&t(xe),v(ho),v(bo),v(Pt),v(ko),s&&t(xr),s&&t(bt),v(vo),s&&t(qr),s&&t(qe),v(yo),v(Bo),v(Ot),s&&t(Fr),s&&t(vt),v(xo),s&&t(Er),s&&t(qo),v(Fo),v(Eo),s&&t($r),s&&t(yt),v($o),s&&t(Mr),s&&t(ue),v(Mo),v(At),v(Oo),v(It),v(Lo),s&&t(Cr),s&&t(wt),v(No),s&&t(Pr),s&&t(he),v(Ao),v(Gt),v(Uo),v(Ut),s&&t(jr),s&&t(Bt),v(Ro),s&&t(Or),s&&t(N),v(Ko),v(en),v(tn),v(on),v(nn),v(an),v(sn),s&&t(Lr),s&&t(zt),v(rn),s&&t(Nr),s&&t(A),v(dn),v(_n),v(Kt),v(bn),v(kn),v(vn),v(yn),v(Tn)}}}const wf={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function Sf(H,u,x){let{fw:y}=u;return H.$$set=T=>{"fw"in T&&x(0,y=T.fw)},[y]}class $f extends pf{constructor(u){super();mf(this,u,Sf,Tf,uf,{fw:0})}}export{$f as default,wf as metadata};
