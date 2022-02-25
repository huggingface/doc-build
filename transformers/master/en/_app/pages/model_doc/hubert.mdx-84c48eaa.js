import{S as Ni,i as Bi,s as Ri,e as a,k as l,w as T,t as s,M as Vi,c as r,d as t,m as d,a as i,x as k,h as n,b as c,F as e,g as u,y as $,q as H,o as C,B as j}from"../../chunks/vendor-4833417e.js";import{T as go}from"../../chunks/Tip-fffd6df1.js";import{D as Ae}from"../../chunks/Docstring-44c5af16.js";import{C as wt}from"../../chunks/CodeBlock-90ffda97.js";import{I as yt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-04a16537.js";function Ui(A){let p,w,f,g,v;return{c(){p=a("p"),w=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);w=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=n(E,"Module"),E.forEach(t),v=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){u(b,p,_),e(p,w),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Ki(A){let p,w,f,g,v;return{c(){p=a("p"),w=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);w=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=n(E,"Module"),E.forEach(t),v=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){u(b,p,_),e(p,w),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Yi(A){let p,w,f,g,v;return{c(){p=a("p"),w=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);w=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=n(E,"Module"),E.forEach(t),v=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){u(b,p,_),e(p,w),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Gi(A){let p,w,f,g,v,b,_,E,Fe,de,F,K,O,Q,qe,I,Me,ye,D,W,Z,_e,q,x,ce,ee,Te,pe,L,xe,ke,M,Pe,Y,G,be,te,Se,oe,N,he,se,ze;return{c(){p=a("p"),w=s("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),b=s("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=a("li"),Fe=s("having all inputs as a list, tuple or dict in the first positional arguments."),de=l(),F=a("p"),K=s("This second option is useful when using "),O=a("code"),Q=s("tf.keras.Model.fit"),qe=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),Me=s("model(inputs)"),ye=s("."),D=l(),W=a("p"),Z=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),_e=l(),q=a("ul"),x=a("li"),ce=s("a single Tensor with "),ee=a("code"),Te=s("input_values"),pe=s(" only and nothing else: "),L=a("code"),xe=s("model(inputs_ids)"),ke=l(),M=a("li"),Pe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),G=s("model([input_values, attention_mask])"),be=s(" or "),te=a("code"),Se=s("model([input_values, attention_mask, token_type_ids])"),oe=l(),N=a("li"),he=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=a("code"),ze=s('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var y=i(p);w=n(y,"TF 2.0 models accepts two formats as inputs:"),y.forEach(t),f=d(h),g=r(h,"UL",{});var ve=i(g);v=r(ve,"LI",{});var we=i(v);b=n(we,"having all inputs as keyword arguments (like PyTorch models), or"),we.forEach(t),_=d(ve),E=r(ve,"LI",{});var Ue=i(E);Fe=n(Ue,"having all inputs as a list, tuple or dict in the first positional arguments."),Ue.forEach(t),ve.forEach(t),de=d(h),F=r(h,"P",{});var B=i(F);K=n(B,"This second option is useful when using "),O=r(B,"CODE",{});var Oe=i(O);Q=n(Oe,"tf.keras.Model.fit"),Oe.forEach(t),qe=n(B,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(B,"CODE",{});var ne=i(I);Me=n(ne,"model(inputs)"),ne.forEach(t),ye=n(B,"."),B.forEach(t),D=d(h),W=r(h,"P",{});var ue=i(W);Z=n(ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ue.forEach(t),_e=d(h),q=r(h,"UL",{});var S=i(q);x=r(S,"LI",{});var z=i(x);ce=n(z,"a single Tensor with "),ee=r(z,"CODE",{});var Ke=i(ee);Te=n(Ke,"input_values"),Ke.forEach(t),pe=n(z," only and nothing else: "),L=r(z,"CODE",{});var De=i(L);xe=n(De,"model(inputs_ids)"),De.forEach(t),z.forEach(t),ke=d(S),M=r(S,"LI",{});var ae=i(M);Pe=n(ae,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(ae,"CODE",{});var Ie=i(Y);G=n(Ie,"model([input_values, attention_mask])"),Ie.forEach(t),be=n(ae," or "),te=r(ae,"CODE",{});var P=i(te);Se=n(P,"model([input_values, attention_mask, token_type_ids])"),P.forEach(t),ae.forEach(t),oe=d(S),N=r(S,"LI",{});var re=i(N);he=n(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=r(re,"CODE",{});var Ye=i(se);ze=n(Ye,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Ye.forEach(t),re.forEach(t),S.forEach(t)},m(h,y){u(h,p,y),e(p,w),u(h,f,y),u(h,g,y),e(g,v),e(v,b),e(g,_),e(g,E),e(E,Fe),u(h,de,y),u(h,F,y),e(F,K),e(F,O),e(O,Q),e(F,qe),e(F,I),e(I,Me),e(F,ye),u(h,D,y),u(h,W,y),e(W,Z),u(h,_e,y),u(h,q,y),e(q,x),e(x,ce),e(x,ee),e(ee,Te),e(x,pe),e(x,L),e(L,xe),e(q,ke),e(q,M),e(M,Pe),e(M,Y),e(Y,G),e(M,be),e(M,te),e(te,Se),e(q,oe),e(q,N),e(N,he),e(N,se),e(se,ze)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(de),h&&t(F),h&&t(D),h&&t(W),h&&t(_e),h&&t(q)}}}function Xi(A){let p,w,f,g,v;return{c(){p=a("p"),w=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);w=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=n(E,"Module"),E.forEach(t),v=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){u(b,p,_),e(p,w),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Ji(A){let p,w,f,g,v,b,_,E,Fe,de,F,K,O,Q,qe,I,Me,ye,D,W,Z,_e,q,x,ce,ee,Te,pe,L,xe,ke,M,Pe,Y,G,be,te,Se,oe,N,he,se,ze;return{c(){p=a("p"),w=s("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),b=s("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=a("li"),Fe=s("having all inputs as a list, tuple or dict in the first positional arguments."),de=l(),F=a("p"),K=s("This second option is useful when using "),O=a("code"),Q=s("tf.keras.Model.fit"),qe=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),Me=s("model(inputs)"),ye=s("."),D=l(),W=a("p"),Z=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),_e=l(),q=a("ul"),x=a("li"),ce=s("a single Tensor with "),ee=a("code"),Te=s("input_values"),pe=s(" only and nothing else: "),L=a("code"),xe=s("model(inputs_ids)"),ke=l(),M=a("li"),Pe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),G=s("model([input_values, attention_mask])"),be=s(" or "),te=a("code"),Se=s("model([input_values, attention_mask, token_type_ids])"),oe=l(),N=a("li"),he=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=a("code"),ze=s('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var y=i(p);w=n(y,"TF 2.0 models accepts two formats as inputs:"),y.forEach(t),f=d(h),g=r(h,"UL",{});var ve=i(g);v=r(ve,"LI",{});var we=i(v);b=n(we,"having all inputs as keyword arguments (like PyTorch models), or"),we.forEach(t),_=d(ve),E=r(ve,"LI",{});var Ue=i(E);Fe=n(Ue,"having all inputs as a list, tuple or dict in the first positional arguments."),Ue.forEach(t),ve.forEach(t),de=d(h),F=r(h,"P",{});var B=i(F);K=n(B,"This second option is useful when using "),O=r(B,"CODE",{});var Oe=i(O);Q=n(Oe,"tf.keras.Model.fit"),Oe.forEach(t),qe=n(B,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(B,"CODE",{});var ne=i(I);Me=n(ne,"model(inputs)"),ne.forEach(t),ye=n(B,"."),B.forEach(t),D=d(h),W=r(h,"P",{});var ue=i(W);Z=n(ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ue.forEach(t),_e=d(h),q=r(h,"UL",{});var S=i(q);x=r(S,"LI",{});var z=i(x);ce=n(z,"a single Tensor with "),ee=r(z,"CODE",{});var Ke=i(ee);Te=n(Ke,"input_values"),Ke.forEach(t),pe=n(z," only and nothing else: "),L=r(z,"CODE",{});var De=i(L);xe=n(De,"model(inputs_ids)"),De.forEach(t),z.forEach(t),ke=d(S),M=r(S,"LI",{});var ae=i(M);Pe=n(ae,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(ae,"CODE",{});var Ie=i(Y);G=n(Ie,"model([input_values, attention_mask])"),Ie.forEach(t),be=n(ae," or "),te=r(ae,"CODE",{});var P=i(te);Se=n(P,"model([input_values, attention_mask, token_type_ids])"),P.forEach(t),ae.forEach(t),oe=d(S),N=r(S,"LI",{});var re=i(N);he=n(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=r(re,"CODE",{});var Ye=i(se);ze=n(Ye,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Ye.forEach(t),re.forEach(t),S.forEach(t)},m(h,y){u(h,p,y),e(p,w),u(h,f,y),u(h,g,y),e(g,v),e(v,b),e(g,_),e(g,E),e(E,Fe),u(h,de,y),u(h,F,y),e(F,K),e(F,O),e(O,Q),e(F,qe),e(F,I),e(I,Me),e(F,ye),u(h,D,y),u(h,W,y),e(W,Z),u(h,_e,y),u(h,q,y),e(q,x),e(x,ce),e(x,ee),e(ee,Te),e(x,pe),e(x,L),e(L,xe),e(q,ke),e(q,M),e(M,Pe),e(M,Y),e(Y,G),e(M,be),e(M,te),e(te,Se),e(q,oe),e(q,N),e(N,he),e(N,se),e(se,ze)},d(h){h&&t(p),h&&t(f),h&&t(g),h&&t(de),h&&t(F),h&&t(D),h&&t(W),h&&t(_e),h&&t(q)}}}function Qi(A){let p,w,f,g,v;return{c(){p=a("p"),w=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){p=r(b,"P",{});var _=i(p);w=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=i(f);g=n(E,"Module"),E.forEach(t),v=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){u(b,p,_),e(p,w),e(p,f),e(f,g),e(p,v)},d(b){b&&t(p)}}}function Zi(A){let p,w,f,g,v,b,_,E,Fe,de,F,K,O,Q,qe,I,Me,ye,D,W,Z,_e,q,x,ce,ee,Te,pe,L,xe,ke,M,Pe,Y,G,be,te,Se,oe,N,he,se,ze,h,y,ve,we,Ue,B,Oe,ne,ue,S,z,Ke,De,ae,Ie,P,re,Ye,Ge,Ys,_o,Gs,Xs,Tt,Js,Qs,Zs,Xe,en,bo,tn,on,vo,sn,nn,an,Oo,rn,ln,kt,ms,Je,lt,Io,$t,dn,Wo,cn,fs,ie,Ht,pn,Ct,hn,jt,un,mn,fn,Et,gn,wo,_n,bn,vn,Ft,wn,qt,yn,Tn,kn,me,Mt,$n,Qe,Hn,yo,Cn,jn,Lo,En,Fn,qn,dt,Mn,No,xn,Pn,xt,gs,Ze,ct,Bo,Pt,Sn,Ro,zn,_s,le,St,Dn,et,An,Vo,On,In,zt,Wn,Ln,Nn,Dt,Bn,To,Rn,Vn,Un,At,Kn,Ot,Yn,Gn,Xn,X,It,Jn,tt,Qn,ko,Zn,ea,Uo,ta,oa,sa,pt,na,Ko,aa,ra,Wt,ia,Lt,bs,ot,ht,Yo,Nt,la,Go,da,vs,R,Bt,ca,Xo,pa,ha,Rt,ua,Vt,ma,fa,ga,Ut,_a,$o,ba,va,wa,Kt,ya,Yt,Ta,ka,$a,J,Gt,Ha,st,Ca,Ho,ja,Ea,Jo,Fa,qa,Ma,ut,xa,Qo,Pa,Sa,Xt,za,Jt,ws,nt,mt,Zo,Qt,Da,es,Aa,ys,V,Zt,Oa,ts,Ia,Wa,eo,La,Co,Na,Ba,Ra,to,Va,oo,Ua,Ka,Ya,ft,Ga,fe,so,Xa,at,Ja,jo,Qa,Za,os,er,tr,or,gt,sr,ss,nr,ar,no,Ts,rt,_t,ns,ao,rr,as,ir,ks,U,ro,lr,io,dr,rs,cr,pr,hr,lo,ur,Eo,mr,fr,gr,co,_r,po,br,vr,wr,bt,yr,ge,ho,Tr,it,kr,Fo,$r,Hr,is,Cr,jr,Er,vt,Fr,ls,qr,Mr,uo,$s;return b=new yt({}),Q=new yt({}),z=new yt({}),re=new Ae({props:{name:"class transformers.HubertConfig",anchor:"transformers.HubertConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_layer_norm",val:" = True"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/hubert/configuration_hubert.py#L32",parametersDescription:[{anchor:"transformers.HubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Hubert model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>. Vocabulary size of the model. Defines the different
tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.HubertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.HubertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.HubertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.HubertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.HubertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.HubertConfig.hidden_dropout(float,",description:`<strong>hidden_dropout(<code>float</code>,</strong> <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout(float,"},{anchor:"transformers.HubertConfig.attention_dropout(float,",description:`<strong>attention_dropout(<code>float</code>,</strong> <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout(float,"},{anchor:"transformers.HubertConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for the final projection layer of <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.HubertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.HubertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.HubertConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.HubertConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.HubertConfig.feat_proj_layer_norm",description:`<strong>feat_proj_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply LayerNorm to the output of the feature encoder.`,name:"feat_proj_layer_norm"},{anchor:"transformers.HubertConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.HubertConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.HubertConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.HubertConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.HubertConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.HubertConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.HubertConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.HubertConfig.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether do apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.HubertConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.HubertConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.HubertConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.HubertConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.HubertConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.HubertConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.HubertConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.HubertConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.HubertConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.HubertConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertForSequenceClassification">HubertForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.HubertConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}]}}),kt=new wt({props:{code:`from transformers import HubertModel, HubertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),$t=new yt({}),Ht=new Ae({props:{name:"class transformers.HubertModel",anchor:"transformers.HubertModel",parameters:[{name:"config",val:": HubertConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/hubert/modeling_hubert.py#L942",parametersDescription:[{anchor:"transformers.HubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Mt=new Ae({props:{name:"forward",anchor:"transformers.HubertModel.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/hubert/modeling_hubert.py#L1007",parametersDescription:[{anchor:"transformers.HubertModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should simply be
padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly different
results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
</ul>
`}}),dt=new go({props:{$$slots:{default:[Ui]},$$scope:{ctx:A}}}),xt=new wt({props:{code:`from transformers import Wav2Vec2Processor, HubertModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),Pt=new yt({}),St=new Ae({props:{name:"class transformers.HubertForCTC",anchor:"transformers.HubertForCTC",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/hubert/modeling_hubert.py#L1086",parametersDescription:[{anchor:"transformers.HubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),It=new Ae({props:{name:"forward",anchor:"transformers.HubertForCTC.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/hubert/modeling_hubert.py#L1127",parametersDescription:[{anchor:"transformers.HubertForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should simply be
padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly different
results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.HubertForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
</ul>
`}}),pt=new go({props:{$$slots:{default:[Ki]},$$scope:{ctx:A}}}),Wt=new wt({props:{code:`from transformers import Wav2Vec2Processor, HubertForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/hubert-large-ls960-ft")
model = HubertForCTC.from_pretrained("facebook/hubert-large-ls960-ft")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, HubertForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),Lt=new wt({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">22.68</span>`}}),Nt=new yt({}),Bt=new Ae({props:{name:"class transformers.HubertForSequenceClassification",anchor:"transformers.HubertForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/hubert/modeling_hubert.py#L1217",parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Gt=new Ae({props:{name:"forward",anchor:"transformers.HubertForSequenceClassification.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/hubert/modeling_hubert.py#L1262",parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should simply be
padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly different
results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.HubertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
</ul>
`}}),ut=new go({props:{$$slots:{default:[Yi]},$$scope:{ctx:A}}}),Xt=new wt({props:{code:`from transformers import Wav2Vec2FeatureExtractor, HubertForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("superb/hubert-base-superb-ks")
model = HubertForSequenceClassification.from_pretrained("superb/hubert-base-superb-ks")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, HubertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;superb/hubert-base-superb-ks&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;superb/hubert-base-superb-ks&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),Jt=new wt({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">8.53</span>`}}),Qt=new yt({}),Zt=new Ae({props:{name:"class transformers.TFHubertModel",anchor:"transformers.TFHubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/hubert/modeling_tf_hubert.py#L1402",parametersDescription:[{anchor:"transformers.TFHubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ft=new go({props:{$$slots:{default:[Gi]},$$scope:{ctx:A}}}),so=new Ae({props:{name:"call",anchor:"transformers.TFHubertModel.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/hubert/modeling_tf_hubert.py#L1408",parametersDescription:[{anchor:"transformers.TFHubertModel.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFHubertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFHubertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFHubertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFHubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),gt=new go({props:{$$slots:{default:[Xi]},$$scope:{ctx:A}}}),no=new wt({props:{code:`from transformers import Wav2Vec2Processor, TFHubertModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),ao=new yt({}),ro=new Ae({props:{name:"class transformers.TFHubertForCTC",anchor:"transformers.TFHubertForCTC",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/hubert/modeling_tf_hubert.py#L1500",parametersDescription:[{anchor:"transformers.TFHubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bt=new go({props:{$$slots:{default:[Ji]},$$scope:{ctx:A}}}),ho=new Ae({props:{name:"call",anchor:"transformers.TFHubertForCTC.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/hubert/modeling_tf_hubert.py#L1527",parametersDescription:[{anchor:"transformers.TFHubertForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFHubertForCTC.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFHubertForCTC.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFHubertForCTC.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFHubertForCTC.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFHubertForCTC.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_values</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),vt=new go({props:{$$slots:{default:[Qi]},$$scope:{ctx:A}}}),uo=new wt({props:{code:`import tensorflow as tf
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

input_values = processor(ds["speech"][0], return_tensors="tf").input_values  # Batch size 1
logits = model(input_values).logits
predicted_ids = tf.argmax(logits, axis=-1)

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

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_values).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = tf.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.decode(predicted_ids[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_transcription = <span class="hljs-string">&quot;A MAN SAID TO THE UNIVERSE SIR I EXIST&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># wrap processor as target processor to encode labels</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    labels = processor(transcription, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`}}),{c(){p=a("meta"),w=l(),f=a("h1"),g=a("a"),v=a("span"),T(b.$$.fragment),_=l(),E=a("span"),Fe=s("Hubert"),de=l(),F=a("h2"),K=a("a"),O=a("span"),T(Q.$$.fragment),qe=l(),I=a("span"),Me=s("Overview"),ye=l(),D=a("p"),W=s("Hubert was proposed in "),Z=a("a"),_e=s("HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),q=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`),x=l(),ce=a("p"),ee=s("The abstract from the paper is the following:"),Te=l(),pe=a("p"),L=a("em"),xe=s(`Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
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
reduction on the more challenging dev-other and test-other evaluation subsets.`),ke=l(),M=a("p"),Pe=s("Tips:"),Y=l(),G=a("ul"),be=a("li"),te=s("Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Se=l(),oe=a("li"),N=s(`Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),he=a("a"),se=s("Wav2Vec2CTCTokenizer"),ze=s("."),h=l(),y=a("p"),ve=s("This model was contributed by "),we=a("a"),Ue=s("patrickvonplaten"),B=s("."),Oe=l(),ne=a("h2"),ue=a("a"),S=a("span"),T(z.$$.fragment),Ke=l(),De=a("span"),ae=s("HubertConfig"),Ie=l(),P=a("div"),T(re.$$.fragment),Ye=l(),Ge=a("p"),Ys=s("This is the configuration class to store the configuration of a "),_o=a("a"),Gs=s("HubertModel"),Xs=s(`. It is used to instantiate an
Hubert model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Hubert
`),Tt=a("a"),Js=s("facebook/hubert-base-ls960"),Qs=s(" architecture."),Zs=l(),Xe=a("p"),en=s("Configuration objects inherit from "),bo=a("a"),tn=s("PretrainedConfig"),on=s(` and can be used to control the model outputs. Read the
documentation from `),vo=a("a"),sn=s("PretrainedConfig"),nn=s(" for more information."),an=l(),Oo=a("p"),rn=s("Example:"),ln=l(),T(kt.$$.fragment),ms=l(),Je=a("h2"),lt=a("a"),Io=a("span"),T($t.$$.fragment),dn=l(),Wo=a("span"),cn=s("HubertModel"),fs=l(),ie=a("div"),T(Ht.$$.fragment),pn=l(),Ct=a("p"),hn=s(`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in `),jt=a("a"),un=s(`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),mn=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),fn=l(),Et=a("p"),gn=s("This model inherits from "),wo=a("a"),_n=s("PreTrainedModel"),bn=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),vn=l(),Ft=a("p"),wn=s("This model is a PyTorch "),qt=a("a"),yn=s("torch.nn.Module"),Tn=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kn=l(),me=a("div"),T(Mt.$$.fragment),$n=l(),Qe=a("p"),Hn=s("The "),yo=a("a"),Cn=s("HubertModel"),jn=s(" forward method, overrides the "),Lo=a("code"),En=s("__call__"),Fn=s(" special method."),qn=l(),T(dt.$$.fragment),Mn=l(),No=a("p"),xn=s("Example:"),Pn=l(),T(xt.$$.fragment),gs=l(),Ze=a("h2"),ct=a("a"),Bo=a("span"),T(Pt.$$.fragment),Sn=l(),Ro=a("span"),zn=s("HubertForCTC"),_s=l(),le=a("div"),T(St.$$.fragment),Dn=l(),et=a("p"),An=s("Hubert Model with a "),Vo=a("code"),On=s("language modeling"),In=s(` head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in `),zt=a("a"),Wn=s(`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),Ln=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Nn=l(),Dt=a("p"),Bn=s("This model inherits from "),To=a("a"),Rn=s("PreTrainedModel"),Vn=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Un=l(),At=a("p"),Kn=s("This model is a PyTorch "),Ot=a("a"),Yn=s("torch.nn.Module"),Gn=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xn=l(),X=a("div"),T(It.$$.fragment),Jn=l(),tt=a("p"),Qn=s("The "),ko=a("a"),Zn=s("HubertForCTC"),ea=s(" forward method, overrides the "),Uo=a("code"),ta=s("__call__"),oa=s(" special method."),sa=l(),T(pt.$$.fragment),na=l(),Ko=a("p"),aa=s("Example:"),ra=l(),T(Wt.$$.fragment),ia=l(),T(Lt.$$.fragment),bs=l(),ot=a("h2"),ht=a("a"),Yo=a("span"),T(Nt.$$.fragment),la=l(),Go=a("span"),da=s("HubertForSequenceClassification"),vs=l(),R=a("div"),T(Bt.$$.fragment),ca=l(),Xo=a("p"),pa=s(`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),ha=l(),Rt=a("p"),ua=s("Hubert was proposed in "),Vt=a("a"),ma=s(`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),fa=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),ga=l(),Ut=a("p"),_a=s("This model inherits from "),$o=a("a"),ba=s("PreTrainedModel"),va=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),wa=l(),Kt=a("p"),ya=s("This model is a PyTorch "),Yt=a("a"),Ta=s("torch.nn.Module"),ka=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$a=l(),J=a("div"),T(Gt.$$.fragment),Ha=l(),st=a("p"),Ca=s("The "),Ho=a("a"),ja=s("HubertForSequenceClassification"),Ea=s(" forward method, overrides the "),Jo=a("code"),Fa=s("__call__"),qa=s(" special method."),Ma=l(),T(ut.$$.fragment),xa=l(),Qo=a("p"),Pa=s("Example:"),Sa=l(),T(Xt.$$.fragment),za=l(),T(Jt.$$.fragment),ws=l(),nt=a("h2"),mt=a("a"),Zo=a("span"),T(Qt.$$.fragment),Da=l(),es=a("span"),Aa=s("TFHubertModel"),ys=l(),V=a("div"),T(Zt.$$.fragment),Oa=l(),ts=a("p"),Ia=s("The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top."),Wa=l(),eo=a("p"),La=s("This model inherits from "),Co=a("a"),Na=s("TFPreTrainedModel"),Ba=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ra=l(),to=a("p"),Va=s("This model is also a "),oo=a("a"),Ua=s("tf.keras.Model"),Ka=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ya=l(),T(ft.$$.fragment),Ga=l(),fe=a("div"),T(so.$$.fragment),Xa=l(),at=a("p"),Ja=s("The "),jo=a("a"),Qa=s("TFHubertModel"),Za=s(" forward method, overrides the "),os=a("code"),er=s("__call__"),tr=s(" special method."),or=l(),T(gt.$$.fragment),sr=l(),ss=a("p"),nr=s("Example:"),ar=l(),T(no.$$.fragment),Ts=l(),rt=a("h2"),_t=a("a"),ns=a("span"),T(ao.$$.fragment),rr=l(),as=a("span"),ir=s("TFHubertForCTC"),ks=l(),U=a("div"),T(ro.$$.fragment),lr=l(),io=a("p"),dr=s("TFHubert Model with a "),rs=a("code"),cr=s("language modeling"),pr=s(" head on top for Connectionist Temporal Classification (CTC)."),hr=l(),lo=a("p"),ur=s("This model inherits from "),Eo=a("a"),mr=s("TFPreTrainedModel"),fr=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gr=l(),co=a("p"),_r=s("This model is also a "),po=a("a"),br=s("tf.keras.Model"),vr=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wr=l(),T(bt.$$.fragment),yr=l(),ge=a("div"),T(ho.$$.fragment),Tr=l(),it=a("p"),kr=s("The "),Fo=a("a"),$r=s("TFHubertForCTC"),Hr=s(" forward method, overrides the "),is=a("code"),Cr=s("__call__"),jr=s(" special method."),Er=l(),T(vt.$$.fragment),Fr=l(),ls=a("p"),qr=s("Example:"),Mr=l(),T(uo.$$.fragment),this.h()},l(o){const m=Vi('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(t),w=d(o),f=r(o,"H1",{class:!0});var mo=i(f);g=r(mo,"A",{id:!0,class:!0,href:!0});var ds=i(g);v=r(ds,"SPAN",{});var cs=i(v);k(b.$$.fragment,cs),cs.forEach(t),ds.forEach(t),_=d(mo),E=r(mo,"SPAN",{});var ps=i(E);Fe=n(ps,"Hubert"),ps.forEach(t),mo.forEach(t),de=d(o),F=r(o,"H2",{class:!0});var fo=i(F);K=r(fo,"A",{id:!0,class:!0,href:!0});var hs=i(K);O=r(hs,"SPAN",{});var us=i(O);k(Q.$$.fragment,us),us.forEach(t),hs.forEach(t),qe=d(fo),I=r(fo,"SPAN",{});var xr=i(I);Me=n(xr,"Overview"),xr.forEach(t),fo.forEach(t),ye=d(o),D=r(o,"P",{});var Hs=i(D);W=n(Hs,"Hubert was proposed in "),Z=r(Hs,"A",{href:!0,rel:!0});var Pr=i(Z);_e=n(Pr,"HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),Pr.forEach(t),q=n(Hs,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`),Hs.forEach(t),x=d(o),ce=r(o,"P",{});var Sr=i(ce);ee=n(Sr,"The abstract from the paper is the following:"),Sr.forEach(t),Te=d(o),pe=r(o,"P",{});var zr=i(pe);L=r(zr,"EM",{});var Dr=i(L);xe=n(Dr,`Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
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
reduction on the more challenging dev-other and test-other evaluation subsets.`),Dr.forEach(t),zr.forEach(t),ke=d(o),M=r(o,"P",{});var Ar=i(M);Pe=n(Ar,"Tips:"),Ar.forEach(t),Y=d(o),G=r(o,"UL",{});var Cs=i(G);be=r(Cs,"LI",{});var Or=i(be);te=n(Or,"Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Or.forEach(t),Se=d(Cs),oe=r(Cs,"LI",{});var js=i(oe);N=n(js,`Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),he=r(js,"A",{href:!0});var Ir=i(he);se=n(Ir,"Wav2Vec2CTCTokenizer"),Ir.forEach(t),ze=n(js,"."),js.forEach(t),Cs.forEach(t),h=d(o),y=r(o,"P",{});var Es=i(y);ve=n(Es,"This model was contributed by "),we=r(Es,"A",{href:!0,rel:!0});var Wr=i(we);Ue=n(Wr,"patrickvonplaten"),Wr.forEach(t),B=n(Es,"."),Es.forEach(t),Oe=d(o),ne=r(o,"H2",{class:!0});var Fs=i(ne);ue=r(Fs,"A",{id:!0,class:!0,href:!0});var Lr=i(ue);S=r(Lr,"SPAN",{});var Nr=i(S);k(z.$$.fragment,Nr),Nr.forEach(t),Lr.forEach(t),Ke=d(Fs),De=r(Fs,"SPAN",{});var Br=i(De);ae=n(Br,"HubertConfig"),Br.forEach(t),Fs.forEach(t),Ie=d(o),P=r(o,"DIV",{class:!0});var We=i(P);k(re.$$.fragment,We),Ye=d(We),Ge=r(We,"P",{});var qo=i(Ge);Ys=n(qo,"This is the configuration class to store the configuration of a "),_o=r(qo,"A",{href:!0});var Rr=i(_o);Gs=n(Rr,"HubertModel"),Rr.forEach(t),Xs=n(qo,`. It is used to instantiate an
Hubert model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Hubert
`),Tt=r(qo,"A",{href:!0,rel:!0});var Vr=i(Tt);Js=n(Vr,"facebook/hubert-base-ls960"),Vr.forEach(t),Qs=n(qo," architecture."),qo.forEach(t),Zs=d(We),Xe=r(We,"P",{});var Mo=i(Xe);en=n(Mo,"Configuration objects inherit from "),bo=r(Mo,"A",{href:!0});var Ur=i(bo);tn=n(Ur,"PretrainedConfig"),Ur.forEach(t),on=n(Mo,` and can be used to control the model outputs. Read the
documentation from `),vo=r(Mo,"A",{href:!0});var Kr=i(vo);sn=n(Kr,"PretrainedConfig"),Kr.forEach(t),nn=n(Mo," for more information."),Mo.forEach(t),an=d(We),Oo=r(We,"P",{});var Yr=i(Oo);rn=n(Yr,"Example:"),Yr.forEach(t),ln=d(We),k(kt.$$.fragment,We),We.forEach(t),ms=d(o),Je=r(o,"H2",{class:!0});var qs=i(Je);lt=r(qs,"A",{id:!0,class:!0,href:!0});var Gr=i(lt);Io=r(Gr,"SPAN",{});var Xr=i(Io);k($t.$$.fragment,Xr),Xr.forEach(t),Gr.forEach(t),dn=d(qs),Wo=r(qs,"SPAN",{});var Jr=i(Wo);cn=n(Jr,"HubertModel"),Jr.forEach(t),qs.forEach(t),fs=d(o),ie=r(o,"DIV",{class:!0});var Le=i(ie);k(Ht.$$.fragment,Le),pn=d(Le),Ct=r(Le,"P",{});var Ms=i(Ct);hn=n(Ms,`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in `),jt=r(Ms,"A",{href:!0,rel:!0});var Qr=i(jt);un=n(Qr,`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),Qr.forEach(t),mn=n(Ms,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Ms.forEach(t),fn=d(Le),Et=r(Le,"P",{});var xs=i(Et);gn=n(xs,"This model inherits from "),wo=r(xs,"A",{href:!0});var Zr=i(wo);_n=n(Zr,"PreTrainedModel"),Zr.forEach(t),bn=n(xs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),xs.forEach(t),vn=d(Le),Ft=r(Le,"P",{});var Ps=i(Ft);wn=n(Ps,"This model is a PyTorch "),qt=r(Ps,"A",{href:!0,rel:!0});var ei=i(qt);yn=n(ei,"torch.nn.Module"),ei.forEach(t),Tn=n(Ps,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ps.forEach(t),kn=d(Le),me=r(Le,"DIV",{class:!0});var Ne=i(me);k(Mt.$$.fragment,Ne),$n=d(Ne),Qe=r(Ne,"P",{});var xo=i(Qe);Hn=n(xo,"The "),yo=r(xo,"A",{href:!0});var ti=i(yo);Cn=n(ti,"HubertModel"),ti.forEach(t),jn=n(xo," forward method, overrides the "),Lo=r(xo,"CODE",{});var oi=i(Lo);En=n(oi,"__call__"),oi.forEach(t),Fn=n(xo," special method."),xo.forEach(t),qn=d(Ne),k(dt.$$.fragment,Ne),Mn=d(Ne),No=r(Ne,"P",{});var si=i(No);xn=n(si,"Example:"),si.forEach(t),Pn=d(Ne),k(xt.$$.fragment,Ne),Ne.forEach(t),Le.forEach(t),gs=d(o),Ze=r(o,"H2",{class:!0});var Ss=i(Ze);ct=r(Ss,"A",{id:!0,class:!0,href:!0});var ni=i(ct);Bo=r(ni,"SPAN",{});var ai=i(Bo);k(Pt.$$.fragment,ai),ai.forEach(t),ni.forEach(t),Sn=d(Ss),Ro=r(Ss,"SPAN",{});var ri=i(Ro);zn=n(ri,"HubertForCTC"),ri.forEach(t),Ss.forEach(t),_s=d(o),le=r(o,"DIV",{class:!0});var Be=i(le);k(St.$$.fragment,Be),Dn=d(Be),et=r(Be,"P",{});var Po=i(et);An=n(Po,"Hubert Model with a "),Vo=r(Po,"CODE",{});var ii=i(Vo);On=n(ii,"language modeling"),ii.forEach(t),In=n(Po,` head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in `),zt=r(Po,"A",{href:!0,rel:!0});var li=i(zt);Wn=n(li,`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),li.forEach(t),Ln=n(Po,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Po.forEach(t),Nn=d(Be),Dt=r(Be,"P",{});var zs=i(Dt);Bn=n(zs,"This model inherits from "),To=r(zs,"A",{href:!0});var di=i(To);Rn=n(di,"PreTrainedModel"),di.forEach(t),Vn=n(zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),zs.forEach(t),Un=d(Be),At=r(Be,"P",{});var Ds=i(At);Kn=n(Ds,"This model is a PyTorch "),Ot=r(Ds,"A",{href:!0,rel:!0});var ci=i(Ot);Yn=n(ci,"torch.nn.Module"),ci.forEach(t),Gn=n(Ds,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ds.forEach(t),Xn=d(Be),X=r(Be,"DIV",{class:!0});var $e=i(X);k(It.$$.fragment,$e),Jn=d($e),tt=r($e,"P",{});var So=i(tt);Qn=n(So,"The "),ko=r(So,"A",{href:!0});var pi=i(ko);Zn=n(pi,"HubertForCTC"),pi.forEach(t),ea=n(So," forward method, overrides the "),Uo=r(So,"CODE",{});var hi=i(Uo);ta=n(hi,"__call__"),hi.forEach(t),oa=n(So," special method."),So.forEach(t),sa=d($e),k(pt.$$.fragment,$e),na=d($e),Ko=r($e,"P",{});var ui=i(Ko);aa=n(ui,"Example:"),ui.forEach(t),ra=d($e),k(Wt.$$.fragment,$e),ia=d($e),k(Lt.$$.fragment,$e),$e.forEach(t),Be.forEach(t),bs=d(o),ot=r(o,"H2",{class:!0});var As=i(ot);ht=r(As,"A",{id:!0,class:!0,href:!0});var mi=i(ht);Yo=r(mi,"SPAN",{});var fi=i(Yo);k(Nt.$$.fragment,fi),fi.forEach(t),mi.forEach(t),la=d(As),Go=r(As,"SPAN",{});var gi=i(Go);da=n(gi,"HubertForSequenceClassification"),gi.forEach(t),As.forEach(t),vs=d(o),R=r(o,"DIV",{class:!0});var He=i(R);k(Bt.$$.fragment,He),ca=d(He),Xo=r(He,"P",{});var _i=i(Xo);pa=n(_i,`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),_i.forEach(t),ha=d(He),Rt=r(He,"P",{});var Os=i(Rt);ua=n(Os,"Hubert was proposed in "),Vt=r(Os,"A",{href:!0,rel:!0});var bi=i(Vt);ma=n(bi,`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),bi.forEach(t),fa=n(Os,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Os.forEach(t),ga=d(He),Ut=r(He,"P",{});var Is=i(Ut);_a=n(Is,"This model inherits from "),$o=r(Is,"A",{href:!0});var vi=i($o);ba=n(vi,"PreTrainedModel"),vi.forEach(t),va=n(Is,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Is.forEach(t),wa=d(He),Kt=r(He,"P",{});var Ws=i(Kt);ya=n(Ws,"This model is a PyTorch "),Yt=r(Ws,"A",{href:!0,rel:!0});var wi=i(Yt);Ta=n(wi,"torch.nn.Module"),wi.forEach(t),ka=n(Ws,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ws.forEach(t),$a=d(He),J=r(He,"DIV",{class:!0});var Ce=i(J);k(Gt.$$.fragment,Ce),Ha=d(Ce),st=r(Ce,"P",{});var zo=i(st);Ca=n(zo,"The "),Ho=r(zo,"A",{href:!0});var yi=i(Ho);ja=n(yi,"HubertForSequenceClassification"),yi.forEach(t),Ea=n(zo," forward method, overrides the "),Jo=r(zo,"CODE",{});var Ti=i(Jo);Fa=n(Ti,"__call__"),Ti.forEach(t),qa=n(zo," special method."),zo.forEach(t),Ma=d(Ce),k(ut.$$.fragment,Ce),xa=d(Ce),Qo=r(Ce,"P",{});var ki=i(Qo);Pa=n(ki,"Example:"),ki.forEach(t),Sa=d(Ce),k(Xt.$$.fragment,Ce),za=d(Ce),k(Jt.$$.fragment,Ce),Ce.forEach(t),He.forEach(t),ws=d(o),nt=r(o,"H2",{class:!0});var Ls=i(nt);mt=r(Ls,"A",{id:!0,class:!0,href:!0});var $i=i(mt);Zo=r($i,"SPAN",{});var Hi=i(Zo);k(Qt.$$.fragment,Hi),Hi.forEach(t),$i.forEach(t),Da=d(Ls),es=r(Ls,"SPAN",{});var Ci=i(es);Aa=n(Ci,"TFHubertModel"),Ci.forEach(t),Ls.forEach(t),ys=d(o),V=r(o,"DIV",{class:!0});var je=i(V);k(Zt.$$.fragment,je),Oa=d(je),ts=r(je,"P",{});var ji=i(ts);Ia=n(ji,"The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top."),ji.forEach(t),Wa=d(je),eo=r(je,"P",{});var Ns=i(eo);La=n(Ns,"This model inherits from "),Co=r(Ns,"A",{href:!0});var Ei=i(Co);Na=n(Ei,"TFPreTrainedModel"),Ei.forEach(t),Ba=n(Ns,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ns.forEach(t),Ra=d(je),to=r(je,"P",{});var Bs=i(to);Va=n(Bs,"This model is also a "),oo=r(Bs,"A",{href:!0,rel:!0});var Fi=i(oo);Ua=n(Fi,"tf.keras.Model"),Fi.forEach(t),Ka=n(Bs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bs.forEach(t),Ya=d(je),k(ft.$$.fragment,je),Ga=d(je),fe=r(je,"DIV",{class:!0});var Re=i(fe);k(so.$$.fragment,Re),Xa=d(Re),at=r(Re,"P",{});var Do=i(at);Ja=n(Do,"The "),jo=r(Do,"A",{href:!0});var qi=i(jo);Qa=n(qi,"TFHubertModel"),qi.forEach(t),Za=n(Do," forward method, overrides the "),os=r(Do,"CODE",{});var Mi=i(os);er=n(Mi,"__call__"),Mi.forEach(t),tr=n(Do," special method."),Do.forEach(t),or=d(Re),k(gt.$$.fragment,Re),sr=d(Re),ss=r(Re,"P",{});var xi=i(ss);nr=n(xi,"Example:"),xi.forEach(t),ar=d(Re),k(no.$$.fragment,Re),Re.forEach(t),je.forEach(t),Ts=d(o),rt=r(o,"H2",{class:!0});var Rs=i(rt);_t=r(Rs,"A",{id:!0,class:!0,href:!0});var Pi=i(_t);ns=r(Pi,"SPAN",{});var Si=i(ns);k(ao.$$.fragment,Si),Si.forEach(t),Pi.forEach(t),rr=d(Rs),as=r(Rs,"SPAN",{});var zi=i(as);ir=n(zi,"TFHubertForCTC"),zi.forEach(t),Rs.forEach(t),ks=d(o),U=r(o,"DIV",{class:!0});var Ee=i(U);k(ro.$$.fragment,Ee),lr=d(Ee),io=r(Ee,"P",{});var Vs=i(io);dr=n(Vs,"TFHubert Model with a "),rs=r(Vs,"CODE",{});var Di=i(rs);cr=n(Di,"language modeling"),Di.forEach(t),pr=n(Vs," head on top for Connectionist Temporal Classification (CTC)."),Vs.forEach(t),hr=d(Ee),lo=r(Ee,"P",{});var Us=i(lo);ur=n(Us,"This model inherits from "),Eo=r(Us,"A",{href:!0});var Ai=i(Eo);mr=n(Ai,"TFPreTrainedModel"),Ai.forEach(t),fr=n(Us,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Us.forEach(t),gr=d(Ee),co=r(Ee,"P",{});var Ks=i(co);_r=n(Ks,"This model is also a "),po=r(Ks,"A",{href:!0,rel:!0});var Oi=i(po);br=n(Oi,"tf.keras.Model"),Oi.forEach(t),vr=n(Ks,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ks.forEach(t),wr=d(Ee),k(bt.$$.fragment,Ee),yr=d(Ee),ge=r(Ee,"DIV",{class:!0});var Ve=i(ge);k(ho.$$.fragment,Ve),Tr=d(Ve),it=r(Ve,"P",{});var Ao=i(it);kr=n(Ao,"The "),Fo=r(Ao,"A",{href:!0});var Ii=i(Fo);$r=n(Ii,"TFHubertForCTC"),Ii.forEach(t),Hr=n(Ao," forward method, overrides the "),is=r(Ao,"CODE",{});var Wi=i(is);Cr=n(Wi,"__call__"),Wi.forEach(t),jr=n(Ao," special method."),Ao.forEach(t),Er=d(Ve),k(vt.$$.fragment,Ve),Fr=d(Ve),ls=r(Ve,"P",{});var Li=i(ls);qr=n(Li,"Example:"),Li.forEach(t),Mr=d(Ve),k(uo.$$.fragment,Ve),Ve.forEach(t),Ee.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(el)),c(g,"id","hubert"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#hubert"),c(f,"class","relative group"),c(K,"id","overview"),c(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(K,"href","#overview"),c(F,"class","relative group"),c(Z,"href","https://arxiv.org/abs/2106.07447"),c(Z,"rel","nofollow"),c(he,"href","/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),c(we,"href","https://huggingface.co/patrickvonplaten"),c(we,"rel","nofollow"),c(ue,"id","transformers.HubertConfig"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#transformers.HubertConfig"),c(ne,"class","relative group"),c(_o,"href","/docs/transformers/master/en/model_doc/hubert#transformers.HubertModel"),c(Tt,"href","https://huggingface.co/facebook/hubert-base-ls960"),c(Tt,"rel","nofollow"),c(bo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(vo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(P,"class","docstring"),c(lt,"id","transformers.HubertModel"),c(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lt,"href","#transformers.HubertModel"),c(Je,"class","relative group"),c(jt,"href","https://arxiv.org/abs/2106.07447"),c(jt,"rel","nofollow"),c(wo,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(qt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qt,"rel","nofollow"),c(yo,"href","/docs/transformers/master/en/model_doc/hubert#transformers.HubertModel"),c(me,"class","docstring"),c(ie,"class","docstring"),c(ct,"id","transformers.HubertForCTC"),c(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ct,"href","#transformers.HubertForCTC"),c(Ze,"class","relative group"),c(zt,"href","https://arxiv.org/abs/2106.07447"),c(zt,"rel","nofollow"),c(To,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Ot,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ot,"rel","nofollow"),c(ko,"href","/docs/transformers/master/en/model_doc/hubert#transformers.HubertForCTC"),c(X,"class","docstring"),c(le,"class","docstring"),c(ht,"id","transformers.HubertForSequenceClassification"),c(ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ht,"href","#transformers.HubertForSequenceClassification"),c(ot,"class","relative group"),c(Vt,"href","https://arxiv.org/abs/2106.07447"),c(Vt,"rel","nofollow"),c($o,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Yt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Yt,"rel","nofollow"),c(Ho,"href","/docs/transformers/master/en/model_doc/hubert#transformers.HubertForSequenceClassification"),c(J,"class","docstring"),c(R,"class","docstring"),c(mt,"id","transformers.TFHubertModel"),c(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mt,"href","#transformers.TFHubertModel"),c(nt,"class","relative group"),c(Co,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(oo,"rel","nofollow"),c(jo,"href","/docs/transformers/master/en/model_doc/hubert#transformers.TFHubertModel"),c(fe,"class","docstring"),c(V,"class","docstring"),c(_t,"id","transformers.TFHubertForCTC"),c(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_t,"href","#transformers.TFHubertForCTC"),c(rt,"class","relative group"),c(Eo,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(po,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(po,"rel","nofollow"),c(Fo,"href","/docs/transformers/master/en/model_doc/hubert#transformers.TFHubertForCTC"),c(ge,"class","docstring"),c(U,"class","docstring")},m(o,m){e(document.head,p),u(o,w,m),u(o,f,m),e(f,g),e(g,v),$(b,v,null),e(f,_),e(f,E),e(E,Fe),u(o,de,m),u(o,F,m),e(F,K),e(K,O),$(Q,O,null),e(F,qe),e(F,I),e(I,Me),u(o,ye,m),u(o,D,m),e(D,W),e(D,Z),e(Z,_e),e(D,q),u(o,x,m),u(o,ce,m),e(ce,ee),u(o,Te,m),u(o,pe,m),e(pe,L),e(L,xe),u(o,ke,m),u(o,M,m),e(M,Pe),u(o,Y,m),u(o,G,m),e(G,be),e(be,te),e(G,Se),e(G,oe),e(oe,N),e(oe,he),e(he,se),e(oe,ze),u(o,h,m),u(o,y,m),e(y,ve),e(y,we),e(we,Ue),e(y,B),u(o,Oe,m),u(o,ne,m),e(ne,ue),e(ue,S),$(z,S,null),e(ne,Ke),e(ne,De),e(De,ae),u(o,Ie,m),u(o,P,m),$(re,P,null),e(P,Ye),e(P,Ge),e(Ge,Ys),e(Ge,_o),e(_o,Gs),e(Ge,Xs),e(Ge,Tt),e(Tt,Js),e(Ge,Qs),e(P,Zs),e(P,Xe),e(Xe,en),e(Xe,bo),e(bo,tn),e(Xe,on),e(Xe,vo),e(vo,sn),e(Xe,nn),e(P,an),e(P,Oo),e(Oo,rn),e(P,ln),$(kt,P,null),u(o,ms,m),u(o,Je,m),e(Je,lt),e(lt,Io),$($t,Io,null),e(Je,dn),e(Je,Wo),e(Wo,cn),u(o,fs,m),u(o,ie,m),$(Ht,ie,null),e(ie,pn),e(ie,Ct),e(Ct,hn),e(Ct,jt),e(jt,un),e(Ct,mn),e(ie,fn),e(ie,Et),e(Et,gn),e(Et,wo),e(wo,_n),e(Et,bn),e(ie,vn),e(ie,Ft),e(Ft,wn),e(Ft,qt),e(qt,yn),e(Ft,Tn),e(ie,kn),e(ie,me),$(Mt,me,null),e(me,$n),e(me,Qe),e(Qe,Hn),e(Qe,yo),e(yo,Cn),e(Qe,jn),e(Qe,Lo),e(Lo,En),e(Qe,Fn),e(me,qn),$(dt,me,null),e(me,Mn),e(me,No),e(No,xn),e(me,Pn),$(xt,me,null),u(o,gs,m),u(o,Ze,m),e(Ze,ct),e(ct,Bo),$(Pt,Bo,null),e(Ze,Sn),e(Ze,Ro),e(Ro,zn),u(o,_s,m),u(o,le,m),$(St,le,null),e(le,Dn),e(le,et),e(et,An),e(et,Vo),e(Vo,On),e(et,In),e(et,zt),e(zt,Wn),e(et,Ln),e(le,Nn),e(le,Dt),e(Dt,Bn),e(Dt,To),e(To,Rn),e(Dt,Vn),e(le,Un),e(le,At),e(At,Kn),e(At,Ot),e(Ot,Yn),e(At,Gn),e(le,Xn),e(le,X),$(It,X,null),e(X,Jn),e(X,tt),e(tt,Qn),e(tt,ko),e(ko,Zn),e(tt,ea),e(tt,Uo),e(Uo,ta),e(tt,oa),e(X,sa),$(pt,X,null),e(X,na),e(X,Ko),e(Ko,aa),e(X,ra),$(Wt,X,null),e(X,ia),$(Lt,X,null),u(o,bs,m),u(o,ot,m),e(ot,ht),e(ht,Yo),$(Nt,Yo,null),e(ot,la),e(ot,Go),e(Go,da),u(o,vs,m),u(o,R,m),$(Bt,R,null),e(R,ca),e(R,Xo),e(Xo,pa),e(R,ha),e(R,Rt),e(Rt,ua),e(Rt,Vt),e(Vt,ma),e(Rt,fa),e(R,ga),e(R,Ut),e(Ut,_a),e(Ut,$o),e($o,ba),e(Ut,va),e(R,wa),e(R,Kt),e(Kt,ya),e(Kt,Yt),e(Yt,Ta),e(Kt,ka),e(R,$a),e(R,J),$(Gt,J,null),e(J,Ha),e(J,st),e(st,Ca),e(st,Ho),e(Ho,ja),e(st,Ea),e(st,Jo),e(Jo,Fa),e(st,qa),e(J,Ma),$(ut,J,null),e(J,xa),e(J,Qo),e(Qo,Pa),e(J,Sa),$(Xt,J,null),e(J,za),$(Jt,J,null),u(o,ws,m),u(o,nt,m),e(nt,mt),e(mt,Zo),$(Qt,Zo,null),e(nt,Da),e(nt,es),e(es,Aa),u(o,ys,m),u(o,V,m),$(Zt,V,null),e(V,Oa),e(V,ts),e(ts,Ia),e(V,Wa),e(V,eo),e(eo,La),e(eo,Co),e(Co,Na),e(eo,Ba),e(V,Ra),e(V,to),e(to,Va),e(to,oo),e(oo,Ua),e(to,Ka),e(V,Ya),$(ft,V,null),e(V,Ga),e(V,fe),$(so,fe,null),e(fe,Xa),e(fe,at),e(at,Ja),e(at,jo),e(jo,Qa),e(at,Za),e(at,os),e(os,er),e(at,tr),e(fe,or),$(gt,fe,null),e(fe,sr),e(fe,ss),e(ss,nr),e(fe,ar),$(no,fe,null),u(o,Ts,m),u(o,rt,m),e(rt,_t),e(_t,ns),$(ao,ns,null),e(rt,rr),e(rt,as),e(as,ir),u(o,ks,m),u(o,U,m),$(ro,U,null),e(U,lr),e(U,io),e(io,dr),e(io,rs),e(rs,cr),e(io,pr),e(U,hr),e(U,lo),e(lo,ur),e(lo,Eo),e(Eo,mr),e(lo,fr),e(U,gr),e(U,co),e(co,_r),e(co,po),e(po,br),e(co,vr),e(U,wr),$(bt,U,null),e(U,yr),e(U,ge),$(ho,ge,null),e(ge,Tr),e(ge,it),e(it,kr),e(it,Fo),e(Fo,$r),e(it,Hr),e(it,is),e(is,Cr),e(it,jr),e(ge,Er),$(vt,ge,null),e(ge,Fr),e(ge,ls),e(ls,qr),e(ge,Mr),$(uo,ge,null),$s=!0},p(o,[m]){const mo={};m&2&&(mo.$$scope={dirty:m,ctx:o}),dt.$set(mo);const ds={};m&2&&(ds.$$scope={dirty:m,ctx:o}),pt.$set(ds);const cs={};m&2&&(cs.$$scope={dirty:m,ctx:o}),ut.$set(cs);const ps={};m&2&&(ps.$$scope={dirty:m,ctx:o}),ft.$set(ps);const fo={};m&2&&(fo.$$scope={dirty:m,ctx:o}),gt.$set(fo);const hs={};m&2&&(hs.$$scope={dirty:m,ctx:o}),bt.$set(hs);const us={};m&2&&(us.$$scope={dirty:m,ctx:o}),vt.$set(us)},i(o){$s||(H(b.$$.fragment,o),H(Q.$$.fragment,o),H(z.$$.fragment,o),H(re.$$.fragment,o),H(kt.$$.fragment,o),H($t.$$.fragment,o),H(Ht.$$.fragment,o),H(Mt.$$.fragment,o),H(dt.$$.fragment,o),H(xt.$$.fragment,o),H(Pt.$$.fragment,o),H(St.$$.fragment,o),H(It.$$.fragment,o),H(pt.$$.fragment,o),H(Wt.$$.fragment,o),H(Lt.$$.fragment,o),H(Nt.$$.fragment,o),H(Bt.$$.fragment,o),H(Gt.$$.fragment,o),H(ut.$$.fragment,o),H(Xt.$$.fragment,o),H(Jt.$$.fragment,o),H(Qt.$$.fragment,o),H(Zt.$$.fragment,o),H(ft.$$.fragment,o),H(so.$$.fragment,o),H(gt.$$.fragment,o),H(no.$$.fragment,o),H(ao.$$.fragment,o),H(ro.$$.fragment,o),H(bt.$$.fragment,o),H(ho.$$.fragment,o),H(vt.$$.fragment,o),H(uo.$$.fragment,o),$s=!0)},o(o){C(b.$$.fragment,o),C(Q.$$.fragment,o),C(z.$$.fragment,o),C(re.$$.fragment,o),C(kt.$$.fragment,o),C($t.$$.fragment,o),C(Ht.$$.fragment,o),C(Mt.$$.fragment,o),C(dt.$$.fragment,o),C(xt.$$.fragment,o),C(Pt.$$.fragment,o),C(St.$$.fragment,o),C(It.$$.fragment,o),C(pt.$$.fragment,o),C(Wt.$$.fragment,o),C(Lt.$$.fragment,o),C(Nt.$$.fragment,o),C(Bt.$$.fragment,o),C(Gt.$$.fragment,o),C(ut.$$.fragment,o),C(Xt.$$.fragment,o),C(Jt.$$.fragment,o),C(Qt.$$.fragment,o),C(Zt.$$.fragment,o),C(ft.$$.fragment,o),C(so.$$.fragment,o),C(gt.$$.fragment,o),C(no.$$.fragment,o),C(ao.$$.fragment,o),C(ro.$$.fragment,o),C(bt.$$.fragment,o),C(ho.$$.fragment,o),C(vt.$$.fragment,o),C(uo.$$.fragment,o),$s=!1},d(o){t(p),o&&t(w),o&&t(f),j(b),o&&t(de),o&&t(F),j(Q),o&&t(ye),o&&t(D),o&&t(x),o&&t(ce),o&&t(Te),o&&t(pe),o&&t(ke),o&&t(M),o&&t(Y),o&&t(G),o&&t(h),o&&t(y),o&&t(Oe),o&&t(ne),j(z),o&&t(Ie),o&&t(P),j(re),j(kt),o&&t(ms),o&&t(Je),j($t),o&&t(fs),o&&t(ie),j(Ht),j(Mt),j(dt),j(xt),o&&t(gs),o&&t(Ze),j(Pt),o&&t(_s),o&&t(le),j(St),j(It),j(pt),j(Wt),j(Lt),o&&t(bs),o&&t(ot),j(Nt),o&&t(vs),o&&t(R),j(Bt),j(Gt),j(ut),j(Xt),j(Jt),o&&t(ws),o&&t(nt),j(Qt),o&&t(ys),o&&t(V),j(Zt),j(ft),j(so),j(gt),j(no),o&&t(Ts),o&&t(rt),j(ao),o&&t(ks),o&&t(U),j(ro),j(bt),j(ho),j(vt),j(uo)}}}const el={local:"hubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.HubertConfig",title:"HubertConfig"},{local:"transformers.HubertModel",title:"HubertModel"},{local:"transformers.HubertForCTC",title:"HubertForCTC"},{local:"transformers.HubertForSequenceClassification",title:"HubertForSequenceClassification"},{local:"transformers.TFHubertModel",title:"TFHubertModel"},{local:"transformers.TFHubertForCTC",title:"TFHubertForCTC"}],title:"Hubert"};function tl(A,p,w){let{fw:f}=p;return A.$$set=g=>{"fw"in g&&w(0,f=g.fw)},[f]}class ll extends Ni{constructor(p){super();Bi(this,p,tl,Zi,Ri,{fw:0})}}export{ll as default,el as metadata};
