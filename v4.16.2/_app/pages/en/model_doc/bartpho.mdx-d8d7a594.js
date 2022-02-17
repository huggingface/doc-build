import{S as Uo,i as Go,s as Ho,e as s,k as p,w as v,t as r,L as Ko,c as n,d as o,m as c,a,x as T,h as i,b as d,J as t,g as h,y as w,K as Jo,q as y,o as q,B}from"../../../chunks/vendor-b1433968.js";import{D as Pe}from"../../../chunks/Docstring-ff504c58.js";import{C as Wo}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as ho}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function Qo(nt){let _,ee,f,g,ge,S,at,_e,rt,je,z,R,ke,M,it,be,lt,Le,x,pt,I,ct,dt,De,te,ht,Se,oe,ve,mt,Me,se,ut,Ie,N,Ne,ne,ft,Ce,ae,C,gt,re,_t,kt,Oe,O,Ve,ie,Te,bt,Fe,k,vt,V,Tt,wt,F,yt,qt,Xe,A,P,we,X,Bt,ye,zt,We,m,W,At,$,$t,le,Et,Rt,U,xt,Pt,jt,G,Lt,pe,Dt,St,Mt,E,It,qe,Nt,Ct,Be,Ot,Vt,Ft,b,H,Xt,ze,Wt,Ut,K,ce,Gt,Ae,Ht,Kt,de,Jt,$e,Qt,Yt,j,J,Zt,Ee,eo,to,L,Q,oo,Re,so,no,D,Y,ao,Z,ro,xe,io,lo,Ue;return S=new ho({}),M=new ho({}),N=new Wo({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>features = bartpho(**input_ids)`}}),O=new Wo({props:{code:`from transformers import MBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(predictions).split())`}}),X=new ho({}),W=new Pe({props:{name:"class transformers.BartphoTokenizer",anchor:"transformers.BartphoTokenizer",parameters:[{name:"vocab_file",val:""},{name:"monolingual_vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bartpho/tokenization_bartpho.py#L46",parametersDescription:[{anchor:"transformers.BartphoTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),H=new Pe({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bartpho/tokenization_bartpho.py#L193",parametersDescription:[{anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),J=new Pe({props:{name:"convert_tokens_to_string",anchor:"transformers.BartphoTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bartpho/tokenization_bartpho.py#L295"}}),Q=new Pe({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bartpho/tokenization_bartpho.py#L247",parametersDescription:[{anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Y=new Pe({props:{name:"get_special_tokens_mask",anchor:"transformers.BartphoTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bartpho/tokenization_bartpho.py#L219",parametersDescription:[{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){_=s("meta"),ee=p(),f=s("h1"),g=s("a"),ge=s("span"),v(S.$$.fragment),at=p(),_e=s("span"),rt=r("BARTpho"),je=p(),z=s("h2"),R=s("a"),ke=s("span"),v(M.$$.fragment),it=p(),be=s("span"),lt=r("Overview"),Le=p(),x=s("p"),pt=r("The BARTpho model was proposed in "),I=s("a"),ct=r("BARTpho: Pre-trained Sequence-to-Sequence Models for Vietnamese"),dt=r(" by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen."),De=p(),te=s("p"),ht=r("The abstract from the paper is the following:"),Se=p(),oe=s("p"),ve=s("em"),mt=r(`We present BARTpho with two versions \u2014 BARTpho_word and BARTpho_syllable \u2014 the first public large-scale monolingual
sequence-to-sequence models pre-trained for Vietnamese. Our BARTpho uses the \u201Clarge\u201D architecture and pre-training
scheme of the sequence-to-sequence denoising model BART, thus especially suitable for generative NLP tasks. Experiments
on a downstream task of Vietnamese text summarization show that in both automatic and human evaluations, our BARTpho
outperforms the strong baseline mBART and improves the state-of-the-art. We release BARTpho to facilitate future
research and applications of generative Vietnamese NLP tasks.`),Me=p(),se=s("p"),ut=r("Example of use:"),Ie=p(),v(N.$$.fragment),Ne=p(),ne=s("p"),ft=r("Tips:"),Ce=p(),ae=s("ul"),C=s("li"),gt=r(`Following mBART, BARTpho uses the \u201Clarge\u201D architecture of BART with an additional layer-normalization layer on top of
both the encoder and decoder. Thus, usage examples in the `),re=s("a"),_t=r("documentation of BART"),kt=r(`, when adapting to use
with BARTpho, should be adjusted by replacing the BART-specialized classes with the mBART-specialized counterparts.
For example:`),Oe=p(),v(O.$$.fragment),Ve=p(),ie=s("ul"),Te=s("li"),bt=r(`This implementation is only for tokenization: \u201Cmonolingual_vocab_file\u201D consists of Vietnamese-specialized types
extracted from the pre-trained SentencePiece model \u201Cvocab_file\u201D that is available from the multilingual XLM-RoBERTa.
Other languages, if employing this pre-trained multilingual SentencePiece model \u201Cvocab_file\u201D for subword
segmentation, can reuse BartphoTokenizer with their own language-specialized \u201Cmonolingual_vocab_file\u201D.`),Fe=p(),k=s("p"),vt=r("This model was contributed by "),V=s("a"),Tt=r("dqnguyen"),wt=r(". The original code can be found "),F=s("a"),yt=r("here"),qt=r("."),Xe=p(),A=s("h2"),P=s("a"),we=s("span"),v(X.$$.fragment),Bt=p(),ye=s("span"),zt=r("BartphoTokenizer"),We=p(),m=s("div"),v(W.$$.fragment),At=p(),$=s("p"),$t=r("Adapted from "),le=s("a"),Et=r("XLMRobertaTokenizer"),Rt=r(". Based on "),U=s("a"),xt=r("SentencePiece"),Pt=r("."),jt=p(),G=s("p"),Lt=r("This tokenizer inherits from "),pe=s("a"),Dt=r("PreTrainedTokenizer"),St=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Mt=p(),E=s("p"),It=r(`Attributes:
sp_model (`),qe=s("code"),Nt=r("SentencePieceProcessor"),Ct=r(`):
The `),Be=s("em"),Ot=r("SentencePiece"),Vt=r(" processor that is used for every conversion (string, tokens and IDs)."),Ft=p(),b=s("div"),v(H.$$.fragment),Xt=p(),ze=s("p"),Wt=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BARTPho sequence has the following format:`),Ut=p(),K=s("ul"),ce=s("li"),Gt=r("single sequence: "),Ae=s("code"),Ht=r("<s> X </s>"),Kt=p(),de=s("li"),Jt=r("pair of sequences: "),$e=s("code"),Qt=r("<s> A </s></s> B </s>"),Yt=p(),j=s("div"),v(J.$$.fragment),Zt=p(),Ee=s("p"),eo=r("Converts a sequence of tokens (strings for sub-words) in a single string."),to=p(),L=s("div"),v(Q.$$.fragment),oo=p(),Re=s("p"),so=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BARTPho does not
make use of token type ids, therefore a list of zeros is returned.`),no=p(),D=s("div"),v(Y.$$.fragment),ao=p(),Z=s("p"),ro=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xe=s("code"),io=r("prepare_for_model"),lo=r(" method."),this.h()},l(e){const l=Ko('[data-svelte="svelte-1phssyn"]',document.head);_=n(l,"META",{name:!0,content:!0}),l.forEach(o),ee=c(e),f=n(e,"H1",{class:!0});var Ge=a(f);g=n(Ge,"A",{id:!0,class:!0,href:!0});var mo=a(g);ge=n(mo,"SPAN",{});var uo=a(ge);T(S.$$.fragment,uo),uo.forEach(o),mo.forEach(o),at=c(Ge),_e=n(Ge,"SPAN",{});var fo=a(_e);rt=i(fo,"BARTpho"),fo.forEach(o),Ge.forEach(o),je=c(e),z=n(e,"H2",{class:!0});var He=a(z);R=n(He,"A",{id:!0,class:!0,href:!0});var go=a(R);ke=n(go,"SPAN",{});var _o=a(ke);T(M.$$.fragment,_o),_o.forEach(o),go.forEach(o),it=c(He),be=n(He,"SPAN",{});var ko=a(be);lt=i(ko,"Overview"),ko.forEach(o),He.forEach(o),Le=c(e),x=n(e,"P",{});var Ke=a(x);pt=i(Ke,"The BARTpho model was proposed in "),I=n(Ke,"A",{href:!0,rel:!0});var bo=a(I);ct=i(bo,"BARTpho: Pre-trained Sequence-to-Sequence Models for Vietnamese"),bo.forEach(o),dt=i(Ke," by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen."),Ke.forEach(o),De=c(e),te=n(e,"P",{});var vo=a(te);ht=i(vo,"The abstract from the paper is the following:"),vo.forEach(o),Se=c(e),oe=n(e,"P",{});var To=a(oe);ve=n(To,"EM",{});var wo=a(ve);mt=i(wo,`We present BARTpho with two versions \u2014 BARTpho_word and BARTpho_syllable \u2014 the first public large-scale monolingual
sequence-to-sequence models pre-trained for Vietnamese. Our BARTpho uses the \u201Clarge\u201D architecture and pre-training
scheme of the sequence-to-sequence denoising model BART, thus especially suitable for generative NLP tasks. Experiments
on a downstream task of Vietnamese text summarization show that in both automatic and human evaluations, our BARTpho
outperforms the strong baseline mBART and improves the state-of-the-art. We release BARTpho to facilitate future
research and applications of generative Vietnamese NLP tasks.`),wo.forEach(o),To.forEach(o),Me=c(e),se=n(e,"P",{});var yo=a(se);ut=i(yo,"Example of use:"),yo.forEach(o),Ie=c(e),T(N.$$.fragment,e),Ne=c(e),ne=n(e,"P",{});var qo=a(ne);ft=i(qo,"Tips:"),qo.forEach(o),Ce=c(e),ae=n(e,"UL",{});var Bo=a(ae);C=n(Bo,"LI",{});var Je=a(C);gt=i(Je,`Following mBART, BARTpho uses the \u201Clarge\u201D architecture of BART with an additional layer-normalization layer on top of
both the encoder and decoder. Thus, usage examples in the `),re=n(Je,"A",{href:!0});var zo=a(re);_t=i(zo,"documentation of BART"),zo.forEach(o),kt=i(Je,`, when adapting to use
with BARTpho, should be adjusted by replacing the BART-specialized classes with the mBART-specialized counterparts.
For example:`),Je.forEach(o),Bo.forEach(o),Oe=c(e),T(O.$$.fragment,e),Ve=c(e),ie=n(e,"UL",{});var Ao=a(ie);Te=n(Ao,"LI",{});var $o=a(Te);bt=i($o,`This implementation is only for tokenization: \u201Cmonolingual_vocab_file\u201D consists of Vietnamese-specialized types
extracted from the pre-trained SentencePiece model \u201Cvocab_file\u201D that is available from the multilingual XLM-RoBERTa.
Other languages, if employing this pre-trained multilingual SentencePiece model \u201Cvocab_file\u201D for subword
segmentation, can reuse BartphoTokenizer with their own language-specialized \u201Cmonolingual_vocab_file\u201D.`),$o.forEach(o),Ao.forEach(o),Fe=c(e),k=n(e,"P",{});var he=a(k);vt=i(he,"This model was contributed by "),V=n(he,"A",{href:!0,rel:!0});var Eo=a(V);Tt=i(Eo,"dqnguyen"),Eo.forEach(o),wt=i(he,". The original code can be found "),F=n(he,"A",{href:!0,rel:!0});var Ro=a(F);yt=i(Ro,"here"),Ro.forEach(o),qt=i(he,"."),he.forEach(o),Xe=c(e),A=n(e,"H2",{class:!0});var Qe=a(A);P=n(Qe,"A",{id:!0,class:!0,href:!0});var xo=a(P);we=n(xo,"SPAN",{});var Po=a(we);T(X.$$.fragment,Po),Po.forEach(o),xo.forEach(o),Bt=c(Qe),ye=n(Qe,"SPAN",{});var jo=a(ye);zt=i(jo,"BartphoTokenizer"),jo.forEach(o),Qe.forEach(o),We=c(e),m=n(e,"DIV",{class:!0});var u=a(m);T(W.$$.fragment,u),At=c(u),$=n(u,"P",{});var me=a($);$t=i(me,"Adapted from "),le=n(me,"A",{href:!0});var Lo=a(le);Et=i(Lo,"XLMRobertaTokenizer"),Lo.forEach(o),Rt=i(me,". Based on "),U=n(me,"A",{href:!0,rel:!0});var Do=a(U);xt=i(Do,"SentencePiece"),Do.forEach(o),Pt=i(me,"."),me.forEach(o),jt=c(u),G=n(u,"P",{});var Ye=a(G);Lt=i(Ye,"This tokenizer inherits from "),pe=n(Ye,"A",{href:!0});var So=a(pe);Dt=i(So,"PreTrainedTokenizer"),So.forEach(o),St=i(Ye,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ye.forEach(o),Mt=c(u),E=n(u,"P",{});var ue=a(E);It=i(ue,`Attributes:
sp_model (`),qe=n(ue,"CODE",{});var Mo=a(qe);Nt=i(Mo,"SentencePieceProcessor"),Mo.forEach(o),Ct=i(ue,`):
The `),Be=n(ue,"EM",{});var Io=a(Be);Ot=i(Io,"SentencePiece"),Io.forEach(o),Vt=i(ue," processor that is used for every conversion (string, tokens and IDs)."),ue.forEach(o),Ft=c(u),b=n(u,"DIV",{class:!0});var fe=a(b);T(H.$$.fragment,fe),Xt=c(fe),ze=n(fe,"P",{});var No=a(ze);Wt=i(No,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BARTPho sequence has the following format:`),No.forEach(o),Ut=c(fe),K=n(fe,"UL",{});var Ze=a(K);ce=n(Ze,"LI",{});var po=a(ce);Gt=i(po,"single sequence: "),Ae=n(po,"CODE",{});var Co=a(Ae);Ht=i(Co,"<s> X </s>"),Co.forEach(o),po.forEach(o),Kt=c(Ze),de=n(Ze,"LI",{});var co=a(de);Jt=i(co,"pair of sequences: "),$e=n(co,"CODE",{});var Oo=a($e);Qt=i(Oo,"<s> A </s></s> B </s>"),Oo.forEach(o),co.forEach(o),Ze.forEach(o),fe.forEach(o),Yt=c(u),j=n(u,"DIV",{class:!0});var et=a(j);T(J.$$.fragment,et),Zt=c(et),Ee=n(et,"P",{});var Vo=a(Ee);eo=i(Vo,"Converts a sequence of tokens (strings for sub-words) in a single string."),Vo.forEach(o),et.forEach(o),to=c(u),L=n(u,"DIV",{class:!0});var tt=a(L);T(Q.$$.fragment,tt),oo=c(tt),Re=n(tt,"P",{});var Fo=a(Re);so=i(Fo,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BARTPho does not
make use of token type ids, therefore a list of zeros is returned.`),Fo.forEach(o),tt.forEach(o),no=c(u),D=n(u,"DIV",{class:!0});var ot=a(D);T(Y.$$.fragment,ot),ao=c(ot),Z=n(ot,"P",{});var st=a(Z);ro=i(st,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xe=n(st,"CODE",{});var Xo=a(xe);io=i(Xo,"prepare_for_model"),Xo.forEach(o),lo=i(st," method."),st.forEach(o),ot.forEach(o),u.forEach(o),this.h()},h(){d(_,"name","hf:doc:metadata"),d(_,"content",JSON.stringify(Yo)),d(g,"id","bartpho"),d(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(g,"href","#bartpho"),d(f,"class","relative group"),d(R,"id","overview"),d(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(R,"href","#overview"),d(z,"class","relative group"),d(I,"href","https://arxiv.org/abs/2109.09701"),d(I,"rel","nofollow"),d(re,"href","bart"),d(V,"href","https://huggingface.co/dqnguyen"),d(V,"rel","nofollow"),d(F,"href","https://github.com/VinAIResearch/BARTpho"),d(F,"rel","nofollow"),d(P,"id","transformers.BartphoTokenizer"),d(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(P,"href","#transformers.BartphoTokenizer"),d(A,"class","relative group"),d(le,"href","/docs/transformers/v4.16.2/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer"),d(U,"href","https://github.com/google/sentencepiece"),d(U,"rel","nofollow"),d(pe,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(b,"class","docstring"),d(j,"class","docstring"),d(L,"class","docstring"),d(D,"class","docstring"),d(m,"class","docstring")},m(e,l){t(document.head,_),h(e,ee,l),h(e,f,l),t(f,g),t(g,ge),w(S,ge,null),t(f,at),t(f,_e),t(_e,rt),h(e,je,l),h(e,z,l),t(z,R),t(R,ke),w(M,ke,null),t(z,it),t(z,be),t(be,lt),h(e,Le,l),h(e,x,l),t(x,pt),t(x,I),t(I,ct),t(x,dt),h(e,De,l),h(e,te,l),t(te,ht),h(e,Se,l),h(e,oe,l),t(oe,ve),t(ve,mt),h(e,Me,l),h(e,se,l),t(se,ut),h(e,Ie,l),w(N,e,l),h(e,Ne,l),h(e,ne,l),t(ne,ft),h(e,Ce,l),h(e,ae,l),t(ae,C),t(C,gt),t(C,re),t(re,_t),t(C,kt),h(e,Oe,l),w(O,e,l),h(e,Ve,l),h(e,ie,l),t(ie,Te),t(Te,bt),h(e,Fe,l),h(e,k,l),t(k,vt),t(k,V),t(V,Tt),t(k,wt),t(k,F),t(F,yt),t(k,qt),h(e,Xe,l),h(e,A,l),t(A,P),t(P,we),w(X,we,null),t(A,Bt),t(A,ye),t(ye,zt),h(e,We,l),h(e,m,l),w(W,m,null),t(m,At),t(m,$),t($,$t),t($,le),t(le,Et),t($,Rt),t($,U),t(U,xt),t($,Pt),t(m,jt),t(m,G),t(G,Lt),t(G,pe),t(pe,Dt),t(G,St),t(m,Mt),t(m,E),t(E,It),t(E,qe),t(qe,Nt),t(E,Ct),t(E,Be),t(Be,Ot),t(E,Vt),t(m,Ft),t(m,b),w(H,b,null),t(b,Xt),t(b,ze),t(ze,Wt),t(b,Ut),t(b,K),t(K,ce),t(ce,Gt),t(ce,Ae),t(Ae,Ht),t(K,Kt),t(K,de),t(de,Jt),t(de,$e),t($e,Qt),t(m,Yt),t(m,j),w(J,j,null),t(j,Zt),t(j,Ee),t(Ee,eo),t(m,to),t(m,L),w(Q,L,null),t(L,oo),t(L,Re),t(Re,so),t(m,no),t(m,D),w(Y,D,null),t(D,ao),t(D,Z),t(Z,ro),t(Z,xe),t(xe,io),t(Z,lo),Ue=!0},p:Jo,i(e){Ue||(y(S.$$.fragment,e),y(M.$$.fragment,e),y(N.$$.fragment,e),y(O.$$.fragment,e),y(X.$$.fragment,e),y(W.$$.fragment,e),y(H.$$.fragment,e),y(J.$$.fragment,e),y(Q.$$.fragment,e),y(Y.$$.fragment,e),Ue=!0)},o(e){q(S.$$.fragment,e),q(M.$$.fragment,e),q(N.$$.fragment,e),q(O.$$.fragment,e),q(X.$$.fragment,e),q(W.$$.fragment,e),q(H.$$.fragment,e),q(J.$$.fragment,e),q(Q.$$.fragment,e),q(Y.$$.fragment,e),Ue=!1},d(e){o(_),e&&o(ee),e&&o(f),B(S),e&&o(je),e&&o(z),B(M),e&&o(Le),e&&o(x),e&&o(De),e&&o(te),e&&o(Se),e&&o(oe),e&&o(Me),e&&o(se),e&&o(Ie),B(N,e),e&&o(Ne),e&&o(ne),e&&o(Ce),e&&o(ae),e&&o(Oe),B(O,e),e&&o(Ve),e&&o(ie),e&&o(Fe),e&&o(k),e&&o(Xe),e&&o(A),B(X),e&&o(We),e&&o(m),B(W),B(H),B(J),B(Q),B(Y)}}}const Yo={local:"bartpho",sections:[{local:"overview",title:"Overview"},{local:"transformers.BartphoTokenizer",title:"BartphoTokenizer"}],title:"BARTpho"};function Zo(nt,_,ee){let{fw:f}=_;return nt.$$set=g=>{"fw"in g&&ee(0,f=g.fw)},[f]}class as extends Uo{constructor(_){super();Go(this,_,Zo,Qo,Ho,{fw:0})}}export{as as default,Yo as metadata};
