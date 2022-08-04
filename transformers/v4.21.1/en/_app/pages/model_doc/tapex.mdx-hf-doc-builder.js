import{S as Fo,i as Co,s as No,e as o,k as d,w as v,t as r,M as Io,c as n,d as a,m as p,a as s,x as k,h as i,b as c,G as t,g as h,y as T,L as Xo,q as w,o as y,B as x,v as Bo}from"../../chunks/vendor-hf-doc-builder.js";import{D as Wa}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ra}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as _t}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Do(Ma){let q,Me,A,S,ye,W,bt,xe,vt,Ue,z,L,qe,R,kt,Ae,Tt,Ge,F,wt,M,yt,xt,Oe,ne,qt,He,f,se,U,At,zt,Et,re,G,jt,Pt,$t,ie,O,St,Lt,Ft,le,H,Ct,Nt,Ve,ce,It,Je,de,ze,Xt,Ze,pe,Bt,Ke,g,Ee,Dt,Qt,je,Wt,Rt,E,Mt,Pe,Ut,Gt,$e,Ot,Ht,Vt,j,Jt,Se,Zt,Kt,Le,Yt,ea,Ye,P,C,Fe,V,ta,Ce,aa,et,_,oa,he,na,sa,ue,ra,ia,me,la,ca,tt,J,at,N,da,fe,pa,ha,ot,Z,nt,b,ua,ge,ma,fa,_e,ga,_a,st,K,rt,$,I,Ne,Y,ba,Ie,va,it,u,ee,ka,Xe,Ta,wa,Be,ya,xa,De,qa,Aa,Qe,za,Ea,We,ja,Pa,te,$a,be,Sa,La,Fa,X,ae,Ca,Re,Na,Ia,ve,oe,lt;return W=new _t({}),R=new _t({}),V=new _t({}),J=new Ra({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import pandas as pd

tokenizer = AutoTokenizer.from_pretrained("microsoft/tapex-large-finetuned-wtq")
model = AutoModelForSeq2SeqLM.from_pretrained("microsoft/tapex-large-finetuned-wtq")

# prepare table + question
data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
table = pd.DataFrame.from_dict(data)
question = "how many movies does Leonardo Di Caprio have?"

encoding = tokenizer(table, question, return_tensors="pt")

# let the model generate an answer autoregressively
outputs = model.generate(**encoding)

# decode back to text
predicted_answer = tokenizer.batch_decode(outputs, skip_special_tokens=True)[0]
print(predicted_answer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSeq2SeqLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/tapex-large-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;microsoft/tapex-large-finetuned-wtq&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare table + question</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;how many movies does Leonardo Di Caprio have?&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(table, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let the model generate an answer autoregressively</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(**encoding)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># decode back to text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer = tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(predicted_answer)
<span class="hljs-number">53</span>`}}),Z=new Ra({props:{code:`# prepare table + question
data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
table = pd.DataFrame.from_dict(data)
questions = [
    "how many movies does Leonardo Di Caprio have?",
    "which actor has 69 movies?",
    "what's the first name of the actor who has 87 movies?",
]
encoding = tokenizer(table, questions, padding=True, return_tensors="pt")

# let the model generate an answer autoregressively
outputs = model.generate(**encoding)

# decode back to text
tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare table + question</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>questions = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;how many movies does Leonardo Di Caprio have?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;which actor has 69 movies?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;what&#x27;s the first name of the actor who has 87 movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(table, questions, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let the model generate an answer autoregressively</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(**encoding)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># decode back to text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27; 53&#x27;</span>, <span class="hljs-string">&#x27; george clooney&#x27;</span>, <span class="hljs-string">&#x27; brad pitt&#x27;</span>]`}}),K=new Ra({props:{code:`from transformers import AutoTokenizer, AutoModelForSequenceClassification

tokenizer = AutoTokenizer.from_pretrained("microsoft/tapex-large-finetuned-tabfact")
model = AutoModelForSequenceClassification.from_pretrained("microsoft/tapex-large-finetuned-tabfact")

# prepare table + sentence
data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
table = pd.DataFrame.from_dict(data)
sentence = "George Clooney has 30 movies"

encoding = tokenizer(table, sentence, return_tensors="pt")

# forward pass
outputs = model(**encoding)

# print prediction
predicted_class_idx = outputs.logits[0].argmax(dim=0).item()
print(model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/tapex-large-finetuned-tabfact&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/tapex-large-finetuned-tabfact&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare table + sentence</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>sentence = <span class="hljs-string">&quot;George Clooney has 30 movies&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(table, sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># print prediction</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = outputs.logits[<span class="hljs-number">0</span>].argmax(dim=<span class="hljs-number">0</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_class_idx])
Refused`}}),Y=new _t({}),ee=new Wa({props:{name:"class transformers.TapexTokenizer",anchor:"transformers.TapexTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"do_lower_case",val:" = True"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"max_cell_length",val:" = 15"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapexTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.TapexTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.TapexTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.TapexTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.TapexTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.TapexTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.TapexTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.TapexTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.TapexTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.TapexTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.TapexTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.TapexTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.TapexTokenizer.max_cell_length",description:`<strong>max_cell_length</strong> (<code>int</code>, <em>optional</em>, defaults to 15) &#x2014;
Maximum number of characters per cell when linearizing a table. If this number is exceeded, truncation
takes place.`,name:"max_cell_length"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/tapex/tokenization_tapex.py#L201"}}),ae=new Wa({props:{name:"__call__",anchor:"transformers.TapexTokenizer.__call__",parameters:[{name:"table",val:": typing.Union[ForwardRef('pd.DataFrame'), typing.List[ForwardRef('pd.DataFrame')]] = None"},{name:"query",val:": typing.Union[str, typing.List[str], NoneType] = None"},{name:"answer",val:": typing.Union[str, typing.List[str]] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapexTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>, <code>List[pd.DataFrame]</code>) &#x2014;
Table(s) containing tabular data.`,name:"table"},{anchor:"transformers.TapexTokenizer.__call__.query",description:`<strong>query</strong> (<code>str</code> or <code>List[str]</code>, <em>optional</em>) &#x2014;
Sentence or batch of sentences related to one or more table(s) to be encoded. Note that the number of
sentences must match the number of tables.`,name:"query"},{anchor:"transformers.TapexTokenizer.__call__.answer",description:`<strong>answer</strong> (<code>str</code> or <code>List[str]</code>, <em>optional</em>) &#x2014;
Optionally, the corresponding answer to the questions as supervision.`,name:"answer"},{anchor:"transformers.TapexTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapexTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.TapexTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.TapexTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.TapexTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.TapexTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.TapexTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapexTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.TapexTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapexTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.TapexTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code>, <code>TapexTruncationStrategy</code> or <a href="/docs/transformers/v4.21.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, &#x2014;
<em>optional</em>, defaults to <code>False</code>):</p>
<p>Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>&apos;drop_rows_to_fit&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will truncate
row by row, removing rows from the table.</li>
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
</ul>`,name:"truncation"},{anchor:"transformers.TapexTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.TapexTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.TapexTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapexTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/tapex/tokenization_tapex.py#L523"}}),oe=new Wa({props:{name:"save_vocabulary",anchor:"transformers.TapexTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/tapex/tokenization_tapex.py#L494"}}),{c(){q=o("meta"),Me=d(),A=o("h1"),S=o("a"),ye=o("span"),v(W.$$.fragment),bt=d(),xe=o("span"),vt=r("TAPEX"),Ue=d(),z=o("h2"),L=o("a"),qe=o("span"),v(R.$$.fragment),kt=d(),Ae=o("span"),Tt=r("Overview"),Ge=d(),F=o("p"),wt=r("The TAPEX model was proposed in "),M=o("a"),yt=r("TAPEX: Table Pre-training via Learning a Neural SQL Executor"),xt=r(` by Qian Liu,
Bei Chen, Jiaqi Guo, Morteza Ziyadi, Zeqi Lin, Weizhu Chen, Jian-Guang Lou. TAPEX pre-trains a BART model to solve synthetic SQL queries, after
which it can be fine-tuned to answer natural language questions related to tabular data, as well as performing table fact checking.`),Oe=d(),ne=o("p"),qt=r("TAPEX has been fine-tuned on several datasets:"),He=d(),f=o("ul"),se=o("li"),U=o("a"),At=r("SQA"),zt=r(" (Sequential Question Answering by Microsoft)"),Et=d(),re=o("li"),G=o("a"),jt=r("WTQ"),Pt=r(" (Wiki Table Questions by Stanford University)"),$t=d(),ie=o("li"),O=o("a"),St=r("WikiSQL"),Lt=r(" (by Salesforce)"),Ft=d(),le=o("li"),H=o("a"),Ct=r("TabFact"),Nt=r(" (by USCB NLP Lab)."),Ve=d(),ce=o("p"),It=r("The abstract from the paper is the following:"),Je=d(),de=o("p"),ze=o("em"),Xt=r(`Recent progress in language model pre-training has achieved a great success via leveraging large-scale unstructured textual data. However, it is
still a challenge to apply pre-training on structured tabular data due to the absence of large-scale high-quality tabular data. In this paper, we
propose TAPEX to show that table pre-training can be achieved by learning a neural SQL executor over a synthetic corpus, which is obtained by automatically
synthesizing executable SQL queries and their execution outputs. TAPEX addresses the data scarcity challenge via guiding the language model to mimic a SQL
executor on the diverse, large-scale and high-quality synthetic corpus. We evaluate TAPEX on four benchmark datasets. Experimental results demonstrate that
TAPEX outperforms previous table pre-training approaches by a large margin and achieves new state-of-the-art results on all of them. This includes improvements
on the weakly-supervised WikiSQL denotation accuracy to 89.5% (+2.3%), the WikiTableQuestions denotation accuracy to 57.5% (+4.8%), the SQA denotation accuracy
to 74.5% (+3.5%), and the TabFact accuracy to 84.2% (+3.2%). To our knowledge, this is the first work to exploit table pre-training via synthetic executable programs
and to achieve new state-of-the-art results on various downstream tasks.`),Ze=d(),pe=o("p"),Bt=r("Tips:"),Ke=d(),g=o("ul"),Ee=o("li"),Dt=r("TAPEX is a generative (seq2seq) model. One can directly plug in the weights of TAPEX into a BART model."),Qt=d(),je=o("li"),Wt=r("TAPEX has checkpoints on the hub that are either pre-trained only, or fine-tuned on WTQ, SQA, WikiSQL and TabFact."),Rt=d(),E=o("li"),Mt=r("Sentences + tables are presented to the model as "),Pe=o("code"),Ut=r('sentence + " " + linearized table'),Gt=r(`. The linearized table has the following format:
`),$e=o("code"),Ot=r("col: col1 | col2 | col 3 row 1 : val1 | val2 | val3 row 2 : ..."),Ht=r("."),Vt=d(),j=o("li"),Jt=r(`TAPEX has its own tokenizer, that allows to prepare all data for the model easily. One can pass Pandas DataFrames and strings to the tokenizer,
and it will automatically create the `),Se=o("code"),Zt=r("input_ids"),Kt=r(" and "),Le=o("code"),Yt=r("attention_mask"),ea=r(" (as shown in the usage examples below)."),Ye=d(),P=o("h2"),C=o("a"),Fe=o("span"),v(V.$$.fragment),ta=d(),Ce=o("span"),aa=r("Usage: inference"),et=d(),_=o("p"),oa=r(`Below, we illustrate how to use TAPEX for table question answering. As one can see, one can directly plug in the weights of TAPEX into a BART model.
We use the `),he=o("a"),na=r("Auto API"),sa=r(", which will automatically instantiate the appropriate tokenizer ("),ue=o("a"),ra=r("TapexTokenizer"),ia=r(") and model ("),me=o("a"),la=r("BartForConditionalGeneration"),ca=r(`) for us,
based on the configuration file of the checkpoint on the hub.`),tt=d(),v(J.$$.fragment),at=d(),N=o("p"),da=r("Note that "),fe=o("a"),pa=r("TapexTokenizer"),ha=r(` also supports batched inference. Hence, one can provide a batch of different tables/questions, or a batch of a single table
and multiple questions, or a batch of a single query and multiple tables. Let\u2019s illustrate this:`),ot=d(),v(Z.$$.fragment),nt=d(),b=o("p"),ua=r(`In case one wants to do table verification (i.e. the task of determining whether a given sentence is supported or refuted by the contents
of a table), one can instantiate a `),ge=o("a"),ma=r("BartForSequenceClassification"),fa=r(` model. TAPEX has checkpoints on the hub fine-tuned on TabFact, an important
benchmark for table fact checking (it achieves 84% accuracy). The code example below again leverages the `),_e=o("a"),ga=r("Auto API"),_a=r("."),st=d(),v(K.$$.fragment),rt=d(),$=o("h2"),I=o("a"),Ne=o("span"),v(Y.$$.fragment),ba=d(),Ie=o("span"),va=r("TapexTokenizer"),it=d(),u=o("div"),v(ee.$$.fragment),ka=d(),Xe=o("p"),Ta=r("Construct a TAPEX tokenizer. Based on byte-level Byte-Pair-Encoding (BPE)."),wa=d(),Be=o("p"),ya=r(`This tokenizer can be used to flatten one or more table(s) and concatenate them with one or more related sentences
to be used by TAPEX models. The format that the TAPEX tokenizer creates is the following:`),xa=d(),De=o("p"),qa=r("sentence col: col1 | col2 | col 3 row 1 : val1 | val2 | val3 row 2 : \u2026"),Aa=d(),Qe=o("p"),za=r(`The tokenizer supports a single table + single query, a single table and multiple queries (in which case the table
will be duplicated for every query), a single query and multiple tables (in which case the query will be duplicated
for every table), and multiple tables and queries. In other words, you can provide a batch of tables + questions to
the tokenizer for instance to prepare them for the model.`),Ea=d(),We=o("p"),ja=r("Tokenization itself is based on the BPE algorithm. It is identical to the one used by BART, RoBERTa and GPT-2."),Pa=d(),te=o("p"),$a=r("This tokenizer inherits from "),be=o("a"),Sa=r("PreTrainedTokenizer"),La=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Fa=d(),X=o("div"),v(ae.$$.fragment),Ca=d(),Re=o("p"),Na=r("Main method to tokenize and prepare for the model one or several table-sequence pair(s)."),Ia=d(),ve=o("div"),v(oe.$$.fragment),this.h()},l(e){const l=Io('[data-svelte="svelte-1phssyn"]',document.head);q=n(l,"META",{name:!0,content:!0}),l.forEach(a),Me=p(e),A=n(e,"H1",{class:!0});var ct=s(A);S=n(ct,"A",{id:!0,class:!0,href:!0});var Ua=s(S);ye=n(Ua,"SPAN",{});var Ga=s(ye);k(W.$$.fragment,Ga),Ga.forEach(a),Ua.forEach(a),bt=p(ct),xe=n(ct,"SPAN",{});var Oa=s(xe);vt=i(Oa,"TAPEX"),Oa.forEach(a),ct.forEach(a),Ue=p(e),z=n(e,"H2",{class:!0});var dt=s(z);L=n(dt,"A",{id:!0,class:!0,href:!0});var Ha=s(L);qe=n(Ha,"SPAN",{});var Va=s(qe);k(R.$$.fragment,Va),Va.forEach(a),Ha.forEach(a),kt=p(dt),Ae=n(dt,"SPAN",{});var Ja=s(Ae);Tt=i(Ja,"Overview"),Ja.forEach(a),dt.forEach(a),Ge=p(e),F=n(e,"P",{});var pt=s(F);wt=i(pt,"The TAPEX model was proposed in "),M=n(pt,"A",{href:!0,rel:!0});var Za=s(M);yt=i(Za,"TAPEX: Table Pre-training via Learning a Neural SQL Executor"),Za.forEach(a),xt=i(pt,` by Qian Liu,
Bei Chen, Jiaqi Guo, Morteza Ziyadi, Zeqi Lin, Weizhu Chen, Jian-Guang Lou. TAPEX pre-trains a BART model to solve synthetic SQL queries, after
which it can be fine-tuned to answer natural language questions related to tabular data, as well as performing table fact checking.`),pt.forEach(a),Oe=p(e),ne=n(e,"P",{});var Ka=s(ne);qt=i(Ka,"TAPEX has been fine-tuned on several datasets:"),Ka.forEach(a),He=p(e),f=n(e,"UL",{});var B=s(f);se=n(B,"LI",{});var Xa=s(se);U=n(Xa,"A",{href:!0,rel:!0});var Ya=s(U);At=i(Ya,"SQA"),Ya.forEach(a),zt=i(Xa," (Sequential Question Answering by Microsoft)"),Xa.forEach(a),Et=p(B),re=n(B,"LI",{});var Ba=s(re);G=n(Ba,"A",{href:!0,rel:!0});var eo=s(G);jt=i(eo,"WTQ"),eo.forEach(a),Pt=i(Ba," (Wiki Table Questions by Stanford University)"),Ba.forEach(a),$t=p(B),ie=n(B,"LI",{});var Da=s(ie);O=n(Da,"A",{href:!0,rel:!0});var to=s(O);St=i(to,"WikiSQL"),to.forEach(a),Lt=i(Da," (by Salesforce)"),Da.forEach(a),Ft=p(B),le=n(B,"LI",{});var Qa=s(le);H=n(Qa,"A",{href:!0,rel:!0});var ao=s(H);Ct=i(ao,"TabFact"),ao.forEach(a),Nt=i(Qa," (by USCB NLP Lab)."),Qa.forEach(a),B.forEach(a),Ve=p(e),ce=n(e,"P",{});var oo=s(ce);It=i(oo,"The abstract from the paper is the following:"),oo.forEach(a),Je=p(e),de=n(e,"P",{});var no=s(de);ze=n(no,"EM",{});var so=s(ze);Xt=i(so,`Recent progress in language model pre-training has achieved a great success via leveraging large-scale unstructured textual data. However, it is
still a challenge to apply pre-training on structured tabular data due to the absence of large-scale high-quality tabular data. In this paper, we
propose TAPEX to show that table pre-training can be achieved by learning a neural SQL executor over a synthetic corpus, which is obtained by automatically
synthesizing executable SQL queries and their execution outputs. TAPEX addresses the data scarcity challenge via guiding the language model to mimic a SQL
executor on the diverse, large-scale and high-quality synthetic corpus. We evaluate TAPEX on four benchmark datasets. Experimental results demonstrate that
TAPEX outperforms previous table pre-training approaches by a large margin and achieves new state-of-the-art results on all of them. This includes improvements
on the weakly-supervised WikiSQL denotation accuracy to 89.5% (+2.3%), the WikiTableQuestions denotation accuracy to 57.5% (+4.8%), the SQA denotation accuracy
to 74.5% (+3.5%), and the TabFact accuracy to 84.2% (+3.2%). To our knowledge, this is the first work to exploit table pre-training via synthetic executable programs
and to achieve new state-of-the-art results on various downstream tasks.`),so.forEach(a),no.forEach(a),Ze=p(e),pe=n(e,"P",{});var ro=s(pe);Bt=i(ro,"Tips:"),ro.forEach(a),Ke=p(e),g=n(e,"UL",{});var D=s(g);Ee=n(D,"LI",{});var io=s(Ee);Dt=i(io,"TAPEX is a generative (seq2seq) model. One can directly plug in the weights of TAPEX into a BART model."),io.forEach(a),Qt=p(D),je=n(D,"LI",{});var lo=s(je);Wt=i(lo,"TAPEX has checkpoints on the hub that are either pre-trained only, or fine-tuned on WTQ, SQA, WikiSQL and TabFact."),lo.forEach(a),Rt=p(D),E=n(D,"LI",{});var ke=s(E);Mt=i(ke,"Sentences + tables are presented to the model as "),Pe=n(ke,"CODE",{});var co=s(Pe);Ut=i(co,'sentence + " " + linearized table'),co.forEach(a),Gt=i(ke,`. The linearized table has the following format:
`),$e=n(ke,"CODE",{});var po=s($e);Ot=i(po,"col: col1 | col2 | col 3 row 1 : val1 | val2 | val3 row 2 : ..."),po.forEach(a),Ht=i(ke,"."),ke.forEach(a),Vt=p(D),j=n(D,"LI",{});var Te=s(j);Jt=i(Te,`TAPEX has its own tokenizer, that allows to prepare all data for the model easily. One can pass Pandas DataFrames and strings to the tokenizer,
and it will automatically create the `),Se=n(Te,"CODE",{});var ho=s(Se);Zt=i(ho,"input_ids"),ho.forEach(a),Kt=i(Te," and "),Le=n(Te,"CODE",{});var uo=s(Le);Yt=i(uo,"attention_mask"),uo.forEach(a),ea=i(Te," (as shown in the usage examples below)."),Te.forEach(a),D.forEach(a),Ye=p(e),P=n(e,"H2",{class:!0});var ht=s(P);C=n(ht,"A",{id:!0,class:!0,href:!0});var mo=s(C);Fe=n(mo,"SPAN",{});var fo=s(Fe);k(V.$$.fragment,fo),fo.forEach(a),mo.forEach(a),ta=p(ht),Ce=n(ht,"SPAN",{});var go=s(Ce);aa=i(go,"Usage: inference"),go.forEach(a),ht.forEach(a),et=p(e),_=n(e,"P",{});var Q=s(_);oa=i(Q,`Below, we illustrate how to use TAPEX for table question answering. As one can see, one can directly plug in the weights of TAPEX into a BART model.
We use the `),he=n(Q,"A",{href:!0});var _o=s(he);na=i(_o,"Auto API"),_o.forEach(a),sa=i(Q,", which will automatically instantiate the appropriate tokenizer ("),ue=n(Q,"A",{href:!0});var bo=s(ue);ra=i(bo,"TapexTokenizer"),bo.forEach(a),ia=i(Q,") and model ("),me=n(Q,"A",{href:!0});var vo=s(me);la=i(vo,"BartForConditionalGeneration"),vo.forEach(a),ca=i(Q,`) for us,
based on the configuration file of the checkpoint on the hub.`),Q.forEach(a),tt=p(e),k(J.$$.fragment,e),at=p(e),N=n(e,"P",{});var ut=s(N);da=i(ut,"Note that "),fe=n(ut,"A",{href:!0});var ko=s(fe);pa=i(ko,"TapexTokenizer"),ko.forEach(a),ha=i(ut,` also supports batched inference. Hence, one can provide a batch of different tables/questions, or a batch of a single table
and multiple questions, or a batch of a single query and multiple tables. Let\u2019s illustrate this:`),ut.forEach(a),ot=p(e),k(Z.$$.fragment,e),nt=p(e),b=n(e,"P",{});var we=s(b);ua=i(we,`In case one wants to do table verification (i.e. the task of determining whether a given sentence is supported or refuted by the contents
of a table), one can instantiate a `),ge=n(we,"A",{href:!0});var To=s(ge);ma=i(To,"BartForSequenceClassification"),To.forEach(a),fa=i(we,` model. TAPEX has checkpoints on the hub fine-tuned on TabFact, an important
benchmark for table fact checking (it achieves 84% accuracy). The code example below again leverages the `),_e=n(we,"A",{href:!0});var wo=s(_e);ga=i(wo,"Auto API"),wo.forEach(a),_a=i(we,"."),we.forEach(a),st=p(e),k(K.$$.fragment,e),rt=p(e),$=n(e,"H2",{class:!0});var mt=s($);I=n(mt,"A",{id:!0,class:!0,href:!0});var yo=s(I);Ne=n(yo,"SPAN",{});var xo=s(Ne);k(Y.$$.fragment,xo),xo.forEach(a),yo.forEach(a),ba=p(mt),Ie=n(mt,"SPAN",{});var qo=s(Ie);va=i(qo,"TapexTokenizer"),qo.forEach(a),mt.forEach(a),it=p(e),u=n(e,"DIV",{class:!0});var m=s(u);k(ee.$$.fragment,m),ka=p(m),Xe=n(m,"P",{});var Ao=s(Xe);Ta=i(Ao,"Construct a TAPEX tokenizer. Based on byte-level Byte-Pair-Encoding (BPE)."),Ao.forEach(a),wa=p(m),Be=n(m,"P",{});var zo=s(Be);ya=i(zo,`This tokenizer can be used to flatten one or more table(s) and concatenate them with one or more related sentences
to be used by TAPEX models. The format that the TAPEX tokenizer creates is the following:`),zo.forEach(a),xa=p(m),De=n(m,"P",{});var Eo=s(De);qa=i(Eo,"sentence col: col1 | col2 | col 3 row 1 : val1 | val2 | val3 row 2 : \u2026"),Eo.forEach(a),Aa=p(m),Qe=n(m,"P",{});var jo=s(Qe);za=i(jo,`The tokenizer supports a single table + single query, a single table and multiple queries (in which case the table
will be duplicated for every query), a single query and multiple tables (in which case the query will be duplicated
for every table), and multiple tables and queries. In other words, you can provide a batch of tables + questions to
the tokenizer for instance to prepare them for the model.`),jo.forEach(a),Ea=p(m),We=n(m,"P",{});var Po=s(We);ja=i(Po,"Tokenization itself is based on the BPE algorithm. It is identical to the one used by BART, RoBERTa and GPT-2."),Po.forEach(a),Pa=p(m),te=n(m,"P",{});var ft=s(te);$a=i(ft,"This tokenizer inherits from "),be=n(ft,"A",{href:!0});var $o=s(be);Sa=i($o,"PreTrainedTokenizer"),$o.forEach(a),La=i(ft,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ft.forEach(a),Fa=p(m),X=n(m,"DIV",{class:!0});var gt=s(X);k(ae.$$.fragment,gt),Ca=p(gt),Re=n(gt,"P",{});var So=s(Re);Na=i(So,"Main method to tokenize and prepare for the model one or several table-sequence pair(s)."),So.forEach(a),gt.forEach(a),Ia=p(m),ve=n(m,"DIV",{class:!0});var Lo=s(ve);k(oe.$$.fragment,Lo),Lo.forEach(a),m.forEach(a),this.h()},h(){c(q,"name","hf:doc:metadata"),c(q,"content",JSON.stringify(Qo)),c(S,"id","tapex"),c(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(S,"href","#tapex"),c(A,"class","relative group"),c(L,"id","overview"),c(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(L,"href","#overview"),c(z,"class","relative group"),c(M,"href","https://arxiv.org/abs/2107.07653"),c(M,"rel","nofollow"),c(U,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),c(U,"rel","nofollow"),c(G,"href","https://github.com/ppasupat/WikiTableQuestions"),c(G,"rel","nofollow"),c(O,"href","https://github.com/salesforce/WikiSQL"),c(O,"rel","nofollow"),c(H,"href","https://tabfact.github.io/"),c(H,"rel","nofollow"),c(C,"id","usage-inference"),c(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(C,"href","#usage-inference"),c(P,"class","relative group"),c(he,"href","auto"),c(ue,"href","/docs/transformers/v4.21.1/en/model_doc/tapex#transformers.TapexTokenizer"),c(me,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(fe,"href","/docs/transformers/v4.21.1/en/model_doc/tapex#transformers.TapexTokenizer"),c(ge,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartForSequenceClassification"),c(_e,"href","auto"),c(I,"id","transformers.TapexTokenizer"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#transformers.TapexTokenizer"),c($,"class","relative group"),c(be,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,l){t(document.head,q),h(e,Me,l),h(e,A,l),t(A,S),t(S,ye),T(W,ye,null),t(A,bt),t(A,xe),t(xe,vt),h(e,Ue,l),h(e,z,l),t(z,L),t(L,qe),T(R,qe,null),t(z,kt),t(z,Ae),t(Ae,Tt),h(e,Ge,l),h(e,F,l),t(F,wt),t(F,M),t(M,yt),t(F,xt),h(e,Oe,l),h(e,ne,l),t(ne,qt),h(e,He,l),h(e,f,l),t(f,se),t(se,U),t(U,At),t(se,zt),t(f,Et),t(f,re),t(re,G),t(G,jt),t(re,Pt),t(f,$t),t(f,ie),t(ie,O),t(O,St),t(ie,Lt),t(f,Ft),t(f,le),t(le,H),t(H,Ct),t(le,Nt),h(e,Ve,l),h(e,ce,l),t(ce,It),h(e,Je,l),h(e,de,l),t(de,ze),t(ze,Xt),h(e,Ze,l),h(e,pe,l),t(pe,Bt),h(e,Ke,l),h(e,g,l),t(g,Ee),t(Ee,Dt),t(g,Qt),t(g,je),t(je,Wt),t(g,Rt),t(g,E),t(E,Mt),t(E,Pe),t(Pe,Ut),t(E,Gt),t(E,$e),t($e,Ot),t(E,Ht),t(g,Vt),t(g,j),t(j,Jt),t(j,Se),t(Se,Zt),t(j,Kt),t(j,Le),t(Le,Yt),t(j,ea),h(e,Ye,l),h(e,P,l),t(P,C),t(C,Fe),T(V,Fe,null),t(P,ta),t(P,Ce),t(Ce,aa),h(e,et,l),h(e,_,l),t(_,oa),t(_,he),t(he,na),t(_,sa),t(_,ue),t(ue,ra),t(_,ia),t(_,me),t(me,la),t(_,ca),h(e,tt,l),T(J,e,l),h(e,at,l),h(e,N,l),t(N,da),t(N,fe),t(fe,pa),t(N,ha),h(e,ot,l),T(Z,e,l),h(e,nt,l),h(e,b,l),t(b,ua),t(b,ge),t(ge,ma),t(b,fa),t(b,_e),t(_e,ga),t(b,_a),h(e,st,l),T(K,e,l),h(e,rt,l),h(e,$,l),t($,I),t(I,Ne),T(Y,Ne,null),t($,ba),t($,Ie),t(Ie,va),h(e,it,l),h(e,u,l),T(ee,u,null),t(u,ka),t(u,Xe),t(Xe,Ta),t(u,wa),t(u,Be),t(Be,ya),t(u,xa),t(u,De),t(De,qa),t(u,Aa),t(u,Qe),t(Qe,za),t(u,Ea),t(u,We),t(We,ja),t(u,Pa),t(u,te),t(te,$a),t(te,be),t(be,Sa),t(te,La),t(u,Fa),t(u,X),T(ae,X,null),t(X,Ca),t(X,Re),t(Re,Na),t(u,Ia),t(u,ve),T(oe,ve,null),lt=!0},p:Xo,i(e){lt||(w(W.$$.fragment,e),w(R.$$.fragment,e),w(V.$$.fragment,e),w(J.$$.fragment,e),w(Z.$$.fragment,e),w(K.$$.fragment,e),w(Y.$$.fragment,e),w(ee.$$.fragment,e),w(ae.$$.fragment,e),w(oe.$$.fragment,e),lt=!0)},o(e){y(W.$$.fragment,e),y(R.$$.fragment,e),y(V.$$.fragment,e),y(J.$$.fragment,e),y(Z.$$.fragment,e),y(K.$$.fragment,e),y(Y.$$.fragment,e),y(ee.$$.fragment,e),y(ae.$$.fragment,e),y(oe.$$.fragment,e),lt=!1},d(e){a(q),e&&a(Me),e&&a(A),x(W),e&&a(Ue),e&&a(z),x(R),e&&a(Ge),e&&a(F),e&&a(Oe),e&&a(ne),e&&a(He),e&&a(f),e&&a(Ve),e&&a(ce),e&&a(Je),e&&a(de),e&&a(Ze),e&&a(pe),e&&a(Ke),e&&a(g),e&&a(Ye),e&&a(P),x(V),e&&a(et),e&&a(_),e&&a(tt),x(J,e),e&&a(at),e&&a(N),e&&a(ot),x(Z,e),e&&a(nt),e&&a(b),e&&a(st),x(K,e),e&&a(rt),e&&a($),x(Y),e&&a(it),e&&a(u),x(ee),x(ae),x(oe)}}}const Qo={local:"tapex",sections:[{local:"overview",title:"Overview"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.TapexTokenizer",title:"TapexTokenizer"}],title:"TAPEX"};function Wo(Ma){return Bo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Oo extends Fo{constructor(q){super();Co(this,q,Wo,Do,No,{})}}export{Oo as default,Qo as metadata};
