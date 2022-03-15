import{S as tn,i as nn,s as on,e as o,k as p,w as E,t as r,M as sn,c as s,d as n,m,a as i,x as $,h as a,b as l,F as t,g as d,y as A,L as rn,q as P,o as N,B as I}from"../../chunks/vendor-6b77c823.js";import{D as xt}from"../../chunks/Docstring-abef54e3.js";import{C as en}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as zt}from"../../chunks/IconCopyLink-7a11ce68.js";function an(Se){let _,V,h,f,le,U,Ke,ce,De,ge,b,T,de,W,Re,pe,Fe,_e,k,Oe,S,Be,je,K,Xe,Ce,ke,J,Ye,ye,G,He,ve,Q,me,Ve,be,Z,Je,we,D,Te,L,Ge,ee,Qe,Ze,Le,R,qe,q,et,te,tt,nt,xe,y,ot,F,st,it,O,rt,at,ze,w,x,ue,B,lt,he,ct,Me,u,j,dt,g,pt,ne,mt,ut,oe,ht,ft,X,gt,_t,kt,C,yt,se,vt,bt,wt,z,Y,Tt,fe,Lt,qt,ie,H,Ee;return U=new zt({}),W=new zt({}),D=new en({props:{code:`from transformers import LukeModel

model = LukeModel.from_pretrained("studio-ousia/mluke-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeModel

model = LukeModel.from_pretrained(<span class="hljs-string">&quot;studio-ousia/mluke-base&quot;</span>)`}}),R=new en({props:{code:`from transformers import MLukeTokenizer

tokenizer = MLukeTokenizer.from_pretrained("studio-ousia/mluke-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MLukeTokenizer

tokenizer = MLukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/mluke-base&quot;</span>)`}}),B=new zt({}),j=new xt({props:{name:"class transformers.MLukeTokenizer",anchor:"transformers.MLukeTokenizer",parameters:[{name:"vocab_file",val:""},{name:"entity_vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"task",val:" = None"},{name:"max_entity_length",val:" = 32"},{name:"max_mention_length",val:" = 30"},{name:"entity_token_1",val:" = '<ent>'"},{name:"entity_token_2",val:" = '<ent2>'"},{name:"entity_unk_token",val:" = '[UNK]'"},{name:"entity_pad_token",val:" = '[PAD]'"},{name:"entity_mask_token",val:" = '[MASK]'"},{name:"entity_mask2_token",val:" = '[MASK2]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mluke/tokenization_mluke.py#L150",parametersDescription:[{anchor:"transformers.MLukeTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.MLukeTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}]}}),Y=new xt({props:{name:"__call__",anchor:"transformers.MLukeTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], NoneType] = None"},{name:"entity_spans",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entity_spans_pair",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entities",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"entities_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_entity_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": typing.Optional[bool] = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mluke/tokenization_mluke.py#L366",parametersDescription:[{anchor:"transformers.MLukeTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.MLukeTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/master/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.MLukeTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.MLukeTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/master/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.MLukeTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.MLukeTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/tokenizer#transformers.BatchEncoding"
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
  href="/docs/transformers/master/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),H=new xt({props:{name:"save_vocabulary",anchor:"transformers.MLukeTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mluke/tokenization_mluke.py#L1493"}}),{c(){_=o("meta"),V=p(),h=o("h1"),f=o("a"),le=o("span"),E(U.$$.fragment),Ke=p(),ce=o("span"),De=r("mLUKE"),ge=p(),b=o("h2"),T=o("a"),de=o("span"),E(W.$$.fragment),Re=p(),pe=o("span"),Fe=r("Overview"),_e=p(),k=o("p"),Oe=r("The mLUKE model was proposed in "),S=o("a"),Be=r("mLUKE: The Power of Entity Representations in Multilingual Pretrained Language Models"),je=r(` by Ryokan Ri, Ikuya Yamada, and Yoshimasa Tsuruoka. It\u2019s a multilingual extension
of the `),K=o("a"),Xe=r("LUKE model"),Ce=r(" trained on the basis of XLM-RoBERTa."),ke=p(),J=o("p"),Ye=r(`It is based on XLM-RoBERTa and adds entity embeddings, which helps improve performance on various downstream tasks
involving reasoning about entities such as named entity recognition, extractive question answering, relation
classification, cloze-style knowledge completion.`),ye=p(),G=o("p"),He=r("The abstract from the paper is the following:"),ve=p(),Q=o("p"),me=o("em"),Ve=r(`Recent studies have shown that multilingual pretrained language models can be effectively improved with cross-lingual
alignment information from Wikipedia entities. However, existing methods only exploit entity information in pretraining
and do not explicitly use entities in downstream tasks. In this study, we explore the effectiveness of leveraging
entity representations for downstream cross-lingual tasks. We train a multilingual language model with 24 languages
with entity representations and show the model consistently outperforms word-based pretrained models in various
cross-lingual transfer tasks. We also analyze the model and the key insight is that incorporating entity
representations into the input allows us to extract more language-agnostic features. We also evaluate the model with a
multilingual cloze prompt task with the mLAMA dataset. We show that entity-based prompt elicits correct factual
knowledge more likely than using only word representations.`),be=p(),Z=o("p"),Je=r("One can directly plug in the weights of mLUKE into a LUKE model, like so:"),we=p(),E(D.$$.fragment),Te=p(),L=o("p"),Ge=r("Note that mLUKE has its own tokenizer, "),ee=o("a"),Qe=r("MLukeTokenizer"),Ze=r(". You can initialize it as follows:"),Le=p(),E(R.$$.fragment),qe=p(),q=o("p"),et=r("As mLUKE\u2019s architecture is equivalent to that of LUKE, one can refer to "),te=o("a"),tt=r("LUKE\u2019s documentation page"),nt=r(` for all
tips, code examples and notebooks.`),xe=p(),y=o("p"),ot=r("This model was contributed by "),F=o("a"),st=r("ryo0634"),it=r(". The original code can be found "),O=o("a"),rt=r("here"),at=r("."),ze=p(),w=o("h2"),x=o("a"),ue=o("span"),E(B.$$.fragment),lt=p(),he=o("span"),ct=r("MLukeTokenizer"),Me=p(),u=o("div"),E(j.$$.fragment),dt=p(),g=o("p"),pt=r("Adapted from "),ne=o("a"),mt=r("XLMRobertaTokenizer"),ut=r(" and "),oe=o("a"),ht=r("LukeTokenizer"),ft=r(`. Based on
`),X=o("a"),gt=r("SentencePiece"),_t=r("."),kt=p(),C=o("p"),yt=r("This tokenizer inherits from "),se=o("a"),vt=r("PreTrainedTokenizer"),bt=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),wt=p(),z=o("div"),E(Y.$$.fragment),Tt=p(),fe=o("p"),Lt=r(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),qt=p(),ie=o("div"),E(H.$$.fragment),this.h()},l(e){const c=sn('[data-svelte="svelte-1phssyn"]',document.head);_=s(c,"META",{name:!0,content:!0}),c.forEach(n),V=m(e),h=s(e,"H1",{class:!0});var $e=i(h);f=s($e,"A",{id:!0,class:!0,href:!0});var Mt=i(f);le=s(Mt,"SPAN",{});var Et=i(le);$(U.$$.fragment,Et),Et.forEach(n),Mt.forEach(n),Ke=m($e),ce=s($e,"SPAN",{});var $t=i(ce);De=a($t,"mLUKE"),$t.forEach(n),$e.forEach(n),ge=m(e),b=s(e,"H2",{class:!0});var Ae=i(b);T=s(Ae,"A",{id:!0,class:!0,href:!0});var At=i(T);de=s(At,"SPAN",{});var Pt=i(de);$(W.$$.fragment,Pt),Pt.forEach(n),At.forEach(n),Re=m(Ae),pe=s(Ae,"SPAN",{});var Nt=i(pe);Fe=a(Nt,"Overview"),Nt.forEach(n),Ae.forEach(n),_e=m(e),k=s(e,"P",{});var re=i(k);Oe=a(re,"The mLUKE model was proposed in "),S=s(re,"A",{href:!0,rel:!0});var It=i(S);Be=a(It,"mLUKE: The Power of Entity Representations in Multilingual Pretrained Language Models"),It.forEach(n),je=a(re,` by Ryokan Ri, Ikuya Yamada, and Yoshimasa Tsuruoka. It\u2019s a multilingual extension
of the `),K=s(re,"A",{href:!0,rel:!0});var Ut=i(K);Xe=a(Ut,"LUKE model"),Ut.forEach(n),Ce=a(re," trained on the basis of XLM-RoBERTa."),re.forEach(n),ke=m(e),J=s(e,"P",{});var Wt=i(J);Ye=a(Wt,`It is based on XLM-RoBERTa and adds entity embeddings, which helps improve performance on various downstream tasks
involving reasoning about entities such as named entity recognition, extractive question answering, relation
classification, cloze-style knowledge completion.`),Wt.forEach(n),ye=m(e),G=s(e,"P",{});var St=i(G);He=a(St,"The abstract from the paper is the following:"),St.forEach(n),ve=m(e),Q=s(e,"P",{});var Kt=i(Q);me=s(Kt,"EM",{});var Dt=i(me);Ve=a(Dt,`Recent studies have shown that multilingual pretrained language models can be effectively improved with cross-lingual
alignment information from Wikipedia entities. However, existing methods only exploit entity information in pretraining
and do not explicitly use entities in downstream tasks. In this study, we explore the effectiveness of leveraging
entity representations for downstream cross-lingual tasks. We train a multilingual language model with 24 languages
with entity representations and show the model consistently outperforms word-based pretrained models in various
cross-lingual transfer tasks. We also analyze the model and the key insight is that incorporating entity
representations into the input allows us to extract more language-agnostic features. We also evaluate the model with a
multilingual cloze prompt task with the mLAMA dataset. We show that entity-based prompt elicits correct factual
knowledge more likely than using only word representations.`),Dt.forEach(n),Kt.forEach(n),be=m(e),Z=s(e,"P",{});var Rt=i(Z);Je=a(Rt,"One can directly plug in the weights of mLUKE into a LUKE model, like so:"),Rt.forEach(n),we=m(e),$(D.$$.fragment,e),Te=m(e),L=s(e,"P",{});var Pe=i(L);Ge=a(Pe,"Note that mLUKE has its own tokenizer, "),ee=s(Pe,"A",{href:!0});var Ft=i(ee);Qe=a(Ft,"MLukeTokenizer"),Ft.forEach(n),Ze=a(Pe,". You can initialize it as follows:"),Pe.forEach(n),Le=m(e),$(R.$$.fragment,e),qe=m(e),q=s(e,"P",{});var Ne=i(q);et=a(Ne,"As mLUKE\u2019s architecture is equivalent to that of LUKE, one can refer to "),te=s(Ne,"A",{href:!0});var Ot=i(te);tt=a(Ot,"LUKE\u2019s documentation page"),Ot.forEach(n),nt=a(Ne,` for all
tips, code examples and notebooks.`),Ne.forEach(n),xe=m(e),y=s(e,"P",{});var ae=i(y);ot=a(ae,"This model was contributed by "),F=s(ae,"A",{href:!0,rel:!0});var Bt=i(F);st=a(Bt,"ryo0634"),Bt.forEach(n),it=a(ae,". The original code can be found "),O=s(ae,"A",{href:!0,rel:!0});var jt=i(O);rt=a(jt,"here"),jt.forEach(n),at=a(ae,"."),ae.forEach(n),ze=m(e),w=s(e,"H2",{class:!0});var Ie=i(w);x=s(Ie,"A",{id:!0,class:!0,href:!0});var Xt=i(x);ue=s(Xt,"SPAN",{});var Ct=i(ue);$(B.$$.fragment,Ct),Ct.forEach(n),Xt.forEach(n),lt=m(Ie),he=s(Ie,"SPAN",{});var Yt=i(he);ct=a(Yt,"MLukeTokenizer"),Yt.forEach(n),Ie.forEach(n),Me=m(e),u=s(e,"DIV",{class:!0});var v=i(u);$(j.$$.fragment,v),dt=m(v),g=s(v,"P",{});var M=i(g);pt=a(M,"Adapted from "),ne=s(M,"A",{href:!0});var Ht=i(ne);mt=a(Ht,"XLMRobertaTokenizer"),Ht.forEach(n),ut=a(M," and "),oe=s(M,"A",{href:!0});var Vt=i(oe);ht=a(Vt,"LukeTokenizer"),Vt.forEach(n),ft=a(M,`. Based on
`),X=s(M,"A",{href:!0,rel:!0});var Jt=i(X);gt=a(Jt,"SentencePiece"),Jt.forEach(n),_t=a(M,"."),M.forEach(n),kt=m(v),C=s(v,"P",{});var Ue=i(C);yt=a(Ue,"This tokenizer inherits from "),se=s(Ue,"A",{href:!0});var Gt=i(se);vt=a(Gt,"PreTrainedTokenizer"),Gt.forEach(n),bt=a(Ue,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ue.forEach(n),wt=m(v),z=s(v,"DIV",{class:!0});var We=i(z);$(Y.$$.fragment,We),Tt=m(We),fe=s(We,"P",{});var Qt=i(fe);Lt=a(Qt,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),Qt.forEach(n),We.forEach(n),qt=m(v),ie=s(v,"DIV",{class:!0});var Zt=i(ie);$(H.$$.fragment,Zt),Zt.forEach(n),v.forEach(n),this.h()},h(){l(_,"name","hf:doc:metadata"),l(_,"content",JSON.stringify(ln)),l(f,"id","mluke"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#mluke"),l(h,"class","relative group"),l(T,"id","overview"),l(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(T,"href","#overview"),l(b,"class","relative group"),l(S,"href","https://arxiv.org/abs/2110.08151"),l(S,"rel","nofollow"),l(K,"href","https://arxiv.org/abs/2010.01057"),l(K,"rel","nofollow"),l(ee,"href","/docs/transformers/master/en/model_doc/mluke#transformers.MLukeTokenizer"),l(te,"href","luke"),l(F,"href","https://huggingface.co/ryo0634"),l(F,"rel","nofollow"),l(O,"href","https://github.com/studio-ousia/luke"),l(O,"rel","nofollow"),l(x,"id","transformers.MLukeTokenizer"),l(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(x,"href","#transformers.MLukeTokenizer"),l(w,"class","relative group"),l(ne,"href","/docs/transformers/master/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer"),l(oe,"href","/docs/transformers/master/en/model_doc/luke#transformers.LukeTokenizer"),l(X,"href","https://github.com/google/sentencepiece"),l(X,"rel","nofollow"),l(se,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(z,"class","docstring"),l(ie,"class","docstring"),l(u,"class","docstring")},m(e,c){t(document.head,_),d(e,V,c),d(e,h,c),t(h,f),t(f,le),A(U,le,null),t(h,Ke),t(h,ce),t(ce,De),d(e,ge,c),d(e,b,c),t(b,T),t(T,de),A(W,de,null),t(b,Re),t(b,pe),t(pe,Fe),d(e,_e,c),d(e,k,c),t(k,Oe),t(k,S),t(S,Be),t(k,je),t(k,K),t(K,Xe),t(k,Ce),d(e,ke,c),d(e,J,c),t(J,Ye),d(e,ye,c),d(e,G,c),t(G,He),d(e,ve,c),d(e,Q,c),t(Q,me),t(me,Ve),d(e,be,c),d(e,Z,c),t(Z,Je),d(e,we,c),A(D,e,c),d(e,Te,c),d(e,L,c),t(L,Ge),t(L,ee),t(ee,Qe),t(L,Ze),d(e,Le,c),A(R,e,c),d(e,qe,c),d(e,q,c),t(q,et),t(q,te),t(te,tt),t(q,nt),d(e,xe,c),d(e,y,c),t(y,ot),t(y,F),t(F,st),t(y,it),t(y,O),t(O,rt),t(y,at),d(e,ze,c),d(e,w,c),t(w,x),t(x,ue),A(B,ue,null),t(w,lt),t(w,he),t(he,ct),d(e,Me,c),d(e,u,c),A(j,u,null),t(u,dt),t(u,g),t(g,pt),t(g,ne),t(ne,mt),t(g,ut),t(g,oe),t(oe,ht),t(g,ft),t(g,X),t(X,gt),t(g,_t),t(u,kt),t(u,C),t(C,yt),t(C,se),t(se,vt),t(C,bt),t(u,wt),t(u,z),A(Y,z,null),t(z,Tt),t(z,fe),t(fe,Lt),t(u,qt),t(u,ie),A(H,ie,null),Ee=!0},p:rn,i(e){Ee||(P(U.$$.fragment,e),P(W.$$.fragment,e),P(D.$$.fragment,e),P(R.$$.fragment,e),P(B.$$.fragment,e),P(j.$$.fragment,e),P(Y.$$.fragment,e),P(H.$$.fragment,e),Ee=!0)},o(e){N(U.$$.fragment,e),N(W.$$.fragment,e),N(D.$$.fragment,e),N(R.$$.fragment,e),N(B.$$.fragment,e),N(j.$$.fragment,e),N(Y.$$.fragment,e),N(H.$$.fragment,e),Ee=!1},d(e){n(_),e&&n(V),e&&n(h),I(U),e&&n(ge),e&&n(b),I(W),e&&n(_e),e&&n(k),e&&n(ke),e&&n(J),e&&n(ye),e&&n(G),e&&n(ve),e&&n(Q),e&&n(be),e&&n(Z),e&&n(we),I(D,e),e&&n(Te),e&&n(L),e&&n(Le),I(R,e),e&&n(qe),e&&n(q),e&&n(xe),e&&n(y),e&&n(ze),e&&n(w),I(B),e&&n(Me),e&&n(u),I(j),I(Y),I(H)}}}const ln={local:"mluke",sections:[{local:"overview",title:"Overview"},{local:"transformers.MLukeTokenizer",title:"MLukeTokenizer"}],title:"mLUKE"};function cn(Se,_,V){let{fw:h}=_;return Se.$$set=f=>{"fw"in f&&V(0,h=f.fw)},[h]}class hn extends tn{constructor(_){super();nn(this,_,cn,an,on,{fw:0})}}export{hn as default,ln as metadata};
