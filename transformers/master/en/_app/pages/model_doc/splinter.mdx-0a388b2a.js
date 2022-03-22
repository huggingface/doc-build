import{S as pi,i as hi,s as mi,e as o,k as d,w as f,t as a,M as ui,c as s,d as n,m as c,a as r,x as g,h as i,b as l,F as e,g as h,y as _,q as k,o as v,B as w}from"../../chunks/vendor-6b77c823.js";import{T as ci}from"../../chunks/Tip-39098574.js";import{D}from"../../chunks/Docstring-abef54e3.js";import{C as Xr}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as lt}from"../../chunks/IconCopyLink-7a11ce68.js";function fi(we){let m,q,u,b,A;return{c(){m=o("p"),q=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=o("code"),b=a("Module"),A=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){m=s(y,"P",{});var S=r(m);q=i(S,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(S,"CODE",{});var O=r(u);b=i(O,"Module"),O.forEach(n),A=i(S,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),S.forEach(n)},m(y,S){h(y,m,S),e(m,q),e(m,u),e(u,b),e(m,A)},d(y){y&&n(m)}}}function gi(we){let m,q,u,b,A;return{c(){m=o("p"),q=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=o("code"),b=a("Module"),A=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){m=s(y,"P",{});var S=r(m);q=i(S,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(S,"CODE",{});var O=r(u);b=i(O,"Module"),O.forEach(n),A=i(S,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),S.forEach(n)},m(y,S){h(y,m,S),e(m,q),e(m,u),e(u,b),e(m,A)},d(y){y&&n(m)}}}function _i(we){let m,q,u,b,A,y,S,O,oo,wn,J,se,Dt,be,so,Ot,ro,bn,re,ao,ye,io,lo,yn,dt,co,Tn,ct,po,Sn,pt,ho,zn,C,Te,mo,ht,uo,fo,go,N,_o,mt,ko,vo,ut,wo,bo,Nt,yo,To,So,Se,zo,jt,qo,$o,Eo,P,xo,Qt,Ao,Po,Wt,Mo,Fo,Bt,Io,Co,Ut,Lo,Do,qn,L,Oo,ze,No,jo,qe,Qo,Wo,$e,Bo,Uo,$n,K,ae,Ht,Ee,Ho,Vt,Vo,En,z,xe,Jo,R,Ko,ft,Ro,Go,Ae,Xo,Yo,Zo,G,es,gt,ts,ns,_t,os,ss,rs,Jt,as,is,Pe,xn,X,ie,Kt,Me,ls,Rt,ds,An,T,Fe,cs,Gt,ps,hs,Ie,ms,kt,us,fs,gs,j,Ce,_s,Xt,ks,vs,Le,vt,ws,Yt,bs,ys,wt,Ts,Zt,Ss,zs,le,De,qs,Oe,$s,en,Es,xs,As,Q,Ne,Ps,bt,Ms,yt,Fs,Is,tn,Cs,Ls,Tt,je,Pn,Y,de,nn,Qe,Ds,on,Os,Mn,M,We,Ns,Be,js,sn,Qs,Ws,Bs,Ue,Us,St,Hs,Vs,Js,W,He,Ks,rn,Rs,Gs,Ve,zt,Xs,an,Ys,Zs,qt,er,ln,tr,Fn,Z,ce,dn,Je,nr,cn,or,In,F,Ke,sr,Re,rr,Ge,ar,ir,lr,Xe,dr,Ye,cr,pr,hr,$,Ze,mr,ee,ur,$t,fr,gr,pn,_r,kr,vr,pe,wr,hn,br,yr,et,Cn,te,he,mn,tt,Tr,un,Sr,Ln,I,nt,zr,ne,qr,fn,$r,Er,gn,xr,Ar,Pr,ot,Mr,st,Fr,Ir,Cr,E,rt,Lr,oe,Dr,Et,Or,Nr,_n,jr,Qr,Wr,me,Br,kn,Ur,Hr,at,Dn;return y=new lt({}),be=new lt({}),Ee=new lt({}),xe=new D({props:{name:"class transformers.SplinterConfig",anchor:"transformers.SplinterConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"question_token_id",val:" = 104"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/configuration_splinter.py#L32",parametersDescription:[{anchor:"transformers.SplinterConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the Splinter model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterModel">SplinterModel</a>.`,name:"vocab_size"},{anchor:"transformers.SplinterConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.SplinterConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.SplinterConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.SplinterConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.SplinterConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SplinterConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.SplinterConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.SplinterConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.SplinterConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterModel">SplinterModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.SplinterConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SplinterConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.SplinterConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.SplinterConfig.question_token_id",description:`<strong>question_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 104) &#x2014;
The id of the <code>[QUESTION]</code> token.`,name:"question_token_id"}]}}),Pe=new Xr({props:{code:`from transformers import SplinterModel, SplinterConfig

# Initializing a Splinter tau/splinter-base style configuration
configuration = SplinterConfig()

# Initializing a model from the tau/splinter-base style configuration
model = SplinterModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SplinterModel, SplinterConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Splinter tau/splinter-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SplinterConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the tau/splinter-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SplinterModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Me=new lt({}),Fe=new D({props:{name:"class transformers.SplinterTokenizer",anchor:"transformers.SplinterTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"question_token",val:" = '[QUESTION]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter.py#L75",parametersDescription:[{anchor:"transformers.SplinterTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}]}}),Ce=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.SplinterTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter.py#L218",parametersDescription:[{anchor:"transformers.SplinterTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
The question token IDs if pad_on_right, else context tokens IDs`,name:"token_ids_0"},{anchor:"transformers.SplinterTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
The context token IDs if pad_on_right, else question token IDs`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),De=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.SplinterTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter.py#L250",parametersDescription:[{anchor:"transformers.SplinterTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.SplinterTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.SplinterTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ne=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.SplinterTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter.py#L278",parametersDescription:[{anchor:"transformers.SplinterTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.SplinterTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),je=new D({props:{name:"save_vocabulary",anchor:"transformers.SplinterTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter.py#L307"}}),Qe=new lt({}),We=new D({props:{name:"class transformers.SplinterTokenizerFast",anchor:"transformers.SplinterTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"question_token",val:" = '[QUESTION]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter_fast.py#L55",parametersDescription:[{anchor:"transformers.SplinterTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).
wordpieces_prefix &#x2014; (<code>str</code>, <em>optional</em>, defaults to <code>&quot;##&quot;</code>):
The prefix for subwords.`,name:"tokenize_chinese_chars"}]}}),He=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.SplinterTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/tokenization_splinter_fast.py#L153",parametersDescription:[{anchor:"transformers.SplinterTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
The question token IDs if pad_on_right, else context tokens IDs`,name:"token_ids_0"},{anchor:"transformers.SplinterTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
The context token IDs if pad_on_right, else question token IDs`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Je=new lt({}),Ke=new D({props:{name:"class transformers.SplinterModel",anchor:"transformers.SplinterModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/modeling_splinter.py#L612",parametersDescription:[{anchor:"transformers.SplinterModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterConfig">SplinterConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ze=new D({props:{name:"forward",anchor:"transformers.SplinterModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/modeling_splinter.py#L643",parametersDescription:[{anchor:"transformers.SplinterModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterTokenizer">SplinterTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SplinterModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.SplinterModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterConfig"
>SplinterConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new ci({props:{$$slots:{default:[fi]},$$scope:{ctx:we}}}),et=new Xr({props:{code:`from transformers import SplinterTokenizer, SplinterModel
import torch

tokenizer = SplinterTokenizer.from_pretrained("tau/splinter-base")
model = SplinterModel.from_pretrained("tau/splinter-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SplinterTokenizer, SplinterModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SplinterTokenizer.from_pretrained(<span class="hljs-string">&quot;tau/splinter-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SplinterModel.from_pretrained(<span class="hljs-string">&quot;tau/splinter-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tt=new lt({}),nt=new D({props:{name:"class transformers.SplinterForQuestionAnswering",anchor:"transformers.SplinterForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/modeling_splinter.py#L834",parametersDescription:[{anchor:"transformers.SplinterForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterConfig">SplinterConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),rt=new D({props:{name:"forward",anchor:"transformers.SplinterForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"question_positions",val:": typing.Optional[torch.LongTensor] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/splinter/modeling_splinter.py#L845",parametersDescription:[{anchor:"transformers.SplinterForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/splinter#transformers.SplinterTokenizer">SplinterTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SplinterForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SplinterForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SplinterForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SplinterForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.SplinterForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.SplinterForQuestionAnswering.forward.question_positions",description:`<strong>question_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_questions)</code>, <em>optional</em>) &#x2014;
The positions of all question tokens. If given, start_logits and end_logits will be of shape <code>(batch_size, num_questions, sequence_length)</code>. If None, the first question token in each sequence in the batch will be
the only one for which start_logits and end_logits are calculated and they will be of shape <code>(batch_size, sequence_length)</code>.`,name:"question_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new ci({props:{$$slots:{default:[gi]},$$scope:{ctx:we}}}),at=new Xr({props:{code:`from transformers import SplinterTokenizer, SplinterForQuestionAnswering
import torch

torch.manual_seed(0)
tokenizer = SplinterTokenizer.from_pretrained("tau/splinter-base")
model = SplinterForQuestionAnswering.from_pretrained("tau/splinter-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
round(loss.item(), 2)


start_scores = outputs.start_logits
list(start_scores.shape)


end_scores = outputs.end_logits
list(end_scores.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SplinterTokenizer, SplinterForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SplinterTokenizer.from_pretrained(<span class="hljs-string">&quot;tau/splinter-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SplinterForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;tau/splinter-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(start_scores.shape)


<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(end_scores.shape)
`}}),{c(){m=o("meta"),q=d(),u=o("h1"),b=o("a"),A=o("span"),f(y.$$.fragment),S=d(),O=o("span"),oo=a("Splinter"),wn=d(),J=o("h2"),se=o("a"),Dt=o("span"),f(be.$$.fragment),so=d(),Ot=o("span"),ro=a("Overview"),bn=d(),re=o("p"),ao=a("The Splinter model was proposed in "),ye=o("a"),io=a("Few-Shot Question Answering by Pretraining Span Selection"),lo=a(` by Ori Ram, Yuval Kirstain, Jonathan Berant, Amir Globerson, Omer Levy. Splinter
is an encoder-only transformer (similar to BERT) pretrained using the recurring span selection task on a large corpus
comprising Wikipedia and the Toronto Book Corpus.`),yn=d(),dt=o("p"),co=a("The abstract from the paper is the following:"),Tn=d(),ct=o("p"),po=a(`In several question answering benchmarks, pretrained models have reached human parity through fine-tuning on an order
of 100,000 annotated questions and answers. We explore the more realistic few-shot setting, where only a few hundred
training examples are available, and observe that standard models perform poorly, highlighting the discrepancy between
current pretraining objectives and question answering. We propose a new pretraining scheme tailored for question
answering: recurring span selection. Given a passage with multiple sets of recurring spans, we mask in each set all
recurring spans but one, and ask the model to select the correct span in the passage for each masked span. Masked spans
are replaced with a special token, viewed as a question representation, that is later used during fine-tuning to select
the answer span. The resulting model obtains surprisingly good results on multiple benchmarks (e.g., 72.7 F1 on SQuAD
with only 128 training examples), while maintaining competitive performance in the high-resource setting.`),Sn=d(),pt=o("p"),ho=a("Tips:"),zn=d(),C=o("ul"),Te=o("li"),mo=a(`Splinter was trained to predict answers spans conditioned on a special [QUESTION] token. These tokens contextualize
to question representations which are used to predict the answers. This layer is called QASS, and is the default
behaviour in the `),ht=o("a"),uo=a("SplinterForQuestionAnswering"),fo=a(" class. Therefore:"),go=d(),N=o("li"),_o=a("Use "),mt=o("a"),ko=a("SplinterTokenizer"),vo=a(" (rather than "),ut=o("a"),wo=a("BertTokenizer"),bo=a(`), as it already
contains this special token. Also, its default behavior is to use this token when two sequences are given (for
example, in the `),Nt=o("em"),yo=a("run_qa.py"),To=a(" script)."),So=d(),Se=o("li"),zo=a("If you plan on using Splinter outside "),jt=o("em"),qo=a("run_qa.py"),$o=a(`, please keep in mind the question token - it might be important for
the success of your model, especially in a few-shot setting.`),Eo=d(),P=o("li"),xo=a(`Please note there are two different checkpoints for each size of Splinter. Both are basically the same, except that
one also has the pretrained wights of the QASS layer (`),Qt=o("em"),Ao=a("tau/splinter-base-qass"),Po=a(" and "),Wt=o("em"),Mo=a("tau/splinter-large-qass"),Fo=a(`) and one
doesn\u2019t (`),Bt=o("em"),Io=a("tau/splinter-base"),Co=a(" and "),Ut=o("em"),Lo=a("tau/splinter-large"),Do=a(`). This is done to support randomly initializing this layer at
fine-tuning, as it is shown to yield better results for some cases in the paper.`),qn=d(),L=o("p"),Oo=a("This model was contributed by "),ze=o("a"),No=a("yuvalkirstain"),jo=a(" and "),qe=o("a"),Qo=a("oriram"),Wo=a(". The original code can be found "),$e=o("a"),Bo=a("here"),Uo=a("."),$n=d(),K=o("h2"),ae=o("a"),Ht=o("span"),f(Ee.$$.fragment),Ho=d(),Vt=o("span"),Vo=a("SplinterConfig"),En=d(),z=o("div"),f(xe.$$.fragment),Jo=d(),R=o("p"),Ko=a("This is the configuration class to store the configuration of a "),ft=o("a"),Ro=a("SplinterModel"),Go=a(`. It is used to instantiate an
Splinter model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Splinter
`),Ae=o("a"),Xo=a("tau/splinter-base"),Yo=a(" architecture."),Zo=d(),G=o("p"),es=a("Configuration objects inherit from "),gt=o("a"),ts=a("PretrainedConfig"),ns=a(` and can be used to control the model outputs. Read the
documentation from `),_t=o("a"),os=a("PretrainedConfig"),ss=a(" for more information."),rs=d(),Jt=o("p"),as=a("Example:"),is=d(),f(Pe.$$.fragment),xn=d(),X=o("h2"),ie=o("a"),Kt=o("span"),f(Me.$$.fragment),ls=d(),Rt=o("span"),ds=a("SplinterTokenizer"),An=d(),T=o("div"),f(Fe.$$.fragment),cs=d(),Gt=o("p"),ps=a("Construct a Splinter tokenizer. Based on WordPiece."),hs=d(),Ie=o("p"),ms=a("This tokenizer inherits from "),kt=o("a"),us=a("PreTrainedTokenizer"),fs=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),gs=d(),j=o("div"),f(Ce.$$.fragment),_s=d(),Xt=o("p"),ks=a(`Build model inputs from a pair of sequence for question answering tasks by concatenating and adding special
tokens. A Splinter sequence has the following format:`),vs=d(),Le=o("ul"),vt=o("li"),ws=a("single sequence: "),Yt=o("code"),bs=a("[CLS] X [SEP]"),ys=d(),wt=o("li"),Ts=a("pair of sequences for question answering: "),Zt=o("code"),Ss=a("[CLS] question_tokens [QUESTION] . [SEP] context_tokens [SEP]"),zs=d(),le=o("div"),f(De.$$.fragment),qs=d(),Oe=o("p"),$s=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),en=o("code"),Es=a("prepare_for_model"),xs=a(" method."),As=d(),Q=o("div"),f(Ne.$$.fragment),Ps=d(),bt=o("p"),Ms=a("Create the token type IDs corresponding to the sequences passed. "),yt=o("a"),Fs=a(`What are token type
IDs?`),Is=d(),tn=o("p"),Cs=a("Should be overridden in a subclass if the model has a special way of building those."),Ls=d(),Tt=o("div"),f(je.$$.fragment),Pn=d(),Y=o("h2"),de=o("a"),nn=o("span"),f(Qe.$$.fragment),Ds=d(),on=o("span"),Os=a("SplinterTokenizerFast"),Mn=d(),M=o("div"),f(We.$$.fragment),Ns=d(),Be=o("p"),js=a("Construct a \u201Cfast\u201D Splinter tokenizer (backed by HuggingFace\u2019s "),sn=o("em"),Qs=a("tokenizers"),Ws=a(" library). Based on WordPiece."),Bs=d(),Ue=o("p"),Us=a("This tokenizer inherits from "),St=o("a"),Hs=a("PreTrainedTokenizerFast"),Vs=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Js=d(),W=o("div"),f(He.$$.fragment),Ks=d(),rn=o("p"),Rs=a(`Build model inputs from a pair of sequence for question answering tasks by concatenating and adding special
tokens. A Splinter sequence has the following format:`),Gs=d(),Ve=o("ul"),zt=o("li"),Xs=a("single sequence: "),an=o("code"),Ys=a("[CLS] X [SEP]"),Zs=d(),qt=o("li"),er=a("pair of sequences for question answering: "),ln=o("code"),tr=a("[CLS] question_tokens [QUESTION] . [SEP] context_tokens [SEP]"),Fn=d(),Z=o("h2"),ce=o("a"),dn=o("span"),f(Je.$$.fragment),nr=d(),cn=o("span"),or=a("SplinterModel"),In=d(),F=o("div"),f(Ke.$$.fragment),sr=d(),Re=o("p"),rr=a(`The bare Splinter Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ge=o("a"),ar=a("torch.nn.Module"),ir=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lr=d(),Xe=o("p"),dr=a("The model is an encoder (with only self-attention) following the architecture described in "),Ye=o("a"),cr=a(`Attention is all you
need`),pr=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones,
Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),hr=d(),$=o("div"),f(Ze.$$.fragment),mr=d(),ee=o("p"),ur=a("The "),$t=o("a"),fr=a("SplinterModel"),gr=a(" forward method, overrides the "),pn=o("code"),_r=a("__call__"),kr=a(" special method."),vr=d(),f(pe.$$.fragment),wr=d(),hn=o("p"),br=a("Example:"),yr=d(),f(et.$$.fragment),Cn=d(),te=o("h2"),he=o("a"),mn=o("span"),f(tt.$$.fragment),Tr=d(),un=o("span"),Sr=a("SplinterForQuestionAnswering"),Ln=d(),I=o("div"),f(nt.$$.fragment),zr=d(),ne=o("p"),qr=a(`Splinter Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),fn=o("code"),$r=a("span start logits"),Er=a(" and "),gn=o("code"),xr=a("span end logits"),Ar=a(")."),Pr=d(),ot=o("p"),Mr=a("This model is a PyTorch "),st=o("a"),Fr=a("torch.nn.Module"),Ir=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cr=d(),E=o("div"),f(rt.$$.fragment),Lr=d(),oe=o("p"),Dr=a("The "),Et=o("a"),Or=a("SplinterForQuestionAnswering"),Nr=a(" forward method, overrides the "),_n=o("code"),jr=a("__call__"),Qr=a(" special method."),Wr=d(),f(me.$$.fragment),Br=d(),kn=o("p"),Ur=a("Example:"),Hr=d(),f(at.$$.fragment),this.h()},l(t){const p=ui('[data-svelte="svelte-1phssyn"]',document.head);m=s(p,"META",{name:!0,content:!0}),p.forEach(n),q=c(t),u=s(t,"H1",{class:!0});var it=r(u);b=s(it,"A",{id:!0,class:!0,href:!0});var vn=r(b);A=s(vn,"SPAN",{});var Yr=r(A);g(y.$$.fragment,Yr),Yr.forEach(n),vn.forEach(n),S=c(it),O=s(it,"SPAN",{});var Zr=r(O);oo=i(Zr,"Splinter"),Zr.forEach(n),it.forEach(n),wn=c(t),J=s(t,"H2",{class:!0});var On=r(J);se=s(On,"A",{id:!0,class:!0,href:!0});var ea=r(se);Dt=s(ea,"SPAN",{});var ta=r(Dt);g(be.$$.fragment,ta),ta.forEach(n),ea.forEach(n),so=c(On),Ot=s(On,"SPAN",{});var na=r(Ot);ro=i(na,"Overview"),na.forEach(n),On.forEach(n),bn=c(t),re=s(t,"P",{});var Nn=r(re);ao=i(Nn,"The Splinter model was proposed in "),ye=s(Nn,"A",{href:!0,rel:!0});var oa=r(ye);io=i(oa,"Few-Shot Question Answering by Pretraining Span Selection"),oa.forEach(n),lo=i(Nn,` by Ori Ram, Yuval Kirstain, Jonathan Berant, Amir Globerson, Omer Levy. Splinter
is an encoder-only transformer (similar to BERT) pretrained using the recurring span selection task on a large corpus
comprising Wikipedia and the Toronto Book Corpus.`),Nn.forEach(n),yn=c(t),dt=s(t,"P",{});var sa=r(dt);co=i(sa,"The abstract from the paper is the following:"),sa.forEach(n),Tn=c(t),ct=s(t,"P",{});var ra=r(ct);po=i(ra,`In several question answering benchmarks, pretrained models have reached human parity through fine-tuning on an order
of 100,000 annotated questions and answers. We explore the more realistic few-shot setting, where only a few hundred
training examples are available, and observe that standard models perform poorly, highlighting the discrepancy between
current pretraining objectives and question answering. We propose a new pretraining scheme tailored for question
answering: recurring span selection. Given a passage with multiple sets of recurring spans, we mask in each set all
recurring spans but one, and ask the model to select the correct span in the passage for each masked span. Masked spans
are replaced with a special token, viewed as a question representation, that is later used during fine-tuning to select
the answer span. The resulting model obtains surprisingly good results on multiple benchmarks (e.g., 72.7 F1 on SQuAD
with only 128 training examples), while maintaining competitive performance in the high-resource setting.`),ra.forEach(n),Sn=c(t),pt=s(t,"P",{});var aa=r(pt);ho=i(aa,"Tips:"),aa.forEach(n),zn=c(t),C=s(t,"UL",{});var ue=r(C);Te=s(ue,"LI",{});var jn=r(Te);mo=i(jn,`Splinter was trained to predict answers spans conditioned on a special [QUESTION] token. These tokens contextualize
to question representations which are used to predict the answers. This layer is called QASS, and is the default
behaviour in the `),ht=s(jn,"A",{href:!0});var ia=r(ht);uo=i(ia,"SplinterForQuestionAnswering"),ia.forEach(n),fo=i(jn," class. Therefore:"),jn.forEach(n),go=c(ue),N=s(ue,"LI",{});var fe=r(N);_o=i(fe,"Use "),mt=s(fe,"A",{href:!0});var la=r(mt);ko=i(la,"SplinterTokenizer"),la.forEach(n),vo=i(fe," (rather than "),ut=s(fe,"A",{href:!0});var da=r(ut);wo=i(da,"BertTokenizer"),da.forEach(n),bo=i(fe,`), as it already
contains this special token. Also, its default behavior is to use this token when two sequences are given (for
example, in the `),Nt=s(fe,"EM",{});var ca=r(Nt);yo=i(ca,"run_qa.py"),ca.forEach(n),To=i(fe," script)."),fe.forEach(n),So=c(ue),Se=s(ue,"LI",{});var Qn=r(Se);zo=i(Qn,"If you plan on using Splinter outside "),jt=s(Qn,"EM",{});var pa=r(jt);qo=i(pa,"run_qa.py"),pa.forEach(n),$o=i(Qn,`, please keep in mind the question token - it might be important for
the success of your model, especially in a few-shot setting.`),Qn.forEach(n),Eo=c(ue),P=s(ue,"LI",{});var B=r(P);xo=i(B,`Please note there are two different checkpoints for each size of Splinter. Both are basically the same, except that
one also has the pretrained wights of the QASS layer (`),Qt=s(B,"EM",{});var ha=r(Qt);Ao=i(ha,"tau/splinter-base-qass"),ha.forEach(n),Po=i(B," and "),Wt=s(B,"EM",{});var ma=r(Wt);Mo=i(ma,"tau/splinter-large-qass"),ma.forEach(n),Fo=i(B,`) and one
doesn\u2019t (`),Bt=s(B,"EM",{});var ua=r(Bt);Io=i(ua,"tau/splinter-base"),ua.forEach(n),Co=i(B," and "),Ut=s(B,"EM",{});var fa=r(Ut);Lo=i(fa,"tau/splinter-large"),fa.forEach(n),Do=i(B,`). This is done to support randomly initializing this layer at
fine-tuning, as it is shown to yield better results for some cases in the paper.`),B.forEach(n),ue.forEach(n),qn=c(t),L=s(t,"P",{});var ge=r(L);Oo=i(ge,"This model was contributed by "),ze=s(ge,"A",{href:!0,rel:!0});var ga=r(ze);No=i(ga,"yuvalkirstain"),ga.forEach(n),jo=i(ge," and "),qe=s(ge,"A",{href:!0,rel:!0});var _a=r(qe);Qo=i(_a,"oriram"),_a.forEach(n),Wo=i(ge,". The original code can be found "),$e=s(ge,"A",{href:!0,rel:!0});var ka=r($e);Bo=i(ka,"here"),ka.forEach(n),Uo=i(ge,"."),ge.forEach(n),$n=c(t),K=s(t,"H2",{class:!0});var Wn=r(K);ae=s(Wn,"A",{id:!0,class:!0,href:!0});var va=r(ae);Ht=s(va,"SPAN",{});var wa=r(Ht);g(Ee.$$.fragment,wa),wa.forEach(n),va.forEach(n),Ho=c(Wn),Vt=s(Wn,"SPAN",{});var ba=r(Vt);Vo=i(ba,"SplinterConfig"),ba.forEach(n),Wn.forEach(n),En=c(t),z=s(t,"DIV",{class:!0});var U=r(z);g(xe.$$.fragment,U),Jo=c(U),R=s(U,"P",{});var xt=r(R);Ko=i(xt,"This is the configuration class to store the configuration of a "),ft=s(xt,"A",{href:!0});var ya=r(ft);Ro=i(ya,"SplinterModel"),ya.forEach(n),Go=i(xt,`. It is used to instantiate an
Splinter model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Splinter
`),Ae=s(xt,"A",{href:!0,rel:!0});var Ta=r(Ae);Xo=i(Ta,"tau/splinter-base"),Ta.forEach(n),Yo=i(xt," architecture."),xt.forEach(n),Zo=c(U),G=s(U,"P",{});var At=r(G);es=i(At,"Configuration objects inherit from "),gt=s(At,"A",{href:!0});var Sa=r(gt);ts=i(Sa,"PretrainedConfig"),Sa.forEach(n),ns=i(At,` and can be used to control the model outputs. Read the
documentation from `),_t=s(At,"A",{href:!0});var za=r(_t);os=i(za,"PretrainedConfig"),za.forEach(n),ss=i(At," for more information."),At.forEach(n),rs=c(U),Jt=s(U,"P",{});var qa=r(Jt);as=i(qa,"Example:"),qa.forEach(n),is=c(U),g(Pe.$$.fragment,U),U.forEach(n),xn=c(t),X=s(t,"H2",{class:!0});var Bn=r(X);ie=s(Bn,"A",{id:!0,class:!0,href:!0});var $a=r(ie);Kt=s($a,"SPAN",{});var Ea=r(Kt);g(Me.$$.fragment,Ea),Ea.forEach(n),$a.forEach(n),ls=c(Bn),Rt=s(Bn,"SPAN",{});var xa=r(Rt);ds=i(xa,"SplinterTokenizer"),xa.forEach(n),Bn.forEach(n),An=c(t),T=s(t,"DIV",{class:!0});var x=r(T);g(Fe.$$.fragment,x),cs=c(x),Gt=s(x,"P",{});var Aa=r(Gt);ps=i(Aa,"Construct a Splinter tokenizer. Based on WordPiece."),Aa.forEach(n),hs=c(x),Ie=s(x,"P",{});var Un=r(Ie);ms=i(Un,"This tokenizer inherits from "),kt=s(Un,"A",{href:!0});var Pa=r(kt);us=i(Pa,"PreTrainedTokenizer"),Pa.forEach(n),fs=i(Un,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Un.forEach(n),gs=c(x),j=s(x,"DIV",{class:!0});var Pt=r(j);g(Ce.$$.fragment,Pt),_s=c(Pt),Xt=s(Pt,"P",{});var Ma=r(Xt);ks=i(Ma,`Build model inputs from a pair of sequence for question answering tasks by concatenating and adding special
tokens. A Splinter sequence has the following format:`),Ma.forEach(n),vs=c(Pt),Le=s(Pt,"UL",{});var Hn=r(Le);vt=s(Hn,"LI",{});var Vr=r(vt);ws=i(Vr,"single sequence: "),Yt=s(Vr,"CODE",{});var Fa=r(Yt);bs=i(Fa,"[CLS] X [SEP]"),Fa.forEach(n),Vr.forEach(n),ys=c(Hn),wt=s(Hn,"LI",{});var Jr=r(wt);Ts=i(Jr,"pair of sequences for question answering: "),Zt=s(Jr,"CODE",{});var Ia=r(Zt);Ss=i(Ia,"[CLS] question_tokens [QUESTION] . [SEP] context_tokens [SEP]"),Ia.forEach(n),Jr.forEach(n),Hn.forEach(n),Pt.forEach(n),zs=c(x),le=s(x,"DIV",{class:!0});var Vn=r(le);g(De.$$.fragment,Vn),qs=c(Vn),Oe=s(Vn,"P",{});var Jn=r(Oe);$s=i(Jn,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),en=s(Jn,"CODE",{});var Ca=r(en);Es=i(Ca,"prepare_for_model"),Ca.forEach(n),xs=i(Jn," method."),Jn.forEach(n),Vn.forEach(n),As=c(x),Q=s(x,"DIV",{class:!0});var Mt=r(Q);g(Ne.$$.fragment,Mt),Ps=c(Mt),bt=s(Mt,"P",{});var Kr=r(bt);Ms=i(Kr,"Create the token type IDs corresponding to the sequences passed. "),yt=s(Kr,"A",{href:!0});var La=r(yt);Fs=i(La,`What are token type
IDs?`),La.forEach(n),Kr.forEach(n),Is=c(Mt),tn=s(Mt,"P",{});var Da=r(tn);Cs=i(Da,"Should be overridden in a subclass if the model has a special way of building those."),Da.forEach(n),Mt.forEach(n),Ls=c(x),Tt=s(x,"DIV",{class:!0});var Oa=r(Tt);g(je.$$.fragment,Oa),Oa.forEach(n),x.forEach(n),Pn=c(t),Y=s(t,"H2",{class:!0});var Kn=r(Y);de=s(Kn,"A",{id:!0,class:!0,href:!0});var Na=r(de);nn=s(Na,"SPAN",{});var ja=r(nn);g(Qe.$$.fragment,ja),ja.forEach(n),Na.forEach(n),Ds=c(Kn),on=s(Kn,"SPAN",{});var Qa=r(on);Os=i(Qa,"SplinterTokenizerFast"),Qa.forEach(n),Kn.forEach(n),Mn=c(t),M=s(t,"DIV",{class:!0});var _e=r(M);g(We.$$.fragment,_e),Ns=c(_e),Be=s(_e,"P",{});var Rn=r(Be);js=i(Rn,"Construct a \u201Cfast\u201D Splinter tokenizer (backed by HuggingFace\u2019s "),sn=s(Rn,"EM",{});var Wa=r(sn);Qs=i(Wa,"tokenizers"),Wa.forEach(n),Ws=i(Rn," library). Based on WordPiece."),Rn.forEach(n),Bs=c(_e),Ue=s(_e,"P",{});var Gn=r(Ue);Us=i(Gn,"This tokenizer inherits from "),St=s(Gn,"A",{href:!0});var Ba=r(St);Hs=i(Ba,"PreTrainedTokenizerFast"),Ba.forEach(n),Vs=i(Gn,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Gn.forEach(n),Js=c(_e),W=s(_e,"DIV",{class:!0});var Ft=r(W);g(He.$$.fragment,Ft),Ks=c(Ft),rn=s(Ft,"P",{});var Ua=r(rn);Rs=i(Ua,`Build model inputs from a pair of sequence for question answering tasks by concatenating and adding special
tokens. A Splinter sequence has the following format:`),Ua.forEach(n),Gs=c(Ft),Ve=s(Ft,"UL",{});var Xn=r(Ve);zt=s(Xn,"LI",{});var Rr=r(zt);Xs=i(Rr,"single sequence: "),an=s(Rr,"CODE",{});var Ha=r(an);Ys=i(Ha,"[CLS] X [SEP]"),Ha.forEach(n),Rr.forEach(n),Zs=c(Xn),qt=s(Xn,"LI",{});var Gr=r(qt);er=i(Gr,"pair of sequences for question answering: "),ln=s(Gr,"CODE",{});var Va=r(ln);tr=i(Va,"[CLS] question_tokens [QUESTION] . [SEP] context_tokens [SEP]"),Va.forEach(n),Gr.forEach(n),Xn.forEach(n),Ft.forEach(n),_e.forEach(n),Fn=c(t),Z=s(t,"H2",{class:!0});var Yn=r(Z);ce=s(Yn,"A",{id:!0,class:!0,href:!0});var Ja=r(ce);dn=s(Ja,"SPAN",{});var Ka=r(dn);g(Je.$$.fragment,Ka),Ka.forEach(n),Ja.forEach(n),nr=c(Yn),cn=s(Yn,"SPAN",{});var Ra=r(cn);or=i(Ra,"SplinterModel"),Ra.forEach(n),Yn.forEach(n),In=c(t),F=s(t,"DIV",{class:!0});var ke=r(F);g(Ke.$$.fragment,ke),sr=c(ke),Re=s(ke,"P",{});var Zn=r(Re);rr=i(Zn,`The bare Splinter Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ge=s(Zn,"A",{href:!0,rel:!0});var Ga=r(Ge);ar=i(Ga,"torch.nn.Module"),Ga.forEach(n),ir=i(Zn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zn.forEach(n),lr=c(ke),Xe=s(ke,"P",{});var eo=r(Xe);dr=i(eo,"The model is an encoder (with only self-attention) following the architecture described in "),Ye=s(eo,"A",{href:!0,rel:!0});var Xa=r(Ye);cr=i(Xa,`Attention is all you
need`),Xa.forEach(n),pr=i(eo,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones,
Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),eo.forEach(n),hr=c(ke),$=s(ke,"DIV",{class:!0});var H=r($);g(Ze.$$.fragment,H),mr=c(H),ee=s(H,"P",{});var It=r(ee);ur=i(It,"The "),$t=s(It,"A",{href:!0});var Ya=r($t);fr=i(Ya,"SplinterModel"),Ya.forEach(n),gr=i(It," forward method, overrides the "),pn=s(It,"CODE",{});var Za=r(pn);_r=i(Za,"__call__"),Za.forEach(n),kr=i(It," special method."),It.forEach(n),vr=c(H),g(pe.$$.fragment,H),wr=c(H),hn=s(H,"P",{});var ei=r(hn);br=i(ei,"Example:"),ei.forEach(n),yr=c(H),g(et.$$.fragment,H),H.forEach(n),ke.forEach(n),Cn=c(t),te=s(t,"H2",{class:!0});var to=r(te);he=s(to,"A",{id:!0,class:!0,href:!0});var ti=r(he);mn=s(ti,"SPAN",{});var ni=r(mn);g(tt.$$.fragment,ni),ni.forEach(n),ti.forEach(n),Tr=c(to),un=s(to,"SPAN",{});var oi=r(un);Sr=i(oi,"SplinterForQuestionAnswering"),oi.forEach(n),to.forEach(n),Ln=c(t),I=s(t,"DIV",{class:!0});var ve=r(I);g(nt.$$.fragment,ve),zr=c(ve),ne=s(ve,"P",{});var Ct=r(ne);qr=i(Ct,`Splinter Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),fn=s(Ct,"CODE",{});var si=r(fn);$r=i(si,"span start logits"),si.forEach(n),Er=i(Ct," and "),gn=s(Ct,"CODE",{});var ri=r(gn);xr=i(ri,"span end logits"),ri.forEach(n),Ar=i(Ct,")."),Ct.forEach(n),Pr=c(ve),ot=s(ve,"P",{});var no=r(ot);Mr=i(no,"This model is a PyTorch "),st=s(no,"A",{href:!0,rel:!0});var ai=r(st);Fr=i(ai,"torch.nn.Module"),ai.forEach(n),Ir=i(no,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),no.forEach(n),Cr=c(ve),E=s(ve,"DIV",{class:!0});var V=r(E);g(rt.$$.fragment,V),Lr=c(V),oe=s(V,"P",{});var Lt=r(oe);Dr=i(Lt,"The "),Et=s(Lt,"A",{href:!0});var ii=r(Et);Or=i(ii,"SplinterForQuestionAnswering"),ii.forEach(n),Nr=i(Lt," forward method, overrides the "),_n=s(Lt,"CODE",{});var li=r(_n);jr=i(li,"__call__"),li.forEach(n),Qr=i(Lt," special method."),Lt.forEach(n),Wr=c(V),g(me.$$.fragment,V),Br=c(V),kn=s(V,"P",{});var di=r(kn);Ur=i(di,"Example:"),di.forEach(n),Hr=c(V),g(at.$$.fragment,V),V.forEach(n),ve.forEach(n),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(ki)),l(b,"id","splinter"),l(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(b,"href","#splinter"),l(u,"class","relative group"),l(se,"id","overview"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#overview"),l(J,"class","relative group"),l(ye,"href","https://arxiv.org/abs/2101.00438"),l(ye,"rel","nofollow"),l(ht,"href","/docs/transformers/master/en/model_doc/splinter#transformers.SplinterForQuestionAnswering"),l(mt,"href","/docs/transformers/master/en/model_doc/splinter#transformers.SplinterTokenizer"),l(ut,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer"),l(ze,"href","https://huggingface.co/yuvalkirstain"),l(ze,"rel","nofollow"),l(qe,"href","https://huggingface.co/oriram"),l(qe,"rel","nofollow"),l($e,"href","https://github.com/oriram/splinter"),l($e,"rel","nofollow"),l(ae,"id","transformers.SplinterConfig"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.SplinterConfig"),l(K,"class","relative group"),l(ft,"href","/docs/transformers/master/en/model_doc/splinter#transformers.SplinterModel"),l(Ae,"href","https://huggingface.co/tau/splinter-base"),l(Ae,"rel","nofollow"),l(gt,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(_t,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(z,"class","docstring"),l(ie,"id","transformers.SplinterTokenizer"),l(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ie,"href","#transformers.SplinterTokenizer"),l(X,"class","relative group"),l(kt,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(j,"class","docstring"),l(le,"class","docstring"),l(yt,"href","../glossary#token-type-ids"),l(Q,"class","docstring"),l(Tt,"class","docstring"),l(T,"class","docstring"),l(de,"id","transformers.SplinterTokenizerFast"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.SplinterTokenizerFast"),l(Y,"class","relative group"),l(St,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(W,"class","docstring"),l(M,"class","docstring"),l(ce,"id","transformers.SplinterModel"),l(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ce,"href","#transformers.SplinterModel"),l(Z,"class","relative group"),l(Ge,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ge,"rel","nofollow"),l(Ye,"href","https://arxiv.org/abs/1706.03762"),l(Ye,"rel","nofollow"),l($t,"href","/docs/transformers/master/en/model_doc/splinter#transformers.SplinterModel"),l($,"class","docstring"),l(F,"class","docstring"),l(he,"id","transformers.SplinterForQuestionAnswering"),l(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(he,"href","#transformers.SplinterForQuestionAnswering"),l(te,"class","relative group"),l(st,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(st,"rel","nofollow"),l(Et,"href","/docs/transformers/master/en/model_doc/splinter#transformers.SplinterForQuestionAnswering"),l(E,"class","docstring"),l(I,"class","docstring")},m(t,p){e(document.head,m),h(t,q,p),h(t,u,p),e(u,b),e(b,A),_(y,A,null),e(u,S),e(u,O),e(O,oo),h(t,wn,p),h(t,J,p),e(J,se),e(se,Dt),_(be,Dt,null),e(J,so),e(J,Ot),e(Ot,ro),h(t,bn,p),h(t,re,p),e(re,ao),e(re,ye),e(ye,io),e(re,lo),h(t,yn,p),h(t,dt,p),e(dt,co),h(t,Tn,p),h(t,ct,p),e(ct,po),h(t,Sn,p),h(t,pt,p),e(pt,ho),h(t,zn,p),h(t,C,p),e(C,Te),e(Te,mo),e(Te,ht),e(ht,uo),e(Te,fo),e(C,go),e(C,N),e(N,_o),e(N,mt),e(mt,ko),e(N,vo),e(N,ut),e(ut,wo),e(N,bo),e(N,Nt),e(Nt,yo),e(N,To),e(C,So),e(C,Se),e(Se,zo),e(Se,jt),e(jt,qo),e(Se,$o),e(C,Eo),e(C,P),e(P,xo),e(P,Qt),e(Qt,Ao),e(P,Po),e(P,Wt),e(Wt,Mo),e(P,Fo),e(P,Bt),e(Bt,Io),e(P,Co),e(P,Ut),e(Ut,Lo),e(P,Do),h(t,qn,p),h(t,L,p),e(L,Oo),e(L,ze),e(ze,No),e(L,jo),e(L,qe),e(qe,Qo),e(L,Wo),e(L,$e),e($e,Bo),e(L,Uo),h(t,$n,p),h(t,K,p),e(K,ae),e(ae,Ht),_(Ee,Ht,null),e(K,Ho),e(K,Vt),e(Vt,Vo),h(t,En,p),h(t,z,p),_(xe,z,null),e(z,Jo),e(z,R),e(R,Ko),e(R,ft),e(ft,Ro),e(R,Go),e(R,Ae),e(Ae,Xo),e(R,Yo),e(z,Zo),e(z,G),e(G,es),e(G,gt),e(gt,ts),e(G,ns),e(G,_t),e(_t,os),e(G,ss),e(z,rs),e(z,Jt),e(Jt,as),e(z,is),_(Pe,z,null),h(t,xn,p),h(t,X,p),e(X,ie),e(ie,Kt),_(Me,Kt,null),e(X,ls),e(X,Rt),e(Rt,ds),h(t,An,p),h(t,T,p),_(Fe,T,null),e(T,cs),e(T,Gt),e(Gt,ps),e(T,hs),e(T,Ie),e(Ie,ms),e(Ie,kt),e(kt,us),e(Ie,fs),e(T,gs),e(T,j),_(Ce,j,null),e(j,_s),e(j,Xt),e(Xt,ks),e(j,vs),e(j,Le),e(Le,vt),e(vt,ws),e(vt,Yt),e(Yt,bs),e(Le,ys),e(Le,wt),e(wt,Ts),e(wt,Zt),e(Zt,Ss),e(T,zs),e(T,le),_(De,le,null),e(le,qs),e(le,Oe),e(Oe,$s),e(Oe,en),e(en,Es),e(Oe,xs),e(T,As),e(T,Q),_(Ne,Q,null),e(Q,Ps),e(Q,bt),e(bt,Ms),e(bt,yt),e(yt,Fs),e(Q,Is),e(Q,tn),e(tn,Cs),e(T,Ls),e(T,Tt),_(je,Tt,null),h(t,Pn,p),h(t,Y,p),e(Y,de),e(de,nn),_(Qe,nn,null),e(Y,Ds),e(Y,on),e(on,Os),h(t,Mn,p),h(t,M,p),_(We,M,null),e(M,Ns),e(M,Be),e(Be,js),e(Be,sn),e(sn,Qs),e(Be,Ws),e(M,Bs),e(M,Ue),e(Ue,Us),e(Ue,St),e(St,Hs),e(Ue,Vs),e(M,Js),e(M,W),_(He,W,null),e(W,Ks),e(W,rn),e(rn,Rs),e(W,Gs),e(W,Ve),e(Ve,zt),e(zt,Xs),e(zt,an),e(an,Ys),e(Ve,Zs),e(Ve,qt),e(qt,er),e(qt,ln),e(ln,tr),h(t,Fn,p),h(t,Z,p),e(Z,ce),e(ce,dn),_(Je,dn,null),e(Z,nr),e(Z,cn),e(cn,or),h(t,In,p),h(t,F,p),_(Ke,F,null),e(F,sr),e(F,Re),e(Re,rr),e(Re,Ge),e(Ge,ar),e(Re,ir),e(F,lr),e(F,Xe),e(Xe,dr),e(Xe,Ye),e(Ye,cr),e(Xe,pr),e(F,hr),e(F,$),_(Ze,$,null),e($,mr),e($,ee),e(ee,ur),e(ee,$t),e($t,fr),e(ee,gr),e(ee,pn),e(pn,_r),e(ee,kr),e($,vr),_(pe,$,null),e($,wr),e($,hn),e(hn,br),e($,yr),_(et,$,null),h(t,Cn,p),h(t,te,p),e(te,he),e(he,mn),_(tt,mn,null),e(te,Tr),e(te,un),e(un,Sr),h(t,Ln,p),h(t,I,p),_(nt,I,null),e(I,zr),e(I,ne),e(ne,qr),e(ne,fn),e(fn,$r),e(ne,Er),e(ne,gn),e(gn,xr),e(ne,Ar),e(I,Pr),e(I,ot),e(ot,Mr),e(ot,st),e(st,Fr),e(ot,Ir),e(I,Cr),e(I,E),_(rt,E,null),e(E,Lr),e(E,oe),e(oe,Dr),e(oe,Et),e(Et,Or),e(oe,Nr),e(oe,_n),e(_n,jr),e(oe,Qr),e(E,Wr),_(me,E,null),e(E,Br),e(E,kn),e(kn,Ur),e(E,Hr),_(at,E,null),Dn=!0},p(t,[p]){const it={};p&2&&(it.$$scope={dirty:p,ctx:t}),pe.$set(it);const vn={};p&2&&(vn.$$scope={dirty:p,ctx:t}),me.$set(vn)},i(t){Dn||(k(y.$$.fragment,t),k(be.$$.fragment,t),k(Ee.$$.fragment,t),k(xe.$$.fragment,t),k(Pe.$$.fragment,t),k(Me.$$.fragment,t),k(Fe.$$.fragment,t),k(Ce.$$.fragment,t),k(De.$$.fragment,t),k(Ne.$$.fragment,t),k(je.$$.fragment,t),k(Qe.$$.fragment,t),k(We.$$.fragment,t),k(He.$$.fragment,t),k(Je.$$.fragment,t),k(Ke.$$.fragment,t),k(Ze.$$.fragment,t),k(pe.$$.fragment,t),k(et.$$.fragment,t),k(tt.$$.fragment,t),k(nt.$$.fragment,t),k(rt.$$.fragment,t),k(me.$$.fragment,t),k(at.$$.fragment,t),Dn=!0)},o(t){v(y.$$.fragment,t),v(be.$$.fragment,t),v(Ee.$$.fragment,t),v(xe.$$.fragment,t),v(Pe.$$.fragment,t),v(Me.$$.fragment,t),v(Fe.$$.fragment,t),v(Ce.$$.fragment,t),v(De.$$.fragment,t),v(Ne.$$.fragment,t),v(je.$$.fragment,t),v(Qe.$$.fragment,t),v(We.$$.fragment,t),v(He.$$.fragment,t),v(Je.$$.fragment,t),v(Ke.$$.fragment,t),v(Ze.$$.fragment,t),v(pe.$$.fragment,t),v(et.$$.fragment,t),v(tt.$$.fragment,t),v(nt.$$.fragment,t),v(rt.$$.fragment,t),v(me.$$.fragment,t),v(at.$$.fragment,t),Dn=!1},d(t){n(m),t&&n(q),t&&n(u),w(y),t&&n(wn),t&&n(J),w(be),t&&n(bn),t&&n(re),t&&n(yn),t&&n(dt),t&&n(Tn),t&&n(ct),t&&n(Sn),t&&n(pt),t&&n(zn),t&&n(C),t&&n(qn),t&&n(L),t&&n($n),t&&n(K),w(Ee),t&&n(En),t&&n(z),w(xe),w(Pe),t&&n(xn),t&&n(X),w(Me),t&&n(An),t&&n(T),w(Fe),w(Ce),w(De),w(Ne),w(je),t&&n(Pn),t&&n(Y),w(Qe),t&&n(Mn),t&&n(M),w(We),w(He),t&&n(Fn),t&&n(Z),w(Je),t&&n(In),t&&n(F),w(Ke),w(Ze),w(pe),w(et),t&&n(Cn),t&&n(te),w(tt),t&&n(Ln),t&&n(I),w(nt),w(rt),w(me),w(at)}}}const ki={local:"splinter",sections:[{local:"overview",title:"Overview"},{local:"transformers.SplinterConfig",title:"SplinterConfig"},{local:"transformers.SplinterTokenizer",title:"SplinterTokenizer"},{local:"transformers.SplinterTokenizerFast",title:"SplinterTokenizerFast"},{local:"transformers.SplinterModel",title:"SplinterModel"},{local:"transformers.SplinterForQuestionAnswering",title:"SplinterForQuestionAnswering"}],title:"Splinter"};function vi(we,m,q){let{fw:u}=m;return we.$$set=b=>{"fw"in b&&q(0,u=b.fw)},[u]}class zi extends pi{constructor(m){super();hi(this,m,vi,_i,mi,{fw:0})}}export{zi as default,ki as metadata};
