import{S as Vn,i as Wn,s as Un,e as o,k as p,w as m,t as a,L as Jn,c as r,d as s,m as d,a as n,x as u,h as i,b as l,J as t,g as h,y as f,K as Yn,q as g,o as _,B as k}from"../../chunks/vendor-b1433968.js";import{D as y}from"../../chunks/Docstring-ff504c58.js";import{C as Ot}from"../../chunks/CodeBlock-5eeb61a8.js";import{I as R}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-40b92840.js";function Qn(As){let X,We,M,E,dt,pe,Ss,ct,Is,Ht,x,ht,Fs,Gs,de,Bs,Rs,Vt,z,O,mt,ce,Os,ut,Hs,Wt,H,Vs,he,Ws,Us,Ut,Ue,Js,Jt,Je,Ys,Yt,Ye,ft,Qs,Qt,V,Zs,me,Ks,eo,Zt,T,W,gt,ue,to,_t,so,Kt,D,fe,oo,ge,ro,Qe,no,ao,es,C,U,kt,_e,io,vt,lo,ts,v,ke,po,q,co,Ze,ho,mo,Ke,uo,fo,ve,go,_o,ko,Pe,vo,et,Po,wo,bo,A,No,Pt,$o,Lo,wt,Mo,Eo,qo,j,we,yo,bt,Xo,jo,be,tt,xo,Nt,zo,To,st,Do,$t,Co,Ao,J,Ne,So,Lt,Io,Fo,Y,$e,Go,Mt,Bo,Ro,Q,Le,Oo,Me,Ho,Et,Vo,Wo,ss,S,Z,qt,Ee,Uo,yt,Jo,os,w,qe,Yo,ye,Qo,ot,Zo,Ko,er,Xt,tr,sr,Xe,rs,I,K,jt,je,or,xt,rr,ns,b,xe,nr,ze,ar,rt,ir,lr,pr,zt,dr,cr,Te,as,F,ee,Tt,De,hr,Dt,mr,is,N,Ce,ur,Ae,fr,nt,gr,_r,kr,Ct,vr,Pr,Se,ls,G,te,At,Ie,wr,St,br,ps,$,Fe,Nr,Ge,$r,at,Lr,Mr,Er,It,qr,yr,Be,ds,B,se,Ft,Re,Xr,Gt,jr,cs,L,Oe,xr,He,zr,it,Tr,Dr,Cr,Bt,Ar,Sr,Ve,hs;return pe=new R({}),ce=new R({}),ue=new R({}),fe=new y({props:{name:"class transformers.XLMProphetNetConfig",anchor:"transformers.XLMProphetNetConfig",parameters:[{name:"activation_dropout",val:" = 0.1"},{name:"activation_function",val:" = 'gelu'"},{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 1024"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"num_encoder_layers",val:" = 12"},{name:"num_encoder_attention_heads",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"num_decoder_layers",val:" = 12"},{name:"num_decoder_attention_heads",val:" = 16"},{name:"attention_dropout",val:" = 0.1"},{name:"dropout",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"init_std",val:" = 0.02"},{name:"is_encoder_decoder",val:" = True"},{name:"add_cross_attention",val:" = True"},{name:"decoder_start_token_id",val:" = 0"},{name:"ngram",val:" = 2"},{name:"num_buckets",val:" = 32"},{name:"relative_max_distance",val:" = 128"},{name:"disable_ngram_loss",val:" = False"},{name:"eps",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/xlm_prophetnet/configuration_xlm_prophetnet.py#L29"}}),_e=new R({}),ke=new y({props:{name:"class transformers.XLMProphetNetTokenizer",anchor:"transformers.XLMProphetNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '[SEP]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L57",parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMProphetNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMProphetNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLMProphetNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMProphetNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMProphetNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMProphetNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMProphetNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMProphetNetTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XLMProphetNetTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),we=new y({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L314",parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ne=new y({props:{name:"convert_tokens_to_string",anchor:"transformers.XLMProphetNetTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L292"}}),$e=new y({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L241",parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Le=new y({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L213",parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ee=new R({}),qe=new y({props:{name:"class transformers.XLMProphetNetModel",anchor:"transformers.XLMProphetNetModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L86"}}),Xe=new Ot({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetModel

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetModel.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state  # main stream hidden states
last_hidden_states_ngram = outputs.last_hidden_state_ngram  # predict hidden states,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state  <span class="hljs-comment"># main stream hidden states</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states_ngram = outputs.last_hidden_state_ngram  <span class="hljs-comment"># predict hidden states</span>`}}),je=new R({}),xe=new y({props:{name:"class transformers.XLMProphetNetEncoder",anchor:"transformers.XLMProphetNetEncoder",parameters:[{name:"config",val:": ProphetNetConfig"},{name:"word_embeddings",val:": Embedding = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L38"}}),Te=new Ot({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetEncoder
import torch

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetEncoder.from_pretrained("patrickvonplaten/xprophetnet-large-uncased-standalone")
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetEncoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetEncoder.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),De=new R({}),Ce=new y({props:{name:"class transformers.XLMProphetNetDecoder",anchor:"transformers.XLMProphetNetDecoder",parameters:[{name:"config",val:": ProphetNetConfig"},{name:"word_embeddings",val:": Embedding = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L61"}}),Se=new Ot({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetDecoder
import torch

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetDecoder.from_pretrained(
    "patrickvonplaten/xprophetnet-large-uncased-standalone", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetDecoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetDecoder.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ie=new R({}),Fe=new y({props:{name:"class transformers.XLMProphetNetForConditionalGeneration",anchor:"transformers.XLMProphetNetForConditionalGeneration",parameters:[{name:"config",val:": ProphetNetConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L112"}}),Be=new Ot({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetForConditionalGeneration

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetForConditionalGeneration.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

logits_next_token = outputs.logits  # logits to predict next token as usual
logits_ngram_next_tokens = outputs.logits_ngram  # logits to predict 2nd, 3rd, ... next tokens,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits_next_token = outputs.logits  <span class="hljs-comment"># logits to predict next token as usual</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_ngram_next_tokens = outputs.logits_ngram  <span class="hljs-comment"># logits to predict 2nd, 3rd, ... next tokens</span>`}}),Re=new R({}),Oe=new y({props:{name:"class transformers.XLMProphetNetForCausalLM",anchor:"transformers.XLMProphetNetForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L138"}}),Ve=new Ot({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetForCausalLM
import torch

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetForCausalLM.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits

# Model can also be used with EncoderDecoder framework
from transformers import EncoderDecoderModel, XLMProphetNetTokenizer, XLMRobertaTokenizer
import torch

tokenizer_enc = XLMRobertaTokenizer.from_pretrained("xlm-roberta-large")
tokenizer_dec = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained(
    "xlm-roberta-large", "microsoft/xprophetnet-large-wiki100-cased"
)

ARTICLE = (
    "the us state department said wednesday it had received no "
    "formal word from bolivia that it was expelling the us ambassador there "
    "but said the charges made against him are \`\` baseless ."
)
input_ids = tokenizer_enc(ARTICLE, return_tensors="pt").input_ids
labels = tokenizer_dec("us rejects charges against its ambassador in bolivia", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, decoder_input_ids=labels[:, :-1], labels=labels[:, 1:])

loss = outputs.loss,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetForCausalLM.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Model can also be used with EncoderDecoder framework</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, XLMProphetNetTokenizer, XLMRobertaTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_enc = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_dec = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;xlm-roberta-large&quot;</span>, <span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;the us state department said wednesday it had received no &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;formal word from bolivia that it was expelling the us ambassador there &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;but said the charges made against him are \`\` baseless .&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer_enc(ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer_dec(<span class="hljs-string">&quot;us rejects charges against its ambassador in bolivia&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=labels[:, :-<span class="hljs-number">1</span>], labels=labels[:, <span class="hljs-number">1</span>:])

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){X=o("meta"),We=p(),M=o("h1"),E=o("a"),dt=o("span"),m(pe.$$.fragment),Ss=p(),ct=o("span"),Is=a("XLM-ProphetNet"),Ht=p(),x=o("p"),ht=o("strong"),Fs=a("DISCLAIMER:"),Gs=a(" If you see something strange, file a "),de=o("a"),Bs=a("Github Issue"),Rs=a(` and assign
@patrickvonplaten`),Vt=p(),z=o("h2"),O=o("a"),mt=o("span"),m(ce.$$.fragment),Os=p(),ut=o("span"),Hs=a("Overview"),Wt=p(),H=o("p"),Vs=a("The XLM-ProphetNet model was proposed in "),he=o("a"),Ws=a("ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),Us=a(` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),Ut=p(),Ue=o("p"),Js=a(`XLM-ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of
just the next token. Its architecture is identical to ProhpetNet, but the model was trained on the multi-lingual
\u201Cwiki100\u201D Wikipedia dump.`),Jt=p(),Je=o("p"),Ys=a("The abstract from the paper is the following:"),Yt=p(),Ye=o("p"),ft=o("em"),Qs=a(`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),Qt=p(),V=o("p"),Zs=a("The Authors\u2019 code can be found "),me=o("a"),Ks=a("here"),eo=a("."),Zt=p(),T=o("h2"),W=o("a"),gt=o("span"),m(ue.$$.fragment),to=p(),_t=o("span"),so=a("XLMProphetNetConfig"),Kt=p(),D=o("div"),m(fe.$$.fragment),oo=p(),ge=o("p"),ro=a("This class overrides "),Qe=o("a"),no=a("ProphetNetConfig"),ao=a(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),es=p(),C=o("h2"),U=o("a"),kt=o("span"),m(_e.$$.fragment),io=p(),vt=o("span"),lo=a("XLMProphetNetTokenizer"),ts=p(),v=o("div"),m(ke.$$.fragment),po=p(),q=o("p"),co=a("Adapted from "),Ze=o("a"),ho=a("RobertaTokenizer"),mo=a(" and "),Ke=o("a"),uo=a("XLNetTokenizer"),fo=a(`. Based on
`),ve=o("a"),go=a("SentencePiece"),_o=a("."),ko=p(),Pe=o("p"),vo=a("This tokenizer inherits from "),et=o("a"),Po=a("PreTrainedTokenizer"),wo=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),bo=p(),A=o("p"),No=a(`Attributes:
sp_model (`),Pt=o("code"),$o=a("SentencePieceProcessor"),Lo=a(`):
The `),wt=o("em"),Mo=a("SentencePiece"),Eo=a(" processor that is used for every conversion (string, tokens and IDs)."),qo=p(),j=o("div"),m(we.$$.fragment),yo=p(),bt=o("p"),Xo=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A XLMProphetNet sequence has the following format:`),jo=p(),be=o("ul"),tt=o("li"),xo=a("single sequence: "),Nt=o("code"),zo=a("X [SEP]"),To=p(),st=o("li"),Do=a("pair of sequences: "),$t=o("code"),Co=a("A [SEP] B [SEP]"),Ao=p(),J=o("div"),m(Ne.$$.fragment),So=p(),Lt=o("p"),Io=a("Converts a sequence of tokens (strings for sub-words) in a single string."),Fo=p(),Y=o("div"),m($e.$$.fragment),Go=p(),Mt=o("p"),Bo=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLMProphetNet
does not make use of token type ids, therefore a list of zeros is returned.`),Ro=p(),Q=o("div"),m(Le.$$.fragment),Oo=p(),Me=o("p"),Ho=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Et=o("code"),Vo=a("prepare_for_model"),Wo=a(" method."),ss=p(),S=o("h2"),Z=o("a"),qt=o("span"),m(Ee.$$.fragment),Uo=p(),yt=o("span"),Jo=a("XLMProphetNetModel"),os=p(),w=o("div"),m(qe.$$.fragment),Yo=p(),ye=o("p"),Qo=a("This class overrides "),ot=o("a"),Zo=a("ProphetNetModel"),Ko=a(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),er=p(),Xt=o("p"),tr=a("Example:"),sr=p(),m(Xe.$$.fragment),rs=p(),I=o("h2"),K=o("a"),jt=o("span"),m(je.$$.fragment),or=p(),xt=o("span"),rr=a("XLMProphetNetEncoder"),ns=p(),b=o("div"),m(xe.$$.fragment),nr=p(),ze=o("p"),ar=a("This class overrides "),rt=o("a"),ir=a("ProphetNetEncoder"),lr=a(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),pr=p(),zt=o("p"),dr=a("Example:"),cr=p(),m(Te.$$.fragment),as=p(),F=o("h2"),ee=o("a"),Tt=o("span"),m(De.$$.fragment),hr=p(),Dt=o("span"),mr=a("XLMProphetNetDecoder"),is=p(),N=o("div"),m(Ce.$$.fragment),ur=p(),Ae=o("p"),fr=a("This class overrides "),nt=o("a"),gr=a("ProphetNetDecoder"),_r=a(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),kr=p(),Ct=o("p"),vr=a("Example:"),Pr=p(),m(Se.$$.fragment),ls=p(),G=o("h2"),te=o("a"),At=o("span"),m(Ie.$$.fragment),wr=p(),St=o("span"),br=a("XLMProphetNetForConditionalGeneration"),ps=p(),$=o("div"),m(Fe.$$.fragment),Nr=p(),Ge=o("p"),$r=a("This class overrides "),at=o("a"),Lr=a("ProphetNetForConditionalGeneration"),Mr=a(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Er=p(),It=o("p"),qr=a("Example:"),yr=p(),m(Be.$$.fragment),ds=p(),B=o("h2"),se=o("a"),Ft=o("span"),m(Re.$$.fragment),Xr=p(),Gt=o("span"),jr=a("XLMProphetNetForCausalLM"),cs=p(),L=o("div"),m(Oe.$$.fragment),xr=p(),He=o("p"),zr=a("This class overrides "),it=o("a"),Tr=a("ProphetNetForCausalLM"),Dr=a(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Cr=p(),Bt=o("p"),Ar=a("Example:"),Sr=p(),m(Ve.$$.fragment),this.h()},l(e){const c=Jn('[data-svelte="svelte-1phssyn"]',document.head);X=r(c,"META",{name:!0,content:!0}),c.forEach(s),We=d(e),M=r(e,"H1",{class:!0});var ms=n(M);E=r(ms,"A",{id:!0,class:!0,href:!0});var Gr=n(E);dt=r(Gr,"SPAN",{});var Br=n(dt);u(pe.$$.fragment,Br),Br.forEach(s),Gr.forEach(s),Ss=d(ms),ct=r(ms,"SPAN",{});var Rr=n(ct);Is=i(Rr,"XLM-ProphetNet"),Rr.forEach(s),ms.forEach(s),Ht=d(e),x=r(e,"P",{});var Rt=n(x);ht=r(Rt,"STRONG",{});var Or=n(ht);Fs=i(Or,"DISCLAIMER:"),Or.forEach(s),Gs=i(Rt," If you see something strange, file a "),de=r(Rt,"A",{href:!0,rel:!0});var Hr=n(de);Bs=i(Hr,"Github Issue"),Hr.forEach(s),Rs=i(Rt,` and assign
@patrickvonplaten`),Rt.forEach(s),Vt=d(e),z=r(e,"H2",{class:!0});var us=n(z);O=r(us,"A",{id:!0,class:!0,href:!0});var Vr=n(O);mt=r(Vr,"SPAN",{});var Wr=n(mt);u(ce.$$.fragment,Wr),Wr.forEach(s),Vr.forEach(s),Os=d(us),ut=r(us,"SPAN",{});var Ur=n(ut);Hs=i(Ur,"Overview"),Ur.forEach(s),us.forEach(s),Wt=d(e),H=r(e,"P",{});var fs=n(H);Vs=i(fs,"The XLM-ProphetNet model was proposed in "),he=r(fs,"A",{href:!0,rel:!0});var Jr=n(he);Ws=i(Jr,"ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),Jr.forEach(s),Us=i(fs,` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),fs.forEach(s),Ut=d(e),Ue=r(e,"P",{});var Yr=n(Ue);Js=i(Yr,`XLM-ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of
just the next token. Its architecture is identical to ProhpetNet, but the model was trained on the multi-lingual
\u201Cwiki100\u201D Wikipedia dump.`),Yr.forEach(s),Jt=d(e),Je=r(e,"P",{});var Qr=n(Je);Ys=i(Qr,"The abstract from the paper is the following:"),Qr.forEach(s),Yt=d(e),Ye=r(e,"P",{});var Zr=n(Ye);ft=r(Zr,"EM",{});var Kr=n(ft);Qs=i(Kr,`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),Kr.forEach(s),Zr.forEach(s),Qt=d(e),V=r(e,"P",{});var gs=n(V);Zs=i(gs,"The Authors\u2019 code can be found "),me=r(gs,"A",{href:!0,rel:!0});var en=n(me);Ks=i(en,"here"),en.forEach(s),eo=i(gs,"."),gs.forEach(s),Zt=d(e),T=r(e,"H2",{class:!0});var _s=n(T);W=r(_s,"A",{id:!0,class:!0,href:!0});var tn=n(W);gt=r(tn,"SPAN",{});var sn=n(gt);u(ue.$$.fragment,sn),sn.forEach(s),tn.forEach(s),to=d(_s),_t=r(_s,"SPAN",{});var on=n(_t);so=i(on,"XLMProphetNetConfig"),on.forEach(s),_s.forEach(s),Kt=d(e),D=r(e,"DIV",{class:!0});var ks=n(D);u(fe.$$.fragment,ks),oo=d(ks),ge=r(ks,"P",{});var vs=n(ge);ro=i(vs,"This class overrides "),Qe=r(vs,"A",{href:!0});var rn=n(Qe);no=i(rn,"ProphetNetConfig"),rn.forEach(s),ao=i(vs,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),vs.forEach(s),ks.forEach(s),es=d(e),C=r(e,"H2",{class:!0});var Ps=n(C);U=r(Ps,"A",{id:!0,class:!0,href:!0});var nn=n(U);kt=r(nn,"SPAN",{});var an=n(kt);u(_e.$$.fragment,an),an.forEach(s),nn.forEach(s),io=d(Ps),vt=r(Ps,"SPAN",{});var ln=n(vt);lo=i(ln,"XLMProphetNetTokenizer"),ln.forEach(s),Ps.forEach(s),ts=d(e),v=r(e,"DIV",{class:!0});var P=n(v);u(ke.$$.fragment,P),po=d(P),q=r(P,"P",{});var oe=n(q);co=i(oe,"Adapted from "),Ze=r(oe,"A",{href:!0});var pn=n(Ze);ho=i(pn,"RobertaTokenizer"),pn.forEach(s),mo=i(oe," and "),Ke=r(oe,"A",{href:!0});var dn=n(Ke);uo=i(dn,"XLNetTokenizer"),dn.forEach(s),fo=i(oe,`. Based on
`),ve=r(oe,"A",{href:!0,rel:!0});var cn=n(ve);go=i(cn,"SentencePiece"),cn.forEach(s),_o=i(oe,"."),oe.forEach(s),ko=d(P),Pe=r(P,"P",{});var ws=n(Pe);vo=i(ws,"This tokenizer inherits from "),et=r(ws,"A",{href:!0});var hn=n(et);Po=i(hn,"PreTrainedTokenizer"),hn.forEach(s),wo=i(ws,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ws.forEach(s),bo=d(P),A=r(P,"P",{});var lt=n(A);No=i(lt,`Attributes:
sp_model (`),Pt=r(lt,"CODE",{});var mn=n(Pt);$o=i(mn,"SentencePieceProcessor"),mn.forEach(s),Lo=i(lt,`):
The `),wt=r(lt,"EM",{});var un=n(wt);Mo=i(un,"SentencePiece"),un.forEach(s),Eo=i(lt," processor that is used for every conversion (string, tokens and IDs)."),lt.forEach(s),qo=d(P),j=r(P,"DIV",{class:!0});var pt=n(j);u(we.$$.fragment,pt),yo=d(pt),bt=r(pt,"P",{});var fn=n(bt);Xo=i(fn,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A XLMProphetNet sequence has the following format:`),fn.forEach(s),jo=d(pt),be=r(pt,"UL",{});var bs=n(be);tt=r(bs,"LI",{});var Ir=n(tt);xo=i(Ir,"single sequence: "),Nt=r(Ir,"CODE",{});var gn=n(Nt);zo=i(gn,"X [SEP]"),gn.forEach(s),Ir.forEach(s),To=d(bs),st=r(bs,"LI",{});var Fr=n(st);Do=i(Fr,"pair of sequences: "),$t=r(Fr,"CODE",{});var _n=n($t);Co=i(_n,"A [SEP] B [SEP]"),_n.forEach(s),Fr.forEach(s),bs.forEach(s),pt.forEach(s),Ao=d(P),J=r(P,"DIV",{class:!0});var Ns=n(J);u(Ne.$$.fragment,Ns),So=d(Ns),Lt=r(Ns,"P",{});var kn=n(Lt);Io=i(kn,"Converts a sequence of tokens (strings for sub-words) in a single string."),kn.forEach(s),Ns.forEach(s),Fo=d(P),Y=r(P,"DIV",{class:!0});var $s=n(Y);u($e.$$.fragment,$s),Go=d($s),Mt=r($s,"P",{});var vn=n(Mt);Bo=i(vn,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLMProphetNet
does not make use of token type ids, therefore a list of zeros is returned.`),vn.forEach(s),$s.forEach(s),Ro=d(P),Q=r(P,"DIV",{class:!0});var Ls=n(Q);u(Le.$$.fragment,Ls),Oo=d(Ls),Me=r(Ls,"P",{});var Ms=n(Me);Ho=i(Ms,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Et=r(Ms,"CODE",{});var Pn=n(Et);Vo=i(Pn,"prepare_for_model"),Pn.forEach(s),Wo=i(Ms," method."),Ms.forEach(s),Ls.forEach(s),P.forEach(s),ss=d(e),S=r(e,"H2",{class:!0});var Es=n(S);Z=r(Es,"A",{id:!0,class:!0,href:!0});var wn=n(Z);qt=r(wn,"SPAN",{});var bn=n(qt);u(Ee.$$.fragment,bn),bn.forEach(s),wn.forEach(s),Uo=d(Es),yt=r(Es,"SPAN",{});var Nn=n(yt);Jo=i(Nn,"XLMProphetNetModel"),Nn.forEach(s),Es.forEach(s),os=d(e),w=r(e,"DIV",{class:!0});var re=n(w);u(qe.$$.fragment,re),Yo=d(re),ye=r(re,"P",{});var qs=n(ye);Qo=i(qs,"This class overrides "),ot=r(qs,"A",{href:!0});var $n=n(ot);Zo=i($n,"ProphetNetModel"),$n.forEach(s),Ko=i(qs,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),qs.forEach(s),er=d(re),Xt=r(re,"P",{});var Ln=n(Xt);tr=i(Ln,"Example:"),Ln.forEach(s),sr=d(re),u(Xe.$$.fragment,re),re.forEach(s),rs=d(e),I=r(e,"H2",{class:!0});var ys=n(I);K=r(ys,"A",{id:!0,class:!0,href:!0});var Mn=n(K);jt=r(Mn,"SPAN",{});var En=n(jt);u(je.$$.fragment,En),En.forEach(s),Mn.forEach(s),or=d(ys),xt=r(ys,"SPAN",{});var qn=n(xt);rr=i(qn,"XLMProphetNetEncoder"),qn.forEach(s),ys.forEach(s),ns=d(e),b=r(e,"DIV",{class:!0});var ne=n(b);u(xe.$$.fragment,ne),nr=d(ne),ze=r(ne,"P",{});var Xs=n(ze);ar=i(Xs,"This class overrides "),rt=r(Xs,"A",{href:!0});var yn=n(rt);ir=i(yn,"ProphetNetEncoder"),yn.forEach(s),lr=i(Xs,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Xs.forEach(s),pr=d(ne),zt=r(ne,"P",{});var Xn=n(zt);dr=i(Xn,"Example:"),Xn.forEach(s),cr=d(ne),u(Te.$$.fragment,ne),ne.forEach(s),as=d(e),F=r(e,"H2",{class:!0});var js=n(F);ee=r(js,"A",{id:!0,class:!0,href:!0});var jn=n(ee);Tt=r(jn,"SPAN",{});var xn=n(Tt);u(De.$$.fragment,xn),xn.forEach(s),jn.forEach(s),hr=d(js),Dt=r(js,"SPAN",{});var zn=n(Dt);mr=i(zn,"XLMProphetNetDecoder"),zn.forEach(s),js.forEach(s),is=d(e),N=r(e,"DIV",{class:!0});var ae=n(N);u(Ce.$$.fragment,ae),ur=d(ae),Ae=r(ae,"P",{});var xs=n(Ae);fr=i(xs,"This class overrides "),nt=r(xs,"A",{href:!0});var Tn=n(nt);gr=i(Tn,"ProphetNetDecoder"),Tn.forEach(s),_r=i(xs,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),xs.forEach(s),kr=d(ae),Ct=r(ae,"P",{});var Dn=n(Ct);vr=i(Dn,"Example:"),Dn.forEach(s),Pr=d(ae),u(Se.$$.fragment,ae),ae.forEach(s),ls=d(e),G=r(e,"H2",{class:!0});var zs=n(G);te=r(zs,"A",{id:!0,class:!0,href:!0});var Cn=n(te);At=r(Cn,"SPAN",{});var An=n(At);u(Ie.$$.fragment,An),An.forEach(s),Cn.forEach(s),wr=d(zs),St=r(zs,"SPAN",{});var Sn=n(St);br=i(Sn,"XLMProphetNetForConditionalGeneration"),Sn.forEach(s),zs.forEach(s),ps=d(e),$=r(e,"DIV",{class:!0});var ie=n($);u(Fe.$$.fragment,ie),Nr=d(ie),Ge=r(ie,"P",{});var Ts=n(Ge);$r=i(Ts,"This class overrides "),at=r(Ts,"A",{href:!0});var In=n(at);Lr=i(In,"ProphetNetForConditionalGeneration"),In.forEach(s),Mr=i(Ts,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Ts.forEach(s),Er=d(ie),It=r(ie,"P",{});var Fn=n(It);qr=i(Fn,"Example:"),Fn.forEach(s),yr=d(ie),u(Be.$$.fragment,ie),ie.forEach(s),ds=d(e),B=r(e,"H2",{class:!0});var Ds=n(B);se=r(Ds,"A",{id:!0,class:!0,href:!0});var Gn=n(se);Ft=r(Gn,"SPAN",{});var Bn=n(Ft);u(Re.$$.fragment,Bn),Bn.forEach(s),Gn.forEach(s),Xr=d(Ds),Gt=r(Ds,"SPAN",{});var Rn=n(Gt);jr=i(Rn,"XLMProphetNetForCausalLM"),Rn.forEach(s),Ds.forEach(s),cs=d(e),L=r(e,"DIV",{class:!0});var le=n(L);u(Oe.$$.fragment,le),xr=d(le),He=r(le,"P",{});var Cs=n(He);zr=i(Cs,"This class overrides "),it=r(Cs,"A",{href:!0});var On=n(it);Tr=i(On,"ProphetNetForCausalLM"),On.forEach(s),Dr=i(Cs,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Cs.forEach(s),Cr=d(le),Bt=r(le,"P",{});var Hn=n(Bt);Ar=i(Hn,"Example:"),Hn.forEach(s),Sr=d(le),u(Ve.$$.fragment,le),le.forEach(s),this.h()},h(){l(X,"name","hf:doc:metadata"),l(X,"content",JSON.stringify(Zn)),l(E,"id","xlmprophetnet"),l(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(E,"href","#xlmprophetnet"),l(M,"class","relative group"),l(de,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(de,"rel","nofollow"),l(O,"id","overview"),l(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(O,"href","#overview"),l(z,"class","relative group"),l(he,"href","https://arxiv.org/abs/2001.04063"),l(he,"rel","nofollow"),l(me,"href","https://github.com/microsoft/ProphetNet"),l(me,"rel","nofollow"),l(W,"id","transformers.XLMProphetNetConfig"),l(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(W,"href","#transformers.XLMProphetNetConfig"),l(T,"class","relative group"),l(Qe,"href","/docs/transformers/v4.16.2/en/model_doc/prophetnet#transformers.ProphetNetConfig"),l(D,"class","docstring"),l(U,"id","transformers.XLMProphetNetTokenizer"),l(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(U,"href","#transformers.XLMProphetNetTokenizer"),l(C,"class","relative group"),l(Ze,"href","/docs/transformers/v4.16.2/en/model_doc/roberta#transformers.RobertaTokenizer"),l(Ke,"href","/docs/transformers/v4.16.2/en/model_doc/xlnet#transformers.XLNetTokenizer"),l(ve,"href","https://github.com/google/sentencepiece"),l(ve,"rel","nofollow"),l(et,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(j,"class","docstring"),l(J,"class","docstring"),l(Y,"class","docstring"),l(Q,"class","docstring"),l(v,"class","docstring"),l(Z,"id","transformers.XLMProphetNetModel"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.XLMProphetNetModel"),l(S,"class","relative group"),l(ot,"href","/docs/transformers/v4.16.2/en/model_doc/prophetnet#transformers.ProphetNetModel"),l(w,"class","docstring"),l(K,"id","transformers.XLMProphetNetEncoder"),l(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(K,"href","#transformers.XLMProphetNetEncoder"),l(I,"class","relative group"),l(rt,"href","/docs/transformers/v4.16.2/en/model_doc/prophetnet#transformers.ProphetNetEncoder"),l(b,"class","docstring"),l(ee,"id","transformers.XLMProphetNetDecoder"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#transformers.XLMProphetNetDecoder"),l(F,"class","relative group"),l(nt,"href","/docs/transformers/v4.16.2/en/model_doc/prophetnet#transformers.ProphetNetDecoder"),l(N,"class","docstring"),l(te,"id","transformers.XLMProphetNetForConditionalGeneration"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.XLMProphetNetForConditionalGeneration"),l(G,"class","relative group"),l(at,"href","/docs/transformers/v4.16.2/en/model_doc/prophetnet#transformers.ProphetNetForConditionalGeneration"),l($,"class","docstring"),l(se,"id","transformers.XLMProphetNetForCausalLM"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.XLMProphetNetForCausalLM"),l(B,"class","relative group"),l(it,"href","/docs/transformers/v4.16.2/en/model_doc/prophetnet#transformers.ProphetNetForCausalLM"),l(L,"class","docstring")},m(e,c){t(document.head,X),h(e,We,c),h(e,M,c),t(M,E),t(E,dt),f(pe,dt,null),t(M,Ss),t(M,ct),t(ct,Is),h(e,Ht,c),h(e,x,c),t(x,ht),t(ht,Fs),t(x,Gs),t(x,de),t(de,Bs),t(x,Rs),h(e,Vt,c),h(e,z,c),t(z,O),t(O,mt),f(ce,mt,null),t(z,Os),t(z,ut),t(ut,Hs),h(e,Wt,c),h(e,H,c),t(H,Vs),t(H,he),t(he,Ws),t(H,Us),h(e,Ut,c),h(e,Ue,c),t(Ue,Js),h(e,Jt,c),h(e,Je,c),t(Je,Ys),h(e,Yt,c),h(e,Ye,c),t(Ye,ft),t(ft,Qs),h(e,Qt,c),h(e,V,c),t(V,Zs),t(V,me),t(me,Ks),t(V,eo),h(e,Zt,c),h(e,T,c),t(T,W),t(W,gt),f(ue,gt,null),t(T,to),t(T,_t),t(_t,so),h(e,Kt,c),h(e,D,c),f(fe,D,null),t(D,oo),t(D,ge),t(ge,ro),t(ge,Qe),t(Qe,no),t(ge,ao),h(e,es,c),h(e,C,c),t(C,U),t(U,kt),f(_e,kt,null),t(C,io),t(C,vt),t(vt,lo),h(e,ts,c),h(e,v,c),f(ke,v,null),t(v,po),t(v,q),t(q,co),t(q,Ze),t(Ze,ho),t(q,mo),t(q,Ke),t(Ke,uo),t(q,fo),t(q,ve),t(ve,go),t(q,_o),t(v,ko),t(v,Pe),t(Pe,vo),t(Pe,et),t(et,Po),t(Pe,wo),t(v,bo),t(v,A),t(A,No),t(A,Pt),t(Pt,$o),t(A,Lo),t(A,wt),t(wt,Mo),t(A,Eo),t(v,qo),t(v,j),f(we,j,null),t(j,yo),t(j,bt),t(bt,Xo),t(j,jo),t(j,be),t(be,tt),t(tt,xo),t(tt,Nt),t(Nt,zo),t(be,To),t(be,st),t(st,Do),t(st,$t),t($t,Co),t(v,Ao),t(v,J),f(Ne,J,null),t(J,So),t(J,Lt),t(Lt,Io),t(v,Fo),t(v,Y),f($e,Y,null),t(Y,Go),t(Y,Mt),t(Mt,Bo),t(v,Ro),t(v,Q),f(Le,Q,null),t(Q,Oo),t(Q,Me),t(Me,Ho),t(Me,Et),t(Et,Vo),t(Me,Wo),h(e,ss,c),h(e,S,c),t(S,Z),t(Z,qt),f(Ee,qt,null),t(S,Uo),t(S,yt),t(yt,Jo),h(e,os,c),h(e,w,c),f(qe,w,null),t(w,Yo),t(w,ye),t(ye,Qo),t(ye,ot),t(ot,Zo),t(ye,Ko),t(w,er),t(w,Xt),t(Xt,tr),t(w,sr),f(Xe,w,null),h(e,rs,c),h(e,I,c),t(I,K),t(K,jt),f(je,jt,null),t(I,or),t(I,xt),t(xt,rr),h(e,ns,c),h(e,b,c),f(xe,b,null),t(b,nr),t(b,ze),t(ze,ar),t(ze,rt),t(rt,ir),t(ze,lr),t(b,pr),t(b,zt),t(zt,dr),t(b,cr),f(Te,b,null),h(e,as,c),h(e,F,c),t(F,ee),t(ee,Tt),f(De,Tt,null),t(F,hr),t(F,Dt),t(Dt,mr),h(e,is,c),h(e,N,c),f(Ce,N,null),t(N,ur),t(N,Ae),t(Ae,fr),t(Ae,nt),t(nt,gr),t(Ae,_r),t(N,kr),t(N,Ct),t(Ct,vr),t(N,Pr),f(Se,N,null),h(e,ls,c),h(e,G,c),t(G,te),t(te,At),f(Ie,At,null),t(G,wr),t(G,St),t(St,br),h(e,ps,c),h(e,$,c),f(Fe,$,null),t($,Nr),t($,Ge),t(Ge,$r),t(Ge,at),t(at,Lr),t(Ge,Mr),t($,Er),t($,It),t(It,qr),t($,yr),f(Be,$,null),h(e,ds,c),h(e,B,c),t(B,se),t(se,Ft),f(Re,Ft,null),t(B,Xr),t(B,Gt),t(Gt,jr),h(e,cs,c),h(e,L,c),f(Oe,L,null),t(L,xr),t(L,He),t(He,zr),t(He,it),t(it,Tr),t(He,Dr),t(L,Cr),t(L,Bt),t(Bt,Ar),t(L,Sr),f(Ve,L,null),hs=!0},p:Yn,i(e){hs||(g(pe.$$.fragment,e),g(ce.$$.fragment,e),g(ue.$$.fragment,e),g(fe.$$.fragment,e),g(_e.$$.fragment,e),g(ke.$$.fragment,e),g(we.$$.fragment,e),g(Ne.$$.fragment,e),g($e.$$.fragment,e),g(Le.$$.fragment,e),g(Ee.$$.fragment,e),g(qe.$$.fragment,e),g(Xe.$$.fragment,e),g(je.$$.fragment,e),g(xe.$$.fragment,e),g(Te.$$.fragment,e),g(De.$$.fragment,e),g(Ce.$$.fragment,e),g(Se.$$.fragment,e),g(Ie.$$.fragment,e),g(Fe.$$.fragment,e),g(Be.$$.fragment,e),g(Re.$$.fragment,e),g(Oe.$$.fragment,e),g(Ve.$$.fragment,e),hs=!0)},o(e){_(pe.$$.fragment,e),_(ce.$$.fragment,e),_(ue.$$.fragment,e),_(fe.$$.fragment,e),_(_e.$$.fragment,e),_(ke.$$.fragment,e),_(we.$$.fragment,e),_(Ne.$$.fragment,e),_($e.$$.fragment,e),_(Le.$$.fragment,e),_(Ee.$$.fragment,e),_(qe.$$.fragment,e),_(Xe.$$.fragment,e),_(je.$$.fragment,e),_(xe.$$.fragment,e),_(Te.$$.fragment,e),_(De.$$.fragment,e),_(Ce.$$.fragment,e),_(Se.$$.fragment,e),_(Ie.$$.fragment,e),_(Fe.$$.fragment,e),_(Be.$$.fragment,e),_(Re.$$.fragment,e),_(Oe.$$.fragment,e),_(Ve.$$.fragment,e),hs=!1},d(e){s(X),e&&s(We),e&&s(M),k(pe),e&&s(Ht),e&&s(x),e&&s(Vt),e&&s(z),k(ce),e&&s(Wt),e&&s(H),e&&s(Ut),e&&s(Ue),e&&s(Jt),e&&s(Je),e&&s(Yt),e&&s(Ye),e&&s(Qt),e&&s(V),e&&s(Zt),e&&s(T),k(ue),e&&s(Kt),e&&s(D),k(fe),e&&s(es),e&&s(C),k(_e),e&&s(ts),e&&s(v),k(ke),k(we),k(Ne),k($e),k(Le),e&&s(ss),e&&s(S),k(Ee),e&&s(os),e&&s(w),k(qe),k(Xe),e&&s(rs),e&&s(I),k(je),e&&s(ns),e&&s(b),k(xe),k(Te),e&&s(as),e&&s(F),k(De),e&&s(is),e&&s(N),k(Ce),k(Se),e&&s(ls),e&&s(G),k(Ie),e&&s(ps),e&&s($),k(Fe),k(Be),e&&s(ds),e&&s(B),k(Re),e&&s(cs),e&&s(L),k(Oe),k(Ve)}}}const Zn={local:"xlmprophetnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMProphetNetConfig",title:"XLMProphetNetConfig"},{local:"transformers.XLMProphetNetTokenizer",title:"XLMProphetNetTokenizer"},{local:"transformers.XLMProphetNetModel",title:"XLMProphetNetModel"},{local:"transformers.XLMProphetNetEncoder",title:"XLMProphetNetEncoder"},{local:"transformers.XLMProphetNetDecoder",title:"XLMProphetNetDecoder"},{local:"transformers.XLMProphetNetForConditionalGeneration",title:"XLMProphetNetForConditionalGeneration"},{local:"transformers.XLMProphetNetForCausalLM",title:"XLMProphetNetForCausalLM"}],title:"XLM-ProphetNet"};function Kn(As,X,We){let{fw:M}=X;return As.$$set=E=>{"fw"in E&&We(0,M=E.fw)},[M]}class na extends Vn{constructor(X){super();Wn(this,X,Kn,Qn,Un,{fw:0})}}export{na as default,Zn as metadata};
