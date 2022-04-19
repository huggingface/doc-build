import{S as ha,i as pa,s as ma,e as s,k as l,w as g,t as n,M as ua,c as a,d as o,m as c,a as i,x as _,h as r,b as d,F as e,g as p,y as b,q as v,o as k,B as y,v as fa}from"../../chunks/vendor-6b77c823.js";import{T as ca}from"../../chunks/Tip-39098574.js";import{D as Ue}from"../../chunks/Docstring-53452dc4.js";import{C as Jt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as vt}from"../../chunks/IconCopyLink-7a11ce68.js";function ga(He){let m,D,u,B,j;return{c(){m=s("p"),D=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),B=n("Module"),j=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=a(T,"P",{});var w=i(m);D=r(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(w,"CODE",{});var S=i(u);B=r(S,"Module"),S.forEach(o),j=r(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(T,w){p(T,m,w),e(m,D),e(m,u),e(u,B),e(m,j)},d(T){T&&o(m)}}}function _a(He){let m,D,u,B,j;return{c(){m=s("p"),D=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),B=n("Module"),j=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=a(T,"P",{});var w=i(m);D=r(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(w,"CODE",{});var S=i(u);B=r(S,"Module"),S.forEach(o),j=r(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(o)},m(T,w){p(T,m,w),e(m,D),e(m,u),e(u,B),e(m,j)},d(T){T&&o(m)}}}function ba(He){let m,D,u,B,j,T,w,S,Do,Kt,R,Y,kt,ie,So,yt,Mo,Qt,M,Ao,Ve,No,Lo,de,Fo,Oo,Xt,Je,Io,Yt,Ke,Tt,Ro,Zt,Qe,Wo,eo,Xe,le,Uo,Ye,Ho,Vo,to,ce,oo,Ze,he,Jo,et,Ko,Qo,no,pe,ro,tt,Xo,so,Z,A,ot,Yo,Zo,nt,en,tn,wt,on,nn,rn,Et,sn,ao,N,an,me,dn,ln,ue,cn,hn,io,W,ee,Bt,fe,pn,zt,mn,lo,$,ge,un,_e,fn,$t,gn,_n,bn,U,vn,rt,kn,yn,st,Tn,wn,En,Gt,Bn,zn,be,co,H,te,qt,ve,$n,Pt,Gn,ho,C,ke,qn,ye,Pn,Te,xn,jn,Cn,we,Dn,at,Sn,Mn,An,it,Ee,po,V,oe,xt,Be,Nn,jt,Ln,mo,f,ze,Fn,Ct,On,In,$e,Rn,dt,Wn,Un,Hn,Ge,Vn,qe,Jn,Kn,Qn,Pe,Xn,xe,Yn,Zn,er,J,tr,lt,or,nr,je,rr,sr,ar,E,ir,Dt,dr,lr,St,cr,hr,Mt,pr,mr,At,ur,fr,Nt,gr,_r,Lt,br,vr,kr,q,Ce,yr,K,Tr,ct,wr,Er,Ft,Br,zr,$r,ne,Gr,Ot,qr,Pr,De,uo,Q,re,It,Se,xr,Rt,jr,fo,G,Me,Cr,Ae,Dr,Wt,Sr,Mr,Ar,Ne,Nr,ht,Lr,Fr,Or,Le,Ir,Fe,Rr,Wr,Ur,P,Oe,Hr,X,Vr,pt,Jr,Kr,Ut,Qr,Xr,Yr,se,Zr,Ht,es,ts,Ie,go;return T=new vt({}),ie=new vt({}),ce=new Jt({props:{code:`# leverage checkpoints for Bert2Bert model...
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
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># leverage checkpoints for Bert2Bert model...</span>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),pe=new Jt({props:{code:`# instantiate sentence fusion model
sentence_fuser = EncoderDecoderModel.from_pretrained("google/roberta2roberta_L-24_discofuse")
tokenizer = AutoTokenizer.from_pretrained("google/roberta2roberta_L-24_discofuse")

input_ids = tokenizer(
    "This is the first sentence. This is the second sentence.", add_special_tokens=False, return_tensors="pt"
).input_ids

outputs = sentence_fuser.generate(input_ids)

print(tokenizer.decode(outputs[0]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate sentence fusion model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sentence_fuser = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;google/roberta2roberta_L-24_discofuse&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/roberta2roberta_L-24_discofuse&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;This is the first sentence. This is the second sentence.&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = sentence_fuser.generate(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))`}}),fe=new vt({}),ge=new Ue({props:{name:"class transformers.BertGenerationConfig",anchor:"transformers.BertGenerationConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"intermediate_size",val:" = 4096"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
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
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/configuration_bert_generation.py#L20"}}),be=new Jt({props:{code:`from transformers import BertGenerationConfig, BertGenerationEncoder

# Initializing a BertGeneration config
configuration = BertGenerationConfig()

# Initializing a model from the config
model = BertGenerationEncoder(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertGenerationConfig, BertGenerationEncoder

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BertGeneration config</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BertGenerationConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the config</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationEncoder(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ve=new vt({}),ke=new Ue({props:{name:"class transformers.BertGenerationTokenizer",anchor:"transformers.BertGenerationTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '<::::>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/tokenization_bert_generation.py#L41"}}),Ee=new Ue({props:{name:"save_vocabulary",anchor:"transformers.BertGenerationTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/tokenization_bert_generation.py#L155"}}),Be=new vt({}),ze=new Ue({props:{name:"class transformers.BertGenerationEncoder",anchor:"transformers.BertGenerationEncoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L253"}}),Ce=new Ue({props:{name:"forward",anchor:"transformers.BertGenerationEncoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationEncoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L294",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ne=new ca({props:{$$slots:{default:[ga]},$$scope:{ctx:He}}}),De=new Jt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationEncoder
import torch

tokenizer = BertGenerationTokenizer.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")
model = BertGenerationEncoder.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertGenerationTokenizer, BertGenerationEncoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertGenerationTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationEncoder.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Se=new vt({}),Me=new Ue({props:{name:"class transformers.BertGenerationDecoder",anchor:"transformers.BertGenerationDecoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L442"}}),Oe=new Ue({props:{name:"forward",anchor:"transformers.BertGenerationDecoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationDecoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L461",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationConfig"
>BertGenerationConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),se=new ca({props:{$$slots:{default:[_a]},$$scope:{ctx:He}}}),Ie=new Jt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationDecoder, BertGenerationConfig
import torch

tokenizer = BertGenerationTokenizer.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")
config = BertGenerationConfig.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")
config.is_decoder = True
model = BertGenerationDecoder.from_pretrained(
    "google/bert_for_seq_generation_L-24_bbc_encoder", config=config
)

inputs = tokenizer("Hello, my dog is cute", return_token_type_ids=False, return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertGenerationTokenizer, BertGenerationDecoder, BertGenerationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertGenerationTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = BertGenerationConfig.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationDecoder.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>, config=config
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_token_type_ids=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){m=s("meta"),D=l(),u=s("h1"),B=s("a"),j=s("span"),g(T.$$.fragment),w=l(),S=s("span"),Do=n("BertGeneration"),Kt=l(),R=s("h2"),Y=s("a"),kt=s("span"),g(ie.$$.fragment),So=l(),yt=s("span"),Mo=n("Overview"),Qt=l(),M=s("p"),Ao=n(`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Ve=s("a"),No=n("EncoderDecoderModel"),Lo=n(" as proposed in "),de=s("a"),Fo=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Oo=n(" by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),Xt=l(),Je=s("p"),Io=n("The abstract from the paper is the following:"),Yt=l(),Ke=s("p"),Tt=s("em"),Ro=n(`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),Zt=l(),Qe=s("p"),Wo=n("Usage:"),eo=l(),Xe=s("ul"),le=s("li"),Uo=n("The model can be used in combination with the "),Ye=s("a"),Ho=n("EncoderDecoderModel"),Vo=n(` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),to=l(),g(ce.$$.fragment),oo=l(),Ze=s("ul"),he=s("li"),Jo=n("Pretrained "),et=s("a"),Ko=n("EncoderDecoderModel"),Qo=n(" are also directly available in the model hub, e.g.,"),no=l(),g(pe.$$.fragment),ro=l(),tt=s("p"),Xo=n("Tips:"),so=l(),Z=s("ul"),A=s("li"),ot=s("a"),Yo=n("BertGenerationEncoder"),Zo=n(" and "),nt=s("a"),en=n("BertGenerationDecoder"),tn=n(` should be used in
combination with `),wt=s("code"),on=n("EncoderDecoder"),nn=n("."),rn=l(),Et=s("li"),sn=n(`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),ao=l(),N=s("p"),an=n("This model was contributed by "),me=s("a"),dn=n("patrickvonplaten"),ln=n(`. The original code can be
found `),ue=s("a"),cn=n("here"),hn=n("."),io=l(),W=s("h2"),ee=s("a"),Bt=s("span"),g(fe.$$.fragment),pn=l(),zt=s("span"),mn=n("BertGenerationConfig"),lo=l(),$=s("div"),g(ge.$$.fragment),un=l(),_e=s("p"),fn=n("This is the configuration class to store the configuration of a "),$t=s("code"),gn=n("BertGenerationPreTrainedModel"),_n=n(`. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.`),bn=l(),U=s("p"),vn=n("Configuration objects inherit from "),rt=s("a"),kn=n("PretrainedConfig"),yn=n(` and can be used to control the model outputs. Read the
documentation from `),st=s("a"),Tn=n("PretrainedConfig"),wn=n(" for more information."),En=l(),Gt=s("p"),Bn=n("Examples:"),zn=l(),g(be.$$.fragment),co=l(),H=s("h2"),te=s("a"),qt=s("span"),g(ve.$$.fragment),$n=l(),Pt=s("span"),Gn=n("BertGenerationTokenizer"),ho=l(),C=s("div"),g(ke.$$.fragment),qn=l(),ye=s("p"),Pn=n("Construct a BertGeneration tokenizer. Based on "),Te=s("a"),xn=n("SentencePiece"),jn=n("."),Cn=l(),we=s("p"),Dn=n("This tokenizer inherits from "),at=s("a"),Sn=n("PreTrainedTokenizer"),Mn=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),An=l(),it=s("div"),g(Ee.$$.fragment),po=l(),V=s("h2"),oe=s("a"),xt=s("span"),g(Be.$$.fragment),Nn=l(),jt=s("span"),Ln=n("BertGenerationEncoder"),mo=l(),f=s("div"),g(ze.$$.fragment),Fn=l(),Ct=s("p"),On=n("The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),In=l(),$e=s("p"),Rn=n("This model inherits from "),dt=s("a"),Wn=n("PreTrainedModel"),Un=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hn=l(),Ge=s("p"),Vn=n("This model is also a PyTorch "),qe=s("a"),Jn=n("torch.nn.Module"),Kn=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qn=l(),Pe=s("p"),Xn=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),xe=s("a"),Yn=n(`Attention is
all you need`),Zn=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),er=l(),J=s("p"),tr=n("This model should be used when leveraging Bert or Roberta checkpoints for the "),lt=s("a"),or=n("EncoderDecoderModel"),nr=n(` class as
described in `),je=s("a"),rr=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),sr=n(`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),ar=l(),E=s("p"),ir=n("To behave as an decoder the model needs to be initialized with the "),Dt=s("code"),dr=n("is_decoder"),lr=n(` argument of the configuration set
to `),St=s("code"),cr=n("True"),hr=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Mt=s("code"),pr=n("is_decoder"),mr=n(` argument and
`),At=s("code"),ur=n("add_cross_attention"),fr=n(" set to "),Nt=s("code"),gr=n("True"),_r=n("; an "),Lt=s("code"),br=n("encoder_hidden_states"),vr=n(" is then expected as an input to the forward pass."),kr=l(),q=s("div"),g(Ce.$$.fragment),yr=l(),K=s("p"),Tr=n("The "),ct=s("a"),wr=n("BertGenerationEncoder"),Er=n(" forward method, overrides the "),Ft=s("code"),Br=n("__call__"),zr=n(" special method."),$r=l(),g(ne.$$.fragment),Gr=l(),Ot=s("p"),qr=n("Example:"),Pr=l(),g(De.$$.fragment),uo=l(),Q=s("h2"),re=s("a"),It=s("span"),g(Se.$$.fragment),xr=l(),Rt=s("span"),jr=n("BertGenerationDecoder"),fo=l(),G=s("div"),g(Me.$$.fragment),Cr=l(),Ae=s("p"),Dr=n("BertGeneration Model with a "),Wt=s("code"),Sr=n("language modeling"),Mr=n(" head on top for CLM fine-tuning."),Ar=l(),Ne=s("p"),Nr=n("This model inherits from "),ht=s("a"),Lr=n("PreTrainedModel"),Fr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Or=l(),Le=s("p"),Ir=n("This model is also a PyTorch "),Fe=s("a"),Rr=n("torch.nn.Module"),Wr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ur=l(),P=s("div"),g(Oe.$$.fragment),Hr=l(),X=s("p"),Vr=n("The "),pt=s("a"),Jr=n("BertGenerationDecoder"),Kr=n(" forward method, overrides the "),Ut=s("code"),Qr=n("__call__"),Xr=n(" special method."),Yr=l(),g(se.$$.fragment),Zr=l(),Ht=s("p"),es=n("Example:"),ts=l(),g(Ie.$$.fragment),this.h()},l(t){const h=ua('[data-svelte="svelte-1phssyn"]',document.head);m=a(h,"META",{name:!0,content:!0}),h.forEach(o),D=c(t),u=a(t,"H1",{class:!0});var Re=i(u);B=a(Re,"A",{id:!0,class:!0,href:!0});var Vt=i(B);j=a(Vt,"SPAN",{});var os=i(j);_(T.$$.fragment,os),os.forEach(o),Vt.forEach(o),w=c(Re),S=a(Re,"SPAN",{});var ns=i(S);Do=r(ns,"BertGeneration"),ns.forEach(o),Re.forEach(o),Kt=c(t),R=a(t,"H2",{class:!0});var _o=i(R);Y=a(_o,"A",{id:!0,class:!0,href:!0});var rs=i(Y);kt=a(rs,"SPAN",{});var ss=i(kt);_(ie.$$.fragment,ss),ss.forEach(o),rs.forEach(o),So=c(_o),yt=a(_o,"SPAN",{});var as=i(yt);Mo=r(as,"Overview"),as.forEach(o),_o.forEach(o),Qt=c(t),M=a(t,"P",{});var mt=i(M);Ao=r(mt,`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Ve=a(mt,"A",{href:!0});var is=i(Ve);No=r(is,"EncoderDecoderModel"),is.forEach(o),Lo=r(mt," as proposed in "),de=a(mt,"A",{href:!0,rel:!0});var ds=i(de);Fo=r(ds,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ds.forEach(o),Oo=r(mt," by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),mt.forEach(o),Xt=c(t),Je=a(t,"P",{});var ls=i(Je);Io=r(ls,"The abstract from the paper is the following:"),ls.forEach(o),Yt=c(t),Ke=a(t,"P",{});var cs=i(Ke);Tt=a(cs,"EM",{});var hs=i(Tt);Ro=r(hs,`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),hs.forEach(o),cs.forEach(o),Zt=c(t),Qe=a(t,"P",{});var ps=i(Qe);Wo=r(ps,"Usage:"),ps.forEach(o),eo=c(t),Xe=a(t,"UL",{});var ms=i(Xe);le=a(ms,"LI",{});var bo=i(le);Uo=r(bo,"The model can be used in combination with the "),Ye=a(bo,"A",{href:!0});var us=i(Ye);Ho=r(us,"EncoderDecoderModel"),us.forEach(o),Vo=r(bo,` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),bo.forEach(o),ms.forEach(o),to=c(t),_(ce.$$.fragment,t),oo=c(t),Ze=a(t,"UL",{});var fs=i(Ze);he=a(fs,"LI",{});var vo=i(he);Jo=r(vo,"Pretrained "),et=a(vo,"A",{href:!0});var gs=i(et);Ko=r(gs,"EncoderDecoderModel"),gs.forEach(o),Qo=r(vo," are also directly available in the model hub, e.g.,"),vo.forEach(o),fs.forEach(o),no=c(t),_(pe.$$.fragment,t),ro=c(t),tt=a(t,"P",{});var _s=i(tt);Xo=r(_s,"Tips:"),_s.forEach(o),so=c(t),Z=a(t,"UL",{});var ko=i(Z);A=a(ko,"LI",{});var We=i(A);ot=a(We,"A",{href:!0});var bs=i(ot);Yo=r(bs,"BertGenerationEncoder"),bs.forEach(o),Zo=r(We," and "),nt=a(We,"A",{href:!0});var vs=i(nt);en=r(vs,"BertGenerationDecoder"),vs.forEach(o),tn=r(We,` should be used in
combination with `),wt=a(We,"CODE",{});var ks=i(wt);on=r(ks,"EncoderDecoder"),ks.forEach(o),nn=r(We,"."),We.forEach(o),rn=c(ko),Et=a(ko,"LI",{});var ys=i(Et);sn=r(ys,`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),ys.forEach(o),ko.forEach(o),ao=c(t),N=a(t,"P",{});var ut=i(N);an=r(ut,"This model was contributed by "),me=a(ut,"A",{href:!0,rel:!0});var Ts=i(me);dn=r(Ts,"patrickvonplaten"),Ts.forEach(o),ln=r(ut,`. The original code can be
found `),ue=a(ut,"A",{href:!0,rel:!0});var ws=i(ue);cn=r(ws,"here"),ws.forEach(o),hn=r(ut,"."),ut.forEach(o),io=c(t),W=a(t,"H2",{class:!0});var yo=i(W);ee=a(yo,"A",{id:!0,class:!0,href:!0});var Es=i(ee);Bt=a(Es,"SPAN",{});var Bs=i(Bt);_(fe.$$.fragment,Bs),Bs.forEach(o),Es.forEach(o),pn=c(yo),zt=a(yo,"SPAN",{});var zs=i(zt);mn=r(zs,"BertGenerationConfig"),zs.forEach(o),yo.forEach(o),lo=c(t),$=a(t,"DIV",{class:!0});var L=i($);_(ge.$$.fragment,L),un=c(L),_e=a(L,"P",{});var To=i(_e);fn=r(To,"This is the configuration class to store the configuration of a "),$t=a(To,"CODE",{});var $s=i($t);gn=r($s,"BertGenerationPreTrainedModel"),$s.forEach(o),_n=r(To,`. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.`),To.forEach(o),bn=c(L),U=a(L,"P",{});var ft=i(U);vn=r(ft,"Configuration objects inherit from "),rt=a(ft,"A",{href:!0});var Gs=i(rt);kn=r(Gs,"PretrainedConfig"),Gs.forEach(o),yn=r(ft,` and can be used to control the model outputs. Read the
documentation from `),st=a(ft,"A",{href:!0});var qs=i(st);Tn=r(qs,"PretrainedConfig"),qs.forEach(o),wn=r(ft," for more information."),ft.forEach(o),En=c(L),Gt=a(L,"P",{});var Ps=i(Gt);Bn=r(Ps,"Examples:"),Ps.forEach(o),zn=c(L),_(be.$$.fragment,L),L.forEach(o),co=c(t),H=a(t,"H2",{class:!0});var wo=i(H);te=a(wo,"A",{id:!0,class:!0,href:!0});var xs=i(te);qt=a(xs,"SPAN",{});var js=i(qt);_(ve.$$.fragment,js),js.forEach(o),xs.forEach(o),$n=c(wo),Pt=a(wo,"SPAN",{});var Cs=i(Pt);Gn=r(Cs,"BertGenerationTokenizer"),Cs.forEach(o),wo.forEach(o),ho=c(t),C=a(t,"DIV",{class:!0});var ae=i(C);_(ke.$$.fragment,ae),qn=c(ae),ye=a(ae,"P",{});var Eo=i(ye);Pn=r(Eo,"Construct a BertGeneration tokenizer. Based on "),Te=a(Eo,"A",{href:!0,rel:!0});var Ds=i(Te);xn=r(Ds,"SentencePiece"),Ds.forEach(o),jn=r(Eo,"."),Eo.forEach(o),Cn=c(ae),we=a(ae,"P",{});var Bo=i(we);Dn=r(Bo,"This tokenizer inherits from "),at=a(Bo,"A",{href:!0});var Ss=i(at);Sn=r(Ss,"PreTrainedTokenizer"),Ss.forEach(o),Mn=r(Bo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Bo.forEach(o),An=c(ae),it=a(ae,"DIV",{class:!0});var Ms=i(it);_(Ee.$$.fragment,Ms),Ms.forEach(o),ae.forEach(o),po=c(t),V=a(t,"H2",{class:!0});var zo=i(V);oe=a(zo,"A",{id:!0,class:!0,href:!0});var As=i(oe);xt=a(As,"SPAN",{});var Ns=i(xt);_(Be.$$.fragment,Ns),Ns.forEach(o),As.forEach(o),Nn=c(zo),jt=a(zo,"SPAN",{});var Ls=i(jt);Ln=r(Ls,"BertGenerationEncoder"),Ls.forEach(o),zo.forEach(o),mo=c(t),f=a(t,"DIV",{class:!0});var z=i(f);_(ze.$$.fragment,z),Fn=c(z),Ct=a(z,"P",{});var Fs=i(Ct);On=r(Fs,"The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),Fs.forEach(o),In=c(z),$e=a(z,"P",{});var $o=i($e);Rn=r($o,"This model inherits from "),dt=a($o,"A",{href:!0});var Os=i(dt);Wn=r(Os,"PreTrainedModel"),Os.forEach(o),Un=r($o,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$o.forEach(o),Hn=c(z),Ge=a(z,"P",{});var Go=i(Ge);Vn=r(Go,"This model is also a PyTorch "),qe=a(Go,"A",{href:!0,rel:!0});var Is=i(qe);Jn=r(Is,"torch.nn.Module"),Is.forEach(o),Kn=r(Go,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Go.forEach(o),Qn=c(z),Pe=a(z,"P",{});var qo=i(Pe);Xn=r(qo,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),xe=a(qo,"A",{href:!0,rel:!0});var Rs=i(xe);Yn=r(Rs,`Attention is
all you need`),Rs.forEach(o),Zn=r(qo,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),qo.forEach(o),er=c(z),J=a(z,"P",{});var gt=i(J);tr=r(gt,"This model should be used when leveraging Bert or Roberta checkpoints for the "),lt=a(gt,"A",{href:!0});var Ws=i(lt);or=r(Ws,"EncoderDecoderModel"),Ws.forEach(o),nr=r(gt,` class as
described in `),je=a(gt,"A",{href:!0,rel:!0});var Us=i(je);rr=r(Us,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Us.forEach(o),sr=r(gt,`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),gt.forEach(o),ar=c(z),E=a(z,"P",{});var x=i(E);ir=r(x,"To behave as an decoder the model needs to be initialized with the "),Dt=a(x,"CODE",{});var Hs=i(Dt);dr=r(Hs,"is_decoder"),Hs.forEach(o),lr=r(x,` argument of the configuration set
to `),St=a(x,"CODE",{});var Vs=i(St);cr=r(Vs,"True"),Vs.forEach(o),hr=r(x,". To be used in a Seq2Seq model, the model needs to initialized with both "),Mt=a(x,"CODE",{});var Js=i(Mt);pr=r(Js,"is_decoder"),Js.forEach(o),mr=r(x,` argument and
`),At=a(x,"CODE",{});var Ks=i(At);ur=r(Ks,"add_cross_attention"),Ks.forEach(o),fr=r(x," set to "),Nt=a(x,"CODE",{});var Qs=i(Nt);gr=r(Qs,"True"),Qs.forEach(o),_r=r(x,"; an "),Lt=a(x,"CODE",{});var Xs=i(Lt);br=r(Xs,"encoder_hidden_states"),Xs.forEach(o),vr=r(x," is then expected as an input to the forward pass."),x.forEach(o),kr=c(z),q=a(z,"DIV",{class:!0});var F=i(q);_(Ce.$$.fragment,F),yr=c(F),K=a(F,"P",{});var _t=i(K);Tr=r(_t,"The "),ct=a(_t,"A",{href:!0});var Ys=i(ct);wr=r(Ys,"BertGenerationEncoder"),Ys.forEach(o),Er=r(_t," forward method, overrides the "),Ft=a(_t,"CODE",{});var Zs=i(Ft);Br=r(Zs,"__call__"),Zs.forEach(o),zr=r(_t," special method."),_t.forEach(o),$r=c(F),_(ne.$$.fragment,F),Gr=c(F),Ot=a(F,"P",{});var ea=i(Ot);qr=r(ea,"Example:"),ea.forEach(o),Pr=c(F),_(De.$$.fragment,F),F.forEach(o),z.forEach(o),uo=c(t),Q=a(t,"H2",{class:!0});var Po=i(Q);re=a(Po,"A",{id:!0,class:!0,href:!0});var ta=i(re);It=a(ta,"SPAN",{});var oa=i(It);_(Se.$$.fragment,oa),oa.forEach(o),ta.forEach(o),xr=c(Po),Rt=a(Po,"SPAN",{});var na=i(Rt);jr=r(na,"BertGenerationDecoder"),na.forEach(o),Po.forEach(o),fo=c(t),G=a(t,"DIV",{class:!0});var O=i(G);_(Me.$$.fragment,O),Cr=c(O),Ae=a(O,"P",{});var xo=i(Ae);Dr=r(xo,"BertGeneration Model with a "),Wt=a(xo,"CODE",{});var ra=i(Wt);Sr=r(ra,"language modeling"),ra.forEach(o),Mr=r(xo," head on top for CLM fine-tuning."),xo.forEach(o),Ar=c(O),Ne=a(O,"P",{});var jo=i(Ne);Nr=r(jo,"This model inherits from "),ht=a(jo,"A",{href:!0});var sa=i(ht);Lr=r(sa,"PreTrainedModel"),sa.forEach(o),Fr=r(jo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jo.forEach(o),Or=c(O),Le=a(O,"P",{});var Co=i(Le);Ir=r(Co,"This model is also a PyTorch "),Fe=a(Co,"A",{href:!0,rel:!0});var aa=i(Fe);Rr=r(aa,"torch.nn.Module"),aa.forEach(o),Wr=r(Co,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Co.forEach(o),Ur=c(O),P=a(O,"DIV",{class:!0});var I=i(P);_(Oe.$$.fragment,I),Hr=c(I),X=a(I,"P",{});var bt=i(X);Vr=r(bt,"The "),pt=a(bt,"A",{href:!0});var ia=i(pt);Jr=r(ia,"BertGenerationDecoder"),ia.forEach(o),Kr=r(bt," forward method, overrides the "),Ut=a(bt,"CODE",{});var da=i(Ut);Qr=r(da,"__call__"),da.forEach(o),Xr=r(bt," special method."),bt.forEach(o),Yr=c(I),_(se.$$.fragment,I),Zr=c(I),Ht=a(I,"P",{});var la=i(Ht);es=r(la,"Example:"),la.forEach(o),ts=c(I),_(Ie.$$.fragment,I),I.forEach(o),O.forEach(o),this.h()},h(){d(m,"name","hf:doc:metadata"),d(m,"content",JSON.stringify(va)),d(B,"id","bertgeneration"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#bertgeneration"),d(u,"class","relative group"),d(Y,"id","overview"),d(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Y,"href","#overview"),d(R,"class","relative group"),d(Ve,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),d(de,"href","https://arxiv.org/abs/1907.12461"),d(de,"rel","nofollow"),d(Ye,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),d(et,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),d(ot,"href","/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),d(nt,"href","/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),d(me,"href","https://huggingface.co/patrickvonplaten"),d(me,"rel","nofollow"),d(ue,"href","https://tfhub.dev/s?module-type=text-generation&subtype=module,placeholder"),d(ue,"rel","nofollow"),d(ee,"id","transformers.BertGenerationConfig"),d(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ee,"href","#transformers.BertGenerationConfig"),d(W,"class","relative group"),d(rt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(st,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"id","transformers.BertGenerationTokenizer"),d(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(te,"href","#transformers.BertGenerationTokenizer"),d(H,"class","relative group"),d(Te,"href","https://github.com/google/sentencepiece"),d(Te,"rel","nofollow"),d(at,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(oe,"id","transformers.BertGenerationEncoder"),d(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(oe,"href","#transformers.BertGenerationEncoder"),d(V,"class","relative group"),d(dt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(qe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(qe,"rel","nofollow"),d(xe,"href","https://arxiv.org/abs/1706.03762"),d(xe,"rel","nofollow"),d(lt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),d(je,"href","https://arxiv.org/abs/1907.12461"),d(je,"rel","nofollow"),d(ct,"href","/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(re,"id","transformers.BertGenerationDecoder"),d(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(re,"href","#transformers.BertGenerationDecoder"),d(Q,"class","relative group"),d(ht,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Fe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Fe,"rel","nofollow"),d(pt,"href","/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,m),p(t,D,h),p(t,u,h),e(u,B),e(B,j),b(T,j,null),e(u,w),e(u,S),e(S,Do),p(t,Kt,h),p(t,R,h),e(R,Y),e(Y,kt),b(ie,kt,null),e(R,So),e(R,yt),e(yt,Mo),p(t,Qt,h),p(t,M,h),e(M,Ao),e(M,Ve),e(Ve,No),e(M,Lo),e(M,de),e(de,Fo),e(M,Oo),p(t,Xt,h),p(t,Je,h),e(Je,Io),p(t,Yt,h),p(t,Ke,h),e(Ke,Tt),e(Tt,Ro),p(t,Zt,h),p(t,Qe,h),e(Qe,Wo),p(t,eo,h),p(t,Xe,h),e(Xe,le),e(le,Uo),e(le,Ye),e(Ye,Ho),e(le,Vo),p(t,to,h),b(ce,t,h),p(t,oo,h),p(t,Ze,h),e(Ze,he),e(he,Jo),e(he,et),e(et,Ko),e(he,Qo),p(t,no,h),b(pe,t,h),p(t,ro,h),p(t,tt,h),e(tt,Xo),p(t,so,h),p(t,Z,h),e(Z,A),e(A,ot),e(ot,Yo),e(A,Zo),e(A,nt),e(nt,en),e(A,tn),e(A,wt),e(wt,on),e(A,nn),e(Z,rn),e(Z,Et),e(Et,sn),p(t,ao,h),p(t,N,h),e(N,an),e(N,me),e(me,dn),e(N,ln),e(N,ue),e(ue,cn),e(N,hn),p(t,io,h),p(t,W,h),e(W,ee),e(ee,Bt),b(fe,Bt,null),e(W,pn),e(W,zt),e(zt,mn),p(t,lo,h),p(t,$,h),b(ge,$,null),e($,un),e($,_e),e(_e,fn),e(_e,$t),e($t,gn),e(_e,_n),e($,bn),e($,U),e(U,vn),e(U,rt),e(rt,kn),e(U,yn),e(U,st),e(st,Tn),e(U,wn),e($,En),e($,Gt),e(Gt,Bn),e($,zn),b(be,$,null),p(t,co,h),p(t,H,h),e(H,te),e(te,qt),b(ve,qt,null),e(H,$n),e(H,Pt),e(Pt,Gn),p(t,ho,h),p(t,C,h),b(ke,C,null),e(C,qn),e(C,ye),e(ye,Pn),e(ye,Te),e(Te,xn),e(ye,jn),e(C,Cn),e(C,we),e(we,Dn),e(we,at),e(at,Sn),e(we,Mn),e(C,An),e(C,it),b(Ee,it,null),p(t,po,h),p(t,V,h),e(V,oe),e(oe,xt),b(Be,xt,null),e(V,Nn),e(V,jt),e(jt,Ln),p(t,mo,h),p(t,f,h),b(ze,f,null),e(f,Fn),e(f,Ct),e(Ct,On),e(f,In),e(f,$e),e($e,Rn),e($e,dt),e(dt,Wn),e($e,Un),e(f,Hn),e(f,Ge),e(Ge,Vn),e(Ge,qe),e(qe,Jn),e(Ge,Kn),e(f,Qn),e(f,Pe),e(Pe,Xn),e(Pe,xe),e(xe,Yn),e(Pe,Zn),e(f,er),e(f,J),e(J,tr),e(J,lt),e(lt,or),e(J,nr),e(J,je),e(je,rr),e(J,sr),e(f,ar),e(f,E),e(E,ir),e(E,Dt),e(Dt,dr),e(E,lr),e(E,St),e(St,cr),e(E,hr),e(E,Mt),e(Mt,pr),e(E,mr),e(E,At),e(At,ur),e(E,fr),e(E,Nt),e(Nt,gr),e(E,_r),e(E,Lt),e(Lt,br),e(E,vr),e(f,kr),e(f,q),b(Ce,q,null),e(q,yr),e(q,K),e(K,Tr),e(K,ct),e(ct,wr),e(K,Er),e(K,Ft),e(Ft,Br),e(K,zr),e(q,$r),b(ne,q,null),e(q,Gr),e(q,Ot),e(Ot,qr),e(q,Pr),b(De,q,null),p(t,uo,h),p(t,Q,h),e(Q,re),e(re,It),b(Se,It,null),e(Q,xr),e(Q,Rt),e(Rt,jr),p(t,fo,h),p(t,G,h),b(Me,G,null),e(G,Cr),e(G,Ae),e(Ae,Dr),e(Ae,Wt),e(Wt,Sr),e(Ae,Mr),e(G,Ar),e(G,Ne),e(Ne,Nr),e(Ne,ht),e(ht,Lr),e(Ne,Fr),e(G,Or),e(G,Le),e(Le,Ir),e(Le,Fe),e(Fe,Rr),e(Le,Wr),e(G,Ur),e(G,P),b(Oe,P,null),e(P,Hr),e(P,X),e(X,Vr),e(X,pt),e(pt,Jr),e(X,Kr),e(X,Ut),e(Ut,Qr),e(X,Xr),e(P,Yr),b(se,P,null),e(P,Zr),e(P,Ht),e(Ht,es),e(P,ts),b(Ie,P,null),go=!0},p(t,[h]){const Re={};h&2&&(Re.$$scope={dirty:h,ctx:t}),ne.$set(Re);const Vt={};h&2&&(Vt.$$scope={dirty:h,ctx:t}),se.$set(Vt)},i(t){go||(v(T.$$.fragment,t),v(ie.$$.fragment,t),v(ce.$$.fragment,t),v(pe.$$.fragment,t),v(fe.$$.fragment,t),v(ge.$$.fragment,t),v(be.$$.fragment,t),v(ve.$$.fragment,t),v(ke.$$.fragment,t),v(Ee.$$.fragment,t),v(Be.$$.fragment,t),v(ze.$$.fragment,t),v(Ce.$$.fragment,t),v(ne.$$.fragment,t),v(De.$$.fragment,t),v(Se.$$.fragment,t),v(Me.$$.fragment,t),v(Oe.$$.fragment,t),v(se.$$.fragment,t),v(Ie.$$.fragment,t),go=!0)},o(t){k(T.$$.fragment,t),k(ie.$$.fragment,t),k(ce.$$.fragment,t),k(pe.$$.fragment,t),k(fe.$$.fragment,t),k(ge.$$.fragment,t),k(be.$$.fragment,t),k(ve.$$.fragment,t),k(ke.$$.fragment,t),k(Ee.$$.fragment,t),k(Be.$$.fragment,t),k(ze.$$.fragment,t),k(Ce.$$.fragment,t),k(ne.$$.fragment,t),k(De.$$.fragment,t),k(Se.$$.fragment,t),k(Me.$$.fragment,t),k(Oe.$$.fragment,t),k(se.$$.fragment,t),k(Ie.$$.fragment,t),go=!1},d(t){o(m),t&&o(D),t&&o(u),y(T),t&&o(Kt),t&&o(R),y(ie),t&&o(Qt),t&&o(M),t&&o(Xt),t&&o(Je),t&&o(Yt),t&&o(Ke),t&&o(Zt),t&&o(Qe),t&&o(eo),t&&o(Xe),t&&o(to),y(ce,t),t&&o(oo),t&&o(Ze),t&&o(no),y(pe,t),t&&o(ro),t&&o(tt),t&&o(so),t&&o(Z),t&&o(ao),t&&o(N),t&&o(io),t&&o(W),y(fe),t&&o(lo),t&&o($),y(ge),y(be),t&&o(co),t&&o(H),y(ve),t&&o(ho),t&&o(C),y(ke),y(Ee),t&&o(po),t&&o(V),y(Be),t&&o(mo),t&&o(f),y(ze),y(Ce),y(ne),y(De),t&&o(uo),t&&o(Q),y(Se),t&&o(fo),t&&o(G),y(Me),y(Oe),y(se),y(Ie)}}}const va={local:"bertgeneration",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertGenerationConfig",title:"BertGenerationConfig"},{local:"transformers.BertGenerationTokenizer",title:"BertGenerationTokenizer"},{local:"transformers.BertGenerationEncoder",title:"BertGenerationEncoder"},{local:"transformers.BertGenerationDecoder",title:"BertGenerationDecoder"}],title:"BertGeneration"};function ka(He){return fa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class za extends ha{constructor(m){super();pa(this,m,ka,ba,ma,{})}}export{za as default,va as metadata};
