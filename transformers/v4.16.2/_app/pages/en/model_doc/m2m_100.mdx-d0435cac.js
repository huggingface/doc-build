import{S as ai,i as ri,s as ii,e as n,k as d,w as u,t as r,L as di,c as s,d as o,m as l,a,x as f,h as i,b as c,J as e,g as p,y as _,q as g,o as k,B as M}from"../../../chunks/vendor-b1433968.js";import{T as si}from"../../../chunks/Tip-c3840994.js";import{D as ee}from"../../../chunks/Docstring-ff504c58.js";import{C as st}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as at}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function li(_e){let m,E,v,y,F;return{c(){m=n("p"),E=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),y=r("Module"),F=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){m=s(w,"P",{});var q=a(m);E=i(q,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(q,"CODE",{});var N=a(v);y=i(N,"Module"),N.forEach(o),F=i(q,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),q.forEach(o)},m(w,q){p(w,m,q),e(m,E),e(m,v),e(v,y),e(m,F)},d(w){w&&o(m)}}}function ci(_e){let m,E,v,y,F;return{c(){m=n("p"),E=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),y=r("Module"),F=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){m=s(w,"P",{});var q=a(m);E=i(q,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(q,"CODE",{});var N=a(v);y=i(N,"Module"),N.forEach(o),F=i(q,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),q.forEach(o)},m(w,q){p(w,m,q),e(m,E),e(m,v),e(v,y),e(m,F)},d(w){w&&o(m)}}}function hi(_e){let m,E,v,y,F,w,q,N,sn,_o,H,te,qt,ge,an,$t,rn,go,oe,dn,ke,ln,cn,ko,rt,hn,Mo,it,xt,pn,vo,ne,mn,Me,un,fn,bo,U,se,Et,ve,_n,Ct,gn,yo,D,kn,jt,Mn,vn,Pt,bn,yn,Ft,wn,Tn,wo,C,zn,dt,qn,$n,St,xn,En,At,Cn,jn,Dt,Pn,Fn,To,lt,It,Sn,zo,be,qo,ct,ye,Lt,An,Dn,$,In,Nt,Ln,Nn,Gt,Gn,On,Ot,Bn,Wn,Bt,Hn,Un,Wt,Vn,Xn,$o,we,xo,V,ae,Ht,Te,Rn,Ut,Jn,Eo,x,ze,Kn,X,Zn,ht,Qn,Yn,qe,es,ts,os,R,ns,pt,ss,as,mt,rs,is,ds,Vt,ls,cs,$e,Co,J,re,Xt,xe,hs,Rt,ps,jo,b,Ee,ms,Ce,us,je,fs,_s,gs,Pe,ks,ut,Ms,vs,bs,Jt,ys,ws,Fe,Ts,I,Se,zs,Ae,qs,Kt,$s,xs,Es,De,Ie,Zt,Cs,js,Qt,Ps,Fs,Le,Yt,Ss,As,eo,Ds,Is,to,Ls,Ns,ie,Ne,Gs,Ge,Os,oo,Bs,Ws,Hs,G,Oe,Us,ft,Vs,_t,Xs,Rs,no,Js,Ks,so,Po,K,de,ao,Be,Zs,ro,Qs,Fo,S,We,Ys,He,ea,gt,ta,oa,na,Ue,sa,Ve,aa,ra,ia,j,Xe,da,Z,la,kt,ca,ha,io,pa,ma,ua,le,fa,lo,_a,ga,Re,So,Q,ce,co,Je,ka,ho,Ma,Ao,A,Ke,va,Ze,ba,Mt,ya,wa,Ta,Qe,za,Ye,qa,$a,xa,T,et,Ea,Y,Ca,vt,ja,Pa,po,Fa,Sa,Aa,he,Da,mo,Ia,La,tt,Na,uo,Ga,Oa,ot,Do;return w=new at({}),ge=new at({}),ve=new at({}),be=new st({props:{code:`from transformers import M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M", src_lang="en", tgt_lang="fr")

src_text = "Life is like a box of chocolates."
tgt_text = "La vie est comme une bo\xEEte de chocolat."

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

loss = model(**model_inputs, labels=labels)  # forward pass,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>, src_lang=<span class="hljs-string">&quot;en&quot;</span>, tgt_lang=<span class="hljs-string">&quot;fr&quot;</span>)

src_text = <span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>
tgt_text = <span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

loss = model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),we=new st({props:{code:`from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

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
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100ForConditionalGeneration, M2M100Tokenizer

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
<span class="hljs-string">&quot;Life is like a box of chocolate.&quot;</span>`}}),Te=new at({}),ze=new ee({props:{name:"class transformers.M2M100Config",anchor:"transformers.M2M100Config",parameters:[{name:"vocab_size",val:" = 128112"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.05"},{name:"decoder_layerdrop",val:" = 0.05"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/m2m_100/configuration_m2m_100.py#L29",parametersDescription:[{anchor:"transformers.M2M100Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the M2M100 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100Model">M2M100Model</a> or`,name:"vocab_size"},{anchor:"transformers.M2M100Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),$e=new st({props:{code:`from transformers import M2M100Model, M2M100Config

# Initializing a M2M100 facebook/m2m100_418M style configuration
configuration = M2M100Config()

# Initializing a model from the facebook/m2m100_418M style configuration
model = M2M100Model(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Model, M2M100Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a M2M100 facebook/m2m100_418M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = M2M100Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/m2m100_418M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),xe=new at({}),Ee=new ee({props:{name:"class transformers.M2M100Tokenizer",anchor:"transformers.M2M100Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"language_codes",val:" = 'm2m100'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"num_madeup_words",val:" = 8"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/m2m_100/tokenization_m2m_100.py#L65",parametersDescription:[{anchor:"transformers.M2M100Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Fe=new st({props:{code:`from transformers import M2M100Tokenizer

tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M", src_lang="en", tgt_lang="ro")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
model(**model_inputs, labels=labels)  # should work,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>, src_lang=<span class="hljs-string">&quot;en&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**model_inputs, labels=labels)  <span class="hljs-comment"># should work</span>`}}),Se=new ee({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/m2m_100/tokenization_m2m_100.py#L258",parametersDescription:[{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ne=new ee({props:{name:"get_special_tokens_mask",anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/m2m_100/tokenization_m2m_100.py#L228",parametersDescription:[{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Oe=new ee({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/tokenization_utils_base.py#L2844",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Be=new at({}),We=new ee({props:{name:"class transformers.M2M100Model",anchor:"transformers.M2M100Model",parameters:[{name:"config",val:": M2M100Config"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/m2m_100/modeling_m2m_100.py#L1104",parametersDescription:[{anchor:"transformers.M2M100Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xe=new ee({props:{name:"forward",anchor:"transformers.M2M100Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/m2m_100/modeling_m2m_100.py#L1131",parametersDescription:[{anchor:"transformers.M2M100Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100Config"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new si({props:{$$slots:{default:[li]},$$scope:{ctx:_e}}}),Re=new st({props:{code:`from transformers import M2M100Tokenizer, M2M100Model
import torch

tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")
model = M2M100Model.from_pretrained("facebook/m2m100_418M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100Model.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Je=new at({}),Ke=new ee({props:{name:"class transformers.M2M100ForConditionalGeneration",anchor:"transformers.M2M100ForConditionalGeneration",parameters:[{name:"config",val:": M2M100Config"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/m2m_100/modeling_m2m_100.py#L1215",parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),et=new ee({props:{name:"forward",anchor:"transformers.M2M100ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/m2m_100/modeling_m2m_100.py#L1253",parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100Config"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),he=new si({props:{$$slots:{default:[ci]},$$scope:{ctx:_e}}}),tt=new st({props:{code:`from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")

text_to_translate = "Life is like a box of chocolates"
model_inputs = tokenizer(text_to_translate, return_tensors="pt")

# translate to French
gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id("fr"))
print(tokenizer.batch_decode(gen_tokens, skip_special_tokens=True)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100ForConditionalGeneration

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
print(tokenizer.batch_decode(gen_tokens, skip_special_tokens=True)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text_to_translate = <span class="hljs-string">&quot;Life is like a box of chocolates&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(text_to_translate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){m=n("meta"),E=d(),v=n("h1"),y=n("a"),F=n("span"),u(w.$$.fragment),q=d(),N=n("span"),sn=r("M2M100"),_o=d(),H=n("h2"),te=n("a"),qt=n("span"),u(ge.$$.fragment),an=d(),$t=n("span"),rn=r("Overview"),go=d(),oe=n("p"),dn=r("The M2M100 model was proposed in "),ke=n("a"),ln=r("Beyond English-Centric Multilingual Machine Translation"),cn=r(` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),ko=d(),rt=n("p"),hn=r("The abstract from the paper is the following:"),Mo=d(),it=n("p"),xt=n("em"),pn=r(`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),vo=d(),ne=n("p"),mn=r("This model was contributed by "),Me=n("a"),un=r("valhalla"),fn=r("."),bo=d(),U=n("h3"),se=n("a"),Et=n("span"),u(ve.$$.fragment),_n=d(),Ct=n("span"),gn=r("Training and Generation"),yo=d(),D=n("p"),kn=r(`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),jt=n("code"),Mn=r("[lang_code] X [eos]"),vn=r(", where "),Pt=n("code"),bn=r("lang_code"),yn=r(` is source language
id for source text and target language id for target text, with `),Ft=n("code"),wn=r("X"),Tn=r(" being the source or target text."),wo=d(),C=n("p"),zn=r("The "),dt=n("a"),qn=r("M2M100Tokenizer"),$n=r(" depends on "),St=n("code"),xn=r("sentencepiece"),En=r(` so be sure to install it before running the
examples. To install `),At=n("code"),Cn=r("sentencepiece"),jn=r(" run "),Dt=n("code"),Pn=r("pip install sentencepiece"),Fn=r("."),To=d(),lt=n("ul"),It=n("li"),Sn=r("Supervised Training"),zo=d(),u(be.$$.fragment),qo=d(),ct=n("ul"),ye=n("li"),Lt=n("p"),An=r("Generation"),Dn=d(),$=n("p"),In=r("M2M100 uses the "),Nt=n("code"),Ln=r("eos_token_id"),Nn=r(" as the "),Gt=n("code"),Gn=r("decoder_start_token_id"),On=r(` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Ot=n("em"),Bn=r("forced_bos_token_id"),Wn=r(" parameter to the "),Bt=n("em"),Hn=r("generate"),Un=r(` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Wt=n("em"),Vn=r("facebook/m2m100_418M"),Xn=r(" checkpoint."),$o=d(),u(we.$$.fragment),xo=d(),V=n("h2"),ae=n("a"),Ht=n("span"),u(Te.$$.fragment),Rn=d(),Ut=n("span"),Jn=r("M2M100Config"),Eo=d(),x=n("div"),u(ze.$$.fragment),Kn=d(),X=n("p"),Zn=r("This is the configuration class to store the configuration of a "),ht=n("a"),Qn=r("M2M100Model"),Yn=r(`. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
`),qe=n("a"),es=r("m2m100_418M"),ts=r(" architecture."),os=d(),R=n("p"),ns=r("Configuration objects inherit from "),pt=n("a"),ss=r("PretrainedConfig"),as=r(` and can be used to control the model outputs. Read the
documentation from `),mt=n("a"),rs=r("PretrainedConfig"),is=r(" for more information."),ds=d(),Vt=n("p"),ls=r("Example:"),cs=d(),u($e.$$.fragment),Co=d(),J=n("h2"),re=n("a"),Xt=n("span"),u(xe.$$.fragment),hs=d(),Rt=n("span"),ps=r("M2M100Tokenizer"),jo=d(),b=n("div"),u(Ee.$$.fragment),ms=d(),Ce=n("p"),us=r("Construct an M2M100 tokenizer. Based on "),je=n("a"),fs=r("SentencePiece"),_s=r("."),gs=d(),Pe=n("p"),ks=r("This tokenizer inherits from "),ut=n("a"),Ms=r("PreTrainedTokenizer"),vs=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),bs=d(),Jt=n("p"),ys=r("Examples:"),ws=d(),u(Fe.$$.fragment),Ts=d(),I=n("div"),u(Se.$$.fragment),zs=d(),Ae=n("p"),qs=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Kt=n("code"),$s=r("X"),xs=r(" represents the sequence:"),Es=d(),De=n("ul"),Ie=n("li"),Zt=n("code"),Cs=r("input_ids"),js=r(" (for encoder) "),Qt=n("code"),Ps=r("X [eos, src_lang_code]"),Fs=d(),Le=n("li"),Yt=n("code"),Ss=r("decoder_input_ids"),As=r(": (for decoder) "),eo=n("code"),Ds=r("X [eos, tgt_lang_code]"),Is=d(),to=n("p"),Ls=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ns=d(),ie=n("div"),u(Ne.$$.fragment),Gs=d(),Ge=n("p"),Os=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),oo=n("code"),Bs=r("prepare_for_model"),Ws=r(" method."),Hs=d(),G=n("div"),u(Oe.$$.fragment),Us=d(),ft=n("p"),Vs=r("Create the token type IDs corresponding to the sequences passed. "),_t=n("a"),Xs=r(`What are token type
IDs?`),Rs=d(),no=n("p"),Js=r("Should be overridden in a subclass if the model has a special way of building those."),Ks=d(),so=n("div"),Po=d(),K=n("h2"),de=n("a"),ao=n("span"),u(Be.$$.fragment),Zs=d(),ro=n("span"),Qs=r("M2M100Model"),Fo=d(),S=n("div"),u(We.$$.fragment),Ys=d(),He=n("p"),ea=r(`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),gt=n("a"),ta=r("PreTrainedModel"),oa=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),na=d(),Ue=n("p"),sa=r("This model is also a PyTorch "),Ve=n("a"),aa=r("torch.nn.Module"),ra=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ia=d(),j=n("div"),u(Xe.$$.fragment),da=d(),Z=n("p"),la=r("The "),kt=n("a"),ca=r("M2M100Model"),ha=r(" forward method, overrides the "),io=n("code"),pa=r("__call__"),ma=r(" special method."),ua=d(),u(le.$$.fragment),fa=d(),lo=n("p"),_a=r("Example:"),ga=d(),u(Re.$$.fragment),So=d(),Q=n("h2"),ce=n("a"),co=n("span"),u(Je.$$.fragment),ka=d(),ho=n("span"),Ma=r("M2M100ForConditionalGeneration"),Ao=d(),A=n("div"),u(Ke.$$.fragment),va=d(),Ze=n("p"),ba=r(`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mt=n("a"),ya=r("PreTrainedModel"),wa=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ta=d(),Qe=n("p"),za=r("This model is also a PyTorch "),Ye=n("a"),qa=r("torch.nn.Module"),$a=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xa=d(),T=n("div"),u(et.$$.fragment),Ea=d(),Y=n("p"),Ca=r("The "),vt=n("a"),ja=r("M2M100ForConditionalGeneration"),Pa=r(" forward method, overrides the "),po=n("code"),Fa=r("__call__"),Sa=r(" special method."),Aa=d(),u(he.$$.fragment),Da=d(),mo=n("p"),Ia=r("Example:"),La=d(),u(tt.$$.fragment),Na=d(),uo=n("p"),Ga=r("Translation example::"),Oa=d(),u(ot.$$.fragment),this.h()},l(t){const h=di('[data-svelte="svelte-1phssyn"]',document.head);m=s(h,"META",{name:!0,content:!0}),h.forEach(o),E=l(t),v=s(t,"H1",{class:!0});var nt=a(v);y=s(nt,"A",{id:!0,class:!0,href:!0});var fo=a(y);F=s(fo,"SPAN",{});var Wa=a(F);f(w.$$.fragment,Wa),Wa.forEach(o),fo.forEach(o),q=l(nt),N=s(nt,"SPAN",{});var Ha=a(N);sn=i(Ha,"M2M100"),Ha.forEach(o),nt.forEach(o),_o=l(t),H=s(t,"H2",{class:!0});var Io=a(H);te=s(Io,"A",{id:!0,class:!0,href:!0});var Ua=a(te);qt=s(Ua,"SPAN",{});var Va=a(qt);f(ge.$$.fragment,Va),Va.forEach(o),Ua.forEach(o),an=l(Io),$t=s(Io,"SPAN",{});var Xa=a($t);rn=i(Xa,"Overview"),Xa.forEach(o),Io.forEach(o),go=l(t),oe=s(t,"P",{});var Lo=a(oe);dn=i(Lo,"The M2M100 model was proposed in "),ke=s(Lo,"A",{href:!0,rel:!0});var Ra=a(ke);ln=i(Ra,"Beyond English-Centric Multilingual Machine Translation"),Ra.forEach(o),cn=i(Lo,` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),Lo.forEach(o),ko=l(t),rt=s(t,"P",{});var Ja=a(rt);hn=i(Ja,"The abstract from the paper is the following:"),Ja.forEach(o),Mo=l(t),it=s(t,"P",{});var Ka=a(it);xt=s(Ka,"EM",{});var Za=a(xt);pn=i(Za,`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),Za.forEach(o),Ka.forEach(o),vo=l(t),ne=s(t,"P",{});var No=a(ne);mn=i(No,"This model was contributed by "),Me=s(No,"A",{href:!0,rel:!0});var Qa=a(Me);un=i(Qa,"valhalla"),Qa.forEach(o),fn=i(No,"."),No.forEach(o),bo=l(t),U=s(t,"H3",{class:!0});var Go=a(U);se=s(Go,"A",{id:!0,class:!0,href:!0});var Ya=a(se);Et=s(Ya,"SPAN",{});var er=a(Et);f(ve.$$.fragment,er),er.forEach(o),Ya.forEach(o),_n=l(Go),Ct=s(Go,"SPAN",{});var tr=a(Ct);gn=i(tr,"Training and Generation"),tr.forEach(o),Go.forEach(o),yo=l(t),D=s(t,"P",{});var pe=a(D);kn=i(pe,`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),jt=s(pe,"CODE",{});var or=a(jt);Mn=i(or,"[lang_code] X [eos]"),or.forEach(o),vn=i(pe,", where "),Pt=s(pe,"CODE",{});var nr=a(Pt);bn=i(nr,"lang_code"),nr.forEach(o),yn=i(pe,` is source language
id for source text and target language id for target text, with `),Ft=s(pe,"CODE",{});var sr=a(Ft);wn=i(sr,"X"),sr.forEach(o),Tn=i(pe," being the source or target text."),pe.forEach(o),wo=l(t),C=s(t,"P",{});var O=a(C);zn=i(O,"The "),dt=s(O,"A",{href:!0});var ar=a(dt);qn=i(ar,"M2M100Tokenizer"),ar.forEach(o),$n=i(O," depends on "),St=s(O,"CODE",{});var rr=a(St);xn=i(rr,"sentencepiece"),rr.forEach(o),En=i(O,` so be sure to install it before running the
examples. To install `),At=s(O,"CODE",{});var ir=a(At);Cn=i(ir,"sentencepiece"),ir.forEach(o),jn=i(O," run "),Dt=s(O,"CODE",{});var dr=a(Dt);Pn=i(dr,"pip install sentencepiece"),dr.forEach(o),Fn=i(O,"."),O.forEach(o),To=l(t),lt=s(t,"UL",{});var lr=a(lt);It=s(lr,"LI",{});var cr=a(It);Sn=i(cr,"Supervised Training"),cr.forEach(o),lr.forEach(o),zo=l(t),f(be.$$.fragment,t),qo=l(t),ct=s(t,"UL",{});var hr=a(ct);ye=s(hr,"LI",{});var Oo=a(ye);Lt=s(Oo,"P",{});var pr=a(Lt);An=i(pr,"Generation"),pr.forEach(o),Dn=l(Oo),$=s(Oo,"P",{});var L=a($);In=i(L,"M2M100 uses the "),Nt=s(L,"CODE",{});var mr=a(Nt);Ln=i(mr,"eos_token_id"),mr.forEach(o),Nn=i(L," as the "),Gt=s(L,"CODE",{});var ur=a(Gt);Gn=i(ur,"decoder_start_token_id"),ur.forEach(o),On=i(L,` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Ot=s(L,"EM",{});var fr=a(Ot);Bn=i(fr,"forced_bos_token_id"),fr.forEach(o),Wn=i(L," parameter to the "),Bt=s(L,"EM",{});var _r=a(Bt);Hn=i(_r,"generate"),_r.forEach(o),Un=i(L,` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Wt=s(L,"EM",{});var gr=a(Wt);Vn=i(gr,"facebook/m2m100_418M"),gr.forEach(o),Xn=i(L," checkpoint."),L.forEach(o),Oo.forEach(o),hr.forEach(o),$o=l(t),f(we.$$.fragment,t),xo=l(t),V=s(t,"H2",{class:!0});var Bo=a(V);ae=s(Bo,"A",{id:!0,class:!0,href:!0});var kr=a(ae);Ht=s(kr,"SPAN",{});var Mr=a(Ht);f(Te.$$.fragment,Mr),Mr.forEach(o),kr.forEach(o),Rn=l(Bo),Ut=s(Bo,"SPAN",{});var vr=a(Ut);Jn=i(vr,"M2M100Config"),vr.forEach(o),Bo.forEach(o),Eo=l(t),x=s(t,"DIV",{class:!0});var B=a(x);f(ze.$$.fragment,B),Kn=l(B),X=s(B,"P",{});var bt=a(X);Zn=i(bt,"This is the configuration class to store the configuration of a "),ht=s(bt,"A",{href:!0});var br=a(ht);Qn=i(br,"M2M100Model"),br.forEach(o),Yn=i(bt,`. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
`),qe=s(bt,"A",{href:!0,rel:!0});var yr=a(qe);es=i(yr,"m2m100_418M"),yr.forEach(o),ts=i(bt," architecture."),bt.forEach(o),os=l(B),R=s(B,"P",{});var yt=a(R);ns=i(yt,"Configuration objects inherit from "),pt=s(yt,"A",{href:!0});var wr=a(pt);ss=i(wr,"PretrainedConfig"),wr.forEach(o),as=i(yt,` and can be used to control the model outputs. Read the
documentation from `),mt=s(yt,"A",{href:!0});var Tr=a(mt);rs=i(Tr,"PretrainedConfig"),Tr.forEach(o),is=i(yt," for more information."),yt.forEach(o),ds=l(B),Vt=s(B,"P",{});var zr=a(Vt);ls=i(zr,"Example:"),zr.forEach(o),cs=l(B),f($e.$$.fragment,B),B.forEach(o),Co=l(t),J=s(t,"H2",{class:!0});var Wo=a(J);re=s(Wo,"A",{id:!0,class:!0,href:!0});var qr=a(re);Xt=s(qr,"SPAN",{});var $r=a(Xt);f(xe.$$.fragment,$r),$r.forEach(o),qr.forEach(o),hs=l(Wo),Rt=s(Wo,"SPAN",{});var xr=a(Rt);ps=i(xr,"M2M100Tokenizer"),xr.forEach(o),Wo.forEach(o),jo=l(t),b=s(t,"DIV",{class:!0});var z=a(b);f(Ee.$$.fragment,z),ms=l(z),Ce=s(z,"P",{});var Ho=a(Ce);us=i(Ho,"Construct an M2M100 tokenizer. Based on "),je=s(Ho,"A",{href:!0,rel:!0});var Er=a(je);fs=i(Er,"SentencePiece"),Er.forEach(o),_s=i(Ho,"."),Ho.forEach(o),gs=l(z),Pe=s(z,"P",{});var Uo=a(Pe);ks=i(Uo,"This tokenizer inherits from "),ut=s(Uo,"A",{href:!0});var Cr=a(ut);Ms=i(Cr,"PreTrainedTokenizer"),Cr.forEach(o),vs=i(Uo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Uo.forEach(o),bs=l(z),Jt=s(z,"P",{});var jr=a(Jt);ys=i(jr,"Examples:"),jr.forEach(o),ws=l(z),f(Fe.$$.fragment,z),Ts=l(z),I=s(z,"DIV",{class:!0});var me=a(I);f(Se.$$.fragment,me),zs=l(me),Ae=s(me,"P",{});var Vo=a(Ae);qs=i(Vo,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Kt=s(Vo,"CODE",{});var Pr=a(Kt);$s=i(Pr,"X"),Pr.forEach(o),xs=i(Vo," represents the sequence:"),Vo.forEach(o),Es=l(me),De=s(me,"UL",{});var Xo=a(De);Ie=s(Xo,"LI",{});var Ro=a(Ie);Zt=s(Ro,"CODE",{});var Fr=a(Zt);Cs=i(Fr,"input_ids"),Fr.forEach(o),js=i(Ro," (for encoder) "),Qt=s(Ro,"CODE",{});var Sr=a(Qt);Ps=i(Sr,"X [eos, src_lang_code]"),Sr.forEach(o),Ro.forEach(o),Fs=l(Xo),Le=s(Xo,"LI",{});var Jo=a(Le);Yt=s(Jo,"CODE",{});var Ar=a(Yt);Ss=i(Ar,"decoder_input_ids"),Ar.forEach(o),As=i(Jo,": (for decoder) "),eo=s(Jo,"CODE",{});var Dr=a(eo);Ds=i(Dr,"X [eos, tgt_lang_code]"),Dr.forEach(o),Jo.forEach(o),Xo.forEach(o),Is=l(me),to=s(me,"P",{});var Ir=a(to);Ls=i(Ir,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ir.forEach(o),me.forEach(o),Ns=l(z),ie=s(z,"DIV",{class:!0});var Ko=a(ie);f(Ne.$$.fragment,Ko),Gs=l(Ko),Ge=s(Ko,"P",{});var Zo=a(Ge);Os=i(Zo,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),oo=s(Zo,"CODE",{});var Lr=a(oo);Bs=i(Lr,"prepare_for_model"),Lr.forEach(o),Ws=i(Zo," method."),Zo.forEach(o),Ko.forEach(o),Hs=l(z),G=s(z,"DIV",{class:!0});var wt=a(G);f(Oe.$$.fragment,wt),Us=l(wt),ft=s(wt,"P",{});var Ba=a(ft);Vs=i(Ba,"Create the token type IDs corresponding to the sequences passed. "),_t=s(Ba,"A",{href:!0});var Nr=a(_t);Xs=i(Nr,`What are token type
IDs?`),Nr.forEach(o),Ba.forEach(o),Rs=l(wt),no=s(wt,"P",{});var Gr=a(no);Js=i(Gr,"Should be overridden in a subclass if the model has a special way of building those."),Gr.forEach(o),wt.forEach(o),Ks=l(z),so=s(z,"DIV",{class:!0}),a(so).forEach(o),z.forEach(o),Po=l(t),K=s(t,"H2",{class:!0});var Qo=a(K);de=s(Qo,"A",{id:!0,class:!0,href:!0});var Or=a(de);ao=s(Or,"SPAN",{});var Br=a(ao);f(Be.$$.fragment,Br),Br.forEach(o),Or.forEach(o),Zs=l(Qo),ro=s(Qo,"SPAN",{});var Wr=a(ro);Qs=i(Wr,"M2M100Model"),Wr.forEach(o),Qo.forEach(o),Fo=l(t),S=s(t,"DIV",{class:!0});var ue=a(S);f(We.$$.fragment,ue),Ys=l(ue),He=s(ue,"P",{});var Yo=a(He);ea=i(Yo,`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),gt=s(Yo,"A",{href:!0});var Hr=a(gt);ta=i(Hr,"PreTrainedModel"),Hr.forEach(o),oa=i(Yo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yo.forEach(o),na=l(ue),Ue=s(ue,"P",{});var en=a(Ue);sa=i(en,"This model is also a PyTorch "),Ve=s(en,"A",{href:!0,rel:!0});var Ur=a(Ve);aa=i(Ur,"torch.nn.Module"),Ur.forEach(o),ra=i(en,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),en.forEach(o),ia=l(ue),j=s(ue,"DIV",{class:!0});var W=a(j);f(Xe.$$.fragment,W),da=l(W),Z=s(W,"P",{});var Tt=a(Z);la=i(Tt,"The "),kt=s(Tt,"A",{href:!0});var Vr=a(kt);ca=i(Vr,"M2M100Model"),Vr.forEach(o),ha=i(Tt," forward method, overrides the "),io=s(Tt,"CODE",{});var Xr=a(io);pa=i(Xr,"__call__"),Xr.forEach(o),ma=i(Tt," special method."),Tt.forEach(o),ua=l(W),f(le.$$.fragment,W),fa=l(W),lo=s(W,"P",{});var Rr=a(lo);_a=i(Rr,"Example:"),Rr.forEach(o),ga=l(W),f(Re.$$.fragment,W),W.forEach(o),ue.forEach(o),So=l(t),Q=s(t,"H2",{class:!0});var tn=a(Q);ce=s(tn,"A",{id:!0,class:!0,href:!0});var Jr=a(ce);co=s(Jr,"SPAN",{});var Kr=a(co);f(Je.$$.fragment,Kr),Kr.forEach(o),Jr.forEach(o),ka=l(tn),ho=s(tn,"SPAN",{});var Zr=a(ho);Ma=i(Zr,"M2M100ForConditionalGeneration"),Zr.forEach(o),tn.forEach(o),Ao=l(t),A=s(t,"DIV",{class:!0});var fe=a(A);f(Ke.$$.fragment,fe),va=l(fe),Ze=s(fe,"P",{});var on=a(Ze);ba=i(on,`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mt=s(on,"A",{href:!0});var Qr=a(Mt);ya=i(Qr,"PreTrainedModel"),Qr.forEach(o),wa=i(on,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),on.forEach(o),Ta=l(fe),Qe=s(fe,"P",{});var nn=a(Qe);za=i(nn,"This model is also a PyTorch "),Ye=s(nn,"A",{href:!0,rel:!0});var Yr=a(Ye);qa=i(Yr,"torch.nn.Module"),Yr.forEach(o),$a=i(nn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nn.forEach(o),xa=l(fe),T=s(fe,"DIV",{class:!0});var P=a(T);f(et.$$.fragment,P),Ea=l(P),Y=s(P,"P",{});var zt=a(Y);Ca=i(zt,"The "),vt=s(zt,"A",{href:!0});var ei=a(vt);ja=i(ei,"M2M100ForConditionalGeneration"),ei.forEach(o),Pa=i(zt," forward method, overrides the "),po=s(zt,"CODE",{});var ti=a(po);Fa=i(ti,"__call__"),ti.forEach(o),Sa=i(zt," special method."),zt.forEach(o),Aa=l(P),f(he.$$.fragment,P),Da=l(P),mo=s(P,"P",{});var oi=a(mo);Ia=i(oi,"Example:"),oi.forEach(o),La=l(P),f(tt.$$.fragment,P),Na=l(P),uo=s(P,"P",{});var ni=a(uo);Ga=i(ni,"Translation example::"),ni.forEach(o),Oa=l(P),f(ot.$$.fragment,P),P.forEach(o),fe.forEach(o),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(pi)),c(y,"id","m2m100"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#m2m100"),c(v,"class","relative group"),c(te,"id","overview"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#overview"),c(H,"class","relative group"),c(ke,"href","https://arxiv.org/abs/2010.11125"),c(ke,"rel","nofollow"),c(Me,"href","https://huggingface.co/valhalla"),c(Me,"rel","nofollow"),c(se,"id","training-and-generation"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#training-and-generation"),c(U,"class","relative group"),c(dt,"href","/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100Tokenizer"),c(ae,"id","transformers.M2M100Config"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#transformers.M2M100Config"),c(V,"class","relative group"),c(ht,"href","/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100Model"),c(qe,"href","https://huggingface.co/facebook/m2m100_418M"),c(qe,"rel","nofollow"),c(pt,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(mt,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(x,"class","docstring"),c(re,"id","transformers.M2M100Tokenizer"),c(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(re,"href","#transformers.M2M100Tokenizer"),c(J,"class","relative group"),c(je,"href","https://github.com/google/sentencepiece"),c(je,"rel","nofollow"),c(ut,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(I,"class","docstring"),c(ie,"class","docstring"),c(_t,"href","../glossary#token-type-ids"),c(G,"class","docstring"),c(so,"class","docstring"),c(b,"class","docstring"),c(de,"id","transformers.M2M100Model"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.M2M100Model"),c(K,"class","relative group"),c(gt,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(Ve,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ve,"rel","nofollow"),c(kt,"href","/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100Model"),c(j,"class","docstring"),c(S,"class","docstring"),c(ce,"id","transformers.M2M100ForConditionalGeneration"),c(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ce,"href","#transformers.M2M100ForConditionalGeneration"),c(Q,"class","relative group"),c(Mt,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(Ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ye,"rel","nofollow"),c(vt,"href","/docs/transformers/v4.16.2/en/model_doc/m2m_100#transformers.M2M100ForConditionalGeneration"),c(T,"class","docstring"),c(A,"class","docstring")},m(t,h){e(document.head,m),p(t,E,h),p(t,v,h),e(v,y),e(y,F),_(w,F,null),e(v,q),e(v,N),e(N,sn),p(t,_o,h),p(t,H,h),e(H,te),e(te,qt),_(ge,qt,null),e(H,an),e(H,$t),e($t,rn),p(t,go,h),p(t,oe,h),e(oe,dn),e(oe,ke),e(ke,ln),e(oe,cn),p(t,ko,h),p(t,rt,h),e(rt,hn),p(t,Mo,h),p(t,it,h),e(it,xt),e(xt,pn),p(t,vo,h),p(t,ne,h),e(ne,mn),e(ne,Me),e(Me,un),e(ne,fn),p(t,bo,h),p(t,U,h),e(U,se),e(se,Et),_(ve,Et,null),e(U,_n),e(U,Ct),e(Ct,gn),p(t,yo,h),p(t,D,h),e(D,kn),e(D,jt),e(jt,Mn),e(D,vn),e(D,Pt),e(Pt,bn),e(D,yn),e(D,Ft),e(Ft,wn),e(D,Tn),p(t,wo,h),p(t,C,h),e(C,zn),e(C,dt),e(dt,qn),e(C,$n),e(C,St),e(St,xn),e(C,En),e(C,At),e(At,Cn),e(C,jn),e(C,Dt),e(Dt,Pn),e(C,Fn),p(t,To,h),p(t,lt,h),e(lt,It),e(It,Sn),p(t,zo,h),_(be,t,h),p(t,qo,h),p(t,ct,h),e(ct,ye),e(ye,Lt),e(Lt,An),e(ye,Dn),e(ye,$),e($,In),e($,Nt),e(Nt,Ln),e($,Nn),e($,Gt),e(Gt,Gn),e($,On),e($,Ot),e(Ot,Bn),e($,Wn),e($,Bt),e(Bt,Hn),e($,Un),e($,Wt),e(Wt,Vn),e($,Xn),p(t,$o,h),_(we,t,h),p(t,xo,h),p(t,V,h),e(V,ae),e(ae,Ht),_(Te,Ht,null),e(V,Rn),e(V,Ut),e(Ut,Jn),p(t,Eo,h),p(t,x,h),_(ze,x,null),e(x,Kn),e(x,X),e(X,Zn),e(X,ht),e(ht,Qn),e(X,Yn),e(X,qe),e(qe,es),e(X,ts),e(x,os),e(x,R),e(R,ns),e(R,pt),e(pt,ss),e(R,as),e(R,mt),e(mt,rs),e(R,is),e(x,ds),e(x,Vt),e(Vt,ls),e(x,cs),_($e,x,null),p(t,Co,h),p(t,J,h),e(J,re),e(re,Xt),_(xe,Xt,null),e(J,hs),e(J,Rt),e(Rt,ps),p(t,jo,h),p(t,b,h),_(Ee,b,null),e(b,ms),e(b,Ce),e(Ce,us),e(Ce,je),e(je,fs),e(Ce,_s),e(b,gs),e(b,Pe),e(Pe,ks),e(Pe,ut),e(ut,Ms),e(Pe,vs),e(b,bs),e(b,Jt),e(Jt,ys),e(b,ws),_(Fe,b,null),e(b,Ts),e(b,I),_(Se,I,null),e(I,zs),e(I,Ae),e(Ae,qs),e(Ae,Kt),e(Kt,$s),e(Ae,xs),e(I,Es),e(I,De),e(De,Ie),e(Ie,Zt),e(Zt,Cs),e(Ie,js),e(Ie,Qt),e(Qt,Ps),e(De,Fs),e(De,Le),e(Le,Yt),e(Yt,Ss),e(Le,As),e(Le,eo),e(eo,Ds),e(I,Is),e(I,to),e(to,Ls),e(b,Ns),e(b,ie),_(Ne,ie,null),e(ie,Gs),e(ie,Ge),e(Ge,Os),e(Ge,oo),e(oo,Bs),e(Ge,Ws),e(b,Hs),e(b,G),_(Oe,G,null),e(G,Us),e(G,ft),e(ft,Vs),e(ft,_t),e(_t,Xs),e(G,Rs),e(G,no),e(no,Js),e(b,Ks),e(b,so),p(t,Po,h),p(t,K,h),e(K,de),e(de,ao),_(Be,ao,null),e(K,Zs),e(K,ro),e(ro,Qs),p(t,Fo,h),p(t,S,h),_(We,S,null),e(S,Ys),e(S,He),e(He,ea),e(He,gt),e(gt,ta),e(He,oa),e(S,na),e(S,Ue),e(Ue,sa),e(Ue,Ve),e(Ve,aa),e(Ue,ra),e(S,ia),e(S,j),_(Xe,j,null),e(j,da),e(j,Z),e(Z,la),e(Z,kt),e(kt,ca),e(Z,ha),e(Z,io),e(io,pa),e(Z,ma),e(j,ua),_(le,j,null),e(j,fa),e(j,lo),e(lo,_a),e(j,ga),_(Re,j,null),p(t,So,h),p(t,Q,h),e(Q,ce),e(ce,co),_(Je,co,null),e(Q,ka),e(Q,ho),e(ho,Ma),p(t,Ao,h),p(t,A,h),_(Ke,A,null),e(A,va),e(A,Ze),e(Ze,ba),e(Ze,Mt),e(Mt,ya),e(Ze,wa),e(A,Ta),e(A,Qe),e(Qe,za),e(Qe,Ye),e(Ye,qa),e(Qe,$a),e(A,xa),e(A,T),_(et,T,null),e(T,Ea),e(T,Y),e(Y,Ca),e(Y,vt),e(vt,ja),e(Y,Pa),e(Y,po),e(po,Fa),e(Y,Sa),e(T,Aa),_(he,T,null),e(T,Da),e(T,mo),e(mo,Ia),e(T,La),_(tt,T,null),e(T,Na),e(T,uo),e(uo,Ga),e(T,Oa),_(ot,T,null),Do=!0},p(t,[h]){const nt={};h&2&&(nt.$$scope={dirty:h,ctx:t}),le.$set(nt);const fo={};h&2&&(fo.$$scope={dirty:h,ctx:t}),he.$set(fo)},i(t){Do||(g(w.$$.fragment,t),g(ge.$$.fragment,t),g(ve.$$.fragment,t),g(be.$$.fragment,t),g(we.$$.fragment,t),g(Te.$$.fragment,t),g(ze.$$.fragment,t),g($e.$$.fragment,t),g(xe.$$.fragment,t),g(Ee.$$.fragment,t),g(Fe.$$.fragment,t),g(Se.$$.fragment,t),g(Ne.$$.fragment,t),g(Oe.$$.fragment,t),g(Be.$$.fragment,t),g(We.$$.fragment,t),g(Xe.$$.fragment,t),g(le.$$.fragment,t),g(Re.$$.fragment,t),g(Je.$$.fragment,t),g(Ke.$$.fragment,t),g(et.$$.fragment,t),g(he.$$.fragment,t),g(tt.$$.fragment,t),g(ot.$$.fragment,t),Do=!0)},o(t){k(w.$$.fragment,t),k(ge.$$.fragment,t),k(ve.$$.fragment,t),k(be.$$.fragment,t),k(we.$$.fragment,t),k(Te.$$.fragment,t),k(ze.$$.fragment,t),k($e.$$.fragment,t),k(xe.$$.fragment,t),k(Ee.$$.fragment,t),k(Fe.$$.fragment,t),k(Se.$$.fragment,t),k(Ne.$$.fragment,t),k(Oe.$$.fragment,t),k(Be.$$.fragment,t),k(We.$$.fragment,t),k(Xe.$$.fragment,t),k(le.$$.fragment,t),k(Re.$$.fragment,t),k(Je.$$.fragment,t),k(Ke.$$.fragment,t),k(et.$$.fragment,t),k(he.$$.fragment,t),k(tt.$$.fragment,t),k(ot.$$.fragment,t),Do=!1},d(t){o(m),t&&o(E),t&&o(v),M(w),t&&o(_o),t&&o(H),M(ge),t&&o(go),t&&o(oe),t&&o(ko),t&&o(rt),t&&o(Mo),t&&o(it),t&&o(vo),t&&o(ne),t&&o(bo),t&&o(U),M(ve),t&&o(yo),t&&o(D),t&&o(wo),t&&o(C),t&&o(To),t&&o(lt),t&&o(zo),M(be,t),t&&o(qo),t&&o(ct),t&&o($o),M(we,t),t&&o(xo),t&&o(V),M(Te),t&&o(Eo),t&&o(x),M(ze),M($e),t&&o(Co),t&&o(J),M(xe),t&&o(jo),t&&o(b),M(Ee),M(Fe),M(Se),M(Ne),M(Oe),t&&o(Po),t&&o(K),M(Be),t&&o(Fo),t&&o(S),M(We),M(Xe),M(le),M(Re),t&&o(So),t&&o(Q),M(Je),t&&o(Ao),t&&o(A),M(Ke),M(et),M(he),M(tt),M(ot)}}}const pi={local:"m2m100",sections:[{local:"overview",sections:[{local:"training-and-generation",title:"Training and Generation"}],title:"Overview"},{local:"transformers.M2M100Config",title:"M2M100Config"},{local:"transformers.M2M100Tokenizer",title:"M2M100Tokenizer"},{local:"transformers.M2M100Model",title:"M2M100Model"},{local:"transformers.M2M100ForConditionalGeneration",title:"M2M100ForConditionalGeneration"}],title:"M2M100"};function mi(_e,m,E){let{fw:v}=m;return _e.$$set=y=>{"fw"in y&&E(0,v=y.fw)},[v]}class vi extends ai{constructor(m){super();ri(this,m,mi,hi,ii,{fw:0})}}export{vi as default,pi as metadata};
