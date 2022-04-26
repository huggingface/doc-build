import{S as ta,i as oa,s as na,e as s,k as h,w as k,t as n,M as ra,c as a,d as o,m as p,a as i,x as w,h as r,b as l,F as e,g as m,y as T,q as y,o as $,B as E,v as sa,L as Qr}from"../../chunks/vendor-6b77c823.js";import{T as ea}from"../../chunks/Tip-39098574.js";import{D as Ve}from"../../chunks/Docstring-1088f2fb.js";import{C as Jt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as kt}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Kr}from"../../chunks/ExampleCodeBlock-5212b321.js";function aa(j){let u,v,_,f,b;return f=new Jt({props:{code:`from transformers import BertGenerationConfig, BertGenerationEncoder

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){u=s("p"),v=n("Examples:"),_=h(),k(f.$$.fragment)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Examples:"),g.forEach(o),_=p(d),w(f.$$.fragment,d)},m(d,g){m(d,u,g),e(u,v),m(d,_,g),T(f,d,g),b=!0},p:Qr,i(d){b||(y(f.$$.fragment,d),b=!0)},o(d){$(f.$$.fragment,d),b=!1},d(d){d&&o(u),d&&o(_),E(f,d)}}}function ia(j){let u,v,_,f,b;return{c(){u=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var M=i(_);f=r(M,"Module"),M.forEach(o),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){m(d,u,g),e(u,v),e(u,_),e(_,f),e(u,b)},d(d){d&&o(u)}}}function da(j){let u,v,_,f,b;return f=new Jt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationEncoder
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){u=s("p"),v=n("Example:"),_=h(),k(f.$$.fragment)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Example:"),g.forEach(o),_=p(d),w(f.$$.fragment,d)},m(d,g){m(d,u,g),e(u,v),m(d,_,g),T(f,d,g),b=!0},p:Qr,i(d){b||(y(f.$$.fragment,d),b=!0)},o(d){$(f.$$.fragment,d),b=!1},d(d){d&&o(u),d&&o(_),E(f,d)}}}function la(j){let u,v,_,f,b;return{c(){u=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var M=i(_);f=r(M,"Module"),M.forEach(o),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){m(d,u,g),e(u,v),e(u,_),e(_,f),e(u,b)},d(d){d&&o(u)}}}function ca(j){let u,v,_,f,b;return f=new Jt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationDecoder, BertGenerationConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){u=s("p"),v=n("Example:"),_=h(),k(f.$$.fragment)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Example:"),g.forEach(o),_=p(d),w(f.$$.fragment,d)},m(d,g){m(d,u,g),e(u,v),m(d,_,g),T(f,d,g),b=!0},p:Qr,i(d){b||(y(f.$$.fragment,d),b=!0)},o(d){$(f.$$.fragment,d),b=!1},d(d){d&&o(u),d&&o(_),E(f,d)}}}function ha(j){let u,v,_,f,b,d,g,M,jo,Kt,O,Q,wt,he,Do,Tt,So,Qt,A,Mo,Je,Ao,No,pe,Lo,Fo,Xt,Ke,Oo,Yt,Qe,yt,Io,Zt,Xe,Ro,eo,Ye,ue,Wo,Ze,Uo,Ho,to,me,oo,et,fe,Vo,tt,Jo,Ko,no,ge,ro,ot,Qo,so,X,N,nt,Xo,Yo,rt,Zo,en,$t,tn,on,nn,Et,rn,ao,L,sn,_e,an,dn,be,ln,cn,io,I,Y,Bt,ve,hn,zt,pn,lo,P,ke,un,we,mn,Gt,fn,gn,_n,R,bn,st,vn,kn,at,wn,Tn,yn,Z,co,W,ee,qt,Te,$n,xt,En,ho,C,ye,Bn,$e,zn,Ee,Gn,qn,xn,Be,Pn,it,Cn,jn,Dn,dt,ze,po,U,te,Pt,Ge,Sn,Ct,Mn,uo,B,qe,An,jt,Nn,Ln,xe,Fn,lt,On,In,Rn,Pe,Wn,Ce,Un,Hn,Vn,je,Jn,De,Kn,Qn,Xn,H,Yn,ct,Zn,er,Se,tr,or,nr,z,rr,Dt,sr,ar,St,ir,dr,Mt,lr,cr,At,hr,pr,Nt,ur,mr,Lt,fr,gr,_r,D,Me,br,V,vr,ht,kr,wr,Ft,Tr,yr,$r,oe,Er,ne,mo,J,re,Ot,Ae,Br,It,zr,fo,q,Ne,Gr,Le,qr,Rt,xr,Pr,Cr,Fe,jr,pt,Dr,Sr,Mr,Oe,Ar,Ie,Nr,Lr,Fr,S,Re,Or,K,Ir,ut,Rr,Wr,Wt,Ur,Hr,Vr,se,Jr,ae,go;return d=new kt({}),he=new kt({}),me=new Jt({props:{code:`# leverage checkpoints for Bert2Bert model...
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),ge=new Jt({props:{code:`# instantiate sentence fusion model
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

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))`}}),ve=new kt({}),ke=new Ve({props:{name:"class transformers.BertGenerationConfig",anchor:"transformers.BertGenerationConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"intermediate_size",val:" = 4096"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
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
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert_generation/configuration_bert_generation.py#L20"}}),Z=new Kr({props:{anchor:"transformers.BertGenerationConfig.example",$$slots:{default:[aa]},$$scope:{ctx:j}}}),Te=new kt({}),ye=new Ve({props:{name:"class transformers.BertGenerationTokenizer",anchor:"transformers.BertGenerationTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '<::::>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert_generation/tokenization_bert_generation.py#L41"}}),ze=new Ve({props:{name:"save_vocabulary",anchor:"transformers.BertGenerationTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert_generation/tokenization_bert_generation.py#L155"}}),Ge=new kt({}),qe=new Ve({props:{name:"class transformers.BertGenerationEncoder",anchor:"transformers.BertGenerationEncoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert_generation/modeling_bert_generation.py#L253"}}),Me=new Ve({props:{name:"forward",anchor:"transformers.BertGenerationEncoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert-generation#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationEncoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert_generation/modeling_bert_generation.py#L294",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/bert-generation#transformers.BertGenerationConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oe=new ea({props:{$$slots:{default:[ia]},$$scope:{ctx:j}}}),ne=new Kr({props:{anchor:"transformers.BertGenerationEncoder.forward.example",$$slots:{default:[da]},$$scope:{ctx:j}}}),Ae=new kt({}),Ne=new Ve({props:{name:"class transformers.BertGenerationDecoder",anchor:"transformers.BertGenerationDecoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert_generation/modeling_bert_generation.py#L442"}}),Re=new Ve({props:{name:"forward",anchor:"transformers.BertGenerationDecoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert-generation#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationDecoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert_generation/modeling_bert_generation.py#L461",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/bert-generation#transformers.BertGenerationConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),se=new ea({props:{$$slots:{default:[la]},$$scope:{ctx:j}}}),ae=new Kr({props:{anchor:"transformers.BertGenerationDecoder.forward.example",$$slots:{default:[ca]},$$scope:{ctx:j}}}),{c(){u=s("meta"),v=h(),_=s("h1"),f=s("a"),b=s("span"),k(d.$$.fragment),g=h(),M=s("span"),jo=n("BertGeneration"),Kt=h(),O=s("h2"),Q=s("a"),wt=s("span"),k(he.$$.fragment),Do=h(),Tt=s("span"),So=n("Overview"),Qt=h(),A=s("p"),Mo=n(`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Je=s("a"),Ao=n("EncoderDecoderModel"),No=n(" as proposed in "),pe=s("a"),Lo=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Fo=n(" by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),Xt=h(),Ke=s("p"),Oo=n("The abstract from the paper is the following:"),Yt=h(),Qe=s("p"),yt=s("em"),Io=n(`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),Zt=h(),Xe=s("p"),Ro=n("Usage:"),eo=h(),Ye=s("ul"),ue=s("li"),Wo=n("The model can be used in combination with the "),Ze=s("a"),Uo=n("EncoderDecoderModel"),Ho=n(` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),to=h(),k(me.$$.fragment),oo=h(),et=s("ul"),fe=s("li"),Vo=n("Pretrained "),tt=s("a"),Jo=n("EncoderDecoderModel"),Ko=n(" are also directly available in the model hub, e.g.,"),no=h(),k(ge.$$.fragment),ro=h(),ot=s("p"),Qo=n("Tips:"),so=h(),X=s("ul"),N=s("li"),nt=s("a"),Xo=n("BertGenerationEncoder"),Yo=n(" and "),rt=s("a"),Zo=n("BertGenerationDecoder"),en=n(` should be used in
combination with `),$t=s("code"),tn=n("EncoderDecoder"),on=n("."),nn=h(),Et=s("li"),rn=n(`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),ao=h(),L=s("p"),sn=n("This model was contributed by "),_e=s("a"),an=n("patrickvonplaten"),dn=n(`. The original code can be
found `),be=s("a"),ln=n("here"),cn=n("."),io=h(),I=s("h2"),Y=s("a"),Bt=s("span"),k(ve.$$.fragment),hn=h(),zt=s("span"),pn=n("BertGenerationConfig"),lo=h(),P=s("div"),k(ke.$$.fragment),un=h(),we=s("p"),mn=n("This is the configuration class to store the configuration of a "),Gt=s("code"),fn=n("BertGenerationPreTrainedModel"),gn=n(`. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.`),_n=h(),R=s("p"),bn=n("Configuration objects inherit from "),st=s("a"),vn=n("PretrainedConfig"),kn=n(` and can be used to control the model outputs. Read the
documentation from `),at=s("a"),wn=n("PretrainedConfig"),Tn=n(" for more information."),yn=h(),k(Z.$$.fragment),co=h(),W=s("h2"),ee=s("a"),qt=s("span"),k(Te.$$.fragment),$n=h(),xt=s("span"),En=n("BertGenerationTokenizer"),ho=h(),C=s("div"),k(ye.$$.fragment),Bn=h(),$e=s("p"),zn=n("Construct a BertGeneration tokenizer. Based on "),Ee=s("a"),Gn=n("SentencePiece"),qn=n("."),xn=h(),Be=s("p"),Pn=n("This tokenizer inherits from "),it=s("a"),Cn=n("PreTrainedTokenizer"),jn=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Dn=h(),dt=s("div"),k(ze.$$.fragment),po=h(),U=s("h2"),te=s("a"),Pt=s("span"),k(Ge.$$.fragment),Sn=h(),Ct=s("span"),Mn=n("BertGenerationEncoder"),uo=h(),B=s("div"),k(qe.$$.fragment),An=h(),jt=s("p"),Nn=n("The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),Ln=h(),xe=s("p"),Fn=n("This model inherits from "),lt=s("a"),On=n("PreTrainedModel"),In=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rn=h(),Pe=s("p"),Wn=n("This model is also a PyTorch "),Ce=s("a"),Un=n("torch.nn.Module"),Hn=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vn=h(),je=s("p"),Jn=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),De=s("a"),Kn=n(`Attention is
all you need`),Qn=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Xn=h(),H=s("p"),Yn=n("This model should be used when leveraging Bert or Roberta checkpoints for the "),ct=s("a"),Zn=n("EncoderDecoderModel"),er=n(` class as
described in `),Se=s("a"),tr=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),or=n(`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),nr=h(),z=s("p"),rr=n("To behave as an decoder the model needs to be initialized with the "),Dt=s("code"),sr=n("is_decoder"),ar=n(` argument of the configuration set
to `),St=s("code"),ir=n("True"),dr=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Mt=s("code"),lr=n("is_decoder"),cr=n(` argument and
`),At=s("code"),hr=n("add_cross_attention"),pr=n(" set to "),Nt=s("code"),ur=n("True"),mr=n("; an "),Lt=s("code"),fr=n("encoder_hidden_states"),gr=n(" is then expected as an input to the forward pass."),_r=h(),D=s("div"),k(Me.$$.fragment),br=h(),V=s("p"),vr=n("The "),ht=s("a"),kr=n("BertGenerationEncoder"),wr=n(" forward method, overrides the "),Ft=s("code"),Tr=n("__call__"),yr=n(" special method."),$r=h(),k(oe.$$.fragment),Er=h(),k(ne.$$.fragment),mo=h(),J=s("h2"),re=s("a"),Ot=s("span"),k(Ae.$$.fragment),Br=h(),It=s("span"),zr=n("BertGenerationDecoder"),fo=h(),q=s("div"),k(Ne.$$.fragment),Gr=h(),Le=s("p"),qr=n("BertGeneration Model with a "),Rt=s("code"),xr=n("language modeling"),Pr=n(" head on top for CLM fine-tuning."),Cr=h(),Fe=s("p"),jr=n("This model inherits from "),pt=s("a"),Dr=n("PreTrainedModel"),Sr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mr=h(),Oe=s("p"),Ar=n("This model is also a PyTorch "),Ie=s("a"),Nr=n("torch.nn.Module"),Lr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fr=h(),S=s("div"),k(Re.$$.fragment),Or=h(),K=s("p"),Ir=n("The "),ut=s("a"),Rr=n("BertGenerationDecoder"),Wr=n(" forward method, overrides the "),Wt=s("code"),Ur=n("__call__"),Hr=n(" special method."),Vr=h(),k(se.$$.fragment),Jr=h(),k(ae.$$.fragment),this.h()},l(t){const c=ra('[data-svelte="svelte-1phssyn"]',document.head);u=a(c,"META",{name:!0,content:!0}),c.forEach(o),v=p(t),_=a(t,"H1",{class:!0});var We=i(_);f=a(We,"A",{id:!0,class:!0,href:!0});var Ut=i(f);b=a(Ut,"SPAN",{});var Ht=i(b);w(d.$$.fragment,Ht),Ht.forEach(o),Ut.forEach(o),g=p(We),M=a(We,"SPAN",{});var Vt=i(M);jo=r(Vt,"BertGeneration"),Vt.forEach(o),We.forEach(o),Kt=p(t),O=a(t,"H2",{class:!0});var Ue=i(O);Q=a(Ue,"A",{id:!0,class:!0,href:!0});var Xr=i(Q);wt=a(Xr,"SPAN",{});var Yr=i(wt);w(he.$$.fragment,Yr),Yr.forEach(o),Xr.forEach(o),Do=p(Ue),Tt=a(Ue,"SPAN",{});var Zr=i(Tt);So=r(Zr,"Overview"),Zr.forEach(o),Ue.forEach(o),Qt=p(t),A=a(t,"P",{});var mt=i(A);Mo=r(mt,`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Je=a(mt,"A",{href:!0});var es=i(Je);Ao=r(es,"EncoderDecoderModel"),es.forEach(o),No=r(mt," as proposed in "),pe=a(mt,"A",{href:!0,rel:!0});var ts=i(pe);Lo=r(ts,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ts.forEach(o),Fo=r(mt," by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),mt.forEach(o),Xt=p(t),Ke=a(t,"P",{});var os=i(Ke);Oo=r(os,"The abstract from the paper is the following:"),os.forEach(o),Yt=p(t),Qe=a(t,"P",{});var ns=i(Qe);yt=a(ns,"EM",{});var rs=i(yt);Io=r(rs,`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),rs.forEach(o),ns.forEach(o),Zt=p(t),Xe=a(t,"P",{});var ss=i(Xe);Ro=r(ss,"Usage:"),ss.forEach(o),eo=p(t),Ye=a(t,"UL",{});var as=i(Ye);ue=a(as,"LI",{});var _o=i(ue);Wo=r(_o,"The model can be used in combination with the "),Ze=a(_o,"A",{href:!0});var is=i(Ze);Uo=r(is,"EncoderDecoderModel"),is.forEach(o),Ho=r(_o,` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),_o.forEach(o),as.forEach(o),to=p(t),w(me.$$.fragment,t),oo=p(t),et=a(t,"UL",{});var ds=i(et);fe=a(ds,"LI",{});var bo=i(fe);Vo=r(bo,"Pretrained "),tt=a(bo,"A",{href:!0});var ls=i(tt);Jo=r(ls,"EncoderDecoderModel"),ls.forEach(o),Ko=r(bo," are also directly available in the model hub, e.g.,"),bo.forEach(o),ds.forEach(o),no=p(t),w(ge.$$.fragment,t),ro=p(t),ot=a(t,"P",{});var cs=i(ot);Qo=r(cs,"Tips:"),cs.forEach(o),so=p(t),X=a(t,"UL",{});var vo=i(X);N=a(vo,"LI",{});var He=i(N);nt=a(He,"A",{href:!0});var hs=i(nt);Xo=r(hs,"BertGenerationEncoder"),hs.forEach(o),Yo=r(He," and "),rt=a(He,"A",{href:!0});var ps=i(rt);Zo=r(ps,"BertGenerationDecoder"),ps.forEach(o),en=r(He,` should be used in
combination with `),$t=a(He,"CODE",{});var us=i($t);tn=r(us,"EncoderDecoder"),us.forEach(o),on=r(He,"."),He.forEach(o),nn=p(vo),Et=a(vo,"LI",{});var ms=i(Et);rn=r(ms,`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),ms.forEach(o),vo.forEach(o),ao=p(t),L=a(t,"P",{});var ft=i(L);sn=r(ft,"This model was contributed by "),_e=a(ft,"A",{href:!0,rel:!0});var fs=i(_e);an=r(fs,"patrickvonplaten"),fs.forEach(o),dn=r(ft,`. The original code can be
found `),be=a(ft,"A",{href:!0,rel:!0});var gs=i(be);ln=r(gs,"here"),gs.forEach(o),cn=r(ft,"."),ft.forEach(o),io=p(t),I=a(t,"H2",{class:!0});var ko=i(I);Y=a(ko,"A",{id:!0,class:!0,href:!0});var _s=i(Y);Bt=a(_s,"SPAN",{});var bs=i(Bt);w(ve.$$.fragment,bs),bs.forEach(o),_s.forEach(o),hn=p(ko),zt=a(ko,"SPAN",{});var vs=i(zt);pn=r(vs,"BertGenerationConfig"),vs.forEach(o),ko.forEach(o),lo=p(t),P=a(t,"DIV",{class:!0});var ie=i(P);w(ke.$$.fragment,ie),un=p(ie),we=a(ie,"P",{});var wo=i(we);mn=r(wo,"This is the configuration class to store the configuration of a "),Gt=a(wo,"CODE",{});var ks=i(Gt);fn=r(ks,"BertGenerationPreTrainedModel"),ks.forEach(o),gn=r(wo,`. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.`),wo.forEach(o),_n=p(ie),R=a(ie,"P",{});var gt=i(R);bn=r(gt,"Configuration objects inherit from "),st=a(gt,"A",{href:!0});var ws=i(st);vn=r(ws,"PretrainedConfig"),ws.forEach(o),kn=r(gt,` and can be used to control the model outputs. Read the
documentation from `),at=a(gt,"A",{href:!0});var Ts=i(at);wn=r(Ts,"PretrainedConfig"),Ts.forEach(o),Tn=r(gt," for more information."),gt.forEach(o),yn=p(ie),w(Z.$$.fragment,ie),ie.forEach(o),co=p(t),W=a(t,"H2",{class:!0});var To=i(W);ee=a(To,"A",{id:!0,class:!0,href:!0});var ys=i(ee);qt=a(ys,"SPAN",{});var $s=i(qt);w(Te.$$.fragment,$s),$s.forEach(o),ys.forEach(o),$n=p(To),xt=a(To,"SPAN",{});var Es=i(xt);En=r(Es,"BertGenerationTokenizer"),Es.forEach(o),To.forEach(o),ho=p(t),C=a(t,"DIV",{class:!0});var de=i(C);w(ye.$$.fragment,de),Bn=p(de),$e=a(de,"P",{});var yo=i($e);zn=r(yo,"Construct a BertGeneration tokenizer. Based on "),Ee=a(yo,"A",{href:!0,rel:!0});var Bs=i(Ee);Gn=r(Bs,"SentencePiece"),Bs.forEach(o),qn=r(yo,"."),yo.forEach(o),xn=p(de),Be=a(de,"P",{});var $o=i(Be);Pn=r($o,"This tokenizer inherits from "),it=a($o,"A",{href:!0});var zs=i(it);Cn=r(zs,"PreTrainedTokenizer"),zs.forEach(o),jn=r($o,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),$o.forEach(o),Dn=p(de),dt=a(de,"DIV",{class:!0});var Gs=i(dt);w(ze.$$.fragment,Gs),Gs.forEach(o),de.forEach(o),po=p(t),U=a(t,"H2",{class:!0});var Eo=i(U);te=a(Eo,"A",{id:!0,class:!0,href:!0});var qs=i(te);Pt=a(qs,"SPAN",{});var xs=i(Pt);w(Ge.$$.fragment,xs),xs.forEach(o),qs.forEach(o),Sn=p(Eo),Ct=a(Eo,"SPAN",{});var Ps=i(Ct);Mn=r(Ps,"BertGenerationEncoder"),Ps.forEach(o),Eo.forEach(o),uo=p(t),B=a(t,"DIV",{class:!0});var G=i(B);w(qe.$$.fragment,G),An=p(G),jt=a(G,"P",{});var Cs=i(jt);Nn=r(Cs,"The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),Cs.forEach(o),Ln=p(G),xe=a(G,"P",{});var Bo=i(xe);Fn=r(Bo,"This model inherits from "),lt=a(Bo,"A",{href:!0});var js=i(lt);On=r(js,"PreTrainedModel"),js.forEach(o),In=r(Bo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bo.forEach(o),Rn=p(G),Pe=a(G,"P",{});var zo=i(Pe);Wn=r(zo,"This model is also a PyTorch "),Ce=a(zo,"A",{href:!0,rel:!0});var Ds=i(Ce);Un=r(Ds,"torch.nn.Module"),Ds.forEach(o),Hn=r(zo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zo.forEach(o),Vn=p(G),je=a(G,"P",{});var Go=i(je);Jn=r(Go,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),De=a(Go,"A",{href:!0,rel:!0});var Ss=i(De);Kn=r(Ss,`Attention is
all you need`),Ss.forEach(o),Qn=r(Go,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Go.forEach(o),Xn=p(G),H=a(G,"P",{});var _t=i(H);Yn=r(_t,"This model should be used when leveraging Bert or Roberta checkpoints for the "),ct=a(_t,"A",{href:!0});var Ms=i(ct);Zn=r(Ms,"EncoderDecoderModel"),Ms.forEach(o),er=r(_t,` class as
described in `),Se=a(_t,"A",{href:!0,rel:!0});var As=i(Se);tr=r(As,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),As.forEach(o),or=r(_t,`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),_t.forEach(o),nr=p(G),z=a(G,"P",{});var x=i(z);rr=r(x,"To behave as an decoder the model needs to be initialized with the "),Dt=a(x,"CODE",{});var Ns=i(Dt);sr=r(Ns,"is_decoder"),Ns.forEach(o),ar=r(x,` argument of the configuration set
to `),St=a(x,"CODE",{});var Ls=i(St);ir=r(Ls,"True"),Ls.forEach(o),dr=r(x,". To be used in a Seq2Seq model, the model needs to initialized with both "),Mt=a(x,"CODE",{});var Fs=i(Mt);lr=r(Fs,"is_decoder"),Fs.forEach(o),cr=r(x,` argument and
`),At=a(x,"CODE",{});var Os=i(At);hr=r(Os,"add_cross_attention"),Os.forEach(o),pr=r(x," set to "),Nt=a(x,"CODE",{});var Is=i(Nt);ur=r(Is,"True"),Is.forEach(o),mr=r(x,"; an "),Lt=a(x,"CODE",{});var Rs=i(Lt);fr=r(Rs,"encoder_hidden_states"),Rs.forEach(o),gr=r(x," is then expected as an input to the forward pass."),x.forEach(o),_r=p(G),D=a(G,"DIV",{class:!0});var le=i(D);w(Me.$$.fragment,le),br=p(le),V=a(le,"P",{});var bt=i(V);vr=r(bt,"The "),ht=a(bt,"A",{href:!0});var Ws=i(ht);kr=r(Ws,"BertGenerationEncoder"),Ws.forEach(o),wr=r(bt," forward method, overrides the "),Ft=a(bt,"CODE",{});var Us=i(Ft);Tr=r(Us,"__call__"),Us.forEach(o),yr=r(bt," special method."),bt.forEach(o),$r=p(le),w(oe.$$.fragment,le),Er=p(le),w(ne.$$.fragment,le),le.forEach(o),G.forEach(o),mo=p(t),J=a(t,"H2",{class:!0});var qo=i(J);re=a(qo,"A",{id:!0,class:!0,href:!0});var Hs=i(re);Ot=a(Hs,"SPAN",{});var Vs=i(Ot);w(Ae.$$.fragment,Vs),Vs.forEach(o),Hs.forEach(o),Br=p(qo),It=a(qo,"SPAN",{});var Js=i(It);zr=r(Js,"BertGenerationDecoder"),Js.forEach(o),qo.forEach(o),fo=p(t),q=a(t,"DIV",{class:!0});var F=i(q);w(Ne.$$.fragment,F),Gr=p(F),Le=a(F,"P",{});var xo=i(Le);qr=r(xo,"BertGeneration Model with a "),Rt=a(xo,"CODE",{});var Ks=i(Rt);xr=r(Ks,"language modeling"),Ks.forEach(o),Pr=r(xo," head on top for CLM fine-tuning."),xo.forEach(o),Cr=p(F),Fe=a(F,"P",{});var Po=i(Fe);jr=r(Po,"This model inherits from "),pt=a(Po,"A",{href:!0});var Qs=i(pt);Dr=r(Qs,"PreTrainedModel"),Qs.forEach(o),Sr=r(Po,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Po.forEach(o),Mr=p(F),Oe=a(F,"P",{});var Co=i(Oe);Ar=r(Co,"This model is also a PyTorch "),Ie=a(Co,"A",{href:!0,rel:!0});var Xs=i(Ie);Nr=r(Xs,"torch.nn.Module"),Xs.forEach(o),Lr=r(Co,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Co.forEach(o),Fr=p(F),S=a(F,"DIV",{class:!0});var ce=i(S);w(Re.$$.fragment,ce),Or=p(ce),K=a(ce,"P",{});var vt=i(K);Ir=r(vt,"The "),ut=a(vt,"A",{href:!0});var Ys=i(ut);Rr=r(Ys,"BertGenerationDecoder"),Ys.forEach(o),Wr=r(vt," forward method, overrides the "),Wt=a(vt,"CODE",{});var Zs=i(Wt);Ur=r(Zs,"__call__"),Zs.forEach(o),Hr=r(vt," special method."),vt.forEach(o),Vr=p(ce),w(se.$$.fragment,ce),Jr=p(ce),w(ae.$$.fragment,ce),ce.forEach(o),F.forEach(o),this.h()},h(){l(u,"name","hf:doc:metadata"),l(u,"content",JSON.stringify(pa)),l(f,"id","bertgeneration"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#bertgeneration"),l(_,"class","relative group"),l(Q,"id","overview"),l(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Q,"href","#overview"),l(O,"class","relative group"),l(Je,"href","/docs/transformers/v4.18.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(pe,"href","https://arxiv.org/abs/1907.12461"),l(pe,"rel","nofollow"),l(Ze,"href","/docs/transformers/v4.18.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(tt,"href","/docs/transformers/v4.18.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(nt,"href","/docs/transformers/v4.18.0/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),l(rt,"href","/docs/transformers/v4.18.0/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),l(_e,"href","https://huggingface.co/patrickvonplaten"),l(_e,"rel","nofollow"),l(be,"href","https://tfhub.dev/s?module-type=text-generation&subtype=module,placeholder"),l(be,"rel","nofollow"),l(Y,"id","transformers.BertGenerationConfig"),l(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Y,"href","#transformers.BertGenerationConfig"),l(I,"class","relative group"),l(st,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(at,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"id","transformers.BertGenerationTokenizer"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#transformers.BertGenerationTokenizer"),l(W,"class","relative group"),l(Ee,"href","https://github.com/google/sentencepiece"),l(Ee,"rel","nofollow"),l(it,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"id","transformers.BertGenerationEncoder"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.BertGenerationEncoder"),l(U,"class","relative group"),l(lt,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),l(Ce,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ce,"rel","nofollow"),l(De,"href","https://arxiv.org/abs/1706.03762"),l(De,"rel","nofollow"),l(ct,"href","/docs/transformers/v4.18.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Se,"href","https://arxiv.org/abs/1907.12461"),l(Se,"rel","nofollow"),l(ht,"href","/docs/transformers/v4.18.0/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(re,"id","transformers.BertGenerationDecoder"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.BertGenerationDecoder"),l(J,"class","relative group"),l(pt,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),l(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ie,"rel","nofollow"),l(ut,"href","/docs/transformers/v4.18.0/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,c){e(document.head,u),m(t,v,c),m(t,_,c),e(_,f),e(f,b),T(d,b,null),e(_,g),e(_,M),e(M,jo),m(t,Kt,c),m(t,O,c),e(O,Q),e(Q,wt),T(he,wt,null),e(O,Do),e(O,Tt),e(Tt,So),m(t,Qt,c),m(t,A,c),e(A,Mo),e(A,Je),e(Je,Ao),e(A,No),e(A,pe),e(pe,Lo),e(A,Fo),m(t,Xt,c),m(t,Ke,c),e(Ke,Oo),m(t,Yt,c),m(t,Qe,c),e(Qe,yt),e(yt,Io),m(t,Zt,c),m(t,Xe,c),e(Xe,Ro),m(t,eo,c),m(t,Ye,c),e(Ye,ue),e(ue,Wo),e(ue,Ze),e(Ze,Uo),e(ue,Ho),m(t,to,c),T(me,t,c),m(t,oo,c),m(t,et,c),e(et,fe),e(fe,Vo),e(fe,tt),e(tt,Jo),e(fe,Ko),m(t,no,c),T(ge,t,c),m(t,ro,c),m(t,ot,c),e(ot,Qo),m(t,so,c),m(t,X,c),e(X,N),e(N,nt),e(nt,Xo),e(N,Yo),e(N,rt),e(rt,Zo),e(N,en),e(N,$t),e($t,tn),e(N,on),e(X,nn),e(X,Et),e(Et,rn),m(t,ao,c),m(t,L,c),e(L,sn),e(L,_e),e(_e,an),e(L,dn),e(L,be),e(be,ln),e(L,cn),m(t,io,c),m(t,I,c),e(I,Y),e(Y,Bt),T(ve,Bt,null),e(I,hn),e(I,zt),e(zt,pn),m(t,lo,c),m(t,P,c),T(ke,P,null),e(P,un),e(P,we),e(we,mn),e(we,Gt),e(Gt,fn),e(we,gn),e(P,_n),e(P,R),e(R,bn),e(R,st),e(st,vn),e(R,kn),e(R,at),e(at,wn),e(R,Tn),e(P,yn),T(Z,P,null),m(t,co,c),m(t,W,c),e(W,ee),e(ee,qt),T(Te,qt,null),e(W,$n),e(W,xt),e(xt,En),m(t,ho,c),m(t,C,c),T(ye,C,null),e(C,Bn),e(C,$e),e($e,zn),e($e,Ee),e(Ee,Gn),e($e,qn),e(C,xn),e(C,Be),e(Be,Pn),e(Be,it),e(it,Cn),e(Be,jn),e(C,Dn),e(C,dt),T(ze,dt,null),m(t,po,c),m(t,U,c),e(U,te),e(te,Pt),T(Ge,Pt,null),e(U,Sn),e(U,Ct),e(Ct,Mn),m(t,uo,c),m(t,B,c),T(qe,B,null),e(B,An),e(B,jt),e(jt,Nn),e(B,Ln),e(B,xe),e(xe,Fn),e(xe,lt),e(lt,On),e(xe,In),e(B,Rn),e(B,Pe),e(Pe,Wn),e(Pe,Ce),e(Ce,Un),e(Pe,Hn),e(B,Vn),e(B,je),e(je,Jn),e(je,De),e(De,Kn),e(je,Qn),e(B,Xn),e(B,H),e(H,Yn),e(H,ct),e(ct,Zn),e(H,er),e(H,Se),e(Se,tr),e(H,or),e(B,nr),e(B,z),e(z,rr),e(z,Dt),e(Dt,sr),e(z,ar),e(z,St),e(St,ir),e(z,dr),e(z,Mt),e(Mt,lr),e(z,cr),e(z,At),e(At,hr),e(z,pr),e(z,Nt),e(Nt,ur),e(z,mr),e(z,Lt),e(Lt,fr),e(z,gr),e(B,_r),e(B,D),T(Me,D,null),e(D,br),e(D,V),e(V,vr),e(V,ht),e(ht,kr),e(V,wr),e(V,Ft),e(Ft,Tr),e(V,yr),e(D,$r),T(oe,D,null),e(D,Er),T(ne,D,null),m(t,mo,c),m(t,J,c),e(J,re),e(re,Ot),T(Ae,Ot,null),e(J,Br),e(J,It),e(It,zr),m(t,fo,c),m(t,q,c),T(Ne,q,null),e(q,Gr),e(q,Le),e(Le,qr),e(Le,Rt),e(Rt,xr),e(Le,Pr),e(q,Cr),e(q,Fe),e(Fe,jr),e(Fe,pt),e(pt,Dr),e(Fe,Sr),e(q,Mr),e(q,Oe),e(Oe,Ar),e(Oe,Ie),e(Ie,Nr),e(Oe,Lr),e(q,Fr),e(q,S),T(Re,S,null),e(S,Or),e(S,K),e(K,Ir),e(K,ut),e(ut,Rr),e(K,Wr),e(K,Wt),e(Wt,Ur),e(K,Hr),e(S,Vr),T(se,S,null),e(S,Jr),T(ae,S,null),go=!0},p(t,[c]){const We={};c&2&&(We.$$scope={dirty:c,ctx:t}),Z.$set(We);const Ut={};c&2&&(Ut.$$scope={dirty:c,ctx:t}),oe.$set(Ut);const Ht={};c&2&&(Ht.$$scope={dirty:c,ctx:t}),ne.$set(Ht);const Vt={};c&2&&(Vt.$$scope={dirty:c,ctx:t}),se.$set(Vt);const Ue={};c&2&&(Ue.$$scope={dirty:c,ctx:t}),ae.$set(Ue)},i(t){go||(y(d.$$.fragment,t),y(he.$$.fragment,t),y(me.$$.fragment,t),y(ge.$$.fragment,t),y(ve.$$.fragment,t),y(ke.$$.fragment,t),y(Z.$$.fragment,t),y(Te.$$.fragment,t),y(ye.$$.fragment,t),y(ze.$$.fragment,t),y(Ge.$$.fragment,t),y(qe.$$.fragment,t),y(Me.$$.fragment,t),y(oe.$$.fragment,t),y(ne.$$.fragment,t),y(Ae.$$.fragment,t),y(Ne.$$.fragment,t),y(Re.$$.fragment,t),y(se.$$.fragment,t),y(ae.$$.fragment,t),go=!0)},o(t){$(d.$$.fragment,t),$(he.$$.fragment,t),$(me.$$.fragment,t),$(ge.$$.fragment,t),$(ve.$$.fragment,t),$(ke.$$.fragment,t),$(Z.$$.fragment,t),$(Te.$$.fragment,t),$(ye.$$.fragment,t),$(ze.$$.fragment,t),$(Ge.$$.fragment,t),$(qe.$$.fragment,t),$(Me.$$.fragment,t),$(oe.$$.fragment,t),$(ne.$$.fragment,t),$(Ae.$$.fragment,t),$(Ne.$$.fragment,t),$(Re.$$.fragment,t),$(se.$$.fragment,t),$(ae.$$.fragment,t),go=!1},d(t){o(u),t&&o(v),t&&o(_),E(d),t&&o(Kt),t&&o(O),E(he),t&&o(Qt),t&&o(A),t&&o(Xt),t&&o(Ke),t&&o(Yt),t&&o(Qe),t&&o(Zt),t&&o(Xe),t&&o(eo),t&&o(Ye),t&&o(to),E(me,t),t&&o(oo),t&&o(et),t&&o(no),E(ge,t),t&&o(ro),t&&o(ot),t&&o(so),t&&o(X),t&&o(ao),t&&o(L),t&&o(io),t&&o(I),E(ve),t&&o(lo),t&&o(P),E(ke),E(Z),t&&o(co),t&&o(W),E(Te),t&&o(ho),t&&o(C),E(ye),E(ze),t&&o(po),t&&o(U),E(Ge),t&&o(uo),t&&o(B),E(qe),E(Me),E(oe),E(ne),t&&o(mo),t&&o(J),E(Ae),t&&o(fo),t&&o(q),E(Ne),E(Re),E(se),E(ae)}}}const pa={local:"bertgeneration",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertGenerationConfig",title:"BertGenerationConfig"},{local:"transformers.BertGenerationTokenizer",title:"BertGenerationTokenizer"},{local:"transformers.BertGenerationEncoder",title:"BertGenerationEncoder"},{local:"transformers.BertGenerationDecoder",title:"BertGenerationDecoder"}],title:"BertGeneration"};function ua(j){return sa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ka extends ta{constructor(u){super();oa(this,u,ua,ha,na,{})}}export{ka as default,pa as metadata};
