import{S as vs,i as ws,s as bs,e as a,k as c,w as v,t as r,L as Es,c as n,d as o,m as d,a as s,x as w,h as i,b as l,J as e,g as f,y as b,q as E,o as y,B as S}from"../../../chunks/vendor-e859c359.js";import{T as yn}from"../../../chunks/Tip-edc75249.js";import{D as Ue}from"../../../chunks/Docstring-ade913b3.js";import{C as uo}from"../../../chunks/CodeBlock-ce4317c2.js";import{I as mt}from"../../../chunks/IconCopyLink-5fae3b20.js";import"../../../chunks/CopyButton-77addb3d.js";function ys(O){let p,W,h,_,C;return{c(){p=a("p"),W=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),h=a("code"),_=r("Module"),C=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(u){p=n(u,"P",{});var g=s(p);W=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),h=n(g,"CODE",{});var q=s(h);_=i(q,"Module"),q.forEach(o),C=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,p,g),e(p,W),e(p,h),e(h,_),e(p,C)},d(u){u&&o(p)}}}function Ss(O){let p,W,h,_,C;return{c(){p=a("p"),W=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),h=a("code"),_=r("Module"),C=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(u){p=n(u,"P",{});var g=s(p);W=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),h=n(g,"CODE",{});var q=s(h);_=i(q,"Module"),q.forEach(o),C=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,p,g),e(p,W),e(p,h),e(h,_),e(p,C)},d(u){u&&o(p)}}}function Ws(O){let p,W,h,_,C;return{c(){p=a("p"),W=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),h=a("code"),_=r("Module"),C=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(u){p=n(u,"P",{});var g=s(p);W=i(g,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),h=n(g,"CODE",{});var q=s(h);_=i(q,"Module"),q.forEach(o),C=i(g,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),g.forEach(o)},m(u,g){f(u,p,g),e(p,W),e(p,h),e(h,_),e(p,C)},d(u){u&&o(p)}}}function Cs(O){let p,W,h,_,C,u,g,q,go,zt,L,Z,pt,de,_o,ft,vo,At,ee,wo,me,bo,Eo,Dt,Re,yo,Vt,Je,ht,So,Nt,Be,Wo,Kt,te,ut,Co,ko,pe,To,Qe,$o,xo,Ot,oe,qo,fe,jo,Po,Lt,I,ae,gt,he,Fo,_t,Mo,It,T,ue,zo,H,Ao,Ye,Do,Vo,ge,No,Ko,Oo,U,Lo,Ge,Io,Ho,Xe,Uo,Ro,Jo,vt,Bo,Qo,_e,Ht,R,ne,wt,ve,Yo,bt,Go,Ut,$,we,Xo,be,Zo,Ee,ea,ta,oa,ye,aa,Ze,na,sa,ra,Se,ia,We,la,ca,da,j,Ce,ma,J,pa,et,fa,ha,Et,ua,ga,_a,se,va,yt,wa,ba,ke,Rt,B,re,St,Te,Ea,Wt,ya,Jt,x,$e,Sa,Q,Wa,Ct,Ca,ka,xe,Ta,$a,xa,qe,qa,tt,ja,Pa,Fa,je,Ma,Pe,za,Aa,Da,P,Fe,Va,Y,Na,ot,Ka,Oa,kt,La,Ia,Ha,ie,Ua,Tt,Ra,Ja,Me,Bt,G,le,$t,ze,Ba,xt,Qa,Qt,k,Ae,Ya,qt,Ga,Xa,De,Za,Ve,en,tn,on,Ne,an,at,nn,sn,rn,Ke,ln,Oe,cn,dn,mn,F,Le,pn,X,fn,nt,hn,un,jt,gn,_n,vn,ce,wn,Pt,bn,En,Ie,Yt;return u=new mt({}),de=new mt({}),he=new mt({}),ue=new Ue({props:{name:"class transformers.SEWConfig",anchor:"transformers.SEWConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"squeeze_factor",val:" = 2"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)"},{name:"conv_kernel",val:" = (10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/configuration_sew.py#L29",parametersDescription:[{anchor:"transformers.SEWConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the SEW model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <code>SEW</code>.`,name:"vocab_size"},{anchor:"transformers.SEWConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.SEWConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.SEWConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.SEWConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.SEWConfig.squeeze_factor",description:`<strong>squeeze_factor</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Sequence length downsampling factor after the encoder and upsampling factor after the transformer.`,name:"squeeze_factor"},{anchor:"transformers.SEWConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SEWConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.SEWConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.SEWConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/master/en/model_doc/sew#transformers.SEWForCTC">SEWForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.SEWConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SEWConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.SEWConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature extractor. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.SEWConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature extractor.`,name:"feat_proj_dropout"},{anchor:"transformers.SEWConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.SEWConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature extractor. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.SEWConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature extractor. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.SEWConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature extractor. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.SEWConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.SEWConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.SEWConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.SEWConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature extractor. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.SEWConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask<em>time_prob*len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, _mask_time_prob</em> should be <code>prob_vector_start*mask_time_length</code>. Note that overlap may decrease
the actual percentage of masked vectors. This is only relevant if <code>apply_spec_augment is True</code>.`,name:"mask_time_prob"},{anchor:"transformers.SEWConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.SEWConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt; mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.SEWConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask<em>feature_prob*len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, _mask_feature_prob</em> should be <code>prob_vector_start*mask_feature_length</code>. Note that
overlap may decrease the actual percentage of masked vectors. This is only relevant if <code>apply_spec_augment is True</code>.`,name:"mask_feature_prob"},{anchor:"transformers.SEWConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.SEWConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.SEWConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/master/en/model_doc/sew#transformers.SEWForCTC">SEWForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.SEWConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses
mainly occur when the inputs are too short to be aligned to the targets. Only relevant when training an
instance of <a href="/docs/transformers/master/en/model_doc/sew#transformers.SEWForCTC">SEWForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.SEWConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification">Wav2Vec2ForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.SEWConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}]}}),_e=new uo({props:{code:`from transformers import SEWModel, SEWConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ve=new mt({}),we=new Ue({props:{name:"class transformers.SEWModel",anchor:"transformers.SEWModel",parameters:[{name:"config",val:": SEWConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/modeling_sew.py#L797",parametersDescription:[{anchor:"transformers.SEWModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/sew#transformers.SEWConfig">SEWConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ce=new Ue({props:{name:"forward",anchor:"transformers.SEWModel.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/modeling_sew.py#L863",parametersDescription:[{anchor:"transformers.SEWModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">transformers.Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
>BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/sew#transformers.SEWConfig"
>SEWConfig</a>) and inputs.</p>
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
`}}),se=new yn({props:{$$slots:{default:[ys]},$$scope:{ctx:O}}}),ke=new uo({props:{code:`from transformers import Wav2Vec2Processor, SEWModel
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained('asapp/sew-tiny-100k')
model = SEWModel.from_pretrained('asapp/sew-tiny-100k')

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&#x27;asapp/sew-tiny-100k&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWModel.from_pretrained(<span class="hljs-string">&#x27;asapp/sew-tiny-100k&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Te=new mt({}),$e=new Ue({props:{name:"class transformers.SEWForCTC",anchor:"transformers.SEWForCTC",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/modeling_sew.py#L925",parametersDescription:[{anchor:"transformers.SEWForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/sew#transformers.SEWConfig">SEWConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Fe=new Ue({props:{name:"forward",anchor:"transformers.SEWForCTC.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/modeling_sew.py#L951",parametersDescription:[{anchor:"transformers.SEWForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">transformers.Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
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
`}}),ie=new yn({props:{$$slots:{default:[Ss]},$$scope:{ctx:O}}}),Me=new uo({props:{code:`from transformers import Wav2Vec2Processor, SEWForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained('asapp/sew-tiny-100k')
model = SEWForCTC.from_pretrained('asapp/sew-tiny-100k')

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)

# compute loss
with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

loss = model(**inputs).loss,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&#x27;asapp/sew-tiny-100k&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWForCTC.from_pretrained(<span class="hljs-string">&#x27;asapp/sew-tiny-100k&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss`}}),ze=new mt({}),Ae=new Ue({props:{name:"class transformers.SEWForSequenceClassification",anchor:"transformers.SEWForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/modeling_sew.py#L1039",parametersDescription:[{anchor:"transformers.SEWForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/sew#transformers.SEWConfig">SEWConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Le=new Ue({props:{name:"forward",anchor:"transformers.SEWForSequenceClassification.forward",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/sew/modeling_sew.py#L1068",parametersDescription:[{anchor:"transformers.SEWForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should
be used for padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See
<a href="/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">transformers.Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
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
`}}),ce=new yn({props:{$$slots:{default:[Ws]},$$scope:{ctx:O}}}),Ie=new uo({props:{code:`from transformers import Wav2Vec2FeatureExtractor, SEWForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained('asapp/sew-tiny-100k')
model = SEWForSequenceClassification.from_pretrained('asapp/sew-tiny-100k')

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], return_tensors="pt")
logits = model(**inputs).logits
predicted_class_ids = torch.argmax(logits, dim=-1)
predicted_label = model.config.id2label[predicted_class_ids]

# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, SEWForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&#x27;asapp/sew-tiny-100k&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;asapp/sew-tiny-100k&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss`}}),{c(){p=a("meta"),W=c(),h=a("h1"),_=a("a"),C=a("span"),v(u.$$.fragment),g=c(),q=a("span"),go=r("SEW"),zt=c(),L=a("h2"),Z=a("a"),pt=a("span"),v(de.$$.fragment),_o=c(),ft=a("span"),vo=r("Overview"),At=c(),ee=a("p"),wo=r("SEW (Squeezed and Efficient Wav2Vec) was proposed in "),me=a("a"),bo=r(`Performance-Efficiency Trade-offs in Unsupervised Pre-training
for Speech Recognition`),Eo=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q.
Weinberger, Yoav Artzi.`),Dt=c(),Re=a("p"),yo=r("The abstract from the paper is the following:"),Vt=c(),Je=a("p"),ht=a("em"),So=r(`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),Nt=c(),Be=a("p"),Wo=r("Tips:"),Kt=c(),te=a("ul"),ut=a("li"),Co=r("SEW is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),ko=c(),pe=a("li"),To=r(`SEWForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded using
`),Qe=a("a"),$o=r("Wav2Vec2CTCTokenizer"),xo=r("."),Ot=c(),oe=a("p"),qo=r("This model was contributed by "),fe=a("a"),jo=r("anton-l"),Po=r("."),Lt=c(),I=a("h2"),ae=a("a"),gt=a("span"),v(he.$$.fragment),Fo=c(),_t=a("span"),Mo=r("SEWConfig"),It=c(),T=a("div"),v(ue.$$.fragment),zo=c(),H=a("p"),Ao=r("This is the configuration class to store the configuration of a "),Ye=a("a"),Do=r("SEWModel"),Vo=r(`. It is used to
instantiate a SEW model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the SEW `),ge=a("a"),No=r("asapp/sew-tiny-100k"),Ko=r(" architecture."),Oo=c(),U=a("p"),Lo=r("Configuration objects inherit from "),Ge=a("a"),Io=r("PretrainedConfig"),Ho=r(` and can be used to control the model
outputs. Read the documentation from `),Xe=a("a"),Uo=r("PretrainedConfig"),Ro=r(" for more information."),Jo=c(),vt=a("p"),Bo=r("Example:"),Qo=c(),v(_e.$$.fragment),Ht=c(),R=a("h2"),ne=a("a"),wt=a("span"),v(ve.$$.fragment),Yo=c(),bt=a("span"),Go=r("SEWModel"),Ut=c(),$=a("div"),v(we.$$.fragment),Xo=c(),be=a("p"),Zo=r(`The bare SEW Model transformer outputting raw hidden-states without any specific head on top.
SEW was proposed in `),Ee=a("a"),ea=r("Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition"),ta=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav
Artzi.`),oa=c(),ye=a("p"),aa=r("This model inherits from "),Ze=a("a"),na=r("PreTrainedModel"),sa=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),ra=c(),Se=a("p"),ia=r("This model is a PyTorch "),We=a("a"),la=r("torch.nn.Module"),ca=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),da=c(),j=a("div"),v(Ce.$$.fragment),ma=c(),J=a("p"),pa=r("The "),et=a("a"),fa=r("SEWModel"),ha=r(" forward method, overrides the "),Et=a("code"),ua=r("__call__"),ga=r(" special method."),_a=c(),v(se.$$.fragment),va=c(),yt=a("p"),wa=r("Example:"),ba=c(),v(ke.$$.fragment),Rt=c(),B=a("h2"),re=a("a"),St=a("span"),v(Te.$$.fragment),Ea=c(),Wt=a("span"),ya=r("SEWForCTC"),Jt=c(),x=a("div"),v($e.$$.fragment),Sa=c(),Q=a("p"),Wa=r("SEW Model with a "),Ct=a("em"),Ca=r("language modeling"),ka=r(` head on top for Connectionist Temporal Classification (CTC).
SEW was proposed in `),xe=a("a"),Ta=r("Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition"),$a=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav
Artzi.`),xa=c(),qe=a("p"),qa=r("This model inherits from "),tt=a("a"),ja=r("PreTrainedModel"),Pa=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),Fa=c(),je=a("p"),Ma=r("This model is a PyTorch "),Pe=a("a"),za=r("torch.nn.Module"),Aa=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Da=c(),P=a("div"),v(Fe.$$.fragment),Va=c(),Y=a("p"),Na=r("The "),ot=a("a"),Ka=r("SEWForCTC"),Oa=r(" forward method, overrides the "),kt=a("code"),La=r("__call__"),Ia=r(" special method."),Ha=c(),v(ie.$$.fragment),Ua=c(),Tt=a("p"),Ra=r("Example:"),Ja=c(),v(Me.$$.fragment),Bt=c(),G=a("h2"),le=a("a"),$t=a("span"),v(ze.$$.fragment),Ba=c(),xt=a("span"),Qa=r("SEWForSequenceClassification"),Qt=c(),k=a("div"),v(Ae.$$.fragment),Ya=c(),qt=a("p"),Ga=r(`SEW Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),Xa=c(),De=a("p"),Za=r("SEW was proposed in "),Ve=a("a"),en=r("Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition"),tn=r(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav
Artzi.`),on=c(),Ne=a("p"),an=r("This model inherits from "),at=a("a"),nn=r("PreTrainedModel"),sn=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),rn=c(),Ke=a("p"),ln=r("This model is a PyTorch "),Oe=a("a"),cn=r("torch.nn.Module"),dn=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mn=c(),F=a("div"),v(Le.$$.fragment),pn=c(),X=a("p"),fn=r("The "),nt=a("a"),hn=r("SEWForSequenceClassification"),un=r(" forward method, overrides the "),jt=a("code"),gn=r("__call__"),_n=r(" special method."),vn=c(),v(ce.$$.fragment),wn=c(),Pt=a("p"),bn=r("Example:"),En=c(),v(Ie.$$.fragment),this.h()},l(t){const m=Es('[data-svelte="svelte-1phssyn"]',document.head);p=n(m,"META",{name:!0,content:!0}),m.forEach(o),W=d(t),h=n(t,"H1",{class:!0});var He=s(h);_=n(He,"A",{id:!0,class:!0,href:!0});var Ft=s(_);C=n(Ft,"SPAN",{});var Mt=s(C);w(u.$$.fragment,Mt),Mt.forEach(o),Ft.forEach(o),g=d(He),q=n(He,"SPAN",{});var Sn=s(q);go=i(Sn,"SEW"),Sn.forEach(o),He.forEach(o),zt=d(t),L=n(t,"H2",{class:!0});var Gt=s(L);Z=n(Gt,"A",{id:!0,class:!0,href:!0});var Wn=s(Z);pt=n(Wn,"SPAN",{});var Cn=s(pt);w(de.$$.fragment,Cn),Cn.forEach(o),Wn.forEach(o),_o=d(Gt),ft=n(Gt,"SPAN",{});var kn=s(ft);vo=i(kn,"Overview"),kn.forEach(o),Gt.forEach(o),At=d(t),ee=n(t,"P",{});var Xt=s(ee);wo=i(Xt,"SEW (Squeezed and Efficient Wav2Vec) was proposed in "),me=n(Xt,"A",{href:!0,rel:!0});var Tn=s(me);bo=i(Tn,`Performance-Efficiency Trade-offs in Unsupervised Pre-training
for Speech Recognition`),Tn.forEach(o),Eo=i(Xt,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q.
Weinberger, Yoav Artzi.`),Xt.forEach(o),Dt=d(t),Re=n(t,"P",{});var $n=s(Re);yo=i($n,"The abstract from the paper is the following:"),$n.forEach(o),Vt=d(t),Je=n(t,"P",{});var xn=s(Je);ht=n(xn,"EM",{});var qn=s(ht);So=i(qn,`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),qn.forEach(o),xn.forEach(o),Nt=d(t),Be=n(t,"P",{});var jn=s(Be);Wo=i(jn,"Tips:"),jn.forEach(o),Kt=d(t),te=n(t,"UL",{});var Zt=s(te);ut=n(Zt,"LI",{});var Pn=s(ut);Co=i(Pn,"SEW is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Pn.forEach(o),ko=d(Zt),pe=n(Zt,"LI",{});var eo=s(pe);To=i(eo,`SEWForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded using
`),Qe=n(eo,"A",{href:!0});var Fn=s(Qe);$o=i(Fn,"Wav2Vec2CTCTokenizer"),Fn.forEach(o),xo=i(eo,"."),eo.forEach(o),Zt.forEach(o),Ot=d(t),oe=n(t,"P",{});var to=s(oe);qo=i(to,"This model was contributed by "),fe=n(to,"A",{href:!0,rel:!0});var Mn=s(fe);jo=i(Mn,"anton-l"),Mn.forEach(o),Po=i(to,"."),to.forEach(o),Lt=d(t),I=n(t,"H2",{class:!0});var oo=s(I);ae=n(oo,"A",{id:!0,class:!0,href:!0});var zn=s(ae);gt=n(zn,"SPAN",{});var An=s(gt);w(he.$$.fragment,An),An.forEach(o),zn.forEach(o),Fo=d(oo),_t=n(oo,"SPAN",{});var Dn=s(_t);Mo=i(Dn,"SEWConfig"),Dn.forEach(o),oo.forEach(o),It=d(t),T=n(t,"DIV",{class:!0});var z=s(T);w(ue.$$.fragment,z),zo=d(z),H=n(z,"P",{});var st=s(H);Ao=i(st,"This is the configuration class to store the configuration of a "),Ye=n(st,"A",{href:!0});var Vn=s(Ye);Do=i(Vn,"SEWModel"),Vn.forEach(o),Vo=i(st,`. It is used to
instantiate a SEW model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the SEW `),ge=n(st,"A",{href:!0,rel:!0});var Nn=s(ge);No=i(Nn,"asapp/sew-tiny-100k"),Nn.forEach(o),Ko=i(st," architecture."),st.forEach(o),Oo=d(z),U=n(z,"P",{});var rt=s(U);Lo=i(rt,"Configuration objects inherit from "),Ge=n(rt,"A",{href:!0});var Kn=s(Ge);Io=i(Kn,"PretrainedConfig"),Kn.forEach(o),Ho=i(rt,` and can be used to control the model
outputs. Read the documentation from `),Xe=n(rt,"A",{href:!0});var On=s(Xe);Uo=i(On,"PretrainedConfig"),On.forEach(o),Ro=i(rt," for more information."),rt.forEach(o),Jo=d(z),vt=n(z,"P",{});var Ln=s(vt);Bo=i(Ln,"Example:"),Ln.forEach(o),Qo=d(z),w(_e.$$.fragment,z),z.forEach(o),Ht=d(t),R=n(t,"H2",{class:!0});var ao=s(R);ne=n(ao,"A",{id:!0,class:!0,href:!0});var In=s(ne);wt=n(In,"SPAN",{});var Hn=s(wt);w(ve.$$.fragment,Hn),Hn.forEach(o),In.forEach(o),Yo=d(ao),bt=n(ao,"SPAN",{});var Un=s(bt);Go=i(Un,"SEWModel"),Un.forEach(o),ao.forEach(o),Ut=d(t),$=n(t,"DIV",{class:!0});var A=s($);w(we.$$.fragment,A),Xo=d(A),be=n(A,"P",{});var no=s(be);Zo=i(no,`The bare SEW Model transformer outputting raw hidden-states without any specific head on top.
SEW was proposed in `),Ee=n(no,"A",{href:!0,rel:!0});var Rn=s(Ee);ea=i(Rn,"Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition"),Rn.forEach(o),ta=i(no,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav
Artzi.`),no.forEach(o),oa=d(A),ye=n(A,"P",{});var so=s(ye);aa=i(so,"This model inherits from "),Ze=n(so,"A",{href:!0});var Jn=s(Ze);na=i(Jn,"PreTrainedModel"),Jn.forEach(o),sa=i(so,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),so.forEach(o),ra=d(A),Se=n(A,"P",{});var ro=s(Se);ia=i(ro,"This model is a PyTorch "),We=n(ro,"A",{href:!0,rel:!0});var Bn=s(We);la=i(Bn,"torch.nn.Module"),Bn.forEach(o),ca=i(ro,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ro.forEach(o),da=d(A),j=n(A,"DIV",{class:!0});var D=s(j);w(Ce.$$.fragment,D),ma=d(D),J=n(D,"P",{});var it=s(J);pa=i(it,"The "),et=n(it,"A",{href:!0});var Qn=s(et);fa=i(Qn,"SEWModel"),Qn.forEach(o),ha=i(it," forward method, overrides the "),Et=n(it,"CODE",{});var Yn=s(Et);ua=i(Yn,"__call__"),Yn.forEach(o),ga=i(it," special method."),it.forEach(o),_a=d(D),w(se.$$.fragment,D),va=d(D),yt=n(D,"P",{});var Gn=s(yt);wa=i(Gn,"Example:"),Gn.forEach(o),ba=d(D),w(ke.$$.fragment,D),D.forEach(o),A.forEach(o),Rt=d(t),B=n(t,"H2",{class:!0});var io=s(B);re=n(io,"A",{id:!0,class:!0,href:!0});var Xn=s(re);St=n(Xn,"SPAN",{});var Zn=s(St);w(Te.$$.fragment,Zn),Zn.forEach(o),Xn.forEach(o),Ea=d(io),Wt=n(io,"SPAN",{});var es=s(Wt);ya=i(es,"SEWForCTC"),es.forEach(o),io.forEach(o),Jt=d(t),x=n(t,"DIV",{class:!0});var V=s(x);w($e.$$.fragment,V),Sa=d(V),Q=n(V,"P",{});var lt=s(Q);Wa=i(lt,"SEW Model with a "),Ct=n(lt,"EM",{});var ts=s(Ct);Ca=i(ts,"language modeling"),ts.forEach(o),ka=i(lt,` head on top for Connectionist Temporal Classification (CTC).
SEW was proposed in `),xe=n(lt,"A",{href:!0,rel:!0});var os=s(xe);Ta=i(os,"Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition"),os.forEach(o),$a=i(lt,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav
Artzi.`),lt.forEach(o),xa=d(V),qe=n(V,"P",{});var lo=s(qe);qa=i(lo,"This model inherits from "),tt=n(lo,"A",{href:!0});var as=s(tt);ja=i(as,"PreTrainedModel"),as.forEach(o),Pa=i(lo,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),lo.forEach(o),Fa=d(V),je=n(V,"P",{});var co=s(je);Ma=i(co,"This model is a PyTorch "),Pe=n(co,"A",{href:!0,rel:!0});var ns=s(Pe);za=i(ns,"torch.nn.Module"),ns.forEach(o),Aa=i(co,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),co.forEach(o),Da=d(V),P=n(V,"DIV",{class:!0});var N=s(P);w(Fe.$$.fragment,N),Va=d(N),Y=n(N,"P",{});var ct=s(Y);Na=i(ct,"The "),ot=n(ct,"A",{href:!0});var ss=s(ot);Ka=i(ss,"SEWForCTC"),ss.forEach(o),Oa=i(ct," forward method, overrides the "),kt=n(ct,"CODE",{});var rs=s(kt);La=i(rs,"__call__"),rs.forEach(o),Ia=i(ct," special method."),ct.forEach(o),Ha=d(N),w(ie.$$.fragment,N),Ua=d(N),Tt=n(N,"P",{});var is=s(Tt);Ra=i(is,"Example:"),is.forEach(o),Ja=d(N),w(Me.$$.fragment,N),N.forEach(o),V.forEach(o),Bt=d(t),G=n(t,"H2",{class:!0});var mo=s(G);le=n(mo,"A",{id:!0,class:!0,href:!0});var ls=s(le);$t=n(ls,"SPAN",{});var cs=s($t);w(ze.$$.fragment,cs),cs.forEach(o),ls.forEach(o),Ba=d(mo),xt=n(mo,"SPAN",{});var ds=s(xt);Qa=i(ds,"SEWForSequenceClassification"),ds.forEach(o),mo.forEach(o),Qt=d(t),k=n(t,"DIV",{class:!0});var M=s(k);w(Ae.$$.fragment,M),Ya=d(M),qt=n(M,"P",{});var ms=s(qt);Ga=i(ms,`SEW Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),ms.forEach(o),Xa=d(M),De=n(M,"P",{});var po=s(De);Za=i(po,"SEW was proposed in "),Ve=n(po,"A",{href:!0,rel:!0});var ps=s(Ve);en=i(ps,"Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition"),ps.forEach(o),tn=i(po,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav
Artzi.`),po.forEach(o),on=d(M),Ne=n(M,"P",{});var fo=s(Ne);an=i(fo,"This model inherits from "),at=n(fo,"A",{href:!0});var fs=s(at);nn=i(fs,"PreTrainedModel"),fs.forEach(o),sn=i(fo,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving etc.).`),fo.forEach(o),rn=d(M),Ke=n(M,"P",{});var ho=s(Ke);ln=i(ho,"This model is a PyTorch "),Oe=n(ho,"A",{href:!0,rel:!0});var hs=s(Oe);cn=i(hs,"torch.nn.Module"),hs.forEach(o),dn=i(ho,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ho.forEach(o),mn=d(M),F=n(M,"DIV",{class:!0});var K=s(F);w(Le.$$.fragment,K),pn=d(K),X=n(K,"P",{});var dt=s(X);fn=i(dt,"The "),nt=n(dt,"A",{href:!0});var us=s(nt);hn=i(us,"SEWForSequenceClassification"),us.forEach(o),un=i(dt," forward method, overrides the "),jt=n(dt,"CODE",{});var gs=s(jt);gn=i(gs,"__call__"),gs.forEach(o),_n=i(dt," special method."),dt.forEach(o),vn=d(K),w(ce.$$.fragment,K),wn=d(K),Pt=n(K,"P",{});var _s=s(Pt);bn=i(_s,"Example:"),_s.forEach(o),En=d(K),w(Ie.$$.fragment,K),K.forEach(o),M.forEach(o),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(ks)),l(_,"id","sew"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#sew"),l(h,"class","relative group"),l(Z,"id","overview"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#overview"),l(L,"class","relative group"),l(me,"href","https://arxiv.org/abs/2109.06870"),l(me,"rel","nofollow"),l(Qe,"href","/docs/transformers/master/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),l(fe,"href","https://huggingface.co/anton-l"),l(fe,"rel","nofollow"),l(ae,"id","transformers.SEWConfig"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.SEWConfig"),l(I,"class","relative group"),l(Ye,"href","/docs/transformers/master/en/model_doc/sew#transformers.SEWModel"),l(ge,"href","https://huggingface.co/asapp/sew-tiny-100k"),l(ge,"rel","nofollow"),l(Ge,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(Xe,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(T,"class","docstring"),l(ne,"id","transformers.SEWModel"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.SEWModel"),l(R,"class","relative group"),l(Ee,"href","https://arxiv.org/abs/2109.06870"),l(Ee,"rel","nofollow"),l(Ze,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),l(We,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(We,"rel","nofollow"),l(et,"href","/docs/transformers/master/en/model_doc/sew#transformers.SEWModel"),l(j,"class","docstring"),l($,"class","docstring"),l(re,"id","transformers.SEWForCTC"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.SEWForCTC"),l(B,"class","relative group"),l(xe,"href","https://arxiv.org/abs/2109.06870"),l(xe,"rel","nofollow"),l(tt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),l(Pe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Pe,"rel","nofollow"),l(ot,"href","/docs/transformers/master/en/model_doc/sew#transformers.SEWForCTC"),l(P,"class","docstring"),l(x,"class","docstring"),l(le,"id","transformers.SEWForSequenceClassification"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.SEWForSequenceClassification"),l(G,"class","relative group"),l(Ve,"href","https://arxiv.org/abs/2109.06870"),l(Ve,"rel","nofollow"),l(at,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),l(Oe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Oe,"rel","nofollow"),l(nt,"href","/docs/transformers/master/en/model_doc/sew#transformers.SEWForSequenceClassification"),l(F,"class","docstring"),l(k,"class","docstring")},m(t,m){e(document.head,p),f(t,W,m),f(t,h,m),e(h,_),e(_,C),b(u,C,null),e(h,g),e(h,q),e(q,go),f(t,zt,m),f(t,L,m),e(L,Z),e(Z,pt),b(de,pt,null),e(L,_o),e(L,ft),e(ft,vo),f(t,At,m),f(t,ee,m),e(ee,wo),e(ee,me),e(me,bo),e(ee,Eo),f(t,Dt,m),f(t,Re,m),e(Re,yo),f(t,Vt,m),f(t,Je,m),e(Je,ht),e(ht,So),f(t,Nt,m),f(t,Be,m),e(Be,Wo),f(t,Kt,m),f(t,te,m),e(te,ut),e(ut,Co),e(te,ko),e(te,pe),e(pe,To),e(pe,Qe),e(Qe,$o),e(pe,xo),f(t,Ot,m),f(t,oe,m),e(oe,qo),e(oe,fe),e(fe,jo),e(oe,Po),f(t,Lt,m),f(t,I,m),e(I,ae),e(ae,gt),b(he,gt,null),e(I,Fo),e(I,_t),e(_t,Mo),f(t,It,m),f(t,T,m),b(ue,T,null),e(T,zo),e(T,H),e(H,Ao),e(H,Ye),e(Ye,Do),e(H,Vo),e(H,ge),e(ge,No),e(H,Ko),e(T,Oo),e(T,U),e(U,Lo),e(U,Ge),e(Ge,Io),e(U,Ho),e(U,Xe),e(Xe,Uo),e(U,Ro),e(T,Jo),e(T,vt),e(vt,Bo),e(T,Qo),b(_e,T,null),f(t,Ht,m),f(t,R,m),e(R,ne),e(ne,wt),b(ve,wt,null),e(R,Yo),e(R,bt),e(bt,Go),f(t,Ut,m),f(t,$,m),b(we,$,null),e($,Xo),e($,be),e(be,Zo),e(be,Ee),e(Ee,ea),e(be,ta),e($,oa),e($,ye),e(ye,aa),e(ye,Ze),e(Ze,na),e(ye,sa),e($,ra),e($,Se),e(Se,ia),e(Se,We),e(We,la),e(Se,ca),e($,da),e($,j),b(Ce,j,null),e(j,ma),e(j,J),e(J,pa),e(J,et),e(et,fa),e(J,ha),e(J,Et),e(Et,ua),e(J,ga),e(j,_a),b(se,j,null),e(j,va),e(j,yt),e(yt,wa),e(j,ba),b(ke,j,null),f(t,Rt,m),f(t,B,m),e(B,re),e(re,St),b(Te,St,null),e(B,Ea),e(B,Wt),e(Wt,ya),f(t,Jt,m),f(t,x,m),b($e,x,null),e(x,Sa),e(x,Q),e(Q,Wa),e(Q,Ct),e(Ct,Ca),e(Q,ka),e(Q,xe),e(xe,Ta),e(Q,$a),e(x,xa),e(x,qe),e(qe,qa),e(qe,tt),e(tt,ja),e(qe,Pa),e(x,Fa),e(x,je),e(je,Ma),e(je,Pe),e(Pe,za),e(je,Aa),e(x,Da),e(x,P),b(Fe,P,null),e(P,Va),e(P,Y),e(Y,Na),e(Y,ot),e(ot,Ka),e(Y,Oa),e(Y,kt),e(kt,La),e(Y,Ia),e(P,Ha),b(ie,P,null),e(P,Ua),e(P,Tt),e(Tt,Ra),e(P,Ja),b(Me,P,null),f(t,Bt,m),f(t,G,m),e(G,le),e(le,$t),b(ze,$t,null),e(G,Ba),e(G,xt),e(xt,Qa),f(t,Qt,m),f(t,k,m),b(Ae,k,null),e(k,Ya),e(k,qt),e(qt,Ga),e(k,Xa),e(k,De),e(De,Za),e(De,Ve),e(Ve,en),e(De,tn),e(k,on),e(k,Ne),e(Ne,an),e(Ne,at),e(at,nn),e(Ne,sn),e(k,rn),e(k,Ke),e(Ke,ln),e(Ke,Oe),e(Oe,cn),e(Ke,dn),e(k,mn),e(k,F),b(Le,F,null),e(F,pn),e(F,X),e(X,fn),e(X,nt),e(nt,hn),e(X,un),e(X,jt),e(jt,gn),e(X,_n),e(F,vn),b(ce,F,null),e(F,wn),e(F,Pt),e(Pt,bn),e(F,En),b(Ie,F,null),Yt=!0},p(t,[m]){const He={};m&2&&(He.$$scope={dirty:m,ctx:t}),se.$set(He);const Ft={};m&2&&(Ft.$$scope={dirty:m,ctx:t}),ie.$set(Ft);const Mt={};m&2&&(Mt.$$scope={dirty:m,ctx:t}),ce.$set(Mt)},i(t){Yt||(E(u.$$.fragment,t),E(de.$$.fragment,t),E(he.$$.fragment,t),E(ue.$$.fragment,t),E(_e.$$.fragment,t),E(ve.$$.fragment,t),E(we.$$.fragment,t),E(Ce.$$.fragment,t),E(se.$$.fragment,t),E(ke.$$.fragment,t),E(Te.$$.fragment,t),E($e.$$.fragment,t),E(Fe.$$.fragment,t),E(ie.$$.fragment,t),E(Me.$$.fragment,t),E(ze.$$.fragment,t),E(Ae.$$.fragment,t),E(Le.$$.fragment,t),E(ce.$$.fragment,t),E(Ie.$$.fragment,t),Yt=!0)},o(t){y(u.$$.fragment,t),y(de.$$.fragment,t),y(he.$$.fragment,t),y(ue.$$.fragment,t),y(_e.$$.fragment,t),y(ve.$$.fragment,t),y(we.$$.fragment,t),y(Ce.$$.fragment,t),y(se.$$.fragment,t),y(ke.$$.fragment,t),y(Te.$$.fragment,t),y($e.$$.fragment,t),y(Fe.$$.fragment,t),y(ie.$$.fragment,t),y(Me.$$.fragment,t),y(ze.$$.fragment,t),y(Ae.$$.fragment,t),y(Le.$$.fragment,t),y(ce.$$.fragment,t),y(Ie.$$.fragment,t),Yt=!1},d(t){o(p),t&&o(W),t&&o(h),S(u),t&&o(zt),t&&o(L),S(de),t&&o(At),t&&o(ee),t&&o(Dt),t&&o(Re),t&&o(Vt),t&&o(Je),t&&o(Nt),t&&o(Be),t&&o(Kt),t&&o(te),t&&o(Ot),t&&o(oe),t&&o(Lt),t&&o(I),S(he),t&&o(It),t&&o(T),S(ue),S(_e),t&&o(Ht),t&&o(R),S(ve),t&&o(Ut),t&&o($),S(we),S(Ce),S(se),S(ke),t&&o(Rt),t&&o(B),S(Te),t&&o(Jt),t&&o(x),S($e),S(Fe),S(ie),S(Me),t&&o(Bt),t&&o(G),S(ze),t&&o(Qt),t&&o(k),S(Ae),S(Le),S(ce),S(Ie)}}}const ks={local:"sew",sections:[{local:"overview",title:"Overview"},{local:"transformers.SEWConfig",title:"SEWConfig"},{local:"transformers.SEWModel",title:"SEWModel"},{local:"transformers.SEWForCTC",title:"SEWForCTC"},{local:"transformers.SEWForSequenceClassification",title:"SEWForSequenceClassification"}],title:"SEW"};function Ts(O,p,W){let{fw:h}=p;return O.$$set=_=>{"fw"in _&&W(0,h=_.fw)},[h]}class Ms extends vs{constructor(p){super();ws(this,p,Ts,Cs,bs,{fw:0})}}export{Ms as default,ks as metadata};
