import{S as Yr,i as ei,s as ti,e as n,k as d,w as f,t as r,L as oi,c as s,d as o,m as l,a,x as _,h as i,b as c,J as e,g as p,y as g,q as k,o as M,B as v}from"../../../chunks/vendor-b1433968.js";import{T as Qr}from"../../../chunks/Tip-c3840994.js";import{D as Y}from"../../../chunks/Docstring-ff504c58.js";import{C as Tt}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as ot}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function ni(fe){let m,$,u,y,P;return{c(){m=n("p"),$=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=n("code"),y=r("Module"),P=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(w){m=s(w,"P",{});var q=a(m);$=i(q,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=s(q,"CODE",{});var N=a(u);y=i(N,"Module"),N.forEach(o),P=i(q,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),q.forEach(o)},m(w,q){p(w,m,q),e(m,$),e(m,u),e(u,y),e(m,P)},d(w){w&&o(m)}}}function si(fe){let m,$,u,y,P;return{c(){m=n("p"),$=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=n("code"),y=r("Module"),P=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(w){m=s(w,"P",{});var q=a(m);$=i(q,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),u=s(q,"CODE",{});var N=a(u);y=i(N,"Module"),N.forEach(o),P=i(q,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),q.forEach(o)},m(w,q){p(w,m,q),e(m,$),e(m,u),e(u,y),e(m,P)},d(w){w&&o(m)}}}function ai(fe){let m,$,u,y,P,w,q,N,on,uo,W,ee,zt,_e,nn,qt,sn,fo,te,an,ge,rn,dn,_o,nt,ln,go,st,xt,cn,ko,oe,hn,ke,pn,mn,Mo,H,ne,$t,Me,un,Et,fn,vo,A,_n,Ct,gn,kn,jt,Mn,vn,Pt,bn,yn,bo,E,wn,at,Tn,zn,Ft,qn,xn,St,$n,En,At,Cn,jn,yo,rt,Dt,Pn,wo,ve,To,it,be,Lt,Fn,Sn,x,An,Nt,Dn,Ln,It,Nn,In,Gt,Gn,On,Ot,Bn,Wn,Bt,Hn,Un,zo,ye,qo,U,se,Wt,we,Vn,Ht,Xn,xo,I,Te,Rn,V,Jn,dt,Kn,Zn,ze,Qn,Yn,es,X,ts,lt,os,ns,ct,ss,as,$o,R,ae,Ut,qe,rs,Vt,is,Eo,b,xe,ds,$e,ls,Ee,cs,hs,ps,Ce,ms,ht,us,fs,_s,Xt,gs,ks,je,Ms,D,Pe,vs,Fe,bs,Rt,ys,ws,Ts,Se,Ae,Jt,zs,qs,Kt,xs,$s,De,Zt,Es,Cs,Qt,js,Ps,Yt,Fs,Ss,re,Le,As,Ne,Ds,eo,Ls,Ns,Is,G,Ie,Gs,pt,Os,mt,Bs,Ws,to,Hs,Us,oo,Co,J,ie,no,Ge,Vs,so,Xs,jo,F,Oe,Rs,Be,Js,ut,Ks,Zs,Qs,We,Ys,He,ea,ta,oa,C,Ue,na,K,sa,ft,aa,ra,ao,ia,da,la,de,ca,ro,ha,pa,Ve,Po,Z,le,io,Xe,ma,lo,ua,Fo,S,Re,fa,Je,_a,_t,ga,ka,Ma,Ke,va,Ze,ba,ya,wa,T,Qe,Ta,Q,za,gt,qa,xa,co,$a,Ea,Ca,ce,ja,ho,Pa,Fa,Ye,Sa,po,Aa,Da,et,So;return w=new ot({}),_e=new ot({}),Me=new ot({}),ve=new Tt({props:{code:`from transformers import M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = M2M100ForConditionalGeneration.from_pretrained('facebook/m2m100_418M')
tokenizer = M2M100Tokenizer.from_pretrained('facebook/m2m100_418M', src_lang="en", tgt_lang="fr")

src_text = "Life is like a box of chocolates."
tgt_text = "La vie est comme une bo\xEEte de chocolat."

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

loss = model(**model_inputs, labels=labels) # forward pass,`,highlighted:`from transformers import M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">M2M100ForConditionalGeneration</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">facebook</span><span class="hljs-operator">/</span><span class="hljs-params">m2m100_418M</span>&#x27;)</span>
tokenizer = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">M2M100Tokenizer</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">facebook</span><span class="hljs-operator">/</span><span class="hljs-params">m2m100_418M</span>&#x27;, <span class="hljs-params">src_lang</span>=<span class="hljs-string">&quot;en&quot;</span>, <span class="hljs-params">tgt_lang</span>=<span class="hljs-string">&quot;fr&quot;</span>)</span>

src_text = <span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>
tgt_text = <span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.<span class="hljs-keyword">as</span><span class="hljs-constructor">_target_tokenizer()</span>:
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

loss = model(**model_inputs, labels=labels) # forward pass`}}),ye=new Tt({props:{code:`from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

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
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100ForConditionalGeneration, M2M100Tokenizer</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">hi_text = <span class="hljs-string">&quot;\u091C\u0940\u0935\u0928 \u090F\u0915 \u091A\u0949\u0915\u0932\u0947\u091F \u092C\u0949\u0915\u094D\u0938 \u0915\u0940 \u0924\u0930\u0939 \u0939\u0948\u0964&quot;</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">chinese_text = <span class="hljs-string">&quot;\u751F\u6D3B\u5C31\u50CF\u4E00\u76D2\u5DE7\u514B\u529B\u3002&quot;</span></span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># translate Hindi to French</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer.src_lang = <span class="hljs-string">&quot;hi&quot;</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">encoded_hi = tokenizer(hi_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)</span>
&quot;La vie est comme une bo\xEEte de chocolat.&quot;

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># translate Chinese to English</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer.src_lang = <span class="hljs-string">&quot;zh&quot;</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">encoded_zh = tokenizer(chinese_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">generated_tokens = model.generate(**encoded_zh, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;en&quot;</span>))</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)</span>
&quot;Life is like a box of chocolate.&quot;`}}),we=new ot({}),Te=new Y({props:{name:"class transformers.M2M100Config",anchor:"transformers.M2M100Config",parameters:[{name:"vocab_size",val:" = 128112"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.05"},{name:"decoder_layerdrop",val:" = 0.05"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/m2m_100/configuration_m2m_100.py#L29",parametersDescription:[{anchor:"transformers.M2M100Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the M2M100 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100Model">M2M100Model</a> or`,name:"vocab_size"},{anchor:"transformers.M2M100Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The standard deviation of the truncated<em>normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder<em>layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.M2M100Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).</p>
<p>Example &#x2014;:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import M2M100Model, M2M100Config</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<h1 class="relative group">
	<a id="initializing-a-m2m100-facebook/m2m100_418m-style-configuration" class="header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" href="#initializing-a-m2m100-facebook/m2m100_418m-style-configuration">
		<span><iconcopylink></iconcopylink></span>
	</a>
	<span>
		Initializing a M2M100 facebook/m2m100_418M style configuration
	</span>
</h1>

<p>configuration = M2M100Config()</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<h1 class="relative group">
	<a id="initializing-a-model-from-the-facebook/m2m100_418m-style-configuration" class="header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" href="#initializing-a-model-from-the-facebook/m2m100_418m-style-configuration">
		<span><iconcopylink></iconcopylink></span>
	</a>
	<span>
		Initializing a model from the facebook/m2m100_418M style configuration
	</span>
</h1>

<p>model = M2M100Model(configuration)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<h1 class="relative group">
	<a id="accessing-the-model-configuration" class="header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" href="#accessing-the-model-configuration">
		<span><iconcopylink></iconcopylink></span>
	</a>
	<span>
		Accessing the model configuration
	</span>
</h1>

<p>configuration = model.config</p>
</blockquote>
</blockquote>
</blockquote>`,name:"use_cache"}]}}),qe=new ot({}),xe=new Y({props:{name:"class transformers.M2M100Tokenizer",anchor:"transformers.M2M100Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"language_codes",val:" = 'm2m100'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"num_madeup_words",val:" = 8"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/m2m_100/tokenization_m2m_100.py#L64",parametersDescription:[{anchor:"transformers.M2M100Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),je=new Tt({props:{code:`from transformers import M2M100Tokenizer
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
&gt;&gt;&gt; # model(**model_inputs, labels=labels) should work</span>`}}),Pe=new Y({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/m2m_100/tokenization_m2m_100.py#L254",parametersDescription:[{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Le=new Y({props:{name:"get_special_tokens_mask",anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/m2m_100/tokenization_m2m_100.py#L224",parametersDescription:[{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ie=new Y({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/tokenization_utils_base.py#L2806",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ge=new ot({}),Oe=new Y({props:{name:"class transformers.M2M100Model",anchor:"transformers.M2M100Model",parameters:[{name:"config",val:": M2M100Config"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/m2m_100/modeling_m2m_100.py#L1108",parametersDescription:[{anchor:"transformers.M2M100Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ue=new Y({props:{name:"forward",anchor:"transformers.M2M100Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/m2m_100/modeling_m2m_100.py#L1135",parametersDescription:[{anchor:"transformers.M2M100Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100Config"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new Qr({props:{$$slots:{default:[ni]},$$scope:{ctx:fe}}}),Ve=new Tt({props:{code:`from transformers import M2M100Tokenizer, M2M100Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Xe=new ot({}),Re=new Y({props:{name:"class transformers.M2M100ForConditionalGeneration",anchor:"transformers.M2M100ForConditionalGeneration",parameters:[{name:"config",val:": M2M100Config"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/m2m_100/modeling_m2m_100.py#L1219",parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qe=new Y({props:{name:"forward",anchor:"transformers.M2M100ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/m2m_100/modeling_m2m_100.py#L1257",parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100Config"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ce=new Qr({props:{$$slots:{default:[si]},$$scope:{ctx:fe}}}),Ye=new Tt({props:{code:`from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),et=new Tt({props:{code:`from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){m=n("meta"),$=d(),u=n("h1"),y=n("a"),P=n("span"),f(w.$$.fragment),q=d(),N=n("span"),on=r("M2M100"),uo=d(),W=n("h2"),ee=n("a"),zt=n("span"),f(_e.$$.fragment),nn=d(),qt=n("span"),sn=r("Overview"),fo=d(),te=n("p"),an=r("The M2M100 model was proposed in "),ge=n("a"),rn=r("Beyond English-Centric Multilingual Machine Translation"),dn=r(` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),_o=d(),nt=n("p"),ln=r("The abstract from the paper is the following:"),go=d(),st=n("p"),xt=n("em"),cn=r(`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),ko=d(),oe=n("p"),hn=r("This model was contributed by "),ke=n("a"),pn=r("valhalla"),mn=r("."),Mo=d(),H=n("h3"),ne=n("a"),$t=n("span"),f(Me.$$.fragment),un=d(),Et=n("span"),fn=r("Training and Generation"),vo=d(),A=n("p"),_n=r(`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),Ct=n("code"),gn=r("[lang_code] X [eos]"),kn=r(", where "),jt=n("code"),Mn=r("lang_code"),vn=r(` is source language
id for source text and target language id for target text, with `),Pt=n("code"),bn=r("X"),yn=r(" being the source or target text."),bo=d(),E=n("p"),wn=r("The "),at=n("a"),Tn=r("M2M100Tokenizer"),zn=r(" depends on "),Ft=n("code"),qn=r("sentencepiece"),xn=r(` so be sure to install it before running the
examples. To install `),St=n("code"),$n=r("sentencepiece"),En=r(" run "),At=n("code"),Cn=r("pip install sentencepiece"),jn=r("."),yo=d(),rt=n("ul"),Dt=n("li"),Pn=r("Supervised Training"),wo=d(),f(ve.$$.fragment),To=d(),it=n("ul"),be=n("li"),Lt=n("p"),Fn=r("Generation"),Sn=d(),x=n("p"),An=r("M2M100 uses the "),Nt=n("code"),Dn=r("eos_token_id"),Ln=r(" as the "),It=n("code"),Nn=r("decoder_start_token_id"),In=r(` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Gt=n("em"),Gn=r("forced_bos_token_id"),On=r(" parameter to the "),Ot=n("em"),Bn=r("generate"),Wn=r(` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Bt=n("em"),Hn=r("facebook/m2m100_418M"),Un=r(" checkpoint."),zo=d(),f(ye.$$.fragment),qo=d(),U=n("h2"),se=n("a"),Wt=n("span"),f(we.$$.fragment),Vn=d(),Ht=n("span"),Xn=r("M2M100Config"),xo=d(),I=n("div"),f(Te.$$.fragment),Rn=d(),V=n("p"),Jn=r("This is the configuration class to store the configuration of a "),dt=n("a"),Kn=r("M2M100Model"),Zn=r(`. It is used to
instantiate an M2M100 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the M2M100 `),ze=n("a"),Qn=r("m2m100_418M"),Yn=r(" architecture."),es=d(),X=n("p"),ts=r("Configuration objects inherit from "),lt=n("a"),os=r("PretrainedConfig"),ns=r(` and can be used to control the model
outputs. Read the documentation from `),ct=n("a"),ss=r("PretrainedConfig"),as=r(" for more information."),$o=d(),R=n("h2"),ae=n("a"),Ut=n("span"),f(qe.$$.fragment),rs=d(),Vt=n("span"),is=r("M2M100Tokenizer"),Eo=d(),b=n("div"),f(xe.$$.fragment),ds=d(),$e=n("p"),ls=r("Construct an M2M100 tokenizer. Based on "),Ee=n("a"),cs=r("SentencePiece"),hs=r("."),ps=d(),Ce=n("p"),ms=r("This tokenizer inherits from "),ht=n("a"),us=r("PreTrainedTokenizer"),fs=r(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),_s=d(),Xt=n("p"),gs=r("Examples:"),ks=d(),f(je.$$.fragment),Ms=d(),D=n("div"),f(Pe.$$.fragment),vs=d(),Fe=n("p"),bs=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Rt=n("code"),ys=r("X"),ws=r(" represents the sequence:"),Ts=d(),Se=n("ul"),Ae=n("li"),Jt=n("code"),zs=r("input_ids"),qs=r(" (for encoder) "),Kt=n("code"),xs=r("X [eos, src_lang_code]"),$s=d(),De=n("li"),Zt=n("code"),Es=r("decoder_input_ids"),Cs=r(": (for decoder) "),Qt=n("code"),js=r("X [eos, tgt_lang_code]"),Ps=d(),Yt=n("p"),Fs=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ss=d(),re=n("div"),f(Le.$$.fragment),As=d(),Ne=n("p"),Ds=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),eo=n("code"),Ls=r("prepare_for_model"),Ns=r(" method."),Is=d(),G=n("div"),f(Ie.$$.fragment),Gs=d(),pt=n("p"),Os=r("Create the token type IDs corresponding to the sequences passed. "),mt=n("a"),Bs=r("What are token type IDs?"),Ws=d(),to=n("p"),Hs=r("Should be overridden in a subclass if the model has a special way of building those."),Us=d(),oo=n("div"),Co=d(),J=n("h2"),ie=n("a"),no=n("span"),f(Ge.$$.fragment),Vs=d(),so=n("span"),Xs=r("M2M100Model"),jo=d(),F=n("div"),f(Oe.$$.fragment),Rs=d(),Be=n("p"),Js=r(`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ut=n("a"),Ks=r("PreTrainedModel"),Zs=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Qs=d(),We=n("p"),Ys=r("This model is also a PyTorch "),He=n("a"),ea=r("torch.nn.Module"),ta=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),oa=d(),C=n("div"),f(Ue.$$.fragment),na=d(),K=n("p"),sa=r("The "),ft=n("a"),aa=r("M2M100Model"),ra=r(" forward method, overrides the "),ao=n("code"),ia=r("__call__"),da=r(" special method."),la=d(),f(de.$$.fragment),ca=d(),ro=n("p"),ha=r("Example:"),pa=d(),f(Ve.$$.fragment),Po=d(),Z=n("h2"),le=n("a"),io=n("span"),f(Xe.$$.fragment),ma=d(),lo=n("span"),ua=r("M2M100ForConditionalGeneration"),Fo=d(),S=n("div"),f(Re.$$.fragment),fa=d(),Je=n("p"),_a=r(`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),_t=n("a"),ga=r("PreTrainedModel"),ka=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Ma=d(),Ke=n("p"),va=r("This model is also a PyTorch "),Ze=n("a"),ba=r("torch.nn.Module"),ya=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),wa=d(),T=n("div"),f(Qe.$$.fragment),Ta=d(),Q=n("p"),za=r("The "),gt=n("a"),qa=r("M2M100ForConditionalGeneration"),xa=r(" forward method, overrides the "),co=n("code"),$a=r("__call__"),Ea=r(" special method."),Ca=d(),f(ce.$$.fragment),ja=d(),ho=n("p"),Pa=r("Example:"),Fa=d(),f(Ye.$$.fragment),Sa=d(),po=n("p"),Aa=r("Translation example:"),Da=d(),f(et.$$.fragment),this.h()},l(t){const h=oi('[data-svelte="svelte-1phssyn"]',document.head);m=s(h,"META",{name:!0,content:!0}),h.forEach(o),$=l(t),u=s(t,"H1",{class:!0});var tt=a(u);y=s(tt,"A",{id:!0,class:!0,href:!0});var mo=a(y);P=s(mo,"SPAN",{});var Na=a(P);_(w.$$.fragment,Na),Na.forEach(o),mo.forEach(o),q=l(tt),N=s(tt,"SPAN",{});var Ia=a(N);on=i(Ia,"M2M100"),Ia.forEach(o),tt.forEach(o),uo=l(t),W=s(t,"H2",{class:!0});var Ao=a(W);ee=s(Ao,"A",{id:!0,class:!0,href:!0});var Ga=a(ee);zt=s(Ga,"SPAN",{});var Oa=a(zt);_(_e.$$.fragment,Oa),Oa.forEach(o),Ga.forEach(o),nn=l(Ao),qt=s(Ao,"SPAN",{});var Ba=a(qt);sn=i(Ba,"Overview"),Ba.forEach(o),Ao.forEach(o),fo=l(t),te=s(t,"P",{});var Do=a(te);an=i(Do,"The M2M100 model was proposed in "),ge=s(Do,"A",{href:!0,rel:!0});var Wa=a(ge);rn=i(Wa,"Beyond English-Centric Multilingual Machine Translation"),Wa.forEach(o),dn=i(Do,` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),Do.forEach(o),_o=l(t),nt=s(t,"P",{});var Ha=a(nt);ln=i(Ha,"The abstract from the paper is the following:"),Ha.forEach(o),go=l(t),st=s(t,"P",{});var Ua=a(st);xt=s(Ua,"EM",{});var Va=a(xt);cn=i(Va,`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),Va.forEach(o),Ua.forEach(o),ko=l(t),oe=s(t,"P",{});var Lo=a(oe);hn=i(Lo,"This model was contributed by "),ke=s(Lo,"A",{href:!0,rel:!0});var Xa=a(ke);pn=i(Xa,"valhalla"),Xa.forEach(o),mn=i(Lo,"."),Lo.forEach(o),Mo=l(t),H=s(t,"H3",{class:!0});var No=a(H);ne=s(No,"A",{id:!0,class:!0,href:!0});var Ra=a(ne);$t=s(Ra,"SPAN",{});var Ja=a($t);_(Me.$$.fragment,Ja),Ja.forEach(o),Ra.forEach(o),un=l(No),Et=s(No,"SPAN",{});var Ka=a(Et);fn=i(Ka,"Training and Generation"),Ka.forEach(o),No.forEach(o),vo=l(t),A=s(t,"P",{});var he=a(A);_n=i(he,`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),Ct=s(he,"CODE",{});var Za=a(Ct);gn=i(Za,"[lang_code] X [eos]"),Za.forEach(o),kn=i(he,", where "),jt=s(he,"CODE",{});var Qa=a(jt);Mn=i(Qa,"lang_code"),Qa.forEach(o),vn=i(he,` is source language
id for source text and target language id for target text, with `),Pt=s(he,"CODE",{});var Ya=a(Pt);bn=i(Ya,"X"),Ya.forEach(o),yn=i(he," being the source or target text."),he.forEach(o),bo=l(t),E=s(t,"P",{});var O=a(E);wn=i(O,"The "),at=s(O,"A",{href:!0});var er=a(at);Tn=i(er,"M2M100Tokenizer"),er.forEach(o),zn=i(O," depends on "),Ft=s(O,"CODE",{});var tr=a(Ft);qn=i(tr,"sentencepiece"),tr.forEach(o),xn=i(O,` so be sure to install it before running the
examples. To install `),St=s(O,"CODE",{});var or=a(St);$n=i(or,"sentencepiece"),or.forEach(o),En=i(O," run "),At=s(O,"CODE",{});var nr=a(At);Cn=i(nr,"pip install sentencepiece"),nr.forEach(o),jn=i(O,"."),O.forEach(o),yo=l(t),rt=s(t,"UL",{});var sr=a(rt);Dt=s(sr,"LI",{});var ar=a(Dt);Pn=i(ar,"Supervised Training"),ar.forEach(o),sr.forEach(o),wo=l(t),_(ve.$$.fragment,t),To=l(t),it=s(t,"UL",{});var rr=a(it);be=s(rr,"LI",{});var Io=a(be);Lt=s(Io,"P",{});var ir=a(Lt);Fn=i(ir,"Generation"),ir.forEach(o),Sn=l(Io),x=s(Io,"P",{});var L=a(x);An=i(L,"M2M100 uses the "),Nt=s(L,"CODE",{});var dr=a(Nt);Dn=i(dr,"eos_token_id"),dr.forEach(o),Ln=i(L," as the "),It=s(L,"CODE",{});var lr=a(It);Nn=i(lr,"decoder_start_token_id"),lr.forEach(o),In=i(L,` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Gt=s(L,"EM",{});var cr=a(Gt);Gn=i(cr,"forced_bos_token_id"),cr.forEach(o),On=i(L," parameter to the "),Ot=s(L,"EM",{});var hr=a(Ot);Bn=i(hr,"generate"),hr.forEach(o),Wn=i(L,` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Bt=s(L,"EM",{});var pr=a(Bt);Hn=i(pr,"facebook/m2m100_418M"),pr.forEach(o),Un=i(L," checkpoint."),L.forEach(o),Io.forEach(o),rr.forEach(o),zo=l(t),_(ye.$$.fragment,t),qo=l(t),U=s(t,"H2",{class:!0});var Go=a(U);se=s(Go,"A",{id:!0,class:!0,href:!0});var mr=a(se);Wt=s(mr,"SPAN",{});var ur=a(Wt);_(we.$$.fragment,ur),ur.forEach(o),mr.forEach(o),Vn=l(Go),Ht=s(Go,"SPAN",{});var fr=a(Ht);Xn=i(fr,"M2M100Config"),fr.forEach(o),Go.forEach(o),xo=l(t),I=s(t,"DIV",{class:!0});var kt=a(I);_(Te.$$.fragment,kt),Rn=l(kt),V=s(kt,"P",{});var Mt=a(V);Jn=i(Mt,"This is the configuration class to store the configuration of a "),dt=s(Mt,"A",{href:!0});var _r=a(dt);Kn=i(_r,"M2M100Model"),_r.forEach(o),Zn=i(Mt,`. It is used to
instantiate an M2M100 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the M2M100 `),ze=s(Mt,"A",{href:!0,rel:!0});var gr=a(ze);Qn=i(gr,"m2m100_418M"),gr.forEach(o),Yn=i(Mt," architecture."),Mt.forEach(o),es=l(kt),X=s(kt,"P",{});var vt=a(X);ts=i(vt,"Configuration objects inherit from "),lt=s(vt,"A",{href:!0});var kr=a(lt);os=i(kr,"PretrainedConfig"),kr.forEach(o),ns=i(vt,` and can be used to control the model
outputs. Read the documentation from `),ct=s(vt,"A",{href:!0});var Mr=a(ct);ss=i(Mr,"PretrainedConfig"),Mr.forEach(o),as=i(vt," for more information."),vt.forEach(o),kt.forEach(o),$o=l(t),R=s(t,"H2",{class:!0});var Oo=a(R);ae=s(Oo,"A",{id:!0,class:!0,href:!0});var vr=a(ae);Ut=s(vr,"SPAN",{});var br=a(Ut);_(qe.$$.fragment,br),br.forEach(o),vr.forEach(o),rs=l(Oo),Vt=s(Oo,"SPAN",{});var yr=a(Vt);is=i(yr,"M2M100Tokenizer"),yr.forEach(o),Oo.forEach(o),Eo=l(t),b=s(t,"DIV",{class:!0});var z=a(b);_(xe.$$.fragment,z),ds=l(z),$e=s(z,"P",{});var Bo=a($e);ls=i(Bo,"Construct an M2M100 tokenizer. Based on "),Ee=s(Bo,"A",{href:!0,rel:!0});var wr=a(Ee);cs=i(wr,"SentencePiece"),wr.forEach(o),hs=i(Bo,"."),Bo.forEach(o),ps=l(z),Ce=s(z,"P",{});var Wo=a(Ce);ms=i(Wo,"This tokenizer inherits from "),ht=s(Wo,"A",{href:!0});var Tr=a(ht);us=i(Tr,"PreTrainedTokenizer"),Tr.forEach(o),fs=i(Wo,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Wo.forEach(o),_s=l(z),Xt=s(z,"P",{});var zr=a(Xt);gs=i(zr,"Examples:"),zr.forEach(o),ks=l(z),_(je.$$.fragment,z),Ms=l(z),D=s(z,"DIV",{class:!0});var pe=a(D);_(Pe.$$.fragment,pe),vs=l(pe),Fe=s(pe,"P",{});var Ho=a(Fe);bs=i(Ho,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Rt=s(Ho,"CODE",{});var qr=a(Rt);ys=i(qr,"X"),qr.forEach(o),ws=i(Ho," represents the sequence:"),Ho.forEach(o),Ts=l(pe),Se=s(pe,"UL",{});var Uo=a(Se);Ae=s(Uo,"LI",{});var Vo=a(Ae);Jt=s(Vo,"CODE",{});var xr=a(Jt);zs=i(xr,"input_ids"),xr.forEach(o),qs=i(Vo," (for encoder) "),Kt=s(Vo,"CODE",{});var $r=a(Kt);xs=i($r,"X [eos, src_lang_code]"),$r.forEach(o),Vo.forEach(o),$s=l(Uo),De=s(Uo,"LI",{});var Xo=a(De);Zt=s(Xo,"CODE",{});var Er=a(Zt);Es=i(Er,"decoder_input_ids"),Er.forEach(o),Cs=i(Xo,": (for decoder) "),Qt=s(Xo,"CODE",{});var Cr=a(Qt);js=i(Cr,"X [eos, tgt_lang_code]"),Cr.forEach(o),Xo.forEach(o),Uo.forEach(o),Ps=l(pe),Yt=s(pe,"P",{});var jr=a(Yt);Fs=i(jr,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),jr.forEach(o),pe.forEach(o),Ss=l(z),re=s(z,"DIV",{class:!0});var Ro=a(re);_(Le.$$.fragment,Ro),As=l(Ro),Ne=s(Ro,"P",{});var Jo=a(Ne);Ds=i(Jo,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),eo=s(Jo,"CODE",{});var Pr=a(eo);Ls=i(Pr,"prepare_for_model"),Pr.forEach(o),Ns=i(Jo," method."),Jo.forEach(o),Ro.forEach(o),Is=l(z),G=s(z,"DIV",{class:!0});var bt=a(G);_(Ie.$$.fragment,bt),Gs=l(bt),pt=s(bt,"P",{});var La=a(pt);Os=i(La,"Create the token type IDs corresponding to the sequences passed. "),mt=s(La,"A",{href:!0});var Fr=a(mt);Bs=i(Fr,"What are token type IDs?"),Fr.forEach(o),La.forEach(o),Ws=l(bt),to=s(bt,"P",{});var Sr=a(to);Hs=i(Sr,"Should be overridden in a subclass if the model has a special way of building those."),Sr.forEach(o),bt.forEach(o),Us=l(z),oo=s(z,"DIV",{class:!0}),a(oo).forEach(o),z.forEach(o),Co=l(t),J=s(t,"H2",{class:!0});var Ko=a(J);ie=s(Ko,"A",{id:!0,class:!0,href:!0});var Ar=a(ie);no=s(Ar,"SPAN",{});var Dr=a(no);_(Ge.$$.fragment,Dr),Dr.forEach(o),Ar.forEach(o),Vs=l(Ko),so=s(Ko,"SPAN",{});var Lr=a(so);Xs=i(Lr,"M2M100Model"),Lr.forEach(o),Ko.forEach(o),jo=l(t),F=s(t,"DIV",{class:!0});var me=a(F);_(Oe.$$.fragment,me),Rs=l(me),Be=s(me,"P",{});var Zo=a(Be);Js=i(Zo,`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ut=s(Zo,"A",{href:!0});var Nr=a(ut);Ks=i(Nr,"PreTrainedModel"),Nr.forEach(o),Zs=i(Zo,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Zo.forEach(o),Qs=l(me),We=s(me,"P",{});var Qo=a(We);Ys=i(Qo,"This model is also a PyTorch "),He=s(Qo,"A",{href:!0,rel:!0});var Ir=a(He);ea=i(Ir,"torch.nn.Module"),Ir.forEach(o),ta=i(Qo,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Qo.forEach(o),oa=l(me),C=s(me,"DIV",{class:!0});var B=a(C);_(Ue.$$.fragment,B),na=l(B),K=s(B,"P",{});var yt=a(K);sa=i(yt,"The "),ft=s(yt,"A",{href:!0});var Gr=a(ft);aa=i(Gr,"M2M100Model"),Gr.forEach(o),ra=i(yt," forward method, overrides the "),ao=s(yt,"CODE",{});var Or=a(ao);ia=i(Or,"__call__"),Or.forEach(o),da=i(yt," special method."),yt.forEach(o),la=l(B),_(de.$$.fragment,B),ca=l(B),ro=s(B,"P",{});var Br=a(ro);ha=i(Br,"Example:"),Br.forEach(o),pa=l(B),_(Ve.$$.fragment,B),B.forEach(o),me.forEach(o),Po=l(t),Z=s(t,"H2",{class:!0});var Yo=a(Z);le=s(Yo,"A",{id:!0,class:!0,href:!0});var Wr=a(le);io=s(Wr,"SPAN",{});var Hr=a(io);_(Xe.$$.fragment,Hr),Hr.forEach(o),Wr.forEach(o),ma=l(Yo),lo=s(Yo,"SPAN",{});var Ur=a(lo);ua=i(Ur,"M2M100ForConditionalGeneration"),Ur.forEach(o),Yo.forEach(o),Fo=l(t),S=s(t,"DIV",{class:!0});var ue=a(S);_(Re.$$.fragment,ue),fa=l(ue),Je=s(ue,"P",{});var en=a(Je);_a=i(en,`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),_t=s(en,"A",{href:!0});var Vr=a(_t);ga=i(Vr,"PreTrainedModel"),Vr.forEach(o),ka=i(en,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),en.forEach(o),Ma=l(ue),Ke=s(ue,"P",{});var tn=a(Ke);va=i(tn,"This model is also a PyTorch "),Ze=s(tn,"A",{href:!0,rel:!0});var Xr=a(Ze);ba=i(Xr,"torch.nn.Module"),Xr.forEach(o),ya=i(tn,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),tn.forEach(o),wa=l(ue),T=s(ue,"DIV",{class:!0});var j=a(T);_(Qe.$$.fragment,j),Ta=l(j),Q=s(j,"P",{});var wt=a(Q);za=i(wt,"The "),gt=s(wt,"A",{href:!0});var Rr=a(gt);qa=i(Rr,"M2M100ForConditionalGeneration"),Rr.forEach(o),xa=i(wt," forward method, overrides the "),co=s(wt,"CODE",{});var Jr=a(co);$a=i(Jr,"__call__"),Jr.forEach(o),Ea=i(wt," special method."),wt.forEach(o),Ca=l(j),_(ce.$$.fragment,j),ja=l(j),ho=s(j,"P",{});var Kr=a(ho);Pa=i(Kr,"Example:"),Kr.forEach(o),Fa=l(j),_(Ye.$$.fragment,j),Sa=l(j),po=s(j,"P",{});var Zr=a(po);Aa=i(Zr,"Translation example:"),Zr.forEach(o),Da=l(j),_(et.$$.fragment,j),j.forEach(o),ue.forEach(o),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(ri)),c(y,"id","m2m100"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#m2m100"),c(u,"class","relative group"),c(ee,"id","overview"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#overview"),c(W,"class","relative group"),c(ge,"href","https://arxiv.org/abs/2010.11125"),c(ge,"rel","nofollow"),c(ke,"href","https://huggingface.co/valhalla"),c(ke,"rel","nofollow"),c(ne,"id","training-and-generation"),c(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ne,"href","#training-and-generation"),c(H,"class","relative group"),c(at,"href","/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100Tokenizer"),c(se,"id","transformers.M2M100Config"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#transformers.M2M100Config"),c(U,"class","relative group"),c(dt,"href","/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100Model"),c(ze,"href","https://huggingface.co/facebook/m2m100_418M"),c(ze,"rel","nofollow"),c(lt,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(ct,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(I,"class","docstring"),c(ae,"id","transformers.M2M100Tokenizer"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#transformers.M2M100Tokenizer"),c(R,"class","relative group"),c(Ee,"href","https://github.com/google/sentencepiece"),c(Ee,"rel","nofollow"),c(ht,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(D,"class","docstring"),c(re,"class","docstring"),c(mt,"href","../glossary#token-type-ids"),c(G,"class","docstring"),c(oo,"class","docstring"),c(b,"class","docstring"),c(ie,"id","transformers.M2M100Model"),c(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ie,"href","#transformers.M2M100Model"),c(J,"class","relative group"),c(ut,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(He,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(He,"rel","nofollow"),c(ft,"href","/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100Model"),c(C,"class","docstring"),c(F,"class","docstring"),c(le,"id","transformers.M2M100ForConditionalGeneration"),c(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(le,"href","#transformers.M2M100ForConditionalGeneration"),c(Z,"class","relative group"),c(_t,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(Ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ze,"rel","nofollow"),c(gt,"href","/docs/transformers/v4.14.1/en/model_doc/m2m_100#transformers.M2M100ForConditionalGeneration"),c(T,"class","docstring"),c(S,"class","docstring")},m(t,h){e(document.head,m),p(t,$,h),p(t,u,h),e(u,y),e(y,P),g(w,P,null),e(u,q),e(u,N),e(N,on),p(t,uo,h),p(t,W,h),e(W,ee),e(ee,zt),g(_e,zt,null),e(W,nn),e(W,qt),e(qt,sn),p(t,fo,h),p(t,te,h),e(te,an),e(te,ge),e(ge,rn),e(te,dn),p(t,_o,h),p(t,nt,h),e(nt,ln),p(t,go,h),p(t,st,h),e(st,xt),e(xt,cn),p(t,ko,h),p(t,oe,h),e(oe,hn),e(oe,ke),e(ke,pn),e(oe,mn),p(t,Mo,h),p(t,H,h),e(H,ne),e(ne,$t),g(Me,$t,null),e(H,un),e(H,Et),e(Et,fn),p(t,vo,h),p(t,A,h),e(A,_n),e(A,Ct),e(Ct,gn),e(A,kn),e(A,jt),e(jt,Mn),e(A,vn),e(A,Pt),e(Pt,bn),e(A,yn),p(t,bo,h),p(t,E,h),e(E,wn),e(E,at),e(at,Tn),e(E,zn),e(E,Ft),e(Ft,qn),e(E,xn),e(E,St),e(St,$n),e(E,En),e(E,At),e(At,Cn),e(E,jn),p(t,yo,h),p(t,rt,h),e(rt,Dt),e(Dt,Pn),p(t,wo,h),g(ve,t,h),p(t,To,h),p(t,it,h),e(it,be),e(be,Lt),e(Lt,Fn),e(be,Sn),e(be,x),e(x,An),e(x,Nt),e(Nt,Dn),e(x,Ln),e(x,It),e(It,Nn),e(x,In),e(x,Gt),e(Gt,Gn),e(x,On),e(x,Ot),e(Ot,Bn),e(x,Wn),e(x,Bt),e(Bt,Hn),e(x,Un),p(t,zo,h),g(ye,t,h),p(t,qo,h),p(t,U,h),e(U,se),e(se,Wt),g(we,Wt,null),e(U,Vn),e(U,Ht),e(Ht,Xn),p(t,xo,h),p(t,I,h),g(Te,I,null),e(I,Rn),e(I,V),e(V,Jn),e(V,dt),e(dt,Kn),e(V,Zn),e(V,ze),e(ze,Qn),e(V,Yn),e(I,es),e(I,X),e(X,ts),e(X,lt),e(lt,os),e(X,ns),e(X,ct),e(ct,ss),e(X,as),p(t,$o,h),p(t,R,h),e(R,ae),e(ae,Ut),g(qe,Ut,null),e(R,rs),e(R,Vt),e(Vt,is),p(t,Eo,h),p(t,b,h),g(xe,b,null),e(b,ds),e(b,$e),e($e,ls),e($e,Ee),e(Ee,cs),e($e,hs),e(b,ps),e(b,Ce),e(Ce,ms),e(Ce,ht),e(ht,us),e(Ce,fs),e(b,_s),e(b,Xt),e(Xt,gs),e(b,ks),g(je,b,null),e(b,Ms),e(b,D),g(Pe,D,null),e(D,vs),e(D,Fe),e(Fe,bs),e(Fe,Rt),e(Rt,ys),e(Fe,ws),e(D,Ts),e(D,Se),e(Se,Ae),e(Ae,Jt),e(Jt,zs),e(Ae,qs),e(Ae,Kt),e(Kt,xs),e(Se,$s),e(Se,De),e(De,Zt),e(Zt,Es),e(De,Cs),e(De,Qt),e(Qt,js),e(D,Ps),e(D,Yt),e(Yt,Fs),e(b,Ss),e(b,re),g(Le,re,null),e(re,As),e(re,Ne),e(Ne,Ds),e(Ne,eo),e(eo,Ls),e(Ne,Ns),e(b,Is),e(b,G),g(Ie,G,null),e(G,Gs),e(G,pt),e(pt,Os),e(pt,mt),e(mt,Bs),e(G,Ws),e(G,to),e(to,Hs),e(b,Us),e(b,oo),p(t,Co,h),p(t,J,h),e(J,ie),e(ie,no),g(Ge,no,null),e(J,Vs),e(J,so),e(so,Xs),p(t,jo,h),p(t,F,h),g(Oe,F,null),e(F,Rs),e(F,Be),e(Be,Js),e(Be,ut),e(ut,Ks),e(Be,Zs),e(F,Qs),e(F,We),e(We,Ys),e(We,He),e(He,ea),e(We,ta),e(F,oa),e(F,C),g(Ue,C,null),e(C,na),e(C,K),e(K,sa),e(K,ft),e(ft,aa),e(K,ra),e(K,ao),e(ao,ia),e(K,da),e(C,la),g(de,C,null),e(C,ca),e(C,ro),e(ro,ha),e(C,pa),g(Ve,C,null),p(t,Po,h),p(t,Z,h),e(Z,le),e(le,io),g(Xe,io,null),e(Z,ma),e(Z,lo),e(lo,ua),p(t,Fo,h),p(t,S,h),g(Re,S,null),e(S,fa),e(S,Je),e(Je,_a),e(Je,_t),e(_t,ga),e(Je,ka),e(S,Ma),e(S,Ke),e(Ke,va),e(Ke,Ze),e(Ze,ba),e(Ke,ya),e(S,wa),e(S,T),g(Qe,T,null),e(T,Ta),e(T,Q),e(Q,za),e(Q,gt),e(gt,qa),e(Q,xa),e(Q,co),e(co,$a),e(Q,Ea),e(T,Ca),g(ce,T,null),e(T,ja),e(T,ho),e(ho,Pa),e(T,Fa),g(Ye,T,null),e(T,Sa),e(T,po),e(po,Aa),e(T,Da),g(et,T,null),So=!0},p(t,[h]){const tt={};h&2&&(tt.$$scope={dirty:h,ctx:t}),de.$set(tt);const mo={};h&2&&(mo.$$scope={dirty:h,ctx:t}),ce.$set(mo)},i(t){So||(k(w.$$.fragment,t),k(_e.$$.fragment,t),k(Me.$$.fragment,t),k(ve.$$.fragment,t),k(ye.$$.fragment,t),k(we.$$.fragment,t),k(Te.$$.fragment,t),k(qe.$$.fragment,t),k(xe.$$.fragment,t),k(je.$$.fragment,t),k(Pe.$$.fragment,t),k(Le.$$.fragment,t),k(Ie.$$.fragment,t),k(Ge.$$.fragment,t),k(Oe.$$.fragment,t),k(Ue.$$.fragment,t),k(de.$$.fragment,t),k(Ve.$$.fragment,t),k(Xe.$$.fragment,t),k(Re.$$.fragment,t),k(Qe.$$.fragment,t),k(ce.$$.fragment,t),k(Ye.$$.fragment,t),k(et.$$.fragment,t),So=!0)},o(t){M(w.$$.fragment,t),M(_e.$$.fragment,t),M(Me.$$.fragment,t),M(ve.$$.fragment,t),M(ye.$$.fragment,t),M(we.$$.fragment,t),M(Te.$$.fragment,t),M(qe.$$.fragment,t),M(xe.$$.fragment,t),M(je.$$.fragment,t),M(Pe.$$.fragment,t),M(Le.$$.fragment,t),M(Ie.$$.fragment,t),M(Ge.$$.fragment,t),M(Oe.$$.fragment,t),M(Ue.$$.fragment,t),M(de.$$.fragment,t),M(Ve.$$.fragment,t),M(Xe.$$.fragment,t),M(Re.$$.fragment,t),M(Qe.$$.fragment,t),M(ce.$$.fragment,t),M(Ye.$$.fragment,t),M(et.$$.fragment,t),So=!1},d(t){o(m),t&&o($),t&&o(u),v(w),t&&o(uo),t&&o(W),v(_e),t&&o(fo),t&&o(te),t&&o(_o),t&&o(nt),t&&o(go),t&&o(st),t&&o(ko),t&&o(oe),t&&o(Mo),t&&o(H),v(Me),t&&o(vo),t&&o(A),t&&o(bo),t&&o(E),t&&o(yo),t&&o(rt),t&&o(wo),v(ve,t),t&&o(To),t&&o(it),t&&o(zo),v(ye,t),t&&o(qo),t&&o(U),v(we),t&&o(xo),t&&o(I),v(Te),t&&o($o),t&&o(R),v(qe),t&&o(Eo),t&&o(b),v(xe),v(je),v(Pe),v(Le),v(Ie),t&&o(Co),t&&o(J),v(Ge),t&&o(jo),t&&o(F),v(Oe),v(Ue),v(de),v(Ve),t&&o(Po),t&&o(Z),v(Xe),t&&o(Fo),t&&o(S),v(Re),v(Qe),v(ce),v(Ye),v(et)}}}const ri={local:"m2m100",sections:[{local:"overview",sections:[{local:"training-and-generation",title:"Training and Generation"}],title:"Overview"},{local:"transformers.M2M100Config",title:"M2M100Config"},{local:"transformers.M2M100Tokenizer",title:"M2M100Tokenizer"},{local:"transformers.M2M100Model",title:"M2M100Model"},{local:"transformers.M2M100ForConditionalGeneration",title:"M2M100ForConditionalGeneration"}],title:"M2M100"};function ii(fe,m,$){let{fw:u}=m;return fe.$$set=y=>{"fw"in y&&$(0,u=y.fw)},[u]}class ui extends Yr{constructor(m){super();ei(this,m,ii,ai,ti,{fw:0})}}export{ui as default,ri as metadata};
