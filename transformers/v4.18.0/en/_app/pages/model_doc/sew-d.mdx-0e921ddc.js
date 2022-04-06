import{S as Es,i as Ss,s as Ws,e as n,k as d,w as _,t as r,M as Ds,c as a,d as o,m as c,a as s,x as v,h as i,b as l,F as e,g as f,y as b,q as w,o as y,B as E,v as Ts}from"../../chunks/vendor-6b77c823.js";import{T as Ta}from"../../chunks/Tip-39098574.js";import{D as Je}from"../../chunks/Docstring-abef54e3.js";import{C as ft}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ht}from"../../chunks/IconCopyLink-7a11ce68.js";function ks(X){let m,T,h,S,W;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),S=r("Module"),W=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=a(u,"P",{});var g=s(m);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(g,"CODE",{});var j=s(h);S=i(j,"Module"),j.forEach(o),W=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,m,g),e(m,T),e(m,h),e(h,S),e(m,W)},d(u){u&&o(m)}}}function Cs(X){let m,T,h,S,W;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),S=r("Module"),W=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=a(u,"P",{});var g=s(m);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(g,"CODE",{});var j=s(h);S=i(j,"Module"),j.forEach(o),W=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,m,g),e(m,T),e(m,h),e(h,S),e(m,W)},d(u){u&&o(m)}}}function $s(X){let m,T,h,S,W;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),S=r("Module"),W=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=a(u,"P",{});var g=s(m);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(g,"CODE",{});var j=s(h);S=i(j,"Module"),j.forEach(o),W=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,m,g),e(m,T),e(m,h),e(h,S),e(m,W)},d(u){u&&o(m)}}}function qs(X){let m,T,h,S,W,u,g,j,vo,Ot,I,Z,ut,ce,bo,gt,wo,Vt,ee,yo,pe,Eo,So,Lt,Qe,Wo,It,Be,_t,Do,Nt,Ye,To,Kt,te,vt,ko,Co,me,$o,Ge,qo,xo,Ht,oe,jo,fe,Po,Fo,Rt,N,ne,bt,he,Mo,wt,zo,Ut,$,ue,Ao,K,Oo,Xe,Vo,Lo,ge,Io,No,Ko,H,Ho,Ze,Ro,Uo,et,Jo,Qo,Bo,yt,Yo,Go,_e,Jt,R,ae,Et,ve,Xo,St,Zo,Qt,q,be,en,we,tn,ye,on,nn,an,Ee,sn,tt,rn,ln,dn,Se,cn,We,pn,mn,fn,P,De,hn,U,un,ot,gn,_n,Wt,vn,bn,wn,se,yn,Dt,En,Sn,Te,Bt,J,re,Tt,ke,Wn,kt,Dn,Yt,x,Ce,Tn,Q,kn,Ct,Cn,$n,$e,qn,xn,jn,qe,Pn,nt,Fn,Mn,zn,xe,An,je,On,Vn,Ln,k,Pe,In,B,Nn,at,Kn,Hn,$t,Rn,Un,Jn,ie,Qn,qt,Bn,Yn,Fe,Gn,Me,Gt,Y,le,xt,ze,Xn,jt,Zn,Xt,D,Ae,ea,Pt,ta,oa,Oe,na,Ve,aa,sa,ra,Le,ia,st,la,da,ca,Ie,pa,Ne,ma,fa,ha,C,Ke,ua,G,ga,rt,_a,va,Ft,ba,wa,ya,de,Ea,Mt,Sa,Wa,He,Da,Re,Zt;return u=new ht({}),ce=new ht({}),he=new ht({}),ue=new Je({props:{name:"class transformers.SEWDConfig",anchor:"transformers.SEWDConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"squeeze_factor",val:" = 2"},{name:"max_position_embeddings",val:" = 512"},{name:"position_buckets",val:" = 256"},{name:"share_att_key",val:" = True"},{name:"relative_attention",val:" = True"},{name:"position_biased_input",val:" = False"},{name:"pos_att_type",val:" = ('p2c', 'c2p')"},{name:"norm_rel_ebd",val:" = 'layer_norm'"},{name:"hidden_act",val:" = 'gelu_python'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"feature_layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)"},{name:"conv_kernel",val:" = (10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/sew_d/configuration_sew_d.py#L32",parametersDescription:[{anchor:"transformers.SEWDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the SEW-D model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <code>SEWD</code>.`,name:"vocab_size"},{anchor:"transformers.SEWDConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.SEWDConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.SEWDConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.SEWDConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.SEWDConfig.squeeze_factor",description:`<strong>squeeze_factor</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Sequence length downsampling factor after the encoder and upsampling factor after the transformer.`,name:"squeeze_factor"},{anchor:"transformers.SEWDConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.SEWDConfig.position_buckets",description:`<strong>position_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum size of relative position embeddings.`,name:"position_buckets"},{anchor:"transformers.SEWDConfig.share_att_key",description:`<strong>share_att_key</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to share attention key with c2p and p2c.`,name:"share_att_key"},{anchor:"transformers.SEWDConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.SEWDConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.SEWDConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>Tuple[str]</code>, <em>optional</em>, defaults to <code>(&quot;p2c&quot;, &quot;c2p&quot;)</code>) &#x2014;
The type of relative position attention, it can be a combination of <code>(&quot;p2c&quot;, &quot;c2p&quot;)</code>, e.g. <code>(&quot;p2c&quot;)</code>,
<code>(&quot;p2c&quot;, &quot;c2p&quot;)</code>, <code>(&quot;p2c&quot;, &quot;c2p&quot;)</code>.`,name:"pos_att_type"},{anchor:"transformers.SEWDConfig.norm_rel_ebd",description:`<strong>norm_rel_ebd</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;layer_norm&quot;</code>) &#x2014;
Whether to use layer norm in relative embedding (<code>&quot;layer_norm&quot;</code> if yes)`,name:"norm_rel_ebd"},{anchor:"transformers.SEWDConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_python&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code>, <code>&quot;gelu_python&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SEWDConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.SEWDConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.SEWDConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDForCTC">SEWDForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.SEWDConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SEWDConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers in the transformer encoder.`,name:"layer_norm_eps"},{anchor:"transformers.SEWDConfig.feature_layer_norm_eps",description:`<strong>feature_layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization after the feature encoder.`,name:"feature_layer_norm_eps"},{anchor:"transformers.SEWDConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.SEWDConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.SEWDConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.SEWDConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.SEWDConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.SEWDConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.SEWDConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.SEWDConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.SEWDConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.SEWDConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.SEWDConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.SEWDConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.SEWDConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.SEWDConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.SEWDConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.SEWDConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.SEWDConfig.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.SEWDConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDForCTC">SEWDForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.SEWDConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDForCTC">SEWDForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.SEWDConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification">Wav2Vec2ForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.SEWDConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}]}}),_e=new ft({props:{code:`from transformers import SEWDModel, SEWDConfig

# Initializing a SEW-D asapp/sew-d-tiny-100k style configuration
configuration = SEWDConfig()

# Initializing a model from the asapp/sew-d-tiny-100k style configuration
model = SEWDModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SEWDModel, SEWDConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a SEW-D asapp/sew-d-tiny-100k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SEWDConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the asapp/sew-d-tiny-100k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWDModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ve=new ht({}),be=new Je({props:{name:"class transformers.SEWDModel",anchor:"transformers.SEWDModel",parameters:[{name:"config",val:": SEWDConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/sew_d/modeling_sew_d.py#L1352",parametersDescription:[{anchor:"transformers.SEWDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDConfig">SEWDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),De=new Je({props:{name:"forward",anchor:"transformers.SEWDModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/sew_d/modeling_sew_d.py#L1419",parametersDescription:[{anchor:"transformers.SEWDModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SEWDModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SEWDModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SEWDModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDConfig"
>SEWDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),se=new Ta({props:{$$slots:{default:[ks]},$$scope:{ctx:X}}}),Te=new ft({props:{code:`from transformers import Wav2Vec2Processor, SEWDModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("asapp/sew-d-tiny-100k-ft-ls100h")
model = SEWDModel.from_pretrained("asapp/sew-d-tiny-100k-ft-ls100h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;asapp/sew-d-tiny-100k-ft-ls100h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWDModel.from_pretrained(<span class="hljs-string">&quot;asapp/sew-d-tiny-100k-ft-ls100h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">384</span>]`}}),ke=new ht({}),Ce=new Je({props:{name:"class transformers.SEWDForCTC",anchor:"transformers.SEWDForCTC",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/sew_d/modeling_sew_d.py#L1482",parametersDescription:[{anchor:"transformers.SEWDForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDConfig">SEWDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pe=new Je({props:{name:"forward",anchor:"transformers.SEWDForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/sew_d/modeling_sew_d.py#L1523",parametersDescription:[{anchor:"transformers.SEWDForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWDForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SEWDForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SEWDForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SEWDForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SEWDForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDConfig"
>SEWDConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ie=new Ta({props:{$$slots:{default:[Cs]},$$scope:{ctx:X}}}),Fe=new ft({props:{code:`from transformers import Wav2Vec2Processor, SEWDForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("asapp/sew-d-tiny-100k-ft-ls100h")
model = SEWDForCTC.from_pretrained("asapp/sew-d-tiny-100k-ft-ls100h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWDForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;asapp/sew-d-tiny-100k-ft-ls100h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWDForCTC.from_pretrained(<span class="hljs-string">&quot;asapp/sew-d-tiny-100k-ft-ls100h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTIL OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),Me=new ft({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.21</span>`}}),ze=new ht({}),Ae=new Je({props:{name:"class transformers.SEWDForSequenceClassification",anchor:"transformers.SEWDForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/sew_d/modeling_sew_d.py#L1613",parametersDescription:[{anchor:"transformers.SEWDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDConfig">SEWDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ke=new Je({props:{name:"forward",anchor:"transformers.SEWDForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/sew_d/modeling_sew_d.py#L1658",parametersDescription:[{anchor:"transformers.SEWDForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SEWDForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SEWDForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SEWDForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SEWDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDConfig"
>SEWDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new Ta({props:{$$slots:{default:[$s]},$$scope:{ctx:X}}}),He=new ft({props:{code:`from transformers import Wav2Vec2FeatureExtractor, SEWDForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("anton-l/sew-d-mid-400k-ft-keyword-spotting")
model = SEWDForSequenceClassification.from_pretrained("anton-l/sew-d-mid-400k-ft-keyword-spotting")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, SEWDForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;anton-l/sew-d-mid-400k-ft-keyword-spotting&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;anton-l/sew-d-mid-400k-ft-keyword-spotting&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),Re=new ft({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.16</span>`}}),{c(){m=n("meta"),T=d(),h=n("h1"),S=n("a"),W=n("span"),_(u.$$.fragment),g=d(),j=n("span"),vo=r("SEW-D"),Ot=d(),I=n("h2"),Z=n("a"),ut=n("span"),_(ce.$$.fragment),bo=d(),gt=n("span"),wo=r("Overview"),Vt=d(),ee=n("p"),yo=r("SEW-D (Squeezed and Efficient Wav2Vec with Disentangled attention) was proposed in "),pe=n("a"),Eo=r(`Performance-Efficiency Trade-offs
in Unsupervised Pre-training for Speech Recognition`),So=r(` by Felix Wu, Kwangyoun Kim,
Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav Artzi.`),Lt=d(),Qe=n("p"),Wo=r("The abstract from the paper is the following:"),It=d(),Be=n("p"),_t=n("em"),Do=r(`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),Nt=d(),Ye=n("p"),To=r("Tips:"),Kt=d(),te=n("ul"),vt=n("li"),ko=r("SEW-D is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Co=d(),me=n("li"),$o=r(`SEWDForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Ge=n("a"),qo=r("Wav2Vec2CTCTokenizer"),xo=r("."),Ht=d(),oe=n("p"),jo=r("This model was contributed by "),fe=n("a"),Po=r("anton-l"),Fo=r("."),Rt=d(),N=n("h2"),ne=n("a"),bt=n("span"),_(he.$$.fragment),Mo=d(),wt=n("span"),zo=r("SEWDConfig"),Ut=d(),$=n("div"),_(ue.$$.fragment),Ao=d(),K=n("p"),Oo=r("This is the configuration class to store the configuration of a "),Xe=n("a"),Vo=r("SEWDModel"),Lo=r(`. It is used to instantiate a SEW-D
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the SEW-D
`),ge=n("a"),Io=r("asapp/sew-d-tiny-100k"),No=r(" architecture."),Ko=d(),H=n("p"),Ho=r("Configuration objects inherit from "),Ze=n("a"),Ro=r("PretrainedConfig"),Uo=r(` and can be used to control the model outputs. Read the
documentation from `),et=n("a"),Jo=r("PretrainedConfig"),Qo=r(" for more information."),Bo=d(),yt=n("p"),Yo=r("Example:"),Go=d(),_(_e.$$.fragment),Jt=d(),R=n("h2"),ae=n("a"),Et=n("span"),_(ve.$$.fragment),Xo=d(),St=n("span"),Zo=r("SEWDModel"),Qt=d(),q=n("div"),_(be.$$.fragment),en=d(),we=n("p"),tn=r(`The bare SEW-D Model transformer outputting raw hidden-states without any specific head on top.
SEW-D was proposed in `),ye=n("a"),on=r(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),nn=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),an=d(),Ee=n("p"),sn=r("This model inherits from "),tt=n("a"),rn=r("PreTrainedModel"),ln=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),dn=d(),Se=n("p"),cn=r("This model is a PyTorch "),We=n("a"),pn=r("torch.nn.Module"),mn=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fn=d(),P=n("div"),_(De.$$.fragment),hn=d(),U=n("p"),un=r("The "),ot=n("a"),gn=r("SEWDModel"),_n=r(" forward method, overrides the "),Wt=n("code"),vn=r("__call__"),bn=r(" special method."),wn=d(),_(se.$$.fragment),yn=d(),Dt=n("p"),En=r("Example:"),Sn=d(),_(Te.$$.fragment),Bt=d(),J=n("h2"),re=n("a"),Tt=n("span"),_(ke.$$.fragment),Wn=d(),kt=n("span"),Dn=r("SEWDForCTC"),Yt=d(),x=n("div"),_(Ce.$$.fragment),Tn=d(),Q=n("p"),kn=r("SEW-D Model with a "),Ct=n("code"),Cn=r("language modeling"),$n=r(` head on top for Connectionist Temporal Classification (CTC).
SEW-D was proposed in `),$e=n("a"),qn=r(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),xn=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),jn=d(),qe=n("p"),Pn=r("This model inherits from "),nt=n("a"),Fn=r("PreTrainedModel"),Mn=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),zn=d(),xe=n("p"),An=r("This model is a PyTorch "),je=n("a"),On=r("torch.nn.Module"),Vn=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ln=d(),k=n("div"),_(Pe.$$.fragment),In=d(),B=n("p"),Nn=r("The "),at=n("a"),Kn=r("SEWDForCTC"),Hn=r(" forward method, overrides the "),$t=n("code"),Rn=r("__call__"),Un=r(" special method."),Jn=d(),_(ie.$$.fragment),Qn=d(),qt=n("p"),Bn=r("Example:"),Yn=d(),_(Fe.$$.fragment),Gn=d(),_(Me.$$.fragment),Gt=d(),Y=n("h2"),le=n("a"),xt=n("span"),_(ze.$$.fragment),Xn=d(),jt=n("span"),Zn=r("SEWDForSequenceClassification"),Xt=d(),D=n("div"),_(Ae.$$.fragment),ea=d(),Pt=n("p"),ta=r(`SEWD Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),oa=d(),Oe=n("p"),na=r("SEW-D was proposed in "),Ve=n("a"),aa=r(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),sa=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),ra=d(),Le=n("p"),ia=r("This model inherits from "),st=n("a"),la=r("PreTrainedModel"),da=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ca=d(),Ie=n("p"),pa=r("This model is a PyTorch "),Ne=n("a"),ma=r("torch.nn.Module"),fa=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ha=d(),C=n("div"),_(Ke.$$.fragment),ua=d(),G=n("p"),ga=r("The "),rt=n("a"),_a=r("SEWDForSequenceClassification"),va=r(" forward method, overrides the "),Ft=n("code"),ba=r("__call__"),wa=r(" special method."),ya=d(),_(de.$$.fragment),Ea=d(),Mt=n("p"),Sa=r("Example:"),Wa=d(),_(He.$$.fragment),Da=d(),_(Re.$$.fragment),this.h()},l(t){const p=Ds('[data-svelte="svelte-1phssyn"]',document.head);m=a(p,"META",{name:!0,content:!0}),p.forEach(o),T=c(t),h=a(t,"H1",{class:!0});var Ue=s(h);S=a(Ue,"A",{id:!0,class:!0,href:!0});var zt=s(S);W=a(zt,"SPAN",{});var At=s(W);v(u.$$.fragment,At),At.forEach(o),zt.forEach(o),g=c(Ue),j=a(Ue,"SPAN",{});var ka=s(j);vo=i(ka,"SEW-D"),ka.forEach(o),Ue.forEach(o),Ot=c(t),I=a(t,"H2",{class:!0});var eo=s(I);Z=a(eo,"A",{id:!0,class:!0,href:!0});var Ca=s(Z);ut=a(Ca,"SPAN",{});var $a=s(ut);v(ce.$$.fragment,$a),$a.forEach(o),Ca.forEach(o),bo=c(eo),gt=a(eo,"SPAN",{});var qa=s(gt);wo=i(qa,"Overview"),qa.forEach(o),eo.forEach(o),Vt=c(t),ee=a(t,"P",{});var to=s(ee);yo=i(to,"SEW-D (Squeezed and Efficient Wav2Vec with Disentangled attention) was proposed in "),pe=a(to,"A",{href:!0,rel:!0});var xa=s(pe);Eo=i(xa,`Performance-Efficiency Trade-offs
in Unsupervised Pre-training for Speech Recognition`),xa.forEach(o),So=i(to,` by Felix Wu, Kwangyoun Kim,
Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav Artzi.`),to.forEach(o),Lt=c(t),Qe=a(t,"P",{});var ja=s(Qe);Wo=i(ja,"The abstract from the paper is the following:"),ja.forEach(o),It=c(t),Be=a(t,"P",{});var Pa=s(Be);_t=a(Pa,"EM",{});var Fa=s(_t);Do=i(Fa,`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),Fa.forEach(o),Pa.forEach(o),Nt=c(t),Ye=a(t,"P",{});var Ma=s(Ye);To=i(Ma,"Tips:"),Ma.forEach(o),Kt=c(t),te=a(t,"UL",{});var oo=s(te);vt=a(oo,"LI",{});var za=s(vt);ko=i(za,"SEW-D is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),za.forEach(o),Co=c(oo),me=a(oo,"LI",{});var no=s(me);$o=i(no,`SEWDForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Ge=a(no,"A",{href:!0});var Aa=s(Ge);qo=i(Aa,"Wav2Vec2CTCTokenizer"),Aa.forEach(o),xo=i(no,"."),no.forEach(o),oo.forEach(o),Ht=c(t),oe=a(t,"P",{});var ao=s(oe);jo=i(ao,"This model was contributed by "),fe=a(ao,"A",{href:!0,rel:!0});var Oa=s(fe);Po=i(Oa,"anton-l"),Oa.forEach(o),Fo=i(ao,"."),ao.forEach(o),Rt=c(t),N=a(t,"H2",{class:!0});var so=s(N);ne=a(so,"A",{id:!0,class:!0,href:!0});var Va=s(ne);bt=a(Va,"SPAN",{});var La=s(bt);v(he.$$.fragment,La),La.forEach(o),Va.forEach(o),Mo=c(so),wt=a(so,"SPAN",{});var Ia=s(wt);zo=i(Ia,"SEWDConfig"),Ia.forEach(o),so.forEach(o),Ut=c(t),$=a(t,"DIV",{class:!0});var A=s($);v(ue.$$.fragment,A),Ao=c(A),K=a(A,"P",{});var it=s(K);Oo=i(it,"This is the configuration class to store the configuration of a "),Xe=a(it,"A",{href:!0});var Na=s(Xe);Vo=i(Na,"SEWDModel"),Na.forEach(o),Lo=i(it,`. It is used to instantiate a SEW-D
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the SEW-D
`),ge=a(it,"A",{href:!0,rel:!0});var Ka=s(ge);Io=i(Ka,"asapp/sew-d-tiny-100k"),Ka.forEach(o),No=i(it," architecture."),it.forEach(o),Ko=c(A),H=a(A,"P",{});var lt=s(H);Ho=i(lt,"Configuration objects inherit from "),Ze=a(lt,"A",{href:!0});var Ha=s(Ze);Ro=i(Ha,"PretrainedConfig"),Ha.forEach(o),Uo=i(lt,` and can be used to control the model outputs. Read the
documentation from `),et=a(lt,"A",{href:!0});var Ra=s(et);Jo=i(Ra,"PretrainedConfig"),Ra.forEach(o),Qo=i(lt," for more information."),lt.forEach(o),Bo=c(A),yt=a(A,"P",{});var Ua=s(yt);Yo=i(Ua,"Example:"),Ua.forEach(o),Go=c(A),v(_e.$$.fragment,A),A.forEach(o),Jt=c(t),R=a(t,"H2",{class:!0});var ro=s(R);ae=a(ro,"A",{id:!0,class:!0,href:!0});var Ja=s(ae);Et=a(Ja,"SPAN",{});var Qa=s(Et);v(ve.$$.fragment,Qa),Qa.forEach(o),Ja.forEach(o),Xo=c(ro),St=a(ro,"SPAN",{});var Ba=s(St);Zo=i(Ba,"SEWDModel"),Ba.forEach(o),ro.forEach(o),Qt=c(t),q=a(t,"DIV",{class:!0});var O=s(q);v(be.$$.fragment,O),en=c(O),we=a(O,"P",{});var io=s(we);tn=i(io,`The bare SEW-D Model transformer outputting raw hidden-states without any specific head on top.
SEW-D was proposed in `),ye=a(io,"A",{href:!0,rel:!0});var Ya=s(ye);on=i(Ya,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),Ya.forEach(o),nn=i(io,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),io.forEach(o),an=c(O),Ee=a(O,"P",{});var lo=s(Ee);sn=i(lo,"This model inherits from "),tt=a(lo,"A",{href:!0});var Ga=s(tt);rn=i(Ga,"PreTrainedModel"),Ga.forEach(o),ln=i(lo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),lo.forEach(o),dn=c(O),Se=a(O,"P",{});var co=s(Se);cn=i(co,"This model is a PyTorch "),We=a(co,"A",{href:!0,rel:!0});var Xa=s(We);pn=i(Xa,"torch.nn.Module"),Xa.forEach(o),mn=i(co,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),co.forEach(o),fn=c(O),P=a(O,"DIV",{class:!0});var V=s(P);v(De.$$.fragment,V),hn=c(V),U=a(V,"P",{});var dt=s(U);un=i(dt,"The "),ot=a(dt,"A",{href:!0});var Za=s(ot);gn=i(Za,"SEWDModel"),Za.forEach(o),_n=i(dt," forward method, overrides the "),Wt=a(dt,"CODE",{});var es=s(Wt);vn=i(es,"__call__"),es.forEach(o),bn=i(dt," special method."),dt.forEach(o),wn=c(V),v(se.$$.fragment,V),yn=c(V),Dt=a(V,"P",{});var ts=s(Dt);En=i(ts,"Example:"),ts.forEach(o),Sn=c(V),v(Te.$$.fragment,V),V.forEach(o),O.forEach(o),Bt=c(t),J=a(t,"H2",{class:!0});var po=s(J);re=a(po,"A",{id:!0,class:!0,href:!0});var os=s(re);Tt=a(os,"SPAN",{});var ns=s(Tt);v(ke.$$.fragment,ns),ns.forEach(o),os.forEach(o),Wn=c(po),kt=a(po,"SPAN",{});var as=s(kt);Dn=i(as,"SEWDForCTC"),as.forEach(o),po.forEach(o),Yt=c(t),x=a(t,"DIV",{class:!0});var L=s(x);v(Ce.$$.fragment,L),Tn=c(L),Q=a(L,"P",{});var ct=s(Q);kn=i(ct,"SEW-D Model with a "),Ct=a(ct,"CODE",{});var ss=s(Ct);Cn=i(ss,"language modeling"),ss.forEach(o),$n=i(ct,` head on top for Connectionist Temporal Classification (CTC).
SEW-D was proposed in `),$e=a(ct,"A",{href:!0,rel:!0});var rs=s($e);qn=i(rs,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),rs.forEach(o),xn=i(ct,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),ct.forEach(o),jn=c(L),qe=a(L,"P",{});var mo=s(qe);Pn=i(mo,"This model inherits from "),nt=a(mo,"A",{href:!0});var is=s(nt);Fn=i(is,"PreTrainedModel"),is.forEach(o),Mn=i(mo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),mo.forEach(o),zn=c(L),xe=a(L,"P",{});var fo=s(xe);An=i(fo,"This model is a PyTorch "),je=a(fo,"A",{href:!0,rel:!0});var ls=s(je);On=i(ls,"torch.nn.Module"),ls.forEach(o),Vn=i(fo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fo.forEach(o),Ln=c(L),k=a(L,"DIV",{class:!0});var F=s(k);v(Pe.$$.fragment,F),In=c(F),B=a(F,"P",{});var pt=s(B);Nn=i(pt,"The "),at=a(pt,"A",{href:!0});var ds=s(at);Kn=i(ds,"SEWDForCTC"),ds.forEach(o),Hn=i(pt," forward method, overrides the "),$t=a(pt,"CODE",{});var cs=s($t);Rn=i(cs,"__call__"),cs.forEach(o),Un=i(pt," special method."),pt.forEach(o),Jn=c(F),v(ie.$$.fragment,F),Qn=c(F),qt=a(F,"P",{});var ps=s(qt);Bn=i(ps,"Example:"),ps.forEach(o),Yn=c(F),v(Fe.$$.fragment,F),Gn=c(F),v(Me.$$.fragment,F),F.forEach(o),L.forEach(o),Gt=c(t),Y=a(t,"H2",{class:!0});var ho=s(Y);le=a(ho,"A",{id:!0,class:!0,href:!0});var ms=s(le);xt=a(ms,"SPAN",{});var fs=s(xt);v(ze.$$.fragment,fs),fs.forEach(o),ms.forEach(o),Xn=c(ho),jt=a(ho,"SPAN",{});var hs=s(jt);Zn=i(hs,"SEWDForSequenceClassification"),hs.forEach(o),ho.forEach(o),Xt=c(t),D=a(t,"DIV",{class:!0});var M=s(D);v(Ae.$$.fragment,M),ea=c(M),Pt=a(M,"P",{});var us=s(Pt);ta=i(us,`SEWD Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),us.forEach(o),oa=c(M),Oe=a(M,"P",{});var uo=s(Oe);na=i(uo,"SEW-D was proposed in "),Ve=a(uo,"A",{href:!0,rel:!0});var gs=s(Ve);aa=i(gs,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),gs.forEach(o),sa=i(uo,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),uo.forEach(o),ra=c(M),Le=a(M,"P",{});var go=s(Le);ia=i(go,"This model inherits from "),st=a(go,"A",{href:!0});var _s=s(st);la=i(_s,"PreTrainedModel"),_s.forEach(o),da=i(go,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),go.forEach(o),ca=c(M),Ie=a(M,"P",{});var _o=s(Ie);pa=i(_o,"This model is a PyTorch "),Ne=a(_o,"A",{href:!0,rel:!0});var vs=s(Ne);ma=i(vs,"torch.nn.Module"),vs.forEach(o),fa=i(_o,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_o.forEach(o),ha=c(M),C=a(M,"DIV",{class:!0});var z=s(C);v(Ke.$$.fragment,z),ua=c(z),G=a(z,"P",{});var mt=s(G);ga=i(mt,"The "),rt=a(mt,"A",{href:!0});var bs=s(rt);_a=i(bs,"SEWDForSequenceClassification"),bs.forEach(o),va=i(mt," forward method, overrides the "),Ft=a(mt,"CODE",{});var ws=s(Ft);ba=i(ws,"__call__"),ws.forEach(o),wa=i(mt," special method."),mt.forEach(o),ya=c(z),v(de.$$.fragment,z),Ea=c(z),Mt=a(z,"P",{});var ys=s(Mt);Sa=i(ys,"Example:"),ys.forEach(o),Wa=c(z),v(He.$$.fragment,z),Da=c(z),v(Re.$$.fragment,z),z.forEach(o),M.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(xs)),l(S,"id","sewd"),l(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(S,"href","#sewd"),l(h,"class","relative group"),l(Z,"id","overview"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#overview"),l(I,"class","relative group"),l(pe,"href","https://arxiv.org/abs/2109.06870"),l(pe,"rel","nofollow"),l(Ge,"href","/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),l(fe,"href","https://huggingface.co/anton-l"),l(fe,"rel","nofollow"),l(ne,"id","transformers.SEWDConfig"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.SEWDConfig"),l(N,"class","relative group"),l(Xe,"href","/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDModel"),l(ge,"href","https://huggingface.co/asapp/sew-d-tiny-100k"),l(ge,"rel","nofollow"),l(Ze,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(et,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),l($,"class","docstring"),l(ae,"id","transformers.SEWDModel"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.SEWDModel"),l(R,"class","relative group"),l(ye,"href","https://arxiv.org/abs/2109.06870"),l(ye,"rel","nofollow"),l(tt,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),l(We,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(We,"rel","nofollow"),l(ot,"href","/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDModel"),l(P,"class","docstring"),l(q,"class","docstring"),l(re,"id","transformers.SEWDForCTC"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.SEWDForCTC"),l(J,"class","relative group"),l($e,"href","https://arxiv.org/abs/2109.06870"),l($e,"rel","nofollow"),l(nt,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),l(je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(je,"rel","nofollow"),l(at,"href","/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDForCTC"),l(k,"class","docstring"),l(x,"class","docstring"),l(le,"id","transformers.SEWDForSequenceClassification"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.SEWDForSequenceClassification"),l(Y,"class","relative group"),l(Ve,"href","https://arxiv.org/abs/2109.06870"),l(Ve,"rel","nofollow"),l(st,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),l(Ne,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ne,"rel","nofollow"),l(rt,"href","/docs/transformers/v4.18.0/en/model_doc/sew-d#transformers.SEWDForSequenceClassification"),l(C,"class","docstring"),l(D,"class","docstring")},m(t,p){e(document.head,m),f(t,T,p),f(t,h,p),e(h,S),e(S,W),b(u,W,null),e(h,g),e(h,j),e(j,vo),f(t,Ot,p),f(t,I,p),e(I,Z),e(Z,ut),b(ce,ut,null),e(I,bo),e(I,gt),e(gt,wo),f(t,Vt,p),f(t,ee,p),e(ee,yo),e(ee,pe),e(pe,Eo),e(ee,So),f(t,Lt,p),f(t,Qe,p),e(Qe,Wo),f(t,It,p),f(t,Be,p),e(Be,_t),e(_t,Do),f(t,Nt,p),f(t,Ye,p),e(Ye,To),f(t,Kt,p),f(t,te,p),e(te,vt),e(vt,ko),e(te,Co),e(te,me),e(me,$o),e(me,Ge),e(Ge,qo),e(me,xo),f(t,Ht,p),f(t,oe,p),e(oe,jo),e(oe,fe),e(fe,Po),e(oe,Fo),f(t,Rt,p),f(t,N,p),e(N,ne),e(ne,bt),b(he,bt,null),e(N,Mo),e(N,wt),e(wt,zo),f(t,Ut,p),f(t,$,p),b(ue,$,null),e($,Ao),e($,K),e(K,Oo),e(K,Xe),e(Xe,Vo),e(K,Lo),e(K,ge),e(ge,Io),e(K,No),e($,Ko),e($,H),e(H,Ho),e(H,Ze),e(Ze,Ro),e(H,Uo),e(H,et),e(et,Jo),e(H,Qo),e($,Bo),e($,yt),e(yt,Yo),e($,Go),b(_e,$,null),f(t,Jt,p),f(t,R,p),e(R,ae),e(ae,Et),b(ve,Et,null),e(R,Xo),e(R,St),e(St,Zo),f(t,Qt,p),f(t,q,p),b(be,q,null),e(q,en),e(q,we),e(we,tn),e(we,ye),e(ye,on),e(we,nn),e(q,an),e(q,Ee),e(Ee,sn),e(Ee,tt),e(tt,rn),e(Ee,ln),e(q,dn),e(q,Se),e(Se,cn),e(Se,We),e(We,pn),e(Se,mn),e(q,fn),e(q,P),b(De,P,null),e(P,hn),e(P,U),e(U,un),e(U,ot),e(ot,gn),e(U,_n),e(U,Wt),e(Wt,vn),e(U,bn),e(P,wn),b(se,P,null),e(P,yn),e(P,Dt),e(Dt,En),e(P,Sn),b(Te,P,null),f(t,Bt,p),f(t,J,p),e(J,re),e(re,Tt),b(ke,Tt,null),e(J,Wn),e(J,kt),e(kt,Dn),f(t,Yt,p),f(t,x,p),b(Ce,x,null),e(x,Tn),e(x,Q),e(Q,kn),e(Q,Ct),e(Ct,Cn),e(Q,$n),e(Q,$e),e($e,qn),e(Q,xn),e(x,jn),e(x,qe),e(qe,Pn),e(qe,nt),e(nt,Fn),e(qe,Mn),e(x,zn),e(x,xe),e(xe,An),e(xe,je),e(je,On),e(xe,Vn),e(x,Ln),e(x,k),b(Pe,k,null),e(k,In),e(k,B),e(B,Nn),e(B,at),e(at,Kn),e(B,Hn),e(B,$t),e($t,Rn),e(B,Un),e(k,Jn),b(ie,k,null),e(k,Qn),e(k,qt),e(qt,Bn),e(k,Yn),b(Fe,k,null),e(k,Gn),b(Me,k,null),f(t,Gt,p),f(t,Y,p),e(Y,le),e(le,xt),b(ze,xt,null),e(Y,Xn),e(Y,jt),e(jt,Zn),f(t,Xt,p),f(t,D,p),b(Ae,D,null),e(D,ea),e(D,Pt),e(Pt,ta),e(D,oa),e(D,Oe),e(Oe,na),e(Oe,Ve),e(Ve,aa),e(Oe,sa),e(D,ra),e(D,Le),e(Le,ia),e(Le,st),e(st,la),e(Le,da),e(D,ca),e(D,Ie),e(Ie,pa),e(Ie,Ne),e(Ne,ma),e(Ie,fa),e(D,ha),e(D,C),b(Ke,C,null),e(C,ua),e(C,G),e(G,ga),e(G,rt),e(rt,_a),e(G,va),e(G,Ft),e(Ft,ba),e(G,wa),e(C,ya),b(de,C,null),e(C,Ea),e(C,Mt),e(Mt,Sa),e(C,Wa),b(He,C,null),e(C,Da),b(Re,C,null),Zt=!0},p(t,[p]){const Ue={};p&2&&(Ue.$$scope={dirty:p,ctx:t}),se.$set(Ue);const zt={};p&2&&(zt.$$scope={dirty:p,ctx:t}),ie.$set(zt);const At={};p&2&&(At.$$scope={dirty:p,ctx:t}),de.$set(At)},i(t){Zt||(w(u.$$.fragment,t),w(ce.$$.fragment,t),w(he.$$.fragment,t),w(ue.$$.fragment,t),w(_e.$$.fragment,t),w(ve.$$.fragment,t),w(be.$$.fragment,t),w(De.$$.fragment,t),w(se.$$.fragment,t),w(Te.$$.fragment,t),w(ke.$$.fragment,t),w(Ce.$$.fragment,t),w(Pe.$$.fragment,t),w(ie.$$.fragment,t),w(Fe.$$.fragment,t),w(Me.$$.fragment,t),w(ze.$$.fragment,t),w(Ae.$$.fragment,t),w(Ke.$$.fragment,t),w(de.$$.fragment,t),w(He.$$.fragment,t),w(Re.$$.fragment,t),Zt=!0)},o(t){y(u.$$.fragment,t),y(ce.$$.fragment,t),y(he.$$.fragment,t),y(ue.$$.fragment,t),y(_e.$$.fragment,t),y(ve.$$.fragment,t),y(be.$$.fragment,t),y(De.$$.fragment,t),y(se.$$.fragment,t),y(Te.$$.fragment,t),y(ke.$$.fragment,t),y(Ce.$$.fragment,t),y(Pe.$$.fragment,t),y(ie.$$.fragment,t),y(Fe.$$.fragment,t),y(Me.$$.fragment,t),y(ze.$$.fragment,t),y(Ae.$$.fragment,t),y(Ke.$$.fragment,t),y(de.$$.fragment,t),y(He.$$.fragment,t),y(Re.$$.fragment,t),Zt=!1},d(t){o(m),t&&o(T),t&&o(h),E(u),t&&o(Ot),t&&o(I),E(ce),t&&o(Vt),t&&o(ee),t&&o(Lt),t&&o(Qe),t&&o(It),t&&o(Be),t&&o(Nt),t&&o(Ye),t&&o(Kt),t&&o(te),t&&o(Ht),t&&o(oe),t&&o(Rt),t&&o(N),E(he),t&&o(Ut),t&&o($),E(ue),E(_e),t&&o(Jt),t&&o(R),E(ve),t&&o(Qt),t&&o(q),E(be),E(De),E(se),E(Te),t&&o(Bt),t&&o(J),E(ke),t&&o(Yt),t&&o(x),E(Ce),E(Pe),E(ie),E(Fe),E(Me),t&&o(Gt),t&&o(Y),E(ze),t&&o(Xt),t&&o(D),E(Ae),E(Ke),E(de),E(He),E(Re)}}}const xs={local:"sewd",sections:[{local:"overview",title:"Overview"},{local:"transformers.SEWDConfig",title:"SEWDConfig"},{local:"transformers.SEWDModel",title:"SEWDModel"},{local:"transformers.SEWDForCTC",title:"SEWDForCTC"},{local:"transformers.SEWDForSequenceClassification",title:"SEWDForSequenceClassification"}],title:"SEW-D"};function js(X){return Ts(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Os extends Es{constructor(m){super();Ss(this,m,js,qs,Ws,{})}}export{Os as default,xs as metadata};
