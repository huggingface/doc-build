import{S as cm,i as pm,s as mm,e as n,k as l,w as f,t as r,L as hm,c as a,d as t,m as i,a as s,x as _,h as d,b as c,J as e,g as p,y as g,q as b,o as k,B as y}from"../../../chunks/vendor-e859c359.js";import{T as Tn}from"../../../chunks/Tip-edc75249.js";import{D as j}from"../../../chunks/Docstring-ade913b3.js";import{C as Fe}from"../../../chunks/CodeBlock-ce4317c2.js";import{I as je}from"../../../chunks/IconCopyLink-5fae3b20.js";import"../../../chunks/CopyButton-77addb3d.js";function um(R){let h,B,v,T,S;return{c(){h=n("p"),B=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=n("code"),T=r("Module"),S=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){h=a(x,"P",{});var w=s(h);B=d(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(w,"CODE",{});var F=s(v);T=d(F,"Module"),F.forEach(t),S=d(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,h,w),e(h,B),e(h,v),e(v,T),e(h,S)},d(x){x&&t(h)}}}function fm(R){let h,B,v,T,S;return{c(){h=n("p"),B=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=n("code"),T=r("Module"),S=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){h=a(x,"P",{});var w=s(h);B=d(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(w,"CODE",{});var F=s(v);T=d(F,"Module"),F.forEach(t),S=d(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,h,w),e(h,B),e(h,v),e(v,T),e(h,S)},d(x){x&&t(h)}}}function _m(R){let h,B,v,T,S,x,w,F,Ee,pe,z,Ce,O,Pe,Ne,D,Ie,Ae,U,H,Le,K,M,E,me,te,$e,V,I,ve,oe,C,Te,ne,Me,Y,ae,se,Oe,J,qe,G,De;return{c(){h=n("p"),B=r("TF 2.0 models accepts two formats as inputs:"),v=l(),T=n("ul"),S=n("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),F=n("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),pe=l(),z=n("p"),Ce=r("This second option is useful when using "),O=n("code"),Pe=r("tf.keras.Model.fit"),Ne=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),D=n("code"),Ie=r("model(inputs)"),Ae=r("."),U=l(),H=n("p"),Le=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),K=l(),M=n("ul"),E=n("li"),me=r("a single Tensor with "),te=n("code"),$e=r("input_ids"),V=r(" only and nothing else: "),I=n("code"),ve=r("model(input_ids)"),oe=l(),C=n("li"),Te=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ne=n("code"),Me=r("model([input_ids, attention_mask])"),Y=r(" or "),ae=n("code"),se=r("model([input_ids, attention_mask, token_type_ids])"),Oe=l(),J=n("li"),qe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){h=a(u,"P",{});var $=s(h);B=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=i(u),T=a(u,"UL",{});var re=s(T);S=a(re,"LI",{});var dt=s(S);x=d(dt,"having all inputs as keyword arguments (like PyTorch models), or"),dt.forEach(t),w=i(re),F=a(re,"LI",{});var Ue=s(F);Ee=d(Ue,"having all inputs as a list, tuple or dict in the first positional arguments."),Ue.forEach(t),re.forEach(t),pe=i(u),z=a(u,"P",{});var q=s(z);Ce=d(q,"This second option is useful when using "),O=a(q,"CODE",{});var lt=s(O);Pe=d(lt,"tf.keras.Model.fit"),lt.forEach(t),Ne=d(q,` method which currently requires having all
the tensors in the first argument of the model call function: `),D=a(q,"CODE",{});var we=s(D);Ie=d(we,"model(inputs)"),we.forEach(t),Ae=d(q,"."),q.forEach(t),U=i(u),H=a(u,"P",{});var it=s(H);Le=d(it,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),it.forEach(t),K=i(u),M=a(u,"UL",{});var X=s(M);E=a(X,"LI",{});var A=s(E);me=d(A,"a single Tensor with "),te=a(A,"CODE",{});var ct=s(te);$e=d(ct,"input_ids"),ct.forEach(t),V=d(A," only and nothing else: "),I=a(A,"CODE",{});var pt=s(I);ve=d(pt,"model(input_ids)"),pt.forEach(t),A.forEach(t),oe=i(X),C=a(X,"LI",{});var Z=s(C);Te=d(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ne=a(Z,"CODE",{});var de=s(ne);Me=d(de,"model([input_ids, attention_mask])"),de.forEach(t),Y=d(Z," or "),ae=a(Z,"CODE",{});var he=s(ae);se=d(he,"model([input_ids, attention_mask, token_type_ids])"),he.forEach(t),Z.forEach(t),Oe=i(X),J=a(X,"LI",{});var xe=s(J);qe=d(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a(xe,"CODE",{});var Se=s(G);De=d(Se,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Se.forEach(t),xe.forEach(t),X.forEach(t)},m(u,$){p(u,h,$),e(h,B),p(u,v,$),p(u,T,$),e(T,S),e(S,x),e(T,w),e(T,F),e(F,Ee),p(u,pe,$),p(u,z,$),e(z,Ce),e(z,O),e(O,Pe),e(z,Ne),e(z,D),e(D,Ie),e(z,Ae),p(u,U,$),p(u,H,$),e(H,Le),p(u,K,$),p(u,M,$),e(M,E),e(E,me),e(E,te),e(te,$e),e(E,V),e(E,I),e(I,ve),e(M,oe),e(M,C),e(C,Te),e(C,ne),e(ne,Me),e(C,Y),e(C,ae),e(ae,se),e(M,Oe),e(M,J),e(J,qe),e(J,G),e(G,De)},d(u){u&&t(h),u&&t(v),u&&t(T),u&&t(pe),u&&t(z),u&&t(U),u&&t(H),u&&t(K),u&&t(M)}}}function gm(R){let h,B,v,T,S;return{c(){h=n("p"),B=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=n("code"),T=r("Module"),S=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){h=a(x,"P",{});var w=s(h);B=d(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(w,"CODE",{});var F=s(v);T=d(F,"Module"),F.forEach(t),S=d(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,h,w),e(h,B),e(h,v),e(v,T),e(h,S)},d(x){x&&t(h)}}}function bm(R){let h,B,v,T,S,x,w,F,Ee,pe,z,Ce,O,Pe,Ne,D,Ie,Ae,U,H,Le,K,M,E,me,te,$e,V,I,ve,oe,C,Te,ne,Me,Y,ae,se,Oe,J,qe,G,De;return{c(){h=n("p"),B=r("TF 2.0 models accepts two formats as inputs:"),v=l(),T=n("ul"),S=n("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),w=l(),F=n("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),pe=l(),z=n("p"),Ce=r("This second option is useful when using "),O=n("code"),Pe=r("tf.keras.Model.fit"),Ne=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),D=n("code"),Ie=r("model(inputs)"),Ae=r("."),U=l(),H=n("p"),Le=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),K=l(),M=n("ul"),E=n("li"),me=r("a single Tensor with "),te=n("code"),$e=r("input_ids"),V=r(" only and nothing else: "),I=n("code"),ve=r("model(input_ids)"),oe=l(),C=n("li"),Te=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ne=n("code"),Me=r("model([input_ids, attention_mask])"),Y=r(" or "),ae=n("code"),se=r("model([input_ids, attention_mask, token_type_ids])"),Oe=l(),J=n("li"),qe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){h=a(u,"P",{});var $=s(h);B=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=i(u),T=a(u,"UL",{});var re=s(T);S=a(re,"LI",{});var dt=s(S);x=d(dt,"having all inputs as keyword arguments (like PyTorch models), or"),dt.forEach(t),w=i(re),F=a(re,"LI",{});var Ue=s(F);Ee=d(Ue,"having all inputs as a list, tuple or dict in the first positional arguments."),Ue.forEach(t),re.forEach(t),pe=i(u),z=a(u,"P",{});var q=s(z);Ce=d(q,"This second option is useful when using "),O=a(q,"CODE",{});var lt=s(O);Pe=d(lt,"tf.keras.Model.fit"),lt.forEach(t),Ne=d(q,` method which currently requires having all
the tensors in the first argument of the model call function: `),D=a(q,"CODE",{});var we=s(D);Ie=d(we,"model(inputs)"),we.forEach(t),Ae=d(q,"."),q.forEach(t),U=i(u),H=a(u,"P",{});var it=s(H);Le=d(it,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),it.forEach(t),K=i(u),M=a(u,"UL",{});var X=s(M);E=a(X,"LI",{});var A=s(E);me=d(A,"a single Tensor with "),te=a(A,"CODE",{});var ct=s(te);$e=d(ct,"input_ids"),ct.forEach(t),V=d(A," only and nothing else: "),I=a(A,"CODE",{});var pt=s(I);ve=d(pt,"model(input_ids)"),pt.forEach(t),A.forEach(t),oe=i(X),C=a(X,"LI",{});var Z=s(C);Te=d(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ne=a(Z,"CODE",{});var de=s(ne);Me=d(de,"model([input_ids, attention_mask])"),de.forEach(t),Y=d(Z," or "),ae=a(Z,"CODE",{});var he=s(ae);se=d(he,"model([input_ids, attention_mask, token_type_ids])"),he.forEach(t),Z.forEach(t),Oe=i(X),J=a(X,"LI",{});var xe=s(J);qe=d(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a(xe,"CODE",{});var Se=s(G);De=d(Se,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Se.forEach(t),xe.forEach(t),X.forEach(t)},m(u,$){p(u,h,$),e(h,B),p(u,v,$),p(u,T,$),e(T,S),e(S,x),e(T,w),e(T,F),e(F,Ee),p(u,pe,$),p(u,z,$),e(z,Ce),e(z,O),e(O,Pe),e(z,Ne),e(z,D),e(D,Ie),e(z,Ae),p(u,U,$),p(u,H,$),e(H,Le),p(u,K,$),p(u,M,$),e(M,E),e(E,me),e(E,te),e(te,$e),e(E,V),e(E,I),e(I,ve),e(M,oe),e(M,C),e(C,Te),e(C,ne),e(ne,Me),e(C,Y),e(C,ae),e(ae,se),e(M,Oe),e(M,J),e(J,qe),e(J,G),e(G,De)},d(u){u&&t(h),u&&t(v),u&&t(T),u&&t(pe),u&&t(z),u&&t(U),u&&t(H),u&&t(K),u&&t(M)}}}function km(R){let h,B,v,T,S;return{c(){h=n("p"),B=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=n("code"),T=r("Module"),S=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){h=a(x,"P",{});var w=s(h);B=d(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(w,"CODE",{});var F=s(v);T=d(F,"Module"),F.forEach(t),S=d(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,h,w),e(h,B),e(h,v),e(v,T),e(h,S)},d(x){x&&t(h)}}}function ym(R){let h,B,v,T,S;return{c(){h=n("p"),B=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=n("code"),T=r("Module"),S=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(x){h=a(x,"P",{});var w=s(h);B=d(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(w,"CODE",{});var F=s(v);T=d(F,"Module"),F.forEach(t),S=d(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,h,w),e(h,B),e(h,v),e(v,T),e(h,S)},d(x){x&&t(h)}}}function vm(R){let h,B,v,T,S,x,w,F,Ee,pe,z,Ce,O,Pe,Ne,D,Ie,Ae,U,H,Le,K,M,E,me,te,$e,V,I,ve,oe,C,Te,ne,Me,Y,ae,se,Oe,J,qe,G,De,u,$,re,dt,Ue,q,lt,we,it,X,A,ct,pt,Z,de,he,xe,Se,sr,na,rr,ps,le,Yt,dr,mt,lr,wn,ir,cr,Zt,pr,mr,hr,ht,ur,xn,fr,_r,Sn,gr,br,kr,aa,yr,vr,Qt,ms,ut,$t,sa,eo,Tr,ra,wr,hs,L,to,xr,da,Sr,zr,oo,Br,zn,Fr,$r,Mr,He,no,qr,la,jr,Er,ia,Cr,Pr,Mt,ao,Nr,ft,Ir,ca,Ar,Lr,pa,Or,Dr,Gr,Ve,so,Wr,Bn,Rr,Fn,Ur,Hr,ma,Vr,Jr,ha,us,_t,qt,ua,ro,Xr,fa,Kr,fs,Ge,lo,Yr,io,Zr,_a,Qr,ed,td,jt,co,od,ga,nd,_s,gt,Et,ba,po,ad,ka,sd,gs,ze,mo,rd,ho,dd,$n,ld,id,cd,uo,pd,fo,md,hd,ud,ue,_o,fd,bt,_d,Mn,gd,bd,ya,kd,yd,vd,Ct,Td,va,wd,xd,go,bs,kt,Pt,Ta,bo,Sd,wa,zd,ks,Be,ko,Bd,yo,Fd,qn,$d,Md,qd,vo,jd,To,Ed,Cd,Pd,fe,wo,Nd,yt,Id,jn,Ad,Ld,xa,Od,Dd,Gd,Nt,Wd,Sa,Rd,Ud,xo,ys,vt,It,za,So,Hd,Ba,Vd,vs,zo,Je,Bo,Jd,Fa,Xd,Kd,Fo,Ts,Tt,At,$a,$o,Yd,Ma,Zd,ws,ie,Mo,Qd,qo,el,En,tl,ol,nl,jo,al,Eo,sl,rl,dl,Lt,ll,_e,Co,il,wt,cl,Cn,pl,ml,qa,hl,ul,fl,Ot,_l,ja,gl,bl,Po,xs,xt,Dt,Ea,No,kl,Ca,yl,Ss,ce,Io,vl,Ao,Tl,Pn,wl,xl,Sl,Lo,zl,Oo,Bl,Fl,$l,Gt,Ml,ge,Do,ql,St,jl,Nn,El,Cl,Pa,Pl,Nl,Il,Wt,Al,Na,Ll,Ol,Go,zs,zt,Rt,Ia,Wo,Dl,Aa,Gl,Bs,P,Ro,Wl,Uo,Rl,In,Ul,Hl,Vl,Ho,Jl,Vo,Xl,Kl,Yl,La,Zl,Ql,We,Oa,Jo,ei,ti,Da,Xo,oi,ni,Ga,Ko,ai,si,Wa,Yo,ri,di,Xe,Zo,li,Ra,ii,ci,Qo,pi,Ke,en,mi,Ua,hi,ui,tn,fi,Ye,on,_i,Ha,gi,bi,nn,Fs,Bt,Ut,Va,an,ki,Ja,yi,$s,N,sn,vi,rn,Ti,An,wi,xi,Si,dn,zi,ln,Bi,Fi,$i,Xa,Mi,qi,Re,Ka,cn,ji,Ei,Ya,pn,Ci,Pi,Za,mn,Ni,Ii,Qa,hn,Ai,Li,W,un,Oi,Ft,Di,es,Gi,Wi,ts,Ri,Ui,Hi,Ht,Vi,os,Ji,Xi,fn,Ki,ns,Yi,Zi,_n,Qi,Ze,gn,ec,as,tc,oc,bn,nc,Qe,kn,ac,ss,sc,rc,yn,Ms;return x=new je({}),oe=new je({}),Se=new je({}),Yt=new j({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or
<a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The standard deviation of the truncated<em>normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder<em>layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.BlenderbotSmallConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotSmallConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Qt=new Fe({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),eo=new je({}),to=new j({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L67",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}]}}),no=new j({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils_base.py#L2826",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ao=new j({props:{name:"get_special_tokens_mask",anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils.py#L828",parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.PreTrainedTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),so=new j({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils_base.py#L2806",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ro=new je({}),lo=new j({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L50",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}]}}),co=new j({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L96",parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),po=new je({}),mo=new j({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1076",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_o=new j({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1103",parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ct=new Tn({props:{$$slots:{default:[um]},$$scope:{ctx:R}}}),go=new Fe({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),bo=new je({}),ko=new j({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1199",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wo=new j({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1243",parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nt=new Tn({props:{$$slots:{default:[fm]},$$scope:{ctx:R}}}),xo=new Fe({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration
mname = 'facebook/blenderbot_small-90M'
model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
print("Human: ", UTTERANCE)
inputs = tokenizer([UTTERANCE], return_tensors='pt')
inputs.pop("token_type_ids")
reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])

REPLY = "I'm not sure"
print("Human: ", REPLY)
NEXT_UTTERANCE = (
"My friends are cool but they eat too many carbs.</s> "
"<s>what kind of carbs do they eat? i don't know much about carbs.</s> "
"<s>I'm not sure."
)
inputs = tokenizer([NEXT_UTTERANCE], return_tensors='pt')
inputs.pop("token_type_ids")
next_reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs.pop(<span class="hljs-string">&quot;token_type_ids&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])
what kind of carbs do they eat? i don<span class="hljs-string">&#x27;t know much about carbs.

&gt;&gt;&gt; REPLY = &quot;I&#x27;</span>m <span class="hljs-keyword">not</span> sure<span class="hljs-string">&quot;
&gt;&gt;&gt; print(&quot;</span>Human: <span class="hljs-string">&quot;, REPLY)
&gt;&gt;&gt; NEXT_UTTERANCE = (
... &quot;</span>My friends are cool but they eat too many carbs.&lt;/s&gt; <span class="hljs-string">&quot;
... &quot;</span>&lt;s&gt;what kind of carbs do they eat? i don<span class="hljs-string">&#x27;t know much about carbs.&lt;/s&gt; &quot;
... &quot;&lt;s&gt;I&#x27;</span>m <span class="hljs-keyword">not</span> sure.<span class="hljs-string">&quot;
... )
&gt;&gt;&gt; inputs = tokenizer([NEXT_UTTERANCE], return_tensors=&#x27;pt&#x27;)
&gt;&gt;&gt; inputs.pop(&quot;</span>token_type_ids<span class="hljs-string">&quot;)
&gt;&gt;&gt; next_reply_ids = model.generate(**inputs)
&gt;&gt;&gt; print(&quot;</span>Bot: <span class="hljs-string">&quot;, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])</span>`}}),So=new je({}),Bo=new j({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1407",parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fo=new Fe({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/bart-large')
model = BlenderbotSmallForCausalLM.from_pretrained('facebook/bart-large', add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForCausalLM.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),$o=new je({}),Mo=new j({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1183",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Lt=new Tn({props:{$$slots:{default:[_m]},$$scope:{ctx:R}}}),Co=new j({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1195",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>TFSeq2SeqModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ot=new Tn({props:{$$slots:{default:[gm]},$$scope:{ctx:R}}}),Po=new Fe({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),No=new je({}),Io=new j({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1290",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Gt=new Tn({props:{$$slots:{default:[bm]},$$scope:{ctx:R}}}),Do=new j({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1323",parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>TFSeq2SeqLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wt=new Tn({props:{$$slots:{default:[km]},$$scope:{ctx:R}}}),Go=new Fe({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration
mname = 'facebook/blenderbot_small-90M'
model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
tokenizer = TFBlenderbotSmallTokenizer.from_pretrained(mname)

UTTERANCE = "My friends are cool but they eat too many carbs."
print("Human: ", UTTERANCE)
inputs = tokenizer([UTTERANCE], return_tensors='tf')
inputs.pop("token_type_ids")

reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])

REPLY = "I'm not sure"
print("Human: ", REPLY)
NEXT_UTTERANCE = (
"My friends are cool but they eat too many carbs.</s> "
"<s>what kind of carbs do they eat? i don't know much about carbs.</s> "
"<s>I'm not sure."
)

inputs = tokenizer([NEXT_UTTERANCE], return_tensors='tf')
inputs.pop("token_type_ids")
next_reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TFBlenderbotSmallTokenizer.from_pretrained(mname)

<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs.pop(<span class="hljs-string">&quot;token_type_ids&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])
what kind of carbs do they eat? i don<span class="hljs-string">&#x27;t know much about carbs.

&gt;&gt;&gt; REPLY = &quot;I&#x27;</span>m <span class="hljs-keyword">not</span> sure<span class="hljs-string">&quot;
&gt;&gt;&gt; print(&quot;</span>Human: <span class="hljs-string">&quot;, REPLY)
&gt;&gt;&gt; NEXT_UTTERANCE = (
... &quot;</span>My friends are cool but they eat too many carbs.&lt;/s&gt; <span class="hljs-string">&quot;
... &quot;</span>&lt;s&gt;what kind of carbs do they eat? i don<span class="hljs-string">&#x27;t know much about carbs.&lt;/s&gt; &quot;
... &quot;&lt;s&gt;I&#x27;</span>m <span class="hljs-keyword">not</span> sure.<span class="hljs-string">&quot;
... )

&gt;&gt;&gt; inputs = tokenizer([NEXT_UTTERANCE], return_tensors=&#x27;tf&#x27;)
&gt;&gt;&gt; inputs.pop(&quot;</span>token_type_ids<span class="hljs-string">&quot;)
&gt;&gt;&gt; next_reply_ids = model.generate(**inputs)
&gt;&gt;&gt; print(&quot;</span>Bot: <span class="hljs-string">&quot;, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])</span>`}}),Wo=new je({}),Ro=new j({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1221",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Zo=new j({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1157",returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qo=new Fe({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/blenderbot_small-90M')
model = FlaxBlenderbotSmallModel.from_pretrained('facebook/blenderbot_small-90M')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),en=new j({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L981",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
`}}),tn=new Fe({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained('facebook/blenderbot_small-90M')
tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/blenderbot_small-90M')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='np')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),on=new j({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1043",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
`}}),nn=new Fe({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),an=new je({}),sn=new j({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1309",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),un=new j({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1157",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ht=new Tn({props:{$$slots:{default:[ym]},$$scope:{ctx:R}}}),fn=new Fe({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained('facebook/blenderbot_small-90M')
tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/blenderbot_small-90M')

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors='np')

# Generate Summary
summary_ids = model.generate(inputs['input_ids']).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),_n=new Fe({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration
tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/blenderbot_small-90M')
TXT = "My friends are <mask> but they eat too many carbs."

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained('facebook/blenderbot_small-90M')
input_ids = tokenizer([TXT], return_tensors='np')['input_ids']
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs)

tokenizer.decode(predictions).split(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits[<span class="hljs-number">0</span>, masked_index], axis=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = jax.lax.top_k(probs)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),gn=new j({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L981",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
`}}),bn=new Fe({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained('facebook/blenderbot_small-90M')
tokenizer = BlenderbotSmallTokenizer.from_pretrained('facebook/blenderbot_small-90M')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='np')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot_small-90M&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),kn=new j({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1313",parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
`}}),yn=new Fe({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=n("meta"),B=l(),v=n("h1"),T=n("a"),S=n("span"),f(x.$$.fragment),w=l(),F=n("span"),Ee=r("Blenderbot Small"),pe=l(),z=n("p"),Ce=r("Note that "),O=n("a"),Pe=r("BlenderbotSmallModel"),Ne=r(` and
`),D=n("a"),Ie=r("BlenderbotSmallForConditionalGeneration"),Ae=r(` are only used in combination with the checkpoint
`),U=n("a"),H=r("facebook/blenderbot-90M"),Le=r(`. Larger Blenderbot checkpoints should
instead be used with `),K=n("a"),M=r("BlenderbotModel"),E=r(` and
`),me=n("a"),te=r("BlenderbotForConditionalGeneration"),$e=l(),V=n("h2"),I=n("a"),ve=n("span"),f(oe.$$.fragment),C=l(),Te=n("span"),ne=r("Overview"),Me=l(),Y=n("p"),ae=r("The Blender chatbot model was proposed in "),se=n("a"),Oe=r("Recipes for building an open-domain chatbot"),J=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),qe=l(),G=n("p"),De=r("The abstract of the paper is the following:"),u=l(),$=n("p"),re=n("em"),dt=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ue=l(),q=n("p"),lt=r("This model was contributed by "),we=n("a"),it=r("patrickvonplaten"),X=r(`. The authors\u2019 code can be
found `),A=n("a"),ct=r("here"),pt=r(" ."),Z=l(),de=n("h2"),he=n("a"),xe=n("span"),f(Se.$$.fragment),sr=l(),na=n("span"),rr=r("BlenderbotSmallConfig"),ps=l(),le=n("div"),f(Yt.$$.fragment),dr=l(),mt=n("p"),lr=r("This is the configuration class to store the configuration of a "),wn=n("a"),ir=r("BlenderbotSmallModel"),cr=r(`. It is
used to instantiate an BlenderbotSmall model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),Zt=n("a"),pr=r("facebook/blenderbot_small-90M"),mr=r(" architecture."),hr=l(),ht=n("p"),ur=r("Configuration objects inherit from "),xn=n("a"),fr=r("PretrainedConfig"),_r=r(` and can be used to control the model
outputs. Read the documentation from `),Sn=n("a"),gr=r("PretrainedConfig"),br=r(" for more information."),kr=l(),aa=n("p"),yr=r("Example:"),vr=l(),f(Qt.$$.fragment),ms=l(),ut=n("h2"),$t=n("a"),sa=n("span"),f(eo.$$.fragment),Tr=l(),ra=n("span"),wr=r("BlenderbotSmallTokenizer"),hs=l(),L=n("div"),f(to.$$.fragment),xr=l(),da=n("p"),Sr=r("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),zr=l(),oo=n("p"),Br=r("This tokenizer inherits from "),zn=n("a"),Fr=r("PreTrainedTokenizer"),$r=r(` which contains most of the main methods.
Users should refer to the superclass for more information regarding methods.`),Mr=l(),He=n("div"),f(no.$$.fragment),qr=l(),la=n("p"),jr=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Er=l(),ia=n("p"),Cr=r("This implementation does not add special tokens and this method should be overridden in a subclass."),Pr=l(),Mt=n("div"),f(ao.$$.fragment),Nr=l(),ft=n("p"),Ir=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ca=n("code"),Ar=r("prepare_for_model"),Lr=r(" or "),pa=n("code"),Or=r("encode_plus"),Dr=r(" methods."),Gr=l(),Ve=n("div"),f(so.$$.fragment),Wr=l(),Bn=n("p"),Rr=r("Create the token type IDs corresponding to the sequences passed. "),Fn=n("a"),Ur=r("What are token type IDs?"),Hr=l(),ma=n("p"),Vr=r("Should be overridden in a subclass if the model has a special way of building those."),Jr=l(),ha=n("div"),us=l(),_t=n("h2"),qt=n("a"),ua=n("span"),f(ro.$$.fragment),Xr=l(),fa=n("span"),Kr=r("BlenderbotSmallTokenizerFast"),fs=l(),Ge=n("div"),f(lo.$$.fragment),Yr=l(),io=n("p"),Zr=r("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),_a=n("em"),Qr=r("tokenizers"),ed=r(" library)."),td=l(),jt=n("div"),f(co.$$.fragment),od=l(),ga=n("p"),nd=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),_s=l(),gt=n("h2"),Et=n("a"),ba=n("span"),f(po.$$.fragment),ad=l(),ka=n("span"),sd=r("BlenderbotSmallModel"),gs=l(),ze=n("div"),f(mo.$$.fragment),rd=l(),ho=n("p"),dd=r(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$n=n("a"),ld=r("PreTrainedModel"),id=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),cd=l(),uo=n("p"),pd=r("This model is also a PyTorch "),fo=n("a"),md=r("torch.nn.Module"),hd=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ud=l(),ue=n("div"),f(_o.$$.fragment),fd=l(),bt=n("p"),_d=r("The "),Mn=n("a"),gd=r("BlenderbotSmallModel"),bd=r(" forward method, overrides the "),ya=n("code"),kd=r("__call__"),yd=r(" special method."),vd=l(),f(Ct.$$.fragment),Td=l(),va=n("p"),wd=r("Example:"),xd=l(),f(go.$$.fragment),bs=l(),kt=n("h2"),Pt=n("a"),Ta=n("span"),f(bo.$$.fragment),Sd=l(),wa=n("span"),zd=r("BlenderbotSmallForConditionalGeneration"),ks=l(),Be=n("div"),f(ko.$$.fragment),Bd=l(),yo=n("p"),Fd=r(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),qn=n("a"),$d=r("PreTrainedModel"),Md=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),qd=l(),vo=n("p"),jd=r("This model is also a PyTorch "),To=n("a"),Ed=r("torch.nn.Module"),Cd=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Pd=l(),fe=n("div"),f(wo.$$.fragment),Nd=l(),yt=n("p"),Id=r("The "),jn=n("a"),Ad=r("BlenderbotSmallForConditionalGeneration"),Ld=r(" forward method, overrides the "),xa=n("code"),Od=r("__call__"),Dd=r(" special method."),Gd=l(),f(Nt.$$.fragment),Wd=l(),Sa=n("p"),Rd=r("Conversation example:"),Ud=l(),f(xo.$$.fragment),ys=l(),vt=n("h2"),It=n("a"),za=n("span"),f(So.$$.fragment),Hd=l(),Ba=n("span"),Vd=r("BlenderbotSmallForCausalLM"),vs=l(),zo=n("div"),Je=n("div"),f(Bo.$$.fragment),Jd=l(),Fa=n("p"),Xd=r("Example:"),Kd=l(),f(Fo.$$.fragment),Ts=l(),Tt=n("h2"),At=n("a"),$a=n("span"),f($o.$$.fragment),Yd=l(),Ma=n("span"),Zd=r("TFBlenderbotSmallModel"),ws=l(),ie=n("div"),f(Mo.$$.fragment),Qd=l(),qo=n("p"),el=r(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),En=n("a"),tl=r("TFPreTrainedModel"),ol=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),nl=l(),jo=n("p"),al=r("This model is also a "),Eo=n("a"),sl=r("tf.keras.Model"),rl=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),dl=l(),f(Lt.$$.fragment),ll=l(),_e=n("div"),f(Co.$$.fragment),il=l(),wt=n("p"),cl=r("The "),Cn=n("a"),pl=r("TFBlenderbotSmallModel"),ml=r(" forward method, overrides the "),qa=n("code"),hl=r("__call__"),ul=r(" special method."),fl=l(),f(Ot.$$.fragment),_l=l(),ja=n("p"),gl=r("Example:"),bl=l(),f(Po.$$.fragment),xs=l(),xt=n("h2"),Dt=n("a"),Ea=n("span"),f(No.$$.fragment),kl=l(),Ca=n("span"),yl=r("TFBlenderbotSmallForConditionalGeneration"),Ss=l(),ce=n("div"),f(Io.$$.fragment),vl=l(),Ao=n("p"),Tl=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pn=n("a"),wl=r("TFPreTrainedModel"),xl=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Sl=l(),Lo=n("p"),zl=r("This model is also a "),Oo=n("a"),Bl=r("tf.keras.Model"),Fl=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),$l=l(),f(Gt.$$.fragment),Ml=l(),ge=n("div"),f(Do.$$.fragment),ql=l(),St=n("p"),jl=r("The "),Nn=n("a"),El=r("TFBlenderbotSmallForConditionalGeneration"),Cl=r(" forward method, overrides the "),Pa=n("code"),Pl=r("__call__"),Nl=r(" special method."),Il=l(),f(Wt.$$.fragment),Al=l(),Na=n("p"),Ll=r("Conversation example:"),Ol=l(),f(Go.$$.fragment),zs=l(),zt=n("h2"),Rt=n("a"),Ia=n("span"),f(Wo.$$.fragment),Dl=l(),Aa=n("span"),Gl=r("FlaxBlenderbotSmallModel"),Bs=l(),P=n("div"),f(Ro.$$.fragment),Wl=l(),Uo=n("p"),Rl=r(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),In=n("a"),Ul=r("FlaxPreTrainedModel"),Hl=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Vl=l(),Ho=n("p"),Jl=r("This model is also a Flax Linen "),Vo=n("a"),Xl=r("flax.nn.Module"),Kl=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Yl=l(),La=n("p"),Zl=r("Finally, this model supports inherent JAX features such as:"),Ql=l(),We=n("ul"),Oa=n("li"),Jo=n("a"),ei=r("Just-In-Time (JIT) compilation"),ti=l(),Da=n("li"),Xo=n("a"),oi=r("Automatic Differentiation"),ni=l(),Ga=n("li"),Ko=n("a"),ai=r("Vectorization"),si=l(),Wa=n("li"),Yo=n("a"),ri=r("Parallelization"),di=l(),Xe=n("div"),f(Zo.$$.fragment),li=l(),Ra=n("p"),ii=r("Example:"),ci=l(),f(Qo.$$.fragment),pi=l(),Ke=n("div"),f(en.$$.fragment),mi=l(),Ua=n("p"),hi=r("Example:"),ui=l(),f(tn.$$.fragment),fi=l(),Ye=n("div"),f(on.$$.fragment),_i=l(),Ha=n("p"),gi=r("Example:"),bi=l(),f(nn.$$.fragment),Fs=l(),Bt=n("h2"),Ut=n("a"),Va=n("span"),f(an.$$.fragment),ki=l(),Ja=n("span"),yi=r("FlaxBlenderbotForConditionalGeneration"),$s=l(),N=n("div"),f(sn.$$.fragment),vi=l(),rn=n("p"),Ti=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=n("a"),wi=r("FlaxPreTrainedModel"),xi=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Si=l(),dn=n("p"),zi=r("This model is also a Flax Linen "),ln=n("a"),Bi=r("flax.nn.Module"),Fi=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$i=l(),Xa=n("p"),Mi=r("Finally, this model supports inherent JAX features such as:"),qi=l(),Re=n("ul"),Ka=n("li"),cn=n("a"),ji=r("Just-In-Time (JIT) compilation"),Ei=l(),Ya=n("li"),pn=n("a"),Ci=r("Automatic Differentiation"),Pi=l(),Za=n("li"),mn=n("a"),Ni=r("Vectorization"),Ii=l(),Qa=n("li"),hn=n("a"),Ai=r("Parallelization"),Li=l(),W=n("div"),f(un.$$.fragment),Oi=l(),Ft=n("p"),Di=r("The "),es=n("code"),Gi=r("FlaxBlenderbotSmallPreTrainedModel"),Wi=r(" forward method, overrides the "),ts=n("code"),Ri=r("__call__"),Ui=r(" special method."),Hi=l(),f(Ht.$$.fragment),Vi=l(),os=n("p"),Ji=r("Summarization example:"),Xi=l(),f(fn.$$.fragment),Ki=l(),ns=n("p"),Yi=r("Mask filling example:"),Zi=l(),f(_n.$$.fragment),Qi=l(),Ze=n("div"),f(gn.$$.fragment),ec=l(),as=n("p"),tc=r("Example:"),oc=l(),f(bn.$$.fragment),nc=l(),Qe=n("div"),f(kn.$$.fragment),ac=l(),ss=n("p"),sc=r("Example:"),rc=l(),f(yn.$$.fragment),this.h()},l(o){const m=hm('[data-svelte="svelte-1phssyn"]',document.head);h=a(m,"META",{name:!0,content:!0}),m.forEach(t),B=i(o),v=a(o,"H1",{class:!0});var vn=s(v);T=a(vn,"A",{id:!0,class:!0,href:!0});var rs=s(T);S=a(rs,"SPAN",{});var ds=s(S);_(x.$$.fragment,ds),ds.forEach(t),rs.forEach(t),w=i(vn),F=a(vn,"SPAN",{});var ls=s(F);Ee=d(ls,"Blenderbot Small"),ls.forEach(t),vn.forEach(t),pe=i(o),z=a(o,"P",{});var be=s(z);Ce=d(be,"Note that "),O=a(be,"A",{href:!0});var is=s(O);Pe=d(is,"BlenderbotSmallModel"),is.forEach(t),Ne=d(be,` and
`),D=a(be,"A",{href:!0});var cs=s(D);Ie=d(cs,"BlenderbotSmallForConditionalGeneration"),cs.forEach(t),Ae=d(be,` are only used in combination with the checkpoint
`),U=a(be,"A",{href:!0,rel:!0});var lc=s(U);H=d(lc,"facebook/blenderbot-90M"),lc.forEach(t),Le=d(be,`. Larger Blenderbot checkpoints should
instead be used with `),K=a(be,"A",{href:!0});var ic=s(K);M=d(ic,"BlenderbotModel"),ic.forEach(t),E=d(be,` and
`),me=a(be,"A",{href:!0});var cc=s(me);te=d(cc,"BlenderbotForConditionalGeneration"),cc.forEach(t),be.forEach(t),$e=i(o),V=a(o,"H2",{class:!0});var qs=s(V);I=a(qs,"A",{id:!0,class:!0,href:!0});var pc=s(I);ve=a(pc,"SPAN",{});var mc=s(ve);_(oe.$$.fragment,mc),mc.forEach(t),pc.forEach(t),C=i(qs),Te=a(qs,"SPAN",{});var hc=s(Te);ne=d(hc,"Overview"),hc.forEach(t),qs.forEach(t),Me=i(o),Y=a(o,"P",{});var js=s(Y);ae=d(js,"The Blender chatbot model was proposed in "),se=a(js,"A",{href:!0,rel:!0});var uc=s(se);Oe=d(uc,"Recipes for building an open-domain chatbot"),uc.forEach(t),J=d(js,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),js.forEach(t),qe=i(o),G=a(o,"P",{});var fc=s(G);De=d(fc,"The abstract of the paper is the following:"),fc.forEach(t),u=i(o),$=a(o,"P",{});var _c=s($);re=a(_c,"EM",{});var gc=s(re);dt=d(gc,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),gc.forEach(t),_c.forEach(t),Ue=i(o),q=a(o,"P",{});var Ln=s(q);lt=d(Ln,"This model was contributed by "),we=a(Ln,"A",{href:!0,rel:!0});var bc=s(we);it=d(bc,"patrickvonplaten"),bc.forEach(t),X=d(Ln,`. The authors\u2019 code can be
found `),A=a(Ln,"A",{href:!0,rel:!0});var kc=s(A);ct=d(kc,"here"),kc.forEach(t),pt=d(Ln," ."),Ln.forEach(t),Z=i(o),de=a(o,"H2",{class:!0});var Es=s(de);he=a(Es,"A",{id:!0,class:!0,href:!0});var yc=s(he);xe=a(yc,"SPAN",{});var vc=s(xe);_(Se.$$.fragment,vc),vc.forEach(t),yc.forEach(t),sr=i(Es),na=a(Es,"SPAN",{});var Tc=s(na);rr=d(Tc,"BlenderbotSmallConfig"),Tc.forEach(t),Es.forEach(t),ps=i(o),le=a(o,"DIV",{class:!0});var et=s(le);_(Yt.$$.fragment,et),dr=i(et),mt=a(et,"P",{});var On=s(mt);lr=d(On,"This is the configuration class to store the configuration of a "),wn=a(On,"A",{href:!0});var wc=s(wn);ir=d(wc,"BlenderbotSmallModel"),wc.forEach(t),cr=d(On,`. It is
used to instantiate an BlenderbotSmall model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),Zt=a(On,"A",{href:!0,rel:!0});var xc=s(Zt);pr=d(xc,"facebook/blenderbot_small-90M"),xc.forEach(t),mr=d(On," architecture."),On.forEach(t),hr=i(et),ht=a(et,"P",{});var Dn=s(ht);ur=d(Dn,"Configuration objects inherit from "),xn=a(Dn,"A",{href:!0});var Sc=s(xn);fr=d(Sc,"PretrainedConfig"),Sc.forEach(t),_r=d(Dn,` and can be used to control the model
outputs. Read the documentation from `),Sn=a(Dn,"A",{href:!0});var zc=s(Sn);gr=d(zc,"PretrainedConfig"),zc.forEach(t),br=d(Dn," for more information."),Dn.forEach(t),kr=i(et),aa=a(et,"P",{});var Bc=s(aa);yr=d(Bc,"Example:"),Bc.forEach(t),vr=i(et),_(Qt.$$.fragment,et),et.forEach(t),ms=i(o),ut=a(o,"H2",{class:!0});var Cs=s(ut);$t=a(Cs,"A",{id:!0,class:!0,href:!0});var Fc=s($t);sa=a(Fc,"SPAN",{});var $c=s(sa);_(eo.$$.fragment,$c),$c.forEach(t),Fc.forEach(t),Tr=i(Cs),ra=a(Cs,"SPAN",{});var Mc=s(ra);wr=d(Mc,"BlenderbotSmallTokenizer"),Mc.forEach(t),Cs.forEach(t),hs=i(o),L=a(o,"DIV",{class:!0});var ke=s(L);_(to.$$.fragment,ke),xr=i(ke),da=a(ke,"P",{});var qc=s(da);Sr=d(qc,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),qc.forEach(t),zr=i(ke),oo=a(ke,"P",{});var Ps=s(oo);Br=d(Ps,"This tokenizer inherits from "),zn=a(Ps,"A",{href:!0});var jc=s(zn);Fr=d(jc,"PreTrainedTokenizer"),jc.forEach(t),$r=d(Ps,` which contains most of the main methods.
Users should refer to the superclass for more information regarding methods.`),Ps.forEach(t),Mr=i(ke),He=a(ke,"DIV",{class:!0});var Gn=s(He);_(no.$$.fragment,Gn),qr=i(Gn),la=a(Gn,"P",{});var Ec=s(la);jr=d(Ec,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Ec.forEach(t),Er=i(Gn),ia=a(Gn,"P",{});var Cc=s(ia);Cr=d(Cc,"This implementation does not add special tokens and this method should be overridden in a subclass."),Cc.forEach(t),Gn.forEach(t),Pr=i(ke),Mt=a(ke,"DIV",{class:!0});var Ns=s(Mt);_(ao.$$.fragment,Ns),Nr=i(Ns),ft=a(Ns,"P",{});var Wn=s(ft);Ir=d(Wn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ca=a(Wn,"CODE",{});var Pc=s(ca);Ar=d(Pc,"prepare_for_model"),Pc.forEach(t),Lr=d(Wn," or "),pa=a(Wn,"CODE",{});var Nc=s(pa);Or=d(Nc,"encode_plus"),Nc.forEach(t),Dr=d(Wn," methods."),Wn.forEach(t),Ns.forEach(t),Gr=i(ke),Ve=a(ke,"DIV",{class:!0});var Rn=s(Ve);_(so.$$.fragment,Rn),Wr=i(Rn),Bn=a(Rn,"P",{});var dc=s(Bn);Rr=d(dc,"Create the token type IDs corresponding to the sequences passed. "),Fn=a(dc,"A",{href:!0});var Ic=s(Fn);Ur=d(Ic,"What are token type IDs?"),Ic.forEach(t),dc.forEach(t),Hr=i(Rn),ma=a(Rn,"P",{});var Ac=s(ma);Vr=d(Ac,"Should be overridden in a subclass if the model has a special way of building those."),Ac.forEach(t),Rn.forEach(t),Jr=i(ke),ha=a(ke,"DIV",{class:!0}),s(ha).forEach(t),ke.forEach(t),us=i(o),_t=a(o,"H2",{class:!0});var Is=s(_t);qt=a(Is,"A",{id:!0,class:!0,href:!0});var Lc=s(qt);ua=a(Lc,"SPAN",{});var Oc=s(ua);_(ro.$$.fragment,Oc),Oc.forEach(t),Lc.forEach(t),Xr=i(Is),fa=a(Is,"SPAN",{});var Dc=s(fa);Kr=d(Dc,"BlenderbotSmallTokenizerFast"),Dc.forEach(t),Is.forEach(t),fs=i(o),Ge=a(o,"DIV",{class:!0});var Un=s(Ge);_(lo.$$.fragment,Un),Yr=i(Un),io=a(Un,"P",{});var As=s(io);Zr=d(As,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),_a=a(As,"EM",{});var Gc=s(_a);Qr=d(Gc,"tokenizers"),Gc.forEach(t),ed=d(As," library)."),As.forEach(t),td=i(Un),jt=a(Un,"DIV",{class:!0});var Ls=s(jt);_(co.$$.fragment,Ls),od=i(Ls),ga=a(Ls,"P",{});var Wc=s(ga);nd=d(Wc,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Wc.forEach(t),Ls.forEach(t),Un.forEach(t),_s=i(o),gt=a(o,"H2",{class:!0});var Os=s(gt);Et=a(Os,"A",{id:!0,class:!0,href:!0});var Rc=s(Et);ba=a(Rc,"SPAN",{});var Uc=s(ba);_(po.$$.fragment,Uc),Uc.forEach(t),Rc.forEach(t),ad=i(Os),ka=a(Os,"SPAN",{});var Hc=s(ka);sd=d(Hc,"BlenderbotSmallModel"),Hc.forEach(t),Os.forEach(t),gs=i(o),ze=a(o,"DIV",{class:!0});var Vt=s(ze);_(mo.$$.fragment,Vt),rd=i(Vt),ho=a(Vt,"P",{});var Ds=s(ho);dd=d(Ds,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$n=a(Ds,"A",{href:!0});var Vc=s($n);ld=d(Vc,"PreTrainedModel"),Vc.forEach(t),id=d(Ds,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Ds.forEach(t),cd=i(Vt),uo=a(Vt,"P",{});var Gs=s(uo);pd=d(Gs,"This model is also a PyTorch "),fo=a(Gs,"A",{href:!0,rel:!0});var Jc=s(fo);md=d(Jc,"torch.nn.Module"),Jc.forEach(t),hd=d(Gs,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Gs.forEach(t),ud=i(Vt),ue=a(Vt,"DIV",{class:!0});var tt=s(ue);_(_o.$$.fragment,tt),fd=i(tt),bt=a(tt,"P",{});var Hn=s(bt);_d=d(Hn,"The "),Mn=a(Hn,"A",{href:!0});var Xc=s(Mn);gd=d(Xc,"BlenderbotSmallModel"),Xc.forEach(t),bd=d(Hn," forward method, overrides the "),ya=a(Hn,"CODE",{});var Kc=s(ya);kd=d(Kc,"__call__"),Kc.forEach(t),yd=d(Hn," special method."),Hn.forEach(t),vd=i(tt),_(Ct.$$.fragment,tt),Td=i(tt),va=a(tt,"P",{});var Yc=s(va);wd=d(Yc,"Example:"),Yc.forEach(t),xd=i(tt),_(go.$$.fragment,tt),tt.forEach(t),Vt.forEach(t),bs=i(o),kt=a(o,"H2",{class:!0});var Ws=s(kt);Pt=a(Ws,"A",{id:!0,class:!0,href:!0});var Zc=s(Pt);Ta=a(Zc,"SPAN",{});var Qc=s(Ta);_(bo.$$.fragment,Qc),Qc.forEach(t),Zc.forEach(t),Sd=i(Ws),wa=a(Ws,"SPAN",{});var ep=s(wa);zd=d(ep,"BlenderbotSmallForConditionalGeneration"),ep.forEach(t),Ws.forEach(t),ks=i(o),Be=a(o,"DIV",{class:!0});var Jt=s(Be);_(ko.$$.fragment,Jt),Bd=i(Jt),yo=a(Jt,"P",{});var Rs=s(yo);Fd=d(Rs,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),qn=a(Rs,"A",{href:!0});var tp=s(qn);$d=d(tp,"PreTrainedModel"),tp.forEach(t),Md=d(Rs,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Rs.forEach(t),qd=i(Jt),vo=a(Jt,"P",{});var Us=s(vo);jd=d(Us,"This model is also a PyTorch "),To=a(Us,"A",{href:!0,rel:!0});var op=s(To);Ed=d(op,"torch.nn.Module"),op.forEach(t),Cd=d(Us,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Us.forEach(t),Pd=i(Jt),fe=a(Jt,"DIV",{class:!0});var ot=s(fe);_(wo.$$.fragment,ot),Nd=i(ot),yt=a(ot,"P",{});var Vn=s(yt);Id=d(Vn,"The "),jn=a(Vn,"A",{href:!0});var np=s(jn);Ad=d(np,"BlenderbotSmallForConditionalGeneration"),np.forEach(t),Ld=d(Vn," forward method, overrides the "),xa=a(Vn,"CODE",{});var ap=s(xa);Od=d(ap,"__call__"),ap.forEach(t),Dd=d(Vn," special method."),Vn.forEach(t),Gd=i(ot),_(Nt.$$.fragment,ot),Wd=i(ot),Sa=a(ot,"P",{});var sp=s(Sa);Rd=d(sp,"Conversation example:"),sp.forEach(t),Ud=i(ot),_(xo.$$.fragment,ot),ot.forEach(t),Jt.forEach(t),ys=i(o),vt=a(o,"H2",{class:!0});var Hs=s(vt);It=a(Hs,"A",{id:!0,class:!0,href:!0});var rp=s(It);za=a(rp,"SPAN",{});var dp=s(za);_(So.$$.fragment,dp),dp.forEach(t),rp.forEach(t),Hd=i(Hs),Ba=a(Hs,"SPAN",{});var lp=s(Ba);Vd=d(lp,"BlenderbotSmallForCausalLM"),lp.forEach(t),Hs.forEach(t),vs=i(o),zo=a(o,"DIV",{class:!0});var ip=s(zo);Je=a(ip,"DIV",{class:!0});var Jn=s(Je);_(Bo.$$.fragment,Jn),Jd=i(Jn),Fa=a(Jn,"P",{});var cp=s(Fa);Xd=d(cp,"Example:"),cp.forEach(t),Kd=i(Jn),_(Fo.$$.fragment,Jn),Jn.forEach(t),ip.forEach(t),Ts=i(o),Tt=a(o,"H2",{class:!0});var Vs=s(Tt);At=a(Vs,"A",{id:!0,class:!0,href:!0});var pp=s(At);$a=a(pp,"SPAN",{});var mp=s($a);_($o.$$.fragment,mp),mp.forEach(t),pp.forEach(t),Yd=i(Vs),Ma=a(Vs,"SPAN",{});var hp=s(Ma);Zd=d(hp,"TFBlenderbotSmallModel"),hp.forEach(t),Vs.forEach(t),ws=i(o),ie=a(o,"DIV",{class:!0});var nt=s(ie);_(Mo.$$.fragment,nt),Qd=i(nt),qo=a(nt,"P",{});var Js=s(qo);el=d(Js,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),En=a(Js,"A",{href:!0});var up=s(En);tl=d(up,"TFPreTrainedModel"),up.forEach(t),ol=d(Js,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Js.forEach(t),nl=i(nt),jo=a(nt,"P",{});var Xs=s(jo);al=d(Xs,"This model is also a "),Eo=a(Xs,"A",{href:!0,rel:!0});var fp=s(Eo);sl=d(fp,"tf.keras.Model"),fp.forEach(t),rl=d(Xs,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Xs.forEach(t),dl=i(nt),_(Lt.$$.fragment,nt),ll=i(nt),_e=a(nt,"DIV",{class:!0});var at=s(_e);_(Co.$$.fragment,at),il=i(at),wt=a(at,"P",{});var Xn=s(wt);cl=d(Xn,"The "),Cn=a(Xn,"A",{href:!0});var _p=s(Cn);pl=d(_p,"TFBlenderbotSmallModel"),_p.forEach(t),ml=d(Xn," forward method, overrides the "),qa=a(Xn,"CODE",{});var gp=s(qa);hl=d(gp,"__call__"),gp.forEach(t),ul=d(Xn," special method."),Xn.forEach(t),fl=i(at),_(Ot.$$.fragment,at),_l=i(at),ja=a(at,"P",{});var bp=s(ja);gl=d(bp,"Example:"),bp.forEach(t),bl=i(at),_(Po.$$.fragment,at),at.forEach(t),nt.forEach(t),xs=i(o),xt=a(o,"H2",{class:!0});var Ks=s(xt);Dt=a(Ks,"A",{id:!0,class:!0,href:!0});var kp=s(Dt);Ea=a(kp,"SPAN",{});var yp=s(Ea);_(No.$$.fragment,yp),yp.forEach(t),kp.forEach(t),kl=i(Ks),Ca=a(Ks,"SPAN",{});var vp=s(Ca);yl=d(vp,"TFBlenderbotSmallForConditionalGeneration"),vp.forEach(t),Ks.forEach(t),Ss=i(o),ce=a(o,"DIV",{class:!0});var st=s(ce);_(Io.$$.fragment,st),vl=i(st),Ao=a(st,"P",{});var Ys=s(Ao);Tl=d(Ys,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pn=a(Ys,"A",{href:!0});var Tp=s(Pn);wl=d(Tp,"TFPreTrainedModel"),Tp.forEach(t),xl=d(Ys,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ys.forEach(t),Sl=i(st),Lo=a(st,"P",{});var Zs=s(Lo);zl=d(Zs,"This model is also a "),Oo=a(Zs,"A",{href:!0,rel:!0});var wp=s(Oo);Bl=d(wp,"tf.keras.Model"),wp.forEach(t),Fl=d(Zs,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Zs.forEach(t),$l=i(st),_(Gt.$$.fragment,st),Ml=i(st),ge=a(st,"DIV",{class:!0});var rt=s(ge);_(Do.$$.fragment,rt),ql=i(rt),St=a(rt,"P",{});var Kn=s(St);jl=d(Kn,"The "),Nn=a(Kn,"A",{href:!0});var xp=s(Nn);El=d(xp,"TFBlenderbotSmallForConditionalGeneration"),xp.forEach(t),Cl=d(Kn," forward method, overrides the "),Pa=a(Kn,"CODE",{});var Sp=s(Pa);Pl=d(Sp,"__call__"),Sp.forEach(t),Nl=d(Kn," special method."),Kn.forEach(t),Il=i(rt),_(Wt.$$.fragment,rt),Al=i(rt),Na=a(rt,"P",{});var zp=s(Na);Ll=d(zp,"Conversation example:"),zp.forEach(t),Ol=i(rt),_(Go.$$.fragment,rt),rt.forEach(t),st.forEach(t),zs=i(o),zt=a(o,"H2",{class:!0});var Qs=s(zt);Rt=a(Qs,"A",{id:!0,class:!0,href:!0});var Bp=s(Rt);Ia=a(Bp,"SPAN",{});var Fp=s(Ia);_(Wo.$$.fragment,Fp),Fp.forEach(t),Bp.forEach(t),Dl=i(Qs),Aa=a(Qs,"SPAN",{});var $p=s(Aa);Gl=d($p,"FlaxBlenderbotSmallModel"),$p.forEach(t),Qs.forEach(t),Bs=i(o),P=a(o,"DIV",{class:!0});var Q=s(P);_(Ro.$$.fragment,Q),Wl=i(Q),Uo=a(Q,"P",{});var er=s(Uo);Rl=d(er,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),In=a(er,"A",{href:!0});var Mp=s(In);Ul=d(Mp,"FlaxPreTrainedModel"),Mp.forEach(t),Hl=d(er,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),er.forEach(t),Vl=i(Q),Ho=a(Q,"P",{});var tr=s(Ho);Jl=d(tr,"This model is also a Flax Linen "),Vo=a(tr,"A",{href:!0,rel:!0});var qp=s(Vo);Xl=d(qp,"flax.nn.Module"),qp.forEach(t),Kl=d(tr,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),tr.forEach(t),Yl=i(Q),La=a(Q,"P",{});var jp=s(La);Zl=d(jp,"Finally, this model supports inherent JAX features such as:"),jp.forEach(t),Ql=i(Q),We=a(Q,"UL",{});var Xt=s(We);Oa=a(Xt,"LI",{});var Ep=s(Oa);Jo=a(Ep,"A",{href:!0,rel:!0});var Cp=s(Jo);ei=d(Cp,"Just-In-Time (JIT) compilation"),Cp.forEach(t),Ep.forEach(t),ti=i(Xt),Da=a(Xt,"LI",{});var Pp=s(Da);Xo=a(Pp,"A",{href:!0,rel:!0});var Np=s(Xo);oi=d(Np,"Automatic Differentiation"),Np.forEach(t),Pp.forEach(t),ni=i(Xt),Ga=a(Xt,"LI",{});var Ip=s(Ga);Ko=a(Ip,"A",{href:!0,rel:!0});var Ap=s(Ko);ai=d(Ap,"Vectorization"),Ap.forEach(t),Ip.forEach(t),si=i(Xt),Wa=a(Xt,"LI",{});var Lp=s(Wa);Yo=a(Lp,"A",{href:!0,rel:!0});var Op=s(Yo);ri=d(Op,"Parallelization"),Op.forEach(t),Lp.forEach(t),Xt.forEach(t),di=i(Q),Xe=a(Q,"DIV",{class:!0});var Yn=s(Xe);_(Zo.$$.fragment,Yn),li=i(Yn),Ra=a(Yn,"P",{});var Dp=s(Ra);ii=d(Dp,"Example:"),Dp.forEach(t),ci=i(Yn),_(Qo.$$.fragment,Yn),Yn.forEach(t),pi=i(Q),Ke=a(Q,"DIV",{class:!0});var Zn=s(Ke);_(en.$$.fragment,Zn),mi=i(Zn),Ua=a(Zn,"P",{});var Gp=s(Ua);hi=d(Gp,"Example:"),Gp.forEach(t),ui=i(Zn),_(tn.$$.fragment,Zn),Zn.forEach(t),fi=i(Q),Ye=a(Q,"DIV",{class:!0});var Qn=s(Ye);_(on.$$.fragment,Qn),_i=i(Qn),Ha=a(Qn,"P",{});var Wp=s(Ha);gi=d(Wp,"Example:"),Wp.forEach(t),bi=i(Qn),_(nn.$$.fragment,Qn),Qn.forEach(t),Q.forEach(t),Fs=i(o),Bt=a(o,"H2",{class:!0});var or=s(Bt);Ut=a(or,"A",{id:!0,class:!0,href:!0});var Rp=s(Ut);Va=a(Rp,"SPAN",{});var Up=s(Va);_(an.$$.fragment,Up),Up.forEach(t),Rp.forEach(t),ki=i(or),Ja=a(or,"SPAN",{});var Hp=s(Ja);yi=d(Hp,"FlaxBlenderbotForConditionalGeneration"),Hp.forEach(t),or.forEach(t),$s=i(o),N=a(o,"DIV",{class:!0});var ee=s(N);_(sn.$$.fragment,ee),vi=i(ee),rn=a(ee,"P",{});var nr=s(rn);Ti=d(nr,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=a(nr,"A",{href:!0});var Vp=s(An);wi=d(Vp,"FlaxPreTrainedModel"),Vp.forEach(t),xi=d(nr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),nr.forEach(t),Si=i(ee),dn=a(ee,"P",{});var ar=s(dn);zi=d(ar,"This model is also a Flax Linen "),ln=a(ar,"A",{href:!0,rel:!0});var Jp=s(ln);Bi=d(Jp,"flax.nn.Module"),Jp.forEach(t),Fi=d(ar,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ar.forEach(t),$i=i(ee),Xa=a(ee,"P",{});var Xp=s(Xa);Mi=d(Xp,"Finally, this model supports inherent JAX features such as:"),Xp.forEach(t),qi=i(ee),Re=a(ee,"UL",{});var Kt=s(Re);Ka=a(Kt,"LI",{});var Kp=s(Ka);cn=a(Kp,"A",{href:!0,rel:!0});var Yp=s(cn);ji=d(Yp,"Just-In-Time (JIT) compilation"),Yp.forEach(t),Kp.forEach(t),Ei=i(Kt),Ya=a(Kt,"LI",{});var Zp=s(Ya);pn=a(Zp,"A",{href:!0,rel:!0});var Qp=s(pn);Ci=d(Qp,"Automatic Differentiation"),Qp.forEach(t),Zp.forEach(t),Pi=i(Kt),Za=a(Kt,"LI",{});var em=s(Za);mn=a(em,"A",{href:!0,rel:!0});var tm=s(mn);Ni=d(tm,"Vectorization"),tm.forEach(t),em.forEach(t),Ii=i(Kt),Qa=a(Kt,"LI",{});var om=s(Qa);hn=a(om,"A",{href:!0,rel:!0});var nm=s(hn);Ai=d(nm,"Parallelization"),nm.forEach(t),om.forEach(t),Kt.forEach(t),Li=i(ee),W=a(ee,"DIV",{class:!0});var ye=s(W);_(un.$$.fragment,ye),Oi=i(ye),Ft=a(ye,"P",{});var ea=s(Ft);Di=d(ea,"The "),es=a(ea,"CODE",{});var am=s(es);Gi=d(am,"FlaxBlenderbotSmallPreTrainedModel"),am.forEach(t),Wi=d(ea," forward method, overrides the "),ts=a(ea,"CODE",{});var sm=s(ts);Ri=d(sm,"__call__"),sm.forEach(t),Ui=d(ea," special method."),ea.forEach(t),Hi=i(ye),_(Ht.$$.fragment,ye),Vi=i(ye),os=a(ye,"P",{});var rm=s(os);Ji=d(rm,"Summarization example:"),rm.forEach(t),Xi=i(ye),_(fn.$$.fragment,ye),Ki=i(ye),ns=a(ye,"P",{});var dm=s(ns);Yi=d(dm,"Mask filling example:"),dm.forEach(t),Zi=i(ye),_(_n.$$.fragment,ye),ye.forEach(t),Qi=i(ee),Ze=a(ee,"DIV",{class:!0});var ta=s(Ze);_(gn.$$.fragment,ta),ec=i(ta),as=a(ta,"P",{});var lm=s(as);tc=d(lm,"Example:"),lm.forEach(t),oc=i(ta),_(bn.$$.fragment,ta),ta.forEach(t),nc=i(ee),Qe=a(ee,"DIV",{class:!0});var oa=s(Qe);_(kn.$$.fragment,oa),ac=i(oa),ss=a(oa,"P",{});var im=s(ss);sc=d(im,"Example:"),im.forEach(t),rc=i(oa),_(yn.$$.fragment,oa),oa.forEach(t),ee.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Tm)),c(T,"id","blenderbot-small"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot-small"),c(v,"class","relative group"),c(O,"href","/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallModel"),c(D,"href","/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallForConditionalGeneration"),c(U,"href","https://huggingface.co/facebook/blenderbot-90M"),c(U,"rel","nofollow"),c(K,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(me,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(I,"id","overview"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#overview"),c(V,"class","relative group"),c(se,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(se,"rel","nofollow"),c(we,"href","https://huggingface.co/patrickvonplaten"),c(we,"rel","nofollow"),c(A,"href","https://github.com/facebookresearch/ParlAI"),c(A,"rel","nofollow"),c(he,"id","transformers.BlenderbotSmallConfig"),c(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(he,"href","#transformers.BlenderbotSmallConfig"),c(de,"class","relative group"),c(wn,"href","/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallModel"),c(Zt,"href","https://huggingface.co/facebook/blenderbot_small-90M"),c(Zt,"rel","nofollow"),c(xn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Sn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(le,"class","docstring"),c($t,"id","transformers.BlenderbotSmallTokenizer"),c($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($t,"href","#transformers.BlenderbotSmallTokenizer"),c(ut,"class","relative group"),c(zn,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(He,"class","docstring"),c(Mt,"class","docstring"),c(Fn,"href","../glossary#token-type-ids"),c(Ve,"class","docstring"),c(ha,"class","docstring"),c(L,"class","docstring"),c(qt,"id","transformers.BlenderbotSmallTokenizerFast"),c(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qt,"href","#transformers.BlenderbotSmallTokenizerFast"),c(_t,"class","relative group"),c(jt,"class","docstring"),c(Ge,"class","docstring"),c(Et,"id","transformers.BlenderbotSmallModel"),c(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Et,"href","#transformers.BlenderbotSmallModel"),c(gt,"class","relative group"),c($n,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fo,"rel","nofollow"),c(Mn,"href","/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallModel"),c(ue,"class","docstring"),c(ze,"class","docstring"),c(Pt,"id","transformers.BlenderbotSmallForConditionalGeneration"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.BlenderbotSmallForConditionalGeneration"),c(kt,"class","relative group"),c(qn,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(To,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(To,"rel","nofollow"),c(jn,"href","/docs/transformers/master/en/model_doc/blenderbot_small#transformers.BlenderbotSmallForConditionalGeneration"),c(fe,"class","docstring"),c(Be,"class","docstring"),c(It,"id","transformers.BlenderbotSmallForCausalLM"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.BlenderbotSmallForCausalLM"),c(vt,"class","relative group"),c(Je,"class","docstring"),c(zo,"class","docstring"),c(At,"id","transformers.TFBlenderbotSmallModel"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.TFBlenderbotSmallModel"),c(Tt,"class","relative group"),c(En,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Eo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Eo,"rel","nofollow"),c(Cn,"href","/docs/transformers/master/en/model_doc/blenderbot_small#transformers.TFBlenderbotSmallModel"),c(_e,"class","docstring"),c(ie,"class","docstring"),c(Dt,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),c(xt,"class","relative group"),c(Pn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Oo,"rel","nofollow"),c(Nn,"href","/docs/transformers/master/en/model_doc/blenderbot_small#transformers.TFBlenderbotSmallForConditionalGeneration"),c(ge,"class","docstring"),c(ce,"class","docstring"),c(Rt,"id","transformers.FlaxBlenderbotSmallModel"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.FlaxBlenderbotSmallModel"),c(zt,"class","relative group"),c(In,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Vo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Vo,"rel","nofollow"),c(Jo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Jo,"rel","nofollow"),c(Xo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Xo,"rel","nofollow"),c(Ko,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ko,"rel","nofollow"),c(Yo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Yo,"rel","nofollow"),c(Xe,"class","docstring"),c(Ke,"class","docstring"),c(Ye,"class","docstring"),c(P,"class","docstring"),c(Ut,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),c(Bt,"class","relative group"),c(An,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ln,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ln,"rel","nofollow"),c(cn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(cn,"rel","nofollow"),c(pn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(pn,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(mn,"rel","nofollow"),c(hn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(hn,"rel","nofollow"),c(W,"class","docstring"),c(Ze,"class","docstring"),c(Qe,"class","docstring"),c(N,"class","docstring")},m(o,m){e(document.head,h),p(o,B,m),p(o,v,m),e(v,T),e(T,S),g(x,S,null),e(v,w),e(v,F),e(F,Ee),p(o,pe,m),p(o,z,m),e(z,Ce),e(z,O),e(O,Pe),e(z,Ne),e(z,D),e(D,Ie),e(z,Ae),e(z,U),e(U,H),e(z,Le),e(z,K),e(K,M),e(z,E),e(z,me),e(me,te),p(o,$e,m),p(o,V,m),e(V,I),e(I,ve),g(oe,ve,null),e(V,C),e(V,Te),e(Te,ne),p(o,Me,m),p(o,Y,m),e(Y,ae),e(Y,se),e(se,Oe),e(Y,J),p(o,qe,m),p(o,G,m),e(G,De),p(o,u,m),p(o,$,m),e($,re),e(re,dt),p(o,Ue,m),p(o,q,m),e(q,lt),e(q,we),e(we,it),e(q,X),e(q,A),e(A,ct),e(q,pt),p(o,Z,m),p(o,de,m),e(de,he),e(he,xe),g(Se,xe,null),e(de,sr),e(de,na),e(na,rr),p(o,ps,m),p(o,le,m),g(Yt,le,null),e(le,dr),e(le,mt),e(mt,lr),e(mt,wn),e(wn,ir),e(mt,cr),e(mt,Zt),e(Zt,pr),e(mt,mr),e(le,hr),e(le,ht),e(ht,ur),e(ht,xn),e(xn,fr),e(ht,_r),e(ht,Sn),e(Sn,gr),e(ht,br),e(le,kr),e(le,aa),e(aa,yr),e(le,vr),g(Qt,le,null),p(o,ms,m),p(o,ut,m),e(ut,$t),e($t,sa),g(eo,sa,null),e(ut,Tr),e(ut,ra),e(ra,wr),p(o,hs,m),p(o,L,m),g(to,L,null),e(L,xr),e(L,da),e(da,Sr),e(L,zr),e(L,oo),e(oo,Br),e(oo,zn),e(zn,Fr),e(oo,$r),e(L,Mr),e(L,He),g(no,He,null),e(He,qr),e(He,la),e(la,jr),e(He,Er),e(He,ia),e(ia,Cr),e(L,Pr),e(L,Mt),g(ao,Mt,null),e(Mt,Nr),e(Mt,ft),e(ft,Ir),e(ft,ca),e(ca,Ar),e(ft,Lr),e(ft,pa),e(pa,Or),e(ft,Dr),e(L,Gr),e(L,Ve),g(so,Ve,null),e(Ve,Wr),e(Ve,Bn),e(Bn,Rr),e(Bn,Fn),e(Fn,Ur),e(Ve,Hr),e(Ve,ma),e(ma,Vr),e(L,Jr),e(L,ha),p(o,us,m),p(o,_t,m),e(_t,qt),e(qt,ua),g(ro,ua,null),e(_t,Xr),e(_t,fa),e(fa,Kr),p(o,fs,m),p(o,Ge,m),g(lo,Ge,null),e(Ge,Yr),e(Ge,io),e(io,Zr),e(io,_a),e(_a,Qr),e(io,ed),e(Ge,td),e(Ge,jt),g(co,jt,null),e(jt,od),e(jt,ga),e(ga,nd),p(o,_s,m),p(o,gt,m),e(gt,Et),e(Et,ba),g(po,ba,null),e(gt,ad),e(gt,ka),e(ka,sd),p(o,gs,m),p(o,ze,m),g(mo,ze,null),e(ze,rd),e(ze,ho),e(ho,dd),e(ho,$n),e($n,ld),e(ho,id),e(ze,cd),e(ze,uo),e(uo,pd),e(uo,fo),e(fo,md),e(uo,hd),e(ze,ud),e(ze,ue),g(_o,ue,null),e(ue,fd),e(ue,bt),e(bt,_d),e(bt,Mn),e(Mn,gd),e(bt,bd),e(bt,ya),e(ya,kd),e(bt,yd),e(ue,vd),g(Ct,ue,null),e(ue,Td),e(ue,va),e(va,wd),e(ue,xd),g(go,ue,null),p(o,bs,m),p(o,kt,m),e(kt,Pt),e(Pt,Ta),g(bo,Ta,null),e(kt,Sd),e(kt,wa),e(wa,zd),p(o,ks,m),p(o,Be,m),g(ko,Be,null),e(Be,Bd),e(Be,yo),e(yo,Fd),e(yo,qn),e(qn,$d),e(yo,Md),e(Be,qd),e(Be,vo),e(vo,jd),e(vo,To),e(To,Ed),e(vo,Cd),e(Be,Pd),e(Be,fe),g(wo,fe,null),e(fe,Nd),e(fe,yt),e(yt,Id),e(yt,jn),e(jn,Ad),e(yt,Ld),e(yt,xa),e(xa,Od),e(yt,Dd),e(fe,Gd),g(Nt,fe,null),e(fe,Wd),e(fe,Sa),e(Sa,Rd),e(fe,Ud),g(xo,fe,null),p(o,ys,m),p(o,vt,m),e(vt,It),e(It,za),g(So,za,null),e(vt,Hd),e(vt,Ba),e(Ba,Vd),p(o,vs,m),p(o,zo,m),e(zo,Je),g(Bo,Je,null),e(Je,Jd),e(Je,Fa),e(Fa,Xd),e(Je,Kd),g(Fo,Je,null),p(o,Ts,m),p(o,Tt,m),e(Tt,At),e(At,$a),g($o,$a,null),e(Tt,Yd),e(Tt,Ma),e(Ma,Zd),p(o,ws,m),p(o,ie,m),g(Mo,ie,null),e(ie,Qd),e(ie,qo),e(qo,el),e(qo,En),e(En,tl),e(qo,ol),e(ie,nl),e(ie,jo),e(jo,al),e(jo,Eo),e(Eo,sl),e(jo,rl),e(ie,dl),g(Lt,ie,null),e(ie,ll),e(ie,_e),g(Co,_e,null),e(_e,il),e(_e,wt),e(wt,cl),e(wt,Cn),e(Cn,pl),e(wt,ml),e(wt,qa),e(qa,hl),e(wt,ul),e(_e,fl),g(Ot,_e,null),e(_e,_l),e(_e,ja),e(ja,gl),e(_e,bl),g(Po,_e,null),p(o,xs,m),p(o,xt,m),e(xt,Dt),e(Dt,Ea),g(No,Ea,null),e(xt,kl),e(xt,Ca),e(Ca,yl),p(o,Ss,m),p(o,ce,m),g(Io,ce,null),e(ce,vl),e(ce,Ao),e(Ao,Tl),e(Ao,Pn),e(Pn,wl),e(Ao,xl),e(ce,Sl),e(ce,Lo),e(Lo,zl),e(Lo,Oo),e(Oo,Bl),e(Lo,Fl),e(ce,$l),g(Gt,ce,null),e(ce,Ml),e(ce,ge),g(Do,ge,null),e(ge,ql),e(ge,St),e(St,jl),e(St,Nn),e(Nn,El),e(St,Cl),e(St,Pa),e(Pa,Pl),e(St,Nl),e(ge,Il),g(Wt,ge,null),e(ge,Al),e(ge,Na),e(Na,Ll),e(ge,Ol),g(Go,ge,null),p(o,zs,m),p(o,zt,m),e(zt,Rt),e(Rt,Ia),g(Wo,Ia,null),e(zt,Dl),e(zt,Aa),e(Aa,Gl),p(o,Bs,m),p(o,P,m),g(Ro,P,null),e(P,Wl),e(P,Uo),e(Uo,Rl),e(Uo,In),e(In,Ul),e(Uo,Hl),e(P,Vl),e(P,Ho),e(Ho,Jl),e(Ho,Vo),e(Vo,Xl),e(Ho,Kl),e(P,Yl),e(P,La),e(La,Zl),e(P,Ql),e(P,We),e(We,Oa),e(Oa,Jo),e(Jo,ei),e(We,ti),e(We,Da),e(Da,Xo),e(Xo,oi),e(We,ni),e(We,Ga),e(Ga,Ko),e(Ko,ai),e(We,si),e(We,Wa),e(Wa,Yo),e(Yo,ri),e(P,di),e(P,Xe),g(Zo,Xe,null),e(Xe,li),e(Xe,Ra),e(Ra,ii),e(Xe,ci),g(Qo,Xe,null),e(P,pi),e(P,Ke),g(en,Ke,null),e(Ke,mi),e(Ke,Ua),e(Ua,hi),e(Ke,ui),g(tn,Ke,null),e(P,fi),e(P,Ye),g(on,Ye,null),e(Ye,_i),e(Ye,Ha),e(Ha,gi),e(Ye,bi),g(nn,Ye,null),p(o,Fs,m),p(o,Bt,m),e(Bt,Ut),e(Ut,Va),g(an,Va,null),e(Bt,ki),e(Bt,Ja),e(Ja,yi),p(o,$s,m),p(o,N,m),g(sn,N,null),e(N,vi),e(N,rn),e(rn,Ti),e(rn,An),e(An,wi),e(rn,xi),e(N,Si),e(N,dn),e(dn,zi),e(dn,ln),e(ln,Bi),e(dn,Fi),e(N,$i),e(N,Xa),e(Xa,Mi),e(N,qi),e(N,Re),e(Re,Ka),e(Ka,cn),e(cn,ji),e(Re,Ei),e(Re,Ya),e(Ya,pn),e(pn,Ci),e(Re,Pi),e(Re,Za),e(Za,mn),e(mn,Ni),e(Re,Ii),e(Re,Qa),e(Qa,hn),e(hn,Ai),e(N,Li),e(N,W),g(un,W,null),e(W,Oi),e(W,Ft),e(Ft,Di),e(Ft,es),e(es,Gi),e(Ft,Wi),e(Ft,ts),e(ts,Ri),e(Ft,Ui),e(W,Hi),g(Ht,W,null),e(W,Vi),e(W,os),e(os,Ji),e(W,Xi),g(fn,W,null),e(W,Ki),e(W,ns),e(ns,Yi),e(W,Zi),g(_n,W,null),e(N,Qi),e(N,Ze),g(gn,Ze,null),e(Ze,ec),e(Ze,as),e(as,tc),e(Ze,oc),g(bn,Ze,null),e(N,nc),e(N,Qe),g(kn,Qe,null),e(Qe,ac),e(Qe,ss),e(ss,sc),e(Qe,rc),g(yn,Qe,null),Ms=!0},p(o,[m]){const vn={};m&2&&(vn.$$scope={dirty:m,ctx:o}),Ct.$set(vn);const rs={};m&2&&(rs.$$scope={dirty:m,ctx:o}),Nt.$set(rs);const ds={};m&2&&(ds.$$scope={dirty:m,ctx:o}),Lt.$set(ds);const ls={};m&2&&(ls.$$scope={dirty:m,ctx:o}),Ot.$set(ls);const be={};m&2&&(be.$$scope={dirty:m,ctx:o}),Gt.$set(be);const is={};m&2&&(is.$$scope={dirty:m,ctx:o}),Wt.$set(is);const cs={};m&2&&(cs.$$scope={dirty:m,ctx:o}),Ht.$set(cs)},i(o){Ms||(b(x.$$.fragment,o),b(oe.$$.fragment,o),b(Se.$$.fragment,o),b(Yt.$$.fragment,o),b(Qt.$$.fragment,o),b(eo.$$.fragment,o),b(to.$$.fragment,o),b(no.$$.fragment,o),b(ao.$$.fragment,o),b(so.$$.fragment,o),b(ro.$$.fragment,o),b(lo.$$.fragment,o),b(co.$$.fragment,o),b(po.$$.fragment,o),b(mo.$$.fragment,o),b(_o.$$.fragment,o),b(Ct.$$.fragment,o),b(go.$$.fragment,o),b(bo.$$.fragment,o),b(ko.$$.fragment,o),b(wo.$$.fragment,o),b(Nt.$$.fragment,o),b(xo.$$.fragment,o),b(So.$$.fragment,o),b(Bo.$$.fragment,o),b(Fo.$$.fragment,o),b($o.$$.fragment,o),b(Mo.$$.fragment,o),b(Lt.$$.fragment,o),b(Co.$$.fragment,o),b(Ot.$$.fragment,o),b(Po.$$.fragment,o),b(No.$$.fragment,o),b(Io.$$.fragment,o),b(Gt.$$.fragment,o),b(Do.$$.fragment,o),b(Wt.$$.fragment,o),b(Go.$$.fragment,o),b(Wo.$$.fragment,o),b(Ro.$$.fragment,o),b(Zo.$$.fragment,o),b(Qo.$$.fragment,o),b(en.$$.fragment,o),b(tn.$$.fragment,o),b(on.$$.fragment,o),b(nn.$$.fragment,o),b(an.$$.fragment,o),b(sn.$$.fragment,o),b(un.$$.fragment,o),b(Ht.$$.fragment,o),b(fn.$$.fragment,o),b(_n.$$.fragment,o),b(gn.$$.fragment,o),b(bn.$$.fragment,o),b(kn.$$.fragment,o),b(yn.$$.fragment,o),Ms=!0)},o(o){k(x.$$.fragment,o),k(oe.$$.fragment,o),k(Se.$$.fragment,o),k(Yt.$$.fragment,o),k(Qt.$$.fragment,o),k(eo.$$.fragment,o),k(to.$$.fragment,o),k(no.$$.fragment,o),k(ao.$$.fragment,o),k(so.$$.fragment,o),k(ro.$$.fragment,o),k(lo.$$.fragment,o),k(co.$$.fragment,o),k(po.$$.fragment,o),k(mo.$$.fragment,o),k(_o.$$.fragment,o),k(Ct.$$.fragment,o),k(go.$$.fragment,o),k(bo.$$.fragment,o),k(ko.$$.fragment,o),k(wo.$$.fragment,o),k(Nt.$$.fragment,o),k(xo.$$.fragment,o),k(So.$$.fragment,o),k(Bo.$$.fragment,o),k(Fo.$$.fragment,o),k($o.$$.fragment,o),k(Mo.$$.fragment,o),k(Lt.$$.fragment,o),k(Co.$$.fragment,o),k(Ot.$$.fragment,o),k(Po.$$.fragment,o),k(No.$$.fragment,o),k(Io.$$.fragment,o),k(Gt.$$.fragment,o),k(Do.$$.fragment,o),k(Wt.$$.fragment,o),k(Go.$$.fragment,o),k(Wo.$$.fragment,o),k(Ro.$$.fragment,o),k(Zo.$$.fragment,o),k(Qo.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(on.$$.fragment,o),k(nn.$$.fragment,o),k(an.$$.fragment,o),k(sn.$$.fragment,o),k(un.$$.fragment,o),k(Ht.$$.fragment,o),k(fn.$$.fragment,o),k(_n.$$.fragment,o),k(gn.$$.fragment,o),k(bn.$$.fragment,o),k(kn.$$.fragment,o),k(yn.$$.fragment,o),Ms=!1},d(o){t(h),o&&t(B),o&&t(v),y(x),o&&t(pe),o&&t(z),o&&t($e),o&&t(V),y(oe),o&&t(Me),o&&t(Y),o&&t(qe),o&&t(G),o&&t(u),o&&t($),o&&t(Ue),o&&t(q),o&&t(Z),o&&t(de),y(Se),o&&t(ps),o&&t(le),y(Yt),y(Qt),o&&t(ms),o&&t(ut),y(eo),o&&t(hs),o&&t(L),y(to),y(no),y(ao),y(so),o&&t(us),o&&t(_t),y(ro),o&&t(fs),o&&t(Ge),y(lo),y(co),o&&t(_s),o&&t(gt),y(po),o&&t(gs),o&&t(ze),y(mo),y(_o),y(Ct),y(go),o&&t(bs),o&&t(kt),y(bo),o&&t(ks),o&&t(Be),y(ko),y(wo),y(Nt),y(xo),o&&t(ys),o&&t(vt),y(So),o&&t(vs),o&&t(zo),y(Bo),y(Fo),o&&t(Ts),o&&t(Tt),y($o),o&&t(ws),o&&t(ie),y(Mo),y(Lt),y(Co),y(Ot),y(Po),o&&t(xs),o&&t(xt),y(No),o&&t(Ss),o&&t(ce),y(Io),y(Gt),y(Do),y(Wt),y(Go),o&&t(zs),o&&t(zt),y(Wo),o&&t(Bs),o&&t(P),y(Ro),y(Zo),y(Qo),y(en),y(tn),y(on),y(nn),o&&t(Fs),o&&t(Bt),y(an),o&&t($s),o&&t(N),y(sn),y(un),y(Ht),y(fn),y(_n),y(gn),y(bn),y(kn),y(yn)}}}const Tm={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function wm(R,h,B){let{fw:v}=h;return R.$$set=T=>{"fw"in T&&B(0,v=T.fw)},[v]}class Mm extends cm{constructor(h){super();pm(this,h,wm,vm,mm,{fw:0})}}export{Mm as default,Tm as metadata};
