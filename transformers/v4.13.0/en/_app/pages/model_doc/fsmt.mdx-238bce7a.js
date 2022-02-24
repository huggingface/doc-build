import{S as Or,i as jr,s as Gr,e as n,k as c,w as u,t as r,M as Br,c as s,d as o,m as l,a,x as _,h as i,b as d,F as e,g as m,y as g,q as k,o as T,B as v}from"../../chunks/vendor-68651a14.js";import{T as Lr}from"../../chunks/Tip-3fbaa85f.js";import{D as W}from"../../chunks/Docstring-d699e906.js";import{C as $a}from"../../chunks/CodeBlock-b98730f5.js";import{I as et}from"../../chunks/IconCopyLink-8ff17449.js";import"../../chunks/CopyButton-e88c769b.js";function Rr(ke){let f,z,p,y,C;return{c(){f=n("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),p=n("code"),y=r("Module"),C=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(M){f=s(M,"P",{});var w=a(f);z=i(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),p=s(w,"CODE",{});var I=a(p);y=i(I,"Module"),I.forEach(o),C=i(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(o)},m(M,w){m(M,f,w),e(f,z),e(f,p),e(p,y),e(f,C)},d(M){M&&o(f)}}}function Wr(ke){let f,z,p,y,C;return{c(){f=n("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),p=n("code"),y=r("Module"),C=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(M){f=s(M,"P",{});var w=a(f);z=i(w,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),p=s(w,"CODE",{});var I=a(p);y=i(I,"Module"),I.forEach(o),C=i(w,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),w.forEach(o)},m(M,w){m(M,f,w),e(f,z),e(f,p),e(p,y),e(f,C)},d(M){M&&o(f)}}}function Ur(ke){let f,z,p,y,C,M,w,I,Ho,ho,U,wt,Vo,Qo,Te,Xo,Ko,mo,H,se,Ft,ve,Yo,St,Jo,fo,ae,Zo,be,en,tn,po,tt,on,uo,ot,$t,nn,_o,N,sn,ye,an,rn,Me,dn,cn,go,V,re,zt,we,ln,qt,hn,ko,nt,Q,mn,st,fn,pn,at,un,_n,To,X,ie,Et,Fe,gn,xt,kn,vo,P,Se,Tn,$e,vn,rt,bn,yn,Mn,K,wn,it,Fn,Sn,dt,$n,zn,qn,de,ze,En,Y,xn,Ct,Cn,Pn,Pt,In,An,bo,J,ce,It,qe,Dn,At,Nn,yo,b,Ee,Ln,Dt,On,jn,A,Nt,Gn,Bn,Lt,Rn,Wn,D,Un,Ot,Hn,Vn,jt,Qn,Xn,Gt,Kn,Yn,Jn,xe,Zn,Bt,es,ts,os,Ce,ns,ct,ss,as,rs,L,Pe,is,Rt,ds,cs,Ie,lt,ls,Wt,hs,ms,ht,fs,Ut,ps,us,le,Ae,_s,De,gs,Ht,ks,Ts,vs,q,Ne,bs,Vt,ys,Ms,Le,ws,Z,Fs,Qt,Ss,$s,Xt,zs,qs,Es,Kt,xs,Cs,Yt,Mo,ee,he,Jt,Oe,Ps,Zt,Is,wo,S,je,As,eo,Ds,Ns,Ge,Ls,mt,Os,js,Gs,Be,Bs,Re,Rs,Ws,Us,E,We,Hs,te,Vs,ft,Qs,Xs,to,Ks,Ys,Js,me,Zs,oo,ea,ta,Ue,Fo,oe,fe,no,He,oa,so,na,So,$,Ve,sa,ao,aa,ra,Qe,ia,pt,da,ca,la,Xe,ha,Ke,ma,fa,pa,x,Ye,ua,ne,_a,ut,ga,ka,ro,Ta,va,ba,pe,ya,io,Ma,wa,Je,$o;return M=new et({}),ve=new et({}),we=new et({}),Fe=new et({}),Se=new W({props:{name:"class transformers.FSMTConfig",anchor:"transformers.FSMTConfig",parameters:[{name:"langs",val:" = ['en', 'de']"},{name:"src_vocab_size",val:" = 42024"},{name:"tgt_vocab_size",val:" = 42024"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 1024"},{name:"max_length",val:" = 200"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_layers",val:" = 12"},{name:"encoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_layers",val:" = 12"},{name:"decoder_attention_heads",val:" = 16"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"scale_embedding",val:" = True"},{name:"tie_word_embeddings",val:" = False"},{name:"num_beams",val:" = 5"},{name:"length_penalty",val:" = 1.0"},{name:"early_stopping",val:" = False"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**common_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/fsmt/configuration_fsmt.py#L41",parametersDescription:[{anchor:"transformers.FSMTConfig.langs",description:`<strong>langs</strong> (<code>List[str]</code>) &#x2014;
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
encoder<em>layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
Google &#x201C;layerdrop arxiv&#x201D;, as its not explainable in one line.
decoder<em>layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
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
<code>eos_token_id</code>.</p>
<p>Examples &#x2014;:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import FSMTConfig, FSMTModel</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>config = FSMTConfig.from_pretrained(&#x2018;facebook/wmt19-en-ru&#x2019;)
model = FSMTModel(config)</p>
</blockquote>
</blockquote>
</blockquote>`,name:"forced_eos_token_id"}]}}),ze=new W({props:{name:"to_dict",anchor:"transformers.FSMTConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/fsmt/configuration_fsmt.py#L209",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),qe=new et({}),Ee=new W({props:{name:"class transformers.FSMTTokenizer",anchor:"transformers.FSMTTokenizer",parameters:[{name:"langs",val:" = None"},{name:"src_vocab_file",val:" = None"},{name:"tgt_vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/fsmt/tokenization_fsmt.py#L137",parametersDescription:[{anchor:"transformers.FSMTTokenizer.langs",description:`<strong>langs</strong> (<code>List[str]</code>) &#x2014;
A list of two languages to translate from and to, for instance <code>[&quot;en&quot;, &quot;ru&quot;]</code>.`,name:"langs"},{anchor:"transformers.FSMTTokenizer.src_vocab_file",description:`<strong>src_vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary for the source language.`,name:"src_vocab_file"},{anchor:"transformers.FSMTTokenizer.tgt_vocab_file",description:`<strong>tgt_vocab_file</strong> (<code>st</code>) &#x2014;
File containing the vocabulary for the target language.`,name:"tgt_vocab_file"},{anchor:"transformers.FSMTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
File containing the merges.`,name:"merges_file"},{anchor:"transformers.FSMTTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.FSMTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.FSMTTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.`,name:"bos_token"}]}}),Pe=new W({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FSMTTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/fsmt/tokenization_fsmt.py#L394",parametersDescription:[{anchor:"transformers.FSMTTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FSMTTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ae=new W({props:{name:"get_special_tokens_mask",anchor:"transformers.FSMTTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/fsmt/tokenization_fsmt.py#L420",parametersDescription:[{anchor:"transformers.FSMTTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FSMTTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FSMTTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ne=new W({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FSMTTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/fsmt/tokenization_fsmt.py#L448",parametersDescription:[{anchor:"transformers.FSMTTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FSMTTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given
sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Le=new $a({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Oe=new et({}),je=new W({props:{name:"class transformers.FSMTModel",anchor:"transformers.FSMTModel",parameters:[{name:"config",val:": FSMTConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/fsmt/modeling_fsmt.py#L995",parametersDescription:[{anchor:"transformers.FSMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/fsmt#transformers.FSMTConfig">FSMTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),We=new W({props:{name:"forward",anchor:"transformers.FSMTModel.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple] = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/fsmt/modeling_fsmt.py#L1009",parametersDescription:[{anchor:"transformers.FSMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>IIndices can be obtained using <code>FSTMTokenizer</code>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FSMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FSMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/fsmt#transformers.FSMTTokenizer">FSMTTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/fsmt#transformers.FSMTConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new Lr({props:{$$slots:{default:[Rr]},$$scope:{ctx:ke}}}),Ue=new $a({props:{code:`from transformers import FSMTTokenizer, FSMTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),He=new et({}),Ve=new W({props:{name:"class transformers.FSMTForConditionalGeneration",anchor:"transformers.FSMTForConditionalGeneration",parameters:[{name:"config",val:": FSMTConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/fsmt/modeling_fsmt.py#L1119",parametersDescription:[{anchor:"transformers.FSMTForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/fsmt#transformers.FSMTConfig">FSMTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ye=new W({props:{name:"forward",anchor:"transformers.FSMTForConditionalGeneration.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/fsmt/modeling_fsmt.py#L1135",parametersDescription:[{anchor:"transformers.FSMTForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>IIndices can be obtained using <code>FSTMTokenizer</code>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FSMTForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FSMTForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/fsmt#transformers.FSMTTokenizer">FSMTTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FSMTForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/fsmt#transformers.FSMTConfig"
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new Lr({props:{$$slots:{default:[Wr]},$$scope:{ctx:ke}}}),Je=new $a({props:{code:`from transformers import FSMTTokenizer, FSMTForConditionalGeneration

mname = "facebook/wmt19-ru-en"
model = FSMTForConditionalGeneration.from_pretrained(mname)
tokenizer = FSMTTokenizer.from_pretrained(mname)

src_text = "\u041C\u0430\u0448\u0438\u043D\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 - \u044D\u0442\u043E \u0437\u0434\u043E\u0440\u043E\u0432\u043E, \u043D\u0435 \u0442\u0430\u043A \u043B\u0438?"
input_ids = tokenizer.encode(src_text, return_tensors='pt')
outputs = model.generate(input_ids, num_beams=5, num_return_sequences=3)
for i, output in enumerate(outputs):
decoded = tokenizer.decode(output, skip_special_tokens=True)
print(f"{i}: {decoded})
# 1: Machine learning is great, isn't it? ...,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FSMTTokenizer, FSMTForConditionalGeneration

mname = <span class="hljs-string">&quot;facebook/wmt19-ru-en&quot;</span>
model = FSMTForConditionalGeneration.from_pretrained(mname)
tokenizer = FSMTTokenizer.from_pretrained(mname)

src_text = <span class="hljs-string">&quot;\u041C\u0430\u0448\u0438\u043D\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 - \u044D\u0442\u043E \u0437\u0434\u043E\u0440\u043E\u0432\u043E, \u043D\u0435 \u0442\u0430\u043A \u043B\u0438?&quot;</span>
input_ids = tokenizer.encode(src_text, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
outputs = model.generate(input_ids, num_beams=<span class="hljs-number">5</span>, num_return_sequences=<span class="hljs-number">3</span>)
<span class="hljs-keyword">for</span> i, output <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(outputs):
decoded = tokenizer.decode(output, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{i}</span>: <span class="hljs-subst">{decoded}</span>)
# 1: Machine learning is great, isn&#x27;t it? ...</span>`}}),{c(){f=n("meta"),z=c(),p=n("h1"),y=n("a"),C=n("span"),u(M.$$.fragment),w=c(),I=n("span"),Ho=r("FSMT"),ho=c(),U=n("p"),wt=n("strong"),Vo=r("DISCLAIMER:"),Qo=r(" If you see something strange, file a "),Te=n("a"),Xo=r("Github Issue"),Ko=r(` and assign
@stas00.`),mo=c(),H=n("h2"),se=n("a"),Ft=n("span"),u(ve.$$.fragment),Yo=c(),St=n("span"),Jo=r("Overview"),fo=c(),ae=n("p"),Zo=r("FSMT (FairSeq MachineTranslation) models were introduced in "),be=n("a"),en=r("Facebook FAIR\u2019s WMT19 News Translation Task Submission"),tn=r(" by Nathan Ng, Kyra Yee, Alexei Baevski, Myle Ott, Michael Auli, Sergey Edunov."),po=c(),tt=n("p"),on=r("The abstract of the paper is the following:"),uo=c(),ot=n("p"),$t=n("em"),nn=r(`This paper describes Facebook FAIR\u2019s submission to the WMT19 shared news translation task. We participate in two
language pairs and four language directions, English <-> German and English <-> Russian. Following our submission from
last year, our baseline systems are large BPE-based transformer models trained with the Fairseq sequence modeling
toolkit which rely on sampled back-translations. This year we experiment with different bitext data filtering schemes,
as well as with adding filtered back-translated data. We also ensemble and fine-tune our models on domain-specific
data, then decode using noisy channel model reranking. Our submissions are ranked first in all four directions of the
human evaluation campaign. On En->De, our system significantly outperforms other systems as well as human translations.
This system improves upon our WMT\u201918 submission by 4.5 BLEU points.`),_o=c(),N=n("p"),sn=r("This model was contributed by "),ye=n("a"),an=r("stas"),rn=r(`. The original code can be found here
<`),Me=n("a"),dn=r("https://github.com/pytorch/fairseq/tree/master/examples/wmt19>"),cn=r("__."),go=c(),V=n("h2"),re=n("a"),zt=n("span"),u(we.$$.fragment),ln=c(),qt=n("span"),hn=r("Implementation Notes"),ko=c(),nt=n("ul"),Q=n("li"),mn=r(`FSMT uses source and target vocabulary pairs that aren\u2019t combined into one. It doesn\u2019t share embeddings tokens
either. Its tokenizer is very similar to `),st=n("a"),fn=r("XLMTokenizer"),pn=r(` and the main model is derived from
`),at=n("a"),un=r("BartModel"),_n=r("."),To=c(),X=n("h2"),ie=n("a"),Et=n("span"),u(Fe.$$.fragment),gn=c(),xt=n("span"),kn=r("FSMTConfig"),vo=c(),P=n("div"),u(Se.$$.fragment),Tn=c(),$e=n("p"),vn=r("This is the configuration class to store the configuration of a "),rt=n("a"),bn=r("FSMTModel"),yn=r(`. It is used to
instantiate a FSMT model according to the specified arguments, defining the model architecture.`),Mn=c(),K=n("p"),wn=r("Configuration objects inherit from "),it=n("a"),Fn=r("PretrainedConfig"),Sn=r(` and can be used to control the model
outputs. Read the documentation from `),dt=n("a"),$n=r("PretrainedConfig"),zn=r(" for more information."),qn=c(),de=n("div"),u(ze.$$.fragment),En=c(),Y=n("p"),xn=r("Serializes this instance to a Python dictionary. Override the default "),Ct=n("em"),Cn=r("to_dict()"),Pn=r(" from "),Pt=n("em"),In=r("PretrainedConfig"),An=r("."),bo=c(),J=n("h2"),ce=n("a"),It=n("span"),u(qe.$$.fragment),Dn=c(),At=n("span"),Nn=r("FSMTTokenizer"),yo=c(),b=n("div"),u(Ee.$$.fragment),Ln=c(),Dt=n("p"),On=r("Construct an FAIRSEQ Transformer tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),jn=c(),A=n("ul"),Nt=n("li"),Gn=r("Moses preprocessing and tokenization."),Bn=c(),Lt=n("li"),Rn=r("Normalizing all inputs text."),Wn=c(),D=n("li"),Un=r("The arguments "),Ot=n("code"),Hn=r("special_tokens"),Vn=r(" and the function "),jt=n("code"),Qn=r("set_special_tokens"),Xn=r(`, can be used to add additional symbols
(like \u201D`),Gt=n("strong"),Kn=r("classify"),Yn=r("\u201D) to a vocabulary."),Jn=c(),xe=n("li"),Zn=r("The argument "),Bt=n("code"),es=r("langs"),ts=r(" defines a pair of languages."),os=c(),Ce=n("p"),ns=r("This tokenizer inherits from "),ct=n("a"),ss=r("PreTrainedTokenizer"),as=r(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),rs=c(),L=n("div"),u(Pe.$$.fragment),is=c(),Rt=n("p"),ds=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A FAIRSEQ Transformer sequence has the following format:`),cs=c(),Ie=n("ul"),lt=n("li"),ls=r("single sequence: "),Wt=n("code"),hs=r("<s> X </s>"),ms=c(),ht=n("li"),fs=r("pair of sequences: "),Ut=n("code"),ps=r("<s> A </s> B </s>"),us=c(),le=n("div"),u(Ae.$$.fragment),_s=c(),De=n("p"),gs=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ht=n("code"),ks=r("prepare_for_model"),Ts=r(" method."),vs=c(),q=n("div"),u(Ne.$$.fragment),bs=c(),Vt=n("p"),ys=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A FAIRSEQ
Transformer sequence pair mask has the following format:`),Ms=c(),u(Le.$$.fragment),ws=c(),Z=n("p"),Fs=r("If "),Qt=n("code"),Ss=r("token_ids_1"),$s=r(" is "),Xt=n("code"),zs=r("None"),qs=r(", this method only returns the first portion of the mask (0s)."),Es=c(),Kt=n("p"),xs=r(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An
FAIRSEQ_TRANSFORMER sequence pair mask has the following format:`),Cs=c(),Yt=n("div"),Mo=c(),ee=n("h2"),he=n("a"),Jt=n("span"),u(Oe.$$.fragment),Ps=c(),Zt=n("span"),Is=r("FSMTModel"),wo=c(),S=n("div"),u(je.$$.fragment),As=c(),eo=n("p"),Ds=r("The bare FSMT Model outputting raw hidden-states without any specific head on top."),Ns=c(),Ge=n("p"),Ls=r("This model inherits from "),mt=n("a"),Os=r("PreTrainedModel"),js=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Gs=c(),Be=n("p"),Bs=r("This model is also a PyTorch "),Re=n("a"),Rs=r("torch.nn.Module"),Ws=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Us=c(),E=n("div"),u(We.$$.fragment),Hs=c(),te=n("p"),Vs=r("The "),ft=n("a"),Qs=r("FSMTModel"),Xs=r(" forward method, overrides the "),to=n("code"),Ks=r("__call__"),Ys=r(" special method."),Js=c(),u(me.$$.fragment),Zs=c(),oo=n("p"),ea=r("Example:"),ta=c(),u(Ue.$$.fragment),Fo=c(),oe=n("h2"),fe=n("a"),no=n("span"),u(He.$$.fragment),oa=c(),so=n("span"),na=r("FSMTForConditionalGeneration"),So=c(),$=n("div"),u(Ve.$$.fragment),sa=c(),ao=n("p"),aa=r("The FSMT Model with a language modeling head. Can be used for summarization."),ra=c(),Qe=n("p"),ia=r("This model inherits from "),pt=n("a"),da=r("PreTrainedModel"),ca=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),la=c(),Xe=n("p"),ha=r("This model is also a PyTorch "),Ke=n("a"),ma=r("torch.nn.Module"),fa=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),pa=c(),x=n("div"),u(Ye.$$.fragment),ua=c(),ne=n("p"),_a=r("The "),ut=n("a"),ga=r("FSMTForConditionalGeneration"),ka=r(" forward method, overrides the "),ro=n("code"),Ta=r("__call__"),va=r(" special method."),ba=c(),u(pe.$$.fragment),ya=c(),io=n("p"),Ma=r("Translation example:"),wa=c(),u(Je.$$.fragment),this.h()},l(t){const h=Br('[data-svelte="svelte-1phssyn"]',document.head);f=s(h,"META",{name:!0,content:!0}),h.forEach(o),z=l(t),p=s(t,"H1",{class:!0});var Ze=a(p);y=s(Ze,"A",{id:!0,class:!0,href:!0});var co=a(y);C=s(co,"SPAN",{});var za=a(C);_(M.$$.fragment,za),za.forEach(o),co.forEach(o),w=l(Ze),I=s(Ze,"SPAN",{});var qa=a(I);Ho=i(qa,"FSMT"),qa.forEach(o),Ze.forEach(o),ho=l(t),U=s(t,"P",{});var lo=a(U);wt=s(lo,"STRONG",{});var Ea=a(wt);Vo=i(Ea,"DISCLAIMER:"),Ea.forEach(o),Qo=i(lo," If you see something strange, file a "),Te=s(lo,"A",{href:!0,rel:!0});var xa=a(Te);Xo=i(xa,"Github Issue"),xa.forEach(o),Ko=i(lo,` and assign
@stas00.`),lo.forEach(o),mo=l(t),H=s(t,"H2",{class:!0});var zo=a(H);se=s(zo,"A",{id:!0,class:!0,href:!0});var Ca=a(se);Ft=s(Ca,"SPAN",{});var Pa=a(Ft);_(ve.$$.fragment,Pa),Pa.forEach(o),Ca.forEach(o),Yo=l(zo),St=s(zo,"SPAN",{});var Ia=a(St);Jo=i(Ia,"Overview"),Ia.forEach(o),zo.forEach(o),fo=l(t),ae=s(t,"P",{});var qo=a(ae);Zo=i(qo,"FSMT (FairSeq MachineTranslation) models were introduced in "),be=s(qo,"A",{href:!0,rel:!0});var Aa=a(be);en=i(Aa,"Facebook FAIR\u2019s WMT19 News Translation Task Submission"),Aa.forEach(o),tn=i(qo," by Nathan Ng, Kyra Yee, Alexei Baevski, Myle Ott, Michael Auli, Sergey Edunov."),qo.forEach(o),po=l(t),tt=s(t,"P",{});var Da=a(tt);on=i(Da,"The abstract of the paper is the following:"),Da.forEach(o),uo=l(t),ot=s(t,"P",{});var Na=a(ot);$t=s(Na,"EM",{});var La=a($t);nn=i(La,`This paper describes Facebook FAIR\u2019s submission to the WMT19 shared news translation task. We participate in two
language pairs and four language directions, English <-> German and English <-> Russian. Following our submission from
last year, our baseline systems are large BPE-based transformer models trained with the Fairseq sequence modeling
toolkit which rely on sampled back-translations. This year we experiment with different bitext data filtering schemes,
as well as with adding filtered back-translated data. We also ensemble and fine-tune our models on domain-specific
data, then decode using noisy channel model reranking. Our submissions are ranked first in all four directions of the
human evaluation campaign. On En->De, our system significantly outperforms other systems as well as human translations.
This system improves upon our WMT\u201918 submission by 4.5 BLEU points.`),La.forEach(o),Na.forEach(o),_o=l(t),N=s(t,"P",{});var _t=a(N);sn=i(_t,"This model was contributed by "),ye=s(_t,"A",{href:!0,rel:!0});var Oa=a(ye);an=i(Oa,"stas"),Oa.forEach(o),rn=i(_t,`. The original code can be found here
<`),Me=s(_t,"A",{href:!0,rel:!0});var ja=a(Me);dn=i(ja,"https://github.com/pytorch/fairseq/tree/master/examples/wmt19>"),ja.forEach(o),cn=i(_t,"__."),_t.forEach(o),go=l(t),V=s(t,"H2",{class:!0});var Eo=a(V);re=s(Eo,"A",{id:!0,class:!0,href:!0});var Ga=a(re);zt=s(Ga,"SPAN",{});var Ba=a(zt);_(we.$$.fragment,Ba),Ba.forEach(o),Ga.forEach(o),ln=l(Eo),qt=s(Eo,"SPAN",{});var Ra=a(qt);hn=i(Ra,"Implementation Notes"),Ra.forEach(o),Eo.forEach(o),ko=l(t),nt=s(t,"UL",{});var Wa=a(nt);Q=s(Wa,"LI",{});var gt=a(Q);mn=i(gt,`FSMT uses source and target vocabulary pairs that aren\u2019t combined into one. It doesn\u2019t share embeddings tokens
either. Its tokenizer is very similar to `),st=s(gt,"A",{href:!0});var Ua=a(st);fn=i(Ua,"XLMTokenizer"),Ua.forEach(o),pn=i(gt,` and the main model is derived from
`),at=s(gt,"A",{href:!0});var Ha=a(at);un=i(Ha,"BartModel"),Ha.forEach(o),_n=i(gt,"."),gt.forEach(o),Wa.forEach(o),To=l(t),X=s(t,"H2",{class:!0});var xo=a(X);ie=s(xo,"A",{id:!0,class:!0,href:!0});var Va=a(ie);Et=s(Va,"SPAN",{});var Qa=a(Et);_(Fe.$$.fragment,Qa),Qa.forEach(o),Va.forEach(o),gn=l(xo),xt=s(xo,"SPAN",{});var Xa=a(xt);kn=i(Xa,"FSMTConfig"),Xa.forEach(o),xo.forEach(o),vo=l(t),P=s(t,"DIV",{class:!0});var ue=a(P);_(Se.$$.fragment,ue),Tn=l(ue),$e=s(ue,"P",{});var Co=a($e);vn=i(Co,"This is the configuration class to store the configuration of a "),rt=s(Co,"A",{href:!0});var Ka=a(rt);bn=i(Ka,"FSMTModel"),Ka.forEach(o),yn=i(Co,`. It is used to
instantiate a FSMT model according to the specified arguments, defining the model architecture.`),Co.forEach(o),Mn=l(ue),K=s(ue,"P",{});var kt=a(K);wn=i(kt,"Configuration objects inherit from "),it=s(kt,"A",{href:!0});var Ya=a(it);Fn=i(Ya,"PretrainedConfig"),Ya.forEach(o),Sn=i(kt,` and can be used to control the model
outputs. Read the documentation from `),dt=s(kt,"A",{href:!0});var Ja=a(dt);$n=i(Ja,"PretrainedConfig"),Ja.forEach(o),zn=i(kt," for more information."),kt.forEach(o),qn=l(ue),de=s(ue,"DIV",{class:!0});var Po=a(de);_(ze.$$.fragment,Po),En=l(Po),Y=s(Po,"P",{});var Tt=a(Y);xn=i(Tt,"Serializes this instance to a Python dictionary. Override the default "),Ct=s(Tt,"EM",{});var Za=a(Ct);Cn=i(Za,"to_dict()"),Za.forEach(o),Pn=i(Tt," from "),Pt=s(Tt,"EM",{});var er=a(Pt);In=i(er,"PretrainedConfig"),er.forEach(o),An=i(Tt,"."),Tt.forEach(o),Po.forEach(o),ue.forEach(o),bo=l(t),J=s(t,"H2",{class:!0});var Io=a(J);ce=s(Io,"A",{id:!0,class:!0,href:!0});var tr=a(ce);It=s(tr,"SPAN",{});var or=a(It);_(qe.$$.fragment,or),or.forEach(o),tr.forEach(o),Dn=l(Io),At=s(Io,"SPAN",{});var nr=a(At);Nn=i(nr,"FSMTTokenizer"),nr.forEach(o),Io.forEach(o),yo=l(t),b=s(t,"DIV",{class:!0});var F=a(b);_(Ee.$$.fragment,F),Ln=l(F),Dt=s(F,"P",{});var sr=a(Dt);On=i(sr,"Construct an FAIRSEQ Transformer tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),sr.forEach(o),jn=l(F),A=s(F,"UL",{});var _e=a(A);Nt=s(_e,"LI",{});var ar=a(Nt);Gn=i(ar,"Moses preprocessing and tokenization."),ar.forEach(o),Bn=l(_e),Lt=s(_e,"LI",{});var rr=a(Lt);Rn=i(rr,"Normalizing all inputs text."),rr.forEach(o),Wn=l(_e),D=s(_e,"LI",{});var ge=a(D);Un=i(ge,"The arguments "),Ot=s(ge,"CODE",{});var ir=a(Ot);Hn=i(ir,"special_tokens"),ir.forEach(o),Vn=i(ge," and the function "),jt=s(ge,"CODE",{});var dr=a(jt);Qn=i(dr,"set_special_tokens"),dr.forEach(o),Xn=i(ge,`, can be used to add additional symbols
(like \u201D`),Gt=s(ge,"STRONG",{});var cr=a(Gt);Kn=i(cr,"classify"),cr.forEach(o),Yn=i(ge,"\u201D) to a vocabulary."),ge.forEach(o),Jn=l(_e),xe=s(_e,"LI",{});var Ao=a(xe);Zn=i(Ao,"The argument "),Bt=s(Ao,"CODE",{});var lr=a(Bt);es=i(lr,"langs"),lr.forEach(o),ts=i(Ao," defines a pair of languages."),Ao.forEach(o),_e.forEach(o),os=l(F),Ce=s(F,"P",{});var Do=a(Ce);ns=i(Do,"This tokenizer inherits from "),ct=s(Do,"A",{href:!0});var hr=a(ct);ss=i(hr,"PreTrainedTokenizer"),hr.forEach(o),as=i(Do,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Do.forEach(o),rs=l(F),L=s(F,"DIV",{class:!0});var vt=a(L);_(Pe.$$.fragment,vt),is=l(vt),Rt=s(vt,"P",{});var mr=a(Rt);ds=i(mr,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A FAIRSEQ Transformer sequence has the following format:`),mr.forEach(o),cs=l(vt),Ie=s(vt,"UL",{});var No=a(Ie);lt=s(No,"LI",{});var Fa=a(lt);ls=i(Fa,"single sequence: "),Wt=s(Fa,"CODE",{});var fr=a(Wt);hs=i(fr,"<s> X </s>"),fr.forEach(o),Fa.forEach(o),ms=l(No),ht=s(No,"LI",{});var Sa=a(ht);fs=i(Sa,"pair of sequences: "),Ut=s(Sa,"CODE",{});var pr=a(Ut);ps=i(pr,"<s> A </s> B </s>"),pr.forEach(o),Sa.forEach(o),No.forEach(o),vt.forEach(o),us=l(F),le=s(F,"DIV",{class:!0});var Lo=a(le);_(Ae.$$.fragment,Lo),_s=l(Lo),De=s(Lo,"P",{});var Oo=a(De);gs=i(Oo,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ht=s(Oo,"CODE",{});var ur=a(Ht);ks=i(ur,"prepare_for_model"),ur.forEach(o),Ts=i(Oo," method."),Oo.forEach(o),Lo.forEach(o),vs=l(F),q=s(F,"DIV",{class:!0});var O=a(q);_(Ne.$$.fragment,O),bs=l(O),Vt=s(O,"P",{});var _r=a(Vt);ys=i(_r,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A FAIRSEQ
Transformer sequence pair mask has the following format:`),_r.forEach(o),Ms=l(O),_(Le.$$.fragment,O),ws=l(O),Z=s(O,"P",{});var bt=a(Z);Fs=i(bt,"If "),Qt=s(bt,"CODE",{});var gr=a(Qt);Ss=i(gr,"token_ids_1"),gr.forEach(o),$s=i(bt," is "),Xt=s(bt,"CODE",{});var kr=a(Xt);zs=i(kr,"None"),kr.forEach(o),qs=i(bt,", this method only returns the first portion of the mask (0s)."),bt.forEach(o),Es=l(O),Kt=s(O,"P",{});var Tr=a(Kt);xs=i(Tr,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An
FAIRSEQ_TRANSFORMER sequence pair mask has the following format:`),Tr.forEach(o),O.forEach(o),Cs=l(F),Yt=s(F,"DIV",{class:!0}),a(Yt).forEach(o),F.forEach(o),Mo=l(t),ee=s(t,"H2",{class:!0});var jo=a(ee);he=s(jo,"A",{id:!0,class:!0,href:!0});var vr=a(he);Jt=s(vr,"SPAN",{});var br=a(Jt);_(Oe.$$.fragment,br),br.forEach(o),vr.forEach(o),Ps=l(jo),Zt=s(jo,"SPAN",{});var yr=a(Zt);Is=i(yr,"FSMTModel"),yr.forEach(o),jo.forEach(o),wo=l(t),S=s(t,"DIV",{class:!0});var j=a(S);_(je.$$.fragment,j),As=l(j),eo=s(j,"P",{});var Mr=a(eo);Ds=i(Mr,"The bare FSMT Model outputting raw hidden-states without any specific head on top."),Mr.forEach(o),Ns=l(j),Ge=s(j,"P",{});var Go=a(Ge);Ls=i(Go,"This model inherits from "),mt=s(Go,"A",{href:!0});var wr=a(mt);Os=i(wr,"PreTrainedModel"),wr.forEach(o),js=i(Go,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Go.forEach(o),Gs=l(j),Be=s(j,"P",{});var Bo=a(Be);Bs=i(Bo,"This model is also a PyTorch "),Re=s(Bo,"A",{href:!0,rel:!0});var Fr=a(Re);Rs=i(Fr,"torch.nn.Module"),Fr.forEach(o),Ws=i(Bo,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Bo.forEach(o),Us=l(j),E=s(j,"DIV",{class:!0});var G=a(E);_(We.$$.fragment,G),Hs=l(G),te=s(G,"P",{});var yt=a(te);Vs=i(yt,"The "),ft=s(yt,"A",{href:!0});var Sr=a(ft);Qs=i(Sr,"FSMTModel"),Sr.forEach(o),Xs=i(yt," forward method, overrides the "),to=s(yt,"CODE",{});var $r=a(to);Ks=i($r,"__call__"),$r.forEach(o),Ys=i(yt," special method."),yt.forEach(o),Js=l(G),_(me.$$.fragment,G),Zs=l(G),oo=s(G,"P",{});var zr=a(oo);ea=i(zr,"Example:"),zr.forEach(o),ta=l(G),_(Ue.$$.fragment,G),G.forEach(o),j.forEach(o),Fo=l(t),oe=s(t,"H2",{class:!0});var Ro=a(oe);fe=s(Ro,"A",{id:!0,class:!0,href:!0});var qr=a(fe);no=s(qr,"SPAN",{});var Er=a(no);_(He.$$.fragment,Er),Er.forEach(o),qr.forEach(o),oa=l(Ro),so=s(Ro,"SPAN",{});var xr=a(so);na=i(xr,"FSMTForConditionalGeneration"),xr.forEach(o),Ro.forEach(o),So=l(t),$=s(t,"DIV",{class:!0});var B=a($);_(Ve.$$.fragment,B),sa=l(B),ao=s(B,"P",{});var Cr=a(ao);aa=i(Cr,"The FSMT Model with a language modeling head. Can be used for summarization."),Cr.forEach(o),ra=l(B),Qe=s(B,"P",{});var Wo=a(Qe);ia=i(Wo,"This model inherits from "),pt=s(Wo,"A",{href:!0});var Pr=a(pt);da=i(Pr,"PreTrainedModel"),Pr.forEach(o),ca=i(Wo,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Wo.forEach(o),la=l(B),Xe=s(B,"P",{});var Uo=a(Xe);ha=i(Uo,"This model is also a PyTorch "),Ke=s(Uo,"A",{href:!0,rel:!0});var Ir=a(Ke);ma=i(Ir,"torch.nn.Module"),Ir.forEach(o),fa=i(Uo,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Uo.forEach(o),pa=l(B),x=s(B,"DIV",{class:!0});var R=a(x);_(Ye.$$.fragment,R),ua=l(R),ne=s(R,"P",{});var Mt=a(ne);_a=i(Mt,"The "),ut=s(Mt,"A",{href:!0});var Ar=a(ut);ga=i(Ar,"FSMTForConditionalGeneration"),Ar.forEach(o),ka=i(Mt," forward method, overrides the "),ro=s(Mt,"CODE",{});var Dr=a(ro);Ta=i(Dr,"__call__"),Dr.forEach(o),va=i(Mt," special method."),Mt.forEach(o),ba=l(R),_(pe.$$.fragment,R),ya=l(R),io=s(R,"P",{});var Nr=a(io);Ma=i(Nr,"Translation example:"),Nr.forEach(o),wa=l(R),_(Je.$$.fragment,R),R.forEach(o),B.forEach(o),this.h()},h(){d(f,"name","hf:doc:metadata"),d(f,"content",JSON.stringify(Hr)),d(y,"id","fsmt"),d(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(y,"href","#fsmt"),d(p,"class","relative group"),d(Te,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),d(Te,"rel","nofollow"),d(se,"id","overview"),d(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(se,"href","#overview"),d(H,"class","relative group"),d(be,"href","https://arxiv.org/abs/1907.06616"),d(be,"rel","nofollow"),d(ye,"href","https://huggingface.co/stas"),d(ye,"rel","nofollow"),d(Me,"href","https://github.com/pytorch/fairseq/tree/master/examples/wmt19%3E"),d(Me,"rel","nofollow"),d(re,"id","implementation-notes"),d(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(re,"href","#implementation-notes"),d(V,"class","relative group"),d(st,"href","/docs/transformers/master/en/model_doc/xlm#transformers.XLMTokenizer"),d(at,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartModel"),d(ie,"id","transformers.FSMTConfig"),d(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ie,"href","#transformers.FSMTConfig"),d(X,"class","relative group"),d(rt,"href","/docs/transformers/master/en/model_doc/fsmt#transformers.FSMTModel"),d(it,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),d(dt,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),d(de,"class","docstring"),d(P,"class","docstring"),d(ce,"id","transformers.FSMTTokenizer"),d(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ce,"href","#transformers.FSMTTokenizer"),d(J,"class","relative group"),d(ct,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(L,"class","docstring"),d(le,"class","docstring"),d(q,"class","docstring"),d(Yt,"class","docstring"),d(b,"class","docstring"),d(he,"id","transformers.FSMTModel"),d(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(he,"href","#transformers.FSMTModel"),d(ee,"class","relative group"),d(mt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(Re,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Re,"rel","nofollow"),d(ft,"href","/docs/transformers/master/en/model_doc/fsmt#transformers.FSMTModel"),d(E,"class","docstring"),d(S,"class","docstring"),d(fe,"id","transformers.FSMTForConditionalGeneration"),d(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(fe,"href","#transformers.FSMTForConditionalGeneration"),d(oe,"class","relative group"),d(pt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(Ke,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ke,"rel","nofollow"),d(ut,"href","/docs/transformers/master/en/model_doc/fsmt#transformers.FSMTForConditionalGeneration"),d(x,"class","docstring"),d($,"class","docstring")},m(t,h){e(document.head,f),m(t,z,h),m(t,p,h),e(p,y),e(y,C),g(M,C,null),e(p,w),e(p,I),e(I,Ho),m(t,ho,h),m(t,U,h),e(U,wt),e(wt,Vo),e(U,Qo),e(U,Te),e(Te,Xo),e(U,Ko),m(t,mo,h),m(t,H,h),e(H,se),e(se,Ft),g(ve,Ft,null),e(H,Yo),e(H,St),e(St,Jo),m(t,fo,h),m(t,ae,h),e(ae,Zo),e(ae,be),e(be,en),e(ae,tn),m(t,po,h),m(t,tt,h),e(tt,on),m(t,uo,h),m(t,ot,h),e(ot,$t),e($t,nn),m(t,_o,h),m(t,N,h),e(N,sn),e(N,ye),e(ye,an),e(N,rn),e(N,Me),e(Me,dn),e(N,cn),m(t,go,h),m(t,V,h),e(V,re),e(re,zt),g(we,zt,null),e(V,ln),e(V,qt),e(qt,hn),m(t,ko,h),m(t,nt,h),e(nt,Q),e(Q,mn),e(Q,st),e(st,fn),e(Q,pn),e(Q,at),e(at,un),e(Q,_n),m(t,To,h),m(t,X,h),e(X,ie),e(ie,Et),g(Fe,Et,null),e(X,gn),e(X,xt),e(xt,kn),m(t,vo,h),m(t,P,h),g(Se,P,null),e(P,Tn),e(P,$e),e($e,vn),e($e,rt),e(rt,bn),e($e,yn),e(P,Mn),e(P,K),e(K,wn),e(K,it),e(it,Fn),e(K,Sn),e(K,dt),e(dt,$n),e(K,zn),e(P,qn),e(P,de),g(ze,de,null),e(de,En),e(de,Y),e(Y,xn),e(Y,Ct),e(Ct,Cn),e(Y,Pn),e(Y,Pt),e(Pt,In),e(Y,An),m(t,bo,h),m(t,J,h),e(J,ce),e(ce,It),g(qe,It,null),e(J,Dn),e(J,At),e(At,Nn),m(t,yo,h),m(t,b,h),g(Ee,b,null),e(b,Ln),e(b,Dt),e(Dt,On),e(b,jn),e(b,A),e(A,Nt),e(Nt,Gn),e(A,Bn),e(A,Lt),e(Lt,Rn),e(A,Wn),e(A,D),e(D,Un),e(D,Ot),e(Ot,Hn),e(D,Vn),e(D,jt),e(jt,Qn),e(D,Xn),e(D,Gt),e(Gt,Kn),e(D,Yn),e(A,Jn),e(A,xe),e(xe,Zn),e(xe,Bt),e(Bt,es),e(xe,ts),e(b,os),e(b,Ce),e(Ce,ns),e(Ce,ct),e(ct,ss),e(Ce,as),e(b,rs),e(b,L),g(Pe,L,null),e(L,is),e(L,Rt),e(Rt,ds),e(L,cs),e(L,Ie),e(Ie,lt),e(lt,ls),e(lt,Wt),e(Wt,hs),e(Ie,ms),e(Ie,ht),e(ht,fs),e(ht,Ut),e(Ut,ps),e(b,us),e(b,le),g(Ae,le,null),e(le,_s),e(le,De),e(De,gs),e(De,Ht),e(Ht,ks),e(De,Ts),e(b,vs),e(b,q),g(Ne,q,null),e(q,bs),e(q,Vt),e(Vt,ys),e(q,Ms),g(Le,q,null),e(q,ws),e(q,Z),e(Z,Fs),e(Z,Qt),e(Qt,Ss),e(Z,$s),e(Z,Xt),e(Xt,zs),e(Z,qs),e(q,Es),e(q,Kt),e(Kt,xs),e(b,Cs),e(b,Yt),m(t,Mo,h),m(t,ee,h),e(ee,he),e(he,Jt),g(Oe,Jt,null),e(ee,Ps),e(ee,Zt),e(Zt,Is),m(t,wo,h),m(t,S,h),g(je,S,null),e(S,As),e(S,eo),e(eo,Ds),e(S,Ns),e(S,Ge),e(Ge,Ls),e(Ge,mt),e(mt,Os),e(Ge,js),e(S,Gs),e(S,Be),e(Be,Bs),e(Be,Re),e(Re,Rs),e(Be,Ws),e(S,Us),e(S,E),g(We,E,null),e(E,Hs),e(E,te),e(te,Vs),e(te,ft),e(ft,Qs),e(te,Xs),e(te,to),e(to,Ks),e(te,Ys),e(E,Js),g(me,E,null),e(E,Zs),e(E,oo),e(oo,ea),e(E,ta),g(Ue,E,null),m(t,Fo,h),m(t,oe,h),e(oe,fe),e(fe,no),g(He,no,null),e(oe,oa),e(oe,so),e(so,na),m(t,So,h),m(t,$,h),g(Ve,$,null),e($,sa),e($,ao),e(ao,aa),e($,ra),e($,Qe),e(Qe,ia),e(Qe,pt),e(pt,da),e(Qe,ca),e($,la),e($,Xe),e(Xe,ha),e(Xe,Ke),e(Ke,ma),e(Xe,fa),e($,pa),e($,x),g(Ye,x,null),e(x,ua),e(x,ne),e(ne,_a),e(ne,ut),e(ut,ga),e(ne,ka),e(ne,ro),e(ro,Ta),e(ne,va),e(x,ba),g(pe,x,null),e(x,ya),e(x,io),e(io,Ma),e(x,wa),g(Je,x,null),$o=!0},p(t,[h]){const Ze={};h&2&&(Ze.$$scope={dirty:h,ctx:t}),me.$set(Ze);const co={};h&2&&(co.$$scope={dirty:h,ctx:t}),pe.$set(co)},i(t){$o||(k(M.$$.fragment,t),k(ve.$$.fragment,t),k(we.$$.fragment,t),k(Fe.$$.fragment,t),k(Se.$$.fragment,t),k(ze.$$.fragment,t),k(qe.$$.fragment,t),k(Ee.$$.fragment,t),k(Pe.$$.fragment,t),k(Ae.$$.fragment,t),k(Ne.$$.fragment,t),k(Le.$$.fragment,t),k(Oe.$$.fragment,t),k(je.$$.fragment,t),k(We.$$.fragment,t),k(me.$$.fragment,t),k(Ue.$$.fragment,t),k(He.$$.fragment,t),k(Ve.$$.fragment,t),k(Ye.$$.fragment,t),k(pe.$$.fragment,t),k(Je.$$.fragment,t),$o=!0)},o(t){T(M.$$.fragment,t),T(ve.$$.fragment,t),T(we.$$.fragment,t),T(Fe.$$.fragment,t),T(Se.$$.fragment,t),T(ze.$$.fragment,t),T(qe.$$.fragment,t),T(Ee.$$.fragment,t),T(Pe.$$.fragment,t),T(Ae.$$.fragment,t),T(Ne.$$.fragment,t),T(Le.$$.fragment,t),T(Oe.$$.fragment,t),T(je.$$.fragment,t),T(We.$$.fragment,t),T(me.$$.fragment,t),T(Ue.$$.fragment,t),T(He.$$.fragment,t),T(Ve.$$.fragment,t),T(Ye.$$.fragment,t),T(pe.$$.fragment,t),T(Je.$$.fragment,t),$o=!1},d(t){o(f),t&&o(z),t&&o(p),v(M),t&&o(ho),t&&o(U),t&&o(mo),t&&o(H),v(ve),t&&o(fo),t&&o(ae),t&&o(po),t&&o(tt),t&&o(uo),t&&o(ot),t&&o(_o),t&&o(N),t&&o(go),t&&o(V),v(we),t&&o(ko),t&&o(nt),t&&o(To),t&&o(X),v(Fe),t&&o(vo),t&&o(P),v(Se),v(ze),t&&o(bo),t&&o(J),v(qe),t&&o(yo),t&&o(b),v(Ee),v(Pe),v(Ae),v(Ne),v(Le),t&&o(Mo),t&&o(ee),v(Oe),t&&o(wo),t&&o(S),v(je),v(We),v(me),v(Ue),t&&o(Fo),t&&o(oe),v(He),t&&o(So),t&&o($),v(Ve),v(Ye),v(pe),v(Je)}}}const Hr={local:"fsmt",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"transformers.FSMTConfig",title:"FSMTConfig"},{local:"transformers.FSMTTokenizer",title:"FSMTTokenizer"},{local:"transformers.FSMTModel",title:"FSMTModel"},{local:"transformers.FSMTForConditionalGeneration",title:"FSMTForConditionalGeneration"}],title:"FSMT"};function Vr(ke,f,z){let{fw:p}=f;return ke.$$set=y=>{"fw"in y&&z(0,p=y.fw)},[p]}class ei extends Or{constructor(f){super();jr(this,f,Vr,Ur,Gr,{fw:0})}}export{ei as default,Hr as metadata};
