import{S as Es,i as Ss,s as Ws,e as n,k as d,w as _,t as r,M as Ts,c as a,d as o,m as c,a as s,x as v,h as i,b as l,F as e,g as f,y as b,q as w,o as y,B as E,v as ks}from"../../chunks/vendor-6b77c823.js";import{T as ka}from"../../chunks/Tip-39098574.js";import{D as Je}from"../../chunks/Docstring-17b815d9.js";import{C as ft}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ht}from"../../chunks/IconCopyLink-7a11ce68.js";function Cs(X){let m,k,h,S,W;return{c(){m=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),S=r("Module"),W=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=a(u,"P",{});var g=s(m);k=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(g,"CODE",{});var P=s(h);S=i(P,"Module"),P.forEach(o),W=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,m,g),e(m,k),e(m,h),e(h,S),e(m,W)},d(u){u&&o(m)}}}function $s(X){let m,k,h,S,W;return{c(){m=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),S=r("Module"),W=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=a(u,"P",{});var g=s(m);k=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(g,"CODE",{});var P=s(h);S=i(P,"Module"),P.forEach(o),W=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,m,g),e(m,k),e(m,h),e(h,S),e(m,W)},d(u){u&&o(m)}}}function js(X){let m,k,h,S,W;return{c(){m=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),S=r("Module"),W=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=a(u,"P",{});var g=s(m);k=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(g,"CODE",{});var P=s(h);S=i(P,"Module"),P.forEach(o),W=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,m,g),e(m,k),e(m,h),e(h,S),e(m,W)},d(u){u&&o(m)}}}function xs(X){let m,k,h,S,W,u,g,P,vo,Ot,I,Z,ut,ce,bo,gt,wo,Vt,ee,yo,pe,Eo,So,Lt,Qe,Wo,It,Be,_t,To,Nt,Ye,ko,Kt,te,vt,Co,$o,me,jo,Ge,xo,qo,Ht,oe,Po,fe,Fo,Mo,Rt,N,ne,bt,he,zo,wt,Ao,Ut,j,ue,Do,K,Oo,Xe,Vo,Lo,ge,Io,No,Ko,H,Ho,Ze,Ro,Uo,et,Jo,Qo,Bo,yt,Yo,Go,_e,Jt,R,ae,Et,ve,Xo,St,Zo,Qt,x,be,en,we,tn,ye,on,nn,an,Ee,sn,tt,rn,ln,dn,Se,cn,We,pn,mn,fn,F,Te,hn,U,un,ot,gn,_n,Wt,vn,bn,wn,se,yn,Tt,En,Sn,ke,Bt,J,re,kt,Ce,Wn,Ct,Tn,Yt,q,$e,kn,Q,Cn,$t,$n,jn,je,xn,qn,Pn,xe,Fn,nt,Mn,zn,An,qe,Dn,Pe,On,Vn,Ln,C,Fe,In,B,Nn,at,Kn,Hn,jt,Rn,Un,Jn,ie,Qn,xt,Bn,Yn,Me,Gn,ze,Gt,Y,le,qt,Ae,Xn,Pt,Zn,Xt,T,De,ea,Ft,ta,oa,Oe,na,Ve,aa,sa,ra,Le,ia,st,la,da,ca,Ie,pa,Ne,ma,fa,ha,$,Ke,ua,G,ga,rt,_a,va,Mt,ba,wa,ya,de,Ea,zt,Sa,Wa,He,Ta,Re,Zt;return u=new ht({}),ce=new ht({}),he=new ht({}),ue=new Je({props:{name:"class transformers.SEWConfig",anchor:"transformers.SEWConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"squeeze_factor",val:" = 2"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)"},{name:"conv_kernel",val:" = (10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SEWConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the SEW model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <code>SEW</code>.`,name:"vocab_size"},{anchor:"transformers.SEWConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.SEWConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.SEWConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.SEWConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.SEWConfig.squeeze_factor",description:`<strong>squeeze_factor</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Sequence length downsampling factor after the encoder and upsampling factor after the transformer.`,name:"squeeze_factor"},{anchor:"transformers.SEWConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SEWConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.SEWConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.SEWConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/main/en/model_doc/sew#transformers.SEWForCTC">SEWForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.SEWConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SEWConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.SEWConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.SEWConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.SEWConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.SEWConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.SEWConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.SEWConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.SEWConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.SEWConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.SEWConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.SEWConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.SEWConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.SEWConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.SEWConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.SEWConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.SEWConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.SEWConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.SEWConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/main/en/model_doc/sew#transformers.SEWForCTC">SEWForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.SEWConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/main/en/model_doc/sew#transformers.SEWForCTC">SEWForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.SEWConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification">Wav2Vec2ForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.SEWConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/sew/configuration_sew.py#L32"}}),_e=new ft({props:{code:`from transformers import SEWModel, SEWConfig

# Initializing a SEW asapp/sew-tiny-100k style configuration
configuration = SEWConfig()

# Initializing a model from the asapp/sew-tiny-100k style configuration
model = SEWModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SEWModel, SEWConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a SEW asapp/sew-tiny-100k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SEWConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the asapp/sew-tiny-100k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ve=new ht({}),be=new Je({props:{name:"class transformers.SEWModel",anchor:"transformers.SEWModel",parameters:[{name:"config",val:": SEWConfig"}],parametersDescription:[{anchor:"transformers.SEWModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/sew#transformers.SEWConfig">SEWConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/sew/modeling_sew.py#L839"}}),Te=new Je({props:{name:"forward",anchor:"transformers.SEWModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SEWModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SEWModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SEWModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SEWModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/sew/modeling_sew.py#L906",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/sew#transformers.SEWConfig"
>SEWConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),se=new ka({props:{$$slots:{default:[Cs]},$$scope:{ctx:X}}}),ke=new ft({props:{code:`from transformers import Wav2Vec2Processor, SEWModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("asapp/sew-tiny-100k-ft-ls100h")
model = SEWModel.from_pretrained("asapp/sew-tiny-100k-ft-ls100h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;asapp/sew-tiny-100k-ft-ls100h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWModel.from_pretrained(<span class="hljs-string">&quot;asapp/sew-tiny-100k-ft-ls100h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">512</span>]`}}),Ce=new ht({}),$e=new Je({props:{name:"class transformers.SEWForCTC",anchor:"transformers.SEWForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SEWForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/sew#transformers.SEWConfig">SEWConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/sew/modeling_sew.py#L969"}}),Fe=new Je({props:{name:"forward",anchor:"transformers.SEWForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.SEWForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SEWForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SEWForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SEWForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SEWForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/sew/modeling_sew.py#L1010",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/sew#transformers.SEWConfig"
>SEWConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ie=new ka({props:{$$slots:{default:[$s]},$$scope:{ctx:X}}}),Me=new ft({props:{code:`from transformers import Wav2Vec2Processor, SEWForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("asapp/sew-tiny-100k-ft-ls100h")
model = SEWForCTC.from_pretrained("asapp/sew-tiny-100k-ft-ls100h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;asapp/sew-tiny-100k-ft-ls100h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWForCTC.from_pretrained(<span class="hljs-string">&quot;asapp/sew-tiny-100k-ft-ls100h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APPOSTILE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPOLLE&#x27;</span>`}}),ze=new ft({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.42</span>`}}),Ae=new ht({}),De=new Je({props:{name:"class transformers.SEWForSequenceClassification",anchor:"transformers.SEWForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SEWForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/sew#transformers.SEWConfig">SEWConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/sew/modeling_sew.py#L1100"}}),Ke=new Je({props:{name:"forward",anchor:"transformers.SEWForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.SEWForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SEWForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SEWForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SEWForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SEWForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/sew/modeling_sew.py#L1145",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/sew#transformers.SEWConfig"
>SEWConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new ka({props:{$$slots:{default:[js]},$$scope:{ctx:X}}}),He=new ft({props:{code:`from transformers import Wav2Vec2FeatureExtractor, SEWForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("anton-l/sew-mid-100k-ft-keyword-spotting")
model = SEWForSequenceClassification.from_pretrained("anton-l/sew-mid-100k-ft-keyword-spotting")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, SEWForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;anton-l/sew-mid-100k-ft-keyword-spotting&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;anton-l/sew-mid-100k-ft-keyword-spotting&quot;</span>)

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
<span class="hljs-number">9.52</span>`}}),{c(){m=n("meta"),k=d(),h=n("h1"),S=n("a"),W=n("span"),_(u.$$.fragment),g=d(),P=n("span"),vo=r("SEW"),Ot=d(),I=n("h2"),Z=n("a"),ut=n("span"),_(ce.$$.fragment),bo=d(),gt=n("span"),wo=r("Overview"),Vt=d(),ee=n("p"),yo=r("SEW (Squeezed and Efficient Wav2Vec) was proposed in "),pe=n("a"),Eo=r(`Performance-Efficiency Trade-offs in Unsupervised Pre-training
for Speech Recognition`),So=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q.
Weinberger, Yoav Artzi.`),Lt=d(),Qe=n("p"),Wo=r("The abstract from the paper is the following:"),It=d(),Be=n("p"),_t=n("em"),To=r(`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),Nt=d(),Ye=n("p"),ko=r("Tips:"),Kt=d(),te=n("ul"),vt=n("li"),Co=r("SEW is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),$o=d(),me=n("li"),jo=r(`SEWForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded using
`),Ge=n("a"),xo=r("Wav2Vec2CTCTokenizer"),qo=r("."),Ht=d(),oe=n("p"),Po=r("This model was contributed by "),fe=n("a"),Fo=r("anton-l"),Mo=r("."),Rt=d(),N=n("h2"),ne=n("a"),bt=n("span"),_(he.$$.fragment),zo=d(),wt=n("span"),Ao=r("SEWConfig"),Ut=d(),j=n("div"),_(ue.$$.fragment),Do=d(),K=n("p"),Oo=r("This is the configuration class to store the configuration of a "),Xe=n("a"),Vo=r("SEWModel"),Lo=r(`. It is used to instantiate a SEW model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the SEW
`),ge=n("a"),Io=r("asapp/sew-tiny-100k"),No=r(" architecture."),Ko=d(),H=n("p"),Ho=r("Configuration objects inherit from "),Ze=n("a"),Ro=r("PretrainedConfig"),Uo=r(` and can be used to control the model outputs. Read the
documentation from `),et=n("a"),Jo=r("PretrainedConfig"),Qo=r(" for more information."),Bo=d(),yt=n("p"),Yo=r("Example:"),Go=d(),_(_e.$$.fragment),Jt=d(),R=n("h2"),ae=n("a"),Et=n("span"),_(ve.$$.fragment),Xo=d(),St=n("span"),Zo=r("SEWModel"),Qt=d(),x=n("div"),_(be.$$.fragment),en=d(),we=n("p"),tn=r(`The bare SEW Model transformer outputting raw hidden-states without any specific head on top.
SEW was proposed in `),ye=n("a"),on=r(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),nn=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),an=d(),Ee=n("p"),sn=r("This model inherits from "),tt=n("a"),rn=r("PreTrainedModel"),ln=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),dn=d(),Se=n("p"),cn=r("This model is a PyTorch "),We=n("a"),pn=r("torch.nn.Module"),mn=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fn=d(),F=n("div"),_(Te.$$.fragment),hn=d(),U=n("p"),un=r("The "),ot=n("a"),gn=r("SEWModel"),_n=r(" forward method, overrides the "),Wt=n("code"),vn=r("__call__"),bn=r(" special method."),wn=d(),_(se.$$.fragment),yn=d(),Tt=n("p"),En=r("Example:"),Sn=d(),_(ke.$$.fragment),Bt=d(),J=n("h2"),re=n("a"),kt=n("span"),_(Ce.$$.fragment),Wn=d(),Ct=n("span"),Tn=r("SEWForCTC"),Yt=d(),q=n("div"),_($e.$$.fragment),kn=d(),Q=n("p"),Cn=r("SEW Model with a "),$t=n("code"),$n=r("language modeling"),jn=r(` head on top for Connectionist Temporal Classification (CTC).
SEW was proposed in `),je=n("a"),xn=r(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),qn=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),Pn=d(),xe=n("p"),Fn=r("This model inherits from "),nt=n("a"),Mn=r("PreTrainedModel"),zn=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),An=d(),qe=n("p"),Dn=r("This model is a PyTorch "),Pe=n("a"),On=r("torch.nn.Module"),Vn=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ln=d(),C=n("div"),_(Fe.$$.fragment),In=d(),B=n("p"),Nn=r("The "),at=n("a"),Kn=r("SEWForCTC"),Hn=r(" forward method, overrides the "),jt=n("code"),Rn=r("__call__"),Un=r(" special method."),Jn=d(),_(ie.$$.fragment),Qn=d(),xt=n("p"),Bn=r("Example:"),Yn=d(),_(Me.$$.fragment),Gn=d(),_(ze.$$.fragment),Gt=d(),Y=n("h2"),le=n("a"),qt=n("span"),_(Ae.$$.fragment),Xn=d(),Pt=n("span"),Zn=r("SEWForSequenceClassification"),Xt=d(),T=n("div"),_(De.$$.fragment),ea=d(),Ft=n("p"),ta=r(`SEW Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),oa=d(),Oe=n("p"),na=r("SEW was proposed in "),Ve=n("a"),aa=r(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),sa=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),ra=d(),Le=n("p"),ia=r("This model inherits from "),st=n("a"),la=r("PreTrainedModel"),da=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ca=d(),Ie=n("p"),pa=r("This model is a PyTorch "),Ne=n("a"),ma=r("torch.nn.Module"),fa=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ha=d(),$=n("div"),_(Ke.$$.fragment),ua=d(),G=n("p"),ga=r("The "),rt=n("a"),_a=r("SEWForSequenceClassification"),va=r(" forward method, overrides the "),Mt=n("code"),ba=r("__call__"),wa=r(" special method."),ya=d(),_(de.$$.fragment),Ea=d(),zt=n("p"),Sa=r("Example:"),Wa=d(),_(He.$$.fragment),Ta=d(),_(Re.$$.fragment),this.h()},l(t){const p=Ts('[data-svelte="svelte-1phssyn"]',document.head);m=a(p,"META",{name:!0,content:!0}),p.forEach(o),k=c(t),h=a(t,"H1",{class:!0});var Ue=s(h);S=a(Ue,"A",{id:!0,class:!0,href:!0});var At=s(S);W=a(At,"SPAN",{});var Dt=s(W);v(u.$$.fragment,Dt),Dt.forEach(o),At.forEach(o),g=c(Ue),P=a(Ue,"SPAN",{});var Ca=s(P);vo=i(Ca,"SEW"),Ca.forEach(o),Ue.forEach(o),Ot=c(t),I=a(t,"H2",{class:!0});var eo=s(I);Z=a(eo,"A",{id:!0,class:!0,href:!0});var $a=s(Z);ut=a($a,"SPAN",{});var ja=s(ut);v(ce.$$.fragment,ja),ja.forEach(o),$a.forEach(o),bo=c(eo),gt=a(eo,"SPAN",{});var xa=s(gt);wo=i(xa,"Overview"),xa.forEach(o),eo.forEach(o),Vt=c(t),ee=a(t,"P",{});var to=s(ee);yo=i(to,"SEW (Squeezed and Efficient Wav2Vec) was proposed in "),pe=a(to,"A",{href:!0,rel:!0});var qa=s(pe);Eo=i(qa,`Performance-Efficiency Trade-offs in Unsupervised Pre-training
for Speech Recognition`),qa.forEach(o),So=i(to,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q.
Weinberger, Yoav Artzi.`),to.forEach(o),Lt=c(t),Qe=a(t,"P",{});var Pa=s(Qe);Wo=i(Pa,"The abstract from the paper is the following:"),Pa.forEach(o),It=c(t),Be=a(t,"P",{});var Fa=s(Be);_t=a(Fa,"EM",{});var Ma=s(_t);To=i(Ma,`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),Ma.forEach(o),Fa.forEach(o),Nt=c(t),Ye=a(t,"P",{});var za=s(Ye);ko=i(za,"Tips:"),za.forEach(o),Kt=c(t),te=a(t,"UL",{});var oo=s(te);vt=a(oo,"LI",{});var Aa=s(vt);Co=i(Aa,"SEW is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Aa.forEach(o),$o=c(oo),me=a(oo,"LI",{});var no=s(me);jo=i(no,`SEWForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded using
`),Ge=a(no,"A",{href:!0});var Da=s(Ge);xo=i(Da,"Wav2Vec2CTCTokenizer"),Da.forEach(o),qo=i(no,"."),no.forEach(o),oo.forEach(o),Ht=c(t),oe=a(t,"P",{});var ao=s(oe);Po=i(ao,"This model was contributed by "),fe=a(ao,"A",{href:!0,rel:!0});var Oa=s(fe);Fo=i(Oa,"anton-l"),Oa.forEach(o),Mo=i(ao,"."),ao.forEach(o),Rt=c(t),N=a(t,"H2",{class:!0});var so=s(N);ne=a(so,"A",{id:!0,class:!0,href:!0});var Va=s(ne);bt=a(Va,"SPAN",{});var La=s(bt);v(he.$$.fragment,La),La.forEach(o),Va.forEach(o),zo=c(so),wt=a(so,"SPAN",{});var Ia=s(wt);Ao=i(Ia,"SEWConfig"),Ia.forEach(o),so.forEach(o),Ut=c(t),j=a(t,"DIV",{class:!0});var D=s(j);v(ue.$$.fragment,D),Do=c(D),K=a(D,"P",{});var it=s(K);Oo=i(it,"This is the configuration class to store the configuration of a "),Xe=a(it,"A",{href:!0});var Na=s(Xe);Vo=i(Na,"SEWModel"),Na.forEach(o),Lo=i(it,`. It is used to instantiate a SEW model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the SEW
`),ge=a(it,"A",{href:!0,rel:!0});var Ka=s(ge);Io=i(Ka,"asapp/sew-tiny-100k"),Ka.forEach(o),No=i(it," architecture."),it.forEach(o),Ko=c(D),H=a(D,"P",{});var lt=s(H);Ho=i(lt,"Configuration objects inherit from "),Ze=a(lt,"A",{href:!0});var Ha=s(Ze);Ro=i(Ha,"PretrainedConfig"),Ha.forEach(o),Uo=i(lt,` and can be used to control the model outputs. Read the
documentation from `),et=a(lt,"A",{href:!0});var Ra=s(et);Jo=i(Ra,"PretrainedConfig"),Ra.forEach(o),Qo=i(lt," for more information."),lt.forEach(o),Bo=c(D),yt=a(D,"P",{});var Ua=s(yt);Yo=i(Ua,"Example:"),Ua.forEach(o),Go=c(D),v(_e.$$.fragment,D),D.forEach(o),Jt=c(t),R=a(t,"H2",{class:!0});var ro=s(R);ae=a(ro,"A",{id:!0,class:!0,href:!0});var Ja=s(ae);Et=a(Ja,"SPAN",{});var Qa=s(Et);v(ve.$$.fragment,Qa),Qa.forEach(o),Ja.forEach(o),Xo=c(ro),St=a(ro,"SPAN",{});var Ba=s(St);Zo=i(Ba,"SEWModel"),Ba.forEach(o),ro.forEach(o),Qt=c(t),x=a(t,"DIV",{class:!0});var O=s(x);v(be.$$.fragment,O),en=c(O),we=a(O,"P",{});var io=s(we);tn=i(io,`The bare SEW Model transformer outputting raw hidden-states without any specific head on top.
SEW was proposed in `),ye=a(io,"A",{href:!0,rel:!0});var Ya=s(ye);on=i(Ya,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),Ya.forEach(o),nn=i(io,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),io.forEach(o),an=c(O),Ee=a(O,"P",{});var lo=s(Ee);sn=i(lo,"This model inherits from "),tt=a(lo,"A",{href:!0});var Ga=s(tt);rn=i(Ga,"PreTrainedModel"),Ga.forEach(o),ln=i(lo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),lo.forEach(o),dn=c(O),Se=a(O,"P",{});var co=s(Se);cn=i(co,"This model is a PyTorch "),We=a(co,"A",{href:!0,rel:!0});var Xa=s(We);pn=i(Xa,"torch.nn.Module"),Xa.forEach(o),mn=i(co,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),co.forEach(o),fn=c(O),F=a(O,"DIV",{class:!0});var V=s(F);v(Te.$$.fragment,V),hn=c(V),U=a(V,"P",{});var dt=s(U);un=i(dt,"The "),ot=a(dt,"A",{href:!0});var Za=s(ot);gn=i(Za,"SEWModel"),Za.forEach(o),_n=i(dt," forward method, overrides the "),Wt=a(dt,"CODE",{});var es=s(Wt);vn=i(es,"__call__"),es.forEach(o),bn=i(dt," special method."),dt.forEach(o),wn=c(V),v(se.$$.fragment,V),yn=c(V),Tt=a(V,"P",{});var ts=s(Tt);En=i(ts,"Example:"),ts.forEach(o),Sn=c(V),v(ke.$$.fragment,V),V.forEach(o),O.forEach(o),Bt=c(t),J=a(t,"H2",{class:!0});var po=s(J);re=a(po,"A",{id:!0,class:!0,href:!0});var os=s(re);kt=a(os,"SPAN",{});var ns=s(kt);v(Ce.$$.fragment,ns),ns.forEach(o),os.forEach(o),Wn=c(po),Ct=a(po,"SPAN",{});var as=s(Ct);Tn=i(as,"SEWForCTC"),as.forEach(o),po.forEach(o),Yt=c(t),q=a(t,"DIV",{class:!0});var L=s(q);v($e.$$.fragment,L),kn=c(L),Q=a(L,"P",{});var ct=s(Q);Cn=i(ct,"SEW Model with a "),$t=a(ct,"CODE",{});var ss=s($t);$n=i(ss,"language modeling"),ss.forEach(o),jn=i(ct,` head on top for Connectionist Temporal Classification (CTC).
SEW was proposed in `),je=a(ct,"A",{href:!0,rel:!0});var rs=s(je);xn=i(rs,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),rs.forEach(o),qn=i(ct,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),ct.forEach(o),Pn=c(L),xe=a(L,"P",{});var mo=s(xe);Fn=i(mo,"This model inherits from "),nt=a(mo,"A",{href:!0});var is=s(nt);Mn=i(is,"PreTrainedModel"),is.forEach(o),zn=i(mo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),mo.forEach(o),An=c(L),qe=a(L,"P",{});var fo=s(qe);Dn=i(fo,"This model is a PyTorch "),Pe=a(fo,"A",{href:!0,rel:!0});var ls=s(Pe);On=i(ls,"torch.nn.Module"),ls.forEach(o),Vn=i(fo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fo.forEach(o),Ln=c(L),C=a(L,"DIV",{class:!0});var M=s(C);v(Fe.$$.fragment,M),In=c(M),B=a(M,"P",{});var pt=s(B);Nn=i(pt,"The "),at=a(pt,"A",{href:!0});var ds=s(at);Kn=i(ds,"SEWForCTC"),ds.forEach(o),Hn=i(pt," forward method, overrides the "),jt=a(pt,"CODE",{});var cs=s(jt);Rn=i(cs,"__call__"),cs.forEach(o),Un=i(pt," special method."),pt.forEach(o),Jn=c(M),v(ie.$$.fragment,M),Qn=c(M),xt=a(M,"P",{});var ps=s(xt);Bn=i(ps,"Example:"),ps.forEach(o),Yn=c(M),v(Me.$$.fragment,M),Gn=c(M),v(ze.$$.fragment,M),M.forEach(o),L.forEach(o),Gt=c(t),Y=a(t,"H2",{class:!0});var ho=s(Y);le=a(ho,"A",{id:!0,class:!0,href:!0});var ms=s(le);qt=a(ms,"SPAN",{});var fs=s(qt);v(Ae.$$.fragment,fs),fs.forEach(o),ms.forEach(o),Xn=c(ho),Pt=a(ho,"SPAN",{});var hs=s(Pt);Zn=i(hs,"SEWForSequenceClassification"),hs.forEach(o),ho.forEach(o),Xt=c(t),T=a(t,"DIV",{class:!0});var z=s(T);v(De.$$.fragment,z),ea=c(z),Ft=a(z,"P",{});var us=s(Ft);ta=i(us,`SEW Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),us.forEach(o),oa=c(z),Oe=a(z,"P",{});var uo=s(Oe);na=i(uo,"SEW was proposed in "),Ve=a(uo,"A",{href:!0,rel:!0});var gs=s(Ve);aa=i(gs,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),gs.forEach(o),sa=i(uo,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),uo.forEach(o),ra=c(z),Le=a(z,"P",{});var go=s(Le);ia=i(go,"This model inherits from "),st=a(go,"A",{href:!0});var _s=s(st);la=i(_s,"PreTrainedModel"),_s.forEach(o),da=i(go,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),go.forEach(o),ca=c(z),Ie=a(z,"P",{});var _o=s(Ie);pa=i(_o,"This model is a PyTorch "),Ne=a(_o,"A",{href:!0,rel:!0});var vs=s(Ne);ma=i(vs,"torch.nn.Module"),vs.forEach(o),fa=i(_o,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_o.forEach(o),ha=c(z),$=a(z,"DIV",{class:!0});var A=s($);v(Ke.$$.fragment,A),ua=c(A),G=a(A,"P",{});var mt=s(G);ga=i(mt,"The "),rt=a(mt,"A",{href:!0});var bs=s(rt);_a=i(bs,"SEWForSequenceClassification"),bs.forEach(o),va=i(mt," forward method, overrides the "),Mt=a(mt,"CODE",{});var ws=s(Mt);ba=i(ws,"__call__"),ws.forEach(o),wa=i(mt," special method."),mt.forEach(o),ya=c(A),v(de.$$.fragment,A),Ea=c(A),zt=a(A,"P",{});var ys=s(zt);Sa=i(ys,"Example:"),ys.forEach(o),Wa=c(A),v(He.$$.fragment,A),Ta=c(A),v(Re.$$.fragment,A),A.forEach(o),z.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(qs)),l(S,"id","sew"),l(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(S,"href","#sew"),l(h,"class","relative group"),l(Z,"id","overview"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#overview"),l(I,"class","relative group"),l(pe,"href","https://arxiv.org/abs/2109.06870"),l(pe,"rel","nofollow"),l(Ge,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),l(fe,"href","https://huggingface.co/anton-l"),l(fe,"rel","nofollow"),l(ne,"id","transformers.SEWConfig"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.SEWConfig"),l(N,"class","relative group"),l(Xe,"href","/docs/transformers/main/en/model_doc/sew#transformers.SEWModel"),l(ge,"href","https://huggingface.co/asapp/sew-tiny-100k"),l(ge,"rel","nofollow"),l(Ze,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(et,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ae,"id","transformers.SEWModel"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.SEWModel"),l(R,"class","relative group"),l(ye,"href","https://arxiv.org/abs/2109.06870"),l(ye,"rel","nofollow"),l(tt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(We,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(We,"rel","nofollow"),l(ot,"href","/docs/transformers/main/en/model_doc/sew#transformers.SEWModel"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(re,"id","transformers.SEWForCTC"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.SEWForCTC"),l(J,"class","relative group"),l(je,"href","https://arxiv.org/abs/2109.06870"),l(je,"rel","nofollow"),l(nt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Pe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Pe,"rel","nofollow"),l(at,"href","/docs/transformers/main/en/model_doc/sew#transformers.SEWForCTC"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(le,"id","transformers.SEWForSequenceClassification"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.SEWForSequenceClassification"),l(Y,"class","relative group"),l(Ve,"href","https://arxiv.org/abs/2109.06870"),l(Ve,"rel","nofollow"),l(st,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Ne,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ne,"rel","nofollow"),l(rt,"href","/docs/transformers/main/en/model_doc/sew#transformers.SEWForSequenceClassification"),l($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,m),f(t,k,p),f(t,h,p),e(h,S),e(S,W),b(u,W,null),e(h,g),e(h,P),e(P,vo),f(t,Ot,p),f(t,I,p),e(I,Z),e(Z,ut),b(ce,ut,null),e(I,bo),e(I,gt),e(gt,wo),f(t,Vt,p),f(t,ee,p),e(ee,yo),e(ee,pe),e(pe,Eo),e(ee,So),f(t,Lt,p),f(t,Qe,p),e(Qe,Wo),f(t,It,p),f(t,Be,p),e(Be,_t),e(_t,To),f(t,Nt,p),f(t,Ye,p),e(Ye,ko),f(t,Kt,p),f(t,te,p),e(te,vt),e(vt,Co),e(te,$o),e(te,me),e(me,jo),e(me,Ge),e(Ge,xo),e(me,qo),f(t,Ht,p),f(t,oe,p),e(oe,Po),e(oe,fe),e(fe,Fo),e(oe,Mo),f(t,Rt,p),f(t,N,p),e(N,ne),e(ne,bt),b(he,bt,null),e(N,zo),e(N,wt),e(wt,Ao),f(t,Ut,p),f(t,j,p),b(ue,j,null),e(j,Do),e(j,K),e(K,Oo),e(K,Xe),e(Xe,Vo),e(K,Lo),e(K,ge),e(ge,Io),e(K,No),e(j,Ko),e(j,H),e(H,Ho),e(H,Ze),e(Ze,Ro),e(H,Uo),e(H,et),e(et,Jo),e(H,Qo),e(j,Bo),e(j,yt),e(yt,Yo),e(j,Go),b(_e,j,null),f(t,Jt,p),f(t,R,p),e(R,ae),e(ae,Et),b(ve,Et,null),e(R,Xo),e(R,St),e(St,Zo),f(t,Qt,p),f(t,x,p),b(be,x,null),e(x,en),e(x,we),e(we,tn),e(we,ye),e(ye,on),e(we,nn),e(x,an),e(x,Ee),e(Ee,sn),e(Ee,tt),e(tt,rn),e(Ee,ln),e(x,dn),e(x,Se),e(Se,cn),e(Se,We),e(We,pn),e(Se,mn),e(x,fn),e(x,F),b(Te,F,null),e(F,hn),e(F,U),e(U,un),e(U,ot),e(ot,gn),e(U,_n),e(U,Wt),e(Wt,vn),e(U,bn),e(F,wn),b(se,F,null),e(F,yn),e(F,Tt),e(Tt,En),e(F,Sn),b(ke,F,null),f(t,Bt,p),f(t,J,p),e(J,re),e(re,kt),b(Ce,kt,null),e(J,Wn),e(J,Ct),e(Ct,Tn),f(t,Yt,p),f(t,q,p),b($e,q,null),e(q,kn),e(q,Q),e(Q,Cn),e(Q,$t),e($t,$n),e(Q,jn),e(Q,je),e(je,xn),e(Q,qn),e(q,Pn),e(q,xe),e(xe,Fn),e(xe,nt),e(nt,Mn),e(xe,zn),e(q,An),e(q,qe),e(qe,Dn),e(qe,Pe),e(Pe,On),e(qe,Vn),e(q,Ln),e(q,C),b(Fe,C,null),e(C,In),e(C,B),e(B,Nn),e(B,at),e(at,Kn),e(B,Hn),e(B,jt),e(jt,Rn),e(B,Un),e(C,Jn),b(ie,C,null),e(C,Qn),e(C,xt),e(xt,Bn),e(C,Yn),b(Me,C,null),e(C,Gn),b(ze,C,null),f(t,Gt,p),f(t,Y,p),e(Y,le),e(le,qt),b(Ae,qt,null),e(Y,Xn),e(Y,Pt),e(Pt,Zn),f(t,Xt,p),f(t,T,p),b(De,T,null),e(T,ea),e(T,Ft),e(Ft,ta),e(T,oa),e(T,Oe),e(Oe,na),e(Oe,Ve),e(Ve,aa),e(Oe,sa),e(T,ra),e(T,Le),e(Le,ia),e(Le,st),e(st,la),e(Le,da),e(T,ca),e(T,Ie),e(Ie,pa),e(Ie,Ne),e(Ne,ma),e(Ie,fa),e(T,ha),e(T,$),b(Ke,$,null),e($,ua),e($,G),e(G,ga),e(G,rt),e(rt,_a),e(G,va),e(G,Mt),e(Mt,ba),e(G,wa),e($,ya),b(de,$,null),e($,Ea),e($,zt),e(zt,Sa),e($,Wa),b(He,$,null),e($,Ta),b(Re,$,null),Zt=!0},p(t,[p]){const Ue={};p&2&&(Ue.$$scope={dirty:p,ctx:t}),se.$set(Ue);const At={};p&2&&(At.$$scope={dirty:p,ctx:t}),ie.$set(At);const Dt={};p&2&&(Dt.$$scope={dirty:p,ctx:t}),de.$set(Dt)},i(t){Zt||(w(u.$$.fragment,t),w(ce.$$.fragment,t),w(he.$$.fragment,t),w(ue.$$.fragment,t),w(_e.$$.fragment,t),w(ve.$$.fragment,t),w(be.$$.fragment,t),w(Te.$$.fragment,t),w(se.$$.fragment,t),w(ke.$$.fragment,t),w(Ce.$$.fragment,t),w($e.$$.fragment,t),w(Fe.$$.fragment,t),w(ie.$$.fragment,t),w(Me.$$.fragment,t),w(ze.$$.fragment,t),w(Ae.$$.fragment,t),w(De.$$.fragment,t),w(Ke.$$.fragment,t),w(de.$$.fragment,t),w(He.$$.fragment,t),w(Re.$$.fragment,t),Zt=!0)},o(t){y(u.$$.fragment,t),y(ce.$$.fragment,t),y(he.$$.fragment,t),y(ue.$$.fragment,t),y(_e.$$.fragment,t),y(ve.$$.fragment,t),y(be.$$.fragment,t),y(Te.$$.fragment,t),y(se.$$.fragment,t),y(ke.$$.fragment,t),y(Ce.$$.fragment,t),y($e.$$.fragment,t),y(Fe.$$.fragment,t),y(ie.$$.fragment,t),y(Me.$$.fragment,t),y(ze.$$.fragment,t),y(Ae.$$.fragment,t),y(De.$$.fragment,t),y(Ke.$$.fragment,t),y(de.$$.fragment,t),y(He.$$.fragment,t),y(Re.$$.fragment,t),Zt=!1},d(t){o(m),t&&o(k),t&&o(h),E(u),t&&o(Ot),t&&o(I),E(ce),t&&o(Vt),t&&o(ee),t&&o(Lt),t&&o(Qe),t&&o(It),t&&o(Be),t&&o(Nt),t&&o(Ye),t&&o(Kt),t&&o(te),t&&o(Ht),t&&o(oe),t&&o(Rt),t&&o(N),E(he),t&&o(Ut),t&&o(j),E(ue),E(_e),t&&o(Jt),t&&o(R),E(ve),t&&o(Qt),t&&o(x),E(be),E(Te),E(se),E(ke),t&&o(Bt),t&&o(J),E(Ce),t&&o(Yt),t&&o(q),E($e),E(Fe),E(ie),E(Me),E(ze),t&&o(Gt),t&&o(Y),E(Ae),t&&o(Xt),t&&o(T),E(De),E(Ke),E(de),E(He),E(Re)}}}const qs={local:"sew",sections:[{local:"overview",title:"Overview"},{local:"transformers.SEWConfig",title:"SEWConfig"},{local:"transformers.SEWModel",title:"SEWModel"},{local:"transformers.SEWForCTC",title:"SEWForCTC"},{local:"transformers.SEWForSequenceClassification",title:"SEWForSequenceClassification"}],title:"SEW"};function Ps(X){return ks(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Os extends Es{constructor(m){super();Ss(this,m,Ps,xs,Ws,{})}}export{Os as default,qs as metadata};
