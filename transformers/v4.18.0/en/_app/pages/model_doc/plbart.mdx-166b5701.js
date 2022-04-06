import{S as Kd,i as Qd,s as Yd,e as n,k as l,w as m,t as r,M as Zd,c as s,d as o,m as c,a,x as f,h as i,b as d,F as e,g as h,y as g,q as _,o as b,B as k,v as el}from"../../chunks/vendor-6b77c823.js";import{T as ki}from"../../chunks/Tip-39098574.js";import{D as O}from"../../chunks/Docstring-abef54e3.js";import{C as X}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ue}from"../../chunks/IconCopyLink-7a11ce68.js";function tl(me){let u,B,v,L,z;return{c(){u=n("p"),B=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),L=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var T=a(u);B=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(T,"CODE",{});var C=a(v);L=i(C,"Module"),C.forEach(o),z=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(y,T){h(y,u,T),e(u,B),e(u,v),e(v,L),e(u,z)},d(y){y&&o(u)}}}function ol(me){let u,B,v,L,z;return{c(){u=n("p"),B=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),L=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var T=a(u);B=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(T,"CODE",{});var C=a(v);L=i(C,"Module"),C.forEach(o),z=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(y,T){h(y,u,T),e(u,B),e(u,v),e(v,L),e(u,z)},d(y){y&&o(u)}}}function nl(me){let u,B,v,L,z;return{c(){u=n("p"),B=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),L=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var T=a(u);B=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(T,"CODE",{});var C=a(v);L=i(C,"Module"),C.forEach(o),z=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(o)},m(y,T){h(y,u,T),e(u,B),e(u,v),e(v,L),e(u,z)},d(y){y&&o(u)}}}function sl(me){let u,B,v,L,z,y,T,C,ts,sn,I,io,os,ns,Ce,ss,as,je,rs,is,an,Y,fe,lo,Ee,ds,co,ls,rn,G,cs,Me,ps,hs,po,us,ms,dn,Mt,fs,ln,St,ho,gs,cn,R,_s,Se,bs,ks,Ae,vs,ys,pn,Z,ge,uo,Ne,Ts,mo,ws,hn,j,Ps,fo,Ls,qs,go,zs,Bs,_o,$s,xs,bo,Fs,Cs,un,_e,js,Oe,Es,Ms,mn,W,Ss,Ie,ko,As,Ns,Os,At,Is,Ds,fn,Nt,vo,Xs,gn,De,_n,Ot,Xe,yo,Gs,Rs,ee,Ws,To,Hs,Us,wo,Vs,Js,bn,Ge,kn,te,be,Po,Re,Ks,Lo,Qs,vn,x,We,Ys,oe,Zs,It,ea,ta,He,oa,na,sa,ne,aa,Dt,ra,ia,Xt,da,la,ca,qo,pa,ha,Ue,yn,se,ke,zo,Ve,ua,Bo,ma,Tn,P,Je,fa,$o,ga,_a,D,ba,Gt,ka,va,Rt,ya,Ta,Ke,wa,Pa,La,Qe,qa,xo,za,Ba,$a,Fo,xa,Fa,Ye,Ca,ve,Ze,ja,Co,Ea,Ma,N,et,Sa,tt,Aa,jo,Na,Oa,Ia,ot,nt,Eo,Da,Xa,Mo,Ga,Ra,st,So,Wa,Ha,Ao,Ua,Va,No,Ja,wn,ae,ye,Oo,at,Ka,Io,Qa,Pn,S,rt,Ya,it,Za,Wt,er,tr,or,dt,nr,lt,sr,ar,rr,E,ct,ir,re,dr,Ht,lr,cr,Do,pr,hr,ur,Te,mr,Xo,fr,gr,pt,Ln,ie,we,Go,ht,_r,Ro,br,qn,A,ut,kr,mt,vr,Ut,yr,Tr,wr,ft,Pr,gt,Lr,qr,zr,M,_t,Br,de,$r,Vt,xr,Fr,Wo,Cr,jr,Er,Pe,Mr,Ho,Sr,Ar,bt,zn,le,Le,Uo,kt,Nr,Vo,Or,Bn,F,vt,Ir,Jo,Dr,Xr,yt,Gr,Jt,Rr,Wr,Hr,Tt,Ur,wt,Vr,Jr,Kr,w,Pt,Qr,ce,Yr,Kt,Zr,ei,Ko,ti,oi,ni,qe,si,Qo,ai,ri,Lt,ii,qt,di,Yo,li,ci,zt,pi,Bt,$n,pe,ze,Zo,$t,hi,en,ui,xn,he,xt,mi,H,Ft,fi,tn,gi,_i,Ct,Fn;return y=new ue({}),Ee=new ue({}),Ne=new ue({}),De=new X({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs)`}}),Ge=new X({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

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
<span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>`}}),Re=new ue({}),We=new O({props:{name:"class transformers.PLBartConfig",anchor:"transformers.PLBartConfig",parameters:[{name:"vocab_size",val:" = 50005"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 6"},{name:"encoder_ffn_dim",val:" = 3072"},{name:"encoder_attention_heads",val:" = 12"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 3072"},{name:"decoder_attention_heads",val:" = 12"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/plbart/configuration_plbart.py#L32",parametersDescription:[{anchor:"transformers.PLBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50005) &#x2014;
Vocabulary size of the PLBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartModel">PLBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.PLBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Ue=new X({props:{code:`from transformers import PLBartModel, PLBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ve=new ue({}),Je=new O({props:{name:"class transformers.PLBartTokenizer",anchor:"transformers.PLBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"language_codes",val:" = 'base'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/plbart/tokenization_plbart.py#L75",parametersDescription:[{anchor:"transformers.PLBartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Ye=new X({props:{code:`from transformers import PLBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Ze=new O({props:{name:"as_target_tokenizer",anchor:"transformers.PLBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/plbart/tokenization_plbart.py#L422"}}),et=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/plbart/tokenization_plbart.py#L302",parametersDescription:[{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),at=new ue({}),rt=new O({props:{name:"class transformers.PLBartModel",anchor:"transformers.PLBartModel",parameters:[{name:"config",val:": PLBartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/plbart/modeling_plbart.py#L1112",parametersDescription:[{anchor:"transformers.PLBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ct=new O({props:{name:"forward",anchor:"transformers.PLBartModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/plbart/modeling_plbart.py#L1138",parametersDescription:[{anchor:"transformers.PLBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PLBartModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> ( &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Te=new ki({props:{$$slots:{default:[tl]},$$scope:{ctx:me}}}),pt=new X({props:{code:`from transformers import PLBartTokenizer, PLBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ht=new ue({}),ut=new O({props:{name:"class transformers.PLBartForConditionalGeneration",anchor:"transformers.PLBartForConditionalGeneration",parameters:[{name:"config",val:": PLBartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/plbart/modeling_plbart.py#L1228",parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_t=new O({props:{name:"forward",anchor:"transformers.PLBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/plbart/modeling_plbart.py#L1271",parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PLBartForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> ( &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PLBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pe=new ki({props:{$$slots:{default:[ol]},$$scope:{ctx:me}}}),bt=new X({props:{code:`from transformers import PLBartTokenizer, PLBartForConditionalGeneration

model = PLBartForConditionalGeneration.from_pretrained("uclanlp/plbart-base")
tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")

# en_XX is the language symbol id <LID> for English
TXT = "<s> Is 0 the <mask> Fibonacci number ? </s> en_XX"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="pt").input_ids

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># en_XX is the language symbol id &lt;LID&gt; for English</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;s&gt; Is 0 the &lt;mask&gt; Fibonacci number ? &lt;/s&gt; en_XX&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;same&#x27;</span>, <span class="hljs-string">&#x27;first&#x27;</span>, <span class="hljs-string">&#x27;highest&#x27;</span>, <span class="hljs-string">&#x27;result&#x27;</span>, <span class="hljs-string">&#x27;Fib&#x27;</span>]`}}),kt=new ue({}),vt=new O({props:{name:"class transformers.PLBartForSequenceClassification",anchor:"transformers.PLBartForSequenceClassification",parameters:[{name:"config",val:": PLBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/plbart/modeling_plbart.py#L1397",parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pt=new O({props:{name:"forward",anchor:"transformers.PLBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/plbart/modeling_plbart.py#L1410",parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PLBartForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> ( &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PLBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new ki({props:{$$slots:{default:[nl]},$$scope:{ctx:me}}}),Lt=new X({props:{code:`import torch
from transformers import PLBartTokenizer, PLBartForSequenceClassification

tokenizer = PLBartTokenizer.from_pretrained("hf-internal-testing/tiny-plbart")
model = PLBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-plbart")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),qt=new X({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = PLBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-plbart", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),zt=new X({props:{code:`import torch
from transformers import PLBartTokenizer, PLBartForSequenceClassification

tokenizer = PLBartTokenizer.from_pretrained("hf-internal-testing/tiny-plbart")
model = PLBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-plbart", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),Bt=new X({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = PLBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-plbart", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),$t=new ue({}),xt=new O({props:{name:"class transformers.PLBartForCausalLM",anchor:"transformers.PLBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/plbart/modeling_plbart.py#L1534"}}),Ft=new O({props:{name:"forward",anchor:"transformers.PLBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/plbart/modeling_plbart.py#L1565",parametersDescription:[{anchor:"transformers.PLBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
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
`}}),Ct=new X({props:{code:`from transformers import PLBartTokenizer, PLBartForCausalLM

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartForCausalLM.from_pretrained("uclanlp/plbart-base", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){u=n("meta"),B=l(),v=n("h1"),L=n("a"),z=n("span"),m(y.$$.fragment),T=l(),C=n("span"),ts=r("PLBart"),sn=l(),I=n("p"),io=n("strong"),os=r("DISCLAIMER:"),ns=r(" If you see something strange, file a "),Ce=n("a"),ss=r("Github Issue"),as=r(` and assign
`),je=n("a"),rs=r("@gchhablani"),is=r("."),an=l(),Y=n("h2"),fe=n("a"),lo=n("span"),m(Ee.$$.fragment),ds=l(),co=n("span"),ls=r("Overview of PLBart"),rn=l(),G=n("p"),cs=r("The PLBART model was proposed in "),Me=n("a"),ps=r("Unified Pre-training for Program Understanding and Generation"),hs=r(` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),po=n("code"),us=r("plbart-base"),ms=r(` has been trained using multilingual denoising task
on Java, Python and English.`),dn=l(),Mt=n("p"),fs=r("According to the abstract"),ln=l(),St=n("p"),ho=n("em"),gs=r(`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),cn=l(),R=n("p"),_s=r("This model was contributed by "),Se=n("a"),bs=r("gchhablani"),ks=r(". The Authors\u2019 code can be found "),Ae=n("a"),vs=r("here"),ys=r("."),pn=l(),Z=n("h3"),ge=n("a"),uo=n("span"),m(Ne.$$.fragment),Ts=l(),mo=n("span"),ws=r("Training of PLBart"),hn=l(),j=n("p"),Ps=r(`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),fo=n("code"),Ls=r("X [eos, src_lang_code]"),qs=r(" where "),go=n("code"),zs=r("X"),Bs=r(` is the source text. The
target text format is `),_o=n("code"),$s=r("[tgt_lang_code] X [eos]"),xs=r(". "),bo=n("code"),Fs=r("bos"),Cs=r(" is never used."),un=l(),_e=n("p"),js=r("However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Oe=n("a"),Es=r("the paper"),Ms=r(" to learn more about this."),mn=l(),W=n("p"),Ss=r("In cases where the language code is needed, The regular "),Ie=n("a"),ko=n("strong"),As=r("call"),Ns=r("()"),Os=r(` will encode source text format, and it should be wrapped
inside the context manager `),At=n("a"),Is=r("as_target_tokenizer()"),Ds=r(" to encode target text format."),fn=l(),Nt=n("ul"),vo=n("li"),Xs=r("Supervised training"),gn=l(),m(De.$$.fragment),_n=l(),Ot=n("ul"),Xe=n("li"),yo=n("p"),Gs=r("Generation"),Rs=l(),ee=n("p"),Ws=r("While generating the target text set the "),To=n("code"),Hs=r("decoder_start_token_id"),Us=r(` to the target language id. The following
example shows how to translate Python to English using the `),wo=n("code"),Vs=r("uclanlp/plbart-python-en_XX"),Js=r(" model."),bn=l(),m(Ge.$$.fragment),kn=l(),te=n("h2"),be=n("a"),Po=n("span"),m(Re.$$.fragment),Ks=l(),Lo=n("span"),Qs=r("PLBartConfig"),vn=l(),x=n("div"),m(We.$$.fragment),Ys=l(),oe=n("p"),Zs=r("This is the configuration class to store the configuration of a "),It=n("a"),ea=r("PLBartModel"),ta=r(`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),He=n("a"),oa=r("uclanlp/plbart-base"),na=r(" architecture."),sa=l(),ne=n("p"),aa=r("Configuration objects inherit from "),Dt=n("a"),ra=r("PretrainedConfig"),ia=r(` and can be used to control the model outputs. Read the
documentation from `),Xt=n("a"),da=r("PretrainedConfig"),la=r(" for more information."),ca=l(),qo=n("p"),pa=r("Example:"),ha=l(),m(Ue.$$.fragment),yn=l(),se=n("h2"),ke=n("a"),zo=n("span"),m(Ve.$$.fragment),ua=l(),Bo=n("span"),ma=r("PLBartTokenizer"),Tn=l(),P=n("div"),m(Je.$$.fragment),fa=l(),$o=n("p"),ga=r("Construct an PLBART tokenizer."),_a=l(),D=n("p"),ba=r("Adapted from "),Gt=n("a"),ka=r("RobertaTokenizer"),va=r(" and "),Rt=n("a"),ya=r("XLNetTokenizer"),Ta=r(`. Based on
`),Ke=n("a"),wa=r("SentencePiece"),Pa=r("."),La=l(),Qe=n("p"),qa=r("The tokenization method is "),xo=n("code"),za=r("<tokens> <eos> <language code>"),Ba=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),$a=l(),Fo=n("p"),xa=r("Examples:"),Fa=l(),m(Ye.$$.fragment),Ca=l(),ve=n("div"),m(Ze.$$.fragment),ja=l(),Co=n("p"),Ea=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Ma=l(),N=n("div"),m(et.$$.fragment),Sa=l(),tt=n("p"),Aa=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),jo=n("code"),Na=r("X"),Oa=r(" represents the sequence:"),Ia=l(),ot=n("ul"),nt=n("li"),Eo=n("code"),Da=r("input_ids"),Xa=r(" (for encoder) "),Mo=n("code"),Ga=r("X [eos, src_lang_code]"),Ra=l(),st=n("li"),So=n("code"),Wa=r("decoder_input_ids"),Ha=r(": (for decoder) "),Ao=n("code"),Ua=r("X [eos, tgt_lang_code]"),Va=l(),No=n("p"),Ja=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),wn=l(),ae=n("h2"),ye=n("a"),Oo=n("span"),m(at.$$.fragment),Ka=l(),Io=n("span"),Qa=r("PLBartModel"),Pn=l(),S=n("div"),m(rt.$$.fragment),Ya=l(),it=n("p"),Za=r(`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Wt=n("a"),er=r("PreTrainedModel"),tr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),or=l(),dt=n("p"),nr=r("This model is also a PyTorch "),lt=n("a"),sr=r("torch.nn.Module"),ar=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rr=l(),E=n("div"),m(ct.$$.fragment),ir=l(),re=n("p"),dr=r("The "),Ht=n("a"),lr=r("PLBartModel"),cr=r(" forward method, overrides the "),Do=n("code"),pr=r("__call__"),hr=r(" special method."),ur=l(),m(Te.$$.fragment),mr=l(),Xo=n("p"),fr=r("Example:"),gr=l(),m(pt.$$.fragment),Ln=l(),ie=n("h2"),we=n("a"),Go=n("span"),m(ht.$$.fragment),_r=l(),Ro=n("span"),br=r("PLBartForConditionalGeneration"),qn=l(),A=n("div"),m(ut.$$.fragment),kr=l(),mt=n("p"),vr=r(`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Ut=n("a"),yr=r("PreTrainedModel"),Tr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wr=l(),ft=n("p"),Pr=r("This model is also a PyTorch "),gt=n("a"),Lr=r("torch.nn.Module"),qr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zr=l(),M=n("div"),m(_t.$$.fragment),Br=l(),de=n("p"),$r=r("The "),Vt=n("a"),xr=r("PLBartForConditionalGeneration"),Fr=r(" forward method, overrides the "),Wo=n("code"),Cr=r("__call__"),jr=r(" special method."),Er=l(),m(Pe.$$.fragment),Mr=l(),Ho=n("p"),Sr=r("Mask-filling example:"),Ar=l(),m(bt.$$.fragment),zn=l(),le=n("h2"),Le=n("a"),Uo=n("span"),m(kt.$$.fragment),Nr=l(),Vo=n("span"),Or=r("PLBartForSequenceClassification"),Bn=l(),F=n("div"),m(vt.$$.fragment),Ir=l(),Jo=n("p"),Dr=r(`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),Xr=l(),yt=n("p"),Gr=r("This model inherits from "),Jt=n("a"),Rr=r("PreTrainedModel"),Wr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hr=l(),Tt=n("p"),Ur=r("This model is also a PyTorch "),wt=n("a"),Vr=r("torch.nn.Module"),Jr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kr=l(),w=n("div"),m(Pt.$$.fragment),Qr=l(),ce=n("p"),Yr=r("The "),Kt=n("a"),Zr=r("PLBartForSequenceClassification"),ei=r(" forward method, overrides the "),Ko=n("code"),ti=r("__call__"),oi=r(" special method."),ni=l(),m(qe.$$.fragment),si=l(),Qo=n("p"),ai=r("Example of single-label classification:"),ri=l(),m(Lt.$$.fragment),ii=l(),m(qt.$$.fragment),di=l(),Yo=n("p"),li=r("Example of multi-label classification:"),ci=l(),m(zt.$$.fragment),pi=l(),m(Bt.$$.fragment),$n=l(),pe=n("h2"),ze=n("a"),Zo=n("span"),m($t.$$.fragment),hi=l(),en=n("span"),ui=r("PLBartForCausalLM"),xn=l(),he=n("div"),m(xt.$$.fragment),mi=l(),H=n("div"),m(Ft.$$.fragment),fi=l(),tn=n("p"),gi=r("Example:"),_i=l(),m(Ct.$$.fragment),this.h()},l(t){const p=Zd('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(o),B=c(t),v=s(t,"H1",{class:!0});var jt=a(v);L=s(jt,"A",{id:!0,class:!0,href:!0});var on=a(L);z=s(on,"SPAN",{});var nn=a(z);f(y.$$.fragment,nn),nn.forEach(o),on.forEach(o),T=c(jt),C=s(jt,"SPAN",{});var vi=a(C);ts=i(vi,"PLBart"),vi.forEach(o),jt.forEach(o),sn=c(t),I=s(t,"P",{});var Et=a(I);io=s(Et,"STRONG",{});var yi=a(io);os=i(yi,"DISCLAIMER:"),yi.forEach(o),ns=i(Et," If you see something strange, file a "),Ce=s(Et,"A",{href:!0,rel:!0});var Ti=a(Ce);ss=i(Ti,"Github Issue"),Ti.forEach(o),as=i(Et,` and assign
`),je=s(Et,"A",{href:!0,rel:!0});var wi=a(je);rs=i(wi,"@gchhablani"),wi.forEach(o),is=i(Et,"."),Et.forEach(o),an=c(t),Y=s(t,"H2",{class:!0});var Cn=a(Y);fe=s(Cn,"A",{id:!0,class:!0,href:!0});var Pi=a(fe);lo=s(Pi,"SPAN",{});var Li=a(lo);f(Ee.$$.fragment,Li),Li.forEach(o),Pi.forEach(o),ds=c(Cn),co=s(Cn,"SPAN",{});var qi=a(co);ls=i(qi,"Overview of PLBart"),qi.forEach(o),Cn.forEach(o),rn=c(t),G=s(t,"P",{});var Qt=a(G);cs=i(Qt,"The PLBART model was proposed in "),Me=s(Qt,"A",{href:!0,rel:!0});var zi=a(Me);ps=i(zi,"Unified Pre-training for Program Understanding and Generation"),zi.forEach(o),hs=i(Qt,` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),po=s(Qt,"CODE",{});var Bi=a(po);us=i(Bi,"plbart-base"),Bi.forEach(o),ms=i(Qt,` has been trained using multilingual denoising task
on Java, Python and English.`),Qt.forEach(o),dn=c(t),Mt=s(t,"P",{});var $i=a(Mt);fs=i($i,"According to the abstract"),$i.forEach(o),ln=c(t),St=s(t,"P",{});var xi=a(St);ho=s(xi,"EM",{});var Fi=a(ho);gs=i(Fi,`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),Fi.forEach(o),xi.forEach(o),cn=c(t),R=s(t,"P",{});var Yt=a(R);_s=i(Yt,"This model was contributed by "),Se=s(Yt,"A",{href:!0,rel:!0});var Ci=a(Se);bs=i(Ci,"gchhablani"),Ci.forEach(o),ks=i(Yt,". The Authors\u2019 code can be found "),Ae=s(Yt,"A",{href:!0,rel:!0});var ji=a(Ae);vs=i(ji,"here"),ji.forEach(o),ys=i(Yt,"."),Yt.forEach(o),pn=c(t),Z=s(t,"H3",{class:!0});var jn=a(Z);ge=s(jn,"A",{id:!0,class:!0,href:!0});var Ei=a(ge);uo=s(Ei,"SPAN",{});var Mi=a(uo);f(Ne.$$.fragment,Mi),Mi.forEach(o),Ei.forEach(o),Ts=c(jn),mo=s(jn,"SPAN",{});var Si=a(mo);ws=i(Si,"Training of PLBart"),Si.forEach(o),jn.forEach(o),hn=c(t),j=s(t,"P",{});var U=a(j);Ps=i(U,`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),fo=s(U,"CODE",{});var Ai=a(fo);Ls=i(Ai,"X [eos, src_lang_code]"),Ai.forEach(o),qs=i(U," where "),go=s(U,"CODE",{});var Ni=a(go);zs=i(Ni,"X"),Ni.forEach(o),Bs=i(U,` is the source text. The
target text format is `),_o=s(U,"CODE",{});var Oi=a(_o);$s=i(Oi,"[tgt_lang_code] X [eos]"),Oi.forEach(o),xs=i(U,". "),bo=s(U,"CODE",{});var Ii=a(bo);Fs=i(Ii,"bos"),Ii.forEach(o),Cs=i(U," is never used."),U.forEach(o),un=c(t),_e=s(t,"P",{});var En=a(_e);js=i(En,"However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Oe=s(En,"A",{href:!0,rel:!0});var Di=a(Oe);Es=i(Di,"the paper"),Di.forEach(o),Ms=i(En," to learn more about this."),En.forEach(o),mn=c(t),W=s(t,"P",{});var Zt=a(W);Ss=i(Zt,"In cases where the language code is needed, The regular "),Ie=s(Zt,"A",{href:!0});var bi=a(Ie);ko=s(bi,"STRONG",{});var Xi=a(ko);As=i(Xi,"call"),Xi.forEach(o),Ns=i(bi,"()"),bi.forEach(o),Os=i(Zt,` will encode source text format, and it should be wrapped
inside the context manager `),At=s(Zt,"A",{href:!0});var Gi=a(At);Is=i(Gi,"as_target_tokenizer()"),Gi.forEach(o),Ds=i(Zt," to encode target text format."),Zt.forEach(o),fn=c(t),Nt=s(t,"UL",{});var Ri=a(Nt);vo=s(Ri,"LI",{});var Wi=a(vo);Xs=i(Wi,"Supervised training"),Wi.forEach(o),Ri.forEach(o),gn=c(t),f(De.$$.fragment,t),_n=c(t),Ot=s(t,"UL",{});var Hi=a(Ot);Xe=s(Hi,"LI",{});var Mn=a(Xe);yo=s(Mn,"P",{});var Ui=a(yo);Gs=i(Ui,"Generation"),Ui.forEach(o),Rs=c(Mn),ee=s(Mn,"P",{});var eo=a(ee);Ws=i(eo,"While generating the target text set the "),To=s(eo,"CODE",{});var Vi=a(To);Hs=i(Vi,"decoder_start_token_id"),Vi.forEach(o),Us=i(eo,` to the target language id. The following
example shows how to translate Python to English using the `),wo=s(eo,"CODE",{});var Ji=a(wo);Vs=i(Ji,"uclanlp/plbart-python-en_XX"),Ji.forEach(o),Js=i(eo," model."),eo.forEach(o),Mn.forEach(o),Hi.forEach(o),bn=c(t),f(Ge.$$.fragment,t),kn=c(t),te=s(t,"H2",{class:!0});var Sn=a(te);be=s(Sn,"A",{id:!0,class:!0,href:!0});var Ki=a(be);Po=s(Ki,"SPAN",{});var Qi=a(Po);f(Re.$$.fragment,Qi),Qi.forEach(o),Ki.forEach(o),Ks=c(Sn),Lo=s(Sn,"SPAN",{});var Yi=a(Lo);Qs=i(Yi,"PLBartConfig"),Yi.forEach(o),Sn.forEach(o),vn=c(t),x=s(t,"DIV",{class:!0});var V=a(x);f(We.$$.fragment,V),Ys=c(V),oe=s(V,"P",{});var to=a(oe);Zs=i(to,"This is the configuration class to store the configuration of a "),It=s(to,"A",{href:!0});var Zi=a(It);ea=i(Zi,"PLBartModel"),Zi.forEach(o),ta=i(to,`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),He=s(to,"A",{href:!0,rel:!0});var ed=a(He);oa=i(ed,"uclanlp/plbart-base"),ed.forEach(o),na=i(to," architecture."),to.forEach(o),sa=c(V),ne=s(V,"P",{});var oo=a(ne);aa=i(oo,"Configuration objects inherit from "),Dt=s(oo,"A",{href:!0});var td=a(Dt);ra=i(td,"PretrainedConfig"),td.forEach(o),ia=i(oo,` and can be used to control the model outputs. Read the
documentation from `),Xt=s(oo,"A",{href:!0});var od=a(Xt);da=i(od,"PretrainedConfig"),od.forEach(o),la=i(oo," for more information."),oo.forEach(o),ca=c(V),qo=s(V,"P",{});var nd=a(qo);pa=i(nd,"Example:"),nd.forEach(o),ha=c(V),f(Ue.$$.fragment,V),V.forEach(o),yn=c(t),se=s(t,"H2",{class:!0});var An=a(se);ke=s(An,"A",{id:!0,class:!0,href:!0});var sd=a(ke);zo=s(sd,"SPAN",{});var ad=a(zo);f(Ve.$$.fragment,ad),ad.forEach(o),sd.forEach(o),ua=c(An),Bo=s(An,"SPAN",{});var rd=a(Bo);ma=i(rd,"PLBartTokenizer"),rd.forEach(o),An.forEach(o),Tn=c(t),P=s(t,"DIV",{class:!0});var $=a(P);f(Je.$$.fragment,$),fa=c($),$o=s($,"P",{});var id=a($o);ga=i(id,"Construct an PLBART tokenizer."),id.forEach(o),_a=c($),D=s($,"P",{});var Be=a(D);ba=i(Be,"Adapted from "),Gt=s(Be,"A",{href:!0});var dd=a(Gt);ka=i(dd,"RobertaTokenizer"),dd.forEach(o),va=i(Be," and "),Rt=s(Be,"A",{href:!0});var ld=a(Rt);ya=i(ld,"XLNetTokenizer"),ld.forEach(o),Ta=i(Be,`. Based on
`),Ke=s(Be,"A",{href:!0,rel:!0});var cd=a(Ke);wa=i(cd,"SentencePiece"),cd.forEach(o),Pa=i(Be,"."),Be.forEach(o),La=c($),Qe=s($,"P",{});var Nn=a(Qe);qa=i(Nn,"The tokenization method is "),xo=s(Nn,"CODE",{});var pd=a(xo);za=i(pd,"<tokens> <eos> <language code>"),pd.forEach(o),Ba=i(Nn," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Nn.forEach(o),$a=c($),Fo=s($,"P",{});var hd=a(Fo);xa=i(hd,"Examples:"),hd.forEach(o),Fa=c($),f(Ye.$$.fragment,$),Ca=c($),ve=s($,"DIV",{class:!0});var On=a(ve);f(Ze.$$.fragment,On),ja=c(On),Co=s(On,"P",{});var ud=a(Co);Ea=i(ud,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),ud.forEach(o),On.forEach(o),Ma=c($),N=s($,"DIV",{class:!0});var $e=a(N);f(et.$$.fragment,$e),Sa=c($e),tt=s($e,"P",{});var In=a(tt);Aa=i(In,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),jo=s(In,"CODE",{});var md=a(jo);Na=i(md,"X"),md.forEach(o),Oa=i(In," represents the sequence:"),In.forEach(o),Ia=c($e),ot=s($e,"UL",{});var Dn=a(ot);nt=s(Dn,"LI",{});var Xn=a(nt);Eo=s(Xn,"CODE",{});var fd=a(Eo);Da=i(fd,"input_ids"),fd.forEach(o),Xa=i(Xn," (for encoder) "),Mo=s(Xn,"CODE",{});var gd=a(Mo);Ga=i(gd,"X [eos, src_lang_code]"),gd.forEach(o),Xn.forEach(o),Ra=c(Dn),st=s(Dn,"LI",{});var Gn=a(st);So=s(Gn,"CODE",{});var _d=a(So);Wa=i(_d,"decoder_input_ids"),_d.forEach(o),Ha=i(Gn,": (for decoder) "),Ao=s(Gn,"CODE",{});var bd=a(Ao);Ua=i(bd,"X [eos, tgt_lang_code]"),bd.forEach(o),Gn.forEach(o),Dn.forEach(o),Va=c($e),No=s($e,"P",{});var kd=a(No);Ja=i(kd,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),kd.forEach(o),$e.forEach(o),$.forEach(o),wn=c(t),ae=s(t,"H2",{class:!0});var Rn=a(ae);ye=s(Rn,"A",{id:!0,class:!0,href:!0});var vd=a(ye);Oo=s(vd,"SPAN",{});var yd=a(Oo);f(at.$$.fragment,yd),yd.forEach(o),vd.forEach(o),Ka=c(Rn),Io=s(Rn,"SPAN",{});var Td=a(Io);Qa=i(Td,"PLBartModel"),Td.forEach(o),Rn.forEach(o),Pn=c(t),S=s(t,"DIV",{class:!0});var xe=a(S);f(rt.$$.fragment,xe),Ya=c(xe),it=s(xe,"P",{});var Wn=a(it);Za=i(Wn,`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Wt=s(Wn,"A",{href:!0});var wd=a(Wt);er=i(wd,"PreTrainedModel"),wd.forEach(o),tr=i(Wn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wn.forEach(o),or=c(xe),dt=s(xe,"P",{});var Hn=a(dt);nr=i(Hn,"This model is also a PyTorch "),lt=s(Hn,"A",{href:!0,rel:!0});var Pd=a(lt);sr=i(Pd,"torch.nn.Module"),Pd.forEach(o),ar=i(Hn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hn.forEach(o),rr=c(xe),E=s(xe,"DIV",{class:!0});var J=a(E);f(ct.$$.fragment,J),ir=c(J),re=s(J,"P",{});var no=a(re);dr=i(no,"The "),Ht=s(no,"A",{href:!0});var Ld=a(Ht);lr=i(Ld,"PLBartModel"),Ld.forEach(o),cr=i(no," forward method, overrides the "),Do=s(no,"CODE",{});var qd=a(Do);pr=i(qd,"__call__"),qd.forEach(o),hr=i(no," special method."),no.forEach(o),ur=c(J),f(Te.$$.fragment,J),mr=c(J),Xo=s(J,"P",{});var zd=a(Xo);fr=i(zd,"Example:"),zd.forEach(o),gr=c(J),f(pt.$$.fragment,J),J.forEach(o),xe.forEach(o),Ln=c(t),ie=s(t,"H2",{class:!0});var Un=a(ie);we=s(Un,"A",{id:!0,class:!0,href:!0});var Bd=a(we);Go=s(Bd,"SPAN",{});var $d=a(Go);f(ht.$$.fragment,$d),$d.forEach(o),Bd.forEach(o),_r=c(Un),Ro=s(Un,"SPAN",{});var xd=a(Ro);br=i(xd,"PLBartForConditionalGeneration"),xd.forEach(o),Un.forEach(o),qn=c(t),A=s(t,"DIV",{class:!0});var Fe=a(A);f(ut.$$.fragment,Fe),kr=c(Fe),mt=s(Fe,"P",{});var Vn=a(mt);vr=i(Vn,`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Ut=s(Vn,"A",{href:!0});var Fd=a(Ut);yr=i(Fd,"PreTrainedModel"),Fd.forEach(o),Tr=i(Vn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vn.forEach(o),wr=c(Fe),ft=s(Fe,"P",{});var Jn=a(ft);Pr=i(Jn,"This model is also a PyTorch "),gt=s(Jn,"A",{href:!0,rel:!0});var Cd=a(gt);Lr=i(Cd,"torch.nn.Module"),Cd.forEach(o),qr=i(Jn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jn.forEach(o),zr=c(Fe),M=s(Fe,"DIV",{class:!0});var K=a(M);f(_t.$$.fragment,K),Br=c(K),de=s(K,"P",{});var so=a(de);$r=i(so,"The "),Vt=s(so,"A",{href:!0});var jd=a(Vt);xr=i(jd,"PLBartForConditionalGeneration"),jd.forEach(o),Fr=i(so," forward method, overrides the "),Wo=s(so,"CODE",{});var Ed=a(Wo);Cr=i(Ed,"__call__"),Ed.forEach(o),jr=i(so," special method."),so.forEach(o),Er=c(K),f(Pe.$$.fragment,K),Mr=c(K),Ho=s(K,"P",{});var Md=a(Ho);Sr=i(Md,"Mask-filling example:"),Md.forEach(o),Ar=c(K),f(bt.$$.fragment,K),K.forEach(o),Fe.forEach(o),zn=c(t),le=s(t,"H2",{class:!0});var Kn=a(le);Le=s(Kn,"A",{id:!0,class:!0,href:!0});var Sd=a(Le);Uo=s(Sd,"SPAN",{});var Ad=a(Uo);f(kt.$$.fragment,Ad),Ad.forEach(o),Sd.forEach(o),Nr=c(Kn),Vo=s(Kn,"SPAN",{});var Nd=a(Vo);Or=i(Nd,"PLBartForSequenceClassification"),Nd.forEach(o),Kn.forEach(o),Bn=c(t),F=s(t,"DIV",{class:!0});var Q=a(F);f(vt.$$.fragment,Q),Ir=c(Q),Jo=s(Q,"P",{});var Od=a(Jo);Dr=i(Od,`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),Od.forEach(o),Xr=c(Q),yt=s(Q,"P",{});var Qn=a(yt);Gr=i(Qn,"This model inherits from "),Jt=s(Qn,"A",{href:!0});var Id=a(Jt);Rr=i(Id,"PreTrainedModel"),Id.forEach(o),Wr=i(Qn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qn.forEach(o),Hr=c(Q),Tt=s(Q,"P",{});var Yn=a(Tt);Ur=i(Yn,"This model is also a PyTorch "),wt=s(Yn,"A",{href:!0,rel:!0});var Dd=a(wt);Vr=i(Dd,"torch.nn.Module"),Dd.forEach(o),Jr=i(Yn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yn.forEach(o),Kr=c(Q),w=s(Q,"DIV",{class:!0});var q=a(w);f(Pt.$$.fragment,q),Qr=c(q),ce=s(q,"P",{});var ao=a(ce);Yr=i(ao,"The "),Kt=s(ao,"A",{href:!0});var Xd=a(Kt);Zr=i(Xd,"PLBartForSequenceClassification"),Xd.forEach(o),ei=i(ao," forward method, overrides the "),Ko=s(ao,"CODE",{});var Gd=a(Ko);ti=i(Gd,"__call__"),Gd.forEach(o),oi=i(ao," special method."),ao.forEach(o),ni=c(q),f(qe.$$.fragment,q),si=c(q),Qo=s(q,"P",{});var Rd=a(Qo);ai=i(Rd,"Example of single-label classification:"),Rd.forEach(o),ri=c(q),f(Lt.$$.fragment,q),ii=c(q),f(qt.$$.fragment,q),di=c(q),Yo=s(q,"P",{});var Wd=a(Yo);li=i(Wd,"Example of multi-label classification:"),Wd.forEach(o),ci=c(q),f(zt.$$.fragment,q),pi=c(q),f(Bt.$$.fragment,q),q.forEach(o),Q.forEach(o),$n=c(t),pe=s(t,"H2",{class:!0});var Zn=a(pe);ze=s(Zn,"A",{id:!0,class:!0,href:!0});var Hd=a(ze);Zo=s(Hd,"SPAN",{});var Ud=a(Zo);f($t.$$.fragment,Ud),Ud.forEach(o),Hd.forEach(o),hi=c(Zn),en=s(Zn,"SPAN",{});var Vd=a(en);ui=i(Vd,"PLBartForCausalLM"),Vd.forEach(o),Zn.forEach(o),xn=c(t),he=s(t,"DIV",{class:!0});var es=a(he);f(xt.$$.fragment,es),mi=c(es),H=s(es,"DIV",{class:!0});var ro=a(H);f(Ft.$$.fragment,ro),fi=c(ro),tn=s(ro,"P",{});var Jd=a(tn);gi=i(Jd,"Example:"),Jd.forEach(o),_i=c(ro),f(Ct.$$.fragment,ro),ro.forEach(o),es.forEach(o),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(al)),d(L,"id","plbart"),d(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(L,"href","#plbart"),d(v,"class","relative group"),d(Ce,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),d(Ce,"rel","nofollow"),d(je,"href","https://www.github.com/gchhablani"),d(je,"rel","nofollow"),d(fe,"id","overview-of-plbart"),d(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(fe,"href","#overview-of-plbart"),d(Y,"class","relative group"),d(Me,"href","https://arxiv.org/abs/2103.06333"),d(Me,"rel","nofollow"),d(Se,"href","https://huggingface.co/gchhablani"),d(Se,"rel","nofollow"),d(Ae,"href","https://github.com/wasiahmad/PLBART"),d(Ae,"rel","nofollow"),d(ge,"id","training-of-plbart"),d(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ge,"href","#training-of-plbart"),d(Z,"class","relative group"),d(Oe,"href","https://arxiv.org/abs/2103.06333"),d(Oe,"rel","nofollow"),d(Ie,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),d(At,"href","/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartTokenizer.as_target_tokenizer"),d(be,"id","transformers.PLBartConfig"),d(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(be,"href","#transformers.PLBartConfig"),d(te,"class","relative group"),d(It,"href","/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartModel"),d(He,"href","https://huggingface.co/uclanlp/plbart-base"),d(He,"rel","nofollow"),d(Dt,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),d(Xt,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),d(x,"class","docstring"),d(ke,"id","transformers.PLBartTokenizer"),d(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ke,"href","#transformers.PLBartTokenizer"),d(se,"class","relative group"),d(Gt,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer"),d(Rt,"href","/docs/transformers/v4.18.0/en/model_doc/xlnet#transformers.XLNetTokenizer"),d(Ke,"href","https://github.com/google/sentencepiece"),d(Ke,"rel","nofollow"),d(ve,"class","docstring"),d(N,"class","docstring"),d(P,"class","docstring"),d(ye,"id","transformers.PLBartModel"),d(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ye,"href","#transformers.PLBartModel"),d(ae,"class","relative group"),d(Wt,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),d(lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(lt,"rel","nofollow"),d(Ht,"href","/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartModel"),d(E,"class","docstring"),d(S,"class","docstring"),d(we,"id","transformers.PLBartForConditionalGeneration"),d(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(we,"href","#transformers.PLBartForConditionalGeneration"),d(ie,"class","relative group"),d(Ut,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),d(gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(gt,"rel","nofollow"),d(Vt,"href","/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartForConditionalGeneration"),d(M,"class","docstring"),d(A,"class","docstring"),d(Le,"id","transformers.PLBartForSequenceClassification"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.PLBartForSequenceClassification"),d(le,"class","relative group"),d(Jt,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),d(wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(wt,"rel","nofollow"),d(Kt,"href","/docs/transformers/v4.18.0/en/model_doc/plbart#transformers.PLBartForSequenceClassification"),d(w,"class","docstring"),d(F,"class","docstring"),d(ze,"id","transformers.PLBartForCausalLM"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.PLBartForCausalLM"),d(pe,"class","relative group"),d(H,"class","docstring"),d(he,"class","docstring")},m(t,p){e(document.head,u),h(t,B,p),h(t,v,p),e(v,L),e(L,z),g(y,z,null),e(v,T),e(v,C),e(C,ts),h(t,sn,p),h(t,I,p),e(I,io),e(io,os),e(I,ns),e(I,Ce),e(Ce,ss),e(I,as),e(I,je),e(je,rs),e(I,is),h(t,an,p),h(t,Y,p),e(Y,fe),e(fe,lo),g(Ee,lo,null),e(Y,ds),e(Y,co),e(co,ls),h(t,rn,p),h(t,G,p),e(G,cs),e(G,Me),e(Me,ps),e(G,hs),e(G,po),e(po,us),e(G,ms),h(t,dn,p),h(t,Mt,p),e(Mt,fs),h(t,ln,p),h(t,St,p),e(St,ho),e(ho,gs),h(t,cn,p),h(t,R,p),e(R,_s),e(R,Se),e(Se,bs),e(R,ks),e(R,Ae),e(Ae,vs),e(R,ys),h(t,pn,p),h(t,Z,p),e(Z,ge),e(ge,uo),g(Ne,uo,null),e(Z,Ts),e(Z,mo),e(mo,ws),h(t,hn,p),h(t,j,p),e(j,Ps),e(j,fo),e(fo,Ls),e(j,qs),e(j,go),e(go,zs),e(j,Bs),e(j,_o),e(_o,$s),e(j,xs),e(j,bo),e(bo,Fs),e(j,Cs),h(t,un,p),h(t,_e,p),e(_e,js),e(_e,Oe),e(Oe,Es),e(_e,Ms),h(t,mn,p),h(t,W,p),e(W,Ss),e(W,Ie),e(Ie,ko),e(ko,As),e(Ie,Ns),e(W,Os),e(W,At),e(At,Is),e(W,Ds),h(t,fn,p),h(t,Nt,p),e(Nt,vo),e(vo,Xs),h(t,gn,p),g(De,t,p),h(t,_n,p),h(t,Ot,p),e(Ot,Xe),e(Xe,yo),e(yo,Gs),e(Xe,Rs),e(Xe,ee),e(ee,Ws),e(ee,To),e(To,Hs),e(ee,Us),e(ee,wo),e(wo,Vs),e(ee,Js),h(t,bn,p),g(Ge,t,p),h(t,kn,p),h(t,te,p),e(te,be),e(be,Po),g(Re,Po,null),e(te,Ks),e(te,Lo),e(Lo,Qs),h(t,vn,p),h(t,x,p),g(We,x,null),e(x,Ys),e(x,oe),e(oe,Zs),e(oe,It),e(It,ea),e(oe,ta),e(oe,He),e(He,oa),e(oe,na),e(x,sa),e(x,ne),e(ne,aa),e(ne,Dt),e(Dt,ra),e(ne,ia),e(ne,Xt),e(Xt,da),e(ne,la),e(x,ca),e(x,qo),e(qo,pa),e(x,ha),g(Ue,x,null),h(t,yn,p),h(t,se,p),e(se,ke),e(ke,zo),g(Ve,zo,null),e(se,ua),e(se,Bo),e(Bo,ma),h(t,Tn,p),h(t,P,p),g(Je,P,null),e(P,fa),e(P,$o),e($o,ga),e(P,_a),e(P,D),e(D,ba),e(D,Gt),e(Gt,ka),e(D,va),e(D,Rt),e(Rt,ya),e(D,Ta),e(D,Ke),e(Ke,wa),e(D,Pa),e(P,La),e(P,Qe),e(Qe,qa),e(Qe,xo),e(xo,za),e(Qe,Ba),e(P,$a),e(P,Fo),e(Fo,xa),e(P,Fa),g(Ye,P,null),e(P,Ca),e(P,ve),g(Ze,ve,null),e(ve,ja),e(ve,Co),e(Co,Ea),e(P,Ma),e(P,N),g(et,N,null),e(N,Sa),e(N,tt),e(tt,Aa),e(tt,jo),e(jo,Na),e(tt,Oa),e(N,Ia),e(N,ot),e(ot,nt),e(nt,Eo),e(Eo,Da),e(nt,Xa),e(nt,Mo),e(Mo,Ga),e(ot,Ra),e(ot,st),e(st,So),e(So,Wa),e(st,Ha),e(st,Ao),e(Ao,Ua),e(N,Va),e(N,No),e(No,Ja),h(t,wn,p),h(t,ae,p),e(ae,ye),e(ye,Oo),g(at,Oo,null),e(ae,Ka),e(ae,Io),e(Io,Qa),h(t,Pn,p),h(t,S,p),g(rt,S,null),e(S,Ya),e(S,it),e(it,Za),e(it,Wt),e(Wt,er),e(it,tr),e(S,or),e(S,dt),e(dt,nr),e(dt,lt),e(lt,sr),e(dt,ar),e(S,rr),e(S,E),g(ct,E,null),e(E,ir),e(E,re),e(re,dr),e(re,Ht),e(Ht,lr),e(re,cr),e(re,Do),e(Do,pr),e(re,hr),e(E,ur),g(Te,E,null),e(E,mr),e(E,Xo),e(Xo,fr),e(E,gr),g(pt,E,null),h(t,Ln,p),h(t,ie,p),e(ie,we),e(we,Go),g(ht,Go,null),e(ie,_r),e(ie,Ro),e(Ro,br),h(t,qn,p),h(t,A,p),g(ut,A,null),e(A,kr),e(A,mt),e(mt,vr),e(mt,Ut),e(Ut,yr),e(mt,Tr),e(A,wr),e(A,ft),e(ft,Pr),e(ft,gt),e(gt,Lr),e(ft,qr),e(A,zr),e(A,M),g(_t,M,null),e(M,Br),e(M,de),e(de,$r),e(de,Vt),e(Vt,xr),e(de,Fr),e(de,Wo),e(Wo,Cr),e(de,jr),e(M,Er),g(Pe,M,null),e(M,Mr),e(M,Ho),e(Ho,Sr),e(M,Ar),g(bt,M,null),h(t,zn,p),h(t,le,p),e(le,Le),e(Le,Uo),g(kt,Uo,null),e(le,Nr),e(le,Vo),e(Vo,Or),h(t,Bn,p),h(t,F,p),g(vt,F,null),e(F,Ir),e(F,Jo),e(Jo,Dr),e(F,Xr),e(F,yt),e(yt,Gr),e(yt,Jt),e(Jt,Rr),e(yt,Wr),e(F,Hr),e(F,Tt),e(Tt,Ur),e(Tt,wt),e(wt,Vr),e(Tt,Jr),e(F,Kr),e(F,w),g(Pt,w,null),e(w,Qr),e(w,ce),e(ce,Yr),e(ce,Kt),e(Kt,Zr),e(ce,ei),e(ce,Ko),e(Ko,ti),e(ce,oi),e(w,ni),g(qe,w,null),e(w,si),e(w,Qo),e(Qo,ai),e(w,ri),g(Lt,w,null),e(w,ii),g(qt,w,null),e(w,di),e(w,Yo),e(Yo,li),e(w,ci),g(zt,w,null),e(w,pi),g(Bt,w,null),h(t,$n,p),h(t,pe,p),e(pe,ze),e(ze,Zo),g($t,Zo,null),e(pe,hi),e(pe,en),e(en,ui),h(t,xn,p),h(t,he,p),g(xt,he,null),e(he,mi),e(he,H),g(Ft,H,null),e(H,fi),e(H,tn),e(tn,gi),e(H,_i),g(Ct,H,null),Fn=!0},p(t,[p]){const jt={};p&2&&(jt.$$scope={dirty:p,ctx:t}),Te.$set(jt);const on={};p&2&&(on.$$scope={dirty:p,ctx:t}),Pe.$set(on);const nn={};p&2&&(nn.$$scope={dirty:p,ctx:t}),qe.$set(nn)},i(t){Fn||(_(y.$$.fragment,t),_(Ee.$$.fragment,t),_(Ne.$$.fragment,t),_(De.$$.fragment,t),_(Ge.$$.fragment,t),_(Re.$$.fragment,t),_(We.$$.fragment,t),_(Ue.$$.fragment,t),_(Ve.$$.fragment,t),_(Je.$$.fragment,t),_(Ye.$$.fragment,t),_(Ze.$$.fragment,t),_(et.$$.fragment,t),_(at.$$.fragment,t),_(rt.$$.fragment,t),_(ct.$$.fragment,t),_(Te.$$.fragment,t),_(pt.$$.fragment,t),_(ht.$$.fragment,t),_(ut.$$.fragment,t),_(_t.$$.fragment,t),_(Pe.$$.fragment,t),_(bt.$$.fragment,t),_(kt.$$.fragment,t),_(vt.$$.fragment,t),_(Pt.$$.fragment,t),_(qe.$$.fragment,t),_(Lt.$$.fragment,t),_(qt.$$.fragment,t),_(zt.$$.fragment,t),_(Bt.$$.fragment,t),_($t.$$.fragment,t),_(xt.$$.fragment,t),_(Ft.$$.fragment,t),_(Ct.$$.fragment,t),Fn=!0)},o(t){b(y.$$.fragment,t),b(Ee.$$.fragment,t),b(Ne.$$.fragment,t),b(De.$$.fragment,t),b(Ge.$$.fragment,t),b(Re.$$.fragment,t),b(We.$$.fragment,t),b(Ue.$$.fragment,t),b(Ve.$$.fragment,t),b(Je.$$.fragment,t),b(Ye.$$.fragment,t),b(Ze.$$.fragment,t),b(et.$$.fragment,t),b(at.$$.fragment,t),b(rt.$$.fragment,t),b(ct.$$.fragment,t),b(Te.$$.fragment,t),b(pt.$$.fragment,t),b(ht.$$.fragment,t),b(ut.$$.fragment,t),b(_t.$$.fragment,t),b(Pe.$$.fragment,t),b(bt.$$.fragment,t),b(kt.$$.fragment,t),b(vt.$$.fragment,t),b(Pt.$$.fragment,t),b(qe.$$.fragment,t),b(Lt.$$.fragment,t),b(qt.$$.fragment,t),b(zt.$$.fragment,t),b(Bt.$$.fragment,t),b($t.$$.fragment,t),b(xt.$$.fragment,t),b(Ft.$$.fragment,t),b(Ct.$$.fragment,t),Fn=!1},d(t){o(u),t&&o(B),t&&o(v),k(y),t&&o(sn),t&&o(I),t&&o(an),t&&o(Y),k(Ee),t&&o(rn),t&&o(G),t&&o(dn),t&&o(Mt),t&&o(ln),t&&o(St),t&&o(cn),t&&o(R),t&&o(pn),t&&o(Z),k(Ne),t&&o(hn),t&&o(j),t&&o(un),t&&o(_e),t&&o(mn),t&&o(W),t&&o(fn),t&&o(Nt),t&&o(gn),k(De,t),t&&o(_n),t&&o(Ot),t&&o(bn),k(Ge,t),t&&o(kn),t&&o(te),k(Re),t&&o(vn),t&&o(x),k(We),k(Ue),t&&o(yn),t&&o(se),k(Ve),t&&o(Tn),t&&o(P),k(Je),k(Ye),k(Ze),k(et),t&&o(wn),t&&o(ae),k(at),t&&o(Pn),t&&o(S),k(rt),k(ct),k(Te),k(pt),t&&o(Ln),t&&o(ie),k(ht),t&&o(qn),t&&o(A),k(ut),k(_t),k(Pe),k(bt),t&&o(zn),t&&o(le),k(kt),t&&o(Bn),t&&o(F),k(vt),k(Pt),k(qe),k(Lt),k(qt),k(zt),k(Bt),t&&o($n),t&&o(pe),k($t),t&&o(xn),t&&o(he),k(xt),k(Ft),k(Ct)}}}const al={local:"plbart",sections:[{local:"overview-of-plbart",sections:[{local:"training-of-plbart",title:"Training of PLBart"}],title:"Overview of PLBart"},{local:"transformers.PLBartConfig",title:"PLBartConfig"},{local:"transformers.PLBartTokenizer",title:"PLBartTokenizer"},{local:"transformers.PLBartModel",title:"PLBartModel"},{local:"transformers.PLBartForConditionalGeneration",title:"PLBartForConditionalGeneration"},{local:"transformers.PLBartForSequenceClassification",title:"PLBartForSequenceClassification"},{local:"transformers.PLBartForCausalLM",title:"PLBartForCausalLM"}],title:"PLBart"};function rl(me){return el(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hl extends Kd{constructor(u){super();Qd(this,u,rl,sl,Yd,{})}}export{hl as default,al as metadata};
