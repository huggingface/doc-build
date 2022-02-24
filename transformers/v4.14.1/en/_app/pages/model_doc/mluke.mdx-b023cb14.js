import{S as mn,i as un,s as hn,e as o,k as p,w as B,t as i,M as fn,c as s,d as n,m,a,x as C,h as r,b as l,F as t,g as d,y as X,L as _n,q as Y,o as H,B as V}from"../../chunks/vendor-ab4e3193.js";import{D as dn}from"../../chunks/Docstring-b69c0bd4.js";import{C as pn}from"../../chunks/CodeBlock-516df0c5.js";import{I as Wt}from"../../chunks/IconCopyLink-d992940d.js";import"../../chunks/CopyButton-204b56db.js";function gn(De){let k,J,h,_,le,M,Fe,ce,Oe,ke,w,T,de,$,Be,pe,Ce,ye,y,Xe,A,Ye,He,P,Ve,Je,ve,G,Ge,we,Q,Qe,be,Z,me,Ze,Te,ee,et,Le,I,xe,L,tt,te,nt,ot,ze,N,Ee,x,st,ne,at,it,qe,v,rt,U,lt,ct,W,dt,pt,Me,b,z,ue,K,mt,he,ut,$e,u,S,ht,g,ft,oe,_t,gt,se,kt,yt,R,vt,wt,bt,j,Tt,ae,Lt,xt,zt,D,Et,F,qt,fe,Mt,$t,At,Pt,E,O,It,_e,Nt,Ut,ge,Ae;return M=new Wt({}),$=new Wt({}),I=new pn({props:{code:`from transformers import LukeModel

model = LukeModel.from_pretrained('studio-ousia/mluke-base'),`,highlighted:`from transformers import LukeModel

model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">LukeModel</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">studio</span>-<span class="hljs-params">ousia</span><span class="hljs-operator">/</span><span class="hljs-params">mluke</span>-<span class="hljs-params">base</span>&#x27;)</span>`}}),N=new pn({props:{code:`from transformers import MLukeTokenizer

tokenizer = MLukeTokenizer.from_pretrained('studio-ousia/mluke-base'),`,highlighted:`from transformers import MLukeTokenizer

tokenizer = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">MLukeTokenizer</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">studio</span>-<span class="hljs-params">ousia</span><span class="hljs-operator">/</span><span class="hljs-params">mluke</span>-<span class="hljs-params">base</span>&#x27;)</span>`}}),K=new Wt({}),S=new dn({props:{name:"class transformers.MLukeTokenizer",anchor:"transformers.MLukeTokenizer",parameters:[{name:"vocab_file",val:""},{name:"entity_vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"task",val:" = None"},{name:"max_entity_length",val:" = 32"},{name:"max_mention_length",val:" = 30"},{name:"entity_token_1",val:" = '<ent>'"},{name:"entity_token_2",val:" = '<ent2>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mluke/tokenization_mluke.py#L152",parametersDescription:[{anchor:"transformers.MLukeTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MLukeTokenizer.entity_vocab_file",description:`<strong>entity_vocab_file</strong> (<code>str</code>) &#x2014;
Path to the entity vocabulary file.`,name:"entity_vocab_file"},{anchor:"transformers.MLukeTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.`,name:"bos_token"}]}}),O=new dn({props:{name:"__call__",anchor:"transformers.MLukeTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], NoneType] = None"},{name:"entity_spans",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entity_spans_pair",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entities",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"entities_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_entity_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": typing.Optional[bool] = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mluke/tokenization_mluke.py#L343",parametersDescription:[{anchor:"transformers.MLukeTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence must be a string. Note that this
tokenizer does not support tokenization based on pretokenized strings.`,name:"text"},{anchor:"transformers.MLukeTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence must be a string. Note that this
tokenizer does not support tokenization based on pretokenized strings.`,name:"text_pair"},{anchor:"transformers.MLukeTokenizer.__call__.entity_spans",description:`<strong>entity_spans</strong> (<code>List[Tuple[int, int]]</code>, <code>List[List[Tuple[int, int]]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entity spans to be encoded. Each sequence consists of tuples each
with two integers denoting character-based start and end positions of entities. If you specify
<code>&quot;entity_classification&quot;</code> or <code>&quot;entity_pair_classification&quot;</code> as the <code>task</code> argument in the
constructor, the length of each sequence must be 1 or 2, respectively. If you specify <code>entities</code>, the
length of each sequence must be equal to the length of each sequence of <code>entities</code>.`,name:"entity_spans"},{anchor:"transformers.MLukeTokenizer.__call__.entity_spans_pair",description:`<strong>entity_spans_pair</strong> (<code>List[Tuple[int, int]]</code>, <code>List[List[Tuple[int, int]]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entity spans to be encoded. Each sequence consists of tuples each
with two integers denoting character-based start and end positions of entities. If you specify the
<code>task</code> argument in the constructor, this argument is ignored. If you specify <code>entities_pair</code>, the
length of each sequence must be equal to the length of each sequence of <code>entities_pair</code>.`,name:"entity_spans_pair"},{anchor:"transformers.MLukeTokenizer.__call__.entities",description:`<strong>entities</strong> (<code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entities to be encoded. Each sequence consists of strings
representing entities, i.e., special entities (e.g., [MASK]) or entity titles of Wikipedia (e.g., Los
Angeles). This argument is ignored if you specify the <code>task</code> argument in the constructor. The length
of each sequence must be equal to the length of each sequence of <code>entity_spans</code>. If you specify
<code>entity_spans</code> without specifying this argument, the entity sequence or the batch of entity sequences
is automatically constructed by filling it with the [MASK] entity.`,name:"entities"},{anchor:"transformers.MLukeTokenizer.__call__.entities_pair",description:`<strong>entities_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entities to be encoded. Each sequence consists of strings
representing entities, i.e., special entities (e.g., [MASK]) or entity titles of Wikipedia (e.g., Los
Angeles). This argument is ignored if you specify the <code>task</code> argument in the constructor. The length
of each sequence must be equal to the length of each sequence of <code>entity_spans_pair</code>. If you specify
<code>entity_spans_pair</code> without specifying this argument, the entity sequence or the batch of entity
sequences is automatically constructed by filling it with the [MASK] entity.`,name:"entities_pair"},{anchor:"transformers.MLukeTokenizer.__call__.max_entity_length",description:`<strong>max_entity_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum length of <code>entity_ids</code>.`,name:"max_entity_length"},{anchor:"transformers.MLukeTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.MLukeTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.14.1/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a
single sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of
different lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.MLukeTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument
<code>max_length</code> or to the maximum acceptable input length for the model if that argument is not
provided. This will truncate token by token, removing a token from the longest sequence in the pair
if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to
the maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with
sequence lengths greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.MLukeTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum
length is required by one of the truncation/padding parameters. If the model has no specific maximum
input length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.MLukeTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.MLukeTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.MLukeTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.MLukeTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.14.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is
raised instead of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.MLukeTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.MLukeTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from
<a href="/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using Python&#x2019;s tokenizer, this method will raise
<code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.MLukeTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.MLukeTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code>
or if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
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
(when <code>return_attention_mask=True</code> or if <em>\u201Centity_attention_mask\u201D</em> is in
<code>self.model_input_names</code>).</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),{c(){k=o("meta"),J=p(),h=o("h1"),_=o("a"),le=o("span"),B(M.$$.fragment),Fe=p(),ce=o("span"),Oe=i("mLUKE"),ke=p(),w=o("h2"),T=o("a"),de=o("span"),B($.$$.fragment),Be=p(),pe=o("span"),Ce=i("Overview"),ye=p(),y=o("p"),Xe=i("The mLUKE model was proposed in "),A=o("a"),Ye=i("mLUKE: The Power of Entity Representations in Multilingual Pretrained Language Models"),He=i(` by Ryokan Ri, Ikuya Yamada, and Yoshimasa Tsuruoka. It\u2019s a multilingual extension
of the `),P=o("a"),Ve=i("LUKE model"),Je=i(" trained on the basis of XLM-RoBERTa."),ve=p(),G=o("p"),Ge=i(`It is based on XLM-RoBERTa and adds entity embeddings, which helps improve performance on various downstream tasks
involving reasoning about entities such as named entity recognition, extractive question answering, relation
classification, cloze-style knowledge completion.`),we=p(),Q=o("p"),Qe=i("The abstract from the paper is the following:"),be=p(),Z=o("p"),me=o("em"),Ze=i(`Recent studies have shown that multilingual pretrained language models can be effectively improved with cross-lingual
alignment information from Wikipedia entities. However, existing methods only exploit entity information in pretraining
and do not explicitly use entities in downstream tasks. In this study, we explore the effectiveness of leveraging
entity representations for downstream cross-lingual tasks. We train a multilingual language model with 24 languages
with entity representations and show the model consistently outperforms word-based pretrained models in various
cross-lingual transfer tasks. We also analyze the model and the key insight is that incorporating entity
representations into the input allows us to extract more language-agnostic features. We also evaluate the model with a
multilingual cloze prompt task with the mLAMA dataset. We show that entity-based prompt elicits correct factual
knowledge more likely than using only word representations.`),Te=p(),ee=o("p"),et=i("One can directly plug in the weights of mLUKE into a LUKE model, like so:"),Le=p(),B(I.$$.fragment),xe=p(),L=o("p"),tt=i("Note that mLUKE has its own tokenizer, "),te=o("a"),nt=i("MLukeTokenizer"),ot=i(". You can initialize it as follows:"),ze=p(),B(N.$$.fragment),Ee=p(),x=o("p"),st=i("As mLUKE\u2019s architecture is equivalent to that of LUKE, one can refer to "),ne=o("a"),at=i("LUKE\u2019s documentation page"),it=i(` for all
tips, code examples and notebooks.`),qe=p(),v=o("p"),rt=i("This model was contributed by "),U=o("a"),lt=i("ryo0634"),ct=i(". The original code can be found "),W=o("a"),dt=i("here"),pt=i("."),Me=p(),b=o("h2"),z=o("a"),ue=o("span"),B(K.$$.fragment),mt=p(),he=o("span"),ut=i("MLukeTokenizer"),$e=p(),u=o("div"),B(S.$$.fragment),ht=p(),g=o("p"),ft=i("Adapted from "),oe=o("a"),_t=i("XLMRobertaTokenizer"),gt=i(" and "),se=o("a"),kt=i("LukeTokenizer"),yt=i(`. Based on
`),R=o("a"),vt=i("SentencePiece"),wt=i("."),bt=p(),j=o("p"),Tt=i("This tokenizer inherits from "),ae=o("a"),Lt=i("PreTrainedTokenizer"),xt=i(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),zt=p(),D=o("p"),Et=i(`Attributes:
sp`),F=o("em"),qt=i("model ("),fe=o("code"),Mt=i("SentencePieceProcessor"),$t=i(`):
The _SentencePiece`),At=i(" processor that is used for every conversion (string, tokens and IDs)."),Pt=p(),E=o("div"),B(O.$$.fragment),It=p(),_e=o("p"),Nt=i(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),Ut=p(),ge=o("div"),this.h()},l(e){const c=fn('[data-svelte="svelte-1phssyn"]',document.head);k=s(c,"META",{name:!0,content:!0}),c.forEach(n),J=m(e),h=s(e,"H1",{class:!0});var Pe=a(h);_=s(Pe,"A",{id:!0,class:!0,href:!0});var Kt=a(_);le=s(Kt,"SPAN",{});var St=a(le);C(M.$$.fragment,St),St.forEach(n),Kt.forEach(n),Fe=m(Pe),ce=s(Pe,"SPAN",{});var Rt=a(ce);Oe=r(Rt,"mLUKE"),Rt.forEach(n),Pe.forEach(n),ke=m(e),w=s(e,"H2",{class:!0});var Ie=a(w);T=s(Ie,"A",{id:!0,class:!0,href:!0});var jt=a(T);de=s(jt,"SPAN",{});var Dt=a(de);C($.$$.fragment,Dt),Dt.forEach(n),jt.forEach(n),Be=m(Ie),pe=s(Ie,"SPAN",{});var Ft=a(pe);Ce=r(Ft,"Overview"),Ft.forEach(n),Ie.forEach(n),ye=m(e),y=s(e,"P",{});var ie=a(y);Xe=r(ie,"The mLUKE model was proposed in "),A=s(ie,"A",{href:!0,rel:!0});var Ot=a(A);Ye=r(Ot,"mLUKE: The Power of Entity Representations in Multilingual Pretrained Language Models"),Ot.forEach(n),He=r(ie,` by Ryokan Ri, Ikuya Yamada, and Yoshimasa Tsuruoka. It\u2019s a multilingual extension
of the `),P=s(ie,"A",{href:!0,rel:!0});var Bt=a(P);Ve=r(Bt,"LUKE model"),Bt.forEach(n),Je=r(ie," trained on the basis of XLM-RoBERTa."),ie.forEach(n),ve=m(e),G=s(e,"P",{});var Ct=a(G);Ge=r(Ct,`It is based on XLM-RoBERTa and adds entity embeddings, which helps improve performance on various downstream tasks
involving reasoning about entities such as named entity recognition, extractive question answering, relation
classification, cloze-style knowledge completion.`),Ct.forEach(n),we=m(e),Q=s(e,"P",{});var Xt=a(Q);Qe=r(Xt,"The abstract from the paper is the following:"),Xt.forEach(n),be=m(e),Z=s(e,"P",{});var Yt=a(Z);me=s(Yt,"EM",{});var Ht=a(me);Ze=r(Ht,`Recent studies have shown that multilingual pretrained language models can be effectively improved with cross-lingual
alignment information from Wikipedia entities. However, existing methods only exploit entity information in pretraining
and do not explicitly use entities in downstream tasks. In this study, we explore the effectiveness of leveraging
entity representations for downstream cross-lingual tasks. We train a multilingual language model with 24 languages
with entity representations and show the model consistently outperforms word-based pretrained models in various
cross-lingual transfer tasks. We also analyze the model and the key insight is that incorporating entity
representations into the input allows us to extract more language-agnostic features. We also evaluate the model with a
multilingual cloze prompt task with the mLAMA dataset. We show that entity-based prompt elicits correct factual
knowledge more likely than using only word representations.`),Ht.forEach(n),Yt.forEach(n),Te=m(e),ee=s(e,"P",{});var Vt=a(ee);et=r(Vt,"One can directly plug in the weights of mLUKE into a LUKE model, like so:"),Vt.forEach(n),Le=m(e),C(I.$$.fragment,e),xe=m(e),L=s(e,"P",{});var Ne=a(L);tt=r(Ne,"Note that mLUKE has its own tokenizer, "),te=s(Ne,"A",{href:!0});var Jt=a(te);nt=r(Jt,"MLukeTokenizer"),Jt.forEach(n),ot=r(Ne,". You can initialize it as follows:"),Ne.forEach(n),ze=m(e),C(N.$$.fragment,e),Ee=m(e),x=s(e,"P",{});var Ue=a(x);st=r(Ue,"As mLUKE\u2019s architecture is equivalent to that of LUKE, one can refer to "),ne=s(Ue,"A",{href:!0});var Gt=a(ne);at=r(Gt,"LUKE\u2019s documentation page"),Gt.forEach(n),it=r(Ue,` for all
tips, code examples and notebooks.`),Ue.forEach(n),qe=m(e),v=s(e,"P",{});var re=a(v);rt=r(re,"This model was contributed by "),U=s(re,"A",{href:!0,rel:!0});var Qt=a(U);lt=r(Qt,"ryo0634"),Qt.forEach(n),ct=r(re,". The original code can be found "),W=s(re,"A",{href:!0,rel:!0});var Zt=a(W);dt=r(Zt,"here"),Zt.forEach(n),pt=r(re,"."),re.forEach(n),Me=m(e),b=s(e,"H2",{class:!0});var We=a(b);z=s(We,"A",{id:!0,class:!0,href:!0});var en=a(z);ue=s(en,"SPAN",{});var tn=a(ue);C(K.$$.fragment,tn),tn.forEach(n),en.forEach(n),mt=m(We),he=s(We,"SPAN",{});var nn=a(he);ut=r(nn,"MLukeTokenizer"),nn.forEach(n),We.forEach(n),$e=m(e),u=s(e,"DIV",{class:!0});var f=a(u);C(S.$$.fragment,f),ht=m(f),g=s(f,"P",{});var q=a(g);ft=r(q,"Adapted from "),oe=s(q,"A",{href:!0});var on=a(oe);_t=r(on,"XLMRobertaTokenizer"),on.forEach(n),gt=r(q," and "),se=s(q,"A",{href:!0});var sn=a(se);kt=r(sn,"LukeTokenizer"),sn.forEach(n),yt=r(q,`. Based on
`),R=s(q,"A",{href:!0,rel:!0});var an=a(R);vt=r(an,"SentencePiece"),an.forEach(n),wt=r(q,"."),q.forEach(n),bt=m(f),j=s(f,"P",{});var Ke=a(j);Tt=r(Ke,"This tokenizer inherits from "),ae=s(Ke,"A",{href:!0});var rn=a(ae);Lt=r(rn,"PreTrainedTokenizer"),rn.forEach(n),xt=r(Ke,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Ke.forEach(n),zt=m(f),D=s(f,"P",{});var Se=a(D);Et=r(Se,`Attributes:
sp`),F=s(Se,"EM",{});var Re=a(F);qt=r(Re,"model ("),fe=s(Re,"CODE",{});var ln=a(fe);Mt=r(ln,"SentencePieceProcessor"),ln.forEach(n),$t=r(Re,`):
The _SentencePiece`),Re.forEach(n),At=r(Se," processor that is used for every conversion (string, tokens and IDs)."),Se.forEach(n),Pt=m(f),E=s(f,"DIV",{class:!0});var je=a(E);C(O.$$.fragment,je),It=m(je),_e=s(je,"P",{});var cn=a(_e);Nt=r(cn,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),cn.forEach(n),je.forEach(n),Ut=m(f),ge=s(f,"DIV",{class:!0}),a(ge).forEach(n),f.forEach(n),this.h()},h(){l(k,"name","hf:doc:metadata"),l(k,"content",JSON.stringify(kn)),l(_,"id","mluke"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#mluke"),l(h,"class","relative group"),l(T,"id","overview"),l(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(T,"href","#overview"),l(w,"class","relative group"),l(A,"href","https://arxiv.org/abs/2110.08151"),l(A,"rel","nofollow"),l(P,"href","https://arxiv.org/abs/2010.01057"),l(P,"rel","nofollow"),l(te,"href","/docs/transformers/v4.14.1/en/model_doc/mluke#transformers.MLukeTokenizer"),l(ne,"href","/docs/transformers/v4.14.1/en/luke"),l(U,"href","https://huggingface.co/ryo0634"),l(U,"rel","nofollow"),l(W,"href","https://github.com/studio-ousia/luke"),l(W,"rel","nofollow"),l(z,"id","transformers.MLukeTokenizer"),l(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(z,"href","#transformers.MLukeTokenizer"),l(b,"class","relative group"),l(oe,"href","/docs/transformers/v4.14.1/en/model_doc/xlmroberta#transformers.XLMRobertaTokenizer"),l(se,"href","/docs/transformers/v4.14.1/en/model_doc/luke#transformers.LukeTokenizer"),l(R,"href","https://github.com/google/sentencepiece"),l(R,"rel","nofollow"),l(ae,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(E,"class","docstring"),l(ge,"class","docstring"),l(u,"class","docstring")},m(e,c){t(document.head,k),d(e,J,c),d(e,h,c),t(h,_),t(_,le),X(M,le,null),t(h,Fe),t(h,ce),t(ce,Oe),d(e,ke,c),d(e,w,c),t(w,T),t(T,de),X($,de,null),t(w,Be),t(w,pe),t(pe,Ce),d(e,ye,c),d(e,y,c),t(y,Xe),t(y,A),t(A,Ye),t(y,He),t(y,P),t(P,Ve),t(y,Je),d(e,ve,c),d(e,G,c),t(G,Ge),d(e,we,c),d(e,Q,c),t(Q,Qe),d(e,be,c),d(e,Z,c),t(Z,me),t(me,Ze),d(e,Te,c),d(e,ee,c),t(ee,et),d(e,Le,c),X(I,e,c),d(e,xe,c),d(e,L,c),t(L,tt),t(L,te),t(te,nt),t(L,ot),d(e,ze,c),X(N,e,c),d(e,Ee,c),d(e,x,c),t(x,st),t(x,ne),t(ne,at),t(x,it),d(e,qe,c),d(e,v,c),t(v,rt),t(v,U),t(U,lt),t(v,ct),t(v,W),t(W,dt),t(v,pt),d(e,Me,c),d(e,b,c),t(b,z),t(z,ue),X(K,ue,null),t(b,mt),t(b,he),t(he,ut),d(e,$e,c),d(e,u,c),X(S,u,null),t(u,ht),t(u,g),t(g,ft),t(g,oe),t(oe,_t),t(g,gt),t(g,se),t(se,kt),t(g,yt),t(g,R),t(R,vt),t(g,wt),t(u,bt),t(u,j),t(j,Tt),t(j,ae),t(ae,Lt),t(j,xt),t(u,zt),t(u,D),t(D,Et),t(D,F),t(F,qt),t(F,fe),t(fe,Mt),t(F,$t),t(D,At),t(u,Pt),t(u,E),X(O,E,null),t(E,It),t(E,_e),t(_e,Nt),t(u,Ut),t(u,ge),Ae=!0},p:_n,i(e){Ae||(Y(M.$$.fragment,e),Y($.$$.fragment,e),Y(I.$$.fragment,e),Y(N.$$.fragment,e),Y(K.$$.fragment,e),Y(S.$$.fragment,e),Y(O.$$.fragment,e),Ae=!0)},o(e){H(M.$$.fragment,e),H($.$$.fragment,e),H(I.$$.fragment,e),H(N.$$.fragment,e),H(K.$$.fragment,e),H(S.$$.fragment,e),H(O.$$.fragment,e),Ae=!1},d(e){n(k),e&&n(J),e&&n(h),V(M),e&&n(ke),e&&n(w),V($),e&&n(ye),e&&n(y),e&&n(ve),e&&n(G),e&&n(we),e&&n(Q),e&&n(be),e&&n(Z),e&&n(Te),e&&n(ee),e&&n(Le),V(I,e),e&&n(xe),e&&n(L),e&&n(ze),V(N,e),e&&n(Ee),e&&n(x),e&&n(qe),e&&n(v),e&&n(Me),e&&n(b),V(K),e&&n($e),e&&n(u),V(S),V(O)}}}const kn={local:"mluke",sections:[{local:"overview",title:"Overview"},{local:"transformers.MLukeTokenizer",title:"MLukeTokenizer"}],title:"mLUKE"};function yn(De,k,J){let{fw:h}=k;return De.$$set=_=>{"fw"in _&&J(0,h=_.fw)},[h]}class xn extends mn{constructor(k){super();un(this,k,yn,gn,hn,{fw:0})}}export{xn as default,kn as metadata};
