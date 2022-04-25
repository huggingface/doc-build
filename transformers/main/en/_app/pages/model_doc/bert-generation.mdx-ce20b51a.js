import{S as fa,i as ga,s as _a,e as s,k as l,w as g,t as n,M as ba,c as a,d as o,m as c,a as i,x as _,h as r,b as d,F as e,g as p,y as b,q as v,o as k,B as y,v as va}from"../../chunks/vendor-6b77c823.js";import{T as ua}from"../../chunks/Tip-39098574.js";import{D as He}from"../../chunks/Docstring-1088f2fb.js";import{C as Qt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as yt}from"../../chunks/IconCopyLink-7a11ce68.js";function ka(Ve){let m,D,u,B,j;return{c(){m=s("p"),D=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),B=n("Module"),j=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){m=a(w,"P",{});var T=i(m);D=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(T,"CODE",{});var S=i(u);B=r(S,"Module"),S.forEach(o),j=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(w,T){p(w,m,T),e(m,D),e(m,u),e(u,B),e(m,j)},d(w){w&&o(m)}}}function ya(Ve){let m,D,u,B,j;return{c(){m=s("p"),D=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),B=n("Module"),j=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){m=a(w,"P",{});var T=i(m);D=r(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(T,"CODE",{});var S=i(u);B=r(S,"Module"),S.forEach(o),j=r(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(w,T){p(w,m,T),e(m,D),e(m,u),e(u,B),e(m,j)},d(w){w&&o(m)}}}function wa(Ve){let m,D,u,B,j,w,T,S,So,Xt,R,Z,wt,de,Ao,Tt,Mo,Yt,A,No,Je,Lo,Fo,le,Io,Oo,Zt,Ke,Ro,eo,Qe,Et,Wo,to,Xe,Uo,oo,Ye,ce,Ho,Ze,Vo,Jo,no,he,ro,et,pe,Ko,tt,Qo,Xo,so,me,ao,ot,Yo,io,ee,M,nt,Zo,en,rt,tn,on,Bt,nn,rn,sn,zt,an,lo,N,dn,ue,ln,cn,fe,hn,pn,co,W,te,$t,ge,mn,Gt,un,ho,$,_e,fn,U,gn,qt,_n,bn,be,vn,kn,yn,H,wn,st,Tn,En,at,Bn,zn,$n,Pt,Gn,qn,ve,po,V,oe,xt,ke,Pn,jt,xn,mo,C,ye,jn,we,Cn,Te,Dn,Sn,An,Ee,Mn,it,Nn,Ln,Fn,dt,Be,uo,J,ne,Ct,ze,In,Dt,On,fo,f,$e,Rn,St,Wn,Un,Ge,Hn,lt,Vn,Jn,Kn,qe,Qn,Pe,Xn,Yn,Zn,xe,er,je,tr,or,nr,K,rr,ct,sr,ar,Ce,ir,dr,lr,E,cr,At,hr,pr,Mt,mr,ur,Nt,fr,gr,Lt,_r,br,Ft,vr,kr,It,yr,wr,Tr,q,De,Er,Q,Br,ht,zr,$r,Ot,Gr,qr,Pr,re,xr,Rt,jr,Cr,Se,go,X,se,Wt,Ae,Dr,Ut,Sr,_o,G,Me,Ar,Ne,Mr,Ht,Nr,Lr,Fr,Le,Ir,pt,Or,Rr,Wr,Fe,Ur,Ie,Hr,Vr,Jr,P,Oe,Kr,Y,Qr,mt,Xr,Yr,Vt,Zr,es,ts,ae,os,Jt,ns,rs,Re,bo;return w=new yt({}),de=new yt({}),he=new Qt({props:{code:`# leverage checkpoints for Bert2Bert model...
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),me=new Qt({props:{code:`# instantiate sentence fusion model
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

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))`}}),ge=new yt({}),_e=new He({props:{name:"class transformers.BertGenerationConfig",anchor:"transformers.BertGenerationConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"intermediate_size",val:" = 4096"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
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
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/configuration_bert_generation.py#L20"}}),ve=new Qt({props:{code:`from transformers import BertGenerationConfig, BertGenerationEncoder

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ke=new yt({}),ye=new He({props:{name:"class transformers.BertGenerationTokenizer",anchor:"transformers.BertGenerationTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '<::::>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/tokenization_bert_generation.py#L41"}}),Be=new He({props:{name:"save_vocabulary",anchor:"transformers.BertGenerationTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/tokenization_bert_generation.py#L155"}}),ze=new yt({}),$e=new He({props:{name:"class transformers.BertGenerationEncoder",anchor:"transformers.BertGenerationEncoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L253"}}),De=new He({props:{name:"forward",anchor:"transformers.BertGenerationEncoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),re=new ua({props:{$$slots:{default:[ka]},$$scope:{ctx:Ve}}}),Se=new Qt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationEncoder
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ae=new yt({}),Me=new He({props:{name:"class transformers.BertGenerationDecoder",anchor:"transformers.BertGenerationDecoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L442"}}),Oe=new He({props:{name:"forward",anchor:"transformers.BertGenerationDecoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ae=new ua({props:{$$slots:{default:[ya]},$$scope:{ctx:Ve}}}),Re=new Qt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationDecoder, BertGenerationConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){m=s("meta"),D=l(),u=s("h1"),B=s("a"),j=s("span"),g(w.$$.fragment),T=l(),S=s("span"),So=n("BertGeneration"),Xt=l(),R=s("h2"),Z=s("a"),wt=s("span"),g(de.$$.fragment),Ao=l(),Tt=s("span"),Mo=n("Overview"),Yt=l(),A=s("p"),No=n(`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Je=s("a"),Lo=n("EncoderDecoderModel"),Fo=n(" as proposed in "),le=s("a"),Io=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Oo=n(" by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),Zt=l(),Ke=s("p"),Ro=n("The abstract from the paper is the following:"),eo=l(),Qe=s("p"),Et=s("em"),Wo=n(`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),to=l(),Xe=s("p"),Uo=n("Usage:"),oo=l(),Ye=s("ul"),ce=s("li"),Ho=n("The model can be used in combination with the "),Ze=s("a"),Vo=n("EncoderDecoderModel"),Jo=n(` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),no=l(),g(he.$$.fragment),ro=l(),et=s("ul"),pe=s("li"),Ko=n("Pretrained "),tt=s("a"),Qo=n("EncoderDecoderModel"),Xo=n(" are also directly available in the model hub, e.g.,"),so=l(),g(me.$$.fragment),ao=l(),ot=s("p"),Yo=n("Tips:"),io=l(),ee=s("ul"),M=s("li"),nt=s("a"),Zo=n("BertGenerationEncoder"),en=n(" and "),rt=s("a"),tn=n("BertGenerationDecoder"),on=n(` should be used in
combination with `),Bt=s("code"),nn=n("EncoderDecoder"),rn=n("."),sn=l(),zt=s("li"),an=n(`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),lo=l(),N=s("p"),dn=n("This model was contributed by "),ue=s("a"),ln=n("patrickvonplaten"),cn=n(`. The original code can be
found `),fe=s("a"),hn=n("here"),pn=n("."),co=l(),W=s("h2"),te=s("a"),$t=s("span"),g(ge.$$.fragment),mn=l(),Gt=s("span"),un=n("BertGenerationConfig"),ho=l(),$=s("div"),g(_e.$$.fragment),fn=l(),U=s("p"),gn=n("This is the configuration class to store the configuration of a "),qt=s("code"),_n=n("BertGenerationPreTrainedModel"),bn=n(`. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BertGeneration
`),be=s("a"),vn=n("google/bert_for_seq_generation_L-24_bbc_encoder"),kn=n(`
architecture.`),yn=l(),H=s("p"),wn=n("Configuration objects inherit from "),st=s("a"),Tn=n("PretrainedConfig"),En=n(` and can be used to control the model outputs. Read the
documentation from `),at=s("a"),Bn=n("PretrainedConfig"),zn=n(" for more information."),$n=l(),Pt=s("p"),Gn=n("Examples:"),qn=l(),g(ve.$$.fragment),po=l(),V=s("h2"),oe=s("a"),xt=s("span"),g(ke.$$.fragment),Pn=l(),jt=s("span"),xn=n("BertGenerationTokenizer"),mo=l(),C=s("div"),g(ye.$$.fragment),jn=l(),we=s("p"),Cn=n("Construct a BertGeneration tokenizer. Based on "),Te=s("a"),Dn=n("SentencePiece"),Sn=n("."),An=l(),Ee=s("p"),Mn=n("This tokenizer inherits from "),it=s("a"),Nn=n("PreTrainedTokenizer"),Ln=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Fn=l(),dt=s("div"),g(Be.$$.fragment),uo=l(),J=s("h2"),ne=s("a"),Ct=s("span"),g(ze.$$.fragment),In=l(),Dt=s("span"),On=n("BertGenerationEncoder"),fo=l(),f=s("div"),g($e.$$.fragment),Rn=l(),St=s("p"),Wn=n("The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),Un=l(),Ge=s("p"),Hn=n("This model inherits from "),lt=s("a"),Vn=n("PreTrainedModel"),Jn=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kn=l(),qe=s("p"),Qn=n("This model is also a PyTorch "),Pe=s("a"),Xn=n("torch.nn.Module"),Yn=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zn=l(),xe=s("p"),er=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),je=s("a"),tr=n(`Attention is
all you need`),or=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),nr=l(),K=s("p"),rr=n("This model should be used when leveraging Bert or Roberta checkpoints for the "),ct=s("a"),sr=n("EncoderDecoderModel"),ar=n(` class as
described in `),Ce=s("a"),ir=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),dr=n(`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),lr=l(),E=s("p"),cr=n("To behave as an decoder the model needs to be initialized with the "),At=s("code"),hr=n("is_decoder"),pr=n(` argument of the configuration set
to `),Mt=s("code"),mr=n("True"),ur=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Nt=s("code"),fr=n("is_decoder"),gr=n(` argument and
`),Lt=s("code"),_r=n("add_cross_attention"),br=n(" set to "),Ft=s("code"),vr=n("True"),kr=n("; an "),It=s("code"),yr=n("encoder_hidden_states"),wr=n(" is then expected as an input to the forward pass."),Tr=l(),q=s("div"),g(De.$$.fragment),Er=l(),Q=s("p"),Br=n("The "),ht=s("a"),zr=n("BertGenerationEncoder"),$r=n(" forward method, overrides the "),Ot=s("code"),Gr=n("__call__"),qr=n(" special method."),Pr=l(),g(re.$$.fragment),xr=l(),Rt=s("p"),jr=n("Example:"),Cr=l(),g(Se.$$.fragment),go=l(),X=s("h2"),se=s("a"),Wt=s("span"),g(Ae.$$.fragment),Dr=l(),Ut=s("span"),Sr=n("BertGenerationDecoder"),_o=l(),G=s("div"),g(Me.$$.fragment),Ar=l(),Ne=s("p"),Mr=n("BertGeneration Model with a "),Ht=s("code"),Nr=n("language modeling"),Lr=n(" head on top for CLM fine-tuning."),Fr=l(),Le=s("p"),Ir=n("This model inherits from "),pt=s("a"),Or=n("PreTrainedModel"),Rr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wr=l(),Fe=s("p"),Ur=n("This model is also a PyTorch "),Ie=s("a"),Hr=n("torch.nn.Module"),Vr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr=l(),P=s("div"),g(Oe.$$.fragment),Kr=l(),Y=s("p"),Qr=n("The "),mt=s("a"),Xr=n("BertGenerationDecoder"),Yr=n(" forward method, overrides the "),Vt=s("code"),Zr=n("__call__"),es=n(" special method."),ts=l(),g(ae.$$.fragment),os=l(),Jt=s("p"),ns=n("Example:"),rs=l(),g(Re.$$.fragment),this.h()},l(t){const h=ba('[data-svelte="svelte-1phssyn"]',document.head);m=a(h,"META",{name:!0,content:!0}),h.forEach(o),D=c(t),u=a(t,"H1",{class:!0});var We=i(u);B=a(We,"A",{id:!0,class:!0,href:!0});var Kt=i(B);j=a(Kt,"SPAN",{});var ss=i(j);_(w.$$.fragment,ss),ss.forEach(o),Kt.forEach(o),T=c(We),S=a(We,"SPAN",{});var as=i(S);So=r(as,"BertGeneration"),as.forEach(o),We.forEach(o),Xt=c(t),R=a(t,"H2",{class:!0});var vo=i(R);Z=a(vo,"A",{id:!0,class:!0,href:!0});var is=i(Z);wt=a(is,"SPAN",{});var ds=i(wt);_(de.$$.fragment,ds),ds.forEach(o),is.forEach(o),Ao=c(vo),Tt=a(vo,"SPAN",{});var ls=i(Tt);Mo=r(ls,"Overview"),ls.forEach(o),vo.forEach(o),Yt=c(t),A=a(t,"P",{});var ut=i(A);No=r(ut,`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Je=a(ut,"A",{href:!0});var cs=i(Je);Lo=r(cs,"EncoderDecoderModel"),cs.forEach(o),Fo=r(ut," as proposed in "),le=a(ut,"A",{href:!0,rel:!0});var hs=i(le);Io=r(hs,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),hs.forEach(o),Oo=r(ut," by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),ut.forEach(o),Zt=c(t),Ke=a(t,"P",{});var ps=i(Ke);Ro=r(ps,"The abstract from the paper is the following:"),ps.forEach(o),eo=c(t),Qe=a(t,"P",{});var ms=i(Qe);Et=a(ms,"EM",{});var us=i(Et);Wo=r(us,`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),us.forEach(o),ms.forEach(o),to=c(t),Xe=a(t,"P",{});var fs=i(Xe);Uo=r(fs,"Usage:"),fs.forEach(o),oo=c(t),Ye=a(t,"UL",{});var gs=i(Ye);ce=a(gs,"LI",{});var ko=i(ce);Ho=r(ko,"The model can be used in combination with the "),Ze=a(ko,"A",{href:!0});var _s=i(Ze);Vo=r(_s,"EncoderDecoderModel"),_s.forEach(o),Jo=r(ko,` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),ko.forEach(o),gs.forEach(o),no=c(t),_(he.$$.fragment,t),ro=c(t),et=a(t,"UL",{});var bs=i(et);pe=a(bs,"LI",{});var yo=i(pe);Ko=r(yo,"Pretrained "),tt=a(yo,"A",{href:!0});var vs=i(tt);Qo=r(vs,"EncoderDecoderModel"),vs.forEach(o),Xo=r(yo," are also directly available in the model hub, e.g.,"),yo.forEach(o),bs.forEach(o),so=c(t),_(me.$$.fragment,t),ao=c(t),ot=a(t,"P",{});var ks=i(ot);Yo=r(ks,"Tips:"),ks.forEach(o),io=c(t),ee=a(t,"UL",{});var wo=i(ee);M=a(wo,"LI",{});var Ue=i(M);nt=a(Ue,"A",{href:!0});var ys=i(nt);Zo=r(ys,"BertGenerationEncoder"),ys.forEach(o),en=r(Ue," and "),rt=a(Ue,"A",{href:!0});var ws=i(rt);tn=r(ws,"BertGenerationDecoder"),ws.forEach(o),on=r(Ue,` should be used in
combination with `),Bt=a(Ue,"CODE",{});var Ts=i(Bt);nn=r(Ts,"EncoderDecoder"),Ts.forEach(o),rn=r(Ue,"."),Ue.forEach(o),sn=c(wo),zt=a(wo,"LI",{});var Es=i(zt);an=r(Es,`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),Es.forEach(o),wo.forEach(o),lo=c(t),N=a(t,"P",{});var ft=i(N);dn=r(ft,"This model was contributed by "),ue=a(ft,"A",{href:!0,rel:!0});var Bs=i(ue);ln=r(Bs,"patrickvonplaten"),Bs.forEach(o),cn=r(ft,`. The original code can be
found `),fe=a(ft,"A",{href:!0,rel:!0});var zs=i(fe);hn=r(zs,"here"),zs.forEach(o),pn=r(ft,"."),ft.forEach(o),co=c(t),W=a(t,"H2",{class:!0});var To=i(W);te=a(To,"A",{id:!0,class:!0,href:!0});var $s=i(te);$t=a($s,"SPAN",{});var Gs=i($t);_(ge.$$.fragment,Gs),Gs.forEach(o),$s.forEach(o),mn=c(To),Gt=a(To,"SPAN",{});var qs=i(Gt);un=r(qs,"BertGenerationConfig"),qs.forEach(o),To.forEach(o),ho=c(t),$=a(t,"DIV",{class:!0});var L=i($);_(_e.$$.fragment,L),fn=c(L),U=a(L,"P",{});var gt=i(U);gn=r(gt,"This is the configuration class to store the configuration of a "),qt=a(gt,"CODE",{});var Ps=i(qt);_n=r(Ps,"BertGenerationPreTrainedModel"),Ps.forEach(o),bn=r(gt,`. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BertGeneration
`),be=a(gt,"A",{href:!0,rel:!0});var xs=i(be);vn=r(xs,"google/bert_for_seq_generation_L-24_bbc_encoder"),xs.forEach(o),kn=r(gt,`
architecture.`),gt.forEach(o),yn=c(L),H=a(L,"P",{});var _t=i(H);wn=r(_t,"Configuration objects inherit from "),st=a(_t,"A",{href:!0});var js=i(st);Tn=r(js,"PretrainedConfig"),js.forEach(o),En=r(_t,` and can be used to control the model outputs. Read the
documentation from `),at=a(_t,"A",{href:!0});var Cs=i(at);Bn=r(Cs,"PretrainedConfig"),Cs.forEach(o),zn=r(_t," for more information."),_t.forEach(o),$n=c(L),Pt=a(L,"P",{});var Ds=i(Pt);Gn=r(Ds,"Examples:"),Ds.forEach(o),qn=c(L),_(ve.$$.fragment,L),L.forEach(o),po=c(t),V=a(t,"H2",{class:!0});var Eo=i(V);oe=a(Eo,"A",{id:!0,class:!0,href:!0});var Ss=i(oe);xt=a(Ss,"SPAN",{});var As=i(xt);_(ke.$$.fragment,As),As.forEach(o),Ss.forEach(o),Pn=c(Eo),jt=a(Eo,"SPAN",{});var Ms=i(jt);xn=r(Ms,"BertGenerationTokenizer"),Ms.forEach(o),Eo.forEach(o),mo=c(t),C=a(t,"DIV",{class:!0});var ie=i(C);_(ye.$$.fragment,ie),jn=c(ie),we=a(ie,"P",{});var Bo=i(we);Cn=r(Bo,"Construct a BertGeneration tokenizer. Based on "),Te=a(Bo,"A",{href:!0,rel:!0});var Ns=i(Te);Dn=r(Ns,"SentencePiece"),Ns.forEach(o),Sn=r(Bo,"."),Bo.forEach(o),An=c(ie),Ee=a(ie,"P",{});var zo=i(Ee);Mn=r(zo,"This tokenizer inherits from "),it=a(zo,"A",{href:!0});var Ls=i(it);Nn=r(Ls,"PreTrainedTokenizer"),Ls.forEach(o),Ln=r(zo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),zo.forEach(o),Fn=c(ie),dt=a(ie,"DIV",{class:!0});var Fs=i(dt);_(Be.$$.fragment,Fs),Fs.forEach(o),ie.forEach(o),uo=c(t),J=a(t,"H2",{class:!0});var $o=i(J);ne=a($o,"A",{id:!0,class:!0,href:!0});var Is=i(ne);Ct=a(Is,"SPAN",{});var Os=i(Ct);_(ze.$$.fragment,Os),Os.forEach(o),Is.forEach(o),In=c($o),Dt=a($o,"SPAN",{});var Rs=i(Dt);On=r(Rs,"BertGenerationEncoder"),Rs.forEach(o),$o.forEach(o),fo=c(t),f=a(t,"DIV",{class:!0});var z=i(f);_($e.$$.fragment,z),Rn=c(z),St=a(z,"P",{});var Ws=i(St);Wn=r(Ws,"The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),Ws.forEach(o),Un=c(z),Ge=a(z,"P",{});var Go=i(Ge);Hn=r(Go,"This model inherits from "),lt=a(Go,"A",{href:!0});var Us=i(lt);Vn=r(Us,"PreTrainedModel"),Us.forEach(o),Jn=r(Go,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Go.forEach(o),Kn=c(z),qe=a(z,"P",{});var qo=i(qe);Qn=r(qo,"This model is also a PyTorch "),Pe=a(qo,"A",{href:!0,rel:!0});var Hs=i(Pe);Xn=r(Hs,"torch.nn.Module"),Hs.forEach(o),Yn=r(qo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qo.forEach(o),Zn=c(z),xe=a(z,"P",{});var Po=i(xe);er=r(Po,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),je=a(Po,"A",{href:!0,rel:!0});var Vs=i(je);tr=r(Vs,`Attention is
all you need`),Vs.forEach(o),or=r(Po,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Po.forEach(o),nr=c(z),K=a(z,"P",{});var bt=i(K);rr=r(bt,"This model should be used when leveraging Bert or Roberta checkpoints for the "),ct=a(bt,"A",{href:!0});var Js=i(ct);sr=r(Js,"EncoderDecoderModel"),Js.forEach(o),ar=r(bt,` class as
described in `),Ce=a(bt,"A",{href:!0,rel:!0});var Ks=i(Ce);ir=r(Ks,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Ks.forEach(o),dr=r(bt,`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),bt.forEach(o),lr=c(z),E=a(z,"P",{});var x=i(E);cr=r(x,"To behave as an decoder the model needs to be initialized with the "),At=a(x,"CODE",{});var Qs=i(At);hr=r(Qs,"is_decoder"),Qs.forEach(o),pr=r(x,` argument of the configuration set
to `),Mt=a(x,"CODE",{});var Xs=i(Mt);mr=r(Xs,"True"),Xs.forEach(o),ur=r(x,". To be used in a Seq2Seq model, the model needs to initialized with both "),Nt=a(x,"CODE",{});var Ys=i(Nt);fr=r(Ys,"is_decoder"),Ys.forEach(o),gr=r(x,` argument and
`),Lt=a(x,"CODE",{});var Zs=i(Lt);_r=r(Zs,"add_cross_attention"),Zs.forEach(o),br=r(x," set to "),Ft=a(x,"CODE",{});var ea=i(Ft);vr=r(ea,"True"),ea.forEach(o),kr=r(x,"; an "),It=a(x,"CODE",{});var ta=i(It);yr=r(ta,"encoder_hidden_states"),ta.forEach(o),wr=r(x," is then expected as an input to the forward pass."),x.forEach(o),Tr=c(z),q=a(z,"DIV",{class:!0});var F=i(q);_(De.$$.fragment,F),Er=c(F),Q=a(F,"P",{});var vt=i(Q);Br=r(vt,"The "),ht=a(vt,"A",{href:!0});var oa=i(ht);zr=r(oa,"BertGenerationEncoder"),oa.forEach(o),$r=r(vt," forward method, overrides the "),Ot=a(vt,"CODE",{});var na=i(Ot);Gr=r(na,"__call__"),na.forEach(o),qr=r(vt," special method."),vt.forEach(o),Pr=c(F),_(re.$$.fragment,F),xr=c(F),Rt=a(F,"P",{});var ra=i(Rt);jr=r(ra,"Example:"),ra.forEach(o),Cr=c(F),_(Se.$$.fragment,F),F.forEach(o),z.forEach(o),go=c(t),X=a(t,"H2",{class:!0});var xo=i(X);se=a(xo,"A",{id:!0,class:!0,href:!0});var sa=i(se);Wt=a(sa,"SPAN",{});var aa=i(Wt);_(Ae.$$.fragment,aa),aa.forEach(o),sa.forEach(o),Dr=c(xo),Ut=a(xo,"SPAN",{});var ia=i(Ut);Sr=r(ia,"BertGenerationDecoder"),ia.forEach(o),xo.forEach(o),_o=c(t),G=a(t,"DIV",{class:!0});var I=i(G);_(Me.$$.fragment,I),Ar=c(I),Ne=a(I,"P",{});var jo=i(Ne);Mr=r(jo,"BertGeneration Model with a "),Ht=a(jo,"CODE",{});var da=i(Ht);Nr=r(da,"language modeling"),da.forEach(o),Lr=r(jo," head on top for CLM fine-tuning."),jo.forEach(o),Fr=c(I),Le=a(I,"P",{});var Co=i(Le);Ir=r(Co,"This model inherits from "),pt=a(Co,"A",{href:!0});var la=i(pt);Or=r(la,"PreTrainedModel"),la.forEach(o),Rr=r(Co,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Co.forEach(o),Wr=c(I),Fe=a(I,"P",{});var Do=i(Fe);Ur=r(Do,"This model is also a PyTorch "),Ie=a(Do,"A",{href:!0,rel:!0});var ca=i(Ie);Hr=r(ca,"torch.nn.Module"),ca.forEach(o),Vr=r(Do,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Do.forEach(o),Jr=c(I),P=a(I,"DIV",{class:!0});var O=i(P);_(Oe.$$.fragment,O),Kr=c(O),Y=a(O,"P",{});var kt=i(Y);Qr=r(kt,"The "),mt=a(kt,"A",{href:!0});var ha=i(mt);Xr=r(ha,"BertGenerationDecoder"),ha.forEach(o),Yr=r(kt," forward method, overrides the "),Vt=a(kt,"CODE",{});var pa=i(Vt);Zr=r(pa,"__call__"),pa.forEach(o),es=r(kt," special method."),kt.forEach(o),ts=c(O),_(ae.$$.fragment,O),os=c(O),Jt=a(O,"P",{});var ma=i(Jt);ns=r(ma,"Example:"),ma.forEach(o),rs=c(O),_(Re.$$.fragment,O),O.forEach(o),I.forEach(o),this.h()},h(){d(m,"name","hf:doc:metadata"),d(m,"content",JSON.stringify(Ta)),d(B,"id","bertgeneration"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#bertgeneration"),d(u,"class","relative group"),d(Z,"id","overview"),d(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Z,"href","#overview"),d(R,"class","relative group"),d(Je,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),d(le,"href","https://arxiv.org/abs/1907.12461"),d(le,"rel","nofollow"),d(Ze,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),d(tt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),d(nt,"href","/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),d(rt,"href","/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),d(ue,"href","https://huggingface.co/patrickvonplaten"),d(ue,"rel","nofollow"),d(fe,"href","https://tfhub.dev/s?module-type=text-generation&subtype=module,placeholder"),d(fe,"rel","nofollow"),d(te,"id","transformers.BertGenerationConfig"),d(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(te,"href","#transformers.BertGenerationConfig"),d(W,"class","relative group"),d(be,"href","https://huggingface.co/google/bert_for_seq_generation_L-24_bbc_encoder"),d(be,"rel","nofollow"),d(st,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(at,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(oe,"id","transformers.BertGenerationTokenizer"),d(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(oe,"href","#transformers.BertGenerationTokenizer"),d(V,"class","relative group"),d(Te,"href","https://github.com/google/sentencepiece"),d(Te,"rel","nofollow"),d(it,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ne,"id","transformers.BertGenerationEncoder"),d(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ne,"href","#transformers.BertGenerationEncoder"),d(J,"class","relative group"),d(lt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Pe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Pe,"rel","nofollow"),d(je,"href","https://arxiv.org/abs/1706.03762"),d(je,"rel","nofollow"),d(ct,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),d(Ce,"href","https://arxiv.org/abs/1907.12461"),d(Ce,"rel","nofollow"),d(ht,"href","/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(se,"id","transformers.BertGenerationDecoder"),d(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(se,"href","#transformers.BertGenerationDecoder"),d(X,"class","relative group"),d(pt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ie,"rel","nofollow"),d(mt,"href","/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,m),p(t,D,h),p(t,u,h),e(u,B),e(B,j),b(w,j,null),e(u,T),e(u,S),e(S,So),p(t,Xt,h),p(t,R,h),e(R,Z),e(Z,wt),b(de,wt,null),e(R,Ao),e(R,Tt),e(Tt,Mo),p(t,Yt,h),p(t,A,h),e(A,No),e(A,Je),e(Je,Lo),e(A,Fo),e(A,le),e(le,Io),e(A,Oo),p(t,Zt,h),p(t,Ke,h),e(Ke,Ro),p(t,eo,h),p(t,Qe,h),e(Qe,Et),e(Et,Wo),p(t,to,h),p(t,Xe,h),e(Xe,Uo),p(t,oo,h),p(t,Ye,h),e(Ye,ce),e(ce,Ho),e(ce,Ze),e(Ze,Vo),e(ce,Jo),p(t,no,h),b(he,t,h),p(t,ro,h),p(t,et,h),e(et,pe),e(pe,Ko),e(pe,tt),e(tt,Qo),e(pe,Xo),p(t,so,h),b(me,t,h),p(t,ao,h),p(t,ot,h),e(ot,Yo),p(t,io,h),p(t,ee,h),e(ee,M),e(M,nt),e(nt,Zo),e(M,en),e(M,rt),e(rt,tn),e(M,on),e(M,Bt),e(Bt,nn),e(M,rn),e(ee,sn),e(ee,zt),e(zt,an),p(t,lo,h),p(t,N,h),e(N,dn),e(N,ue),e(ue,ln),e(N,cn),e(N,fe),e(fe,hn),e(N,pn),p(t,co,h),p(t,W,h),e(W,te),e(te,$t),b(ge,$t,null),e(W,mn),e(W,Gt),e(Gt,un),p(t,ho,h),p(t,$,h),b(_e,$,null),e($,fn),e($,U),e(U,gn),e(U,qt),e(qt,_n),e(U,bn),e(U,be),e(be,vn),e(U,kn),e($,yn),e($,H),e(H,wn),e(H,st),e(st,Tn),e(H,En),e(H,at),e(at,Bn),e(H,zn),e($,$n),e($,Pt),e(Pt,Gn),e($,qn),b(ve,$,null),p(t,po,h),p(t,V,h),e(V,oe),e(oe,xt),b(ke,xt,null),e(V,Pn),e(V,jt),e(jt,xn),p(t,mo,h),p(t,C,h),b(ye,C,null),e(C,jn),e(C,we),e(we,Cn),e(we,Te),e(Te,Dn),e(we,Sn),e(C,An),e(C,Ee),e(Ee,Mn),e(Ee,it),e(it,Nn),e(Ee,Ln),e(C,Fn),e(C,dt),b(Be,dt,null),p(t,uo,h),p(t,J,h),e(J,ne),e(ne,Ct),b(ze,Ct,null),e(J,In),e(J,Dt),e(Dt,On),p(t,fo,h),p(t,f,h),b($e,f,null),e(f,Rn),e(f,St),e(St,Wn),e(f,Un),e(f,Ge),e(Ge,Hn),e(Ge,lt),e(lt,Vn),e(Ge,Jn),e(f,Kn),e(f,qe),e(qe,Qn),e(qe,Pe),e(Pe,Xn),e(qe,Yn),e(f,Zn),e(f,xe),e(xe,er),e(xe,je),e(je,tr),e(xe,or),e(f,nr),e(f,K),e(K,rr),e(K,ct),e(ct,sr),e(K,ar),e(K,Ce),e(Ce,ir),e(K,dr),e(f,lr),e(f,E),e(E,cr),e(E,At),e(At,hr),e(E,pr),e(E,Mt),e(Mt,mr),e(E,ur),e(E,Nt),e(Nt,fr),e(E,gr),e(E,Lt),e(Lt,_r),e(E,br),e(E,Ft),e(Ft,vr),e(E,kr),e(E,It),e(It,yr),e(E,wr),e(f,Tr),e(f,q),b(De,q,null),e(q,Er),e(q,Q),e(Q,Br),e(Q,ht),e(ht,zr),e(Q,$r),e(Q,Ot),e(Ot,Gr),e(Q,qr),e(q,Pr),b(re,q,null),e(q,xr),e(q,Rt),e(Rt,jr),e(q,Cr),b(Se,q,null),p(t,go,h),p(t,X,h),e(X,se),e(se,Wt),b(Ae,Wt,null),e(X,Dr),e(X,Ut),e(Ut,Sr),p(t,_o,h),p(t,G,h),b(Me,G,null),e(G,Ar),e(G,Ne),e(Ne,Mr),e(Ne,Ht),e(Ht,Nr),e(Ne,Lr),e(G,Fr),e(G,Le),e(Le,Ir),e(Le,pt),e(pt,Or),e(Le,Rr),e(G,Wr),e(G,Fe),e(Fe,Ur),e(Fe,Ie),e(Ie,Hr),e(Fe,Vr),e(G,Jr),e(G,P),b(Oe,P,null),e(P,Kr),e(P,Y),e(Y,Qr),e(Y,mt),e(mt,Xr),e(Y,Yr),e(Y,Vt),e(Vt,Zr),e(Y,es),e(P,ts),b(ae,P,null),e(P,os),e(P,Jt),e(Jt,ns),e(P,rs),b(Re,P,null),bo=!0},p(t,[h]){const We={};h&2&&(We.$$scope={dirty:h,ctx:t}),re.$set(We);const Kt={};h&2&&(Kt.$$scope={dirty:h,ctx:t}),ae.$set(Kt)},i(t){bo||(v(w.$$.fragment,t),v(de.$$.fragment,t),v(he.$$.fragment,t),v(me.$$.fragment,t),v(ge.$$.fragment,t),v(_e.$$.fragment,t),v(ve.$$.fragment,t),v(ke.$$.fragment,t),v(ye.$$.fragment,t),v(Be.$$.fragment,t),v(ze.$$.fragment,t),v($e.$$.fragment,t),v(De.$$.fragment,t),v(re.$$.fragment,t),v(Se.$$.fragment,t),v(Ae.$$.fragment,t),v(Me.$$.fragment,t),v(Oe.$$.fragment,t),v(ae.$$.fragment,t),v(Re.$$.fragment,t),bo=!0)},o(t){k(w.$$.fragment,t),k(de.$$.fragment,t),k(he.$$.fragment,t),k(me.$$.fragment,t),k(ge.$$.fragment,t),k(_e.$$.fragment,t),k(ve.$$.fragment,t),k(ke.$$.fragment,t),k(ye.$$.fragment,t),k(Be.$$.fragment,t),k(ze.$$.fragment,t),k($e.$$.fragment,t),k(De.$$.fragment,t),k(re.$$.fragment,t),k(Se.$$.fragment,t),k(Ae.$$.fragment,t),k(Me.$$.fragment,t),k(Oe.$$.fragment,t),k(ae.$$.fragment,t),k(Re.$$.fragment,t),bo=!1},d(t){o(m),t&&o(D),t&&o(u),y(w),t&&o(Xt),t&&o(R),y(de),t&&o(Yt),t&&o(A),t&&o(Zt),t&&o(Ke),t&&o(eo),t&&o(Qe),t&&o(to),t&&o(Xe),t&&o(oo),t&&o(Ye),t&&o(no),y(he,t),t&&o(ro),t&&o(et),t&&o(so),y(me,t),t&&o(ao),t&&o(ot),t&&o(io),t&&o(ee),t&&o(lo),t&&o(N),t&&o(co),t&&o(W),y(ge),t&&o(ho),t&&o($),y(_e),y(ve),t&&o(po),t&&o(V),y(ke),t&&o(mo),t&&o(C),y(ye),y(Be),t&&o(uo),t&&o(J),y(ze),t&&o(fo),t&&o(f),y($e),y(De),y(re),y(Se),t&&o(go),t&&o(X),y(Ae),t&&o(_o),t&&o(G),y(Me),y(Oe),y(ae),y(Re)}}}const Ta={local:"bertgeneration",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertGenerationConfig",title:"BertGenerationConfig"},{local:"transformers.BertGenerationTokenizer",title:"BertGenerationTokenizer"},{local:"transformers.BertGenerationEncoder",title:"BertGenerationEncoder"},{local:"transformers.BertGenerationDecoder",title:"BertGenerationDecoder"}],title:"BertGeneration"};function Ea(Ve){return va(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pa extends fa{constructor(m){super();ga(this,m,Ea,wa,_a,{})}}export{Pa as default,Ta as metadata};
