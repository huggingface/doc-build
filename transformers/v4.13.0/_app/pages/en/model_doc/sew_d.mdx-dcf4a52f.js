import{S as vs,i as ws,s as bs,e as n,k as d,w as v,t as r,L as ys,c as a,d as o,m as c,a as s,x as w,h as i,b as l,J as e,g as f,y as b,q as y,o as E,B as S}from"../../../chunks/vendor-e859c359.js";import{T as Ea}from"../../../chunks/Tip-edc75249.js";import{D as Ue}from"../../../chunks/Docstring-ade913b3.js";import{C as uo}from"../../../chunks/CodeBlock-ce4317c2.js";import{I as mt}from"../../../chunks/IconCopyLink-5fae3b20.js";import"../../../chunks/CopyButton-77addb3d.js";function Es(O){let p,W,h,_,D;return{c(){p=n("p"),W=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),h=n("code"),_=r("Module"),D=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(u){p=a(u,"P",{});var g=s(p);W=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),h=a(g,"CODE",{});var $=s(h);_=i($,"Module"),$.forEach(o),D=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,p,g),e(p,W),e(p,h),e(h,_),e(p,D)},d(u){u&&o(p)}}}function Ss(O){let p,W,h,_,D;return{c(){p=n("p"),W=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),h=n("code"),_=r("Module"),D=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(u){p=a(u,"P",{});var g=s(p);W=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),h=a(g,"CODE",{});var $=s(h);_=i($,"Module"),$.forEach(o),D=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,p,g),e(p,W),e(p,h),e(h,_),e(p,D)},d(u){u&&o(p)}}}function Ws(O){let p,W,h,_,D;return{c(){p=n("p"),W=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),h=n("code"),_=r("Module"),D=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(u){p=a(u,"P",{});var g=s(p);W=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),h=a(g,"CODE",{});var $=s(h);_=i($,"Module"),$.forEach(o),D=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,p,g),e(p,W),e(p,h),e(h,_),e(p,D)},d(u){u&&o(p)}}}function Ds(O){let p,W,h,_,D,u,g,$,go,Mt,L,Z,pt,ce,_o,ft,vo,zt,ee,wo,me,bo,yo,At,Re,Eo,Vt,Je,ht,So,Nt,Be,Wo,Kt,te,ut,Do,Co,pe,ko,Qe,To,xo,Ot,oe,$o,fe,qo,jo,Lt,I,ne,gt,he,Po,_t,Fo,It,k,ue,Mo,H,zo,Ye,Ao,Vo,ge,No,Ko,Oo,U,Lo,Ge,Io,Ho,Xe,Uo,Ro,Jo,vt,Bo,Qo,_e,Ht,R,ae,wt,ve,Yo,bt,Go,Ut,T,we,Xo,be,Zo,ye,en,tn,on,Ee,nn,Ze,an,sn,rn,Se,ln,We,dn,cn,mn,q,De,pn,J,fn,et,hn,un,yt,gn,_n,vn,se,wn,Et,bn,yn,Ce,Rt,B,re,St,ke,En,Wt,Sn,Jt,x,Te,Wn,Q,Dn,Dt,Cn,kn,xe,Tn,xn,$n,$e,qn,tt,jn,Pn,Fn,qe,Mn,je,zn,An,Vn,j,Pe,Nn,Y,Kn,ot,On,Ln,Ct,In,Hn,Un,ie,Rn,kt,Jn,Bn,Fe,Bt,G,le,Tt,Me,Qn,xt,Yn,Qt,C,ze,Gn,$t,Xn,Zn,Ae,ea,Ve,ta,oa,na,Ne,aa,nt,sa,ra,ia,Ke,la,Oe,da,ca,ma,P,Le,pa,X,fa,at,ha,ua,qt,ga,_a,va,de,wa,jt,ba,ya,Ie,Yt;return u=new mt({}),ce=new mt({}),he=new mt({}),ue=new Ue({props:{name:"class transformers.SEWDConfig",anchor:"transformers.SEWDConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"squeeze_factor",val:" = 2"},{name:"max_position_embeddings",val:" = 512"},{name:"position_buckets",val:" = 256"},{name:"share_att_key",val:" = True"},{name:"relative_attention",val:" = True"},{name:"position_biased_input",val:" = False"},{name:"pos_att_type",val:" = ('p2c', 'c2p')"},{name:"norm_rel_ebd",val:" = 'layer_norm'"},{name:"hidden_act",val:" = 'gelu_python'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"feature_layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)"},{name:"conv_kernel",val:" = (10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew_d/configuration_sew_d.py#L29",parametersDescription:[{anchor:"transformers.SEWDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
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
The type of relative position attention, it can be a combination of <code>(&quot;p2c&quot;, &quot;c2p&quot;, &quot;p2p&quot;)</code>, e.g.
<code>(&quot;p2c&quot;)</code>, <code>(&quot;p2c&quot;, &quot;c2p&quot;)</code>, <code>(&quot;p2c&quot;, &quot;c2p&quot;, &apos;p2p&quot;)</code>.`,name:"pos_att_type"},{anchor:"transformers.SEWDConfig.norm_rel_ebd",description:`<strong>norm_rel_ebd</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;layer_norm&quot;</code>) &#x2014;
Whether to use layer norm in relative embedding (<code>&quot;layer_norm&quot;</code> if yes)`,name:"norm_rel_ebd"},{anchor:"transformers.SEWDConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_python&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code>, <code>&quot;gelu_python&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SEWDConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.SEWDConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.SEWDConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDForCTC">SEWDForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.SEWDConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SEWDConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers in the transformer encoder.`,name:"layer_norm_eps"},{anchor:"transformers.SEWDConfig.feature_layer_norm_eps",description:`<strong>feature_layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization after the feature extractor.`,name:"feature_layer_norm_eps"},{anchor:"transformers.SEWDConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature extractor. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.SEWDConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature extractor.`,name:"feat_proj_dropout"},{anchor:"transformers.SEWDConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.SEWDConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature extractor. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.SEWDConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature extractor. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.SEWDConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature extractor. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.SEWDConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.SEWDConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.SEWDConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.SEWDConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature extractor. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.SEWDConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask<em>time_prob*len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, _mask_time_prob</em> should be <code>prob_vector_start*mask_time_length</code>. Note that overlap may decrease
the actual percentage of masked vectors. This is only relevant if <code>apply_spec_augment is True</code>.`,name:"mask_time_prob"},{anchor:"transformers.SEWDConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.SEWDConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt; mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.SEWDConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask<em>feature_prob*len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, _mask_feature_prob</em> should be <code>prob_vector_start*mask_feature_length</code>. Note that
overlap may decrease the actual percentage of masked vectors. This is only relevant if <code>apply_spec_augment is True</code>.`,name:"mask_feature_prob"},{anchor:"transformers.SEWDConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.SEWDConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.SEWDConfig.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.SEWDConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDForCTC">SEWDForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.SEWDConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses
mainly occur when the inputs are too short to be aligned to the targets. Only relevant when training an
instance of <a href="/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDForCTC">SEWDForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.SEWDConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification">Wav2Vec2ForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.SEWDConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}]}}),_e=new uo({props:{code:`from transformers import SEWDModel, SEWDConfig

# Initializing a SEW-D asapp/sew-d-tiny-100k style configuration
configuration = SEWDConfig()

# Initializing a model from the asapp/sew-d-tiny-100k style configuration
model = SEWDModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SEWDModel, SEWDConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a SEW-D asapp/sew-d-tiny-100k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SEWDConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the asapp/sew-d-tiny-100k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWDModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ve=new mt({}),we=new Ue({props:{name:"class transformers.SEWDModel",anchor:"transformers.SEWDModel",parameters:[{name:"config",val:": SEWDConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew_d/modeling_sew_d.py#L1328",parametersDescription:[{anchor:"transformers.SEWDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDConfig">SEWDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),De=new Ue({props:{name:"forward",anchor:"transformers.SEWDModel.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew_d/modeling_sew_d.py#L1394",parametersDescription:[{anchor:"transformers.SEWDModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">transformers.Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDConfig"
>SEWDConfig</a>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),se=new Ea({props:{$$slots:{default:[Es]},$$scope:{ctx:O}}}),Ce=new uo({props:{code:`from transformers import Wav2Vec2Processor, SEWDModel
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained('asapp/sew-d-tiny-100k')
model = SEWDModel.from_pretrained('asapp/sew-d-tiny-100k')

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&#x27;asapp/sew-d-tiny-100k&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWDModel.from_pretrained(<span class="hljs-string">&#x27;asapp/sew-d-tiny-100k&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ke=new mt({}),Te=new Ue({props:{name:"class transformers.SEWDForCTC",anchor:"transformers.SEWDForCTC",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew_d/modeling_sew_d.py#L1456",parametersDescription:[{anchor:"transformers.SEWDForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDConfig">SEWDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Pe=new Ue({props:{name:"forward",anchor:"transformers.SEWDForCTC.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew_d/modeling_sew_d.py#L1482",parametersDescription:[{anchor:"transformers.SEWDForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">transformers.Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWDForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SEWDForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDConfig"
>SEWDConfig</a>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ie=new Ea({props:{$$slots:{default:[Ss]},$$scope:{ctx:O}}}),Fe=new uo({props:{code:`from transformers import Wav2Vec2Processor, SEWDForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained('asapp/sew-d-tiny-100k')
model = SEWDForCTC.from_pretrained('asapp/sew-d-tiny-100k')

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)

# compute loss
with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

loss = model(**inputs).loss,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWDForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&#x27;asapp/sew-d-tiny-100k&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWDForCTC.from_pretrained(<span class="hljs-string">&#x27;asapp/sew-d-tiny-100k&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss`}}),Me=new mt({}),ze=new Ue({props:{name:"class transformers.SEWDForSequenceClassification",anchor:"transformers.SEWDForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew_d/modeling_sew_d.py#L1570",parametersDescription:[{anchor:"transformers.SEWDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDConfig">SEWDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Le=new Ue({props:{name:"forward",anchor:"transformers.SEWDForSequenceClassification.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew_d/modeling_sew_d.py#L1599",parametersDescription:[{anchor:"transformers.SEWDForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">transformers.Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SEWDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDConfig"
>SEWDConfig</a>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new Ea({props:{$$slots:{default:[Ws]},$$scope:{ctx:O}}}),Ie=new uo({props:{code:`from transformers import Wav2Vec2FeatureExtractor, SEWDForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained('asapp/sew-d-tiny-100k')
model = SEWDForSequenceClassification.from_pretrained('asapp/sew-d-tiny-100k')

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], return_tensors="pt")
logits = model(**inputs).logits
predicted_class_ids = torch.argmax(logits, dim=-1)
predicted_label = model.config.id2label[predicted_class_ids]

# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, SEWDForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&#x27;asapp/sew-d-tiny-100k&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWDForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;asapp/sew-d-tiny-100k&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss`}}),{c(){p=n("meta"),W=d(),h=n("h1"),_=n("a"),D=n("span"),v(u.$$.fragment),g=d(),$=n("span"),go=r("SEW-D"),Mt=d(),L=n("h2"),Z=n("a"),pt=n("span"),v(ce.$$.fragment),_o=d(),ft=n("span"),vo=r("Overview"),zt=d(),ee=n("p"),wo=r("SEW-D (Squeezed and Efficient Wav2Vec with Disentangled attention) was proposed in "),me=n("a"),bo=r(`Performance-Efficiency Trade-offs
in Unsupervised Pre-training for Speech Recognition`),yo=r(` by Felix Wu, Kwangyoun Kim,
Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav Artzi.`),At=d(),Re=n("p"),Eo=r("The abstract from the paper is the following:"),Vt=d(),Je=n("p"),ht=n("em"),So=r(`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),Nt=d(),Be=n("p"),Wo=r("Tips:"),Kt=d(),te=n("ul"),ut=n("li"),Do=r("SEW-D is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Co=d(),pe=n("li"),ko=r(`SEWDForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Qe=n("a"),To=r("Wav2Vec2CTCTokenizer"),xo=r("."),Ot=d(),oe=n("p"),$o=r("This model was contributed by "),fe=n("a"),qo=r("anton-l"),jo=r("."),Lt=d(),I=n("h2"),ne=n("a"),gt=n("span"),v(he.$$.fragment),Po=d(),_t=n("span"),Fo=r("SEWDConfig"),It=d(),k=n("div"),v(ue.$$.fragment),Mo=d(),H=n("p"),zo=r("This is the configuration class to store the configuration of a "),Ye=n("a"),Ao=r("SEWDModel"),Vo=r(`. It is used to
instantiate a SEW-D model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the SEW-D `),ge=n("a"),No=r("asapp/sew-d-tiny-100k"),Ko=r(" architecture."),Oo=d(),U=n("p"),Lo=r("Configuration objects inherit from "),Ge=n("a"),Io=r("PretrainedConfig"),Ho=r(` and can be used to control the model
outputs. Read the documentation from `),Xe=n("a"),Uo=r("PretrainedConfig"),Ro=r(" for more information."),Jo=d(),vt=n("p"),Bo=r("Example:"),Qo=d(),v(_e.$$.fragment),Ht=d(),R=n("h2"),ae=n("a"),wt=n("span"),v(ve.$$.fragment),Yo=d(),bt=n("span"),Go=r("SEWDModel"),Ut=d(),T=n("div"),v(we.$$.fragment),Xo=d(),be=n("p"),Zo=r(`The bare SEW-D Model transformer outputting raw hidden-states without any specific head on top.
SEW-D was proposed in `),ye=n("a"),en=r("Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition"),tn=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav
Artzi.`),on=d(),Ee=n("p"),nn=r("This model inherits from "),Ze=n("a"),an=r("PreTrainedModel"),sn=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),rn=d(),Se=n("p"),ln=r("This model is a PyTorch "),We=n("a"),dn=r("torch.nn.Module"),cn=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mn=d(),q=n("div"),v(De.$$.fragment),pn=d(),J=n("p"),fn=r("The "),et=n("a"),hn=r("SEWDModel"),un=r(" forward method, overrides the "),yt=n("code"),gn=r("__call__"),_n=r(" special method."),vn=d(),v(se.$$.fragment),wn=d(),Et=n("p"),bn=r("Example:"),yn=d(),v(Ce.$$.fragment),Rt=d(),B=n("h2"),re=n("a"),St=n("span"),v(ke.$$.fragment),En=d(),Wt=n("span"),Sn=r("SEWDForCTC"),Jt=d(),x=n("div"),v(Te.$$.fragment),Wn=d(),Q=n("p"),Dn=r("SEW-D Model with a "),Dt=n("em"),Cn=r("language modeling"),kn=r(` head on top for Connectionist Temporal Classification (CTC).
SEW-D was proposed in `),xe=n("a"),Tn=r("Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition"),xn=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav
Artzi.`),$n=d(),$e=n("p"),qn=r("This model inherits from "),tt=n("a"),jn=r("PreTrainedModel"),Pn=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),Fn=d(),qe=n("p"),Mn=r("This model is a PyTorch "),je=n("a"),zn=r("torch.nn.Module"),An=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vn=d(),j=n("div"),v(Pe.$$.fragment),Nn=d(),Y=n("p"),Kn=r("The "),ot=n("a"),On=r("SEWDForCTC"),Ln=r(" forward method, overrides the "),Ct=n("code"),In=r("__call__"),Hn=r(" special method."),Un=d(),v(ie.$$.fragment),Rn=d(),kt=n("p"),Jn=r("Example:"),Bn=d(),v(Fe.$$.fragment),Bt=d(),G=n("h2"),le=n("a"),Tt=n("span"),v(Me.$$.fragment),Qn=d(),xt=n("span"),Yn=r("SEWDForSequenceClassification"),Qt=d(),C=n("div"),v(ze.$$.fragment),Gn=d(),$t=n("p"),Xn=r(`SEWD Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),Zn=d(),Ae=n("p"),ea=r("SEW-D was proposed in "),Ve=n("a"),ta=r("Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition"),oa=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav
Artzi.`),na=d(),Ne=n("p"),aa=r("This model inherits from "),nt=n("a"),sa=r("PreTrainedModel"),ra=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),ia=d(),Ke=n("p"),la=r("This model is a PyTorch "),Oe=n("a"),da=r("torch.nn.Module"),ca=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ma=d(),P=n("div"),v(Le.$$.fragment),pa=d(),X=n("p"),fa=r("The "),at=n("a"),ha=r("SEWDForSequenceClassification"),ua=r(" forward method, overrides the "),qt=n("code"),ga=r("__call__"),_a=r(" special method."),va=d(),v(de.$$.fragment),wa=d(),jt=n("p"),ba=r("Example:"),ya=d(),v(Ie.$$.fragment),this.h()},l(t){const m=ys('[data-svelte="svelte-1phssyn"]',document.head);p=a(m,"META",{name:!0,content:!0}),m.forEach(o),W=c(t),h=a(t,"H1",{class:!0});var He=s(h);_=a(He,"A",{id:!0,class:!0,href:!0});var Pt=s(_);D=a(Pt,"SPAN",{});var Ft=s(D);w(u.$$.fragment,Ft),Ft.forEach(o),Pt.forEach(o),g=c(He),$=a(He,"SPAN",{});var Sa=s($);go=i(Sa,"SEW-D"),Sa.forEach(o),He.forEach(o),Mt=c(t),L=a(t,"H2",{class:!0});var Gt=s(L);Z=a(Gt,"A",{id:!0,class:!0,href:!0});var Wa=s(Z);pt=a(Wa,"SPAN",{});var Da=s(pt);w(ce.$$.fragment,Da),Da.forEach(o),Wa.forEach(o),_o=c(Gt),ft=a(Gt,"SPAN",{});var Ca=s(ft);vo=i(Ca,"Overview"),Ca.forEach(o),Gt.forEach(o),zt=c(t),ee=a(t,"P",{});var Xt=s(ee);wo=i(Xt,"SEW-D (Squeezed and Efficient Wav2Vec with Disentangled attention) was proposed in "),me=a(Xt,"A",{href:!0,rel:!0});var ka=s(me);bo=i(ka,`Performance-Efficiency Trade-offs
in Unsupervised Pre-training for Speech Recognition`),ka.forEach(o),yo=i(Xt,` by Felix Wu, Kwangyoun Kim,
Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav Artzi.`),Xt.forEach(o),At=c(t),Re=a(t,"P",{});var Ta=s(Re);Eo=i(Ta,"The abstract from the paper is the following:"),Ta.forEach(o),Vt=c(t),Je=a(t,"P",{});var xa=s(Je);ht=a(xa,"EM",{});var $a=s(ht);So=i($a,`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),$a.forEach(o),xa.forEach(o),Nt=c(t),Be=a(t,"P",{});var qa=s(Be);Wo=i(qa,"Tips:"),qa.forEach(o),Kt=c(t),te=a(t,"UL",{});var Zt=s(te);ut=a(Zt,"LI",{});var ja=s(ut);Do=i(ja,"SEW-D is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),ja.forEach(o),Co=c(Zt),pe=a(Zt,"LI",{});var eo=s(pe);ko=i(eo,`SEWDForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Qe=a(eo,"A",{href:!0});var Pa=s(Qe);To=i(Pa,"Wav2Vec2CTCTokenizer"),Pa.forEach(o),xo=i(eo,"."),eo.forEach(o),Zt.forEach(o),Ot=c(t),oe=a(t,"P",{});var to=s(oe);$o=i(to,"This model was contributed by "),fe=a(to,"A",{href:!0,rel:!0});var Fa=s(fe);qo=i(Fa,"anton-l"),Fa.forEach(o),jo=i(to,"."),to.forEach(o),Lt=c(t),I=a(t,"H2",{class:!0});var oo=s(I);ne=a(oo,"A",{id:!0,class:!0,href:!0});var Ma=s(ne);gt=a(Ma,"SPAN",{});var za=s(gt);w(he.$$.fragment,za),za.forEach(o),Ma.forEach(o),Po=c(oo),_t=a(oo,"SPAN",{});var Aa=s(_t);Fo=i(Aa,"SEWDConfig"),Aa.forEach(o),oo.forEach(o),It=c(t),k=a(t,"DIV",{class:!0});var M=s(k);w(ue.$$.fragment,M),Mo=c(M),H=a(M,"P",{});var st=s(H);zo=i(st,"This is the configuration class to store the configuration of a "),Ye=a(st,"A",{href:!0});var Va=s(Ye);Ao=i(Va,"SEWDModel"),Va.forEach(o),Vo=i(st,`. It is used to
instantiate a SEW-D model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the SEW-D `),ge=a(st,"A",{href:!0,rel:!0});var Na=s(ge);No=i(Na,"asapp/sew-d-tiny-100k"),Na.forEach(o),Ko=i(st," architecture."),st.forEach(o),Oo=c(M),U=a(M,"P",{});var rt=s(U);Lo=i(rt,"Configuration objects inherit from "),Ge=a(rt,"A",{href:!0});var Ka=s(Ge);Io=i(Ka,"PretrainedConfig"),Ka.forEach(o),Ho=i(rt,` and can be used to control the model
outputs. Read the documentation from `),Xe=a(rt,"A",{href:!0});var Oa=s(Xe);Uo=i(Oa,"PretrainedConfig"),Oa.forEach(o),Ro=i(rt," for more information."),rt.forEach(o),Jo=c(M),vt=a(M,"P",{});var La=s(vt);Bo=i(La,"Example:"),La.forEach(o),Qo=c(M),w(_e.$$.fragment,M),M.forEach(o),Ht=c(t),R=a(t,"H2",{class:!0});var no=s(R);ae=a(no,"A",{id:!0,class:!0,href:!0});var Ia=s(ae);wt=a(Ia,"SPAN",{});var Ha=s(wt);w(ve.$$.fragment,Ha),Ha.forEach(o),Ia.forEach(o),Yo=c(no),bt=a(no,"SPAN",{});var Ua=s(bt);Go=i(Ua,"SEWDModel"),Ua.forEach(o),no.forEach(o),Ut=c(t),T=a(t,"DIV",{class:!0});var z=s(T);w(we.$$.fragment,z),Xo=c(z),be=a(z,"P",{});var ao=s(be);Zo=i(ao,`The bare SEW-D Model transformer outputting raw hidden-states without any specific head on top.
SEW-D was proposed in `),ye=a(ao,"A",{href:!0,rel:!0});var Ra=s(ye);en=i(Ra,"Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition"),Ra.forEach(o),tn=i(ao,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav
Artzi.`),ao.forEach(o),on=c(z),Ee=a(z,"P",{});var so=s(Ee);nn=i(so,"This model inherits from "),Ze=a(so,"A",{href:!0});var Ja=s(Ze);an=i(Ja,"PreTrainedModel"),Ja.forEach(o),sn=i(so,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),so.forEach(o),rn=c(z),Se=a(z,"P",{});var ro=s(Se);ln=i(ro,"This model is a PyTorch "),We=a(ro,"A",{href:!0,rel:!0});var Ba=s(We);dn=i(Ba,"torch.nn.Module"),Ba.forEach(o),cn=i(ro,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ro.forEach(o),mn=c(z),q=a(z,"DIV",{class:!0});var A=s(q);w(De.$$.fragment,A),pn=c(A),J=a(A,"P",{});var it=s(J);fn=i(it,"The "),et=a(it,"A",{href:!0});var Qa=s(et);hn=i(Qa,"SEWDModel"),Qa.forEach(o),un=i(it," forward method, overrides the "),yt=a(it,"CODE",{});var Ya=s(yt);gn=i(Ya,"__call__"),Ya.forEach(o),_n=i(it," special method."),it.forEach(o),vn=c(A),w(se.$$.fragment,A),wn=c(A),Et=a(A,"P",{});var Ga=s(Et);bn=i(Ga,"Example:"),Ga.forEach(o),yn=c(A),w(Ce.$$.fragment,A),A.forEach(o),z.forEach(o),Rt=c(t),B=a(t,"H2",{class:!0});var io=s(B);re=a(io,"A",{id:!0,class:!0,href:!0});var Xa=s(re);St=a(Xa,"SPAN",{});var Za=s(St);w(ke.$$.fragment,Za),Za.forEach(o),Xa.forEach(o),En=c(io),Wt=a(io,"SPAN",{});var es=s(Wt);Sn=i(es,"SEWDForCTC"),es.forEach(o),io.forEach(o),Jt=c(t),x=a(t,"DIV",{class:!0});var V=s(x);w(Te.$$.fragment,V),Wn=c(V),Q=a(V,"P",{});var lt=s(Q);Dn=i(lt,"SEW-D Model with a "),Dt=a(lt,"EM",{});var ts=s(Dt);Cn=i(ts,"language modeling"),ts.forEach(o),kn=i(lt,` head on top for Connectionist Temporal Classification (CTC).
SEW-D was proposed in `),xe=a(lt,"A",{href:!0,rel:!0});var os=s(xe);Tn=i(os,"Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition"),os.forEach(o),xn=i(lt,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav
Artzi.`),lt.forEach(o),$n=c(V),$e=a(V,"P",{});var lo=s($e);qn=i(lo,"This model inherits from "),tt=a(lo,"A",{href:!0});var ns=s(tt);jn=i(ns,"PreTrainedModel"),ns.forEach(o),Pn=i(lo,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),lo.forEach(o),Fn=c(V),qe=a(V,"P",{});var co=s(qe);Mn=i(co,"This model is a PyTorch "),je=a(co,"A",{href:!0,rel:!0});var as=s(je);zn=i(as,"torch.nn.Module"),as.forEach(o),An=i(co,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),co.forEach(o),Vn=c(V),j=a(V,"DIV",{class:!0});var N=s(j);w(Pe.$$.fragment,N),Nn=c(N),Y=a(N,"P",{});var dt=s(Y);Kn=i(dt,"The "),ot=a(dt,"A",{href:!0});var ss=s(ot);On=i(ss,"SEWDForCTC"),ss.forEach(o),Ln=i(dt," forward method, overrides the "),Ct=a(dt,"CODE",{});var rs=s(Ct);In=i(rs,"__call__"),rs.forEach(o),Hn=i(dt," special method."),dt.forEach(o),Un=c(N),w(ie.$$.fragment,N),Rn=c(N),kt=a(N,"P",{});var is=s(kt);Jn=i(is,"Example:"),is.forEach(o),Bn=c(N),w(Fe.$$.fragment,N),N.forEach(o),V.forEach(o),Bt=c(t),G=a(t,"H2",{class:!0});var mo=s(G);le=a(mo,"A",{id:!0,class:!0,href:!0});var ls=s(le);Tt=a(ls,"SPAN",{});var ds=s(Tt);w(Me.$$.fragment,ds),ds.forEach(o),ls.forEach(o),Qn=c(mo),xt=a(mo,"SPAN",{});var cs=s(xt);Yn=i(cs,"SEWDForSequenceClassification"),cs.forEach(o),mo.forEach(o),Qt=c(t),C=a(t,"DIV",{class:!0});var F=s(C);w(ze.$$.fragment,F),Gn=c(F),$t=a(F,"P",{});var ms=s($t);Xn=i(ms,`SEWD Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),ms.forEach(o),Zn=c(F),Ae=a(F,"P",{});var po=s(Ae);ea=i(po,"SEW-D was proposed in "),Ve=a(po,"A",{href:!0,rel:!0});var ps=s(Ve);ta=i(ps,"Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition"),ps.forEach(o),oa=i(po,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav
Artzi.`),po.forEach(o),na=c(F),Ne=a(F,"P",{});var fo=s(Ne);aa=i(fo,"This model inherits from "),nt=a(fo,"A",{href:!0});var fs=s(nt);sa=i(fs,"PreTrainedModel"),fs.forEach(o),ra=i(fo,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),fo.forEach(o),ia=c(F),Ke=a(F,"P",{});var ho=s(Ke);la=i(ho,"This model is a PyTorch "),Oe=a(ho,"A",{href:!0,rel:!0});var hs=s(Oe);da=i(hs,"torch.nn.Module"),hs.forEach(o),ca=i(ho,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ho.forEach(o),ma=c(F),P=a(F,"DIV",{class:!0});var K=s(P);w(Le.$$.fragment,K),pa=c(K),X=a(K,"P",{});var ct=s(X);fa=i(ct,"The "),at=a(ct,"A",{href:!0});var us=s(at);ha=i(us,"SEWDForSequenceClassification"),us.forEach(o),ua=i(ct," forward method, overrides the "),qt=a(ct,"CODE",{});var gs=s(qt);ga=i(gs,"__call__"),gs.forEach(o),_a=i(ct," special method."),ct.forEach(o),va=c(K),w(de.$$.fragment,K),wa=c(K),jt=a(K,"P",{});var _s=s(jt);ba=i(_s,"Example:"),_s.forEach(o),ya=c(K),w(Ie.$$.fragment,K),K.forEach(o),F.forEach(o),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(Cs)),l(_,"id","sewd"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#sewd"),l(h,"class","relative group"),l(Z,"id","overview"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#overview"),l(L,"class","relative group"),l(me,"href","https://arxiv.org/abs/2109.06870"),l(me,"rel","nofollow"),l(Qe,"href","/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),l(fe,"href","https://huggingface.co/anton-l"),l(fe,"rel","nofollow"),l(ne,"id","transformers.SEWDConfig"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.SEWDConfig"),l(I,"class","relative group"),l(Ye,"href","/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDModel"),l(ge,"href","https://huggingface.co/asapp/sew-d-tiny-100k"),l(ge,"rel","nofollow"),l(Ge,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(Xe,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(k,"class","docstring"),l(ae,"id","transformers.SEWDModel"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.SEWDModel"),l(R,"class","relative group"),l(ye,"href","https://arxiv.org/abs/2109.06870"),l(ye,"rel","nofollow"),l(Ze,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),l(We,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(We,"rel","nofollow"),l(et,"href","/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDModel"),l(q,"class","docstring"),l(T,"class","docstring"),l(re,"id","transformers.SEWDForCTC"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.SEWDForCTC"),l(B,"class","relative group"),l(xe,"href","https://arxiv.org/abs/2109.06870"),l(xe,"rel","nofollow"),l(tt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),l(je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(je,"rel","nofollow"),l(ot,"href","/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDForCTC"),l(j,"class","docstring"),l(x,"class","docstring"),l(le,"id","transformers.SEWDForSequenceClassification"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.SEWDForSequenceClassification"),l(G,"class","relative group"),l(Ve,"href","https://arxiv.org/abs/2109.06870"),l(Ve,"rel","nofollow"),l(nt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),l(Oe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Oe,"rel","nofollow"),l(at,"href","/docs/transformers/master/en/model_doc/sew_d#transformers.SEWDForSequenceClassification"),l(P,"class","docstring"),l(C,"class","docstring")},m(t,m){e(document.head,p),f(t,W,m),f(t,h,m),e(h,_),e(_,D),b(u,D,null),e(h,g),e(h,$),e($,go),f(t,Mt,m),f(t,L,m),e(L,Z),e(Z,pt),b(ce,pt,null),e(L,_o),e(L,ft),e(ft,vo),f(t,zt,m),f(t,ee,m),e(ee,wo),e(ee,me),e(me,bo),e(ee,yo),f(t,At,m),f(t,Re,m),e(Re,Eo),f(t,Vt,m),f(t,Je,m),e(Je,ht),e(ht,So),f(t,Nt,m),f(t,Be,m),e(Be,Wo),f(t,Kt,m),f(t,te,m),e(te,ut),e(ut,Do),e(te,Co),e(te,pe),e(pe,ko),e(pe,Qe),e(Qe,To),e(pe,xo),f(t,Ot,m),f(t,oe,m),e(oe,$o),e(oe,fe),e(fe,qo),e(oe,jo),f(t,Lt,m),f(t,I,m),e(I,ne),e(ne,gt),b(he,gt,null),e(I,Po),e(I,_t),e(_t,Fo),f(t,It,m),f(t,k,m),b(ue,k,null),e(k,Mo),e(k,H),e(H,zo),e(H,Ye),e(Ye,Ao),e(H,Vo),e(H,ge),e(ge,No),e(H,Ko),e(k,Oo),e(k,U),e(U,Lo),e(U,Ge),e(Ge,Io),e(U,Ho),e(U,Xe),e(Xe,Uo),e(U,Ro),e(k,Jo),e(k,vt),e(vt,Bo),e(k,Qo),b(_e,k,null),f(t,Ht,m),f(t,R,m),e(R,ae),e(ae,wt),b(ve,wt,null),e(R,Yo),e(R,bt),e(bt,Go),f(t,Ut,m),f(t,T,m),b(we,T,null),e(T,Xo),e(T,be),e(be,Zo),e(be,ye),e(ye,en),e(be,tn),e(T,on),e(T,Ee),e(Ee,nn),e(Ee,Ze),e(Ze,an),e(Ee,sn),e(T,rn),e(T,Se),e(Se,ln),e(Se,We),e(We,dn),e(Se,cn),e(T,mn),e(T,q),b(De,q,null),e(q,pn),e(q,J),e(J,fn),e(J,et),e(et,hn),e(J,un),e(J,yt),e(yt,gn),e(J,_n),e(q,vn),b(se,q,null),e(q,wn),e(q,Et),e(Et,bn),e(q,yn),b(Ce,q,null),f(t,Rt,m),f(t,B,m),e(B,re),e(re,St),b(ke,St,null),e(B,En),e(B,Wt),e(Wt,Sn),f(t,Jt,m),f(t,x,m),b(Te,x,null),e(x,Wn),e(x,Q),e(Q,Dn),e(Q,Dt),e(Dt,Cn),e(Q,kn),e(Q,xe),e(xe,Tn),e(Q,xn),e(x,$n),e(x,$e),e($e,qn),e($e,tt),e(tt,jn),e($e,Pn),e(x,Fn),e(x,qe),e(qe,Mn),e(qe,je),e(je,zn),e(qe,An),e(x,Vn),e(x,j),b(Pe,j,null),e(j,Nn),e(j,Y),e(Y,Kn),e(Y,ot),e(ot,On),e(Y,Ln),e(Y,Ct),e(Ct,In),e(Y,Hn),e(j,Un),b(ie,j,null),e(j,Rn),e(j,kt),e(kt,Jn),e(j,Bn),b(Fe,j,null),f(t,Bt,m),f(t,G,m),e(G,le),e(le,Tt),b(Me,Tt,null),e(G,Qn),e(G,xt),e(xt,Yn),f(t,Qt,m),f(t,C,m),b(ze,C,null),e(C,Gn),e(C,$t),e($t,Xn),e(C,Zn),e(C,Ae),e(Ae,ea),e(Ae,Ve),e(Ve,ta),e(Ae,oa),e(C,na),e(C,Ne),e(Ne,aa),e(Ne,nt),e(nt,sa),e(Ne,ra),e(C,ia),e(C,Ke),e(Ke,la),e(Ke,Oe),e(Oe,da),e(Ke,ca),e(C,ma),e(C,P),b(Le,P,null),e(P,pa),e(P,X),e(X,fa),e(X,at),e(at,ha),e(X,ua),e(X,qt),e(qt,ga),e(X,_a),e(P,va),b(de,P,null),e(P,wa),e(P,jt),e(jt,ba),e(P,ya),b(Ie,P,null),Yt=!0},p(t,[m]){const He={};m&2&&(He.$$scope={dirty:m,ctx:t}),se.$set(He);const Pt={};m&2&&(Pt.$$scope={dirty:m,ctx:t}),ie.$set(Pt);const Ft={};m&2&&(Ft.$$scope={dirty:m,ctx:t}),de.$set(Ft)},i(t){Yt||(y(u.$$.fragment,t),y(ce.$$.fragment,t),y(he.$$.fragment,t),y(ue.$$.fragment,t),y(_e.$$.fragment,t),y(ve.$$.fragment,t),y(we.$$.fragment,t),y(De.$$.fragment,t),y(se.$$.fragment,t),y(Ce.$$.fragment,t),y(ke.$$.fragment,t),y(Te.$$.fragment,t),y(Pe.$$.fragment,t),y(ie.$$.fragment,t),y(Fe.$$.fragment,t),y(Me.$$.fragment,t),y(ze.$$.fragment,t),y(Le.$$.fragment,t),y(de.$$.fragment,t),y(Ie.$$.fragment,t),Yt=!0)},o(t){E(u.$$.fragment,t),E(ce.$$.fragment,t),E(he.$$.fragment,t),E(ue.$$.fragment,t),E(_e.$$.fragment,t),E(ve.$$.fragment,t),E(we.$$.fragment,t),E(De.$$.fragment,t),E(se.$$.fragment,t),E(Ce.$$.fragment,t),E(ke.$$.fragment,t),E(Te.$$.fragment,t),E(Pe.$$.fragment,t),E(ie.$$.fragment,t),E(Fe.$$.fragment,t),E(Me.$$.fragment,t),E(ze.$$.fragment,t),E(Le.$$.fragment,t),E(de.$$.fragment,t),E(Ie.$$.fragment,t),Yt=!1},d(t){o(p),t&&o(W),t&&o(h),S(u),t&&o(Mt),t&&o(L),S(ce),t&&o(zt),t&&o(ee),t&&o(At),t&&o(Re),t&&o(Vt),t&&o(Je),t&&o(Nt),t&&o(Be),t&&o(Kt),t&&o(te),t&&o(Ot),t&&o(oe),t&&o(Lt),t&&o(I),S(he),t&&o(It),t&&o(k),S(ue),S(_e),t&&o(Ht),t&&o(R),S(ve),t&&o(Ut),t&&o(T),S(we),S(De),S(se),S(Ce),t&&o(Rt),t&&o(B),S(ke),t&&o(Jt),t&&o(x),S(Te),S(Pe),S(ie),S(Fe),t&&o(Bt),t&&o(G),S(Me),t&&o(Qt),t&&o(C),S(ze),S(Le),S(de),S(Ie)}}}const Cs={local:"sewd",sections:[{local:"overview",title:"Overview"},{local:"transformers.SEWDConfig",title:"SEWDConfig"},{local:"transformers.SEWDModel",title:"SEWDModel"},{local:"transformers.SEWDForCTC",title:"SEWDForCTC"},{local:"transformers.SEWDForSequenceClassification",title:"SEWDForSequenceClassification"}],title:"SEW-D"};function ks(O,p,W){let{fw:h}=p;return O.$$set=_=>{"fw"in _&&W(0,h=_.fw)},[h]}class Fs extends vs{constructor(p){super();ws(this,p,ks,Ds,bs,{fw:0})}}export{Fs as default,Cs as metadata};
