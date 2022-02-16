import{S as fi,i as pi,s as ui,e as n,k as d,w as u,t as a,L as _i,c as s,d as o,m as c,a as r,x as _,h as i,b as l,J as e,g as m,y as g,q as v,o as k,B as T}from"../../../chunks/vendor-b1433968.js";import{T as mi}from"../../../chunks/Tip-c3840994.js";import{D as H}from"../../../chunks/Docstring-ff504c58.js";import{C as Qr}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as Te}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function gi(be){let f,x,p,w,A;return{c(){f=n("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),w=a("Module"),A=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(M){f=s(M,"P",{});var F=r(f);x=i(F,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(F,"CODE",{});var D=r(p);w=i(D,"Module"),D.forEach(o),A=i(F,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),F.forEach(o)},m(M,F){m(M,f,F),e(f,x),e(f,p),e(p,w),e(f,A)},d(M){M&&o(f)}}}function vi(be){let f,x,p,w,A;return{c(){f=n("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),w=a("Module"),A=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(M){f=s(M,"P",{});var F=r(f);x=i(F,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(F,"CODE",{});var D=r(p);w=i(D,"Module"),D.forEach(o),A=i(F,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),F.forEach(o)},m(M,F){m(M,f,F),e(f,x),e(f,p),e(p,w),e(f,A)},d(M){M&&o(f)}}}function ki(be){let f,x,p,w,A,M,F,D,on,To,U,$t,nn,sn,ye,rn,an,bo,V,re,zt,we,dn,Et,cn,yo,ae,ln,Me,hn,mn,wo,st,fn,Mo,rt,qt,pn,Fo,O,un,Fe,_n,gn,Se,vn,kn,So,Q,ie,xt,$e,Tn,Ct,bn,$o,at,X,yn,it,wn,Mn,dt,Fn,Sn,zo,J,de,Pt,ze,$n,At,zn,Eo,S,Ee,En,qe,qn,ct,xn,Cn,Pn,K,An,lt,In,Dn,ht,Nn,Ln,On,It,Gn,jn,xe,Bn,ce,Ce,Wn,Y,Rn,Dt,Hn,Un,Nt,Vn,Qn,qo,Z,le,Lt,Pe,Xn,Ot,Jn,xo,b,Ae,Kn,Gt,Yn,Zn,N,jt,es,ts,Bt,os,ns,L,ss,Wt,rs,as,Rt,is,ds,Ht,cs,ls,hs,Ie,ms,Ut,fs,ps,us,De,_s,mt,gs,vs,ks,G,Ne,Ts,Vt,bs,ys,Le,ft,ws,Qt,Ms,Fs,pt,Ss,Xt,$s,zs,he,Oe,Es,Ge,qs,Jt,xs,Cs,Ps,C,je,As,Kt,Is,Ds,Be,Ns,ee,Ls,Yt,Os,Gs,Zt,js,Bs,Ws,eo,Rs,Hs,to,Co,te,me,oo,We,Us,no,Vs,Po,E,Re,Qs,so,Xs,Js,He,Ks,ut,Ys,Zs,er,Ue,tr,Ve,or,nr,sr,P,Qe,rr,oe,ar,_t,ir,dr,ro,cr,lr,hr,fe,mr,ao,fr,pr,Xe,Ao,ne,pe,io,Je,ur,co,_r,Io,q,Ke,gr,lo,vr,kr,Ye,Tr,gt,br,yr,wr,Ze,Mr,et,Fr,Sr,$r,y,tt,zr,se,Er,vt,qr,xr,ho,Cr,Pr,Ar,ue,Ir,mo,Dr,Nr,fo,Lr,Or,po,Gr,jr,uo,Br,Wr,_e,ge,_o,ot,Rr,go,Hr,Do;return M=new Te({}),we=new Te({}),$e=new Te({}),ze=new Te({}),Ee=new H({props:{name:"class transformers.FSMTConfig",anchor:"transformers.FSMTConfig",parameters:[{name:"langs",val:" = ['en', 'de']"},{name:"src_vocab_size",val:" = 42024"},{name:"tgt_vocab_size",val:" = 42024"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 1024"},{name:"max_length",val:" = 200"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_layers",val:" = 12"},{name:"encoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_layers",val:" = 12"},{name:"decoder_attention_heads",val:" = 16"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"scale_embedding",val:" = True"},{name:"tie_word_embeddings",val:" = False"},{name:"num_beams",val:" = 5"},{name:"length_penalty",val:" = 1.0"},{name:"early_stopping",val:" = False"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**common_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/fsmt/configuration_fsmt.py#L41",parametersDescription:[{anchor:"transformers.FSMTConfig.langs",description:`<strong>langs</strong> (<code>List[str]</code>) &#x2014;
A list with source language and target_language (e.g., [&#x2018;en&#x2019;, &#x2018;ru&#x2019;]).`,name:"langs"},{anchor:"transformers.FSMTConfig.src_vocab_size",description:`<strong>src_vocab_size</strong> (<code>int</code>) &#x2014;
Vocabulary size of the encoder. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed to the forward method in the encoder.`,name:"src_vocab_size"},{anchor:"transformers.FSMTConfig.tgt_vocab_size",description:`<strong>tgt_vocab_size</strong> (<code>int</code>) &#x2014;
Vocabulary size of the decoder. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed to the forward method in the decoder.`,name:"tgt_vocab_size"},{anchor:"transformers.FSMTConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.FSMTConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.FSMTConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.FSMTConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.FSMTConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.FSMTConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.FSMTConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.FSMTConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.FSMTConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.FSMTConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.FSMTConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.FSMTConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.FSMTConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.FSMTConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.FSMTConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Beginning of stream token id.`,name:"bos_token_id"},{anchor:"transformers.FSMTConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.FSMTConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
End of stream token id.`,name:"eos_token_id"},{anchor:"transformers.FSMTConfig.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
This model starts decoding with <code>eos_token_id</code>
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
Google &#x201C;layerdrop arxiv&#x201D;, as its not explainable in one line.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
Google &#x201C;layerdrop arxiv&#x201D;, as its not explainable in one line.`,name:"decoder_start_token_id"},{anchor:"transformers.FSMTConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether this is an encoder/decoder model.`,name:"is_encoder_decoder"},{anchor:"transformers.FSMTConfig.tie_word_embeddings",description:`<strong>tie_word_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to tie input and output embeddings.`,name:"tie_word_embeddings"},{anchor:"transformers.FSMTConfig.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Number of beams for beam search that will be used by default in the <code>generate</code> method of the model. 1
means no beam search.`,name:"num_beams"},{anchor:"transformers.FSMTConfig.length_penalty",description:`<strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
Exponential penalty to the length that will be used by default in the <code>generate</code> method of the model.`,name:"length_penalty"},{anchor:"transformers.FSMTConfig.early_stopping",description:`<strong>early_stopping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Flag that will be used by default in the <code>generate</code> method of the model. Whether to stop the beam
search when at least <code>num_beams</code> sentences are finished per batch or not.`,name:"early_stopping"},{anchor:"transformers.FSMTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.FSMTConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),xe=new Qr({props:{code:`from transformers import FSMTConfig, FSMTModel

config = FSMTConfig.from_pretrained('facebook/wmt19-en-ru')
model = FSMTModel(config),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FSMTConfig, FSMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>config = FSMTConfig.from_pretrained(<span class="hljs-string">&#x27;facebook/wmt19-en-ru&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FSMTModel(config)`}}),Ce=new H({props:{name:"to\\_dict",anchor:"transformers.FSMTConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/fsmt/configuration_fsmt.py#L209",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Pe=new Te({}),Ae=new H({props:{name:"class transformers.FSMTTokenizer",anchor:"transformers.FSMTTokenizer",parameters:[{name:"langs",val:" = None"},{name:"src_vocab_file",val:" = None"},{name:"tgt_vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/fsmt/tokenization_fsmt.py#L137",parametersDescription:[{anchor:"transformers.FSMTTokenizer.langs",description:`<strong>langs</strong> (<code>List[str]</code>) &#x2014;
A list of two languages to translate from and to, for instance <code>[&quot;en&quot;, &quot;ru&quot;]</code>.`,name:"langs"},{anchor:"transformers.FSMTTokenizer.src_vocab_file",description:`<strong>src_vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary for the source language.`,name:"src_vocab_file"},{anchor:"transformers.FSMTTokenizer.tgt_vocab_file",description:`<strong>tgt_vocab_file</strong> (<code>st</code>) &#x2014;
File containing the vocabulary for the target language.`,name:"tgt_vocab_file"},{anchor:"transformers.FSMTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
File containing the merges.`,name:"merges_file"},{anchor:"transformers.FSMTTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.FSMTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.FSMTTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.FSMTTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.FSMTTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"}]}}),Ne=new H({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.FSMTTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/fsmt/tokenization_fsmt.py#L397",parametersDescription:[{anchor:"transformers.FSMTTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FSMTTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Oe=new H({props:{name:"get\\_special\\_tokens\\_mask",anchor:"transformers.FSMTTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/fsmt/tokenization_fsmt.py#L423",parametersDescription:[{anchor:"transformers.FSMTTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FSMTTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FSMTTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),je=new H({props:{name:"create\\_token\\_type\\_ids\\_from\\_sequences",anchor:"transformers.FSMTTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/fsmt/tokenization_fsmt.py#L451",parametersDescription:[{anchor:"transformers.FSMTTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FSMTTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given
sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Be=new Qr({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),We=new Te({}),Re=new H({props:{name:"class transformers.FSMTModel",anchor:"transformers.FSMTModel",parameters:[{name:"config",val:": FSMTConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/fsmt/modeling_fsmt.py#L994",parametersDescription:[{anchor:"transformers.FSMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/fsmt#transformers.FSMTConfig">FSMTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Qe=new H({props:{name:"forward",anchor:"transformers.FSMTModel.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple] = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/fsmt/modeling_fsmt.py#L1008",parametersDescription:[{anchor:"transformers.FSMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>IIndices can be obtained using <code>FSTMTokenizer</code>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FSMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FSMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/fsmt#transformers.FSMTTokenizer">FSMTTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>FSMT uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.FSMTModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FSMTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FSMTModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.FSMTModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.FSMTModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>Tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a
sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FSMTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.FSMTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.FSMTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FSMTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FSMTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/fsmt#transformers.FSMTConfig"
>FSMTConfig</a>) and inputs.</p>
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
`}}),fe=new mi({props:{$$slots:{default:[gi]},$$scope:{ctx:be}}}),Xe=new Qr({props:{code:`from transformers import FSMTTokenizer, FSMTModel
import torch

tokenizer = FSMTTokenizer.from_pretrained('facebook/wmt19-ru-en')
model = FSMTModel.from_pretrained('facebook/wmt19-ru-en')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FSMTTokenizer, FSMTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FSMTTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/wmt19-ru-en&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FSMTModel.from_pretrained(<span class="hljs-string">&#x27;facebook/wmt19-ru-en&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Je=new Te({}),Ke=new H({props:{name:"class transformers.FSMTForConditionalGeneration",anchor:"transformers.FSMTForConditionalGeneration",parameters:[{name:"config",val:": FSMTConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/fsmt/modeling_fsmt.py#L1118",parametersDescription:[{anchor:"transformers.FSMTForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/fsmt#transformers.FSMTConfig">FSMTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),tt=new H({props:{name:"forward",anchor:"transformers.FSMTForConditionalGeneration.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/fsmt/modeling_fsmt.py#L1134",parametersDescription:[{anchor:"transformers.FSMTForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>IIndices can be obtained using <code>FSTMTokenizer</code>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FSMTForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FSMTForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/fsmt#transformers.FSMTTokenizer">FSMTTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>FSMT uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.FSMTForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FSMTForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FSMTForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.FSMTForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.FSMTForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>Tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a
sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FSMTForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.FSMTForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.FSMTForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FSMTForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FSMTForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FSMTForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/fsmt#transformers.FSMTConfig"
>FSMTConfig</a>) and inputs.</p>
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
`}}),ue=new mi({props:{$$slots:{default:[vi]},$$scope:{ctx:be}}}),ot=new Te({}),{c(){f=n("meta"),x=d(),p=n("h1"),w=n("a"),A=n("span"),u(M.$$.fragment),F=d(),D=n("span"),on=a("FSMT"),To=d(),U=n("p"),$t=n("strong"),nn=a("DISCLAIMER:"),sn=a(" If you see something strange, file a "),ye=n("a"),rn=a("Github Issue"),an=a(` and assign
@stas00.`),bo=d(),V=n("h2"),re=n("a"),zt=n("span"),u(we.$$.fragment),dn=d(),Et=n("span"),cn=a("Overview"),yo=d(),ae=n("p"),ln=a("FSMT (FairSeq MachineTranslation) models were introduced in "),Me=n("a"),hn=a("Facebook FAIR\u2019s WMT19 News Translation Task Submission"),mn=a(" by Nathan Ng, Kyra Yee, Alexei Baevski, Myle Ott, Michael Auli, Sergey Edunov."),wo=d(),st=n("p"),fn=a("The abstract of the paper is the following:"),Mo=d(),rt=n("p"),qt=n("em"),pn=a(`This paper describes Facebook FAIR\u2019s submission to the WMT19 shared news translation task. We participate in two
language pairs and four language directions, English <-> German and English <-> Russian. Following our submission from
last year, our baseline systems are large BPE-based transformer models trained with the Fairseq sequence modeling
toolkit which rely on sampled back-translations. This year we experiment with different bitext data filtering schemes,
as well as with adding filtered back-translated data. We also ensemble and fine-tune our models on domain-specific
data, then decode using noisy channel model reranking. Our submissions are ranked first in all four directions of the
human evaluation campaign. On En->De, our system significantly outperforms other systems as well as human translations.
This system improves upon our WMT\u201918 submission by 4.5 BLEU points.`),Fo=d(),O=n("p"),un=a("This model was contributed by "),Fe=n("a"),_n=a("stas"),gn=a(`. The original code can be found
`),Se=n("a"),vn=a("here"),kn=a("."),So=d(),Q=n("h2"),ie=n("a"),xt=n("span"),u($e.$$.fragment),Tn=d(),Ct=n("span"),bn=a("Implementation Notes"),$o=d(),at=n("ul"),X=n("li"),yn=a(`FSMT uses source and target vocabulary pairs that aren\u2019t combined into one. It doesn\u2019t share embeddings tokens
either. Its tokenizer is very similar to `),it=n("a"),wn=a("XLMTokenizer"),Mn=a(` and the main model is derived from
`),dt=n("a"),Fn=a("BartModel"),Sn=a("."),zo=d(),J=n("h2"),de=n("a"),Pt=n("span"),u(ze.$$.fragment),$n=d(),At=n("span"),zn=a("FSMTConfig"),Eo=d(),S=n("div"),u(Ee.$$.fragment),En=d(),qe=n("p"),qn=a("This is the configuration class to store the configuration of a "),ct=n("a"),xn=a("FSMTModel"),Cn=a(`. It is used to
instantiate a FSMT model according to the specified arguments, defining the model architecture.`),Pn=d(),K=n("p"),An=a("Configuration objects inherit from "),lt=n("a"),In=a("PretrainedConfig"),Dn=a(` and can be used to control the model
outputs. Read the documentation from `),ht=n("a"),Nn=a("PretrainedConfig"),Ln=a(" for more information."),On=d(),It=n("p"),Gn=a("Examples:"),jn=d(),u(xe.$$.fragment),Bn=d(),ce=n("div"),u(Ce.$$.fragment),Wn=d(),Y=n("p"),Rn=a("Serializes this instance to a Python dictionary. Override the default "),Dt=n("em"),Hn=a("to_dict()"),Un=a(" from "),Nt=n("em"),Vn=a("PretrainedConfig"),Qn=a("."),qo=d(),Z=n("h2"),le=n("a"),Lt=n("span"),u(Pe.$$.fragment),Xn=d(),Ot=n("span"),Jn=a("FSMTTokenizer"),xo=d(),b=n("div"),u(Ae.$$.fragment),Kn=d(),Gt=n("p"),Yn=a("Construct an FAIRSEQ Transformer tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Zn=d(),N=n("ul"),jt=n("li"),es=a("Moses preprocessing and tokenization."),ts=d(),Bt=n("li"),os=a("Normalizing all inputs text."),ns=d(),L=n("li"),ss=a("The arguments "),Wt=n("code"),rs=a("special_tokens"),as=a(" and the function "),Rt=n("code"),is=a("set_special_tokens"),ds=a(`, can be used to add additional symbols
(like \u201D`),Ht=n("strong"),cs=a("classify"),ls=a("\u201D) to a vocabulary."),hs=d(),Ie=n("li"),ms=a("The argument "),Ut=n("code"),fs=a("langs"),ps=a(" defines a pair of languages."),us=d(),De=n("p"),_s=a("This tokenizer inherits from "),mt=n("a"),gs=a("PreTrainedTokenizer"),vs=a(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),ks=d(),G=n("div"),u(Ne.$$.fragment),Ts=d(),Vt=n("p"),bs=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A FAIRSEQ Transformer sequence has the following format:`),ys=d(),Le=n("ul"),ft=n("li"),ws=a("single sequence: "),Qt=n("code"),Ms=a("<s> X </s>"),Fs=d(),pt=n("li"),Ss=a("pair of sequences: "),Xt=n("code"),$s=a("<s> A </s> B </s>"),zs=d(),he=n("div"),u(Oe.$$.fragment),Es=d(),Ge=n("p"),qs=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Jt=n("code"),xs=a("prepare_for_model"),Cs=a(" method."),Ps=d(),C=n("div"),u(je.$$.fragment),As=d(),Kt=n("p"),Is=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A FAIRSEQ
Transformer sequence pair mask has the following format:`),Ds=d(),u(Be.$$.fragment),Ns=d(),ee=n("p"),Ls=a("If "),Yt=n("code"),Os=a("token_ids_1"),Gs=a(" is "),Zt=n("code"),js=a("None"),Bs=a(", this method only returns the first portion of the mask (0s)."),Ws=d(),eo=n("p"),Rs=a(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An
FAIRSEQ_TRANSFORMER sequence pair mask has the following format:`),Hs=d(),to=n("div"),Co=d(),te=n("h2"),me=n("a"),oo=n("span"),u(We.$$.fragment),Us=d(),no=n("span"),Vs=a("FSMTModel"),Po=d(),E=n("div"),u(Re.$$.fragment),Qs=d(),so=n("p"),Xs=a("The bare FSMT Model outputting raw hidden-states without any specific head on top."),Js=d(),He=n("p"),Ks=a("This model inherits from "),ut=n("a"),Ys=a("PreTrainedModel"),Zs=a(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),er=d(),Ue=n("p"),tr=a("This model is also a PyTorch "),Ve=n("a"),or=a("torch.nn.Module"),nr=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),sr=d(),P=n("div"),u(Qe.$$.fragment),rr=d(),oe=n("p"),ar=a("The "),_t=n("a"),ir=a("FSMTModel"),dr=a(" forward method, overrides the "),ro=n("code"),cr=a("__call__"),lr=a(" special method."),hr=d(),u(fe.$$.fragment),mr=d(),ao=n("p"),fr=a("Example:"),pr=d(),u(Xe.$$.fragment),Ao=d(),ne=n("h2"),pe=n("a"),io=n("span"),u(Je.$$.fragment),ur=d(),co=n("span"),_r=a("FSMTForConditionalGeneration"),Io=d(),q=n("div"),u(Ke.$$.fragment),gr=d(),lo=n("p"),vr=a("The FSMT Model with a language modeling head. Can be used for summarization."),kr=d(),Ye=n("p"),Tr=a("This model inherits from "),gt=n("a"),br=a("PreTrainedModel"),yr=a(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),wr=d(),Ze=n("p"),Mr=a("This model is also a PyTorch "),et=n("a"),Fr=a("torch.nn.Module"),Sr=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),$r=d(),y=n("div"),u(tt.$$.fragment),zr=d(),se=n("p"),Er=a("The "),vt=n("a"),qr=a("FSMTForConditionalGeneration"),xr=a(" forward method, overrides the "),ho=n("code"),Cr=a("__call__"),Pr=a(" special method."),Ar=d(),u(ue.$$.fragment),Ir=d(),mo=n("p"),Dr=a("Translation example::"),Nr=d(),fo=n("p"),Lr=a("from transformers import FSMTTokenizer, FSMTForConditionalGeneration"),Or=d(),po=n("p"),Gr=a(`mname = \u201Cfacebook/wmt19-ru-en\u201D
model = FSMTForConditionalGeneration.from_pretrained(mname)
tokenizer = FSMTTokenizer.from_pretrained(mname)`),jr=d(),uo=n("p"),Br=a(`src_text = \u201C\u041C\u0430\u0448\u0438\u043D\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 - \u044D\u0442\u043E \u0437\u0434\u043E\u0440\u043E\u0432\u043E, \u043D\u0435 \u0442\u0430\u043A \u043B\u0438?\u201D
input_ids = tokenizer.encode(src_text, return_tensors=\u2018pt\u2019)
outputs = model.generate(input_ids, num_beams=5, num_return_sequences=3)
for i, output in enumerate(outputs):
decoded = tokenizer.decode(output, skip_special_tokens=True)
print(f\u201D{i}: {decoded})`),Wr=d(),_e=n("h1"),ge=n("a"),_o=n("span"),u(ot.$$.fragment),Rr=d(),go=n("span"),Hr=a("1: Machine learning is great, isn't it? ..."),this.h()},l(t){const h=_i('[data-svelte="svelte-1phssyn"]',document.head);f=s(h,"META",{name:!0,content:!0}),h.forEach(o),x=c(t),p=s(t,"H1",{class:!0});var nt=r(p);w=s(nt,"A",{id:!0,class:!0,href:!0});var vo=r(w);A=s(vo,"SPAN",{});var Xr=r(A);_(M.$$.fragment,Xr),Xr.forEach(o),vo.forEach(o),F=c(nt),D=s(nt,"SPAN",{});var Jr=r(D);on=i(Jr,"FSMT"),Jr.forEach(o),nt.forEach(o),To=c(t),U=s(t,"P",{});var ko=r(U);$t=s(ko,"STRONG",{});var Kr=r($t);nn=i(Kr,"DISCLAIMER:"),Kr.forEach(o),sn=i(ko," If you see something strange, file a "),ye=s(ko,"A",{href:!0,rel:!0});var Yr=r(ye);rn=i(Yr,"Github Issue"),Yr.forEach(o),an=i(ko,` and assign
@stas00.`),ko.forEach(o),bo=c(t),V=s(t,"H2",{class:!0});var No=r(V);re=s(No,"A",{id:!0,class:!0,href:!0});var Zr=r(re);zt=s(Zr,"SPAN",{});var ea=r(zt);_(we.$$.fragment,ea),ea.forEach(o),Zr.forEach(o),dn=c(No),Et=s(No,"SPAN",{});var ta=r(Et);cn=i(ta,"Overview"),ta.forEach(o),No.forEach(o),yo=c(t),ae=s(t,"P",{});var Lo=r(ae);ln=i(Lo,"FSMT (FairSeq MachineTranslation) models were introduced in "),Me=s(Lo,"A",{href:!0,rel:!0});var oa=r(Me);hn=i(oa,"Facebook FAIR\u2019s WMT19 News Translation Task Submission"),oa.forEach(o),mn=i(Lo," by Nathan Ng, Kyra Yee, Alexei Baevski, Myle Ott, Michael Auli, Sergey Edunov."),Lo.forEach(o),wo=c(t),st=s(t,"P",{});var na=r(st);fn=i(na,"The abstract of the paper is the following:"),na.forEach(o),Mo=c(t),rt=s(t,"P",{});var sa=r(rt);qt=s(sa,"EM",{});var ra=r(qt);pn=i(ra,`This paper describes Facebook FAIR\u2019s submission to the WMT19 shared news translation task. We participate in two
language pairs and four language directions, English <-> German and English <-> Russian. Following our submission from
last year, our baseline systems are large BPE-based transformer models trained with the Fairseq sequence modeling
toolkit which rely on sampled back-translations. This year we experiment with different bitext data filtering schemes,
as well as with adding filtered back-translated data. We also ensemble and fine-tune our models on domain-specific
data, then decode using noisy channel model reranking. Our submissions are ranked first in all four directions of the
human evaluation campaign. On En->De, our system significantly outperforms other systems as well as human translations.
This system improves upon our WMT\u201918 submission by 4.5 BLEU points.`),ra.forEach(o),sa.forEach(o),Fo=c(t),O=s(t,"P",{});var kt=r(O);un=i(kt,"This model was contributed by "),Fe=s(kt,"A",{href:!0,rel:!0});var aa=r(Fe);_n=i(aa,"stas"),aa.forEach(o),gn=i(kt,`. The original code can be found
`),Se=s(kt,"A",{href:!0,rel:!0});var ia=r(Se);vn=i(ia,"here"),ia.forEach(o),kn=i(kt,"."),kt.forEach(o),So=c(t),Q=s(t,"H2",{class:!0});var Oo=r(Q);ie=s(Oo,"A",{id:!0,class:!0,href:!0});var da=r(ie);xt=s(da,"SPAN",{});var ca=r(xt);_($e.$$.fragment,ca),ca.forEach(o),da.forEach(o),Tn=c(Oo),Ct=s(Oo,"SPAN",{});var la=r(Ct);bn=i(la,"Implementation Notes"),la.forEach(o),Oo.forEach(o),$o=c(t),at=s(t,"UL",{});var ha=r(at);X=s(ha,"LI",{});var Tt=r(X);yn=i(Tt,`FSMT uses source and target vocabulary pairs that aren\u2019t combined into one. It doesn\u2019t share embeddings tokens
either. Its tokenizer is very similar to `),it=s(Tt,"A",{href:!0});var ma=r(it);wn=i(ma,"XLMTokenizer"),ma.forEach(o),Mn=i(Tt,` and the main model is derived from
`),dt=s(Tt,"A",{href:!0});var fa=r(dt);Fn=i(fa,"BartModel"),fa.forEach(o),Sn=i(Tt,"."),Tt.forEach(o),ha.forEach(o),zo=c(t),J=s(t,"H2",{class:!0});var Go=r(J);de=s(Go,"A",{id:!0,class:!0,href:!0});var pa=r(de);Pt=s(pa,"SPAN",{});var ua=r(Pt);_(ze.$$.fragment,ua),ua.forEach(o),pa.forEach(o),$n=c(Go),At=s(Go,"SPAN",{});var _a=r(At);zn=i(_a,"FSMTConfig"),_a.forEach(o),Go.forEach(o),Eo=c(t),S=s(t,"DIV",{class:!0});var I=r(S);_(Ee.$$.fragment,I),En=c(I),qe=s(I,"P",{});var jo=r(qe);qn=i(jo,"This is the configuration class to store the configuration of a "),ct=s(jo,"A",{href:!0});var ga=r(ct);xn=i(ga,"FSMTModel"),ga.forEach(o),Cn=i(jo,`. It is used to
instantiate a FSMT model according to the specified arguments, defining the model architecture.`),jo.forEach(o),Pn=c(I),K=s(I,"P",{});var bt=r(K);An=i(bt,"Configuration objects inherit from "),lt=s(bt,"A",{href:!0});var va=r(lt);In=i(va,"PretrainedConfig"),va.forEach(o),Dn=i(bt,` and can be used to control the model
outputs. Read the documentation from `),ht=s(bt,"A",{href:!0});var ka=r(ht);Nn=i(ka,"PretrainedConfig"),ka.forEach(o),Ln=i(bt," for more information."),bt.forEach(o),On=c(I),It=s(I,"P",{});var Ta=r(It);Gn=i(Ta,"Examples:"),Ta.forEach(o),jn=c(I),_(xe.$$.fragment,I),Bn=c(I),ce=s(I,"DIV",{class:!0});var Bo=r(ce);_(Ce.$$.fragment,Bo),Wn=c(Bo),Y=s(Bo,"P",{});var yt=r(Y);Rn=i(yt,"Serializes this instance to a Python dictionary. Override the default "),Dt=s(yt,"EM",{});var ba=r(Dt);Hn=i(ba,"to_dict()"),ba.forEach(o),Un=i(yt," from "),Nt=s(yt,"EM",{});var ya=r(Nt);Vn=i(ya,"PretrainedConfig"),ya.forEach(o),Qn=i(yt,"."),yt.forEach(o),Bo.forEach(o),I.forEach(o),qo=c(t),Z=s(t,"H2",{class:!0});var Wo=r(Z);le=s(Wo,"A",{id:!0,class:!0,href:!0});var wa=r(le);Lt=s(wa,"SPAN",{});var Ma=r(Lt);_(Pe.$$.fragment,Ma),Ma.forEach(o),wa.forEach(o),Xn=c(Wo),Ot=s(Wo,"SPAN",{});var Fa=r(Ot);Jn=i(Fa,"FSMTTokenizer"),Fa.forEach(o),Wo.forEach(o),xo=c(t),b=s(t,"DIV",{class:!0});var $=r(b);_(Ae.$$.fragment,$),Kn=c($),Gt=s($,"P",{});var Sa=r(Gt);Yn=i(Sa,"Construct an FAIRSEQ Transformer tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Sa.forEach(o),Zn=c($),N=s($,"UL",{});var ve=r(N);jt=s(ve,"LI",{});var $a=r(jt);es=i($a,"Moses preprocessing and tokenization."),$a.forEach(o),ts=c(ve),Bt=s(ve,"LI",{});var za=r(Bt);os=i(za,"Normalizing all inputs text."),za.forEach(o),ns=c(ve),L=s(ve,"LI",{});var ke=r(L);ss=i(ke,"The arguments "),Wt=s(ke,"CODE",{});var Ea=r(Wt);rs=i(Ea,"special_tokens"),Ea.forEach(o),as=i(ke," and the function "),Rt=s(ke,"CODE",{});var qa=r(Rt);is=i(qa,"set_special_tokens"),qa.forEach(o),ds=i(ke,`, can be used to add additional symbols
(like \u201D`),Ht=s(ke,"STRONG",{});var xa=r(Ht);cs=i(xa,"classify"),xa.forEach(o),ls=i(ke,"\u201D) to a vocabulary."),ke.forEach(o),hs=c(ve),Ie=s(ve,"LI",{});var Ro=r(Ie);ms=i(Ro,"The argument "),Ut=s(Ro,"CODE",{});var Ca=r(Ut);fs=i(Ca,"langs"),Ca.forEach(o),ps=i(Ro," defines a pair of languages."),Ro.forEach(o),ve.forEach(o),us=c($),De=s($,"P",{});var Ho=r(De);_s=i(Ho,"This tokenizer inherits from "),mt=s(Ho,"A",{href:!0});var Pa=r(mt);gs=i(Pa,"PreTrainedTokenizer"),Pa.forEach(o),vs=i(Ho,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Ho.forEach(o),ks=c($),G=s($,"DIV",{class:!0});var wt=r(G);_(Ne.$$.fragment,wt),Ts=c(wt),Vt=s(wt,"P",{});var Aa=r(Vt);bs=i(Aa,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A FAIRSEQ Transformer sequence has the following format:`),Aa.forEach(o),ys=c(wt),Le=s(wt,"UL",{});var Uo=r(Le);ft=s(Uo,"LI",{});var Ur=r(ft);ws=i(Ur,"single sequence: "),Qt=s(Ur,"CODE",{});var Ia=r(Qt);Ms=i(Ia,"<s> X </s>"),Ia.forEach(o),Ur.forEach(o),Fs=c(Uo),pt=s(Uo,"LI",{});var Vr=r(pt);Ss=i(Vr,"pair of sequences: "),Xt=s(Vr,"CODE",{});var Da=r(Xt);$s=i(Da,"<s> A </s> B </s>"),Da.forEach(o),Vr.forEach(o),Uo.forEach(o),wt.forEach(o),zs=c($),he=s($,"DIV",{class:!0});var Vo=r(he);_(Oe.$$.fragment,Vo),Es=c(Vo),Ge=s(Vo,"P",{});var Qo=r(Ge);qs=i(Qo,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Jt=s(Qo,"CODE",{});var Na=r(Jt);xs=i(Na,"prepare_for_model"),Na.forEach(o),Cs=i(Qo," method."),Qo.forEach(o),Vo.forEach(o),Ps=c($),C=s($,"DIV",{class:!0});var j=r(C);_(je.$$.fragment,j),As=c(j),Kt=s(j,"P",{});var La=r(Kt);Is=i(La,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A FAIRSEQ
Transformer sequence pair mask has the following format:`),La.forEach(o),Ds=c(j),_(Be.$$.fragment,j),Ns=c(j),ee=s(j,"P",{});var Mt=r(ee);Ls=i(Mt,"If "),Yt=s(Mt,"CODE",{});var Oa=r(Yt);Os=i(Oa,"token_ids_1"),Oa.forEach(o),Gs=i(Mt," is "),Zt=s(Mt,"CODE",{});var Ga=r(Zt);js=i(Ga,"None"),Ga.forEach(o),Bs=i(Mt,", this method only returns the first portion of the mask (0s)."),Mt.forEach(o),Ws=c(j),eo=s(j,"P",{});var ja=r(eo);Rs=i(ja,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An
FAIRSEQ_TRANSFORMER sequence pair mask has the following format:`),ja.forEach(o),j.forEach(o),Hs=c($),to=s($,"DIV",{class:!0}),r(to).forEach(o),$.forEach(o),Co=c(t),te=s(t,"H2",{class:!0});var Xo=r(te);me=s(Xo,"A",{id:!0,class:!0,href:!0});var Ba=r(me);oo=s(Ba,"SPAN",{});var Wa=r(oo);_(We.$$.fragment,Wa),Wa.forEach(o),Ba.forEach(o),Us=c(Xo),no=s(Xo,"SPAN",{});var Ra=r(no);Vs=i(Ra,"FSMTModel"),Ra.forEach(o),Xo.forEach(o),Po=c(t),E=s(t,"DIV",{class:!0});var B=r(E);_(Re.$$.fragment,B),Qs=c(B),so=s(B,"P",{});var Ha=r(so);Xs=i(Ha,"The bare FSMT Model outputting raw hidden-states without any specific head on top."),Ha.forEach(o),Js=c(B),He=s(B,"P",{});var Jo=r(He);Ks=i(Jo,"This model inherits from "),ut=s(Jo,"A",{href:!0});var Ua=r(ut);Ys=i(Ua,"PreTrainedModel"),Ua.forEach(o),Zs=i(Jo,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Jo.forEach(o),er=c(B),Ue=s(B,"P",{});var Ko=r(Ue);tr=i(Ko,"This model is also a PyTorch "),Ve=s(Ko,"A",{href:!0,rel:!0});var Va=r(Ve);or=i(Va,"torch.nn.Module"),Va.forEach(o),nr=i(Ko,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ko.forEach(o),sr=c(B),P=s(B,"DIV",{class:!0});var W=r(P);_(Qe.$$.fragment,W),rr=c(W),oe=s(W,"P",{});var Ft=r(oe);ar=i(Ft,"The "),_t=s(Ft,"A",{href:!0});var Qa=r(_t);ir=i(Qa,"FSMTModel"),Qa.forEach(o),dr=i(Ft," forward method, overrides the "),ro=s(Ft,"CODE",{});var Xa=r(ro);cr=i(Xa,"__call__"),Xa.forEach(o),lr=i(Ft," special method."),Ft.forEach(o),hr=c(W),_(fe.$$.fragment,W),mr=c(W),ao=s(W,"P",{});var Ja=r(ao);fr=i(Ja,"Example:"),Ja.forEach(o),pr=c(W),_(Xe.$$.fragment,W),W.forEach(o),B.forEach(o),Ao=c(t),ne=s(t,"H2",{class:!0});var Yo=r(ne);pe=s(Yo,"A",{id:!0,class:!0,href:!0});var Ka=r(pe);io=s(Ka,"SPAN",{});var Ya=r(io);_(Je.$$.fragment,Ya),Ya.forEach(o),Ka.forEach(o),ur=c(Yo),co=s(Yo,"SPAN",{});var Za=r(co);_r=i(Za,"FSMTForConditionalGeneration"),Za.forEach(o),Yo.forEach(o),Io=c(t),q=s(t,"DIV",{class:!0});var R=r(q);_(Ke.$$.fragment,R),gr=c(R),lo=s(R,"P",{});var ei=r(lo);vr=i(ei,"The FSMT Model with a language modeling head. Can be used for summarization."),ei.forEach(o),kr=c(R),Ye=s(R,"P",{});var Zo=r(Ye);Tr=i(Zo,"This model inherits from "),gt=s(Zo,"A",{href:!0});var ti=r(gt);br=i(ti,"PreTrainedModel"),ti.forEach(o),yr=i(Zo,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Zo.forEach(o),wr=c(R),Ze=s(R,"P",{});var en=r(Ze);Mr=i(en,"This model is also a PyTorch "),et=s(en,"A",{href:!0,rel:!0});var oi=r(et);Fr=i(oi,"torch.nn.Module"),oi.forEach(o),Sr=i(en,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),en.forEach(o),$r=c(R),y=s(R,"DIV",{class:!0});var z=r(y);_(tt.$$.fragment,z),zr=c(z),se=s(z,"P",{});var St=r(se);Er=i(St,"The "),vt=s(St,"A",{href:!0});var ni=r(vt);qr=i(ni,"FSMTForConditionalGeneration"),ni.forEach(o),xr=i(St," forward method, overrides the "),ho=s(St,"CODE",{});var si=r(ho);Cr=i(si,"__call__"),si.forEach(o),Pr=i(St," special method."),St.forEach(o),Ar=c(z),_(ue.$$.fragment,z),Ir=c(z),mo=s(z,"P",{});var ri=r(mo);Dr=i(ri,"Translation example::"),ri.forEach(o),Nr=c(z),fo=s(z,"P",{});var ai=r(fo);Lr=i(ai,"from transformers import FSMTTokenizer, FSMTForConditionalGeneration"),ai.forEach(o),Or=c(z),po=s(z,"P",{});var ii=r(po);Gr=i(ii,`mname = \u201Cfacebook/wmt19-ru-en\u201D
model = FSMTForConditionalGeneration.from_pretrained(mname)
tokenizer = FSMTTokenizer.from_pretrained(mname)`),ii.forEach(o),jr=c(z),uo=s(z,"P",{});var di=r(uo);Br=i(di,`src_text = \u201C\u041C\u0430\u0448\u0438\u043D\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 - \u044D\u0442\u043E \u0437\u0434\u043E\u0440\u043E\u0432\u043E, \u043D\u0435 \u0442\u0430\u043A \u043B\u0438?\u201D
input_ids = tokenizer.encode(src_text, return_tensors=\u2018pt\u2019)
outputs = model.generate(input_ids, num_beams=5, num_return_sequences=3)
for i, output in enumerate(outputs):
decoded = tokenizer.decode(output, skip_special_tokens=True)
print(f\u201D{i}: {decoded})`),di.forEach(o),Wr=c(z),_e=s(z,"H1",{class:!0});var tn=r(_e);ge=s(tn,"A",{id:!0,class:!0,href:!0});var ci=r(ge);_o=s(ci,"SPAN",{});var li=r(_o);_(ot.$$.fragment,li),li.forEach(o),ci.forEach(o),Rr=c(tn),go=s(tn,"SPAN",{});var hi=r(go);Hr=i(hi,"1: Machine learning is great, isn't it? ..."),hi.forEach(o),tn.forEach(o),z.forEach(o),R.forEach(o),this.h()},h(){l(f,"name","hf:doc:metadata"),l(f,"content",JSON.stringify(Ti)),l(w,"id","fsmt"),l(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(w,"href","#fsmt"),l(p,"class","relative group"),l(ye,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(ye,"rel","nofollow"),l(re,"id","overview"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#overview"),l(V,"class","relative group"),l(Me,"href","https://arxiv.org/abs/1907.06616"),l(Me,"rel","nofollow"),l(Fe,"href","https://huggingface.co/stas"),l(Fe,"rel","nofollow"),l(Se,"href","https://github.com/pytorch/fairseq/tree/master/examples/wmt19"),l(Se,"rel","nofollow"),l(ie,"id","implementation-notes"),l(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ie,"href","#implementation-notes"),l(Q,"class","relative group"),l(it,"href","/docs/transformers/v4.15.0/en/model_doc/xlm#transformers.XLMTokenizer"),l(dt,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartModel"),l(de,"id","transformers.FSMTConfig"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.FSMTConfig"),l(J,"class","relative group"),l(ct,"href","/docs/transformers/v4.15.0/en/model_doc/fsmt#transformers.FSMTModel"),l(lt,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(ht,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(ce,"class","docstring"),l(S,"class","docstring"),l(le,"id","transformers.FSMTTokenizer"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.FSMTTokenizer"),l(Z,"class","relative group"),l(mt,"href","/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(G,"class","docstring"),l(he,"class","docstring"),l(C,"class","docstring"),l(to,"class","docstring"),l(b,"class","docstring"),l(me,"id","transformers.FSMTModel"),l(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(me,"href","#transformers.FSMTModel"),l(te,"class","relative group"),l(ut,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),l(Ve,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ve,"rel","nofollow"),l(_t,"href","/docs/transformers/v4.15.0/en/model_doc/fsmt#transformers.FSMTModel"),l(P,"class","docstring"),l(E,"class","docstring"),l(pe,"id","transformers.FSMTForConditionalGeneration"),l(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pe,"href","#transformers.FSMTForConditionalGeneration"),l(ne,"class","relative group"),l(gt,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),l(et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(et,"rel","nofollow"),l(vt,"href","/docs/transformers/v4.15.0/en/model_doc/fsmt#transformers.FSMTForConditionalGeneration"),l(ge,"id","1-machine-learning-is-great-isnt-it"),l(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ge,"href","#1-machine-learning-is-great-isnt-it"),l(_e,"class","relative group"),l(y,"class","docstring"),l(q,"class","docstring")},m(t,h){e(document.head,f),m(t,x,h),m(t,p,h),e(p,w),e(w,A),g(M,A,null),e(p,F),e(p,D),e(D,on),m(t,To,h),m(t,U,h),e(U,$t),e($t,nn),e(U,sn),e(U,ye),e(ye,rn),e(U,an),m(t,bo,h),m(t,V,h),e(V,re),e(re,zt),g(we,zt,null),e(V,dn),e(V,Et),e(Et,cn),m(t,yo,h),m(t,ae,h),e(ae,ln),e(ae,Me),e(Me,hn),e(ae,mn),m(t,wo,h),m(t,st,h),e(st,fn),m(t,Mo,h),m(t,rt,h),e(rt,qt),e(qt,pn),m(t,Fo,h),m(t,O,h),e(O,un),e(O,Fe),e(Fe,_n),e(O,gn),e(O,Se),e(Se,vn),e(O,kn),m(t,So,h),m(t,Q,h),e(Q,ie),e(ie,xt),g($e,xt,null),e(Q,Tn),e(Q,Ct),e(Ct,bn),m(t,$o,h),m(t,at,h),e(at,X),e(X,yn),e(X,it),e(it,wn),e(X,Mn),e(X,dt),e(dt,Fn),e(X,Sn),m(t,zo,h),m(t,J,h),e(J,de),e(de,Pt),g(ze,Pt,null),e(J,$n),e(J,At),e(At,zn),m(t,Eo,h),m(t,S,h),g(Ee,S,null),e(S,En),e(S,qe),e(qe,qn),e(qe,ct),e(ct,xn),e(qe,Cn),e(S,Pn),e(S,K),e(K,An),e(K,lt),e(lt,In),e(K,Dn),e(K,ht),e(ht,Nn),e(K,Ln),e(S,On),e(S,It),e(It,Gn),e(S,jn),g(xe,S,null),e(S,Bn),e(S,ce),g(Ce,ce,null),e(ce,Wn),e(ce,Y),e(Y,Rn),e(Y,Dt),e(Dt,Hn),e(Y,Un),e(Y,Nt),e(Nt,Vn),e(Y,Qn),m(t,qo,h),m(t,Z,h),e(Z,le),e(le,Lt),g(Pe,Lt,null),e(Z,Xn),e(Z,Ot),e(Ot,Jn),m(t,xo,h),m(t,b,h),g(Ae,b,null),e(b,Kn),e(b,Gt),e(Gt,Yn),e(b,Zn),e(b,N),e(N,jt),e(jt,es),e(N,ts),e(N,Bt),e(Bt,os),e(N,ns),e(N,L),e(L,ss),e(L,Wt),e(Wt,rs),e(L,as),e(L,Rt),e(Rt,is),e(L,ds),e(L,Ht),e(Ht,cs),e(L,ls),e(N,hs),e(N,Ie),e(Ie,ms),e(Ie,Ut),e(Ut,fs),e(Ie,ps),e(b,us),e(b,De),e(De,_s),e(De,mt),e(mt,gs),e(De,vs),e(b,ks),e(b,G),g(Ne,G,null),e(G,Ts),e(G,Vt),e(Vt,bs),e(G,ys),e(G,Le),e(Le,ft),e(ft,ws),e(ft,Qt),e(Qt,Ms),e(Le,Fs),e(Le,pt),e(pt,Ss),e(pt,Xt),e(Xt,$s),e(b,zs),e(b,he),g(Oe,he,null),e(he,Es),e(he,Ge),e(Ge,qs),e(Ge,Jt),e(Jt,xs),e(Ge,Cs),e(b,Ps),e(b,C),g(je,C,null),e(C,As),e(C,Kt),e(Kt,Is),e(C,Ds),g(Be,C,null),e(C,Ns),e(C,ee),e(ee,Ls),e(ee,Yt),e(Yt,Os),e(ee,Gs),e(ee,Zt),e(Zt,js),e(ee,Bs),e(C,Ws),e(C,eo),e(eo,Rs),e(b,Hs),e(b,to),m(t,Co,h),m(t,te,h),e(te,me),e(me,oo),g(We,oo,null),e(te,Us),e(te,no),e(no,Vs),m(t,Po,h),m(t,E,h),g(Re,E,null),e(E,Qs),e(E,so),e(so,Xs),e(E,Js),e(E,He),e(He,Ks),e(He,ut),e(ut,Ys),e(He,Zs),e(E,er),e(E,Ue),e(Ue,tr),e(Ue,Ve),e(Ve,or),e(Ue,nr),e(E,sr),e(E,P),g(Qe,P,null),e(P,rr),e(P,oe),e(oe,ar),e(oe,_t),e(_t,ir),e(oe,dr),e(oe,ro),e(ro,cr),e(oe,lr),e(P,hr),g(fe,P,null),e(P,mr),e(P,ao),e(ao,fr),e(P,pr),g(Xe,P,null),m(t,Ao,h),m(t,ne,h),e(ne,pe),e(pe,io),g(Je,io,null),e(ne,ur),e(ne,co),e(co,_r),m(t,Io,h),m(t,q,h),g(Ke,q,null),e(q,gr),e(q,lo),e(lo,vr),e(q,kr),e(q,Ye),e(Ye,Tr),e(Ye,gt),e(gt,br),e(Ye,yr),e(q,wr),e(q,Ze),e(Ze,Mr),e(Ze,et),e(et,Fr),e(Ze,Sr),e(q,$r),e(q,y),g(tt,y,null),e(y,zr),e(y,se),e(se,Er),e(se,vt),e(vt,qr),e(se,xr),e(se,ho),e(ho,Cr),e(se,Pr),e(y,Ar),g(ue,y,null),e(y,Ir),e(y,mo),e(mo,Dr),e(y,Nr),e(y,fo),e(fo,Lr),e(y,Or),e(y,po),e(po,Gr),e(y,jr),e(y,uo),e(uo,Br),e(y,Wr),e(y,_e),e(_e,ge),e(ge,_o),g(ot,_o,null),e(_e,Rr),e(_e,go),e(go,Hr),Do=!0},p(t,[h]){const nt={};h&2&&(nt.$$scope={dirty:h,ctx:t}),fe.$set(nt);const vo={};h&2&&(vo.$$scope={dirty:h,ctx:t}),ue.$set(vo)},i(t){Do||(v(M.$$.fragment,t),v(we.$$.fragment,t),v($e.$$.fragment,t),v(ze.$$.fragment,t),v(Ee.$$.fragment,t),v(xe.$$.fragment,t),v(Ce.$$.fragment,t),v(Pe.$$.fragment,t),v(Ae.$$.fragment,t),v(Ne.$$.fragment,t),v(Oe.$$.fragment,t),v(je.$$.fragment,t),v(Be.$$.fragment,t),v(We.$$.fragment,t),v(Re.$$.fragment,t),v(Qe.$$.fragment,t),v(fe.$$.fragment,t),v(Xe.$$.fragment,t),v(Je.$$.fragment,t),v(Ke.$$.fragment,t),v(tt.$$.fragment,t),v(ue.$$.fragment,t),v(ot.$$.fragment,t),Do=!0)},o(t){k(M.$$.fragment,t),k(we.$$.fragment,t),k($e.$$.fragment,t),k(ze.$$.fragment,t),k(Ee.$$.fragment,t),k(xe.$$.fragment,t),k(Ce.$$.fragment,t),k(Pe.$$.fragment,t),k(Ae.$$.fragment,t),k(Ne.$$.fragment,t),k(Oe.$$.fragment,t),k(je.$$.fragment,t),k(Be.$$.fragment,t),k(We.$$.fragment,t),k(Re.$$.fragment,t),k(Qe.$$.fragment,t),k(fe.$$.fragment,t),k(Xe.$$.fragment,t),k(Je.$$.fragment,t),k(Ke.$$.fragment,t),k(tt.$$.fragment,t),k(ue.$$.fragment,t),k(ot.$$.fragment,t),Do=!1},d(t){o(f),t&&o(x),t&&o(p),T(M),t&&o(To),t&&o(U),t&&o(bo),t&&o(V),T(we),t&&o(yo),t&&o(ae),t&&o(wo),t&&o(st),t&&o(Mo),t&&o(rt),t&&o(Fo),t&&o(O),t&&o(So),t&&o(Q),T($e),t&&o($o),t&&o(at),t&&o(zo),t&&o(J),T(ze),t&&o(Eo),t&&o(S),T(Ee),T(xe),T(Ce),t&&o(qo),t&&o(Z),T(Pe),t&&o(xo),t&&o(b),T(Ae),T(Ne),T(Oe),T(je),T(Be),t&&o(Co),t&&o(te),T(We),t&&o(Po),t&&o(E),T(Re),T(Qe),T(fe),T(Xe),t&&o(Ao),t&&o(ne),T(Je),t&&o(Io),t&&o(q),T(Ke),T(tt),T(ue),T(ot)}}}const Ti={local:"1-machine-learning-is-great-isnt-it",title:"1: Machine learning is great, isn't it? ..."};function bi(be,f,x){let{fw:p}=f;return be.$$set=w=>{"fw"in w&&x(0,p=w.fw)},[p]}class zi extends fi{constructor(f){super();pi(this,f,bi,ki,ui,{fw:0})}}export{zi as default,Ti as metadata};
