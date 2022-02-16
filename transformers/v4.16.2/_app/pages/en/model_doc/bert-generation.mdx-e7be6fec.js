import{S as la,i as ca,s as ha,e as s,k as l,w as v,t as n,L as pa,c as a,d as o,m as c,a as i,x as b,h as r,b as d,J as e,g as p,y as k,q as T,o as w,B as y}from"../../../chunks/vendor-b1433968.js";import{T as da}from"../../../chunks/Tip-c3840994.js";import{D as gt}from"../../../chunks/Docstring-ff504c58.js";import{C as Vt}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as _t}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function ua(ie){let u,q,f,g,C;return{c(){u=s("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),C=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){u=a(_,"P",{});var E=i(u);q=r(E,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(E,"CODE",{});var S=i(f);g=r(S,"Module"),S.forEach(o),C=r(E,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),E.forEach(o)},m(_,E){p(_,u,E),e(u,q),e(u,f),e(f,g),e(u,C)},d(_){_&&o(u)}}}function fa(ie){let u,q,f,g,C;return{c(){u=s("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),C=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){u=a(_,"P",{});var E=i(u);q=r(E,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(E,"CODE",{});var S=i(f);g=r(S,"Module"),S.forEach(o),C=r(E,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),E.forEach(o)},m(_,E){p(_,u,E),e(u,q),e(u,f),e(f,g),e(u,C)},d(_){_&&o(u)}}}function ma(ie){let u,q,f,g,C,_,E,S,Co,Jt,R,Y,vt,de,Do,bt,So,Kt,A,Ao,Ue,Mo,No,le,Lo,Fo,Qt,He,Oo,Xt,Ve,kt,Io,Yt,Je,Ro,Zt,Ke,ce,Wo,Qe,Uo,Ho,eo,he,to,Xe,pe,Vo,Ye,Jo,Ko,oo,ue,no,Ze,Qo,ro,Z,M,et,Xo,Yo,tt,Zo,en,Tt,tn,on,nn,wt,rn,so,N,sn,fe,an,dn,me,ln,cn,ao,W,ee,yt,ge,hn,Et,pn,io,$,_e,un,ve,fn,Bt,mn,gn,_n,U,vn,ot,bn,kn,nt,Tn,wn,yn,zt,En,Bn,be,lo,H,te,$t,ke,zn,Gt,$n,co,D,Te,Gn,we,qn,ye,Pn,jn,xn,Ee,Cn,rt,Dn,Sn,An,qt,ho,V,oe,Pt,Be,Mn,jt,Nn,po,m,ze,Ln,xt,Fn,On,$e,In,st,Rn,Wn,Un,Ge,Hn,qe,Vn,Jn,Kn,Pe,Qn,je,Xn,Yn,Zn,J,er,at,tr,or,xe,nr,rr,sr,B,ar,Ct,ir,dr,Dt,lr,cr,St,hr,pr,At,ur,fr,Mt,mr,gr,Nt,_r,vr,br,P,Ce,kr,K,Tr,it,wr,yr,Lt,Er,Br,zr,ne,$r,Ft,Gr,qr,De,uo,Q,re,Ot,Se,Pr,It,jr,fo,G,Ae,xr,Me,Cr,Rt,Dr,Sr,Ar,Ne,Mr,dt,Nr,Lr,Fr,Le,Or,Fe,Ir,Rr,Wr,j,Oe,Ur,X,Hr,lt,Vr,Jr,Wt,Kr,Qr,Xr,se,Yr,Ut,Zr,es,Ie,mo;return _=new _t({}),de=new _t({}),he=new Vt({props:{code:`# leverage checkpoints for Bert2Bert model...
# use BERT's cls token as BOS token and sep token as EOS token
encoder = BertGenerationEncoder.from_pretrained("bert-large-uncased", bos_token_id=101, eos_token_id=102)
# add cross attention layers and use BERT's cls token as BOS token and sep token as EOS token
decoder = BertGenerationDecoder.from_pretrained(
    "bert-large-uncased", add_cross_attention=True, is_decoder=True, bos_token_id=101, eos_token_id=102
)
bert2bert = EncoderDecoderModel(encoder=encoder, decoder=decoder)

# create tokenizer...
tokenizer = BertTokenizer.from_pretrained("bert-large-uncased")

input_ids = tokenizer(
    "This is a long article to summarize", add_special_tokens=False, return_tensors="pt"
).input_ids
labels = tokenizer("This is a short summary", return_tensors="pt").input_ids

# train...
loss = bert2bert(input_ids=input_ids, decoder_input_ids=labels, labels=labels).loss
loss.backward(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># leverage checkpoints for Bert2Bert model...</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use BERT&#x27;s cls token as BOS token and sep token as EOS token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder = BertGenerationEncoder.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased&quot;</span>, bos_token_id=<span class="hljs-number">101</span>, eos_token_id=<span class="hljs-number">102</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add cross attention layers and use BERT&#x27;s cls token as BOS token and sep token as EOS token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder = BertGenerationDecoder.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bert-large-uncased&quot;</span>, add_cross_attention=<span class="hljs-literal">True</span>, is_decoder=<span class="hljs-literal">True</span>, bos_token_id=<span class="hljs-number">101</span>, eos_token_id=<span class="hljs-number">102</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>bert2bert = EncoderDecoderModel(encoder=encoder, decoder=decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create tokenizer...</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;This is a long article to summarize&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;This is a short summary&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># train...</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = bert2bert(input_ids=input_ids, decoder_input_ids=labels, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),ue=new Vt({props:{code:`# instantiate sentence fusion model
sentence_fuser = EncoderDecoderModel.from_pretrained("google/roberta2roberta_L-24_discofuse")
tokenizer = AutoTokenizer.from_pretrained("google/roberta2roberta_L-24_discofuse")

input_ids = tokenizer(
    "This is the first sentence. This is the second sentence.", add_special_tokens=False, return_tensors="pt"
).input_ids

outputs = sentence_fuser.generate(input_ids)

print(tokenizer.decode(outputs[0])),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate sentence fusion model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sentence_fuser = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;google/roberta2roberta_L-24_discofuse&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/roberta2roberta_L-24_discofuse&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;This is the first sentence. This is the second sentence.&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = sentence_fuser.generate(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))`}}),ge=new _t({}),_e=new gt({props:{name:"class transformers.BertGenerationConfig",anchor:"transformers.BertGenerationConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"intermediate_size",val:" = 4096"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bert_generation/configuration_bert_generation.py#L20",parametersDescription:[{anchor:"transformers.BertGenerationConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <code>BertGeneration</code>.`,name:"vocab_size"},{anchor:"transformers.BertGenerationConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BertGenerationConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BertGenerationConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BertGenerationConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often called feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BertGenerationConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BertGenerationConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BertGenerationConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BertGenerationConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BertGenerationConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertGenerationConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertGenerationConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertGenerationConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ke=new _t({}),Te=new gt({props:{name:"class transformers.BertGenerationTokenizer",anchor:"transformers.BertGenerationTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '<::::>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bert_generation/tokenization_bert_generation.py#L41",parametersDescription:[{anchor:"transformers.BertGenerationTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BertGenerationTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BertGenerationTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The begin of sequence token.`,name:"bos_token"},{anchor:"transformers.BertGenerationTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertGenerationTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertGenerationTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
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
</ul>`,name:"sp_model_kwargs"}]}}),Be=new _t({}),ze=new gt({props:{name:"class transformers.BertGenerationEncoder",anchor:"transformers.BertGenerationEncoder",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bert_generation/modeling_bert_generation.py#L253",parametersDescription:[{anchor:"transformers.BertGenerationEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ce=new gt({props:{name:"forward",anchor:"transformers.BertGenerationEncoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bert_generation/modeling_bert_generation.py#L294",parametersDescription:[{anchor:"transformers.BertGenerationEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bert-generation#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertGenerationEncoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertGenerationEncoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertGenerationEncoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationEncoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertGenerationEncoder.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.`,name:"encoder_attention_mask"},{anchor:"transformers.BertGenerationEncoder.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertGenerationEncoder.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bert-generation#transformers.BertGenerationConfig"
>BertGenerationConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ne=new da({props:{$$slots:{default:[ua]},$$scope:{ctx:ie}}}),De=new Vt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationEncoder
import torch

tokenizer = BertGenerationTokenizer.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")
model = BertGenerationEncoder.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertGenerationTokenizer, BertGenerationEncoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertGenerationTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationEncoder.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Se=new _t({}),Ae=new gt({props:{name:"class transformers.BertGenerationDecoder",anchor:"transformers.BertGenerationDecoder",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bert_generation/modeling_bert_generation.py#L442",parametersDescription:[{anchor:"transformers.BertGenerationDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Oe=new gt({props:{name:"forward",anchor:"transformers.BertGenerationDecoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bert_generation/modeling_bert_generation.py#L461",parametersDescription:[{anchor:"transformers.BertGenerationDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bert-generation#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertGenerationDecoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertGenerationDecoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertGenerationDecoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationDecoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertGenerationDecoder.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bert-generation#transformers.BertGenerationConfig"
>BertGenerationConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),se=new da({props:{$$slots:{default:[fa]},$$scope:{ctx:ie}}}),Ie=new Vt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationDecoder, BertGenerationConfig
import torch

tokenizer = BertGenerationTokenizer.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")
config = BertGenerationConfig.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")
config.is_decoder = True
model = BertGenerationDecoder.from_pretrained(
    "google/bert_for_seq_generation_L-24_bbc_encoder", config=config
)

inputs = tokenizer("Hello, my dog is cute", return_token_type_ids=False, return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertGenerationTokenizer, BertGenerationDecoder, BertGenerationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertGenerationTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = BertGenerationConfig.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationDecoder.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>, config=config
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_token_type_ids=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){u=s("meta"),q=l(),f=s("h1"),g=s("a"),C=s("span"),v(_.$$.fragment),E=l(),S=s("span"),Co=n("BertGeneration"),Jt=l(),R=s("h2"),Y=s("a"),vt=s("span"),v(de.$$.fragment),Do=l(),bt=s("span"),So=n("Overview"),Kt=l(),A=s("p"),Ao=n(`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Ue=s("a"),Mo=n("EncoderDecoderModel"),No=n(" as proposed in "),le=s("a"),Lo=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Fo=n(" by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),Qt=l(),He=s("p"),Oo=n("The abstract from the paper is the following:"),Xt=l(),Ve=s("p"),kt=s("em"),Io=n(`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),Yt=l(),Je=s("p"),Ro=n("Usage:"),Zt=l(),Ke=s("ul"),ce=s("li"),Wo=n("The model can be used in combination with the "),Qe=s("a"),Uo=n("EncoderDecoderModel"),Ho=n(` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),eo=l(),v(he.$$.fragment),to=l(),Xe=s("ul"),pe=s("li"),Vo=n("Pretrained "),Ye=s("a"),Jo=n("EncoderDecoderModel"),Ko=n(" are also directly available in the model hub, e.g.,"),oo=l(),v(ue.$$.fragment),no=l(),Ze=s("p"),Qo=n("Tips:"),ro=l(),Z=s("ul"),M=s("li"),et=s("a"),Xo=n("BertGenerationEncoder"),Yo=n(" and "),tt=s("a"),Zo=n("BertGenerationDecoder"),en=n(` should be used in
combination with `),Tt=s("code"),tn=n("EncoderDecoder"),on=n("."),nn=l(),wt=s("li"),rn=n(`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),so=l(),N=s("p"),sn=n("This model was contributed by "),fe=s("a"),an=n("patrickvonplaten"),dn=n(`. The original code can be
found `),me=s("a"),ln=n("here"),cn=n("."),ao=l(),W=s("h2"),ee=s("a"),yt=s("span"),v(ge.$$.fragment),hn=l(),Et=s("span"),pn=n("BertGenerationConfig"),io=l(),$=s("div"),v(_e.$$.fragment),un=l(),ve=s("p"),fn=n("This is the configuration class to store the configuration of a "),Bt=s("code"),mn=n("BertGenerationPreTrainedModel"),gn=n(` It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.`),_n=l(),U=s("p"),vn=n("Configuration objects inherit from "),ot=s("a"),bn=n("PretrainedConfig"),kn=n(` and can be used to control the model outputs. Read the
documentation from `),nt=s("a"),Tn=n("PretrainedConfig"),wn=n(" for more information."),yn=l(),zt=s("p"),En=n("Examples:"),Bn=l(),v(be.$$.fragment),lo=l(),H=s("h2"),te=s("a"),$t=s("span"),v(ke.$$.fragment),zn=l(),Gt=s("span"),$n=n("BertGenerationTokenizer"),co=l(),D=s("div"),v(Te.$$.fragment),Gn=l(),we=s("p"),qn=n("Construct a BertGeneration tokenizer. Based on "),ye=s("a"),Pn=n("SentencePiece"),jn=n("."),xn=l(),Ee=s("p"),Cn=n("This tokenizer inherits from "),rt=s("a"),Dn=n("PreTrainedTokenizer"),Sn=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),An=l(),qt=s("div"),ho=l(),V=s("h2"),oe=s("a"),Pt=s("span"),v(Be.$$.fragment),Mn=l(),jt=s("span"),Nn=n("BertGenerationEncoder"),po=l(),m=s("div"),v(ze.$$.fragment),Ln=l(),xt=s("p"),Fn=n("The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),On=l(),$e=s("p"),In=n("This model inherits from "),st=s("a"),Rn=n("PreTrainedModel"),Wn=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Un=l(),Ge=s("p"),Hn=n("This model is also a PyTorch "),qe=s("a"),Vn=n("torch.nn.Module"),Jn=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kn=l(),Pe=s("p"),Qn=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),je=s("a"),Xn=n(`Attention is
all you need`),Yn=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Zn=l(),J=s("p"),er=n("This model should be used when leveraging Bert or Roberta checkpoints for the "),at=s("a"),tr=n("EncoderDecoderModel"),or=n(` class as
described in `),xe=s("a"),nr=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),rr=n(`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),sr=l(),B=s("p"),ar=n("To behave as an decoder the model needs to be initialized with the "),Ct=s("code"),ir=n("is_decoder"),dr=n(` argument of the configuration set
to `),Dt=s("code"),lr=n("True"),cr=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),St=s("code"),hr=n("is_decoder"),pr=n(` argument and
`),At=s("code"),ur=n("add_cross_attention"),fr=n(" set to "),Mt=s("code"),mr=n("True"),gr=n("; an "),Nt=s("code"),_r=n("encoder_hidden_states"),vr=n(" is then expected as an input to the forward pass."),br=l(),P=s("div"),v(Ce.$$.fragment),kr=l(),K=s("p"),Tr=n("The "),it=s("a"),wr=n("BertGenerationEncoder"),yr=n(" forward method, overrides the "),Lt=s("code"),Er=n("__call__"),Br=n(" special method."),zr=l(),v(ne.$$.fragment),$r=l(),Ft=s("p"),Gr=n("Example:"),qr=l(),v(De.$$.fragment),uo=l(),Q=s("h2"),re=s("a"),Ot=s("span"),v(Se.$$.fragment),Pr=l(),It=s("span"),jr=n("BertGenerationDecoder"),fo=l(),G=s("div"),v(Ae.$$.fragment),xr=l(),Me=s("p"),Cr=n("BertGeneration Model with a "),Rt=s("code"),Dr=n("language modeling"),Sr=n(" head on top for CLM fine-tuning."),Ar=l(),Ne=s("p"),Mr=n("This model inherits from "),dt=s("a"),Nr=n("PreTrainedModel"),Lr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fr=l(),Le=s("p"),Or=n("This model is also a PyTorch "),Fe=s("a"),Ir=n("torch.nn.Module"),Rr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wr=l(),j=s("div"),v(Oe.$$.fragment),Ur=l(),X=s("p"),Hr=n("The "),lt=s("a"),Vr=n("BertGenerationDecoder"),Jr=n(" forward method, overrides the "),Wt=s("code"),Kr=n("__call__"),Qr=n(" special method."),Xr=l(),v(se.$$.fragment),Yr=l(),Ut=s("p"),Zr=n("Example:"),es=l(),v(Ie.$$.fragment),this.h()},l(t){const h=pa('[data-svelte="svelte-1phssyn"]',document.head);u=a(h,"META",{name:!0,content:!0}),h.forEach(o),q=c(t),f=a(t,"H1",{class:!0});var Re=i(f);g=a(Re,"A",{id:!0,class:!0,href:!0});var Ht=i(g);C=a(Ht,"SPAN",{});var ts=i(C);b(_.$$.fragment,ts),ts.forEach(o),Ht.forEach(o),E=c(Re),S=a(Re,"SPAN",{});var os=i(S);Co=r(os,"BertGeneration"),os.forEach(o),Re.forEach(o),Jt=c(t),R=a(t,"H2",{class:!0});var go=i(R);Y=a(go,"A",{id:!0,class:!0,href:!0});var ns=i(Y);vt=a(ns,"SPAN",{});var rs=i(vt);b(de.$$.fragment,rs),rs.forEach(o),ns.forEach(o),Do=c(go),bt=a(go,"SPAN",{});var ss=i(bt);So=r(ss,"Overview"),ss.forEach(o),go.forEach(o),Kt=c(t),A=a(t,"P",{});var ct=i(A);Ao=r(ct,`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Ue=a(ct,"A",{href:!0});var as=i(Ue);Mo=r(as,"EncoderDecoderModel"),as.forEach(o),No=r(ct," as proposed in "),le=a(ct,"A",{href:!0,rel:!0});var is=i(le);Lo=r(is,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),is.forEach(o),Fo=r(ct," by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),ct.forEach(o),Qt=c(t),He=a(t,"P",{});var ds=i(He);Oo=r(ds,"The abstract from the paper is the following:"),ds.forEach(o),Xt=c(t),Ve=a(t,"P",{});var ls=i(Ve);kt=a(ls,"EM",{});var cs=i(kt);Io=r(cs,`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),cs.forEach(o),ls.forEach(o),Yt=c(t),Je=a(t,"P",{});var hs=i(Je);Ro=r(hs,"Usage:"),hs.forEach(o),Zt=c(t),Ke=a(t,"UL",{});var ps=i(Ke);ce=a(ps,"LI",{});var _o=i(ce);Wo=r(_o,"The model can be used in combination with the "),Qe=a(_o,"A",{href:!0});var us=i(Qe);Uo=r(us,"EncoderDecoderModel"),us.forEach(o),Ho=r(_o,` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),_o.forEach(o),ps.forEach(o),eo=c(t),b(he.$$.fragment,t),to=c(t),Xe=a(t,"UL",{});var fs=i(Xe);pe=a(fs,"LI",{});var vo=i(pe);Vo=r(vo,"Pretrained "),Ye=a(vo,"A",{href:!0});var ms=i(Ye);Jo=r(ms,"EncoderDecoderModel"),ms.forEach(o),Ko=r(vo," are also directly available in the model hub, e.g.,"),vo.forEach(o),fs.forEach(o),oo=c(t),b(ue.$$.fragment,t),no=c(t),Ze=a(t,"P",{});var gs=i(Ze);Qo=r(gs,"Tips:"),gs.forEach(o),ro=c(t),Z=a(t,"UL",{});var bo=i(Z);M=a(bo,"LI",{});var We=i(M);et=a(We,"A",{href:!0});var _s=i(et);Xo=r(_s,"BertGenerationEncoder"),_s.forEach(o),Yo=r(We," and "),tt=a(We,"A",{href:!0});var vs=i(tt);Zo=r(vs,"BertGenerationDecoder"),vs.forEach(o),en=r(We,` should be used in
combination with `),Tt=a(We,"CODE",{});var bs=i(Tt);tn=r(bs,"EncoderDecoder"),bs.forEach(o),on=r(We,"."),We.forEach(o),nn=c(bo),wt=a(bo,"LI",{});var ks=i(wt);rn=r(ks,`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),ks.forEach(o),bo.forEach(o),so=c(t),N=a(t,"P",{});var ht=i(N);sn=r(ht,"This model was contributed by "),fe=a(ht,"A",{href:!0,rel:!0});var Ts=i(fe);an=r(Ts,"patrickvonplaten"),Ts.forEach(o),dn=r(ht,`. The original code can be
found `),me=a(ht,"A",{href:!0,rel:!0});var ws=i(me);ln=r(ws,"here"),ws.forEach(o),cn=r(ht,"."),ht.forEach(o),ao=c(t),W=a(t,"H2",{class:!0});var ko=i(W);ee=a(ko,"A",{id:!0,class:!0,href:!0});var ys=i(ee);yt=a(ys,"SPAN",{});var Es=i(yt);b(ge.$$.fragment,Es),Es.forEach(o),ys.forEach(o),hn=c(ko),Et=a(ko,"SPAN",{});var Bs=i(Et);pn=r(Bs,"BertGenerationConfig"),Bs.forEach(o),ko.forEach(o),io=c(t),$=a(t,"DIV",{class:!0});var L=i($);b(_e.$$.fragment,L),un=c(L),ve=a(L,"P",{});var To=i(ve);fn=r(To,"This is the configuration class to store the configuration of a "),Bt=a(To,"CODE",{});var zs=i(Bt);mn=r(zs,"BertGenerationPreTrainedModel"),zs.forEach(o),gn=r(To,` It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.`),To.forEach(o),_n=c(L),U=a(L,"P",{});var pt=i(U);vn=r(pt,"Configuration objects inherit from "),ot=a(pt,"A",{href:!0});var $s=i(ot);bn=r($s,"PretrainedConfig"),$s.forEach(o),kn=r(pt,` and can be used to control the model outputs. Read the
documentation from `),nt=a(pt,"A",{href:!0});var Gs=i(nt);Tn=r(Gs,"PretrainedConfig"),Gs.forEach(o),wn=r(pt," for more information."),pt.forEach(o),yn=c(L),zt=a(L,"P",{});var qs=i(zt);En=r(qs,"Examples:"),qs.forEach(o),Bn=c(L),b(be.$$.fragment,L),L.forEach(o),lo=c(t),H=a(t,"H2",{class:!0});var wo=i(H);te=a(wo,"A",{id:!0,class:!0,href:!0});var Ps=i(te);$t=a(Ps,"SPAN",{});var js=i($t);b(ke.$$.fragment,js),js.forEach(o),Ps.forEach(o),zn=c(wo),Gt=a(wo,"SPAN",{});var xs=i(Gt);$n=r(xs,"BertGenerationTokenizer"),xs.forEach(o),wo.forEach(o),co=c(t),D=a(t,"DIV",{class:!0});var ae=i(D);b(Te.$$.fragment,ae),Gn=c(ae),we=a(ae,"P",{});var yo=i(we);qn=r(yo,"Construct a BertGeneration tokenizer. Based on "),ye=a(yo,"A",{href:!0,rel:!0});var Cs=i(ye);Pn=r(Cs,"SentencePiece"),Cs.forEach(o),jn=r(yo,"."),yo.forEach(o),xn=c(ae),Ee=a(ae,"P",{});var Eo=i(Ee);Cn=r(Eo,"This tokenizer inherits from "),rt=a(Eo,"A",{href:!0});var Ds=i(rt);Dn=r(Ds,"PreTrainedTokenizer"),Ds.forEach(o),Sn=r(Eo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Eo.forEach(o),An=c(ae),qt=a(ae,"DIV",{class:!0}),i(qt).forEach(o),ae.forEach(o),ho=c(t),V=a(t,"H2",{class:!0});var Bo=i(V);oe=a(Bo,"A",{id:!0,class:!0,href:!0});var Ss=i(oe);Pt=a(Ss,"SPAN",{});var As=i(Pt);b(Be.$$.fragment,As),As.forEach(o),Ss.forEach(o),Mn=c(Bo),jt=a(Bo,"SPAN",{});var Ms=i(jt);Nn=r(Ms,"BertGenerationEncoder"),Ms.forEach(o),Bo.forEach(o),po=c(t),m=a(t,"DIV",{class:!0});var z=i(m);b(ze.$$.fragment,z),Ln=c(z),xt=a(z,"P",{});var Ns=i(xt);Fn=r(Ns,"The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),Ns.forEach(o),On=c(z),$e=a(z,"P",{});var zo=i($e);In=r(zo,"This model inherits from "),st=a(zo,"A",{href:!0});var Ls=i(st);Rn=r(Ls,"PreTrainedModel"),Ls.forEach(o),Wn=r(zo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zo.forEach(o),Un=c(z),Ge=a(z,"P",{});var $o=i(Ge);Hn=r($o,"This model is also a PyTorch "),qe=a($o,"A",{href:!0,rel:!0});var Fs=i(qe);Vn=r(Fs,"torch.nn.Module"),Fs.forEach(o),Jn=r($o,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$o.forEach(o),Kn=c(z),Pe=a(z,"P",{});var Go=i(Pe);Qn=r(Go,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),je=a(Go,"A",{href:!0,rel:!0});var Os=i(je);Xn=r(Os,`Attention is
all you need`),Os.forEach(o),Yn=r(Go,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Go.forEach(o),Zn=c(z),J=a(z,"P",{});var ut=i(J);er=r(ut,"This model should be used when leveraging Bert or Roberta checkpoints for the "),at=a(ut,"A",{href:!0});var Is=i(at);tr=r(Is,"EncoderDecoderModel"),Is.forEach(o),or=r(ut,` class as
described in `),xe=a(ut,"A",{href:!0,rel:!0});var Rs=i(xe);nr=r(Rs,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Rs.forEach(o),rr=r(ut,`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),ut.forEach(o),sr=c(z),B=a(z,"P",{});var x=i(B);ar=r(x,"To behave as an decoder the model needs to be initialized with the "),Ct=a(x,"CODE",{});var Ws=i(Ct);ir=r(Ws,"is_decoder"),Ws.forEach(o),dr=r(x,` argument of the configuration set
to `),Dt=a(x,"CODE",{});var Us=i(Dt);lr=r(Us,"True"),Us.forEach(o),cr=r(x,". To be used in a Seq2Seq model, the model needs to initialized with both "),St=a(x,"CODE",{});var Hs=i(St);hr=r(Hs,"is_decoder"),Hs.forEach(o),pr=r(x,` argument and
`),At=a(x,"CODE",{});var Vs=i(At);ur=r(Vs,"add_cross_attention"),Vs.forEach(o),fr=r(x," set to "),Mt=a(x,"CODE",{});var Js=i(Mt);mr=r(Js,"True"),Js.forEach(o),gr=r(x,"; an "),Nt=a(x,"CODE",{});var Ks=i(Nt);_r=r(Ks,"encoder_hidden_states"),Ks.forEach(o),vr=r(x," is then expected as an input to the forward pass."),x.forEach(o),br=c(z),P=a(z,"DIV",{class:!0});var F=i(P);b(Ce.$$.fragment,F),kr=c(F),K=a(F,"P",{});var ft=i(K);Tr=r(ft,"The "),it=a(ft,"A",{href:!0});var Qs=i(it);wr=r(Qs,"BertGenerationEncoder"),Qs.forEach(o),yr=r(ft," forward method, overrides the "),Lt=a(ft,"CODE",{});var Xs=i(Lt);Er=r(Xs,"__call__"),Xs.forEach(o),Br=r(ft," special method."),ft.forEach(o),zr=c(F),b(ne.$$.fragment,F),$r=c(F),Ft=a(F,"P",{});var Ys=i(Ft);Gr=r(Ys,"Example:"),Ys.forEach(o),qr=c(F),b(De.$$.fragment,F),F.forEach(o),z.forEach(o),uo=c(t),Q=a(t,"H2",{class:!0});var qo=i(Q);re=a(qo,"A",{id:!0,class:!0,href:!0});var Zs=i(re);Ot=a(Zs,"SPAN",{});var ea=i(Ot);b(Se.$$.fragment,ea),ea.forEach(o),Zs.forEach(o),Pr=c(qo),It=a(qo,"SPAN",{});var ta=i(It);jr=r(ta,"BertGenerationDecoder"),ta.forEach(o),qo.forEach(o),fo=c(t),G=a(t,"DIV",{class:!0});var O=i(G);b(Ae.$$.fragment,O),xr=c(O),Me=a(O,"P",{});var Po=i(Me);Cr=r(Po,"BertGeneration Model with a "),Rt=a(Po,"CODE",{});var oa=i(Rt);Dr=r(oa,"language modeling"),oa.forEach(o),Sr=r(Po," head on top for CLM fine-tuning."),Po.forEach(o),Ar=c(O),Ne=a(O,"P",{});var jo=i(Ne);Mr=r(jo,"This model inherits from "),dt=a(jo,"A",{href:!0});var na=i(dt);Nr=r(na,"PreTrainedModel"),na.forEach(o),Lr=r(jo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jo.forEach(o),Fr=c(O),Le=a(O,"P",{});var xo=i(Le);Or=r(xo,"This model is also a PyTorch "),Fe=a(xo,"A",{href:!0,rel:!0});var ra=i(Fe);Ir=r(ra,"torch.nn.Module"),ra.forEach(o),Rr=r(xo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xo.forEach(o),Wr=c(O),j=a(O,"DIV",{class:!0});var I=i(j);b(Oe.$$.fragment,I),Ur=c(I),X=a(I,"P",{});var mt=i(X);Hr=r(mt,"The "),lt=a(mt,"A",{href:!0});var sa=i(lt);Vr=r(sa,"BertGenerationDecoder"),sa.forEach(o),Jr=r(mt," forward method, overrides the "),Wt=a(mt,"CODE",{});var aa=i(Wt);Kr=r(aa,"__call__"),aa.forEach(o),Qr=r(mt," special method."),mt.forEach(o),Xr=c(I),b(se.$$.fragment,I),Yr=c(I),Ut=a(I,"P",{});var ia=i(Ut);Zr=r(ia,"Example:"),ia.forEach(o),es=c(I),b(Ie.$$.fragment,I),I.forEach(o),O.forEach(o),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(ga)),d(g,"id","bertgeneration"),d(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(g,"href","#bertgeneration"),d(f,"class","relative group"),d(Y,"id","overview"),d(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Y,"href","#overview"),d(R,"class","relative group"),d(Ue,"href","/docs/transformers/v4.16.2/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),d(le,"href","https://arxiv.org/abs/1907.12461"),d(le,"rel","nofollow"),d(Qe,"href","/docs/transformers/v4.16.2/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),d(Ye,"href","/docs/transformers/v4.16.2/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),d(et,"href","/docs/transformers/v4.16.2/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),d(tt,"href","/docs/transformers/v4.16.2/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),d(fe,"href","https://huggingface.co/patrickvonplaten"),d(fe,"rel","nofollow"),d(me,"href","https://tfhub.dev/s?module-type=text-generation&subtype=module,placeholder"),d(me,"rel","nofollow"),d(ee,"id","transformers.BertGenerationConfig"),d(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ee,"href","#transformers.BertGenerationConfig"),d(W,"class","relative group"),d(ot,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),d(nt,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),d($,"class","docstring"),d(te,"id","transformers.BertGenerationTokenizer"),d(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(te,"href","#transformers.BertGenerationTokenizer"),d(H,"class","relative group"),d(ye,"href","https://github.com/google/sentencepiece"),d(ye,"rel","nofollow"),d(rt,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(qt,"class","docstring"),d(D,"class","docstring"),d(oe,"id","transformers.BertGenerationEncoder"),d(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(oe,"href","#transformers.BertGenerationEncoder"),d(V,"class","relative group"),d(st,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),d(qe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(qe,"rel","nofollow"),d(je,"href","https://arxiv.org/abs/1706.03762"),d(je,"rel","nofollow"),d(at,"href","/docs/transformers/v4.16.2/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),d(xe,"href","https://arxiv.org/abs/1907.12461"),d(xe,"rel","nofollow"),d(it,"href","/docs/transformers/v4.16.2/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),d(P,"class","docstring"),d(m,"class","docstring"),d(re,"id","transformers.BertGenerationDecoder"),d(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(re,"href","#transformers.BertGenerationDecoder"),d(Q,"class","relative group"),d(dt,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),d(Fe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Fe,"rel","nofollow"),d(lt,"href","/docs/transformers/v4.16.2/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),d(j,"class","docstring"),d(G,"class","docstring")},m(t,h){e(document.head,u),p(t,q,h),p(t,f,h),e(f,g),e(g,C),k(_,C,null),e(f,E),e(f,S),e(S,Co),p(t,Jt,h),p(t,R,h),e(R,Y),e(Y,vt),k(de,vt,null),e(R,Do),e(R,bt),e(bt,So),p(t,Kt,h),p(t,A,h),e(A,Ao),e(A,Ue),e(Ue,Mo),e(A,No),e(A,le),e(le,Lo),e(A,Fo),p(t,Qt,h),p(t,He,h),e(He,Oo),p(t,Xt,h),p(t,Ve,h),e(Ve,kt),e(kt,Io),p(t,Yt,h),p(t,Je,h),e(Je,Ro),p(t,Zt,h),p(t,Ke,h),e(Ke,ce),e(ce,Wo),e(ce,Qe),e(Qe,Uo),e(ce,Ho),p(t,eo,h),k(he,t,h),p(t,to,h),p(t,Xe,h),e(Xe,pe),e(pe,Vo),e(pe,Ye),e(Ye,Jo),e(pe,Ko),p(t,oo,h),k(ue,t,h),p(t,no,h),p(t,Ze,h),e(Ze,Qo),p(t,ro,h),p(t,Z,h),e(Z,M),e(M,et),e(et,Xo),e(M,Yo),e(M,tt),e(tt,Zo),e(M,en),e(M,Tt),e(Tt,tn),e(M,on),e(Z,nn),e(Z,wt),e(wt,rn),p(t,so,h),p(t,N,h),e(N,sn),e(N,fe),e(fe,an),e(N,dn),e(N,me),e(me,ln),e(N,cn),p(t,ao,h),p(t,W,h),e(W,ee),e(ee,yt),k(ge,yt,null),e(W,hn),e(W,Et),e(Et,pn),p(t,io,h),p(t,$,h),k(_e,$,null),e($,un),e($,ve),e(ve,fn),e(ve,Bt),e(Bt,mn),e(ve,gn),e($,_n),e($,U),e(U,vn),e(U,ot),e(ot,bn),e(U,kn),e(U,nt),e(nt,Tn),e(U,wn),e($,yn),e($,zt),e(zt,En),e($,Bn),k(be,$,null),p(t,lo,h),p(t,H,h),e(H,te),e(te,$t),k(ke,$t,null),e(H,zn),e(H,Gt),e(Gt,$n),p(t,co,h),p(t,D,h),k(Te,D,null),e(D,Gn),e(D,we),e(we,qn),e(we,ye),e(ye,Pn),e(we,jn),e(D,xn),e(D,Ee),e(Ee,Cn),e(Ee,rt),e(rt,Dn),e(Ee,Sn),e(D,An),e(D,qt),p(t,ho,h),p(t,V,h),e(V,oe),e(oe,Pt),k(Be,Pt,null),e(V,Mn),e(V,jt),e(jt,Nn),p(t,po,h),p(t,m,h),k(ze,m,null),e(m,Ln),e(m,xt),e(xt,Fn),e(m,On),e(m,$e),e($e,In),e($e,st),e(st,Rn),e($e,Wn),e(m,Un),e(m,Ge),e(Ge,Hn),e(Ge,qe),e(qe,Vn),e(Ge,Jn),e(m,Kn),e(m,Pe),e(Pe,Qn),e(Pe,je),e(je,Xn),e(Pe,Yn),e(m,Zn),e(m,J),e(J,er),e(J,at),e(at,tr),e(J,or),e(J,xe),e(xe,nr),e(J,rr),e(m,sr),e(m,B),e(B,ar),e(B,Ct),e(Ct,ir),e(B,dr),e(B,Dt),e(Dt,lr),e(B,cr),e(B,St),e(St,hr),e(B,pr),e(B,At),e(At,ur),e(B,fr),e(B,Mt),e(Mt,mr),e(B,gr),e(B,Nt),e(Nt,_r),e(B,vr),e(m,br),e(m,P),k(Ce,P,null),e(P,kr),e(P,K),e(K,Tr),e(K,it),e(it,wr),e(K,yr),e(K,Lt),e(Lt,Er),e(K,Br),e(P,zr),k(ne,P,null),e(P,$r),e(P,Ft),e(Ft,Gr),e(P,qr),k(De,P,null),p(t,uo,h),p(t,Q,h),e(Q,re),e(re,Ot),k(Se,Ot,null),e(Q,Pr),e(Q,It),e(It,jr),p(t,fo,h),p(t,G,h),k(Ae,G,null),e(G,xr),e(G,Me),e(Me,Cr),e(Me,Rt),e(Rt,Dr),e(Me,Sr),e(G,Ar),e(G,Ne),e(Ne,Mr),e(Ne,dt),e(dt,Nr),e(Ne,Lr),e(G,Fr),e(G,Le),e(Le,Or),e(Le,Fe),e(Fe,Ir),e(Le,Rr),e(G,Wr),e(G,j),k(Oe,j,null),e(j,Ur),e(j,X),e(X,Hr),e(X,lt),e(lt,Vr),e(X,Jr),e(X,Wt),e(Wt,Kr),e(X,Qr),e(j,Xr),k(se,j,null),e(j,Yr),e(j,Ut),e(Ut,Zr),e(j,es),k(Ie,j,null),mo=!0},p(t,[h]){const Re={};h&2&&(Re.$$scope={dirty:h,ctx:t}),ne.$set(Re);const Ht={};h&2&&(Ht.$$scope={dirty:h,ctx:t}),se.$set(Ht)},i(t){mo||(T(_.$$.fragment,t),T(de.$$.fragment,t),T(he.$$.fragment,t),T(ue.$$.fragment,t),T(ge.$$.fragment,t),T(_e.$$.fragment,t),T(be.$$.fragment,t),T(ke.$$.fragment,t),T(Te.$$.fragment,t),T(Be.$$.fragment,t),T(ze.$$.fragment,t),T(Ce.$$.fragment,t),T(ne.$$.fragment,t),T(De.$$.fragment,t),T(Se.$$.fragment,t),T(Ae.$$.fragment,t),T(Oe.$$.fragment,t),T(se.$$.fragment,t),T(Ie.$$.fragment,t),mo=!0)},o(t){w(_.$$.fragment,t),w(de.$$.fragment,t),w(he.$$.fragment,t),w(ue.$$.fragment,t),w(ge.$$.fragment,t),w(_e.$$.fragment,t),w(be.$$.fragment,t),w(ke.$$.fragment,t),w(Te.$$.fragment,t),w(Be.$$.fragment,t),w(ze.$$.fragment,t),w(Ce.$$.fragment,t),w(ne.$$.fragment,t),w(De.$$.fragment,t),w(Se.$$.fragment,t),w(Ae.$$.fragment,t),w(Oe.$$.fragment,t),w(se.$$.fragment,t),w(Ie.$$.fragment,t),mo=!1},d(t){o(u),t&&o(q),t&&o(f),y(_),t&&o(Jt),t&&o(R),y(de),t&&o(Kt),t&&o(A),t&&o(Qt),t&&o(He),t&&o(Xt),t&&o(Ve),t&&o(Yt),t&&o(Je),t&&o(Zt),t&&o(Ke),t&&o(eo),y(he,t),t&&o(to),t&&o(Xe),t&&o(oo),y(ue,t),t&&o(no),t&&o(Ze),t&&o(ro),t&&o(Z),t&&o(so),t&&o(N),t&&o(ao),t&&o(W),y(ge),t&&o(io),t&&o($),y(_e),y(be),t&&o(lo),t&&o(H),y(ke),t&&o(co),t&&o(D),y(Te),t&&o(ho),t&&o(V),y(Be),t&&o(po),t&&o(m),y(ze),y(Ce),y(ne),y(De),t&&o(uo),t&&o(Q),y(Se),t&&o(fo),t&&o(G),y(Ae),y(Oe),y(se),y(Ie)}}}const ga={local:"bertgeneration",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertGenerationConfig",title:"BertGenerationConfig"},{local:"transformers.BertGenerationTokenizer",title:"BertGenerationTokenizer"},{local:"transformers.BertGenerationEncoder",title:"BertGenerationEncoder"},{local:"transformers.BertGenerationDecoder",title:"BertGenerationDecoder"}],title:"BertGeneration"};function _a(ie,u,q){let{fw:f}=u;return ie.$$set=g=>{"fw"in g&&q(0,f=g.fw)},[f]}class Ea extends la{constructor(u){super();ca(this,u,_a,ma,ha,{fw:0})}}export{Ea as default,ga as metadata};
