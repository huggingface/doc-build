import{S as sa,i as aa,s as ia,e as s,k as h,w as k,t as n,M as da,c as a,d as o,m as p,a as i,x as y,h as r,b as l,G as e,g as f,y as T,q as w,o as $,B as E,v as la,L as Zr}from"../../chunks/vendor-hf-doc-builder.js";import{T as ra}from"../../chunks/Tip-hf-doc-builder.js";import{D as Je}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Qt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Tt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Yr}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ca(j){let u,v,_,m,b;return m=new Qt({props:{code:`from transformers import BertGenerationConfig, BertGenerationEncoder

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){u=s("p"),v=n("Examples:"),_=h(),k(m.$$.fragment)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Examples:"),g.forEach(o),_=p(d),y(m.$$.fragment,d)},m(d,g){f(d,u,g),e(u,v),f(d,_,g),T(m,d,g),b=!0},p:Zr,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(u),d&&o(_),E(m,d)}}}function ha(j){let u,v,_,m,b;return{c(){u=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),m=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var A=i(_);m=r(A,"Module"),A.forEach(o),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){f(d,u,g),e(u,v),e(u,_),e(_,m),e(u,b)},d(d){d&&o(u)}}}function pa(j){let u,v,_,m,b;return m=new Qt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationEncoder
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){u=s("p"),v=n("Example:"),_=h(),k(m.$$.fragment)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Example:"),g.forEach(o),_=p(d),y(m.$$.fragment,d)},m(d,g){f(d,u,g),e(u,v),f(d,_,g),T(m,d,g),b=!0},p:Zr,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(u),d&&o(_),E(m,d)}}}function ua(j){let u,v,_,m,b;return{c(){u=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),m=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var A=i(_);m=r(A,"Module"),A.forEach(o),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){f(d,u,g),e(u,v),e(u,_),e(_,m),e(u,b)},d(d){d&&o(u)}}}function fa(j){let u,v,_,m,b;return m=new Qt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationDecoder, BertGenerationConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){u=s("p"),v=n("Example:"),_=h(),k(m.$$.fragment)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Example:"),g.forEach(o),_=p(d),y(m.$$.fragment,d)},m(d,g){f(d,u,g),e(u,v),f(d,_,g),T(m,d,g),b=!0},p:Zr,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(u),d&&o(_),E(m,d)}}}function ma(j){let u,v,_,m,b,d,g,A,Do,Xt,F,X,wt,pe,So,$t,Ao,Yt,M,Mo,Ke,Oo,Lo,ue,No,Fo,Zt,Qe,Io,eo,Xe,Et,Ro,to,Ye,Wo,oo,Ze,fe,Uo,et,Ho,Vo,no,me,ro,tt,ge,Jo,ot,Ko,Qo,so,_e,ao,nt,Xo,io,Y,O,rt,Yo,Zo,st,en,tn,Bt,on,nn,rn,zt,sn,lo,L,an,be,dn,ln,ve,cn,hn,co,I,Z,Gt,ke,pn,qt,un,ho,P,ye,fn,R,mn,xt,gn,_n,Te,bn,vn,kn,W,yn,at,Tn,wn,it,$n,En,Bn,ee,po,U,te,Pt,we,zn,Ct,Gn,uo,C,$e,qn,Ee,xn,Be,Pn,Cn,jn,ze,Dn,dt,Sn,An,Mn,lt,Ge,fo,H,oe,jt,qe,On,Dt,Ln,mo,B,xe,Nn,St,Fn,In,Pe,Rn,ct,Wn,Un,Hn,Ce,Vn,je,Jn,Kn,Qn,De,Xn,Se,Yn,Zn,er,V,tr,ht,or,nr,Ae,rr,sr,ar,z,ir,At,dr,lr,Mt,cr,hr,Ot,pr,ur,Lt,fr,mr,Nt,gr,_r,Ft,br,vr,kr,D,Me,yr,J,Tr,pt,wr,$r,It,Er,Br,zr,ne,Gr,re,go,K,se,Rt,Oe,qr,Wt,xr,_o,q,Le,Pr,Ne,Cr,Ut,jr,Dr,Sr,Fe,Ar,ut,Mr,Or,Lr,Ie,Nr,Re,Fr,Ir,Rr,S,We,Wr,Q,Ur,ft,Hr,Vr,Ht,Jr,Kr,Qr,ae,Xr,ie,bo;return d=new Tt({}),pe=new Tt({}),me=new Qt({props:{code:`# leverage checkpoints for Bert2Bert model...
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
<span class="hljs-meta">... </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;This is a short summary&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># train...</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = bert2bert(input_ids=input_ids, decoder_input_ids=labels, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),_e=new Qt({props:{code:`# instantiate sentence fusion model
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
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = sentence_fuser.generate(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))`}}),ke=new Tt({}),ye=new Je({props:{name:"class transformers.BertGenerationConfig",anchor:"transformers.BertGenerationConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"intermediate_size",val:" = 4096"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
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
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/bert_generation/configuration_bert_generation.py#L20"}}),ee=new Yr({props:{anchor:"transformers.BertGenerationConfig.example",$$slots:{default:[ca]},$$scope:{ctx:j}}}),we=new Tt({}),$e=new Je({props:{name:"class transformers.BertGenerationTokenizer",anchor:"transformers.BertGenerationTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '<::::>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/bert_generation/tokenization_bert_generation.py#L43"}}),Ge=new Je({props:{name:"save_vocabulary",anchor:"transformers.BertGenerationTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/bert_generation/tokenization_bert_generation.py#L157"}}),qe=new Tt({}),xe=new Je({props:{name:"class transformers.BertGenerationEncoder",anchor:"transformers.BertGenerationEncoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/bert_generation/modeling_bert_generation.py#L254"}}),Me=new Je({props:{name:"forward",anchor:"transformers.BertGenerationEncoder.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert-generation#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationEncoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/bert_generation/modeling_bert_generation.py#L295",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/bert-generation#transformers.BertGenerationConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ne=new ra({props:{$$slots:{default:[ha]},$$scope:{ctx:j}}}),re=new Yr({props:{anchor:"transformers.BertGenerationEncoder.forward.example",$$slots:{default:[pa]},$$scope:{ctx:j}}}),Oe=new Tt({}),Le=new Je({props:{name:"class transformers.BertGenerationDecoder",anchor:"transformers.BertGenerationDecoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/bert_generation/modeling_bert_generation.py#L441"}}),We=new Je({props:{name:"forward",anchor:"transformers.BertGenerationDecoder.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert-generation#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationDecoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/bert_generation/modeling_bert_generation.py#L460",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/bert-generation#transformers.BertGenerationConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ae=new ra({props:{$$slots:{default:[ua]},$$scope:{ctx:j}}}),ie=new Yr({props:{anchor:"transformers.BertGenerationDecoder.forward.example",$$slots:{default:[fa]},$$scope:{ctx:j}}}),{c(){u=s("meta"),v=h(),_=s("h1"),m=s("a"),b=s("span"),k(d.$$.fragment),g=h(),A=s("span"),Do=n("BertGeneration"),Xt=h(),F=s("h2"),X=s("a"),wt=s("span"),k(pe.$$.fragment),So=h(),$t=s("span"),Ao=n("Overview"),Yt=h(),M=s("p"),Mo=n(`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Ke=s("a"),Oo=n("EncoderDecoderModel"),Lo=n(" as proposed in "),ue=s("a"),No=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Fo=n(" by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),Zt=h(),Qe=s("p"),Io=n("The abstract from the paper is the following:"),eo=h(),Xe=s("p"),Et=s("em"),Ro=n(`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),to=h(),Ye=s("p"),Wo=n("Usage:"),oo=h(),Ze=s("ul"),fe=s("li"),Uo=n("The model can be used in combination with the "),et=s("a"),Ho=n("EncoderDecoderModel"),Vo=n(` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),no=h(),k(me.$$.fragment),ro=h(),tt=s("ul"),ge=s("li"),Jo=n("Pretrained "),ot=s("a"),Ko=n("EncoderDecoderModel"),Qo=n(" are also directly available in the model hub, e.g.,"),so=h(),k(_e.$$.fragment),ao=h(),nt=s("p"),Xo=n("Tips:"),io=h(),Y=s("ul"),O=s("li"),rt=s("a"),Yo=n("BertGenerationEncoder"),Zo=n(" and "),st=s("a"),en=n("BertGenerationDecoder"),tn=n(` should be used in
combination with `),Bt=s("code"),on=n("EncoderDecoder"),nn=n("."),rn=h(),zt=s("li"),sn=n(`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),lo=h(),L=s("p"),an=n("This model was contributed by "),be=s("a"),dn=n("patrickvonplaten"),ln=n(`. The original code can be
found `),ve=s("a"),cn=n("here"),hn=n("."),co=h(),I=s("h2"),Z=s("a"),Gt=s("span"),k(ke.$$.fragment),pn=h(),qt=s("span"),un=n("BertGenerationConfig"),ho=h(),P=s("div"),k(ye.$$.fragment),fn=h(),R=s("p"),mn=n("This is the configuration class to store the configuration of a "),xt=s("code"),gn=n("BertGenerationPreTrainedModel"),_n=n(`. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BertGeneration
`),Te=s("a"),bn=n("google/bert_for_seq_generation_L-24_bbc_encoder"),vn=n(`
architecture.`),kn=h(),W=s("p"),yn=n("Configuration objects inherit from "),at=s("a"),Tn=n("PretrainedConfig"),wn=n(` and can be used to control the model outputs. Read the
documentation from `),it=s("a"),$n=n("PretrainedConfig"),En=n(" for more information."),Bn=h(),k(ee.$$.fragment),po=h(),U=s("h2"),te=s("a"),Pt=s("span"),k(we.$$.fragment),zn=h(),Ct=s("span"),Gn=n("BertGenerationTokenizer"),uo=h(),C=s("div"),k($e.$$.fragment),qn=h(),Ee=s("p"),xn=n("Construct a BertGeneration tokenizer. Based on "),Be=s("a"),Pn=n("SentencePiece"),Cn=n("."),jn=h(),ze=s("p"),Dn=n("This tokenizer inherits from "),dt=s("a"),Sn=n("PreTrainedTokenizer"),An=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Mn=h(),lt=s("div"),k(Ge.$$.fragment),fo=h(),H=s("h2"),oe=s("a"),jt=s("span"),k(qe.$$.fragment),On=h(),Dt=s("span"),Ln=n("BertGenerationEncoder"),mo=h(),B=s("div"),k(xe.$$.fragment),Nn=h(),St=s("p"),Fn=n("The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),In=h(),Pe=s("p"),Rn=n("This model inherits from "),ct=s("a"),Wn=n("PreTrainedModel"),Un=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hn=h(),Ce=s("p"),Vn=n("This model is also a PyTorch "),je=s("a"),Jn=n("torch.nn.Module"),Kn=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qn=h(),De=s("p"),Xn=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Se=s("a"),Yn=n(`Attention is
all you need`),Zn=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),er=h(),V=s("p"),tr=n("This model should be used when leveraging Bert or Roberta checkpoints for the "),ht=s("a"),or=n("EncoderDecoderModel"),nr=n(` class as
described in `),Ae=s("a"),rr=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),sr=n(`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),ar=h(),z=s("p"),ir=n("To behave as an decoder the model needs to be initialized with the "),At=s("code"),dr=n("is_decoder"),lr=n(` argument of the configuration set
to `),Mt=s("code"),cr=n("True"),hr=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Ot=s("code"),pr=n("is_decoder"),ur=n(` argument and
`),Lt=s("code"),fr=n("add_cross_attention"),mr=n(" set to "),Nt=s("code"),gr=n("True"),_r=n("; an "),Ft=s("code"),br=n("encoder_hidden_states"),vr=n(" is then expected as an input to the forward pass."),kr=h(),D=s("div"),k(Me.$$.fragment),yr=h(),J=s("p"),Tr=n("The "),pt=s("a"),wr=n("BertGenerationEncoder"),$r=n(" forward method, overrides the "),It=s("code"),Er=n("__call__"),Br=n(" special method."),zr=h(),k(ne.$$.fragment),Gr=h(),k(re.$$.fragment),go=h(),K=s("h2"),se=s("a"),Rt=s("span"),k(Oe.$$.fragment),qr=h(),Wt=s("span"),xr=n("BertGenerationDecoder"),_o=h(),q=s("div"),k(Le.$$.fragment),Pr=h(),Ne=s("p"),Cr=n("BertGeneration Model with a "),Ut=s("code"),jr=n("language modeling"),Dr=n(" head on top for CLM fine-tuning."),Sr=h(),Fe=s("p"),Ar=n("This model inherits from "),ut=s("a"),Mr=n("PreTrainedModel"),Or=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lr=h(),Ie=s("p"),Nr=n("This model is also a PyTorch "),Re=s("a"),Fr=n("torch.nn.Module"),Ir=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr=h(),S=s("div"),k(We.$$.fragment),Wr=h(),Q=s("p"),Ur=n("The "),ft=s("a"),Hr=n("BertGenerationDecoder"),Vr=n(" forward method, overrides the "),Ht=s("code"),Jr=n("__call__"),Kr=n(" special method."),Qr=h(),k(ae.$$.fragment),Xr=h(),k(ie.$$.fragment),this.h()},l(t){const c=da('[data-svelte="svelte-1phssyn"]',document.head);u=a(c,"META",{name:!0,content:!0}),c.forEach(o),v=p(t),_=a(t,"H1",{class:!0});var Ue=i(_);m=a(Ue,"A",{id:!0,class:!0,href:!0});var Vt=i(m);b=a(Vt,"SPAN",{});var Jt=i(b);y(d.$$.fragment,Jt),Jt.forEach(o),Vt.forEach(o),g=p(Ue),A=a(Ue,"SPAN",{});var Kt=i(A);Do=r(Kt,"BertGeneration"),Kt.forEach(o),Ue.forEach(o),Xt=p(t),F=a(t,"H2",{class:!0});var He=i(F);X=a(He,"A",{id:!0,class:!0,href:!0});var es=i(X);wt=a(es,"SPAN",{});var ts=i(wt);y(pe.$$.fragment,ts),ts.forEach(o),es.forEach(o),So=p(He),$t=a(He,"SPAN",{});var os=i($t);Ao=r(os,"Overview"),os.forEach(o),He.forEach(o),Yt=p(t),M=a(t,"P",{});var mt=i(M);Mo=r(mt,`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Ke=a(mt,"A",{href:!0});var ns=i(Ke);Oo=r(ns,"EncoderDecoderModel"),ns.forEach(o),Lo=r(mt," as proposed in "),ue=a(mt,"A",{href:!0,rel:!0});var rs=i(ue);No=r(rs,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),rs.forEach(o),Fo=r(mt," by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),mt.forEach(o),Zt=p(t),Qe=a(t,"P",{});var ss=i(Qe);Io=r(ss,"The abstract from the paper is the following:"),ss.forEach(o),eo=p(t),Xe=a(t,"P",{});var as=i(Xe);Et=a(as,"EM",{});var is=i(Et);Ro=r(is,`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),is.forEach(o),as.forEach(o),to=p(t),Ye=a(t,"P",{});var ds=i(Ye);Wo=r(ds,"Usage:"),ds.forEach(o),oo=p(t),Ze=a(t,"UL",{});var ls=i(Ze);fe=a(ls,"LI",{});var vo=i(fe);Uo=r(vo,"The model can be used in combination with the "),et=a(vo,"A",{href:!0});var cs=i(et);Ho=r(cs,"EncoderDecoderModel"),cs.forEach(o),Vo=r(vo,` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),vo.forEach(o),ls.forEach(o),no=p(t),y(me.$$.fragment,t),ro=p(t),tt=a(t,"UL",{});var hs=i(tt);ge=a(hs,"LI",{});var ko=i(ge);Jo=r(ko,"Pretrained "),ot=a(ko,"A",{href:!0});var ps=i(ot);Ko=r(ps,"EncoderDecoderModel"),ps.forEach(o),Qo=r(ko," are also directly available in the model hub, e.g.,"),ko.forEach(o),hs.forEach(o),so=p(t),y(_e.$$.fragment,t),ao=p(t),nt=a(t,"P",{});var us=i(nt);Xo=r(us,"Tips:"),us.forEach(o),io=p(t),Y=a(t,"UL",{});var yo=i(Y);O=a(yo,"LI",{});var Ve=i(O);rt=a(Ve,"A",{href:!0});var fs=i(rt);Yo=r(fs,"BertGenerationEncoder"),fs.forEach(o),Zo=r(Ve," and "),st=a(Ve,"A",{href:!0});var ms=i(st);en=r(ms,"BertGenerationDecoder"),ms.forEach(o),tn=r(Ve,` should be used in
combination with `),Bt=a(Ve,"CODE",{});var gs=i(Bt);on=r(gs,"EncoderDecoder"),gs.forEach(o),nn=r(Ve,"."),Ve.forEach(o),rn=p(yo),zt=a(yo,"LI",{});var _s=i(zt);sn=r(_s,`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),_s.forEach(o),yo.forEach(o),lo=p(t),L=a(t,"P",{});var gt=i(L);an=r(gt,"This model was contributed by "),be=a(gt,"A",{href:!0,rel:!0});var bs=i(be);dn=r(bs,"patrickvonplaten"),bs.forEach(o),ln=r(gt,`. The original code can be
found `),ve=a(gt,"A",{href:!0,rel:!0});var vs=i(ve);cn=r(vs,"here"),vs.forEach(o),hn=r(gt,"."),gt.forEach(o),co=p(t),I=a(t,"H2",{class:!0});var To=i(I);Z=a(To,"A",{id:!0,class:!0,href:!0});var ks=i(Z);Gt=a(ks,"SPAN",{});var ys=i(Gt);y(ke.$$.fragment,ys),ys.forEach(o),ks.forEach(o),pn=p(To),qt=a(To,"SPAN",{});var Ts=i(qt);un=r(Ts,"BertGenerationConfig"),Ts.forEach(o),To.forEach(o),ho=p(t),P=a(t,"DIV",{class:!0});var de=i(P);y(ye.$$.fragment,de),fn=p(de),R=a(de,"P",{});var _t=i(R);mn=r(_t,"This is the configuration class to store the configuration of a "),xt=a(_t,"CODE",{});var ws=i(xt);gn=r(ws,"BertGenerationPreTrainedModel"),ws.forEach(o),_n=r(_t,`. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BertGeneration
`),Te=a(_t,"A",{href:!0,rel:!0});var $s=i(Te);bn=r($s,"google/bert_for_seq_generation_L-24_bbc_encoder"),$s.forEach(o),vn=r(_t,`
architecture.`),_t.forEach(o),kn=p(de),W=a(de,"P",{});var bt=i(W);yn=r(bt,"Configuration objects inherit from "),at=a(bt,"A",{href:!0});var Es=i(at);Tn=r(Es,"PretrainedConfig"),Es.forEach(o),wn=r(bt,` and can be used to control the model outputs. Read the
documentation from `),it=a(bt,"A",{href:!0});var Bs=i(it);$n=r(Bs,"PretrainedConfig"),Bs.forEach(o),En=r(bt," for more information."),bt.forEach(o),Bn=p(de),y(ee.$$.fragment,de),de.forEach(o),po=p(t),U=a(t,"H2",{class:!0});var wo=i(U);te=a(wo,"A",{id:!0,class:!0,href:!0});var zs=i(te);Pt=a(zs,"SPAN",{});var Gs=i(Pt);y(we.$$.fragment,Gs),Gs.forEach(o),zs.forEach(o),zn=p(wo),Ct=a(wo,"SPAN",{});var qs=i(Ct);Gn=r(qs,"BertGenerationTokenizer"),qs.forEach(o),wo.forEach(o),uo=p(t),C=a(t,"DIV",{class:!0});var le=i(C);y($e.$$.fragment,le),qn=p(le),Ee=a(le,"P",{});var $o=i(Ee);xn=r($o,"Construct a BertGeneration tokenizer. Based on "),Be=a($o,"A",{href:!0,rel:!0});var xs=i(Be);Pn=r(xs,"SentencePiece"),xs.forEach(o),Cn=r($o,"."),$o.forEach(o),jn=p(le),ze=a(le,"P",{});var Eo=i(ze);Dn=r(Eo,"This tokenizer inherits from "),dt=a(Eo,"A",{href:!0});var Ps=i(dt);Sn=r(Ps,"PreTrainedTokenizer"),Ps.forEach(o),An=r(Eo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Eo.forEach(o),Mn=p(le),lt=a(le,"DIV",{class:!0});var Cs=i(lt);y(Ge.$$.fragment,Cs),Cs.forEach(o),le.forEach(o),fo=p(t),H=a(t,"H2",{class:!0});var Bo=i(H);oe=a(Bo,"A",{id:!0,class:!0,href:!0});var js=i(oe);jt=a(js,"SPAN",{});var Ds=i(jt);y(qe.$$.fragment,Ds),Ds.forEach(o),js.forEach(o),On=p(Bo),Dt=a(Bo,"SPAN",{});var Ss=i(Dt);Ln=r(Ss,"BertGenerationEncoder"),Ss.forEach(o),Bo.forEach(o),mo=p(t),B=a(t,"DIV",{class:!0});var G=i(B);y(xe.$$.fragment,G),Nn=p(G),St=a(G,"P",{});var As=i(St);Fn=r(As,"The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),As.forEach(o),In=p(G),Pe=a(G,"P",{});var zo=i(Pe);Rn=r(zo,"This model inherits from "),ct=a(zo,"A",{href:!0});var Ms=i(ct);Wn=r(Ms,"PreTrainedModel"),Ms.forEach(o),Un=r(zo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zo.forEach(o),Hn=p(G),Ce=a(G,"P",{});var Go=i(Ce);Vn=r(Go,"This model is also a PyTorch "),je=a(Go,"A",{href:!0,rel:!0});var Os=i(je);Jn=r(Os,"torch.nn.Module"),Os.forEach(o),Kn=r(Go,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Go.forEach(o),Qn=p(G),De=a(G,"P",{});var qo=i(De);Xn=r(qo,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Se=a(qo,"A",{href:!0,rel:!0});var Ls=i(Se);Yn=r(Ls,`Attention is
all you need`),Ls.forEach(o),Zn=r(qo,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),qo.forEach(o),er=p(G),V=a(G,"P",{});var vt=i(V);tr=r(vt,"This model should be used when leveraging Bert or Roberta checkpoints for the "),ht=a(vt,"A",{href:!0});var Ns=i(ht);or=r(Ns,"EncoderDecoderModel"),Ns.forEach(o),nr=r(vt,` class as
described in `),Ae=a(vt,"A",{href:!0,rel:!0});var Fs=i(Ae);rr=r(Fs,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Fs.forEach(o),sr=r(vt,`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),vt.forEach(o),ar=p(G),z=a(G,"P",{});var x=i(z);ir=r(x,"To behave as an decoder the model needs to be initialized with the "),At=a(x,"CODE",{});var Is=i(At);dr=r(Is,"is_decoder"),Is.forEach(o),lr=r(x,` argument of the configuration set
to `),Mt=a(x,"CODE",{});var Rs=i(Mt);cr=r(Rs,"True"),Rs.forEach(o),hr=r(x,". To be used in a Seq2Seq model, the model needs to initialized with both "),Ot=a(x,"CODE",{});var Ws=i(Ot);pr=r(Ws,"is_decoder"),Ws.forEach(o),ur=r(x,` argument and
`),Lt=a(x,"CODE",{});var Us=i(Lt);fr=r(Us,"add_cross_attention"),Us.forEach(o),mr=r(x," set to "),Nt=a(x,"CODE",{});var Hs=i(Nt);gr=r(Hs,"True"),Hs.forEach(o),_r=r(x,"; an "),Ft=a(x,"CODE",{});var Vs=i(Ft);br=r(Vs,"encoder_hidden_states"),Vs.forEach(o),vr=r(x," is then expected as an input to the forward pass."),x.forEach(o),kr=p(G),D=a(G,"DIV",{class:!0});var ce=i(D);y(Me.$$.fragment,ce),yr=p(ce),J=a(ce,"P",{});var kt=i(J);Tr=r(kt,"The "),pt=a(kt,"A",{href:!0});var Js=i(pt);wr=r(Js,"BertGenerationEncoder"),Js.forEach(o),$r=r(kt," forward method, overrides the "),It=a(kt,"CODE",{});var Ks=i(It);Er=r(Ks,"__call__"),Ks.forEach(o),Br=r(kt," special method."),kt.forEach(o),zr=p(ce),y(ne.$$.fragment,ce),Gr=p(ce),y(re.$$.fragment,ce),ce.forEach(o),G.forEach(o),go=p(t),K=a(t,"H2",{class:!0});var xo=i(K);se=a(xo,"A",{id:!0,class:!0,href:!0});var Qs=i(se);Rt=a(Qs,"SPAN",{});var Xs=i(Rt);y(Oe.$$.fragment,Xs),Xs.forEach(o),Qs.forEach(o),qr=p(xo),Wt=a(xo,"SPAN",{});var Ys=i(Wt);xr=r(Ys,"BertGenerationDecoder"),Ys.forEach(o),xo.forEach(o),_o=p(t),q=a(t,"DIV",{class:!0});var N=i(q);y(Le.$$.fragment,N),Pr=p(N),Ne=a(N,"P",{});var Po=i(Ne);Cr=r(Po,"BertGeneration Model with a "),Ut=a(Po,"CODE",{});var Zs=i(Ut);jr=r(Zs,"language modeling"),Zs.forEach(o),Dr=r(Po," head on top for CLM fine-tuning."),Po.forEach(o),Sr=p(N),Fe=a(N,"P",{});var Co=i(Fe);Ar=r(Co,"This model inherits from "),ut=a(Co,"A",{href:!0});var ea=i(ut);Mr=r(ea,"PreTrainedModel"),ea.forEach(o),Or=r(Co,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Co.forEach(o),Lr=p(N),Ie=a(N,"P",{});var jo=i(Ie);Nr=r(jo,"This model is also a PyTorch "),Re=a(jo,"A",{href:!0,rel:!0});var ta=i(Re);Fr=r(ta,"torch.nn.Module"),ta.forEach(o),Ir=r(jo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jo.forEach(o),Rr=p(N),S=a(N,"DIV",{class:!0});var he=i(S);y(We.$$.fragment,he),Wr=p(he),Q=a(he,"P",{});var yt=i(Q);Ur=r(yt,"The "),ft=a(yt,"A",{href:!0});var oa=i(ft);Hr=r(oa,"BertGenerationDecoder"),oa.forEach(o),Vr=r(yt," forward method, overrides the "),Ht=a(yt,"CODE",{});var na=i(Ht);Jr=r(na,"__call__"),na.forEach(o),Kr=r(yt," special method."),yt.forEach(o),Qr=p(he),y(ae.$$.fragment,he),Xr=p(he),y(ie.$$.fragment,he),he.forEach(o),N.forEach(o),this.h()},h(){l(u,"name","hf:doc:metadata"),l(u,"content",JSON.stringify(ga)),l(m,"id","bertgeneration"),l(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(m,"href","#bertgeneration"),l(_,"class","relative group"),l(X,"id","overview"),l(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(X,"href","#overview"),l(F,"class","relative group"),l(Ke,"href","/docs/transformers/v4.22.1/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(ue,"href","https://arxiv.org/abs/1907.12461"),l(ue,"rel","nofollow"),l(et,"href","/docs/transformers/v4.22.1/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(ot,"href","/docs/transformers/v4.22.1/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(rt,"href","/docs/transformers/v4.22.1/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),l(st,"href","/docs/transformers/v4.22.1/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),l(be,"href","https://huggingface.co/patrickvonplaten"),l(be,"rel","nofollow"),l(ve,"href","https://tfhub.dev/s?module-type=text-generation&subtype=module,placeholder"),l(ve,"rel","nofollow"),l(Z,"id","transformers.BertGenerationConfig"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.BertGenerationConfig"),l(I,"class","relative group"),l(Te,"href","https://huggingface.co/google/bert_for_seq_generation_L-24_bbc_encoder"),l(Te,"rel","nofollow"),l(at,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),l(it,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"id","transformers.BertGenerationTokenizer"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.BertGenerationTokenizer"),l(U,"class","relative group"),l(Be,"href","https://github.com/google/sentencepiece"),l(Be,"rel","nofollow"),l(dt,"href","/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oe,"id","transformers.BertGenerationEncoder"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.BertGenerationEncoder"),l(H,"class","relative group"),l(ct,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),l(je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(je,"rel","nofollow"),l(Se,"href","https://arxiv.org/abs/1706.03762"),l(Se,"rel","nofollow"),l(ht,"href","/docs/transformers/v4.22.1/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Ae,"href","https://arxiv.org/abs/1907.12461"),l(Ae,"rel","nofollow"),l(pt,"href","/docs/transformers/v4.22.1/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"id","transformers.BertGenerationDecoder"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.BertGenerationDecoder"),l(K,"class","relative group"),l(ut,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),l(Re,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Re,"rel","nofollow"),l(ft,"href","/docs/transformers/v4.22.1/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,c){e(document.head,u),f(t,v,c),f(t,_,c),e(_,m),e(m,b),T(d,b,null),e(_,g),e(_,A),e(A,Do),f(t,Xt,c),f(t,F,c),e(F,X),e(X,wt),T(pe,wt,null),e(F,So),e(F,$t),e($t,Ao),f(t,Yt,c),f(t,M,c),e(M,Mo),e(M,Ke),e(Ke,Oo),e(M,Lo),e(M,ue),e(ue,No),e(M,Fo),f(t,Zt,c),f(t,Qe,c),e(Qe,Io),f(t,eo,c),f(t,Xe,c),e(Xe,Et),e(Et,Ro),f(t,to,c),f(t,Ye,c),e(Ye,Wo),f(t,oo,c),f(t,Ze,c),e(Ze,fe),e(fe,Uo),e(fe,et),e(et,Ho),e(fe,Vo),f(t,no,c),T(me,t,c),f(t,ro,c),f(t,tt,c),e(tt,ge),e(ge,Jo),e(ge,ot),e(ot,Ko),e(ge,Qo),f(t,so,c),T(_e,t,c),f(t,ao,c),f(t,nt,c),e(nt,Xo),f(t,io,c),f(t,Y,c),e(Y,O),e(O,rt),e(rt,Yo),e(O,Zo),e(O,st),e(st,en),e(O,tn),e(O,Bt),e(Bt,on),e(O,nn),e(Y,rn),e(Y,zt),e(zt,sn),f(t,lo,c),f(t,L,c),e(L,an),e(L,be),e(be,dn),e(L,ln),e(L,ve),e(ve,cn),e(L,hn),f(t,co,c),f(t,I,c),e(I,Z),e(Z,Gt),T(ke,Gt,null),e(I,pn),e(I,qt),e(qt,un),f(t,ho,c),f(t,P,c),T(ye,P,null),e(P,fn),e(P,R),e(R,mn),e(R,xt),e(xt,gn),e(R,_n),e(R,Te),e(Te,bn),e(R,vn),e(P,kn),e(P,W),e(W,yn),e(W,at),e(at,Tn),e(W,wn),e(W,it),e(it,$n),e(W,En),e(P,Bn),T(ee,P,null),f(t,po,c),f(t,U,c),e(U,te),e(te,Pt),T(we,Pt,null),e(U,zn),e(U,Ct),e(Ct,Gn),f(t,uo,c),f(t,C,c),T($e,C,null),e(C,qn),e(C,Ee),e(Ee,xn),e(Ee,Be),e(Be,Pn),e(Ee,Cn),e(C,jn),e(C,ze),e(ze,Dn),e(ze,dt),e(dt,Sn),e(ze,An),e(C,Mn),e(C,lt),T(Ge,lt,null),f(t,fo,c),f(t,H,c),e(H,oe),e(oe,jt),T(qe,jt,null),e(H,On),e(H,Dt),e(Dt,Ln),f(t,mo,c),f(t,B,c),T(xe,B,null),e(B,Nn),e(B,St),e(St,Fn),e(B,In),e(B,Pe),e(Pe,Rn),e(Pe,ct),e(ct,Wn),e(Pe,Un),e(B,Hn),e(B,Ce),e(Ce,Vn),e(Ce,je),e(je,Jn),e(Ce,Kn),e(B,Qn),e(B,De),e(De,Xn),e(De,Se),e(Se,Yn),e(De,Zn),e(B,er),e(B,V),e(V,tr),e(V,ht),e(ht,or),e(V,nr),e(V,Ae),e(Ae,rr),e(V,sr),e(B,ar),e(B,z),e(z,ir),e(z,At),e(At,dr),e(z,lr),e(z,Mt),e(Mt,cr),e(z,hr),e(z,Ot),e(Ot,pr),e(z,ur),e(z,Lt),e(Lt,fr),e(z,mr),e(z,Nt),e(Nt,gr),e(z,_r),e(z,Ft),e(Ft,br),e(z,vr),e(B,kr),e(B,D),T(Me,D,null),e(D,yr),e(D,J),e(J,Tr),e(J,pt),e(pt,wr),e(J,$r),e(J,It),e(It,Er),e(J,Br),e(D,zr),T(ne,D,null),e(D,Gr),T(re,D,null),f(t,go,c),f(t,K,c),e(K,se),e(se,Rt),T(Oe,Rt,null),e(K,qr),e(K,Wt),e(Wt,xr),f(t,_o,c),f(t,q,c),T(Le,q,null),e(q,Pr),e(q,Ne),e(Ne,Cr),e(Ne,Ut),e(Ut,jr),e(Ne,Dr),e(q,Sr),e(q,Fe),e(Fe,Ar),e(Fe,ut),e(ut,Mr),e(Fe,Or),e(q,Lr),e(q,Ie),e(Ie,Nr),e(Ie,Re),e(Re,Fr),e(Ie,Ir),e(q,Rr),e(q,S),T(We,S,null),e(S,Wr),e(S,Q),e(Q,Ur),e(Q,ft),e(ft,Hr),e(Q,Vr),e(Q,Ht),e(Ht,Jr),e(Q,Kr),e(S,Qr),T(ae,S,null),e(S,Xr),T(ie,S,null),bo=!0},p(t,[c]){const Ue={};c&2&&(Ue.$$scope={dirty:c,ctx:t}),ee.$set(Ue);const Vt={};c&2&&(Vt.$$scope={dirty:c,ctx:t}),ne.$set(Vt);const Jt={};c&2&&(Jt.$$scope={dirty:c,ctx:t}),re.$set(Jt);const Kt={};c&2&&(Kt.$$scope={dirty:c,ctx:t}),ae.$set(Kt);const He={};c&2&&(He.$$scope={dirty:c,ctx:t}),ie.$set(He)},i(t){bo||(w(d.$$.fragment,t),w(pe.$$.fragment,t),w(me.$$.fragment,t),w(_e.$$.fragment,t),w(ke.$$.fragment,t),w(ye.$$.fragment,t),w(ee.$$.fragment,t),w(we.$$.fragment,t),w($e.$$.fragment,t),w(Ge.$$.fragment,t),w(qe.$$.fragment,t),w(xe.$$.fragment,t),w(Me.$$.fragment,t),w(ne.$$.fragment,t),w(re.$$.fragment,t),w(Oe.$$.fragment,t),w(Le.$$.fragment,t),w(We.$$.fragment,t),w(ae.$$.fragment,t),w(ie.$$.fragment,t),bo=!0)},o(t){$(d.$$.fragment,t),$(pe.$$.fragment,t),$(me.$$.fragment,t),$(_e.$$.fragment,t),$(ke.$$.fragment,t),$(ye.$$.fragment,t),$(ee.$$.fragment,t),$(we.$$.fragment,t),$($e.$$.fragment,t),$(Ge.$$.fragment,t),$(qe.$$.fragment,t),$(xe.$$.fragment,t),$(Me.$$.fragment,t),$(ne.$$.fragment,t),$(re.$$.fragment,t),$(Oe.$$.fragment,t),$(Le.$$.fragment,t),$(We.$$.fragment,t),$(ae.$$.fragment,t),$(ie.$$.fragment,t),bo=!1},d(t){o(u),t&&o(v),t&&o(_),E(d),t&&o(Xt),t&&o(F),E(pe),t&&o(Yt),t&&o(M),t&&o(Zt),t&&o(Qe),t&&o(eo),t&&o(Xe),t&&o(to),t&&o(Ye),t&&o(oo),t&&o(Ze),t&&o(no),E(me,t),t&&o(ro),t&&o(tt),t&&o(so),E(_e,t),t&&o(ao),t&&o(nt),t&&o(io),t&&o(Y),t&&o(lo),t&&o(L),t&&o(co),t&&o(I),E(ke),t&&o(ho),t&&o(P),E(ye),E(ee),t&&o(po),t&&o(U),E(we),t&&o(uo),t&&o(C),E($e),E(Ge),t&&o(fo),t&&o(H),E(qe),t&&o(mo),t&&o(B),E(xe),E(Me),E(ne),E(re),t&&o(go),t&&o(K),E(Oe),t&&o(_o),t&&o(q),E(Le),E(We),E(ae),E(ie)}}}const ga={local:"bertgeneration",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertGenerationConfig",title:"BertGenerationConfig"},{local:"transformers.BertGenerationTokenizer",title:"BertGenerationTokenizer"},{local:"transformers.BertGenerationEncoder",title:"BertGenerationEncoder"},{local:"transformers.BertGenerationDecoder",title:"BertGenerationDecoder"}],title:"BertGeneration"};function _a(j){return la(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $a extends sa{constructor(u){super();aa(this,u,_a,ma,ia,{})}}export{$a as default,ga as metadata};
