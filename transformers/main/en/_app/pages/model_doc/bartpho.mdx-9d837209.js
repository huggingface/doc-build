import{S as jo,i as Do,s as So,e as n,k as c,w as _,t as r,M as Mo,c as s,d as o,m as d,a,x as k,h as i,b as p,F as t,g as h,y as b,L as Io,q as v,o as T,B as w,v as No}from"../../chunks/vendor-6b77c823.js";import{D as Ae}from"../../chunks/Docstring-90e3aa51.js";import{C as Lo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as eo}from"../../chunks/IconCopyLink-7a11ce68.js";function Co(to){let y,$e,q,$,me,D,et,ue,tt,Ee,B,E,fe,S,ot,ge,nt,Re,R,st,M,at,rt,xe,Z,it,Pe,ee,_e,lt,Le,te,pt,je,I,De,oe,ct,Se,ne,N,dt,se,ht,mt,Me,C,Ie,ae,ke,ut,Ne,f,ft,O,gt,_t,F,kt,bt,Ce,z,x,be,V,vt,ve,Tt,Oe,m,X,wt,A,yt,re,qt,Bt,W,zt,At,$t,U,Et,ie,Rt,xt,Pt,g,G,Lt,Te,jt,Dt,H,le,St,we,Mt,It,pe,Nt,ye,Ct,Ot,P,K,Ft,qe,Vt,Xt,L,Q,Wt,Be,Ut,Gt,j,J,Ht,Y,Kt,ze,Qt,Jt,Fe;return D=new eo({}),S=new eo({}),I=new Lo({props:{code:`import torch
from transformers import AutoModel, AutoTokenizer

bartpho = AutoModel.from_pretrained("vinai/bartpho-syllable")

tokenizer = AutoTokenizer.from_pretrained("vinai/bartpho-syllable")

line = "Ch\xFAng t\xF4i l\xE0 nh\u1EEFng nghi\xEAn c\u1EE9u vi\xEAn."

input_ids = tokenizer(line, return_tensors="pt")

with torch.no_grad():
    features = bartpho(**input_ids)  # Models outputs are now tuples

# With TensorFlow 2.0+:
from transformers import TFAutoModel

bartpho = TFAutoModel.from_pretrained("vinai/bartpho-syllable")
input_ids = tokenizer(line, return_tensors="tf")
features = bartpho(**input_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>bartpho = AutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;Ch\xFAng t\xF4i l\xE0 nh\u1EEFng nghi\xEAn c\u1EE9u vi\xEAn.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(line, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    features = bartpho(**input_ids)  <span class="hljs-comment"># Models outputs are now tuples</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With TensorFlow 2.0+:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModel

<span class="hljs-meta">&gt;&gt;&gt; </span>bartpho = TFAutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(line, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>features = bartpho(**input_ids)`}}),C=new Lo({props:{code:`from transformers import MBartForConditionalGeneration

bartpho = MBartForConditionalGeneration.from_pretrained("vinai/bartpho-syllable")
TXT = "Ch\xFAng t\xF4i l\xE0 <mask> nghi\xEAn c\u1EE9u vi\xEAn."
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]
logits = bartpho(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)
print(tokenizer.decode(predictions).split())`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>bartpho = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;Ch\xFAng t\xF4i l\xE0 &lt;mask&gt; nghi\xEAn c\u1EE9u vi\xEAn.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = bartpho(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(predictions).split())`}}),V=new eo({}),X=new Ae({props:{name:"class transformers.BartphoTokenizer",anchor:"transformers.BartphoTokenizer",parameters:[{name:"vocab_file",val:""},{name:"monolingual_vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartphoTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file. This vocabulary is the pre-trained SentencePiece model available from the
multilingual XLM-RoBERTa, also used in mBART, consisting of 250K types.`,name:"vocab_file"},{anchor:"transformers.BartphoTokenizer.monolingual_vocab_file",description:`<strong>monolingual_vocab_file</strong> (<code>str</code>) &#x2014;
Path to the monolingual vocabulary file. This monolingual vocabulary consists of Vietnamese-specialized
types extracted from the multilingual vocabulary vocab_file of 250K types.`,name:"monolingual_vocab_file"},{anchor:"transformers.BartphoTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartphoTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartphoTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartphoTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartphoTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartphoTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartphoTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartphoTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.BartphoTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.BartphoTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bartpho/tokenization_bartpho.py#L46"}}),G=new Ae({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bartpho/tokenization_bartpho.py#L193",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),K=new Ae({props:{name:"convert_tokens_to_string",anchor:"transformers.BartphoTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bartpho/tokenization_bartpho.py#L295"}}),Q=new Ae({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bartpho/tokenization_bartpho.py#L247",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),J=new Ae({props:{name:"get_special_tokens_mask",anchor:"transformers.BartphoTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bartpho/tokenization_bartpho.py#L219",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){y=n("meta"),$e=c(),q=n("h1"),$=n("a"),me=n("span"),_(D.$$.fragment),et=c(),ue=n("span"),tt=r("BARTpho"),Ee=c(),B=n("h2"),E=n("a"),fe=n("span"),_(S.$$.fragment),ot=c(),ge=n("span"),nt=r("Overview"),Re=c(),R=n("p"),st=r("The BARTpho model was proposed in "),M=n("a"),at=r("BARTpho: Pre-trained Sequence-to-Sequence Models for Vietnamese"),rt=r(" by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen."),xe=c(),Z=n("p"),it=r("The abstract from the paper is the following:"),Pe=c(),ee=n("p"),_e=n("em"),lt=r(`We present BARTpho with two versions \u2014 BARTpho_word and BARTpho_syllable \u2014 the first public large-scale monolingual
sequence-to-sequence models pre-trained for Vietnamese. Our BARTpho uses the \u201Clarge\u201D architecture and pre-training
scheme of the sequence-to-sequence denoising model BART, thus especially suitable for generative NLP tasks. Experiments
on a downstream task of Vietnamese text summarization show that in both automatic and human evaluations, our BARTpho
outperforms the strong baseline mBART and improves the state-of-the-art. We release BARTpho to facilitate future
research and applications of generative Vietnamese NLP tasks.`),Le=c(),te=n("p"),pt=r("Example of use:"),je=c(),_(I.$$.fragment),De=c(),oe=n("p"),ct=r("Tips:"),Se=c(),ne=n("ul"),N=n("li"),dt=r(`Following mBART, BARTpho uses the \u201Clarge\u201D architecture of BART with an additional layer-normalization layer on top of
both the encoder and decoder. Thus, usage examples in the `),se=n("a"),ht=r("documentation of BART"),mt=r(`, when adapting to use
with BARTpho, should be adjusted by replacing the BART-specialized classes with the mBART-specialized counterparts.
For example:`),Me=c(),_(C.$$.fragment),Ie=c(),ae=n("ul"),ke=n("li"),ut=r(`This implementation is only for tokenization: \u201Cmonolingual_vocab_file\u201D consists of Vietnamese-specialized types
extracted from the pre-trained SentencePiece model \u201Cvocab_file\u201D that is available from the multilingual XLM-RoBERTa.
Other languages, if employing this pre-trained multilingual SentencePiece model \u201Cvocab_file\u201D for subword
segmentation, can reuse BartphoTokenizer with their own language-specialized \u201Cmonolingual_vocab_file\u201D.`),Ne=c(),f=n("p"),ft=r("This model was contributed by "),O=n("a"),gt=r("dqnguyen"),_t=r(". The original code can be found "),F=n("a"),kt=r("here"),bt=r("."),Ce=c(),z=n("h2"),x=n("a"),be=n("span"),_(V.$$.fragment),vt=c(),ve=n("span"),Tt=r("BartphoTokenizer"),Oe=c(),m=n("div"),_(X.$$.fragment),wt=c(),A=n("p"),yt=r("Adapted from "),re=n("a"),qt=r("XLMRobertaTokenizer"),Bt=r(". Based on "),W=n("a"),zt=r("SentencePiece"),At=r("."),$t=c(),U=n("p"),Et=r("This tokenizer inherits from "),ie=n("a"),Rt=r("PreTrainedTokenizer"),xt=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Pt=c(),g=n("div"),_(G.$$.fragment),Lt=c(),Te=n("p"),jt=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BARTPho sequence has the following format:`),Dt=c(),H=n("ul"),le=n("li"),St=r("single sequence: "),we=n("code"),Mt=r("<s> X </s>"),It=c(),pe=n("li"),Nt=r("pair of sequences: "),ye=n("code"),Ct=r("<s> A </s></s> B </s>"),Ot=c(),P=n("div"),_(K.$$.fragment),Ft=c(),qe=n("p"),Vt=r("Converts a sequence of tokens (strings for sub-words) in a single string."),Xt=c(),L=n("div"),_(Q.$$.fragment),Wt=c(),Be=n("p"),Ut=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BARTPho does not
make use of token type ids, therefore a list of zeros is returned.`),Gt=c(),j=n("div"),_(J.$$.fragment),Ht=c(),Y=n("p"),Kt=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ze=n("code"),Qt=r("prepare_for_model"),Jt=r(" method."),this.h()},l(e){const l=Mo('[data-svelte="svelte-1phssyn"]',document.head);y=s(l,"META",{name:!0,content:!0}),l.forEach(o),$e=d(e),q=s(e,"H1",{class:!0});var Ve=a(q);$=s(Ve,"A",{id:!0,class:!0,href:!0});var oo=a($);me=s(oo,"SPAN",{});var no=a(me);k(D.$$.fragment,no),no.forEach(o),oo.forEach(o),et=d(Ve),ue=s(Ve,"SPAN",{});var so=a(ue);tt=i(so,"BARTpho"),so.forEach(o),Ve.forEach(o),Ee=d(e),B=s(e,"H2",{class:!0});var Xe=a(B);E=s(Xe,"A",{id:!0,class:!0,href:!0});var ao=a(E);fe=s(ao,"SPAN",{});var ro=a(fe);k(S.$$.fragment,ro),ro.forEach(o),ao.forEach(o),ot=d(Xe),ge=s(Xe,"SPAN",{});var io=a(ge);nt=i(io,"Overview"),io.forEach(o),Xe.forEach(o),Re=d(e),R=s(e,"P",{});var We=a(R);st=i(We,"The BARTpho model was proposed in "),M=s(We,"A",{href:!0,rel:!0});var lo=a(M);at=i(lo,"BARTpho: Pre-trained Sequence-to-Sequence Models for Vietnamese"),lo.forEach(o),rt=i(We," by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen."),We.forEach(o),xe=d(e),Z=s(e,"P",{});var po=a(Z);it=i(po,"The abstract from the paper is the following:"),po.forEach(o),Pe=d(e),ee=s(e,"P",{});var co=a(ee);_e=s(co,"EM",{});var ho=a(_e);lt=i(ho,`We present BARTpho with two versions \u2014 BARTpho_word and BARTpho_syllable \u2014 the first public large-scale monolingual
sequence-to-sequence models pre-trained for Vietnamese. Our BARTpho uses the \u201Clarge\u201D architecture and pre-training
scheme of the sequence-to-sequence denoising model BART, thus especially suitable for generative NLP tasks. Experiments
on a downstream task of Vietnamese text summarization show that in both automatic and human evaluations, our BARTpho
outperforms the strong baseline mBART and improves the state-of-the-art. We release BARTpho to facilitate future
research and applications of generative Vietnamese NLP tasks.`),ho.forEach(o),co.forEach(o),Le=d(e),te=s(e,"P",{});var mo=a(te);pt=i(mo,"Example of use:"),mo.forEach(o),je=d(e),k(I.$$.fragment,e),De=d(e),oe=s(e,"P",{});var uo=a(oe);ct=i(uo,"Tips:"),uo.forEach(o),Se=d(e),ne=s(e,"UL",{});var fo=a(ne);N=s(fo,"LI",{});var Ue=a(N);dt=i(Ue,`Following mBART, BARTpho uses the \u201Clarge\u201D architecture of BART with an additional layer-normalization layer on top of
both the encoder and decoder. Thus, usage examples in the `),se=s(Ue,"A",{href:!0});var go=a(se);ht=i(go,"documentation of BART"),go.forEach(o),mt=i(Ue,`, when adapting to use
with BARTpho, should be adjusted by replacing the BART-specialized classes with the mBART-specialized counterparts.
For example:`),Ue.forEach(o),fo.forEach(o),Me=d(e),k(C.$$.fragment,e),Ie=d(e),ae=s(e,"UL",{});var _o=a(ae);ke=s(_o,"LI",{});var ko=a(ke);ut=i(ko,`This implementation is only for tokenization: \u201Cmonolingual_vocab_file\u201D consists of Vietnamese-specialized types
extracted from the pre-trained SentencePiece model \u201Cvocab_file\u201D that is available from the multilingual XLM-RoBERTa.
Other languages, if employing this pre-trained multilingual SentencePiece model \u201Cvocab_file\u201D for subword
segmentation, can reuse BartphoTokenizer with their own language-specialized \u201Cmonolingual_vocab_file\u201D.`),ko.forEach(o),_o.forEach(o),Ne=d(e),f=s(e,"P",{});var ce=a(f);ft=i(ce,"This model was contributed by "),O=s(ce,"A",{href:!0,rel:!0});var bo=a(O);gt=i(bo,"dqnguyen"),bo.forEach(o),_t=i(ce,". The original code can be found "),F=s(ce,"A",{href:!0,rel:!0});var vo=a(F);kt=i(vo,"here"),vo.forEach(o),bt=i(ce,"."),ce.forEach(o),Ce=d(e),z=s(e,"H2",{class:!0});var Ge=a(z);x=s(Ge,"A",{id:!0,class:!0,href:!0});var To=a(x);be=s(To,"SPAN",{});var wo=a(be);k(V.$$.fragment,wo),wo.forEach(o),To.forEach(o),vt=d(Ge),ve=s(Ge,"SPAN",{});var yo=a(ve);Tt=i(yo,"BartphoTokenizer"),yo.forEach(o),Ge.forEach(o),Oe=d(e),m=s(e,"DIV",{class:!0});var u=a(m);k(X.$$.fragment,u),wt=d(u),A=s(u,"P",{});var de=a(A);yt=i(de,"Adapted from "),re=s(de,"A",{href:!0});var qo=a(re);qt=i(qo,"XLMRobertaTokenizer"),qo.forEach(o),Bt=i(de,". Based on "),W=s(de,"A",{href:!0,rel:!0});var Bo=a(W);zt=i(Bo,"SentencePiece"),Bo.forEach(o),At=i(de,"."),de.forEach(o),$t=d(u),U=s(u,"P",{});var He=a(U);Et=i(He,"This tokenizer inherits from "),ie=s(He,"A",{href:!0});var zo=a(ie);Rt=i(zo,"PreTrainedTokenizer"),zo.forEach(o),xt=i(He,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),He.forEach(o),Pt=d(u),g=s(u,"DIV",{class:!0});var he=a(g);k(G.$$.fragment,he),Lt=d(he),Te=s(he,"P",{});var Ao=a(Te);jt=i(Ao,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BARTPho sequence has the following format:`),Ao.forEach(o),Dt=d(he),H=s(he,"UL",{});var Ke=a(H);le=s(Ke,"LI",{});var Yt=a(le);St=i(Yt,"single sequence: "),we=s(Yt,"CODE",{});var $o=a(we);Mt=i($o,"<s> X </s>"),$o.forEach(o),Yt.forEach(o),It=d(Ke),pe=s(Ke,"LI",{});var Zt=a(pe);Nt=i(Zt,"pair of sequences: "),ye=s(Zt,"CODE",{});var Eo=a(ye);Ct=i(Eo,"<s> A </s></s> B </s>"),Eo.forEach(o),Zt.forEach(o),Ke.forEach(o),he.forEach(o),Ot=d(u),P=s(u,"DIV",{class:!0});var Qe=a(P);k(K.$$.fragment,Qe),Ft=d(Qe),qe=s(Qe,"P",{});var Ro=a(qe);Vt=i(Ro,"Converts a sequence of tokens (strings for sub-words) in a single string."),Ro.forEach(o),Qe.forEach(o),Xt=d(u),L=s(u,"DIV",{class:!0});var Je=a(L);k(Q.$$.fragment,Je),Wt=d(Je),Be=s(Je,"P",{});var xo=a(Be);Ut=i(xo,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BARTPho does not
make use of token type ids, therefore a list of zeros is returned.`),xo.forEach(o),Je.forEach(o),Gt=d(u),j=s(u,"DIV",{class:!0});var Ye=a(j);k(J.$$.fragment,Ye),Ht=d(Ye),Y=s(Ye,"P",{});var Ze=a(Y);Kt=i(Ze,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ze=s(Ze,"CODE",{});var Po=a(ze);Qt=i(Po,"prepare_for_model"),Po.forEach(o),Jt=i(Ze," method."),Ze.forEach(o),Ye.forEach(o),u.forEach(o),this.h()},h(){p(y,"name","hf:doc:metadata"),p(y,"content",JSON.stringify(Oo)),p($,"id","bartpho"),p($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p($,"href","#bartpho"),p(q,"class","relative group"),p(E,"id","overview"),p(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(E,"href","#overview"),p(B,"class","relative group"),p(M,"href","https://arxiv.org/abs/2109.09701"),p(M,"rel","nofollow"),p(se,"href","bart"),p(O,"href","https://huggingface.co/dqnguyen"),p(O,"rel","nofollow"),p(F,"href","https://github.com/VinAIResearch/BARTpho"),p(F,"rel","nofollow"),p(x,"id","transformers.BartphoTokenizer"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#transformers.BartphoTokenizer"),p(z,"class","relative group"),p(re,"href","/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer"),p(W,"href","https://github.com/google/sentencepiece"),p(W,"rel","nofollow"),p(ie,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(g,"class","docstring"),p(P,"class","docstring"),p(L,"class","docstring"),p(j,"class","docstring"),p(m,"class","docstring")},m(e,l){t(document.head,y),h(e,$e,l),h(e,q,l),t(q,$),t($,me),b(D,me,null),t(q,et),t(q,ue),t(ue,tt),h(e,Ee,l),h(e,B,l),t(B,E),t(E,fe),b(S,fe,null),t(B,ot),t(B,ge),t(ge,nt),h(e,Re,l),h(e,R,l),t(R,st),t(R,M),t(M,at),t(R,rt),h(e,xe,l),h(e,Z,l),t(Z,it),h(e,Pe,l),h(e,ee,l),t(ee,_e),t(_e,lt),h(e,Le,l),h(e,te,l),t(te,pt),h(e,je,l),b(I,e,l),h(e,De,l),h(e,oe,l),t(oe,ct),h(e,Se,l),h(e,ne,l),t(ne,N),t(N,dt),t(N,se),t(se,ht),t(N,mt),h(e,Me,l),b(C,e,l),h(e,Ie,l),h(e,ae,l),t(ae,ke),t(ke,ut),h(e,Ne,l),h(e,f,l),t(f,ft),t(f,O),t(O,gt),t(f,_t),t(f,F),t(F,kt),t(f,bt),h(e,Ce,l),h(e,z,l),t(z,x),t(x,be),b(V,be,null),t(z,vt),t(z,ve),t(ve,Tt),h(e,Oe,l),h(e,m,l),b(X,m,null),t(m,wt),t(m,A),t(A,yt),t(A,re),t(re,qt),t(A,Bt),t(A,W),t(W,zt),t(A,At),t(m,$t),t(m,U),t(U,Et),t(U,ie),t(ie,Rt),t(U,xt),t(m,Pt),t(m,g),b(G,g,null),t(g,Lt),t(g,Te),t(Te,jt),t(g,Dt),t(g,H),t(H,le),t(le,St),t(le,we),t(we,Mt),t(H,It),t(H,pe),t(pe,Nt),t(pe,ye),t(ye,Ct),t(m,Ot),t(m,P),b(K,P,null),t(P,Ft),t(P,qe),t(qe,Vt),t(m,Xt),t(m,L),b(Q,L,null),t(L,Wt),t(L,Be),t(Be,Ut),t(m,Gt),t(m,j),b(J,j,null),t(j,Ht),t(j,Y),t(Y,Kt),t(Y,ze),t(ze,Qt),t(Y,Jt),Fe=!0},p:Io,i(e){Fe||(v(D.$$.fragment,e),v(S.$$.fragment,e),v(I.$$.fragment,e),v(C.$$.fragment,e),v(V.$$.fragment,e),v(X.$$.fragment,e),v(G.$$.fragment,e),v(K.$$.fragment,e),v(Q.$$.fragment,e),v(J.$$.fragment,e),Fe=!0)},o(e){T(D.$$.fragment,e),T(S.$$.fragment,e),T(I.$$.fragment,e),T(C.$$.fragment,e),T(V.$$.fragment,e),T(X.$$.fragment,e),T(G.$$.fragment,e),T(K.$$.fragment,e),T(Q.$$.fragment,e),T(J.$$.fragment,e),Fe=!1},d(e){o(y),e&&o($e),e&&o(q),w(D),e&&o(Ee),e&&o(B),w(S),e&&o(Re),e&&o(R),e&&o(xe),e&&o(Z),e&&o(Pe),e&&o(ee),e&&o(Le),e&&o(te),e&&o(je),w(I,e),e&&o(De),e&&o(oe),e&&o(Se),e&&o(ne),e&&o(Me),w(C,e),e&&o(Ie),e&&o(ae),e&&o(Ne),e&&o(f),e&&o(Ce),e&&o(z),w(V),e&&o(Oe),e&&o(m),w(X),w(G),w(K),w(Q),w(J)}}}const Oo={local:"bartpho",sections:[{local:"overview",title:"Overview"},{local:"transformers.BartphoTokenizer",title:"BartphoTokenizer"}],title:"BARTpho"};function Fo(to){return No(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Go extends jo{constructor(y){super();Do(this,y,Fo,Co,So,{})}}export{Go as default,Oo as metadata};
