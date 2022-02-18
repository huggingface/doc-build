import{S as Oi,i as Ii,s as Li,e as a,k as l,w as k,t as s,L as Ni,c as r,d as t,m as d,a as i,x as $,h as n,b as c,J as e,g as u,y as H,q as C,o as E,B as j}from"../../chunks/vendor-b1433968.js";import{T as uo}from"../../chunks/Tip-c3840994.js";import{D as ze}from"../../chunks/Docstring-ff504c58.js";import{C as zo}from"../../chunks/CodeBlock-a320dbd7.js";import{I as Tt}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function Wi(A){let p,T,f,g,v;return{c(){p=a("p"),T=s(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=s("Module"),v=s(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);T=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var w=i(f);g=n(w,"Module"),w.forEach(t),v=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){u(b,p,_),e(p,T),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Bi(A){let p,T,f,g,v;return{c(){p=a("p"),T=s(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=s("Module"),v=s(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);T=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var w=i(f);g=n(w,"Module"),w.forEach(t),v=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){u(b,p,_),e(p,T),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Ri(A){let p,T,f,g,v;return{c(){p=a("p"),T=s(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=s("Module"),v=s(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);T=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var w=i(f);g=n(w,"Module"),w.forEach(t),v=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){u(b,p,_),e(p,T),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Vi(A){let p,T,f,g,v,b,_,w,Ee,ie,F,K,O,X,je,I,Fe,ye,D,L,G,_e,M,q,le,Q,we,de,N,Me,ke,x,xe,Y,J,be,Z,qe,ee,W,ce,te,Pe;return{c(){p=a("p"),T=s("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),b=s("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),w=a("li"),Ee=s("having all inputs as a list, tuple or dict in the first positional arguments."),ie=l(),F=a("p"),K=s("This second option is useful when using "),O=a("code"),X=s("tf.keras.Model.fit"),je=s(` method which currently requires having all
the tensors in the first argument of the model call function: `),I=a("code"),Fe=s("model(inputs)"),ye=s("."),D=l(),L=a("p"),G=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),_e=l(),M=a("ul"),q=a("li"),le=s("a single Tensor with "),Q=a("code"),we=s("input_values"),de=s(" only and nothing else: "),N=a("code"),Me=s("model(inputs_ids)"),ke=l(),x=a("li"),xe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),J=s("model([input_values, attention_mask])"),be=s(" or "),Z=a("code"),qe=s("model([input_values, attention_mask, token_type_ids])"),ee=l(),W=a("li"),ce=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=a("code"),Pe=s('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var y=i(p);T=n(y,"TF 2.0 models accepts two formats as inputs:"),y.forEach(t),f=d(h),g=r(h,"UL",{});var ve=i(g);v=r(ve,"LI",{});var Te=i(v);b=n(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(ve),w=r(ve,"LI",{});var Ue=i(w);Ee=n(Ue,"having all inputs as a list, tuple or dict in the first positional arguments."),Ue.forEach(t),ve.forEach(t),ie=d(h),F=r(h,"P",{});var B=i(F);K=n(B,"This second option is useful when using "),O=r(B,"CODE",{});var De=i(O);X=n(De,"tf.keras.Model.fit"),De.forEach(t),je=n(B,` method which currently requires having all
the tensors in the first argument of the model call function: `),I=r(B,"CODE",{});var oe=i(I);Fe=n(oe,"model(inputs)"),oe.forEach(t),ye=n(B,"."),B.forEach(t),D=d(h),L=r(h,"P",{});var pe=i(L);G=n(pe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),pe.forEach(t),_e=d(h),M=r(h,"UL",{});var S=i(M);q=r(S,"LI",{});var z=i(q);le=n(z,"a single Tensor with "),Q=r(z,"CODE",{});var Ke=i(Q);we=n(Ke,"input_values"),Ke.forEach(t),de=n(z," only and nothing else: "),N=r(z,"CODE",{});var Se=i(N);Me=n(Se,"model(inputs_ids)"),Se.forEach(t),z.forEach(t),ke=d(S),x=r(S,"LI",{});var se=i(x);xe=n(se,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(se,"CODE",{});var Ae=i(Y);J=n(Ae,"model([input_values, attention_mask])"),Ae.forEach(t),be=n(se," or "),Z=r(se,"CODE",{});var P=i(Z);qe=n(P,"model([input_values, attention_mask, token_type_ids])"),P.forEach(t),se.forEach(t),ee=d(S),W=r(S,"LI",{});var ne=i(W);ce=n(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=r(ne,"CODE",{});var Ye=i(te);Pe=n(Ye,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Ye.forEach(t),ne.forEach(t),S.forEach(t)},m(h,y){u(h,p,y),e(p,T),u(h,f,y),u(h,g,y),e(g,v),e(v,b),e(g,_),e(g,w),e(w,Ee),u(h,ie,y),u(h,F,y),e(F,K),e(F,O),e(O,X),e(F,je),e(F,I),e(I,Fe),e(F,ye),u(h,D,y),u(h,L,y),e(L,G),u(h,_e,y),u(h,M,y),e(M,q),e(q,le),e(q,Q),e(Q,we),e(q,de),e(q,N),e(N,Me),e(M,ke),e(M,x),e(x,xe),e(x,Y),e(Y,J),e(x,be),e(x,Z),e(Z,qe),e(M,ee),e(M,W),e(W,ce),e(W,te),e(te,Pe)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(ie),h&&t(F),h&&t(D),h&&t(L),h&&t(_e),h&&t(M)}}}function Ui(A){let p,T,f,g,v;return{c(){p=a("p"),T=s(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=s("Module"),v=s(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);T=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var w=i(f);g=n(w,"Module"),w.forEach(t),v=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){u(b,p,_),e(p,T),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Ki(A){let p,T,f,g,v,b,_,w,Ee,ie,F,K,O,X,je,I,Fe,ye,D,L,G,_e,M,q,le,Q,we,de,N,Me,ke,x,xe,Y,J,be,Z,qe,ee,W,ce,te,Pe;return{c(){p=a("p"),T=s("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),b=s("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),w=a("li"),Ee=s("having all inputs as a list, tuple or dict in the first positional arguments."),ie=l(),F=a("p"),K=s("This second option is useful when using "),O=a("code"),X=s("tf.keras.Model.fit"),je=s(` method which currently requires having all
the tensors in the first argument of the model call function: `),I=a("code"),Fe=s("model(inputs)"),ye=s("."),D=l(),L=a("p"),G=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),_e=l(),M=a("ul"),q=a("li"),le=s("a single Tensor with "),Q=a("code"),we=s("input_values"),de=s(" only and nothing else: "),N=a("code"),Me=s("model(inputs_ids)"),ke=l(),x=a("li"),xe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),J=s("model([input_values, attention_mask])"),be=s(" or "),Z=a("code"),qe=s("model([input_values, attention_mask, token_type_ids])"),ee=l(),W=a("li"),ce=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=a("code"),Pe=s('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var y=i(p);T=n(y,"TF 2.0 models accepts two formats as inputs:"),y.forEach(t),f=d(h),g=r(h,"UL",{});var ve=i(g);v=r(ve,"LI",{});var Te=i(v);b=n(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(ve),w=r(ve,"LI",{});var Ue=i(w);Ee=n(Ue,"having all inputs as a list, tuple or dict in the first positional arguments."),Ue.forEach(t),ve.forEach(t),ie=d(h),F=r(h,"P",{});var B=i(F);K=n(B,"This second option is useful when using "),O=r(B,"CODE",{});var De=i(O);X=n(De,"tf.keras.Model.fit"),De.forEach(t),je=n(B,` method which currently requires having all
the tensors in the first argument of the model call function: `),I=r(B,"CODE",{});var oe=i(I);Fe=n(oe,"model(inputs)"),oe.forEach(t),ye=n(B,"."),B.forEach(t),D=d(h),L=r(h,"P",{});var pe=i(L);G=n(pe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),pe.forEach(t),_e=d(h),M=r(h,"UL",{});var S=i(M);q=r(S,"LI",{});var z=i(q);le=n(z,"a single Tensor with "),Q=r(z,"CODE",{});var Ke=i(Q);we=n(Ke,"input_values"),Ke.forEach(t),de=n(z," only and nothing else: "),N=r(z,"CODE",{});var Se=i(N);Me=n(Se,"model(inputs_ids)"),Se.forEach(t),z.forEach(t),ke=d(S),x=r(S,"LI",{});var se=i(x);xe=n(se,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(se,"CODE",{});var Ae=i(Y);J=n(Ae,"model([input_values, attention_mask])"),Ae.forEach(t),be=n(se," or "),Z=r(se,"CODE",{});var P=i(Z);qe=n(P,"model([input_values, attention_mask, token_type_ids])"),P.forEach(t),se.forEach(t),ee=d(S),W=r(S,"LI",{});var ne=i(W);ce=n(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=r(ne,"CODE",{});var Ye=i(te);Pe=n(Ye,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Ye.forEach(t),ne.forEach(t),S.forEach(t)},m(h,y){u(h,p,y),e(p,T),u(h,f,y),u(h,g,y),e(g,v),e(v,b),e(g,_),e(g,w),e(w,Ee),u(h,ie,y),u(h,F,y),e(F,K),e(F,O),e(O,X),e(F,je),e(F,I),e(I,Fe),e(F,ye),u(h,D,y),u(h,L,y),e(L,G),u(h,_e,y),u(h,M,y),e(M,q),e(q,le),e(q,Q),e(Q,we),e(q,de),e(q,N),e(N,Me),e(M,ke),e(M,x),e(x,xe),e(x,Y),e(Y,J),e(x,be),e(x,Z),e(Z,qe),e(M,ee),e(M,W),e(W,ce),e(W,te),e(te,Pe)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(ie),h&&t(F),h&&t(D),h&&t(L),h&&t(_e),h&&t(M)}}}function Yi(A){let p,T,f,g,v;return{c(){p=a("p"),T=s(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a("code"),g=s("Module"),v=s(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);T=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r(_,"CODE",{});var w=i(f);g=n(w,"Module"),w.forEach(t),v=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(b,_){u(b,p,_),e(p,T),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Ji(A){let p,T,f,g,v,b,_,w,Ee,ie,F,K,O,X,je,I,Fe,ye,D,L,G,_e,M,q,le,Q,we,de,N,Me,ke,x,xe,Y,J,be,Z,qe,ee,W,ce,te,Pe,h,y,ve,Te,Ue,B,De,oe,pe,S,z,Ke,Se,se,Ae,P,ne,Ye,Je,Us,mo,Ks,Ys,yt,Js,Xs,Gs,Xe,Qs,fo,Zs,en,go,tn,on,sn,Do,nn,an,wt,hs,Ge,lt,Ao,kt,rn,Oo,ln,us,ae,$t,dn,Ht,cn,Ct,pn,hn,un,Et,mn,_o,fn,gn,_n,jt,bn,Ft,vn,Tn,yn,he,Mt,wn,Qe,kn,bo,$n,Hn,Io,Cn,En,jn,dt,Fn,Lo,Mn,xn,xt,ms,Ze,ct,No,qt,qn,Wo,Pn,fs,re,Pt,Sn,et,zn,Bo,Dn,An,St,On,In,Ln,zt,Nn,vo,Wn,Bn,Rn,Dt,Vn,At,Un,Kn,Yn,ue,Ot,Jn,tt,Xn,To,Gn,Qn,Ro,Zn,ea,ta,pt,oa,Vo,sa,na,It,gs,ot,ht,Uo,Lt,aa,Ko,ra,_s,R,Nt,ia,Yo,la,da,Wt,ca,Bt,pa,ha,ua,Rt,ma,yo,fa,ga,_a,Vt,ba,Ut,va,Ta,ya,me,Kt,wa,st,ka,wo,$a,Ha,Jo,Ca,Ea,ja,ut,Fa,Xo,Ma,xa,Yt,bs,nt,mt,Go,Jt,qa,Qo,Pa,vs,V,Xt,Sa,Zo,za,Da,Gt,Aa,ko,Oa,Ia,La,Qt,Na,Zt,Wa,Ba,Ra,ft,Va,fe,eo,Ua,at,Ka,$o,Ya,Ja,es,Xa,Ga,Qa,gt,Za,ts,er,tr,to,Ts,rt,_t,os,oo,or,ss,sr,ys,U,so,nr,no,ar,ns,rr,ir,lr,ao,dr,Ho,cr,pr,hr,ro,ur,io,mr,fr,gr,bt,_r,ge,lo,br,it,vr,Co,Tr,yr,as,wr,kr,$r,vt,Hr,rs,Cr,Er,co,ws;return b=new Tt({}),X=new Tt({}),z=new Tt({}),ne=new ze({props:{name:"class transformers.HubertConfig",anchor:"transformers.HubertConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_layer_norm",val:" = True"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/hubert/configuration_hubert.py#L29",parametersDescription:[{anchor:"transformers.HubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Hubert model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>. Vocabulary size of the model.
Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of
<a href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.HubertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.HubertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.HubertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.HubertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.HubertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.HubertConfig.hidden_dropout(float,",description:`<strong>hidden_dropout(<code>float</code>,</strong> <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout(float,"},{anchor:"transformers.HubertConfig.attention_dropout(float,",description:`<strong>attention_dropout(<code>float</code>,</strong> <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout(float,"},{anchor:"transformers.HubertConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for the final projection layer of <a href="/docs/transformers/v4.14.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.HubertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.HubertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.HubertConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature extractor. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.HubertConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature extractor.`,name:"feat_proj_dropout"},{anchor:"transformers.HubertConfig.feat_proj_layer_norm",description:`<strong>feat_proj_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply LayerNorm to the output of the feature extractor.`,name:"feat_proj_layer_norm"},{anchor:"transformers.HubertConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.HubertConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature extractor. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.HubertConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature extractor. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.HubertConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature extractor. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.HubertConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.HubertConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.HubertConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.HubertConfig.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether do apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.HubertConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature extractor. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.HubertConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask<em>time_prob*len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, _mask_time_prob</em> should be <code>prob_vector_start*mask_time_length</code>. Note that overlap may decrease
the actual percentage of masked vectors. This is only relevant if <code>apply_spec_augment is True</code>.`,name:"mask_time_prob"},{anchor:"transformers.HubertConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.HubertConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt; mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.HubertConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask<em>feature_prob*len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, _mask_feature_prob</em> should be <code>prob_vector_start*mask_feature_length</code>. Note that
overlap may decrease the actual percentage of masked vectors. This is only relevant if <code>apply_spec_augment is True</code>.`,name:"mask_feature_prob"},{anchor:"transformers.HubertConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.HubertConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.HubertConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.HubertConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses
mainly occur when the inputs are too short to be aligned to the targets. Only relevant when training an
instance of <a href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.HubertConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertForSequenceClassification">HubertForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.HubertConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}]}}),wt=new zo({props:{code:`from transformers import HubertModel, HubertConfig

# Initializing a Hubert facebook/hubert-base-ls960 style configuration
configuration = HubertConfig()

# Initializing a model from the facebook/hubert-base-ls960 style configuration
model = HubertModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> HubertModel, HubertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Hubert facebook/hubert-base-ls960 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = HubertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/hubert-base-ls960 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),kt=new Tt({}),$t=new ze({props:{name:"class transformers.HubertModel",anchor:"transformers.HubertModel",parameters:[{name:"config",val:": HubertConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/hubert/modeling_hubert.py#L900",parametersDescription:[{anchor:"transformers.HubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Mt=new ze({props:{name:"forward",anchor:"transformers.HubertModel.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/hubert/modeling_hubert.py#L964",parametersDescription:[{anchor:"transformers.HubertModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.14.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/v4.14.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">transformers.Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dt=new uo({props:{$$slots:{default:[Wi]},$$scope:{ctx:A}}}),xt=new zo({props:{code:`from transformers import Wav2Vec2Processor, HubertModel
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/hubert-large-ls960-ft")
model = HubertModel.from_pretrained("facebook/hubert-large-ls960-ft")

def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(ds["speech"][0], return_tensors="pt").input_values  # Batch size 1
hidden_states = model(input_values).last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, HubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertModel.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),qt=new Tt({}),Pt=new ze({props:{name:"class transformers.HubertForCTC",anchor:"transformers.HubertForCTC",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/hubert/modeling_hubert.py#L1040",parametersDescription:[{anchor:"transformers.HubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ot=new ze({props:{name:"forward",anchor:"transformers.HubertForCTC.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/hubert/modeling_hubert.py#L1066",parametersDescription:[{anchor:"transformers.HubertForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.14.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/v4.14.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">transformers.Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pt=new uo({props:{$$slots:{default:[Bi]},$$scope:{ctx:A}}}),It=new zo({props:{code:`from transformers import Wav2Vec2Processor, HubertForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained('facebook/hubert-large-ls960-ft')
model = HubertForCTC.from_pretrained('facebook/hubert-large-ls960-ft')

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)

# compute loss
with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

loss = model(**inputs).loss,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, HubertForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&#x27;facebook/hubert-large-ls960-ft&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertForCTC.from_pretrained(<span class="hljs-string">&#x27;facebook/hubert-large-ls960-ft&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss`}}),Lt=new Tt({}),Nt=new ze({props:{name:"class transformers.HubertForSequenceClassification",anchor:"transformers.HubertForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/hubert/modeling_hubert.py#L1154",parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Kt=new ze({props:{name:"forward",anchor:"transformers.HubertForSequenceClassification.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/hubert/modeling_hubert.py#L1183",parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.14.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/v4.14.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">transformers.Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ut=new uo({props:{$$slots:{default:[Ri]},$$scope:{ctx:A}}}),Yt=new zo({props:{code:`from transformers import Wav2Vec2FeatureExtractor, HubertForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained('superb/hubert-base-superb-ks')
model = HubertForSequenceClassification.from_pretrained('superb/hubert-base-superb-ks')

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], return_tensors="pt")
logits = model(**inputs).logits
predicted_class_ids = torch.argmax(logits, dim=-1)
predicted_label = model.config.id2label[predicted_class_ids]

# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, HubertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&#x27;superb/hubert-base-superb-ks&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;superb/hubert-base-superb-ks&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss`}}),Jt=new Tt({}),Xt=new ze({props:{name:"class transformers.TFHubertModel",anchor:"transformers.TFHubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/hubert/modeling_tf_hubert.py#L1383",parametersDescription:[{anchor:"transformers.TFHubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),ft=new uo({props:{$$slots:{default:[Vi]},$$scope:{ctx:A}}}),eo=new ze({props:{name:"call",anchor:"transformers.TFHubertModel.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/hubert/modeling_tf_hubert.py#L1389",parametersDescription:[{anchor:"transformers.TFHubertModel.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_values"},{anchor:"transformers.TFHubertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFHubertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFHubertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFHubertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFHubertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>input_values</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFHubertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFHubertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFHubertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFHubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>TFBaseModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape \`(batch_size, num_heads, sequence_length, sequence_length)\u201C.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gt=new uo({props:{$$slots:{default:[Ui]},$$scope:{ctx:A}}}),to=new zo({props:{code:`from transformers import Wav2Vec2Processor, TFHubertModel
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/hubert-base-960h")
model = TFHubertModel.from_pretrained("facebook/hubert-base-960h")

def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(ds["speech"][0], return_tensors="tf").input_values  # Batch size 1
hidden_states = model(input_values).last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, TFHubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFHubertModel.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),oo=new Tt({}),so=new ze({props:{name:"class transformers.TFHubertForCTC",anchor:"transformers.TFHubertForCTC",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/hubert/modeling_tf_hubert.py#L1478",parametersDescription:[{anchor:"transformers.TFHubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),bt=new uo({props:{$$slots:{default:[Ki]},$$scope:{ctx:A}}}),lo=new ze({props:{name:"call",anchor:"transformers.TFHubertForCTC.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/hubert/modeling_tf_hubert.py#L1493",parametersDescription:[{anchor:"transformers.TFHubertForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_values"},{anchor:"transformers.TFHubertForCTC.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFHubertForCTC.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFHubertForCTC.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFHubertForCTC.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFHubertForCTC.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>input_values</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFHubertForCTC.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFHubertForCTC.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFHubertForCTC.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFHubertForCTC.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFHubertForCTC.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_values</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>TFCausalLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape \`(batch_size, num_heads, sequence_length, sequence_length)\u201C.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vt=new uo({props:{$$slots:{default:[Yi]},$$scope:{ctx:A}}}),co=new zo({props:{code:`import tensorflow as tf
from transformers import Wav2Vec2Processor, TFHubertForCTC
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/hubert-base-960h")
model = TFHubertForCTC.from_pretrained("facebook/hubert-base-960h")

def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(ds["speech"][0], return_tensors="tf").input_values # Batch size 1
logits = model(input_values).logits >>> predicted_ids = tf.argmax(logits, axis=-1)

transcription = processor.decode(predicted_ids[0])

# compute loss
target_transcription = "A MAN SAID TO THE UNIVERSE SIR I EXIST"

# wrap processor as target processor to encode labels
with processor.as_target_processor():
    labels = processor(transcription, return_tensors="tf").input_values

loss = model(input_values, labels=labels).loss,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, TFHubertForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFHubertForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_values).logits &gt;&gt;&gt; predicted_ids = tf.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.decode(predicted_ids[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_transcription = <span class="hljs-string">&quot;A MAN SAID TO THE UNIVERSE SIR I EXIST&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># wrap processor as target processor to encode labels</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    labels = processor(transcription, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`}}),{c(){p=a("meta"),T=l(),f=a("h1"),g=a("a"),v=a("span"),k(b.$$.fragment),_=l(),w=a("span"),Ee=s("Hubert"),ie=l(),F=a("h2"),K=a("a"),O=a("span"),k(X.$$.fragment),je=l(),I=a("span"),Fe=s("Overview"),ye=l(),D=a("p"),L=s("Hubert was proposed in "),G=a("a"),_e=s("HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),M=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`),q=l(),le=a("p"),Q=s("The abstract from the paper is the following:"),we=l(),de=a("p"),N=a("em"),Me=s(`Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
multiple sound units in each input utterance, (2) there is no lexicon of input sound units during the pre-training
phase, and (3) sound units have variable lengths with no explicit segmentation. To deal with these three problems, we
propose the Hidden-Unit BERT (HuBERT) approach for self-supervised speech representation learning, which utilizes an
offline clustering step to provide aligned target labels for a BERT-like prediction loss. A key ingredient of our
approach is applying the prediction loss over the masked regions only, which forces the model to learn a combined
acoustic and language model over the continuous inputs. HuBERT relies primarily on the consistency of the unsupervised
clustering step rather than the intrinsic quality of the assigned cluster labels. Starting with a simple k-means
teacher of 100 clusters, and using two iterations of clustering, the HuBERT model either matches or improves upon the
state-of-the-art wav2vec 2.0 performance on the Librispeech (960h) and Libri-light (60,000h) benchmarks with 10min, 1h,
10h, 100h, and 960h fine-tuning subsets. Using a 1B parameter model, HuBERT shows up to 19% and 13% relative WER
reduction on the more challenging dev-other and test-other evaluation subsets.`),ke=l(),x=a("p"),xe=s("Tips:"),Y=l(),J=a("ul"),be=a("li"),Z=s("Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),qe=l(),ee=a("li"),W=s(`Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),ce=a("a"),te=s("Wav2Vec2CTCTokenizer"),Pe=s("."),h=l(),y=a("p"),ve=s("This model was contributed by "),Te=a("a"),Ue=s("patrickvonplaten"),B=s("."),De=l(),oe=a("h2"),pe=a("a"),S=a("span"),k(z.$$.fragment),Ke=l(),Se=a("span"),se=s("HubertConfig"),Ae=l(),P=a("div"),k(ne.$$.fragment),Ye=l(),Je=a("p"),Us=s("This is the configuration class to store the configuration of a "),mo=a("a"),Ks=s("HubertModel"),Ys=s(`. It is used to
instantiate an Hubert model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Hubert
`),yt=a("a"),Js=s("facebook/hubert-base-ls960"),Xs=s(" architecture."),Gs=l(),Xe=a("p"),Qs=s("Configuration objects inherit from "),fo=a("a"),Zs=s("PretrainedConfig"),en=s(` and can be used to control the model
outputs. Read the documentation from `),go=a("a"),tn=s("PretrainedConfig"),on=s(" for more information."),sn=l(),Do=a("p"),nn=s("Example:"),an=l(),k(wt.$$.fragment),hs=l(),Ge=a("h2"),lt=a("a"),Ao=a("span"),k(kt.$$.fragment),rn=l(),Oo=a("span"),ln=s("HubertModel"),us=l(),ae=a("div"),k($t.$$.fragment),dn=l(),Ht=a("p"),cn=s(`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in `),Ct=a("a"),pn=s("HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),hn=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),un=l(),Et=a("p"),mn=s("This model inherits from "),_o=a("a"),fn=s("PreTrainedModel"),gn=s(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),_n=l(),jt=a("p"),bn=s("This model is a PyTorch "),Ft=a("a"),vn=s("torch.nn.Module"),Tn=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yn=l(),he=a("div"),k(Mt.$$.fragment),wn=l(),Qe=a("p"),kn=s("The "),bo=a("a"),$n=s("HubertModel"),Hn=s(" forward method, overrides the "),Io=a("code"),Cn=s("__call__"),En=s(" special method."),jn=l(),k(dt.$$.fragment),Fn=l(),Lo=a("p"),Mn=s("Example:"),xn=l(),k(xt.$$.fragment),ms=l(),Ze=a("h2"),ct=a("a"),No=a("span"),k(qt.$$.fragment),qn=l(),Wo=a("span"),Pn=s("HubertForCTC"),fs=l(),re=a("div"),k(Pt.$$.fragment),Sn=l(),et=a("p"),zn=s("Hubert Model with a "),Bo=a("em"),Dn=s("language modeling"),An=s(` head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in `),St=a("a"),On=s("HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),In=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Ln=l(),zt=a("p"),Nn=s("This model inherits from "),vo=a("a"),Wn=s("PreTrainedModel"),Bn=s(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),Rn=l(),Dt=a("p"),Vn=s("This model is a PyTorch "),At=a("a"),Un=s("torch.nn.Module"),Kn=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yn=l(),ue=a("div"),k(Ot.$$.fragment),Jn=l(),tt=a("p"),Xn=s("The "),To=a("a"),Gn=s("HubertForCTC"),Qn=s(" forward method, overrides the "),Ro=a("code"),Zn=s("__call__"),ea=s(" special method."),ta=l(),k(pt.$$.fragment),oa=l(),Vo=a("p"),sa=s("Example:"),na=l(),k(It.$$.fragment),gs=l(),ot=a("h2"),ht=a("a"),Uo=a("span"),k(Lt.$$.fragment),aa=l(),Ko=a("span"),ra=s("HubertForSequenceClassification"),_s=l(),R=a("div"),k(Nt.$$.fragment),ia=l(),Yo=a("p"),la=s(`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),da=l(),Wt=a("p"),ca=s("Hubert was proposed in "),Bt=a("a"),pa=s("HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),ha=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),ua=l(),Rt=a("p"),ma=s("This model inherits from "),yo=a("a"),fa=s("PreTrainedModel"),ga=s(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),_a=l(),Vt=a("p"),ba=s("This model is a PyTorch "),Ut=a("a"),va=s("torch.nn.Module"),Ta=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ya=l(),me=a("div"),k(Kt.$$.fragment),wa=l(),st=a("p"),ka=s("The "),wo=a("a"),$a=s("HubertForSequenceClassification"),Ha=s(" forward method, overrides the "),Jo=a("code"),Ca=s("__call__"),Ea=s(" special method."),ja=l(),k(ut.$$.fragment),Fa=l(),Xo=a("p"),Ma=s("Example:"),xa=l(),k(Yt.$$.fragment),bs=l(),nt=a("h2"),mt=a("a"),Go=a("span"),k(Jt.$$.fragment),qa=l(),Qo=a("span"),Pa=s("TFHubertModel"),vs=l(),V=a("div"),k(Xt.$$.fragment),Sa=l(),Zo=a("p"),za=s("The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top."),Da=l(),Gt=a("p"),Aa=s("This model inherits from "),ko=a("a"),Oa=s("TFPreTrainedModel"),Ia=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),La=l(),Qt=a("p"),Na=s("This model is also a "),Zt=a("a"),Wa=s("tf.keras.Model"),Ba=s(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ra=l(),k(ft.$$.fragment),Va=l(),fe=a("div"),k(eo.$$.fragment),Ua=l(),at=a("p"),Ka=s("The "),$o=a("a"),Ya=s("TFHubertModel"),Ja=s(" forward method, overrides the "),es=a("code"),Xa=s("__call__"),Ga=s(" special method."),Qa=l(),k(gt.$$.fragment),Za=l(),ts=a("p"),er=s("Example:"),tr=l(),k(to.$$.fragment),Ts=l(),rt=a("h2"),_t=a("a"),os=a("span"),k(oo.$$.fragment),or=l(),ss=a("span"),sr=s("TFHubertForCTC"),ys=l(),U=a("div"),k(so.$$.fragment),nr=l(),no=a("p"),ar=s("TFHubert Model with a "),ns=a("em"),rr=s("language modeling"),ir=s(" head on top for Connectionist Temporal Classification (CTC)."),lr=l(),ao=a("p"),dr=s("This model inherits from "),Ho=a("a"),cr=s("TFPreTrainedModel"),pr=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),hr=l(),ro=a("p"),ur=s("This model is also a "),io=a("a"),mr=s("tf.keras.Model"),fr=s(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),gr=l(),k(bt.$$.fragment),_r=l(),ge=a("div"),k(lo.$$.fragment),br=l(),it=a("p"),vr=s("The "),Co=a("a"),Tr=s("TFHubertForCTC"),yr=s(" forward method, overrides the "),as=a("code"),wr=s("__call__"),kr=s(" special method."),$r=l(),k(vt.$$.fragment),Hr=l(),rs=a("p"),Cr=s("Example:"),Er=l(),k(co.$$.fragment),this.h()},l(o){const m=Ni('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(t),T=d(o),f=r(o,"H1",{class:!0});var po=i(f);g=r(po,"A",{id:!0,class:!0,href:!0});var is=i(g);v=r(is,"SPAN",{});var ls=i(v);$(b.$$.fragment,ls),ls.forEach(t),is.forEach(t),_=d(po),w=r(po,"SPAN",{});var ds=i(w);Ee=n(ds,"Hubert"),ds.forEach(t),po.forEach(t),ie=d(o),F=r(o,"H2",{class:!0});var ho=i(F);K=r(ho,"A",{id:!0,class:!0,href:!0});var cs=i(K);O=r(cs,"SPAN",{});var ps=i(O);$(X.$$.fragment,ps),ps.forEach(t),cs.forEach(t),je=d(ho),I=r(ho,"SPAN",{});var jr=i(I);Fe=n(jr,"Overview"),jr.forEach(t),ho.forEach(t),ye=d(o),D=r(o,"P",{});var ks=i(D);L=n(ks,"Hubert was proposed in "),G=r(ks,"A",{href:!0,rel:!0});var Fr=i(G);_e=n(Fr,"HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),Fr.forEach(t),M=n(ks,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`),ks.forEach(t),q=d(o),le=r(o,"P",{});var Mr=i(le);Q=n(Mr,"The abstract from the paper is the following:"),Mr.forEach(t),we=d(o),de=r(o,"P",{});var xr=i(de);N=r(xr,"EM",{});var qr=i(N);Me=n(qr,`Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
multiple sound units in each input utterance, (2) there is no lexicon of input sound units during the pre-training
phase, and (3) sound units have variable lengths with no explicit segmentation. To deal with these three problems, we
propose the Hidden-Unit BERT (HuBERT) approach for self-supervised speech representation learning, which utilizes an
offline clustering step to provide aligned target labels for a BERT-like prediction loss. A key ingredient of our
approach is applying the prediction loss over the masked regions only, which forces the model to learn a combined
acoustic and language model over the continuous inputs. HuBERT relies primarily on the consistency of the unsupervised
clustering step rather than the intrinsic quality of the assigned cluster labels. Starting with a simple k-means
teacher of 100 clusters, and using two iterations of clustering, the HuBERT model either matches or improves upon the
state-of-the-art wav2vec 2.0 performance on the Librispeech (960h) and Libri-light (60,000h) benchmarks with 10min, 1h,
10h, 100h, and 960h fine-tuning subsets. Using a 1B parameter model, HuBERT shows up to 19% and 13% relative WER
reduction on the more challenging dev-other and test-other evaluation subsets.`),qr.forEach(t),xr.forEach(t),ke=d(o),x=r(o,"P",{});var Pr=i(x);xe=n(Pr,"Tips:"),Pr.forEach(t),Y=d(o),J=r(o,"UL",{});var $s=i(J);be=r($s,"LI",{});var Sr=i(be);Z=n(Sr,"Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Sr.forEach(t),qe=d($s),ee=r($s,"LI",{});var Hs=i(ee);W=n(Hs,`Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),ce=r(Hs,"A",{href:!0});var zr=i(ce);te=n(zr,"Wav2Vec2CTCTokenizer"),zr.forEach(t),Pe=n(Hs,"."),Hs.forEach(t),$s.forEach(t),h=d(o),y=r(o,"P",{});var Cs=i(y);ve=n(Cs,"This model was contributed by "),Te=r(Cs,"A",{href:!0,rel:!0});var Dr=i(Te);Ue=n(Dr,"patrickvonplaten"),Dr.forEach(t),B=n(Cs,"."),Cs.forEach(t),De=d(o),oe=r(o,"H2",{class:!0});var Es=i(oe);pe=r(Es,"A",{id:!0,class:!0,href:!0});var Ar=i(pe);S=r(Ar,"SPAN",{});var Or=i(S);$(z.$$.fragment,Or),Or.forEach(t),Ar.forEach(t),Ke=d(Es),Se=r(Es,"SPAN",{});var Ir=i(Se);se=n(Ir,"HubertConfig"),Ir.forEach(t),Es.forEach(t),Ae=d(o),P=r(o,"DIV",{class:!0});var Oe=i(P);$(ne.$$.fragment,Oe),Ye=d(Oe),Je=r(Oe,"P",{});var Eo=i(Je);Us=n(Eo,"This is the configuration class to store the configuration of a "),mo=r(Eo,"A",{href:!0});var Lr=i(mo);Ks=n(Lr,"HubertModel"),Lr.forEach(t),Ys=n(Eo,`. It is used to
instantiate an Hubert model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Hubert
`),yt=r(Eo,"A",{href:!0,rel:!0});var Nr=i(yt);Js=n(Nr,"facebook/hubert-base-ls960"),Nr.forEach(t),Xs=n(Eo," architecture."),Eo.forEach(t),Gs=d(Oe),Xe=r(Oe,"P",{});var jo=i(Xe);Qs=n(jo,"Configuration objects inherit from "),fo=r(jo,"A",{href:!0});var Wr=i(fo);Zs=n(Wr,"PretrainedConfig"),Wr.forEach(t),en=n(jo,` and can be used to control the model
outputs. Read the documentation from `),go=r(jo,"A",{href:!0});var Br=i(go);tn=n(Br,"PretrainedConfig"),Br.forEach(t),on=n(jo," for more information."),jo.forEach(t),sn=d(Oe),Do=r(Oe,"P",{});var Rr=i(Do);nn=n(Rr,"Example:"),Rr.forEach(t),an=d(Oe),$(wt.$$.fragment,Oe),Oe.forEach(t),hs=d(o),Ge=r(o,"H2",{class:!0});var js=i(Ge);lt=r(js,"A",{id:!0,class:!0,href:!0});var Vr=i(lt);Ao=r(Vr,"SPAN",{});var Ur=i(Ao);$(kt.$$.fragment,Ur),Ur.forEach(t),Vr.forEach(t),rn=d(js),Oo=r(js,"SPAN",{});var Kr=i(Oo);ln=n(Kr,"HubertModel"),Kr.forEach(t),js.forEach(t),us=d(o),ae=r(o,"DIV",{class:!0});var Ie=i(ae);$($t.$$.fragment,Ie),dn=d(Ie),Ht=r(Ie,"P",{});var Fs=i(Ht);cn=n(Fs,`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in `),Ct=r(Fs,"A",{href:!0,rel:!0});var Yr=i(Ct);pn=n(Yr,"HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),Yr.forEach(t),hn=n(Fs,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Fs.forEach(t),un=d(Ie),Et=r(Ie,"P",{});var Ms=i(Et);mn=n(Ms,"This model inherits from "),_o=r(Ms,"A",{href:!0});var Jr=i(_o);fn=n(Jr,"PreTrainedModel"),Jr.forEach(t),gn=n(Ms,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),Ms.forEach(t),_n=d(Ie),jt=r(Ie,"P",{});var xs=i(jt);bn=n(xs,"This model is a PyTorch "),Ft=r(xs,"A",{href:!0,rel:!0});var Xr=i(Ft);vn=n(Xr,"torch.nn.Module"),Xr.forEach(t),Tn=n(xs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xs.forEach(t),yn=d(Ie),he=r(Ie,"DIV",{class:!0});var Le=i(he);$(Mt.$$.fragment,Le),wn=d(Le),Qe=r(Le,"P",{});var Fo=i(Qe);kn=n(Fo,"The "),bo=r(Fo,"A",{href:!0});var Gr=i(bo);$n=n(Gr,"HubertModel"),Gr.forEach(t),Hn=n(Fo," forward method, overrides the "),Io=r(Fo,"CODE",{});var Qr=i(Io);Cn=n(Qr,"__call__"),Qr.forEach(t),En=n(Fo," special method."),Fo.forEach(t),jn=d(Le),$(dt.$$.fragment,Le),Fn=d(Le),Lo=r(Le,"P",{});var Zr=i(Lo);Mn=n(Zr,"Example:"),Zr.forEach(t),xn=d(Le),$(xt.$$.fragment,Le),Le.forEach(t),Ie.forEach(t),ms=d(o),Ze=r(o,"H2",{class:!0});var qs=i(Ze);ct=r(qs,"A",{id:!0,class:!0,href:!0});var ei=i(ct);No=r(ei,"SPAN",{});var ti=i(No);$(qt.$$.fragment,ti),ti.forEach(t),ei.forEach(t),qn=d(qs),Wo=r(qs,"SPAN",{});var oi=i(Wo);Pn=n(oi,"HubertForCTC"),oi.forEach(t),qs.forEach(t),fs=d(o),re=r(o,"DIV",{class:!0});var Ne=i(re);$(Pt.$$.fragment,Ne),Sn=d(Ne),et=r(Ne,"P",{});var Mo=i(et);zn=n(Mo,"Hubert Model with a "),Bo=r(Mo,"EM",{});var si=i(Bo);Dn=n(si,"language modeling"),si.forEach(t),An=n(Mo,` head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in `),St=r(Mo,"A",{href:!0,rel:!0});var ni=i(St);On=n(ni,"HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),ni.forEach(t),In=n(Mo,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Mo.forEach(t),Ln=d(Ne),zt=r(Ne,"P",{});var Ps=i(zt);Nn=n(Ps,"This model inherits from "),vo=r(Ps,"A",{href:!0});var ai=i(vo);Wn=n(ai,"PreTrainedModel"),ai.forEach(t),Bn=n(Ps,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),Ps.forEach(t),Rn=d(Ne),Dt=r(Ne,"P",{});var Ss=i(Dt);Vn=n(Ss,"This model is a PyTorch "),At=r(Ss,"A",{href:!0,rel:!0});var ri=i(At);Un=n(ri,"torch.nn.Module"),ri.forEach(t),Kn=n(Ss,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ss.forEach(t),Yn=d(Ne),ue=r(Ne,"DIV",{class:!0});var We=i(ue);$(Ot.$$.fragment,We),Jn=d(We),tt=r(We,"P",{});var xo=i(tt);Xn=n(xo,"The "),To=r(xo,"A",{href:!0});var ii=i(To);Gn=n(ii,"HubertForCTC"),ii.forEach(t),Qn=n(xo," forward method, overrides the "),Ro=r(xo,"CODE",{});var li=i(Ro);Zn=n(li,"__call__"),li.forEach(t),ea=n(xo," special method."),xo.forEach(t),ta=d(We),$(pt.$$.fragment,We),oa=d(We),Vo=r(We,"P",{});var di=i(Vo);sa=n(di,"Example:"),di.forEach(t),na=d(We),$(It.$$.fragment,We),We.forEach(t),Ne.forEach(t),gs=d(o),ot=r(o,"H2",{class:!0});var zs=i(ot);ht=r(zs,"A",{id:!0,class:!0,href:!0});var ci=i(ht);Uo=r(ci,"SPAN",{});var pi=i(Uo);$(Lt.$$.fragment,pi),pi.forEach(t),ci.forEach(t),aa=d(zs),Ko=r(zs,"SPAN",{});var hi=i(Ko);ra=n(hi,"HubertForSequenceClassification"),hi.forEach(t),zs.forEach(t),_s=d(o),R=r(o,"DIV",{class:!0});var $e=i(R);$(Nt.$$.fragment,$e),ia=d($e),Yo=r($e,"P",{});var ui=i(Yo);la=n(ui,`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),ui.forEach(t),da=d($e),Wt=r($e,"P",{});var Ds=i(Wt);ca=n(Ds,"Hubert was proposed in "),Bt=r(Ds,"A",{href:!0,rel:!0});var mi=i(Bt);pa=n(mi,"HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),mi.forEach(t),ha=n(Ds,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Ds.forEach(t),ua=d($e),Rt=r($e,"P",{});var As=i(Rt);ma=n(As,"This model inherits from "),yo=r(As,"A",{href:!0});var fi=i(yo);fa=n(fi,"PreTrainedModel"),fi.forEach(t),ga=n(As,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),As.forEach(t),_a=d($e),Vt=r($e,"P",{});var Os=i(Vt);ba=n(Os,"This model is a PyTorch "),Ut=r(Os,"A",{href:!0,rel:!0});var gi=i(Ut);va=n(gi,"torch.nn.Module"),gi.forEach(t),Ta=n(Os,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Os.forEach(t),ya=d($e),me=r($e,"DIV",{class:!0});var Be=i(me);$(Kt.$$.fragment,Be),wa=d(Be),st=r(Be,"P",{});var qo=i(st);ka=n(qo,"The "),wo=r(qo,"A",{href:!0});var _i=i(wo);$a=n(_i,"HubertForSequenceClassification"),_i.forEach(t),Ha=n(qo," forward method, overrides the "),Jo=r(qo,"CODE",{});var bi=i(Jo);Ca=n(bi,"__call__"),bi.forEach(t),Ea=n(qo," special method."),qo.forEach(t),ja=d(Be),$(ut.$$.fragment,Be),Fa=d(Be),Xo=r(Be,"P",{});var vi=i(Xo);Ma=n(vi,"Example:"),vi.forEach(t),xa=d(Be),$(Yt.$$.fragment,Be),Be.forEach(t),$e.forEach(t),bs=d(o),nt=r(o,"H2",{class:!0});var Is=i(nt);mt=r(Is,"A",{id:!0,class:!0,href:!0});var Ti=i(mt);Go=r(Ti,"SPAN",{});var yi=i(Go);$(Jt.$$.fragment,yi),yi.forEach(t),Ti.forEach(t),qa=d(Is),Qo=r(Is,"SPAN",{});var wi=i(Qo);Pa=n(wi,"TFHubertModel"),wi.forEach(t),Is.forEach(t),vs=d(o),V=r(o,"DIV",{class:!0});var He=i(V);$(Xt.$$.fragment,He),Sa=d(He),Zo=r(He,"P",{});var ki=i(Zo);za=n(ki,"The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top."),ki.forEach(t),Da=d(He),Gt=r(He,"P",{});var Ls=i(Gt);Aa=n(Ls,"This model inherits from "),ko=r(Ls,"A",{href:!0});var $i=i(ko);Oa=n($i,"TFPreTrainedModel"),$i.forEach(t),Ia=n(Ls,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ls.forEach(t),La=d(He),Qt=r(He,"P",{});var Ns=i(Qt);Na=n(Ns,"This model is also a "),Zt=r(Ns,"A",{href:!0,rel:!0});var Hi=i(Zt);Wa=n(Hi,"tf.keras.Model"),Hi.forEach(t),Ba=n(Ns,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ns.forEach(t),Ra=d(He),$(ft.$$.fragment,He),Va=d(He),fe=r(He,"DIV",{class:!0});var Re=i(fe);$(eo.$$.fragment,Re),Ua=d(Re),at=r(Re,"P",{});var Po=i(at);Ka=n(Po,"The "),$o=r(Po,"A",{href:!0});var Ci=i($o);Ya=n(Ci,"TFHubertModel"),Ci.forEach(t),Ja=n(Po," forward method, overrides the "),es=r(Po,"CODE",{});var Ei=i(es);Xa=n(Ei,"__call__"),Ei.forEach(t),Ga=n(Po," special method."),Po.forEach(t),Qa=d(Re),$(gt.$$.fragment,Re),Za=d(Re),ts=r(Re,"P",{});var ji=i(ts);er=n(ji,"Example:"),ji.forEach(t),tr=d(Re),$(to.$$.fragment,Re),Re.forEach(t),He.forEach(t),Ts=d(o),rt=r(o,"H2",{class:!0});var Ws=i(rt);_t=r(Ws,"A",{id:!0,class:!0,href:!0});var Fi=i(_t);os=r(Fi,"SPAN",{});var Mi=i(os);$(oo.$$.fragment,Mi),Mi.forEach(t),Fi.forEach(t),or=d(Ws),ss=r(Ws,"SPAN",{});var xi=i(ss);sr=n(xi,"TFHubertForCTC"),xi.forEach(t),Ws.forEach(t),ys=d(o),U=r(o,"DIV",{class:!0});var Ce=i(U);$(so.$$.fragment,Ce),nr=d(Ce),no=r(Ce,"P",{});var Bs=i(no);ar=n(Bs,"TFHubert Model with a "),ns=r(Bs,"EM",{});var qi=i(ns);rr=n(qi,"language modeling"),qi.forEach(t),ir=n(Bs," head on top for Connectionist Temporal Classification (CTC)."),Bs.forEach(t),lr=d(Ce),ao=r(Ce,"P",{});var Rs=i(ao);dr=n(Rs,"This model inherits from "),Ho=r(Rs,"A",{href:!0});var Pi=i(Ho);cr=n(Pi,"TFPreTrainedModel"),Pi.forEach(t),pr=n(Rs,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Rs.forEach(t),hr=d(Ce),ro=r(Ce,"P",{});var Vs=i(ro);ur=n(Vs,"This model is also a "),io=r(Vs,"A",{href:!0,rel:!0});var Si=i(io);mr=n(Si,"tf.keras.Model"),Si.forEach(t),fr=n(Vs,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Vs.forEach(t),gr=d(Ce),$(bt.$$.fragment,Ce),_r=d(Ce),ge=r(Ce,"DIV",{class:!0});var Ve=i(ge);$(lo.$$.fragment,Ve),br=d(Ve),it=r(Ve,"P",{});var So=i(it);vr=n(So,"The "),Co=r(So,"A",{href:!0});var zi=i(Co);Tr=n(zi,"TFHubertForCTC"),zi.forEach(t),yr=n(So," forward method, overrides the "),as=r(So,"CODE",{});var Di=i(as);wr=n(Di,"__call__"),Di.forEach(t),kr=n(So," special method."),So.forEach(t),$r=d(Ve),$(vt.$$.fragment,Ve),Hr=d(Ve),rs=r(Ve,"P",{});var Ai=i(rs);Cr=n(Ai,"Example:"),Ai.forEach(t),Er=d(Ve),$(co.$$.fragment,Ve),Ve.forEach(t),Ce.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Xi)),c(g,"id","hubert"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#hubert"),c(f,"class","relative group"),c(K,"id","overview"),c(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(K,"href","#overview"),c(F,"class","relative group"),c(G,"href","https://arxiv.org/abs/2106.07447"),c(G,"rel","nofollow"),c(ce,"href","/docs/transformers/v4.14.1/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),c(Te,"href","https://huggingface.co/patrickvonplaten"),c(Te,"rel","nofollow"),c(pe,"id","transformers.HubertConfig"),c(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pe,"href","#transformers.HubertConfig"),c(oe,"class","relative group"),c(mo,"href","/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertModel"),c(yt,"href","https://huggingface.co/facebook/hubert-base-ls960"),c(yt,"rel","nofollow"),c(fo,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(go,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(P,"class","docstring"),c(lt,"id","transformers.HubertModel"),c(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lt,"href","#transformers.HubertModel"),c(Ge,"class","relative group"),c(Ct,"href","https://arxiv.org/abs/2106.07447"),c(Ct,"rel","nofollow"),c(_o,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(Ft,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ft,"rel","nofollow"),c(bo,"href","/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertModel"),c(he,"class","docstring"),c(ae,"class","docstring"),c(ct,"id","transformers.HubertForCTC"),c(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ct,"href","#transformers.HubertForCTC"),c(Ze,"class","relative group"),c(St,"href","https://arxiv.org/abs/2106.07447"),c(St,"rel","nofollow"),c(vo,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(At,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(At,"rel","nofollow"),c(To,"href","/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertForCTC"),c(ue,"class","docstring"),c(re,"class","docstring"),c(ht,"id","transformers.HubertForSequenceClassification"),c(ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ht,"href","#transformers.HubertForSequenceClassification"),c(ot,"class","relative group"),c(Bt,"href","https://arxiv.org/abs/2106.07447"),c(Bt,"rel","nofollow"),c(yo,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(Ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ut,"rel","nofollow"),c(wo,"href","/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.HubertForSequenceClassification"),c(me,"class","docstring"),c(R,"class","docstring"),c(mt,"id","transformers.TFHubertModel"),c(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mt,"href","#transformers.TFHubertModel"),c(nt,"class","relative group"),c(ko,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(Zt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Zt,"rel","nofollow"),c($o,"href","/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.TFHubertModel"),c(fe,"class","docstring"),c(V,"class","docstring"),c(_t,"id","transformers.TFHubertForCTC"),c(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_t,"href","#transformers.TFHubertForCTC"),c(rt,"class","relative group"),c(Ho,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(io,"rel","nofollow"),c(Co,"href","/docs/transformers/v4.14.1/en/model_doc/hubert#transformers.TFHubertForCTC"),c(ge,"class","docstring"),c(U,"class","docstring")},m(o,m){e(document.head,p),u(o,T,m),u(o,f,m),e(f,g),e(g,v),H(b,v,null),e(f,_),e(f,w),e(w,Ee),u(o,ie,m),u(o,F,m),e(F,K),e(K,O),H(X,O,null),e(F,je),e(F,I),e(I,Fe),u(o,ye,m),u(o,D,m),e(D,L),e(D,G),e(G,_e),e(D,M),u(o,q,m),u(o,le,m),e(le,Q),u(o,we,m),u(o,de,m),e(de,N),e(N,Me),u(o,ke,m),u(o,x,m),e(x,xe),u(o,Y,m),u(o,J,m),e(J,be),e(be,Z),e(J,qe),e(J,ee),e(ee,W),e(ee,ce),e(ce,te),e(ee,Pe),u(o,h,m),u(o,y,m),e(y,ve),e(y,Te),e(Te,Ue),e(y,B),u(o,De,m),u(o,oe,m),e(oe,pe),e(pe,S),H(z,S,null),e(oe,Ke),e(oe,Se),e(Se,se),u(o,Ae,m),u(o,P,m),H(ne,P,null),e(P,Ye),e(P,Je),e(Je,Us),e(Je,mo),e(mo,Ks),e(Je,Ys),e(Je,yt),e(yt,Js),e(Je,Xs),e(P,Gs),e(P,Xe),e(Xe,Qs),e(Xe,fo),e(fo,Zs),e(Xe,en),e(Xe,go),e(go,tn),e(Xe,on),e(P,sn),e(P,Do),e(Do,nn),e(P,an),H(wt,P,null),u(o,hs,m),u(o,Ge,m),e(Ge,lt),e(lt,Ao),H(kt,Ao,null),e(Ge,rn),e(Ge,Oo),e(Oo,ln),u(o,us,m),u(o,ae,m),H($t,ae,null),e(ae,dn),e(ae,Ht),e(Ht,cn),e(Ht,Ct),e(Ct,pn),e(Ht,hn),e(ae,un),e(ae,Et),e(Et,mn),e(Et,_o),e(_o,fn),e(Et,gn),e(ae,_n),e(ae,jt),e(jt,bn),e(jt,Ft),e(Ft,vn),e(jt,Tn),e(ae,yn),e(ae,he),H(Mt,he,null),e(he,wn),e(he,Qe),e(Qe,kn),e(Qe,bo),e(bo,$n),e(Qe,Hn),e(Qe,Io),e(Io,Cn),e(Qe,En),e(he,jn),H(dt,he,null),e(he,Fn),e(he,Lo),e(Lo,Mn),e(he,xn),H(xt,he,null),u(o,ms,m),u(o,Ze,m),e(Ze,ct),e(ct,No),H(qt,No,null),e(Ze,qn),e(Ze,Wo),e(Wo,Pn),u(o,fs,m),u(o,re,m),H(Pt,re,null),e(re,Sn),e(re,et),e(et,zn),e(et,Bo),e(Bo,Dn),e(et,An),e(et,St),e(St,On),e(et,In),e(re,Ln),e(re,zt),e(zt,Nn),e(zt,vo),e(vo,Wn),e(zt,Bn),e(re,Rn),e(re,Dt),e(Dt,Vn),e(Dt,At),e(At,Un),e(Dt,Kn),e(re,Yn),e(re,ue),H(Ot,ue,null),e(ue,Jn),e(ue,tt),e(tt,Xn),e(tt,To),e(To,Gn),e(tt,Qn),e(tt,Ro),e(Ro,Zn),e(tt,ea),e(ue,ta),H(pt,ue,null),e(ue,oa),e(ue,Vo),e(Vo,sa),e(ue,na),H(It,ue,null),u(o,gs,m),u(o,ot,m),e(ot,ht),e(ht,Uo),H(Lt,Uo,null),e(ot,aa),e(ot,Ko),e(Ko,ra),u(o,_s,m),u(o,R,m),H(Nt,R,null),e(R,ia),e(R,Yo),e(Yo,la),e(R,da),e(R,Wt),e(Wt,ca),e(Wt,Bt),e(Bt,pa),e(Wt,ha),e(R,ua),e(R,Rt),e(Rt,ma),e(Rt,yo),e(yo,fa),e(Rt,ga),e(R,_a),e(R,Vt),e(Vt,ba),e(Vt,Ut),e(Ut,va),e(Vt,Ta),e(R,ya),e(R,me),H(Kt,me,null),e(me,wa),e(me,st),e(st,ka),e(st,wo),e(wo,$a),e(st,Ha),e(st,Jo),e(Jo,Ca),e(st,Ea),e(me,ja),H(ut,me,null),e(me,Fa),e(me,Xo),e(Xo,Ma),e(me,xa),H(Yt,me,null),u(o,bs,m),u(o,nt,m),e(nt,mt),e(mt,Go),H(Jt,Go,null),e(nt,qa),e(nt,Qo),e(Qo,Pa),u(o,vs,m),u(o,V,m),H(Xt,V,null),e(V,Sa),e(V,Zo),e(Zo,za),e(V,Da),e(V,Gt),e(Gt,Aa),e(Gt,ko),e(ko,Oa),e(Gt,Ia),e(V,La),e(V,Qt),e(Qt,Na),e(Qt,Zt),e(Zt,Wa),e(Qt,Ba),e(V,Ra),H(ft,V,null),e(V,Va),e(V,fe),H(eo,fe,null),e(fe,Ua),e(fe,at),e(at,Ka),e(at,$o),e($o,Ya),e(at,Ja),e(at,es),e(es,Xa),e(at,Ga),e(fe,Qa),H(gt,fe,null),e(fe,Za),e(fe,ts),e(ts,er),e(fe,tr),H(to,fe,null),u(o,Ts,m),u(o,rt,m),e(rt,_t),e(_t,os),H(oo,os,null),e(rt,or),e(rt,ss),e(ss,sr),u(o,ys,m),u(o,U,m),H(so,U,null),e(U,nr),e(U,no),e(no,ar),e(no,ns),e(ns,rr),e(no,ir),e(U,lr),e(U,ao),e(ao,dr),e(ao,Ho),e(Ho,cr),e(ao,pr),e(U,hr),e(U,ro),e(ro,ur),e(ro,io),e(io,mr),e(ro,fr),e(U,gr),H(bt,U,null),e(U,_r),e(U,ge),H(lo,ge,null),e(ge,br),e(ge,it),e(it,vr),e(it,Co),e(Co,Tr),e(it,yr),e(it,as),e(as,wr),e(it,kr),e(ge,$r),H(vt,ge,null),e(ge,Hr),e(ge,rs),e(rs,Cr),e(ge,Er),H(co,ge,null),ws=!0},p(o,[m]){const po={};m&2&&(po.$$scope={dirty:m,ctx:o}),dt.$set(po);const is={};m&2&&(is.$$scope={dirty:m,ctx:o}),pt.$set(is);const ls={};m&2&&(ls.$$scope={dirty:m,ctx:o}),ut.$set(ls);const ds={};m&2&&(ds.$$scope={dirty:m,ctx:o}),ft.$set(ds);const ho={};m&2&&(ho.$$scope={dirty:m,ctx:o}),gt.$set(ho);const cs={};m&2&&(cs.$$scope={dirty:m,ctx:o}),bt.$set(cs);const ps={};m&2&&(ps.$$scope={dirty:m,ctx:o}),vt.$set(ps)},i(o){ws||(C(b.$$.fragment,o),C(X.$$.fragment,o),C(z.$$.fragment,o),C(ne.$$.fragment,o),C(wt.$$.fragment,o),C(kt.$$.fragment,o),C($t.$$.fragment,o),C(Mt.$$.fragment,o),C(dt.$$.fragment,o),C(xt.$$.fragment,o),C(qt.$$.fragment,o),C(Pt.$$.fragment,o),C(Ot.$$.fragment,o),C(pt.$$.fragment,o),C(It.$$.fragment,o),C(Lt.$$.fragment,o),C(Nt.$$.fragment,o),C(Kt.$$.fragment,o),C(ut.$$.fragment,o),C(Yt.$$.fragment,o),C(Jt.$$.fragment,o),C(Xt.$$.fragment,o),C(ft.$$.fragment,o),C(eo.$$.fragment,o),C(gt.$$.fragment,o),C(to.$$.fragment,o),C(oo.$$.fragment,o),C(so.$$.fragment,o),C(bt.$$.fragment,o),C(lo.$$.fragment,o),C(vt.$$.fragment,o),C(co.$$.fragment,o),ws=!0)},o(o){E(b.$$.fragment,o),E(X.$$.fragment,o),E(z.$$.fragment,o),E(ne.$$.fragment,o),E(wt.$$.fragment,o),E(kt.$$.fragment,o),E($t.$$.fragment,o),E(Mt.$$.fragment,o),E(dt.$$.fragment,o),E(xt.$$.fragment,o),E(qt.$$.fragment,o),E(Pt.$$.fragment,o),E(Ot.$$.fragment,o),E(pt.$$.fragment,o),E(It.$$.fragment,o),E(Lt.$$.fragment,o),E(Nt.$$.fragment,o),E(Kt.$$.fragment,o),E(ut.$$.fragment,o),E(Yt.$$.fragment,o),E(Jt.$$.fragment,o),E(Xt.$$.fragment,o),E(ft.$$.fragment,o),E(eo.$$.fragment,o),E(gt.$$.fragment,o),E(to.$$.fragment,o),E(oo.$$.fragment,o),E(so.$$.fragment,o),E(bt.$$.fragment,o),E(lo.$$.fragment,o),E(vt.$$.fragment,o),E(co.$$.fragment,o),ws=!1},d(o){t(p),o&&t(T),o&&t(f),j(b),o&&t(ie),o&&t(F),j(X),o&&t(ye),o&&t(D),o&&t(q),o&&t(le),o&&t(we),o&&t(de),o&&t(ke),o&&t(x),o&&t(Y),o&&t(J),o&&t(h),o&&t(y),o&&t(De),o&&t(oe),j(z),o&&t(Ae),o&&t(P),j(ne),j(wt),o&&t(hs),o&&t(Ge),j(kt),o&&t(us),o&&t(ae),j($t),j(Mt),j(dt),j(xt),o&&t(ms),o&&t(Ze),j(qt),o&&t(fs),o&&t(re),j(Pt),j(Ot),j(pt),j(It),o&&t(gs),o&&t(ot),j(Lt),o&&t(_s),o&&t(R),j(Nt),j(Kt),j(ut),j(Yt),o&&t(bs),o&&t(nt),j(Jt),o&&t(vs),o&&t(V),j(Xt),j(ft),j(eo),j(gt),j(to),o&&t(Ts),o&&t(rt),j(oo),o&&t(ys),o&&t(U),j(so),j(bt),j(lo),j(vt),j(co)}}}const Xi={local:"hubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.HubertConfig",title:"HubertConfig"},{local:"transformers.HubertModel",title:"HubertModel"},{local:"transformers.HubertForCTC",title:"HubertForCTC"},{local:"transformers.HubertForSequenceClassification",title:"HubertForSequenceClassification"},{local:"transformers.TFHubertModel",title:"TFHubertModel"},{local:"transformers.TFHubertForCTC",title:"TFHubertForCTC"}],title:"Hubert"};function Gi(A,p,T){let{fw:f}=p;return A.$$set=g=>{"fw"in g&&T(0,f=g.fw)},[f]}class nl extends Oi{constructor(p){super();Ii(this,p,Gi,Ji,Li,{fw:0})}}export{nl as default,Xi as metadata};
