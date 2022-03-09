import{S as Hd,i as Ud,s as Vd,e as n,k as l,w as m,t as r,M as Jd,c as s,d as o,m as c,a,x as f,h as i,b as d,F as e,g as h,y as g,q as _,o as b,B as k}from"../../chunks/vendor-4833417e.js";import{T as fi}from"../../chunks/Tip-fffd6df1.js";import{D as I}from"../../chunks/Docstring-4f315ed9.js";import{C as ue}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as me}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Kd(Q){let u,L,v,w,B;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=s(T,"P",{});var y=a(u);L=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(y,"CODE",{});var C=a(v);w=i(C,"Module"),C.forEach(o),B=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(o)},m(T,y){h(T,u,y),e(u,L),e(u,v),e(v,w),e(u,B)},d(T){T&&o(u)}}}function Qd(Q){let u,L,v,w,B;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=s(T,"P",{});var y=a(u);L=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(y,"CODE",{});var C=a(v);w=i(C,"Module"),C.forEach(o),B=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(o)},m(T,y){h(T,u,y),e(u,L),e(u,v),e(v,w),e(u,B)},d(T){T&&o(u)}}}function Yd(Q){let u,L,v,w,B;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=s(T,"P",{});var y=a(u);L=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(y,"CODE",{});var C=a(v);w=i(C,"Module"),C.forEach(o),B=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(o)},m(T,y){h(T,u,y),e(u,L),e(u,v),e(v,w),e(u,B)},d(T){T&&o(u)}}}function Zd(Q){let u,L,v,w,B,T,y,C,Zn,on,D,ao,es,ts,je,os,ns,Ee,ss,as,nn,Y,fe,ro,Fe,rs,io,is,sn,O,ds,Me,ls,cs,lo,ps,hs,an,Et,us,rn,Ft,co,ms,dn,G,fs,Ae,gs,_s,Ne,bs,ks,ln,Z,ge,po,Se,vs,ho,Ts,cn,j,ys,uo,ws,Ps,mo,Ls,zs,fo,Bs,qs,go,$s,xs,pn,_e,Cs,Ie,js,Es,hn,R,Fs,De,_o,Ms,As,Ns,Mt,Ss,Is,un,At,bo,Ds,mn,Xe,fn,Nt,Oe,ko,Xs,Os,ee,Gs,vo,Rs,Ws,To,Hs,Us,gn,Ge,_n,te,be,yo,Re,Vs,wo,Js,bn,$,We,Ks,oe,Qs,St,Ys,Zs,He,ea,ta,oa,ne,na,It,sa,aa,Dt,ra,ia,da,Po,la,ca,Ue,kn,se,ke,Lo,Ve,pa,zo,ha,vn,P,Je,ua,Bo,ma,fa,X,ga,Xt,_a,ba,Ot,ka,va,Ke,Ta,ya,wa,Qe,Pa,qo,La,za,Ba,$o,qa,$a,Ye,xa,ve,Ze,Ca,xo,ja,Ea,S,et,Fa,tt,Ma,Co,Aa,Na,Sa,ot,nt,jo,Ia,Da,Eo,Xa,Oa,st,Fo,Ga,Ra,Mo,Wa,Ha,Ao,Ua,Tn,ae,Te,No,at,Va,So,Ja,yn,A,rt,Ka,it,Qa,Gt,Ya,Za,er,dt,tr,lt,or,nr,sr,E,ct,ar,re,rr,Rt,ir,dr,Io,lr,cr,pr,ye,hr,Do,ur,mr,pt,wn,ie,we,Xo,ht,fr,Oo,gr,Pn,N,ut,_r,mt,br,Wt,kr,vr,Tr,ft,yr,gt,wr,Pr,Lr,F,_t,zr,de,Br,Ht,qr,$r,Go,xr,Cr,jr,Pe,Er,Ro,Fr,Mr,bt,Ln,le,Le,Wo,kt,Ar,Ho,Nr,zn,x,vt,Sr,Uo,Ir,Dr,Tt,Xr,Ut,Or,Gr,Rr,yt,Wr,wt,Hr,Ur,Vr,z,Pt,Jr,ce,Kr,Vt,Qr,Yr,Vo,Zr,ei,ti,ze,oi,Jo,ni,si,Lt,ai,Ko,ri,ii,zt,Bn,pe,Be,Qo,Bt,di,Yo,li,qn,he,qt,ci,W,$t,pi,Zo,hi,ui,xt,$n;return T=new me({}),Fe=new me({}),Se=new me({}),Xe=new ue({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs)`}}),Ge=new ue({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

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
<span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>`}}),Re=new me({}),We=new I({props:{name:"class transformers.PLBartConfig",anchor:"transformers.PLBartConfig",parameters:[{name:"vocab_size",val:" = 50005"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 6"},{name:"encoder_ffn_dim",val:" = 3072"},{name:"encoder_attention_heads",val:" = 12"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 3072"},{name:"decoder_attention_heads",val:" = 12"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/configuration_plbart.py#L32",parametersDescription:[{anchor:"transformers.PLBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50005) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Ue=new ue({props:{code:`from transformers import PLBartModel, PLBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ve=new me({}),Je=new I({props:{name:"class transformers.PLBartTokenizer",anchor:"transformers.PLBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"language_codes",val:" = 'base'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/tokenization_plbart.py#L75",parametersDescription:[{anchor:"transformers.PLBartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Ye=new ue({props:{code:`from transformers import PLBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Ze=new I({props:{name:"as_target_tokenizer",anchor:"transformers.PLBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/tokenization_plbart.py#L422"}}),et=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/tokenization_plbart.py#L302",parametersDescription:[{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),at=new me({}),rt=new I({props:{name:"class transformers.PLBartModel",anchor:"transformers.PLBartModel",parameters:[{name:"config",val:": PLBartConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1110",parametersDescription:[{anchor:"transformers.PLBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ct=new I({props:{name:"forward",anchor:"transformers.PLBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1136",parametersDescription:[{anchor:"transformers.PLBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ye=new fi({props:{$$slots:{default:[Kd]},$$scope:{ctx:Q}}}),pt=new ue({props:{code:`from transformers import PLBartTokenizer, PLBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ht=new me({}),ut=new I({props:{name:"class transformers.PLBartForConditionalGeneration",anchor:"transformers.PLBartForConditionalGeneration",parameters:[{name:"config",val:": PLBartConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1226",parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_t=new I({props:{name:"forward",anchor:"transformers.PLBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1269",parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Pe=new fi({props:{$$slots:{default:[Qd]},$$scope:{ctx:Q}}}),bt=new ue({props:{code:`from transformers import PLBartTokenizer, PLBartForConditionalGeneration

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
[<span class="hljs-string">&#x27;same&#x27;</span>, <span class="hljs-string">&#x27;first&#x27;</span>, <span class="hljs-string">&#x27;highest&#x27;</span>, <span class="hljs-string">&#x27;result&#x27;</span>, <span class="hljs-string">&#x27;Fib&#x27;</span>]`}}),kt=new me({}),vt=new I({props:{name:"class transformers.PLBartForSequenceClassification",anchor:"transformers.PLBartForSequenceClassification",parameters:[{name:"config",val:": PLBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1395",parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pt=new I({props:{name:"forward",anchor:"transformers.PLBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1408",parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ze=new fi({props:{$$slots:{default:[Yd]},$$scope:{ctx:Q}}}),Lt=new ue({props:{code:`import torch
from transformers import PLBartTokenizer, PLBartForSequenceClassification

torch.manual_seed(0)
tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartForSequenceClassification.from_pretrained("uclanlp/plbart-base", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),zt=new ue({props:{code:`import torch
from transformers import PLBartTokenizer, PLBartForSequenceClassification

torch.manual_seed(0)
tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartForSequenceClassification.from_pretrained("uclanlp/plbart-base", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),Bt=new me({}),qt=new I({props:{name:"class transformers.PLBartForCausalLM",anchor:"transformers.PLBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1531"}}),$t=new I({props:{name:"forward",anchor:"transformers.PLBartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1562",parametersDescription:[{anchor:"transformers.PLBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),xt=new ue({props:{code:`from transformers import PLBartTokenizer, PLBartForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){u=n("meta"),L=l(),v=n("h1"),w=n("a"),B=n("span"),m(T.$$.fragment),y=l(),C=n("span"),Zn=r("PLBart"),on=l(),D=n("p"),ao=n("strong"),es=r("DISCLAIMER:"),ts=r(" If you see something strange, file a "),je=n("a"),os=r("Github Issue"),ns=r(` and assign
`),Ee=n("a"),ss=r("@gchhablani"),as=r("."),nn=l(),Y=n("h2"),fe=n("a"),ro=n("span"),m(Fe.$$.fragment),rs=l(),io=n("span"),is=r("Overview of PLBart"),sn=l(),O=n("p"),ds=r("The PLBART model was proposed in "),Me=n("a"),ls=r("Unified Pre-training for Program Understanding and Generation"),cs=r(` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),lo=n("code"),ps=r("plbart-base"),hs=r(` has been trained using multilingual denoising task
on Java, Python and English.`),an=l(),Et=n("p"),us=r("According to the abstract"),rn=l(),Ft=n("p"),co=n("em"),ms=r(`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),dn=l(),G=n("p"),fs=r("This model was contributed by "),Ae=n("a"),gs=r("gchhablani"),_s=r(". The Authors\u2019 code can be found "),Ne=n("a"),bs=r("here"),ks=r("."),ln=l(),Z=n("h3"),ge=n("a"),po=n("span"),m(Se.$$.fragment),vs=l(),ho=n("span"),Ts=r("Training of PLBart"),cn=l(),j=n("p"),ys=r(`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),uo=n("code"),ws=r("X [eos, src_lang_code]"),Ps=r(" where "),mo=n("code"),Ls=r("X"),zs=r(` is the source text. The
target text format is `),fo=n("code"),Bs=r("[tgt_lang_code] X [eos]"),qs=r(". "),go=n("code"),$s=r("bos"),xs=r(" is never used."),pn=l(),_e=n("p"),Cs=r("However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Ie=n("a"),js=r("the paper"),Es=r(" to learn more about this."),hn=l(),R=n("p"),Fs=r("In cases where the language code is needed, The regular "),De=n("a"),_o=n("strong"),Ms=r("call"),As=r("()"),Ns=r(` will encode source text format, and it should be wrapped
inside the context manager `),Mt=n("a"),Ss=r("as_target_tokenizer()"),Is=r(" to encode target text format."),un=l(),At=n("ul"),bo=n("li"),Ds=r("Supervised training"),mn=l(),m(Xe.$$.fragment),fn=l(),Nt=n("ul"),Oe=n("li"),ko=n("p"),Xs=r("Generation"),Os=l(),ee=n("p"),Gs=r("While generating the target text set the "),vo=n("code"),Rs=r("decoder_start_token_id"),Ws=r(` to the target language id. The following
example shows how to translate Python to English using the `),To=n("code"),Hs=r("uclanlp/plbart-python-en_XX"),Us=r(" model."),gn=l(),m(Ge.$$.fragment),_n=l(),te=n("h2"),be=n("a"),yo=n("span"),m(Re.$$.fragment),Vs=l(),wo=n("span"),Js=r("PLBartConfig"),bn=l(),$=n("div"),m(We.$$.fragment),Ks=l(),oe=n("p"),Qs=r("This is the configuration class to store the configuration of a "),St=n("a"),Ys=r("PLBartModel"),Zs=r(`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),He=n("a"),ea=r("uclanlp/plbart-base"),ta=r(" architecture."),oa=l(),ne=n("p"),na=r("Configuration objects inherit from "),It=n("a"),sa=r("PretrainedConfig"),aa=r(` and can be used to control the model outputs. Read the
documentation from `),Dt=n("a"),ra=r("PretrainedConfig"),ia=r(" for more information."),da=l(),Po=n("p"),la=r("Example:"),ca=l(),m(Ue.$$.fragment),kn=l(),se=n("h2"),ke=n("a"),Lo=n("span"),m(Ve.$$.fragment),pa=l(),zo=n("span"),ha=r("PLBartTokenizer"),vn=l(),P=n("div"),m(Je.$$.fragment),ua=l(),Bo=n("p"),ma=r("Construct an PLBART tokenizer."),fa=l(),X=n("p"),ga=r("Adapted from "),Xt=n("a"),_a=r("RobertaTokenizer"),ba=r(" and "),Ot=n("a"),ka=r("XLNetTokenizer"),va=r(`. Based on
`),Ke=n("a"),Ta=r("SentencePiece"),ya=r("."),wa=l(),Qe=n("p"),Pa=r("The tokenization method is "),qo=n("code"),La=r("<tokens> <eos> <language code>"),za=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Ba=l(),$o=n("p"),qa=r("Examples:"),$a=l(),m(Ye.$$.fragment),xa=l(),ve=n("div"),m(Ze.$$.fragment),Ca=l(),xo=n("p"),ja=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Ea=l(),S=n("div"),m(et.$$.fragment),Fa=l(),tt=n("p"),Ma=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),Co=n("code"),Aa=r("X"),Na=r(" represents the sequence:"),Sa=l(),ot=n("ul"),nt=n("li"),jo=n("code"),Ia=r("input_ids"),Da=r(" (for encoder) "),Eo=n("code"),Xa=r("X [eos, src_lang_code]"),Oa=l(),st=n("li"),Fo=n("code"),Ga=r("decoder_input_ids"),Ra=r(": (for decoder) "),Mo=n("code"),Wa=r("X [eos, tgt_lang_code]"),Ha=l(),Ao=n("p"),Ua=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Tn=l(),ae=n("h2"),Te=n("a"),No=n("span"),m(at.$$.fragment),Va=l(),So=n("span"),Ja=r("PLBartModel"),yn=l(),A=n("div"),m(rt.$$.fragment),Ka=l(),it=n("p"),Qa=r(`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gt=n("a"),Ya=r("PreTrainedModel"),Za=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),er=l(),dt=n("p"),tr=r("This model is also a PyTorch "),lt=n("a"),or=r("torch.nn.Module"),nr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sr=l(),E=n("div"),m(ct.$$.fragment),ar=l(),re=n("p"),rr=r("The "),Rt=n("a"),ir=r("PLBartModel"),dr=r(" forward method, overrides the "),Io=n("code"),lr=r("__call__"),cr=r(" special method."),pr=l(),m(ye.$$.fragment),hr=l(),Do=n("p"),ur=r("Example:"),mr=l(),m(pt.$$.fragment),wn=l(),ie=n("h2"),we=n("a"),Xo=n("span"),m(ht.$$.fragment),fr=l(),Oo=n("span"),gr=r("PLBartForConditionalGeneration"),Pn=l(),N=n("div"),m(ut.$$.fragment),_r=l(),mt=n("p"),br=r(`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Wt=n("a"),kr=r("PreTrainedModel"),vr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tr=l(),ft=n("p"),yr=r("This model is also a PyTorch "),gt=n("a"),wr=r("torch.nn.Module"),Pr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lr=l(),F=n("div"),m(_t.$$.fragment),zr=l(),de=n("p"),Br=r("The "),Ht=n("a"),qr=r("PLBartForConditionalGeneration"),$r=r(" forward method, overrides the "),Go=n("code"),xr=r("__call__"),Cr=r(" special method."),jr=l(),m(Pe.$$.fragment),Er=l(),Ro=n("p"),Fr=r("Mask-filling example:"),Mr=l(),m(bt.$$.fragment),Ln=l(),le=n("h2"),Le=n("a"),Wo=n("span"),m(kt.$$.fragment),Ar=l(),Ho=n("span"),Nr=r("PLBartForSequenceClassification"),zn=l(),x=n("div"),m(vt.$$.fragment),Sr=l(),Uo=n("p"),Ir=r(`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),Dr=l(),Tt=n("p"),Xr=r("This model inherits from "),Ut=n("a"),Or=r("PreTrainedModel"),Gr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr=l(),yt=n("p"),Wr=r("This model is also a PyTorch "),wt=n("a"),Hr=r("torch.nn.Module"),Ur=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vr=l(),z=n("div"),m(Pt.$$.fragment),Jr=l(),ce=n("p"),Kr=r("The "),Vt=n("a"),Qr=r("PLBartForSequenceClassification"),Yr=r(" forward method, overrides the "),Vo=n("code"),Zr=r("__call__"),ei=r(" special method."),ti=l(),m(ze.$$.fragment),oi=l(),Jo=n("p"),ni=r("Example of single-label classification:"),si=l(),m(Lt.$$.fragment),ai=l(),Ko=n("p"),ri=r("Example of multi-label classification:"),ii=l(),m(zt.$$.fragment),Bn=l(),pe=n("h2"),Be=n("a"),Qo=n("span"),m(Bt.$$.fragment),di=l(),Yo=n("span"),li=r("PLBartForCausalLM"),qn=l(),he=n("div"),m(qt.$$.fragment),ci=l(),W=n("div"),m($t.$$.fragment),pi=l(),Zo=n("p"),hi=r("Example:"),ui=l(),m(xt.$$.fragment),this.h()},l(t){const p=Jd('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(o),L=c(t),v=s(t,"H1",{class:!0});var Ct=a(v);w=s(Ct,"A",{id:!0,class:!0,href:!0});var en=a(w);B=s(en,"SPAN",{});var tn=a(B);f(T.$$.fragment,tn),tn.forEach(o),en.forEach(o),y=c(Ct),C=s(Ct,"SPAN",{});var gi=a(C);Zn=i(gi,"PLBart"),gi.forEach(o),Ct.forEach(o),on=c(t),D=s(t,"P",{});var jt=a(D);ao=s(jt,"STRONG",{});var _i=a(ao);es=i(_i,"DISCLAIMER:"),_i.forEach(o),ts=i(jt," If you see something strange, file a "),je=s(jt,"A",{href:!0,rel:!0});var bi=a(je);os=i(bi,"Github Issue"),bi.forEach(o),ns=i(jt,` and assign
`),Ee=s(jt,"A",{href:!0,rel:!0});var ki=a(Ee);ss=i(ki,"@gchhablani"),ki.forEach(o),as=i(jt,"."),jt.forEach(o),nn=c(t),Y=s(t,"H2",{class:!0});var xn=a(Y);fe=s(xn,"A",{id:!0,class:!0,href:!0});var vi=a(fe);ro=s(vi,"SPAN",{});var Ti=a(ro);f(Fe.$$.fragment,Ti),Ti.forEach(o),vi.forEach(o),rs=c(xn),io=s(xn,"SPAN",{});var yi=a(io);is=i(yi,"Overview of PLBart"),yi.forEach(o),xn.forEach(o),sn=c(t),O=s(t,"P",{});var Jt=a(O);ds=i(Jt,"The PLBART model was proposed in "),Me=s(Jt,"A",{href:!0,rel:!0});var wi=a(Me);ls=i(wi,"Unified Pre-training for Program Understanding and Generation"),wi.forEach(o),cs=i(Jt,` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),lo=s(Jt,"CODE",{});var Pi=a(lo);ps=i(Pi,"plbart-base"),Pi.forEach(o),hs=i(Jt,` has been trained using multilingual denoising task
on Java, Python and English.`),Jt.forEach(o),an=c(t),Et=s(t,"P",{});var Li=a(Et);us=i(Li,"According to the abstract"),Li.forEach(o),rn=c(t),Ft=s(t,"P",{});var zi=a(Ft);co=s(zi,"EM",{});var Bi=a(co);ms=i(Bi,`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),Bi.forEach(o),zi.forEach(o),dn=c(t),G=s(t,"P",{});var Kt=a(G);fs=i(Kt,"This model was contributed by "),Ae=s(Kt,"A",{href:!0,rel:!0});var qi=a(Ae);gs=i(qi,"gchhablani"),qi.forEach(o),_s=i(Kt,". The Authors\u2019 code can be found "),Ne=s(Kt,"A",{href:!0,rel:!0});var $i=a(Ne);bs=i($i,"here"),$i.forEach(o),ks=i(Kt,"."),Kt.forEach(o),ln=c(t),Z=s(t,"H3",{class:!0});var Cn=a(Z);ge=s(Cn,"A",{id:!0,class:!0,href:!0});var xi=a(ge);po=s(xi,"SPAN",{});var Ci=a(po);f(Se.$$.fragment,Ci),Ci.forEach(o),xi.forEach(o),vs=c(Cn),ho=s(Cn,"SPAN",{});var ji=a(ho);Ts=i(ji,"Training of PLBart"),ji.forEach(o),Cn.forEach(o),cn=c(t),j=s(t,"P",{});var H=a(j);ys=i(H,`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),uo=s(H,"CODE",{});var Ei=a(uo);ws=i(Ei,"X [eos, src_lang_code]"),Ei.forEach(o),Ps=i(H," where "),mo=s(H,"CODE",{});var Fi=a(mo);Ls=i(Fi,"X"),Fi.forEach(o),zs=i(H,` is the source text. The
target text format is `),fo=s(H,"CODE",{});var Mi=a(fo);Bs=i(Mi,"[tgt_lang_code] X [eos]"),Mi.forEach(o),qs=i(H,". "),go=s(H,"CODE",{});var Ai=a(go);$s=i(Ai,"bos"),Ai.forEach(o),xs=i(H," is never used."),H.forEach(o),pn=c(t),_e=s(t,"P",{});var jn=a(_e);Cs=i(jn,"However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Ie=s(jn,"A",{href:!0,rel:!0});var Ni=a(Ie);js=i(Ni,"the paper"),Ni.forEach(o),Es=i(jn," to learn more about this."),jn.forEach(o),hn=c(t),R=s(t,"P",{});var Qt=a(R);Fs=i(Qt,"In cases where the language code is needed, The regular "),De=s(Qt,"A",{href:!0});var mi=a(De);_o=s(mi,"STRONG",{});var Si=a(_o);Ms=i(Si,"call"),Si.forEach(o),As=i(mi,"()"),mi.forEach(o),Ns=i(Qt,` will encode source text format, and it should be wrapped
inside the context manager `),Mt=s(Qt,"A",{href:!0});var Ii=a(Mt);Ss=i(Ii,"as_target_tokenizer()"),Ii.forEach(o),Is=i(Qt," to encode target text format."),Qt.forEach(o),un=c(t),At=s(t,"UL",{});var Di=a(At);bo=s(Di,"LI",{});var Xi=a(bo);Ds=i(Xi,"Supervised training"),Xi.forEach(o),Di.forEach(o),mn=c(t),f(Xe.$$.fragment,t),fn=c(t),Nt=s(t,"UL",{});var Oi=a(Nt);Oe=s(Oi,"LI",{});var En=a(Oe);ko=s(En,"P",{});var Gi=a(ko);Xs=i(Gi,"Generation"),Gi.forEach(o),Os=c(En),ee=s(En,"P",{});var Yt=a(ee);Gs=i(Yt,"While generating the target text set the "),vo=s(Yt,"CODE",{});var Ri=a(vo);Rs=i(Ri,"decoder_start_token_id"),Ri.forEach(o),Ws=i(Yt,` to the target language id. The following
example shows how to translate Python to English using the `),To=s(Yt,"CODE",{});var Wi=a(To);Hs=i(Wi,"uclanlp/plbart-python-en_XX"),Wi.forEach(o),Us=i(Yt," model."),Yt.forEach(o),En.forEach(o),Oi.forEach(o),gn=c(t),f(Ge.$$.fragment,t),_n=c(t),te=s(t,"H2",{class:!0});var Fn=a(te);be=s(Fn,"A",{id:!0,class:!0,href:!0});var Hi=a(be);yo=s(Hi,"SPAN",{});var Ui=a(yo);f(Re.$$.fragment,Ui),Ui.forEach(o),Hi.forEach(o),Vs=c(Fn),wo=s(Fn,"SPAN",{});var Vi=a(wo);Js=i(Vi,"PLBartConfig"),Vi.forEach(o),Fn.forEach(o),bn=c(t),$=s(t,"DIV",{class:!0});var U=a($);f(We.$$.fragment,U),Ks=c(U),oe=s(U,"P",{});var Zt=a(oe);Qs=i(Zt,"This is the configuration class to store the configuration of a "),St=s(Zt,"A",{href:!0});var Ji=a(St);Ys=i(Ji,"PLBartModel"),Ji.forEach(o),Zs=i(Zt,`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),He=s(Zt,"A",{href:!0,rel:!0});var Ki=a(He);ea=i(Ki,"uclanlp/plbart-base"),Ki.forEach(o),ta=i(Zt," architecture."),Zt.forEach(o),oa=c(U),ne=s(U,"P",{});var eo=a(ne);na=i(eo,"Configuration objects inherit from "),It=s(eo,"A",{href:!0});var Qi=a(It);sa=i(Qi,"PretrainedConfig"),Qi.forEach(o),aa=i(eo,` and can be used to control the model outputs. Read the
documentation from `),Dt=s(eo,"A",{href:!0});var Yi=a(Dt);ra=i(Yi,"PretrainedConfig"),Yi.forEach(o),ia=i(eo," for more information."),eo.forEach(o),da=c(U),Po=s(U,"P",{});var Zi=a(Po);la=i(Zi,"Example:"),Zi.forEach(o),ca=c(U),f(Ue.$$.fragment,U),U.forEach(o),kn=c(t),se=s(t,"H2",{class:!0});var Mn=a(se);ke=s(Mn,"A",{id:!0,class:!0,href:!0});var ed=a(ke);Lo=s(ed,"SPAN",{});var td=a(Lo);f(Ve.$$.fragment,td),td.forEach(o),ed.forEach(o),pa=c(Mn),zo=s(Mn,"SPAN",{});var od=a(zo);ha=i(od,"PLBartTokenizer"),od.forEach(o),Mn.forEach(o),vn=c(t),P=s(t,"DIV",{class:!0});var q=a(P);f(Je.$$.fragment,q),ua=c(q),Bo=s(q,"P",{});var nd=a(Bo);ma=i(nd,"Construct an PLBART tokenizer."),nd.forEach(o),fa=c(q),X=s(q,"P",{});var qe=a(X);ga=i(qe,"Adapted from "),Xt=s(qe,"A",{href:!0});var sd=a(Xt);_a=i(sd,"RobertaTokenizer"),sd.forEach(o),ba=i(qe," and "),Ot=s(qe,"A",{href:!0});var ad=a(Ot);ka=i(ad,"XLNetTokenizer"),ad.forEach(o),va=i(qe,`. Based on
`),Ke=s(qe,"A",{href:!0,rel:!0});var rd=a(Ke);Ta=i(rd,"SentencePiece"),rd.forEach(o),ya=i(qe,"."),qe.forEach(o),wa=c(q),Qe=s(q,"P",{});var An=a(Qe);Pa=i(An,"The tokenization method is "),qo=s(An,"CODE",{});var id=a(qo);La=i(id,"<tokens> <eos> <language code>"),id.forEach(o),za=i(An," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),An.forEach(o),Ba=c(q),$o=s(q,"P",{});var dd=a($o);qa=i(dd,"Examples:"),dd.forEach(o),$a=c(q),f(Ye.$$.fragment,q),xa=c(q),ve=s(q,"DIV",{class:!0});var Nn=a(ve);f(Ze.$$.fragment,Nn),Ca=c(Nn),xo=s(Nn,"P",{});var ld=a(xo);ja=i(ld,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),ld.forEach(o),Nn.forEach(o),Ea=c(q),S=s(q,"DIV",{class:!0});var $e=a(S);f(et.$$.fragment,$e),Fa=c($e),tt=s($e,"P",{});var Sn=a(tt);Ma=i(Sn,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),Co=s(Sn,"CODE",{});var cd=a(Co);Aa=i(cd,"X"),cd.forEach(o),Na=i(Sn," represents the sequence:"),Sn.forEach(o),Sa=c($e),ot=s($e,"UL",{});var In=a(ot);nt=s(In,"LI",{});var Dn=a(nt);jo=s(Dn,"CODE",{});var pd=a(jo);Ia=i(pd,"input_ids"),pd.forEach(o),Da=i(Dn," (for encoder) "),Eo=s(Dn,"CODE",{});var hd=a(Eo);Xa=i(hd,"X [eos, src_lang_code]"),hd.forEach(o),Dn.forEach(o),Oa=c(In),st=s(In,"LI",{});var Xn=a(st);Fo=s(Xn,"CODE",{});var ud=a(Fo);Ga=i(ud,"decoder_input_ids"),ud.forEach(o),Ra=i(Xn,": (for decoder) "),Mo=s(Xn,"CODE",{});var md=a(Mo);Wa=i(md,"X [eos, tgt_lang_code]"),md.forEach(o),Xn.forEach(o),In.forEach(o),Ha=c($e),Ao=s($e,"P",{});var fd=a(Ao);Ua=i(fd,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),fd.forEach(o),$e.forEach(o),q.forEach(o),Tn=c(t),ae=s(t,"H2",{class:!0});var On=a(ae);Te=s(On,"A",{id:!0,class:!0,href:!0});var gd=a(Te);No=s(gd,"SPAN",{});var _d=a(No);f(at.$$.fragment,_d),_d.forEach(o),gd.forEach(o),Va=c(On),So=s(On,"SPAN",{});var bd=a(So);Ja=i(bd,"PLBartModel"),bd.forEach(o),On.forEach(o),yn=c(t),A=s(t,"DIV",{class:!0});var xe=a(A);f(rt.$$.fragment,xe),Ka=c(xe),it=s(xe,"P",{});var Gn=a(it);Qa=i(Gn,`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gt=s(Gn,"A",{href:!0});var kd=a(Gt);Ya=i(kd,"PreTrainedModel"),kd.forEach(o),Za=i(Gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gn.forEach(o),er=c(xe),dt=s(xe,"P",{});var Rn=a(dt);tr=i(Rn,"This model is also a PyTorch "),lt=s(Rn,"A",{href:!0,rel:!0});var vd=a(lt);or=i(vd,"torch.nn.Module"),vd.forEach(o),nr=i(Rn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rn.forEach(o),sr=c(xe),E=s(xe,"DIV",{class:!0});var V=a(E);f(ct.$$.fragment,V),ar=c(V),re=s(V,"P",{});var to=a(re);rr=i(to,"The "),Rt=s(to,"A",{href:!0});var Td=a(Rt);ir=i(Td,"PLBartModel"),Td.forEach(o),dr=i(to," forward method, overrides the "),Io=s(to,"CODE",{});var yd=a(Io);lr=i(yd,"__call__"),yd.forEach(o),cr=i(to," special method."),to.forEach(o),pr=c(V),f(ye.$$.fragment,V),hr=c(V),Do=s(V,"P",{});var wd=a(Do);ur=i(wd,"Example:"),wd.forEach(o),mr=c(V),f(pt.$$.fragment,V),V.forEach(o),xe.forEach(o),wn=c(t),ie=s(t,"H2",{class:!0});var Wn=a(ie);we=s(Wn,"A",{id:!0,class:!0,href:!0});var Pd=a(we);Xo=s(Pd,"SPAN",{});var Ld=a(Xo);f(ht.$$.fragment,Ld),Ld.forEach(o),Pd.forEach(o),fr=c(Wn),Oo=s(Wn,"SPAN",{});var zd=a(Oo);gr=i(zd,"PLBartForConditionalGeneration"),zd.forEach(o),Wn.forEach(o),Pn=c(t),N=s(t,"DIV",{class:!0});var Ce=a(N);f(ut.$$.fragment,Ce),_r=c(Ce),mt=s(Ce,"P",{});var Hn=a(mt);br=i(Hn,`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Wt=s(Hn,"A",{href:!0});var Bd=a(Wt);kr=i(Bd,"PreTrainedModel"),Bd.forEach(o),vr=i(Hn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hn.forEach(o),Tr=c(Ce),ft=s(Ce,"P",{});var Un=a(ft);yr=i(Un,"This model is also a PyTorch "),gt=s(Un,"A",{href:!0,rel:!0});var qd=a(gt);wr=i(qd,"torch.nn.Module"),qd.forEach(o),Pr=i(Un,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Un.forEach(o),Lr=c(Ce),F=s(Ce,"DIV",{class:!0});var J=a(F);f(_t.$$.fragment,J),zr=c(J),de=s(J,"P",{});var oo=a(de);Br=i(oo,"The "),Ht=s(oo,"A",{href:!0});var $d=a(Ht);qr=i($d,"PLBartForConditionalGeneration"),$d.forEach(o),$r=i(oo," forward method, overrides the "),Go=s(oo,"CODE",{});var xd=a(Go);xr=i(xd,"__call__"),xd.forEach(o),Cr=i(oo," special method."),oo.forEach(o),jr=c(J),f(Pe.$$.fragment,J),Er=c(J),Ro=s(J,"P",{});var Cd=a(Ro);Fr=i(Cd,"Mask-filling example:"),Cd.forEach(o),Mr=c(J),f(bt.$$.fragment,J),J.forEach(o),Ce.forEach(o),Ln=c(t),le=s(t,"H2",{class:!0});var Vn=a(le);Le=s(Vn,"A",{id:!0,class:!0,href:!0});var jd=a(Le);Wo=s(jd,"SPAN",{});var Ed=a(Wo);f(kt.$$.fragment,Ed),Ed.forEach(o),jd.forEach(o),Ar=c(Vn),Ho=s(Vn,"SPAN",{});var Fd=a(Ho);Nr=i(Fd,"PLBartForSequenceClassification"),Fd.forEach(o),Vn.forEach(o),zn=c(t),x=s(t,"DIV",{class:!0});var K=a(x);f(vt.$$.fragment,K),Sr=c(K),Uo=s(K,"P",{});var Md=a(Uo);Ir=i(Md,`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),Md.forEach(o),Dr=c(K),Tt=s(K,"P",{});var Jn=a(Tt);Xr=i(Jn,"This model inherits from "),Ut=s(Jn,"A",{href:!0});var Ad=a(Ut);Or=i(Ad,"PreTrainedModel"),Ad.forEach(o),Gr=i(Jn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jn.forEach(o),Rr=c(K),yt=s(K,"P",{});var Kn=a(yt);Wr=i(Kn,"This model is also a PyTorch "),wt=s(Kn,"A",{href:!0,rel:!0});var Nd=a(wt);Hr=i(Nd,"torch.nn.Module"),Nd.forEach(o),Ur=i(Kn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kn.forEach(o),Vr=c(K),z=s(K,"DIV",{class:!0});var M=a(z);f(Pt.$$.fragment,M),Jr=c(M),ce=s(M,"P",{});var no=a(ce);Kr=i(no,"The "),Vt=s(no,"A",{href:!0});var Sd=a(Vt);Qr=i(Sd,"PLBartForSequenceClassification"),Sd.forEach(o),Yr=i(no," forward method, overrides the "),Vo=s(no,"CODE",{});var Id=a(Vo);Zr=i(Id,"__call__"),Id.forEach(o),ei=i(no," special method."),no.forEach(o),ti=c(M),f(ze.$$.fragment,M),oi=c(M),Jo=s(M,"P",{});var Dd=a(Jo);ni=i(Dd,"Example of single-label classification:"),Dd.forEach(o),si=c(M),f(Lt.$$.fragment,M),ai=c(M),Ko=s(M,"P",{});var Xd=a(Ko);ri=i(Xd,"Example of multi-label classification:"),Xd.forEach(o),ii=c(M),f(zt.$$.fragment,M),M.forEach(o),K.forEach(o),Bn=c(t),pe=s(t,"H2",{class:!0});var Qn=a(pe);Be=s(Qn,"A",{id:!0,class:!0,href:!0});var Od=a(Be);Qo=s(Od,"SPAN",{});var Gd=a(Qo);f(Bt.$$.fragment,Gd),Gd.forEach(o),Od.forEach(o),di=c(Qn),Yo=s(Qn,"SPAN",{});var Rd=a(Yo);li=i(Rd,"PLBartForCausalLM"),Rd.forEach(o),Qn.forEach(o),qn=c(t),he=s(t,"DIV",{class:!0});var Yn=a(he);f(qt.$$.fragment,Yn),ci=c(Yn),W=s(Yn,"DIV",{class:!0});var so=a(W);f($t.$$.fragment,so),pi=c(so),Zo=s(so,"P",{});var Wd=a(Zo);hi=i(Wd,"Example:"),Wd.forEach(o),ui=c(so),f(xt.$$.fragment,so),so.forEach(o),Yn.forEach(o),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(el)),d(w,"id","plbart"),d(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(w,"href","#plbart"),d(v,"class","relative group"),d(je,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),d(je,"rel","nofollow"),d(Ee,"href","https://www.github.com/gchhablani"),d(Ee,"rel","nofollow"),d(fe,"id","overview-of-plbart"),d(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(fe,"href","#overview-of-plbart"),d(Y,"class","relative group"),d(Me,"href","https://arxiv.org/abs/2103.06333"),d(Me,"rel","nofollow"),d(Ae,"href","https://huggingface.co/gchhablani"),d(Ae,"rel","nofollow"),d(Ne,"href","https://github.com/wasiahmad/PLBART"),d(Ne,"rel","nofollow"),d(ge,"id","training-of-plbart"),d(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ge,"href","#training-of-plbart"),d(Z,"class","relative group"),d(Ie,"href","https://arxiv.org/abs/2103.06333"),d(Ie,"rel","nofollow"),d(De,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),d(Mt,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartTokenizer.as_target_tokenizer"),d(be,"id","transformers.PLBartConfig"),d(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(be,"href","#transformers.PLBartConfig"),d(te,"class","relative group"),d(St,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartModel"),d(He,"href","https://huggingface.co/uclanlp/plbart-base"),d(He,"rel","nofollow"),d(It,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),d(Dt,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),d($,"class","docstring"),d(ke,"id","transformers.PLBartTokenizer"),d(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ke,"href","#transformers.PLBartTokenizer"),d(se,"class","relative group"),d(Xt,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizer"),d(Ot,"href","/docs/transformers/master/en/model_doc/xlnet#transformers.XLNetTokenizer"),d(Ke,"href","https://github.com/google/sentencepiece"),d(Ke,"rel","nofollow"),d(ve,"class","docstring"),d(S,"class","docstring"),d(P,"class","docstring"),d(Te,"id","transformers.PLBartModel"),d(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Te,"href","#transformers.PLBartModel"),d(ae,"class","relative group"),d(Gt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(lt,"rel","nofollow"),d(Rt,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartModel"),d(E,"class","docstring"),d(A,"class","docstring"),d(we,"id","transformers.PLBartForConditionalGeneration"),d(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(we,"href","#transformers.PLBartForConditionalGeneration"),d(ie,"class","relative group"),d(Wt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(gt,"rel","nofollow"),d(Ht,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartForConditionalGeneration"),d(F,"class","docstring"),d(N,"class","docstring"),d(Le,"id","transformers.PLBartForSequenceClassification"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.PLBartForSequenceClassification"),d(le,"class","relative group"),d(Ut,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(wt,"rel","nofollow"),d(Vt,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartForSequenceClassification"),d(z,"class","docstring"),d(x,"class","docstring"),d(Be,"id","transformers.PLBartForCausalLM"),d(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Be,"href","#transformers.PLBartForCausalLM"),d(pe,"class","relative group"),d(W,"class","docstring"),d(he,"class","docstring")},m(t,p){e(document.head,u),h(t,L,p),h(t,v,p),e(v,w),e(w,B),g(T,B,null),e(v,y),e(v,C),e(C,Zn),h(t,on,p),h(t,D,p),e(D,ao),e(ao,es),e(D,ts),e(D,je),e(je,os),e(D,ns),e(D,Ee),e(Ee,ss),e(D,as),h(t,nn,p),h(t,Y,p),e(Y,fe),e(fe,ro),g(Fe,ro,null),e(Y,rs),e(Y,io),e(io,is),h(t,sn,p),h(t,O,p),e(O,ds),e(O,Me),e(Me,ls),e(O,cs),e(O,lo),e(lo,ps),e(O,hs),h(t,an,p),h(t,Et,p),e(Et,us),h(t,rn,p),h(t,Ft,p),e(Ft,co),e(co,ms),h(t,dn,p),h(t,G,p),e(G,fs),e(G,Ae),e(Ae,gs),e(G,_s),e(G,Ne),e(Ne,bs),e(G,ks),h(t,ln,p),h(t,Z,p),e(Z,ge),e(ge,po),g(Se,po,null),e(Z,vs),e(Z,ho),e(ho,Ts),h(t,cn,p),h(t,j,p),e(j,ys),e(j,uo),e(uo,ws),e(j,Ps),e(j,mo),e(mo,Ls),e(j,zs),e(j,fo),e(fo,Bs),e(j,qs),e(j,go),e(go,$s),e(j,xs),h(t,pn,p),h(t,_e,p),e(_e,Cs),e(_e,Ie),e(Ie,js),e(_e,Es),h(t,hn,p),h(t,R,p),e(R,Fs),e(R,De),e(De,_o),e(_o,Ms),e(De,As),e(R,Ns),e(R,Mt),e(Mt,Ss),e(R,Is),h(t,un,p),h(t,At,p),e(At,bo),e(bo,Ds),h(t,mn,p),g(Xe,t,p),h(t,fn,p),h(t,Nt,p),e(Nt,Oe),e(Oe,ko),e(ko,Xs),e(Oe,Os),e(Oe,ee),e(ee,Gs),e(ee,vo),e(vo,Rs),e(ee,Ws),e(ee,To),e(To,Hs),e(ee,Us),h(t,gn,p),g(Ge,t,p),h(t,_n,p),h(t,te,p),e(te,be),e(be,yo),g(Re,yo,null),e(te,Vs),e(te,wo),e(wo,Js),h(t,bn,p),h(t,$,p),g(We,$,null),e($,Ks),e($,oe),e(oe,Qs),e(oe,St),e(St,Ys),e(oe,Zs),e(oe,He),e(He,ea),e(oe,ta),e($,oa),e($,ne),e(ne,na),e(ne,It),e(It,sa),e(ne,aa),e(ne,Dt),e(Dt,ra),e(ne,ia),e($,da),e($,Po),e(Po,la),e($,ca),g(Ue,$,null),h(t,kn,p),h(t,se,p),e(se,ke),e(ke,Lo),g(Ve,Lo,null),e(se,pa),e(se,zo),e(zo,ha),h(t,vn,p),h(t,P,p),g(Je,P,null),e(P,ua),e(P,Bo),e(Bo,ma),e(P,fa),e(P,X),e(X,ga),e(X,Xt),e(Xt,_a),e(X,ba),e(X,Ot),e(Ot,ka),e(X,va),e(X,Ke),e(Ke,Ta),e(X,ya),e(P,wa),e(P,Qe),e(Qe,Pa),e(Qe,qo),e(qo,La),e(Qe,za),e(P,Ba),e(P,$o),e($o,qa),e(P,$a),g(Ye,P,null),e(P,xa),e(P,ve),g(Ze,ve,null),e(ve,Ca),e(ve,xo),e(xo,ja),e(P,Ea),e(P,S),g(et,S,null),e(S,Fa),e(S,tt),e(tt,Ma),e(tt,Co),e(Co,Aa),e(tt,Na),e(S,Sa),e(S,ot),e(ot,nt),e(nt,jo),e(jo,Ia),e(nt,Da),e(nt,Eo),e(Eo,Xa),e(ot,Oa),e(ot,st),e(st,Fo),e(Fo,Ga),e(st,Ra),e(st,Mo),e(Mo,Wa),e(S,Ha),e(S,Ao),e(Ao,Ua),h(t,Tn,p),h(t,ae,p),e(ae,Te),e(Te,No),g(at,No,null),e(ae,Va),e(ae,So),e(So,Ja),h(t,yn,p),h(t,A,p),g(rt,A,null),e(A,Ka),e(A,it),e(it,Qa),e(it,Gt),e(Gt,Ya),e(it,Za),e(A,er),e(A,dt),e(dt,tr),e(dt,lt),e(lt,or),e(dt,nr),e(A,sr),e(A,E),g(ct,E,null),e(E,ar),e(E,re),e(re,rr),e(re,Rt),e(Rt,ir),e(re,dr),e(re,Io),e(Io,lr),e(re,cr),e(E,pr),g(ye,E,null),e(E,hr),e(E,Do),e(Do,ur),e(E,mr),g(pt,E,null),h(t,wn,p),h(t,ie,p),e(ie,we),e(we,Xo),g(ht,Xo,null),e(ie,fr),e(ie,Oo),e(Oo,gr),h(t,Pn,p),h(t,N,p),g(ut,N,null),e(N,_r),e(N,mt),e(mt,br),e(mt,Wt),e(Wt,kr),e(mt,vr),e(N,Tr),e(N,ft),e(ft,yr),e(ft,gt),e(gt,wr),e(ft,Pr),e(N,Lr),e(N,F),g(_t,F,null),e(F,zr),e(F,de),e(de,Br),e(de,Ht),e(Ht,qr),e(de,$r),e(de,Go),e(Go,xr),e(de,Cr),e(F,jr),g(Pe,F,null),e(F,Er),e(F,Ro),e(Ro,Fr),e(F,Mr),g(bt,F,null),h(t,Ln,p),h(t,le,p),e(le,Le),e(Le,Wo),g(kt,Wo,null),e(le,Ar),e(le,Ho),e(Ho,Nr),h(t,zn,p),h(t,x,p),g(vt,x,null),e(x,Sr),e(x,Uo),e(Uo,Ir),e(x,Dr),e(x,Tt),e(Tt,Xr),e(Tt,Ut),e(Ut,Or),e(Tt,Gr),e(x,Rr),e(x,yt),e(yt,Wr),e(yt,wt),e(wt,Hr),e(yt,Ur),e(x,Vr),e(x,z),g(Pt,z,null),e(z,Jr),e(z,ce),e(ce,Kr),e(ce,Vt),e(Vt,Qr),e(ce,Yr),e(ce,Vo),e(Vo,Zr),e(ce,ei),e(z,ti),g(ze,z,null),e(z,oi),e(z,Jo),e(Jo,ni),e(z,si),g(Lt,z,null),e(z,ai),e(z,Ko),e(Ko,ri),e(z,ii),g(zt,z,null),h(t,Bn,p),h(t,pe,p),e(pe,Be),e(Be,Qo),g(Bt,Qo,null),e(pe,di),e(pe,Yo),e(Yo,li),h(t,qn,p),h(t,he,p),g(qt,he,null),e(he,ci),e(he,W),g($t,W,null),e(W,pi),e(W,Zo),e(Zo,hi),e(W,ui),g(xt,W,null),$n=!0},p(t,[p]){const Ct={};p&2&&(Ct.$$scope={dirty:p,ctx:t}),ye.$set(Ct);const en={};p&2&&(en.$$scope={dirty:p,ctx:t}),Pe.$set(en);const tn={};p&2&&(tn.$$scope={dirty:p,ctx:t}),ze.$set(tn)},i(t){$n||(_(T.$$.fragment,t),_(Fe.$$.fragment,t),_(Se.$$.fragment,t),_(Xe.$$.fragment,t),_(Ge.$$.fragment,t),_(Re.$$.fragment,t),_(We.$$.fragment,t),_(Ue.$$.fragment,t),_(Ve.$$.fragment,t),_(Je.$$.fragment,t),_(Ye.$$.fragment,t),_(Ze.$$.fragment,t),_(et.$$.fragment,t),_(at.$$.fragment,t),_(rt.$$.fragment,t),_(ct.$$.fragment,t),_(ye.$$.fragment,t),_(pt.$$.fragment,t),_(ht.$$.fragment,t),_(ut.$$.fragment,t),_(_t.$$.fragment,t),_(Pe.$$.fragment,t),_(bt.$$.fragment,t),_(kt.$$.fragment,t),_(vt.$$.fragment,t),_(Pt.$$.fragment,t),_(ze.$$.fragment,t),_(Lt.$$.fragment,t),_(zt.$$.fragment,t),_(Bt.$$.fragment,t),_(qt.$$.fragment,t),_($t.$$.fragment,t),_(xt.$$.fragment,t),$n=!0)},o(t){b(T.$$.fragment,t),b(Fe.$$.fragment,t),b(Se.$$.fragment,t),b(Xe.$$.fragment,t),b(Ge.$$.fragment,t),b(Re.$$.fragment,t),b(We.$$.fragment,t),b(Ue.$$.fragment,t),b(Ve.$$.fragment,t),b(Je.$$.fragment,t),b(Ye.$$.fragment,t),b(Ze.$$.fragment,t),b(et.$$.fragment,t),b(at.$$.fragment,t),b(rt.$$.fragment,t),b(ct.$$.fragment,t),b(ye.$$.fragment,t),b(pt.$$.fragment,t),b(ht.$$.fragment,t),b(ut.$$.fragment,t),b(_t.$$.fragment,t),b(Pe.$$.fragment,t),b(bt.$$.fragment,t),b(kt.$$.fragment,t),b(vt.$$.fragment,t),b(Pt.$$.fragment,t),b(ze.$$.fragment,t),b(Lt.$$.fragment,t),b(zt.$$.fragment,t),b(Bt.$$.fragment,t),b(qt.$$.fragment,t),b($t.$$.fragment,t),b(xt.$$.fragment,t),$n=!1},d(t){o(u),t&&o(L),t&&o(v),k(T),t&&o(on),t&&o(D),t&&o(nn),t&&o(Y),k(Fe),t&&o(sn),t&&o(O),t&&o(an),t&&o(Et),t&&o(rn),t&&o(Ft),t&&o(dn),t&&o(G),t&&o(ln),t&&o(Z),k(Se),t&&o(cn),t&&o(j),t&&o(pn),t&&o(_e),t&&o(hn),t&&o(R),t&&o(un),t&&o(At),t&&o(mn),k(Xe,t),t&&o(fn),t&&o(Nt),t&&o(gn),k(Ge,t),t&&o(_n),t&&o(te),k(Re),t&&o(bn),t&&o($),k(We),k(Ue),t&&o(kn),t&&o(se),k(Ve),t&&o(vn),t&&o(P),k(Je),k(Ye),k(Ze),k(et),t&&o(Tn),t&&o(ae),k(at),t&&o(yn),t&&o(A),k(rt),k(ct),k(ye),k(pt),t&&o(wn),t&&o(ie),k(ht),t&&o(Pn),t&&o(N),k(ut),k(_t),k(Pe),k(bt),t&&o(Ln),t&&o(le),k(kt),t&&o(zn),t&&o(x),k(vt),k(Pt),k(ze),k(Lt),k(zt),t&&o(Bn),t&&o(pe),k(Bt),t&&o(qn),t&&o(he),k(qt),k($t),k(xt)}}}const el={local:"plbart",sections:[{local:"overview-of-plbart",sections:[{local:"training-of-plbart",title:"Training of PLBart"}],title:"Overview of PLBart"},{local:"transformers.PLBartConfig",title:"PLBartConfig"},{local:"transformers.PLBartTokenizer",title:"PLBartTokenizer"},{local:"transformers.PLBartModel",title:"PLBartModel"},{local:"transformers.PLBartForConditionalGeneration",title:"PLBartForConditionalGeneration"},{local:"transformers.PLBartForSequenceClassification",title:"PLBartForSequenceClassification"},{local:"transformers.PLBartForCausalLM",title:"PLBartForCausalLM"}],title:"PLBart"};function tl(Q,u,L){let{fw:v}=u;return Q.$$set=w=>{"fw"in w&&L(0,v=w.fw)},[v]}class dl extends Hd{constructor(u){super();Ud(this,u,tl,Zd,Vd,{fw:0})}}export{dl as default,el as metadata};
