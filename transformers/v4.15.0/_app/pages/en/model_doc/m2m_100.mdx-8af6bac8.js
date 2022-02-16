import{S as td,i as od,s as nd,e as n,k as d,w as u,t as r,L as sd,c as s,d as o,m as l,a,x as f,h as i,b as c,J as e,g as p,y as _,q as g,o as k,B as M}from"../../../chunks/vendor-b1433968.js";import{T as ed}from"../../../chunks/Tip-c3840994.js";import{D as ee}from"../../../chunks/Docstring-ff504c58.js";import{C as Et}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as ke}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function ad(Me){let m,C,v,T,F;return{c(){m=n("p"),C=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),T=r("Module"),F=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){m=s(z,"P",{});var $=a(m);C=i($,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s($,"CODE",{});var N=a(v);T=i(N,"Module"),N.forEach(o),F=i($,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),$.forEach(o)},m(z,$){p(z,m,$),e(m,C),e(m,v),e(v,T),e(m,F)},d(z){z&&o(m)}}}function rd(Me){let m,C,v,T,F;return{c(){m=n("p"),C=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),T=r("Module"),F=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){m=s(z,"P",{});var $=a(m);C=i($,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s($,"CODE",{});var N=a(v);T=i(N,"Module"),N.forEach(o),F=i($,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),$.forEach(o)},m(z,$){p(z,m,$),e(m,C),e(m,v),e(v,T),e(m,F)},d(z){z&&o(m)}}}function id(Me){let m,C,v,T,F,z,$,N,$n,Ao,W,te,xt,ve,En,Ct,xn,Oo,oe,Cn,be,Pn,jn,Do,dt,Fn,No,lt,Pt,Ln,Io,ne,Sn,ye,An,On,Go,H,se,jt,we,Dn,Ft,Nn,Bo,A,In,Lt,Gn,Bn,St,Un,Wn,At,Hn,Vn,Uo,P,Kn,ct,Qn,Xn,Ot,Rn,Jn,Dt,Zn,Yn,Nt,es,ts,Wo,ht,It,os,Ho,Te,Vo,pt,ze,Gt,ns,ss,E,as,Bt,rs,is,Ut,ds,ls,Wt,cs,hs,Ht,ps,ms,Vt,us,fs,Ko,qe,Qo,V,ae,Kt,$e,_s,Qt,gs,Xo,x,Ee,ks,K,Ms,mt,vs,bs,xe,ys,ws,Ts,Q,zs,ut,qs,$s,ft,Es,xs,Cs,Xt,Ps,js,Ce,Ro,X,re,Rt,Pe,Fs,Jt,Ls,Jo,y,je,Ss,Fe,As,Le,Os,Ds,Ns,Se,Is,_t,Gs,Bs,Us,Zt,Ws,Hs,Ae,Vs,O,Oe,Ks,De,Qs,Yt,Xs,Rs,Js,Ne,Ie,eo,Zs,Ys,to,ea,ta,Ge,oo,oa,na,no,sa,aa,so,ra,ia,ie,Be,da,Ue,la,ao,ca,ha,pa,I,We,ma,gt,ua,kt,fa,_a,ro,ga,ka,io,Zo,R,de,lo,He,Ma,co,va,Yo,L,Ve,ba,Ke,ya,Mt,wa,Ta,za,Qe,qa,Xe,$a,Ea,xa,j,Re,Ca,J,Pa,vt,ja,Fa,ho,La,Sa,Aa,le,Oa,po,Da,Na,Je,en,Z,ce,mo,Ze,Ia,uo,Ga,tn,S,Ye,Ba,et,Ua,bt,Wa,Ha,Va,tt,Ka,ot,Qa,Xa,Ra,b,nt,Ja,Y,Za,yt,Ya,er,fo,tr,or,nr,he,sr,_o,ar,rr,st,ir,go,dr,lr,ko,Mo,vo,bo,cr,hr,yo,wo,To,zo,pr,mr,qo,$o,Eo,xo,ur,fr,Co,Po,at,pe,me,jo,rt,_r,Fo,gr,kr,Lo,Mr,on;return z=new ke({}),ve=new ke({}),we=new ke({}),Te=new Et({props:{code:`from transformers import M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = M2M100ForConditionalGeneration.from_pretrained('facebook/m2m100_418M')
tokenizer = M2M100Tokenizer.from_pretrained('facebook/m2m100_418M', src_lang="en", tgt_lang="fr")

src_text = "Life is like a box of chocolates."
tgt_text = "La vie est comme une bo\xEEte de chocolat."

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

loss = model(**model_inputs, labels=labels) # forward pass,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/m2m100_418M&#x27;</span>)
tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/m2m100_418M&#x27;</span>, src_lang=<span class="hljs-string">&quot;en&quot;</span>, tgt_lang=<span class="hljs-string">&quot;fr&quot;</span>)

src_text = <span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>
tgt_text = <span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

loss = model(**model_inputs, labels=labels) <span class="hljs-comment"># forward pass</span>`}}),qe=new Et({props:{code:`from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

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
<span class="hljs-string">&quot;Life is like a box of chocolate.&quot;</span>`}}),$e=new ke({}),Ee=new ee({props:{name:"class transformers.M2M100Config",anchor:"transformers.M2M100Config",parameters:[{name:"vocab_size",val:" = 128112"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.05"},{name:"decoder_layerdrop",val:" = 0.05"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/m2m_100/configuration_m2m_100.py#L29",parametersDescription:[{anchor:"transformers.M2M100Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the M2M100 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100Model">M2M100Model</a> or`,name:"vocab_size"},{anchor:"transformers.M2M100Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.M2M100Config.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.M2M100Config.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.M2M100Config.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.M2M100Config.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.M2M100Config.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.M2M100Config.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.M2M100Config.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.M2M100Config.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.M2M100Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.M2M100Config.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.M2M100Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.M2M100Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.M2M100Config.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.M2M100Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Ce=new Et({props:{code:`from transformers import M2M100Model, M2M100Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Pe=new ke({}),je=new ee({props:{name:"class transformers.M2M100Tokenizer",anchor:"transformers.M2M100Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"language_codes",val:" = 'm2m100'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"num_madeup_words",val:" = 8"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/m2m_100/tokenization_m2m_100.py#L64",parametersDescription:[{anchor:"transformers.M2M100Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.M2M100Tokenizer.spm_file",description:`<strong>spm_file</strong> (<code>str</code>) &#x2014;
Path to <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension)
that contains the vocabulary.`,name:"spm_file"},{anchor:"transformers.M2M100Tokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Ae=new Et({props:{code:`from transformers import M2M100Tokenizer
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M, src_lang="en", tgt_lang="ro")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text =  "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
   labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M, src_lang=&quot;</span>en<span class="hljs-string">&quot;, tgt_lang=&quot;</span>ro<span class="hljs-string">&quot;)
&gt;&gt;&gt; src_text = &quot;</span> UN Chief Says There Is No Military Solution <span class="hljs-keyword">in</span> Syria<span class="hljs-string">&quot;
&gt;&gt;&gt; tgt_text =  &quot;</span>\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria<span class="hljs-string">&quot;
&gt;&gt;&gt; model_inputs = tokenizer(src_text, return_tensors=&quot;</span>pt<span class="hljs-string">&quot;)
&gt;&gt;&gt; with tokenizer.as_target_tokenizer():
...    labels = tokenizer(tgt_text, return_tensors=&quot;</span>pt<span class="hljs-string">&quot;).input_ids
&gt;&gt;&gt; # model(**model_inputs, labels=labels) should work</span>`}}),Oe=new ee({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/m2m_100/tokenization_m2m_100.py#L254",parametersDescription:[{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Be=new ee({props:{name:"get\\_special\\_tokens\\_mask",anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/m2m_100/tokenization_m2m_100.py#L224",parametersDescription:[{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),We=new ee({props:{name:"create\\_token\\_type\\_ids\\_from\\_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/tokenization_utils_base.py#L2818",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),He=new ke({}),Ve=new ee({props:{name:"class transformers.M2M100Model",anchor:"transformers.M2M100Model",parameters:[{name:"config",val:": M2M100Config"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/m2m_100/modeling_m2m_100.py#L1101",parametersDescription:[{anchor:"transformers.M2M100Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Re=new ee({props:{name:"forward",anchor:"transformers.M2M100Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/m2m_100/modeling_m2m_100.py#L1128",parametersDescription:[{anchor:"transformers.M2M100Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>M2M100 uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.M2M100Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.M2M100Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.M2M100Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.M2M100Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.M2M100Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.M2M100Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.M2M100Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.M2M100Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100Config"
>M2M100Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new ed({props:{$$slots:{default:[ad]},$$scope:{ctx:Me}}}),Je=new Et({props:{code:`from transformers import M2M100Tokenizer, M2M100Model
import torch

tokenizer = M2M100Tokenizer.from_pretrained('facebook/m2m100_418M')
model = M2M100Model.from_pretrained('facebook/m2m100_418M')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/m2m100_418M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100Model.from_pretrained(<span class="hljs-string">&#x27;facebook/m2m100_418M&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ze=new ke({}),Ye=new ee({props:{name:"class transformers.M2M100ForConditionalGeneration",anchor:"transformers.M2M100ForConditionalGeneration",parameters:[{name:"config",val:": M2M100Config"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/m2m_100/modeling_m2m_100.py#L1212",parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),nt=new ee({props:{name:"forward",anchor:"transformers.M2M100ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/m2m_100/modeling_m2m_100.py#L1250",parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>M2M100 uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100Config"
>M2M100Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),he=new ed({props:{$$slots:{default:[rd]},$$scope:{ctx:Me}}}),st=new Et({props:{code:`from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration

model = M2M100ForConditionalGeneration.from_pretrained('facebook/m2m100_418M')
tokenizer = M2M100Tokenizer.from_pretrained('facebook/m2m100_418M')

text_to_translate = "Life is like a box of chocolates"
model_inputs = tokenizer(text_to_translate, return_tensors='pt')

# translate to French
gen_tokens = model.generate( **model_inputs, forced_bos_token_id=tokenizer.get_lang_id("fr"))
print(tokenizer.batch_decode(gen_tokens, skip_special_tokens=True)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/m2m100_418M&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/m2m100_418M&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text_to_translate = <span class="hljs-string">&quot;Life is like a box of chocolates&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(text_to_translate, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate( **model_inputs, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),rt=new ke({}),{c(){m=n("meta"),C=d(),v=n("h1"),T=n("a"),F=n("span"),u(z.$$.fragment),$=d(),N=n("span"),$n=r("M2M100"),Ao=d(),W=n("h2"),te=n("a"),xt=n("span"),u(ve.$$.fragment),En=d(),Ct=n("span"),xn=r("Overview"),Oo=d(),oe=n("p"),Cn=r("The M2M100 model was proposed in "),be=n("a"),Pn=r("Beyond English-Centric Multilingual Machine Translation"),jn=r(` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),Do=d(),dt=n("p"),Fn=r("The abstract from the paper is the following:"),No=d(),lt=n("p"),Pt=n("em"),Ln=r(`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),Io=d(),ne=n("p"),Sn=r("This model was contributed by "),ye=n("a"),An=r("valhalla"),On=r("."),Go=d(),H=n("h3"),se=n("a"),jt=n("span"),u(we.$$.fragment),Dn=d(),Ft=n("span"),Nn=r("Training and Generation"),Bo=d(),A=n("p"),In=r(`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),Lt=n("code"),Gn=r("[lang_code] X [eos]"),Bn=r(", where "),St=n("code"),Un=r("lang_code"),Wn=r(` is source language
id for source text and target language id for target text, with `),At=n("code"),Hn=r("X"),Vn=r(" being the source or target text."),Uo=d(),P=n("p"),Kn=r("The "),ct=n("a"),Qn=r("M2M100Tokenizer"),Xn=r(" depends on "),Ot=n("code"),Rn=r("sentencepiece"),Jn=r(` so be sure to install it before running the
examples. To install `),Dt=n("code"),Zn=r("sentencepiece"),Yn=r(" run "),Nt=n("code"),es=r("pip install sentencepiece"),ts=r("."),Wo=d(),ht=n("ul"),It=n("li"),os=r("Supervised Training"),Ho=d(),u(Te.$$.fragment),Vo=d(),pt=n("ul"),ze=n("li"),Gt=n("p"),ns=r("Generation"),ss=d(),E=n("p"),as=r("M2M100 uses the "),Bt=n("code"),rs=r("eos_token_id"),is=r(" as the "),Ut=n("code"),ds=r("decoder_start_token_id"),ls=r(` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Wt=n("em"),cs=r("forced_bos_token_id"),hs=r(" parameter to the "),Ht=n("em"),ps=r("generate"),ms=r(` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Vt=n("em"),us=r("facebook/m2m100_418M"),fs=r(" checkpoint."),Ko=d(),u(qe.$$.fragment),Qo=d(),V=n("h2"),ae=n("a"),Kt=n("span"),u($e.$$.fragment),_s=d(),Qt=n("span"),gs=r("M2M100Config"),Xo=d(),x=n("div"),u(Ee.$$.fragment),ks=d(),K=n("p"),Ms=r("This is the configuration class to store the configuration of a "),mt=n("a"),vs=r("M2M100Model"),bs=r(`. It is used to
instantiate an M2M100 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the M2M100 `),xe=n("a"),ys=r("m2m100_418M"),ws=r(" architecture."),Ts=d(),Q=n("p"),zs=r("Configuration objects inherit from "),ut=n("a"),qs=r("PretrainedConfig"),$s=r(` and can be used to control the model
outputs. Read the documentation from `),ft=n("a"),Es=r("PretrainedConfig"),xs=r(" for more information."),Cs=d(),Xt=n("p"),Ps=r("Example:"),js=d(),u(Ce.$$.fragment),Ro=d(),X=n("h2"),re=n("a"),Rt=n("span"),u(Pe.$$.fragment),Fs=d(),Jt=n("span"),Ls=r("M2M100Tokenizer"),Jo=d(),y=n("div"),u(je.$$.fragment),Ss=d(),Fe=n("p"),As=r("Construct an M2M100 tokenizer. Based on "),Le=n("a"),Os=r("SentencePiece"),Ds=r("."),Ns=d(),Se=n("p"),Is=r("This tokenizer inherits from "),_t=n("a"),Gs=r("PreTrainedTokenizer"),Bs=r(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Us=d(),Zt=n("p"),Ws=r("Examples:"),Hs=d(),u(Ae.$$.fragment),Vs=d(),O=n("div"),u(Oe.$$.fragment),Ks=d(),De=n("p"),Qs=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Yt=n("code"),Xs=r("X"),Rs=r(" represents the sequence:"),Js=d(),Ne=n("ul"),Ie=n("li"),eo=n("code"),Zs=r("input_ids"),Ys=r(" (for encoder) "),to=n("code"),ea=r("X [eos, src_lang_code]"),ta=d(),Ge=n("li"),oo=n("code"),oa=r("decoder_input_ids"),na=r(": (for decoder) "),no=n("code"),sa=r("X [eos, tgt_lang_code]"),aa=d(),so=n("p"),ra=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),ia=d(),ie=n("div"),u(Be.$$.fragment),da=d(),Ue=n("p"),la=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ao=n("code"),ca=r("prepare_for_model"),ha=r(" method."),pa=d(),I=n("div"),u(We.$$.fragment),ma=d(),gt=n("p"),ua=r("Create the token type IDs corresponding to the sequences passed. "),kt=n("a"),fa=r("What are token type IDs?"),_a=d(),ro=n("p"),ga=r("Should be overridden in a subclass if the model has a special way of building those."),ka=d(),io=n("div"),Zo=d(),R=n("h2"),de=n("a"),lo=n("span"),u(He.$$.fragment),Ma=d(),co=n("span"),va=r("M2M100Model"),Yo=d(),L=n("div"),u(Ve.$$.fragment),ba=d(),Ke=n("p"),ya=r(`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mt=n("a"),wa=r("PreTrainedModel"),Ta=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),za=d(),Qe=n("p"),qa=r("This model is also a PyTorch "),Xe=n("a"),$a=r("torch.nn.Module"),Ea=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),xa=d(),j=n("div"),u(Re.$$.fragment),Ca=d(),J=n("p"),Pa=r("The "),vt=n("a"),ja=r("M2M100Model"),Fa=r(" forward method, overrides the "),ho=n("code"),La=r("__call__"),Sa=r(" special method."),Aa=d(),u(le.$$.fragment),Oa=d(),po=n("p"),Da=r("Example:"),Na=d(),u(Je.$$.fragment),en=d(),Z=n("h2"),ce=n("a"),mo=n("span"),u(Ze.$$.fragment),Ia=d(),uo=n("span"),Ga=r("M2M100ForConditionalGeneration"),tn=d(),S=n("div"),u(Ye.$$.fragment),Ba=d(),et=n("p"),Ua=r(`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),bt=n("a"),Wa=r("PreTrainedModel"),Ha=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Va=d(),tt=n("p"),Ka=r("This model is also a PyTorch "),ot=n("a"),Qa=r("torch.nn.Module"),Xa=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ra=d(),b=n("div"),u(nt.$$.fragment),Ja=d(),Y=n("p"),Za=r("The "),yt=n("a"),Ya=r("M2M100ForConditionalGeneration"),er=r(" forward method, overrides the "),fo=n("code"),tr=r("__call__"),or=r(" special method."),nr=d(),u(he.$$.fragment),sr=d(),_o=n("p"),ar=r("Example:"),rr=d(),u(st.$$.fragment),ir=d(),go=n("p"),dr=r("Translation example::"),lr=d(),ko=n("blockquote"),Mo=n("blockquote"),vo=n("blockquote"),bo=n("p"),cr=r("from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration"),hr=d(),yo=n("blockquote"),wo=n("blockquote"),To=n("blockquote"),zo=n("p"),pr=r(`model = M2M100ForConditionalGeneration.from_pretrained(\u2018facebook/m2m100_418M\u2019)
tokenizer = M2M100Tokenizer.from_pretrained(\u2018facebook/m2m100_418M\u2019)`),mr=d(),qo=n("blockquote"),$o=n("blockquote"),Eo=n("blockquote"),xo=n("p"),ur=r(`text_to_translate = \u201CLife is like a box of chocolates\u201D
model_inputs = tokenizer(text_to_translate, return_tensors=\u2018pt\u2019)`),fr=d(),Co=n("blockquote"),Po=n("blockquote"),at=n("blockquote"),pe=n("h1"),me=n("a"),jo=n("span"),u(rt.$$.fragment),_r=d(),Fo=n("span"),gr=r("translate to French"),kr=d(),Lo=n("p"),Mr=r(`gen_tokens = model.generate( **model_inputs, forced_bos_token_id=tokenizer.get_lang_id(\u201Cfr\u201D))
print(tokenizer.batch_decode(gen_tokens, skip_special_tokens=True))`),this.h()},l(t){const h=sd('[data-svelte="svelte-1phssyn"]',document.head);m=s(h,"META",{name:!0,content:!0}),h.forEach(o),C=l(t),v=s(t,"H1",{class:!0});var it=a(v);T=s(it,"A",{id:!0,class:!0,href:!0});var So=a(T);F=s(So,"SPAN",{});var br=a(F);f(z.$$.fragment,br),br.forEach(o),So.forEach(o),$=l(it),N=s(it,"SPAN",{});var yr=a(N);$n=i(yr,"M2M100"),yr.forEach(o),it.forEach(o),Ao=l(t),W=s(t,"H2",{class:!0});var nn=a(W);te=s(nn,"A",{id:!0,class:!0,href:!0});var wr=a(te);xt=s(wr,"SPAN",{});var Tr=a(xt);f(ve.$$.fragment,Tr),Tr.forEach(o),wr.forEach(o),En=l(nn),Ct=s(nn,"SPAN",{});var zr=a(Ct);xn=i(zr,"Overview"),zr.forEach(o),nn.forEach(o),Oo=l(t),oe=s(t,"P",{});var sn=a(oe);Cn=i(sn,"The M2M100 model was proposed in "),be=s(sn,"A",{href:!0,rel:!0});var qr=a(be);Pn=i(qr,"Beyond English-Centric Multilingual Machine Translation"),qr.forEach(o),jn=i(sn,` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),sn.forEach(o),Do=l(t),dt=s(t,"P",{});var $r=a(dt);Fn=i($r,"The abstract from the paper is the following:"),$r.forEach(o),No=l(t),lt=s(t,"P",{});var Er=a(lt);Pt=s(Er,"EM",{});var xr=a(Pt);Ln=i(xr,`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),xr.forEach(o),Er.forEach(o),Io=l(t),ne=s(t,"P",{});var an=a(ne);Sn=i(an,"This model was contributed by "),ye=s(an,"A",{href:!0,rel:!0});var Cr=a(ye);An=i(Cr,"valhalla"),Cr.forEach(o),On=i(an,"."),an.forEach(o),Go=l(t),H=s(t,"H3",{class:!0});var rn=a(H);se=s(rn,"A",{id:!0,class:!0,href:!0});var Pr=a(se);jt=s(Pr,"SPAN",{});var jr=a(jt);f(we.$$.fragment,jr),jr.forEach(o),Pr.forEach(o),Dn=l(rn),Ft=s(rn,"SPAN",{});var Fr=a(Ft);Nn=i(Fr,"Training and Generation"),Fr.forEach(o),rn.forEach(o),Bo=l(t),A=s(t,"P",{});var ue=a(A);In=i(ue,`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),Lt=s(ue,"CODE",{});var Lr=a(Lt);Gn=i(Lr,"[lang_code] X [eos]"),Lr.forEach(o),Bn=i(ue,", where "),St=s(ue,"CODE",{});var Sr=a(St);Un=i(Sr,"lang_code"),Sr.forEach(o),Wn=i(ue,` is source language
id for source text and target language id for target text, with `),At=s(ue,"CODE",{});var Ar=a(At);Hn=i(Ar,"X"),Ar.forEach(o),Vn=i(ue," being the source or target text."),ue.forEach(o),Uo=l(t),P=s(t,"P",{});var G=a(P);Kn=i(G,"The "),ct=s(G,"A",{href:!0});var Or=a(ct);Qn=i(Or,"M2M100Tokenizer"),Or.forEach(o),Xn=i(G," depends on "),Ot=s(G,"CODE",{});var Dr=a(Ot);Rn=i(Dr,"sentencepiece"),Dr.forEach(o),Jn=i(G,` so be sure to install it before running the
examples. To install `),Dt=s(G,"CODE",{});var Nr=a(Dt);Zn=i(Nr,"sentencepiece"),Nr.forEach(o),Yn=i(G," run "),Nt=s(G,"CODE",{});var Ir=a(Nt);es=i(Ir,"pip install sentencepiece"),Ir.forEach(o),ts=i(G,"."),G.forEach(o),Wo=l(t),ht=s(t,"UL",{});var Gr=a(ht);It=s(Gr,"LI",{});var Br=a(It);os=i(Br,"Supervised Training"),Br.forEach(o),Gr.forEach(o),Ho=l(t),f(Te.$$.fragment,t),Vo=l(t),pt=s(t,"UL",{});var Ur=a(pt);ze=s(Ur,"LI",{});var dn=a(ze);Gt=s(dn,"P",{});var Wr=a(Gt);ns=i(Wr,"Generation"),Wr.forEach(o),ss=l(dn),E=s(dn,"P",{});var D=a(E);as=i(D,"M2M100 uses the "),Bt=s(D,"CODE",{});var Hr=a(Bt);rs=i(Hr,"eos_token_id"),Hr.forEach(o),is=i(D," as the "),Ut=s(D,"CODE",{});var Vr=a(Ut);ds=i(Vr,"decoder_start_token_id"),Vr.forEach(o),ls=i(D,` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Wt=s(D,"EM",{});var Kr=a(Wt);cs=i(Kr,"forced_bos_token_id"),Kr.forEach(o),hs=i(D," parameter to the "),Ht=s(D,"EM",{});var Qr=a(Ht);ps=i(Qr,"generate"),Qr.forEach(o),ms=i(D,` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Vt=s(D,"EM",{});var Xr=a(Vt);us=i(Xr,"facebook/m2m100_418M"),Xr.forEach(o),fs=i(D," checkpoint."),D.forEach(o),dn.forEach(o),Ur.forEach(o),Ko=l(t),f(qe.$$.fragment,t),Qo=l(t),V=s(t,"H2",{class:!0});var ln=a(V);ae=s(ln,"A",{id:!0,class:!0,href:!0});var Rr=a(ae);Kt=s(Rr,"SPAN",{});var Jr=a(Kt);f($e.$$.fragment,Jr),Jr.forEach(o),Rr.forEach(o),_s=l(ln),Qt=s(ln,"SPAN",{});var Zr=a(Qt);gs=i(Zr,"M2M100Config"),Zr.forEach(o),ln.forEach(o),Xo=l(t),x=s(t,"DIV",{class:!0});var B=a(x);f(Ee.$$.fragment,B),ks=l(B),K=s(B,"P",{});var wt=a(K);Ms=i(wt,"This is the configuration class to store the configuration of a "),mt=s(wt,"A",{href:!0});var Yr=a(mt);vs=i(Yr,"M2M100Model"),Yr.forEach(o),bs=i(wt,`. It is used to
instantiate an M2M100 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the M2M100 `),xe=s(wt,"A",{href:!0,rel:!0});var ei=a(xe);ys=i(ei,"m2m100_418M"),ei.forEach(o),ws=i(wt," architecture."),wt.forEach(o),Ts=l(B),Q=s(B,"P",{});var Tt=a(Q);zs=i(Tt,"Configuration objects inherit from "),ut=s(Tt,"A",{href:!0});var ti=a(ut);qs=i(ti,"PretrainedConfig"),ti.forEach(o),$s=i(Tt,` and can be used to control the model
outputs. Read the documentation from `),ft=s(Tt,"A",{href:!0});var oi=a(ft);Es=i(oi,"PretrainedConfig"),oi.forEach(o),xs=i(Tt," for more information."),Tt.forEach(o),Cs=l(B),Xt=s(B,"P",{});var ni=a(Xt);Ps=i(ni,"Example:"),ni.forEach(o),js=l(B),f(Ce.$$.fragment,B),B.forEach(o),Ro=l(t),X=s(t,"H2",{class:!0});var cn=a(X);re=s(cn,"A",{id:!0,class:!0,href:!0});var si=a(re);Rt=s(si,"SPAN",{});var ai=a(Rt);f(Pe.$$.fragment,ai),ai.forEach(o),si.forEach(o),Fs=l(cn),Jt=s(cn,"SPAN",{});var ri=a(Jt);Ls=i(ri,"M2M100Tokenizer"),ri.forEach(o),cn.forEach(o),Jo=l(t),y=s(t,"DIV",{class:!0});var q=a(y);f(je.$$.fragment,q),Ss=l(q),Fe=s(q,"P",{});var hn=a(Fe);As=i(hn,"Construct an M2M100 tokenizer. Based on "),Le=s(hn,"A",{href:!0,rel:!0});var ii=a(Le);Os=i(ii,"SentencePiece"),ii.forEach(o),Ds=i(hn,"."),hn.forEach(o),Ns=l(q),Se=s(q,"P",{});var pn=a(Se);Is=i(pn,"This tokenizer inherits from "),_t=s(pn,"A",{href:!0});var di=a(_t);Gs=i(di,"PreTrainedTokenizer"),di.forEach(o),Bs=i(pn,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),pn.forEach(o),Us=l(q),Zt=s(q,"P",{});var li=a(Zt);Ws=i(li,"Examples:"),li.forEach(o),Hs=l(q),f(Ae.$$.fragment,q),Vs=l(q),O=s(q,"DIV",{class:!0});var fe=a(O);f(Oe.$$.fragment,fe),Ks=l(fe),De=s(fe,"P",{});var mn=a(De);Qs=i(mn,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Yt=s(mn,"CODE",{});var ci=a(Yt);Xs=i(ci,"X"),ci.forEach(o),Rs=i(mn," represents the sequence:"),mn.forEach(o),Js=l(fe),Ne=s(fe,"UL",{});var un=a(Ne);Ie=s(un,"LI",{});var fn=a(Ie);eo=s(fn,"CODE",{});var hi=a(eo);Zs=i(hi,"input_ids"),hi.forEach(o),Ys=i(fn," (for encoder) "),to=s(fn,"CODE",{});var pi=a(to);ea=i(pi,"X [eos, src_lang_code]"),pi.forEach(o),fn.forEach(o),ta=l(un),Ge=s(un,"LI",{});var _n=a(Ge);oo=s(_n,"CODE",{});var mi=a(oo);oa=i(mi,"decoder_input_ids"),mi.forEach(o),na=i(_n,": (for decoder) "),no=s(_n,"CODE",{});var ui=a(no);sa=i(ui,"X [eos, tgt_lang_code]"),ui.forEach(o),_n.forEach(o),un.forEach(o),aa=l(fe),so=s(fe,"P",{});var fi=a(so);ra=i(fi,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),fi.forEach(o),fe.forEach(o),ia=l(q),ie=s(q,"DIV",{class:!0});var gn=a(ie);f(Be.$$.fragment,gn),da=l(gn),Ue=s(gn,"P",{});var kn=a(Ue);la=i(kn,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ao=s(kn,"CODE",{});var _i=a(ao);ca=i(_i,"prepare_for_model"),_i.forEach(o),ha=i(kn," method."),kn.forEach(o),gn.forEach(o),pa=l(q),I=s(q,"DIV",{class:!0});var zt=a(I);f(We.$$.fragment,zt),ma=l(zt),gt=s(zt,"P",{});var vr=a(gt);ua=i(vr,"Create the token type IDs corresponding to the sequences passed. "),kt=s(vr,"A",{href:!0});var gi=a(kt);fa=i(gi,"What are token type IDs?"),gi.forEach(o),vr.forEach(o),_a=l(zt),ro=s(zt,"P",{});var ki=a(ro);ga=i(ki,"Should be overridden in a subclass if the model has a special way of building those."),ki.forEach(o),zt.forEach(o),ka=l(q),io=s(q,"DIV",{class:!0}),a(io).forEach(o),q.forEach(o),Zo=l(t),R=s(t,"H2",{class:!0});var Mn=a(R);de=s(Mn,"A",{id:!0,class:!0,href:!0});var Mi=a(de);lo=s(Mi,"SPAN",{});var vi=a(lo);f(He.$$.fragment,vi),vi.forEach(o),Mi.forEach(o),Ma=l(Mn),co=s(Mn,"SPAN",{});var bi=a(co);va=i(bi,"M2M100Model"),bi.forEach(o),Mn.forEach(o),Yo=l(t),L=s(t,"DIV",{class:!0});var _e=a(L);f(Ve.$$.fragment,_e),ba=l(_e),Ke=s(_e,"P",{});var vn=a(Ke);ya=i(vn,`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mt=s(vn,"A",{href:!0});var yi=a(Mt);wa=i(yi,"PreTrainedModel"),yi.forEach(o),Ta=i(vn,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),vn.forEach(o),za=l(_e),Qe=s(_e,"P",{});var bn=a(Qe);qa=i(bn,"This model is also a PyTorch "),Xe=s(bn,"A",{href:!0,rel:!0});var wi=a(Xe);$a=i(wi,"torch.nn.Module"),wi.forEach(o),Ea=i(bn,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),bn.forEach(o),xa=l(_e),j=s(_e,"DIV",{class:!0});var U=a(j);f(Re.$$.fragment,U),Ca=l(U),J=s(U,"P",{});var qt=a(J);Pa=i(qt,"The "),vt=s(qt,"A",{href:!0});var Ti=a(vt);ja=i(Ti,"M2M100Model"),Ti.forEach(o),Fa=i(qt," forward method, overrides the "),ho=s(qt,"CODE",{});var zi=a(ho);La=i(zi,"__call__"),zi.forEach(o),Sa=i(qt," special method."),qt.forEach(o),Aa=l(U),f(le.$$.fragment,U),Oa=l(U),po=s(U,"P",{});var qi=a(po);Da=i(qi,"Example:"),qi.forEach(o),Na=l(U),f(Je.$$.fragment,U),U.forEach(o),_e.forEach(o),en=l(t),Z=s(t,"H2",{class:!0});var yn=a(Z);ce=s(yn,"A",{id:!0,class:!0,href:!0});var $i=a(ce);mo=s($i,"SPAN",{});var Ei=a(mo);f(Ze.$$.fragment,Ei),Ei.forEach(o),$i.forEach(o),Ia=l(yn),uo=s(yn,"SPAN",{});var xi=a(uo);Ga=i(xi,"M2M100ForConditionalGeneration"),xi.forEach(o),yn.forEach(o),tn=l(t),S=s(t,"DIV",{class:!0});var ge=a(S);f(Ye.$$.fragment,ge),Ba=l(ge),et=s(ge,"P",{});var wn=a(et);Ua=i(wn,`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),bt=s(wn,"A",{href:!0});var Ci=a(bt);Wa=i(Ci,"PreTrainedModel"),Ci.forEach(o),Ha=i(wn,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),wn.forEach(o),Va=l(ge),tt=s(ge,"P",{});var Tn=a(tt);Ka=i(Tn,"This model is also a PyTorch "),ot=s(Tn,"A",{href:!0,rel:!0});var Pi=a(ot);Qa=i(Pi,"torch.nn.Module"),Pi.forEach(o),Xa=i(Tn,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Tn.forEach(o),Ra=l(ge),b=s(ge,"DIV",{class:!0});var w=a(b);f(nt.$$.fragment,w),Ja=l(w),Y=s(w,"P",{});var $t=a(Y);Za=i($t,"The "),yt=s($t,"A",{href:!0});var ji=a(yt);Ya=i(ji,"M2M100ForConditionalGeneration"),ji.forEach(o),er=i($t," forward method, overrides the "),fo=s($t,"CODE",{});var Fi=a(fo);tr=i(Fi,"__call__"),Fi.forEach(o),or=i($t," special method."),$t.forEach(o),nr=l(w),f(he.$$.fragment,w),sr=l(w),_o=s(w,"P",{});var Li=a(_o);ar=i(Li,"Example:"),Li.forEach(o),rr=l(w),f(st.$$.fragment,w),ir=l(w),go=s(w,"P",{});var Si=a(go);dr=i(Si,"Translation example::"),Si.forEach(o),lr=l(w),ko=s(w,"BLOCKQUOTE",{});var Ai=a(ko);Mo=s(Ai,"BLOCKQUOTE",{});var Oi=a(Mo);vo=s(Oi,"BLOCKQUOTE",{});var Di=a(vo);bo=s(Di,"P",{});var Ni=a(bo);cr=i(Ni,"from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration"),Ni.forEach(o),Di.forEach(o),Oi.forEach(o),Ai.forEach(o),hr=l(w),yo=s(w,"BLOCKQUOTE",{});var Ii=a(yo);wo=s(Ii,"BLOCKQUOTE",{});var Gi=a(wo);To=s(Gi,"BLOCKQUOTE",{});var Bi=a(To);zo=s(Bi,"P",{});var Ui=a(zo);pr=i(Ui,`model = M2M100ForConditionalGeneration.from_pretrained(\u2018facebook/m2m100_418M\u2019)
tokenizer = M2M100Tokenizer.from_pretrained(\u2018facebook/m2m100_418M\u2019)`),Ui.forEach(o),Bi.forEach(o),Gi.forEach(o),Ii.forEach(o),mr=l(w),qo=s(w,"BLOCKQUOTE",{});var Wi=a(qo);$o=s(Wi,"BLOCKQUOTE",{});var Hi=a($o);Eo=s(Hi,"BLOCKQUOTE",{});var Vi=a(Eo);xo=s(Vi,"P",{});var Ki=a(xo);ur=i(Ki,`text_to_translate = \u201CLife is like a box of chocolates\u201D
model_inputs = tokenizer(text_to_translate, return_tensors=\u2018pt\u2019)`),Ki.forEach(o),Vi.forEach(o),Hi.forEach(o),Wi.forEach(o),fr=l(w),Co=s(w,"BLOCKQUOTE",{});var Qi=a(Co);Po=s(Qi,"BLOCKQUOTE",{});var Xi=a(Po);at=s(Xi,"BLOCKQUOTE",{});var zn=a(at);pe=s(zn,"H1",{class:!0});var qn=a(pe);me=s(qn,"A",{id:!0,class:!0,href:!0});var Ri=a(me);jo=s(Ri,"SPAN",{});var Ji=a(jo);f(rt.$$.fragment,Ji),Ji.forEach(o),Ri.forEach(o),_r=l(qn),Fo=s(qn,"SPAN",{});var Zi=a(Fo);gr=i(Zi,"translate to French"),Zi.forEach(o),qn.forEach(o),kr=l(zn),Lo=s(zn,"P",{});var Yi=a(Lo);Mr=i(Yi,`gen_tokens = model.generate( **model_inputs, forced_bos_token_id=tokenizer.get_lang_id(\u201Cfr\u201D))
print(tokenizer.batch_decode(gen_tokens, skip_special_tokens=True))`),Yi.forEach(o),zn.forEach(o),Xi.forEach(o),Qi.forEach(o),w.forEach(o),ge.forEach(o),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(dd)),c(T,"id","m2m100"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#m2m100"),c(v,"class","relative group"),c(te,"id","overview"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#overview"),c(W,"class","relative group"),c(be,"href","https://arxiv.org/abs/2010.11125"),c(be,"rel","nofollow"),c(ye,"href","https://huggingface.co/valhalla"),c(ye,"rel","nofollow"),c(se,"id","training-and-generation"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#training-and-generation"),c(H,"class","relative group"),c(ct,"href","/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100Tokenizer"),c(ae,"id","transformers.M2M100Config"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#transformers.M2M100Config"),c(V,"class","relative group"),c(mt,"href","/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100Model"),c(xe,"href","https://huggingface.co/facebook/m2m100_418M"),c(xe,"rel","nofollow"),c(ut,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(ft,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(x,"class","docstring"),c(re,"id","transformers.M2M100Tokenizer"),c(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(re,"href","#transformers.M2M100Tokenizer"),c(X,"class","relative group"),c(Le,"href","https://github.com/google/sentencepiece"),c(Le,"rel","nofollow"),c(_t,"href","/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(O,"class","docstring"),c(ie,"class","docstring"),c(kt,"href","../glossary#token-type-ids"),c(I,"class","docstring"),c(io,"class","docstring"),c(y,"class","docstring"),c(de,"id","transformers.M2M100Model"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.M2M100Model"),c(R,"class","relative group"),c(Mt,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Xe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xe,"rel","nofollow"),c(vt,"href","/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100Model"),c(j,"class","docstring"),c(L,"class","docstring"),c(ce,"id","transformers.M2M100ForConditionalGeneration"),c(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ce,"href","#transformers.M2M100ForConditionalGeneration"),c(Z,"class","relative group"),c(bt,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(ot,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ot,"rel","nofollow"),c(yt,"href","/docs/transformers/v4.15.0/en/model_doc/m2m_100#transformers.M2M100ForConditionalGeneration"),c(me,"id","translate-to-french"),c(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(me,"href","#translate-to-french"),c(pe,"class","relative group"),c(b,"class","docstring"),c(S,"class","docstring")},m(t,h){e(document.head,m),p(t,C,h),p(t,v,h),e(v,T),e(T,F),_(z,F,null),e(v,$),e(v,N),e(N,$n),p(t,Ao,h),p(t,W,h),e(W,te),e(te,xt),_(ve,xt,null),e(W,En),e(W,Ct),e(Ct,xn),p(t,Oo,h),p(t,oe,h),e(oe,Cn),e(oe,be),e(be,Pn),e(oe,jn),p(t,Do,h),p(t,dt,h),e(dt,Fn),p(t,No,h),p(t,lt,h),e(lt,Pt),e(Pt,Ln),p(t,Io,h),p(t,ne,h),e(ne,Sn),e(ne,ye),e(ye,An),e(ne,On),p(t,Go,h),p(t,H,h),e(H,se),e(se,jt),_(we,jt,null),e(H,Dn),e(H,Ft),e(Ft,Nn),p(t,Bo,h),p(t,A,h),e(A,In),e(A,Lt),e(Lt,Gn),e(A,Bn),e(A,St),e(St,Un),e(A,Wn),e(A,At),e(At,Hn),e(A,Vn),p(t,Uo,h),p(t,P,h),e(P,Kn),e(P,ct),e(ct,Qn),e(P,Xn),e(P,Ot),e(Ot,Rn),e(P,Jn),e(P,Dt),e(Dt,Zn),e(P,Yn),e(P,Nt),e(Nt,es),e(P,ts),p(t,Wo,h),p(t,ht,h),e(ht,It),e(It,os),p(t,Ho,h),_(Te,t,h),p(t,Vo,h),p(t,pt,h),e(pt,ze),e(ze,Gt),e(Gt,ns),e(ze,ss),e(ze,E),e(E,as),e(E,Bt),e(Bt,rs),e(E,is),e(E,Ut),e(Ut,ds),e(E,ls),e(E,Wt),e(Wt,cs),e(E,hs),e(E,Ht),e(Ht,ps),e(E,ms),e(E,Vt),e(Vt,us),e(E,fs),p(t,Ko,h),_(qe,t,h),p(t,Qo,h),p(t,V,h),e(V,ae),e(ae,Kt),_($e,Kt,null),e(V,_s),e(V,Qt),e(Qt,gs),p(t,Xo,h),p(t,x,h),_(Ee,x,null),e(x,ks),e(x,K),e(K,Ms),e(K,mt),e(mt,vs),e(K,bs),e(K,xe),e(xe,ys),e(K,ws),e(x,Ts),e(x,Q),e(Q,zs),e(Q,ut),e(ut,qs),e(Q,$s),e(Q,ft),e(ft,Es),e(Q,xs),e(x,Cs),e(x,Xt),e(Xt,Ps),e(x,js),_(Ce,x,null),p(t,Ro,h),p(t,X,h),e(X,re),e(re,Rt),_(Pe,Rt,null),e(X,Fs),e(X,Jt),e(Jt,Ls),p(t,Jo,h),p(t,y,h),_(je,y,null),e(y,Ss),e(y,Fe),e(Fe,As),e(Fe,Le),e(Le,Os),e(Fe,Ds),e(y,Ns),e(y,Se),e(Se,Is),e(Se,_t),e(_t,Gs),e(Se,Bs),e(y,Us),e(y,Zt),e(Zt,Ws),e(y,Hs),_(Ae,y,null),e(y,Vs),e(y,O),_(Oe,O,null),e(O,Ks),e(O,De),e(De,Qs),e(De,Yt),e(Yt,Xs),e(De,Rs),e(O,Js),e(O,Ne),e(Ne,Ie),e(Ie,eo),e(eo,Zs),e(Ie,Ys),e(Ie,to),e(to,ea),e(Ne,ta),e(Ne,Ge),e(Ge,oo),e(oo,oa),e(Ge,na),e(Ge,no),e(no,sa),e(O,aa),e(O,so),e(so,ra),e(y,ia),e(y,ie),_(Be,ie,null),e(ie,da),e(ie,Ue),e(Ue,la),e(Ue,ao),e(ao,ca),e(Ue,ha),e(y,pa),e(y,I),_(We,I,null),e(I,ma),e(I,gt),e(gt,ua),e(gt,kt),e(kt,fa),e(I,_a),e(I,ro),e(ro,ga),e(y,ka),e(y,io),p(t,Zo,h),p(t,R,h),e(R,de),e(de,lo),_(He,lo,null),e(R,Ma),e(R,co),e(co,va),p(t,Yo,h),p(t,L,h),_(Ve,L,null),e(L,ba),e(L,Ke),e(Ke,ya),e(Ke,Mt),e(Mt,wa),e(Ke,Ta),e(L,za),e(L,Qe),e(Qe,qa),e(Qe,Xe),e(Xe,$a),e(Qe,Ea),e(L,xa),e(L,j),_(Re,j,null),e(j,Ca),e(j,J),e(J,Pa),e(J,vt),e(vt,ja),e(J,Fa),e(J,ho),e(ho,La),e(J,Sa),e(j,Aa),_(le,j,null),e(j,Oa),e(j,po),e(po,Da),e(j,Na),_(Je,j,null),p(t,en,h),p(t,Z,h),e(Z,ce),e(ce,mo),_(Ze,mo,null),e(Z,Ia),e(Z,uo),e(uo,Ga),p(t,tn,h),p(t,S,h),_(Ye,S,null),e(S,Ba),e(S,et),e(et,Ua),e(et,bt),e(bt,Wa),e(et,Ha),e(S,Va),e(S,tt),e(tt,Ka),e(tt,ot),e(ot,Qa),e(tt,Xa),e(S,Ra),e(S,b),_(nt,b,null),e(b,Ja),e(b,Y),e(Y,Za),e(Y,yt),e(yt,Ya),e(Y,er),e(Y,fo),e(fo,tr),e(Y,or),e(b,nr),_(he,b,null),e(b,sr),e(b,_o),e(_o,ar),e(b,rr),_(st,b,null),e(b,ir),e(b,go),e(go,dr),e(b,lr),e(b,ko),e(ko,Mo),e(Mo,vo),e(vo,bo),e(bo,cr),e(b,hr),e(b,yo),e(yo,wo),e(wo,To),e(To,zo),e(zo,pr),e(b,mr),e(b,qo),e(qo,$o),e($o,Eo),e(Eo,xo),e(xo,ur),e(b,fr),e(b,Co),e(Co,Po),e(Po,at),e(at,pe),e(pe,me),e(me,jo),_(rt,jo,null),e(pe,_r),e(pe,Fo),e(Fo,gr),e(at,kr),e(at,Lo),e(Lo,Mr),on=!0},p(t,[h]){const it={};h&2&&(it.$$scope={dirty:h,ctx:t}),le.$set(it);const So={};h&2&&(So.$$scope={dirty:h,ctx:t}),he.$set(So)},i(t){on||(g(z.$$.fragment,t),g(ve.$$.fragment,t),g(we.$$.fragment,t),g(Te.$$.fragment,t),g(qe.$$.fragment,t),g($e.$$.fragment,t),g(Ee.$$.fragment,t),g(Ce.$$.fragment,t),g(Pe.$$.fragment,t),g(je.$$.fragment,t),g(Ae.$$.fragment,t),g(Oe.$$.fragment,t),g(Be.$$.fragment,t),g(We.$$.fragment,t),g(He.$$.fragment,t),g(Ve.$$.fragment,t),g(Re.$$.fragment,t),g(le.$$.fragment,t),g(Je.$$.fragment,t),g(Ze.$$.fragment,t),g(Ye.$$.fragment,t),g(nt.$$.fragment,t),g(he.$$.fragment,t),g(st.$$.fragment,t),g(rt.$$.fragment,t),on=!0)},o(t){k(z.$$.fragment,t),k(ve.$$.fragment,t),k(we.$$.fragment,t),k(Te.$$.fragment,t),k(qe.$$.fragment,t),k($e.$$.fragment,t),k(Ee.$$.fragment,t),k(Ce.$$.fragment,t),k(Pe.$$.fragment,t),k(je.$$.fragment,t),k(Ae.$$.fragment,t),k(Oe.$$.fragment,t),k(Be.$$.fragment,t),k(We.$$.fragment,t),k(He.$$.fragment,t),k(Ve.$$.fragment,t),k(Re.$$.fragment,t),k(le.$$.fragment,t),k(Je.$$.fragment,t),k(Ze.$$.fragment,t),k(Ye.$$.fragment,t),k(nt.$$.fragment,t),k(he.$$.fragment,t),k(st.$$.fragment,t),k(rt.$$.fragment,t),on=!1},d(t){o(m),t&&o(C),t&&o(v),M(z),t&&o(Ao),t&&o(W),M(ve),t&&o(Oo),t&&o(oe),t&&o(Do),t&&o(dt),t&&o(No),t&&o(lt),t&&o(Io),t&&o(ne),t&&o(Go),t&&o(H),M(we),t&&o(Bo),t&&o(A),t&&o(Uo),t&&o(P),t&&o(Wo),t&&o(ht),t&&o(Ho),M(Te,t),t&&o(Vo),t&&o(pt),t&&o(Ko),M(qe,t),t&&o(Qo),t&&o(V),M($e),t&&o(Xo),t&&o(x),M(Ee),M(Ce),t&&o(Ro),t&&o(X),M(Pe),t&&o(Jo),t&&o(y),M(je),M(Ae),M(Oe),M(Be),M(We),t&&o(Zo),t&&o(R),M(He),t&&o(Yo),t&&o(L),M(Ve),M(Re),M(le),M(Je),t&&o(en),t&&o(Z),M(Ze),t&&o(tn),t&&o(S),M(Ye),M(nt),M(he),M(st),M(rt)}}}const dd={local:"m2m100",sections:[{local:"overview",sections:[{local:"training-and-generation",title:"Training and Generation"}],title:"Overview"},{local:"transformers.M2M100Config",title:"M2M100Config"},{local:"transformers.M2M100Tokenizer",title:"M2M100Tokenizer"},{local:"transformers.M2M100Model",title:"M2M100Model"},{local:"transformers.M2M100ForConditionalGeneration",title:"M2M100ForConditionalGeneration"}],title:"M2M100"};function ld(Me,m,C){let{fw:v}=m;return Me.$$set=T=>{"fw"in T&&C(0,v=T.fw)},[v]}class _d extends td{constructor(m){super();od(this,m,ld,id,nd,{fw:0})}}export{_d as default,dd as metadata};
