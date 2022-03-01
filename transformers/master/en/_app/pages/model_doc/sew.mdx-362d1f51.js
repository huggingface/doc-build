import{S as yn,i as Sn,s as Wn,e as a,k as c,w as v,t as r,M as kn,c as s,d as o,m as d,a as n,x as w,h as i,b as l,F as e,g as f,y as b,q as E,o as y,B as S}from"../../chunks/vendor-4833417e.js";import{T as ks}from"../../chunks/Tip-fffd6df1.js";import{D as Je}from"../../chunks/Docstring-7b52c3d4.js";import{C as ft}from"../../chunks/CodeBlock-90ffda97.js";import{I as ht}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-04a16537.js";function Cn(N){let p,W,h,_,k;return{c(){p=a("p"),W=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){p=s(u,"P",{});var g=n(p);W=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var P=n(h);_=i(P,"Module"),P.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,p,g),e(p,W),e(p,h),e(h,_),e(p,k)},d(u){u&&o(p)}}}function Tn(N){let p,W,h,_,k;return{c(){p=a("p"),W=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){p=s(u,"P",{});var g=n(p);W=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var P=n(h);_=i(P,"Module"),P.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,p,g),e(p,W),e(p,h),e(h,_),e(p,k)},d(u){u&&o(p)}}}function $n(N){let p,W,h,_,k;return{c(){p=a("p"),W=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){p=s(u,"P",{});var g=n(p);W=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(g,"CODE",{});var P=n(h);_=i(P,"Module"),P.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,p,g),e(p,W),e(p,h),e(h,_),e(p,k)},d(u){u&&o(p)}}}function jn(N){let p,W,h,_,k,u,g,P,vo,Vt,O,Z,ut,de,wo,gt,bo,Lt,ee,Eo,me,yo,So,It,Qe,Wo,Nt,Ye,_t,ko,Ot,Be,Co,Kt,te,vt,To,$o,pe,jo,Ge,qo,xo,Ht,oe,Po,fe,Fo,Mo,Rt,K,ae,wt,he,zo,bt,Ao,Ut,j,ue,Do,H,Vo,Xe,Lo,Io,ge,No,Oo,Ko,R,Ho,Ze,Ro,Uo,et,Jo,Qo,Yo,Et,Bo,Go,_e,Jt,U,se,yt,ve,Xo,St,Zo,Qt,q,we,ea,be,ta,Ee,oa,aa,sa,ye,na,tt,ra,ia,la,Se,ca,We,da,ma,pa,F,ke,fa,J,ha,ot,ua,ga,Wt,_a,va,wa,ne,ba,kt,Ea,ya,Ce,Yt,Q,re,Ct,Te,Sa,Tt,Wa,Bt,x,$e,ka,Y,Ca,$t,Ta,$a,je,ja,qa,xa,qe,Pa,at,Fa,Ma,za,xe,Aa,Pe,Da,Va,La,T,Fe,Ia,B,Na,st,Oa,Ka,jt,Ha,Ra,Ua,ie,Ja,qt,Qa,Ya,Me,Ba,ze,Gt,G,le,xt,Ae,Ga,Pt,Xa,Xt,C,De,Za,Ft,es,ts,Ve,os,Le,as,ss,ns,Ie,rs,nt,is,ls,cs,Ne,ds,Oe,ms,ps,fs,$,Ke,hs,X,us,rt,gs,_s,Mt,vs,ws,bs,ce,Es,zt,ys,Ss,He,Ws,Re,Zt;return u=new ht({}),de=new ht({}),he=new ht({}),ue=new Je({props:{name:"class transformers.SEWConfig",anchor:"transformers.SEWConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"squeeze_factor",val:" = 2"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)"},{name:"conv_kernel",val:" = (10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/configuration_sew.py#L29",parametersDescription:[{anchor:"transformers.SEWConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
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
The dropout probability for the final projection layer of <a href="/docs/transformers/master/en/model_doc/sew#transformers.SEWForCTC">SEWForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.SEWConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
instance of <a href="/docs/transformers/master/en/model_doc/sew#transformers.SEWForCTC">SEWForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.SEWConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/master/en/model_doc/sew#transformers.SEWForCTC">SEWForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.SEWConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification">Wav2Vec2ForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.SEWConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}]}}),_e=new ft({props:{codee:`from transformers import SEWModel, SEWConfig

# Initializing a SEW asapp/sew-tiny-100k style configuration
configuration = SEWConfig()

# Initializing a model from the asapp/sew-tiny-100k style configuration
model = SEWModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SEWModel, SEWConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a SEW asapp/sew-tiny-100k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SEWConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the asapp/sew-tiny-100k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ve=new ht({}),we=new Je({props:{name:"class transformers.SEWModel",anchor:"transformers.SEWModel",parameters:[{name:"config",val:": SEWConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/modeling_sew.py#L840",parametersDescription:[{anchor:"transformers.SEWModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/sew#transformers.SEWConfig">SEWConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ke=new Je({props:{name:"forward",anchor:"transformers.SEWModel.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/modeling_sew.py#L907",parametersDescription:[{anchor:"transformers.SEWModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/sew#transformers.SEWConfig"
>SEWConfig</a>) and inputs.</p>
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
`}}),ne=new ks({props:{$$slots:{default:[Cn]},$$scope:{ctx:N}}}),Ce=new ft({props:{codee:`from transformers import Wav2Vec2Processor, SEWModel
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
list(last_hidden_states.shape),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">512</span>]`}}),Te=new ht({}),$e=new Je({props:{name:"class transformers.SEWForCTC",anchor:"transformers.SEWForCTC",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/modeling_sew.py#L970",parametersDescription:[{anchor:"transformers.SEWForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/sew#transformers.SEWConfig">SEWConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fe=new Je({props:{name:"forward",anchor:"transformers.SEWForCTC.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/modeling_sew.py#L1011",parametersDescription:[{anchor:"transformers.SEWForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SEWForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/sew#transformers.SEWConfig"
>SEWConfig</a>) and inputs.</p>
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
`}}),ie=new ks({props:{$$slots:{default:[Tn]},$$scope:{ctx:N}}}),Me=new ft({props:{codee:`from transformers import Wav2Vec2Processor, SEWForCTC
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
transcription[0],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWForCTC
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
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APPOSTILE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPOLLE&#x27;</span>`}}),ze=new ft({props:{codee:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.42</span>`}}),Ae=new ht({}),De=new Je({props:{name:"class transformers.SEWForSequenceClassification",anchor:"transformers.SEWForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/modeling_sew.py#L1101",parametersDescription:[{anchor:"transformers.SEWForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/sew#transformers.SEWConfig">SEWConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ke=new Je({props:{name:"forward",anchor:"transformers.SEWForSequenceClassification.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/modeling_sew.py#L1146",parametersDescription:[{anchor:"transformers.SEWForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SEWForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/sew#transformers.SEWConfig"
>SEWConfig</a>) and inputs.</p>
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
`}}),ce=new ks({props:{$$slots:{default:[$n]},$$scope:{ctx:N}}}),He=new ft({props:{codee:`from transformers import Wav2Vec2FeatureExtractor, SEWForSequenceClassification
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
predicted_label,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, SEWForSequenceClassification
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
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),Re=new ft({props:{codee:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">9.52</span>`}}),{c(){p=a("meta"),W=c(),h=a("h1"),_=a("a"),k=a("span"),v(u.$$.fragment),g=c(),P=a("span"),vo=r("SEW"),Vt=c(),O=a("h2"),Z=a("a"),ut=a("span"),v(de.$$.fragment),wo=c(),gt=a("span"),bo=r("Overview"),Lt=c(),ee=a("p"),Eo=r("SEW (Squeezed and Efficient Wav2Vec) was proposed in "),me=a("a"),yo=r(`Performance-Efficiency Trade-offs in Unsupervised Pre-training
for Speech Recognition`),So=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q.
Weinberger, Yoav Artzi.`),It=c(),Qe=a("p"),Wo=r("The abstract from the paper is the following:"),Nt=c(),Ye=a("p"),_t=a("em"),ko=r(`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),Ot=c(),Be=a("p"),Co=r("Tips:"),Kt=c(),te=a("ul"),vt=a("li"),To=r("SEW is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),$o=c(),pe=a("li"),jo=r(`SEWForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded using
`),Ge=a("a"),qo=r("Wav2Vec2CTCTokenizer"),xo=r("."),Ht=c(),oe=a("p"),Po=r("This model was contributed by "),fe=a("a"),Fo=r("anton-l"),Mo=r("."),Rt=c(),K=a("h2"),ae=a("a"),wt=a("span"),v(he.$$.fragment),zo=c(),bt=a("span"),Ao=r("SEWConfig"),Ut=c(),j=a("div"),v(ue.$$.fragment),Do=c(),H=a("p"),Vo=r("This is the configuration class to store the configuration of a "),Xe=a("a"),Lo=r("SEWModel"),Io=r(`. It is used to instantiate a SEW model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the SEW
`),ge=a("a"),No=r("asapp/sew-tiny-100k"),Oo=r(" architecture."),Ko=c(),R=a("p"),Ho=r("Configuration objects inherit from "),Ze=a("a"),Ro=r("PretrainedConfig"),Uo=r(` and can be used to control the model outputs. Read the
documentation from `),et=a("a"),Jo=r("PretrainedConfig"),Qo=r(" for more information."),Yo=c(),Et=a("p"),Bo=r("Example:"),Go=c(),v(_e.$$.fragment),Jt=c(),U=a("h2"),se=a("a"),yt=a("span"),v(ve.$$.fragment),Xo=c(),St=a("span"),Zo=r("SEWModel"),Qt=c(),q=a("div"),v(we.$$.fragment),ea=c(),be=a("p"),ta=r(`The bare SEW Model transformer outputting raw hidden-states without any specific head on top.
SEW was proposed in `),Ee=a("a"),oa=r(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),aa=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),sa=c(),ye=a("p"),na=r("This model inherits from "),tt=a("a"),ra=r("PreTrainedModel"),ia=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),la=c(),Se=a("p"),ca=r("This model is a PyTorch "),We=a("a"),da=r("torch.nn.Module"),ma=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pa=c(),F=a("div"),v(ke.$$.fragment),fa=c(),J=a("p"),ha=r("The "),ot=a("a"),ua=r("SEWModel"),ga=r(" forward method, overrides the "),Wt=a("code"),_a=r("__call__"),va=r(" special method."),wa=c(),v(ne.$$.fragment),ba=c(),kt=a("p"),Ea=r("Example:"),ya=c(),v(Ce.$$.fragment),Yt=c(),Q=a("h2"),re=a("a"),Ct=a("span"),v(Te.$$.fragment),Sa=c(),Tt=a("span"),Wa=r("SEWForCTC"),Bt=c(),x=a("div"),v($e.$$.fragment),ka=c(),Y=a("p"),Ca=r("SEW Model with a "),$t=a("code"),Ta=r("language modeling"),$a=r(` head on top for Connectionist Temporal Classification (CTC).
SEW was proposed in `),je=a("a"),ja=r(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),qa=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),xa=c(),qe=a("p"),Pa=r("This model inherits from "),at=a("a"),Fa=r("PreTrainedModel"),Ma=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),za=c(),xe=a("p"),Aa=r("This model is a PyTorch "),Pe=a("a"),Da=r("torch.nn.Module"),Va=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),La=c(),T=a("div"),v(Fe.$$.fragment),Ia=c(),B=a("p"),Na=r("The "),st=a("a"),Oa=r("SEWForCTC"),Ka=r(" forward method, overrides the "),jt=a("code"),Ha=r("__call__"),Ra=r(" special method."),Ua=c(),v(ie.$$.fragment),Ja=c(),qt=a("p"),Qa=r("Example:"),Ya=c(),v(Me.$$.fragment),Ba=c(),v(ze.$$.fragment),Gt=c(),G=a("h2"),le=a("a"),xt=a("span"),v(Ae.$$.fragment),Ga=c(),Pt=a("span"),Xa=r("SEWForSequenceClassification"),Xt=c(),C=a("div"),v(De.$$.fragment),Za=c(),Ft=a("p"),es=r(`SEW Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),ts=c(),Ve=a("p"),os=r("SEW was proposed in "),Le=a("a"),as=r(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),ss=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),ns=c(),Ie=a("p"),rs=r("This model inherits from "),nt=a("a"),is=r("PreTrainedModel"),ls=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),cs=c(),Ne=a("p"),ds=r("This model is a PyTorch "),Oe=a("a"),ms=r("torch.nn.Module"),ps=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fs=c(),$=a("div"),v(Ke.$$.fragment),hs=c(),X=a("p"),us=r("The "),rt=a("a"),gs=r("SEWForSequenceClassification"),_s=r(" forward method, overrides the "),Mt=a("code"),vs=r("__call__"),ws=r(" special method."),bs=c(),v(ce.$$.fragment),Es=c(),zt=a("p"),ys=r("Example:"),Ss=c(),v(He.$$.fragment),Ws=c(),v(Re.$$.fragment),this.h()},l(t){const m=kn('[data-svelte="svelte-1phssyn"]',document.head);p=s(m,"META",{name:!0,content:!0}),m.forEach(o),W=d(t),h=s(t,"H1",{class:!0});var Ue=n(h);_=s(Ue,"A",{id:!0,class:!0,href:!0});var At=n(_);k=s(At,"SPAN",{});var Dt=n(k);w(u.$$.fragment,Dt),Dt.forEach(o),At.forEach(o),g=d(Ue),P=s(Ue,"SPAN",{});var Cs=n(P);vo=i(Cs,"SEW"),Cs.forEach(o),Ue.forEach(o),Vt=d(t),O=s(t,"H2",{class:!0});var eo=n(O);Z=s(eo,"A",{id:!0,class:!0,href:!0});var Ts=n(Z);ut=s(Ts,"SPAN",{});var $s=n(ut);w(de.$$.fragment,$s),$s.forEach(o),Ts.forEach(o),wo=d(eo),gt=s(eo,"SPAN",{});var js=n(gt);bo=i(js,"Overview"),js.forEach(o),eo.forEach(o),Lt=d(t),ee=s(t,"P",{});var to=n(ee);Eo=i(to,"SEW (Squeezed and Efficient Wav2Vec) was proposed in "),me=s(to,"A",{href:!0,rel:!0});var qs=n(me);yo=i(qs,`Performance-Efficiency Trade-offs in Unsupervised Pre-training
for Speech Recognition`),qs.forEach(o),So=i(to,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q.
Weinberger, Yoav Artzi.`),to.forEach(o),It=d(t),Qe=s(t,"P",{});var xs=n(Qe);Wo=i(xs,"The abstract from the paper is the following:"),xs.forEach(o),Nt=d(t),Ye=s(t,"P",{});var Ps=n(Ye);_t=s(Ps,"EM",{});var Fs=n(_t);ko=i(Fs,`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),Fs.forEach(o),Ps.forEach(o),Ot=d(t),Be=s(t,"P",{});var Ms=n(Be);Co=i(Ms,"Tips:"),Ms.forEach(o),Kt=d(t),te=s(t,"UL",{});var oo=n(te);vt=s(oo,"LI",{});var zs=n(vt);To=i(zs,"SEW is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),zs.forEach(o),$o=d(oo),pe=s(oo,"LI",{});var ao=n(pe);jo=i(ao,`SEWForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded using
`),Ge=s(ao,"A",{href:!0});var As=n(Ge);qo=i(As,"Wav2Vec2CTCTokenizer"),As.forEach(o),xo=i(ao,"."),ao.forEach(o),oo.forEach(o),Ht=d(t),oe=s(t,"P",{});var so=n(oe);Po=i(so,"This model was contributed by "),fe=s(so,"A",{href:!0,rel:!0});var Ds=n(fe);Fo=i(Ds,"anton-l"),Ds.forEach(o),Mo=i(so,"."),so.forEach(o),Rt=d(t),K=s(t,"H2",{class:!0});var no=n(K);ae=s(no,"A",{id:!0,class:!0,href:!0});var Vs=n(ae);wt=s(Vs,"SPAN",{});var Ls=n(wt);w(he.$$.fragment,Ls),Ls.forEach(o),Vs.forEach(o),zo=d(no),bt=s(no,"SPAN",{});var Is=n(bt);Ao=i(Is,"SEWConfig"),Is.forEach(o),no.forEach(o),Ut=d(t),j=s(t,"DIV",{class:!0});var D=n(j);w(ue.$$.fragment,D),Do=d(D),H=s(D,"P",{});var it=n(H);Vo=i(it,"This is the configuration class to store the configuration of a "),Xe=s(it,"A",{href:!0});var Ns=n(Xe);Lo=i(Ns,"SEWModel"),Ns.forEach(o),Io=i(it,`. It is used to instantiate a SEW model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the SEW
`),ge=s(it,"A",{href:!0,rel:!0});var Os=n(ge);No=i(Os,"asapp/sew-tiny-100k"),Os.forEach(o),Oo=i(it," architecture."),it.forEach(o),Ko=d(D),R=s(D,"P",{});var lt=n(R);Ho=i(lt,"Configuration objects inherit from "),Ze=s(lt,"A",{href:!0});var Ks=n(Ze);Ro=i(Ks,"PretrainedConfig"),Ks.forEach(o),Uo=i(lt,` and can be used to control the model outputs. Read the
documentation from `),et=s(lt,"A",{href:!0});var Hs=n(et);Jo=i(Hs,"PretrainedConfig"),Hs.forEach(o),Qo=i(lt," for more information."),lt.forEach(o),Yo=d(D),Et=s(D,"P",{});var Rs=n(Et);Bo=i(Rs,"Example:"),Rs.forEach(o),Go=d(D),w(_e.$$.fragment,D),D.forEach(o),Jt=d(t),U=s(t,"H2",{class:!0});var ro=n(U);se=s(ro,"A",{id:!0,class:!0,href:!0});var Us=n(se);yt=s(Us,"SPAN",{});var Js=n(yt);w(ve.$$.fragment,Js),Js.forEach(o),Us.forEach(o),Xo=d(ro),St=s(ro,"SPAN",{});var Qs=n(St);Zo=i(Qs,"SEWModel"),Qs.forEach(o),ro.forEach(o),Qt=d(t),q=s(t,"DIV",{class:!0});var V=n(q);w(we.$$.fragment,V),ea=d(V),be=s(V,"P",{});var io=n(be);ta=i(io,`The bare SEW Model transformer outputting raw hidden-states without any specific head on top.
SEW was proposed in `),Ee=s(io,"A",{href:!0,rel:!0});var Ys=n(Ee);oa=i(Ys,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),Ys.forEach(o),aa=i(io,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),io.forEach(o),sa=d(V),ye=s(V,"P",{});var lo=n(ye);na=i(lo,"This model inherits from "),tt=s(lo,"A",{href:!0});var Bs=n(tt);ra=i(Bs,"PreTrainedModel"),Bs.forEach(o),ia=i(lo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),lo.forEach(o),la=d(V),Se=s(V,"P",{});var co=n(Se);ca=i(co,"This model is a PyTorch "),We=s(co,"A",{href:!0,rel:!0});var Gs=n(We);da=i(Gs,"torch.nn.Module"),Gs.forEach(o),ma=i(co,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),co.forEach(o),pa=d(V),F=s(V,"DIV",{class:!0});var L=n(F);w(ke.$$.fragment,L),fa=d(L),J=s(L,"P",{});var ct=n(J);ha=i(ct,"The "),ot=s(ct,"A",{href:!0});var Xs=n(ot);ua=i(Xs,"SEWModel"),Xs.forEach(o),ga=i(ct," forward method, overrides the "),Wt=s(ct,"CODE",{});var Zs=n(Wt);_a=i(Zs,"__call__"),Zs.forEach(o),va=i(ct," special method."),ct.forEach(o),wa=d(L),w(ne.$$.fragment,L),ba=d(L),kt=s(L,"P",{});var en=n(kt);Ea=i(en,"Example:"),en.forEach(o),ya=d(L),w(Ce.$$.fragment,L),L.forEach(o),V.forEach(o),Yt=d(t),Q=s(t,"H2",{class:!0});var mo=n(Q);re=s(mo,"A",{id:!0,class:!0,href:!0});var tn=n(re);Ct=s(tn,"SPAN",{});var on=n(Ct);w(Te.$$.fragment,on),on.forEach(o),tn.forEach(o),Sa=d(mo),Tt=s(mo,"SPAN",{});var an=n(Tt);Wa=i(an,"SEWForCTC"),an.forEach(o),mo.forEach(o),Bt=d(t),x=s(t,"DIV",{class:!0});var I=n(x);w($e.$$.fragment,I),ka=d(I),Y=s(I,"P",{});var dt=n(Y);Ca=i(dt,"SEW Model with a "),$t=s(dt,"CODE",{});var sn=n($t);Ta=i(sn,"language modeling"),sn.forEach(o),$a=i(dt,` head on top for Connectionist Temporal Classification (CTC).
SEW was proposed in `),je=s(dt,"A",{href:!0,rel:!0});var nn=n(je);ja=i(nn,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),nn.forEach(o),qa=i(dt,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),dt.forEach(o),xa=d(I),qe=s(I,"P",{});var po=n(qe);Pa=i(po,"This model inherits from "),at=s(po,"A",{href:!0});var rn=n(at);Fa=i(rn,"PreTrainedModel"),rn.forEach(o),Ma=i(po,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),po.forEach(o),za=d(I),xe=s(I,"P",{});var fo=n(xe);Aa=i(fo,"This model is a PyTorch "),Pe=s(fo,"A",{href:!0,rel:!0});var ln=n(Pe);Da=i(ln,"torch.nn.Module"),ln.forEach(o),Va=i(fo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fo.forEach(o),La=d(I),T=s(I,"DIV",{class:!0});var M=n(T);w(Fe.$$.fragment,M),Ia=d(M),B=s(M,"P",{});var mt=n(B);Na=i(mt,"The "),st=s(mt,"A",{href:!0});var cn=n(st);Oa=i(cn,"SEWForCTC"),cn.forEach(o),Ka=i(mt," forward method, overrides the "),jt=s(mt,"CODE",{});var dn=n(jt);Ha=i(dn,"__call__"),dn.forEach(o),Ra=i(mt," special method."),mt.forEach(o),Ua=d(M),w(ie.$$.fragment,M),Ja=d(M),qt=s(M,"P",{});var mn=n(qt);Qa=i(mn,"Example:"),mn.forEach(o),Ya=d(M),w(Me.$$.fragment,M),Ba=d(M),w(ze.$$.fragment,M),M.forEach(o),I.forEach(o),Gt=d(t),G=s(t,"H2",{class:!0});var ho=n(G);le=s(ho,"A",{id:!0,class:!0,href:!0});var pn=n(le);xt=s(pn,"SPAN",{});var fn=n(xt);w(Ae.$$.fragment,fn),fn.forEach(o),pn.forEach(o),Ga=d(ho),Pt=s(ho,"SPAN",{});var hn=n(Pt);Xa=i(hn,"SEWForSequenceClassification"),hn.forEach(o),ho.forEach(o),Xt=d(t),C=s(t,"DIV",{class:!0});var z=n(C);w(De.$$.fragment,z),Za=d(z),Ft=s(z,"P",{});var un=n(Ft);es=i(un,`SEW Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),un.forEach(o),ts=d(z),Ve=s(z,"P",{});var uo=n(Ve);os=i(uo,"SEW was proposed in "),Le=s(uo,"A",{href:!0,rel:!0});var gn=n(Le);as=i(gn,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),gn.forEach(o),ss=i(uo,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),uo.forEach(o),ns=d(z),Ie=s(z,"P",{});var go=n(Ie);rs=i(go,"This model inherits from "),nt=s(go,"A",{href:!0});var _n=n(nt);is=i(_n,"PreTrainedModel"),_n.forEach(o),ls=i(go,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),go.forEach(o),cs=d(z),Ne=s(z,"P",{});var _o=n(Ne);ds=i(_o,"This model is a PyTorch "),Oe=s(_o,"A",{href:!0,rel:!0});var vn=n(Oe);ms=i(vn,"torch.nn.Module"),vn.forEach(o),ps=i(_o,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_o.forEach(o),fs=d(z),$=s(z,"DIV",{class:!0});var A=n($);w(Ke.$$.fragment,A),hs=d(A),X=s(A,"P",{});var pt=n(X);us=i(pt,"The "),rt=s(pt,"A",{href:!0});var wn=n(rt);gs=i(wn,"SEWForSequenceClassification"),wn.forEach(o),_s=i(pt," forward method, overrides the "),Mt=s(pt,"CODE",{});var bn=n(Mt);vs=i(bn,"__call__"),bn.forEach(o),ws=i(pt," special method."),pt.forEach(o),bs=d(A),w(ce.$$.fragment,A),Es=d(A),zt=s(A,"P",{});var En=n(zt);ys=i(En,"Example:"),En.forEach(o),Ss=d(A),w(He.$$.fragment,A),Ws=d(A),w(Re.$$.fragment,A),A.forEach(o),z.forEach(o),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(qn)),l(_,"id","sew"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#sew"),l(h,"class","relative group"),l(Z,"id","overview"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#overview"),l(O,"class","relative group"),l(me,"href","https://arxiv.org/abs/2109.06870"),l(me,"rel","nofollow"),l(Ge,"href","/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),l(fe,"href","https://huggingface.co/anton-l"),l(fe,"rel","nofollow"),l(ae,"id","transformers.SEWConfig"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.SEWConfig"),l(K,"class","relative group"),l(Xe,"href","/docs/transformers/master/en/model_doc/sew#transformers.SEWModel"),l(ge,"href","https://huggingface.co/asapp/sew-tiny-100k"),l(ge,"rel","nofollow"),l(Ze,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(et,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(j,"class","docstring"),l(se,"id","transformers.SEWModel"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.SEWModel"),l(U,"class","relative group"),l(Ee,"href","https://arxiv.org/abs/2109.06870"),l(Ee,"rel","nofollow"),l(tt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),l(We,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(We,"rel","nofollow"),l(ot,"href","/docs/transformers/master/en/model_doc/sew#transformers.SEWModel"),l(F,"class","docstring"),l(q,"class","docstring"),l(re,"id","transformers.SEWForCTC"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.SEWForCTC"),l(Q,"class","relative group"),l(je,"href","https://arxiv.org/abs/2109.06870"),l(je,"rel","nofollow"),l(at,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),l(Pe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Pe,"rel","nofollow"),l(st,"href","/docs/transformers/master/en/model_doc/sew#transformers.SEWForCTC"),l(T,"class","docstring"),l(x,"class","docstring"),l(le,"id","transformers.SEWForSequenceClassification"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.SEWForSequenceClassification"),l(G,"class","relative group"),l(Le,"href","https://arxiv.org/abs/2109.06870"),l(Le,"rel","nofollow"),l(nt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),l(Oe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Oe,"rel","nofollow"),l(rt,"href","/docs/transformers/master/en/model_doc/sew#transformers.SEWForSequenceClassification"),l($,"class","docstring"),l(C,"class","docstring")},m(t,m){e(document.head,p),f(t,W,m),f(t,h,m),e(h,_),e(_,k),b(u,k,null),e(h,g),e(h,P),e(P,vo),f(t,Vt,m),f(t,O,m),e(O,Z),e(Z,ut),b(de,ut,null),e(O,wo),e(O,gt),e(gt,bo),f(t,Lt,m),f(t,ee,m),e(ee,Eo),e(ee,me),e(me,yo),e(ee,So),f(t,It,m),f(t,Qe,m),e(Qe,Wo),f(t,Nt,m),f(t,Ye,m),e(Ye,_t),e(_t,ko),f(t,Ot,m),f(t,Be,m),e(Be,Co),f(t,Kt,m),f(t,te,m),e(te,vt),e(vt,To),e(te,$o),e(te,pe),e(pe,jo),e(pe,Ge),e(Ge,qo),e(pe,xo),f(t,Ht,m),f(t,oe,m),e(oe,Po),e(oe,fe),e(fe,Fo),e(oe,Mo),f(t,Rt,m),f(t,K,m),e(K,ae),e(ae,wt),b(he,wt,null),e(K,zo),e(K,bt),e(bt,Ao),f(t,Ut,m),f(t,j,m),b(ue,j,null),e(j,Do),e(j,H),e(H,Vo),e(H,Xe),e(Xe,Lo),e(H,Io),e(H,ge),e(ge,No),e(H,Oo),e(j,Ko),e(j,R),e(R,Ho),e(R,Ze),e(Ze,Ro),e(R,Uo),e(R,et),e(et,Jo),e(R,Qo),e(j,Yo),e(j,Et),e(Et,Bo),e(j,Go),b(_e,j,null),f(t,Jt,m),f(t,U,m),e(U,se),e(se,yt),b(ve,yt,null),e(U,Xo),e(U,St),e(St,Zo),f(t,Qt,m),f(t,q,m),b(we,q,null),e(q,ea),e(q,be),e(be,ta),e(be,Ee),e(Ee,oa),e(be,aa),e(q,sa),e(q,ye),e(ye,na),e(ye,tt),e(tt,ra),e(ye,ia),e(q,la),e(q,Se),e(Se,ca),e(Se,We),e(We,da),e(Se,ma),e(q,pa),e(q,F),b(ke,F,null),e(F,fa),e(F,J),e(J,ha),e(J,ot),e(ot,ua),e(J,ga),e(J,Wt),e(Wt,_a),e(J,va),e(F,wa),b(ne,F,null),e(F,ba),e(F,kt),e(kt,Ea),e(F,ya),b(Ce,F,null),f(t,Yt,m),f(t,Q,m),e(Q,re),e(re,Ct),b(Te,Ct,null),e(Q,Sa),e(Q,Tt),e(Tt,Wa),f(t,Bt,m),f(t,x,m),b($e,x,null),e(x,ka),e(x,Y),e(Y,Ca),e(Y,$t),e($t,Ta),e(Y,$a),e(Y,je),e(je,ja),e(Y,qa),e(x,xa),e(x,qe),e(qe,Pa),e(qe,at),e(at,Fa),e(qe,Ma),e(x,za),e(x,xe),e(xe,Aa),e(xe,Pe),e(Pe,Da),e(xe,Va),e(x,La),e(x,T),b(Fe,T,null),e(T,Ia),e(T,B),e(B,Na),e(B,st),e(st,Oa),e(B,Ka),e(B,jt),e(jt,Ha),e(B,Ra),e(T,Ua),b(ie,T,null),e(T,Ja),e(T,qt),e(qt,Qa),e(T,Ya),b(Me,T,null),e(T,Ba),b(ze,T,null),f(t,Gt,m),f(t,G,m),e(G,le),e(le,xt),b(Ae,xt,null),e(G,Ga),e(G,Pt),e(Pt,Xa),f(t,Xt,m),f(t,C,m),b(De,C,null),e(C,Za),e(C,Ft),e(Ft,es),e(C,ts),e(C,Ve),e(Ve,os),e(Ve,Le),e(Le,as),e(Ve,ss),e(C,ns),e(C,Ie),e(Ie,rs),e(Ie,nt),e(nt,is),e(Ie,ls),e(C,cs),e(C,Ne),e(Ne,ds),e(Ne,Oe),e(Oe,ms),e(Ne,ps),e(C,fs),e(C,$),b(Ke,$,null),e($,hs),e($,X),e(X,us),e(X,rt),e(rt,gs),e(X,_s),e(X,Mt),e(Mt,vs),e(X,ws),e($,bs),b(ce,$,null),e($,Es),e($,zt),e(zt,ys),e($,Ss),b(He,$,null),e($,Ws),b(Re,$,null),Zt=!0},p(t,[m]){const Ue={};m&2&&(Ue.$$scope={dirty:m,ctx:t}),ne.$set(Ue);const At={};m&2&&(At.$$scope={dirty:m,ctx:t}),ie.$set(At);const Dt={};m&2&&(Dt.$$scope={dirty:m,ctx:t}),ce.$set(Dt)},i(t){Zt||(E(u.$$.fragment,t),E(de.$$.fragment,t),E(he.$$.fragment,t),E(ue.$$.fragment,t),E(_e.$$.fragment,t),E(ve.$$.fragment,t),E(we.$$.fragment,t),E(ke.$$.fragment,t),E(ne.$$.fragment,t),E(Ce.$$.fragment,t),E(Te.$$.fragment,t),E($e.$$.fragment,t),E(Fe.$$.fragment,t),E(ie.$$.fragment,t),E(Me.$$.fragment,t),E(ze.$$.fragment,t),E(Ae.$$.fragment,t),E(De.$$.fragment,t),E(Ke.$$.fragment,t),E(ce.$$.fragment,t),E(He.$$.fragment,t),E(Re.$$.fragment,t),Zt=!0)},o(t){y(u.$$.fragment,t),y(de.$$.fragment,t),y(he.$$.fragment,t),y(ue.$$.fragment,t),y(_e.$$.fragment,t),y(ve.$$.fragment,t),y(we.$$.fragment,t),y(ke.$$.fragment,t),y(ne.$$.fragment,t),y(Ce.$$.fragment,t),y(Te.$$.fragment,t),y($e.$$.fragment,t),y(Fe.$$.fragment,t),y(ie.$$.fragment,t),y(Me.$$.fragment,t),y(ze.$$.fragment,t),y(Ae.$$.fragment,t),y(De.$$.fragment,t),y(Ke.$$.fragment,t),y(ce.$$.fragment,t),y(He.$$.fragment,t),y(Re.$$.fragment,t),Zt=!1},d(t){o(p),t&&o(W),t&&o(h),S(u),t&&o(Vt),t&&o(O),S(de),t&&o(Lt),t&&o(ee),t&&o(It),t&&o(Qe),t&&o(Nt),t&&o(Ye),t&&o(Ot),t&&o(Be),t&&o(Kt),t&&o(te),t&&o(Ht),t&&o(oe),t&&o(Rt),t&&o(K),S(he),t&&o(Ut),t&&o(j),S(ue),S(_e),t&&o(Jt),t&&o(U),S(ve),t&&o(Qt),t&&o(q),S(we),S(ke),S(ne),S(Ce),t&&o(Yt),t&&o(Q),S(Te),t&&o(Bt),t&&o(x),S($e),S(Fe),S(ie),S(Me),S(ze),t&&o(Gt),t&&o(G),S(Ae),t&&o(Xt),t&&o(C),S(De),S(Ke),S(ce),S(He),S(Re)}}}const qn={local:"sew",sections:[{local:"overview",title:"Overview"},{local:"transformers.SEWConfig",title:"SEWConfig"},{local:"transformers.SEWModel",title:"SEWModel"},{local:"transformers.SEWForCTC",title:"SEWForCTC"},{local:"transformers.SEWForSequenceClassification",title:"SEWForSequenceClassification"}],title:"SEW"};function xn(N,p,W){let{fw:h}=p;return N.$$set=_=>{"fw"in _&&W(0,h=_.fw)},[h]}class Vn extends yn{constructor(p){super();Sn(this,p,xn,jn,Wn,{fw:0})}}export{Vn as default,qn as metadata};
