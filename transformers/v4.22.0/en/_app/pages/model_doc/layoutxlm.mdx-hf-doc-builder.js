import{S as As,i as Is,s as Os,e as a,k as d,w as k,t as n,M as Ss,c as s,d as o,m as c,a as i,x as y,h as r,b as l,G as e,g as m,y as L,L as Cs,q as b,o as v,B as w,v as Us}from"../../chunks/vendor-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ds}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Vt}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Ws(ga){let S,Gt,C,j,dt,ne,Mo,ct,Xo,Ht,U,V,ut,re,Eo,mt,qo,Yt,q,$o,ae,Fo,Po,se,No,Do,Jt,Fe,Ao,Zt,Pe,pt,Io,Kt,Ne,Oo,Qt,ie,eo,$,So,De,Co,Uo,Ae,Wo,Ro,to,le,oo,z,Bo,Ie,jo,Vo,Oe,Go,Ho,Se,Yo,Jo,Ce,Zo,Ko,no,G,Qo,Ue,en,tn,ro,F,on,de,nn,rn,ce,an,sn,ao,W,H,ft,ue,ln,ht,dn,so,_,me,cn,E,un,We,mn,pn,Re,fn,hn,pe,_n,gn,kn,fe,yn,Be,Ln,bn,vn,Y,he,wn,_t,xn,Tn,P,_e,zn,gt,Mn,Xn,ge,je,En,kt,qn,$n,Ve,Fn,yt,Pn,Nn,J,ke,Dn,ye,An,Lt,In,On,Sn,Z,Le,Cn,bt,Un,Wn,Ge,be,io,R,K,vt,ve,Rn,wt,Bn,lo,M,we,jn,X,Vn,xt,Gn,Hn,He,Yn,Jn,Ye,Zn,Kn,xe,Qn,er,tr,Te,or,Je,nr,rr,ar,Q,ze,sr,Tt,ir,co,B,ee,zt,Me,lr,Mt,dr,uo,T,Xe,cr,Xt,ur,mr,Ze,Ke,pr,fr,hr,h,_r,Qe,gr,kr,et,yr,Lr,tt,br,vr,Et,wr,xr,qt,Tr,zr,$t,Mr,Xr,Ft,Er,qr,Pt,$r,Fr,Nt,Pr,Nr,Dr,N,Ee,Ar,p,Ir,Dt,Or,Sr,qe,At,Cr,Ur,Wr,ot,Rr,Br,It,jr,Vr,Ot,Gr,Hr,$e,St,Yr,Jr,Zr,Ct,Kr,Qr,nt,ea,ta,Ut,oa,na,Wt,ra,aa,Rt,sa,ia,Bt,la,da,ca,jt,ua,mo;return ne=new Vt({}),re=new Vt({}),ie=new Ds({props:{code:`from transformers import LayoutLMv2Model

model = LayoutLMv2Model.from_pretrained("microsoft/layoutxlm-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Model

model = LayoutLMv2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutxlm-base&quot;</span>)`}}),le=new Ds({props:{code:`from transformers import LayoutXLMTokenizer

tokenizer = LayoutXLMTokenizer.from_pretrained("microsoft/layoutxlm-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutXLMTokenizer

tokenizer = LayoutXLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutxlm-base&quot;</span>)`}}),ue=new Vt({}),me=new O({props:{name:"class transformers.LayoutXLMTokenizer",anchor:"transformers.LayoutXLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LayoutXLMTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LayoutXLMTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LayoutXLMTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutXLMTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutXLMTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutXLMTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutXLMTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutXLMTokenizer.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutXLMTokenizer.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[1000, 1000, 1000, 1000]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutXLMTokenizer.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutXLMTokenizer.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutXLMTokenizer.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"},{anchor:"transformers.LayoutXLMTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.LayoutXLMTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.LayoutXLMTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/layoutxlm/tokenization_layoutxlm.py#L149"}}),he=new O({props:{name:"__call__",anchor:"transformers.LayoutXLMTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutXLMTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutXLMTokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutXLMTokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutXLMTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutXLMTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutXLMTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.0/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutXLMTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutXLMTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutXLMTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.22.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LayoutXLMTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/layoutxlm/tokenization_layoutxlm.py#L444",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>bbox</strong> \u2014 List of bounding boxes to be fed to a model.</p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>labels</strong> \u2014 List of labels to be fed to a model. (when <code>word_labels</code> is specified).</p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>).</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),_e=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LayoutXLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LayoutXLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/layoutxlm/tokenization_layoutxlm.py#L316",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ke=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.LayoutXLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LayoutXLMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LayoutXLMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/layoutxlm/tokenization_layoutxlm.py#L342",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Le=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LayoutXLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LayoutXLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/layoutxlm/tokenization_layoutxlm.py#L370",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),be=new O({props:{name:"save_vocabulary",anchor:"transformers.LayoutXLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/layoutxlm/tokenization_layoutxlm.py#L427"}}),ve=new Vt({}),we=new O({props:{name:"class transformers.LayoutXLMTokenizerFast",anchor:"transformers.LayoutXLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LayoutXLMTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LayoutXLMTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LayoutXLMTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutXLMTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutXLMTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutXLMTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutXLMTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutXLMTokenizerFast.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutXLMTokenizerFast.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[1000, 1000, 1000, 1000]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutXLMTokenizerFast.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutXLMTokenizerFast.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutXLMTokenizerFast.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"},{anchor:"transformers.LayoutXLMTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/layoutxlm/tokenization_layoutxlm_fast.py#L152"}}),ze=new O({props:{name:"__call__",anchor:"transformers.LayoutXLMTokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.0/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.22.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/layoutxlm/tokenization_layoutxlm_fast.py#L269",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>bbox</strong> \u2014 List of bounding boxes to be fed to a model.</p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>labels</strong> \u2014 List of labels to be fed to a model. (when <code>word_labels</code> is specified).</p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>).</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Me=new Vt({}),Xe=new O({props:{name:"class transformers.LayoutXLMProcessor",anchor:"transformers.LayoutXLMProcessor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutXLMProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor">LayoutLMv2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutXLMProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutXLMTokenizer</code> or <code>LayoutXLMTokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer">LayoutXLMTokenizer</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizerFast">LayoutXLMTokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/layoutxlm/processing_layoutxlm.py#L25"}}),Ee=new O({props:{name:"__call__",anchor:"transformers.LayoutXLMProcessor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/layoutxlm/processing_layoutxlm.py#L47"}}),{c(){S=a("meta"),Gt=d(),C=a("h1"),j=a("a"),dt=a("span"),k(ne.$$.fragment),Mo=d(),ct=a("span"),Xo=n("LayoutXLM"),Ht=d(),U=a("h2"),V=a("a"),ut=a("span"),k(re.$$.fragment),Eo=d(),mt=a("span"),qo=n("Overview"),Yt=d(),q=a("p"),$o=n("LayoutXLM was proposed in "),ae=a("a"),Fo=n("LayoutXLM: Multimodal Pre-training for Multilingual Visually-rich Document Understanding"),Po=n(` by Yiheng Xu, Tengchao Lv, Lei Cui, Guoxin Wang, Yijuan Lu, Dinei Florencio, Cha
Zhang, Furu Wei. It\u2019s a multilingual extension of the `),se=a("a"),No=n("LayoutLMv2 model"),Do=n(` trained
on 53 languages.`),Jt=d(),Fe=a("p"),Ao=n("The abstract from the paper is the following:"),Zt=d(),Pe=a("p"),pt=a("em"),Io=n(`Multimodal pre-training with text, layout, and image has achieved SOTA performance for visually-rich document
understanding tasks recently, which demonstrates the great potential for joint learning across different modalities. In
this paper, we present LayoutXLM, a multimodal pre-trained model for multilingual document understanding, which aims to
bridge the language barriers for visually-rich document understanding. To accurately evaluate LayoutXLM, we also
introduce a multilingual form understanding benchmark dataset named XFUN, which includes form understanding samples in
7 languages (Chinese, Japanese, Spanish, French, Italian, German, Portuguese), and key-value pairs are manually labeled
for each language. Experiment results show that the LayoutXLM model has significantly outperformed the existing SOTA
cross-lingual pre-trained models on the XFUN dataset.`),Kt=d(),Ne=a("p"),Oo=n("One can directly plug in the weights of LayoutXLM into a LayoutLMv2 model, like so:"),Qt=d(),k(ie.$$.fragment),eo=d(),$=a("p"),So=n(`Note that LayoutXLM has its own tokenizer, based on
`),De=a("a"),Co=n("LayoutXLMTokenizer"),Uo=n("/"),Ae=a("a"),Wo=n("LayoutXLMTokenizerFast"),Ro=n(`. You can initialize it as
follows:`),to=d(),k(le.$$.fragment),oo=d(),z=a("p"),Bo=n("Similar to LayoutLMv2, you can use "),Ie=a("a"),jo=n("LayoutXLMProcessor"),Vo=n(` (which internally applies
`),Oe=a("a"),Go=n("LayoutLMv2FeatureExtractor"),Ho=n(` and
`),Se=a("a"),Yo=n("LayoutXLMTokenizer"),Jo=n("/"),Ce=a("a"),Zo=n("LayoutXLMTokenizerFast"),Ko=n(` in sequence) to prepare all
data for the model.`),no=d(),G=a("p"),Qo=n("As LayoutXLM\u2019s architecture is equivalent to that of LayoutLMv2, one can refer to "),Ue=a("a"),en=n("LayoutLMv2\u2019s documentation page"),tn=n(" for all tips, code examples and notebooks."),ro=d(),F=a("p"),on=n("This model was contributed by "),de=a("a"),nn=n("nielsr"),rn=n(". The original code can be found "),ce=a("a"),an=n("here"),sn=n("."),ao=d(),W=a("h2"),H=a("a"),ft=a("span"),k(ue.$$.fragment),ln=d(),ht=a("span"),dn=n("LayoutXLMTokenizer"),so=d(),_=a("div"),k(me.$$.fragment),cn=d(),E=a("p"),un=n("Adapted from "),We=a("a"),mn=n("RobertaTokenizer"),pn=n(" and "),Re=a("a"),fn=n("XLNetTokenizer"),hn=n(`. Based on
`),pe=a("a"),_n=n("SentencePiece"),gn=n("."),kn=d(),fe=a("p"),yn=n("This tokenizer inherits from "),Be=a("a"),Ln=n("PreTrainedTokenizer"),bn=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),vn=d(),Y=a("div"),k(he.$$.fragment),wn=d(),_t=a("p"),xn=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Tn=d(),P=a("div"),k(_e.$$.fragment),zn=d(),gt=a("p"),Mn=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Xn=d(),ge=a("ul"),je=a("li"),En=n("single sequence: "),kt=a("code"),qn=n("<s> X </s>"),$n=d(),Ve=a("li"),Fn=n("pair of sequences: "),yt=a("code"),Pn=n("<s> A </s></s> B </s>"),Nn=d(),J=a("div"),k(ke.$$.fragment),Dn=d(),ye=a("p"),An=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Lt=a("code"),In=n("prepare_for_model"),On=n(" method."),Sn=d(),Z=a("div"),k(Le.$$.fragment),Cn=d(),bt=a("p"),Un=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Wn=d(),Ge=a("div"),k(be.$$.fragment),io=d(),R=a("h2"),K=a("a"),vt=a("span"),k(ve.$$.fragment),Rn=d(),wt=a("span"),Bn=n("LayoutXLMTokenizerFast"),lo=d(),M=a("div"),k(we.$$.fragment),jn=d(),X=a("p"),Vn=n("Construct a \u201Cfast\u201D LayoutXLM tokenizer (backed by HuggingFace\u2019s "),xt=a("em"),Gn=n("tokenizers"),Hn=n(` library). Adapted from
`),He=a("a"),Yn=n("RobertaTokenizer"),Jn=n(" and "),Ye=a("a"),Zn=n("XLNetTokenizer"),Kn=n(`. Based on
`),xe=a("a"),Qn=n("BPE"),er=n("."),tr=d(),Te=a("p"),or=n("This tokenizer inherits from "),Je=a("a"),nr=n("PreTrainedTokenizerFast"),rr=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ar=d(),Q=a("div"),k(ze.$$.fragment),sr=d(),Tt=a("p"),ir=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),co=d(),B=a("h2"),ee=a("a"),zt=a("span"),k(Me.$$.fragment),lr=d(),Mt=a("span"),dr=n("LayoutXLMProcessor"),uo=d(),T=a("div"),k(Xe.$$.fragment),cr=d(),Xt=a("p"),ur=n(`Constructs a LayoutXLM processor which combines a LayoutXLM feature extractor and a LayoutXLM tokenizer into a
single processor.`),mr=d(),Ze=a("p"),Ke=a("a"),pr=n("LayoutXLMProcessor"),fr=n(" offers all the functionalities you need to prepare data for the model."),hr=d(),h=a("p"),_r=n("It first uses "),Qe=a("a"),gr=n("LayoutLMv2FeatureExtractor"),kr=n(` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),et=a("a"),yr=n("LayoutXLMTokenizer"),Lr=n(` or
`),tt=a("a"),br=n("LayoutXLMTokenizerFast"),vr=n(", which turns the words and bounding boxes into token-level "),Et=a("code"),wr=n("input_ids"),xr=n(`,
`),qt=a("code"),Tr=n("attention_mask"),zr=n(", "),$t=a("code"),Mr=n("token_type_ids"),Xr=n(", "),Ft=a("code"),Er=n("bbox"),qr=n(". Optionally, one can provide integer "),Pt=a("code"),$r=n("word_labels"),Fr=n(`, which are turned
into token-level `),Nt=a("code"),Pr=n("labels"),Nr=n(" for token classification tasks (such as FUNSD, CORD)."),Dr=d(),N=a("div"),k(Ee.$$.fragment),Ar=d(),p=a("p"),Ir=n("This method first forwards the "),Dt=a("code"),Or=n("images"),Sr=n(" argument to "),qe=a("a"),At=a("strong"),Cr=n("call"),Ur=n("()"),Wr=n(`. In case
`),ot=a("a"),Rr=n("LayoutLMv2FeatureExtractor"),Br=n(" was initialized with "),It=a("code"),jr=n("apply_ocr"),Vr=n(" set to "),Ot=a("code"),Gr=n("True"),Hr=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),$e=a("a"),St=a("strong"),Yr=n("call"),Jr=n("()"),Zr=n(` and returns the output,
together with resized `),Ct=a("code"),Kr=n("images"),Qr=n(". In case "),nt=a("a"),ea=n("LayoutLMv2FeatureExtractor"),ta=n(" was initialized with "),Ut=a("code"),oa=n("apply_ocr"),na=n(` set to
`),Wt=a("code"),ra=n("False"),aa=n(", it passes the words ("),Rt=a("code"),sa=n("text"),ia=n("/"),Bt=a("code"),la=n("text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer.__call__) and returns the output, together with resized `images"),da=n("."),ca=d(),jt=a("p"),ua=n("Please refer to the docstring of the above two methods for more information."),this.h()},l(t){const u=Ss('[data-svelte="svelte-1phssyn"]',document.head);S=s(u,"META",{name:!0,content:!0}),u.forEach(o),Gt=c(t),C=s(t,"H1",{class:!0});var po=i(C);j=s(po,"A",{id:!0,class:!0,href:!0});var ka=i(j);dt=s(ka,"SPAN",{});var ya=i(dt);y(ne.$$.fragment,ya),ya.forEach(o),ka.forEach(o),Mo=c(po),ct=s(po,"SPAN",{});var La=i(ct);Xo=r(La,"LayoutXLM"),La.forEach(o),po.forEach(o),Ht=c(t),U=s(t,"H2",{class:!0});var fo=i(U);V=s(fo,"A",{id:!0,class:!0,href:!0});var ba=i(V);ut=s(ba,"SPAN",{});var va=i(ut);y(re.$$.fragment,va),va.forEach(o),ba.forEach(o),Eo=c(fo),mt=s(fo,"SPAN",{});var wa=i(mt);qo=r(wa,"Overview"),wa.forEach(o),fo.forEach(o),Yt=c(t),q=s(t,"P",{});var rt=i(q);$o=r(rt,"LayoutXLM was proposed in "),ae=s(rt,"A",{href:!0,rel:!0});var xa=i(ae);Fo=r(xa,"LayoutXLM: Multimodal Pre-training for Multilingual Visually-rich Document Understanding"),xa.forEach(o),Po=r(rt,` by Yiheng Xu, Tengchao Lv, Lei Cui, Guoxin Wang, Yijuan Lu, Dinei Florencio, Cha
Zhang, Furu Wei. It\u2019s a multilingual extension of the `),se=s(rt,"A",{href:!0,rel:!0});var Ta=i(se);No=r(Ta,"LayoutLMv2 model"),Ta.forEach(o),Do=r(rt,` trained
on 53 languages.`),rt.forEach(o),Jt=c(t),Fe=s(t,"P",{});var za=i(Fe);Ao=r(za,"The abstract from the paper is the following:"),za.forEach(o),Zt=c(t),Pe=s(t,"P",{});var Ma=i(Pe);pt=s(Ma,"EM",{});var Xa=i(pt);Io=r(Xa,`Multimodal pre-training with text, layout, and image has achieved SOTA performance for visually-rich document
understanding tasks recently, which demonstrates the great potential for joint learning across different modalities. In
this paper, we present LayoutXLM, a multimodal pre-trained model for multilingual document understanding, which aims to
bridge the language barriers for visually-rich document understanding. To accurately evaluate LayoutXLM, we also
introduce a multilingual form understanding benchmark dataset named XFUN, which includes form understanding samples in
7 languages (Chinese, Japanese, Spanish, French, Italian, German, Portuguese), and key-value pairs are manually labeled
for each language. Experiment results show that the LayoutXLM model has significantly outperformed the existing SOTA
cross-lingual pre-trained models on the XFUN dataset.`),Xa.forEach(o),Ma.forEach(o),Kt=c(t),Ne=s(t,"P",{});var Ea=i(Ne);Oo=r(Ea,"One can directly plug in the weights of LayoutXLM into a LayoutLMv2 model, like so:"),Ea.forEach(o),Qt=c(t),y(ie.$$.fragment,t),eo=c(t),$=s(t,"P",{});var at=i($);So=r(at,`Note that LayoutXLM has its own tokenizer, based on
`),De=s(at,"A",{href:!0});var qa=i(De);Co=r(qa,"LayoutXLMTokenizer"),qa.forEach(o),Uo=r(at,"/"),Ae=s(at,"A",{href:!0});var $a=i(Ae);Wo=r($a,"LayoutXLMTokenizerFast"),$a.forEach(o),Ro=r(at,`. You can initialize it as
follows:`),at.forEach(o),to=c(t),y(le.$$.fragment,t),oo=c(t),z=s(t,"P",{});var D=i(z);Bo=r(D,"Similar to LayoutLMv2, you can use "),Ie=s(D,"A",{href:!0});var Fa=i(Ie);jo=r(Fa,"LayoutXLMProcessor"),Fa.forEach(o),Vo=r(D,` (which internally applies
`),Oe=s(D,"A",{href:!0});var Pa=i(Oe);Go=r(Pa,"LayoutLMv2FeatureExtractor"),Pa.forEach(o),Ho=r(D,` and
`),Se=s(D,"A",{href:!0});var Na=i(Se);Yo=r(Na,"LayoutXLMTokenizer"),Na.forEach(o),Jo=r(D,"/"),Ce=s(D,"A",{href:!0});var Da=i(Ce);Zo=r(Da,"LayoutXLMTokenizerFast"),Da.forEach(o),Ko=r(D,` in sequence) to prepare all
data for the model.`),D.forEach(o),no=c(t),G=s(t,"P",{});var ho=i(G);Qo=r(ho,"As LayoutXLM\u2019s architecture is equivalent to that of LayoutLMv2, one can refer to "),Ue=s(ho,"A",{href:!0});var Aa=i(Ue);en=r(Aa,"LayoutLMv2\u2019s documentation page"),Aa.forEach(o),tn=r(ho," for all tips, code examples and notebooks."),ho.forEach(o),ro=c(t),F=s(t,"P",{});var st=i(F);on=r(st,"This model was contributed by "),de=s(st,"A",{href:!0,rel:!0});var Ia=i(de);nn=r(Ia,"nielsr"),Ia.forEach(o),rn=r(st,". The original code can be found "),ce=s(st,"A",{href:!0,rel:!0});var Oa=i(ce);an=r(Oa,"here"),Oa.forEach(o),sn=r(st,"."),st.forEach(o),ao=c(t),W=s(t,"H2",{class:!0});var _o=i(W);H=s(_o,"A",{id:!0,class:!0,href:!0});var Sa=i(H);ft=s(Sa,"SPAN",{});var Ca=i(ft);y(ue.$$.fragment,Ca),Ca.forEach(o),Sa.forEach(o),ln=c(_o),ht=s(_o,"SPAN",{});var Ua=i(ht);dn=r(Ua,"LayoutXLMTokenizer"),Ua.forEach(o),_o.forEach(o),so=c(t),_=s(t,"DIV",{class:!0});var x=i(_);y(me.$$.fragment,x),cn=c(x),E=s(x,"P",{});var te=i(E);un=r(te,"Adapted from "),We=s(te,"A",{href:!0});var Wa=i(We);mn=r(Wa,"RobertaTokenizer"),Wa.forEach(o),pn=r(te," and "),Re=s(te,"A",{href:!0});var Ra=i(Re);fn=r(Ra,"XLNetTokenizer"),Ra.forEach(o),hn=r(te,`. Based on
`),pe=s(te,"A",{href:!0,rel:!0});var Ba=i(pe);_n=r(Ba,"SentencePiece"),Ba.forEach(o),gn=r(te,"."),te.forEach(o),kn=c(x),fe=s(x,"P",{});var go=i(fe);yn=r(go,"This tokenizer inherits from "),Be=s(go,"A",{href:!0});var ja=i(Be);Ln=r(ja,"PreTrainedTokenizer"),ja.forEach(o),bn=r(go,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),go.forEach(o),vn=c(x),Y=s(x,"DIV",{class:!0});var ko=i(Y);y(he.$$.fragment,ko),wn=c(ko),_t=s(ko,"P",{});var Va=i(_t);xn=r(Va,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Va.forEach(o),ko.forEach(o),Tn=c(x),P=s(x,"DIV",{class:!0});var it=i(P);y(_e.$$.fragment,it),zn=c(it),gt=s(it,"P",{});var Ga=i(gt);Mn=r(Ga,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Ga.forEach(o),Xn=c(it),ge=s(it,"UL",{});var yo=i(ge);je=s(yo,"LI",{});var ma=i(je);En=r(ma,"single sequence: "),kt=s(ma,"CODE",{});var Ha=i(kt);qn=r(Ha,"<s> X </s>"),Ha.forEach(o),ma.forEach(o),$n=c(yo),Ve=s(yo,"LI",{});var pa=i(Ve);Fn=r(pa,"pair of sequences: "),yt=s(pa,"CODE",{});var Ya=i(yt);Pn=r(Ya,"<s> A </s></s> B </s>"),Ya.forEach(o),pa.forEach(o),yo.forEach(o),it.forEach(o),Nn=c(x),J=s(x,"DIV",{class:!0});var Lo=i(J);y(ke.$$.fragment,Lo),Dn=c(Lo),ye=s(Lo,"P",{});var bo=i(ye);An=r(bo,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Lt=s(bo,"CODE",{});var Ja=i(Lt);In=r(Ja,"prepare_for_model"),Ja.forEach(o),On=r(bo," method."),bo.forEach(o),Lo.forEach(o),Sn=c(x),Z=s(x,"DIV",{class:!0});var vo=i(Z);y(Le.$$.fragment,vo),Cn=c(vo),bt=s(vo,"P",{});var Za=i(bt);Un=r(Za,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Za.forEach(o),vo.forEach(o),Wn=c(x),Ge=s(x,"DIV",{class:!0});var Ka=i(Ge);y(be.$$.fragment,Ka),Ka.forEach(o),x.forEach(o),io=c(t),R=s(t,"H2",{class:!0});var wo=i(R);K=s(wo,"A",{id:!0,class:!0,href:!0});var Qa=i(K);vt=s(Qa,"SPAN",{});var es=i(vt);y(ve.$$.fragment,es),es.forEach(o),Qa.forEach(o),Rn=c(wo),wt=s(wo,"SPAN",{});var ts=i(wt);Bn=r(ts,"LayoutXLMTokenizerFast"),ts.forEach(o),wo.forEach(o),lo=c(t),M=s(t,"DIV",{class:!0});var oe=i(M);y(we.$$.fragment,oe),jn=c(oe),X=s(oe,"P",{});var A=i(X);Vn=r(A,"Construct a \u201Cfast\u201D LayoutXLM tokenizer (backed by HuggingFace\u2019s "),xt=s(A,"EM",{});var os=i(xt);Gn=r(os,"tokenizers"),os.forEach(o),Hn=r(A,` library). Adapted from
`),He=s(A,"A",{href:!0});var ns=i(He);Yn=r(ns,"RobertaTokenizer"),ns.forEach(o),Jn=r(A," and "),Ye=s(A,"A",{href:!0});var rs=i(Ye);Zn=r(rs,"XLNetTokenizer"),rs.forEach(o),Kn=r(A,`. Based on
`),xe=s(A,"A",{href:!0,rel:!0});var as=i(xe);Qn=r(as,"BPE"),as.forEach(o),er=r(A,"."),A.forEach(o),tr=c(oe),Te=s(oe,"P",{});var xo=i(Te);or=r(xo,"This tokenizer inherits from "),Je=s(xo,"A",{href:!0});var ss=i(Je);nr=r(ss,"PreTrainedTokenizerFast"),ss.forEach(o),rr=r(xo,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),xo.forEach(o),ar=c(oe),Q=s(oe,"DIV",{class:!0});var To=i(Q);y(ze.$$.fragment,To),sr=c(To),Tt=s(To,"P",{});var is=i(Tt);ir=r(is,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),is.forEach(o),To.forEach(o),oe.forEach(o),co=c(t),B=s(t,"H2",{class:!0});var zo=i(B);ee=s(zo,"A",{id:!0,class:!0,href:!0});var ls=i(ee);zt=s(ls,"SPAN",{});var ds=i(zt);y(Me.$$.fragment,ds),ds.forEach(o),ls.forEach(o),lr=c(zo),Mt=s(zo,"SPAN",{});var cs=i(Mt);dr=r(cs,"LayoutXLMProcessor"),cs.forEach(o),zo.forEach(o),uo=c(t),T=s(t,"DIV",{class:!0});var I=i(T);y(Xe.$$.fragment,I),cr=c(I),Xt=s(I,"P",{});var us=i(Xt);ur=r(us,`Constructs a LayoutXLM processor which combines a LayoutXLM feature extractor and a LayoutXLM tokenizer into a
single processor.`),us.forEach(o),mr=c(I),Ze=s(I,"P",{});var fa=i(Ze);Ke=s(fa,"A",{href:!0});var ms=i(Ke);pr=r(ms,"LayoutXLMProcessor"),ms.forEach(o),fr=r(fa," offers all the functionalities you need to prepare data for the model."),fa.forEach(o),hr=c(I),h=s(I,"P",{});var g=i(h);_r=r(g,"It first uses "),Qe=s(g,"A",{href:!0});var ps=i(Qe);gr=r(ps,"LayoutLMv2FeatureExtractor"),ps.forEach(o),kr=r(g,` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),et=s(g,"A",{href:!0});var fs=i(et);yr=r(fs,"LayoutXLMTokenizer"),fs.forEach(o),Lr=r(g,` or
`),tt=s(g,"A",{href:!0});var hs=i(tt);br=r(hs,"LayoutXLMTokenizerFast"),hs.forEach(o),vr=r(g,", which turns the words and bounding boxes into token-level "),Et=s(g,"CODE",{});var _s=i(Et);wr=r(_s,"input_ids"),_s.forEach(o),xr=r(g,`,
`),qt=s(g,"CODE",{});var gs=i(qt);Tr=r(gs,"attention_mask"),gs.forEach(o),zr=r(g,", "),$t=s(g,"CODE",{});var ks=i($t);Mr=r(ks,"token_type_ids"),ks.forEach(o),Xr=r(g,", "),Ft=s(g,"CODE",{});var ys=i(Ft);Er=r(ys,"bbox"),ys.forEach(o),qr=r(g,". Optionally, one can provide integer "),Pt=s(g,"CODE",{});var Ls=i(Pt);$r=r(Ls,"word_labels"),Ls.forEach(o),Fr=r(g,`, which are turned
into token-level `),Nt=s(g,"CODE",{});var bs=i(Nt);Pr=r(bs,"labels"),bs.forEach(o),Nr=r(g," for token classification tasks (such as FUNSD, CORD)."),g.forEach(o),Dr=c(I),N=s(I,"DIV",{class:!0});var lt=i(N);y(Ee.$$.fragment,lt),Ar=c(lt),p=s(lt,"P",{});var f=i(p);Ir=r(f,"This method first forwards the "),Dt=s(f,"CODE",{});var vs=i(Dt);Or=r(vs,"images"),vs.forEach(o),Sr=r(f," argument to "),qe=s(f,"A",{href:!0});var ha=i(qe);At=s(ha,"STRONG",{});var ws=i(At);Cr=r(ws,"call"),ws.forEach(o),Ur=r(ha,"()"),ha.forEach(o),Wr=r(f,`. In case
`),ot=s(f,"A",{href:!0});var xs=i(ot);Rr=r(xs,"LayoutLMv2FeatureExtractor"),xs.forEach(o),Br=r(f," was initialized with "),It=s(f,"CODE",{});var Ts=i(It);jr=r(Ts,"apply_ocr"),Ts.forEach(o),Vr=r(f," set to "),Ot=s(f,"CODE",{});var zs=i(Ot);Gr=r(zs,"True"),zs.forEach(o),Hr=r(f,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),$e=s(f,"A",{href:!0});var _a=i($e);St=s(_a,"STRONG",{});var Ms=i(St);Yr=r(Ms,"call"),Ms.forEach(o),Jr=r(_a,"()"),_a.forEach(o),Zr=r(f,` and returns the output,
together with resized `),Ct=s(f,"CODE",{});var Xs=i(Ct);Kr=r(Xs,"images"),Xs.forEach(o),Qr=r(f,". In case "),nt=s(f,"A",{href:!0});var Es=i(nt);ea=r(Es,"LayoutLMv2FeatureExtractor"),Es.forEach(o),ta=r(f," was initialized with "),Ut=s(f,"CODE",{});var qs=i(Ut);oa=r(qs,"apply_ocr"),qs.forEach(o),na=r(f,` set to
`),Wt=s(f,"CODE",{});var $s=i(Wt);ra=r($s,"False"),$s.forEach(o),aa=r(f,", it passes the words ("),Rt=s(f,"CODE",{});var Fs=i(Rt);sa=r(Fs,"text"),Fs.forEach(o),ia=r(f,"/"),Bt=s(f,"CODE",{});var Ps=i(Bt);la=r(Ps,"text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer.__call__) and returns the output, together with resized `images"),Ps.forEach(o),da=r(f,"."),f.forEach(o),ca=c(lt),jt=s(lt,"P",{});var Ns=i(jt);ua=r(Ns,"Please refer to the docstring of the above two methods for more information."),Ns.forEach(o),lt.forEach(o),I.forEach(o),this.h()},h(){l(S,"name","hf:doc:metadata"),l(S,"content",JSON.stringify(Rs)),l(j,"id","layoutxlm"),l(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(j,"href","#layoutxlm"),l(C,"class","relative group"),l(V,"id","overview"),l(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(V,"href","#overview"),l(U,"class","relative group"),l(ae,"href","https://arxiv.org/abs/2104.08836"),l(ae,"rel","nofollow"),l(se,"href","https://arxiv.org/abs/2012.14740"),l(se,"rel","nofollow"),l(De,"href","/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer"),l(Ae,"href","/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizerFast"),l(Ie,"href","/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMProcessor"),l(Oe,"href","/docs/transformers/v4.22.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Se,"href","/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer"),l(Ce,"href","/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizerFast"),l(Ue,"href","layoutlmv2"),l(de,"href","https://huggingface.co/nielsr"),l(de,"rel","nofollow"),l(ce,"href","https://github.com/microsoft/unilm"),l(ce,"rel","nofollow"),l(H,"id","transformers.LayoutXLMTokenizer"),l(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(H,"href","#transformers.LayoutXLMTokenizer"),l(W,"class","relative group"),l(We,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer"),l(Re,"href","/docs/transformers/v4.22.0/en/model_doc/xlnet#transformers.XLNetTokenizer"),l(pe,"href","https://github.com/google/sentencepiece"),l(pe,"rel","nofollow"),l(Be,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(K,"id","transformers.LayoutXLMTokenizerFast"),l(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(K,"href","#transformers.LayoutXLMTokenizerFast"),l(R,"class","relative group"),l(He,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer"),l(Ye,"href","/docs/transformers/v4.22.0/en/model_doc/xlnet#transformers.XLNetTokenizer"),l(xe,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),l(xe,"rel","nofollow"),l(Je,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"id","transformers.LayoutXLMProcessor"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#transformers.LayoutXLMProcessor"),l(B,"class","relative group"),l(Ke,"href","/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMProcessor"),l(Qe,"href","/docs/transformers/v4.22.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(et,"href","/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer"),l(tt,"href","/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizerFast"),l(qe,"href","/docs/transformers/v4.22.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__"),l(ot,"href","/docs/transformers/v4.22.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l($e,"href","/docs/transformers/v4.22.0/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer.__call__"),l(nt,"href","/docs/transformers/v4.22.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,S),m(t,Gt,u),m(t,C,u),e(C,j),e(j,dt),L(ne,dt,null),e(C,Mo),e(C,ct),e(ct,Xo),m(t,Ht,u),m(t,U,u),e(U,V),e(V,ut),L(re,ut,null),e(U,Eo),e(U,mt),e(mt,qo),m(t,Yt,u),m(t,q,u),e(q,$o),e(q,ae),e(ae,Fo),e(q,Po),e(q,se),e(se,No),e(q,Do),m(t,Jt,u),m(t,Fe,u),e(Fe,Ao),m(t,Zt,u),m(t,Pe,u),e(Pe,pt),e(pt,Io),m(t,Kt,u),m(t,Ne,u),e(Ne,Oo),m(t,Qt,u),L(ie,t,u),m(t,eo,u),m(t,$,u),e($,So),e($,De),e(De,Co),e($,Uo),e($,Ae),e(Ae,Wo),e($,Ro),m(t,to,u),L(le,t,u),m(t,oo,u),m(t,z,u),e(z,Bo),e(z,Ie),e(Ie,jo),e(z,Vo),e(z,Oe),e(Oe,Go),e(z,Ho),e(z,Se),e(Se,Yo),e(z,Jo),e(z,Ce),e(Ce,Zo),e(z,Ko),m(t,no,u),m(t,G,u),e(G,Qo),e(G,Ue),e(Ue,en),e(G,tn),m(t,ro,u),m(t,F,u),e(F,on),e(F,de),e(de,nn),e(F,rn),e(F,ce),e(ce,an),e(F,sn),m(t,ao,u),m(t,W,u),e(W,H),e(H,ft),L(ue,ft,null),e(W,ln),e(W,ht),e(ht,dn),m(t,so,u),m(t,_,u),L(me,_,null),e(_,cn),e(_,E),e(E,un),e(E,We),e(We,mn),e(E,pn),e(E,Re),e(Re,fn),e(E,hn),e(E,pe),e(pe,_n),e(E,gn),e(_,kn),e(_,fe),e(fe,yn),e(fe,Be),e(Be,Ln),e(fe,bn),e(_,vn),e(_,Y),L(he,Y,null),e(Y,wn),e(Y,_t),e(_t,xn),e(_,Tn),e(_,P),L(_e,P,null),e(P,zn),e(P,gt),e(gt,Mn),e(P,Xn),e(P,ge),e(ge,je),e(je,En),e(je,kt),e(kt,qn),e(ge,$n),e(ge,Ve),e(Ve,Fn),e(Ve,yt),e(yt,Pn),e(_,Nn),e(_,J),L(ke,J,null),e(J,Dn),e(J,ye),e(ye,An),e(ye,Lt),e(Lt,In),e(ye,On),e(_,Sn),e(_,Z),L(Le,Z,null),e(Z,Cn),e(Z,bt),e(bt,Un),e(_,Wn),e(_,Ge),L(be,Ge,null),m(t,io,u),m(t,R,u),e(R,K),e(K,vt),L(ve,vt,null),e(R,Rn),e(R,wt),e(wt,Bn),m(t,lo,u),m(t,M,u),L(we,M,null),e(M,jn),e(M,X),e(X,Vn),e(X,xt),e(xt,Gn),e(X,Hn),e(X,He),e(He,Yn),e(X,Jn),e(X,Ye),e(Ye,Zn),e(X,Kn),e(X,xe),e(xe,Qn),e(X,er),e(M,tr),e(M,Te),e(Te,or),e(Te,Je),e(Je,nr),e(Te,rr),e(M,ar),e(M,Q),L(ze,Q,null),e(Q,sr),e(Q,Tt),e(Tt,ir),m(t,co,u),m(t,B,u),e(B,ee),e(ee,zt),L(Me,zt,null),e(B,lr),e(B,Mt),e(Mt,dr),m(t,uo,u),m(t,T,u),L(Xe,T,null),e(T,cr),e(T,Xt),e(Xt,ur),e(T,mr),e(T,Ze),e(Ze,Ke),e(Ke,pr),e(Ze,fr),e(T,hr),e(T,h),e(h,_r),e(h,Qe),e(Qe,gr),e(h,kr),e(h,et),e(et,yr),e(h,Lr),e(h,tt),e(tt,br),e(h,vr),e(h,Et),e(Et,wr),e(h,xr),e(h,qt),e(qt,Tr),e(h,zr),e(h,$t),e($t,Mr),e(h,Xr),e(h,Ft),e(Ft,Er),e(h,qr),e(h,Pt),e(Pt,$r),e(h,Fr),e(h,Nt),e(Nt,Pr),e(h,Nr),e(T,Dr),e(T,N),L(Ee,N,null),e(N,Ar),e(N,p),e(p,Ir),e(p,Dt),e(Dt,Or),e(p,Sr),e(p,qe),e(qe,At),e(At,Cr),e(qe,Ur),e(p,Wr),e(p,ot),e(ot,Rr),e(p,Br),e(p,It),e(It,jr),e(p,Vr),e(p,Ot),e(Ot,Gr),e(p,Hr),e(p,$e),e($e,St),e(St,Yr),e($e,Jr),e(p,Zr),e(p,Ct),e(Ct,Kr),e(p,Qr),e(p,nt),e(nt,ea),e(p,ta),e(p,Ut),e(Ut,oa),e(p,na),e(p,Wt),e(Wt,ra),e(p,aa),e(p,Rt),e(Rt,sa),e(p,ia),e(p,Bt),e(Bt,la),e(p,da),e(N,ca),e(N,jt),e(jt,ua),mo=!0},p:Cs,i(t){mo||(b(ne.$$.fragment,t),b(re.$$.fragment,t),b(ie.$$.fragment,t),b(le.$$.fragment,t),b(ue.$$.fragment,t),b(me.$$.fragment,t),b(he.$$.fragment,t),b(_e.$$.fragment,t),b(ke.$$.fragment,t),b(Le.$$.fragment,t),b(be.$$.fragment,t),b(ve.$$.fragment,t),b(we.$$.fragment,t),b(ze.$$.fragment,t),b(Me.$$.fragment,t),b(Xe.$$.fragment,t),b(Ee.$$.fragment,t),mo=!0)},o(t){v(ne.$$.fragment,t),v(re.$$.fragment,t),v(ie.$$.fragment,t),v(le.$$.fragment,t),v(ue.$$.fragment,t),v(me.$$.fragment,t),v(he.$$.fragment,t),v(_e.$$.fragment,t),v(ke.$$.fragment,t),v(Le.$$.fragment,t),v(be.$$.fragment,t),v(ve.$$.fragment,t),v(we.$$.fragment,t),v(ze.$$.fragment,t),v(Me.$$.fragment,t),v(Xe.$$.fragment,t),v(Ee.$$.fragment,t),mo=!1},d(t){o(S),t&&o(Gt),t&&o(C),w(ne),t&&o(Ht),t&&o(U),w(re),t&&o(Yt),t&&o(q),t&&o(Jt),t&&o(Fe),t&&o(Zt),t&&o(Pe),t&&o(Kt),t&&o(Ne),t&&o(Qt),w(ie,t),t&&o(eo),t&&o($),t&&o(to),w(le,t),t&&o(oo),t&&o(z),t&&o(no),t&&o(G),t&&o(ro),t&&o(F),t&&o(ao),t&&o(W),w(ue),t&&o(so),t&&o(_),w(me),w(he),w(_e),w(ke),w(Le),w(be),t&&o(io),t&&o(R),w(ve),t&&o(lo),t&&o(M),w(we),w(ze),t&&o(co),t&&o(B),w(Me),t&&o(uo),t&&o(T),w(Xe),w(Ee)}}}const Rs={local:"layoutxlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutXLMTokenizer",title:"LayoutXLMTokenizer"},{local:"transformers.LayoutXLMTokenizerFast",title:"LayoutXLMTokenizerFast"},{local:"transformers.LayoutXLMProcessor",title:"LayoutXLMProcessor"}],title:"LayoutXLM"};function Bs(ga){return Us(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ys extends As{constructor(S){super();Is(this,S,Bs,Ws,Os,{})}}export{Ys as default,Rs as metadata};
