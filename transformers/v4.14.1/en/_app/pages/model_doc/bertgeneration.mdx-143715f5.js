import{S as la,i as ca,s as ha,e as s,k as l,w as v,t as o,L as pa,c as a,d as n,m as c,a as i,x as b,h as r,b as d,J as e,g as p,y as k,q as y,o as T,B as w}from"../../chunks/vendor-b1433968.js";import{T as da}from"../../chunks/Tip-c3840994.js";import{D as gt}from"../../chunks/Docstring-ff504c58.js";import{C as Vt}from"../../chunks/CodeBlock-a320dbd7.js";import{I as _t}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function ua(ie){let u,q,f,g,D;return{c(){u=s("p"),q=o(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s("code"),g=o("Module"),D=o(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){u=a(_,"P",{});var E=i(u);q=r(E,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(E,"CODE",{});var S=i(f);g=r(S,"Module"),S.forEach(n),D=r(E,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),E.forEach(n)},m(_,E){p(_,u,E),e(u,q),e(u,f),e(f,g),e(u,D)},d(_){_&&n(u)}}}function fa(ie){let u,q,f,g,D;return{c(){u=s("p"),q=o(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=s("code"),g=o("Module"),D=o(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(_){u=a(_,"P",{});var E=i(u);q=r(E,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(E,"CODE",{});var S=i(f);g=r(S,"Module"),S.forEach(n),D=r(E,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),E.forEach(n)},m(_,E){p(_,u,E),e(u,q),e(u,f),e(f,g),e(u,D)},d(_){_&&n(u)}}}function ma(ie){let u,q,f,g,D,_,E,S,Dn,Jt,R,Y,vt,de,jn,bt,Sn,Kt,A,An,Ue,Mn,Nn,le,Ln,Fn,Qt,He,In,Xt,Ve,kt,On,Yt,Je,Rn,Zt,Ke,ce,Wn,Qe,Un,Hn,en,he,tn,Xe,pe,Vn,Ye,Jn,Kn,nn,ue,on,Ze,Qn,rn,Z,M,et,Xn,Yn,tt,Zn,eo,yt,to,no,oo,Tt,ro,sn,N,so,fe,ao,io,me,lo,co,an,W,ee,wt,ge,ho,Et,po,dn,$,_e,uo,ve,fo,Bt,mo,go,_o,U,vo,nt,bo,ko,ot,yo,To,wo,zt,Eo,Bo,be,ln,H,te,$t,ke,zo,Gt,$o,cn,j,ye,Go,Te,qo,we,xo,Po,Co,Ee,Do,rt,jo,So,Ao,qt,hn,V,ne,xt,Be,Mo,Pt,No,pn,m,ze,Lo,Ct,Fo,Io,$e,Oo,st,Ro,Wo,Uo,Ge,Ho,qe,Vo,Jo,Ko,xe,Qo,Pe,Xo,Yo,Zo,J,er,at,tr,nr,Ce,or,rr,sr,B,ar,Dt,ir,dr,jt,lr,cr,St,hr,pr,At,ur,fr,Mt,mr,gr,Nt,_r,vr,br,x,De,kr,K,yr,it,Tr,wr,Lt,Er,Br,zr,oe,$r,Ft,Gr,qr,je,un,Q,re,It,Se,xr,Ot,Pr,fn,G,Ae,Cr,Me,Dr,Rt,jr,Sr,Ar,Ne,Mr,dt,Nr,Lr,Fr,Le,Ir,Fe,Or,Rr,Wr,P,Ie,Ur,X,Hr,lt,Vr,Jr,Wt,Kr,Qr,Xr,se,Yr,Ut,Zr,es,Oe,mn;return _=new _t({}),de=new _t({}),he=new Vt({props:{code:`# leverage checkpoints for Bert2Bert model...
# use BERT's cls token as BOS token and sep token as EOS token
encoder = BertGenerationEncoder.from_pretrained("bert-large-uncased", bos_token_id=101, eos_token_id=102)
# add cross attention layers and use BERT's cls token as BOS token and sep token as EOS token
decoder = BertGenerationDecoder.from_pretrained("bert-large-uncased", add_cross_attention=True, is_decoder=True, bos_token_id=101, eos_token_id=102)
bert2bert = EncoderDecoderModel(encoder=encoder, decoder=decoder)

# create tokenizer...
tokenizer = BertTokenizer.from_pretrained("bert-large-uncased")

input_ids = tokenizer('This is a long article to summarize', add_special_tokens=False, return_tensors="pt").input_ids
labels = tokenizer('This is a short summary', return_tensors="pt").input_ids

# train...
loss = bert2bert(input_ids=input_ids, decoder_input_ids=labels, labels=labels).loss
loss.backward(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># leverage checkpoints for Bert2Bert model...</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># use BERT&#x27;s cls token as BOS token and sep token as EOS token</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">encoder = BertGenerationEncoder.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased&quot;</span>, bos_token_id=<span class="hljs-number">101</span>, eos_token_id=<span class="hljs-number">102</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># add cross attention layers and use BERT&#x27;s cls token as BOS token and sep token as EOS token</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">decoder = BertGenerationDecoder.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased&quot;</span>, add_cross_attention=<span class="hljs-literal">True</span>, is_decoder=<span class="hljs-literal">True</span>, bos_token_id=<span class="hljs-number">101</span>, eos_token_id=<span class="hljs-number">102</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">bert2bert = EncoderDecoderModel(encoder=encoder, decoder=decoder)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># create tokenizer...</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased&quot;</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">input_ids = tokenizer(<span class="hljs-string">&#x27;This is a long article to summarize&#x27;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">labels = tokenizer(<span class="hljs-string">&#x27;This is a short summary&#x27;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># train...</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">loss = bert2bert(input_ids=input_ids, decoder_input_ids=labels, labels=labels).loss</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">loss.backward()</span>`}}),ue=new Vt({props:{code:`# instantiate sentence fusion model
sentence_fuser = EncoderDecoderModel.from_pretrained("google/roberta2roberta_L-24_discofuse")
tokenizer = AutoTokenizer.from_pretrained("google/roberta2roberta_L-24_discofuse")

input_ids = tokenizer('This is the first sentence. This is the second sentence.', add_special_tokens=False, return_tensors="pt").input_ids

outputs = sentence_fuser.generate(input_ids)

print(tokenizer.decode(outputs[0])),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># instantiate sentence fusion model</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">sentence_fuser = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;google/roberta2roberta_L-24_discofuse&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/roberta2roberta_L-24_discofuse&quot;</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">input_ids = tokenizer(<span class="hljs-string">&#x27;This is the first sentence. This is the second sentence.&#x27;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">outputs = sentence_fuser.generate(input_ids)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))</span>`}}),ge=new _t({}),_e=new gt({props:{name:"class transformers.BertGenerationConfig",anchor:"transformers.BertGenerationConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"intermediate_size",val:" = 4096"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/bert_generation/configuration_bert_generation.py#L20",parametersDescription:[{anchor:"transformers.BertGenerationConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <code>BertGeneration</code>.`,name:"vocab_size"},{anchor:"transformers.BertGenerationConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BertGenerationConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BertGenerationConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BertGenerationConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often called feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BertGenerationConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BertGenerationConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BertGenerationConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BertGenerationConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BertGenerationConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertGenerationConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertGenerationConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>,
<code>&quot;relative_key_query&quot;</code>. For positional embeddings use <code>&quot;absolute&quot;</code>. For more information on
<code>&quot;relative_key&quot;</code>, please refer to <a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>. For more information on <code>&quot;relative_key_query&quot;</code>, please refer to
<em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertGenerationConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}]}}),be=new Vt({props:{code:`from transformers import BertGenerationConfig, BertGenerationEncoder

# Initializing a BertGeneration config
configuration = BertGenerationConfig()

# Initializing a model from the config
model = BertGenerationEncoder(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertGenerationConfig, BertGenerationEncoder

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BertGeneration config</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BertGenerationConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the config</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationEncoder(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ke=new _t({}),ye=new gt({props:{name:"class transformers.BertGenerationTokenizer",anchor:"transformers.BertGenerationTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '<::::>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/bert_generation/tokenization_bert_generation.py#L41",parametersDescription:[{anchor:"transformers.BertGenerationTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BertGenerationTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BertGenerationTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The begin of sequence token.`,name:"bos_token"},{anchor:"transformers.BertGenerationTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertGenerationTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertGenerationTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for SentencePiece</a> can be used, among other things, to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}]}}),Be=new _t({}),ze=new gt({props:{name:"class transformers.BertGenerationEncoder",anchor:"transformers.BertGenerationEncoder",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/bert_generation/modeling_bert_generation.py#L260",parametersDescription:[{anchor:"transformers.BertGenerationEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/bertgeneration#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),De=new gt({props:{name:"forward",anchor:"transformers.BertGenerationEncoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/bert_generation/modeling_bert_generation.py#L302",parametersDescription:[{anchor:"transformers.BertGenerationEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/bertgeneration#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertGenerationEncoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertGenerationEncoder.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertGenerationEncoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertGenerationEncoder.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertGenerationEncoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertGenerationEncoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertGenerationEncoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationEncoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertGenerationEncoder.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.`,name:"encoder_attention_mask"},{anchor:"transformers.BertGenerationEncoder.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertGenerationEncoder.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/bertgeneration#transformers.BertGenerationConfig"
>BertGenerationConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oe=new da({props:{$$slots:{default:[ua]},$$scope:{ctx:ie}}}),je=new Vt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationEncoder
import torch

tokenizer = BertGenerationTokenizer.from_pretrained('google/bert_for_seq_generation_L-24_bbc_encoder')
model = BertGenerationEncoder.from_pretrained('google/bert_for_seq_generation_L-24_bbc_encoder')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertGenerationTokenizer, BertGenerationEncoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertGenerationTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/bert_for_seq_generation_L-24_bbc_encoder&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationEncoder.from_pretrained(<span class="hljs-string">&#x27;google/bert_for_seq_generation_L-24_bbc_encoder&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Se=new _t({}),Ae=new gt({props:{name:"class transformers.BertGenerationDecoder",anchor:"transformers.BertGenerationDecoder",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/bert_generation/modeling_bert_generation.py#L450",parametersDescription:[{anchor:"transformers.BertGenerationDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/bertgeneration#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ie=new gt({props:{name:"forward",anchor:"transformers.BertGenerationDecoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/bert_generation/modeling_bert_generation.py#L469",parametersDescription:[{anchor:"transformers.BertGenerationDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/bertgeneration#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertGenerationDecoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertGenerationDecoder.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertGenerationDecoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertGenerationDecoder.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertGenerationDecoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertGenerationDecoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertGenerationDecoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationDecoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertGenerationDecoder.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BertGenerationDecoder.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.BertGenerationDecoder.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertGenerationDecoder.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/bertgeneration#transformers.BertGenerationConfig"
>BertGenerationConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),se=new da({props:{$$slots:{default:[fa]},$$scope:{ctx:ie}}}),Oe=new Vt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationDecoder, BertGenerationConfig
import torch

tokenizer = BertGenerationTokenizer.from_pretrained('google/bert_for_seq_generation_L-24_bbc_encoder')
config = BertGenerationConfig.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")
config.is_decoder = True
model = BertGenerationDecoder.from_pretrained('google/bert_for_seq_generation_L-24_bbc_encoder', config=config)

inputs = tokenizer("Hello, my dog is cute", return_token_type_ids=False, return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertGenerationTokenizer, BertGenerationDecoder, BertGenerationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertGenerationTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/bert_for_seq_generation_L-24_bbc_encoder&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = BertGenerationConfig.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationDecoder.from_pretrained(<span class="hljs-string">&#x27;google/bert_for_seq_generation_L-24_bbc_encoder&#x27;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_token_type_ids=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){u=s("meta"),q=l(),f=s("h1"),g=s("a"),D=s("span"),v(_.$$.fragment),E=l(),S=s("span"),Dn=o("BertGeneration"),Jt=l(),R=s("h2"),Y=s("a"),vt=s("span"),v(de.$$.fragment),jn=l(),bt=s("span"),Sn=o("Overview"),Kt=l(),A=s("p"),An=o(`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Ue=s("a"),Mn=o("EncoderDecoderModel"),Nn=o(" as proposed in "),le=s("a"),Ln=o(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Fn=o(" by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),Qt=l(),He=s("p"),In=o("The abstract from the paper is the following:"),Xt=l(),Ve=s("p"),kt=s("em"),On=o(`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),Yt=l(),Je=s("p"),Rn=o("Usage:"),Zt=l(),Ke=s("ul"),ce=s("li"),Wn=o("The model can be used in combination with the "),Qe=s("a"),Un=o("EncoderDecoderModel"),Hn=o(` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),en=l(),v(he.$$.fragment),tn=l(),Xe=s("ul"),pe=s("li"),Vn=o("Pretrained "),Ye=s("a"),Jn=o("EncoderDecoderModel"),Kn=o(" are also directly available in the model hub, e.g.,"),nn=l(),v(ue.$$.fragment),on=l(),Ze=s("p"),Qn=o("Tips:"),rn=l(),Z=s("ul"),M=s("li"),et=s("a"),Xn=o("BertGenerationEncoder"),Yn=o(" and "),tt=s("a"),Zn=o("BertGenerationDecoder"),eo=o(` should be used in
combination with `),yt=s("code"),to=o("EncoderDecoder"),no=o("."),oo=l(),Tt=s("li"),ro=o(`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),sn=l(),N=s("p"),so=o("This model was contributed by "),fe=s("a"),ao=o("patrickvonplaten"),io=o(`. The original code can be
found `),me=s("a"),lo=o("here"),co=o("."),an=l(),W=s("h2"),ee=s("a"),wt=s("span"),v(ge.$$.fragment),ho=l(),Et=s("span"),po=o("BertGenerationConfig"),dn=l(),$=s("div"),v(_e.$$.fragment),uo=l(),ve=s("p"),fo=o(`This is the configuration class to store the configuration of a
`),Bt=s("code"),mo=o("BertGenerationPreTrainedModel"),go=o(`. It is used to instantiate a BertGeneration model according to
the specified arguments, defining the model architecture.`),_o=l(),U=s("p"),vo=o("Configuration objects inherit from "),nt=s("a"),bo=o("PretrainedConfig"),ko=o(` and can be used to control the model
outputs. Read the documentation from `),ot=s("a"),yo=o("PretrainedConfig"),To=o(" for more information."),wo=l(),zt=s("p"),Eo=o("Examples:"),Bo=l(),v(be.$$.fragment),ln=l(),H=s("h2"),te=s("a"),$t=s("span"),v(ke.$$.fragment),zo=l(),Gt=s("span"),$o=o("BertGenerationTokenizer"),cn=l(),j=s("div"),v(ye.$$.fragment),Go=l(),Te=s("p"),qo=o("Construct a BertGeneration tokenizer. Based on "),we=s("a"),xo=o("SentencePiece"),Po=o("."),Co=l(),Ee=s("p"),Do=o("This tokenizer inherits from "),rt=s("a"),jo=o("PreTrainedTokenizer"),So=o(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Ao=l(),qt=s("div"),hn=l(),V=s("h2"),ne=s("a"),xt=s("span"),v(Be.$$.fragment),Mo=l(),Pt=s("span"),No=o("BertGenerationEncoder"),pn=l(),m=s("div"),v(ze.$$.fragment),Lo=l(),Ct=s("p"),Fo=o("The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),Io=l(),$e=s("p"),Oo=o("This model inherits from "),st=s("a"),Ro=o("PreTrainedModel"),Wo=o(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Uo=l(),Ge=s("p"),Ho=o("This model is also a PyTorch "),qe=s("a"),Vo=o("torch.nn.Module"),Jo=o(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ko=l(),xe=s("p"),Qo=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Pe=s("a"),Xo=o(`Attention is
all you need`),Yo=o(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Zo=l(),J=s("p"),er=o(`This model should be used when leveraging Bert or Roberta checkpoints for the
`),at=s("a"),tr=o("EncoderDecoderModel"),nr=o(" class as described in "),Ce=s("a"),or=o(`Leveraging Pre-trained Checkpoints for Sequence
Generation Tasks`),rr=o(" by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn."),sr=l(),B=s("p"),ar=o("To behave as an decoder the model needs to be initialized with the "),Dt=s("code"),ir=o("is_decoder"),dr=o(` argument of the configuration
set to `),jt=s("code"),lr=o("True"),cr=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),St=s("code"),hr=o("is_decoder"),pr=o(`
argument and `),At=s("code"),ur=o("add_cross_attention"),fr=o(" set to "),Mt=s("code"),mr=o("True"),gr=o("; an "),Nt=s("code"),_r=o("encoder_hidden_states"),vr=o(` is then expected as an
input to the forward pass.`),br=l(),x=s("div"),v(De.$$.fragment),kr=l(),K=s("p"),yr=o("The "),it=s("a"),Tr=o("BertGenerationEncoder"),wr=o(" forward method, overrides the "),Lt=s("code"),Er=o("__call__"),Br=o(" special method."),zr=l(),v(oe.$$.fragment),$r=l(),Ft=s("p"),Gr=o("Example:"),qr=l(),v(je.$$.fragment),un=l(),Q=s("h2"),re=s("a"),It=s("span"),v(Se.$$.fragment),xr=l(),Ot=s("span"),Pr=o("BertGenerationDecoder"),fn=l(),G=s("div"),v(Ae.$$.fragment),Cr=l(),Me=s("p"),Dr=o("BertGeneration Model with a "),Rt=s("em"),jr=o("language modeling"),Sr=o(" head on top for CLM fine-tuning."),Ar=l(),Ne=s("p"),Mr=o("This model inherits from "),dt=s("a"),Nr=o("PreTrainedModel"),Lr=o(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Fr=l(),Le=s("p"),Ir=o("This model is also a PyTorch "),Fe=s("a"),Or=o("torch.nn.Module"),Rr=o(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Wr=l(),P=s("div"),v(Ie.$$.fragment),Ur=l(),X=s("p"),Hr=o("The "),lt=s("a"),Vr=o("BertGenerationDecoder"),Jr=o(" forward method, overrides the "),Wt=s("code"),Kr=o("__call__"),Qr=o(" special method."),Xr=l(),v(se.$$.fragment),Yr=l(),Ut=s("p"),Zr=o("Example:"),es=l(),v(Oe.$$.fragment),this.h()},l(t){const h=pa('[data-svelte="svelte-1phssyn"]',document.head);u=a(h,"META",{name:!0,content:!0}),h.forEach(n),q=c(t),f=a(t,"H1",{class:!0});var Re=i(f);g=a(Re,"A",{id:!0,class:!0,href:!0});var Ht=i(g);D=a(Ht,"SPAN",{});var ts=i(D);b(_.$$.fragment,ts),ts.forEach(n),Ht.forEach(n),E=c(Re),S=a(Re,"SPAN",{});var ns=i(S);Dn=r(ns,"BertGeneration"),ns.forEach(n),Re.forEach(n),Jt=c(t),R=a(t,"H2",{class:!0});var gn=i(R);Y=a(gn,"A",{id:!0,class:!0,href:!0});var os=i(Y);vt=a(os,"SPAN",{});var rs=i(vt);b(de.$$.fragment,rs),rs.forEach(n),os.forEach(n),jn=c(gn),bt=a(gn,"SPAN",{});var ss=i(bt);Sn=r(ss,"Overview"),ss.forEach(n),gn.forEach(n),Kt=c(t),A=a(t,"P",{});var ct=i(A);An=r(ct,`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Ue=a(ct,"A",{href:!0});var as=i(Ue);Mn=r(as,"EncoderDecoderModel"),as.forEach(n),Nn=r(ct," as proposed in "),le=a(ct,"A",{href:!0,rel:!0});var is=i(le);Ln=r(is,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),is.forEach(n),Fn=r(ct," by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),ct.forEach(n),Qt=c(t),He=a(t,"P",{});var ds=i(He);In=r(ds,"The abstract from the paper is the following:"),ds.forEach(n),Xt=c(t),Ve=a(t,"P",{});var ls=i(Ve);kt=a(ls,"EM",{});var cs=i(kt);On=r(cs,`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),cs.forEach(n),ls.forEach(n),Yt=c(t),Je=a(t,"P",{});var hs=i(Je);Rn=r(hs,"Usage:"),hs.forEach(n),Zt=c(t),Ke=a(t,"UL",{});var ps=i(Ke);ce=a(ps,"LI",{});var _n=i(ce);Wn=r(_n,"The model can be used in combination with the "),Qe=a(_n,"A",{href:!0});var us=i(Qe);Un=r(us,"EncoderDecoderModel"),us.forEach(n),Hn=r(_n,` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),_n.forEach(n),ps.forEach(n),en=c(t),b(he.$$.fragment,t),tn=c(t),Xe=a(t,"UL",{});var fs=i(Xe);pe=a(fs,"LI",{});var vn=i(pe);Vn=r(vn,"Pretrained "),Ye=a(vn,"A",{href:!0});var ms=i(Ye);Jn=r(ms,"EncoderDecoderModel"),ms.forEach(n),Kn=r(vn," are also directly available in the model hub, e.g.,"),vn.forEach(n),fs.forEach(n),nn=c(t),b(ue.$$.fragment,t),on=c(t),Ze=a(t,"P",{});var gs=i(Ze);Qn=r(gs,"Tips:"),gs.forEach(n),rn=c(t),Z=a(t,"UL",{});var bn=i(Z);M=a(bn,"LI",{});var We=i(M);et=a(We,"A",{href:!0});var _s=i(et);Xn=r(_s,"BertGenerationEncoder"),_s.forEach(n),Yn=r(We," and "),tt=a(We,"A",{href:!0});var vs=i(tt);Zn=r(vs,"BertGenerationDecoder"),vs.forEach(n),eo=r(We,` should be used in
combination with `),yt=a(We,"CODE",{});var bs=i(yt);to=r(bs,"EncoderDecoder"),bs.forEach(n),no=r(We,"."),We.forEach(n),oo=c(bn),Tt=a(bn,"LI",{});var ks=i(Tt);ro=r(ks,`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),ks.forEach(n),bn.forEach(n),sn=c(t),N=a(t,"P",{});var ht=i(N);so=r(ht,"This model was contributed by "),fe=a(ht,"A",{href:!0,rel:!0});var ys=i(fe);ao=r(ys,"patrickvonplaten"),ys.forEach(n),io=r(ht,`. The original code can be
found `),me=a(ht,"A",{href:!0,rel:!0});var Ts=i(me);lo=r(Ts,"here"),Ts.forEach(n),co=r(ht,"."),ht.forEach(n),an=c(t),W=a(t,"H2",{class:!0});var kn=i(W);ee=a(kn,"A",{id:!0,class:!0,href:!0});var ws=i(ee);wt=a(ws,"SPAN",{});var Es=i(wt);b(ge.$$.fragment,Es),Es.forEach(n),ws.forEach(n),ho=c(kn),Et=a(kn,"SPAN",{});var Bs=i(Et);po=r(Bs,"BertGenerationConfig"),Bs.forEach(n),kn.forEach(n),dn=c(t),$=a(t,"DIV",{class:!0});var L=i($);b(_e.$$.fragment,L),uo=c(L),ve=a(L,"P",{});var yn=i(ve);fo=r(yn,`This is the configuration class to store the configuration of a
`),Bt=a(yn,"CODE",{});var zs=i(Bt);mo=r(zs,"BertGenerationPreTrainedModel"),zs.forEach(n),go=r(yn,`. It is used to instantiate a BertGeneration model according to
the specified arguments, defining the model architecture.`),yn.forEach(n),_o=c(L),U=a(L,"P",{});var pt=i(U);vo=r(pt,"Configuration objects inherit from "),nt=a(pt,"A",{href:!0});var $s=i(nt);bo=r($s,"PretrainedConfig"),$s.forEach(n),ko=r(pt,` and can be used to control the model
outputs. Read the documentation from `),ot=a(pt,"A",{href:!0});var Gs=i(ot);yo=r(Gs,"PretrainedConfig"),Gs.forEach(n),To=r(pt," for more information."),pt.forEach(n),wo=c(L),zt=a(L,"P",{});var qs=i(zt);Eo=r(qs,"Examples:"),qs.forEach(n),Bo=c(L),b(be.$$.fragment,L),L.forEach(n),ln=c(t),H=a(t,"H2",{class:!0});var Tn=i(H);te=a(Tn,"A",{id:!0,class:!0,href:!0});var xs=i(te);$t=a(xs,"SPAN",{});var Ps=i($t);b(ke.$$.fragment,Ps),Ps.forEach(n),xs.forEach(n),zo=c(Tn),Gt=a(Tn,"SPAN",{});var Cs=i(Gt);$o=r(Cs,"BertGenerationTokenizer"),Cs.forEach(n),Tn.forEach(n),cn=c(t),j=a(t,"DIV",{class:!0});var ae=i(j);b(ye.$$.fragment,ae),Go=c(ae),Te=a(ae,"P",{});var wn=i(Te);qo=r(wn,"Construct a BertGeneration tokenizer. Based on "),we=a(wn,"A",{href:!0,rel:!0});var Ds=i(we);xo=r(Ds,"SentencePiece"),Ds.forEach(n),Po=r(wn,"."),wn.forEach(n),Co=c(ae),Ee=a(ae,"P",{});var En=i(Ee);Do=r(En,"This tokenizer inherits from "),rt=a(En,"A",{href:!0});var js=i(rt);jo=r(js,"PreTrainedTokenizer"),js.forEach(n),So=r(En,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),En.forEach(n),Ao=c(ae),qt=a(ae,"DIV",{class:!0}),i(qt).forEach(n),ae.forEach(n),hn=c(t),V=a(t,"H2",{class:!0});var Bn=i(V);ne=a(Bn,"A",{id:!0,class:!0,href:!0});var Ss=i(ne);xt=a(Ss,"SPAN",{});var As=i(xt);b(Be.$$.fragment,As),As.forEach(n),Ss.forEach(n),Mo=c(Bn),Pt=a(Bn,"SPAN",{});var Ms=i(Pt);No=r(Ms,"BertGenerationEncoder"),Ms.forEach(n),Bn.forEach(n),pn=c(t),m=a(t,"DIV",{class:!0});var z=i(m);b(ze.$$.fragment,z),Lo=c(z),Ct=a(z,"P",{});var Ns=i(Ct);Fo=r(Ns,"The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),Ns.forEach(n),Io=c(z),$e=a(z,"P",{});var zn=i($e);Oo=r(zn,"This model inherits from "),st=a(zn,"A",{href:!0});var Ls=i(st);Ro=r(Ls,"PreTrainedModel"),Ls.forEach(n),Wo=r(zn,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),zn.forEach(n),Uo=c(z),Ge=a(z,"P",{});var $n=i(Ge);Ho=r($n,"This model is also a PyTorch "),qe=a($n,"A",{href:!0,rel:!0});var Fs=i(qe);Vo=r(Fs,"torch.nn.Module"),Fs.forEach(n),Jo=r($n,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),$n.forEach(n),Ko=c(z),xe=a(z,"P",{});var Gn=i(xe);Qo=r(Gn,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Pe=a(Gn,"A",{href:!0,rel:!0});var Is=i(Pe);Xo=r(Is,`Attention is
all you need`),Is.forEach(n),Yo=r(Gn,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Gn.forEach(n),Zo=c(z),J=a(z,"P",{});var ut=i(J);er=r(ut,`This model should be used when leveraging Bert or Roberta checkpoints for the
`),at=a(ut,"A",{href:!0});var Os=i(at);tr=r(Os,"EncoderDecoderModel"),Os.forEach(n),nr=r(ut," class as described in "),Ce=a(ut,"A",{href:!0,rel:!0});var Rs=i(Ce);or=r(Rs,`Leveraging Pre-trained Checkpoints for Sequence
Generation Tasks`),Rs.forEach(n),rr=r(ut," by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn."),ut.forEach(n),sr=c(z),B=a(z,"P",{});var C=i(B);ar=r(C,"To behave as an decoder the model needs to be initialized with the "),Dt=a(C,"CODE",{});var Ws=i(Dt);ir=r(Ws,"is_decoder"),Ws.forEach(n),dr=r(C,` argument of the configuration
set to `),jt=a(C,"CODE",{});var Us=i(jt);lr=r(Us,"True"),Us.forEach(n),cr=r(C,". To be used in a Seq2Seq model, the model needs to initialized with both "),St=a(C,"CODE",{});var Hs=i(St);hr=r(Hs,"is_decoder"),Hs.forEach(n),pr=r(C,`
argument and `),At=a(C,"CODE",{});var Vs=i(At);ur=r(Vs,"add_cross_attention"),Vs.forEach(n),fr=r(C," set to "),Mt=a(C,"CODE",{});var Js=i(Mt);mr=r(Js,"True"),Js.forEach(n),gr=r(C,"; an "),Nt=a(C,"CODE",{});var Ks=i(Nt);_r=r(Ks,"encoder_hidden_states"),Ks.forEach(n),vr=r(C,` is then expected as an
input to the forward pass.`),C.forEach(n),br=c(z),x=a(z,"DIV",{class:!0});var F=i(x);b(De.$$.fragment,F),kr=c(F),K=a(F,"P",{});var ft=i(K);yr=r(ft,"The "),it=a(ft,"A",{href:!0});var Qs=i(it);Tr=r(Qs,"BertGenerationEncoder"),Qs.forEach(n),wr=r(ft," forward method, overrides the "),Lt=a(ft,"CODE",{});var Xs=i(Lt);Er=r(Xs,"__call__"),Xs.forEach(n),Br=r(ft," special method."),ft.forEach(n),zr=c(F),b(oe.$$.fragment,F),$r=c(F),Ft=a(F,"P",{});var Ys=i(Ft);Gr=r(Ys,"Example:"),Ys.forEach(n),qr=c(F),b(je.$$.fragment,F),F.forEach(n),z.forEach(n),un=c(t),Q=a(t,"H2",{class:!0});var qn=i(Q);re=a(qn,"A",{id:!0,class:!0,href:!0});var Zs=i(re);It=a(Zs,"SPAN",{});var ea=i(It);b(Se.$$.fragment,ea),ea.forEach(n),Zs.forEach(n),xr=c(qn),Ot=a(qn,"SPAN",{});var ta=i(Ot);Pr=r(ta,"BertGenerationDecoder"),ta.forEach(n),qn.forEach(n),fn=c(t),G=a(t,"DIV",{class:!0});var I=i(G);b(Ae.$$.fragment,I),Cr=c(I),Me=a(I,"P",{});var xn=i(Me);Dr=r(xn,"BertGeneration Model with a "),Rt=a(xn,"EM",{});var na=i(Rt);jr=r(na,"language modeling"),na.forEach(n),Sr=r(xn," head on top for CLM fine-tuning."),xn.forEach(n),Ar=c(I),Ne=a(I,"P",{});var Pn=i(Ne);Mr=r(Pn,"This model inherits from "),dt=a(Pn,"A",{href:!0});var oa=i(dt);Nr=r(oa,"PreTrainedModel"),oa.forEach(n),Lr=r(Pn,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Pn.forEach(n),Fr=c(I),Le=a(I,"P",{});var Cn=i(Le);Ir=r(Cn,"This model is also a PyTorch "),Fe=a(Cn,"A",{href:!0,rel:!0});var ra=i(Fe);Or=r(ra,"torch.nn.Module"),ra.forEach(n),Rr=r(Cn,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Cn.forEach(n),Wr=c(I),P=a(I,"DIV",{class:!0});var O=i(P);b(Ie.$$.fragment,O),Ur=c(O),X=a(O,"P",{});var mt=i(X);Hr=r(mt,"The "),lt=a(mt,"A",{href:!0});var sa=i(lt);Vr=r(sa,"BertGenerationDecoder"),sa.forEach(n),Jr=r(mt," forward method, overrides the "),Wt=a(mt,"CODE",{});var aa=i(Wt);Kr=r(aa,"__call__"),aa.forEach(n),Qr=r(mt," special method."),mt.forEach(n),Xr=c(O),b(se.$$.fragment,O),Yr=c(O),Ut=a(O,"P",{});var ia=i(Ut);Zr=r(ia,"Example:"),ia.forEach(n),es=c(O),b(Oe.$$.fragment,O),O.forEach(n),I.forEach(n),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(ga)),d(g,"id","bertgeneration"),d(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(g,"href","#bertgeneration"),d(f,"class","relative group"),d(Y,"id","overview"),d(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Y,"href","#overview"),d(R,"class","relative group"),d(Ue,"href","/docs/transformers/v4.14.1/en/model_doc/encoderdecoder#transformers.EncoderDecoderModel"),d(le,"href","https://arxiv.org/abs/1907.12461"),d(le,"rel","nofollow"),d(Qe,"href","/docs/transformers/v4.14.1/en/model_doc/encoderdecoder#transformers.EncoderDecoderModel"),d(Ye,"href","/docs/transformers/v4.14.1/en/model_doc/encoderdecoder#transformers.EncoderDecoderModel"),d(et,"href","/docs/transformers/v4.14.1/en/model_doc/bertgeneration#transformers.BertGenerationEncoder"),d(tt,"href","/docs/transformers/v4.14.1/en/model_doc/bertgeneration#transformers.BertGenerationDecoder"),d(fe,"href","https://huggingface.co/patrickvonplaten"),d(fe,"rel","nofollow"),d(me,"href","https://tfhub.dev/s?module-type=text-generation&subtype=module,placeholder"),d(me,"rel","nofollow"),d(ee,"id","transformers.BertGenerationConfig"),d(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ee,"href","#transformers.BertGenerationConfig"),d(W,"class","relative group"),d(nt,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),d(ot,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),d($,"class","docstring"),d(te,"id","transformers.BertGenerationTokenizer"),d(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(te,"href","#transformers.BertGenerationTokenizer"),d(H,"class","relative group"),d(we,"href","https://github.com/google/sentencepiece"),d(we,"rel","nofollow"),d(rt,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(qt,"class","docstring"),d(j,"class","docstring"),d(ne,"id","transformers.BertGenerationEncoder"),d(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ne,"href","#transformers.BertGenerationEncoder"),d(V,"class","relative group"),d(st,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),d(qe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(qe,"rel","nofollow"),d(Pe,"href","https://arxiv.org/abs/1706.03762"),d(Pe,"rel","nofollow"),d(at,"href","/docs/transformers/v4.14.1/en/model_doc/encoderdecoder#transformers.EncoderDecoderModel"),d(Ce,"href","https://arxiv.org/abs/1907.12461"),d(Ce,"rel","nofollow"),d(it,"href","/docs/transformers/v4.14.1/en/model_doc/bertgeneration#transformers.BertGenerationEncoder"),d(x,"class","docstring"),d(m,"class","docstring"),d(re,"id","transformers.BertGenerationDecoder"),d(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(re,"href","#transformers.BertGenerationDecoder"),d(Q,"class","relative group"),d(dt,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),d(Fe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Fe,"rel","nofollow"),d(lt,"href","/docs/transformers/v4.14.1/en/model_doc/bertgeneration#transformers.BertGenerationDecoder"),d(P,"class","docstring"),d(G,"class","docstring")},m(t,h){e(document.head,u),p(t,q,h),p(t,f,h),e(f,g),e(g,D),k(_,D,null),e(f,E),e(f,S),e(S,Dn),p(t,Jt,h),p(t,R,h),e(R,Y),e(Y,vt),k(de,vt,null),e(R,jn),e(R,bt),e(bt,Sn),p(t,Kt,h),p(t,A,h),e(A,An),e(A,Ue),e(Ue,Mn),e(A,Nn),e(A,le),e(le,Ln),e(A,Fn),p(t,Qt,h),p(t,He,h),e(He,In),p(t,Xt,h),p(t,Ve,h),e(Ve,kt),e(kt,On),p(t,Yt,h),p(t,Je,h),e(Je,Rn),p(t,Zt,h),p(t,Ke,h),e(Ke,ce),e(ce,Wn),e(ce,Qe),e(Qe,Un),e(ce,Hn),p(t,en,h),k(he,t,h),p(t,tn,h),p(t,Xe,h),e(Xe,pe),e(pe,Vn),e(pe,Ye),e(Ye,Jn),e(pe,Kn),p(t,nn,h),k(ue,t,h),p(t,on,h),p(t,Ze,h),e(Ze,Qn),p(t,rn,h),p(t,Z,h),e(Z,M),e(M,et),e(et,Xn),e(M,Yn),e(M,tt),e(tt,Zn),e(M,eo),e(M,yt),e(yt,to),e(M,no),e(Z,oo),e(Z,Tt),e(Tt,ro),p(t,sn,h),p(t,N,h),e(N,so),e(N,fe),e(fe,ao),e(N,io),e(N,me),e(me,lo),e(N,co),p(t,an,h),p(t,W,h),e(W,ee),e(ee,wt),k(ge,wt,null),e(W,ho),e(W,Et),e(Et,po),p(t,dn,h),p(t,$,h),k(_e,$,null),e($,uo),e($,ve),e(ve,fo),e(ve,Bt),e(Bt,mo),e(ve,go),e($,_o),e($,U),e(U,vo),e(U,nt),e(nt,bo),e(U,ko),e(U,ot),e(ot,yo),e(U,To),e($,wo),e($,zt),e(zt,Eo),e($,Bo),k(be,$,null),p(t,ln,h),p(t,H,h),e(H,te),e(te,$t),k(ke,$t,null),e(H,zo),e(H,Gt),e(Gt,$o),p(t,cn,h),p(t,j,h),k(ye,j,null),e(j,Go),e(j,Te),e(Te,qo),e(Te,we),e(we,xo),e(Te,Po),e(j,Co),e(j,Ee),e(Ee,Do),e(Ee,rt),e(rt,jo),e(Ee,So),e(j,Ao),e(j,qt),p(t,hn,h),p(t,V,h),e(V,ne),e(ne,xt),k(Be,xt,null),e(V,Mo),e(V,Pt),e(Pt,No),p(t,pn,h),p(t,m,h),k(ze,m,null),e(m,Lo),e(m,Ct),e(Ct,Fo),e(m,Io),e(m,$e),e($e,Oo),e($e,st),e(st,Ro),e($e,Wo),e(m,Uo),e(m,Ge),e(Ge,Ho),e(Ge,qe),e(qe,Vo),e(Ge,Jo),e(m,Ko),e(m,xe),e(xe,Qo),e(xe,Pe),e(Pe,Xo),e(xe,Yo),e(m,Zo),e(m,J),e(J,er),e(J,at),e(at,tr),e(J,nr),e(J,Ce),e(Ce,or),e(J,rr),e(m,sr),e(m,B),e(B,ar),e(B,Dt),e(Dt,ir),e(B,dr),e(B,jt),e(jt,lr),e(B,cr),e(B,St),e(St,hr),e(B,pr),e(B,At),e(At,ur),e(B,fr),e(B,Mt),e(Mt,mr),e(B,gr),e(B,Nt),e(Nt,_r),e(B,vr),e(m,br),e(m,x),k(De,x,null),e(x,kr),e(x,K),e(K,yr),e(K,it),e(it,Tr),e(K,wr),e(K,Lt),e(Lt,Er),e(K,Br),e(x,zr),k(oe,x,null),e(x,$r),e(x,Ft),e(Ft,Gr),e(x,qr),k(je,x,null),p(t,un,h),p(t,Q,h),e(Q,re),e(re,It),k(Se,It,null),e(Q,xr),e(Q,Ot),e(Ot,Pr),p(t,fn,h),p(t,G,h),k(Ae,G,null),e(G,Cr),e(G,Me),e(Me,Dr),e(Me,Rt),e(Rt,jr),e(Me,Sr),e(G,Ar),e(G,Ne),e(Ne,Mr),e(Ne,dt),e(dt,Nr),e(Ne,Lr),e(G,Fr),e(G,Le),e(Le,Ir),e(Le,Fe),e(Fe,Or),e(Le,Rr),e(G,Wr),e(G,P),k(Ie,P,null),e(P,Ur),e(P,X),e(X,Hr),e(X,lt),e(lt,Vr),e(X,Jr),e(X,Wt),e(Wt,Kr),e(X,Qr),e(P,Xr),k(se,P,null),e(P,Yr),e(P,Ut),e(Ut,Zr),e(P,es),k(Oe,P,null),mn=!0},p(t,[h]){const Re={};h&2&&(Re.$$scope={dirty:h,ctx:t}),oe.$set(Re);const Ht={};h&2&&(Ht.$$scope={dirty:h,ctx:t}),se.$set(Ht)},i(t){mn||(y(_.$$.fragment,t),y(de.$$.fragment,t),y(he.$$.fragment,t),y(ue.$$.fragment,t),y(ge.$$.fragment,t),y(_e.$$.fragment,t),y(be.$$.fragment,t),y(ke.$$.fragment,t),y(ye.$$.fragment,t),y(Be.$$.fragment,t),y(ze.$$.fragment,t),y(De.$$.fragment,t),y(oe.$$.fragment,t),y(je.$$.fragment,t),y(Se.$$.fragment,t),y(Ae.$$.fragment,t),y(Ie.$$.fragment,t),y(se.$$.fragment,t),y(Oe.$$.fragment,t),mn=!0)},o(t){T(_.$$.fragment,t),T(de.$$.fragment,t),T(he.$$.fragment,t),T(ue.$$.fragment,t),T(ge.$$.fragment,t),T(_e.$$.fragment,t),T(be.$$.fragment,t),T(ke.$$.fragment,t),T(ye.$$.fragment,t),T(Be.$$.fragment,t),T(ze.$$.fragment,t),T(De.$$.fragment,t),T(oe.$$.fragment,t),T(je.$$.fragment,t),T(Se.$$.fragment,t),T(Ae.$$.fragment,t),T(Ie.$$.fragment,t),T(se.$$.fragment,t),T(Oe.$$.fragment,t),mn=!1},d(t){n(u),t&&n(q),t&&n(f),w(_),t&&n(Jt),t&&n(R),w(de),t&&n(Kt),t&&n(A),t&&n(Qt),t&&n(He),t&&n(Xt),t&&n(Ve),t&&n(Yt),t&&n(Je),t&&n(Zt),t&&n(Ke),t&&n(en),w(he,t),t&&n(tn),t&&n(Xe),t&&n(nn),w(ue,t),t&&n(on),t&&n(Ze),t&&n(rn),t&&n(Z),t&&n(sn),t&&n(N),t&&n(an),t&&n(W),w(ge),t&&n(dn),t&&n($),w(_e),w(be),t&&n(ln),t&&n(H),w(ke),t&&n(cn),t&&n(j),w(ye),t&&n(hn),t&&n(V),w(Be),t&&n(pn),t&&n(m),w(ze),w(De),w(oe),w(je),t&&n(un),t&&n(Q),w(Se),t&&n(fn),t&&n(G),w(Ae),w(Ie),w(se),w(Oe)}}}const ga={local:"bertgeneration",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertGenerationConfig",title:"BertGenerationConfig"},{local:"transformers.BertGenerationTokenizer",title:"BertGenerationTokenizer"},{local:"transformers.BertGenerationEncoder",title:"BertGenerationEncoder"},{local:"transformers.BertGenerationDecoder",title:"BertGenerationDecoder"}],title:"BertGeneration"};function _a(ie,u,q){let{fw:f}=u;return ie.$$set=g=>{"fw"in g&&q(0,f=g.fw)},[f]}class Ea extends la{constructor(u){super();ca(this,u,_a,ma,ha,{fw:0})}}export{Ea as default,ga as metadata};
