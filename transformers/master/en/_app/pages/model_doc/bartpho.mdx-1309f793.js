import{S as Po,i as Do,s as So,e as s,k as c,w as v,t as r,M as Mo,c as n,d as o,m as d,a,x as T,h as i,b as p,F as t,g as h,y as w,L as Io,q as y,o as q,B}from"../../chunks/vendor-4833417e.js";import{D as $e}from"../../chunks/Docstring-44c5af16.js";import{C as Lo}from"../../chunks/CodeBlock-90ffda97.js";import{I as to}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-04a16537.js";function No(et){let _,Z,f,g,ue,D,tt,fe,ot,Ee,z,E,ge,S,st,_e,nt,xe,x,at,M,rt,it,Re,ee,lt,je,te,ke,pt,Le,oe,ct,Pe,I,De,se,dt,Se,ne,N,ht,ae,mt,ut,Me,C,Ie,re,be,ft,Ne,k,gt,O,_t,kt,F,bt,vt,Ce,A,R,ve,V,Tt,Te,wt,Oe,m,X,yt,$,qt,ie,Bt,zt,W,At,$t,Et,U,xt,le,Rt,jt,Lt,b,G,Pt,we,Dt,St,H,pe,Mt,ye,It,Nt,ce,Ct,qe,Ot,Ft,j,K,Vt,Be,Xt,Wt,L,Q,Ut,ze,Gt,Ht,P,J,Kt,Y,Qt,Ae,Jt,Yt,Fe;return D=new to({}),S=new to({}),I=new Lo({props:{code:`import torch
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
features = bartpho(**input_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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
print(tokenizer.decode(predictions).split()),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>bartpho = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;Ch\xFAng t\xF4i l\xE0 &lt;mask&gt; nghi\xEAn c\u1EE9u vi\xEAn.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = bartpho(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(predictions).split())`}}),V=new to({}),X=new $e({props:{name:"class transformers.BartphoTokenizer",anchor:"transformers.BartphoTokenizer",parameters:[{name:"vocab_file",val:""},{name:"monolingual_vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bartpho/tokenization_bartpho.py#L46",parametersDescription:[{anchor:"transformers.BartphoTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}]}}),G=new $e({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bartpho/tokenization_bartpho.py#L193",parametersDescription:[{anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),K=new $e({props:{name:"convert_tokens_to_string",anchor:"transformers.BartphoTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bartpho/tokenization_bartpho.py#L295"}}),Q=new $e({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bartpho/tokenization_bartpho.py#L247",parametersDescription:[{anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),J=new $e({props:{name:"get_special_tokens_mask",anchor:"transformers.BartphoTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bartpho/tokenization_bartpho.py#L219",parametersDescription:[{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){_=s("meta"),Z=c(),f=s("h1"),g=s("a"),ue=s("span"),v(D.$$.fragment),tt=c(),fe=s("span"),ot=r("BARTpho"),Ee=c(),z=s("h2"),E=s("a"),ge=s("span"),v(S.$$.fragment),st=c(),_e=s("span"),nt=r("Overview"),xe=c(),x=s("p"),at=r("The BARTpho model was proposed in "),M=s("a"),rt=r("BARTpho: Pre-trained Sequence-to-Sequence Models for Vietnamese"),it=r(" by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen."),Re=c(),ee=s("p"),lt=r("The abstract from the paper is the following:"),je=c(),te=s("p"),ke=s("em"),pt=r(`We present BARTpho with two versions \u2014 BARTpho_word and BARTpho_syllable \u2014 the first public large-scale monolingual
sequence-to-sequence models pre-trained for Vietnamese. Our BARTpho uses the \u201Clarge\u201D architecture and pre-training
scheme of the sequence-to-sequence denoising model BART, thus especially suitable for generative NLP tasks. Experiments
on a downstream task of Vietnamese text summarization show that in both automatic and human evaluations, our BARTpho
outperforms the strong baseline mBART and improves the state-of-the-art. We release BARTpho to facilitate future
research and applications of generative Vietnamese NLP tasks.`),Le=c(),oe=s("p"),ct=r("Example of use:"),Pe=c(),v(I.$$.fragment),De=c(),se=s("p"),dt=r("Tips:"),Se=c(),ne=s("ul"),N=s("li"),ht=r(`Following mBART, BARTpho uses the \u201Clarge\u201D architecture of BART with an additional layer-normalization layer on top of
both the encoder and decoder. Thus, usage examples in the `),ae=s("a"),mt=r("documentation of BART"),ut=r(`, when adapting to use
with BARTpho, should be adjusted by replacing the BART-specialized classes with the mBART-specialized counterparts.
For example:`),Me=c(),v(C.$$.fragment),Ie=c(),re=s("ul"),be=s("li"),ft=r(`This implementation is only for tokenization: \u201Cmonolingual_vocab_file\u201D consists of Vietnamese-specialized types
extracted from the pre-trained SentencePiece model \u201Cvocab_file\u201D that is available from the multilingual XLM-RoBERTa.
Other languages, if employing this pre-trained multilingual SentencePiece model \u201Cvocab_file\u201D for subword
segmentation, can reuse BartphoTokenizer with their own language-specialized \u201Cmonolingual_vocab_file\u201D.`),Ne=c(),k=s("p"),gt=r("This model was contributed by "),O=s("a"),_t=r("dqnguyen"),kt=r(". The original code can be found "),F=s("a"),bt=r("here"),vt=r("."),Ce=c(),A=s("h2"),R=s("a"),ve=s("span"),v(V.$$.fragment),Tt=c(),Te=s("span"),wt=r("BartphoTokenizer"),Oe=c(),m=s("div"),v(X.$$.fragment),yt=c(),$=s("p"),qt=r("Adapted from "),ie=s("a"),Bt=r("XLMRobertaTokenizer"),zt=r(". Based on "),W=s("a"),At=r("SentencePiece"),$t=r("."),Et=c(),U=s("p"),xt=r("This tokenizer inherits from "),le=s("a"),Rt=r("PreTrainedTokenizer"),jt=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Lt=c(),b=s("div"),v(G.$$.fragment),Pt=c(),we=s("p"),Dt=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BARTPho sequence has the following format:`),St=c(),H=s("ul"),pe=s("li"),Mt=r("single sequence: "),ye=s("code"),It=r("<s> X </s>"),Nt=c(),ce=s("li"),Ct=r("pair of sequences: "),qe=s("code"),Ot=r("<s> A </s></s> B </s>"),Ft=c(),j=s("div"),v(K.$$.fragment),Vt=c(),Be=s("p"),Xt=r("Converts a sequence of tokens (strings for sub-words) in a single string."),Wt=c(),L=s("div"),v(Q.$$.fragment),Ut=c(),ze=s("p"),Gt=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BARTPho does not
make use of token type ids, therefore a list of zeros is returned.`),Ht=c(),P=s("div"),v(J.$$.fragment),Kt=c(),Y=s("p"),Qt=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ae=s("code"),Jt=r("prepare_for_model"),Yt=r(" method."),this.h()},l(e){const l=Mo('[data-svelte="svelte-1phssyn"]',document.head);_=n(l,"META",{name:!0,content:!0}),l.forEach(o),Z=d(e),f=n(e,"H1",{class:!0});var Ve=a(f);g=n(Ve,"A",{id:!0,class:!0,href:!0});var oo=a(g);ue=n(oo,"SPAN",{});var so=a(ue);T(D.$$.fragment,so),so.forEach(o),oo.forEach(o),tt=d(Ve),fe=n(Ve,"SPAN",{});var no=a(fe);ot=i(no,"BARTpho"),no.forEach(o),Ve.forEach(o),Ee=d(e),z=n(e,"H2",{class:!0});var Xe=a(z);E=n(Xe,"A",{id:!0,class:!0,href:!0});var ao=a(E);ge=n(ao,"SPAN",{});var ro=a(ge);T(S.$$.fragment,ro),ro.forEach(o),ao.forEach(o),st=d(Xe),_e=n(Xe,"SPAN",{});var io=a(_e);nt=i(io,"Overview"),io.forEach(o),Xe.forEach(o),xe=d(e),x=n(e,"P",{});var We=a(x);at=i(We,"The BARTpho model was proposed in "),M=n(We,"A",{href:!0,rel:!0});var lo=a(M);rt=i(lo,"BARTpho: Pre-trained Sequence-to-Sequence Models for Vietnamese"),lo.forEach(o),it=i(We," by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen."),We.forEach(o),Re=d(e),ee=n(e,"P",{});var po=a(ee);lt=i(po,"The abstract from the paper is the following:"),po.forEach(o),je=d(e),te=n(e,"P",{});var co=a(te);ke=n(co,"EM",{});var ho=a(ke);pt=i(ho,`We present BARTpho with two versions \u2014 BARTpho_word and BARTpho_syllable \u2014 the first public large-scale monolingual
sequence-to-sequence models pre-trained for Vietnamese. Our BARTpho uses the \u201Clarge\u201D architecture and pre-training
scheme of the sequence-to-sequence denoising model BART, thus especially suitable for generative NLP tasks. Experiments
on a downstream task of Vietnamese text summarization show that in both automatic and human evaluations, our BARTpho
outperforms the strong baseline mBART and improves the state-of-the-art. We release BARTpho to facilitate future
research and applications of generative Vietnamese NLP tasks.`),ho.forEach(o),co.forEach(o),Le=d(e),oe=n(e,"P",{});var mo=a(oe);ct=i(mo,"Example of use:"),mo.forEach(o),Pe=d(e),T(I.$$.fragment,e),De=d(e),se=n(e,"P",{});var uo=a(se);dt=i(uo,"Tips:"),uo.forEach(o),Se=d(e),ne=n(e,"UL",{});var fo=a(ne);N=n(fo,"LI",{});var Ue=a(N);ht=i(Ue,`Following mBART, BARTpho uses the \u201Clarge\u201D architecture of BART with an additional layer-normalization layer on top of
both the encoder and decoder. Thus, usage examples in the `),ae=n(Ue,"A",{href:!0});var go=a(ae);mt=i(go,"documentation of BART"),go.forEach(o),ut=i(Ue,`, when adapting to use
with BARTpho, should be adjusted by replacing the BART-specialized classes with the mBART-specialized counterparts.
For example:`),Ue.forEach(o),fo.forEach(o),Me=d(e),T(C.$$.fragment,e),Ie=d(e),re=n(e,"UL",{});var _o=a(re);be=n(_o,"LI",{});var ko=a(be);ft=i(ko,`This implementation is only for tokenization: \u201Cmonolingual_vocab_file\u201D consists of Vietnamese-specialized types
extracted from the pre-trained SentencePiece model \u201Cvocab_file\u201D that is available from the multilingual XLM-RoBERTa.
Other languages, if employing this pre-trained multilingual SentencePiece model \u201Cvocab_file\u201D for subword
segmentation, can reuse BartphoTokenizer with their own language-specialized \u201Cmonolingual_vocab_file\u201D.`),ko.forEach(o),_o.forEach(o),Ne=d(e),k=n(e,"P",{});var de=a(k);gt=i(de,"This model was contributed by "),O=n(de,"A",{href:!0,rel:!0});var bo=a(O);_t=i(bo,"dqnguyen"),bo.forEach(o),kt=i(de,". The original code can be found "),F=n(de,"A",{href:!0,rel:!0});var vo=a(F);bt=i(vo,"here"),vo.forEach(o),vt=i(de,"."),de.forEach(o),Ce=d(e),A=n(e,"H2",{class:!0});var Ge=a(A);R=n(Ge,"A",{id:!0,class:!0,href:!0});var To=a(R);ve=n(To,"SPAN",{});var wo=a(ve);T(V.$$.fragment,wo),wo.forEach(o),To.forEach(o),Tt=d(Ge),Te=n(Ge,"SPAN",{});var yo=a(Te);wt=i(yo,"BartphoTokenizer"),yo.forEach(o),Ge.forEach(o),Oe=d(e),m=n(e,"DIV",{class:!0});var u=a(m);T(X.$$.fragment,u),yt=d(u),$=n(u,"P",{});var he=a($);qt=i(he,"Adapted from "),ie=n(he,"A",{href:!0});var qo=a(ie);Bt=i(qo,"XLMRobertaTokenizer"),qo.forEach(o),zt=i(he,". Based on "),W=n(he,"A",{href:!0,rel:!0});var Bo=a(W);At=i(Bo,"SentencePiece"),Bo.forEach(o),$t=i(he,"."),he.forEach(o),Et=d(u),U=n(u,"P",{});var He=a(U);xt=i(He,"This tokenizer inherits from "),le=n(He,"A",{href:!0});var zo=a(le);Rt=i(zo,"PreTrainedTokenizer"),zo.forEach(o),jt=i(He,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),He.forEach(o),Lt=d(u),b=n(u,"DIV",{class:!0});var me=a(b);T(G.$$.fragment,me),Pt=d(me),we=n(me,"P",{});var Ao=a(we);Dt=i(Ao,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BARTPho sequence has the following format:`),Ao.forEach(o),St=d(me),H=n(me,"UL",{});var Ke=a(H);pe=n(Ke,"LI",{});var Zt=a(pe);Mt=i(Zt,"single sequence: "),ye=n(Zt,"CODE",{});var $o=a(ye);It=i($o,"<s> X </s>"),$o.forEach(o),Zt.forEach(o),Nt=d(Ke),ce=n(Ke,"LI",{});var eo=a(ce);Ct=i(eo,"pair of sequences: "),qe=n(eo,"CODE",{});var Eo=a(qe);Ot=i(Eo,"<s> A </s></s> B </s>"),Eo.forEach(o),eo.forEach(o),Ke.forEach(o),me.forEach(o),Ft=d(u),j=n(u,"DIV",{class:!0});var Qe=a(j);T(K.$$.fragment,Qe),Vt=d(Qe),Be=n(Qe,"P",{});var xo=a(Be);Xt=i(xo,"Converts a sequence of tokens (strings for sub-words) in a single string."),xo.forEach(o),Qe.forEach(o),Wt=d(u),L=n(u,"DIV",{class:!0});var Je=a(L);T(Q.$$.fragment,Je),Ut=d(Je),ze=n(Je,"P",{});var Ro=a(ze);Gt=i(Ro,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BARTPho does not
make use of token type ids, therefore a list of zeros is returned.`),Ro.forEach(o),Je.forEach(o),Ht=d(u),P=n(u,"DIV",{class:!0});var Ye=a(P);T(J.$$.fragment,Ye),Kt=d(Ye),Y=n(Ye,"P",{});var Ze=a(Y);Qt=i(Ze,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ae=n(Ze,"CODE",{});var jo=a(Ae);Jt=i(jo,"prepare_for_model"),jo.forEach(o),Yt=i(Ze," method."),Ze.forEach(o),Ye.forEach(o),u.forEach(o),this.h()},h(){p(_,"name","hf:doc:metadata"),p(_,"content",JSON.stringify(Co)),p(g,"id","bartpho"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#bartpho"),p(f,"class","relative group"),p(E,"id","overview"),p(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(E,"href","#overview"),p(z,"class","relative group"),p(M,"href","https://arxiv.org/abs/2109.09701"),p(M,"rel","nofollow"),p(ae,"href","bart"),p(O,"href","https://huggingface.co/dqnguyen"),p(O,"rel","nofollow"),p(F,"href","https://github.com/VinAIResearch/BARTpho"),p(F,"rel","nofollow"),p(R,"id","transformers.BartphoTokenizer"),p(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(R,"href","#transformers.BartphoTokenizer"),p(A,"class","relative group"),p(ie,"href","/docs/transformers/master/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer"),p(W,"href","https://github.com/google/sentencepiece"),p(W,"rel","nofollow"),p(le,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(b,"class","docstring"),p(j,"class","docstring"),p(L,"class","docstring"),p(P,"class","docstring"),p(m,"class","docstring")},m(e,l){t(document.head,_),h(e,Z,l),h(e,f,l),t(f,g),t(g,ue),w(D,ue,null),t(f,tt),t(f,fe),t(fe,ot),h(e,Ee,l),h(e,z,l),t(z,E),t(E,ge),w(S,ge,null),t(z,st),t(z,_e),t(_e,nt),h(e,xe,l),h(e,x,l),t(x,at),t(x,M),t(M,rt),t(x,it),h(e,Re,l),h(e,ee,l),t(ee,lt),h(e,je,l),h(e,te,l),t(te,ke),t(ke,pt),h(e,Le,l),h(e,oe,l),t(oe,ct),h(e,Pe,l),w(I,e,l),h(e,De,l),h(e,se,l),t(se,dt),h(e,Se,l),h(e,ne,l),t(ne,N),t(N,ht),t(N,ae),t(ae,mt),t(N,ut),h(e,Me,l),w(C,e,l),h(e,Ie,l),h(e,re,l),t(re,be),t(be,ft),h(e,Ne,l),h(e,k,l),t(k,gt),t(k,O),t(O,_t),t(k,kt),t(k,F),t(F,bt),t(k,vt),h(e,Ce,l),h(e,A,l),t(A,R),t(R,ve),w(V,ve,null),t(A,Tt),t(A,Te),t(Te,wt),h(e,Oe,l),h(e,m,l),w(X,m,null),t(m,yt),t(m,$),t($,qt),t($,ie),t(ie,Bt),t($,zt),t($,W),t(W,At),t($,$t),t(m,Et),t(m,U),t(U,xt),t(U,le),t(le,Rt),t(U,jt),t(m,Lt),t(m,b),w(G,b,null),t(b,Pt),t(b,we),t(we,Dt),t(b,St),t(b,H),t(H,pe),t(pe,Mt),t(pe,ye),t(ye,It),t(H,Nt),t(H,ce),t(ce,Ct),t(ce,qe),t(qe,Ot),t(m,Ft),t(m,j),w(K,j,null),t(j,Vt),t(j,Be),t(Be,Xt),t(m,Wt),t(m,L),w(Q,L,null),t(L,Ut),t(L,ze),t(ze,Gt),t(m,Ht),t(m,P),w(J,P,null),t(P,Kt),t(P,Y),t(Y,Qt),t(Y,Ae),t(Ae,Jt),t(Y,Yt),Fe=!0},p:Io,i(e){Fe||(y(D.$$.fragment,e),y(S.$$.fragment,e),y(I.$$.fragment,e),y(C.$$.fragment,e),y(V.$$.fragment,e),y(X.$$.fragment,e),y(G.$$.fragment,e),y(K.$$.fragment,e),y(Q.$$.fragment,e),y(J.$$.fragment,e),Fe=!0)},o(e){q(D.$$.fragment,e),q(S.$$.fragment,e),q(I.$$.fragment,e),q(C.$$.fragment,e),q(V.$$.fragment,e),q(X.$$.fragment,e),q(G.$$.fragment,e),q(K.$$.fragment,e),q(Q.$$.fragment,e),q(J.$$.fragment,e),Fe=!1},d(e){o(_),e&&o(Z),e&&o(f),B(D),e&&o(Ee),e&&o(z),B(S),e&&o(xe),e&&o(x),e&&o(Re),e&&o(ee),e&&o(je),e&&o(te),e&&o(Le),e&&o(oe),e&&o(Pe),B(I,e),e&&o(De),e&&o(se),e&&o(Se),e&&o(ne),e&&o(Me),B(C,e),e&&o(Ie),e&&o(re),e&&o(Ne),e&&o(k),e&&o(Ce),e&&o(A),B(V),e&&o(Oe),e&&o(m),B(X),B(G),B(K),B(Q),B(J)}}}const Co={local:"bartpho",sections:[{local:"overview",title:"Overview"},{local:"transformers.BartphoTokenizer",title:"BartphoTokenizer"}],title:"BARTpho"};function Oo(et,_,Z){let{fw:f}=_;return et.$$set=g=>{"fw"in g&&Z(0,f=g.fw)},[f]}class Go extends Po{constructor(_){super();Do(this,_,Oo,No,So,{fw:0})}}export{Go as default,Co as metadata};
