import{S as ii,i as di,s as li,e as n,k as d,w as u,t as r,M as ci,c as s,d as o,m as l,a,x as f,h as i,b as c,F as e,g as p,y as _,q as g,o as k,B as M,v as hi}from"../../chunks/vendor-6b77c823.js";import{T as ri}from"../../chunks/Tip-39098574.js";import{D as H}from"../../chunks/Docstring-90e3aa51.js";import{C as st}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as at}from"../../chunks/IconCopyLink-7a11ce68.js";function pi(rt){let m,S,b,q,F;return{c(){m=n("p"),S=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),q=r("Module"),F=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){m=s(y,"P",{});var z=a(m);S=i(z,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(z,"CODE",{});var I=a(b);q=i(I,"Module"),I.forEach(o),F=i(z,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),z.forEach(o)},m(y,z){p(y,m,z),e(m,S),e(m,b),e(b,q),e(m,F)},d(y){y&&o(m)}}}function mi(rt){let m,S,b,q,F;return{c(){m=n("p"),S=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),q=r("Module"),F=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){m=s(y,"P",{});var z=a(m);S=i(z,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(z,"CODE",{});var I=a(b);q=i(I,"Module"),I.forEach(o),F=i(z,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),z.forEach(o)},m(y,z){p(y,m,z),e(m,S),e(m,b),e(b,q),e(m,F)},d(y){y&&o(m)}}}function ui(rt){let m,S,b,q,F,y,z,I,an,go,U,te,xt,_e,rn,Et,dn,ko,oe,ln,ge,cn,hn,Mo,it,pn,vo,dt,Ct,mn,bo,ne,un,ke,fn,_n,yo,V,se,jt,Me,gn,Ft,kn,To,L,Mn,Pt,vn,bn,Ot,yn,Tn,St,wn,zn,wo,E,qn,lt,$n,xn,Lt,En,Cn,At,jn,Fn,Dt,Pn,On,zo,ct,It,Sn,qo,ve,$o,ht,be,Nt,Ln,An,$,Dn,Gt,In,Nn,Wt,Gn,Wn,Bt,Bn,Hn,Ht,Un,Vn,Ut,Xn,Rn,xo,ye,Eo,X,ae,Vt,Te,Jn,Xt,Kn,Co,x,we,Zn,R,Qn,pt,Yn,es,ze,ts,os,ns,J,ss,mt,as,rs,ut,is,ds,ls,Rt,cs,hs,qe,jo,K,re,Jt,$e,ps,Kt,ms,Fo,v,xe,us,Ee,fs,Ce,_s,gs,ks,je,Ms,ft,vs,bs,ys,Zt,Ts,ws,Fe,zs,A,Pe,qs,Oe,$s,Qt,xs,Es,Cs,Se,Le,Yt,js,Fs,eo,Ps,Os,Ae,to,Ss,Ls,oo,As,Ds,no,Is,Ns,ie,De,Gs,Ie,Ws,so,Bs,Hs,Us,N,Ne,Vs,_t,Xs,gt,Rs,Js,ao,Ks,Zs,kt,Ge,Po,Z,de,ro,We,Qs,io,Ys,Oo,P,Be,ea,He,ta,Mt,oa,na,sa,Ue,aa,Ve,ra,ia,da,C,Xe,la,Q,ca,vt,ha,pa,lo,ma,ua,fa,le,_a,co,ga,ka,Re,So,Y,ce,ho,Je,Ma,po,va,Lo,O,Ke,ba,Ze,ya,bt,Ta,wa,za,Qe,qa,Ye,$a,xa,Ea,T,et,Ca,ee,ja,yt,Fa,Pa,mo,Oa,Sa,La,he,Aa,uo,Da,Ia,tt,Na,fo,Ga,Wa,ot,Ao;return y=new at({}),_e=new at({}),Me=new at({}),ve=new st({props:{code:`from transformers import M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M", src_lang="en", tgt_lang="fr")

src_text = "Life is like a box of chocolates."
tgt_text = "La vie est comme une bo\xEEte de chocolat."

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

loss = model(**model_inputs, labels=labels)  # forward pass`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>, src_lang=<span class="hljs-string">&quot;en&quot;</span>, tgt_lang=<span class="hljs-string">&quot;fr&quot;</span>)

src_text = <span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>
tgt_text = <span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

loss = model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),ye=new st({props:{code:`from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

hi_text = "\u091C\u0940\u0935\u0928 \u090F\u0915 \u091A\u0949\u0915\u0932\u0947\u091F \u092C\u0949\u0915\u094D\u0938 \u0915\u0940 \u0924\u0930\u0939 \u0939\u0948\u0964"
chinese_text = "\u751F\u6D3B\u5C31\u50CF\u4E00\u76D2\u5DE7\u514B\u529B\u3002"

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")

# translate Hindi to French
tokenizer.src_lang = "hi"
encoded_hi = tokenizer(hi_text, return_tensors="pt")
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id("fr"))
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)

# translate Chinese to English
tokenizer.src_lang = "zh"
encoded_zh = tokenizer(chinese_text, return_tensors="pt")
generated_tokens = model.generate(**encoded_zh, forced_bos_token_id=tokenizer.get_lang_id("en"))
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100ForConditionalGeneration, M2M100Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>hi_text = <span class="hljs-string">&quot;\u091C\u0940\u0935\u0928 \u090F\u0915 \u091A\u0949\u0915\u0932\u0947\u091F \u092C\u0949\u0915\u094D\u0938 \u0915\u0940 \u0924\u0930\u0939 \u0939\u0948\u0964&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>chinese_text = <span class="hljs-string">&quot;\u751F\u6D3B\u5C31\u50CF\u4E00\u76D2\u5DE7\u514B\u529B\u3002&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate Hindi to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.src_lang = <span class="hljs-string">&quot;hi&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_hi = tokenizer(hi_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate Chinese to English</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.src_lang = <span class="hljs-string">&quot;zh&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_zh = tokenizer(chinese_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_tokens = model.generate(**encoded_zh, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;en&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Life is like a box of chocolate.&quot;</span>`}}),Te=new at({}),we=new H({props:{name:"class transformers.M2M100Config",anchor:"transformers.M2M100Config",parameters:[{name:"vocab_size",val:" = 128112"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.05"},{name:"decoder_layerdrop",val:" = 0.05"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.M2M100Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the M2M100 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Model">M2M100Model</a> or`,name:"vocab_size"},{anchor:"transformers.M2M100Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.M2M100Config.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.M2M100Config.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.M2M100Config.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.M2M100Config.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.M2M100Config.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.M2M100Config.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.M2M100Config.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.M2M100Config.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.M2M100Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.M2M100Config.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.M2M100Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.M2M100Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.M2M100Config.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.M2M100Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/configuration_m2m_100.py#L34"}}),qe=new st({props:{code:`from transformers import M2M100Model, M2M100Config

# Initializing a M2M100 facebook/m2m100_418M style configuration
configuration = M2M100Config()

# Initializing a model from the facebook/m2m100_418M style configuration
model = M2M100Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Model, M2M100Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a M2M100 facebook/m2m100_418M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = M2M100Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/m2m100_418M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),$e=new at({}),xe=new H({props:{name:"class transformers.M2M100Tokenizer",anchor:"transformers.M2M100Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"language_codes",val:" = 'm2m100'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"num_madeup_words",val:" = 8"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.M2M100Tokenizer.spm_file",description:`<strong>spm_file</strong> (<code>str</code>) &#x2014;
Path to <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary.`,name:"spm_file"},{anchor:"transformers.M2M100Tokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.M2M100Tokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.M2M100Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.M2M100Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.M2M100Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.M2M100Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.M2M100Tokenizer.language_codes",description:`<strong>language_codes</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;m2m100&quot;</code>) &#x2014;
What language codes to use. Should be one of <code>&quot;m2m100&quot;</code> or <code>&quot;wmt21&quot;</code>.`,name:"language_codes"},{anchor:"transformers.M2M100Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/tokenization_m2m_100.py#L65"}}),Fe=new st({props:{code:`from transformers import M2M100Tokenizer

tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M", src_lang="en", tgt_lang="ro")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
model(**model_inputs, labels=labels)  # should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>, src_lang=<span class="hljs-string">&quot;en&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**model_inputs, labels=labels)  <span class="hljs-comment"># should work</span>`}}),Pe=new H({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/tokenization_m2m_100.py#L258",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),De=new H({props:{name:"get_special_tokens_mask",anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/tokenization_m2m_100.py#L228",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ne=new H({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2856",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ge=new H({props:{name:"save_vocabulary",anchor:"transformers.M2M100Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/tokenization_m2m_100.py#L304"}}),We=new at({}),Be=new H({props:{name:"class transformers.M2M100Model",anchor:"transformers.M2M100Model",parameters:[{name:"config",val:": M2M100Config"}],parametersDescription:[{anchor:"transformers.M2M100Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/modeling_m2m_100.py#L1124"}}),Xe=new H({props:{name:"forward",anchor:"transformers.M2M100Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.M2M100Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>M2M100 uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.M2M100Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.M2M100Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.M2M100Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.M2M100Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.M2M100Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.M2M100Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.M2M100Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.M2M100Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.M2M100Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.M2M100Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.M2M100Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/modeling_m2m_100.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Config"
>M2M100Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new ri({props:{$$slots:{default:[pi]},$$scope:{ctx:rt}}}),Re=new st({props:{code:`from transformers import M2M100Tokenizer, M2M100Model
import torch

tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")
model = M2M100Model.from_pretrained("facebook/m2m100_418M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100Model.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Je=new at({}),Ke=new H({props:{name:"class transformers.M2M100ForConditionalGeneration",anchor:"transformers.M2M100ForConditionalGeneration",parameters:[{name:"config",val:": M2M100Config"}],parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/modeling_m2m_100.py#L1235"}}),et=new H({props:{name:"forward",anchor:"transformers.M2M100ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>M2M100 uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/modeling_m2m_100.py#L1273",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Config"
>M2M100Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),he=new ri({props:{$$slots:{default:[mi]},$$scope:{ctx:rt}}}),tt=new st({props:{code:`from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")

text_to_translate = "Life is like a box of chocolates"
model_inputs = tokenizer(text_to_translate, return_tensors="pt")

# translate to French
gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id("fr"))
print(tokenizer.batch_decode(gen_tokens, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text_to_translate = <span class="hljs-string">&quot;Life is like a box of chocolates&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(text_to_translate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),ot=new st({props:{code:`from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")

text_to_translate = "Life is like a box of chocolates"
model_inputs = tokenizer(text_to_translate, return_tensors="pt")

# translate to French
gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id("fr"))
print(tokenizer.batch_decode(gen_tokens, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text_to_translate = <span class="hljs-string">&quot;Life is like a box of chocolates&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(text_to_translate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){m=n("meta"),S=d(),b=n("h1"),q=n("a"),F=n("span"),u(y.$$.fragment),z=d(),I=n("span"),an=r("M2M100"),go=d(),U=n("h2"),te=n("a"),xt=n("span"),u(_e.$$.fragment),rn=d(),Et=n("span"),dn=r("Overview"),ko=d(),oe=n("p"),ln=r("The M2M100 model was proposed in "),ge=n("a"),cn=r("Beyond English-Centric Multilingual Machine Translation"),hn=r(` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),Mo=d(),it=n("p"),pn=r("The abstract from the paper is the following:"),vo=d(),dt=n("p"),Ct=n("em"),mn=r(`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),bo=d(),ne=n("p"),un=r("This model was contributed by "),ke=n("a"),fn=r("valhalla"),_n=r("."),yo=d(),V=n("h3"),se=n("a"),jt=n("span"),u(Me.$$.fragment),gn=d(),Ft=n("span"),kn=r("Training and Generation"),To=d(),L=n("p"),Mn=r(`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),Pt=n("code"),vn=r("[lang_code] X [eos]"),bn=r(", where "),Ot=n("code"),yn=r("lang_code"),Tn=r(` is source language
id for source text and target language id for target text, with `),St=n("code"),wn=r("X"),zn=r(" being the source or target text."),wo=d(),E=n("p"),qn=r("The "),lt=n("a"),$n=r("M2M100Tokenizer"),xn=r(" depends on "),Lt=n("code"),En=r("sentencepiece"),Cn=r(` so be sure to install it before running the
examples. To install `),At=n("code"),jn=r("sentencepiece"),Fn=r(" run "),Dt=n("code"),Pn=r("pip install sentencepiece"),On=r("."),zo=d(),ct=n("ul"),It=n("li"),Sn=r("Supervised Training"),qo=d(),u(ve.$$.fragment),$o=d(),ht=n("ul"),be=n("li"),Nt=n("p"),Ln=r("Generation"),An=d(),$=n("p"),Dn=r("M2M100 uses the "),Gt=n("code"),In=r("eos_token_id"),Nn=r(" as the "),Wt=n("code"),Gn=r("decoder_start_token_id"),Wn=r(` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Bt=n("em"),Bn=r("forced_bos_token_id"),Hn=r(" parameter to the "),Ht=n("em"),Un=r("generate"),Vn=r(` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Ut=n("em"),Xn=r("facebook/m2m100_418M"),Rn=r(" checkpoint."),xo=d(),u(ye.$$.fragment),Eo=d(),X=n("h2"),ae=n("a"),Vt=n("span"),u(Te.$$.fragment),Jn=d(),Xt=n("span"),Kn=r("M2M100Config"),Co=d(),x=n("div"),u(we.$$.fragment),Zn=d(),R=n("p"),Qn=r("This is the configuration class to store the configuration of a "),pt=n("a"),Yn=r("M2M100Model"),es=r(`. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
`),ze=n("a"),ts=r("m2m100_418M"),os=r(" architecture."),ns=d(),J=n("p"),ss=r("Configuration objects inherit from "),mt=n("a"),as=r("PretrainedConfig"),rs=r(` and can be used to control the model outputs. Read the
documentation from `),ut=n("a"),is=r("PretrainedConfig"),ds=r(" for more information."),ls=d(),Rt=n("p"),cs=r("Example:"),hs=d(),u(qe.$$.fragment),jo=d(),K=n("h2"),re=n("a"),Jt=n("span"),u($e.$$.fragment),ps=d(),Kt=n("span"),ms=r("M2M100Tokenizer"),Fo=d(),v=n("div"),u(xe.$$.fragment),us=d(),Ee=n("p"),fs=r("Construct an M2M100 tokenizer. Based on "),Ce=n("a"),_s=r("SentencePiece"),gs=r("."),ks=d(),je=n("p"),Ms=r("This tokenizer inherits from "),ft=n("a"),vs=r("PreTrainedTokenizer"),bs=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ys=d(),Zt=n("p"),Ts=r("Examples:"),ws=d(),u(Fe.$$.fragment),zs=d(),A=n("div"),u(Pe.$$.fragment),qs=d(),Oe=n("p"),$s=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Qt=n("code"),xs=r("X"),Es=r(" represents the sequence:"),Cs=d(),Se=n("ul"),Le=n("li"),Yt=n("code"),js=r("input_ids"),Fs=r(" (for encoder) "),eo=n("code"),Ps=r("X [eos, src_lang_code]"),Os=d(),Ae=n("li"),to=n("code"),Ss=r("decoder_input_ids"),Ls=r(": (for decoder) "),oo=n("code"),As=r("X [eos, tgt_lang_code]"),Ds=d(),no=n("p"),Is=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ns=d(),ie=n("div"),u(De.$$.fragment),Gs=d(),Ie=n("p"),Ws=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),so=n("code"),Bs=r("prepare_for_model"),Hs=r(" method."),Us=d(),N=n("div"),u(Ne.$$.fragment),Vs=d(),_t=n("p"),Xs=r("Create the token type IDs corresponding to the sequences passed. "),gt=n("a"),Rs=r(`What are token type
IDs?`),Js=d(),ao=n("p"),Ks=r("Should be overridden in a subclass if the model has a special way of building those."),Zs=d(),kt=n("div"),u(Ge.$$.fragment),Po=d(),Z=n("h2"),de=n("a"),ro=n("span"),u(We.$$.fragment),Qs=d(),io=n("span"),Ys=r("M2M100Model"),Oo=d(),P=n("div"),u(Be.$$.fragment),ea=d(),He=n("p"),ta=r(`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mt=n("a"),oa=r("PreTrainedModel"),na=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sa=d(),Ue=n("p"),aa=r("This model is also a PyTorch "),Ve=n("a"),ra=r("torch.nn.Module"),ia=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),da=d(),C=n("div"),u(Xe.$$.fragment),la=d(),Q=n("p"),ca=r("The "),vt=n("a"),ha=r("M2M100Model"),pa=r(" forward method, overrides the "),lo=n("code"),ma=r("__call__"),ua=r(" special method."),fa=d(),u(le.$$.fragment),_a=d(),co=n("p"),ga=r("Example:"),ka=d(),u(Re.$$.fragment),So=d(),Y=n("h2"),ce=n("a"),ho=n("span"),u(Je.$$.fragment),Ma=d(),po=n("span"),va=r("M2M100ForConditionalGeneration"),Lo=d(),O=n("div"),u(Ke.$$.fragment),ba=d(),Ze=n("p"),ya=r(`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),bt=n("a"),Ta=r("PreTrainedModel"),wa=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),za=d(),Qe=n("p"),qa=r("This model is also a PyTorch "),Ye=n("a"),$a=r("torch.nn.Module"),xa=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ea=d(),T=n("div"),u(et.$$.fragment),Ca=d(),ee=n("p"),ja=r("The "),yt=n("a"),Fa=r("M2M100ForConditionalGeneration"),Pa=r(" forward method, overrides the "),mo=n("code"),Oa=r("__call__"),Sa=r(" special method."),La=d(),u(he.$$.fragment),Aa=d(),uo=n("p"),Da=r("Example:"),Ia=d(),u(tt.$$.fragment),Na=d(),fo=n("p"),Ga=r("Translation example::"),Wa=d(),u(ot.$$.fragment),this.h()},l(t){const h=ci('[data-svelte="svelte-1phssyn"]',document.head);m=s(h,"META",{name:!0,content:!0}),h.forEach(o),S=l(t),b=s(t,"H1",{class:!0});var nt=a(b);q=s(nt,"A",{id:!0,class:!0,href:!0});var _o=a(q);F=s(_o,"SPAN",{});var Ha=a(F);f(y.$$.fragment,Ha),Ha.forEach(o),_o.forEach(o),z=l(nt),I=s(nt,"SPAN",{});var Ua=a(I);an=i(Ua,"M2M100"),Ua.forEach(o),nt.forEach(o),go=l(t),U=s(t,"H2",{class:!0});var Do=a(U);te=s(Do,"A",{id:!0,class:!0,href:!0});var Va=a(te);xt=s(Va,"SPAN",{});var Xa=a(xt);f(_e.$$.fragment,Xa),Xa.forEach(o),Va.forEach(o),rn=l(Do),Et=s(Do,"SPAN",{});var Ra=a(Et);dn=i(Ra,"Overview"),Ra.forEach(o),Do.forEach(o),ko=l(t),oe=s(t,"P",{});var Io=a(oe);ln=i(Io,"The M2M100 model was proposed in "),ge=s(Io,"A",{href:!0,rel:!0});var Ja=a(ge);cn=i(Ja,"Beyond English-Centric Multilingual Machine Translation"),Ja.forEach(o),hn=i(Io,` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),Io.forEach(o),Mo=l(t),it=s(t,"P",{});var Ka=a(it);pn=i(Ka,"The abstract from the paper is the following:"),Ka.forEach(o),vo=l(t),dt=s(t,"P",{});var Za=a(dt);Ct=s(Za,"EM",{});var Qa=a(Ct);mn=i(Qa,`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),Qa.forEach(o),Za.forEach(o),bo=l(t),ne=s(t,"P",{});var No=a(ne);un=i(No,"This model was contributed by "),ke=s(No,"A",{href:!0,rel:!0});var Ya=a(ke);fn=i(Ya,"valhalla"),Ya.forEach(o),_n=i(No,"."),No.forEach(o),yo=l(t),V=s(t,"H3",{class:!0});var Go=a(V);se=s(Go,"A",{id:!0,class:!0,href:!0});var er=a(se);jt=s(er,"SPAN",{});var tr=a(jt);f(Me.$$.fragment,tr),tr.forEach(o),er.forEach(o),gn=l(Go),Ft=s(Go,"SPAN",{});var or=a(Ft);kn=i(or,"Training and Generation"),or.forEach(o),Go.forEach(o),To=l(t),L=s(t,"P",{});var pe=a(L);Mn=i(pe,`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),Pt=s(pe,"CODE",{});var nr=a(Pt);vn=i(nr,"[lang_code] X [eos]"),nr.forEach(o),bn=i(pe,", where "),Ot=s(pe,"CODE",{});var sr=a(Ot);yn=i(sr,"lang_code"),sr.forEach(o),Tn=i(pe,` is source language
id for source text and target language id for target text, with `),St=s(pe,"CODE",{});var ar=a(St);wn=i(ar,"X"),ar.forEach(o),zn=i(pe," being the source or target text."),pe.forEach(o),wo=l(t),E=s(t,"P",{});var G=a(E);qn=i(G,"The "),lt=s(G,"A",{href:!0});var rr=a(lt);$n=i(rr,"M2M100Tokenizer"),rr.forEach(o),xn=i(G," depends on "),Lt=s(G,"CODE",{});var ir=a(Lt);En=i(ir,"sentencepiece"),ir.forEach(o),Cn=i(G,` so be sure to install it before running the
examples. To install `),At=s(G,"CODE",{});var dr=a(At);jn=i(dr,"sentencepiece"),dr.forEach(o),Fn=i(G," run "),Dt=s(G,"CODE",{});var lr=a(Dt);Pn=i(lr,"pip install sentencepiece"),lr.forEach(o),On=i(G,"."),G.forEach(o),zo=l(t),ct=s(t,"UL",{});var cr=a(ct);It=s(cr,"LI",{});var hr=a(It);Sn=i(hr,"Supervised Training"),hr.forEach(o),cr.forEach(o),qo=l(t),f(ve.$$.fragment,t),$o=l(t),ht=s(t,"UL",{});var pr=a(ht);be=s(pr,"LI",{});var Wo=a(be);Nt=s(Wo,"P",{});var mr=a(Nt);Ln=i(mr,"Generation"),mr.forEach(o),An=l(Wo),$=s(Wo,"P",{});var D=a($);Dn=i(D,"M2M100 uses the "),Gt=s(D,"CODE",{});var ur=a(Gt);In=i(ur,"eos_token_id"),ur.forEach(o),Nn=i(D," as the "),Wt=s(D,"CODE",{});var fr=a(Wt);Gn=i(fr,"decoder_start_token_id"),fr.forEach(o),Wn=i(D,` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Bt=s(D,"EM",{});var _r=a(Bt);Bn=i(_r,"forced_bos_token_id"),_r.forEach(o),Hn=i(D," parameter to the "),Ht=s(D,"EM",{});var gr=a(Ht);Un=i(gr,"generate"),gr.forEach(o),Vn=i(D,` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Ut=s(D,"EM",{});var kr=a(Ut);Xn=i(kr,"facebook/m2m100_418M"),kr.forEach(o),Rn=i(D," checkpoint."),D.forEach(o),Wo.forEach(o),pr.forEach(o),xo=l(t),f(ye.$$.fragment,t),Eo=l(t),X=s(t,"H2",{class:!0});var Bo=a(X);ae=s(Bo,"A",{id:!0,class:!0,href:!0});var Mr=a(ae);Vt=s(Mr,"SPAN",{});var vr=a(Vt);f(Te.$$.fragment,vr),vr.forEach(o),Mr.forEach(o),Jn=l(Bo),Xt=s(Bo,"SPAN",{});var br=a(Xt);Kn=i(br,"M2M100Config"),br.forEach(o),Bo.forEach(o),Co=l(t),x=s(t,"DIV",{class:!0});var W=a(x);f(we.$$.fragment,W),Zn=l(W),R=s(W,"P",{});var Tt=a(R);Qn=i(Tt,"This is the configuration class to store the configuration of a "),pt=s(Tt,"A",{href:!0});var yr=a(pt);Yn=i(yr,"M2M100Model"),yr.forEach(o),es=i(Tt,`. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
`),ze=s(Tt,"A",{href:!0,rel:!0});var Tr=a(ze);ts=i(Tr,"m2m100_418M"),Tr.forEach(o),os=i(Tt," architecture."),Tt.forEach(o),ns=l(W),J=s(W,"P",{});var wt=a(J);ss=i(wt,"Configuration objects inherit from "),mt=s(wt,"A",{href:!0});var wr=a(mt);as=i(wr,"PretrainedConfig"),wr.forEach(o),rs=i(wt,` and can be used to control the model outputs. Read the
documentation from `),ut=s(wt,"A",{href:!0});var zr=a(ut);is=i(zr,"PretrainedConfig"),zr.forEach(o),ds=i(wt," for more information."),wt.forEach(o),ls=l(W),Rt=s(W,"P",{});var qr=a(Rt);cs=i(qr,"Example:"),qr.forEach(o),hs=l(W),f(qe.$$.fragment,W),W.forEach(o),jo=l(t),K=s(t,"H2",{class:!0});var Ho=a(K);re=s(Ho,"A",{id:!0,class:!0,href:!0});var $r=a(re);Jt=s($r,"SPAN",{});var xr=a(Jt);f($e.$$.fragment,xr),xr.forEach(o),$r.forEach(o),ps=l(Ho),Kt=s(Ho,"SPAN",{});var Er=a(Kt);ms=i(Er,"M2M100Tokenizer"),Er.forEach(o),Ho.forEach(o),Fo=l(t),v=s(t,"DIV",{class:!0});var w=a(v);f(xe.$$.fragment,w),us=l(w),Ee=s(w,"P",{});var Uo=a(Ee);fs=i(Uo,"Construct an M2M100 tokenizer. Based on "),Ce=s(Uo,"A",{href:!0,rel:!0});var Cr=a(Ce);_s=i(Cr,"SentencePiece"),Cr.forEach(o),gs=i(Uo,"."),Uo.forEach(o),ks=l(w),je=s(w,"P",{});var Vo=a(je);Ms=i(Vo,"This tokenizer inherits from "),ft=s(Vo,"A",{href:!0});var jr=a(ft);vs=i(jr,"PreTrainedTokenizer"),jr.forEach(o),bs=i(Vo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vo.forEach(o),ys=l(w),Zt=s(w,"P",{});var Fr=a(Zt);Ts=i(Fr,"Examples:"),Fr.forEach(o),ws=l(w),f(Fe.$$.fragment,w),zs=l(w),A=s(w,"DIV",{class:!0});var me=a(A);f(Pe.$$.fragment,me),qs=l(me),Oe=s(me,"P",{});var Xo=a(Oe);$s=i(Xo,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Qt=s(Xo,"CODE",{});var Pr=a(Qt);xs=i(Pr,"X"),Pr.forEach(o),Es=i(Xo," represents the sequence:"),Xo.forEach(o),Cs=l(me),Se=s(me,"UL",{});var Ro=a(Se);Le=s(Ro,"LI",{});var Jo=a(Le);Yt=s(Jo,"CODE",{});var Or=a(Yt);js=i(Or,"input_ids"),Or.forEach(o),Fs=i(Jo," (for encoder) "),eo=s(Jo,"CODE",{});var Sr=a(eo);Ps=i(Sr,"X [eos, src_lang_code]"),Sr.forEach(o),Jo.forEach(o),Os=l(Ro),Ae=s(Ro,"LI",{});var Ko=a(Ae);to=s(Ko,"CODE",{});var Lr=a(to);Ss=i(Lr,"decoder_input_ids"),Lr.forEach(o),Ls=i(Ko,": (for decoder) "),oo=s(Ko,"CODE",{});var Ar=a(oo);As=i(Ar,"X [eos, tgt_lang_code]"),Ar.forEach(o),Ko.forEach(o),Ro.forEach(o),Ds=l(me),no=s(me,"P",{});var Dr=a(no);Is=i(Dr,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Dr.forEach(o),me.forEach(o),Ns=l(w),ie=s(w,"DIV",{class:!0});var Zo=a(ie);f(De.$$.fragment,Zo),Gs=l(Zo),Ie=s(Zo,"P",{});var Qo=a(Ie);Ws=i(Qo,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),so=s(Qo,"CODE",{});var Ir=a(so);Bs=i(Ir,"prepare_for_model"),Ir.forEach(o),Hs=i(Qo," method."),Qo.forEach(o),Zo.forEach(o),Us=l(w),N=s(w,"DIV",{class:!0});var zt=a(N);f(Ne.$$.fragment,zt),Vs=l(zt),_t=s(zt,"P",{});var Ba=a(_t);Xs=i(Ba,"Create the token type IDs corresponding to the sequences passed. "),gt=s(Ba,"A",{href:!0});var Nr=a(gt);Rs=i(Nr,`What are token type
IDs?`),Nr.forEach(o),Ba.forEach(o),Js=l(zt),ao=s(zt,"P",{});var Gr=a(ao);Ks=i(Gr,"Should be overridden in a subclass if the model has a special way of building those."),Gr.forEach(o),zt.forEach(o),Zs=l(w),kt=s(w,"DIV",{class:!0});var Wr=a(kt);f(Ge.$$.fragment,Wr),Wr.forEach(o),w.forEach(o),Po=l(t),Z=s(t,"H2",{class:!0});var Yo=a(Z);de=s(Yo,"A",{id:!0,class:!0,href:!0});var Br=a(de);ro=s(Br,"SPAN",{});var Hr=a(ro);f(We.$$.fragment,Hr),Hr.forEach(o),Br.forEach(o),Qs=l(Yo),io=s(Yo,"SPAN",{});var Ur=a(io);Ys=i(Ur,"M2M100Model"),Ur.forEach(o),Yo.forEach(o),Oo=l(t),P=s(t,"DIV",{class:!0});var ue=a(P);f(Be.$$.fragment,ue),ea=l(ue),He=s(ue,"P",{});var en=a(He);ta=i(en,`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mt=s(en,"A",{href:!0});var Vr=a(Mt);oa=i(Vr,"PreTrainedModel"),Vr.forEach(o),na=i(en,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),en.forEach(o),sa=l(ue),Ue=s(ue,"P",{});var tn=a(Ue);aa=i(tn,"This model is also a PyTorch "),Ve=s(tn,"A",{href:!0,rel:!0});var Xr=a(Ve);ra=i(Xr,"torch.nn.Module"),Xr.forEach(o),ia=i(tn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tn.forEach(o),da=l(ue),C=s(ue,"DIV",{class:!0});var B=a(C);f(Xe.$$.fragment,B),la=l(B),Q=s(B,"P",{});var qt=a(Q);ca=i(qt,"The "),vt=s(qt,"A",{href:!0});var Rr=a(vt);ha=i(Rr,"M2M100Model"),Rr.forEach(o),pa=i(qt," forward method, overrides the "),lo=s(qt,"CODE",{});var Jr=a(lo);ma=i(Jr,"__call__"),Jr.forEach(o),ua=i(qt," special method."),qt.forEach(o),fa=l(B),f(le.$$.fragment,B),_a=l(B),co=s(B,"P",{});var Kr=a(co);ga=i(Kr,"Example:"),Kr.forEach(o),ka=l(B),f(Re.$$.fragment,B),B.forEach(o),ue.forEach(o),So=l(t),Y=s(t,"H2",{class:!0});var on=a(Y);ce=s(on,"A",{id:!0,class:!0,href:!0});var Zr=a(ce);ho=s(Zr,"SPAN",{});var Qr=a(ho);f(Je.$$.fragment,Qr),Qr.forEach(o),Zr.forEach(o),Ma=l(on),po=s(on,"SPAN",{});var Yr=a(po);va=i(Yr,"M2M100ForConditionalGeneration"),Yr.forEach(o),on.forEach(o),Lo=l(t),O=s(t,"DIV",{class:!0});var fe=a(O);f(Ke.$$.fragment,fe),ba=l(fe),Ze=s(fe,"P",{});var nn=a(Ze);ya=i(nn,`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),bt=s(nn,"A",{href:!0});var ei=a(bt);Ta=i(ei,"PreTrainedModel"),ei.forEach(o),wa=i(nn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nn.forEach(o),za=l(fe),Qe=s(fe,"P",{});var sn=a(Qe);qa=i(sn,"This model is also a PyTorch "),Ye=s(sn,"A",{href:!0,rel:!0});var ti=a(Ye);$a=i(ti,"torch.nn.Module"),ti.forEach(o),xa=i(sn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sn.forEach(o),Ea=l(fe),T=s(fe,"DIV",{class:!0});var j=a(T);f(et.$$.fragment,j),Ca=l(j),ee=s(j,"P",{});var $t=a(ee);ja=i($t,"The "),yt=s($t,"A",{href:!0});var oi=a(yt);Fa=i(oi,"M2M100ForConditionalGeneration"),oi.forEach(o),Pa=i($t," forward method, overrides the "),mo=s($t,"CODE",{});var ni=a(mo);Oa=i(ni,"__call__"),ni.forEach(o),Sa=i($t," special method."),$t.forEach(o),La=l(j),f(he.$$.fragment,j),Aa=l(j),uo=s(j,"P",{});var si=a(uo);Da=i(si,"Example:"),si.forEach(o),Ia=l(j),f(tt.$$.fragment,j),Na=l(j),fo=s(j,"P",{});var ai=a(fo);Ga=i(ai,"Translation example::"),ai.forEach(o),Wa=l(j),f(ot.$$.fragment,j),j.forEach(o),fe.forEach(o),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(fi)),c(q,"id","m2m100"),c(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(q,"href","#m2m100"),c(b,"class","relative group"),c(te,"id","overview"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#overview"),c(U,"class","relative group"),c(ge,"href","https://arxiv.org/abs/2010.11125"),c(ge,"rel","nofollow"),c(ke,"href","https://huggingface.co/valhalla"),c(ke,"rel","nofollow"),c(se,"id","training-and-generation"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#training-and-generation"),c(V,"class","relative group"),c(lt,"href","/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Tokenizer"),c(ae,"id","transformers.M2M100Config"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#transformers.M2M100Config"),c(X,"class","relative group"),c(pt,"href","/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Model"),c(ze,"href","https://huggingface.co/facebook/m2m100_418M"),c(ze,"rel","nofollow"),c(mt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ut,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(x,"class","docstring"),c(re,"id","transformers.M2M100Tokenizer"),c(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(re,"href","#transformers.M2M100Tokenizer"),c(K,"class","relative group"),c(Ce,"href","https://github.com/google/sentencepiece"),c(Ce,"rel","nofollow"),c(ft,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(A,"class","docstring"),c(ie,"class","docstring"),c(gt,"href","../glossary#token-type-ids"),c(N,"class","docstring"),c(kt,"class","docstring"),c(v,"class","docstring"),c(de,"id","transformers.M2M100Model"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.M2M100Model"),c(Z,"class","relative group"),c(Mt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ve,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ve,"rel","nofollow"),c(vt,"href","/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Model"),c(C,"class","docstring"),c(P,"class","docstring"),c(ce,"id","transformers.M2M100ForConditionalGeneration"),c(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ce,"href","#transformers.M2M100ForConditionalGeneration"),c(Y,"class","relative group"),c(bt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ye,"rel","nofollow"),c(yt,"href","/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100ForConditionalGeneration"),c(T,"class","docstring"),c(O,"class","docstring")},m(t,h){e(document.head,m),p(t,S,h),p(t,b,h),e(b,q),e(q,F),_(y,F,null),e(b,z),e(b,I),e(I,an),p(t,go,h),p(t,U,h),e(U,te),e(te,xt),_(_e,xt,null),e(U,rn),e(U,Et),e(Et,dn),p(t,ko,h),p(t,oe,h),e(oe,ln),e(oe,ge),e(ge,cn),e(oe,hn),p(t,Mo,h),p(t,it,h),e(it,pn),p(t,vo,h),p(t,dt,h),e(dt,Ct),e(Ct,mn),p(t,bo,h),p(t,ne,h),e(ne,un),e(ne,ke),e(ke,fn),e(ne,_n),p(t,yo,h),p(t,V,h),e(V,se),e(se,jt),_(Me,jt,null),e(V,gn),e(V,Ft),e(Ft,kn),p(t,To,h),p(t,L,h),e(L,Mn),e(L,Pt),e(Pt,vn),e(L,bn),e(L,Ot),e(Ot,yn),e(L,Tn),e(L,St),e(St,wn),e(L,zn),p(t,wo,h),p(t,E,h),e(E,qn),e(E,lt),e(lt,$n),e(E,xn),e(E,Lt),e(Lt,En),e(E,Cn),e(E,At),e(At,jn),e(E,Fn),e(E,Dt),e(Dt,Pn),e(E,On),p(t,zo,h),p(t,ct,h),e(ct,It),e(It,Sn),p(t,qo,h),_(ve,t,h),p(t,$o,h),p(t,ht,h),e(ht,be),e(be,Nt),e(Nt,Ln),e(be,An),e(be,$),e($,Dn),e($,Gt),e(Gt,In),e($,Nn),e($,Wt),e(Wt,Gn),e($,Wn),e($,Bt),e(Bt,Bn),e($,Hn),e($,Ht),e(Ht,Un),e($,Vn),e($,Ut),e(Ut,Xn),e($,Rn),p(t,xo,h),_(ye,t,h),p(t,Eo,h),p(t,X,h),e(X,ae),e(ae,Vt),_(Te,Vt,null),e(X,Jn),e(X,Xt),e(Xt,Kn),p(t,Co,h),p(t,x,h),_(we,x,null),e(x,Zn),e(x,R),e(R,Qn),e(R,pt),e(pt,Yn),e(R,es),e(R,ze),e(ze,ts),e(R,os),e(x,ns),e(x,J),e(J,ss),e(J,mt),e(mt,as),e(J,rs),e(J,ut),e(ut,is),e(J,ds),e(x,ls),e(x,Rt),e(Rt,cs),e(x,hs),_(qe,x,null),p(t,jo,h),p(t,K,h),e(K,re),e(re,Jt),_($e,Jt,null),e(K,ps),e(K,Kt),e(Kt,ms),p(t,Fo,h),p(t,v,h),_(xe,v,null),e(v,us),e(v,Ee),e(Ee,fs),e(Ee,Ce),e(Ce,_s),e(Ee,gs),e(v,ks),e(v,je),e(je,Ms),e(je,ft),e(ft,vs),e(je,bs),e(v,ys),e(v,Zt),e(Zt,Ts),e(v,ws),_(Fe,v,null),e(v,zs),e(v,A),_(Pe,A,null),e(A,qs),e(A,Oe),e(Oe,$s),e(Oe,Qt),e(Qt,xs),e(Oe,Es),e(A,Cs),e(A,Se),e(Se,Le),e(Le,Yt),e(Yt,js),e(Le,Fs),e(Le,eo),e(eo,Ps),e(Se,Os),e(Se,Ae),e(Ae,to),e(to,Ss),e(Ae,Ls),e(Ae,oo),e(oo,As),e(A,Ds),e(A,no),e(no,Is),e(v,Ns),e(v,ie),_(De,ie,null),e(ie,Gs),e(ie,Ie),e(Ie,Ws),e(Ie,so),e(so,Bs),e(Ie,Hs),e(v,Us),e(v,N),_(Ne,N,null),e(N,Vs),e(N,_t),e(_t,Xs),e(_t,gt),e(gt,Rs),e(N,Js),e(N,ao),e(ao,Ks),e(v,Zs),e(v,kt),_(Ge,kt,null),p(t,Po,h),p(t,Z,h),e(Z,de),e(de,ro),_(We,ro,null),e(Z,Qs),e(Z,io),e(io,Ys),p(t,Oo,h),p(t,P,h),_(Be,P,null),e(P,ea),e(P,He),e(He,ta),e(He,Mt),e(Mt,oa),e(He,na),e(P,sa),e(P,Ue),e(Ue,aa),e(Ue,Ve),e(Ve,ra),e(Ue,ia),e(P,da),e(P,C),_(Xe,C,null),e(C,la),e(C,Q),e(Q,ca),e(Q,vt),e(vt,ha),e(Q,pa),e(Q,lo),e(lo,ma),e(Q,ua),e(C,fa),_(le,C,null),e(C,_a),e(C,co),e(co,ga),e(C,ka),_(Re,C,null),p(t,So,h),p(t,Y,h),e(Y,ce),e(ce,ho),_(Je,ho,null),e(Y,Ma),e(Y,po),e(po,va),p(t,Lo,h),p(t,O,h),_(Ke,O,null),e(O,ba),e(O,Ze),e(Ze,ya),e(Ze,bt),e(bt,Ta),e(Ze,wa),e(O,za),e(O,Qe),e(Qe,qa),e(Qe,Ye),e(Ye,$a),e(Qe,xa),e(O,Ea),e(O,T),_(et,T,null),e(T,Ca),e(T,ee),e(ee,ja),e(ee,yt),e(yt,Fa),e(ee,Pa),e(ee,mo),e(mo,Oa),e(ee,Sa),e(T,La),_(he,T,null),e(T,Aa),e(T,uo),e(uo,Da),e(T,Ia),_(tt,T,null),e(T,Na),e(T,fo),e(fo,Ga),e(T,Wa),_(ot,T,null),Ao=!0},p(t,[h]){const nt={};h&2&&(nt.$$scope={dirty:h,ctx:t}),le.$set(nt);const _o={};h&2&&(_o.$$scope={dirty:h,ctx:t}),he.$set(_o)},i(t){Ao||(g(y.$$.fragment,t),g(_e.$$.fragment,t),g(Me.$$.fragment,t),g(ve.$$.fragment,t),g(ye.$$.fragment,t),g(Te.$$.fragment,t),g(we.$$.fragment,t),g(qe.$$.fragment,t),g($e.$$.fragment,t),g(xe.$$.fragment,t),g(Fe.$$.fragment,t),g(Pe.$$.fragment,t),g(De.$$.fragment,t),g(Ne.$$.fragment,t),g(Ge.$$.fragment,t),g(We.$$.fragment,t),g(Be.$$.fragment,t),g(Xe.$$.fragment,t),g(le.$$.fragment,t),g(Re.$$.fragment,t),g(Je.$$.fragment,t),g(Ke.$$.fragment,t),g(et.$$.fragment,t),g(he.$$.fragment,t),g(tt.$$.fragment,t),g(ot.$$.fragment,t),Ao=!0)},o(t){k(y.$$.fragment,t),k(_e.$$.fragment,t),k(Me.$$.fragment,t),k(ve.$$.fragment,t),k(ye.$$.fragment,t),k(Te.$$.fragment,t),k(we.$$.fragment,t),k(qe.$$.fragment,t),k($e.$$.fragment,t),k(xe.$$.fragment,t),k(Fe.$$.fragment,t),k(Pe.$$.fragment,t),k(De.$$.fragment,t),k(Ne.$$.fragment,t),k(Ge.$$.fragment,t),k(We.$$.fragment,t),k(Be.$$.fragment,t),k(Xe.$$.fragment,t),k(le.$$.fragment,t),k(Re.$$.fragment,t),k(Je.$$.fragment,t),k(Ke.$$.fragment,t),k(et.$$.fragment,t),k(he.$$.fragment,t),k(tt.$$.fragment,t),k(ot.$$.fragment,t),Ao=!1},d(t){o(m),t&&o(S),t&&o(b),M(y),t&&o(go),t&&o(U),M(_e),t&&o(ko),t&&o(oe),t&&o(Mo),t&&o(it),t&&o(vo),t&&o(dt),t&&o(bo),t&&o(ne),t&&o(yo),t&&o(V),M(Me),t&&o(To),t&&o(L),t&&o(wo),t&&o(E),t&&o(zo),t&&o(ct),t&&o(qo),M(ve,t),t&&o($o),t&&o(ht),t&&o(xo),M(ye,t),t&&o(Eo),t&&o(X),M(Te),t&&o(Co),t&&o(x),M(we),M(qe),t&&o(jo),t&&o(K),M($e),t&&o(Fo),t&&o(v),M(xe),M(Fe),M(Pe),M(De),M(Ne),M(Ge),t&&o(Po),t&&o(Z),M(We),t&&o(Oo),t&&o(P),M(Be),M(Xe),M(le),M(Re),t&&o(So),t&&o(Y),M(Je),t&&o(Lo),t&&o(O),M(Ke),M(et),M(he),M(tt),M(ot)}}}const fi={local:"m2m100",sections:[{local:"overview",sections:[{local:"training-and-generation",title:"Training and Generation"}],title:"Overview"},{local:"transformers.M2M100Config",title:"M2M100Config"},{local:"transformers.M2M100Tokenizer",title:"M2M100Tokenizer"},{local:"transformers.M2M100Model",title:"M2M100Model"},{local:"transformers.M2M100ForConditionalGeneration",title:"M2M100ForConditionalGeneration"}],title:"M2M100"};function _i(rt){return hi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class yi extends ii{constructor(m){super();di(this,m,_i,ui,li,{})}}export{yi as default,fi as metadata};
