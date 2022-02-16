import{S as Oi,i as Wi,s as Ii,e as a,k as l,w as k,t as s,L as Li,c as r,d as t,m as d,a as i,x as C,h as n,b as c,J as e,g as h,y as H,q as $,o as E,B as F}from"../../../chunks/vendor-b1433968.js";import{T as ho}from"../../../chunks/Tip-c3840994.js";import{D as ze}from"../../../chunks/Docstring-ff504c58.js";import{C as zo}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as yt}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function Ni(A){let p,y,f,g,v;return{c(){p=a("p"),y=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);y=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var T=i(f);g=n(T,"Module"),T.forEach(t),v=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){h(b,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Bi(A){let p,y,f,g,v;return{c(){p=a("p"),y=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);y=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var T=i(f);g=n(T,"Module"),T.forEach(t),v=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){h(b,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Ri(A){let p,y,f,g,v;return{c(){p=a("p"),y=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);y=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var T=i(f);g=n(T,"Module"),T.forEach(t),v=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){h(b,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Vi(A){let p,y,f,g,v,b,_,T,Ee,ie,j,K,O,X,Fe,W,je,we,D,I,G,_e,x,q,le,Q,Te,de,L,xe,ke,M,Me,Y,J,be,Z,qe,ee,N,ce,te,Pe;return{c(){p=a("p"),y=s("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),b=s("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),T=a("li"),Ee=s("having all inputs as a list, tuple or dict in the first positional arguments."),ie=l(),j=a("p"),K=s("This second option is useful when using "),O=a("code"),X=s("tf.keras.Model.fit"),Fe=s(` method which currently requires having all
the tensors in the first argument of the model call function: `),W=a("code"),je=s("model(inputs)"),we=s("."),D=l(),I=a("p"),G=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),_e=l(),x=a("ul"),q=a("li"),le=s("a single Tensor with "),Q=a("code"),Te=s("input_values"),de=s(" only and nothing else: "),L=a("code"),xe=s("model(inputs_ids)"),ke=l(),M=a("li"),Me=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),J=s("model([input_values, attention_mask])"),be=s(" or "),Z=a("code"),qe=s("model([input_values, attention_mask, token_type_ids])"),ee=l(),N=a("li"),ce=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=a("code"),Pe=s('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(u){p=r(u,"P",{});var w=i(p);y=n(w,"TF 2.0 models accepts two formats as inputs:"),w.forEach(t),f=d(u),g=r(u,"UL",{});var ve=i(g);v=r(ve,"LI",{});var ye=i(v);b=n(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(ve),T=r(ve,"LI",{});var Ue=i(T);Ee=n(Ue,"having all inputs as a list, tuple or dict in the first positional arguments."),Ue.forEach(t),ve.forEach(t),ie=d(u),j=r(u,"P",{});var B=i(j);K=n(B,"This second option is useful when using "),O=r(B,"CODE",{});var De=i(O);X=n(De,"tf.keras.Model.fit"),De.forEach(t),Fe=n(B,` method which currently requires having all
the tensors in the first argument of the model call function: `),W=r(B,"CODE",{});var oe=i(W);je=n(oe,"model(inputs)"),oe.forEach(t),we=n(B,"."),B.forEach(t),D=d(u),I=r(u,"P",{});var pe=i(I);G=n(pe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),pe.forEach(t),_e=d(u),x=r(u,"UL",{});var S=i(x);q=r(S,"LI",{});var z=i(q);le=n(z,"a single Tensor with "),Q=r(z,"CODE",{});var Ke=i(Q);Te=n(Ke,"input_values"),Ke.forEach(t),de=n(z," only and nothing else: "),L=r(z,"CODE",{});var Se=i(L);xe=n(Se,"model(inputs_ids)"),Se.forEach(t),z.forEach(t),ke=d(S),M=r(S,"LI",{});var se=i(M);Me=n(se,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(se,"CODE",{});var Ae=i(Y);J=n(Ae,"model([input_values, attention_mask])"),Ae.forEach(t),be=n(se," or "),Z=r(se,"CODE",{});var P=i(Z);qe=n(P,"model([input_values, attention_mask, token_type_ids])"),P.forEach(t),se.forEach(t),ee=d(S),N=r(S,"LI",{});var ne=i(N);ce=n(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=r(ne,"CODE",{});var Ye=i(te);Pe=n(Ye,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Ye.forEach(t),ne.forEach(t),S.forEach(t)},m(u,w){h(u,p,w),e(p,y),h(u,f,w),h(u,g,w),e(g,v),e(v,b),e(g,_),e(g,T),e(T,Ee),h(u,ie,w),h(u,j,w),e(j,K),e(j,O),e(O,X),e(j,Fe),e(j,W),e(W,je),e(j,we),h(u,D,w),h(u,I,w),e(I,G),h(u,_e,w),h(u,x,w),e(x,q),e(q,le),e(q,Q),e(Q,Te),e(q,de),e(q,L),e(L,xe),e(x,ke),e(x,M),e(M,Me),e(M,Y),e(Y,J),e(M,be),e(M,Z),e(Z,qe),e(x,ee),e(x,N),e(N,ce),e(N,te),e(te,Pe)},d(u){u&&t(p),u&&t(f),u&&t(g),u&&t(ie),u&&t(j),u&&t(D),u&&t(I),u&&t(_e),u&&t(x)}}}function Ui(A){let p,y,f,g,v;return{c(){p=a("p"),y=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);y=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var T=i(f);g=n(T,"Module"),T.forEach(t),v=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){h(b,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Ki(A){let p,y,f,g,v,b,_,T,Ee,ie,j,K,O,X,Fe,W,je,we,D,I,G,_e,x,q,le,Q,Te,de,L,xe,ke,M,Me,Y,J,be,Z,qe,ee,N,ce,te,Pe;return{c(){p=a("p"),y=s("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),b=s("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),T=a("li"),Ee=s("having all inputs as a list, tuple or dict in the first positional arguments."),ie=l(),j=a("p"),K=s("This second option is useful when using "),O=a("code"),X=s("tf.keras.Model.fit"),Fe=s(` method which currently requires having all
the tensors in the first argument of the model call function: `),W=a("code"),je=s("model(inputs)"),we=s("."),D=l(),I=a("p"),G=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),_e=l(),x=a("ul"),q=a("li"),le=s("a single Tensor with "),Q=a("code"),Te=s("input_values"),de=s(" only and nothing else: "),L=a("code"),xe=s("model(inputs_ids)"),ke=l(),M=a("li"),Me=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),J=s("model([input_values, attention_mask])"),be=s(" or "),Z=a("code"),qe=s("model([input_values, attention_mask, token_type_ids])"),ee=l(),N=a("li"),ce=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=a("code"),Pe=s('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(u){p=r(u,"P",{});var w=i(p);y=n(w,"TF 2.0 models accepts two formats as inputs:"),w.forEach(t),f=d(u),g=r(u,"UL",{});var ve=i(g);v=r(ve,"LI",{});var ye=i(v);b=n(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(ve),T=r(ve,"LI",{});var Ue=i(T);Ee=n(Ue,"having all inputs as a list, tuple or dict in the first positional arguments."),Ue.forEach(t),ve.forEach(t),ie=d(u),j=r(u,"P",{});var B=i(j);K=n(B,"This second option is useful when using "),O=r(B,"CODE",{});var De=i(O);X=n(De,"tf.keras.Model.fit"),De.forEach(t),Fe=n(B,` method which currently requires having all
the tensors in the first argument of the model call function: `),W=r(B,"CODE",{});var oe=i(W);je=n(oe,"model(inputs)"),oe.forEach(t),we=n(B,"."),B.forEach(t),D=d(u),I=r(u,"P",{});var pe=i(I);G=n(pe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),pe.forEach(t),_e=d(u),x=r(u,"UL",{});var S=i(x);q=r(S,"LI",{});var z=i(q);le=n(z,"a single Tensor with "),Q=r(z,"CODE",{});var Ke=i(Q);Te=n(Ke,"input_values"),Ke.forEach(t),de=n(z," only and nothing else: "),L=r(z,"CODE",{});var Se=i(L);xe=n(Se,"model(inputs_ids)"),Se.forEach(t),z.forEach(t),ke=d(S),M=r(S,"LI",{});var se=i(M);Me=n(se,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(se,"CODE",{});var Ae=i(Y);J=n(Ae,"model([input_values, attention_mask])"),Ae.forEach(t),be=n(se," or "),Z=r(se,"CODE",{});var P=i(Z);qe=n(P,"model([input_values, attention_mask, token_type_ids])"),P.forEach(t),se.forEach(t),ee=d(S),N=r(S,"LI",{});var ne=i(N);ce=n(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=r(ne,"CODE",{});var Ye=i(te);Pe=n(Ye,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Ye.forEach(t),ne.forEach(t),S.forEach(t)},m(u,w){h(u,p,w),e(p,y),h(u,f,w),h(u,g,w),e(g,v),e(v,b),e(g,_),e(g,T),e(T,Ee),h(u,ie,w),h(u,j,w),e(j,K),e(j,O),e(O,X),e(j,Fe),e(j,W),e(W,je),e(j,we),h(u,D,w),h(u,I,w),e(I,G),h(u,_e,w),h(u,x,w),e(x,q),e(q,le),e(q,Q),e(Q,Te),e(q,de),e(q,L),e(L,xe),e(x,ke),e(x,M),e(M,Me),e(M,Y),e(Y,J),e(M,be),e(M,Z),e(Z,qe),e(x,ee),e(x,N),e(N,ce),e(N,te),e(te,Pe)},d(u){u&&t(p),u&&t(f),u&&t(g),u&&t(ie),u&&t(j),u&&t(D),u&&t(I),u&&t(_e),u&&t(x)}}}function Yi(A){let p,y,f,g,v;return{c(){p=a("p"),y=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);y=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var T=i(f);g=n(T,"Module"),T.forEach(t),v=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){h(b,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Ji(A){let p,y,f,g,v,b,_,T,Ee,ie,j,K,O,X,Fe,W,je,we,D,I,G,_e,x,q,le,Q,Te,de,L,xe,ke,M,Me,Y,J,be,Z,qe,ee,N,ce,te,Pe,u,w,ve,ye,Ue,B,De,oe,pe,S,z,Ke,Se,se,Ae,P,ne,Ye,Je,Us,mo,Ks,Ys,wt,Js,Xs,Gs,Xe,Qs,fo,Zs,en,go,tn,on,sn,Do,nn,an,Tt,us,Ge,lt,Ao,kt,rn,Oo,ln,hs,ae,Ct,dn,Ht,cn,$t,pn,un,hn,Et,mn,_o,fn,gn,_n,Ft,bn,jt,vn,yn,wn,ue,xt,Tn,Qe,kn,bo,Cn,Hn,Wo,$n,En,Fn,dt,jn,Io,xn,Mn,Mt,ms,Ze,ct,Lo,qt,qn,No,Pn,fs,re,Pt,Sn,et,zn,Bo,Dn,An,St,On,Wn,In,zt,Ln,vo,Nn,Bn,Rn,Dt,Vn,At,Un,Kn,Yn,he,Ot,Jn,tt,Xn,yo,Gn,Qn,Ro,Zn,ea,ta,pt,oa,Vo,sa,na,Wt,gs,ot,ut,Uo,It,aa,Ko,ra,_s,R,Lt,ia,Yo,la,da,Nt,ca,Bt,pa,ua,ha,Rt,ma,wo,fa,ga,_a,Vt,ba,Ut,va,ya,wa,me,Kt,Ta,st,ka,To,Ca,Ha,Jo,$a,Ea,Fa,ht,ja,Xo,xa,Ma,Yt,bs,nt,mt,Go,Jt,qa,Qo,Pa,vs,V,Xt,Sa,Zo,za,Da,Gt,Aa,ko,Oa,Wa,Ia,Qt,La,Zt,Na,Ba,Ra,ft,Va,fe,eo,Ua,at,Ka,Co,Ya,Ja,es,Xa,Ga,Qa,gt,Za,ts,er,tr,to,ys,rt,_t,os,oo,or,ss,sr,ws,U,so,nr,no,ar,ns,rr,ir,lr,ao,dr,Ho,cr,pr,ur,ro,hr,io,mr,fr,gr,bt,_r,ge,lo,br,it,vr,$o,yr,wr,as,Tr,kr,Cr,vt,Hr,rs,$r,Er,co,Ts;return b=new yt({}),X=new yt({}),z=new yt({}),ne=new ze({props:{name:"class transformers.HubertConfig",anchor:"transformers.HubertConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_layer_norm",val:" = True"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/hubert/configuration_hubert.py#L29",parametersDescription:[{anchor:"transformers.HubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Hubert model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>. Vocabulary size of the model.
Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of
<a href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.HubertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.HubertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.HubertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.HubertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.HubertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.HubertConfig.hidden_dropout(float,",description:`<strong>hidden_dropout(<code>float</code>,</strong> <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout(float,"},{anchor:"transformers.HubertConfig.attention_dropout(float,",description:`<strong>attention_dropout(<code>float</code>,</strong> <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout(float,"},{anchor:"transformers.HubertConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for the final projection layer of <a href="/docs/transformers/v4.15.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.HubertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.HubertConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.HubertConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt; mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.HubertConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_feature_prob"},{anchor:"transformers.HubertConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.HubertConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.HubertConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.HubertConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses
mainly occur when the inputs are too short to be aligned to the targets. Only relevant when training an
instance of <a href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.HubertConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertForSequenceClassification">HubertForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.HubertConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}]}}),Tt=new zo({props:{code:`from transformers import HubertModel, HubertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),kt=new yt({}),Ct=new ze({props:{name:"class transformers.HubertModel",anchor:"transformers.HubertModel",parameters:[{name:"config",val:": HubertConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/hubert/modeling_hubert.py#L901",parametersDescription:[{anchor:"transformers.HubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),xt=new ze({props:{name:"forward",anchor:"transformers.HubertModel.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/hubert/modeling_hubert.py#L965",parametersDescription:[{anchor:"transformers.HubertModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.15.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/v4.15.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has
<code>config.return_attention_mask == True</code>. For all models whose processor has
<code>config.return_attention_mask == False</code>, such as <a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield
slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dt=new ho({props:{$$slots:{default:[Ni]},$$scope:{ctx:A}}}),Mt=new zo({props:{code:`from transformers import Wav2Vec2Processor, HubertModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),qt=new yt({}),Pt=new ze({props:{name:"class transformers.HubertForCTC",anchor:"transformers.HubertForCTC",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/hubert/modeling_hubert.py#L1042",parametersDescription:[{anchor:"transformers.HubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ot=new ze({props:{name:"forward",anchor:"transformers.HubertForCTC.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/hubert/modeling_hubert.py#L1068",parametersDescription:[{anchor:"transformers.HubertForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.15.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/v4.15.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has
<code>config.return_attention_mask == True</code>. For all models whose processor has
<code>config.return_attention_mask == False</code>, such as <a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield
slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.HubertForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pt=new ho({props:{$$slots:{default:[Bi]},$$scope:{ctx:A}}}),Wt=new zo({props:{code:`from transformers import Wav2Vec2Processor, HubertForCTC
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss`}}),It=new yt({}),Lt=new ze({props:{name:"class transformers.HubertForSequenceClassification",anchor:"transformers.HubertForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/hubert/modeling_hubert.py#L1154",parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Kt=new ze({props:{name:"forward",anchor:"transformers.HubertForSequenceClassification.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/hubert/modeling_hubert.py#L1183",parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.15.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/v4.15.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has
<code>config.return_attention_mask == True</code>. For all models whose processor has
<code>config.return_attention_mask == False</code>, such as <a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield
slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.HubertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new ho({props:{$$slots:{default:[Ri]},$$scope:{ctx:A}}}),Yt=new zo({props:{code:`from transformers import Wav2Vec2FeatureExtractor, HubertForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained('superb/hubert-base-superb-ks')
model = HubertForSequenceClassification.from_pretrained('superb/hubert-base-superb-ks')

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], return_tensors="pt")
logits = model(**inputs).logits >>> predicted_class_ids = torch.argmax(logits, dim=-1)
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits &gt;&gt;&gt; predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss`}}),Jt=new yt({}),Xt=new ze({props:{name:"class transformers.TFHubertModel",anchor:"transformers.TFHubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/hubert/modeling_tf_hubert.py#L1383",parametersDescription:[{anchor:"transformers.TFHubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),ft=new ho({props:{$$slots:{default:[Vi]},$$scope:{ctx:A}}}),eo=new ze({props:{name:"call",anchor:"transformers.TFHubertModel.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/hubert/modeling_tf_hubert.py#L1389",parametersDescription:[{anchor:"transformers.TFHubertModel.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFHubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertConfig"
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gt=new ho({props:{$$slots:{default:[Ui]},$$scope:{ctx:A}}}),to=new zo({props:{code:`from transformers import Wav2Vec2Processor, TFHubertModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),oo=new yt({}),so=new ze({props:{name:"class transformers.TFHubertForCTC",anchor:"transformers.TFHubertForCTC",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/hubert/modeling_tf_hubert.py#L1479",parametersDescription:[{anchor:"transformers.TFHubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),bt=new ho({props:{$$slots:{default:[Ki]},$$scope:{ctx:A}}}),lo=new ze({props:{name:"call",anchor:"transformers.TFHubertForCTC.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/hubert/modeling_tf_hubert.py#L1494",parametersDescription:[{anchor:"transformers.TFHubertForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFHubertForCTC.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFHubertForCTC.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_values</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertConfig"
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vt=new ho({props:{$$slots:{default:[Yi]},$$scope:{ctx:A}}}),co=new zo({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`}}),{c(){p=a("meta"),y=l(),f=a("h1"),g=a("a"),v=a("span"),k(b.$$.fragment),_=l(),T=a("span"),Ee=s("Hubert"),ie=l(),j=a("h2"),K=a("a"),O=a("span"),k(X.$$.fragment),Fe=l(),W=a("span"),je=s("Overview"),we=l(),D=a("p"),I=s("Hubert was proposed in "),G=a("a"),_e=s("HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),x=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`),q=l(),le=a("p"),Q=s("The abstract from the paper is the following:"),Te=l(),de=a("p"),L=a("em"),xe=s(`Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
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
reduction on the more challenging dev-other and test-other evaluation subsets.`),ke=l(),M=a("p"),Me=s("Tips:"),Y=l(),J=a("ul"),be=a("li"),Z=s("Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),qe=l(),ee=a("li"),N=s(`Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),ce=a("a"),te=s("Wav2Vec2CTCTokenizer"),Pe=s("."),u=l(),w=a("p"),ve=s("This model was contributed by "),ye=a("a"),Ue=s("patrickvonplaten"),B=s("."),De=l(),oe=a("h2"),pe=a("a"),S=a("span"),k(z.$$.fragment),Ke=l(),Se=a("span"),se=s("HubertConfig"),Ae=l(),P=a("div"),k(ne.$$.fragment),Ye=l(),Je=a("p"),Us=s("This is the configuration class to store the configuration of a "),mo=a("a"),Ks=s("HubertModel"),Ys=s(`. It is used to
instantiate an Hubert model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Hubert
`),wt=a("a"),Js=s("facebook/hubert-base-ls960"),Xs=s(" architecture."),Gs=l(),Xe=a("p"),Qs=s("Configuration objects inherit from "),fo=a("a"),Zs=s("PretrainedConfig"),en=s(` and can be used to control the model
outputs. Read the documentation from `),go=a("a"),tn=s("PretrainedConfig"),on=s(" for more information."),sn=l(),Do=a("p"),nn=s("Example:"),an=l(),k(Tt.$$.fragment),us=l(),Ge=a("h2"),lt=a("a"),Ao=a("span"),k(kt.$$.fragment),rn=l(),Oo=a("span"),ln=s("HubertModel"),hs=l(),ae=a("div"),k(Ct.$$.fragment),dn=l(),Ht=a("p"),cn=s(`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in `),$t=a("a"),pn=s("HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),un=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),hn=l(),Et=a("p"),mn=s("This model inherits from "),_o=a("a"),fn=s("PreTrainedModel"),gn=s(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),_n=l(),Ft=a("p"),bn=s("This model is a PyTorch "),jt=a("a"),vn=s("torch.nn.Module"),yn=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wn=l(),ue=a("div"),k(xt.$$.fragment),Tn=l(),Qe=a("p"),kn=s("The "),bo=a("a"),Cn=s("HubertModel"),Hn=s(" forward method, overrides the "),Wo=a("code"),$n=s("__call__"),En=s(" special method."),Fn=l(),k(dt.$$.fragment),jn=l(),Io=a("p"),xn=s("Example:"),Mn=l(),k(Mt.$$.fragment),ms=l(),Ze=a("h2"),ct=a("a"),Lo=a("span"),k(qt.$$.fragment),qn=l(),No=a("span"),Pn=s("HubertForCTC"),fs=l(),re=a("div"),k(Pt.$$.fragment),Sn=l(),et=a("p"),zn=s("Hubert Model with a "),Bo=a("code"),Dn=s("language modeling"),An=s(` head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in `),St=a("a"),On=s("HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),Wn=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),In=l(),zt=a("p"),Ln=s("This model inherits from "),vo=a("a"),Nn=s("PreTrainedModel"),Bn=s(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),Rn=l(),Dt=a("p"),Vn=s("This model is a PyTorch "),At=a("a"),Un=s("torch.nn.Module"),Kn=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yn=l(),he=a("div"),k(Ot.$$.fragment),Jn=l(),tt=a("p"),Xn=s("The "),yo=a("a"),Gn=s("HubertForCTC"),Qn=s(" forward method, overrides the "),Ro=a("code"),Zn=s("__call__"),ea=s(" special method."),ta=l(),k(pt.$$.fragment),oa=l(),Vo=a("p"),sa=s("Example:"),na=l(),k(Wt.$$.fragment),gs=l(),ot=a("h2"),ut=a("a"),Uo=a("span"),k(It.$$.fragment),aa=l(),Ko=a("span"),ra=s("HubertForSequenceClassification"),_s=l(),R=a("div"),k(Lt.$$.fragment),ia=l(),Yo=a("p"),la=s(`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),da=l(),Nt=a("p"),ca=s("Hubert was proposed in "),Bt=a("a"),pa=s("HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),ua=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),ha=l(),Rt=a("p"),ma=s("This model inherits from "),wo=a("a"),fa=s("PreTrainedModel"),ga=s(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),_a=l(),Vt=a("p"),ba=s("This model is a PyTorch "),Ut=a("a"),va=s("torch.nn.Module"),ya=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wa=l(),me=a("div"),k(Kt.$$.fragment),Ta=l(),st=a("p"),ka=s("The "),To=a("a"),Ca=s("HubertForSequenceClassification"),Ha=s(" forward method, overrides the "),Jo=a("code"),$a=s("__call__"),Ea=s(" special method."),Fa=l(),k(ht.$$.fragment),ja=l(),Xo=a("p"),xa=s("Example:"),Ma=l(),k(Yt.$$.fragment),bs=l(),nt=a("h2"),mt=a("a"),Go=a("span"),k(Jt.$$.fragment),qa=l(),Qo=a("span"),Pa=s("TFHubertModel"),vs=l(),V=a("div"),k(Xt.$$.fragment),Sa=l(),Zo=a("p"),za=s("The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top."),Da=l(),Gt=a("p"),Aa=s("This model inherits from "),ko=a("a"),Oa=s("TFPreTrainedModel"),Wa=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ia=l(),Qt=a("p"),La=s("This model is also a "),Zt=a("a"),Na=s("tf.keras.Model"),Ba=s(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ra=l(),k(ft.$$.fragment),Va=l(),fe=a("div"),k(eo.$$.fragment),Ua=l(),at=a("p"),Ka=s("The "),Co=a("a"),Ya=s("TFHubertModel"),Ja=s(" forward method, overrides the "),es=a("code"),Xa=s("__call__"),Ga=s(" special method."),Qa=l(),k(gt.$$.fragment),Za=l(),ts=a("p"),er=s("Example:"),tr=l(),k(to.$$.fragment),ys=l(),rt=a("h2"),_t=a("a"),os=a("span"),k(oo.$$.fragment),or=l(),ss=a("span"),sr=s("TFHubertForCTC"),ws=l(),U=a("div"),k(so.$$.fragment),nr=l(),no=a("p"),ar=s("TFHubert Model with a "),ns=a("code"),rr=s("language modeling"),ir=s(" head on top for Connectionist Temporal Classification (CTC)."),lr=l(),ao=a("p"),dr=s("This model inherits from "),Ho=a("a"),cr=s("TFPreTrainedModel"),pr=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ur=l(),ro=a("p"),hr=s("This model is also a "),io=a("a"),mr=s("tf.keras.Model"),fr=s(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),gr=l(),k(bt.$$.fragment),_r=l(),ge=a("div"),k(lo.$$.fragment),br=l(),it=a("p"),vr=s("The "),$o=a("a"),yr=s("TFHubertForCTC"),wr=s(" forward method, overrides the "),as=a("code"),Tr=s("__call__"),kr=s(" special method."),Cr=l(),k(vt.$$.fragment),Hr=l(),rs=a("p"),$r=s("Example:"),Er=l(),k(co.$$.fragment),this.h()},l(o){const m=Li('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(t),y=d(o),f=r(o,"H1",{class:!0});var po=i(f);g=r(po,"A",{id:!0,class:!0,href:!0});var is=i(g);v=r(is,"SPAN",{});var ls=i(v);C(b.$$.fragment,ls),ls.forEach(t),is.forEach(t),_=d(po),T=r(po,"SPAN",{});var ds=i(T);Ee=n(ds,"Hubert"),ds.forEach(t),po.forEach(t),ie=d(o),j=r(o,"H2",{class:!0});var uo=i(j);K=r(uo,"A",{id:!0,class:!0,href:!0});var cs=i(K);O=r(cs,"SPAN",{});var ps=i(O);C(X.$$.fragment,ps),ps.forEach(t),cs.forEach(t),Fe=d(uo),W=r(uo,"SPAN",{});var Fr=i(W);je=n(Fr,"Overview"),Fr.forEach(t),uo.forEach(t),we=d(o),D=r(o,"P",{});var ks=i(D);I=n(ks,"Hubert was proposed in "),G=r(ks,"A",{href:!0,rel:!0});var jr=i(G);_e=n(jr,"HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),jr.forEach(t),x=n(ks,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`),ks.forEach(t),q=d(o),le=r(o,"P",{});var xr=i(le);Q=n(xr,"The abstract from the paper is the following:"),xr.forEach(t),Te=d(o),de=r(o,"P",{});var Mr=i(de);L=r(Mr,"EM",{});var qr=i(L);xe=n(qr,`Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
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
reduction on the more challenging dev-other and test-other evaluation subsets.`),qr.forEach(t),Mr.forEach(t),ke=d(o),M=r(o,"P",{});var Pr=i(M);Me=n(Pr,"Tips:"),Pr.forEach(t),Y=d(o),J=r(o,"UL",{});var Cs=i(J);be=r(Cs,"LI",{});var Sr=i(be);Z=n(Sr,"Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Sr.forEach(t),qe=d(Cs),ee=r(Cs,"LI",{});var Hs=i(ee);N=n(Hs,`Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),ce=r(Hs,"A",{href:!0});var zr=i(ce);te=n(zr,"Wav2Vec2CTCTokenizer"),zr.forEach(t),Pe=n(Hs,"."),Hs.forEach(t),Cs.forEach(t),u=d(o),w=r(o,"P",{});var $s=i(w);ve=n($s,"This model was contributed by "),ye=r($s,"A",{href:!0,rel:!0});var Dr=i(ye);Ue=n(Dr,"patrickvonplaten"),Dr.forEach(t),B=n($s,"."),$s.forEach(t),De=d(o),oe=r(o,"H2",{class:!0});var Es=i(oe);pe=r(Es,"A",{id:!0,class:!0,href:!0});var Ar=i(pe);S=r(Ar,"SPAN",{});var Or=i(S);C(z.$$.fragment,Or),Or.forEach(t),Ar.forEach(t),Ke=d(Es),Se=r(Es,"SPAN",{});var Wr=i(Se);se=n(Wr,"HubertConfig"),Wr.forEach(t),Es.forEach(t),Ae=d(o),P=r(o,"DIV",{class:!0});var Oe=i(P);C(ne.$$.fragment,Oe),Ye=d(Oe),Je=r(Oe,"P",{});var Eo=i(Je);Us=n(Eo,"This is the configuration class to store the configuration of a "),mo=r(Eo,"A",{href:!0});var Ir=i(mo);Ks=n(Ir,"HubertModel"),Ir.forEach(t),Ys=n(Eo,`. It is used to
instantiate an Hubert model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Hubert
`),wt=r(Eo,"A",{href:!0,rel:!0});var Lr=i(wt);Js=n(Lr,"facebook/hubert-base-ls960"),Lr.forEach(t),Xs=n(Eo," architecture."),Eo.forEach(t),Gs=d(Oe),Xe=r(Oe,"P",{});var Fo=i(Xe);Qs=n(Fo,"Configuration objects inherit from "),fo=r(Fo,"A",{href:!0});var Nr=i(fo);Zs=n(Nr,"PretrainedConfig"),Nr.forEach(t),en=n(Fo,` and can be used to control the model
outputs. Read the documentation from `),go=r(Fo,"A",{href:!0});var Br=i(go);tn=n(Br,"PretrainedConfig"),Br.forEach(t),on=n(Fo," for more information."),Fo.forEach(t),sn=d(Oe),Do=r(Oe,"P",{});var Rr=i(Do);nn=n(Rr,"Example:"),Rr.forEach(t),an=d(Oe),C(Tt.$$.fragment,Oe),Oe.forEach(t),us=d(o),Ge=r(o,"H2",{class:!0});var Fs=i(Ge);lt=r(Fs,"A",{id:!0,class:!0,href:!0});var Vr=i(lt);Ao=r(Vr,"SPAN",{});var Ur=i(Ao);C(kt.$$.fragment,Ur),Ur.forEach(t),Vr.forEach(t),rn=d(Fs),Oo=r(Fs,"SPAN",{});var Kr=i(Oo);ln=n(Kr,"HubertModel"),Kr.forEach(t),Fs.forEach(t),hs=d(o),ae=r(o,"DIV",{class:!0});var We=i(ae);C(Ct.$$.fragment,We),dn=d(We),Ht=r(We,"P",{});var js=i(Ht);cn=n(js,`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in `),$t=r(js,"A",{href:!0,rel:!0});var Yr=i($t);pn=n(Yr,"HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),Yr.forEach(t),un=n(js,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),js.forEach(t),hn=d(We),Et=r(We,"P",{});var xs=i(Et);mn=n(xs,"This model inherits from "),_o=r(xs,"A",{href:!0});var Jr=i(_o);fn=n(Jr,"PreTrainedModel"),Jr.forEach(t),gn=n(xs,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),xs.forEach(t),_n=d(We),Ft=r(We,"P",{});var Ms=i(Ft);bn=n(Ms,"This model is a PyTorch "),jt=r(Ms,"A",{href:!0,rel:!0});var Xr=i(jt);vn=n(Xr,"torch.nn.Module"),Xr.forEach(t),yn=n(Ms,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ms.forEach(t),wn=d(We),ue=r(We,"DIV",{class:!0});var Ie=i(ue);C(xt.$$.fragment,Ie),Tn=d(Ie),Qe=r(Ie,"P",{});var jo=i(Qe);kn=n(jo,"The "),bo=r(jo,"A",{href:!0});var Gr=i(bo);Cn=n(Gr,"HubertModel"),Gr.forEach(t),Hn=n(jo," forward method, overrides the "),Wo=r(jo,"CODE",{});var Qr=i(Wo);$n=n(Qr,"__call__"),Qr.forEach(t),En=n(jo," special method."),jo.forEach(t),Fn=d(Ie),C(dt.$$.fragment,Ie),jn=d(Ie),Io=r(Ie,"P",{});var Zr=i(Io);xn=n(Zr,"Example:"),Zr.forEach(t),Mn=d(Ie),C(Mt.$$.fragment,Ie),Ie.forEach(t),We.forEach(t),ms=d(o),Ze=r(o,"H2",{class:!0});var qs=i(Ze);ct=r(qs,"A",{id:!0,class:!0,href:!0});var ei=i(ct);Lo=r(ei,"SPAN",{});var ti=i(Lo);C(qt.$$.fragment,ti),ti.forEach(t),ei.forEach(t),qn=d(qs),No=r(qs,"SPAN",{});var oi=i(No);Pn=n(oi,"HubertForCTC"),oi.forEach(t),qs.forEach(t),fs=d(o),re=r(o,"DIV",{class:!0});var Le=i(re);C(Pt.$$.fragment,Le),Sn=d(Le),et=r(Le,"P",{});var xo=i(et);zn=n(xo,"Hubert Model with a "),Bo=r(xo,"CODE",{});var si=i(Bo);Dn=n(si,"language modeling"),si.forEach(t),An=n(xo,` head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in `),St=r(xo,"A",{href:!0,rel:!0});var ni=i(St);On=n(ni,"HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),ni.forEach(t),Wn=n(xo,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),xo.forEach(t),In=d(Le),zt=r(Le,"P",{});var Ps=i(zt);Ln=n(Ps,"This model inherits from "),vo=r(Ps,"A",{href:!0});var ai=i(vo);Nn=n(ai,"PreTrainedModel"),ai.forEach(t),Bn=n(Ps,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),Ps.forEach(t),Rn=d(Le),Dt=r(Le,"P",{});var Ss=i(Dt);Vn=n(Ss,"This model is a PyTorch "),At=r(Ss,"A",{href:!0,rel:!0});var ri=i(At);Un=n(ri,"torch.nn.Module"),ri.forEach(t),Kn=n(Ss,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ss.forEach(t),Yn=d(Le),he=r(Le,"DIV",{class:!0});var Ne=i(he);C(Ot.$$.fragment,Ne),Jn=d(Ne),tt=r(Ne,"P",{});var Mo=i(tt);Xn=n(Mo,"The "),yo=r(Mo,"A",{href:!0});var ii=i(yo);Gn=n(ii,"HubertForCTC"),ii.forEach(t),Qn=n(Mo," forward method, overrides the "),Ro=r(Mo,"CODE",{});var li=i(Ro);Zn=n(li,"__call__"),li.forEach(t),ea=n(Mo," special method."),Mo.forEach(t),ta=d(Ne),C(pt.$$.fragment,Ne),oa=d(Ne),Vo=r(Ne,"P",{});var di=i(Vo);sa=n(di,"Example:"),di.forEach(t),na=d(Ne),C(Wt.$$.fragment,Ne),Ne.forEach(t),Le.forEach(t),gs=d(o),ot=r(o,"H2",{class:!0});var zs=i(ot);ut=r(zs,"A",{id:!0,class:!0,href:!0});var ci=i(ut);Uo=r(ci,"SPAN",{});var pi=i(Uo);C(It.$$.fragment,pi),pi.forEach(t),ci.forEach(t),aa=d(zs),Ko=r(zs,"SPAN",{});var ui=i(Ko);ra=n(ui,"HubertForSequenceClassification"),ui.forEach(t),zs.forEach(t),_s=d(o),R=r(o,"DIV",{class:!0});var Ce=i(R);C(Lt.$$.fragment,Ce),ia=d(Ce),Yo=r(Ce,"P",{});var hi=i(Yo);la=n(hi,`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),hi.forEach(t),da=d(Ce),Nt=r(Ce,"P",{});var Ds=i(Nt);ca=n(Ds,"Hubert was proposed in "),Bt=r(Ds,"A",{href:!0,rel:!0});var mi=i(Bt);pa=n(mi,"HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),mi.forEach(t),ua=n(Ds,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Ds.forEach(t),ha=d(Ce),Rt=r(Ce,"P",{});var As=i(Rt);ma=n(As,"This model inherits from "),wo=r(As,"A",{href:!0});var fi=i(wo);fa=n(fi,"PreTrainedModel"),fi.forEach(t),ga=n(As,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),As.forEach(t),_a=d(Ce),Vt=r(Ce,"P",{});var Os=i(Vt);ba=n(Os,"This model is a PyTorch "),Ut=r(Os,"A",{href:!0,rel:!0});var gi=i(Ut);va=n(gi,"torch.nn.Module"),gi.forEach(t),ya=n(Os,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Os.forEach(t),wa=d(Ce),me=r(Ce,"DIV",{class:!0});var Be=i(me);C(Kt.$$.fragment,Be),Ta=d(Be),st=r(Be,"P",{});var qo=i(st);ka=n(qo,"The "),To=r(qo,"A",{href:!0});var _i=i(To);Ca=n(_i,"HubertForSequenceClassification"),_i.forEach(t),Ha=n(qo," forward method, overrides the "),Jo=r(qo,"CODE",{});var bi=i(Jo);$a=n(bi,"__call__"),bi.forEach(t),Ea=n(qo," special method."),qo.forEach(t),Fa=d(Be),C(ht.$$.fragment,Be),ja=d(Be),Xo=r(Be,"P",{});var vi=i(Xo);xa=n(vi,"Example:"),vi.forEach(t),Ma=d(Be),C(Yt.$$.fragment,Be),Be.forEach(t),Ce.forEach(t),bs=d(o),nt=r(o,"H2",{class:!0});var Ws=i(nt);mt=r(Ws,"A",{id:!0,class:!0,href:!0});var yi=i(mt);Go=r(yi,"SPAN",{});var wi=i(Go);C(Jt.$$.fragment,wi),wi.forEach(t),yi.forEach(t),qa=d(Ws),Qo=r(Ws,"SPAN",{});var Ti=i(Qo);Pa=n(Ti,"TFHubertModel"),Ti.forEach(t),Ws.forEach(t),vs=d(o),V=r(o,"DIV",{class:!0});var He=i(V);C(Xt.$$.fragment,He),Sa=d(He),Zo=r(He,"P",{});var ki=i(Zo);za=n(ki,"The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top."),ki.forEach(t),Da=d(He),Gt=r(He,"P",{});var Is=i(Gt);Aa=n(Is,"This model inherits from "),ko=r(Is,"A",{href:!0});var Ci=i(ko);Oa=n(Ci,"TFPreTrainedModel"),Ci.forEach(t),Wa=n(Is,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Is.forEach(t),Ia=d(He),Qt=r(He,"P",{});var Ls=i(Qt);La=n(Ls,"This model is also a "),Zt=r(Ls,"A",{href:!0,rel:!0});var Hi=i(Zt);Na=n(Hi,"tf.keras.Model"),Hi.forEach(t),Ba=n(Ls,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ls.forEach(t),Ra=d(He),C(ft.$$.fragment,He),Va=d(He),fe=r(He,"DIV",{class:!0});var Re=i(fe);C(eo.$$.fragment,Re),Ua=d(Re),at=r(Re,"P",{});var Po=i(at);Ka=n(Po,"The "),Co=r(Po,"A",{href:!0});var $i=i(Co);Ya=n($i,"TFHubertModel"),$i.forEach(t),Ja=n(Po," forward method, overrides the "),es=r(Po,"CODE",{});var Ei=i(es);Xa=n(Ei,"__call__"),Ei.forEach(t),Ga=n(Po," special method."),Po.forEach(t),Qa=d(Re),C(gt.$$.fragment,Re),Za=d(Re),ts=r(Re,"P",{});var Fi=i(ts);er=n(Fi,"Example:"),Fi.forEach(t),tr=d(Re),C(to.$$.fragment,Re),Re.forEach(t),He.forEach(t),ys=d(o),rt=r(o,"H2",{class:!0});var Ns=i(rt);_t=r(Ns,"A",{id:!0,class:!0,href:!0});var ji=i(_t);os=r(ji,"SPAN",{});var xi=i(os);C(oo.$$.fragment,xi),xi.forEach(t),ji.forEach(t),or=d(Ns),ss=r(Ns,"SPAN",{});var Mi=i(ss);sr=n(Mi,"TFHubertForCTC"),Mi.forEach(t),Ns.forEach(t),ws=d(o),U=r(o,"DIV",{class:!0});var $e=i(U);C(so.$$.fragment,$e),nr=d($e),no=r($e,"P",{});var Bs=i(no);ar=n(Bs,"TFHubert Model with a "),ns=r(Bs,"CODE",{});var qi=i(ns);rr=n(qi,"language modeling"),qi.forEach(t),ir=n(Bs," head on top for Connectionist Temporal Classification (CTC)."),Bs.forEach(t),lr=d($e),ao=r($e,"P",{});var Rs=i(ao);dr=n(Rs,"This model inherits from "),Ho=r(Rs,"A",{href:!0});var Pi=i(Ho);cr=n(Pi,"TFPreTrainedModel"),Pi.forEach(t),pr=n(Rs,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Rs.forEach(t),ur=d($e),ro=r($e,"P",{});var Vs=i(ro);hr=n(Vs,"This model is also a "),io=r(Vs,"A",{href:!0,rel:!0});var Si=i(io);mr=n(Si,"tf.keras.Model"),Si.forEach(t),fr=n(Vs,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Vs.forEach(t),gr=d($e),C(bt.$$.fragment,$e),_r=d($e),ge=r($e,"DIV",{class:!0});var Ve=i(ge);C(lo.$$.fragment,Ve),br=d(Ve),it=r(Ve,"P",{});var So=i(it);vr=n(So,"The "),$o=r(So,"A",{href:!0});var zi=i($o);yr=n(zi,"TFHubertForCTC"),zi.forEach(t),wr=n(So," forward method, overrides the "),as=r(So,"CODE",{});var Di=i(as);Tr=n(Di,"__call__"),Di.forEach(t),kr=n(So," special method."),So.forEach(t),Cr=d(Ve),C(vt.$$.fragment,Ve),Hr=d(Ve),rs=r(Ve,"P",{});var Ai=i(rs);$r=n(Ai,"Example:"),Ai.forEach(t),Er=d(Ve),C(co.$$.fragment,Ve),Ve.forEach(t),$e.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Xi)),c(g,"id","hubert"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#hubert"),c(f,"class","relative group"),c(K,"id","overview"),c(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(K,"href","#overview"),c(j,"class","relative group"),c(G,"href","https://arxiv.org/abs/2106.07447"),c(G,"rel","nofollow"),c(ce,"href","/docs/transformers/v4.15.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),c(ye,"href","https://huggingface.co/patrickvonplaten"),c(ye,"rel","nofollow"),c(pe,"id","transformers.HubertConfig"),c(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pe,"href","#transformers.HubertConfig"),c(oe,"class","relative group"),c(mo,"href","/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertModel"),c(wt,"href","https://huggingface.co/facebook/hubert-base-ls960"),c(wt,"rel","nofollow"),c(fo,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(go,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(P,"class","docstring"),c(lt,"id","transformers.HubertModel"),c(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lt,"href","#transformers.HubertModel"),c(Ge,"class","relative group"),c($t,"href","https://arxiv.org/abs/2106.07447"),c($t,"rel","nofollow"),c(_o,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(jt,"rel","nofollow"),c(bo,"href","/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertModel"),c(ue,"class","docstring"),c(ae,"class","docstring"),c(ct,"id","transformers.HubertForCTC"),c(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ct,"href","#transformers.HubertForCTC"),c(Ze,"class","relative group"),c(St,"href","https://arxiv.org/abs/2106.07447"),c(St,"rel","nofollow"),c(vo,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(At,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(At,"rel","nofollow"),c(yo,"href","/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertForCTC"),c(he,"class","docstring"),c(re,"class","docstring"),c(ut,"id","transformers.HubertForSequenceClassification"),c(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ut,"href","#transformers.HubertForSequenceClassification"),c(ot,"class","relative group"),c(Bt,"href","https://arxiv.org/abs/2106.07447"),c(Bt,"rel","nofollow"),c(wo,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ut,"rel","nofollow"),c(To,"href","/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.HubertForSequenceClassification"),c(me,"class","docstring"),c(R,"class","docstring"),c(mt,"id","transformers.TFHubertModel"),c(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mt,"href","#transformers.TFHubertModel"),c(nt,"class","relative group"),c(ko,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Zt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Zt,"rel","nofollow"),c(Co,"href","/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.TFHubertModel"),c(fe,"class","docstring"),c(V,"class","docstring"),c(_t,"id","transformers.TFHubertForCTC"),c(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_t,"href","#transformers.TFHubertForCTC"),c(rt,"class","relative group"),c(Ho,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(io,"rel","nofollow"),c($o,"href","/docs/transformers/v4.15.0/en/model_doc/hubert#transformers.TFHubertForCTC"),c(ge,"class","docstring"),c(U,"class","docstring")},m(o,m){e(document.head,p),h(o,y,m),h(o,f,m),e(f,g),e(g,v),H(b,v,null),e(f,_),e(f,T),e(T,Ee),h(o,ie,m),h(o,j,m),e(j,K),e(K,O),H(X,O,null),e(j,Fe),e(j,W),e(W,je),h(o,we,m),h(o,D,m),e(D,I),e(D,G),e(G,_e),e(D,x),h(o,q,m),h(o,le,m),e(le,Q),h(o,Te,m),h(o,de,m),e(de,L),e(L,xe),h(o,ke,m),h(o,M,m),e(M,Me),h(o,Y,m),h(o,J,m),e(J,be),e(be,Z),e(J,qe),e(J,ee),e(ee,N),e(ee,ce),e(ce,te),e(ee,Pe),h(o,u,m),h(o,w,m),e(w,ve),e(w,ye),e(ye,Ue),e(w,B),h(o,De,m),h(o,oe,m),e(oe,pe),e(pe,S),H(z,S,null),e(oe,Ke),e(oe,Se),e(Se,se),h(o,Ae,m),h(o,P,m),H(ne,P,null),e(P,Ye),e(P,Je),e(Je,Us),e(Je,mo),e(mo,Ks),e(Je,Ys),e(Je,wt),e(wt,Js),e(Je,Xs),e(P,Gs),e(P,Xe),e(Xe,Qs),e(Xe,fo),e(fo,Zs),e(Xe,en),e(Xe,go),e(go,tn),e(Xe,on),e(P,sn),e(P,Do),e(Do,nn),e(P,an),H(Tt,P,null),h(o,us,m),h(o,Ge,m),e(Ge,lt),e(lt,Ao),H(kt,Ao,null),e(Ge,rn),e(Ge,Oo),e(Oo,ln),h(o,hs,m),h(o,ae,m),H(Ct,ae,null),e(ae,dn),e(ae,Ht),e(Ht,cn),e(Ht,$t),e($t,pn),e(Ht,un),e(ae,hn),e(ae,Et),e(Et,mn),e(Et,_o),e(_o,fn),e(Et,gn),e(ae,_n),e(ae,Ft),e(Ft,bn),e(Ft,jt),e(jt,vn),e(Ft,yn),e(ae,wn),e(ae,ue),H(xt,ue,null),e(ue,Tn),e(ue,Qe),e(Qe,kn),e(Qe,bo),e(bo,Cn),e(Qe,Hn),e(Qe,Wo),e(Wo,$n),e(Qe,En),e(ue,Fn),H(dt,ue,null),e(ue,jn),e(ue,Io),e(Io,xn),e(ue,Mn),H(Mt,ue,null),h(o,ms,m),h(o,Ze,m),e(Ze,ct),e(ct,Lo),H(qt,Lo,null),e(Ze,qn),e(Ze,No),e(No,Pn),h(o,fs,m),h(o,re,m),H(Pt,re,null),e(re,Sn),e(re,et),e(et,zn),e(et,Bo),e(Bo,Dn),e(et,An),e(et,St),e(St,On),e(et,Wn),e(re,In),e(re,zt),e(zt,Ln),e(zt,vo),e(vo,Nn),e(zt,Bn),e(re,Rn),e(re,Dt),e(Dt,Vn),e(Dt,At),e(At,Un),e(Dt,Kn),e(re,Yn),e(re,he),H(Ot,he,null),e(he,Jn),e(he,tt),e(tt,Xn),e(tt,yo),e(yo,Gn),e(tt,Qn),e(tt,Ro),e(Ro,Zn),e(tt,ea),e(he,ta),H(pt,he,null),e(he,oa),e(he,Vo),e(Vo,sa),e(he,na),H(Wt,he,null),h(o,gs,m),h(o,ot,m),e(ot,ut),e(ut,Uo),H(It,Uo,null),e(ot,aa),e(ot,Ko),e(Ko,ra),h(o,_s,m),h(o,R,m),H(Lt,R,null),e(R,ia),e(R,Yo),e(Yo,la),e(R,da),e(R,Nt),e(Nt,ca),e(Nt,Bt),e(Bt,pa),e(Nt,ua),e(R,ha),e(R,Rt),e(Rt,ma),e(Rt,wo),e(wo,fa),e(Rt,ga),e(R,_a),e(R,Vt),e(Vt,ba),e(Vt,Ut),e(Ut,va),e(Vt,ya),e(R,wa),e(R,me),H(Kt,me,null),e(me,Ta),e(me,st),e(st,ka),e(st,To),e(To,Ca),e(st,Ha),e(st,Jo),e(Jo,$a),e(st,Ea),e(me,Fa),H(ht,me,null),e(me,ja),e(me,Xo),e(Xo,xa),e(me,Ma),H(Yt,me,null),h(o,bs,m),h(o,nt,m),e(nt,mt),e(mt,Go),H(Jt,Go,null),e(nt,qa),e(nt,Qo),e(Qo,Pa),h(o,vs,m),h(o,V,m),H(Xt,V,null),e(V,Sa),e(V,Zo),e(Zo,za),e(V,Da),e(V,Gt),e(Gt,Aa),e(Gt,ko),e(ko,Oa),e(Gt,Wa),e(V,Ia),e(V,Qt),e(Qt,La),e(Qt,Zt),e(Zt,Na),e(Qt,Ba),e(V,Ra),H(ft,V,null),e(V,Va),e(V,fe),H(eo,fe,null),e(fe,Ua),e(fe,at),e(at,Ka),e(at,Co),e(Co,Ya),e(at,Ja),e(at,es),e(es,Xa),e(at,Ga),e(fe,Qa),H(gt,fe,null),e(fe,Za),e(fe,ts),e(ts,er),e(fe,tr),H(to,fe,null),h(o,ys,m),h(o,rt,m),e(rt,_t),e(_t,os),H(oo,os,null),e(rt,or),e(rt,ss),e(ss,sr),h(o,ws,m),h(o,U,m),H(so,U,null),e(U,nr),e(U,no),e(no,ar),e(no,ns),e(ns,rr),e(no,ir),e(U,lr),e(U,ao),e(ao,dr),e(ao,Ho),e(Ho,cr),e(ao,pr),e(U,ur),e(U,ro),e(ro,hr),e(ro,io),e(io,mr),e(ro,fr),e(U,gr),H(bt,U,null),e(U,_r),e(U,ge),H(lo,ge,null),e(ge,br),e(ge,it),e(it,vr),e(it,$o),e($o,yr),e(it,wr),e(it,as),e(as,Tr),e(it,kr),e(ge,Cr),H(vt,ge,null),e(ge,Hr),e(ge,rs),e(rs,$r),e(ge,Er),H(co,ge,null),Ts=!0},p(o,[m]){const po={};m&2&&(po.$$scope={dirty:m,ctx:o}),dt.$set(po);const is={};m&2&&(is.$$scope={dirty:m,ctx:o}),pt.$set(is);const ls={};m&2&&(ls.$$scope={dirty:m,ctx:o}),ht.$set(ls);const ds={};m&2&&(ds.$$scope={dirty:m,ctx:o}),ft.$set(ds);const uo={};m&2&&(uo.$$scope={dirty:m,ctx:o}),gt.$set(uo);const cs={};m&2&&(cs.$$scope={dirty:m,ctx:o}),bt.$set(cs);const ps={};m&2&&(ps.$$scope={dirty:m,ctx:o}),vt.$set(ps)},i(o){Ts||($(b.$$.fragment,o),$(X.$$.fragment,o),$(z.$$.fragment,o),$(ne.$$.fragment,o),$(Tt.$$.fragment,o),$(kt.$$.fragment,o),$(Ct.$$.fragment,o),$(xt.$$.fragment,o),$(dt.$$.fragment,o),$(Mt.$$.fragment,o),$(qt.$$.fragment,o),$(Pt.$$.fragment,o),$(Ot.$$.fragment,o),$(pt.$$.fragment,o),$(Wt.$$.fragment,o),$(It.$$.fragment,o),$(Lt.$$.fragment,o),$(Kt.$$.fragment,o),$(ht.$$.fragment,o),$(Yt.$$.fragment,o),$(Jt.$$.fragment,o),$(Xt.$$.fragment,o),$(ft.$$.fragment,o),$(eo.$$.fragment,o),$(gt.$$.fragment,o),$(to.$$.fragment,o),$(oo.$$.fragment,o),$(so.$$.fragment,o),$(bt.$$.fragment,o),$(lo.$$.fragment,o),$(vt.$$.fragment,o),$(co.$$.fragment,o),Ts=!0)},o(o){E(b.$$.fragment,o),E(X.$$.fragment,o),E(z.$$.fragment,o),E(ne.$$.fragment,o),E(Tt.$$.fragment,o),E(kt.$$.fragment,o),E(Ct.$$.fragment,o),E(xt.$$.fragment,o),E(dt.$$.fragment,o),E(Mt.$$.fragment,o),E(qt.$$.fragment,o),E(Pt.$$.fragment,o),E(Ot.$$.fragment,o),E(pt.$$.fragment,o),E(Wt.$$.fragment,o),E(It.$$.fragment,o),E(Lt.$$.fragment,o),E(Kt.$$.fragment,o),E(ht.$$.fragment,o),E(Yt.$$.fragment,o),E(Jt.$$.fragment,o),E(Xt.$$.fragment,o),E(ft.$$.fragment,o),E(eo.$$.fragment,o),E(gt.$$.fragment,o),E(to.$$.fragment,o),E(oo.$$.fragment,o),E(so.$$.fragment,o),E(bt.$$.fragment,o),E(lo.$$.fragment,o),E(vt.$$.fragment,o),E(co.$$.fragment,o),Ts=!1},d(o){t(p),o&&t(y),o&&t(f),F(b),o&&t(ie),o&&t(j),F(X),o&&t(we),o&&t(D),o&&t(q),o&&t(le),o&&t(Te),o&&t(de),o&&t(ke),o&&t(M),o&&t(Y),o&&t(J),o&&t(u),o&&t(w),o&&t(De),o&&t(oe),F(z),o&&t(Ae),o&&t(P),F(ne),F(Tt),o&&t(us),o&&t(Ge),F(kt),o&&t(hs),o&&t(ae),F(Ct),F(xt),F(dt),F(Mt),o&&t(ms),o&&t(Ze),F(qt),o&&t(fs),o&&t(re),F(Pt),F(Ot),F(pt),F(Wt),o&&t(gs),o&&t(ot),F(It),o&&t(_s),o&&t(R),F(Lt),F(Kt),F(ht),F(Yt),o&&t(bs),o&&t(nt),F(Jt),o&&t(vs),o&&t(V),F(Xt),F(ft),F(eo),F(gt),F(to),o&&t(ys),o&&t(rt),F(oo),o&&t(ws),o&&t(U),F(so),F(bt),F(lo),F(vt),F(co)}}}const Xi={local:"hubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.HubertConfig",title:"HubertConfig"},{local:"transformers.HubertModel",title:"HubertModel"},{local:"transformers.HubertForCTC",title:"HubertForCTC"},{local:"transformers.HubertForSequenceClassification",title:"HubertForSequenceClassification"},{local:"transformers.TFHubertModel",title:"TFHubertModel"},{local:"transformers.TFHubertForCTC",title:"TFHubertForCTC"}],title:"Hubert"};function Gi(A,p,y){let{fw:f}=p;return A.$$set=g=>{"fw"in g&&y(0,f=g.fw)},[f]}class nl extends Oi{constructor(p){super();Wi(this,p,Gi,Ji,Ii,{fw:0})}}export{nl as default,Xi as metadata};
