import{S as oi,i as si,s as ri,e as o,k as d,w as f,t as a,L as ai,c as s,d as n,m as c,a as r,x as g,h as i,b as l,J as e,g as h,y as _,q as k,o as v,B as w}from"../../../chunks/vendor-e859c359.js";import{T as ti}from"../../../chunks/Tip-edc75249.js";import{D as Q}from"../../../chunks/Docstring-ade913b3.js";import{C as ni}from"../../../chunks/CodeBlock-ce4317c2.js";import{I as rt}from"../../../chunks/IconCopyLink-5fae3b20.js";import"../../../chunks/CopyButton-77addb3d.js";function ii(ve){let u,q,m,b,x;return{c(){u=o("p"),q=a(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=o("code"),b=a("Module"),x=a(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(y){u=s(y,"P",{});var T=r(u);q=i(T,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=s(T,"CODE",{});var D=r(m);b=i(D,"Module"),D.forEach(n),x=i(T,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),T.forEach(n)},m(y,T){h(y,u,T),e(u,q),e(u,m),e(m,b),e(u,x)},d(y){y&&n(u)}}}function li(ve){let u,q,m,b,x;return{c(){u=o("p"),q=a(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=o("code"),b=a("Module"),x=a(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(y){u=s(y,"P",{});var T=r(u);q=i(T,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=s(T,"CODE",{});var D=r(m);b=i(D,"Module"),D.forEach(n),x=i(T,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),T.forEach(n)},m(y,T){h(y,u,T),e(u,q),e(u,m),e(m,b),e(u,x)},d(y){y&&n(u)}}}function di(ve){let u,q,m,b,x,y,T,D,eo,_n,V,oe,It,we,to,Ct,no,kn,se,oo,be,so,ro,vn,at,ao,wn,it,io,bn,lt,lo,yn,I,ye,co,dt,po,ho,uo,L,mo,ct,fo,go,pt,_o,ko,Dt,vo,wo,bo,Se,yo,Lt,So,To,qo,A,zo,Nt,$o,Eo,Qt,xo,Ao,Ot,Po,Mo,Wt,Fo,Io,Sn,C,Co,Te,Do,Lo,qe,No,Qo,ze,Oo,Wo,Tn,J,re,jt,$e,jo,Bt,Bo,qn,N,Ee,Uo,K,Ho,ht,Vo,Jo,xe,Ko,Ro,Go,R,Xo,ut,Yo,Zo,mt,es,ts,zn,G,ae,Ut,Ae,ns,Ht,os,$n,S,Pe,ss,Vt,rs,as,Me,is,ft,ls,ds,cs,O,Fe,ps,Jt,hs,us,Ie,gt,ms,Kt,fs,gs,_t,_s,Rt,ks,vs,ie,Ce,ws,De,bs,Gt,ys,Ss,Ts,W,Le,qs,kt,zs,vt,$s,Es,Xt,xs,As,Yt,En,X,le,Zt,Ne,Ps,en,Ms,xn,P,Qe,Fs,Oe,Is,tn,Cs,Ds,Ls,We,Ns,wt,Qs,Os,Ws,j,je,js,nn,Bs,Us,Be,bt,Hs,on,Vs,Js,yt,Ks,sn,Rs,An,Y,de,rn,Ue,Gs,an,Xs,Pn,M,He,Ys,Ve,Zs,Je,er,tr,nr,Ke,or,Re,sr,rr,ar,z,Ge,ir,Z,lr,St,dr,cr,ln,pr,hr,ur,ce,mr,dn,fr,gr,Xe,Mn,ee,pe,cn,Ye,_r,pn,kr,Fn,F,Ze,vr,te,wr,hn,br,yr,un,Sr,Tr,qr,et,zr,tt,$r,Er,xr,$,nt,Ar,ne,Pr,Tt,Mr,Fr,mn,Ir,Cr,Dr,he,Lr,fn,Nr,Qr,ot,In;return y=new rt({}),we=new rt({}),$e=new rt({}),Ee=new Q({props:{name:"class transformers.SplinterConfig",anchor:"transformers.SplinterConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"question_token_id",val:" = 104"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/configuration_splinter.py#L32",parametersDescription:[{anchor:"transformers.SplinterConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the Splinter model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterModel">SplinterModel</a>.`,name:"vocab_size"},{anchor:"transformers.SplinterConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.SplinterConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.SplinterConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.SplinterConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.SplinterConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SplinterConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.SplinterConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.SplinterConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.SplinterConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterModel">SplinterModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.SplinterConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SplinterConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.SplinterConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.SplinterConfig.question_token_id",description:`<strong>question_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 104) &#x2014;
The id of the <code>[QUESTION]</code> token.</p>
<p>Example &#x2014;:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import SplinterModel, SplinterConfig</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<h1 class="relative group">
	<a id="initializing-a-splinter-tau/splinter-base-style-configuration" class="header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" href="#initializing-a-splinter-tau/splinter-base-style-configuration">
		<span><iconcopylink></iconcopylink></span>
	</a>
	<span>
		Initializing a Splinter tau/splinter-base style configuration
	</span>
</h1>

<p>configuration = SplinterConfig()</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<h1 class="relative group">
	<a id="initializing-a-model-from-the-tau/splinter-base-style-configuration" class="header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full" href="#initializing-a-model-from-the-tau/splinter-base-style-configuration">
		<span><iconcopylink></iconcopylink></span>
	</a>
	<span>
		Initializing a model from the tau/splinter-base style configuration
	</span>
</h1>

<p>model = SplinterModel(configuration)</p>
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
</blockquote>`,name:"question_token_id"}]}}),Ae=new rt({}),Pe=new Q({props:{name:"class transformers.SplinterTokenizer",anchor:"transformers.SplinterTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"question_token",val:" = '[QUESTION]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter.py#L75",parametersDescription:[{anchor:"transformers.SplinterTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.SplinterTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.SplinterTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.SplinterTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.SplinterTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.SplinterTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.SplinterTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.SplinterTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.SplinterTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.SplinterTokenizer.question_token",description:`<strong>question_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[QUESTION]&quot;</code>) &#x2014;
The token used for constructing question representations.`,name:"question_token"},{anchor:"transformers.SplinterTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip<em>accents &#x2014; (<code>bool</code>, _optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}]}}),Fe=new Q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.SplinterTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter.py#L218",parametersDescription:[{anchor:"transformers.SplinterTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
The question token IDs if pad_on_right, else context tokens IDs`,name:"token_ids_0"},{anchor:"transformers.SplinterTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
The context token IDs if pad_on_right, else question token IDs`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ce=new Q({props:{name:"get_special_tokens_mask",anchor:"transformers.SplinterTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter.py#L250",parametersDescription:[{anchor:"transformers.SplinterTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.SplinterTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.SplinterTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Le=new Q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.SplinterTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter.py#L278",parametersDescription:[{anchor:"transformers.SplinterTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.SplinterTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ne=new rt({}),Qe=new Q({props:{name:"class transformers.SplinterTokenizerFast",anchor:"transformers.SplinterTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"question_token",val:" = '[QUESTION]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter_fast.py#L55",parametersDescription:[{anchor:"transformers.SplinterTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.SplinterTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.SplinterTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.SplinterTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.SplinterTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.SplinterTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.SplinterTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.SplinterTokenizerFast.question_token",description:`<strong>question_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[QUESTION]&quot;</code>) &#x2014;
The token used for constructing question representations.`,name:"question_token"},{anchor:"transformers.SplinterTokenizerFast.clean_text",description:`<strong>clean_text</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean the text before tokenization by removing any control characters and replacing all
whitespaces by the classic one.`,name:"clean_text"},{anchor:"transformers.SplinterTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).
strip<em>accents &#x2014; (<code>bool</code>, _optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).
wordpieces<em>prefix &#x2014; (<code>str</code>, _optional</em>, defaults to <code>&quot;##&quot;</code>):
The prefix for subwords.`,name:"tokenize_chinese_chars"}]}}),je=new Q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.SplinterTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter_fast.py#L153",parametersDescription:[{anchor:"transformers.SplinterTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
The question token IDs if pad_on_right, else context tokens IDs`,name:"token_ids_0"},{anchor:"transformers.SplinterTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
The context token IDs if pad_on_right, else question token IDs`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ue=new rt({}),He=new Q({props:{name:"class transformers.SplinterModel",anchor:"transformers.SplinterModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/modeling_splinter.py#L608",parametersDescription:[{anchor:"transformers.SplinterModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterConfig">SplinterConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ge=new Q({props:{name:"forward",anchor:"transformers.SplinterModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/modeling_splinter.py#L639",parametersDescription:[{anchor:"transformers.SplinterModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterTokenizer">transformers.SplinterTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SplinterModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SplinterModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SplinterModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SplinterModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SplinterModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SplinterModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SplinterModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SplinterModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SplinterModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.SplinterModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.SplinterModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.SplinterModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterConfig"
>SplinterConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ce=new ti({props:{$$slots:{default:[ii]},$$scope:{ctx:ve}}}),Xe=new ni({props:{code:`from transformers import SplinterTokenizer, SplinterModel
import torch

tokenizer = SplinterTokenizer.from_pretrained('tau/splinter-base')
model = SplinterModel.from_pretrained('tau/splinter-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SplinterTokenizer, SplinterModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SplinterTokenizer.from_pretrained(<span class="hljs-string">&#x27;tau/splinter-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SplinterModel.from_pretrained(<span class="hljs-string">&#x27;tau/splinter-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ye=new rt({}),Ze=new Q({props:{name:"class transformers.SplinterForQuestionAnswering",anchor:"transformers.SplinterForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/modeling_splinter.py#L830",parametersDescription:[{anchor:"transformers.SplinterForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterConfig">SplinterConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),nt=new Q({props:{name:"forward",anchor:"transformers.SplinterForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"question_positions",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/modeling_splinter.py#L841",parametersDescription:[{anchor:"transformers.SplinterForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterTokenizer">transformers.SplinterTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SplinterForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SplinterForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SplinterForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SplinterForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SplinterForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SplinterForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SplinterForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SplinterForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SplinterForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the
sequence are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.SplinterForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the
sequence are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.SplinterForQuestionAnswering.forward.question_positions",description:`<strong>question_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_questions)</code>, <em>optional</em>) &#x2014;
The positions of all question tokens. If given, start_logits and end_logits will be of shape
<code>(batch_size, num_questions, sequence_length)</code>. If None, the first question token in each sequence in
the batch will be the only one for which start_logits and end_logits are calculated and they will be of
shape <code>(batch_size, sequence_length)</code>.`,name:"question_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterConfig"
>SplinterConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),he=new ti({props:{$$slots:{default:[li]},$$scope:{ctx:ve}}}),ot=new ni({props:{code:`from transformers import SplinterTokenizer, SplinterForQuestionAnswering
import torch

tokenizer = SplinterTokenizer.from_pretrained('tau/splinter-base')
model = SplinterForQuestionAnswering.from_pretrained('tau/splinter-base')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors='pt')
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SplinterTokenizer, SplinterForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SplinterTokenizer.from_pretrained(<span class="hljs-string">&#x27;tau/splinter-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SplinterForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;tau/splinter-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){u=o("meta"),q=d(),m=o("h1"),b=o("a"),x=o("span"),f(y.$$.fragment),T=d(),D=o("span"),eo=a("Splinter"),_n=d(),V=o("h2"),oe=o("a"),It=o("span"),f(we.$$.fragment),to=d(),Ct=o("span"),no=a("Overview"),kn=d(),se=o("p"),oo=a("The Splinter model was proposed in "),be=o("a"),so=a("Few-Shot Question Answering by Pretraining Span Selection"),ro=a(` by Ori Ram, Yuval Kirstain, Jonathan Berant, Amir Globerson, Omer Levy. Splinter
is an encoder-only transformer (similar to BERT) pretrained using the recurring span selection task on a large corpus
comprising Wikipedia and the Toronto Book Corpus.`),vn=d(),at=o("p"),ao=a("The abstract from the paper is the following:"),wn=d(),it=o("p"),io=a(`In several question answering benchmarks, pretrained models have reached human parity through fine-tuning on an order
of 100,000 annotated questions and answers. We explore the more realistic few-shot setting, where only a few hundred
training examples are available, and observe that standard models perform poorly, highlighting the discrepancy between
current pretraining objectives and question answering. We propose a new pretraining scheme tailored for question
answering: recurring span selection. Given a passage with multiple sets of recurring spans, we mask in each set all
recurring spans but one, and ask the model to select the correct span in the passage for each masked span. Masked spans
are replaced with a special token, viewed as a question representation, that is later used during fine-tuning to select
the answer span. The resulting model obtains surprisingly good results on multiple benchmarks (e.g., 72.7 F1 on SQuAD
with only 128 training examples), while maintaining competitive performance in the high-resource setting.`),bn=d(),lt=o("p"),lo=a("Tips:"),yn=d(),I=o("ul"),ye=o("li"),co=a(`Splinter was trained to predict answers spans conditioned on a special [QUESTION] token. These tokens contextualize
to question representations which are used to predict the answers. This layer is called QASS, and is the default
behaviour in the `),dt=o("a"),po=a("SplinterForQuestionAnswering"),ho=a(" class. Therefore:"),uo=d(),L=o("li"),mo=a("Use "),ct=o("a"),fo=a("SplinterTokenizer"),go=a(" (rather than "),pt=o("a"),_o=a("BertTokenizer"),ko=a(`), as it already
contains this special token. Also, its default behavior is to use this token when two sequences are given (for
example, in the `),Dt=o("em"),vo=a("run_qa.py"),wo=a(" script)."),bo=d(),Se=o("li"),yo=a("If you plan on using Splinter outside "),Lt=o("em"),So=a("run_qa.py"),To=a(`, please keep in mind the question token - it might be important for
the success of your model, especially in a few-shot setting.`),qo=d(),A=o("li"),zo=a(`Please note there are two different checkpoints for each size of Splinter. Both are basically the same, except that
one also has the pretrained wights of the QASS layer (`),Nt=o("em"),$o=a("tau/splinter-base-qass"),Eo=a(" and "),Qt=o("em"),xo=a("tau/splinter-large-qass"),Ao=a(`) and one
doesn\u2019t (`),Ot=o("em"),Po=a("tau/splinter-base"),Mo=a(" and "),Wt=o("em"),Fo=a("tau/splinter-large"),Io=a(`). This is done to support randomly initializing this layer at
fine-tuning, as it is shown to yield better results for some cases in the paper.`),Sn=d(),C=o("p"),Co=a("This model was contributed by "),Te=o("a"),Do=a("yuvalkirstain"),Lo=a(" and "),qe=o("a"),No=a("oriram"),Qo=a(". The original code can be found "),ze=o("a"),Oo=a("here"),Wo=a("."),Tn=d(),J=o("h2"),re=o("a"),jt=o("span"),f($e.$$.fragment),jo=d(),Bt=o("span"),Bo=a("SplinterConfig"),qn=d(),N=o("div"),f(Ee.$$.fragment),Uo=d(),K=o("p"),Ho=a("This is the configuration class to store the configuration of a "),ht=o("a"),Vo=a("SplinterModel"),Jo=a(`. It is used to
instantiate an Splinter model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the Splinter `),xe=o("a"),Ko=a("tau/splinter-base"),Ro=a(" architecture."),Go=d(),R=o("p"),Xo=a("Configuration objects inherit from "),ut=o("a"),Yo=a("PretrainedConfig"),Zo=a(` and can be used to control the model
outputs. Read the documentation from `),mt=o("a"),es=a("PretrainedConfig"),ts=a(" for more information."),zn=d(),G=o("h2"),ae=o("a"),Ut=o("span"),f(Ae.$$.fragment),ns=d(),Ht=o("span"),os=a("SplinterTokenizer"),$n=d(),S=o("div"),f(Pe.$$.fragment),ss=d(),Vt=o("p"),rs=a("Construct a Splinter tokenizer. Based on WordPiece."),as=d(),Me=o("p"),is=a("This tokenizer inherits from "),ft=o("a"),ls=a("PreTrainedTokenizer"),ds=a(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),cs=d(),O=o("div"),f(Fe.$$.fragment),ps=d(),Jt=o("p"),hs=a(`Build model inputs from a pair of sequence for question answering tasks by concatenating and adding special
tokens. A Splinter sequence has the following format:`),us=d(),Ie=o("ul"),gt=o("li"),ms=a("single sequence: "),Kt=o("code"),fs=a("[CLS] X [SEP]"),gs=d(),_t=o("li"),_s=a("pair of sequences for question answering: "),Rt=o("code"),ks=a("[CLS] question_tokens [QUESTION] . [SEP] context_tokens [SEP]"),vs=d(),ie=o("div"),f(Ce.$$.fragment),ws=d(),De=o("p"),bs=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Gt=o("code"),ys=a("prepare_for_model"),Ss=a(" method."),Ts=d(),W=o("div"),f(Le.$$.fragment),qs=d(),kt=o("p"),zs=a("Create the token type IDs corresponding to the sequences passed. "),vt=o("a"),$s=a("What are token type IDs?"),Es=d(),Xt=o("p"),xs=a("Should be overridden in a subclass if the model has a special way of building those."),As=d(),Yt=o("div"),En=d(),X=o("h2"),le=o("a"),Zt=o("span"),f(Ne.$$.fragment),Ps=d(),en=o("span"),Ms=a("SplinterTokenizerFast"),xn=d(),P=o("div"),f(Qe.$$.fragment),Fs=d(),Oe=o("p"),Is=a("Construct a \u201Cfast\u201D Splinter tokenizer (backed by HuggingFace\u2019s "),tn=o("em"),Cs=a("tokenizers"),Ds=a(" library). Based on WordPiece."),Ls=d(),We=o("p"),Ns=a("This tokenizer inherits from "),wt=o("a"),Qs=a("PreTrainedTokenizerFast"),Os=a(` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),Ws=d(),j=o("div"),f(je.$$.fragment),js=d(),nn=o("p"),Bs=a(`Build model inputs from a pair of sequence for question answering tasks by concatenating and adding special
tokens. A Splinter sequence has the following format:`),Us=d(),Be=o("ul"),bt=o("li"),Hs=a("single sequence: "),on=o("code"),Vs=a("[CLS] X [SEP]"),Js=d(),yt=o("li"),Ks=a("pair of sequences for question answering: "),sn=o("code"),Rs=a("[CLS] question_tokens [QUESTION] . [SEP] context_tokens [SEP]"),An=d(),Y=o("h2"),de=o("a"),rn=o("span"),f(Ue.$$.fragment),Gs=d(),an=o("span"),Xs=a("SplinterModel"),Pn=d(),M=o("div"),f(He.$$.fragment),Ys=d(),Ve=o("p"),Zs=a(`The bare Splinter Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Je=o("a"),er=a("torch.nn.Module"),tr=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nr=d(),Ke=o("p"),or=a("The model is an encoder (with only self-attention) following the architecture described in "),Re=o("a"),sr=a(`Attention is all you
need`),rr=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion
Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),ar=d(),z=o("div"),f(Ge.$$.fragment),ir=d(),Z=o("p"),lr=a("The "),St=o("a"),dr=a("SplinterModel"),cr=a(" forward method, overrides the "),ln=o("code"),pr=a("__call__"),hr=a(" special method."),ur=d(),f(ce.$$.fragment),mr=d(),dn=o("p"),fr=a("Example:"),gr=d(),f(Xe.$$.fragment),Mn=d(),ee=o("h2"),pe=o("a"),cn=o("span"),f(Ye.$$.fragment),_r=d(),pn=o("span"),kr=a("SplinterForQuestionAnswering"),Fn=d(),F=o("div"),f(Ze.$$.fragment),vr=d(),te=o("p"),wr=a(`Splinter Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hn=o("em"),br=a("span start logits"),yr=a(" and "),un=o("em"),Sr=a("span end logits"),Tr=a(")."),qr=d(),et=o("p"),zr=a("This model is a PyTorch "),tt=o("a"),$r=a("torch.nn.Module"),Er=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xr=d(),$=o("div"),f(nt.$$.fragment),Ar=d(),ne=o("p"),Pr=a("The "),Tt=o("a"),Mr=a("SplinterForQuestionAnswering"),Fr=a(" forward method, overrides the "),mn=o("code"),Ir=a("__call__"),Cr=a(" special method."),Dr=d(),f(he.$$.fragment),Lr=d(),fn=o("p"),Nr=a("Example:"),Qr=d(),f(ot.$$.fragment),this.h()},l(t){const p=ai('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(n),q=c(t),m=s(t,"H1",{class:!0});var st=r(m);b=s(st,"A",{id:!0,class:!0,href:!0});var gn=r(b);x=s(gn,"SPAN",{});var Hr=r(x);g(y.$$.fragment,Hr),Hr.forEach(n),gn.forEach(n),T=c(st),D=s(st,"SPAN",{});var Vr=r(D);eo=i(Vr,"Splinter"),Vr.forEach(n),st.forEach(n),_n=c(t),V=s(t,"H2",{class:!0});var Cn=r(V);oe=s(Cn,"A",{id:!0,class:!0,href:!0});var Jr=r(oe);It=s(Jr,"SPAN",{});var Kr=r(It);g(we.$$.fragment,Kr),Kr.forEach(n),Jr.forEach(n),to=c(Cn),Ct=s(Cn,"SPAN",{});var Rr=r(Ct);no=i(Rr,"Overview"),Rr.forEach(n),Cn.forEach(n),kn=c(t),se=s(t,"P",{});var Dn=r(se);oo=i(Dn,"The Splinter model was proposed in "),be=s(Dn,"A",{href:!0,rel:!0});var Gr=r(be);so=i(Gr,"Few-Shot Question Answering by Pretraining Span Selection"),Gr.forEach(n),ro=i(Dn,` by Ori Ram, Yuval Kirstain, Jonathan Berant, Amir Globerson, Omer Levy. Splinter
is an encoder-only transformer (similar to BERT) pretrained using the recurring span selection task on a large corpus
comprising Wikipedia and the Toronto Book Corpus.`),Dn.forEach(n),vn=c(t),at=s(t,"P",{});var Xr=r(at);ao=i(Xr,"The abstract from the paper is the following:"),Xr.forEach(n),wn=c(t),it=s(t,"P",{});var Yr=r(it);io=i(Yr,`In several question answering benchmarks, pretrained models have reached human parity through fine-tuning on an order
of 100,000 annotated questions and answers. We explore the more realistic few-shot setting, where only a few hundred
training examples are available, and observe that standard models perform poorly, highlighting the discrepancy between
current pretraining objectives and question answering. We propose a new pretraining scheme tailored for question
answering: recurring span selection. Given a passage with multiple sets of recurring spans, we mask in each set all
recurring spans but one, and ask the model to select the correct span in the passage for each masked span. Masked spans
are replaced with a special token, viewed as a question representation, that is later used during fine-tuning to select
the answer span. The resulting model obtains surprisingly good results on multiple benchmarks (e.g., 72.7 F1 on SQuAD
with only 128 training examples), while maintaining competitive performance in the high-resource setting.`),Yr.forEach(n),bn=c(t),lt=s(t,"P",{});var Zr=r(lt);lo=i(Zr,"Tips:"),Zr.forEach(n),yn=c(t),I=s(t,"UL",{});var ue=r(I);ye=s(ue,"LI",{});var Ln=r(ye);co=i(Ln,`Splinter was trained to predict answers spans conditioned on a special [QUESTION] token. These tokens contextualize
to question representations which are used to predict the answers. This layer is called QASS, and is the default
behaviour in the `),dt=s(Ln,"A",{href:!0});var ea=r(dt);po=i(ea,"SplinterForQuestionAnswering"),ea.forEach(n),ho=i(Ln," class. Therefore:"),Ln.forEach(n),uo=c(ue),L=s(ue,"LI",{});var me=r(L);mo=i(me,"Use "),ct=s(me,"A",{href:!0});var ta=r(ct);fo=i(ta,"SplinterTokenizer"),ta.forEach(n),go=i(me," (rather than "),pt=s(me,"A",{href:!0});var na=r(pt);_o=i(na,"BertTokenizer"),na.forEach(n),ko=i(me,`), as it already
contains this special token. Also, its default behavior is to use this token when two sequences are given (for
example, in the `),Dt=s(me,"EM",{});var oa=r(Dt);vo=i(oa,"run_qa.py"),oa.forEach(n),wo=i(me," script)."),me.forEach(n),bo=c(ue),Se=s(ue,"LI",{});var Nn=r(Se);yo=i(Nn,"If you plan on using Splinter outside "),Lt=s(Nn,"EM",{});var sa=r(Lt);So=i(sa,"run_qa.py"),sa.forEach(n),To=i(Nn,`, please keep in mind the question token - it might be important for
the success of your model, especially in a few-shot setting.`),Nn.forEach(n),qo=c(ue),A=s(ue,"LI",{});var B=r(A);zo=i(B,`Please note there are two different checkpoints for each size of Splinter. Both are basically the same, except that
one also has the pretrained wights of the QASS layer (`),Nt=s(B,"EM",{});var ra=r(Nt);$o=i(ra,"tau/splinter-base-qass"),ra.forEach(n),Eo=i(B," and "),Qt=s(B,"EM",{});var aa=r(Qt);xo=i(aa,"tau/splinter-large-qass"),aa.forEach(n),Ao=i(B,`) and one
doesn\u2019t (`),Ot=s(B,"EM",{});var ia=r(Ot);Po=i(ia,"tau/splinter-base"),ia.forEach(n),Mo=i(B," and "),Wt=s(B,"EM",{});var la=r(Wt);Fo=i(la,"tau/splinter-large"),la.forEach(n),Io=i(B,`). This is done to support randomly initializing this layer at
fine-tuning, as it is shown to yield better results for some cases in the paper.`),B.forEach(n),ue.forEach(n),Sn=c(t),C=s(t,"P",{});var fe=r(C);Co=i(fe,"This model was contributed by "),Te=s(fe,"A",{href:!0,rel:!0});var da=r(Te);Do=i(da,"yuvalkirstain"),da.forEach(n),Lo=i(fe," and "),qe=s(fe,"A",{href:!0,rel:!0});var ca=r(qe);No=i(ca,"oriram"),ca.forEach(n),Qo=i(fe,". The original code can be found "),ze=s(fe,"A",{href:!0,rel:!0});var pa=r(ze);Oo=i(pa,"here"),pa.forEach(n),Wo=i(fe,"."),fe.forEach(n),Tn=c(t),J=s(t,"H2",{class:!0});var Qn=r(J);re=s(Qn,"A",{id:!0,class:!0,href:!0});var ha=r(re);jt=s(ha,"SPAN",{});var ua=r(jt);g($e.$$.fragment,ua),ua.forEach(n),ha.forEach(n),jo=c(Qn),Bt=s(Qn,"SPAN",{});var ma=r(Bt);Bo=i(ma,"SplinterConfig"),ma.forEach(n),Qn.forEach(n),qn=c(t),N=s(t,"DIV",{class:!0});var qt=r(N);g(Ee.$$.fragment,qt),Uo=c(qt),K=s(qt,"P",{});var zt=r(K);Ho=i(zt,"This is the configuration class to store the configuration of a "),ht=s(zt,"A",{href:!0});var fa=r(ht);Vo=i(fa,"SplinterModel"),fa.forEach(n),Jo=i(zt,`. It is used to
instantiate an Splinter model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the Splinter `),xe=s(zt,"A",{href:!0,rel:!0});var ga=r(xe);Ko=i(ga,"tau/splinter-base"),ga.forEach(n),Ro=i(zt," architecture."),zt.forEach(n),Go=c(qt),R=s(qt,"P",{});var $t=r(R);Xo=i($t,"Configuration objects inherit from "),ut=s($t,"A",{href:!0});var _a=r(ut);Yo=i(_a,"PretrainedConfig"),_a.forEach(n),Zo=i($t,` and can be used to control the model
outputs. Read the documentation from `),mt=s($t,"A",{href:!0});var ka=r(mt);es=i(ka,"PretrainedConfig"),ka.forEach(n),ts=i($t," for more information."),$t.forEach(n),qt.forEach(n),zn=c(t),G=s(t,"H2",{class:!0});var On=r(G);ae=s(On,"A",{id:!0,class:!0,href:!0});var va=r(ae);Ut=s(va,"SPAN",{});var wa=r(Ut);g(Ae.$$.fragment,wa),wa.forEach(n),va.forEach(n),ns=c(On),Ht=s(On,"SPAN",{});var ba=r(Ht);os=i(ba,"SplinterTokenizer"),ba.forEach(n),On.forEach(n),$n=c(t),S=s(t,"DIV",{class:!0});var E=r(S);g(Pe.$$.fragment,E),ss=c(E),Vt=s(E,"P",{});var ya=r(Vt);rs=i(ya,"Construct a Splinter tokenizer. Based on WordPiece."),ya.forEach(n),as=c(E),Me=s(E,"P",{});var Wn=r(Me);is=i(Wn,"This tokenizer inherits from "),ft=s(Wn,"A",{href:!0});var Sa=r(ft);ls=i(Sa,"PreTrainedTokenizer"),Sa.forEach(n),ds=i(Wn,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Wn.forEach(n),cs=c(E),O=s(E,"DIV",{class:!0});var Et=r(O);g(Fe.$$.fragment,Et),ps=c(Et),Jt=s(Et,"P",{});var Ta=r(Jt);hs=i(Ta,`Build model inputs from a pair of sequence for question answering tasks by concatenating and adding special
tokens. A Splinter sequence has the following format:`),Ta.forEach(n),us=c(Et),Ie=s(Et,"UL",{});var jn=r(Ie);gt=s(jn,"LI",{});var Or=r(gt);ms=i(Or,"single sequence: "),Kt=s(Or,"CODE",{});var qa=r(Kt);fs=i(qa,"[CLS] X [SEP]"),qa.forEach(n),Or.forEach(n),gs=c(jn),_t=s(jn,"LI",{});var Wr=r(_t);_s=i(Wr,"pair of sequences for question answering: "),Rt=s(Wr,"CODE",{});var za=r(Rt);ks=i(za,"[CLS] question_tokens [QUESTION] . [SEP] context_tokens [SEP]"),za.forEach(n),Wr.forEach(n),jn.forEach(n),Et.forEach(n),vs=c(E),ie=s(E,"DIV",{class:!0});var Bn=r(ie);g(Ce.$$.fragment,Bn),ws=c(Bn),De=s(Bn,"P",{});var Un=r(De);bs=i(Un,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Gt=s(Un,"CODE",{});var $a=r(Gt);ys=i($a,"prepare_for_model"),$a.forEach(n),Ss=i(Un," method."),Un.forEach(n),Bn.forEach(n),Ts=c(E),W=s(E,"DIV",{class:!0});var xt=r(W);g(Le.$$.fragment,xt),qs=c(xt),kt=s(xt,"P",{});var jr=r(kt);zs=i(jr,"Create the token type IDs corresponding to the sequences passed. "),vt=s(jr,"A",{href:!0});var Ea=r(vt);$s=i(Ea,"What are token type IDs?"),Ea.forEach(n),jr.forEach(n),Es=c(xt),Xt=s(xt,"P",{});var xa=r(Xt);xs=i(xa,"Should be overridden in a subclass if the model has a special way of building those."),xa.forEach(n),xt.forEach(n),As=c(E),Yt=s(E,"DIV",{class:!0}),r(Yt).forEach(n),E.forEach(n),En=c(t),X=s(t,"H2",{class:!0});var Hn=r(X);le=s(Hn,"A",{id:!0,class:!0,href:!0});var Aa=r(le);Zt=s(Aa,"SPAN",{});var Pa=r(Zt);g(Ne.$$.fragment,Pa),Pa.forEach(n),Aa.forEach(n),Ps=c(Hn),en=s(Hn,"SPAN",{});var Ma=r(en);Ms=i(Ma,"SplinterTokenizerFast"),Ma.forEach(n),Hn.forEach(n),xn=c(t),P=s(t,"DIV",{class:!0});var ge=r(P);g(Qe.$$.fragment,ge),Fs=c(ge),Oe=s(ge,"P",{});var Vn=r(Oe);Is=i(Vn,"Construct a \u201Cfast\u201D Splinter tokenizer (backed by HuggingFace\u2019s "),tn=s(Vn,"EM",{});var Fa=r(tn);Cs=i(Fa,"tokenizers"),Fa.forEach(n),Ds=i(Vn," library). Based on WordPiece."),Vn.forEach(n),Ls=c(ge),We=s(ge,"P",{});var Jn=r(We);Ns=i(Jn,"This tokenizer inherits from "),wt=s(Jn,"A",{href:!0});var Ia=r(wt);Qs=i(Ia,"PreTrainedTokenizerFast"),Ia.forEach(n),Os=i(Jn,` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),Jn.forEach(n),Ws=c(ge),j=s(ge,"DIV",{class:!0});var At=r(j);g(je.$$.fragment,At),js=c(At),nn=s(At,"P",{});var Ca=r(nn);Bs=i(Ca,`Build model inputs from a pair of sequence for question answering tasks by concatenating and adding special
tokens. A Splinter sequence has the following format:`),Ca.forEach(n),Us=c(At),Be=s(At,"UL",{});var Kn=r(Be);bt=s(Kn,"LI",{});var Br=r(bt);Hs=i(Br,"single sequence: "),on=s(Br,"CODE",{});var Da=r(on);Vs=i(Da,"[CLS] X [SEP]"),Da.forEach(n),Br.forEach(n),Js=c(Kn),yt=s(Kn,"LI",{});var Ur=r(yt);Ks=i(Ur,"pair of sequences for question answering: "),sn=s(Ur,"CODE",{});var La=r(sn);Rs=i(La,"[CLS] question_tokens [QUESTION] . [SEP] context_tokens [SEP]"),La.forEach(n),Ur.forEach(n),Kn.forEach(n),At.forEach(n),ge.forEach(n),An=c(t),Y=s(t,"H2",{class:!0});var Rn=r(Y);de=s(Rn,"A",{id:!0,class:!0,href:!0});var Na=r(de);rn=s(Na,"SPAN",{});var Qa=r(rn);g(Ue.$$.fragment,Qa),Qa.forEach(n),Na.forEach(n),Gs=c(Rn),an=s(Rn,"SPAN",{});var Oa=r(an);Xs=i(Oa,"SplinterModel"),Oa.forEach(n),Rn.forEach(n),Pn=c(t),M=s(t,"DIV",{class:!0});var _e=r(M);g(He.$$.fragment,_e),Ys=c(_e),Ve=s(_e,"P",{});var Gn=r(Ve);Zs=i(Gn,`The bare Splinter Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Je=s(Gn,"A",{href:!0,rel:!0});var Wa=r(Je);er=i(Wa,"torch.nn.Module"),Wa.forEach(n),tr=i(Gn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gn.forEach(n),nr=c(_e),Ke=s(_e,"P",{});var Xn=r(Ke);or=i(Xn,"The model is an encoder (with only self-attention) following the architecture described in "),Re=s(Xn,"A",{href:!0,rel:!0});var ja=r(Re);sr=i(ja,`Attention is all you
need`),ja.forEach(n),rr=i(Xn,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion
Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Xn.forEach(n),ar=c(_e),z=s(_e,"DIV",{class:!0});var U=r(z);g(Ge.$$.fragment,U),ir=c(U),Z=s(U,"P",{});var Pt=r(Z);lr=i(Pt,"The "),St=s(Pt,"A",{href:!0});var Ba=r(St);dr=i(Ba,"SplinterModel"),Ba.forEach(n),cr=i(Pt," forward method, overrides the "),ln=s(Pt,"CODE",{});var Ua=r(ln);pr=i(Ua,"__call__"),Ua.forEach(n),hr=i(Pt," special method."),Pt.forEach(n),ur=c(U),g(ce.$$.fragment,U),mr=c(U),dn=s(U,"P",{});var Ha=r(dn);fr=i(Ha,"Example:"),Ha.forEach(n),gr=c(U),g(Xe.$$.fragment,U),U.forEach(n),_e.forEach(n),Mn=c(t),ee=s(t,"H2",{class:!0});var Yn=r(ee);pe=s(Yn,"A",{id:!0,class:!0,href:!0});var Va=r(pe);cn=s(Va,"SPAN",{});var Ja=r(cn);g(Ye.$$.fragment,Ja),Ja.forEach(n),Va.forEach(n),_r=c(Yn),pn=s(Yn,"SPAN",{});var Ka=r(pn);kr=i(Ka,"SplinterForQuestionAnswering"),Ka.forEach(n),Yn.forEach(n),Fn=c(t),F=s(t,"DIV",{class:!0});var ke=r(F);g(Ze.$$.fragment,ke),vr=c(ke),te=s(ke,"P",{});var Mt=r(te);wr=i(Mt,`Splinter Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hn=s(Mt,"EM",{});var Ra=r(hn);br=i(Ra,"span start logits"),Ra.forEach(n),yr=i(Mt," and "),un=s(Mt,"EM",{});var Ga=r(un);Sr=i(Ga,"span end logits"),Ga.forEach(n),Tr=i(Mt,")."),Mt.forEach(n),qr=c(ke),et=s(ke,"P",{});var Zn=r(et);zr=i(Zn,"This model is a PyTorch "),tt=s(Zn,"A",{href:!0,rel:!0});var Xa=r(tt);$r=i(Xa,"torch.nn.Module"),Xa.forEach(n),Er=i(Zn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zn.forEach(n),xr=c(ke),$=s(ke,"DIV",{class:!0});var H=r($);g(nt.$$.fragment,H),Ar=c(H),ne=s(H,"P",{});var Ft=r(ne);Pr=i(Ft,"The "),Tt=s(Ft,"A",{href:!0});var Ya=r(Tt);Mr=i(Ya,"SplinterForQuestionAnswering"),Ya.forEach(n),Fr=i(Ft," forward method, overrides the "),mn=s(Ft,"CODE",{});var Za=r(mn);Ir=i(Za,"__call__"),Za.forEach(n),Cr=i(Ft," special method."),Ft.forEach(n),Dr=c(H),g(he.$$.fragment,H),Lr=c(H),fn=s(H,"P",{});var ei=r(fn);Nr=i(ei,"Example:"),ei.forEach(n),Qr=c(H),g(ot.$$.fragment,H),H.forEach(n),ke.forEach(n),this.h()},h(){l(u,"name","hf:doc:metadata"),l(u,"content",JSON.stringify(ci)),l(b,"id","splinter"),l(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(b,"href","#splinter"),l(m,"class","relative group"),l(oe,"id","overview"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#overview"),l(V,"class","relative group"),l(be,"href","https://arxiv.org/abs/2101.00438"),l(be,"rel","nofollow"),l(dt,"href","/docs/transformers/master/en/model_doc/splinter#transformers.SplinterForQuestionAnswering"),l(ct,"href","/docs/transformers/master/en/model_doc/splinter#transformers.SplinterTokenizer"),l(pt,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer"),l(Te,"href","https://huggingface.co/yuvalkirstain"),l(Te,"rel","nofollow"),l(qe,"href","https://huggingface.co/oriram"),l(qe,"rel","nofollow"),l(ze,"href","https://github.com/oriram/splinter"),l(ze,"rel","nofollow"),l(re,"id","transformers.SplinterConfig"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.SplinterConfig"),l(J,"class","relative group"),l(ht,"href","/docs/transformers/master/en/model_doc/splinter#transformers.SplinterModel"),l(xe,"href","https://huggingface.co/tau/splinter-base"),l(xe,"rel","nofollow"),l(ut,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(mt,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(N,"class","docstring"),l(ae,"id","transformers.SplinterTokenizer"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.SplinterTokenizer"),l(G,"class","relative group"),l(ft,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(O,"class","docstring"),l(ie,"class","docstring"),l(vt,"href","../glossary#token-type-ids"),l(W,"class","docstring"),l(Yt,"class","docstring"),l(S,"class","docstring"),l(le,"id","transformers.SplinterTokenizerFast"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.SplinterTokenizerFast"),l(X,"class","relative group"),l(wt,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(j,"class","docstring"),l(P,"class","docstring"),l(de,"id","transformers.SplinterModel"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.SplinterModel"),l(Y,"class","relative group"),l(Je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Je,"rel","nofollow"),l(Re,"href","https://arxiv.org/abs/1706.03762"),l(Re,"rel","nofollow"),l(St,"href","/docs/transformers/master/en/model_doc/splinter#transformers.SplinterModel"),l(z,"class","docstring"),l(M,"class","docstring"),l(pe,"id","transformers.SplinterForQuestionAnswering"),l(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pe,"href","#transformers.SplinterForQuestionAnswering"),l(ee,"class","relative group"),l(tt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(tt,"rel","nofollow"),l(Tt,"href","/docs/transformers/master/en/model_doc/splinter#transformers.SplinterForQuestionAnswering"),l($,"class","docstring"),l(F,"class","docstring")},m(t,p){e(document.head,u),h(t,q,p),h(t,m,p),e(m,b),e(b,x),_(y,x,null),e(m,T),e(m,D),e(D,eo),h(t,_n,p),h(t,V,p),e(V,oe),e(oe,It),_(we,It,null),e(V,to),e(V,Ct),e(Ct,no),h(t,kn,p),h(t,se,p),e(se,oo),e(se,be),e(be,so),e(se,ro),h(t,vn,p),h(t,at,p),e(at,ao),h(t,wn,p),h(t,it,p),e(it,io),h(t,bn,p),h(t,lt,p),e(lt,lo),h(t,yn,p),h(t,I,p),e(I,ye),e(ye,co),e(ye,dt),e(dt,po),e(ye,ho),e(I,uo),e(I,L),e(L,mo),e(L,ct),e(ct,fo),e(L,go),e(L,pt),e(pt,_o),e(L,ko),e(L,Dt),e(Dt,vo),e(L,wo),e(I,bo),e(I,Se),e(Se,yo),e(Se,Lt),e(Lt,So),e(Se,To),e(I,qo),e(I,A),e(A,zo),e(A,Nt),e(Nt,$o),e(A,Eo),e(A,Qt),e(Qt,xo),e(A,Ao),e(A,Ot),e(Ot,Po),e(A,Mo),e(A,Wt),e(Wt,Fo),e(A,Io),h(t,Sn,p),h(t,C,p),e(C,Co),e(C,Te),e(Te,Do),e(C,Lo),e(C,qe),e(qe,No),e(C,Qo),e(C,ze),e(ze,Oo),e(C,Wo),h(t,Tn,p),h(t,J,p),e(J,re),e(re,jt),_($e,jt,null),e(J,jo),e(J,Bt),e(Bt,Bo),h(t,qn,p),h(t,N,p),_(Ee,N,null),e(N,Uo),e(N,K),e(K,Ho),e(K,ht),e(ht,Vo),e(K,Jo),e(K,xe),e(xe,Ko),e(K,Ro),e(N,Go),e(N,R),e(R,Xo),e(R,ut),e(ut,Yo),e(R,Zo),e(R,mt),e(mt,es),e(R,ts),h(t,zn,p),h(t,G,p),e(G,ae),e(ae,Ut),_(Ae,Ut,null),e(G,ns),e(G,Ht),e(Ht,os),h(t,$n,p),h(t,S,p),_(Pe,S,null),e(S,ss),e(S,Vt),e(Vt,rs),e(S,as),e(S,Me),e(Me,is),e(Me,ft),e(ft,ls),e(Me,ds),e(S,cs),e(S,O),_(Fe,O,null),e(O,ps),e(O,Jt),e(Jt,hs),e(O,us),e(O,Ie),e(Ie,gt),e(gt,ms),e(gt,Kt),e(Kt,fs),e(Ie,gs),e(Ie,_t),e(_t,_s),e(_t,Rt),e(Rt,ks),e(S,vs),e(S,ie),_(Ce,ie,null),e(ie,ws),e(ie,De),e(De,bs),e(De,Gt),e(Gt,ys),e(De,Ss),e(S,Ts),e(S,W),_(Le,W,null),e(W,qs),e(W,kt),e(kt,zs),e(kt,vt),e(vt,$s),e(W,Es),e(W,Xt),e(Xt,xs),e(S,As),e(S,Yt),h(t,En,p),h(t,X,p),e(X,le),e(le,Zt),_(Ne,Zt,null),e(X,Ps),e(X,en),e(en,Ms),h(t,xn,p),h(t,P,p),_(Qe,P,null),e(P,Fs),e(P,Oe),e(Oe,Is),e(Oe,tn),e(tn,Cs),e(Oe,Ds),e(P,Ls),e(P,We),e(We,Ns),e(We,wt),e(wt,Qs),e(We,Os),e(P,Ws),e(P,j),_(je,j,null),e(j,js),e(j,nn),e(nn,Bs),e(j,Us),e(j,Be),e(Be,bt),e(bt,Hs),e(bt,on),e(on,Vs),e(Be,Js),e(Be,yt),e(yt,Ks),e(yt,sn),e(sn,Rs),h(t,An,p),h(t,Y,p),e(Y,de),e(de,rn),_(Ue,rn,null),e(Y,Gs),e(Y,an),e(an,Xs),h(t,Pn,p),h(t,M,p),_(He,M,null),e(M,Ys),e(M,Ve),e(Ve,Zs),e(Ve,Je),e(Je,er),e(Ve,tr),e(M,nr),e(M,Ke),e(Ke,or),e(Ke,Re),e(Re,sr),e(Ke,rr),e(M,ar),e(M,z),_(Ge,z,null),e(z,ir),e(z,Z),e(Z,lr),e(Z,St),e(St,dr),e(Z,cr),e(Z,ln),e(ln,pr),e(Z,hr),e(z,ur),_(ce,z,null),e(z,mr),e(z,dn),e(dn,fr),e(z,gr),_(Xe,z,null),h(t,Mn,p),h(t,ee,p),e(ee,pe),e(pe,cn),_(Ye,cn,null),e(ee,_r),e(ee,pn),e(pn,kr),h(t,Fn,p),h(t,F,p),_(Ze,F,null),e(F,vr),e(F,te),e(te,wr),e(te,hn),e(hn,br),e(te,yr),e(te,un),e(un,Sr),e(te,Tr),e(F,qr),e(F,et),e(et,zr),e(et,tt),e(tt,$r),e(et,Er),e(F,xr),e(F,$),_(nt,$,null),e($,Ar),e($,ne),e(ne,Pr),e(ne,Tt),e(Tt,Mr),e(ne,Fr),e(ne,mn),e(mn,Ir),e(ne,Cr),e($,Dr),_(he,$,null),e($,Lr),e($,fn),e(fn,Nr),e($,Qr),_(ot,$,null),In=!0},p(t,[p]){const st={};p&2&&(st.$$scope={dirty:p,ctx:t}),ce.$set(st);const gn={};p&2&&(gn.$$scope={dirty:p,ctx:t}),he.$set(gn)},i(t){In||(k(y.$$.fragment,t),k(we.$$.fragment,t),k($e.$$.fragment,t),k(Ee.$$.fragment,t),k(Ae.$$.fragment,t),k(Pe.$$.fragment,t),k(Fe.$$.fragment,t),k(Ce.$$.fragment,t),k(Le.$$.fragment,t),k(Ne.$$.fragment,t),k(Qe.$$.fragment,t),k(je.$$.fragment,t),k(Ue.$$.fragment,t),k(He.$$.fragment,t),k(Ge.$$.fragment,t),k(ce.$$.fragment,t),k(Xe.$$.fragment,t),k(Ye.$$.fragment,t),k(Ze.$$.fragment,t),k(nt.$$.fragment,t),k(he.$$.fragment,t),k(ot.$$.fragment,t),In=!0)},o(t){v(y.$$.fragment,t),v(we.$$.fragment,t),v($e.$$.fragment,t),v(Ee.$$.fragment,t),v(Ae.$$.fragment,t),v(Pe.$$.fragment,t),v(Fe.$$.fragment,t),v(Ce.$$.fragment,t),v(Le.$$.fragment,t),v(Ne.$$.fragment,t),v(Qe.$$.fragment,t),v(je.$$.fragment,t),v(Ue.$$.fragment,t),v(He.$$.fragment,t),v(Ge.$$.fragment,t),v(ce.$$.fragment,t),v(Xe.$$.fragment,t),v(Ye.$$.fragment,t),v(Ze.$$.fragment,t),v(nt.$$.fragment,t),v(he.$$.fragment,t),v(ot.$$.fragment,t),In=!1},d(t){n(u),t&&n(q),t&&n(m),w(y),t&&n(_n),t&&n(V),w(we),t&&n(kn),t&&n(se),t&&n(vn),t&&n(at),t&&n(wn),t&&n(it),t&&n(bn),t&&n(lt),t&&n(yn),t&&n(I),t&&n(Sn),t&&n(C),t&&n(Tn),t&&n(J),w($e),t&&n(qn),t&&n(N),w(Ee),t&&n(zn),t&&n(G),w(Ae),t&&n($n),t&&n(S),w(Pe),w(Fe),w(Ce),w(Le),t&&n(En),t&&n(X),w(Ne),t&&n(xn),t&&n(P),w(Qe),w(je),t&&n(An),t&&n(Y),w(Ue),t&&n(Pn),t&&n(M),w(He),w(Ge),w(ce),w(Xe),t&&n(Mn),t&&n(ee),w(Ye),t&&n(Fn),t&&n(F),w(Ze),w(nt),w(he),w(ot)}}}const ci={local:"splinter",sections:[{local:"overview",title:"Overview"},{local:"transformers.SplinterConfig",title:"SplinterConfig"},{local:"transformers.SplinterTokenizer",title:"SplinterTokenizer"},{local:"transformers.SplinterTokenizerFast",title:"SplinterTokenizerFast"},{local:"transformers.SplinterModel",title:"SplinterModel"},{local:"transformers.SplinterForQuestionAnswering",title:"SplinterForQuestionAnswering"}],title:"Splinter"};function pi(ve,u,q){let{fw:m}=u;return ve.$$set=b=>{"fw"in b&&q(0,m=b.fw)},[m]}class ki extends oi{constructor(u){super();si(this,u,pi,di,ri,{fw:0})}}export{ki as default,ci as metadata};
