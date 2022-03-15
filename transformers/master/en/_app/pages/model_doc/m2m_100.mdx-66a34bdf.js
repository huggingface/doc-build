import{S as ii,i as di,s as li,e as n,k as d,w as u,t as r,M as ci,c as s,d as o,m as l,a,x as f,h as i,b as c,F as e,g as p,y as _,q as g,o as k,B as M}from"../../chunks/vendor-4833417e.js";import{T as ri}from"../../chunks/Tip-fffd6df1.js";import{D as H}from"../../chunks/Docstring-4f315ed9.js";import{C as at}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as rt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function hi(_e){let m,E,v,y,F;return{c(){m=n("p"),E=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),y=r("Module"),F=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){m=s(w,"P",{});var q=a(m);E=i(q,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(q,"CODE",{});var N=a(v);y=i(N,"Module"),N.forEach(o),F=i(q,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),q.forEach(o)},m(w,q){p(w,m,q),e(m,E),e(m,v),e(v,y),e(m,F)},d(w){w&&o(m)}}}function pi(_e){let m,E,v,y,F;return{c(){m=n("p"),E=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),y=r("Module"),F=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){m=s(w,"P",{});var q=a(m);E=i(q,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(q,"CODE",{});var N=a(v);y=i(N,"Module"),N.forEach(o),F=i(q,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),q.forEach(o)},m(w,q){p(w,m,q),e(m,E),e(m,v),e(v,y),e(m,F)},d(w){w&&o(m)}}}function mi(_e){let m,E,v,y,F,w,q,N,an,go,U,te,xt,ge,rn,Et,dn,ko,oe,ln,ke,cn,hn,Mo,it,pn,vo,dt,Ct,mn,bo,ne,un,Me,fn,_n,yo,V,se,jt,ve,gn,Pt,kn,wo,D,Mn,Ft,vn,bn,St,yn,wn,At,Tn,zn,To,C,qn,lt,$n,xn,Dt,En,Cn,It,jn,Pn,Lt,Fn,Sn,zo,ct,Nt,An,qo,be,$o,ht,ye,Gt,Dn,In,$,Ln,Ot,Nn,Gn,Bt,On,Bn,Wt,Wn,Hn,Ht,Un,Vn,Ut,Xn,Rn,xo,we,Eo,X,ae,Vt,Te,Jn,Xt,Kn,Co,x,ze,Zn,R,Qn,pt,Yn,es,qe,ts,os,ns,J,ss,mt,as,rs,ut,is,ds,ls,Rt,cs,hs,$e,jo,K,re,Jt,xe,ps,Kt,ms,Po,b,Ee,us,Ce,fs,je,_s,gs,ks,Pe,Ms,ft,vs,bs,ys,Zt,ws,Ts,Fe,zs,I,Se,qs,Ae,$s,Qt,xs,Es,Cs,De,Ie,Yt,js,Ps,eo,Fs,Ss,Le,to,As,Ds,oo,Is,Ls,no,Ns,Gs,ie,Ne,Os,Ge,Bs,so,Ws,Hs,Us,G,Oe,Vs,_t,Xs,gt,Rs,Js,ao,Ks,Zs,kt,Be,Fo,Z,de,ro,We,Qs,io,Ys,So,S,He,ea,Ue,ta,Mt,oa,na,sa,Ve,aa,Xe,ra,ia,da,j,Re,la,Q,ca,vt,ha,pa,lo,ma,ua,fa,le,_a,co,ga,ka,Je,Ao,Y,ce,ho,Ke,Ma,po,va,Do,A,Ze,ba,Qe,ya,bt,wa,Ta,za,Ye,qa,et,$a,xa,Ea,T,tt,Ca,ee,ja,yt,Pa,Fa,mo,Sa,Aa,Da,he,Ia,uo,La,Na,ot,Ga,fo,Oa,Ba,nt,Io;return w=new rt({}),ge=new rt({}),ve=new rt({}),be=new at({props:{code:`from transformers import M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

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

loss = model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),we=new at({props:{code:`from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

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
<span class="hljs-string">&quot;Life is like a box of chocolate.&quot;</span>`}}),Te=new rt({}),ze=new H({props:{name:"class transformers.M2M100Config",anchor:"transformers.M2M100Config",parameters:[{name:"vocab_size",val:" = 128112"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.05"},{name:"decoder_layerdrop",val:" = 0.05"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/m2m_100/configuration_m2m_100.py#L35",parametersDescription:[{anchor:"transformers.M2M100Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the M2M100 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100Model">M2M100Model</a> or`,name:"vocab_size"},{anchor:"transformers.M2M100Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),$e=new at({props:{code:`from transformers import M2M100Model, M2M100Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),xe=new rt({}),Ee=new H({props:{name:"class transformers.M2M100Tokenizer",anchor:"transformers.M2M100Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"language_codes",val:" = 'm2m100'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"num_madeup_words",val:" = 8"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/m2m_100/tokenization_m2m_100.py#L65",parametersDescription:[{anchor:"transformers.M2M100Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Fe=new at({props:{code:`from transformers import M2M100Tokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**model_inputs, labels=labels)  <span class="hljs-comment"># should work</span>`}}),Se=new H({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/m2m_100/tokenization_m2m_100.py#L258",parametersDescription:[{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ne=new H({props:{name:"get_special_tokens_mask",anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/m2m_100/tokenization_m2m_100.py#L228",parametersDescription:[{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Oe=new H({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils_base.py#L2864",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Be=new H({props:{name:"save_vocabulary",anchor:"transformers.M2M100Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/m2m_100/tokenization_m2m_100.py#L304"}}),We=new rt({}),He=new H({props:{name:"class transformers.M2M100Model",anchor:"transformers.M2M100Model",parameters:[{name:"config",val:": M2M100Config"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/m2m_100/modeling_m2m_100.py#L1104",parametersDescription:[{anchor:"transformers.M2M100Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Re=new H({props:{name:"forward",anchor:"transformers.M2M100Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/m2m_100/modeling_m2m_100.py#L1131",parametersDescription:[{anchor:"transformers.M2M100Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100Config"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new ri({props:{$$slots:{default:[hi]},$$scope:{ctx:_e}}}),Je=new at({props:{code:`from transformers import M2M100Tokenizer, M2M100Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ke=new rt({}),Ze=new H({props:{name:"class transformers.M2M100ForConditionalGeneration",anchor:"transformers.M2M100ForConditionalGeneration",parameters:[{name:"config",val:": M2M100Config"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/m2m_100/modeling_m2m_100.py#L1215",parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),tt=new H({props:{name:"forward",anchor:"transformers.M2M100ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/m2m_100/modeling_m2m_100.py#L1253",parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100Config"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),he=new ri({props:{$$slots:{default:[pi]},$$scope:{ctx:_e}}}),ot=new at({props:{code:`from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),nt=new at({props:{code:`from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){m=n("meta"),E=d(),v=n("h1"),y=n("a"),F=n("span"),u(w.$$.fragment),q=d(),N=n("span"),an=r("M2M100"),go=d(),U=n("h2"),te=n("a"),xt=n("span"),u(ge.$$.fragment),rn=d(),Et=n("span"),dn=r("Overview"),ko=d(),oe=n("p"),ln=r("The M2M100 model was proposed in "),ke=n("a"),cn=r("Beyond English-Centric Multilingual Machine Translation"),hn=r(` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
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
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),bo=d(),ne=n("p"),un=r("This model was contributed by "),Me=n("a"),fn=r("valhalla"),_n=r("."),yo=d(),V=n("h3"),se=n("a"),jt=n("span"),u(ve.$$.fragment),gn=d(),Pt=n("span"),kn=r("Training and Generation"),wo=d(),D=n("p"),Mn=r(`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),Ft=n("code"),vn=r("[lang_code] X [eos]"),bn=r(", where "),St=n("code"),yn=r("lang_code"),wn=r(` is source language
id for source text and target language id for target text, with `),At=n("code"),Tn=r("X"),zn=r(" being the source or target text."),To=d(),C=n("p"),qn=r("The "),lt=n("a"),$n=r("M2M100Tokenizer"),xn=r(" depends on "),Dt=n("code"),En=r("sentencepiece"),Cn=r(` so be sure to install it before running the
examples. To install `),It=n("code"),jn=r("sentencepiece"),Pn=r(" run "),Lt=n("code"),Fn=r("pip install sentencepiece"),Sn=r("."),zo=d(),ct=n("ul"),Nt=n("li"),An=r("Supervised Training"),qo=d(),u(be.$$.fragment),$o=d(),ht=n("ul"),ye=n("li"),Gt=n("p"),Dn=r("Generation"),In=d(),$=n("p"),Ln=r("M2M100 uses the "),Ot=n("code"),Nn=r("eos_token_id"),Gn=r(" as the "),Bt=n("code"),On=r("decoder_start_token_id"),Bn=r(` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Wt=n("em"),Wn=r("forced_bos_token_id"),Hn=r(" parameter to the "),Ht=n("em"),Un=r("generate"),Vn=r(` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Ut=n("em"),Xn=r("facebook/m2m100_418M"),Rn=r(" checkpoint."),xo=d(),u(we.$$.fragment),Eo=d(),X=n("h2"),ae=n("a"),Vt=n("span"),u(Te.$$.fragment),Jn=d(),Xt=n("span"),Kn=r("M2M100Config"),Co=d(),x=n("div"),u(ze.$$.fragment),Zn=d(),R=n("p"),Qn=r("This is the configuration class to store the configuration of a "),pt=n("a"),Yn=r("M2M100Model"),es=r(`. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
`),qe=n("a"),ts=r("m2m100_418M"),os=r(" architecture."),ns=d(),J=n("p"),ss=r("Configuration objects inherit from "),mt=n("a"),as=r("PretrainedConfig"),rs=r(` and can be used to control the model outputs. Read the
documentation from `),ut=n("a"),is=r("PretrainedConfig"),ds=r(" for more information."),ls=d(),Rt=n("p"),cs=r("Example:"),hs=d(),u($e.$$.fragment),jo=d(),K=n("h2"),re=n("a"),Jt=n("span"),u(xe.$$.fragment),ps=d(),Kt=n("span"),ms=r("M2M100Tokenizer"),Po=d(),b=n("div"),u(Ee.$$.fragment),us=d(),Ce=n("p"),fs=r("Construct an M2M100 tokenizer. Based on "),je=n("a"),_s=r("SentencePiece"),gs=r("."),ks=d(),Pe=n("p"),Ms=r("This tokenizer inherits from "),ft=n("a"),vs=r("PreTrainedTokenizer"),bs=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ys=d(),Zt=n("p"),ws=r("Examples:"),Ts=d(),u(Fe.$$.fragment),zs=d(),I=n("div"),u(Se.$$.fragment),qs=d(),Ae=n("p"),$s=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Qt=n("code"),xs=r("X"),Es=r(" represents the sequence:"),Cs=d(),De=n("ul"),Ie=n("li"),Yt=n("code"),js=r("input_ids"),Ps=r(" (for encoder) "),eo=n("code"),Fs=r("X [eos, src_lang_code]"),Ss=d(),Le=n("li"),to=n("code"),As=r("decoder_input_ids"),Ds=r(": (for decoder) "),oo=n("code"),Is=r("X [eos, tgt_lang_code]"),Ls=d(),no=n("p"),Ns=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Gs=d(),ie=n("div"),u(Ne.$$.fragment),Os=d(),Ge=n("p"),Bs=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),so=n("code"),Ws=r("prepare_for_model"),Hs=r(" method."),Us=d(),G=n("div"),u(Oe.$$.fragment),Vs=d(),_t=n("p"),Xs=r("Create the token type IDs corresponding to the sequences passed. "),gt=n("a"),Rs=r(`What are token type
IDs?`),Js=d(),ao=n("p"),Ks=r("Should be overridden in a subclass if the model has a special way of building those."),Zs=d(),kt=n("div"),u(Be.$$.fragment),Fo=d(),Z=n("h2"),de=n("a"),ro=n("span"),u(We.$$.fragment),Qs=d(),io=n("span"),Ys=r("M2M100Model"),So=d(),S=n("div"),u(He.$$.fragment),ea=d(),Ue=n("p"),ta=r(`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mt=n("a"),oa=r("PreTrainedModel"),na=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sa=d(),Ve=n("p"),aa=r("This model is also a PyTorch "),Xe=n("a"),ra=r("torch.nn.Module"),ia=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),da=d(),j=n("div"),u(Re.$$.fragment),la=d(),Q=n("p"),ca=r("The "),vt=n("a"),ha=r("M2M100Model"),pa=r(" forward method, overrides the "),lo=n("code"),ma=r("__call__"),ua=r(" special method."),fa=d(),u(le.$$.fragment),_a=d(),co=n("p"),ga=r("Example:"),ka=d(),u(Je.$$.fragment),Ao=d(),Y=n("h2"),ce=n("a"),ho=n("span"),u(Ke.$$.fragment),Ma=d(),po=n("span"),va=r("M2M100ForConditionalGeneration"),Do=d(),A=n("div"),u(Ze.$$.fragment),ba=d(),Qe=n("p"),ya=r(`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),bt=n("a"),wa=r("PreTrainedModel"),Ta=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),za=d(),Ye=n("p"),qa=r("This model is also a PyTorch "),et=n("a"),$a=r("torch.nn.Module"),xa=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ea=d(),T=n("div"),u(tt.$$.fragment),Ca=d(),ee=n("p"),ja=r("The "),yt=n("a"),Pa=r("M2M100ForConditionalGeneration"),Fa=r(" forward method, overrides the "),mo=n("code"),Sa=r("__call__"),Aa=r(" special method."),Da=d(),u(he.$$.fragment),Ia=d(),uo=n("p"),La=r("Example:"),Na=d(),u(ot.$$.fragment),Ga=d(),fo=n("p"),Oa=r("Translation example::"),Ba=d(),u(nt.$$.fragment),this.h()},l(t){const h=ci('[data-svelte="svelte-1phssyn"]',document.head);m=s(h,"META",{name:!0,content:!0}),h.forEach(o),E=l(t),v=s(t,"H1",{class:!0});var st=a(v);y=s(st,"A",{id:!0,class:!0,href:!0});var _o=a(y);F=s(_o,"SPAN",{});var Ha=a(F);f(w.$$.fragment,Ha),Ha.forEach(o),_o.forEach(o),q=l(st),N=s(st,"SPAN",{});var Ua=a(N);an=i(Ua,"M2M100"),Ua.forEach(o),st.forEach(o),go=l(t),U=s(t,"H2",{class:!0});var Lo=a(U);te=s(Lo,"A",{id:!0,class:!0,href:!0});var Va=a(te);xt=s(Va,"SPAN",{});var Xa=a(xt);f(ge.$$.fragment,Xa),Xa.forEach(o),Va.forEach(o),rn=l(Lo),Et=s(Lo,"SPAN",{});var Ra=a(Et);dn=i(Ra,"Overview"),Ra.forEach(o),Lo.forEach(o),ko=l(t),oe=s(t,"P",{});var No=a(oe);ln=i(No,"The M2M100 model was proposed in "),ke=s(No,"A",{href:!0,rel:!0});var Ja=a(ke);cn=i(Ja,"Beyond English-Centric Multilingual Machine Translation"),Ja.forEach(o),hn=i(No,` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),No.forEach(o),Mo=l(t),it=s(t,"P",{});var Ka=a(it);pn=i(Ka,"The abstract from the paper is the following:"),Ka.forEach(o),vo=l(t),dt=s(t,"P",{});var Za=a(dt);Ct=s(Za,"EM",{});var Qa=a(Ct);mn=i(Qa,`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),Qa.forEach(o),Za.forEach(o),bo=l(t),ne=s(t,"P",{});var Go=a(ne);un=i(Go,"This model was contributed by "),Me=s(Go,"A",{href:!0,rel:!0});var Ya=a(Me);fn=i(Ya,"valhalla"),Ya.forEach(o),_n=i(Go,"."),Go.forEach(o),yo=l(t),V=s(t,"H3",{class:!0});var Oo=a(V);se=s(Oo,"A",{id:!0,class:!0,href:!0});var er=a(se);jt=s(er,"SPAN",{});var tr=a(jt);f(ve.$$.fragment,tr),tr.forEach(o),er.forEach(o),gn=l(Oo),Pt=s(Oo,"SPAN",{});var or=a(Pt);kn=i(or,"Training and Generation"),or.forEach(o),Oo.forEach(o),wo=l(t),D=s(t,"P",{});var pe=a(D);Mn=i(pe,`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),Ft=s(pe,"CODE",{});var nr=a(Ft);vn=i(nr,"[lang_code] X [eos]"),nr.forEach(o),bn=i(pe,", where "),St=s(pe,"CODE",{});var sr=a(St);yn=i(sr,"lang_code"),sr.forEach(o),wn=i(pe,` is source language
id for source text and target language id for target text, with `),At=s(pe,"CODE",{});var ar=a(At);Tn=i(ar,"X"),ar.forEach(o),zn=i(pe," being the source or target text."),pe.forEach(o),To=l(t),C=s(t,"P",{});var O=a(C);qn=i(O,"The "),lt=s(O,"A",{href:!0});var rr=a(lt);$n=i(rr,"M2M100Tokenizer"),rr.forEach(o),xn=i(O," depends on "),Dt=s(O,"CODE",{});var ir=a(Dt);En=i(ir,"sentencepiece"),ir.forEach(o),Cn=i(O,` so be sure to install it before running the
examples. To install `),It=s(O,"CODE",{});var dr=a(It);jn=i(dr,"sentencepiece"),dr.forEach(o),Pn=i(O," run "),Lt=s(O,"CODE",{});var lr=a(Lt);Fn=i(lr,"pip install sentencepiece"),lr.forEach(o),Sn=i(O,"."),O.forEach(o),zo=l(t),ct=s(t,"UL",{});var cr=a(ct);Nt=s(cr,"LI",{});var hr=a(Nt);An=i(hr,"Supervised Training"),hr.forEach(o),cr.forEach(o),qo=l(t),f(be.$$.fragment,t),$o=l(t),ht=s(t,"UL",{});var pr=a(ht);ye=s(pr,"LI",{});var Bo=a(ye);Gt=s(Bo,"P",{});var mr=a(Gt);Dn=i(mr,"Generation"),mr.forEach(o),In=l(Bo),$=s(Bo,"P",{});var L=a($);Ln=i(L,"M2M100 uses the "),Ot=s(L,"CODE",{});var ur=a(Ot);Nn=i(ur,"eos_token_id"),ur.forEach(o),Gn=i(L," as the "),Bt=s(L,"CODE",{});var fr=a(Bt);On=i(fr,"decoder_start_token_id"),fr.forEach(o),Bn=i(L,` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Wt=s(L,"EM",{});var _r=a(Wt);Wn=i(_r,"forced_bos_token_id"),_r.forEach(o),Hn=i(L," parameter to the "),Ht=s(L,"EM",{});var gr=a(Ht);Un=i(gr,"generate"),gr.forEach(o),Vn=i(L,` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Ut=s(L,"EM",{});var kr=a(Ut);Xn=i(kr,"facebook/m2m100_418M"),kr.forEach(o),Rn=i(L," checkpoint."),L.forEach(o),Bo.forEach(o),pr.forEach(o),xo=l(t),f(we.$$.fragment,t),Eo=l(t),X=s(t,"H2",{class:!0});var Wo=a(X);ae=s(Wo,"A",{id:!0,class:!0,href:!0});var Mr=a(ae);Vt=s(Mr,"SPAN",{});var vr=a(Vt);f(Te.$$.fragment,vr),vr.forEach(o),Mr.forEach(o),Jn=l(Wo),Xt=s(Wo,"SPAN",{});var br=a(Xt);Kn=i(br,"M2M100Config"),br.forEach(o),Wo.forEach(o),Co=l(t),x=s(t,"DIV",{class:!0});var B=a(x);f(ze.$$.fragment,B),Zn=l(B),R=s(B,"P",{});var wt=a(R);Qn=i(wt,"This is the configuration class to store the configuration of a "),pt=s(wt,"A",{href:!0});var yr=a(pt);Yn=i(yr,"M2M100Model"),yr.forEach(o),es=i(wt,`. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
`),qe=s(wt,"A",{href:!0,rel:!0});var wr=a(qe);ts=i(wr,"m2m100_418M"),wr.forEach(o),os=i(wt," architecture."),wt.forEach(o),ns=l(B),J=s(B,"P",{});var Tt=a(J);ss=i(Tt,"Configuration objects inherit from "),mt=s(Tt,"A",{href:!0});var Tr=a(mt);as=i(Tr,"PretrainedConfig"),Tr.forEach(o),rs=i(Tt,` and can be used to control the model outputs. Read the
documentation from `),ut=s(Tt,"A",{href:!0});var zr=a(ut);is=i(zr,"PretrainedConfig"),zr.forEach(o),ds=i(Tt," for more information."),Tt.forEach(o),ls=l(B),Rt=s(B,"P",{});var qr=a(Rt);cs=i(qr,"Example:"),qr.forEach(o),hs=l(B),f($e.$$.fragment,B),B.forEach(o),jo=l(t),K=s(t,"H2",{class:!0});var Ho=a(K);re=s(Ho,"A",{id:!0,class:!0,href:!0});var $r=a(re);Jt=s($r,"SPAN",{});var xr=a(Jt);f(xe.$$.fragment,xr),xr.forEach(o),$r.forEach(o),ps=l(Ho),Kt=s(Ho,"SPAN",{});var Er=a(Kt);ms=i(Er,"M2M100Tokenizer"),Er.forEach(o),Ho.forEach(o),Po=l(t),b=s(t,"DIV",{class:!0});var z=a(b);f(Ee.$$.fragment,z),us=l(z),Ce=s(z,"P",{});var Uo=a(Ce);fs=i(Uo,"Construct an M2M100 tokenizer. Based on "),je=s(Uo,"A",{href:!0,rel:!0});var Cr=a(je);_s=i(Cr,"SentencePiece"),Cr.forEach(o),gs=i(Uo,"."),Uo.forEach(o),ks=l(z),Pe=s(z,"P",{});var Vo=a(Pe);Ms=i(Vo,"This tokenizer inherits from "),ft=s(Vo,"A",{href:!0});var jr=a(ft);vs=i(jr,"PreTrainedTokenizer"),jr.forEach(o),bs=i(Vo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vo.forEach(o),ys=l(z),Zt=s(z,"P",{});var Pr=a(Zt);ws=i(Pr,"Examples:"),Pr.forEach(o),Ts=l(z),f(Fe.$$.fragment,z),zs=l(z),I=s(z,"DIV",{class:!0});var me=a(I);f(Se.$$.fragment,me),qs=l(me),Ae=s(me,"P",{});var Xo=a(Ae);$s=i(Xo,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Qt=s(Xo,"CODE",{});var Fr=a(Qt);xs=i(Fr,"X"),Fr.forEach(o),Es=i(Xo," represents the sequence:"),Xo.forEach(o),Cs=l(me),De=s(me,"UL",{});var Ro=a(De);Ie=s(Ro,"LI",{});var Jo=a(Ie);Yt=s(Jo,"CODE",{});var Sr=a(Yt);js=i(Sr,"input_ids"),Sr.forEach(o),Ps=i(Jo," (for encoder) "),eo=s(Jo,"CODE",{});var Ar=a(eo);Fs=i(Ar,"X [eos, src_lang_code]"),Ar.forEach(o),Jo.forEach(o),Ss=l(Ro),Le=s(Ro,"LI",{});var Ko=a(Le);to=s(Ko,"CODE",{});var Dr=a(to);As=i(Dr,"decoder_input_ids"),Dr.forEach(o),Ds=i(Ko,": (for decoder) "),oo=s(Ko,"CODE",{});var Ir=a(oo);Is=i(Ir,"X [eos, tgt_lang_code]"),Ir.forEach(o),Ko.forEach(o),Ro.forEach(o),Ls=l(me),no=s(me,"P",{});var Lr=a(no);Ns=i(Lr,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Lr.forEach(o),me.forEach(o),Gs=l(z),ie=s(z,"DIV",{class:!0});var Zo=a(ie);f(Ne.$$.fragment,Zo),Os=l(Zo),Ge=s(Zo,"P",{});var Qo=a(Ge);Bs=i(Qo,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),so=s(Qo,"CODE",{});var Nr=a(so);Ws=i(Nr,"prepare_for_model"),Nr.forEach(o),Hs=i(Qo," method."),Qo.forEach(o),Zo.forEach(o),Us=l(z),G=s(z,"DIV",{class:!0});var zt=a(G);f(Oe.$$.fragment,zt),Vs=l(zt),_t=s(zt,"P",{});var Wa=a(_t);Xs=i(Wa,"Create the token type IDs corresponding to the sequences passed. "),gt=s(Wa,"A",{href:!0});var Gr=a(gt);Rs=i(Gr,`What are token type
IDs?`),Gr.forEach(o),Wa.forEach(o),Js=l(zt),ao=s(zt,"P",{});var Or=a(ao);Ks=i(Or,"Should be overridden in a subclass if the model has a special way of building those."),Or.forEach(o),zt.forEach(o),Zs=l(z),kt=s(z,"DIV",{class:!0});var Br=a(kt);f(Be.$$.fragment,Br),Br.forEach(o),z.forEach(o),Fo=l(t),Z=s(t,"H2",{class:!0});var Yo=a(Z);de=s(Yo,"A",{id:!0,class:!0,href:!0});var Wr=a(de);ro=s(Wr,"SPAN",{});var Hr=a(ro);f(We.$$.fragment,Hr),Hr.forEach(o),Wr.forEach(o),Qs=l(Yo),io=s(Yo,"SPAN",{});var Ur=a(io);Ys=i(Ur,"M2M100Model"),Ur.forEach(o),Yo.forEach(o),So=l(t),S=s(t,"DIV",{class:!0});var ue=a(S);f(He.$$.fragment,ue),ea=l(ue),Ue=s(ue,"P",{});var en=a(Ue);ta=i(en,`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mt=s(en,"A",{href:!0});var Vr=a(Mt);oa=i(Vr,"PreTrainedModel"),Vr.forEach(o),na=i(en,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),en.forEach(o),sa=l(ue),Ve=s(ue,"P",{});var tn=a(Ve);aa=i(tn,"This model is also a PyTorch "),Xe=s(tn,"A",{href:!0,rel:!0});var Xr=a(Xe);ra=i(Xr,"torch.nn.Module"),Xr.forEach(o),ia=i(tn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tn.forEach(o),da=l(ue),j=s(ue,"DIV",{class:!0});var W=a(j);f(Re.$$.fragment,W),la=l(W),Q=s(W,"P",{});var qt=a(Q);ca=i(qt,"The "),vt=s(qt,"A",{href:!0});var Rr=a(vt);ha=i(Rr,"M2M100Model"),Rr.forEach(o),pa=i(qt," forward method, overrides the "),lo=s(qt,"CODE",{});var Jr=a(lo);ma=i(Jr,"__call__"),Jr.forEach(o),ua=i(qt," special method."),qt.forEach(o),fa=l(W),f(le.$$.fragment,W),_a=l(W),co=s(W,"P",{});var Kr=a(co);ga=i(Kr,"Example:"),Kr.forEach(o),ka=l(W),f(Je.$$.fragment,W),W.forEach(o),ue.forEach(o),Ao=l(t),Y=s(t,"H2",{class:!0});var on=a(Y);ce=s(on,"A",{id:!0,class:!0,href:!0});var Zr=a(ce);ho=s(Zr,"SPAN",{});var Qr=a(ho);f(Ke.$$.fragment,Qr),Qr.forEach(o),Zr.forEach(o),Ma=l(on),po=s(on,"SPAN",{});var Yr=a(po);va=i(Yr,"M2M100ForConditionalGeneration"),Yr.forEach(o),on.forEach(o),Do=l(t),A=s(t,"DIV",{class:!0});var fe=a(A);f(Ze.$$.fragment,fe),ba=l(fe),Qe=s(fe,"P",{});var nn=a(Qe);ya=i(nn,`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),bt=s(nn,"A",{href:!0});var ei=a(bt);wa=i(ei,"PreTrainedModel"),ei.forEach(o),Ta=i(nn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nn.forEach(o),za=l(fe),Ye=s(fe,"P",{});var sn=a(Ye);qa=i(sn,"This model is also a PyTorch "),et=s(sn,"A",{href:!0,rel:!0});var ti=a(et);$a=i(ti,"torch.nn.Module"),ti.forEach(o),xa=i(sn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sn.forEach(o),Ea=l(fe),T=s(fe,"DIV",{class:!0});var P=a(T);f(tt.$$.fragment,P),Ca=l(P),ee=s(P,"P",{});var $t=a(ee);ja=i($t,"The "),yt=s($t,"A",{href:!0});var oi=a(yt);Pa=i(oi,"M2M100ForConditionalGeneration"),oi.forEach(o),Fa=i($t," forward method, overrides the "),mo=s($t,"CODE",{});var ni=a(mo);Sa=i(ni,"__call__"),ni.forEach(o),Aa=i($t," special method."),$t.forEach(o),Da=l(P),f(he.$$.fragment,P),Ia=l(P),uo=s(P,"P",{});var si=a(uo);La=i(si,"Example:"),si.forEach(o),Na=l(P),f(ot.$$.fragment,P),Ga=l(P),fo=s(P,"P",{});var ai=a(fo);Oa=i(ai,"Translation example::"),ai.forEach(o),Ba=l(P),f(nt.$$.fragment,P),P.forEach(o),fe.forEach(o),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(ui)),c(y,"id","m2m100"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#m2m100"),c(v,"class","relative group"),c(te,"id","overview"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#overview"),c(U,"class","relative group"),c(ke,"href","https://arxiv.org/abs/2010.11125"),c(ke,"rel","nofollow"),c(Me,"href","https://huggingface.co/valhalla"),c(Me,"rel","nofollow"),c(se,"id","training-and-generation"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#training-and-generation"),c(V,"class","relative group"),c(lt,"href","/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100Tokenizer"),c(ae,"id","transformers.M2M100Config"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#transformers.M2M100Config"),c(X,"class","relative group"),c(pt,"href","/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100Model"),c(qe,"href","https://huggingface.co/facebook/m2m100_418M"),c(qe,"rel","nofollow"),c(mt,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(ut,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(x,"class","docstring"),c(re,"id","transformers.M2M100Tokenizer"),c(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(re,"href","#transformers.M2M100Tokenizer"),c(K,"class","relative group"),c(je,"href","https://github.com/google/sentencepiece"),c(je,"rel","nofollow"),c(ft,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(I,"class","docstring"),c(ie,"class","docstring"),c(gt,"href","../glossary#token-type-ids"),c(G,"class","docstring"),c(kt,"class","docstring"),c(b,"class","docstring"),c(de,"id","transformers.M2M100Model"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.M2M100Model"),c(Z,"class","relative group"),c(Mt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Xe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xe,"rel","nofollow"),c(vt,"href","/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100Model"),c(j,"class","docstring"),c(S,"class","docstring"),c(ce,"id","transformers.M2M100ForConditionalGeneration"),c(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ce,"href","#transformers.M2M100ForConditionalGeneration"),c(Y,"class","relative group"),c(bt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(et,"rel","nofollow"),c(yt,"href","/docs/transformers/master/en/model_doc/m2m_100#transformers.M2M100ForConditionalGeneration"),c(T,"class","docstring"),c(A,"class","docstring")},m(t,h){e(document.head,m),p(t,E,h),p(t,v,h),e(v,y),e(y,F),_(w,F,null),e(v,q),e(v,N),e(N,an),p(t,go,h),p(t,U,h),e(U,te),e(te,xt),_(ge,xt,null),e(U,rn),e(U,Et),e(Et,dn),p(t,ko,h),p(t,oe,h),e(oe,ln),e(oe,ke),e(ke,cn),e(oe,hn),p(t,Mo,h),p(t,it,h),e(it,pn),p(t,vo,h),p(t,dt,h),e(dt,Ct),e(Ct,mn),p(t,bo,h),p(t,ne,h),e(ne,un),e(ne,Me),e(Me,fn),e(ne,_n),p(t,yo,h),p(t,V,h),e(V,se),e(se,jt),_(ve,jt,null),e(V,gn),e(V,Pt),e(Pt,kn),p(t,wo,h),p(t,D,h),e(D,Mn),e(D,Ft),e(Ft,vn),e(D,bn),e(D,St),e(St,yn),e(D,wn),e(D,At),e(At,Tn),e(D,zn),p(t,To,h),p(t,C,h),e(C,qn),e(C,lt),e(lt,$n),e(C,xn),e(C,Dt),e(Dt,En),e(C,Cn),e(C,It),e(It,jn),e(C,Pn),e(C,Lt),e(Lt,Fn),e(C,Sn),p(t,zo,h),p(t,ct,h),e(ct,Nt),e(Nt,An),p(t,qo,h),_(be,t,h),p(t,$o,h),p(t,ht,h),e(ht,ye),e(ye,Gt),e(Gt,Dn),e(ye,In),e(ye,$),e($,Ln),e($,Ot),e(Ot,Nn),e($,Gn),e($,Bt),e(Bt,On),e($,Bn),e($,Wt),e(Wt,Wn),e($,Hn),e($,Ht),e(Ht,Un),e($,Vn),e($,Ut),e(Ut,Xn),e($,Rn),p(t,xo,h),_(we,t,h),p(t,Eo,h),p(t,X,h),e(X,ae),e(ae,Vt),_(Te,Vt,null),e(X,Jn),e(X,Xt),e(Xt,Kn),p(t,Co,h),p(t,x,h),_(ze,x,null),e(x,Zn),e(x,R),e(R,Qn),e(R,pt),e(pt,Yn),e(R,es),e(R,qe),e(qe,ts),e(R,os),e(x,ns),e(x,J),e(J,ss),e(J,mt),e(mt,as),e(J,rs),e(J,ut),e(ut,is),e(J,ds),e(x,ls),e(x,Rt),e(Rt,cs),e(x,hs),_($e,x,null),p(t,jo,h),p(t,K,h),e(K,re),e(re,Jt),_(xe,Jt,null),e(K,ps),e(K,Kt),e(Kt,ms),p(t,Po,h),p(t,b,h),_(Ee,b,null),e(b,us),e(b,Ce),e(Ce,fs),e(Ce,je),e(je,_s),e(Ce,gs),e(b,ks),e(b,Pe),e(Pe,Ms),e(Pe,ft),e(ft,vs),e(Pe,bs),e(b,ys),e(b,Zt),e(Zt,ws),e(b,Ts),_(Fe,b,null),e(b,zs),e(b,I),_(Se,I,null),e(I,qs),e(I,Ae),e(Ae,$s),e(Ae,Qt),e(Qt,xs),e(Ae,Es),e(I,Cs),e(I,De),e(De,Ie),e(Ie,Yt),e(Yt,js),e(Ie,Ps),e(Ie,eo),e(eo,Fs),e(De,Ss),e(De,Le),e(Le,to),e(to,As),e(Le,Ds),e(Le,oo),e(oo,Is),e(I,Ls),e(I,no),e(no,Ns),e(b,Gs),e(b,ie),_(Ne,ie,null),e(ie,Os),e(ie,Ge),e(Ge,Bs),e(Ge,so),e(so,Ws),e(Ge,Hs),e(b,Us),e(b,G),_(Oe,G,null),e(G,Vs),e(G,_t),e(_t,Xs),e(_t,gt),e(gt,Rs),e(G,Js),e(G,ao),e(ao,Ks),e(b,Zs),e(b,kt),_(Be,kt,null),p(t,Fo,h),p(t,Z,h),e(Z,de),e(de,ro),_(We,ro,null),e(Z,Qs),e(Z,io),e(io,Ys),p(t,So,h),p(t,S,h),_(He,S,null),e(S,ea),e(S,Ue),e(Ue,ta),e(Ue,Mt),e(Mt,oa),e(Ue,na),e(S,sa),e(S,Ve),e(Ve,aa),e(Ve,Xe),e(Xe,ra),e(Ve,ia),e(S,da),e(S,j),_(Re,j,null),e(j,la),e(j,Q),e(Q,ca),e(Q,vt),e(vt,ha),e(Q,pa),e(Q,lo),e(lo,ma),e(Q,ua),e(j,fa),_(le,j,null),e(j,_a),e(j,co),e(co,ga),e(j,ka),_(Je,j,null),p(t,Ao,h),p(t,Y,h),e(Y,ce),e(ce,ho),_(Ke,ho,null),e(Y,Ma),e(Y,po),e(po,va),p(t,Do,h),p(t,A,h),_(Ze,A,null),e(A,ba),e(A,Qe),e(Qe,ya),e(Qe,bt),e(bt,wa),e(Qe,Ta),e(A,za),e(A,Ye),e(Ye,qa),e(Ye,et),e(et,$a),e(Ye,xa),e(A,Ea),e(A,T),_(tt,T,null),e(T,Ca),e(T,ee),e(ee,ja),e(ee,yt),e(yt,Pa),e(ee,Fa),e(ee,mo),e(mo,Sa),e(ee,Aa),e(T,Da),_(he,T,null),e(T,Ia),e(T,uo),e(uo,La),e(T,Na),_(ot,T,null),e(T,Ga),e(T,fo),e(fo,Oa),e(T,Ba),_(nt,T,null),Io=!0},p(t,[h]){const st={};h&2&&(st.$$scope={dirty:h,ctx:t}),le.$set(st);const _o={};h&2&&(_o.$$scope={dirty:h,ctx:t}),he.$set(_o)},i(t){Io||(g(w.$$.fragment,t),g(ge.$$.fragment,t),g(ve.$$.fragment,t),g(be.$$.fragment,t),g(we.$$.fragment,t),g(Te.$$.fragment,t),g(ze.$$.fragment,t),g($e.$$.fragment,t),g(xe.$$.fragment,t),g(Ee.$$.fragment,t),g(Fe.$$.fragment,t),g(Se.$$.fragment,t),g(Ne.$$.fragment,t),g(Oe.$$.fragment,t),g(Be.$$.fragment,t),g(We.$$.fragment,t),g(He.$$.fragment,t),g(Re.$$.fragment,t),g(le.$$.fragment,t),g(Je.$$.fragment,t),g(Ke.$$.fragment,t),g(Ze.$$.fragment,t),g(tt.$$.fragment,t),g(he.$$.fragment,t),g(ot.$$.fragment,t),g(nt.$$.fragment,t),Io=!0)},o(t){k(w.$$.fragment,t),k(ge.$$.fragment,t),k(ve.$$.fragment,t),k(be.$$.fragment,t),k(we.$$.fragment,t),k(Te.$$.fragment,t),k(ze.$$.fragment,t),k($e.$$.fragment,t),k(xe.$$.fragment,t),k(Ee.$$.fragment,t),k(Fe.$$.fragment,t),k(Se.$$.fragment,t),k(Ne.$$.fragment,t),k(Oe.$$.fragment,t),k(Be.$$.fragment,t),k(We.$$.fragment,t),k(He.$$.fragment,t),k(Re.$$.fragment,t),k(le.$$.fragment,t),k(Je.$$.fragment,t),k(Ke.$$.fragment,t),k(Ze.$$.fragment,t),k(tt.$$.fragment,t),k(he.$$.fragment,t),k(ot.$$.fragment,t),k(nt.$$.fragment,t),Io=!1},d(t){o(m),t&&o(E),t&&o(v),M(w),t&&o(go),t&&o(U),M(ge),t&&o(ko),t&&o(oe),t&&o(Mo),t&&o(it),t&&o(vo),t&&o(dt),t&&o(bo),t&&o(ne),t&&o(yo),t&&o(V),M(ve),t&&o(wo),t&&o(D),t&&o(To),t&&o(C),t&&o(zo),t&&o(ct),t&&o(qo),M(be,t),t&&o($o),t&&o(ht),t&&o(xo),M(we,t),t&&o(Eo),t&&o(X),M(Te),t&&o(Co),t&&o(x),M(ze),M($e),t&&o(jo),t&&o(K),M(xe),t&&o(Po),t&&o(b),M(Ee),M(Fe),M(Se),M(Ne),M(Oe),M(Be),t&&o(Fo),t&&o(Z),M(We),t&&o(So),t&&o(S),M(He),M(Re),M(le),M(Je),t&&o(Ao),t&&o(Y),M(Ke),t&&o(Do),t&&o(A),M(Ze),M(tt),M(he),M(ot),M(nt)}}}const ui={local:"m2m100",sections:[{local:"overview",sections:[{local:"training-and-generation",title:"Training and Generation"}],title:"Overview"},{local:"transformers.M2M100Config",title:"M2M100Config"},{local:"transformers.M2M100Tokenizer",title:"M2M100Tokenizer"},{local:"transformers.M2M100Model",title:"M2M100Model"},{local:"transformers.M2M100ForConditionalGeneration",title:"M2M100ForConditionalGeneration"}],title:"M2M100"};function fi(_e,m,E){let{fw:v}=m;return _e.$$set=y=>{"fw"in y&&E(0,v=y.fw)},[v]}class yi extends ii{constructor(m){super();di(this,m,fi,mi,li,{fw:0})}}export{yi as default,ui as metadata};
