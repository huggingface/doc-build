import{S as un,i as mn,s as hn,e as o,k as p,w as B,t as r,L as fn,c as s,d as n,m as u,a as i,x as j,h as a,b as l,J as t,g as d,y as C,K as _n,q as X,o as Y,B as H}from"../../chunks/vendor-b1433968.js";import{D as dn}from"../../chunks/Docstring-ff504c58.js";import{C as pn}from"../../chunks/CodeBlock-5eeb61a8.js";import{I as Ut}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-40b92840.js";function gn(Re){let k,V,h,_,le,$,Fe,ce,Oe,ye,b,L,de,P,Be,pe,je,ve,y,Ce,A,Xe,Ye,I,He,Ve,be,J,Je,we,G,Ge,Te,Q,ue,Qe,Le,Z,Ze,qe,N,xe,q,et,ee,tt,nt,ze,U,Ee,x,ot,te,st,it,Me,v,rt,S,at,lt,W,ct,dt,$e,w,z,me,K,pt,he,ut,Pe,m,D,mt,g,ht,ne,ft,_t,oe,gt,kt,R,yt,vt,bt,F,wt,se,Tt,Lt,qt,T,xt,fe,zt,Et,_e,Mt,$t,Pt,E,O,At,ge,It,Nt,ke,Ae;return $=new Ut({}),P=new Ut({}),N=new pn({props:{code:`from transformers import LukeModel

model = LukeModel.from_pretrained("studio-ousia/mluke-base"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeModel

model = LukeModel.from_pretrained(<span class="hljs-string">&quot;studio-ousia/mluke-base&quot;</span>)`}}),U=new pn({props:{code:`from transformers import MLukeTokenizer

tokenizer = MLukeTokenizer.from_pretrained("studio-ousia/mluke-base"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MLukeTokenizer

tokenizer = MLukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/mluke-base&quot;</span>)`}}),K=new Ut({}),D=new dn({props:{name:"class transformers.MLukeTokenizer",anchor:"transformers.MLukeTokenizer",parameters:[{name:"vocab_file",val:""},{name:"entity_vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"task",val:" = None"},{name:"max_entity_length",val:" = 32"},{name:"max_mention_length",val:" = 30"},{name:"entity_token_1",val:" = '<ent>'"},{name:"entity_token_2",val:" = '<ent2>'"},{name:"entity_unk_token",val:" = '[UNK]'"},{name:"entity_pad_token",val:" = '[PAD]'"},{name:"entity_mask_token",val:" = '[MASK]'"},{name:"entity_mask2_token",val:" = '[MASK2]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mluke/tokenization_mluke.py#L150",parametersDescription:[{anchor:"transformers.MLukeTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MLukeTokenizer.entity_vocab_file",description:`<strong>entity_vocab_file</strong> (<code>str</code>) &#x2014;
Path to the entity vocabulary file.`,name:"entity_vocab_file"},{anchor:"transformers.MLukeTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MLukeTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MLukeTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MLukeTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MLukeTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MLukeTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MLukeTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MLukeTokenizer.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Task for which you want to prepare sequences. One of <code>&quot;entity_classification&quot;</code>,
<code>&quot;entity_pair_classification&quot;</code>, or <code>&quot;entity_span_classification&quot;</code>. If you specify this argument, the entity
sequence is automatically created based on the given entity span(s).`,name:"task"},{anchor:"transformers.MLukeTokenizer.max_entity_length",description:`<strong>max_entity_length</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The maximum length of <code>entity_ids</code>.`,name:"max_entity_length"},{anchor:"transformers.MLukeTokenizer.max_mention_length",description:`<strong>max_mention_length</strong> (<code>int</code>, <em>optional</em>, defaults to 30) &#x2014;
The maximum number of tokens inside an entity span.`,name:"max_mention_length"},{anchor:"transformers.MLukeTokenizer.entity_token_1",description:`<strong>entity_token_1</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;ent&gt;</code>) &#x2014;
The special token used to represent an entity span in a word token sequence. This token is only used when
<code>task</code> is set to <code>&quot;entity_classification&quot;</code> or <code>&quot;entity_pair_classification&quot;</code>.`,name:"entity_token_1"},{anchor:"transformers.MLukeTokenizer.entity_token_2",description:`<strong>entity_token_2</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;ent2&gt;</code>) &#x2014;
The special token used to represent an entity span in a word token sequence. This token is only used when
<code>task</code> is set to <code>&quot;entity_pair_classification&quot;</code>.`,name:"entity_token_2"},{anchor:"transformers.MLukeTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.MLukeTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),O=new dn({props:{name:"__call__",anchor:"transformers.MLukeTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], NoneType] = None"},{name:"entity_spans",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entity_spans_pair",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entities",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"entities_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_entity_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": typing.Optional[bool] = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mluke/tokenization_mluke.py#L366",parametersDescription:[{anchor:"transformers.MLukeTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence must be a string. Note that this
tokenizer does not support tokenization based on pretokenized strings.`,name:"text"},{anchor:"transformers.MLukeTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence must be a string. Note that this
tokenizer does not support tokenization based on pretokenized strings.`,name:"text_pair"},{anchor:"transformers.MLukeTokenizer.__call__.entity_spans",description:`<strong>entity_spans</strong> (<code>List[Tuple[int, int]]</code>, <code>List[List[Tuple[int, int]]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entity spans to be encoded. Each sequence consists of tuples each
with two integers denoting character-based start and end positions of entities. If you specify
<code>&quot;entity_classification&quot;</code> or <code>&quot;entity_pair_classification&quot;</code> as the <code>task</code> argument in the constructor,
the length of each sequence must be 1 or 2, respectively. If you specify <code>entities</code>, the length of each
sequence must be equal to the length of each sequence of <code>entities</code>.`,name:"entity_spans"},{anchor:"transformers.MLukeTokenizer.__call__.entity_spans_pair",description:`<strong>entity_spans_pair</strong> (<code>List[Tuple[int, int]]</code>, <code>List[List[Tuple[int, int]]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entity spans to be encoded. Each sequence consists of tuples each
with two integers denoting character-based start and end positions of entities. If you specify the
<code>task</code> argument in the constructor, this argument is ignored. If you specify <code>entities_pair</code>, the
length of each sequence must be equal to the length of each sequence of <code>entities_pair</code>.`,name:"entity_spans_pair"},{anchor:"transformers.MLukeTokenizer.__call__.entities",description:`<strong>entities</strong> (<code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entities to be encoded. Each sequence consists of strings
representing entities, i.e., special entities (e.g., [MASK]) or entity titles of Wikipedia (e.g., Los
Angeles). This argument is ignored if you specify the <code>task</code> argument in the constructor. The length of
each sequence must be equal to the length of each sequence of <code>entity_spans</code>. If you specify
<code>entity_spans</code> without specifying this argument, the entity sequence or the batch of entity sequences
is automatically constructed by filling it with the [MASK] entity.`,name:"entities"},{anchor:"transformers.MLukeTokenizer.__call__.entities_pair",description:`<strong>entities_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entities to be encoded. Each sequence consists of strings
representing entities, i.e., special entities (e.g., [MASK]) or entity titles of Wikipedia (e.g., Los
Angeles). This argument is ignored if you specify the <code>task</code> argument in the constructor. The length of
each sequence must be equal to the length of each sequence of <code>entity_spans_pair</code>. If you specify
<code>entity_spans_pair</code> without specifying this argument, the entity sequence or the batch of entity
sequences is automatically constructed by filling it with the [MASK] entity.`,name:"entities_pair"},{anchor:"transformers.MLukeTokenizer.__call__.max_entity_length",description:`<strong>max_entity_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum length of <code>entity_ids</code>.`,name:"max_entity_length"},{anchor:"transformers.MLukeTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.MLukeTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.16.2/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.MLukeTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.MLukeTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.MLukeTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.MLukeTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.MLukeTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.MLukeTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.16.2/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.MLukeTokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.MLukeTokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.MLukeTokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.MLukeTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.MLukeTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.MLukeTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.MLukeTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
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
<p><strong>entity_ids</strong> \u2014 List of entity ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>entity_position_ids</strong> \u2014 List of entity positions in the input sequence to be fed to a model.</p>
</li>
<li>
<p><strong>entity_token_type_ids</strong> \u2014 List of entity token type ids to be fed to a model (when
<code>return_token_type_ids=True</code> or if <em>\u201Centity_token_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>entity_attention_mask</strong> \u2014 List of indices specifying which entities should be attended to by the model
(when <code>return_attention_mask=True</code> or if <em>\u201Centity_attention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>entity_start_positions</strong> \u2014 List of the start positions of entities in the word token sequence (when
<code>task="entity_span_classification"</code>).</p>
</li>
<li>
<p><strong>entity_end_positions</strong> \u2014 List of the end positions of entities in the word token sequence (when
<code>task="entity_span_classification"</code>).</p>
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
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),{c(){k=o("meta"),V=p(),h=o("h1"),_=o("a"),le=o("span"),B($.$$.fragment),Fe=p(),ce=o("span"),Oe=r("mLUKE"),ye=p(),b=o("h2"),L=o("a"),de=o("span"),B(P.$$.fragment),Be=p(),pe=o("span"),je=r("Overview"),ve=p(),y=o("p"),Ce=r("The mLUKE model was proposed in "),A=o("a"),Xe=r("mLUKE: The Power of Entity Representations in Multilingual Pretrained Language Models"),Ye=r(` by Ryokan Ri, Ikuya Yamada, and Yoshimasa Tsuruoka. It\u2019s a multilingual extension
of the `),I=o("a"),He=r("LUKE model"),Ve=r(" trained on the basis of XLM-RoBERTa."),be=p(),J=o("p"),Je=r(`It is based on XLM-RoBERTa and adds entity embeddings, which helps improve performance on various downstream tasks
involving reasoning about entities such as named entity recognition, extractive question answering, relation
classification, cloze-style knowledge completion.`),we=p(),G=o("p"),Ge=r("The abstract from the paper is the following:"),Te=p(),Q=o("p"),ue=o("em"),Qe=r(`Recent studies have shown that multilingual pretrained language models can be effectively improved with cross-lingual
alignment information from Wikipedia entities. However, existing methods only exploit entity information in pretraining
and do not explicitly use entities in downstream tasks. In this study, we explore the effectiveness of leveraging
entity representations for downstream cross-lingual tasks. We train a multilingual language model with 24 languages
with entity representations and show the model consistently outperforms word-based pretrained models in various
cross-lingual transfer tasks. We also analyze the model and the key insight is that incorporating entity
representations into the input allows us to extract more language-agnostic features. We also evaluate the model with a
multilingual cloze prompt task with the mLAMA dataset. We show that entity-based prompt elicits correct factual
knowledge more likely than using only word representations.`),Le=p(),Z=o("p"),Ze=r("One can directly plug in the weights of mLUKE into a LUKE model, like so:"),qe=p(),B(N.$$.fragment),xe=p(),q=o("p"),et=r("Note that mLUKE has its own tokenizer, "),ee=o("a"),tt=r("MLukeTokenizer"),nt=r(". You can initialize it as follows:"),ze=p(),B(U.$$.fragment),Ee=p(),x=o("p"),ot=r("As mLUKE\u2019s architecture is equivalent to that of LUKE, one can refer to "),te=o("a"),st=r("LUKE\u2019s documentation page"),it=r(` for all
tips, code examples and notebooks.`),Me=p(),v=o("p"),rt=r("This model was contributed by "),S=o("a"),at=r("ryo0634"),lt=r(". The original code can be found "),W=o("a"),ct=r("here"),dt=r("."),$e=p(),w=o("h2"),z=o("a"),me=o("span"),B(K.$$.fragment),pt=p(),he=o("span"),ut=r("MLukeTokenizer"),Pe=p(),m=o("div"),B(D.$$.fragment),mt=p(),g=o("p"),ht=r("Adapted from "),ne=o("a"),ft=r("XLMRobertaTokenizer"),_t=r(" and "),oe=o("a"),gt=r("LukeTokenizer"),kt=r(`. Based on
`),R=o("a"),yt=r("SentencePiece"),vt=r("."),bt=p(),F=o("p"),wt=r("This tokenizer inherits from "),se=o("a"),Tt=r("PreTrainedTokenizer"),Lt=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),qt=p(),T=o("p"),xt=r(`Attributes:
sp_model (`),fe=o("code"),zt=r("SentencePieceProcessor"),Et=r(`):
The `),_e=o("em"),Mt=r("SentencePiece"),$t=r(" processor that is used for every conversion (string, tokens and IDs)."),Pt=p(),E=o("div"),B(O.$$.fragment),At=p(),ge=o("p"),It=r(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),Nt=p(),ke=o("div"),this.h()},l(e){const c=fn('[data-svelte="svelte-1phssyn"]',document.head);k=s(c,"META",{name:!0,content:!0}),c.forEach(n),V=u(e),h=s(e,"H1",{class:!0});var Ie=i(h);_=s(Ie,"A",{id:!0,class:!0,href:!0});var St=i(_);le=s(St,"SPAN",{});var Wt=i(le);j($.$$.fragment,Wt),Wt.forEach(n),St.forEach(n),Fe=u(Ie),ce=s(Ie,"SPAN",{});var Kt=i(ce);Oe=a(Kt,"mLUKE"),Kt.forEach(n),Ie.forEach(n),ye=u(e),b=s(e,"H2",{class:!0});var Ne=i(b);L=s(Ne,"A",{id:!0,class:!0,href:!0});var Dt=i(L);de=s(Dt,"SPAN",{});var Rt=i(de);j(P.$$.fragment,Rt),Rt.forEach(n),Dt.forEach(n),Be=u(Ne),pe=s(Ne,"SPAN",{});var Ft=i(pe);je=a(Ft,"Overview"),Ft.forEach(n),Ne.forEach(n),ve=u(e),y=s(e,"P",{});var ie=i(y);Ce=a(ie,"The mLUKE model was proposed in "),A=s(ie,"A",{href:!0,rel:!0});var Ot=i(A);Xe=a(Ot,"mLUKE: The Power of Entity Representations in Multilingual Pretrained Language Models"),Ot.forEach(n),Ye=a(ie,` by Ryokan Ri, Ikuya Yamada, and Yoshimasa Tsuruoka. It\u2019s a multilingual extension
of the `),I=s(ie,"A",{href:!0,rel:!0});var Bt=i(I);He=a(Bt,"LUKE model"),Bt.forEach(n),Ve=a(ie," trained on the basis of XLM-RoBERTa."),ie.forEach(n),be=u(e),J=s(e,"P",{});var jt=i(J);Je=a(jt,`It is based on XLM-RoBERTa and adds entity embeddings, which helps improve performance on various downstream tasks
involving reasoning about entities such as named entity recognition, extractive question answering, relation
classification, cloze-style knowledge completion.`),jt.forEach(n),we=u(e),G=s(e,"P",{});var Ct=i(G);Ge=a(Ct,"The abstract from the paper is the following:"),Ct.forEach(n),Te=u(e),Q=s(e,"P",{});var Xt=i(Q);ue=s(Xt,"EM",{});var Yt=i(ue);Qe=a(Yt,`Recent studies have shown that multilingual pretrained language models can be effectively improved with cross-lingual
alignment information from Wikipedia entities. However, existing methods only exploit entity information in pretraining
and do not explicitly use entities in downstream tasks. In this study, we explore the effectiveness of leveraging
entity representations for downstream cross-lingual tasks. We train a multilingual language model with 24 languages
with entity representations and show the model consistently outperforms word-based pretrained models in various
cross-lingual transfer tasks. We also analyze the model and the key insight is that incorporating entity
representations into the input allows us to extract more language-agnostic features. We also evaluate the model with a
multilingual cloze prompt task with the mLAMA dataset. We show that entity-based prompt elicits correct factual
knowledge more likely than using only word representations.`),Yt.forEach(n),Xt.forEach(n),Le=u(e),Z=s(e,"P",{});var Ht=i(Z);Ze=a(Ht,"One can directly plug in the weights of mLUKE into a LUKE model, like so:"),Ht.forEach(n),qe=u(e),j(N.$$.fragment,e),xe=u(e),q=s(e,"P",{});var Ue=i(q);et=a(Ue,"Note that mLUKE has its own tokenizer, "),ee=s(Ue,"A",{href:!0});var Vt=i(ee);tt=a(Vt,"MLukeTokenizer"),Vt.forEach(n),nt=a(Ue,". You can initialize it as follows:"),Ue.forEach(n),ze=u(e),j(U.$$.fragment,e),Ee=u(e),x=s(e,"P",{});var Se=i(x);ot=a(Se,"As mLUKE\u2019s architecture is equivalent to that of LUKE, one can refer to "),te=s(Se,"A",{href:!0});var Jt=i(te);st=a(Jt,"LUKE\u2019s documentation page"),Jt.forEach(n),it=a(Se,` for all
tips, code examples and notebooks.`),Se.forEach(n),Me=u(e),v=s(e,"P",{});var re=i(v);rt=a(re,"This model was contributed by "),S=s(re,"A",{href:!0,rel:!0});var Gt=i(S);at=a(Gt,"ryo0634"),Gt.forEach(n),lt=a(re,". The original code can be found "),W=s(re,"A",{href:!0,rel:!0});var Qt=i(W);ct=a(Qt,"here"),Qt.forEach(n),dt=a(re,"."),re.forEach(n),$e=u(e),w=s(e,"H2",{class:!0});var We=i(w);z=s(We,"A",{id:!0,class:!0,href:!0});var Zt=i(z);me=s(Zt,"SPAN",{});var en=i(me);j(K.$$.fragment,en),en.forEach(n),Zt.forEach(n),pt=u(We),he=s(We,"SPAN",{});var tn=i(he);ut=a(tn,"MLukeTokenizer"),tn.forEach(n),We.forEach(n),Pe=u(e),m=s(e,"DIV",{class:!0});var f=i(m);j(D.$$.fragment,f),mt=u(f),g=s(f,"P",{});var M=i(g);ht=a(M,"Adapted from "),ne=s(M,"A",{href:!0});var nn=i(ne);ft=a(nn,"XLMRobertaTokenizer"),nn.forEach(n),_t=a(M," and "),oe=s(M,"A",{href:!0});var on=i(oe);gt=a(on,"LukeTokenizer"),on.forEach(n),kt=a(M,`. Based on
`),R=s(M,"A",{href:!0,rel:!0});var sn=i(R);yt=a(sn,"SentencePiece"),sn.forEach(n),vt=a(M,"."),M.forEach(n),bt=u(f),F=s(f,"P",{});var Ke=i(F);wt=a(Ke,"This tokenizer inherits from "),se=s(Ke,"A",{href:!0});var rn=i(se);Tt=a(rn,"PreTrainedTokenizer"),rn.forEach(n),Lt=a(Ke,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ke.forEach(n),qt=u(f),T=s(f,"P",{});var ae=i(T);xt=a(ae,`Attributes:
sp_model (`),fe=s(ae,"CODE",{});var an=i(fe);zt=a(an,"SentencePieceProcessor"),an.forEach(n),Et=a(ae,`):
The `),_e=s(ae,"EM",{});var ln=i(_e);Mt=a(ln,"SentencePiece"),ln.forEach(n),$t=a(ae," processor that is used for every conversion (string, tokens and IDs)."),ae.forEach(n),Pt=u(f),E=s(f,"DIV",{class:!0});var De=i(E);j(O.$$.fragment,De),At=u(De),ge=s(De,"P",{});var cn=i(ge);It=a(cn,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),cn.forEach(n),De.forEach(n),Nt=u(f),ke=s(f,"DIV",{class:!0}),i(ke).forEach(n),f.forEach(n),this.h()},h(){l(k,"name","hf:doc:metadata"),l(k,"content",JSON.stringify(kn)),l(_,"id","mluke"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#mluke"),l(h,"class","relative group"),l(L,"id","overview"),l(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(L,"href","#overview"),l(b,"class","relative group"),l(A,"href","https://arxiv.org/abs/2110.08151"),l(A,"rel","nofollow"),l(I,"href","https://arxiv.org/abs/2010.01057"),l(I,"rel","nofollow"),l(ee,"href","/docs/transformers/v4.16.2/en/model_doc/mluke#transformers.MLukeTokenizer"),l(te,"href","luke"),l(S,"href","https://huggingface.co/ryo0634"),l(S,"rel","nofollow"),l(W,"href","https://github.com/studio-ousia/luke"),l(W,"rel","nofollow"),l(z,"id","transformers.MLukeTokenizer"),l(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(z,"href","#transformers.MLukeTokenizer"),l(w,"class","relative group"),l(ne,"href","/docs/transformers/v4.16.2/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer"),l(oe,"href","/docs/transformers/v4.16.2/en/model_doc/luke#transformers.LukeTokenizer"),l(R,"href","https://github.com/google/sentencepiece"),l(R,"rel","nofollow"),l(se,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(E,"class","docstring"),l(ke,"class","docstring"),l(m,"class","docstring")},m(e,c){t(document.head,k),d(e,V,c),d(e,h,c),t(h,_),t(_,le),C($,le,null),t(h,Fe),t(h,ce),t(ce,Oe),d(e,ye,c),d(e,b,c),t(b,L),t(L,de),C(P,de,null),t(b,Be),t(b,pe),t(pe,je),d(e,ve,c),d(e,y,c),t(y,Ce),t(y,A),t(A,Xe),t(y,Ye),t(y,I),t(I,He),t(y,Ve),d(e,be,c),d(e,J,c),t(J,Je),d(e,we,c),d(e,G,c),t(G,Ge),d(e,Te,c),d(e,Q,c),t(Q,ue),t(ue,Qe),d(e,Le,c),d(e,Z,c),t(Z,Ze),d(e,qe,c),C(N,e,c),d(e,xe,c),d(e,q,c),t(q,et),t(q,ee),t(ee,tt),t(q,nt),d(e,ze,c),C(U,e,c),d(e,Ee,c),d(e,x,c),t(x,ot),t(x,te),t(te,st),t(x,it),d(e,Me,c),d(e,v,c),t(v,rt),t(v,S),t(S,at),t(v,lt),t(v,W),t(W,ct),t(v,dt),d(e,$e,c),d(e,w,c),t(w,z),t(z,me),C(K,me,null),t(w,pt),t(w,he),t(he,ut),d(e,Pe,c),d(e,m,c),C(D,m,null),t(m,mt),t(m,g),t(g,ht),t(g,ne),t(ne,ft),t(g,_t),t(g,oe),t(oe,gt),t(g,kt),t(g,R),t(R,yt),t(g,vt),t(m,bt),t(m,F),t(F,wt),t(F,se),t(se,Tt),t(F,Lt),t(m,qt),t(m,T),t(T,xt),t(T,fe),t(fe,zt),t(T,Et),t(T,_e),t(_e,Mt),t(T,$t),t(m,Pt),t(m,E),C(O,E,null),t(E,At),t(E,ge),t(ge,It),t(m,Nt),t(m,ke),Ae=!0},p:_n,i(e){Ae||(X($.$$.fragment,e),X(P.$$.fragment,e),X(N.$$.fragment,e),X(U.$$.fragment,e),X(K.$$.fragment,e),X(D.$$.fragment,e),X(O.$$.fragment,e),Ae=!0)},o(e){Y($.$$.fragment,e),Y(P.$$.fragment,e),Y(N.$$.fragment,e),Y(U.$$.fragment,e),Y(K.$$.fragment,e),Y(D.$$.fragment,e),Y(O.$$.fragment,e),Ae=!1},d(e){n(k),e&&n(V),e&&n(h),H($),e&&n(ye),e&&n(b),H(P),e&&n(ve),e&&n(y),e&&n(be),e&&n(J),e&&n(we),e&&n(G),e&&n(Te),e&&n(Q),e&&n(Le),e&&n(Z),e&&n(qe),H(N,e),e&&n(xe),e&&n(q),e&&n(ze),H(U,e),e&&n(Ee),e&&n(x),e&&n(Me),e&&n(v),e&&n($e),e&&n(w),H(K),e&&n(Pe),e&&n(m),H(D),H(O)}}}const kn={local:"mluke",sections:[{local:"overview",title:"Overview"},{local:"transformers.MLukeTokenizer",title:"MLukeTokenizer"}],title:"mLUKE"};function yn(Re,k,V){let{fw:h}=k;return Re.$$set=_=>{"fw"in _&&V(0,h=_.fw)},[h]}class qn extends un{constructor(k){super();mn(this,k,yn,gn,hn,{fw:0})}}export{qn as default,kn as metadata};
