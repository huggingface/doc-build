import{S as mo,i as fo,s as uo,e as o,k as p,w,t as r,M as ho,c as n,d as s,m as c,a,x as $,h as i,b as m,G as t,g as d,y as z,q as T,o as E,B as j,v as _o,L as ko}from"../../chunks/vendor-hf-doc-builder.js";import{D as Oe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Bs}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as xs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as go}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function bo(Ne){let h,C,k,_,y;return _=new Bs({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){h=o("p"),C=r("pair mask has the following format:"),k=p(),w(_.$$.fragment)},l(f){h=n(f,"P",{});var q=a(h);C=i(q,"pair mask has the following format:"),q.forEach(s),k=c(f),$(_.$$.fragment,f)},m(f,q){d(f,h,q),t(h,C),d(f,k,q),z(_,f,q),y=!0},p:ko,i(f){y||(T(_.$$.fragment,f),y=!0)},o(f){E(_.$$.fragment,f),y=!1},d(f){f&&s(h),f&&s(k),j(_,f)}}}function vo(Ne){let h,C,k,_,y,f,q,$e,ht,Re,B,D,ze,V,_t,Te,kt,We,pe,gt,Ue,ce,bt,Ve,A,L,vt,F,wt,$t,H,zt,Tt,Et,Ee,jt,Fe,b,yt,je,qt,xt,ye,Bt,Lt,qe,Pt,Jt,He,S,Ct,K,Dt,At,Ke,de,St,Xe,X,Ge,me,It,Qe,G,Ye,fe,Mt,Ze,ue,Q,Ot,he,Nt,Rt,et,I,Wt,Y,Ut,Vt,tt,P,M,xe,Z,Ft,Be,Ht,st,u,ee,Kt,Le,Xt,Gt,te,Qt,_e,Yt,Zt,es,x,se,ts,Pe,ss,os,oe,ke,ns,Je,as,rs,ge,is,Ce,ls,ps,O,ne,cs,De,ds,ms,v,ae,fs,Ae,us,hs,N,_s,J,ks,Se,gs,bs,Ie,vs,ws,$s,R,re,zs,ie,Ts,Me,Es,js,ot;return f=new xs({}),V=new xs({}),X=new Bs({props:{code:`import torch
from transformers import AutoModel, AutoTokenizer

bertjapanese = AutoModel.from_pretrained("cl-tohoku/bert-base-japanese")
tokenizer = AutoTokenizer.from_pretrained("cl-tohoku/bert-base-japanese")

## Input Japanese Text
line = "\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002"

inputs = tokenizer(line, return_tensors="pt")

print(tokenizer.decode(inputs["input_ids"][0]))

outputs = bertjapanese(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>bertjapanese = AutoModel.from_pretrained(<span class="hljs-string">&quot;cl-tohoku/bert-base-japanese&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;cl-tohoku/bert-base-japanese&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment">## Input Japanese Text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(line, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>]))
[CLS] \u543E\u8F29 \u306F \u732B \u3067 \u3042\u308B \u3002 [SEP]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = bertjapanese(**inputs)`}}),G=new Bs({props:{code:`bertjapanese = AutoModel.from_pretrained("cl-tohoku/bert-base-japanese-char")
tokenizer = AutoTokenizer.from_pretrained("cl-tohoku/bert-base-japanese-char")

## Input Japanese Text
line = "\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002"

inputs = tokenizer(line, return_tensors="pt")

print(tokenizer.decode(inputs["input_ids"][0]))

outputs = bertjapanese(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>bertjapanese = AutoModel.from_pretrained(<span class="hljs-string">&quot;cl-tohoku/bert-base-japanese-char&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;cl-tohoku/bert-base-japanese-char&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment">## Input Japanese Text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(line, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>]))
[CLS] \u543E \u8F29 \u306F \u732B \u3067 \u3042 \u308B \u3002 [SEP]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = bertjapanese(**inputs)`}}),Z=new xs({}),ee=new Oe({props:{name:"class transformers.BertJapaneseTokenizer",anchor:"transformers.BertJapaneseTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"do_word_tokenize",val:" = True"},{name:"do_subword_tokenize",val:" = True"},{name:"word_tokenizer_type",val:" = 'basic'"},{name:"subword_tokenizer_type",val:" = 'wordpiece'"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"mecab_kwargs",val:" = None"},{name:"sudachi_kwargs",val:" = None"},{name:"jumanpp_kwargs",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertJapaneseTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to a one-wordpiece-per-line vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BertJapaneseTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lower case the input. Only has an effect when do_basic_tokenize=True.`,name:"do_lower_case"},{anchor:"transformers.BertJapaneseTokenizer.do_word_tokenize",description:`<strong>do_word_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to do word tokenization.`,name:"do_word_tokenize"},{anchor:"transformers.BertJapaneseTokenizer.do_subword_tokenize",description:`<strong>do_subword_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to do subword tokenization.`,name:"do_subword_tokenize"},{anchor:"transformers.BertJapaneseTokenizer.word_tokenizer_type",description:`<strong>word_tokenizer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;basic&quot;</code>) &#x2014;
Type of word tokenizer. Choose from [&#x201C;basic&#x201D;, &#x201C;mecab&#x201D;, &#x201C;sudachi&#x201D;, &#x201C;jumanpp&#x201D;].`,name:"word_tokenizer_type"},{anchor:"transformers.BertJapaneseTokenizer.subword_tokenizer_type",description:`<strong>subword_tokenizer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;wordpiece&quot;</code>) &#x2014;
Type of subword tokenizer. Choose from [&#x201C;wordpiece&#x201D;, &#x201C;character&#x201D;].`,name:"subword_tokenizer_type"},{anchor:"transformers.BertJapaneseTokenizer.mecab_kwargs",description:`<strong>mecab_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary passed to the <code>MecabTokenizer</code> constructor.`,name:"mecab_kwargs"},{anchor:"transformers.BertJapaneseTokenizer.sudachi_kwargs",description:`<strong>sudachi_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary passed to the <code>SudachiTokenizer</code> constructor.`,name:"sudachi_kwargs"},{anchor:"transformers.BertJapaneseTokenizer.jumanpp_kwargs",description:`<strong>jumanpp_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary passed to the <code>JumanppTokenizer</code> constructor.`,name:"jumanpp_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_japanese/tokenization_bert_japanese.py#L100"}}),se=new Oe({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertJapaneseTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertJapaneseTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertJapaneseTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_japanese/tokenization_bert_japanese.py#L279",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ne=new Oe({props:{name:"convert_tokens_to_string",anchor:"transformers.BertJapaneseTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_japanese/tokenization_bert_japanese.py#L273"}}),ae=new Oe({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertJapaneseTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertJapaneseTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertJapaneseTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_japanese/tokenization_bert_japanese.py#L334",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),N=new go({props:{anchor:"transformers.BertJapaneseTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[bo]},$$scope:{ctx:Ne}}}),re=new Oe({props:{name:"get_special_tokens_mask",anchor:"transformers.BertJapaneseTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertJapaneseTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertJapaneseTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertJapaneseTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert_japanese/tokenization_bert_japanese.py#L305",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){h=o("meta"),C=p(),k=o("h1"),_=o("a"),y=o("span"),w(f.$$.fragment),q=p(),$e=o("span"),ht=r("BertJapanese"),Re=p(),B=o("h2"),D=o("a"),ze=o("span"),w(V.$$.fragment),_t=p(),Te=o("span"),kt=r("Overview"),We=p(),pe=o("p"),gt=r("The BERT models trained on Japanese text."),Ue=p(),ce=o("p"),bt=r("There are models with two different tokenization methods:"),Ve=p(),A=o("ul"),L=o("li"),vt=r("Tokenize with MeCab and WordPiece. This requires some extra dependencies, "),F=o("a"),wt=r("fugashi"),$t=r(" which is a wrapper around "),H=o("a"),zt=r("MeCab"),Tt=r("."),Et=p(),Ee=o("li"),jt=r("Tokenize into characters."),Fe=p(),b=o("p"),yt=r("To use "),je=o("em"),qt=r("MecabTokenizer"),xt=r(", you should "),ye=o("code"),Bt=r('pip install transformers["ja"]'),Lt=r(" (or "),qe=o("code"),Pt=r('pip install -e .["ja"]'),Jt=r(` if you install
from source) to install dependencies.`),He=p(),S=o("p"),Ct=r("See "),K=o("a"),Dt=r("details on cl-tohoku repository"),At=r("."),Ke=p(),de=o("p"),St=r("Example of using a model with MeCab and WordPiece tokenization:"),Xe=p(),w(X.$$.fragment),Ge=p(),me=o("p"),It=r("Example of using a model with Character tokenization:"),Qe=p(),w(G.$$.fragment),Ye=p(),fe=o("p"),Mt=r("Tips:"),Ze=p(),ue=o("ul"),Q=o("li"),Ot=r("This implementation is the same as BERT, except for tokenization method. Refer to the "),he=o("a"),Nt=r("documentation of BERT"),Rt=r(" for more usage examples."),et=p(),I=o("p"),Wt=r("This model was contributed by "),Y=o("a"),Ut=r("cl-tohoku"),Vt=r("."),tt=p(),P=o("h2"),M=o("a"),xe=o("span"),w(Z.$$.fragment),Ft=p(),Be=o("span"),Ht=r("BertJapaneseTokenizer"),st=p(),u=o("div"),w(ee.$$.fragment),Kt=p(),Le=o("p"),Xt=r("Construct a BERT tokenizer for Japanese text."),Gt=p(),te=o("p"),Qt=r("This tokenizer inherits from "),_e=o("a"),Yt=r("PreTrainedTokenizer"),Zt=r(` which contains most of the main methods. Users should refer
to: this superclass for more information regarding those methods.`),es=p(),x=o("div"),w(se.$$.fragment),ts=p(),Pe=o("p"),ss=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),os=p(),oe=o("ul"),ke=o("li"),ns=r("single sequence: "),Je=o("code"),as=r("[CLS] X [SEP]"),rs=p(),ge=o("li"),is=r("pair of sequences: "),Ce=o("code"),ls=r("[CLS] A [SEP] B [SEP]"),ps=p(),O=o("div"),w(ne.$$.fragment),cs=p(),De=o("p"),ds=r("Converts a sequence of tokens (string) in a single string."),ms=p(),v=o("div"),w(ae.$$.fragment),fs=p(),Ae=o("p"),us=r("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),hs=p(),w(N.$$.fragment),_s=p(),J=o("p"),ks=r("If "),Se=o("code"),gs=r("token_ids_1"),bs=r(" is "),Ie=o("code"),vs=r("None"),ws=r(", this method only returns the first portion of the mask (0s)."),$s=p(),R=o("div"),w(re.$$.fragment),zs=p(),ie=o("p"),Ts=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Me=o("code"),Es=r("prepare_for_model"),js=r(" method."),this.h()},l(e){const l=ho('[data-svelte="svelte-1phssyn"]',document.head);h=n(l,"META",{name:!0,content:!0}),l.forEach(s),C=c(e),k=n(e,"H1",{class:!0});var le=a(k);_=n(le,"A",{id:!0,class:!0,href:!0});var Ls=a(_);y=n(Ls,"SPAN",{});var Ps=a(y);$(f.$$.fragment,Ps),Ps.forEach(s),Ls.forEach(s),q=c(le),$e=n(le,"SPAN",{});var Js=a($e);ht=i(Js,"BertJapanese"),Js.forEach(s),le.forEach(s),Re=c(e),B=n(e,"H2",{class:!0});var nt=a(B);D=n(nt,"A",{id:!0,class:!0,href:!0});var Cs=a(D);ze=n(Cs,"SPAN",{});var Ds=a(ze);$(V.$$.fragment,Ds),Ds.forEach(s),Cs.forEach(s),_t=c(nt),Te=n(nt,"SPAN",{});var As=a(Te);kt=i(As,"Overview"),As.forEach(s),nt.forEach(s),We=c(e),pe=n(e,"P",{});var Ss=a(pe);gt=i(Ss,"The BERT models trained on Japanese text."),Ss.forEach(s),Ue=c(e),ce=n(e,"P",{});var Is=a(ce);bt=i(Is,"There are models with two different tokenization methods:"),Is.forEach(s),Ve=c(e),A=n(e,"UL",{});var at=a(A);L=n(at,"LI",{});var be=a(L);vt=i(be,"Tokenize with MeCab and WordPiece. This requires some extra dependencies, "),F=n(be,"A",{href:!0,rel:!0});var Ms=a(F);wt=i(Ms,"fugashi"),Ms.forEach(s),$t=i(be," which is a wrapper around "),H=n(be,"A",{href:!0,rel:!0});var Os=a(H);zt=i(Os,"MeCab"),Os.forEach(s),Tt=i(be,"."),be.forEach(s),Et=c(at),Ee=n(at,"LI",{});var Ns=a(Ee);jt=i(Ns,"Tokenize into characters."),Ns.forEach(s),at.forEach(s),Fe=c(e),b=n(e,"P",{});var W=a(b);yt=i(W,"To use "),je=n(W,"EM",{});var Rs=a(je);qt=i(Rs,"MecabTokenizer"),Rs.forEach(s),xt=i(W,", you should "),ye=n(W,"CODE",{});var Ws=a(ye);Bt=i(Ws,'pip install transformers["ja"]'),Ws.forEach(s),Lt=i(W," (or "),qe=n(W,"CODE",{});var Us=a(qe);Pt=i(Us,'pip install -e .["ja"]'),Us.forEach(s),Jt=i(W,` if you install
from source) to install dependencies.`),W.forEach(s),He=c(e),S=n(e,"P",{});var rt=a(S);Ct=i(rt,"See "),K=n(rt,"A",{href:!0,rel:!0});var Vs=a(K);Dt=i(Vs,"details on cl-tohoku repository"),Vs.forEach(s),At=i(rt,"."),rt.forEach(s),Ke=c(e),de=n(e,"P",{});var Fs=a(de);St=i(Fs,"Example of using a model with MeCab and WordPiece tokenization:"),Fs.forEach(s),Xe=c(e),$(X.$$.fragment,e),Ge=c(e),me=n(e,"P",{});var Hs=a(me);It=i(Hs,"Example of using a model with Character tokenization:"),Hs.forEach(s),Qe=c(e),$(G.$$.fragment,e),Ye=c(e),fe=n(e,"P",{});var Ks=a(fe);Mt=i(Ks,"Tips:"),Ks.forEach(s),Ze=c(e),ue=n(e,"UL",{});var Xs=a(ue);Q=n(Xs,"LI",{});var it=a(Q);Ot=i(it,"This implementation is the same as BERT, except for tokenization method. Refer to the "),he=n(it,"A",{href:!0});var Gs=a(he);Nt=i(Gs,"documentation of BERT"),Gs.forEach(s),Rt=i(it," for more usage examples."),it.forEach(s),Xs.forEach(s),et=c(e),I=n(e,"P",{});var lt=a(I);Wt=i(lt,"This model was contributed by "),Y=n(lt,"A",{href:!0,rel:!0});var Qs=a(Y);Ut=i(Qs,"cl-tohoku"),Qs.forEach(s),Vt=i(lt,"."),lt.forEach(s),tt=c(e),P=n(e,"H2",{class:!0});var pt=a(P);M=n(pt,"A",{id:!0,class:!0,href:!0});var Ys=a(M);xe=n(Ys,"SPAN",{});var Zs=a(xe);$(Z.$$.fragment,Zs),Zs.forEach(s),Ys.forEach(s),Ft=c(pt),Be=n(pt,"SPAN",{});var eo=a(Be);Ht=i(eo,"BertJapaneseTokenizer"),eo.forEach(s),pt.forEach(s),st=c(e),u=n(e,"DIV",{class:!0});var g=a(u);$(ee.$$.fragment,g),Kt=c(g),Le=n(g,"P",{});var to=a(Le);Xt=i(to,"Construct a BERT tokenizer for Japanese text."),to.forEach(s),Gt=c(g),te=n(g,"P",{});var ct=a(te);Qt=i(ct,"This tokenizer inherits from "),_e=n(ct,"A",{href:!0});var so=a(_e);Yt=i(so,"PreTrainedTokenizer"),so.forEach(s),Zt=i(ct,` which contains most of the main methods. Users should refer
to: this superclass for more information regarding those methods.`),ct.forEach(s),es=c(g),x=n(g,"DIV",{class:!0});var ve=a(x);$(se.$$.fragment,ve),ts=c(ve),Pe=n(ve,"P",{});var oo=a(Pe);ss=i(oo,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),oo.forEach(s),os=c(ve),oe=n(ve,"UL",{});var dt=a(oe);ke=n(dt,"LI",{});var ys=a(ke);ns=i(ys,"single sequence: "),Je=n(ys,"CODE",{});var no=a(Je);as=i(no,"[CLS] X [SEP]"),no.forEach(s),ys.forEach(s),rs=c(dt),ge=n(dt,"LI",{});var qs=a(ge);is=i(qs,"pair of sequences: "),Ce=n(qs,"CODE",{});var ao=a(Ce);ls=i(ao,"[CLS] A [SEP] B [SEP]"),ao.forEach(s),qs.forEach(s),dt.forEach(s),ve.forEach(s),ps=c(g),O=n(g,"DIV",{class:!0});var mt=a(O);$(ne.$$.fragment,mt),cs=c(mt),De=n(mt,"P",{});var ro=a(De);ds=i(ro,"Converts a sequence of tokens (string) in a single string."),ro.forEach(s),mt.forEach(s),ms=c(g),v=n(g,"DIV",{class:!0});var U=a(v);$(ae.$$.fragment,U),fs=c(U),Ae=n(U,"P",{});var io=a(Ae);us=i(io,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),io.forEach(s),hs=c(U),$(N.$$.fragment,U),_s=c(U),J=n(U,"P",{});var we=a(J);ks=i(we,"If "),Se=n(we,"CODE",{});var lo=a(Se);gs=i(lo,"token_ids_1"),lo.forEach(s),bs=i(we," is "),Ie=n(we,"CODE",{});var po=a(Ie);vs=i(po,"None"),po.forEach(s),ws=i(we,", this method only returns the first portion of the mask (0s)."),we.forEach(s),U.forEach(s),$s=c(g),R=n(g,"DIV",{class:!0});var ft=a(R);$(re.$$.fragment,ft),zs=c(ft),ie=n(ft,"P",{});var ut=a(ie);Ts=i(ut,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Me=n(ut,"CODE",{});var co=a(Me);Es=i(co,"prepare_for_model"),co.forEach(s),js=i(ut," method."),ut.forEach(s),ft.forEach(s),g.forEach(s),this.h()},h(){m(h,"name","hf:doc:metadata"),m(h,"content",JSON.stringify(wo)),m(_,"id","bertjapanese"),m(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_,"href","#bertjapanese"),m(k,"class","relative group"),m(D,"id","overview"),m(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(D,"href","#overview"),m(B,"class","relative group"),m(F,"href","https://github.com/polm/fugashi"),m(F,"rel","nofollow"),m(H,"href","https://taku910.github.io/mecab/"),m(H,"rel","nofollow"),m(K,"href","https://github.com/cl-tohoku/bert-japanese"),m(K,"rel","nofollow"),m(he,"href","bert"),m(Y,"href","https://huggingface.co/cl-tohoku"),m(Y,"rel","nofollow"),m(M,"id","transformers.BertJapaneseTokenizer"),m(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(M,"href","#transformers.BertJapaneseTokenizer"),m(P,"class","relative group"),m(_e,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,l){t(document.head,h),d(e,C,l),d(e,k,l),t(k,_),t(_,y),z(f,y,null),t(k,q),t(k,$e),t($e,ht),d(e,Re,l),d(e,B,l),t(B,D),t(D,ze),z(V,ze,null),t(B,_t),t(B,Te),t(Te,kt),d(e,We,l),d(e,pe,l),t(pe,gt),d(e,Ue,l),d(e,ce,l),t(ce,bt),d(e,Ve,l),d(e,A,l),t(A,L),t(L,vt),t(L,F),t(F,wt),t(L,$t),t(L,H),t(H,zt),t(L,Tt),t(A,Et),t(A,Ee),t(Ee,jt),d(e,Fe,l),d(e,b,l),t(b,yt),t(b,je),t(je,qt),t(b,xt),t(b,ye),t(ye,Bt),t(b,Lt),t(b,qe),t(qe,Pt),t(b,Jt),d(e,He,l),d(e,S,l),t(S,Ct),t(S,K),t(K,Dt),t(S,At),d(e,Ke,l),d(e,de,l),t(de,St),d(e,Xe,l),z(X,e,l),d(e,Ge,l),d(e,me,l),t(me,It),d(e,Qe,l),z(G,e,l),d(e,Ye,l),d(e,fe,l),t(fe,Mt),d(e,Ze,l),d(e,ue,l),t(ue,Q),t(Q,Ot),t(Q,he),t(he,Nt),t(Q,Rt),d(e,et,l),d(e,I,l),t(I,Wt),t(I,Y),t(Y,Ut),t(I,Vt),d(e,tt,l),d(e,P,l),t(P,M),t(M,xe),z(Z,xe,null),t(P,Ft),t(P,Be),t(Be,Ht),d(e,st,l),d(e,u,l),z(ee,u,null),t(u,Kt),t(u,Le),t(Le,Xt),t(u,Gt),t(u,te),t(te,Qt),t(te,_e),t(_e,Yt),t(te,Zt),t(u,es),t(u,x),z(se,x,null),t(x,ts),t(x,Pe),t(Pe,ss),t(x,os),t(x,oe),t(oe,ke),t(ke,ns),t(ke,Je),t(Je,as),t(oe,rs),t(oe,ge),t(ge,is),t(ge,Ce),t(Ce,ls),t(u,ps),t(u,O),z(ne,O,null),t(O,cs),t(O,De),t(De,ds),t(u,ms),t(u,v),z(ae,v,null),t(v,fs),t(v,Ae),t(Ae,us),t(v,hs),z(N,v,null),t(v,_s),t(v,J),t(J,ks),t(J,Se),t(Se,gs),t(J,bs),t(J,Ie),t(Ie,vs),t(J,ws),t(u,$s),t(u,R),z(re,R,null),t(R,zs),t(R,ie),t(ie,Ts),t(ie,Me),t(Me,Es),t(ie,js),ot=!0},p(e,[l]){const le={};l&2&&(le.$$scope={dirty:l,ctx:e}),N.$set(le)},i(e){ot||(T(f.$$.fragment,e),T(V.$$.fragment,e),T(X.$$.fragment,e),T(G.$$.fragment,e),T(Z.$$.fragment,e),T(ee.$$.fragment,e),T(se.$$.fragment,e),T(ne.$$.fragment,e),T(ae.$$.fragment,e),T(N.$$.fragment,e),T(re.$$.fragment,e),ot=!0)},o(e){E(f.$$.fragment,e),E(V.$$.fragment,e),E(X.$$.fragment,e),E(G.$$.fragment,e),E(Z.$$.fragment,e),E(ee.$$.fragment,e),E(se.$$.fragment,e),E(ne.$$.fragment,e),E(ae.$$.fragment,e),E(N.$$.fragment,e),E(re.$$.fragment,e),ot=!1},d(e){s(h),e&&s(C),e&&s(k),j(f),e&&s(Re),e&&s(B),j(V),e&&s(We),e&&s(pe),e&&s(Ue),e&&s(ce),e&&s(Ve),e&&s(A),e&&s(Fe),e&&s(b),e&&s(He),e&&s(S),e&&s(Ke),e&&s(de),e&&s(Xe),j(X,e),e&&s(Ge),e&&s(me),e&&s(Qe),j(G,e),e&&s(Ye),e&&s(fe),e&&s(Ze),e&&s(ue),e&&s(et),e&&s(I),e&&s(tt),e&&s(P),j(Z),e&&s(st),e&&s(u),j(ee),j(se),j(ne),j(ae),j(N),j(re)}}}const wo={local:"bertjapanese",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertJapaneseTokenizer",title:"BertJapaneseTokenizer"}],title:"BertJapanese"};function $o(Ne){return _o(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qo extends mo{constructor(h){super();fo(this,h,$o,vo,uo,{})}}export{qo as default,wo as metadata};
