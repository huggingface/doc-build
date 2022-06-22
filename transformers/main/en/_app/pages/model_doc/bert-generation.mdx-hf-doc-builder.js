import{S as as,i as ss,s as is,e as a,k as h,w as k,t as n,M as ds,c as s,d as o,m as p,a as i,x as y,h as r,b as l,G as e,g as u,y as T,q as w,o as $,B as E,v as ls,L as Zr}from"../../chunks/vendor-hf-doc-builder.js";import{T as rs}from"../../chunks/Tip-hf-doc-builder.js";import{D as Je}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Qt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Tt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Yr}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function cs(C){let m,v,_,f,b;return f=new Qt({props:{code:`from transformers import BertGenerationConfig, BertGenerationEncoder

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){m=a("p"),v=n("Examples:"),_=h(),k(f.$$.fragment)},l(d){m=s(d,"P",{});var g=i(m);v=r(g,"Examples:"),g.forEach(o),_=p(d),y(f.$$.fragment,d)},m(d,g){u(d,m,g),e(m,v),u(d,_,g),T(f,d,g),b=!0},p:Zr,i(d){b||(w(f.$$.fragment,d),b=!0)},o(d){$(f.$$.fragment,d),b=!1},d(d){d&&o(m),d&&o(_),E(f,d)}}}function hs(C){let m,v,_,f,b;return{c(){m=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){m=s(d,"P",{});var g=i(m);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var A=i(_);f=r(A,"Module"),A.forEach(o),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){u(d,m,g),e(m,v),e(m,_),e(_,f),e(m,b)},d(d){d&&o(m)}}}function ps(C){let m,v,_,f,b;return f=new Qt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationEncoder
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){m=a("p"),v=n("Example:"),_=h(),k(f.$$.fragment)},l(d){m=s(d,"P",{});var g=i(m);v=r(g,"Example:"),g.forEach(o),_=p(d),y(f.$$.fragment,d)},m(d,g){u(d,m,g),e(m,v),u(d,_,g),T(f,d,g),b=!0},p:Zr,i(d){b||(w(f.$$.fragment,d),b=!0)},o(d){$(f.$$.fragment,d),b=!1},d(d){d&&o(m),d&&o(_),E(f,d)}}}function ms(C){let m,v,_,f,b;return{c(){m=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){m=s(d,"P",{});var g=i(m);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var A=i(_);f=r(A,"Module"),A.forEach(o),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){u(d,m,g),e(m,v),e(m,_),e(_,f),e(m,b)},d(d){d&&o(m)}}}function us(C){let m,v,_,f,b;return f=new Qt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationDecoder, BertGenerationConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){m=a("p"),v=n("Example:"),_=h(),k(f.$$.fragment)},l(d){m=s(d,"P",{});var g=i(m);v=r(g,"Example:"),g.forEach(o),_=p(d),y(f.$$.fragment,d)},m(d,g){u(d,m,g),e(m,v),u(d,_,g),T(f,d,g),b=!0},p:Zr,i(d){b||(w(f.$$.fragment,d),b=!0)},o(d){$(f.$$.fragment,d),b=!1},d(d){d&&o(m),d&&o(_),E(f,d)}}}function fs(C){let m,v,_,f,b,d,g,A,Do,Xt,F,X,wt,pe,So,$t,Ao,Yt,M,Mo,Ke,Oo,Lo,me,No,Fo,Zt,Qe,Io,eo,Xe,Et,Ro,to,Ye,Wo,oo,Ze,ue,Uo,et,Ho,Vo,no,fe,ro,tt,ge,Jo,ot,Ko,Qo,ao,_e,so,nt,Xo,io,Y,O,rt,Yo,Zo,at,en,tn,Bt,on,nn,rn,zt,an,lo,L,sn,be,dn,ln,ve,cn,hn,co,I,Z,Gt,ke,pn,qt,mn,ho,P,ye,un,R,fn,xt,gn,_n,Te,bn,vn,kn,W,yn,st,Tn,wn,it,$n,En,Bn,ee,po,U,te,Pt,we,zn,jt,Gn,mo,j,$e,qn,Ee,xn,Be,Pn,jn,Cn,ze,Dn,dt,Sn,An,Mn,lt,Ge,uo,H,oe,Ct,qe,On,Dt,Ln,fo,B,xe,Nn,St,Fn,In,Pe,Rn,ct,Wn,Un,Hn,je,Vn,Ce,Jn,Kn,Qn,De,Xn,Se,Yn,Zn,er,V,tr,ht,or,nr,Ae,rr,ar,sr,z,ir,At,dr,lr,Mt,cr,hr,Ot,pr,mr,Lt,ur,fr,Nt,gr,_r,Ft,br,vr,kr,D,Me,yr,J,Tr,pt,wr,$r,It,Er,Br,zr,ne,Gr,re,go,K,ae,Rt,Oe,qr,Wt,xr,_o,q,Le,Pr,Ne,jr,Ut,Cr,Dr,Sr,Fe,Ar,mt,Mr,Or,Lr,Ie,Nr,Re,Fr,Ir,Rr,S,We,Wr,Q,Ur,ut,Hr,Vr,Ht,Jr,Kr,Qr,se,Xr,ie,bo;return d=new Tt({}),pe=new Tt({}),fe=new Qt({props:{code:`# leverage checkpoints for Bert2Bert model...
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
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/configuration_bert_generation.py#L20"}}),ee=new Yr({props:{anchor:"transformers.BertGenerationConfig.example",$$slots:{default:[cs]},$$scope:{ctx:C}}}),we=new Tt({}),$e=new Je({props:{name:"class transformers.BertGenerationTokenizer",anchor:"transformers.BertGenerationTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '<::::>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/tokenization_bert_generation.py#L43"}}),Ge=new Je({props:{name:"save_vocabulary",anchor:"transformers.BertGenerationTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/tokenization_bert_generation.py#L157"}}),qe=new Tt({}),xe=new Je({props:{name:"class transformers.BertGenerationEncoder",anchor:"transformers.BertGenerationEncoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L254"}}),Me=new Je({props:{name:"forward",anchor:"transformers.BertGenerationEncoder.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L295",returnDescription:`
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
`}}),ne=new rs({props:{$$slots:{default:[hs]},$$scope:{ctx:C}}}),re=new Yr({props:{anchor:"transformers.BertGenerationEncoder.forward.example",$$slots:{default:[ps]},$$scope:{ctx:C}}}),Oe=new Tt({}),Le=new Je({props:{name:"class transformers.BertGenerationDecoder",anchor:"transformers.BertGenerationDecoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L441"}}),We=new Je({props:{name:"forward",anchor:"transformers.BertGenerationDecoder.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_generation/modeling_bert_generation.py#L460",returnDescription:`
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
`}}),se=new rs({props:{$$slots:{default:[ms]},$$scope:{ctx:C}}}),ie=new Yr({props:{anchor:"transformers.BertGenerationDecoder.forward.example",$$slots:{default:[us]},$$scope:{ctx:C}}}),{c(){m=a("meta"),v=h(),_=a("h1"),f=a("a"),b=a("span"),k(d.$$.fragment),g=h(),A=a("span"),Do=n("BertGeneration"),Xt=h(),F=a("h2"),X=a("a"),wt=a("span"),k(pe.$$.fragment),So=h(),$t=a("span"),Ao=n("Overview"),Yt=h(),M=a("p"),Mo=n(`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Ke=a("a"),Oo=n("EncoderDecoderModel"),Lo=n(" as proposed in "),me=a("a"),No=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Fo=n(" by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),Zt=h(),Qe=a("p"),Io=n("The abstract from the paper is the following:"),eo=h(),Xe=a("p"),Et=a("em"),Ro=n(`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),to=h(),Ye=a("p"),Wo=n("Usage:"),oo=h(),Ze=a("ul"),ue=a("li"),Uo=n("The model can be used in combination with the "),et=a("a"),Ho=n("EncoderDecoderModel"),Vo=n(` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),no=h(),k(fe.$$.fragment),ro=h(),tt=a("ul"),ge=a("li"),Jo=n("Pretrained "),ot=a("a"),Ko=n("EncoderDecoderModel"),Qo=n(" are also directly available in the model hub, e.g.,"),ao=h(),k(_e.$$.fragment),so=h(),nt=a("p"),Xo=n("Tips:"),io=h(),Y=a("ul"),O=a("li"),rt=a("a"),Yo=n("BertGenerationEncoder"),Zo=n(" and "),at=a("a"),en=n("BertGenerationDecoder"),tn=n(` should be used in
combination with `),Bt=a("code"),on=n("EncoderDecoder"),nn=n("."),rn=h(),zt=a("li"),an=n(`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),lo=h(),L=a("p"),sn=n("This model was contributed by "),be=a("a"),dn=n("patrickvonplaten"),ln=n(`. The original code can be
found `),ve=a("a"),cn=n("here"),hn=n("."),co=h(),I=a("h2"),Z=a("a"),Gt=a("span"),k(ke.$$.fragment),pn=h(),qt=a("span"),mn=n("BertGenerationConfig"),ho=h(),P=a("div"),k(ye.$$.fragment),un=h(),R=a("p"),fn=n("This is the configuration class to store the configuration of a "),xt=a("code"),gn=n("BertGenerationPreTrainedModel"),_n=n(`. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BertGeneration
`),Te=a("a"),bn=n("google/bert_for_seq_generation_L-24_bbc_encoder"),vn=n(`
architecture.`),kn=h(),W=a("p"),yn=n("Configuration objects inherit from "),st=a("a"),Tn=n("PretrainedConfig"),wn=n(` and can be used to control the model outputs. Read the
documentation from `),it=a("a"),$n=n("PretrainedConfig"),En=n(" for more information."),Bn=h(),k(ee.$$.fragment),po=h(),U=a("h2"),te=a("a"),Pt=a("span"),k(we.$$.fragment),zn=h(),jt=a("span"),Gn=n("BertGenerationTokenizer"),mo=h(),j=a("div"),k($e.$$.fragment),qn=h(),Ee=a("p"),xn=n("Construct a BertGeneration tokenizer. Based on "),Be=a("a"),Pn=n("SentencePiece"),jn=n("."),Cn=h(),ze=a("p"),Dn=n("This tokenizer inherits from "),dt=a("a"),Sn=n("PreTrainedTokenizer"),An=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Mn=h(),lt=a("div"),k(Ge.$$.fragment),uo=h(),H=a("h2"),oe=a("a"),Ct=a("span"),k(qe.$$.fragment),On=h(),Dt=a("span"),Ln=n("BertGenerationEncoder"),fo=h(),B=a("div"),k(xe.$$.fragment),Nn=h(),St=a("p"),Fn=n("The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),In=h(),Pe=a("p"),Rn=n("This model inherits from "),ct=a("a"),Wn=n("PreTrainedModel"),Un=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hn=h(),je=a("p"),Vn=n("This model is also a PyTorch "),Ce=a("a"),Jn=n("torch.nn.Module"),Kn=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qn=h(),De=a("p"),Xn=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Se=a("a"),Yn=n(`Attention is
all you need`),Zn=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),er=h(),V=a("p"),tr=n("This model should be used when leveraging Bert or Roberta checkpoints for the "),ht=a("a"),or=n("EncoderDecoderModel"),nr=n(` class as
described in `),Ae=a("a"),rr=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),ar=n(`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),sr=h(),z=a("p"),ir=n("To behave as an decoder the model needs to be initialized with the "),At=a("code"),dr=n("is_decoder"),lr=n(` argument of the configuration set
to `),Mt=a("code"),cr=n("True"),hr=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Ot=a("code"),pr=n("is_decoder"),mr=n(` argument and
`),Lt=a("code"),ur=n("add_cross_attention"),fr=n(" set to "),Nt=a("code"),gr=n("True"),_r=n("; an "),Ft=a("code"),br=n("encoder_hidden_states"),vr=n(" is then expected as an input to the forward pass."),kr=h(),D=a("div"),k(Me.$$.fragment),yr=h(),J=a("p"),Tr=n("The "),pt=a("a"),wr=n("BertGenerationEncoder"),$r=n(" forward method, overrides the "),It=a("code"),Er=n("__call__"),Br=n(" special method."),zr=h(),k(ne.$$.fragment),Gr=h(),k(re.$$.fragment),go=h(),K=a("h2"),ae=a("a"),Rt=a("span"),k(Oe.$$.fragment),qr=h(),Wt=a("span"),xr=n("BertGenerationDecoder"),_o=h(),q=a("div"),k(Le.$$.fragment),Pr=h(),Ne=a("p"),jr=n("BertGeneration Model with a "),Ut=a("code"),Cr=n("language modeling"),Dr=n(" head on top for CLM fine-tuning."),Sr=h(),Fe=a("p"),Ar=n("This model inherits from "),mt=a("a"),Mr=n("PreTrainedModel"),Or=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lr=h(),Ie=a("p"),Nr=n("This model is also a PyTorch "),Re=a("a"),Fr=n("torch.nn.Module"),Ir=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr=h(),S=a("div"),k(We.$$.fragment),Wr=h(),Q=a("p"),Ur=n("The "),ut=a("a"),Hr=n("BertGenerationDecoder"),Vr=n(" forward method, overrides the "),Ht=a("code"),Jr=n("__call__"),Kr=n(" special method."),Qr=h(),k(se.$$.fragment),Xr=h(),k(ie.$$.fragment),this.h()},l(t){const c=ds('[data-svelte="svelte-1phssyn"]',document.head);m=s(c,"META",{name:!0,content:!0}),c.forEach(o),v=p(t),_=s(t,"H1",{class:!0});var Ue=i(_);f=s(Ue,"A",{id:!0,class:!0,href:!0});var Vt=i(f);b=s(Vt,"SPAN",{});var Jt=i(b);y(d.$$.fragment,Jt),Jt.forEach(o),Vt.forEach(o),g=p(Ue),A=s(Ue,"SPAN",{});var Kt=i(A);Do=r(Kt,"BertGeneration"),Kt.forEach(o),Ue.forEach(o),Xt=p(t),F=s(t,"H2",{class:!0});var He=i(F);X=s(He,"A",{id:!0,class:!0,href:!0});var ea=i(X);wt=s(ea,"SPAN",{});var ta=i(wt);y(pe.$$.fragment,ta),ta.forEach(o),ea.forEach(o),So=p(He),$t=s(He,"SPAN",{});var oa=i($t);Ao=r(oa,"Overview"),oa.forEach(o),He.forEach(o),Yt=p(t),M=s(t,"P",{});var ft=i(M);Mo=r(ft,`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Ke=s(ft,"A",{href:!0});var na=i(Ke);Oo=r(na,"EncoderDecoderModel"),na.forEach(o),Lo=r(ft," as proposed in "),me=s(ft,"A",{href:!0,rel:!0});var ra=i(me);No=r(ra,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ra.forEach(o),Fo=r(ft," by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),ft.forEach(o),Zt=p(t),Qe=s(t,"P",{});var aa=i(Qe);Io=r(aa,"The abstract from the paper is the following:"),aa.forEach(o),eo=p(t),Xe=s(t,"P",{});var sa=i(Xe);Et=s(sa,"EM",{});var ia=i(Et);Ro=r(ia,`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),ia.forEach(o),sa.forEach(o),to=p(t),Ye=s(t,"P",{});var da=i(Ye);Wo=r(da,"Usage:"),da.forEach(o),oo=p(t),Ze=s(t,"UL",{});var la=i(Ze);ue=s(la,"LI",{});var vo=i(ue);Uo=r(vo,"The model can be used in combination with the "),et=s(vo,"A",{href:!0});var ca=i(et);Ho=r(ca,"EncoderDecoderModel"),ca.forEach(o),Vo=r(vo,` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),vo.forEach(o),la.forEach(o),no=p(t),y(fe.$$.fragment,t),ro=p(t),tt=s(t,"UL",{});var ha=i(tt);ge=s(ha,"LI",{});var ko=i(ge);Jo=r(ko,"Pretrained "),ot=s(ko,"A",{href:!0});var pa=i(ot);Ko=r(pa,"EncoderDecoderModel"),pa.forEach(o),Qo=r(ko," are also directly available in the model hub, e.g.,"),ko.forEach(o),ha.forEach(o),ao=p(t),y(_e.$$.fragment,t),so=p(t),nt=s(t,"P",{});var ma=i(nt);Xo=r(ma,"Tips:"),ma.forEach(o),io=p(t),Y=s(t,"UL",{});var yo=i(Y);O=s(yo,"LI",{});var Ve=i(O);rt=s(Ve,"A",{href:!0});var ua=i(rt);Yo=r(ua,"BertGenerationEncoder"),ua.forEach(o),Zo=r(Ve," and "),at=s(Ve,"A",{href:!0});var fa=i(at);en=r(fa,"BertGenerationDecoder"),fa.forEach(o),tn=r(Ve,` should be used in
combination with `),Bt=s(Ve,"CODE",{});var ga=i(Bt);on=r(ga,"EncoderDecoder"),ga.forEach(o),nn=r(Ve,"."),Ve.forEach(o),rn=p(yo),zt=s(yo,"LI",{});var _a=i(zt);an=r(_a,`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),_a.forEach(o),yo.forEach(o),lo=p(t),L=s(t,"P",{});var gt=i(L);sn=r(gt,"This model was contributed by "),be=s(gt,"A",{href:!0,rel:!0});var ba=i(be);dn=r(ba,"patrickvonplaten"),ba.forEach(o),ln=r(gt,`. The original code can be
found `),ve=s(gt,"A",{href:!0,rel:!0});var va=i(ve);cn=r(va,"here"),va.forEach(o),hn=r(gt,"."),gt.forEach(o),co=p(t),I=s(t,"H2",{class:!0});var To=i(I);Z=s(To,"A",{id:!0,class:!0,href:!0});var ka=i(Z);Gt=s(ka,"SPAN",{});var ya=i(Gt);y(ke.$$.fragment,ya),ya.forEach(o),ka.forEach(o),pn=p(To),qt=s(To,"SPAN",{});var Ta=i(qt);mn=r(Ta,"BertGenerationConfig"),Ta.forEach(o),To.forEach(o),ho=p(t),P=s(t,"DIV",{class:!0});var de=i(P);y(ye.$$.fragment,de),un=p(de),R=s(de,"P",{});var _t=i(R);fn=r(_t,"This is the configuration class to store the configuration of a "),xt=s(_t,"CODE",{});var wa=i(xt);gn=r(wa,"BertGenerationPreTrainedModel"),wa.forEach(o),_n=r(_t,`. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BertGeneration
`),Te=s(_t,"A",{href:!0,rel:!0});var $a=i(Te);bn=r($a,"google/bert_for_seq_generation_L-24_bbc_encoder"),$a.forEach(o),vn=r(_t,`
architecture.`),_t.forEach(o),kn=p(de),W=s(de,"P",{});var bt=i(W);yn=r(bt,"Configuration objects inherit from "),st=s(bt,"A",{href:!0});var Ea=i(st);Tn=r(Ea,"PretrainedConfig"),Ea.forEach(o),wn=r(bt,` and can be used to control the model outputs. Read the
documentation from `),it=s(bt,"A",{href:!0});var Ba=i(it);$n=r(Ba,"PretrainedConfig"),Ba.forEach(o),En=r(bt," for more information."),bt.forEach(o),Bn=p(de),y(ee.$$.fragment,de),de.forEach(o),po=p(t),U=s(t,"H2",{class:!0});var wo=i(U);te=s(wo,"A",{id:!0,class:!0,href:!0});var za=i(te);Pt=s(za,"SPAN",{});var Ga=i(Pt);y(we.$$.fragment,Ga),Ga.forEach(o),za.forEach(o),zn=p(wo),jt=s(wo,"SPAN",{});var qa=i(jt);Gn=r(qa,"BertGenerationTokenizer"),qa.forEach(o),wo.forEach(o),mo=p(t),j=s(t,"DIV",{class:!0});var le=i(j);y($e.$$.fragment,le),qn=p(le),Ee=s(le,"P",{});var $o=i(Ee);xn=r($o,"Construct a BertGeneration tokenizer. Based on "),Be=s($o,"A",{href:!0,rel:!0});var xa=i(Be);Pn=r(xa,"SentencePiece"),xa.forEach(o),jn=r($o,"."),$o.forEach(o),Cn=p(le),ze=s(le,"P",{});var Eo=i(ze);Dn=r(Eo,"This tokenizer inherits from "),dt=s(Eo,"A",{href:!0});var Pa=i(dt);Sn=r(Pa,"PreTrainedTokenizer"),Pa.forEach(o),An=r(Eo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Eo.forEach(o),Mn=p(le),lt=s(le,"DIV",{class:!0});var ja=i(lt);y(Ge.$$.fragment,ja),ja.forEach(o),le.forEach(o),uo=p(t),H=s(t,"H2",{class:!0});var Bo=i(H);oe=s(Bo,"A",{id:!0,class:!0,href:!0});var Ca=i(oe);Ct=s(Ca,"SPAN",{});var Da=i(Ct);y(qe.$$.fragment,Da),Da.forEach(o),Ca.forEach(o),On=p(Bo),Dt=s(Bo,"SPAN",{});var Sa=i(Dt);Ln=r(Sa,"BertGenerationEncoder"),Sa.forEach(o),Bo.forEach(o),fo=p(t),B=s(t,"DIV",{class:!0});var G=i(B);y(xe.$$.fragment,G),Nn=p(G),St=s(G,"P",{});var Aa=i(St);Fn=r(Aa,"The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),Aa.forEach(o),In=p(G),Pe=s(G,"P",{});var zo=i(Pe);Rn=r(zo,"This model inherits from "),ct=s(zo,"A",{href:!0});var Ma=i(ct);Wn=r(Ma,"PreTrainedModel"),Ma.forEach(o),Un=r(zo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zo.forEach(o),Hn=p(G),je=s(G,"P",{});var Go=i(je);Vn=r(Go,"This model is also a PyTorch "),Ce=s(Go,"A",{href:!0,rel:!0});var Oa=i(Ce);Jn=r(Oa,"torch.nn.Module"),Oa.forEach(o),Kn=r(Go,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Go.forEach(o),Qn=p(G),De=s(G,"P",{});var qo=i(De);Xn=r(qo,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Se=s(qo,"A",{href:!0,rel:!0});var La=i(Se);Yn=r(La,`Attention is
all you need`),La.forEach(o),Zn=r(qo,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),qo.forEach(o),er=p(G),V=s(G,"P",{});var vt=i(V);tr=r(vt,"This model should be used when leveraging Bert or Roberta checkpoints for the "),ht=s(vt,"A",{href:!0});var Na=i(ht);or=r(Na,"EncoderDecoderModel"),Na.forEach(o),nr=r(vt,` class as
described in `),Ae=s(vt,"A",{href:!0,rel:!0});var Fa=i(Ae);rr=r(Fa,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Fa.forEach(o),ar=r(vt,`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),vt.forEach(o),sr=p(G),z=s(G,"P",{});var x=i(z);ir=r(x,"To behave as an decoder the model needs to be initialized with the "),At=s(x,"CODE",{});var Ia=i(At);dr=r(Ia,"is_decoder"),Ia.forEach(o),lr=r(x,` argument of the configuration set
to `),Mt=s(x,"CODE",{});var Ra=i(Mt);cr=r(Ra,"True"),Ra.forEach(o),hr=r(x,". To be used in a Seq2Seq model, the model needs to initialized with both "),Ot=s(x,"CODE",{});var Wa=i(Ot);pr=r(Wa,"is_decoder"),Wa.forEach(o),mr=r(x,` argument and
`),Lt=s(x,"CODE",{});var Ua=i(Lt);ur=r(Ua,"add_cross_attention"),Ua.forEach(o),fr=r(x," set to "),Nt=s(x,"CODE",{});var Ha=i(Nt);gr=r(Ha,"True"),Ha.forEach(o),_r=r(x,"; an "),Ft=s(x,"CODE",{});var Va=i(Ft);br=r(Va,"encoder_hidden_states"),Va.forEach(o),vr=r(x," is then expected as an input to the forward pass."),x.forEach(o),kr=p(G),D=s(G,"DIV",{class:!0});var ce=i(D);y(Me.$$.fragment,ce),yr=p(ce),J=s(ce,"P",{});var kt=i(J);Tr=r(kt,"The "),pt=s(kt,"A",{href:!0});var Ja=i(pt);wr=r(Ja,"BertGenerationEncoder"),Ja.forEach(o),$r=r(kt," forward method, overrides the "),It=s(kt,"CODE",{});var Ka=i(It);Er=r(Ka,"__call__"),Ka.forEach(o),Br=r(kt," special method."),kt.forEach(o),zr=p(ce),y(ne.$$.fragment,ce),Gr=p(ce),y(re.$$.fragment,ce),ce.forEach(o),G.forEach(o),go=p(t),K=s(t,"H2",{class:!0});var xo=i(K);ae=s(xo,"A",{id:!0,class:!0,href:!0});var Qa=i(ae);Rt=s(Qa,"SPAN",{});var Xa=i(Rt);y(Oe.$$.fragment,Xa),Xa.forEach(o),Qa.forEach(o),qr=p(xo),Wt=s(xo,"SPAN",{});var Ya=i(Wt);xr=r(Ya,"BertGenerationDecoder"),Ya.forEach(o),xo.forEach(o),_o=p(t),q=s(t,"DIV",{class:!0});var N=i(q);y(Le.$$.fragment,N),Pr=p(N),Ne=s(N,"P",{});var Po=i(Ne);jr=r(Po,"BertGeneration Model with a "),Ut=s(Po,"CODE",{});var Za=i(Ut);Cr=r(Za,"language modeling"),Za.forEach(o),Dr=r(Po," head on top for CLM fine-tuning."),Po.forEach(o),Sr=p(N),Fe=s(N,"P",{});var jo=i(Fe);Ar=r(jo,"This model inherits from "),mt=s(jo,"A",{href:!0});var es=i(mt);Mr=r(es,"PreTrainedModel"),es.forEach(o),Or=r(jo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jo.forEach(o),Lr=p(N),Ie=s(N,"P",{});var Co=i(Ie);Nr=r(Co,"This model is also a PyTorch "),Re=s(Co,"A",{href:!0,rel:!0});var ts=i(Re);Fr=r(ts,"torch.nn.Module"),ts.forEach(o),Ir=r(Co,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Co.forEach(o),Rr=p(N),S=s(N,"DIV",{class:!0});var he=i(S);y(We.$$.fragment,he),Wr=p(he),Q=s(he,"P",{});var yt=i(Q);Ur=r(yt,"The "),ut=s(yt,"A",{href:!0});var os=i(ut);Hr=r(os,"BertGenerationDecoder"),os.forEach(o),Vr=r(yt," forward method, overrides the "),Ht=s(yt,"CODE",{});var ns=i(Ht);Jr=r(ns,"__call__"),ns.forEach(o),Kr=r(yt," special method."),yt.forEach(o),Qr=p(he),y(se.$$.fragment,he),Xr=p(he),y(ie.$$.fragment,he),he.forEach(o),N.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(gs)),l(f,"id","bertgeneration"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#bertgeneration"),l(_,"class","relative group"),l(X,"id","overview"),l(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(X,"href","#overview"),l(F,"class","relative group"),l(Ke,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(me,"href","https://arxiv.org/abs/1907.12461"),l(me,"rel","nofollow"),l(et,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(ot,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(rt,"href","/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),l(at,"href","/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),l(be,"href","https://huggingface.co/patrickvonplaten"),l(be,"rel","nofollow"),l(ve,"href","https://tfhub.dev/s?module-type=text-generation&subtype=module,placeholder"),l(ve,"rel","nofollow"),l(Z,"id","transformers.BertGenerationConfig"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.BertGenerationConfig"),l(I,"class","relative group"),l(Te,"href","https://huggingface.co/google/bert_for_seq_generation_L-24_bbc_encoder"),l(Te,"rel","nofollow"),l(st,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(it,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"id","transformers.BertGenerationTokenizer"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.BertGenerationTokenizer"),l(U,"class","relative group"),l(Be,"href","https://github.com/google/sentencepiece"),l(Be,"rel","nofollow"),l(dt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oe,"id","transformers.BertGenerationEncoder"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.BertGenerationEncoder"),l(H,"class","relative group"),l(ct,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Ce,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ce,"rel","nofollow"),l(Se,"href","https://arxiv.org/abs/1706.03762"),l(Se,"rel","nofollow"),l(ht,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Ae,"href","https://arxiv.org/abs/1907.12461"),l(Ae,"rel","nofollow"),l(pt,"href","/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ae,"id","transformers.BertGenerationDecoder"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.BertGenerationDecoder"),l(K,"class","relative group"),l(mt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Re,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Re,"rel","nofollow"),l(ut,"href","/docs/transformers/main/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,c){e(document.head,m),u(t,v,c),u(t,_,c),e(_,f),e(f,b),T(d,b,null),e(_,g),e(_,A),e(A,Do),u(t,Xt,c),u(t,F,c),e(F,X),e(X,wt),T(pe,wt,null),e(F,So),e(F,$t),e($t,Ao),u(t,Yt,c),u(t,M,c),e(M,Mo),e(M,Ke),e(Ke,Oo),e(M,Lo),e(M,me),e(me,No),e(M,Fo),u(t,Zt,c),u(t,Qe,c),e(Qe,Io),u(t,eo,c),u(t,Xe,c),e(Xe,Et),e(Et,Ro),u(t,to,c),u(t,Ye,c),e(Ye,Wo),u(t,oo,c),u(t,Ze,c),e(Ze,ue),e(ue,Uo),e(ue,et),e(et,Ho),e(ue,Vo),u(t,no,c),T(fe,t,c),u(t,ro,c),u(t,tt,c),e(tt,ge),e(ge,Jo),e(ge,ot),e(ot,Ko),e(ge,Qo),u(t,ao,c),T(_e,t,c),u(t,so,c),u(t,nt,c),e(nt,Xo),u(t,io,c),u(t,Y,c),e(Y,O),e(O,rt),e(rt,Yo),e(O,Zo),e(O,at),e(at,en),e(O,tn),e(O,Bt),e(Bt,on),e(O,nn),e(Y,rn),e(Y,zt),e(zt,an),u(t,lo,c),u(t,L,c),e(L,sn),e(L,be),e(be,dn),e(L,ln),e(L,ve),e(ve,cn),e(L,hn),u(t,co,c),u(t,I,c),e(I,Z),e(Z,Gt),T(ke,Gt,null),e(I,pn),e(I,qt),e(qt,mn),u(t,ho,c),u(t,P,c),T(ye,P,null),e(P,un),e(P,R),e(R,fn),e(R,xt),e(xt,gn),e(R,_n),e(R,Te),e(Te,bn),e(R,vn),e(P,kn),e(P,W),e(W,yn),e(W,st),e(st,Tn),e(W,wn),e(W,it),e(it,$n),e(W,En),e(P,Bn),T(ee,P,null),u(t,po,c),u(t,U,c),e(U,te),e(te,Pt),T(we,Pt,null),e(U,zn),e(U,jt),e(jt,Gn),u(t,mo,c),u(t,j,c),T($e,j,null),e(j,qn),e(j,Ee),e(Ee,xn),e(Ee,Be),e(Be,Pn),e(Ee,jn),e(j,Cn),e(j,ze),e(ze,Dn),e(ze,dt),e(dt,Sn),e(ze,An),e(j,Mn),e(j,lt),T(Ge,lt,null),u(t,uo,c),u(t,H,c),e(H,oe),e(oe,Ct),T(qe,Ct,null),e(H,On),e(H,Dt),e(Dt,Ln),u(t,fo,c),u(t,B,c),T(xe,B,null),e(B,Nn),e(B,St),e(St,Fn),e(B,In),e(B,Pe),e(Pe,Rn),e(Pe,ct),e(ct,Wn),e(Pe,Un),e(B,Hn),e(B,je),e(je,Vn),e(je,Ce),e(Ce,Jn),e(je,Kn),e(B,Qn),e(B,De),e(De,Xn),e(De,Se),e(Se,Yn),e(De,Zn),e(B,er),e(B,V),e(V,tr),e(V,ht),e(ht,or),e(V,nr),e(V,Ae),e(Ae,rr),e(V,ar),e(B,sr),e(B,z),e(z,ir),e(z,At),e(At,dr),e(z,lr),e(z,Mt),e(Mt,cr),e(z,hr),e(z,Ot),e(Ot,pr),e(z,mr),e(z,Lt),e(Lt,ur),e(z,fr),e(z,Nt),e(Nt,gr),e(z,_r),e(z,Ft),e(Ft,br),e(z,vr),e(B,kr),e(B,D),T(Me,D,null),e(D,yr),e(D,J),e(J,Tr),e(J,pt),e(pt,wr),e(J,$r),e(J,It),e(It,Er),e(J,Br),e(D,zr),T(ne,D,null),e(D,Gr),T(re,D,null),u(t,go,c),u(t,K,c),e(K,ae),e(ae,Rt),T(Oe,Rt,null),e(K,qr),e(K,Wt),e(Wt,xr),u(t,_o,c),u(t,q,c),T(Le,q,null),e(q,Pr),e(q,Ne),e(Ne,jr),e(Ne,Ut),e(Ut,Cr),e(Ne,Dr),e(q,Sr),e(q,Fe),e(Fe,Ar),e(Fe,mt),e(mt,Mr),e(Fe,Or),e(q,Lr),e(q,Ie),e(Ie,Nr),e(Ie,Re),e(Re,Fr),e(Ie,Ir),e(q,Rr),e(q,S),T(We,S,null),e(S,Wr),e(S,Q),e(Q,Ur),e(Q,ut),e(ut,Hr),e(Q,Vr),e(Q,Ht),e(Ht,Jr),e(Q,Kr),e(S,Qr),T(se,S,null),e(S,Xr),T(ie,S,null),bo=!0},p(t,[c]){const Ue={};c&2&&(Ue.$$scope={dirty:c,ctx:t}),ee.$set(Ue);const Vt={};c&2&&(Vt.$$scope={dirty:c,ctx:t}),ne.$set(Vt);const Jt={};c&2&&(Jt.$$scope={dirty:c,ctx:t}),re.$set(Jt);const Kt={};c&2&&(Kt.$$scope={dirty:c,ctx:t}),se.$set(Kt);const He={};c&2&&(He.$$scope={dirty:c,ctx:t}),ie.$set(He)},i(t){bo||(w(d.$$.fragment,t),w(pe.$$.fragment,t),w(fe.$$.fragment,t),w(_e.$$.fragment,t),w(ke.$$.fragment,t),w(ye.$$.fragment,t),w(ee.$$.fragment,t),w(we.$$.fragment,t),w($e.$$.fragment,t),w(Ge.$$.fragment,t),w(qe.$$.fragment,t),w(xe.$$.fragment,t),w(Me.$$.fragment,t),w(ne.$$.fragment,t),w(re.$$.fragment,t),w(Oe.$$.fragment,t),w(Le.$$.fragment,t),w(We.$$.fragment,t),w(se.$$.fragment,t),w(ie.$$.fragment,t),bo=!0)},o(t){$(d.$$.fragment,t),$(pe.$$.fragment,t),$(fe.$$.fragment,t),$(_e.$$.fragment,t),$(ke.$$.fragment,t),$(ye.$$.fragment,t),$(ee.$$.fragment,t),$(we.$$.fragment,t),$($e.$$.fragment,t),$(Ge.$$.fragment,t),$(qe.$$.fragment,t),$(xe.$$.fragment,t),$(Me.$$.fragment,t),$(ne.$$.fragment,t),$(re.$$.fragment,t),$(Oe.$$.fragment,t),$(Le.$$.fragment,t),$(We.$$.fragment,t),$(se.$$.fragment,t),$(ie.$$.fragment,t),bo=!1},d(t){o(m),t&&o(v),t&&o(_),E(d),t&&o(Xt),t&&o(F),E(pe),t&&o(Yt),t&&o(M),t&&o(Zt),t&&o(Qe),t&&o(eo),t&&o(Xe),t&&o(to),t&&o(Ye),t&&o(oo),t&&o(Ze),t&&o(no),E(fe,t),t&&o(ro),t&&o(tt),t&&o(ao),E(_e,t),t&&o(so),t&&o(nt),t&&o(io),t&&o(Y),t&&o(lo),t&&o(L),t&&o(co),t&&o(I),E(ke),t&&o(ho),t&&o(P),E(ye),E(ee),t&&o(po),t&&o(U),E(we),t&&o(mo),t&&o(j),E($e),E(Ge),t&&o(uo),t&&o(H),E(qe),t&&o(fo),t&&o(B),E(xe),E(Me),E(ne),E(re),t&&o(go),t&&o(K),E(Oe),t&&o(_o),t&&o(q),E(Le),E(We),E(se),E(ie)}}}const gs={local:"bertgeneration",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertGenerationConfig",title:"BertGenerationConfig"},{local:"transformers.BertGenerationTokenizer",title:"BertGenerationTokenizer"},{local:"transformers.BertGenerationEncoder",title:"BertGenerationEncoder"},{local:"transformers.BertGenerationDecoder",title:"BertGenerationDecoder"}],title:"BertGeneration"};function _s(C){return ls(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $s extends as{constructor(m){super();ss(this,m,_s,fs,is,{})}}export{$s as default,gs as metadata};
