import{S as yl,i as Pl,s as wl,e as n,k as l,w as m,t as r,L as Ll,c as a,d as o,m as c,a as s,x as f,h as i,b as d,J as e,g as h,y as _,q as g,o as b,B as k}from"../../chunks/vendor-9e2b328e.js";import{T as Ci}from"../../chunks/Tip-76f97a76.js";import{D as X}from"../../chunks/Docstring-50fd6873.js";import{C as xe}from"../../chunks/CodeBlock-88e23343.js";import{I as he}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function ql(J){let u,q,v,P,B;return{c(){u=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),P=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);P=i(F,"Module"),F.forEach(o),B=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(o)},m(T,y){h(T,u,y),e(u,q),e(u,v),e(v,P),e(u,B)},d(T){T&&o(u)}}}function zl(J){let u,q,v,P,B;return{c(){u=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),P=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);P=i(F,"Module"),F.forEach(o),B=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(o)},m(T,y){h(T,u,y),e(u,q),e(u,v),e(v,P),e(u,B)},d(T){T&&o(u)}}}function Bl(J){let u,q,v,P,B;return{c(){u=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),P=r("Module"),B=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);q=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);P=i(F,"Module"),F.forEach(o),B=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(o)},m(T,y){h(T,u,y),e(u,q),e(u,v),e(v,P),e(u,B)},d(T){T&&o(u)}}}function $l(J){let u,q,v,P,B,T,y,F,la,mn,D,no,ca,pa,Ce,ha,ua,Ee,ma,fa,fn,Y,ue,ao,Fe,_a,so,ga,_n,G,ba,Me,ka,va,ro,Ta,ya,gn,Ct,Pa,bn,Et,io,wa,kn,R,La,je,qa,za,Se,Ba,$a,vn,Z,me,lo,Ae,xa,co,Ca,Tn,M,Ea,po,Fa,Ma,ho,ja,Sa,uo,Aa,Na,mo,Ia,Da,yn,fe,Oa,Ne,Xa,Ga,Pn,W,Ra,Ie,fo,Wa,Ua,Ha,Ft,Va,Ka,wn,Mt,_o,Qa,Ln,De,qn,jt,Oe,go,Ja,Ya,ee,Za,bo,es,ts,ko,os,ns,zn,Xe,Bn,te,_e,vo,Ge,as,To,ss,$n,C,Re,rs,oe,is,St,ds,ls,We,cs,ps,hs,ne,us,At,ms,fs,Nt,_s,gs,bs,yo,ks,vs,Ue,xn,ae,ge,Po,He,Ts,wo,ys,Cn,w,Ve,Ps,Lo,ws,Ls,O,qs,It,zs,Bs,Dt,$s,xs,Ke,Cs,Es,Fs,Qe,Ms,qo,js,Ss,As,zo,Ns,Is,Je,Ds,be,Ye,Os,Bo,Xs,Gs,I,Ze,Rs,et,Ws,$o,Us,Hs,Vs,tt,ot,xo,Ks,Qs,Co,Js,Ys,nt,Eo,Zs,er,Fo,tr,or,Mo,nr,En,se,ke,jo,at,ar,So,sr,Fn,A,st,rr,rt,ir,Ot,dr,lr,cr,it,pr,dt,hr,ur,mr,j,lt,fr,re,_r,Xt,gr,br,Ao,kr,vr,Tr,ve,yr,No,Pr,wr,ct,Mn,ie,Te,Io,pt,Lr,Do,qr,jn,N,ht,zr,ut,Br,Gt,$r,xr,Cr,mt,Er,ft,Fr,Mr,jr,L,_t,Sr,de,Ar,Rt,Nr,Ir,Oo,Dr,Or,Xr,ye,Gr,Xo,Rr,Wr,Go,Ro,Wo,Uo,Ur,Hr,Ho,Vo,Ko,Qo,Vr,Kr,Jo,Qr,Jr,Yo,Zo,en,tn,Yr,Sn,le,Pe,on,gt,Zr,nn,ei,An,E,bt,ti,an,oi,ni,kt,ai,Wt,si,ri,ii,vt,di,Tt,li,ci,pi,z,yt,hi,ce,ui,Ut,mi,fi,sn,_i,gi,bi,we,ki,rn,vi,Ti,Pt,yi,dn,Pi,wi,wt,Nn,pe,Le,ln,Lt,Li,cn,qi,In,qt,U,zt,zi,pn,Bi,$i,Bt,Dn;return T=new he({}),Fe=new he({}),Ae=new he({}),De=new xe({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base", src_lang="en_XX", tgt_lang="python")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
expected_translation_english = "Returns the maximum value of a b c."
inputs = tokenizer(example_python_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_english, return_tensors="pt")
inputs["labels"] = labels["input_ids"]
# forward pass
model(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartForConditionalGeneration, PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;python&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_english = <span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_english, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs)`}}),Xe=new xe({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-python-en_XX", src_lang="python", tgt_lang="en_XX")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
inputs = tokenizer(example_python_phrase, return_tensors="pt")
model = PLBartForConditionalGeneration.from_pretrained("uclanlp/plbart-python-en_XX")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["en_XX"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartForConditionalGeneration, PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>, src_lang=<span class="hljs-string">&quot;python&quot;</span>, tgt_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;en_XX&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>`}}),Ge=new he({}),Re=new X({props:{name:"class transformers.PLBartConfig",anchor:"transformers.PLBartConfig",parameters:[{name:"vocab_size",val:" = 50005"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 6"},{name:"encoder_ffn_dim",val:" = 3072"},{name:"encoder_attention_heads",val:" = 12"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 3072"},{name:"decoder_attention_heads",val:" = 12"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/configuration_plbart.py#L32",parametersDescription:[{anchor:"transformers.PLBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50005) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Ue=new xe({props:{code:`from transformers import PLBartModel, PLBartConfig

# Initializing a PLBART uclanlp/plbart-base style configuration
configuration = PLBartConfig()
# Initializing a model from the uclanlp/plbart-base style configuration
model = PLBartModel(configuration)
# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartModel, PLBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a PLBART uclanlp/plbart-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = PLBartConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the uclanlp/plbart-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),He=new he({}),Ve=new X({props:{name:"class transformers.PLBartTokenizer",anchor:"transformers.PLBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"language_codes",val:" = 'base'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/tokenization_plbart.py#L75",parametersDescription:[{anchor:"transformers.PLBartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Je=new xe({props:{code:`from transformers import PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-python-en_XX", src_lang="python", tgt_lang="en_XX")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
expected_translation_english = "Returns the maximum value of a b c."
inputs = tokenizer(example_python_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_english, return_tensors="pt")
inputs["labels"] = labels["input_ids"],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>, src_lang=<span class="hljs-string">&quot;python&quot;</span>, tgt_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_english = <span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_english, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Ye=new X({props:{name:"as_target_tokenizer",anchor:"transformers.PLBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/tokenization_plbart.py#L422"}}),Ze=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/tokenization_plbart.py#L302",parametersDescription:[{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),at=new he({}),st=new X({props:{name:"class transformers.PLBartModel",anchor:"transformers.PLBartModel",parameters:[{name:"config",val:": PLBartConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1105",parametersDescription:[{anchor:"transformers.PLBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lt=new X({props:{name:"forward",anchor:"transformers.PLBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1131",parametersDescription:[{anchor:"transformers.PLBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ve=new Ci({props:{$$slots:{default:[ql]},$$scope:{ctx:J}}}),ct=new xe({props:{code:`from transformers import PLBartTokenizer, PLBartModel
import torch

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartModel.from_pretrained("uclanlp/plbart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartModel.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),pt=new he({}),ht=new X({props:{name:"class transformers.PLBartForConditionalGeneration",anchor:"transformers.PLBartForConditionalGeneration",parameters:[{name:"config",val:": PLBartConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1221",parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_t=new X({props:{name:"forward",anchor:"transformers.PLBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1264",parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new Ci({props:{$$slots:{default:[zl]},$$scope:{ctx:J}}}),gt=new he({}),bt=new X({props:{name:"class transformers.PLBartForSequenceClassification",anchor:"transformers.PLBartForSequenceClassification",parameters:[{name:"config",val:": PLBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1390",parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yt=new X({props:{name:"forward",anchor:"transformers.PLBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1403",parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),we=new Ci({props:{$$slots:{default:[Bl]},$$scope:{ctx:J}}}),Pt=new xe({props:{code:`from transformers import PLBartTokenizer, PLBartForSequenceClassification
import torch

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartForSequenceClassification.from_pretrained("uclanlp/plbart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),wt=new xe({props:{code:`from transformers import PLBartTokenizer, PLBartForSequenceClassification
import torch

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartForSequenceClassification.from_pretrained("uclanlp/plbart-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Lt=new he({}),zt=new X({props:{name:"forward",anchor:"transformers.PLBartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/plbart/modeling_plbart.py#L1556",parametersDescription:[{anchor:"transformers.PLBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bt=new xe({props:{code:`from transformers import PLBartTokenizer, PLBartForCausalLM

tokenizer = PLBartTokenizer.from_pretrained("facebook/bart-large")
model = PLBartForCausalLM.from_pretrained("facebook/bart-large", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),q=l(),v=n("h1"),P=n("a"),B=n("span"),m(T.$$.fragment),y=l(),F=n("span"),la=r("PLBart"),mn=l(),D=n("p"),no=n("strong"),ca=r("DISCLAIMER:"),pa=r(" If you see something strange, file a "),Ce=n("a"),ha=r("Github Issue"),ua=r(` and assign
`),Ee=n("a"),ma=r("@gchhablani"),fa=r("."),fn=l(),Y=n("h2"),ue=n("a"),ao=n("span"),m(Fe.$$.fragment),_a=l(),so=n("span"),ga=r("Overview of PLBart"),_n=l(),G=n("p"),ba=r("The PLBART model was proposed in "),Me=n("a"),ka=r("Unified Pre-training for Program Understanding and Generation"),va=r(` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),ro=n("code"),Ta=r("plbart-base"),ya=r(` has been trained using multilingual denoising task
on Java, Python and English.`),gn=l(),Ct=n("p"),Pa=r("According to the abstract"),bn=l(),Et=n("p"),io=n("em"),wa=r(`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),kn=l(),R=n("p"),La=r("This model was contributed by "),je=n("a"),qa=r("gchhablani"),za=r(". The Authors\u2019 code can be found "),Se=n("a"),Ba=r("here"),$a=r("."),vn=l(),Z=n("h3"),me=n("a"),lo=n("span"),m(Ae.$$.fragment),xa=l(),co=n("span"),Ca=r("Training of PLBart"),Tn=l(),M=n("p"),Ea=r(`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),po=n("code"),Fa=r("X [eos, src_lang_code]"),Ma=r(" where "),ho=n("code"),ja=r("X"),Sa=r(` is the source text. The
target text format is `),uo=n("code"),Aa=r("[tgt_lang_code] X [eos]"),Na=r(". "),mo=n("code"),Ia=r("bos"),Da=r(" is never used."),yn=l(),fe=n("p"),Oa=r("However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Ne=n("a"),Xa=r("the paper"),Ga=r(" to learn more about this."),Pn=l(),W=n("p"),Ra=r("In cases where the language code is needed, The regular "),Ie=n("a"),fo=n("strong"),Wa=r("call"),Ua=r("()"),Ha=r(` will encode source text format, and it should be wrapped
inside the context manager `),Ft=n("a"),Va=r("as_target_tokenizer()"),Ka=r(" to encode target text format."),wn=l(),Mt=n("ul"),_o=n("li"),Qa=r("Supervised training"),Ln=l(),m(De.$$.fragment),qn=l(),jt=n("ul"),Oe=n("li"),go=n("p"),Ja=r("Generation"),Ya=l(),ee=n("p"),Za=r("While generating the target text set the "),bo=n("code"),es=r("decoder_start_token_id"),ts=r(` to the target language id. The following
example shows how to translate Python to English using the `),ko=n("code"),os=r("uclanlp/plbart-python-en_XX"),ns=r(" model."),zn=l(),m(Xe.$$.fragment),Bn=l(),te=n("h2"),_e=n("a"),vo=n("span"),m(Ge.$$.fragment),as=l(),To=n("span"),ss=r("PLBartConfig"),$n=l(),C=n("div"),m(Re.$$.fragment),rs=l(),oe=n("p"),is=r("This is the configuration class to store the configuration of a "),St=n("a"),ds=r("PLBartModel"),ls=r(`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),We=n("a"),cs=r("uclanlp/plbart-base"),ps=r(" architecture."),hs=l(),ne=n("p"),us=r("Configuration objects inherit from "),At=n("a"),ms=r("PretrainedConfig"),fs=r(` and can be used to control the model outputs. Read the
documentation from `),Nt=n("a"),_s=r("PretrainedConfig"),gs=r(" for more information."),bs=l(),yo=n("p"),ks=r("Example:"),vs=l(),m(Ue.$$.fragment),xn=l(),ae=n("h2"),ge=n("a"),Po=n("span"),m(He.$$.fragment),Ts=l(),wo=n("span"),ys=r("PLBartTokenizer"),Cn=l(),w=n("div"),m(Ve.$$.fragment),Ps=l(),Lo=n("p"),ws=r("Construct an PLBART tokenizer."),Ls=l(),O=n("p"),qs=r("Adapted from "),It=n("a"),zs=r("RobertaTokenizer"),Bs=r(" and "),Dt=n("a"),$s=r("XLNetTokenizer"),xs=r(`. Based on
`),Ke=n("a"),Cs=r("SentencePiece"),Es=r("."),Fs=l(),Qe=n("p"),Ms=r("The tokenization method is "),qo=n("code"),js=r("<tokens> <eos> <language code>"),Ss=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),As=l(),zo=n("p"),Ns=r("Examples:"),Is=l(),m(Je.$$.fragment),Ds=l(),be=n("div"),m(Ye.$$.fragment),Os=l(),Bo=n("p"),Xs=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Gs=l(),I=n("div"),m(Ze.$$.fragment),Rs=l(),et=n("p"),Ws=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),$o=n("code"),Us=r("X"),Hs=r(" represents the sequence:"),Vs=l(),tt=n("ul"),ot=n("li"),xo=n("code"),Ks=r("input_ids"),Qs=r(" (for encoder) "),Co=n("code"),Js=r("X [eos, src_lang_code]"),Ys=l(),nt=n("li"),Eo=n("code"),Zs=r("decoder_input_ids"),er=r(": (for decoder) "),Fo=n("code"),tr=r("X [eos, tgt_lang_code]"),or=l(),Mo=n("p"),nr=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),En=l(),se=n("h2"),ke=n("a"),jo=n("span"),m(at.$$.fragment),ar=l(),So=n("span"),sr=r("PLBartModel"),Fn=l(),A=n("div"),m(st.$$.fragment),rr=l(),rt=n("p"),ir=r(`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ot=n("a"),dr=r("PreTrainedModel"),lr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cr=l(),it=n("p"),pr=r("This model is also a PyTorch "),dt=n("a"),hr=r("torch.nn.Module"),ur=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mr=l(),j=n("div"),m(lt.$$.fragment),fr=l(),re=n("p"),_r=r("The "),Xt=n("a"),gr=r("PLBartModel"),br=r(" forward method, overrides the "),Ao=n("code"),kr=r("__call__"),vr=r(" special method."),Tr=l(),m(ve.$$.fragment),yr=l(),No=n("p"),Pr=r("Example:"),wr=l(),m(ct.$$.fragment),Mn=l(),ie=n("h2"),Te=n("a"),Io=n("span"),m(pt.$$.fragment),Lr=l(),Do=n("span"),qr=r("PLBartForConditionalGeneration"),jn=l(),N=n("div"),m(ht.$$.fragment),zr=l(),ut=n("p"),Br=r(`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Gt=n("a"),$r=r("PreTrainedModel"),xr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cr=l(),mt=n("p"),Er=r("This model is also a PyTorch "),ft=n("a"),Fr=r("torch.nn.Module"),Mr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jr=l(),L=n("div"),m(_t.$$.fragment),Sr=l(),de=n("p"),Ar=r("The "),Rt=n("a"),Nr=r("PLBartForConditionalGeneration"),Ir=r(" forward method, overrides the "),Oo=n("code"),Dr=r("__call__"),Or=r(" special method."),Xr=l(),m(ye.$$.fragment),Gr=l(),Xo=n("p"),Rr=r("Token in-filling example:"),Wr=l(),Go=n("blockquote"),Ro=n("blockquote"),Wo=n("blockquote"),Uo=n("p"),Ur=r("from transformers import PLBartTokenizer, PLBartForConditionalGeneration, PLBartConfig"),Hr=l(),Ho=n("blockquote"),Vo=n("blockquote"),Ko=n("blockquote"),Qo=n("p"),Vr=r(`model = PLBartForConditionalGeneration.from_pretrained(\u2018uclanlp/plbart-base\u2019) >>> tokenizer =
PLBartTokenizer.from_pretrained(\u2018uclanlp/plbart-base\u2019, src_lang=\u2018java\u2019, tgt_lang=\u2018java\u2019) >>> METHOD_TO_FILL =
\u201Cpublic static main (String args[0]) { data=Date(); System.out. String.format(\u201CCurrent Date : % tc\u201D, ));}\u201D >>>
inputs = tokenizer([METHOD_TO_FILL], max_length=1024, return_tensors=\u2018pt\u2019) >>> # Generate Filled Code >>>
generated_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True) >>>
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in
generated_ids])`),Kr=l(),Jo=n("p"),Qr=r("Mask-filling example:"),Jr=l(),Yo=n("blockquote"),Zo=n("blockquote"),en=n("blockquote"),tn=n("p"),Yr=r(`from transformers import PLBartTokenizer, PLBartForConditionalGeneration >>> tokenizer =
PLBartTokenizer.from_pretrained(\u2018uclanlp/plbart-base\u2019) >>> # en_XX is the language symbol id <LID> for English
TXT = \u201D</s> Is 0 the <mask> Fibonacci <mask> ? </s> en_XX\u201D >>> model =
PLBartForConditionalGeneration.from_pretrained(\u2018uclanlp/plbart-base\u2019) >>> input_ids = tokenizer([TXT],
add_special_tokens=False, return_tensors=\u2018pt\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits >>>
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs = logits[0,
masked_index].softmax(dim=0) >>> values, predictions = probs.topk(5) >>> tokenizer.decode(predictions).split()`),Sn=l(),le=n("h2"),Pe=n("a"),on=n("span"),m(gt.$$.fragment),Zr=l(),nn=n("span"),ei=r("PLBartForSequenceClassification"),An=l(),E=n("div"),m(bt.$$.fragment),ti=l(),an=n("p"),oi=r(`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),ni=l(),kt=n("p"),ai=r("This model inherits from "),Wt=n("a"),si=r("PreTrainedModel"),ri=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii=l(),vt=n("p"),di=r("This model is also a PyTorch "),Tt=n("a"),li=r("torch.nn.Module"),ci=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pi=l(),z=n("div"),m(yt.$$.fragment),hi=l(),ce=n("p"),ui=r("The "),Ut=n("a"),mi=r("PLBartForSequenceClassification"),fi=r(" forward method, overrides the "),sn=n("code"),_i=r("__call__"),gi=r(" special method."),bi=l(),m(we.$$.fragment),ki=l(),rn=n("p"),vi=r("Example of single-label classification:"),Ti=l(),m(Pt.$$.fragment),yi=l(),dn=n("p"),Pi=r("Example of multi-label classification:"),wi=l(),m(wt.$$.fragment),Nn=l(),pe=n("h2"),Le=n("a"),ln=n("span"),m(Lt.$$.fragment),Li=l(),cn=n("span"),qi=r("PLBartForCausalLM"),In=l(),qt=n("div"),U=n("div"),m(zt.$$.fragment),zi=l(),pn=n("p"),Bi=r("Example:"),$i=l(),m(Bt.$$.fragment),this.h()},l(t){const p=Ll('[data-svelte="svelte-1phssyn"]',document.head);u=a(p,"META",{name:!0,content:!0}),p.forEach(o),q=c(t),v=a(t,"H1",{class:!0});var $t=s(v);P=a($t,"A",{id:!0,class:!0,href:!0});var hn=s(P);B=a(hn,"SPAN",{});var un=s(B);f(T.$$.fragment,un),un.forEach(o),hn.forEach(o),y=c($t),F=a($t,"SPAN",{});var Ei=s(F);la=i(Ei,"PLBart"),Ei.forEach(o),$t.forEach(o),mn=c(t),D=a(t,"P",{});var xt=s(D);no=a(xt,"STRONG",{});var Fi=s(no);ca=i(Fi,"DISCLAIMER:"),Fi.forEach(o),pa=i(xt," If you see something strange, file a "),Ce=a(xt,"A",{href:!0,rel:!0});var Mi=s(Ce);ha=i(Mi,"Github Issue"),Mi.forEach(o),ua=i(xt,` and assign
`),Ee=a(xt,"A",{href:!0,rel:!0});var ji=s(Ee);ma=i(ji,"@gchhablani"),ji.forEach(o),fa=i(xt,"."),xt.forEach(o),fn=c(t),Y=a(t,"H2",{class:!0});var On=s(Y);ue=a(On,"A",{id:!0,class:!0,href:!0});var Si=s(ue);ao=a(Si,"SPAN",{});var Ai=s(ao);f(Fe.$$.fragment,Ai),Ai.forEach(o),Si.forEach(o),_a=c(On),so=a(On,"SPAN",{});var Ni=s(so);ga=i(Ni,"Overview of PLBart"),Ni.forEach(o),On.forEach(o),_n=c(t),G=a(t,"P",{});var Ht=s(G);ba=i(Ht,"The PLBART model was proposed in "),Me=a(Ht,"A",{href:!0,rel:!0});var Ii=s(Me);ka=i(Ii,"Unified Pre-training for Program Understanding and Generation"),Ii.forEach(o),va=i(Ht,` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),ro=a(Ht,"CODE",{});var Di=s(ro);Ta=i(Di,"plbart-base"),Di.forEach(o),ya=i(Ht,` has been trained using multilingual denoising task
on Java, Python and English.`),Ht.forEach(o),gn=c(t),Ct=a(t,"P",{});var Oi=s(Ct);Pa=i(Oi,"According to the abstract"),Oi.forEach(o),bn=c(t),Et=a(t,"P",{});var Xi=s(Et);io=a(Xi,"EM",{});var Gi=s(io);wa=i(Gi,`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),Gi.forEach(o),Xi.forEach(o),kn=c(t),R=a(t,"P",{});var Vt=s(R);La=i(Vt,"This model was contributed by "),je=a(Vt,"A",{href:!0,rel:!0});var Ri=s(je);qa=i(Ri,"gchhablani"),Ri.forEach(o),za=i(Vt,". The Authors\u2019 code can be found "),Se=a(Vt,"A",{href:!0,rel:!0});var Wi=s(Se);Ba=i(Wi,"here"),Wi.forEach(o),$a=i(Vt,"."),Vt.forEach(o),vn=c(t),Z=a(t,"H3",{class:!0});var Xn=s(Z);me=a(Xn,"A",{id:!0,class:!0,href:!0});var Ui=s(me);lo=a(Ui,"SPAN",{});var Hi=s(lo);f(Ae.$$.fragment,Hi),Hi.forEach(o),Ui.forEach(o),xa=c(Xn),co=a(Xn,"SPAN",{});var Vi=s(co);Ca=i(Vi,"Training of PLBart"),Vi.forEach(o),Xn.forEach(o),Tn=c(t),M=a(t,"P",{});var H=s(M);Ea=i(H,`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),po=a(H,"CODE",{});var Ki=s(po);Fa=i(Ki,"X [eos, src_lang_code]"),Ki.forEach(o),Ma=i(H," where "),ho=a(H,"CODE",{});var Qi=s(ho);ja=i(Qi,"X"),Qi.forEach(o),Sa=i(H,` is the source text. The
target text format is `),uo=a(H,"CODE",{});var Ji=s(uo);Aa=i(Ji,"[tgt_lang_code] X [eos]"),Ji.forEach(o),Na=i(H,". "),mo=a(H,"CODE",{});var Yi=s(mo);Ia=i(Yi,"bos"),Yi.forEach(o),Da=i(H," is never used."),H.forEach(o),yn=c(t),fe=a(t,"P",{});var Gn=s(fe);Oa=i(Gn,"However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Ne=a(Gn,"A",{href:!0,rel:!0});var Zi=s(Ne);Xa=i(Zi,"the paper"),Zi.forEach(o),Ga=i(Gn," to learn more about this."),Gn.forEach(o),Pn=c(t),W=a(t,"P",{});var Kt=s(W);Ra=i(Kt,"In cases where the language code is needed, The regular "),Ie=a(Kt,"A",{href:!0});var xi=s(Ie);fo=a(xi,"STRONG",{});var ed=s(fo);Wa=i(ed,"call"),ed.forEach(o),Ua=i(xi,"()"),xi.forEach(o),Ha=i(Kt,` will encode source text format, and it should be wrapped
inside the context manager `),Ft=a(Kt,"A",{href:!0});var td=s(Ft);Va=i(td,"as_target_tokenizer()"),td.forEach(o),Ka=i(Kt," to encode target text format."),Kt.forEach(o),wn=c(t),Mt=a(t,"UL",{});var od=s(Mt);_o=a(od,"LI",{});var nd=s(_o);Qa=i(nd,"Supervised training"),nd.forEach(o),od.forEach(o),Ln=c(t),f(De.$$.fragment,t),qn=c(t),jt=a(t,"UL",{});var ad=s(jt);Oe=a(ad,"LI",{});var Rn=s(Oe);go=a(Rn,"P",{});var sd=s(go);Ja=i(sd,"Generation"),sd.forEach(o),Ya=c(Rn),ee=a(Rn,"P",{});var Qt=s(ee);Za=i(Qt,"While generating the target text set the "),bo=a(Qt,"CODE",{});var rd=s(bo);es=i(rd,"decoder_start_token_id"),rd.forEach(o),ts=i(Qt,` to the target language id. The following
example shows how to translate Python to English using the `),ko=a(Qt,"CODE",{});var id=s(ko);os=i(id,"uclanlp/plbart-python-en_XX"),id.forEach(o),ns=i(Qt," model."),Qt.forEach(o),Rn.forEach(o),ad.forEach(o),zn=c(t),f(Xe.$$.fragment,t),Bn=c(t),te=a(t,"H2",{class:!0});var Wn=s(te);_e=a(Wn,"A",{id:!0,class:!0,href:!0});var dd=s(_e);vo=a(dd,"SPAN",{});var ld=s(vo);f(Ge.$$.fragment,ld),ld.forEach(o),dd.forEach(o),as=c(Wn),To=a(Wn,"SPAN",{});var cd=s(To);ss=i(cd,"PLBartConfig"),cd.forEach(o),Wn.forEach(o),$n=c(t),C=a(t,"DIV",{class:!0});var V=s(C);f(Re.$$.fragment,V),rs=c(V),oe=a(V,"P",{});var Jt=s(oe);is=i(Jt,"This is the configuration class to store the configuration of a "),St=a(Jt,"A",{href:!0});var pd=s(St);ds=i(pd,"PLBartModel"),pd.forEach(o),ls=i(Jt,`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),We=a(Jt,"A",{href:!0,rel:!0});var hd=s(We);cs=i(hd,"uclanlp/plbart-base"),hd.forEach(o),ps=i(Jt," architecture."),Jt.forEach(o),hs=c(V),ne=a(V,"P",{});var Yt=s(ne);us=i(Yt,"Configuration objects inherit from "),At=a(Yt,"A",{href:!0});var ud=s(At);ms=i(ud,"PretrainedConfig"),ud.forEach(o),fs=i(Yt,` and can be used to control the model outputs. Read the
documentation from `),Nt=a(Yt,"A",{href:!0});var md=s(Nt);_s=i(md,"PretrainedConfig"),md.forEach(o),gs=i(Yt," for more information."),Yt.forEach(o),bs=c(V),yo=a(V,"P",{});var fd=s(yo);ks=i(fd,"Example:"),fd.forEach(o),vs=c(V),f(Ue.$$.fragment,V),V.forEach(o),xn=c(t),ae=a(t,"H2",{class:!0});var Un=s(ae);ge=a(Un,"A",{id:!0,class:!0,href:!0});var _d=s(ge);Po=a(_d,"SPAN",{});var gd=s(Po);f(He.$$.fragment,gd),gd.forEach(o),_d.forEach(o),Ts=c(Un),wo=a(Un,"SPAN",{});var bd=s(wo);ys=i(bd,"PLBartTokenizer"),bd.forEach(o),Un.forEach(o),Cn=c(t),w=a(t,"DIV",{class:!0});var $=s(w);f(Ve.$$.fragment,$),Ps=c($),Lo=a($,"P",{});var kd=s(Lo);ws=i(kd,"Construct an PLBART tokenizer."),kd.forEach(o),Ls=c($),O=a($,"P",{});var qe=s(O);qs=i(qe,"Adapted from "),It=a(qe,"A",{href:!0});var vd=s(It);zs=i(vd,"RobertaTokenizer"),vd.forEach(o),Bs=i(qe," and "),Dt=a(qe,"A",{href:!0});var Td=s(Dt);$s=i(Td,"XLNetTokenizer"),Td.forEach(o),xs=i(qe,`. Based on
`),Ke=a(qe,"A",{href:!0,rel:!0});var yd=s(Ke);Cs=i(yd,"SentencePiece"),yd.forEach(o),Es=i(qe,"."),qe.forEach(o),Fs=c($),Qe=a($,"P",{});var Hn=s(Qe);Ms=i(Hn,"The tokenization method is "),qo=a(Hn,"CODE",{});var Pd=s(qo);js=i(Pd,"<tokens> <eos> <language code>"),Pd.forEach(o),Ss=i(Hn," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Hn.forEach(o),As=c($),zo=a($,"P",{});var wd=s(zo);Ns=i(wd,"Examples:"),wd.forEach(o),Is=c($),f(Je.$$.fragment,$),Ds=c($),be=a($,"DIV",{class:!0});var Vn=s(be);f(Ye.$$.fragment,Vn),Os=c(Vn),Bo=a(Vn,"P",{});var Ld=s(Bo);Xs=i(Ld,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Ld.forEach(o),Vn.forEach(o),Gs=c($),I=a($,"DIV",{class:!0});var ze=s(I);f(Ze.$$.fragment,ze),Rs=c(ze),et=a(ze,"P",{});var Kn=s(et);Ws=i(Kn,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),$o=a(Kn,"CODE",{});var qd=s($o);Us=i(qd,"X"),qd.forEach(o),Hs=i(Kn," represents the sequence:"),Kn.forEach(o),Vs=c(ze),tt=a(ze,"UL",{});var Qn=s(tt);ot=a(Qn,"LI",{});var Jn=s(ot);xo=a(Jn,"CODE",{});var zd=s(xo);Ks=i(zd,"input_ids"),zd.forEach(o),Qs=i(Jn," (for encoder) "),Co=a(Jn,"CODE",{});var Bd=s(Co);Js=i(Bd,"X [eos, src_lang_code]"),Bd.forEach(o),Jn.forEach(o),Ys=c(Qn),nt=a(Qn,"LI",{});var Yn=s(nt);Eo=a(Yn,"CODE",{});var $d=s(Eo);Zs=i($d,"decoder_input_ids"),$d.forEach(o),er=i(Yn,": (for decoder) "),Fo=a(Yn,"CODE",{});var xd=s(Fo);tr=i(xd,"X [eos, tgt_lang_code]"),xd.forEach(o),Yn.forEach(o),Qn.forEach(o),or=c(ze),Mo=a(ze,"P",{});var Cd=s(Mo);nr=i(Cd,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Cd.forEach(o),ze.forEach(o),$.forEach(o),En=c(t),se=a(t,"H2",{class:!0});var Zn=s(se);ke=a(Zn,"A",{id:!0,class:!0,href:!0});var Ed=s(ke);jo=a(Ed,"SPAN",{});var Fd=s(jo);f(at.$$.fragment,Fd),Fd.forEach(o),Ed.forEach(o),ar=c(Zn),So=a(Zn,"SPAN",{});var Md=s(So);sr=i(Md,"PLBartModel"),Md.forEach(o),Zn.forEach(o),Fn=c(t),A=a(t,"DIV",{class:!0});var Be=s(A);f(st.$$.fragment,Be),rr=c(Be),rt=a(Be,"P",{});var ea=s(rt);ir=i(ea,`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ot=a(ea,"A",{href:!0});var jd=s(Ot);dr=i(jd,"PreTrainedModel"),jd.forEach(o),lr=i(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(o),cr=c(Be),it=a(Be,"P",{});var ta=s(it);pr=i(ta,"This model is also a PyTorch "),dt=a(ta,"A",{href:!0,rel:!0});var Sd=s(dt);hr=i(Sd,"torch.nn.Module"),Sd.forEach(o),ur=i(ta,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ta.forEach(o),mr=c(Be),j=a(Be,"DIV",{class:!0});var K=s(j);f(lt.$$.fragment,K),fr=c(K),re=a(K,"P",{});var Zt=s(re);_r=i(Zt,"The "),Xt=a(Zt,"A",{href:!0});var Ad=s(Xt);gr=i(Ad,"PLBartModel"),Ad.forEach(o),br=i(Zt," forward method, overrides the "),Ao=a(Zt,"CODE",{});var Nd=s(Ao);kr=i(Nd,"__call__"),Nd.forEach(o),vr=i(Zt," special method."),Zt.forEach(o),Tr=c(K),f(ve.$$.fragment,K),yr=c(K),No=a(K,"P",{});var Id=s(No);Pr=i(Id,"Example:"),Id.forEach(o),wr=c(K),f(ct.$$.fragment,K),K.forEach(o),Be.forEach(o),Mn=c(t),ie=a(t,"H2",{class:!0});var oa=s(ie);Te=a(oa,"A",{id:!0,class:!0,href:!0});var Dd=s(Te);Io=a(Dd,"SPAN",{});var Od=s(Io);f(pt.$$.fragment,Od),Od.forEach(o),Dd.forEach(o),Lr=c(oa),Do=a(oa,"SPAN",{});var Xd=s(Do);qr=i(Xd,"PLBartForConditionalGeneration"),Xd.forEach(o),oa.forEach(o),jn=c(t),N=a(t,"DIV",{class:!0});var $e=s(N);f(ht.$$.fragment,$e),zr=c($e),ut=a($e,"P",{});var na=s(ut);Br=i(na,`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Gt=a(na,"A",{href:!0});var Gd=s(Gt);$r=i(Gd,"PreTrainedModel"),Gd.forEach(o),xr=i(na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),na.forEach(o),Cr=c($e),mt=a($e,"P",{});var aa=s(mt);Er=i(aa,"This model is also a PyTorch "),ft=a(aa,"A",{href:!0,rel:!0});var Rd=s(ft);Fr=i(Rd,"torch.nn.Module"),Rd.forEach(o),Mr=i(aa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),aa.forEach(o),jr=c($e),L=a($e,"DIV",{class:!0});var x=s(L);f(_t.$$.fragment,x),Sr=c(x),de=a(x,"P",{});var eo=s(de);Ar=i(eo,"The "),Rt=a(eo,"A",{href:!0});var Wd=s(Rt);Nr=i(Wd,"PLBartForConditionalGeneration"),Wd.forEach(o),Ir=i(eo," forward method, overrides the "),Oo=a(eo,"CODE",{});var Ud=s(Oo);Dr=i(Ud,"__call__"),Ud.forEach(o),Or=i(eo," special method."),eo.forEach(o),Xr=c(x),f(ye.$$.fragment,x),Gr=c(x),Xo=a(x,"P",{});var Hd=s(Xo);Rr=i(Hd,"Token in-filling example:"),Hd.forEach(o),Wr=c(x),Go=a(x,"BLOCKQUOTE",{});var Vd=s(Go);Ro=a(Vd,"BLOCKQUOTE",{});var Kd=s(Ro);Wo=a(Kd,"BLOCKQUOTE",{});var Qd=s(Wo);Uo=a(Qd,"P",{});var Jd=s(Uo);Ur=i(Jd,"from transformers import PLBartTokenizer, PLBartForConditionalGeneration, PLBartConfig"),Jd.forEach(o),Qd.forEach(o),Kd.forEach(o),Vd.forEach(o),Hr=c(x),Ho=a(x,"BLOCKQUOTE",{});var Yd=s(Ho);Vo=a(Yd,"BLOCKQUOTE",{});var Zd=s(Vo);Ko=a(Zd,"BLOCKQUOTE",{});var el=s(Ko);Qo=a(el,"P",{});var tl=s(Qo);Vr=i(tl,`model = PLBartForConditionalGeneration.from_pretrained(\u2018uclanlp/plbart-base\u2019) >>> tokenizer =
PLBartTokenizer.from_pretrained(\u2018uclanlp/plbart-base\u2019, src_lang=\u2018java\u2019, tgt_lang=\u2018java\u2019) >>> METHOD_TO_FILL =
\u201Cpublic static main (String args[0]) { data=Date(); System.out. String.format(\u201CCurrent Date : % tc\u201D, ));}\u201D >>>
inputs = tokenizer([METHOD_TO_FILL], max_length=1024, return_tensors=\u2018pt\u2019) >>> # Generate Filled Code >>>
generated_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True) >>>
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in
generated_ids])`),tl.forEach(o),el.forEach(o),Zd.forEach(o),Yd.forEach(o),Kr=c(x),Jo=a(x,"P",{});var ol=s(Jo);Qr=i(ol,"Mask-filling example:"),ol.forEach(o),Jr=c(x),Yo=a(x,"BLOCKQUOTE",{});var nl=s(Yo);Zo=a(nl,"BLOCKQUOTE",{});var al=s(Zo);en=a(al,"BLOCKQUOTE",{});var sl=s(en);tn=a(sl,"P",{});var rl=s(tn);Yr=i(rl,`from transformers import PLBartTokenizer, PLBartForConditionalGeneration >>> tokenizer =
PLBartTokenizer.from_pretrained(\u2018uclanlp/plbart-base\u2019) >>> # en_XX is the language symbol id <LID> for English
TXT = \u201D</s> Is 0 the <mask> Fibonacci <mask> ? </s> en_XX\u201D >>> model =
PLBartForConditionalGeneration.from_pretrained(\u2018uclanlp/plbart-base\u2019) >>> input_ids = tokenizer([TXT],
add_special_tokens=False, return_tensors=\u2018pt\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits >>>
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs = logits[0,
masked_index].softmax(dim=0) >>> values, predictions = probs.topk(5) >>> tokenizer.decode(predictions).split()`),rl.forEach(o),sl.forEach(o),al.forEach(o),nl.forEach(o),x.forEach(o),$e.forEach(o),Sn=c(t),le=a(t,"H2",{class:!0});var sa=s(le);Pe=a(sa,"A",{id:!0,class:!0,href:!0});var il=s(Pe);on=a(il,"SPAN",{});var dl=s(on);f(gt.$$.fragment,dl),dl.forEach(o),il.forEach(o),Zr=c(sa),nn=a(sa,"SPAN",{});var ll=s(nn);ei=i(ll,"PLBartForSequenceClassification"),ll.forEach(o),sa.forEach(o),An=c(t),E=a(t,"DIV",{class:!0});var Q=s(E);f(bt.$$.fragment,Q),ti=c(Q),an=a(Q,"P",{});var cl=s(an);oi=i(cl,`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),cl.forEach(o),ni=c(Q),kt=a(Q,"P",{});var ra=s(kt);ai=i(ra,"This model inherits from "),Wt=a(ra,"A",{href:!0});var pl=s(Wt);si=i(pl,"PreTrainedModel"),pl.forEach(o),ri=i(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(o),ii=c(Q),vt=a(Q,"P",{});var ia=s(vt);di=i(ia,"This model is also a PyTorch "),Tt=a(ia,"A",{href:!0,rel:!0});var hl=s(Tt);li=i(hl,"torch.nn.Module"),hl.forEach(o),ci=i(ia,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ia.forEach(o),pi=c(Q),z=a(Q,"DIV",{class:!0});var S=s(z);f(yt.$$.fragment,S),hi=c(S),ce=a(S,"P",{});var to=s(ce);ui=i(to,"The "),Ut=a(to,"A",{href:!0});var ul=s(Ut);mi=i(ul,"PLBartForSequenceClassification"),ul.forEach(o),fi=i(to," forward method, overrides the "),sn=a(to,"CODE",{});var ml=s(sn);_i=i(ml,"__call__"),ml.forEach(o),gi=i(to," special method."),to.forEach(o),bi=c(S),f(we.$$.fragment,S),ki=c(S),rn=a(S,"P",{});var fl=s(rn);vi=i(fl,"Example of single-label classification:"),fl.forEach(o),Ti=c(S),f(Pt.$$.fragment,S),yi=c(S),dn=a(S,"P",{});var _l=s(dn);Pi=i(_l,"Example of multi-label classification:"),_l.forEach(o),wi=c(S),f(wt.$$.fragment,S),S.forEach(o),Q.forEach(o),Nn=c(t),pe=a(t,"H2",{class:!0});var da=s(pe);Le=a(da,"A",{id:!0,class:!0,href:!0});var gl=s(Le);ln=a(gl,"SPAN",{});var bl=s(ln);f(Lt.$$.fragment,bl),bl.forEach(o),gl.forEach(o),Li=c(da),cn=a(da,"SPAN",{});var kl=s(cn);qi=i(kl,"PLBartForCausalLM"),kl.forEach(o),da.forEach(o),In=c(t),qt=a(t,"DIV",{class:!0});var vl=s(qt);U=a(vl,"DIV",{class:!0});var oo=s(U);f(zt.$$.fragment,oo),zi=c(oo),pn=a(oo,"P",{});var Tl=s(pn);Bi=i(Tl,"Example:"),Tl.forEach(o),$i=c(oo),f(Bt.$$.fragment,oo),oo.forEach(o),vl.forEach(o),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(xl)),d(P,"id","plbart"),d(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(P,"href","#plbart"),d(v,"class","relative group"),d(Ce,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),d(Ce,"rel","nofollow"),d(Ee,"href","https://www.github.com/gchhablani"),d(Ee,"rel","nofollow"),d(ue,"id","overview-of-plbart"),d(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ue,"href","#overview-of-plbart"),d(Y,"class","relative group"),d(Me,"href","https://arxiv.org/abs/2103.06333"),d(Me,"rel","nofollow"),d(je,"href","https://huggingface.co/gchhablani"),d(je,"rel","nofollow"),d(Se,"href","https://github.com/wasiahmad/PLBART"),d(Se,"rel","nofollow"),d(me,"id","training-of-plbart"),d(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(me,"href","#training-of-plbart"),d(Z,"class","relative group"),d(Ne,"href","https://arxiv.org/abs/2103.06333"),d(Ne,"rel","nofollow"),d(Ie,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),d(Ft,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartTokenizer.as_target_tokenizer"),d(_e,"id","transformers.PLBartConfig"),d(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_e,"href","#transformers.PLBartConfig"),d(te,"class","relative group"),d(St,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartModel"),d(We,"href","https://huggingface.co/uclanlp/plbart-base"),d(We,"rel","nofollow"),d(At,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),d(Nt,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),d(C,"class","docstring"),d(ge,"id","transformers.PLBartTokenizer"),d(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ge,"href","#transformers.PLBartTokenizer"),d(ae,"class","relative group"),d(It,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizer"),d(Dt,"href","/docs/transformers/master/en/model_doc/xlnet#transformers.XLNetTokenizer"),d(Ke,"href","https://github.com/google/sentencepiece"),d(Ke,"rel","nofollow"),d(be,"class","docstring"),d(I,"class","docstring"),d(w,"class","docstring"),d(ke,"id","transformers.PLBartModel"),d(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ke,"href","#transformers.PLBartModel"),d(se,"class","relative group"),d(Ot,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(dt,"rel","nofollow"),d(Xt,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartModel"),d(j,"class","docstring"),d(A,"class","docstring"),d(Te,"id","transformers.PLBartForConditionalGeneration"),d(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Te,"href","#transformers.PLBartForConditionalGeneration"),d(ie,"class","relative group"),d(Gt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(ft,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ft,"rel","nofollow"),d(Rt,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartForConditionalGeneration"),d(L,"class","docstring"),d(N,"class","docstring"),d(Pe,"id","transformers.PLBartForSequenceClassification"),d(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Pe,"href","#transformers.PLBartForSequenceClassification"),d(le,"class","relative group"),d(Wt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(Tt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Tt,"rel","nofollow"),d(Ut,"href","/docs/transformers/master/en/model_doc/plbart#transformers.PLBartForSequenceClassification"),d(z,"class","docstring"),d(E,"class","docstring"),d(Le,"id","transformers.PLBartForCausalLM"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.PLBartForCausalLM"),d(pe,"class","relative group"),d(U,"class","docstring"),d(qt,"class","docstring")},m(t,p){e(document.head,u),h(t,q,p),h(t,v,p),e(v,P),e(P,B),_(T,B,null),e(v,y),e(v,F),e(F,la),h(t,mn,p),h(t,D,p),e(D,no),e(no,ca),e(D,pa),e(D,Ce),e(Ce,ha),e(D,ua),e(D,Ee),e(Ee,ma),e(D,fa),h(t,fn,p),h(t,Y,p),e(Y,ue),e(ue,ao),_(Fe,ao,null),e(Y,_a),e(Y,so),e(so,ga),h(t,_n,p),h(t,G,p),e(G,ba),e(G,Me),e(Me,ka),e(G,va),e(G,ro),e(ro,Ta),e(G,ya),h(t,gn,p),h(t,Ct,p),e(Ct,Pa),h(t,bn,p),h(t,Et,p),e(Et,io),e(io,wa),h(t,kn,p),h(t,R,p),e(R,La),e(R,je),e(je,qa),e(R,za),e(R,Se),e(Se,Ba),e(R,$a),h(t,vn,p),h(t,Z,p),e(Z,me),e(me,lo),_(Ae,lo,null),e(Z,xa),e(Z,co),e(co,Ca),h(t,Tn,p),h(t,M,p),e(M,Ea),e(M,po),e(po,Fa),e(M,Ma),e(M,ho),e(ho,ja),e(M,Sa),e(M,uo),e(uo,Aa),e(M,Na),e(M,mo),e(mo,Ia),e(M,Da),h(t,yn,p),h(t,fe,p),e(fe,Oa),e(fe,Ne),e(Ne,Xa),e(fe,Ga),h(t,Pn,p),h(t,W,p),e(W,Ra),e(W,Ie),e(Ie,fo),e(fo,Wa),e(Ie,Ua),e(W,Ha),e(W,Ft),e(Ft,Va),e(W,Ka),h(t,wn,p),h(t,Mt,p),e(Mt,_o),e(_o,Qa),h(t,Ln,p),_(De,t,p),h(t,qn,p),h(t,jt,p),e(jt,Oe),e(Oe,go),e(go,Ja),e(Oe,Ya),e(Oe,ee),e(ee,Za),e(ee,bo),e(bo,es),e(ee,ts),e(ee,ko),e(ko,os),e(ee,ns),h(t,zn,p),_(Xe,t,p),h(t,Bn,p),h(t,te,p),e(te,_e),e(_e,vo),_(Ge,vo,null),e(te,as),e(te,To),e(To,ss),h(t,$n,p),h(t,C,p),_(Re,C,null),e(C,rs),e(C,oe),e(oe,is),e(oe,St),e(St,ds),e(oe,ls),e(oe,We),e(We,cs),e(oe,ps),e(C,hs),e(C,ne),e(ne,us),e(ne,At),e(At,ms),e(ne,fs),e(ne,Nt),e(Nt,_s),e(ne,gs),e(C,bs),e(C,yo),e(yo,ks),e(C,vs),_(Ue,C,null),h(t,xn,p),h(t,ae,p),e(ae,ge),e(ge,Po),_(He,Po,null),e(ae,Ts),e(ae,wo),e(wo,ys),h(t,Cn,p),h(t,w,p),_(Ve,w,null),e(w,Ps),e(w,Lo),e(Lo,ws),e(w,Ls),e(w,O),e(O,qs),e(O,It),e(It,zs),e(O,Bs),e(O,Dt),e(Dt,$s),e(O,xs),e(O,Ke),e(Ke,Cs),e(O,Es),e(w,Fs),e(w,Qe),e(Qe,Ms),e(Qe,qo),e(qo,js),e(Qe,Ss),e(w,As),e(w,zo),e(zo,Ns),e(w,Is),_(Je,w,null),e(w,Ds),e(w,be),_(Ye,be,null),e(be,Os),e(be,Bo),e(Bo,Xs),e(w,Gs),e(w,I),_(Ze,I,null),e(I,Rs),e(I,et),e(et,Ws),e(et,$o),e($o,Us),e(et,Hs),e(I,Vs),e(I,tt),e(tt,ot),e(ot,xo),e(xo,Ks),e(ot,Qs),e(ot,Co),e(Co,Js),e(tt,Ys),e(tt,nt),e(nt,Eo),e(Eo,Zs),e(nt,er),e(nt,Fo),e(Fo,tr),e(I,or),e(I,Mo),e(Mo,nr),h(t,En,p),h(t,se,p),e(se,ke),e(ke,jo),_(at,jo,null),e(se,ar),e(se,So),e(So,sr),h(t,Fn,p),h(t,A,p),_(st,A,null),e(A,rr),e(A,rt),e(rt,ir),e(rt,Ot),e(Ot,dr),e(rt,lr),e(A,cr),e(A,it),e(it,pr),e(it,dt),e(dt,hr),e(it,ur),e(A,mr),e(A,j),_(lt,j,null),e(j,fr),e(j,re),e(re,_r),e(re,Xt),e(Xt,gr),e(re,br),e(re,Ao),e(Ao,kr),e(re,vr),e(j,Tr),_(ve,j,null),e(j,yr),e(j,No),e(No,Pr),e(j,wr),_(ct,j,null),h(t,Mn,p),h(t,ie,p),e(ie,Te),e(Te,Io),_(pt,Io,null),e(ie,Lr),e(ie,Do),e(Do,qr),h(t,jn,p),h(t,N,p),_(ht,N,null),e(N,zr),e(N,ut),e(ut,Br),e(ut,Gt),e(Gt,$r),e(ut,xr),e(N,Cr),e(N,mt),e(mt,Er),e(mt,ft),e(ft,Fr),e(mt,Mr),e(N,jr),e(N,L),_(_t,L,null),e(L,Sr),e(L,de),e(de,Ar),e(de,Rt),e(Rt,Nr),e(de,Ir),e(de,Oo),e(Oo,Dr),e(de,Or),e(L,Xr),_(ye,L,null),e(L,Gr),e(L,Xo),e(Xo,Rr),e(L,Wr),e(L,Go),e(Go,Ro),e(Ro,Wo),e(Wo,Uo),e(Uo,Ur),e(L,Hr),e(L,Ho),e(Ho,Vo),e(Vo,Ko),e(Ko,Qo),e(Qo,Vr),e(L,Kr),e(L,Jo),e(Jo,Qr),e(L,Jr),e(L,Yo),e(Yo,Zo),e(Zo,en),e(en,tn),e(tn,Yr),h(t,Sn,p),h(t,le,p),e(le,Pe),e(Pe,on),_(gt,on,null),e(le,Zr),e(le,nn),e(nn,ei),h(t,An,p),h(t,E,p),_(bt,E,null),e(E,ti),e(E,an),e(an,oi),e(E,ni),e(E,kt),e(kt,ai),e(kt,Wt),e(Wt,si),e(kt,ri),e(E,ii),e(E,vt),e(vt,di),e(vt,Tt),e(Tt,li),e(vt,ci),e(E,pi),e(E,z),_(yt,z,null),e(z,hi),e(z,ce),e(ce,ui),e(ce,Ut),e(Ut,mi),e(ce,fi),e(ce,sn),e(sn,_i),e(ce,gi),e(z,bi),_(we,z,null),e(z,ki),e(z,rn),e(rn,vi),e(z,Ti),_(Pt,z,null),e(z,yi),e(z,dn),e(dn,Pi),e(z,wi),_(wt,z,null),h(t,Nn,p),h(t,pe,p),e(pe,Le),e(Le,ln),_(Lt,ln,null),e(pe,Li),e(pe,cn),e(cn,qi),h(t,In,p),h(t,qt,p),e(qt,U),_(zt,U,null),e(U,zi),e(U,pn),e(pn,Bi),e(U,$i),_(Bt,U,null),Dn=!0},p(t,[p]){const $t={};p&2&&($t.$$scope={dirty:p,ctx:t}),ve.$set($t);const hn={};p&2&&(hn.$$scope={dirty:p,ctx:t}),ye.$set(hn);const un={};p&2&&(un.$$scope={dirty:p,ctx:t}),we.$set(un)},i(t){Dn||(g(T.$$.fragment,t),g(Fe.$$.fragment,t),g(Ae.$$.fragment,t),g(De.$$.fragment,t),g(Xe.$$.fragment,t),g(Ge.$$.fragment,t),g(Re.$$.fragment,t),g(Ue.$$.fragment,t),g(He.$$.fragment,t),g(Ve.$$.fragment,t),g(Je.$$.fragment,t),g(Ye.$$.fragment,t),g(Ze.$$.fragment,t),g(at.$$.fragment,t),g(st.$$.fragment,t),g(lt.$$.fragment,t),g(ve.$$.fragment,t),g(ct.$$.fragment,t),g(pt.$$.fragment,t),g(ht.$$.fragment,t),g(_t.$$.fragment,t),g(ye.$$.fragment,t),g(gt.$$.fragment,t),g(bt.$$.fragment,t),g(yt.$$.fragment,t),g(we.$$.fragment,t),g(Pt.$$.fragment,t),g(wt.$$.fragment,t),g(Lt.$$.fragment,t),g(zt.$$.fragment,t),g(Bt.$$.fragment,t),Dn=!0)},o(t){b(T.$$.fragment,t),b(Fe.$$.fragment,t),b(Ae.$$.fragment,t),b(De.$$.fragment,t),b(Xe.$$.fragment,t),b(Ge.$$.fragment,t),b(Re.$$.fragment,t),b(Ue.$$.fragment,t),b(He.$$.fragment,t),b(Ve.$$.fragment,t),b(Je.$$.fragment,t),b(Ye.$$.fragment,t),b(Ze.$$.fragment,t),b(at.$$.fragment,t),b(st.$$.fragment,t),b(lt.$$.fragment,t),b(ve.$$.fragment,t),b(ct.$$.fragment,t),b(pt.$$.fragment,t),b(ht.$$.fragment,t),b(_t.$$.fragment,t),b(ye.$$.fragment,t),b(gt.$$.fragment,t),b(bt.$$.fragment,t),b(yt.$$.fragment,t),b(we.$$.fragment,t),b(Pt.$$.fragment,t),b(wt.$$.fragment,t),b(Lt.$$.fragment,t),b(zt.$$.fragment,t),b(Bt.$$.fragment,t),Dn=!1},d(t){o(u),t&&o(q),t&&o(v),k(T),t&&o(mn),t&&o(D),t&&o(fn),t&&o(Y),k(Fe),t&&o(_n),t&&o(G),t&&o(gn),t&&o(Ct),t&&o(bn),t&&o(Et),t&&o(kn),t&&o(R),t&&o(vn),t&&o(Z),k(Ae),t&&o(Tn),t&&o(M),t&&o(yn),t&&o(fe),t&&o(Pn),t&&o(W),t&&o(wn),t&&o(Mt),t&&o(Ln),k(De,t),t&&o(qn),t&&o(jt),t&&o(zn),k(Xe,t),t&&o(Bn),t&&o(te),k(Ge),t&&o($n),t&&o(C),k(Re),k(Ue),t&&o(xn),t&&o(ae),k(He),t&&o(Cn),t&&o(w),k(Ve),k(Je),k(Ye),k(Ze),t&&o(En),t&&o(se),k(at),t&&o(Fn),t&&o(A),k(st),k(lt),k(ve),k(ct),t&&o(Mn),t&&o(ie),k(pt),t&&o(jn),t&&o(N),k(ht),k(_t),k(ye),t&&o(Sn),t&&o(le),k(gt),t&&o(An),t&&o(E),k(bt),k(yt),k(we),k(Pt),k(wt),t&&o(Nn),t&&o(pe),k(Lt),t&&o(In),t&&o(qt),k(zt),k(Bt)}}}const xl={local:"plbart",sections:[{local:"overview-of-plbart",sections:[{local:"training-of-plbart",title:"Training of PLBart"}],title:"Overview of PLBart"},{local:"transformers.PLBartConfig",title:"PLBartConfig"},{local:"transformers.PLBartTokenizer",title:"PLBartTokenizer"},{local:"transformers.PLBartModel",title:"PLBartModel"},{local:"transformers.PLBartForConditionalGeneration",title:"PLBartForConditionalGeneration"},{local:"transformers.PLBartForSequenceClassification",title:"PLBartForSequenceClassification"},{local:"transformers.PLBartForCausalLM",title:"PLBartForCausalLM"}],title:"PLBart"};function Cl(J,u,q){let{fw:v}=u;return J.$$set=P=>{"fw"in P&&q(0,v=P.fw)},[v]}class Nl extends yl{constructor(u){super();Pl(this,u,Cl,$l,wl,{fw:0})}}export{Nl as default,xl as metadata};
