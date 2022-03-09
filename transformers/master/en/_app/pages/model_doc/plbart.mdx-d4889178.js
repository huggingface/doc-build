import{S as wl,i as Ll,s as zl,e as n,k as l,w as m,t as r,M as Bl,c as a,d as o,m as c,a as s,x as f,h as i,b as d,F as e,g as h,y as g,q as _,o as b,B as k}from"../../chunks/vendor-4833417e.js";import{T as Mi}from"../../chunks/Tip-fffd6df1.js";import{D}from"../../chunks/Docstring-4f315ed9.js";import{C as Ce}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as ue}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function ql(J){let u,z,v,P,q;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),P=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);P=i(F,"Module"),F.forEach(o),q=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(o)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,P),e(u,q)},d(T){T&&o(u)}}}function $l(J){let u,z,v,P,q;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),P=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);P=i(F,"Module"),F.forEach(o),q=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(o)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,P),e(u,q)},d(T){T&&o(u)}}}function xl(J){let u,z,v,P,q;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),P=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);P=i(F,"Module"),F.forEach(o),q=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(o)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,P),e(u,q)},d(T){T&&o(u)}}}function Cl(J){let u,z,v,P,q,T,y,F,pa,fn,O,ao,ha,ua,Ee,ma,fa,Fe,ga,_a,gn,Y,me,so,Me,ba,ro,ka,_n,G,va,je,Ta,ya,io,Pa,wa,bn,Et,La,kn,Ft,lo,za,vn,R,Ba,Ae,qa,$a,Ne,xa,Ca,Tn,Z,fe,co,Se,Ea,po,Fa,yn,M,Ma,ho,ja,Aa,uo,Na,Sa,mo,Ia,Da,fo,Oa,Xa,Pn,ge,Ga,Ie,Ra,Wa,wn,W,Ua,De,go,Ha,Va,Ka,Mt,Qa,Ja,Ln,jt,_o,Ya,zn,Oe,Bn,At,Xe,bo,Za,es,ee,ts,ko,os,ns,vo,as,ss,qn,Ge,$n,te,_e,To,Re,rs,yo,is,xn,C,We,ds,oe,ls,Nt,cs,ps,Ue,hs,us,ms,ne,fs,St,gs,_s,It,bs,ks,vs,Po,Ts,ys,He,Cn,ae,be,wo,Ve,Ps,Lo,ws,En,w,Ke,Ls,zo,zs,Bs,X,qs,Dt,$s,xs,Ot,Cs,Es,Qe,Fs,Ms,js,Je,As,Bo,Ns,Ss,Is,qo,Ds,Os,Ye,Xs,ke,Ze,Gs,$o,Rs,Ws,I,et,Us,tt,Hs,xo,Vs,Ks,Qs,ot,nt,Co,Js,Ys,Eo,Zs,er,at,Fo,tr,or,Mo,nr,ar,jo,sr,Fn,se,ve,Ao,st,rr,No,ir,Mn,N,rt,dr,it,lr,Xt,cr,pr,hr,dt,ur,lt,mr,fr,gr,j,ct,_r,re,br,Gt,kr,vr,So,Tr,yr,Pr,Te,wr,Io,Lr,zr,pt,jn,ie,ye,Do,ht,Br,Oo,qr,An,S,ut,$r,mt,xr,Rt,Cr,Er,Fr,ft,Mr,gt,jr,Ar,Nr,L,_t,Sr,de,Ir,Wt,Dr,Or,Xo,Xr,Gr,Rr,Pe,Wr,Go,Ur,Hr,Ro,Wo,Uo,Ho,Vr,Kr,Vo,Ko,Qo,Jo,Qr,Jr,Yo,Yr,Zr,Zo,en,tn,on,ei,Nn,le,we,nn,bt,ti,an,oi,Sn,E,kt,ni,sn,ai,si,vt,ri,Ut,ii,di,li,Tt,ci,yt,pi,hi,ui,B,Pt,mi,ce,fi,Ht,gi,_i,rn,bi,ki,vi,Le,Ti,dn,yi,Pi,wt,wi,ln,Li,zi,Lt,In,pe,ze,cn,zt,Bi,pn,qi,Dn,he,Bt,$i,U,qt,xi,hn,Ci,Ei,$t,On;return T=new ue({}),Me=new ue({}),Se=new ue({}),Oe=new Ce({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base", src_lang="en_XX", tgt_lang="python")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
expected_translation_english = "Returns the maximum value of a b c."
inputs = tokenizer(example_python_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_english, return_tensors="pt")
inputs["labels"] = labels["input_ids"]
# forward pass
model(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartForConditionalGeneration, PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;python&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_english = <span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_english, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs)`}}),Ge=new Ce({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-python-en_XX", src_lang="python", tgt_lang="en_XX")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
inputs = tokenizer(example_python_phrase, return_tensors="pt")
model = PLBartForConditionalGeneration.from_pretrained("uclanlp/plbart-python-en_XX")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["en_XX"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartForConditionalGeneration, PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>, src_lang=<span class="hljs-string">&quot;python&quot;</span>, tgt_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;en_XX&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>`}}),Re=new ue({}),We=new D({props:{name:"class transformers.PLBartConfig",anchor:"transformers.PLBartConfig",parameters:[{name:"vocab_size",val:" = 50005"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 6"},{name:"encoder_ffn_dim",val:" = 3072"},{name:"encoder_attention_heads",val:" = 12"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 3072"},{name:"decoder_attention_heads",val:" = 12"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/configuration_plbart.py#L32",parametersDescription:[{anchor:"transformers.PLBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50005) &#x2014;
Vocabulary size of the PLBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartModel">PLBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.PLBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.PLBartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.PLBartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.PLBartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.PLBartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.PLBartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.PLBartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.PLBartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.PLBartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.PLBartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.PLBartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.PLBartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.PLBartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.PLBartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.PLBartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.PLBartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.PLBartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),He=new Ce({props:{code:`from transformers import PLBartModel, PLBartConfig

# Initializing a PLBART uclanlp/plbart-base style configuration
configuration = PLBartConfig()
# Initializing a model from the uclanlp/plbart-base style configuration
model = PLBartModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartModel, PLBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a PLBART uclanlp/plbart-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = PLBartConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the uclanlp/plbart-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ve=new ue({}),Ke=new D({props:{name:"class transformers.PLBartTokenizer",anchor:"transformers.PLBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"language_codes",val:" = 'base'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/tokenization_plbart.py#L75",parametersDescription:[{anchor:"transformers.PLBartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.PLBartTokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.PLBartTokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.PLBartTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The start of sequence token.`,name:"bos_token"},{anchor:"transformers.PLBartTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.PLBartTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.PLBartTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The cls token, which is a special token used as the first token for all tasks.`,name:"cls_token"},{anchor:"transformers.PLBartTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PLBartTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PLBartTokenizer.mask_token(str,",description:`<strong>mask_token(<code>str</code>,</strong> <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masking tasks. This
is only used in the <code>&quot;base&quot;</code> tokenizer type. For <code>&quot;multi&quot;</code> tokenizer, masking is never done for the
downstream tasks.`,name:"mask_token(str,"},{anchor:"transformers.PLBartTokenizer.language_codes",description:`<strong>language_codes</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;base&quot;</code>) &#x2014;
What language codes to use. Should be one of <code>&quot;base&quot;</code> or <code>&quot;multi&quot;</code>.`,name:"language_codes"},{anchor:"transformers.PLBartTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:<ul>
<li><code>enable_sampling</code>: Enable subword regularization.</li>
<li><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul></li>
<li><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</li>
</ul>`,name:"sp_model_kwargs"}]}}),Ye=new Ce({props:{code:`from transformers import PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-python-en_XX", src_lang="python", tgt_lang="en_XX")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
expected_translation_english = "Returns the maximum value of a b c."
inputs = tokenizer(example_python_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_english, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>, src_lang=<span class="hljs-string">&quot;python&quot;</span>, tgt_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_english = <span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_english, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Ze=new D({props:{name:"as_target_tokenizer",anchor:"transformers.PLBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/tokenization_plbart.py#L422"}}),et=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/tokenization_plbart.py#L302",parametersDescription:[{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),st=new ue({}),rt=new D({props:{name:"class transformers.PLBartModel",anchor:"transformers.PLBartModel",parameters:[{name:"config",val:": PLBartConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1105",parametersDescription:[{anchor:"transformers.PLBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ct=new D({props:{name:"forward",anchor:"transformers.PLBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1131",parametersDescription:[{anchor:"transformers.PLBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>PLBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 50003 for <em>en_XX</em>, and 50001 for <em>java</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.PLBartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> ( &#x2014;
obj:<em>torch.LongTensor</em> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>): Default behavior:
generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PLBartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PLBartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PLBartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> ( &#x2014;
obj:<em>torch.Tensor</em> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>): Mask to nullify
selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PLBartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PLBartModel.forward.past_key_values",description:`<strong>past_key_values</strong> ( &#x2014;
obj:<em>tuple(tuple(torch.FloatTensor))</em>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when
<code>config.use_cache=True</code>): Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple
having 2 tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)\`.`,name:"past_key_values"},{anchor:"transformers.PLBartModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally,
instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful
if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s
internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PLBartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>):
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PLBartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PLBartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PLBartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PLBartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
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
`}}),Te=new Mi({props:{$$slots:{default:[ql]},$$scope:{ctx:J}}}),pt=new Ce({props:{code:`from transformers import PLBartTokenizer, PLBartModel
import torch

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartModel.from_pretrained("uclanlp/plbart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartModel.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ht=new ue({}),ut=new D({props:{name:"class transformers.PLBartForConditionalGeneration",anchor:"transformers.PLBartForConditionalGeneration",parameters:[{name:"config",val:": PLBartConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1221",parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_t=new D({props:{name:"forward",anchor:"transformers.PLBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1264",parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>PLBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 50003 for <em>en_XX</em>, and 50001 for <em>java</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> ( &#x2014;
obj:<em>torch.LongTensor</em> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>): Default behavior:
generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> ( &#x2014;
obj:<em>torch.Tensor</em> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>): Mask to nullify
selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PLBartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> ( &#x2014;
obj:<em>tuple(tuple(torch.FloatTensor))</em>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when
<code>config.use_cache=True</code>): Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple
having 2 tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)\`.`,name:"past_key_values"},{anchor:"transformers.PLBartForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally,
instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful
if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s
internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>):
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PLBartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PLBartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PLBartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PLBartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PLBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
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
`}}),Pe=new Mi({props:{$$slots:{default:[$l]},$$scope:{ctx:J}}}),bt=new ue({}),kt=new D({props:{name:"class transformers.PLBartForSequenceClassification",anchor:"transformers.PLBartForSequenceClassification",parameters:[{name:"config",val:": PLBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1390",parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pt=new D({props:{name:"forward",anchor:"transformers.PLBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1403",parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>PLBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 50003 for <em>en_XX</em>, and 50001 for <em>java</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> ( &#x2014;
obj:<em>torch.LongTensor</em> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>): Default behavior:
generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> ( &#x2014;
obj:<em>torch.Tensor</em> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>): Mask to nullify
selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PLBartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> ( &#x2014;
obj:<em>tuple(tuple(torch.FloatTensor))</em>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when
<code>config.use_cache=True</code>): Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple
having 2 tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)\`.`,name:"past_key_values"},{anchor:"transformers.PLBartForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally,
instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful
if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s
internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>):
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PLBartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PLBartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PLBartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PLBartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PLBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
`}}),Le=new Mi({props:{$$slots:{default:[xl]},$$scope:{ctx:J}}}),wt=new Ce({props:{code:`from transformers import PLBartTokenizer, PLBartForSequenceClassification
import torch

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartForSequenceClassification.from_pretrained("uclanlp/plbart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Lt=new Ce({props:{code:`from transformers import PLBartTokenizer, PLBartForSequenceClassification
import torch

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartForSequenceClassification.from_pretrained("uclanlp/plbart-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),zt=new ue({}),Bt=new D({props:{name:"class transformers.PLBartForCausalLM",anchor:"transformers.PLBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1525"}}),qt=new D({props:{name:"forward",anchor:"transformers.PLBartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1556",parametersDescription:[{anchor:"transformers.PLBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.PLBartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.PLBartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PLBartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PLBartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PLBartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.PLBartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.PLBartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PLBartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.PLBartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
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
`}}),$t=new Ce({props:{code:`from transformers import PLBartTokenizer, PLBartForCausalLM

tokenizer = PLBartTokenizer.from_pretrained("facebook/bart-large")
model = PLBartForCausalLM.from_pretrained("facebook/bart-large", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),z=l(),v=n("h1"),P=n("a"),q=n("span"),m(T.$$.fragment),y=l(),F=n("span"),pa=r("PLBart"),fn=l(),O=n("p"),ao=n("strong"),ha=r("DISCLAIMER:"),ua=r(" If you see something strange, file a "),Ee=n("a"),ma=r("Github Issue"),fa=r(` and assign
`),Fe=n("a"),ga=r("@gchhablani"),_a=r("."),gn=l(),Y=n("h2"),me=n("a"),so=n("span"),m(Me.$$.fragment),ba=l(),ro=n("span"),ka=r("Overview of PLBart"),_n=l(),G=n("p"),va=r("The PLBART model was proposed in "),je=n("a"),Ta=r("Unified Pre-training for Program Understanding and Generation"),ya=r(` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),io=n("code"),Pa=r("plbart-base"),wa=r(` has been trained using multilingual denoising task
on Java, Python and English.`),bn=l(),Et=n("p"),La=r("According to the abstract"),kn=l(),Ft=n("p"),lo=n("em"),za=r(`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),vn=l(),R=n("p"),Ba=r("This model was contributed by "),Ae=n("a"),qa=r("gchhablani"),$a=r(". The Authors\u2019 code can be found "),Ne=n("a"),xa=r("here"),Ca=r("."),Tn=l(),Z=n("h3"),fe=n("a"),co=n("span"),m(Se.$$.fragment),Ea=l(),po=n("span"),Fa=r("Training of PLBart"),yn=l(),M=n("p"),Ma=r(`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),ho=n("code"),ja=r("X [eos, src_lang_code]"),Aa=r(" where "),uo=n("code"),Na=r("X"),Sa=r(` is the source text. The
target text format is `),mo=n("code"),Ia=r("[tgt_lang_code] X [eos]"),Da=r(". "),fo=n("code"),Oa=r("bos"),Xa=r(" is never used."),Pn=l(),ge=n("p"),Ga=r("However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Ie=n("a"),Ra=r("the paper"),Wa=r(" to learn more about this."),wn=l(),W=n("p"),Ua=r("In cases where the language code is needed, The regular "),De=n("a"),go=n("strong"),Ha=r("call"),Va=r("()"),Ka=r(` will encode source text format, and it should be wrapped
inside the context manager `),Mt=n("a"),Qa=r("as_target_tokenizer()"),Ja=r(" to encode target text format."),Ln=l(),jt=n("ul"),_o=n("li"),Ya=r("Supervised training"),zn=l(),m(Oe.$$.fragment),Bn=l(),At=n("ul"),Xe=n("li"),bo=n("p"),Za=r("Generation"),es=l(),ee=n("p"),ts=r("While generating the target text set the "),ko=n("code"),os=r("decoder_start_token_id"),ns=r(` to the target language id. The following
example shows how to translate Python to English using the `),vo=n("code"),as=r("uclanlp/plbart-python-en_XX"),ss=r(" model."),qn=l(),m(Ge.$$.fragment),$n=l(),te=n("h2"),_e=n("a"),To=n("span"),m(Re.$$.fragment),rs=l(),yo=n("span"),is=r("PLBartConfig"),xn=l(),C=n("div"),m(We.$$.fragment),ds=l(),oe=n("p"),ls=r("This is the configuration class to store the configuration of a "),Nt=n("a"),cs=r("PLBartModel"),ps=r(`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),Ue=n("a"),hs=r("uclanlp/plbart-base"),us=r(" architecture."),ms=l(),ne=n("p"),fs=r("Configuration objects inherit from "),St=n("a"),gs=r("PretrainedConfig"),_s=r(` and can be used to control the model outputs. Read the
documentation from `),It=n("a"),bs=r("PretrainedConfig"),ks=r(" for more information."),vs=l(),Po=n("p"),Ts=r("Example:"),ys=l(),m(He.$$.fragment),Cn=l(),ae=n("h2"),be=n("a"),wo=n("span"),m(Ve.$$.fragment),Ps=l(),Lo=n("span"),ws=r("PLBartTokenizer"),En=l(),w=n("div"),m(Ke.$$.fragment),Ls=l(),zo=n("p"),zs=r("Construct an PLBART tokenizer."),Bs=l(),X=n("p"),qs=r("Adapted from "),Dt=n("a"),$s=r("RobertaTokenizer"),xs=r(" and "),Ot=n("a"),Cs=r("XLNetTokenizer"),Es=r(`. Based on
`),Qe=n("a"),Fs=r("SentencePiece"),Ms=r("."),js=l(),Je=n("p"),As=r("The tokenization method is "),Bo=n("code"),Ns=r("<tokens> <eos> <language code>"),Ss=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Is=l(),qo=n("p"),Ds=r("Examples:"),Os=l(),m(Ye.$$.fragment),Xs=l(),ke=n("div"),m(Ze.$$.fragment),Gs=l(),$o=n("p"),Rs=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Ws=l(),I=n("div"),m(et.$$.fragment),Us=l(),tt=n("p"),Hs=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),xo=n("code"),Vs=r("X"),Ks=r(" represents the sequence:"),Qs=l(),ot=n("ul"),nt=n("li"),Co=n("code"),Js=r("input_ids"),Ys=r(" (for encoder) "),Eo=n("code"),Zs=r("X [eos, src_lang_code]"),er=l(),at=n("li"),Fo=n("code"),tr=r("decoder_input_ids"),or=r(": (for decoder) "),Mo=n("code"),nr=r("X [eos, tgt_lang_code]"),ar=l(),jo=n("p"),sr=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Fn=l(),se=n("h2"),ve=n("a"),Ao=n("span"),m(st.$$.fragment),rr=l(),No=n("span"),ir=r("PLBartModel"),Mn=l(),N=n("div"),m(rt.$$.fragment),dr=l(),it=n("p"),lr=r(`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Xt=n("a"),cr=r("PreTrainedModel"),pr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hr=l(),dt=n("p"),ur=r("This model is also a PyTorch "),lt=n("a"),mr=r("torch.nn.Module"),fr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gr=l(),j=n("div"),m(ct.$$.fragment),_r=l(),re=n("p"),br=r("The "),Gt=n("a"),kr=r("PLBartModel"),vr=r(" forward method, overrides the "),So=n("code"),Tr=r("__call__"),yr=r(" special method."),Pr=l(),m(Te.$$.fragment),wr=l(),Io=n("p"),Lr=r("Example:"),zr=l(),m(pt.$$.fragment),jn=l(),ie=n("h2"),ye=n("a"),Do=n("span"),m(ht.$$.fragment),Br=l(),Oo=n("span"),qr=r("PLBartForConditionalGeneration"),An=l(),S=n("div"),m(ut.$$.fragment),$r=l(),mt=n("p"),xr=r(`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Rt=n("a"),Cr=r("PreTrainedModel"),Er=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fr=l(),ft=n("p"),Mr=r("This model is also a PyTorch "),gt=n("a"),jr=r("torch.nn.Module"),Ar=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nr=l(),L=n("div"),m(_t.$$.fragment),Sr=l(),de=n("p"),Ir=r("The "),Wt=n("a"),Dr=r("PLBartForConditionalGeneration"),Or=r(" forward method, overrides the "),Xo=n("code"),Xr=r("__call__"),Gr=r(" special method."),Rr=l(),m(Pe.$$.fragment),Wr=l(),Go=n("p"),Ur=r("Token in-filling example:"),Hr=l(),Ro=n("blockquote"),Wo=n("blockquote"),Uo=n("blockquote"),Ho=n("p"),Vr=r("from transformers import PLBartTokenizer, PLBartForConditionalGeneration, PLBartConfig"),Kr=l(),Vo=n("blockquote"),Ko=n("blockquote"),Qo=n("blockquote"),Jo=n("p"),Qr=r(`model = PLBartForConditionalGeneration.from_pretrained(\u2018uclanlp/plbart-base\u2019) >>> tokenizer =
PLBartTokenizer.from_pretrained(\u2018uclanlp/plbart-base\u2019, src_lang=\u2018java\u2019, tgt_lang=\u2018java\u2019) >>> METHOD_TO_FILL =
\u201Cpublic static main (String args[0]) { data=Date(); System.out. String.format(\u201CCurrent Date : % tc\u201D, ));}\u201D >>>
inputs = tokenizer([METHOD_TO_FILL], max_length=1024, return_tensors=\u2018pt\u2019) >>> # Generate Filled Code >>>
generated_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True) >>>
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in
generated_ids])`),Jr=l(),Yo=n("p"),Yr=r("Mask-filling example:"),Zr=l(),Zo=n("blockquote"),en=n("blockquote"),tn=n("blockquote"),on=n("p"),ei=r(`from transformers import PLBartTokenizer, PLBartForConditionalGeneration >>> tokenizer =
PLBartTokenizer.from_pretrained(\u2018uclanlp/plbart-base\u2019) >>> # en_XX is the language symbol id <LID> for English
TXT = \u201D</s> Is 0 the <mask> Fibonacci <mask> ? </s> en_XX\u201D >>> model =
PLBartForConditionalGeneration.from_pretrained(\u2018uclanlp/plbart-base\u2019) >>> input_ids = tokenizer([TXT],
add_special_tokens=False, return_tensors=\u2018pt\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits >>>
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs = logits[0,
masked_index].softmax(dim=0) >>> values, predictions = probs.topk(5) >>> tokenizer.decode(predictions).split()`),Nn=l(),le=n("h2"),we=n("a"),nn=n("span"),m(bt.$$.fragment),ti=l(),an=n("span"),oi=r("PLBartForSequenceClassification"),Sn=l(),E=n("div"),m(kt.$$.fragment),ni=l(),sn=n("p"),ai=r(`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),si=l(),vt=n("p"),ri=r("This model inherits from "),Ut=n("a"),ii=r("PreTrainedModel"),di=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),li=l(),Tt=n("p"),ci=r("This model is also a PyTorch "),yt=n("a"),pi=r("torch.nn.Module"),hi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ui=l(),B=n("div"),m(Pt.$$.fragment),mi=l(),ce=n("p"),fi=r("The "),Ht=n("a"),gi=r("PLBartForSequenceClassification"),_i=r(" forward method, overrides the "),rn=n("code"),bi=r("__call__"),ki=r(" special method."),vi=l(),m(Le.$$.fragment),Ti=l(),dn=n("p"),yi=r("Example of single-label classification:"),Pi=l(),m(wt.$$.fragment),wi=l(),ln=n("p"),Li=r("Example of multi-label classification:"),zi=l(),m(Lt.$$.fragment),In=l(),pe=n("h2"),ze=n("a"),cn=n("span"),m(zt.$$.fragment),Bi=l(),pn=n("span"),qi=r("PLBartForCausalLM"),Dn=l(),he=n("div"),m(Bt.$$.fragment),$i=l(),U=n("div"),m(qt.$$.fragment),xi=l(),hn=n("p"),Ci=r("Example:"),Ei=l(),m($t.$$.fragment),this.h()},l(t){const p=Bl('[data-svelte="svelte-1phssyn"]',document.head);u=a(p,"META",{name:!0,content:!0}),p.forEach(o),z=c(t),v=a(t,"H1",{class:!0});var xt=s(v);P=a(xt,"A",{id:!0,class:!0,href:!0});var un=s(P);q=a(un,"SPAN",{});var mn=s(q);f(T.$$.fragment,mn),mn.forEach(o),un.forEach(o),y=c(xt),F=a(xt,"SPAN",{});var ji=s(F);pa=i(ji,"PLBart"),ji.forEach(o),xt.forEach(o),fn=c(t),O=a(t,"P",{});var Ct=s(O);ao=a(Ct,"STRONG",{});var Ai=s(ao);ha=i(Ai,"DISCLAIMER:"),Ai.forEach(o),ua=i(Ct," If you see something strange, file a "),Ee=a(Ct,"A",{href:!0,rel:!0});var Ni=s(Ee);ma=i(Ni,"Github Issue"),Ni.forEach(o),fa=i(Ct,` and assign
`),Fe=a(Ct,"A",{href:!0,rel:!0});var Si=s(Fe);ga=i(Si,"@gchhablani"),Si.forEach(o),_a=i(Ct,"."),Ct.forEach(o),gn=c(t),Y=a(t,"H2",{class:!0});var Xn=s(Y);me=a(Xn,"A",{id:!0,class:!0,href:!0});var Ii=s(me);so=a(Ii,"SPAN",{});var Di=s(so);f(Me.$$.fragment,Di),Di.forEach(o),Ii.forEach(o),ba=c(Xn),ro=a(Xn,"SPAN",{});var Oi=s(ro);ka=i(Oi,"Overview of PLBart"),Oi.forEach(o),Xn.forEach(o),_n=c(t),G=a(t,"P",{});var Vt=s(G);va=i(Vt,"The PLBART model was proposed in "),je=a(Vt,"A",{href:!0,rel:!0});var Xi=s(je);Ta=i(Xi,"Unified Pre-training for Program Understanding and Generation"),Xi.forEach(o),ya=i(Vt,` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),io=a(Vt,"CODE",{});var Gi=s(io);Pa=i(Gi,"plbart-base"),Gi.forEach(o),wa=i(Vt,` has been trained using multilingual denoising task
on Java, Python and English.`),Vt.forEach(o),bn=c(t),Et=a(t,"P",{});var Ri=s(Et);La=i(Ri,"According to the abstract"),Ri.forEach(o),kn=c(t),Ft=a(t,"P",{});var Wi=s(Ft);lo=a(Wi,"EM",{});var Ui=s(lo);za=i(Ui,`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),Ui.forEach(o),Wi.forEach(o),vn=c(t),R=a(t,"P",{});var Kt=s(R);Ba=i(Kt,"This model was contributed by "),Ae=a(Kt,"A",{href:!0,rel:!0});var Hi=s(Ae);qa=i(Hi,"gchhablani"),Hi.forEach(o),$a=i(Kt,". The Authors\u2019 code can be found "),Ne=a(Kt,"A",{href:!0,rel:!0});var Vi=s(Ne);xa=i(Vi,"here"),Vi.forEach(o),Ca=i(Kt,"."),Kt.forEach(o),Tn=c(t),Z=a(t,"H3",{class:!0});var Gn=s(Z);fe=a(Gn,"A",{id:!0,class:!0,href:!0});var Ki=s(fe);co=a(Ki,"SPAN",{});var Qi=s(co);f(Se.$$.fragment,Qi),Qi.forEach(o),Ki.forEach(o),Ea=c(Gn),po=a(Gn,"SPAN",{});var Ji=s(po);Fa=i(Ji,"Training of PLBart"),Ji.forEach(o),Gn.forEach(o),yn=c(t),M=a(t,"P",{});var H=s(M);Ma=i(H,`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),ho=a(H,"CODE",{});var Yi=s(ho);ja=i(Yi,"X [eos, src_lang_code]"),Yi.forEach(o),Aa=i(H," where "),uo=a(H,"CODE",{});var Zi=s(uo);Na=i(Zi,"X"),Zi.forEach(o),Sa=i(H,` is the source text. The
target text format is `),mo=a(H,"CODE",{});var ed=s(mo);Ia=i(ed,"[tgt_lang_code] X [eos]"),ed.forEach(o),Da=i(H,". "),fo=a(H,"CODE",{});var td=s(fo);Oa=i(td,"bos"),td.forEach(o),Xa=i(H," is never used."),H.forEach(o),Pn=c(t),ge=a(t,"P",{});var Rn=s(ge);Ga=i(Rn,"However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Ie=a(Rn,"A",{href:!0,rel:!0});var od=s(Ie);Ra=i(od,"the paper"),od.forEach(o),Wa=i(Rn," to learn more about this."),Rn.forEach(o),wn=c(t),W=a(t,"P",{});var Qt=s(W);Ua=i(Qt,"In cases where the language code is needed, The regular "),De=a(Qt,"A",{href:!0});var Fi=s(De);go=a(Fi,"STRONG",{});var nd=s(go);Ha=i(nd,"call"),nd.forEach(o),Va=i(Fi,"()"),Fi.forEach(o),Ka=i(Qt,` will encode source text format, and it should be wrapped
inside the context manager `),Mt=a(Qt,"A",{href:!0});var ad=s(Mt);Qa=i(ad,"as_target_tokenizer()"),ad.forEach(o),Ja=i(Qt," to encode target text format."),Qt.forEach(o),Ln=c(t),jt=a(t,"UL",{});var sd=s(jt);_o=a(sd,"LI",{});var rd=s(_o);Ya=i(rd,"Supervised training"),rd.forEach(o),sd.forEach(o),zn=c(t),f(Oe.$$.fragment,t),Bn=c(t),At=a(t,"UL",{});var id=s(At);Xe=a(id,"LI",{});var Wn=s(Xe);bo=a(Wn,"P",{});var dd=s(bo);Za=i(dd,"Generation"),dd.forEach(o),es=c(Wn),ee=a(Wn,"P",{});var Jt=s(ee);ts=i(Jt,"While generating the target text set the "),ko=a(Jt,"CODE",{});var ld=s(ko);os=i(ld,"decoder_start_token_id"),ld.forEach(o),ns=i(Jt,` to the target language id. The following
example shows how to translate Python to English using the `),vo=a(Jt,"CODE",{});var cd=s(vo);as=i(cd,"uclanlp/plbart-python-en_XX"),cd.forEach(o),ss=i(Jt," model."),Jt.forEach(o),Wn.forEach(o),id.forEach(o),qn=c(t),f(Ge.$$.fragment,t),$n=c(t),te=a(t,"H2",{class:!0});var Un=s(te);_e=a(Un,"A",{id:!0,class:!0,href:!0});var pd=s(_e);To=a(pd,"SPAN",{});var hd=s(To);f(Re.$$.fragment,hd),hd.forEach(o),pd.forEach(o),rs=c(Un),yo=a(Un,"SPAN",{});var ud=s(yo);is=i(ud,"PLBartConfig"),ud.forEach(o),Un.forEach(o),xn=c(t),C=a(t,"DIV",{class:!0});var V=s(C);f(We.$$.fragment,V),ds=c(V),oe=a(V,"P",{});var Yt=s(oe);ls=i(Yt,"This is the configuration class to store the configuration of a "),Nt=a(Yt,"A",{href:!0});var md=s(Nt);cs=i(md,"PLBartModel"),md.forEach(o),ps=i(Yt,`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),Ue=a(Yt,"A",{href:!0,rel:!0});var fd=s(Ue);hs=i(fd,"uclanlp/plbart-base"),fd.forEach(o),us=i(Yt," architecture."),Yt.forEach(o),ms=c(V),ne=a(V,"P",{});var Zt=s(ne);fs=i(Zt,"Configuration objects inherit from "),St=a(Zt,"A",{href:!0});var gd=s(St);gs=i(gd,"PretrainedConfig"),gd.forEach(o),_s=i(Zt,` and can be used to control the model outputs. Read the
documentation from `),It=a(Zt,"A",{href:!0});var _d=s(It);bs=i(_d,"PretrainedConfig"),_d.forEach(o),ks=i(Zt," for more information."),Zt.forEach(o),vs=c(V),Po=a(V,"P",{});var bd=s(Po);Ts=i(bd,"Example:"),bd.forEach(o),ys=c(V),f(He.$$.fragment,V),V.forEach(o),Cn=c(t),ae=a(t,"H2",{class:!0});var Hn=s(ae);be=a(Hn,"A",{id:!0,class:!0,href:!0});var kd=s(be);wo=a(kd,"SPAN",{});var vd=s(wo);f(Ve.$$.fragment,vd),vd.forEach(o),kd.forEach(o),Ps=c(Hn),Lo=a(Hn,"SPAN",{});var Td=s(Lo);ws=i(Td,"PLBartTokenizer"),Td.forEach(o),Hn.forEach(o),En=c(t),w=a(t,"DIV",{class:!0});var $=s(w);f(Ke.$$.fragment,$),Ls=c($),zo=a($,"P",{});var yd=s(zo);zs=i(yd,"Construct an PLBART tokenizer."),yd.forEach(o),Bs=c($),X=a($,"P",{});var Be=s(X);qs=i(Be,"Adapted from "),Dt=a(Be,"A",{href:!0});var Pd=s(Dt);$s=i(Pd,"RobertaTokenizer"),Pd.forEach(o),xs=i(Be," and "),Ot=a(Be,"A",{href:!0});var wd=s(Ot);Cs=i(wd,"XLNetTokenizer"),wd.forEach(o),Es=i(Be,`. Based on
`),Qe=a(Be,"A",{href:!0,rel:!0});var Ld=s(Qe);Fs=i(Ld,"SentencePiece"),Ld.forEach(o),Ms=i(Be,"."),Be.forEach(o),js=c($),Je=a($,"P",{});var Vn=s(Je);As=i(Vn,"The tokenization method is "),Bo=a(Vn,"CODE",{});var zd=s(Bo);Ns=i(zd,"<tokens> <eos> <language code>"),zd.forEach(o),Ss=i(Vn," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Vn.forEach(o),Is=c($),qo=a($,"P",{});var Bd=s(qo);Ds=i(Bd,"Examples:"),Bd.forEach(o),Os=c($),f(Ye.$$.fragment,$),Xs=c($),ke=a($,"DIV",{class:!0});var Kn=s(ke);f(Ze.$$.fragment,Kn),Gs=c(Kn),$o=a(Kn,"P",{});var qd=s($o);Rs=i(qd,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),qd.forEach(o),Kn.forEach(o),Ws=c($),I=a($,"DIV",{class:!0});var qe=s(I);f(et.$$.fragment,qe),Us=c(qe),tt=a(qe,"P",{});var Qn=s(tt);Hs=i(Qn,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),xo=a(Qn,"CODE",{});var $d=s(xo);Vs=i($d,"X"),$d.forEach(o),Ks=i(Qn," represents the sequence:"),Qn.forEach(o),Qs=c(qe),ot=a(qe,"UL",{});var Jn=s(ot);nt=a(Jn,"LI",{});var Yn=s(nt);Co=a(Yn,"CODE",{});var xd=s(Co);Js=i(xd,"input_ids"),xd.forEach(o),Ys=i(Yn," (for encoder) "),Eo=a(Yn,"CODE",{});var Cd=s(Eo);Zs=i(Cd,"X [eos, src_lang_code]"),Cd.forEach(o),Yn.forEach(o),er=c(Jn),at=a(Jn,"LI",{});var Zn=s(at);Fo=a(Zn,"CODE",{});var Ed=s(Fo);tr=i(Ed,"decoder_input_ids"),Ed.forEach(o),or=i(Zn,": (for decoder) "),Mo=a(Zn,"CODE",{});var Fd=s(Mo);nr=i(Fd,"X [eos, tgt_lang_code]"),Fd.forEach(o),Zn.forEach(o),Jn.forEach(o),ar=c(qe),jo=a(qe,"P",{});var Md=s(jo);sr=i(Md,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Md.forEach(o),qe.forEach(o),$.forEach(o),Fn=c(t),se=a(t,"H2",{class:!0});var ea=s(se);ve=a(ea,"A",{id:!0,class:!0,href:!0});var jd=s(ve);Ao=a(jd,"SPAN",{});var Ad=s(Ao);f(st.$$.fragment,Ad),Ad.forEach(o),jd.forEach(o),rr=c(ea),No=a(ea,"SPAN",{});var Nd=s(No);ir=i(Nd,"PLBartModel"),Nd.forEach(o),ea.forEach(o),Mn=c(t),N=a(t,"DIV",{class:!0});var $e=s(N);f(rt.$$.fragment,$e),dr=c($e),it=a($e,"P",{});var ta=s(it);lr=i(ta,`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Xt=a(ta,"A",{href:!0});var Sd=s(Xt);cr=i(Sd,"PreTrainedModel"),Sd.forEach(o),pr=i(ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ta.forEach(o),hr=c($e),dt=a($e,"P",{});var oa=s(dt);ur=i(oa,"This model is also a PyTorch "),lt=a(oa,"A",{href:!0,rel:!0});var Id=s(lt);mr=i(Id,"torch.nn.Module"),Id.forEach(o),fr=i(oa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oa.forEach(o),gr=c($e),j=a($e,"DIV",{class:!0});var K=s(j);f(ct.$$.fragment,K),_r=c(K),re=a(K,"P",{});var eo=s(re);br=i(eo,"The "),Gt=a(eo,"A",{href:!0});var Dd=s(Gt);kr=i(Dd,"PLBartModel"),Dd.forEach(o),vr=i(eo," forward method, overrides the "),So=a(eo,"CODE",{});var Od=s(So);Tr=i(Od,"__call__"),Od.forEach(o),yr=i(eo," special method."),eo.forEach(o),Pr=c(K),f(Te.$$.fragment,K),wr=c(K),Io=a(K,"P",{});var Xd=s(Io);Lr=i(Xd,"Example:"),Xd.forEach(o),zr=c(K),f(pt.$$.fragment,K),K.forEach(o),$e.forEach(o),jn=c(t),ie=a(t,"H2",{class:!0});var na=s(ie);ye=a(na,"A",{id:!0,class:!0,href:!0});var Gd=s(ye);Do=a(Gd,"SPAN",{});var Rd=s(Do);f(ht.$$.fragment,Rd),Rd.forEach(o),Gd.forEach(o),Br=c(na),Oo=a(na,"SPAN",{});var Wd=s(Oo);qr=i(Wd,"PLBartForConditionalGeneration"),Wd.forEach(o),na.forEach(o),An=c(t),S=a(t,"DIV",{class:!0});var xe=s(S);f(ut.$$.fragment,xe),$r=c(xe),mt=a(xe,"P",{});var aa=s(mt);xr=i(aa,`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Rt=a(aa,"A",{href:!0});var Ud=s(Rt);Cr=i(Ud,"PreTrainedModel"),Ud.forEach(o),Er=i(aa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aa.forEach(o),Fr=c(xe),ft=a(xe,"P",{});var sa=s(ft);Mr=i(sa,"This model is also a PyTorch "),gt=a(sa,"A",{href:!0,rel:!0});var Hd=s(gt);jr=i(Hd,"torch.nn.Module"),Hd.forEach(o),Ar=i(sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa.forEach(o),Nr=c(xe),L=a(xe,"DIV",{class:!0});var x=s(L);f(_t.$$.fragment,x),Sr=c(x),de=a(x,"P",{});var to=s(de);Ir=i(to,"The "),Wt=a(to,"A",{href:!0});var Vd=s(Wt);Dr=i(Vd,"PLBartForConditionalGeneration"),Vd.forEach(o),Or=i(to," forward method, overrides the "),Xo=a(to,"CODE",{});var Kd=s(Xo);Xr=i(Kd,"__call__"),Kd.forEach(o),Gr=i(to," special method."),to.forEach(o),Rr=c(x),f(Pe.$$.fragment,x),Wr=c(x),Go=a(x,"P",{});var Qd=s(Go);Ur=i(Qd,"Token in-filling example:"),Qd.forEach(o),Hr=c(x),Ro=a(x,"BLOCKQUOTE",{});var Jd=s(Ro);Wo=a(Jd,"BLOCKQUOTE",{});var Yd=s(Wo);Uo=a(Yd,"BLOCKQUOTE",{});var Zd=s(Uo);Ho=a(Zd,"P",{});var el=s(Ho);Vr=i(el,"from transformers import PLBartTokenizer, PLBartForConditionalGeneration, PLBartConfig"),el.forEach(o),Zd.forEach(o),Yd.forEach(o),Jd.forEach(o),Kr=c(x),Vo=a(x,"BLOCKQUOTE",{});var tl=s(Vo);Ko=a(tl,"BLOCKQUOTE",{});var ol=s(Ko);Qo=a(ol,"BLOCKQUOTE",{});var nl=s(Qo);Jo=a(nl,"P",{});var al=s(Jo);Qr=i(al,`model = PLBartForConditionalGeneration.from_pretrained(\u2018uclanlp/plbart-base\u2019) >>> tokenizer =
PLBartTokenizer.from_pretrained(\u2018uclanlp/plbart-base\u2019, src_lang=\u2018java\u2019, tgt_lang=\u2018java\u2019) >>> METHOD_TO_FILL =
\u201Cpublic static main (String args[0]) { data=Date(); System.out. String.format(\u201CCurrent Date : % tc\u201D, ));}\u201D >>>
inputs = tokenizer([METHOD_TO_FILL], max_length=1024, return_tensors=\u2018pt\u2019) >>> # Generate Filled Code >>>
generated_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True) >>>
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in
generated_ids])`),al.forEach(o),nl.forEach(o),ol.forEach(o),tl.forEach(o),Jr=c(x),Yo=a(x,"P",{});var sl=s(Yo);Yr=i(sl,"Mask-filling example:"),sl.forEach(o),Zr=c(x),Zo=a(x,"BLOCKQUOTE",{});var rl=s(Zo);en=a(rl,"BLOCKQUOTE",{});var il=s(en);tn=a(il,"BLOCKQUOTE",{});var dl=s(tn);on=a(dl,"P",{});var ll=s(on);ei=i(ll,`from transformers import PLBartTokenizer, PLBartForConditionalGeneration >>> tokenizer =
PLBartTokenizer.from_pretrained(\u2018uclanlp/plbart-base\u2019) >>> # en_XX is the language symbol id <LID> for English
TXT = \u201D</s> Is 0 the <mask> Fibonacci <mask> ? </s> en_XX\u201D >>> model =
PLBartForConditionalGeneration.from_pretrained(\u2018uclanlp/plbart-base\u2019) >>> input_ids = tokenizer([TXT],
add_special_tokens=False, return_tensors=\u2018pt\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits >>>
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs = logits[0,
masked_index].softmax(dim=0) >>> values, predictions = probs.topk(5) >>> tokenizer.decode(predictions).split()`),ll.forEach(o),dl.forEach(o),il.forEach(o),rl.forEach(o),x.forEach(o),xe.forEach(o),Nn=c(t),le=a(t,"H2",{class:!0});var ra=s(le);we=a(ra,"A",{id:!0,class:!0,href:!0});var cl=s(we);nn=a(cl,"SPAN",{});var pl=s(nn);f(bt.$$.fragment,pl),pl.forEach(o),cl.forEach(o),ti=c(ra),an=a(ra,"SPAN",{});var hl=s(an);oi=i(hl,"PLBartForSequenceClassification"),hl.forEach(o),ra.forEach(o),Sn=c(t),E=a(t,"DIV",{class:!0});var Q=s(E);f(kt.$$.fragment,Q),ni=c(Q),sn=a(Q,"P",{});var ul=s(sn);ai=i(ul,`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),ul.forEach(o),si=c(Q),vt=a(Q,"P",{});var ia=s(vt);ri=i(ia,"This model inherits from "),Ut=a(ia,"A",{href:!0});var ml=s(Ut);ii=i(ml,"PreTrainedModel"),ml.forEach(o),di=i(ia,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ia.forEach(o),li=c(Q),Tt=a(Q,"P",{});var da=s(Tt);ci=i(da,"This model is also a PyTorch "),yt=a(da,"A",{href:!0,rel:!0});var fl=s(yt);pi=i(fl,"torch.nn.Module"),fl.forEach(o),hi=i(da,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),da.forEach(o),ui=c(Q),B=a(Q,"DIV",{class:!0});var A=s(B);f(Pt.$$.fragment,A),mi=c(A),ce=a(A,"P",{});var oo=s(ce);fi=i(oo,"The "),Ht=a(oo,"A",{href:!0});var gl=s(Ht);gi=i(gl,"PLBartForSequenceClassification"),gl.forEach(o),_i=i(oo," forward method, overrides the "),rn=a(oo,"CODE",{});var _l=s(rn);bi=i(_l,"__call__"),_l.forEach(o),ki=i(oo," special method."),oo.forEach(o),vi=c(A),f(Le.$$.fragment,A),Ti=c(A),dn=a(A,"P",{});var bl=s(dn);yi=i(bl,"Example of single-label classification:"),bl.forEach(o),Pi=c(A),f(wt.$$.fragment,A),wi=c(A),ln=a(A,"P",{});var kl=s(ln);Li=i(kl,"Example of multi-label classification:"),kl.forEach(o),zi=c(A),f(Lt.$$.fragment,A),A.forEach(o),Q.forEach(o),In=c(t),pe=a(t,"H2",{class:!0});var la=s(pe);ze=a(la,"A",{id:!0,class:!0,href:!0});var vl=s(ze);cn=a(vl,"SPAN",{});var Tl=s(cn);f(zt.$$.fragment,Tl),Tl.forEach(o),vl.forEach(o),Bi=c(la),pn=a(la,"SPAN",{});var yl=s(pn);qi=i(yl,"PLBartForCausalLM"),yl.forEach(o),la.forEach(o),Dn=c(t),he=a(t,"DIV",{class:!0});var ca=s(he);f(Bt.$$.fragment,ca),$i=c(ca),U=a(ca,"DIV",{class:!0});var no=s(U);f(qt.$$.fragment,no),xi=c(no),hn=a(no,"P",{});var Pl=s(hn);Ci=i(Pl,"Example:"),Pl.forEach(o),Ei=c(no),f($t.$$.fragment,no),no.forEach(o),ca.forEach(o),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(El)),d(P,"id","plbart"),d(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(P,"href","#plbart"),d(v,"class","relative group"),d(Ee,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),d(Ee,"rel","nofollow"),d(Fe,"href","https://www.github.com/gchhablani"),d(Fe,"rel","nofollow"),d(me,"id","overview-of-plbart"),d(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(me,"href","#overview-of-plbart"),d(Y,"class","relative group"),d(je,"href","https://arxiv.org/abs/2103.06333"),d(je,"rel","nofollow"),d(Ae,"href","https://huggingface.co/gchhablani"),d(Ae,"rel","nofollow"),d(Ne,"href","https://github.com/wasiahmad/PLBART"),d(Ne,"rel","nofollow"),d(fe,"id","training-of-plbart"),d(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(fe,"href","#training-of-plbart"),d(Z,"class","relative group"),d(Ie,"href","https://arxiv.org/abs/2103.06333"),d(Ie,"rel","nofollow"),d(De,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),d(Mt,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartTokenizer.as_target_tokenizer"),d(_e,"id","transformers.PLBartConfig"),d(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_e,"href","#transformers.PLBartConfig"),d(te,"class","relative group"),d(Nt,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartModel"),d(Ue,"href","https://huggingface.co/uclanlp/plbart-base"),d(Ue,"rel","nofollow"),d(St,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),d(It,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),d(C,"class","docstring"),d(be,"id","transformers.PLBartTokenizer"),d(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(be,"href","#transformers.PLBartTokenizer"),d(ae,"class","relative group"),d(Dt,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizer"),d(Ot,"href","/docs/transformers/master/en/model_doc/xlnet#transformers.XLNetTokenizer"),d(Qe,"href","https://github.com/google/sentencepiece"),d(Qe,"rel","nofollow"),d(ke,"class","docstring"),d(I,"class","docstring"),d(w,"class","docstring"),d(ve,"id","transformers.PLBartModel"),d(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ve,"href","#transformers.PLBartModel"),d(se,"class","relative group"),d(Xt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(lt,"rel","nofollow"),d(Gt,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartModel"),d(j,"class","docstring"),d(N,"class","docstring"),d(ye,"id","transformers.PLBartForConditionalGeneration"),d(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ye,"href","#transformers.PLBartForConditionalGeneration"),d(ie,"class","relative group"),d(Rt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(gt,"rel","nofollow"),d(Wt,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartForConditionalGeneration"),d(L,"class","docstring"),d(S,"class","docstring"),d(we,"id","transformers.PLBartForSequenceClassification"),d(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(we,"href","#transformers.PLBartForSequenceClassification"),d(le,"class","relative group"),d(Ut,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(yt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(yt,"rel","nofollow"),d(Ht,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartForSequenceClassification"),d(B,"class","docstring"),d(E,"class","docstring"),d(ze,"id","transformers.PLBartForCausalLM"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.PLBartForCausalLM"),d(pe,"class","relative group"),d(U,"class","docstring"),d(he,"class","docstring")},m(t,p){e(document.head,u),h(t,z,p),h(t,v,p),e(v,P),e(P,q),g(T,q,null),e(v,y),e(v,F),e(F,pa),h(t,fn,p),h(t,O,p),e(O,ao),e(ao,ha),e(O,ua),e(O,Ee),e(Ee,ma),e(O,fa),e(O,Fe),e(Fe,ga),e(O,_a),h(t,gn,p),h(t,Y,p),e(Y,me),e(me,so),g(Me,so,null),e(Y,ba),e(Y,ro),e(ro,ka),h(t,_n,p),h(t,G,p),e(G,va),e(G,je),e(je,Ta),e(G,ya),e(G,io),e(io,Pa),e(G,wa),h(t,bn,p),h(t,Et,p),e(Et,La),h(t,kn,p),h(t,Ft,p),e(Ft,lo),e(lo,za),h(t,vn,p),h(t,R,p),e(R,Ba),e(R,Ae),e(Ae,qa),e(R,$a),e(R,Ne),e(Ne,xa),e(R,Ca),h(t,Tn,p),h(t,Z,p),e(Z,fe),e(fe,co),g(Se,co,null),e(Z,Ea),e(Z,po),e(po,Fa),h(t,yn,p),h(t,M,p),e(M,Ma),e(M,ho),e(ho,ja),e(M,Aa),e(M,uo),e(uo,Na),e(M,Sa),e(M,mo),e(mo,Ia),e(M,Da),e(M,fo),e(fo,Oa),e(M,Xa),h(t,Pn,p),h(t,ge,p),e(ge,Ga),e(ge,Ie),e(Ie,Ra),e(ge,Wa),h(t,wn,p),h(t,W,p),e(W,Ua),e(W,De),e(De,go),e(go,Ha),e(De,Va),e(W,Ka),e(W,Mt),e(Mt,Qa),e(W,Ja),h(t,Ln,p),h(t,jt,p),e(jt,_o),e(_o,Ya),h(t,zn,p),g(Oe,t,p),h(t,Bn,p),h(t,At,p),e(At,Xe),e(Xe,bo),e(bo,Za),e(Xe,es),e(Xe,ee),e(ee,ts),e(ee,ko),e(ko,os),e(ee,ns),e(ee,vo),e(vo,as),e(ee,ss),h(t,qn,p),g(Ge,t,p),h(t,$n,p),h(t,te,p),e(te,_e),e(_e,To),g(Re,To,null),e(te,rs),e(te,yo),e(yo,is),h(t,xn,p),h(t,C,p),g(We,C,null),e(C,ds),e(C,oe),e(oe,ls),e(oe,Nt),e(Nt,cs),e(oe,ps),e(oe,Ue),e(Ue,hs),e(oe,us),e(C,ms),e(C,ne),e(ne,fs),e(ne,St),e(St,gs),e(ne,_s),e(ne,It),e(It,bs),e(ne,ks),e(C,vs),e(C,Po),e(Po,Ts),e(C,ys),g(He,C,null),h(t,Cn,p),h(t,ae,p),e(ae,be),e(be,wo),g(Ve,wo,null),e(ae,Ps),e(ae,Lo),e(Lo,ws),h(t,En,p),h(t,w,p),g(Ke,w,null),e(w,Ls),e(w,zo),e(zo,zs),e(w,Bs),e(w,X),e(X,qs),e(X,Dt),e(Dt,$s),e(X,xs),e(X,Ot),e(Ot,Cs),e(X,Es),e(X,Qe),e(Qe,Fs),e(X,Ms),e(w,js),e(w,Je),e(Je,As),e(Je,Bo),e(Bo,Ns),e(Je,Ss),e(w,Is),e(w,qo),e(qo,Ds),e(w,Os),g(Ye,w,null),e(w,Xs),e(w,ke),g(Ze,ke,null),e(ke,Gs),e(ke,$o),e($o,Rs),e(w,Ws),e(w,I),g(et,I,null),e(I,Us),e(I,tt),e(tt,Hs),e(tt,xo),e(xo,Vs),e(tt,Ks),e(I,Qs),e(I,ot),e(ot,nt),e(nt,Co),e(Co,Js),e(nt,Ys),e(nt,Eo),e(Eo,Zs),e(ot,er),e(ot,at),e(at,Fo),e(Fo,tr),e(at,or),e(at,Mo),e(Mo,nr),e(I,ar),e(I,jo),e(jo,sr),h(t,Fn,p),h(t,se,p),e(se,ve),e(ve,Ao),g(st,Ao,null),e(se,rr),e(se,No),e(No,ir),h(t,Mn,p),h(t,N,p),g(rt,N,null),e(N,dr),e(N,it),e(it,lr),e(it,Xt),e(Xt,cr),e(it,pr),e(N,hr),e(N,dt),e(dt,ur),e(dt,lt),e(lt,mr),e(dt,fr),e(N,gr),e(N,j),g(ct,j,null),e(j,_r),e(j,re),e(re,br),e(re,Gt),e(Gt,kr),e(re,vr),e(re,So),e(So,Tr),e(re,yr),e(j,Pr),g(Te,j,null),e(j,wr),e(j,Io),e(Io,Lr),e(j,zr),g(pt,j,null),h(t,jn,p),h(t,ie,p),e(ie,ye),e(ye,Do),g(ht,Do,null),e(ie,Br),e(ie,Oo),e(Oo,qr),h(t,An,p),h(t,S,p),g(ut,S,null),e(S,$r),e(S,mt),e(mt,xr),e(mt,Rt),e(Rt,Cr),e(mt,Er),e(S,Fr),e(S,ft),e(ft,Mr),e(ft,gt),e(gt,jr),e(ft,Ar),e(S,Nr),e(S,L),g(_t,L,null),e(L,Sr),e(L,de),e(de,Ir),e(de,Wt),e(Wt,Dr),e(de,Or),e(de,Xo),e(Xo,Xr),e(de,Gr),e(L,Rr),g(Pe,L,null),e(L,Wr),e(L,Go),e(Go,Ur),e(L,Hr),e(L,Ro),e(Ro,Wo),e(Wo,Uo),e(Uo,Ho),e(Ho,Vr),e(L,Kr),e(L,Vo),e(Vo,Ko),e(Ko,Qo),e(Qo,Jo),e(Jo,Qr),e(L,Jr),e(L,Yo),e(Yo,Yr),e(L,Zr),e(L,Zo),e(Zo,en),e(en,tn),e(tn,on),e(on,ei),h(t,Nn,p),h(t,le,p),e(le,we),e(we,nn),g(bt,nn,null),e(le,ti),e(le,an),e(an,oi),h(t,Sn,p),h(t,E,p),g(kt,E,null),e(E,ni),e(E,sn),e(sn,ai),e(E,si),e(E,vt),e(vt,ri),e(vt,Ut),e(Ut,ii),e(vt,di),e(E,li),e(E,Tt),e(Tt,ci),e(Tt,yt),e(yt,pi),e(Tt,hi),e(E,ui),e(E,B),g(Pt,B,null),e(B,mi),e(B,ce),e(ce,fi),e(ce,Ht),e(Ht,gi),e(ce,_i),e(ce,rn),e(rn,bi),e(ce,ki),e(B,vi),g(Le,B,null),e(B,Ti),e(B,dn),e(dn,yi),e(B,Pi),g(wt,B,null),e(B,wi),e(B,ln),e(ln,Li),e(B,zi),g(Lt,B,null),h(t,In,p),h(t,pe,p),e(pe,ze),e(ze,cn),g(zt,cn,null),e(pe,Bi),e(pe,pn),e(pn,qi),h(t,Dn,p),h(t,he,p),g(Bt,he,null),e(he,$i),e(he,U),g(qt,U,null),e(U,xi),e(U,hn),e(hn,Ci),e(U,Ei),g($t,U,null),On=!0},p(t,[p]){const xt={};p&2&&(xt.$$scope={dirty:p,ctx:t}),Te.$set(xt);const un={};p&2&&(un.$$scope={dirty:p,ctx:t}),Pe.$set(un);const mn={};p&2&&(mn.$$scope={dirty:p,ctx:t}),Le.$set(mn)},i(t){On||(_(T.$$.fragment,t),_(Me.$$.fragment,t),_(Se.$$.fragment,t),_(Oe.$$.fragment,t),_(Ge.$$.fragment,t),_(Re.$$.fragment,t),_(We.$$.fragment,t),_(He.$$.fragment,t),_(Ve.$$.fragment,t),_(Ke.$$.fragment,t),_(Ye.$$.fragment,t),_(Ze.$$.fragment,t),_(et.$$.fragment,t),_(st.$$.fragment,t),_(rt.$$.fragment,t),_(ct.$$.fragment,t),_(Te.$$.fragment,t),_(pt.$$.fragment,t),_(ht.$$.fragment,t),_(ut.$$.fragment,t),_(_t.$$.fragment,t),_(Pe.$$.fragment,t),_(bt.$$.fragment,t),_(kt.$$.fragment,t),_(Pt.$$.fragment,t),_(Le.$$.fragment,t),_(wt.$$.fragment,t),_(Lt.$$.fragment,t),_(zt.$$.fragment,t),_(Bt.$$.fragment,t),_(qt.$$.fragment,t),_($t.$$.fragment,t),On=!0)},o(t){b(T.$$.fragment,t),b(Me.$$.fragment,t),b(Se.$$.fragment,t),b(Oe.$$.fragment,t),b(Ge.$$.fragment,t),b(Re.$$.fragment,t),b(We.$$.fragment,t),b(He.$$.fragment,t),b(Ve.$$.fragment,t),b(Ke.$$.fragment,t),b(Ye.$$.fragment,t),b(Ze.$$.fragment,t),b(et.$$.fragment,t),b(st.$$.fragment,t),b(rt.$$.fragment,t),b(ct.$$.fragment,t),b(Te.$$.fragment,t),b(pt.$$.fragment,t),b(ht.$$.fragment,t),b(ut.$$.fragment,t),b(_t.$$.fragment,t),b(Pe.$$.fragment,t),b(bt.$$.fragment,t),b(kt.$$.fragment,t),b(Pt.$$.fragment,t),b(Le.$$.fragment,t),b(wt.$$.fragment,t),b(Lt.$$.fragment,t),b(zt.$$.fragment,t),b(Bt.$$.fragment,t),b(qt.$$.fragment,t),b($t.$$.fragment,t),On=!1},d(t){o(u),t&&o(z),t&&o(v),k(T),t&&o(fn),t&&o(O),t&&o(gn),t&&o(Y),k(Me),t&&o(_n),t&&o(G),t&&o(bn),t&&o(Et),t&&o(kn),t&&o(Ft),t&&o(vn),t&&o(R),t&&o(Tn),t&&o(Z),k(Se),t&&o(yn),t&&o(M),t&&o(Pn),t&&o(ge),t&&o(wn),t&&o(W),t&&o(Ln),t&&o(jt),t&&o(zn),k(Oe,t),t&&o(Bn),t&&o(At),t&&o(qn),k(Ge,t),t&&o($n),t&&o(te),k(Re),t&&o(xn),t&&o(C),k(We),k(He),t&&o(Cn),t&&o(ae),k(Ve),t&&o(En),t&&o(w),k(Ke),k(Ye),k(Ze),k(et),t&&o(Fn),t&&o(se),k(st),t&&o(Mn),t&&o(N),k(rt),k(ct),k(Te),k(pt),t&&o(jn),t&&o(ie),k(ht),t&&o(An),t&&o(S),k(ut),k(_t),k(Pe),t&&o(Nn),t&&o(le),k(bt),t&&o(Sn),t&&o(E),k(kt),k(Pt),k(Le),k(wt),k(Lt),t&&o(In),t&&o(pe),k(zt),t&&o(Dn),t&&o(he),k(Bt),k(qt),k($t)}}}const El={local:"plbart",sections:[{local:"overview-of-plbart",sections:[{local:"training-of-plbart",title:"Training of PLBart"}],title:"Overview of PLBart"},{local:"transformers.PLBartConfig",title:"PLBartConfig"},{local:"transformers.PLBartTokenizer",title:"PLBartTokenizer"},{local:"transformers.PLBartModel",title:"PLBartModel"},{local:"transformers.PLBartForConditionalGeneration",title:"PLBartForConditionalGeneration"},{local:"transformers.PLBartForSequenceClassification",title:"PLBartForSequenceClassification"},{local:"transformers.PLBartForCausalLM",title:"PLBartForCausalLM"}],title:"PLBart"};function Fl(J,u,z){let{fw:v}=u;return J.$$set=P=>{"fw"in P&&z(0,v=P.fw)},[v]}class Dl extends wl{constructor(u){super();Ll(this,u,Fl,Cl,zl,{fw:0})}}export{Dl as default,El as metadata};
